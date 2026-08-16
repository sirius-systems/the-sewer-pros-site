/**
 * SEO metadata types.
 *
 * Authority: docs/02-nextjs-technical-architecture.md §37, §53
 *            docs/05-url-routing-strategy.md §66, §118
 *            docs/10-seo-strategy.md
 *
 * Metadata is generated through shared helpers (`generatePageMetadata`),
 * never hand-written per page (02 §37).
 */

import type { Pathname } from './common'
import type { MasterPageRecord } from './page'

/* ==========================================================================
   Robots
   ========================================================================== */

/**
 * Robots directives.
 *
 * ⚠ Derive these from the page record via `robotsForPage()`. Never set
 * them by hand — the indexability rule lives in 04 §4 and must have one
 * implementation.
 */
export interface RobotsDirective {
  index: boolean
  follow: boolean
  /** Google-specific extensions, e.g. `max-snippet`. */
  googleBot?: { index: boolean; follow: boolean }
}

/**
 * Computes robots directives from a page's authorisation status.
 *
 * `launch_pending_validation` yields `index: false` while remaining
 * `follow: true` — the page is reachable and its outbound links still
 * carry equity, but it must not be indexed until validated (04 §3-4).
 * This is the mechanism gating the five Las Vegas pages (DEC-063,
 * PENDING-012).
 */
export function robotsForPage(
  page: Pick<MasterPageRecord, 'status' | 'indexable'>,
): RobotsDirective {
  const index = page.status === 'launch' && page.indexable === true
  return { index, follow: true }
}

/* ==========================================================================
   Metadata — 02 §37
   ========================================================================== */

export interface OpenGraphMetadata {
  title: string
  description: string
  image?: string
  type?: 'website' | 'article'
}

/**
 * Resolved metadata for one page.
 *
 * `canonical` is an absolute URL built from the site origin plus the
 * page's `Pathname`. It must carry a trailing slash (DEC-061, 15 §114)
 * and must never contain a development or preview host (02 §53).
 */
export interface SeoMetadata {
  title: string
  description: string
  canonical: string
  robots?: RobotsDirective
  openGraph?: OpenGraphMetadata
}

/**
 * Input to the metadata helper.
 *
 * Carries the page record rather than loose strings so the helper can
 * apply the indexability rule itself.
 */
export interface MetadataInput {
  page: MasterPageRecord
  title: string
  description: string
  ogImage?: string
}

/* ==========================================================================
   Breadcrumbs — 03 §53, 05 §118, 15 §54
   ========================================================================== */

/**
 * One breadcrumb entry.
 *
 * Trails are built by walking `parentId` up the approved page registry.
 * Every link target must itself be an approved page (05 §117, 16 §25) —
 * a trail may never point at an unapproved parent. That constraint is
 * what made the Mission Valley orphan a genuine defect.
 */
export interface BreadcrumbItem {
  name: string
  pathname: Pathname
  position: number
}

/* ==========================================================================
   Sitemap — 04 §4
   ========================================================================== */

export type SitemapChangeFrequency =
  | 'always'
  | 'hourly'
  | 'daily'
  | 'weekly'
  | 'monthly'
  | 'yearly'
  | 'never'

/**
 * A sitemap entry.
 *
 * ⚠ Only pages passing `isIndexable()` may produce one. Records with
 * status `launch_pending_validation` are excluded by 04 §4.
 */
export interface SitemapEntry {
  url: string
  lastModified?: string
  changeFrequency?: SitemapChangeFrequency
  priority?: number
}
