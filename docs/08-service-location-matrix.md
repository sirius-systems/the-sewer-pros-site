# The Sewer Pros — Service × Location Matrix

**Document:** `08-service-location-matrix.md`  
**Project:** The Sewer Pros Website Rebuild  
**Repository:** `the-sewer-pros-site`  
**Status:** Active Opportunity, Generation, and Prioritization Dataset  
**Last Updated:** September 3, 2026

---

# 1. Purpose

This document defines how The Sewer Pros should use the service × location matrix.

The matrix exists to connect:

- approved services
- markets
- cities
- communities
- geographic service areas
- search opportunities
- page opportunities
- internal relationships
- content planning
- route generation
- publishing priorities
- indexation decisions

The matrix is intended to be a **productive build and SEO asset**.

It should help Claude, Claude Code, and the project team discover, generate, organize, and prioritize geographic service coverage.

It should **not** function as a prohibition against generating pages simply because every relationship has not been manually approved first.

---

# 2. Core Operating Principle

The service × location matrix represents:

> **Potentially useful relationships between real services and real geographic areas.**

A matrix relationship may be used for:

- keyword research
- route planning
- page generation
- draft generation
- page shells
- metadata generation
- content briefs
- internal linking
- sitemap planning
- geographic analysis
- opportunity scoring
- publishing cohorts
- noindex production inventory
- future SEO expansion

The key distinction is:

```text
Matrix Relationship
→ May Research / Generate / Build / Evaluate
```

while:

```text
Intentional Indexation
→ Requires sufficient relevance and quality
```

The matrix should enable the project to scale efficiently.

---

# 3. Current Dataset Scale

The project research currently includes approximately:

* **18 canonical service records**
* **579 normalized geographic records**
* **10,422 service × location relationships**

This is a strategic dataset.

Its size should be treated as an advantage.

The project should use it to:

* model service coverage
* discover opportunities
* automate repetitive work
* identify geographic gaps
* create scalable page inventory
* prioritize future SEO growth

The project should **not** artificially ignore the dataset merely because every relationship should not immediately enter search-engine indexes.

---

# 4. Matrix Role

The matrix has five primary roles.

## 4.1 Opportunity Discovery

Identify where a service and geographic entity create a plausible search or customer relationship.

## 4.2 Page Generation

Provide structured inputs for candidate and production page generation.

## 4.3 Internal Relationship Modeling

Help determine which:

* services belong to markets
* locations belong to markets
* service pages relate to locations
* local pages should reference related services

## 4.4 SEO Prioritization

Help determine which combinations deserve earlier optimization or indexation.

## 4.5 Expansion Planning

Provide a controlled foundation for future geographic growth.

---

# 5. What a Matrix Relationship Means

A relationship such as:

```text
Sewer Camera Inspection
×
Henderson, Nevada
```

means:

> Henderson is a potentially relevant geographic context for the Sewer Camera Inspection service.

That relationship may justify:

* research
* a candidate route
* a content brief
* a draft page
* a generated page shell
* local metadata
* internal-link relationships
* eventual indexation

depending on business coverage and page quality.

---

# 6. What a Matrix Relationship Does Not Mean

A matrix relationship does **not automatically mean**:

* there is a physical office in that location
* there is a Google Business Profile in that location
* a unique local telephone number exists
* a technician is permanently stationed there
* every relationship must immediately be indexed
* every combination deserves identical SEO priority

The matrix describes service-area and search relationships.

It does not create physical business entities.

---

# 7. Build vs. Indexation

This distinction is central to how the matrix should be used.

## Build

Claude Code may use the matrix to:

* generate pages
* create route objects
* create page shells
* populate structured data
* create candidate metadata
* build local content systems
* create noindex inventory
* establish internal relationships

without requiring human approval for every combination.

## Indexation

Intentional search-engine indexation should be more selective.

Before a large group of generated pages becomes indexable, review whether the pages provide:

* real business relevance
* legitimate service coverage
* distinct search intent
* useful content
* reasonable differentiation
* accurate local context
* appropriate internal linking
* good technical quality

---

# 8. Matrix Is Not a Pre-Build Gate

Do not interpret the matrix as:

```text
Relationship not manually approved
→ Cannot build page
```

Instead use:

```text
Valid relationship identified
→ May create candidate / draft / page
→ Evaluate before intentional indexation
```

This allows the structured architecture of the site to do useful work.

---

# 9. Canonical Service Source

Service IDs and canonical service names should generally come from:

`06-master-service-registry.md`

The service registry defines:

* canonical service name
* service ID
* aliases
* service hierarchy
* approved business capability

The matrix should reference the canonical service ID rather than inventing independent service taxonomy.

Example:

```text
serviceId: sewer-camera-inspection
```

rather than creating multiple competing IDs such as:

```text
camera-inspection
video-inspection
sewer-scope
pipe-camera
```

when they represent the same canonical service.

---

# 10. Canonical Geographic Source

Location IDs and geographic relationships should generally come from:

`07-master-location-registry.md`

The location registry defines:

* market
* city
* community
* neighborhood
* county
* geographic type
* parent/child relationship
* canonical ID

The matrix should use those IDs consistently.

---

# 11. Geographic Hierarchy

Relationships should preserve geographic hierarchy.

Conceptually:

```text
Primary Market
    ↓
City / Community
    ↓
Neighborhood / Submarket
```

Examples:

```text
Las Vegas, NV
    ↓
Henderson, NV
```

or:

```text
St. Louis Market
    ↓
Kirkwood, MO
```

Exact geographic classification should come from the location registry.

Do not flatten all geographic records into an undifferentiated city list.

---

# 12. Matrix Relationship Types

A relationship may use a status or strength field.

Recommended conceptual values:

## `core`

The service is strategically important within the market or location.

## `strong`

Clear business and search relevance exists.

## `supported`

Service/location relationship is legitimate but may have lower search priority.

## `candidate`

Relationship appears plausible and deserves additional evaluation.

## `exclude`

Combination should not be used because the service is unavailable, the geography is inappropriate, or another business reason exists.

These values support prioritization.

They should not become unnecessary human approval checkpoints.

---

# 13. Suggested Data Model

A structured implementation may resemble:

```ts
type ServiceLocationRelationship = {
  serviceId: string;
  locationId: string;

  relationship:
    | "core"
    | "strong"
    | "supported"
    | "candidate"
    | "exclude";

  businessCoverage?: boolean;
  searchOpportunity?: "high" | "medium" | "low" | "unknown";

  candidateRoute?: string;

  pageStatus?:
    | "candidate"
    | "draft"
    | "build-ready"
    | "published"
    | "indexable"
    | "noindex"
    | "deferred"
    | "retired";

  priority?: "P0" | "P1" | "P2" | "P3";

  notes?: string;
};
```

The actual code structure may vary.

The important requirement is that:

* service identity remains canonical
* geographic identity remains canonical
* relationship and indexation remain separate concepts

---

# 14. Business Coverage

Where actual service coverage is known, the matrix should represent it.

A useful distinction may be:

```text
businessCoverage = true
```

meaning the business legitimately serves the area for that service.

If coverage is unknown:

```text
businessCoverage = unknown
```

or leave the field unresolved until verified.

Do not convert geographic SEO opportunity into a false service-area claim.

---

# 15. New Geographic Discoveries

Claude may identify additional relevant locations through:

* market research
* geographic analysis
* competitor research
* Search Console queries
* customer behavior
* SEO tools
* local search results
* business feedback

When a legitimate geographic entity is discovered:

```text
Verify geographic identity
→ Add to location data
→ Evaluate service relationships
→ Continue
```

A separate strategic decision is not required simply to record valid geography.

---

# 16. New Matrix Relationships

Claude may also identify new service × location relationships during research.

Example:

```text
Pre-Purchase Sewer Inspection
×
Newly Researched San Diego Community
```

If:

* the location is legitimate
* the service is approved
* the market is served

the relationship may be added as a candidate without requiring human approval.

It can then be:

* researched
* drafted
* built
* scored
* evaluated for indexation

---

# 17. Hard Business Capability Rule

The matrix may not create services that The Sewer Pros does not actually offer.

For example:

```text
Sewer Replacement
×
Las Vegas
```

must not become an offered-service relationship while sewer replacement remains unapproved.

Educational repair intent belongs in:

* resource strategy
* comparison strategy
* second-opinion strategy

not in the service-location matrix as a provided service.

---

# 18. Physical Location Guardrail

A service × location relationship must never be interpreted as:

```text
Physical branch exists here
```

Example:

```text
Hydro Jetting
×
Las Vegas
```

may mean:

> The Sewer Pros serves Las Vegas with hydro jetting.

It does not mean:

> The Sewer Pros has a Las Vegas office.

This distinction must remain consistent across:

* content
* schema
* maps
* contact information
* structured data
* metadata

---

# 19. Primary Market Strategy

The current matrix should organize geographic relationships around the three primary market ecosystems:

## St. Louis

Potential emphasis:

* sewer inspection
* sewer camera inspection
* sewer lateral inspection
* sewer cleaning
* hydro jetting
* line locating
* pre-purchase sewer inspection
* real-estate-related inspection services

## San Diego

Potential emphasis:

* sewer camera inspection
* pre-purchase sewer inspection
* sewer cleaning
* hydro jetting
* line locating
* real-estate inspection
* property management
* commercial services

## Las Vegas

Potential emphasis:

* sewer inspection
* sewer camera inspection
* drain cleaning
* sewer cleaning
* hydro jetting
* line locating
* property management
* commercial services

Actual service availability remains controlled by verified business data.

---

# 20. Opportunity Scoring

The matrix may use automated or manual opportunity scoring.

Potential factors include:

* search demand
* service value
* business priority
* competition
* current ranking opportunity
* current impressions
* location importance
* existing authority
* conversion potential
* content differentiation potential
* commercial relevance

A conceptual score may be used to sort opportunities.

Do not overcomplicate the system if a simpler priority model works.

---

# 21. Page Priority

Recommended page priority values:

## P0 — Foundational

Critical market/service combinations.

## P1 — High Priority

Strong commercial or search opportunity.

## P2 — Expansion

Useful secondary geographic opportunities.

## P3 — Experimental / Long Tail

Lower-volume or future opportunities.

Priority is a build-planning tool.

It is not a requirement that P3 opportunities remain unbuilt indefinitely.

---

# 22. Page Generation

The matrix may directly power page-generation systems.

Conceptually:

```text
Service Data
+
Location Data
+
Relationship Data
+
Page Template
=
Candidate Page
```

This is an intended capability of the architecture.

Generation should reduce repetitive implementation work.

---

# 23. Generated Page Lifecycle

A generated page may move through:

```text
candidate
→ generated draft
→ content enrichment
→ QA
→ published noindex
→ indexable
```

or:

```text
candidate
→ generated draft
→ rejected / deferred
```

Not every generated page must reach indexable status.

---

# 24. Generation Is Not Publication Approval

The project should not fear generation.

The concern is what is publicly represented and indexed.

Claude Code may generate large candidate inventories when useful for:

* QA
* content analysis
* scalability testing
* route validation
* layout testing
* internal relationship modeling

These may remain:

* development-only
* unpublished
* noindex

until ready.

---

# 25. Content Differentiation

The matrix itself will often provide only:

```text
Service
+
Location
```

That is not enough by itself to create strong local content.

Indexable pages should ideally incorporate additional useful context such as:

* market relationship
* local property characteristics
* likely customer use cases
* approved nearby areas
* local audience needs
* service-specific problems
* market-specific proof where available
* verified municipal information where relevant

Do not invent local details merely to differentiate pages.

---

# 26. Location Test

Before intentional indexation, ask:

> If the city name changed, would nearly all of this page still make sense?

If yes:

* strengthen the content
* add legitimate local context
* reduce duplication
* or keep the page noindex until improved

This test should not prevent draft generation.

---

# 27. Service Test

Ask:

> If the service name changed, would nearly all the page still work?

If yes, the service-specific content needs improvement.

Local pages should explain the actual service rather than act as generic city pages.

---

# 28. Search Intent Test

A service + location page should represent a plausible search or customer intent.

Example:

```text
sewer camera inspection san diego
```

is clearly meaningful.

More obscure combinations may still be useful, but they should be evaluated in context rather than assumed to deserve the same priority.

---

# 29. Internal Linking Use

The matrix may help power internal-link suggestions.

Example:

A Las Vegas market page may use matrix relationships to determine which services are relevant in Las Vegas.

A sewer-camera page may use the matrix to identify major markets where that service is offered.

However:

```text
Matrix Relationship
≠
Automatic Public Link
```

The final link should be:

* useful
* live
* relevant
* appropriate for the page

---

# 30. Navigation Guardrail

Do not expose all 10,422 relationships through:

* header menus
* footer grids
* service lists
* location lists
* HTML sitemap

Large structured datasets should remain behind a useful user-facing hierarchy.

---

# 31. Related Service Modules

Matrix data may support modules such as:

```text
Services Available in Henderson
```

or:

```text
Sewer Services in San Diego
```

but modules should display:

* useful approved services
* live destinations
* reasonable card counts

not every possible relationship automatically.

---

# 32. Related Location Modules

Likewise, service pages may contain:

```text
Areas We Serve for Sewer Camera Inspection
```

using relevant live pages.

Do not create giant lists solely for SEO.

---

# 33. Sitemap Relationship

The matrix should not directly determine sitemap inclusion.

The sitemap should generally derive from:

```text
Live
+
Canonical
+
Indexable
```

page inventory.

Matrix relationships may produce candidate routes, but only intentionally indexable routes should normally enter the sitemap.

---

# 34. Schema Relationship

The matrix may inform:

```text
Service.areaServed
```

relationships.

However, schema should not necessarily list hundreds of individual locations on every service node.

Use structured data in a way that remains:

* accurate
* maintainable
* semantically useful

Detailed schema rules remain in:

`15-schema-entity-strategy.md`

---

# 35. Market Hubs

Market hubs should remain central geographic nodes.

Conceptually:

```text
Las Vegas Market
    ↓
Relevant Services
    ↓
Approved Local Service Pages
    ↓
Approved Locations
```

The matrix can power these relationships.

---

# 36. Canonical Service Authority

Canonical service pages remain the strongest general authority pages for service topics.

Example:

```text
/services/sewer-camera-inspection/
```

should remain the primary general source for sewer camera inspection.

Localized variants should address local intent.

They should not unnecessarily compete with the canonical service page for broad national/general intent.

---

# 37. Service + Market Relationships

High-value combinations may often begin at the primary market level.

Example:

```text
Sewer Camera Inspection
×
St. Louis
```

before expanding into many smaller communities.

This provides a scalable hierarchy:

```text
Canonical Service
→ Market Service Page
→ Local Service Pages
```

where appropriate to the final URL architecture.

---

# 38. Location Expansion

Within a market, prioritize locations using a combination of:

* business importance
* search demand
* population/property opportunity
* existing visibility
* customer demand
* conversion value
* geographic relevance

Do not rely on population alone.

---

# 39. Cohort Generation

Large matrix expansion should preferably be handled in cohorts.

Example:

```text
Cohort 1:
Top Sewer Camera Inspection Locations

Cohort 2:
Top Hydro Jetting Locations

Cohort 3:
Top Pre-Purchase Inspection Locations
```

or by market:

```text
St. Louis Cohort 1
San Diego Cohort 1
Las Vegas Cohort 1
```

Cohorts improve:

* implementation efficiency
* QA
* analytics
* content consistency
* indexation control

---

# 40. Cohort Build Workflow

A useful workflow is:

```text
Select Relationships
→ Generate Pages
→ Enrich Content
→ QA
→ Publish Noindex or Indexable
→ Measure
→ Improve Template
→ Generate Next Cohort
```

This allows the project to learn from real-world performance.

---

# 41. Performance Feedback

Post-launch performance can update matrix priority.

Useful signals include:

* impressions
* clicks
* rankings
* conversion activity
* lead quality
* related-query growth
* internal-link performance
* local market growth

A relationship initially marked `candidate` may become `strong`.

A `strong` opportunity may later be deprioritized if real search behavior does not support it.

---

# 42. Search Console Feedback

Search Console can reveal service + location combinations that users are already searching for.

Example:

A general Las Vegas service page may begin receiving impressions for a specific nearby city.

That may justify:

```text
Search Demand
→ Add Matrix Relationship
→ Generate Candidate
→ Evaluate
```

This feedback loop should be encouraged.

---

# 43. Bing and AI Discovery Feedback

Bing, AI referral behavior, and other search ecosystems may also reveal geographic opportunities.

Do not restrict opportunity discovery to Google keyword tools.

---

# 44. Conversion Feedback

Matrix prioritization should incorporate lead quality.

A service/location combination with modest traffic but strong qualified lead value may deserve higher priority than a higher-volume informational combination.

---

# 45. Commercial Relationships

The matrix may also model commercial service/location relationships.

Examples:

```text
Commercial Hydro Jetting
×
Las Vegas
```

```text
Commercial Sewer Inspection
×
San Diego
```

Commercial matrix opportunities should connect with:

`09-audience-commercial-matrix.md`

where audience context is relevant.

---

# 46. Audience Relationships

The service × location matrix does not need to independently contain every audience combination.

Audience relationships should generally remain in:

`09-audience-commercial-matrix.md`

Systems may join datasets when needed.

Example:

```text
Home Buyer
+
Pre-Purchase Sewer Inspection
+
San Diego
```

may be derived from:

```text
Audience ↔ Service
+
Service ↔ Location
```

rather than duplicating every possible three-way relationship.

---

# 47. Avoid Data Explosion

The project should use relational data rather than manually creating every permutation in every registry.

Prefer:

```text
Service Registry
+
Location Registry
+
Service-Location Relationships
+
Audience Relationships
```

over manually maintaining enormous duplicate tables.

The data architecture should make scale manageable.

---

# 48. Opportunity vs. Business Truth

The matrix can contain opportunities that have not yet become strategic priorities.

Clearly distinguish:

```text
Potential SEO Opportunity
```

from:

```text
Verified Business Capability
```

Only verified services and actual service areas should be publicly represented as offered.

---

# 49. No Fake Local Proof

Matrix relationships must never be used to generate fake:

* local testimonials
* local case studies
* local technician names
* years serving a community
* local office addresses
* local phone numbers
* project counts
* response times

Use only verified evidence.

---

# 50. No City-Token Content

A generation system should not create:

```text
same page
+
replace city name
```

and consider the work complete.

The matrix can automate the foundational structure.

Content enrichment should improve pages intended for indexation.

---

# 51. Content Enrichment Sources

Useful enrichment may come from:

* location registry data
* primary-source municipal research
* market-specific content
* real-estate patterns
* business-provided information
* service-specific FAQs
* customer questions
* verified local proof
* nearby-service relationships

Not every page requires every enrichment category.

---

# 52. Build Efficiency

Claude Code should be encouraged to build reusable generation systems.

Potential architecture:

```text
Service Registry
        +
Location Registry
        +
Service-Location Matrix
        +
Page Status Registry
        +
Content Data
        ↓
Reusable Page Templates
        ↓
Generated Routes
```

This is preferred to manually hard-coding hundreds of local pages.

---

# 53. Type Safety

Matrix relationships should use typed identifiers where practical.

Example:

```ts
type ServiceId = string;
type LocationId = string;

interface ServiceLocation {
  serviceId: ServiceId;
  locationId: LocationId;
  relationship: "core" | "strong" | "supported" | "candidate" | "exclude";
}
```

Build-time validation should detect:

* nonexistent service IDs
* nonexistent location IDs
* duplicate relationships
* excluded relationships being published unintentionally

---

# 54. Build Validation

Useful automated checks may include:

```text
Does service exist?
Does location exist?
Is relationship excluded?
Does generated route conflict?
Does indexable page have required metadata?
Does canonical resolve?
```

Automation should make the system safer while preserving build speed.

---

# 55. Matrix Maintenance

The matrix should evolve.

Relationships may be:

* added
* reprioritized
* excluded
* upgraded
* downgraded

based on:

* business changes
* market research
* search data
* service changes
* conversion data

This is normal maintenance.

A strategic decision-log entry is not required for routine matrix refinement.

---

# 56. Decision Log Relationship

Use `22-decisions-change-log.md` only if matrix changes reflect a material strategic decision.

Examples:

* sewer repair becomes an offered service
* a primary market is added
* a primary market is removed
* service territory materially changes

Routine additions such as:

```text
Add Henderson as a candidate location relationship
```

do not require a formal strategic decision entry.

---

# 57. Master Page Build List Relationship

`04-master-page-build-list.md` tracks page lifecycle.

The matrix identifies service/location relationships.

Conceptually:

```text
Service-Location Matrix
→ Opportunity / Relationship

Master Page Build List
→ Page Lifecycle / Indexation
```

These systems should work together.

Neither should create unnecessary manual duplication.

---

# 58. URL Strategy Relationship

The matrix should not invent URL patterns.

Generated routes should follow:

`05-url-routing-strategy.md`

The URL strategy defines how service/location relationships are expressed publicly.

---

# 59. Internal Linking Relationship

The matrix can inform link opportunities.

Detailed user-facing linking behavior should follow:

`16-internal-linking-strategy.md`

---

# 60. Analytics Relationship

Where useful, generated service/location pages should preserve canonical context such as:

```text
service_id
market_id
location_id
page_type
```

This allows cohort and page-family performance analysis.

See:

`19-analytics-measurement.md`

---

# 61. Design Relationship

Service + location pages should generally use:

```text
location-service-page-performance.webp
```

as their primary structural design reference.

Location hubs should generally use:

```text
location-page-performance.webp
```

See:

`18-design-system.md`

---

# 62. Indexation Decision Framework

A generated page is a strong indexation candidate when:

```text
Real Service
+
Real Coverage
+
Clear Search Intent
+
Useful Page
+
Distinct Enough Content
+
Logical Internal Links
+
Technical Quality
```

Not every factor needs a numerical score.

Use practical judgment.

---

# 63. Keep Noindex When Appropriate

A generated page may remain noindex when:

* content is incomplete
* local differentiation is weak
* opportunity is still being evaluated
* service coverage needs verification
* page is part of a future cohort
* page exists for internal architecture/testing

Noindex is a useful lifecycle state.

It is not a failure.

---

# 64. Exclusion Rules

Mark a relationship `exclude` when:

* service is not offered there
* geography is outside service coverage
* the combination is misleading
* geographic entity is invalid
* business has explicitly excluded the area
* page would create inaccurate representation

Excluded relationships should not produce public service claims.

---

# 65. Matrix Success Criteria

The matrix is successful when it helps the project:

* find opportunities faster
* generate pages efficiently
* understand service coverage
* prioritize markets
* build internal relationships
* scale local SEO
* control indexation
* learn from performance

It is failing if it becomes:

* an administrative spreadsheet that prevents implementation
* an automatic 10,422-page indexation system
* a source of fake local claims

---

# 66. Core Matrix Model

The preferred relationship is:

```text
Canonical Services
        +
Canonical Geography
        ↓
Service × Location Matrix
        ↓
Opportunity Discovery
        ↓
Candidate Generation
        ↓
Page Development
        ↓
Quality Evaluation
        ↓
Selective Indexation
        ↓
Performance Feedback
```

---

# 67. Final Governing Principle

> **The Service × Location Matrix is an active generation, research, relationship, and prioritization system—not a pre-build approval gate and not an automatic indexing engine. Use the 10,422 service-location relationships of the project productively to research, generate, organize, and scale the website. Keep business truth strict, allow development to move quickly, and control SEO risk at the point of intentional indexation through relevance, usefulness, differentiation, and technical quality.**
