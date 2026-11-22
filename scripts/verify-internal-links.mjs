/**
 * Post-build internal-link gate for the static export in `out/`.
 *
 *   node scripts/verify-internal-links.mjs
 *
 * Run `npm run build` first. Exits 1 on any failure. Rules and rationale:
 * docs/16-internal-linking-strategy.md section 126 and
 * docs/source-reports/internal-link-audit-2026-10-27.md.
 *
 * Fails on:
 *   - orphan pages (no inbound link from another indexable page)
 *   - indexable pages (other than the homepage) with fewer than MIN_INBOUND
 *     inbound links from page content (nav, footer and breadcrumbs excluded)
 *   - broken internal links, links to old /{market}/{location}/ routes,
 *     links to removed commercial pages, links to noindex or non-sitemap pages
 *   - missing hierarchy links (service+location -> location hub, market hub,
 *     core service; location hub -> market hub and its service pages; market
 *     hub -> its location hubs; core service and audience pages -> audience
 *     or service and market pages; resources -> a service)
 *   - generic anchor text
 *   - breadcrumbs that do not follow the URL structure
 *   - cross-market links in page content
 *   - more than MAX_DISTINCT distinct internal destinations on one page
 *   - more than MAX_SIBLING_LINKS content links from one service+location page
 *     to other service+location pages (the bounded sibling rule)
 *   - planned slots out of bounds: core service "Related guides" (max 3, guides
 *     only, report and video guides on pre-purchase and camera pages), audience
 *     "Where we serve" (3 market hubs, 1 to 3 local pages one per market), market
 *     contact "Before you reach out" (FAQ and two audiences), hub guides (max 3)
 *   - markup in FAQPage JSON-LD answers (the schema text stays plain)
 *   - a spoke page (service + location, audience, guide, comparison) with no link to its
 *     canonical service, and one exact anchor above 40% of the editorial links to a target
 *     (baselined targets may not get worse), and generic anchors in FAQ answers
 *   - FAQPage text that differs from the visible FAQ answer, a link inside a
 *     question, and FAQ answer links to missing, noindex or non-sitemap pages
 *     or to the page itself
 */
import fs from 'node:fs'
import path from 'node:path'
import { buildGraph, isIndexable, CHROME, normHref } from './lib/link-graph.mjs'
import { runFaqAudit } from './audit/faq-audit.mjs'
import { anchorStats, MAX_SHARE, MIN_LINKS } from './audit/anchors.mjs'
import { canonicalCoverage } from './audit/clusters.mjs'
import { GENERIC_ANCHORS, HIERARCHY_CEILING, expectedBreadcrumb, hierarchyIssues, marketOf, isCommercialPath } from './lib/link-rules.mjs'

const MIN_INBOUND = 2
const MAX_DISTINCT = HIERARCHY_CEILING
const MAX_SIBLING_LINKS = 12

const g = buildGraph()
const P = g.pages
const urls = Object.keys(P)
const idx = urls.filter((u) => isIndexable(P[u]))
const idxSet = new Set(idx)
const internal = (u) => P[u].out.filter((l) => l.kind === 'internal')
const editorial = (u) => internal(u).filter((l) => !CHROME.has(l.zone))

let failures = 0
const check = (name, bad, show = (b) => b) => {
  const ok = bad.length === 0
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}${ok ? '' : `: ${bad.length}`}`)
  if (!ok) {
    for (const b of bad.slice(0, 8)) console.log(`        ${typeof b === 'string' ? b : show(b)}`)
    if (bad.length > 8) console.log(`        ... and ${bad.length - 8} more`)
    failures += 1
  }
}
const fmt = (b) => `${b.from ?? b.url} -> ${b.to ?? b.missing ?? ''} ${b.text !== undefined ? `[${b.text}]` : ''} ${b.rule ?? ''}`.trim()

console.log(`INFO  ${urls.length} pages, ${idx.length} indexable\n`)

check('no orphan pages (every indexable page has an inbound link from another indexable page)', idx.filter((u) => !urls.some((v) => v !== u && idxSet.has(v) && internal(v).some((l) => l.path === u))))

check(
  `every indexable page except the homepage has >= ${MIN_INBOUND} inbound links from page content`,
  idx.filter((u) => u !== '/' && u !== '/contact/thank-you/' && new Set(urls.filter((v) => v !== u && idxSet.has(v) && editorial(v).some((l) => l.path === u))).size < MIN_INBOUND),
)

const broken = []
const oldRoute = []
const commercial = []
const toNoindex = []
const generic = []
const crossMarket = []
for (const u of urls) {
  for (const l of internal(u)) {
    if (isCommercialPath(l.path)) commercial.push({ from: u, to: l.path, text: l.text })
    if (!P[l.path]) {
      if (/^\/(st-louis-mo|san-diego-ca|las-vegas-nv)\/[^/]+\/$/.test(l.path) && !/\/contact\/$/.test(l.path)) oldRoute.push({ from: u, to: l.path, text: l.text })
      else broken.push({ from: u, to: l.path, text: l.text })
    } else if (idxSet.has(u) && !isIndexable(P[l.path]) && l.path !== '/contact/thank-you/') {
      toNoindex.push({ from: u, to: l.path, text: l.text })
    }
    if (!CHROME.has(l.zone) || l.zone === 'breadcrumb') {
      const t = l.text.toLowerCase().replace(/[.!→›»]+$/g, '').trim()
      if (t === '' || GENERIC_ANCHORS.test(t)) generic.push({ from: u, to: l.path, text: l.text })
    }
  }
  const m = marketOf(u)
  if (m && idxSet.has(u)) for (const l of editorial(u)) if (marketOf(l.path) && marketOf(l.path) !== m) crossMarket.push({ from: u, to: l.path, text: l.text })
}
check('no broken internal links', broken, fmt)
check('no links to old /{market}/{location}/ routes', oldRoute, fmt)
check('no links to removed commercial pages', commercial, fmt)
check('no indexable page links to a noindex or non-sitemap page', toNoindex, fmt)
check('no generic anchor text', generic, fmt)
check('no cross-market links in page content', crossMarket, fmt)

check('hierarchy links present (parents, children, audiences, markets)', idx.flatMap((u) => hierarchyIssues(u, P, internal(u))), fmt)

check(
  'breadcrumbs follow the URL structure',
  idx
    .map((u) => ({ u, got: internal(u).filter((l) => l.zone === 'breadcrumb').map((l) => l.path), want: expectedBreadcrumb(u) }))
    .filter((x) => !x.want.every((w) => x.got.includes(w)))
    .map((x) => `${x.u} expected ${x.want.join(' > ')}, found ${x.got.join(' > ')}`),
)

check(
  `no page has more than ${MAX_DISTINCT} distinct internal destinations (nav and footer included)`,
  urls.map((u) => ({ u, n: new Set(internal(u).map((l) => l.path)).size })).filter((x) => x.n > MAX_DISTINCT).map((x) => `${x.u}: ${x.n}`),
)

check(
  `a service+location page links to at most ${MAX_SIBLING_LINKS} other service+location pages (bounded sibling rule)`,
  urls
    .filter((u) => P[u].type === 'service-location')
    .map((u) => ({ u, n: new Set(editorial(u).filter((l) => P[l.path]?.type === 'service-location' && l.path !== u).map((l) => l.path)).size }))
    .filter((x) => x.n > MAX_SIBLING_LINKS)
    .map((x) => `${x.u}: ${x.n}`),
)

check(
  'a location hub links to at most 6 of its own service+location pages and at least 3',
  urls
    .filter((u) => P[u].type === 'location')
    .map((u) => ({ u, n: new Set(editorial(u).filter((l) => P[l.path]?.type === 'service-location' && l.path.startsWith(u)).map((l) => l.path)).size }))
    .filter((x) => x.n < 3 || x.n > 6)
    .map((x) => `${x.u}: ${x.n}`),
)

/* ---- Planned slots (lib/links/link-plan.ts) ---- */
const inZone = (u, zone) => editorial(u).filter((l) => l.zone === zone)
const MAX_GUIDES = 3

check(
  `core service "Related guides" slot has at most ${MAX_GUIDES} guide links`,
  urls.filter((u) => P[u].type === 'service' && new Set(inZone(u, 'body:related-guides').map((l) => l.path)).size > MAX_GUIDES).map((u) => u),
)
check(
  'Pre-Purchase Sewer Inspection and Sewer Camera Inspection link the report and video guides from the slot',
  ['/services/pre-purchase-sewer-inspection/', '/services/sewer-camera-inspection/'].flatMap((u) =>
    ['/resources/what-is-in-a-sewer-camera-inspection-report/', '/resources/how-to-read-a-sewer-camera-inspection-video/']
      .filter((g) => !inZone(u, 'body:related-guides').some((l) => l.path === g))
      .map((g) => `${u} -> ${g}`),
  ),
)
check(
  'a "Related guides" slot only links guides and comparisons (no service or sales page)',
  urls.flatMap((u) => inZone(u, 'body:related-guides').filter((l) => !/^\/(resources|compare)\//.test(l.path)).map((l) => ({ from: u, to: l.path, text: l.text }))),
  fmt,
)
check(
  'location-hub guide block has at most 3 guide links',
  urls.filter((u) => P[u].type === 'location' && new Set(inZone(u, 'aside:local-guides').map((l) => l.path)).size > MAX_GUIDES),
)
check(
  'audience pages link the three launch market hubs and 1 to 3 local service pages, one per market',
  urls
    .filter((u) => P[u].type === 'audience')
    .flatMap((u) => {
      const slot = inZone(u, 'body:where-we-serve').map((l) => l.path)
      const hubs = new Set(slot.filter((p) => P[p]?.type === 'market-hub'))
      const local = [...new Set(slot.filter((p) => P[p]?.type === 'service-location'))]
      const markets = new Set(local.map(marketOf))
      const out = []
      if (hubs.size !== 3) out.push(`${u}: ${hubs.size} market hubs`)
      if (local.length < 1 || local.length > 3 || markets.size !== local.length) out.push(`${u}: ${local.length} local pages in ${markets.size} markets`)
      return out
    }),
)
check(
  'market contact pages link the FAQ and two audience pages',
  urls
    .filter((u) => P[u].type === 'market-contact')
    .flatMap((u) => {
      const slot = inZone(u, 'body:helpful-pages').map((l) => l.path)
      const aud = new Set(slot.filter((p) => P[p]?.type === 'audience'))
      const out = []
      if (!slot.includes('/faq/')) out.push(`${u}: no FAQ link`)
      if (aud.size !== 2) out.push(`${u}: ${aud.size} audience links`)
      return out
    }),
)

// FAQPage JSON-LD answers must be plain text (links live only in the visible HTML).
const markup = []
for (const u of urls) {
  const file = path.join(g.root, u === '/' ? '' : u, 'index.html')
  const html = fs.readFileSync(file, 'utf8')
  for (const m of html.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)) {
    let ld
    try {
      ld = JSON.parse(m[1])
    } catch {
      continue
    }
    const nodes = ld['@graph'] ?? [ld]
    for (const n of nodes) {
      if (n['@type'] !== 'FAQPage') continue
      for (const q of n.mainEntity ?? []) {
        const t = q.acceptedAnswer?.text ?? ''
        if (/<\/?[a-z][^>]*>/i.test(t) || /href=/i.test(t)) markup.push(`${u}: ${q.name}`)
      }
    }
  }
}
check('FAQPage JSON-LD answers are plain text (no markup or links)', markup)

// FAQ blocks: schema text equals the visible answer, no links in questions, answer links are eligible.
const faq = runFaqAudit(g, g.root)
check('FAQPage text equals the visible FAQ answer text and no question carries a link', faq.schemaMismatch.map((m) => `${m.url}: ${m.reason}: ${m.q}`))
// Reads every FAQ layout (accordion and the service + location tabs) through the shared FAQ parser.
const faqLinkIssues = []
for (const ans of faq.answers) {
  for (const l of ans.links) {
    const n = normHref(l.href)
    if (n.kind !== 'internal') continue
    if (n.path === ans.url) faqLinkIssues.push(`${ans.url}: FAQ answer links to its own page`)
    else if (!P[n.path]) faqLinkIssues.push(`${ans.url}: FAQ answer link to missing ${n.path}`)
    else if (!isIndexable(P[n.path])) faqLinkIssues.push(`${ans.url}: FAQ answer link to noindex ${n.path}`)
  }
}
check('FAQ answer links resolve to existing, indexable pages other than the page itself', faqLinkIssues)

// Generic anchors in FAQ answers (the page-wide check above already covers body content).
check(
  'no generic anchor text in FAQ answers',
  faq.answers.flatMap((ans) => ans.links.filter((l) => GENERIC_ANCHORS.test(l.text.toLowerCase().replace(/[.!→›»]+$/g, '').trim())).map((l) => `${ans.url}: "${l.text}"`)),
)

// Every spoke links to its canonical service (item 1 of the 2026-11-22 follow-up).
const cc = canonicalCoverage(g)
check(
  'every service + location, audience, guide and comparison page links to its canonical service in body, FAQ or card content',
  cc.gaps.filter((x) => !x.soft).map((x) => `${x.url}: missing ${x.missing.join(', ')}`),
)
check(
  'no service + location page links a same-service local page instead of the canonical service',
  cc.substitute.map((x) => `${x.url} -> ${x.links.join(', ')}`),
)

// Anchor variety: one exact anchor may not be more than MAX_SHARE of the editorial links to a target.
// Targets already over the line when the check was added are listed in the baseline file; they may
// not get worse, and a new target over the line fails.
const baseline = JSON.parse(fs.readFileSync(path.resolve('scripts/lib/anchor-variety-baseline.json'), 'utf8')).targets
const av = anchorStats(g, faq.answers).violations.filter((v) => v.total >= MIN_LINKS)
const avIssues = av
  .filter((v) => baseline[v.target] === undefined || v.topShare > baseline[v.target] + 0.02)
  .map((v) => `${v.target}: "${v.topAnchor}" is ${Math.round(v.topShare * 100)}% of ${v.total} editorial links (limit ${MAX_SHARE * 100}%${baseline[v.target] !== undefined ? `, baseline ${Math.round(baseline[v.target] * 100)}%` : ''})`)
check('no exact anchor is more than 40% of the editorial links to one target (baselined targets may not get worse)', avIssues)
const accepted = av.filter((v) => baseline[v.target] !== undefined && v.topShare <= baseline[v.target] + 0.02)
if (accepted.length) console.log(`INFO  ${accepted.length} baselined anchor-variety target(s) still over the line: ${accepted.map((v) => v.target).join(', ')}`)

console.log(failures === 0 ? '\nAll checks passed.' : `\n${failures} check(s) FAILED.`)
process.exit(failures === 0 ? 0 : 1)
