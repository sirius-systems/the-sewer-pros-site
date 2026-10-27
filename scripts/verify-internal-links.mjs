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
 */
import fs from 'node:fs'
import path from 'node:path'
import { buildGraph, isIndexable, CHROME } from './lib/link-graph.mjs'
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

console.log(failures === 0 ? '\nAll checks passed.' : `\n${failures} check(s) FAILED.`)
process.exit(failures === 0 ? 0 : 1)
