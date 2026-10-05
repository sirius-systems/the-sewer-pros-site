/**
 * Post-build checks for /services/drain-cleaning/
 * (Service Page Template v2).
 *
 * Reads the static export in `out/` (run `npm run build` first). No
 * dependencies. Exits 1 on any failure.
 *
 *   node scripts/verify-drain-cleaning-page.mjs
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
import { checkServiceSchema, checkRelatedCards } from './lib/service-page-checks.mjs'

const ROOT = path.resolve('out')
const PAGE = path.join(ROOT, 'services', 'drain-cleaning', 'index.html')
// Follows the origin the build used (NEXT_PUBLIC_SITE_URL); falls back to production.
const PRODUCTION_ORIGIN = 'https://www.thesewerpros.com'
const ORIGIN = (process.env.NEXT_PUBLIC_SITE_URL || PRODUCTION_ORIGIN).replace(/\/+$/, '')
const NAME = 'Drain Cleaning'
const H1 = 'Drain Cleaning for Slow, Clogged, and Recurring Drains'
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
check('title', decode(title || '') === 'Drain Cleaning for Slow and Clogged Drains | The Sewer Pros', title)
check('title length (<= 60)', (title || '').length > 0 && (title || '').length <= 60, String((title || '').length))
const canonical = (html.match(/<link rel="canonical" href="([^"]+)"/) || [])[1]
check('canonical', canonical === `${ORIGIN}/services/drain-cleaning/`, canonical)
const robots = (html.match(/<meta name="robots" content="([^"]+)"/) || [])[1]
check('indexable (no noindex)', robots === undefined || !/noindex/i.test(robots), robots)
const desc = decode((html.match(/<meta name="description" content="([^"]*)"/) || [])[1] || '')
check('meta description length (<= 160)', desc.length > 0 && desc.length <= 160, String(desc.length))
check(
  'meta description is the content-doc sentence',
  desc ===
    'What drain cleaning is, how cable and jetting methods differ, what a camera can show, and what cleaning does not fix. St. Louis, San Diego and Las Vegas.',
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
const svcDesc = graph.find((n) => n['@type'] === 'Service')?.description ?? ''
check(
  'Service description present and free of repair-as-offered, price, response time and models',
  svcDesc.length > 0 && !/price|response|ridgid|we repair|we replace/i.test(svcDesc),
  svcDesc,
)
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
check('FAQPage has 37 questions', faqLd.length === 37, String(faqLd.length))
check('37 visible questions', faqVisible.length === 37, String(faqVisible.length))
check(
  'FAQPage text equals the visible FAQ',
  faqLd.length === faqVisible.length &&
    faqLd.every((f, i) => f.q === faqVisible[i].q && f.a === faqVisible[i].a),
)
const groupLabels = [...faqSection.matchAll(/<h3[^>]*id="faq-[^"]*"[^>]*>([\s\S]*?)<\/h3>/g)].map((m) => strip(m[1]))
check(
  'seven FAQ groups with the expected labels',
  JSON.stringify(groupLabels) ===
    JSON.stringify([
      'Understanding drain cleaning',
      'Symptoms and causes',
      'Limits and cameras',
      'Documentation and locating',
      'Maintenance and prevention',
      'Requesting service',
      'Real estate',
    ]),
  JSON.stringify(groupLabels),
)
check('group labels are not part of any answer', faqLd.every((f) => !groupLabels.some((g) => f.a.includes(g))))

/* ---- Structure ---- */
const sectionById = (id) =>
  (main.match(new RegExp(`<section[^>]*aria-labelledby="${id}"[\\s\\S]*?</section>`)) || [''])[0]
const ID = {
  definition: slug('What is drain cleaning?'),
  signals: slug('When drain cleaning may be useful'),
  triage: slug('One drain or several: what the pattern may mean'),
  terms: slug('Drain cleaning terms'),
  limits: slug('What drain cleaning can and cannot fix'),
  process: slug('How drain cleaning works'),
  decision: slug('Cleaning and the camera are separate services'),
  methods: slug('Cable cleaning, water jetting, and the camera'),
  camera: slug('What a camera can and cannot show'),
  ask: slug('What to ask for, and what to keep'),
  audiences: slug('Who drain cleaning helps'),
  habits: slug('Habits that cause clogs'),
}
const signalsOl = (sectionById(ID.signals).match(/<ol[\s\S]*?<\/ol>/) || [''])[0]
check('exactly six signals', (signalsOl.match(/<li[\s>]/g) || []).length === 6)
const processSection = sectionById(ID.process)
const processOl = (processSection.match(/<ol[\s\S]*?<\/ol>/) || [''])[0]
check('exactly five process steps', (processOl.match(/<li[\s>]/g) || []).length === 5)
const prepUl = (processSection.match(/<ul[\s\S]*?<\/ul>/) || [''])[0]
check('three preparation items', (prepUl.match(/<li[\s>]/g) || []).length === 3)
check('access points block present without a photograph', /Access points/.test(processSection) && !/<img/.test(processSection.slice(processSection.indexOf('Preparing for your visit') - 600)))

const trust = ['Independent inspection and diagnostics', 'Sewer and drain specialists, not general plumbing', 'No repair-driven upselling', 'Serving St. Louis']
check('trust strip present with the existing statements', trust.every((t) => visible.includes(t)))

check('hero request card has a market select', /id="hero-lead-market"/.test(html))
check(
  'hero request card preselects the service',
  /id="hero-lead-service"[\s\S]*?<option value="svc-drain-cleaning" selected/.test(html),
)
check('request form preselects the service', /id="request-lead-service"[\s\S]*?<option value="svc-drain-cleaning" selected/.test(html))

const ids = [...body.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1])
const dupes = ids.filter((v, i) => ids.indexOf(v) !== i)
check('no duplicate ids', dupes.length === 0, [...new Set(dupes)].join(', '))

const navBlock = (main.match(/<nav[^>]*aria-labelledby="on-this-page"[\s\S]*?<\/nav>/) || [''])[0]
const navHrefs = [...navBlock.matchAll(/href="#([^"]+)"/g)].map((m) => m[1])
const navLabels = [...navBlock.matchAll(/<a [^>]*>([\s\S]*?)<\/a>/g)].map((m) => strip(m[1]))
check(
  '"On this page" list has the nine entries',
  JSON.stringify(navLabels) ===
    JSON.stringify([
      'When to look into it',
      'One drain or several',
      'What cleaning can and cannot fix',
      'How it works',
      'Methods',
      'The camera',
      'What to ask for',
      'Terms',
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
check('FAQ topic list has seven anchors that resolve', topicHrefs.length === 7 && topicHrefs.every((h) => ids.includes(h)), String(topicHrefs.length))
const inPage = [...main.matchAll(/href="#([^"]+)"/g)].map((m) => m[1])
check('every in-page anchor resolves (including #request, #choose-market)', inPage.every((h) => ids.includes(h)), inPage.filter((h) => !ids.includes(h)).join(', '))

/* ---- Sections ---- */
const SCOPE_FULL =
  'This service is designed for accessible residential sewer and drain lines. Equipment selection and available service depend on the entry point, pipe size, line condition, and scope of work. We provide cleaning, camera diagnostics, and line locating only. We do not provide sewer repair, replacement, lining, excavation, or pipe installation.'
const SHORT =
  'We provide cleaning, camera diagnostics, and line locating only. We do not provide sewer repair, replacement, lining, excavation, or pipe installation.'
check('scope statement present in the definition box', flat(strip(sectionById(ID.definition))).includes(flat(SCOPE_FULL)))
const requestSection = (main.match(/<section[^>]*aria-labelledby="request"[\s\S]*?<\/section>/) || [''])[0]
check('full scope statement present in the request section', flat(strip(requestSection)).includes(flat(SCOPE_FULL)))
check('full scope statement appears exactly twice on the page', count(flat(visible), flat(SCOPE_FULL)) === 2, String(count(flat(visible), flat(SCOPE_FULL))))
check('short scope form present in the hero', flat(strip((main.match(/<section[\s\S]*?<\/section>/) || [''])[0])).includes(flat(SHORT)))
check('"drain clearing" explained as everyday usage in the definition', /drain clearing\.?" That is everyday usage, not a code term/.test(flat(strip(sectionById(ID.definition)))))

const triageSection = sectionById(ID.triage)
const triageBody = (triageSection.match(/<tbody>[\s\S]*?<\/tbody>/) || [''])[0]
check(
  'triage table has five body rows, three headers and a labelled scroll region',
  triageBody.split('<tr').length - 1 === 5 &&
    ['What you notice', 'What it may point to', 'Often the next step'].every((h) => new RegExp(`<th[^>]*scope="col"[^>]*>\s*${h}\s*</th>`).test(triageSection)) &&
    /role="region"[^>]*aria-label="[^"]*\(scrollable table\)"[^>]*tabindex="0"/.test(triageSection),
)
check('triage rows carry no "(this page)" marker', !/\(this page\)|Not our service/.test(triageSection))
const termsSection = sectionById(ID.terms)
check('terms section has six rows', (termsSection.match(/<li[\s>]/g) || []).length === 6)
check('"What to tell us" list of five in the request section', /What to tell us/.test(requestSection) && ((requestSection.match(/<ul[\s\S]*?<\/ul>/) || [''])[0].match(/<li[\s>]/g) || []).length === 5)
check('"What to tell us" appears above the scope statement', requestSection.indexOf('What to tell us') < requestSection.indexOf('This service is designed'))

const limitsSection = sectionById(ID.limits)
check(
  'suitability panel has a four-item "fit" list, a five-item "does not fix" list and the callout',
  (limitsSection.match(/<ul[\s\S]*?<\/ul>/g) || []).map((u) => (u.match(/<li[\s>]/g) || []).length).join(',') === '4,5' &&
    /A line that flows again is not proof that the pipe is sound\./.test(decode(limitsSection)),
)
const decisionSection = sectionById(ID.decision)
check('decision panel has three "cleaning may come first" items', ((decisionSection.match(/<ul[\s\S]*?<\/ul>/) || [''])[0].match(/<li[\s>]/g) || []).length === 3)
check(
  'decision panel links sewer cleaning, hydro jetting and camera inspection',
  ['/services/sewer-cleaning/', '/services/hydro-jetting/', '/services/sewer-camera-inspection/'].every((h) => decisionSection.includes(`href="${h}"`)),
)

const methodsSection = sectionById(ID.methods)
const methodsBody = (methodsSection.match(/<tbody>[\s\S]*?<\/tbody>/) || [''])[0]
check(
  'methods table has three body rows and a labelled scroll region',
  methodsBody.split('<tr').length - 1 === 3 &&
    /role="region"[^>]*aria-label="Cable cleaning, water jetting, and camera inspection compared \(scrollable table\)"[^>]*tabindex="0"/.test(methodsSection),
)
check(
  'methods headers are Method / How it works / Often considered for / Limits',
  ['Method', 'How it works', 'Often considered for', 'Limits'].every((h) => new RegExp(`<th[^>]*scope="col"[^>]*>\\s*${h}\\s*</th>`).test(methodsSection)),
)
check('methods note links the hydro jetting vs. snaking comparison', methodsSection.includes('href="/compare/hydro-jetting-vs-sewer-snaking/"'))

const cameraSection = sectionById(ID.camera)
check(
  'camera panel has an eight-item "may document" list, a seven-item "does not show" list and the callout',
  (cameraSection.match(/<ul[\s\S]*?<\/ul>/g) || []).map((u) => (u.match(/<li[\s>]/g) || []).length).join(',') === '8,7' &&
    /A visibly clear line is not proof/.test(decode(cameraSection)),
)
const askSection = sectionById(ID.ask)
check('six ask items', ((askSection.match(/<ol[\s\S]*?<\/ol>/) || [''])[0].match(/<li[\s>]/g) || []).length === 6)
check('"Keep the video and written findings" panel present', /Keep the video and written findings/.test(askSection))
const audSection = sectionById(ID.audiences)
check(
  'three audience rows; home buyers and sellers link the repo audience pages',
  (audSection.match(/<li[\s>]/g) || []).length === 3 &&
    ['/for/home-buyers/', '/for/home-sellers/'].every((h) => audSection.includes(`href="${h}"`)) &&
    /Homeowners/.test(audSection),
)
const marketsSection = sectionById('choose-market')
check('three market cards', ['/st-louis-mo/', '/san-diego-ca/', '/las-vegas-nv/'].every((h) => marketsSection.includes(`href="${h}"`)))
const independentSection = sectionById('independent')
check(
  'independent band present with Clear / Document / Decide and a request link',
  /Major sewer decisions deserve clear evidence\./.test(independentSection) &&
    ['Clear', 'Document', 'Decide'].every((s) => new RegExp(`<h3[^>]*>${s}</h3>`).test(independentSection)) &&
    /href="#request"/.test(independentSection),
)
const habitsSection = sectionById(ID.habits)
check('three habits rows', (habitsSection.match(/<li[\s>]/g) || []).length === 3)
check('no evidence mosaic section on this page', !/aria-labelledby="see-what/.test(main) && !/Examples of sewer/.test(visible))
checkRelatedCards({
  main,
  check,
  expectedHrefs: ['/services/sewer-cleaning/', '/services/hydro-jetting/', '/services/sewer-camera-inspection/', '/services/sewer-line-locating/'],
})

/* ---- Rhythm: two brand surfaces, the independent band and the final request ---- */
// (the request section's surface is a wrapper, not a <section> class)
const brandSections = (main.match(/<section[^>]*class="[^"]*\bbg-brand\b/g) || []).length
check('exactly one brand-surface section in the body (the independent band)', brandSections === 1, String(brandSections))
const order = [ID.signals, ID.triage, ID.limits, ID.process, ID.decision, 'independent', ID.methods, ID.camera, ID.ask, ID.audiences, 'choose-market', ID.terms, 'faq', ID.habits, 'related', 'request']
const positions = order.map((o) => main.search(new RegExp(`(?:aria-labelledby|id)="${o}"`)))
check('sections appear in the design order', positions.every((p, i) => p >= 0 && (i === 0 || p > positions[i - 1])), JSON.stringify(positions))
const surfaceOf = (id) => ((main.match(new RegExp(`<section[^>]*aria-labelledby="${id}"[^>]*>`)) || [''])[0].match(/bg-(background|surface-muted|brand)/) || [])[1]
const seq = [ID.definition, ID.signals, ID.triage, ID.limits, ID.process, ID.decision, 'independent', ID.methods, ID.camera, ID.ask, ID.audiences, 'choose-market', ID.terms, 'faq', ID.habits, 'related'].map(surfaceOf)
check('surfaces alternate from the definition to the related cards', seq.every((s, i) => i === 0 || s !== seq[i - 1]), seq.join(','))
check(
  'surfaces match the design canvas',
  seq.join(',') ===
    'background,surface-muted,background,surface-muted,background,surface-muted,brand,background,surface-muted,background,surface-muted,background,surface-muted,background,surface-muted,background',
  seq.join(','),
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

/* ---- Characters and forbidden text ---- */
check('no em dash (U+2014) or en dash (U+2013)', !html.includes('—') && !html.includes('–'))
check('no literal [CONFIRM placeholder', !/\[CONFIRM/i.test(html))

// The FAQ question "Is hydro jetting safe for every pipe?" is answered "No."
// It is the one allowed use of this phrase, matched by question text only.
// The Organization node is the site-wide catalogue (it lists the commercial
// services); only this page's own nodes are scanned.
const pageLdText = JSON.stringify(graph.filter((n) => n['@type'] !== 'Organization'))
let scanText = flat(`${visible} ${pageLdText}`).toLowerCase()
scanText = scanText.split('is hydro jetting safe for every pipe?').join(' ')
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
  'scale',
  'lined',
  'commercial',
  'restaurant',
  'vacuum',
  'jet-vac',
  'ridgid',
  'psi',
  'gpm',
  'we repair',
  'we replace',
  'we install',
  'repair service',
  'replacement service',
]
const hits = forbidden.filter((w) => new RegExp(`\\b${w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`).test(scanText))
check('no forbidden claim words', hits.length === 0, hits.join(', '))
check('no dollar price', !/\$\s?\d/.test(visible))
check('no duration in minutes or hours', !/\b\d+\s*(?:-|to)?\s*\d*\s*(?:minutes?|hours?)\b/i.test(visible))
check('no interval in years', !/\b\d+\s*(?:-|to)?\s*\d*\s*years?\b/i.test(visible))
check('no held topics (roof vent, toilet removal)', !/roof vent|roof-vent|pull a toilet|toilet removal/i.test(visible))
check(
  'deliverables: video and written findings stated as included when a camera is used',
  (visible.match(/When a camera is used, you receive the video and written findings\./g) || []).length === 2 &&
    /When a camera is used, you receive the video\./.test(visible) &&
    /When a camera is used, you receive written findings/.test(visible),
)
check(
  'no deliverable beyond video and written findings (photos, narration, coding performed, certified, report)',
  !/photo/i.test(visible.replace(/photograph/gi, '')) &&
    !/narrat/i.test(visible) &&
    !/certified/i.test(visible) &&
    !/surface mark/i.test(visible) &&
    !/(you receive|we provide|we deliver|includes?) (a |the )?(written |cleaning )?report/i.test(visible),
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
