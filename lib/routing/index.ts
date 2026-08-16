/**
 * Routing utilities barrel.
 *
 * Build sequence step 13 (docs/02-nextjs-technical-architecture.md §103).
 * Location per 02 §10 (`lib/routing/`).
 *
 *   import { marketCatchAllParams, resolveMarketRoute } from '@/lib/routing'
 *
 * ⚠ Every static-params generator reads the approved page registry
 * only. Never add one that reads the service registry, the location
 * registry, or the matrix — that is the forbidden pattern in 02 §21.
 */

export {
  RESERVED_ROOT_SEGMENTS,
  PROSPECTIVE_RESERVED_SEGMENTS,
  isReservedRootSegment,
  normalizePathname,
  isCanonicalForm,
  pathnameSegments,
  pathnameFromSegments,
  toMarketRouteParams,
} from './pathname'
export type { MarketRouteParams } from './pathname'

export {
  serviceParams,
  commercialServiceParams,
  audienceParams,
  comparisonParams,
  resourceParams,
  marketHubParams,
  marketCatchAllParams,
  unroutedPages,
} from './static-params'

export {
  resolvePathname,
  resolveMarketRoute,
  resolveMarketHub,
  resolveUnderPrefix,
} from './resolve'
