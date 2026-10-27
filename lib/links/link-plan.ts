/**
 * Central internal-link plan for service + location relationships.
 *
 * Authority: docs/16-internal-linking-strategy.md section 126 (linking rules
 * enforced since 2026-10-27) and docs/source-reports/internal-link-audit-2026-10-27.md.
 *
 * ===========================================================================
 * WHY THIS EXISTS
 * ===========================================================================
 * Before this module the 144 service + location pages had almost no inbound
 * links (130 had none) because nothing connected a location hub, or a
 * sibling page, to them. The fix is a small, bounded set of meaningful
 * relationships, computed here once, rather than a link block of every
 * combination in the service x location matrix (CLAUDE.md section 21, 31).
 *
 * Three rules, each bounded:
 *
 *   1. Location hub -> its TOP services (`TOP_LOCAL_SERVICES`, 5 pages).
 *   2. Service + location page -> its location hub, its core service page,
 *      `SIBLING_SERVICE_COUNT` related services in the SAME location, and
 *      `SIBLING_LOCATION_COUNT` neighbouring locations for the SAME service
 *      in the SAME market (a ring, never the whole market, never another
 *      market).
 *   3. Anchor text is the registered page name ("Sewer Cleaning in
 *      Ballwin"), which carries the registered service name and the place.
 *
 * The ring in (2) is what guarantees every service + location page at least
 * `SIBLING_LOCATION_COUNT` inbound links from same-service siblings: page i
 * in a market of n locations links to i+1, i+2 and i-1, so it is linked from
 * i-1, i-2 and i+1.
 *
 * Everything is derived from the approved page registry, so a page that is
 * not approved, or is gated, never gets a link (RelatedLinks filters gated
 * and unauthored ids as well).
 */

import type { MarketId, PageId, ServiceId } from '@/types'
import { pagesInMarket, pagesOfType } from '@/data/pages'

/** Services a location hub links to directly, in priority order. */
export const TOP_LOCAL_SERVICES: readonly ServiceId[] = [
  'svc-sewer-camera-inspection',
  'svc-pre-purchase-sewer-inspection',
  'svc-sewer-cleaning-camera-inspection',
  'svc-sewer-cleaning',
  'svc-hydro-jetting',
]

/**
 * The next question a visitor asks after each service. Chosen so that a
 * visitor reading one service page is offered the service that naturally
 * follows it, and so that every service appears in at least one list.
 */
export const SERVICE_RELATIONS: Readonly<Record<string, readonly ServiceId[]>> = {
  'svc-sewer-camera-inspection': [
    'svc-sewer-cleaning-camera-inspection',
    'svc-pre-purchase-sewer-inspection',
    'svc-sewer-line-locating',
  ],
  'svc-sewer-cleaning': [
    'svc-hydro-jetting',
    'svc-sewer-cleaning-camera-inspection',
    'svc-recurring-sewer-backup-diagnosis',
  ],
  'svc-hydro-jetting': [
    'svc-sewer-cleaning',
    'svc-drain-cleaning',
    'svc-preventative-sewer-maintenance',
  ],
  'svc-sewer-cleaning-camera-inspection': [
    'svc-sewer-camera-inspection',
    'svc-hydro-jetting',
    'svc-sewer-cleaning',
  ],
  'svc-sewer-line-locating': [
    'svc-sewer-camera-inspection',
    'svc-sewer-cleaning-camera-inspection',
    'svc-pre-purchase-sewer-inspection',
  ],
  'svc-drain-cleaning': [
    'svc-sewer-cleaning',
    'svc-hydro-jetting',
    'svc-recurring-sewer-backup-diagnosis',
  ],
  'svc-pre-purchase-sewer-inspection': [
    'svc-sewer-camera-inspection',
    'svc-sewer-line-locating',
    'svc-sewer-cleaning-camera-inspection',
  ],
  'svc-recurring-sewer-backup-diagnosis': [
    'svc-sewer-camera-inspection',
    'svc-sewer-cleaning',
    'svc-drain-cleaning',
  ],
  'svc-preventative-sewer-maintenance': [
    'svc-sewer-cleaning',
    'svc-hydro-jetting',
    'svc-sewer-camera-inspection',
  ],
}

/** Related services offered in the same location. */
export const SIBLING_SERVICE_COUNT = 2
/** Neighbouring locations offered for the same service (ring size). */
export const SIBLING_LOCATION_COUNT = 3

interface LocalPage {
  id: PageId
  locationId: string
  serviceId: string
  marketId: MarketId
  name: string
}

function localPages(): LocalPage[] {
  return pagesOfType('service-location')
    .filter((p) => p.indexable && p.locationId !== undefined && p.serviceId !== undefined && p.marketId !== undefined)
    .map((p) => ({
      id: p.id,
      locationId: p.locationId as string,
      serviceId: p.serviceId as string,
      marketId: p.marketId as MarketId,
      name: p.name,
    }))
}

/** The service + location page for one service in one location, if it exists. */
export function localServicePageId(locationId: string, serviceId: string): PageId | undefined {
  return localPages().find((p) => p.locationId === locationId && p.serviceId === serviceId)?.id
}

/** A location hub's top service + location pages, in priority order. */
export function topLocalServicePageIds(locationId: string): PageId[] {
  return TOP_LOCAL_SERVICES.map((s) => localServicePageId(locationId, s)).filter((x): x is PageId => x !== undefined)
}

/** Location hub ids of a market, in registry order. */
function marketLocationIds(marketId: MarketId): string[] {
  return pagesInMarket(marketId)
    .filter((p) => p.pageType === 'location' && p.locationId !== undefined)
    .map((p) => p.locationId as string)
}

/**
 * Same-service pages in neighbouring locations of the same market: the next
 * two locations and the previous one in registry order (a ring). Never leaves
 * the market.
 */
export function siblingLocationPageIds(marketId: MarketId, locationId: string, serviceId: string): PageId[] {
  const ring = marketLocationIds(marketId)
  const i = ring.indexOf(locationId)
  if (i < 0 || ring.length < 2) return []
  const offsets = [1, 2, -1].slice(0, SIBLING_LOCATION_COUNT)
  const picked: string[] = []
  for (const o of offsets) {
    const loc = ring[(i + o + ring.length * 2) % ring.length]
    if (loc !== locationId && !picked.includes(loc)) picked.push(loc)
  }
  return picked.map((loc) => localServicePageId(loc, serviceId)).filter((x): x is PageId => x !== undefined)
}

/** Related services in the same location. */
export function siblingServicePageIds(locationId: string, serviceId: string): PageId[] {
  return (SERVICE_RELATIONS[serviceId] ?? [])
    .map((s) => localServicePageId(locationId, s))
    .filter((x): x is PageId => x !== undefined)
    .slice(0, SIBLING_SERVICE_COUNT)
}

/**
 * Local guides each location hub links to: the St. Louis lateral-program
 * resources. St. Louis County covers the county municipalities (Ballwin,
 * Chesterfield, Florissant); St. Charles runs its own system and St. Louis
 * City has its own program page. The general report guide applies to all.
 * San Diego and Las Vegas have no local guides yet (see the audit report).
 */
const GUIDES_BY_LOCATION: Readonly<Record<string, readonly string[]>> = {
  'loc-stl-st-louis-city': ['res-stl-city-program', 'res-stl-lateral-report'],
  'loc-stl-ballwin': ['res-stl-county-program', 'res-stl-lateral-report'],
  'loc-stl-chesterfield': ['res-stl-county-program', 'res-stl-lateral-report'],
  'loc-stl-florissant': ['res-stl-county-program', 'res-stl-lateral-report'],
  'loc-stl-st-charles': ['res-stl-lateral-report'],
}

export function guidePageIdsForLocation(locationId: string): PageId[] {
  return (GUIDES_BY_LOCATION[locationId] ?? []) as PageId[]
}

/** Registry id of a location hub page. */
export function locationHubPageId(locationId: string): PageId | undefined {
  return pagesOfType('location').find((p) => p.locationId === locationId)?.id
}
