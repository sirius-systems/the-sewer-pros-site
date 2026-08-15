# The Sewer Pros — Information Architecture

**Document:** `03-information-architecture.md`
**Project:** The Sewer Pros Website Rebuild
**Repository:** `the-sewer-pros-site`
**Status:** Foundation
**Document Role:** Site hierarchy, page-family, relationship, and navigation source of truth
**Primary Markets:** St. Louis, MO; San Diego, CA; Las Vegas, NV

---

# 1. Purpose

This document defines the information architecture for The Sewer Pros website.

It establishes how the site's:

* pages
* services
* markets
* locations
* audiences
* commercial segments
* comparison content
* alternative content
* resource clusters
* navigation
* internal relationships

fit together as a coherent website.

This document determines **how information is organized**.

It does not independently authorize every potential page.

Final route authorization is controlled by:

`04-master-page-build-list.md`

Final URL structures are controlled by:

`05-url-routing-strategy.md`

---

# 2. Core Architecture Principle

The Sewer Pros website will use a **hub-and-spoke, entity-driven, multi-market architecture**.

The architecture should allow users and search systems to move logically among:

* company
* service
* market
* location
* audience
* commercial
* comparison
* alternative
* educational resource

entities.

The site should not function as a disconnected collection of SEO landing pages.

Every approved page should have a meaningful place within the broader site hierarchy.

---

# 3. Architecture Objectives

The information architecture must support:

1. clear user navigation
2. clear search-engine crawl paths
3. multi-market scalability
4. topical authority
5. local search visibility
6. commercial-intent search
7. audience-specific search
8. answer-engine optimization
9. AI retrieval and entity understanding
10. internal-link scalability
11. controlled service + location expansion
12. conversion journeys
13. future market expansion
14. future service expansion
15. logical breadcrumb structures
16. logical sitemap organization
17. minimal keyword cannibalization
18. minimal orphan-page risk

---

# 4. Core Website Layers

The site should be understood as several interconnected architectural layers.

```text
Company Layer
    ↓
Service Layer
    ↓
Market Layer
    ↓
Location Layer
    ↓
Audience / Commercial Layer
    ↓
Service + Location / Audience + Location / Commercial + Location
    ↓
Comparison / Alternative Layer
    ↓
Resource / Topic Authority Layer
```

These are conceptual layers.

They do not necessarily represent literal URL depth.

The final route depth will be defined separately.

---

# 5. Primary Site Entities

The site's primary entities are:

## Company

**The Sewer Pros**

---

## Services

Canonical sewer and drain services maintained in:

`06-master-service-registry.md`

Current research includes:

* 18 canonical service records

---

## Markets

Initial markets:

* St. Louis, Missouri
* San Diego, California
* Las Vegas, Nevada

---

## Locations

Normalized geographic entities maintained in:

`07-master-location-registry.md`

Current research includes:

* 579 normalized geographic records

---

## Audiences

Customer and referral audiences approved in:

`09-audience-commercial-matrix.md`

Potential strategic audiences include:

* homeowners
* homebuyers
* real estate agents
* property investors
* property managers
* commercial property owners
* facility managers
* other approved groups

---

## Commercial Segments

Commercial customer and property segments approved in:

`09-audience-commercial-matrix.md`

Potential examples include:

* property management
* multifamily
* restaurants
* retail
* office
* hospitality
* industrial
* institutional properties

These are not automatically approved page categories.

---

## Resource Topics

Educational entities supporting service and customer-intent clusters.

---

## Comparisons

Decision-stage topics comparing:

* services
* diagnostic methods
* business models
* inspection approaches
* competing solutions

---

## Alternatives

Decision-stage content addressing alternative services, approaches, or providers where strategically appropriate.

---

# 6. High-Level Site Map

The conceptual site structure should resemble:

```text
Home
│
├── Services
│   ├── Service A
│   ├── Service B
│   ├── Service C
│   └── ...
│
├── Locations / Markets
│   ├── St. Louis, MO
│   │   ├── Approved Local Locations
│   │   └── Approved Local Service Pages
│   │
│   ├── San Diego, CA
│   │   ├── Approved Local Locations
│   │   └── Approved Local Service Pages
│   │
│   └── Las Vegas, NV
│       ├── Approved Local Locations
│       └── Approved Local Service Pages
│
├── Who We Serve / Audiences
│   ├── Homeowners
│   ├── Homebuyers
│   ├── Real Estate Agents
│   ├── Property Investors
│   └── ...
│
├── Commercial
│   ├── Commercial Sewer Services
│   ├── Commercial Drain Services
│   ├── Approved Commercial Segments
│   └── Approved Market Variants
│
├── Compare
│   └── Approved Comparison Pages
│
├── Alternatives
│   └── Approved Alternative Pages
│
├── Resources
│   ├── Topic Hubs
│   ├── Guides
│   ├── FAQs
│   └── Educational Articles
│
├── About
└── Contact
```

This is a conceptual hierarchy.

The Master Page Build List determines which nodes actually exist.

---

# 7. Homepage Role

The homepage is the primary company-level hub.

It should establish:

* what The Sewer Pros does
* where the company operates
* core services
* independent inspection positioning
* primary audiences
* commercial capabilities
* trust
* core markets
* important educational pathways
* primary calls to action

The homepage should not attempt to rank for every service and location combination.

Its primary purpose is to establish the company entity and provide strong navigation into the site's major topic areas.

---

# 8. Core Company Pages

Potential company-level pages include:

* Home
* About
* Contact
* Services
* Locations
* Commercial
* Who We Serve
* Resources

Additional core pages may include:

* process
* FAQs
* financing, if applicable
* review/testimonial hub
* privacy policy
* terms
* accessibility
* other legally or operationally required pages

Only approved pages should be added.

---

# 9. Services Hub

A central services hub should organize the approved canonical services.

The services hub should:

* explain the company's specialization
* introduce service categories
* link to canonical service pages
* distinguish inspection from cleaning
* distinguish residential from commercial use cases
* help users identify the appropriate service
* reinforce the independent inspection positioning

The services hub should not simply be a grid of keywords.

---

# 10. Canonical Service Pages

Each strategically approved core service should have a canonical service page.

Examples may include:

* sewer camera inspection
* sewer inspection
* sewer diagnostics
* sewer cleaning
* hydro jetting
* sewer line locating
* drain cleaning
* pre-purchase sewer inspection
* commercial sewer services
* commercial drain services

The exact list is governed by:

`06-master-service-registry.md`

A canonical service page should act as the authoritative site-level entity for that service.

---

# 11. Role of Canonical Service Pages

Canonical service pages should support:

* general service-intent search
* service education
* service entity definition
* internal linking to markets
* internal linking to relevant service + location pages
* relevant audiences
* related commercial applications
* relevant resources
* comparison content
* conversion

They should not compete unnecessarily with local service pages.

---

# 12. Service Page Relationship Model

Conceptually:

```text
Services Hub
     ↓
Canonical Service
     ├── Market Variant
     ├── Location Variant
     ├── Audience Page
     ├── Commercial Application
     ├── Comparison
     └── Resource Cluster
```

The canonical service page should remain the primary generalized page for the service.

---

# 13. Market Hub Architecture

Each primary operating market should have a dedicated market hub.

Initial market hubs:

* St. Louis, MO
* San Diego, CA
* Las Vegas, NV

Each market hub should act as the geographic authority node for that market.

---

# 14. Market Hub Responsibilities

A market hub should organize:

* services available in the market
* relevant locations
* market-specific trust assets
* market-specific service information
* local customer needs
* local resources
* approved commercial services
* approved audience pages
* relevant FAQs
* conversion paths

The market hub should answer:

> What does The Sewer Pros provide in this market?

---

# 15. Market Hub Relationship Model

Conceptually:

```text
Locations / Markets Hub
        ↓
Market Hub
        ├── Core Services
        ├── Local Locations
        ├── Service + Location Pages
        ├── Audience + Market Content
        ├── Commercial + Market Content
        └── Local Resources
```

---

# 16. Market vs Location

A **market** and a **location** are not necessarily the same concept.

For example:

**San Diego** may function as:

* a primary operating market
* a city
* a broader metro reference

depending on context.

The geographic registry must define entity roles clearly.

A market is the operational parent geography.

A location is an approved geographic target within or associated with that market.

---

# 17. Location Pages

Location pages should exist only where there is meaningful local value.

Potential targets may include:

* cities
* municipalities
* communities
* neighborhoods
* other geographic entities

A location page should generally address:

> What sewer and drain services does The Sewer Pros provide in this location?

---

# 18. Location Page Role

Location pages should serve as local overview pages.

They may include:

* relevant services
* local property context
* relevant sewer concerns
* nearby areas served
* market affiliation
* relevant audience needs
* commercial needs
* FAQs
* links to service-specific local pages

A location page should not simply repeat a market hub with the city name replaced.

---

# 19. Location Page Eligibility

A geographic record does not automatically deserve a page.

Potential page eligibility factors include:

* search demand
* customer demand
* operational serviceability
* business relevance
* geographic distinction
* local content availability
* internal-link value
* proximity to the primary market
* conversion potential

Final approval belongs in:

`04-master-page-build-list.md`

---

# 20. Service + Location Architecture

Service + location pages represent high-intent combinations such as:

```text
Service
+
Geographic Intent
```

Conceptual examples:

* sewer camera inspection + location
* hydro jetting + location
* sewer cleaning + location
* drain cleaning + location
* pre-purchase sewer inspection + location

Only strategically approved combinations should exist.

---

# 21. Service + Location Page Role

A service + location page should answer:

> How does The Sewer Pros provide this specific service in this specific geographic area?

It should provide meaningful service-specific and location-specific value.

---

# 22. Service + Location Relationships

Each approved service + location page should connect to:

* canonical service page
* parent market hub
* relevant location page
* related services
* relevant audiences
* applicable resources
* conversion path

Conceptually:

```text
Canonical Service
       ↘
    Service + Location
       ↗
Location / Market
```

This creates dual topical and geographic context.

---

# 23. Service + Location Matrix Rule

Current research includes:

**10,422 service × location relationships**

These represent SEO opportunities.

They do not represent approved pages.

The information architecture must treat:

```text
Opportunity
```

and:

```text
Published Page
```

as separate states.

---

# 24. No Full-Matrix Publication

The site must not create all mathematically possible service/location combinations.

The architecture should avoid:

* doorway-page patterns
* near-duplicate local pages
* crawl bloat
* index bloat
* cannibalization
* low-value pages
* site-wide keyword swapping

The Master Page Build List acts as the publishing gate.

---

# 25. Audience Hub

The website should support a customer/audience architecture.

A potential parent concept is:

**Who We Serve**

This hub can organize approved customer groups.

Potential audiences include:

* homeowners
* homebuyers
* real estate agents
* property investors
* property managers
* commercial customers

The final audience taxonomy will be established separately.

---

# 26. Audience Page Role

Audience pages should answer:

> Why would this specific type of customer use The Sewer Pros?

These pages should focus on the customer's:

* problems
* decisions
* risk
* workflow
* relevant services
* expected outcomes

They should not simply duplicate service pages.

---

# 27. Homeowner Architecture

Homeowner content may organize needs such as:

* backups
* recurring drain problems
* sewer inspections
* second opinions
* line locating
* cleaning

The primary relationship is:

```text
Homeowner Need
↓
Relevant Service
↓
Relevant Market / Location
```

---

# 28. Homebuyer Architecture

Homebuyer content is strategically important because pre-purchase inspection represents a distinct search and conversion intent.

Relevant relationships may include:

```text
Homebuyers
├── Pre-Purchase Sewer Inspection
├── Sewer Camera Inspection
├── Sewer Condition Education
├── Buyer FAQs
└── Market-Specific Inspection Pages
```

---

# 29. Real Estate Agent Architecture

Real estate professional content may support:

* referral intent
* buyer education
* transaction coordination
* sewer inspection scheduling
* inspection documentation

Potential supporting resources can address questions agents commonly receive from clients.

---

# 30. Property Investor Architecture

Investor content may focus on:

* acquisition due diligence
* hidden infrastructure risk
* older properties
* rehab planning
* pre-purchase inspection
* multi-property operations

This audience may overlap with homebuyers but should remain separate if search intent and conversion value justify it.

---

# 31. Property Manager Architecture

Property management content may connect:

```text
Property Managers
├── Sewer Diagnostics
├── Sewer Cleaning
├── Drain Cleaning
├── Hydro Jetting
├── Commercial Services
├── Recurring Maintenance
└── Location-Specific Services
```

This audience can serve as a bridge between residential/multifamily and commercial architecture.

---

# 32. Audience + Location Architecture

Audience + location pages may be appropriate where meaningful local intent exists.

Conceptual examples:

```text
Homebuyer Sewer Inspections in [Market]
Sewer Inspections for Real Estate Agents in [Market]
Property Manager Sewer Services in [Market]
```

These pages require explicit approval.

Do not automatically create audience pages for every one of the 579 geographic records.

---

# 33. Audience + Location Page Test

Before approving an audience + location page, determine whether:

1. the audience is strategically important
2. meaningful local search intent exists
3. the content can be differentiated
4. service availability is verified
5. conversion value is meaningful
6. the page does not cannibalize an existing market page
7. a dedicated page improves user experience

---

# 34. Commercial Hub Architecture

Commercial services should have a dedicated architectural pathway.

Potential parent hub:

**Commercial Sewer & Drain Services**

The commercial hub should explain:

* commercial capabilities
* property types served
* common commercial problems
* relevant services
* maintenance needs
* service coordination
* markets served

---

# 35. Commercial vs Audience Architecture

"Commercial" should not be treated only as another audience keyword.

Commercial may represent:

* property context
* business use case
* service requirements
* operational expectations
* recurring maintenance need

The site should therefore maintain a distinct commercial architecture where justified.

---

# 36. Commercial Service Relationships

Commercial pages may connect to:

* sewer inspection
* sewer cleaning
* hydro jetting
* drain cleaning
* line locating
* diagnostics
* recurring maintenance

Exact service relationships will be governed by approved registries.

---

# 37. Commercial Segment Pages

Potential commercial segments may include:

* restaurants
* multifamily
* property management
* retail
* office
* hospitality
* industrial
* institutional

These should only become standalone pages if demand and business relevance justify them.

---

# 38. Commercial + Location Architecture

Local commercial pages may target combinations such as:

```text
Commercial Sewer Services + Market
Commercial Drain Cleaning + Market
Hydro Jetting for Commercial Properties + Market
```

Only strategically useful combinations should be approved.

The architecture must prevent automatic commercial × 579-location expansion.

---

# 39. Comparison Architecture

Comparison pages address decision-stage queries.

These pages may compare:

* one service versus another
* inspection approaches
* diagnostic approaches
* cleaning methods
* independent inspection versus repair-driven inspection
* different next-step options

Comparison content should help users decide what they actually need.

---

# 40. Comparison Page Role

Comparison pages should:

* answer a legitimate customer question
* explain meaningful differences
* identify use cases
* explain limitations
* link to relevant canonical services
* provide a conversion path

They should not exist only to capture competitor keywords.

---

# 41. Potential Comparison Topics

Subject to research and approval, comparison opportunities may include concepts such as:

* sewer inspection vs sewer scope
* hydro jetting vs drain snaking
* sewer camera inspection vs standard home inspection
* sewer cleaning vs sewer repair
* sewer inspection before vs after purchasing a home
* independent sewer inspection vs repair-company inspection

Final topics belong in the Master Page Build List.

---

# 42. Alternative Page Architecture

Alternative pages address users considering another:

* service
* approach
* provider
* solution
* diagnostic method

Alternative content should be useful rather than adversarial.

---

# 43. Alternative Page Role

An alternative page should help users understand:

* what the alternative is
* how the approaches differ
* when each may be appropriate
* why The Sewer Pros may be relevant
* what the customer should evaluate

Alternative pages should not make unsupported claims about competitors.

---

# 44. Competitor-Specific Pages

Competitor-specific pages require elevated review.

Before publishing a competitor-focused comparison or alternative page, confirm:

* factual accuracy
* legal risk
* current competitor information
* search demand
* conversion value
* content differentiation
* appropriate tone

These pages should not be generated automatically from competitor lists.

---

# 45. Resources Hub

The site should include a resource architecture designed around topic authority.

A central resource hub should organize educational content into logical clusters.

The resource section should not become an unstructured chronological blog archive.

---

# 46. Topic Cluster Architecture

Topic clusters should correspond to core business entities and customer questions.

Potential high-level clusters include:

* sewer inspection
* sewer camera inspection
* sewer diagnostics
* sewer cleaning
* hydro jetting
* sewer line locating
* drain cleaning
* pre-purchase sewer inspections
* sewer problems
* real estate sewer inspections
* commercial sewer maintenance

---

# 47. Resource Cluster Model

Conceptually:

```text
Service Page
    ↕
Topic Hub
    ↕
Educational Articles
    ↕
FAQs / Guides
```

Educational content should reinforce commercial pages.

Commercial pages should provide appropriate pathways back into deeper educational content.

---

# 48. Resource Page Intent Types

Resources may address:

### Awareness

Examples:

* what causes sewer backups
* signs of sewer problems

### Education

Examples:

* how sewer camera inspections work
* what hydro jetting does

### Evaluation

Examples:

* when sewer lines should be inspected
* when hydro jetting is appropriate

### Decision

Examples:

* should I get a sewer inspection before buying a house
* should I get a second opinion before sewer replacement

These intent stages can help guide internal linking.

---

# 49. FAQ Architecture

FAQs should exist primarily within relevant pages and topic clusters.

Potential locations include:

* service pages
* market pages
* audience pages
* commercial pages
* resource pages

A standalone FAQ hub may also be useful if approved.

Do not create hundreds of near-duplicate FAQ pages from single questions without a strong strategic reason.

---

# 50. Problem/Symptom Content

The site may eventually support educational pages around customer symptoms such as:

* sewer backup
* recurring clogged drain
* slow drains
* sewer smell
* tree roots in sewer line
* grease buildup
* sewer line belly
* offset sewer pipe

These pages should generally function as educational problem-solving content rather than pretending each symptom is a distinct service.

---

# 51. Problem-to-Service Relationships

Symptom content should help users move from:

```text
Problem
↓
Possible Causes
↓
Diagnostic Need
↓
Relevant Service
```

For example:

```text
Recurring Sewer Backup
↓
Possible Obstruction / Root / Pipe Condition
↓
Inspection / Diagnostics
↓
Cleaning or Further Evaluation
```

This supports AEO and conversion without overcommercializing the educational content.

---

# 52. Page Family Registry

The project should maintain a clear set of page-family types.

Recommended conceptual taxonomy:

```text
Core
Service Hub
Service
Markets Hub
Market
Location
Service + Location
Audience Hub
Audience
Audience + Location
Commercial Hub
Commercial Segment
Commercial + Location
Comparison
Alternative
Resource Hub
Topic Hub
Resource Article
FAQ / Guide
Legal / Utility
```

Final types should be represented consistently in the page build list and code.

---

# 53. Parent/Child Relationships

Every approved page should have a defined logical parent where applicable.

Examples:

```text
Service
Parent → Services Hub
```

```text
Market
Parent → Markets Hub
```

```text
Location
Parent → Market
```

```text
Service + Location
Parents → Service + Location/Market context
```

```text
Audience
Parent → Audience Hub
```

```text
Commercial Segment
Parent → Commercial Hub
```

```text
Resource Article
Parent → Topic Hub
```

Parent relationships inform:

* breadcrumbs
* internal links
* navigation
* schema
* sitemap organization

---

# 54. Multi-Parent Relationships

Some pages logically belong to more than one topical pathway.

A service + location page, for example, belongs to both:

```text
Service
```

and:

```text
Geography
```

The site should support both contextual pathways without requiring duplicate URLs.

There should be one canonical route for each page.

---

# 55. Canonical Page Principle

One search intent should generally resolve to one primary canonical page.

Avoid creating separate pages solely for minor keyword variations such as:

```text
sewer camera inspection
sewer camera service
camera sewer inspection
sewer scope camera inspection
```

when they represent the same core intent.

Synonyms should usually be consolidated into one authoritative page.

---

# 56. Cannibalization Prevention

Potential cannibalization should be evaluated among:

* canonical service vs service + location
* market vs location
* audience vs service
* commercial vs service
* resource vs service
* comparison vs service
* similar geographic pages

The architecture should assign each page a clear primary intent.

---

# 57. Primary Intent Requirement

Every approved indexable page should have a documented primary intent.

Examples:

```text
Page Type: Service
Primary Intent: Sewer camera inspection service
```

```text
Page Type: Service + Location
Primary Intent: Sewer camera inspection in Henderson, NV
```

```text
Page Type: Resource
Primary Intent: What does a sewer camera inspection show?
```

This helps separate transactional and informational search intent.

---

# 58. Market Hierarchy

The three initial markets should function as primary geographic hubs:

```text
United States
├── Missouri
│   └── St. Louis Market
│
├── California
│   └── San Diego Market
│
└── Nevada
    └── Las Vegas Market
```

The public site does not necessarily need state-level landing pages unless strategically approved.

The hierarchy describes data relationships, not automatic page creation.

---

# 59. Location Parent Assignment

Every local geographic record intended for publication should have a parent market.

Example:

```text
location.marketId = "las-vegas-nv"
```

This prevents geographic records from existing without operational context.

---

# 60. Cross-Market Duplication Control

A location should generally belong to one primary market unless there is a documented reason otherwise.

Do not duplicate identical local pages under multiple market trees simply to increase page count.

---

# 61. GBP and Information Architecture

Google Business Profile status affects local trust architecture but does not independently determine website architecture.

Current status:

| Market    | GBP                       |
| --------- | ------------------------- |
| St. Louis | Existing                  |
| San Diego | None currently identified |
| Las Vegas | None currently identified |

San Diego and Las Vegas may still have legitimate market landing pages without active GBPs.

However, the site must not falsely imply verified local storefronts.

---

# 62. Physical Location vs Service Area

The architecture must distinguish:

```text
Physical Business Location
```

from:

```text
Service Area
```

A service-area page does not create a physical business location.

This distinction should remain consistent in:

* content
* schema
* contact details
* local pages
* footers
* GBP strategy

---

# 63. Primary Navigation

The primary navigation should remain curated and manageable.

Potential top-level items:

```text
Services
Locations
Who We Serve
Commercial
Resources
About
Contact
```

The exact navigation is subject to design and page inventory decisions.

Do not place every SEO page into the primary navigation.

---

# 64. Services Navigation

The Services menu may provide access to:

* primary canonical services
* services hub
* commercial services where appropriate

If all 18 canonical services are not important enough for the main navigation, use hierarchy or grouping.

---

# 65. Locations Navigation

The primary Locations navigation should emphasize the three primary markets.

Example:

```text
Locations
├── St. Louis, MO
├── San Diego, CA
└── Las Vegas, NV
```

Local city and neighborhood pages should generally be discovered through market hubs and contextual modules rather than an oversized global menu.

---

# 66. Audience Navigation

Strategic audience pages may appear under a parent label such as:

```text
Who We Serve
```

Only the highest-value audiences should appear in primary navigation.

Long-tail audience combinations should remain contextual.

---

# 67. Commercial Navigation

Commercial should have visible navigation prominence if it represents a major revenue opportunity.

Possible navigation destination:

```text
Commercial
```

with supporting links to approved commercial categories.

---

# 68. Resource Navigation

Resources should be organized by user intent and topic rather than publication date alone.

Potential pathways include:

* Sewer Inspection
* Sewer Problems
* Homebuyer Guides
* Commercial Guides
* FAQs

The final topical structure should reflect research.

---

# 69. Footer Architecture

The footer should support utility navigation and secondary discovery.

Potential groups:

```text
Services
Markets
Company
Resources
Commercial
Contact
Legal
```

The footer should not become an SEO link dump.

---

# 70. Footer Link Limits

Do not place:

* all 579 geographic records
* all 10,422 service/location opportunities
* hundreds of audience combinations

in the footer.

Footer links should prioritize important user pathways.

---

# 71. Breadcrumb Architecture

Breadcrumbs should reflect logical page hierarchy.

Potential examples:

```text
Home
→ Services
→ Sewer Camera Inspection
```

```text
Home
→ Locations
→ Las Vegas, NV
```

```text
Home
→ Las Vegas, NV
→ Henderson
```

```text
Home
→ Las Vegas, NV
→ Sewer Camera Inspection in Henderson
```

The final implementation depends on approved URL architecture.

---

# 72. Breadcrumb vs URL Structure

Breadcrumbs represent **information hierarchy**.

URLs represent **routing strategy**.

These do not always need to be identical.

A page can logically belong under a market in breadcrumbs while using a flatter URL structure if the URL strategy determines that is preferable.

---

# 73. Internal Discovery Architecture

Every important indexable page should have a reasonable internal discovery pathway.

Potential discovery methods include:

* navigation
* parent hub
* related-page modules
* service-area grids
* contextual body links
* breadcrumbs
* topic clusters

Do not rely solely on XML sitemaps for page discovery.

---

# 74. Hub-and-Spoke Linking

Each major topic should have a hub.

Examples:

```text
Services Hub
→ Service Pages
```

```text
Market Hub
→ Local Pages
```

```text
Audience Hub
→ Audience Pages
```

```text
Commercial Hub
→ Commercial Pages
```

```text
Topic Hub
→ Resource Articles
```

This provides strong crawl and user pathways.

---

# 75. Cross-Silo Linking

The architecture should not create rigid silos that prevent useful cross-topic navigation.

For example:

A homebuyer page should be able to link to:

* pre-purchase sewer inspection
* sewer camera inspection
* market page
* educational resource

where relevant.

Cross-links should be based on user intent.

---

# 76. Related Services Modules

Service pages may include related service modules.

Example:

```text
Sewer Camera Inspection
→ Sewer Diagnostics
→ Sewer Line Locating
→ Sewer Cleaning
```

Relationships should be curated or rule-based, not random.

---

# 77. Related Location Modules

Market and location pages may include relevant nearby areas.

The relationship should reflect real geography or service-area structure.

Avoid listing distant locations simply to increase internal links.

---

# 78. Related Resource Modules

Service pages should link to useful educational resources.

Example:

```text
Sewer Camera Inspection
→ What Does a Sewer Camera Inspection Show?
→ Should You Get a Sewer Inspection Before Buying?
→ Common Sewer Camera Findings
```

This supports topical authority and user education.

---

# 79. Resource-to-Money-Page Linking

Educational content should link naturally to the relevant commercial page.

Preferred model:

```text
Resource Article
→ Primary Service
→ Market / Relevant Local Page when justified
```

Do not force multiple unrelated commercial links into every article.

---

# 80. Pillar and Cluster Principle

Canonical service pages generally function as the primary money-page entities.

Educational content should support them through topic clusters.

The site should avoid creating a separate informational "pillar article" that competes with the canonical service page for the exact same service intent.

---

# 81. Local Resource Content

Some educational content may have genuine local relevance.

Examples may include:

* sewer responsibilities in a municipality
* common sewer line materials in an older housing market
* local buyer inspection considerations
* local commercial drain issues

Local resource pages should require meaningful geographic differentiation.

---

# 82. Local News Content

The website should not become a local-news publishing operation simply for SEO.

Local content should remain connected to:

* sewer systems
* property ownership
* real estate
* commercial maintenance
* relevant local regulations
* customer needs

---

# 83. Search Intent Layers

The architecture should support the full customer search journey.

## Informational

"What causes a sewer backup?"

## Diagnostic

"Why does my sewer keep backing up?"

## Service

"Sewer camera inspection"

## Local Service

"Sewer camera inspection Las Vegas"

## Audience

"Sewer inspection for homebuyers"

## Commercial

"Commercial hydro jetting"

## Comparison

"Hydro jetting vs snaking"

## Decision

"Should I get a second opinion before replacing my sewer line?"

The architecture should connect these intent layers.

---

# 84. Conversion Journey Architecture

A common conversion journey may be:

```text
Informational Search
↓
Resource
↓
Service Page
↓
Market / Local Context
↓
CTA
↓
Lead
```

Another may be:

```text
Local Service Search
↓
Service + Location Page
↓
Trust / Process
↓
CTA
↓
Lead
```

Another:

```text
Homebuyer Search
↓
Audience Page
↓
Pre-Purchase Inspection
↓
Schedule
```

Architecture should accommodate all three.

---

# 85. Homepage Conversion Paths

The homepage should provide fast access to:

* schedule/request service
* inspect a sewer line
* choose a market
* commercial service
* homebuyer/pre-purchase service
* important core services

Users should not have to navigate through numerous informational layers before reaching a conversion option.

---

# 86. Market Conversion Paths

A market hub should make it easy to:

* identify available services
* choose a nearby location
* request service
* access relevant commercial service
* access relevant inspection services

---

# 87. Service Conversion Paths

Service pages should provide direct service-specific CTAs.

Example:

```text
Sewer Camera Inspection
→ Schedule a Sewer Inspection
```

rather than relying only on a generic "Contact Us" CTA.

---

# 88. Audience Conversion Paths

Audience pages should use intent-specific CTAs where possible.

Examples:

```text
Homebuyer
→ Schedule a Pre-Purchase Sewer Inspection
```

```text
Property Manager
→ Request Property Management Sewer Service
```

```text
Commercial
→ Request Commercial Service
```

Final CTA definitions belong in:

`17-conversion-architecture.md`

---

# 89. Page Depth Principle

Important pages should not be unnecessarily buried.

Priority pages should generally be reachable within a reasonable number of internal clicks from:

* homepage
* primary hub
* market hub
* service hub

Deep page inventories should use structured hubs rather than enormous menus.

---

# 90. Flat vs Deep Architecture

The site should balance:

### Flat Architecture

Advantages:

* easier crawlability
* fewer clicks
* simpler discovery

### Hierarchical Architecture

Advantages:

* stronger context
* clearer organization
* better scalability

The project should use a **logically hierarchical but practically accessible architecture**.

URL depth should not be increased merely to mirror every information relationship.

---

# 91. Architecture and URL Design

Information architecture defines relationships such as:

```text
Market
→ Location
→ Service
```

but the final URL might be structured differently.

For example, the final URL strategy may choose:

```text
/[market]/[service]/
```

or:

```text
/services/[service]/[location]/
```

or another model.

This document does not determine the final syntax.

---

# 92. Content Duplication Guardrail

The architecture should not produce multiple pages that differ only in:

* city name
* service name
* heading
* metadata
* CTA text

Each approved page family must support meaningful content differentiation.

---

# 93. Location Content Differentiation

Local content may differentiate through legitimate factors such as:

* housing age
* housing type
* sewer materials
* climate
* soil
* root conditions
* property density
* commercial property concentration
* sewer ownership/responsibility
* municipal context
* real estate patterns

These factors require research and should not be invented.

---

# 94. Service Content Differentiation

Service pages should differentiate through:

* customer problem
* process
* equipment
* appropriate use cases
* limitations
* findings
* outcomes
* related services
* target audiences

---

# 95. Audience Content Differentiation

Audience pages should focus on:

* audience-specific risk
* decision context
* workflow
* terminology
* relevant services
* conversion expectations

Changing only "homeowner" to "homebuyer" is not sufficient.

---

# 96. Commercial Content Differentiation

Commercial content should emphasize:

* operational disruption
* facilities
* maintenance
* high usage
* scheduling
* property portfolios
* recurring needs
* documentation

It should not be residential copy with "commercial" inserted.

---

# 97. Page Authorization Layer

The information architecture defines what kinds of pages may exist.

The Master Page Build List defines which pages **will** exist.

Relationship:

```text
Information Architecture
= Allowed Structural Model
```

```text
Master Page Build List
= Approved Page Inventory
```

---

# 98. Research Opportunity Layer

Research datasets may contain far more opportunities than the initial site will publish.

The workflow should remain:

```text
Research
↓
Opportunity
↓
Evaluate
↓
Approve
↓
Build
```

not:

```text
Research
↓
Auto-Publish
```

---

# 99. Initial Launch Architecture vs Expansion

The website should be designed for a phased build.

## Initial Launch

Prioritize:

* core company pages
* highest-value canonical services
* three market hubs
* highest-value local pages
* highest-value service + location pages
* primary audience pages
* commercial foundation
* foundational resources

## Post-Launch Expansion

Potentially add:

* additional service + location pages
* audience + location pages
* commercial + location pages
* comparison content
* alternative content
* expanded resource clusters
* additional approved locations
* future markets

The exact page inventory belongs in:

`04-master-page-build-list.md`

---

# 100. Market Expansion Architecture

When a new market is approved, the information architecture should support adding:

```text
New Market Hub
├── Market Services
├── Approved Locations
├── Approved Service + Location Pages
├── Relevant Audiences
├── Commercial Pages
└── Local Resources
```

without restructuring the existing site.

---

# 101. Service Expansion Architecture

When a new canonical service is approved:

```text
Services Hub
↓
New Canonical Service Page
↓
Approved Market / Location Variants
↓
Audience Relationships
↓
Commercial Relationships
↓
Resources
```

No other service should need to be structurally rebuilt.

---

# 102. Audience Expansion Architecture

New audiences should be added only when they represent a distinct customer or referral intent.

Potential future audiences may include:

* inspectors
* HOAs
* real estate investors
* facility managers
* contractors
* municipalities

These examples are not approvals.

---

# 103. Geographic Scale Control

The 579 normalized geographic records should be classified so the architecture can distinguish:

```text
Market
City
Municipality
Community
Neighborhood
Other
```

Only appropriate geographic levels should receive standalone pages.

---

# 104. Neighborhood Page Guardrail

Neighborhood pages require particular scrutiny.

Do not create neighborhood pages solely because:

* the neighborhood has a recognizable name
* a city has many neighborhoods
* another local SEO website uses them

Neighborhood pages should require real:

* demand
* relevance
* serviceability
* differentiation
* conversion value

---

# 105. State Page Guardrail

State-level pages should not be created automatically simply because the company operates in:

* Missouri
* California
* Nevada

A state page requires its own strategic purpose and approval.

---

# 106. Metro Page Guardrail

Metro-level pages should be evaluated separately from primary city pages.

For example:

```text
St. Louis
```

and:

```text
St. Louis Metro Area
```

may represent overlapping intent.

Do not create both unless the distinction is meaningful.

---

# 107. Duplicate Geographic Intent

Potential geographic duplicates should be consolidated where appropriate.

Examples:

```text
Las Vegas
Las Vegas Valley
Metro Las Vegas
Greater Las Vegas
```

These may or may not deserve separate pages.

The location registry should identify canonical entities and aliases.

---

# 108. Alias Architecture

Geographic and service aliases should generally map to canonical entities.

Example:

```text
"Sewer scope"
→ canonical service:
"Sewer Camera Inspection"
```

```text
"Vegas"
→ canonical geography:
"Las Vegas"
```

Aliases support content and keyword research without creating duplicate entities.

---

# 109. Search Synonym Architecture

Keyword variants should usually map into canonical pages.

Potential synonyms include:

```text
sewer scope
sewer camera inspection
sewer video inspection
sewer line camera inspection
```

if they represent substantially the same user intent.

Search vocabulary should inform content, not automatically multiply URLs.

---

# 110. Entity Consistency

The same entity should use consistent:

* canonical name
* ID
* slug
* market relationship
* description
* schema identity

across the architecture.

This applies particularly to:

* services
* markets
* locations
* audiences

---

# 111. Page Naming Convention

Page titles in the Master Page Build List should clearly describe the page entity and intent.

Examples:

```text
Sewer Camera Inspection
```

```text
The Sewer Pros — St. Louis, MO
```

```text
Sewer Camera Inspection in [Approved Location]
```

```text
Pre-Purchase Sewer Inspections for Homebuyers
```

Avoid ambiguous internal names such as:

```text
Page 44
Local SEO Page 7
Camera City Template
```

Stable page IDs may exist separately from human-readable titles.

---

# 112. Architecture Validation Questions

Before approving a new page, ask:

1. What entity does this page represent?
2. What is the primary user intent?
3. What is its parent hub?
4. Which pages should link to it?
5. Which pages should it link to?
6. Is there already a page serving this intent?
7. Can the page contain sufficiently unique value?
8. Is it strategically important?
9. Is it operationally accurate?
10. Should it be indexed?

If these questions cannot be answered clearly, the page is not ready for approval.

---

# 113. Orphan Prevention

No strategically important indexable page should be intentionally isolated.

Each page should have at least one appropriate inbound path from:

* a hub
* another relevant page
* contextual content
* navigation

where applicable.

---

# 114. Dead-End Prevention

Pages should generally provide useful onward paths.

Examples:

```text
Service Page
→ Related Services
→ Relevant Market
→ Resource
→ CTA
```

```text
Resource
→ Relevant Service
→ Related Resource
```

The user should rarely reach a page with no logical next step.

---

# 115. Architecture and Schema

The information architecture should guide structured data.

Examples:

* service pages represent service entities
* market pages represent geographic service context
* breadcrumb schema reflects logical hierarchy
* articles connect to relevant topics
* organization data connects to verified business information

Schema should describe the architecture accurately rather than inventing a separate hierarchy.

---

# 116. Architecture and AI Search

AI systems should be able to infer:

* who The Sewer Pros is
* what services it provides
* where it operates
* who it serves
* how services relate
* which content is informational
* which pages represent local services

Strong information architecture supports this through entity consistency and contextual linking.

---

# 117. Architecture and Local SEO

Local SEO architecture should emphasize:

```text
Company
↓
Market
↓
Location
↓
Service Relevance
```

without inventing physical local offices.

Market hubs should establish geographic relevance.

Local pages should deepen that relevance.

---

# 118. Architecture and Topical Authority

Topical authority should develop around interconnected service and problem clusters.

Example:

```text
Sewer Camera Inspection
├── What It Shows
├── How It Works
├── Common Findings
├── Pre-Purchase Inspections
├── Sewer Line Locating
├── Root Intrusion
└── Related Local Services
```

The architecture should make these relationships visible to users and search systems.

---

# 119. Architecture and Conversion

Information architecture is not separate from conversion architecture.

A visitor searching:

```text
"sewer scope for homebuyer"
```

should be able to move naturally through:

```text
Homebuyer Page
→ Pre-Purchase Inspection
→ Market
→ Request Inspection
```

The structure should reflect actual customer journeys.

---

# 120. Architecture and Design

The information architecture should guide design components such as:

* megamenus
* breadcrumbs
* service cards
* location cards
* audience cards
* commercial cards
* related-content modules
* hub-page grids

The design system should visually reinforce the logical site hierarchy.

---

# 121. Architecture and Analytics

Page-family classification should support measurement.

Analytics should eventually distinguish performance for:

* service pages
* market pages
* location pages
* service + location pages
* audience pages
* commercial pages
* resources
* comparisons

This enables evaluation of which architecture layers drive:

* traffic
* conversions
* engagement
* leads

---

# 122. Architecture and Page Build Stages

Every approved page should eventually receive a build-stage designation.

Potential stages may include:

```text
Launch
Phase 2
Phase 3
Future
```

or another approved structure.

This prevents the information architecture from being confused with the launch checklist.

---

# 123. Launch Architecture Principle

The launch site does not need every theoretically valuable page.

It needs enough architecture to establish:

* company authority
* service authority
* three market entities
* local relevance
* primary commercial pathways
* primary audience pathways
* topic foundations
* conversion coverage

Expansion can occur after the foundation proves itself.

---

# 124. Site Architecture Summary

The Sewer Pros website should operate as an interconnected entity system:

```text
The Sewer Pros
│
├── Services
│
├── Markets
│   ├── St. Louis
│   ├── San Diego
│   └── Las Vegas
│
├── Locations
│
├── Audiences
│
├── Commercial
│
├── Comparisons
│
├── Alternatives
│
└── Resources
```

These major entities connect through approved page relationships rather than uncontrolled permutations.

---

# 125. Critical Information Architecture Rules

The following rules are mandatory.

### Rule 1

The site is one multi-market brand, not three separate websites.

### Rule 2

Canonical services are first-class site entities.

### Rule 3

Markets are first-class geographic hubs.

### Rule 4

Locations belong to a defined market or geographic hierarchy.

### Rule 5

Service + location relationships do not automatically authorize pages.

### Rule 6

Audience pages must represent distinct customer intent.

### Rule 7

Commercial architecture must address genuine commercial needs rather than duplicate residential copy.

### Rule 8

Comparison and alternative pages require meaningful decision-stage intent.

### Rule 9

Resources must support topic clusters and relevant commercial pages.

### Rule 10

Every important page should have a clear parent, purpose, and internal-link pathway.

### Rule 11

One canonical page should generally serve one primary search intent.

### Rule 12

Keyword synonyms do not automatically deserve separate URLs.

### Rule 13

Navigation must remain curated.

### Rule 14

The footer must not become a mass SEO link directory.

### Rule 15

Physical locations and service areas must remain distinct concepts.

### Rule 16

Information architecture defines allowable structures; the Master Page Build List authorizes actual pages.

### Rule 17

Site OS governs generalized workflow and QA; this repository governs project-specific site architecture.

---

# 126. Governing Relationship Between Documents

This document should be used together with:

```text
00-project-overview.md
↓
Defines overall project purpose
```

```text
01-business-brand-foundation.md
↓
Defines business reality and positioning
```

```text
02-nextjs-technical-architecture.md
↓
Defines implementation architecture
```

```text
03-information-architecture.md
↓
Defines how site information relates
```

```text
04-master-page-build-list.md
↓
Defines which pages are actually approved
```

```text
05-url-routing-strategy.md
↓
Defines how approved pages are routed
```

```text
06-master-service-registry.md
+
07-master-location-registry.md
+
09-audience-commercial-matrix.md
↓
Define canonical entities
```

```text
16-internal-linking-strategy.md
↓
Defines detailed linking rules between those entities
```

---

# 127. Final Architecture Principle

The Sewer Pros website should not be designed around a spreadsheet of keywords.

It should be designed around a structured model of:

* real services
* real markets
* legitimate geographic targets
* real customer groups
* meaningful commercial use cases
* customer questions
* customer decisions

The architecture should make those relationships easy to understand for:

* users
* search engines
* AI systems
* Claude
* Claude Code
* future developers

The governing model is:

```text
Business Reality
↓
Canonical Entities
↓
Information Architecture
↓
Approved Page Inventory
↓
URL Architecture
↓
Content
↓
Internal Links
↓
Search Visibility
↓
Conversion
```

That structure should remain stable as The Sewer Pros grows from its initial three markets into a larger multi-market sewer inspection, diagnostics, cleaning, and locating platform.
