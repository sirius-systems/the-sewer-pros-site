/**
 * Post-build editorial gate (Prompt 13) for the static export in `out/`.
 *
 *   node scripts/verify-editorial-keywords.mjs
 *
 * Run `npm run build` first. Exits 1 on any failure. The keyword model is in
 * scripts/lib/editorial-keywords.mjs; the report is
 * docs/source-reports/prompt-13-editorial-audit-2026-10-27.md.
 *
 * Fails when:
 *   - a page's primary keyword is missing from its title, meta description or
 *     H1 (an owner-written H1 recorded as exempt in the model is allowed)
 *   - two pages share a title or a meta description
 *   - a title is over 70 characters or a meta description over 160
 *   - a service or service + location page does not carry the registered
 *     service name in its title and H1, or a title or H1 spells the combined
 *     service "Sewer Cleaning and Camera Inspection" instead of
 *     "Sewer Cleaning & Camera Inspection"
 *   - a researched question phrase (required or expected) is absent from the
 *     page's headings and FAQ questions
 *   - the homepage title still competes with the Sewer Camera Inspection page for
 *     "sewer camera inspection", or the two hydro jetting pages Henderson and Las
 *     Vegas are 30% or more the same copy, or "mixed-use" appears in page copy
 *   - a title, meta description, H1, heading or FAQ question carries commercial
 *     wording, or repair or replacement wording that reads as an offer
 *   - a service + location page is 50% or more the same copy as a sibling
 *     (token-swapped copy)
 */
import { runAudit, TITLE_HARD, META_MAX } from './lib/editorial-audit.mjs'

const { rows, dupTitles, dupMetas, pages } = runAudit('out')

let failures = 0
const check = (name, bad) => {
  const ok = bad.length === 0
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}${ok ? '' : `: ${bad.length}`}`)
  if (!ok) {
    for (const b of bad.slice(0, 8)) console.log(`        ${b}`)
    if (bad.length > 8) console.log(`        ... and ${bad.length - 8} more`)
    failures += 1
  }
}
const issues = (re) => rows.flatMap((r) => r.issues.filter((i) => re.test(i.msg)).map((i) => `${r.url}: ${i.msg}`))

console.log(`INFO  ${rows.length} indexable pages audited\n`)

check('primary keyword in the title of every page', issues(/missing from title/))
check('primary keyword in the meta description of every page', issues(/missing from meta/))
check('primary keyword in the H1 of every page (owner-written audience headlines exempt)', issues(/missing from h1/))
check('no duplicate titles', dupTitles.map((g) => g.join(' = ')))
check('no duplicate meta descriptions', dupMetas.map((g) => g.join(' = ')))
check(`titles are at most ${TITLE_HARD} characters`, rows.filter((r) => r.title.length > TITLE_HARD).map((r) => `${r.url}: ${r.title.length}`))
check(`meta descriptions are at most ${META_MAX} characters`, rows.filter((r) => r.meta.length > META_MAX).map((r) => `${r.url}: ${r.meta.length}`))

// Registered names: service and service + location titles and H1s carry the exact name; the combined
// service keeps its ampersand ("Sewer Cleaning & Camera Inspection").
check('titles and H1s use the registered service name (ampersand included)', issues(/registered name/))

check('every required researched question appears in the page headings or FAQ questions', rows.flatMap((r) => r.missingRequired.map((q) => `${r.url}: ${q}`)))
check('every expected researched question (the 17 added 2026-10-27 included) appears in the page headings or FAQ questions', rows.flatMap((r) => r.missingExpected.map((q) => `${r.url}: ${q}`)))

// Homepage owns "independent sewer inspection and cleaning"; the Sewer Camera Inspection page owns "sewer camera inspection".
const byUrl = Object.fromEntries(rows.map((r) => [r.url, r]))
const cam = 'sewer camera inspection'
const ownership = []
if (!/independent sewer inspection and cleaning/i.test(byUrl['/']?.title ?? '')) ownership.push('/: title does not carry "Independent Sewer Inspection and Cleaning"')
if (/sewer camera inspection/i.test(byUrl['/']?.title ?? '')) ownership.push('/: title still competes for "sewer camera inspection"')
if (/sewer camera inspection/i.test(byUrl['/']?.h1 ?? '')) ownership.push('/: H1 still competes for "sewer camera inspection"')
const camPage = byUrl['/services/sewer-camera-inspection/']
if (!camPage || !camPage.title.toLowerCase().includes(cam) || !camPage.h1.toLowerCase().includes(cam)) ownership.push('/services/sewer-camera-inspection/: title and H1 must carry "Sewer Camera Inspection"')
for (const r of rows) if (['services-hub', 'about', 'faq', 'contact', 'audience', 'audience-hub', 'resources-hub', 'locations-hub'].includes(r.type) && r.title.toLowerCase().includes(cam)) ownership.push(`${r.url}: title competes for "sewer camera inspection"`)
check('the Sewer Camera Inspection page owns "sewer camera inspection"; the homepage is titled around independent sewer inspection and cleaning', ownership)

const swapPair = ['/locations/las-vegas-nv/henderson/hydro-jetting/', '/locations/las-vegas-nv/las-vegas/hydro-jetting/'].filter((u) => (byUrl[u]?.maxSimilarity ?? 1) >= 0.3)
check('hydro jetting Henderson and Las Vegas are under 30% the same copy', swapPair.map((u) => `${u}: ${(byUrl[u].maxSimilarity * 100).toFixed(0)}%`))
check('"mixed-use" appears in no page copy (residential only, DEC-142)', Object.values(pages).filter((p) => /mixed[- ]use/i.test(`${p.title} ${p.meta} ${p.text}`)).map((p) => p.url))
check('no commercial wording in titles, metas, H1s, headings or FAQ questions', issues(/commercial wording/))
check('no repair or replacement wording that reads as an offer in titles, metas or H1s', issues(/repair or replacement service/))
check('no service + location page is 50% or more the same copy as a sibling (token swap)', rows.filter((r) => (r.maxSimilarity ?? 0) >= 0.5).map((r) => `${r.url}: ${(r.maxSimilarity * 100).toFixed(0)}% like ${r.mostSimilarTo}`))

console.log(failures === 0 ? '\nAll checks passed.' : `\n${failures} check(s) FAILED.`)
process.exit(failures === 0 ? 0 : 1)
