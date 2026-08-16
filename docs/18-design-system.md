# The Sewer Pros — Design System

**Document:** `18-design-system.md`
**Project:** The Sewer Pros Website Rebuild
**Repository:** `the-sewer-pros-site`
**Status:** Project-Specific Visual and UI Source of Truth

---

# 1. Purpose

This document defines the visual design system for The Sewer Pros website rebuild.

It establishes project-specific standards for:

* visual direction
* brand expression
* typography
* color usage
* spacing
* layout
* responsive behavior
* buttons
* forms
* cards
* navigation
* service modules
* location modules
* audience modules
* commercial modules
* reviews
* trust components
* FAQs
* content presentation
* imagery
* icons
* conversion components
* accessibility
* interaction
* reusable UI patterns

This document does **not** duplicate generalized Site OS Master procedures for:

* component QA
* design-review workflows
* accessibility testing procedures
* responsive testing procedures
* implementation gates
* visual regression workflows
* build methodology

Site OS Master governs **how the design system is implemented and validated**.

This document defines **what The Sewer Pros website should look and feel like**.

---

# 2. Design Objective

The rebuilt website should visually communicate:

```text
Specialized Sewer Expertise
+
Technical Precision
+
Independence
+
Trust
+
Transparency
+
Professionalism
+
Modern Service Delivery
```

The design should feel like a specialized diagnostics and sewer-services company rather than:

* a generic plumber
* an emergency plumbing franchise
* a construction contractor
* a repair-heavy sewer company
* a bargain drain-cleaning company

The visual system should reinforce the brand position:

> **Understand what is happening inside the sewer line before making a major decision.**

---

# 3. Desired Brand Perception

A visitor should perceive The Sewer Pros as:

* specialized
* experienced
* technically capable
* methodical
* honest
* transparent
* practical
* modern
* trustworthy
* easy to work with

The site should not feel:

* gimmicky
* overly aggressive
* cheap
* cartoonish
* cluttered
* repair-sales-driven
* fear-based
* visually dated

---

# 4. Core Visual Concept

The overall aesthetic should combine:

```text
Industrial Precision
+
Clean Modern Editorial Design
+
Local Service Trust
```

The preferred design direction is:

* dark or deep neutral brand foundation
* bright white content surfaces
* restrained accent colors
* strong typography
* clear hierarchy
* technical imagery
* generous spacing
* subtle line/grid motifs
* limited decorative effects
* clear conversion paths

The interface should feel engineered rather than decorated.

That standard is governed by four pillars:

```text
Documentary — real equipment, real footage, real conditions; never staged or synthetic
Editorial — strong typography, asymmetric composition, intentional whitespace
Technical — diagrams, inspection data, process, evidence
Conversional — clear next steps, contextual CTAs, low friction, no pressure
```

The site should feel photographed, documented, edited, and engineered — not generated. Appendix A (Composition Pattern Vocabulary) and Appendix B (Human-Designed / Anti-AI Visual Standard) operationalize this standard at the section-build and design-QA level.

---

# 5. Design Principles

The design system should follow these principles.

## 5.1 Clarity First

Users should immediately understand:

* what service is being discussed
* where it is available
* why it matters
* what action to take next

---

## 5.2 Technical Without Feeling Cold

The company uses inspection, cameras, locating, and cleaning equipment.

The site can feel technical, but it should remain approachable to homeowners and buyers.

---

## 5.3 Trust Through Restraint

Avoid trying to establish trust through excessive badges, star graphics, flashing CTAs, or claims.

Use:

* real proof
* clean structure
* real imagery
* precise language
* readable content
* clear process explanations

---

## 5.4 Specialization Over Breadth

Design should reinforce that The Sewer Pros is a sewer specialist.

Do not visually resemble a generic multi-trade home-services company.

---

## 5.5 Conversion Without Pressure

Calls to action should be easy to find without overwhelming the page.

---

## 5.6 Composition Over Componentry

Cards are an organizational tool, not the default layout. A page built entirely from card grids is the single strongest visual signal of a templated or AI-generated site, regardless of how restrained the individual card styling is.

* Do not force an item count into a grid it doesn't divide evenly into (five services in a three-column grid, an orphaned row) — use a scannable index, an uneven mosaic that gives the flagship item more space, or a different pattern entirely.
* Vary composition pattern and density between adjacent sections. See Appendix A for the named pattern vocabulary.
* Centered composition is the exception, not the default — reserve it for short, deliberate statements (a hero headline, a pull quote). Left-align long-form content, lists, and paragraph text.
* Favor asymmetry over perfect balance where content genuinely isn't equal weight: uneven column splits, offset imagery, varying content widths.

---

# 6. Brand Foundation Relationship

The visual system must remain consistent with:

`01-business-brand-foundation.md`

If the approved brand foundation later defines:

* official colors
* logo usage
* typography
* iconography
* photography style

those approved values supersede provisional design-system recommendations in this document.

Material changes should be recorded in:

`22-decisions-change-log.md`

---

# 7. Brand Asset Rule

Do not redesign, distort, recolor, or reinterpret the approved The Sewer Pros logo without explicit approval.

Approved logo variants should eventually include:

* full-color primary logo
* dark-background variant
* light-background variant
* icon/mark if available
* favicon/app icon

Do not create new brand marks solely for web convenience without approval.

---

# 8. Color Strategy

Until final brand colors are confirmed from approved assets, the design system should use semantic color roles rather than treating provisional HEX values as permanent brand truth.

Recommended roles:

```text
Brand Primary
Brand Secondary
Accent
Background Dark
Background Light
Surface
Text Primary
Text Secondary
Border
Success
Warning
Error
```

Exact values should be finalized during brand implementation.

---

# 9. Recommended Visual Palette Direction

A strong direction for The Sewer Pros would use:

### Primary Dark

Deep navy, charcoal, or near-black.

Purpose:

* authority
* technical credibility
* hero sections
* navigation
* footer

---

### Primary Light

White or near-white.

Purpose:

* content readability
* service sections
* cards
* educational content

---

### Technical Accent

A high-visibility blue, cyan, aqua, green, or approved brand accent.

Purpose:

* primary CTA
* links
* active states
* visual highlights

---

### Secondary Industrial Accent

Optional restrained use of:

* safety orange
* amber
* utility yellow

only if consistent with approved branding.

This should not dominate the interface.

---

# 10. Color Usage Principle

Prefer:

```text
70–80% Neutral
15–25% Brand Color
5–10% Accent
```

as a conceptual balance.

The interface should not become saturated with multiple competing brand colors.

---

# 11. Background System

Use a limited set of section backgrounds.

Recommended:

### Light Surface

For:

* service explanations
* resources
* FAQs
* forms
* comparisons

### Soft Neutral Surface

For:

* alternating sections
* proof sections
* related content
* local context

### Dark Brand Surface

For:

* hero
* major CTA
* footer
* occasional differentiation sections

Avoid alternating background colors on every section simply for decoration.

---

# 12. Contrast Requirements

All text and interactive controls must maintain accessible contrast.

Particular attention should be given to:

* text over hero images
* muted text
* outlined buttons
* links
* placeholder text
* disabled controls
* accent backgrounds

Do not sacrifice readability to preserve a brand color.

---

# 13. Typography Philosophy

Typography should feel:

* modern
* authoritative
* easy to scan
* technical
* professional

Avoid:

* novelty fonts
* plumbing-themed display fonts
* overly condensed body text
* decorative scripts
* excessive all caps

---

# 14. Font Strategy

Use a maximum of two primary font families unless an approved brand system requires otherwise.

Recommended structure:

```text
Display / Heading Font
+
Body / Interface Font
```

A single well-chosen variable font family may also be used throughout.

Fonts should be:

* web performant
* legible
* available through approved licensing
* suitable for Next.js optimization

---

# 15. Heading Typography

Headings should use:

* strong weight
* compact line height
* clear hierarchy
* controlled width

Large page headings should feel confident without becoming oversized marketing typography.

Recommended hierarchy:

```text
H1 — Primary Page Intent
H2 — Major Page Sections
H3 — Subtopics / Cards
H4 — Supporting Modules
```

Do not use heading size solely for visual styling.

Semantic hierarchy must remain meaningful.

---

# 16. Body Typography

Body copy should prioritize readability.

Recommended characteristics:

* comfortable line height
* medium text width
* clear paragraph spacing
* high contrast
* minimum mobile legibility

Avoid extremely wide text columns.

Long-form content should typically remain within a readable measure.

---

# 17. Recommended Content Width

For body content:

```text
~65–80 characters per line
```

is a useful target.

Full-width sections may still be used for:

* grids
* media
* CTAs
* market modules
* service cards

---

# 18. Type Scale

Use a responsive modular type scale rather than arbitrary font sizes.

Conceptual hierarchy:

```text
Display
H1
H2
H3
H4
Body Large
Body
Body Small
Caption
Label
```

Typography should scale down proportionally on mobile.

---

# 19. Spacing System

Use a consistent spacing scale.

Recommended conceptual increments:

```text
4
8
12
16
24
32
40
48
64
80
96
128
```

The exact Tailwind implementation may use the framework's default or approved extended scale.

Avoid one-off spacing values unless necessary.

---

# 20. Section Spacing

Major sections should feel clearly separated.

Desktop pages should generally use generous vertical spacing.

Mobile spacing should remain comfortable but more compact.

The site should avoid both:

* cramped page construction
* excessive empty space that makes content feel disconnected

---

# 21. Grid System

Use a responsive grid capable of supporting:

* 1-column mobile layouts
* 2-column editorial layouts
* 3-column card layouts
* 4-column compact feature layouts

Typical page container:

```text
max-width: approximately 1200–1400px
```

depending on final design.

Long-form content should use a narrower inner container.

---

# 22. Container Strategy

Recommended container types:

### Standard Container

For:

* navigation
* services
* cards
* market grids

### Narrow Reading Container

For:

* articles
* FAQs
* long explanations

### Wide Container

For:

* image-led sections
* comparison tables
* larger content grids

---

# 23. Border Radius

Use restrained rounding.

Recommended direction:

* small-to-medium radius
* consistent across cards and forms
* slightly larger radius for hero media where appropriate

Avoid highly rounded pill-style cards throughout the site unless part of the approved visual identity.

Pills should primarily be reserved for:

* tags
* categories
* status labels
* compact controls

---

# 24. Borders

Borders should be subtle.

Use them to define:

* cards
* form fields
* tables
* accordion items
* comparison sections

Avoid heavy outlines around every component.

---

# 25. Shadows

Use shadows sparingly.

Preferred:

* soft elevation
* subtle card separation
* modal or sticky-element hierarchy

Avoid:

* heavy drop shadows
* glowing CTA buttons
* dramatic floating cards

The brand should feel grounded and technical.

---

# 26. Iconography

Icons should be:

* simple
* consistent
* line-based or restrained filled style
* recognizable
* used for comprehension

Potential concepts include:

* inspection camera
* pipe
* locator
* water pressure
* drain
* property
* commercial building
* home buyer
* map pin
* check mark

Avoid cartoon plumbing icons.

---

# 27. Icon Usage Guardrail

Do not use an icon where:

* the meaning is unclear
* text is more understandable
* the icon exists only as decoration

Icons should support labels, not replace essential labels.

---

# 28. Photography Strategy

Photography should emphasize:

* actual sewer inspection
* camera equipment
* sewer/drain equipment
* hydro jetting equipment
* locating equipment
* sewer cleanouts
* commercial drain environments
* documented pipe conditions
* clean technical work environments

Prefer real company photography whenever quality permits.

---

# 29. People in Imagery

People may be used selectively where they improve trust.

Useful contexts:

* technician operating camera equipment
* technician reviewing inspection footage
* property owner reviewing findings
* commercial technician working safely

Avoid overusing staged smiling-contractor imagery.

The work and expertise should remain the focus.

---

# 30. No Repair-Heavy Imagery

Avoid making the brand look like a repair/excavation contractor through excessive images of:

* excavators
* trenching
* destroyed yards
* broken concrete
* replacement pipe installations
* major excavation

unless used specifically in educational content explaining repair decisions.

---

# 31. Sewer Camera Imagery

Camera and inspection visuals are highly valuable because they reinforce the differentiator.

Potential imagery includes:

* inspection monitor
* camera reel
* cleanout access
* inside-pipe footage
* locating equipment
* technician reviewing footage

This should become a major recurring visual theme.

## Condition Library Module

The strongest use of this imagery is structural, not decorative: a recurring module that pairs one real (or representative) inspection frame with a plain-language explanation of one condition — root intrusion, heavy buildup, offset joint, standing water, and similar. Each entry demonstrates expertise directly rather than claiming it. This module should become ownable to The Sewer Pros; label example footage clearly (e.g. "Example inspection footage — residential sewer lateral") and never imply a specific frame belongs to a specific customer's job unless it does.

---

# 32. Before-and-After Imagery

Before/after imagery may be useful for:

* buildup removal
* hydro jetting
* drain cleaning
* visible obstruction removal

Labels should clearly explain what is shown.

Do not imply structural repair when only cleaning occurred.

---

# 33. Technical Diagrams

Simple diagrams can support:

* how a sewer camera inspection works
* property-to-main sewer relationship
* locating process
* hydro jetting process
* inspection → cleaning → reinspection workflow
* homebuyer inspection process

Diagrams should prioritize clarity over decorative detail.

---

# 34. Image Style

Preferred photography:

* realistic
* sharp
* clean
* technically detailed
* professionally lit
* high contrast without being dramatic

Avoid:

* unrealistic AI imagery
* obviously staged stock plumbing scenarios
* catastrophic flooding imagery used for fear
* exaggerated damage

---

# 35. Image Aspect Ratios

Standardize common image ratios.

Recommended:

```text
Hero: 16:9 or wide editorial
Service card: 4:3
Article card: 16:9
Square proof/profile: 1:1
Process/media sections: 4:3 or 3:2
```

Consistent cropping improves visual cohesion.

---

# 36. Image Optimization

All images should be:

* responsive
* appropriately compressed
* dimensioned correctly
* lazy loaded where appropriate
* served in modern formats when possible
* accompanied by meaningful alt text

Technical implementation belongs in the Next.js architecture.

---

# 37. Hero Design

Primary page heroes should quickly communicate:

```text
Page Topic
+
Primary Value
+
Differentiator
+
CTA
```

A hero should not depend on a decorative image to explain the page.

---

# 38. Homepage Hero

The homepage hero should feel brand-defining.

Potential structure:

```text
Eyebrow:
Independent Sewer Inspection & Cleaning

H1:
Know What Is Happening Inside the Sewer Line.

Supporting copy:
Inspection, diagnostics, locating, and cleaning across St. Louis, San Diego, and Las Vegas without repair-driven upselling.

[Schedule an Inspection]
[Call The Sewer Pros]
```

Final copy remains subject to approved content.

---

# 39. Service Page Hero

Service heroes should prioritize the service.

Example:

```text
Sewer Camera Inspection

See visible conditions inside the sewer line before making major repair, cleaning, or property decisions.

[Schedule an Inspection]
```

Avoid large generic marketing slogans that obscure search intent.

---

# 40. Market Page Hero

Market heroes should combine:

```text
Service Presence
+
Location
+
Differentiator
```

Example structure:

```text
Sewer Inspection & Cleaning in St. Louis, MO

Independent sewer diagnostics, camera inspection, cleaning, and locating for homeowners, home buyers, real estate professionals, and commercial properties.
```

---

# 41. Article Hero

Resource pages should use a more editorial style.

Include:

* article title
* short summary
* optional category
* updated date where appropriate
* author if verified

Avoid oversized conversion banners before the user receives the answer.

---

# 42. Navigation Design

The header should be:

* simple
* easy to scan
* responsive
* conversion-aware

Potential structure:

```text
Logo

Services
Locations
Who We Help
Commercial
Resources
About

Phone
Primary CTA
```

Exact navigation is controlled by information architecture.

---

# 43. Header Behavior

A sticky header may be used if it:

* remains compact
* does not obscure content
* preserves mobile usability

Do not create a large persistent header that consumes significant viewport height.

---

# 44. Dropdowns

Dropdowns or mega menus should organize content clearly.

Recommended groupings:

### Services

```text
Inspection & Diagnostics
Cleaning
Locating
Commercial
```

### Locations

```text
St. Louis
San Diego
Las Vegas
```

### Who We Help

```text
Homeowners
Home Buyers
Real Estate Agents
Property Managers
Commercial Customers
```

---

# 45. Mobile Navigation

Mobile navigation should prioritize:

* Services
* Markets
* Call
* Request Service

Large lists should use sensible collapsible hierarchy.

Do not expose hundreds of local routes in the mobile menu.

---

# 46. Button System

Use a limited button hierarchy.

## Primary Button

Used for:

* Request Service
* Schedule Inspection
* Request Commercial Service

Visual treatment:

* strong brand/accent fill
* high contrast
* clear hover/focus state

---

## Secondary Button

Used for:

* Call
* View Services
* Learn More

Visual treatment:

* outline or secondary surface

---

## Tertiary Action

Used for:

* inline links
* card links
* supporting navigation

Visual treatment:

* text link with subtle directional indicator

---

# 47. Button Labels

Use descriptive labels.

Good:

```text
Schedule a Sewer Inspection
Request Commercial Service
View Sewer Camera Inspection
```

Weak:

```text
Submit
Go
Click Here
Learn
```

---

# 48. Button Size

Buttons should be easy to use on touch devices.

Minimum touch targets should meet current accessibility expectations.

Primary CTA buttons should have sufficient padding without becoming oversized visual blocks.

---

# 49. Button Interaction

Buttons should provide:

* hover feedback
* keyboard focus
* active state
* disabled state where relevant
* loading state on form submission

Do not rely exclusively on color changes.

---

# 50. Card System

Cards may support:

* services
* markets
* audiences
* commercial categories
* resources
* reviews
* related content

Card designs should be consistent but not identical across every content type.

Cards are one pattern among many, not the default. Before placing a section in a card grid, check whether an editorial split, a scannable index, a mosaic, or a full-bleed image break (see Appendix A) fits the content's actual shape better. A page family that uses cards for every list-like section is the pattern to avoid.

---

# 51. Service Cards

Recommended structure:

```text
Image/Icon
Service Name
Short Description
View Service →
```

Avoid excessively promotional card copy.

The service name should remain the dominant element.

---

# 52. Market Cards

Market cards may include:

```text
Market Name
Short Context
Primary Services
View Market →
```

Images should represent the actual market where used.

Avoid stereotypical tourism imagery unless appropriate.

---

# 53. Audience Cards

Audience cards should communicate needs.

Example:

```text
Home Buyers

See the condition of the sewer line before closing on a property.

Explore Buyer Inspections →
```

---

# 54. Commercial Cards

Commercial cards should feel more operational.

Potential emphasis:

* recurring maintenance
* inspection
* hydro jetting
* property management
* commercial drain issues

---

# 55. Resource Cards

Resource cards should prioritize the topic.

Recommended:

```text
Category
Headline
Short Summary
Read Guide →
```

Avoid putting publication dates above topic relevance unless chronology matters.

---

# 56. Forms

Forms should feel:

* simple
* trustworthy
* spacious
* straightforward

Use:

* visible labels
* clear required indicators
* helpful validation
* appropriate input types

Avoid:

* tiny labels
* placeholders as the only labels
* visually cramped form layouts

---

# 57. Form Field Styling

Form fields should have:

* clear border
* obvious focus state
* readable input text
* sufficient height
* accessible error state

Textarea fields should allow adequate space without dominating the form.

---

# 58. Form Layout

Desktop forms may use two columns selectively.

Mobile forms should generally collapse to one column.

Keep fields in logical order.

---

# 59. Multi-Step Forms

Do not introduce multi-step forms unless:

* form complexity genuinely requires it
* analytics supports the decision
* user testing demonstrates benefit

A short single-page form should remain the default.

---

# 60. Form Confirmation State

Success should be visually clear.

Example:

```text
Request Received

Thanks. The Sewer Pros team has received your information and will review your request.
```

Do not rely on a subtle color-only success message.

---

# 61. Error States

Errors should:

* appear near the field
* explain what is wrong
* remain visible
* use accessible color + icon/text

Do not clear all entered information after an error.

---

# 62. CTA Sections

Use reusable CTA sections throughout the site.

Potential formats:

### Dark CTA Band

For strong end-of-page conversion.

### Split CTA

Copy on one side, contact/form action on the other.

### Inline CTA

Embedded within long content.

### Market CTA

Location-aware.

### Commercial CTA

Business-focused.

Avoid making every CTA visually identical.

---

# 63. Trust Bar

A trust bar may feature verified differentiators.

Potential examples:

```text
Independent Inspections
Sewer & Drain Specialists
Three Primary Markets
Repair-Free Diagnostic Focus
```

Only use factual statements.

---

# 64. Differentiator Section

A major branded section should explain the independent model.

Potential visual:

```text
Traditional Repair Contractor
Inspection → Repair Recommendation → Repair Sale

The Sewer Pros
Inspection → Evidence → Cleaning/Next-Step Decision
```

Keep the presentation factual and non-accusatory.

---

# 65. Process Components

Process sections should make services easier to understand.

Example:

```text
1. Access the Sewer Line
2. Inspect the Line
3. Identify Visible Conditions
4. Discuss Appropriate Next Steps
```

Icons or numbered steps may be used.

Avoid overengineering with animation.

---

# 66. Comparison Components

Comparison pages may use:

* side-by-side cards
* comparison tables
* checklists
* decision summaries

Tables must remain responsive on mobile.

Do not manipulate visual emphasis to unfairly misrepresent alternatives.

---

# 67. FAQ Design

FAQs should prioritize scanning.

Recommended:

* accordion or stacked questions
* visible heading hierarchy
* clear open/closed states
* keyboard support

Important direct-answer content should not be hidden unnecessarily if visibility would improve UX.

---

# 68. Accordion Guardrail

Do not place nearly every page section inside accordions solely to shorten the page.

Core content should remain visible.

Accordions are best for:

* supplementary FAQs
* secondary detail
* compact mobile presentation

---

# 69. Reviews

Reviews should use a restrained design.

Potential structure:

```text
Review Text
Customer Name
Market / Context where verified
Source where appropriate
```

Avoid oversized star graphics dominating the page.

---

# 70. Star Ratings

If star ratings are visually shown:

* values must be accurate
* review source should be clear
* current rating should be maintained

Do not manually display five stars beside every review if the source does not support that rating.

---

# 71. Case Studies

Case-study modules may contain:

```text
Problem
Inspection
Finding
Action
Outcome
```

Use real photos or inspection visuals where available.

They should feel like evidence, not advertisements.

---

# 72. Tables

Tables may be used for:

* service comparisons
* inspection findings
* market differences
* service suitability
* process differences

Tables should:

* use clear headers
* remain readable on mobile
* avoid excessive columns

---

# 73. Lists

Use bullets when they improve comprehension.

Examples:

* signs of sewer problems
* what an inspection may reveal
* situations where hydro jetting is considered
* customer preparation steps

Avoid pages composed primarily of repetitive bullet lists.

---

# 74. Content Callouts

Callout styles may support:

### Important

Key warning or limitation.

### Good to Know

Helpful context.

### Independent Inspection Note

Differentiator-related information.

### Buyer Tip

Real-estate content.

### Commercial Note

Operational content.

Do not overuse callouts.

---

# 75. Information Hierarchy

Pages should visually establish:

```text
Primary Intent
        ↓
Core Explanation
        ↓
Differentiation
        ↓
Details
        ↓
Proof
        ↓
Related Content
        ↓
Conversion
```

Design should help the user understand progression through the page.

---

# 76. Long-Form Content Design

Long resource and service pages should support:

* clear section headings
* readable text widths
* optional table of contents
* anchor navigation where useful
* callouts
* diagrams
* contextual CTAs

Avoid visually treating long-form articles like short landing pages.

---

# 77. Table of Contents

A table of contents may be used on substantial resources.

It should:

* reflect actual headings
* support anchor navigation
* remain compact

Do not add a table of contents to short pages.

---

# 78. Sticky Article Navigation

Sticky article navigation may be considered on desktop for very long resources.

It should not compete visually with the primary CTA or obscure content.

---

# 79. Location Page Visuals

Location pages should use local imagery only when meaningful.

Appropriate:

* recognizable local environment
* local residential context
* relevant commercial areas
* actual service photography from the market

Avoid:

* generic skyline-only pages
* tourism-heavy design
* fake local technician imagery

---

# 80. Market Differentiation

Each primary market can use subtle visual variation without becoming a separate brand.

Possible differentiation:

* market-specific photography
* local proof
* local service cards
* market-specific statistics where verified
* market-specific resources

Do not give each market a separate color palette or logo unless intentionally approved.

---

# 81. St. Louis Visual Context

Potential useful imagery:

* residential neighborhoods
* older housing context
* sewer camera inspection
* lateral access
* local street/property environments

Avoid clichés such as relying exclusively on Gateway Arch photography.

---

# 82. San Diego Visual Context

Potential useful imagery:

* residential properties
* multi-family
* property management
* real-estate settings
* technical sewer inspection

Avoid making the site look like a travel website with beaches and sunsets.

---

# 83. Las Vegas Visual Context

Potential useful imagery:

* residential communities
* commercial properties
* hospitality/property management context
* multi-family
* technical drain/sewer service

Avoid defaulting to:

* casinos
* Strip neon
* tourist imagery

unless directly relevant to commercial content.

---

# 84. Commercial Design

Commercial content should visually feel:

* operational
* scalable
* professional
* less residential

Potential imagery:

* commercial properties
* apartment/multifamily
* hospitality operations
* commercial equipment
* larger drain/sewer systems

---

# 85. Real Estate Design

Homebuyer and agent content should feel:

* informative
* due-diligence oriented
* calm
* evidence-focused

Potential visual themes:

* property inspection
* camera footage
* property documents
* inspection workflow

Avoid generic house-buying stock imagery without sewer relevance.

---

# 86. Maps

Maps may be used where they help users understand:

* markets
* approved service areas
* geographic relationships

Maps should not imply physical office locations where none exist.

Do not place map pins representing The Sewer Pros offices in San Diego or Las Vegas unless verified.

---

# 87. Service Area Map

A market map should communicate:

```text
Areas We Serve
```

not:

```text
Our Offices
```

unless actual branches exist.

This distinction must remain visually explicit.

---

# 88. Badges

Use badges sparingly.

Potential legitimate badges:

* market label
* service category
* article topic
* commercial
* home buyer

Avoid decorative trust badges with unverifiable claims.

---

# 89. Urgency Visuals

Avoid:

* flashing red buttons
* countdown timers
* animated warning banners
* "CALL NOW" repeatedly in red

The visual system should not contradict the independent, low-pressure brand position.

---

# 90. Animation

Animation should be restrained and functional.

Acceptable:

* subtle fade/slide on initial appearance
* menu transitions
* accordion animation
* button feedback

Avoid:

* parallax-heavy pages
* constant motion
* bouncing CTAs
* animated plumbing icons
* motion that delays content visibility

Respect reduced-motion preferences.

---

# 91. Interaction Principle

The interface should feel responsive but predictable.

Users should always understand:

* what is clickable
* what happens next
* where they are
* how to go back

Avoid hidden interactions with no visual affordance.

---

# 92. Link Styling

Inline links should be visually identifiable.

Use:

* accent color
* underline or appropriate hover behavior
* accessible focus styles

Do not rely solely on subtle color differences.

---

# 93. Hover States

Hover states should provide subtle confirmation.

Examples:

* underline
* minor background shift
* small icon movement
* border change

Avoid large scaling that causes layout movement.

---

# 94. Focus States

Keyboard focus must be clearly visible on:

* links
* buttons
* inputs
* accordions
* menus
* cards that are interactive

Never remove default focus behavior without replacing it.

---

# 95. Accessibility Principles

The design system should support WCAG-aligned implementation.

Key requirements include:

* semantic headings
* keyboard navigation
* visible focus
* sufficient contrast
* meaningful alt text
* form labels
* proper error messaging
* accessible controls
* reduced motion support
* adequate touch targets

Accessibility should be built into components rather than patched later.

---

# 96. Color Independence

Important information must not rely on color alone.

Examples:

Bad:

```text
Red = unavailable
Green = available
```

without text/icons.

Preferred:

```text
✓ Available
— Not Offered
```

with supporting color.

---

# 97. Responsive Philosophy

Design mobile-first.

The site must remain fully usable across:

* small phones
* large phones
* tablets
* laptops
* desktop monitors

Components should reflow rather than simply shrink.

---

# 98. Mobile Priorities

On mobile, prioritize:

1. page topic
2. primary CTA
3. phone action
4. service content
5. trust
6. navigation

Avoid placing decorative media before essential information.

---

# 99. Mobile Cards

Card grids should collapse naturally.

Typical behavior:

```text
Desktop: 3 cards
Tablet: 2 cards
Mobile: 1 card
```

Horizontal scrolling cards should be used only when it materially improves UX.

---

# 100. Mobile Tables

Large tables should:

* stack
* scroll horizontally with clear affordance
* transform into cards

depending on the content.

Do not allow columns to become unreadably narrow.

---

# 101. Sticky Mobile CTA

A sticky mobile conversion bar may contain:

```text
Call
Request Service
```

It should:

* remain compact
* respect safe areas
* not cover form controls
* be removable where necessary for accessibility

---

# 102. Desktop Layout

Desktop design should use available space without stretching content excessively.

Large screens should retain:

* readable line lengths
* centered containers
* balanced grids

Do not expand paragraph text across the entire screen.

---

# 103. Performance-Aware Design

Visual design should avoid performance-heavy decisions such as:

* unnecessary video backgrounds
* oversized hero images
* complex animation libraries
* large icon packages
* multiple font families
* heavy carousel dependencies

Performance is part of the design system.

---

# 104. Hero Video

Background video should not be a default hero treatment.

If used later, it must:

* add meaningful brand value
* be optimized
* include poster fallback
* respect mobile performance
* not impair text contrast

Static photography is the preferred launch default.

---

# 105. Carousels

Avoid carousels for critical content.

Important services, markets, or CTAs should not require users to wait or swipe to discover them.

Carousels may be used selectively for:

* galleries
* inspection examples
* case-study media

---

# 106. Conversion Visual Hierarchy

The visual priority should generally be:

```text
Primary CTA
Secondary CTA
Navigation Link
Tertiary Link
```

Do not visually style every action as primary.

---

# 107. Section Pattern Library

Recommended reusable page-section patterns include:

```text
Hero
Trust Bar
Service Overview
Problem / Solution
Process
Differentiator
Benefits
Use Cases
Market Coverage
Audience Cards
Commercial Section
Proof / Reviews
FAQ
Related Resources
Related Services
CTA
```

Pages should use only the sections relevant to their intent.

---

# 108. Avoid Template Repetition

Reusable components are encouraged.

Visually identical pages are not.

For example, service + location pages should not all appear as:

```text
Hero
3 Cards
Text
FAQ
CTA
```

with only token substitutions.

Layouts should vary where content warrants it while remaining within the same design system.

This applies within a single page, not only across pages. A long page where every section shares the same density and visual weight reads as flat and templated even if the page-family structure is correct. Vary density (sparse / standard / dense) between adjacent sections so the page has rhythm, and reserve the strongest visual treatment on the page for the final conversion moment rather than repeating the hero's weight throughout. See Appendix A for the density system and Appendix B for the full checklist.

---

# 109. Page Family Visual Identity

Each page family may have subtle structural differences.

## Core Service

Service-led and technical.

## Market

Location-led and locally contextual.

## Audience

Problem/use-case led.

## Commercial

Operational and business-focused.

## Resource

Editorial and educational.

## Comparison

Decision-support oriented.

This helps users understand page purpose.

---

# 110. Home Page Structure Direction

Recommended conceptual structure:

```text
Header
Hero
Trust/Differentiator Bar
Core Services
Why Independent Inspection Matters
Markets
How It Works
Who We Help
Commercial
Proof
Resources
FAQ
Final CTA
Footer
```

Final page structure is controlled by the Master Page Build List and page-specific content.

---

# 111. Service Page Structure Direction

```text
Header
Service Hero
Problem/Need
How Service Works
What It Can Reveal/Solve
Process
Why The Sewer Pros
Related Services
Markets
FAQ
CTA
Footer
```

---

# 112. Market Page Structure Direction

```text
Header
Local Hero
Market Service Overview
Local Differentiation
Primary Local Services
Who We Help
Approved Locations
Local Proof
Commercial
Resources
FAQ
CTA
Footer
```

---

# 113. Audience Page Structure Direction

```text
Header
Audience Hero
Audience Problem
Relevant Services
Process
Why Independent Inspection Matters
Market Availability
Resources
FAQ
CTA
Footer
```

---

# 114. Commercial Page Structure Direction

```text
Header
Commercial Hero
Operational Problems
Commercial Services
Property Types
Process
Why The Sewer Pros
Markets
Proof
FAQ
Commercial CTA
Footer
```

---

# 115. Resource Page Structure Direction

```text
Header
Article Hero
Optional TOC
Direct Answer
Detailed Sections
Visuals/Diagrams
Related Questions
Relevant Service CTA
Related Resources
Footer
```

---

# 116. Footer Design

The footer should contain:

* logo
* short brand positioning
* primary services
* primary markets
* company links
* resources
* contact information
* legal links

The footer should remain organized and not become an SEO link dump.

---

# 117. Footer Visual Treatment

A dark footer is appropriate if aligned with the brand.

Use high contrast and clear grouping.

Avoid tiny low-contrast link text.

---

# 118. Legal Pages

Privacy, terms, accessibility, and other legal pages should use the same typography and header/footer but a simplified content layout.

Do not overdesign legal content.

---

# 119. 404 Page

The 404 page should:

* clearly state the page was not found
* offer homepage link
* offer Services link
* offer Markets link
* offer Contact/Request Service

Avoid joke-heavy error messaging that undermines trust.

---

# 120. Empty and Error States

Any dynamic component should have a clean fallback.

Examples:

```text
No related resources available.
```

or omit the section entirely.

Do not expose:

* undefined
* empty cards
* placeholder skeletons after load failure

---

# 121. Content Management Safety

Components should gracefully handle:

* missing optional images
* missing reviews
* missing secondary CTA
* varying title lengths
* long location names

The system should not break because content is not perfectly uniform.

---

# 122. Design Tokens

The implementation should use centralized design tokens for values such as:

```text
colors
spacing
font sizes
font weights
border radius
container widths
shadows
z-index
transitions
```

Avoid hard-coded arbitrary values across components.

---

# 123. Tailwind Strategy

Tailwind CSS should implement semantic reusable patterns.

Prefer:

* shared component classes
* CSS variables
* Tailwind theme tokens
* reusable UI components

Avoid large, duplicated utility strings when a component pattern is repeated sitewide.

Exact implementation is governed by:

`02-nextjs-technical-architecture.md`

---

# 124. CSS Variable Strategy

A useful semantic variable system may include:

```text
--background
--foreground
--surface
--surface-muted
--border
--brand
--brand-foreground
--accent
--accent-foreground
--muted
--muted-foreground
--success
--warning
--error
```

This allows branding adjustments without rebuilding component logic.

---

# 125. Dark Mode

A public dark-mode toggle is not required.

The site may use dark sections as part of the visual system.

Do not add application-style dark mode unless there is a demonstrated user need.

---

# 126. Component Naming

Reusable UI components should use clear semantic naming.

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
MarketServiceGrid
```

Avoid ambiguous component names such as:

```text
Box1
Section2
BlueCard
```

---

# 127. Component Composition

Favor composition over large monolithic components.

Example:

```text
ServiceCard
```

should accept structured service data rather than containing service-specific hard-coded content.

This supports the multi-market architecture.

---

# 128. Design System and Routing

The same component system should work across:

* canonical service pages
* local service pages
* audience pages
* commercial pages
* resources

without creating separate UI systems for every page family.

---

# 129. Design and Internal Linking

Components such as:

```text
RelatedServices
RelatedResources
MarketServices
WhoWeHelp
```

should use relationships defined by:

`16-internal-linking-strategy.md`

The design system should render approved relationships rather than inventing them.

---

# 130. Design and Conversion

CTA components should use rules defined in:

`17-conversion-architecture.md`

The design system controls presentation.

The conversion architecture controls:

* purpose
* destination
* label hierarchy
* form type

---

# 131. Design and Schema

Visible components must remain consistent with:

`15-schema-entity-strategy.md`

Examples:

* market cards should not imply branch locations
* reviews should match represented sources
* business addresses should only appear when approved
* service names should match canonical taxonomy

---

# 132. Design and Content

Page components should support the requirements in:

`14-content-specification.md`

Design should accommodate:

* direct answers
* detailed service explanations
* local content
* FAQs
* comparison tables
* educational resources
* long-form copy

The design must not force content into artificially short sections.

---

# 133. Design and SEO

The visual system should support SEO rather than interfere with it.

Avoid hiding significant content behind:

* client-only rendering
* sliders
* tabs inaccessible to crawlers
* hover-only interactions

Important content should render semantically in the page.

---

# 134. Design and Local SEO

Market pages should visually communicate geographic relevance without manufacturing local business signals.

Use:

```text
Serving [Market]
```

when appropriate.

Do not visually state:

```text
Our San Diego Office
```

unless a verified office exists.

---

# 135. No Fake Local Office Cards

Do not create UI cards containing:

```text
San Diego Office
Las Vegas Office
```

with generic map pins or stock addresses.

Markets are service markets unless verified otherwise.

---

# 136. Map Labeling

Market maps should use labels such as:

```text
Primary Service Market
Areas We Serve
Service Coverage
```

not:

```text
Office Locations
```

unless that is factually correct.

---

# 137. Trust Through Transparency

Visual design should make important limitations easy to understand.

Examples:

* clearly state repair/replacement positioning
* explain inspection limitations
* distinguish cleaning from structural repair
* identify service areas accurately

Small-print disclaimers should not be used to correct misleading primary messaging.

---

# 138. Alert and Notice Components

Use alert components for genuinely important information.

Potential use:

```text
Important:
A camera inspection can identify visible conditions but cannot guarantee detection of every possible hidden defect.
```

Do not turn ordinary marketing content into warning boxes.

---

# 139. Commercial Inquiry Visual Priority

Commercial pages should make the commercial contact path visually distinct.

Possible treatment:

```text
Need Sewer or Drain Service for a Commercial Property?

[Request Commercial Service]
```

This CTA should not route users through a residential-focused form.

---

# 140. Real Estate Visual Priority

Homebuyer and agent pages may feature a dedicated inspection CTA:

```text
Buying a Property?

Schedule a Pre-Purchase Sewer Inspection.
```

This helps the audience immediately recognize relevance.

---

# 141. Independent Inspection Visual Motif

A recurring visual concept may contrast:

```text
Inspect
→ Understand
→ Decide
```

This can appear through:

* process icons
* diagrams
* section dividers
* branded steps

It should become a recognizable part of the design system.

---

# 142. Recommended Design Motifs

Subtle motifs may include:

* pipe-path line graphics
* inspection-camera line art
* grid overlays
* technical diagram marks
* locator/radar visual cues
* circular camera-lens elements

Use sparingly.

The site should not resemble engineering software.

---

# 143. Decorative Backgrounds

Background patterns should be subtle.

Potential:

* technical grid
* fine-line pipe geometry
* topographic/locator style
* understated dots

Avoid:

* water splash graphics
* cartoon pipe patterns
* heavy texture
* generic wrench patterns

---

# 144. Visual Brand Differentiation

Most plumbing/sewer sites use:

* red
* blue
* bright yellow
* trucks
* technicians
* coupons
* emergency banners

The Sewer Pros should stand apart by emphasizing:

```text
Precision
Evidence
Inspection Technology
Independent Expertise
```

rather than visual urgency.

---

# 145. Coupon and Promotion Modules

Do not build coupons into the primary design system unless promotions are approved.

If promotions are introduced later, they should remain optional components rather than defining the site's visual identity.

---

# 146. Accessibility and Motion

Any animations should honor:

```css
prefers-reduced-motion
```

and should not be required to understand content.

---

# 147. Accessible Images

Alt text should describe meaningful images accurately.

Examples:

Good:

```text
Sewer camera entering a residential cleanout for inspection
```

Poor:

```text
Best sewer inspection St Louis sewer camera company
```

Decorative imagery should use appropriate empty alt handling.

---

# 148. Accessible Forms

Form design must include:

* explicit labels
* clear required state
* keyboard focus
* error association
* accessible button labels
* readable confirmation messages

Placeholder text is not a substitute for a label.

---

# 149. Accessible Icons

Icons used alone as controls require accessible names.

Example:

Phone icon alone should expose:

```text
Call The Sewer Pros
```

to assistive technology.

---

# 150. Responsive Typography

Avoid fixed oversized headings that wrap awkwardly on narrow screens.

Use responsive sizing such as:

```text
clamp()
```

or Tailwind responsive classes.

Long city/service names must remain usable.

---

# 151. Responsive Hero Layout

Desktop:

```text
Copy | Image
```

may be appropriate.

Mobile:

```text
Copy
CTA
Image
```

is usually preferred.

The action should not be pushed below an oversized hero image.

---

# 152. Responsive Navigation Priority

On mobile, primary CTA actions should remain accessible without opening several nested menus.

Potential persistent controls:

```text
Call
Request Service
```

---

# 153. Performance Budget Mindset

The design system should avoid unnecessary visual complexity that harms:

* Core Web Vitals
* mobile experience
* conversion
* crawl rendering

A fast technical site reinforces the brand.

---

# 154. Design Acceptance Criteria

A page should be considered visually build-ready when it demonstrates:

* clear hierarchy
* correct brand expression
* readable typography
* consistent spacing
* responsive layout
* accessible controls
* clear CTA hierarchy
* appropriate imagery
* no repair misrepresentation
* correct market representation
* no fake location signals
* consistent reusable components
* good mobile usability

---

# 155. Design Failure Conditions

A page should be revised if it:

* looks like a generic plumbing template
* overuses emergency red/urgency visuals
* uses inconsistent components
* hides important content
* has weak contrast
* uses tiny text
* overwhelms users with links
* uses unverified badges
* shows fake office locations
* visually implies sewer repair capabilities
* uses decorative imagery unrelated to the service
* sacrifices mobile usability for desktop aesthetics
* contains excessive animation
* uses a card grid as the default for every list-like section, including where item counts don't divide evenly
* keeps the same density and visual weight across every section on a page (no rhythm, nothing reads as the strongest moment)
* centers long-form or paragraph text
* renders the same CTA (e.g. the primary "Schedule an Inspection" action) with different button styles depending on where it appears on the page
* could be mistaken for a generic SaaS landing page or a template with the copy swapped in

See Appendix B for the full Human-Designed / Anti-AI Visual Standard this list is drawn from.

---

# 156. Launch Design Priorities

The launch design system should prioritize:

1. global typography
2. color system
3. header/navigation
4. footer
5. buttons
6. forms
7. hero patterns
8. service cards
9. market cards
10. audience cards
11. commercial modules
12. resource cards
13. trust components
14. FAQ component
15. CTA sections
16. responsive behavior
17. accessibility
18. image standards

Complex visual experimentation should follow after the foundation is stable.

---

# 157. Post-Launch Design Evolution

Future improvements may include:

* more original photography
* inspection-video integration
* interactive diagrams
* case-study modules
* richer commercial content
* local visual proof
* conversion-tested CTA variants
* interactive service-area maps
* improved resource navigation

These should evolve within the same design system rather than creating isolated page designs.

---

# 158. Core Design Tokens Summary

The design system should ultimately maintain standardized values for:

```text
Brand Colors
Neutral Colors
Semantic Colors
Font Families
Type Scale
Font Weights
Line Heights
Spacing Scale
Container Widths
Grid Gaps
Border Radius
Borders
Shadows
Transitions
Z-Index
Breakpoints
```

These values should be centralized.

---

# 159. Visual Strategy Summary

The Sewer Pros should visually communicate:

```text
Not:
"Call us before disaster strikes."

But:
"See what is actually happening."
```

Not:

```text
General Plumbing Company
```

But:

```text
Specialized Sewer Inspection & Cleaning Experts
```

Not:

```text
Repair Sales Funnel
```

But:

```text
Inspection
→ Evidence
→ Informed Decision
```

---

# 160. Final Design Principle

The visual design should support the same promise as the business positioning:

> **Clear evidence. Clear information. Clear next steps.**

The governing design standard is:

> **The Sewer Pros website should feel like a specialized, technically capable, independent sewer diagnostics company—using clean modern design, strong information hierarchy, real service imagery, restrained visual language, accessible components, and clear conversion paths without resorting to generic plumbing aesthetics, fake local signals, excessive urgency, or repair-driven visual positioning.**

---

# Appendix A. Composition Pattern Vocabulary

This appendix gives Section 107's page-section names (Hero, Process, Proof, FAQ, CTA, etc.) an actual *shape*, so a section is assigned a deliberate pattern instead of defaulting to a card grid. Use it alongside Sections 50, 106–109. Not a checklist to fill — pick the pattern whose shape matches what the content actually is.

## Hero patterns

* **Editorial hero** — headline + subhead only, no image. Use when the copy is confident enough to carry the section alone.
* **Split hero** — headline/subhead on one side, a real supporting image on the other. The default for Homepage and Service Hero per Sections 38–39.
* **Image-led hero** — full-bleed image with a smaller text block. Use only when the visual itself is the strongest asset.

## Trust / proof

* **Metric strip / credential strip** — a thin horizontal band, low visual weight. Not a card grid.
* **Proof wall** — many short quotes, compact.
* **Testimonial feature** — one quote given real visual weight, used when that quote does different work than the others (e.g. a commercial credibility signal among residential reviews).

## Editorial / explanatory

* **Editorial split** — narrow text column beside an image. Good for a "why us" or differentiator section with one clear idea.
* **Editorial stack** — narrow text column alone, no card or border, full-bleed or contrasting background behind it. Use for content that should read like writing, not marketing copy in a box — this is the pattern for Section 5.6's "no floating cards" plain sections.
* **Image break** — full-width image between two content-dense sections, no text. A rhythm device, not decoration.

## Grids and lists (see Section 51's card guardrail first)

* **Service/feature index** — a scannable list (numbered, iconed, or plain) instead of a grid. Use when item count doesn't divide evenly or items vary in length — the default for Services when there are 4, 5, or 7 items rather than a clean 3 or 6.
* **Service mosaic** — a deliberately uneven grid where the flagship item (Sewer Camera Inspection) gets more visual space than supporting services.
* **Service/feature grid** — even grid, equal weight. Only when items genuinely are equal weight and the count divides cleanly.

## Process / sequence

* **Numbered process** — simple vertical numbered steps, as in Section 65. Can run with no cards, no icons, no gradient — see 5.6.
* **Sticky process** — steps reveal against a fixed image/diagram while text scrolls past. Reserve for a process genuinely worth walking through slowly (e.g. the full Inspect → Understand → Decide arc on the homepage), not a generic 3-step list.

## Comparison / data

* **Comparison table** — literal table, better than cards once there are more than ~4 comparison dimensions.
* **Feature matrix** — checkmarks/values across features × options.

## Conversion (extends Section 62)

* **Conversion band** — thin, high-contrast strip with a single CTA, used mid-page after a relevant argument has been made.
* **Conversion panel** — the strongest visual treatment on the page, for the final conversion moment.
* **Conversion split** — CTA beside supporting proof or a testimonial, used when social proof should reinforce the ask directly.

## Density system

Every section gets one of three densities, and the point is variation down the page:

* **Sparse** — generous whitespace. Hero, major positioning statements, final CTA.
* **Standard** — balanced whitespace. Explanatory content, services, process.
* **Dense** — tighter spacing, more per viewport. Comparisons, specifications, FAQs — this is what keeps long service/location pages from feeling padded, and what makes the sparse sections feel intentional by contrast.

## Asymmetric column system (extends Section 21)

Prefer uneven splits (roughly 7/5 or 5/7) over a perfectly even 6/6 when one side of a section is genuinely primary — an even split reads as templated even when the content itself is left-aligned.

---

# Appendix B. Human-Designed / Anti-AI Visual Standard

A judgment-based review to run once per page against the *rendered* result — after Claude Code has built the page, not as an automated pre-build gate, since most of these are design judgment calls rather than binary checks. Pairs with Sections 154–155. Present findings as fixes to make, not a score.

## Check the rendered page for

* More than two consecutive card-grid sections
* A grid that forces an item count it doesn't divide into evenly
* The same two-column layout repeated more than twice in a row
* Long-form or paragraph text that's centered
* Flat density — no section reads as sparser or denser than its neighbors, nothing reads as the page's strongest moment
* The same CTA rendered with different button styles depending on where it sits on the page
* Icons used as decoration next to text that already communicates the idea on its own
* Gradients, glows, or decorative shapes with no compositional purpose tied to the brand
* Photography that reads as staged, synthetic, or generic stock rather than real equipment/footage (Sections 28–34)
* A page that could be mistaken for a generic SaaS landing page or another local-service business with the copy swapped
* Generic conversion language ("Get Started Today," "Trusted Professionals," "Hassle-Free Service") in place of the specific, outcome-stated labels in Section 47
* A CTA appearing after every section rather than at moments of rising intent (Section 106)

## What "authentic" means for imagery specifically

The target is *unstaged*, not *unpolished*. Real, professionally maintained equipment photographed in genuine use is correct; equipment that reads as neglected or a site that reads as low-production-value contradicts Section 3's "should not feel cheap." Don't sanitize the subject matter into a product render, and don't overcorrect into looking unmaintained — both are a miss.

## If several checks fail

Revise the specific section against Appendix A's pattern vocabulary rather than a full-page redesign — this is the same targeted-fix approach as Section 155's failure conditions, applied at the rendered-page stage instead of the spec stage.
