/**
 * Route resolution.
 *
 * Authority: docs/05-url-routing-strategy.md §69, §72, §76, §77, §130,
 *            §134
 *
 * ===========================================================================
 * RESOLVE BY REGISTRY LOOKUP, NEVER BY INFERENCE
 * ===========================================================================
 * 05 §69: a three-segment market path is ambiguous by shape alone —
 *
 *   /st-louis-mo/st-louis-city/soulard/                  nested geography
 *   /st-louis-mo/st-louis-city/sewer-camera-inspection/  service + location
 *
 * "The system must resolve page identity using the approved pathname
 * registry rather than trying to infer meaning from segment count
 * alone." So nothing here parses meaning out of segments. It joins them
 * into a pathname and asks the registry.
 *
 * 05 §130 forbids runtime route invention; 05 §77 requires unknown paths
 * to 404 rather than fall back to a market, redirect home, or render a
 * thin generic template.
 */

import type { MasterPageRecord } from '@/types'
import { getPageByPathname } from '@/data/pages'
import { isRoutable } from '@/types'
import { pathnameFromSegments } from './pathname'

/**
 * Resolves a pathname to an approved, routable page.
 *
 * Returns undefined for anything not in the registry — the caller must
 * translate that into `notFound()` (05 §77).
 */
export function resolvePathname(pathname: string): MasterPageRecord | undefined {
  const page = getPageByPathname(pathname)
  if (page === undefined) return undefined
  return isRoutable(page) ? page : undefined
}

/**
 * Resolves market catch-all params to an approved page.
 *
 * Reassembles the pathname and looks it up. Deliberately no branching
 * on `segments.length` — see the module header.
 */
export function resolveMarketRoute(
  market: string,
  segments: readonly string[],
): MasterPageRecord | undefined {
  return resolvePathname(pathnameFromSegments([market, ...segments]))
}

/** Resolves a market hub, e.g. `/st-louis-mo/`. */
export function resolveMarketHub(market: string): MasterPageRecord | undefined {
  return resolvePathname(pathnameFromSegments([market]))
}

/** Resolves a page beneath a fixed global prefix, e.g. `/services/`. */
export function resolveUnderPrefix(
  prefix: string,
  segment: string,
): MasterPageRecord | undefined {
  return resolvePathname(`${prefix}${segment}/`)
}
