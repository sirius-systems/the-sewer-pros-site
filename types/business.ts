/**
 * Business and market configuration types.
 *
 * Authority: docs/01-business-brand-foundation.md
 *            docs/02-nextjs-technical-architecture.md §19, §54
 *            docs/11-local-seo-gbp-strategy.md
 *            docs/15-schema-entity-strategy.md §8-13, §75-80
 *
 * ===========================================================================
 * ⚠  THESE ARE TYPES, NOT FACTS
 * ===========================================================================
 * This file defines SHAPES only. It contains no phone number, address,
 * licence, credential, hour, rating, or availability claim.
 *
 * Every optional field below is optional because the value is unverified
 * or unresolved. Populate only from confirmed business information.
 * Never fill one in to make an object look complete — 15 §102-103 and
 * CLAUDE.md §23 forbid fabricated completeness. An absent field is
 * correct; an invented one is a business-integrity failure.
 */

import type { MarketId } from './common'

/* ==========================================================================
   Markets — 02 §19
   ========================================================================== */

/**
 * Google Business Profile status for a market (01 §21, 15 §11, §106-108).
 *
 * Drives whether a `LocalBusiness` entity may exist at all. ONLY
 * `verified_physical_location` permits one (15 §9-12).
 *
 * `existing_type_unconfirmed` exists because the documented baseline
 * does not support a finer claim. 01 §21 and 15 §11 record that
 * St. Louis has an existing GBP, but neither states whether it is a
 * storefront or a service-area business — that is PENDING-002.
 *
 * ⚠ A GBP is not an address licence. 15 §11: "The GBP itself does not
 * authorize inventing or exposing an address that has not been approved
 * for website publication." So `existing_type_unconfirmed` permits no
 * LocalBusiness entity and no published address either.
 */
export type GbpStatus =
  | 'verified_physical_location'
  | 'service_area_business'
  | 'existing_type_unconfirmed'
  | 'none_identified'
  | 'planned'

/**
 * True only when a market may carry a `LocalBusiness` schema entity.
 *
 * Deliberately single-valued. 15 §12 prohibits fake LocalBusiness
 * entities; an unconfirmed GBP type is not verification.
 */
export function permitsLocalBusinessEntity(market: {
  gbpStatus: GbpStatus
  physicalLocation?: PhysicalLocation
}): boolean {
  return (
    market.gbpStatus === 'verified_physical_location' &&
    market.physicalLocation !== undefined
  )
}

/**
 * A market as a first-class entity, distinct from a location record.
 *
 * 02 §19: "Do not hard-code market business facts directly inside
 * components." Components receive a `Market`; they never inline the
 * city, state, or status.
 */
export interface Market {
  id: MarketId
  /** Display name, e.g. "St. Louis, MO". */
  name: string
  city: string
  /** Full state name, e.g. "Missouri". */
  state: string
  /** Two-letter code, e.g. "MO". */
  stateCode: string
  slug: string
  gbpStatus: GbpStatus

  /**
   * ⚠ Present ONLY for a verified physical branch (15 §10, §12).
   *
   * Absent means no `LocalBusiness` entity, no address in schema, and
   * no copy implying a local office. A market hub page is NOT a
   * business address (15 §80).
   */
  physicalLocation?: PhysicalLocation

  /**
   * ⚠ Market-specific phone (15 §76). Absent unless verified. Never
   * substitute the primary number to fill the field.
   */
  phone?: string
}

/**
 * A verified physical business location.
 *
 * Only instantiate for a market with `gbpStatus:
 * 'verified_physical_location'`. 15 §12 prohibits fake LocalBusiness
 * entities; 09 §113 prohibits fake local commercial presence.
 */
export interface PhysicalLocation {
  streetAddress: string
  addressLocality: string
  addressRegion: string
  postalCode: string
  addressCountry: string
  /** 15 §79. Omit rather than approximate. */
  geo?: { latitude: number; longitude: number }
  /** 15 §77. Omit rather than guess. */
  openingHours?: string[]
}

/* ==========================================================================
   Organization — 15 §8, §70-74
   ========================================================================== */

/**
 * The single Organization entity.
 *
 * 15 §4 and §111: ONE organization across all markets. Market pages are
 * not separate companies. Never model an SEO page as its own business.
 */
export interface OrganizationConfig {
  /** Public brand name. */
  name: string
  /** 15 §72. Present only if it differs from the public brand. */
  legalName?: string
  /** 15 §70. Must match visible site content (15 §67). */
  description: string
  /** Canonical origin. Sourced from env, never a literal (02 §53). */
  url: string
  logo?: ImageAsset
  /** 15 §26-27. Only profiles that genuinely exist and are controlled. */
  sameAs?: string[]
  /** 15 §75. */
  contactPoints?: ContactPoint[]
  /** 15 §69. Topics the organization demonstrably covers on the site. */
  knowsAbout?: string[]
}

/** 15 §73-74. */
export interface ImageAsset {
  url: string
  width?: number
  height?: number
  alt?: string
}

/** 15 §75. */
export interface ContactPoint {
  telephone?: string
  email?: string
  contactType: string
  areaServed?: MarketId[]
  availableLanguage?: string[]
}

/* ==========================================================================
   Site configuration
   ========================================================================== */

/**
 * Runtime site configuration.
 *
 * ⚠ `origin` is blocked on PENDING-001 (canonical domain, apex vs www).
 *
 * It must come from `NEXT_PUBLIC_SITE_URL`, never a hard-coded literal.
 * 02 §53 and CLAUDE.md §53-54 forbid baking localhost, a Cloudflare
 * preview host, or a guessed production domain into canonicals, schema
 * `@id` values, the sitemap, or metadata.
 */
export interface SiteConfig {
  /** Canonical origin with no trailing slash, e.g. `https://example.com`. */
  origin: string
  organization: OrganizationConfig
  markets: Record<MarketId, Market>
  /** Default social share image. */
  defaultOgImage?: ImageAsset
}

/* ==========================================================================
   Positioning guardrails — 01, 15 §64-65
   ========================================================================== */

/**
 * Service positioning boundary.
 *
 * The Sewer Pros is an INSPECTION, DIAGNOSTICS, LOCATING, and CLEANING
 * business. It is not a sewer repair or replacement contractor
 * (01, 09 §125, 15 §65, CLAUDE.md §23).
 *
 * Consequences enforced elsewhere in these types:
 *   - no repair/replacement service entity exists in `ServiceId`
 *   - 15 §64 restricts the `Plumber` schema type
 *   - repair topics may appear only as educational content (15 §66)
 */
export type ServicePositioning =
  | 'inspection'
  | 'diagnostics'
  | 'locating'
  | 'cleaning'
