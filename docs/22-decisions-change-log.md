# The Sewer Pros — Decisions & Change Log

**Document:** `22-decisions-change-log.md`  
**Project:** The Sewer Pros Website Rebuild  
**Repository:** `the-sewer-pros-site`  
**Status:** Active Strategic Decision Record  
**Last Updated:** September 3, 2026

---

# 1. Purpose

This document records **material strategic decisions** that affect The Sewer Pros website, business representation, technical architecture, market strategy, service strategy, or other high-impact project foundations.

It exists to answer:

- What major decisions have been made?
- When were they made?
- Why were they made?
- What previous direction did they replace?
- Which project documents or systems are affected?
- Which decisions remain unresolved?

This document is **not intended to track normal implementation activity**.

Routine website development belongs in:

- Git history
- pull requests
- issue tracking where used
- page inventory/status data
- normal repository changes

The decision log should remain concise enough that it is useful.

---

# 2. Core Operating Principle

Use the decision log for:

> **Material changes to business truth, strategic direction, major architecture, or irreversible production behavior.**

Do not use it for:

> **Every page, component, copy change, internal link, metadata update, design refinement, or routine SEO improvement.**

The desired model is:

```text
Routine Implementation
→ Git History / Page Registry

Material Strategic Decision
→ Decision Log
```

---

# 3. What Requires a Decision Entry

A decision should generally be logged when it materially changes one or more of the following.

## Business Capabilities

Examples:

* The Sewer Pros begins offering sewer repair.
* Sewer replacement becomes an approved service.
* A major service is permanently removed.
* A significant new service line is introduced.

## Primary Markets

Examples:

* adding Phoenix as a new primary market
* leaving the San Diego market
* materially changing service territory

## Physical Business Presence

Examples:

* opening a Las Vegas branch
* establishing a San Diego office
* approving a new public business address
* creating a new market-level Google Business Profile

## Core Positioning

Examples:

* changing from independent diagnostics to repair contracting
* materially changing the primary target audience
* repositioning the company around a different service category

## Production Domain

Examples:

* changing the canonical domain
* changing from apex to `www` after launch
* domain migration

## Major Technical Architecture

Examples:

* replacing Next.js
* replacing Cloudflare Pages
* changing the fundamental rendering/deployment model
* major CMS/platform adoption that affects site architecture

## Major URL Architecture

Examples:

* restructuring a large portion of production routes
* changing market URL hierarchy after indexing
* major post-launch taxonomy migration

## Major Indexation Strategy

Examples:

* intentionally releasing thousands of programmatically generated pages into the index
* materially changing the controlled-indexation model of the project

## Material Compliance or Legal Representation

Examples:

* new licensing representation
* regulatory positioning that affects public claims
* substantial policy/compliance architecture changes

---

# 4. What Does Not Normally Require a Decision Entry

The following are generally routine implementation changes and do **not** require an entry here.

Examples include:

* creating a new page
* adding a candidate page
* adding a supported location page
* drafting service + location content
* changing page layout
* adding an FAQ
* adding internal links
* adjusting navigation labels
* changing CTA placement
* refining CTA wording
* adding metadata
* updating title tags
* revising meta descriptions
* improving schema implementation
* adding structured data
* changing responsive behavior
* accessibility fixes
* performance improvements
* refactoring components
* adding reusable components
* adding verified geographic data
* adding a content resource
* creating a comparison page
* adding a new content cluster
* revising content for quality
* SEO optimization
* changing card counts
* swapping imagery
* adapting reference templates
* adding analytics event context
* minor form-field changes
* correcting technical errors
* updating sitemap logic
* routine redirect additions
* routine service/location matrix refinements

These changes should normally be documented by the codebase, project data, page registry, and Git history.

---

# 5. Decision vs. Recommendation

A recommendation is not automatically a project decision.

Claude, Claude Code, strategists, or researchers may recommend:

* a new page family
* a new location
* a new content cluster
* a different CTA
* a technical improvement
* a new commercial segment
* a new SEO opportunity

without creating a decision record.

Use:

```text
Recommendation
→ Evaluate
→ Implement if routine
```

For material strategic changes:

```text
Recommendation
→ Business / Project Approval
→ Decision Entry
→ Implementation
```

---

# 6. Decision Statuses

Use the following statuses.

## `APPROVED`

The decision is active and should guide the project.

## `SUPERSEDED`

A newer approved decision has replaced this decision.

The original record should remain for historical context.

## `REVERSED`

The project intentionally returned away from a previous direction.

## `DEFERRED`

The decision is intentionally unresolved or postponed.

## `PROPOSED`

A material change is under consideration but has not been approved.

Proposed decisions must not be treated as business truth.

## `REJECTED`

The proposed change was reviewed and intentionally declined.

---

# 7. Impact Levels

Use impact only when useful.

## `Critical`

Affects fundamental business or production architecture.

Examples:

* canonical domain
* primary service positioning
* major market strategy
* hosting architecture

## `High`

Affects major search, conversion, local entity, or page architecture.

## `Medium`

Meaningful strategic change with limited system-wide impact.

## `Low`

Use sparingly.

If a change is truly low impact, it may not need to be in this document.

---

# 8. Decision Record Format

Use the following structure for new material decisions.

```markdown
## DEC-### — Decision Name

**Date:** YYYY-MM-DD  
**Status:** APPROVED  
**Impact:** High  
**Owner:** Project / Business  
**Affected Documents:** List relevant docs

### Decision

State the approved decision clearly.

### Reason

Explain why the decision was made.

### Previous State

Describe the previous strategic state when relevant.

### New State

Describe the new approved state.

### Implementation Impact

Identify major implementation consequences.

### Follow-Up

List only material unresolved follow-up actions.
```

Do not create lengthy records for simple implementation choices.

---

# 9. Historical Integrity

This document should remain append-only for material decisions.

Do not rewrite historical decisions to make them appear as though the current strategy always existed.

When a decision changes:

```text
Existing Decision
→ Mark SUPERSEDED or REVERSED
→ Create New Decision
```

This preserves useful project history.

---

# 10. Current Strategic Decision Register

The following decisions form the current strategic foundation.

---

## DEC-001 — Repository Name

**Date:** 2026-08-14
**Status:** APPROVED
**Impact:** Medium

### Decision

The project repository is:

`the-sewer-pros-site`

---

## DEC-002 — Claude Project

**Date:** 2026-08-14
**Status:** APPROVED
**Impact:** Medium

### Decision

Claude Project is used as a research, strategy, content, planning, and project-intelligence environment.

---

## DEC-003 — Site OS Master Relationship

**Date:** 2026-08-14
**Status:** APPROVED
**Impact:** High

### Decision

Site OS Master remains the reusable methodology layer.

The Sewer Pros repository contains project-specific business truth, architecture, content, data, and implementation.

Site OS should enable the project rather than operate as an unnecessary approval system.

---

## DEC-004 — Next.js App Router

**Date:** 2026-08-14
**Status:** APPROVED
**Impact:** High

### Decision

The site uses Next.js App Router.

---

## DEC-005 — TypeScript

**Date:** 2026-08-14
**Status:** APPROVED
**Impact:** Medium

### Decision

The project uses TypeScript.

---

## DEC-006 — Tailwind CSS

**Date:** 2026-08-14
**Status:** APPROVED
**Impact:** Medium

### Decision

Tailwind CSS is used for the primary styling system.

---

## DEC-007 — VS Code

**Date:** 2026-08-14
**Status:** APPROVED
**Impact:** Low

### Decision

VS Code is the primary local development environment.

---

## DEC-008 — GitHub

**Date:** 2026-08-14
**Status:** APPROVED
**Impact:** High

### Decision

GitHub is the project source-control repository.

Normal implementation history should be tracked through Git rather than duplicated in this decision log.

---

## DEC-009 — Cloudflare Pages

**Date:** 2026-08-14
**Status:** APPROVED
**Impact:** High

### Decision

Cloudflare Pages is the approved hosting/deployment target.

---

## DEC-010 — Single-Domain Multi-Market Architecture

**Date:** 2026-08-14
**Status:** APPROVED
**Impact:** Critical

### Decision

The Sewer Pros uses one primary website/domain to support multiple markets.

Separate city microsites are not the default architecture.

---

## DEC-011 — Initial Primary Markets

**Date:** 2026-08-14
**Status:** APPROVED
**Impact:** Critical

### Decision

The initial primary markets are:

* St. Louis, Missouri
* San Diego, California
* Las Vegas, Nevada

---

## DEC-012 — Core Business Positioning

**Date:** 2026-08-14
**Status:** APPROVED
**Impact:** Critical

### Decision

The Sewer Pros is positioned primarily around:

* sewer inspection
* sewer camera inspection
* sewer diagnostics
* sewer cleaning
* hydro jetting
* sewer line locating
* drain cleaning
* pre-purchase sewer inspections
* commercial sewer/drain services

The primary strategic differentiation is independent inspection and cleaning without repair-driven upselling.

---

## DEC-013 — Sewer Repair and Replacement Not Approved Services

**Date:** 2026-08-14
**Status:** APPROVED
**Impact:** Critical

### Decision

The Sewer Pros should not be publicly represented as providing sewer repair or replacement unless a later approved business decision changes this.

Educational content may discuss repair/replacement without presenting those capabilities as offered services.

---

## DEC-014 — Scalable Page Architecture

**Date:** 2026-08-14
**Status:** APPROVED
**Impact:** High

### Decision

The website architecture should support scalable:

* service pages
* location pages
* service + location pages
* audience pages
* audience + service pages
* commercial pages
* comparison pages
* alternatives
* resources

Scalability should be achieved through reusable structured architecture.

---

## DEC-015 — Page Registry Is Not a Pre-Build Permission Gate

**Date:** 2026-09-03
**Status:** APPROVED
**Impact:** Critical
**Supersedes:** Previous interpretation of the Master Page Build List as strict pre-build authorization

### Decision

`04-master-page-build-list.md` functions as the evolving page inventory, lifecycle, and indexation registry.

Claude and Claude Code may research, draft, generate, prototype, and build logical pages without prior manual registration.

### Reason

The previous permission-gate model created unnecessary friction and prevented normal implementation work.

### New State

The primary SEO gate is **intentional indexation**, not page creation.

---

## DEC-016 — Geographic Dataset Is an Active Build Asset

**Date:** 2026-09-03
**Status:** APPROVED
**Impact:** High

### Decision

The approximately 579 normalized geographic records may be actively used for:

* research
* candidate generation
* routing
* page generation
* internal relationships
* expansion planning

Their existence does not automatically imply physical business presence.

---

## DEC-017 — Canonical Service Dataset

**Date:** 2026-08-14
**Status:** APPROVED
**Impact:** High

### Decision

The project currently uses approximately 18 canonical service records as the core service taxonomy.

---

## DEC-018 — Service × Location Matrix Can Drive Generation

**Date:** 2026-09-03
**Status:** APPROVED
**Impact:** Critical
**Supersedes:** Previous restrictive interpretation of the 10,422 relationships

### Decision

The approximately 10,422 service × location relationships may be used for:

* research
* page generation
* route planning
* draft generation
* metadata generation
* content planning
* internal relationship modeling
* candidate inventory
* noindex production builds
* publishing cohorts

### Guardrail

Matrix existence does not automatically authorize mass indexation.

---

## DEC-019 — Geographic Expansion Can Proceed Through Working Data

**Date:** 2026-09-03
**Status:** APPROVED
**Impact:** High

### Decision

Verified geographic opportunities may be added to project working data without requiring a new strategic decision for each location.

Human approval is not required simply to add legitimate geographic records or page candidates.

---

## DEC-020 — St. Louis Existing GBP

**Date:** 2026-08-14
**Status:** APPROVED
**Impact:** High

### Decision

St. Louis has an existing Google Business Profile and represents the strongest current local-entity market.

Exact profile details should remain based on verified business information.

---

## DEC-021 — San Diego Organic-First Local Strategy

**Date:** 2026-08-14
**Status:** APPROVED
**Impact:** High

### Decision

San Diego is currently treated as a service market without a verified GBP.

Do not fabricate a San Diego office or local business entity.

---

## DEC-022 — Las Vegas Organic-First Local Strategy

**Date:** 2026-08-14
**Status:** APPROVED
**Impact:** High

### Decision

Las Vegas is currently treated as a service market without a verified GBP.

Do not fabricate a Las Vegas office or local business entity.

---

## DEC-023 — No Fake Local Presence

**Date:** 2026-08-14
**Status:** APPROVED
**Impact:** Critical

### Decision

The site must not fabricate:

* offices
* branches
* physical addresses
* GBP entities
* local phone numbers
* maps implying offices

to manufacture local SEO signals.

---

## DEC-024 — One Primary Organization Entity

**Date:** 2026-08-14
**Status:** APPROVED
**Impact:** High

### Decision

Structured data should maintain one coherent primary The Sewer Pros organization entity.

---

## DEC-025 — LocalBusiness Requires Real Verified Presence

**Date:** 2026-08-14
**Status:** APPROVED
**Impact:** High

### Decision

`LocalBusiness` should only represent a legitimate verified business location.

Market/service pages should not automatically become LocalBusiness entities.

---

## DEC-026 — Approved Services Use Service Entity Modeling

**Date:** 2026-08-14
**Status:** APPROVED
**Impact:** Medium

### Decision

Approved services may be represented using appropriate `Service` structured data and relationships to the primary organization.

---

## DEC-027 — FAQ Rich Results Are Not a Strategic Dependency

**Date:** 2026-08-14
**Status:** APPROVED
**Impact:** Medium

### Decision

FAQ content should be created because it helps users, search understanding, AEO, and AI retrieval.

The project should not depend on FAQ rich-result visibility.

---

## DEC-028 — No Self-Serving Review-Star Strategy

**Date:** 2026-08-14
**Status:** APPROVED
**Impact:** Medium

### Decision

The project should not depend on self-serving aggregate rating/review markup for organization/local business rich results.

---

## DEC-029 — Real Estate Is a Priority Audience Cluster

**Date:** 2026-08-14
**Status:** APPROVED
**Impact:** High

### Decision

Home buyers and real-estate-related sewer inspections are a major content and conversion opportunity.

---

## DEC-030 — Independent Second-Opinion Strategy

**Date:** 2026-08-14
**Status:** APPROVED
**Impact:** High

### Decision

The website may target sewer repair/replacement second-opinion intent through independent inspection and decision-support content without presenting repair as an offered service.

---

## DEC-031 — Dedicated Commercial Architecture

**Date:** 2026-08-14
**Status:** APPROVED
**Impact:** High

### Decision

Commercial sewer/drain services should have a meaningful dedicated site architecture.

Commercial content should not be treated as residential copy with commercial terminology added.

---

## DEC-032 — Commercial Conversion Path

**Date:** 2026-08-14
**Status:** APPROVED
**Impact:** Medium

### Decision

Commercial visitors may use a distinct conversion path appropriate to commercial inquiries.

---

## DEC-033 — Pre-Purchase Inspection Conversion Path

**Date:** 2026-08-14
**Status:** APPROVED
**Impact:** Medium

### Decision

Pre-purchase sewer inspection may use a dedicated customer journey and form/CTA experience.

---

## DEC-034 — Evidence-Led Conversion

**Date:** 2026-08-14
**Status:** APPROVED
**Impact:** High

### Decision

The website should convert through:

* expertise
* evidence
* transparency
* specialization
* low friction

rather than fear or repair pressure.

---

## DEC-035 — No Unsupported Emergency / 24-7 Claims

**Date:** 2026-08-14
**Status:** APPROVED
**Impact:** High

### Decision

Do not advertise:

* 24/7
* emergency
* same-day
* guaranteed response time

unless verified and approved.

---

## DEC-036 — No Unsupported Pricing or Free Offers

**Date:** 2026-08-14
**Status:** APPROVED
**Impact:** High

### Decision

Do not invent:

* prices
* free estimates
* free inspections
* discounts
* guarantees

---

## DEC-037 — Internal Linking Uses Real Useful Destinations

**Date:** 2026-09-03
**Status:** APPROVED
**Impact:** Medium

### Decision

Internal linking should use useful live destinations.

Structured relationship data may identify potential links, but every matrix relationship does not need to be publicly exposed.

This is a usability/quality rule rather than a page-generation restriction.

---

## DEC-038 — Hub-and-Spoke Information Architecture

**Date:** 2026-08-14
**Status:** APPROVED
**Impact:** High

### Decision

The site should use logical hub-and-spoke relationships among:

* services
* markets
* audiences
* commercial content
* resources

---

## DEC-039 — Canonical Service Pages Remain Primary General Service Authority

**Date:** 2026-08-14
**Status:** APPROVED
**Impact:** High

### Decision

Each major canonical service should generally have a strongest general-purpose service authority page.

Localized and audience variants should satisfy more specific intent.

---

## DEC-040 — Market Hubs Remain Primary Geographic Nodes

**Date:** 2026-08-14
**Status:** APPROVED
**Impact:** High

### Decision

St. Louis, San Diego, and Las Vegas market hubs should act as primary geographic authority nodes.

---

## DEC-041 — Topic-Cluster Resource Strategy

**Date:** 2026-08-14
**Status:** APPROVED
**Impact:** High

### Decision

Resources should be organized into topic clusters supporting service, audience, commercial, problem, and market authority rather than functioning as a disconnected blog archive.

---

## DEC-042 — No Arbitrary Word Counts

**Date:** 2026-08-14
**Status:** APPROVED
**Impact:** Medium

### Decision

Pages should contain as much content as necessary to satisfy intent and quality.

There is no universal required word count.

---

## DEC-043 — No Arbitrary Blog Quota

**Date:** 2026-08-14
**Status:** APPROVED
**Impact:** Medium

### Decision

Content publishing should follow strategic opportunity and usefulness rather than an arbitrary number of posts per week/month.

---

## DEC-044 — Design Direction

**Date:** 2026-08-14
**Status:** APPROVED
**Impact:** High

### Decision

The visual identity should communicate technical sewer expertise, professional trust, and modern local-service quality.

---

## DEC-045 — Avoid Repair-Heavy Visual Positioning

**Date:** 2026-08-14
**Status:** APPROVED
**Impact:** Medium

### Decision

Primary visual identity should focus on:

* inspection
* camera diagnostics
* cleaning
* hydro jetting
* locating
* equipment
* evidence

rather than excavation/replacement contractor imagery.

---

## DEC-046 — Shared Multi-Market Design System

**Date:** 2026-08-14
**Status:** APPROVED
**Impact:** High

### Decision

All markets use one shared brand and design system.

Markets may use local imagery and content but should not become independent branded microsites.

---

## DEC-047 — Business-Outcome Analytics

**Date:** 2026-08-14
**Status:** APPROVED
**Impact:** High

### Decision

Analytics should prioritize qualified search visibility and business opportunities rather than vanity metrics or page count.

---

## DEC-048 — Core Measurement Stack

**Date:** 2026-08-14
**Status:** APPROVED
**Impact:** Medium

### Decision

Core measurement may include:

* GA4
* Google Search Console
* Bing Webmaster Tools
* Cloudflare analytics
* approved call/conversion tracking

---

## DEC-049 — Market / Service Analytics Context

**Date:** 2026-08-14
**Status:** APPROVED
**Impact:** Medium

### Decision

Where practical, analytics should preserve structured context such as:

* service
* market
* location
* audience
* page family

---

## DEC-050 — No PII in Analytics

**Date:** 2026-08-14
**Status:** APPROVED
**Impact:** Critical

### Decision

Do not send personally identifiable lead information to analytics platforms.

---

## DEC-051 — Preserve Migration Equity

**Date:** 2026-08-14
**Status:** APPROVED
**Impact:** High

### Decision

The rebuild should preserve useful existing:

* search equity
* backlinks
* URLs
* GBP destinations
* content value

where practical.

---

## DEC-052 — No Mass Homepage Redirects

**Date:** 2026-08-14
**Status:** APPROVED
**Impact:** High

### Decision

Removed legacy URLs should not automatically redirect to the homepage.

Redirect to the closest relevant destination or use appropriate removal behavior.

---

## DEC-053 — Direct Permanent Redirects

**Date:** 2026-08-14
**Status:** APPROVED
**Impact:** Medium

### Decision

Permanent migrations should use direct redirects to final destinations and avoid unnecessary chains.

---

## DEC-054 — Internal Links Should Use Final Canonical Destinations

**Date:** 2026-08-14
**Status:** APPROVED
**Impact:** Medium

### Decision

New internal links should point to canonical destinations rather than intentionally relying on redirects.

---

## DEC-055 — Controlled Post-Launch Expansion

**Date:** 2026-08-14
**Status:** APPROVED
**Impact:** High

### Decision

Post-launch SEO expansion should use performance, opportunity, and business value rather than automatically indexing the entire structured dataset.

---

## DEC-056 — Improve Existing Opportunities Alongside Expansion

**Date:** 2026-09-03
**Status:** APPROVED
**Impact:** Medium

### Decision

Existing pages showing search or conversion opportunity should be improved, while the project may simultaneously develop new candidates and page cohorts.

The project is not required to finish all optimization before creating new pages.

---

## DEC-057 — Cohort-Based Geographic Scaling

**Date:** 2026-08-14
**Status:** APPROVED
**Impact:** Medium

### Decision

Large geographic expansions may be organized into cohorts to improve:

* generation
* QA
* indexation control
* measurement

Cohorts are a recommended scaling method, not a requirement for every page.

---

## DEC-058 — St. Louis Strongest Existing Local Entity Market

**Date:** 2026-08-14
**Status:** APPROVED
**Impact:** High

### Decision

St. Louis currently has the strongest verified local search/entity foundation.

---

## DEC-059 — San Diego Organic-First Growth

**Date:** 2026-08-14
**Status:** APPROVED
**Impact:** High

### Decision

San Diego should initially grow through organic search and legitimate service-area content without fabricating physical business presence.

---

## DEC-060 — Las Vegas Organic-First Growth

**Date:** 2026-08-14
**Status:** APPROVED
**Impact:** High

### Decision

Las Vegas should initially grow through organic search and legitimate service-area content without fabricating physical business presence.

---

## DEC-061 — Build-First Project Governance

**Date:** 2026-09-03
**Status:** APPROVED
**Impact:** Critical

### Decision

Claude, Claude Code, and project contributors should default to making progress.

Project documents establish:

* business truth
* canonical data
* strategy
* architecture
* design direction
* quality standards

They should not be interpreted as requiring human approval for ordinary reversible implementation work.

### Previous State

Earlier project governance created multiple approval gates before normal page creation, content work, routing, and implementation.

### New State

Normal implementation may proceed using project context and professional judgment.

Human approval is reserved primarily for:

* material business capability changes
* unverifiable public business facts
* major production architecture changes
* destructive/irreversible actions
* material large-scale indexation decisions

---

## DEC-062 — Build, Publish, and Index Are Separate Lifecycle States

**Date:** 2026-09-03
**Status:** APPROVED
**Impact:** Critical

### Decision

A page being generated or built does not automatically mean it should be published or indexed.

The project recognizes distinct states such as:

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

### Strategic Effect

This separation allows the project to use automation and structured data aggressively while maintaining intentional SEO indexation control.

---

## DEC-063 — Project Documents Should Use Minimum Necessary Gates

**Date:** 2026-09-03
**Status:** APPROVED
**Impact:** High

### Decision

Repository documents should avoid creating procedural barriers unless they protect:

* business accuracy
* legal/compliance accuracy
* production safety
* security
* meaningful SEO quality

Routine implementation guidance should generally be treated as defaults and quality standards rather than permission requirements.

---

## DEC-064 — Claude Should Resolve Routine Unknowns Before Escalating

**Date:** 2026-09-03
**Status:** APPROVED
**Impact:** High

### Decision

When a routine implementation question is unclear, Claude should first:

1. inspect relevant project context
2. inspect existing project data/code
3. research when appropriate
4. make a reasonable reversible decision
5. continue

Human escalation should be reserved for material unresolved issues.

---

## DEC-065 — Six Page-Family Design References

**Date:** 2026-09-03
**Status:** APPROVED
**Impact:** High

### Decision

Six supplied design images are the primary structural references for the major page families:

| Page Family        | Reference                                |
| ------------------ | ---------------------------------------- |
| Homepage           | `homepage-performance.webp`              |
| Core Service       | `service-page-performance.webp`          |
| Location / Market  | `location-page-performance.webp`         |
| Service + Location | `location-service-page-performance.webp` |
| Audience           | `audience-page-performance.webp`         |
| Audience + Service | `audience-service-page.webp`             |

### Strategic Effect

The references should guide:

* section hierarchy
* visual rhythm
* content density
* hero construction
* card systems
* forms
* CTA placement
* process sections
* testimonials
* service-area treatment
* footer composition

They are visual templates, not pixel-perfect copies.

---

## DEC-066 — Reference Designs Do Not Transfer Example Business Facts

**Date:** 2026-09-03
**Status:** APPROVED
**Impact:** High

### Decision

The supplied design templates may be used for layout and composition but must not transfer example-company:

* branding
* logo
* phone numbers
* addresses
* testimonials
* licenses
* warranties
* pricing
* emergency claims
* same-day claims
* service claims
* employees
* business statistics

Verified The Sewer Pros content and branding must replace all example content.

---

# 11. Superseded Governance Interpretations

The following earlier interpretations should no longer be used.

## Old Interpretation

```text
Page not manually approved
→ Do not build
```

## Current Interpretation

```text
Logical Page Opportunity
→ May Research / Draft / Build

Intentional Indexation
→ Validate Quality and Business Relevance
```

---

## Old Interpretation

```text
10,422 Matrix Relationships
→ Opportunity Only
→ Do Not Generate
```

## Current Interpretation

```text
10,422 Matrix Relationships
→ Research / Generation / Routing / Modeling Asset

Indexation
→ Controlled Separately
```

---

## Old Interpretation

```text
Routine project change
→ Update Decision Log
```

## Current Interpretation

```text
Routine project change
→ Git / Page Registry / Working Data

Material Strategic Change
→ Decision Log
```

---

## Old Interpretation

```text
Unresolved implementation detail
→ Stop and ask
```

## Current Interpretation

```text
Unresolved implementation detail
→ Check context
→ Research if needed
→ Make reasonable reversible choice
→ Continue
```

---

# 12. Current Hard Business Guardrails

The following remain non-negotiable unless explicitly changed through a future material decision.

## Business Positioning

The Sewer Pros remains primarily positioned around independent:

* inspection
* diagnostics
* locating
* cleaning

## Repair / Replacement

Do not market sewer repair or replacement as an offered service unless explicitly approved.

## Local Legitimacy

Do not fabricate:

* physical offices
* addresses
* Google Business Profiles
* local branches
* local phone numbers

## Business Claims

Do not invent:

* pricing
* warranties
* guarantees
* certifications
* licenses
* response times
* service availability claims
* reviews
* statistics

## Security

Do not expose:

* secrets
* credentials
* private customer data

## Large-Scale Indexation

Do not intentionally mass-index low-value, materially duplicated, or misleading page inventory.

---

# 13. Pending Material Decisions

Only genuinely material unresolved items should remain here.

---

## PENDING-001 — Production Canonical Host

**Status:** DEFERRED

Determine final production canonical host format:

* apex domain
* `www`

Do not independently change an established production host after launch without evaluating migration consequences.

---

## PENDING-002 — Verified St. Louis Local Entity Details

**Status:** DEFERRED

Verify as needed:

* public address status
* phone
* hours
* GBP categories
* service areas
* website URL
* other public entity data

Do not invent missing details.

---

## PENDING-003 — San Diego GBP Eligibility

**Status:** DEFERRED

Evaluate GBP eligibility only if legitimate business presence/eligibility supports it.

No fake GBP should be created for SEO.

---

## PENDING-004 — Las Vegas GBP Eligibility

**Status:** DEFERRED

Evaluate GBP eligibility only if legitimate business presence/eligibility supports it.

---

## PENDING-005 — Final Brand Color System

**Status:** DEFERRED

Final production brand colors should be based on approved Sewer Pros branding.

The visual reference templates define layout and hierarchy, not the requirement to copy the example palette.

---

## PENDING-006 — Final Typography

**Status:** DEFERRED

Typography may be finalized during design implementation.

This pending item should not block page development.

---

## PENDING-007 — Global CTA Language

**Status:** DEFERRED

Possible CTA families include:

* Request an Inspection
* Request Service
* Schedule an Inspection

Page-specific CTA language may be used where appropriate.

This pending decision should not prevent pages from being built.

Do not imply unsupported real-time scheduling functionality.

---

## PENDING-008 — Final Form Field Configuration

**Status:** DEFERRED

Form fields may be refined during implementation.

This should not block form or page development.

---

## PENDING-009 — Call Tracking

**Status:** DEFERRED

Call tracking may be added if operationally useful.

It is not required for the initial build architecture.

---

## PENDING-010 — Complete Legacy Redirect Inventory

**Status:** DEFERRED / IN PROGRESS

Complete legacy URL mapping before final migration.

This does not prevent unrelated website development from continuing.

---

# 14. Pending Items Are Not Universal Build Blocks

A pending decision should block work only when that specific decision is necessary to safely complete the task.

Example:

```text
Final Typography Pending
```

does not mean:

```text
Do Not Build Pages
```

It means:

```text
Use current design-system typography/default implementation
→ Update when final choice is made
```

Similarly:

```text
Call Tracking Pending
```

does not mean forms cannot be built.

---

# 15. New Service Decision Process

A new **major offered service** should follow:

```text
Business Confirms Service
→ Create Material Decision Entry
→ Update Service Registry
→ Update Relevant Architecture / Content
→ Implement
```

Supporting topics, resources, FAQs, aliases, and educational concepts do not require this process.

---

# 16. New Primary Market Decision Process

A new primary market should generally follow:

```text
Business Confirms Market
→ Material Decision Entry
→ Location Registry Update
→ Market Architecture
→ Implementation
```

A newly discovered city/community inside an existing legitimate market does not normally require a material decision entry.

---

# 17. New Physical Branch Decision Process

A verified physical branch is a material entity change.

Use:

```text
Business Establishes / Confirms Branch
→ Verify Public Facts
→ Decision Entry
→ Local SEO / GBP / Schema Review
→ Website Implementation
```

Do not infer branch status from a service-area page.

---

# 18. Repair Capability Change Process

If The Sewer Pros later begins providing repair or replacement:

```text
Business Confirms Capability
→ New Decision Entry
→ Supersede DEC-013 as appropriate
→ Update Service Registry
→ Update Positioning
→ Update Content
→ Update Schema
→ Update Internal Linking
→ Update Conversion
→ Update Page Strategy
```

Do not make this change incrementally through isolated page copy.

---

# 19. Major URL Architecture Change Process

Before changing established production URL architecture at scale:

```text
Assess Existing Search Equity
→ Define New Architecture
→ Create Decision Entry
→ Build Redirect Map
→ Update Internal Links
→ Update Sitemap / Canonicals
→ Deploy
→ Monitor
```

Development-stage route refinement does not necessarily require a material decision entry.

---

# 20. Major Indexation Change Process

If the project plans to intentionally index a large generated cohort or significantly change indexation strategy:

```text
Evaluate Quality
→ Evaluate Search Intent
→ Verify Business Coverage
→ Define Cohort
→ QA
→ Index
→ Measure
```

A material decision entry is useful when the action represents a major change in the search footprint of the site.

Individual page indexation decisions do not require separate entries.

---

# 21. Decision Log and Git

These systems serve different purposes.

## Git

Records:

* code changes
* content changes
* file changes
* implementation history

## Decision Log

Records:

* why major strategy changed
* what material business direction was approved
* what foundational architecture changed

Do not duplicate all Git activity here.

---

# 22. Decision Log and Page Registry

`04-master-page-build-list.md` tracks:

* candidate pages
* drafts
* publication status
* indexation status
* retirement

This document tracks:

* major strategic decisions

Adding a service + location page normally belongs in the page registry, not the decision log.

---

# 23. Decision Log and Structured Registries

Routine data refinement belongs in the appropriate registry.

Examples:

```text
New verified neighborhood
→ Location Registry

New supported service-location relationship
→ Service-Location Matrix

New candidate page
→ Page Registry
```

Do not create a strategic decision entry merely because structured data changed.

---

# 24. Claude Operating Rule

Claude should not treat the absence of a decision entry as proof that routine work is prohibited.

The decision log answers:

> Has a material strategic/business decision been made?

It does not answer:

> Is Claude allowed to create this component, draft this page, research this location, or improve this content?

For normal reversible implementation:

> **Use project context and continue.**

---

# 25. Claude Code Operating Rule

Claude Code should:

* implement routine changes directly
* use existing project context
* make reasonable reversible technical decisions
* update working data when useful
* use Git to capture normal changes

Claude Code should not automatically create decision-log entries for routine work.

If implementation reveals a genuinely material strategic change, flag it and create/update a decision entry when approved.

---

# 26. Decision Quality Standard

A decision entry should be useful months later.

It should explain:

* what changed
* why
* what it affects

Avoid entries such as:

```text
Changed hero spacing.
```

That belongs in Git.

Useful decision:

```text
Changed project governance from pre-build page approval to build-first / indexation-controlled architecture because the prior gates were blocking normal implementation.
```

That belongs here.

---

# 27. Reserve Future Decision Numbers

The next available decision ID after the current register is:

```text
DEC-067
```

Use sequential IDs for new material decisions.

Do not reuse old numbers.

---

# 28. Final Governing Principle

> **The Decisions & Change Log exists to preserve important strategic memory, not to govern every implementation action. Record material changes to business capabilities, primary markets, local entity status, core positioning, major architecture, production domain, and other foundational decisions. Let Git, structured registries, the page inventory, and normal project files handle routine evolution. Claude and Claude Code should continue ordinary work without waiting for a decision-log entry unless the work requires a genuine material business or production decision.**
