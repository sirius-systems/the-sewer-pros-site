/**
 * Cross-registry integrity checks for the approved page registry.
 *
 * Separated from `pages.ts` on purpose. This module imports the
 * location registry (~462 KB), and the page registry is imported by
 * every route — coupling them would drag the full location dataset into
 * anything that touches page data.
 *
 * Call `validateCrossRegistry()` from the build validation entry point
 * (step 24) or from a probe. It is not run at import of `pages.ts`.
 *
 * What it proves: every entity association on the 70 approved pages
 * resolves to a real record in the governing registry. Without it, a
 * service renamed in doc 06 or a location dropped from doc 07 would
 * leave a page pointing at nothing, and the failure would surface as a
 * broken render rather than a build error (CLAUDE.md §45).
 */

import type { MasterPageRecord } from '@/types'
import { MARKET_IDS } from '@/types'
import { getLocation } from '@/data/locations'
import { getServiceByCanonicalUrl, serviceList } from '@/data/services'
import { approvedPages } from './approved-pages'

export interface CrossRegistryIssue {
  pageId: string
  field: 'marketId' | 'serviceId' | 'locationId' | 'audienceId'
  value: string
  problem: string
}

const serviceIds = new Set(serviceList.map((s) => s.serviceId))

/** The 13 canonical audience ids (09 §6). */
const AUDIENCE_IDS = new Set([
  'aud-homeowners',
  'aud-home-buyers',
  'aud-home-sellers',
  'aud-real-estate-agents',
  'aud-home-inspectors',
  'aud-property-managers',
  'aud-hoa-communities',
  'aud-real-estate-investors',
  'aud-landlords',
  'aud-contractors-remodelers',
  'aud-facility-managers',
  'aud-restaurants',
  'aud-commercial-property-owners',
])

function checkPage(page: MasterPageRecord): CrossRegistryIssue[] {
  const issues: CrossRegistryIssue[] = []

  if (page.marketId !== undefined && !MARKET_IDS.includes(page.marketId)) {
    issues.push({
      pageId: page.id,
      field: 'marketId',
      value: page.marketId,
      problem: 'not an approved market (DEC-011)',
    })
  }

  if (page.serviceId !== undefined && !serviceIds.has(page.serviceId)) {
    issues.push({
      pageId: page.id,
      field: 'serviceId',
      value: page.serviceId,
      problem: 'not in the master service registry (06)',
    })
  }

  if (page.locationId !== undefined && getLocation(page.locationId) === undefined) {
    issues.push({
      pageId: page.id,
      field: 'locationId',
      value: page.locationId,
      problem: 'not in the master location registry (07)',
    })
  }

  if (page.audienceId !== undefined && !AUDIENCE_IDS.has(page.audienceId)) {
    issues.push({
      pageId: page.id,
      field: 'audienceId',
      value: page.audienceId,
      problem: 'not in the canonical audience registry (09 §6)',
    })
  }

  // A service page's pathname must be the service's own canonical URL.
  // Catches a page pointing at the right service but the wrong route —
  // e.g. the residential URL carrying the commercial service id.
  if (
    page.serviceId !== undefined &&
    (page.pageType === 'service' || page.pageType === 'commercial')
  ) {
    const owner = getServiceByCanonicalUrl(page.pathname)
    if (owner === undefined) {
      issues.push({
        pageId: page.id,
        field: 'serviceId',
        value: page.pathname,
        problem: 'pathname is not any service canonical_url (06)',
      })
    } else if (owner.serviceId !== page.serviceId) {
      issues.push({
        pageId: page.id,
        field: 'serviceId',
        value: page.serviceId,
        problem: `pathname ${page.pathname} belongs to ${owner.serviceId}`,
      })
    }
  }

  return issues
}

/** Returns every integrity problem found. Empty means the registries agree. */
export function crossRegistryIssues(): CrossRegistryIssue[] {
  return approvedPages.flatMap(checkPage)
}

/**
 * Throws if any approved page references a record that does not exist.
 *
 * Intended for build validation. Reports all issues at once rather than
 * failing on the first, so a registry regeneration can be reconciled in
 * one pass.
 */
export function validateCrossRegistry(): void {
  const issues = crossRegistryIssues()
  if (issues.length === 0) return
  const detail = issues
    .map((i) => `  ${i.pageId}: ${i.field}="${i.value}" — ${i.problem}`)
    .join('\n')
  throw new Error(
    `Approved page registry references ${issues.length} missing or ` +
      `mismatched record(s):\n${detail}`,
  )
}
