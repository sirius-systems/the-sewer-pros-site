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
**Status:** SUPERSEDED by DEC-096
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

⚠ **The Hours row is SUPERSEDED by DEC-083 (2026-08-31): Mon–Fri 8:00am–4:00pm.** The 7:30am value above is what thesewerpros.com/contact published when this entry was written and is retained as the historical record. The site may still show 7:30am; the owner's correction governs. Every other row stands.

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

## PENDING-018 — Lead Form Submission Endpoint

**Status:** OPEN — owner confirmed 2026-09-03 this will be wired prelaunch

The unified lead form is BUILT AND RENDERING on seven templates
(Audience, Commercial, Home, Location, Market, ServiceLocation,
Service) as of DEC-096-era work, but `handleSubmit` in
`components/sections/LeadFormSection.tsx` is a documented stub. No
submission endpoint exists anywhere in this repository: no `functions/`
directory, no form service in `.env.example`, and no API route is
possible under `output: 'export'`.

**Until this resolves, the form collects nothing.** A visitor who
completes it and presses the button is not contacting anyone.

Two deliberate consequences, both of which should stay until an
endpoint exists:

* it does NOT fire `trackFormSubmitted` — 19 §17 reserves the
  conversion event for a successful send, and firing it on a stub
  would report leads that were never received
* it shows NO confirmation message — "we will be in touch" would be a
  false statement of fact to a customer (CLAUDE.md §24)

**Launch gate.** The new site is not yet on the production domain
(`www.thesewerpros.com` still serves the legacy site), so no real lead
is being lost today. That stops being true at cutover. Do not publish
this form to the production domain unwired.

Resolution needs a chosen submission path (a Cloudflare Pages Function,
a third-party form endpoint, or equivalent), then the handler wired and
`trackFormSubmitted` called on success only.

---

## PENDING-019 — TCPA Consent Disclosure for the "Text" Contact Option

**Status:** OPEN — compliance gap knowingly carried forward at owner direction

The lead form's preferred-contact radio ships with "Text" selectable.
Offering it implies the business may text whoever picks it, which
normally requires a short consent disclosure near the submit button
under the TCPA.

`claude/form-fields-and-consent-decision.md` (2026-09-01) held that
"Text" should not ship selectable until that copy exists and is
approved. The owner directed it to ship regardless, so it did. This
entry records that as a known, accepted gap rather than an oversight.

A `TODO(legal):` marker sits on the radio group in
`components/sections/LeadFormSection.tsx`.

**No consent language has been drafted, and none should be invented.**
Consent wording is a legal claim, which CLAUDE.md §3 and §24 reserve to
the business. Resolution needs approved copy supplied, not written
here.

Relates to [PENDING-018] — both must close before the form is
launch-ready.

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

⚠ **Las Vegas indexing is unchanged.** DEC-063's gate is not released by content readiness or by a launch being imminent. The five Las Vegas pages stay `launch_pending_validation` until PENDING-012 resolves on its own criteria.

*Superseded in part:* this section originally stated that no Las Vegas business facts had been supplied. DEC-073 (2026-08-17) supplied phone, email, and hours; DEC-075 confirmed service availability. The indexation gate is unaffected — see DEC-075's Follow-Up.

### Implementation Impact

**Applied 2026-08-17.** All six items complete; verified on the built output.

* **Housing figures** — 40 ACS citations across 20 pages. St. Louis pages carry them where they sharpen a contrast (St. Louis City 58.4% pre-1940 against Chesterfield's 1.4%); San Diego and Las Vegas where they support the argument about what fails on newer lines. Two deliberate omissions stand: **St. Charles** is described as "mid-1980s" rather than given a median year, since sources disagree; **Mission Valley** gets no figure at all, because none exists at a usable geography.
* **Cite-and-link** — all 8 municipal targets live: Chesterfield, St. Louis County, Carlsbad, CVSan, Oceanside, City of Las Vegas, North Las Vegas, and Clark County's boundary map. 15 external references in total.
* **Marketing claims, market-scoped.** Permission was not the constraint — scope was. Two of the three are St. Louis site claims, so 01 §20 keeps them off other markets:

  | Claim | Appears on | Leaked to SD/LV |
  | ----- | ---------- | --------------- |
  | "#1 choice in St. Louis" | `/st-louis-mo/` only | No |
  | "over 100,000 camera inspections" | `/st-louis-mo/` only | No |
  | "over 100 years of combined experience" | `/about/` only (both sites publish it) | No |

* **SAB model** — `/contact/` now explains the absence of an address rather than leaving it unstated.
* **San Diego pages** — complete (16).
* **Las Vegas pages** — complete (5, gated).

### Follow-Up

* PENDING-012 remains the sole gate on Las Vegas indexation.
* ~~Las Vegas business facts must come from the owner~~ — **SUPERSEDED by DEC-073** (2026-08-17): phone, email, and hours supplied. Service area still outstanding.
* `11-local-seo-gbp-strategy.md` §62 should record the SAB determination.

---

## DEC-073 — Las Vegas Business Facts Supplied

**Date:** 2026-08-17
**Status:** APPROVED
**Impact:** Medium
**Decision Owner:** Business owner
**Affected Documents:**

* `01-business-brand-foundation.md` §20, §21, §35
* `02-nextjs-technical-architecture.md` §55

### Decision

The business owner supplied Las Vegas contact facts directly. No Las Vegas site or GBP exists to source them from.

| Fact | Value |
| ---- | ----- |
| Phone | (725) 292-4030 |
| Email | bookaninspection@thesewerpros.com |
| Hours | Monday to Friday, 8:00am–4:00pm; closed weekends |
| Street address | None — Service-Area-Business (DEC-072) |
| Licence number | Requested; not supplied. Not for publication (DEC-072) |

### Reason

Unlike St. Louis and San Diego, Las Vegas publishes nothing to verify against — research returned only unrelated third-party companies. Owner confirmation is the only available source, and under 01 §24 it carries the same standing as a verified live-site fact.

This entry exists because it was missing. Seven code sites cited DEC-073 while the change-log slot had been overwritten by DEC-074, leaving a dangling reference — a governance record that pointed at nothing.

### Previous State

Las Vegas had no contact facts. DEC-072 recorded that none had been supplied, and that text is now superseded on this point.

### New State

Per-market contact detail in `data/markets/markets.ts`. No founding year: 01 §20 forbids importing St. Louis's 2011 or San Diego's 2015, and Las Vegas has no operating history to state.

### Implementation Impact

The five Las Vegas pages carry real contact detail. They remain gated — see DEC-074 and DEC-075.

### Follow-Up

The Nevada licensing FACT remains unconfirmed. DEC-072 answered whether licence numbers are published (no, by design); it did not establish that Nevada licensing is satisfied. That is DEC-063 criterion 7, and it still blocks promotion.

---

## DEC-074 — Las Vegas Reported Operational; DEC-063 Gate Reviewed, NOT Released

**Date:** 2026-08-17
**Status:** APPROVED (status log) — the gate itself remains OPEN
**Impact:** High
**Decision Owner:** Business owner (status) / Project (gate)
**Affected Documents:**

* `22-decisions-change-log.md` DEC-063, PENDING-012
* `06-master-service-registry.md` §7, §9, §42
* `04-master-page-build-list.md` §43

### Decision

The business owner updated Las Vegas from "currently launching" to **operational** on 2026-08-17. Site copy is updated to match.

**The DEC-063 indexation gate is NOT released.** The five Las Vegas pages remain `launch_pending_validation`.

### Reason

DEC-063 §Release criteria lists eight conditions from `04` §43. Reviewed against current evidence:

| # | Criterion | Status |
| - | --------- | ------ |
| 1 | Active operational coverage | ✅ Owner-reported operational |
| 2 | **Services actually offered** | ❌ **Registry shows 0 of 18 confirmed** |
| 3 | Contact routing functional | ⚠️ Phone and email supplied; not tested |
| 4 | Service-request handling functional | ⚠️ No form exists (PENDING-008) |
| 5 | Geographic coverage confirmed | ⚠️ No Las Vegas service area supplied |
| 6 | Market-specific business facts verified | ⚠️ Phone, email, hours yes; licence outstanding |
| 7 | Licensing/business requirements satisfied | ❌ Licence number requested, not supplied |
| 8 | Public messaging accurate | ✅ Copy now reflects operational status |

Criterion 2 is the decisive one, and it is the same fact DEC-063's own Reason cites: "the service registry does not mark the market's individual service menu as operationally confirmed."

That is still literally true. `data/services/master-service-registry.json` marks all 17 applicable services `requires_operational_confirmation` for `las-vegas-nv`; the eighteenth is St. Louis-only. St. Louis stands at 14 of 18 and San Diego at 13.

**"The business operates in Las Vegas" and "these specific services are offered in Las Vegas" are different claims.** The owner has confirmed the first. The second is a per-service fact that only the service registry records, and 06 §9 makes that registry authoritative for it.

### Previous State

Las Vegas framed as "currently launching". Contact confirmed under DEC-073.

### New State

Copy reflects operational status without claiming a track record — 01 §20 keeps St. Louis's 2011 and San Diego's 2015 out of Las Vegas. No page enumerates a Las Vegas service menu, because none is confirmed.

Index status is unchanged: `launch_pending_validation`, excluded from sitemap, navigation, and every indexable link module.

### Implementation Impact

* `content/pages/las-vegas.tsx` — operational framing; the header records why that does not license a service menu
* `data/markets/markets.ts` — the same distinction noted where the gate is most likely to be misread

### Follow-Up — what would actually close PENDING-012

The shortest path is criterion 2, and it is a data change with a defined process:

1. Business confirms **which** of the 18 services are delivered in Las Vegas
2. Update `las-vegas-nv` status per service in `06-master-service-registry.md` and `data/services/master-service-registry.json`, following CLAUDE.md §60
3. `marketOffersAnyService('las-vegas-nv')` then returns true, and pages may state what is offered
4. Resolve criteria 3–7: test contact routing, define request handling (PENDING-008), supply the service area and licence number
5. Promote the five records in `04-master-page-build-list.md` and record a new DEC — per DEC-063, promotion requires both

⚠ Step 5 is the only step that changes index status, and it is a doc 04 change. Nothing in the implementation may promote a page on its own.

---

## DEC-075 — Las Vegas Service Availability Confirmed; Criterion 2 Closes

**Date:** 2026-08-17
**Status:** APPROVED
**Impact:** High
**Decision Owner:** Business owner (availability) / Project (registry)
**Affected Documents:**

* `06-master-service-registry.md` §7, and all 18 per-service Market Status tables
* `data/services/master-service-registry.json`
* `22-decisions-change-log.md` DEC-063, DEC-074, PENDING-012

### Decision

The business owner confirmed Las Vegas delivers "all services as San Diego, CA and St. Louis, MO."

Las Vegas now **mirrors San Diego** per service: 13 of 18 available.

> ⚠ **SUPERSEDED IN PART by DEC-076** (same day). The owner subsequently
> corrected the answer: all three markets deliver the full service set,
> and the 14/18 and 13/18 figures were registry gaps rather than service
> limits. Counts are now 18/18 for St. Louis and 17/18 for San Diego and
> Las Vegas, the eighteenth being St. Louis-specific. The reconciliation
> below about that service still stands — it is why 17/18 is not a gap.

### Reason

This is the decisive criterion 2 from DEC-063, which DEC-074 identified as the blocker. Doc 06 §7 anticipated exactly this route: Las Vegas "should remain under operational confirmation unless a later project decision explicitly updates its service availability."

**One reconciliation was required, and it changes the answer.** The instruction was to apply the union of St. Louis's 14 and San Diego's 13. That union is 14 — but San Diego's set is a strict SUBSET of St. Louis's, and the single difference is `svc-stl-sewer-lateral-inspection-reporting`.

That service documents **St. Louis municipal lateral programme reporting**. It is `market_specific_service` and St. Louis-only under 06 §23, and Las Vegas has no comparable programme — the City of Las Vegas offers a paid private warranty instead. Applying the literal union would have given Las Vegas a service that cannot exist there.

So the correct set is the union minus the St. Louis-only service: **13, identical to San Diego**.

### Previous State

All 17 applicable Las Vegas services `requires_operational_confirmation`; `marketOffersAnyService('las-vegas-nv')` returned false.

### New State

```text
St. Louis     14/18 available
San Diego     13/18 available
Las Vegas     13/18 available   (was 0/18)
```

`marketOffersAnyService('las-vegas-nv')` returns true.

The four commercial services carrying `capability_confirmed_commercial_packaging_requires_validation` remain unvalidated **in every market**, Las Vegas included — 06 §43 still forbids presenting that packaging as an established offering anywhere.

Doc 06 and the registry JSON were updated together, so no layer became the unofficial authority (CLAUDE.md §79, §96).

### Implementation Impact

* Las Vegas pages may now state which services are offered
* Doc 06's 18 Market Status tables updated; the §7 note records why

### ⚠ Follow-Up — the gate does NOT open

Criterion 2 closes. **Criterion 7 does not.**

The Nevada licensing fact is unconfirmed. DEC-072 settled that licence numbers are not published; that answers display, not whether the business is licensed in Nevada. An indexed page implying service delivery in a state where licensing is unverified is precisely the business-accuracy risk DEC-063 exists to prevent.

Criteria 3-6 also remain: contact routing untested, no request handling (PENDING-008), and no Las Vegas service area supplied.

The five pages stay `launch_pending_validation`. Promotion requires updating `04-master-page-build-list.md` and a further decision entry — per DEC-063, both.

---

## DEC-076 — Full Service Menu Confirmed in All Three Markets

**Date:** 2026-08-17
**Status:** APPROVED
**Impact:** High
**Decision Owner:** Business owner (availability) / Project (registry)
**Affected Documents:**

* `06-master-service-registry.md` §7, §23, §43, §60 Rule 11, and all 18 Market Status tables
* `data/services/master-service-registry.json`
* `22-decisions-change-log.md` DEC-063, DEC-074, DEC-075, PENDING-012

### Decision

The business owner confirmed all three markets deliver the full canonical service set. Two prior holds are released across every market:

* `requires_operational_confirmation` — no longer applies to any service anywhere
* `capability_validate_packaging` — the owner's confirmation IS the packaging validation 06 §43 required, so the four commercial services move to `confirmed`

**Supersedes DEC-075**, which set Las Vegas to mirror San Diego at 13 of 18 on the earlier answer.

### Reason

The earlier 14/18 and 13/18 figures were registry gaps rather than genuine service limits — services that had not been confirmed in the registry, not services the business declines to perform.

### ⚠ One instruction could not be applied literally

The direction was to set all three markets to 18 of 18. Seventeen services were set exactly that way. The eighteenth was not, and the reason is structural rather than cautious.

`svc-stl-sewer-lateral-inspection-reporting` documents **St. Louis municipal lateral programme reporting**. Four separate facts place it in one market:

| Field | Value |
| ----- | ----- |
| `record_type` | `market_specific_service` |
| `canonical_url` | `/st-louis-mo/sewer-lateral-inspection-reporting/` |
| `matrix_eligibility` | `selective_st_louis_only` |
| 06 §60 Rule 11 | "St. Louis sewer lateral reporting is St. Louis-specific." |

San Diego and Las Vegas have no St. Louis municipal lateral programmes. San Diego has the Carlsbad and CVSan grants; Las Vegas has a paid private warranty from a private provider. Marking this service `confirmed` in California and Nevada would assert the business performs St. Louis municipal reporting there — not a capability claim but a jurisdictional impossibility, and one that would put a page on `/st-louis-mo/{service}/` into two markets that cannot reach it.

It therefore remains `not_applicable` outside St. Louis, which is what that status exists to express.

**Every service the business actually offers is available in every market.** That is what 18/18 means in substance, and it is now true.

### Previous State

```text
St. Louis     14/18 available, 4 pending packaging validation
San Diego     13/18 available, 4 pending, 1 not applicable
Las Vegas     13/18 available, 4 pending, 1 not applicable   (DEC-075)
```

### New State

```text
St. Louis     18/18 available, 0 not applicable
San Diego     17/18 available, 1 not applicable
Las Vegas     17/18 available, 1 not applicable
```

`marketOffersAnyService()` returns true for all three. Doc 06's 18 Market Status tables and the registry JSON were updated together (CLAUDE.md §79, §96).

### Implementation Impact

* Commercial packaging may now be presented as an established offering — 06 §43's restriction is satisfied, not waived
* Checked whether any page understated its menu on the old counts: none did. No page ever cited a service count, so no content pass is needed.

### ⚠ Follow-Up — the gate still does not open

DEC-063 criterion 2 is closed. **Criterion 7 is not.**

Nevada licensing remains unconfirmed. DEC-072 settled that licence numbers are not published, which answers display and not whether the business is licensed in Nevada. Criteria 3-6 also remain: routing untested, no request handling (PENDING-008), no Las Vegas service area supplied.

The five Las Vegas pages stay `launch_pending_validation`. Verified after this change that they remain linked from no other page on the site.

---

## DEC-077 — Service Areas Corrected; Two Were Inferred, Not Published

**Date:** 2026-08-17
**Status:** APPROVED
**Impact:** Medium
**Decision Owner:** Project
**Affected Documents:**

* `01-business-brand-foundation.md` §20, §35
* `02-nextjs-technical-architecture.md` §55
* `data/markets/markets.ts`, `content/pages/core.tsx`

### Decision

Market service areas now record their provenance. Two values that had been written as business facts were inferences and have been replaced.

| Market | Value | Source |
| ------ | ----- | ------ |
| St. Louis | St. Louis, St. Charles, Jefferson counties, MO, and surrounding areas | **Published** on thesewerpros.com |
| San Diego | San Diego, San Marcos, Carlsbad, Escondido, Oceanside, Chula Vista, Mission Valley | **Derived** from doc 04's approved locations |
| Las Vegas | Las Vegas, Henderson, North Las Vegas, Summerlin | **Derived** from doc 04's approved locations |

### Reason

This corrects an error introduced during implementation, not a business decision.

`'San Diego County, CA'` and `'Las Vegas Valley, NV'` were written into the market registry as though published. Neither was. thesewerprossd.com publishes phone, hours, and a founding year but states no service area, and the Las Vegas research lists service area explicitly as **not supplied**. Both strings were plausible inference — which is precisely what 01 §35 and CLAUDE.md §23 prohibit, and plausibility is what makes that kind of value hard to notice.

One had reached rendered output: `/contact/` stated "Serving San Diego County, California."

The replacements are grounded in the approved page registry, which is a verifiable statement about where the business has approved pages. `serviceAreaSource` marks that distinction in the type so the two can never again be read as equivalent.

### Previous State

Three service areas, presented alike. One published, two inferred, with nothing recording which was which.

### New State

Provenance is explicit. Derived values describe coverage; they are not business claims and must not be presented as such.

### Implementation Impact

* `MarketOperatingDetail` gains `serviceAreaSource`
* `/contact/` lists the approved San Diego locations instead of asserting a county
* Market hub eyebrows ("San Diego County, California") are unchanged — those label the page's geography rather than claiming coverage

### Follow-Up

If the business publishes or states a service area for San Diego or Las Vegas, replace the derived value and set `serviceAreaSource: 'published'`.

---

## DEC-078 — Production Canonical Domain

**Date:** 2026-08-17
**Status:** APPROVED
**Impact:** High
**Decision Owner:** Business owner
**Affected Documents:**

* `02-nextjs-technical-architecture.md` §53, §88
* `05-url-routing-strategy.md` §7, §92, §93, §94
* `15-schema-entity-strategy.md` §5, §6
* `20-migration-redirect-plan.md`

### Decision

```text
https://www.thesewerpros.com
```

**www, not apex** — this settles 05 §93's governance question. HTTPS per 05 §94. Closes PENDING-001.

### Reason

Three build steps were blocked on this and could not be built provisionally. 15 §5 requires `@id` values stay stable once published, and under `output: 'export'` the origin is baked into canonicals, schema, and the sitemap as static text with no runtime correction — so a guess could not have been corrected later without breaking entity identity.

### Previous State

`siteOrigin()` threw when `NEXT_PUBLIC_SITE_URL` was unset, deliberately and with no development fallback. `metadataBase` was absent from the root layout. Steps 14, 15, and 21 were blocked.

### New State

Steps 14 and 21 are complete and verified on the built output:

| Check | Result |
| ----- | ------ |
| Pages with a canonical tag | 70 of 70 |
| Canonicals matching the registry pathname | 70 of 70 |
| Pages emitting `noindex` | 5 — exactly the gated Las Vegas set |
| Sitemap URLs | 65 |
| Sitemap entries overlapping the noindex set | 0 |

Step 15 (schema) remains; it is now unblocked.

### Implementation Impact

* **Metadata** derives robots from page status via `robotsForPage()`. No route passes robots, so no caller can mark a gated page indexable — the same registry fact drives canonical, noindex, sitemap, and navigation.
* **Sitemap** filters on indexable AND built. An approved page without content generates no route, and listing it would advertise a 404 (19 §83, §84).
* **No `lastModified`** — a build-time date would restamp every URL on every deploy.
* **`robots.txt`** allows `OAI-SearchBot` explicitly per DEC-062.
* **Meta descriptions are optional and omitted where unauthored.** A token-assembled description is worse than none; search engines write better from page content, and 15 §102-103's omission-over-placeholder logic applies. No page currently has one — see Follow-Up.

### ⚠ Two things this did NOT resolve

**The gated pages are not disallowed in `robots.txt`, deliberately.** A crawler that is disallowed never fetches the page and so never sees the `noindex`, while a URL discovered elsewhere can still be indexed without its content. The two directives work against each other; `noindex` expresses the intent, so the crawler must be allowed to read it.

**PENDING-011 (GPTBot) is still open**, and omission is not neutral. With no GPTBot rule, it falls under the general allow — the site currently permits training access by default. That is a live permission needing confirmation or reversal before launch, not a deferred question.

### Follow-Up

* Step 15 — schema, now unblocked
* Meta descriptions: 70 pages have none. 02 §36 wants one per page; they are omitted rather than generated, so this is a content task rather than a defect
* Search Console and Bing property setup against the confirmed domain (19 §37, §138-139)

---

## DEC-079 — Structured Data Entity Model Implemented

**Date:** 2026-08-16
**Status:** APPROVED
**Impact:** High
**Decision Owner:** Implementation, under DEC-072 and DEC-078
**Affected Documents:**

* `15-schema-entity-strategy.md` §4-13, §21-22, §26-27, §30, §37-40, §47-50,
  §57-58, §61, §63-65, §67, §69, §75-76, §80, §82-86, §102-103, §111, §115
* `02-nextjs-technical-architecture.md` §103 (build sequence step 15)

### Decision

The site emits one JSON-LD `@graph` per indexable page, built around a single
`Organization` entity. Three structural choices are recorded here because they
are permanent rather than provisional:

1. **No `LocalBusiness` node anywhere, and no `PostalAddress` type in the
   codebase.** Not pending verification — DEC-072 established that no physical
   address exists, because service happens at the customer's property. Coverage
   is expressed as `Service` + `areaServed` + `Place` (15 §13, §22).
2. **`areaServed` includes all three markets, including Las Vegas.** This is
   deliberately independent of DEC-063's indexation gate.
3. **Gated pages emit no structured data at all**, rather than reduced markup.

### Reason

Step 15 was the last of the three steps PENDING-001 blocked.

On (1): a `LocalBusiness` requires an address, and the temptation under an SAB
model is to supply a service-area centroid or the owner's home. Recording the
absence as *correct* rather than *missing* removes the pressure to fill it later.

On (2): `areaServed` states where the business works. DEC-063 governs which
**pages** may be indexed. These are different questions, and conflating them
would have misdescribed the business to satisfy a routing rule. A `Place` node
carries no URL, so listing Las Vegas exposes none of the five gated routes.

On (3): structured data describing a `noindex` page asks a crawler to interpret
an entity the same page tells it to ignore (15 §115).

### Previous State

No structured data existed. Steps 14 and 21 were complete; step 15 was the
remaining blocked item from DEC-078.

### New State

Verified against the built output:

| Check | Result |
| ----- | ------ |
| Pages emitting JSON-LD | 65 of 70 |
| Gated Las Vegas pages emitting JSON-LD | 0 |
| `Organization` nodes per graph | exactly 1 |
| `Service.provider` as an `@id` reference, not an inlined copy | yes |
| Breadcrumb divergence from the visible `<nav>` | 0 of 64 pages |
| `LocalBusiness` / `PostalAddress` / `AggregateRating` / `Product` / `Plumber` / `FAQPage` / `author` / `priceRange` | absent from all graphs |
| Placeholder tokens 15 §102 names (`null`, `undefined`, `TODO`, `TBD`, unresolved origin/phone/address) | absent from all graphs |
| `@id` references resolving within their own graph | 65 of 65 |

### One defect found and fixed during verification

The home page's `WebPage` node referenced a `BreadcrumbList` that was never
emitted. `breadcrumbNode()` correctly declines to emit a trail of one — a
breadcrumb from the home page to itself carries no information — but
`webPageNode()` attached the reference unconditionally. A consumer following
that `@id` would have resolved nothing.

This is worse than an inlined copy, because it asserts a relationship to an
entity that is not present. The reference is now attached only when the node
is emitted.

A **self-containment assertion now runs during static generation** and fails
`next build` if any `@id` reference in a graph is not defined by a node in
that same graph (CLAUDE.md §45). It was negative-tested by reintroducing the
exact defect: the build failed with the offending path and `@id` named. This
class of error cannot ship silently again.

### Implementation Impact

* **The breadcrumb is generated from the same `breadcrumbTrail()` the visible
  `<nav>` renders.** 15 §67's match-visible-content rule therefore holds by
  construction rather than by review. This also renders harmless the
  03 §53 versus 05 §118 hierarchy question flagged at step 19 — whichever
  hierarchy is correct, markup and page agree.
* **`knowsAbout` derives from the approved service registry** rather than a
  hand-written list, so it cannot drift from what the site offers and cannot
  become keyword stuffing (15 §68, §91). Nothing repair-related appears,
  because the registry contains nothing to derive it from (15 §65).
* **`FAQPage` is opt-in and currently emitted nowhere.** Most pages carry an
  FAQ section; emitting the type from all of them would have applied a policy
  across 70 pages by accident (15 §57-58).
* **Contact points are per market**, each scoped by `areaServed`, so no
  market's phone number is presented as another's (15 §76, 01 §20).
* **`foundingDate` is absent from the Organization.** St. Louis 2011 and
  San Diego 2015 are market facts (DEC-070, DEC-071); electing one as the
  company's would assert something no source states.

### ⚠ What remains absent, and why

`aggregateRating` is omitted because no verified review data exists — a
fabricated rating is the highest-risk structured-data claim a local business
can make (15 §61). `sameAs` is omitted because 01 §22 records a San Diego
social presence but supplies no URLs, and a profile must be verified as
official before it can be asserted as the entity's (15 §26-27). `logo` and
`image` await an approved asset.

Per 15 §103: a smaller accurate schema object is preferable to a larger
inaccurate one.

### Follow-Up

* Step 22 — redirects (PENDING-010)
* Steps 24-28 — validation, static export, preview deploy, QA, production
* Meta descriptions still unauthored across all 70 pages; where absent they
  are omitted from both metadata and schema `description`
* If review data is ever verified, `aggregateRating` requires a decision entry
  before it may appear — it must not be added as an implementation detail

---

## DEC-080 — Las Vegas Indexation Gate Released

**Date:** 2026-08-17
**Status:** APPROVED
**Impact:** High
**Decision Owner:** Project
**Affected Documents:**

* `04-master-page-build-list.md` §10.3, §14, §5 summary
* `22-decisions-change-log.md` DEC-063, DEC-072, DEC-074, DEC-075, DEC-076, PENDING-012
* `data/pages/approved-pages.ts`, `data/pages/pages.ts`, `data/navigation/navigation.ts`
* `content/pages/las-vegas.tsx`, `components/layout/SiteFooter.tsx`

### Decision

DEC-063's indexation gate is **released**. The five Las Vegas records are promoted from `launch_pending_validation` to `launch` with `indexable: true`:

```text
market-las-vegas-nv        /las-vegas-nv/
loc-lv-las-vegas           /las-vegas-nv/las-vegas/
loc-lv-henderson           /las-vegas-nv/henderson/
loc-lv-north-las-vegas     /las-vegas-nv/north-las-vegas/
loc-lv-summerlin           /las-vegas-nv/summerlin/
```

`gatedPages` is now empty. No approved record carries a `validationCondition`.

**No licensing content was added to any page**, and none should be. DEC-072's stance is unchanged: licence numbers are not published. Criterion 7 is satisfied by the owner's private confirmation, recorded here and nowhere else. Verified after the change: zero `licens*` matches in the rendered HTML of all five pages.

### Reason

DEC-063 §Release criteria lists eight conditions. Final status:

| # | Criterion | Status | Evidence |
| - | --------- | ------ | -------- |
| 1 | Active operational coverage | ✅ | DEC-074 — owner reports operational |
| 2 | Services actually offered | ✅ | DEC-076 — 17/18; the 18th is St. Louis-specific |
| 3 | Contact routing functional | ✅ | Owner confirmation (private) |
| 4 | Service-request handling | ✅ | Published phone and email per DEC-073, not a form |
| 5 | Geographic coverage confirmed | ✅ | The four approved locations define it (DEC-077) |
| 6 | Market business facts verified | ✅ | DEC-073 — phone, email, hours |
| 7 | Licensing satisfied | ✅ | Owner confirmation (private); not published, per DEC-072 |
| 8 | Public messaging accurate | ✅ | DEC-074 |

⚠ Criteria 3, 4, and 7 rest on **owner confirmation rather than repository-verifiable evidence**. That is recorded plainly rather than presented as something the codebase demonstrates. Criterion 4 in particular is satisfied by the published phone and email — a form was never the mechanism it depended on. See PENDING-008, which remains OPEN.

### Service count — reconciling the conflicting figures

Three figures appear across prior entries and disagree. The live registry settles it:

```text
DEC-075 narrative      13 of 18   SUPERSEDED
DEC-076 narrative      17 of 18   CORRECT
"18/18" (various)      18 of 18   never true for Las Vegas
```

Counted directly from `data/services/master-service-registry.json`:

```text
confirmed                 10
supported_by_*             7
not_applicable             1   (svc-stl-sewer-lateral-inspection-reporting)
                          --
applicable to Las Vegas   17 of 18
```

⚠ The registry contains **zero** occurrences of `requires_operational_confirmation`. That field value does not exist in the data model, so no count can be derived from its absence. The `markets` field is not a per-market operational gate at all — St. Louis, San Diego, and Las Vegas have identical status distributions, differing only on the St. Louis-specific lateral-reporting service. Las Vegas mirrors San Diego exactly.

No page cites a service count, so no content pass was required.

### Previous State

Five records `launch_pending_validation`, `indexable: false`, each carrying a `validationCondition`. Excluded from the sitemap, from navigation, and from every indexable link module.

### New State

All five `launch` and indexable. Verified against built output, not source:

* `sitemap.xml` — 70 URLs, including all five Las Vegas paths
* rendered `<head>` — all five emit `index, follow`; none emits `noindex`
* JSON-LD — all five emit a self-contained graph (Organization, WebSite, WebPage/CollectionPage, City, BreadcrumbList)
* `areaServed` — unchanged by this decision, as DEC-079 stated; `servedMarkets()` is unconditional and already listed Las Vegas on every Service node
* internal links — Las Vegas now resolves on all 73 pages
* `/locations/` — now lists all three markets

### ⚠ Implementation note — "appears automatically" was false

Two changes beyond the page registry were **required**, and both contradict the assumption that releasing the gate is purely a status flip:

1. `data/pages/pages.ts` pinned `EXPECTED_INDEXABLE_COUNT = 65` and failed the build on the 70th indexable page. The guard behaved correctly (CLAUDE.md §45); it is repinned to 70.

2. `data/navigation/navigation.ts` did not contain `market-las-vegas-nv` at all. Both that module's header and `SiteFooter.tsx` asserted Las Vegas would "appear automatically with no code change" once promoted. It would not have. `resolveLinkableOnly` filters entries out; it cannot add one that was never configured. The footer would have silently continued to show two markets. The entry was added explicitly.

Any future market released from a gate needs the same explicit navigation addition. The filter is a safety mechanism, not a discovery mechanism.

---
### Implementation Impact

TBD

### Follow-Up

TBD

---

## DEC-081 — Page Composition Ported from the `power` Template Set

**Date:** 2026-08-23
**Status:** APPROVED
**Impact:** Medium
**Decision Owner:** Project
**Affected Documents:**

* `18-design-system.md` §110-115, §115.1
* `components/sections/` (8 new sections, 5 edited), `components/templates/` (all 12)
* `types/content.ts`, `data/business/proof.ts`, `data/business/authority.ts`

### Decision

The `power` composition set from `site-foundation-template` (`fc79c79`,
`docs/page-templates/power/`) is adopted as the section architecture for
all 12 page templates.

The reference ships **Markdown composition maps, not React** — its
`src/components/` holds only a `.gitkeep`, and it targets Next 14 /
Tailwind 3 against this project's Next 16 / Tailwind 4. What was ported
is section order, section inventory, density rhythm, and element roles.
No code was copied.

Presentation layer only. **Route parity was verified before and after:
73 pages, identical set.** No new indexable route, no registry change,
no addition to doc 04.

### Ported

Eight new sections: `RoutingCards`, `ProblemGrid`, `InclusionsGrid`,
`AuthorityBand`, `CoverageSection`, `ProofGallery`, `TestimonialBand`,
`LeadFormSection`. Five edited: `TrustBar`, `CtaSection`, `SiteHeader`,
`ServiceIndex`, `RelatedLinks`.

The page tail reordered to **related → FAQ → CTA** across every family
except Resource.

### Rejected outright

| Reference element | Governing rule |
|---|---|
| Free-estimate, financing, warranty, same-day/emergency offer modules | CLAUDE.md §17, §23; 18 §89, §145; 01 §34 |
| "One editable placeholder testimonial" per page type | CLAUDE.md §77 — a placeholder quote on a public page is an invented one |
| Click-to-call phone in the shared header | DEC-070/071 publish two numbers; `output: 'export'` cannot vary a shared header by route (PENDING-017); 01 §20 |
| Map / directions / hours card on location pages | PENDING-002 — no address exists; service-area model. CLAUDE.md §29-30 |
| 4-across icon trust strip | 18 §5.3; Appendix B flags decorative icons beside self-sufficient text |

### Adapted

* **Photography slots** typed but empty (18 §28-34). Sections reflow text-first; no placeholder boxes, no stock.
* **Lead form** built as a slot that renders nothing until PENDING-007 and PENDING-008 resolve (CLAUDE.md §58).
* **CTA phone** narrowed to market-scoped templates only. Verified in rendered output: St. Louis, San Diego, and Las Vegas each show their own number; no other page shows one.
* **Register** overridden from the reference's "urgent, visitor mid-problem" to this project's calm and factual voice (18 §68, §70; CLAUDE.md §98).

### Card composition under §5.6

The reference composition is card-based across routing, services,
problems, inclusions, gallery, and related. That composition is
**retained deliberately**, not defaulted into.

§5.6's prohibition is on a page built *entirely* from card grids. These
pages are not: hero, editorial split, process band, authority band,
testimonial, and form separate every card section. The governing rule is
§5.6's second bullet — "vary composition pattern and density between
adjacent sections" — so the resolution is **visual variation as the
differentiator** rather than pattern substitution.

Per-section treatments: routing = even 3-col `LinkCard`, full border.
Services = uneven mosaic, flagship Sewer Camera Inspection at double
width (Appendix A names both the pattern and that flagship). Problems =
2/3-col by count, full border. Inclusions = fixed 2-col, top rule,
muted, denser. Gallery = image grid, no card chrome. Related =
horizontal cards.

Appendix B's separate "cards for every list-like section" check is also
satisfied: `TrustBar` is a band, `AuthorityBand` and `CoverageSection`
are plain lists, `ProcessSteps` is numbered.

Decorative icons excluded (§27, §56, Appendix B). Image-led treatments
remain unavailable until photography is approved.

### Open gap — commercial proof

`CommercialPageTemplate` ships without a proof or testimonial section.
`TestimonialBand` and `ProofGallery` draw on company-wide data that is
not scoped by industry.

**Planned resolution:** a review carousel surfacing **all** reviews,
unfiltered, for conversion. There is no vetting requirement and no
filtering to commercial-specific material.

CLAUDE.md §33 and §74's industry-swap rule was raised against this and
**deliberately not applied**. That rule prohibits presenting residential
content as commercial; an unfiltered review set makes no
residential-versus-commercial claim at all. The goal is broad social
proof on the commercial page, not a claim about commercial-specific
results.

**This is unbuilt. Commercial remains intentionally thinner than other
families until it lands.**

**No data-shape change is required.** `testimonials` is already
`readonly Testimonial[]`; `TestimonialBand` simply renders `[first]`.
Surfacing all of them is `testimonials.map(...)` — a presentation
choice, not a new content category. And because the set is explicitly
unfiltered, no `industry` or `segment` field is needed on `Testimonial`.
The existing `quote` / `attribution` / `source` shape stands, and
`source` stays required.

⚠ One implementation constraint, unresolved: §105 says "avoid carousels
for critical content" and lists the permitted uses as galleries,
inspection examples, and case-study media — reviews are not among them.
CLAUDE.md §56 and §103 also warn on carousel weight, and a true carousel
needs client JavaScript in a component layer that currently ships none
(02 §30). Appendix A's **proof wall** ("many short quotes, compact") is
the static pattern for this content and trips none of that. The decision
to surface all reviews unfiltered stands either way; only the mechanism
is open.

### Not part of this decision

Two site-wide fixes were surfaced by this work and committed separately.
Neither belongs to the port:

* `data/business/positioning.ts` — restored the "Cleaning" step to 18 §64's differentiator motif (pre-existing content drift).
* `components/layout/SiteFooter.tsx` — footer columns now follow surviving nav group count (site chrome).

A class of grid bug was also fixed across six components: hardcoded
column counts that silently orphaned cells when the rendered array
length did not match the assumption. The worst case was `RelatedLinks`,
orphaning a cell on 23 of 46 pages.

### Reason

The project needed a documented composition standard rather than
per-template invention. The reference set supplies one, derived from a
trade-services reference group, and most of it transfers. The parts that
do not are the parts where that group's business model differs from this
one — urgency mechanics, offer modules, and proof this business has not
yet collected — and those are recorded above rather than quietly
softened.

### Verification

* `npm run check` (typecheck, lint, production build) passes
* Route set identical before and after — 73 pages
* `sectionRhythmIssues()` reports zero warnings, down from three pre-existing
* No new unverified claims, hardcoded phone numbers, or addresses in the component layer
* One `h1` per page confirmed across families

---

## DEC-082 — 18 §115's Resource Chain Corrected to the Rendered Order

**Date:** 2026-08-23
**Status:** APPROVED
**Impact:** Low
**Decision Owner:** Project
**Affected Documents:**

* `18-design-system.md` §115
* `components/templates/ResourcePageTemplate.tsx` (comments only)

### Decision

§115's prescribed chain for the resource family is corrected to:

```text
Article Hero → Optional TOC → Direct Answer → Detailed Sections
→ Visuals/Diagrams → Related Questions → Related Resources
→ Relevant Service CTA
```

The closing service CTA moves from between Related Questions and
Related Resources to the end of the chain. Nothing else in §115
changes, and the FAQ still precedes the related strip.

### Why this is a documentation fix, not a composition change

§115 has listed the CTA mid-tail since it was written. No
implementation ever matched that: `ResourcePageTemplate` has rendered
FAQ → related → CTA since `6c5a94e`, before DEC-081, and DEC-081 did
not touch this family's order.

So the document and the code have disagreed on this one position for
the life of both, and the disagreement was invisible because §115's
real job — protecting the FAQ-before-related inversion — is the part
everyone reads. The template's own protective comment quoted the
document's chain rather than its own render, which is how a comment
written to prevent drift came to describe it.

The document is corrected rather than the code because:

* A service CTA is the last thing an article should offer, after the
  reader has the answer (§115's own framing, 17 §19).
* Every other family closes on a CTA. Moving the resource CTA to the
  document's position would have made this family's tail differ from
  the rest of the site in two places instead of one.
* Nothing rendered changes, so no page, route, schema, or analytics
  context is affected.

### Not part of this decision

The FAQ-before-related inversion is untouched and still governed by
§115 under CLAUDE.md §97. This entry narrows what is exceptional about
this family's tail — it is the FAQ/related pair, and only that.

### Verification

* No code path changed — comment text only in the template
* `npm run check` (typecheck, lint, production build) passes
* Route set identical before and after — 73 HTML routes (70 of them PageShell pages)
* Rendered section order on all five resource pages unchanged

---

## DEC-083 — Per-Market Contact Facts Confirmed; St. Louis Hours Corrected

**Date:** 2026-08-31
**Status:** APPROVED
**Impact:** Medium
**Decision Owner:** Business owner (Sedrick)
**Affected Documents:**

* `22-decisions-change-log.md` DEC-070 (Hours row superseded), DEC-071, DEC-073
* `data/business/organization.ts`, `data/markets/markets.ts`
* `content/pages/core.tsx` (`/contact/`)

### Decision

The owner supplied contact facts for all three markets. Two are changes; the rest confirm what the repository already held.

| Market | Phone | Email | Hours |
| ------ | ----- | ----- | ----- |
| St. Louis | (314) 821-1600 | info@thesewerpros.com | Mon–Fri 8:00am–4:00pm |
| San Diego | (858) 257-2888 | info@thesewerpros.com | Mon–Fri 8:00am–4:00pm |
| Las Vegas | (725) 292-4030 | bookaninspection@thesewerpros.com | Mon–Fri 8:00am–4:00pm |

Two facts changed:

1. **St. Louis hours corrected from 7:30am to 8:00am.** DEC-070 recorded 7:30am because that is what thesewerpros.com/contact published. The owner's figure supersedes it. All three markets now open at 8:00am.
2. **San Diego email recorded for the first time.** DEC-071 sourced San Diego's phone, hours, and founding year from thesewerprossd.com, which publishes no email. `info@` is owner-supplied, not site-sourced.

Phones for all three markets and the St. Louis and Las Vegas emails were already correct and are unchanged.

### Reason

01 §24 treats an owner statement about the business as a Confirmed Business Fact. The St. Louis correction is the notable one: it supersedes a *published* fact rather than filling a gap, so the live site and the repository now disagree by design. The comment on `hours` in `organization.ts` says so explicitly, to stop a future pass from "restoring" 7:30am from the site and calling it a fix.

### Previous State

* St. Louis hours 7:30am–4:00pm in `organization.ts` (`weekdays` and schema `opens: '07:30'`), `markets.ts`, and `/contact/`
* No `email` field existed on `MarketOperatingDetail` — St. Louis's lived in `organization.ts`, Las Vegas's was hardcoded in `content/pages/las-vegas.tsx`, and San Diego had none anywhere
* `/contact/` listed St. Louis and San Diego only, with no email for San Diego and no Las Vegas section at all — a gap since DEC-080 made the five Las Vegas pages indexable

### New State

* 8:00am open across `organization.ts` (display string and `opens: '08:00'`), `markets.ts`, and `/contact/`
* `MarketOperatingDetail.email` added and populated for all three markets, so per-market email is canonical data rather than scattered through JSX (CLAUDE.md §43)
* `/contact/` publishes all three markets with phone, email, and hours

⚠ `MarketOperatingDetail.email` is populated but **not yet consumed** — `/contact/` and the market pages still hardcode their strings, matching the existing pattern for `phone`. The field is the canonical source; wiring the content files to read from it was not done here.

### Not part of this decision

* **Schema `contactPoints` still lists St. Louis only.** `organization.ts` emits one `contactPoint` with `areaServed: ['st-louis-mo']`. Now that San Diego and Las Vegas have confirmed phone and email, adding them is defensible — but that changes the emitted entity graph and belongs to DEC-079's model, not to a facts update. Left for a decision that addresses it directly.
* Hours are unchanged for San Diego and Las Vegas; both were already 8:00am–4:00pm.
* These hours continue to rule out any emergency, same-day, or 24/7 claim (01 §35).

### Verification

* `npm run check` (typecheck, lint, production build) passes
* Zero `7:30` / `07:30` occurrences remain in `.ts`/`.tsx`
* Rendered `/contact/` shows three markets, each with phone, email, and 8:00am–4:00pm

---

## DEC-084 — Google Review Carousel Built From Real St. Louis Reviews

**Date:** 2026-08-31
**Status:** APPROVED
**Impact:** Medium
**Decision Owner:** Business owner (Sedrick)
**Affected Documents:**

* `18-design-system.md` §110
* `22-decisions-change-log.md` DEC-020, DEC-028, DEC-035, DEC-036, DEC-081, DEC-083
* `data/reviews/google-reviews.json`, `data/reviews/reviews.ts`
* `components/sections/ReviewCarousel.tsx`, `components/sections/index.ts`
* `components/templates/HomePageTemplate.tsx`, `components/ui/Button.tsx`

### Decision

The homepage carries a carousel of **real, attributed Google reviews** from the St. Louis Business Profile. The owner supplied a one-time export of 278 public reviews on 2026-08-31.

This closes the gate `TestimonialBand` has held since DEC-081 — but **not by opening that gate**. The carousel is a separate section, for a reason given below.

**272 of 278 reviews are published.** Six are withheld, each named with its reason in `data/reviews/reviews.ts`.

### Reason

CLAUDE.md §77 requires verified review data with real attribution. This is that: every entry carries the reviewer's public Google name and a link to their public profile, so every quote on the page is checkable at source. DEC-081 rejected the reference composition's placeholder testimonial precisely because no such material existed. It does now.

### ⚠ Why this is NOT a population of `TestimonialBand`

`TestimonialBand` renders on six templates **including `MarketPageTemplate`**. Filling `data/business/proof.ts` would therefore have put St. Louis reviews onto `/san-diego-ca/` and `/las-vegas-nv/` automatically, with no code change and no warning.

Only St. Louis has a Google Business Profile (01 §21, DEC-020); San Diego and Las Vegas have none identified (DEC-021, DEC-022). 01 §20 forbids carrying one market's business facts onto another. So the carousel is its own section, added deliberately to the homepage only, and `proof.ts` stays empty.

Verified in built output: the carousel heading appears on `/` and on **no** market page.

### The six withheld reviews

One is negative; five are positive but would publish a claim this project has ruled out. That second category is the one worth understanding: a customer describing same-day service is reporting their experience, but The Sewer Pros *selecting that quote for its homepage* is making an availability claim.

| Reviewer | Reason |
| -------- | ------ |
| Brian Markowitz | NEGATIVE — disputes technician licensing and experience |
| andy dv | "came out same-day … urgent matter" — DEC-035 |
| Ben | "completed it same day" + "cheaper than the quotes from their competitors" — DEC-035, DEC-036 |
| SH | "about half the price of the other companies" — DEC-036 |
| Vicki J. Harp | "You work on Saturdays" — contradicts published hours, DEC-083 |
| Victoria Krylov | "finish the job in the same day" + exposing a buried yard vent — DEC-035, CLAUDE.md §4 |

⚠ Nothing here claims these reviews are illegitimate or hides them. They are public on Google and stay public on Google. `google-reviews.json` holds the export **unchanged**; exclusions live in `reviews.ts` as named data so the removals are visible and reversible in one line.

⚠ **Brian Markowitz's review contests licensing** — the same evidence question left open at DEC-063 criterion 7 and still unresolved (see DEC-080 and §39). Excluding it from a carousel does not answer it.

### Not built, and why

* **No `Review` / `AggregateRating` / `ratingValue` schema.** DEC-028 rejects self-serving review markup. Verified absent from built output. Visible stars on a quote (below) are a different act — DEC-028 permits reviews "visually and for conversion"; what it rejects is emitting markup to chase rating snippets.
* ~~**No overall rating or review-count line.**~~ **SUPERSEDED same day by DEC-085**, which approves publishing 4.9★ / 595 reviews as visible text. The reasoning here was right and the gap it named is what DEC-085 closes: the aggregate needed a verification-backed decision entry (01 §35, CLAUDE.md §23), and it now has one. The schema prohibition is unchanged.
* **No "See all reviews on Google" link.** No GBP URL is documented anywhere in this repository — `organization.ts` has no `sameAs` (15 §27), and neither doc 01 nor 11 records one. CLAUDE.md §23 forbids inventing a plausible Maps URL. `googleProfileReviewsUrl` is `null` and the section says plainly that the selection is partial; supply the real URL and the link appears with no other change.
* **No autoplay.** Quotes are long enough that self-advancing text would move out from under a reader mid-sentence.
* **Star ratings: 8 of 272 published reviews, amended same day.** The original export carried no star values, so this entry first recorded stars as unavailable. The owner then supplied per-review values verified individually against the live listing — Google Maps throttled the scroll before the rest could be read. `stars: 5` is set for Yu Ma, Jason and Kris Handy-Kraus, Sean DePass, Dave O'Brien, Venkata Simhadri, Laura Ribeiro, Bridget Kelly, and Katya R; every other record is `null`.

  A star row renders **only** where `stars` is non-null — no placeholder, no greyed outline, no assumed 5. Glyphs are `aria-hidden`; the rating reaches assistive technology once as text ("Rated 5 out of 5 on Google").

  ⚠ `null` means NOT VERIFIED, not unrated and not low. **Do not backfill from the aggregate.** The overall average is high but the distribution still contains one- and two-star reviews, so assuming 5 for an unverified record would manufacture a rating for a named person's review (CLAUDE.md §23, §77). `verifiedStarCount` is exported so the gap stays countable; the backfill is complete when it equals `publishedReviews.length`.

### Implementation notes

* **Virtualized.** Only the active slide plus one either side is mounted; verified 1 review in the initial DOM rather than 272. The data itself ships in the bundle — a 134 KB chunk, **35 KB gzipped**. That is the real cost of the owner's "all positive reviews" instruction and is recorded here rather than left to be discovered.
* **Relative dates rendered verbatim** ("3 months ago"). An `ageInMonths()` helper derives a sort key only; it must never be rendered or written to schema, since Google publishes no calendar date and inventing one would manufacture precision (CLAUDE.md §23, §78).
* **Quotes are never edited.** Long ones clamp visually with a "read the full review" control; the complete text is always in the DOM. Reviews Google itself truncated (8 of them, ending "… More") get no expand control, because there is nothing further to reveal.
* **Six reviews pinned first** — those stating the independent-inspection model in a customer's own words, plus a named real-estate agent. Ordering only; nothing altered or excluded.
* `Button` gained optional `onClick` and three ARIA passthroughs. Purely additive; no existing call site changes.

### Not part of this decision

* **The homepage was already in the `power` composition.** DEC-081 ported it on 2026-08-23, including `RoutingCards`, `TestimonialBand`, and `LeadFormSection`. No restructuring was needed or done; `docs/page-templates/` was not imported.
* **Intent-routing cards (§110) remain unauthored** — they need card copy, which is content work.
* **The FAQ remains at 3 entries** where `_base/homepage.md` asks for 5–8. Also content work.
* **The lead form remains unbuilt.** PENDING-007 and PENDING-008 are both open, the referenced field spec does not exist in this repository, and the site is a static export with no submission endpoint — a form that posts nowhere is worse than no form. `LeadFormSection` stays a gate.

### Follow-Up

* Supply the Google Business Profile reviews URL to activate the "See all reviews" link.
* Backfill `stars` for the 270 unverified reviews — a GBP export tool that reports per-review values, or another live-verification pass. Not a blocker; the section is correct without them.
* This is a static snapshot. It will not reflect reviews posted, edited, or deleted after 2026-08-31. Re-export periodically. Google's Places API caps at five reviews, so live sync means a paid third-party widget — a reasonable future upgrade, not what this is.
* Whether the carousel should also appear on St. Louis market and location pages is a live option, and permitted by 01 §20. Not done here; the homepage was the requested scope.

### Verification

* `npm run check` (typecheck, lint, production build) passes
* Route parity: 73 HTML routes, 70 sitemap URLs — unchanged
* Carousel renders on `/`; absent from `/san-diego-ca/`, `/las-vegas-nv/`, `/st-louis-mo/`
* All six withheld reviews absent from built output
* No `AggregateRating`, no `"@type": "Review"`, no `ratingValue` anywhere in the build

---

## DEC-085 — Google Aggregate Rating Approved for Publication

**Date:** 2026-09-01
**Status:** APPROVED
**Impact:** Moderate
**Decision Owner:** Business owner (Sedrick)
**Affected Documents:**

* `22-decisions-change-log.md` DEC-020, DEC-028, DEC-084
* `data/reviews/reviews.ts`, `components/sections/ReviewCarousel.tsx`

### Decision

The St. Louis profile's aggregate Google rating — **4.9★ from 595 reviews** — is approved for publication as **visible text** on the homepage review section.

This closes the gap DEC-084 named. That entry withheld the aggregate and said why: a rating and review-count figure is a business claim that 01 §35 and CLAUDE.md §23 put behind a verification-backed decision. This is that decision.

### Verification basis

Read from the live Google Business Profile listing on 2026-09-01. Not carried over from the review-text export, which contained no aggregate data.

| Stars | Count |
| ----- | ----- |
| 5 | 575 |
| 4 | 7 |
| 3 | 0 |
| 2 | 1 |
| 1 | 12 |

Checked when recorded: the buckets sum to **595**, and the implied mean is **4.9025**, which rounds to the stated **4.9**. The three figures corroborate one another rather than standing as three separate assertions.

The distribution is stored in `ratingSnapshot` but **not rendered** — DEC-085 approves the rating and the count, not the breakdown. It is kept because it is the evidence, and because it is the standing argument against backfilling per-review `stars` from the average: the profile contains one- and two-star reviews, so "the average is 4.9" does not make any particular unverified review a five.

### What this does NOT approve

* **No schema.** DEC-028 stays in force and DEC-085 says so explicitly. No `AggregateRating`, no `ratingValue`, no `reviewCount` structured-data property. The approval covers what a visitor reads, not what a crawler parses. Verified absent from built output.
* **No implication of currency.** The figure renders as "4.9★ … from 595 Google reviews · as of September 1, 2026". The date is part of the claim, not a footnote — `verifiedAt` is a required field on `RatingSnapshot` and the component renders it in the same sentence. Removing it to tidy the layout would turn a dated reading into an assertion that the number is current.
* ~~**No extension to other markets.** St. Louis is the only market with a GBP (01 §21, DEC-020). Verified absent from `/san-diego-ca/` and `/las-vegas-nv/`.~~ **Superseded by DEC-100 (2026-09-04)**, which extends the review band to all three market hubs. The underlying fact is unchanged: the reviews and the stat are still the St. Louis profile's.

### New State

`ratingSnapshot = { rating: 4.9, reviewCount: 595, verifiedAt: '2026-09-01', distribution: {…} }` in `data/reviews/reviews.ts`, rendered by `AggregateStat` above the carousel.

Stored as a dated object rather than a hardcoded string so it reads as a snapshot needing refresh rather than a live feed.

### Follow-Up

* Refresh the snapshot whenever the review dataset is refreshed. Both go stale together.
* The "See all reviews on Google" link still has no destination — no GBP URL exists anywhere in this repository. It is the one open item for both this stat and the carousel; supplying the URL activates it with no other change.

### Verification

* `npm run check` (typecheck, lint, production build) passes
* Rendered on `/`: "4.9★ out of 5 from 595 Google reviews · as of September 1, 2026"
* Absent from `/san-diego-ca/` and `/las-vegas-nv/`
* No `AggregateRating`, `ratingValue`, or `reviewCount` anywhere in the build
* Route parity unchanged — 73 HTML routes, 70 sitemap URLs

---
## DEC-087 — Header Phone Link Made Market-Aware

**Date:** 2026-09-01
**Status:** APPROVED
**Impact:** Moderate
**Decision Owner:** Business owner (Sedrick)
**Affected Documents:**

* `22-decisions-change-log.md` PENDING-017, DEC-070, DEC-071, DEC-073
* `components/layout/SiteHeader.tsx`, `components/layout/HeaderPhoneLink.tsx` (new)

### Decision

The site header's phone control now shows the correct market's real, owner-confirmed number when a visitor is on that market's pages, instead of always linking to `/contact/`.

### Why this was previously blocked, and what changed

The header is a shared layout component rendered once in the root layout, and St. Louis, San Diego, and Las Vegas each publish a different real number (DEC-070, DEC-071, DEC-073). 01 §20 forbids showing one market's contact facts on another market's page, and under `output: 'export'` the header had no way to know which market a visitor was viewing — so it fell back to a neutral "Call" link to `/contact/`, which lists all three separately. PENDING-017 tracked this as open, pending "a market-aware layout."

The blocker was never missing data — all three numbers, emails, and hours were already verified in `data/markets/markets.ts` (`marketOperatingDetail`). What was missing was a way to read the current route without turning the whole header into a client component. `HeaderPhoneLink` (new, `components/layout/HeaderPhoneLink.tsx`) is a small client island that reads the pathname via `usePathname()`, matches it against the three market slugs, and renders that market's `TrackedPhoneLink` when there's a match. It does not guess a visitor's location — it reads the page they are actually on, which is exact.

### What this does NOT change

* Sitewide pages (homepage, `/services/`, `/about/`, etc.) have no single correct number, so the fallback there is unchanged: "Call" → `/contact/`.
* No new phone numbers were invented. All three come from already-verified `marketOperatingDetail` entries.
* The rest of the header stays a Server Component; only the phone control is client-side.

### New State

`PENDING-017` is RESOLVED by this entry. `components/layout/HeaderPhoneLink.tsx` is the new market-detection logic; `SiteHeader.tsx` uses it in both the desktop and mobile phone slots.

### Verification

* `npm run check` (typecheck, lint, production build) passes
* `/st-louis-mo/*` renders `(314) 821-1600`; `/san-diego-ca/*` renders `(858) 257-2888`; `/las-vegas-nv/*` renders `(725) 292-4030`
* `/`, `/services/`, `/about/`, and other sitewide routes still render "Call" → `/contact/`
* Checked in built output across nine routes, desktop and mobile slots both, with no cross-market leakage

---

## DEC-088 — Free Estimate and Same-Day Availability Approved for Publication

**Date:** 2026-09-01
**Status:** APPROVED
**Impact:** Moderate
**Decision Owner:** Business owner (Sedrick)
**Affected Documents:**

* `docs/superpowers/specs/2026-08-23-power-page-templates-design.md` (the port design that removed the module), `data/business/organization.ts` (`CLAIMS_REQUIRING_VERIFICATION`)
* `data/business/offers.ts` (new), `components/sections/ConfidenceModule.tsx` (new)

### Decision

Two claims previously on `CLAIMS_REQUIRING_VERIFICATION` are now owner-confirmed and approved for publication on the homepage:

* **Free estimate** — available; ask before scheduling a sewer inspection or cleaning.
* **Same-day appointments** — sometimes available Monday–Friday, 8:00am–4:00pm, depending on scheduling. Not guaranteed. Not available weekends.

### Why this was previously withheld, and what changed

`docs/superpowers/specs/2026-08-23-power-page-templates-design.md` removed `power`'s "optional confidence module" (free estimate, financing, warranty, same-day/emergency availability) from every ported composition map entirely, because none of the four were verified and 01 §35 lists same-day/emergency service and free estimates among claims requiring documented evidence. `data/business/organization.ts` still flags published hours (Mon–Fri, 8–4, closed weekends) as ruling OUT a same-day guarantee or emergency/24-7 claim.

The owner directly confirmed both offers on 2026-09-01. That satisfies 01 §24 (a business's own statement about itself is evidence) for exactly these two — it does not extend to financing or warranty, which remain unconfirmed and are deliberately excluded from the new module.

Same-day copy is hedged to match the actual constraint: "sometimes available," never "guaranteed," never implying weekend or 24-7 coverage. It describes availability rather than promising it.

### What this does NOT approve

* No financing claim. No warranty claim. No 24/7 or emergency-service claim. All three stay on `CLAIMS_REQUIRING_VERIFICATION` and out of the site.
* No Las Vegas service claim. ⚠ The source brief for this entry said this changes nothing about "Las Vegas's `launch_pending_validation` gate (DEC-063)" — that gate was **released on 2026-08-17 by DEC-080**, and the five Las Vegas records have been `launch` and indexable since. The accurate statement is the narrower one: this module is homepage-only and authorises no service claim in any market, Las Vegas included.

### New State

`data/business/offers.ts` (new) holds `verifiedOffers`, each entry citing this decision. `components/sections/ConfidenceModule.tsx` (new) renders it, gated the same way as every other data-backed section — empty data means the section is absent. Wired into `HomePageTemplate.tsx` directly under the trust bar.

### Wording Updated 2026-09-04 (owner)

The same-day `detail` now reads: "Same-day appointments can be arranged when scheduling permits, Monday through Friday, 8:00am–4:00pm. Not available on weekends."

⚠ This entry above ties its approval to the words "sometimes available" and "not guaranteed", and both are gone. The hedge is not: "when scheduling permits" carries it in one clause instead of two, which is why no separate guarantee disclaimer replaced it. The weekday hours and the weekend exclusion are deliberately kept, because this entry requires the claim never imply weekend or 24-7 coverage and dropping that half would leave the card silent on exactly that point.

The approval itself, its homepage-only scope, and the `CLAIMS_REQUIRING_VERIFICATION` guard are unchanged. The text quoted earlier in this entry is left as the historical record of what was approved on 2026-09-01.

⚠ `'same-day service'` and `'free estimates'` remain in `CLAIMS_REQUIRING_VERIFICATION` deliberately. That array still governs every appearance OTHER than this module — it is the guard against the same claim reappearing on a service page, a market page, or a CTA without DEC-088's scoping and hedged phrasing.

### Verification

* `npm run check` (typecheck, lint, production build) passes
* Rendered on `/`: "Free estimate" and "Same-day appointments sometimes available" with the hedged detail text
* Absent from every page other than the homepage (module is not wired into any other template)
* Route parity unchanged — 73 HTML routes, 70 sitemap URLs

---

## DEC-089 — Homepage FAQPage Schema Emission Approved

**Date:** 2026-09-01
**Status:** APPROVED
**Impact:** Moderate
**Decision Owner:** Business owner (Sedrick)
**Affected Documents:**

* `docs/15-schema-entity-strategy.md` §57-58 (the per-page policy this exercises), §67 (schema must match visible content)
* `lib/schema/faq.ts` (new), `lib/schema/graph.ts`, `lib/schema/index.ts`, `types/schema.ts`
* `components/templates/PageShell.tsx`, `components/templates/HomePageTemplate.tsx`

### Decision

The home page's FAQ set — 14 entries as of the 2026-09-01 content build — is approved for `FAQPage` markup and rich-result eligibility.

This approval is **scoped to the home page and to no other route**. Every other page's FAQ remains unschema'd. Extending it is a new decision under 15 §58, not an implementation detail.

### Why this is approved now, and was not before

15 §57 permits `FAQPage` where a page "genuinely contains multiple visible questions and answers", the markup matches visible content, and the implementation carries semantic value. 15 §58 forbids generating it merely because an FAQ component is present.

Before the 2026-09-01 build the home page carried six FAQ entries. `emitFaqSchema` existed in `lib/schema/graph.ts` as an opt-in flag with an **empty implementation body** — no `FAQPage` builder had ever been written, and no page had been approved. That was the correct state: the flag recorded the policy without acting on it.

The content build raised the set to 14 substantive entries spanning pre-purchase inspection, second opinions, recurring backups, line locating, hydro jetting, commercial service, and availability. That closes the depth condition in 15 §57. The owner confirmed the set is stable enough to warrant rich-result eligibility.

### How the visible/markup match is guaranteed

15 §67 forbids asserting in markup anything a reader cannot see. This decision required that `acceptedAnswer.text` match the visible answer character for character.

That is implemented as a **derivation, not a check**. `lib/schema/faq.ts` reads the answer text out of the same `ReactNode` that `FaqSection` renders — `content.faq` is handed to `pageSchema()` directly. There is no second copy of the copy to fall out of step, so a comparison would have nothing to compare. Editing the visible answer changes the markup in the same edit, necessarily.

Two guards back that up, both failing the build rather than shipping:

* an answer containing a **custom React component** throws, because a component may render text absent from its children and silent extraction would put markup and page out of step
* an answer producing **no text** throws, rather than emitting a `Question` the page does not answer

The opt-in is likewise structural: `PageSchemaInput.emitFaqSchema` (a boolean) was **replaced** by `faq?: readonly FaqContent[]`. A caller cannot switch the node on without also supplying the visible content it is derived from — the failure mode a boolean invites (flag set, content stale or absent) is now unrepresentable.

⚠ This matters most for the home page's same-day answer. DEC-088 approved that wording as *visible* copy, hedged to "sometimes"/"cannot promise" against published Monday–Friday 8:00am–4:00pm hours. Markup asserting a less-qualified availability claim than the page shows would be a structured-data misrepresentation of an offer. It cannot happen by construction; do not replace the derivation with a hand-authored node.

### Deviation from the decision text — raised, and APPROVED

The decision as first drafted said `emitFaqSchema` "may be enabled for the homepage only". Implementation did not enable that boolean; it **removed** it, replacing it with `faq?: readonly FaqContent[]`.

The deviation was flagged for approval before the work was accepted, and the owner approved it on 2026-09-01 as the better design. The reasoning is requirement #4's own: a boolean and the content are two separate things, so a boolean permits precisely the failure this decision exists to prevent — flag on, content stale or absent, markup silently misrepresenting the page. Passing the content IS the opt-in, so that state cannot be expressed.

Per-page scoping is unchanged and is what the boolean was for: only `HomePageTemplate` passes `faq`; every other template omits it and emits nothing.

⚠ The boolean is not coming back. A future reader comparing the decision text above against `lib/schema/graph.ts` will find no `emitFaqSchema` — that absence is this approval, not drift.

### What this does NOT approve

* **No `AggregateRating`. No `Review`.** Unchanged from DEC-028 and DEC-085, and unchanged by the home page gaining `FAQPage`. No verified review data exists.
* No `FAQPage` on `/services/`, `/faq/`, `/contact/`, any market, service, audience, commercial, resource, or comparison page — all of which carry FAQ sections and none of which emit the node.
* No change to the home page's `WebPage` subtype. The page's purpose is not "an FAQ page"; per 15 §30 the subtype still reflects actual visible purpose, and `FAQPage` is a separate node describing the FAQ section.
* No success metric based on obtaining FAQ rich-result expansion (15 §57 explicitly warns against this).

### New State

The home page emits one `@graph` containing `Organization`, `WebSite`, `WebPage`, and `FAQPage`. The `FAQPage` node carries `@id` `https://www.thesewerpros.com/#faq`, `isPartOf` the `WebSite`, and 14 `Question`/`Answer` pairs.

`SCHEMA_FRAGMENT.faqPage` (`'#faq'`) is new. `QuestionNode`, `AnswerNode`, and `FaqPageNode` are new in `types/schema.ts`; `FaqPageNode` joins the `SchemaNode` union.

### Verification

* `npm run check` (typecheck, lint, production build) passes
* Exactly one `FAQPage` node, in exactly one `<script type="application/ld+json">` tag, on exactly one route — swept all 75 built pages
* All 14 `acceptedAnswer.text` values compared against the answer text scraped from the rendered HTML DOM: 14/14 exact character-for-character match, including the two-paragraph same-day answer
* No `AggregateRating` or `Review` node on any built page
* Route parity unchanged — 70 sitemap URLs

---

## DEC-090 — Build-First Project Governance

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

## DEC-091 — Build, Publish, and Index Are Separate Lifecycle States

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

## DEC-092 — Project Documents Should Use Minimum Necessary Gates

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

## DEC-093 — Claude Should Resolve Routine Unknowns Before Escalating

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

## DEC-094 — Six Page-Family Design References

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

## DEC-095 — Reference Designs Do Not Transfer Example Business Facts

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

## DEC-096 — Brand Typography and Color System Approved

**Date:** 2026-09-03
**Status:** APPROVED
**Impact:** High
**Decision Owner:** Business owner (Sedrick)
**Affected Documents:**

* `22-decisions-change-log.md` — PENDING-005, PENDING-006, DEC-064
* `01-business-brand-foundation.md` — new visual-identity section
* `18-design-system.md` §28-§31
* `app/globals.css`
* `components/ui/index.ts` (comment only — token names/roles are unaffected)

### Decision

The Sewer Pros' production typography and brand color values are approved as follows. These are now verified brand facts, not placeholders.

**Typography**

| Element | Font | Weight |
| --- | --- | --- |
| Hero H1 | Archivo | 700 |
| Section H2 | Archivo | 650-700 |
| Card H3 | Archivo | 600 |
| Eyebrows | Archivo | 600, uppercase, moderate letter-spacing |
| Body copy | Source Sans 3 | 400 |
| Navigation | Source Sans 3 | 600 |
| Buttons | Source Sans 3 | 600 |
| Form fields | Source Sans 3 | 400-600 |

Rationale: Archivo reads as technical, substantial, and specialized rather than a generic plumbing franchise, and carries the hero/H2/eyebrow weight the design system calls for (18 §30) without oversized or condensed display type. Source Sans 3 is built for dense interface and body content, which matches this site's copy-dense pages. Two families total, satisfying 18 §30's maximum. Barlow Condensed and an Archivo-only system were considered and rejected: the first risks a compressed, promotional feel in body copy, the second is safe but less distinctive.

**Color System**

| Role | Token | Hex | Usage |
| --- | --- | --- | --- |
| Brand Dark | `--brand` | `#0B2D45` | header, hero, process sections, testimonials, CTA bands, footer |
| Brand Foreground | `--brand-foreground` | `#FFFFFF` | text/icons on Brand Dark |
| Primary Blue | `--accent-secondary` (new) | `#1C6B97` | secondary buttons, links, nav active states, authority accents |
| Primary Surface | `--background` / `--surface` | `#FFFFFF` | content, cards, forms, resources |
| Secondary Surface | `--surface-muted` | `#F4F7F8` | alternating section rhythm |
| Border | `--border` | `#D7E0E5` | card borders, dividers |
| Primary Accent (CTA) | `--accent` | `#007A3D` | primary buttons and conversion actions only |
| Accent Foreground | `--accent-foreground` | `#FFFFFF` | text on Primary Accent |
| Foreground / Body Text | `--foreground` | `#1F2933` | body copy |
| Muted Foreground | `--muted-foreground` | `#5F6B73` | supporting/secondary text |

Rationale: this evolves the existing blue-and-green identity rather than replacing it, preserving the recognition equity in the logo (`#2463AB` blue, `#8F9094` gray) instead of introducing a palette the logo would clash with. Brand Dark is a deepened, desaturated echo of the logo's own blue hue, for the dark bands 18 §28 calls for. CTA Green is deliberately darker than the legacy `#008E44` to improve white-text contrast. Per 18 §29 green is for conversion actions, not scattered across icons, borders, and headings. No gradients, consistent with 18 §28.

**Contrast, verified at implementation** rather than taken on trust. Every pair clears WCAG AA (4.5:1):

| Pair | Ratio |
| --- | --- |
| White on CTA green `#007A3D` | 5.45:1 |
| White on primary blue `#1C6B97` | 5.83:1 |
| White on brand dark `#0B2D45` | 14.23:1 |
| Muted text `#5F6B73` on white | 5.47:1 |
| Muted text on muted surface `#F4F7F8` | 5.08:1 |
| Body text `#1F2933` on white | 14.76:1 |

### Previous State

`app/globals.css` and `components/ui/index.ts` carried explicit placeholder warnings pending PENDING-005 and PENDING-006. DEC-064 held interim, non-final authority over these roles while awaiting supplied brand assets or an approved decision.

### New State

PENDING-005 and PENDING-006 are RESOLVED. DEC-064 is SUPERSEDED by this entry. Visual-identity values now live in `01-business-brand-foundation.md` as verified brand facts, per DEC-064's own stated resolution path.

### Implementation Notes

Two accents now exist and are not interchangeable. `--accent` is conversion green; `--accent-secondary` is authority blue. Enforcing that split moved links, navigation hover, tertiary buttons, badges, radio controls, focus rings, the skip link, and review-carousel accents off green and onto blue. Green now appears in exactly three places, all primary conversion buttons.

Review stars took the authority blue. The palette defines no star color, and inventing an amber outside the approved set would have been a brand decision this entry does not make.

The logo asset is unmodified. `#2463AB` and `#8F9094` are recorded here only as the source values the palette was built to harmonize with.

`src/app/globals.css` does not exist in this repository — there is no `src/` tree — so implementation item 6 had nothing to apply to.

---

## DEC-097 — San Diego Email Updated

**Date:** 2026-09-04
**Status:** APPROVED
**Impact:** Low
**Decision Owner:** Business owner (Sedrick)
**Affected Documents:**

* `22-decisions-change-log.md` DEC-071, DEC-083 (San Diego email row superseded)
* `data/markets/markets.ts` (`MarketOperatingDetail.email` for San Diego)
* `content/pages/core.tsx` (`/contact/`)
* `components/layout/SiteFooter.tsx`

### Decision

San Diego's published email changes from `info@thesewerpros.com` to **`admin@thesewerpros.com`**. St. Louis's email is unchanged (`info@thesewerpros.com`).

| Market | Phone | Email | Hours |
| ------ | ----- | ----- | ----- |
| St. Louis | (314) 821-1600 | info@thesewerpros.com | Mon-Fri 8:00am-4:00pm |
| San Diego | (858) 257-2888 | **admin@thesewerpros.com** | Mon-Fri 8:00am-4:00pm |
| Las Vegas | (725) 292-4030 | bookaninspection@thesewerpros.com | Mon-Fri 8:00am-4:00pm |

### Reason

Per 01 §24, an owner statement about the business's own contact facts is a Confirmed Business Fact — same standing as DEC-071/DEC-083, which is where San Diego's email was first recorded and last confirmed. This supersedes that value only; St. Louis and Las Vegas emails are untouched.

### Previous State

San Diego email: `info@thesewerpros.com` (DEC-083), identical to St. Louis's email — same string, two markets.

### New State

San Diego email: `admin@thesewerpros.com`, now distinct from St. Louis's `info@thesewerpros.com`.

### Implementation Notes

**The shared-string hazard was real and was resolved by market context, not by string matching.** A repo-wide grep for `info@thesewerpros.com` found six source occurrences. Four are St. Louis and were deliberately left alone:

| Location | Market context | Action |
| -------- | -------------- | ------ |
| `data/markets/markets.ts` `marketOperatingDetail['st-louis-mo']` | St. Louis | unchanged |
| `data/markets/markets.ts` `marketOperatingDetail['san-diego-ca']` | San Diego | **changed** |
| `content/pages/core.tsx` under `<h2>St. Louis</h2>` | St. Louis | unchanged |
| `content/pages/core.tsx` under `<h2>San Diego</h2>` | San Diego | **changed** |
| `data/business/organization.ts` `contactPoints[0]` | St. Louis (`areaServed: ['st-louis-mo']`) | unchanged |
| `data/business/organization.ts` `contact` | St. Louis (the export's own note attributes it there) | unchanged |

One near-miss worth recording: `markets.ts` contains two maps keyed by the same market ids, and only the second (`marketOperatingDetail`) holds emails. A naive "first `'san-diego-ca': {`" match lands in the wrong map.

**The footer now reads contact detail from `marketOperatingDetail` rather than hardcoding it.** This was the DEC-083 gap ("populated but not yet consumed"). Before, St. Louis came from `organization.ts`'s St. Louis-scoped `contact` export and San Diego's number was a literal in the markup, which is why San Diego had a phone and no email and Las Vegas had neither. All three markets now render phone and email from one source, and this decision's email change reached the footer without a second edit.

### Not part of this decision

* St. Louis and Las Vegas emails are unchanged.
* Structured-data `contactPoints` still emits one St. Louis-scoped entry. Adding San Diego and Las Vegas remains the separate entity-graph decision DEC-083 deferred.
* No street address is added for any market. All three remain service-area businesses.

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

**Status:** RESOLVED by DEC-096 (2026-09-03)

Final production brand colors should be based on approved Sewer Pros branding.

The visual reference templates define layout and hierarchy, not the requirement to copy the example palette.

---

## PENDING-006 — Final Typography

**Status:** RESOLVED by DEC-096 (2026-09-03)

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

## DEC-098 — Homepage Differentiator May Use Visual Emphasis

**Date:** 2026-09-04
**Status:** APPROVED — page scope SUPERSEDED by DEC-099 (the emphasis exception itself stands)
**Impact:** Low
**Decision Owner:** Business owner (Sedrick)
**Affected Documents:**

* `18-design-system.md` §66 (narrowed for one section on one page)
* `22-decisions-change-log.md` DEC-096 (second knowing use of `--accent` outside a conversion action)
* `components/sections/Differentiator.tsx`
* `data/business/positioning.ts`
* `components/templates/HomePageTemplate.tsx`

### Decision

The homepage differentiator renders a `comparison-table` variant in which **The Sewer Pros column carries visual emphasis** — a tinted cell and a green accent border — and the contractor column does not.

This is a deliberate, scoped exception to the principle that neither column in a model comparison is styled as a winner.

**The tone guardrail is unchanged and still fully binding.** Copy stays factual, non-accusatory, and about business models and incentives only.

### Reason

18 §66 forbids manipulating visual emphasis to misrepresent alternatives. `Differentiator` had applied that rule to itself, styling both columns identically. The owner asked for the distinction to land visually on the homepage.

The rule's purpose is to stop a comparison misrepresenting the alternative. Emphasis added to one column does not do that; a mark placed against the other one would. The exception is drawn at exactly that line.

### Previous State

One editorial split, both columns styled identically, no colour distinction.

### New State

Two variants. `split` is unchanged and is what every service page renders (`showDifferentiator: true`). `comparison-table` is homepage-only and carries the emphasis.

### Scope Limits

This decision does **not** authorise:

* any mark against the contractor column — no cross, X, red, warning colour, or strike-through
* accusatory or integrity-based copy anywhere in the section
* any new claim about repair contractors in general
* ~~extending the emphasis treatment to the `split` variant or to service pages~~ — superseded by DEC-099, which extends it site-wide and removes the `split` variant

A change doing any of those needs its own decision.

### Implementation Notes

Recorded here as well as in the file because it is the **second** knowing exception to DEC-096's "green is for conversion actions" rule — the first was the trust-bar icons, which was documented in `TrustBar.tsx` only. Two in-file exceptions with no central record is how a documented token rule quietly stops being one. A third use of `--accent` outside a conversion action should be a decision, not a habit.

Desktop and mobile render from one `differentiatorComparison.rows` array, so the two layouts cannot drift apart in wording.


---

## DEC-099 — Differentiator Comparison Table Applies Site-Wide

**Date:** 2026-09-04
**Status:** APPROVED
**Impact:** Low
**Decision Owner:** Business owner (Sedrick)
**Affected Documents:**

* `22-decisions-change-log.md` DEC-098 (page scope superseded)
* `components/sections/Differentiator.tsx`
* `components/templates/ServicePageTemplate.tsx`
* `components/templates/AudiencePageTemplate.tsx`
* `data/business/positioning.ts`

### Decision

**Every page that renders the differentiator renders the comparison table.** DEC-098 scoped it to the homepage; that limit is lifted one day later at the owner's direction.

The plain editorial `split` variant and its `differentiatorContrast` data are **removed**, not left in place unreferenced.

### Reason

DEC-098's emphasis exception was written for one page because that is what had been asked for. The reasoning behind it — that emphasis added to one column does not misrepresent the alternative, where a mark against the other one would — was never page-specific, so nothing in it argued for keeping service and audience pages on a different treatment.

Two renderings of the same claim across one site is the drift risk this project keeps designing against. One treatment, one data source.

### Previous State

| Page family | Variant | Heading |
| ----------- | ------- | ------- |
| Home | `comparison-table` | "Diagnosis separated from the sale" |
| Core service (`showDifferentiator: true`, 5 pages) | `split` | "Inspection without a repair sale attached" |
| Audience (6 pages) | `split` | "Why an independent inspection matters here" |

### New State

All twelve render `differentiatorComparison`, heading included.

### Consequences Accepted

**Two contextual headings are gone.** The service and audience headings above were tuned to their page family; `differentiatorComparison` owns one heading for every page, because DEC-098 fixed a single source for it and re-opening a per-page override would restore exactly the drift that decision closed. Reversing this means deciding where the second source lives.

**The section moves to the brand surface on service and audience pages.** `TrustBar` is also `brand`, and 18 §11 names stacked dark sections as an anti-pattern. All eleven affected pages carry a `body` block between the two, audited on 2026-09-04. A future page reaching this section without one must pass `surface="muted"` rather than leave the pair adjacent — noted at both call sites.

### Scope Limits

DEC-098's other limits are unchanged and still binding: no mark against the contractor column, no accusatory or integrity-based copy, no new claim about repair contractors in general.

---

## DEC-100 — Google Review Band Extended to All Three Market Hubs

**Date:** 2026-09-04
**Status:** APPROVED
**Impact:** Moderate
**Decision Owner:** Business owner (Sedrick)
**Affected Documents:**

* `22-decisions-change-log.md` DEC-084, DEC-085 (placement restriction superseded)
* `components/templates/MarketPageTemplate.tsx`, `components/sections/index.ts`
* `types/content.ts` (`MarketPageContent.showReviews`)
* `content/pages/st-louis.tsx`, and San Diego / Las Vegas when their content is written

### Decision

`ReviewMarquee` renders on **all three market hubs**, not the home page alone. The 4.9-star rating and 595-review count are presented as **company-wide**, and are shipped **unattributed** - no line naming the source profile.

### What this supersedes

DEC-085 read: "**No extension to other markets.** St. Louis is the only market with a GBP (01 §21, DEC-020). Verified absent from `/san-diego-ca/` and `/las-vegas-nv/`." That restriction is lifted.

DEC-084 had already noted the opposite direction was open: "Whether the carousel should also appear on St. Louis market and location pages is a live option, and permitted by 01 §20." This decision goes further than that note, to San Diego and Las Vegas as well.

### Reason

The owner's position is that the rating and review count describe **The Sewer Pros as a company**, not a market. On that reading the number is not a local-legitimacy signal per market and 01 §20's prohibition on carrying one market's business facts to another does not bite.

### ⚠ What did NOT change, and is recorded so a later pass does not have to rediscover it

* Only St. Louis has a Google Business Profile (01 §21, DEC-020). San Diego and Las Vegas have none (DEC-021, DEC-022).
* Every review body rendered is a **St. Louis customer's**, and the aggregate is that profile's.
* Nothing on screen says so. The stat carries its verification date and no source attribution, so a visitor on `/las-vegas-nv/` has nothing distinguishing it from a Las Vegas rating. Shipping it unattributed was an explicit instruction, considered and confirmed twice.
* `AggregateRating` / `Review` schema stays prohibited (DEC-028). This is visible content only.

### Implementation Notes

Rendered **unconditionally** in `MarketPageTemplate`, on instruction. An earlier pass gated it on a per-market `showReviews` field so the decision would stay visible in content; the owner asked for it unconditional, which also removes the failure mode where a market silently misses it. The only remaining gate is whether review data exists at all.

The standing "Do NOT add it to `MarketPageTemplate`" warning in `components/sections/index.ts` was rewritten in place to record this reversal rather than deleted, so the next reader sees a decision instead of an absent rule.

⚠ This does not extend to location or service+location templates. Read DEC-085 and this entry together before going further, because the reasoning that made DEC-085 restrictive still describes the data.

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
DEC-097
```

Use sequential IDs for new material decisions.

Do not reuse old numbers.

## Numbering History

The register is append-only and its numbering reflects that history:

```text
DEC-001 .. DEC-060
Foundational project decisions.
Several were revised in place when the build-first model
superseded the earlier pre-build approval interpretation
(notably DEC-015, DEC-016, DEC-018, DEC-019).

DEC-061 .. DEC-089
Operational decisions made during the build.
These IDs are cited directly by application code and
configuration and must not be reassigned.
DEC-086 was never issued.

DEC-090 .. DEC-095
Build-first governance decisions.
```

An earlier draft of this register renumbered the build-first governance
decisions into the DEC-061..066 range, which collided with the
operational decisions already cited in code. That collision is corrected
here: the operational decisions keep their original IDs, and the
governance decisions were moved to DEC-090..095.

---

# 28. Final Governing Principle

> **The Decisions & Change Log exists to preserve important strategic memory, not to govern every implementation action. Record material changes to business capabilities, primary markets, local entity status, core positioning, major architecture, production domain, and other foundational decisions. Let Git, structured registries, the page inventory, and normal project files handle routine evolution. Claude and Claude Code should continue ordinary work without waiting for a decision-log entry unless the work requires a genuine material business or production decision.**
