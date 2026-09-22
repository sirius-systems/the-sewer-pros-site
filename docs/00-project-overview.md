# The Sewer Pros — Project Overview

**Document:** `00-project-overview.md`  
**Project:** The Sewer Pros Website Rebuild  
**Repository:** `the-sewer-pros-site`  
**Status:** Active Project Foundation / Source of Truth  
**Last Updated:** September 22, 2026

---

# 0. Current Implementation Status

**Verified:** September 21, 2026, against commit `5b9586a` on `main`.

**Phase:** Active implementation, pre-launch. This project is no longer a scaffold. All 70 approved launch pages are built, and the repository passes `npm run typecheck`, `npm run lint`, and `npm run build`. It is not yet launch-ready.

## Completed Implementation

* 70 approved pages built and rendering as static HTML (Next.js 16, `output: 'export'`): 9 core and hub, 10 service, 3 market, 16 location, 14 service + location, 6 audience, 5 commercial, 2 comparison, 5 resource
* 70 of 70 pages `launch` and indexable; none gated, noindex, or deferred. The five Las Vegas pages were released from DEC-063 by DEC-080
* Sitemap of 70 URLs, matching the approved set; `robots.txt` allows all crawlers plus `OAI-SearchBot` and declares the sitemap
* JSON-LD on all 70 pages (single Organization entity, WebSite, breadcrumbs, and page-type schema); no per-location `LocalBusiness`
* Production canonical host `https://www.thesewerpros.com` (DEC-078)
* Brand colour and typography (DEC-096), six page-family design references, and a reusable template and section component library
* Verified business facts for all three markets (DEC-070 to DEC-077, DEC-083, DEC-088)
* Lead form component, GA4 loader, and typed analytics events with a PII guard

## Remaining Implementation

* **Lead form submission endpoint** (PENDING-018). The form renders on seven templates but submission is a stub and sends nothing
* **TCPA consent copy** for the "text" contact option (PENDING-019)
* Market-scoped header contact (PENDING-017)
* Phase 2 page `svc-independent-sewer-second-opinion`: a registry-confirmed `phase_2_candidate` (`data/services/master-service-registry.json`), approved as a strategic concept, not built as a standalone `/services/` page (see §9A below)
* Build-time cross-registry validation (`validateCrossRegistry()` exists but is not wired into `npm run check`)
* Content follow-ups: PENDING-014 (Chesterfield programme details), PENDING-015 (Census housing-age figures), PENDING-016 (three withheld claims)
* **Existing page-inventory quality review.** All 70 built pages were approved and indexed under the prior strategic framing. The revised direction in §9A below applies the evidence-led quality model to that inventory; it does not automatically re-approve every page. See §0A, priority 4.

## Documentation Work Still Required

* Register the six `core_service` records already marked in `data/services/master-service-registry.json` as the primary service hubs within `06-master-service-registry.md`'s own narrative sections (§9A below records them here in the interim)
* Reconcile `04-master-page-build-list.md`'s page-family status language against the evidence-led quality model in §9A
* Confirm whether `svc-independent-sewer-second-opinion` should move from `phase_2_candidate` toward a launch-tier record, and where its canonical URL should live, before it is built (§9A, §0A priority 6)

## Content and Evidence Gaps

* No evidence layer exists yet: no anonymized inspection findings, report examples, video stills, case studies, or buyer/agent checklists are published (§0B)
* Local reviews exist only for St. Louis (DEC-084); San Diego and Las Vegas have no review content because neither has a verified GBP
* No audit has yet been performed against the location/service/audience/commercial quality tests in §19 for the existing 30 location and service+location pages

## Launch Preparation

* Legacy URL inventory and redirect implementation (PENDING-010); no redirect file exists in `public/` or `out/`
* Set `NEXT_PUBLIC_GA_MEASUREMENT_ID`; decide call tracking (PENDING-009)
* Decide GPTBot policy (PENDING-011); GPTBot is currently permitted by the general allow
* Deploy to Cloudflare Pages with `NEXT_PUBLIC_SITE_URL` set to the production origin, then verify canonicals, sitemap, and robots on the deployed host
* Search Console and Bing property setup, sitemap submission, and Phase 0 baseline capture (`21` §7)
* Mobile, accessibility, and performance QA on the deployed site. Not yet recorded in the repository

## Post-Launch Measurement

Follows `21-post-launch-seo-roadmap.md`: stabilization, indexation review, measurement, then evidence-led expansion. No search performance, ranking, traffic, or lead data exists in this repository. Not started.

## Future Expansion

Governed by §0A priorities 7-8 below and `21-post-launch-seo-roadmap.md`: additional resources, proof assets, and selective service, location, and audience expansion, evaluated against real performance data rather than page-count goals (§17, §18, §42).

## Unchanged Safeguards

Business positioning, the repair/replacement guardrail, the service-market versus physical-location distinction, and the no-fabricated-facts rule below are unchanged by this status update. San Diego and Las Vegas remain service markets with no office or GBP claimed.

---

# 0A. Implementation Priorities

This sequence replaces the general priority framing this document previously carried only under post-launch growth (formerly §39). It applies to the whole project, not only the period after launch, and reflects the revised strategic direction in §3A-§9A below.

```text
1. Maintain the brand and conversion foundation.
2. Complete and strengthen the primary service hubs (§6A).
3. Maintain the three authentic market hubs.
4. Audit the existing service-market pages for differentiation and evidence (§9A).
5. Prioritize high-value audience journeys (§7A).
6. Build the independent sewer second-opinion page (§9).
7. Develop problem, pipe-material, buyer-education, and process resources.
8. Strengthen proof assets and local evidence (§0B).
9. Complete schema, sitemap, analytics, form, redirect, and launch QA.
10. Review indexation based on actual page quality and performance.
```

This is a priority sequence for attention and resourcing, not a requirement to publish or index every possible service, location, audience, or matrix combination (§17, §18). Steps may proceed in parallel where they do not depend on each other; step 10 in particular is continuous rather than a one-time gate.

---

# 0B. Evidence and Authority Roadmap

The site currently has no dedicated evidence layer. Building one from real business experience and verified research is priority 8 in §0A.

Evidence content should be truthful, based on actual business experience or verified research, and attributable where appropriate (CLAUDE.md §24, §41 below). It may include:

* anonymized inspection findings
* report examples
* video stills from actual inspections
* case studies
* local reviews (verified, per market — see §23; St. Louis has DEC-084 review content, San Diego and Las Vegas do not yet)
* buyer and agent checklists
* inspection-process explainers
* sewer backup and tree-root education
* pipe-material resources
* local municipal or sewer-lateral guidance, verified individually per municipality (§5, St. Louis)

None of this exists yet in the repository. Do not represent it as published until it is built. See `21-post-launch-seo-roadmap.md` for how proof assets fit the post-launch sequence, and §9A below for how evidence relates to page indexability.

---

# 1. Purpose

This document defines the foundational direction for The Sewer Pros website rebuild.

It establishes the project's:

- mission
- business positioning
- initial markets
- audience strategy
- website role
- technical stack
- search objectives
- content architecture
- page architecture
- design-reference system
- development philosophy
- publishing philosophy
- indexation philosophy
- governance model
- long-term growth model

This document should provide enough high-level context for Claude, Claude Code, developers, content strategists, and future project contributors to understand what the website is being built to accomplish.

Detailed implementation requirements are maintained in the subject-specific repository documents.

---

# 2. Project Mission

The Sewer Pros website should become a multi-market digital authority and customer-acquisition platform for sewer inspection, diagnostics, locating, cleaning, hydro jetting, pre-purchase inspections, drain services, and commercial sewer/drain needs.

The site should function as more than a traditional service-business website.

It should operate as a:

- search visibility platform
- local SEO platform
- topical authority system
- entity authority system
- AEO and GEO platform
- AI-search knowledge source
- customer education resource
- real-estate due-diligence resource
- commercial customer acquisition platform
- lead-generation system
- conversion platform
- scalable geographic expansion system
- long-term content publishing system

The long-term objective is to make The Sewer Pros easier to discover whenever homeowners, buyers, real-estate professionals, property managers, commercial operators, search engines, or AI systems need reliable information about sewer-line conditions, diagnostics, inspection, cleaning, or related decisions.

---

# 3. Core Business Positioning

The Sewer Pros should be positioned as a specialized sewer inspection, diagnostics, locating, and cleaning company.

Primary service themes include:

- sewer inspection
- sewer camera inspection
- sewer diagnostics
- sewer cleaning
- hydro jetting
- sewer line locating
- drain cleaning
- pre-purchase sewer inspection
- commercial sewer services
- commercial drain services

The exact canonical service taxonomy is maintained in:

`06-master-service-registry.md`

The core strategic differentiator is:

> **Independent sewer inspection and cleaning without repair-driven upselling.**

The preferred customer journey is:

```text
Problem
→ Inspection
→ Evidence
→ Diagnosis
→ Cleaning or Maintenance When Appropriate
→ Informed Next-Step Decision
```

The website should help customers understand what is actually happening inside a sewer line before making an expensive property decision.

---

# 3A. Platform Definition

The Sewer Pros is:

> **A three-market, entity-led sewer diagnostics platform centered on accurate inspection, evidence, diagnosis, cleaning, documentation, and informed customer decisions.**

This is the same positioning as §3 stated with more precision for site architecture, entity, and content-planning purposes. It does not add a new claim; it names what the existing service themes, the independent differentiator, and the customer journey already describe as one connected system: one organization entity (§24), serving three verified markets (§5), offering a defined service taxonomy (§6A), documented through evidence (§0B) rather than sales pressure.

---

# 4. Sewer Repair and Replacement Position

The Sewer Pros should not be presented as a sewer repair or replacement contractor unless the business explicitly approves that capability later.

Do not market the following as offered services unless approved:

* sewer repair
* sewer replacement
* trenchless sewer replacement
* sewer lining
* CIPP
* pipe bursting
* excavation
* structural sewer repair
* sewer installation
* major underground construction

Repair and replacement may still be discussed educationally.

Relevant topics may include:

* sewer repair second opinions
* sewer replacement second opinions
* what to do before replacing a sewer
* evaluating repair recommendations
* sewer cleaning vs. structural repair
* inspection before excavation
* identifying visible defects
* determining whether further repair evaluation may be appropriate

The distinction should remain:

```text
The Sewer Pros
=
Inspect
Diagnose
Locate
Clean
Document
Help Customers Understand the Condition
```

not:

```text
Inspect
→ Sell Replacement
```

---

# 5. Initial Markets

The initial primary markets are:

## St. Louis, Missouri

St. Louis currently has the strongest established local entity presence and an existing Google Business Profile.

Strategic opportunities include:

* sewer inspection
* sewer camera inspection
* sewer lateral inspection
* sewer cleaning
* hydro jetting
* line locating
* pre-purchase inspection
* home buyers
* real-estate professionals
* local sewer-lateral resources
* approved nearby communities

Municipality-specific sewer-lateral programs and requirements must be individually verified.

A rule applying in one municipality must not automatically be applied throughout the St. Louis metro.

---

## San Diego, California

San Diego should initially be treated as an organic-first service market.

No current Google Business Profile has been identified.

Strategic opportunities include:

* sewer camera inspection
* pre-purchase sewer inspection
* home buyers
* real-estate agents
* independent second opinions
* hydro jetting
* sewer cleaning
* property management
* commercial sewer/drain services
* selected San Diego-area communities

Do not fabricate:

* a San Diego office
* a public San Diego address
* a San Diego storefront
* a San Diego branch
* a San Diego GBP

The website may legitimately target San Diego search intent based on actual service coverage without representing a physical branch.

---

## Las Vegas, Nevada

Las Vegas should also initially be treated as an organic-first service market.

No current Google Business Profile has been identified.

Strategic opportunities include:

* sewer inspection
* sewer camera inspection
* hydro jetting
* drain cleaning
* sewer cleaning
* sewer line locating
* property management
* multifamily
* commercial sewer services
* commercial drain services
* approved Las Vegas Valley locations

Do not fabricate:

* a Las Vegas office
* a public Las Vegas address
* a Las Vegas storefront
* a Las Vegas branch
* a Las Vegas GBP

---

# 5A. Service Market, Service Area, Geographic Record, Physical Location, and GBP

Five distinct concepts, often conflated. Per `07-master-location-registry.md` §3, §28, §29:

```text
Primary Service Market
A market The Sewer Pros actively serves and builds authority around
(St. Louis, San Diego, Las Vegas).

Service Area
A community or neighborhood where service coverage is confirmed for
one or more specific services. Service-specific, not market-wide
(07 §21).

Normalized Geographic Record
An entry in the 579-record location registry. Describes real
geography — it does not by itself confirm service coverage or
business presence (07 §3).

Physical Business Location
A real, verified public branch or office. Represented only when
`physicalBusinessLocation: true` is set after verification — never
inferred from market importance, page existence, or content (07 §28).

Google Business Profile Location
A legitimate, verified GBP entity. Currently exists only for
St. Louis (01 §21, 07 §29). San Diego and Las Vegas have none.
```

A normalized geographic record existing in the registry authorizes research, planning, and candidate-page evaluation. It does not by itself authorize an indexable page, and it never implies a physical location or GBP (§17, §18).

San Diego and Las Vegas must not be represented as physical offices, storefronts, branches, or GBP locations unless independently verified and logged in `22-decisions-change-log.md`.

---

# 6. One Company, Multiple Service Markets

The website should use a single-domain, multi-market architecture.

The Sewer Pros remains one business entity.

Conceptually:

```text
The Sewer Pros
        ↓
Approved Services
        ↓
St. Louis
San Diego
Las Vegas
        ↓
Approved Locations
Audiences
Commercial Segments
Resources
```

Do not create separate market brands or market microsites by default.

Do not treat every service market as a physical business branch.

The architecture should distinguish:

```text
Service Market
```

from:

```text
Physical Business Location
```

---

# 6A. Service Model: Canonical Registry, Primary Hubs, and Selective Expansion

The project maintains the full canonical service registry: **18 service records**, in `data/services/master-service-registry.json` and described narratively in `06-master-service-registry.md`. This model is preserved, not collapsed.

Not every service or service-market combination requires equal navigation prominence or immediate indexation (06 §4). The registry itself already distinguishes four record types:

```text
core_service            6 records — the primary commercial service hubs
derived_service          4 records — pre-purchase inspection, recurring-
                                      backup diagnosis, preventative
                                      maintenance, and the independent
                                      second-opinion concept (§9)
market_specific_service  1 record — the St. Louis lateral-inspection
                                      and municipal-reporting page
commercial_service       7 records — the commercial variants of the
                                      core and locating services
```

The six `core_service` records (verified in the registry, not newly designated here) are: Sewer Camera Inspection, Sewer Cleaning, Hydro Jetting, Sewer Cleaning + Camera Inspection, Sewer Line Locating, and Drain Cleaning. These receive the initial commercial emphasis as primary service hubs. This does not remove or diminish the other 12 records — derived, market-specific, and commercial services remain part of the canonical taxonomy and may be built, linked, and expanded on their own merits (06 §3.5, §18).

Supporting service pages, and future or selective service-market opportunities, are evaluated using the structured service × location data (`08-service-location-matrix.md`) as a research and planning input, not a publishing queue (§17, §18).

---

# 7. Target Audiences

The site should support multiple customer journeys rather than treating every visitor as a generic homeowner.

Important audience categories may include:

## Residential

* homeowners
* landlords
* property investors

## Real Estate

* home buyers
* home sellers
* real-estate agents
* brokers
* home inspectors
* investors

## Property Management

* property managers
* multifamily operators
* portfolio managers
* community managers

## Commercial

* business owners
* commercial property owners
* facility managers
* commercial property managers
* other verified commercial audiences

The detailed audience taxonomy is maintained in:

`09-audience-commercial-matrix.md`

---

# 7A. Priority Audience Pathways and Conversion Actions

The site supports audience-specific journeys, not only generic service pages. `09-audience-commercial-matrix.md` §6 defines 13 canonical audience records; 6 are currently launch-status and built (`/for/home-buyers/`, `/for/home-sellers/`, `/for/real-estate-agents/`, `/for/home-inspectors/`, `/for/property-managers/`, `/for/hoa-communities/`), and 7 are Phase 2 candidates, including homeowners and contractors & remodelers.

Priority pathways going forward:

* Home buyers
* Home inspectors
* Real estate agents
* Homeowners *(Phase 2 candidate per 09 §6; not yet built)*
* Property managers
* Contractors and remodelers *(Phase 2 candidate per 09 §6; not yet built)*

An audience-service page should be created selectively, only when it represents a distinct workflow, need, deliverable, and CTA (§19, Audience Test) — not as a routine token-swap of an existing page.

Relevant conversion pathways include:

* scheduling a sewer inspection
* requesting help with a sewer problem
* coordinating a transaction (pre-purchase) inspection
* requesting line locating
* requesting commercial sewer or drain service
* seeking an independent evaluation of a repair recommendation (§9)

CTA language should still match page intent (§26); this list names the underlying actions, not final button copy.

---

# 8. Real Estate Strategic Priority

Real estate should be a major authority and conversion cluster.

The core relationship is:

```text
Home Buyer
→ Pre-Purchase Sewer Inspection
→ Sewer Camera Inspection
→ Evidence
→ Better Property Decision
```

Potential supporting content may address:

* sewer inspections before buying a home
* sewer scope before closing
* what sewer inspections reveal
* sewer conditions in older properties
* sewer inspection for real-estate agents
* home inspection vs. sewer inspection
* what happens when a sewer issue is discovered
* second opinions during a property transaction

The website should support due diligence without providing legal advice.

---

# 9. Independent Second-Opinion Strategy

The independent inspection model creates an important search and conversion opportunity among users who have already been told that major sewer work may be necessary.

Relevant content may address:

* independent sewer inspections
* sewer repair second opinions
* sewer replacement second opinions
* verifying sewer damage
* what to do before excavation
* questions to ask before replacing a sewer line
* when cleaning may or may not be appropriate

The strategic message is:

> **Major sewer decisions deserve clear evidence.**

The homepage and the other pages that carry the independent-opinion section (`components/sections/IndependentProcess.tsx`) already use the approved concept:

> **Do Not Let a Sales-Driven Recommendation Make the Decision for You**

Do not accuse repair companies of dishonesty.

The differentiation should focus on the independent business model of The Sewer Pros.

`svc-independent-sewer-second-opinion` (registry `phase_2_candidate`, `data/services/master-service-registry.json`) is the strategic expansion pathway this section supports: a standalone page dedicated to helping a customer distinguish the documented, observable condition of a sewer line from a proposed repair solution. It is priority 6 in §0A, and it is not yet built — `data/pages/approved-pages.ts` records it as approved for Phase 2, not part of the current 70-page launch inventory (04 §5).

---

# 9A. Evidence-Led Page Quality Model

A local, service, or service-market page earns indexability. Existing approval or a matrix relationship does not, by itself, make a page an indexable asset (§17, §18).

Where applicable, an indexable page should have:

* a distinct search or customer intent
* legitimate service relevance
* accurate market coverage
* meaningful local context
* verified business facts
* market-specific evidence or operational detail (§0B)
* a clear conversion purpose
* appropriate internal links
* a defined parent and sibling relationship
* content that is materially different from related pages (§19's quality tests)

Explicitly prohibited, regardless of what the structured data supports:

* city-name substitution
* boilerplate service-market pages
* unsupported local claims
* fabricated offices, addresses, phone numbers, teams, reviews, or availability (§41)
* mass indexation of weak matrix-generated pages

This model applies going forward to new pages and, per §0A priority 4, as an audit standard for the existing 70-page inventory. It does not retroactively mark any built page as non-compliant; it defines the standard the audit in §0A/priority 4 evaluates against. `04-master-page-build-list.md` is the operational record of that audit.

---

# 10. Commercial Strategy

Commercial sewer and drain services should have a dedicated architecture rather than functioning as a minor subsection of residential content.

The commercial ecosystem may support:

```text
Commercial Hub
        ↓
Commercial Services
        ↓
Commercial Audiences
        ↓
Market-Specific Commercial Pages
        ↓
Commercial Resources
```

Relevant commercial themes may include:

* sewer inspection
* drain cleaning
* sewer cleaning
* hydro jetting
* recurring backups
* high-use drainage systems
* preventative cleaning
* property management
* multifamily
* documentation
* operational disruption
* multiple properties

Only audiences, property types, and industries actually served should be represented.

---

# 11. Search and Discovery Objectives

The website should be designed for visibility across the modern search ecosystem.

Primary channels include:

* Google organic search
* Google local search
* Google Business Profile where applicable
* Bing
* Apple search/discovery ecosystems where relevant
* featured snippets
* People Also Ask
* AI Overviews
* ChatGPT
* Perplexity
* Microsoft Copilot
* Gemini
* other AI-answer and search systems

The site should support:

* SEO
* local SEO
* AEO
* GEO
* entity SEO
* semantic search
* topical authority
* local authority
* LLM retrieval
* AI citation potential
* conversion optimization

The objective is not merely to rank URLs.

The objective is to make The Sewer Pros a recognizable, understandable, and useful sewer-service entity.

---

# 12. Website Architecture

The platform should be capable of supporting the following page families:

## Core Pages

* Homepage
* About
* Contact
* Services
* Locations
* Commercial
* Resources
* supporting company pages

## Canonical Service Pages

Primary authority pages for approved services.

## Market Pages

Primary market hubs for:

* St. Louis
* San Diego
* Las Vegas

## Location Pages

Pages for relevant approved cities, communities, neighborhoods, or other geographic entities.

## Service + Location Pages

Pages combining meaningful local search intent with a specific service.

## Audience Pages

Pages for audiences with distinct needs and conversion journeys.

## Audience + Service Pages

Pages combining a specific audience need with a specific service.

## Audience + Location Pages

Pages where audience and local intent meaningfully intersect.

## Commercial Pages

Commercial hubs, services, audiences, and industry content.

## Commercial + Location Pages

Local commercial pages where sufficient opportunity and differentiation exist.

## Comparison Pages

Decision-support content comparing meaningful alternatives.

## Alternative Pages

Content helping users understand options before major sewer decisions.

## Resource Pages

Educational content organized around topic clusters.

The architecture should be scalable without requiring every possible combination to become an indexed landing page.

---

# 13. Build-First Development Philosophy

The project should default to making progress.

The preferred workflow is:

```text
Understand
→ Research When Needed
→ Draft / Generate
→ Build
→ Validate
→ QA
→ Publish
→ Decide Indexation
→ Measure
→ Improve
```

Project documentation should establish:

* business truth
* architecture
* canonical taxonomy
* design direction
* quality standards

It should not create unnecessary administrative approval gates for ordinary development.

Claude and Claude Code may make reasonable, reversible implementation decisions independently.

---

# 14. Build vs. Publish vs. Index

These are separate concepts.

A page may be:

```text
candidate
draft
build-ready
published
indexable
noindex
deferred
retired
```

A route can be:

* researched
* drafted
* generated
* built
* reviewed
* deployed for QA

without automatically becoming an intentional organic landing page.

The primary SEO control should be intentional indexation.

---

# 15. Indexation Philosophy

The site should be strict about intentional large-scale indexation, not normal development.

Before intentionally indexing a substantial page cohort, evaluate whether the pages provide:

* legitimate business relevance
* real service coverage
* useful search intent
* adequate content
* meaningful differentiation
* appropriate internal links
* good technical quality

Do not intentionally mass-index thin token-swapped pages.

At the same time, do not prevent the project from using automation and structured data to generate, analyze, build, and improve candidate inventory.

---

# 16. Master Page Build List Role

`04-master-page-build-list.md` should function as the central page inventory and lifecycle tracker.

It may contain statuses such as:

```text
candidate
draft
build-ready
published
indexable
noindex
deferred
retired
```

It is not intended to function as a bureaucratic permission system that prevents useful development.

Claude and Claude Code may create logical candidate pages and then update the inventory accordingly.

The list should reflect the evolving site rather than requiring every implementation idea to be manually registered before work begins.

---

# 17. Structured Opportunity Data

The project currently contains approximately:

```text
18 canonical service records
579 normalized geographic records
10,422 service × location relationships
```

This data should be treated as a valuable strategic asset.

It may support:

* keyword analysis
* geographic analysis
* route generation
* draft page generation
* metadata generation
* internal relationship modeling
* content planning
* market prioritization
* noindex candidate pages
* future publishing cohorts

The correct distinction is:

```text
Relationship Exists
→ May Research / Generate / Build / Evaluate
```

not:

```text
Relationship Exists
→ Must Index
```

---

# 18. Controlled Scaling

The architecture should support scale without uncontrolled index growth.

A useful model is:

```text
Opportunity Dataset
        ↓
Candidate Inventory
        ↓
Build / Content Development
        ↓
Quality Evaluation
        ↓
Selective Indexation
        ↓
Performance Data
        ↓
Expansion or Consolidation
```

This allows the website to benefit from structured data and automation while protecting organic quality.

---

# 19. Page Quality Standard

Important production pages should have:

* a clear purpose
* a distinct primary intent
* accurate business relevance
* useful content
* relevant entity coverage
* meaningful internal links
* an appropriate conversion path

Use practical quality checks.

## Location Test

Could the city name be swapped with another city while the page remained substantially unchanged?

If yes, improve localization.

## Service Test

Could the service name be swapped while most of the page remained unchanged?

If yes, improve service specificity.

## Audience Test

Could "home buyer" be replaced with "property manager" while the content still worked?

If yes, improve audience specificity.

## Commercial Test

Could "commercial property" be replaced with "homeowner" while most content remained valid?

If yes, improve commercial specificity.

These tests should improve drafts rather than prevent them from being created.

---

# 20. Content Strategy

Content should be written for customers first while remaining easy for search engines and AI systems to understand.

Priorities include:

* direct answers
* clear explanations
* accurate entities
* useful headings
* strong topic coverage
* relevant FAQs
* service relationships
* local context
* audience context
* commercial context
* comparison content
* decision-support content
* contextual conversion

Avoid:

* keyword stuffing
* generic AI marketing copy
* unsupported claims
* city-token substitution
* unnecessary filler
* arbitrary word counts
* duplicate pages

---

# 21. Answer-First Content

Where a user has a clear question, use:

```text
Question
→ Direct Answer
→ Supporting Explanation
→ Appropriate Next Step
```

This structure supports:

* user experience
* featured answers
* AEO
* semantic search
* AI retrieval
* LLM citations

Do not bury straightforward answers beneath lengthy introductions.

---

# 22. Topical Authority Model

The site should build topic ecosystems rather than a generic chronological blog.

Priority clusters may include:

* sewer inspection
* sewer camera inspection
* sewer diagnostics
* sewer cleaning
* hydro jetting
* sewer line locating
* drain cleaning
* recurring sewer problems
* pre-purchase inspection
* real estate
* second opinions
* commercial sewer/drain services

Conceptually:

```text
Canonical Service
        ↕
Supporting Resources
        ↕
Problem Content
        ↕
Audience Content
        ↕
Local Pages
```

---

# 23. Local SEO Philosophy

Local SEO should be grounded in actual service coverage and legitimate business signals.

The site should not manufacture local relevance through:

* fake offices
* fake addresses
* fake map pins
* fabricated local phone numbers
* fake GBP entities
* false claims of physical presence

Local authority should come from:

* real service coverage
* market-specific content
* reviews
* citations
* proof
* local resources
* relevant backlinks
* legitimate Google Business Profiles where eligible

---

# 24. Entity Strategy

The website should maintain one coherent primary organization entity:

```text
The Sewer Pros
```

That organization:

```text
provides
→ Approved Services

serves
→ Approved Markets

helps
→ Relevant Audiences
```

Structured data should reflect the actual business graph rather than the keyword graph.

A market page does not automatically create a `LocalBusiness`.

---

# 25. Internal Linking Philosophy

Internal links should help users and search systems understand relationships among:

* services
* markets
* locations
* audiences
* commercial topics
* problems
* resources
* conversions

Preferred conceptual hierarchy:

```text
Homepage
→ Primary Hubs
→ Canonical Pages
→ Specialized / Local Pages
↔ Supporting Resources
```

Structured datasets may help identify useful relationships.

Do not automatically expose every available relationship through navigation or footer links.

---

# 26. Conversion Philosophy

The site should convert visitors through:

```text
Expertise
+
Evidence
+
Transparency
+
Specialization
+
Low Friction
```

rather than:

```text
Fear
+
Artificial Urgency
+
Fake Discounts
+
Repair Pressure
```

Primary conversions may include:

* phone calls
* general service requests
* inspection requests
* pre-purchase sewer inspection requests
* commercial inquiries

CTA language should match the intent of the page.

---

# 27. Design Direction

The website should visually communicate:

```text
Technical Sewer Expertise
+
Modern Local-Service Design
+
Clear Editorial Hierarchy
+
Strong Conversion Architecture
```

The site should feel:

* premium
* specialized
* technically capable
* modern
* trustworthy
* conversion-oriented
* professionally established

It should not feel like:

* a generic plumbing template
* an emergency-franchise website
* a bargain drain-cleaning site
* a repair-heavy excavation contractor
* a generic AI-generated website

---

# 28. Primary Design Reference System

The project uses six supplied reference images as practical structural templates.

Recommended repository location:

```text
/docs/design-references/
```

Reference files:

```text
homepage-performance.webp
service-page-performance.webp
location-page-performance.webp
location-service-page-performance.webp
audience-page-performance.webp
audience-service-page.webp
```

Page-family mapping:

| Page Family             | Primary Reference                        |
| ----------------------- | ---------------------------------------- |
| Homepage                | `homepage-performance.webp`              |
| Core Service Page       | `service-page-performance.webp`          |
| Location / Market Page  | `location-page-performance.webp`         |
| Service + Location Page | `location-service-page-performance.webp` |
| Audience Page           | `audience-page-performance.webp`         |
| Audience + Service Page | `audience-service-page.webp`             |

These images should guide:

* hero hierarchy
* section rhythm
* content density
* image placement
* trust strips
* service cards
* problem cards
* process sections
* forms
* proof sections
* testimonials
* local coverage sections
* CTA placement
* footer structure

They are templates, not pixel-perfect specifications.

---

# 29. Reference Image Guardrail

The reference images are from another example brand.

Use their:

* composition
* visual hierarchy
* section structure
* conversion patterns
* density
* layout quality

Do not copy:

* business identity
* logo
* company name
* phone numbers
* addresses
* testimonials
* licenses
* emergency claims
* same-day claims
* free estimates
* pricing
* warranties
* service claims
* years of experience
* employee identities

All final public content must use verified The Sewer Pros business information.

---

# 30. Design Flexibility

The reference templates should accelerate the build rather than constrain it.

Claude Code may adapt:

* section order
* card count
* image position
* layout composition
* responsive sequence
* CTA placement
* background treatment
* component variant
* section inclusion

based on the actual content.

Do not create filler solely to imitate the reference image.

The design system should create family resemblance across the site without making every page identical.

---

# 31. Technical Stack

The project uses:

```text
Claude Project
Site OS Master
Claude Code
VS Code
Next.js App Router
TypeScript
Tailwind CSS
Git
GitHub
Cloudflare Pages
```

The architecture should emphasize:

* reusable components
* typed structured data
* centralized registries
* scalable routing
* performance
* accessibility
* maintainability
* SEO
* controlled indexation

Detailed implementation requirements belong in:

`02-nextjs-technical-architecture.md`

---

# 32. Claude Project Role

Claude Project should function as the research, strategy, planning, content, and intelligence environment of the project.

Claude may:

* research
* recommend
* draft
* create content
* identify opportunities
* evaluate competitors
* refine architecture
* develop page strategies
* create briefs
* improve content
* recommend internal links
* develop schema approaches
* help plan SEO expansion
* analyze post-launch performance

Claude should make progress independently within verified business boundaries.

---

# 33. Claude Code Role

Claude Code is the primary implementation agent.

Claude Code should be empowered to:

* build pages
* create components
* implement approved and candidate layouts
* create routes
* create data structures
* refactor code
* add metadata
* implement schema
* create responsive behavior
* fix SEO issues
* fix accessibility issues
* improve performance
* adapt design-reference templates

Routine implementation should not require repeated human approval.

---

# 34. Site OS Master Role

Site OS Master remains the reusable methodology layer.

It governs how tasks may be:

* researched
* planned
* validated
* QA'd
* tested
* deployed

It should support the project rather than become a procedural blocker.

The relationship remains:

```text
Site OS Master
=
Reusable Methodology

The Sewer Pros Project
=
Project-Specific Truth and Implementation
```

---

# 35. Project Governance Model

The project should operate using three levels of governance.

## Level 1 — Hard Business Truth

These cannot be changed through normal implementation.

Examples:

* what services the company actually offers
* whether repair/replacement is offered
* real physical locations
* pricing
* guarantees
* verified business contact details
* major business positioning

## Level 2 — Project Defaults

These guide implementation but may be adapted intelligently.

Examples:

* layout patterns
* CTA patterns
* page structure
* internal linking patterns
* schema implementation
* metadata structure
* component composition

## Level 3 — Working Implementation

Claude and Claude Code may independently evolve:

* layouts
* components
* page drafts
* candidate routes
* structured relationships
* responsive behavior
* internal links
* technical implementation
* optimization

This model should prevent ordinary development from becoming blocked by administrative approvals.

---

# 36. Decision Log Role

`22-decisions-change-log.md` should be reserved for material strategic changes.

Examples include:

* new major service
* sewer repair becomes offered
* new primary market
* new verified physical branch
* production domain change
* hosting architecture change
* major business-positioning change
* major post-launch URL restructuring

Routine work does not require a decision-log entry.

Git history should document normal implementation evolution.

---

# 37. Migration Objective

The website rebuild should preserve useful value from the existing site.

Important migration considerations include:

* legacy URLs
* organic traffic
* backlinks
* existing GBP destinations
* redirects
* canonical continuity
* internal links

Do not discard valuable legacy URLs simply because the site is being redesigned.

Do not redirect every removed page to the homepage.

Map legacy intent to the closest relevant new destination.

---

# 38. Analytics Objective

The site should be measured as a business-growth system.

Primary measurement questions include:

* Which markets generate qualified traffic?
* Which services generate leads?
* Which audiences generate leads?
* Which pages convert?
* Which local cohorts perform?
* Which resources assist conversions?
* Is real-estate content generating opportunities?
* Is commercial SEO generating opportunities?
* Which page families deserve expansion?

Success should not be measured primarily through page count.

---

# 39. Post-Launch Growth Model

This section covers the sequence *after* launch specifically. For the whole-project priority sequence, including pre-launch work, see §0A.

The launch is the beginning of the SEO program.

Use:

```text
Stabilize
→ Measure
→ Improve
→ Expand
→ Measure Again
```

Priority should generally be given to:

1. migration health
2. technical stability
3. protecting existing search equity
4. improving pages already showing opportunity
5. strengthening canonical service authority
6. building real-estate authority
7. controlled local expansion
8. service + location expansion
9. commercial authority
10. second-opinion and comparison content
11. reviews
12. citations
13. links
14. content refresh

Expansion should be informed by evidence rather than raw page-count goals.

---

# 40. Research Philosophy

Research should resolve uncertainty and improve the site.

Research is particularly important for:

* municipality-specific information
* local programs
* competitors
* current search behavior
* market-specific facts
* current GBP information
* regulatory requirements
* time-sensitive information

Prefer primary sources when factual accuracy matters.

Do not make research itself another approval gate.

---

# 41. Business-Fact Guardrail

Do not invent:

* licenses
* certifications
* guarantees
* warranties
* pricing
* discounts
* free inspections
* free estimates
* emergency availability
* same-day availability
* response times
* offices
* business addresses
* phone numbers
* operating hours
* review counts
* ratings
* municipal approvals
* employee counts
* repair capabilities

If a fact is not required and cannot be verified, omit it.

If a fact is necessary to implementation but unresolved, use an obvious development placeholder without publishing it as business truth.

---

# 42. Primary Success Standard

The project should be judged by whether The Sewer Pros becomes:

* more discoverable
* more authoritative
* more understandable
* more credible
* easier to contact
* stronger across its markets
* more useful to home buyers
* more useful to real-estate professionals
* more relevant to commercial customers
* more visible to search engines
* more useful to AI-answer systems
* capable of scalable future growth

The objective is not:

```text
Maximum Number of Pages
```

The objective is:

```text
Maximum Useful Search Coverage
+
Strong Business Accuracy
+
Qualified Leads
+
Scalable Authority
```

---

# 43. Governing Project Principle

> **Build The Sewer Pros as a controlled but highly productive multi-market authority platform. Use project documentation to preserve business truth, canonical data, strategy, and quality standards—not as a collection of bureaucratic approval gates. Allow Claude and Claude Code to research, draft, generate, build, test, and improve freely within verified business boundaries. Use structured datasets productively, control intentional indexation separately, and use the supplied page-reference images as the practical visual foundation for the major page families of the site.**
