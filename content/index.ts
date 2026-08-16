/**
 * Content lookup.
 *
 * Build sequence step 20 (docs/02-nextjs-technical-architecture.md §103).
 *
 *   import { getServiceContent, contentReadyPages } from '@/content'
 *
 * See `registry.ts` for why some approved pages have no content yet and
 * how that gap is tracked.
 */

import type {
  LocationPageContent,
  MarketPageContent,
  ServiceLocationPageContent,
  CommercialPageContent,
  ComparisonPageContent,
  CorePageContent,
  HubPageContent,
  PageId,
  ResourcePageContent,
  ServicePageContent,
} from '@/types'
import { serviceContent } from './pages/services'
import { commercialContent } from './pages/commercial'
import { comparisonContent } from './pages/comparisons'
import { coreContent, homeContent, hubContent, resourceContent } from './pages/core'
import {
  sanDiegoMarketContent,
  sanDiegoLocationContent,
} from './pages/san-diego'
import { sanDiegoServiceLocationContent } from './pages/san-diego-service-location'
import {
  stLouisMarketContent,
  lateralReportingContent,
  stLouisLocationContent,
  stLouisServiceLocationContent,
} from './pages/st-louis'

/** Market hub content, keyed by page id. */
const marketContent: Partial<Record<PageId, MarketPageContent>> = {
  ['market-st-louis-mo' as PageId]: stLouisMarketContent,
  ['market-san-diego-ca' as PageId]: sanDiegoMarketContent,
}

/** Location content across all markets. */
const locationContent: Partial<Record<PageId, LocationPageContent>> = {
  ...stLouisLocationContent,
  ...sanDiegoLocationContent,
}

/** Service + location content across all markets. */
const serviceLocationContent: Partial<Record<PageId, ServiceLocationPageContent>> = {
  ...stLouisServiceLocationContent,
  ...sanDiegoServiceLocationContent,
}

export {
  contentReadyPages,
  pendingPages,
  pendingContent,
  pendingContentManifest,
  isContentPending,
} from './registry'

export { homeContent }

export function getServiceContent(id: PageId): ServicePageContent | undefined {
  // The St. Louis market-specific lateral service lives under the market
  // path (/st-louis-mo/{service}/) but is a `service` page family (06 §23).
  if (id === ('svc-stl-sewer-lateral-inspection-reporting' as PageId)) {
    return lateralReportingContent
  }
  return serviceContent[id]
}

export function getMarketContent(id: PageId): MarketPageContent | undefined {
  return marketContent[id]
}

export function getLocationContent(id: PageId): LocationPageContent | undefined {
  return locationContent[id]
}

export function getServiceLocationContent(
  id: PageId,
): ServiceLocationPageContent | undefined {
  return serviceLocationContent[id]
}

export function getCommercialContent(id: PageId): CommercialPageContent | undefined {
  return commercialContent[id]
}

export function getComparisonContent(id: PageId): ComparisonPageContent | undefined {
  return comparisonContent[id]
}

export function getCoreContent(id: PageId): CorePageContent | undefined {
  return coreContent[id]
}

export function getHubContent(id: PageId): HubPageContent | undefined {
  return hubContent[id]
}

export function getResourceContent(id: PageId): ResourcePageContent | undefined {
  return resourceContent[id]
}

/**
 * Page ids that have authored content of any family.
 *
 * Used by link resolution so a module cannot link to an approved page
 * that has not been built yet — which would 404 (05 §77, 16 §25).
 */
export const authoredPageIds: ReadonlySet<PageId> = new Set<PageId>([
  'core-home' as PageId,
  ...(Object.keys(serviceContent) as PageId[]),
  ...(Object.keys(commercialContent) as PageId[]),
  ...(Object.keys(comparisonContent) as PageId[]),
  ...(Object.keys(coreContent) as PageId[]),
  ...(Object.keys(hubContent) as PageId[]),
  ...(Object.keys(resourceContent) as PageId[]),
  ...(Object.keys(marketContent) as PageId[]),
  ...(Object.keys(locationContent) as PageId[]),
  ...(Object.keys(serviceLocationContent) as PageId[]),
  'svc-stl-sewer-lateral-inspection-reporting' as PageId,
])
