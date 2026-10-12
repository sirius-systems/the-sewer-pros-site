#!/usr/bin/env node
/**
 * Count image placeholder boxes in the production build.
 *
 * Parses out/**\/index.html and counts boxes from BOTH markups:
 *   A. the "Image slot: <id>" box (location hubs, service + location pages)
 *   B. the dashed ImagePlaceholder component with an SVG (core service pages)
 * It reads only the rendered HTML (not the page data repeated inside the
 * script payload) and docs/image-shot-list.md (to map each box to a file).
 * It prints totals by page type, by slot id and by shot-list file, and
 * writes nothing.
 *
 * Usage:
 *   npm run build
 *   node scripts/count-placeholders.mjs [--out=out] [--expect=537:162] [--json]
 *
 * With --expect=<boxes>:<pages> the exit code is 1 if the totals differ.
 */
import fs from 'node:fs'
import path from 'node:path'

const arg = (name) => {
  const hit = process.argv.find((a) => a.startsWith(`--${name}=`))
  return hit ? hit.slice(name.length + 3) : undefined
}
const OUT = arg('out') ?? 'out'
const EXPECT = arg('expect')
const AS_JSON = process.argv.includes('--json')
const SHOT_LIST = 'docs/image-shot-list.md'

if (!fs.existsSync(OUT)) {
  console.error(`No build output at ${OUT}/. Run the production build first.`)
  process.exit(2)
}

const BOX_A = /<p class="font-semibold text-foreground">Image slot: (?:<!-- -->)?([^<]+)<\/p><p>([^<]*)(?:<!-- --> - <!-- -->([^<]*))?<\/p>(?:<p>([^<]*)<\/p>)?/g
const BOX_B = /<div class="[^"]*border-dashed[^"]*"[^>]*><svg[\s\S]*?<\/svg>([\s\S]*?)<\/div>/g

const clean = (s) =>
  s
    .replace(/<!-- -->/g, '')
    .replace(/&amp;/g, '&')
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/\s+/g, ' ')
    .trim()
const norm = (s) => clean(s).toLowerCase().replace(/[.,]+$/, '')

/* ---- shot-list: wording -> files, file id -> filename and type ---- */
const wordingToFiles = new Map()
const fileInfo = new Map()
if (fs.existsSync(SHOT_LIST)) {
  for (const line of fs.readFileSync(SHOT_LIST, 'utf8').split(/\r?\n/)) {
    const cols = line.split('|').map((c) => c.trim())
    if (/^IMG-\d+$/.test(cols[1] ?? '') && cols.length > 9) {
      fileInfo.set(cols[1], { filename: cols[2], type: cols[8] })
    } else if (/^\d+$/.test(cols[1] ?? '') && /^(IMG-\d+)(, IMG-\d+)*$/.test(cols[3] ?? '')) {
      wordingToFiles.set(norm(cols[2]), cols[3].split(', '))
    }
  }
}
const marketIndex = { 'st-louis-mo': 0, 'san-diego-ca': 1, 'las-vegas-nv': 2 }

const pageType = (parts) => {
  if (parts.length === 0) return 'other'
  if (parts[0] === 'locations') return parts.length === 3 ? 'location hub' : parts.length === 4 ? 'service + location' : 'locations index'
  if (parts[0] === 'services') return parts.length === 2 ? 'core service' : 'services hub'
  if (parts[0] === 'for') return 'audience'
  return 'other'
}

const pages = []
const walk = (dir) => {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const f = path.join(dir, e.name)
    if (e.isDirectory()) walk(f)
    else if (e.name === 'index.html') {
      const html = fs.readFileSync(f, 'utf8')
      const parts = path.relative(OUT, path.dirname(f)).split(path.sep).filter(Boolean)
      const boxes = []
      for (const m of html.matchAll(BOX_A)) boxes.push({ id: clean(m[1]), shot: clean(m[3] ?? m[4] ?? ''), markup: 'A' })
      for (const m of html.matchAll(BOX_B)) {
        const text = clean(m[1].replace(/<[^>]+>/g, ' | '))
          .split('|')
          .map((s) => s.trim())
          .filter(Boolean)
        const file = text.find((t) => /\.webp$/i.test(t)) ?? text[text.length - 1] ?? 'unknown'
        boxes.push({ id: file, shot: text[0] ?? '', markup: 'B' })
      }
      pages.push({ route: '/' + parts.join('/') + (parts.length ? '/' : ''), parts, type: pageType(parts), boxes })
    }
  }
}
walk(OUT)

const byType = {}
const bySlot = {}
const byFile = {}
const unmapped = {}
let total = 0
let pagesWithBoxes = 0
for (const p of pages) {
  byType[p.type] ??= { pages: 0, pagesWithBoxes: 0, boxes: 0 }
  byType[p.type].pages++
  if (p.boxes.length) {
    byType[p.type].pagesWithBoxes++
    pagesWithBoxes++
  }
  const market = p.parts[0] === 'locations' ? p.parts[1] : undefined
  for (const b of p.boxes) {
    total++
    byType[p.type].boxes++
    bySlot[b.id] ??= { boxes: 0, pages: new Set(), markup: b.markup }
    bySlot[b.id].boxes++
    bySlot[b.id].pages.add(p.route)
    const files = wordingToFiles.get(norm(b.shot))
    let key
    if (files === undefined) key = undefined
    else if (files.length === 1) key = files[0]
    else key = files[marketIndex[market] ?? 0]
    if (key === undefined) {
      unmapped[b.id] = (unmapped[b.id] ?? 0) + 1
    } else {
      byFile[key] ??= { boxes: 0, pages: new Set() }
      byFile[key].boxes++
      byFile[key].pages.add(p.route)
    }
  }
}

const unmappedTotal = Object.values(unmapped).reduce((a, n) => a + n, 0)
const result = {
  totalBoxes: total,
  pagesWithBoxes,
  pagesInBuild: pages.length,
  byPageType: byType,
  bySlotId: Object.fromEntries(Object.entries(bySlot).sort((a, b) => b[1].boxes - a[1].boxes || a[0].localeCompare(b[0])).map(([k, v]) => [k, { boxes: v.boxes, pages: v.pages.size }])),
  byShotListFile: Object.fromEntries(Object.entries(byFile).sort((a, b) => a[0].localeCompare(b[0], undefined, { numeric: true })).map(([k, v]) => [k, { boxes: v.boxes, pages: v.pages.size, filename: fileInfo.get(k)?.filename }])),
  notInAnyShotListFile: { boxes: unmappedTotal, slotIds: unmapped },
}

if (AS_JSON) {
  console.log(JSON.stringify(result, null, 2))
} else {
  console.log(`Placeholder boxes in ${OUT}/: ${total} on ${pagesWithBoxes} of ${pages.length} pages\n`)
  console.log('By page type')
  for (const [t, v] of Object.entries(byType)) console.log(`  ${t.padEnd(20)} pages ${String(v.pages).padStart(3)}  with boxes ${String(v.pagesWithBoxes).padStart(3)}  boxes ${String(v.boxes).padStart(4)}`)
  console.log(`\nBy slot id (${Object.keys(bySlot).length} ids)`)
  for (const [id, v] of Object.entries(result.bySlotId)) console.log(`  ${String(v.boxes).padStart(4)} boxes  ${String(v.pages).padStart(3)} pages  ${id}`)
  console.log('\nBy shot-list file (docs/image-shot-list.md)')
  for (const [k, v] of Object.entries(result.byShotListFile)) console.log(`  ${k}  ${String(v.boxes).padStart(4)} boxes  ${String(v.pages).padStart(3)} pages  ${v.filename ?? ''}`)
  console.log(`\nNot mapped to any shot-list file: ${unmappedTotal} boxes`)
  for (const [id, n] of Object.entries(unmapped)) console.log(`  ${String(n).padStart(4)}  ${id}`)
}

if (EXPECT) {
  const [eb, ep] = EXPECT.split(':').map(Number)
  if (eb !== total || ep !== pagesWithBoxes) {
    console.error(`\nExpected ${eb} boxes on ${ep} pages, found ${total} on ${pagesWithBoxes}.`)
    process.exit(1)
  }
}
