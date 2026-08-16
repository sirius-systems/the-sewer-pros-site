/**
 * Audience types.
 *
 * Authority: docs/09-audience-commercial-matrix.md §4-30, §57, §59, §122
 *
 * 13 audience records; 6 approved as launch pages under `/for/`.
 *
 * An audience is a PERSON OR ROLE — who the customer is. A commercial
 * segment is a BUSINESS CONTEXT — what kind of property or operation is
 * served (09 §4, §94). Keep them distinct: "property managers" is an
 * audience, "property management" is a commercial segment.
 */

import type { LocationId, MarketId } from './common'
import type { ServiceId } from './service'

/* ==========================================================================
   Identifiers — 09 §6
   ========================================================================== */

/** The 13 canonical audience ids. */
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
  | 'aud-facility-managers'
  | 'aud-restaurants'
  | 'aud-commercial-property-owners'

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
  | 'commercial_operator'
  | 'organization'

/** Page authorisation. Confirmed by 04 for the launch six. */
export type AudiencePageStatus = 'launch' | 'phase_2' | 'phase_3' | 'hold'

/** Geographic expansion rule for the audience (09 §9). */
export type AudienceLocationMatrixRule =
  | 'full_on_relevant_locations'
  | 'selective'
  | 'commercial_only'
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
   * ⚠ Does NOT always derive from the id. `aud-commercial-property-owners`
   * maps to `/for/commercial-properties/` per 09 §8, not
   * `/for/commercial-property-owners/`. Always read the slug; never
   * reconstruct it by stripping the `aud-` prefix.
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
 * §10's table lists EIGHT statuses, including `commercial_fit_only`
 * ("Better handled through commercial architecture").
 *
 * §57's `AudienceMatrixStatus` type lists only SEVEN and omits
 * `commercial_fit_only`.
 *
 * `commercial_fit_only` is retained here. It encodes a real routing
 * decision the architecture depends on — §68-70's cannibalisation rules
 * turn on exactly this distinction, sending property-manager and
 * restaurant geography into `/commercial/` rather than `/for/`. Dropping
 * it would leave those cases unrepresentable.
 *
 * ⚠ Needs a DEC entry resolving §10 against §57.
 */
export type AudienceMatrixStatus =
  | 'strong_candidate'
  | 'phase_2_candidate'
  | 'selective_candidate'
  | 'low_intent_fit'
  | 'commercial_fit_only'
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
