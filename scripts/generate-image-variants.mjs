#!/usr/bin/env node
/**
 * Responsive WebP variants for the static export (no image optimizer under
 * `output: 'export'`, so variants are made ahead of time).
 *
 *   node scripts/generate-image-variants.mjs
 *
 * For every WebP image a built page references through <img> (read from out/),
 * writes `<name>-640w.webp`, `-960w.webp` and `-1280w.webp` beside the original, but
 * only for widths clearly smaller than the original (original wider than
 * 1.15x the variant). The original is never touched and stays the largest
 * variant, which keeps the 12 owner-approved renders byte-identical. Writes
 * lib/image-variants.json ({ "/images/x.webp": [640, 1280] }) for
 * lib/image-loader.ts. Existing variants are rebuilt from the original each run.
 * Uses `sharp`, which ships with Next.js.
 */
import fs from 'node:fs'
import path from 'node:path'
import os from 'node:os'
import sharp from 'sharp'
import { auditSite } from './lib/image-audit.mjs'

const WIDTHS = [640, 960, 1280]
const QUALITY = 74
const isVariant = (p) => /-(640|960|1280)w\.webp$/.test(p)

const pages = auditSite('out')
const originals = new Set()
for (const p of pages) for (const i of p.images) {
  if (i.kind !== 'img' || !i.resolved || !i.exists) continue
  if (!/\.webp$/.test(i.resolved) || isVariant(i.resolved) || /\/brand\/logos\//.test(i.resolved)) continue
  originals.add(i.resolved)
}

const manifest = {}
let made = 0
let bytes = 0
const queue = [...originals].sort()
async function work(rel) {
  const abs = path.join('public', rel)
  if (!fs.existsSync(abs)) return // stale out/ entry (renamed or moved file); rebuild and rerun
  const meta = await sharp(abs).metadata()
  const widths = WIDTHS.filter((w) => meta.width > w * 1.15)
  for (const w of widths) {
    const out = abs.replace(/\.webp$/, `-${w}w.webp`)
    const buf = await sharp(abs).resize({ width: w }).webp({ quality: QUALITY, effort: 5, smartSubsample: true }).toBuffer()
    fs.writeFileSync(out, buf)
    made++
    bytes += buf.length
  }
  if (widths.length) manifest['/' + rel] = widths
}
await Promise.all(Array.from({ length: Math.min(8, os.availableParallelism()) }, async () => { for (let r; (r = queue.shift()); ) await work(r) }))

const sorted = Object.fromEntries(Object.entries(manifest).sort(([a], [b]) => a.localeCompare(b)))
fs.writeFileSync('lib/image-variants.json', JSON.stringify(sorted, null, 1) + '\n')
console.log(`${originals.size} originals, ${Object.keys(sorted).length} with variants, ${made} files, ${(bytes / 1e6).toFixed(1)} MB`)
