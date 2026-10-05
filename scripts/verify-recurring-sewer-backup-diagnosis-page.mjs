/**
 * Post-build checks for /services/recurring-sewer-backup-diagnosis/
 * (Service Page Template v2).
 *
 * Reads the static export in `out/` (run `npm run build` first). No
 * dependencies. Exits 1 on any failure.
 *
 *   node scripts/verify-recurring-sewer-backup-diagnosis-page.mjs
 *
 * The page is market-neutral: no phone number or `tel:` link before the
 * company footer (DEC-071), no repair offered as a service, no equipment
 * named (CLAUDE.md section 24). Owner-confirmed 2026-10-05: when a camera is
 * used, the inspection video and written findings are included. Nothing
 * else about deliverables is claimed (no surface marks, coding performed,
 * photos, narration, delivery format or timing, or "report" as the
 * deliverable name). The DEC-088 free-estimate and same-day wording appears
 * in exactly the three approved places and nowhere else. FAQPage JSON-LD
 * must equal the visible FAQ (DEC-114).
 *
 * Image slots: seven pending-photography boxes while the slot flag is on;
 * none, and no `data-image-placeholder` markup, when the build sets
 * NEXT_PUBLIC_SHOW_IMAGE_SLOTS=false.
 */
import fs from 'node:fs'
import path from 'node:path'
import { checkEquipmentNames, checkServiceSchema } from './lib/service-page-checks.mjs'

const ROOT = path.resolve('out')
const PAGE = path.join(ROOT, 'services', 'recurring-sewer-backup-diagnosis', 'index.html')
// Follows the origin the build used (NEXT_PUBLIC_SITE_URL); falls back to production.
const PRODUCTION_ORIGIN = 'https://www.thesewerpros.com'
const ORIGIN = (process.env.NEXT_PUBLIC_SITE_URL || PRODUCTION_ORIGIN).replace(/\/+$/, '')
const SLOTS_ON = process.env.NEXT_PUBLIC_SHOW_IMAGE_SLOTS !== 'false'
const NAME = 'Recurring Sewer Backup Diagnosis'
const H1 = 'Recurring Sewer Backup Diagnosis'
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
const count = (re, text) => (text.match(re) || []).length

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
check('title', decode(title || '') === `Recurring Sewer Backup Diagnosis | The Sewer Pros`, title)
check('title length (<= 60)', (title || '').length > 0 && (title || '').length <= 60, String((title || '').length))
const canonical = (html.match(/<link rel="canonical" href="([^"]+)"/) || [])[1]
check('canonical', canonical === `${ORIGIN}/services/recurring-sewer-backup-diagnosis/`, canonical)
const robots = (html.match(/<meta name="robots" content="([^"]+)"/) || [])[1]
check('indexable (no noindex)', robots === undefined || !/noindex/i.test(robots), robots)
const desc = decode((html.match(/<meta name="description" content="([^"]*)"/) || [])[1] || '')
check('meta description length (<= 160)', desc.length > 0 && desc.length <= 160, String(desc.length))
check(
  'meta description is the content-doc sentence',
  desc ===
    'Recurring sewer backup diagnosis documents visible conditions in an accessible sewer line, with cleaning when needed. St. Louis, San Diego, Las Vegas.',
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
const types = graph.map((n) => n['@type'])
check('Organization first', types[0] === 'Organization', JSON.stringify(types))
const serviceNodes = graph.filter((n) => n['@type'] === 'Service')
check('one Service node named "Recurring Sewer Backup Diagnosis"', serviceNodes.length === 1 && serviceNodes[0].name === NAME, JSON.stringify(serviceNodes.map((n) => n.name)))
const svcDesc = serviceNodes[0]?.description ?? ''
check(
  'Service description present and free of repair, price, response time, coding and models',
  svcDesc.length > 0 && !/repair|price|response|marks|pacp|lacp|ridgid|seesnake|seektech/i.test(svcDesc),
  svcDesc,
)
const allowed = new Set(['Organization', 'WebSite', 'WebPage', 'Service', 'BreadcrumbList', 'FAQPage'])
check('only the expected node types', types.every((t) => allowed.has(t)), JSON.stringify(types))
const typeCounts = types.reduce((acc, t) => ({ ...acc, [t]: (acc[t] || 0) + 1 }), {})
console.log(`NOTE  schema object counts: ${JSON.stringify(typeCounts)} (${types.length} nodes)`)
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
check('FAQPage has 29 questions', faqLd.length === 29, String(faqLd.length))
check('29 visible questions', faqVisible.length === 29, String(faqVisible.length))
check(
  'FAQPage text equals the visible FAQ',
  faqLd.length === faqVisible.length &&
    faqLd.every((f, i) => f.q === faqVisible[i].q && f.a === faqVisible[i].a),
)
const QUESTIONS = [
  'What is recurring sewer backup diagnosis?',
  'Why does my sewer keep backing up?',
  'Why does my sewer back up again after it was cleared?',
  'How do I know if the backup is in my sewer line or just one drain?',
  'Can grease or "flushable" wipes cause a sewer backup?',
  'Can tree roots cause a recurring sewer backup?',
  `Is a recurring backup the city's problem or mine?`,
  'What is the difference between drain cleaning, hydro jetting, and a camera inspection?',
  'What can a sewer camera see?',
  'Can a sewer camera find the exact cause of a backup?',
  'Can a sewer camera see through standing water?',
  'Does standing water on the video mean there is a belly or sag?',
  'Can a camera tell me if my sewer pipe is about to fail?',
  'Can the camera get past bends, roots, or a collapse?',
  'Can a diagnosis show where the problem is from above ground?',
  'Do you clear the line before running the camera?',
  'If the line is clear after cleaning, is the pipe healthy?',
  'Will hydro jetting damage my sewer line, and is it safe for older pipe?',
  'Where does the camera go in? Do I need a cleanout?',
  'Will I get video and written findings?',
  'What should I ask for after a camera inspection?',
  'What do PACP and LACP grades mean?',
  'How long does it take, and how much does it cost?',
  'Can you come the same day, and is this emergency service?',
  'What if the camera shows something serious?',
  'Should I get a second opinion before approving major sewer work?',
  'How often should a sewer line be inspected?',
  'Can I use the sewer video for a sale or a city review?',
  'Should I get a sewer scope before buying a house?',
]
check(
  'the 29 questions match the content doc, in order',
  JSON.stringify(faqVisible.map((f) => flat(f.q))) === JSON.stringify(QUESTIONS.map(flat)),
)
const groupLabels = [...faqSection.matchAll(/<h3[^>]*id="faq-[^"]*"[^>]*>([\s\S]*?)<\/h3>/g)].map((m) => strip(m[1]))
check(
  'five FAQ groups with the expected labels',
  JSON.stringify(groupLabels) ===
    JSON.stringify(['The basics', 'What the camera can show', 'Cleaning', 'The visit and your records', 'Decisions and property']),
  JSON.stringify(groupLabels),
)
const groupChunks = faqSection.split(/<h3[^>]*id="faq-/).slice(1)
check(
  'FAQ groups hold 8, 7, 3, 6 and 5 questions',
  groupChunks.map((c) => count(/<details[\s>]/g, c)).join(',') === '8,7,3,6,5',
  groupChunks.map((c) => count(/<details[\s>]/g, c)).join(','),
)
check('group labels are navigation only (no group heading sits inside a question)', details.every((d) => !/<h3[\s>]/.test(d)))
const faqAnswersPlain = faqLd.every((f) => !/<[a-z][^>]*>/i.test(f.a))
check('FAQ answers are plain strings (no markup in JSON-LD)', faqAnswersPlain)

/* ---- Structure ---- */
const sectionById = (id) =>
  (main.match(new RegExp(`<section[^>]*aria-labelledby="${id}"[\\s\\S]*?</section>`)) || [''])[0]
const ID = {
  definition: slug('What is recurring sewer backup diagnosis?'),
  signals: slug('When a recurring backup may be worth diagnosing'),
  causes: slug('What commonly causes a sewer to back up again and again?'),
  limits: slug('What a camera can document, and what it cannot confirm'),
  process: slug('What happens during a recurring backup diagnosis'),
  decision: slug('Cleaning, camera inspection, or locating: which does a repeat backup need?'),
  ask: slug('What to ask for, and what to keep'),
  situations: slug('If your situation is a little different'),
}
const signalsOl = (sectionById(ID.signals).match(/<ol[\s\S]*?<\/ol>/) || [''])[0]
check('exactly seven symptoms', count(/<li[\s>]/g, signalsOl) === 7, String(count(/<li[\s>]/g, signalsOl)))
const causesUl = (sectionById(ID.causes).match(/<ul[\s\S]*?<\/ul>/) || [''])[0]
check('exactly seven cause bullets', count(/<li[\s>]/g, causesUl) === 7, String(count(/<li[\s>]/g, causesUl)))
const processOl = (sectionById(ID.process).match(/<ol[\s\S]*?<\/ol>/) || [''])[0]
check('exactly six process steps', count(/<li[\s>]/g, processOl) === 6, String(count(/<li[\s>]/g, processOl)))
const prepUl = (sectionById(ID.process).match(/<ul[\s\S]*?<\/ul>/) || [''])[0]
check('five preparation items (the placeholder bullet is omitted)', count(/<li[\s>]/g, prepUl) === 5, String(count(/<li[\s>]/g, prepUl)))

const trust = ['Independent inspection and diagnostics', 'Sewer and drain specialists, not general plumbing', 'No repair-driven upselling', 'Serving St. Louis']
check('trust strip present with the existing statements', trust.every((t) => visible.includes(t)))

check('hero request card has a market select', /id="hero-lead-market"/.test(html))
check('hero request card preselects the service', /id="hero-lead-service"[\s\S]*?<option value="svc-recurring-sewer-backup-diagnosis" selected/.test(html))
check('request form preselects the service', /id="request-lead-service"[\s\S]*?<option value="svc-recurring-sewer-backup-diagnosis" selected/.test(html))
check('form message label is "What keeps happening?"', /What keeps happening\?/.test(html))

const ids = [...body.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1])
const dupes = ids.filter((v, i) => ids.indexOf(v) !== i)
check('no duplicate ids', dupes.length === 0, [...new Set(dupes)].join(', '))

const navBlock = (main.match(/<nav[^>]*aria-labelledby="on-this-page"[\s\S]*?<\/nav>/) || [''])[0]
const navHrefs = [...navBlock.matchAll(/href="#([^"]+)"/g)].map((m) => m[1])
const navLabels = [...navBlock.matchAll(/<a [^>]*>([\s\S]*?)<\/a>/g)].map((m) => strip(m[1]))
check(
  '"On this page" list has the seven entries',
  JSON.stringify(navLabels) ===
    JSON.stringify([
      'When it may be worth diagnosing',
      'What commonly causes a repeat backup',
      'What a camera can and cannot show',
      'What happens during a visit',
      'Cleaning, camera, or locating',
      'What to ask for and keep',
      'Questions',
    ]),
  JSON.stringify(navLabels),
)
check('every "On this page" anchor resolves', navHrefs.every((h) => ids.includes(h)), navHrefs.filter((h) => !ids.includes(h)).join(', '))
check('"On this page" nav renders exactly once in the DOM', count(/aria-labelledby="on-this-page"/g, main) === 1)
check('nav is not hidden from assistive technology', !/aria-hidden="true"[^>]*aria-labelledby="on-this-page"|aria-labelledby="on-this-page"[^>]*aria-hidden="true"/.test(navBlock) && !/<nav[^>]*\shidden/.test(navBlock))
const headingIds = [...main.matchAll(/<h2[^>]*\sid="([^"]+)"/g)].map((m) => m[1])
check('every nav entry points at a rendered section heading', navHrefs.every((h) => headingIds.includes(h)), navHrefs.filter((h) => !headingIds.includes(h)).join(', '))
const topicBlock = (main.match(/<nav[^>]*aria-labelledby="faq-topics"[\s\S]*?<\/nav>/) || [''])[0]
const topicHrefs = [...topicBlock.matchAll(/href="#([^"]+)"/g)].map((m) => m[1])
check('FAQ topic list has five anchors that resolve', topicHrefs.length === 5 && topicHrefs.every((h) => ids.includes(h)), String(topicHrefs.length))
const inPage = [...main.matchAll(/href="#([^"]+)"/g)].map((m) => m[1])
check('every in-page anchor resolves (including #request, #choose-market)', inPage.every((h) => ids.includes(h)), inPage.filter((h) => !ids.includes(h)).join(', '))

/* ---- Sections ---- */
const SCOPE_FULL =
  'This service is designed for accessible residential sewer and drain lines. Equipment selection and available service depend on the entry point, pipe size, line condition, and scope of work. We provide cleaning, camera diagnostics, and line locating only. We do not provide sewer repair, replacement, lining, excavation, or pipe installation.'
const SHORT =
  'We provide cleaning, camera diagnostics, and line locating only. We do not provide sewer repair, replacement, lining, excavation, or pipe installation.'
const definitionSection = sectionById(ID.definition)
check('scope statement present in the definition box', flat(strip(definitionSection)).includes(flat(SCOPE_FULL)))

const limitsSection = sectionById(ID.limits)
check(
  'limits panel has a "may document" list of eight, a "cannot confirm" list of seven and a callout',
  (limitsSection.match(/<ul[\s\S]*?<\/ul>/g) || []).map((u) => count(/<li[\s>]/g, u)).join(',') === '8,7' &&
    /A clear camera path does not show that unviewed, submerged, or inaccessible sections are free of defects\./.test(decode(limitsSection)),
)

const decisionSection = sectionById(ID.decision)
const decisionBody = (decisionSection.match(/<tbody>[\s\S]*?<\/tbody>/) || [''])[0]
check(
  'fit table has three body rows and a labelled, focusable scroll region',
  count(/<tr[\s>]/g, decisionBody) === 3 &&
    /role="region"[^>]*aria-label="Cleaning, camera inspection, and locating compared \(scrollable table\)"[^>]*tabindex="0"/.test(decisionSection),
)
check(
  'fit table headers are Service / What it does / What it does not do',
  ['Service', 'What it does', 'What it does not do'].every((h) => new RegExp(`<th[^>]*scope="col"[^>]*>\\s*${h}\\s*</th>`).test(decisionSection)),
)
const decisionLists = (decisionSection.match(/<ul[\s\S]*?<\/ul>/g) || []).map((u) => count(/<li[\s>]/g, u))
check('"Where to start" has three items and six links', decisionLists.join(',') === '3,6', decisionLists.join(','))
check('hydro jetting note is present', /Is hydro jetting part of every visit\?/.test(decisionSection) && /condition-dependent/.test(decisionSection))

const askSection = sectionById(ID.ask)
check('seven ask items', count(/<li[\s>]/g, (askSection.match(/<ol[\s\S]*?<\/ol>/) || [''])[0]) === 7)
check('"Why keep them" panel present', /Why keep them/.test(askSection))
const sitSection = sectionById(ID.situations)
check('three related-situation rows', count(/<li[\s>]/g, sitSection) === 3 && /pre-purchase sewer inspection/.test(sitSection))
const marketsSection = sectionById('choose-market')
check('three market cards', ['/st-louis-mo/', '/san-diego-ca/', '/las-vegas-nv/'].every((h) => marketsSection.includes(`href="${h}"`)))
const independentSection = sectionById('independent')
check(
  'independent band present with Clear / Document / Decide',
  /Major sewer decisions deserve clear evidence\./.test(independentSection) &&
    ['Clear', 'Document', 'Decide'].every((s) => new RegExp(`<h3[^>]*>${s}</h3>`).test(independentSection)),
)
const relatedSection = sectionById('related')
const relatedHrefs = [...relatedSection.matchAll(/<a [^>]*href="(\/[^"]+)"/g)].map((m) => m[1])
check(
  'related section links the five built services',
  JSON.stringify([...new Set(relatedHrefs)].sort()) ===
    JSON.stringify([
      '/services/sewer-camera-inspection/',
      '/services/sewer-cleaning-camera-inspection/',
      '/services/hydro-jetting/',
      '/services/sewer-line-locating/',
      '/services/pre-purchase-sewer-inspection/',
    ].sort()),
  JSON.stringify(relatedHrefs),
)

/* ---- Image slots ---- */
const slotBoxes = [...body.matchAll(/data-image-placeholder="([^"]*)"/g)].map((m) => m[1])
const SLOT_FILES = [
  'the-sewer-pros-recurring-sewer-backup-diagnosis-hero-cleanout-16x9.webp',
  'the-sewer-pros-recurring-sewer-backup-diagnosis-explainer-monitor-4x3.webp',
  'the-sewer-pros-recurring-sewer-backup-diagnosis-causes-root-footage-4x3.webp',
  'the-sewer-pros-recurring-sewer-backup-diagnosis-limits-waterline-footage-7x4.webp',
  'the-sewer-pros-recurring-sewer-backup-diagnosis-process-cleanout-access-4x3.webp',
  'the-sewer-pros-recurring-sewer-backup-diagnosis-process-locate-receiver-4x3.webp',
  'the-sewer-pros-recurring-sewer-backup-diagnosis-records-video-and-findings-4x3.webp',
]
const SLOT_LABELS = [
  'A technician at an exterior cleanout with camera reel and monitor set up at a residential property',
  'A technician reviewing sewer camera footage on a monitor',
  'A real frame from an inspection video showing visible root intrusion at a joint or crack (no identifiers)',
  'A real frame showing standing water in a line, where the waterline limits the view',
  'An open cleanout with a camera cable or cleaning hose entering it',
  'A technician holding a locating receiver over a yard or driveway during a locate',
  'A monitor or tablet showing inspection video beside written findings, with customer details removed',
]
if (SLOTS_ON) {
  check('seven image-slot boxes (flag on)', slotBoxes.length === 7, String(slotBoxes.length))
  check('slot boxes carry the content-doc filenames', SLOT_FILES.every((f) => body.includes(f)), SLOT_FILES.filter((f) => !body.includes(f)).join(', '))
  check('slot boxes carry the content-doc labels', SLOT_LABELS.every((l) => visible.includes(l)), SLOT_LABELS.filter((l) => !visible.includes(l)).join(' | '))
  check('slot aspects are 16/9, 4/3 and 7/4 only', count(/aspect-video/g, body) >= 1 && count(/aspect-\[7\/4\]/g, body) === 1)
} else {
  check('no slot boxes and no data-image-placeholder markup (flag off)', slotBoxes.length === 0 && !SLOT_FILES.some((f) => body.includes(f)))
}
check('no alt text is shipped for a missing photograph', !/alt="Technician setting up a sewer camera/.test(html) && !/alt="Camera view of tree roots/.test(html))
check('no literal "IMAGE SLOT" marker', !/IMAGE SLOT/.test(html))

/* ---- Rhythm: brand surfaces are the independent band and the final request, with >= 4 sections between ---- */
const order = ['independent', ID.ask, ID.situations, 'choose-market', 'faq', 'related', 'request']
const positions = order.map((o) => main.search(new RegExp(`(?:aria-labelledby|id)="${o}"`)))
check(
  'independent band and final request are separated by five sections, in order',
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
check('no link to an unbuilt page (every internal link exists in the export)', unresolved.length === 0)

/* ---- Characters and forbidden text ---- */
check('no em dash (U+2014)', !html.includes('—'))
check('no literal [CONFIRM placeholder', !/\[CONFIRM/i.test(html))
check('no appointment-preparation placeholder line', !/appointment preparation|before arrival/i.test(visible))

// DEC-088 wording: exactly the three approved places, nowhere else.
const FREE_EST = 'Ask about a free estimate before scheduling.'
const SAME_DAY =
  'Same-day appointments can be arranged when scheduling permits, Monday through Friday, 8:00am to 4:00pm. Not available on weekends. We do not offer 24/7 or emergency service.'
check('"free estimate" appears exactly twice (cost FAQ, final request intro)', count(/free estimate/gi, visible) === 2 && count(new RegExp(FREE_EST.replace(/[.]/g, '\\.'), 'g'), visible) === 2, String(count(/free estimate/gi, visible)))
check('same-day sentence appears exactly once, verbatim', count(/same-day/gi, visible) === 1 && visible.includes(SAME_DAY), String(count(/same-day/gi, visible)))
const SAME_DAY_Q = 'Can you come the same day, and is this emergency service?'
check('"24/7" appears once and "emergency" only in the same-day question and answer', count(/24\/7/g, visible) === 1 && count(/emergency/gi, visible) === 2 && visible.includes(SAME_DAY_Q))
const requestSection = (main.match(/<section[^>]*aria-labelledby="request"[\s\S]*?<\/section>/) || [''])[0]
check('final request intro carries the free-estimate line', strip(requestSection).includes(FREE_EST))
const costFaq = faqLd.find((f) => f.q === 'How long does it take, and how much does it cost?')
check('cost FAQ carries the free-estimate line', costFaq !== undefined && costFaq.a.includes(FREE_EST))

let scanText = flat(`${visible} ${ldText}`).toLowerCase()
// The DEC-088 strings (and the same-day question that carries the word "emergency") are removed before the scan; any other use still fails.
for (const phrase of [FREE_EST, SAME_DAY, SAME_DAY_Q]) scanText = scanText.split(flat(phrase).toLowerCase()).join(' ')
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
  'permanent',
  'finds every',
  'safe for every pipe',
  'exact location',
  'pinpoint',
  'ridgid',
  'seesnake',
  'seektech',
  'mongoose',
  '512',
  'fixes',
  'restores your pipe',
  'best',
  'we repair',
  'we replace',
  'we install',
  'repair service',
  'replacement service',
]
const hits = forbidden.filter((w) => scanText.includes(w))
check('no forbidden claim words', hits.length === 0, hits.join(', '))
// PACP and LACP appear only in the one educational FAQ (question and answer).
const pacpUses = count(/pacp|lacp/gi, flat(visible))
const pacpFaq = faqLd.find((f) => /PACP and LACP/.test(f.q))
check(
  'PACP and LACP appear only in the one educational FAQ',
  pacpFaq !== undefined &&
    pacpUses === count(/pacp|lacp/gi, `${pacpFaq.q} ${pacpFaq.a}`) &&
    !/(we|our|the sewer pros)[^.]*(pacp|lacp)/i.test(pacpFaq.a),
  String(pacpUses),
)
// "survey" only ever appears negated ("not a survey").
const surveyUses = count(/survey/gi, visible)
check('"survey" appears only as "not a survey"', surveyUses === count(/not a survey/gi, visible), `${surveyUses} uses`)
check('no dollar price', !/\$\s?\d/.test(visible))
check('no duration in minutes', !/\b\d+\s*(?:-|to)?\s*\d*\s*minutes?\b/i.test(visible))
check('no inspection interval in years', !/\b\d+\s*(?:-|to)?\s*\d*\s*years?\b/i.test(visible))
check(
  'deliverables: video and written findings stated as included when a camera is used',
  /When a camera is used, you receive the inspection video\. Written findings are included\./.test(visible),
)
check(
  'no deliverable beyond video and written findings (photos, narration, certified, a "report" as the deliverable, footage counter)',
  !/photo/i.test(visible.replace(/photograph/gi, '').replace(/pending-photography/gi, '')) &&
    !/narrat/i.test(visible) &&
    !/certified/i.test(visible) &&
    !/footage counter/i.test(visible) &&
    !/(you receive|we provide|we deliver|includes?) (a |the )?(written |inspection )?report/i.test(visible),
)
check('no claim of surface marks as provided (the page never mentions marks as a deliverable)', !/surface marks?/i.test(visible))
check('no claim of reinspection after cleaning', !/reinspect|re-inspect/i.test(visible))
check('the independent band and ask list never promise a repair or replacement offer', !/we (?:also )?(?:offer|provide) (?:sewer )?(?:repair|replacement)/i.test(visible))
check('short scope form present in the hero', flat(strip((main.match(/<section[\s\S]*?<\/section>/) || [''])[0])).includes(flat(SHORT)))
check('full scope statement present in the request section', flat(strip(requestSection)).includes(flat(SCOPE_FULL)))

/* ---- Phones (DEC-071): none before the company footer ---- */
const footerAt = body.indexOf('<footer')
const beforeFooter = footerAt >= 0 ? body.slice(0, footerAt) : body
check('no tel: link before the footer', !/href="tel:/.test(beforeFooter))
check('no phone number in the page body', !/\(?\b\d{3}\)?[-.\s]\d{3}[-.\s]\d{4}\b/.test(strip(main)))
const footerHtml = footerAt >= 0 ? body.slice(footerAt) : ''
const footerTels = count(/href="tel:[^"]+"/g, footerHtml)
check('footer numbers are labelled by market', footerTels === 0 || /(St\. Louis|San Diego|Las Vegas)/.test(footerHtml))

/* ---- Mobile bar and form ---- */
check('mobile contact bar present', /aria-label="Quick contact"/.test(html))
check('mobile bar Schedule points at #request', /href="#request"[^>]*>Schedule</.test(html))
check('final request section present (id=request)', /id="request"/.test(html))

console.log(failures === 0 ? '\nAll checks passed.' : `\n${failures} check(s) FAILED.`)
process.exit(failures === 0 ? 0 : 1)
