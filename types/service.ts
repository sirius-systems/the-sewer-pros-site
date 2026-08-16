/**
 * Canonical service types.
 *
 * Authority: docs/06-master-service-registry.md
 * Data:      data/services/master-service-registry.json
 *
 * 18 canonical service records (DEC-017). The registry controls service
 * naming, slugs, ids, aliases, and page authorisation. Application code,
 * copy, schema, and forms must not invent service concepts outside it
 * (06 §60 Rule 4, CLAUDE.md §24).
 */

import type { MarketId } from './common'

/* ==========================================================================
   Service identifiers
   ========================================================================== */

/**
 * The 18 canonical service ids.
 *
 * Literal union per 02 §32: the set is stable and registry-controlled,
 * and adding one requires business approval plus a decision entry
 * (06 §51, CLAUDE.md §60).
 */
export type ServiceId =
  // Core (06 §11)
  | 'svc-sewer-camera-inspection'
  | 'svc-sewer-cleaning'
  | 'svc-hydro-jetting'
  | 'svc-sewer-cleaning-camera-inspection'
  | 'svc-sewer-line-locating'
  | 'svc-drain-cleaning'
  // Derived / high-intent (06 §18)
  | 'svc-pre-purchase-sewer-inspection'
  | 'svc-recurring-sewer-backup-diagnosis'
  | 'svc-preventative-sewer-maintenance'
  | 'svc-independent-sewer-second-opinion'
  // Market-specific (06 §23) — St. Louis only
  | 'svc-stl-sewer-lateral-inspection-reporting'
  // Commercial (06 §24)
  | 'svc-commercial-sewer-camera-inspection'
  | 'svc-commercial-sewer-cleaning'
  | 'svc-commercial-hydro-jetting'
  | 'svc-commercial-drain-cleaning'
  | 'svc-commercial-sewer-line-locating'
  | 'svc-commercial-preventative-maintenance'
  | 'svc-commercial-grease-sludge-removal'

/** Service hub ids (06 §4). Hubs are architectural, not among the 18. */
export type ServiceHubId = 'hub-services' | 'hub-commercial'

/* ==========================================================================
   Classification
   ========================================================================== */

/** 06 §5. */
export type ServiceRecordType =
  | 'core_service'
  | 'derived_service'
  | 'market_specific_service'
  | 'commercial_service'

/** 06 §6. Drives related-service logic, navigation, and schema grouping. */
export type ServiceFamily =
  | 'inspection_diagnostics'
  | 'cleaning'
  | 'locating'
  | 'maintenance'

/**
 * Registry maturity (data field `launch_tier`).
 *
 * ⚠ Distinct from page authorisation. See PAGE STATUS note below.
 */
export type ServiceLaunchTier = 'launch' | 'launch_candidate' | 'phase_2_candidate'

/**
 * Page authorisation for the service's canonical page (06 §32).
 *
 * ---------------------------------------------------------------------------
 * PAGE STATUS vs LAUNCH TIER
 * ---------------------------------------------------------------------------
 * These are two different fields and must not be conflated:
 *
 *   launch_tier  — how mature the registry entry is
 *   pageStatus   — whether the page may be published
 *
 * Example: `svc-recurring-sewer-backup-diagnosis` carries
 * launch_tier `launch_candidate` but page status `launch`. 06 §20
 * shows both explicitly.
 *
 * Verified: all 18 services agree between doc 06 §32 and the JSON once
 * `launch` and `launch_candidate` are both read as authorising launch.
 *
 * Page authorisation is ultimately owned by
 * `04-master-page-build-list.md`, not by this registry (06 §9).
 */
export type ServicePageStatus = 'launch' | 'phase_2' | 'phase_3' | 'hold'

/**
 * Matrix participation rule (06 §8).
 *
 * Governs which geographies a service may be evaluated against. Not an
 * authorisation to publish (06 §41).
 */
export type ServiceMatrixEligibility =
  | 'full'
  | 'full_on_residential_real_estate_locations'
  | 'full_on_residential_property_management_locations'
  | 'full_on_commercial_eligible_locations'
  | 'selective'
  | 'selective_st_louis_only'
  | 'none'

/**
 * Commercial applicability.
 *
 * Doc 06 §47 models this as `boolean | 'strong' | 'conditional'`.
 * The committed data uses the strings below. The data is authoritative
 * for what exists; `'yes'`/`'no'` carry the boolean meaning.
 */
export type CommercialApplicability = 'yes' | 'no' | 'strong' | 'conditional'

/**
 * Per-market operational status.
 *
 * ---------------------------------------------------------------------------
 * VOCABULARY NOTE
 * ---------------------------------------------------------------------------
 * Doc 06 §7 defines five semantic categories. The committed data uses a
 * finer-grained vocabulary (12 observed values) that maps onto them —
 * e.g. `supported_by_existing_camera_service` is a `supported` variant,
 * and `capability_confirmed_commercial_packaging_requires_validation`
 * is a `capability_validate_packaging` variant.
 *
 * This type is `string` rather than a union deliberately. Pinning the
 * observed values would break on the next registry regeneration and
 * would encode incidental research phrasing as an application contract.
 *
 * Use `marketServiceStatusCategory()` to reduce a raw value to the five
 * governing categories. Application logic should branch on the category,
 * never on the raw string.
 */
export type MarketServiceStatusRaw = string

/** The five governing categories from 06 §7. */
export type MarketServiceStatus =
  | 'confirmed'
  | 'supported'
  | 'capability_validate_packaging'
  | 'requires_operational_confirmation'
  | 'not_applicable'

/**
 * Reduces a raw market status string to its governing category.
 *
 * Conservative by design: anything unrecognised is treated as
 * `requires_operational_confirmation` so an unknown value can never
 * cause a service to be presented as available in a market.
 * 06 §42 and CLAUDE.md §100 both require the safe direction here.
 */
export function marketServiceStatusCategory(
  raw: MarketServiceStatusRaw,
): MarketServiceStatus {
  if (raw === 'not_applicable') return 'not_applicable'
  if (raw.startsWith('requires_operational')) {
    return 'requires_operational_confirmation'
  }
  if (raw.includes('packaging_requires_validation')) {
    return 'capability_validate_packaging'
  }
  if (raw.startsWith('supported')) return 'supported'
  if (raw.startsWith('confirmed')) return 'confirmed'
  return 'requires_operational_confirmation'
}

/**
 * True only when a service may be presented as available in a market.
 *
 * `capability_validate_packaging` returns false: the underlying
 * capability exists but the commercial packaging is unvalidated, and
 * 06 §43 forbids presenting unvalidated commercial detail as offered.
 */
export function isServiceAvailableInMarket(
  raw: MarketServiceStatusRaw,
): boolean {
  const category = marketServiceStatusCategory(raw)
  return category === 'confirmed' || category === 'supported'
}

/* ==========================================================================
   Raw record — mirrors data/services/master-service-registry.json
   ========================================================================== */

export interface RawServiceRecord {
  service_id: ServiceId
  name: string
  slug: string
  canonical_url: string
  record_type: ServiceRecordType
  service_family: ServiceFamily
  /** `null` for services with no parent. */
  parent_service_id: ServiceId | null
  /** Research provenance. Not an application contract. */
  source_status: string
  launch_tier: ServiceLaunchTier
  matrix_eligibility: ServiceMatrixEligibility
  commercial_applicability: CommercialApplicability
  primary_intents: string[]
  primary_audiences: string[]
  aliases: string[]
  markets: Record<MarketId, MarketServiceStatusRaw>
  notes: string
}

export interface RawServiceHub {
  service_id: ServiceHubId
  name: string
  slug: string
  canonical_url: string
  record_type: 'service_hub'
  launch_tier: string
  matrix_eligibility: 'none'
  notes: string
}

/** Alias and exclusion register (06 §36). */
export interface RawExcludedOrAliasIntent {
  term: string
  disposition:
    | 'alias_only'
    | 'problem_or_subservice'
    | 'hold_pending_confirmation'
    | 'not_offered'
    | 'do_not_expand_without_confirmation'
  /** `null` where no canonical target exists (e.g. not-offered services). */
  canonical_target: ServiceId | null
  reason: string
}

export interface RawServiceRegistry {
  project: string
  version: string
  purpose: string
  markets: MarketId[]
  canonical_url_rules: Record<string, string>
  services: RawServiceRecord[]
  hubs: RawServiceHub[]
  excluded_or_alias_intents: RawExcludedOrAliasIntent[]
  summary: Record<string, unknown>
  source_notes: string[]
}

/* ==========================================================================
   Domain model — 06 §47
   ========================================================================== */

export interface Service {
  serviceId: ServiceId
  name: string
  slug: string
  canonicalUrl: string
  recordType: ServiceRecordType
  serviceFamily: ServiceFamily
  parentServiceId?: ServiceId
  launchTier: ServiceLaunchTier
  matrixEligibility: ServiceMatrixEligibility
  commercialApplicability: CommercialApplicability
  primaryIntents: string[]
  primaryAudiences: string[]
  aliases: string[]
  /** Raw per-market status. Read via marketServiceStatusCategory(). */
  markets: Record<MarketId, MarketServiceStatusRaw>
  notes?: string
}

/* ==========================================================================
   Guards
   ========================================================================== */

/**
 * True for the single St. Louis-only service (06 §23).
 *
 * This service must never be generated into San Diego or Las Vegas
 * (06 §60 Rule 11, 08 §24). Route generation and matrix evaluation must
 * both honour this.
 */
export function isStLouisOnlyService(serviceId: ServiceId): boolean {
  return serviceId === 'svc-stl-sewer-lateral-inspection-reporting'
}

/** True for the seven commercial services (06 §24). */
export function isCommercialService(serviceId: ServiceId): boolean {
  return serviceId.startsWith('svc-commercial-')
}
