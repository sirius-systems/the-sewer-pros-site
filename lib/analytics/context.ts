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
 * Audience pages in the real-estate cluster produce real-estate leads.
 * Everything else is residential, because The Sewer Pros does not offer
 * commercial services (owner decision, Oct 12, 2026).
 */
function leadType(page: MasterPageRecord): LeadType {
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
