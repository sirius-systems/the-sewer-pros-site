/**
 * Post-build checks for /services/sewer-camera-inspection/ (Service Page
 * Template v2).
 *
 * Reads the static export in `out/` (run `npm run build` first). No
 * dependencies. Exits 1 on any failure.
 *
 *   node scripts/verify-sewer-camera-inspection-page.mjs
 *
 * The page is market-neutral: no phone number or `tel:` link before the
 * company footer (DEC-071), no repair offered as a service, and no claim
 * that video, written findings, coding, surface marks or re-inspection
 * are included. FAQPage JSON-LD must equal the visible FAQ (DEC-114).
 */
import fs from 'node:fs'
import path from 'node:path'
import { checkRelatedCards, checkServiceSchema } from './lib/service-page-checks.mjs'

const ROOT = path.resolve('out')
const PAGE = path.join(ROOT, 'services', 'sewer-camera-inspection', 'index.html')
// Follows the origin the build used (NEXT_PUBLIC_SITE_URL); falls back to production.
const PRODUCTION_ORIGIN = 'https://www.thesewerpros.com'
const ORIGIN = (process.env.NEXT_PUBLIC_SITE_URL || PRODUCTION_ORIGIN).replace(/\/+$/, '')
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
    .replace(/&rsquo;/g, '’')
const norm = (s) => decode(s).replace(/\s+/g, ' ').trim()
const strip = (h) => norm(h.replace(/<[^>]+>/g, ' ').replace(/\s+([.,;:)?])/g, '$1'))

const body = html
  .replace(/<!-- -->/g, '')
  .replace(/<script[\s\S]*?<\/script>/g, '')
  .replace(/<style[\s\S]*?<\/style>/g, '')
const mainStart = body.indexOf('<main')
const mainEnd = body.indexOf('</main>')
const main = mainStart >= 0 && mainEnd > mainStart ? body.slice(mainStart, mainEnd) : body
const visible = strip(main)

/* ---- Head ---- */
const title = (html.match(/<title>([^<]*)<\/title>/) || [])[1]
check('title', title === 'Sewer Camera Inspection for Homes | The Sewer Pros', title)
const canonical = (html.match(/<link rel="canonical" href="([^"]+)"/) || [])[1]
check('canonical', canonical === `${ORIGIN}/services/sewer-camera-inspection/`, canonical)
const robots = (html.match(/<meta name="robots" content="([^"]+)"/) || [])[1]
check('indexable (no noindex)', robots === undefined || !/noindex/i.test(robots), robots)
const desc = decode((html.match(/<meta name="description" content="([^"]*)"/) || [])[1] || '')
check('meta description length (<= 160)', desc.length > 0 && desc.length <= 160, String(desc.length))

/* ---- Headings ---- */
const h1s = [...main.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/g)].map((m) => strip(m[1]))
check('exactly one H1 equal to "Sewer Camera Inspection"', h1s.length === 1 && h1s[0] === 'Sewer Camera Inspection', JSON.stringify(h1s))
const levels = [...main.matchAll(/<h([1-6])[\s>]/g)].map((m) => Number(m[1]))
let skip = false
for (let i = 1; i < levels.length; i += 1) if (levels[i] - levels[i - 1] > 1) skip = true
check('heading order has no skipped level', !skip, levels.join(''))

/* ---- JSON-LD ---- */
const ld = [...html.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map((m) => JSON.parse(m[1]))
check('one JSON-LD block', ld.length === 1, String(ld.length))
const graph = ld[0]?.['@graph'] ?? []
checkServiceSchema({ html, check, origin: ORIGIN, serviceName: 'Sewer Camera Inspection' })
const types = graph.map((n) => n['@type'])
check('Organization first', types[0] === 'Organization', JSON.stringify(types))
check('one Service node', types.filter((t) => t === 'Service').length === 1, JSON.stringify(types))
const allowed = new Set(['Organization', 'WebSite', 'WebPage', 'Service', 'BreadcrumbList', 'FAQPage'])
check('only the expected node types', types.every((t) => allowed.has(t)), JSON.stringify(types))
const ldText = JSON.stringify(ld)
for (const forbidden of ['LocalBusiness', 'AggregateRating', '"Review"', 'PostalAddress', 'HowTo']) {
  check(`no ${forbidden.replace(/"/g, '')} in JSON-LD`, !ldText.includes(forbidden))
}

const crumbs = graph.find((n) => n['@type'] === 'BreadcrumbList')
const crumbNames = (crumbs?.itemListElement ?? []).map((i) => i.name)
const visibleCrumbs = [...(body.match(/<nav[^>]*aria-label="Breadcrumb"[\s\S]*?<\/nav>/) || [''])[0].matchAll(/<(?:a|span)[^>]*>([^<]+)<\/(?:a|span)>/g)].map((m) => norm(m[1]))
check(
  'BreadcrumbList equals the visible breadcrumb',
  crumbNames.length > 0 && crumbNames.every((n) => visibleCrumbs.includes(norm(n))),
  `${JSON.stringify(crumbNames)} vs ${JSON.stringify(visibleCrumbs)}`,
)

/* ---- FAQ: JSON-LD equals the visible questions and answers ---- */
const faqNode = graph.find((n) => n['@type'] === 'FAQPage')
const faqLd = (faqNode?.mainEntity ?? []).map((q) => ({
  q: norm(q.name),
  a: norm(q.acceptedAnswer?.text ?? ''),
}))
const faqSection = (main.match(/<section[^>]*aria-labelledby="faq"[\s\S]*?<\/section>/) || [''])[0]
const details = [...faqSection.matchAll(/<details[\s\S]*?<\/details>/g)].map((m) => m[0])
const faqVisible = details.map((d) => ({
  q: strip((d.match(/<h4[^>]*>([\s\S]*?)<\/h4>/) || [])[1] || ''),
  a: strip(d.slice(d.indexOf('</summary>') + '</summary>'.length)),
}))
check('FAQPage has 23 questions', faqLd.length === 23, String(faqLd.length))
check('23 visible questions', faqVisible.length === 23, String(faqVisible.length))
check(
  'FAQPage text equals the visible FAQ',
  faqLd.length === faqVisible.length &&
    faqLd.every((f, i) => f.q === faqVisible[i].q && f.a === faqVisible[i].a),
)
const groupLabels = [...faqSection.matchAll(/<h3[^>]*id="faq-[^"]*"[^>]*>([\s\S]*?)<\/h3>/g)].map((m) => strip(m[1]))
check('five FAQ groups', groupLabels.length === 5, JSON.stringify(groupLabels))
check('group labels are not part of any answer', faqLd.every((f) => !groupLabels.some((g) => f.a.includes(g))))

/* ---- Structure ---- */
const sectionById = (id) =>
  (main.match(new RegExp(`<section[^>]*aria-labelledby="${id}"[\\s\\S]*?</section>`)) || [''])[0]
const signalsId = 'when-a-camera-inspection-may-be-useful'
check('exactly six signals', (sectionById(signalsId).match(/<li[\s>]/g) || []).length === 6)
const processId = 'how-a-sewer-camera-inspection-works'
const processOl = (sectionById(processId).match(/<ol[\s\S]*?<\/ol>/) || [''])[0]
check('exactly five process steps', (processOl.match(/<li[\s>]/g) || []).length === 5)

const trust = ['Independent inspection and diagnostics', 'Sewer and drain specialists, not general plumbing', 'No repair-driven upselling', 'Serving St. Louis']
check('trust strip present with the existing statements', trust.every((t) => visible.includes(t)))

check('hero request card has a market select', /id="hero-lead-market"/.test(html))
check(
  'hero request card shows the service chip and preselects the service',
  /id="hero-lead-service"[\s\S]*?<option value="svc-sewer-camera-inspection" selected/.test(html) &&
    /text-caption[^>]*>Service<\/p><p[^>]*>Sewer Camera Inspection</.test(html),
)

const ids = [...body.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1])
const dupes = ids.filter((v, i) => ids.indexOf(v) !== i)
check('no duplicate ids', dupes.length === 0, [...new Set(dupes)].join(', '))

const navBlock = (main.match(/<nav[^>]*aria-labelledby="on-this-page"[\s\S]*?<\/nav>/) || [''])[0]
const navHrefs = [...navBlock.matchAll(/href="#([^"]+)"/g)].map((m) => m[1])
check('"On this page" list present (8 or more sections)', navHrefs.length >= 8, String(navHrefs.length))
check('every "On this page" anchor resolves', navHrefs.every((h) => ids.includes(h)), navHrefs.filter((h) => !ids.includes(h)).join(', '))
check('"On this page" nav renders exactly once in the DOM', (main.match(/aria-labelledby="on-this-page"/g) || []).length === 1)
check('nav is not hidden from assistive technology', !/aria-hidden="true"[^>]*aria-labelledby="on-this-page"|aria-labelledby="on-this-page"[^>]*aria-hidden="true"/.test(navBlock) && !/<nav[^>]*\shidden/.test(navBlock))
// The nav lists only sections that rendered: each target is a heading inside main.
const headingIds = [...main.matchAll(/<h2[^>]*\sid="([^"]+)"/g)].map((m) => m[1])
check('every nav entry points at a rendered section heading', navHrefs.every((h) => headingIds.includes(h)), navHrefs.filter((h) => !headingIds.includes(h)).join(', '))
checkRelatedCards({ main, check, expectedHrefs: ['/services/sewer-cleaning-camera-inspection/', '/services/pre-purchase-sewer-inspection/', '/services/sewer-cleaning/', '/services/hydro-jetting/', '/services/sewer-line-locating/', '/services/recurring-sewer-backup-diagnosis/', '/resources/what-is-in-a-sewer-camera-inspection-report/', '/resources/how-to-read-a-sewer-camera-inspection-video/'] })
const topicBlock = (main.match(/<nav[^>]*aria-labelledby="faq-topics"[\s\S]*?<\/nav>/) || [''])[0]
const topicHrefs = [...topicBlock.matchAll(/href="#([^"]+)"/g)].map((m) => m[1])
check('FAQ topic list has five anchors that resolve', topicHrefs.length === 5 && topicHrefs.every((h) => ids.includes(h)))
const inPage = [...main.matchAll(/href="#([^"]+)"/g)].map((m) => m[1])
check('every in-page anchor resolves (including #request, #choose-market)', inPage.every((h) => ids.includes(h)), inPage.filter((h) => !ids.includes(h)).join(', '))

/* ---- Links ---- */
const hrefs = [...main.matchAll(/<a [^>]*href="([^"]+)"[^>]*>/g)]
const external = hrefs.filter((m) => /^https?:\/\//.test(m[1]) && !m[1].startsWith(ORIGIN))
check('external links carry rel="noopener"', external.every((m) => /rel="[^"]*noopener/.test(m[0])), external.map((m) => m[1]).join(', '))
const internal = [...new Set(hrefs.map((m) => m[1]).filter((h) => h.startsWith('/') && !h.startsWith('//')))]
const unresolved = internal.filter((h) => {
  const clean = h.split('#')[0].split('?')[0]
  if (/\.(webp|png|jpg|svg|ico|txt|xml)$/.test(clean)) return false
  return !fs.existsSync(path.join(ROOT, clean, 'index.html'))
})
check('internal links resolve to exported pages', unresolved.length === 0, unresolved.join(', '))

/* ---- Characters and forbidden text ---- */
check('no em dash (U+2014)', !html.includes('—'))

const scanText = `${visible} ${ldText}`.toLowerCase()
const forbidden = [
  'no-dig',
  'without digging',
  'non-invasive',
  'state-of-the-art',
  'guarantee',
  'warranty',
  'licensed',
  'insured',
  'bonded',
  'same-day',
  '24/7',
  'emergency',
  'free estimate',
  'free inspection',
  'discount',
  'pacp',
  'lacp',
  '512',
  'we repair',
  'we replace',
  'we install',
  'repair service',
  'replacement service',
]
// The independent-opinion band and the audience copy are shared and
// existing; they may use a word in the negative ("does not guarantee").
const allowedContext = [/does not guarantee/g, /is not a guarantee/g]
let scanned = scanText
for (const re of allowedContext) scanned = scanned.replace(re, '')
const hits = forbidden.filter((w) => scanned.includes(w))
check('no forbidden claim words', hits.length === 0, hits.join(', '))
check('no dollar price', !/\$\s?\d/.test(visible))
check('no duration in minutes', !/\b\d+\s*(?:-|to)?\s*\d*\s*minutes?\b/i.test(visible))
// The shared independent-opinion band (id "independent") is the sitewide
// dataset and is not authored on this page; it is reported, not scanned.
const bandHtml = (main.match(/<section[^>]*aria-labelledby="independent"[\s\S]*?<\/section>/) || [''])[0]
const bandText = strip(bandHtml)
const relatedHtml = strip((main.match(/<section[^>]*aria-labelledby="related"[\s\S]*?<\/section>/) || [''])[0])
// The related cards link a resource article whose approved title names a "report"; a link title, not a deliverable claim.
const outsideBand = strip(main.replace(bandHtml, ''))
check(
  'outside the shared band, only the owner-confirmed video and written-findings wording (2026-10-05); no coding claim',
  !/(video|report|findings) (is|are) included(?! for)/i.test(outsideBand.replace(/video is included when a camera is used, and written findings are included/gi, '').replace(/written findings are included/gi, '').replace(/whether the video is included/gi, '')) &&
    !/we (provide|deliver|include) (a |the )?(video|written)/i.test(outsideBand),
)
check('"report" is not named as a deliverable, and no photos, narration, coding or same-day claim', !/written report|inspection report|camera report|photos? (are|is) included|narrat|PACP|LACP/i.test(outsideBand.replace(relatedHtml, '')))

const bandClaim = bandText.match(/We provide video documentation[^.]*\./)
if (bandClaim) console.log(`NOTE  shared band says: "${bandClaim[0]}" (sitewide copy, unchanged; owner decision pending)`)
check(
  'scope statement appears exactly twice (hero and final request)',
  (visible.match(/We do not provide sewer repair, replacement, lining, excavation, or pipe installation\./g) || []).length === 2,
)

/* ---- Phones (DEC-071): none before the company footer ---- */
const footerAt = body.indexOf('<footer')
const beforeFooter = footerAt >= 0 ? body.slice(0, footerAt) : body
check('no tel: link before the footer', !/href="tel:/.test(beforeFooter))
check('no phone number in the page body', !/\(?\b\d{3}\)?[-.\s]\d{3}[-.\s]\d{4}\b/.test(strip(main)))
const footerHtml = footerAt >= 0 ? body.slice(footerAt) : ''
const footerTels = [...footerHtml.matchAll(/href="tel:[^"]+"/g)].length
check('footer numbers are labelled by market', footerTels === 0 || /(St\. Louis|San Diego|Las Vegas)/.test(footerHtml))

/* ---- Mobile bar and form ---- */
check('mobile contact bar present', /aria-label="Quick contact"/.test(html))
check('mobile bar Schedule points at #request', /href="#request"[^>]*>Schedule</.test(html))
check('final request section present (id=request)', /id="request"/.test(html))

console.log(failures === 0 ? '\nAll checks passed.' : `\n${failures} check(s) FAILED.`)
process.exit(failures === 0 ? 0 : 1)
