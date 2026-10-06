/**
 * Post-build checks for /st-louis-mo/st-charles/.
 *
 * Reads the static export in `out/` (run `npm run build` first). No
 * dependencies. Exits 1 on any failure.
 *
 *   node scripts/verify-st-charles-page.mjs
 */
import fs from 'node:fs'
import path from 'node:path'
import { otherMarketPhoneHits } from './lib/market-phones.mjs'

const ROOT = path.resolve('out')
const PAGE = path.join(ROOT, 'st-louis-mo', 'st-charles', 'index.html')
const ORIGIN = (process.env.NEXT_PUBLIC_SITE_URL || 'https://www.thesewerpros.com').replace(/\/+$/, '')
const html = fs.readFileSync(PAGE, 'utf8')

let failures = 0
const check = (name, ok, detail = '') => {
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}${ok || detail === '' ? '' : `: ${detail}`}`)
  if (!ok) failures += 1
}

/* ---- Image slot placeholders (review aid) ---- */
const PLACEHOLDERS_ON = /Image slot: /.test(html)
if (PLACEHOLDERS_ON) {
  console.log('\n' + '!'.repeat(72))
  console.log('!! WARNING: IMAGE SLOT PLACEHOLDERS ARE ON IN THIS BUILD (owner decision).')
  console.log('!! Before launch set IMAGE_SLOTS_DEFAULT to false in lib/image-slots.ts (or')
  console.log('!! build with NEXT_PUBLIC_SHOW_IMAGE_SLOTS=false). Not a failure.')
  console.log('!'.repeat(72) + '\n')
}

const decode = (s) =>
  s
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#x27;/g, "'")
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/ /g, ' ')
    .replace(/&rsquo;/g, '’')
    .replace(/'/g, '’')
const norm = (s) => decode(s).replace(/\s+/g, ' ').trim()

const bodyHtml = html.replace(/<!-- -->/g, '').replace(/<script[\s\S]*?<\/script>/g, '').replace(/<style[\s\S]*?<\/style>/g, '')
const strip = (h) => norm(h.replace(/<[^>]+>/g, ' ').replace(/\s+([.,;:)])/g, '$1').replace(/\(\s+/g, '('))
const text = strip(bodyHtml)

// The review band is the only section allowed to carry review, rating and star
// wording. Everything else is checked with it removed.
const reviewsMatch = bodyHtml.match(/<section[^>]*aria-labelledby="reviews"[\s\S]*?<\/section>/)
const reviewsHtml = reviewsMatch ? reviewsMatch[0] : ''
const textNoReviews = strip(bodyHtml.replace(reviewsHtml, ' '))
// Customer review cards are third-party text; the aggregate line and caption are ours.
const reviewsOurText = strip(reviewsHtml.replace(/<ul class="marquee-track"[\s\S]*<\/ul>/, ' '))

/* ---- JSON-LD ---- */
const ldBlocks = [...html.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)]
check('exactly one JSON-LD block', ldBlocks.length === 1, `found ${ldBlocks.length}`)
const ldRaw = ldBlocks[0][1]
const graph = JSON.parse(ldRaw)['@graph']
const ids = new Set(graph.map((n) => n['@id']).filter(Boolean))

for (const bad of [
  'LocalBusiness', 'AggregateRating', 'Review', 'ratingValue', 'reviewCount', 'PostalAddress',
  'GeoCoordinates', 'openingHoursSpecification', 'HowTo',
]) {
  check(`JSON-LD has no ${bad}`, !ldRaw.includes(bad))
}
check('page HTML has no itemprop rating microdata', !/itemprop="(ratingValue|reviewCount|aggregateRating|review)"/i.test(html))
check('no placeholder strings in JSON-LD', !/REPLACE-|TODO|Placeholder/i.test(ldRaw))
check('no St. Charles Place node', !graph.some((n) => /st-charles/i.test(n['@id'] ?? '') && ['Place', 'City'].includes(n['@type'])))

const dangling = []
const walk = (v) => {
  if (Array.isArray(v)) return v.forEach(walk)
  if (v && typeof v === 'object') {
    const keys = Object.keys(v)
    if (keys.length === 1 && v['@id'] && !ids.has(v['@id'])) dangling.push(v['@id'])
    else Object.values(v).forEach(walk)
  }
}
walk(graph)
check('every @id reference resolves in the graph', dangling.length === 0, dangling.join(', '))
const dupIds = graph.map((n) => n['@id']).filter((v, i, a) => v && a.indexOf(v) !== i)
check('no duplicate @id', dupIds.length === 0, dupIds.join(', '))

const services = graph.filter((n) => n['@type'] === 'Service')
const cardTitles = [...bodyHtml.matchAll(/<h3 class="text-h4 font-semibold tracking-tight">([\s\S]*?)<\/h3>/g)].map((m) => norm(m[1]))
check('nine Service nodes', services.length === 9, `found ${services.length}`)
check(
  'Service nodes match the nine visible cards (names, in order)',
  JSON.stringify(services.map((s) => s.name)) === JSON.stringify(cardTitles.slice(0, 9)),
  `${JSON.stringify(services.map((s) => s.name))} vs ${JSON.stringify(cardTitles.slice(0, 9))}`,
)
check('Service descriptions appear verbatim on the page', services.every((s) => text.includes(norm(s.description))))
check(
  'Service nodes use provider and areaServed refs',
  services.every((s) => s.provider?.['@id'] === `${ORIGIN}/#organization` && s.areaServed?.[0]?.['@id']),
)
check('no repair, replacement, lining or excavation Service', !services.some((s) => /repair|replac|lining|excavat|install/i.test(s.name)))

const crumbLd = graph.find((n) => n['@type'] === 'BreadcrumbList')
const crumbNames = crumbLd?.itemListElement.map((i) => i.name)
check(
  'BreadcrumbList ends St. Louis, MO Sewer Services, St. Charles',
  JSON.stringify(crumbNames?.slice(-2)) === JSON.stringify(['St. Louis, MO Sewer Services', 'St. Charles']) && crumbNames?.[0] === 'Home',
  JSON.stringify(crumbNames),
)
const navMatch = bodyHtml.match(/<nav[^>]*aria-label="Breadcrumb"[^>]*>([\s\S]*?)<\/nav>/i)
const crumbVisible = navMatch ? strip(navMatch[1]) : ''
check(
  'BreadcrumbList names all appear in the visible breadcrumb',
  crumbNames?.every((n) => crumbVisible.includes(norm(n))),
  `${crumbNames} vs "${crumbVisible}"`,
)

/* ---- FAQ ---- */
// FAQPage is gated by `faqSchemaApproved` in the content module. The check
// follows the committed state, so it passes in either state when consistent.
const contentSrc = fs.readFileSync(path.resolve('content/pages/st-louis-st-charles.tsx'), 'utf8')
const faqOn = /faqSchemaApproved:\s*true/.test(contentSrc)
const faqQs = [...bodyHtml.matchAll(/<summary[^>]*><span[^>]*><h3[^>]*>([\s\S]*?)<\/h3>/g)].map((m) => norm(m[1].replace(/<[^>]+>/g, ' ')))
check('ten FAQ questions in the DOM', faqQs.length === 10, `found ${faqQs.length}`)
const faqLd = graph.find((n) => n['@type'] === 'FAQPage')
const webPage = graph.find((n) => n['@type'] === 'WebPage')
if (faqOn) {
  check('FAQPage node present (faqSchemaApproved: true)', faqLd !== undefined)
  const ldQs = (faqLd?.mainEntity ?? []).map((q) => norm(q.name))
  check('FAQPage questions equal the visible questions, in order', JSON.stringify(ldQs) === JSON.stringify(faqQs), `${ldQs.length} vs ${faqQs.length}`)
  check(
    'FAQPage answers appear verbatim in the visible text',
    (faqLd?.mainEntity ?? []).every((q) => text.includes(norm(q.acceptedAnswer.text))),
    (faqLd?.mainEntity ?? []).filter((q) => !text.includes(norm(q.acceptedAnswer.text))).map((q) => q.name).join(' | '),
  )
  check('FAQPage isPartOf the WebSite', faqLd?.isPartOf?.['@id'] === `${ORIGIN}/#website`)
  console.log(`INFO  WebPage.mainEntity ${webPage?.mainEntity ? `= ${JSON.stringify(webPage.mainEntity)}` : 'is not set by graph.ts (same as Chesterfield, Ballwin, Florissant)'}`)
  check('15 JSON-LD objects including the Organization', graph.length === 15, `found ${graph.length}`)
} else {
  check('FAQPage node absent (faqSchemaApproved: false)', faqLd === undefined)
  check('14 JSON-LD objects including the Organization', graph.length === 14, `found ${graph.length}`)
}
check('Organization is the first node', graph[0]?.['@type'] === 'Organization' || graph[0]?.['@id'] === `${ORIGIN}/#organization`, JSON.stringify(graph[0]?.['@type']))

/* ---- WebPage ---- */
const META = 'Sewer camera inspection and cleaning in St. Charles, MO. The City runs its own sewer system. See its lateral program and when evidence helps.'
check('WebPage name equals the seoTitle', webPage?.name === 'St. Charles, MO Sewer Inspection & Cleaning', webPage?.name)
check('WebPage description is the 141-character meta description', webPage?.description === META && META.length === 141, String(webPage?.description?.length))
check('WebPage about is the St. Louis market Place', webPage?.about?.['@id'] === `${ORIGIN}/st-louis-mo/#place`)
check('meta description tag matches', html.includes(`<meta name="description" content="${META}"/>`))

/* ---- Head ---- */
check('title (brand suffix once)', /<title>St\. Charles, MO Sewer Inspection &amp; Cleaning \| The Sewer Pros<\/title>/.test(html))
check('canonical', html.includes(`<link rel="canonical" href="${ORIGIN}/st-louis-mo/st-charles/"/>`))
check('robots index, follow (unchanged)', html.includes('<meta name="robots" content="index, follow"/>'))
const h1s = [...bodyHtml.matchAll(/<h1[\s>][\s\S]*?<\/h1>/g)]
check('one H1', h1s.length === 1)
check('H1 text', h1s.length === 1 && strip(h1s[0][0]) === 'Sewer Inspection and Cleaning in St. Charles, MO', h1s[0] && strip(h1s[0][0]))

/* ---- Anchors and order ---- */
const idAttrs = [...bodyHtml.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1])
const dupes = idAttrs.filter((v, i) => idAttrs.indexOf(v) !== i)
check('no duplicate ids (hero and final form ids differ)', dupes.length === 0, dupes.join(', '))
const ORDER = ['request', 'services', 'reviews', 'responsible', 'how-system', 'age', 'who-to-call', 'city-program', 'second-opinion', 'buying', 'areas', 'faq']
for (const anchor of [...ORDER, 'sources']) check(`anchor #${anchor} exists`, idAttrs.includes(anchor))
const pos = ORDER.map((a) => bodyHtml.indexOf(`id="${a}"`))
check('anchors appear in the required order', pos.every((p, i) => p > -1 && (i === 0 || p > pos[i - 1])), pos.join(','))
const jump = ['#services', '#reviews', '#responsible', '#how-system', '#age', '#who-to-call', '#city-program', '#second-opinion', '#buying', '#faq']
const jumpPos = jump.map((h) => bodyHtml.indexOf(`href="${h}"`))
check('jump nav lists the ten links in order', jumpPos.every((p, i) => p > -1 && (i === 0 || p > jumpPos[i - 1])), jumpPos.join(','))

/* ---- Review band ---- */
check('#reviews shows "4.9" and "from 595 Google reviews"', /4\.9.*from 595 Google reviews/.test(strip(reviewsHtml)))
check('#reviews shows "as of September 1, 2026"', reviewsOurText.includes('as of September 1, 2026'))
check('#reviews carries the not-specific caption', reviewsOurText.includes('not specific to St. Charles'))
const outsideReviewWords = textNoReviews.replace('Services Reviews Who is responsible', 'Services Who is responsible')
check(
  'review, rating and star wording appears only in the band and the jump-nav label',
  !/\breviews\b|\bratings?\b|\bstars?\b|★/i.test(outsideReviewWords),
  (outsideReviewWords.match(/.{30}\b(reviews|ratings?|stars?)\b.{30}/i) ?? [''])[0],
)

/* ---- Copy checks ---- */
check('no em dashes in visible text', !text.includes(String.fromCharCode(8212)))
const REQUIRED = [
  '$28', '$7,500', '90 percent', '30 lift stations', 'Public Works Sewer Division', '1986', '32,300',
  '(636) 949-3363', '(636) 949-3222', '2871 Elm Point Industrial Drive', 'Sewer Lateral Repair Program',
  "This is the City's number and address, not ours", "This is the City's number, not ours",
  'outside the area MSD defines as its service area', 'Newtown', 'Hackmann Road', 'Last reviewed: October 3, 2026',
]
const missingReq = REQUIRED.filter((t) => !text.includes(norm(t)))
check('required strings present', missingReq.length === 0, missingReq.join(' | '))
const FORBIDDEN = [
  '$300', '$15,000', '$200', '$4,500', '$150', 'five feet', 'Sewer Lateral Insurance', 'Street Division',
  'Orangeburg', '1976', '1963', '21,229', '58.4', 'More than half', 'Master Drainlayer', 'MyGov',
  'Valley Drive', '(314) 768-6260', '(314) 839-76', '1-866-281-5737', '22 lift', '9.63', '7.54', 'MGD',
  'Utilities Division', 'PVC-era', "outside MSD's territory", 'MSD confirms', 'combined sewer', '7:30',
  'certified', 'insured', 'insurance', 'free ', 'guarantee', 'warranty',
  '24/7', 'same-day', 'best price', 'testimonial', '911', 'Placeholder', 'NOT FOR PRODUCTION',
]
const caseInsensitive = new Set(['certified', 'insured', 'insurance', 'guarantee', 'warranty', 'same-day', 'best price', 'testimonial', 'placeholder'])
const forbiddenHits = FORBIDDEN.filter((w) => {
  const n = norm(w)
  return caseInsensitive.has(w.toLowerCase()) ? textNoReviews.toLowerCase().includes(n.toLowerCase()) : textNoReviews.includes(n)
})
check('no forbidden strings', forbiddenHits.length === 0, forbiddenHits.join(', '))
const contextOnly = (pattern, allowed, label) => {
  const bad = [...text.matchAll(new RegExp(pattern, 'g'))]
    .map((m) => text.slice(Math.max(0, m.index - 80), m.index + 140))
    .filter((c) => !allowed.test(c))
  check(label, bad.length === 0, bad.join(' | '))
}
// Owner decision (2026-10-03): the City Code's cabling requirement is described as
// written certification from a properly licensed master plumber or master
// drainlayer. These words describe the CITY'S requirement and nothing else.
contextOnly('licen[cs]ed', /certification from a properly licensed master plumber or master drainlayer that the lateral has been cabled/, '"licensed" only inside the City cabling-certification wording')
contextOnly('certification', /certification from a properly licensed master plumber or master drainlayer that the lateral has been cabled/, '"certification" only inside the City cabling-certification wording')
contextOnly('lowest', /90 percent of the lowest of three bids|reimburses the lowest responsible bid/, '"lowest" only in the City bid wording')
contextOnly('\\$20(?![\\d,])', /(older \$20 figure|still show \$20|shows an older \$20 fee)/, '"$20" only where the City page conflict is stated')
contextOnly('\\$50', /\$50 fee for each required inspection/, '"$50" only in the permit-inspection-fee sentence')
check('"emergency" nowhere', !/emergency/i.test(text))
check('no ImagePlaceholder warning text', !/NOT FOR PRODUCTION INDEXATION/i.test(html))
const dashed = (bodyHtml.match(/border-dashed/g) ?? []).length
const slotBoxes = bodyHtml.match(/Image slot: [a-z-]+/g) ?? []
check('border-dashed appears only on labelled slot boxes', dashed === slotBoxes.length, `${dashed} vs ${slotBoxes.length}`)
const got = slotBoxes.map((s) => s.replace('Image slot: ', ''))
console.log(`INFO  slot placeholders drawn (${got.length}): ${got.join(', ')}`)
if (PLACEHOLDERS_ON) {
  const EXPECT = ['system-street', 'call-cleanout', 'program-footage', 'so-inspect', 'so-document', 'so-decide', 'buy-buyer', 'buy-agent']
  check('the eight drawable unfilled slots draw a placeholder (final-bg is dropped)', EXPECT.every((e) => got.includes(e)) && got.length === EXPECT.length, got.join(', '))
  check('the placeholder source string is not in the HTML', !html.includes('review build only'))
} else {
  check('no slot placeholders when the flag is off', got.length === 0 && dashed === 0)
}
check('Sewer Pros hours are 8:00 am - 4:00 pm', text.includes('8:00 am - 4:00 pm'))
check('Sewer Pros phone is (314) 821-1600', text.includes('(314) 821-1600'))
check('program steps render as an ordered list', /<ol[\s>]/.test(bodyHtml))
const repairClaims = /(we|our crews?)\s+(repair|replace|install|excavate|line)\b/i.exec(textNoReviews)
check('no claim that The Sewer Pros repairs or replaces', repairClaims === null, repairClaims?.[0])
const repairNo = (text.match(/does not perform repairs or replacements|do not perform sewer repairs or replacements|No\. We inspect, locate, diagnose and clean|without a repair sale/g) ?? []).length
check('approved no-repair statements present (second opinion, program callout, FAQ 10, final CTA)', repairNo >= 4, String(repairNo))

/* ---- Census table ---- */
const censusRows = [...text.matchAll(/(2020 or later|2010-2019|2000-2009|1990-1999|1980-1989|1970-1979|1960-1969|1950-1959|1940-1949|1939 or earlier) ([\d,]+) (\d+)/g)]
const sum = censusRows.reduce((a, m) => a + Number(m[2].replace(/,/g, '')), 0)
check('Census table has ten rows summing to 32,305', censusRows.length === 10 && sum === 32305, `${censusRows.length} rows, sum ${sum}`)

/* ---- Links ---- */
const anchors = [...bodyHtml.matchAll(/<a\s[^>]*href="([^"]+)"[^>]*>/g)]
const external = anchors.filter((m) => /^https?:/.test(m[1]))
check('every external link has rel="noopener"', external.every((m) => /rel="[^"]*noopener/.test(m[0])), external.filter((m) => !/rel="[^"]*noopener/.test(m[0])).map((m) => m[1]).join(', '))
const internal = anchors.map((m) => m[1]).filter((h) => h.startsWith('/') && !h.startsWith('//'))
const missing = [...new Set(internal)].filter((h) => {
  const p = h.split('#')[0].split('?')[0]
  if (/\.(webp|png|jpg|svg|ico)$/.test(p) || p === '/manifest.webmanifest') return false
  return !fs.existsSync(path.join(ROOT, p, 'index.html'))
})
check('every internal link resolves to a built route', missing.length === 0, missing.join(', '))
check('Pre-Purchase card links to the St. Charles pre-purchase page', internal.includes('/locations/st-louis-mo/st-charles/pre-purchase-sewer-inspection/'))
for (const u of new Set(external.map((m) => m[1]))) console.log('  ext', u)

/* ---- Sitemap ---- */
const sitemapPath = path.join(ROOT, 'sitemap.xml')
if (fs.existsSync(sitemapPath)) {
  check('page is in the sitemap', fs.readFileSync(sitemapPath, 'utf8').includes(`${ORIGIN}/st-louis-mo/st-charles/`))
}

/* ---- Market phones (whole document, header and footer included) ---- */
check(
  'no other market phone number anywhere in the document (JSON-LD excluded)',
  otherMarketPhoneHits(html, 'st-louis-mo').length === 0,
  otherMarketPhoneHits(html, 'st-louis-mo').join(', '),
)

console.log(failures === 0 ? '\nAll checks passed.' : `\n${failures} check(s) FAILED.`)
process.exit(failures === 0 ? 0 : 1)
