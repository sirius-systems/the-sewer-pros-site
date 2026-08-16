/**
 * Canonical location types.
 *
 * Authority: docs/07-master-location-registry.md
 * Data:      data/locations/master-location-registry.json
 *
 * 579 geographic records across three markets. The registry is a
 * RESEARCH INVENTORY, not a publishing queue (07 §3, §54). Presence
 * here authorises nothing. Only docs/04-master-page-build-list.md
 * authorises a page.
 */

import type { LocationId, MarketId, MatrixEligibility } from './common'

/* ==========================================================================
   Identity
   ========================================================================== */

/**
 * ⚠ The committed registry has NO id field.
 *
 * Natural identity is the pair (market, slug). Market hub records carry
 * `slug: ""` — the market itself is the location — so the pair is still
 * unique but the slug half can be empty.
 *
 * Docs 04 §13 and 09 §122-123 reference ids like `loc-sd-mission-valley`.
 * 07 §59 describes these as recommended rather than present. They must
 * therefore be derived, and derived in exactly one place.
 *
 * `locationId()` below is that place. Convention recorded as DEC-067
 * (PROPOSED), verified against the `loc-sd-carlsbad` and
 * `loc-sd-mission-valley` examples in 09 §122-123.
 */
const MARKET_ID_ABBREVIATION: Record<MarketId, string> = {
  'st-louis-mo': 'stl',
  'san-diego-ca': 'sd',
  'las-vegas-nv': 'lv',
}

/**
 * Derives the canonical location id for a record.
 *
 * Market hubs (empty slug) resolve to `loc-{abbr}-market`, keeping ids
 * total across all 579 records rather than leaving hubs unaddressable.
 *
 * ⚠ Path separators are normalised to hyphens.
 *
 * 70 of the 579 slugs are COMPOUND — St. Louis City neighbourhoods
 * carry `st-louis-city/academy`, not `academy`, because the slug holds
 * the full path within the market. Left as-is that yields
 * `loc-stl-st-louis-city/academy`, an identifier containing a path
 * separator, which is fragile inside the `::` relationship keys of
 * 09 §122-123 and inside analytics dimensions (19 §39).
 *
 * Both forms were checked against the full dataset and both are
 * collision-free, so this is a robustness choice rather than a
 * correctness one (DEC-067).
 */
export function locationId(market: MarketId, slug: string): LocationId {
  const abbreviation = MARKET_ID_ABBREVIATION[market]
  const suffix = slug === '' ? 'market' : slug.replace(/\//g, '-')
  return `loc-${abbreviation}-${suffix}` as LocationId
}

/* ==========================================================================
   Classification
   ========================================================================== */

/**
 * Geographic record type (07 §5).
 *
 * The vocabulary is market-flavoured — `st_louis_city_neighborhood` and
 * `san_diego_community_or_neighborhood` encode their market in the value.
 * Do not treat these as a clean taxonomy; use `isMarketHub()` and the
 * page registry for structural decisions rather than branching on the
 * long tail of these values.
 */
export type LocationType =
  | 'market_hub'
  | 'primary_city'
  | 'independent_city_hub'
  | 'city_or_major_community'
  | 'major_community'
  | 'municipality_or_community'
  | 'community_or_neighborhood'
  | 'community_or_extended_area'
  | 'neighborhood_or_master_planned_community'
  | 'st_louis_city_neighborhood'
  | 'san_diego_community_or_neighborhood'
  | 'commercial_or_mixed_use_district'
  | 'landmark_or_corridor'
  | 'county'
  | 'county_or_submarket_cluster'
  | 'submarket_cluster'
  | 'extended_service_area'
  | 'manual_review'

/**
 * Indexing disposition (07 §7).
 *
 * ⚠ This is the registry's own research judgement. It is NOT publishing
 * authorisation, and it is NOT the `<meta robots>` value. 07 §54 and
 * 08 §29 are explicit: eligibility ≠ approval.
 *
 * Distribution in the committed data:
 *   launch               3    (the three market hubs)
 *   launch_candidate    99
 *   phase_2_candidate  381
 *   phase_3_validation  51
 *   research_only       22
 *   manual_review       23
 *
 * 102 records carry a launch-ish status; only 70 pages are approved.
 * The gap is the point.
 */
export type LocationIndexStatus =
  | 'launch'
  | 'launch_candidate'
  | 'phase_2_candidate'
  | 'phase_3_validation'
  | 'research_only'
  | 'manual_review'

/**
 * Priority tier (07 §6).
 *
 * A string in the data, not a number — `'1' | '2' | '3'` plus two
 * non-numeric states. Do not parse it as an integer.
 *
 * Coarser than indexStatus: tier `'1'` covers both `launch` (3) and
 * `launch_candidate` (99). Prefer indexStatus when precision matters.
 */
export type LocationLaunchTier = '1' | '2' | '3' | 'hold' | 'review'

/**
 * Why a record is not yet confirmed (07 §8).
 *
 * `operational_coverage_required` is the one that gates publishing:
 * those 51 records sit behind service-availability confirmation and
 * must not be presented as served (CLAUDE.md §100).
 */
export type LocationValidationStatus =
  | 'market_confirmed_by_project_scope'
  | 'candidate_from_source_research'
  | 'operational_coverage_required'
  | 'intent_and_page_value_review_required'
  | 'geography_or_naming_review_required'

/**
 * Service-matrix eligibility for a location (07 §6).
 * Full vocabulary: full | selective | conditional | hold.
 */
export type LocationServiceMatrix = MatrixEligibility

/**
 * Audience-matrix eligibility.
 *
 * ⚠ Narrower than the other two: NO `full` value exists in the data.
 * Audience targeting is selective everywhere it is permitted at all,
 * consistent with 09 §33 treating audience pages as intent-gated rather
 * than geography-driven. Typed narrowly so code cannot test for a state
 * that never occurs.
 */
export type LocationAudienceMatrix = 'selective' | 'conditional' | 'hold'

/** Commercial-matrix eligibility (07 §6). */
export type LocationCommercialMatrix = MatrixEligibility

/* ==========================================================================
   Raw record — mirrors data/locations/master-location-registry.json
   ========================================================================== */

export interface RawLocationRecord {
  market: MarketId
  name: string
  /** `""` for the three market hub records. */
  slug: string
  canonical_url: string
  location_type: LocationType
  /** `""` (not null) where the record has no parent. */
  parent_location: string
  /** Free-text research grouping, e.g. `"West County"`. Not an enum. */
  source_cluster: string
  launch_tier: LocationLaunchTier
  index_status: LocationIndexStatus
  /** Array here. ⚠ Flattened to a delimited string in the matrix dataset. */
  priority_tags: string[]
  service_matrix: LocationServiceMatrix
  audience_matrix: LocationAudienceMatrix
  commercial_matrix: LocationCommercialMatrix
  validation_status: LocationValidationStatus
  aliases: string[]
  /** Research provenance back to the source documents. */
  source_sections: string[]
  source_lines: number[]
  notes: string
}

export interface RawLocationRegistry {
  registry_version: string
  project: string
  canonical_patterns: Record<string, string>
  status_definitions: Record<string, string>
  matrix_definitions: Record<string, string>
  summary: Record<string, unknown>
  locations: RawLocationRecord[]
}

/* ==========================================================================
   Domain model — 07 §14
   ========================================================================== */

export interface Location {
  /** Derived via locationId(); absent from the source data. */
  locationId: LocationId
  market: MarketId
  name: string
  /** `undefined` for market hubs rather than an empty string. */
  slug?: string
  canonicalUrl: string
  locationType: LocationType
  /** `undefined` rather than the raw `""`. */
  parentLocation?: string
  sourceCluster?: string
  launchTier: LocationLaunchTier
  indexStatus: LocationIndexStatus
  priorityTags: string[]
  serviceMatrix: LocationServiceMatrix
  audienceMatrix: LocationAudienceMatrix
  commercialMatrix: LocationCommercialMatrix
  validationStatus: LocationValidationStatus
  aliases: string[]
  notes?: string
}

/* ==========================================================================
   Guards
   ========================================================================== */

/** True for the three market-level records (`/st-louis-mo/` etc.). */
export function isMarketHub(
  location: Pick<Location, 'locationType'>,
): boolean {
  return location.locationType === 'market_hub'
}

/**
 * True when a location may be described as served.
 *
 * Deliberately strict. `operational_coverage_required` returns false:
 * coverage has not been confirmed, and 07 §8 plus CLAUDE.md §100 forbid
 * implying service in unconfirmed geography.
 *
 * This governs COPY, not routing. Routing is governed by the approved
 * page registry alone.
 */
export function isCoverageConfirmed(
  location: Pick<Location, 'validationStatus'>,
): boolean {
  return (
    location.validationStatus === 'market_confirmed_by_project_scope' ||
    location.validationStatus === 'candidate_from_source_research'
  )
}
