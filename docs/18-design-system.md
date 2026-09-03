# The Sewer Pros — Design System & Page Template Architecture

**Document:** `18-design-system.md`  
**Project:** The Sewer Pros Website Rebuild  
**Repository:** `the-sewer-pros-site`  
**Status:** Active Design System and Page Template Specification  
**Last Updated:** September 3, 2026

---

# 1. Purpose

This document defines the visual design system, reusable page-template architecture, layout conventions, component patterns, imagery direction, responsive behavior, and conversion-oriented design standards for The Sewer Pros website.

The primary goals are to:

- create a premium, custom-designed website
- maintain visual consistency across hundreds of potential pages
- prevent generic AI-generated layouts
- give Claude Code strong visual references
- reduce unnecessary design decisions during implementation
- create reusable page-family templates
- support scalable page generation
- maintain flexibility for content-specific variation
- improve conversion without excessive sales pressure
- preserve strong performance and accessibility

The design system should **enable implementation rather than act as a design approval gate**.

Claude Code should use this document, the supplied design-reference images, and the actual page content to make reasonable implementation decisions independently.

---

# 2. Design Operating Principle

The governing design principle is:

> **Use the supplied page references as practical structural templates, then adapt them intelligently to the brand, content, service, market, audience, and conversion intent of The Sewer Pros.**

The reference images define:

- layout quality
- information density
- section rhythm
- visual hierarchy
- hero composition
- card behavior
- image placement
- CTA frequency
- trust placement
- process presentation
- form integration
- testimonial placement
- footer depth

They are **not pixel-perfect specifications**.

Claude Code may modify the reference structure when doing so produces a better page.

---

# 3. Primary Design Reference Files

Store the approved visual references locally in:

```text
/docs/design-references/
```

Use the following filenames:

```text
/docs/design-references/homepage-performance.webp
/docs/design-references/service-page-performance.webp
/docs/design-references/location-page-performance.webp
/docs/design-references/location-service-page-performance.webp
/docs/design-references/audience-page-performance.webp
/docs/design-references/audience-service-page.webp
```

If the source files currently contain `+` characters in their names, rename them to the hyphenated filenames above for consistency.

---

# 4. Page Family → Visual Reference Mapping

| Page Family             | Primary Reference                        |
| ----------------------- | ---------------------------------------- |
| Homepage                | `homepage-performance.webp`              |
| Core Service Page       | `service-page-performance.webp`          |
| Market / Location Page  | `location-page-performance.webp`         |
| Service + Location Page | `location-service-page-performance.webp` |
| Audience Page           | `audience-page-performance.webp`         |
| Audience + Service Page | `audience-service-page.webp`             |

These six references form the foundational page-template system.

Other page families should derive their design from the closest applicable template rather than creating an unrelated visual system.

---

# 5. Reference Image Usage

The reference images should be treated as **visual architecture**, not content sources.

Use them for:

* section hierarchy
* content density
* hero proportions
* dark/light section rhythm
* image-to-copy ratios
* CTA positioning
* card composition
* trust strips
* form placement
* testimonials
* process sections
* project/evidence sections
* location cards
* footer layout
* overall visual polish

Do not copy example-company:

* branding
* logo
* colors without verification
* phone numbers
* addresses
* testimonials
* licenses
* service claims
* emergency claims
* same-day claims
* free estimate claims
* pricing
* warranties
* guarantees
* employees
* statistics

All public-facing business information must come from verified Sewer Pros project data.

---

# 6. Design Philosophy

The Sewer Pros site should communicate:

```text
Technical Sewer Expertise
+
Independent Diagnostics
+
Professional Service
+
Modern Local-Service Design
+
Clear Conversion Architecture
```

The site should feel:

* premium
* specialized
* technically competent
* modern
* established
* trustworthy
* clear
* useful
* conversion-oriented
* visually intentional

It should not feel like:

* a generic plumber template
* an emergency plumbing franchise
* a bargain drain-cleaning site
* an excavation contractor
* a SaaS landing page
* a generic AI-generated website

---

# 7. Visual Positioning

The site should visually reinforce the core business positioning:

> **Understand what is happening inside the sewer line before making a major decision.**

The visual system should emphasize:

* inspection
* diagnostics
* camera technology
* evidence
* cleaning
* hydro jetting
* line locating
* professional equipment
* pipe conditions
* property context

Avoid making excavation, replacement, trenches, or heavy repair work the dominant visual language.

---

# 8. Design System Flexibility

Claude Code may independently:

* adjust section order
* change section spacing
* change card counts
* move imagery
* change desktop grid composition
* change mobile stacking order
* create component variants
* combine related sections
* remove unnecessary sections
* add content-specific sections
* use dark/light variants
* adjust CTA placement
* modify image aspect ratios
* choose the closest appropriate page-family template

These actions do not require separate approval.

Human approval is generally only required for major design decisions such as:

* complete visual rebrand
* major logo changes
* replacement of the page-template system
* fundamentally different global navigation
* abandoning the approved design direction

---

# 9. Do Not Force Content Into Templates

The content should determine the final page structure.

Do not create filler merely because a reference page contains a section.

For example:

If a page has no legitimate project examples:

> Do not invent a "Recent Projects" section.

If a page has stronger comparison content than a standard problem-card section:

> Use the comparison content.

If local proof is limited:

> Use useful service-area information rather than fabricating local evidence.

The templates provide defaults, not section quotas.

---

# 10. No Section Quotas

Do not require:

* exactly 10 sections
* exactly 4 service cards
* exactly 3 CTAs
* exactly 4 process steps
* identical section orders across every page

Use the reference images to establish the design language while allowing content-driven variation.

---

# 11. Global Page Rhythm

The reference pages demonstrate a strong alternating visual rhythm.

A typical page may use:

```text
Dark / Image-Led Hero
↓
Trust or Utility Strip
↓
Light Content Section
↓
Card Grid
↓
Dark Process / Differentiator Section
↓
Light Proof or Supporting Content
↓
Image / Testimonial Section
↓
FAQ / Form / Related Content
↓
Strong Final CTA
↓
Dark Footer
```

This should guide page composition without becoming rigid.

Avoid pages consisting entirely of:

```text
Heading
Paragraph
Three Cards
Heading
Paragraph
Three Cards
```

Repeated section structure makes the site appear templated and AI-generated.

---

# 12. Global Header

Use one primary header system across the website.

Recommended desktop navigation:

```text
Logo

Services
Locations
Who We Help
Commercial
Resources
About
Contact

Phone / Secondary Action
Primary CTA
```

Final labels should follow the approved information architecture.

The header should:

* remain visually compact
* use strong contrast
* support dropdown navigation where useful
* maintain an obvious conversion path
* work consistently across page families
* remain usable on mobile
* avoid enormous mega-menus

A sticky header is acceptable when implemented cleanly.

---

# 13. Mobile Navigation

Mobile navigation should prioritize:

* clear logo
* accessible menu trigger
* core navigation
* phone action where appropriate
* primary CTA

Do not overcrowd the mobile header.

A compact sticky conversion bar may be used when appropriate:

```text
Call
Request Service
```

It must not interfere with page content, browser controls, or form interaction.

---

# 14. Hero System

Heroes are a major defining component of the design system.

Default hero characteristics:

* strong visual hierarchy
* page-family-specific context
* prominent H1
* concise supporting copy
* primary CTA
* optional secondary action
* relevant service or property imagery
* immediate trust context

Avoid oversized empty heroes that force the visitor to scroll before understanding the page.

Visitors should quickly understand:

* what the page is about
* who it is for
* where the service applies
* why The Sewer Pros is relevant
* what they can do next

---

# 15. Hero Variants

Create reusable variants such as:

```text
Hero
├── homepage
├── service
├── market
├── service-location
├── audience
├── audience-service
├── commercial
└── editorial
```

Each variant may share common primitives while changing:

* layout
* image ratio
* eyebrow
* CTA configuration
* supporting proof
* text width

---

# 16. Homepage Template

Primary reference:

```text
homepage-performance.webp
```

The homepage should establish:

* company positioning
* core services
* major markets
* independent inspection differentiator
* key audiences
* trust
* conversion

Recommended structural pattern:

## Hero

Include:

* eyebrow or positioning label
* strong H1
* concise supporting statement
* primary CTA
* secondary CTA or phone action
* relevant image
* optional trust/differentiator row

The hero should immediately communicate that The Sewer Pros is a sewer inspection, diagnostics, and cleaning specialist.

---

## Primary Navigation / Pathway Cards

Use a compact set of major user pathways such as:

* Services
* Locations
* Home Buyers / Who We Help
* Commercial

These should be functional navigation choices, not decorative feature cards.

---

## Core Services

Use strong image-led service cards for the most important approved services.

Potential examples may include:

* Sewer Inspection
* Sewer Camera Inspection
* Sewer Cleaning
* Hydro Jetting

Exact services must follow the canonical service registry.

---

## Primary Differentiator Section

Use a major visual section explaining the independent inspection positioning.

Possible composition:

```text
Differentiator Copy
+
Service / Equipment Image
+
CTA or Service Request Form
```

This should communicate:

> Inspection and diagnostics without repair-driven upselling.

---

## Trust / Proof Strip

Use concise verified proof points.

Possible themes:

* specialized sewer diagnostics
* independent inspection
* camera inspection
* professional cleaning
* multi-market service

Do not use unverified claims.

---

## Evidence / Service Imagery

Use image-led cards or visual examples for:

* camera inspection
* hydro jetting
* sewer cleaning
* line locating

Where verified real work is available, prefer it over generic stock imagery.

---

## Testimonial / Brand CTA

Use a visually strong dark section containing:

* verified review
* supporting image
* brand message
* CTA

---

## Markets

Feature the three primary markets:

* St. Louis
* San Diego
* Las Vegas

Market cards represent service markets and should not imply physical offices unless verified.

---

## Final CTA

Use a strong final conversion section before the footer.

---

# 17. Core Service Page Template

Primary reference:

```text
service-page-performance.webp
```

Service pages should establish deep canonical authority for each approved service.

Recommended structure:

## Service Hero

Include:

* service eyebrow
* service-specific H1
* clear value statement
* primary service CTA
* secondary action
* service imagery
* concise trust signals

---

## Service Benefit Strip

Use 3–4 concise service-specific benefits or differentiators.

Avoid generic filler such as:

* quality service
* great customer care
* professional technicians

Prefer meaningful service distinctions.

---

## Service Explanation + Image + Conversion

Use the strong upper-page composition from the reference:

```text
Service Explanation
+
Relevant Image
+
Form or CTA Panel
```

This is a major conversion section.

---

## Problems / Use Cases

Use image or icon cards to explain situations where the service may be appropriate.

Examples for inspection might include:

* recurring backups
* home purchase
* unknown sewer condition
* suspected roots
* previous repair recommendation

Do not diagnose a problem solely from symptoms.

---

## Process Section

Use a recurring dark numbered process component.

Example:

```text
1. Access the Sewer Line
2. Inspect or Evaluate
3. Review the Findings
4. Discuss Appropriate Next Steps
```

Actual steps should match the service.

---

## Why The Sewer Pros

Use a split image/content section emphasizing:

* specialization
* independent diagnostics
* process
* evidence
* communication
* appropriate documentation where verified

---

## Evidence / Work Examples

Use service-specific imagery or verified project examples where available.

---

## Related Services

Show only genuinely related services.

Do not display every company service.

---

## Testimonial

Use a verified review relevant to the service when available.

---

## Service Areas

Feature relevant markets and approved geographic relationships.

---

## FAQ

Answer service-specific questions directly.

---

## Final CTA

End with a service-specific conversion opportunity.

---

# 18. Market / Location Page Template

Primary reference:

```text
location-page-performance.webp
```

Use for:

* St. Louis market hub
* San Diego market hub
* Las Vegas market hub
* approved geographic hubs

Recommended structure:

## Location Hero

Establish:

```text
Service Category
+
Market
+
Value
+
CTA
```

Example structure:

```text
Serving [Market]

Sewer Inspection & Cleaning in [Market]

Supporting Copy

Request Service
Call
```

Do not say:

```text
Our [City] Office
```

unless verified.

---

## Local Trust Strip

Use concise service or business benefits.

---

## Services in the Market

Feature the most important services actually relevant to the market.

Do not automatically display every service.

---

## Market / Service-Area Section

Use a major split composition containing:

* market context
* service coverage explanation
* geographic visual or map
* CTA/form where useful

Maps should represent service coverage unless a real branch is being shown.

---

## Local Proof / Differentiator

Use:

* market-relevant imagery
* real service imagery
* verified local evidence
* local business context

Do not manufacture local proof.

---

## Nearby Communities

Show relevant communities when useful.

Cards should represent legitimate service areas.

---

## Reviews

Use verified reviews associated with the market when available.

Do not reassign reviews from one market to another.

---

## Final Market CTA

Use market-aware CTA language.

---

# 19. Service + Location Page Template

Primary reference:

```text
location-service-page-performance.webp
```

These pages are high-intent local conversion pages.

Recommended structure:

## Local Service Hero

Include:

* service + market/location eyebrow
* service/location H1
* concise value statement
* primary CTA
* secondary action
* relevant imagery

---

## Benefits

Use concise service-specific benefits.

---

## Local Service Explanation + Form

Recommended composition:

```text
Service Content
+
Service Image
+
Context-Aware Request Form
```

If the page already knows the service and location, the visitor should not have to repeatedly select them.

---

## Common Problems / Reasons for Service

Use relevant cards.

---

## Service Process

Use the recurring process component of the site.

---

## Why The Sewer Pros in This Market

Combine:

* service expertise
* market context
* independent positioning
* verified local relevance

Avoid meaningless statements such as:

> We proudly serve [City] with exceptional service.

Provide useful information instead.

---

## Evidence / Recent Work

Use verified service imagery or examples where available.

---

## Local Review

Use relevant verified market proof.

---

## Related Services

Link to genuinely related services within the market where routes exist.

---

## Nearby Areas

Show relevant geographic relationships.

---

## FAQ

Use local/service-specific questions where meaningful.

---

## Final CTA

Use a local service conversion message.

---

# 20. Audience Page Template

Primary reference:

```text
audience-page-performance.webp
```

Examples:

* Home Buyers
* Real Estate Agents
* Property Managers
* Commercial Property Owners

The page should lead with the needs of the audience rather than the services of the company.

Recommended structure:

## Audience Hero

Include:

* audience-specific eyebrow
* outcome-focused H1
* concise supporting copy
* primary CTA
* secondary CTA
* audience-relevant imagery

---

## Audience Value Strip

Use 3–4 concise benefits specific to the audience.

Home buyer examples might center on:

* due diligence
* visibility into sewer condition
* documentation
* transaction timing

Property manager examples may center on:

* communication
* recurring maintenance
* multiple properties
* documentation

---

## Audience Problem / Outcome Section

Use large image + copy.

Focus on what the audience wants to accomplish.

Prefer:

> Better Information Before You Buy

over:

> Why Choose The Sewer Pros

when audience context makes the former stronger.

---

## Relevant Services

Show only the services most relevant to that audience.

---

## Audience Process

Use the recurring process section.

Example for home buyers:

```text
1. Provide Property Details
2. Request Inspection
3. Inspect the Sewer Line
4. Review the Findings
```

---

## Partnership / Trust Section

Use audience-specific:

* benefits
* workflow details
* proof
* documentation
* service expectations

---

## Evidence / Examples

Use relevant verified imagery or case examples.

---

## Testimonial

Prefer a testimonial from the same audience type when verified.

---

## FAQ + Conversion

A strong lower-page pattern is:

```text
Audience FAQ
+
Request Form
+
Contact / Phone Panel
```

---

# 21. Audience + Service Page Template

Primary reference:

```text
audience-service-page.webp
```

Examples:

* Sewer Inspection for Home Buyers
* Hydro Jetting for Property Managers
* Sewer Camera Inspection for Real Estate Agents

These pages should satisfy both:

```text
Audience Intent
+
Service Intent
```

Recommended structure:

## Audience + Service Hero

Use a clear combined H1.

Example:

> Sewer Inspections for Home Buyers

or:

> Hydro Jetting for Property Managers

---

## Audience-Specific Benefit Strip

Use benefits unique to the intersection of audience and service.

---

## Audience Problem + Service Solution

Explain why the service matters specifically to the audience.

---

## Use Cases

Use cards for audience-specific service applications.

Do not duplicate the canonical service-page cards automatically.

---

## Process

Show the audience-specific workflow.

---

## Proof / Partnership

Use relevant:

* service imagery
* documentation
* operational benefits
* audience proof
* verified reviews

---

## Related Content

Link to:

* parent audience page
* canonical service page
* relevant resources
* relevant locations

---

## Geographic Coverage

Show applicable markets where useful.

---

## FAQ

Answer combined audience/service questions.

---

## Final CTA

Use a CTA specifically aligned with the audience/service intent.

---

# 22. Commercial Page Design

Commercial pages should derive primarily from:

```text
audience-service-page.webp
```

and:

```text
service-page-performance.webp
```

depending on page intent.

Commercial design should feel:

* operational
* professional
* scalable
* property-oriented
* less residential

Relevant visual subjects include:

* commercial buildings
* multifamily properties
* commercial mechanical/service areas
* hydro jetting equipment
* drain/sewer inspection equipment
* property management environments

Do not simply reuse residential imagery for every commercial page.

---

# 23. Audience + Location Pages

Audience + location pages should combine the strongest patterns from:

```text
audience-page-performance.webp
```

and:

```text
location-page-performance.webp
```

Typical structure:

```text
Audience + Market Hero
↓
Audience Benefits
↓
Local Context
↓
Relevant Services
↓
Audience Process
↓
Market Proof
↓
FAQ / Form
↓
CTA
```

Do not create a completely separate visual system.

---

# 24. Commercial + Location Pages

Use patterns from:

```text
audience-service-page.webp
```

and:

```text
location-service-page-performance.webp
```

Focus on:

* commercial need
* service
* geographic relevance
* operational benefits
* conversion

---

# 25. Comparison Pages

Comparison pages should use a more editorial variation of the service template.

Recommended structure:

```text
Hero
↓
Direct Answer / Summary
↓
Comparison Table
↓
Detailed Explanation
↓
When Option A Makes Sense
↓
When Option B Makes Sense
↓
Decision Factors
↓
Relevant Sewer Inspection Context
↓
FAQ
↓
CTA
```

Avoid forcing every comparison to conclude that the preferred option of The Sewer Pros is always correct.

---

# 26. Alternative Pages

Recommended structure:

```text
Hero
↓
Direct Answer
↓
Available Options
↓
When Each May Apply
↓
Why Inspection Matters
↓
Decision Framework
↓
FAQ
↓
CTA
```

These pages should support independent decision-making.

---

# 27. Resource / Article Pages

Resource pages should use a cleaner editorial template derived from the same visual system.

Recommended structure:

```text
Article Hero
↓
Direct Answer / Intro
↓
Optional Table of Contents
↓
Main Content
↓
Images / Diagrams
↓
Related Questions
↓
Relevant Service CTA
↓
Related Resources
↓
Footer
```

Avoid forcing service-page conversion density onto purely informational pages.

---

# 28. Color System

**The palette is approved.** DEC-096 (2026-09-03) fixed the production values; they are recorded as brand facts in `01-business-brand-foundation.md` §42 and implemented as tokens in `app/globals.css`.

The reference designs demonstrate the desired **color roles**, not the palette. Take composition from them and color from DEC-096.

Core roles should include:

## Brand Dark

Used for:

* header
* hero
* process sections
* testimonial sections
* CTA sections
* footer

Likely a deep navy, charcoal, or approved brand dark.

## Primary Surface

White or near-white.

Used for:

* content
* cards
* forms
* resources

## Secondary Surface

Subtle neutral background used to create page rhythm.

## Primary Accent

Used for:

* primary buttons
* interactive emphasis
* selected highlights

## Secondary Accent

Used sparingly for:

* small details
* icons
* labels
* secondary emphasis

Do not create unnecessary gradients.

---

# 29. Color Usage

Accent colors should be intentional.

Avoid turning:

* every icon
* every heading
* every border
* every section

into an accent-color element.

Most of the page should rely on:

* dark brand foundation
* neutral surfaces
* strong typography
* photography
* restrained accents

---

# 30. Typography

**The typefaces are approved.** DEC-096 fixed Archivo for headings and eyebrows and Source Sans 3 for body, navigation, buttons, and form fields — two families, which is this section's own maximum. Weights and roles are tabulated in `01-business-brand-foundation.md` §42.

Typography should feel:

* bold
* modern
* authoritative
* readable
* compact

Use no more than two primary font families unless there is a strong brand reason.

Hierarchy should clearly distinguish:

```text
Hero H1
Section H2
Card H3
Body
Supporting Copy
Eyebrow / Label
```

Avoid excessively thin typography.

Avoid enormous display headings that create excessive empty vertical space.

---

# 31. Section Eyebrows

Small contextual labels above headings are encouraged.

Examples:

```text
SEWER CAMERA INSPECTION

FOR HOME BUYERS

SERVING SAN DIEGO

COMMERCIAL SEWER SERVICES
```

Eyebrows should provide context.

Do not force keyword repetition into every section label.

---

# 32. Card System

Create reusable card families such as:

```text
ServiceCard
ProblemCard
MarketCard
LocationCard
AudienceCard
BenefitCard
ProjectCard
ReviewCard
ResourceCard
```

Cards may contain combinations of:

* image
* icon
* title
* concise description
* link

Cards should remain easy to scan.

---

# 33. Card Visual Style

Preferred style:

* clean surface
* subtle border
* limited shadow
* moderate corner radius
* strong image treatment
* clear title hierarchy
* concise descriptions
* simple link treatment

Avoid:

* extreme rounded corners
* excessive drop shadows
* floating glass effects
* SaaS-style neon gradients
* excessive pill-shaped containers

---

# 34. Trust Strips

Trust strips are an approved recurring pattern.

Use 3–4 concise items such as:

```text
Icon
Short Heading
One-Line Explanation
```

They should communicate meaningful proof or differentiation.

Do not fill trust strips with generic marketing phrases.

---

# 35. Process Sections

The dark numbered process section should become a recognizable recurring visual component.

Typical structure:

```text
01
Step Title
Short Explanation

02
Step Title
Short Explanation

03
Step Title
Short Explanation

04
Step Title
Short Explanation
```

The number of steps may vary.

Do not force four steps when the actual process has three or five.

---

# 36. Forms

Forms should visually follow the design references.

Use:

* contained card/panel
* clear heading
* short supporting copy
* visible labels
* logical grouping
* limited fields
* large primary submit button
* privacy reassurance where appropriate
* secondary phone action where useful

Forms should feel integrated into the page rather than embedded as an unrelated widget.

---

# 37. Form Placement

High-intent page families may place a form relatively high on the page:

* Service
* Service + Location
* Audience + Service
* Commercial
* Contact

Lower-intent resources generally should not place a large lead form immediately below the hero.

Use content intent to determine conversion density.

---

# 38. Testimonials

Use visually strong testimonial sections similar to the references.

Possible elements:

* verified review text
* customer name
* customer context when verified
* star rating when verified
* supporting imagery
* CTA

Do not:

* invent testimonials
* change their meaning
* assign a review to another market
* fabricate a customer role

---

# 39. Evidence / Project Sections

Use project/evidence sections where verified material exists.

Potential imagery:

* sewer camera equipment
* pipe interior
* cleaned line
* hydro jetting equipment
* locating equipment
* commercial sewer environment
* residential cleanout

Cards may use:

```text
Image
Service Type
Short Verified Context
```

Do not invent project outcomes.

---

# 40. Image Direction

Imagery should be:

* photorealistic
* technically plausible
* service-specific
* professionally composed
* visually consistent
* relevant to the page

Priority subjects include:

* sewer camera reel
* inspection monitor
* flexible camera cable
* cleanouts
* pipe interior
* hydro jetting equipment
* drain-cleaning equipment
* sewer locating equipment
* professional service vehicle
* residential service environments
* commercial properties
* technicians where appropriate

---

# 41. Image Hierarchy

Avoid using unrelated generic plumbing imagery when more specific sewer-service imagery can be used.

Preferred:

```text
Sewer camera inspection page
→ camera equipment / pipe imagery
```

not:

```text
Sewer camera inspection page
→ generic plumber holding wrench
```

---

# 42. AI-Generated Imagery

AI-generated imagery may be used when real images are unavailable, provided it:

* looks photorealistic
* accurately depicts the service
* contains plausible equipment
* does not create fake business claims
* does not misrepresent invented people as actual staff
* fits the market/property context
* matches the established visual system

Real verified company imagery should replace generated imagery where practical over time.

---

# 43. Market Imagery

Local imagery should establish context without turning pages into tourism content.

## St. Louis

Prefer:

* residential streets
* older housing
* local property contexts
* sewer inspection environments

Do not rely primarily on the Gateway Arch.

## San Diego

Prefer:

* residential properties
* multifamily
* real-estate environments
* commercial properties

Do not rely primarily on beaches.

## Las Vegas

Prefer:

* Las Vegas Valley residential architecture
* stucco homes
* desert landscaping
* multifamily
* commercial properties
* service environments

Do not rely primarily on casinos or the Strip.

---

# 44. Image Composition

Use varied image layouts such as:

```text
Text Left / Image Right
Image Left / Text Right
Large Image + Supporting Cards
Full-Width Image-Led Section
Project Card Grid
Hero Background / Split Hero
```

Avoid using the same image placement on every section.

---

# 45. Dark Sections

Dark sections should act as visual anchors.

Strong uses include:

* hero
* process
* differentiator
* testimonial
* major CTA
* footer

Do not make the entire site dark.

Alternating backgrounds help long pages remain readable.

---

# 46. Light Sections

Light sections work well for:

* detailed explanations
* service cards
* problem cards
* FAQs
* forms
* local cards
* resource content
* comparisons
* tables

---

# 47. CTA System

Primary CTA buttons should be visually obvious.

Possible CTA concepts include:

```text
Request an Inspection
Request Service
Request a Sewer Camera Inspection
Schedule a Pre-Purchase Sewer Inspection
Request Commercial Service
```

Use only language supported by actual operational functionality.

Secondary actions may include:

```text
Call The Sewer Pros
View Services
Learn More
Explore Locations
```

Not every link should become a button.

---

# 48. CTA Frequency

High-intent pages may contain conversion opportunities at:

* hero
* upper content/form section
* mid-page transition
* final CTA

Do not make every section a sales banner.

The reference pages demonstrate frequent conversion opportunities without making the page feel relentlessly promotional.

---

# 49. Location / Service-Area Cards

The horizontal geographic card pattern shown in the references is approved.

Use for:

* primary markets
* nearby communities
* selected service areas

Cards may include:

* market/location image
* location name
* simple link

Only link to routes that actually exist and provide value.

---

# 50. Maps

Maps may be used where they improve geographic understanding.

Maps on market or location pages should generally represent:

> **Areas We Serve**

not:

> **Our Offices**

unless physical branch data is verified.

Do not place fake office pins.

---

# 51. FAQ Design

FAQ sections may use:

* accordion
* stacked questions
* two-column arrangement

Keep question and answer text accessible in semantic HTML.

Do not make important FAQ content available only after client-side interactions that prevent discovery.

---

# 52. Footer

Use a substantial dark footer inspired by the references.

Potential structure:

```text
Brand / Positioning

Services

Locations

Who We Help

Commercial

Resources / Company

Contact

Legal
```

The footer should help navigation without becoming an SEO link dump.

Do not include hundreds of geographic links.

---

# 53. Responsive Design

The reference images primarily establish desktop composition.

Claude Code should intelligently adapt layouts for:

* desktop
* tablet
* mobile

Typical transformations:

```text
Desktop 4 Columns
→ Tablet 2 Columns
→ Mobile 1 Column
```

```text
Desktop Split Section
→ Mobile Stacked Section
```

```text
Desktop Text + Image + Form
→ Mobile Text → Image → Form
```

Exact ordering may change when mobile conversion or comprehension improves.

---

# 54. Mobile Hero Priority

Mobile hero order should generally prioritize:

1. page context / eyebrow
2. H1
3. supporting statement
4. primary CTA
5. secondary action
6. imagery

Do not allow a large image to push the primary conversion action far below the fold.

---

# 55. Mobile Spacing

Avoid:

* huge empty vertical gaps
* oversized section padding
* excessively tall card layouts
* unnecessarily large headlines

The mobile site should feel dense enough to be useful while remaining comfortable to scan.

---

# 56. Reusable Component Architecture

Build reusable semantic components such as:

```text
Header
MobileNavigation
Footer

Hero
TrustStrip
ProcessSteps
CTASection
TestimonialBanner

ServiceCard
ProblemCard
MarketCard
LocationCard
AudienceCard
BenefitCard
ProjectCard
ResourceCard
ReviewCard

SplitContentSection
ImageContentSection
CardGrid
MarketCoverage
RelatedServices
RelatedLocations
RelatedResources

ServiceRequestForm
PrePurchaseRequestForm
CommercialRequestForm

FAQAccordion
ComparisonTable
Breadcrumbs
```

Use component variants instead of creating a unique component for every page.

---

# 57. Component Naming

Prefer semantic names:

```text
ServiceCard
MarketCoverage
ProcessSteps
```

over implementation-specific names:

```text
BlueBox
SectionThree
CardThing
```

Component names should explain their purpose.

---

# 58. Component Variants

Examples:

```text
Hero
├── homepage
├── service
├── location
├── service-location
├── audience
├── audience-service
└── editorial
```

```text
CTASection
├── dark
├── split
├── image
└── compact
```

```text
CardGrid
├── services
├── problems
├── markets
├── audiences
├── projects
└── resources
```

This maintains design consistency while allowing page variation.

---

# 59. Avoid Monolithic Pages

Do not build each page as a massive JSX file containing:

* content
* layout
* data
* schema
* metadata
* forms
* related-content logic

Prefer:

```text
Structured Page Data
+
Reusable Components
+
Page Composition
```

This is essential for scalable page families.

---

# 60. Content and Presentation Separation

Where practical, store canonical content/data separately from presentation.

Examples include:

* services
* markets
* locations
* audience relationships
* FAQs
* related pages
* process steps
* metadata inputs

This makes the page-family templates reusable.

---

# 61. Design and Page Generation

The reference-template system is specifically intended to support scalable page generation.

Conceptually:

```text
Page Type
+
Structured Content
+
Design Template
+
Page Relationships
=
Rendered Page
```

Examples:

```text
service
→ service-page-performance template
```

```text
location
→ location-page-performance template
```

```text
service-location
→ location-service-page-performance template
```

Claude Code should be able to generate consistent pages without manually redesigning every route.

---

# 62. Avoid AI-Generated Website Patterns

Actively avoid:

* excessive gradients
* glassmorphism
* floating translucent cards
* every section centered
* repetitive three-card blocks
* giant hero whitespace
* excessive rounded pills
* random decorative shapes
* unnecessary animations
* generic icon bubbles
* endless "Why Choose Us" sections
* excessive whitespace
* cookie-cutter section repetition

The supplied references should serve as the antidote to generic AI-generated layouts.

---

# 63. Visual Variety

Long pages should maintain visual interest through:

* alternating image position
* changing grid structures
* process timelines
* testimonial blocks
* dark/light transitions
* large proof imagery
* cards
* forms
* maps
* editorial sections
* FAQs

Variation should remain within one recognizable design system.

---

# 64. Accessibility

All visual components must support:

* semantic HTML
* keyboard interaction
* visible focus states
* correct heading hierarchy
* sufficient contrast
* descriptive labels
* meaningful alt text
* appropriate touch targets
* reduced motion preferences
* accessible form states

Accessibility improvements should not require separate design approval.

---

# 65. Performance

The design should remain performance-aware.

Avoid unnecessary:

* video backgrounds
* animation frameworks
* large JavaScript dependencies
* oversized imagery
* unoptimized fonts
* heavy carousels
* duplicated third-party scripts

Use optimized responsive images.

Prioritize Core Web Vitals and mobile experience.

---

# 66. Animation

Animation should be restrained.

Acceptable uses may include:

* subtle entrance transitions
* dropdowns
* accordion transitions
* hover feedback
* small microinteractions

Avoid excessive:

* parallax
* scroll-jacking
* animated backgrounds
* continuous motion
* decorative movement

Support `prefers-reduced-motion`.

---

# 67. Design and SEO

Important page content should remain available in semantic HTML.

Do not hide core SEO content exclusively inside:

* carousels
* tabs
* hover interactions
* client-only interfaces

Design should support discoverability rather than interfere with it.

---

# 68. Design and Internal Linking

Cards and related-content components should render useful relationships provided by the structured data of the project.

The design system determines **how links appear**.

It should not determine **which SEO pages should exist or be indexed**.

---

# 69. Design and Conversion

Design should support the conversion architecture in:

`17-conversion-architecture.md`

The supplied reference pages demonstrate useful:

* CTA prominence
* form placement
* repeated conversion opportunities
* trust placement

They do not authorize unsupported claims.

---

# 70. Design and Business Accuracy

Visual design must not imply business facts that are not verified.

Do not use:

* "Our Las Vegas Office" cards
* office map pins
* fake employee photos presented as actual staff
* fake local project counts
* fake years-serving-a-market badges
* unsupported award seals
* fake certification badges

Visual credibility must come from real positioning and professional execution.

---

# 71. Design and Local SEO

Local page design should communicate service-area relevance without implying physical location.

Prefer:

```text
Serving Las Vegas
```

over:

```text
Las Vegas Office
```

when no verified office exists.

Use:

```text
Areas We Serve
```

for maps and location grids when appropriate.

---

# 72. Design QA

Before considering a page visually complete, verify:

* correct page-family reference was used
* hero hierarchy is strong
* page immediately communicates its purpose
* section rhythm is varied
* imagery is service relevant
* cards are concise
* CTAs are clear
* form placement makes sense
* dark/light sections are balanced
* typography is readable
* mobile behavior is intentional
* content is not cramped
* content is not excessively sparse
* page does not look like a generic AI template
* no unsupported business claims appear visually
* page remains accessible
* page performs well

---

# 73. Page Build Workflow

For normal page implementation:

```text
1. Determine page family.
2. Select corresponding visual reference.
3. Gather structured page content/data.
4. Build with reusable components.
5. Adapt template to actual content.
6. Apply Sewer Pros branding.
7. Add relevant imagery.
8. Add conversion components.
9. Implement responsive behavior.
10. Perform visual QA.
11. Perform content/SEO/technical QA.
```

Do not create an additional approval gate between each step.

---

# 74. Claude Code Default Behavior

When building a page, Claude Code should not stop merely because the design reference does not specify every detail.

For ordinary decisions such as:

* section padding
* card count
* breakpoint
* image cropping
* column proportions
* background choice
* component variant

Claude Code should use:

```text
Reference Image
+
Design System
+
Actual Content
+
Professional Judgment
```

and continue.

---

# 75. Design Reference Selection Examples

```text
Homepage
→ homepage-performance.webp
```

```text
Sewer Camera Inspection
→ service-page-performance.webp
```

```text
St. Louis, Missouri
→ location-page-performance.webp
```

```text
Sewer Camera Inspection in San Diego
→ location-service-page-performance.webp
```

```text
Home Buyers
→ audience-page-performance.webp
```

```text
Sewer Inspections for Home Buyers
→ audience-service-page.webp
```

```text
Commercial Hydro Jetting
→ audience-service-page.webp
or
service-page-performance.webp
```

Choose based on whether audience or canonical service intent dominates.

---

# 76. Design Reference Priority

When visual implementation guidance conflicts, use the following order:

```text
1. Explicit current project direction
2. 18-design-system.md
3. Corresponding supplied page reference
4. Existing shared components
5. Professional responsive-design judgment
```

Do not allow an older generic layout to override the approved reference-template system.

---

# 77. Final Design Standard

The Sewer Pros website should feel like one professionally designed system rather than a collection of unrelated pages.

Across all page families, preserve:

```text
Strong Hero Hierarchy
+
Technical Imagery
+
Clear Editorial Structure
+
Alternating Visual Rhythm
+
Useful Cards
+
Process Sections
+
Evidence and Trust
+
Clear Conversion Paths
+
Market Context
+
Substantial Footer
+
Responsive Quality
```

while allowing each page to reflect its specific:

* service
* audience
* market
* search intent
* content depth
* conversion objective

---

# 78. Final Governing Principle

> **The six supplied page-reference images are the practical visual foundation for The Sewer Pros website. Use them to establish hierarchy, density, section rhythm, image treatment, trust placement, conversion structure, and overall page quality. Do not pixel-copy the example company or transfer its business claims. Adapt the templates intelligently to the actual brand and content of The Sewer Pros. Claude Code should default to building and making reasonable reversible design decisions rather than stopping for approval over ordinary layout choices.**
