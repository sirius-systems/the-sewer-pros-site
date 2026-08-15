# The Sewer Pros — Schema & Entity Strategy

**Document:** `15-schema-entity-strategy.md`
**Project:** The Sewer Pros Website Rebuild
**Repository:** `the-sewer-pros-site`
**Status:** Project-Specific Structured Data and Entity Source of Truth
**Standards Baseline:** August 14, 2026

---

# 1. Purpose

This document defines the project-specific structured data and entity architecture for The Sewer Pros website.

It establishes:

* the primary business entity
* relationships between the brand, markets, services, locations, audiences, and content
* JSON-LD implementation principles
* `@id` standards
* Organization schema
* LocalBusiness schema rules
* Service schema
* Place and geographic entities
* WebSite and WebPage entities
* Article and resource schema
* Breadcrumb schema
* FAQ schema policy
* review and rating schema restrictions
* audience relationships
* commercial-service relationships
* multi-market entity architecture
* schema inheritance rules
* structured-data guardrails
* AI/LLM entity clarity requirements

This document does **not** duplicate Site OS Master procedures for:

* structured-data QA workflows
* automated schema testing
* release gates
* crawler validation
* prompt methodology
* implementation sequencing
* Search Console validation workflows

Site OS Master governs **how schema is implemented and validated**.

This document defines **what The Sewer Pros schema should represent**.

---

# 2. Current Standards Baseline

The schema architecture should use:

```text
Schema.org
+
JSON-LD
+
Google Search structured-data requirements
```

Google recommends structured data as a means of helping it understand page content, while eligibility for rich results depends on the specific supported feature and its requirements.

Schema.org currently defines `LocalBusiness` as a particular physical business or branch and provides `Service.areaServed`, `provider`, and related properties for connecting services to geographic coverage.

The implementation must therefore distinguish clearly between:

```text
BUSINESS ENTITY
```

and:

```text
SERVICE MARKET
```

A city served by The Sewer Pros is not automatically a physical business location.

---

# 3. Primary Entity Objective

Structured data should help machines understand a coherent entity graph:

```text
The Sewer Pros
        ↓
Organization
        ↓
Provides Services
        ↓
Serves Markets
        ↓
Serves Locations
        ↓
Serves Audiences
        ↓
Publishes Educational Content
```

The desired machine-readable relationship is:

```text
The Sewer Pros
    ├── Sewer Inspection
    ├── Sewer Camera Inspection
    ├── Sewer Diagnostics
    ├── Sewer Cleaning
    ├── Hydro Jetting
    ├── Sewer Line Locating
    ├── Drain Cleaning
    ├── Pre-Purchase Sewer Inspection
    └── Commercial Sewer / Drain Services
            ↓
        St. Louis
        San Diego
        Las Vegas
```

The schema layer should reinforce the visible site architecture rather than create a competing taxonomy.

---

# 4. Core Entity Principle

The website should maintain **one primary organization entity** for The Sewer Pros.

Canonical entity concept:

```text
The Sewer Pros
@type: Organization
@id: <CANONICAL_ORIGIN>/#organization
```

This entity should act as the common provider, publisher, and business reference throughout the site.

The same organization should not be recreated as unrelated entities on individual pages.

---

# 5. Canonical `@id` Strategy

Stable `@id` values are mandatory for important entities.

Recommended base pattern:

```text
<CANONICAL_ORIGIN>/#organization
<CANONICAL_ORIGIN>/#website
```

Market entities:

```text
<CANONICAL_ORIGIN>/st-louis-mo/#place
<CANONICAL_ORIGIN>/san-diego-ca/#place
<CANONICAL_ORIGIN>/las-vegas-nv/#place
```

Verified local business entities, if applicable:

```text
<CANONICAL_ORIGIN>/st-louis-mo/#localbusiness
```

Service entities:

```text
<CANONICAL_ORIGIN>/services/sewer-camera-inspection/#service
<CANONICAL_ORIGIN>/services/sewer-cleaning/#service
<CANONICAL_ORIGIN>/services/hydro-jetting/#service
```

Page entities:

```text
<CANONICAL_URL>#webpage
```

Breadcrumb entity:

```text
<CANONICAL_URL>#breadcrumb
```

Article entity:

```text
<CANONICAL_URL>#article
```

IDs should remain stable unless the underlying canonical entity changes.

---

# 6. Canonical Origin Placeholder

Until the production canonical hostname is formally approved, examples in repository documentation should use:

```text
<CANONICAL_ORIGIN>
```

Do not hard-code:

* development URLs
* Cloudflare preview URLs
* temporary domains
* localhost
* staging URLs

into production structured data.

---

# 7. Entity Graph Philosophy

Structured data should be constructed as a connected graph rather than disconnected schema snippets.

Preferred model:

```text
WebSite
   ↓ publisher
Organization
   ↓ makesOffer / hasOfferCatalog
Services
   ↓ areaServed
Places
   ↓
Markets / Locations
```

Individual pages then connect to the same entities.

Example:

```text
WebPage
   ├── isPartOf → WebSite
   ├── about → Service
   ├── mainEntity → Service
   └── breadcrumb → BreadcrumbList
```

This provides entity consistency across the website.

---

# 8. Primary Organization Entity

The root organization should normally use:

```json
{
  "@type": "Organization",
  "@id": "<CANONICAL_ORIGIN>/#organization",
  "name": "The Sewer Pros",
  "url": "<CANONICAL_ORIGIN>/"
}
```

Additional properties may be added only when verified.

Potential approved properties include:

* `legalName`
* `alternateName`
* `description`
* `logo`
* `image`
* `telephone`
* `email`
* `foundingDate`
* `address`
* `contactPoint`
* `sameAs`
* `areaServed`
* `hasOfferCatalog`
* `knowsAbout`

Google specifically recommends Organization markup on the homepage or a single page describing the organization and states that it can help Google understand and disambiguate administrative details about the organization.

---

# 9. Organization vs. LocalBusiness

These concepts must not be treated as interchangeable.

## Organization

Represents:

> The Sewer Pros as the overall company/brand.

Recommended primary ID:

```text
<CANONICAL_ORIGIN>/#organization
```

## LocalBusiness

Represents:

> A specific physical operating business or branch.

Schema.org defines `LocalBusiness` as a particular physical business or branch.

Therefore:

```text
The Sewer Pros serving San Diego
```

does **not automatically mean**:

```text
San Diego LocalBusiness
```

---

# 10. Multi-Market LocalBusiness Rule

Do not create three LocalBusiness entities merely because the company operates in:

* St. Louis
* San Diego
* Las Vegas

A LocalBusiness entity should be created only when the underlying location is verified as a legitimate operating business location that the project has approved for structured-data representation.

Required verification should include applicable information such as:

* genuine operating location
* approved business address
* approved market phone
* approved hours
* actual relationship to The Sewer Pros
* public-facing business identity
* GBP relationship where applicable

---

# 11. Current Market Entity Status

Current project baseline:

| Market        | GBP          | Schema Treatment                               |
| ------------- | ------------ | ---------------------------------------------- |
| St. Louis, MO | Existing GBP | Evaluate for verified LocalBusiness entity     |
| San Diego, CA | No GBP       | Market/Place + Service `areaServed` by default |
| Las Vegas, NV | No GBP       | Market/Place + Service `areaServed` by default |

The existence of the St. Louis GBP makes it the strongest candidate for a market-specific LocalBusiness entity.

However:

> The GBP itself does not authorize inventing or exposing an address that has not been approved for website publication.

---

# 12. No Fake LocalBusiness Entities

The following is prohibited:

```text
The Sewer Pros — San Diego
@type LocalBusiness
```

when no verified San Diego business location exists.

Likewise prohibited:

```text
The Sewer Pros — Las Vegas
@type LocalBusiness
```

solely because a Las Vegas landing page exists.

Local SEO relevance must not be manufactured through schema.

---

# 13. Service-Area Market Representation

Markets without a verified local business entity should normally be represented through:

```text
Organization
+
Service
+
areaServed
+
Place
+
WebPage
```

Schema.org explicitly supports `areaServed` on `Service`.

Example conceptual graph:

```text
The Sewer Pros
    ↓ provider
Sewer Camera Inspection
    ↓ areaServed
San Diego, California
```

This communicates service coverage without pretending that San Diego is a physical branch.

---

# 14. Market Place Entities

Each primary market should have a stable `Place` entity.

Example:

```json
{
  "@type": "City",
  "@id": "<CANONICAL_ORIGIN>/san-diego-ca/#place",
  "name": "San Diego",
  "containedInPlace": {
    "@type": "State",
    "name": "California"
  }
}
```

Equivalent entities should exist for:

* St. Louis
* San Diego
* Las Vegas

where appropriate.

---

# 15. Geographic Type Selection

Use the most accurate geographic type available.

Possible types include:

```text
City
AdministrativeArea
Place
State
```

Do not label:

* neighborhoods as cities
* counties as cities
* metro areas as municipalities
* unincorporated areas as incorporated cities

Geographic classification should follow:

`07-master-location-registry.md`

---

# 16. 579 Geographic Records

The project contains:

* 579 normalized geographic records

This does **not** mean 579 `Place` entities must be emitted sitewide.

Structured data should represent locations that are relevant to the page and approved architecture.

The geographic registry is a data source.

It is not a mandate to create a giant sitewide geographic entity graph.

---

# 17. Primary Service Entity Model

Each canonical approved service should be represented as a `Service`.

Example:

```json
{
  "@type": "Service",
  "@id": "<CANONICAL_ORIGIN>/services/sewer-camera-inspection/#service",
  "name": "Sewer Camera Inspection",
  "serviceType": "Sewer Camera Inspection",
  "provider": {
    "@id": "<CANONICAL_ORIGIN>/#organization"
  }
}
```

The canonical service entity should correspond to:

`06-master-service-registry.md`

---

# 18. Canonical Service IDs

Each canonical service should have exactly one preferred service entity.

Conceptual examples:

```text
/services/sewer-inspection/#service

/services/sewer-camera-inspection/#service

/services/sewer-cleaning/#service

/services/hydro-jetting/#service

/services/sewer-line-locating/#service

/services/drain-cleaning/#service

/services/pre-purchase-sewer-inspection/#service
```

Exact paths are controlled by:

`05-url-routing-strategy.md`

---

# 19. Eighteen Canonical Service Records

The project contains:

* 18 canonical service records

Schema implementation should reference the canonical service registry.

Do not independently invent service names inside schema.

For example, if the registry defines:

```text
Sewer Camera Inspection
```

do not arbitrarily create separate service entities for:

```text
Sewer Scope
Sewer Video Inspection
Pipe Camera Inspection
Sewer Video Camera Inspection
```

unless they represent approved distinct services.

Synonyms belong in content/entity attributes where appropriate, not automatically as separate entities.

---

# 20. Service Entity Properties

Useful `Service` properties may include:

```text
@id
name
alternateName
description
serviceType
provider
areaServed
audience
offers
availableChannel
category
termsOfService
```

Only use properties supported by actual visible page content and approved business facts.

---

# 21. `provider` Relationship

The default provider of canonical services should be:

```text
<CANONICAL_ORIGIN>/#organization
```

Example:

```json
{
  "provider": {
    "@id": "<CANONICAL_ORIGIN>/#organization"
  }
}
```

If a verified local branch is the appropriate provider for a market-specific page, the provider relationship may instead reference that verified local entity.

---

# 22. `areaServed` Relationship

Services should connect to verified service areas through `areaServed`.

Example:

```json
{
  "areaServed": [
    {
      "@id": "<CANONICAL_ORIGIN>/st-louis-mo/#place"
    },
    {
      "@id": "<CANONICAL_ORIGIN>/san-diego-ca/#place"
    },
    {
      "@id": "<CANONICAL_ORIGIN>/las-vegas-nv/#place"
    }
  ]
}
```

Only include markets where the specific service is actually offered.

---

# 23. No Automatic 10,422-Relationship Schema

The project currently contains:

* 10,422 service × location relationships

These represent SEO opportunities.

They do not need to be expressed as 10,422 structured-data relationships.

The schema graph should prioritize:

* canonical services
* primary markets
* approved location pages
* approved service + location pages
* meaningful page-level relationships

Do not turn the entire research matrix into a massive JSON-LD payload.

---

# 24. Service + Location Page Entity Model

Example page:

```text
/st-louis-mo/sewer-camera-inspection/
```

The page should generally describe:

```text
WebPage
    ↓ mainEntity
Service
    ↓ provider
The Sewer Pros
    ↓
areaServed
St. Louis
```

A page-specific service node may be used when it represents the local availability of the canonical service.

Example:

```json
{
  "@type": "Service",
  "@id": "<CANONICAL_ORIGIN>/st-louis-mo/sewer-camera-inspection/#service",
  "name": "Sewer Camera Inspection in St. Louis, MO",
  "serviceType": "Sewer Camera Inspection",
  "provider": {
    "@id": "<CANONICAL_ORIGIN>/#organization"
  },
  "areaServed": {
    "@id": "<CANONICAL_ORIGIN>/st-louis-mo/#place"
  }
}
```

---

# 25. Canonical Service Relationship

A localized service entity should not become a completely unrelated service concept.

Where useful, use relationships such as:

```text
sameAs
isRelatedTo
subjectOf
```

carefully and semantically correctly.

More importantly, maintain consistent:

```text
serviceType
provider
name
areaServed
```

so the relationship is obvious.

Do not misuse `sameAs` to claim that two different URLs or different service offerings are literally the same entity unless that statement is accurate.

---

# 26. `sameAs` Strategy

`sameAs` should primarily be used for authoritative external profiles representing the same entity.

Potential examples include verified:

* Google Business Profile references where usable
* Facebook
* Instagram
* LinkedIn
* YouTube
* BBB profile
* relevant professional profiles

Google specifically recognizes `sameAs` as a way of identifying pages elsewhere on the web containing additional information about an organization.

Do not use:

* competitor pages
* generic directories with questionable data
* search result URLs
* location pages merely mentioning the company

as `sameAs`.

---

# 27. Social Profile Rule

Only link active or legitimate official business profiles.

Inactive profiles can still represent the same organization, but they should first be verified as:

* official
* controlled by The Sewer Pros
* correctly branded
* factually accurate

Do not add a social URL solely because a profile with a similar company name exists.

---

# 28. WebSite Entity

The website should have a single primary `WebSite` entity.

Recommended ID:

```text
<CANONICAL_ORIGIN>/#website
```

Example:

```json
{
  "@type": "WebSite",
  "@id": "<CANONICAL_ORIGIN>/#website",
  "url": "<CANONICAL_ORIGIN>/",
  "name": "The Sewer Pros",
  "publisher": {
    "@id": "<CANONICAL_ORIGIN>/#organization"
  }
}
```

---

# 29. WebPage Entity

Every indexable page may have a `WebPage` or an appropriate subtype.

Common properties:

```text
@id
url
name
description
isPartOf
about
mainEntity
breadcrumb
datePublished
dateModified
primaryImageOfPage
```

Example:

```json
{
  "@type": "WebPage",
  "@id": "<CANONICAL_URL>#webpage",
  "url": "<CANONICAL_URL>",
  "name": "<PAGE TITLE>",
  "isPartOf": {
    "@id": "<CANONICAL_ORIGIN>/#website"
  }
}
```

---

# 30. WebPage Subtypes

Use appropriate WebPage subtypes where meaningful.

Potential types include:

```text
AboutPage
ContactPage
CollectionPage
FAQPage
ProfilePage
ItemPage
```

Do not select a subtype simply because it sounds more SEO-friendly.

The type must reflect actual visible page purpose.

---

# 31. Homepage Entity Architecture

The homepage should normally contain the strongest organization-level graph.

Conceptually:

```text
WebPage
    ↓
WebSite
    ↓ publisher
Organization
    ↓ hasOfferCatalog
Service Catalog
```

Potential homepage entities:

```text
Organization
WebSite
WebPage
OfferCatalog
Service
```

Do not overload the homepage with every location and resource entity in the database.

---

# 32. About Page

The About page may use:

```text
AboutPage
```

with:

```text
about → Organization
```

Example relationship:

```json
{
  "@type": "AboutPage",
  "@id": "<CANONICAL_ORIGIN>/about/#webpage",
  "about": {
    "@id": "<CANONICAL_ORIGIN>/#organization"
  }
}
```

---

# 33. Contact Page

The Contact page may use:

```text
ContactPage
```

with relationships to:

```text
Organization
ContactPoint
```

Do not place unapproved phone numbers, emails, or physical addresses into schema.

---

# 34. Services Hub

The services hub may use:

```text
CollectionPage
```

and optionally:

```text
ItemList
```

to describe the visible list of approved service pages.

Example structure:

```text
CollectionPage
    ↓ mainEntity
ItemList
    ├── Sewer Inspection
    ├── Sewer Camera Inspection
    ├── Sewer Cleaning
    └── Hydro Jetting
```

The `ItemList` must reflect the actual visible services shown on the page.

---

# 35. Offer Catalog

The organization may use:

```text
hasOfferCatalog
```

with an:

```text
OfferCatalog
```

for major approved services.

Schema.org explicitly supports `hasOfferCatalog` for organizations and services.

Conceptual example:

```json
{
  "@type": "OfferCatalog",
  "@id": "<CANONICAL_ORIGIN>/#service-catalog",
  "name": "Sewer and Drain Services"
}
```

Use the catalog to organize genuine services, not keyword variations.

---

# 36. Offer Strategy

`Offer` may be used where a genuine service offer is represented.

Schema.org defines `Offer` as an offer to provide an item or service.

However, do not automatically add:

```text
price
priceCurrency
availability
```

unless that information is genuinely public and accurate.

Do not create fictitious pricing to make schema appear more complete.

---

# 37. No Product Schema for Services

Standard sewer services should not be marked up as:

```text
Product
```

merely to pursue product rich results.

Use:

```text
Service
```

for service offerings.

`Product` should only be introduced if the site later sells actual products that qualify.

---

# 38. Market Hub Schema

A market hub such as:

```text
/st-louis-mo/
```

should generally use:

```text
WebPage
or
CollectionPage
```

connected to:

```text
Place
Organization
Services
BreadcrumbList
```

Conceptually:

```text
St. Louis Market Page
    ↓ about
St. Louis
    ↓
The Sewer Pros Services Available in St. Louis
```

---

# 39. Location Page Schema

Approved location pages should describe the actual geographic entity.

Example:

```text
WebPage
    ↓ about
City / Place
    ↓
Services available from The Sewer Pros
```

Do not represent each location page as an independent LocalBusiness.

This rule is critical.

---

# 40. Neighborhood Pages

A neighborhood page should normally use:

```text
Place
```

or another accurate geographic entity.

Do not use:

```text
City
```

unless it is actually a city.

Do not create fictitious:

```text
The Sewer Pros — [Neighborhood]
```

LocalBusiness entities.

---

# 41. Audience Entities

Schema.org `Audience` may be used where it provides genuine semantic value.

Potential approved audiences include:

* homeowners
* home buyers
* home sellers
* real estate agents
* property managers
* landlords
* commercial property owners
* facility managers

Example:

```json
{
  "@type": "Audience",
  "@id": "<CANONICAL_ORIGIN>/audiences/home-buyers/#audience",
  "audienceType": "Home Buyers"
}
```

---

# 42. Service-to-Audience Relationships

Relevant services can use:

```text
audience
```

to connect an offering to an intended group.

Example conceptual graph:

```text
Pre-Purchase Sewer Inspection
    ↓ audience
Home Buyers
```

This relationship should only be created where the audience is genuinely appropriate.

---

# 43. Audience Page Schema

Example page:

```text
/home-buyers/
```

may use:

```text
WebPage
    ↓ mainEntity / about
Audience
    ↓
Relevant Services
```

Schema should reinforce the page purpose without pretending the audience itself is a commercial service.

---

# 44. Audience + Location Schema

Example:

```text
/st-louis-mo/home-buyers/
```

may connect:

```text
WebPage
    ↓
Audience: Home Buyers
    ↓
Place: St. Louis
    ↓
Relevant Service: Pre-Purchase Sewer Inspection
```

The page should not generate a new LocalBusiness entity.

---

# 45. Commercial Entity Architecture

Commercial pages should continue using `Service` unless another clearly more accurate schema type is available.

Examples:

```text
Commercial Sewer Inspection
Commercial Sewer Cleaning
Commercial Hydro Jetting
Commercial Drain Cleaning
```

Potential relationships:

```text
Service
    ↓ audience
Commercial Property Owners

Service
    ↓ audience
Property Managers

Service
    ↓ areaServed
Las Vegas
```

---

# 46. Industry Audience Entities

If approved commercial pages target industries such as:

* restaurants
* hospitality
* property management
* multifamily
* retail

use structured data only when the relationship appears visibly on the page and reflects actual business capability.

Do not create artificial industry expertise in schema that is absent from the content.

---

# 47. Resource and Article Schema

Educational resources should generally use:

```text
Article
```

or:

```text
BlogPosting
```

as appropriate.

Google supports Article structured data for article and blog content and uses properties such as author, dates, headline, and images to better understand those pages.

Potential properties:

```text
headline
description
image
datePublished
dateModified
author
publisher
mainEntityOfPage
about
mentions
```

---

# 48. Article Publisher

The default publisher should reference:

```text
<CANONICAL_ORIGIN>/#organization
```

Example:

```json
{
  "publisher": {
    "@id": "<CANONICAL_ORIGIN>/#organization"
  }
}
```

Do not reconstruct the organization from scratch within every article schema object.

---

# 49. Article Author

Do not invent a named human author.

If an article has a verified named author:

```text
Person
```

may be used.

If organizational authorship is the actual approved editorial model:

```text
Organization
```

may be used where appropriate.

The visible page and schema must agree.

---

# 50. `about` and `mentions`

Resource content may use:

```text
about
```

for the primary subject and:

```text
mentions
```

for important secondary entities.

Example:

```text
Article:
"Hydro Jetting vs. Drain Snaking"

about:
Hydro Jetting

mentions:
Drain Cleaning
Sewer Cleaning
Sewer Camera Inspection
```

Do not create dozens of keyword-like `mentions` values for SEO manipulation.

---

# 51. Comparison Page Schema

Comparison pages will generally use:

```text
WebPage
```

or:

```text
Article
```

depending on content format.

Examples:

```text
Hydro Jetting vs. Drain Snaking
Independent Sewer Inspection vs. Repair-Company Inspection
Sewer Cleaning vs. Sewer Repair
```

The compared concepts may be connected using:

```text
about
mentions
```

where appropriate.

There is no need to invent a custom "Comparison" schema type.

---

# 52. Alternative Page Schema

Alternative pages should normally use:

```text
WebPage
```

or:

```text
Article
```

Examples:

```text
Alternatives to Sewer Replacement
What to Do Before Replacing a Sewer Line
```

Schema should describe the page honestly.

Do not mark these pages as services unless the page actually offers a service.

---

# 53. Problem/Symptom Pages

Pages about:

* sewer backups
* clogged sewer lines
* root intrusion
* slow drains
* sewer odors

should generally be represented as:

```text
WebPage
or
Article
```

with relevant:

```text
about
mentions
```

relationships.

Do not create fake `Service` objects for symptoms.

---

# 54. Breadcrumb Schema

All appropriate hierarchical pages should use:

```text
BreadcrumbList
```

Google uses breadcrumb markup to understand a page's position in the site hierarchy and supports breadcrumb search appearances.

Example:

```text
Home
>
St. Louis
>
Sewer Camera Inspection
```

Structured data should match the breadcrumb experience presented to users.

---

# 55. Breadcrumb `@id`

Recommended:

```text
<CANONICAL_URL>#breadcrumb
```

Example:

```json
{
  "@type": "BreadcrumbList",
  "@id": "<CANONICAL_URL>#breadcrumb"
}
```

The page's `breadcrumb` property can reference this entity.

---

# 56. FAQ Content vs. FAQ Schema

The site should continue using FAQ content extensively where useful.

However:

> FAQ content strategy and FAQ rich-result strategy are not the same thing.

Google has limited FAQ rich results primarily to well-known authoritative government and health sites, so The Sewer Pros should **not** build its FAQ strategy around obtaining Google FAQ rich results.

FAQ content remains valuable for:

* users
* AEO
* AI retrieval
* topical completeness
* internal search
* answer extraction

---

# 57. FAQPage Schema Policy

`FAQPage` markup may be used selectively when:

* the page genuinely contains multiple visible questions and answers
* the questions and answers represented in schema match visible content
* implementation provides semantic value

However:

```text
FAQPage schema ≠ guaranteed FAQ rich result
```

The project should not measure success based on obtaining FAQ rich-result expansion in Google.

---

# 58. Do Not Schema Every FAQ Automatically

Do not automatically generate `FAQPage` schema merely because a page contains an FAQ component.

Schema decisions should account for:

* page purpose
* content quality
* maintenance cost
* search-engine support
* duplication

A reusable FAQ component does not require universal schema output.

---

# 59. QAPage Restriction

Do not use:

```text
QAPage
```

for normal The Sewer Pros FAQ sections.

Google's Q&A guidance distinguishes `QAPage` from ordinary FAQs and reserves it for pages centered on a single question where users can submit answers or otherwise satisfy the Q&A format requirements.

The Sewer Pros content model currently does not require this.

---

# 60. Review Schema Strategy

Reviews may appear visibly throughout the website when verified.

Potential uses include:

* homepage testimonials
* market-specific reviews
* service reviews
* case studies

However, self-serving review markup must not be implemented in an attempt to generate star ratings for The Sewer Pros' own LocalBusiness or Organization pages.

Google explicitly states that self-serving reviews for `LocalBusiness` and `Organization` are ineligible for the star-review feature.

---

# 61. AggregateRating Guardrail

Do not automatically add:

```text
aggregateRating
```

to:

```text
Organization
LocalBusiness
Service
```

merely because Google reviews exist.

Before any rating markup is implemented, confirm:

* policy eligibility
* source
* visible review data
* calculation method
* current Google requirements

The default project position should be:

> No self-serving aggregate rating schema for the company's own business entity.

---

# 62. Review Content Still Matters

The review-schema restriction does **not** mean reviews should be removed from the site.

Authentic reviews remain valuable for:

* conversion
* trust
* market proof
* customer language
* service validation

This is a display/content issue separate from review rich-result eligibility.

---

# 63. LocalBusiness Type Selection

If a verified physical branch is approved, start with the most accurate legitimate LocalBusiness subtype.

Schema.org includes:

```text
Plumber
```

as a subtype of:

```text
HomeAndConstructionBusiness
→ LocalBusiness
```

However, `Plumber` should **not automatically be used** simply because sewer work falls within the broader plumbing industry.

---

# 64. `Plumber` Type Guardrail

The project's business positioning emphasizes sewer:

* inspection
* diagnostics
* cleaning
* hydro jetting
* locating

rather than general plumbing or repair.

Therefore:

> Use `Plumber` only if business classification, actual services, local entity representation, and approved brand positioning support that type.

Otherwise use a more neutral accurate type such as:

```text
LocalBusiness
```

for a verified branch.

Schema specificity must never create inaccurate business positioning.

---

# 65. No Sewer Repair Entity

Do not create:

```text
Service: Sewer Repair
Service: Sewer Replacement
Service: Trenchless Sewer Replacement
Service: Pipe Bursting
Service: Sewer Lining
```

unless those services are formally approved in:

`06-master-service-registry.md`

The fact that content discusses sewer repair does not mean The Sewer Pros provides sewer repair.

---

# 66. Educational Repair Entities

Repair concepts may appear as:

```text
Thing
DefinedTerm
about
mentions
```

where semantically appropriate.

For example:

```text
Article:
"Do I Need Sewer Cleaning or Sewer Repair?"

mentions:
Sewer Repair
```

does not imply that the company provides the repair service.

---

# 67. Schema Must Match Visible Content

Structured data should describe what users can actually see or reasonably verify on the page.

Google's structured-data guidance states that structured data should describe page content and should not include information that isn't visible to users merely to influence Search.

Therefore do not place invisible claims in JSON-LD such as:

* services absent from the page
* unlisted awards
* hidden testimonials
* fabricated locations
* unsupported pricing
* unapproved certifications

---

# 68. No Schema Keyword Stuffing

Do not misuse fields such as:

```text
keywords
knowsAbout
alternateName
description
serviceType
areaServed
```

to create keyword lists.

Bad:

```json
{
  "knowsAbout": [
    "best sewer company",
    "best sewer inspection near me",
    "cheap hydro jetting",
    "best sewer company St Louis"
  ]
}
```

Structured data is entity description, not a hidden keyword field.

---

# 69. `knowsAbout` Strategy

The Organization may eventually use `knowsAbout` for major verified areas of expertise.

Potential examples:

```text
Sewer Inspection
Sewer Camera Inspection
Sewer Diagnostics
Sewer Cleaning
Hydro Jetting
Sewer Line Locating
Drain Cleaning
Pre-Purchase Sewer Inspection
```

Do not populate all 18 services plus hundreds of long-tail topics without a clear semantic reason.

---

# 70. Organization Description

The Organization description should reinforce approved positioning.

Conceptual example:

> The Sewer Pros provides independent sewer inspection, sewer camera diagnostics, sewer cleaning, hydro jetting, drain cleaning, sewer line locating, pre-purchase sewer inspections, and commercial sewer and drain services.

Do not mention repair or replacement as company services unless approved.

---

# 71. Brand Entity

A separate `Brand` entity is optional.

Do not create:

```text
Organization: The Sewer Pros
+
Brand: The Sewer Pros
```

unless the distinction provides meaningful value.

For this project, the Organization entity can usually represent the operating brand unless business/legal structure requires separation.

---

# 72. Legal Entity vs. Public Brand

If the legal company name differs from:

```text
The Sewer Pros
```

use:

```text
name
```

for the approved public brand and:

```text
legalName
```

for the verified legal entity name where appropriate.

Do not guess the legal business name.

---

# 73. Logo Entity

The organization should reference the approved production logo.

Potential implementation:

```json
{
  "logo": {
    "@type": "ImageObject",
    "@id": "<CANONICAL_ORIGIN>/#logo",
    "url": "<APPROVED_LOGO_URL>",
    "contentUrl": "<APPROVED_LOGO_URL>"
  }
}
```

The image URL must use the production domain and remain crawlable.

Google recommends a representative organization logo and currently specifies a minimum 112 × 112 pixel image for Organization markup.

---

# 74. ImageObject

Important primary page imagery may be represented through:

```text
ImageObject
```

where useful.

Potential relationships:

```text
primaryImageOfPage
image
thumbnailUrl
```

Do not create schema objects for decorative images with no meaningful page relationship.

---

# 75. ContactPoint Strategy

Verified business contact channels may be represented through:

```text
ContactPoint
```

Possible contact types:

```text
customer service
sales
commercial inquiries
```

Do not create separate phone numbers or departments unless they actually exist.

---

# 76. Market Phone Numbers

If markets use different verified phone numbers, the relationship should be modeled accurately.

Example:

```text
St. Louis LocalBusiness
    ↓ telephone
St. Louis Number
```

or appropriate market-specific contact relationships.

Do not assign the same number to fictitious local branches simply for NAP signals.

---

# 77. Opening Hours

Only verified operating locations with verified hours should receive:

```text
openingHoursSpecification
```

Do not assume:

```text
24/7
```

or:

```text
Open 24 Hours
```

because competitors make those claims.

---

# 78. Address Strategy

Only use:

```text
PostalAddress
```

when the address is:

* accurate
* approved
* legitimately associated with the entity
* appropriate for public publication

Do not expose:

* private residences
* hidden service-area addresses
* virtual offices
* mailbox locations
* coworking addresses

unless they are legitimately approved as business locations and comply with applicable platform requirements.

---

# 79. GeoCoordinates

Only attach:

```text
GeoCoordinates
```

to a verified physical `Place` or `LocalBusiness` where accurate coordinates are available.

Do not place coordinates at the geographic center of San Diego or Las Vegas and treat those coordinates as a business location.

---

# 80. Market Hub Is Not a Business Address

This distinction must be maintained:

```text
/st-louis-mo/
```

is a web route.

It is not inherently:

```text
a business branch
```

Likewise:

```text
/san-diego-ca/
```

and:

```text
/las-vegas-nv/
```

represent market ecosystems, not automatically physical entities.

---

# 81. Commercial Location Entities

Example:

```text
Commercial Sewer Cleaning in Las Vegas
```

should normally use:

```text
Service
    ↓ areaServed
Las Vegas
```

not:

```text
LocalBusiness: Commercial Sewer Cleaning Las Vegas
```

Services are not businesses.

Pages are not businesses.

Cities are not businesses.

These entities must remain distinct.

---

# 82. Schema by Page Family

Recommended baseline:

| Page Family             | Primary Schema                            |
| ----------------------- | ----------------------------------------- |
| Homepage                | `WebPage`, `WebSite`, `Organization`      |
| About                   | `AboutPage`, `Organization`               |
| Contact                 | `ContactPage`, `Organization`             |
| Services Hub            | `CollectionPage`, `ItemList`              |
| Core Service            | `WebPage`, `Service`                      |
| Market Hub              | `WebPage`/`CollectionPage`, `Place`       |
| Location Page           | `WebPage`, `Place`                        |
| Service + Location      | `WebPage`, `Service`, `Place`             |
| Audience Page           | `WebPage`, `Audience`                     |
| Audience + Location     | `WebPage`, `Audience`, `Place`            |
| Commercial Hub          | `CollectionPage`, `Service` relationships |
| Commercial Service      | `WebPage`, `Service`                      |
| Commercial + Location   | `WebPage`, `Service`, `Place`             |
| Comparison Page         | `Article` or `WebPage`                    |
| Alternative Page        | `Article` or `WebPage`                    |
| Resource Article        | `Article` or `BlogPosting`                |
| FAQ Hub                 | `WebPage`; selective `FAQPage`            |
| Individual FAQ Resource | `WebPage`/`Article`                       |
| Breadcrumbs             | `BreadcrumbList`                          |

---

# 83. Multiple Schema Types on a Page

A page may legitimately contain multiple interconnected schema entities.

Example service page:

```text
WebPage
Service
BreadcrumbList
Organization reference
WebSite reference
```

This is preferable to trying to force the entire page into one schema type.

---

# 84. JSON-LD Graph Pattern

Recommended conceptual architecture:

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "<CANONICAL_URL>#webpage"
    },
    {
      "@type": "Service",
      "@id": "<CANONICAL_URL>#service"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "<CANONICAL_URL>#breadcrumb"
    }
  ]
}
```

Shared global entities may be referenced by their canonical IDs.

---

# 85. Avoid Repeated Full Organization Objects

Avoid generating this independently on hundreds of pages:

```json
{
  "@type": "Organization",
  "name": "The Sewer Pros",
  "...": "..."
}
```

with slightly different data each time.

Instead reference:

```json
{
  "@id": "<CANONICAL_ORIGIN>/#organization"
}
```

when possible.

This reduces entity fragmentation.

---

# 86. Consistency Rule

The following values must remain consistent wherever they represent the same entity:

* organization name
* canonical URL
* logo
* phone
* legal name
* addresses
* social profiles
* service names
* geographic names
* entity IDs

Schema should consume central structured data rather than manual page-level strings wherever practical.

---

# 87. Recommended Data Architecture

A future implementation may centralize data conceptually as:

```text
src/
└── data/
    ├── organization.ts
    ├── services.ts
    ├── markets.ts
    ├── locations.ts
    ├── audiences.ts
    └── schema/
```

Exact directory structure is controlled by:

`02-nextjs-technical-architecture.md`

The principle is:

> Entity data should have one source of truth.

---

# 88. Schema Component Architecture

Possible reusable schema generators include:

```text
OrganizationSchema
WebsiteSchema
WebPageSchema
LocalBusinessSchema
ServiceSchema
PlaceSchema
ArticleSchema
BreadcrumbSchema
FAQSchema
ItemListSchema
```

These should be data-driven.

Do not duplicate handwritten JSON-LD across hundreds of page files.

---

# 89. TypeScript Schema Data

Structured-data objects should be generated from typed project data where possible.

Benefits include:

* canonical consistency
* fewer missing values
* fewer spelling variations
* easier market expansion
* easier QA
* safer refactoring

Do not allow the schema layer to create new services or locations outside approved registries.

---

# 90. Schema and Master Page Build List

Only approved public pages should produce page-level structured data intended for indexable routes.

The governing relationship is:

```text
Master Page Build List
        ↓
Approved Route
        ↓
Page Content
        ↓
Appropriate Schema
```

Schema must never be used as a mechanism to expose unapproved programmatic pages.

---

# 91. Schema and Master Service Registry

`06-master-service-registry.md`

controls:

* canonical service names
* service distinctions
* aliases
* approved capabilities
* prohibited repair positioning

Schema should inherit service definitions from that registry.

---

# 92. Schema and Master Location Registry

`07-master-location-registry.md`

controls:

* canonical geographic naming
* geographic type
* market relationship
* service-area relationship

Schema must not independently rename or reclassify geographic entities.

---

# 93. Entity Relationship Example — Home Buyer

Conceptual graph:

```text
The Sewer Pros
    ↓ provider
Pre-Purchase Sewer Inspection
    ↓ audience
Home Buyers
    ↓ relevant location
St. Louis
```

Supporting resource:

```text
Article:
"What Does a Sewer Inspection Show Before You Buy a Home?"
    ↓ about
Pre-Purchase Sewer Inspection
    ↓ publisher
The Sewer Pros
```

This creates machine-readable topical relationships without creating unnecessary entity types.

---

# 94. Entity Relationship Example — Commercial

```text
The Sewer Pros
    ↓ provider
Commercial Hydro Jetting
    ↓ audience
Commercial Property Operators
    ↓ areaServed
Las Vegas
```

Supporting articles may then link semantically to:

```text
Commercial Hydro Jetting
Grease Buildup
Drain Maintenance
Sewer Camera Inspection
```

---

# 95. Entity Relationship Example — Second Opinion

Page:

```text
Sewer Replacement Second Opinion
```

should generally be:

```text
WebPage / Article
```

about:

```text
Independent Sewer Inspection
```

and mentioning:

```text
Sewer Replacement
```

Do **not** create:

```text
Service: Sewer Replacement
```

unless The Sewer Pros actually provides it.

---

# 96. AEO and AI Entity Strategy

Schema should reinforce—not replace—the semantic clarity already present in content.

AI systems should be able to identify:

```text
Who:
The Sewer Pros

What:
Independent sewer inspection, diagnostics, cleaning, locating, and related services

Where:
St. Louis
San Diego
Las Vegas

Who for:
Homeowners
Home buyers
Real estate professionals
Property managers
Commercial customers

Differentiator:
Inspection and cleaning without repair-driven selling
```

Structured data should make these relationships easier to parse.

---

# 97. Schema Is Not a Ranking Hack

Do not treat schema as a hidden SEO layer capable of compensating for:

* weak pages
* thin content
* fake locations
* poor internal linking
* duplicate pages
* unclear positioning

Structured data should reinforce valid content and entity relationships.

Google's general structured-data guidance makes clear that structured data eligibility does not guarantee a rich-result appearance.

---

# 98. Rich Results vs. Semantic Schema

The project should distinguish two purposes.

## Rich-Result Schema

Markup supported for specific Google Search appearances.

Examples include:

```text
BreadcrumbList
Organization
LocalBusiness
Article
```

where eligibility requirements are met.

## Semantic Entity Schema

Useful schema.org relationships that help describe the content even when no dedicated Google rich result exists.

Examples:

```text
Service
Audience
Place
OfferCatalog
```

Not every schema type must produce a visual Search enhancement to be useful.

---

# 99. Current Rich-Result Volatility

Google can add, change, limit, or retire structured-data search appearances.

For example, FAQ visibility was sharply restricted and Google has continued simplifying structured-data-powered search experiences.

Therefore:

> The architecture should optimize first for accurate semantic representation and second for currently available rich results.

Do not design the entity system around a temporary SERP feature.

---

# 100. Structured Data Testing

Implementation must support validation with:

* Google Rich Results Test
* Schema Markup Validator
* Google Search Console
* URL Inspection

Google recommends the Rich Results Test for Google-specific rich-result validation and the Schema Markup Validator for generic Schema.org validation.

Actual testing workflow remains governed by Site OS Master.

---

# 101. Production Validation Principle

Schema should be validated against the rendered production or production-equivalent page.

Passing TypeScript compilation alone does not establish schema validity.

The final output must be checked for:

* valid JSON
* valid URLs
* correct `@id` relationships
* correct canonical domain
* visible-content consistency
* required properties
* accidental undefined/null values
* duplicate entities

---

# 102. Null and Placeholder Guardrail

Production schema must never contain values such as:

```text
undefined
null
TODO
TBD
<CANONICAL_ORIGIN>
<PHONE_NUMBER>
<ADDRESS>
[INSERT CITY]
```

If a value is unavailable, omit the optional property rather than publish a placeholder.

---

# 103. No Fabricated Completeness

A smaller accurate schema object is preferable to a larger inaccurate one.

Example:

```json
{
  "@type": "Organization",
  "name": "The Sewer Pros",
  "url": "<CANONICAL_ORIGIN>/"
}
```

is preferable to inventing:

* founding date
* price range
* employee count
* licenses
* awards
* hours
* addresses

to make the entity appear more complete.

---

# 104. Migration Entity Consistency

During migration, preserve continuity wherever possible for:

* organization name
* canonical domain
* sameAs references
* verified business information
* GBP relationship
* important canonical service URLs

If URLs change, entity IDs should follow the approved canonical migration strategy.

See:

`20-migration-redirect-plan.md`

---

# 105. Entity Identity Across External Platforms

The long-term objective is consistent identity across:

```text
Website
Google Business Profile
Google Search
Bing
Apple Business Connect
Social Profiles
Major Citations
Relevant Industry Platforms
```

Consistency should focus on factual business identity rather than mechanically forcing identical descriptions everywhere.

---

# 106. St. Louis GBP Relationship

The existing St. Louis GBP should eventually be reconciled against:

* business name
* approved website URL
* phone
* public address if applicable
* business category
* service areas
* services
* hours

The website schema should not contradict the GBP.

Detailed GBP governance belongs in:

`11-local-seo-gbp-strategy.md`

---

# 107. Future San Diego GBP

If an eligible San Diego GBP is created later:

1. verify the underlying business entity/location
2. update the local SEO registry
3. determine whether a legitimate LocalBusiness entity should be introduced
4. connect it to the Organization entity
5. update market-level service provider relationships if appropriate
6. document the decision in `22-decisions-change-log.md`

Do not automatically change schema merely because a GBP is discussed.

---

# 108. Future Las Vegas GBP

Use the same process for Las Vegas.

The addition of a future GBP should be treated as an entity-architecture change, not merely a marketing profile update.

---

# 109. Local Branch Relationship

If verified branches exist, the preferred graph is:

```text
The Sewer Pros
@type Organization
        ↓
subOrganization / location
        ↓
Verified LocalBusiness
```

rather than treating each local entity as an unrelated company.

Exact relationship should match the real organizational structure.

---

# 110. Multi-Market Entity Graph

Preferred conceptual architecture:

```text
                         The Sewer Pros
                         Organization
                              │
             ┌────────────────┼────────────────┐
             │                │                │
        St. Louis        San Diego        Las Vegas
          Place             Place             Place
             │                │                │
             └────────────────┼────────────────┘
                              │
                          areaServed
                              │
                     Canonical Services
                              │
      ┌───────────────────────┼──────────────────────┐
      │                       │                      │
Sewer Inspection        Hydro Jetting        Drain Cleaning
      │                       │                      │
      └───────────────────────┼──────────────────────┘
                              │
                           Audiences
```

LocalBusiness nodes should be added only for verified actual business locations.

---

# 111. Do Not Model SEO Pages as Separate Companies

The following structure is prohibited:

```text
The Sewer Pros St. Louis
The Sewer Pros Kirkwood
The Sewer Pros Clayton
The Sewer Pros San Diego
The Sewer Pros La Jolla
The Sewer Pros Las Vegas
The Sewer Pros Henderson
```

each represented as separate `LocalBusiness` objects simply because separate landing pages exist.

This would misrepresent the business entity architecture.

---

# 112. Internal Linking and Schema Alignment

Visible internal linking should reinforce the same relationships represented in structured data.

Example:

```text
St. Louis Market Hub
    ↓ visible link
St. Louis Sewer Camera Inspection
```

and:

```text
Service.areaServed
    ↓
St. Louis
```

The semantic HTML, internal linking, copy, and JSON-LD should tell the same story.

Detailed linking rules belong in:

`16-internal-linking-strategy.md`

---

# 113. Schema and Canonicalization

Structured-data IDs and URLs should reference canonical production URLs.

Do not use:

* tracking URLs
* parameter URLs
* alternate slash variants
* preview domains
* redirects

as primary entity IDs.

Schema canonical references should align with:

`05-url-routing-strategy.md`

and the page's canonical metadata.

---

# 114. Trailing Slash Consistency

Whatever URL convention is adopted by the technical architecture must also be reflected consistently in:

```text
url
@id
mainEntityOfPage
isPartOf
sameAs
breadcrumb items
```

Do not mix:

```text
/service
```

and:

```text
/service/
```

if the project has established one canonical format.

---

# 115. Page Indexability Relationship

Pages marked:

```text
noindex
```

should not be treated as central public entity destinations.

Schema may still technically exist on such pages, but the project should not depend on noindexed URLs as canonical entity identifiers.

Primary entities should resolve to approved crawlable canonical URLs.

---

# 116. Structured Data Security and Privacy

Do not expose through JSON-LD information that should remain private.

Examples:

* private residential address
* internal email addresses
* employee personal data
* unpublished phone numbers
* tax IDs
* private identifiers

Schema is public source code.

---

# 117. Change Management

Material changes to the entity model should be documented in:

`22-decisions-change-log.md`

Examples:

* new market becomes a verified branch
* GBP created
* business legal name changes
* canonical domain changes
* service added
* service retired
* repair capabilities approved
* major schema type changed

---

# 118. Project-Specific Schema Guardrails

The following rules are mandatory:

1. One canonical Organization entity for The Sewer Pros.
2. Stable `@id` values for major entities.
3. Do not create LocalBusiness entities from SEO location pages.
4. Do not infer physical locations from market coverage.
5. Use `Service` for services.
6. Use `Place`/accurate geographic types for markets and locations.
7. Use `areaServed` to connect services to genuine service areas.
8. Do not create unapproved repair-service entities.
9. Do not invent ratings, addresses, hours, pricing, or certifications.
10. Do not use self-serving review markup to pursue review stars.
11. Do not rely on FAQ schema for Google FAQ rich results.
12. Schema must match visible content.
13. Schema must follow canonical service and location registries.
14. Approved routes come from the Master Page Build List.
15. Structured data must reinforce the site's entity architecture, not replace it.

---

# 119. Recommended Initial Schema Priority

## Tier 1 — Launch Critical

Implement first:

```text
Organization
WebSite
WebPage
BreadcrumbList
Service
Place
Article / BlogPosting
```

---

## Tier 2 — Page-Family Enhancements

Implement where appropriate:

```text
AboutPage
ContactPage
CollectionPage
ItemList
Audience
OfferCatalog
ImageObject
ContactPoint
```

---

## Tier 3 — Conditional

Only after qualification:

```text
LocalBusiness
Plumber
Offer
FAQPage
Review
AggregateRating
ProfilePage
```

These require stronger contextual or policy justification.

---

# 120. Entity Success Criteria

The entity architecture is successful when a machine can reliably determine:

### Company

```text
The Sewer Pros
```

### Core Expertise

```text
Sewer inspection
Sewer camera inspection
Sewer diagnostics
Sewer cleaning
Hydro jetting
Drain cleaning
Sewer line locating
Pre-purchase sewer inspection
Commercial sewer/drain services
```

### Primary Markets

```text
St. Louis, Missouri
San Diego, California
Las Vegas, Nevada
```

### Major Audiences

```text
Homeowners
Home buyers
Real estate professionals
Property managers
Commercial customers
```

### Competitive Position

```text
Independent sewer inspection and cleaning
without repair-driven sales positioning
```

without incorrectly concluding that The Sewer Pros:

* operates a physical office in every service area
* repairs sewer lines
* replaces sewer lines
* provides services not approved by the business

---

# 121. Final Entity Principle

The Sewer Pros schema architecture should represent the **real business graph**, not the **keyword graph**.

The governing model is:

```text
ONE BUSINESS
        ↓
VERIFIED SERVICES
        ↓
VERIFIED MARKETS
        ↓
APPROVED LOCATIONS
        ↓
REAL AUDIENCES
        ↓
USEFUL CONTENT
```

not:

```text
Keyword
    ↓
Page
    ↓
New Fake Entity
```

The final standard is:

> **Use structured data to make The Sewer Pros easier for search engines, answer engines, AI systems, and other machines to understand accurately—while maintaining one coherent business identity, truthful service relationships, legitimate geographic relationships, and strict separation between service-area SEO pages and actual physical business entities.**
