/**
 * The Organization entity.
 *
 * Authority: docs/15-schema-entity-strategy.md §4-13, §21-22, §26-27,
 *            §61, §63-65, §69-80, §102-103, §111
 *            docs/22-decisions-change-log.md DEC-072, DEC-078
 *
 * Build sequence step 15, unblocked by DEC-078.
 *
 * ===========================================================================
 * ONE ORGANIZATION, NO LocalBusiness, NO ADDRESS — PERMANENTLY
 * ===========================================================================
 * 15 §4 and §111: one company entity across all three markets. Markets
 * are not separate businesses and must never be modelled as such.
 *
 * DEC-072 settled the address question structurally rather than
 * temporarily. There is no physical address anywhere — service is
 * delivered at the customer's location under a Service-Area-Business
 * model. So:
 *
 *   - `permitsLocalBusinessEntity()` returns false for every market,
 *     and will keep returning false
 *   - no `LocalBusiness` node is emitted anywhere on the site
 *   - no `PostalAddress` node exists in the codebase
 *   - coverage is expressed as `Service` + `areaServed` + `Place`
 *     (15 §13, §22)
 *
 * This is not caution pending verification. It is the correct model for
 * how the business actually operates.
 *
 * ---------------------------------------------------------------------------
 * WHAT IS ABSENT, AND WHY EACH ABSENCE IS DELIBERATE
 * ---------------------------------------------------------------------------
 * `address`          — none exists (DEC-072)
 * `aggregateRating`  — 15 §61. No verified review data exists, and a
 *                      fabricated rating is the single highest-risk
 *                      structured-data claim a local business can make
 * `sameAs`           — 15 §26-27. 01 §22 records San Diego social
 *                      presence but supplies no URLs, and a profile must
 *                      be verified as official and controlled first
 * `logo` / `image`   — no approved asset
 * `foundingDate`     — St. Louis 2011 and San Diego 2015 are per-market
 *                      facts (DEC-070, DEC-071). The ORGANISATION has no
 *                      single founding year, and 01 §20 forbids electing
 *                      one market's as the company's
 * `priceRange`       — never documented; 15 §103 names it explicitly
 *
 * 15 §103: "A smaller accurate schema object is preferable to a larger
 * inaccurate one."
 */

import type { MarketId } from '@/types'
import type { ContactPointNode, OrganizationNode, PlaceNode, SchemaId } from '@/types'
import { SCHEMA_FRAGMENT } from '@/types'
import { siteOrigin, organization as orgFacts } from '@/data/business'
import { marketList, marketOperatingDetail } from '@/data/markets'
import { serviceList } from '@/data/services'

/* ==========================================================================
   Stable @id values — 15 §5
   ========================================================================== */

export function organizationId(): SchemaId {
  return `${siteOrigin()}/${SCHEMA_FRAGMENT.organization}`
}

export function websiteId(): SchemaId {
  return `${siteOrigin()}/${SCHEMA_FRAGMENT.website}`
}

export function marketPlaceId(market: MarketId): SchemaId {
  return `${siteOrigin()}/${market}/${SCHEMA_FRAGMENT.place}`
}

export function serviceId(canonicalUrl: string): SchemaId {
  return `${siteOrigin()}${canonicalUrl}${SCHEMA_FRAGMENT.service}`
}

/* ==========================================================================
   Place nodes — 15 §14-15
   ========================================================================== */

/**
 * A market as a Place.
 *
 * ⚠ No `address` and no `geo`. 15 §80: "a market hub is not a business
 * address." These describe geography the business serves, not premises
 * it occupies — which is the whole distinction the SAB model turns on.
 *
 * Typed `City` rather than `Place`: all three markets are cities, and
 * 15 §15 asks for the type that reflects what the location actually is.
 */
export function marketPlace(market: MarketId): PlaceNode {
  const record = marketList.find((m) => m.id === market)
  return {
    '@type': 'City',
    '@id': marketPlaceId(market),
    name: record?.name ?? market,
  }
}

/* ==========================================================================
   Contact points — 15 §75-76
   ========================================================================== */

/**
 * One contact point per market that publishes a phone number.
 *
 * 15 §76 and 01 §20: market phone numbers are market facts. St. Louis
 * and San Diego publish different numbers; Las Vegas's came from the
 * owner. Each is scoped by `areaServed` so none is presented as the
 * others'.
 */
function contactPoints(): ContactPointNode[] {
  const points: ContactPointNode[] = []

  for (const market of marketList) {
    const detail = marketOperatingDetail[market.id]
    if (detail === undefined) continue

    points.push({
      '@type': 'ContactPoint',
      contactType: 'customer service',
      telephone: detail.phoneE164,
      areaServed: [market.stateCode],
    })
  }

  return points
}

/* ==========================================================================
   knowsAbout — 15 §69, §91
   ========================================================================== */

/**
 * Topics the organisation demonstrably covers.
 *
 * Derived from the approved service registry rather than hand-listed,
 * per 15 §91 — so it cannot drift from what the site actually offers,
 * and cannot become the keyword-stuffing 15 §68 warns against.
 *
 * ⚠ Nothing repair-related appears here. 15 §65 forbids a sewer repair
 * entity, and the registry contains none to derive one from.
 */
function knowsAbout(): string[] {
  return serviceList.map((service) => service.name)
}

/* ==========================================================================
   The Organization
   ========================================================================== */

export function organizationNode(): OrganizationNode {
  return {
    '@type': 'Organization',
    '@id': organizationId(),
    name: orgFacts.name,
    url: `${siteOrigin()}/`,
    description: orgFacts.description,
    contactPoint: contactPoints(),
    knowsAbout: knowsAbout(),
  }
}

/**
 * Markets the organisation serves, as Place references.
 *
 * All three are included. The business operates in all three — Las
 * Vegas confirmed by the owner (DEC-074) with its service menu recorded
 * (DEC-076).
 *
 * ⚠ This is deliberately independent of DEC-063's indexation gate.
 * `areaServed` states where the business works; the gate governs which
 * PAGES may be indexed. A Place node carries no URL and exposes no
 * page, so including Las Vegas neither reveals nor promotes the five
 * gated routes.
 */
export function servedMarkets(): PlaceNode[] {
  return marketList.map((market) => marketPlace(market.id))
}
