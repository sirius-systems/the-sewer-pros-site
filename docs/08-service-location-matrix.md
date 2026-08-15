# The Sewer Pros — Service × Location Matrix

**Document:** `08-service-location-matrix.md`
**Project:** The Sewer Pros Website Rebuild
**Repository:** `the-sewer-pros-site`
**Status:** Foundation / Opportunity Matrix Authority
**Document Role:** Service-to-geography relationship, opportunity classification, and matrix-governance source of truth
**Primary Markets:** St. Louis, MO; San Diego, CA; Las Vegas, NV
**Canonical Services:** 18
**Canonical Geographic Records:** 579
**Complete Mathematical Relationships:** 10,422

---

# 1. Purpose

This document defines how canonical services and canonical geographic records relate within The Sewer Pros website opportunity model.

It establishes:

* service × location relationship logic
* matrix status classifications
* eligibility rules
* service-family rules
* geographic eligibility rules
* market-specific restrictions
* commercial relationship rules
* launch-candidate interpretation
* operational validation gates
* indexation recommendations
* canonical route expectations
* matrix prioritization
* machine-readable matrix requirements
* safeguards against automatic mass publishing

This document answers:

> **Which service and geography combinations represent potentially valid search, user, commercial, or content opportunities?**

It does **not** independently answer:

> **Which pages should be published?**

That authority belongs to:

`04-master-page-build-list.md`

---

# 2. Critical Matrix Rule

The project currently contains:

```text
18 canonical service records
×
579 canonical geographic records
=
10,422 mathematical relationships
```

The matrix deliberately preserves all 10,422 relationships.

That does **not** mean the website should contain 10,422 service + location pages.

The governing distinction is:

```text
Matrix Relationship
≠
Approved Page
```

and:

```text
Valid Opportunity
≠
Publishing Authorization
```

---

# 3. Governing Document Hierarchy

The service-location architecture should be interpreted in this order:

```text
06-master-service-registry.md
↓
Defines canonical services and service eligibility

07-master-location-registry.md
↓
Defines canonical geographies and geographic eligibility

08-service-location-matrix.md
↓
Defines potential service × geography relationships

04-master-page-build-list.md
↓
Authorizes specific pages

05-url-routing-strategy.md
↓
Defines the canonical URL for approved pages

Next.js Approved Page Registry
↓
Generates production routes
```

If the matrix and Master Page Build List appear to disagree about whether a page should exist:

**The Master Page Build List controls publication.**

If a matrix-generated candidate URL conflicts with the finalized routing architecture:

**The URL Routing Strategy controls the public URL.**

---

# 4. Matrix Summary

## Total Relationships

| Market        | Geographic Records | Services | Relationships |
| ------------- | -----------------: | -------: | ------------: |
| St. Louis, MO |                218 |       18 |         3,924 |
| San Diego, CA |                222 |       18 |         3,996 |
| Las Vegas, NV |                139 |       18 |         2,502 |
| **Total**     |            **579** |   **18** |    **10,422** |

The calculation is intentionally comprehensive.

Every canonical geographic record is evaluated against every canonical service record so that:

* valid opportunities are visible
* weak relationships remain visible
* exclusions are explicit
* market restrictions are explicit
* future opportunities do not require rebuilding the research universe

---

# 5. Matrix Status Totals

The current normalized matrix contains:

| Matrix Status                       | Relationships |
| ----------------------------------- | ------------: |
| `launch_candidate`                  |           715 |
| `phase_2_candidate`                 |         2,932 |
| `conditional_location`              |           402 |
| `operational_confirmation_required` |         1,388 |
| `selective_candidate`               |           747 |
| `selective_low_commercial_fit`      |         2,975 |
| `selective_low_intent_fit`          |           122 |
| `manual_review_location`            |             0 |
| `research_only_location`            |           154 |
| `hold_location`                     |           626 |
| `not_applicable_market`             |           361 |
| **Total**                           |    **10,422** |

These statuses classify opportunity.

They are not route-generation permissions.

---

# 6. Matrix Status Definitions

## `launch_candidate`

Represents one of the strongest service × geography opportunities in the mathematical matrix.

Typical conditions include:

* high-priority location
* eligible service
* appropriate intent relationship
* confirmed market service availability
* no geographic exclusion

Meaning:

```text
Strong Opportunity
```

Not:

```text
Automatically Build Page
```

A `launch_candidate` still requires explicit inclusion in:

`04-master-page-build-list.md`

---

## `phase_2_candidate`

Represents a potentially valid relationship better suited to post-launch expansion.

Typical causes include:

* Phase 2 geography
* lower immediate priority
* valid but non-launch service
* need for stronger search evidence
* need for differentiated content

---

## `conditional_location`

Represents an otherwise plausible service relationship where the geographic entity itself requires operational confirmation.

Typical examples include:

* outer service territory
* extended service area
* dispatch-sensitive location

No customer-facing page should be generated until service coverage is verified.

---

## `operational_confirmation_required`

Represents a service-location relationship where operational availability is not yet confirmed.

This is especially important for:

**Las Vegas, NV**

The Las Vegas geographic opportunity model is established, but individual services remain subject to operational confirmation.

---

## `selective_candidate`

Represents a valid but intentionally non-systematic opportunity.

Typical uses include:

* preventative maintenance
* second-opinion inspection
* narrower commercial services
* specialized location contexts

These combinations require additional strategic review.

---

## `selective_low_commercial_fit`

Represents a commercial service relationship against a geography that lacks a strong commercial-priority signal.

The relationship is retained for research.

It should not be interpreted as a recommendation to create a commercial landing page.

---

## `selective_low_intent_fit`

Represents a service-location relationship where the service may technically apply but the search or user-intent fit is weak.

Examples may include:

* pre-purchase inspection in a geography without strong residential/real-estate signals
* specialized diagnostic intent in a location with limited supporting evidence

---

## `research_only_location`

Represents a relationship involving a geographic entity retained primarily for research.

Examples may include:

* landmarks
* corridors
* parks
* airport areas
* stadium areas
* weak standalone geographic concepts

Do not generate pages from these relationships by default.

---

## `hold_location`

Represents a geographic relationship intentionally excluded from normal matrix expansion.

Typical causes include:

* weak page value
* uncertain location identity
* insufficient search intent
* poor local-service fit

---

## `not_applicable_market`

Represents a service that does not apply to the market.

Primary example:

```text
St. Louis Sewer Lateral Inspection & Municipal Reporting
```

must not generate service relationships in:

```text
San Diego
Las Vegas
```

---

# 7. Matrix Status vs Page Status

Matrix status and page status are separate fields.

Example:

```text
matrix_status = launch_candidate
```

does not mean:

```text
page_status = launch
```

The relationship may still be:

```text
research opportunity only
```

until explicitly approved.

Likewise, a page can be manually promoted into the Master Page Build List even when its matrix classification was originally more conservative, provided the strategic decision is documented.

---

# 8. Index Recommendation Model

The machine-readable matrix may contain recommendations comparable to:

```text
index_launch_candidate
selective_candidate
hold
noindex
not_applicable
```

These are **research recommendations**.

The production indexability authority remains:

`04-master-page-build-list.md`

A matrix recommendation must never directly populate:

* sitemap
* robots rules
* canonical metadata
* `generateStaticParams()`
* navigation
* internal-link modules

without page authorization.

---

# 9. Recommended Phase Model

Matrix records may contain phases such as:

```text
launch
phase_2
phase_3
selective
hold
```

These fields help prioritize research.

They are not substitutes for the Master Page Build List.

---

# 10. Relationship Scopes

Service-location relationships should be classified into logical scopes.

Recommended scopes include:

```text
core
derived_high_intent
commercial
market_specific
```

---

# 11. Core Relationship Scope

The following six services form the primary core matrix:

```text
Sewer Camera Inspection
Sewer Cleaning
Hydro Jetting
Sewer Cleaning + Camera Inspection
Sewer Line Locating
Drain Cleaning
```

These are the default services eligible for broad geographic opportunity analysis.

All six have:

```text
service_matrix_rule = full
```

subject to:

* location eligibility
* market service availability
* page approval
* content quality

---

# 12. Core Matrix Principle

For an eligible Tier 1 geography in a confirmed market, a core service may produce a strong relationship.

Example:

```text
Chesterfield
+
Sewer Camera Inspection
=
Strong Matrix Opportunity
```

Potential route:

```text
/st-louis-mo/chesterfield/sewer-camera-inspection/
```

But publication still requires explicit Master Page Build List approval.

---

# 13. Derived High-Intent Matrix

The derived service set includes:

```text
Pre-Purchase Sewer Inspection
Recurring Sewer Backup Diagnosis
Preventative Sewer Maintenance
Independent Sewer Inspection / Second Opinion
```

These services require more selective matrix logic than the six established core services.

---

# 14. Pre-Purchase Sewer Inspection Rule

Canonical service:

```text
svc-pre-purchase-sewer-inspection
```

Matrix rule:

```text
full_on_residential_real_estate_locations
```

Strongest location signals include:

```text
residential
real_estate
```

Potential audiences include:

* home buyers
* home sellers
* real estate agents
* investors
* home inspectors

A geography does not need a dedicated pre-purchase page merely because residential properties exist there.

Priority should favor areas with meaningful:

* property transactions
* residential search demand
* referral opportunity
* housing-stock relevance
* conversion potential

---

# 15. Recurring Sewer Backup Diagnosis Rule

Canonical service:

```text
svc-recurring-sewer-backup-diagnosis
```

Matrix rule:

```text
full_on_residential_property_management_locations
```

Strongest signals include:

```text
residential
property_management
commercial
```

Potential page intent:

> Why does my sewer keep backing up in this area, and how can The Sewer Pros diagnose the cause?

This should remain a diagnostic service, not another generic sewer-cleaning page.

---

# 16. Preventative Sewer Maintenance Rule

Canonical service:

```text
svc-preventative-sewer-maintenance
```

Matrix rule:

```text
selective
```

Priority should favor:

* recurring-problem properties
* property managers
* multifamily
* commercial properties
* restaurants
* HOAs
* locations where maintenance intent is meaningful

Do not generate preventative-maintenance pages across every residential geography.

---

# 17. Independent Second-Opinion Rule

Canonical service:

```text
svc-independent-sewer-second-opinion
```

Matrix rule:

```text
selective
```

Potential high-value intent includes:

* second opinion before sewer replacement
* independent inspection after a repair recommendation
* third-party sewer evaluation
* verification of major sewer findings

Geographic expansion should occur only when:

* search intent is differentiated
* local conversion value exists
* content does not cannibalize camera inspection
* independent-inspection positioning remains clear

---

# 18. Commercial Matrix

The commercial service set includes:

```text
Commercial Sewer Camera Inspection
Commercial Sewer Cleaning
Commercial Hydro Jetting
Commercial Drain Cleaning
Commercial Sewer Line Locating
Commercial Preventative Sewer & Drain Maintenance
Commercial Grease & Sludge Removal
```

Commercial services use separate geographic-fit logic.

---

# 19. Commercial Geography Rule

Commercial pages should be generated only against geographies with meaningful commercial fit.

Useful signals include:

```text
commercial
hospitality
restaurants
property_management
multifamily
industrial
mixed_use
```

A location being large does not automatically make every commercial service × location combination valuable.

---

# 20. Full Commercial Eligibility

Commercial services with:

```text
full_on_commercial_eligible_locations
```

include:

```text
Commercial Sewer Camera Inspection
Commercial Sewer Cleaning
Commercial Hydro Jetting
Commercial Drain Cleaning
Commercial Preventative Sewer & Drain Maintenance
```

When combined with a geography whose commercial matrix is strong, these may become high-value opportunities.

---

# 21. Selective Commercial Services

The following remain more selective:

```text
Commercial Sewer Line Locating
Commercial Grease & Sludge Removal
```

They should not be mass-generated across commercially tagged geographies without additional demand analysis.

---

# 22. Low Commercial Fit Rule

A commercial service combined with a primarily residential geography may receive:

```text
selective_low_commercial_fit
```

Example conceptual relationship:

```text
Residential-focused suburb
+
Commercial Sewer Line Locating
=
Relationship Retained
+
Low Commercial Priority
```

The relationship remains useful for future planning but should not normally generate a page.

---

# 23. Commercial-District Priority

Geographic entities explicitly classified as:

```text
commercial_or_mixed_use_district
```

may receive stronger commercial relationships than residential-service relationships.

Examples include:

### St. Louis

```text
Earth City
Chesterfield Valley
Downtown St. Louis
Cortex
```

### San Diego

```text
Mission Valley
Kearny Mesa
Sorrento Mesa
Otay Mesa
Downtown San Diego
```

### Las Vegas

```text
Las Vegas Strip
Downtown Las Vegas
Henderson Industrial
North Las Vegas Industrial
Paradise Road
```

These relationships remain subject to page authorization.

---

# 24. St. Louis Market-Specific Matrix

Canonical service:

```text
svc-stl-sewer-lateral-inspection-reporting
```

Matrix rule:

```text
selective_st_louis_only
```

Allowed market:

```text
st-louis-mo
```

Disallowed markets:

```text
san-diego-ca
las-vegas-nv
```

Relationships outside St. Louis must remain:

```text
not_applicable_market
```

---

# 25. Municipal Sewer Lateral Rule

Even within St. Louis, a location-service relationship does not establish that:

* the municipality has a sewer lateral program
* The Sewer Pros is approved by that program
* The Sewer Pros may submit reports there
* a report is required
* program requirements are identical across municipalities

Program-level facts require specific validation before publication.

---

# 26. Las Vegas Matrix Gate

Las Vegas contains:

```text
139 geographic records
×
18 services
=
2,502 relationships
```

These relationships are useful for planning.

However, individual service availability remains subject to operational confirmation.

Therefore, many Las Vegas rows correctly receive:

```text
operational_confirmation_required
```

instead of:

```text
launch_candidate
```

---

# 27. Las Vegas Activation Requirement

Before promoting any Las Vegas service-location relationship to a customer-facing page, verify:

1. service is actually offered
2. technicians or resources are available
3. geographic coverage is correct
4. lead routing is operational
5. customer inquiries can be fulfilled
6. any applicable licensing/business requirements are satisfied
7. service-specific claims are accurate

Only after validation should selected rows be promoted into:

`04-master-page-build-list.md`

---

# 28. Location Status Influence

Location status heavily influences matrix classification.

## Tier 1 / `launch_candidate`

May support strong matrix opportunities.

## `phase_2_candidate`

Usually produces Phase 2 or selective relationships.

## `phase_3_validation`

Produces conditional relationships.

## `research_only`

Produces research-only or hold relationships.

## `manual_review`

Should remain excluded until geographic identity is resolved.

---

# 29. Full Location Matrix Rule

A geographic record with:

```text
location_service_matrix = full
```

is broadly eligible for applicable service analysis.

It does not mean:

```text
18 service pages should exist for this location.
```

It means:

```text
The location is strong enough to evaluate broadly.
```

---

# 30. Selective Location Matrix Rule

A geography with:

```text
location_service_matrix = selective
```

should produce pages only where:

* service intent is strong
* search value exists
* content can be differentiated
* conversion potential is meaningful

---

# 31. Conditional Location Matrix Rule

A location with:

```text
location_service_matrix = conditional
```

requires operational validation before normal page consideration.

Typical examples:

* outer territories
* distant service areas
* dispatch-sensitive markets

---

# 32. Hold Location Rule

A location with:

```text
location_service_matrix = hold
```

must not generate standard service-location pages.

The relationship may remain stored for:

* future research
* campaigns
* commercial evaluation
* data completeness

---

# 33. Canonical Route Pattern — General Services

For an approved non-commercial local service page:

```text
/{canonical-location-path}/{service}/
```

Standard location example:

```text
/san-diego-ca/carlsbad/sewer-camera-inspection/
```

St. Louis nested geography example:

```text
/st-louis-mo/st-louis-city/soulard/sewer-camera-inspection/
```

when explicitly approved.

---

# 34. Canonical Route Pattern — Commercial Services

For an approved local commercial service:

```text
/{canonical-location-path}/commercial/{service}/
```

Example:

```text
/san-diego-ca/mission-valley/commercial/hydro-jetting/
```

when authorized.

---

# 35. Market-Hub Matrix Rows

The complete mathematical matrix includes market-hub relationships because each market hub is part of the normalized geographic registry.

Examples of matrix research relationships may conceptually produce candidate paths such as:

```text
/st-louis-mo/sewer-camera-inspection/
/san-diego-ca/hydro-jetting/
```

These rows are useful for:

* search-opportunity analysis
* market/service relationship modeling
* future strategic evaluation

However, the finalized website routing model does **not automatically authorize market-level service routes**.

Current project architecture uses:

```text
/services/{service}/
```

for company-wide canonical service pages and selected:

```text
/{market}/{location}/{service}/
```

pages for local-service intent.

Therefore:

> **Market-hub matrix rows remain relationship data unless separately approved in the Master Page Build List.**

Do not generate market-service pages solely because these rows exist in the source matrix.

---

# 36. Market-Specific Route Exception

A genuine market-specific service may have a direct market route.

Current approved example:

```text
/st-louis-mo/sewer-lateral-inspection-reporting/
```

This is an intentional exception because the service itself is St. Louis-specific.

It should not be confused with generic market-service matrix generation.

---

# 37. Source Matrix `canonical_url` Field

The machine-readable research matrix contains a `canonical_url` field for each mathematical relationship.

Within this project's finalized governance:

> The matrix URL is the **candidate relationship path**, not necessarily an approved production canonical.

For any actual public page:

```text
04-master-page-build-list.md
+
05-url-routing-strategy.md
```

take precedence.

This distinction prevents earlier research-generation conventions from overriding finalized architecture.

---

# 38. Current Launch Service + Location Pages

The Master Page Build List currently authorizes **14 service + location pages** for initial launch.

These represent only a tiny fraction of the 10,422 research relationships.

---

# 39. St. Louis Launch Service + Location Pages

Approved:

```text
/st-louis-mo/st-louis-city/sewer-camera-inspection/

/st-louis-mo/chesterfield/sewer-camera-inspection/

/st-louis-mo/ballwin/pre-purchase-sewer-inspection/

/st-louis-mo/st-charles/pre-purchase-sewer-inspection/

/st-louis-mo/florissant/sewer-cleaning/

/st-louis-mo/chesterfield/hydro-jetting/
```

Count:

```text
6
```

---

# 40. San Diego Launch Service + Location Pages

Approved:

```text
/san-diego-ca/san-diego/sewer-camera-inspection/

/san-diego-ca/san-marcos/sewer-camera-inspection/

/san-diego-ca/carlsbad/sewer-camera-inspection/

/san-diego-ca/chula-vista/sewer-camera-inspection/

/san-diego-ca/escondido/sewer-cleaning/

/san-diego-ca/oceanside/sewer-cleaning/

/san-diego-ca/mission-valley/hydro-jetting/

/san-diego-ca/carlsbad/pre-purchase-sewer-inspection/
```

Count:

```text
8
```

---

# 41. Las Vegas Launch Matrix Status

No Las Vegas service + location page is currently approved for generation.

Initial high-priority validation targets include combinations involving:

```text
Las Vegas
Henderson
North Las Vegas
Summerlin
```

and services such as:

```text
Sewer Camera Inspection
Sewer Cleaning
Hydro Jetting
Pre-Purchase Sewer Inspection
```

These remain:

```text
hold / operational confirmation
```

until promoted through the Master Page Build List.

---

# 42. Launch Matrix Compression

Current strategic compression is:

```text
10,422 researched relationships
↓
715 strongest mathematical launch candidates
↓
14 explicitly approved initial service + location pages
```

This is intentional.

The project is not attempting to publish the entire mathematically strong Tier 1 matrix at launch.

---

# 43. Why Launch Is Selective

Publishing only a small initial subset allows the project to:

* establish canonical services first
* establish market hubs
* establish location hubs
* test local service performance
* gather Search Console data
* gather conversion data
* evaluate content differentiation
* avoid crawl bloat
* avoid index bloat
* avoid doorway-page patterns
* prevent unnecessary cannibalization

---

# 44. Opportunity Matrix vs Publishing Matrix

The project should conceptually maintain two different layers.

## Opportunity Matrix

Contains:

```text
10,422 relationships
```

Purpose:

* research
* scoring
* prioritization
* future expansion
* gap analysis

## Publishing Matrix

Contains only relationships that have been explicitly approved as pages.

Purpose:

* route generation
* content production
* sitemap
* internal linking
* indexation

The Master Page Build List acts as the publishing matrix.

---

# 45. Matrix Relationship ID

Each relationship should have a stable machine-readable ID.

Recommended model:

```text
{market}::{location}::{service}
```

Examples:

```text
st-louis-mo::chesterfield::svc-sewer-camera-inspection
```

```text
san-diego-ca::carlsbad::svc-pre-purchase-sewer-inspection
```

```text
las-vegas-nv::henderson::svc-hydro-jetting
```

Market-hub relationships may use:

```text
{market}::_market::{service}
```

These IDs are internal identifiers and must not become URLs.

---

# 46. Machine-Readable Matrix Fields

The current matrix structure supports fields comparable to:

```text
matrix_id
market
location_name
location_slug
location_url
location_type
parent_location
source_cluster
location_launch_tier
location_index_status
location_priority_tags
location_service_matrix
location_commercial_matrix
location_validation_status
service_id
service_name
service_slug
service_type
service_family
service_launch_tier
service_source_status
service_matrix_rule
market_service_status
relationship_scope
matrix_status
index_recommendation
recommended_phase
canonical_url
matrix_reason
```

These fields should be preserved in the repository machine-readable source.

---

# 47. Recommended TypeScript Matrix Model

Conceptually:

```ts
export interface ServiceLocationRelationship {
  matrixId: string

  marketId: string

  locationId: string
  locationName: string
  locationCanonicalUrl: string
  locationType: string
  locationStatus: string
  locationPriorityTags: string[]
  locationServiceMatrix: MatrixEligibility
  locationCommercialMatrix: MatrixEligibility
  locationValidationStatus: string

  serviceId: string
  serviceName: string
  serviceSlug: string
  serviceType: string
  serviceFamily: string
  serviceLaunchTier: string
  serviceMatrixRule: string
  marketServiceStatus: string

  relationshipScope:
    | 'core'
    | 'derived_high_intent'
    | 'commercial'
    | 'market_specific'

  matrixStatus: MatrixStatus
  indexRecommendation: string
  recommendedPhase: string

  candidatePathname: string
  matrixReason: string
}
```

---

# 48. Recommended Matrix Status Type

```ts
export type MatrixStatus =
  | 'launch_candidate'
  | 'phase_2_candidate'
  | 'conditional_location'
  | 'operational_confirmation_required'
  | 'selective_candidate'
  | 'selective_low_commercial_fit'
  | 'selective_low_intent_fit'
  | 'manual_review_location'
  | 'research_only_location'
  | 'hold_location'
  | 'not_applicable_market'
```

---

# 49. Recommended Matrix Eligibility Type

```ts
export type MatrixEligibility =
  | 'full'
  | 'selective'
  | 'conditional'
  | 'hold'
```

---

# 50. Machine-Readable Source of Truth

The repository preserves both formats.

**Current repository locations:**

```text
data/matrices/service-location-master-matrix.csv
data/matrices/service-location-master-matrix.json
```

The CSV supports spreadsheet analysis.

The JSON supports programmatic consumption, including the route/matrix cross-validation described in §112.

Both files were relocated from the repository root into `data/matrices/` to match the architecture defined in `02-nextjs-technical-architecture.md` §10. Both remain version-controlled research source data, not build output.

---

# 51. Markdown Document Role

This Markdown document should **not** manually list all 10,422 rows.

Doing so would:

* create an unnecessarily large governance file
* increase maintenance risk
* duplicate machine-readable data
* make diffs difficult
* increase chances of inconsistency

Instead:

```text
08-service-location-matrix.md
```

defines:

* rules
* statuses
* interpretation
* publishing gates
* examples
* priority logic

while the CSV/JSON stores the full row-level dataset.

---

# 52. Matrix Generation Inputs

The mathematical matrix should be reproducible from:

```text
Master Service Registry
+
Master Location Registry
+
Service Matrix Rules
+
Market Service Availability
```

Conceptually:

```ts
for (const location of locations) {
  for (const service of services) {
    evaluateRelationship(location, service)
  }
}
```

This is acceptable for **research-data generation**.

It is not acceptable for public-page generation.

---

# 53. Research Matrix Generation

Permitted:

```ts
const relationships = locations.flatMap((location) =>
  services.map((service) =>
    evaluateServiceLocationRelationship(service, location)
  )
)
```

Purpose:

```text
Research
```

Not:

```text
Routes
```

---

# 54. Prohibited Route Generation

Do not do:

```ts
export function generateStaticParams() {
  return serviceLocationMatrix.map((relationship) => ({
    market: relationship.market,
    location: relationship.locationSlug,
    service: relationship.serviceSlug,
  }))
}
```

This would incorrectly convert the full research universe into public routes.

---

# 55. Correct Route Generation

Production route generation should use:

```text
04-master-page-build-list.md
```

or its machine-readable approved-page equivalent.

Conceptually:

```ts
const approvedLocalServicePages = pageRegistry.filter(
  (page) =>
    page.pageType === 'service-location' &&
    page.status === 'launch'
)
```

Only those records should feed:

```text
generateStaticParams()
```

---

# 56. Matrix-to-Page Promotion

To promote a relationship into a page:

```text
Matrix Opportunity
↓
Search Intent Review
↓
Business / Operational Review
↓
Cannibalization Review
↓
Content Differentiation Review
↓
Conversion Review
↓
Master Page Build List Approval
↓
Route Generation
↓
Content Build
↓
QA
↓
Indexation
```

---

# 57. Relationship Evaluation Questions

Before promoting a matrix row, ask:

1. Is the service genuinely available in the location?
2. Is the geography genuinely served?
3. Does distinct local service intent exist?
4. Does the page serve a meaningful user need?
5. Is there enough differentiated local information?
6. Would it compete with the parent location page?
7. Would it compete with the canonical service page?
8. Is the conversion opportunity meaningful?
9. Does the location have appropriate service fit?
10. Is the route useful enough to deserve indexing?

---

# 58. Matrix Scoring Philosophy

The matrix should not rely on one-dimensional search volume alone.

A strong candidate may reflect several factors:

```text
Service Importance
+
Geographic Priority
+
Customer Intent
+
Commercial Value
+
Operational Availability
+
Content Differentiation
+
Search Opportunity
```

Future scoring may add numeric weights, but the current status system should remain interpretable and transparent.

---

# 59. High-Priority Core Service Order

For local expansion, the default strategic service order should generally begin with:

1. Sewer Camera Inspection
2. Sewer Cleaning
3. Hydro Jetting
4. Pre-Purchase Sewer Inspection
5. Sewer Cleaning + Camera Inspection
6. Sewer Line Locating
7. Drain Cleaning
8. Recurring Sewer Backup Diagnosis

This is a prioritization framework, not automatic authorization.

Actual order may vary by geography and demand.

---

# 60. Sewer Camera Inspection Matrix Priority

Sewer camera inspection should generally be the strongest local matrix service because it supports:

* diagnostic intent
* homebuyer intent
* seller intent
* agent referrals
* second opinions
* line-condition questions
* real estate transactions

This service should receive early consideration across high-value residential and real-estate geographies.

---

# 61. Sewer Cleaning Matrix Priority

Sewer cleaning should receive early consideration where:

* recurring backups are common search intent
* property-management demand is strong
* established customer demand exists
* sewer-rooter terminology is relevant

---

# 62. Hydro Jetting Matrix Priority

Hydro jetting should receive priority where:

* heavy buildup intent is meaningful
* recurring sewer problems occur
* commercial activity is meaningful
* restaurant/food-service demand exists
* property-management maintenance is relevant

Commercial districts may justify hydro-jetting pages earlier than generic residential areas.

---

# 63. Pre-Purchase Matrix Priority

Pre-purchase inspection should receive priority where:

* real estate activity is strong
* older housing may increase buyer concern
* referral partnerships are valuable
* homebuyer search intent exists

This service can be especially valuable in:

* established neighborhoods
* older housing markets
* high-transaction communities

These characteristics must be researched rather than assumed.

---

# 64. Commercial Expansion Priority

Commercial service-location expansion should generally begin with:

1. Commercial Hydro Jetting
2. Commercial Sewer Cleaning
3. Commercial Drain Cleaning
4. Commercial Sewer Camera Inspection
5. Commercial Preventative Maintenance
6. Commercial Sewer Line Locating
7. Commercial Grease & Sludge Removal

The exact order should reflect real lead and market data.

---

# 65. Geographic Expansion Order

Default post-launch matrix expansion should generally follow:

```text
Approved Launch Locations
↓
Remaining Tier 1 Locations
↓
High-Value Phase 2 Municipalities
↓
Commercial Districts
↓
Selected Neighborhoods
↓
Validated Extended Territory
```

Do not expand purely by alphabetical order.

---

# 66. Market Expansion — St. Louis

Priority expansion should generally examine:

* remaining Tier 1 municipalities
* high-value St. Charles County locations
* West County
* Central County
* North County commercial/property-management areas
* selected St. Louis City neighborhoods
* commercial districts

St. Louis-specific sewer lateral opportunities should receive separate program-level review.

---

# 67. Market Expansion — San Diego

Priority expansion should generally examine:

* North County
* remaining Tier 1 cities
* City of San Diego high-value communities
* South Bay
* East County
* commercial/mixed-use districts

North County should remain an important service × location cluster.

---

# 68. Market Expansion — Las Vegas

After operational validation:

* Las Vegas
* Henderson
* North Las Vegas
* Summerlin
* Enterprise
* Paradise
* Spring Valley
* Centennial Hills
* Green Valley
* major master-planned communities

may be evaluated for residential service matrices.

Commercial expansion may prioritize:

* Las Vegas Strip
* Downtown Las Vegas
* Paradise / Resort Corridor
* industrial districts
* commercial corridors

---

# 69. Neighborhood Matrix Rule

Neighborhood service matrices require the strongest caution.

Avoid:

```text
6 services
×
60 neighborhoods
=
360 automatic pages
```

even if mathematically valid.

A neighborhood-service page should require:

* measurable intent
* meaningful local differentiation
* business value
* strong internal-link context
* low cannibalization risk

---

# 70. Thin Page Prevention

A matrix relationship should not become a page if the only difference would be:

```text
City Name
```

or:

```text
Neighborhood Name
```

A legitimate local service page should be able to provide unique value through relevant factors such as:

* local housing context
* property characteristics
* common customer situations
* sewer infrastructure context
* commercial property context
* municipal information
* market-specific service considerations
* verified service experience
* local FAQs

---

# 71. Doorway Page Prevention

The matrix must not be used to create pages whose primary purpose is:

> rank for every nearby city without providing meaningful standalone value.

The existence of structured data does not make doorway-style publishing acceptable.

Page authorization should remain editorial and strategic.

---

# 72. Cannibalization Review

Every proposed relationship should be compared against:

* canonical service page
* market hub
* location page
* other service + location pages
* audience pages
* commercial pages
* resource pages

Example:

```text
/san-diego-ca/carlsbad/
```

should target broad local company/service intent.

```text
/san-diego-ca/carlsbad/sewer-camera-inspection/
```

should target specific local camera-inspection intent.

These pages must have clearly differentiated roles.

---

# 73. Parent Service Relationship

Every service + location page should link contextually to its canonical service entity.

Example:

```text
/san-diego-ca/carlsbad/sewer-camera-inspection/
↓
/services/sewer-camera-inspection/
```

This helps preserve the site's topical hierarchy.

---

# 74. Parent Location Relationship

Every local service page should also relate to its location hub.

Example:

```text
/san-diego-ca/carlsbad/sewer-camera-inspection/
↓
/san-diego-ca/carlsbad/
```

Thus the page belongs simultaneously to:

```text
Service Context
+
Geographic Context
```

without requiring duplicate URLs.

---

# 75. Market Relationship

Every local service page should ultimately connect to its parent market.

Example:

```text
Carlsbad
↓
San Diego Market
```

The market relationship should be stored explicitly rather than inferred solely from visible copy.

---

# 76. Internal-Link Eligibility Rule

The complete 10,422-row matrix must not be used to produce links to unpublished pages.

Correct:

```text
Relationship exists
+
Destination approved
=
Link may be rendered
```

Incorrect:

```text
Relationship exists
=
Automatically create link
```

---

# 77. Sitemap Rule

No matrix row should enter the XML sitemap directly.

Only an approved page record satisfying:

```text
status = launch
indexable = true
```

may enter the sitemap.

---

# 78. Canonical Rule

A service-location page that is sufficiently valuable to publish should generally self-canonicalize.

Example:

```text
/san-diego-ca/carlsbad/sewer-camera-inspection/
```

canonical:

```text
/san-diego-ca/carlsbad/sewer-camera-inspection/
```

Do not publish hundreds of local pages and canonicalize all of them back to:

```text
/services/sewer-camera-inspection/
```

If the local page does not deserve its own canonical, it should generally not exist.

---

# 79. Noindex Rule

`noindex` should not be used as a workaround for mass matrix generation.

Preferred:

```text
Unapproved relationship
→
No route
```

not:

```text
Unapproved relationship
→
Route
→
noindex
```

Exception:

A specifically approved preview/validation page may temporarily exist with controlled noindex behavior when required by the Master Page Build List.

---

# 80. Matrix Data Validation

The matrix should validate that every relationship contains:

* valid service ID
* valid location ID
* valid market ID
* valid market/location relationship
* valid matrix status
* valid relationship scope
* valid service type
* valid service matrix rule
* valid location matrix rule
* valid market-service status
* deterministic candidate route
* matrix reason

---

# 81. Referential Integrity

Every:

```text
service_id
```

must resolve to:

`06-master-service-registry.md`

Every:

```text
location_id
```

must resolve to:

`07-master-location-registry.md`

Every market must resolve to an approved market entity.

Broken relationships should fail matrix validation.

---

# 82. Duplicate Relationship Validation

No two matrix rows should share the same:

```text
matrix_id
```

A service-location pair should have one normalized relationship record.

---

# 83. Complete Matrix Count Validation

The expected mathematical count is:

```text
579 × 18 = 10,422
```

If the machine-readable matrix contains anything other than:

```text
10,422
```

rows without an intentional service/location registry change, validation should fail.

---

# 84. Market Count Validation

Expected relationship counts:

```text
St. Louis:
218 × 18 = 3,924
```

```text
San Diego:
222 × 18 = 3,996
```

```text
Las Vegas:
139 × 18 = 2,502
```

Total:

```text
10,422
```

A registry addition or removal should trigger intentional matrix regeneration.

---

# 85. Matrix Regeneration Rule

If a new canonical location is added:

```text
+ 18 relationships
```

should be generated.

If a new canonical service is added:

```text
+ 579 relationships
```

at the current location count.

However, this changes the **research matrix**, not the published website.

---

# 86. Service Removal Rule

If a canonical service is retired:

1. do not silently delete historical relationships
2. determine whether to archive or regenerate the matrix
3. identify existing public pages
4. apply migration rules
5. update page authorization
6. update internal links
7. record the decision

---

# 87. Location Removal Rule

If a location is merged or retired:

1. update the canonical location registry
2. update aliases
3. regenerate affected matrix relationships
4. evaluate indexed pages
5. create redirects where needed
6. record the change

---

# 88. Matrix Change Governance

Changes to relationship logic should be documented when they materially affect:

* hundreds of rows
* launch eligibility
* market availability
* service applicability
* commercial suitability
* index recommendation

Such changes should eventually be recorded in:

`22-decisions-change-log.md`

---

# 89. Matrix Analytics Feedback Loop

After launch, real performance should influence future page promotion.

Signals include:

* Google Search Console impressions
* rankings
* click-through rate
* leads
* call tracking
* form submissions
* customer geography
* service demand
* GBP query data
* competitor visibility
* real estate referral activity
* commercial lead activity

---

# 90. Search Console Expansion Model

Example:

```text
Location Hub receives impressions for
"sewer camera inspection + location"
↓
No dedicated local service page exists
↓
Query volume / intent is meaningful
↓
Relationship is already in matrix
↓
Promote candidate for page review
```

The matrix provides a ready-made expansion inventory.

---

# 91. Conversion-Led Expansion

A geography producing substantial leads for a specific service should receive additional review even when initial search-volume tools showed limited demand.

Customer behavior can be a stronger expansion signal than keyword tools alone.

---

# 92. Commercial Lead Expansion

If property managers or commercial operators repeatedly request a service in a location, the corresponding commercial matrix row can be evaluated for promotion.

Example:

```text
Mission Valley
+
Commercial Hydro Jetting
```

may become more valuable based on actual lead activity.

---

# 93. Matrix and AEO

Service-location pages should not merely repeat keyword combinations.

Where published, they should answer location-specific service questions such as:

* What does the service do?
* When is it needed?
* What can an inspection identify?
* Is the service appropriate for a particular situation?
* What happens during the process?
* What should the customer do next?

This improves usefulness for:

* traditional search
* featured snippets
* People Also Ask
* voice search
* AI answer systems

---

# 94. Matrix and AI Search

Structured relationship data can help AI systems understand:

```text
The Sewer Pros
→ provides Service X
→ within Market Y
→ for approved Location Z
```

But AI/entity consistency depends on accurate business reality.

Do not expose unsupported service-location claims simply to increase LLM coverage.

---

# 95. Matrix and Schema

The matrix may provide inputs for:

* Service relationships
* geographic references
* breadcrumb relationships
* local service entities

However, schema should be generated only for actual approved pages.

Do not create structured-data entities for all 10,422 relationships if corresponding pages do not exist.

---

# 96. Matrix and Breadcrumbs

An approved service-location relationship can inform:

```text
Home
→ Market
→ Location
→ Local Service
```

Example:

```text
Home
→ San Diego
→ Carlsbad
→ Sewer Camera Inspection
```

The matrix can identify the relationship.

The approved page registry controls whether the breadcrumb destination exists.

---

# 97. Matrix and Related-Service Modules

The matrix can support related-service logic only after filtering for approved destinations.

Example:

A Carlsbad sewer camera page could theoretically identify:

```text
Sewer Cleaning
Hydro Jetting
Pre-Purchase Sewer Inspection
```

as related opportunities.

But only approved Carlsbad service pages should receive clickable links.

---

# 98. Matrix and Related-Location Modules

Similarly, the matrix can help determine neighboring service opportunities.

But related-location links should:

* point to approved pages
* reflect genuine geographic relationships
* avoid arbitrary cross-linking across hundreds of locations

---

# 99. Initial Expansion Batches

Post-launch expansion should occur in controlled batches.

Recommended approach:

```text
Batch 1
Remaining highest-value Tier 1 core service opportunities

Batch 2
Real estate / pre-purchase opportunities

Batch 3
Property-management and recurring-backup opportunities

Batch 4
Commercial districts and commercial services

Batch 5
Selective derived services

Batch 6
High-performing Phase 2 locations

Batch 7
Selected neighborhoods

Batch 8
Validated outer service territories
```

The exact sequence should respond to performance data.

---

# 100. Batch QA Rule

Do not release hundreds of matrix pages in one deployment merely because they can be programmatically generated.

Each batch should allow evaluation of:

* indexing
* crawl behavior
* ranking
* cannibalization
* content quality
* conversion
* internal-link behavior

before further expansion.

---

# 101. Content Differentiation Requirement

Before any matrix page is approved, it must have enough unique value to support:

* distinct H1
* distinct title
* distinct meta description
* location-relevant opening
* service-specific explanation
* local context
* useful FAQs
* relevant internal links
* appropriate CTA
* accurate schema

The exact content specification belongs in:

`14-content-specification.md`

---

# 102. Placeholder Content Rule

Never publish matrix pages containing:

```text
[City]
[Service]
[County]
[Market]
```

or other unresolved template variables.

Build-time validation should detect common placeholder syntax.

---

# 103. Keyword Substitution Rule

The following is insufficient:

```text
"Sewer camera inspection in Carlsbad..."
```

copied into:

```text
"Sewer camera inspection in Oceanside..."
```

with no meaningful change.

Matrix scalability must not become content duplication.

---

# 104. Relationship Evidence Types

A relationship may be strengthened by:

* search demand
* existing impressions
* customer inquiries
* service history
* geographic relevance
* commercial concentration
* real estate activity
* property-management activity
* existing referrals
* competitor rankings
* local resource opportunities

No single evidence type is mandatory for every page, but strong pages should have a credible rationale.

---

# 105. Matrix Reason Field

Every row should preserve a human-readable reason.

Examples:

```text
Location is launch-priority and the service relationship is eligible.
```

```text
Commercial relationship retained, but the location lacks a strong commercial-priority signal.
```

```text
Service availability requires operational confirmation in this market.
```

```text
Service does not apply to this market.
```

This makes automated classifications auditable.

---

# 106. Do Not Delete Weak Relationships

Rows classified as:

```text
selective_low_commercial_fit
selective_low_intent_fit
research_only_location
hold_location
not_applicable_market
```

should generally remain in the research matrix.

Their presence explains why the relationship was considered and rejected or deferred.

This prevents repeated rediscovery.

---

# 107. Manual Review Rule

Although the current status summary contains no rows classified as:

```text
manual_review_location
```

the status remains valid for future data quality needs.

Any future relationship involving an unresolved geography should remain excluded from page generation until reviewed.

---

# 108. Current Matrix Counts Are Versioned Data

The counts in this document correspond to the current:

```text
18-service
579-location
```

registry state.

If either registry changes, matrix totals should be regenerated rather than manually patched.

---

# 109. Matrix Versioning

Recommended metadata:

```json
{
  "matrixVersion": "1.0",
  "serviceCount": 18,
  "locationCount": 579,
  "relationshipCount": 10422
}
```

Future changes should increment the appropriate version.

---

# 110. Source-of-Truth Files

Current repository structure:

```text
data/services/master-service-registry.json
data/locations/master-location-registry.json
data/matrices/service-location-master-matrix.json
data/matrices/service-location-master-matrix.csv
```

These are the authoritative machine-readable sources for each entity layer.

There should remain exactly one machine-readable source per layer. Do not create parallel copies elsewhere in the repository.

---

# 111. Matrix Validation Script

Recommended future script:

```text
scripts/validate-service-location-matrix.ts
```

It should validate:

* expected row count
* unique matrix IDs
* valid service IDs
* valid location IDs
* valid markets
* route formatting
* market applicability
* allowed status values
* parent relationships
* service matrix rules
* location matrix rules

---

# 112. Page Registry Cross-Validation

A second check should validate every approved service-location page against the matrix.

Conceptually:

```ts
for (const page of approvedServiceLocationPages) {
  const relationship = matrix.get(
    page.locationId,
    page.serviceId
  )

  if (!relationship) {
    throw new Error(
      `Missing matrix relationship for ${page.id}`
    )
  }
}
```

This confirms that every approved local service page has a known underlying service/location relationship.

---

# 113. Page Approval May Override Matrix Priority

An approved page may occasionally originate from a relationship classified:

```text
selective_candidate
```

instead of:

```text
launch_candidate
```

when strategic evidence supports it.

This is acceptable if:

* decision is intentional
* business capability is verified
* page intent is distinct
* content is strong
* Master Page Build List authorizes it

The matrix recommends.

The page build list decides.

---

# 114. Matrix Must Not Override Business Reality

Even a mathematically strong relationship must be rejected if:

* service is not offered
* geography is not served
* commercial capability is unsupported
* customer claim would be misleading
* page would imply an office that does not exist

Business reality always overrides matrix opportunity.

---

# 115. Matrix Must Not Override Service Boundaries

Never use the matrix to create offered-service pages for:

```text
Sewer Repair
Sewer Replacement
Trenchless Sewer Repair
Pipe Lining
Pipe Bursting
General Plumbing
```

These are outside the current canonical service registry.

---

# 116. Grease-Trap Guardrail

Commercial Grease & Sludge Removal refers to applicable sewer/drain-line buildup.

Do not transform:

```text
Commercial Grease & Sludge Removal
```

into:

```text
Grease Trap Cleaning
```

within local matrix pages unless the business separately confirms grease-trap service.

---

# 117. Root Intrusion Guardrail

Do not automatically add:

```text
Root Intrusion Removal × 579 locations
```

Root intrusion is currently treated primarily as:

* a problem
* a cleaning use case
* an inspection finding
* a resource topic

rather than an independent canonical service.

---

# 118. Second-Opinion Guardrail

Independent second-opinion pages should not become duplicate camera-inspection pages.

The distinctive intent must remain:

> Customer already has a major sewer recommendation and wants additional independent information before deciding.

---

# 119. Matrix and Site OS

Site OS Master governs reusable:

* research workflow
* evaluation workflow
* content workflow
* QA
* publishing process
* optimization methods

This document governs The Sewer Pros-specific:

* matrix statuses
* service-location relationships
* exclusions
* market gates
* commercial-fit logic
* publishing interpretation

Do not duplicate generalized Site OS procedures here.

---

# 120. `CLAUDE.md` Matrix Rule

`CLAUDE.md` should eventually include a direct instruction comparable to:

> The Service × Location Matrix is an opportunity dataset, not a route manifest. Never create, publish, index, link to, or include a matrix relationship in the sitemap unless the corresponding page is explicitly authorized in `04-master-page-build-list.md`.

This rule is mandatory for Claude Code.

---

# 121. Critical Matrix Rules

### Rule 1

The current matrix contains exactly 10,422 service × location relationships.

### Rule 2

The matrix is a research and opportunity system.

### Rule 3

The matrix is not a page manifest.

### Rule 4

`launch_candidate` does not automatically mean `launch`.

### Rule 5

Only `04-master-page-build-list.md` authorizes public pages.

### Rule 6

Only approved page records may feed `generateStaticParams()`.

### Rule 7

Core services receive the broadest geographic opportunity analysis.

### Rule 8

Derived services use intent-specific matrix rules.

### Rule 9

Commercial services require commercial geographic fit.

### Rule 10

Commercial relationships with weak geographic fit remain selective.

### Rule 11

St. Louis sewer lateral reporting is St. Louis-only.

### Rule 12

Las Vegas relationships remain subject to operational service validation.

### Rule 13

Phase 3 locations require coverage confirmation.

### Rule 14

Research-only and hold locations do not generate pages.

### Rule 15

Neighborhood matrices require elevated scrutiny.

### Rule 16

Aliases do not create service matrices.

### Rule 17

Problem keywords do not automatically create service matrices.

### Rule 18

Sewer repair/replacement services must not be introduced through matrix generation.

### Rule 19

Matrix candidate URLs never override the finalized URL Routing Strategy.

### Rule 20

Internal links may point only to approved destinations.

### Rule 21

Only approved indexable pages enter the sitemap.

### Rule 22

Do not mass-generate speculative noindex matrix pages.

### Rule 23

The machine-readable matrix should preserve all relationships, including rejected and deferred relationships.

### Rule 24

Business reality overrides matrix opportunity.

---

# 122. Final Matrix Principle

The Service × Location Matrix gives The Sewer Pros a large structured SEO opportunity universe without forcing the company to publish a large low-quality website.

The research universe is:

```text
18 Services
×
579 Geographic Records
=
10,422 Relationships
```

The publishing process is:

```text
10,422 Relationships
↓
Eligibility Classification
↓
Strategic Prioritization
↓
Operational Validation
↓
Search Intent Review
↓
Content Differentiation Review
↓
Master Page Build List Approval
↓
Production Route
```

The matrix should make future expansion faster, more systematic, and more data-driven.

It must **not** make publishing automatic.

The governing principle is:

```text
Model Everything
Publish Selectively
Measure Performance
Expand Intentionally
```

That allows The Sewer Pros to build geographic and topical authority across St. Louis, San Diego, Las Vegas, and future markets without sacrificing:

* accuracy
* user value
* crawl efficiency
* index quality
* business positioning
* conversion quality
* long-term SEO durability

**The matrix models the opportunity.
The Master Page Build List decides what becomes a page.**
