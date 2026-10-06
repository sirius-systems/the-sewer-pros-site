import type { ServiceLocationPageContent } from '@/types'

/**
 * What a rebuild replaces on one of the 14 hand-authored St. Louis and San
 * Diego service + location pages, to bring it to the Henderson standard: a
 * four-section body (2x2 cards) drawn from the location page and the service
 * page, plus the page-specific copy around it. Everything else on the page
 * (problems, inclusions, process, service cards, FAQ, sources, images) is
 * assembled by `service-location-upgrade.ts`.
 */
export interface PageRebuild {
  /** Exactly four `<h2>` sections, each tying a local fact to this service. */
  body: NonNullable<ServiceLocationPageContent['body']>
  hero?: Partial<ServiceLocationPageContent['hero']>
  metaDescription?: string
  serviceDescription?: string
  cta?: ServiceLocationPageContent['cta']
  /** The one location-driven "when to call" card, if the existing one should change. */
  local?: { title: string; description: string }
}
