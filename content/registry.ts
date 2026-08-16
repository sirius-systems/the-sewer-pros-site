/**
 * Page content registry.
 *
 * Authority: docs/14-content-specification.md
 *            docs/04-master-page-build-list.md §4
 *            docs/02-nextjs-technical-architecture.md §10, §43
 *
 * ===========================================================================
 * APPROVAL AUTHORISES; CONTENT ENABLES
 * ===========================================================================
 * Doc 04 decides which pages MAY exist. It does not assert that all 70
 * exist today. This registry decides which of them are actually
 * writable right now.
 *
 * `generateStaticParams()` therefore reads pages that are BOTH approved
 * and content-ready. An approved page with no content simply does not
 * build yet — which is correct, because the alternative is shipping a
 * thin page, and 14 §84 and CLAUDE.md §20 both forbid that more
 * strongly than they require completeness.
 *
 * ---------------------------------------------------------------------------
 * WHY SOME PAGES ARE NOT WRITTEN
 * ---------------------------------------------------------------------------
 * 14 §42 requires location pages carry property patterns, housing-stock
 * age, applicable municipal programs, verified pipe materials, and
 * local real-estate context. 14 §79's test is explicit: if "St. Louis"
 * could be swapped for "San Diego" unchanged, the content is
 * insufficient.
 *
 * None of that is derivable from this repository. The location registry
 * holds names, slugs, and research status — not housing stock or
 * municipal program facts. Writing those pages from inference would
 * produce exactly the fabricated localisation CLAUDE.md §73 and §100
 * prohibit.
 *
 * `pendingContent` below records each unwritten page with the reason
 * and what would unblock it, so the gap is a tracked manifest rather
 * than a silent absence.
 *
 * ---------------------------------------------------------------------------
 * ⚠ THE MARKET ROUTE FILES DO NOT EXIST YET
 * ---------------------------------------------------------------------------
 * `app/[market]/page.tsx` and `app/[market]/[...segments]/page.tsx` have
 * been removed rather than left generating nothing. Under
 * `output: 'export'`, Next fails the build when `generateStaticParams()`
 * returns an empty array, so a route file with no content is not a
 * neutral placeholder — it is a broken build.
 *
 * `marketHubParams()` and `marketCatchAllParams()` in `lib/routing`
 * already exist and already read the registry. Restoring the two route
 * files is the only step needed once market, location, or
 * service+location content lands.
 */

import type { PageId } from '@/types'
import { approvedPages, routablePages } from '@/data/pages'

/** Why an approved page has no content yet. */
export interface PendingContentEntry {
  reason: string
  /** What must be obtained or decided before it can be written. */
  unblockedBy: string
}

/**
 * Approved pages awaiting content, with the reason for each.
 *
 * Keyed by the doc 04 page id. Every entry here is a page that MAY be
 * published once written — none is a governance question.
 */
export const pendingContent: Partial<Record<PageId, PendingContentEntry>> = {}

function markPending(
  ids: readonly string[],
  entry: PendingContentEntry,
): void {
  for (const id of ids) {
    pendingContent[id as PageId] = entry
  }
}

/* ---------------------------------------------------------------------------
   Location and service + location pages — 30 records
   --------------------------------------------------------------------------- */

const LOCAL_RESEARCH: PendingContentEntry = {
  reason:
    '14 §42 requires property patterns, housing-stock age, applicable ' +
    'municipal programs, verified pipe materials, and local real-estate ' +
    'context. None is present in the location registry, and 14 §79 ' +
    'rejects content that survives swapping the city name.',
  unblockedBy:
    'Verified local research per CLAUDE.md §22 — municipality sources ' +
    'for sewer programs, housing-stock data, and confirmed service ' +
    'conditions for each market.',
}

markPending(
  approvedPages
    .filter((p) => p.pageType === 'location' || p.pageType === 'service-location')
    .filter((p) => p.marketId !== 'st-louis-mo')
    .map((p) => p.id),
  LOCAL_RESEARCH,
)

/* ---------------------------------------------------------------------------
   Market hubs — 3 records
   --------------------------------------------------------------------------- */

markPending(
  approvedPages
    .filter((p) => p.pageType === 'market')
    .filter((p) => p.marketId !== 'st-louis-mo')
    .map((p) => p.id),
  {
    reason:
      '14 §38-40 set per-market content requirements grounded in local ' +
      'conditions. Las Vegas additionally has zero of 18 services ' +
      'confirmed, so its page cannot state that any service is offered ' +
      '(01 §20, §26).',
    unblockedBy:
      'Verified local research for St. Louis and San Diego; PENDING-012 ' +
      'for Las Vegas.',
  },
)

/* ---------------------------------------------------------------------------
   Audience pages — 6 records
   --------------------------------------------------------------------------- */

markPending(
  approvedPages.filter((p) => p.pageType === 'audience').map((p) => p.id),
  {
    reason:
      '14 §46-49 and 09 §63 require distinct audience questions, ' +
      'conversion intent, and service relationships per audience. ' +
      "CLAUDE.md §21's audience test rejects copy that survives swapping " +
      '"home buyers" for "property managers".',
    unblockedBy:
      'Audience research and approved messaging per 09 §77 and 14 §46-49.',
  },
)

/* ---------------------------------------------------------------------------
   St. Louis market-specific service — 1 record
   --------------------------------------------------------------------------- */

// RESOLVED by the St. Louis market research (2026-08-16). Written
// against MSD's own lateral-responsibility statement and the verified
// per-municipality programme terms. See content/pages/st-louis.tsx.

/* ---------------------------------------------------------------------------
   St. Louis municipal resource guides — 3 records
   --------------------------------------------------------------------------- */

markPending(
  ['res-stl-lateral-report', 'res-stl-city-program', 'res-stl-county-program'],
  {
    reason:
      'All three describe St. Louis municipal sewer lateral programs. ' +
      'Program eligibility, fees, and coverage are time-sensitive ' +
      'factual claims requiring primary sources (CLAUDE.md §22, §28).',
    unblockedBy: 'Current St. Louis City and County program documentation.',
  },
)

/* ==========================================================================
   Readiness
   ========================================================================== */

/** True when an approved page has no authored content yet. */
export function isContentPending(pageId: PageId): boolean {
  return pendingContent[pageId] !== undefined
}

/**
 * Approved, routable pages that have content and may be built.
 *
 * This is what route generation consumes. It is a strict subset of
 * `routablePages` — never a superset, and never derived from anything
 * other than doc 04 (04 §2, 02 §21).
 */
export const contentReadyPages = routablePages.filter(
  (page) => !isContentPending(page.id),
)

/** Approved pages still awaiting content, for reporting and validation. */
export const pendingPages = routablePages.filter((page) =>
  isContentPending(page.id),
)

/**
 * A human-readable manifest of what remains.
 *
 * Surfaced by build validation (step 24) so the gap between approved
 * and built stays visible rather than being mistaken for completeness.
 */
export function pendingContentManifest(): string[] {
  return pendingPages.map((page) => {
    const entry = pendingContent[page.id]
    return `${page.pathname} (${page.pageType}) — ${entry?.unblockedBy ?? 'unknown'}`
  })
}
