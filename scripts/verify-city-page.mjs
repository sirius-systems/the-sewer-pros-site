/**
 * Post-build checks for /st-louis-mo/st-louis-city/.
 *
 * Reads the static export in `out/` (run `npm run build` first). No
 * dependencies. Exits 1 on any failure.
 *
 *   node scripts/verify-city-page.mjs
 */
import fs from 'node:fs'
import path from 'node:path'
import { otherMarketPhoneHits } from './lib/market-phones.mjs'

const ROOT = path.resolve('out')
const PAGE = path.join(ROOT, 'st-louis-mo', 'st-louis-city', 'index.html')
const ORIGIN = 'https://www.thesewerpros.com'
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
  console.log('!! WARNING: IMAGE SLOT PLACEHOLDERS ARE ON IN THIS BUILD.')
  console.log('!! Set IMAGE_SLOTS_DEFAULT to false in lib/image-slots.ts (or build with')
  console.log('!! NEXT_PUBLIC_SHOW_IMAGE_SLOTS=false) BEFORE LAUNCH. Not a failure.')
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
const faqQs = [...bodyHtml.matchAll(/<summary[^>]*><span[^>]*><h3[^>]*>([\s\S]*?)<\/h3>/g)].map((m) => norm(m[1].replace(/<[^>]+>/g, ' ')))
check('ten FAQ questions in the DOM', faqQs.length === 10, `found ${faqQs.length}`)
const faqLd = graph.find((n) => n['@type'] === 'FAQPage')
check('FAQPage node present (DEC-108, DEC-113)', faqLd !== undefined)
const ldQs = (faqLd?.mainEntity ?? []).map((q) => norm(q.name))
check('FAQPage questions equal the visible questions, in order', JSON.stringify(ldQs) === JSON.stringify(faqQs), `${ldQs.length} vs ${faqQs.length}`)
check(
  'FAQPage answers appear verbatim in the visible text',
  (faqLd?.mainEntity ?? []).every((q) => text.includes(norm(q.acceptedAnswer.text))),
  (faqLd?.mainEntity ?? []).filter((q) => !text.includes(norm(q.acceptedAnswer.text))).map((q) => q.name).join(' | '),
)
check('FAQPage has no unexpected parent refs', faqLd?.isPartOf?.['@id'] === `${ORIGIN}/#website`)
check('15 JSON-LD objects including the Organization', graph.length === 15, `found ${graph.length}`)

/* ---- WebPage ---- */
const webPage = graph.find((n) => n['@type'] === 'WebPage')
check('WebPage name equals the seoTitle', webPage?.name === 'Sewer Inspection & Cleaning in St. Louis City, MO', webPage?.name)

/* ---- Head ---- */
check('title', /<title>Sewer Inspection &amp; Cleaning in St\. Louis City, MO \| The Sewer Pros<\/title>/.test(html))
check('canonical', html.includes(`<link rel="canonical" href="${ORIGIN}/st-louis-mo/st-louis-city/"/>`))
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
check('no 58.4% figure', !text.includes('58.4'))
check('no "licensed plumber" line', !/licensed plumber/i.test(text.replace(/City-certified licensed plumbing contractors/gi,'')))
check('$28 fee present and attributed to the City', /City says owners[^.]*\$28 fee/.test(text))
check('program steps present (street problem request, statement and video)', ['street problem service request', 'plumber’s statement and video'].every((t) => text.includes(t)))
check('program callout present', text.includes('Where an independent inspection fits'))
check('Chesterfield, Ballwin, Florissant and St. Charles program terms absent', !/\$15,000|\$4,500|\$7,500|\$150|\$300|\$50 annual|\$200/.test(text))
check('no ImagePlaceholder markup', PLACEHOLDERS_ON || !/border-dashed/.test(bodyHtml))
const forbidden = ['free ', 'guarantee', 'warranty', '24/7', 'same-day', 'same day', 'lowest', 'best price', 'stars', ' rating', ' reviews', 'testimonial']
const hits = forbidden.filter((w) => text.toLowerCase().includes(w))
check('no forbidden claims', hits.length === 0, hits.join(', '))
const hitsRegex = /\b(licensed|insured)\b/i.exec(
  text.replace(/City-certified licensed plumbing contractors/gi, '').replace(/hire a licensed City plumber/gi, '').replace(/licensed City plumber/gi, ''),
)
check('no "licensed"/"insured" claim (outside the City permit and program sentences)', hitsRegex === null, hitsRegex?.[0])
check('MSD phone is labelled as MSD’s', text.includes('This is MSD’s number, not ours'))
check('Sewer Pros hours are 8:00 am - 4:00 pm', text.includes('8:00 am - 4:00 pm'))
check('no 7:30 hours', !text.includes('7:30'))
const repairClaims = /(we|our crews?)\s+(repair|replace|install|excavate|line)/i.exec(text)
check('no claim that The Sewer Pros repairs or replaces', repairClaims === null, repairClaims?.[0])

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
  check('page is in the sitemap', fs.readFileSync(sitemapPath, 'utf8').includes(`${ORIGIN}/st-louis-mo/st-louis-city/`))
}

/* ---- Market phones (whole document, header and footer included) ---- */
check(
  'no other market phone number anywhere in the document (JSON-LD excluded)',
  otherMarketPhoneHits(html, 'st-louis-mo').length === 0,
  otherMarketPhoneHits(html, 'st-louis-mo').join(', '),
)

console.log(failures === 0 ? '\nAll checks passed.' : `\n${failures} check(s) FAILED.`)
process.exit(failures === 0 ? 0 : 1)
