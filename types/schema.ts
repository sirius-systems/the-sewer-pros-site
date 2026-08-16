/**
 * Structured data (JSON-LD) types.
 *
 * Authority: docs/15-schema-entity-strategy.md
 *
 * ===========================================================================
 * THREE RULES THIS FILE ENCODES
 * ===========================================================================
 * 1. ONE Organization entity across all markets (15 §4, §111). Market
 *    pages are not separate companies.
 * 2. `LocalBusiness` ONLY for a verified physical branch (15 §9-12).
 *    Service markets use `Service` + `areaServed` + `Place` (15 §13).
 * 3. Schema must match visible content (15 §67). Never emit a claim the
 *    page does not make, and never emit a placeholder or null to fill a
 *    field (15 §102-103).
 *
 * Emitted as a single `@graph` per page with cross-references by `@id`,
 * not repeated full objects (15 §84-85).
 */

/* ==========================================================================
   @id — 15 §5
   ========================================================================== */

/**
 * A stable entity `@id`.
 *
 * Patterns (`<ORIGIN>` from config, never a literal — 15 §6):
 *
 *   <ORIGIN>/#organization
 *   <ORIGIN>/#website
 *   <ORIGIN>/{market}/#place
 *   <ORIGIN>/{market}/#localbusiness      ← verified branches only
 *   <ORIGIN>/services/{slug}/#service
 *   <CANONICAL_URL>#webpage
 *   <CANONICAL_URL>#breadcrumb
 *   <CANONICAL_URL>#article
 *
 * ⚠ Blocked on PENDING-001. `@id` values must stay stable once
 * published (15 §5), so they cannot be generated against a guessed
 * origin and corrected later.
 */
export type SchemaId = string

/** Well-known `@id` fragments (15 §5). */
export const SCHEMA_FRAGMENT = {
  organization: '#organization',
  website: '#website',
  place: '#place',
  localBusiness: '#localbusiness',
  service: '#service',
  webPage: '#webpage',
  breadcrumb: '#breadcrumb',
  article: '#article',
} as const

/** A reference to another node in the graph (15 §85). */
export interface SchemaRef {
  '@id': SchemaId
}

/* ==========================================================================
   Node types
   ========================================================================== */

/**
 * WebPage subtypes (15 §30).
 *
 * "Do not select a subtype simply because it sounds more SEO-friendly.
 * The type must reflect actual visible page purpose."
 */
export type WebPageType =
  | 'WebPage'
  | 'AboutPage'
  | 'ContactPage'
  | 'CollectionPage'
  | 'FAQPage'
  | 'ProfilePage'
  | 'ItemPage'

/**
 * Geographic entity type (15 §15).
 *
 * Selected by what the location actually is, not by uniform default.
 */
export type PlaceType = 'Place' | 'City' | 'AdministrativeArea' | 'Neighborhood'

/**
 * LocalBusiness type (15 §63-64).
 *
 * ⚠ `Plumber` carries a guardrail (15 §64): The Sewer Pros does not
 * perform sewer repair or replacement, so the type must not be applied
 * in a way that implies contracting work it does not do.
 */
export type LocalBusinessType = 'LocalBusiness' | 'Plumber'

/* ==========================================================================
   Node shapes
   ========================================================================== */

interface SchemaNodeBase {
  '@type': string
  '@id': SchemaId
}

/** 15 §8. Exactly one per site. */
export interface OrganizationNode extends SchemaNodeBase {
  '@type': 'Organization'
  name: string
  legalName?: string
  description?: string
  url: string
  logo?: SchemaRef | ImageObjectNode
  sameAs?: string[]
  contactPoint?: ContactPointNode[]
  knowsAbout?: string[]
}

/** 15 §28. */
export interface WebSiteNode extends SchemaNodeBase {
  '@type': 'WebSite'
  name: string
  url: string
  publisher: SchemaRef
}

/** 15 §29. */
export interface WebPageNode extends SchemaNodeBase {
  '@type': WebPageType
  name: string
  description?: string
  url: string
  isPartOf: SchemaRef
  about?: SchemaRef
  breadcrumb?: SchemaRef
  primaryImageOfPage?: SchemaRef
}

/**
 * 15 §17, §20. The service-market workhorse.
 *
 * `areaServed` expresses geographic coverage WITHOUT implying a local
 * office (15 §13, §22). This is how San Diego and Las Vegas are
 * represented — not as LocalBusiness entities.
 */
export interface ServiceNode extends SchemaNodeBase {
  '@type': 'Service'
  name: string
  description?: string
  serviceType?: string
  /** Always the single Organization (15 §21). */
  provider: SchemaRef
  areaServed?: (SchemaRef | PlaceNode)[]
  url?: string
  audience?: SchemaRef
}

/** 15 §14, §39. */
export interface PlaceNode extends SchemaNodeBase {
  '@type': PlaceType
  name: string
  /**
   * ⚠ A market hub is NOT a business address (15 §80). Only set this
   * for a verified physical location.
   */
  address?: PostalAddressNode
  geo?: GeoCoordinatesNode
  containedInPlace?: SchemaRef
}

/**
 * 15 §9-12. VERIFIED PHYSICAL BRANCHES ONLY.
 *
 * ⚠ Do not construct this for a market without a confirmed physical
 * location. 15 §12 ("No Fake LocalBusiness Entities") and CLAUDE.md §23
 * both prohibit it. `address` is required here precisely because a
 * LocalBusiness without a real address should not exist.
 */
export interface LocalBusinessNode extends SchemaNodeBase {
  '@type': LocalBusinessType
  name: string
  address: PostalAddressNode
  telephone?: string
  geo?: GeoCoordinatesNode
  openingHoursSpecification?: OpeningHoursNode[]
  parentOrganization: SchemaRef
  /** ⚠ 15 §61 — never emit without genuine, verifiable review data. */
  aggregateRating?: never
}

export interface PostalAddressNode {
  '@type': 'PostalAddress'
  streetAddress: string
  addressLocality: string
  addressRegion: string
  postalCode: string
  addressCountry: string
}

export interface GeoCoordinatesNode {
  '@type': 'GeoCoordinates'
  latitude: number
  longitude: number
}

export interface OpeningHoursNode {
  '@type': 'OpeningHoursSpecification'
  dayOfWeek: string[]
  opens: string
  closes: string
}

export interface ContactPointNode {
  '@type': 'ContactPoint'
  contactType: string
  telephone?: string
  email?: string
  areaServed?: string[]
}

export interface ImageObjectNode extends SchemaNodeBase {
  '@type': 'ImageObject'
  url: string
  width?: number
  height?: number
  caption?: string
}

/** 15 §41, §43. */
export interface AudienceNode extends SchemaNodeBase {
  '@type': 'Audience'
  audienceType: string
  name?: string
  geographicArea?: SchemaRef
}

/** 15 §54-55. */
export interface BreadcrumbListNode extends SchemaNodeBase {
  '@type': 'BreadcrumbList'
  itemListElement: ListItemNode[]
}

export interface ListItemNode {
  '@type': 'ListItem'
  position: number
  name: string
  item?: string
}

/** 15 §47-50. */
export interface ArticleNode extends SchemaNodeBase {
  '@type': 'Article' | 'BlogPosting'
  headline: string
  description?: string
  url: string
  /** 15 §48. Always the Organization. */
  publisher: SchemaRef
  /** 15 §49. Omit rather than invent an author. */
  author?: SchemaRef
  datePublished?: string
  dateModified?: string
  about?: SchemaRef[]
  mentions?: SchemaRef[]
}

/** 15 §34-35. */
export interface ItemListNode extends SchemaNodeBase {
  '@type': 'ItemList'
  itemListElement: ListItemNode[]
}

/* ==========================================================================
   Graph — 15 §84
   ========================================================================== */

export type SchemaNode =
  | OrganizationNode
  | WebSiteNode
  | WebPageNode
  | ServiceNode
  | PlaceNode
  | LocalBusinessNode
  | AudienceNode
  | BreadcrumbListNode
  | ArticleNode
  | ItemListNode
  | ImageObjectNode

/**
 * The single JSON-LD block emitted per page.
 *
 * One `<script type="application/ld+json">` containing one `@graph`,
 * with entities cross-referenced by `@id` rather than duplicated
 * (15 §83-85).
 */
export interface SchemaGraph {
  '@context': 'https://schema.org'
  '@graph': SchemaNode[]
}

/* ==========================================================================
   Guardrail
   ========================================================================== */

/**
 * Strips keys whose value is null, undefined, or an empty string.
 *
 * 15 §102: no null or placeholder values in structured data.
 * 15 §103: no fabricated completeness.
 *
 * The correct response to an unknown value is omission — which is what
 * this enforces at the serialisation boundary. Shallow by design;
 * nested nodes are built by their own typed factories.
 */
export function omitEmpty<T extends Record<string, unknown>>(node: T): T {
  return Object.fromEntries(
    Object.entries(node).filter(
      ([, value]) => value !== null && value !== undefined && value !== '',
    ),
  ) as T
}
