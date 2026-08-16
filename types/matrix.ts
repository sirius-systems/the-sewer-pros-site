/**
 * Service × Location matrix types.
 *
 * Authority: docs/08-service-location-matrix.md
 * Data:      data/matrices/service-location-master-matrix.json
 *            data/matrices/service-location-master-matrix.csv
 *
 * ===========================================================================
 * ⚠  THE MATRIX IS NOT A ROUTE SOURCE
 * ===========================================================================
 * 10,422 records. 70 approved pages.
 *
 * 08 §2 states it directly: the matrix models OPPORTUNITY, not publishing
 * authorisation. `generateStaticParams()` must never read this file
 * (02 §21, §46; CLAUDE.md §26). Route generation consumes the approved
 * page registry derived from 04-master-page-build-list.md.
 *
 * Legitimate uses: research, prioritisation, gap analysis, validating
 * that an approved page has a supporting relationship record.
 */

import type { MarketId } from './common'
import type {
  LocationCommercialMatrix,
  LocationIndexStatus,
  LocationLaunchTier,
  LocationServiceMatrix,
  LocationType,
  LocationValidationStatus,
} from './location'
import type {
  MarketServiceStatusRaw,
  ServiceFamily,
  ServiceId,
  ServiceLaunchTier,
  ServiceMatrixEligibility,
  ServiceRecordType,
} from './service'

/* ==========================================================================
   Identity
   ========================================================================== */

/**
 * Composite key: `{market}::{locationSlug}::{serviceId}`.
 *
 * Market hub rows use the sentinel `_market` in the slug position, since
 * hub location records carry an empty slug:
 *
 *   st-louis-mo::_market::svc-sewer-camera-inspection
 *   san-diego-ca::carlsbad::svc-hydro-jetting
 */
export type MatrixId = string

/** Sentinel occupying the slug position for market-level rows. */
export const MATRIX_MARKET_SENTINEL = '_market'

export function matrixId(
  market: MarketId,
  locationSlug: string,
  serviceId: ServiceId,
): MatrixId {
  const slug = locationSlug === '' ? MATRIX_MARKET_SENTINEL : locationSlug
  return `${market}::${slug}::${serviceId}`
}

/* ==========================================================================
   Relationship classification
   ========================================================================== */

/** Why the relationship exists (08 §14). */
export type RelationshipScope =
  | 'core'
  | 'derived_high_intent'
  | 'market_specific'
  | 'commercial'

/** Computed disposition of the relationship (08 §16). */
export type MatrixStatus =
  | 'launch_candidate'
  | 'phase_2_candidate'
  | 'selective_candidate'
  | 'selective_low_intent_fit'
  | 'selective_low_commercial_fit'
  | 'conditional_location'
  | 'operational_confirmation_required'
  | 'research_only_location'
  | 'hold_location'
  | 'not_applicable_market'

/**
 * Indexing recommendation (08 §17).
 *
 * ⚠ A RECOMMENDATION. Not authorisation, and not a robots directive.
 * `index_launch_candidate` on a record does not permit a page to exist.
 */
export type IndexRecommendation =
  | 'index_launch_candidate'
  | 'phase_2_candidate'
  | 'phase_3_validation'
  | 'selective_candidate'
  | 'hold_until_operational_confirmation'
  | 'research_only'
  | 'no_page'

/** Suggested build phase (08 §18). */
export type RecommendedPhase =
  | 'launch'
  | 'phase_2'
  | 'phase_3'
  | 'selective'
  | 'validation'
  | 'hold'
  | 'excluded'

/* ==========================================================================
   Raw record — 29 columns, denormalised
   ========================================================================== */

/**
 * One service × location relationship.
 *
 * Location and service attributes are DENORMALISED copies carried for
 * spreadsheet use. The registries remain authoritative — if this record
 * and a registry disagree, the registry wins.
 *
 * Two shape differences from the location registry, both deliberate in
 * the source data:
 *   - `location_priority_tags` is a delimited STRING here, an ARRAY there
 *   - there is no audience-matrix column at all
 */
export interface RawMatrixRecord {
  matrix_id: MatrixId

  // --- Location attributes (denormalised) ---
  market: MarketId
  location_name: string
  /** `""` for market hub rows. */
  location_slug: string
  location_url: string
  location_type: LocationType
  parent_location: string
  source_cluster: string
  location_launch_tier: LocationLaunchTier
  location_index_status: LocationIndexStatus
  /** ⚠ Delimited string, NOT an array. Registry has `string[]`. */
  location_priority_tags: string
  location_service_matrix: LocationServiceMatrix
  location_commercial_matrix: LocationCommercialMatrix
  location_validation_status: LocationValidationStatus

  // --- Service attributes (denormalised) ---
  service_id: ServiceId
  service_name: string
  service_slug: string
  /** Named `service_type` here; `record_type` in the service registry. */
  service_type: ServiceRecordType
  service_family: ServiceFamily
  service_launch_tier: ServiceLaunchTier
  service_source_status: string
  /** Named `service_matrix_rule` here; `matrix_eligibility` in the registry. */
  service_matrix_rule: ServiceMatrixEligibility
  market_service_status: MarketServiceStatusRaw

  // --- Relationship computation ---
  relationship_scope: RelationshipScope
  matrix_status: MatrixStatus
  index_recommendation: IndexRecommendation
  recommended_phase: RecommendedPhase
  /** Candidate URL. ⚠ Candidate only — not an approved route. */
  canonical_url: string
  matrix_reason: string
}

export interface RawServiceLocationMatrix {
  project: string
  matrix_version: string
  location_count: number
  service_count: number
  relationship_count: number
  canonical_patterns: Record<string, string>
  records: RawMatrixRecord[]
}

/* ==========================================================================
   Domain model — 08 §47
   ========================================================================== */

/**
 * Normalised relationship.
 *
 * Denormalised location/service copies are dropped: join to the
 * registries instead of trusting a stale duplicate.
 */
export interface MatrixRelationship {
  matrixId: MatrixId
  market: MarketId
  locationSlug?: string
  serviceId: ServiceId
  relationshipScope: RelationshipScope
  matrixStatus: MatrixStatus
  indexRecommendation: IndexRecommendation
  recommendedPhase: RecommendedPhase
  /** Candidate URL only. Never treat as an approved route. */
  candidateUrl: string
  reason: string
}

/* ==========================================================================
   Helpers
   ========================================================================== */

/** Splits the matrix's flattened priority-tag string back into an array. */
export function parsePriorityTags(value: string): string[] {
  return value
    .split(/[|,]/)
    .map((tag) => tag.trim())
    .filter((tag) => tag.length > 0)
}
