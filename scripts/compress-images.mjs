#!/usr/bin/env node
/**
 * Re-encode oversized WebP files under public/images to fit the weight budget
 * (hero 200KB, other 100KB; see scripts/lib/image-findings.mjs) without changing
 * content, filename, aspect ratio or, where possible, pixel size.
 *
 *   node scripts/compress-images.mjs            dry run: prints what would change
 *   node scripts/compress-images.mjs --write    rewrite the files in place
 *
 * Per file it finds the highest WebP quality (floor 70) that fits the budget.
 * A 4:3 file wider than 1600 px is first scaled to 1600. Only if the floor still
 * misses the budget does it step the width down (never below 1200 px for 4:3 or
 * 1280 px for 16:9). The 12 owner-approved renders are never resized
 * (the renders get quality only, floor 68); a hero wider than 1920 px is scaled to 1920, and may step down to 1672 px. A file that still misses the budget
 * is recorded in scripts/lib/image-weight-waivers.json, which verify-images.mjs
 * reads. Files already within budget are untouched. The originals stay in git history.
 * Uses `sharp`, which ships with Next.js (not a direct dependency of this repo).
 */
import fs from 'node:fs'
import path from 'node:path'
import os from 'node:os'
import sharp from 'sharp'
import { auditSite, publicFiles } from './lib/image-audit.mjs'
import { summarize, BUDGET } from './lib/image-findings.mjs'

const WRITE = process.argv.includes('--write')
const FLOOR = 62
const pages = auditSite('out')
const files = publicFiles('public')
const s = summarize(pages, files)
const targets = s.overBudget.filter((f) => f.path.endsWith('.webp'))

/** The 12 owner-approved render files (1448 x 1086): quality only, never resized (DEC-145). */
const APPROVED_RENDERS = new Set(files.filter((f) => f.width === 1448 && f.height === 1086 && /^images\/shared\//.test(f.path)).map((f) => f.path))
const SOURCE_MAX = 1600 // a 4:3 file wider than this is oversized for any card or split image
const FLOOR_OK = 70
let before = 0
let after = 0
const waivers = {}
async function work(t) {
  const rel = t.path.replace(/^images\//, '')
  const abs = path.join('public/images', rel)
  const budget = t.hero ? BUDGET.hero : BUDGET.other
  const src = fs.readFileSync(abs)
  const meta = await sharp(src).metadata()
  const wide = meta.width / meta.height > 1.5
  const approved = APPROVED_RENDERS.has(t.path)
  const HERO_MAX = 1920 // a full-bleed hero is never rendered wider than this
  const floorW = approved ? meta.width : t.hero ? Math.min(meta.width, 1672) : wide ? 1280 : 1200
  const startW = approved ? meta.width : wide ? Math.min(meta.width, t.hero ? HERO_MAX : 1920) : Math.min(meta.width, SOURCE_MAX)
  const floorQ = approved ? 68 : FLOOR_OK
  const enc = (w, q, effort = 3) => sharp(src).resize({ width: w, withoutEnlargement: true }).webp({ quality: q, effort, smartSubsample: true }).toBuffer()
  let best = null
  let width = startW
  while (!best) {
    let lo = floorQ, hi = 90, hit = null
    while (lo <= hi) {
      const mid = (lo + hi) >> 1
      const buf = await enc(width, mid)
      if (buf.length <= budget) { hit = { q: mid, width }; lo = mid + 1 } else hi = mid - 1
    }
    if (hit) { best = { ...hit, buf: await enc(hit.width, hit.q, 6) }; break }
    const next = Math.round(width * 0.9)
    if (next < floorW) { best = { buf: await enc(width, floorQ, 6), q: floorQ, width, overBudget: true }; break }
    width = next
  }
  const keep = best.buf.length < src.length
  const finalBytes = keep ? best.buf.length : src.length
  before += src.length
  after += finalBytes
  if (finalBytes > budget) waivers[t.path] = { bytes: finalBytes, budget, reason: `at the quality floor (q${floorQ}${approved ? ', approved render, not resized' : t.hero ? ', hero, not resized' : ''}); a smaller source export is needed to reach the budget` }
  console.log(`${keep ? (WRITE ? 'write' : 'would') : 'skip '} ${rel} ${Math.round(src.length / 1024)}KB -> ${Math.round(finalBytes / 1024)}KB q${best.q} ${meta.width}x${meta.height}${best.width !== meta.width ? ' -> ' + best.width : ''}${finalBytes > budget ? ' OVER' : ''}`)
  if (WRITE && keep) fs.writeFileSync(abs, best.buf)
}
const queue = [...targets]
const WORKERS = Math.min(8, os.availableParallelism())
await Promise.all(Array.from({ length: WORKERS }, async () => { for (let t; (t = queue.shift()); ) await work(t) }))
if (WRITE) fs.writeFileSync('scripts/lib/image-weight-waivers.json', JSON.stringify(waivers, null, 1) + '\n')
console.log(`${targets.length} files, ${(before / 1e6).toFixed(1)}MB -> ${(after / 1e6).toFixed(1)}MB, ${Object.keys(waivers).length} still over budget`)
