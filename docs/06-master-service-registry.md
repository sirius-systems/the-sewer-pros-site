# The Sewer Pros — Master Service Registry

**Document:** `06-master-service-registry.md`  
**Project:** The Sewer Pros Website Rebuild  
**Repository:** `the-sewer-pros-site`  
**Status:** Active Canonical Service Taxonomy  
**Last Updated:** September 3, 2026

---

# 1. Purpose

This document defines the canonical service taxonomy for The Sewer Pros website.

It establishes consistent service identities for use across:

- website content
- page generation
- routing
- navigation
- service + location relationships
- audience relationships
- commercial relationships
- internal linking
- metadata
- schema
- analytics
- forms
- content clusters
- future SEO expansion

The registry exists to create **consistency and reusable structured data**.

It is not intended to function as a permission gate that prevents Claude or Claude Code from:

- researching service topics
- drafting pages
- creating supporting content
- using natural-language service variations
- building related resources
- adding service relationships
- improving existing pages
- creating candidate page inventory

The key distinction is:

```text
Canonical Service Taxonomy
=
Consistent Business Data

Not
=
Approval Required for Every Mention or Page
```

---

# 2. Core Operating Principle

Use the service registry to answer:

> **What service concept does this content, route, relationship, or conversion belong to?**

Do not use it to ask:

> **Am I allowed to build anything involving this topic?**

Claude and Claude Code should use canonical service IDs and names wherever structured consistency matters.

Natural-language content may use appropriate synonyms and customer terminology without creating a new canonical service record.

---

# 3. Service Registry Role

The registry should support five major functions.

## 3.1 Canonical Naming

Provide one consistent internal identity for each major service.

## 3.2 Relationship Modeling

Connect services to:

* locations
* audiences
* commercial segments
* resources
* related services
* conversion forms
* analytics

## 3.3 Page Generation

Provide structured data for:

* service pages
* service + location pages
* audience + service pages
* commercial service pages

## 3.4 Entity Consistency

Keep service naming consistent across:

* visible content
* metadata
* schema
* internal links
* structured data

## 3.5 Search and Content Expansion

Provide the parent service concepts under which:

* questions
* problems
* comparisons
* aliases
* informational topics

can be organized.

---

# 4. Registry Is Not a Page-Build Gate

The existence or absence of a dedicated service record should not unnecessarily stop ordinary content work.

For example:

```text
Canonical Service:
Sewer Camera Inspection
```

may support content using phrases such as:

* sewer scope
* sewer camera
* sewer video inspection
* camera inspection of the sewer line
* video sewer inspection
* pipe camera inspection

These terms do not require six separate canonical services.

Likewise, Claude may create:

```text
What Does a Sewer Camera Inspection Show?
```

without creating a new service called:

```text
Sewer Camera Findings Service
```

The registry controls canonical business concepts.

It does not restrict useful language.

---

# 5. Canonical Service vs. Search Topic

Always distinguish:

```text
Offered Service
```

from:

```text
Search / Educational Topic
```

Example:

```text
Sewer Replacement
```

may be a valuable educational or second-opinion topic.

That does **not** make it an offered service.

It may support content such as:

* Do I really need sewer replacement?
* What should I do before replacing a sewer line?
* Sewer cleaning vs. sewer replacement
* Getting a second opinion before sewer replacement

without appearing in the service registry as an offered service.

---

# 6. Current Business Positioning

The Sewer Pros is primarily positioned around:

```text
Inspection
+
Diagnostics
+
Locating
+
Cleaning
+
Evidence
```

The primary strategic differentiator is:

> **Independent sewer inspection and cleaning without repair-driven upselling.**

Service taxonomy should reinforce this specialization.

---

# 7. Repair and Replacement Guardrail

The following should **not** be added as offered services unless the business explicitly confirms that The Sewer Pros now performs them:

* Sewer Repair
* Sewer Line Repair
* Sewer Replacement
* Sewer Line Replacement
* Trenchless Sewer Replacement
* Pipe Bursting
* Sewer Lining
* CIPP
* Excavation
* Structural Sewer Repair
* Sewer Installation

These terms may still appear as:

* educational topics
* comparison topics
* alternative topics
* second-opinion topics
* diagnostic context

The distinction must remain clear.

---

# 8. New Major Service Rule

A genuinely new offered service is a material business fact.

Before publicly marketing a new major service:

```text
Business Confirms Capability
→ Add / Update Service Registry
→ Update Relevant Page/Data Relationships
→ Implement Public Representation
```

If the service represents a major strategic change, update:

`22-decisions-change-log.md`

This requirement applies to **real business capabilities**, not minor naming variations or supporting content.

---

# 9. Service Record Structure

A service record may contain fields such as:

```ts
type ServiceStatus =
  | "active"
  | "candidate"
  | "inactive"
  | "retired";

interface ServiceRecord {
  id: string;
  name: string;
  shortName?: string;

  status: ServiceStatus;

  description: string;

  aliases?: string[];
  customerTerms?: string[];
  searchTerms?: string[];

  parentServiceId?: string;
  relatedServiceIds?: string[];

  category?: string;

  residential?: boolean;
  commercial?: boolean;
  realEstate?: boolean;

  marketIds?: string[];

  pageSlug?: string;
  pageStatus?: string;

  schemaType?: string;

  notes?: string;
}
```

The actual technical structure may vary.

The important requirement is that canonical service identity remains centralized.

---

# 10. Service IDs

Use stable machine-friendly IDs.

Preferred format:

```text
sewer-inspection
sewer-camera-inspection
sewer-cleaning
hydro-jetting
sewer-line-locating
drain-cleaning
pre-purchase-sewer-inspection
```

Avoid inconsistent duplicates such as:

```text
camera-service
cameraInspection
sewer_camera
video-pipe
```

for the same underlying service.

Once used broadly in:

* URLs
* structured data
* analytics
* relationships

service IDs should remain stable.

---

# 11. Display Names vs. IDs

Separate machine identity from display language.

Example:

```ts
{
  id: "sewer-camera-inspection",
  name: "Sewer Camera Inspection"
}
```

Content might naturally use:

* sewer camera inspection
* sewer scope
* sewer video inspection
* camera inspection
* sewer-line video inspection

while maintaining:

```text
serviceId = sewer-camera-inspection
```

behind the scenes.

---

# 12. Aliases

Aliases help connect customer/search terminology to canonical services.

Example:

```ts
{
  id: "sewer-camera-inspection",
  aliases: [
    "sewer scope",
    "sewer video inspection",
    "video sewer inspection",
    "sewer camera",
    "pipe camera inspection"
  ]
}
```

Aliases may support:

* search research
* content writing
* internal search
* redirects
* metadata
* AI retrieval

Aliases should not automatically create duplicate pages.

---

# 13. Customer Language

The registry may distinguish:

```text
Canonical Business Name
```

from:

```text
Customer Search Language
```

For example:

Canonical:

> Sewer Line Locating

Customers may search:

* find sewer line
* locate sewer pipe
* sewer line locator
* where does my sewer line run?

Content should use natural customer language where appropriate.

Do not force rigid canonical naming into every sentence.

---

# 14. Service Categories

Services may be grouped into useful categories.

Recommended conceptual categories include:

## Inspection & Diagnostics

Potential services:

* Sewer Inspection
* Sewer Camera Inspection
* diagnostic-related approved services

## Cleaning

Potential services:

* Sewer Cleaning
* Hydro Jetting
* Drain Cleaning

## Locating

Potential services:

* Sewer Line Locating

## Real Estate

Potential services:

* Pre-Purchase Sewer Inspection

## Commercial

Commercial variants of approved sewer/drain services where appropriate.

Categories are organizational tools.

They do not necessarily require dedicated public category pages.

---

# 15. Parent / Child Relationships

Use parent-child relationships where they improve taxonomy.

Example:

```text
Sewer Inspection
    ↓
Sewer Camera Inspection
```

or another relationship defined by the final canonical service model.

A child service may still have its own canonical page when it represents distinct search and customer intent.

Do not flatten all related concepts into one service merely to simplify data.

Likewise, do not split every search synonym into a separate service.

---

# 16. Related Services

Services may reference semantically useful related services.

Example:

```text
Sewer Camera Inspection
↔ Sewer Inspection
↔ Sewer Line Locating
↔ Sewer Cleaning
```

or:

```text
Sewer Cleaning
↔ Hydro Jetting
↔ Drain Cleaning
↔ Sewer Camera Inspection
```

These relationships may power:

* related-service modules
* internal links
* content recommendations
* form logic
* SEO clusters

Related relationships should be useful rather than exhaustive.

---

# 17. Service Page Authority

Each major canonical service may have one strongest general service page.

Conceptually:

```text
Canonical Service
→ Primary General Service Page
```

Localized pages may then serve more specific intent:

```text
Canonical Service
→ Service + Market
→ Service + Location
```

Audience pages may serve:

```text
Canonical Service
→ Audience + Service
```

The canonical service page remains the strongest broad service authority unless search architecture calls for a different structure.

---

# 18. Service Page Generation

Service records should be capable of powering reusable page templates.

Conceptually:

```text
Service Record
+
Service Content
+
Page Template
=
Canonical Service Page
```

The registry may also supply data to:

```text
Service Record
+
Location Record
+
Relationship
+
Location-Service Template
=
Service + Location Page
```

This structured architecture is encouraged.

---

# 19. Service + Location Relationships

Service availability by geography should primarily be represented through:

`08-service-location-matrix.md`

The service registry does not need to duplicate all 10,422 geographic relationships.

Prefer:

```text
Service Registry
+
Location Registry
+
Relationship Matrix
```

over embedding enormous geographic arrays directly into every service record.

---

# 20. Market Availability

High-level market relationships may be stored with the service when operationally useful.

Example:

```ts
marketIds: [
  "st-louis-mo",
  "san-diego-ca",
  "las-vegas-nv"
]
```

However, detailed local relationships should remain normalized.

Do not assume every service is available in every market merely because the company serves all three markets generally.

Use actual service data where available.

---

# 21. Audience Relationships

Services may connect to audiences defined in:

`09-audience-commercial-matrix.md`

Example:

```text
Pre-Purchase Sewer Inspection
↔ Home Buyers
↔ Real Estate Agents
↔ Home Inspectors
```

or:

```text
Hydro Jetting
↔ Property Managers
↔ Commercial Property Operators
```

Do not duplicate every audience relationship directly inside the service registry if the audience matrix already manages them.

---

# 22. Commercial Variants

Commercial service taxonomy should be handled carefully.

A commercial version of an existing service may be:

```text
same underlying technical service
+
distinct commercial search / customer intent
```

For example:

```text
Hydro Jetting
```

may support:

```text
Commercial Hydro Jetting
```

as a public page concept.

Whether that requires a separate canonical service ID or a service/audience relationship should be determined by:

* actual business operations
* route architecture
* analytics needs
* content differentiation
* search intent

Do not create unnecessary duplicate service identities solely because the audience is commercial.

---

# 23. Real Estate Variants

Likewise:

```text
Pre-Purchase Sewer Inspection
```

may be the canonical service while supporting audience pages such as:

```text
Sewer Inspections for Home Buyers
```

and:

```text
Sewer Inspection for Real Estate Agents
```

Those audience pages do not necessarily require additional canonical service records.

---

# 24. Problem-Based Content

Symptoms and problems are not automatically services.

Examples:

* recurring sewer backup
* slow drains
* sewer odor
* root intrusion
* standing water
* offset pipe
* cracked sewer line

These should generally exist as:

* problems
* conditions
* content topics
* FAQ concepts
* diagnostic use cases

rather than independent offered services.

---

# 25. Equipment Is Not Automatically a Service

Equipment or methods may be part of a service without becoming independent service categories.

Examples:

* sewer camera
* jetter
* locator
* drain machine

The service taxonomy should be customer- and outcome-oriented.

Avoid creating pages solely because a piece of equipment exists.

---

# 26. Diagnostic Findings Are Not Services

Examples:

```text
Root Intrusion
Cracked Pipe
Offset Joint
Standing Water
Buildup
Blockage
```

are findings or conditions.

They may support:

* resource pages
* FAQs
* inspection content
* problem sections
* search-intent content

They should not automatically become canonical service records.

---

# 27. Service Taxonomy Should Support Search Without Following Keywords Blindly

Search research may reveal many variations.

Example:

```text
sewer camera inspection
sewer scope
video sewer inspection
sewer line camera
camera sewer inspection
```

Do not create multiple services merely because keyword tools report separate phrases.

Use:

```text
Search Variations
→ Canonical Service
```

unless user intent genuinely differs enough to justify another business/service concept.

---

# 28. Service Research

Claude may freely research:

* search terminology
* customer terminology
* competitor terminology
* emerging service language
* FAQ opportunities
* content gaps
* market-specific service terms

Research findings may update:

* aliases
* customer terms
* descriptions
* content strategy

without requiring a material decision-log entry.

Only actual changes to business capabilities need higher-level approval.

---

# 29. Candidate Service Concepts

The registry may optionally contain:

```text
status: candidate
```

for potential future business services.

Candidate means:

> Being evaluated.

It does not mean:

> Publicly offered.

Candidate services should not automatically:

* appear in public service navigation
* receive Service schema as active offerings
* generate indexable service pages
* appear in forms as selectable offered services

unless business capability is confirmed.

---

# 30. Active Service Status

Use:

```text
status: active
```

for confirmed services that may be publicly represented.

Active does not necessarily mean:

* available in every location
* homepage priority
* dedicated page required
* navigation placement required

Those are separate decisions.

---

# 31. Inactive Service Status

Use:

```text
status: inactive
```

when a service exists historically or internally but is not currently being marketed/offered.

Do not expose inactive services as current capabilities.

---

# 32. Retired Services

Use:

```text
status: retired
```

when a previously offered service is permanently removed.

Retirement may trigger:

* page review
* redirect planning
* internal-link cleanup
* form updates
* schema changes

Follow the migration strategy when a live service page is retired.

---

# 33. Current Foundational Service Themes

The project currently centers on service themes including:

* Sewer Inspection
* Sewer Camera Inspection
* Sewer Diagnostics
* Sewer Cleaning
* Hydro Jetting
* Sewer Line Locating
* Drain Cleaning
* Pre-Purchase Sewer Inspection
* Commercial Sewer Inspection
* Commercial Sewer Cleaning
* Commercial Hydro Jetting
* Commercial Drain Services

The project research contains approximately **18 canonical service records**.

The exact final registry should retain the verified canonical service list already developed for the project.

Do not delete valid existing service records merely because this document summarizes only the major themes.

---

# 34. Do Not Collapse Existing 18-Service Data Without Review

The current structured research contains approximately 18 canonical services.

When implementing this updated governance model:

```text
Keep Existing Valid Canonical Records
→ Review for Duplication / Accuracy
→ Improve Structure if Needed
```

Do not replace the existing service dataset with only the abbreviated list in this document.

This document defines how the registry works.

The structured data contains the actual service inventory.

---

# 35. Service Description Standard

Each active service should have a concise canonical description that explains:

* what the service is
* what it does
* when it is relevant

Avoid promotional filler.

Example structure:

```text
Service Name

A [service] is used to [primary function]. It can help identify or address [relevant use cases] and may be used when [customer situations].
```

The canonical description is not necessarily the complete website copy.

---

# 36. Service Content Expansion

Canonical service data may be supplemented with structured content such as:

```ts
benefits
commonProblems
processSteps
faqs
relatedResources
relatedServiceIds
audienceIds
```

when useful for page generation.

Do not force all page copy into the service registry if another content architecture is more maintainable.

---

# 37. Service Metadata

The registry may provide metadata defaults such as:

```ts
seoTitle
metaDescription
defaultH1
```

but production metadata may be page-specific.

For example:

```text
Canonical Service Page
```

and:

```text
Service + Location Page
```

should not necessarily share identical metadata patterns.

---

# 38. Service Schema

Active services may be represented through appropriate `Service` schema.

Schema should use the same canonical service identity as the visible page.

Conceptually:

```text
Canonical Service Record
→ Visible Page
→ Service Schema
```

Do not create schema for:

* candidate services
* repair services not offered
* educational topics that are not actual services

Detailed schema rules remain in:

`15-schema-entity-strategy.md`

---

# 39. Service Analytics

Canonical service IDs should be reused in analytics.

Example:

```ts
service_id: "sewer-camera-inspection"
```

Use the same ID across:

* page data
* form context
* analytics
* page relationships

Avoid analytics fragmentation caused by variations such as:

```text
camera
camera-inspection
video-inspection
sewer-camera
```

for the same service.

---

# 40. Service Forms

Where useful, forms may use canonical service IDs behind the scenes while presenting readable service names.

Example:

```html
<option value="sewer-camera-inspection">
  Sewer Camera Inspection
</option>
```

A page already dedicated to a service may automatically preserve that service context rather than making visitors select it again.

---

# 41. Navigation

The service registry may power navigation.

However:

```text
Active Service
≠
Must Appear in Main Navigation
```

Main navigation should prioritize the most useful service pathways.

Lower-priority services may remain available through:

* Services hub
* related-service modules
* search
* contextual links

---

# 42. Services Hub

The Services hub should organize active services into a useful customer-facing structure.

It may use service categories such as:

* Inspection & Diagnostics
* Cleaning
* Locating
* Real Estate
* Commercial

The exact presentation should follow the information architecture and design system.

Do not simply dump every registry row into an unstructured list.

---

# 43. Internal Linking

Service relationships may power:

```text
Related Services
```

modules.

Example:

```text
Sewer Camera Inspection
→ Sewer Inspection
→ Sewer Line Locating
→ Sewer Cleaning
```

The exact relationships should reflect meaningful customer journeys.

Avoid creating circular links solely for SEO.

---

# 44. Content Cluster Relationships

Each service may anchor a topic cluster.

Example:

```text
Sewer Camera Inspection
    ↓
What Does a Sewer Camera Inspection Show?
    ↓
Common Sewer Problems Seen on Camera
    ↓
Sewer Inspection Before Buying a House
    ↓
Second Opinion Before Sewer Replacement
```

Supporting topics remain resources, not additional offered services.

---

# 45. Comparison Content

Comparison topics may reference canonical services.

Examples:

```text
Hydro Jetting vs. Snaking
```

```text
Sewer Cleaning vs. Sewer Repair
```

```text
Sewer Camera Inspection vs. Standard Home Inspection
```

Comparison pages should use service records for consistent naming.

They do not require new service IDs.

---

# 46. Alternative Content

Alternative topics may also connect to services.

Example:

```text
Alternatives to Sewer Replacement
```

may connect to:

* Sewer Inspection
* Sewer Camera Inspection
* Sewer Cleaning

without creating:

```text
Sewer Replacement Alternative Service
```

as a canonical offering.

---

# 47. Localized Service Language

Localized pages should preserve canonical service identity.

Example:

```text
serviceId:
sewer-camera-inspection

locationId:
las-vegas-nv
```

Visible H1:

> Sewer Camera Inspection in Las Vegas, NV

The localized phrase does not create a new service record.

---

# 48. Audience + Service Language

Likewise:

```text
serviceId:
pre-purchase-sewer-inspection

audienceId:
home-buyers
```

may render:

> Sewer Inspections for Home Buyers

without creating a duplicate service called:

```text
Home Buyer Sewer Inspection Service
```

---

# 49. Commercial Service Language

Commercial pages may adapt service names naturally.

Example:

Canonical:

```text
Hydro Jetting
```

Visible commercial page:

> Commercial Hydro Jetting

The data architecture may model this using:

```text
serviceId
+
audience/commercial context
```

rather than duplicating service identity unnecessarily.

---

# 50. Registry Maintenance

The registry should be actively maintained.

Routine updates may include:

* new aliases
* corrected descriptions
* new relationships
* search terminology
* categorization
* metadata refinements
* status updates
* structured fields

These changes do not normally require decision-log entries.

---

# 51. Decision Log Relationship

Use:

`22-decisions-change-log.md`

when the service registry changes because of a **material business decision**.

Examples:

```text
The Sewer Pros begins offering Sewer Replacement.
```

or:

```text
The Sewer Pros permanently discontinues Hydro Jetting.
```

Routine taxonomy cleanup does not require strategic decision logging.

---

# 52. Master Page Build List Relationship

The service registry answers:

> What are the canonical services?

`04-master-page-build-list.md` answers:

> What is the lifecycle/indexation state of pages?

A service may exist without immediately having:

* a dedicated page
* a localized page in every market
* an audience variant

Do not combine these responsibilities.

---

# 53. Service-Location Matrix Relationship

The service registry provides one side of:

```text
Service
×
Location
```

The relationship matrix determines relevant combinations.

The service registry should not manually replicate thousands of service-location rows.

---

# 54. Audience Matrix Relationship

Similarly:

```text
Service
×
Audience
```

relationships belong primarily in:

`09-audience-commercial-matrix.md`

Avoid unnecessary duplication.

---

# 55. URL Strategy Relationship

Canonical services may inform URL slugs.

Exact route structure belongs in:

`05-url-routing-strategy.md`

Do not change canonical service names casually solely to chase keyword variations if doing so destabilizes established URLs.

---

# 56. Design Relationship

Canonical service pages should generally use:

```text
/docs/design-references/service-page-performance.webp
```

Service + location pages should generally use:

```text
/docs/design-references/location-service-page-performance.webp
```

Audience + service pages should generally use:

```text
/docs/design-references/audience-service-page.webp
```

See:

`18-design-system.md`

---

# 57. Content Specification Relationship

All service-page content should follow:

`14-content-specification.md`

The registry provides factual/taxonomic identity.

The content specification governs how that identity becomes useful public content.

---

# 58. Build-First Service Workflow

When creating a service-related page:

```text
Identify Canonical Service
→ Use Existing Service ID
→ Select Relevant Page Type
→ Build Content / Route
→ Add Related Data
→ QA Business Accuracy
→ Publish / Control Indexation
```

Do not require a new service-registry approval merely because a new page variation is being created.

---

# 59. New Alias Workflow

If research reveals a legitimate synonym:

```text
Identify Search / Customer Term
→ Confirm It Represents Existing Service
→ Add Alias if Useful
→ Continue
```

No strategic approval is normally required.

---

# 60. New Supporting Topic Workflow

If research reveals:

```text
tree roots in sewer line
```

Claude may create:

* FAQ
* resource
* problem section
* comparison
* supporting content

without creating a new canonical service.

---

# 61. New Major Service Workflow

If research suggests the company should offer a new service:

```text
Research Opportunity
→ Recommend Service
```

Do not silently convert:

```text
Recommendation
```

into:

```text
Offered Business Capability
```

If the business approves:

```text
Confirm Capability
→ Update Decision Log if Material
→ Add Active Service Record
→ Add Relationships
→ Build Public Architecture
```

---

# 62. Build-Time Validation

Where practical, validate:

* duplicate service IDs
* missing names
* invalid parent IDs
* invalid related-service IDs
* retired services appearing as active
* unapproved repair capabilities appearing in active service inventory
* malformed slugs

These validations should protect data integrity.

They should not stop unrelated development because optional content fields are incomplete.

---

# 63. Service Registry as Code

The long-term operational source may live in a structured file such as:

```text
/data/services.ts
```

or:

```text
/content/services.ts
```

or another architecture defined in:

`02-nextjs-technical-architecture.md`

If structured code/data becomes the operational authority, avoid maintaining a separate conflicting service list manually in Markdown.

This document should define the taxonomy rules.

Structured project data should hold the current records.

---

# 64. Single Source of Truth

Avoid situations where:

```text
services.ts says one thing
service-registry.md says another
page copy says another
schema says another
```

The preferred architecture is:

```text
Canonical Service Data
        ↓
Pages
Metadata
Forms
Schema
Analytics
Relationships
```

Use one canonical identity throughout the system.

---

# 65. Service Data Should Enable Scale

The service registry should make it easier to build:

* 18 service records
* hundreds of local relationships
* audience variants
* commercial variants
* resource clusters

without duplicating service facts throughout the repository.

The registry is infrastructure for scalability.

It should not create administrative friction.

---

# 66. Hard Service Guardrails

The following remain strict.

Do not:

* advertise unverified services
* convert search topics into false offered services
* advertise repair/replacement while unapproved
* create schema claiming unoffered services
* create form selections for services the business does not provide
* imply availability in markets where service coverage is known to be false

These are business-truth safeguards.

---

# 67. Flexible Service Decisions

Claude and Claude Code may independently:

* use natural service aliases
* improve descriptions
* add relevant relationships
* add supporting content
* add service FAQs
* create localized service pages
* create audience variants
* create comparison content
* create resources
* refine category organization
* improve structured data
* improve service navigation

provided the actual business capability is not being misrepresented.

---

# 68. Registry Success Criteria

The registry is working correctly when it:

* keeps service naming consistent
* simplifies page generation
* prevents duplicate canonical concepts
* supports SEO relationships
* supports analytics
* supports schema
* supports forms
* allows natural-language content
* helps Claude Code move faster

It is failing when it:

* blocks ordinary page development
* creates duplicate service concepts from every keyword
* requires manual approval for routine aliases or relationships
* prevents useful supporting content
* becomes disconnected from implementation data

---

# 69. Core Service Governance Model

Use:

```text
Actual Business Capability
→ Strict

Canonical Service Identity
→ Consistent

Aliases / Search Language
→ Flexible

Supporting Topics
→ Flexible

Page Variants
→ Flexible

Service + Location Generation
→ Flexible

Public Claim of New Service
→ Verify First
```

---

# 70. Final Governing Principle

> **The Master Service Registry is the canonical taxonomy and structured-data foundation for the real service offerings of The Sewer Pros. Use it to keep service IDs, names, relationships, schema, analytics, forms, routing, and page generation consistent. Do not treat it as a permission gate for normal research, content creation, page generation, aliases, audience variants, local variants, or supporting resources. Keep actual business capabilities strict—especially the current prohibition against presenting sewer repair or replacement as offered services—while allowing the content and implementation system to remain flexible, scalable, and productive.**
