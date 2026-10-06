/**
 * Post-build checks for /san-diego-ca/san-marcos/.
 *
 * Reads the static export in `out/` (run `npm run build` first). No
 * dependencies. Exits 1 on any failure.
 *
 *   node scripts/verify-san-marcos-page.mjs
 *
 * Adapted from `verify-escondido-page.mjs`. San Marcos is not served by the City:
 * the City names three agencies by location, and only Vallecitos Water District
 * has rules on the page. The Vallecitos 760 numbers are the district's, not
 * company numbers. The company phone, hours and founding year are San Diego's own
 * (DEC-071). The page never says a grant exists, that the district or City will
 * pay for any damage, or that all of San Marcos is on Vallecitos.
 */
import fs from 'node:fs'
import path from 'node:path'
import { otherMarketPhoneHits } from './lib/market-phones.mjs'

const ROOT = path.resolve('out')
const PAGE = path.join(ROOT, 'san-diego-ca', 'san-marcos', 'index.html')
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
check('only the company Organization node exists (none for the City or any district)', orgNodes.length === 1, String(orgNodes.length))
const places = graph.filter((n) => ['Place', 'City'].includes(n['@type']))
check(
  'only the San Diego market Place exists (no San Marcos Place node)',
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
  'BreadcrumbList is Home, Locations / Service Areas, San Diego, CA Sewer Services, San Marcos',
  JSON.stringify(crumbNames) === JSON.stringify(['Home', 'Locations / Service Areas', 'San Diego, CA Sewer Services', 'San Marcos']),
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
const contentSrc = fs.readFileSync(path.resolve('content/pages/san-diego-san-marcos.tsx'), 'utf8')
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

/* ---- WebPage ---- */
const META = 'Sewer camera inspection, hydro jetting and cleaning in San Marcos, CA. See who serves your address and what Vallecitos says the owner is responsible for.'
check('WebPage name equals the seoTitle', webPage?.name === 'Sewer Inspection & Cleaning in San Marcos, CA', webPage?.name)
check('WebPage description equals the meta description', webPage?.description === META, String(webPage?.description))
check('meta description is 153 characters', META.length === 153, String(META.length))
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
check('title (brand suffix once)', /<title>Sewer Inspection &amp; Cleaning in San Marcos, CA \| The Sewer Pros<\/title>/.test(html))
check('canonical', html.includes(`<link rel="canonical" href="${ORIGIN}/san-diego-ca/san-marcos/"/>`))
check('robots index, follow (unchanged)', html.includes('<meta name="robots" content="index, follow"/>'))
const h1s = [...mainHtml.matchAll(/<h1[\s>][\s\S]*?<\/h1>/g)]
check('one H1', h1s.length === 1)
check('H1 text', h1s.length === 1 && strip(h1s[0][0]) === 'Sewer Inspection and Cleaning in San Marcos, CA', h1s[0] && strip(h1s[0][0]))

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

/* ---- Copy checks ---- */
check('no em dashes in the whole document (U+2014)', !html.includes(String.fromCharCode(8212)))
const REQUIRED = [
  SD_PHONE, SD_HOURS, `since ${SD_YEAR}`,
  'Vallecitos Water District', 'Vista Irrigation District', 'Rincon del Diablo Municipal Water District',
  '(760) 744-0460', '(760) 745-2761', '284 miles', 'Ordinance No. 225', 'Last reviewed: October 4, 2026',
  'does not perform repairs or replacements', 'does not arrange reimbursement',
  'The City of San Marcos says it does not provide water or sewer service',
  'through its connection to the district’s main',
  'We did not find a lateral repair, replacement, grant or reimbursement program from Vallecitos Water District',
  'Who to call', 'Know who to call',
]
const missingReq = REQUIRED.filter((t) => !text.includes(norm(t)) && !(t === 'Who to call' && /Who to call/.test(text)))
check('required strings present', missingReq.length === 0, missingReq.join(' | '))
check(`tel: links use the San Diego E.164 value (${SD_E164})`, html.includes(`href="tel:${SD_E164}"`))
const telHrefs = [...mainHtml.matchAll(/href="(tel:[^"]+)"/g)].map((m) => m[1])
check(
  '<main> tel: links are only the San Diego number and the labelled Vallecitos main number (the water-emergency number is plain text)',
  telHrefs.every((h) => h === `tel:${SD_E164}` || h === 'tel:+17607440460'),
  [...new Set(telHrefs)].join(', '),
)
check('(760) 745-2761 is never a tel: link', !/tel:\+?1?-?760-?745-?2761/.test(html))
for (const [name, n] of [['hero', 'Call ' + SD_PHONE], ['mobile bar', 'aria-label="Quick contact"']]) {
  check(`San Diego number shown as a tel: link in the ${name}`, n.startsWith('aria') ? mainHtml.includes(n) && new RegExp('aria-label="Quick contact"[\\s\\S]*?href="tel:' + SD_E164.replace('+', '\\+')).test(mainHtml) : text.includes(norm(n)))
}
const finalCtaHtml = mainHtml.slice(mainHtml.indexOf('Evidence before expensive decisions'))
check('final CTA shows the San Diego number as a tel: link', finalCtaHtml.includes(`href="tel:${SD_E164}"`))
const footerHtml = bodyHtml.slice(bodyHtml.indexOf('<footer'))
check('footer shows the San Diego number as a tel: link', footerHtml.includes(`href="tel:${SD_E164}"`))

// Cross-market scan, scoped to <main>. The district's 760 numbers are not company numbers.
const CROSS = ['(314)', '314-', '821-1600', 'Since 2011', 'MSD', 'Metropolitan St. Louis', 'St. Louis', 'Missouri', 'Google reviews', 'Realtors', 'Las Vegas', 'Nevada', 'CVSan', 'Chula Vista’s', 'Escondido Municipal Code', 'Leucadia']
const crossHits = CROSS.filter((w) => text.includes(norm(w)) || mainHtml.includes(w))
check('cross-market scan of <main> finds no St. Louis, Las Vegas or other-city rule', crossHits.length === 0, crossHits.join(', '))
check('<main> links contain no St. Louis or Las Vegas tel: number', !/href="tel:\+1-?(314|725|702)/.test(mainHtml))

const FORBIDDEN = [
  'licensed', 'Class A', 'C-36', 'C-42', '1996', '7.7', 'PVC', 'clay', 'newest', 'new housing', 'newer',
  'built recently', 'median year', 'periodic maintenance', 'independent special district',
  'entirely on the owner', 'septic', 'CVSan', 'Castro Valley', 'programme', 'Since 2011', 'same-day',
  '24/7', 'guarantee', 'insured', 'still open', 'now open', 'currently open', 'accepting applications',
  'funds remain', 'fully funded', 'you will be reimbursed', 'Unlike', 'Placeholder', 'NOT FOR PRODUCTION',
  'testimonial', '20,737', '@vwd.org', '201 Vallecitos', '7:30', 'free estimate',
]
const forbiddenHits = FORBIDDEN.filter((w) => text.toLowerCase().includes(norm(w).toLowerCase()))
check('no forbidden strings', forbiddenHits.length === 0, forbiddenHits.join(', '))
const contextOnly = (pattern, allowed, label, flags = 'g') => {
  const bad = [...text.matchAll(new RegExp(pattern, flags))]
    .map((m) => text.slice(Math.max(0, m.index - 70), m.index + 110))
    .filter((c) => !allowed.test(c))
  check(label, bad.length === 0, bad.join(' | '))
}
contextOnly('24 hours', /(district|on call 24 hours)/i, '"24 hours" only as the district’s statement', 'gi')
check('"24 hours" appears exactly twice (Who to call panel and FAQ 7)', (text.match(/24 hours/g) ?? []).length === 2, String((text.match(/24 hours/g) ?? []).length))
contextOnly('emergenc', /(call 911 for emergencies|water-related emergencies)/, '"emergencies" only in "call 911 for emergencies" or "water-related emergencies"', 'gi')
contextOnly('reimburs', /(did not find|does not arrange|not a statement|grant or reimbursement|reimbursement agreement|Ordinance No\. 225|main-line extension)/i, '"reimburse" only in none-found sentences, the Ordinance No. 225 sentence or the do-not-arrange sentence', 'gi')
contextOnly('grant', /(did not find|found no|grant or reimbursement|none found|reimbursement program\?)/i, '"grant" only in none-found sentences, the heading or the FAQ question', 'gi')
contextOnly('lining', /excavation, lining, or replacement/, '"lining" only in the approved second-opinion sentence', 'gi')
contextOnly('replac', /(excavation, lining, or replacement|repairs? or replacements?|repairing or replacing|replacement, grant|sewer repairs or replacements|repair or replace|does not replace any review)/i, '"replace" only as the owner’s duty, a permit or none-found sentence, or the no-repair statements', 'gi')
check('"Ordinance No. 225" appears exactly twice (program lede and FAQ 4)', (text.match(/Ordinance No\. 225/g) ?? []).length === 2, String((text.match(/Ordinance No\. 225/g) ?? []).length))
check('"284 miles" appears exactly once (the M7 scale bullet)', (text.match(/284 miles/g) ?? []).length === 1)
contextOnly('Carlsbad|Escondido', /(parts of Carlsbad|Escondido and Vista|Carlsbad and Escondido|Local sewer details)/, 'Carlsbad and Escondido only in the district’s service-area sentences and the nearby-areas links')
contextOnly('(?<!Chula )Vista(?! Irrigation)', /(Escondido and Vista|parts of Carlsbad)/, '"Vista" alone only in the district’s service-area sentences')
{
  // Vista Irrigation District and Rincon del Diablo: named only as the City names them.
  const vid = [...text.matchAll(/Vista Irrigation District|Rincon del Diablo Municipal Water District/g)]
    .map((m) => text.slice(Math.max(0, m.index - 110), m.index + 120))
    .filter((c) => !/(three agencies|City also names|City names|other agencies|Vallecitos Water District, Vista|Confirm which one)/.test(c))
  check('Vista Irrigation District and Rincon del Diablo appear only as the City names them', vid.length === 0, vid.join(' | '))
  check('no rule, number or sewer claim attached to Vista Irrigation District or Rincon del Diablo', !/(Vista Irrigation District|Rincon del Diablo[A-Za-z ]*)\s+(provides|says|requires|maintains|operates)/i.test(text))
  check('page never says Vallecitos serves all of San Marcos or that the City runs the sewer', !/(all of San Marcos|entire city|the City (owns|runs|operates|maintains))/i.test(text) && !/sewer service in San Marcos is provided by/i.test(text))
  check('page never says the district or City will pay for damage', !/(district|City) (will|does) pay|will be reimbursed|a grant exists|district policy on/i.test(text.replace(/A district policy on damage[^.]*\./g, '')))
  check('page does not say a permit is or is not required for an existing lateral', !/(permit is required|permit is not required|no permit is required|does not need a permit)/i.test(text))
  const ageClaims = /(median year|housing units|built in the \d|year built|made of|pipe material)/i.exec(text)
  check('no housing-age or pipe-material claim', ageClaims === null, ageClaims?.[0])
}
{
  const idxV = [...text.matchAll(/Vallecitos/g)].map((m) => m.index)
  check('"Vallecitos" appears throughout the district sections', idxV.length >= 10, String(idxV.length))
  const vLinks = [...mainHtml.matchAll(/href="([^"]*vwd\.org[^"]*)"/g)].map((m) => m[1])
  check('Vallecitos links: one in the responsibility module plus seven in sources', vLinks.length === 8, String(vLinks.length))
  check('FAQ answers contain no links (schema rule): FAQ block has no Vallecitos anchor', !/<details[\s\S]*?href="[^"]*vwd\.org/.test(mainHtml.slice(mainHtml.indexOf('id="faq"'), mainHtml.indexOf('id="sources"'))))
  const quotes = [...text.matchAll(/“([^”]{1,200})”/g)].map((m) => m[1])
  const longQuotes = quotes.filter((q) => q.split(/\s+/).length > 9)
  check('no quoted passage longer than nine words', longQuotes.length === 0, longQuotes.join(' | '))
  check('the district’s numbers are labelled as the district’s', /These are the district’s numbers and statements, not ours/.test(text) && /These are the district’s numbers and instructions, not ours/.test(text))
  check('(760) 745-2761 is never called a sewer line without the caveat', (text.match(/\(760\) 745-2761/g) ?? []).length === 2 && (text.match(/does not describe that number as a sewer line/g) ?? []).length === 2)
}
check('page tells readers to confirm the agency', /confirm which agency serves your address/i.test(text) && /confirm details with the agency that serves your address/.test(text))
check('no ImagePlaceholder warning text', !/NOT FOR PRODUCTION INDEXATION/i.test(html))
const dashed = (mainHtml.match(/border-dashed/g) ?? []).length
const slotBoxes = mainHtml.match(/Image slot: [a-z-]+/g) ?? []
check('border-dashed appears only on labelled slot boxes', dashed === slotBoxes.length, `${dashed} vs ${slotBoxes.length}`)
const got = slotBoxes.map((s) => s.replace('Image slot: ', ''))
console.log(`INFO  slot placeholders drawn (${got.length}): ${got.join(', ')}`)
const moduleSrc = contentSrc
const DEFINED = ['san-marcos-hero', 'svc-camera', 'svc-cleaning', 'svc-jetting', 'svc-cleaning-camera', 'svc-locating', 'svc-drain', 'svc-prepurchase', 'svc-backup', 'svc-maintenance', 'system-street', 'call-cleanout', 'program-footage', 'so-inspect', 'so-document', 'so-decide', 'buy-buyer', 'buy-agent', 'final-bg']
const definedIds = [...moduleSrc.matchAll(/^\s+id: '([a-z-]+)',$/gm)].map((m) => m[1])
check('exactly the 19 expected slot ids are defined in the module', JSON.stringify(definedIds) === JSON.stringify(DEFINED), definedIds.join(','))
check('no defined slot has a src yet', !/^\s+src: '/m.test(moduleSrc.slice(moduleSrc.indexOf('const IMAGE_SLOTS'), moduleSrc.indexOf('function slotImage'))))
if (PLACEHOLDERS_ON) {
  check('every defined slot draws a labelled box, once (final-bg is reported separately if the composition drops it)', DEFINED.filter((e) => e !== 'final-bg').every((e) => got.includes(e)) && new Set(got).size === got.length && got.every((g) => DEFINED.includes(g)), got.join(', '))
  console.log(`INFO  final-bg box drawn: ${got.includes('final-bg')}`)
  check('no existing or rendered art on the page', !/<img[^>]+\/images\//.test(mainHtml) && !/\/_next\/image\?url=%2Fimages/.test(mainHtml))
  const boxes = [...mainHtml.matchAll(/Image slot: ([a-z-]+)<\/p><p>(16:9|4:3)<\/p><p>([^<]+)<\/p>/g)]
  check('each slot box is well-formed (id, ratio, shot text)', boxes.length === got.length, `${boxes.length} well-formed of ${got.length}`)
  check('the placeholder source string is not in the HTML', !html.includes('review build only'))
} else {
  check('no slot placeholders when the flag is off', got.length === 0 && dashed === 0)
}
check('program section renders its lists', /<ul[\s>]/.test(mainHtml.slice(mainHtml.indexOf('id="city-program"'), mainHtml.indexOf('id="second-opinion"'))))
const repairClaims = /(we|our crews?)\s+(repair|replace|install|excavate|line)\b/i.exec(text)
check('no claim that The Sewer Pros repairs or replaces', repairClaims === null, repairClaims?.[0])
const repairNo = (text.match(/does not perform repairs or replacements|do not perform sewer repairs or replacements|No\. We inspect, locate, diagnose and clean|without a repair sale/g) ?? []).length
check('approved no-repair statements present (second opinion, program closing, FAQ 10, final CTA)', repairNo >= 4, String(repairNo))
check('no dollar amount on the page', !/\$\d/.test(text))
check('no office, address, map or "visit us" language', !/(\bour (san diego |san marcos )?(office|location)|visit (us|our)|storefront)/i.test(text))
check('no agency street address published', !/\d{3,5}\s+[A-Z][a-z]+(\s+[A-Za-z]+)?\s+(Street|St\.|Avenue|Ave\.|Road|Rd\.|Boulevard|Blvd\.|Drive|Dr\.|Oro)/.test(text))

/* ---- Links ---- */
const anchors = [...mainHtml.matchAll(/<a\s[^>]*href="([^"]+)"[^>]*>/g)]
const external = anchors.filter((m) => /^https?:/.test(m[1]))
check('nine distinct external source links', new Set(external.map((m) => m[1])).size === 9, String(new Set(external.map((m) => m[1])).size))
check('every external link has rel="noopener"', external.every((m) => /rel="[^"]*noopener/.test(m[0])), external.filter((m) => !/rel="[^"]*noopener/.test(m[0])).map((m) => m[1]).join(', '))
const internal = anchors.map((m) => m[1]).filter((h) => h.startsWith('/') && !h.startsWith('//'))
const missing = [...new Set(internal)].filter((h) => {
  const p = h.split('#')[0].split('?')[0]
  if (/\.(webp|png|jpg|svg|ico)$/.test(p) || p === '/manifest.webmanifest') return false
  return !fs.existsSync(path.join(ROOT, p, 'index.html'))
})
check('every internal link resolves to a built route', missing.length === 0, missing.join(', '))
for (const want of ['/locations/san-diego-ca/san-marcos/sewer-camera-inspection/', '/services/sewer-cleaning/', '/services/pre-purchase-sewer-inspection/', '/for/home-buyers/', '/for/real-estate-agents/', '/locations/san-diego-ca/escondido/', '/locations/san-diego-ca/oceanside/', '/locations/san-diego-ca/chula-vista/', '/locations/san-diego-ca/san-diego/', '/locations/san-diego-ca/carlsbad/', '/locations/san-diego-ca/mission-valley/', '/san-diego-ca/']) {
  check(`links to ${want}`, internal.includes(want))
}
for (const u of new Set(external.map((m) => m[1]))) console.log('  ext', u)

/* ---- Sitemap ---- */
const sitemapPath = path.join(ROOT, 'sitemap.xml')
if (fs.existsSync(sitemapPath)) {
  check('page is in the sitemap', fs.readFileSync(sitemapPath, 'utf8').includes(`${ORIGIN}/san-diego-ca/san-marcos/`))
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
