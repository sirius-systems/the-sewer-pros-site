# The Sewer Pros — Decisions & Change Log

**Document:** `22-decisions-change-log.md`
**Project:** The Sewer Pros Website Rebuild
**Repository:** `the-sewer-pros-site`
**Status:** Active Project Governance / Source of Truth
**Initial Baseline Date:** August 14, 2026

---

# 1. Purpose

This document records material project decisions, approved changes, architectural revisions, exceptions, overrides, and unresolved decisions for The Sewer Pros website rebuild.

It exists to prevent important project decisions from becoming scattered across:

* chat conversations
* Claude sessions
* GitHub commits
* VS Code notes
* research files
* implementation assumptions
* undocumented developer decisions

The purpose is to maintain a permanent project history answering:

> **What was decided, when was it decided, why was it decided, and which project documents or systems were affected?**

---

# 2. Governance Role

This document is the authoritative historical record of material project decisions.

It does **not** replace the subject-specific source-of-truth documents.

For example:

```text
Service taxonomy
→ 06-master-service-registry.md
```

```text
Approved routes
→ 04-master-page-build-list.md
```

```text
URL structure
→ 05-url-routing-strategy.md
```

```text
Technical architecture
→ 02-nextjs-technical-architecture.md
```

This log records **changes to those decisions and why they occurred**.

---

# 3. Site OS Relationship

Site OS Master remains the reusable operating system governing:

* workflows
* research procedures
* prompts
* QA
* gates
* implementation methodology
* validation
* efficiency

This project log should not duplicate generalized Site OS procedures.

Use this document when:

* The Sewer Pros needs a project-specific exception
* a project-specific architecture changes
* a business fact changes
* a service is added or removed
* a market changes
* a route strategy changes
* an approved page is added or retired
* a technical implementation decision materially changes
* a Site OS default requires a project-specific override

---

# 4. Decision Hierarchy

When conflicting project information exists, use the following priority:

```text
1. Most recent explicit approved project decision
2. Subject-specific source-of-truth document
3. This decisions/change log
4. Approved business/source data
5. Site OS Master
6. Validated research
7. Implementation convention
8. AI inference
```

This log should help identify the most recent approved decision.

---

# 5. What Belongs in This Log

Record changes involving:

## Business

* positioning
* service capabilities
* service exclusions
* markets
* audiences
* commercial capabilities
* business identity

## SEO

* page architecture
* indexation rules
* location strategy
* service + location strategy
* content strategy
* canonicalization
* local SEO
* GBP strategy

## Technical

* framework
* hosting
* routing
* deployment
* rendering
* analytics
* schema
* redirects

## Design

* major brand direction
* design-system changes
* navigation architecture
* conversion-system changes

## Project Governance

* source-of-truth changes
* Site OS overrides
* publishing rules
* approval gates

---

# 6. What Does Not Need Logging

Do not record every minor implementation detail.

Examples that normally do not require entries:

* typo corrections
* minor spacing changes
* routine image replacement
* ordinary dependency patches
* non-material copy edits
* small refactors that do not change architecture
* routine QA fixes

Git history can capture normal implementation changes.

This log is for **decisions with future strategic relevance**.

---

# 7. Decision Statuses

Use the following statuses.

## `APPROVED`

Decision is active and authoritative.

## `SUPERSEDED`

A newer approved decision has replaced it.

## `REVERSED`

The previous decision has been intentionally undone.

## `DEFERRED`

Decision was considered but postponed.

## `PROPOSED`

Decision is under consideration but not approved.

## `REJECTED`

Proposal was evaluated and explicitly declined.

---

# 8. Impact Levels

Use:

## Critical

Changes core business positioning, architecture, domain, markets, or major service capabilities.

## High

Changes routes, publishing strategy, local SEO, schema, conversion architecture, or major page families.

## Medium

Changes significant content, design, analytics, or implementation standards.

## Low

Project-specific decision worth preserving but unlikely to affect the broader architecture.

---

# 9. Decision Record Format

Use this format for new entries:

```markdown
## DEC-### — Decision Title

**Date:** YYYY-MM-DD  
**Status:** APPROVED  
**Impact:** High  
**Decision Owner:**  
**Affected Documents:**  

### Decision

Describe what was decided.

### Reason

Explain why the decision was made.

### Previous State

Describe the prior state if applicable.

### New State

Describe the resulting state.

### Implementation Impact

List systems, pages, data, code, or workflows that must change.

### Follow-Up

List any additional action required.

---
```

---

# 10. Initial Project Decision Register

The following decisions represent the approved project baseline as of August 14, 2026.

---

# DEC-001 — Repository Name

**Date:** 2026-08-14
**Status:** APPROVED
**Impact:** Medium
**Decision Owner:** Project
**Affected Documents:** All repository documentation

### Decision

The recommended repository name is:

```text
the-sewer-pros-site
```

### Reason

The name is:

* brand-specific
* concise
* understandable
* consistent with website repository conventions

### New State

Project documentation and implementation should assume:

```text
the-sewer-pros-site
```

unless a later repository naming decision supersedes this entry.

---

# DEC-002 — Claude Project as Project Intelligence Workspace

**Date:** 2026-08-14
**Status:** APPROVED
**Impact:** High
**Decision Owner:** Project
**Affected Documents:** `00-project-overview.md`, `CLAUDE.md`

### Decision

Claude Project will be used for:

* project knowledge
* research
* planning
* content development
* project continuity

### Reason

The project requires a persistent research and content-development environment separate from the production repository implementation workflow.

---

# DEC-003 — Site OS Master Governs Reusable Methodology

**Date:** 2026-08-14
**Status:** APPROVED
**Impact:** Critical
**Decision Owner:** Project
**Affected Documents:** All project documentation

### Decision

Site OS Master is the reusable Claude skill governing:

* workflows
* prompts
* research methodology
* QA
* validation gates
* efficiency
* implementation methodology
* build governance

### Reason

Reusable procedures should remain centralized instead of being duplicated across every website repository.

### Project Rule

Repository documentation should contain:

```text
PROJECT-SPECIFIC TRUTH
```

not duplicated generalized Site OS instructions.

### Override Rule

If The Sewer Pros requires an exception to Site OS Master, that exception must be explicitly documented in the appropriate repository document and, when material, in this log.

---

# DEC-004 — Next.js App Router

**Date:** 2026-08-14
**Status:** APPROVED
**Impact:** Critical
**Affected Documents:** `02-nextjs-technical-architecture.md`

### Decision

The website will use:

```text
Next.js App Router
```

### Reason

The architecture needs to support:

* scalable routing
* structured page families
* reusable components
* TypeScript
* metadata
* SEO
* multi-market expansion

---

# DEC-005 — TypeScript

**Date:** 2026-08-14
**Status:** APPROVED
**Impact:** High
**Affected Documents:** `02-nextjs-technical-architecture.md`

### Decision

TypeScript will be the primary application language.

---

# DEC-006 — Tailwind CSS

**Date:** 2026-08-14
**Status:** APPROVED
**Impact:** High
**Affected Documents:** `02-nextjs-technical-architecture.md`, `18-design-system.md`

### Decision

Tailwind CSS will provide the primary styling architecture.

---

# DEC-007 — VS Code Development Environment

**Date:** 2026-08-14
**Status:** APPROVED
**Impact:** Medium

### Decision

VS Code will be the primary local development environment.

---

# DEC-008 — GitHub as Repository Source of Truth

**Date:** 2026-08-14
**Status:** APPROVED
**Impact:** Critical

### Decision

GitHub will store:

* source code
* documentation
* configuration
* project data
* content
* structured registries
* implementation history

### Reason

The repository must serve as the persistent project-specific source of truth.

---

# DEC-009 — Cloudflare Pages Deployment

**Date:** 2026-08-14
**Status:** APPROVED
**Impact:** Critical
**Affected Documents:** `02-nextjs-technical-architecture.md`, `20-migration-redirect-plan.md`

### Decision

Cloudflare Pages will be used for production deployment and hosting.

---

# DEC-010 — Single-Domain Multi-Market Architecture

**Date:** 2026-08-14
**Status:** APPROVED
**Impact:** Critical
**Affected Documents:**

* `03-information-architecture.md`
* `04-master-page-build-list.md`
* `05-url-routing-strategy.md`
* `07-master-location-registry.md`

### Decision

St. Louis, San Diego, and Las Vegas will operate within one primary website architecture.

Separate standalone websites will not be created for each market.

### Reason

A single-domain architecture allows:

* consolidated authority
* shared service entities
* scalable internal linking
* simpler brand management
* centralized content governance

---

# DEC-011 — Initial Primary Markets

**Date:** 2026-08-14
**Status:** APPROVED
**Impact:** Critical
**Affected Documents:** All location-related documents

### Decision

Initial primary markets are:

1. St. Louis, Missouri
2. San Diego, California
3. Las Vegas, Nevada

### Rule

Future market expansion requires explicit approval.

---

# DEC-012 — Core Business Positioning

**Date:** 2026-08-14
**Status:** APPROVED
**Impact:** Critical
**Affected Documents:**

* `00-project-overview.md`
* `01-business-brand-foundation.md`
* `10-seo-strategy.md`
* `12-content-aeo-ai-strategy.md`
* `13-competitor-analysis.md`
* `14-content-specification.md`
* `17-conversion-architecture.md`
* `18-design-system.md`

### Decision

The Sewer Pros should be positioned primarily around:

```text
Sewer Inspection
+
Diagnostics
+
Cleaning
+
Hydro Jetting
+
Locating
+
Drain Cleaning
+
Pre-Purchase Inspection
+
Commercial Sewer/Drain Services
```

A central differentiator is:

> **Independent sewer inspection and cleaning without repair-driven upselling.**

---

# DEC-013 — Sewer Repair and Replacement Are Not Approved Services

**Date:** 2026-08-14
**Status:** APPROVED
**Impact:** Critical
**Affected Documents:** All service, content, schema, SEO, conversion, and design documents

### Decision

Do not position The Sewer Pros as a sewer repair or replacement contractor unless specifically approved later.

Unapproved service positioning includes:

* sewer line repair
* sewer replacement
* excavation
* trenchless replacement
* pipe bursting
* sewer lining
* major sewer construction

### Allowed Use

Repair and replacement topics may appear educationally in contexts such as:

* evaluating a repair recommendation
* determining whether repair may be necessary
* obtaining a second opinion
* comparing cleaning vs. structural repair

### Reason

The company's independent inspection model depends on maintaining a clear distinction between:

```text
Diagnosis
```

and:

```text
Selling the Repair
```

---

# DEC-014 — Scalable Multi-Market Page Architecture

**Date:** 2026-08-14
**Status:** APPROVED
**Impact:** Critical
**Affected Documents:** `03-information-architecture.md`, `04-master-page-build-list.md`

### Decision

The website architecture may support:

* core pages
* core service pages
* market hubs
* location pages
* service + location pages
* audience pages
* audience + location pages
* commercial pages
* commercial + location pages
* comparison pages
* alternative pages
* resource/topic clusters

### Rule

Architecture capability does not equal publishing approval.

---

# DEC-015 — Master Page Build List Is Publishing Authority

**Date:** 2026-08-14
**Status:** APPROVED
**Impact:** Critical
**Affected Documents:** Entire project

### Decision

`04-master-page-build-list.md`

is the authoritative registry controlling which public indexable routes may be created.

### Rule

A route must not be generated merely because it exists in:

* a keyword database
* a competitor analysis
* the location registry
* the service registry
* the service × location matrix
* AI output

### Governing Principle

```text
Opportunity
    ↓
Evaluation
    ↓
Master Page Build List Approval
    ↓
Build
    ↓
Index
```

---

# DEC-016 — Geographic Dataset Is Opportunity Intelligence

**Date:** 2026-08-14
**Status:** APPROVED
**Impact:** Critical
**Affected Documents:**

* `07-master-location-registry.md`
* `08-service-location-matrix.md`
* `21-post-launch-seo-roadmap.md`

### Decision

The project contains:

```text
579 normalized geographic records
```

These records are strategic research/data assets.

They do not automatically authorize:

```text
579 indexable location pages
```

---

# DEC-017 — Eighteen Canonical Service Records

**Date:** 2026-08-14
**Status:** APPROVED
**Impact:** Critical
**Affected Documents:** `06-master-service-registry.md`

### Decision

The project research contains:

```text
18 canonical service records
```

The Master Service Registry controls canonical naming, relationships, and service eligibility.

### Rule

AI, page copy, forms, schema, and code must not independently invent alternative canonical service taxonomies.

---

# DEC-018 — 10,422 Service × Location Relationships Are Not Automatic Pages

**Date:** 2026-08-14
**Status:** APPROVED
**Impact:** Critical
**Affected Documents:**

* `04-master-page-build-list.md`
* `08-service-location-matrix.md`
* `10-seo-strategy.md`
* `14-content-specification.md`
* `16-internal-linking-strategy.md`
* `21-post-launch-seo-roadmap.md`

### Decision

The project contains:

```text
10,422 service × location relationships
```

These represent potential SEO relationships.

### Explicit Rule

```text
relationship_exists
≠
publish_page
```

### Reason

This safeguard protects against:

* doorway-page creation
* thin content
* uncontrolled programmatic SEO
* index bloat
* duplicate content
* cannibalization

---

# DEC-019 — Controlled Geographic Expansion

**Date:** 2026-08-14
**Status:** APPROVED
**Impact:** High
**Affected Documents:** `21-post-launch-seo-roadmap.md`

### Decision

Geographic expansion should occur through controlled cohorts.

Conceptually:

```text
Approved Locations
        ↓
Publish Initial Cohort
        ↓
Measure
        ↓
Learn
        ↓
Approve Additional Cohort
```

Do not publish the entire geographic opportunity set simultaneously.

---

# DEC-020 — St. Louis Has Existing Google Business Profile

**Date:** 2026-08-14
**Status:** APPROVED BASELINE FACT
**Impact:** High
**Affected Documents:**

* `11-local-seo-gbp-strategy.md`
* `15-schema-entity-strategy.md`
* `19-analytics-measurement.md`

### Decision / Baseline

St. Louis currently has an existing Google Business Profile.

### Strategic Implication

St. Louis should support:

```text
Website
+
GBP
+
Local Search
```

as an integrated local ecosystem.

---

# DEC-021 — San Diego Has No Current Google Business Profile

**Date:** 2026-08-14
**Status:** APPROVED BASELINE FACT
**Impact:** High

### Decision / Baseline

No current San Diego Google Business Profile has been identified.

### Strategic Implication

San Diego should initially use:

```text
Organic-First Local SEO
```

without pretending a physical branch exists.

---

# DEC-022 — Las Vegas Has No Current Google Business Profile

**Date:** 2026-08-14
**Status:** APPROVED BASELINE FACT
**Impact:** High

### Decision / Baseline

No current Las Vegas Google Business Profile has been identified.

### Strategic Implication

Las Vegas should initially use:

```text
Organic-First Local SEO
```

with particular opportunity around commercial and property-management search.

---

# DEC-023 — No Fake Local Locations

**Date:** 2026-08-14
**Status:** APPROVED
**Impact:** Critical
**Affected Documents:**

* `07-master-location-registry.md`
* `11-local-seo-gbp-strategy.md`
* `14-content-specification.md`
* `15-schema-entity-strategy.md`
* `18-design-system.md`

### Decision

The site must not fabricate:

* local offices
* business addresses
* local storefronts
* technicians stationed in a location
* local phone numbers
* physical branches

for SEO purposes.

### Reason

Market coverage and physical business presence are separate concepts.

---

# DEC-024 — One Primary Organization Entity

**Date:** 2026-08-14
**Status:** APPROVED
**Impact:** High
**Affected Documents:** `15-schema-entity-strategy.md`

### Decision

Structured data should maintain one primary entity for:

```text
The Sewer Pros
```

### Rule

Do not represent every SEO market/location page as a separate company.

---

# DEC-025 — LocalBusiness Requires Verified Real Location

**Date:** 2026-08-14
**Status:** APPROVED
**Impact:** High
**Affected Documents:** `15-schema-entity-strategy.md`

### Decision

`LocalBusiness` schema should only be used where a legitimate physical operating location/branch has been verified and approved.

### Implication

San Diego and Las Vegas should not automatically receive LocalBusiness entities because market pages exist.

Use appropriate relationships such as:

```text
Service
+
areaServed
+
Place
```

instead.

---

# DEC-026 — Service Schema Represents Approved Services

**Date:** 2026-08-14
**Status:** APPROVED
**Impact:** Medium
**Affected Documents:** `15-schema-entity-strategy.md`

### Decision

Canonical services should normally be modeled using:

```text
Service
```

rather than fake products, businesses, or keyword entities.

---

# DEC-027 — FAQ Content Does Not Depend on FAQ Rich Results

**Date:** 2026-08-14
**Status:** APPROVED
**Impact:** Medium
**Affected Documents:**

* `12-content-aeo-ai-strategy.md`
* `14-content-specification.md`
* `15-schema-entity-strategy.md`

### Decision

FAQ content remains strategically valuable for:

* users
* AEO
* AI retrieval
* semantic depth

The strategy should not depend on receiving Google FAQ rich-result enhancements.

---

# DEC-028 — No Self-Serving Review Schema Strategy

**Date:** 2026-08-14
**Status:** APPROVED
**Impact:** Medium
**Affected Documents:** `15-schema-entity-strategy.md`

### Decision

The project should not implement self-serving business review markup merely to pursue review stars.

Authentic reviews remain important visually and for conversion.

---

# DEC-029 — Real Estate Is a Strategic Audience Cluster

**Date:** 2026-08-14
**Status:** APPROVED
**Impact:** High
**Affected Documents:**

* `09-audience-commercial-matrix.md`
* `13-competitor-analysis.md`
* `14-content-specification.md`
* `16-internal-linking-strategy.md`
* `17-conversion-architecture.md`
* `21-post-launch-seo-roadmap.md`

### Decision

Real-estate-related audiences represent a major strategic opportunity.

Priority groups include:

* home buyers
* home sellers
* real estate agents
* home inspectors
* investors

### Core Service Relationship

```text
Real Estate
        ↓
Pre-Purchase Sewer Inspection
        ↓
Sewer Camera Inspection
```

---

# DEC-030 — Independent Second Opinion Is a Strategic Content Opportunity

**Date:** 2026-08-14
**Status:** APPROVED STRATEGIC DIRECTION
**Impact:** High
**Affected Documents:**

* `13-competitor-analysis.md`
* `14-content-specification.md`
* `17-conversion-architecture.md`
* `21-post-launch-seo-roadmap.md`

### Decision

The site should explore approved content around:

* independent sewer inspection
* repair second opinions
* replacement second opinions
* what to do before approving sewer replacement

### Rule

This content must remain educational and non-accusatory.

---

# DEC-031 — Commercial Is a Dedicated Architecture

**Date:** 2026-08-14
**Status:** APPROVED
**Impact:** High
**Affected Documents:**

* `03-information-architecture.md`
* `09-audience-commercial-matrix.md`
* `14-content-specification.md`
* `16-internal-linking-strategy.md`
* `17-conversion-architecture.md`

### Decision

Commercial sewer/drain services should not be buried as a small subsection of residential content.

Commercial should support:

```text
Commercial Hub
        ↓
Commercial Services
        ↓
Commercial Markets
        ↓
Commercial Audiences
        ↓
Commercial Resources
```

---

# DEC-032 — Commercial Conversion Path Must Be Distinct

**Date:** 2026-08-14
**Status:** APPROVED
**Impact:** Medium
**Affected Documents:** `17-conversion-architecture.md`

### Decision

Commercial inquiries should have a commercial-specific conversion experience.

Do not force commercial leads through a purely residential inquiry flow.

---

# DEC-033 — Pre-Purchase Inspection Conversion Path

**Date:** 2026-08-14
**Status:** APPROVED
**Impact:** Medium
**Affected Documents:** `17-conversion-architecture.md`

### Decision

Pre-purchase sewer inspection should support a distinct conversion path appropriate for:

* buyers
* agents
* sellers
* real-estate transactions

---

# DEC-034 — Conversion Through Evidence, Not Pressure

**Date:** 2026-08-14
**Status:** APPROVED
**Impact:** High
**Affected Documents:**

* `14-content-specification.md`
* `17-conversion-architecture.md`
* `18-design-system.md`

### Decision

The conversion philosophy should emphasize:

```text
Evidence
+
Transparency
+
Expertise
+
Clear Next Step
```

rather than:

* fear
* artificial scarcity
* exaggerated urgency
* repair pressure
* unapproved discounts

---

# DEC-035 — No Unverified Emergency or 24/7 Claims

**Date:** 2026-08-14
**Status:** APPROVED
**Impact:** High
**Affected Documents:** Content and conversion architecture

### Decision

Do not claim:

* 24/7 service
* emergency availability
* same-day service
* guaranteed response times

unless verified and approved.

---

# DEC-036 — No Unverified Pricing or Free-Service Claims

**Date:** 2026-08-14
**Status:** APPROVED
**Impact:** High

### Decision

Do not invent:

* pricing
* discounts
* free inspections
* free estimates
* promotional offers

for conversion purposes.

---

# DEC-037 — Internal Linking Uses Approved Routes Only

**Date:** 2026-08-14
**Status:** APPROVED
**Impact:** High
**Affected Documents:** `16-internal-linking-strategy.md`

### Decision

Internal-link components must reference approved live routes.

### Rule

The service × location opportunity matrix must not automatically produce public links.

---

# DEC-038 — Hub-and-Spoke Internal Linking

**Date:** 2026-08-14
**Status:** APPROVED
**Impact:** High
**Affected Documents:** `16-internal-linking-strategy.md`

### Decision

Primary internal-link architecture should use:

```text
Homepage
    ↓
Primary Hubs
    ↓
Canonical Pages
    ↓
Approved Local/Audience Pages
    ↕
Resources
```

Avoid uncontrolled many-to-many link grids.

---

# DEC-039 — Canonical Service Pages Remain Primary Service Authority

**Date:** 2026-08-14
**Status:** APPROVED
**Impact:** High

### Decision

Localized service pages should reinforce rather than replace the canonical general service page.

Conceptually:

```text
Canonical Service
        ↕
Service + Market / Location
```

---

# DEC-040 — Market Hubs Remain Primary Geographic Authority

**Date:** 2026-08-14
**Status:** APPROVED
**Impact:** High

### Decision

Each primary market hub should function as the main geographic authority node for its market.

---

# DEC-041 — Resource Content Uses Topic Clusters

**Date:** 2026-08-14
**Status:** APPROVED
**Impact:** High
**Affected Documents:**

* `12-content-aeo-ai-strategy.md`
* `14-content-specification.md`
* `16-internal-linking-strategy.md`
* `21-post-launch-seo-roadmap.md`

### Decision

Resources should be organized around service and audience clusters rather than primarily as a chronological generic blog.

Priority clusters include:

* sewer inspection
* sewer cleaning
* hydro jetting
* real estate/homebuyer
* sewer problems
* commercial

---

# DEC-042 — No Arbitrary Content Word Counts

**Date:** 2026-08-14
**Status:** APPROVED
**Impact:** Medium
**Affected Documents:** `14-content-specification.md`

### Decision

Content quality should be measured by intent satisfaction and unique value rather than minimum word counts.

---

# DEC-043 — No Automatic Blog Publishing Quota

**Date:** 2026-08-14
**Status:** APPROVED
**Impact:** Medium
**Affected Documents:** `21-post-launch-seo-roadmap.md`

### Decision

The post-launch strategy will not require an arbitrary:

```text
X posts per week
```

publishing quota.

Content velocity should follow:

* opportunity
* research quality
* workflow capacity
* business relevance

---

# DEC-044 — Design Should Emphasize Technical Precision

**Date:** 2026-08-14
**Status:** APPROVED DESIGN DIRECTION
**Impact:** High
**Affected Documents:** `18-design-system.md`

### Decision

The design direction should communicate:

```text
Industrial Precision
+
Modern Editorial Design
+
Local Service Trust
```

The site should not visually resemble a generic high-pressure plumbing franchise.

---

# DEC-045 — Design Should Avoid Repair-Heavy Visual Positioning

**Date:** 2026-08-14
**Status:** APPROVED
**Impact:** Medium
**Affected Documents:** `18-design-system.md`

### Decision

Avoid making excavation, destroyed yards, trenching, and replacement imagery a dominant brand theme.

Primary visual themes should emphasize:

* inspection
* cameras
* diagnostics
* locating
* cleaning
* evidence

---

# DEC-046 — One Shared Design System Across Markets

**Date:** 2026-08-14
**Status:** APPROVED
**Impact:** High
**Affected Documents:** `18-design-system.md`

### Decision

St. Louis, San Diego, and Las Vegas should use one unified visual brand system.

Markets may differ through:

* imagery
* proof
* content
* local context

but should not become separate visual brands.

---

# DEC-047 — Analytics Should Measure Business Outcomes

**Date:** 2026-08-14
**Status:** APPROVED
**Impact:** High
**Affected Documents:** `19-analytics-measurement.md`

### Decision

Primary measurement should prioritize:

```text
Qualified Leads
+
Search Visibility
+
Conversion Performance
```

rather than:

* page count
* total keywords
* raw pageviews

---

# DEC-048 — Core Analytics Stack

**Date:** 2026-08-14
**Status:** APPROVED
**Impact:** High
**Affected Documents:** `19-analytics-measurement.md`

### Decision

The preferred measurement stack includes:

* Google Analytics 4
* Google Search Console
* Bing Webmaster Tools
* Cloudflare analytics where useful

Additional tools require a defined purpose.

---

# DEC-049 — Analytics Must Preserve Market and Service Context

**Date:** 2026-08-14
**Status:** APPROVED
**Impact:** High

### Decision

Conversions should preserve non-sensitive context where known, including:

```text
market_id
service_id
page_type
audience_id
lead_type
form_type
```

This allows performance analysis across the multi-market architecture.

---

# DEC-050 — No PII in Analytics

**Date:** 2026-08-14
**Status:** APPROVED
**Impact:** Critical
**Affected Documents:** `19-analytics-measurement.md`

### Decision

Do not transmit customer personally identifiable information into GA4 event parameters.

This includes:

* names
* phone numbers
* emails
* property street addresses
* free-form inquiry messages

---

# DEC-051 — Migration Must Preserve Existing Search Equity

**Date:** 2026-08-14
**Status:** APPROVED
**Impact:** Critical
**Affected Documents:** `20-migration-redirect-plan.md`

### Decision

Before launch, inventory legacy URLs and map valuable URLs to approved new destinations.

### Rule

Do not treat the redesign as a reason to discard existing URL equity.

---

# DEC-052 — No Mass Redirect to Homepage

**Date:** 2026-08-14
**Status:** APPROVED
**Impact:** Critical
**Affected Documents:** `20-migration-redirect-plan.md`

### Decision

Removed legacy URLs should not automatically redirect to the homepage.

Preferred redirect hierarchy:

```text
Exact Equivalent
        ↓
Closest Relevant Approved Page
        ↓
Relevant Hub
        ↓
404 / 410
```

---

# DEC-053 — Permanent Redirects Should Be Direct

**Date:** 2026-08-14
**Status:** APPROVED
**Impact:** High

### Decision

Permanent migrations should normally use a direct permanent redirect.

Avoid redirect chains and loops.

---

# DEC-054 — New Internal Links Must Use Final Canonical URLs

**Date:** 2026-08-14
**Status:** APPROVED
**Impact:** High

### Decision

Internal links should not rely on migration redirects.

External legacy URLs may redirect.

Internal navigation should point directly to the canonical destination.

---

# DEC-055 — Post-Launch SEO Uses Controlled Expansion

**Date:** 2026-08-14
**Status:** APPROVED
**Impact:** Critical
**Affected Documents:** `21-post-launch-seo-roadmap.md`

### Decision

Post-launch growth should follow:

```text
Stabilize
→ Measure
→ Improve
→ Expand
→ Measure Again
```

Do not immediately publish every theoretical route after launch.

---

# DEC-056 — Improve Existing Opportunities Before Unlimited Expansion

**Date:** 2026-08-14
**Status:** APPROVED
**Impact:** High

### Decision

Pages already receiving:

* impressions
* clicks
* conversions

should often be optimized before creating large quantities of new pages.

---

# DEC-057 — Geographic Expansion Uses Cohorts

**Date:** 2026-08-14
**Status:** APPROVED
**Impact:** High

### Decision

New location and service + location pages should preferably launch in measurable cohorts.

This allows performance feedback before additional expansion.

---

# DEC-058 — St. Louis Is the Strongest Existing Local Entity Market

**Date:** 2026-08-14
**Status:** APPROVED STRATEGIC BASELINE
**Impact:** High

### Decision

St. Louis should initially receive particular emphasis around:

* GBP integration
* sewer laterals
* pre-purchase inspection
* real estate
* local authority

because it has the strongest existing established local presence.

---

# DEC-059 — San Diego Initially Uses Organic-First Market Growth

**Date:** 2026-08-14
**Status:** APPROVED
**Impact:** High

### Decision

Until an eligible real San Diego GBP exists, San Diego growth should focus on:

* market authority
* service authority
* real-estate intent
* selected local pages
* independent inspection positioning
* local references

---

# DEC-060 — Las Vegas Initially Uses Organic-First Market Growth

**Date:** 2026-08-14
**Status:** APPROVED
**Impact:** High

### Decision

Until an eligible real Las Vegas GBP exists, Las Vegas growth should emphasize:

* sewer diagnostics
* hydro jetting
* drain cleaning
* line locating
* property management
* commercial SEO
* selected local pages

---

# 11. Initial Decision Summary

The initial project foundation can be summarized as:

```text
TECHNOLOGY
Claude Project
+
Site OS Master
+
Next.js App Router
+
TypeScript
+
Tailwind
+
GitHub
+
Cloudflare Pages
```

```text
MARKETS
St. Louis
+
San Diego
+
Las Vegas
```

```text
POSITIONING
Independent Sewer Inspection
+
Diagnostics
+
Cleaning
+
Locating
```

```text
SEO ARCHITECTURE
Services
+
Markets
+
Locations
+
Audiences
+
Commercial
+
Resources
```

```text
GOVERNANCE
Opportunity Data
≠
Publishing Approval
```

```text
PUBLISHING AUTHORITY
04-master-page-build-list.md
```

---

# 12. Current High-Level Status

As of the initial baseline:

| Area                                   | Status   |
| -------------------------------------- | -------- |
| Project stack                          | Approved |
| Primary markets                        | Approved |
| Independent inspection positioning     | Approved |
| Repair/replacement exclusion           | Approved |
| Multi-market architecture              | Approved |
| Master Page Build List publishing gate | Approved |
| Service registry model                 | Approved |
| Location registry model                | Approved |
| Service × location matrix role         | Approved |
| Audience/commercial architecture       | Approved |
| SEO strategy                           | Approved |
| Local SEO strategy                     | Approved |
| AEO/AI strategy                        | Approved |
| Competitor strategy                    | Approved |
| Content specification                  | Approved |
| Schema/entity strategy                 | Approved |
| Internal linking strategy              | Approved |
| Conversion architecture                | Approved |
| Design-system direction                | Approved |
| Analytics strategy                     | Approved |
| Migration strategy                     | Approved |
| Post-launch SEO roadmap                | Approved |

---

# 13. Current Unresolved / Implementation-Dependent Decisions

The following items may require future decisions or verification.

They are not approved merely because they are listed here.

---

## PENDING-001 — Production Canonical Domain

**Status:** OPEN

Confirm the exact production canonical domain and preferred host format:

```text
apex
vs.
www
```

Once approved, update:

* URL strategy
* schema IDs
* sitemap
* canonical metadata
* analytics
* Search Console
* migration plan

---

## PENDING-002 — St. Louis Physical Entity Details

**Status:** OPEN

Verify the exact public business information associated with the existing St. Louis GBP, including as applicable:

* address/publication status
* phone
* hours
* categories
* service areas
* website destination

This determines the final LocalBusiness schema treatment.

---

## PENDING-003 — San Diego GBP Eligibility

**Status:** DEFERRED

Determine later whether The Sewer Pros qualifies for a legitimate San Diego Google Business Profile.

No GBP or LocalBusiness entity should be fabricated while this remains unresolved.

---

## PENDING-004 — Las Vegas GBP Eligibility

**Status:** DEFERRED

Determine later whether The Sewer Pros qualifies for a legitimate Las Vegas Google Business Profile.

---

## PENDING-005 — Final Brand Color Palette

**Status:** OPEN

Confirm official approved brand colors from final source assets.

Until then, `18-design-system.md` defines semantic visual direction rather than permanent HEX values.

---

## PENDING-006 — Final Typography

**Status:** OPEN

Select production font family/families during design implementation.

---

## PENDING-007 — Primary Conversion Label

**Status:** OPEN

Finalize global primary CTA language.

Candidates may include:

```text
Request Service
Schedule an Inspection
Request an Inspection
```

Page-specific CTAs should remain intent-aware.

---

## PENDING-008 — Final Form Fields

**Status:** OPEN

Confirm operational requirements for:

* general service form
* pre-purchase inspection form
* commercial form

Keep forms as short as operationally practical.

---

## PENDING-009 — Call Tracking

**Status:** DEFERRED / OPTIONAL

Determine whether dynamic call tracking will be implemented.

Any implementation must preserve NAP/entity consistency.

---

## PENDING-010 — Final Redirect Inventory

**Status:** OPEN UNTIL MIGRATION RESEARCH

Legacy URLs must be fully inventoried before launch.

---

## PENDING-011 — GPTBot Training-Access Policy

**Status:** OPEN

Determine whether `GPTBot` should be allowed or disallowed in production `robots.txt`.

This is a business preference regarding AI model-training use of site content.

It is **independent of** search visibility:

```text
OAI-SearchBot → allowed (DEC-062)
GPTBot        → undecided
```

Allowing or blocking `GPTBot` has no effect on ChatGPT search visibility.

Considerations:

* whether the business wants its content used for model training
* whether original inspection imagery, reports, or case studies change that calculus
* whether competitors' choices are relevant (they are not binding)

**Trigger:** before production `robots.txt` is finalized.

Do not write the `GPTBot` directive until this is resolved. Do not resolve it by inheriting a template default.

---

## PENDING-012 — Las Vegas Service Availability Validation

**Status:** OPEN

Confirm the eight release criteria in DEC-063 before promoting any Las Vegas page from `launch_pending_validation` to `launch`.

**Currently gated:**

```text
1 market hub
4 location pages
0 service + location pages (none authorized for generation)
```

**Trigger:** business confirmation of Las Vegas operational service delivery.

This is separate from PENDING-004. Service availability is a prerequisite for a GBP, not a consequence of one.

---

# 14. Superseding a Decision

When a decision changes:

1. Do not delete the original entry.
2. Change its status to `SUPERSEDED`.
3. Add the ID of the new decision.
4. Create a new decision entry.
5. Update affected source-of-truth documents.
6. Update implementation if necessary.

Example:

```markdown
**Status:** SUPERSEDED  
**Superseded By:** DEC-074
```

This preserves project history.

---

# 15. Reversing a Decision

If the project intentionally returns to a previous strategy:

* mark the current decision `REVERSED`
* create a new decision explaining the reversal
* do not simply delete both entries

The history of why the project changed remains valuable.

---

# 16. Deferred Decisions

A deferred decision should record:

* what was considered
* why it was postponed
* what would trigger reconsideration

Example:

```text
San Diego GBP
Deferred until operational eligibility is confirmed.
```

This prevents the same unresolved question from being repeatedly re-decided.

---

# 17. Rejected Proposals

Important rejected proposals may also be logged.

Example:

```text
Proposal:
Automatically generate all 10,422 service × location pages.

Status:
REJECTED

Reason:
Matrix represents opportunity intelligence, not publishing approval.
```

Logging major rejected ideas prevents future regression.

---

# 18. AI Decision Rule

Claude, Claude Code, or another AI system must not silently convert an inference into a project decision.

If a task encounters an unresolved architectural issue:

```text
Existing Approved Rule
→ Follow It
```

If no approved rule exists:

```text
Implementation-Safe Default
+
Document Decision Need
```

For material changes, update this log once the decision is approved.

---

# 19. Claude Code Rule

`CLAUDE.md` should instruct Claude Code to:

* consult source-of-truth documentation
* respect approved decisions
* avoid inventing business facts
* avoid changing architecture silently
* update project documentation when material approved changes occur

A code implementation should not supersede repository governance merely because it exists in production.

---

# 20. Git History Relationship

Git provides:

```text
What changed in files?
```

This document provides:

```text
Why did the project decide to change it?
```

Both are required for long-term project maintainability.

---

# 21. Decision Entry Naming

Use sequential IDs:

```text
DEC-001
DEC-002
DEC-003
...
```

Do not reuse deleted or superseded numbers.

Pending questions may temporarily use:

```text
PENDING-###
```

until formally resolved.

When approved, create a new permanent `DEC-###` entry.

---

# 22. Recommended Commit Practice

When a material decision is implemented, the related Git commit or pull request should ideally reference the decision ID.

Example:

```text
feat: add verified Las Vegas market entity [DEC-074]
```

or:

```text
docs: update service taxonomy [DEC-081]
```

This is recommended for significant changes, not required for every commit.

---

# 23. Decision Review Triggers

Review this document when:

* a new service is proposed
* repair/replacement capabilities change
* a new market is added
* a GBP is created
* a location becomes a verified branch
* the canonical domain changes
* page architecture changes
* route conventions change
* large page cohorts are approved
* a major SEO strategy changes
* analytics architecture changes
* conversion strategy materially changes

---

# 24. Service Change Procedure

If a new service is added:

```text
Business Approval
        ↓
New DEC Entry
        ↓
06-master-service-registry.md
        ↓
04-master-page-build-list.md
        ↓
Matrices
        ↓
Content
        ↓
Schema
        ↓
Internal Linking
        ↓
Analytics
```

Do not add the page first and update governance later.

---

# 25. New Market Procedure

If a new market is approved:

```text
Business Approval
        ↓
New DEC Entry
        ↓
07-master-location-registry.md
        ↓
04-master-page-build-list.md
        ↓
URL Strategy
        ↓
SEO / Local SEO
        ↓
Schema
        ↓
Internal Linking
        ↓
Analytics
```

---

# 26. GBP Change Procedure

If San Diego or Las Vegas receives a legitimate GBP:

```text
Verify Eligibility
        ↓
Verify Business Data
        ↓
New DEC Entry
        ↓
11-local-seo-gbp-strategy.md
        ↓
15-schema-entity-strategy.md
        ↓
Analytics
        ↓
Market Pages
```

Do not automatically create a LocalBusiness entity merely because a profile request was submitted.

---

# 27. Repair Capability Change Procedure

If the company begins providing sewer repair or replacement:

This is a **Critical** decision.

Required review includes:

* positioning
* brand
* service registry
* page build list
* competitor strategy
* content specification
* schema
* internal linking
* conversion
* design
* analytics

A repair capability change affects the site's fundamental competitive positioning.

---

# 28. Route Change Procedure

Before changing an established production URL:

1. identify why the URL must change
2. review organic performance
3. review backlinks
4. review internal links
5. approve the architectural decision
6. create/update decision log if material
7. implement permanent redirect
8. update canonical references
9. update sitemap
10. monitor migration

Do not change URLs solely for minor keyword preference.

---

# 29. Large Page Cohort Approval

When a significant location or service + location cohort is approved, record a decision if it materially expands the indexed architecture.

Example:

```text
DEC-089
Approve first 25 San Diego service + location pages
```

The entry should record:

* page family
* market
* number of routes
* strategic rationale
* expected measurement period

This creates accountability for scaled publishing.

---

# 30. Post-Launch Decision Feedback

Performance data may change project priorities.

Example:

```text
Initial assumption:
Homebuyer content is highest-value in San Diego.

Observed data:
Commercial hydro jetting substantially outperforms real-estate intent.

Decision:
Increase Las Vegas commercial priority.
```

A material strategic reprioritization should be logged.

---

# 31. Avoid Rewriting History

Do not edit old decision entries so they appear to support newer thinking.

Instead:

```text
Old Decision
        ↓
Superseded
        ↓
New Decision
```

The change history is part of the value of this document.

---

# 32. Document Update Requirement

When a decision affects another source-of-truth file, both must be updated.

Example:

If a service is retired:

```text
22-decisions-change-log.md
+
06-master-service-registry.md
+
04-master-page-build-list.md
+
Relevant matrices
```

The change log alone does not update operational truth.

---

# 33. Source-of-Truth Conflict Example

Suppose:

`06-master-service-registry.md`

lists:

```text
Sewer Repair — Not Offered
```

but a new page is accidentally built at:

```text
/services/sewer-repair/
```

The code does not override the registry.

The correct response is:

```text
Fix the implementation
```

unless an approved decision explicitly changed the service capability.

---

# 34. Content Conflict Example

Suppose an AI-generated draft claims:

> The Sewer Pros provides trenchless sewer replacement.

But no approved decision changed DEC-013.

The content is incorrect and must be revised.

AI output does not create project truth.

---

# 35. Local Entity Conflict Example

Suppose a Las Vegas page includes:

```text
Our Las Vegas Office
```

but DEC-022 and DEC-023 remain active.

The page is incorrect.

A market page does not create a physical branch.

---

# 36. Matrix Conflict Example

Suppose:

`08-service-location-matrix.md`

contains:

```text
Hydro Jetting × Location X
```

but the route is absent from:

`04-master-page-build-list.md`

The page is not approved.

DEC-015 and DEC-018 control.

---

# 37. Current Non-Negotiable Decisions

Unless explicitly superseded, the following are foundational:

```text
DEC-003
Site OS Master governs reusable methodology.
```

```text
DEC-012
Independent inspection/diagnostics/cleaning positioning.
```

```text
DEC-013
No repair/replacement contractor positioning.
```

```text
DEC-015
Master Page Build List controls publishing.
```

```text
DEC-018
10,422 matrix relationships are not automatic pages.
```

```text
DEC-023
No fake local locations.
```

These should be treated as major guardrails by Claude, developers, content creators, and future project contributors.

---

# 38. Active Decision Log Template

Add future entries below this point in chronological order.

---

## DEC-061 — Trailing-Slash Canonical Convention

**Date:** 2026-08-14
**Status:** APPROVED
**Impact:** High
**Decision Owner:** Project
**Affected Documents:**

* `02-nextjs-technical-architecture.md` §7
* `05-url-routing-strategy.md` §5, §6, §46, §138 Rule 3
* `15-schema-entity-strategy.md` §114
* `20-migration-redirect-plan.md` §46

### Decision

The project uses:

```ts
trailingSlash: true
```

All canonical URLs end with `/`.

### Reason

`05-url-routing-strategy.md` §5 established the routing convention as the subject-specific authority for URL structure and explicitly finalized the trailing-slash decision for this project.

Consistency is required because the value propagates into canonical tags, sitemap entries, schema `@id` values, breadcrumb items, internal links, and redirect normalization. A mismatch between any two of those layers produces duplicate-URL signals.

### Previous State

`02-nextjs-technical-architecture.md` §7 contained an illustrative configuration example showing:

```ts
trailingSlash: false
```

That value was an early placeholder written before the routing strategy existed. It was never an approved project decision.

### New State

```text
trailingSlash: true
```

is the authoritative production setting.

`02-nextjs-technical-architecture.md` §7 has been corrected and now carries an explicit note identifying the superseded value and pointing to this decision.

### Implementation Impact

* `next.config.ts` must set `trailingSlash: true`
* canonical metadata must emit trailing slashes
* sitemap URLs must emit trailing slashes
* schema `@id` / `url` / `mainEntityOfPage` / breadcrumb items must emit trailing slashes
* internal `Link` hrefs must include trailing slashes
* non-slash variants must normalize via redirect rather than serving independent `200` responses
* route validation should reject stored pathnames lacking a trailing slash

### Follow-Up

Route-validation tooling (`05-url-routing-strategy.md` §66, §131) should enforce this as a build-time check rather than relying on developer discipline.

---

## DEC-062 — AI Crawler Access Policy (Search vs. Training)

**Date:** 2026-08-14
**Status:** APPROVED (search access) / see PENDING-011 (training access)
**Impact:** Medium
**Decision Owner:** Project
**Affected Documents:**

* `12-content-aeo-ai-strategy.md` §120, §121, §122
* `02-nextjs-technical-architecture.md` §42

### Decision

The project treats AI search-discovery access and AI model-training access as **two separate decisions**.

**Approved now:**

```text
OAI-SearchBot → Allow
```

Production `robots.txt` must not block `OAI-SearchBot`, because doing so removes the site from ChatGPT search answers.

**Not decided:**

```text
GPTBot → Undecided
```

See PENDING-011.

### Reason

`12-content-aeo-ai-strategy.md` §121 establishes that search-visibility permission does not imply training permission. OpenAI documents the two crawlers separately, so the project can pursue AI-search visibility while treating training access as an independent business decision.

Blocking the search crawler would forfeit a discovery channel the AEO strategy actively targets. Blocking or allowing the training crawler carries no search-visibility consequence and is therefore a business preference rather than an SEO decision.

### Previous State

No documented crawler policy. Risk of silently inheriting a generic `robots.txt` that resolved both questions by accident.

### New State

```text
OAI-SearchBot: allowed (approved)
GPTBot: unresolved, must be decided before launch
```

### Implementation Impact

* `app/robots.ts` must explicitly allow `OAI-SearchBot`
* `app/robots.ts` must not include a blanket AI-crawler disallow that catches `OAI-SearchBot` as a side effect
* the GPTBot directive must not be written until PENDING-011 is resolved
* do not add `llms.txt` as a substitute for either decision (`12-content-aeo-ai-strategy.md` §123)

### Follow-Up

Resolve PENDING-011 before production launch. Once decided, supersede this entry or append a new decision recording the GPTBot directive.

---

## DEC-063 — Las Vegas Operational Validation Gate

**Date:** 2026-08-14
**Status:** APPROVED
**Impact:** High
**Decision Owner:** Project
**Affected Documents:**

* `04-master-page-build-list.md` §10.3, §14, §19, §43, §51
* `06-master-service-registry.md` §7, §42
* `08-service-location-matrix.md` §26, §27
* `11-local-seo-gbp-strategy.md` §67, §68, §69
* `21-post-launch-seo-roadmap.md` §38

### Decision

Las Vegas pages may be **built and QA'd** but must not be **indexed** until operational service availability is confirmed.

Five pages carry status `launch_pending_validation`:

```text
/las-vegas-nv/
/las-vegas-nv/las-vegas/
/las-vegas-nv/henderson/
/las-vegas-nv/north-las-vegas/
/las-vegas-nv/summerlin/
```

Zero Las Vegas service + location pages are authorized for generation at this stage.

### Reason

The Las Vegas geographic and service opportunity model is established, but the service registry does not mark the market's individual service menu as operationally confirmed. Publishing indexable service claims for a market whose delivery capability is unverified would create inaccurate customer-facing commitments.

This is a business-accuracy gate, not an SEO-performance gate.

### Previous State

DEC-022 recorded the absence of a Las Vegas GBP as a baseline fact. It did not record the separate service-availability gate governing website indexation.

### New State

The gate is explicit and its release criteria are defined.

**Release criteria** (from `04-master-page-build-list.md` §43) — confirm all before promoting any Las Vegas page to `launch`:

1. active operational coverage
2. services actually offered
3. contact routing functional
4. service-request handling functional
5. geographic coverage confirmed
6. market-specific business facts verified
7. applicable licensing/business requirements satisfied
8. public messaging accurate

### Implementation Impact

* Las Vegas routes generate but must emit `noindex`
* Las Vegas routes must be excluded from the XML sitemap
* Las Vegas routes must not appear in indexable internal-link modules
* Las Vegas pages must not be submitted to Search Console or Bing
* promotion to `launch` requires updating `04-master-page-build-list.md` and a new DEC entry

### Follow-Up

Tracked as PENDING-012. Note this gate is **independent of** PENDING-004 (GBP eligibility) — service availability could be confirmed without a GBP, and a GBP could not be created without service availability.

---

## DEC-064 — Interim Ownership of Visual Identity Values

**Date:** 2026-08-14
**Status:** PROPOSED
**Impact:** Medium
**Decision Owner:** *Awaiting project approval*
**Affected Documents:**

* `01-business-brand-foundation.md`
* `18-design-system.md` §6, §7, §8, §9, §14

### Decision (proposed)

Until final brand assets are supplied, `18-design-system.md` holds **interim authority** for visual-identity values: color roles, typography selection, iconography style, and photography direction.

When verified brand assets arrive, those values move to `01-business-brand-foundation.md` as approved brand facts, and `18-design-system.md` reverts to deferring to it.

### Reason

`18-design-system.md` §6 currently states that approved values in `01-business-brand-foundation.md` supersede the design system's provisional recommendations. However, `01-business-brand-foundation.md` contains no visual-identity section — it covers positioning, voice, messaging boundaries, and trust architecture, but not colors, type, or imagery.

The deferral therefore points at content that does not exist, leaving no document with authority over these values. Implementation would have to either invent them or stall.

This proposal resolves the gap without inventing brand facts: the design system already defines *semantic roles* (`Brand Primary`, `Accent`, `Surface`) rather than specific values, which is a safe interim position. It names an owner for the role definitions while leaving the concrete values open.

### Previous State

```text
18-design-system.md §6 → defers to 01-business-brand-foundation.md
01-business-brand-foundation.md → contains no visual-identity section
Result: no owner
```

### New State (if approved)

```text
Interim:  18-design-system.md owns semantic visual roles
Final:    01-business-brand-foundation.md owns verified brand values
Trigger:  delivery of approved brand assets
```

### Implementation Impact

* implementation may proceed against semantic tokens (`--brand`, `--accent`, `--surface`) without final values
* CSS variables and Tailwind theme tokens must be centralized so values can be swapped without touching component logic (`18-design-system.md` §122, §124)
* no specific HEX values, font families, or logo variants may be treated as approved brand facts until PENDING-005 and PENDING-006 resolve

### Follow-Up

Two options for the client, pending decision:

1. **Supply brand assets** → add a visual-identity section to `01-business-brand-foundation.md`, resolve PENDING-005/006, supersede this entry.
2. **No existing brand system** → approve this entry so the design system owns the values outright, and record the chosen palette/typography as a new DEC when selected.

Do not begin visual implementation against invented brand values while this remains `PROPOSED`.

---

## DEC-065 — Mission Valley Approved as Launch Location Page

**Date:** 2026-08-14
**Status:** APPROVED
**Impact:** Medium
**Decision Owner:** Project
**Affected Documents:**

* `04-master-page-build-list.md` §5, §13, §14, §41, §50, §51
* `07-master-location-registry.md` §29, §67, §68

### Decision

Add the following as an approved launch location page:

```text
loc-sd-mission-valley
/san-diego-ca/mission-valley/
status: launch
indexable: true
```

Launch inventory changes from **69** to **70** page records.

San Diego launch location pages change from **6** to **7**.

### Reason

`04-master-page-build-list.md` §18 authorized:

```text
/san-diego-ca/mission-valley/hydro-jetting/
```

as a `launch`, indexable service + location page, but `/san-diego-ca/mission-valley/` was not among the approved San Diego location pages. The service page therefore had no approved parent.

This produced three concrete failures:

1. **Breadcrumb break** — `05-url-routing-strategy.md` §118 resolves breadcrumb parentage through page/entity relationships. `Home → San Diego → Mission Valley → Hydro Jetting` would have emitted a crumb resolving to a 404.
2. **Orphan-parent violation** — `03-information-architecture.md` §53 requires every approved page to have a defined logical parent; §113 requires a meaningful inbound path.
3. **Link-target violation** — `05-url-routing-strategy.md` §117 and `16-internal-linking-strategy.md` §25 require a service + location page to link to its parent location hub, which did not exist as an approved route.

Adding the parent resolves all three without weakening the publishing gate.

### Verification Performed

The underlying matrix relationship was confirmed present and eligible before approval:

```text
matrix_id: san-diego-ca::mission-valley::svc-hydro-jetting
matrix_status: launch_candidate
index_recommendation: index_launch_candidate
recommended_phase: launch
```

Location registry record:

```text
location_type: commercial_or_mixed_use_district
launch_tier: 1
index_status: launch_candidate
service_matrix: selective
commercial_matrix: full
priority_tags: launch_priority, residential, real_estate, commercial
```

This satisfies the cross-validation requirement in `08-service-location-matrix.md` §112.

### Previous State

```text
/san-diego-ca/mission-valley/hydro-jetting/   → launch, indexable
/san-diego-ca/mission-valley/                 → not approved
Launch total: 69
```

### New State

```text
/san-diego-ca/mission-valley/                 → launch, indexable
/san-diego-ca/mission-valley/hydro-jetting/   → launch, indexable
Launch total: 70
```

### Alternatives Considered

Two other resolutions were available and were rejected:

**Defer the hydro-jetting page to `phase_2`** (launch total 68). Rejected because the matrix classifies the relationship as a launch candidate and Mission Valley is a genuine commercial-district opportunity; deferring would discard a valid launch-quality page to avoid adding its parent.

**Keep as-is and document the exception.** Rejected because it would require breadcrumb logic to special-case a missing hierarchy level, contradicting `05-url-routing-strategy.md` §51 (visible and schema breadcrumb hierarchies must agree) and creating a pattern other pages could copy.

### Implementation Impact

* approved page registry gains `loc-sd-mission-valley`
* route generation gains `/san-diego-ca/mission-valley/`
* sitemap gains one indexable URL
* San Diego market hub should link to Mission Valley in its approved-locations module
* the hydro-jetting page must link up to the new location hub
* breadcrumb resolution for `/san-diego-ca/mission-valley/hydro-jetting/` now resolves fully
* location content must satisfy `14-content-specification.md` §41–42 differentiation requirements

### Content Constraint

Mission Valley is a **commercial/mixed-use district**, not a residential city. `07-master-location-registry.md` §46 uses it as the reference example of a district whose value is commercial rather than residential.

Its location page should therefore emphasize commercial and mixed-use property context rather than reusing the residential pattern applied to the North County city pages. Applying `14-content-specification.md` §79's substitution test, the page should not read correctly if "Mission Valley" were swapped for "Carlsbad."

### Follow-Up

This approval does **not** authorize:

* broad residential service + location expansion within Mission Valley
* `/san-diego-ca/mission-valley/commercial/hydro-jetting/`, which remains `phase_2` per `04-master-page-build-list.md` §27
* treating commercial districts generally as automatic launch locations

Each remains subject to separate Master Page Build List approval.

---

## DEC-066 — Canonical `PageType` Taxonomy

**Date:** 2026-08-15
**Status:** PROPOSED
**Impact:** Medium
**Decision Owner:** Project
**Affected Documents:**

* `02-nextjs-technical-architecture.md` §26
* `03-information-architecture.md` §52
* `19-analytics-measurement.md` §28
* `04-master-page-build-list.md` §5, §44

### Decision

A single canonical `PageType` union is defined in `types/page.ts`, and analytics page-type attribution is treated as a **separate dimension** (`AnalyticsPageType`) rather than the same list.

### Reason

Three documents specify page families and none of the three agree:

| List | Has | Lacks |
| ---- | --- | ----- |
| `02` §26 | `resource-hub`, `legal` | `contact`, `conversion`, all hub types except resource-hub |
| `19` §28 | `contact`, `conversion` | `resource-hub`, `legal` |
| `03` §52 | Fullest taxonomy incl. Service/Markets/Audience/Commercial/Topic hubs | Expressed as prose labels, not code values |

All three are explicitly provisional. `02` §26 says "Potential page family types include" and "This list may evolve based on the final information architecture." `03` §52 says "Final types should be represented consistently in the page build list and code."

Doc `04`'s approved launch build requires families that `02` §26 does not contain: `/services/`, `/locations/`, `/for/`, `/commercial/`, and `/resources/` are all approved launch pages with no corresponding hub family in that list.

`19` §28's `contact` and `conversion` are not structural families. `/contact/` is structurally a `core` page; "conversion" describes intent, not architecture. Merging them into the structural union would make template selection ambiguous.

### Previous State

Three divergent provisional lists. No single value set usable for template selection.

### New State

`PageType` = `02` §26 base + hub families from `03` §52 (kebab-cased), since `02` §26 defers to the information architecture and `03` is that document.

```text
home · core · legal
service-hub · service
markets-hub · market · location · service-location
audience-hub · audience · audience-location
commercial-hub · commercial · commercial-location
comparison · alternative
resource-hub · topic-hub · resource
```

`AnalyticsPageType` retains `19` §28's list unchanged. `analyticsPageType()` maps structural → analytics.

### Implementation Impact

* Template selection and internal-linking modules branch on `PageType`.
* Analytics attribution uses `AnalyticsPageType`.
* `19` §28 defines no attribution value for `resource-hub` or `legal`; those currently collapse to `resource` and `core` respectively. This is a documented gap, not a silent invention.

### Follow-Up

Confirm the reconciliation before templates are built on it (build sequence step 18). If approved, update `02` §26 and `19` §28 to reference this entry rather than carrying divergent lists.

---

## DEC-067 — Derived Location Identifier Convention

**Date:** 2026-08-15
**Status:** PROPOSED
**Impact:** Medium
**Decision Owner:** Project
**Affected Documents:**

* `07-master-location-registry.md` §14, §59
* `09-audience-commercial-matrix.md` §122, §123
* `04-master-page-build-list.md` §44

### Decision

Location identifiers are **derived deterministically** from `(market, slug)` by a single function, `locationId()` in `types/location.ts`. They are not read from the location registry.

### Reason

`data/locations/master-location-registry.json` contains **no id field** across all 579 records. Natural identity is the `(market, slug)` pair.

However `04` §44 declares `locationId?: string` on the page record, and `09` §122-123 use ids as relationship keys:

```text
aud-home-buyers::loc-sd-carlsbad
comseg-restaurants::loc-sd-mission-valley
```

`07` §59 describes these ids as recommended rather than present. Without one derivation point, ids would be reconstructed ad hoc at each call site and drift — breaking relationship keys that are supposed to be stable.

### Previous State

Ids referenced by three documents; absent from the data; no derivation rule.

### New State

```text
loc-{marketAbbreviation}-{slug, with "/" replaced by "-"}

st-louis-mo → stl
san-diego-ca → sd
las-vegas-nv → lv
```

Market hub records carry `slug: ""`; these resolve to `loc-{abbr}-market` so every one of the 579 records is addressable.

Verified against both documented examples: the function produces exactly `loc-sd-carlsbad` and `loc-sd-mission-valley`.

**Separator normalisation — added during step 11 implementation.**

70 of the 579 slugs are compound. St. Louis City neighbourhoods store the full path within the market, so the slug is `st-louis-city/academy`, not `academy`. Without normalisation the derivation yields `loc-stl-st-louis-city-academy` → `loc-stl-st-louis-city/academy`, an identifier containing a path separator.

That is fragile in the three places these ids are actually used:

* the `::` relationship keys of 09 §122-123
* analytics dimensions, which 19 §39 requires be stable identifiers
* any URL, filename, or query context an id later passes through

Both forms were checked against the complete 579-record dataset and both are collision-free, so this is a robustness choice, not a correctness fix.

### Implementation Impact

* The abbreviation map is part of the identifier contract. Changing it invalidates every stored relationship key.
* Separator normalisation is likewise part of the contract, and it introduces a collision risk the raw form did not have: a literal slug `st-louis-city-academy` would now collide with `st-louis-city/academy`. The location registry loader asserts derived-id uniqueness across all 579 records at module load and fails the build if that ever holds — verified by deliberately constructing the collision.
* `LocationId` is a branded type, so a bare string cannot be passed where an id is expected.

### Follow-Up

If ids are ever added to the location registry, they must match this derivation exactly, and the registry becomes authoritative. Until then, derive — never hand-write.

---

## DEC-068 — `AudienceMatrixStatus` Retains `commercial_fit_only`

**Date:** 2026-08-15
**Status:** PROPOSED
**Impact:** Low
**Decision Owner:** Project
**Affected Documents:**

* `09-audience-commercial-matrix.md` §10, §57, §68, §69, §70

### Decision

`AudienceMatrixStatus` includes `commercial_fit_only`, following `09` §10 rather than `09` §57.

### Reason

Doc `09` contradicts itself:

* §10's status table lists **eight** statuses, including `commercial_fit_only` — "Better handled through commercial architecture."
* §57's `AudienceMatrixStatus` type lists **seven** and omits it.

The value encodes a routing decision the architecture actively depends on. §68-70's cannibalization rules turn on exactly this distinction, directing property-manager and restaurant geography into `/commercial/` instead of `/for/`. Omitting the status would leave those documented cases unrepresentable.

### Previous State

Two conflicting status lists in the same document.

### New State

Eight statuses per §10. §57's seven-value type is treated as an incomplete restatement.

### Implementation Impact

Low. No audience + location pages are approved at launch (`09` §48, §100), so nothing publishes on this today. It matters when the audience matrix is populated in Phase 2.

### Follow-Up

Correct `09` §57 to match §10, or state why the type intentionally narrows the table.

---

## DEC-069 — Composition and Anti-Template Visual Standard

**Date:** 2026-08-15
**Status:** APPROVED
**Impact:** High
**Decision Owner:** Project
**Affected Documents:**

* `18-design-system.md` §4, §5.6, §31, §50, §108, §155, Appendix A, Appendix B
* `17-conversion-architecture.md` §288 (CTA label conformance)
* `02-nextjs-technical-architecture.md` §103 steps 17-19

### Decision

The design system adopts a composition layer governing **how sections are shaped**, not only how components are styled, plus a rendered-page review standard.

Added to `18-design-system.md`:

* §4 — four governing pillars: Documentary, Editorial, Technical, Conversional
* §5.6 — Composition Over Componentry: cards are not the default layout
* §31 — Condition Library Module
* §50 — card guardrail
* §108 — within-page density and rhythm
* §155 — five additional failure conditions
* Appendix A — Composition Pattern Vocabulary, giving §107's section names actual shapes, plus a sparse/standard/dense density system
* Appendix B — Human-Designed / Anti-AI Visual Standard, run against the rendered page after build

### Reason

The document previously specified components, tokens, imagery, and page-family section *lists*, but never the **shape** a section should take. That gap defaults every list-like section to a card grid, which §5.6 identifies as the single strongest visual signal of a templated or AI-generated site.

The gap was not theoretical. `04-master-page-build-list.md` §5 approves 10 core and high-intent service pages. Ten items in the three-column grid implied by §99 renders as 3+3+3+1 — precisely the orphaned row §5.6 now prohibits. Without Appendix A the services hub had no specified alternative.

Appendix B is deliberately a **post-build judgement review, not a pre-build automated gate**, because the checks are design judgements rather than binary conditions.

### Previous State

Component-level and token-level guidance only. Section shape unspecified. No rendered-page design review. No stated position on card grids as a default.

### New State

Every section is assigned a deliberate pattern and one of three densities. Cards are one pattern among many. Appendix B runs once per page against the rendered result.

Four internal inconsistencies introduced by the update were corrected in the same pass:

1. Appendix A pointed at §51 (*Service Cards*) for the card guardrail, which lives in §50 (*Card System*). Corrected to §50.
2. Appendix A attributed the phrase "no floating cards" to §5.6; the phrase is §25's ("dramatic floating cards"). Rewritten to cite both sections for their actual content.
3. Appendix A's "no cards, no icons, no gradient — see 5.6" cited one section for three rules. Icons are §27, gradients are Appendix B. Corrected.
4. §38, §39, and §155 used the CTA label "Schedule an Inspection", which is **not** among the approved conversion concepts in `17` §288. Since §155 and Appendix B now add a CTA-consistency check, the document would have enforced a non-approved string. All three aligned to "Schedule a Sewer Inspection".

### Implementation Impact

* Section components must accept a composition pattern and a density, not only content — this shapes build sequence steps 18 and 19.
* The services hub must use an index or mosaic rather than an even grid.
* Appendix B becomes a QA step after each page family is built.
* Fix 4 aligns example copy with `17` §288 but does **not** resolve PENDING-007. The global primary CTA wording remains open; if PENDING-007 selects different wording, §38, §39, §155, and Appendix B update together.
* Largely independent of PENDING-005, PENDING-006, and DEC-064 — composition and density guidance is palette- and typography-agnostic, so this layer is implementable before visual identity resolves.

### Follow-Up

* Resolve PENDING-007 before conversion components are built.
* `18` §107 names a section "Audience Cards" and §156 lists five card types among launch priorities. Both encode the card *shape* into the section *identity*, which is the defaulting Appendix A exists to prevent. Consider renaming to shape-neutral section names. Not corrected here — the naming predates this decision and changing it touches the launch priority list.

---

## DEC-070 — Verified Business Facts and St. Louis Content Foundation

**Date:** 2026-08-16
**Status:** APPROVED
**Impact:** High
**Decision Owner:** Project
**Affected Documents:**

* `01-business-brand-foundation.md` §21, §24, §35
* `14-content-specification.md` §38, §42, §43, §79
* `15-schema-entity-strategy.md` §11
* `20-migration-redirect-plan.md`

### Decision

The business facts published on thesewerpros.com are adopted as Confirmed Business Facts under 01 §24, and the St. Louis municipal research is adopted as the sourced foundation for all 13 launch-authorised St. Louis pages.

Adopted and now live:

| Fact | Value |
| ---- | ----- |
| Phone | (314) 821-1600 |
| Email | info@thesewerpros.com |
| Hours | Mon–Fri 7:30am–4:00pm; closed weekends |
| Founded | 2011 |
| Published service area | St. Louis, St. Charles, Jefferson counties, MO |
| Affiliations | St. Louis Association of Realtors; ASHI; Women's Council of Realtors; St. Charles Realtors |
| Lateral programmes | Licensed through most area programmes for submitting reports |

### Reason

01 §24 distinguishes a Confirmed Business Fact from an unverified claim. A fact the business publishes about itself on its own site is the former. This resolves the omissions recorded at build step 8, where `/contact/` shipped with no contact details because none was documented.

The St. Louis pages are differentiated by **jurisdiction**, not description, which is what makes them pass 14 §79's substitution test decisively. Municipal lateral programme terms are not transferable between cities: Ballwin caps reimbursement at $4,500 and excludes annual root clearing as maintenance; Florissant states no maximum but stops five feet from the house; St. Louis City covers only the public right-of-way; St. Charles reimburses 90% capped at $7,500 and sits outside MSD's territory entirely, on its own two-plant system.

### Previous State

No phone, email, hours, founding date, or affiliations anywhere in the project. All 13 St. Louis pages unwritten. 27 of 70 pages built.

### New State

40 of 70 pages built. Contact details live in header, footer, and `/contact/`. All 13 St. Louis pages published.

**Deliberately NOT adopted.** Three claims appear on the live site and are withheld pending substantiation:

* "#1 choice in St. Louis" — unsubstantiated superlative (18 §71, CLAUDE.md §71)
* "over 100 years of combined experience" — 01 §35 lists years in business among claims requiring documented evidence
* "over 100,000 camera inspections completed" — same; a figure in marketing copy is the claim, not evidence for it

Recorded in `WITHHELD_PENDING_SUBSTANTIATION` so build validation can scan rendered output for them. Verified absent from all 40 built pages.

**Still no street address.** None is published on the business's own site. 15 §11 confirms a GBP does not authorise inventing one, so `permitsLocalBusinessEntity()` still returns false for every market and no `LocalBusiness` entity exists.

**Housing-age statistics deliberately uncited.** The research supplied median-year and pre-1940 figures but flagged them as secondary republication of ACS data needing re-verification against data.census.gov. No percentage or median year appears in any published copy. Housing era is described qualitatively, and pipe material strictly as era correspondence — no source ties a material to a specific city.

### Implementation Impact

* `data/business/` now carries contact, hours, founding year, service area, and affiliations.
* Header and footer render the phone; `/contact/` and `/about/` are complete pages.
* Published hours (weekdays only) affirmatively **rule out** emergency, same-day, and 24/7 claims (01 §35).
* Chesterfield's three pages ship on housing-era differentiation with the lateral section kept general — its cap and exclusions remain unverified (PENDING-014).

### Follow-Up

* PENDING-013 — the published service area names no California or Nevada geography.
* PENDING-014 — Chesterfield lateral programme cap and exclusions.
* PENDING-015 — housing-age figures against data.census.gov.
* PENDING-016 — decide on the three withheld marketing claims.
* `20-migration-redirect-plan.md` — the legacy site's 18 URLs contain no location pages, so all 30 location and service+location routes are net-new, not migrations. No redirects are owed for them.

---

## PENDING-013 — Las Vegas Operating Status

**Status:** Open — narrowed to Las Vegas only (confirmed by Las Vegas research: no site, phone, hours, or founding date exists to source)
**Trigger:** Before Las Vegas content is written

**San Diego: RESOLVED.** The market operates a separate site, thesewerprossd.com, with its own phone — (858) 257-2888 — its own hours, and a founding date of 2015. San Diego is an operating market, not a planned one.

This also corrected a misreading. The Missouri-only service area on thesewerpros.com is not evidence that San Diego is inactive; it is the **St. Louis site's** service area. The two markets publish separately, which is precisely why 01 §20 forbids copying business facts between them — the phone numbers, hours, and founding dates genuinely differ.

**Las Vegas remains open**, and the evidence still points one way:

* Zero of 18 services confirmed in the service registry — all `requires_operational_confirmation`
* No GBP (01 §21)
* No separate site found, unlike St. Louis and San Diego
* Gated under DEC-063 pending PENDING-012

⚠ No Las Vegas page may state or imply that a service is performed there until PENDING-012 resolves (01 §20, §26).

---

## PENDING-014 — Chesterfield Lateral Programme Cap and Exclusions

**Status:** Open
**Trigger:** Before Chesterfield's lateral-programme content states coverage terms

Known and published: $28/yr on the tax bill since 1 January 2001 following voter approval; covers repairs of defective laterals for residential buildings of six units or fewer.

Unresolved after an exhausted search — the city's own programme pages, ecode360 (which indexes equivalent ordinances for Twin Oaks, Crystal Lake Park, Brentwood, and Woodson Terrace but has no locatable Chesterfield chapter), third-party aggregators, and the Wayback Machine.

Also unresolved: whether St. Louis County operates a countywide SLRP that overlaps or supplements Chesterfield's. Every county page returned 403.

**Why this matters more than it looks.** The research surfaced a third-party plumbing site describing the *St. Louis City* programme as reimbursing "up to 50%", which directly contradicts the city's own site. Third-party sources are demonstrably getting these programmes wrong, so inferring Chesterfield's terms from an adjacent source is not a safe shortcut.

Chesterfield's three pages ship without coverage detail, and the copy directs readers to Chesterfield Public Works. Resolution is a phone call.

---

## PENDING-015 — Housing-Age Figures Against Primary Census Data

**Status:** Open
**Trigger:** Before any housing statistic is published

Median year built and pre-1940 share for all five St. Louis locations came from a secondary republication of ACS 2019–2023. Primary access was unavailable (`api.census.gov` needs a key; `censusreporter.org` is robots-blocked).

No figure is currently published. St. Charles is additionally internally inconsistent across three sources (1983, 1989, 1985) and must not receive a median year until resolved.

Re-verify against data.census.gov table B25034/DP04.

---

## PENDING-016 — Three Withheld Marketing Claims

**Status:** Open
**Trigger:** Before republishing any of them

"#1 choice in St. Louis", "over 100 years of combined experience", and "over 100,000 camera inspections completed" appear on the live site and are withheld from the rebuild. Decide: republish with substantiation, soften, or omit.

The superlative is the higher-risk one — 18 §71 and CLAUDE.md §71 prohibit unsubstantiated superlatives, and it invites a challenge the business would have to answer.

---

## DEC-071 — San Diego Confirmed Operating; 8 San Diego Pages Published

**Date:** 2026-08-16
**Status:** APPROVED
**Impact:** High
**Decision Owner:** Project
**Affected Documents:**

* `01-business-brand-foundation.md` §20, §21, §24
* `02-nextjs-technical-architecture.md` §55
* `14-content-specification.md` §39, §42, §79
* `21-post-launch-seo-roadmap.md` §35-37

### Decision

San Diego is confirmed as an **operating** market. It publishes its own site — thesewerprossd.com — with phone (858) 257-2888, hours Monday to Friday 8:00am–4:00pm, and a 2015 founding year.

The market hub and all 7 location pages are published.

### Reason

This corrects a misreading recorded hours earlier in PENDING-013. The Missouri-only service area on thesewerpros.com is the **St. Louis site's** service area, not evidence that San Diego is dormant. The two markets publish separately.

That is exactly why 01 §20 forbids copying business facts between markets — here the phone numbers, hours, and founding years genuinely differ, and treating either as sitewide would be wrong rather than merely imprecise.

San Diego's regulatory landscape is also structurally different from St. Louis, and the pages say so. St. Louis has one regional authority and a near-universal $28/yr assistance model. San Diego County has neither: service comes from a mix of city departments and independent special districts, and assistance is confirmed in only two of seven jurisdictions. The City of San Diego's own guidance states there is **no reimbursement** for plumbing expenses.

### New State

48 of 70 pages built, up from 40. Per-market contact detail lives in the market registry per 02 §55.

**Differentiation is jurisdictional**, and none of it survives a city-name swap: San Marcos is served by Vallecitos Water District rather than the city; Chula Vista's provider is CVSan, a district distinct from city government, running a grant with a three-quote and permit process; Carlsbad has a $3,000 grant and a split provider boundary; Escondido's code §22-165 is unusually explicit; Mission Valley is a commercial district inside the City of San Diego.

**Calibrated down where the evidence is weaker.** The research noted this cluster is materially newer than St. Louis — even the oldest stock is around a third pre-1970 against 58% pre-1940 in St. Louis City. Aggressive "aging pipe" framing would be less honest here, so the copy leans on ground movement, bellies, and settlement instead.

**Oceanside states less than its siblings.** No published Oceanside lateral-responsibility statement was located, so the page gives the county-wide pattern and directs readers to Water Utilities rather than restating a neighbouring city's rule as though it were Oceanside's.

**No housing statistic is published** anywhere (PENDING-015), and no Mission Valley figure exists at any usable geography — two proxies conflict and describe non-comparable areas. Neither is published, and they are not averaged.

### Implementation Impact

* The header no longer renders a phone number. With two market numbers and a shared static layout, one number sitewide would put the St. Louis line on every San Diego page. The header links to `/contact/`, which lists both; the footer labels each by market; each market page carries its own in content. See PENDING-017.
* `/contact/` lists St. Louis and San Diego separately rather than merging them.
* Still no street address for any market, so no `LocalBusiness` entity exists.

### Follow-Up

* San Diego's 8 service + location pages remain unwritten.
* PENDING-014 equivalents for San Diego: CVSan's exact grant cap, whether Carlsbad's grant reaches Leucadia/Vallecitos-served properties, and Oceanside's responsibility statement.
* PENDING-017 — market-scoped header contact.

---

## PENDING-017 — Market-Scoped Header Contact

**Status:** Open
**Trigger:** If a market-aware layout is introduced

18 §42 places a phone number in the header. The business publishes two, and under `output: 'export'` a shared layout cannot vary by route without becoming a client component, with no runtime to detect a visitor's market.

Current resolution: the header links to `/contact/`; the footer labels both numbers by market; market pages carry their own in content. This is correct but costs one-tap calling from the header.

Options if revisited: a market-scoped route group with its own layout, or accepting the St. Louis number as the primary with San Diego pages overriding in content.

---

## DEC-072 — Business Owner Determinations on Open Content Questions

**Date:** 2026-08-16
**Status:** APPROVED
**Impact:** High
**Decision Owner:** Business owner
**Affected Documents:**

* `01-business-brand-foundation.md` §35
* `11-local-seo-gbp-strategy.md` §62
* `14-content-specification.md`
* `15-schema-entity-strategy.md` §9-13
* `18-design-system.md` §71

### Decision

The business owner resolved five questions raised across the three market research passes.

| Question | Determination |
| -------- | ------------- |
| PENDING-002 — street address | **No address exists.** Service is delivered at the customer's location: a Service-Area-Business model. License numbers are intentionally not listed. |
| PENDING-015 — housing-age figures | **Approved for use** on the research as compiled, retaining Census/ACS sourcing in citations. |
| PENDING-016 — three withheld claims | **Approved for republication**, including "#1 choice in St. Louis". |
| PENDING-014 — Chesterfield terms | Resolved by **cite-and-link**: link to the municipality's own programme page rather than assert an unverified cap. |
| PENDING-012 / 013 — Las Vegas | Market is **"currently launching."** Real and imminent — but this does NOT satisfy DEC-063's release criteria. |

### Reason

Four of the five are straightforward: the owner holds facts research cannot reach, and has supplied them.

The address determination is the most consequential and was previously mis-framed. PENDING-002 asked for "verified St. Louis local entity details" on the assumption an address existed and was simply unpublished. It does not exist. That converts an open question into a settled structural fact about the business model, and it reaches further than the contact page:

* `permitsLocalBusinessEntity()` correctly returns false for every market **permanently**, not pending verification. 15 §9-12 requires a verified physical location for a `LocalBusiness` entity, and there is none to verify.
* 11 §62's storefront-versus-SAB question is answered: SAB. That governs GBP eligibility and category selection in all three markets.
* 18 §135's prohibition on office cards and 18 §86-87's map-pin rules are now permanent design constraints rather than interim ones.

### The superlative, stated once and then accepted

"#1 choice in St. Louis" is an unsubstantiated superlative of exactly the kind 18 §71 and CLAUDE.md §71 prohibit without approved substantiation. Owner approval is approval; it is not third-party substantiation, and the claim remains challengeable on an authority platform.

That concern was raised when the claim was first withheld. The owner has decided, the decision is theirs to make, and it is recorded here so the basis is visible if the claim is ever questioned. The quantified claims — 100+ years combined experience, 100,000+ inspections — carry less risk, being statements of the business's own history rather than comparative ranking.

### Previous State

Five open PENDING entries. Marketing claims withheld from all built pages. No housing figure published. No address, treated as pending verification.

### New State

PENDING-002, 014, 015, 016 resolved. PENDING-012 and 013 remain open — "currently launching" is a status report, not the operational service confirmation DEC-063 requires.

⚠ **Las Vegas indexing is unchanged.** DEC-063's gate is not released by content readiness or by a launch being imminent. The five Las Vegas pages stay `launch_pending_validation` until PENDING-012 resolves on its own criteria. No Las Vegas business facts have been supplied, so no Las Vegas page may state hours, phone, or service area.

### Implementation Impact

Not yet applied to page content. The following remain outstanding:

* Add approved housing-age figures with ACS citation across the St. Louis and San Diego location pages
* Apply the cite-and-link pattern — Chesterfield, Oceanside, CVSan, Carlsbad's southern boundary, St. Louis County SLRP, and the Las Vegas municipal sources
* Reinstate the three approved marketing claims where they fit naturally
* Record the SAB model where it clarifies why no address appears
* Write the 8 San Diego and remaining service+location pages
* Write the 5 gated Las Vegas pages

### Follow-Up

* PENDING-012 remains the sole gate on Las Vegas indexation.
* Las Vegas business facts — phone, hours, service area — must come from the owner. Nothing on the public web can verify them.
* `11-local-seo-gbp-strategy.md` §62 should record the SAB determination.

---

## DEC-073 — Reserved for Next Approved Decision

**Date:**
**Status:**
**Impact:**
**Decision Owner:**
**Affected Documents:**

### Decision

TBD

### Reason

TBD

### Previous State

TBD

### New State

TBD

### Implementation Impact

TBD

### Follow-Up

TBD

---

# 39. Pending Decision Register

Maintain unresolved material questions here until resolved.

| ID          | Decision Needed                         | Status   | Trigger                                |
| ----------- | --------------------------------------- | -------- | -------------------------------------- |
| PENDING-001 | Production canonical domain / host      | Open     | Before production configuration        |
| PENDING-002 | Verified St. Louis local entity details | RESOLVED | DEC-072 — no address exists; SAB model  |
| PENDING-003 | San Diego GBP eligibility               | Deferred | Operational eligibility                |
| PENDING-004 | Las Vegas GBP eligibility               | Deferred | Operational eligibility                |
| PENDING-005 | Final brand colors                      | Open     | Design implementation                  |
| PENDING-006 | Final typography                        | Open     | Design implementation                  |
| PENDING-007 | Global primary CTA wording              | Open     | Conversion implementation              |
| PENDING-008 | Final service form fields               | Open     | Form implementation                    |
| PENDING-009 | Call-tracking implementation            | Deferred | Analytics/CRO decision                 |
| PENDING-010 | Complete legacy redirect inventory      | Open     | Migration research                     |
| PENDING-011 | GPTBot training-access policy           | Open     | Before production robots.txt           |
| PENDING-012 | Las Vegas service availability          | Open     | Business operational confirmation      |
| PENDING-013 | San Diego / Las Vegas operating status  | Open     | Before those markets' content          |
| PENDING-014 | Chesterfield lateral programme terms    | RESOLVED | DEC-072 — cite-and-link to the city     |
| PENDING-015 | Housing-age figures vs primary Census   | RESOLVED | DEC-072 — approved with ACS citation    |
| PENDING-016 | Three withheld marketing claims         | RESOLVED | DEC-072 — approved for republication    |
| PENDING-017 | Market-scoped header contact            | Open     | If a market-aware layout is introduced |

## Open Proposals

| ID      | Proposal                              | Status   | Blocks                          |
| ------- | ------------------------------------- | -------- | ------------------------------- |
| DEC-064 | Interim ownership of visual identity  | PROPOSED | Visual implementation start     |
| DEC-066 | Canonical `PageType` taxonomy         | PROPOSED | Page templates (step 18)        |
| DEC-067 | Derived location identifier convention| PROPOSED | Registry loaders (step 11)      |
| DEC-068 | `AudienceMatrixStatus` value set      | PROPOSED | Phase 2 audience matrix         |

A `PROPOSED` decision is not authoritative. Implementation must not proceed as though it were approved.

---

# 40. Decision Log Maintenance Rule

This document should remain:

* concise enough to review
* detailed enough to explain material decisions
* chronological
* append-only for historical decisions
* synchronized with affected source-of-truth documents

Do not allow it to become a general project diary.

---

# 41. Final Governance Principle

The Sewer Pros project contains:

* scalable architecture
* large research datasets
* multiple markets
* multiple page families
* AI-assisted content and development
* substantial future expansion potential

That makes explicit decision governance essential.

The governing standard is:

> **Important project decisions must exist as documented project truth rather than memory, AI inference, or undocumented code. When a material decision changes, preserve the history, record the new decision, update every affected source-of-truth document, and ensure implementation follows the latest approved state.**
