/**
 * Post-build checks for /services/preventative-sewer-maintenance/
 * (Service Page Template v2).
 *
 * Reads the static export in `out/` (run `npm run build` first). No
 * dependencies. Exits 1 on any failure.
 *
 *   node scripts/verify-preventative-sewer-maintenance-page.mjs
 *
 * The page is market-neutral and residential-first: no phone number or
 * `tel:` link before the company footer (DEC-071), no repair offered as a
 * service, no equipment named (CLAUDE.md section 24), no commercial copy, no
 * price, offer, free estimate, same-day or emergency wording, no interval,
 * duration or pressure figure. Owner-confirmed 2026-10-05: the inspection
 * video and written findings are included. Nothing else about deliverables
 * is claimed. FAQPage JSON-LD must equal the visible FAQ (DEC-114).
 *
 * Image slots: three pending-photography boxes while the slot flag is on;
 * none, and no `data-image-placeholder` markup, when the build sets
 * NEXT_PUBLIC_SHOW_IMAGE_SLOTS=false.
 */
import fs from 'node:fs'
import path from 'node:path'
import { checkEquipmentNames, checkServiceSchema } from './lib/service-page-checks.mjs'

const ROOT = path.resolve('out')
const PAGE = path.join(ROOT, 'services', 'preventative-sewer-maintenance', 'index.html')
// Follows the origin the build used (NEXT_PUBLIC_SITE_URL); falls back to production.
const PRODUCTION_ORIGIN = 'https://www.thesewerpros.com'
const ORIGIN = (process.env.NEXT_PUBLIC_SITE_URL || PRODUCTION_ORIGIN).replace(/\/+$/, '')
const SLOTS_ON = process.env.NEXT_PUBLIC_SHOW_IMAGE_SLOTS !== 'false'
const NAME = 'Preventative Sewer Maintenance'
const H1 = 'Preventative Sewer Maintenance'
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
check('title', decode(title || '') === `Preventative Sewer Maintenance and Cleaning | The Sewer Pros`, title)
check('title length (<= 70)', (title || '').length > 0 && (title || '').length <= 70, String((title || '').length))
console.log(`NOTE  rendered title length: ${(title || '').length}`)
const canonical = (html.match(/<link rel="canonical" href="([^"]+)"/) || [])[1]
check('canonical', canonical === `${ORIGIN}/services/preventative-sewer-maintenance/`, canonical)
const robots = (html.match(/<meta name="robots" content="([^"]+)"/) || [])[1]
check('indexable (no noindex)', robots === undefined || !/noindex/i.test(robots), robots)
const desc = decode((html.match(/<meta name="description" content="([^"]*)"/) || [])[1] || '')
check('meta description length (<= 160)', desc.length > 0 && desc.length <= 160, String(desc.length))
console.log(`NOTE  meta description length: ${desc.length}`)
check(
  'meta description is the content-doc sentence',
  desc ===
    'Preventative sewer maintenance: camera inspection and cleaning when appropriate, with video and written findings. Scope depends on the line.',
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
check('one Service node named "Preventative Sewer Maintenance"', serviceNodes.length === 1 && serviceNodes[0].name === NAME, JSON.stringify(serviceNodes.map((n) => n.name)))
const svcDesc = serviceNodes[0]?.description ?? ''
check(
  'Service description is the definition wording and free of price, response time, interval, coding and models',
  svcDesc ===
    `Preventative sewer maintenance is planned inspection and cleaning of a home's drain and sewer line before buildup or an obstruction causes a backup. It is diagnostic and cleaning work, not repair.` &&
    !/price|response|marks|pacp|lacp|ridgid|seesnake|seektech|interval/i.test(svcDesc),
  svcDesc,
)
check('Service description mentions repair only as "not repair"', count(/repair/gi, svcDesc) === count(/not repair/gi, svcDesc))
check('Service provider references the Organization node', serviceNodes[0]?.provider?.['@id'] === graph[0]?.['@id'], JSON.stringify(serviceNodes[0]?.provider))
const areas = (serviceNodes[0]?.areaServed ?? []).map((a) => a['@id'] ?? a.name ?? a)
check(
  'areaServed is the three markets only',
  areas.length === 3 && ['st-louis-mo', 'san-diego-ca', 'las-vegas-nv'].every((m) => areas.some((a) => String(a).includes(`/${m}/`))),
  JSON.stringify(areas),
)
check('Service node has no address, geo or telephone', !/"(address|geo|telephone)"/.test(JSON.stringify(serviceNodes[0] ?? {})))
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
  'BreadcrumbList equals the visible breadcrumb (Home > Services > Preventative Sewer Maintenance)',
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
check('FAQPage has 16 questions', faqLd.length === 16, String(faqLd.length))
check('16 visible questions', faqVisible.length === 16, String(faqVisible.length))
check(
  'FAQPage text equals the visible FAQ',
  faqLd.length === faqVisible.length &&
    faqLd.every((f, i) => f.q === faqVisible[i].q && f.a === faqVisible[i].a),
)
const QUESTIONS = [
  'What is preventative sewer maintenance?',
  'How often should I schedule it?',
  'Do all homes need routine sewer cleaning?',
  'What does a sewer camera inspection find?',
  'What can a sewer camera not see?',
  'What happens if the camera cannot get through a blockage?',
  'Is hydro jetting safe for my pipes?',
  'Should a camera inspection come before cleaning?',
  'Why do the same clogs keep coming back?',
  'What is a sewer cleanout?',
  'Why are all my drains slow or gurgling?',
  'Do I get the video and written findings?',
  'How long does it take?',
  'How much does it cost?',
  'Do you offer sewer repair or replacement?',
  'What should I ask for before approving major sewer work?',
]
check(
  'the 16 questions match the content doc, in order',
  JSON.stringify(faqVisible.map((f) => flat(f.q))) === JSON.stringify(QUESTIONS.map(flat)),
)
const groupLabels = [...faqSection.matchAll(/<h3[^>]*id="faq-[^"]*"[^>]*>([\s\S]*?)<\/h3>/g)].map((m) => strip(m[1]))
check(
  'six FAQ groups with the expected labels',
  JSON.stringify(groupLabels) ===
    JSON.stringify(['The basics', 'What the camera shows', 'Cleaning and hydro jetting', 'Access and signs', 'Records, timing, and cost', 'Scope']),
  JSON.stringify(groupLabels),
)
const groupChunks = faqSection.split(/<h3[^>]*id="faq-/).slice(1)
check(
  'FAQ groups hold 3, 3, 3, 2, 3 and 2 questions',
  groupChunks.map((c) => count(/<details[\s>]/g, c)).join(',') === '3,3,3,2,3,2',
  groupChunks.map((c) => count(/<details[\s>]/g, c)).join(','),
)
check('group labels are navigation only (no group heading sits inside a question)', details.every((d) => !/<h3[\s>]/.test(d)))
check('FAQ answers are plain strings (no markup in JSON-LD)', faqLd.every((f) => !/<[a-z][^>]*>/i.test(f.a)))
check('no link inside any FAQ answer', details.every((d) => !/<a[\s>]/.test(d)))
// Interval, time and cost FAQs state no figure.
const figureFaqs = faqLd.filter((f) => ['How often should I schedule it?', 'How long does it take?', 'How much does it cost?'].includes(f.q))
check('interval, time and cost FAQs state no figure', figureFaqs.length === 3 && figureFaqs.every((f) => !/\d/.test(f.a)))

/* ---- Structure ---- */
const sectionById = (id) =>
  (main.match(new RegExp(`<section[^>]*aria-labelledby="${id}"[\\s\\S]*?</section>`)) || [''])[0]
const ID = {
  definition: slug('What is preventative sewer maintenance?'),
  signals: slug('When planned maintenance is worth considering'),
  limits: slug('What a camera can show, and what it cannot'),
  process: slug('What a maintenance visit involves'),
  decision: slug('Camera first, or cleaning first?'),
  comparison: slug('What preventative maintenance may include'),
  ask: slug('What to ask for after a visit'),
  audiences: slug('Who this is for'),
}
const signalsOl = (sectionById(ID.signals).match(/<ol[\s\S]*?<\/ol>/) || [''])[0]
check('exactly six signals', count(/<li[\s>]/g, signalsOl) === 6, String(count(/<li[\s>]/g, signalsOl)))
const processOl = (sectionById(ID.process).match(/<ol[\s\S]*?<\/ol>/) || [''])[0]
check('exactly six process steps', count(/<li[\s>]/g, processOl) === 6, String(count(/<li[\s>]/g, processOl)))
const prepUl = (sectionById(ID.process).match(/<ul[\s\S]*?<\/ul>/) || [''])[0]
check('four preparation items', count(/<li[\s>]/g, prepUl) === 4, String(count(/<li[\s>]/g, prepUl)))

const trust = ['Independent inspection and diagnostics', 'Sewer and drain specialists, not general plumbing', 'No repair-driven upselling', 'Serving St. Louis']
check('trust strip present with the existing statements', trust.every((t) => visible.includes(t)))

check('hero request card has a market select', /id="hero-lead-market"/.test(html))
check('hero request card preselects the service', /id="hero-lead-service"[\s\S]*?<option value="svc-preventative-sewer-maintenance" selected/.test(html))
check('request form preselects the service', /id="request-lead-service"[\s\S]*?<option value="svc-preventative-sewer-maintenance" selected/.test(html))
check('hero primary action is "Request Service" and secondary links the camera page', /href="#request"[^>]*>Request Service</.test(main) && /href="\/services\/sewer-camera-inspection\/"[^>]*>Learn about sewer camera inspection</.test(main))

const ids = [...body.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1])
const dupes = ids.filter((v, i) => ids.indexOf(v) !== i)
check('no duplicate ids', dupes.length === 0, [...new Set(dupes)].join(', '))

const navBlock = (main.match(/<nav[^>]*aria-labelledby="on-this-page"[\s\S]*?<\/nav>/) || [''])[0]
const navHrefs = [...navBlock.matchAll(/href="#([^"]+)"/g)].map((m) => m[1])
const navLabels = [...navBlock.matchAll(/<a [^>]*>([\s\S]*?)<\/a>/g)].map((m) => strip(m[1]))
check(
  '"On this page" list has the eight entries',
  JSON.stringify(navLabels) ===
    JSON.stringify([
      'Signs it may be time',
      'What a camera can and cannot show',
      'What a visit involves',
      'Camera first, or cleaning first',
      'What it may include',
      'What to ask for',
      'Who this is for',
      'Questions',
    ]),
  JSON.stringify(navLabels),
)
check('every "On this page" anchor resolves', navHrefs.every((h) => ids.includes(h)), navHrefs.filter((h) => !ids.includes(h)).join(', '))
check('"On this page" nav renders exactly once in the DOM', count(/aria-labelledby="on-this-page"/g, main) === 1)
const headingIds = [...main.matchAll(/<h2[^>]*\sid="([^"]+)"/g)].map((m) => m[1])
check('every nav entry points at a rendered section heading', navHrefs.every((h) => headingIds.includes(h)), navHrefs.filter((h) => !headingIds.includes(h)).join(', '))
const topicBlock = (main.match(/<nav[^>]*aria-labelledby="faq-topics"[\s\S]*?<\/nav>/) || [''])[0]
const topicHrefs = [...topicBlock.matchAll(/href="#([^"]+)"/g)].map((m) => m[1])
check('FAQ topic list has six anchors that resolve', topicHrefs.length === 6 && topicHrefs.every((h) => ids.includes(h)), String(topicHrefs.length))
const inPage = [...main.matchAll(/href="#([^"]+)"/g)].map((m) => m[1])
check('every in-page anchor resolves (including #request, #choose-market)', inPage.every((h) => ids.includes(h)), inPage.filter((h) => !ids.includes(h)).join(', '))

/* ---- Sections ---- */
const SCOPE_FULL =
  'This service is designed for accessible residential sewer and drain lines. Equipment selection and available service depend on the entry point, pipe size, line condition, and scope of work. We provide cleaning, camera diagnostics, and line locating only. We do not provide sewer repair, replacement, lining, excavation, or pipe installation.'
const definitionSection = sectionById(ID.definition)
check('scope statement present in the definition box', flat(strip(definitionSection)).includes(flat(SCOPE_FULL)))
check('definition has three supporting paragraphs', count(/<p[\s>]/g, (definitionSection.match(/<div class="mt-6[\s\S]*?<\/div>/) || [''])[0]) === 3)

const limitsSection = sectionById(ID.limits)
check(
  'limits panel has a "may document" list of seven, a "cannot confirm" list of six and a callout',
  (limitsSection.match(/<ul[\s\S]*?<\/ul>/g) || []).map((u) => count(/<li[\s>]/g, u)).join(',') === '7,6' &&
    /Cleaning does not repair these conditions\./.test(decode(limitsSection)),
  (limitsSection.match(/<ul[\s\S]*?<\/ul>/g) || []).map((u) => count(/<li[\s>]/g, u)).join(','),
)

const decisionSection = sectionById(ID.decision)
const decisionLists = (decisionSection.match(/<ul[\s\S]*?<\/ul>/g) || []).map((u) => count(/<li[\s>]/g, u))
check('decision panel: three "may come first" items and four links', decisionLists.join(',') === '3,4', decisionLists.join(','))
check(
  'decision links go to camera, cleaning, hydro jetting and locating',
  ['/services/sewer-camera-inspection/', '/services/sewer-cleaning/', '/services/hydro-jetting/', '/services/sewer-line-locating/'].every((h) => decisionSection.includes(`href="${h}"`)),
)

const comparisonSection = sectionById(ID.comparison)
const comparisonBody = (comparisonSection.match(/<tbody>[\s\S]*?<\/tbody>/) || [''])[0]
check('comparison has five body rows', count(/<tr[\s>]/g, comparisonBody) === 5, String(count(/<tr[\s>]/g, comparisonBody)))
check('comparison is a labelled, focusable scroll region', /role="region"[^>]*aria-label="[^"]*\(scrollable table\)"[^>]*tabindex="0"/.test(comparisonSection))
check('no comparison row is marked "(this page)" or "Not our service"', !/this page|Not our service/i.test(strip(comparisonSection)))
const recordsRow = (comparisonBody.split(/<\/tr>/).find((r) => />Records</.test(r)) || '')
check('the "Records" row exists and carries no link', recordsRow !== '' && !/<a[\s>]/.test(recordsRow))
check('the four service rows link their pages', count(/<a[\s>]/g, comparisonBody) === 4, String(count(/<a[\s>]/g, comparisonBody)))

const askSection = sectionById(ID.ask)
check('five ask items', count(/<li[\s>]/g, (askSection.match(/<ol[\s\S]*?<\/ol>/) || [''])[0]) === 5)
check('"Keep your records" panel present', /Keep your records/.test(askSection))

const audSection = sectionById(ID.audiences)
const audRows = count(/<li[\s>]/g, audSection)
const audLinks = [...audSection.matchAll(/<a [^>]*href="([^"]+)"/g)].map((m) => m[1])
check('four audience rows', audRows === 4, String(audRows))
check(
  'three audience rows link (buyers/sellers, agents, inspectors); landlords is text only',
  JSON.stringify(audLinks.sort()) ===
    JSON.stringify(['/for/home-inspectors/', '/for/real-estate-agents/', '/services/pre-purchase-sewer-inspection/'].sort()) &&
    /Small residential landlords/.test(audSection),
  JSON.stringify(audLinks),
)
check('no "Homeowners" audience link', !/<h3[^>]*>\s*Homeowners/.test(audSection))

const marketsSection = sectionById('choose-market')
check('three market cards', ['/st-louis-mo/', '/san-diego-ca/', '/las-vegas-nv/'].every((h) => marketsSection.includes(`href="${h}"`)))
const independentSection = sectionById('independent')
check('shared independent band present (Inspect / Document / Decide)', ['Inspect', 'Document', 'Decide'].every((s) => new RegExp(`<h3[^>]*>${s}</h3>`).test(independentSection)), independentSection.slice(0, 120))
const relatedSection = sectionById('related')
const relatedHrefs = [...relatedSection.matchAll(/<a [^>]*href="(\/[^"]+)"/g)].map((m) => m[1])
check(
  'related section links the six built services',
  JSON.stringify([...new Set(relatedHrefs)].sort()) ===
    JSON.stringify([
      '/services/sewer-camera-inspection/',
      '/services/sewer-cleaning/',
      '/services/hydro-jetting/',
      '/services/sewer-line-locating/',
      '/services/pre-purchase-sewer-inspection/',
      '/services/recurring-sewer-backup-diagnosis/',
    ].sort()),
  JSON.stringify(relatedHrefs),
)

/* ---- Image slots ---- */
const slotBoxes = [...body.matchAll(/data-image-placeholder="([^"]*)"/g)].map((m) => m[1])
const SLOT_FILES = [
  'the-sewer-pros-preventative-sewer-maintenance-explainer-review-4x3.webp',
  'the-sewer-pros-preventative-sewer-maintenance-prep-cleanout-4x3.webp',
  'the-sewer-pros-preventative-sewer-maintenance-records-video-and-findings-4x3.webp',
]
if (SLOTS_ON) {
  check('three image-slot boxes (flag on)', slotBoxes.length === 3, String(slotBoxes.length))
  check('slot boxes carry the slot filenames', SLOT_FILES.every((f) => body.includes(f)), SLOT_FILES.filter((f) => !body.includes(f)).join(', '))
} else {
  check('no slot boxes and no data-image-placeholder markup (flag off)', slotBoxes.length === 0 && !SLOT_FILES.some((f) => body.includes(f)))
}
check('no alt text is shipped for a missing photograph', !/alt="Technician reviewing sewer camera footage/.test(html) && !/alt="A capped sewer cleanout/.test(html))
check('no literal "IMAGE SLOT" marker', !/IMAGE SLOT/.test(html))

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
check('no link to a commercial page', !internal.some((h) => h.startsWith('/commercial')))

/* ---- Characters and forbidden text ---- */
check('no em dash (U+2014)', !html.includes('—'))
check('no literal [CONFIRM placeholder', !/\[CONFIRM/i.test(html))

// Allow-listed exact phrases (negated scope, the one softened chemical-cleaner line, the cost/time FAQ "no set time").
const SCOPE_SHORT =
  'We provide cleaning, camera diagnostics, and line locating only. We do not provide sewer repair, replacement, lining, excavation, or pipe installation.'
// The shared independent band (IndependentProcess, DEC-132/133) names the owner-confirmed camera brand; it is not page copy and is not overridden here.
const SHARED_BAND_EQUIPMENT =
  'We use RIDGID sewer camera equipment to examine the line for blockages, roots, damage, offsets, standing water, and other visible conditions.'
const ALLOW = [SCOPE_FULL, SCOPE_SHORT, 'not likely to clear a main-line backup', SHARED_BAND_EQUIPMENT]
// The Organization node is site-wide (its offer catalog lists every service family); only the page-level nodes are scanned.
const pageLdText = JSON.stringify(graph.filter((n) => !['Organization', 'WebSite'].includes(n['@type'])))
let scanText = flat(`${visible} ${pageLdText}`).toLowerCase()
for (const phrase of ALLOW) scanText = scanText.split(flat(phrase).toLowerCase()).join(' ')
const forbidden = [
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
  'nassco',
  'state-of-the-art',
  'trusted local',
  'no-dig',
  'non-invasive',
  'commercial',
  'restaurant',
  'property manager',
  'we recommend an interval',
  'we repair',
  'we replace',
  'we install',
  'ridgid',
  'seesnake',
  'seektech',
  'mongoose',
]
const hits = forbidden.filter((w) => scanText.includes(w))
check('no forbidden claim words', hits.length === 0, hits.join(', '))
check('no psi or GPM figures', !/\b(psi|gpm)\b/i.test(scanText))
check('no sewer repair or replacement offered ("we provide/offer ... repair") outside the negated scope statements', !/we (?:also )?(?:offer|provide) (?:sewer )?(?:repair|replacement)/i.test(scanText))
check('no dollar price', !/\$\s?\d/.test(visible))
check('no duration in minutes or hours', !/\b\d+\s*(?:-|to)?\s*\d*\s*(?:minutes?|hours?)\b/i.test(visible))
check('no interval in months or years', !/\b\d+\s*(?:-|to)?\s*\d*\s*(?:months?|years?)\b/i.test(visible))
check('"survey" appears only as "not a survey"', count(/survey/gi, visible) === count(/not a survey/gi, visible))
check(
  'deliverables: video and written findings stated as included',
  /Inspection video and written findings are included with our service\./.test(visible) &&
    /You receive the inspection video and written findings/.test(visible),
)
check('second look is "when included in the visit"', /when included in the visit/.test(visible))
check('no claim of coding, certified personnel, plan, membership or turnaround', !/certified|membership|recurring plan|turnaround|within \d+/i.test(visible))
check('no claim of cable cleaning', !/cable clean|snak(e|ing)/i.test(visible))
const requestSection = (main.match(/<section[^>]*aria-labelledby="request"[\s\S]*?<\/section>/) || [''])[0]
check('full scope statement present in the request section', flat(strip(requestSection)).includes(flat(SCOPE_FULL)))
check('final request intro lines present', /We will talk through access and what a visit would include for your property\./.test(strip(requestSection)))

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
check('no honeypot or hidden field', !/type="hidden"/.test(main))

console.log(failures === 0 ? '\nAll checks passed.' : `\n${failures} check(s) FAILED.`)
process.exit(failures === 0 ? 0 : 1)
