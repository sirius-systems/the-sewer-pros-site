# The Sewer Pros — Claude Repository Instructions

**Document:** `CLAUDE.md`  
**Project:** The Sewer Pros Website Rebuild  
**Repository:** `the-sewer-pros-site`  
**Status:** Active Repository Operating Instructions  
**Applies To:** Claude Code and any Claude instance working directly in this repository

---

# 1. Purpose

This file defines how Claude should work inside the `the-sewer-pros-site` repository.

The goal is to help Claude **move the website forward efficiently** while preserving:

- business accuracy
- service accuracy
- geographic legitimacy
- SEO quality
- design consistency
- technical maintainability
- conversion quality
- production safety

The project documentation provides context, standards, architecture, and business truth.

It should **not** be interpreted as a collection of approval gates that prevents normal development.

---

# 2. Build-First Operating Principle

Claude should default to making progress.

The operating model is:

```text
Understand
→ Build
→ Validate
→ QA
→ Publish
→ Decide Indexation
→ Measure
→ Improve
```

not:

```text
Understand
→ Stop
→ Request Approval
→ Update Multiple Docs
→ Request Approval Again
→ Build
```

Claude may independently perform ordinary, reversible implementation work when it is consistent with known business facts and project direction.

This includes:

* creating routes
* creating page shells
* building complete pages
* creating reusable components
* drafting and implementing content
* creating metadata
* implementing schema
* creating internal links
* adding structured data
* adding candidate geographic relationships
* adding page relationships
* creating forms
* improving existing layouts
* adapting page templates
* fixing responsive issues
* improving accessibility
* improving performance
* refactoring code
* fixing technical SEO
* creating draft or noindex pages
* researching implementation questions
* making reasonable design decisions
* improving conversion paths
* adding FAQs
* creating related-content modules

Claude does **not** need human approval for every normal implementation decision.

---

# 3. When Claude Should Stop and Ask

Human input should be requested when a missing decision would materially change:

## Business Capabilities

Examples:

* adding sewer repair as an actual service
* adding sewer replacement
* adding a new major service the company may not provide
* removing an existing major service

## Business Facts

Examples:

* pricing
* guarantees
* warranties
* free offers
* emergency availability
* same-day availability
* operating hours
* licenses
* certifications
* years in business
* physical locations
* phone numbers when no verified number exists

## Business Structure

Examples:

* establishing a new physical branch
* representing a market as an office
* creating a new Google Business Profile
* changing the primary business positioning

## Major Production Decisions

Examples:

* changing the production domain
* changing the hosting platform
* destructive database/content operations
* major post-launch URL restructuring
* irreversible migration actions

## Security

Examples:

* exposing credentials
* committing secrets
* publishing private customer information

Routine implementation choices should not trigger unnecessary approval requests.

---

# 4. Resolve Before Escalating

When something is unclear, Claude should first attempt to resolve it.

Use this sequence:

```text
1. Inspect current repository context.
2. Check the most relevant project document.
3. Check existing structured data or implementation.
4. Research externally when appropriate.
5. Make a reasonable reversible implementation decision.
6. Continue.
```

Only escalate when the unresolved issue falls into one of the material categories described above.

Do not ask the user to resolve questions that can reasonably be answered through existing project information or normal professional judgment.

---

# 5. Site OS Master Relationship

This project works alongside the **Site OS Master** Claude skill.

Use this relationship:

```text
Site OS Master
=
Reusable methodology, workflows, QA, research processes, and build practices

The Sewer Pros Repository
=
Project-specific business facts, architecture, content, design, and implementation
```

Site OS should help Claude perform the work.

It should not create unnecessary administrative gates.

If a reusable Site OS process conflicts with an explicit current Sewer Pros project decision, use the Sewer Pros project decision.

---

# 6. Compatibility Rule for Older Project Documents

Several project documents were initially written with highly restrictive approval language.

Those documents are being updated.

Until all documents are revised, interpret older language according to the following rule:

> **Build restrictions generally apply to intentional production publication and indexation, not to ordinary development, research, drafting, page generation, component creation, or testing.**

For example, older language such as:

```text
Do not create this page unless it is approved in the Master Page Build List.
```

should normally be interpreted as:

```text
Do not intentionally make large-scale or low-quality page inventory indexable without validating business relevance and page quality.
```

This compatibility rule does **not** override hard business-truth requirements.

Claude still may not fabricate:

* services
* offices
* addresses
* pricing
* licenses
* guarantees
* business capabilities

---

# 7. Project Summary

The Sewer Pros website is a multi-market sewer inspection, diagnostics, locating, cleaning, and educational platform.

Initial primary markets:

* St. Louis, Missouri
* San Diego, California
* Las Vegas, Nevada

The website uses a single-domain multi-market architecture.

---

# 8. Primary Business Positioning

The Sewer Pros specializes in approved services centered on:

* sewer inspection
* sewer camera inspection
* sewer diagnostics
* sewer cleaning
* hydro jetting
* sewer line locating
* drain cleaning
* pre-purchase sewer inspection
* commercial sewer services
* commercial drain services

The core differentiator is:

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

---

# 9. Repair and Replacement Guardrail

Do not present The Sewer Pros as a sewer repair or replacement contractor unless the business explicitly approves that capability.

Do not advertise the following as offered services without approval:

* sewer line repair
* sewer replacement
* trenchless replacement
* pipe bursting
* sewer lining
* CIPP
* excavation
* structural sewer repair
* sewer installation

Repair-related topics may still be discussed educationally.

Appropriate contexts include:

* second opinions
* evaluating a repair recommendation
* understanding whether replacement may be needed
* sewer cleaning vs. repair
* what to do before excavation
* structural conditions visible during inspection

Do not accuse competitors of fraud, dishonesty, or unnecessary repair recommendations.

The differentiator should focus on The Sewer Pros' business model and independent diagnostic position.

---

# 10. Initial Market Model

## St. Louis, Missouri

St. Louis currently has the strongest established local entity presence and an existing Google Business Profile.

Potential strategic themes include:

* sewer inspection
* camera inspection
* sewer laterals
* pre-purchase inspection
* real estate
* sewer cleaning
* hydro jetting
* line locating

Municipality-specific sewer lateral rules must be verified individually.

Do not assume a St. Louis-area municipal rule applies throughout the metro.

---

## San Diego, California

San Diego is currently treated as a service market without a verified Google Business Profile.

Do not fabricate:

* San Diego office
* San Diego storefront
* public San Diego business address
* San Diego branch
* San Diego GBP

Organic content may still target legitimate San Diego service demand.

---

## Las Vegas, Nevada

Las Vegas is currently treated as a service market without a verified Google Business Profile.

Do not fabricate:

* Las Vegas office
* Las Vegas storefront
* Las Vegas branch
* public Las Vegas business address
* Las Vegas GBP

Organic content may still target legitimate Las Vegas service demand.

---

# 11. Service Market vs. Business Location

This distinction is mandatory:

```text
Service Market
≠
Physical Business Location
```

A page targeting San Diego, Las Vegas, St. Louis, or another approved area does not automatically imply that The Sewer Pros maintains a public office there.

Use language such as:

```text
Serving San Diego
Sewer Inspection in Las Vegas
Sewer Services Across the St. Louis Area
```

when accurate.

Do not use:

```text
Our San Diego Office
Our Las Vegas Location
Visit Our Local Office
```

unless verified.

---

# 12. Repository Documents

The project currently includes:

```text
00-project-overview.md
01-business-brand-foundation.md
02-nextjs-technical-architecture.md
03-information-architecture.md
04-master-page-build-list.md
05-url-routing-strategy.md
06-master-service-registry.md
07-master-location-registry.md
08-service-location-matrix.md
09-audience-commercial-matrix.md
10-seo-strategy.md
11-local-seo-gbp-strategy.md
12-content-aeo-ai-strategy.md
13-competitor-analysis.md
14-content-specification.md
15-schema-entity-strategy.md
16-internal-linking-strategy.md
17-conversion-architecture.md
18-design-system.md
19-analytics-measurement.md
20-migration-redirect-plan.md
21-post-launch-seo-roadmap.md
22-decisions-change-log.md
CLAUDE.md
```

These documents provide project knowledge.

Claude should read the **minimum relevant context needed for the task**.

Do not read the entire documentation set before every ordinary development task.

---

# 13. Minimum-Context Rule

Use the smallest relevant documentation set.

Examples:

## Building a service page

Usually review:

```text
06-master-service-registry.md
14-content-specification.md
18-design-system.md
```

plus relevant service data.

## Building a location page

Usually review:

```text
07-master-location-registry.md
14-content-specification.md
18-design-system.md
```

## Building a service + location page

Usually review:

```text
06-master-service-registry.md
07-master-location-registry.md
14-content-specification.md
18-design-system.md
```

## Building a UI component

Usually review:

```text
18-design-system.md
```

plus the immediate usage context.

## Implementing redirects

Review:

```text
05-url-routing-strategy.md
20-migration-redirect-plan.md
```

Do not turn documentation lookup into unnecessary project overhead.

---

# 14. Source-of-Truth Hierarchy

When information conflicts, use:

```text
1. Explicit current user/project decision
2. Verified current business fact
3. Subject-specific project document
4. CLAUDE.md
5. decisions-change-log.md when relevant
6. Site OS Master
7. Validated external research
8. Existing implementation convention
9. AI inference
```

If an older document conflicts with the current build-first operating model, use the compatibility rule in this file.

---

# 15. Master Page Build List Role

`04-master-page-build-list.md` should be treated as the central page inventory and planning registry.

It should help track:

* candidate pages
* draft pages
* build-ready pages
* published pages
* indexable pages
* noindex pages
* deferred pages
* retired pages

It is **not intended to prevent useful development work**.

Claude may create a route or page that logically belongs in the architecture before someone manually adds it to a Markdown table.

The page inventory can then be updated to reflect the implementation.

---

# 16. Page Lifecycle

Use the following conceptual lifecycle:

```text
candidate
→ draft
→ build-ready
→ published
→ indexable
```

Other useful statuses include:

```text
noindex
deferred
retired
```

The important SEO distinction is:

```text
Built
≠
Automatically Indexed
```

A page may exist for:

* development
* QA
* future expansion
* content review
* internal use
* testing

without automatically becoming an intentional organic landing page.

---

# 17. Indexation Is the Primary SEO Gate

The project should be strictest about **intentional production indexation**, not normal page creation.

Before intentionally indexing large numbers of generated pages, verify that they provide:

* real business relevance
* accurate service coverage
* useful content
* meaningful search intent
* reasonable differentiation
* appropriate internal linking
* acceptable technical quality

Do not mass-index weak token-swapped pages.

This does not prevent Claude from generating, researching, or building them during development.

---

# 18. Service Registry Role

`06-master-service-registry.md` defines canonical service taxonomy.

Use it for:

* service names
* service IDs
* definitions
* aliases
* service relationships
* known capability boundaries

It is a **canonical data source**, not a bureaucratic implementation permission system.

Claude may:

* create page content
* create components
* add supporting metadata
* add appropriate relationships
* research service terminology

without requiring a new strategic decision.

A genuinely new business service should still be verified before being marketed as offered.

---

# 19. Location Registry Role

`07-master-location-registry.md` defines canonical geographic information.

Use it for:

* market names
* city names
* community names
* geographic relationships
* canonical IDs
* location types

It is a geographic source of truth, not a page-creation permission gate.

Claude may add or work with newly verified geographic data when it clearly supports the project.

Do not fabricate business presence merely because a geographic record exists.

---

# 20. Service × Location Matrix Role

The project contains a substantial service/location opportunity dataset.

Current research includes approximately:

* 18 canonical service records
* 579 normalized geographic records
* 10,422 service × location relationships

This dataset may be actively used for:

* SEO analysis
* route planning
* page generation
* draft generation
* metadata development
* internal relationship modeling
* market analysis
* content planning
* prioritization
* geographic coverage analysis
* noindex page builds
* future publishing cohorts

Do not treat the matrix as unusable merely because not every relationship should be indexed.

The correct model is:

```text
Matrix Relationship
→ May Research / Generate / Build

Intentional Indexation
→ Requires sufficient relevance and quality
```

---

# 21. No Automatic Mass Indexation

Do not use:

```text
service × every location
=
automatically index every route
```

The concern is uncontrolled indexation, not the existence of structured or generated pages.

Generated inventory can be:

* evaluated
* improved
* prioritized
* grouped into cohorts
* selectively indexed

This allows the project to use its data scale productively.

---

# 22. Page Quality

Every important production landing page should provide a useful experience.

Use practical quality tests.

## Location Test

If changing only the city name would leave the page effectively unchanged, localization likely needs improvement.

## Service Test

If changing the service name would leave nearly all copy intact, the service content is too generic.

## Audience Test

If "home buyer" could be replaced with "property manager" without meaningful rewriting, the audience content is too generic.

## Commercial Test

If a commercial page is essentially residential copy with "commercial" added, it needs improvement.

These are quality tests, not reasons to stop development before a draft exists.

---

# 23. Content Operating Rule

Claude should produce useful first drafts and improve them through iteration.

Do not wait for perfect research before creating any content unless the page depends heavily on unresolved facts.

Use:

```text
Verified Facts
+
Approved Positioning
+
Relevant Research
+
Clear User Intent
```

to produce the strongest practical draft.

Mark or omit details that cannot yet be verified.

---

# 24. Never Invent Business Facts

Do not fabricate:

* licenses
* certifications
* memberships
* warranties
* guarantees
* pricing
* discounts
* emergency service
* same-day availability
* response times
* years of experience
* employee counts
* review totals
* star ratings
* equipment specifications
* municipal approvals
* physical offices
* phone numbers
* business addresses
* operating hours

If a fact is unknown, omit it or use a clearly identified placeholder where appropriate during development.

Do not publish unverified placeholders as business facts.

---

# 25. Audience Strategy

Important audiences may include:

* homeowners
* home buyers
* home sellers
* real estate agents
* home inspectors
* investors
* property managers
* commercial property owners
* facility managers
* other verified audiences

The canonical audience taxonomy should generally follow `09-audience-commercial-matrix.md`.

Audience pages should address actual audience concerns rather than simply swapping an audience label into generic content.

---

# 26. Real Estate Priority

Real estate is an important strategic cluster.

Core relationship:

```text
Home Buyer
→ Pre-Purchase Sewer Inspection
→ Sewer Camera Inspection
→ Evidence
→ Better Property Decision
```

Useful content may cover:

* sewer inspections before buying
* sewer scope before closing
* inspection findings
* sewer inspection for agents
* sewer scope vs. standard home inspection
* older-home sewer considerations
* second opinions during transactions

Do not provide legal advice.

---

# 27. Independent Second-Opinion Strategy

The website may target users who have received a sewer repair or replacement recommendation.

Useful topics include:

* independent sewer inspection
* sewer repair second opinion
* sewer replacement second opinion
* what to do before replacing a sewer line
* verifying conditions before excavation
* questions to ask before major sewer work

The message should be:

> **Major sewer decisions deserve clear evidence.**

Do not attack competitors.

---

# 28. Commercial Strategy

Commercial content should address commercial operational needs.

Potential themes include:

* recurring blockages
* high-use drain systems
* property management
* multifamily
* preventative cleaning
* sewer camera inspection
* hydro jetting
* documentation
* operational disruption
* multiple properties

Do not create generic residential copy with commercial keywords inserted.

---

# 29. Answer-First Content

For clear informational questions, prefer:

```text
Question
→ Direct Answer
→ Supporting Explanation
→ Relevant Next Step
```

This supports:

* users
* SEO
* AEO
* AI retrieval
* featured-answer opportunities

Avoid unnecessary introductory filler.

---

# 30. Topical Authority

Build connected topic ecosystems around:

* sewer inspection
* sewer camera inspection
* sewer diagnostics
* sewer cleaning
* hydro jetting
* drain cleaning
* sewer line locating
* sewer problems
* pre-purchase sewer inspection
* real estate
* second opinions
* commercial sewer/drain services

Resources should support relevant service, audience, market, or commercial pages.

---

# 31. Internal Linking

Internal linking should clarify real relationships.

Preferred conceptual flow:

```text
Homepage
→ Primary Hubs
→ Core Services / Markets / Audiences / Commercial
→ Localized or Specialized Pages
↔ Supporting Resources
```

The matrix may help identify relevant relationships.

Do not mechanically expose every possible combination in:

* navigation
* footer
* related-page grids

Internal links should remain useful to humans.

---

# 32. Design System Authority

`18-design-system.md` defines the site's visual direction.

The project also includes six primary page-family reference images.

These images are **practical structural templates** for page implementation.

They should guide:

* hierarchy
* section rhythm
* hero composition
* content density
* image placement
* CTA placement
* forms
* service grids
* trust sections
* process sections
* testimonials
* market sections
* footer density

They are not pixel-perfect requirements.

---

# 33. Primary Design Reference Files

Use the following references:

```text
homepage-performance.webp
service-page-performance.webp
location-page-performance.webp
location-service-page-performance.webp
audience-page-performance.webp
audience-service-page.webp
```

Recommended repository location:

```text
/docs/design-references/
```

---

# 34. Page-Family Design Mapping

Use:

| Page Family        | Primary Visual Reference                 |
| ------------------ | ---------------------------------------- |
| Homepage           | `homepage-performance.webp`              |
| Core Service       | `service-page-performance.webp`          |
| Location / Market  | `location-page-performance.webp`         |
| Service + Location | `location-service-page-performance.webp` |
| Audience           | `audience-page-performance.webp`         |
| Audience + Service | `audience-service-page.webp`             |

Derived page families should use the closest appropriate reference.

---

# 35. Derived Page-Family References

## Commercial Service

Start from:

```text
audience-service-page.webp
```

or:

```text
service-page-performance.webp
```

depending on the intent.

## Audience + Location

Combine patterns from:

```text
audience-page-performance.webp
location-page-performance.webp
```

## Commercial + Location

Combine patterns from:

```text
audience-service-page.webp
location-service-page-performance.webp
```

## Comparison / Alternative

Use a more editorial version of the service template.

## Resource / Article

Use a simplified editorial layout while preserving the same brand system.

---

# 36. What to Copy From the Reference Designs

Use the reference images for:

* strong hero hierarchy
* alternating dark/light section rhythm
* image-led content
* compact trust strips
* service cards
* audience cards
* problem cards
* numbered process sections
* proof sections
* testimonials
* lead forms
* location/service-area sections
* repeated but non-intrusive conversion opportunities
* substantial footer structure
* professional content density

The goal is to reproduce their **quality and composition**, not Silver State Plumbing itself.

---

# 37. What Not to Copy From the Reference Designs

Do not copy:

* Silver State Plumbing logo
* Silver State Plumbing name
* phone number
* email address
* business address
* testimonials
* licenses
* years of experience
* guarantees
* emergency claims
* same-day claims
* free estimates
* pricing
* service claims
* employee identities
* business statistics

Do not automatically copy the exact blue/gold palette unless it matches The Sewer Pros approved branding.

---

# 38. Design Flexibility

Claude may adapt the templates to the content.

Claude does not need approval to:

* adjust section count
* adjust card count
* move an image
* alternate image/text alignment
* change responsive ordering
* add a relevant comparison section
* remove a filler section
* use a dark or light variant
* combine compatible sections
* select a more appropriate component
* alter spacing
* improve visual hierarchy

The reference image is a design foundation, not a rigid wireframe.

---

# 39. Avoid Generic AI Website Design

Do not default to common AI-generated website patterns such as:

* giant empty hero areas
* excessive gradients
* glassmorphism
* excessive pill cards
* every section centered
* identical three-card sections
* excessive icon bubbles
* arbitrary abstract graphics
* repetitive section structure
* unnecessary animations
* extremely sparse layouts

The supplied page references should guide the design toward a more intentional, professionally designed local-service website.

---

# 40. Reusable Components

Prefer reusable semantic components.

Examples:

```text
Header
Footer
Hero
TrustStrip
ServiceCard
ProblemCard
MarketCard
LocationCard
AudienceCard
ProjectCard
ReviewCard
ProcessSteps
SplitContentSection
ServiceRequestForm
CommercialRequestForm
PrePurchaseRequestForm
FAQAccordion
RelatedServices
RelatedLocations
RelatedResources
CTASection
TestimonialBanner
MarketCoverage
```

Components should support variants rather than requiring a separate bespoke component for every page.

---

# 41. Component Variants

Examples:

```text
Hero
- homepage
- service
- location
- service-location
- audience
- audience-service
- editorial
```

```text
CTASection
- dark
- image
- split
- compact
```

```text
CardGrid
- service
- problem
- location
- audience
- project
```

Use variation to maintain consistency without making every page visually identical.

---

# 42. Forms

Forms should be:

* concise
* visually clear
* mobile friendly
* accessible
* context-aware

Potential form types include:

```text
general_service
prepurchase_inspection
commercial_service
```

Where page context already identifies:

* service
* market
* audience

preserve that context without unnecessarily asking the visitor to enter it again.

Do not invent business response promises.

---

# 43. Conversion Philosophy

The website should convert through:

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

not:

```text
Fear
+
Artificial Urgency
+
Fake Discounts
+
Repair Pressure
```

Appropriate CTA concepts may include:

* Request an Inspection
* Request Service
* Schedule a Pre-Purchase Sewer Inspection
* Request Commercial Service
* Call The Sewer Pros

Final labels may vary by page context.

---

# 44. Schema

Structured data should represent the real business.

Maintain one primary company entity.

Use appropriate relationships among:

```text
Organization
Service
Place
areaServed
WebPage
Article
BreadcrumbList
```

Do not create a fake `LocalBusiness` for every location page.

Do not create repair service schema if repair is not offered.

Schema should match visible content.

---

# 45. Analytics

Analytics should prioritize:

* qualified leads
* search visibility
* conversion behavior
* market performance
* service performance

Use stable contextual IDs where useful:

```text
market_id
service_id
location_id
audience_id
page_type
lead_type
form_type
```

Do not send PII to analytics.

Never send:

* customer names
* email addresses
* phone numbers
* property street addresses
* free-form inquiry messages

as analytics event parameters.

---

# 46. Migration

Preserve useful existing search equity.

For legacy routes:

```text
Old Relevant URL
→ Direct Permanent Redirect
→ Closest Relevant Canonical Destination
```

Avoid:

* redirect chains
* redirect loops
* sending every old page to the homepage

Internal links on the new site should point directly to final canonical URLs.

---

# 47. Post-Launch Growth

Use:

```text
Stabilize
→ Measure
→ Improve
→ Expand
→ Measure Again
```

The project should use performance data to determine which services, locations, audiences, and commercial areas deserve deeper investment.

Page inventory may grow substantially.

Growth should remain useful and measurable rather than being driven solely by URL count.

---

# 48. Decision Log Usage

`22-decisions-change-log.md` is reserved for material strategic decisions.

Examples that should normally be logged:

* adding a major service
* removing a major service
* beginning sewer repair/replacement operations
* adding a new primary market
* closing/removing a primary market
* establishing a verified physical branch
* changing the production domain
* changing the hosting architecture
* materially changing business positioning
* major post-launch URL restructuring

Normal implementation changes generally do not require a decision-log entry.

Examples that usually do **not** need a new decision entry:

* creating a page
* modifying a page layout
* adding FAQs
* changing CTA placement
* adding internal links
* adding metadata
* improving schema
* adding a component
* changing responsive behavior
* adding verified geographic data
* creating a content cluster
* refactoring
* SEO improvements
* accessibility fixes
* performance improvements

Git history should capture normal implementation evolution.

---

# 49. Documentation Maintenance

Project documentation should remain useful, but documentation updates should not block normal development.

When implementation reveals that a project document is stale:

1. continue safely where the correct direction is clear
2. update the relevant document as part of the work when practical

Do not stop a valid build solely because a registry or planning document has not yet been manually updated.

For material business changes, documentation should be updated before public representation.

---

# 50. Research

Use external research when it materially improves accuracy.

Research may be appropriate for:

* municipalities
* sewer lateral programs
* competitors
* current search behavior
* geographic information
* regulatory requirements
* current GBP information
* current industry terminology
* local conditions

Prefer authoritative sources for factual claims.

Research should help Claude resolve questions rather than creating another approval step.

---

# 51. Local Content

Local pages should be useful to users in the market.

Potential local differentiation includes:

* actual service availability
* property types
* housing characteristics
* municipal programs
* market-specific inspection considerations
* commercial context
* local service relationships
* nearby communities

Avoid irrelevant tourism filler.

Do not write:

```text
San Diego is known for its beautiful beaches...
```

unless that information actually contributes to the sewer-service topic.

---

# 52. URL Stability

Use the project's routing conventions.

Do not casually change established production URLs for minor keyword preferences.

Before changing a high-value live route, consider:

* current traffic
* backlinks
* conversions
* redirect implications

Development-stage route refinement is less risky and may be handled normally.

---

# 53. Typed Data

Use TypeScript and centralized structured data where practical.

Prefer relationships such as:

```ts
serviceId
marketId
locationId
audienceId
pageType
```

rather than repeating uncontrolled display strings throughout the codebase.

---

# 54. Build-Time Validation

Where practical, use build-time checks for structural issues such as:

* duplicate route slugs
* duplicate IDs
* missing relationships
* invalid references
* broken canonical routes
* missing required metadata
* invalid structured data

Validation should improve reliability.

It should not unnecessarily prevent drafts or incomplete development work from being created when those states are expected.

---

# 55. Sitemap

Production sitemap generation should focus on intentional canonical indexable pages.

Do not automatically include every possible data relationship simply because a route generator could create it.

Candidate, draft, preview, or intentionally noindex pages should not automatically enter the production sitemap.

---

# 56. Robots and Indexation

Do not accidentally index:

* development environments
* preview environments
* temporary test pages
* utility pages
* form confirmation pages
* intentionally noindex candidate inventory

Indexation control should be deliberate.

---

# 57. Development and Preview URLs

Never use:

* localhost
* temporary Cloudflare preview domains
* development hostnames

as production:

* canonical URLs
* schema IDs
* sitemap URLs
* GBP destinations
* permanent internal references

---

# 58. Accessibility

Build accessibility into components.

Use:

* semantic HTML
* proper heading hierarchy
* keyboard navigation
* visible focus states
* form labels
* meaningful error states
* sufficient contrast
* meaningful alt text
* appropriate touch targets
* reduced-motion support

Accessibility fixes should generally be made without seeking permission.

---

# 59. Performance

Avoid unnecessary performance costs.

Be cautious with:

* heavy animation libraries
* oversized image assets
* autoplay video
* multiple font families
* redundant third-party scripts
* large icon packages
* unnecessary client-side JavaScript

Prioritize a fast, technically clean site.

---

# 60. Git and Repository Hygiene

Keep implementation changes focused.

Before declaring significant work complete:

* inspect the diff
* run appropriate validation commands
* confirm no accidental secrets
* confirm no unrelated destructive changes
* verify affected routes

Do not modify unrelated user work unnecessarily.

Normal implementation history belongs in Git.

The decision log is not a replacement for Git history.

---

# 61. Security

Never commit or expose:

* passwords
* private API keys
* access tokens
* private credentials
* sensitive customer data

Do not place server secrets in client-side code.

---

# 62. Completion Standard

A task is complete when the requested work has been implemented to a reasonable production standard for its current stage.

Relevant considerations may include:

```text
Business Accuracy
+
Working Implementation
+
Responsive Design
+
SEO
+
Accessibility
+
Conversion
+
Technical Quality
```

Do not create unnecessary administrative work after the actual implementation is complete.

---

# 63. Default Behavior

When deciding between:

```text
Stop and ask about an ordinary implementation choice
```

and:

```text
Make a reasonable reversible choice and continue
```

prefer:

> **Make the reasonable reversible choice and continue.**

When deciding between:

```text
Build a useful draft
```

and:

```text
Wait because every detail is not final
```

prefer:

> **Build the useful draft using verified information and clearly avoid unsupported claims.**

When deciding between:

```text
Use the project's structured datasets productively
```

and:

```text
Avoid them because not every relationship should be indexed
```

prefer:

> **Use the data productively and control indexation separately.**

---

# 64. Core Non-Negotiables

Always preserve these:

## One Company

The Sewer Pros.

## Initial Primary Markets

* St. Louis
* San Diego
* Las Vegas

## Primary Position

Independent sewer inspection, diagnostics, locating, and cleaning.

## Repair Position

Do not market repair/replacement as offered unless explicitly approved.

## Local Legitimacy

Do not fabricate physical business locations or GBP entities.

## Business Accuracy

Do not invent material public-facing facts.

## Security

Do not expose secrets or private customer information.

## Index Quality

Do not intentionally mass-index low-value, insufficiently differentiated pages.

Everything else should generally support efficient implementation and iteration.

---

# 65. Final Instruction to Claude

> **Default to moving The Sewer Pros project forward. Use project documentation to understand the business, architecture, design direction, and quality standards—not as a collection of bureaucratic permission gates. Build, research, iterate, and improve independently within verified business boundaries. Use the supplied page-reference images as the practical visual templates for their corresponding page families. Make reasonable reversible implementation decisions without unnecessary escalation. Reserve human approval for material business changes, unverifiable public claims, major production architecture decisions, destructive actions, and intentional large-scale indexation decisions.**

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
