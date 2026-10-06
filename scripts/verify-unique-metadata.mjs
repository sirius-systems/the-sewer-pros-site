/**
 * Unique title / meta description check over the static export in `out/`.
 *
 *   node scripts/verify-unique-metadata.mjs
 *
 * For every page in the approved registry that has an exported index.html:
 *   - `<title>` and `<meta name="description">` must be present,
 *   - indexable pages must not share a title with another indexable page,
 *   - indexable pages must not share a description with another indexable page,
 *   - indexable pages must carry a canonical link equal to their own pathname.
 * Comparison ignores case and whitespace. Run after `next build`.
 */
import fs from 'node:fs'
import path from 'node:path'

const OUT = path.resolve('out')
const src = fs.readFileSync(path.resolve('data/pages/approved-pages.ts'), 'utf8')
const pages = []
for (const b of src.split(/\n  \{\n/).slice(1)) {
  const id = (b.match(/id: '([^']+)'/) || [])[1]
  const p = (b.match(/toPathname\('([^']+)'\)/) || [])[1]
  const indexable = /indexable: true/.test(b)
  if (id && p) pages.push({ id, p, indexable })
}

const decode = (s) =>
  s
    .replace(/&amp;/g, '&')
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
const norm = (s) => decode(s).replace(/\s+/g, ' ').trim().toLowerCase()

const titles = new Map()
const descs = new Map()
let failures = 0
let checked = 0
const fail = (msg) => {
  failures += 1
  console.log(`FAIL  ${msg}`)
}

for (const pg of pages) {
  const file = path.join(OUT, pg.p === '/' ? '' : pg.p, 'index.html')
  if (!fs.existsSync(file)) continue
  checked += 1
  const html = fs.readFileSync(file, 'utf8')
  const title = (html.match(/<title[^>]*>([^<]*)<\/title>/) || [])[1]
  const desc = (html.match(/<meta name="description" content="([^"]*)"/) || [])[1]
  if (!title) fail(`${pg.p}: missing <title>`)
  if (!desc) fail(`${pg.p}: missing meta description`)
  if (!pg.indexable) continue
  if (title) {
    const k = norm(title)
    titles.set(k, [...(titles.get(k) || []), pg.p])
  }
  if (desc) {
    const k = norm(desc)
    descs.set(k, [...(descs.get(k) || []), pg.p])
  }
  const canon = (html.match(/<link rel="canonical" href="([^"]*)"/) || [])[1]
  if (!canon) fail(`${pg.p}: indexable page has no canonical link`)
  else {
    const cp = new URL(canon).pathname
    const want = pg.p.endsWith('/') ? pg.p : `${pg.p}/`
    if (cp !== want && cp !== pg.p) fail(`${pg.p}: canonical points to ${cp}`)
  }
}
for (const [k, list] of titles) if (list.length > 1) fail(`duplicate title "${k}": ${list.join(', ')}`)
for (const [k, list] of descs) if (list.length > 1) fail(`duplicate description "${k.slice(0, 80)}...": ${list.join(', ')}`)

console.log(`INFO  ${checked} pages checked, ${titles.size} unique titles, ${descs.size} unique descriptions`)
console.log(failures === 0 ? 'All indexable pages have unique titles and descriptions.' : `${failures} problem(s) found.`)
process.exit(failures === 0 ? 0 : 1)
