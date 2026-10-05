/**
 * Post-build checks for /las-vegas-nv/north-las-vegas/.
 *
 * Reads the static export in `out/` (run `npm run build` first). No
 * dependencies. Exits 1 on any failure.
 *
 *   node scripts/verify-north-las-vegas-page.mjs
 *
 * Adapted from `verify-henderson-page.mjs`. The City of North Las Vegas says the
 * homeowner's responsibility for the sewer service lateral ends at the connection
 * to the main in the street, and states blockages and breakages separately; the
 * page shows both in the City's words and never reconciles them. 702-633-1484 is
 * the City's number, not a company number. The company phone and hours are the
 * Las Vegas market's own (DEC-071); the founding year is 0 (unknown), so the trust
 * strip drops that cell. No housing figure appears anywhere (no housing-age
 * section). The page never says the City repairs, pays or reimburses anything,
 * never says a permit is or is not required, and never recommends the optional
 * third-party plan.
 */
import fs from 'node:fs'
import path from 'node:path'
import { otherMarketPhoneHits } from './lib/market-phones.mjs'

const ROOT = path.resolve('out')
const PAGE = path.join(ROOT, 'las-vegas-nv', 'north-las-vegas', 'index.html')
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
/** Page nodes with the FAQPage answers blanked (optionally keeping one question's answer). */
const ldWithoutAnswers = (keep) => {
  const copy = JSON.parse(JSON.stringify(pageNodes))
  const f = copy.find((n) => n['@type'] === 'FAQPage')
  if (f) f.mainEntity = f.mainEntity.map((q) => (keep && keep.test(q.name) ? q : { name: q.name }))
  return JSON.stringify(copy)
}

for (const bad of [
  'LocalBusiness', 'AggregateRating', 'Review', 'ratingValue', 'reviewCount', 'PostalAddress',
  'GeoCoordinates', 'openingHoursSpecification', 'HowTo', 'GovernmentService', 'Offer',
  'Grant', 'MonetaryGrant',
]) {
  check(`JSON-LD has no ${bad}`, !ldRaw.includes(bad))
}
// `price` as a property only: answer text says the City page lists no price.
check('JSON-LD has no price property', !/"(price|priceCurrency|priceRange)"\s*:/.test(ldRaw))
check('page HTML has no itemprop rating microdata', !/itemprop="(ratingValue|reviewCount|aggregateRating|review)"/i.test(html))
check('no review marquee on the page', !/marquee-track/.test(mainHtml))
check('no placeholder strings in JSON-LD', !/REPLACE-|TODO|Placeholder/i.test(ldRaw))
const orgNodes = graph.filter((n) => n['@type'] === 'Organization')
check('only the company Organization node exists (none for the City or any agency)', orgNodes.length === 1, String(orgNodes.length))
const places = graph.filter((n) => ['Place', 'City'].includes(n['@type']))
check(
  'only the Las Vegas market Place exists (no City-of-North-Las-Vegas Place node)',
  places.length === 1 && places[0]['@id'] === `${ORIGIN}/las-vegas-nv/#place` && places[0].name === 'Las Vegas, NV',
  JSON.stringify(places.map((p) => [p['@id'], p.name])),
)
check(
  'no JSON-LD node this page adds mentions an agency, the plan provider, the Water Reclamation Facility or a founding date outside FAQ answer text',
  !/(Utilities Department|Operations division|Water Reclamation|membrane|Service Line Warranties|insurance|warranty|foundingDate)/i.test(ldWithoutAnswers()),
)
{
  const withFaq8 = ldWithoutAnswers(/optional coverage/)
  const stripped = withFaq8.replace(/Does the City offer optional coverage for sewer lines\?[\s\S]*?"\}\}/, '')
  check('"Service Line Warranties" and "insurance" appear nowhere else in the page nodes', !/(Service Line Warranties|insurance|warranty)/i.test(stripped))
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
  'BreadcrumbList is Home, Locations / Service Areas, Las Vegas, NV Sewer Services, North Las Vegas',
  JSON.stringify(crumbNames) === JSON.stringify(['Home', 'Locations / Service Areas', 'Las Vegas, NV Sewer Services', 'North Las Vegas']),
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
const contentSrc = fs.readFileSync(path.resolve('content/pages/las-vegas-north-las-vegas.tsx'), 'utf8')
const faqOn = !/faqSchemaApproved:\s*false/.test(contentSrc)
const faqQs = [...mainHtml.matchAll(/<summary[^>]*><span[^>]*><h3[^>]*>([\s\S]*?)<\/h3>/g)].map((m) => norm(m[1].replace(/<[^>]+>/g, ' ')))
check('ten FAQ questions in the DOM', faqQs.length === 10, `found ${faqQs.length}`)
check('FAQ question 1 is the live page question', faqQs[0] === 'Who is responsible for the sewer lateral in North Las Vegas?', faqQs[0])
const faqLd = graph.find((n) => n['@type'] === 'FAQPage')
const webPage = graph.find((n) => n['@type'] === 'WebPage')
if (faqOn) {
  check('FAQPage node present', faqLd !== undefined)
  const ldQs = (faqLd?.mainEntity ?? []).map((q) => norm(q.name))
  check('FAQPage questions equal the visible questions, in order', JSON.stringify(ldQs) === JSON.stringify(faqQs), `${ldQs.length} vs ${faqQs.length}`)
  check('FAQPage carries ten mainEntity items', ldQs.length === 10, String(ldQs.length))
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
{
  // The City's number appears in JSON-LD only inside FAQ answer text (FAQ 3 and FAQ 5).
  check('the City number appears in JSON-LD only inside FAQ answer text', !/702-633-1484/.test(ldWithoutAnswers()))
  const inFaq = (faqLd?.mainEntity ?? []).filter((q) => /702-633-1484/.test(q.acceptedAnswer.text)).map((q) => q.name)
  check('the City number is in exactly FAQ 3 and FAQ 5 answers', !faqOn || inFaq.length === 2, inFaq.join(' | '))
  const bad = ['licensed', 'PVC', 'clay', 'HomeServe', 'Clark County', 'CCWRD', 'Public Works', 'every other authority', '2019', '2003', '41.8', '2011', 'deductible', 'guarantee', '$', '2770', '13.24', 'caliche', '633-1216', '633-1536', '399-0383']
    .filter((w) => pageLd.toLowerCase().includes(w.toLowerCase()))
  check('no forbidden strings in the JSON-LD this page adds', bad.length === 0, bad.join(', '))
  const hits = ['2011', '314', '821-1600'].filter((w) => pageLd.includes(w))
  check('no 2011, 314 or 821-1600 in any node this page adds', hits.length === 0, hits.join(', '))
}

/* ---- WebPage ---- */
const META = 'Sewer camera inspection and cleaning in North Las Vegas, NV. See what the City says about your sewer lateral, blockages, breaks, and who to call.'
check('WebPage name equals the seoTitle', webPage?.name === 'Sewer Inspection & Cleaning in North Las Vegas, NV', webPage?.name)
check('WebPage description equals the meta description', webPage?.description === META, String(webPage?.description))
check(`meta description length is within 120 to 160 characters (${META.length})`, META.length > 120 && META.length <= 160, String(META.length))
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
check('title (brand suffix once)', /<title>Sewer Inspection &amp; Cleaning in North Las Vegas, NV \| The Sewer Pros<\/title>/.test(html))
check('canonical', html.includes(`<link rel="canonical" href="${ORIGIN}/las-vegas-nv/north-las-vegas/"/>`))
check('robots index, follow (unchanged)', html.includes('<meta name="robots" content="index, follow"/>'))
const h1s = [...mainHtml.matchAll(/<h1[\s>][\s\S]*?<\/h1>/g)]
check('one H1', h1s.length === 1)
check('H1 text', h1s.length === 1 && strip(h1s[0][0]) === 'Sewer Inspection and Cleaning in North Las Vegas, NV', h1s[0] && strip(h1s[0][0]))

/* ---- Anchors and order ---- */
const idAttrs = [...mainHtml.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1])
const dupes = idAttrs.filter((v, i) => idAttrs.indexOf(v) !== i)
check('no duplicate ids (hero and final form ids differ)', dupes.length === 0, dupes.join(', '))
const ORDER = ['request', 'services', 'responsible', 'how-system', 'who-to-call', 'city-program', 'second-opinion', 'buying', 'areas', 'faq']
for (const anchor of [...ORDER, 'sources']) check(`anchor #${anchor} exists`, idAttrs.includes(anchor))
for (const absent of ['reviews', 'age', 'neighborhoods', 'commercial']) check(`no #${absent} section (intentionally absent)`, !idAttrs.includes(absent))
const pos = ORDER.map((a) => mainHtml.indexOf(`id="${a}"`))
check('anchors appear in the required order', pos.every((p, i) => p > -1 && (i === 0 || p > pos[i - 1])), pos.join(','))
const jump = ['#services', '#responsible', '#how-system', '#who-to-call', '#city-program', '#second-opinion', '#buying', '#faq']
const jumpPos = jump.map((h) => mainHtml.indexOf(`href="${h}"`))
check('jump nav lists the eight links in order', jumpPos.every((p, i) => p > -1 && (i === 0 || p > jumpPos[i - 1])), jumpPos.join(','))
check('jump nav has no #age link', !mainHtml.includes('href="#age"'))

/* ---- Copy checks ---- */
check('no em dashes in the whole document (U+2014)', !html.includes(String.fromCharCode(8212)))
const REQUIRED = [
  LV_PHONE, LV_HOURS, 'City of North Las Vegas', '702-633-1484', 'Utilities Department', 'Operations division',
  'sewer service lateral', 'connection to the main', 'blockage', 'breakage', 'Water Leaks',
  'Last reviewed: October 4, 2026', 'does not perform repairs or replacements', 'does not arrange reimbursement',
  'We did not find a lateral repair, replacement, grant, reimbursement or inspection-assistance program run by the City of North Las Vegas',
  'Who to call', 'Know who to call', 'Service Communication', 'Start New Service',
]
const missingReq = REQUIRED.filter((t) => !text.toLowerCase().includes(norm(t).toLowerCase()))
check('required strings present', missingReq.length === 0, missingReq.join(' | '))
check(`tel: links use the Las Vegas E.164 value (${LV_E164})`, html.includes(`href="tel:${LV_E164}"`))
const telHrefs = [...mainHtml.matchAll(/href="(tel:[^"]+)"/g)].map((m) => m[1])
check(
  '<main> tel: links are only the Las Vegas number and the one labelled City number',
  telHrefs.every((h) => h === `tel:${LV_E164}` || h === 'tel:+1-702-633-1484'),
  [...new Set(telHrefs)].join(', '),
)
check('hero shows the Las Vegas number', text.includes(norm('Call ' + LV_PHONE)))
check('mobile bar links the Las Vegas number', new RegExp('aria-label="Quick contact"[\\s\\S]*?href="tel:' + LV_E164.replace('+', '\\+')).test(mainHtml))
const finalCtaHtml = mainHtml.slice(mainHtml.indexOf('Evidence before expensive decisions'))
check('final CTA shows the Las Vegas number as a tel: link', finalCtaHtml.includes(`href="tel:${LV_E164}"`))
const footerHtml = bodyHtml.slice(bodyHtml.indexOf('<footer'))
check('footer shows the Las Vegas number as a tel: link', footerHtml.includes(`href="tel:${LV_E164}"`))
check('form area (hero card) shows the Las Vegas number as a tel: link', mainHtml.slice(0, mainHtml.indexOf('id="services"')).includes(`href="tel:${LV_E164}"`))

// Cross-market scan. The City's 702 number is not a company number.
const CROSS = ['(314)', '314-', '821-1600', 'Since 2011', 'MSD', 'Metropolitan St. Louis', 'Google reviews', 'Realtors', '(858)', '(760)', 'CVSan', 'Vallecitos', 'City of Las Vegas', 'Clark County', 'bookaninspection']
const crossHits = CROSS.filter((w) => text.includes(norm(w)) || mainHtml.includes(w))
check('cross-market scan of <main> finds no other market number, review text, agency or email', crossHits.length === 0, crossHits.join(', '))
check('<main> links contain no St. Louis or San Diego tel: number', !/href="tel:\+1-?(314|858|619|760)/.test(mainHtml))
check('no mailto: link in <main>', !/href="mailto:/.test(mainHtml))

const FORBIDDEN = [
  'licensed', 'Class A', 'C-1', 'C-36', 'C-42', 'PVC', 'clay', 'newer housing', 'ground movement', 'settlement',
  'HomeServe', '$', 'deductible', 'Clark County', 'CCWRD', 'Public Works', 'every other authority',
  'Water Pollution Control', '2011', 'Since 2011', '2019', '2003', '41.8', 'same-day', '24/7', '24-hour',
  'guarantee', 'insured', 'City of Las Vegas', 'programme', 'enquiries', 'property line', 'all the way to the main',
  '2770', '13.24', '13.28', 'porous', 'caliche', 'conservation', '633-1216', '633-1536', '399-0383',
  'still open', 'accepting applications', 'you will be reimbursed', 'Placeholder', 'NOT FOR PRODUCTION',
  'testimonial', 'free estimate', 'newest', 'median year', 'Census', 'built in', 'Not able to locate', 'not able to locate',
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
const programText = region('city-program', 'second-opinion')
const systemText = region('how-system', 'who-to-call')
const buyText = region('buying', 'areas')
const respText = region('responsible', 'how-system')

const inRegions = (re, regions, label) => {
  const total = count(new RegExp(re.source, 'g'))
  const inside = regions.reduce((n, r) => n + (r.match(new RegExp(re.source, 'g')) ?? []).length, 0)
  check(label, total === inside, `${total} on page, ${inside} in allowed sections`)
}
inRegions(/Water Reclamation Facility|membrane bioreactor/, [systemText], '"Water Reclamation Facility" and "membrane bioreactor" only in the sewer explainer')
inRegions(/Start New Service/, [buyText, faqText], '"Start New Service" only in the buying section and FAQ 7')
inRegions(/Service Communication/, [callText, faqText], '"Service Communication" only in Who to call and FAQ 5')
inRegions(/Service Line Warranties of America/, [programText, faqText], '"Service Line Warranties of America" only in the City program list and FAQ 8')
check('"Service Line Warranties of America" appears exactly twice', count(/Service Line Warranties of America/g) === 2, String(count(/Service Line Warranties of America/g)))
inRegions(/insur(ance|er)/, [programText, faqText, buyText], '"insurance" only in the program third-party bullet, FAQ 8 and the buying section')
inRegions(/702-633-1484/, [callText, faqText], '702-633-1484 only in Who to call, FAQ 3 and FAQ 5')
check('702-633-1484 appears three times as text (panel, FAQ 3, FAQ 5)', count(/702-633-1484/g) === 3, String(count(/702-633-1484/g)))
contextOnly('702-633-1484', /(Utilities Department|City’s number)/, '702-633-1484 only as the City’s labelled number')
check('the City number is described as customer service and online request, not a sewer emergency line', /customer-service number and online request, not a sewer emergency line/.test(callText) && count(/This is the City’s number, not ours/g) === 1)
check('FAQ 5 says these are the City’s contacts, not ours', count(/These are the City’s contacts, not ours/g) === 1)
contextOnly('(emergency|after-hours)', /(did not find a City sewer emergency line|not a sewer emergency line|emergency line, after-hours)/i, '"emergency" and "after-hours" only in the we-did-not-find sentences and "not a sewer emergency line"')
contextOnly('reimburs', /(did not find|does not arrange|not a statement|grant, reimbursement|grant or reimbursement|reimbursement program|reimbursement or inspection|repair or reimbursement)/i, '"reimburse" only in none-found sentences, the heading or the do-not-arrange sentence')
contextOnly('grant', /(did not find|found no|grant or reimbursement|grant, reimbursement|none found|A City grant)/i, '"grant" only in none-found sentences or the heading')
contextOnly('lining', /excavation, lining, or replacement/, '"lining" only in the approved second-opinion sentence')
contextOnly('replac', /(excavation, lining, or replacement|repairs? or replacements?|repairing or replacing|replacement, grant|sewer repairs or replacements|repair or replace|does not replace any review|repair, replacement)/i, '"replace" only as the owner or City duty, none-found sentences or the no-repair statements')
{
  const outsideAreas = withoutRegion('areas', 'faq')
  const hit = ['Henderson', 'Summerlin'].filter((c) => outsideAreas.includes(c))
  check('Henderson and Summerlin appear only as nearby-areas link labels', hit.length === 0, hit.join(', '))
  const stlSd = [...text.matchAll(/St\. Louis|San Diego/g)].length
  check('St. Louis and San Diego appear only in the company panel’s newer-market sentence', stlSd === 2 && /St\. Louis and San Diego/.test(callText), String(stlSd))
  const lvLoose = text.replace(/North Las Vegas|Las Vegas Valley|Las Vegas, NV|Las Vegas market|Las Vegas service areas|Other Las Vegas/g, '').match(/Las Vegas/g) ?? []
  check('bare "Las Vegas" appears only as the nearby-areas link label', lvLoose.length === 1, String(lvLoose.length))
}
{
  // Accuracy: the City's three statements appear in the City's words and are never merged.
  const BOUNDARY = 'ends at the connection to the main in the street'
  const BLOCKAGE = 'responsible throughout the entire pipe until the connection to the City’s main'
  const BREAKAGE = 'responsible until the point where the sewer line crosses the boundary of the property'
  check('boundary sentence present', count(new RegExp(BOUNDARY, 'g')) >= 3, String(count(new RegExp(BOUNDARY, 'g'))))
  check('blockage statement present in the responsibility section', respText.includes(BLOCKAGE))
  check('breakage statement present in the responsibility section', respText.includes(BREAKAGE))
  check('blockage and breakage are two separate statements (not merged)', !/blockage or breakage|breakage or blockage[^.]*(throughout|until the point)/i.test(respText.replace('breakage or blockage is on the City side', '')))
  check('plumber-video-review sentence present', /video evidence may be submitted to the Utilities Department for review/.test(respText))
  check('Utilities Department and Operations division wording present', /Utilities Department, through its Operations division, provides water and sewer service/.test(respText))
  check('responsibility table has the three columns', /Situation[\s\S]*What the City says[\s\S]*What we did not find/.test(regionHtml('responsible', 'how-system').replace(/<[^>]+>/g, ' ')))
}
check('page never says the City will pay for damage or that a grant exists', !/(City|department) (will|does) pay|will be reimbursed|a grant exists|City policy on|City will (repair|fix|cover|restore)|the City repairs/i.test(text))
check('page states no City policy on who pays on the City side', /did not find a City statement of who pays for repairs on the City’s side/.test(text))
contextOnly('(camera inspection|cleaning)( or (a )?(camera inspection|cleaning))? (needs|requires|does not need|does not require) a permit', /(lateral work, cleaning or a camera inspection needs a permit|did not find)/i, 'page does not say a permit is or is not required for cleaning or a camera inspection (none-found wording only)')
check('page never says no permit is required', !/no permit is required/i.test(text))
check('the optional-plan text carries no price, coverage terms or recommendation', /does not recommend it/.test(programText) && !/(recommend (the|this) plan|we recommend|\bcosts?\b|\bper (month|year)\b)/i.test(programText.replace('does not recommend it', '')))
check('page tells readers to confirm with the City', /confirm with the City how the rules apply/.test(text) && /Official guidance can change, so confirm details with the City of North Las Vegas/.test(text))
check('no ImagePlaceholder warning text', !/NOT FOR PRODUCTION INDEXATION/i.test(html))
const dashed = (mainHtml.match(/border-dashed/g) ?? []).length
const slotBoxes = mainHtml.match(/Image slot: [a-z-]+/g) ?? []
check('border-dashed appears only on labelled slot boxes', dashed === slotBoxes.length, `${dashed} vs ${slotBoxes.length}`)
const got = slotBoxes.map((s) => s.replace('Image slot: ', ''))
console.log(`INFO  slot placeholders drawn (${got.length}): ${got.join(', ')}`)
// Slot ids come from the module's own IMAGE_SLOTS list. A slot with no `src` must draw
// exactly one labelled box while the flag is on.
const slotBlock = contentSrc.slice(contentSrc.indexOf('const IMAGE_SLOTS'), contentSrc.indexOf('function slotImage')).replace(/\r\n/g, '\n')
const slotObjs = [...slotBlock.matchAll(/^  \{\n([\s\S]*?)^  \},?$/gm)].map((m) => m[1])
const definedIds = slotObjs.map((o) => o.match(/id: '([a-z-]+)'/)?.[1])
const DEFINED = slotObjs.filter((o) => !/^\s+src: '/m.test(o)).map((o) => o.match(/id: '([a-z-]+)'/)?.[1])
check('IMAGE_SLOTS defines the 19 expected unique slot ids', definedIds.length === 19 && new Set(definedIds).size === 19 && definedIds[0] === 'north-las-vegas-hero' && definedIds[18] === 'final-bg', definedIds.join(','))
console.log(`INFO  slots defined: ${definedIds.length}; without src (expected boxes): ${DEFINED.length}`)
if (PLACEHOLDERS_ON) {
  check(`exactly one labelled box per slot without a src (${DEFINED.length}), none extra`, DEFINED.every((e) => got.filter((g) => g === e).length === 1) && got.length === DEFINED.length && got.every((g) => DEFINED.includes(g)), got.join(', '))
  console.log(`INFO  final-bg box drawn: ${got.includes('final-bg')}`)
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
check('approved no-repair statements present (second opinion, program closing, FAQ 10, final CTA)', repairNo >= 4, String(repairNo))
check('no dollar amount on the page', !/\$\d/.test(text))
check('no office, address, map or "visit us" language', !/(\bour (las vegas )?(office|location)|visit (us|our)|storefront)/i.test(text))
check('no agency street address published', !/\d{3,5}\s+[A-Z][a-z]+(\s+[A-Za-z]+)?\s+(Street|St\.|Avenue|Ave\.|Road|Rd\.|Boulevard|Blvd\.|Drive|Dr\.|Hwy)/.test(text))
check('no housing-age sentence or figure', !/(median year|housing units|year built|built before|built in \d{4})/i.test(text))

/* ---- Links ---- */
const anchors = [...mainHtml.matchAll(/<a\s[^>]*href="([^"]+)"[^>]*>/g)]
const external = anchors.filter((m) => /^https?:/.test(m[1]))
check('three distinct external source links', new Set(external.map((m) => m[1])).size === 3, String(new Set(external.map((m) => m[1])).size))
check('every external link has rel="noopener"', external.every((m) => /rel="[^"]*noopener/.test(m[0])), external.filter((m) => !/rel="[^"]*noopener/.test(m[0])).map((m) => m[1]).join(', '))
const internal = anchors.map((m) => m[1]).filter((h) => h.startsWith('/') && !h.startsWith('//'))
const missing = [...new Set(internal)].filter((h) => {
  const p = h.split('#')[0].split('?')[0]
  if (/\.(webp|png|jpg|svg|ico)$/.test(p) || p === '/manifest.webmanifest') return false
  return !fs.existsSync(path.join(ROOT, p, 'index.html'))
})
check('every internal link resolves to a built route', missing.length === 0, missing.join(', '))
for (const want of ['/services/sewer-camera-inspection/', '/services/sewer-cleaning/', '/services/hydro-jetting/', '/services/pre-purchase-sewer-inspection/', '/for/home-buyers/', '/for/real-estate-agents/', '/services/drain-cleaning/', '/las-vegas-nv/las-vegas/', '/las-vegas-nv/henderson/', '/las-vegas-nv/summerlin/', '/las-vegas-nv/']) {
  check(`links to ${want}`, internal.includes(want))
}
for (const u of new Set(external.map((m) => m[1]))) console.log('  ext', u)

/* ---- Sitemap ---- */
const sitemapPath = path.join(ROOT, 'sitemap.xml')
if (fs.existsSync(sitemapPath)) {
  check('page is in the sitemap (indexable flag unchanged)', fs.readFileSync(sitemapPath, 'utf8').includes(`${ORIGIN}/las-vegas-nv/north-las-vegas/`))
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
