/**
 * Analytics context derivation.
 *
 * Authority: docs/19-analytics-measurement.md §23-30, §39, §132
 *            CLAUDE.md §39
 *
 * Builds the context parameters for a page from its approved page
 * record, so attribution comes from the registry rather than from
 * whatever a component happens to know.
 *
 * That matters for a reason 19 §131 states directly: if each component
 * supplies its own market or service value, reporting fragments across
 * spellings of the same dimension. Deriving from one record means every
 * event on a page carries identical, canonical attribution.
 */

import type { MasterPageRecord } from '@/types'
import { analyticsPageType } from '@/types'
import type { AnalyticsContext, ContentCluster, LeadType } from './events'

/**
 * Content cluster for a page (19 §30, §64).
 *
 * Derived from the page family and its service association rather than
 * stored, so a page cannot drift out of its cluster.
 */
function contentCluster(page: MasterPageRecord): ContentCluster | undefined {
  if (page.pageType === 'commercial' || page.pageType === 'commercial-hub') {
    return 'commercial'
  }
  if (page.pageType === 'audience' || page.pageType === 'audience-hub') {
    return 'real_estate'
  }

  const service = page.serviceId
  if (service === undefined) return undefined

  if (service.includes('hydro-jetting')) return 'hydro_jetting'
  if (service.includes('lateral-inspection-reporting')) return 'municipal_programs'
  if (service.includes('camera-inspection') || service.includes('inspection')) {
    return 'inspection'
  }
  if (service.includes('cleaning')) return 'cleaning'
  if (service.includes('backup') || service.includes('locating')) {
    return 'sewer_problems'
  }
  return undefined
}

/**
 * Lead type for a page (19 §27).
 *
 * Commercial pages produce commercial leads; audience pages in the
 * real-estate cluster produce real-estate leads. Everything else is
 * residential by default, which matches how the service registry
 * classifies the non-commercial menu.
 */
/**
 * Approved location pages that are commercial districts rather than
 * residential geography (04 §13, 07 §29).
 *
 * An explicit list because the alternative is importing the ~462 KB
 * location registry to read one `location_type` field — and this
 * function runs for every page. Currently one entry: Mission Valley,
 * whose pages are commercial in framing while their page family is
 * `location` and `service-location`.
 *
 * ⚠ Add to this when a commercial-district location page is approved,
 * or its leads will be attributed residential.
 */
const COMMERCIAL_DISTRICT_LOCATIONS = new Set(['loc-sd-mission-valley'])

function leadType(page: MasterPageRecord): LeadType {
  if (page.pageType === 'commercial' || page.pageType === 'commercial-hub') {
    return 'commercial'
  }
  if (
    page.locationId !== undefined &&
    COMMERCIAL_DISTRICT_LOCATIONS.has(page.locationId)
  ) {
    return 'commercial'
  }
  if (page.audienceId !== undefined) {
    const realEstate = [
      'aud-home-buyers',
      'aud-home-sellers',
      'aud-real-estate-agents',
      'aud-home-inspectors',
    ]
    if (realEstate.includes(page.audienceId)) return 'real_estate'
  }
  if (page.serviceId === 'svc-pre-purchase-sewer-inspection') return 'real_estate'
  return 'residential'
}

/**
 * Builds the analytics context for a page.
 *
 * ⚠ Every value is a stable identifier taken from the record. Nothing
 * here is a display string, and nothing is derived from user input —
 * which is what keeps the PII guard from ever having anything to catch
 * on a page view.
 */
export function pageContext(page: MasterPageRecord): AnalyticsContext {
  const cluster = contentCluster(page)

  return {
    page_type: analyticsPageType(page.pageType),
    page_path: page.pathname,
    lead_type: leadType(page),
    ...(page.marketId !== undefined && { market_id: page.marketId }),
    ...(page.serviceId !== undefined && { service_id: page.serviceId }),
    ...(page.locationId !== undefined && { location_id: page.locationId }),
    ...(page.audienceId !== undefined && { audience_id: page.audienceId }),
    ...(cluster !== undefined && { content_cluster: cluster }),
  }
}
