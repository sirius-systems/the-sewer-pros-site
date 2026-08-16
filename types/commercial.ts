/**
 * Commercial segment types.
 *
 * Authority: docs/09-audience-commercial-matrix.md §31-46, §58, §60, §123
 *
 * 8 commercial segments. NONE is an approved standalone page at launch.
 *
 * The five approved commercial launch pages are commercial SERVICES
 * (`/commercial/hydro-jetting/` etc.), not segments (04 §5, 09 §98).
 * 09 §44 is explicit: a segment existing does not authorise
 * `/commercial/restaurants/`. That requires distinct search intent,
 * conversion potential, differentiated content, multiple relevant
 * services, low `/for/` overlap, and page-build-list approval.
 */

import type { LocationId, MarketId } from './common'
import type { ServiceId } from './service'

/* ==========================================================================
   Identifiers — 09 §32
   ========================================================================== */

/** The 8 canonical commercial segment ids. */
export type CommercialSegmentId =
  | 'comseg-restaurants'
  | 'comseg-property-management'
  | 'comseg-multifamily'
  | 'comseg-hoa'
  | 'comseg-hospitality'
  | 'comseg-retail'
  | 'comseg-facilities'
  | 'comseg-commercial-properties'

/** How the segment is defined (09 §32). */
export type CommercialSegmentType =
  | 'industry'
  | 'operating_model'
  | 'property_type'
  | 'property_or_organization'
  | 'property_or_industry'
  | 'operating_context'
  | 'umbrella_segment'

/* ==========================================================================
   Record
   ========================================================================== */

export interface CommercialSegment {
  commercialSegmentId: CommercialSegmentId
  name: string
  segmentType: CommercialSegmentType
  /**
   * Commercial services relevant to this segment (09 §35).
   * All are `svc-commercial-*` ids.
   */
  relevantServiceIds: ServiceId[]
  /**
   * ⚠ Present ONLY where 04 has approved a standalone segment page.
   * Absent for all eight segments at launch (09 §44).
   */
  canonicalUrl?: string
  aliases?: string[]
}

/* ==========================================================================
   Commercial segment × Location relationships
   ========================================================================== */

/** Relationship status (09 §58). */
export type CommercialMatrixStatus =
  | 'strong_commercial_candidate'
  | 'phase_2_candidate'
  | 'selective_candidate'
  | 'low_commercial_fit'
  | 'operational_confirmation_required'
  | 'conditional_location'
  | 'hold_location'
  | 'research_only'

/** `{commercialSegmentId}::{locationId}` — 09 §123. */
export type CommercialRelationshipId = string

export function commercialRelationshipId(
  commercialSegmentId: CommercialSegmentId,
  locationId: LocationId,
): CommercialRelationshipId {
  return `${commercialSegmentId}::${locationId}`
}

/**
 * One commercial segment × location relationship (09 §60).
 *
 * 8 × 579 = 4,632 possible relationships, none approved at launch
 * (09 §33, §49, §101).
 */
export interface CommercialLocationRelationship {
  relationshipId: CommercialRelationshipId
  commercialSegmentId: CommercialSegmentId
  locationId: LocationId
  marketId: MarketId
  status: CommercialMatrixStatus
  relevantCommercialServiceIds: ServiceId[]
  commercialFit: 'strong' | 'moderate' | 'weak'
  /**
   * Optional by design — 09 §60: "Not every commercial relationship
   * requires its own pathname."
   */
  candidatePathname?: string
  reason: string
}

/**
 * NOTE — no local commercial presence (09 §113, CLAUDE.md §23).
 *
 * A commercial segment never gets a `LocalBusiness` entity in a market.
 * Commercial coverage is expressed as `Service` + `areaServed` + `Place`.
 * This is enforced by the schema types in `./schema`, which do not admit
 * a segment as a `LocalBusiness` subject.
 */
