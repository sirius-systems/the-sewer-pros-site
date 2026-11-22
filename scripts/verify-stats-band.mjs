/**
 * Post-build check for the experience counter strip (DEC-152).
 *
 * Reads the static export in `out/` (run `npm run build` first). Every page that
 * renders `#experience-counters` must show the company-wide figures from
 * `data/business/organization.ts` (`inspectionVolume`, `foundingYear`), except for
 * the intentional per-market handling below (DEC-071, DEC-152). The exceptions are
 * listed in the output so a change to them is visible.
 *
 *   node scripts/verify-stats-band.mjs
 */
import fs from 'node:fs'
import path from 'node:path'

const ROOT = path.resolve('out')
const org = fs.readFileSync(path.resolve('data/business/organization.ts'), 'utf8')
const num = (re) => Number(((org.match(re) || [])[1] || '').replace(/_/g, ''))
const FOUNDING = num(/export const foundingYear = (\d+)/)
const TOTAL = num(/total: ([\d_]+)/)
const PER_YEAR = num(/perYear: ([\d_]+)/)

let failures = 0
const check = (name, ok, detail = '') => {
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}${ok || detail === '' ? '' : `: ${detail}`}`)
  if (!ok) failures += 1
}
check('organization.ts figures were read', FOUNDING > 0 && TOTAL > 0 && PER_YEAR > 0, `${FOUNDING} ${TOTAL} ${PER_YEAR}`)

// Intentional per-market handling (DEC-071). Everything else shows the company year.
const SD_LOCATION = /^\/locations\/san-diego-ca\/[^/]+\/$/ // San Diego location pages: San Diego's own year
const SD_YEAR = 2015
const LV_NO_YEAR = [/^\/las-vegas-nv\/$/, /^\/locations\/las-vegas-nv\/[^/]+\/$/] // Las Vegas hub and location pages: no year

const fmt = (n) => n.toLocaleString('en-US')
const pages = []
function walk(d) {
  for (const f of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, f.name)
    if (f.isDirectory()) walk(p)
    else if (f.name === 'index.html') {
      const h = fs.readFileSync(p, 'utf8').replace(/<!-- -->/g, '')
      const s0 = h.indexOf('id="experience-counters"')
      if (s0 < 0) continue
      const band = h.slice(s0, h.indexOf('</aside>', s0))
      const rel = path.relative(ROOT, path.dirname(p)).split(path.sep).join('/')
      pages.push({ url: '/' + (rel ? rel + '/' : ''), band })
    }
  }
}
walk(ROOT)
check('pages rendering the strip were found', pages.length > 0, String(pages.length))

const exceptions = { sd: [], lv: [] }
const bad = []
for (const { url, band } of pages) {
  const since = (band.match(/Since (\d{4})/) || [])[1]
  let expected = String(FOUNDING)
  if (SD_LOCATION.test(url)) {
    expected = String(SD_YEAR)
    exceptions.sd.push(url)
  } else if (LV_NO_YEAR.some((re) => re.test(url))) {
    expected = undefined
    exceptions.lv.push(url)
  }
  if (!band.includes(`${fmt(TOTAL)}+`) || !band.includes(`${fmt(PER_YEAR)}+`)) bad.push(`${url}: figures differ from organization.ts`)
  if (since !== expected) bad.push(`${url}: shows ${since ?? 'no year'}, expected ${expected ?? 'no year'}`)
}
check(`every strip shows ${fmt(TOTAL)}+ and ${fmt(PER_YEAR)}+ and the expected year (${pages.length} pages)`, bad.length === 0, bad.slice(0, 5).join(' | '))
console.log(`NOTE  per-market exception: ${exceptions.sd.length} San Diego location pages show Since ${SD_YEAR} (DEC-071)`)
console.log(`NOTE  per-market exception: ${exceptions.lv.length} Las Vegas hub and location pages show no year (DEC-071)`)
console.log(`NOTE  all other ${pages.length - exceptions.sd.length - exceptions.lv.length} pages show Since ${FOUNDING}`)

if (failures > 0) {
  console.log(`\n${failures} check(s) failed.`)
  process.exit(1)
}
console.log('\nAll checks passed.')
