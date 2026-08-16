/**
 * Schema utilities barrel.
 *
 * Build sequence step 15 (docs/02-nextjs-technical-architecture.md §103).
 * Governed by docs/15-schema-entity-strategy.md.
 *
 * ---------------------------------------------------------------------------
 * THE ENTITY MODEL, IN ONE PLACE
 * ---------------------------------------------------------------------------
 *   ONE Organization across all markets (15 §4, §111)
 *   NO LocalBusiness, NO PostalAddress — anywhere, permanently
 *   Coverage as Service + areaServed + Place (15 §13, §22)
 *
 * DEC-072 settled that structurally: the business has no physical
 * address because service happens at the customer's location. This is
 * the correct model for a Service-Area-Business, not a gap awaiting
 * verification.
 *
 * ---------------------------------------------------------------------------
 * DELIBERATELY ABSENT
 * ---------------------------------------------------------------------------
 * `AggregateRating` — 15 §61. No verified review data exists, and a
 *   fabricated rating is the highest-risk structured-data claim
 *   available to a local business.
 * `FAQPage` — 15 §57-58 require a per-page decision. `emitFaqSchema`
 *   exists but no page has been approved for it, so nothing emits it.
 * `Product` — 15 §37 forbids Product schema for services.
 * `Plumber` — 15 §64's guardrail. The business does not perform repair
 *   or replacement (15 §65), so the type would imply contracting work
 *   it does not do. `Organization` is used instead.
 * `author` on Articles — 15 §49: omit rather than invent.
 *
 * ⚠ Gated pages emit NO markup. `pageSchema()` returns undefined for
 * anything not indexable — structured data describing a `noindex` page
 * would ask a crawler to interpret an entity the page tells it to
 * ignore (15 §115, DEC-063).
 */

export {
  organizationNode,
  organizationId,
  websiteId,
  marketPlace,
  marketPlaceId,
  serviceId,
  servedMarkets,
} from './organization'

export { pageSchema } from './graph'
export type { PageSchemaInput } from './graph'
