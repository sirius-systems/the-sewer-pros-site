# The Sewer Pros — Master Page Build List

**Document:** `04-master-page-build-list.md`  
**Project:** The Sewer Pros Website Rebuild  
**Repository:** `the-sewer-pros-site`  
**Status:** Active Page Inventory, Lifecycle, and Indexation Registry  
**Last Updated:** September 3, 2026

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
  id: string;
  title: string;
  slug: string;
  pageType: string;
  status: PageStatus;

  serviceId?: string;
  marketId?: string;
  locationId?: string;
  audienceId?: string;

  indexable: boolean;
  priority?: string;

  parentId?: string;
  relatedPageIds?: string[];

  contentStatus?: string;
  designReference?: string;

  notes?: string;
};
```

The actual implementation may use a different structure if technically preferable.

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

# 55. Final Governing Principle

> **The Master Page Build List is the evolving inventory and lifecycle system for The Sewer Pros website, not a pre-build permission gate. Claude and Claude Code should freely research, draft, generate, build, and evaluate useful page opportunities within verified business boundaries. The primary SEO control is intentional indexation: pages should earn indexability through real business relevance, useful content, distinct intent, and adequate quality. Use structured data and automation aggressively for efficiency while keeping search-engine indexation deliberate and controlled.**
