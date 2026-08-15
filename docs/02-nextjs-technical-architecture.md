# The Sewer Pros — Next.js Technical Architecture

**Document:** `02-nextjs-technical-architecture.md`
**Project:** The Sewer Pros Website Rebuild
**Repository:** `the-sewer-pros-site`
**Status:** Foundation
**Document Role:** Technical implementation source of truth
**Primary Framework:** Next.js App Router
**Language:** TypeScript
**Styling:** Tailwind CSS
**Deployment Target:** Cloudflare Pages
**Rendering Strategy:** Static-first / static export

---

# 1. Purpose

This document defines the project-specific technical architecture for The Sewer Pros website.

It establishes the implementation rules for:

* Next.js
* App Router
* TypeScript
* Tailwind CSS
* static generation
* dynamic route generation
* structured content data
* page registries
* reusable components
* metadata
* schema
* sitemaps
* redirects
* forms
* analytics
* assets
* build validation
* GitHub
* Cloudflare Pages deployment

The objective is to create a website architecture capable of supporting hundreds or potentially thousands of researched SEO opportunities without allowing the research datasets themselves to automatically create public pages.

The fundamental technical principle is:

> **Data may describe opportunities. Only approved page records may create routes.**

---

# 2. Architecture Objectives

The technical architecture must support:

1. fast static page delivery
2. scalable multi-market expansion
3. reusable page templates
4. structured content generation
5. strong technical SEO
6. controlled indexation
7. predictable URL generation
8. reusable schema generation
9. centralized metadata
10. automated sitemap generation
11. deterministic builds
12. straightforward Cloudflare deployment
13. efficient Claude Code workflows
14. maintainable TypeScript types
15. minimal duplicated content logic
16. clear separation between research datasets and publishable routes

The system should remain manageable as the site grows significantly beyond the initial launch page count.

---

# 3. Primary Technology Stack

The approved implementation stack is:

## Application Framework

**Next.js App Router**

Use the `app/` directory architecture.

Do not use the legacy Pages Router for new project pages.

---

## Programming Language

**TypeScript**

All production components, page configuration, registries, helpers, utilities, and structured data models should use TypeScript unless a specific dependency requires otherwise.

---

## Styling

**Tailwind CSS**

Tailwind will provide the primary utility styling layer.

The visual system itself will be governed by:

`18-design-system.md`

---

## Development Environment

* Node.js
* npm
* VS Code
* Claude Code

---

## Version Control

* Git
* GitHub

Repository:

`the-sewer-pros-site`

---

## Hosting

**Cloudflare Pages**

The project will use a static-export deployment architecture unless a future approved requirement requires migration to a server-capable deployment model.

Cloudflare currently supports static Next.js sites on Pages, while recommending Workers for full-stack server-rendered Next.js applications. This project intentionally selects the static Pages path because the website is primarily a content, SEO, and lead-generation property rather than a server-rendered application.

---

# 4. Rendering Strategy

The default rendering architecture is:

> **Static-first, build-time generation.**

The site should produce static HTML, CSS, JavaScript, images, and other assets wherever possible.

The expected Next.js configuration will use:

```ts
output: 'export'
```

Next.js uses `output: 'export'` for static exports and produces files that can be hosted by a static web server.

---

# 5. Why Static Export Is Preferred

The Sewer Pros website is primarily:

* informational
* transactional
* search-oriented
* local SEO-oriented
* content-driven
* schema-driven
* lead-generation focused

Most site content does not require server-side rendering.

Static generation provides a strong fit for:

* service pages
* market hubs
* location pages
* audience pages
* commercial pages
* service + location pages
* comparison pages
* alternative pages
* resource pages
* FAQs
* legal pages
* company pages

Dynamic customer interactions should generally be handled through:

* client-side JavaScript
* external forms
* CRM integrations
* external scheduling systems
* analytics scripts
* approved third-party APIs

rather than introducing unnecessary server runtime dependencies.

---

# 6. Static Export Constraint

The project must be designed around the capabilities of a static export.

Do not introduce runtime features that require a persistent Next.js server unless the architecture is intentionally changed and documented.

Examples requiring careful review include:

* server-only sessions
* runtime server authentication
* server-side database queries
* runtime SSR
* runtime-only route generation
* server actions requiring a supported runtime
* runtime personalization
* application logic dependent on request-time server state
* ISR assumptions

Incremental Static Regeneration is not available when using a Next.js static export.

If a future business requirement genuinely requires these capabilities, document the architecture change before implementation.

---

# 7. Recommended `next.config.ts`

The project should begin with a configuration concept similar to:

```ts
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',

  trailingSlash: true,

  images: {
    unoptimized: true,
  },
}

export default nextConfig
```

## Trailing-Slash Authority

The `trailingSlash` value shown above is **not** illustrative.

An earlier draft of this document showed:

```ts
trailingSlash: false
```

as a placeholder example.

That value was superseded by:

`05-url-routing-strategy.md` §5

which finalized the project-specific decision as:

```ts
trailingSlash: true
```

Recorded in:

`22-decisions-change-log.md` → **DEC-061**

Canonical URLs for this project therefore end with `/`.

Do not reintroduce the earlier `false` value from historical drafts, examples in other Sirius Systems projects, or Next.js defaults.

The final configuration may evolve based on actual project requirements.

Do not add configuration merely because it exists in another Sirius Systems project.

Every setting should serve a defined requirement.

---

# 8. Static Image Strategy

Because the deployment target is a static export, image architecture must remain compatible with static hosting.

Preferred image formats:

* WebP
* AVIF where appropriate
* SVG for icons and vector graphics
* PNG where transparency or source requirements justify it
* JPEG only where appropriate

Primary goals:

* small file sizes
* correct dimensions
* descriptive filenames
* explicit width and height
* responsive presentation
* useful alt text
* minimal layout shift

Do not upload multi-megabyte images directly into production pages when a properly optimized alternative can be created.

---

# 9. App Router Structure

The application should use the Next.js App Router.

Recommended high-level structure:

```text
app/
├── layout.tsx
├── page.tsx
├── globals.css
├── not-found.tsx
├── robots.ts
├── sitemap.ts
├── services/
├── locations/
├── commercial/
├── audiences/
├── resources/
└── [approved route structures]
```

The final route hierarchy will be governed by:

`05-url-routing-strategy.md`

Do not finalize URL architecture from this document alone.

---

# 10. Recommended Repository Structure

A scalable repository should separate:

* application routes
* components
* structured data
* content
* utilities
* types
* project documentation
* static assets

Recommended structure:

```text
the-sewer-pros-site/
│
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── not-found.tsx
│   ├── globals.css
│   ├── robots.ts
│   ├── sitemap.ts
│   └── ...
│
├── components/
│   ├── layout/
│   ├── navigation/
│   ├── sections/
│   ├── cards/
│   ├── forms/
│   ├── seo/
│   ├── schema/
│   ├── ui/
│   └── tracking/
│
├── content/
│   ├── pages/
│   ├── services/
│   ├── locations/
│   ├── audiences/
│   ├── commercial/
│   ├── comparisons/
│   ├── alternatives/
│   └── resources/
│
├── data/
│   ├── business/
│   ├── services/
│   ├── locations/
│   ├── markets/
│   ├── matrices/
│   ├── audiences/
│   ├── commercial/
│   ├── pages/
│   ├── navigation/
│   └── redirects/
│
├── lib/
│   ├── content/
│   ├── seo/
│   ├── schema/
│   ├── routing/
│   ├── analytics/
│   ├── utils/
│   └── validation/
│
├── types/
│   ├── business.ts
│   ├── service.ts
│   ├── location.ts
│   ├── page.ts
│   ├── audience.ts
│   ├── commercial.ts
│   ├── seo.ts
│   └── schema.ts
│
├── public/
│   ├── images/
│   ├── icons/
│   ├── fonts/
│   ├── documents/
│   └── social/
│
├── docs/
│   └── project documentation
│
├── scripts/
│   ├── validate-pages.ts
│   ├── validate-routes.ts
│   ├── validate-links.ts
│   └── other build utilities
│
├── CLAUDE.md
├── next.config.ts
├── tsconfig.json
├── package.json
├── postcss.config.mjs
└── README.md
```

This is a recommended structural baseline, not permission to create unused directories.

Directories should be created as needed.

---

# 11. Project Documentation Location

The 24 project source-of-truth documents should live in a dedicated repository documentation directory.

Recommended location:

```text
/docs/
```

Example:

```text
docs/
├── 00-project-overview.md
├── 01-business-brand-foundation.md
├── 02-nextjs-technical-architecture.md
├── 03-information-architecture.md
├── 04-master-page-build-list.md
├── 05-url-routing-strategy.md
├── 06-master-service-registry.md
├── 07-master-location-registry.md
├── 08-service-location-matrix.md
├── 09-audience-commercial-matrix.md
├── 10-seo-strategy.md
├── 11-local-seo-gbp-strategy.md
├── 12-content-aeo-ai-strategy.md
├── 13-competitor-analysis.md
├── 14-content-specification.md
├── 15-schema-entity-strategy.md
├── 16-internal-linking-strategy.md
├── 17-conversion-architecture.md
├── 18-design-system.md
├── 19-analytics-measurement.md
├── 20-migration-redirect-plan.md
├── 21-post-launch-seo-roadmap.md
└── 22-decisions-change-log.md
```

`CLAUDE.md` should remain at the repository root unless an approved implementation decision specifies otherwise.

---

# 12. Separation of Data, Content, and Presentation

The application should maintain a strong separation between:

### Data

Structured records describing:

* services
* locations
* markets
* audiences
* commercial segments
* page approvals
* routes
* relationships

### Content

Page-specific written content such as:

* headings
* body copy
* FAQs
* calls to action
* supporting sections
* local context

### Presentation

React components controlling:

* layout
* cards
* hero sections
* FAQs
* grids
* navigation
* calls to action
* visual formatting

This separation is essential for scalability.

---

# 13. Registry-Driven Architecture

The project should use canonical registries rather than scattered constants.

Primary structured registries will include:

* service registry
* location registry
* market registry
* page registry
* audience registry
* commercial registry
* redirect registry

Example conceptual structure:

```text
data/
├── services/
│   ├── master-service-registry.json     ← in repository
│   └── services.ts
├── locations/
│   ├── master-location-registry.json    ← in repository
│   └── locations.ts
├── matrices/
│   ├── service-location-master-matrix.json  ← in repository
│   └── service-location-master-matrix.csv   ← in repository
├── markets/
│   └── markets.ts
└── pages/
    └── approved-pages.ts
```

Files marked *in repository* are the normalized research datasets already committed. The remaining files are implementation modules to be created during the build.

The exact file formats for the implementation modules will be determined during implementation.

**Critical distinction:** the registries and matrices under `data/` are *research and entity data*. They are inputs to validation, not inputs to route generation. Route generation consumes only the approved page registry derived from `04-master-page-build-list.md`. See §21 and §46.

---

# 14. Master Page Registry

The most important application-level content dataset should be the approved page registry derived from:

`04-master-page-build-list.md`

Conceptually:

```ts
export interface ApprovedPage {
  id: string
  pageType: PageType
  slug: string
  pathname: string
  status: PageStatus
  indexable: boolean
  serviceId?: string
  marketId?: string
  locationId?: string
  audienceId?: string
  commercialId?: string
}
```

A route should not exist merely because enough IDs can be combined to produce it.

It should exist because an approved page record authorizes it.

---

# 15. Page Status Model

The page registry should support explicit lifecycle states.

Recommended values:

```ts
type PageStatus =
  | 'research'
  | 'planned'
  | 'approved'
  | 'draft'
  | 'qa'
  | 'published'
  | 'retired'
```

Only appropriate statuses should generate production output.

For example:

```text
research
```

should not create a route.

```text
planned
```

should not automatically create an indexable route.

```text
approved
```

may authorize production work.

```text
published
```

may authorize sitemap/indexation behavior.

The precise status workflow should be aligned with the Site OS skill and project-specific publishing rules.

---

# 16. Indexability Must Be Explicit

Every approved page should carry an explicit indexation state.

Example:

```ts
indexable: true
```

or:

```ts
indexable: false
```

Do not infer indexability solely from whether a file exists.

This provides better control over:

* staging pages
* utility routes
* experimental pages
* temporarily suppressed pages
* campaign landing pages
* duplicate content
* future page inventories

---

# 17. Canonical Service Records

The 18 canonical services should be represented as structured records.

Conceptual example:

```ts
interface Service {
  id: string
  name: string
  slug: string
  shortName?: string
  description: string
  category: string
  status: 'active' | 'inactive'
}
```

The full schema will be defined in:

`06-master-service-registry.md`

Do not maintain separate unofficial service-name arrays inside individual components.

---

# 18. Canonical Location Records

The 579 normalized geographic records should be represented as structured records.

Conceptual example:

```ts
interface Location {
  id: string
  name: string
  slug: string
  type: LocationType
  stateCode: string
  marketId: string
  parentLocationId?: string
  active: boolean
}
```

The exact schema will be defined in:

`07-master-location-registry.md`

---

# 19. Market Records

Markets should be treated as first-class entities separate from individual locations.

Initial market IDs might conceptually follow patterns such as:

```text
st-louis-mo
san-diego-ca
las-vegas-nv
```

A market record may eventually contain:

```ts
interface Market {
  id: string
  name: string
  city: string
  state: string
  stateCode: string
  slug: string
  gbpStatus: string
}
```

Do not hard-code market business facts directly inside components.

---

# 20. Service × Location Matrix

The existing research contains:

**10,422 service × location relationships.**

These relationships must not directly power route creation.

The matrix should be treated as:

```text
SEO opportunity dataset
```

not:

```text
route-generation dataset
```

This is one of the most important technical safeguards in the project.

---

# 21. Forbidden Matrix Pattern

Do not implement logic equivalent to:

```ts
services.flatMap((service) =>
  locations.map((location) => ({
    service,
    location,
  }))
)
```

and then generate public pages from the result.

That would effectively turn the entire opportunity matrix into production URLs.

This is prohibited.

---

# 22. Approved Generation Pattern

The correct conceptual model is:

```text
Service Registry
       +
Location Registry
       +
Opportunity Matrix
       ↓
Strategic Approval
       ↓
Master Page Build List
       ↓
Approved Page Registry
       ↓
generateStaticParams()
       ↓
Production Routes
```

This creates a hard gate between research and publishing.

---

# 23. Dynamic Route Generation

Where dynamic App Router segments are used, approved routes should be generated at build time with:

```ts
generateStaticParams()
```

Next.js supports `generateStaticParams()` for generating dynamic route parameters during static builds.

Example conceptual route:

```text
app/services/[serviceSlug]/page.tsx
```

Example:

```ts
export function generateStaticParams() {
  return approvedServicePages.map((page) => ({
    serviceSlug: page.slug,
  }))
}
```

The function must consume the **approved page dataset**, not the entire canonical registry unless every registry entry has separately been approved for publication.

---

# 24. Multi-Parameter Routes

For approved page families requiring multiple parameters, generation should remain registry-driven.

Conceptual example:

```text
app/[market]/[service]/[location]/page.tsx
```

or another route structure defined in the URL strategy.

The generated parameter objects must come from explicitly authorized page records.

Example:

```ts
return approvedServiceLocationPages.map((page) => ({
  market: page.marketSlug,
  service: page.serviceSlug,
  location: page.locationSlug,
}))
```

Do not calculate every mathematically possible combination.

---

# 25. Route Architecture Must Follow URL Strategy

This document intentionally does not finalize URLs.

Route structure must follow:

`05-url-routing-strategy.md`

Do not implement directory structures merely because examples appear in this document.

Examples here illustrate architecture, not final route approval.

---

# 26. Page Family Architecture

The system should support reusable page families.

Potential page family types include:

```ts
type PageType =
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
  | 'resource-hub'
  | 'resource'
  | 'legal'
```

This list may evolve based on the final information architecture.

---

# 27. Reusable Page Templates

Do not independently hand-code hundreds of pages with duplicated markup.

Pages within the same family should use reusable components and structured content.

Conceptually:

```tsx
<ServicePage data={pageData} />
```

or:

```tsx
<LocationPage data={pageData} />
```

or:

```tsx
<ServiceLocationPage data={pageData} />
```

Each page should still contain sufficiently unique content.

Reusable architecture does **not** mean templated copy with only nouns changed.

---

# 28. Reusable Section Components

Potential reusable sections include:

```text
Hero
TrustBar
ServiceOverview
ProblemSigns
InspectionProcess
Benefits
ServiceAreaGrid
AudienceUseCases
CommercialUseCases
WhySewerPros
IndependentInspection
RelatedServices
RelatedLocations
ResourceLinks
FAQ
CTA
Breadcrumbs
ContactSection
```

Components should remain semantically neutral enough to be reused appropriately.

Do not create a component for every minor text variation.

---

# 29. Component Organization

Recommended component structure:

```text
components/
├── layout/
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── Container.tsx
│
├── navigation/
│   ├── MainNav.tsx
│   ├── MobileNav.tsx
│   └── Breadcrumbs.tsx
│
├── sections/
│   ├── Hero.tsx
│   ├── FAQSection.tsx
│   ├── CTASection.tsx
│   └── ...
│
├── cards/
│   ├── ServiceCard.tsx
│   ├── LocationCard.tsx
│   ├── ResourceCard.tsx
│   └── ...
│
├── schema/
│   └── SchemaMarkup.tsx
│
└── ui/
    ├── Button.tsx
    ├── Heading.tsx
    └── ...
```

Avoid excessively deep component nesting.

---

# 30. Server Components by Default

App Router components should remain Server Components by default unless browser-side behavior is actually needed.

Use:

```ts
'use client'
```

only when necessary for features such as:

* interactive menus
* accordions
* client analytics hooks
* interactive forms
* carousels
* stateful widgets
* browser APIs

Do not convert an entire page tree into Client Components simply because one interactive section requires client-side behavior.

---

# 31. Client Component Isolation

Interactive behavior should be isolated into the smallest practical client component.

Example:

```text
Page
├── Server-rendered content
├── Server-rendered service sections
├── Server-rendered FAQ content
└── ClientAccordion
```

instead of:

```text
EntirePage = Client Component
```

This keeps the architecture simpler and reduces unnecessary browser JavaScript.

---

# 32. TypeScript Standard

Avoid `any` unless there is a documented reason.

Prefer:

* interfaces
* type aliases
* unions
* typed configuration objects
* readonly values where appropriate
* typed registries

Example:

```ts
export type MarketId =
  | 'st-louis-mo'
  | 'san-diego-ca'
  | 'las-vegas-nv'
```

Where the dataset may expand frequently, a less rigid typed identifier strategy may be preferable.

The architecture should balance safety with maintainability.

---

# 33. Centralized Types

Shared content models should live in:

```text
/types/
```

or another approved centralized type directory.

Do not independently redefine the same `Service`, `Location`, or `Page` shape in multiple files.

---

# 34. Content Storage Strategy

Page content should be stored in a manner that supports:

* version control
* Claude-assisted editing
* validation
* structured metadata
* reusable page templates
* future scaling

Potential options include:

* TypeScript objects
* JSON
* MDX
* Markdown with frontmatter
* structured content modules

The final format may differ by content family.

---

# 35. Recommended Hybrid Content Model

A useful pattern for this project is:

### Structured records for architecture

Use TypeScript or JSON for:

* routes
* services
* locations
* markets
* audiences
* commercial types
* redirects
* indexability
* metadata configuration

### Content files for long-form copy

Use Markdown, MDX, or structured TypeScript content modules for:

* page body copy
* resource articles
* long FAQs
* educational content

This keeps routing deterministic while allowing substantial content to remain manageable.

---

# 36. No Runtime CMS Required at Launch

The initial architecture should not require a runtime content management system.

Project content will primarily be:

* authored through Claude Project
* governed by Site OS
* implemented with Claude Code + VS Code
* stored in GitHub
* deployed through the build process

A CMS can be evaluated later if operational requirements justify it.

Do not introduce one during foundation work without approval.

---

# 37. Metadata Architecture

Metadata should be generated through reusable helpers.

Avoid manually implementing completely separate metadata logic in every page.

Conceptual helper:

```ts
generatePageMetadata(page)
```

Potential metadata fields include:

```ts
interface SeoMetadata {
  title: string
  description: string
  canonical: string
  robots?: {
    index: boolean
    follow: boolean
  }
  openGraph?: {
    title: string
    description: string
    image?: string
  }
}
```

Actual implementation should use supported Next.js metadata conventions.

---

# 38. Metadata Source of Truth

Page metadata should derive from approved page content or page configuration.

Avoid disconnected systems where:

* visible H1 says one thing
* title tag targets another topic
* canonical points elsewhere
* schema names another service

Entity consistency should be maintained across:

* visible copy
* metadata
* breadcrumbs
* schema
* internal links
* sitemap URLs

---

# 39. Canonical URL Architecture

Every indexable page should have a deterministic canonical URL.

Canonical generation should use:

* production domain
* approved pathname
* consistent slash convention

The canonical system must not infer alternate routes from the opportunity matrix.

Final canonical rules will follow:

`05-url-routing-strategy.md`

and:

`10-seo-strategy.md`

---

# 40. Sitemap Architecture

Use programmatic sitemap generation based on approved pages.

The sitemap must derive from:

```text
Approved + Published + Indexable Pages
```

not every route-like record in the repository.

Conceptually:

```ts
const sitemapPages = pages.filter(
  (page) =>
    page.status === 'published' &&
    page.indexable === true
)
```

Potential exclusion categories include:

* drafts
* research routes
* redirects
* utility pages
* noindex pages
* duplicate campaign URLs
* retired routes

---

# 41. Sitemap Scaling

If the site eventually becomes large enough to justify multiple sitemap files, the sitemap architecture should support segmentation by page family or other logical grouping.

Potential groups include:

* core
* services
* locations
* service-location
* commercial
* audiences
* resources

Do not split sitemaps unnecessarily during early development.

---

# 42. Robots Architecture

The project should implement:

```text
app/robots.ts
```

The robots configuration should reflect the production environment.

It should support:

* sitemap reference
* allowed crawling
* intentional disallow rules where required

Do not use `robots.txt` as the primary method for preventing indexation of pages that should be `noindex`.

---

# 43. Schema Architecture

Structured data should be generated using centralized utilities or components.

Recommended structure:

```text
lib/schema/
components/schema/
```

Schema logic should support project-approved types defined in:

`15-schema-entity-strategy.md`

Potential schema entities may include:

* Organization
* LocalBusiness
* Service
* WebSite
* WebPage
* BreadcrumbList
* FAQPage
* Article

Schema must represent actual page content and verified business facts.

---

# 44. Schema Must Not Fabricate Local Entities

A geographic landing page does not automatically represent a physical business location.

Do not generate unique LocalBusiness entities for every city or neighborhood simply because a landing page exists.

Current known GBP status:

* St. Louis — existing GBP
* San Diego — no current GBP
* Las Vegas — no current GBP

Schema strategy must reflect real business and location facts.

---

# 45. Breadcrumb Architecture

Breadcrumbs should be generated systematically based on approved information architecture.

Example conceptual hierarchy:

```text
Home
→ Market
→ Service
→ Location
```

or whatever hierarchy is approved in the information architecture.

Breadcrumb structure should align across:

* visible UI
* internal linking
* schema
* canonical hierarchy

---

# 46. Navigation Architecture

Primary navigation should not be generated directly from every available page.

Navigation should use a curated navigation configuration.

Example:

```text
data/navigation/
```

Navigation may contain:

* primary links
* service groups
* market links
* commercial links
* resources

Large page inventories should be accessed through contextual linking and hubs rather than enormous navigation menus.

---

# 47. Internal Linking Engine

The architecture should support rule-based internal linking.

Potential relationship types include:

```text
service → market
service → service-location
market → location
location → service-location
audience → relevant service
commercial → relevant service
resource → service
service → resource
comparison → service
```

The strategic rules will be defined in:

`16-internal-linking-strategy.md`

The implementation should consume structured relationships rather than manually embedding every link.

---

# 48. No Automated Link Explosion

Do not create components that display hundreds of keyword links solely because they exist in a registry.

Internal linking modules should prioritize:

* relevance
* hierarchy
* usability
* crawl pathways
* user intent

Examples of potentially harmful implementation:

```text
All 579 locations on every service page
```

or:

```text
All 10,422 service-location combinations in a footer
```

These patterns are prohibited.

---

# 49. Resource Architecture

Educational resources should use a structured content system.

Potential fields:

```ts
interface ResourceArticle {
  id: string
  slug: string
  title: string
  description: string
  topicId: string
  primaryServiceId?: string
  marketId?: string
  publishedAt?: string
  updatedAt?: string
  indexable: boolean
}
```

Resources should connect to topical clusters and money pages.

---

# 50. Form Architecture

The site may use lead forms for:

* general service requests
* sewer inspection requests
* pre-purchase inspections
* commercial requests
* contact inquiries

The static site should generally submit these through approved external systems or endpoints.

Potential integration destinations may include:

* GoHighLevel
* approved webhooks
* approved scheduling systems
* other CRM endpoints

The exact conversion implementation will be governed by:

`17-conversion-architecture.md`

---

# 51. Form Security

Do not expose secret API keys in client-side code.

Any token that must remain private cannot be included in:

```text
NEXT_PUBLIC_*
```

or compiled client JavaScript.

If an integration requires a private server-side credential, use:

* an approved external secure endpoint
* Cloudflare server capability
* another approved backend service

rather than embedding the credential into the static site.

---

# 52. Environment Variables

Environment variables should be used for appropriate deployment-specific configuration.

Potential examples:

```text
NEXT_PUBLIC_SITE_URL
NEXT_PUBLIC_GA_ID
NEXT_PUBLIC_GTM_ID
NEXT_PUBLIC_GHL_FORM_URL
```

Do not store secrets in Git.

Provide a safe example file such as:

```text
.env.example
```

when environment configuration becomes necessary.

---

# 53. Site URL Configuration

The production site origin should be centralized.

Example:

```ts
export const siteConfig = {
  name: 'The Sewer Pros',
  url: process.env.NEXT_PUBLIC_SITE_URL,
}
```

Avoid manually typing the production domain throughout:

* metadata
* schema
* canonical tags
* sitemap generation
* social cards

The final canonical domain should be confirmed in migration documentation.

---

# 54. Business Configuration

Verified business facts should be centralized.

Conceptual structure:

```ts
export const business = {
  name: 'The Sewer Pros',
  markets: [],
  phones: {},
  addresses: {},
  socialProfiles: {},
}
```

Do not hard-code phone numbers or addresses into dozens of components.

This reduces the risk of inconsistent market information.

---

# 55. Market-Specific Contact Data

Contact information should support market-specific values.

Conceptual example:

```ts
market.contact.phone
market.contact.email
market.contact.gbp
```

Do not assume all markets share:

* the same phone
* the same office
* the same GBP
* the same operating hours

The registry should represent verified facts only.

---

# 56. Tailwind Architecture

Tailwind should be used as the main CSS utility framework.

Current Tailwind guidance supports integration with Next.js through its framework installation workflow and PostCSS tooling.

Project styling should prioritize:

* reusable design tokens
* consistent spacing
* responsive typography
* reusable layout primitives
* limited arbitrary values
* accessible contrast
* predictable breakpoints

The detailed visual rules belong in:

`18-design-system.md`

---

# 57. Avoid Uncontrolled Tailwind Variants

Do not fill components with arbitrary values such as:

```text
mt-[37px]
text-[17.2px]
max-w-[1183px]
```

unless a design requirement genuinely needs them.

Prefer reusable spacing and sizing systems.

---

# 58. Global CSS

Global CSS should remain limited to true global concerns.

Examples:

* Tailwind import
* root variables
* base typography behavior
* body defaults
* accessibility helpers
* custom utility classes where justified

Do not recreate a large traditional CSS codebase on top of Tailwind without a clear reason.

---

# 59. Responsive Architecture

All components must be designed mobile-first.

Core page functionality must work across:

* mobile
* tablet
* desktop
* large desktop

Responsive behavior must be intentional for:

* navigation
* headings
* forms
* service grids
* location grids
* tables
* FAQ sections
* CTAs
* footers

---

# 60. Accessibility Foundation

The implementation should support:

* semantic HTML
* keyboard navigation
* meaningful link text
* form labels
* heading hierarchy
* image alt text
* visible focus states
* accessible interactive components
* appropriate ARIA only where needed

Accessibility should be built into reusable components rather than retrofitted page by page.

---

# 61. Heading Architecture

Each page should generally contain one primary H1 representing the page's core topic.

Subsections should follow logical heading hierarchy.

Do not style text with heading elements merely to achieve a visual size.

Likewise, do not use generic `<div>` elements where semantic elements provide meaningful structure.

---

# 62. Semantic HTML

Prefer meaningful elements such as:

```html
<header>
<nav>
<main>
<section>
<article>
<aside>
<footer>
```

where appropriate.

Technical SEO and accessibility should reinforce one another.

---

# 63. JavaScript Budget

The project should minimize unnecessary client-side JavaScript.

Avoid adding large libraries for functionality that can be implemented simply.

Evaluate dependencies based on:

* functionality
* bundle impact
* maintenance
* security
* accessibility
* necessity

Do not add packages simply because they accelerate one isolated implementation task.

---

# 64. Dependency Governance

Before adding a dependency, ask:

1. Is it necessary?
2. Can the platform already do this?
3. Can a small project utility handle it?
4. Is the package maintained?
5. Does it increase browser JavaScript?
6. Does it introduce security or build risk?
7. Will it complicate Cloudflare static deployment?

Dependencies should be deliberate.

---

# 65. Package Manager

Use:

```text
npm
```

unless the project explicitly changes package manager.

Maintain and commit the corresponding lock file.

Do not mix:

* npm
* Yarn
* pnpm

within the same project unless a deliberate migration occurs.

---

# 66. Script Architecture

Recommended package scripts may include:

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint .",
    "typecheck": "tsc --noEmit"
  }
}
```

Additional validation scripts should be added as the project develops.

For a static export, production deployment should rely on the generated static output rather than a persistent `next start` server.

---

# 67. Validation Scripts

As the site scales, custom validation scripts should protect architecture integrity.

Potential scripts include:

```text
validate-pages
validate-routes
validate-slugs
validate-services
validate-locations
validate-canonicals
validate-links
validate-indexability
validate-schema
```

Example purpose:

```text
Does every service-location page reference a valid canonical service ID and valid canonical location ID?
```

This is preferable to discovering invalid relationships after deployment.

---

# 68. Duplicate Route Detection

The build process should detect duplicate pathnames.

Example:

```text
/services/sewer-inspection
/services/sewer-inspection
```

must fail validation rather than silently overwrite or conflict.

Route uniqueness should be enforced before production.

---

# 69. Slug Validation

Canonical slugs should follow the conventions defined in:

`05-url-routing-strategy.md`

Validation should detect:

* uppercase characters
* spaces
* inconsistent punctuation
* duplicated slugs
* invalid parent relationships
* noncanonical state abbreviations
* accidental trailing variations

---

# 70. Orphan Page Validation

Where practical, production QA should identify approved indexable pages that have no internal-link path from the broader site architecture.

An indexable page should not exist solely because it appears in a sitemap.

Internal discovery matters.

---

# 71. Broken Internal Link Validation

Internal links should be validated before deployment.

A broken URL caused by:

* changed slug
* renamed market
* retired service
* missing resource
* typo

should be detected during QA rather than discovered by users or search crawlers.

---

# 72. Development Environments

The project will generally operate across:

### Local

VS Code / Claude Code development environment.

### Preview

Cloudflare deployment previews or equivalent branch deployment environment.

### Production

Public canonical website.

Content behavior must distinguish preview and production where necessary.

---

# 73. Preview Indexation

Preview deployments must not intentionally become search index targets.

Production canonicals should not accidentally turn preview URLs into alternate canonical entities.

Cloudflare-generated preview URLs should be treated as development environments, not public SEO destinations.

---

# 74. Cloudflare Pages Build Configuration

The project is intended to deploy as a static Next.js export through Cloudflare Pages.

Cloudflare Pages allows projects to define a build command and output directory for the generated site.

Expected general configuration:

```text
Build command:
npm run build
```

Expected static output:

```text
out/
```

The exact Cloudflare project settings should be verified when deployment is configured.

---

# 75. GitHub Deployment Flow

Recommended flow:

```text
Local Development
        ↓
Git Commit
        ↓
GitHub
        ↓
Cloudflare Build
        ↓
Preview / Production Deployment
```

The GitHub repository should remain the canonical code source.

Do not manually edit generated production files in Cloudflare.

---

# 76. Branch Strategy

A simple branch model is preferred unless team complexity requires more.

Recommended:

```text
main
```

for approved production-ready code.

Feature or working branches may be used for:

* major architecture work
* large content batches
* redesigns
* risky changes

Avoid unnecessary branch complexity for routine content updates.

---

# 77. Commit Discipline

Commits should represent understandable units of work.

Examples:

```text
docs: add business brand foundation
feat: add service registry
feat: build market hub template
content: add St. Louis sewer inspection page
seo: add breadcrumb schema
fix: correct San Diego canonical URL
```

Avoid meaningless production commit messages such as:

```text
update
stuff
changes
final2
```

---

# 78. Generated Build Output

The static `out/` directory should generally be treated as generated build output.

The source repository should primarily contain:

* code
* content
* data
* configuration
* documentation

rather than relying on committed compiled production files unless a deployment requirement specifically requires otherwise.

---

# 79. Redirect Architecture

Redirect rules should be managed centrally based on:

`20-migration-redirect-plan.md`

Potential storage:

```text
data/redirects/
```

The implementation must support:

* legacy URL redirects
* changed slugs
* removed pages
* consolidated pages
* domain migration requirements

Do not create redirect chains intentionally.

---

# 80. 404 Architecture

Create a useful:

```text
app/not-found.tsx
```

The 404 experience should:

* clearly indicate the page was not found
* provide navigation
* link to key services
* link to markets
* offer a contact path

Do not redirect all missing pages to the homepage.

---

# 81. Analytics Architecture

Analytics implementation will be defined in:

`19-analytics-measurement.md`

Likely systems may include:

* Google Analytics 4
* Google Tag Manager
* Google Search Console
* Bing Webmaster Tools
* conversion tracking
* call tracking where approved

Tracking components should be centralized.

Avoid embedding duplicate analytics scripts into individual pages.

---

# 82. Analytics Environment Controls

Analytics should avoid contaminating production data with unnecessary development events where practical.

Preview and local environments should be handled intentionally.

The final rule set belongs in the analytics document.

---

# 83. Performance Principles

The architecture should prioritize:

* static delivery
* optimized images
* minimal client JavaScript
* limited third-party scripts
* reusable assets
* efficient fonts
* lazy loading where appropriate
* limited dependency weight
* stable layouts

Performance should not be sacrificed for decorative complexity.

---

# 84. Font Architecture

Fonts should be deliberately selected and centrally configured.

Prefer:

* limited font families
* limited weights
* local/static-friendly delivery where appropriate
* preloading only when justified

The final typography system will be defined in:

`18-design-system.md`

---

# 85. Third-Party Script Governance

Third-party scripts may include:

* analytics
* chat widgets
* call tracking
* booking
* forms
* CRM integrations

Every script should be evaluated for:

* business value
* performance
* privacy
* security
* duplicate functionality

Do not add scripts simply because a vendor provides them.

---

# 86. Security Principles

Even though the website is primarily static, security practices still apply.

Do not:

* commit credentials
* expose private API keys
* trust user input without validation
* embed unnecessary third-party code
* allow dependencies to become unmanaged
* publish private project documentation

Keep project knowledge intended for internal governance out of publicly routed application paths.

---

# 87. Documentation Must Not Become Public Routes

Files inside:

```text
/docs/
```

must remain repository documentation.

They should not automatically be rendered as website pages.

For example:

```text
docs/06-master-service-registry.md
```

is an internal project source-of-truth document, not a public web resource.

---

# 88. Public Content vs Internal Documentation

Maintain a clear distinction:

```text
/docs/
```

= internal project governance

```text
/content/
```

= website content source

Do not use project planning documents as public page content without explicitly adapting them.

---

# 89. Claude Project Responsibility

Claude Project will primarily support:

* research
* strategy
* content planning
* page writing
* structured project decisions

Project-specific knowledge should ultimately be reflected in the repository source-of-truth documentation rather than existing only inside a Claude conversation.

---

# 90. Claude Code Responsibility

Claude Code should be used for:

* repository implementation
* file creation
* component development
* page builds
* structured data integration
* validation
* refactoring
* Git workflows
* build troubleshooting

Claude Code should implement approved project decisions rather than independently redefining the site's business architecture.

---

# 91. Site OS Responsibility

Site OS Master remains the reusable governance layer for:

* workflow
* prompts
* QA
* gates
* research methodology
* production methodology
* efficiency
* build governance

Do not copy generalized Site OS processes into this technical document.

This document defines only The Sewer Pros-specific technical architecture and overrides.

---

# 92. `CLAUDE.md` Responsibility

The repository-root:

```text
CLAUDE.md
```

should provide Claude Code with concise implementation guidance.

It should reference project source-of-truth documents instead of duplicating their entire contents.

Conceptual instruction:

```text
Before generating routes, read:
- docs/04-master-page-build-list.md
- docs/05-url-routing-strategy.md
- docs/06-master-service-registry.md
- docs/07-master-location-registry.md

Never generate routes directly from the full service-location opportunity matrix.
```

Detailed `CLAUDE.md` content will be created separately.

---

# 93. Build Authorization Rule

Claude Code must not interpret:

```text
579 locations
×
18 services
=
10,422 opportunities
```

as:

```text
10,422 pages to build
```

The correct interpretation is:

```text
10,422 researched relationships
↓
subset strategically approved
↓
approved Master Page Build List
↓
authorized routes
```

---

# 94. Production Page Gate

Before a page becomes a production indexable route, it should satisfy:

```text
Valid Page ID
+
Approved Page Type
+
Valid Canonical Entity IDs
+
Approved Pathname
+
Approved Content
+
Indexation Decision
+
QA
```

If these conditions are not met, the page should not automatically enter production.

---

# 95. Build Failure Philosophy

Where practical, architecture violations should fail loudly.

Examples:

* duplicate pathname
* unknown service ID
* unknown location ID
* missing market
* invalid page type
* duplicate canonical
* approved route with missing content

A failed build is preferable to silently publishing corrupted architecture.

---

# 96. Research Data Must Be Read-Only During Builds

Production build scripts should not modify research source data.

The build process should consume approved structured datasets.

It should not:

* discover keywords
* generate new location relationships
* approve pages
* create new services
* alter canonical records

Research and approval occur upstream.

Builds implement approved decisions.

---

# 97. URL Stability

Once an indexable route is launched, its URL should be treated as persistent infrastructure.

Do not casually change:

* slugs
* directories
* market naming
* service naming

because implementation aesthetics change.

Any necessary URL change must trigger redirect evaluation.

---

# 98. Architecture for Future Markets

The architecture should allow future markets to be added primarily through:

```text
Market Registry
+
Location Registry
+
Service Availability
+
Approved Page Registry
+
Market Content
```

A fourth market should not require creation of a separate application or duplicated component tree.

---

# 99. Architecture for Future Services

Similarly, adding an approved service should involve:

```text
Service Registry Update
+
Content
+
Page Approval
+
Relationships
+
Internal Linking
+
Schema
```

rather than manually modifying dozens of components.

---

# 100. Architecture for Future Page Scale

The system should remain practical if future approved inventories reach:

* hundreds of pages
* thousands of pages

Scaling should rely on:

* structured registries
* reusable components
* static generation
* validation scripts
* systematic metadata
* systematic schema
* controlled internal linking

not manual duplication.

---

# 101. Technical Architecture Decision Summary

The Sewer Pros website will use:

```text
Next.js App Router
+
TypeScript
+
Tailwind CSS
+
Structured Project Data
+
Approved Page Registry
+
Static Generation
+
GitHub
+
Cloudflare Pages
```

The architecture is deliberately optimized for a content-heavy, multi-market SEO site rather than a server-heavy web application.

---

# 102. Critical Technical Rules

The following rules are mandatory.

### Rule 1

Use Next.js App Router.

### Rule 2

Use TypeScript for production application architecture.

### Rule 3

Use Tailwind CSS as the primary styling system.

### Rule 4

Target static export and Cloudflare Pages.

### Rule 5

Do not generate routes from the full service × location matrix.

### Rule 6

Only approved pages from the Master Page Build List may become authorized production routes.

### Rule 7

Treat services, locations, markets, audiences, and commercial segments as canonical structured entities.

### Rule 8

Keep research data separate from publishing authorization.

### Rule 9

Use reusable page families and components.

### Rule 10

Do not confuse reusable templates with duplicate content.

### Rule 11

Generate metadata, canonicals, sitemaps, breadcrumbs, and schema systematically.

### Rule 12

Do not fabricate physical locations or local business entities.

### Rule 13

Keep internal project documentation separate from public website content.

### Rule 14

Do not expose private credentials in static client code.

### Rule 15

Fail validation when architecture integrity is compromised.

### Rule 16

Treat published URLs as durable infrastructure.

### Rule 17

Site OS governs generalized workflow and QA; repository documents govern The Sewer Pros-specific implementation.

---

# 103. Initial Technical Build Sequence

Once the strategic documentation is sufficiently complete, the repository foundation should generally proceed in this order:

```text
1. Initialize Next.js project
2. Configure TypeScript
3. Configure Tailwind
4. Configure static export
5. Create repository directory structure
6. Add project documentation
7. Create core TypeScript types
8. Create business configuration
9. Create market registry
10. Create service registry
11. Create location registry
12. Create approved page registry
13. Create route utilities
14. Create metadata utilities
15. Create schema utilities
16. Create base layout
17. Create design-system primitives
18. Create reusable page sections
19. Create page-family templates
20. Implement approved routes
21. Implement sitemap and robots
22. Implement redirects
23. Implement analytics
24. Run validation
25. Build static export
26. Deploy preview
27. Complete QA
28. Deploy production
```

This sequence is directional.

Site OS gates and project-specific dependencies may alter the order.

---

# 104. Architecture Change Triggers

This technical architecture should be reevaluated if future requirements introduce:

* authenticated user accounts
* runtime dashboards
* private customer portals
* server-side database access
* runtime personalization
* runtime pricing calculations
* server-dependent applications
* complex server-side APIs
* application-level ecommerce
* runtime CMS rendering
* significant server-side form processing
* dynamic pages that cannot be prebuilt

At that point, migration from static Cloudflare Pages architecture to an approved server-capable architecture may be appropriate.

Cloudflare currently directs full-stack server-rendered Next.js deployments toward Workers using its Next.js/OpenNext deployment path.

Any such change requires explicit architectural approval.

---

# 105. Final Technical Principle

The Sewer Pros site should behave as a **controlled publishing system**, not an uncontrolled programmatic SEO generator.

The application architecture should make it easy to scale approved content while making it difficult to accidentally publish unapproved combinations.

The fundamental implementation chain is:

```text
Research
↓
Canonical Registries
↓
SEO Opportunity Relationships
↓
Strategic Approval
↓
Master Page Build List
↓
Approved Page Registry
↓
Reusable Next.js Templates
↓
Static Generation
↓
Validation
↓
Cloudflare Pages
```

That chain is the technical foundation for maintaining quality, search integrity, scalability, and operational control as The Sewer Pros expands across St. Louis, San Diego, Las Vegas, and future markets.
