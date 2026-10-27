/**
 * Internal link audit over the static export in `out/`.
 *
 *   node scripts/audit-internal-links.mjs [report.json]
 *
 * Prints a summary and optionally writes the full findings as JSON. The same
 * rules are enforced as a gate by scripts/verify-internal-links.mjs.
 */
import fs from 'node:fs'
import { buildGraph, isIndexable, CHROME } from './lib/link-graph.mjs'
import { SERVICE_NAMES, GENERIC_ANCHORS, HIERARCHY_CEILING, expectedBreadcrumb, hierarchyIssues, marketOf, isCommercialPath } from './lib/link-rules.mjs'

const g = buildGraph()
const P = g.pages
const urls = Object.keys(P)
const idx = urls.filter((u) => isIndexable(P[u]))
const idxSet = new Set(idx)
const internal = (u) => P[u].out.filter((l) => l.kind === 'internal')
const editorial = (u) => internal(u).filter((l) => !CHROME.has(l.zone))
const fromEditorial = (t) => new Set(urls.filter((u) => u !== t && idxSet.has(u) && editorial(u).some((l) => l.path === t)))
const fromAny = (t) => new Set(urls.filter((u) => u !== t && idxSet.has(u) && internal(u).some((l) => l.path === t)))

const R = {}

/* Orphans and weak pages */
R.orphans = idx.filter((u) => fromAny(u).size === 0)
R.editorialOrphans = idx.filter((u) => fromEditorial(u).size === 0)
R.weak = idx
  .map((u) => ({ url: u, type: P[u].type, editorialInbound: fromEditorial(u).size, anyInbound: fromAny(u).size }))
  .filter((x) => x.editorialInbound < 3)
  .sort((a, b) => a.editorialInbound - b.editorialInbound)

/* Broken, stale, commercial, noindex-bound */
const broken = []
const oldPattern = []
const commercial = []
const toNoindex = []
for (const u of idx) {
  for (const l of internal(u)) {
    if (isCommercialPath(l.path)) commercial.push({ from: u, to: l.path, text: l.text, zone: l.zone })
    if (!P[l.path]) {
      const old = /^\/(st-louis-mo|san-diego-ca|las-vegas-nv)\/[^/]+\/$/.test(l.path) && !/\/contact\/$/.test(l.path)
      ;(old ? oldPattern : broken).push({ from: u, to: l.path, text: l.text, zone: l.zone })
    } else if (!isIndexable(P[l.path]) && !['/contact/thank-you/'].includes(l.path)) {
      toNoindex.push({ from: u, to: l.path, text: l.text, zone: l.zone })
    }
  }
}
R.broken = broken
R.oldPattern = oldPattern
R.commercial = commercial
R.toNoindex = toNoindex

/* Anchor problems */
const generic = []
const anchorsByTarget = {}
const targetsByAnchor = {}
const serviceMismatch = []
for (const u of idx) {
  for (const l of internal(u)) {
    if (CHROME.has(l.zone) && l.zone !== 'breadcrumb') continue
    const t = l.text.toLowerCase().replace(/[.!→›»]+$/g, '').trim()
    if (GENERIC_ANCHORS.test(t) || t === '') generic.push({ from: u, to: l.path, text: l.text, zone: l.zone })
    if (t) {
      ;(anchorsByTarget[l.path] ??= {})[t] = (anchorsByTarget[l.path][t] ?? 0) + 1
      ;((targetsByAnchor[t] ??= new Set())).add(l.path)
    }
    const svcSlug = (l.path.match(/^\/services\/([^/]+)\/$/) || l.path.match(/^\/locations\/[^/]+\/[^/]+\/([^/]+)\/$/) || [])[1]
    if (svcSlug && SERVICE_NAMES[svcSlug]) {
      const name = SERVICE_NAMES[svcSlug].toLowerCase()
      if (!t.includes(name) && !(P[l.path] && t === (P[l.path].h1 || '').toLowerCase())) serviceMismatch.push({ from: u, to: l.path, text: l.text, zone: l.zone })
    }
  }
}
R.genericAnchors = generic
R.sameAnchorManyTargets = Object.entries(targetsByAnchor)
  .filter(([a, s]) => s.size > 1 && a.length > 0 && !/^(contact|about|faq|services|home)$/.test(a))
  .map(([a, s]) => ({ anchor: a, targets: s.size, sample: [...s].slice(0, 4) }))
  .sort((a, b) => b.targets - a.targets)
R.targetManyAnchors = Object.entries(anchorsByTarget)
  .map(([t, m]) => ({ target: t, distinct: Object.keys(m).length, anchors: m }))
  .filter((x) => x.distinct >= 6 && !/^\/(services|locations|for|resources)?\/?$/.test(x.target))
  .sort((a, b) => b.distinct - a.distinct)
R.serviceNameMismatch = serviceMismatch

/* Hierarchy */
R.hierarchy = urls.filter((u) => idxSet.has(u)).flatMap((u) => hierarchyIssues(u, P, internal(u)))

/* Cross-market */
const xm = []
for (const u of idx) {
  const m = marketOf(u)
  if (!m) continue
  for (const l of editorial(u)) {
    const tm = marketOf(l.path)
    if (tm && tm !== m) xm.push({ from: u, to: l.path, text: l.text, zone: l.zone })
  }
}
R.crossMarket = xm

/* Breadcrumbs */
R.breadcrumb = idx
  .map((u) => {
    const got = internal(u).filter((l) => l.zone === 'breadcrumb').map((l) => l.path)
    const want = expectedBreadcrumb(u)
    return { url: u, got, want, ok: want.every((w) => got.includes(w)) }
  })
  .filter((x) => !x.ok)

/* Link counts */
R.counts = urls.map((u) => {
  const zones = {}
  for (const l of internal(u)) zones[l.zone.split(':')[0]] = (zones[l.zone.split(':')[0]] ?? 0) + 1
  return { url: u, type: P[u].type, total: internal(u).length, distinct: new Set(internal(u).map((l) => l.path)).size, zones }
})
R.overCeiling = R.counts.filter((c) => c.total > HIERARCHY_CEILING)
const byType = {}
for (const c of R.counts) (byType[c.type] ??= []).push(c)
R.byType = Object.fromEntries(
  Object.entries(byType).map(([t, a]) => [
    t,
    {
      pages: a.length,
      avgTotalLinks: +(a.reduce((s, c) => s + c.total, 0) / a.length).toFixed(1),
      avgBodyLinks: +(a.reduce((s, c) => s + (c.total - (c.zones.nav ?? 0) - (c.zones.footer ?? 0) - (c.zones.chrome ?? 0) - (c.zones.breadcrumb ?? 0)), 0) / a.length).toFixed(1),
      avgEditorialInbound: +(a.reduce((s, c) => s + (idxSet.has(c.url) ? fromEditorial(c.url).size : 0), 0) / a.length).toFixed(1),
    },
  ]),
)
R.summary = {
  pages: urls.length,
  indexable: idx.length,
  orphans: R.orphans.length,
  editorialOrphans: R.editorialOrphans.length,
  under3EditorialInbound: R.weak.length,
  broken: R.broken.length,
  oldPattern: R.oldPattern.length,
  commercial: R.commercial.length,
  toNoindex: R.toNoindex.length,
  genericAnchors: R.genericAnchors.length,
  serviceNameMismatch: R.serviceNameMismatch.length,
  hierarchyGaps: R.hierarchy.length,
  crossMarket: R.crossMarket.length,
  breadcrumbMismatch: R.breadcrumb.length,
  overCeiling: R.overCeiling.length,
}
console.log(JSON.stringify(R.summary, null, 2))
console.log(JSON.stringify(R.byType, null, 2))
if (process.argv[2]) fs.writeFileSync(process.argv[2], JSON.stringify(R, null, 1))
