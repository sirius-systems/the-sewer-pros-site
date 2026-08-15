# The Sewer Pros Website Rebuild — Project Overview

**Document:** `00-project-overview.md`
**Project:** The Sewer Pros Website Rebuild
**Repository:** `the-sewer-pros-site`
**Status:** Foundation
**Document Role:** Project-level source of truth
**Primary Markets:** St. Louis, Missouri; San Diego, California; Las Vegas, Nevada

---

## 1. Project Purpose

This repository contains the website, project-specific documentation, structured data, content architecture, and implementation assets for the rebuild of **The Sewer Pros** website.

The project is designed to replace a fragmented or limited web presence with a scalable, multi-market digital platform capable of supporting:

* organic search visibility
* local search visibility
* AI and answer-engine discovery
* geographic expansion
* topical authority
* commercial lead generation
* residential lead generation
* real estate and pre-purchase inspection demand
* Google Business Profile support
* structured data and entity development
* conversion optimization
* long-term content expansion

The website must support The Sewer Pros as a specialized sewer inspection, diagnostics, cleaning, and locating company without incorrectly positioning the business as a traditional sewer repair or replacement contractor.

---

## 2. Core Business Positioning

The Sewer Pros specializes in identifying, documenting, locating, cleaning, and diagnosing sewer and drain problems.

Primary areas of expertise include:

* sewer camera inspection
* sewer diagnostics
* sewer cleaning
* hydro jetting
* sewer line locating
* drain cleaning
* pre-purchase sewer inspections
* commercial sewer services
* commercial drain services

A major competitive differentiator is the company's ability to provide **independent sewer inspection and cleaning services without repair-driven upselling**.

The website should reinforce the distinction between:

1. identifying and documenting sewer conditions, and
2. selling major sewer excavation, replacement, or repair projects.

This positioning is especially important for:

* homebuyers
* homeowners seeking a second opinion
* real estate agents
* property investors
* property managers
* commercial property operators
* customers concerned about unnecessary repair recommendations

### Positioning Guardrail

The Sewer Pros must **not** be presented as a sewer repair, replacement, excavation, trenchless replacement, or general plumbing contractor unless those services are specifically approved and added to the project source-of-truth documentation.

Content must not imply that repair work is available simply because a sewer inspection may identify a condition requiring repair.

---

## 3. Project Markets

The website will operate as a single scalable multi-market platform.

Initial markets are:

### St. Louis, Missouri

St. Louis is an established operating market and currently has an existing Google Business Profile.

### San Diego, California

San Diego is an operating or target market that currently does not have a Google Business Profile.

### Las Vegas, Nevada

Las Vegas is an operating or target market that currently does not have a Google Business Profile.

The architecture must support future market expansion without requiring a redesign of the core routing, content, data, or component systems.

---

## 4. Geographic Architecture

Geographic targeting will be managed through structured market and location data rather than hard-coded page creation.

Existing geographic research contains:

* **579 normalized geographic records**

These records may include combinations of:

* states
* metropolitan areas
* cities
* municipalities
* communities
* neighborhoods
* service areas
* other approved geographic entities

The geographic registry represents the universe of researched geographic opportunities.

It does **not** mean every geographic record should receive an indexable page.

Publication eligibility will be governed by the approved page inventory.

---

## 5. Service Architecture

Existing service research contains:

* **18 canonical service records**

Canonical service records define the approved service entities used throughout the site architecture.

These records will ultimately support:

* service pages
* market pages
* location pages
* service + location combinations
* audience combinations
* commercial combinations
* internal linking
* breadcrumbs
* metadata
* schema
* navigation
* related-content systems
* future programmatic expansion

The canonical service registry, rather than ad hoc wording within individual pages, should determine the official service taxonomy.

---

## 6. Existing Service × Location Research

The project currently contains:

* **579 normalized geographic records**
* **18 canonical service records**
* **10,422 service × location relationships**

These relationships identify potential search and content opportunities across the service and geographic datasets.

### Critical Publishing Rule

The service × location matrix is an **opportunity model**, not a publishing instruction.

A relationship existing in the matrix does not automatically authorize:

* route generation
* page creation
* indexing
* sitemap inclusion
* navigation inclusion

Only routes explicitly approved within:

`04-master-page-build-list.md`

may be treated as authorized production pages.

This distinction protects the site from:

* uncontrolled programmatic page generation
* doorway-page patterns
* thin location content
* excessive indexation
* keyword cannibalization
* low-value service/location combinations
* accidental route explosion

---

## 7. Planned Site Architecture

The website will use a scalable multi-market content architecture containing several page families.

### 7.1 Core Pages

Examples may include:

* homepage
* about
* contact
* service overview
* market overview
* commercial overview
* resources
* other approved company-level pages

### 7.2 Core Service Pages

Individual authoritative pages for approved canonical services.

These pages establish the primary service entities and act as central nodes for related local, audience, and educational content.

### 7.3 Market Hubs

Dedicated market-level hubs for:

* St. Louis, MO
* San Diego, CA
* Las Vegas, NV

Market hubs should organize:

* available services
* relevant locations
* market-specific trust signals
* local content
* customer use cases
* commercial services
* resource content
* conversion paths

### 7.4 Location Pages

Approved city, municipality, community, or other geographic pages designed around genuine local relevance.

### 7.5 Service + Location Pages

Approved combinations of a canonical service and geographic entity where:

* customer demand exists
* search intent is meaningful
* the business can genuinely serve the location
* sufficient unique content can be created
* the route has been approved in the Master Page Build List

### 7.6 Audience Pages

Dedicated pages for strategically important customer groups.

Potential audiences may include:

* homeowners
* homebuyers
* real estate agents
* property investors
* property managers
* commercial property owners
* other approved customer segments

Final audience definitions will be controlled by project-specific documentation.

### 7.7 Audience + Location Pages

Approved local versions of high-value audience propositions where meaningful market-specific search or conversion intent exists.

### 7.8 Commercial Pages

Pages specifically addressing commercial sewer and drain requirements.

These may cover:

* commercial properties
* property management
* multifamily properties
* restaurants
* retail
* offices
* industrial facilities
* other approved commercial segments or applications

### 7.9 Commercial + Location Pages

Market- or location-specific commercial landing pages where sufficient demand and unique local value justify publication.

### 7.10 Comparison Pages

Pages designed around users comparing:

* inspection approaches
* service types
* diagnostic methods
* contractor models
* repair-company inspections versus independent inspections
* other meaningful alternatives

Comparison content must be factually accurate and should not rely on unsupported competitor claims.

### 7.11 Alternative Pages

Pages addressing alternative solutions, providers, approaches, or service options when strategically relevant to search intent and customer decision-making.

### 7.12 Resource and Topic Clusters

Educational content designed to build topical authority around sewer and drain subjects.

Clusters may cover topics such as:

* sewer inspections
* sewer cameras
* sewer line conditions
* sewer cleaning
* hydro jetting
* root intrusion
* sewer line locating
* pre-purchase inspections
* common sewer problems
* commercial sewer maintenance
* drain issues
* homebuyer education
* property management
* sewer diagnostics

Topic clusters must connect strategically to the site's transactional and commercial pages rather than operating as isolated blog content.

---

## 8. Search and Discovery Objectives

The site should be engineered for visibility across both traditional search systems and emerging AI-driven discovery systems.

Project objectives include support for:

* SEO
* local SEO
* geographic search intent
* answer engine optimization
* AI search
* LLM retrieval
* semantic search
* Google Search
* Google Search Console
* Bing Search
* Bing Webmaster Tools
* Google Business Profile
* featured snippets
* People Also Ask results
* rich results
* structured data
* knowledge graph/entity understanding
* conversational search
* ChatGPT discovery
* Perplexity discovery
* other AI-assisted search environments

These objectives should be pursued through technically sound architecture, strong content, structured entities, meaningful internal linking, local relevance, and authoritative topic coverage rather than keyword repetition or mass page generation.

---

## 9. Conversion Objectives

Traffic growth alone is not sufficient.

The website must convert qualified visitors into customer actions.

Primary conversion actions may include:

* requesting service
* scheduling an inspection
* calling the company
* submitting a contact form
* requesting commercial service
* requesting a pre-purchase inspection
* contacting the company for diagnostic assistance

Secondary conversion actions may include:

* exploring service details
* reviewing service areas
* learning about the inspection process
* understanding the independent inspection model
* accessing educational resources
* moving from informational content to a relevant service page

Conversion architecture will be defined in:

`17-conversion-architecture.md`

---

## 10. Technology Stack

The project will use the following stack.

### Research, Strategy, and Content

* Claude Project

Claude Project will contain project-specific knowledge and support:

* research
* planning
* content development
* architecture work
* strategic reasoning
* project-specific decision support

### Workflow and Governance

* Site OS Master Claude skill

Site OS Master provides the reusable operating system for:

* workflows
* prompts
* research methodology
* QA methodology
* production gates
* efficiency practices
* build governance
* implementation methodology

### Development

* Next.js App Router
* TypeScript
* Tailwind CSS
* VS Code

### Version Control

* Git
* GitHub

Recommended repository:

`the-sewer-pros-site`

### Hosting and Deployment

* Cloudflare Pages

The architecture should remain compatible with the deployment requirements established in the technical architecture documentation.

---

## 11. Site OS Governance Rule

Site OS Master is the reusable workflow and governance layer for this project.

Project documentation must **not duplicate generalized Site OS procedures** unless The Sewer Pros requires a specific exception, modification, or override.

### Site OS Owns

Generalized processes such as:

* research workflows
* content workflows
* reusable prompts
* QA procedures
* build gates
* audit methodology
* standard development methodology
* recurring optimization processes
* generalized publishing procedures

### The Repository Owns

The Sewer Pros-specific facts and decisions such as:

* business positioning
* approved services
* approved markets
* approved locations
* page inventory
* route definitions
* service taxonomy
* location taxonomy
* audience definitions
* commercial segments
* page specifications
* brand decisions
* schema entities
* redirect requirements
* analytics requirements
* project-specific exceptions
* project decisions and changes

### Override Principle

When a project-specific requirement conflicts with a generalized Site OS convention, the explicit project-specific decision documented in this repository governs The Sewer Pros implementation.

Any important override should also be recorded in:

`22-decisions-change-log.md`

---

## 12. Repository Source-of-Truth Principle

The repository documentation will operate as the project-specific source of truth.

Claude, Claude Code, developers, content creators, and future automation should derive implementation decisions from the approved project documents rather than improvising architecture or taxonomy.

Examples include:

* services must come from the canonical service registry
* geographic entities must come from the location registry
* publishable pages must come from the Master Page Build List
* URLs must conform to the routing strategy
* page structures must conform to content specifications
* schema must conform to the schema/entity strategy
* internal links must conform to the internal linking strategy

Generated website code must remain downstream of approved project decisions.

---

## 13. Source-of-Truth Hierarchy

When implementation decisions need to be resolved, use the following hierarchy.

### Level 1 — Approved Project Decisions

Explicit decisions recorded in project-specific documentation.

### Level 2 — Master Registries and Build Lists

Including:

* Master Page Build List
* Master Service Registry
* Master Location Registry
* approved matrices

### Level 3 — Project-Specific Strategy Documents

Including:

* information architecture
* SEO strategy
* content strategy
* schema strategy
* conversion architecture
* design system
* analytics strategy

### Level 4 — Site OS Master

Reusable workflow, methodology, QA, and governance rules.

### Level 5 — Implementation

Next.js components, routes, content files, utilities, configuration, and deployment code.

Implementation must follow the approved sources above it and should not silently redefine them.

---

## 14. Page Authorization Model

The website must use an explicit page authorization model.

A potential keyword, matrix relationship, location, audience, or service combination does not become a page simply because it exists in research.

The publication workflow is:

**Research Opportunity → Registry/Matrix → Strategic Evaluation → Master Page Build List Approval → Route Implementation → QA → Publication/Indexing**

The **Master Page Build List** is the controlling document for page authorization.

No automated process should generate indexable pages directly from the full service × location matrix.

---

## 15. Multi-Market Scalability Principle

The architecture should be designed for more than the initial three markets.

Adding another approved market should primarily require:

1. adding structured market and location data,
2. approving relevant pages,
3. adding market-specific content and entity information,
4. generating approved routes using existing systems.

It should not require rebuilding:

* navigation architecture
* routing logic
* page templates
* schema infrastructure
* component systems
* content models
* sitemap architecture
* internal linking systems

Market-specific exceptions should be data-driven wherever practical.

---

## 16. Content Quality Principle

The project will prioritize **useful, differentiated, intent-matched content** over raw page volume.

Every indexable page should have a legitimate reason to exist.

A page should provide meaningful value based on one or more of the following:

* distinct search intent
* distinct service intent
* geographic relevance
* audience-specific needs
* commercial use case
* decision-stage comparison intent
* educational value
* conversion value
* entity or topical authority value

Changing only a city name, service name, heading, or metadata is not sufficient differentiation.

---

## 17. Independent Inspection Differentiator

Independent inspection should be treated as a central strategic concept across relevant sections of the site.

The underlying customer problem is that a company financially motivated to perform a major sewer repair may also be the company diagnosing whether that repair is necessary.

The Sewer Pros can differentiate through an inspection and diagnostic model that is not primarily dependent on selling large repair projects.

Where factually applicable, site content should explain advantages such as:

* objective condition documentation
* video inspection evidence
* clearer understanding of sewer conditions
* identification of line location
* cleaning before reassessment where appropriate
* information useful for purchasing decisions
* information useful when evaluating repair recommendations
* reduced pressure from repair-driven sales processes

This positioning must remain factual and professional.

The site should not claim that all repair contractors provide biased inspections or unnecessary repairs.

---

## 18. Real Estate and Pre-Purchase Opportunity

Pre-purchase sewer inspection is a strategically important service category.

Potential customers and referral audiences include:

* homebuyers
* real estate agents
* real estate brokers
* property investors
* residential investors
* property inspectors
* property managers

Relevant content should help users understand:

* why sewer condition matters before purchasing property
* what a sewer camera inspection can reveal
* why visible plumbing condition does not necessarily indicate sewer lateral condition
* what documentation the inspection provides
* how sewer findings may affect further evaluation or purchase decisions

Any legal, inspection, disclosure, or real estate claims must be written conservatively and accurately.

---

## 19. Commercial Opportunity

Commercial sewer and drain services will be treated as a distinct growth opportunity rather than simply an extension of residential copy.

Commercial customers may have different requirements involving:

* facility uptime
* recurring drain problems
* preventative cleaning
* high-usage drain systems
* property portfolios
* tenant impact
* restaurant operations
* multifamily properties
* maintenance coordination
* documentation
* scheduling
* emergency response expectations

Commercial architecture should therefore support dedicated:

* commercial hub content
* commercial services
* commercial audiences
* approved commercial + location opportunities

---

## 20. Local Search and Google Business Profile Status

Current Google Business Profile status:

| Market        | GBP Status                  |
| ------------- | --------------------------- |
| St. Louis, MO | Existing GBP                |
| San Diego, CA | No GBP currently identified |
| Las Vegas, NV | No GBP currently identified |

The website architecture must not imply the existence of a verified physical office or Google Business Profile where one does not exist.

Local SEO strategy must distinguish between:

* website service-area targeting
* actual business locations
* verified GBP locations
* eligible future GBP expansion

The detailed plan will be maintained in:

`11-local-seo-gbp-strategy.md`

---

## 21. Current Social Presence

Current identified social presence is concentrated in San Diego.

### Instagram

* Market: San Diego
* Followers: approximately 302
* Last identified post: approximately 90 weeks ago

### Facebook

* Market: San Diego
* Followers: approximately 5
* Last identified post: April 19, 2024

No additional market-specific social profiles should be assumed without verification.

Social activity may become useful for:

* brand validation
* local trust
* content distribution
* project examples
* educational sewer content
* Google Business Profile support
* referral relationships

Social media, however, is not a substitute for the site's SEO, entity, and local-search architecture.

---

## 22. Indexation Governance

Indexation must be intentional.

Not every:

* service
* location
* service/location relationship
* audience
* commercial segment
* comparison topic
* content topic

should automatically become indexable.

Indexation decisions should account for:

* customer demand
* search demand
* service availability
* content quality
* uniqueness
* geographic relevance
* business value
* crawl efficiency
* cannibalization risk
* topical architecture
* overall site quality

Routes that are not approved should not accidentally enter:

* XML sitemaps
* navigation
* internal-link modules
* structured data
* canonical systems
* search engine indexes

---

## 23. Initial Project Success Criteria

The repository foundation will be considered successful when the project can reliably answer:

* What does The Sewer Pros do?
* What does The Sewer Pros explicitly not do?
* Which services are canonical?
* Which markets are approved?
* Which locations are recognized?
* Which audiences matter?
* Which commercial segments matter?
* Which pages are approved?
* Which routes correspond to those pages?
* Which pages should be indexed?
* How should pages relate to each other?
* Which schema entities should be represented?
* How should conversions be captured?
* How should performance be measured?
* How should future markets be added?
* Which decisions belong in Site OS versus the project repository?

The implementation should never require guessing at these foundational questions.

---

## 24. Planned Project Documentation

The project documentation set is:

1. `00-project-overview.md`
2. `01-business-brand-foundation.md`
3. `02-nextjs-technical-architecture.md`
4. `03-information-architecture.md`
5. `04-master-page-build-list.md`
6. `05-url-routing-strategy.md`
7. `06-master-service-registry.md`
8. `07-master-location-registry.md`
9. `08-service-location-matrix.md`
10. `09-audience-commercial-matrix.md`
11. `10-seo-strategy.md`
12. `11-local-seo-gbp-strategy.md`
13. `12-content-aeo-ai-strategy.md`
14. `13-competitor-analysis.md`
15. `14-content-specification.md`
16. `15-schema-entity-strategy.md`
17. `16-internal-linking-strategy.md`
18. `17-conversion-architecture.md`
19. `18-design-system.md`
20. `19-analytics-measurement.md`
21. `20-migration-redirect-plan.md`
22. `21-post-launch-seo-roadmap.md`
23. `22-decisions-change-log.md`
24. `CLAUDE.md`

These documents should be created individually and treated as interconnected project specifications.

---

## 25. Document Responsibility Summary

### Business and Brand

`01-business-brand-foundation.md`

Defines company facts, positioning, differentiators, messaging boundaries, trust elements, and approved brand information.

### Technical Architecture

`02-nextjs-technical-architecture.md`

Defines the Next.js, TypeScript, Tailwind, build, rendering, data, component, and Cloudflare architecture.

### Information Architecture

`03-information-architecture.md`

Defines site hierarchy, page families, hubs, relationships, and navigation logic.

### Page Authorization

`04-master-page-build-list.md`

Defines exactly which pages are approved for creation and publication.

### Routing

`05-url-routing-strategy.md`

Defines approved route structures and URL conventions.

### Service Taxonomy

`06-master-service-registry.md`

Defines canonical services.

### Geographic Taxonomy

`07-master-location-registry.md`

Defines canonical markets and geographic entities.

### Opportunity Relationships

`08-service-location-matrix.md`

Defines researched service × geography relationships without automatically authorizing publication.

### Audience and Commercial Architecture

`09-audience-commercial-matrix.md`

Defines audience, commercial, and related combinations.

### Search Strategy

`10-seo-strategy.md`

Defines the project's organic search strategy.

### Local Search

`11-local-seo-gbp-strategy.md`

Defines market-specific local SEO and Google Business Profile strategy.

### AI and Answer Search

`12-content-aeo-ai-strategy.md`

Defines content strategy for AEO, AI retrieval, LLM search, and conversational discovery.

### Competitive Research

`13-competitor-analysis.md`

Defines the competitive landscape and strategic opportunities.

### Page Content Standards

`14-content-specification.md`

Defines the project-specific requirements for each page family.

### Structured Data

`15-schema-entity-strategy.md`

Defines entities, structured data, schema relationships, and knowledge graph support.

### Internal Linking

`16-internal-linking-strategy.md`

Defines hierarchical and contextual internal-link relationships.

### Conversion

`17-conversion-architecture.md`

Defines calls to action, forms, conversion paths, and lead-generation architecture.

### Design

`18-design-system.md`

Defines the website's visual and component system.

### Measurement

`19-analytics-measurement.md`

Defines analytics, Search Console, Bing Webmaster, conversion measurement, and reporting requirements.

### Migration

`20-migration-redirect-plan.md`

Defines legacy URL inventory, redirects, migration controls, and preservation requirements.

### Growth

`21-post-launch-seo-roadmap.md`

Defines phased expansion after initial launch.

### Decision History

`22-decisions-change-log.md`

Records material changes, approvals, overrides, and architectural decisions.

### Claude Code Governance

`CLAUDE.md`

Provides concise repository-level operating context and implementation instructions for Claude Code without duplicating the generalized Site OS skill.

---

## 26. Repository Philosophy

The repository should function as both:

1. the application codebase, and
2. the durable project-specific knowledge base.

The project should favor:

* structured data over scattered constants
* canonical registries over inconsistent naming
* explicit approvals over implicit generation
* reusable templates over duplicated page implementations
* scalable architecture over market-specific hacks
* strong content over page volume
* factual differentiation over exaggerated claims
* measurable conversions over traffic-only goals
* durable documentation over undocumented decisions

---

## 27. Foundation Rule

Before large-scale page production begins, the project must establish reliable source-of-truth documentation for:

* business identity
* services
* markets
* locations
* information architecture
* approved page inventory
* routes
* SEO strategy
* content rules
* schema
* linking
* conversions
* design
* analytics

The goal of the foundation phase is to make subsequent research, content production, coding, QA, and expansion **deterministic rather than improvisational**.

The Sewer Pros website should be built from approved structured decisions—not from uncontrolled keyword lists, page-generation scripts, or assumptions.
