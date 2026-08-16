/**
 * Metadata generation.
 *
 * Authority: docs/02-nextjs-technical-architecture.md §36, §37, §53
 *            docs/05-url-routing-strategy.md §66, §79, §93-95
 *            docs/04-master-page-build-list.md §4
 *            docs/22-decisions-change-log.md DEC-061, DEC-078
 *
 * Build sequence step 14. Unblocked by DEC-078 confirming the canonical
 * origin as `https://www.thesewerpros.com` — 15 §5 requires `@id` and
 * canonical values stay stable once published, which is why this could
 * not be built provisionally and corrected later.
 *
 * ---------------------------------------------------------------------------
 * ROBOTS COMES FROM STATUS, NOT FROM A PROP
 * ---------------------------------------------------------------------------
 * 04 §4's indexability rule has one implementation, `robotsForPage()`,
 * and metadata reads it from the page record. No caller can pass
 * `index: true` for a gated page, because no caller passes robots at
 * all.
 *
 * That is what keeps the five Las Vegas pages out of the index while
 * they remain `launch_pending_validation` — the same registry fact that
 * excludes them from the sitemap and from navigation.
 */

import type { Metadata } from 'next'
import type { MasterPageRecord } from '@/types'
import { robotsForPage } from '@/types'
import { absoluteUrl, siteOrigin, SITE_NAME } from '@/data/business'

/** Content supplied per page for its metadata. */
export interface PageMetadataInput {
  page: MasterPageRecord
  /** Unique per page (02 §36). Should reflect actual page intent. */
  title: string
  /**
   * Unique per page, authored not generated (CLAUDE.md §36).
   *
   * Optional: where a page has no authored description, the tag is
   * omitted rather than filled with a token-assembled string.
   */
  description?: string
}

/**
 * Builds Next.js metadata for an approved page.
 *
 * `alternates.canonical` is the registry's canonical pathname made
 * absolute — never the requested URL, so a query string or a
 * non-canonical path cannot become a self-referencing canonical
 * (05 §79, §112).
 */
export function pageMetadata({
  page,
  title,
  description,
}: PageMetadataInput): Metadata {
  const robots = robotsForPage(page)
  const canonical = absoluteUrl(page.pathname)

  return {
    title,
    ...(description !== undefined && { description }),
    alternates: { canonical },
    robots: {
      index: robots.index,
      follow: robots.follow,
    },
    openGraph: {
      type: 'website',
      siteName: SITE_NAME,
      title,
      ...(description !== undefined && { description }),
      url: canonical,
    },
  }
}

/**
 * Root metadata, including `metadataBase`.
 *
 * `metadataBase` was deliberately absent from the layout since the
 * scaffold — Next resolves relative metadata URLs against it, and
 * without a confirmed origin every such URL would have resolved against
 * a guess. DEC-078 supplies it.
 */
export function rootMetadata(): Metadata {
  return {
    metadataBase: new URL(siteOrigin()),
    title: {
      default: SITE_NAME,
      template: `%s | ${SITE_NAME}`,
    },
    description:
      'Independent sewer inspection, diagnostics, locating, and cleaning.',
  }
}
