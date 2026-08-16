/**
 * Approved page registry types.
 *
 * Authority: docs/04-master-page-build-list.md §3, §4, §44
 *
 * ===========================================================================
 * THIS IS THE PUBLISHING GATE
 * ===========================================================================
 * `MasterPageRecord` is the ONLY authorised input to route generation.
 *
 *   18 services × 579 locations = 10,422 relationships
 *   70 approved page records
 *
 * `generateStaticParams()` reads the approved page registry built from
 * these records — never the service registry, location registry, or
 * matrix directly (04 §2, §66; 02 §21, §46; CLAUDE.md §26).
 */

import type { AudienceId } from './audience'
import type { CommercialSegmentId } from './commercial'
import type { LocationId, MarketId, PageId, Pathname } from './common'
import type { ServiceId } from './service'

/* ==========================================================================
   Authorisation status — 04 §3
   ========================================================================== */

/**
 * Authorisation status. Governs route, index, and sitemap eligibility.
 *
 *   status                      route   index   sitemap
 *   ------------------------------------------------------
 *   launch                       yes     yes      yes
 *   launch_pending_validation    yes      no       no     ← built, gated
 *   phase_2                       no      no       no
 *   phase_3                       no      no       no
 *   hold                          no      no       no
 *   research_only                 no      no       no
 *   retired                       no      no       no
 *
 * `launch_pending_validation` is the subtle one: the route is built and
 * reachable, but it must stay out of sitemaps, indexable link modules,
 * and submission workflows until its validation condition is satisfied
 * (04 §4). Five launch records sit here pending PENDING-012 (Las Vegas
 * operational validation, DEC-063).
 */
export type PageStatus =
  | 'launch'
  | 'launch_pending_validation'
  | 'phase_2'
  | 'phase_3'
  | 'hold'
  | 'research_only'
  | 'retired'

/** Statuses that permit a route to be generated (04 §4). */
export const ROUTABLE_STATUSES = [
  'launch',
  'launch_pending_validation',
] as const satisfies readonly PageStatus[]

/**
 * True when a route may be generated for this record.
 *
 * This is the ONLY predicate `generateStaticParams()` may gate on.
 */
export function isRoutable(page: Pick<MasterPageRecord, 'status'>): boolean {
  return (ROUTABLE_STATUSES as readonly PageStatus[]).includes(page.status)
}

/**
 * True when a page may be indexed and included in the sitemap.
 *
 * Requires BOTH gates from 04 §4: status is exactly `launch` AND the
 * record's own `indexable` flag is true. `launch_pending_validation`
 * fails here by design even though it routes.
 */
export function isIndexable(
  page: Pick<MasterPageRecord, 'status' | 'indexable'>,
): boolean {
  return page.status === 'launch' && page.indexable === true
}

/* ==========================================================================
   Page families — 04 §5
   ========================================================================== */

/**
 * Structural page family. Drives template selection and internal linking.
 *
 * ---------------------------------------------------------------------------
 * ⚠ RECONCILED FROM THREE DIVERGENT DOCUMENTED LISTS
 * ---------------------------------------------------------------------------
 * The source documents do not agree:
 *
 *   02 §26  has `resource-hub` and `legal`; lacks `contact`, `conversion`,
 *           and every hub type except resource-hub.
 *   19 §28  has `contact` and `conversion`; lacks `resource-hub` and
 *           `legal`.
 *   03 §52  has the fullest taxonomy, including Service Hub, Markets Hub,
 *           Audience Hub, Commercial Hub, Topic Hub.
 *
 * All three are explicitly provisional — 02 §26 says "Potential page
 * family types include" and "This list may evolve based on the final
 * information architecture"; 19 §28 says "Potential values"; 03 §52 says
 * "Final types should be represented consistently in the page build list
 * and code."
 *
 * Resolution applied here:
 *   - 02 §26 supplies the base, since it is already expressed as a TS
 *     type and governs code.
 *   - 03 §52 supplies the missing hub families. 02 §26 defers to the
 *     information architecture, and 03 IS that document. Doc 04's launch
 *     build needs them: /services/, /locations/, /for/, /commercial/,
 *     and /resources/ are all approved launch pages with no family in
 *     02 §26's list.
 *   - 19 §28's `contact` and `conversion` are NOT included. They are
 *     analytics attribution values, not structural families — /contact/
 *     is structurally `core`. See `AnalyticsPageType` below.
 *
 * ⚠ This reconciliation is an implementation judgement, not a recorded
 * decision. It needs a DEC entry in 22-decisions-change-log.md before
 * templates are built on it.
 *
 * Families present in the 70-page launch build (04 §5):
 *   core (9) · service (10) · market (3) · location (16) ·
 *   service-location (14) · audience (6) · commercial (5) ·
 *   comparison (2) · resource (5)
 */
export type PageType =
  // Structural
  | 'home'
  | 'core'
  | 'legal'
  // Services
  | 'service-hub'
  | 'service'
  // Geography
  | 'markets-hub'
  | 'market'
  | 'location'
  | 'service-location'
  // Audience
  | 'audience-hub'
  | 'audience'
  | 'audience-location'
  // Commercial
  | 'commercial-hub'
  | 'commercial'
  | 'commercial-location'
  // Decision support
  | 'comparison'
  | 'alternative'
  // Content
  | 'resource-hub'
  | 'topic-hub'
  | 'resource'

/**
 * Analytics page-type attribution (19 §28).
 *
 * A SEPARATE dimension from `PageType`, kept separate deliberately.
 * Analytics wants to distinguish /contact/ and conversion endpoints,
 * which are structurally just `core` pages.
 *
 * ⚠ 19 §28 omits `resource-hub` and `legal`, so those pages currently
 * have no defined attribution value. Flagged rather than silently
 * invented — see `analyticsPageType()`.
 */
export type AnalyticsPageType =
  | 'home'
  | 'core'
  | 'service'
  | 'market'
  | 'location'
  | 'service-location'
  | 'audience'
  | 'audience-location'
  | 'commercial'
  | 'commercial-location'
  | 'comparison'
  | 'alternative'
  | 'resource'
  | 'contact'
  | 'conversion'

/**
 * Maps a structural family to its analytics attribution value.
 *
 * Hub families collapse to their non-hub equivalent, since 19 §28 has no
 * hub values. `legal` collapses to `core` — the closest defined value —
 * because emitting an undefined enum member would corrupt reporting.
 *
 * `contact` and `conversion` cannot be derived from `PageType` alone;
 * they depend on the specific page. Callers that know they are on
 * /contact/ should override.
 */
export function analyticsPageType(pageType: PageType): AnalyticsPageType {
  switch (pageType) {
    case 'service-hub':
      return 'service'
    case 'markets-hub':
      return 'market'
    case 'audience-hub':
      return 'audience'
    case 'commercial-hub':
      return 'commercial'
    case 'resource-hub':
    case 'topic-hub':
      return 'resource'
    case 'legal':
      return 'core'
    default:
      return pageType
  }
}

/* ==========================================================================
   Launch priority — 04 §6
   ========================================================================== */

/**
 * L1 structural foundation · L2 revenue/search priority ·
 * L3 authority/decision support.
 */
export type LaunchPriority = 'L1' | 'L2' | 'L3'

/* ==========================================================================
   The record — 04 §44
   ========================================================================== */

/**
 * One authorised page.
 *
 * Field names follow 04 §44 exactly. The doc types `id`, `pageType`, and
 * the id fields as bare `string`; they are narrowed here to the branded
 * and literal types, which 04 §44 permits ("The production implementation
 * may expand this schema").
 */
export interface MasterPageRecord {
  id: PageId
  name: string
  pageType: PageType
  /** Canonical path, trailing slash enforced (05 §66, DEC-061). */
  pathname: Pathname
  status: PageStatus
  /**
   * Index intent for this record.
   *
   * ⚠ Not sufficient on its own — always evaluate via `isIndexable()`,
   * which also requires `status === 'launch'`.
   */
  indexable: boolean

  // --- Entity associations. Present per family. ---
  marketId?: MarketId
  locationId?: LocationId
  serviceId?: ServiceId
  audienceId?: AudienceId
  commercialId?: CommercialSegmentId

  /**
   * Logical parent page id (03 §53).
   *
   * Every approved page except the home page should have one. An
   * approved child whose parent is not itself approved is an orphan and
   * breaks breadcrumbs (05 §118, 03 §53, §113) — this was the Mission
   * Valley finding, resolved by approving the parent location page.
   */
  parentId?: PageId

  // --- Extensions beyond 04 §44 ---
  /** 04 §6. */
  priority?: LaunchPriority
  /**
   * Condition that must be satisfied before a
   * `launch_pending_validation` record may be indexed (04 §3).
   */
  validationCondition?: string
}

/* ==========================================================================
   Registry
   ========================================================================== */

/**
 * The full approved page registry.
 *
 * Built in step 12 of the 02 §103 sequence. Must be validated on load:
 * unique ids, unique pathnames, resolvable parents, and no approved
 * child under an unapproved parent.
 */
export interface ApprovedPageRegistry {
  version: string
  pages: MasterPageRecord[]
}
