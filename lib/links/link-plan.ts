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
 * Guide rules: which existing guide or comparison page is offered where.
 *
 * ONE TABLE DRIVES EVERY GUIDE SLOT. A guide is offered on a core service page
 * when its `services` list names the service, and on a location hub when its
 * `locations` list names the location or its `markets` list names the
 * location's market. To add a guide (for example a San Diego or Las Vegas
 * lateral-program page once it exists), add one row here; no component changes.
 *
 * Rules for choosing, in priority order of the rows (the first rows win when a
 * page's cap is reached):
 *   - a guide is offered only where it answers the next question a reader of
 *     that page has (a report guide on an inspection page, a local program
 *     guide on that locality's hub);
 *   - at most `MAX_GUIDES_PER_PAGE` guides per page, so the slot stays a short
 *     block and never a link dump;
 *   - guides only: no service or sales page belongs in this table.
 */
export interface GuideRule {
  guide: string
  services?: readonly ServiceId[]
  locations?: readonly string[]
  markets?: readonly MarketId[]
}

export const MAX_GUIDES_PER_PAGE = 3

export const GUIDE_RULES: readonly GuideRule[] = [
  // Inspection guides: what a camera inspection produces and how to read it.
  {
    guide: 'res-camera-report',
    services: [
      'svc-pre-purchase-sewer-inspection',
      'svc-sewer-camera-inspection',
      'svc-sewer-cleaning-camera-inspection',
      'svc-recurring-sewer-backup-diagnosis',
    ],
  },
  {
    guide: 'res-read-video',
    services: [
      'svc-pre-purchase-sewer-inspection',
      'svc-sewer-camera-inspection',
      'svc-sewer-cleaning-camera-inspection',
      'svc-recurring-sewer-backup-diagnosis',
    ],
  },
  // Cleaning comparison: hydro jetting against cable cleaning.
  {
    guide: 'cmp-hydro-vs-snaking',
    services: ['svc-hydro-jetting', 'svc-drain-cleaning', 'svc-sewer-cleaning'],
  },
  // St. Louis lateral-program guides (locality first, then the general guide).
  { guide: 'res-stl-city-program', locations: ['loc-stl-st-louis-city'] },
  { guide: 'res-stl-county-program', locations: ['loc-stl-ballwin', 'loc-stl-chesterfield', 'loc-stl-florissant'] },
  { guide: 'res-stl-lateral-report', markets: ['st-louis-mo'] },
  // San Diego and Las Vegas: no guides exist yet. Add rows here when they do.
]

function dedupeCap(ids: readonly string[]): PageId[] {
  return [...new Set(ids)].slice(0, MAX_GUIDES_PER_PAGE) as PageId[]
}

/** Guides offered on a core service page (at most `MAX_GUIDES_PER_PAGE`). */
export function guidePageIdsForService(serviceId: string): PageId[] {
  return dedupeCap(GUIDE_RULES.filter((r) => r.services?.includes(serviceId as ServiceId)).map((r) => r.guide))
}

/** Guides offered on a location hub (at most `MAX_GUIDES_PER_PAGE`). */
export function guidePageIdsForLocation(locationId: string, marketId?: MarketId): PageId[] {
  return dedupeCap(
    GUIDE_RULES.filter((r) => r.locations?.includes(locationId) || (marketId !== undefined && r.markets?.includes(marketId))).map((r) => r.guide),
  )
}

/* ==========================================================================
   Audience pages and market contact pages
   ========================================================================== */

/** Market hub page ids, in the order audience and contact pages list them. */
const MARKET_HUB_IDS: readonly { marketId: MarketId; hubId: string; flagshipLocationId: string }[] = [
  // St. Louis first: the established local entity (CLAUDE.md section 10).
  { marketId: 'st-louis-mo', hubId: 'market-st-louis-mo', flagshipLocationId: 'loc-stl-st-louis-city' },
  { marketId: 'san-diego-ca', hubId: 'market-san-diego-ca', flagshipLocationId: 'loc-sd-san-diego' },
  { marketId: 'las-vegas-nv', hubId: 'market-las-vegas-nv', flagshipLocationId: 'loc-lv-las-vegas' },
]

/**
 * The service each audience asks about first. Real estate audiences ask about
 * the pre-purchase inspection; landlords and HOAs ask about keeping lines
 * clear. Residential only (CLAUDE.md sections 25 and 28).
 */
const AUDIENCE_SERVICE: Readonly<Record<string, ServiceId>> = {
  'aud-home-buyers': 'svc-pre-purchase-sewer-inspection',
  'aud-home-sellers': 'svc-pre-purchase-sewer-inspection',
  'aud-real-estate-agents': 'svc-pre-purchase-sewer-inspection',
  'aud-home-inspectors': 'svc-pre-purchase-sewer-inspection',
  'aud-property-managers': 'svc-preventative-sewer-maintenance',
  'aud-hoa-communities': 'svc-preventative-sewer-maintenance',
}

/** Market hubs an audience page offers: the three launch markets, established market first. */
export function audienceMarketPageIds(audiencePageId: string): PageId[] {
  return AUDIENCE_SERVICE[audiencePageId] === undefined ? [] : (MARKET_HUB_IDS.map((m) => m.hubId).slice(0, 3) as PageId[])
}

/**
 * Service + location pages an audience page offers: the audience's lead
 * service in each market's flagship location (the market's named city), three
 * pages in all, one per market. Chosen by rule, never by search volume.
 */
export function audienceLocalPageIds(audiencePageId: string): PageId[] {
  const service = AUDIENCE_SERVICE[audiencePageId]
  if (service === undefined) return []
  return MARKET_HUB_IDS.map((m) => localServicePageId(m.flagshipLocationId, service))
    .filter((x): x is PageId => x !== undefined)
    .slice(0, 3)
}

/**
 * Pages a market contact page offers next to the form: the FAQ and the two
 * audiences with the clearest time-bound need at contact time. Real estate
 * first (CLAUDE.md section 26). Override per market here if a market's mix
 * differs.
 */
const CONTACT_AUDIENCES: Readonly<Record<MarketId, readonly [string, string]>> = {
  'st-louis-mo': ['aud-real-estate-agents', 'aud-home-buyers'],
  'san-diego-ca': ['aud-real-estate-agents', 'aud-home-buyers'],
  'las-vegas-nv': ['aud-real-estate-agents', 'aud-home-buyers'],
}

export function marketContactPageIds(marketId: MarketId): PageId[] {
  return ['core-faq', ...CONTACT_AUDIENCES[marketId]] as PageId[]
}

/** Registry id of a location hub page. */
export function locationHubPageId(locationId: string): PageId | undefined {
  return pagesOfType('location').find((p) => p.locationId === locationId)?.id
}
