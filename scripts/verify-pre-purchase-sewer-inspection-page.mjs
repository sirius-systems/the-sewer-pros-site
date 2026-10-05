/**
 * Post-build checks for /services/pre-purchase-sewer-inspection/
 * (Service Page Template v2).
 *
 * Reads the static export in `out/` (run `npm run build` first). No
 * dependencies. Exits 1 on any failure.
 *
 *   node scripts/verify-pre-purchase-sewer-inspection-page.mjs
 *
 * The page is market-neutral: no phone number or `tel:` link before the
 * company footer (DEC-071), no repair offered as a service, no price,
 * duration, equipment spec or emergency wording. Owner-confirmed
 * 2026-10-05: when a camera is used, the video and written findings are
 * included; nothing else about deliverables is claimed. FAQPage JSON-LD
 * must equal the visible FAQ (DEC-114).
 */
import fs from 'node:fs'
import path from 'node:path'
import { checkEquipmentNames, checkServiceSchema, checkRelatedCards } from './lib/service-page-checks.mjs'

const ROOT = path.resolve('out')
const PAGE = path.join(ROOT, 'services', 'pre-purchase-sewer-inspection', 'index.html')
// Follows the origin the build used (NEXT_PUBLIC_SITE_URL); falls back to production.
const PRODUCTION_ORIGIN = 'https://www.thesewerpros.com'
const ORIGIN = (process.env.NEXT_PUBLIC_SITE_URL || PRODUCTION_ORIGIN).replace(/\/+$/, '')
const NAME = 'Pre-Purchase Sewer Inspection'
const H1 = 'Pre-Purchase Sewer Inspection'
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
check('title', decode(title || '') === 'Pre-Purchase Sewer Inspection (Sewer Scope) | The Sewer Pros', title)
check('title length (<= 60)', (title || '').length > 0 && (title || '').length <= 60, String((title || '').length))
const canonical = (html.match(/<link rel="canonical" href="([^"]+)"/) || [])[1]
check('canonical', canonical === `${ORIGIN}/services/pre-purchase-sewer-inspection/`, canonical)
const robots = (html.match(/<meta name="robots" content="([^"]+)"/) || [])[1]
check('indexable (no noindex)', robots === undefined || !/noindex/i.test(robots), robots)
const desc = decode((html.match(/<meta name="description" content="([^"]*)"/) || [])[1] || '')
check('meta description length (<= 160)', desc.length > 0 && desc.length <= 160, String(desc.length))
check(
  'meta description is the content-doc sentence',
  desc ===
    'A pre-purchase sewer inspection documents the visible condition of an accessible sewer line before closing. Learn the limits. St. Louis, San Diego, Las Vegas.',
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
checkEquipmentNames({ html, check })
const svcNodes = graph.filter((n) => n['@type'] === 'Service')
check('exactly one Service node', svcNodes.length === 1, String(svcNodes.length))
const svcDesc = svcNodes[0]?.description ?? ''
check(
  'Service description is the hero-intro sentences and free of repair-as-offered, price, response time and models',
  svcDesc.startsWith('A pre-purchase sewer inspection is a sewer camera inspection arranged during a home purchase.') &&
    !/price|response|turnaround|ridgid|we repair|we replace|pacp/i.test(svcDesc),
  svcDesc,
)
check('Service node carries no address, telephone or geo', !/"(address|telephone|geo)"/.test(JSON.stringify(svcNodes[0] ?? {})))
check('Organization is the first node', graph[0]?.['@type'] === 'Organization', String(graph[0]?.['@type']))
const types = graph.map((n) => n['@type']).flat()
const allowedTypes = ['Organization', 'WebSite', 'WebPage', 'Service', 'BreadcrumbList', 'FAQPage']
check('only the expected schema types', types.every((t) => allowedTypes.includes(t)), JSON.stringify(types))
const ldText = JSON.stringify(ld)
for (const forbidden of ['LocalBusiness', 'AggregateRating', '"Review"', 'PostalAddress', 'HowTo']) {
  check(`no ${forbidden.replace(/"/g, '')} in JSON-LD`, !ldText.includes(forbidden))
}
const areaServed = JSON.stringify(svcNodes[0]?.areaServed ?? [])
check(
  'areaServed names the three markets only',
  /St\. Louis/.test(areaServed) && /San Diego/.test(areaServed) && /Las Vegas/.test(areaServed),
  areaServed,
)
console.log(`INFO  schema nodes: ${graph.map((n) => n['@type']).join(', ')}`)

const crumbs = graph.find((n) => n['@type'] === 'BreadcrumbList')
const crumbNames = (crumbs?.itemListElement ?? []).map((i) => i.name)
const visibleCrumbs = [...(body.match(/<nav[^>]*aria-label="Breadcrumb"[\s\S]*?<\/nav>/) || [''])[0].matchAll(/<(?:a|span)[^>]*>([^<]+)<\/(?:a|span)>/g)].map((m) => norm(m[1]))
check(
  'BreadcrumbList equals the visible breadcrumb (Home, Services, Pre-Purchase Sewer Inspection)',
  JSON.stringify(crumbNames) === JSON.stringify(['Home', 'Services', NAME]) &&
    crumbNames.every((n) => visibleCrumbs.includes(norm(n))),
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
check('FAQPage has 29 questions', faqLd.length === 29, String(faqLd.length))
check('29 visible questions', faqVisible.length === 29, String(faqVisible.length))
check(
  'FAQPage text equals the visible FAQ',
  faqLd.length === faqVisible.length &&
    faqLd.every((f, i) => f.q === faqVisible[i].q && f.a === faqVisible[i].a),
)
const groupLabels = [...faqSection.matchAll(/<h3[^>]*id="faq-[^"]*"[^>]*>([\s\S]*?)<\/h3>/g)].map((m) => strip(m[1]))
check(
  'five FAQ groups with the expected labels',
  JSON.stringify(groupLabels) ===
    JSON.stringify([
      'The basics',
      'What it can and cannot see',
      'Cleaning and locating',
      'Buying and timing',
      'Records and next steps',
    ]),
  JSON.stringify(groupLabels),
)
check('group labels are not part of any answer', faqLd.every((f) => !groupLabels.some((g) => f.a.includes(g))))
const perGroup = [...faqSection.matchAll(/<h3[^>]*id="faq-[^"]*"[^>]*>[\s\S]*?(?=<h3[^>]*id="faq-|$)/g)].map((m) => (m[0].match(/<details/g) || []).length)
check('FAQ group sizes are 5, 10, 3, 7, 4', perGroup.join(',') === '5,10,3,7,4', perGroup.join(','))
check(
  'the two linked FAQ answers keep their links and the JSON-LD text stays plain',
  /href="\/services\/sewer-cleaning\/"/.test(faqSection) &&
    /href="\/services\/hydro-jetting\/"/.test(faqSection) &&
    /href="\/services\/sewer-cleaning-camera-inspection\/"/.test(faqSection) &&
    /href="\/services\/sewer-line-locating\/"/.test(faqSection) &&
    !/<a\s|href=|\]\(/.test(faqLd.map((f) => f.a).join(' ')),
)

/* ---- Structure ---- */
const sectionById = (id) =>
  (main.match(new RegExp(`<section[^>]*aria-labelledby="${id}"[\\s\\S]*?</section>`)) || [''])[0]
const ID = {
  definition: slug('What is a pre-purchase sewer inspection?'),
  signals: slug('When buyers add a sewer inspection'),
  limits: slug('What a pre-purchase sewer inspection may show, and what it cannot confirm'),
  process: slug('How a pre-purchase sewer inspection works'),
  decision: slug('Inspection and cleaning are separate services'),
  comparison: slug('Pre-purchase sewer inspection vs. related services'),
  ask: slug('What to ask for, and what to keep'),
  evidence: slug('See what a sewer camera inspection can reveal'),
  audiences: slug('Who uses a pre-purchase sewer inspection'),
}
const signalsOl = (sectionById(ID.signals).match(/<ol[\s\S]*?<\/ol>/) || [''])[0]
check('exactly six signals', (signalsOl.match(/<li[\s>]/g) || []).length === 6)
check('signals note follows the list', /no national rule requires one\./.test(decode(sectionById(ID.signals))))
const processSection = sectionById(ID.process)
const processOl = (processSection.match(/<ol[\s\S]*?<\/ol>/) || [''])[0]
check('exactly five process steps', (processOl.match(/<li[\s>]/g) || []).length === 5)
const prepUl = (processSection.match(/<ul[\s\S]*?<\/ul>/) || [''])[0]
check('three preparation items beside a photograph', (prepUl.match(/<li[\s>]/g) || []).length === 3 && /<img/.test(processSection))
check('preparation heading present', /Access points and preparing for the visit/.test(processSection))

const trust = ['Independent inspection and diagnostics', 'Sewer and drain specialists, not general plumbing', 'No repair-driven upselling', 'Serving St. Louis']
check('trust strip present with the existing statements', trust.every((t) => visible.includes(t)))

check('hero request card has a market select', /id="hero-lead-market"/.test(html))
check('hero request card shows the service chip', visible.includes('Service: Pre-purchase sewer inspection'))
check('hero request card preselects the service', /id="hero-lead-service"[\s\S]*?<option value="svc-pre-purchase-sewer-inspection" selected/.test(html))
check('request form preselects the service', /id="request-lead-service"[\s\S]*?<option value="svc-pre-purchase-sewer-inspection" selected/.test(html))
const MSG = 'What should we know? Include your inspection deadline if you have one.'
for (const prefix of ['hero-lead', 'request-lead']) {
  const label = (html.match(new RegExp(`<label[^>]*for="${prefix}-message"[^>]*>([\\s\\S]*?)</label>`)) || [])[1] || ''
  check(`${prefix} message label is "${MSG} (optional)"`, strip(label) === `${MSG} (optional)`, strip(label))
}
check('hero card heading and intro', visible.includes('Request an inspection') && visible.includes('Tell us about the property and your inspection deadline. We will help you choose the right service.'))
check('final request button label', /Schedule a Pre-Purchase Sewer Inspection/.test(strip(sectionById('request'))) || /Schedule a Pre-Purchase Sewer Inspection/.test(visible))
check('hero primary CTA targets #request and secondary targets #markets', /href="#request"[^>]*>\s*Schedule a Pre-Purchase Sewer Inspection/.test(html) && /href="#markets"[^>]*>\s*Find Service in Your Area/.test(html))

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
      'When buyers add one',
      'What it shows and cannot confirm',
      'How it works',
      'Cleaning and the camera',
      'What to ask for',
      'Questions',
    ]),
  JSON.stringify(navLabels),
)
check('every "On this page" anchor resolves', navHrefs.every((h) => ids.includes(h)), navHrefs.filter((h) => !ids.includes(h)).join(', '))
check('"On this page" nav renders exactly once in the DOM', (main.match(/aria-labelledby="on-this-page"/g) || []).length === 1)
const headingIds = [...main.matchAll(/<h2[^>]*\sid="([^"]+)"/g)].map((m) => m[1])
check('every nav entry points at a rendered section heading', navHrefs.every((h) => headingIds.includes(h)), navHrefs.filter((h) => !headingIds.includes(h)).join(', '))
const topicBlock = (main.match(/<nav[^>]*aria-labelledby="faq-topics"[\s\S]*?<\/nav>/) || [''])[0]
const topicHrefs = [...topicBlock.matchAll(/href="#([^"]+)"/g)].map((m) => m[1])
check('FAQ topic list has five anchors that resolve', topicHrefs.length === 5 && topicHrefs.every((h) => ids.includes(h)), String(topicHrefs.length))
const inPage = [...main.matchAll(/href="#([^"]+)"/g)].map((m) => m[1])
check('every in-page anchor resolves (including #request, #markets)', inPage.every((h) => ids.includes(h)), inPage.filter((h) => !ids.includes(h)).join(', '))

/* ---- Sections ---- */
const SCOPE_FULL =
  'This service is designed for accessible residential sewer and drain lines. Equipment selection and available service depend on the entry point, pipe size, line condition, and scope of work. We provide cleaning, camera diagnostics, and line locating only. We do not provide sewer repair, replacement, lining, excavation, or pipe installation.'
const SHORT =
  'We provide cleaning, camera diagnostics, and line locating only. We do not provide sewer repair, replacement, lining, excavation, or pipe installation.'
const requestSection = (main.match(/<section[^>]*aria-labelledby="request"[\s\S]*?<\/section>/) || [''])[0]
check('full scope statement present in the request section', flat(strip(requestSection)).includes(flat(SCOPE_FULL)))
check('full scope statement appears exactly once on the page', count(flat(visible), flat(SCOPE_FULL)) === 1, String(count(flat(visible), flat(SCOPE_FULL))))
check('short scope form present in the hero', flat(strip((main.match(/<section[\s\S]*?<\/section>/) || [''])[0])).includes(flat(SHORT)))
check('short scope form appears exactly twice (hero and inside the full statement)', count(flat(visible), flat(SHORT)) === 2, String(count(flat(visible), flat(SHORT))))
check(
  'approved timing sentence present',
  flat(visible).includes(
    'Note your inspection deadline when you request service, and we will work toward it. Confirm timing with your agent, since inspection periods are short.',
  ),
)
check(
  'approved cleaning sentence present in the decision panel and the FAQ',
  count(
    flat(visible),
    'A pre-purchase sewer inspection is a camera inspection. Cleaning is a separate service. If the camera cannot pass, ask what options apply.',
  ) === 2,
)

const limitsSection = sectionById(ID.limits)
check(
  'limits panel has an eight-item "may document" list, an eight-item "does not show" list and the callout',
  (limitsSection.match(/<ul[\s\S]*?<\/ul>/g) || []).map((u) => (u.match(/<li[\s>]/g) || []).length).join(',') === '8,8' &&
    /A visibly clear line is not proof that the whole line, or the ground around it, is in good condition\./.test(decode(limitsSection)),
)
const decisionSection = sectionById(ID.decision)
check('decision panel has three "may not get through" items', ((decisionSection.match(/<ul[\s\S]*?<\/ul>/) || [''])[0].match(/<li[\s>]/g) || []).length === 3)
check(
  'decision panel links sewer cleaning, hydro jetting and cleaning and camera inspection',
  ['/services/sewer-cleaning/', '/services/hydro-jetting/', '/services/sewer-cleaning-camera-inspection/'].every((h) => decisionSection.includes(`href="${h}"`)),
)
const independentSection = sectionById('independent')
check(
  'independent band present with Inspect / Document / Decide, the closing line and a request link',
  /Major sewer decisions deserve clear evidence\./.test(independentSection) &&
    ['Inspect', 'Document', 'Decide'].every((s) => new RegExp(`<h3[^>]*>${s}</h3>`).test(independentSection)) &&
    /An independent sewer inspection is not tied to a repair job/.test(independentSection) &&
    /href="#request"[^>]*>\s*Schedule an inspection/.test(independentSection),
)
check('"independent sewer inspection" is plain text (not a link)', !/<a [^>]*>[^<]*independent sewer inspection/i.test(main))

const comparisonSection = sectionById(ID.comparison)
const comparisonBody = (comparisonSection.match(/<tbody>[\s\S]*?<\/tbody>/) || [''])[0]
const comparisonRows = comparisonBody.split('<tr').length - 1
check('comparison table has five body rows', comparisonRows === 5, String(comparisonRows))
check(
  'comparison headers are Service / What it does / May fit when',
  ['Service', 'What it does', 'May fit when'].every((h) => new RegExp(`<th[^>]*scope="col"[^>]*>\\s*${h}\\s*</th>`).test(comparisonSection)),
)
check('comparison has one current row marked "(this page)"', (comparisonSection.match(/\(this page\)/g) || []).length === 1)
check('comparison table sits in a labelled scroll region', /role="region"[^>]*aria-label="[^"]*\(scrollable table\)"[^>]*tabindex="0"/.test(comparisonSection))
check(
  'every other comparison row links its sibling service page',
  ['/services/sewer-camera-inspection/', '/services/sewer-cleaning-camera-inspection/', '/services/sewer-cleaning/', '/services/sewer-line-locating/'].every((h) => comparisonSection.includes(`href="${h}"`)),
)
check('no external comparison row', !/Not our service/.test(comparisonSection))

const askSection = sectionById(ID.ask)
check('five ask items', ((askSection.match(/<ol[\s\S]*?<\/ol>/) || [''])[0].match(/<li[\s>]/g) || []).length === 5)
check('"Keep the original video and written findings" panel present', /Keep the original video and written findings/.test(askSection))

const evidenceSection = sectionById(ID.evidence)
check(
  'evidence section renders four examples with the caveat',
  ['Visible root intrusion', 'A visible pipe offset', 'Standing water', 'Footage and findings summary'].every((t) => evidenceSection.includes(t)) &&
    /with identifying details removed/.test(decode(evidenceSection)) &&
    (evidenceSection.match(/<img/g) || []).length === 4,
)

const audSection = sectionById(ID.audiences)
check(
  'four audience rows linking the repo audience pages',
  (audSection.match(/<li[\s>]/g) || []).length === 4 &&
    ['/for/real-estate-agents/', '/for/home-inspectors/', '/for/home-buyers/', '/for/home-sellers/'].every((h) => audSection.includes(`href="${h}"`)),
)
const marketsSection = sectionById('markets')
check('three market cards', ['/st-louis-mo/', '/san-diego-ca/', '/las-vegas-nv/'].every((h) => marketsSection.includes(`href="${h}"`)))
check('markets lede says service areas, not office locations', /These are service areas, not office locations\./.test(strip(marketsSection)))
checkRelatedCards({
  main,
  check,
  expectedHrefs: ['/services/sewer-camera-inspection/', '/services/sewer-cleaning-camera-inspection/', '/services/sewer-line-locating/', '/services/sewer-cleaning/'],
})

/* ---- Rhythm: two brand surfaces, the independent band and the final request ---- */
const brandSections = (main.match(/<section[^>]*class="[^"]*\bbg-brand\b/g) || []).length
check('exactly one brand-surface section in the body (the independent band)', brandSections === 1, String(brandSections))
const order = [ID.signals, ID.limits, ID.process, ID.decision, 'independent', ID.comparison, ID.ask, ID.evidence, ID.audiences, 'markets', 'faq', 'related', 'request']
const positions = order.map((o) => main.search(new RegExp(`(?:aria-labelledby|id)="${o}"`)))
check('sections appear in the design order', positions.every((p, i) => p >= 0 && (i === 0 || p > positions[i - 1])), JSON.stringify(positions))
const surfaceOf = (id) => ((main.match(new RegExp(`<section[^>]*aria-labelledby="${id}"[^>]*>`)) || [''])[0].match(/bg-(background|surface-muted|brand)/) || [])[1]
const seq = [ID.definition, ID.signals, ID.limits, ID.process, ID.decision, 'independent', ID.comparison, ID.ask, ID.evidence, ID.audiences, 'markets', 'faq', 'related'].map(surfaceOf)
console.log(`INFO  surfaces: ${seq.join(',')}`)
check('surfaces alternate from the definition to the related cards', seq.every((s, i) => i === 0 || s !== seq[i - 1]), seq.join(','))
const indAt = order.indexOf('independent')
check('at least four non-brand sections between the independent band and the final request', order.length - 1 - indAt - 1 >= 4)

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
check(
  'no link to the unbuilt second-opinion page or any /compare/ page',
  !internal.some((h) => h.includes('independent-sewer-inspection-second-opinion') || h.startsWith('/compare/')),
  internal.filter((h) => h.includes('second-opinion') || h.startsWith('/compare/')).join(', '),
)

/* ---- Characters and forbidden text ---- */
check('no em dash (U+2014) or en dash (U+2013)', !html.includes('—') && !html.includes('–'))
check('no literal [CONFIRM placeholder', !/\[CONFIRM/i.test(html))
check('no markdown link syntax in visible text', !/\]\(\//.test(visible))

// The Organization node is the site-wide catalogue (it lists the commercial
// services); only this page's own nodes are scanned. Two negated phrases are
// allowed by exact text: "do not guarantee future performance" (agents row)
// and "does not prove" / "not proof" (callout and FAQ).
const pageLdText = JSON.stringify(graph.filter((n) => n['@type'] !== 'Organization'))
let scanText = flat(`${visible} ${pageLdText}`).toLowerCase()
for (const phrase of ['do not guarantee future performance', 'does not guarantee future performance', 'does not prove', 'not proof']) {
  scanText = scanText.split(phrase).join(' ')
}
const forbidden = [
  'no-dig',
  'without digging',
  'non-invasive',
  'non-damaging',
  'state-of-the-art',
  'trusted local',
  'fast, reliable',
  'guarantee',
  'guaranteed',
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
  'pass/fail',
  'finds every',
  'proves',
  'safe for every pipe',
  'exact location',
  'pinpoint',
  'psi',
  'gpm',
  'we repair',
  'we replace',
  'we install',
  'repair service',
  'replacement service',
]
const hits = forbidden.filter((w) => new RegExp(`(?<![a-z0-9])${w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}(?![a-z0-9])`).test(scanText))
check('no forbidden claim words', hits.length === 0, hits.join(', '))
check('no dollar price', !/\$\s?\d/.test(visible))
check('no duration in minutes or hours', !/\b\d+\s*(?:-|to)?\s*\d*\s*(?:minutes?|hours?)\b/i.test(visible))
check('no interval in years', !/\b\d+\s*(?:-|to)?\s*\d*\s*years?\b/i.test(visible))
check('no roof-vent or toilet-pull access claim beyond the one question that asks about it', (visible.match(/roof vent|roof-vent/gi) || []).length === 0 && (visible.match(/pull a toilet/gi) || []).length === 1)
check(
  'no deliverable beyond video and written findings (photos, narration, footage counter, certified, surface marks, a "report")',
  !/photo/i.test(visible.replace(/photograph/gi, '')) &&
    !/narrat/i.test(visible) &&
    !/footage counter|distance counter/i.test(visible) &&
    !/certified/i.test(visible) &&
    !/surface mark/i.test(visible) &&
    !/\b(written |findings )?report\b/i.test(visible),
)
check(
  'deliverables worded as the content doc words them',
  (visible.match(/When a camera is used, you receive the inspection video\./g) || []).length >= 2 &&
    (visible.match(/Written findings are included\./g) || []).length >= 3 &&
    visible.includes('Inspection video and written findings included'),
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
check('hero is a still (no video element in the page)', !/<video/i.test(html))

console.log(failures === 0 ? '\nAll checks passed.' : `\n${failures} check(s) FAILED.`)
process.exit(failures === 0 ? 0 : 1)
