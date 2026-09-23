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
 * `aggregateRating`  — 15 §61, DEC-028. Verified rating data DOES now
 *                      exist (4.9 from 595 reviews, DEC-085), but that
 *                      decision approves it as VISIBLE TEXT only and
 *                      restates DEC-028 as remaining in force. The
 *                      absence is not pending better data: self-serving
 *                      ratings on Organization/LocalBusiness are
 *                      ineligible for Google review-snippet stars
 * `sameAs`           — 15 §26-27. 01 §22 records San Diego social
 *                      presence but supplies no URLs, and a profile must
 *                      be verified as official and controlled first
 * `image`            — no approved photograph of the business. `logo`
 *                      IS now present: the DEC-096 brand package
 *                      supplied one, so the reason for its absence is
 *                      gone. `image` is a different claim and stays out
 * `priceRange`       — never documented; 15 §103 names it explicitly
 *
 * 15 §103: "A smaller accurate schema object is preferable to a larger
 * inaccurate one."
 *
 * ---------------------------------------------------------------------------
 * ⚠ `foundingDate` IS NOW PRESENT — OWNER OVERRIDE, RECORDED RATHER
 * THAN SILENTLY REVERSING THE NOTE ABOVE
 * ---------------------------------------------------------------------------
 * This field was withheld for the reason once documented here: St.
 * Louis (2011) and San Diego (2015) are separate per-market facts
 * (DEC-070, DEC-071), and electing one as the ORGANISATION's founding
 * year risked asserting something no single source states company-wide.
 *
 * `foundingYear` (`data/business/organization.ts`) is sourced
 * separately, from the business's own `/about/` page rather than a
 * market site, and is what the rebuilt `/about/` page now states as the
 * company's founding year in its own visible copy (`content/pages/about.tsx`).
 * 15 §67 requires schema to match visible content; it does not require
 * inferring the organisation's founding year FROM the market sites when
 * the organisation's own page already states one directly. The owner
 * confirmed this reading and asked for the field. If that value is ever
 * shown to have come from the St. Louis site rather than the company's
 * own `/about/` page, remove this field rather than re-deriving it from
 * a market fact.
 */

import type { MarketId } from '@/types'
import type {
  ContactPointNode,
  OrganizationNode,
  PersonNode,
  PlaceNode,
  SchemaId,
} from '@/types'
import { SCHEMA_FRAGMENT } from '@/types'
import { siteOrigin, organization as orgFacts, foundingYear } from '@/data/business'
import { marketList, marketOperatingDetail } from '@/data/markets'
import { serviceList } from '@/data/services'

/* ==========================================================================
   Stable @id values — 15 §5
   ========================================================================== */

export function organizationId(): SchemaId {
  return `${siteOrigin()}/${SCHEMA_FRAGMENT.organization}`
}

/**
 * The logo node's stable id.
 *
 * Every node in this graph is addressable (15 §85), the logo included,
 * so anything that needs to reference the mark points at one id rather
 * than repeating the URL and risking two nodes for one image.
 */
export function logoId(): SchemaId {
  return `${siteOrigin()}/${SCHEMA_FRAGMENT.logo}`
}

export function websiteId(): SchemaId {
  return `${siteOrigin()}/${SCHEMA_FRAGMENT.website}`
}

export function marketPlaceId(market: MarketId): SchemaId {
  return `${siteOrigin()}/${market}/${SCHEMA_FRAGMENT.place}`
}

export function founderId(slug: string): SchemaId {
  return `${siteOrigin()}/about/${SCHEMA_FRAGMENT.person}-${slug}`
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
    /*
      Owner-directed inclusion — see the header note above for why this
      was withheld and why it is back. `foundingYear` is the company's
      own stated founding year, not a market-site figure.
    */
    foundingDate: String(foundingYear),
    /*
      15 §26: the logo is how Google ties this entity to a mark it can
      show in a Knowledge Panel, so it is worth stating precisely
      rather than as a bare URL string.

      Absolute, because a schema URL is read outside the page's own
      context and a relative path resolves against nothing. Dimensions
      are the artwork's real 926x184, not a guess: a stated size that
      does not match the file is worse than none.
    */
    logo: {
      '@type': 'ImageObject',
      '@id': logoId(),
      url: `${siteOrigin()}/images/brand/logos/01-primary-logo/the-sewer-pros-logo-primary-transparent.png`,
      width: 926,
      height: 184,
    },
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

/* ==========================================================================
   Founders — `/about/` only
   ========================================================================== */

/**
 * The two founders, as `Person` nodes.
 *
 * ⚠ CALLER-GATED, NOT EMITTED BY DEFAULT. Only `pageSchema()` for
 * `/about/` pushes these into the graph — see the caller. 15 §67 needs
 * the visible page to carry the same names and roles, which is true of
 * `/about/`'s `LeadershipProfile` section and nowhere else, so this is
 * not part of `organizationNode()` itself.
 *
 * Name and role text is fixed here rather than read from
 * `content/pages/about.tsx`'s `AboutPageContent.leadership`, because
 * that array also carries the prose bio and `photoLabel`, neither of
 * which belongs in schema (15 §67's "add only what is visible" reads
 * narrowly: name and role are stated as fact, a bio is editorial).
 */
export function founders(): PersonNode[] {
  return [
    {
      '@type': 'Person',
      '@id': founderId('tracy-coffman'),
      name: 'Tracy Coffman',
      jobTitle: 'Co-Founder, Customer Experience and Operations',
      worksFor: { '@id': organizationId() },
    },
    {
      '@type': 'Person',
      '@id': founderId('rick-coffman'),
      name: 'Rick Coffman',
      jobTitle: 'Co-Founder, Field Expertise and Real Estate Inspection Experience',
      worksFor: { '@id': organizationId() },
    },
  ]
}
