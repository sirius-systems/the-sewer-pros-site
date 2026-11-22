/**
 * Post-build checks for /services/independent-sewer-inspection-second-opinion/
 * (Service Page Template v2, DEC-151).
 *
 * Reads the static export in `out/` (run `npm run build` first). No
 * dependencies. Exits 1 on any failure.
 *
 *   node scripts/verify-independent-sewer-second-opinion-page.mjs
 *
 * The page is market-neutral (no phone number before the footer, DEC-071),
 * offers no repair, names no equipment (CLAUDE.md section 24) and makes no
 * price, statistic, turnaround, guarantee, licence or availability claim.
 *
 * "Free second opinion" (DEC-148, DEC-151): this page is an allowed
 * placement, hedged only. The check is on the SHAPE of the wording, not on
 * exact sentences, because the wording will change when the owner confirms
 * what "free" covers: every use of "free" must sit in a sentence that is an
 * invitation to ask ("ask about") or a hedge ("may be available"), and
 * "free" must not appear in the title, meta description or H1.
 * FAQPage JSON-LD must equal the visible FAQ (DEC-114).
 */
import fs from 'node:fs'
import path from 'node:path'
import { checkEquipmentNames, checkRelatedCards, checkServiceSchema } from './lib/service-page-checks.mjs'

const ROOT = path.resolve('out')
const PAGE = path.join(ROOT, 'services', 'independent-sewer-inspection-second-opinion', 'index.html')
const PRODUCTION_ORIGIN = 'https://www.thesewerpros.com'
const ORIGIN = (process.env.NEXT_PUBLIC_SITE_URL || PRODUCTION_ORIGIN).replace(/\/+$/, '')
const H1 = 'Told You Need a New Sewer Line? Get a Second Opinion First.'
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
const flat = (s) => s.replace(/[‘’]/g, "'").replace(/[“”]/g, '"')
const slug = (v) => v.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '')

const body = html
  .replace(/<!-- -->/g, '')
  .replace(/<script[\s\S]*?<\/script>/g, '')
  .replace(/<style[\s\S]*?<\/style>/g, '')
const mainStart = body.indexOf('<main')
const mainEnd = body.indexOf('</main>')
const main = mainStart >= 0 && mainEnd > mainStart ? body.slice(mainStart, mainEnd) : body
// The review carousel and the related-guides slot are shared chrome, not this page's copy.
const copyMain = main
  .replace(/<section[^>]*aria-labelledby="related-guides"[\s\S]*?<\/section>/, '')
  .replace(/<section[^>]*aria-labelledby="reviews"[\s\S]*?(?=<section[^>]*aria-labelledby=)/, '')
  .replace(/<span>By checking this box, I consent[^<]*<\/span>/g, '')
const visible = strip(copyMain)

/* ---- Head ---- */
const title = decode((html.match(/<title>([^<]*)<\/title>/) || [])[1] || '')
check('title starts with "Sewer Second Opinion"', title.startsWith('Sewer Second Opinion'), title)
check('title has no "free"', !/free/i.test(title), title)
const canonical = (html.match(/<link rel="canonical" href="([^"]+)"/) || [])[1]
check('canonical', canonical === `${ORIGIN}/services/independent-sewer-inspection-second-opinion/`, canonical)
const robots = (html.match(/<meta name="robots" content="([^"]+)"/) || [])[1]
check('indexable (no noindex)', robots === undefined || !/noindex/i.test(robots), robots)
const desc = decode((html.match(/<meta name="description" content="([^"]*)"/) || [])[1] || '')
check('meta description length (110 to 160)', desc.length >= 110 && desc.length <= 160, String(desc.length))
check('meta description has no "free"', !/free/i.test(desc), desc)
check('meta description says we do not sell repairs', /do not sell repairs/i.test(desc), desc)

/* ---- Headings ---- */
const h1s = [...main.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/g)].map((m) => strip(m[1]))
check('exactly one H1, as approved', h1s.length === 1 && h1s[0] === H1, JSON.stringify(h1s))
check('H1 has no "free"', !/free/i.test(h1s[0] || ''))
const levels = [...main.matchAll(/<h([1-6])[\s>]/g)].map((m) => Number(m[1]))
let skip = false
for (let i = 1; i < levels.length; i += 1) if (levels[i] - levels[i - 1] > 1) skip = true
check('heading order has no skipped level', !skip, levels.join(''))

/* ---- JSON-LD ---- */
const ld = [...html.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map((m) => JSON.parse(m[1]))
check('one JSON-LD block', ld.length === 1, String(ld.length))
const graph = ld[0]?.['@graph'] ?? []
checkServiceSchema({ html, check, origin: ORIGIN, serviceName: 'Independent Sewer Inspection / Second Opinion' })
checkEquipmentNames({ html, check })
const types = graph.map((n) => n['@type'])
const allowed = new Set(['Organization', 'WebSite', 'WebPage', 'Service', 'BreadcrumbList', 'FAQPage'])
check('only the expected node types', types.every((t) => allowed.has(t)), JSON.stringify(types))
const ldText = JSON.stringify(ld)
for (const forbidden of ['LocalBusiness', 'AggregateRating', '"Review"', 'PostalAddress', 'HowTo']) {
  check(`no ${forbidden.replace(/"/g, '')} in JSON-LD`, !ldText.includes(forbidden))
}
const svc = graph.find((n) => n['@type'] === 'Service')
check('Service description is free of repair offer, price, free and availability wording', !!svc?.description && !/price|\bfree\b|same-day|24\/7|emergency|guarantee/i.test(svc.description), svc?.description)

/* ---- Breadcrumb: Home > Services > this page ---- */
const crumb = graph.find((n) => n['@type'] === 'BreadcrumbList')
const crumbNames = (crumb?.itemListElement ?? []).map((i) => i.name)
check('BreadcrumbList ends with this page and sits under Services', crumbNames.length === 3 && /services/i.test(crumbNames[1] || '') && /second opinion/i.test(crumbNames[2] || ''), JSON.stringify(crumbNames))

/* ---- FAQ: visible equals JSON-LD (DEC-114) ---- */
const faqNode = graph.find((n) => n['@type'] === 'FAQPage')
const faqQs = faqNode?.mainEntity ?? []
check('FAQPage has 14 questions', faqQs.length === 14, String(faqQs.length))
const faqSection = (copyMain.match(/<section[^>]*aria-labelledby="faq"[\s\S]*?<\/section>/) || [''])[0]
const faqVisible = flat(strip(faqSection))
let faqOk = faqQs.length > 0
for (const q of faqQs) {
  const a = flat(norm(q.acceptedAnswer.text))
  if (!faqVisible.includes(flat(norm(q.name))) || !faqVisible.includes(a)) {
    faqOk = false
    console.log(`  mismatch: ${q.name}`)
  }
}
check('FAQPage text equals the visible answers', faqOk)

/* ---- Free second opinion: hedged shape only ---- */
const sentences = visible.split(/(?<=[.?!])\s+/)
const freeSentences = sentences.filter((s) => /\bfree\b/i.test(s))
const badFree = freeSentences.filter((s) => !/\?$/.test(s.trim()) && (!/second opinion/i.test(s) || !/(ask about|may be available)/i.test(s)))
check('every "free" is a hedged or "ask about" second opinion sentence', badFree.length === 0, JSON.stringify(badFree))
check('"free" appears at least once (the approved placement is used)', freeSentences.length > 0)
check('no price, discount, "free estimate", "free inspection" or "free quote"', !/free (estimate|inspection|quote|consultation|evaluation)|discount|coupon|\bpric(e|es|ing)\b/i.test(visible))

/* ---- Claims and wording that must not appear ---- */
check('no em dash in visible copy', !visible.includes('—'))
check('no dollar sign, percent figure or digit-based statistic', !/[$%]|\b\d+ (percent|out of)\b/i.test(visible))
// The "is not" list says a second opinion is not a guarantee about what a contractor will find or charge.
check('no guarantee, warranty, licence or insurance wording', !/guarantee|warrant(y|ies)|licen[sc]e|insured|bonded/i.test(visible.replace('A guarantee about what any contractor will find or charge', '')))
check('no 24/7, emergency or same-day wording', !/24\/7|24 hours|emergency|same-day|same day/i.test(visible))
check('no turnaround or response-time claim', !/within \d+|turnaround|(hours|days) (of|after)/i.test(visible))
check('no accusation of other contractors', !/con artist|scam|rip[- ]?off|dishonest|fraud|overcharg|inflate/i.test(visible))
check('no commercial services wording', !/commercial|restaurant|warehouse|facility manager|multi-?tenant/i.test(visible))
check('says we do not perform repairs or replacements', /do not perform (sewer )?repairs or replacements/i.test(visible))
check('does not offer repair as a service', !/we (repair|replace|install|excavate)|our repair|repair services/i.test(visible))
check('no unconfirmed formats, quote review or turnaround promised', !/pdf|email (it|us the)|upload|we (also )?review (your )?(quotes|estimates)/i.test(visible))

/* ---- No phone before the footer (DEC-071) ---- */
const footerIndex = body.indexOf('<footer')
const beforeFooter = footerIndex > 0 ? body.slice(0, footerIndex) : body
const phoneBeforeFooter = /tel:|\(\d{3}\)\s?\d{3}-\d{4}|\b\d{3}[-.]\d{3}[-.]\d{4}\b/.test(beforeFooter.replace(/<script[\s\S]*?<\/script>/g, '').replace(/<section[^>]*aria-labelledby="reviews"[\s\S]*?<\/section>/, ''))
check('no phone number or tel: link before the footer', !phoneBeforeFooter)

/* ---- Links and related cards ---- */
const hrefs = [...copyMain.matchAll(/<a [^>]*href="(\/[^"#]*)[^"]*"/g)].map((m) => m[1])
for (const dest of [
  '/services/sewer-camera-inspection/',
  '/services/pre-purchase-sewer-inspection/',
  '/services/sewer-cleaning-camera-inspection/',
  '/services/hydro-jetting/',
]) {
  check(`links to ${dest}`, hrefs.includes(dest))
}
// Service and comparison routes only: the replacement-questions resource (DEC-158) is an educational guide whose slug names the topic.
check('no link to a repair, lining or replacement service route', !hrefs.some((h) => /^\/(services|compare)\//.test(h) && /repair|replace|lining|trenchless|excavat/i.test(h)))
checkRelatedCards({
  main: copyMain,
  check,
  expectedHrefs: [
    '/services/sewer-camera-inspection/',
    '/services/pre-purchase-sewer-inspection/',
    '/services/sewer-cleaning-camera-inspection/',
    '/services/hydro-jetting/',
  ],
})
const ids = [...main.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1])
check('no duplicate element ids', new Set(ids).size === ids.length)
check('the request section exists', /id="request"/.test(main))

/* ---- Sitemap ---- */
const sitemapPath = path.join(ROOT, 'sitemap.xml')
if (fs.existsSync(sitemapPath)) {
  const sitemap = fs.readFileSync(sitemapPath, 'utf8')
  check('sitemap lists this page', sitemap.includes(`${ORIGIN}/services/independent-sewer-inspection-second-opinion/`))
}
void slug

if (failures > 0) {
  console.log(`\n${failures} check(s) failed.`)
  process.exit(1)
}
console.log('\nAll checks passed.')
