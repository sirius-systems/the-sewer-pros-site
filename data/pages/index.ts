/**
 * Approved page registry barrel — the publishing gate.
 *
 * Build sequence step 12 (docs/02-nextjs-technical-architecture.md §103).
 *
 *   import { routablePages, indexablePages } from '@/data/pages'
 *
 * ⚠ `generateStaticParams()` must read `routablePages` and nothing else.
 * Never generate routes from the service registry, the location
 * registry, or the service x location matrix (04 §2, §66; 02 §21, §46;
 * CLAUDE.md §19, §26, §46).
 *
 * ⚠ Sitemaps and indexable link modules must read `indexablePages`,
 * which excludes the five `launch_pending_validation` records (04 §4).
 */

export { approvedPages } from './approved-pages'

export {
  routablePages,
  indexablePages,
  gatedPages,
  isApprovedPathname,
  getPage,
  requirePage,
  getPageByPathname,
  pagesOfType,
  pagesInMarket,
  pagesForService,
  pagesForLocation,
  childPages,
  breadcrumbTrail,
} from './pages'
