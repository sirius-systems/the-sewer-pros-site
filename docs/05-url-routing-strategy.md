# The Sewer Pros — URL & Routing Strategy

**Document:** `05-url-routing-strategy.md`
**Project:** The Sewer Pros Website Rebuild
**Repository:** `the-sewer-pros-site`
**Status:** Foundation / Routing Authority
**Document Role:** Canonical URL, slug, route-family, redirect, and route-generation source of truth
**Primary Markets:** St. Louis, MO; San Diego, CA; Las Vegas, NV

---

# 1. Purpose

This document defines the canonical URL and application-routing strategy for The Sewer Pros website.

It governs:

* URL structure
* path hierarchy
* canonical paths
* market routing
* location routing
* service routing
* service + location routing
* audience routing
* commercial routing
* comparison pages
* alternative pages
* resource pages
* slug normalization
* trailing-slash behavior
* route collisions
* aliases
* redirect behavior
* legacy URL migration
* Next.js App Router implementation
* static route generation
* sitemap consistency

This document answers:

> **When a page is approved, what is its one canonical URL and how should Next.js generate it?**

---

# 2. Governing Document Relationship

The project source-of-truth hierarchy for routing is:

```text
03-information-architecture.md
↓
Defines how pages relate conceptually

04-master-page-build-list.md
↓
Defines which pages are authorized

05-url-routing-strategy.md
↓
Defines the canonical route for each authorized page

06-master-service-registry.md
+
07-master-location-registry.md
↓
Provide canonical service/location identifiers and slugs

Next.js Approved Page Registry
↓
Implements the approved routes
```

A route must not exist simply because its pathname can be calculated.

---

# 3. Core URL Principle

Every indexable page should have:

* one primary search intent
* one canonical pathname
* one canonical URL
* one stable page ID

Avoid multiple URLs representing the same entity or intent.

The governing principle is:

```text
One Page
→
One Canonical Path
→
One Canonical URL
```

---

# 4. Canonical URL Style

Canonical URLs should be:

* lowercase
* human-readable
* descriptive
* concise
* hyphen-separated
* stable
* keyword-relevant without being keyword-stuffed
* logically grouped by page family
* free from unnecessary parameters

Preferred:

```text
/services/sewer-camera-inspection/
```

Avoid:

```text
/services/SewerCameraInspection/
/service?id=3289
/sewer-camera-inspection-service-company-professional/
/services/sewer_camera_inspection/
```

---

# 5. Trailing-Slash Standard

The project will use:

```ts
trailingSlash: true
```

Canonical URLs therefore end with `/`.

Examples:

```text
/services/sewer-camera-inspection/

/st-louis-mo/chesterfield/

/san-diego-ca/carlsbad/sewer-camera-inspection/
```

Next.js supports configuring trailing-slash normalization through the `trailingSlash` setting.

This routing document therefore **finalizes the project-specific trailing-slash decision**.

The earlier example in:

`02-nextjs-technical-architecture.md`

showing:

```ts
trailingSlash: false
```

was illustrative rather than final.

For this project, the authoritative setting is:

```ts
trailingSlash: true
```

This decision should later be recorded in:

`22-decisions-change-log.md`

---

# 6. Recommended Next.js Configuration

The relevant routing portion of `next.config.ts` should conceptually resemble:

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

The project remains static-export-first.

Next.js static export generates static output for prebuilt routes, while `generateStaticParams()` can provide the approved parameter set for dynamic App Router segments.

---

# 7. Canonical URL Origin

The production origin should be centralized through configuration.

Example:

```ts
export const siteConfig = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL,
}
```

Canonical URL generation should conceptually use:

```ts
new URL(pathname, siteConfig.siteUrl)
```

Do not manually type the production domain into:

* individual pages
* schema
* sitemap records
* breadcrumbs
* Open Graph metadata

The final production-domain decision will be confirmed through the migration plan.

---

# 8. Global Route Families

The approved route families are:

```text
/
```

```text
/about/
/contact/
/faq/
```

```text
/services/
/services/{service}/
```

```text
/locations/
```

```text
/{market}/
/{market}/{location-path}/
/{market}/{location-path}/{service}/
```

```text
/{market}/{market-specific-service}/
```

```text
/for/
/for/{audience}/
```

```text
/{market}/{location-path}/for/{audience}/
```

```text
/commercial/
/commercial/{service}/
```

```text
/{market}/{location-path}/commercial/{service}/
```

```text
/compare/{comparison}/
```

```text
/alternatives/{alternative}/
```

```text
/resources/
/resources/{resource}/
```

Future resource topic hubs may introduce additional nested resource architecture only after approval.

---

# 9. Global Reserved Segments

The following root-level path segments are reserved:

```text
about
contact
faq
services
locations
for
commercial
compare
alternatives
resources
```

Future reserved terms may include:

```text
privacy
terms
accessibility
reviews
```

if those pages are approved.

No market ID, service alias, or other entity may use a root slug that conflicts with a reserved segment.

---

# 10. Market Route Pattern

Each primary market receives one canonical market hub.

Pattern:

```text
/{market}/
```

Approved market slugs:

```text
st-louis-mo
san-diego-ca
las-vegas-nv
```

Result:

```text
/st-louis-mo/
/san-diego-ca/
/las-vegas-nv/
```

These market IDs should remain stable even if visible marketing terminology changes.

---

# 11. Market Slug Standard

Primary market slugs should generally use:

```text
city-state-abbreviation
```

Examples:

```text
st-louis-mo
san-diego-ca
las-vegas-nv
```

This makes geographic identity explicit and reduces ambiguity.

Future markets should follow the same model where practical.

---

# 12. Market Hub vs City Page

A market hub may represent a broader operating geography than its similarly named city.

Therefore:

```text
/san-diego-ca/
```

and:

```text
/san-diego-ca/san-diego/
```

are separate entities.

Likewise:

```text
/las-vegas-nv/
```

and:

```text
/las-vegas-nv/las-vegas/
```

serve different architectural purposes.

### Market Hub

```text
/san-diego-ca/
```

Represents the entire San Diego operating market.

### City Page

```text
/san-diego-ca/san-diego/
```

Represents service intent specifically associated with the City of San Diego.

Do not automatically redirect the city page into the market hub unless future search/cannibalization analysis determines they should be consolidated.

---

# 13. St. Louis Market Distinction

The St. Louis architecture uses:

```text
/st-louis-mo/
```

for the broader market.

The independent-city geography is:

```text
/st-louis-mo/st-louis-city/
```

This prevents ambiguity between:

* St. Louis metropolitan market
* St. Louis City
* St. Louis County
* individual municipalities

---

# 14. Location Route Pattern

The standard location pattern is:

```text
/{market}/{location}/
```

Examples:

```text
/st-louis-mo/chesterfield/
/san-diego-ca/carlsbad/
/las-vegas-nv/henderson/
```

The location slug must come from the canonical location registry.

Do not independently regenerate location slugs inside page components.

---

# 15. Canonical Location Path Is Authoritative

Every approved location should have a canonical path stored in the location registry.

Example:

```ts
{
  id: 'loc-carlsbad',
  name: 'Carlsbad',
  marketId: 'san-diego-ca',
  slug: 'carlsbad',
  pathname: '/san-diego-ca/carlsbad/',
}
```

The pathname should be treated as the authoritative route representation.

---

# 16. Nested Geographic Routes

Some geographic entities require deeper hierarchy.

The primary example is St. Louis City neighborhoods.

Pattern:

```text
/st-louis-mo/st-louis-city/{neighborhood}/
```

Examples:

```text
/st-louis-mo/st-louis-city/soulard/
/st-louis-mo/st-louis-city/the-hill/
/st-louis-mo/st-louis-city/tower-grove-south/
```

These routes should only exist when explicitly approved by the Master Page Build List.

Neighborhood status in the geographic registry alone does not authorize publication.

---

# 17. Append-to-Canonical-Location Rule

For location-specific page families, the system should not assume that every location has exactly one segment.

Instead:

> **Start with the location's canonical pathname and append the required child segment.**

Example location:

```text
/st-louis-mo/st-louis-city/soulard/
```

Service + location:

```text
/st-louis-mo/st-louis-city/soulard/sewer-camera-inspection/
```

Audience + location:

```text
/st-louis-mo/st-louis-city/soulard/for/home-buyers/
```

Commercial + location:

```text
/st-louis-mo/st-louis-city/soulard/commercial/hydro-jetting/
```

This allows the routing system to support both shallow and nested geographic entities.

---

# 18. Canonical Service Hub

The canonical services hub is:

```text
/services/
```

It represents the company-wide service taxonomy.

---

# 19. Canonical Service Page Pattern

Company-wide service pages use:

```text
/services/{service}/
```

Examples:

```text
/services/sewer-camera-inspection/

/services/sewer-cleaning/

/services/hydro-jetting/

/services/sewer-cleaning-camera-inspection/

/services/sewer-line-locating/

/services/drain-cleaning/

/services/pre-purchase-sewer-inspection/
```

Canonical service slugs must come from:

`06-master-service-registry.md`

---

# 20. Service Alias Rule

Keyword aliases do not create alternate URLs.

Example:

```text
Sewer Scope
```

maps to:

```text
/services/sewer-camera-inspection/
```

Do not create:

```text
/services/sewer-scope/
```

unless an explicit future decision establishes it as a separate search intent.

---

# 21. Rooter Alias Rule

Terms such as:

```text
rooter service
sewer rooter
main line rooter
```

should generally map into the canonical sewer-cleaning entity.

Canonical page:

```text
/services/sewer-cleaning/
```

Do not create duplicate service URLs for vocabulary variants.

---

# 22. Service + Location Pattern

The canonical service + location pattern is:

```text
/{canonical-location-path}/{service}/
```

For standard one-segment locations:

```text
/{market}/{location}/{service}/
```

Example:

```text
/san-diego-ca/carlsbad/sewer-camera-inspection/
```

---

# 23. Correct Service + Location Examples

Approved structural examples:

```text
/st-louis-mo/chesterfield/sewer-camera-inspection/

/st-louis-mo/ballwin/pre-purchase-sewer-inspection/

/san-diego-ca/san-marcos/sewer-camera-inspection/

/san-diego-ca/escondido/sewer-cleaning/

/san-diego-ca/mission-valley/hydro-jetting/
```

---

# 24. Prohibited Flat Service + Location URLs

Do not use flattened keyword-concatenation patterns such as:

```text
/san-diego-ca/sewer-camera-inspection-carlsbad/

/st-louis-mo/hydro-jetting-chesterfield/

/las-vegas-nv/sewer-cleaning-henderson/
```

The canonical model is entity-hierarchical:

```text
Market
→
Location
→
Service
```

Preferred:

```text
/san-diego-ca/carlsbad/sewer-camera-inspection/
```

---

# 25. Why the Nested Model Is Preferred

The nested service + location model provides a clear relationship between:

* market
* local geography
* service

It also creates a predictable expansion system.

Conceptually:

```text
/san-diego-ca/
    /carlsbad/
        /sewer-camera-inspection/
        /sewer-cleaning/
        /hydro-jetting/
```

The routing hierarchy should reflect approved entities rather than concatenated keyword strings.

---

# 26. Service + Location Authorization

A URL being technically valid does not make it approved.

For example:

```text
/san-diego-ca/carlsbad/hydro-jetting/
```

may be structurally valid.

But it must not exist unless:

`04-master-page-build-list.md`

authorizes it.

This distinction must be enforced programmatically.

---

# 27. St. Louis Market-Specific Service Route

Market-specific services may live directly beneath the market hub when the intent genuinely belongs to that market rather than the global service taxonomy.

Approved example:

```text
/st-louis-mo/sewer-lateral-inspection-reporting/
```

This page is intentionally not:

```text
/services/sewer-lateral-inspection-reporting/
```

because the service is specifically tied to the St. Louis market.

---

# 28. Market-Specific Service Collision Control

A market-level child route can potentially represent either:

* a location
* a market-specific service

Example:

```text
/st-louis-mo/chesterfield/
```

is a location.

```text
/st-louis-mo/sewer-lateral-inspection-reporting/
```

is a market-specific service.

The approved page registry must determine entity type by the **complete pathname**, not by blindly assuming every second segment is a location.

---

# 29. Audience Hub

The audience parent route is:

```text
/for/
```

This should be used as the company-wide "Who We Serve" hub.

---

# 30. Audience Page Pattern

Canonical company-wide audience pages use:

```text
/for/{audience}/
```

Examples:

```text
/for/home-buyers/

/for/home-sellers/

/for/real-estate-agents/

/for/home-inspectors/

/for/property-managers/

/for/hoa-communities/
```

---

# 31. Why `/for/` Is Preferred

The `/for/` namespace is:

* concise
* flexible
* understandable
* scalable across residential, real estate, referral, and property audiences

It avoids unnecessarily long structures such as:

```text
/audiences/home-buyers/
```

or:

```text
/who-we-serve/home-buyers/
```

The visible navigation label may still be:

**Who We Serve**

while the route remains:

```text
/for/
```

---

# 32. Audience + Location Pattern

Approved future audience + location routes use:

```text
/{canonical-location-path}/for/{audience}/
```

Standard example:

```text
/san-diego-ca/carlsbad/for/home-buyers/
```

Nested geographic example:

```text
/st-louis-mo/st-louis-city/soulard/for/home-buyers/
```

These routes remain post-launch unless separately promoted in the Master Page Build List.

---

# 33. Do Not Reverse Audience + Location Order

Avoid:

```text
/for/home-buyers/carlsbad-ca/
```

The project's local architecture treats geography as the primary parent for local audience variants.

Canonical model:

```text
Market
→
Location
→
Audience
```

---

# 34. Commercial Hub

The canonical commercial hub is:

```text
/commercial/
```

Commercial is treated as a first-class acquisition channel.

---

# 35. Commercial Service Pattern

Company-wide commercial services use:

```text
/commercial/{service}/
```

Approved examples:

```text
/commercial/sewer-camera-inspection/

/commercial/sewer-cleaning/

/commercial/hydro-jetting/

/commercial/drain-cleaning/

/commercial/preventative-maintenance/
```

---

# 36. Commercial Route Naming

Commercial service slugs should generally reuse the canonical service concept rather than unnecessarily repeating "commercial" inside the child slug.

Preferred:

```text
/commercial/hydro-jetting/
```

Avoid:

```text
/commercial/commercial-hydro-jetting/
```

The parent namespace already establishes commercial intent.

---

# 37. Commercial + Location Pattern

Local commercial pages use:

```text
/{canonical-location-path}/commercial/{service}/
```

Examples:

```text
/san-diego-ca/mission-valley/commercial/hydro-jetting/

/st-louis-mo/maryland-heights/commercial/sewer-cleaning/
```

when approved.

---

# 38. Do Not Flatten Commercial Local URLs

Avoid:

```text
/san-diego-ca/commercial-hydro-jetting-mission-valley/
```

or:

```text
/commercial/hydro-jetting/san-diego-ca/mission-valley/
```

Canonical model:

```text
Market
→
Location
→
Commercial
→
Service
```

---

# 39. Comparison Namespace

Comparison pages use:

```text
/compare/{comparison}/
```

Examples:

```text
/compare/independent-sewer-inspection-vs-repair-company/

/compare/hydro-jetting-vs-sewer-snaking/
```

---

# 40. Comparison Slug Rule

Comparison slugs should:

* clearly identify both concepts
* use `vs`
* remain concise
* avoid unnecessary words

Preferred:

```text
hydro-jetting-vs-sewer-snaking
```

Avoid:

```text
which-is-better-hydro-jetting-or-sewer-snaking-comparison
```

---

# 41. Comparison Pages Are Not Service Pages

Comparison pages must remain under:

```text
/compare/
```

Do not place them in:

```text
/services/
```

even when a comparison heavily discusses an offered service.

This preserves intent separation.

---

# 42. Alternative Namespace

Alternative pages use:

```text
/alternatives/{alternative}/
```

Examples:

```text
/alternatives/diy-sewer-camera-inspection/

/alternatives/renting-a-sewer-snake/

/alternatives/sewer-repair-company-inspection/
```

---

# 43. Resource Hub

The canonical resource hub is:

```text
/resources/
```

---

# 44. Launch Resource Pattern

Approved launch resources use:

```text
/resources/{resource}/
```

Examples:

```text
/resources/st-louis-sewer-lateral-report/

/resources/st-louis-city-sewer-lateral-program/

/resources/what-is-in-a-sewer-camera-inspection-report/

/resources/how-to-read-a-sewer-camera-inspection-video/
```

---

# 45. Future Resource Topic Hubs

As topical clusters expand, topic hubs may eventually be approved.

Potential structure:

```text
/resources/sewer-inspection/

/resources/hydro-jetting/

/resources/homebuyer-sewer-inspections/

/resources/commercial-sewer-maintenance/
```

These are structural possibilities, not current page approvals.

---

# 46. Future Nested Resource Articles

If content volume eventually justifies deeper resource organization, future articles may use:

```text
/resources/{topic}/{article}/
```

Example:

```text
/resources/sewer-inspection/common-sewer-camera-findings/
```

However, do not migrate existing resource URLs merely to make the architecture appear more uniform.

URL stability takes priority.

---

# 47. Resource URL Stability

Once an educational page is indexed at:

```text
/resources/what-is-in-a-sewer-camera-inspection-report/
```

it should remain there unless a substantial migration benefit justifies changing it.

Do not reorganize established URLs casually as resource clusters grow.

---

# 48. FAQ Route

The approved primary FAQ page is:

```text
/faq/
```

Individual FAQ questions should generally live:

* on relevant service pages
* on market pages
* on audience pages
* within resource content

Do not automatically create URLs such as:

```text
/faq/what-is-hydro-jetting/
```

for every question.

---

# 49. Legal and Utility Routes

When approved, standard utility pages should generally use simple root routes.

Potential examples:

```text
/privacy/
/terms/
/accessibility/
```

These should not be nested beneath:

```text
/resources/
```

or:

```text
/about/
```

unless an explicit architecture decision determines otherwise.

---

# 50. URL Parameter Rule

Indexable content should not rely on query parameters as its canonical identity.

Avoid canonical pages such as:

```text
/services/?service=hydro-jetting
```

or:

```text
/locations/?city=carlsbad
```

Indexable content receives a clean path.

---

# 51. Tracking Parameters

Marketing parameters such as:

```text
utm_source
utm_medium
utm_campaign
gclid
```

may appear during user sessions.

They should not create separate canonical URLs.

Canonical metadata should continue to point to the clean approved pathname.

---

# 52. Slug Character Standard

Canonical slugs should use:

```text
a-z
0-9
hyphen
```

Avoid:

* spaces
* underscores
* ampersands
* commas
* apostrophes
* periods
* encoded punctuation
* unnecessary special characters

---

# 53. Lowercase Rule

All canonical URL path segments must be lowercase.

Preferred:

```text
/san-diego-ca/
```

Not:

```text
/San-Diego-CA/
```

Requests with incorrect capitalization should not become separately indexable URLs.

---

# 54. Hyphen Rule

Use hyphens to separate words.

Preferred:

```text
sewer-camera-inspection
```

Avoid:

```text
sewer_camera_inspection
sewercamerainspection
```

---

# 55. Unicode and Accent Normalization

Canonical slugs should use URL-safe ASCII where the approved registry has normalized accented characters.

Example:

```text
Rancho Peñasquitos
```

canonical slug:

```text
rancho-penasquitos
```

Do not create parallel accented and non-accented URLs.

---

# 56. Apostrophe Normalization

The canonical registry controls final apostrophe handling.

Examples may include:

```text
O'Fallon, MO
→
ofallon-mo
```

or an already approved location such as:

```text
Mountain's Edge
→
mountain-s-edge
```

Once a canonical slug is approved, **do not rerun it through a different generic slugification algorithm** and silently change it.

Registry values take precedence over generic normalization logic.

---

# 57. State Abbreviation Rule

Where state designation is part of a market slug, use the lowercase two-letter abbreviation.

Examples:

```text
mo
ca
nv
```

Do not alternate among:

```text
missouri
MO
mo
```

inside canonical market paths.

---

# 58. Ambiguous City Names

Where needed, the canonical registry may include a state indicator in a location slug to prevent ambiguity.

Example:

```text
/st-louis-mo/ofallon-mo/
```

The registry determines the canonical slug.

Do not simplify it in implementation because a shorter variation appears visually cleaner.

---

# 59. Route IDs vs Slugs

Internal entity IDs and public slugs serve different purposes.

Example:

```ts
serviceId: 'svc-sewer-camera-inspection'
slug: 'sewer-camera-inspection'
```

Never expose internal IDs as public routes.

Avoid:

```text
/services/svc-sewer-camera-inspection/
```

---

# 60. Stable Internal IDs

A slug may occasionally need to change.

The entity ID should usually remain stable.

Example:

```ts
id: 'loc-st-charles'
```

remains constant even if a future routing decision changes the display slug.

This makes migration and data relationships safer.

---

# 61. URL Length Principle

Keep URLs as short as the architecture permits without sacrificing clarity.

Preferred:

```text
/commercial/hydro-jetting/
```

Avoid:

```text
/commercial-services/commercial-sewer-and-drain-hydro-jetting-services/
```

---

# 62. Keyword Repetition Rule

Do not repeatedly insert the same keyword into the path.

Avoid:

```text
/sewer-services/sewer-cleaning/sewer-cleaning-services/
```

Use:

```text
/services/sewer-cleaning/
```

---

# 63. Geographic Repetition Rule

Avoid unnecessary geographic duplication.

Preferred:

```text
/san-diego-ca/carlsbad/
```

Avoid:

```text
/san-diego-ca/carlsbad-ca-san-diego-county/
```

The parent market already establishes geographic context.

---

# 64. Canonical Path Construction

Do not build URLs independently across multiple components.

Use centralized routing helpers.

Conceptually:

```ts
getServicePath(service)
getMarketPath(market)
getLocationPath(location)
getServiceLocationPath(page)
getAudiencePath(audience)
getAudienceLocationPath(page)
getCommercialPath(service)
getCommercialLocationPath(page)
getResourcePath(resource)
```

---

# 65. Prefer Stored Canonical Pathnames

Where practical, the approved page registry should store the final pathname.

Example:

```ts
{
  id: 'sl-carlsbad-camera',
  pageType: 'service-location',
  pathname: '/san-diego-ca/carlsbad/sewer-camera-inspection/',
  serviceId: 'svc-sewer-camera-inspection',
  locationId: 'loc-carlsbad',
}
```

The application should not repeatedly reconstruct critical URLs from strings in page components.

---

# 66. Path Validation

Every approved pathname should pass validation.

Checks should include:

* starts with `/`
* ends with `/`
* lowercase only
* no spaces
* no underscores
* no duplicate slashes
* no query strings
* no fragments
* no duplicate pathname
* valid parent entity
* approved page record

---

# 67. Duplicate Route Detection

The build must fail if two approved page records resolve to the same pathname.

Example conflict:

```text
Page A:
/st-louis-mo/example/

Page B:
/st-louis-mo/example/
```

This should be treated as an architectural error rather than silently selecting one page.

---

# 68. Reserved Market-Child Collision Check

Within each market, validate collisions among:

* locations
* market-specific services
* future utility routes

Example:

```text
/st-louis-mo/sewer-lateral-inspection-reporting/
```

must not conflict with a location whose slug is:

```text
sewer-lateral-inspection-reporting
```

The route validator should detect this before build.

---

# 69. Nested Route Ambiguity

A three-segment market path may theoretically represent different page families.

Examples:

```text
/st-louis-mo/st-louis-city/soulard/
```

could represent a nested geographic page.

```text
/st-louis-mo/st-louis-city/sewer-camera-inspection/
```

represents a service + location page.

The system must resolve page identity using the approved pathname registry rather than trying to infer meaning from segment count alone.

---

# 70. Recommended App Router Strategy

Because market-local architecture includes variable geographic depth, a **registry-resolved catch-all market route** is recommended.

Conceptually:

```text
app/
├── [market]/
│   ├── page.tsx
│   └── [...segments]/
│       └── page.tsx
```

Next.js App Router supports catch-all dynamic segments using the `[...segment]` convention.

---

# 71. Why Catch-All Market Routing Fits This Project

A catch-all market route can support:

```text
/st-louis-mo/chesterfield/

/st-louis-mo/chesterfield/sewer-camera-inspection/

/st-louis-mo/st-louis-city/soulard/

/st-louis-mo/st-louis-city/soulard/sewer-camera-inspection/

/san-diego-ca/carlsbad/for/home-buyers/

/las-vegas-nv/las-vegas-strip/commercial/hydro-jetting/
```

without creating overlapping filesystem dynamic-route definitions.

---

# 72. Catch-All Routing Does Not Mean Catch-All Publishing

This distinction is critical.

A catch-all filesystem route must **not** accept arbitrary URL permutations.

The catch-all exists only to resolve paths in the approved page registry.

Conceptual logic:

```ts
const page = getApprovedPageByPathname(pathname)

if (!page) {
  notFound()
}
```

The filesystem may technically recognize the pattern.

The page registry determines whether the path actually exists.

---

# 73. Static Parameter Generation

The market catch-all should receive only approved parameter sets.

Conceptually:

```ts
export function generateStaticParams() {
  return approvedMarketPages.map((page) => ({
    market: page.marketSlug,
    segments: page.routeSegments,
  }))
}
```

`generateStaticParams()` is the App Router mechanism for pre-generating dynamic routes at build time.

Never populate it from:

```text
579 locations
×
18 services
```

---

# 74. Global Static Route Families

Global page families may use explicit directories.

Recommended conceptual structure:

```text
app/
├── page.tsx
├── about/
├── contact/
├── faq/
│
├── services/
│   ├── page.tsx
│   └── [service]/
│       └── page.tsx
│
├── locations/
│   └── page.tsx
│
├── for/
│   ├── page.tsx
│   └── [audience]/
│       └── page.tsx
│
├── commercial/
│   ├── page.tsx
│   └── [service]/
│       └── page.tsx
│
├── compare/
│   └── [comparison]/
│       └── page.tsx
│
├── alternatives/
│   └── [alternative]/
│       └── page.tsx
│
├── resources/
│   ├── page.tsx
│   └── [...]
│
└── [market]/
    ├── page.tsx
    └── [...segments]/
        └── page.tsx
```

Final implementation may vary, but route behavior must conform to this document.

---

# 75. Static Routes Take Priority Conceptually

Known global namespaces such as:

```text
/services/
/resources/
/commercial/
```

must remain dedicated global routes.

The market registry must never use these reserved terms as market IDs.

---

# 76. Page Registry Lookup

The routing layer should provide a deterministic lookup such as:

```ts
getPageByPathname(pathname)
```

or:

```ts
getPageByRoute({
  market,
  segments,
})
```

The lookup should return the approved page record.

It should not create a page object when no approved record exists.

---

# 77. Unknown Route Behavior

Unknown paths must produce a legitimate 404.

Example:

```text
/san-diego-ca/fake-city/fake-service/
```

should not:

* dynamically construct a page
* fall back to San Diego
* redirect to the homepage
* return a thin generic template

It should return Not Found.

---

# 78. Static Export Requirement

Because the project uses static export, authorized dynamic routes need to be known during build generation.

Next.js static exports generate static files for the prebuilt route set.

This reinforces the project rule that the approved page registry must exist before large-scale route generation.

---

# 79. Canonical Metadata

Every indexable page should use its approved pathname when generating canonical metadata.

Conceptually:

```ts
alternates: {
  canonical: page.pathname,
}
```

or its fully resolved production URL.

Do not derive canonicals from:

* browser location
* preview deployment hostname
* query parameters
* referring page

---

# 80. Sitemap URL Consistency

Sitemap URLs must exactly match canonical URL style.

If canonical URLs use:

```text
/services/hydro-jetting/
```

the sitemap must not output:

```text
/services/hydro-jetting
```

Consistency should exist across:

* canonical metadata
* sitemap
* internal links
* breadcrumbs
* schema
* navigation

---

# 81. Internal-Link Consistency

Internal links should point directly to canonical URLs.

Avoid linking internally to a URL that immediately redirects.

Preferred:

```text
href="/services/hydro-jetting/"
```

Avoid intentionally linking to:

```text
href="/services/hydro-jetting"
```

when trailing slash is canonical.

---

# 82. Breadcrumb URL Consistency

Breadcrumb links should use the same approved canonical paths.

Example:

```text
Home
/
San Diego
/san-diego-ca/

Carlsbad
/san-diego-ca/carlsbad/

Sewer Camera Inspection
/san-diego-ca/carlsbad/sewer-camera-inspection/
```

---

# 83. Redirect Strategy

Redirects are migration infrastructure.

They should primarily address:

* legacy URLs
* changed slugs
* merged pages
* retired pages
* domain consolidation
* known aliases with existing traffic/backlinks

Redirect planning will be fully documented in:

`20-migration-redirect-plan.md`

---

# 84. Permanent Redirect Standard

When an established URL permanently moves to a replacement page, use a permanent redirect where appropriate.

The goal is to direct users and crawlers from the old URL to the new canonical destination.

---

# 85. Avoid Redirect Chains

Avoid:

```text
Old URL
→
Intermediate URL
→
New URL
```

Preferred:

```text
Old URL
→
Final Canonical URL
```

When routes change again in the future, existing redirect sources should be updated to point directly to the final destination where practical.

---

# 86. Avoid Redirect Loops

Validation must detect patterns such as:

```text
/a/
→
/b/

/b/
→
/a/
```

A redirect loop should fail QA.

---

# 87. Redirect Source Must Not Be Canonical Destination

No active canonical page should simultaneously exist as the source of a redirect.

Example invalid state:

```text
/services/hydro-jetting/
```

both:

* renders an indexable page
* redirects elsewhere

The route registry and redirect registry must be reconciled.

---

# 88. Cloudflare Pages Redirect Layer

For the static Cloudflare Pages deployment, redirects can be implemented through Cloudflare-supported redirect mechanisms rather than relying on a running Next.js server.

Cloudflare Pages supports `_redirects`, and currently documents limits of 2,000 static rules plus 100 dynamic rules per `_redirects` file; larger redirect sets can use Cloudflare Bulk Redirects.

This matters because migration from multiple legacy sites may eventually create a large redirect inventory.

---

# 89. Do Not Assume `next.config` Redirects Are the Deployment Layer

Next.js supports redirect definitions in `next.config`, but this project deploys as a static export.

For production migration behavior, the project should use the redirect mechanism verified to operate at the Cloudflare hosting layer.

The final implementation belongs in:

`20-migration-redirect-plan.md`

---

# 90. Redirect Registry

Redirects should be managed as structured data.

Conceptual example:

```ts
interface RedirectRecord {
  source: string
  destination: string
  permanent: boolean
  reason:
    | 'legacy-site'
    | 'slug-change'
    | 'page-merge'
    | 'domain-consolidation'
    | 'retired-page'
}
```

Potential location:

```text
data/redirects/redirects.ts
```

or an approved structured file.

---

# 91. Legacy Domain Consolidation

The project involves consolidating the existing web presence into the rebuilt multi-market architecture.

Domain-level and old-page redirects should preserve:

* relevant backlinks
* branded traffic
* existing bookmarks
* established indexed URLs
* high-value search landing pages

The complete mapping should not be created until the legacy URL inventory is completed.

---

# 92. Cloudflare Preview Domain

The Cloudflare `*.pages.dev` hostname must not become an alternate canonical version of the public site.

Cloudflare provides a mechanism for redirecting the Pages development hostname to the production custom domain when appropriate.

Production canonical metadata must use the approved production origin.

---

# 93. `www` vs Apex Governance

The project must eventually select one canonical host form:

```text
example.com
```

or:

```text
www.example.com
```

The noncanonical host should permanently redirect to the canonical host.

The exact production hostname will be documented in:

`20-migration-redirect-plan.md`

Do not allow both versions to operate independently.

---

# 94. HTTPS Requirement

Canonical URLs should use:

```text
https://
```

not:

```text
http://
```

Internal production configuration should consistently resolve to the secure origin.

---

# 95. Host Normalization

The final redirect system should normalize combinations such as:

```text
http + noncanonical host
http + canonical host
https + noncanonical host
```

into:

```text
https + canonical host
```

without unnecessary redirect chains where possible.

---

# 96. Indexation and Routing Are Separate

A page may technically have a route without being indexable.

Example:

```text
launch_pending_validation
```

may be built for preview/QA.

Its presence in the build does not automatically authorize:

* sitemap inclusion
* public internal-link promotion
* search-engine submission

Indexation status belongs to the page record.

---

# 97. Noindex Is Not a Permanent Architecture Substitute

Do not create thousands of speculative routes and simply mark them `noindex`.

Preferred:

```text
Unapproved page
→
No production route
```

rather than:

```text
Unapproved page
→
Route exists
→
noindex
```

This keeps the production architecture controlled.

---

# 98. Matrix Routing Rule

The following is prohibited:

```ts
services.flatMap((service) =>
  locations.map((location) => ({
    pathname:
      `/${location.market}/${location.slug}/${service.slug}/`
  }))
)
```

The approved page registry must be the source.

---

# 99. Correct Route Generation Model

```text
Service Registry
+
Location Registry
+
Opportunity Matrix
↓
Master Page Build List
↓
Approved Page Registry
↓
Canonical Pathname
↓
generateStaticParams()
↓
Static Route
```

---

# 100. No Search-Term Route Generation

Keyword research may discover phrases such as:

```text
sewer scope Carlsbad
sewer camera service Carlsbad
sewer video inspection Carlsbad
```

These should normally map to:

```text
/san-diego-ca/carlsbad/sewer-camera-inspection/
```

Do not create one route per query variation.

---

# 101. No Problem-Term Service Routes by Default

Problems such as:

```text
tree roots
sewer belly
offset pipe
cracked sewer pipe
slow sewer
```

do not automatically become service routes.

They should generally be handled through:

* resource pages
* FAQs
* service sections
* problem-topic clusters

unless later approved as distinct pages.

---

# 102. Route Family and Primary Intent

Each route family has a defined intent.

| Route Family                        | Primary Intent         |
| ----------------------------------- | ---------------------- |
| `/services/{service}/`              | General service        |
| `/{market}/`                        | Market-wide local      |
| `/{market}/{location}/`             | Location-wide local    |
| `/{location}/{service}/`            | Local service          |
| `/for/{audience}/`                  | Audience               |
| `/{location}/for/{audience}/`       | Local audience         |
| `/commercial/{service}/`            | Commercial service     |
| `/{location}/commercial/{service}/` | Local commercial       |
| `/compare/{comparison}/`            | Decision/comparison    |
| `/alternatives/{alternative}/`      | Alternative evaluation |
| `/resources/{resource}/`            | Informational          |

This helps prevent search-intent overlap.

---

# 103. Canonical Consolidation Rule

If two proposed routes target essentially the same intent, they should be consolidated unless clear evidence supports separate pages.

Example:

```text
/services/sewer-camera-inspection/
```

and:

```text
/services/sewer-scope/
```

should not coexist merely because both terms receive searches.

---

# 104. Route Change Threshold

Published URLs should only change when there is a meaningful reason such as:

* incorrect geography
* severe architecture problem
* business consolidation
* duplicate-intent resolution
* legal/business-name change
* migration necessity

Do not change URLs because:

* a new keyword has slightly higher volume
* wording preferences change
* a new developer prefers another structure
* design navigation changes

---

# 105. URL Stability Principle

Once indexed, URLs become durable search and business infrastructure.

Treat them accordingly.

The cost of changing a route includes potential impacts on:

* backlinks
* bookmarks
* rankings
* analytics history
* citations
* internal links
* external references
* AI retrieval history

---

# 106. Route Change Workflow

Before changing an established route:

```text
Current URL
↓
Traffic / backlink / conversion review
↓
Determine replacement
↓
Approve new URL
↓
Create permanent redirect
↓
Update internal links
↓
Update canonical
↓
Update sitemap
↓
Update schema
↓
Deploy
↓
Monitor
```

---

# 107. Slug Change Log

Material slug changes should be recorded in:

`22-decisions-change-log.md`

Include:

* old pathname
* new pathname
* reason
* date
* redirect requirement

---

# 108. Canonical Registry Validation

At build time, validate:

```text
services → unique canonical slug
markets → unique canonical slug
locations → unique canonical pathname
audiences → unique canonical slug
commercial services → unique canonical pathname
pages → unique canonical pathname
redirects → unique source
```

---

# 109. Case-Sensitive Data Governance

Canonical slugs in structured data must already be normalized.

Do not rely on runtime lowercasing to repair malformed registry entries.

Invalid data should fail validation.

---

# 110. Empty-Segment Validation

Route builders must reject malformed pathnames such as:

```text
/san-diego-ca//sewer-camera-inspection/
```

Every required route segment must resolve to an approved nonempty value.

The market hub is the exception because it intentionally contains no location segment.

---

# 111. Duplicate Slash Validation

Reject:

```text
//services//hydro-jetting//
```

Canonical form:

```text
/services/hydro-jetting/
```

---

# 112. Query and Fragment Exclusion

Stored canonical pathnames must never contain:

```text
?
#
```

These belong to request behavior or on-page navigation, not canonical route identity.

---

# 113. Navigation URLs

Navigation configuration should reference canonical page IDs or canonical pathnames.

Avoid manually recreating URLs inside header and footer components.

Preferred:

```ts
{
  label: 'Hydro Jetting',
  pageId: 'svc-hydro-jetting',
}
```

then resolve the approved pathname centrally.

---

# 114. CTA URLs

Service CTAs that lead to internal landing pages should also use canonical page records.

Form-anchor links may use fragments where appropriate:

```text
/services/sewer-camera-inspection/#request-service
```

but canonical metadata remains:

```text
/services/sewer-camera-inspection/
```

---

# 115. Location Card URLs

Location cards should use the canonical location pathname from the registry.

Do not recreate:

```ts
`/${market}/${slug}/`
```

inside every card component.

Central resolution prevents inconsistencies for nested geographic entities.

---

# 116. Related-Service URLs

Related-service modules should resolve service IDs to approved canonical pages.

Example:

```text
svc-hydro-jetting
→
/services/hydro-jetting/
```

Do not derive paths from visible display text.

---

# 117. Related Local Service URLs

When a local page links to a service + location page, verify that the destination exists in the Master Page Build List.

Do not create links to mathematically possible but unpublished matrix routes.

---

# 118. Breadcrumb Parent Resolution

Breadcrumb parentage should use page/entity relationships rather than parsing strings where possible.

For:

```text
/san-diego-ca/carlsbad/sewer-camera-inspection/
```

the logical hierarchy is:

```text
Home
→
San Diego Market
→
Carlsbad
→
Sewer Camera Inspection in Carlsbad
```

The breadcrumb system should know these entities from the page record.

---

# 119. Service Canonical vs Local Service Canonical

A local service page is a separate canonical page.

Example:

```text
/services/sewer-camera-inspection/
```

canonical:

```text
/services/sewer-camera-inspection/
```

while:

```text
/san-diego-ca/carlsbad/sewer-camera-inspection/
```

canonical:

```text
/san-diego-ca/carlsbad/sewer-camera-inspection/
```

Do not canonicalize every local page back to the global service page.

If a local page is not distinct enough to justify its own canonical, it should not be published.

---

# 120. Market Canonical vs City Canonical

Likewise:

```text
/san-diego-ca/
```

and:

```text
/san-diego-ca/san-diego/
```

should each self-canonicalize while both remain approved separate pages.

If future performance proves the intents are indistinguishable, consolidation should be handled through a deliberate migration decision.

---

# 121. Pagination

The current launch architecture does not require indexable pagination.

If resource archives eventually require pagination, define a dedicated strategy before implementation.

Do not improvise URLs such as:

```text
/resources/page/2/
```

without considering:

* canonical behavior
* indexation
* internal linking
* crawl value

---

# 122. Search Results Pages

If the site eventually includes internal search, search result pages should not become part of the indexable SEO architecture by default.

Avoid public indexation of query-driven routes such as:

```text
/search/?q=hydro+jetting
```

unless a future architecture specifically approves them.

---

# 123. Tag and Category Archives

Do not automatically create public indexable:

```text
/tags/
/categories/
```

archives simply because a content system supports them.

Topic hubs should be intentionally designed pages.

---

# 124. Future Market Expansion

A new market should follow:

```text
/{city-state}/
```

with approved locations beneath it.

Conceptually:

```text
/new-market-state/
    /location/
        /service/
        /for/audience/
        /commercial/service/
```

The exact future market slug must be entered into the market registry before route generation.

---

# 125. Future Service Expansion

A new approved company-wide service receives:

```text
/services/{service}/
```

Local versions may subsequently receive:

```text
/{canonical-location-path}/{service}/
```

only where individually authorized.

---

# 126. Future Audience Expansion

New company-wide audiences receive:

```text
/for/{audience}/
```

only after approval.

Local variants remain:

```text
/{canonical-location-path}/for/{audience}/
```

---

# 127. Future Commercial Expansion

New company-wide commercial services receive:

```text
/commercial/{service}/
```

Local commercial variants remain:

```text
/{canonical-location-path}/commercial/{service}/
```

---

# 128. Route Registry Example

A production registry may conceptually contain:

```ts
export const pages = [
  {
    id: 'svc-sewer-camera-inspection',
    pageType: 'service',
    pathname: '/services/sewer-camera-inspection/',
    indexable: true,
    status: 'launch',
  },

  {
    id: 'loc-sd-carlsbad',
    pageType: 'location',
    pathname: '/san-diego-ca/carlsbad/',
    marketId: 'san-diego-ca',
    indexable: true,
    status: 'launch',
  },

  {
    id: 'sl-carlsbad-camera',
    pageType: 'service-location',
    pathname:
      '/san-diego-ca/carlsbad/sewer-camera-inspection/',
    marketId: 'san-diego-ca',
    locationId: 'loc-sd-carlsbad',
    serviceId: 'svc-sewer-camera-inspection',
    indexable: true,
    status: 'launch',
  },
]
```

---

# 129. Route Segments Derived From Pathname

For static generation, the application may derive route segments from the approved pathname.

Example:

```ts
pathname:
  '/san-diego-ca/carlsbad/sewer-camera-inspection/'
```

becomes:

```ts
{
  market: 'san-diego-ca',
  segments: [
    'carlsbad',
    'sewer-camera-inspection',
  ],
}
```

The approved pathname remains the authority.

---

# 130. No Runtime Route Invention

The application should never receive:

```text
/san-diego-ca/random-place/random-service/
```

and then attempt to:

1. detect keywords,
2. find matching registry entities,
3. assemble generic content,
4. serve an indexable page.

Unknown combinations return 404.

---

# 131. Route Validation Script

A dedicated validation script is recommended.

Example:

```text
scripts/validate-routes.ts
```

It should verify:

* unique paths
* correct trailing slashes
* reserved-segment conflicts
* valid service references
* valid location references
* valid market references
* valid parent relationships
* correct page-family namespace
* approved build status
* redirect conflicts

---

# 132. Production Build Gate

The build should fail if:

* two pages share a canonical pathname
* a page references an unknown service
* a local page references an unknown location
* an audience route uses an invalid audience
* a market-local route references the wrong market
* an unapproved page enters route generation
* a pathname violates canonical formatting
* a redirect conflicts with an active route

Failing the build is preferable to silently publishing broken routing architecture.

---

# 133. Sitemap Generation Rule

Only pages satisfying:

```text
status = launch
AND
indexable = true
```

should enter the production sitemap.

The sitemap should use the exact canonical pathname.

Pages with:

```text
launch_pending_validation
phase_2
phase_3
hold
research_only
retired
```

must not enter the sitemap unless their status changes.

---

# 134. Route Authorization Rule

The final route test is:

```text
Does the page exist in
04-master-page-build-list.md?
```

If no:

```text
No production route.
```

If yes:

```text
Does its status authorize building?
```

If no:

```text
No production route.
```

If yes:

```text
Use the canonical pathname defined by
05-url-routing-strategy.md
and the approved page record.
```

---

# 135. Key Canonical Patterns — Reference

## Company

```text
/
/about/
/contact/
/faq/
```

## Services

```text
/services/
/services/{service}/
```

## Markets

```text
/{market}/
```

## Locations

```text
/{market}/{location}/
```

## Nested St. Louis City Locations

```text
/st-louis-mo/st-louis-city/{neighborhood}/
```

## Service + Location

```text
/{canonical-location-path}/{service}/
```

## Market-Specific Service

```text
/{market}/{market-specific-service}/
```

## Audiences

```text
/for/
/for/{audience}/
```

## Audience + Location

```text
/{canonical-location-path}/for/{audience}/
```

## Commercial

```text
/commercial/
/commercial/{service}/
```

## Commercial + Location

```text
/{canonical-location-path}/commercial/{service}/
```

## Comparisons

```text
/compare/{comparison}/
```

## Alternatives

```text
/alternatives/{alternative}/
```

## Resources

```text
/resources/
/resources/{resource}/
```

---

# 136. Launch Route Examples

## Services

```text
/services/sewer-camera-inspection/
/services/sewer-cleaning/
/services/hydro-jetting/
/services/sewer-line-locating/
/services/pre-purchase-sewer-inspection/
```

## Markets

```text
/st-louis-mo/
/san-diego-ca/
/las-vegas-nv/
```

## Locations

```text
/st-louis-mo/chesterfield/
/san-diego-ca/carlsbad/
/las-vegas-nv/henderson/
```

## Local Services

```text
/st-louis-mo/chesterfield/sewer-camera-inspection/

/san-diego-ca/carlsbad/sewer-camera-inspection/

/san-diego-ca/escondido/sewer-cleaning/
```

## Audiences

```text
/for/home-buyers/
/for/real-estate-agents/
/for/property-managers/
```

## Commercial

```text
/commercial/sewer-camera-inspection/
/commercial/hydro-jetting/
/commercial/preventative-maintenance/
```

## Comparison

```text
/compare/independent-sewer-inspection-vs-repair-company/

/compare/hydro-jetting-vs-sewer-snaking/
```

## Resources

```text
/resources/st-louis-sewer-lateral-report/

/resources/what-is-in-a-sewer-camera-inspection-report/
```

---

# 137. Prohibited Route Examples

Do not create:

```text
/sewer-camera-inspection-carlsbad-ca/
```

```text
/san-diego-ca/sewer-camera-inspection-carlsbad/
```

```text
/services/sewer-scope/
```

```text
/services/sewer-repair/
```

```text
/services/sewer-replacement/
```

```text
/las-vegas-nv/henderson/sewer-repair/
```

```text
/location?id=carlsbad
```

```text
/san-diego-ca/carlsbad-ca-san-diego-county/
```

```text
/commercial/commercial-hydro-jetting/
```

unless a future approved decision explicitly changes the architecture.

---

# 138. Critical Routing Rules

### Rule 1

Every page receives one canonical pathname.

### Rule 2

Canonical URLs use lowercase kebab-case.

### Rule 3

Canonical URLs use trailing slashes.

### Rule 4

Market hubs use `/{market}/`.

### Rule 5

Locations live beneath their parent market.

### Rule 6

Service + location pages append the service slug to the location's canonical pathname.

### Rule 7

Do not use flat service-location keyword slugs.

### Rule 8

Company-wide services live under `/services/`.

### Rule 9

St. Louis-specific sewer lateral reporting remains under the St. Louis market.

### Rule 10

Company-wide audiences live under `/for/`.

### Rule 11

Local audiences use `{location}/for/{audience}/`.

### Rule 12

Commercial services live under `/commercial/`.

### Rule 13

Local commercial services use `{location}/commercial/{service}/`.

### Rule 14

Comparisons live under `/compare/`.

### Rule 15

Alternatives live under `/alternatives/`.

### Rule 16

Educational content lives under `/resources/`.

### Rule 17

Aliases and keyword variants do not automatically create routes.

### Rule 18

The canonical registry controls slugs; implementation must not silently re-slug approved entities.

### Rule 19

Unknown permutations return 404.

### Rule 20

The full matrix must never power automatic route creation.

### Rule 21

Only the Master Page Build List authorizes routes.

### Rule 22

Published URLs should remain stable.

### Rule 23

URL changes require redirect evaluation.

### Rule 24

Internal links, canonicals, breadcrumbs, schema, and sitemaps must use the same canonical paths.

---

# 139. Project-Specific Technical Decision

The routing architecture should favor:

```text
Explicit global App Router namespaces
+
Registry-resolved market catch-all route
+
Approved static parameters
```

Conceptually:

```text
app/
├── services/
├── for/
├── commercial/
├── compare/
├── alternatives/
├── resources/
└── [market]/
    ├── page.tsx
    └── [...segments]/
        └── page.tsx
```

The catch-all mechanism provides routing flexibility.

The Master Page Build List provides publishing control.

Those two concepts must never be confused.

---

# 140. Final Routing Principle

The URL architecture should expose The Sewer Pros as a coherent entity system rather than a collection of keyword-generated landing pages.

The governing model is:

```text
Company
↓
Service

Company
↓
Market
↓
Location
↓
Service

Company
↓
Audience

Company
↓
Commercial Service

Company
↓
Resources / Comparisons / Alternatives
```

The implementation model is:

```text
Canonical Entity
+
Approved Page
+
Approved Pathname
+
Static Generation
+
Route Validation
=
Production URL
```

The presence of:

* a keyword
* a location
* a service
* an audience
* a commercial segment
* a matrix relationship

never creates a URL by itself.

**The Master Page Build List authorizes the page.
The URL Routing Strategy gives that page its permanent address.**
