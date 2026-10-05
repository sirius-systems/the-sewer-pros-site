/**
 * Post-build checks for /services/hydro-jetting/ (Service Page Template v2).
 *
 * Reads the static export in `out/` (run `npm run build` first). No
 * dependencies. Exits 1 on any failure.
 *
 *   node scripts/verify-hydro-jetting-page.mjs
 *
 * The page is market-neutral: no phone number or `tel:` link before the
 * company footer (DEC-071), no repair offered as a service, and no claim
 * that video, written findings, coding, locating or re-inspection are
 * included. The free-estimate and same-day wording is the owner-approved
 * DEC-088 text and may appear only where the content doc puts it.
 * FAQPage JSON-LD must equal the visible FAQ (DEC-114).
 */
import fs from 'node:fs'
import { checkRelatedCards, checkServiceSchema } from './lib/service-page-checks.mjs'
import path from 'node:path'

const ROOT = path.resolve('out')
const PAGE = path.join(ROOT, 'services', 'hydro-jetting', 'index.html')
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
    .replace(/&ldquo;/g, '“')
    .replace(/&rdquo;/g, '”')
const norm = (s) => decode(s).replace(/\s+/g, ' ').trim()
const strip = (h) => norm(h.replace(/<[^>]+>/g, ' ').replace(/\s+([.,;:)?])/g, '$1'))
// Curly and straight quotes are the same character for comparison.
const flat = (s) => s.replace(/[‘’]/g, "'").replace(/[“”]/g, '"')
const count = (haystack, needle) => haystack.split(needle).length - 1

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
check('title', title === 'Hydro Jetting: How It Works and Its Limits | The Sewer Pros', title)
check('title length is 59', (title || '').length === 59, String((title || '').length))
const canonical = (html.match(/<link rel="canonical" href="([^"]+)"/) || [])[1]
check('canonical', canonical === `${ORIGIN}/services/hydro-jetting/`, canonical)
const robots = (html.match(/<meta name="robots" content="([^"]+)"/) || [])[1]
check('indexable (no noindex)', robots === undefined || !/noindex/i.test(robots), robots)
const desc = decode((html.match(/<meta name="description" content="([^"]*)"/) || [])[1] || '')
check('meta description length (<= 160)', desc.length > 0 && desc.length <= 160, String(desc.length))
console.log(`NOTE  meta description length: ${desc.length}`)

/* ---- Headings ---- */
const h1s = [...main.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/g)].map((m) => strip(m[1]))
check('exactly one H1 equal to "Hydro Jetting"', h1s.length === 1 && h1s[0] === 'Hydro Jetting', JSON.stringify(h1s))
const levels = [...main.matchAll(/<h([1-6])[\s>]/g)].map((m) => Number(m[1]))
let skip = false
for (let i = 1; i < levels.length; i += 1) if (levels[i] - levels[i - 1] > 1) skip = true
check('heading order has no skipped level', !skip, levels.join(''))

/* ---- JSON-LD ---- */
const ld = [...html.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map((m) => JSON.parse(m[1]))
check('one JSON-LD block', ld.length === 1, String(ld.length))
const graph = ld[0]?.['@graph'] ?? []
checkServiceSchema({ html, check, origin: ORIGIN, serviceName: 'Hydro Jetting' })
const types = graph.map((n) => n['@type'])
check('Organization first', types[0] === 'Organization', JSON.stringify(types))
check('one Service node', types.filter((t) => t === 'Service').length === 1, JSON.stringify(types))
const allowed = new Set(['Organization', 'WebSite', 'WebPage', 'Service', 'BreadcrumbList', 'FAQPage'])
check('only the expected node types', types.every((t) => allowed.has(t)), JSON.stringify(types))
console.log(`NOTE  schema nodes: ${JSON.stringify(types)}`)
const ldText = JSON.stringify(ld)
for (const forbidden of ['LocalBusiness', 'AggregateRating', '"Review"', 'PostalAddress', 'HowTo', '"Place"']) {
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
check('FAQPage has 21 questions', faqLd.length === 21, String(faqLd.length))
check('21 visible questions', faqVisible.length === 21, String(faqVisible.length))
check(
  'FAQPage text equals the visible FAQ',
  faqLd.length === faqVisible.length &&
    faqLd.every((f, i) => f.q === faqVisible[i].q && f.a === faqVisible[i].a),
)
const groupLabels = [...faqSection.matchAll(/<h3[^>]*id="faq-[^"]*"[^>]*>([\s\S]*?)<\/h3>/g)].map((m) => strip(m[1]))
check(
  'five FAQ groups with the expected labels',
  JSON.stringify(groupLabels) ===
    JSON.stringify(['The basics', 'Safety and limits', 'Symptoms', 'Planning', 'Related questions']),
  JSON.stringify(groupLabels),
)
check('group labels are not part of any answer', faqLd.every((f) => !groupLabels.some((g) => f.a.includes(g))))
check('no anchors inside FAQ answers', details.every((d) => !/<a[\s>]/.test(d.slice(d.indexOf('</summary>')))))

/* ---- Structure ---- */
const sectionById = (id) =>
  (main.match(new RegExp(`<section[^>]*aria-labelledby="${id}"[\\s\\S]*?</section>`)) || [''])[0]
const signalsSection = sectionById('when-might-a-line-need-cleaning')
const signalsOl = (signalsSection.match(/<ol[\s\S]*?<\/ol>/) || [''])[0]
check('exactly five signals', (signalsOl.match(/<li[\s>]/g) || []).length === 5)
const processSection = sectionById('how-does-a-hydro-jetting-visit-work')
const processOl = (processSection.match(/<ol[\s\S]*?<\/ol>/) || [''])[0]
check('exactly five process steps', (processOl.match(/<li[\s>]/g) || []).length === 5)
const limitsSection = sectionById('what-can-cleaning-address-and-what-can-it-not')
check('cleaning panel lists 4 "may help" and 4 "does not correct" items', (limitsSection.match(/<li[\s>]/g) || []).length === 8, String((limitsSection.match(/<li[\s>]/g) || []).length))
const decisionSection = sectionById('camera-first-or-cleaning-first')
check('decision panel has three starting points and the camera-limits paragraph', (decisionSection.match(/<li[\s>]/g) || []).length === 3 && /What a camera cannot show/.test(decisionSection))

// The trust strip is the shared one used on every service page (hard rule).
const trust = [
  'Independent inspection and diagnostics',
  'Sewer and drain specialists, not general plumbing',
  'No repair-driven upselling',
  'Serving St. Louis • San Diego • Las Vegas',
]
const trustAside = (main.match(/<aside[\s\S]*?<\/aside>/) || [''])[0]
check('trust strip is the shared four statements with their icons', trust.every((t) => visible.includes(t)) && (trustAside.match(/<svg/g) || []).length === 4, String((trustAside.match(/<svg/g) || []).length))

check('hero request card has a market select', /id="hero-lead-market"/.test(html))
check(
  'hero request card shows the service chip and preselects the service',
  /id="hero-lead-service"[\s\S]*?<option value="svc-hydro-jetting" selected/.test(html) &&
    /text-caption[^>]*>Service<\/p><p[^>]*>Hydro Jetting</.test(html),
)
check('request form preselects the service', /id="request-lead-service"[\s\S]*?<option value="svc-hydro-jetting" selected/.test(html))

const ids = [...body.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1])
const dupes = ids.filter((v, i) => ids.indexOf(v) !== i)
check('no duplicate ids', dupes.length === 0, [...new Set(dupes)].join(', '))

const navBlock = (main.match(/<nav[^>]*aria-labelledby="on-this-page"[\s\S]*?<\/nav>/) || [''])[0]
const navHrefs = [...navBlock.matchAll(/href="#([^"]+)"/g)].map((m) => m[1])
const navLabels = [...navBlock.matchAll(/<a [^>]*>([\s\S]*?)<\/a>/g)].map((m) => strip(m[1]))
check(
  '"On this page" list has the eight expected entries',
  JSON.stringify(navLabels) ===
    JSON.stringify([
      'When a line may need cleaning',
      'What cleaning can and cannot do',
      'What happens during a visit',
      'Camera or cleaning first',
      'Hydro jetting vs. cable cleaning',
      'What to ask for',
      'Where we provide it',
      'Questions',
    ]),
  JSON.stringify(navLabels),
)
check('every "On this page" anchor resolves', navHrefs.every((h) => ids.includes(h)), navHrefs.filter((h) => !ids.includes(h)).join(', '))
check('"On this page" nav renders exactly once in the DOM', (main.match(/aria-labelledby="on-this-page"/g) || []).length === 1)
const headingIds = [...main.matchAll(/<h2[^>]*\sid="([^"]+)"/g)].map((m) => m[1])
check('every nav entry points at a rendered section heading', navHrefs.every((h) => headingIds.includes(h)), navHrefs.filter((h) => !headingIds.includes(h)).join(', '))
checkRelatedCards({ main, check, expectedHrefs: ['/services/sewer-cleaning/', '/services/sewer-camera-inspection/', '/services/drain-cleaning/', '/services/sewer-line-locating/'] })
const topicBlock = (main.match(/<nav[^>]*aria-labelledby="faq-topics"[\s\S]*?<\/nav>/) || [''])[0]
const topicHrefs = [...topicBlock.matchAll(/href="#([^"]+)"/g)].map((m) => m[1])
check('FAQ topic list has five anchors that resolve', topicHrefs.length === 5 && topicHrefs.every((h) => ids.includes(h)), String(topicHrefs.length))
const inPage = [...main.matchAll(/href="#([^"]+)"/g)].map((m) => m[1])
check('every in-page anchor resolves (including #request, #choose-market, the hero camera link)', inPage.every((h) => ids.includes(h)), inPage.filter((h) => !ids.includes(h)).join(', '))

/* ---- Sections added for this page ---- */
const comparisonSection = sectionById('hydro-jetting-vs-cable-cleaning')
check('comparison table has 3 body rows and a labelled scroll region', (comparisonSection.match(/<tbody>[\s\S]*?<\/tbody>/) || [''])[0].split('<tr').length - 1 === 3 && /role="region"[^>]*aria-label="Hydro jetting compared with cable cleaning \(scrollable table\)"[^>]*tabindex="0"/.test(comparisonSection))
check('comparison columns are Hydro jetting and Cable cleaning', ['Hydro jetting', 'Cable cleaning'].every((h) => new RegExp(`<th[^>]*scope="col"[^>]*>\\s*${h}\\s*</th>`).test(comparisonSection)))
check('independent band present with its heading', /Independent by design/.test(sectionById('independent')) && /We clean, inspect, and locate\./.test(sectionById('independent')))
check('four ask items', (sectionById('what-to-ask-for-and-keep').match(/<li[\s>]/g) || []).length === 4)
check('four audience rows', (sectionById('who-this-page-is-for').match(/<li[\s>]/g) || []).length === 4)
check('no evidence mosaic section on this page', !/aria-labelledby="see-what/.test(main))

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
check('market cards link to the three hubs only', ['/st-louis-mo/', '/san-diego-ca/', '/las-vegas-nv/'].every((h) => internal.includes(h)) && !internal.some((h) => /^\/(st-louis-mo|san-diego-ca|las-vegas-nv)\/.+\/.+/.test(h)))
check('no link to the unbuilt independent second-opinion page', !internal.some((h) => h.includes('independent-sewer-inspection-second-opinion')))
check('comparison link uses the repo route', internal.includes('/compare/hydro-jetting-vs-sewer-snaking/'))
check('contact link present in the final request', internal.includes('/contact/'))

/* ---- Characters and forbidden text ---- */
check('no em dash (U+2014)', !html.includes('—'))
check('no literal [CONFIRM placeholder', !/\[CONFIRM/i.test(html))

// The owner-approved DEC-088 sentences and the one 24/7 sentence are the only
// permitted hits for their words. Count each, then remove them before scanning.
const FREE = 'Ask about a free estimate before scheduling.'
const SAME =
  'Same-day appointments can be arranged when scheduling permits, Monday through Friday, 8:00am to 4:00pm. Not available on weekends.'
const NOT247 = 'We do not offer 24/7 or emergency service.'
const v = flat(visible)
check('free-estimate sentence appears 3 times (same-day FAQ, cost FAQ, final request)', count(v, flat(FREE)) === 3, String(count(v, flat(FREE))))
check('same-day sentence appears 2 times (same-day FAQ, final request)', count(v, flat(SAME)) === 2, String(count(v, flat(SAME))))
check('"We do not offer 24/7 or emergency service." appears once', count(v, flat(NOT247)) === 1, String(count(v, flat(NOT247))))

const scrubbed = (s) =>
  flat(s)
    .split(flat(FREE)).join(' ')
    .split(flat(SAME)).join(' ')
    .split(flat(NOT247)).join(' ')
    .split('Is hydro jetting better than snaking?').join(' ')
    .split('Do you offer same-day hydro jetting?').join(' ')
    .toLowerCase()
const scanText = scrubbed(`${visible} ${ldText}`)
const forbidden = [
  'no-dig',
  'without digging',
  'non-invasive',
  'non-damaging',
  'state-of-the-art',
  'trusted local',
  'fast, reliable',
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
  'permanent',
  'finds every',
  'safe for every pipe',
  'restores your',
  'deeper',
  'more thorough',
  'better than',
  'we repair',
  'we replace',
  'we install',
  'repair service',
  'replacement service',
]
const hits = forbidden.filter((w) => scanText.includes(w))
check('no forbidden claim words (DEC-088 sentences and two FAQ question headings allow-listed)', hits.length === 0, hits.join(', '))
check('no dollar price', !/\$\s?\d/.test(visible))
check('no duration in minutes', !/\b\d+\s*(?:-|to)?\s*\d*\s*minutes?\b/i.test(visible))
check('no interval in years', !/\b\d+\s*(?:-|to)?\s*\d*\s*years?\b/i.test(visible))
check(
  'only the owner-confirmed video and written-findings wording (2026-10-05); no coding claim',
  !/(video|report|findings) (is|are) included(?! before)/i.test(visible.replace(/video is included when a camera is used, and written findings are included/gi, '').replace(/written findings are included/gi, '').replace(/whether video and written findings are included/gi, '').replace(/what is included/gi, '')) &&
    !/we (provide|deliver|include) (a |the )?(video|written)/i.test(visible),
)

check('"report" is not named as a deliverable, and no photos, narration, coding or same-day claim', !/written report|inspection report|camera report|photos? (are|is) included|narrat|PACP|LACP/i.test(visible))

const SCOPE =
  'This service is designed for accessible residential sewer and drain lines. Equipment selection and available service depend on the entry point, pipe size, line condition, and scope of work. We provide cleaning, camera diagnostics, and line locating only. We do not provide sewer repair, replacement, lining, excavation, or pipe installation.'
check('full scope statement appears verbatim exactly once (hero)', count(v, flat(SCOPE)) === 1, String(count(v, flat(SCOPE))))
const heroText = flat(strip((main.match(/<section[\s\S]*?<\/section>/) || [''])[0]))
check('the full scope statement is in the hero', heroText.includes(flat(SCOPE)))
const SHORT = 'We provide cleaning, camera diagnostics, and line locating only. We do not provide sewer repair, replacement, lining, excavation, or pipe installation.'
const requestText = flat(strip(sectionById('request')))
check('scope reminder appears in the final request exactly once', count(requestText, flat(SHORT)) === 1 && count(v, flat(SHORT)) === 2, `${count(requestText, flat(SHORT))}/${count(v, flat(SHORT))}`)

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
