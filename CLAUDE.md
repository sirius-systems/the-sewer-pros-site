# The Sewer Pros — Claude Repository Instructions

**Document:** `CLAUDE.md`
**Project:** The Sewer Pros Website Rebuild
**Repository:** `the-sewer-pros-site`
**Status:** Active Repository-Level Operating Instructions
**Applies To:** Claude Code and any Claude instance working directly inside this repository

---

# 1. Purpose

This file defines how Claude should operate inside the `the-sewer-pros-site` repository.

Claude must use this repository's project documentation as the source of truth for:

* business positioning
* approved services
* approved markets
* page architecture
* URL structure
* content requirements
* schema
* internal linking
* conversion architecture
* design
* analytics
* migration
* post-launch SEO
* implementation decisions

This repository also uses **Site OS Master** as a Claude skill for reusable:

* workflows
* prompts
* research procedures
* QA
* validation gates
* development methodology
* build governance
* efficiency standards

The relationship is:

```text
Site OS Master
=
How work should be performed

Repository Documentation
=
What is true for The Sewer Pros
```

Do not duplicate generalized Site OS Master procedures into project files unless The Sewer Pros requires a project-specific override.

---

# 2. Core Operating Rule

Before creating, modifying, deleting, or generating any meaningful project artifact, Claude must determine which repository source-of-truth documents govern the task.

Claude should not make material project decisions from:

* assumptions
* generic industry conventions
* competitor behavior
* AI inference
* keyword data alone
* implementation convenience
* existing code that conflicts with approved documentation

The core rule is:

> **Read the relevant source-of-truth documents first, then implement the approved project state.**

---

# 3. Project Summary

The Sewer Pros website is a multi-market sewer inspection, diagnostics, and cleaning platform.

Initial markets:

* St. Louis, Missouri
* San Diego, California
* Las Vegas, Nevada

Primary business specialization includes:

* sewer inspection
* sewer camera inspection
* sewer diagnostics
* sewer cleaning
* hydro jetting
* sewer line locating
* drain cleaning
* pre-purchase sewer inspections
* commercial sewer services
* commercial drain services

The primary differentiator is:

> **Independent sewer inspection and cleaning without repair-driven upselling.**

The website must reinforce this positioning consistently.

---

# 4. Critical Business Guardrail

The Sewer Pros is **not to be positioned as a sewer repair or replacement contractor unless explicitly approved by a later project decision**.

Claude must not create or imply that The Sewer Pros offers:

* sewer line repair
* sewer replacement
* trenchless sewer replacement
* pipe bursting
* excavation
* sewer lining
* CIPP
* structural pipe repair
* sewer installation
* major underground construction

unless that capability is formally added to:

`06-master-service-registry.md`

and approved through:

`22-decisions-change-log.md`

Repair terminology may appear in educational content when discussing:

* whether repair may be necessary
* cleaning vs. repair
* second opinions
* evaluating a replacement recommendation
* defects found during inspection

Do not convert educational repair intent into a false repair service.

---

# 5. Repository Documentation Hierarchy

Claude should use the following project documents.

## Foundation

### `00-project-overview.md`

Defines:

* project scope
* stack
* markets
* positioning
* governing principles
* project success criteria

### `01-business-brand-foundation.md`

Defines:

* business identity
* brand positioning
* differentiators
* approved business claims
* messaging boundaries

---

## Architecture

### `02-nextjs-technical-architecture.md`

Defines:

* Next.js implementation
* App Router strategy
* TypeScript architecture
* component/data architecture
* Cloudflare deployment requirements
* technical conventions

### `03-information-architecture.md`

Defines:

* site hierarchy
* page families
* content relationships
* navigation relationships

### `04-master-page-build-list.md`

**Final publishing authority.**

Defines which routes are:

* approved
* deferred
* planned
* launch-ready
* post-launch
* retired

Claude must not generate new public/indexable routes merely because a route is technically possible.

### `05-url-routing-strategy.md`

Defines:

* canonical slugs
* route patterns
* URL hierarchy
* market/service relationships
* normalization rules

---

# 6. Registry Documents

### `06-master-service-registry.md`

Final authority for:

* service names
* service aliases
* service definitions
* approved capabilities
* service distinctions
* prohibited service positioning

### `07-master-location-registry.md`

Final authority for:

* market names
* cities
* communities
* geographic types
* canonical location naming
* market relationships

### `08-service-location-matrix.md`

Represents:

```text
SEO / business opportunity relationships
```

It does **not** represent automatic publishing authorization.

The current research contains:

* 18 canonical services
* 579 normalized geographic records
* 10,422 service × location relationships

Claude must never interpret:

```text
relationship exists
```

as:

```text
page should exist
```

### `09-audience-commercial-matrix.md`

Defines:

* residential audiences
* real-estate audiences
* commercial audiences
* audience/service relationships
* commercial opportunities
* audience/location combinations

---

# 7. SEO and Content Documents

### `10-seo-strategy.md`

Defines the project-specific organic search strategy.

### `11-local-seo-gbp-strategy.md`

Defines:

* local SEO
* Google Business Profile strategy
* market-specific local signals
* GBP limitations
* local entity governance

Current baseline:

```text
St. Louis:
Existing GBP

San Diego:
No current GBP identified

Las Vegas:
No current GBP identified
```

Do not fabricate local branches or offices in San Diego or Las Vegas.

### `12-content-aeo-ai-strategy.md`

Defines:

* answer-engine strategy
* AI/LLM search strategy
* direct-answer content
* citation-oriented content
* semantic authority

### `13-competitor-analysis.md`

Defines:

* primary competitors
* competitive patterns
* positioning gaps
* market opportunities

Competitor behavior is intelligence, not project authority.

---

# 8. Content Production Rules

### `14-content-specification.md`

All public content must follow this file.

Core requirements include:

* one clear page intent
* useful content
* customer-first writing
* factual accuracy
* meaningful localization
* audience differentiation
* no keyword stuffing
* no fabricated claims
* no thin programmatic content
* no generic city-name substitution

Every indexable page must justify its existence.

Do not create pages solely because:

* a keyword exists
* a competitor has one
* a matrix row exists
* a location exists
* AI suggests one

---

# 9. Schema and Entity Rules

### `15-schema-entity-strategy.md`

Claude must preserve one coherent entity model.

Core rule:

```text
One primary company entity
+
Verified services
+
Verified service areas
+
Real physical branches only when verified
```

Do not create a `LocalBusiness` entity for every market or SEO landing page.

San Diego and Las Vegas service markets should not be represented as physical branches unless explicitly verified and approved.

Use:

```text
Service
+
areaServed
+
Place
```

where appropriate.

Do not create schema for services The Sewer Pros does not offer.

---

# 10. Internal Linking Rules

### `16-internal-linking-strategy.md`

Internal linking should follow:

```text
Homepage
    ↓
Primary Hubs
    ↓
Canonical Pages
    ↓
Approved Local / Audience / Commercial Pages
    ↕
Resources
```

Claude must not:

* generate links to nonexistent routes
* expose all 10,422 matrix relationships
* create giant SEO footer grids
* cross-link every city to every city
* use arbitrary keyword anchors

Only approved public routes should become destinations.

---

# 11. Conversion Rules

### `17-conversion-architecture.md`

Conversion should emphasize:

```text
Evidence
+
Transparency
+
Expertise
+
Low Friction
```

not:

* fear
* artificial urgency
* false discounts
* repair pressure

Approved conversion concepts include:

* Schedule a Sewer Inspection
* Request Service
* Schedule a Pre-Purchase Sewer Inspection
* Request Commercial Service
* Call The Sewer Pros

Do not invent:

* 24/7 service
* same-day service
* emergency availability
* guaranteed response times
* free inspections
* free estimates
* pricing
* discounts

unless verified and approved.

---

# 12. Design Rules

### `18-design-system.md`

The desired visual direction is:

```text
Industrial Precision
+
Modern Editorial Design
+
Local Service Trust
```

The site should look like a specialized sewer diagnostics and inspection company.

It should not look like:

* a generic plumbing template
* a discount drain franchise
* a repair contractor
* an emergency-sales funnel

Primary visual themes should include:

* inspection cameras
* diagnostics
* locating
* cleaning
* technical equipment
* sewer-line evidence

Avoid repair-heavy visual positioning unless specifically required by educational content.

---

# 13. Analytics Rules

### `19-analytics-measurement.md`

The analytics system should prioritize:

```text
Qualified Leads
+
Search Visibility
+
Conversion Performance
```

not:

* page count
* total ranking keywords
* vanity traffic

Where available, analytics context should use canonical identifiers for:

```text
market_id
service_id
location_id
audience_id
page_type
lead_type
form_type
```

Never send PII to GA4.

Do not send:

* names
* phone numbers
* emails
* property addresses
* form messages

into analytics event parameters.

---

# 14. Migration Rules

### `20-migration-redirect-plan.md`

Before changing production URLs, preserve existing search and backlink value.

Core rules:

* inventory legacy URLs
* map old pages to relevant new pages
* use direct permanent redirects
* avoid chains
* avoid loops
* do not redirect everything to the homepage
* update internal links to final canonical destinations

Migration should improve architecture without discarding earned value.

---

# 15. Post-Launch SEO Rules

### `21-post-launch-seo-roadmap.md`

Post-launch expansion follows:

```text
Stabilize
→ Measure
→ Improve
→ Expand
→ Measure Again
```

Do not immediately generate every potential route.

Geographic and service + location pages should expand in controlled cohorts.

Analytics should inform the next cohort.

---

# 16. Decision Governance

### `22-decisions-change-log.md`

This document records:

* material decisions
* changes
* overrides
* new services
* new markets
* route changes
* architecture changes
* entity changes

Claude must consult this file when project documentation appears inconsistent.

If a material decision changes, do not silently overwrite historical reasoning.

Use the process:

```text
Existing Decision
        ↓
SUPERSEDED / REVERSED
        ↓
New Decision Entry
        ↓
Affected Docs Updated
        ↓
Implementation Updated
```

---

# 17. Project Decision Hierarchy

When information conflicts, use this order:

```text
1. Explicit current approved project decision
2. Subject-specific repository source-of-truth document
3. 22-decisions-change-log.md
4. Approved business/source data
5. Site OS Master
6. Validated external research
7. Technical convention
8. AI inference
```

Code is not automatically authoritative if it conflicts with approved documentation.

---

# 18. Master Page Build List Rule

This is one of the most important repository instructions.

`04-master-page-build-list.md`

is the final authority for public page generation.

Before creating any new route, ask:

```text
Is this route explicitly approved in the Master Page Build List?
```

If yes:

```text
Proceed according to project docs.
```

If no:

```text
Do not create it as an indexable public page.
```

A route's existence in:

* a matrix
* a registry
* keyword research
* competitor analysis
* AI recommendations

does not provide authorization.

---

# 19. No Uncontrolled Programmatic SEO

Claude must not create automated page generation where:

```text
service × location
=
automatic indexable URL
```

The architecture may be capable of programmatic generation.

Publishing must remain governed.

The distinction is:

```text
Technical Capability
≠
Publishing Approval
```

This applies to all:

* service + location pages
* audience + location pages
* commercial + location pages
* neighborhood pages
* comparison permutations
* resource variations

---

# 20. Page Quality Rule

Every approved indexable page must provide distinct value.

Before generating localized content, determine:

* primary search intent
* service relevance
* audience relevance
* market relevance
* unique local information
* internal linking role
* conversion purpose

A page that merely changes:

```text
St. Louis
```

to:

```text
San Diego
```

without meaningful content changes is not acceptable.

---

# 21. Content Substitution Tests

Claude should mentally apply the following quality tests.

## Location Test

Could the city name be replaced with another market while leaving the page largely unchanged?

If yes, localization is insufficient.

## Service Test

Could the service name be changed while most copy remains valid?

If yes, service content is too generic.

## Audience Test

Could "home buyers" be replaced with "property managers" without rewriting most of the page?

If yes, audience differentiation is insufficient.

## Commercial Test

Could "commercial property" be replaced with "home" without meaningful changes?

If yes, the commercial page is too generic.

---

# 22. Research Rules

Use external research when necessary to verify:

* current municipality rules
* market-specific conditions
* current competitors
* current GBP information
* business categories
* regulations
* public infrastructure
* local programs
* time-sensitive factual claims

Prefer authoritative sources for factual statements.

Do not use competitor content as the factual source of truth when primary sources are available.

---

# 23. No Unverified Business Claims

Claude must not invent:

* licenses
* certifications
* warranties
* guarantees
* equipment specifications
* service response times
* staff counts
* years of experience
* review counts
* ratings
* property types served
* municipal approvals
* service areas
* addresses
* phone numbers
* hours

If a necessary business fact is unavailable:

```text
omit it
```

or:

```text
mark it for verification
```

Do not fill the gap with an assumption.

---

# 24. Source Data vs. Marketing Language

Structured project data should remain canonical.

For example:

```text
service.name
```

should come from the service registry.

Marketing copy may use natural language variations, but it should not create new canonical service concepts.

Example:

Canonical:

```text
Sewer Camera Inspection
```

Acceptable natural phrasing:

```text
camera inspection of the sewer line
```

Not automatically a new service:

```text
Video Pipe Diagnostics Service
```

---

# 25. Route Naming

All route generation must use:

`05-url-routing-strategy.md`

Do not create slugs based on personal preference.

Avoid casually changing production slugs for:

* keyword variations
* stylistic preference
* minor terminology changes

Stable URLs are important SEO assets.

---

# 26. Geography Rules

All geographic naming must come from:

`07-master-location-registry.md`

Do not confuse:

* St. Louis City
* St. Louis County
* St. Louis metro

or:

* city
* neighborhood
* county
* unincorporated community
* metro

Use accurate geographic types.

Do not infer that municipal programs apply throughout a metro.

---

# 27. Multi-Market Rules

The website uses a single-domain architecture.

Do not create:

* independent city microsites
* separate market brands
* separate market design systems
* fake branch entities

Markets should remain interconnected through the primary The Sewer Pros organization.

---

# 28. St. Louis Rules

St. Louis is the strongest existing local entity market.

Content may appropriately emphasize, when verified:

* sewer laterals
* municipal programs
* homebuyer inspections
* established market experience
* local sewer conditions
* real estate

Municipality-specific program facts must be verified individually.

---

# 29. San Diego Rules

San Diego should initially use an organic-first local strategy.

Do not imply:

* San Diego office
* San Diego storefront
* San Diego GBP
* San Diego public address

unless later verified.

Focus on:

* service relevance
* market relevance
* homebuyers
* real estate agents
* independent inspections
* approved local communities
* property management
* commercial opportunities

---

# 30. Las Vegas Rules

Las Vegas should also use an organic-first local strategy unless a legitimate GBP is later approved.

Do not fabricate a physical office.

Priority content opportunities may include:

* sewer diagnostics
* hydro jetting
* drain cleaning
* line locating
* property management
* commercial services

---

# 31. Real Estate Content

Real estate is a major strategic audience cluster.

Relevant audience types may include:

* home buyers
* home sellers
* real estate agents
* home inspectors
* investors

The central service relationship is:

```text
Real Estate
        ↓
Pre-Purchase Sewer Inspection
        ↓
Sewer Camera Inspection
```

Real-estate content should help users make informed property decisions.

Do not provide legal advice.

---

# 32. Independent Second-Opinion Content

Approved strategy may include content around:

* independent sewer inspection
* sewer repair second opinions
* sewer replacement second opinions
* verifying damage before major repair

The tone must remain:

* factual
* professional
* non-accusatory

Do not claim competitors are dishonest or recommend unnecessary work.

The differentiator should be framed around The Sewer Pros' business model.

---

# 33. Commercial Content

Commercial content should be genuinely commercial.

Do not create residential content with:

```text
commercial
```

inserted into headings.

Commercial pages should address:

* operational disruption
* recurring issues
* high-volume systems
* property management
* preventative service
* inspection
* cleaning
* hydro jetting
* commercial scheduling
* documentation

Only mention industries actually served.

---

# 34. Resource Content

Resources should build topic clusters.

Priority clusters include:

```text
Sewer Inspection
Sewer Cleaning
Hydro Jetting
Sewer Problems
Real Estate
Commercial
```

Do not create a generic article archive disconnected from service pages.

Every resource should have a meaningful relationship to:

* a service
* an audience
* a market
* a problem
* a commercial topic

---

# 35. Answer-First Writing

Where content answers a specific question, use:

```text
Question
        ↓
Direct Answer
        ↓
Explanation
```

Example:

```markdown
## What does a sewer camera inspection show?

A sewer camera inspection can reveal visible conditions such as blockages, root intrusion, separated joints, cracks, offsets, standing water, and other accessible pipe conditions.

...
```

This supports:

* users
* featured answers
* AEO
* LLM retrieval
* AI citation potential

---

# 36. Metadata

Each approved indexable page should have unique:

* title
* description
* H1
* canonical URL

Metadata should reflect the actual page intent.

Do not mass-generate metadata through simple city/service token substitution without review.

---

# 37. Internal Link Generation

Dynamic related-content modules must be driven by approved relationships.

Good source:

```text
Approved route data
+
explicit related IDs
```

Bad source:

```text
All matrix combinations
```

Never surface a URL solely because it could exist.

---

# 38. Schema Generation

Schema should be generated from centralized structured data wherever practical.

Do not hard-code slightly different versions of the same business entity across pages.

Preferred relationship:

```text
Canonical Data
    ↓
Page
    ↓
Metadata
    ↓
Schema
    ↓
Analytics Context
```

---

# 39. Analytics Context

Use stable identifiers instead of display strings where practical.

Example:

```ts
marketId: "st-louis-mo"
serviceId: "sewer-camera-inspection"
pageType: "service-location"
```

Avoid inconsistent variants such as:

```text
St Louis
Saint Louis
stl
st_louis
```

for the same measurement dimension.

---

# 40. No PII in Tracking Code

Never send the following into analytics:

```text
name
email
phone
street address
message
```

Form submission systems may process these for actual lead operations.

Analytics systems should receive only non-sensitive context.

---

# 41. Design Component Philosophy

Create reusable components.

Examples:

```text
ServiceCard
MarketCard
AudienceCard
CommercialCard
ResourceCard
ReviewCard
ProcessSteps
TrustBar
PrimaryCTA
ServiceRequestForm
FAQAccordion
RelatedServices
RelatedResources
```

Do not create:

```text
Box1
SectionBlue
CardThing
```

unless there is a legitimate reason.

Components should be semantic and data-driven.

---

# 42. Avoid Monolithic Components

Prefer:

```text
page composition
+
small reusable components
```

over a giant component containing:

* page copy
* service logic
* metadata
* schema
* market data
* conversion logic

The architecture should remain maintainable as page inventory grows.

---

# 43. Content/Data Separation

Where practical, separate:

```text
structured content/data
```

from:

```text
presentation components
```

This is especially important for:

* services
* markets
* locations
* audiences
* FAQs
* related pages
* schema

Do not scatter canonical facts throughout JSX.

---

# 44. Typed Data

Project registries and page data should use TypeScript types.

Prefer strongly typed relationships such as:

```ts
serviceId
marketId
locationId
audienceId
pageType
```

instead of arbitrary strings repeated throughout the project.

---

# 45. Build-Time Validation

Where practical, fail builds for structural errors such as:

* duplicate canonical slugs
* duplicate IDs
* references to missing services
* references to missing markets
* approved pages with missing metadata
* related-page references to nonexistent routes
* invalid route combinations

Do not allow invalid source data to silently produce broken public pages.

---

# 46. Route Approval Validation

If programmatic route generation is used, the generator should consume an approved route registry.

Conceptually:

```text
Master Page Build List Data
        ↓
Route Generation
```

not:

```text
Service Registry × Location Registry
        ↓
Route Generation
```

This distinction is mandatory.

---

# 47. Draft Data vs. Published Data

If the application stores research opportunities alongside published data, explicitly distinguish:

```text
candidate
approved
published
deferred
retired
```

Do not rely on the presence of a data object to determine publication.

---

# 48. Indexation Safety

Only approved indexable routes should appear in:

* sitemap
* primary navigation
* internal link modules
* canonical route lists

Utility and non-public pages should use the appropriate:

* noindex
* robots
* omission from sitemap

strategy according to the technical architecture.

---

# 49. Sitemap Rule

Do not generate the sitemap from:

```text
every known location
```

or:

```text
every service-location relationship
```

Generate it from:

```text
approved canonical indexable routes
```

---

# 50. Redirect Rule

Legacy redirects must resolve directly to final canonical destinations.

Avoid:

```text
A → B → C
```

Prefer:

```text
A → C
B → C
```

Do not use client-side redirects for important SEO migrations.

---

# 51. Internal Redirect Rule

New internal links should not point through redirects.

Bad:

```text
<Link href="/old-service/">...
```

where `/old-service/` redirects.

Good:

```text
<Link href="/services/sewer-camera-inspection/">...
```

---

# 52. Environment Safety

Never place production-sensitive values directly into committed source when environment configuration is appropriate.

Do not commit:

* secrets
* API keys
* private credentials

Public identifiers may still be centrally configured through environment variables when useful.

---

# 53. Development and Production URLs

Never hard-code:

* localhost
* Cloudflare preview URLs
* temporary development domains

into production:

* canonical tags
* schema IDs
* sitemap
* metadata
* redirects
* external links

Use the approved canonical origin.

---

# 54. Production Domain

Until the production canonical domain and host format are formally confirmed, follow the existing project configuration or documented placeholder pattern.

Do not independently decide:

```text
www
vs.
apex
```

If the decision remains unresolved, consult:

`22-decisions-change-log.md`

and the routing/technical documents.

---

# 55. Accessibility

All UI implementation should support accessible behavior.

Requirements include:

* semantic HTML
* correct heading hierarchy
* keyboard navigation
* visible focus
* labels for inputs
* useful error states
* meaningful alt text
* appropriate contrast
* reduced motion handling
* adequate touch targets

Accessibility should be part of component design.

---

# 56. Performance

Do not introduce unnecessary dependencies or design features that harm:

* Core Web Vitals
* mobile performance
* bundle size
* render speed

Avoid unnecessary:

* animation frameworks
* huge icon libraries
* autoplay video backgrounds
* heavy carousels
* duplicate analytics scripts

---

# 57. Images

Image use should follow the design system.

Prefer:

* relevant technical imagery
* actual service imagery
* responsive assets
* accurate alt text

Avoid:

* fear-based disaster imagery
* irrelevant stock plumbing photos
* repair-heavy excavation imagery
* fabricated local-office images

---

# 58. Forms

Forms should align with:

`17-conversion-architecture.md`

Do not independently add large forms.

Potential form types include:

```text
general_service
prepurchase_inspection
commercial_service
```

Forms should preserve contextual metadata where known.

Example:

```text
market_id
service_id
audience_id
page_type
```

without asking the user to re-enter information the page already knows.

---

# 59. Conversion Event Integrity

A form submit event should fire only after successful submission.

Do not treat:

* button click
* form load
* validation attempt

as a completed lead.

Likewise:

```text
phone_click
```

means phone intent.

It does not automatically mean:

```text
completed phone lead
```

---

# 60. New Services

Claude must not add a new service by creating a page first.

Correct process:

```text
Business Approval
        ↓
22-decisions-change-log.md
        ↓
06-master-service-registry.md
        ↓
04-master-page-build-list.md
        ↓
Affected Matrices
        ↓
Content / Schema / Routes / Analytics
```

---

# 61. New Markets

Correct process:

```text
Business Approval
        ↓
22-decisions-change-log.md
        ↓
07-master-location-registry.md
        ↓
04-master-page-build-list.md
        ↓
URL / SEO / Local SEO / Schema
        ↓
Build
```

Do not create a new market ecosystem from research alone.

---

# 62. New Local Pages

Before adding a location page or service + location page, verify:

1. location is valid
2. business serves it
3. page is approved
4. content can be differentiated
5. internal-link path exists
6. analytics context exists
7. indexation is intended

If these conditions are not met, do not publish the route.

---

# 63. New Audience Pages

Before adding an audience page, confirm:

```text
Distinct audience questions
+
Distinct conversion intent
+
Relevant service relationships
+
Approved build status
```

Do not build audience pages solely from occupational labels or keyword variants.

---

# 64. New Resource Pages

Before adding a resource:

* identify primary topic cluster
* identify commercial parent
* identify user question
* identify internal links
* confirm route approval if the Master Page Build List requires it

Do not produce disconnected SEO articles.

---

# 65. Comparison and Alternative Pages

These pages should help users make a legitimate decision.

Maintain neutrality.

Example:

```text
Hydro Jetting vs. Snaking
```

should explain actual use cases.

Do not manipulate comparisons so The Sewer Pros' preferred service always wins.

---

# 66. No Competitor Copying

Competitor research may identify:

* topics
* gaps
* SERP patterns
* page types

Claude must not copy:

* competitor sentences
* page structures verbatim
* claims
* descriptions
* FAQs wholesale

The Sewer Pros content must be original.

---

# 67. No Generic AI Copy

Avoid phrases such as:

* state-of-the-art solutions
* unparalleled service
* comprehensive solutions for all your needs
* industry-leading professionals
* commitment to excellence

unless specific context makes them genuinely appropriate.

Prefer precise explanations.

---

# 68. Writing Style

The Sewer Pros voice should be:

* knowledgeable
* clear
* practical
* calm
* transparent
* professional

Avoid:

* hype
* alarmism
* excessive sales language
* unnecessary technical jargon

Explain technical terms when users may not know them.

---

# 69. Repair Language

When discussing structural damage, use careful language.

Good:

> A camera inspection may reveal conditions that warrant evaluation by a qualified repair contractor.

Bad:

> We'll repair the damaged section.

unless repair becomes an approved service.

---

# 70. No Fear Marketing

Avoid copy such as:

```text
Your sewer could collapse at any moment.
```

or:

```text
Call now before disaster strikes.
```

Prefer:

> Recurring backups can indicate a condition worth investigating with a sewer camera.

---

# 71. No False Superlatives

Do not claim:

* #1
* best
* top-rated
* most trusted
* leading

without approved substantiation.

Specific differentiators are preferable.

---

# 72. Independent Positioning Language

Appropriate concepts include:

* independent sewer inspection
* objective sewer diagnostics
* understand the condition before approving major repair
* evidence before making a sewer decision
* inspection without repair-driven sales pressure

Do not accuse competitors of dishonesty.

---

# 73. Local Content

Local content must be meaningful.

Useful local elements may include:

* housing patterns
* municipal sewer programs
* infrastructure
* commercial context
* local property types
* actual service conditions

All claims must be verified.

Avoid filler such as:

> San Diego is a beautiful city known for beaches and sunshine.

unless that information genuinely contributes to the sewer-service topic.

---

# 74. Commercial Content

Commercial content should speak to operational needs.

Relevant themes may include:

* tenant/customer disruption
* recurring blockages
* high-use drain systems
* preventative maintenance
* inspection documentation
* multi-property management

Do not use homeowner framing on commercial pages.

---

# 75. Real Estate Content

Real-estate content should address:

* inspection timing
* due diligence
* what a sewer camera can reveal
* property condition
* buyer/agent questions
* documentation

Do not provide legal advice or contractual guarantees.

---

# 76. Case Studies

Do not invent case studies.

Only create case studies from verified project/service data.

Case studies should distinguish:

```text
Problem
Inspection
Finding
Action
Outcome
```

and should not imply repair work The Sewer Pros did not perform.

---

# 77. Reviews

Do not:

* invent testimonials
* merge customer reviews
* reassign market context
* change meaning

Use verified review data only.

---

# 78. Blog Dates

Do not manipulate:

```text
dateModified
```

solely to make content appear fresh.

Update dates when substantive content changes justify it.

---

# 79. Documentation Changes

When implementing a material architectural change, update the relevant source-of-truth document in the same workstream.

Example:

```text
Service renamed in code
```

requires review/update of:

* service registry
* routes
* content
* schema
* analytics
* change log

Do not allow documentation to become stale while code becomes the unofficial authority.

---

# 80. Change Log Requirement

Update:

`22-decisions-change-log.md`

when implementing material changes such as:

* new market
* new service
* new GBP
* canonical domain change
* route architecture change
* repair capability change
* major analytics change
* large local page cohort approval

Minor implementation fixes do not need new decision entries.

---

# 81. Git Practices

Keep changes focused and intentional.

Before committing:

* verify affected routes
* verify build
* verify type safety
* verify relevant docs
* check no accidental generated files
* review diff

Use descriptive commit messages.

Where useful, reference decision IDs for material changes.

Example:

```text
feat: add approved commercial hydro jetting pages [DEC-074]
```

---

# 82. Do Not Delete Unknown Files Casually

If an unfamiliar file appears potentially relevant to:

* project governance
* business data
* redirects
* deployment
* analytics

inspect it before deleting.

Legacy technical debris may be removed only after determining it is not required.

---

# 83. Build Validation

Before treating work as complete, run the appropriate project commands defined in the technical architecture/package scripts.

At minimum, implementation should normally confirm:

* TypeScript validity
* production build
* route generation
* no obvious broken imports

If a command fails, do not represent the work as complete.

---

# 84. Do Not Silence Type Errors

Avoid:

```ts
any
```

or:

```ts
// @ts-ignore
```

merely to force a build through.

Correct the underlying data or type issue unless there is a documented technical justification.

---

# 85. Error Handling

Public forms and interactive UI should fail gracefully.

Do not expose:

* raw server errors
* stack traces
* implementation details

to visitors.

---

# 86. Security

Never expose secrets to client-side code.

Review environment variable usage carefully.

Do not place private API credentials in:

* source files
* public JavaScript
* Git history

---

# 87. Deployment

Deployment target:

```text
Cloudflare Pages
```

Implementation must remain compatible with the approved Cloudflare/Next.js architecture in:

`02-nextjs-technical-architecture.md`

Do not switch hosting providers or deployment architectures without approval.

---

# 88. Preview Deployments

Preview environments are for QA.

They are not canonical website destinations.

Do not:

* submit them to search engines
* place them in sitemap
* use them in schema
* use them as canonical URLs
* link external business profiles to them

---

# 89. Launch Safety

Before production launch, verify project-specific requirements from:

* technical architecture
* migration plan
* analytics plan
* schema strategy
* conversion architecture

Site OS Master provides the reusable launch QA methodology.

---

# 90. Post-Launch Changes

Do not assume the site's page architecture becomes unrestricted after launch.

The Master Page Build List remains authoritative.

Post-launch expansion should follow:

`21-post-launch-seo-roadmap.md`

---

# 91. Protect Existing Winners

Before materially rewriting a production page, inspect whether it has:

* organic traffic
* conversions
* backlinks
* strong query coverage

Do not casually rewrite strong pages for stylistic reasons.

---

# 92. Performance-Informed Expansion

Successful content may reveal adjacent opportunities.

Example:

```text
Strong St. Louis pre-purchase inspection performance
```

may justify investigating:

* additional real-estate resources
* nearby approved local pages
* agent content

It does not automatically authorize them.

---

# 93. Data Scale vs. Index Scale

Claude must preserve this distinction.

```text
DATA SCALE
579 locations
18 services
10,422 relationships
```

does not imply:

```text
INDEX SCALE
10,422+ public pages
```

The site should support broad data relationships while maintaining a controlled index.

---

# 94. No Route Count Objective

The project should never optimize for:

```text
maximum URLs
```

The goal is:

```text
maximum useful market and topical coverage
```

within approved quality standards.

---

# 95. Central Operating Principle

For every meaningful task, ask:

```text
What does the business actually offer?
What has the project approved?
Which document controls this decision?
Does this implementation preserve the approved entity model?
Does this create real value for users?
Does this create an unintended indexable route?
```

---

# 96. When Documentation and Code Conflict

If repository documentation says one thing and implementation says another:

1. identify which source-of-truth document controls
2. check `22-decisions-change-log.md`
3. determine whether code is stale or documentation is stale
4. correct the inconsistent layer
5. do not silently choose whichever is easier

The newest code is not automatically the newest approved strategy.

---

# 97. When Project Docs Conflict

If two project documents conflict:

Use the subject-specific authority.

Examples:

```text
Route conflict
→ 04-master-page-build-list.md
```

```text
Service naming conflict
→ 06-master-service-registry.md
```

```text
Location naming conflict
→ 07-master-location-registry.md
```

```text
URL conflict
→ 05-url-routing-strategy.md
```

```text
Business positioning conflict
→ 01-business-brand-foundation.md
```

Then consult:

`22-decisions-change-log.md`

for the newest approved change.

---

# 98. When Site OS and Project Docs Conflict

The project-specific approved rule wins for The Sewer Pros.

Example:

If Site OS provides a generalized page workflow but The Sewer Pros has a documented exception, use the project exception.

The reusable system should not override explicit project truth.

---

# 99. When Research Conflicts With Project Truth

External research may reveal:

* competitors offering a service
* common industry terminology
* popular page patterns

This does not automatically change The Sewer Pros.

Example:

Competitors offer sewer replacement.

That does not authorize The Sewer Pros to offer sewer replacement.

Research informs decisions.

It does not create them.

---

# 100. AI Inference Rule

Claude must never silently infer:

* new services
* new locations
* new business capabilities
* new claims
* new offices
* new pricing
* new certifications

Material unknowns should remain unknown until resolved.

Prefer:

```text
verified minimum
```

over:

```text
plausible invention
```

---

# 101. Project Completion Standard

Work is complete only when it satisfies all relevant layers:

```text
Business Truth
+
Approved Architecture
+
Content Requirements
+
Technical Implementation
+
SEO Requirements
+
Conversion Requirements
+
Schema / Analytics Alignment
+
QA
```

A page rendering successfully does not alone mean the task is complete.

---

# 102. Project Governing Summary

Claude should remember these non-negotiable rules:

```text
ONE COMPANY
```

The Sewer Pros.

```text
THREE INITIAL MARKETS
```

St. Louis, San Diego, Las Vegas.

```text
PRIMARY POSITION
```

Independent sewer inspection, diagnostics, locating, and cleaning.

```text
NOT DEFAULT POSITION
```

Sewer repair or replacement contractor.

```text
PUBLISHING AUTHORITY
```

`04-master-page-build-list.md`

```text
SERVICE AUTHORITY
```

`06-master-service-registry.md`

```text
GEOGRAPHY AUTHORITY
```

`07-master-location-registry.md`

```text
SITE OS
```

Reusable workflow and governance methodology.

```text
PROJECT DOCS
```

The Sewer Pros-specific truth.

```text
MATRIX DATA
```

Opportunity, not automatic page authorization.

---

# 103. Final Instruction to Claude

Build The Sewer Pros website as a **controlled, scalable authority system**, not as an uncontrolled page-generation engine.

Every implementation decision should preserve:

```text
Accuracy
+
Specialization
+
Independent Positioning
+
Useful Content
+
Entity Clarity
+
Local Legitimacy
+
Conversion Quality
+
Technical Maintainability
```

The governing instruction is:

> **Use Site OS Master to determine how to work. Use this repository's source-of-truth documents to determine what to build. Never allow AI inference, competitor behavior, matrix scale, or implementation convenience to override approved business facts, page approvals, service boundaries, geographic truth, or the independent sewer inspection positioning of The Sewer Pros.**
