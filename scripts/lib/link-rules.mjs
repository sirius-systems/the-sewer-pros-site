/**
 * Internal-linking rules shared by the audit and the gate.
 * Policy: docs/16-internal-linking-strategy.md section 126 and
 * docs/source-reports/internal-link-audit-2026-10-27.md.
 */
import fs from 'node:fs'
import path from 'node:path'

const registry = JSON.parse(fs.readFileSync(path.resolve('data/services/master-service-registry.json'), 'utf8'))

/** slug -> registered service name, from the service registry (ampersands included). */
export const SERVICE_NAMES = Object.fromEntries(registry.services.map((s) => [s.slug, s.name]))

export const MARKETS = ['st-louis-mo', 'san-diego-ca', 'las-vegas-nv']

/** Anchors that say nothing about the target. */
export const GENERIC_ANCHORS = /^(click here|here|learn more|read more|more|this page|this link|link|see more|view more|view|details|read this|find out more|more info|more information|go|continue|read on)$/i

/** Distinct internal destinations allowed on one page, nav and footer included. */
export const HIERARCHY_CEILING = 100

export const isCommercialPath = (p) => /(^|\/)(commercial|contractors?|business(es)?|restaurants?|property-management-commercial)(\/|$)/i.test(p)

export function marketOf(url) {
  const m = url.match(/^\/locations\/([^/]+)\//) || url.match(/^\/([^/]+)\//)
  return m && MARKETS.includes(m[1]) ? m[1] : null
}

const parts = (u) => u.split('/').filter(Boolean)

/** Breadcrumb ancestors a page must link to, from its URL structure. */
export function expectedBreadcrumb(u) {
  const s = parts(u)
  if (u === '/') return []
  if (s[0] === 'locations' && s.length === 4) return ['/', '/locations/', `/${s[1]}/`, `/locations/${s[1]}/${s[2]}/`]
  if (s[0] === 'locations' && s.length === 3) return ['/', '/locations/', `/${s[1]}/`]
  if (s[0] === 'services' && s.length === 2) return ['/', '/services/']
  if (s[0] === 'for' && s.length === 2) return ['/', '/for/']
  if (s[0] === 'resources' && s.length === 2) return ['/', '/resources/']
  if (MARKETS.includes(s[0]) && s.length === 1) return ['/', '/locations/']
  return ['/']
}

/** Parent/child links each page type must carry. Returns [{ url, rule, missing }]. */
export function hierarchyIssues(u, P, links) {
  const out = []
  const has = (t) => links.some((l) => l.path === t)
  const need = (rule, targets) => {
    for (const t of targets) if (P[t] && !has(t)) out.push({ url: u, rule, missing: t })
  }
  const pg = P[u]
  const s = parts(u)
  if (pg.type === 'service-location') {
    need('service+location links up to its location hub', [`/locations/${s[1]}/${s[2]}/`])
    need('service+location links up to its market hub', [`/${s[1]}/`])
    need('service+location links up to its core service page', [`/services/${s[3]}/`])
  } else if (pg.type === 'location') {
    need('location hub links up to its market hub', [`/${s[1]}/`])
    const kids = new Set(links.filter((l) => l.path.startsWith(u) && l.path !== u).map((l) => l.path))
    if (kids.size < 3) out.push({ url: u, rule: 'location hub links to at least 3 of its service+location pages', missing: `${kids.size} found` })
  } else if (pg.type === 'market-hub') {
    const kids = Object.keys(P).filter((k) => k.startsWith(`/locations/${s[0]}/`) && parts(k).length === 3)
    need('market hub links to each of its location hubs', kids)
    need('market hub links to the locations hub', ['/locations/'])
  } else if (pg.type === 'service') {
    if (!links.some((l) => /^\/for\/[^/]+\/$/.test(l.path))) out.push({ url: u, rule: 'core service links to at least one audience page', missing: '/for/*' })
    if (!links.some((l) => MARKETS.some((m) => l.path === `/${m}/`))) out.push({ url: u, rule: 'core service links to at least one market hub', missing: '/{market}/' })
  } else if (pg.type === 'audience') {
    if (!links.some((l) => /^\/services\/[^/]+\/$/.test(l.path))) out.push({ url: u, rule: 'audience page links to at least one service', missing: '/services/*' })
    if (!links.some((l) => MARKETS.some((m) => l.path === `/${m}/`))) out.push({ url: u, rule: 'audience page links to at least one market hub', missing: '/{market}/' })
  } else if (pg.type === 'resource') {
    if (!links.some((l) => /^\/services\/[^/]+\/$/.test(l.path))) out.push({ url: u, rule: 'resource links to at least one service page', missing: '/services/*' })
  }
  return out
}
