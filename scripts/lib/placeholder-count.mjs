/**
 * Shared placeholder counting for scripts/count-placeholders.mjs and
 * scripts/report-unfilled-slots.mjs.
 *
 * Parses out/**\/index.html and counts boxes from BOTH markups:
 *   A. the "Image slot: <id>" box (location hubs, service + location pages)
 *   B. the dashed ImagePlaceholder component with an SVG (core service pages)
 * It reads only the rendered HTML, never the page data repeated inside the
 * script payload.
 */
import fs from 'node:fs'
import path from 'node:path'

const BOX_A = /<p class="font-semibold text-foreground">Image slot: (?:<!-- -->)?([^<]+)<\/p><p>([^<]*)(?:<!-- --> - <!-- -->([^<]*))?<\/p>(?:<p>([^<]*)<\/p>)?/g
const BOX_B = /<div class="[^"]*border-dashed[^"]*"[^>]*><svg[\s\S]*?<\/svg>([\s\S]*?)<\/div>/g

export const clean = (s) =>
  s
    .replace(/<!-- -->/g, '')
    .replace(/&amp;/g, '&')
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/\s+/g, ' ')
    .trim()
export const norm = (s) => clean(s).toLowerCase().replace(/[.,]+$/, '')

export const pageType = (parts) => {
  if (parts.length === 0) return 'other'
  if (parts[0] === 'locations') return parts.length === 3 ? 'location hub' : parts.length === 4 ? 'service + location' : 'locations index'
  if (parts[0] === 'services') return parts.length === 2 ? 'core service' : 'services hub'
  if (parts[0] === 'for') return 'audience'
  return 'other'
}

/** Returns one entry per built page: { route, parts, type, boxes: [{ id, shot, markup }] }. */
export function readPages(outDir) {
  const pages = []
  const walk = (dir) => {
    for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
      const f = path.join(dir, e.name)
      if (e.isDirectory()) walk(f)
      else if (e.name === 'index.html') {
        const html = fs.readFileSync(f, 'utf8')
        const parts = path.relative(outDir, path.dirname(f)).split(path.sep).filter(Boolean)
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
  walk(outDir)
  return pages
}

/** Pages that draw at least one box, with their counts and the grand total. */
export function summarize(pages) {
  const withBoxes = pages.filter((p) => p.boxes.length > 0)
  return {
    pagesInBuild: pages.length,
    pagesWithBoxes: withBoxes.length,
    totalBoxes: withBoxes.reduce((a, p) => a + p.boxes.length, 0),
    list: withBoxes.map((p) => ({ route: p.route, type: p.type, count: p.boxes.length })).sort((a, b) => a.route.localeCompare(b.route)),
  }
}
