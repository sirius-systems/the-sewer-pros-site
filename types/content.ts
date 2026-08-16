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
  process?: readonly ProcessContent[]
  differentiator?: { title: string; intro?: string }
}

/** Canonical service page — 18 §111. */
export interface ServicePageContent extends BasePageContent {
  process?: readonly ProcessContent[]
  /** Shows the independent-model contrast. Off by default. */
  showDifferentiator?: boolean
  /** Shows market coverage beneath the service explanation. */
  showMarkets?: boolean
}

/** Market hub — 18 §112. */
export interface MarketPageContent extends BasePageContent {
  /** Approved location pages within this market. */
  locationPageIds?: readonly PageId[]
  /** Services to feature for this market. */
  services?: readonly { pageId: PageId; description?: string }[]
}

/** Location page — 18 §79, §112. */
export interface LocationPageContent extends BasePageContent {
  /** Approved service + location pages for this location. */
  servicePageIds?: readonly PageId[]
}

/** Service + location page — 05 §119, 14 §21. */
export interface ServiceLocationPageContent extends BasePageContent {
  process?: readonly ProcessContent[]
}

/** Audience page — 18 §113. */
export interface AudiencePageContent extends BasePageContent {
  process?: readonly ProcessContent[]
  services?: readonly { pageId: PageId; description?: string }[]
}

/** Commercial service page — 18 §114. */
export interface CommercialPageContent extends BasePageContent {
  process?: readonly ProcessContent[]
}

/** Comparison page — 18 §66, 05 §41. */
export interface ComparisonPageContent extends BasePageContent {
  /**
   * Comparison pages are prose- and table-led. 18 §66 forbids
   * manipulating visual emphasis so the preferred option always wins,
   * so there is no "recommended" field by design.
   */
  placeholder?: never
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
