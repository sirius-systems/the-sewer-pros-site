/**
 * Page content shapes.
 *
 * Authority: docs/14-content-specification.md
 *            docs/18-design-system.md §109-115
 *            docs/02-nextjs-technical-architecture.md §27, §43
 *
 * ===========================================================================
 * STRUCTURE HERE, PROSE IN `content/`
 * ===========================================================================
 * These types describe what a page family is MADE OF. They deliberately
 * do not model sentences.
 *
 * The systematic parts — hero, process steps, FAQ entries, related page
 * ids — are typed, because they are rendered identically everywhere and
 * because related links must be page ids rather than hrefs (16 §25).
 *
 * The explanatory parts are a `ReactNode` slot. 14 requires genuinely
 * differentiated writing per page (§21's substitution tests), and
 * 18 §132 warns that design "must not force content into artificially
 * short sections". A field-per-paragraph schema would do exactly that,
 * and would quietly encourage the token-substitution pattern CLAUDE.md
 * §20-21 forbids.
 *
 * ⚠ No content is authored in this file. Page content is step 20.
 */

import type { ReactNode } from 'react'
import type { PageId } from './common'
import type { CardImage } from './media'

/* ==========================================================================
   Shared pieces
   ========================================================================== */

/** Hero copy. 18 §37: a hero must explain the page without an image. */
export interface HeroContent {
  eyebrow?: string
  /**
   * The page H1.
   *
   * Should match the page's intent and be unique across the site
   * (14, 02 §36). Not automatically the registry's page name — that
   * name is an inventory label and may be longer or more systematic
   * than good on-page copy.
   */
  title: string
  intro?: ReactNode
}

/** One question and its answer (14 §35, 12 answer-first). */
export interface FaqContent {
  question: string
  answer: ReactNode
}

/** A step in a documented process (18 §65). */
export interface ProcessContent {
  title: string
  description?: string
  /**
   * Optional approved artwork. `ProcessSteps` `cards` variant only.
   *
   * Unset on every step today. Present here as well as on the
   * component's own `ProcessStep` because this is the type a page's
   * authored content is checked against: without it the field exists
   * on the component but cannot be set from `homeContent`, which is
   * a slot that only looks open.
   */
  image?: CardImage
}

/**
 * A symptom, scenario, or goal that brings someone to this service.
 *
 * ⚠ 18 §70 and CLAUDE.md §70 forbid alarm copy. Describe a condition
 * worth investigating, not a catastrophe. See `ProblemGrid`.
 */
export interface ProblemContent {
  title: string
  description: string
}

/**
 * A practical deliverable of a service.
 *
 * ⚠ Must correspond to something The Sewer Pros actually performs
 * (06). CLAUDE.md §4: no repair, replacement, lining, CIPP, or
 * excavation deliverables unless formally added to the registry.
 */
export interface InclusionContent {
  title: string
  description: string
}

/**
 * An intent-routing destination on the home page.
 *
 * Approved page ids only, resolved through the approved-link layer —
 * never an href (CLAUDE.md §37, 16 §25).
 */
export interface RoutingContent {
  pageId: PageId
  description: string
  /**
   * Optional approved artwork.
   *
   * Unset on every entry today. `RoutingCards` grows a card to hold a
   * 7:4 crop only when one is present, and renders no image area at
   * all when it is not (18 §40-42).
   */
  image?: CardImage
}

/**
 * Service-area coverage for a market or location page.
 *
 * ⚠ No address, map, or directions field by design. PENDING-002
 * resolved the business model as service-area with no address, and
 * CLAUDE.md §29-30 forbid implying an office in San Diego or Las
 * Vegas. See `CoverageSection`.
 */
export interface CoverageContent {
  title: string
  intro?: string
  /** Approved location pages, rendered as links. */
  pageIds?: readonly PageId[]
  /** Registry names with no approved page, rendered as plain text. */
  names?: readonly string[]
  availabilityStatement: string
}

/**
 * A closing conversion block.
 *
 * The CTA label itself is NOT here — it comes from the single global
 * constant so wording stays consistent (18 §155, PENDING-007).
 */
export interface CtaContent {
  title: string
  body?: string
}

/* ==========================================================================
   Base
   ========================================================================== */

export interface BasePageContent {
  hero: HeroContent
  /**
   * Meta title, where it should differ from the H1.
   *
   * 02 §36 wants a unique title per page. `hero.title` is already
   * authored per page and reflects intent, so it is the default; set
   * this only where the search-result title should read differently.
   */
  seoTitle?: string
  /**
   * Meta description. Authored per page (CLAUDE.md §36).
   *
   * ⚠ Omitted rather than generated when absent. A templated
   * description assembled from tokens is worse than none — search
   * engines write a better one from page content, and 15 §102-103's
   * preference for omission over placeholder applies here too.
   */
  metaDescription?: string
  /** Explanatory sections. Rendered inside a reading-width container. */
  body?: ReactNode
  faq?: readonly FaqContent[]
  /**
   * Explicit related pages (CLAUDE.md §37).
   *
   * Approved ids only. Never a derived list from the service registry,
   * the location registry, or the matrix.
   */
  relatedPageIds?: readonly PageId[]
  relatedTitle?: string
  cta?: CtaContent
}

/* ==========================================================================
   Per-family content — 18 §110-115
   ========================================================================== */

/** Home — 18 §110. */
export interface HomePageContent extends BasePageContent {
  services: readonly { pageId: PageId; description?: string }[]
  /** Intent-routing cards, rendered between hero and services. */
  routing?: readonly RoutingContent[]
  process?: readonly ProcessContent[]
  differentiator?: { title: string; intro?: string }
}

/** Canonical service page — 18 §111. */
export interface ServicePageContent extends BasePageContent {
  process?: readonly ProcessContent[]
  /** "When you may need this" — see `ProblemContent`. */
  problems?: readonly ProblemContent[]
  /** "What's included" — see `InclusionContent`. */
  inclusions?: readonly InclusionContent[]
  /** Shows the independent-model contrast. Off by default. */
  showDifferentiator?: boolean
  /** Shows market coverage beneath the service explanation. */
  showMarkets?: boolean
}

/** Market hub — 18 §112. */
export interface MarketPageContent extends BasePageContent {
  /** Approved location pages within this market. */
  locationPageIds?: readonly PageId[]
  /** Served communities plus an availability statement. No map. */
  coverage?: CoverageContent
  /** Services to feature for this market. */
  services?: readonly { pageId: PageId; description?: string }[]
}

/** Location page — 18 §79, §112. */
export interface LocationPageContent extends BasePageContent {
  /** Approved service + location pages for this location. */
  servicePageIds?: readonly PageId[]
  /** Served communities plus an availability statement. No map. */
  coverage?: CoverageContent
}

/** Service + location page — 05 §119, 14 §21. */
export interface ServiceLocationPageContent extends BasePageContent {
  process?: readonly ProcessContent[]
  problems?: readonly ProblemContent[]
  inclusions?: readonly InclusionContent[]
  coverage?: CoverageContent
}

/** Audience page — 18 §113. */
export interface AudiencePageContent extends BasePageContent {
  process?: readonly ProcessContent[]
  problems?: readonly ProblemContent[]
  inclusions?: readonly InclusionContent[]
  services?: readonly { pageId: PageId; description?: string }[]
}

/** Commercial service page — 18 §114. */
export interface CommercialPageContent extends BasePageContent {
  process?: readonly ProcessContent[]
  problems?: readonly ProblemContent[]
  inclusions?: readonly InclusionContent[]
}

/** Comparison page — 18 §66, 05 §41. */
export interface ComparisonPageContent extends BasePageContent {
  /**
   * "When each applies" — the neutral framing of the comparison.
   *
   * 18 §66 and CLAUDE.md §65 forbid manipulating visual emphasis so
   * the preferred option always wins, so there is no "recommended"
   * field by design and both options must be described in the same
   * register.
   */
  problems?: readonly ProblemContent[]
}

/** Resource article — 18 §115, 15 §47-50. */
export interface ResourcePageContent extends BasePageContent {
  /**
   * The direct answer, rendered before the detailed sections
   * (14 §35, 12).
   */
  directAnswer?: ReactNode
  /**
   * ISO date. 18 §78 and CLAUDE.md §78: update only when substantive
   * content changes justify it — never to appear fresh.
   */
  dateModified?: string
}

/** Hub page — services, locations, for, commercial, resources. */
export interface HubPageContent extends BasePageContent {
  items?: readonly { pageId: PageId; description?: string }[]
}

/** Core page — about, contact, faq. */
export interface CorePageContent extends BasePageContent {
  placeholder?: never
}
