/**
 * Page-family templates.
 *
 * Build sequence step 19 (docs/02-nextjs-technical-architecture.md §103).
 * Governed by docs/18-design-system.md §109-115 and DEC-066.
 *
 *   import { ServicePageTemplate } from '@/components/templates'
 *
 * ---------------------------------------------------------------------------
 * WHAT A TEMPLATE FIXES, AND WHAT IT DOES NOT
 * ---------------------------------------------------------------------------
 * A template fixes section ORDER and section DENSITY for a page family.
 * It does not supply copy. 18 §109 asks each family to have "subtle
 * structural differences" so users can tell where they are, and 02 §27
 * asks for reusable templates rather than hand-coded pages.
 *
 * What templates deliberately cannot do is manufacture differentiation.
 * CLAUDE.md §20-21's substitution tests are content requirements — a
 * template can decline to make token-swapping easy (no auto-generated
 * nearby-areas grids, no derived service lists on location pages) but
 * it cannot make a page worth publishing.
 *
 * ---------------------------------------------------------------------------
 * ⚠ COVERAGE AGAINST DEC-066's PageType UNION
 * ---------------------------------------------------------------------------
 * Templates exist for every page family present in the 70-page launch
 * build:
 *
 *   home              HomePageTemplate
 *   core              CorePageTemplate            (about, contact, faq)
 *   *-hub             HubPageTemplate             (5 hubs)
 *   service           ServicePageTemplate
 *   market            MarketPageTemplate
 *   location          LocationPageTemplate
 *   service-location  ServiceLocationPageTemplate
 *   audience          AudiencePageTemplate
 *   commercial        CommercialPageTemplate
 *   comparison        ComparisonPageTemplate
 *   resource          ResourcePageTemplate
 *
 * DEC-066 also defines `audience-location`, `commercial-location`,
 * `alternative`, `topic-hub`, and `legal`. None has an approved page in
 * doc 04, so none has a template — building templates for unapproved
 * families would invite the routes to follow (04 §18, CLAUDE.md §18).
 *
 * DEC-066 remains PROPOSED. If the taxonomy changes, this mapping and
 * the page registry's `pageType` values change together.
 */

export { PageShell } from './PageShell'
export type { PageShellProps } from './PageShell'

export { HomePageTemplate } from './HomePageTemplate'
export type { HomePageTemplateProps } from './HomePageTemplate'

export { CorePageTemplate } from './CorePageTemplate'
export type { CorePageTemplateProps } from './CorePageTemplate'

export { HubPageTemplate } from './HubPageTemplate'
export type { HubPageTemplateProps } from './HubPageTemplate'

export { ServicePageTemplate } from './ServicePageTemplate'
export type { ServicePageTemplateProps } from './ServicePageTemplate'

export { MarketPageTemplate } from './MarketPageTemplate'
export type { MarketPageTemplateProps } from './MarketPageTemplate'

export { LocationPageTemplate } from './LocationPageTemplate'
export type { LocationPageTemplateProps } from './LocationPageTemplate'

export { ServiceLocationPageTemplate } from './ServiceLocationPageTemplate'
export type { ServiceLocationPageTemplateProps } from './ServiceLocationPageTemplate'

export { AudiencePageTemplate } from './AudiencePageTemplate'
export type { AudiencePageTemplateProps } from './AudiencePageTemplate'

export { CommercialPageTemplate } from './CommercialPageTemplate'
export type { CommercialPageTemplateProps } from './CommercialPageTemplate'

export { ComparisonPageTemplate } from './ComparisonPageTemplate'
export type { ComparisonPageTemplateProps } from './ComparisonPageTemplate'

export { ResourcePageTemplate } from './ResourcePageTemplate'
export type { ResourcePageTemplateProps } from './ResourcePageTemplate'
