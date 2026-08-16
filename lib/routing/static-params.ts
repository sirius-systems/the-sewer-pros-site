/**
 * `generateStaticParams()` sources.
 *
 * Authority: docs/05-url-routing-strategy.md §72-76, §129, §134
 *            docs/02-nextjs-technical-architecture.md §21-23, §46
 *
 * ===========================================================================
 * EVERY GENERATOR HERE READS `routablePages` AND NOTHING ELSE
 * ===========================================================================
 * This module deliberately does NOT import the service registry, the
 * location registry, or the matrix. It cannot, by construction, produce
 * a route that is not an approved page.
 *
 * 02 §21 names the forbidden shape explicitly:
 *
 *   services.flatMap((service) =>
 *     locations.map((location) => ({ service, location })))
 *
 * That would turn 10,422 opportunity relationships into public URLs.
 * If a future generator needs registry data, it needs it for CONTENT,
 * not for route existence — resolve the page first, then load content.
 *
 * 05 §72: "A catch-all filesystem route must not accept arbitrary URL
 * permutations. The catch-all exists only to resolve paths in the
 * approved page registry."
 */

import type { MasterPageRecord } from '@/types'
import { routablePages } from '@/data/pages'
import { pathnameSegments, toMarketRouteParams } from './pathname'

/**
 * Returns the single dynamic segment of a page's pathname under a
 * fixed prefix, or undefined if it does not sit directly beneath it.
 */
function segmentUnder(page: MasterPageRecord, prefix: string): string | undefined {
  if (!page.pathname.startsWith(prefix)) return undefined
  const rest = pathnameSegments(page.pathname.slice(prefix.length - 1))
  return rest.length === 1 ? rest[0] : undefined
}

function paramsUnder(prefix: string, key: string): Record<string, string>[] {
  return routablePages
    .map((page) => segmentUnder(page, prefix))
    .filter((segment): segment is string => segment !== undefined)
    .map((segment) => ({ [key]: segment }))
}

/* ==========================================================================
   Global route families — 05 §74
   ========================================================================== */

/** `app/services/[service]/page.tsx` */
export function serviceParams(): { service: string }[] {
  return paramsUnder('/services/', 'service') as { service: string }[]
}

/** `app/commercial/[service]/page.tsx` */
export function commercialServiceParams(): { service: string }[] {
  return paramsUnder('/commercial/', 'service') as { service: string }[]
}

/** `app/for/[audience]/page.tsx` */
export function audienceParams(): { audience: string }[] {
  return paramsUnder('/for/', 'audience') as { audience: string }[]
}

/** `app/compare/[comparison]/page.tsx` */
export function comparisonParams(): { comparison: string }[] {
  return paramsUnder('/compare/', 'comparison') as { comparison: string }[]
}

/** `app/resources/[resource]/page.tsx` */
export function resourceParams(): { resource: string }[] {
  return paramsUnder('/resources/', 'resource') as { resource: string }[]
}

/* ==========================================================================
   Market routes — 05 §70-73
   ========================================================================== */

/** `app/[market]/page.tsx` — the three market hubs. */
export function marketHubParams(): { market: string }[] {
  return routablePages
    .filter((page) => page.pageType === 'market')
    .flatMap((page) => {
      const params = toMarketRouteParams(page.pathname)
      return params === undefined ? [] : [{ market: String(params.market) }]
    })
}

/**
 * `app/[market]/[...segments]/page.tsx`
 *
 * Everything beneath a market hub: location pages, service + location
 * pages, and the St. Louis market-specific service. Segment depth
 * varies (05 §71), which is exactly why the catch-all exists — but the
 * parameter sets still come only from approved pathnames.
 */
export function marketCatchAllParams(): { market: string; segments: string[] }[] {
  return routablePages.flatMap((page) => {
    const params = toMarketRouteParams(page.pathname)
    if (params === undefined || params.segments.length === 0) return []
    return [{ market: String(params.market), segments: params.segments }]
  })
}

/* ==========================================================================
   Coverage check
   ========================================================================== */

/**
 * Pathnames of routable pages not claimed by any generator above.
 *
 * Every approved page must be produced by exactly one route family. A
 * page missing from all of them would silently never build — a 404 on a
 * route the build list approved, which no test would otherwise catch.
 *
 * Static pages (`/`, `/about/`, hubs) have their own files and are
 * expected here; pass their pathnames as `staticRoutes` to exclude them.
 */
export function unroutedPages(staticRoutes: readonly string[]): string[] {
  const claimed = new Set<string>(staticRoutes)

  for (const [prefix, params] of [
    ['/services/', serviceParams().map((p) => p.service)],
    ['/commercial/', commercialServiceParams().map((p) => p.service)],
    ['/for/', audienceParams().map((p) => p.audience)],
    ['/compare/', comparisonParams().map((p) => p.comparison)],
    ['/resources/', resourceParams().map((p) => p.resource)],
  ] as const) {
    for (const segment of params) claimed.add(`${prefix}${segment}/`)
  }

  for (const { market } of marketHubParams()) claimed.add(`/${market}/`)
  for (const { market, segments } of marketCatchAllParams()) {
    claimed.add(`/${market}/${segments.join('/')}/`)
  }

  return routablePages
    .map((page) => page.pathname)
    .filter((pathname) => !claimed.has(pathname))
}
