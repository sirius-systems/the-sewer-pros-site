#!/usr/bin/env node
/**
 * OCR every published image and record any legible text.
 *
 *   npm i --no-save tesseract.js@5     (not a project dependency)
 *   node scripts/ocr-images.mjs
 *
 * Walks public/images (PNG, WebP and JPEG by OCR, SVG by reading its text nodes; originals only, not the generated -640w / -1280w variants),
 * runs tesseract on each file, and writes scripts/lib/image-ocr.json:
 *   { "images/x.webp": { sha256, words: [{ text, confidence }] } }
 * keeping only words of 3 or more letters or digits at confidence 70 or higher.
 * A file whose sha256 is unchanged is not read again. scripts/verify-images.mjs
 * fails on any image with words that is not listed in scripts/lib/image-ocr-waivers.json.
 * Images are never edited.
 */
import fs from 'node:fs'
import path from 'node:path'
import os from 'node:os'
import crypto from 'node:crypto'
import sharp from 'sharp'
import { createWorker } from 'tesseract.js'

const OUT = 'scripts/lib/image-ocr.json'
const prev = fs.existsSync(OUT) ? JSON.parse(fs.readFileSync(OUT, 'utf8')) : {}
const files = []
const walk = (d) => {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const f = path.join(d, e.name)
    if (e.isDirectory()) walk(f)
    else if (/\.(webp|png|jpe?g|svg)$/i.test(e.name) && !/-(640|960|1280)w\.webp$/.test(e.name)) files.push(f)
  }
}
walk('public/images')

const result = {}
const queue = [...files].sort()
const MIN_CONF = 70
async function run() {
  const worker = await createWorker('eng')
  for (let f; (f = queue.shift()); ) {
    const rel = path.relative('public', f).replaceAll('\\', '/')
    const buf = fs.readFileSync(f)
    const sha = crypto.createHash('sha256').update(buf).digest('hex')
    if (prev[rel]?.sha256 === sha) { result[rel] = prev[rel]; continue }
    if (/\.svg$/i.test(f)) {
      // Vector text is real text: read the text nodes instead of rasterising.
      const nodes = [...buf.toString('utf8').matchAll(/<(?:text|tspan|title)[^>]*>([^<]+)/g)].map((m) => m[1].trim()).filter(Boolean)
      const words = nodes.flatMap((t) => t.split(/\s+/)).filter((w) => /[A-Za-z0-9]{3,}/.test(w)).map((w) => ({ text: w.replace(/^[^A-Za-z0-9]+|[^A-Za-z0-9]+$/g, ''), confidence: 100 }))
      result[rel] = { sha256: sha, words, svgText: nodes }
      console.log(`${words.length ? 'TEXT' : 'none'} ${rel} (svg text)`)
      continue
    }
    const png = await sharp(buf).png().toBuffer()
    const { data } = await worker.recognize(png)
    const words = (data.words || [])
      .filter((w) => w.confidence >= MIN_CONF && /[A-Za-z0-9]{3,}/.test(w.text))
      .map((w) => ({ text: w.text.replace(/^[^A-Za-z0-9]+|[^A-Za-z0-9]+$/g, ''), confidence: Math.round(w.confidence) }))
    result[rel] = { sha256: sha, words }
    console.log(`${words.length ? 'TEXT' : 'none'} ${rel}${words.length ? ' :: ' + words.map((w) => w.text).join(' ') : ''}`)
  }
  await worker.terminate()
}
await Promise.all(Array.from({ length: Math.min(4, os.availableParallelism()) }, run))
const sorted = Object.fromEntries(Object.entries(result).sort(([a], [b]) => a.localeCompare(b)))
fs.writeFileSync(OUT, JSON.stringify(sorted, null, 1) + '\n')
const hits = Object.entries(sorted).filter(([, v]) => v.words.length)
console.log(`${files.length} images, ${hits.length} with legible text`)
