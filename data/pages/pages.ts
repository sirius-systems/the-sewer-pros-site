/**
 * Approved page registry loader — the publishing gate.
 *
 * Authority: docs/04-master-page-build-list.md §3, §4, §44
 *
 * Build sequence step 12 (02 §103).
 *
 * ===========================================================================
 * THE TWO GATES (04 §4)
 * ===========================================================================
 *   isRoutable()   status is launch OR launch_pending_validation
 *   isIndexable()  status is exactly launch AND indexable === true
 *
 * The difference is the whole point. `launch_pending_validation` pages
 * are BUILT and reachable but must not enter sitemaps, indexable
 * internal-link modules, or search submission. Five Las Vegas pages sit
 * there pending PENDING-012 (DEC-063).
 *
 * ---------------------------------------------------------------------------
 * NOTE — `/compare/` IS NOT AN APPROVED PAGE
 * ---------------------------------------------------------------------------
 * Every other hub segment used by an approved URL is itself an approved
 * page: `/services/`, `/locations/`, `/for/`, `/commercial/`,
 * `/resources/`. `/compare/` is not, yet two approved pages live beneath
 * it. That segment will 404 while its children resolve.
 *
 * The two comparison pages are therefore parented to `core-home` rather
 * than to a non-existent hub, which keeps breadcrumbs valid (05 §118,
 * 16 §25). Flagged for doc 04 rather than fixed here — adding a page is
 * a publishing decision, not an implementation one (04 §18).
 */

import type {
  LocationId,
  MarketId,
  MasterPageRecord,
  PageId,
  PageType,
  ServiceId,
} from '@/types'
import { isIndexable, isRoutable } from '@/types'
import { approvedPages } from './approved-pages'

/* ==========================================================================
   Validation
   ========================================================================== */

const EXPECTED_PAGE_COUNT = 70
// Was 65 while DEC-063 gated the five Las Vegas pages. DEC-080 released
// that gate, so all 70 approved pages are indexable and `gatedPages` is
// empty. Keep this pinned: it is the guard that catches a page becoming
// indexable without a decision behind it (CLAUDE.md §45).
const EXPECTED_INDEXABLE_COUNT = 70

function fail(message: string): never {
  throw new Error(`Approved page registry invalid: ${message}`)
}

function validate(pages: readonly MasterPageRecord[]): void {
  if (pages.length !== EXPECTED_PAGE_COUNT) {
    fail(
      `expected ${EXPECTED_PAGE_COUNT} records, found ${pages.length}. ` +
        `The launch build is fixed at 70 by 04 §5. Adding a public page ` +
        `requires doc 04 approval first (04 §18, CLAUDE.md §18).`,
    )
  }

  const byId = new Map<PageId, MasterPageRecord>()
  const byPathname = new Map<string, MasterPageRecord>()

  for (const page of pages) {
    if (byId.has(page.id)) fail(`duplicate page id "${page.id}"`)
    byId.set(page.id, page)

    if (byPathname.has(page.pathname)) {
      fail(
        `duplicate pathname "${page.pathname}" — pages "${page.id}" and ` +
          `"${byPathname.get(page.pathname)?.id}" claim the same route`,
      )
    }
    byPathname.set(page.pathname, page)

    // An indexable page must actually be indexable under 04 §4. Catching
    // the inverse — indexable: true on a gated status — matters more than
    // it looks: it would leak a pending page into the sitemap.
    if (page.indexable && page.status !== 'launch') {
      fail(
        `"${page.id}" is marked indexable but has status "${page.status}". ` +
          `Only status "launch" may be indexed (04 §3-4).`,
      )
    }
  }

  const indexable = pages.filter(isIndexable).length
  if (indexable !== EXPECTED_INDEXABLE_COUNT) {
    fail(
      `expected ${EXPECTED_INDEXABLE_COUNT} indexable pages, found ${indexable}. ` +
        `04 §5 and DEC-080 fix this at all 70 approved pages indexable.`,
    )
  }

  // Parents must resolve to an approved page, and the graph must be
  // acyclic. An approved child under an unapproved parent is the orphan
  // condition from 03 §53 and 05 §118 — the Mission Valley defect.
  for (const page of pages) {
    if (page.parentId === undefined) continue
    if (!byId.has(page.parentId)) {
      fail(
        `"${page.id}" references parent "${page.parentId}", which is not an ` +
          `approved page. An approved child under an unapproved parent breaks ` +
          `breadcrumbs and internal linking (03 §53, 05 §118, 16 §25).`,
      )
    }
    const seen = new Set<PageId>([page.id])
    let cursor = byId.get(page.parentId)
    while (cursor !== undefined) {
      if (seen.has(cursor.id)) {
        fail(`parent cycle involving ${[...seen, cursor.id].join(' -> ')}`)
      }
      seen.add(cursor.id)
      cursor = cursor.parentId === undefined ? undefined : byId.get(cursor.parentId)
    }
  }

  // Exactly one root, and it must be the home page.
  const roots = pages.filter((p) => p.parentId === undefined)
  if (roots.length !== 1 || roots[0].pathname !== '/') {
    fail(
      `expected exactly one root page at "/", found ${roots.length}: ` +
        `[${roots.map((r) => r.id).join(', ')}]`,
    )
  }

  // Each page family must parent to the family 03 §53 specifies.
  //
  // Deliberately NOT a URL-nesting check. 05 §118: "Breadcrumb parentage
  // should use page/entity relationships rather than parsing strings."
  // A market lives at `/st-louis-mo/` but parents to `/locations/`, so a
  // string test would reject the documented hierarchy.
  for (const page of pages) {
    if (page.parentId === undefined) continue
    const parent = byId.get(page.parentId)
    if (parent === undefined) continue

    const allowed = ALLOWED_PARENT_TYPES[page.pageType]
    if (allowed !== undefined && !allowed.includes(parent.pageType)) {
      fail(
        `"${page.id}" is a ${page.pageType} page parented to "${parent.id}" ` +
          `(${parent.pageType}). 03 §53 expects one of: ${allowed.join(', ')}.`,
      )
    }
  }
}

/**
 * Expected parent family per page family (03 §53).
 *
 * Two entries carry exceptions worth stating:
 *
 * `service` — normally parents to the services hub, but the St. Louis
 * market-specific service sits at `/st-louis-mo/{service}/` and parents
 * to the MARKET (06 §23), so `market` is permitted.
 *
 * `comparison` — parents to `home`, because doc 04 approves no
 * `/compare/` hub page. See the module header.
 */
const ALLOWED_PARENT_TYPES: Partial<Record<PageType, readonly PageType[]>> = {
  core: ['home'],
  'service-hub': ['home'],
  'markets-hub': ['home'],
  'audience-hub': ['home'],
  'commercial-hub': ['home'],
  'resource-hub': ['home'],
  service: ['service-hub', 'market'],
  market: ['markets-hub'],
  location: ['market'],
  'service-location': ['location'],
  audience: ['audience-hub'],
  commercial: ['commercial-hub'],
  resource: ['resource-hub'],
  comparison: ['home'],
}

validate(approvedPages)

/* ==========================================================================
   Indexes
   ========================================================================== */

const pageById = new Map<PageId, MasterPageRecord>(
  approvedPages.map((p) => [p.id, p]),
)

const pageByPathname = new Map<string, MasterPageRecord>(
  approvedPages.map((p) => [p.pathname, p]),
)

/* ==========================================================================
   Route generation — the only sanctioned source
   ========================================================================== */

/**
 * Pages for which a route may be generated (04 §4).
 *
 * This is what `generateStaticParams()` consumes. Includes
 * `launch_pending_validation`, which routes but must not be indexed.
 */
export const routablePages: readonly MasterPageRecord[] =
  approvedPages.filter(isRoutable)

/**
 * Pages eligible for the sitemap and for indexable internal links.
 *
 * Excludes `launch_pending_validation` by design (04 §4).
 */
export const indexablePages: readonly MasterPageRecord[] =
  approvedPages.filter(isIndexable)

/**
 * Pages that are built but withheld from indexing.
 *
 * Currently EMPTY. This held the five Las Vegas pages under DEC-063
 * until DEC-080 released that gate. The mechanism stays because the
 * next market to launch will need it: set `launch_pending_validation`
 * plus a `validationCondition` naming what must be confirmed, and the
 * page routes without being indexed or linked.
 */
export const gatedPages: readonly MasterPageRecord[] = approvedPages.filter(
  (p) => p.status === 'launch_pending_validation',
)

/**
 * True when a pathname corresponds to an approved, routable page.
 *
 * The catch-all market route uses this to decide 404 vs render. A path
 * that merely looks plausible — a real market plus a real location that
 * was never approved — must 404 (04 §2, 05 §132).
 */
export function isApprovedPathname(pathname: string): boolean {
  const page = pageByPathname.get(pathname)
  return page !== undefined && isRoutable(page)
}

/* ==========================================================================
   Accessors
   ========================================================================== */

export function getPage(id: PageId): MasterPageRecord | undefined {
  return pageById.get(id)
}

export function requirePage(id: PageId): MasterPageRecord {
  const page = pageById.get(id)
  if (page === undefined) fail(`no approved page with id "${id}"`)
  return page
}

export function getPageByPathname(pathname: string): MasterPageRecord | undefined {
  return pageByPathname.get(pathname)
}

export function pagesOfType(pageType: PageType): MasterPageRecord[] {
  return approvedPages.filter((p) => p.pageType === pageType)
}

export function pagesInMarket(marketId: MarketId): MasterPageRecord[] {
  return approvedPages.filter((p) => p.marketId === marketId)
}

export function pagesForService(serviceId: ServiceId): MasterPageRecord[] {
  return approvedPages.filter((p) => p.serviceId === serviceId)
}

export function pagesForLocation(locationId: LocationId): MasterPageRecord[] {
  return approvedPages.filter((p) => p.locationId === locationId)
}

/** Direct children of a page. */
export function childPages(id: PageId): MasterPageRecord[] {
  return approvedPages.filter((p) => p.parentId === id)
}

/**
 * Breadcrumb trail from the home page down to `id`, inclusive.
 *
 * Walks `parentId` upward and reverses. Every element is an approved
 * page — validation guarantees parents resolve — so a trail can never
 * link to a route that does not exist (05 §117, 16 §25).
 */
export function breadcrumbTrail(id: PageId): MasterPageRecord[] {
  const trail: MasterPageRecord[] = []
  let cursor = pageById.get(id)
  while (cursor !== undefined) {
    trail.unshift(cursor)
    cursor = cursor.parentId === undefined ? undefined : pageById.get(cursor.parentId)
  }
  return trail
}
