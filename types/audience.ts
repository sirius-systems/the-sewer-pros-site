/**
 * Audience types.
 *
 * Authority: docs/09-audience-commercial-matrix.md §4-30, §57, §59, §122
 *
 * 10 audience records; 6 approved as launch pages under `/for/`.
 *
 * An audience is a PERSON OR ROLE: who the customer is. The Sewer Pros
 * serves residential and real-estate audiences only. Commercial services
 * are not offered (owner decision, Oct 12, 2026), so there are no
 * commercial audience records.
 */

import type { LocationId, MarketId } from './common'
import type { ServiceId } from './service'

/* ==========================================================================
   Identifiers — 09 §6
   ========================================================================== */

/** The 10 canonical audience ids. */
export type AudienceId =
  // Launch (09 §7)
  | 'aud-home-buyers'
  | 'aud-home-sellers'
  | 'aud-real-estate-agents'
  | 'aud-home-inspectors'
  | 'aud-property-managers'
  | 'aud-hoa-communities'
  // Phase 2 (09 §8)
  | 'aud-homeowners'
  | 'aud-real-estate-investors'
  | 'aud-landlords'
  | 'aud-contractors-remodelers'

/** The six audiences with approved launch pages (09 §7). */
export const LAUNCH_AUDIENCE_IDS = [
  'aud-home-buyers',
  'aud-home-sellers',
  'aud-real-estate-agents',
  'aud-home-inspectors',
  'aud-property-managers',
  'aud-hoa-communities',
] as const satisfies readonly AudienceId[]

/* ==========================================================================
   Classification — 09 §9
   ========================================================================== */

export type AudienceType =
  | 'customer'
  | 'referral_partner'
  | 'professional'
  | 'property_decision_maker'
  | 'organization'

/** Page authorisation. Confirmed by 04 for the launch six. */
export type AudiencePageStatus = 'launch' | 'phase_2' | 'phase_3' | 'hold'

/** Geographic expansion rule for the audience (09 §9). */
export type AudienceLocationMatrixRule =
  | 'full_on_relevant_locations'
  | 'selective'
  | 'hold'

/* ==========================================================================
   Record — 09 §9
   ========================================================================== */

export interface Audience {
  audienceId: AudienceId
  name: string
  /**
   * URL slug.
   *
   * Always read the slug; never reconstruct it by stripping the `aud-`
   * prefix.
   */
  slug: string
  canonicalUrl: string
  audienceType: AudienceType
  pageStatus: AudiencePageStatus
  primaryNeeds: string[]
  primaryServices: ServiceId[]
  secondaryServices: ServiceId[]
  locationMatrixRule: AudienceLocationMatrixRule
  markets: Record<MarketId, string>
  aliases?: string[]
}

/* ==========================================================================
   Audience × Location relationships
   ========================================================================== */

/**
 * Relationship status.
 *
 * ---------------------------------------------------------------------------
 * ⚠ DOC 09 CONTRADICTS ITSELF
 * ---------------------------------------------------------------------------
 * Commercial services are not offered (owner decision, Oct 12, 2026), so
 * the former `commercial_fit_only` status no longer exists. Property
 * manager geography stays under `/for/`.
 */
export type AudienceMatrixStatus =
  | 'strong_candidate'
  | 'phase_2_candidate'
  | 'selective_candidate'
  | 'low_intent_fit'
  | 'operational_confirmation_required'
  | 'hold_location'
  | 'research_only'

/** Strength of fit (09 §59). */
export type FitStrength = 'strong' | 'moderate' | 'weak'

/** `{audienceId}::{locationId}` — 09 §122. */
export type AudienceRelationshipId = string

export function audienceRelationshipId(
  audienceId: AudienceId,
  locationId: LocationId,
): AudienceRelationshipId {
  return `${audienceId}::${locationId}`
}

/**
 * One audience × location relationship (09 §59).
 *
 * 13 × 579 = 7,527 possible relationships. Zero are approved pages at
 * launch (09 §48, §100). This models opportunity only.
 */
export interface AudienceLocationRelationship {
  relationshipId: AudienceRelationshipId
  audienceId: AudienceId
  locationId: LocationId
  marketId: MarketId
  status: AudienceMatrixStatus
  relevantServiceIds: ServiceId[]
  intentFit: FitStrength
  conversionFit: FitStrength
  /** Candidate only. Never an approved route. */
  candidatePathname: string
  reason: string
}
