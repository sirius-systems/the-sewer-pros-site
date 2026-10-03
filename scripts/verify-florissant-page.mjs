/**
 * Post-build checks for /st-louis-mo/florissant/.
 *
 * Reads the static export in `out/` (run `npm run build` first). No
 * dependencies. Exits 1 on any failure.
 *
 *   node scripts/verify-florissant-page.mjs
 */
import fs from 'node:fs'
import path from 'node:path'

const ROOT = path.resolve('out')
const PAGE = path.join(ROOT, 'st-louis-mo', 'florissant', 'index.html')
const ORIGIN = 'https://www.thesewerpros.com'
const html = fs.readFileSync(PAGE, 'utf8')

let failures = 0
const check = (name, ok, detail = '') => {
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}${ok || detail === '' ? '' : `: ${detail}`}`)
  if (!ok) failures += 1
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

const bodyHtml = html.replace(/<script[\s\S]*?<\/script>/g, '').replace(/<style[\s\S]*?<\/style>/g, '')
const text = norm(bodyHtml.replace(/<[^>]+>/g, ' '))

/* ---- JSON-LD ---- */
const ldBlocks = [...html.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)]
check('exactly one JSON-LD block', ldBlocks.length === 1, `found ${ldBlocks.length}`)
const graph = JSON.parse(ldBlocks[0][1])['@graph']
const ids = new Set(graph.map((n) => n['@id']).filter(Boolean))

for (const bad of ['LocalBusiness', 'AggregateRating', 'Review', 'PostalAddress', 'GeoCoordinates', 'HowTo']) {
  check(`no ${bad} node`, !JSON.stringify(graph).includes(`"${bad}"`))
}
check('no placeholder strings in JSON-LD', !/REPLACE-|TODO/.test(JSON.stringify(graph)))

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

const services = graph.filter((n) => n['@type'] === 'Service')
const cardTitles = [...bodyHtml.matchAll(/<h3 class="text-h4 font-semibold tracking-tight">([\s\S]*?)<\/h3>/g)].map((m) => norm(m[1]))
check('nine Service nodes', services.length === 9, `found ${services.length}`)
check(
  'Service nodes match the nine visible cards (names, in order)',
  JSON.stringify(services.map((s) => s.name)) === JSON.stringify(cardTitles.slice(0, 9)),
  `${JSON.stringify(services.map((s) => s.name))} vs ${JSON.stringify(cardTitles.slice(0, 9))}`,
)
check(
  'Service descriptions appear verbatim on the page',
  services.every((s) => text.includes(norm(s.description))),
)
check(
  'Service nodes use provider and areaServed refs',
  services.every((s) => s.provider?.['@id'] === `${ORIGIN}/#organization` && s.areaServed?.[0]?.['@id']),
)

const crumbLd = graph.find((n) => n['@type'] === 'BreadcrumbList')
const crumbNames = crumbLd?.itemListElement.map((i) => i.name)
const navMatch = bodyHtml.match(/<nav[^>]*aria-label="Breadcrumb"[^>]*>([\s\S]*?)<\/nav>/i)
const crumbVisible = navMatch ? norm(navMatch[1].replace(/<[^>]+>/g, ' ')) : ''
check(
  'BreadcrumbList names all appear in the visible breadcrumb',
  crumbNames?.every((n) => crumbVisible.includes(norm(n))),
  `${crumbNames} vs "${crumbVisible}"`,
)

/* ---- FAQ ---- */
// FAQPage is gated by `faqSchemaApproved` in the content module. The check
// follows the committed state, so it passes in either state when consistent.
const contentSrc = fs.readFileSync(path.resolve('content/pages/st-louis-florissant.tsx'), 'utf8')
const faqOn = /faqSchemaApproved:\s*true/.test(contentSrc)
const faqQs = [...bodyHtml.matchAll(/<summary[^>]*><span[^>]*><h3[^>]*>([\s\S]*?)<\/h3>/g)].map((m) => norm(m[1].replace(/<[^>]+>/g, ' ')))
check('ten FAQ questions in the DOM', faqQs.length === 10, `found ${faqQs.length}`)
const faqLd = graph.find((n) => n['@type'] === 'FAQPage')
const webPageNode = graph.find((n) => n['@type'] === 'WebPage')
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
  // graph.ts does not set WebPage.mainEntity for FAQ pages (same as Chesterfield and Ballwin).
  check('15 JSON-LD objects including the Organization', graph.length === 15, `found ${graph.length}`)
} else {
  check('FAQPage node absent (faqSchemaApproved: false)', faqLd === undefined)
  check('WebPage.mainEntity absent', webPageNode?.mainEntity === undefined)
  check('14 JSON-LD objects including the Organization', graph.length === 14, `found ${graph.length}`)
}
check('Organization is the first node', graph[0]?.['@type'] === 'Organization' || graph[0]?.['@id'] === `${ORIGIN}/#organization`, JSON.stringify(graph[0]?.['@type']))

/* ---- WebPage ---- */
const webPage = webPageNode
check('WebPage name equals the seoTitle', webPage?.name === 'Florissant, MO Sewer Inspection & Cleaning', webPage?.name)
check('WebPage description is the 134-character meta description', webPage?.description?.length === 134, String(webPage?.description?.length))
check('WebPage about is the St. Louis market Place', webPage?.about?.['@id'] === `${ORIGIN}/st-louis-mo/#place`)
check('no Florissant Place node', !graph.some((n) => /florissant/i.test(n['@id'] ?? '') && ['Place', 'City'].includes(n['@type'])))

/* ---- Head ---- */
check('title', /<title>Florissant, MO Sewer Inspection &amp; Cleaning \| The Sewer Pros<\/title>/.test(html))
check('canonical', html.includes(`<link rel="canonical" href="${ORIGIN}/st-louis-mo/florissant/"/>`))
check('robots index, follow (unchanged)', html.includes('<meta name="robots" content="index, follow"/>'))
check('one H1', (bodyHtml.match(/<h1[\s>]/g) ?? []).length === 1)

/* ---- Duplicate ids ---- */
const idAttrs = [...bodyHtml.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1])
const dupes = idAttrs.filter((v, i) => idAttrs.indexOf(v) !== i)
check('no duplicate ids', dupes.length === 0, dupes.join(', '))
for (const anchor of ['request', 'services', 'responsible', 'how-system', 'age', 'who-to-call', 'city-program', 'second-opinion', 'buying', 'areas', 'faq', 'sources']) {
  check(`anchor #${anchor} exists`, idAttrs.includes(anchor))
}

/* ---- Copy checks ---- */
check('no em dashes in visible text', !text.includes('—'))
const REQUIRED = [
  '$50', '$300', 'five feet', '21,229', '1950 and 1979', '(314) 839-7643', '(314) 839-7648',
  '(314) 768-6260', 'Sewer Lateral Insurance Program', 'This is MSD’s number, not ours',
  'These are the City’s numbers, not ours',
]
const missingReq = REQUIRED.filter((t) => !text.includes(t))
check('required strings present', missingReq.length === 0, missingReq.join(' | '))
const FORBIDDEN = [
  '$28', 'no maximum', 'no stated maximum', 'no cap', '70.8', '1963', 'Orangeburg', '$4,500', '$7,500',
  '$150', '$15,000', '$200', '58.4', 'Street Division', 'More than half', 'Master Drainlayer',
  '3 to 5 feet', '1976', 'Valley Drive', 'MyGov', '1-866-281-5737', '866) 281', '7:30', 'licensed',
  'certified', 'insured', 'guarantee', '24/7', 'same-day', 'lowest', 'best price', 'review count',
  'stars', 'testimonial', '911', 'Placeholder',
]
const lower = text.toLowerCase()
const forbiddenHits = FORBIDDEN.filter((w) => (w === 'Placeholder' ? lower.includes('placeholder') : text.includes(w) || lower.includes(w.toLowerCase())))
if (/free /.test(text)) forbiddenHits.push('free ')
check('no forbidden strings', forbiddenHits.length === 0, forbiddenHits.join(', '))
// Allowed-only-here words: each hit must sit inside its approved context.
const contextOnly = (word, allowed, label) => {
  const bad = [...text.matchAll(new RegExp(word, 'gi'))]
    .map((m) => text.slice(Math.max(0, m.index - 70), m.index + 90))
    .filter((c) => !allowed.test(c))
  check(label, bad.length === 0, bad.join(' | '))
}
contextOnly('insurance', /Sewer Lateral Insurance Program/, '"Insurance" only inside "Sewer Lateral Insurance Program"')
contextOnly('maximum', /does not state a maximum benefit or current funding status/, '"maximum" only in the approved funding sentence')
contextOnly('emergency', /as an emergency repair, moved to the front of the list/, '"emergency" only in the City emergency-repair sentence')
contextOnly('combined', /separate sewer system, while St\. Louis City is served by a combined one/, '"combined" only in the MSD sentence')
contextOnly('reviews', /City Engineer reviews the video report/, '"reviews" only as the City Engineer reviewing a report')
check('"warranty" nowhere', !/warrant/i.test(text))
check('no ImagePlaceholder markup', !/border-dashed/.test(bodyHtml))
check('no NOT FOR PRODUCTION INDEXATION text', !/NOT FOR PRODUCTION INDEXATION/i.test(html))
check('MSD number 1-866-281-5737 absent', !/281-5737|281\.5737/.test(text))
check('Sewer Pros hours are 8:00 am - 4:00 pm', text.includes('8:00 am - 4:00 pm'))
check('Sewer Pros phone is (314) 821-1600', text.includes('(314) 821-1600'))
check('program steps render as an ordered list', /<ol[\s>]/.test(bodyHtml))
const repairClaims = /(we|our crews?)\s+(repair|replace|install|excavate|line)/i.exec(text)
check('no claim that The Sewer Pros repairs or replaces', repairClaims === null, repairClaims?.[0])
const repairNo = (text.match(/does not perform repairs or replacements|do not perform sewer repairs or replacements|No\. We inspect, locate, diagnose and clean|without a repair sale/g) ?? []).length
check('approved no-repair statements present (second opinion, program callout, FAQ 10, final CTA)', repairNo >= 4, String(repairNo))

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
check('external hrefs listed for manual status check', true, [...new Set(external.map((m) => m[1]))].length + ' unique')
for (const u of new Set(external.map((m) => m[1]))) console.log('  ext', u)

/* ---- Sitemap ---- */
const sitemapPath = ['sitemap.xml'].map((f) => path.join(ROOT, f)).find(fs.existsSync)
if (sitemapPath) {
  check('page is in the sitemap', fs.readFileSync(sitemapPath, 'utf8').includes(`${ORIGIN}/st-louis-mo/florissant/`))
}

console.log(failures === 0 ? '\nAll checks passed.' : `\n${failures} check(s) FAILED.`)
process.exit(failures === 0 ? 0 : 1)
