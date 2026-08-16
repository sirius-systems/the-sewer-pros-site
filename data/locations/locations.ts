/**
 * Location registry.
 *
 * Authority: docs/07-master-location-registry.md
 * Data:      data/locations/master-location-registry.json
 *
 * Build sequence step 11 (02 §103). 579 geographic records.
 *
 * ===========================================================================
 * ⚠  THIS IS A RESEARCH INVENTORY, NOT A PUBLISHING QUEUE
 * ===========================================================================
 * 579 records. 16 approved location pages.
 *
 * 07 §3 and §54 are explicit: presence here authorises nothing. Route
 * generation reads the approved page registry (step 12), never this
 * file. `indexStatus` is the registry's own research judgement, not a
 * robots directive and not page authorisation.
 *
 * ---------------------------------------------------------------------------
 * SERVER-ONLY BY INTENT
 * ---------------------------------------------------------------------------
 * The backing JSON is ~462 KB. Under `output: 'export'` it is consumed
 * at build time and only rendered HTML ships. Do NOT import this module
 * into a `'use client'` component — that would inline the whole
 * registry into the client bundle and wreck the performance budget
 * (18 §103, §153; CLAUDE.md §56). Pass mapped subsets to client
 * components instead.
 */

import type {
  Location,
  LocationId,
  LocationIndexStatus,
  LocationType,
  MarketId,
  RawLocationRecord,
  RawLocationRegistry,
} from '@/types'
import { MARKET_IDS, locationId } from '@/types'
import registryJson from './master-location-registry.json'

/* ==========================================================================
   Validation
   ========================================================================== */

const EXPECTED_RECORD_COUNT = 579

/** Canonical URL shapes from the registry's own `canonical_patterns`. */
const MARKET_URL = /^\/(?:st-louis-mo|san-diego-ca|las-vegas-nv)\/$/
const STL_NEIGHBOURHOOD_URL = /^\/st-louis-mo\/st-louis-city\/[a-z0-9-]+\/$/
const LOCATION_URL = /^\/(?:st-louis-mo|san-diego-ca|las-vegas-nv)\/[a-z0-9-]+\/$/

function fail(message: string): never {
  throw new Error(`Location registry invalid: ${message}`)
}

function validate(registry: RawLocationRegistry): void {
  const locations = registry.locations

  if (locations.length !== EXPECTED_RECORD_COUNT) {
    fail(
      `expected ${EXPECTED_RECORD_COUNT} records, found ${locations.length}. ` +
        `A changed record count means the registry was regenerated — re-verify ` +
        `the approved page registry against it before shipping (07 §76).`,
    )
  }

  const seenIds = new Set<string>()
  const seenUrls = new Set<string>()
  const seenPairs = new Set<string>()
  const slugsByMarket = new Map<MarketId, Set<string>>(
    MARKET_IDS.map((m) => [m, new Set<string>()]),
  )

  for (const record of locations) {
    if (!MARKET_IDS.includes(record.market)) {
      fail(`unknown market ${JSON.stringify(record.market)} on ${record.canonical_url}`)
    }

    // Derived ids must be unique — this is the DEC-067 invariant, and the
    // registry has no id field to fall back on if it fails.
    const id = locationId(record.market, record.slug)
    if (seenIds.has(id)) {
      fail(
        `duplicate derived locationId "${id}". Two records share a ` +
          `(market, slug) pair after separator normalisation. DEC-067's ` +
          `derivation is no longer total — resolve before relying on ids.`,
      )
    }
    seenIds.add(id)

    const pair = `${record.market}::${record.slug}`
    if (seenPairs.has(pair)) fail(`duplicate (market, slug): ${pair}`)
    seenPairs.add(pair)

    if (seenUrls.has(record.canonical_url)) {
      fail(`duplicate canonical_url ${record.canonical_url} — two records claim one route`)
    }
    seenUrls.add(record.canonical_url)

    // URL must match one of the three documented patterns, and its market
    // segment must agree with the record's own market field.
    const url = record.canonical_url
    const matchesPattern =
      MARKET_URL.test(url) || STL_NEIGHBOURHOOD_URL.test(url) || LOCATION_URL.test(url)
    if (!matchesPattern) {
      fail(`${record.name}: canonical_url ${url} matches no documented pattern (07 canonical_patterns)`)
    }
    if (url.split('/')[1] !== record.market) {
      fail(`${record.name}: canonical_url ${url} disagrees with market ${record.market}`)
    }

    // Market hubs are the only records permitted an empty slug.
    const isHub = record.location_type === 'market_hub'
    if (isHub !== (record.slug === '')) {
      fail(
        `${record.name}: location_type is ${record.location_type} but slug is ` +
          `${JSON.stringify(record.slug)}. Only market_hub records may have an empty slug.`,
      )
    }

    slugsByMarket.get(record.market)?.add(record.slug)
  }

  // Parent references resolve within the same market. `parent_location`
  // holds a slug, or "" for no parent.
  for (const record of locations) {
    if (record.parent_location === '') continue
    if (!slugsByMarket.get(record.market)?.has(record.parent_location)) {
      fail(
        `${record.name} (${record.market}) references parent ` +
          `"${record.parent_location}", which is not a slug in that market. ` +
          `An unresolvable parent breaks breadcrumbs (03 §53, 05 §118).`,
      )
    }
  }
}

/* ==========================================================================
   Load
   ========================================================================== */

/**
 * Cast backed by `validate()` below.
 *
 * `resolveJsonModule` infers `string` for enum fields, so direct
 * assignment cannot typecheck. The shape is asserted, then verified at
 * runtime — invalid data fails the build with a specific message rather
 * than rendering wrong pages (CLAUDE.md §45, §84).
 */
const rawRegistry = registryJson as unknown as RawLocationRegistry

validate(rawRegistry)

/* ==========================================================================
   Mapping — raw snake_case to domain camelCase (07 §14)
   ========================================================================== */

function toLocation(raw: RawLocationRecord): Location {
  return {
    locationId: locationId(raw.market, raw.slug),
    market: raw.market,
    name: raw.name,
    // Market hubs carry "" — surfaced as undefined rather than an empty
    // string so callers cannot accidentally build "/st-louis-mo//".
    ...(raw.slug !== '' && { slug: raw.slug }),
    canonicalUrl: raw.canonical_url,
    locationType: raw.location_type,
    ...(raw.parent_location !== '' && { parentLocation: raw.parent_location }),
    ...(raw.source_cluster !== '' && { sourceCluster: raw.source_cluster }),
    launchTier: raw.launch_tier,
    indexStatus: raw.index_status,
    priorityTags: raw.priority_tags,
    serviceMatrix: raw.service_matrix,
    audienceMatrix: raw.audience_matrix,
    commercialMatrix: raw.commercial_matrix,
    validationStatus: raw.validation_status,
    aliases: raw.aliases,
    ...(raw.notes !== '' && { notes: raw.notes }),
  }
}

/** All 579 records, in registry order. */
export const locationList: readonly Location[] = rawRegistry.locations.map(toLocation)

const locationById = new Map<LocationId, Location>(
  locationList.map((l) => [l.locationId, l]),
)

const locationByUrl = new Map<string, Location>(
  locationList.map((l) => [l.canonicalUrl, l]),
)

/* ==========================================================================
   Accessors
   ========================================================================== */

/** Returns a location by derived id, or undefined. */
export function getLocation(id: LocationId): Location | undefined {
  return locationById.get(id)
}

/**
 * Returns a location by derived id.
 *
 * Throws on a miss. Use where the id came from approved project data
 * (a page record, a relationship key) and absence means the data has
 * drifted rather than that the caller guessed.
 */
export function requireLocation(id: LocationId): Location {
  const location = locationById.get(id)
  if (location === undefined) {
    fail(`no record for ${id}`)
  }
  return location
}

/** Returns the location owning a canonical URL, or undefined. */
export function getLocationByCanonicalUrl(url: string): Location | undefined {
  return locationByUrl.get(url)
}

/**
 * Builds a location id from its parts and looks it up.
 *
 * For St. Louis City neighbourhoods pass the compound slug as stored —
 * `st-louis-city/academy`, not `academy`.
 */
export function getLocationBySlug(
  market: MarketId,
  slug: string,
): Location | undefined {
  return locationById.get(locationId(market, slug))
}

/** Every record in a market, including its hub. */
export function locationsInMarket(market: MarketId): Location[] {
  return locationList.filter((l) => l.market === market)
}

/** The three market hub records (07 §5). */
export function marketHubs(): Location[] {
  return locationList.filter((l) => l.locationType === 'market_hub')
}

/** Direct children of a location, matched on `parentLocation`. */
export function childLocations(market: MarketId, slug: string): Location[] {
  return locationList.filter(
    (l) => l.market === market && l.parentLocation === slug,
  )
}

/** Records carrying a given research index status (07 §7). */
export function locationsByIndexStatus(status: LocationIndexStatus): Location[] {
  return locationList.filter((l) => l.indexStatus === status)
}

/** Records of a given geographic type (07 §5). */
export function locationsByType(type: LocationType): Location[] {
  return locationList.filter((l) => l.locationType === type)
}

/* ==========================================================================
   Counts — for validation and reporting, not for display
   ========================================================================== */

/**
 * Record counts by index status.
 *
 * Useful when reconciling the registry against the approved page
 * registry. ⚠ Never render these as site content — a count of research
 * records is not a business fact about coverage (01 §35).
 */
export function indexStatusCounts(): Record<LocationIndexStatus, number> {
  const counts = {
    launch: 0,
    launch_candidate: 0,
    phase_2_candidate: 0,
    phase_3_validation: 0,
    research_only: 0,
    manual_review: 0,
  }
  for (const location of locationList) counts[location.indexStatus] += 1
  return counts
}
