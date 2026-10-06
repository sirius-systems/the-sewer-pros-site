/**
 * Post-build checks for /san-diego-ca/oceanside/.
 *
 * Reads the static export in `out/` (run `npm run build` first). No
 * dependencies. Exits 1 on any failure.
 *
 *   node scripts/verify-oceanside-page.mjs
 *
 * Adapted from `verify-san-marcos-page.mjs`. Oceanside is served by the City's
 * own Water Utilities Department, which says private sewer lines "from the
 * street to your house" are the owner's. The City's (760) numbers are the City's,
 * not company numbers. The company phone, hours and founding year are San
 * Diego's own (DEC-071). The page never says a grant exists, that the City will
 * pay for any damage, states a breakpoint, or draws a pipe-material conclusion
 * from housing age.
 */
import fs from 'node:fs'
import path from 'node:path'
import { otherMarketPhoneHits } from './lib/market-phones.mjs'

const ROOT = path.resolve('out')
const PAGE = path.join(ROOT, 'san-diego-ca', 'oceanside', 'index.html')
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

/* ---- San Diego market constants (DEC-071), read from the data file ---- */
const marketsSrc = fs.readFileSync(path.resolve('data/markets/markets.ts'), 'utf8')
const sdBlock = marketsSrc.match(/'san-diego-ca':\s*\{\s*phone:[\s\S]*?foundingYear:\s*(\d+)/)?.[0] ?? ''
const SD_PHONE = sdBlock.match(/phone:\s*'([^']+)'/)?.[1]
const SD_E164 = sdBlock.match(/phoneE164:\s*'([^']+)'/)?.[1]
const SD_HOURS = sdBlock.match(/hours:\s*'([^']+)'/)?.[1]
const SD_YEAR = sdBlock.match(/foundingYear:\s*(\d+)/)?.[1]
check('San Diego constants found in data/markets/markets.ts', Boolean(SD_PHONE && SD_E164 && SD_HOURS && SD_YEAR), JSON.stringify({ SD_PHONE, SD_E164, SD_HOURS, SD_YEAR }))
check('San Diego founding year is above 0', Number(SD_YEAR) > 0)

/* ---- JSON-LD ---- */
const ldBlocks = [...html.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)]
check('exactly one JSON-LD block', ldBlocks.length === 1, `found ${ldBlocks.length}`)
const ldRaw = ldBlocks[0][1]
const graph = JSON.parse(ldRaw)['@graph']
const ids = new Set(graph.map((n) => n['@id']).filter(Boolean))

for (const bad of [
  'LocalBusiness', 'AggregateRating', 'Review', 'ratingValue', 'reviewCount', 'PostalAddress',
  'GeoCoordinates', 'openingHoursSpecification', 'HowTo', 'GovernmentService', 'Offer', 'price',
  'Grant', 'MonetaryGrant',
]) {
  check(`JSON-LD has no ${bad}`, !ldRaw.includes(bad))
}
check('page HTML has no itemprop rating microdata', !/itemprop="(ratingValue|reviewCount|aggregateRating|review)"/i.test(html))
check('no review marquee on the page', !/marquee-track/.test(mainHtml))
check('no placeholder strings in JSON-LD', !/REPLACE-|TODO|Placeholder/i.test(ldRaw))
const orgNodes = graph.filter((n) => n['@type'] === 'Organization')
check('only the company Organization node exists (none for the City)', orgNodes.length === 1, String(orgNodes.length))
const places = graph.filter((n) => ['Place', 'City'].includes(n['@type']))
check(
  'only the San Diego market Place exists (no Oceanside Place node)',
  places.length === 1 && places[0]['@id'] === `${ORIGIN}/san-diego-ca/#place`,
  JSON.stringify(places.map((p) => p['@id'])),
)

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
  services.every((s) => s.provider?.['@id'] === `${ORIGIN}/#organization` && s.areaServed?.[0]?.['@id'] === `${ORIGIN}/san-diego-ca/#place`),
)
check('no repair, replacement, lining or excavation Service', !services.some((s) => /repair|replac|lining|excavat|install|EMRA/i.test(s.name)))

const crumbLd = graph.find((n) => n['@type'] === 'BreadcrumbList')
const crumbNames = crumbLd?.itemListElement.map((i) => i.name)
check(
  'BreadcrumbList is Home, Locations / Service Areas, San Diego, CA Sewer Services, Oceanside',
  JSON.stringify(crumbNames) === JSON.stringify(['Home', 'Locations / Service Areas', 'San Diego, CA Sewer Services', 'Oceanside']),
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
const contentSrc = fs.readFileSync(path.resolve('content/pages/san-diego-oceanside.tsx'), 'utf8')
const faqOn = !/faqSchemaApproved:\s*false/.test(contentSrc)
const faqQs = [...mainHtml.matchAll(/<summary[^>]*><span[^>]*><h3[^>]*>([\s\S]*?)<\/h3>/g)].map((m) => norm(m[1].replace(/<[^>]+>/g, ' ')))
check('ten FAQ questions in the DOM', faqQs.length === 10, `found ${faqQs.length}`)
const faqLd = graph.find((n) => n['@type'] === 'FAQPage')
const webPage = graph.find((n) => n['@type'] === 'WebPage')
if (faqOn) {
  check('FAQPage node present', faqLd !== undefined)
  const ldQs = (faqLd?.mainEntity ?? []).map((q) => norm(q.name))
  check('FAQPage questions equal the visible questions, in order', JSON.stringify(ldQs) === JSON.stringify(faqQs), `${ldQs.length} vs ${faqQs.length}`)
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

// Census values live in visible text and FAQ 8's answer only, never other JSON-LD properties.
{
  const copy = JSON.parse(JSON.stringify(graph))
  const f = copy.find((n) => n['@type'] === 'FAQPage')
  if (f) f.mainEntity = f.mainEntity.filter((q) => !/housing/i.test(q.name))
  const rest = JSON.stringify(copy)
  const hits = ['1984', '16.9', '48.6', '66,997'].filter((v) => rest.includes(v))
  check('Census figures appear in no JSON-LD property other than FAQ 8’s answer text', hits.length === 0, hits.join(', '))
}

/* ---- WebPage ---- */
const META = 'Sewer camera inspection and cleaning in Oceanside, CA. See what the City says about private sewer lines, who to call, and what we did not find.'
check('WebPage name equals the seoTitle', webPage?.name === 'Sewer Inspection & Cleaning in Oceanside, CA', webPage?.name)
check('WebPage description equals the meta description', webPage?.description === META, String(webPage?.description))
check(`meta description is ${META.length} characters (reported)`, META.length > 120 && META.length <= 160, String(META.length))
console.log(`INFO  meta description length: ${META.length}`)
check('WebPage about is the San Diego market Place', webPage?.about?.['@id'] === `${ORIGIN}/san-diego-ca/#place`)
check('meta description tag matches', html.includes(`<meta name="description" content="${META}"/>`))

/* ---- Origin ---- */
console.log(`INFO  origin under test: ${ORIGIN}`)
if (ORIGIN !== PRODUCTION_ORIGIN) {
  check('no production-origin strings in the built HTML or JSON-LD', !html.includes(PRODUCTION_ORIGIN) && !html.includes('www.thesewerpros.com'))
}
const ldHosts = [...new Set([...ldRaw.matchAll(/https?:\/\/[^/"\s]+/g)].map((m) => m[0]))]
check('JSON-LD uses only the build origin plus schema.org', ldHosts.every((h) => h === ORIGIN || h === 'https://schema.org'), ldHosts.join(', '))

/* ---- Head ---- */
check('title (brand suffix once)', /<title>Sewer Inspection &amp; Cleaning in Oceanside, CA \| The Sewer Pros<\/title>/.test(html))
check('canonical', html.includes(`<link rel="canonical" href="${ORIGIN}/san-diego-ca/oceanside/"/>`))
check('robots index, follow (unchanged)', html.includes('<meta name="robots" content="index, follow"/>'))
const h1s = [...mainHtml.matchAll(/<h1[\s>][\s\S]*?<\/h1>/g)]
check('one H1', h1s.length === 1)
check('H1 text', h1s.length === 1 && strip(h1s[0][0]) === 'Sewer Inspection and Cleaning in Oceanside, CA', h1s[0] && strip(h1s[0][0]))

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
  SD_PHONE, SD_HOURS, `since ${SD_YEAR}`,
  'City of Oceanside Water Utilities Department', '(760) 435-5800', '(760) 435-3900',
  'from the street to your house', 'Registered Civil Engineer', '450 miles', '34 sewer lift stations',
  '1984', '16.9', '48.6', 'Last reviewed: October 4, 2026',
  'does not perform repairs or replacements', 'does not arrange reimbursement',
  'We did not find a lateral repair, replacement, grant, reimbursement or inspection-assistance program from the City of Oceanside',
  'Who to call', 'Know who to call', 'our arithmetic',
]
const missingReq = REQUIRED.filter((t) => !text.includes(norm(t)))
check('required strings present', missingReq.length === 0, missingReq.join(' | '))
check(`tel: links use the San Diego E.164 value (${SD_E164})`, html.includes(`href="tel:${SD_E164}"`))
const telHrefs = [...mainHtml.matchAll(/href="(tel:[^"]+)"/g)].map((m) => m[1])
check(
  '<main> tel: links are only the San Diego number and the labelled City customer service number (the water-emergency number is plain text)',
  telHrefs.every((h) => h === `tel:${SD_E164}` || h === 'tel:+17604355800'),
  [...new Set(telHrefs)].join(', '),
)
check('(760) 435-3900 is never a tel: link', !/tel:\+?1?-?760-?435-?3900/.test(html))
check('hero shows the San Diego number', text.includes(norm('Call ' + SD_PHONE)))
check('mobile bar links the San Diego number', new RegExp('aria-label="Quick contact"[\\s\\S]*?href="tel:' + SD_E164.replace('+', '\\+')).test(mainHtml))
const finalCtaHtml = mainHtml.slice(mainHtml.indexOf('Evidence before expensive decisions'))
check('final CTA shows the San Diego number as a tel: link', finalCtaHtml.includes(`href="tel:${SD_E164}"`))
const footerHtml = bodyHtml.slice(bodyHtml.indexOf('<footer'))
check('footer shows the San Diego number as a tel: link', footerHtml.includes(`href="tel:${SD_E164}"`))

// Cross-market scan. The City's 760 numbers are not company numbers.
const CROSS = ['(314)', '314-', '821-1600', 'Since 2011', 'MSD', 'Metropolitan St. Louis', 'St. Louis', 'Missouri', 'Google reviews', 'Realtors', 'Las Vegas', 'Nevada', 'CVSan', 'Vallecitos', 'Leucadia', 'Vista Irrigation']
const crossHits = CROSS.filter((w) => text.includes(norm(w)) || mainHtml.includes(w))
check('cross-market scan of <main> finds no St. Louis, Las Vegas or other-agency rule', crossHits.length === 0, crossHits.join(', '))
check('<main> links contain no St. Louis or Las Vegas tel: number', !/href="tel:\+1-?(314|725|702)/.test(mainHtml))

const FORBIDDEN = [
  'licensed', 'Class A', 'C-36', 'C-42', 'PVC', 'clay', 'newest', 'new housing', 'newer',
  'ground movement', 'settlement', 'coastal conditions', 'as in most', 'San Diego County jurisdictions',
  'neighbouring', 'programme', 'Unlike', '2019', 'warranty', 'SLWA', 'Service Line Warranties', '515',
  'secondary treatment', 'zero sewer spills', '300 N. Coast', 'customercare@', 'to the property line',
  'all the way to the main', 'through the right-of-way', 'Since 2011', 'same-day', '24/7', '24 hours',
  'guarantee', 'insured', 'still open', 'now open', 'currently open', 'accepting applications',
  'funds remain', 'fully funded', 'you will be reimbursed', 'Placeholder', 'NOT FOR PRODUCTION',
  'testimonial', 'free estimate', 'office hours of', 'Water Engineering', '435-5812',
]
const forbiddenHits = FORBIDDEN.filter((w) => text.toLowerCase().includes(norm(w).toLowerCase()))
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

// City emergency line: Who to call panel and FAQ 4 only.
check('"(760) 435-3900" appears exactly twice (Who to call panel, FAQ 4)', count(/\(760\) 435-3900/g) === 2, String(count(/\(760\) 435-3900/g)))
check('the emergency line is in the Who to call panel and in the FAQ', /435-3900/.test(callText) && /435-3900/.test(faqText))
for (const w of ['option 4', 'option 1', 'after hours']) {
  check(`"${w}" appears exactly twice (Who to call panel, FAQ 4)`, count(new RegExp(w, 'g')) === 2, String(count(new RegExp(w, 'g'))))
}
contextOnly('emergenc', /water emergenc/, '"emergencies" only in "water emergencies" sentences about the City’s line')
check('the City’s numbers are labelled as the City’s', count(/These are the City’s numbers and statements, not ours/g) === 1 && count(/These are the City’s numbers and instructions, not ours/g) === 1)
check('(760) 435-3900 is never called a sewer line without the caveat', count(/do not present it as a sewer line/g) === 2)
contextOnly('reimburs', /(did not find|does not arrange|not a statement|grant, reimbursement|grant or reimbursement|reimbursement program|reimbursement or inspection|City repair or reimbursement)/i, '"reimburse" only in none-found sentences, the heading or the do-not-arrange sentence')
contextOnly('grant', /(did not find|found no|grant or reimbursement|grant, reimbursement|none found|reimbursement program\?|grant, cap|A City grant)/i, '"grant" only in none-found sentences, the heading or the FAQ question')
contextOnly('lining', /excavation, lining, or replacement/, '"lining" only in the approved second-opinion sentence')
contextOnly('replac', /(excavation, lining, or replacement|repairs? or replacements?|repairing or replacing|replacement, grant|sewer repairs or replacements|repair or replace|does not replace any review|added, removed, replaced or altered|rerouted or replaced|repair or replacement|replacement program|repair, replacement)/i, '"replace" only as the owner’s duty, a permit or plan sentence, none-found sentences or the no-repair statements')
check('"Registered Civil Engineer" appears exactly twice (program list, FAQ 6)', count(/Registered Civil Engineer/g) === 2, String(count(/Registered Civil Engineer/g)))
for (const w of ['450 miles', 'two wastewater treatment plants', '34 sewer lift stations']) {
  check(`"${w}" appears exactly four times (takeaway, responsibility card, system explainer, FAQ 1)`, count(new RegExp(w, 'g')) === 4, String(count(new RegExp(w, 'g'))))
}
{
  const outsideText = strip(
    mainHtml
      .replace(regionHtml('age', 'who-to-call'), ' ')
      .replace(regionHtml('faq', 'cta'), ' '),
  )
  const outside = (re) => re.test(outsideText)
  const censusVals = ['1984', '16.9', '48.6', '34.5', '27.6', '66,997', '11,328', '32,537', '23,132']
  const leaked = censusVals.filter((v) => outside(new RegExp(v.replace(/[.,]/g, '\\$&'))))
  check('Census values appear only in the housing-age section and the FAQ', leaked.length === 0, leaked.join(', '))
  check('housing-age section has the three-row table with a total row', /Before 1970[\s\S]*1970 to 1989[\s\S]*1990 or later[\s\S]*Total/.test(regionHtml('age', 'who-to-call').replace(/<[^>]+>/g, ' ')))
  check('housing-age figures are labelled as our arithmetic', /our arithmetic/.test(ageText))
  check('housing-age section draws no pipe-material or failure conclusion', !/(pipe material|made of|ground movement|settlement|cast iron|orangeburg)/i.test(ageText))
}
{
  const phrase = 'from the street to your house'
  const where = ['how-system', 'age', 'who-to-call']
  const bad = where.filter((a) => (a === 'how-system' ? region('how-system', 'age') : a === 'age' ? ageText : callText).includes(phrase))
  check('the City’s short phrase is not used in the system, housing or who-to-call sections', bad.length === 0, bad.join(', '))
  check('the City’s short phrase appears in the hero, responsibility, program, buying and FAQ', [region('request', 'services') || text.slice(0, 2500), region('responsible', 'how-system'), region('city-program', 'second-opinion'), region('buying', 'areas'), faqText].every((t) => t.includes(phrase)))
}
{
  const outsideAreas = withoutRegion('areas', 'faq')
  const cities = ['Carlsbad', 'Escondido', 'San Marcos', 'Chula Vista', 'Mission Valley']
  const hit = cities.filter((c) => outsideAreas.includes(c))
  check('other city names appear only as nearby-areas link labels', hit.length === 0, hit.join(', '))
  check('"San Diego County" does not appear outside the nearby-areas section', !/San Diego County/.test(outsideAreas.replace(/Other San Diego County, CA/g, '')))
}
check('page never says the City will pay for damage or that a grant exists', !/(City|department) (will|does) pay|will be reimbursed|a grant exists|City policy on|City will (repair|fix|cover)/i.test(text))
check('page does not say a permit is or is not required for an existing lateral', !/(permit is required|permit is not required|no permit is required|does not need a permit)/i.test(text))
check('page states no connection point or breakpoint', !/(ends at the (main|property line|curb)|boundary is|breakpoint is)/i.test(text))
check('page tells readers to confirm with the City', /confirm that with Water Utilities/.test(text) && /confirm details with the City/.test(text))
check('no ImagePlaceholder warning text', !/NOT FOR PRODUCTION INDEXATION/i.test(html))
const dashed = (mainHtml.match(/border-dashed/g) ?? []).length
const slotBoxes = mainHtml.match(/Image slot: [a-z-]+/g) ?? []
check('border-dashed appears only on labelled slot boxes', dashed === slotBoxes.length, `${dashed} vs ${slotBoxes.length}`)
const got = slotBoxes.map((s) => s.replace('Image slot: ', ''))
console.log(`INFO  slot placeholders drawn (${got.length}): ${got.join(', ')}`)
const DEFINED = ['oceanside-hero', 'svc-camera', 'svc-cleaning', 'svc-jetting', 'svc-cleaning-camera', 'svc-locating', 'svc-drain', 'svc-prepurchase', 'svc-backup', 'svc-maintenance', 'system-street', 'call-cleanout', 'program-footage', 'so-inspect', 'so-document', 'so-decide', 'buy-buyer', 'buy-agent', 'final-bg']
const definedIds = [...contentSrc.matchAll(/^\s+id: '([a-z-]+)',$/gm)].map((m) => m[1])
check('exactly the 19 expected slot ids are defined in the module', JSON.stringify(definedIds) === JSON.stringify(DEFINED), definedIds.join(','))
check('no defined slot has a src yet', !/^\s+src: '/m.test(contentSrc.slice(contentSrc.indexOf('const IMAGE_SLOTS'), contentSrc.indexOf('function slotImage'))))
if (PLACEHOLDERS_ON) {
  check('every defined slot draws a labelled box, once (final-bg is dropped by the composition)', DEFINED.filter((e) => e !== 'final-bg').every((e) => got.includes(e)) && new Set(got).size === got.length && got.every((g) => DEFINED.includes(g)), got.join(', '))
  // This repo's composition draws a labelled box for final-bg too (slotPlaceholder).
  check('19 visible placeholder boxes (every defined slot)', got.length === 19, String(got.length))
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
  const longQuotes = quotes.filter((q) => q.split(/\s+/).length > 9)
  check('no quoted passage longer than nine words', longQuotes.length === 0, longQuotes.join(' | '))
}
const repairClaims = /(we|our crews?)\s+(repair|replace|install|excavate|line)\b/i.exec(text)
check('no claim that The Sewer Pros repairs or replaces', repairClaims === null, repairClaims?.[0])
const repairNo = count(/does not perform repairs or replacements|do not perform sewer repairs or replacements|No\. We inspect, locate, diagnose and clean|without a repair sale/g)
check('approved no-repair statements present (second opinion, program closing, FAQ 10, final CTA)', repairNo >= 4, String(repairNo))
check('no dollar amount on the page', !/\$\d/.test(text))
check('no office, address, map or "visit us" language', !/(\bour (san diego |oceanside )?(office|location)|visit (us|our)|storefront)/i.test(text))
check('no agency street address published', !/\d{3,5}\s+[A-Z][a-z]+(\s+[A-Za-z]+)?\s+(Street|St\.|Avenue|Ave\.|Road|Rd\.|Boulevard|Blvd\.|Drive|Dr\.|Hwy)/.test(text))

/* ---- Links ---- */
const anchors = [...mainHtml.matchAll(/<a\s[^>]*href="([^"]+)"[^>]*>/g)]
const external = anchors.filter((m) => /^https?:/.test(m[1]))
check('seven distinct external source links', new Set(external.map((m) => m[1])).size === 7, String(new Set(external.map((m) => m[1])).size))
check('no link to the redirecting /residents/water-utilities path', !/residents\/water-utilities/.test(html))
check('every external link has rel="noopener"', external.every((m) => /rel="[^"]*noopener/.test(m[0])), external.filter((m) => !/rel="[^"]*noopener/.test(m[0])).map((m) => m[1]).join(', '))
const internal = anchors.map((m) => m[1]).filter((h) => h.startsWith('/') && !h.startsWith('//'))
const missing = [...new Set(internal)].filter((h) => {
  const p = h.split('#')[0].split('?')[0]
  if (/\.(webp|png|jpg|svg|ico)$/.test(p) || p === '/manifest.webmanifest') return false
  return !fs.existsSync(path.join(ROOT, p, 'index.html'))
})
check('every internal link resolves to a built route', missing.length === 0, missing.join(', '))
for (const want of ['/locations/san-diego-ca/oceanside/sewer-cleaning/', '/services/sewer-camera-inspection/', '/services/pre-purchase-sewer-inspection/', '/for/home-buyers/', '/for/real-estate-agents/', '/locations/san-diego-ca/escondido/', '/locations/san-diego-ca/san-marcos/', '/locations/san-diego-ca/chula-vista/', '/locations/san-diego-ca/san-diego/', '/locations/san-diego-ca/carlsbad/', '/locations/san-diego-ca/mission-valley/', '/san-diego-ca/']) {
  check(`links to ${want}`, internal.includes(want))
}
for (const u of new Set(external.map((m) => m[1]))) console.log('  ext', u)

/* ---- Sitemap ---- */
const sitemapPath = path.join(ROOT, 'sitemap.xml')
if (fs.existsSync(sitemapPath)) {
  check('page is in the sitemap', fs.readFileSync(sitemapPath, 'utf8').includes(`${ORIGIN}/san-diego-ca/oceanside/`))
}

/* ---- Trust strip founding year ---- */
check('"Since 2011" appears nowhere on the page', !html.includes('Since 2011'))
check(`trust strip founding-year cell reads Since ${SD_YEAR}`, new RegExp('Since ' + SD_YEAR).test(text) && !/2011/.test(text))

/* ---- Market phones (whole document, header and footer included) ---- */
check(
  'no other market phone number anywhere in the document (JSON-LD excluded)',
  otherMarketPhoneHits(html, 'san-diego-ca').length === 0,
  otherMarketPhoneHits(html, 'san-diego-ca').join(', '),
)

console.log(failures === 0 ? '\nAll checks passed.' : `\n${failures} check(s) FAILED.`)
process.exit(failures === 0 ? 0 : 1)
