/**
 * Canonical-service coverage, cluster matrix, money-page and contextual-link analysis.
 * Reads the link graph from scripts/lib/link-graph.mjs (static export in out/).
 */
import fs from 'node:fs'
import path from 'node:path'
import { CHROME, isIndexable } from '../lib/link-graph.mjs'

const TEMPLATE = 'lib/links/link-plan.ts'

/** SERVICE_RELATIONS parsed from the link plan, so the audit and the site share one source. */
export function serviceRelations() {
  const src = fs.readFileSync(path.resolve(TEMPLATE), 'utf8')
  const block = src.slice(src.indexOf('SERVICE_RELATIONS'))
  const body = block.slice(block.indexOf('{'), block.indexOf('\n}\n') + 2)
  const rel = {}
  for (const m of body.matchAll(/'(svc-[a-z-]+)':\s*\[([^\]]*)\]/g)) rel[m[1]] = [...m[2].matchAll(/'(svc-[a-z-]+)'/g)].map((x) => x[1])
  return rel
}
const slug = (id) => id.replace(/^svc-/, '')
const svcPath = (id) => `/services/${slug(id)}/`

/** Audience -> lead service(s), as in link-plan AUDIENCE_SERVICE (09 audience matrix). */
export const AUDIENCE_LEAD = {
  '/for/home-buyers/': ['pre-purchase-sewer-inspection'],
  '/for/home-sellers/': ['pre-purchase-sewer-inspection'],
  '/for/real-estate-agents/': ['pre-purchase-sewer-inspection'],
  '/for/home-inspectors/': ['pre-purchase-sewer-inspection'],
  '/for/property-managers/': ['preventative-sewer-maintenance'],
  '/for/hoa-communities/': ['preventative-sewer-maintenance'],
}
/** Guides and comparisons -> the service they explain. */
export const GUIDE_SERVICE = {
  '/resources/how-to-read-a-sewer-camera-inspection-video/': ['sewer-camera-inspection'],
  '/resources/what-is-in-a-sewer-camera-inspection-report/': ['sewer-camera-inspection'],
  '/resources/st-louis-sewer-lateral-report/': ['pre-purchase-sewer-inspection'],
  '/resources/st-louis-city-sewer-lateral-program/': ['sewer-camera-inspection'],
  '/resources/st-louis-county-sewer-lateral-program/': ['sewer-camera-inspection'],
  '/resources/questions-to-ask-before-approving-sewer-line-replacement/': ['sewer-camera-inspection'],
  '/compare/hydro-jetting-vs-sewer-snaking/': ['hydro-jetting'],
  '/compare/independent-sewer-inspection-vs-repair-company/': ['sewer-camera-inspection'],
}

export function expectedCanonical(url, type) {
  const m = url.match(/^\/locations\/[^/]+\/[^/]+\/([^/]+)\/$/)
  if (m) return [m[1]]
  return AUDIENCE_LEAD[url] ?? GUIDE_SERVICE[url] ?? null
}

const editorial = (pg) => pg.out.filter((l) => l.kind === 'internal' && !CHROME.has(l.zone))
const contextual = (l) => l.prose || l.zone === 'faq' || l.zone.startsWith('body:faq')

export function canonicalCoverage(graph) {
  const P = graph.pages
  const fam = {}
  const gaps = []
  for (const u of Object.keys(P)) {
    if (!isIndexable(P[u])) continue
    const want = expectedCanonical(u, P[u].type)
    if (!want) continue
    const family = P[u].type
    const f = (fam[family] ??= { pages: 0, anyContent: 0, contextual: 0, faq: 0 })
    f.pages++
    const links = editorial(P[u])
    const hit = (pred) => want.some((s) => links.some((l) => l.path === `/services/${s}/` && pred(l)))
    if (hit(() => true)) f.anyContent++
    else gaps.push({ url: u, family, missing: want.map((s) => `/services/${s}/`), reason: 'no body, FAQ or card link' })
    if (hit(contextual)) f.contextual++
    else if (hit(() => true)) gaps.push({ url: u, family, missing: want.map((s) => `/services/${s}/`), reason: 'linked only from cards or modules, no contextual link', soft: true })
    if (hit((l) => l.zone === 'faq' || l.zone.startsWith('body:faq'))) f.faq++
  }
  // A local page must link the canonical service, not only a sibling local page for the same service.
  const substitute = []
  for (const u of Object.keys(P)) {
    const m = u.match(/^\/locations\/([^/]+)\/([^/]+)\/([^/]+)\/$/)
    if (!m) continue
    const sameServiceLocal = editorial(P[u]).filter((l) => l.path !== u && new RegExp(`^/locations/[^/]+/[^/]+/${m[3]}/$`).test(l.path))
    if (sameServiceLocal.length && !editorial(P[u]).some((l) => l.path === `/services/${m[3]}/`)) substitute.push({ url: u, links: sameServiceLocal.map((l) => l.path) })
  }
  return { families: fam, gaps, substitute }
}

export function clusterMatrix(graph) {
  const P = graph.pages
  const rel = serviceRelations()
  const edgesOf = (u) => new Set(editorial(P[u] ?? { out: [] }).map((l) => l.path))
  const clusters = { 'Independent Inspection': [], 'Real Estate': [], Cleaning: [], 'Local Markets': [] }
  const addEdge = (c, from, to, kind) => {
    if (!P[from] || !P[to] || from === to) return
    clusters[c].push({ from, to, kind, ok: edgesOf(from).has(to) })
  }
  const INSPECTION = new Set(['svc-sewer-camera-inspection', 'svc-sewer-line-locating', 'svc-pre-purchase-sewer-inspection', 'svc-sewer-cleaning-camera-inspection'])
  for (const [s, rs] of Object.entries(rel)) for (const r of rs) {
    const c = INSPECTION.has(s) && INSPECTION.has(r) ? 'Independent Inspection' : 'Cleaning'
    addEdge(c, svcPath(s), svcPath(r), 'sibling')
    addEdge(c, svcPath(r), svcPath(s), 'sibling (reverse)')
  }
  for (const [a, ss] of Object.entries(AUDIENCE_LEAD)) for (const s of ss) {
    const c = s === 'pre-purchase-sewer-inspection' ? 'Real Estate' : 'Cleaning'
    addEdge(c, a, `/services/${s}/`, 'audience -> service')
    // Preventative Sewer Maintenance deliberately names landlords as text only and avoids property-manager wording (verify-preventative-sewer-maintenance-page.mjs), so its audience links stay one-way.
    if (s === 'pre-purchase-sewer-inspection') addEdge(c, `/services/${s}/`, a, 'service -> audience')
  }
  const markets = Object.keys(P).filter((u) => P[u].type === 'market-hub')
  for (const mh of markets) {
    const mk = mh.replace(/\//g, '')
    const hubs = Object.keys(P).filter((u) => new RegExp(`^/locations/${mk}/[^/]+/$`).test(u))
    // market -> /locations/ is the breadcrumb parent link; it is not a body relationship.
    for (const h of hubs) {
      addEdge('Local Markets', mh, h, 'market -> location')
      addEdge('Local Markets', h, mh, 'location -> market')
      const locals = Object.keys(P).filter((u) => u.startsWith(h) && u !== h)
      for (const l of locals) {
        addEdge('Local Markets', l, h, 'local service -> location')
        addEdge('Local Markets', l, mh, 'local service -> market')
        addEdge('Local Markets', l, `/services/${l.split('/')[4]}/`, 'local service -> canonical service')
      }
    }
  }
  const summary = Object.fromEntries(Object.entries(clusters).map(([c, e]) => [c, { expected: e.length, actual: e.filter((x) => x.ok).length, gaps: e.filter((x) => !x.ok) }]))
  return summary
}

export const MONEY = [
  { name: 'Pre-Purchase Sewer Inspection', path: '/services/pre-purchase-sewer-inspection/' },
  { name: 'Sewer Camera Inspection', path: '/services/sewer-camera-inspection/' },
  { name: 'Sewer Cleaning & Camera Inspection', path: '/services/sewer-cleaning-camera-inspection/' },
  { name: 'Independent second opinion (comparison page; there is no dedicated second-opinion route)', path: '/compare/independent-sewer-inspection-vs-repair-company/' },
]

/** Click depth from the homepage using editorial links only (nav, footer, breadcrumb excluded). */
export function editorialDepth(graph) {
  const P = graph.pages
  const d = { '/': 0 }
  for (const q = ['/']; q.length; ) {
    const u = q.shift()
    for (const l of editorial(P[u])) if (P[l.path] && d[l.path] === undefined) (d[l.path] = d[u] + 1), q.push(l.path)
  }
  return d
}

export function moneyPages(graph) {
  const P = graph.pages
  const idx = Object.keys(P).filter((u) => isIndexable(P[u]))
  const depthE = editorialDepth(graph)
  const inbound = (t, pred) => idx.filter((u) => u !== t && editorial(P[u]).some((l) => l.path === t && pred(l))).length
  const serviceCluster = idx.filter((u) => P[u].type === 'service')
  const rows = MONEY.filter((m) => P[m.path]).map((m) => ({
    ...m,
    inboundEditorial: inbound(m.path, () => true),
    inboundContextual: inbound(m.path, contextual),
    editorialDepth: depthE[m.path] ?? null,
  }))
  const rank = Object.fromEntries(serviceCluster.map((u) => [u, inbound(u, contextual)]))
  return { rows, serviceContextualInbound: rank }
}

/** Pages whose copy names a target that only a card, nav or footer links to. */
export function contextualGaps(graph, entities, mainText) {
  const P = graph.pages
  const gaps = []
  for (const u of Object.keys(P)) {
    if (!isIndexable(P[u]) || P[u].type === 'service-location') continue
    const text = mainText(u)
    if (!text) continue
    const links = editorial(P[u])
    for (const e of entities) {
      if (!['service', 'market', 'audience'].includes(e.kind) || e.target === u) continue
      const hit = e.re.exec(text)
      if (hit === null) continue
      if (links.some((l) => l.path === e.target && contextual(l))) continue
      gaps.push({ url: u, type: P[u].type, kind: e.kind, target: e.target, onlyCardOrModule: links.some((l) => l.path === e.target), snippet: text.slice(Math.max(0, hit.index - 70), hit.index + hit[0].length + 60) })
    }
  }
  return gaps
}
