import type { MetadataRoute } from 'next'
import { indexablePages } from '@/data/pages'
import { contentReadyPages } from '@/content'
import { absoluteUrl } from '@/data/business'

/**
 * XML sitemap.
 *
 * Authority: docs/04-master-page-build-list.md §4
 *            docs/05-url-routing-strategy.md §80
 *            docs/19-analytics-measurement.md §83
 *            docs/22-decisions-change-log.md DEC-063, DEC-078
 *
 * Build sequence step 21, unblocked by DEC-078.
 *
 * ===========================================================================
 * TWO FILTERS, BOTH REQUIRED
 * ===========================================================================
 * A URL appears only if it is BOTH indexable and built.
 *
 *   indexable    status is exactly `launch` AND indexable === true (04 §4)
 *   built        content exists, so the route was generated
 *
 * The second filter matters as much as the first. An approved page
 * without content generates no route, and listing it would advertise a
 * 404 to search engines — 19 §83 treats sitemap accuracy as a crawl
 * signal, and 19 §84 counts URLs that do not resolve as crawl waste.
 *
 * ⚠ The five Las Vegas pages are excluded automatically. They carry
 * `launch_pending_validation`, which fails the first filter — DEC-063's
 * requirement that they stay out of the sitemap is satisfied by the
 * registry rather than by a hardcoded exception anyone could forget.
 *
 * No `lastModified`. A build-time date would restamp every URL on every
 * deploy, telling crawlers the whole site changed when nothing did —
 * the same reasoning 18 §78 applies to article dates.
 */
/**
 * Required under `output: 'export'` — Next needs the route declared
 * static, since there is no runtime to generate it on request
 * (02 §4, §5).
 */
export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const built = new Set(contentReadyPages.map((page) => page.id))

  return indexablePages
    .filter((page) => built.has(page.id))
    .map((page) => ({
      url: absoluteUrl(page.pathname),
    }))
}
