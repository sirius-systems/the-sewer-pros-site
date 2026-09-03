# The Sewer Pros — Master Location Registry

**Document:** `07-master-location-registry.md`  
**Project:** The Sewer Pros Website Rebuild  
**Repository:** `the-sewer-pros-site`  
**Status:** Active Canonical Geographic Taxonomy  
**Last Updated:** September 3, 2026

---

# 1. Purpose

This document defines the canonical geographic taxonomy for The Sewer Pros website.

It establishes consistent geographic identities for use across:

- market pages
- location pages
- service + location pages
- audience + location pages
- commercial + location pages
- routing
- internal linking
- service-area relationships
- metadata
- schema
- analytics
- forms
- content generation
- local SEO
- page generation
- future geographic expansion

The registry exists to create **consistent, reusable geographic data**.

It is not intended to function as a permission gate that prevents Claude or Claude Code from:

- researching geographic opportunities
- adding verified geographic records
- drafting local pages
- generating candidate routes
- creating local content
- modeling service-area relationships
- building local page inventory
- identifying nearby communities
- refining geographic hierarchy

The key distinction is:

```text
Canonical Geographic Data
=
Location Accuracy and Consistency

Not
=
Human Approval Required Before Geographic Work
```

---

# 2. Core Operating Principle

Use the location registry to answer:

> **What geographic entity does this page, relationship, service area, or search opportunity refer to?**

Do not use it to ask:

> **Am I allowed to research or build anything related to this location?**

Claude and Claude Code may work with verified geographic data freely.

Business presence and service coverage remain separate questions.

---

# 3. Geography vs. Business Presence

This distinction is mandatory:

```text
Geographic Entity
≠
Service Coverage
≠
Physical Business Location
```

For example:

```text
Las Vegas, Nevada
```

may exist in the registry because it is:

* a real geographic entity
* a primary service market
* a search target
* a parent location for nearby communities

That does not automatically mean:

* The Sewer Pros has a Las Vegas office
* The Sewer Pros has a Las Vegas GBP
* The Sewer Pros has a Las Vegas storefront
* a dedicated Las Vegas phone number exists

Geographic data should describe geography accurately.

Other project systems determine business relationships.

---

# 4. Location Registry Role

The registry should support five primary functions.

## 4.1 Canonical Geographic Naming

Provide one consistent internal identity for every geographic entity.

## 4.2 Geographic Hierarchy

Define parent/child relationships among:

* primary markets
* cities
* communities
* neighborhoods
* counties
* regions

## 4.3 Relationship Modeling

Connect geography to:

* services
* audiences
* commercial segments
* nearby areas
* market hubs
* local resources

## 4.4 Page Generation

Provide structured data for:

* market pages
* location pages
* service + location pages
* audience + location pages
* commercial + location pages

## 4.5 Analytics and Entity Consistency

Keep geographic IDs consistent across:

* page data
* metadata
* analytics
* forms
* schema
* internal links

---

# 5. Current Dataset Scale

The project research currently includes approximately:

> **579 normalized geographic records**

These records represent a substantial geographic knowledge base for:

* St. Louis
* San Diego
* Las Vegas
* surrounding cities
* communities
* neighborhoods
* related geographic entities

This dataset should be treated as an active project asset.

It may be used for:

* research
* page generation
* route planning
* content development
* internal-link modeling
* market analysis
* service-area expansion
* SEO opportunity discovery

The registry should not become a static spreadsheet that Claude is afraid to use.

---

# 6. Primary Market Records

The three initial primary markets are:

```text
st-louis-mo
san-diego-ca
las-vegas-nv
```

These records are major geographic hubs.

They should provide parent context for relevant local records where appropriate.

---

# 7. St. Louis Market

Canonical primary market:

```text
St. Louis, Missouri
```

Recommended canonical ID:

```text
st-louis-mo
```

This market may include geographic relationships across:

* St. Louis City
* St. Louis County
* relevant nearby municipalities
* approved surrounding communities
* broader metro service areas

Do not treat:

```text
St. Louis
```

as one undifferentiated municipality when legal, municipal, or sewer-lateral information depends on jurisdiction.

---

# 8. San Diego Market

Canonical primary market:

```text
San Diego, California
```

Recommended canonical ID:

```text
san-diego-ca
```

This market may include:

* City of San Diego
* surrounding cities
* communities
* neighborhoods
* other verified service areas

San Diego is currently a service market without a verified GBP.

Geographic records do not create a physical San Diego branch.

---

# 9. Las Vegas Market

Canonical primary market:

```text
Las Vegas, Nevada
```

Recommended canonical ID:

```text
las-vegas-nv
```

The broader Las Vegas Valley may include relevant geographic entities such as:

* Las Vegas
* Henderson
* North Las Vegas
* Enterprise
* Spring Valley
* Paradise
* Summerlin-related communities
* other verified areas

Exact classification should reflect actual geography.

Do not casually label every Las Vegas Valley community as an incorporated city.

---

# 10. Geographic Types

Each location record should identify its geographic type.

Recommended values may include:

```text
market
city
town
village
municipality
county
neighborhood
community
census-designated-place
region
metro
service-area
```

Use the most accurate classification available.

Do not force every record into:

```text
city
```

for convenience.

---

# 11. Suggested Location Record Structure

A structured implementation may resemble:

```ts
type LocationStatus =
  | "active"
  | "candidate"
  | "inactive"
  | "retired";

type LocationType =
  | "market"
  | "city"
  | "town"
  | "municipality"
  | "county"
  | "neighborhood"
  | "community"
  | "census-designated-place"
  | "region"
  | "metro"
  | "service-area";

interface LocationRecord {
  id: string;
  name: string;

  state?: string;
  stateCode?: string;

  type: LocationType;
  status: LocationStatus;

  parentLocationId?: string;
  marketId?: string;

  aliases?: string[];

  serviceAreaStatus?: "confirmed" | "candidate" | "excluded" | "unknown";

  pageSlug?: string;
  pageStatus?: string;

  latitude?: number;
  longitude?: number;

  notes?: string;
}
```

The actual technical implementation may vary.

The important requirement is consistent geographic identity.

---

# 12. Stable Location IDs

Use stable machine-friendly IDs.

Examples:

```text
st-louis-mo
san-diego-ca
las-vegas-nv
henderson-nv
north-las-vegas-nv
```

Avoid inconsistent variants such as:

```text
vegas
las_vegas
lasvegas
lv
```

for the same canonical entity.

Aliases may preserve natural variants while one canonical ID remains stable.

---

# 13. Canonical Name vs. Search Language

The registry may distinguish:

```text
Canonical Geographic Name
```

from:

```text
Common Search Language
```

Example:

Canonical:

```text
Las Vegas, Nevada
```

Possible natural content/search usage:

* Las Vegas
* Las Vegas, NV
* Las Vegas Valley

These are not necessarily the same geographic entity.

Use precise language when geography matters.

---

# 14. Aliases

Aliases may be stored where useful.

Example:

```ts
{
  id: "st-louis-mo",
  name: "St. Louis",
  aliases: [
    "Saint Louis",
    "St Louis"
  ]
}
```

Aliases may support:

* search research
* internal search
* normalization
* migration
* content parsing

Do not create duplicate geographic records for spelling variations.

---

# 15. Parent / Child Relationships

Geography should be relational.

Example:

```text
Las Vegas Market
    ↓
Henderson
```

or:

```text
St. Louis Market
    ↓
Kirkwood
```

where appropriate.

The exact relationship should reflect actual project geographic structure.

Parent/child relationships can support:

* breadcrumbs
* local navigation
* related locations
* page generation
* analytics
* schema
* content hierarchy

---

# 16. Market ID

Every local record should generally identify its primary market where applicable.

Example:

```ts
{
  id: "henderson-nv",
  marketId: "las-vegas-nv"
}
```

This allows the system to understand:

```text
Henderson
→ Las Vegas Market Ecosystem
```

without implying Henderson is simply a neighborhood of Las Vegas.

---

# 17. Market Ecosystem vs. Legal Geography

The website architecture may group locations into a marketing/service market even when the entities are legally independent.

Example:

```text
Las Vegas Market
```

may function as the parent market of the site for:

* Las Vegas
* Henderson
* North Las Vegas
* nearby valley communities

That is a website/service architecture relationship.

It should not misstate legal geography.

---

# 18. Registry Is Not a Page Gate

A location may exist in the registry without having a dedicated public page.

Likewise, Claude may create a candidate location page before its page status has been manually documented.

The registry answers:

> **What is this place?**

`04-master-page-build-list.md` answers:

> **What is the lifecycle of the related page?**

These responsibilities should remain separate.

---

# 19. Location Status

Recommended statuses:

## `active`

Verified geographic record used within the current project.

## `candidate`

Legitimate geographic entity being evaluated for service-area or SEO relevance.

## `inactive`

Valid geographic record currently not being used.

## `retired`

A geographic record previously used by the project but no longer relevant.

A retired geographic entity may still exist in real life.

The status refers to project usage.

---

# 20. Service-Area Status

Geographic existence does not automatically prove service coverage.

A separate field may indicate:

```text
confirmed
candidate
excluded
unknown
```

Example:

```ts
serviceAreaStatus: "confirmed"
```

means the business is known to serve the geographic area generally.

Detailed service availability may still vary by service and should be modeled through:

`08-service-location-matrix.md`

---

# 21. Service Coverage Is Service-Specific

Do not assume:

```text
Business serves Henderson
```

means:

```text
Every service is available in Henderson.
```

The preferred model is:

```text
Location Registry
+
Service Registry
+
Service-Location Matrix
```

This keeps detailed coverage normalized.

---

# 22. New Geographic Discovery

Claude may identify geographic opportunities during:

* keyword research
* competitor analysis
* map research
* Search Console analysis
* local SEO research
* customer/service-area research
* municipal research

When a valid geographic entity is discovered:

```text
Verify Entity
→ Add Candidate Record
→ Assign Parent Market
→ Evaluate Relationships
→ Continue
```

Human approval is not normally required simply to add factual geographic data.

---

# 23. Verification Standard

Geographic records should be verified when necessary using reliable sources.

Useful sources may include:

* municipal websites
* county websites
* Census/geographic references
* mapping platforms
* official neighborhood/community sources
* other reliable geographic data

Do not invent neighborhood names or boundaries for SEO.

---

# 24. Adding New Candidate Locations

A new location can be added as:

```text
status: candidate
```

when:

* the geographic entity is legitimate
* it is plausibly relevant to an existing market
* additional business/search evaluation is warranted

Candidate status does not automatically mean:

* the area is served
* a page should be indexed
* the business has physical presence there

---

# 25. Confirmed Service Areas

Once service coverage is verified, the location may be marked:

```text
serviceAreaStatus: confirmed
```

This may support:

* service-area language
* geographic page generation
* related-location modules
* forms
* local content

It still does not create a physical branch.

---

# 26. Excluded Locations

Use:

```text
serviceAreaStatus: excluded
```

when the business does not serve the location.

Excluded records may remain in the dataset for:

* geographic completeness
* competitor research
* query normalization
* future planning

They should not generate public service claims.

---

# 27. Unknown Coverage

Use:

```text
serviceAreaStatus: unknown
```

where geography is known but service coverage has not been confirmed.

Claude may continue research without prematurely representing the location as served.

---

# 28. Physical Business Location

If a location is a real public branch, that should be represented separately from normal geographic data.

A possible field might be:

```ts
physicalBusinessLocation: true
```

but only after verification.

Do not infer this field from:

* market importance
* location page existence
* local search targeting
* phone number area code
* generated content

---

# 29. Google Business Profile Relationship

GBP status should not be encoded casually from geographic page status.

Conceptually:

```text
Location Record
+
Verified Business Presence
+
GBP Eligibility / Profile
```

are separate layers.

Current baseline:

```text
St. Louis
→ Existing GBP
```

```text
San Diego
→ No verified GBP
```

```text
Las Vegas
→ No verified GBP
```

A future GBP can be added when legitimately established.

---

# 30. Address Guardrail

Never invent a public address to strengthen a location page.

If the business does not publicly maintain a location there:

* omit address
* use service-area language
* use market/location content

Do not manufacture NAP consistency around nonexistent branches.

---

# 31. Phone Number Guardrail

Do not create fake market-specific phone numbers.

Market pages should use verified contact data.

If the project later uses legitimate market-specific numbers, update the relevant structured data.

---

# 32. Location Page Generation

Location records may power reusable location templates.

Conceptually:

```text
Location Record
+
Market Content
+
Page Template
=
Location Page
```

Primary reference:

```text
/docs/design-references/location-page-performance.webp
```

See:

`18-design-system.md`

---

# 33. Service + Location Page Generation

The registry provides the geographic side of:

```text
Service
+
Location
+
Relationship
=
Service + Location Page
```

Primary design reference:

```text
/docs/design-references/location-service-page-performance.webp
```

The service-location matrix determines whether the service/location relationship exists.

---

# 34. Audience + Location Generation

Geographic records may also support audience-focused local pages.

Example:

```text
Home Buyers
+
San Diego
```

when there is meaningful audience/local intent.

These relationships should generally be derived from:

* audience data
* geographic data
* page strategy

rather than creating a new geographic entity.

---

# 35. Commercial + Location Generation

Likewise:

```text
Commercial Sewer Services
+
Las Vegas
```

may be built using canonical geographic records.

Geographic identity should remain consistent across residential and commercial systems.

---

# 36. Location Page Authority

Primary market pages should generally serve as the strongest broad geographic nodes.

Conceptually:

```text
Las Vegas Market Hub
    ↓
Henderson
    ↓
Relevant Service + Location Pages
```

or another hierarchy appropriate to the route strategy.

Do not create dozens of pages competing for identical broad market intent.

---

# 37. Nearby Locations

The registry may store or derive geographic proximity relationships.

Examples may support:

```text
Nearby Areas We Serve
```

modules.

Relationships should be geographically sensible.

Do not create arbitrary cross-links between unrelated locations solely for SEO.

---

# 38. Coordinates

Latitude and longitude may be stored for:

* geographic calculations
* map display
* proximity sorting

These coordinates describe the geographic entity.

They must not be interpreted as a business office coordinate unless the point actually represents a verified business location.

---

# 39. Map Usage

Map systems may use:

```text
location coordinates
```

to represent:

* market
* community
* service coverage

A map showing Henderson does not need to imply an office there.

Use labels such as:

> Areas We Serve

when appropriate.

---

# 40. Municipal Research

Some geographic content requires municipality-specific research.

This is especially important for:

* sewer-lateral programs
* inspection requirements
* property-owner responsibilities
* public utility information
* permits
* local programs

Do not attach the rules of one municipality to every location in the market.

---

# 41. St. Louis Municipal Guardrail

St. Louis geography requires particular care.

Distinguish when relevant among:

* City of St. Louis
* St. Louis County
* individual municipalities
* surrounding counties
* metro region

A search user may use "St. Louis" broadly.

Legal/municipal claims may require a much narrower geographic entity.

---

# 42. San Diego Geographic Guardrail

Similarly, distinguish:

```text
City of San Diego
```

from:

```text
San Diego County
```

and from individual surrounding cities.

Do not attribute City of San Diego policies across the entire county.

---

# 43. Las Vegas Geographic Guardrail

Distinguish:

* City of Las Vegas
* North Las Vegas
* Henderson
* Clark County
* unincorporated Las Vegas Valley communities

Many search users say "Las Vegas" broadly.

Content should use precise geography when claims depend on jurisdiction.

---

# 44. Local Content Enrichment

Location records may support structured local content fields such as:

```ts
localContext
propertyContext
municipalResources
nearbyLocationIds
marketRelationship
```

when verified and useful.

Do not require every geographic record to have large amounts of custom prose before it can exist in the registry.

---

# 45. Location Data vs. Content Data

Keep geographic facts separate from marketing copy where practical.

Example:

```ts
{
  id: "henderson-nv",
  name: "Henderson",
  stateCode: "NV",
  type: "city",
  marketId: "las-vegas-nv"
}
```

should not need to store an entire SEO landing page inside the same record.

Use structured geography to power content systems.

---

# 46. Localized Metadata

Location records may provide variables for metadata generation.

Example:

```text
Henderson, NV
```

may populate:

* title
* H1
* breadcrumb
* market label

Metadata generation should still reflect actual page intent.

Do not create indexable pages simply by combining geographic variables with services.

---

# 47. Analytics

Canonical geographic IDs should be reused in analytics.

Example:

```ts
market_id: "las-vegas-nv"
location_id: "henderson-nv"
```

Avoid inconsistent analytics values such as:

```text
Vegas
Las Vegas
LV
las_vegas
```

for the same dimension.

---

# 48. Forms

Forms may preserve geographic context.

Example:

A user on a Henderson page may submit:

```text
location_id = henderson-nv
market_id = las-vegas-nv
```

without being forced to select Henderson again.

Do not send sensitive property-address information into analytics.

---

# 49. Schema

Geographic records may power:

* `Place`
* `areaServed`
* service-area relationships

A normal location page does not automatically justify `LocalBusiness`.

Structured data should reflect the actual business relationship.

See:

`15-schema-entity-strategy.md`

---

# 50. Place Entities

Where useful, canonical geographic entities may receive stable IDs.

Conceptually:

```text
https://example.com/#place-las-vegas-nv
```

or another system defined by the schema architecture.

Use stable identity rather than recreating inconsistent Place nodes throughout the site.

---

# 51. Location Aliases and Redirects

When users or legacy URLs use alternate geographic naming, aliases may support normalization.

Example:

```text
saint-louis
→ st-louis
```

if appropriate to the final route architecture.

Do not automatically create separate pages for every alternate spelling.

---

# 52. Duplicate Geographic Records

Avoid duplicates caused by:

* abbreviations
* spelling
* state suffix variation
* neighborhood aliases

Example:

```text
North Las Vegas
North Las Vegas, NV
NLV
```

should generally normalize to one geographic record.

---

# 53. Neighborhood Records

Neighborhoods may be useful for:

* geographic knowledge
* internal filtering
* future SEO
* service-area displays

Not every neighborhood requires a dedicated indexable page.

The registry may contain much more geography than the public index.

This is intentional.

---

# 54. Geographic Data Scale vs. Page Scale

Always preserve:

```text
579 Geographic Records
≠
579 Mandatory Location Pages
```

and:

```text
579 Locations × 18 Services
≠
Automatic Indexation of Every Combination
```

The data model should be broader than the public search index.

---

# 55. Candidate Route Generation

Claude Code may use geographic records to generate candidate routes.

For example:

```text
location record
+
service relationship
+
route strategy
=
candidate local route
```

Candidate generation does not require human approval for every location.

Intentional indexation remains a separate decision.

---

# 56. Indexation Quality

Before intentionally indexing a local page, evaluate:

* actual service coverage
* useful local intent
* sufficient differentiation
* relevant content
* logical internal links
* technical quality
* accurate local representation

A location may remain:

* candidate
* draft
* noindex

until it meets that standard.

---

# 57. Location Test

For indexable pages, ask:

> If the location name changed, would almost all the content still work?

If yes:

* improve local relevance
* add useful geographic context
* improve page differentiation
* or keep it noindex

This test should not prevent initial page generation.

---

# 58. Local Proof

Do not fabricate proof for geographic differentiation.

Never invent:

* number of customers served locally
* years serving a city
* local case studies
* local testimonials
* local technicians
* local offices

Use verified evidence where available.

---

# 59. Market Imagery

Location records may help select relevant imagery.

Follow:

`18-design-system.md`

General guidance:

## St. Louis

Use property/service context rather than relying on the Arch.

## San Diego

Use residential, multifamily, real-estate, and commercial environments rather than generic beach imagery.

## Las Vegas

Use Las Vegas Valley residential and commercial environments rather than casino/Strip imagery.

---

# 60. Internal Linking

Geographic hierarchy may power:

* related areas
* parent market links
* nearby communities
* location breadcrumbs

Example:

```text
Henderson
→ Las Vegas Market
→ Nearby Relevant Areas
```

Links should remain useful and geographically sensible.

---

# 61. Footer and Navigation

The geographic registry should not automatically dump all 579 locations into:

* footer
* header
* mega-menu
* HTML sitemap

The location hub should provide a curated user-facing hierarchy.

Large geographic datasets should remain manageable behind the interface.

---

# 62. Location Hub

The Locations hub may organize geography by primary market.

Example:

```text
St. Louis
├── Selected Locations
└── View Service Area

San Diego
├── Selected Locations
└── View Service Area

Las Vegas
├── Selected Locations
└── View Service Area
```

The exact presentation should reflect live useful pages, not every database record.

---

# 63. New Primary Market

A new primary market represents a material strategic change.

Process:

```text
Business Confirms Market
→ Decision Log
→ Add Primary Market Record
→ Add Relationships
→ Build Market Architecture
```

Routine community additions inside an existing market do not require this process.

---

# 64. New Physical Branch

A new verified physical branch represents a material local-entity change.

Process:

```text
Verify Branch
→ Confirm Business Details
→ Decision Log
→ Update Location Data
→ Update Schema
→ Update Local SEO / GBP
→ Update Website
```

Do not infer branch status from ordinary geographic expansion.

---

# 65. Routine Location Addition

For a normal verified service-area location:

```text
Verify Geography
→ Add Record
→ Assign Market
→ Add Relevant Service Relationships
→ Generate Candidate Pages if Useful
→ Continue
```

No strategic decision-log entry is normally required.

---

# 66. Registry Maintenance

Routine maintenance may include:

* fixing names
* correcting geographic type
* adding aliases
* updating parent relationships
* adding coordinates
* adding verified locations
* changing candidate status
* adjusting service-area status

These changes generally do not require material project approval.

---

# 67. Decision Log Relationship

Use:

`22-decisions-change-log.md`

when location changes represent a material business decision.

Examples:

```text
The Sewer Pros enters Phoenix as a new primary market.
```

```text
The Sewer Pros establishes a verified Las Vegas physical branch.
```

Do not use the decision log for every new community record.

---

# 68. Master Page Build List Relationship

The location registry answers:

> **What geographic entities exist in our project data?**

`04-master-page-build-list.md` answers:

> **What is the lifecycle/indexation state of their pages?**

These are separate systems.

---

# 69. Service-Location Matrix Relationship

The registry provides the geographic side of:

```text
Service
×
Location
```

relationships.

Detailed service availability belongs in:

`08-service-location-matrix.md`

Do not duplicate thousands of service relationships directly into every location record.

---

# 70. Audience Matrix Relationship

Audience + location relationships may be derived from:

```text
Audience Data
+
Location Data
```

where appropriate.

Avoid creating unnecessary three-way duplicate data unless operationally useful.

---

# 71. URL Strategy Relationship

The location registry supplies canonical geographic identity.

Exact URL construction belongs in:

`05-url-routing-strategy.md`

Do not change geographic names casually merely to manipulate slugs.

---

# 72. Design Relationship

Use:

```text
/docs/design-references/location-page-performance.webp
```

for primary market/location pages.

Use:

```text
/docs/design-references/location-service-page-performance.webp
```

for service + location pages.

See:

`18-design-system.md`

---

# 73. Build-Time Validation

Where practical, validate:

* duplicate location IDs
* missing names
* invalid parent IDs
* invalid market IDs
* circular geographic relationships
* duplicate aliases
* malformed coordinates
* excluded service areas being publicly represented
* physical branch fields without verified data

Validation should protect geographic integrity without blocking unrelated development.

---

# 74. Location Registry as Code

The operational geographic dataset may live in structured data such as:

```text
/data/locations.ts
```

or:

```text
/content/locations.ts
```

or another architecture defined by the technical system.

Avoid maintaining multiple conflicting location datasets.

This document should define rules.

Structured data should hold the current geographic records.

---

# 75. Single Geographic Source of Truth

Avoid:

```text
locations.ts
says Henderson is a city

page content
calls Henderson a neighborhood

analytics
calls it Vegas-Henderson

schema
uses another identity
```

Prefer:

```text
Canonical Location Record
        ↓
Page
Metadata
Schema
Analytics
Forms
Relationships
```

---

# 76. Geographic Data Should Enable Scale

The registry should make it easier to manage:

* 579 geographic records
* thousands of service relationships
* page generation
* nearby-area modules
* analytics
* service-area expansion

without hard-coding geographic facts repeatedly.

It is infrastructure for scale.

---

# 77. Hard Geographic Guardrails

Remain strict about:

* fake offices
* fake addresses
* fake branches
* fake GBPs
* false service coverage
* incorrect municipality-specific claims
* misleading geographic classification

These are business and factual integrity issues.

---

# 78. Flexible Geographic Work

Claude and Claude Code may independently:

* research new geographic entities
* add candidate locations
* correct geography
* add aliases
* create local page candidates
* create nearby-area relationships
* build location templates
* generate service + location pages
* improve local content
* add verified municipal context

without requesting approval for each routine change.

---

# 79. Registry Success Criteria

The registry is working correctly when it:

* keeps geographic naming consistent
* distinguishes geography from business presence
* simplifies page generation
* supports local SEO
* supports schema
* supports analytics
* supports forms
* supports service relationships
* allows easy geographic expansion
* helps Claude Code move quickly

It is failing when it:

* blocks ordinary local page development
* confuses service areas with offices
* requires manual approval for every legitimate geographic record
* creates duplicate geographic identities
* becomes disconnected from implementation

---

# 80. Core Geographic Governance Model

Use:

```text
Real Geographic Entity
→ Verify and Store

Service Coverage
→ Model Separately

Physical Branch
→ Strict Verification

Candidate Local Page
→ Flexible

Local Page Generation
→ Flexible

Intentional Indexation
→ Quality Controlled

Fake Local Presence
→ Never
```

---

# 81. Final Governing Principle

> **The Master Location Registry is the canonical geographic data foundation for The Sewer Pros website. Use it to maintain accurate location IDs, names, geographic types, market relationships, service-area context, page generation, schema, analytics, and internal linking. Do not treat the registry as a pre-build permission gate. Allow Claude and Claude Code to research, add, organize, and use verified geographic records freely while keeping the important distinctions between geographic existence, service coverage, and physical business presence strict.**
