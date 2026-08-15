# The Sewer Pros — Audience & Commercial Matrix

**Document:** `09-audience-commercial-matrix.md`
**Project:** The Sewer Pros Website Rebuild
**Repository:** `the-sewer-pros-site`
**Status:** Foundation / Audience & Commercial Opportunity Authority
**Document Role:** Audience taxonomy, commercial-segment taxonomy, audience-to-service relationships, audience-to-location relationships, commercial-to-service relationships, and commercial-to-location opportunity governance
**Primary Markets:** St. Louis, MO; San Diego, CA; Las Vegas, NV

---

# 1. Purpose

This document defines how The Sewer Pros website should model:

* customer audiences
* referral audiences
* property-management audiences
* commercial customer segments
* audience-to-service relationships
* audience-to-location relationships
* commercial-segment-to-service relationships
* commercial-segment-to-location relationships
* audience page opportunities
* audience + location opportunities
* commercial page opportunities
* commercial + location opportunities
* conversion pathways
* publishing priorities
* matrix eligibility
* page-generation safeguards

This document answers:

> **Who does The Sewer Pros serve, which services matter to each audience, where does geographic targeting make sense, and which commercial segments deserve dedicated acquisition pathways?**

This document does **not** independently authorize every potential page.

Page authorization remains controlled by:

`04-master-page-build-list.md`

---

# 2. Core Matrix Principle

The website should not treat every:

```text
Audience
×
Location
```

or:

```text
Commercial Segment
×
Location
×
Service
```

combination as a page.

The matrix exists to model opportunity.

The governing rule is:

```text
Relationship
≠
Page
```

and:

```text
Audience Relevance
≠
Automatic Route
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

09-audience-commercial-matrix.md
↓
Defines audience/commercial relationships

04-master-page-build-list.md
↓
Authorizes actual pages

05-url-routing-strategy.md
↓
Defines canonical routes
```

---

# 4. Audience vs Commercial Segment

The project distinguishes between:

## Audience

A person, role, referral source, or decision-maker.

Examples:

* Home Buyer
* Real Estate Agent
* Property Manager
* Facility Manager

## Commercial Segment

A property type, business environment, operating context, or commercial vertical.

Examples:

* Restaurant / Food Service
* Multifamily
* Hospitality
* Retail
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

is primarily a commercial/property segment.

A property manager may manage multifamily properties.

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

The initial audience model contains **13 strategic audience records**.

| ID                               | Audience                             | Role                                    | Current Page Status |
| -------------------------------- | ------------------------------------ | --------------------------------------- | ------------------- |
| `aud-homeowners`                 | Homeowners                           | Customer                                | Phase 2             |
| `aud-home-buyers`                | Home Buyers                          | Customer                                | Launch              |
| `aud-home-sellers`               | Home Sellers                         | Customer                                | Launch              |
| `aud-real-estate-agents`         | Real Estate Agents                   | Referral / Customer Coordinator         | Launch              |
| `aud-home-inspectors`            | Home Inspectors                      | Referral / Professional                 | Launch              |
| `aud-property-managers`          | Property Managers                    | Commercial / Residential Decision-Maker | Launch              |
| `aud-hoa-communities`            | HOA Communities                      | Property / Organizational Audience      | Launch              |
| `aud-real-estate-investors`      | Real Estate Investors                | Customer                                | Phase 2             |
| `aud-landlords`                  | Landlords                            | Customer                                | Phase 2             |
| `aud-contractors-remodelers`     | Contractors & Remodelers             | Professional / Referral                 | Phase 2             |
| `aud-facility-managers`          | Facility Managers                    | Commercial Decision-Maker               | Phase 2             |
| `aud-restaurants`                | Restaurants & Food-Service Operators | Commercial Operator                     | Phase 2             |
| `aud-commercial-property-owners` | Commercial Property Owners           | Commercial Decision-Maker               | Phase 2             |

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
/for/facility-managers/
/for/restaurants/
/for/commercial-properties/
```

These should be promoted according to:

* demand
* conversion data
* commercial strategy
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
    | 'commercial_operator'
    | 'organization'

  pageStatus:
    | 'launch'
    | 'phase_2'
    | 'phase_3'
    | 'hold'

  primaryNeeds: string[]
  primaryServices: string[]
  secondaryServices: string[]

  locationMatrixRule:
    | 'full_on_relevant_locations'
    | 'selective'
    | 'commercial_only'
    | 'hold'

  markets: Record<string, string>

  aliases?: string[]
}
```

---

# 10. Audience Matrix Status Model

Recommended audience-location relationship statuses:

| Status                              | Meaning                                        |
| ----------------------------------- | ---------------------------------------------- |
| `strong_candidate`                  | Strong audience + geography fit                |
| `phase_2_candidate`                 | Valid post-launch opportunity                  |
| `selective_candidate`               | Requires stronger evidence                     |
| `low_intent_fit`                    | Weak standalone audience search intent         |
| `commercial_fit_only`               | Better handled through commercial architecture |
| `operational_confirmation_required` | Market/service availability not confirmed      |
| `hold_location`                     | Geography should not generate audience pages   |
| `research_only`                     | Retained only for planning                     |

---

# 11. Audience × Location Mathematical Universe

With:

```text
13 strategic audiences
×
579 geographic records
```

the theoretical audience-location universe would contain:

```text
7,527 relationships
```

This number is useful for opportunity modeling only.

It does **not** mean the website should eventually contain 7,527 audience + location pages.

---

# 12. Audience + Location Canonical Pattern

When approved:

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

Only approved relationships should generate these routes.

---

# 13. Audience Page Purpose

Audience pages should answer:

> **Why would someone in this particular role use The Sewer Pros?**

They should focus on:

* the audience's decision
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
Sewer Cleaning + Camera Inspection
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
Sewer Cleaning + Camera Inspection
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

but page authorization still requires specific evaluation.

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
Sewer Cleaning + Camera Inspection
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
Sewer Cleaning + Camera Inspection
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
Sewer Cleaning + Camera Inspection
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
* tenant disruption
* property documentation
* sewer maintenance
* drain maintenance
* commercial/multifamily coordination
* service across multiple properties

## Primary Services

```text
Sewer Camera Inspection
Sewer Cleaning
Hydro Jetting
Sewer Cleaning + Camera Inspection
Drain Cleaning
Recurring Sewer Backup Diagnosis
Preventative Sewer Maintenance
Commercial Sewer Camera Inspection
Commercial Sewer Cleaning
Commercial Hydro Jetting
Commercial Drain Cleaning
Commercial Preventative Maintenance
```

## Secondary Service

```text
Commercial Sewer Line Locating
```

## Location Matrix

```text
full_on_property_management_and_commercial_locations
```

Property managers represent one of the strongest intersections between audience and commercial architecture.

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
Commercial Sewer Camera Inspection
Commercial Sewer Cleaning
Commercial Hydro Jetting
Commercial Preventative Maintenance
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
Sewer Cleaning + Camera Inspection
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
Sewer Cleaning + Camera Inspection
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

**ID:** `aud-facility-managers`
**Canonical URL:** `/for/facility-managers/`
**Page Status:** `phase_2`

## Primary Needs

* reduce operational disruption
* diagnose recurring problems
* preventative maintenance
* schedule service
* maintain documentation
* manage larger or complex properties

## Primary Services

```text
Commercial Sewer Camera Inspection
Commercial Sewer Cleaning
Commercial Hydro Jetting
Commercial Drain Cleaning
Commercial Preventative Maintenance
Commercial Sewer Line Locating
```

## Location Matrix

```text
full_on_commercial_eligible_locations
```

---

# 27. Restaurants & Food-Service Operators

**ID:** `aud-restaurants`
**Canonical URL:** `/for/restaurants/`
**Page Status:** `phase_2`

## Primary Needs

* grease/sludge buildup
* recurring drain blockages
* sewer backups
* business interruption
* maintenance scheduling

## Primary Services

```text
Commercial Hydro Jetting
Commercial Drain Cleaning
Commercial Sewer Cleaning
Commercial Preventative Maintenance
Commercial Sewer Camera Inspection
Commercial Grease & Sludge Removal
```

## Location Matrix

```text
full_on_restaurant_and_commercial_locations
```

## Critical Boundary

Do not claim:

```text
Grease Trap Cleaning
```

unless separately confirmed.

The current relevant capability is sewer/drain-line grease and sludge removal.

---

# 28. Commercial Property Owners

**ID:** `aud-commercial-property-owners`
**Canonical URL:** `/for/commercial-properties/`
**Page Status:** `phase_2`

## Primary Needs

* protect property operations
* diagnose sewer issues
* maintain lines
* reduce recurring backups
* obtain documentation
* coordinate tenant/property needs

## Primary Services

```text
Commercial Sewer Camera Inspection
Commercial Sewer Cleaning
Commercial Hydro Jetting
Commercial Drain Cleaning
Commercial Preventative Maintenance
Commercial Sewer Line Locating
```

## Location Matrix

```text
full_on_commercial_eligible_locations
```

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

Commercial SEO should function as its own acquisition channel.

Canonical hub:

```text
/commercial/
```

Commercial architecture should answer questions related to:

* property operations
* recurring maintenance
* tenant/customer disruption
* high-use drain systems
* documentation
* scheduling
* commercial property coordination

---

# 32. Canonical Commercial Segments

The initial commercial segment taxonomy contains **8 strategic segments**.

| ID                             | Commercial Segment               | Type                    |
| ------------------------------ | -------------------------------- | ----------------------- |
| `comseg-restaurants`           | Restaurants & Food Service       | Industry                |
| `comseg-property-management`   | Property Management              | Operating Model         |
| `comseg-multifamily`           | Multifamily Properties           | Property Type           |
| `comseg-hoa`                   | HOA Communities                  | Property / Organization |
| `comseg-hospitality`           | Hotels & Hospitality             | Industry                |
| `comseg-retail`                | Retail Properties                | Property / Industry     |
| `comseg-facilities`            | Facilities / Facility Management | Operating Context       |
| `comseg-commercial-properties` | Commercial Properties            | Umbrella Segment        |

These segments are opportunity-model entities.

They are not all approved standalone pages.

---

# 33. Commercial Segment × Location Universe

If all eight commercial segments were mathematically evaluated against all 579 geographic records:

```text
8 × 579
=
4,632 commercial-segment × location relationships
```

Again:

```text
4,632 relationships
≠
4,632 pages
```

Most should never become standalone URLs.

---

# 34. Commercial Service Layer

The canonical commercial service registry contains:

```text
Commercial Sewer Camera Inspection
Commercial Sewer Cleaning
Commercial Hydro Jetting
Commercial Drain Cleaning
Commercial Sewer Line Locating
Commercial Preventative Sewer & Drain Maintenance
Commercial Grease & Sludge Removal
```

The commercial matrix therefore operates across two dimensions:

```text
Commercial Segment
↔
Commercial Service
```

and:

```text
Commercial Segment
↔
Location
```

---

# 35. Commercial Service-to-Segment Matrix

| Commercial Segment    | Camera    | Sewer Cleaning | Hydro Jetting | Drain Cleaning | Locating    | Maintenance | Grease / Sludge |
| --------------------- | --------- | -------------- | ------------- | -------------- | ----------- | ----------- | --------------- |
| Restaurants           | Secondary | Primary        | Primary       | Primary        | Situational | Primary     | Primary         |
| Property Management   | Primary   | Primary        | Primary       | Primary        | Secondary   | Primary     | Secondary       |
| Multifamily           | Primary   | Primary        | Primary       | Primary        | Secondary   | Primary     | Situational     |
| HOA Communities       | Primary   | Primary        | Primary       | Primary        | Secondary   | Primary     | Situational     |
| Hospitality           | Primary   | Primary        | Primary       | Primary        | Secondary   | Primary     | Secondary       |
| Retail                | Primary   | Primary        | Primary       | Primary        | Secondary   | Primary     | Situational     |
| Facilities            | Primary   | Primary        | Primary       | Primary        | Primary     | Primary     | Secondary       |
| Commercial Properties | Primary   | Primary        | Primary       | Primary        | Secondary   | Primary     | Secondary       |

---

# 36. Restaurants & Food Service

**Commercial Segment ID:** `comseg-restaurants`

## Strongest Services

```text
Commercial Hydro Jetting
Commercial Drain Cleaning
Commercial Sewer Cleaning
Commercial Preventative Maintenance
Commercial Grease & Sludge Removal
```

## Supporting Service

```text
Commercial Sewer Camera Inspection
```

## Geographic Priority

Prioritize:

* restaurant districts
* hospitality corridors
* mixed-use districts
* downtown districts
* high-density commercial areas

## Conversion Context

Primary concerns:

* closures
* kitchen disruption
* recurring clogs
* grease/sludge buildup
* customer impact
* maintenance scheduling

---

# 37. Property Management

**Commercial Segment ID:** `comseg-property-management`

Property management is both:

* an audience
* a commercial operating model

## Strongest Services

```text
Commercial Sewer Camera Inspection
Commercial Sewer Cleaning
Commercial Hydro Jetting
Commercial Drain Cleaning
Commercial Preventative Maintenance
```

## Secondary Service

```text
Commercial Sewer Line Locating
```

## Geographic Priority

Prioritize:

* multifamily-heavy locations
* rental-property concentrations
* dense residential markets
* mixed-use areas
* major commercial markets

---

# 38. Multifamily Properties

**Commercial Segment ID:** `comseg-multifamily`

## Strongest Services

```text
Commercial Sewer Camera Inspection
Commercial Sewer Cleaning
Commercial Hydro Jetting
Commercial Drain Cleaning
Commercial Preventative Maintenance
```

## Primary Problems

* repeated building backups
* shared sewer systems
* high usage
* tenant disruption
* recurring drain issues
* scheduled maintenance

## Matrix Rule

```text
selective_high_value
```

Do not automatically create multifamily pages for every residential suburb.

---

# 39. HOA Communities

**Commercial Segment ID:** `comseg-hoa`

This segment overlaps the launch audience:

```text
/for/hoa-communities/
```

The audience page should normally serve the primary HOA entity.

Avoid creating a duplicate:

```text
/commercial/hoa-communities/
```

unless future intent analysis proves a materially separate need.

---

# 40. Hotels & Hospitality

**Commercial Segment ID:** `comseg-hospitality`

## Strongest Services

```text
Commercial Drain Cleaning
Commercial Sewer Cleaning
Commercial Hydro Jetting
Commercial Sewer Camera Inspection
Commercial Preventative Maintenance
```

## Geographic Priority

Hospitality opportunity is particularly relevant to:

```text
Las Vegas Strip
Paradise
Downtown Las Vegas
San Diego hospitality districts
major hotel / tourism corridors
```

Las Vegas pages remain subject to operational validation.

---

# 41. Retail Properties

**Commercial Segment ID:** `comseg-retail`

## Primary Services

```text
Commercial Drain Cleaning
Commercial Sewer Cleaning
Commercial Sewer Camera Inspection
Commercial Hydro Jetting
Commercial Preventative Maintenance
```

## Geographic Priority

* shopping districts
* commercial corridors
* downtown areas
* mixed-use districts

---

# 42. Facility Management

**Commercial Segment ID:** `comseg-facilities`

The corresponding human decision-maker is:

```text
Facility Manager
```

## Strongest Services

```text
Commercial Sewer Camera Inspection
Commercial Sewer Cleaning
Commercial Hydro Jetting
Commercial Drain Cleaning
Commercial Sewer Line Locating
Commercial Preventative Maintenance
```

## Core Value

* documentation
* scheduling
* diagnostics
* maintenance
* operational continuity

---

# 43. Commercial Properties

**Commercial Segment ID:** `comseg-commercial-properties`

This is the umbrella commercial segment.

Potential audience page:

```text
/for/commercial-properties/
```

The commercial hub:

```text
/commercial/
```

should remain the broader service-system parent.

Avoid unnecessary overlap between these pages.

---

# 44. Commercial Segment Standalone Page Rule

Do not automatically create:

```text
/commercial/restaurants/
/commercial/hotels/
/commercial/retail/
/commercial/multifamily/
```

simply because a segment exists.

A standalone commercial-segment page requires:

1. distinct search intent
2. meaningful conversion potential
3. differentiated content
4. multiple relevant services
5. low overlap with `/for/` pages
6. page-build-list approval

---

# 45. Audience vs Commercial URL Decision

Where the concept represents primarily **who the user is**, prefer:

```text
/for/{audience}/
```

Example:

```text
/for/property-managers/
```

Where the concept represents primarily **what commercial service is needed**, prefer:

```text
/commercial/{service}/
```

Example:

```text
/commercial/hydro-jetting/
```

Avoid creating redundant audience and commercial pages targeting the same intent.

---

# 46. Commercial + Location Pattern

When approved:

```text
/{canonical-location-path}/commercial/{service}/
```

Example:

```text
/san-diego-ca/mission-valley/commercial/hydro-jetting/
```

Commercial-service + location architecture is governed jointly by:

* the Service × Location Matrix
* this commercial-fit model
* the Master Page Build List

---

# 47. Audience + Location Pattern

When approved:

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
13 audiences
×
579 locations
=
7,527 pages
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

Likewise, do not generate every possible:

```text
Commercial Segment
×
Location
```

or:

```text
Commercial Service
×
Commercial Segment
×
Location
```

combination.

A mathematical cube is useful for research.

It is not a publishing plan.

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

## Property Managers + Multifamily / Commercial Locations

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

after Las Vegas validation.

These remain strategic examples, not automatic approvals.

---

# 51. Audience Location Eligibility Factors

Evaluate:

* audience search demand
* local population/property context
* real estate activity
* commercial activity
* referral value
* geographic importance
* service demand
* content differentiation
* conversion potential
* overlap with existing pages

---

# 52. Commercial Location Eligibility Factors

Evaluate:

* commercial property density
* restaurant concentration
* hotel/hospitality concentration
* multifamily
* industrial activity
* property-management presence
* mixed-use development
* service demand
* actual operating coverage

---

# 53. Location Registry Priority Tags

The location registry already provides useful signals such as:

```text
residential
real_estate
property_management
commercial
```

These tags should influence audience/commercial matrix evaluation.

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

A location tagged:

```text
commercial
```

may strengthen:

```text
Property Managers
Facility Managers
Commercial Property Owners
Restaurants
Commercial Services
```

but should not automatically activate every commercial page family.

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

Conceptually:

```text
Commercial Segment Fit
+
Location Commercial Fit
+
Service Fit
+
Operational Capability
+
Search Intent
+
Conversion Potential
=
Commercial Opportunity Status
```

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

```ts
export type CommercialMatrixStatus =
  | 'strong_commercial_candidate'
  | 'phase_2_candidate'
  | 'selective_candidate'
  | 'low_commercial_fit'
  | 'operational_confirmation_required'
  | 'conditional_location'
  | 'hold_location'
  | 'research_only'
```

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

Recommended model:

```ts
export interface CommercialLocationRelationship {
  relationshipId: string

  commercialSegmentId: string
  locationId: string
  marketId: string

  status: CommercialMatrixStatus

  relevantCommercialServiceIds: string[]

  commercialFit:
    | 'strong'
    | 'moderate'
    | 'weak'

  candidatePathname?: string

  reason: string
}
```

Not every commercial relationship requires its own pathname.

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

Recommended:

```text
/data/matrices/commercial-segment-service-matrix.json
```

This should define:

```text
Restaurant
→ Hydro Jetting
→ Primary
```

rather than burying these relationships only in page copy.

---

# 64. Commercial Segment-to-Location Matrix

Recommended:

```text
/data/matrices/commercial-location-matrix.json
```

This can identify high-value commercial geographies independently of service + location relationships.

---

# 65. Audience Page Authorization Rule

An audience existing in the registry does not mean its page automatically exists.

Example:

```text
aud-homeowners
```

exists strategically.

Current page authorization:

```text
phase_2
```

No production route should be generated as a launch page unless the Master Page Build List is updated.

---

# 66. Audience + Location Authorization Rule

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

must not exist until explicitly approved.

---

# 67. Commercial Authorization Rule

A commercial segment may strongly relate to a service and geography.

Example:

```text
Restaurant
+
Mission Valley
+
Commercial Hydro Jetting
```

But publication may be handled through:

```text
/san-diego-ca/mission-valley/commercial/hydro-jetting/
```

rather than creating a separate restaurant-specific route.

The project should choose the smallest set of pages necessary to satisfy distinct intent.

---

# 68. Cannibalization Rule

Before approving an audience or commercial page, compare it against:

* canonical service page
* local service page
* commercial service page
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

/commercial/preventative-maintenance/

/san-diego-ca/mission-valley/commercial/preventative-maintenance/
```

should each have different primary intent.

### `/for/property-managers/`

Focus:

> Why property managers work with The Sewer Pros.

### `/commercial/preventative-maintenance/`

Focus:

> What commercial preventative maintenance service provides.

### Local Commercial Page

Focus:

> Commercial preventative maintenance in a specific approved geography.

---

# 70. Restaurant Cannibalization Example

Potential:

```text
/for/restaurants/
```

and:

```text
/commercial/hydro-jetting/
```

must remain distinct.

### Restaurants Page

Focus:

* food-service operational needs
* drain/sewer risks
* relevant service mix

### Hydro Jetting Page

Focus:

* hydro-jetting service
* process
* use cases
* commercial applications

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
* commercial property owners

North County may provide especially strong real-estate audience opportunities.

Audience-local expansion should remain data-driven.

---

# 74. Las Vegas Audience Gate

Las Vegas audience relationships may be modeled before launch.

Customer-facing local audience pages should not be activated until:

* operations are confirmed
* applicable services are confirmed
* geographic coverage is validated

This is the same operational gate used elsewhere in the Las Vegas architecture.

---

# 75. Las Vegas Commercial Opportunity

Once operations are confirmed, Las Vegas may present substantial commercial opportunities around:

```text
Restaurants
Hotels
Hospitality
Retail
Property Management
Facilities
Commercial Properties
```

Priority geographies may include:

```text
Las Vegas Strip
Paradise
Downtown Las Vegas
Henderson
North Las Vegas
commercial corridors
industrial districts
```

These are research priorities, not launch authorization.

---

# 76. Commercial Packaging Validation

Some commercial services extend proven technical capabilities into dedicated commercial messaging.

Therefore, distinguish:

```text
Technical Capability Confirmed
```

from:

```text
Every Commercial Offer Detail Confirmed
```

Do not invent:

* service contracts
* emergency response times
* after-hours availability
* annual maintenance frequency
* account management systems
* equipment capacity
* multi-property pricing
* guaranteed response windows

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

Commercial pages should emphasize:

* operational continuity
* recurring maintenance
* documentation
* scheduling
* property coordination
* disruption reduction
* high-use systems
* multi-unit or business environments

Commercial pages should not be residential pages with the word "commercial" inserted.

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
Commercial / Maintenance Services
↓
Relevant Local Commercial Page
↓
Request Service
```

---

# 82. Conversion Path — Restaurant

```text
Restaurant Drain Problem
↓
/for/restaurants/
or
Commercial Service Page
↓
Commercial Hydro Jetting / Drain Cleaning
↓
Relevant Local Commercial Page
↓
Request Commercial Service
```

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
* relevant commercial pages
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

Example:

```text
Commercial Hydro Jetting
→ Property Managers
→ Restaurants
→ Facility Managers
```

when those pages exist.

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

Commercial pages should highlight:

* strongest commercial markets
* selected commercially relevant locations

Do not display hundreds of city/neighborhood links.

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

Commercial research may include:

```text
commercial sewer inspection
commercial hydro jetting
restaurant drain cleaning
property management sewer service
multifamily sewer maintenance
commercial drain maintenance
```

The project should determine whether these map best to:

* commercial service pages
* audience pages
* commercial segment pages
* local commercial pages
* resources

before creating routes.

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

# 93. Commercial Alias Rule

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
4. Facility Managers
5. Restaurants
6. Commercial Property Owners
7. Contractors / Remodelers
```

Actual priority should respond to:

* lead data
* referral opportunities
* Search Console
* commercial demand
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
6. Facility Managers + commercial districts
```

---

# 97. Commercial Expansion Order

Recommended:

```text
1. Commercial service pages
2. High-value commercial + location pages
3. Restaurant / food-service audience
4. Facility-manager audience
5. Commercial-property-owner audience
6. Multifamily opportunities
7. Hospitality opportunities
8. Retail opportunities
9. More specialized commercial segments
```

---

# 98. Current Launch Commercial Services

Already approved:

```text
/commercial/sewer-camera-inspection/
/commercial/sewer-cleaning/
/commercial/hydro-jetting/
/commercial/drain-cleaning/
/commercial/preventative-maintenance/
```

These should establish commercial topical authority before large-scale commercial-location expansion.

---

# 99. Phase 2 Commercial Services

Current Phase 2:

```text
/commercial/sewer-line-locating/
/commercial/grease-sludge-removal/
```

These remain narrower opportunities.

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

Current launch:

```text
0 commercial + location pages
```

This is intentional.

Commercial-local expansion begins after:

* core commercial pages exist
* market/location architecture exists
* local commercial demand can be prioritized

---

# 102. Post-Launch Data Signals

Audience and commercial page promotion should increasingly respond to:

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

which may justify a new local commercial page.

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
* commercial-owner leads

This helps determine which audience architecture is producing business value.

---

# 105. Commercial Analytics

Commercial reporting should distinguish:

* service
* market
* location
* commercial segment
* lead value
* conversion

A lower-traffic commercial page may still be strategically valuable if it produces higher-value leads.

---

# 106. Matrix Promotion Workflow

```text
Audience / Commercial Opportunity
↓
Service Fit
↓
Location Fit
↓
Search Intent
↓
Conversion Potential
↓
Cannibalization Review
↓
Operational Validation
↓
Master Page Build List
↓
Content
↓
QA
↓
Publish
```

---

# 107. Audience Page Quality Gate

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

# 108. Audience + Location Quality Gate

Require:

* strong audience/location relevance
* unique geographic information
* legitimate service availability
* audience-specific local problem/decision context
* no duplicate city swapping
* useful internal links
* conversion value

---

# 109. Commercial Page Quality Gate

Require:

* verified commercial capability
* clear business-use intent
* real relevant services
* commercial-specific concerns
* no fabricated equipment or response claims
* meaningful CTA

---

# 110. Commercial + Location Quality Gate

Require:

* strong commercial geographic fit
* verified operational coverage
* relevant commercial service
* local commercial context
* differentiated content
* adequate search or conversion opportunity

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

Likewise, do not create:

```text
Restaurant Sewer Services
Hotel Sewer Services
Retail Sewer Services
Office Sewer Services
Warehouse Sewer Services
```

from identical content with only the business type replaced.

Industry pages require meaningful:

* operational differences
* service differences
* problem differences
* conversion differences

---

# 113. No Fake Local Commercial Presence

A local commercial landing page must not imply:

* a local office
* dedicated local commercial division
* local staff base
* separate GBP

unless those facts are true.

It represents service-area targeting.

---

# 114. Schema Rule

Schema should describe actual page entities.

Audience pages do not need invented business entities for each customer group.

Commercial-local pages must not fabricate separate LocalBusiness locations.

Structured data strategy will be defined in:

`15-schema-entity-strategy.md`

---

# 115. Matrix and AI Search

The audience/commercial relationship system should help AI systems understand statements such as:

```text
The Sewer Pros provides pre-purchase sewer inspections for home buyers.
```

```text
The Sewer Pros provides commercial hydro jetting for restaurants and property managers.
```

```text
The Sewer Pros provides sewer inspection and cleaning services in approved markets.
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

Commercial example:

```text
Property Management
├── Property Managers
├── Commercial Sewer Cleaning
├── Commercial Hydro Jetting
├── Preventative Maintenance
├── Recurring Backup Resources
└── Relevant Commercial Locations
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

/data/commercial/master-commercial-segment-registry.json

/data/matrices/audience-service-matrix.json

/data/matrices/audience-location-matrix.json

/data/matrices/commercial-segment-service-matrix.json

/data/matrices/commercial-location-matrix.json
```

---

# 119. Full Mathematical Matrices Are Research Data

If the complete matrices are generated:

```text
Audience × Location:
13 × 579 = 7,527
```

```text
Commercial Segment × Location:
8 × 579 = 4,632
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

Likewise prohibited:

```ts
commercialSegments.flatMap((segment) =>
  locations.map((location) => ({
    segment,
    location,
  }))
)
```

---

# 121. Correct Route Generation

Production routes should derive from:

```text
04-master-page-build-list.md
```

Example:

```ts
const approvedAudiencePages =
  pageRegistry.filter(
    (page) =>
      page.pageType === 'audience' ||
      page.pageType === 'audience-location'
  )
```

Commercial pages follow the same principle.

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

Recommended:

```text
{commercialSegmentId}::{locationId}
```

Example:

```text
comseg-restaurants::loc-sd-mission-valley
```

Commercial service relationships can reference separate service IDs.

---

# 124. Business Reality Override

No matrix relationship may override:

* actual service capability
* actual service area
* commercial capacity
* business model
* legal requirements
* brand positioning

An SEO opportunity can be rejected because the business should not make the claim.

---

# 125. Sewer Repair Boundary

Audience and commercial content must not drift into selling:

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
Commercial Property Owners
```

Messaging may emphasize:

* evidence
* inspection
* documentation
* informed decisions
* absence of repair-driven sales incentive

without attacking competitors.

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

Commercial content should increasingly incorporate verified proof such as:

* actual commercial project experience
* property types served
* service documentation
* case studies
* recurring-client relationships
* reviews
* service photos

Do not fabricate proof to make a page appear commercially established.

---

# 129. Future Commercial Segments

Potential future segments may include:

```text
Office Buildings
Industrial Properties
Warehouses
Healthcare Facilities
Schools
Municipal Facilities
Senior Living
Shopping Centers
Mixed-Use Developments
```

These are **research opportunities**, not approved canonical segments.

They should be added only when business demand and service fit justify them.

---

# 130. Future Audience Segments

Potential future audiences may include:

```text
Developers
General Contractors
HOA Board Members
Real Estate Brokers
Municipal Property Managers
Maintenance Supervisors
Asset Managers
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

# 132. Commercial Consolidation Rule

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

A commercial segment may remain in research data even if its standalone page is retired.

Again:

```text
Entity Relationship
≠
Page Requirement
```

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
* commercial segment definitions
* audience-service fit
* audience-location fit
* commercial-service fit
* commercial-location fit
* project-specific publishing guardrails

---

# 136. `CLAUDE.md` Audience/Commercial Rule

`CLAUDE.md` should eventually state:

> Audience and commercial matrices are opportunity models, not route manifests. Never generate an audience + location or commercial + location route unless the page is explicitly authorized in `04-master-page-build-list.md`.

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

Property managers represent both audience and commercial acquisition opportunity.

### Rule 7

Audience + location pages begin post-launch unless explicitly approved otherwise.

### Rule 8

Do not mass-publish the theoretical 7,527 audience-location combinations.

### Rule 9

Las Vegas audience-local pages remain subject to operational validation.

---

# 138. Critical Commercial Rules

### Rule 1

Commercial is a dedicated acquisition channel.

### Rule 2

Commercial services must use real confirmed capabilities.

### Rule 3

Commercial pages must not duplicate residential copy.

### Rule 4

Commercial geography requires real commercial fit.

### Rule 5

Commercial + location pages begin post-launch unless explicitly approved otherwise.

### Rule 6

Do not mass-publish commercial-segment matrices.

### Rule 7

Restaurants are strongly connected to hydro jetting, drain cleaning, sewer cleaning, and preventative maintenance.

### Rule 8

Grease/sludge removal does not automatically mean grease-trap cleaning.

### Rule 9

Property managers, facility managers, and commercial property owners are high-value decision-maker audiences.

### Rule 10

Hotels/hospitality and Las Vegas commercial opportunities remain subject to operational validation.

---

# 139. Publishing Authority Rule

The following are never sufficient by themselves to create a page:

```text
Audience Exists
Commercial Segment Exists
Audience-Service Relationship Exists
Audience-Location Relationship Exists
Commercial-Service Relationship Exists
Commercial-Location Relationship Exists
Search Volume Exists
Claude Suggests Page
Competitor Has Page
```

A page requires:

```text
04-master-page-build-list.md
```

authorization.

---

# 140. Final Audience & Commercial Principle

The Sewer Pros should use audience and commercial architecture to move beyond generic service SEO and address **why different customers need sewer expertise**.

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

The commercial model is:

```text
Commercial Environment
↓
Operational Risk
↓
Relevant Commercial Service
↓
Relevant Geography
↓
Maintenance / Diagnostic Need
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
Master Page Approval
```

The governing principle is:

```text
Model Audiences Broadly
Model Commercial Opportunity Deeply
Publish Selectively
Measure Results
Expand From Evidence
```

**The audience and commercial matrices model who the company can serve and where opportunity exists.
The Master Page Build List decides which of those relationships become website pages.**
