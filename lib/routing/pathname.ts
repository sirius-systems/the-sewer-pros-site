/**
 * Pathname utilities.
 *
 * Authority: docs/05-url-routing-strategy.md §4-5, §9, §52-56, §66,
 *            §110-112, §129
 *
 * Canonical form (05 §66, DEC-061):
 *   starts with "/" · ends with "/" · lowercase · no spaces ·
 *   no underscores · no duplicate slashes · no query · no fragment
 *
 * `isPathname()` and `toPathname()` in `@/types` enforce that shape.
 * This module handles the operations around it: normalising untrusted
 * input, and converting between pathnames and route segments.
 */

import type { MarketId } from '@/types'
import { isMarketId } from '@/types'

/* ==========================================================================
   Reserved segments — 05 §9, §75
   ========================================================================== */

/**
 * Root-level segments reserved for global route families.
 *
 * No market id, service alias, or other entity may claim one. The
 * market catch-all must never receive these, or a market named
 * `services` would shadow `/services/` (05 §75).
 */
export const RESERVED_ROOT_SEGMENTS = [
  'about',
  'contact',
  'faq',
  'services',
  'locations',
  'for',
  'commercial',
  'compare',
  'alternatives',
  'resources',
] as const

/**
 * Segments 05 §9 names as likely future reservations.
 *
 * Kept separate because these are not reserved yet — the pages are not
 * approved. Treat as advisory when choosing new slugs.
 */
export const PROSPECTIVE_RESERVED_SEGMENTS = [
  'privacy',
  'terms',
  'accessibility',
  'reviews',
] as const

export function isReservedRootSegment(segment: string): boolean {
  return (RESERVED_ROOT_SEGMENTS as readonly string[]).includes(segment)
}

/* ==========================================================================
   Normalisation
   ========================================================================== */

/**
 * Normalises untrusted path input toward canonical form.
 *
 * For comparing an inbound path against the registry and for building
 * redirect sources — NOT for producing canonical URLs. Canonical
 * pathnames come from the approved page registry, which stores them
 * already correct (05 §65: "Prefer Stored Canonical Pathnames").
 *
 * Applies, in order:
 *   strip query and fragment      (05 §112)
 *   lowercase                     (05 §53)
 *   underscores to hyphens        (05 §54)
 *   collapse duplicate slashes    (05 §111)
 *   ensure leading slash
 *   ensure trailing slash         (DEC-061)
 *
 * Does NOT transliterate accents or strip apostrophes — 05 §55-56 place
 * that in slug authoring, not request handling, and doing it here would
 * silently map distinct inbound paths onto one route.
 */
export function normalizePathname(input: string): string {
  let path = input.trim()

  const cut = path.search(/[?#]/)
  if (cut !== -1) path = path.slice(0, cut)

  path = path.toLowerCase().replace(/_/g, '-').replace(/\/{2,}/g, '/')

  if (!path.startsWith('/')) path = `/${path}`
  if (!path.endsWith('/')) path = `${path}/`

  return path
}

/**
 * True when the input is already in canonical form.
 *
 * Used to decide whether an inbound path needs a redirect rather than a
 * render (05 §83, §87 — a redirect source must never equal its
 * destination).
 */
export function isCanonicalForm(input: string): boolean {
  return input === normalizePathname(input)
}

/* ==========================================================================
   Segments — 05 §129
   ========================================================================== */

/** Splits a pathname into its segments. `/` yields `[]`. */
export function pathnameSegments(pathname: string): string[] {
  return pathname.split('/').filter((segment) => segment !== '')
}

/** Joins segments into a canonical pathname with a trailing slash. */
export function pathnameFromSegments(segments: readonly string[]): string {
  if (segments.length === 0) return '/'
  return `/${segments.join('/')}/`
}

/**
 * Route parameters for the market catch-all.
 *
 * `/san-diego-ca/carlsbad/sewer-camera-inspection/` becomes
 * `{ market: 'san-diego-ca', segments: ['carlsbad', 'sewer-camera-inspection'] }`
 * exactly as 05 §129 specifies.
 */
export interface MarketRouteParams {
  market: MarketId
  segments: string[]
}

/**
 * Derives market route params from an approved pathname.
 *
 * Returns undefined when the first segment is not an approved market —
 * which is correct for global routes like `/services/hydro-jetting/`,
 * since those belong to their own route families, not the catch-all.
 */
export function toMarketRouteParams(
  pathname: string,
): MarketRouteParams | undefined {
  const segments = pathnameSegments(pathname)
  const [first, ...rest] = segments
  if (first === undefined || !isMarketId(first)) return undefined
  return { market: first, segments: rest }
}
