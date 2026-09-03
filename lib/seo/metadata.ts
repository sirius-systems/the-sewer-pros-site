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

/**
 * Brand assets used in metadata.
 *
 * Root-relative. `metadataBase` resolves them to absolute URLs, which
 * Open Graph requires — a relative og:image is ignored by most
 * platforms (02 §53, DEC-078 for the origin).
 *
 * Approved artwork from the DEC-096 brand package. The paths are
 * literal rather than derived because they are asset locations, not
 * content, and nothing else should be able to point og:image at an
 * arbitrary file.
 */
const BRAND_ASSETS = '/images/brand/logos'
const OG_IMAGE = `${BRAND_ASSETS}/04-digital/the-sewer-pros-open-graph.png`

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
      // 1200x630, the size every major platform crops from. Declared
      // per page rather than only at the root so a shared link to any
      // route carries the brand mark rather than an empty card.
      images: [
        {
          url: OG_IMAGE,
          width: 1200,
          height: 630,
          alt: `${SITE_NAME}, sewer and drain specialists`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      ...(description !== undefined && { description }),
      images: [OG_IMAGE],
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
    /*
      Icons.

      `app/favicon.ico` is the brand favicon and Next's file convention
      emits its own <link rel="icon"> for it, so it is deliberately NOT
      repeated here — declaring it twice would ship two competing tags.
      What is declared is everything the file convention does not cover:
      the crisp PNG sizes modern browsers prefer, and the Apple touch
      icon for a home-screen bookmark.

      The android-chrome 192/512 assets in the brand package are web
      app manifest icons. They stay unreferenced until a manifest
      exists, since naming and theming an installable app is a business
      decision rather than a wiring one.
    */
    icons: {
      icon: [
        { url: `${BRAND_ASSETS}/04-digital/favicon-32x32.png`, sizes: '32x32', type: 'image/png' },
        { url: `${BRAND_ASSETS}/04-digital/favicon-16x16.png`, sizes: '16x16', type: 'image/png' },
      ],
      apple: [
        { url: `${BRAND_ASSETS}/04-digital/apple-touch-icon.png`, sizes: '180x180', type: 'image/png' },
      ],
    },
    title: {
      default: SITE_NAME,
      template: `%s | ${SITE_NAME}`,
    },
    description:
      'Independent sewer inspection, diagnostics, locating, and cleaning.',
  }
}
