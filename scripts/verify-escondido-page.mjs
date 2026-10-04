/**
 * Post-build checks for /san-diego-ca/escondido/.
 *
 * Reads the static export in `out/` (run `npm run build` first). No
 * dependencies. Exits 1 on any failure.
 *
 *   node scripts/verify-escondido-page.mjs
 *
 * Adapted from `verify-chula-vista-page.mjs`. Escondido's code section 22-165
 * puts the lateral on the owner; the City's 760 numbers are labelled agency
 * values, not company numbers. The company phone, hours and founding year are
 * San Diego's own (DEC-071). The page never says a grant exists or that the
 * City will pay for any damage.
 */
import fs from 'node:fs'
import path from 'node:path'
import { otherMarketPhoneHits } from './lib/market-phones.mjs'

const ROOT = path.resolve('out')
const PAGE = path.join(ROOT, 'san-diego-ca', 'escondido', 'index.html')
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

/* ---- JSON-LD ---- */
const ldBlocks = [...html.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)]
check('exactly one JSON-LD block', ldBlocks.length === 1, `found ${ldBlocks.length}`)
const ldRaw = ldBlocks[0][1]
const graph = JSON.parse(ldRaw)['@graph']
const ids = new Set(graph.map((n) => n['@id']).filter(Boolean))

for (const bad of [
  'LocalBusiness', 'AggregateRating', 'Review', 'ratingValue', 'reviewCount', 'PostalAddress',
  'GeoCoordinates', 'openingHoursSpecification', 'HowTo', 'GovernmentService', 'Offer', 'price',
]) {
  check(`JSON-LD has no ${bad}`, !ldRaw.includes(bad))
}
check('page HTML has no itemprop rating microdata', !/itemprop="(ratingValue|reviewCount|aggregateRating|review)"/i.test(html))
check('no review marquee on the page', !/marquee-track/.test(mainHtml))
check('no placeholder strings in JSON-LD', !/REPLACE-|TODO|Placeholder/i.test(ldRaw))
const places = graph.filter((n) => ['Place', 'City'].includes(n['@type']))
check(
  'only the San Diego market Place exists (no City-of-San-Diego Place node)',
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
  'BreadcrumbList is Home, Locations / Service Areas, San Diego, CA Sewer Services, Escondido',
  JSON.stringify(crumbNames) === JSON.stringify(['Home', 'Locations / Service Areas', 'San Diego, CA Sewer Services', 'Escondido']),
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
const contentSrc = fs.readFileSync(path.resolve('content/pages/san-diego-escondido.tsx'), 'utf8')
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
const META = 'Sewer camera inspection, hydro jetting and cleaning in Escondido, CA. See what Municipal Code 22-165 makes the owner responsible for on your lateral.'
check('WebPage name equals the seoTitle', webPage?.name === 'Sewer Inspection & Cleaning in Escondido, CA', webPage?.name)
check('WebPage description equals the meta description', webPage?.description === META, String(webPage?.description))
console.log(`INFO  meta description length ${META.length} (expect 149)`)
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
check('title (brand suffix once)', /<title>Sewer Inspection &amp; Cleaning in Escondido, CA \| The Sewer Pros<\/title>/.test(html))
check('canonical', html.includes(`<link rel="canonical" href="${ORIGIN}/san-diego-ca/escondido/"/>`))
check('robots index, follow (unchanged)', html.includes('<meta name="robots" content="index, follow"/>'))
const h1s = [...mainHtml.matchAll(/<h1[\s>][\s\S]*?<\/h1>/g)]
check('one H1', h1s.length === 1)
check('H1 text', h1s.length === 1 && strip(h1s[0][0]) === 'Sewer Inspection and Cleaning in Escondido, CA', h1s[0] && strip(h1s[0][0]))

/* ---- Anchors and order ---- */
const idAttrs = [...mainHtml.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1])
const dupes = idAttrs.filter((v, i) => idAttrs.indexOf(v) !== i)
check('no duplicate ids (hero and final form ids differ)', dupes.length === 0, dupes.join(', '))
const ORDER = ['request', 'services', 'responsible', 'how-system', 'age', 'who-to-call', 'city-program', 'second-opinion', 'buying', 'areas', 'faq']
for (const anchor of [...ORDER, 'sources']) check(`anchor #${anchor} exists`, idAttrs.includes(anchor))
for (const absent of ['reviews']) check(`no #${absent} section (intentionally absent)`, !idAttrs.includes(absent))
const pos = ORDER.map((a) => mainHtml.indexOf(`id="${a}"`))
check('anchors appear in the required order', pos.every((p, i) => p > -1 && (i === 0 || p > pos[i - 1])), pos.join(','))
const jump = ['#services', '#responsible', '#how-system', '#age', '#who-to-call', '#city-program', '#second-opinion', '#buying', '#faq']
const jumpPos = jump.map((h) => mainHtml.indexOf(`href="${h}"`))
check('jump nav lists the nine links in order', jumpPos.every((p, i) => p > -1 && (i === 0 || p > jumpPos[i - 1])), jumpPos.join(','))

/* ---- Copy checks ---- */
check('no em dashes in visible text (U+2014)', !text.includes(String.fromCharCode(8212)))
const REQUIRED = [
  SD_PHONE, SD_HOURS, `since ${SD_YEAR}`,
  '22-165', 'up to and including the connection to the main', '(760) 839-4668', '(760) 839-4647', '(760) 839-4664',
  'City of Escondido', 'sewer connection lateral', 'Hale Avenue Resource Recovery Facility', '350 miles', '7,500',
  'Vallecitos Water District', '52,239', '1981', 'Last reviewed: October 4, 2026',
  'does not perform repairs or replacements', 'does not arrange reimbursement',
  'We did not find a City of Escondido lateral repair, replacement, grant or reimbursement program',
  'three combination jet-rodding and vacuum trucks', 'Sewer System Management Plan',
]
const missingReq = REQUIRED.filter((t) => !text.includes(norm(t)))
check('required strings present', missingReq.length === 0, missingReq.join(' | '))
check(`tel: links use the San Diego E.164 value (${SD_E164})`, html.includes(`href="tel:${SD_E164}"`))
const telHrefs = [...mainHtml.matchAll(/href="(tel:[^"]+)"/g)].map((m) => m[1])
const AGENCY_TEL = new Set(['tel:+17608394668', 'tel:+17608394647'])
check(
  '<main> tel: links are only the San Diego number and the two labelled City numbers (Field Engineering is plain text)',
  telHrefs.every((h) => h === `tel:${SD_E164}` || AGENCY_TEL.has(h)),
  [...new Set(telHrefs)].join(', '),
)
for (const [name, n] of [['hero', 'Call ' + SD_PHONE], ['mobile bar', 'aria-label="Quick contact"']]) {
  check(`San Diego number shown as a tel: link in the ${name}`, n.startsWith('aria') ? mainHtml.includes(n) && new RegExp('aria-label="Quick contact"[\\s\\S]*?href="tel:' + SD_E164.replace('+', '\\+')).test(mainHtml) : text.includes(norm(n)))
}
const footerHtml = bodyHtml.slice(bodyHtml.indexOf('<footer'))
check('footer shows the San Diego number as a tel: link', footerHtml.includes(`href="tel:${SD_E164}"`))

// Cross-market scan, scoped to <main>. The City’s 760 numbers are not company numbers.
const CROSS = ['(314)', '314-', '821-1600', 'Since 2011', 'MSD', 'Metropolitan St. Louis', 'St. Louis', 'Missouri', 'Google reviews', 'Realtors', 'Lateral Repair Program', 'Las Vegas', 'Nevada']
const crossHits = CROSS.filter((w) => text.includes(norm(w)) || mainHtml.includes(w))
check('cross-market scan of <main> finds no St. Louis or Las Vegas value', crossHits.length === 0, crossHits.join(', '))
check('<main> links contain no St. Louis or Las Vegas tel: number', !/href="tel:\+1-?(314|725|702)/.test(mainHtml))

const FORBIDDEN = [
  'PVC', 'clay', 'suburban', 'more explicit', 'unusually', 'Unlike Carlsbad', 'CVSan', 'Castro Valley', 'programme',
  'Since 2011', 'still open', 'now open', 'currently open', 'accepting applications', 'funds remain', 'fully funded',
  'you will be reimbursed', 'same-day', '24/7', 'guarantee', 'insured', 'Qualified Contractor', '18 inches',
  '380 miles', '370 miles', '2025-103', 'Resolution No. 2023-131', '2023-131', 'Aug 28', 'August 28', 'Placeholder', 'NOT FOR PRODUCTION', 'testimonial', 'directly caused',
]
const forbiddenHits = FORBIDDEN.filter((w) => text.toLowerCase().includes(norm(w).toLowerCase()))
check('no forbidden strings', forbiddenHits.length === 0, forbiddenHits.join(', '))
const contextOnly = (pattern, allowed, label, flags = 'g') => {
  const bad = [...text.matchAll(new RegExp(pattern, flags))]
    .map((m) => text.slice(Math.max(0, m.index - 70), m.index + 110))
    .filter((c) => !allowed.test(c))
  check(label, bad.length === 0, bad.join(' | '))
}
contextOnly('free', /free of charge/, '"free" only in the City’s "free of charge" statements', 'gi')
contextOnly('licensed', /(code|subsection|section 22-165|plumber|contractor working for the City|violation)/i, '"licensed" only as the code’s own wording')
contextOnly('24 hours', /(City|lists this number|FAQ|available 24 hours)/i, '"24 hours" only as the City’s statement', 'gi')
contextOnly('emergenc', /(call 911 for emergencies|non-emergency sewer reports)/, '"emergencies" only in "call 911 for emergencies" or "non-emergency sewer reports"', 'gi')
contextOnly('reimburs', /(did not find|does not arrange|not a statement|grant or reimbursement)/i, '"reimburse" only in none-found sentences or the do-not-arrange sentence', 'gi')
contextOnly('grant', /(did not find|found no|no Escondido lateral grant|grant or reimbursement|none found|Apart from that case|no City lateral grant)/i, '"grant" only in none-found sentences or the heading', 'gi')
contextOnly('lining', /excavation, lining, or replacement/, '"lining" only in the approved second-opinion sentence', 'gi')
{
  const ssmp = [...text.matchAll(/Sewer System Management Plan/g)].length
  check('"Sewer System Management Plan" appears three times (M7 bullet, 22-165 lede, FAQ 3)', ssmp === 3, String(ssmp))
  const ssmpBad = [...text.matchAll(/Sewer System Management Plan/g)].map((m) => text.slice(Math.max(0, m.index - 120), m.index + 60)).filter((c) => !/(Before cleaning a lateral|did not find a City of Escondido lateral|Does the City of Escondido ever pay|the City’s Sewer System|wastewater page or the City’s|wastewater page or Sewer System)/.test(c))
  check('"Sewer System Management Plan" only in the M7 bullet, the 22-165 lede, FAQ 3 and the sources block', ssmpBad.length === 0, ssmpBad.join(' | '))
  check('"call the City before cleaning" appears exactly once (the M7 bullet)', (text.match(/call the City before cleaning/g) ?? []).length === 1)
  check('SSMP link appears once, in the sources block', (mainHtml.match(/escondido\.gov\/774\/Sewer-System-Management-Sewer-Overflow-R/g) ?? []).length === 1)
}
contextOnly('septic', /(Vallecitos|septic systems at that time|on septic)/, '"septic" only in the Vallecitos caveat lines', 'gi')
contextOnly('1981|median year', /(Census|median year built|housing units|About half|1981\.)/, '"1981" and "median year" only in age context', 'gi')
contextOnly('2012|1980', /(Wastewater Master Plan|2012 figure|master plan|June 2012|before 1980|1980 to 1989|1980s|2012 Wastewater)/i, '"2012" and "1980" only in dated City-mains context or the age table', 'gi')
{
  const idxV = [...text.matchAll(/Vallecitos/g)].map((m) => m.index)
  check('"Vallecitos" appears in the caveat, agency bullet, buyer point, FAQ 6 and sources', idxV.length >= 5, String(idxV.length))
  const ldV = (ldRaw.match(/Vallecitos/gi) ?? []).length
  check('JSON-LD mentions Vallecitos only inside FAQ 6 (or nowhere when FAQPage is off)', faqLd === undefined ? ldV === 0 : (faqLd.mainEntity ?? []).filter((q) => /Vallecitos/.test(JSON.stringify(q))).length === 1, String(ldV))
  const vLinks = [...mainHtml.matchAll(/href="([^"]*vwd\.org[^"]*)"/g)].map((m) => m[1])
  check('Vallecitos links: M6 caveat, M7 bullet, sources (three)', vLinks.length === 3, vLinks.join(', '))
}
{
  const quotes = [...text.matchAll(/“([^”]{1,200})”/g)].map((m) => m[1])
  const longQuotes = quotes.filter((q) => q.split(/\s+/).length > 9 && !/^(Maintenance of sewer connection lateral|Who is responsible for sanitary sewer repair\?)$/.test(q))
  check('no quoted passage longer than nine words (titles aside)', longQuotes.length === 0, longQuotes.join(' | '))
  check('no sentence says the City will pay or that an inspection satisfies, is required by or will support a claim', !/the City (will|does) pay|inspection (satisfies|is required|will support)|will support a claim/i.test(text))
  check('page tells readers to ask Public Works who may repair', /Ask Public Works what applies before you plan any repair/.test(text))
  check('Census rows sum to 52,239 units and 100.0 percent', (() => {
    const rows = [[580, 1.1], [2590, 5.0], [5106, 9.8], [6639, 12.7], [12838, 24.6], [12927, 24.7], [6110, 11.7], [3491, 6.7], [1122, 2.1], [836, 1.6]]
    const u = rows.reduce((a, r) => a + r[0], 0)
    const sh = rows.reduce((a, r) => a + r[1], 0)
    return u === 52239 && Math.abs(sh - 100) < 0.15
  })())
  const ageHtml = mainHtml.slice(mainHtml.indexOf('id="age"'), mainHtml.indexOf('id="who-to-call"'))
  check('housing-age table renders ten data rows', (ageHtml.match(/<tr/g) ?? []).length === 11, String((ageHtml.match(/<tr/g) ?? []).length))
}
check('no sentence says a grant exists or is open, available or funded, or that the City will pay', !/(grant|program|reimbursement)s?[^.]{0,60}(is|are|remains?) (now |still |currently )?(open|funded|available)/i.test(text) && !/the City will pay|will be reimbursed|a grant exists/i.test(text))
check('page tells readers to confirm with Public Works or the City', /Contact Public Works to confirm how the code applies/.test(text) && /confirm details with the City of Escondido/.test(text))
check('no ImagePlaceholder warning text', !/NOT FOR PRODUCTION INDEXATION/i.test(html))
const dashed = (mainHtml.match(/border-dashed/g) ?? []).length
const slotBoxes = mainHtml.match(/Image slot: [a-z-]+/g) ?? []
check('border-dashed appears only on labelled slot boxes', dashed === slotBoxes.length, `${dashed} vs ${slotBoxes.length}`)
const got = slotBoxes.map((s) => s.replace('Image slot: ', ''))
console.log(`INFO  slot placeholders drawn (${got.length}): ${got.join(', ')}`)
// All 19 slots are defined in the module and each draws a box while the flag is on.
const moduleSrc = fs.readFileSync(path.resolve('content/pages/san-diego-escondido.tsx'), 'utf8')
const DEFINED = ['escondido-hero', 'svc-camera', 'svc-cleaning', 'svc-jetting', 'svc-cleaning-camera', 'svc-locating', 'svc-drain', 'svc-prepurchase', 'svc-backup', 'svc-maintenance', 'system-street', 'call-cleanout', 'program-footage', 'so-inspect', 'so-document', 'so-decide', 'buy-buyer', 'buy-agent', 'final-bg']
const definedIds = [...moduleSrc.matchAll(/^\s+id: '([a-z-]+)',$/gm)].map((m) => m[1])
check('exactly the 19 expected slot ids are defined in the module', JSON.stringify(definedIds) === JSON.stringify(DEFINED), definedIds.join(','))
check('no defined slot has a src yet', !/^\s+src: '/m.test(moduleSrc.slice(moduleSrc.indexOf('const IMAGE_SLOTS'), moduleSrc.indexOf('function slotImage'))))
if (PLACEHOLDERS_ON) {
  check('all 19 defined slots draw a labelled box, one per id', DEFINED.every((e) => got.includes(e)) && got.length === DEFINED.length && new Set(got).size === got.length, got.join(', '))
  check('no existing or rendered art on the page', !/<img[^>]+\/images\//.test(mainHtml) && !/\/_next\/image\?url=%2Fimages/.test(mainHtml))
  const boxes = [...mainHtml.matchAll(/Image slot: ([a-z-]+)<\/p><p>(16:9|4:3)<\/p><p>([^<]+)<\/p>/g)]
  check('each slot box is well-formed (id, ratio, shot text)', boxes.length === got.length, `${boxes.length} well-formed of ${got.length}`)
  check('the placeholder source string is not in the HTML', !html.includes('review build only'))
} else {
  check('no slot placeholders when the flag is off', got.length === 0 && dashed === 0)
}
check('program section lists render', /<ul[\s>]/.test(mainHtml) && /<ol[\s>]/.test(mainHtml))
const repairClaims = /(we|our crews?)\s+(repair|replace|install|excavate|line)\b/i.exec(text)
check('no claim that The Sewer Pros repairs or replaces', repairClaims === null, repairClaims?.[0])
const repairNo = (text.match(/does not perform repairs or replacements|do not perform sewer repairs or replacements|No\. We inspect, locate, diagnose and clean|without a repair sale/g) ?? []).length
check('approved no-repair statements present (second opinion, code module closing, FAQ 10, final CTA)', repairNo >= 4, String(repairNo))
check('no dollar amount on the page', !/\$\d/.test(text))
check('no office, address, map or "visit us" language', !/(\bour (san diego |carlsbad )?(office|location)|visit (us|our)|storefront)/i.test(text))
check('no agency street address published', !/\d{3,5}\s+[A-Z][a-z]+\s+(Street|St\.|Avenue|Ave\.|Road|Rd\.|Boulevard|Blvd\.|Drive|Dr\.)/.test(text))

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
for (const want of ['/san-diego-ca/escondido/sewer-cleaning/', '/services/pre-purchase-sewer-inspection/', '/for/home-buyers/', '/for/real-estate-agents/', '/san-diego-ca/san-marcos/', '/san-diego-ca/oceanside/', '/san-diego-ca/chula-vista/', '/san-diego-ca/san-diego/', '/san-diego-ca/carlsbad/', '/san-diego-ca/mission-valley/', '/san-diego-ca/']) {
  check(`links to ${want}`, internal.includes(want))
}
for (const u of new Set(external.map((m) => m[1]))) console.log('  ext', u)

/* ---- Sitemap ---- */
const sitemapPath = path.join(ROOT, 'sitemap.xml')
if (fs.existsSync(sitemapPath)) {
  check('page is in the sitemap', fs.readFileSync(sitemapPath, 'utf8').includes(`${ORIGIN}/san-diego-ca/escondido/`))
}

/* ---- Trust strip founding year ---- */
check('"Since 2011" appears nowhere on the page', !html.includes('Since 2011'))
check(`trust strip founding-year cell reads Since ${SD_YEAR}`, new RegExp('Since ' + SD_YEAR).test(text) && !/2011/.test(text))

/* ---- Market phones (whole document, header and footer included) ---- */
check(
  'no other market phone number anywhere in the document (JSON-LD excluded)',
  otherMarketPhoneHits(html, 'san-diego-ca').length === 0,
  otherMarketPhoneHits(html, 'san-diego-ca').join(', '),
)

console.log(failures === 0 ? '\nAll checks passed.' : `\n${failures} check(s) FAILED.`)
process.exit(failures === 0 ? 0 : 1)
