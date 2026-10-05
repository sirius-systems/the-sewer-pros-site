/**
 * Post-build checks for /services/sewer-line-locating/
 * (Service Page Template v2).
 *
 * Reads the static export in `out/` (run `npm run build` first). No
 * dependencies. Exits 1 on any failure.
 *
 *   node scripts/verify-sewer-line-locating-page.mjs
 *
 * The page is market-neutral: no phone number or `tel:` link before the
 * company footer (DEC-071), no repair offered as a service. Owner-confirmed
 * 2026-10-05: when a camera is used, the inspection video and written
 * findings are included. Nothing else about deliverables is claimed (no
 * surface marks, coding, photos, narration, same-day delivery or "report"
 * as the deliverable name). Every depth statement is an estimate. The page
 * never says whether 811 does or does not cover private sewer lines.
 * FAQPage JSON-LD must equal the visible FAQ (DEC-114).
 */
import fs from 'node:fs'
import path from 'node:path'
import { checkServiceSchema } from './lib/service-page-checks.mjs'

const ROOT = path.resolve('out')
const PAGE = path.join(ROOT, 'services', 'sewer-line-locating', 'index.html')
// Follows the origin the build used (NEXT_PUBLIC_SITE_URL); falls back to production.
const PRODUCTION_ORIGIN = 'https://www.thesewerpros.com'
const ORIGIN = (process.env.NEXT_PUBLIC_SITE_URL || PRODUCTION_ORIGIN).replace(/\/+$/, '')
const NAME = 'Sewer Line Locating'
const H1 = 'Sewer Line Locating'
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
// Curly and straight apostrophes are the same word for comparison.
const flat = (s) => s.replace(/[‘’]/g, "'").replace(/[“”]/g, '"')
const slug = (v) => v.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '')

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
check('title', decode(title || '') === `Private Sewer Line Locating: How It Works | The Sewer Pros`, title)
check('title length (<= 60)', (title || '').length > 0 && (title || '').length <= 60, String((title || '').length))
const canonical = (html.match(/<link rel="canonical" href="([^"]+)"/) || [])[1]
check('canonical', canonical === `${ORIGIN}/services/sewer-line-locating/`, canonical)
const robots = (html.match(/<meta name="robots" content="([^"]+)"/) || [])[1]
check('indexable (no noindex)', robots === undefined || !/noindex/i.test(robots), robots)
const desc = decode((html.match(/<meta name="description" content="([^"]*)"/) || [])[1] || '')
check('meta description length (<= 160)', desc.length > 0 && desc.length <= 160, String(desc.length))
check(
  'meta description is the content-doc sentence',
  desc ===
    'Sewer line locating helps estimate where an accessible private sewer line runs. Learn how it works and its limits. St. Louis, San Diego, Las Vegas.',
  desc,
)

/* ---- Headings ---- */
const h1s = [...main.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/g)].map((m) => strip(m[1]))
check(`exactly one H1 equal to "${H1}"`, h1s.length === 1 && h1s[0] === H1, JSON.stringify(h1s))
const levels = [...main.matchAll(/<h([1-6])[\s>]/g)].map((m) => Number(m[1]))
let skip = false
for (let i = 1; i < levels.length; i += 1) if (levels[i] - levels[i - 1] > 1) skip = true
check('heading order has no skipped level', !skip, levels.join(''))

/* ---- JSON-LD ---- */
const ld = [...html.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map((m) => JSON.parse(m[1]))
check('one JSON-LD block', ld.length === 1, String(ld.length))
const graph = ld[0]?.['@graph'] ?? []
checkServiceSchema({ html, check, origin: ORIGIN, serviceName: NAME })
const types = graph.map((n) => n['@type'])
check('Organization first', types[0] === 'Organization', JSON.stringify(types))
const serviceNodes = graph.filter((n) => n['@type'] === 'Service')
check('one Service node named "Sewer Line Locating"', serviceNodes.length === 1 && serviceNodes[0].name === NAME, JSON.stringify(serviceNodes.map((n) => n.name)))
const svcDesc = serviceNodes[0]?.description ?? ''
check('Service description present and free of repair, price, response time, marks, coding and models', svcDesc.length > 0 && !/repair|price|response|marks|pacp|lacp|ridgid|seektech/i.test(svcDesc), svcDesc)
const allowed = new Set(['Organization', 'WebSite', 'WebPage', 'Service', 'BreadcrumbList', 'FAQPage'])
check('only the expected node types', types.every((t) => allowed.has(t)), JSON.stringify(types))
console.log(`NOTE  schema nodes (${types.length}): ${JSON.stringify(types)}`)
const ldText = JSON.stringify(ld)
for (const forbidden of ['LocalBusiness', 'AggregateRating', '"Review"', 'PostalAddress', 'HowTo']) {
  check(`no ${forbidden.replace(/"/g, '')} in JSON-LD`, !ldText.includes(forbidden))
}

const crumbs = graph.find((n) => n['@type'] === 'BreadcrumbList')
const crumbNames = (crumbs?.itemListElement ?? []).map((i) => i.name)
const visibleCrumbs = [...(body.match(/<nav[^>]*aria-label="Breadcrumb"[\s\S]*?<\/nav>/) || [''])[0].matchAll(/<(?:a|span)[^>]*>([^<]+)<\/(?:a|span)>/g)].map((m) => norm(m[1]))
check(
  'BreadcrumbList equals the visible breadcrumb',
  crumbNames.length > 0 && crumbNames.every((n) => visibleCrumbs.includes(norm(n))) && visibleCrumbs.includes(NAME),
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
check(
  'four FAQ groups with the expected labels',
  JSON.stringify(groupLabels) ===
    JSON.stringify(['The basics', 'Limits and digging', 'Access, marks, and records', 'Planning and property']),
  JSON.stringify(groupLabels),
)
check('group labels are not part of any answer', faqLd.every((f) => !groupLabels.some((g) => f.a.includes(g))))

/* ---- Structure ---- */
const sectionById = (id) =>
  (main.match(new RegExp(`<section[^>]*aria-labelledby="${id}"[\\s\\S]*?</section>`)) || [''])[0]
const ID = {
  definition: slug('What is sewer line locating?'),
  signals: slug('When sewer line locating may be worth asking about'),
  limits: slug('What a locate may give you, and what it is not'),
  process: slug('What happens during a sewer line locating visit'),
  decision: slug('Locating or camera inspection: which do you need?'),
  comparison: slug('Sewer line locating vs. related services'),
  ask: slug('What to ask for, and what to keep'),
  audiences: slug('If your situation is a little different'),
}
const signalsOl = (sectionById(ID.signals).match(/<ol[\s\S]*?<\/ol>/) || [''])[0]
check('exactly five signals', (signalsOl.match(/<li[\s>]/g) || []).length === 5)
const processOl = (sectionById(ID.process).match(/<ol[\s\S]*?<\/ol>/) || [''])[0]
check('exactly five process steps', (processOl.match(/<li[\s>]/g) || []).length === 5)
const prepUl = (sectionById(ID.process).match(/<ul[\s\S]*?<\/ul>/) || [''])[0]
check('five preparation items (the placeholder bullet is omitted)', (prepUl.match(/<li[\s>]/g) || []).length === 5)

const trust = ['Independent inspection and diagnostics', 'Sewer and drain specialists, not general plumbing', 'No repair-driven upselling', 'Serving St. Louis']
check('trust strip present with the existing statements', trust.every((t) => visible.includes(t)))

check('hero request card has a market select', /id="hero-lead-market"/.test(html))
check(
  'hero request card preselects the service',
  /id="hero-lead-service"[\s\S]*?<option value="svc-sewer-line-locating" selected/.test(html),
)
check('request form preselects the service', /id="request-lead-service"[\s\S]*?<option value="svc-sewer-line-locating" selected/.test(html))

const ids = [...body.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1])
const dupes = ids.filter((v, i) => ids.indexOf(v) !== i)
check('no duplicate ids', dupes.length === 0, [...new Set(dupes)].join(', '))

const navBlock = (main.match(/<nav[^>]*aria-labelledby="on-this-page"[\s\S]*?<\/nav>/) || [''])[0]
const navHrefs = [...navBlock.matchAll(/href="#([^"]+)"/g)].map((m) => m[1])
const navLabels = [...navBlock.matchAll(/<a [^>]*>([\s\S]*?)<\/a>/g)].map((m) => strip(m[1]))
check(
  '"On this page" list has the six entries',
  JSON.stringify(navLabels) ===
    JSON.stringify([
      'When it may be worth asking about',
      'What a locate is, and is not',
      'What happens during a visit',
      'Locating or camera inspection',
      'What to ask for',
      'Questions',
    ]),
  JSON.stringify(navLabels),
)
check('every "On this page" anchor resolves', navHrefs.every((h) => ids.includes(h)), navHrefs.filter((h) => !ids.includes(h)).join(', '))
check('"On this page" nav renders exactly once in the DOM', (main.match(/aria-labelledby="on-this-page"/g) || []).length === 1)
check('nav is not hidden from assistive technology', !/aria-hidden="true"[^>]*aria-labelledby="on-this-page"|aria-labelledby="on-this-page"[^>]*aria-hidden="true"/.test(navBlock) && !/<nav[^>]*\shidden/.test(navBlock))
const headingIds = [...main.matchAll(/<h2[^>]*\sid="([^"]+)"/g)].map((m) => m[1])
check('every nav entry points at a rendered section heading', navHrefs.every((h) => headingIds.includes(h)), navHrefs.filter((h) => !headingIds.includes(h)).join(', '))
const topicBlock = (main.match(/<nav[^>]*aria-labelledby="faq-topics"[\s\S]*?<\/nav>/) || [''])[0]
const topicHrefs = [...topicBlock.matchAll(/href="#([^"]+)"/g)].map((m) => m[1])
check('FAQ topic list has four anchors that resolve', topicHrefs.length === 4 && topicHrefs.every((h) => ids.includes(h)), String(topicHrefs.length))
const inPage = [...main.matchAll(/href="#([^"]+)"/g)].map((m) => m[1])
check('every in-page anchor resolves (including #request, #choose-market)', inPage.every((h) => ids.includes(h)), inPage.filter((h) => !ids.includes(h)).join(', '))

/* ---- Sections ---- */
const definitionSection = sectionById(ID.definition)
const SCOPE_FULL =
  'This service is designed for accessible residential sewer and drain lines. Equipment selection and available service depend on the entry point, pipe size, line condition, and scope of work. We provide cleaning, camera diagnostics, and line locating only. We do not provide sewer repair, replacement, lining, excavation, or pipe installation.'
const SHORT =
  'We provide cleaning, camera diagnostics, and line locating only. We do not provide sewer repair, replacement, lining, excavation, or pipe installation.'
check('scope statement present in the definition box', flat(strip(definitionSection)).includes(flat(SCOPE_FULL)))

const limitsSection = sectionById(ID.limits)
check(
  'limits panel has a "may give you" list of five, an "It is not" list of six and a callout',
  (limitsSection.match(/<ul[\s\S]*?<\/ul>/g) || []).map((u) => (u.match(/<li[\s>]/g) || []).length).join(',') === '5,6' &&
    /one-call program \(often reached at 811\)/.test(decode(limitsSection)),
)
const decisionSection = sectionById(ID.decision)
check('decision panel has four "where to start" items', ((decisionSection.match(/<ul[\s\S]*?<\/ul>/) || [''])[0].match(/<li[\s>]/g) || []).length >= 4)

const comparisonSection = sectionById(ID.comparison)
const compBody = (comparisonSection.match(/<tbody>[\s\S]*?<\/tbody>/) || [''])[0]
check(
  'comparison table has five body rows and a labelled scroll region',
  compBody.split('<tr').length - 1 === 5 &&
    /role="region"[^>]*aria-label="Sewer line locating compared with related services \(scrollable table\)"[^>]*tabindex="0"/.test(comparisonSection),
)
check('comparison table has exactly one current row', (compBody.match(/\(this page\)/g) || []).length === 1)
check('comparison table has exactly one external row, marked "Not our service", without a link', (compBody.match(/\(Not our service\)/g) || []).length === 1 && !/<a [^>]*>[^<]*One-call/.test(compBody))
check(
  'comparison headers are Service / What it does / May fit when',
  ['Service', 'What it does', 'May fit when'].every((h) => new RegExp(`<th[^>]*scope="col"[^>]*>\\s*${h}\\s*</th>`).test(comparisonSection)),
)
const askSection = sectionById(ID.ask)
check('five ask items', ((askSection.match(/<ol[\s\S]*?<\/ol>/) || [''])[0].match(/<li[\s>]/g) || []).length === 5)
check('"Keep the video, findings, and notes" panel present', /Keep the video, findings, and notes/.test(askSection))
const audSection = sectionById(ID.audiences)
check(
  'four audience rows linking the repo audience pages',
  (audSection.match(/<li[\s>]/g) || []).length === 4 &&
    ['/for/home-buyers/', '/for/real-estate-agents/', '/for/home-inspectors/', '/for/property-managers/'].every((h) => audSection.includes(`href="${h}"`)),
)
const marketsSection = sectionById('choose-market')
check('three market cards', ['/st-louis-mo/', '/san-diego-ca/', '/las-vegas-nv/'].every((h) => marketsSection.includes(`href="${h}"`)))
// Page-specific independent band: three numbered steps.
const independentSection = sectionById('independent')
check(
  'independent band present with Locate / Document / Decide',
  /Major sewer decisions deserve clear evidence\./.test(independentSection) &&
    ['Locate', 'Document', 'Decide'].every((s) => new RegExp(`<h3[^>]*>${s}</h3>`).test(independentSection)),
)
check('no evidence mosaic section on this page', !/aria-labelledby="see-what/.test(main) && !/Examples of sewer/.test(visible))
const relatedSection = sectionById('related')
const relatedHrefs = [...relatedSection.matchAll(/<a [^>]*href="(\/[^"]+)"/g)].map((m) => m[1])
check(
  'related section links the three built services',
  JSON.stringify([...new Set(relatedHrefs)].sort()) ===
    JSON.stringify(['/services/sewer-camera-inspection/', '/services/sewer-cleaning-camera-inspection/', '/services/pre-purchase-sewer-inspection/'].sort()),
  JSON.stringify(relatedHrefs),
)

/* ---- Rhythm: brand surfaces are the independent band and the final request, with >= 4 sections between ---- */
const order = ['independent', ID.comparison, ID.ask, ID.audiences, 'choose-market', 'faq', 'related', 'request']
const positions = order.map((o) => main.search(new RegExp(`(?:aria-labelledby|id)="${o}"`)))
check(
  'independent band and final request are separated by six sections, in order',
  positions.every((p, i) => p >= 0 && (i === 0 || p > positions[i - 1])),
  JSON.stringify(positions),
)

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

/* ---- Characters and forbidden text ---- */
check('no em dash (U+2014)', !html.includes('—'))
check('no literal [CONFIRM placeholder', !/\[CONFIRM/i.test(html))
check('no "Prefer to call" line', !/prefer to call/i.test(visible))
check('no appointment-preparation placeholder line', !/appointment preparation/i.test(visible))

// Exact benign phrases, allowed by phrase only: the two depth FAQs.
const benign = ["not a guarantee of the pipe's position", 'is not guaranteed']
let scanText = flat(`${visible} ${ldText}`).toLowerCase()
for (const phrase of benign) scanText = scanText.split(phrase).join(' ')
const forbidden = [
  'no-dig',
  'without digging',
  'non-invasive',
  'state-of-the-art',
  'trusted local',
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
  'exact location',
  'pinpoint',
  'ridgid',
  'seektech',
  '512',
  'we repair',
  'we replace',
  'we install',
  'repair service',
  'replacement service',
]
const hits = forbidden.filter((w) => scanText.includes(w))
check('no forbidden claim words', hits.length === 0, hits.join(', '))
// "survey" only ever appears negated ("not a survey").
const surveyUses = [...flat(visible).toLowerCase().matchAll(/survey/g)].length
const negatedSurvey = [...flat(visible).toLowerCase().matchAll(/(?:not a|or a|is a|a) survey|survey, (?:or|and)|, a survey|survey\b(?=,? and does it mean)|survey, and/g)].length
check('"survey" appears only in negated or limiting statements', surveyUses > 0 && !/(?:offer|provide|perform|do|includes?) (?:a )?(?:property )?survey/i.test(visible.replace(/do not provide[^.]*\./gi, '')) && negatedSurvey > 0, `${surveyUses} uses`)
check('no dollar price', !/\$\s?\d/.test(visible))
check('no duration in minutes', !/\b\d+\s*(?:-|to)?\s*\d*\s*minutes?\b/i.test(visible))
check('no interval in years', !/\b\d+\s*(?:-|to)?\s*\d*\s*years?\b/i.test(visible))
check(
  'deliverables: video and written findings stated as included when a camera is used (ask item and FAQ)',
  (visible.match(/When a camera is used, you receive the inspection video\. Written findings are included\./g) || []).length === 2,
  String((visible.match(/When a camera is used, you receive the inspection video\. Written findings are included\./g) || []).length),
)
check(
  'no deliverable beyond video and written findings (photos, narration, coding performed, certified, report)',
  !/photo/i.test(visible.replace(/photograph/gi, '')) &&
    !/narrat/i.test(visible) &&
    !/certified/i.test(visible) &&
    !/(you receive|we provide|we deliver|includes?) (a |the )?(written |inspection )?report/i.test(visible),
)
check('depth is always an estimate (no unqualified depth promise)', !/(?:we|you) (?:will )?(?:receive|get) (?:a )?depth/i.test(visible) && !/depth (?:is|will be) (?:provided|included)/i.test(visible))
// 811 mentions: wording must stay the qualified "ask" form.
check(
  'never states that 811 does or does not cover private sewer lines',
  !/811[^.]*\b(?:does|do) not cover/i.test(visible) && !/811[^.]*\b(?:does|do) cover/i.test(visible) && !/811 (?:covers|will mark)/i.test(visible),
)
console.log(`NOTE  mentions of 811 / one-call in visible text: ${(visible.match(/811|one-call/gi) || []).length}`)

const requestSection = (main.match(/<section[^>]*aria-labelledby="request"[\s\S]*?<\/section>/) || [''])[0]
check('full scope statement present in the request section', flat(strip(requestSection)).includes(flat(SCOPE_FULL)))
check('short scope form present in the hero', flat(strip((main.match(/<section[\s\S]*?<\/section>/) || [''])[0])).includes(flat(SHORT)))

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
