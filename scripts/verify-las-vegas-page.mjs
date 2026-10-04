/**
 * Post-build checks for /las-vegas-nv/las-vegas/.
 *
 * Reads the static export in `out/` (run `npm run build` first). No
 * dependencies. Exits 1 on any failure.
 *
 *   node scripts/verify-oceanside-page.mjs
 *
 * Adapted from `verify-oceanside-page.mjs`. The City of Las Vegas says owners
 * maintain private sewer laterals up to the point where they connect into the
 * City main. The City's 702 numbers are the City's, not company numbers. The
 * company phone and hours are Las Vegas's own (DEC-071); the founding year is 0
 * (unknown), so the trust strip drops that cell. The page never says a grant
 * exists, that the City will pay for any damage, what LVMC 14.04.120 says, or
 * draws a pipe-material conclusion from housing age.
 */
import fs from 'node:fs'
import path from 'node:path'
import { otherMarketPhoneHits } from './lib/market-phones.mjs'

const ROOT = path.resolve('out')
const PAGE = path.join(ROOT, 'las-vegas-nv', 'las-vegas', 'index.html')
// Follows the origin the build used (NEXT_PUBLIC_SITE_URL); falls back to production.
const PRODUCTION_ORIGIN = 'https://www.thesewerpros.com'
const ORIGIN = (process.env.NEXT_PUBLIC_SITE_URL || PRODUCTION_ORIGIN).replace(/\/+$/, '')
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
    .replace(/ /g, ' ')
    .replace(/&rsquo;/g, '’')
    .replace(/'/g, '’')
const norm = (s) => decode(s).replace(/\s+/g, ' ').trim()

const bodyHtml = html.replace(/<!-- -->/g, '').replace(/<script[\s\S]*?<\/script>/g, '').replace(/<style[\s\S]*?<\/style>/g, '')
const strip = (h) => norm(h.replace(/<[^>]+>/g, ' ').replace(/\s+([.,;:)])/g, '$1').replace(/\(\s+/g, '('))
const mainStart = bodyHtml.indexOf('<main')
const mainEnd = bodyHtml.indexOf('</main>')
check('<main> found', mainStart > -1 && mainEnd > mainStart)
const mainHtml = bodyHtml.slice(mainStart, mainEnd)
const text = strip(mainHtml)
check('mobile contact bar renders inside <main>', /aria-label="Quick contact"/.test(mainHtml))

/**
 * HTML of the section whose anchor is `from`, up to the section holding `to`.
 * `to` may also be 'cta' (the final CTA band, which follows the FAQ).
 */
const startOf = (anchor) => {
  const i = anchor === 'cta' ? mainHtml.indexOf('Evidence before expensive decisions') : mainHtml.indexOf(`id="${anchor}"`)
  return i < 0 ? -1 : mainHtml.lastIndexOf('<', anchor === 'cta' ? mainHtml.lastIndexOf('<section', i) : i)
}
const bounds = (from, to) => [startOf(from), startOf(to)]
const regionHtml = (from, to) => {
  const [a, b] = bounds(from, to)
  return a > -1 && b > a ? mainHtml.slice(a, b) : ''
}
const region = (from, to) => strip(regionHtml(from, to))
const withoutRegion = (from, to) => {
  const [a, b] = bounds(from, to)
  return strip(mainHtml.slice(0, a) + ' ' + mainHtml.slice(b))
}

/* ---- Las Vegas market constants (DEC-071), read from the data file ---- */
const marketsSrc = fs.readFileSync(path.resolve('data/markets/markets.ts'), 'utf8')
const lvBlock = marketsSrc.match(/'las-vegas-nv':\s*\{\s*phone:[\s\S]*?foundingYear:\s*(\d+)/)?.[0] ?? ''
const LV_PHONE = lvBlock.match(/phone:\s*'([^']+)'/)?.[1]
const LV_E164 = lvBlock.match(/phoneE164:\s*'([^']+)'/)?.[1]
const LV_HOURS = lvBlock.match(/hours:\s*'([^']+)'/)?.[1]
const LV_YEAR = lvBlock.match(/foundingYear:\s*(\d+)/)?.[1]
check('Las Vegas constants found in data/markets/markets.ts', Boolean(LV_PHONE && LV_E164 && LV_HOURS && LV_YEAR !== undefined), JSON.stringify({ LV_PHONE, LV_E164, LV_HOURS, LV_YEAR }))
check('Las Vegas founding year is 0 (unknown), so the trust strip drops that cell', LV_YEAR === '0')

/* ---- JSON-LD ---- */
const ldBlocks = [...html.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)]
check('exactly one JSON-LD block', ldBlocks.length === 1, `found ${ldBlocks.length}`)
const ldRaw = ldBlocks[0][1]
const graph = JSON.parse(ldRaw)['@graph']
const ids = new Set(graph.map((n) => n['@id']).filter(Boolean))
// Nodes this page adds (the Organization is existing chrome and lists every market).
const pageNodes = graph.filter((n) => n['@type'] !== 'Organization')
const pageLd = JSON.stringify(pageNodes)

for (const bad of [
  'LocalBusiness', 'AggregateRating', 'Review', 'ratingValue', 'reviewCount', 'PostalAddress',
  'GeoCoordinates', 'openingHoursSpecification', 'HowTo', 'GovernmentService', 'Offer',
  'Grant', 'MonetaryGrant',
]) {
  check(`JSON-LD has no ${bad}`, !ldRaw.includes(bad))
}
// `price` as a property only: FAQ 5's answer text says the City page lists no price.
check('JSON-LD has no price property', !/"(price|priceCurrency|priceRange)"\s*:/.test(ldRaw))
check('page HTML has no itemprop rating microdata', !/itemprop="(ratingValue|reviewCount|aggregateRating|review)"/i.test(html))
check('no review marquee on the page', !/marquee-track/.test(mainHtml))
check('no placeholder strings in JSON-LD', !/REPLACE-|TODO|Placeholder/i.test(ldRaw))
const orgNodes = graph.filter((n) => n['@type'] === 'Organization')
check('only the company Organization node exists (none for the City or any agency)', orgNodes.length === 1, String(orgNodes.length))
const places = graph.filter((n) => ['Place', 'City'].includes(n['@type']))
check(
  'only the Las Vegas market Place exists (no City-of-Las-Vegas Place node)',
  places.length === 1 && places[0]['@id'] === `${ORIGIN}/las-vegas-nv/#place` && places[0].name === 'Las Vegas, NV',
  JSON.stringify(places.map((p) => [p['@id'], p.name])),
)
{
  // Agency names appear only inside FAQ answer text (plain text), never as nodes or other properties.
  const copy = JSON.parse(JSON.stringify(pageNodes))
  const f = copy.find((n) => n['@type'] === 'FAQPage')
  if (f) f.mainEntity = []
  check('no JSON-LD node this page adds mentions an agency, the warranty provider or a founding date outside FAQ answer text', !/(Streets & Sanitation|Sanitary Sewer|Building & Safety|Service Line|foundingDate)/.test(JSON.stringify(copy)))
}

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
const cardTitles = [...mainHtml.matchAll(/<h3 class="text-h4 font-semibold tracking-tight">([\s\S]*?)<\/h3>/g)].map((m) => norm(m[1]))
check('nine Service nodes', services.length === 9, `found ${services.length}`)
check(
  'Service nodes match the nine visible cards (names, in order)',
  JSON.stringify(services.map((s) => s.name)) === JSON.stringify(cardTitles.slice(0, 9)),
  `${JSON.stringify(services.map((s) => s.name))} vs ${JSON.stringify(cardTitles.slice(0, 9))}`,
)
check('Service descriptions appear verbatim on the page', services.every((s) => text.includes(norm(s.description))))
check(
  'Service nodes use provider and areaServed refs',
  services.every((s) => s.provider?.['@id'] === `${ORIGIN}/#organization` && s.areaServed?.[0]?.['@id'] === `${ORIGIN}/las-vegas-nv/#place`),
)
check('no repair, replacement, lining or excavation Service', !services.some((s) => /repair|replac|lining|excavat|install|EMRA/i.test(s.name)))

const crumbLd = graph.find((n) => n['@type'] === 'BreadcrumbList')
const crumbNames = crumbLd?.itemListElement.map((i) => i.name)
check(
  'BreadcrumbList is Home, Locations / Service Areas, Las Vegas, NV Sewer Services, Las Vegas',
  JSON.stringify(crumbNames) === JSON.stringify(['Home', 'Locations / Service Areas', 'Las Vegas, NV Sewer Services', 'Las Vegas']),
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
const contentSrc = fs.readFileSync(path.resolve('content/pages/las-vegas-las-vegas.tsx'), 'utf8')
const faqOn = !/faqSchemaApproved:\s*false/.test(contentSrc)
const faqQs = [...mainHtml.matchAll(/<summary[^>]*><span[^>]*><h3[^>]*>([\s\S]*?)<\/h3>/g)].map((m) => norm(m[1].replace(/<[^>]+>/g, ' ')))
// Nine, not ten: FAQ 3 (Clark County Water Reclamation District) is dropped
// because that page could not be re-read (HTTP 403 to automated fetches).
check('nine FAQ questions in the DOM', faqQs.length === 9, `found ${faqQs.length}`)
const faqLd = graph.find((n) => n['@type'] === 'FAQPage')
const webPage = graph.find((n) => n['@type'] === 'WebPage')
if (faqOn) {
  check('FAQPage node present', faqLd !== undefined)
  const ldQs = (faqLd?.mainEntity ?? []).map((q) => norm(q.name))
  check('FAQPage questions equal the visible questions, in order', JSON.stringify(ldQs) === JSON.stringify(faqQs), `${ldQs.length} vs ${faqQs.length}`)
  check('FAQPage carries nine mainEntity items', ldQs.length === 9, String(ldQs.length))
  check(
    'FAQPage answers appear verbatim in the visible text',
    (faqLd?.mainEntity ?? []).every((q) => text.includes(norm(q.acceptedAnswer.text))),
    (faqLd?.mainEntity ?? []).filter((q) => !text.includes(norm(q.acceptedAnswer.text))).map((q) => q.name).join(' | '),
  )
  check('FAQPage isPartOf the WebSite', faqLd?.isPartOf?.['@id'] === `${ORIGIN}/#website`)
  check('15 JSON-LD objects including the Organization', graph.length === 15, `found ${graph.length}`)
} else {
  check('FAQPage node absent (faqSchemaApproved: false)', faqLd === undefined)
  check('14 JSON-LD objects including the Organization', graph.length === 14, `found ${graph.length}`)
}
check('Organization is the first node', graph[0]?.['@type'] === 'Organization' || graph[0]?.['@id'] === `${ORIGIN}/#organization`, JSON.stringify(graph[0]?.['@type']))

// Census values live in visible text and FAQ 2's answer only, never other JSON-LD properties.
const CENSUS_VALS = ['1994', '27.9', '61.3', '25.9', '12.8', '74,732', '34,280', '69,371', '164,003', '267,654']
{
  const copy = JSON.parse(JSON.stringify(pageNodes))
  const f = copy.find((n) => n['@type'] === 'FAQPage')
  if (f) f.mainEntity = f.mainEntity.filter((q) => !/How old are Las Vegas homes/.test(q.name))
  const rest = JSON.stringify(copy)
  const hits = CENSUS_VALS.filter((v) => rest.includes(v))
  check('Census figures appear in no JSON-LD property other than FAQ 2’s answer text', hits.length === 0, hits.join(', '))
}
{
  // `warranty` in JSON-LD only inside FAQ answer text (FAQ 5, plus the City page title in FAQ 1's sources).
  const copy = JSON.parse(JSON.stringify(pageNodes))
  const f = copy.find((n) => n['@type'] === 'FAQPage')
  if (f) f.mainEntity = f.mainEntity.filter((q) => !/(lateral costs|responsible for a sewer lateral)/.test(q.name))
  check('`warranty` and the provider name appear in JSON-LD only inside FAQ 1 and FAQ 5 answer text', !/(warranty|Service Line Warranties)/i.test(JSON.stringify(copy)))
}
{
  const bad = ['licensed', 'PVC', 'Water Pollution Control', '6.00', '67.00', '1,300', '4,000', 'deductible', 'no cap', 'Goodwill', 'HomeServe', '1-844', '2019', '2011', 'emergency', 'guarantee', '$']
    .filter((w) => pageLd.toLowerCase().includes(w.toLowerCase()))
  check('no forbidden strings in the JSON-LD this page adds', bad.length === 0, bad.join(', '))
  const hits = ['2011', '314', '821-1600'].filter((w) => pageLd.includes(w))
  check('no 2011, 314 or 821-1600 in any node this page adds', hits.length === 0, hits.join(', '))
}

/* ---- WebPage ---- */
const META = 'Sewer camera inspection and cleaning in Las Vegas, NV. See what the City says about private sewer lines, who to call, and how old local homes are.'
check('WebPage name equals the seoTitle', webPage?.name === 'Sewer Inspection & Cleaning in Las Vegas, NV', webPage?.name)
check('WebPage description equals the meta description', webPage?.description === META, String(webPage?.description))
check(`meta description is ${META.length} characters (reported)`, META.length > 120 && META.length <= 160, String(META.length))
console.log(`INFO  meta description length: ${META.length}`)
check('WebPage about is the Las Vegas market Place', webPage?.about?.['@id'] === `${ORIGIN}/las-vegas-nv/#place`)
check('meta description tag matches', html.includes(`<meta name="description" content="${META}"/>`))

/* ---- Origin ---- */
console.log(`INFO  origin under test: ${ORIGIN}`)
if (ORIGIN !== PRODUCTION_ORIGIN) {
  check('no production-origin strings in the built HTML or JSON-LD', !html.includes(PRODUCTION_ORIGIN) && !html.includes('www.thesewerpros.com'))
}
const ldHosts = [...new Set([...ldRaw.matchAll(/https?:\/\/[^/"\s]+/g)].map((m) => m[0]))]
check('JSON-LD uses only the build origin plus schema.org', ldHosts.every((h) => h === ORIGIN || h === 'https://schema.org'), ldHosts.join(', '))

/* ---- Head ---- */
check('title (brand suffix once)', /<title>Sewer Inspection &amp; Cleaning in Las Vegas, NV \| The Sewer Pros<\/title>/.test(html))
check('canonical', html.includes(`<link rel="canonical" href="${ORIGIN}/las-vegas-nv/las-vegas/"/>`))
check('robots index, follow (unchanged)', html.includes('<meta name="robots" content="index, follow"/>'))
const h1s = [...mainHtml.matchAll(/<h1[\s>][\s\S]*?<\/h1>/g)]
check('one H1', h1s.length === 1)
check('H1 text', h1s.length === 1 && strip(h1s[0][0]) === 'Sewer Inspection and Cleaning in Las Vegas, NV', h1s[0] && strip(h1s[0][0]))

/* ---- Anchors and order ---- */
const idAttrs = [...mainHtml.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1])
const dupes = idAttrs.filter((v, i) => idAttrs.indexOf(v) !== i)
check('no duplicate ids (hero and final form ids differ)', dupes.length === 0, dupes.join(', '))
const ORDER = ['request', 'services', 'responsible', 'how-system', 'age', 'who-to-call', 'city-program', 'second-opinion', 'buying', 'areas', 'faq']
for (const anchor of [...ORDER, 'sources']) check(`anchor #${anchor} exists`, idAttrs.includes(anchor))
for (const absent of ['reviews', 'neighborhoods', 'commercial']) check(`no #${absent} section (intentionally absent)`, !idAttrs.includes(absent))
const pos = ORDER.map((a) => mainHtml.indexOf(`id="${a}"`))
check('anchors appear in the required order', pos.every((p, i) => p > -1 && (i === 0 || p > pos[i - 1])), pos.join(','))
const jump = ['#services', '#responsible', '#how-system', '#age', '#who-to-call', '#city-program', '#second-opinion', '#buying', '#faq']
const jumpPos = jump.map((h) => mainHtml.indexOf(`href="${h}"`))
check('jump nav lists the nine links in order', jumpPos.every((p, i) => p > -1 && (i === 0 || p > jumpPos[i - 1])), jumpPos.join(','))

/* ---- Copy checks ---- */
check('no em dashes in the whole document (U+2014)', !html.includes(String.fromCharCode(8212)))
const REQUIRED = [
  LV_PHONE, LV_HOURS, 'City of Las Vegas', '702-229-6227', '702-229-6541', 'Streets & Sanitation',
  'Sanitary Sewer Engineering', 'up to the point where they connect into the City', 'Privately Maintained Sewer Lines'.toLowerCase(),
  '1994', '61.3', '74,732', 'Last reviewed: October 4, 2026',
  'does not perform repairs or replacements', 'does not arrange reimbursement',
  'We did not find a lateral repair, replacement, grant, reimbursement or inspection-assistance program run by the City of Las Vegas',
  'Who to call', 'Know who to call', 'our arithmetic', 'March 10, 2021', 'November 9, 2021',
]
const missingReq = REQUIRED.filter((t) => !text.toLowerCase().includes(norm(t).toLowerCase()))
check('required strings present', missingReq.length === 0, missingReq.join(' | '))
check(`tel: links use the Las Vegas E.164 value (${LV_E164})`, html.includes(`href="tel:${LV_E164}"`))
const telHrefs = [...mainHtml.matchAll(/href="(tel:[^"]+)"/g)].map((m) => m[1])
check(
  '<main> tel: links are only the Las Vegas number and the two labelled City numbers',
  telHrefs.every((h) => h === `tel:${LV_E164}` || h === 'tel:+1-702-229-6227' || h === 'tel:+1-702-229-6541'),
  [...new Set(telHrefs)].join(', '),
)
check('702-229-6251 is never a tel: link', !/tel:\+?1?-?702-?229-?6251/.test(html))
check('hero shows the Las Vegas number', text.includes(norm('Call ' + LV_PHONE)))
check('mobile bar links the Las Vegas number', new RegExp('aria-label="Quick contact"[\\s\\S]*?href="tel:' + LV_E164.replace('+', '\\+')).test(mainHtml))
const finalCtaHtml = mainHtml.slice(mainHtml.indexOf('Evidence before expensive decisions'))
check('final CTA shows the Las Vegas number as a tel: link', finalCtaHtml.includes(`href="tel:${LV_E164}"`))
const footerHtml = bodyHtml.slice(bodyHtml.indexOf('<footer'))
check('footer shows the Las Vegas number as a tel: link', footerHtml.includes(`href="tel:${LV_E164}"`))
check('form area (hero card) shows the Las Vegas number as a tel: link', regionHtml('request', 'services').includes(`href="tel:${LV_E164}"`) || mainHtml.slice(0, mainHtml.indexOf('id="services"')).includes(`href="tel:${LV_E164}"`))

// Cross-market scan. The City's 702 numbers are not company numbers.
const CROSS = ['(314)', '314-', '821-1600', 'Since 2011', 'MSD', 'Metropolitan St. Louis', 'Google reviews', 'Realtors', '(858)', '(760)', 'CVSan', 'Vallecitos']
const crossHits = CROSS.filter((w) => text.includes(norm(w)) || mainHtml.includes(w))
check('cross-market scan of <main> finds no other market number, review text or agency', crossHits.length === 0, crossHits.join(', '))
check('<main> links contain no St. Louis or San Diego tel: number', !/href="tel:\+1-?(314|858|619|760)/.test(mainHtml))

const FORBIDDEN = [
  'licensed', 'Class A', 'C-1', 'C-36', 'C-42', 'PVC', 'clay', 'newer housing', 'ground movement', 'settlement',
  'Water Pollution Control', '$', '6.00', '67.00', '1,300', '4,000', 'deductible', 'coverage cap', 'no cap', 'Goodwill',
  'HomeServe', '1-844', '2019', '2011', 'Since 2011', 'same-day', '24/7', '24 hours', 'emergency', 'guarantee',
  'insured', 'as in most', 'neighbouring', 'programme', 'enquiries', 'unlike', 'to the property line',
  'all the way to the main', '702-229-2489', 'still open', 'accepting applications', 'you will be reimbursed',
  'Clark County', 'Water Reclamation District', 'Contractors Board', 'owner-builder', 'Placeholder',
  'NOT FOR PRODUCTION', 'testimonial', 'free estimate', 'newest',
]
const lowerText = text.toLowerCase()
const forbiddenHits = FORBIDDEN.filter((w) => lowerText.includes(norm(w).toLowerCase()))
check('no forbidden strings', forbiddenHits.length === 0, forbiddenHits.join(', '))
const contextOnly = (pattern, allowed, label, flags = 'gi') => {
  const bad = [...text.matchAll(new RegExp(pattern, flags))]
    .map((m) => text.slice(Math.max(0, m.index - 70), m.index + 110))
    .filter((c) => !allowed.test(c))
  check(label, bad.length === 0, bad.join(' | '))
}
const count = (re) => (text.match(re) ?? []).length
const faqText = region('faq', 'cta')
const callText = region('who-to-call', 'city-program')
const ageText = region('age', 'who-to-call')
const programText = region('city-program', 'second-opinion')

contextOnly('warrant', /(optional warranty (program )?offered with|warranty coverage to repair|Sewer Line Warranty|its warranty\?)/i, '`warranty` only in the takeaway, the program closing, FAQ 5 and the City page title')
contextOnly('Service Line Warranties', /(offered with Service Line Warranties of America|Service Line Warranties of America, a private company)/, 'the provider name only in the program closing paragraph and FAQ 5 (with no price or phone)', 'g')
{
  const beforeTakeaways = text.slice(0, text.indexOf('Key takeaways') > 0 ? text.indexOf('Key takeaways') : 2000)
  const noWarranty = [beforeTakeaways, region('services', 'responsible'), region('responsible', 'how-system'), region('how-system', 'age'), ageText, callText]
  check('warranty does not appear in the hero, services, responsibility, system, housing or who-to-call sections', !noWarranty.some((t) => /warrant/i.test(t)))
}
contextOnly('702-229-6251', /(Building & Safety|the City’s number)/, '702-229-6251 only as the City’s labelled number')
check('702-229-6251 appears only in the program list and FAQ 7', count(/702-229-6251/g) === 2 && /6251/.test(programText) && /6251/.test(faqText), String(count(/702-229-6251/g)))
check('702-229-6227 and 702-229-6541 are described as the City’s', /702-229-6227/.test(callText) && /Sanitary Sewer Engineering[\s\S]*702-229-6541/.test(callText) && count(/This is the City’s number and instruction, not ours/g) === 1 && count(/This is the City’s number, not ours/g) === 1)
check('FAQ 4 says the City’s number and instructions are not ours', count(/These are the City’s number and instructions, not ours/g) === 1)
contextOnly('after-hours', /after-hours sewer number/, '"after-hours" only in "no after-hours sewer number" sentences')
contextOnly('reimburs', /(did not find|does not arrange|not a statement|grant, reimbursement|grant or reimbursement|reimbursement program|reimbursement or inspection|reimbursement for it|repair or reimbursement)/i, '"reimburse" only in none-found sentences, the heading or the do-not-arrange sentence')
contextOnly('grant', /(did not find|found no|grant or reimbursement|grant, reimbursement|none found|grant, cap|A City grant)/i, '"grant" only in none-found sentences or the heading')
contextOnly('lining', /excavation, lining, or replacement/, '"lining" only in the approved second-opinion sentence')
contextOnly('replac', /(excavation, lining, or replacement|repairs? or replacements?|repairs\/replacements|repairing or replacing|replacement, grant|sewer repairs or replacements|repair or replace|does not replace any review|rerouted or replaced|repair or replacement|repair, replacement)/i, '"replace" only as the owner’s duty, a permit or inspection item, none-found sentences or the no-repair statements')
contextOnly('14\\.04\\.120', /(addenda cite Las Vegas Municipal Code section 14\.04\.120, which we have not reviewed)/, '14.04.120 only as "the addenda cite ... which we have not reviewed"')
check('14.04.120 appears once, in the City program list', count(/14\.04\.120/g) === 1 && /14\.04\.120/.test(programText))
{
  const outsideText = strip(
    mainHtml
      .replace(regionHtml('age', 'who-to-call'), ' ')
      .replace(regionHtml('faq', 'cta'), ' '),
  )
  const leaked = CENSUS_VALS.filter((v) => new RegExp(v.replace(/[.,]/g, '\\$&')).test(outsideText))
  check('Census values appear only in the housing-age section and the FAQ', leaked.length === 0, leaked.join(', '))
  check('housing-age section has the three-row table with a total row', /Before 1970[\s\S]*1970 to 1989[\s\S]*1990 or later[\s\S]*Total/.test(regionHtml('age', 'who-to-call').replace(/<[^>]+>/g, ' ')))
  check('housing-age figures are labelled as our arithmetic', /our arithmetic/.test(ageText))
  check('housing-age section draws no pipe-material or failure conclusion', !/(pipe material|made of|ground movement|settlement|cast iron|orangeburg|root|temperature)/i.test(ageText))
}
{
  const outsideAreas = withoutRegion('areas', 'faq')
  const cities = ['Summerlin', 'Henderson', 'North Las Vegas']
  const hit = cities.filter((c) => outsideAreas.includes(c))
  check('Summerlin, Henderson and North Las Vegas appear only as nearby-areas link labels', hit.length === 0, hit.join(', '))
  const stlSd = [...text.matchAll(/St\. Louis|San Diego/g)].length
  check('St. Louis and San Diego appear only in the company panel’s newer-market sentence', stlSd === 2 && /St\. Louis and San Diego/.test(callText), String(stlSd))
}
check('page never says the City will pay for damage or that a grant exists', !/(City|department) (will|does) pay|will be reimbursed|a grant exists|City policy on|City will (repair|fix|cover|restore)/i.test(text))
contextOnly('(camera inspection|cleaning)( or (a )?(camera inspection|cleaning))? (needs|requires|does not need|does not require) a permit', /(whether a camera inspection or cleaning needs a permit|that cleaning or a camera inspection needs a permit|did not find)/i, 'page does not say a permit is or is not required for cleaning or a camera inspection (none-found wording only)')
check('page never says no permit is required', !/no permit is required/i.test(text))
check('page never says the owner owns only to the property line or that every address is City-served', !/(only to the property line|every Las Vegas address)/i.test(text))
check('page tells readers to confirm with the City', /confirm with the City how the rules apply/.test(text) && /confirm details with the City/.test(text))
check('no ImagePlaceholder warning text', !/NOT FOR PRODUCTION INDEXATION/i.test(html))
const dashed = (mainHtml.match(/border-dashed/g) ?? []).length
const slotBoxes = mainHtml.match(/Image slot: [a-z-]+/g) ?? []
check('border-dashed appears only on labelled slot boxes', dashed === slotBoxes.length, `${dashed} vs ${slotBoxes.length}`)
const got = slotBoxes.map((s) => s.replace('Image slot: ', ''))
console.log(`INFO  slot placeholders drawn (${got.length}): ${got.join(', ')}`)
const DEFINED = ['las-vegas-hero', 'svc-camera', 'svc-cleaning', 'svc-jetting', 'svc-cleaning-camera', 'svc-locating', 'svc-drain', 'svc-prepurchase', 'svc-backup', 'svc-maintenance', 'system-street', 'call-cleanout', 'program-footage', 'so-inspect', 'so-document', 'so-decide', 'buy-buyer', 'buy-agent', 'final-bg']
const definedIds = [...contentSrc.matchAll(/^\s+id: '([a-z-]+)',$/gm)].map((m) => m[1])
check('exactly the 19 expected slot ids are defined in the module', JSON.stringify(definedIds) === JSON.stringify(DEFINED), definedIds.join(','))
check('no defined slot has a src yet', !/^\s+src: '/m.test(contentSrc.slice(contentSrc.indexOf('const IMAGE_SLOTS'), contentSrc.indexOf('function slotImage'))))
if (PLACEHOLDERS_ON) {
  check('every defined slot except final-bg draws a labelled box, once', DEFINED.filter((e) => e !== 'final-bg').every((e) => got.includes(e)) && new Set(got).size === got.length && got.every((g) => DEFINED.includes(g)), got.join(', '))
  console.log(`INFO  final-bg box drawn: ${got.includes('final-bg')}`)
  check('18 or 19 visible placeholder boxes (final-bg may or may not draw in this repo)', got.length === 18 || got.length === 19, String(got.length))
  check('no existing or rendered art on the page', !/<img[^>]+\/images\//.test(mainHtml) && !/\/_next\/image\?url=%2Fimages/.test(mainHtml))
  const boxes = [...mainHtml.matchAll(/Image slot: ([a-z-]+)<\/p><p>(16:9|4:3)<\/p><p>([^<]+)<\/p>/g)]
  check('each slot box is well-formed (id, ratio, shot text)', boxes.length === got.length, `${boxes.length} well-formed of ${got.length}`)
  check('the placeholder source string is not in the HTML', !html.includes('review build only'))
} else {
  check('no slot placeholders when the flag is off', got.length === 0 && dashed === 0)
}
check('program section renders its lists', /<ul[\s>]/.test(regionHtml('city-program', 'second-opinion')))
check('FAQ answers contain no links (schema rule)', !/<a\s/.test(regionHtml('faq', 'cta')))
{
  const quotes = [...text.matchAll(/“([^”]{1,200})”/g)].map((m) => m[1])
  const longQuotes = quotes.filter((q) => q.split(/\s+/).length > 12)
  check('no quoted passage longer than twelve words', longQuotes.length === 0, longQuotes.join(' | '))
}
const repairClaims = /(we|our crews?)\s+(repair|replace|install|excavate|line)\b/i.exec(text)
check('no claim that The Sewer Pros repairs or replaces', repairClaims === null, repairClaims?.[0])
const repairNo = count(/does not perform repairs or replacements|do not perform sewer repairs or replacements|No\. We inspect, locate, diagnose and clean|without a repair sale/g)
check('approved no-repair statements present (second opinion, program closing, FAQ 9, final CTA)', repairNo >= 4, String(repairNo))
check('no dollar amount on the page', !/\$\d/.test(text))
check('no office, address, map or "visit us" language', !/(\bour (las vegas )?(office|location)|visit (us|our)|storefront)/i.test(text))
check('no agency street address published', !/\d{3,5}\s+[A-Z][a-z]+(\s+[A-Za-z]+)?\s+(Street|St\.|Avenue|Ave\.|Road|Rd\.|Boulevard|Blvd\.|Drive|Dr\.|Hwy)/.test(text))

/* ---- Links ---- */
const anchors = [...mainHtml.matchAll(/<a\s[^>]*href="([^"]+)"[^>]*>/g)]
const external = anchors.filter((m) => /^https?:/.test(m[1]))
check('nine distinct external source links', new Set(external.map((m) => m[1])).size === 9, String(new Set(external.map((m) => m[1])).size))
check('every external link has rel="noopener"', external.every((m) => /rel="[^"]*noopener/.test(m[0])), external.filter((m) => !/rel="[^"]*noopener/.test(m[0])).map((m) => m[1]).join(', '))
check('the addenda link has no trailing space-encoding', !/Addendum\.pdf(%20|\s)/.test(html))
const internal = anchors.map((m) => m[1]).filter((h) => h.startsWith('/') && !h.startsWith('//'))
const missing = [...new Set(internal)].filter((h) => {
  const p = h.split('#')[0].split('?')[0]
  if (/\.(webp|png|jpg|svg|ico)$/.test(p) || p === '/manifest.webmanifest') return false
  return !fs.existsSync(path.join(ROOT, p, 'index.html'))
})
check('every internal link resolves to a built route', missing.length === 0, missing.join(', '))
for (const want of ['/services/sewer-camera-inspection/', '/services/sewer-cleaning/', '/services/hydro-jetting/', '/services/pre-purchase-sewer-inspection/', '/for/home-buyers/', '/for/real-estate-agents/', '/las-vegas-nv/summerlin/', '/las-vegas-nv/henderson/', '/las-vegas-nv/north-las-vegas/', '/las-vegas-nv/']) {
  check(`links to ${want}`, internal.includes(want))
}
for (const u of new Set(external.map((m) => m[1]))) console.log('  ext', u)

/* ---- Sitemap ---- */
const sitemapPath = path.join(ROOT, 'sitemap.xml')
if (fs.existsSync(sitemapPath)) {
  check('page is in the sitemap (indexable flag unchanged)', fs.readFileSync(sitemapPath, 'utf8').includes(`${ORIGIN}/las-vegas-nv/las-vegas/`))
}

/* ---- Trust strip founding year ---- */
check('"Since 2011" appears nowhere on the page', !html.includes('Since 2011') && !/Since\s*(<!-- -->)?\s*2011/.test(html))
check('trust strip has no founding-year cell', !/Serving property owners/.test(text) && !/Since\s+\d{4}/.test(text))
{
  const s0 = mainHtml.indexOf('id="experience-counters"')
  const stripHtml = mainHtml.slice(s0, mainHtml.indexOf('</aside>', s0))
  check('trust strip shows the three company-wide figures', ['Sewer inspections performed', 'Inspections per year', 'Markets served'].every((l) => stripHtml.includes(l)) && (stripHtml.match(/<dd/g) ?? []).length === 3)
}

/* ---- Market phones (whole document, header and footer included) ---- */
check(
  'no other market phone number anywhere in the document (JSON-LD excluded)',
  otherMarketPhoneHits(html, 'las-vegas-nv').length === 0,
  otherMarketPhoneHits(html, 'las-vegas-nv').join(', '),
)

console.log(failures === 0 ? '\nAll checks passed.' : `\n${failures} check(s) FAILED.`)
process.exit(failures === 0 ? 0 : 1)
