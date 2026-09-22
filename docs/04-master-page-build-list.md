# The Sewer Pros — Master Page Build List

**Document:** `04-master-page-build-list.md`  
**Project:** The Sewer Pros Website Rebuild  
**Repository:** `the-sewer-pros-site`  
**Status:** Active Page Inventory, Lifecycle, and Indexation Registry  
**Last Updated:** September 22, 2026

---

# 1. Purpose

This document tracks the page inventory and lifecycle of The Sewer Pros website.

It should answer:

- What pages exist?
- What pages are planned?
- What pages are being researched?
- What pages are being drafted?
- What pages are built?
- What pages are published?
- Which published pages should be indexable?
- Which pages are intentionally noindex?
- Which pages are deferred?
- Which pages are being consolidated or retired?

This document is a **planning, inventory, lifecycle, and indexation-control system**.

It is **not intended to function as a bureaucratic permission gate for ordinary development**.

Claude and Claude Code may research, draft, generate, prototype, and build logical pages before every route has been manually entered here.

The inventory should evolve with the project.

---

# 2. Core Operating Principle

The page lifecycle should follow:

```text
Opportunity
→ Candidate
→ Draft
→ Build-Ready
→ Published
→ Indexable / Noindex
→ Measure
→ Improve / Expand / Consolidate / Retire
```

The most important distinction is:

```text
Built
≠
Published
≠
Indexable
```

A page may exist in development without being intended for search-engine indexation.

---

# 3. Build-First Rule

Normal page creation should not be blocked because a route is not yet recorded in this document.

Claude and Claude Code may independently:

* create candidate routes
* create page shells
* research page opportunities
* draft page content
* build template variations
* generate metadata candidates
* implement schema
* create related-page relationships
* generate noindex inventory
* build future expansion pages
* test page-family layouts

when those actions are consistent with the known project:

* business capabilities
* markets
* services
* audiences
* architecture
* design system

The page registry can be updated during or after that work.

---

# 4. What This Document Controls

This document should serve as the primary registry for:

## Page Lifecycle

Where the page currently stands.

## Publishing Intent

Whether the route should exist in production.

## Indexation Intent

Whether the route is intended to appear in search-engine indexes.

## Priority

How important the page is to the current build or SEO roadmap.

## Page Relationships

What service, market, audience, or cluster owns the page.

## Consolidation and Retirement

Whether a page should be merged, redirected, noindexed, or removed.

---

# 5. What This Document Does Not Control

This document should not prevent:

* research
* content ideation
* page drafting
* route prototyping
* component development
* noindex builds
* template testing
* candidate page generation
* metadata generation
* structured data generation
* internal relationship modeling

It also does not replace:

* `05-url-routing-strategy.md`
* `06-master-service-registry.md`
* `07-master-location-registry.md`
* `08-service-location-matrix.md`
* `09-audience-commercial-matrix.md`

Those documents provide taxonomy and relationships.

This document tracks page lifecycle.

---

# 6. Page Status System

Use the following statuses.

## `candidate`

A page opportunity has been identified.

It may come from:

* research
* search demand
* competitor gaps
* service/location data
* customer questions
* commercial opportunity
* audience need
* Search Console data
* AI/LLM query patterns

A candidate does not need to be fully researched yet.

---

## `draft`

Research or content development is underway.

A draft may exist as:

* content brief
* Markdown copy
* route shell
* structured content object
* page prototype

Draft status does not imply production publication.

---

## `build-ready`

The page has sufficient:

* business relevance
* content
* route definition
* design direction
* internal-link relationships

to be implemented as a production-quality page.

---

## `published`

The page exists on the production website.

Published does not automatically mean indexable.

---

## `indexable`

The page is intentionally available for organic search discovery.

Indexable pages should generally:

* return `200`
* use self-referencing canonical markup
* appear in the production sitemap when appropriate
* be accessible through meaningful internal links
* avoid `noindex`
* provide useful standalone content

---

## `noindex`

The page may exist publicly but is not intended for search-engine indexing.

Potential use cases include:

* temporary pages
* test pages
* conversion confirmation pages
* utility pages
* candidate programmatic inventory
* pages awaiting differentiation
* internal campaign pages

---

## `deferred`

The page is strategically valid but is not currently a priority.

Deferred pages may later return to candidate or draft status.

---

## `consolidation-candidate`

The page may overlap with another page and should be evaluated for:

* merge
* canonical restructuring
* redirect
* intent clarification

Do not consolidate automatically without reviewing:

* search traffic
* backlinks
* conversions
* user intent

---

## `retired`

The page should no longer function as an active page.

Retirement may require:

* redirect
* 404
* 410
* removal from internal links
* sitemap removal

Follow:

`20-migration-redirect-plan.md`

---

# 6A. Status Field Model: Build, Publication, and Indexation Separated

The single `status` field in §6 and §27 already conflates three questions a page record answers: is it built, is it published, and is it indexed. This section makes the three explicit without replacing the existing enum — extend records with the finer-grained fields when useful; the single `status` value remains valid and this section defines what it implies for each dimension.

```text
Relationship
→ Candidate
→ Build
→ QA
→ Publication
→ Indexation
→ Measurement
```

| This document's `status` | `buildStatus` | `publicationStatus` | `indexationStatus` |
|---|---|---|---|
| `candidate` | not started | not published | not indexable |
| `draft` | in progress | not published | not indexable |
| `build-ready` | ready to build (content/route ready, not yet rendered) | not published | not indexable |
| *(no separate enum value; a built-but-unreviewed page uses `build-ready` or `published` with `indexationStatus: not-reviewed`)* | **built** | depends on `publicationStatus` | depends on `indexationStatus` |
| *(QA is a build-status checkpoint, not a separate top-level status; use `notes` or the review fields in §11A)* | **in QA** | — | — |
| `published` | built | **published** | not indexable *(unless `indexable: true`)* |
| `indexable` | built | published | **indexable** |
| `noindex` | built | published | **published-noindex** — this document's `noindex` status *is* "published-noindex"; no separate value is introduced |
| `deferred` | varies | not published (or paused) | not indexable |
| `consolidation-candidate` | built (typically) | published (typically) | under review |
| `retired` | — | removed | removed/redirected |

"In progress" and "In QA" are states within `draft`/`build-ready`, not separate top-level values — this document's existing nine-value enum (§6) already covers every state in the task's target list once read this way. Where a repository implementation needs the finer grain, add `buildStatus`, `publicationStatus`, and `indexationStatus` as their own fields (§27) rather than inventing new top-level `status` values.

---

# 7. Indexation Is the Primary SEO Gate

The project should be strictest when deciding whether pages become intentionally indexable.

Before indexing a large page cohort, evaluate:

* Does the business actually provide the service?
* Does the business actually serve the market?
* Is the intent useful?
* Is the page sufficiently differentiated?
* Is the content helpful?
* Does it fit the entity architecture of the site?
* Does it have appropriate internal links?
* Does it avoid misleading local-business signals?
* Is it technically sound?

This does not require every page to be individually approved by a human.

Claude and Claude Code may use structured quality rules and project context to make routine indexation recommendations.

Human approval is most important for **large-scale indexation decisions or material business representation changes**.

---

# 8. Structured Data Scale

The project currently contains approximately:

```text
18 canonical services
579 normalized geographic records
10,422 service × location relationships
```

These relationships should be used productively.

They may support:

* candidate inventory
* page-generation systems
* SEO research
* market prioritization
* metadata generation
* internal relationship models
* build prototypes
* noindex page generation
* publishing cohorts

The relationship is:

```text
Opportunity Data
→ Candidate Pages
→ Build / Evaluate
→ Selective Indexation
```

not:

```text
Opportunity Data
→ Automatically Index Everything
```

---

# 9. Programmatic Page Generation

Programmatic generation is allowed as an implementation method.

The project may generate:

* service + location pages
* audience + service pages
* audience + location pages
* commercial + location pages
* structured resource pages

provided that production indexation remains quality-controlled.

Programmatic generation should be viewed as:

```text
Build Efficiency
```

not:

```text
Automatic SEO Approval
```

---

# 10. Page Quality Before Indexation

Pages intended for indexation should generally satisfy the following.

## Clear Intent

The page should answer a distinct search/user need.

## Business Relevance

The service, audience, and location should reflect actual business operations.

## Useful Content

The page should provide more than token substitution.

## Conversion Purpose

The visitor should have an appropriate next step.

## Internal Context

The page should connect naturally to relevant hubs, services, locations, audiences, or resources.

## Entity Accuracy

The page should not create false offices, services, or business entities.

## Technical Quality

The route should have:

* correct canonical
* correct metadata
* correct indexation state
* working links
* acceptable performance
* no obvious technical errors

---

# 11. Page Quality Tests

Use the following as improvement tests rather than pre-build blockers.

## Location Test

Could the location name be swapped with another city and leave nearly all content unchanged?

If yes, strengthen local differentiation before intentional indexation.

## Service Test

Could the service be swapped with another service while leaving most copy unchanged?

If yes, strengthen service-specific content.

## Audience Test

Could the audience name be swapped without changing the customer journey?

If yes, strengthen audience-specific value.

## Commercial Test

Could a commercial page become a residential page by replacing a few nouns?

If yes, strengthen commercial differentiation.

---

# 11A. Formal Indexability Standard and Review Fields

## Minimum Requirements for an Indexable Page

An indexable page should have:

* a distinct search or customer intent
* legitimate business relevance
* accurate service and market coverage
* meaningful content differentiation
* verified claims
* appropriate local, audience, or commercial context
* a clear conversion purpose
* relevant internal links
* a defined parent and breadcrumb relationship
* appropriate schema
* acceptable technical QA
* sufficient evidence, or a documented reason evidence is not applicable (`00-project-overview.md` §0B, `03-information-architecture.md` §44A)

A page should **not** be intentionally indexable solely because:

* it exists in a matrix (`08-service-location-matrix.md`, `09-audience-commercial-matrix.md`)
* it contains a valid URL
* it targets a city keyword
* it is a token-swapped version of another page
* it is part of a complete service-location grid
* it has minimal generated content

## Page-Quality Review Fields

For every important production page, review and record:

* intent clarity
* business relevance
* service legitimacy
* market legitimacy
* content differentiation
* local evidence
* audience relevance
* conversion usefulness
* internal-link completeness
* schema accuracy
* indexation recommendation

Use these statuses for each criterion:

```text
pass
needs-revision
not-applicable
blocked
not-reviewed
```

Do not mark a criterion `pass` unless the repository contains evidence for that status. A page whose criteria have not yet been reviewed should be recorded `not-reviewed`, not silently assumed to pass (§56A).

---

# 12. Page Family Registry

The site may support the following page families.

| Page Family           | Example                              | Primary Role                    |
| --------------------- | ------------------------------------ | ------------------------------- |
| Core                  | `/about/`                            | Company information             |
| Service               | `/services/sewer-camera-inspection/` | Canonical service authority     |
| Market                | `/st-louis-mo/`                      | Primary geographic hub          |
| Location              | approved local route                 | Geographic authority            |
| Service + Location    | local service route                  | High-intent local search        |
| Audience              | `/home-buyers/`                      | Audience authority              |
| Audience + Service    | audience/service route               | Specific audience need          |
| Audience + Location   | localized audience route             | Local audience intent           |
| Commercial            | `/commercial/`                       | Commercial authority            |
| Commercial Service    | commercial service route             | Commercial transactional intent |
| Commercial + Location | localized commercial route           | Local commercial intent         |
| Comparison            | comparison route                     | Decision support                |
| Alternative           | alternatives route                   | Decision support                |
| Resource              | educational route                    | Topical authority               |
| Contact               | `/contact/`                          | General conversion              |
| Conversion            | request/thank-you route              | Lead flow                       |

Exact URL patterns remain controlled by:

`05-url-routing-strategy.md`

---

# 12A. Page-Family Publication Standards

Each major page family has a distinct purpose and a distinct publication standard. This does not replace §10's general indexability criteria; it applies them per family.

## Core and Brand Pages

Examples: homepage, About, Contact, reviews.

Standard: establish brand, trust, conversion, and entity clarity.

## Service Hubs

Standard: establish a canonical service entity, explain the service clearly, connect to relevant markets, audiences, problems, resources, and CTAs, and use only verified business capabilities.

## Market Hubs

Standard: represent legitimate market coverage, avoid implying an office unless verified (`00-project-overview.md` §5A), include useful market-specific context, and connect users to relevant services and conversion paths.

## Service-Market Pages

Standard: have a distinct local commercial purpose, include meaningful market-specific content, include verified service coverage, include a differentiated CTA, and avoid city-name substitution.

## Audience Pages

Standard: address a specific audience need, explain the relevant workflow, connect to appropriate services, and use an audience-specific CTA.

## Audience-Service Pages

Standard: demonstrate a distinct audience-service workflow, with different needs, deliverables, objections, and conversion logic from the underlying service page — not simply an audience keyword inserted into service copy.

## Problem and Resource Pages

Standard: answer a real customer question, provide a direct and useful explanation, connect to relevant services or audiences, and avoid existing purely as informational content with no business or user value.

## Evidence Pages

Examples: case studies, inspection examples, report explainers, review and proof pages.

Standard: use truthful, attributable, or appropriately anonymized evidence (`00-project-overview.md` §0B). None of this content currently exists in the repository.

---

# 13. Core Launch Pages

The following represent the expected foundational site structure.

Exact current status should be updated as the build progresses.

## Company / Core

| Page           | Status                  | Indexation |
| -------------- | ----------------------- | ---------- |
| Homepage       | build-ready / published | indexable  |
| About          | build-ready / published | indexable  |
| Contact        | build-ready / published | indexable  |
| Services Hub   | build-ready / published | indexable  |
| Locations Hub  | build-ready / published | indexable  |
| Commercial Hub | build-ready / published | indexable  |
| Resources Hub  | build-ready / published | indexable  |

Status should reflect actual repository state rather than remaining static.

---

# 14. Primary Market Hubs

The three initial market hubs are:

| Market        | Status                  | Intended Indexation |
| ------------- | ----------------------- | ------------------- |
| St. Louis, MO | build-ready / published | indexable           |
| San Diego, CA | build-ready / published | indexable           |
| Las Vegas, NV | build-ready / published | indexable           |

These are service-market pages.

They must not automatically imply physical offices.

---

# 15. Canonical Service Pages

Canonical service pages should be generated from the approved service taxonomy in:

`06-master-service-registry.md`

Each major service should generally have one strongest general authority page.

Examples include approved services such as:

* Sewer Inspection
* Sewer Camera Inspection
* Sewer Cleaning
* Hydro Jetting
* Sewer Line Locating
* Drain Cleaning
* Pre-Purchase Sewer Inspection
* Commercial Sewer Services

The service registry determines exact canonical names.

This page inventory should track implementation status.

---

# 15A. Independent Second-Opinion Page

`svc-independent-sewer-second-opinion` is a registry-confirmed `derived_service` at `phase_2_candidate` tier (`data/services/master-service-registry.json`) — approved as a strategic concept, not built as a standalone page.

| Field | Value |
|---|---|
| Page family | Service (canonical), comparison-adjacent |
| Business purpose | Independent evaluation and documentation: help a customer distinguish the observed, documented condition of a sewer line from a proposed repair solution |
| Primary audience | Any customer who has already received a repair or replacement recommendation — overlaps home buyers, home sellers, and homeowners rather than one exclusive audience |
| Conversion purpose | Request an independent sewer second opinion (`00-project-overview.md` §7A) |
| Relationship to inspection/diagnosis/repair | Inspect and document the line, present findings, and let the customer weigh them against a repair recommendation they already received. The Sewer Pros does not perform the repair itself, and has no financial incentive in the outcome |
| Build status | Not built. No content file, no route |
| Publication status | Not published |
| Indexation status | Not indexable (no page exists) |

Approved positioning concept:

> **Do Not Let a Sales-Driven Recommendation Make the Decision for You**

This concept is already implemented site-wide as a persuasive section on existing pages (`components/sections/IndependentProcess.tsx`, live on the homepage and 15 other pages as of the 2026-09-22 rollout) — that is a component embedded on already-built pages, not the standalone `svc-independent-sewer-second-opinion` service page itself, which remains unbuilt. Building the standalone page can reuse the same approved concept and copy pattern rather than originating new positioning.

This is not an accusation against any provider — it states The Sewer Pros' own position (no repair contract to sell). Do not imply repair is never necessary; do not accuse competitors of dishonesty (CLAUDE.md §9, §27).

Priority: `00-project-overview.md` §0A priority 6.

---

# 16. Service + Location Pages

Service + location pages may be generated when they represent useful local search intent.

Examples:

```text
Sewer Camera Inspection in St. Louis
Hydro Jetting in Las Vegas
Pre-Purchase Sewer Inspection in San Diego
```

These pages may move through:

```text
candidate
→ draft
→ build-ready
→ published
→ indexable
```

without requiring a separate strategic decision for each page.

Indexation should be based on:

* actual service coverage
* page usefulness
* market relevance
* content differentiation
* site architecture

---

# 17. Location Pages

Location pages may be created from verified geographic data.

They may support:

* market navigation
* service-area discovery
* local search
* nearby-area relationships
* local content hubs

A geographic record alone does not prove:

* a physical office
* a local branch
* a GBP
* a dedicated local phone number

Location pages should accurately represent service coverage.

---

# 18. Audience Pages

Audience pages may be created when the user journey meaningfully differs.

Important candidate audiences include:

* homeowners
* home buyers
* real-estate agents
* home inspectors
* property managers
* commercial property owners

The exact taxonomy should generally align with:

`09-audience-commercial-matrix.md`

A candidate audience page does not require a new decision-log entry.

---

# 19. Audience + Service Pages

Audience + service pages may be especially valuable where the service takes on a different role for a specific customer type.

Examples:

```text
Sewer Inspections for Home Buyers
Hydro Jetting for Property Managers
Commercial Drain Cleaning for Property Managers
```

These pages should combine genuinely distinct:

```text
Audience Intent
+
Service Intent
```

rather than duplicating the canonical service page.

---

# 20. Audience + Location Pages

Audience + location pages may be used when local and audience intent both add meaningful value.

Examples may include:

```text
Sewer Inspections for Home Buyers in St. Louis
```

or another validated combination.

These pages should not be created merely to multiply route count.

They may still be generated as candidates and evaluated before indexation.

---

# 21. Commercial Pages

Commercial architecture may include:

* commercial hub
* commercial service pages
* property-management pages
* approved industry pages
* commercial + location pages
* commercial educational resources

Commercial content should address actual commercial needs.

Do not create commercial pages by simply adding "commercial" to residential content.

---

# 22. Comparison Pages

Comparison pages can be developed where users are making a meaningful choice.

Potential topics include:

* Hydro Jetting vs. Snaking
* Sewer Cleaning vs. Sewer Repair
* Sewer Camera Inspection vs. Standard Home Inspection
* Independent Sewer Inspection vs. Repair-Company Inspection
* Drain Cleaning vs. Sewer Cleaning

Comparison pages should help users understand differences rather than forcing a predetermined answer.

---

# 23. Alternative Pages

Alternative pages may serve users researching major sewer decisions.

Potential topics include:

* Alternatives to Sewer Replacement
* What to Do Before Replacing a Sewer Line
* Alternatives to Repeated Drain Snaking
* Can a Sewer Be Cleaned Instead of Replaced?

These pages should not imply that repair is never necessary.

The primary strategic opportunity is independent inspection and evidence.

---

# 24. Resource Pages

Resources should be organized into topic clusters.

Priority clusters may include:

* sewer inspection
* sewer camera inspection
* sewer cleaning
* hydro jetting
* sewer line locating
* sewer problems
* real estate
* home buyers
* second opinions
* commercial services

Resource pages may be added as research reveals useful questions.

There is no requirement that every resource be manually pre-approved before drafting.

---

# 24A. Evidence Pages and Evidence-Readiness

Evidence is a distinct page family from resources (§12, §12A): anonymized inspection findings, report examples, video stills, case studies, local reviews, buyer/agent checklists (`00-project-overview.md` §0B, `03-information-architecture.md` §44A).

For local, service-market, audience-service, and commercial pages, track an `evidenceStatus` field (§27):

```text
verified-local-proof-available
verified-business-proof-available
draft-proof-needed
proof-not-applicable
blocked-pending-verification
```

None of the current 70 pages has been reviewed against this field (§56A); it is a planning field going forward, not a retroactive audit result.

Do not fabricate evidence to satisfy the field. If a page needs evidence it does not yet have, record `draft-proof-needed` rather than inventing a review, a statistic, or a case study.

---

# 25. Resource Publishing Rule

A resource should generally be indexable when it:

* answers a useful question
* supports a relevant topic cluster
* contains accurate content
* provides meaningful value
* links to relevant services or resources
* does not merely duplicate another article

Do not impose arbitrary publication quotas.

---

# 26. Design Reference Mapping

Pages should use the reference templates defined in:

`18-design-system.md`

Primary mapping:

| Page Family        | Reference                                |
| ------------------ | ---------------------------------------- |
| Homepage           | `homepage-performance.webp`              |
| Core Service       | `service-page-performance.webp`          |
| Location / Market  | `location-page-performance.webp`         |
| Service + Location | `location-service-page-performance.webp` |
| Audience           | `audience-page-performance.webp`         |
| Audience + Service | `audience-service-page.webp`             |

The design template should accelerate building page inventory.

It should not function as another approval gate.

---

# 27. Page Inventory Fields

For structured implementation, each page record may include fields such as:

```ts
type PageStatus =
  | "candidate"
  | "draft"
  | "build-ready"
  | "published"
  | "indexable"
  | "noindex"
  | "deferred"
  | "consolidation-candidate"
  | "retired";

type PageRecord = {
  id: string;              // pageId
  title: string;
  slug: string;
  pageType: string;
  pageFamily?: string;     // §12: Core, Service, Market, Service + Location, etc.
  canonicalPath?: string;  // governed by 05-url-routing-strategy.md
  status: PageStatus;      // the existing single-value status (§6, §6A)

  parentId?: string;       // parentPage
  primaryIntent?: string;  // one clear primary intent (§10, §11A)
  relatedPageIds?: string[];

  serviceId?: string;
  marketId?: string;
  locationId?: string;
  audienceId?: string;
  commercialSegmentId?: string;

  // Finer-grained lifecycle, additive to `status` (§6A). Optional:
  // a record may carry only `status`, or `status` plus any of these.
  buildStatus?: "not-started" | "in-progress" | "built" | "in-qa";
  publicationStatus?: "not-published" | "published" | "removed";
  indexationStatus?: "not-indexable" | "indexable" | "published-noindex" | "deferred" | "retired";
  contentStatus?: string;
  evidenceStatus?:
    | "verified-local-proof-available"
    | "verified-business-proof-available"
    | "draft-proof-needed"
    | "proof-not-applicable"
    | "blocked-pending-verification";
  conversionStatus?: string; // e.g. which conversion action this page maps to
  schemaStatus?: string;
  internalLinkStatus?: string;

  indexable: boolean;      // legacy convenience flag; keep in sync with indexationStatus
  priority?: string;       // §28, §28A

  designReference?: string;

  notes?: string;
};
```

The actual implementation may use a different structure if technically preferable. `data/pages/approved-pages.ts` today implements a subset of this model (`id`, `pageType`, `status`, `indexable`, market/service/location/audience associations, `parentId`) — the additional fields above are the planning model this document uses; they do not require an immediate code change to be useful for review and audit work (§11A, §56A).

---

# 28. Suggested Page Priority Levels

Priority may be tracked using:

## `P0`

Critical launch / business infrastructure.

Examples:

* homepage
* major services
* primary market hubs
* contact
* essential conversion pages

## `P1`

High-value near-term SEO or conversion pages.

Examples:

* important service + market pages
* pre-purchase inspection
* home-buyer pages
* major commercial pages

## `P2`

Strategic expansion.

Examples:

* selected location pages
* secondary audience pages
* supporting comparisons
* important resources

## `P3`

Long-tail or experimental opportunity.

Examples:

* lower-demand local combinations
* niche resources
* emerging query patterns

Priority is a planning tool, not a hard build gate.

---

# 28A. Revised Priority Framework (Business Value and Readiness)

This sequenced framework supersedes the generic P0-P3 buckets above for whole-project planning; P0-P3 remain valid as a quick per-page tag (roughly: P0 ≈ Priority 1-2, P1 ≈ Priority 3, P2 ≈ Priority 3-4, P3 ≈ Priority 4-5). It mirrors `00-project-overview.md` §0A.

## Priority 1 — Foundation and Conversion

Homepage, About, Contact, core conversion components, market selector, forms and tracking, primary navigation.

## Priority 2 — Primary Commercial Coverage

Primary service hubs (the six `core_service` records, `06-master-service-registry.md`), the three authentic market hubs, highest-value service-market pages, high-value audience hubs.

## Priority 3 — Audience Conversion Pathways

Home buyer, home inspector, real estate agent, homeowner, property manager, and contractor/remodeler journeys; selective audience-service pages.

## Priority 4 — Strategic Expansion

The independent sewer second-opinion page (§15A), problem pages, pipe-material pages, buyer education, service comparisons, local guidance.

## Priority 5 — Evidence and Authority

Case studies, inspection findings, report examples, video stills, downloadable checklists, local proof assets (`00-project-overview.md` §0B).

These tiers are planning and sequencing tools, not permission gates for ordinary development (§3, §54).

---

# 29. Candidate Page Creation

Candidate pages may be added based on:

* keyword research
* Search Console
* Bing data
* competitor research
* customer questions
* internal site-search data
* sales feedback
* local market research
* matrix relationships
* AI/LLM query analysis
* new commercial opportunities

Candidate creation should be easy.

The project should not require a formal strategic decision every time a useful page idea is discovered.

---

# 30. Build Cohorts

Large page families may be built in cohorts.

Example:

```text
Cohort 1
Top St. Louis service + location pages

Cohort 2
Top San Diego pre-purchase pages

Cohort 3
Las Vegas commercial pages
```

Cohorts allow:

* efficient production
* consistent QA
* easier performance comparison
* controlled indexation

Cohorts are encouraged for scale, not required for individual pages.

---

# 31. Cohort Indexation

A cohort may be:

```text
Built
→ Published Noindex
→ QA
→ Selectively Index
```

where appropriate.

This provides flexibility to generate at scale without exposing low-quality inventory to search engines prematurely.

---

# 32. Publishing Does Not Require Indexation

Useful pages may exist on the production site while remaining noindex.

Examples:

* campaign pages
* unfinished expansion pages
* forms
* temporary pages
* future market inventory
* QA pages

A production route is not automatically an SEO landing page.

---

# 32A. Indexation Review After Construction and QA

Indexation must be reviewed after page construction and QA, not assumed from build status. Review should consider: page quality, search intent, business relevance, differentiation, evidence, internal-link value, conversion value, technical quality, potential cannibalization, and operational legitimacy (§11A).

The project may build more pages than it intentionally indexes. The inventory must be able to record, in addition to §6's status values:

```text
Built but noindex           → status: noindex, buildStatus: built
Published but deferred      → status: deferred, publicationStatus: published
Draft candidate             → status: candidate or draft
Indexable after QA          → status: indexable, following a completed §11A review
Retired or redirected       → status: retired
```

These map onto the existing enum (§6, §6A) rather than adding new top-level values.

---

# 33. Sitemap Rule

Production sitemaps should contain intentional canonical indexable pages.

Do not automatically generate sitemap entries from:

* every service record
* every location record
* every matrix relationship
* every candidate route

Candidate, draft, noindex, and retired inventory should generally remain outside the indexable sitemap.

---

# 34. Internal Linking Rule

Internal links should generally point to useful live destinations.

Do not automatically expose all candidate inventory through:

* header
* footer
* service grids
* location grids
* related-page components

Published indexable pages should receive meaningful internal integration.

Candidate or noindex pages may remain outside primary navigation until appropriate.

---

# 35. Orphan Page Rule

An important indexable page should not be orphaned.

Before intentional indexation, it should generally have:

* a logical parent/hub
* at least one meaningful contextual or navigational inbound path
* useful outbound relationships

This does not mean every draft must immediately have a full internal-link network.

---

# 35A. Page Relationship Audit Checklist

Every production page must have:

* a parent page
* a defined page family (§12)
* breadcrumb support where applicable
* at least one relevant internal link from another page
* links to relevant sibling or related pages
* a clear conversion relationship
* an intentional sitemap decision (§33)

Add these checks to the page-audit process (§56A). Use the checklist to identify: orphan pages, duplicate intent, cannibalization, unsupported relationships, weak matrix-generated pages, and pages with no clear CTA.

---

# 36. Canonical Page Authority

Canonical service pages should remain the strongest general source for their service topic.

Service + location pages should support localized intent.

Audience pages should support audience intent.

Resource pages should support informational intent.

Avoid creating multiple pages with indistinguishable purposes.

---

# 37. Search Cannibalization

If multiple pages begin competing for the same search intent:

* review query patterns
* compare page purpose
* review conversions
* inspect internal links
* consider consolidation
* clarify page positioning

Do not assume multiple ranking URLs automatically require deletion.

---

# 38. Consolidation

A page may become a consolidation candidate when:

* another page satisfies the same intent better
* content differentiation remains weak
* search engines consistently favor another canonical page
* maintenance cost exceeds strategic value

Before consolidation, review:

* traffic
* backlinks
* conversions
* ranking history

Follow the migration strategy for redirects.

---

# 39. Retirement

A page may be retired when:

* service is no longer offered
* market is no longer served
* content is obsolete
* intent is redundant
* page no longer serves a strategic purpose

Retirement should include appropriate:

* redirects
* sitemap updates
* internal-link updates
* canonical handling

Do not simply delete valuable pages without review.

---

# 40. Existing Page Protection

Post-launch, pages with strong:

* organic traffic
* conversions
* backlinks
* rankings

should be treated carefully.

Before changing status from indexable or before major consolidation, evaluate existing value.

The page registry should help protect successful assets.

---

# 41. Performance Feedback

After launch, page status and priority may be influenced by:

* search impressions
* clicks
* conversions
* lead quality
* backlink acquisition
* AI referrals
* market growth
* commercial performance

The page inventory should evolve based on evidence.

---

# 42. Page Decision Framework

When reviewing a candidate for indexation, ask:

```text
Does this page serve a real user?
Does it represent a real service?
Does the geography make sense?
Is the intent distinct?
Can we create useful content?
Does it support the business?
Does it fit the architecture?
Can users reach it naturally?
```

If yes, it may be a strong indexation candidate.

If the answer is uncertain, the page may remain:

```text
candidate
draft
or noindex
```

while the project learns more.

---

# 43. Hard Business Guardrails

Regardless of page status, do not publicly represent:

* unverified services
* fake physical offices
* fake addresses
* fake Google Business Profiles
* unverified pricing
* unverified guarantees
* unverified certifications
* unsupported emergency availability
* repair/replacement as offered when it is not

These are business-truth restrictions, not page-inventory restrictions.

---

# 44. Decision Log Relationship

Normal page creation does not require a new entry in:

`22-decisions-change-log.md`

Use the decision log when page changes reflect a material strategic decision, such as:

* new major service
* new primary market
* new physical branch
* major business-positioning change
* major post-launch route architecture change

Routine page expansion belongs in:

* this inventory
* project data
* Git history

---

# 45. Git Relationship

Git records:

```text
What changed?
```

This page registry records:

```text
What is the current lifecycle and search intent of our pages?
```

Do not duplicate every Git change here.

Update this document or its structured equivalent when page lifecycle materially changes.

---

# 46. Repository Implementation

The Markdown document may eventually be supplemented or replaced operationally by structured data such as:

```text
data/pages.ts
data/page-registry.ts
content/page-registry.json
```

provided that:

* the data is version-controlled
* page lifecycle remains visible
* indexation status remains explicit
* project contributors can understand it

The repository should avoid maintaining multiple conflicting page inventories.

---

# 47. Automated Registry Updates

Where technically practical, tooling may automatically report:

* routes built
* routes published
* indexable routes
* sitemap routes
* missing inventory records

Automation is encouraged if it reduces manual administrative work.

The page registry should support the build rather than become an obstacle to it.

---

# 48. Page Discovery Rule

If Claude or Claude Code discovers a useful page opportunity while building another page:

```text
Identify Opportunity
→ Add Candidate
→ Continue Current Work
```

Do not interrupt productive work merely because the candidate was not known before the task began.

---

# 49. New Location Discovery Rule

If legitimate geographic research identifies an additional relevant service area:

```text
Verify Geography
→ Add Candidate Location Data
→ Evaluate Page Opportunity
→ Continue
```

Human approval is not necessary merely to record legitimate geographic research.

Do not represent the location as a physical branch.

---

# 50. New Search Intent Discovery Rule

If research reveals a valuable search intent such as:

```text
second opinion before sewer replacement
```

Claude may:

* create a candidate
* draft content
* recommend its cluster placement
* build a page if appropriate

without requiring a new strategic decision.

Human approval is only needed if the page would materially misrepresent business capabilities.

---

# 51. Launch Philosophy

At launch, prioritize a strong useful foundation rather than maximum route count.

Launch inventory should cover:

* core business information
* major services
* three primary markets
* high-value audiences
* commercial entry points
* conversion paths
* initial resources

Additional inventory may already be built and kept noindex for later evaluation.

---

# 52. Post-Launch Expansion

After launch, use:

```text
Performance Data
+
Search Opportunity
+
Business Value
+
Content Capability
→ Expansion
```

not:

```text
Unused Matrix Row
→ Automatically Publish
```

The matrix should accelerate discovery, while performance helps determine priority.

---

# 53. Page Inventory Success

The page inventory is working correctly when it helps the team understand:

* what exists
* what is being built
* what is indexed
* what is performing
* what should be improved
* what should be built next
* what should be consolidated
* what should be retired

It is failing when developers avoid useful work because they believe every route requires manual permission before it can exist.

---

# 54. Core Page-Governance Summary

Use:

```text
Business Truth
→ Hard Guardrail

Page Creation
→ Flexible

Drafting
→ Flexible

Route Generation
→ Flexible

Template Development
→ Flexible

Production Publication
→ Deliberate

Intentional Indexation
→ Quality Controlled

Large-Scale Indexation
→ Strategic Review
```

---

# 54A. Document Hierarchy

```text
00-project-overview.md
→ Overall project direction

03-information-architecture.md
→ Site relationships and page-family structure

04-master-page-build-list.md (this document)
→ Page lifecycle, production inventory, and indexation status

05-url-routing-strategy.md
→ Canonical paths and route rules

06-master-service-registry.md
→ Canonical services

07-master-location-registry.md
→ Canonical geographic records

08-service-location-matrix.md
→ Service/geographic relationships

09-audience-commercial-matrix.md
→ Audience and commercial relationships

15-schema-entity-strategy.md
→ Schema and entity implementation

16-internal-linking-strategy.md
→ Internal relationship rules

17-conversion-architecture.md
→ CTA and conversion behavior
```

This document should not duplicate or override the canonical data in the registries and matrices — it selects which of their relationships become production pages, and tracks each one's lifecycle.

---

# 55. Final Governing Principle

> **The Master Page Build List is the evolving inventory and lifecycle system for The Sewer Pros website, not a pre-build permission gate. Claude and Claude Code should freely research, draft, generate, build, and evaluate useful page opportunities within verified business boundaries. The primary SEO control is intentional indexation: pages should earn indexability through real business relevance, useful content, distinct intent, and adequate quality. Use structured data and automation aggressively for efficiency while keeping search-engine indexation deliberate and controlled.**

---

# 56. Implementation Snapshot (September 21, 2026)

This section reconciles the inventory with the repository. The authoritative machine-readable registry is `data/pages/approved-pages.ts`; this section summarizes it and does not replace it.

Verified against commit `5b9586a`: 70 approved records, all `status: launch` and `indexable: true`; `gatedPages` is empty; all 70 are built (content exists and a route is generated); the production sitemap lists exactly those 70 URLs. Built and indexable here reflects the registry's own `launch` decision, not the existence of a route.

| Family | Built | Indexable | Paths |
|---|---|---|---|
| Home | 1 | 1 | `/` |
| Core | 3 | 3 | `/about/`, `/contact/`, `/faq/` |
| Hubs | 5 | 5 | `/services/`, `/locations/`, `/for/`, `/commercial/`, `/resources/` |
| Service | 10 | 10 | 9 under `/services/` (drain-cleaning, hydro-jetting, pre-purchase-sewer-inspection, preventative-sewer-maintenance, recurring-sewer-backup-diagnosis, sewer-camera-inspection, sewer-cleaning-camera-inspection, sewer-cleaning, sewer-line-locating) plus `/st-louis-mo/sewer-lateral-inspection-reporting/` |
| Market | 3 | 3 | `/st-louis-mo/`, `/san-diego-ca/`, `/las-vegas-nv/` |
| Location | 16 | 16 | St. Louis 5 (St. Louis City, Chesterfield, Ballwin, Florissant, St. Charles); San Diego 7 (San Diego, Mission Valley, Carlsbad, Chula Vista, Escondido, Oceanside, San Marcos); Las Vegas 4 (Las Vegas, Henderson, North Las Vegas, Summerlin) |
| Service + Location | 14 | 14 | St. Louis 6, San Diego 8. **Las Vegas has none** |
| Audience | 6 | 6 | `/for/` home-buyers, home-sellers, real-estate-agents, home-inspectors, property-managers, hoa-communities |
| Commercial | 5 | 5 | `/commercial/` sewer-camera-inspection, sewer-cleaning, hydro-jetting, drain-cleaning, preventative-maintenance |
| Comparison | 2 | 2 | `/compare/` hydro-jetting-vs-sewer-snaking, independent-sewer-inspection-vs-repair-company |
| Resource | 5 | 5 | `/resources/` how-to-read-a-sewer-camera-inspection-video, st-louis-city-sewer-lateral-program, st-louis-county-sewer-lateral-program, st-louis-sewer-lateral-report, what-is-in-a-sewer-camera-inspection-report |

Other lifecycle states:

* **Gated or noindex:** none. The five Las Vegas records moved from `launch_pending_validation` to `launch` under DEC-080. Only the framework 404 pages emit noindex
* **Deferred:** `svc-independent-sewer-second-opinion` (Phase 2, approved, not built, not in the registry)
* **Retired:** none
* **Not built and not in the registry:** audience + service, audience + location, commercial + location, alternative pages, and any Las Vegas service + location pages. These are candidates only, not approved records

The families table in §13 to §24 describes intent. Where it says "build-ready / published", the state above applies.

---

# 56A. 70-Page Inventory Audit Process

§56's snapshot confirms *what exists*: 70 built, launch-status, indexable pages. It does not confirm that all 70 satisfy the evidence-led quality model in §11A — that per-page review has not been performed as of this writing (September 22, 2026).

**Do not assume all 70 pages should remain permanently indexable, and do not retire or noindex any of them merely because they have not yet been individually reviewed.** Record each as requiring review where evidence is incomplete, per the outcomes below.

## Required Audit Process, Per Page

1. Confirm the page exists and renders.
2. Confirm its route and canonical URL.
3. Confirm its page family (§12).
4. Confirm its primary intent.
5. Confirm its business and market relevance.
6. Confirm content differentiation (§11 tests).
7. Confirm internal-link relationships (§35A).
8. Confirm schema.
9. Confirm conversion purpose.
10. Assign a revised indexation recommendation.

## Possible Outcomes

* Keep indexable
* Revise before indexation
* Keep published but noindex
* Defer
* Retire or redirect

## Current Status

No page in the 70-page inventory has completed this audit. All 70 remain in their current implemented state (`status: launch`, `indexable: true`, per §56) until reviewed. This is priority 4 in `00-project-overview.md` §0A. Performing the audit is future work, not a task this document itself completes — this section defines the process, it does not execute it.
