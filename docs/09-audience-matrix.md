# The Sewer Pros - Audience Matrix

**Document:** `09-audience-matrix.md`
**Project:** The Sewer Pros Website Rebuild
**Repository:** `the-sewer-pros-site`
**Status:** Active Audience Opportunity Authority
**Document Role:** Audience taxonomy, audience-to-service relationships, and audience-to-location opportunity governance for residential, real-estate, property manager (residential-focused), multifamily (residential-focused), HOA, and residential investor audiences. Commercial services were removed by owner decision on Oct 12, 2026 and are not offered.
**Primary Markets:** St. Louis, MO; San Diego, CA; Las Vegas, NV

---

# 1. Purpose

This document defines how The Sewer Pros website should model:

* customer audiences
* referral audiences
* property-management audiences (residential-focused)
* audience-to-service relationships
* audience-to-location relationships
* audience page opportunities
* audience + location opportunities
* conversion pathways
* publishing priorities
* matrix eligibility
* page-generation safeguards

This document answers:

> **Who does The Sewer Pros serve, which services matter to each audience, and where does geographic targeting make sense?**

This document does **not** independently authorize every potential page.

Production publication and indexation remain controlled by:

`04-master-page-build-list.md`

This matrix may support research, prioritization, templates, drafts, candidate routes, and protected-preview QA before a relationship is selected for production.

---

# 2. Core Matrix Principle

The website should not treat every:

```text
Audience
Ã—
Location
```

combination as a page.

The matrix exists to model opportunity.

The governing rule is:

```text
Relationship
≠
Production Page
```

and:

```text
Audience Relevance
≠
Automatic Production or Indexation
```

---

# 3. Governing Document Relationship

```text
01-business-brand-foundation.md
↓
Defines who the company serves and its positioning

06-master-service-registry.md
↓
Defines canonical services

07-master-location-registry.md
↓
Defines canonical geographies

09-audience-matrix.md
↓
Defines audience relationships

04-master-page-build-list.md
↓
Tracks lifecycle, production publication, and indexation

05-url-routing-strategy.md
↓
Defines stable pathnames and canonical production routes

08-service-location-matrix.md
↓
Defines service/geographic relationships (joined with this document
per §11, rather than duplicated — see §46A there)

15-schema-entity-strategy.md
↓
Defines schema implementation

16-internal-linking-strategy.md
↓
Defines relationship links (§84-89 below)

17-conversion-architecture.md
↓
Defines CTA and conversion behavior (§79-83 below)
```

This document must not silently override the page build list, service registry, location registry, routing strategy, or verified business facts.

---

# 3A. Build-First Matrix Model

The audience matrix should accelerate development without turning every relationship into a public page.

Matrix data may be used to:

* identify audience opportunities
* prioritize page families
* create reusable templates
* draft audience-specific content
* generate bounded candidate-route sets for local development
* build protected-preview pages for review
* plan internal links, schema, conversion paths, and analytics context
* compare opportunities before production selection

The system must keep four concepts separate:

```text
MATRIX STATUS
How strong or useful the relationship appears.

BUILD STATUS
Whether the associated content or implementation is a candidate, draft, build-ready, in QA, or complete.

PUBLICATION STATUS
Whether the page is deliberately included in production.

INDEXATION STATUS
Whether a published page is indexable or intentionally noindex.
```

The exact lifecycle values must match `04-master-page-build-list.md`. Matrix scores and eligibility labels do not substitute for publication or indexation state.

Ordinary development does not require a new approval entry. Business claims, services, markets, operational coverage, and production exposure still require verified source data and the appropriate documented decision.

---

# 4. Audience vs Property Segment

The project distinguishes between:

## Audience

A person, role, referral source, or decision-maker.

Examples:

* Home Buyer
* Real Estate Agent
* Property Manager (residential-focused)

## Property Segment

A residential property type or community context.

Examples:

* Multifamily (residential apartment properties)
* HOA Community

These concepts may overlap.

For example:

```text
Property Manager
```

is primarily an audience.

```text
Multifamily Property
```

is primarily a property segment.

A property manager may manage multifamily residential properties.

The architecture should preserve both concepts rather than collapsing them into one keyword taxonomy.

---

# 5. Audience Hub

The canonical audience hub is:

```text
/for/
```

Visible navigation label:

**Who We Serve**

Purpose:

* organize customer groups
* explain customer-specific needs
* connect audiences to relevant services
* support referral pathways
* create stronger conversion journeys

---

# 6. Canonical Audience Registry

The initial audience model contains **10 strategic audience records**.

| ID                               | Audience                             | Role                                    | Current Page Status |
| -------------------------------- | ------------------------------------ | --------------------------------------- | ------------------- |
| `aud-homeowners`                 | Homeowners                           | Customer                                | Phase 2             |
| `aud-home-buyers`                | Home Buyers                          | Customer                                | Launch              |
| `aud-home-sellers`               | Home Sellers                         | Customer                                | Launch              |
| `aud-real-estate-agents`         | Real Estate Agents                   | Referral / Customer Coordinator         | Launch              |
| `aud-home-inspectors`            | Home Inspectors                      | Referral / Professional                 | Launch              |
| `aud-property-managers`          | Property Managers                    | Residential Decision-Maker              | Launch              |
| `aud-hoa-communities`            | HOA Communities                      | Property / Organizational Audience      | Launch              |
| `aud-real-estate-investors`      | Real Estate Investors                | Customer                                | Phase 2             |
| `aud-landlords`                  | Landlords                            | Customer                                | Phase 2             |
| `aud-contractors-remodelers`     | Contractors & Remodelers             | Professional / Referral                 | Phase 2             |

---

# 7. Launch Audience Pages

Currently authorized:

```text
/for/home-buyers/
/for/home-sellers/
/for/real-estate-agents/
/for/home-inspectors/
/for/property-managers/
/for/hoa-communities/
```

Count:

```text
6
```

These six provide the initial audience foundation.

---

# 8. Phase 2 Audience Pages

Current Phase 2 opportunities:

```text
/for/homeowners/
/for/real-estate-investors/
/for/landlords/
/for/contractors-remodelers/
```

These should be promoted according to:

* demand
* conversion data
* referral opportunity
* search visibility
* content differentiation

---

# 9. Audience Record Model

Recommended machine-readable structure:

```ts
export interface Audience {
  audienceId: string
  name: string
  slug: string
  canonicalUrl: string

  audienceType:
    | 'customer'
    | 'referral_partner'
    | 'professional'
    | 'property_decision_maker'
    | 'organization'

  buildStatus: string
  publicationStatus: string
  indexationStatus: string

  primaryNeeds: string[]
  primaryServices: string[]
  secondaryServices: string[]

  locationMatrixRule:
    | 'full_on_relevant_locations'
    | 'selective'
    | 'hold'

  markets: Record<string, string>

  aliases?: string[]
}
```

---

# 10. Audience Matrix Status Model

The audience records below retain historical `Page Status` labels such as `launch` and `phase_2`. Treat those labels as prioritization metadata, not permission to begin or stop development. Before production use, normalize them against the current lifecycle, publication, and indexation fields in `04-master-page-build-list.md`.

Recommended audience-location relationship statuses:

| Status                              | Meaning                                        |
| ----------------------------------- | ---------------------------------------------- |
| `strong_candidate`                  | Strong audience + geography fit                |
| `phase_2_candidate`                 | Valid post-launch opportunity                  |
| `selective_candidate`               | Requires stronger evidence                     |
| `low_intent_fit`                    | Weak standalone audience search intent         |
| `operational_confirmation_required` | Market/service availability not confirmed      |
| `hold_location`                     | Geography should not generate audience pages   |
| `research_only`                     | Retained only for planning                     |

---

# 11. Audience × Location Mathematical Universe

With:

```text
10 strategic audiences
×
579 geographic records
```

the theoretical audience-location universe would contain:

```text
5,790 relationships
```

This number is useful for opportunity modeling only.

It does **not** mean the website should eventually contain 5,790 audience + location pages.

---

# 12. Audience + Location Canonical Pattern

When selected for production:

```text
/{canonical-location-path}/for/{audience}/
```

Example:

```text
/san-diego-ca/carlsbad/for/home-buyers/
```

Nested example:

```text
/st-louis-mo/st-louis-city/soulard/for/home-buyers/
```

Only relationships selected for production should enter the public route collection. Candidate relationships may generate local or protected-preview routes earlier.

---

# 13. Audience Page Purpose

Audience pages should answer:

> **Why would someone in this particular role use The Sewer Pros?**

They should focus on:

* the decision of the audience
* risk
* workflow
* relevant services
* expected documentation
* next steps
* conversion path

Audience pages should not merely duplicate service pages.

---

# 14. Audience vs Service Intent

Example:

```text
Sewer Camera Inspection
```

answers:

> What is the service?

while:

```text
Home Buyers
```

answers:

> Why should a buyer consider sewer inspection during a property purchase?

These are different search and conversion intents.

---

# 15. Homeowners

**ID:** `aud-homeowners`
**Canonical URL:** `/for/homeowners/`
**Page Status:** `phase_2`

## Primary Needs

* recurring sewer backups
* clogged drains
* sewer-condition questions
* second opinions
* preventative maintenance
* locating unknown sewer lines

## Strong Service Relationships

```text
Sewer Camera Inspection
Sewer Cleaning
Hydro Jetting
Sewer Cleaning & Camera Inspection
Sewer Line Locating
Drain Cleaning
Recurring Sewer Backup Diagnosis
Preventative Sewer Maintenance
Independent Sewer Inspection / Second Opinion
```

## Location Matrix

```text
selective
```

A generic homeowner + location page should not be generated everywhere because the primary local location page may already serve broad homeowner intent.

---

# 16. Home Buyers

**ID:** `aud-home-buyers`
**Canonical URL:** `/for/home-buyers/`
**Page Status:** `launch`

## Primary Needs

* understand underground sewer condition before purchasing
* identify visible defects
* obtain documentation
* reduce unknown financial risk
* understand inspection findings
* obtain independent information

## Primary Services

```text
Pre-Purchase Sewer Inspection
Sewer Camera Inspection
Sewer Cleaning & Camera Inspection
```

## Secondary Services

```text
Sewer Line Locating
Independent Sewer Inspection / Second Opinion
```

## St. Louis-Specific Relationship

```text
Sewer Lateral Inspection & Municipal Reporting
```

where applicable and verified.

## Location Matrix

```text
full_on_relevant_real_estate_locations
```

Home buyers represent one of the strongest audience + location opportunities.

---

# 17. Home Buyer + Location Priority

Strongest candidates should generally be locations with:

* meaningful residential inventory
* active real estate transactions
* established/older housing where relevant
* strong homebuyer search demand
* meaningful referral opportunities

Examples may include:

```text
Carlsbad
Chesterfield
Ballwin
St. Charles
San Marcos
Encinitas
La Jolla
```

but production publication and indexation still require specific evaluation.

---

# 18. Home Sellers

**ID:** `aud-home-sellers`
**Canonical URL:** `/for/home-sellers/`
**Page Status:** `launch`

## Primary Needs

* understand sewer condition before listing
* avoid transaction surprises
* respond to buyer inspection findings
* obtain documentation
* obtain an independent second opinion

## Primary Services

```text
Sewer Camera Inspection
Pre-Purchase / Transaction Sewer Inspection
Sewer Cleaning & Camera Inspection
Independent Sewer Inspection / Second Opinion
```

## St. Louis-Specific Relationship

```text
Sewer Lateral Inspection & Municipal Reporting
```

where verified.

## Location Matrix

```text
selective
```

Home seller + location pages should be more selective than home buyer pages unless search demand proves otherwise.

---

# 19. Real Estate Agents

**ID:** `aud-real-estate-agents`
**Canonical URL:** `/for/real-estate-agents/`
**Page Status:** `launch`

## Primary Needs

* coordinate inspections
* protect transactions from unexpected sewer issues
* explain inspection process to clients
* receive useful documentation
* obtain independent evaluations
* coordinate buyer/seller decision-making

## Primary Services

```text
Pre-Purchase Sewer Inspection
Sewer Camera Inspection
Sewer Cleaning & Camera Inspection
Independent Sewer Inspection / Second Opinion
```

## St. Louis Relationship

```text
Sewer Lateral Inspection & Municipal Reporting
```

where applicable.

## Location Matrix

```text
selective
```

Market-level agent targeting will usually be more useful than producing a separate agent page for every neighborhood.

---

# 20. Home Inspectors

**ID:** `aud-home-inspectors`
**Canonical URL:** `/for/home-inspectors/`
**Page Status:** `launch`

## Primary Needs

* refer underground sewer inspection outside general inspection scope
* obtain specialized camera evidence
* coordinate client due diligence
* understand sewer inspection findings

## Primary Services

```text
Sewer Camera Inspection
Pre-Purchase Sewer Inspection
Sewer Cleaning & Camera Inspection
```

## Location Matrix

```text
selective
```

Home inspector targeting should generally prioritize:

* market pages
* strong real estate cities
* referral relationships

rather than a full geographic matrix.

---

# 21. Property Managers

**ID:** `aud-property-managers`
**Canonical URL:** `/for/property-managers/`
**Page Status:** `launch`

## Primary Needs

* recurring backups
* property documentation
* sewer maintenance
* drain maintenance
* multifamily residential coordination
* service across multiple rental properties

## Primary Services

```text
Sewer Camera Inspection
Sewer Cleaning
Hydro Jetting
Sewer Cleaning & Camera Inspection
Drain Cleaning
Recurring Sewer Backup Diagnosis
Preventative Sewer Maintenance
```

## Secondary Service

```text
Sewer Line Locating
```

## Location Matrix

```text
full_on_property_management_locations
```

This audience is residential-focused: landlords, residential rental homes, residential property managers, and apartment or multifamily residential properties.

---

# 22. HOA Communities

**ID:** `aud-hoa-communities`
**Canonical URL:** `/for/hoa-communities/`
**Page Status:** `launch`

## Primary Needs

* common-area sewer issues
* recurring drainage problems
* maintenance planning
* documentation
* board/vendor coordination
* community property-management support

## Primary Services

```text
Sewer Camera Inspection
Sewer Cleaning
Hydro Jetting
Drain Cleaning
Preventative Sewer Maintenance
```

## Location Matrix

```text
selective
```

Prioritize areas with meaningful:

* HOA prevalence
* master-planned communities
* multifamily communities
* property-management demand

---

# 23. Real Estate Investors

**ID:** `aud-real-estate-investors`
**Canonical URL:** `/for/real-estate-investors/`
**Page Status:** `phase_2`

## Primary Needs

* acquisition due diligence
* evaluate hidden infrastructure risk
* rehab planning
* assess repair recommendations
* inspect multiple properties

## Primary Services

```text
Pre-Purchase Sewer Inspection
Sewer Camera Inspection
Sewer Cleaning & Camera Inspection
Sewer Line Locating
Independent Sewer Inspection / Second Opinion
```

## Location Matrix

```text
selective
```

Prioritize locations with meaningful:

* investment activity
* older property inventory
* multifamily
* renovation activity

---

# 24. Landlords

**ID:** `aud-landlords`
**Canonical URL:** `/for/landlords/`
**Page Status:** `phase_2`

## Primary Needs

* recurring tenant drain problems
* sewer backups
* preventative maintenance
* property turnover inspections
* reduce service disruption

## Primary Services

```text
Sewer Cleaning
Drain Cleaning
Hydro Jetting
Sewer Camera Inspection
Recurring Sewer Backup Diagnosis
Preventative Sewer Maintenance
```

## Location Matrix

```text
selective
```

---

# 25. Contractors & Remodelers

**ID:** `aud-contractors-remodelers`
**Canonical URL:** `/for/contractors-remodelers/`
**Page Status:** `phase_2`

## Primary Needs

* locate sewer lines
* understand sewer routing
* obtain camera evidence
* identify line position before property work
* investigate existing sewer conditions

## Primary Services

```text
Sewer Line Locating
Sewer Camera Inspection
Sewer Cleaning & Camera Inspection
```

## Location Matrix

```text
selective
```

This audience should not imply that The Sewer Pros performs:

* excavation
* sewer repair
* sewer replacement
* construction

unless separately confirmed.

---

# 26. Facility Managers

Removed (owner decision, Oct 12, 2026): commercial services are not offered. Do not build commercial content or architecture.

---

# 27. Restaurants & Food-Service Operators

Removed (owner decision, Oct 12, 2026): commercial services are not offered. Do not build commercial content or architecture.

---

# 28. Commercial Property Owners

Removed (owner decision, Oct 12, 2026): commercial services are not offered. Do not build commercial content or architecture.

---

# 29. Audience-to-Service Relationship Levels

Each audience/service relationship should use one of:

| Value            | Meaning                                     |
| ---------------- | ------------------------------------------- |
| `primary`        | Service is highly relevant to this audience |
| `secondary`      | Useful supporting service                   |
| `situational`    | Relevant only in certain circumstances      |
| `not_primary`    | Do not emphasize                            |
| `not_applicable` | Relationship does not apply                 |

This allows structured page planning without pretending every service matters equally to every audience.

---

# 30. Audience-to-Service Core Matrix

| Audience                 | Camera    | Cleaning    | Hydro       | Clean + Camera | Locate      | Drain       | Pre-Purchase | Backup Diagnosis | Maintenance | Second Opinion |
| ------------------------ | --------- | ----------- | ----------- | -------------- | ----------- | ----------- | ------------ | ---------------- | ----------- | -------------- |
| Homeowners               | Primary   | Primary     | Primary     | Primary        | Secondary   | Primary     | Situational  | Primary          | Primary     | Primary        |
| Home Buyers              | Primary   | Situational | Situational | Secondary      | Secondary   | Not Primary | Primary      | Situational      | Not Primary | Secondary      |
| Home Sellers             | Primary   | Secondary   | Situational | Primary        | Situational | Not Primary | Primary      | Situational      | Not Primary | Primary        |
| Real Estate Agents       | Primary   | Situational | Situational | Primary        | Secondary   | Not Primary | Primary      | Situational      | Not Primary | Primary        |
| Home Inspectors          | Primary   | Situational | Not Primary | Secondary      | Secondary   | Not Primary | Primary      | Situational      | Not Primary | Secondary      |
| Property Managers        | Primary   | Primary     | Primary     | Primary        | Secondary   | Primary     | Situational  | Primary          | Primary     | Secondary      |
| HOA Communities          | Primary   | Primary     | Primary     | Secondary      | Secondary   | Primary     | Not Primary  | Primary          | Primary     | Secondary      |
| Investors                | Primary   | Secondary   | Situational | Primary        | Secondary   | Situational | Primary      | Secondary        | Secondary   | Primary        |
| Landlords                | Secondary | Primary     | Primary     | Primary        | Situational | Primary     | Situational  | Primary          | Primary     | Secondary      |
| Contractors / Remodelers | Primary   | Situational | Not Primary | Secondary      | Primary     | Not Primary | Not Primary  | Situational      | Not Primary | Secondary      |

This table describes content relationships.

It does not authorize new pages.

---

# 31. Commercial Architecture

Removed (owner decision, Oct 12, 2026): commercial services are not offered. Do not build commercial content or architecture.

---

# 32. Canonical Commercial Segments

Removed (owner decision, Oct 12, 2026): commercial services are not offered. Do not build commercial content or architecture.

---

# 33. Commercial Segment × Location Universe

Removed (owner decision, Oct 12, 2026): commercial services are not offered. Do not build commercial content or architecture.

---

# 34. Commercial Service Layer

Removed (owner decision, Oct 12, 2026): commercial services are not offered. Do not build commercial content or architecture.

---

# 35. Commercial Service-to-Segment Matrix

Removed (owner decision, Oct 12, 2026): commercial services are not offered. Do not build commercial content or architecture.

---

# 36. Restaurants & Food Service

Removed (owner decision, Oct 12, 2026): commercial services are not offered. Do not build commercial content or architecture.

---

# 37. Property Management

**Segment:** Property management (residential-focused)

Property management is both:

* an audience
* an operating model for residential rental and multifamily residential properties

## Strongest Services

```text
Sewer Camera Inspection
Sewer Cleaning
Hydro Jetting
Drain Cleaning
Preventative Sewer Maintenance
```

## Secondary Service

```text
Sewer Line Locating
```

## Geographic Priority

Prioritize:

* multifamily-heavy locations
* rental-property concentrations
* dense residential markets

---

# 38. Multifamily Properties

**Segment:** Multifamily residential properties (apartment and multifamily residential)

## Strongest Services

```text
Sewer Camera Inspection
Sewer Cleaning
Hydro Jetting
Drain Cleaning
Preventative Sewer Maintenance
```

## Primary Problems

* repeated building backups
* shared sewer systems
* high usage
* recurring drain issues
* scheduled maintenance

## Matrix Rule

```text
selective_high_value
```

Do not automatically create multifamily pages for every residential suburb.

---

# 39. HOA Communities

**Segment:** HOA communities

This segment is served by the launch audience page:

```text
/for/hoa-communities/
```

The audience page should normally serve the primary HOA entity.

---

# 40. Hotels & Hospitality

Removed (owner decision, Oct 12, 2026): commercial services are not offered. Do not build commercial content or architecture.

---

# 41. Retail Properties

Removed (owner decision, Oct 12, 2026): commercial services are not offered. Do not build commercial content or architecture.

---

# 42. Facility Management

Removed (owner decision, Oct 12, 2026): commercial services are not offered. Do not build commercial content or architecture.

---

# 43. Commercial Properties

Removed (owner decision, Oct 12, 2026): commercial services are not offered. Do not build commercial content or architecture.

---

# 44. Commercial Segment Standalone Page Rule

Removed (owner decision, Oct 12, 2026): commercial services are not offered. Do not build commercial content or architecture.

---

# 45. Audience vs Commercial URL Decision

Removed (owner decision, Oct 12, 2026): commercial services are not offered. Do not build commercial content or architecture.

---

# 46. Commercial + Location Pattern

Removed (owner decision, Oct 12, 2026): commercial services are not offered. Do not build commercial content or architecture.

---

# 47. Audience + Location Pattern

When selected for production:

```text
/{canonical-location-path}/for/{audience}/
```

Example:

```text
/st-louis-mo/chesterfield/for/home-buyers/
```

These pages should remain more selective than service + location pages.

---

# 48. No Full Audience Matrix Publication

Do not generate:

```text
10 audiences
×
579 locations
=
5,790 pages
```

The majority of those relationships would create:

* overlap
* thin pages
* doorway patterns
* poor UX
* little conversion value

Audience-local pages should target unusually strong intersections.

---

# 49. No Full Commercial Matrix Publication

Removed (owner decision, Oct 12, 2026): commercial services are not offered. Do not build commercial content or architecture.

---

# 50. High-Value Audience + Location Types

The strongest post-launch audience-local opportunities are likely to include:

## Home Buyers + Real Estate Locations

Example:

```text
Home Buyers
+
Carlsbad
```

## Property Managers + Multifamily / Rental Locations

Example:

```text
Property Managers
+
Mission Valley
```

## Real Estate Agents + Major Markets

Example:

```text
Real Estate Agents
+
St. Louis
```

## HOA Communities + Master-Planned Communities

Example:

```text
HOA Communities
+
Summerlin
```

as a Las Vegas audience-location opportunity.

These remain strategic examples, not automatic production or indexation decisions.

---

# 51. Audience Location Eligibility Factors

Evaluate:

* audience search demand
* local population/property context
* real estate activity
* referral value
* geographic importance
* service demand
* content differentiation
* conversion potential
* overlap with existing pages

---

# 52. Commercial Location Eligibility Factors

Removed (owner decision, Oct 12, 2026): commercial services are not offered. Do not build commercial content or architecture.

---

# 53. Location Registry Priority Tags

The location registry already provides useful signals such as:

```text
residential
real_estate
property_management
```

These tags should influence audience matrix evaluation.

Example:

```text
Location tags:
residential + real_estate
```

may strengthen:

```text
Home Buyers
Home Sellers
Real Estate Agents
Home Inspectors
```

---

# 54. Commercial Tag Influence

Removed (owner decision, Oct 12, 2026): commercial services are not offered. Do not build commercial content or architecture.

---

# 55. Audience Matrix Status Logic

Conceptually:

```text
Audience Priority
+
Location Priority
+
Relevant Location Tags
+
Relevant Services
+
Search Intent
+
Conversion Potential
=
Audience Relationship Status
```

---

# 56. Commercial Matrix Status Logic

Removed (owner decision, Oct 12, 2026): commercial services are not offered. Do not build commercial content or architecture.

---

# 57. Recommended Audience Matrix Statuses

```ts
export type AudienceMatrixStatus =
  | 'strong_candidate'
  | 'phase_2_candidate'
  | 'selective_candidate'
  | 'low_intent_fit'
  | 'operational_confirmation_required'
  | 'hold_location'
  | 'research_only'
```

---

# 58. Recommended Commercial Matrix Statuses

Removed (owner decision, Oct 12, 2026): commercial services are not offered. Do not build commercial content or architecture.

---

# 59. Audience Relationship Record

Recommended model:

```ts
export interface AudienceLocationRelationship {
  relationshipId: string

  audienceId: string
  locationId: string
  marketId: string

  status: AudienceMatrixStatus

  relevantServiceIds: string[]

  intentFit:
    | 'strong'
    | 'moderate'
    | 'weak'

  conversionFit:
    | 'strong'
    | 'moderate'
    | 'weak'

  candidatePathname: string

  reason: string
}
```

---

# 60. Commercial Relationship Record

Removed (owner decision, Oct 12, 2026): commercial services are not offered. Do not build commercial content or architecture.

---

# 60A. Extended Readiness and Lifecycle Fields

Additive to `AudienceLocationRelationship` above - extends `intentFit`/`conversionFit` rather than replacing them:

```text
primaryNeed, decisionContext, workflow, deliverables, painPoints,
objections, primaryCTA, secondaryCTA        — see §13-14, §15-28's
                                                per-audience sections
                                                for the content;
                                                these are the field
                                                names for it

evidenceReadiness    verified | partially-verified | needs-collection |
                       pending-verification | not-applicable
contentReadiness     same controlled values as evidenceReadiness
conversionReadiness  same controlled values as evidenceReadiness

buildStatus          not-started | in-progress | built | in-qa
publicationStatus    not-published | published | removed
indexationStatus     not-indexable | indexable | published-noindex |
                       deferred | retired
```

These mirror the equivalent fields in `06-master-service-registry.md` Â§9A, `07-master-location-registry.md` Â§21A, and `08-service-location-matrix.md` Â§13A, so a joined view across service, location, and audience relationships reads consistently. Do not fabricate `evidenceReadiness: verified` without support (Â§127).

---

# 61. Audience-to-Service Matrix Should Be Machine-Readable

Recommended file:

```text
/data/matrices/audience-service-matrix.json
```

This should map:

```text
Audience
↔
Service
```

using:

```text
primary
secondary
situational
not_primary
not_applicable
```

---

# 62. Audience-to-Location Matrix

Recommended file:

```text
/data/matrices/audience-location-matrix.json
```

This may model the complete research universe without creating routes.

---

# 63. Commercial Segment-to-Service Matrix

Removed (owner decision, Oct 12, 2026): commercial services are not offered. Do not build commercial content or architecture.

---

# 64. Commercial Segment-to-Location Matrix

Removed (owner decision, Oct 12, 2026): commercial services are not offered. Do not build commercial content or architecture.

---

# 65. Audience Page Publication Rule

An audience existing in the registry does not mean its page automatically exists in production. Its template, content draft, or candidate route may still be developed.

Example:

```text
aud-homeowners
```

exists strategically.

Current prioritization stage:

```text
phase_2
```

No production route should be generated until the Master Page Build List selects it for publication. This does not prevent development or protected-preview generation.

---

# 66. Audience + Location Publication Rule

A relationship may be mathematically strong.

Example:

```text
Home Buyers
+
Carlsbad
```

But:

```text
/san-diego-ca/carlsbad/for/home-buyers/
```

may exist as a development or protected-preview candidate, but must not enter the production route collection until deliberately selected in the Master Page Build List.

---

# 67. Commercial Publication Rule

Removed (owner decision, Oct 12, 2026): commercial services are not offered. Do not build commercial content or architecture.

---

# 68. Cannibalization Rule

Before publishing or indexing an audience page, compare it against:

* canonical service page
* local service page
* audience hub
* other audience pages
* location page
* market hub
* resource content

Do not publish multiple pages that answer essentially the same query.

---

# 69. Property Manager Cannibalization Example

Potential pages:

```text
/for/property-managers/
```

and the Preventative Sewer Maintenance service page should each have different primary intent.

### `/for/property-managers/`

Focus:

> Why residential property managers work with The Sewer Pros.

### Preventative Sewer Maintenance Service Page

Focus:

> What preventative sewer maintenance provides.

---

# 70. Restaurant Cannibalization Example

Removed (owner decision, Oct 12, 2026): commercial services are not offered. Do not build commercial content or architecture.

---

# 71. Homebuyer Cannibalization Example

Potential:

```text
/for/home-buyers/
```

and:

```text
/services/pre-purchase-sewer-inspection/
```

should remain separate.

### Home Buyers

Focus on:

* purchase process
* hidden sewer risk
* transaction decisions
* inspection coordination

### Pre-Purchase Sewer Inspection

Focus on:

* service
* inspection process
* findings
* documentation
* when to schedule

---

# 72. St. Louis Real Estate Opportunity

St. Louis has additional audience opportunity around:

```text
Sewer Lateral Inspection
Municipal Reporting
Home Buyers
Home Sellers
Real Estate Agents
Home Inspectors
```

However:

> municipal claims must remain program-specific and verified.

Do not use a broad St. Louis claim to automatically generate municipality-specific program pages.

---

# 73. San Diego Audience Opportunity

Priority San Diego audience relationships include:

* home buyers
* real estate agents
* home inspectors
* property managers

North County may provide especially strong real-estate audience opportunities.

Audience-local expansion should remain data-driven.

---

# 74. Las Vegas Audience Opportunity

Las Vegas is a confirmed operational market.

Audience relationships, templates, content, routes, and production pages may be developed under the same build-first model used for St. Louis and San Diego. There is no separate Las Vegas approval or operational gate.

Page-specific service claims and geographic statements must still remain accurate, but ordinary development, publication planning, and indexation evaluation may proceed without waiting for additional market confirmation.

---

# 75. Las Vegas Commercial Opportunity

Removed (owner decision, Oct 12, 2026): commercial services are not offered. Do not build commercial content or architecture.

---

# 76. Commercial Packaging Validation

Removed (owner decision, Oct 12, 2026): commercial services are not offered. Do not build commercial content or architecture.

---

# 77. Audience Messaging Principle

Audience pages should speak to:

```text
Audience Problem
↓
Decision
↓
Relevant Service
↓
Evidence
↓
Outcome
↓
CTA
```

not:

```text
Audience Keyword
↓
Generic Service Copy
```

---

# 78. Commercial Messaging Principle

Removed (owner decision, Oct 12, 2026): commercial services are not offered. Do not build commercial content or architecture.

---

# 79. Conversion Path — Home Buyer

```text
Home Buyer Search
↓
/for/home-buyers/
↓
/services/pre-purchase-sewer-inspection/
↓
Relevant Market / Local Context
↓
Schedule Inspection
```

---

# 80. Conversion Path — Real Estate Agent

```text
Agent Search
↓
/for/real-estate-agents/
↓
Inspection Services
↓
Market Information
↓
Schedule / Refer Client
```

---

# 81. Conversion Path — Property Manager

```text
Property Manager Search
↓
/for/property-managers/
↓
Maintenance Services
â†“
Relevant Local Service Page
↓
Request Service
```

---

# 82. Conversion Path — Restaurant

Removed (owner decision, Oct 12, 2026): commercial services are not offered. Do not build commercial content or architecture.

---

# 83. Conversion Path — HOA

```text
HOA Sewer / Drain Problem
↓
/for/hoa-communities/
↓
Inspection / Cleaning / Maintenance
↓
Relevant Market
↓
Request Service
```

---

# 84. Internal Linking — Audience Pages

Audience pages should generally link to:

* primary relevant services
* selected secondary services
* primary markets
* relevant resources
* CTA

They should not link to every service merely for SEO.

---

# 85. Service-to-Audience Linking

Canonical service pages may link to highly relevant audience pages.

Example:

```text
Pre-Purchase Sewer Inspection
→ Home Buyers
→ Home Sellers
→ Real Estate Agents
```

---

# 86. Commercial Service-to-Audience Linking

Removed (owner decision, Oct 12, 2026): commercial services are not offered. Do not build commercial content or architecture.

---

# 87. Location-to-Audience Linking

A location page may surface high-value audiences relevant to that geography.

Example:

```text
Carlsbad
→ Home Buyers
```

only when that link supports a real user pathway.

Avoid turning every location page into a directory of all audience permutations.

---

# 88. Audience-to-Location Linking

A global audience page should emphasize:

* three primary markets
* selected priority locations

rather than listing all 579 geographic records.

---

# 89. Commercial-to-Location Linking

Removed (owner decision, Oct 12, 2026): commercial services are not offered. Do not build commercial content or architecture.

---

# 90. Audience SEO Intent

Audience keyword research should include patterns such as:

```text
sewer inspection for home buyers
sewer inspection for real estate agents
sewer services for property managers
sewer inspection for home inspectors
sewer services for HOAs
```

Keyword findings should map to canonical audiences rather than automatically generating variants.

---

# 91. Commercial SEO Intent

Removed (owner decision, Oct 12, 2026): commercial services are not offered. Do not build commercial content or architecture.

---

# 92. Audience Alias Rule

Potential aliases should map to canonical audiences.

Example:

```text
Realtors
Real Estate Professionals
Listing Agents
Buyer Agents
```

may map primarily to:

```text
Real Estate Agents
```

Do not create four audience pages solely for vocabulary variants.

---

# 93. Multifamily Alias Rule

Examples:

```text
Apartment Communities
Apartment Buildings
Multifamily Buildings
```

may map into:

```text
Multifamily Properties
```

unless future search intent supports distinct segmentation.

---

# 94. Role vs Property-Type Rule

Do not confuse:

```text
Property Manager
```

with:

```text
Multifamily Property
```

The first describes a decision-maker.

The second describes a property type.

This distinction supports more accurate messaging and analytics.

---

# 95. Audience Page Expansion Order

Recommended default order after launch:

```text
1. Homeowners
2. Real Estate Investors
3. Landlords
4. Contractors / Remodelers
```

Actual priority should respond to:

* lead data
* referral opportunities
* Search Console
* business priorities

---

# 96. Audience + Location Expansion Order

Recommended:

```text
1. Home Buyers + strongest real estate locations
2. Property Managers + strong property-management locations
3. Real Estate Agents + major markets
4. HOA Communities + strong HOA/master-planned markets
5. Investors + selected investment markets
```

---

# 97. Commercial Expansion Order

Removed (owner decision, Oct 12, 2026): commercial services are not offered. Do not build commercial content or architecture.

---

# 98. Current Launch Commercial Services

Removed (owner decision, Oct 12, 2026): commercial services are not offered. Do not build commercial content or architecture.

---

# 99. Phase 2 Commercial Services

Removed (owner decision, Oct 12, 2026): commercial services are not offered. Do not build commercial content or architecture.

---

# 100. Initial Audience + Location Launch Rule

Current launch:

```text
0 audience + location pages
```

This is intentional.

The site should establish:

* canonical audiences
* canonical services
* market hubs
* location hubs

before expanding audience-local combinations.

---

# 101. Initial Commercial + Location Launch Rule

Removed (owner decision, Oct 12, 2026): commercial services are not offered. Do not build commercial content or architecture.

---

# 102. Post-Launch Data Signals

Audience page promotion should increasingly respond to:

* Search Console impressions
* organic queries
* CRM lead source
* lead type
* service requested
* property type
* customer role
* referral source
* market
* call tracking
* conversion rate
* sales value

---

# 103. CRM Data Opportunity

Future lead forms should ideally capture enough structured information to identify:

```text
Customer Type
Property Type
Service Needed
Market
Location
```

This can reveal opportunities such as:

```text
High volume of property-manager leads
+
Mission Valley
+
Hydro Jetting
```

which may justify a new local audience page.

---

# 104. Audience Analytics

Analytics should eventually allow reporting by:

```text
Audience Page Family
```

Examples:

* homebuyer leads
* agent referrals
* property-manager leads
* HOA inquiries

This helps determine which audience architecture is producing business value.

---

# 105. Commercial Analytics

Removed (owner decision, Oct 12, 2026): commercial services are not offered. Do not build commercial content or architecture.

---

# 106. Matrix Development and Promotion Workflow

```text
Audience Opportunity
↓
Service Fit
↓
Location Fit
↓
Search Intent
↓
Conversion Potential
↓
Candidate Record
↓
Content and Template Development
↓
Cannibalization Review
↓
Operational Validation
↓
QA
↓
Master Page Build List Publication State
↓
Publish
↓
Index When Qualified
```

---

# 107. Audience Page Production Readiness

Before publishing an audience page, verify:

* distinct audience intent
* real relevant services
* meaningful customer problem
* distinct copy
* relevant FAQs
* useful internal links
* appropriate CTA
* no fabricated audience-specific claims

---

# 108. Audience + Location Production Readiness

Require:

* strong audience/location relevance
* unique geographic information
* legitimate service availability
* audience-specific local problem/decision context
* no duplicate city swapping
* useful internal links
* conversion value

---

# 109. Commercial Page Production Readiness

Removed (owner decision, Oct 12, 2026): commercial services are not offered. Do not build commercial content or architecture.

---

# 110. Commercial + Location Production Readiness

Removed (owner decision, Oct 12, 2026): commercial services are not offered. Do not build commercial content or architecture.

---

# 111. No Keyword-Swap Publishing

Do not create:

```text
Sewer Services for Property Managers in Carlsbad
Sewer Services for Property Managers in Oceanside
Sewer Services for Property Managers in Encinitas
```

from one template with only the city changed.

Audience + location pages require legitimate differentiation.

---

# 112. No Industry-Swap Publishing

Removed (owner decision, Oct 12, 2026): commercial services are not offered. Do not build commercial content or architecture.

---

# 113. No Fake Local Commercial Presence

Removed (owner decision, Oct 12, 2026): commercial services are not offered. Do not build commercial content or architecture.

---

# 114. Schema Rule

Schema should describe actual page entities.

Audience pages do not need invented business entities for each customer group.

Structured data strategy will be defined in:

`15-schema-entity-strategy.md`

---

# 115. Matrix and AI Search

The audience relationship system should help AI systems understand statements such as:

```text
The Sewer Pros provides pre-purchase sewer inspections for home buyers.
```

```text
The Sewer Pros provides sewer inspection and cleaning services in verified markets selected for publication.
```

These relationships should be:

* consistent
* factual
* reinforced across pages
* supported by internal links

---

# 116. Matrix and Topical Authority

Audience architecture expands topical authority beyond service keywords.

Example cluster:

```text
Home Buying
├── Home Buyers
├── Pre-Purchase Sewer Inspection
├── Sewer Camera Inspection
├── Inspection Reports
├── Common Inspection Findings
└── Relevant Local Pages
```

Residential property management example:

```text
Property Management
â”œâ”€â”€ Property Managers
â”œâ”€â”€ Sewer Cleaning
â”œâ”€â”€ Hydro Jetting
â”œâ”€â”€ Preventative Maintenance
â”œâ”€â”€ Recurring Backup Resources
â””â”€â”€ Relevant Local Pages
```

---

# 117. Matrix and AEO

Audience pages should answer role-specific questions directly.

Examples:

```text
Should a home buyer get a sewer inspection?
```

```text
When should a property manager schedule hydro jetting?
```

```text
What does a real estate agent need from a sewer inspection report?
```

These questions can support:

* PAA
* featured snippets
* voice search
* AI retrieval

without creating separate pages for every question.

---

# 118. Machine-Readable Files

Recommended future data architecture:

```text
/data/audiences/master-audience-registry.json

/data/matrices/audience-service-matrix.json

/data/matrices/audience-location-matrix.json
```

---

# 119. Full Mathematical Matrices Are Research Data

If the complete matrices are generated:

```text
Audience × Location:
10 Ã— 579 = 5,790
```

these should remain:

```text
Research Opportunity Data
```

rather than:

```text
Route Manifests
```

---

# 120. Do Not Feed Full Matrices to `generateStaticParams()`

Prohibited:

```ts
audiences.flatMap((audience) =>
  locations.map((location) => ({
    audience,
    location,
  }))
)
```

for production routing.

---

# 121. Correct Route Generation

Production routes should derive from:

```text
04-master-page-build-list.md
```

Example:

```ts
const publishedAudiencePages =
  pageRegistry.filter(
    (page) =>
      page.publicationStatus === 'published' &&
      (page.pageType === 'audience' ||
        page.pageType === 'audience-location')
  )
```

---

# 122. Audience Relationship IDs

Recommended:

```text
{audienceId}::{locationId}
```

Example:

```text
aud-home-buyers::loc-sd-carlsbad
```

---

# 123. Commercial Relationship IDs

Removed (owner decision, Oct 12, 2026): commercial services are not offered. Do not build commercial content or architecture.

---

# 124. Business Reality Override

No matrix relationship may override:

* actual service capability
* actual service area
* business model
* legal requirements
* brand positioning

An SEO opportunity can be rejected because the business should not make the claim.

---

# 125. Sewer Repair Boundary

Audience content must not drift into selling:

```text
Sewer Repair
Sewer Replacement
Trenchless Repair
Pipe Lining
Pipe Bursting
```

unless the operating model changes.

These topics may appear in educational or second-opinion contexts.

---

# 126. Independent Inspection Positioning

Several audiences strongly benefit from the independent-inspection differentiator:

```text
Home Buyers
Home Sellers
Real Estate Agents
Home Inspectors
Investors
Property Managers
```

Messaging may emphasize:

* evidence
* inspection
* documentation
* informed decisions
* absence of repair-driven sales incentive

without attacking competitors.

The approved positioning concept for this differentiator:

> **Do Not Let a Sales-Driven Recommendation Make the Decision for You**

This states The Sewer Pros' own business model (no repair contract to sell); it is not an accusation that any competitor is dishonest, and it does not imply repair or replacement is never necessary (`06-master-service-registry.md` §23A, CLAUDE.md §9, §27). It connects most directly to the audiences listed above who have already received, or may receive, a repair or replacement recommendation.

---

# 127. Evidence-First Audience Messaging

Preferred framework:

```text
Audience Situation
↓
Question / Risk
↓
Inspection or Service
↓
Evidence
↓
Decision
```

This should be especially strong for:

* home buyers
* sellers
* agents
* inspectors
* investors
* property managers

---

# 128. Commercial Proof Requirements

Removed (owner decision, Oct 12, 2026): commercial services are not offered. Do not build commercial content or architecture.

---

# 129. Future Commercial Segments

Removed (owner decision, Oct 12, 2026): commercial services are not offered. Do not build commercial content or architecture.

---

# 130. Future Audience Segments

Potential future audiences may include:

```text
Developers
General Contractors
HOA Board Members
Real Estate Brokers
```

Do not add them merely to increase page count.

---

# 131. Audience Consolidation Rule

If two audiences share essentially the same:

* intent
* service needs
* messaging
* conversion path

they should normally be consolidated.

Example:

```text
Realtors
```

does not need to exist separately from:

```text
Real Estate Agents
```

solely for a keyword variant.

---

# 132. Multifamily Consolidation Rule

Likewise:

```text
Apartment Buildings
Apartment Communities
Multifamily Communities
```

may remain one canonical:

```text
Multifamily Properties
```

entity until meaningful search or service differences justify subdivision.

---

# 133. Audience Removal Workflow

If an audience page is retired:

```text
Evaluate Traffic
↓
Evaluate Leads
↓
Choose Relevant Destination
↓
Redirect if Appropriate
↓
Update Internal Links
↓
Update Registry
↓
Update Sitemap
```

Do not simply delete established URLs.

---

# 134. Commercial Segment Removal Workflow

Removed (owner decision, Oct 12, 2026): commercial services are not offered. Do not build commercial content or architecture.

---

# 135. Site OS Governance

Site OS Master governs reusable:

* research workflows
* page evaluation
* content workflows
* QA
* publishing
* optimization

This project document governs:

* canonical audience definitions
* audience-service fit
* audience-location fit
* project-specific publishing guardrails

---

# 136. `CLAUDE.md` Audience Rule

`CLAUDE.md` should eventually state:

Audience matrices are opportunity models, not production route manifests. They may support candidate routes, templates, drafts, and protected previews. Never place an audience + location route into production publication or indexation unless its lifecycle state in `04-master-page-build-list.md` allows it.

---

# 137. Critical Audience Rules

### Rule 1

Audience pages must represent distinct customer or referral intent.

### Rule 2

Keyword variants do not create new audiences.

### Rule 3

Audience pages should focus on audience decisions rather than duplicate service pages.

### Rule 4

Home buyers are a primary strategic audience.

### Rule 5

Real estate agents and home inspectors are important referral audiences.

### Rule 6

Property managers are a residential-focused audience: landlords, residential rental homes, residential property managers, and apartment or multifamily residential properties.

### Rule 7

Audience + location production publication is post-launch by default unless the Master Page Build List states otherwise. Development may begin earlier.

### Rule 8

Do not mass-publish the theoretical 5,790 audience-location combinations.

### Rule 9

Las Vegas audience-local pages may be built, published, and indexed under the same quality and business-truth standards as the other active markets.

---

# 138. Critical Commercial Rules

Removed (owner decision, Oct 12, 2026): commercial services are not offered. Do not build commercial content or architecture.

---

# 139. Production Publication and Indexation Authority

The following are never sufficient by themselves to publish or index a page:

```text
Audience Exists
Audience-Service Relationship Exists
Audience-Location Relationship Exists
Search Volume Exists
Claude Suggests Page
Competitor Has Page
```

A production page requires a publication state in:

```text
04-master-page-build-list.md
```

An indexable page additionally requires the appropriate indexation state. Neither requirement prevents research, drafting, template creation, candidate-route generation, or protected-preview QA.

---

# 140. Final Audience Principle

The Sewer Pros should use audience architecture to move beyond generic service SEO and address **why different customers need sewer expertise**.

The audience model is:

```text
Customer Role
↓
Customer Problem
↓
Relevant Service
↓
Evidence / Documentation
↓
Decision
↓
Conversion
```

The opportunity universe may eventually contain thousands of mathematically valid relationships.

The website should publish only those with:

```text
Distinct Intent
+
Real Business Value
+
Verified Capability
+
Geographic Relevance
+
Useful Content
+
Master Page Publication and Indexation State
```

The governing principle is:

```text
Model Audiences Broadly
Publish Selectively
Measure Results
Expand From Evidence
```

**The audience matrix models who the company can serve and where opportunity exists.
The Master Page Build List controls which relationships become production pages and whether those pages are indexable; it does not prevent promising relationships from being researched, drafted, built, or reviewed.**
