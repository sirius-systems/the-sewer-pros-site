# The Sewer Pros — Internal Linking Strategy

**Document:** `16-internal-linking-strategy.md`
**Project:** The Sewer Pros Website Rebuild
**Repository:** `the-sewer-pros-site`
**Status:** Project-Specific Internal Linking Source of Truth

---

# 1. Purpose

This document defines the internal linking strategy for The Sewer Pros website.

It establishes:

* linking relationships between page families
* authority flow across the site
* market-specific linking rules
* service linking rules
* audience linking rules
* commercial linking rules
* resource/topic-cluster linking
* service + location linking
* breadcrumb relationships
* contextual anchor text standards
* cross-market linking rules
* orphan-page prevention
* crawl-depth goals
* hub-and-spoke relationships
* programmatic-linking safeguards
* internal-linking QA expectations

This document does **not** duplicate Site OS Master procedures for:

* automated crawl audits
* internal-link QA workflows
* release gates
* broken-link testing
* orphan detection tooling
* link-analysis methodology
* implementation sequencing

Site OS Master governs **how internal linking is tested and maintained**.

This document defines **how The Sewer Pros pages should relate to one another**.

---

# 2. Core Internal Linking Objective

The internal linking system should help both users and machines understand:

```text
Who The Sewer Pros Is
        ↓
What Services It Provides
        ↓
Where Those Services Are Available
        ↓
Who Those Services Are For
        ↓
What Problems Those Services Solve
        ↓
What Supporting Information Exists
```

Internal linking should reinforce the site's approved entity and information architecture.

The primary goal is not maximizing the number of links.

The goal is creating **meaningful paths between related pages**.

---

# 3. Internal Linking Philosophy

Every important page should function as part of a connected content ecosystem.

Preferred model:

```text
Hub
 ↓
Related Child Pages
 ↓
Supporting Content
 ↓
Related Commercial Intent
 ↓
Return to Hub
```

The website should not behave like:

```text
Page
Page
Page
Page
Page
```

with isolated routes that happen to share the same domain.

---

# 4. Primary Internal Linking Principles

The project should follow these rules:

1. Link based on relevance.
2. Prioritize user usefulness over link volume.
3. Connect commercial and informational intent.
4. Keep major services close to the homepage.
5. Keep major markets close to the homepage.
6. Reinforce parent-child relationships.
7. Connect related services.
8. Connect services to applicable markets.
9. Connect markets to approved local services.
10. Connect audiences to services that solve their needs.
11. Connect resources to commercial pages.
12. Avoid unnecessary cross-market linking.
13. Avoid keyword-stuffed anchors.
14. Avoid sitewide link bloat.
15. Prevent orphan pages.
16. Do not create links to unapproved routes.

---

# 5. Source-of-Truth Hierarchy

Internal links must respect the following project documents.

## Approved Routes

`04-master-page-build-list.md`

Only approved public routes should be included in navigation or contextual linking.

## URL Structure

`05-url-routing-strategy.md`

Controls canonical destination paths.

## Services

`06-master-service-registry.md`

Controls service names and relationships.

## Locations

`07-master-location-registry.md`

Controls geographic relationships.

## Service + Location Opportunities

`08-service-location-matrix.md`

Provides opportunity intelligence but does not authorize links to routes that are not approved.

## Audiences and Commercial

`09-audience-commercial-matrix.md`

Controls valid audience/service/market relationships.

## Content Architecture

`03-information-architecture.md`

Controls page hierarchy.

## Schema Relationships

`15-schema-entity-strategy.md`

Should align with visible internal linking.

---

# 6. Core Site Link Graph

The intended high-level link graph is:

```text
Homepage
│
├── Services Hub
│   ├── Core Service
│   ├── Core Service
│   └── Core Service
│
├── Markets Hub / Market Navigation
│   ├── St. Louis
│   ├── San Diego
│   └── Las Vegas
│
├── Audiences
│   ├── Homeowners
│   ├── Home Buyers
│   ├── Real Estate Agents
│   └── Property Managers
│
├── Commercial
│   ├── Commercial Sewer Services
│   └── Commercial Drain Services
│
└── Resources
    ├── Sewer Inspection Cluster
    ├── Sewer Cleaning Cluster
    ├── Hydro Jetting Cluster
    └── Real Estate Cluster
```

Each branch should then link back into related branches where contextually appropriate.

---

# 7. Homepage Linking Strategy

The homepage should link directly to the site's highest-value commercial entities.

At minimum, homepage links should support:

* primary service hub
* major core services
* St. Louis market hub
* San Diego market hub
* Las Vegas market hub
* commercial hub
* major audience pathways
* resources hub
* contact/conversion path

The homepage should not attempt to link directly to every location or every service + location combination.

---

# 8. Homepage to Service Links

The homepage should prominently link to major approved canonical services.

Potential examples include:

* Sewer Inspection
* Sewer Camera Inspection
* Sewer Cleaning
* Hydro Jetting
* Sewer Line Locating
* Drain Cleaning
* Pre-Purchase Sewer Inspection
* Commercial Sewer Services

The final set should reflect approved launch priorities.

---

# 9. Homepage to Market Links

The homepage should make the three primary markets easy to discover:

```text
St. Louis, MO
San Diego, CA
Las Vegas, NV
```

These should link to market hubs, not directly to arbitrary localized service pages.

---

# 10. Homepage Link Restraint

Do not create a giant homepage footer or body section containing:

* 579 locations
* all 18 services
* all service + location combinations
* all audience combinations

This creates poor user experience and dilutes link hierarchy.

The homepage should point users toward major hubs.

---

# 11. Services Hub Strategy

The Services hub should act as the primary navigation and authority-distribution page for canonical services.

It should link to every approved canonical service page.

Example:

```text
/services/
    ↓
/services/sewer-camera-inspection/
/services/sewer-cleaning/
/services/hydro-jetting/
/services/sewer-line-locating/
```

Exact paths are governed by the URL strategy.

---

# 12. Core Service Page Linking

Every canonical service page should link to:

* the Services hub
* relevant related services
* relevant market hubs
* approved service + location pages
* relevant audience pages
* supporting resource articles
* conversion page or CTA

A canonical service page should function as a major authority node.

---

# 13. Related Service Linking

Related services should be linked when there is a genuine customer journey.

Examples:

```text
Sewer Camera Inspection
    ↓
Sewer Line Locating
```

```text
Sewer Camera Inspection
    ↓
Sewer Cleaning
```

```text
Sewer Cleaning
    ↓
Hydro Jetting
```

```text
Drain Cleaning
    ↓
Sewer Camera Inspection
```

The relationship should be explained in content rather than appearing as an arbitrary keyword link.

---

# 14. Inspection Cluster

The inspection cluster should create strong relationships among:

```text
Sewer Inspection
Sewer Camera Inspection
Sewer Diagnostics
Sewer Line Locating
Pre-Purchase Sewer Inspection
Independent Sewer Inspection
Second-Opinion Content
```

This should become one of the strongest topical clusters on the site.

---

# 15. Cleaning Cluster

The cleaning cluster should connect:

```text
Sewer Cleaning
Drain Cleaning
Hydro Jetting
Camera Inspection
Recurring Backup Content
Root Intrusion Content
Commercial Cleaning
```

This reinforces the relationship between diagnosis and appropriate cleaning.

---

# 16. Real Estate Cluster

The real-estate content ecosystem should connect:

```text
Pre-Purchase Sewer Inspection
    ↓
Home Buyers
    ↓
Real Estate Agents
    ↓
Home Sellers
    ↓
Home Inspectors
    ↓
Relevant Market Pages
    ↓
Real Estate Resources
```

This is especially important in St. Louis and San Diego.

---

# 17. Commercial Cluster

Commercial internal linking should connect:

```text
Commercial Hub
    ↓
Commercial Sewer Inspection
    ↓
Commercial Sewer Cleaning
    ↓
Commercial Hydro Jetting
    ↓
Commercial Drain Cleaning
    ↓
Property Managers
    ↓
Relevant Market Pages
```

Where industry-specific pages are approved, they may connect underneath this structure.

---

# 18. Market Hub Strategy

Each market hub should function as the central local authority page for that market.

Example:

```text
St. Louis
│
├── St. Louis Service Pages
├── Approved St. Louis Location Pages
├── Audience + St. Louis Pages
├── Commercial + St. Louis Pages
└── St. Louis Resources
```

Equivalent architectures should exist for San Diego and Las Vegas.

---

# 19. Market Hub Required Links

Each market hub should generally link to:

* primary approved service + market pages
* approved location pages within the market
* relevant audience pages
* relevant commercial pages
* local educational resources where appropriate
* contact/conversion path

The hub should also link back to:

* homepage
* broader services hub
* locations/markets hub if one exists

---

# 20. St. Louis Link Ecosystem

The St. Louis market should strongly connect:

```text
St. Louis Market Hub
        ↓
Sewer Inspection
Sewer Camera Inspection
Sewer Cleaning
Hydro Jetting
Sewer Line Locating
Pre-Purchase Sewer Inspection
        ↓
Home Buyers
Real Estate Agents
Sewer Lateral Content
        ↓
Approved St. Louis-Area Locations
```

The St. Louis ecosystem should be particularly strong around:

* sewer laterals
* real estate
* independent inspection
* municipal considerations
* established market presence

---

# 21. San Diego Link Ecosystem

The San Diego architecture should emphasize:

```text
San Diego Market Hub
        ↓
Sewer Camera Inspection
Hydro Jetting
Drain Cleaning
Pre-Purchase Sewer Inspection
        ↓
Home Buyers
Real Estate Agents
Property Managers
        ↓
Approved San Diego County Communities
```

Service pages should reinforce the relevant community/location architecture without creating uncontrolled link grids.

---

# 22. Las Vegas Link Ecosystem

The Las Vegas architecture should emphasize:

```text
Las Vegas Market Hub
        ↓
Sewer Inspection
Sewer Camera Inspection
Hydro Jetting
Drain Cleaning
Sewer Line Locating
        ↓
Commercial
Property Managers
        ↓
Approved Las Vegas Valley Locations
```

Commercial and property-management linking may have greater importance here than in other markets.

---

# 23. Location Page Strategy

An approved location page should act as a local navigation node.

It should generally link to:

* parent market hub
* approved service + location pages
* relevant audience + location pages
* relevant commercial + location pages
* nearby approved locations where useful
* broader canonical services
* conversion page

---

# 24. Location-to-Service Linking

Example:

```text
Kirkwood, MO
    ↓
Sewer Camera Inspection in Kirkwood
Hydro Jetting in Kirkwood
Sewer Cleaning in Kirkwood
```

Only link to these routes if they are approved in the Master Page Build List.

Do not generate destination links directly from the 10,422 opportunity relationships.

---

# 25. Service + Location Page Strategy

An approved service + location page should link to:

* canonical service page
* parent market hub
* parent location page where applicable
* closely related local services
* relevant audience pages
* supporting resources
* CTA

Example:

```text
Sewer Camera Inspection in St. Louis
    ↓
Canonical Sewer Camera Inspection
    ↓
St. Louis Hub
    ↓
Pre-Purchase Sewer Inspection in St. Louis
    ↓
Sewer Line Locating in St. Louis
```

---

# 26. Bidirectional Linking Rule

Where two pages represent a strong parent-child or contextual relationship, linking should often be bidirectional.

Example:

```text
Canonical Sewer Camera Inspection
        ↕
St. Louis Sewer Camera Inspection
```

The canonical service page can surface markets where the service is available.

The localized page should link back to the canonical service definition.

---

# 27. Service + Location Cross-Linking

Localized service pages may link to other local services when the relationship is useful.

Example:

```text
Hydro Jetting in Las Vegas
    ↓
Sewer Camera Inspection in Las Vegas
```

because inspection may be relevant before or after cleaning.

Avoid:

```text
Hydro Jetting in Las Vegas
    ↓
Every Other Las Vegas Service
```

without context.

---

# 28. Audience Hub Strategy

Audience pages should connect user-specific needs to relevant service pages.

Example:

```text
Home Buyers
    ↓
Pre-Purchase Sewer Inspection
    ↓
Sewer Camera Inspection
    ↓
Relevant Market Pages
```

Audience pages should not become isolated SEO pages.

---

# 29. Homeowner Linking

The homeowner page may link to:

* sewer inspection
* sewer camera inspection
* sewer cleaning
* hydro jetting
* drain cleaning
* recurring backup resources
* market hubs

The page should prioritize services relevant to homeowner problems.

---

# 30. Home Buyer Linking

Home buyer content should strongly link to:

* pre-purchase sewer inspection
* sewer camera inspection
* sewer inspection report/video resources
* relevant market pages
* agent-oriented content where appropriate

It should also receive links back from:

* pre-purchase sewer inspection page
* real-estate articles
* market pages
* relevant service + location pages

---

# 31. Real Estate Agent Linking

Real estate agent pages should connect to:

* pre-purchase sewer inspection
* home buyer content
* seller content where approved
* local inspection pages
* transaction-related resources

The page should help agents navigate directly to the service most relevant to clients.

---

# 32. Property Manager Linking

Property management content should link to:

* commercial sewer services
* commercial drain cleaning
* commercial hydro jetting
* camera inspection
* recurring maintenance/problem resources
* relevant local commercial pages

---

# 33. Audience + Location Strategy

Example:

```text
Home Buyers in St. Louis
```

should link to:

* Home Buyers canonical audience page
* St. Louis market hub
* St. Louis pre-purchase sewer inspection
* St. Louis sewer camera inspection
* relevant St. Louis real-estate resources

This creates both:

```text
Audience Context
+
Local Context
```

---

# 34. Commercial Hub Strategy

The Commercial hub should distribute authority to all approved commercial service categories.

Potential hierarchy:

```text
Commercial Sewer & Drain Services
    ↓
Commercial Sewer Inspection
Commercial Sewer Cleaning
Commercial Hydro Jetting
Commercial Drain Cleaning
```

It may also link to:

* Property Managers
* Commercial Property Owners
* Facility Managers
* relevant markets

where approved.

---

# 35. Commercial + Location Linking

Example:

```text
Commercial Hydro Jetting in Las Vegas
```

should link to:

* canonical Commercial Hydro Jetting page
* Las Vegas market hub
* Commercial hub
* Property Managers
* related local commercial services
* commercial resources

---

# 36. Industry-Specific Commercial Linking

If pages are later approved for industries such as:

* restaurants
* hospitality
* multifamily
* retail

they should sit below the appropriate commercial hub and link to relevant services.

Example:

```text
Restaurants
    ↓
Commercial Drain Cleaning
    ↓
Commercial Hydro Jetting
```

Do not create large industry link grids unless those pages are approved and substantively differentiated.

---

# 37. Resource Hub Strategy

The Resources hub should organize educational content by meaningful topic clusters.

Potential clusters:

```text
Sewer Inspection
Sewer Cleaning
Hydro Jetting
Sewer Problems
Home Buying
Commercial
```

The resource hub should not become an unstructured chronological blog archive.

---

# 38. Resource-to-Service Linking

Every resource article should have at least one meaningful path toward the relevant commercial service.

Example:

```text
Article:
What Does a Sewer Camera Inspection Show?
        ↓
Sewer Camera Inspection Service
```

This relationship should be contextual and useful.

---

# 39. Service-to-Resource Linking

Commercial pages should also link outward to strong educational resources where they help users understand the service.

Example:

```text
Sewer Camera Inspection
    ↓
What Does a Sewer Camera Inspection Show?
```

This creates reciprocal topical reinforcement.

---

# 40. Topic Cluster Model

Preferred structure:

```text
Canonical Service
    ↕
Supporting Resources
    ↕
Problem Pages
    ↕
Comparison Pages
    ↕
Audience Pages
```

Example:

```text
Hydro Jetting
│
├── Hydro Jetting vs. Snaking
├── What Does Hydro Jetting Remove?
├── Can Hydro Jetting Remove Roots?
├── When Should a Sewer Be Hydro Jetted?
└── Commercial Hydro Jetting
```

---

# 41. Problem Page Linking

Problem-based content should connect symptoms to diagnostic services.

Example:

```text
Recurring Sewer Backups
        ↓
Sewer Camera Inspection
        ↓
Sewer Cleaning
        ↓
Hydro Jetting
```

The content should explain why each service may be relevant rather than simply listing links.

---

# 42. Comparison Page Linking

Comparison pages should link to both concepts being compared where applicable.

Example:

```text
Hydro Jetting vs. Drain Snaking
    ↓
Hydro Jetting
    ↓
Drain Cleaning
```

Comparison pages should also link to relevant diagnostic content when the correct option depends on inspection.

---

# 43. Alternative Page Linking

Example:

```text
Alternatives to Sewer Replacement
```

may link to:

* sewer inspection
* sewer camera inspection
* sewer cleaning
* hydro jetting
* second-opinion inspection

It should not link to a Sewer Replacement service page unless such a service is formally approved.

---

# 44. Second-Opinion Cluster

Second-opinion content should connect strongly to:

```text
Independent Sewer Inspection
Sewer Camera Inspection
Sewer Diagnostics
What to Do Before Sewer Replacement
Sewer Cleaning vs. Repair
```

This cluster should reinforce the company's differentiator without creating negative competitor messaging.

---

# 45. Navigation Links vs. Contextual Links

The project should distinguish:

## Navigation Links

Persistent structural links such as:

* header
* footer
* breadcrumbs
* hub navigation

## Contextual Links

Links embedded naturally in relevant content.

Contextual links are particularly important for:

* topical relationships
* audience relationships
* problem → service pathways
* commercial pathways

Both types matter.

---

# 46. Header Navigation Strategy

Header navigation should prioritize major user journeys.

A likely conceptual hierarchy:

```text
Services
Locations
Who We Help
Commercial
Resources
About
Contact
```

Exact navigation labels are governed by information architecture and design decisions.

Avoid placing dozens of location or service links directly in the primary navigation.

---

# 47. Mega Menu Use

If a mega menu is used, it should be structured around meaningful groups.

Example:

```text
Services
├── Inspection & Diagnostics
├── Cleaning
├── Locating
└── Commercial
```

and:

```text
Locations
├── St. Louis
├── San Diego
└── Las Vegas
```

Do not use mega menus as an excuse to expose every approved SEO page globally.

---

# 48. Footer Strategy

The footer may provide persistent access to:

* main services
* three primary markets
* company pages
* commercial hub
* resources
* contact
* privacy/legal pages

It should not contain every service + location route.

---

# 49. Footer Link Bloat Guardrail

Avoid footer blocks such as:

```text
Sewer Inspection St. Louis
Sewer Inspection Kirkwood
Sewer Inspection Clayton
Sewer Inspection San Diego
Sewer Inspection La Jolla
...
```

repeated across every page.

This creates unnecessary sitewide anchor repetition and weakens navigational clarity.

---

# 50. Breadcrumb Strategy

Breadcrumbs should reflect the logical information hierarchy.

Example:

```text
Home
>
St. Louis
>
Sewer Camera Inspection
```

or:

```text
Home
>
Services
>
Sewer Camera Inspection
```

depending on the approved URL/information architecture.

Breadcrumbs should be visible to users and supported by `BreadcrumbList` structured data.

---

# 51. Breadcrumb Hierarchy Must Be Consistent

Do not use one hierarchy visually and another in schema.

Example:

Visible:

```text
Home > St. Louis > Sewer Inspection
```

Schema should not say:

```text
Home > Services > Sewer Inspection
```

unless that difference is intentionally justified.

---

# 52. Cross-Market Linking Rule

Do not heavily cross-link equivalent service pages between unrelated markets.

Example:

```text
Sewer Inspection in St. Louis
```

normally does **not** need a contextual link to:

```text
Sewer Inspection in San Diego
```

The stronger relationship is:

```text
St. Louis Sewer Inspection
        ↓
Canonical Sewer Inspection
```

Cross-market discovery can occur through:

* canonical service page
* markets hub
* footer
* market selector

---

# 53. When Cross-Market Links Are Appropriate

Cross-market links may be appropriate when:

* a page explicitly compares market coverage
* a company-level page explains all service areas
* a user needs to choose a market
* a service page displays all markets where that service is offered

Do not add them merely to increase internal-link count.

---

# 54. Nearby Location Linking

Location pages may link to nearby approved locations where this helps users navigate.

Example:

```text
Kirkwood
    ↓
Webster Groves
    ↓
Maplewood
```

Only when:

* geographic relationship is real
* routes are approved
* service coverage is accurate
* the links are useful

---

# 55. No Artificial Geographic Rings

Do not create programmatic patterns such as:

```text
Each location links to the next 10 locations alphabetically.
```

or:

```text
Every city links to every city within the metro.
```

Location relationships should be meaningful.

---

# 56. Geographic Hub-and-Spoke

Preferred model:

```text
Market Hub
    ↓
Approved Cities / Communities
        ↓
Approved Local Services
```

rather than:

```text
Hundreds of Locations
↔
Hundreds of Locations
```

This keeps the graph understandable and scalable.

---

# 57. Crawl Depth Goal

High-value commercial pages should generally remain within a small number of logical clicks from the homepage.

Priority pages should ideally be reachable through:

```text
Homepage
    ↓
Hub
    ↓
Page
```

or directly from the homepage where strategically important.

Avoid burying valuable service + market pages several layers deep.

---

# 58. Priority Page Depth

Highest-priority pages include:

* canonical services
* three market hubs
* major commercial pages
* major audience pages

These should receive strong internal-link exposure.

Long-tail resources or secondary location pages may sit deeper within their appropriate clusters.

---

# 59. Orphan Page Rule

No approved indexable page should be published without at least one meaningful internal link from another crawlable page.

Prefer multiple contextual pathways for strategically important pages.

An XML sitemap is not a substitute for internal linking.

---

# 60. New Page Integration Requirement

When a new page is approved, the build process should determine:

1. Which parent page links to it?
2. Which related pages link to it?
3. Which pages should it link back to?
4. Which breadcrumb path applies?
5. Which resource or commercial cluster it belongs to?

A page is not complete merely because the route exists.

---

# 61. Link Equity Concentration

Important pages should receive more internal-link support than low-priority pages.

This does not require an artificial numerical formula.

The site should naturally reinforce:

* core services
* major markets
* high-value audience pages
* important commercial pages
* strategic differentiation pages

---

# 62. Canonical Service Authority

The canonical service page should remain the primary general-purpose authority for that service.

Localized pages should link upward to it.

Supporting articles should link toward it.

Audience pages should link to it where relevant.

This prevents service authority from becoming fragmented across many local pages.

---

# 63. Market Authority

Likewise, the market hub should remain the central geographic authority for the market.

Example:

```text
San Diego Service Pages
        ↑
        |
San Diego Market Hub
        |
        ↓
San Diego Locations
```

The market hub should receive links from local pages as well as distribute links outward.

---

# 64. Audience Authority

The canonical audience page should remain the central source for that audience.

Example:

```text
Home Buyers
        ↑
        |
St. Louis Home Buyers
San Diego Home Buyers
```

where these localized audience routes are approved.

---

# 65. Anchor Text Philosophy

Anchor text should:

* tell the user what the destination contains
* use natural language
* vary appropriately
* align with context

Good examples:

* sewer camera inspection
* learn how sewer camera inspections work
* pre-purchase sewer inspection
* sewer inspections for home buyers
* commercial hydro jetting services
* sewer inspection services in St. Louis

---

# 66. Anchor Text to Avoid

Avoid excessive use of:

```text
click here
learn more
read more
this page
more information
```

when descriptive anchor text would be clearer.

These phrases may still be appropriate in UI components when the surrounding context is already explicit.

---

# 67. Exact-Match Anchor Guardrail

Do not force the same exact-match anchor repeatedly.

Example of poor implementation:

```text
St. Louis sewer camera inspection
St. Louis sewer camera inspection
St. Louis sewer camera inspection
```

across dozens of pages.

Use natural variations when context supports them.

---

# 68. Anchor Variation

Possible variants for the same destination:

```text
sewer camera inspection
camera inspection service
inspect the sewer with a camera
sewer-line video inspection
learn about sewer camera inspections
```

Use variants only when technically accurate and consistent with the service registry.

---

# 69. Service Name Consistency

Anchor variations should not create a new service taxonomy.

For example, if:

```text
Sewer Camera Inspection
```

is canonical, use related wording naturally but do not treat each variation as a separate service page.

---

# 70. Location Anchor Standards

Use accurate geographic names.

Examples:

```text
sewer inspections in St. Louis
St. Louis sewer inspection services
sewer camera inspection in Kirkwood
```

Do not create awkward city-stuffed anchors.

---

# 71. Context Before Link

The ideal contextual link should appear within useful information.

Example:

> If a line keeps backing up after repeated clearing, a **sewer camera inspection** can help determine whether roots, buildup, damage, or another condition is contributing to the problem.

This is stronger than:

> Learn more about **sewer camera inspection**.

when the surrounding paragraph has no relevance.

---

# 72. Related Services Components

Service pages may use a reusable:

```text
Related Services
```

component.

The component should be controlled by approved service relationships rather than automatically showing random services.

Example:

```text
Sewer Camera Inspection
Related Services:
- Sewer Line Locating
- Sewer Cleaning
- Hydro Jetting
```

---

# 73. Related Resources Components

Core service pages may display relevant resources.

Example:

```text
Sewer Camera Inspection

Related Resources:
- What Does a Sewer Camera Inspection Show?
- Should You Inspect a Sewer Before Buying a House?
- Sewer Inspection vs. Sewer Repair Estimate
```

This helps build topic clusters.

---

# 74. Related Location Components

Canonical service pages may show major approved markets.

Example:

```text
Sewer Camera Inspection

Available in:
- St. Louis
- San Diego
- Las Vegas
```

These should link to the most appropriate approved market-specific route.

---

# 75. Local Services Component

Market or location pages may use:

```text
Services Available in [Location]
```

with approved local service links.

This component should be data-driven from the Master Page Build List rather than every theoretical matrix relationship.

---

# 76. Data Source Rule

Internal-link components should prefer route approval data from:

`04-master-page-build-list.md`

or its technical equivalent.

Do not dynamically expose all combinations from:

`08-service-location-matrix.md`

unless those combinations are separately marked as approved.

---

# 77. 10,422 Relationship Safeguard

The 10,422 service × location relationships are not a sitewide link graph.

They represent opportunity data.

Do not:

* generate 10,422 links
* create giant location indexes
* create automated "related locations" based only on matrix existence
* expose unpublished route patterns

The Master Page Build List remains the linkable-route authority.

---

# 78. Sitemap vs. Internal Links

The XML sitemap should help search engines discover approved URLs.

Internal linking should explain their relationships.

These systems complement one another.

Do not rely on the sitemap to compensate for poor internal architecture.

---

# 79. HTML Sitemap

A user-facing HTML sitemap may be considered later if the approved page inventory becomes sufficiently large.

If implemented, it should:

* organize routes by page family
* remain useful to humans
* avoid becoming a raw dump of every programmatic route

It should not be used as the primary authority-distribution mechanism.

---

# 80. Pagination and Large Resource Hubs

If resource hubs grow substantially, pagination or topic-based sub-hubs may be preferable to one enormous archive page.

Important evergreen resources should remain accessible through topical navigation rather than relying exclusively on chronology.

---

# 81. Blog Chronology Is Secondary

For SEO architecture, this:

```text
Published August 2026
Published July 2026
Published June 2026
```

is less important than:

```text
Sewer Inspection Resources
Hydro Jetting Resources
Home Buyer Resources
```

Chronological archives may exist, but topic relationships should drive internal linking.

---

# 82. Page Family Linking Matrix

| Source Page           | Primary Destinations                                        |
| --------------------- | ----------------------------------------------------------- |
| Homepage              | Services, Markets, Audiences, Commercial, Resources         |
| Services Hub          | Canonical Services                                          |
| Core Service          | Related Services, Markets, Resources, Audiences             |
| Market Hub            | Local Services, Locations, Audiences, Commercial            |
| Location Page         | Market Hub, Local Services, Nearby Locations                |
| Service + Location    | Canonical Service, Market, Location, Related Local Services |
| Audience Page         | Relevant Services, Markets, Resources                       |
| Audience + Location   | Audience Hub, Market, Local Services                        |
| Commercial Hub        | Commercial Services, Markets, Commercial Audiences          |
| Commercial Service    | Commercial Hub, Markets, Resources                          |
| Commercial + Location | Commercial Service, Market, Related Local Services          |
| Resource Article      | Relevant Service, Audience, Market, Related Resources       |
| Comparison Page       | Both Compared Topics, Relevant Service                      |
| Alternative Page      | Diagnostic Services, Supporting Resources                   |

---

# 83. Inspection Internal Link Example

```text
/sewer-camera-inspection/
│
├── /sewer-line-locating/
├── /pre-purchase-sewer-inspection/
├── /resources/what-does-a-sewer-camera-inspection-show/
├── /st-louis-mo/sewer-camera-inspection/
├── /san-diego-ca/sewer-camera-inspection/
└── /las-vegas-nv/sewer-camera-inspection/
```

Exact routes depend on approved URL strategy.

---

# 84. Real Estate Internal Link Example

```text
/home-buyers/
│
├── /pre-purchase-sewer-inspection/
├── /sewer-camera-inspection/
├── /real-estate-agents/
├── /resources/sewer-inspection-before-buying-a-house/
└── Approved Local Buyer Pages
```

This creates a defined real-estate authority cluster.

---

# 85. Commercial Internal Link Example

```text
/commercial/
│
├── /commercial/sewer-inspection/
├── /commercial/sewer-cleaning/
├── /commercial/hydro-jetting/
├── /commercial/drain-cleaning/
├── /property-managers/
└── Approved Commercial + Market Pages
```

---

# 86. Resource Cluster Example

```text
Sewer Inspection
│
├── What Does a Sewer Camera Inspection Show?
├── How Does a Sewer Camera Work?
├── Common Sewer Defects Seen on Camera
├── Sewer Inspection Before Buying a Home
├── When to Get a Second Sewer Inspection
└── What to Do Before Sewer Replacement
```

Each supporting page should link toward the most relevant canonical commercial page.

---

# 87. Comparison Cluster Example

```text
Hydro Jetting
│
├── Hydro Jetting vs. Snaking
├── Hydro Jetting vs. Mechanical Cleaning
├── When Is Hydro Jetting Appropriate?
└── Can Hydro Jetting Remove Roots?
```

Comparison content should support rather than compete with the canonical service page.

---

# 88. Link Placement

Important contextual links should appear naturally within the relevant section.

Do not rely solely on:

* footer links
* "related posts" widgets
* breadcrumbs

for important relationships.

The strongest pages should receive meaningful body-content links.

---

# 89. Above-the-Fold Links

A page's primary CTA may appear near the top.

However, there is no requirement to place SEO-focused contextual links in the opening paragraph if doing so harms clarity.

Internal links should appear where they make sense.

---

# 90. Link Frequency

There is no project-wide numeric quota such as:

```text
5 internal links per 1,000 words
```

Link count should depend on:

* page depth
* user intent
* number of genuinely related destinations
* navigational need

Avoid both under-linking and link stuffing.

---

# 91. Repeated Link Rule

It is acceptable for an important destination to be linked more than once from a long page when:

* links serve different user contexts
* one is navigation and another contextual
* the repetition is useful

Avoid excessive repeated links to the same destination in adjacent sections.

---

# 92. Button vs. Text Link

Use buttons primarily for:

* primary conversions
* high-priority navigation actions

Use contextual text links for:

* educational relationships
* related services
* related resources
* topical navigation

Do not turn every internal link into a large CTA button.

---

# 93. CTA Links

Conversion links should lead directly to the intended action.

Examples:

```text
Schedule a Sewer Inspection
Request Commercial Service
Contact The Sewer Pros
```

Do not make users navigate through multiple generic pages before reaching the conversion path.

Exact CTA architecture is governed by:

`17-conversion-architecture.md`

---

# 94. Mobile Navigation

Internal linking must remain usable on mobile.

Avoid:

* oversized link grids
* hundreds of expandable location links
* nested menus that require excessive taps

Market and service hubs should reduce navigation complexity.

---

# 95. Accessibility

Link text should make sense without relying entirely on surrounding visual styling.

Avoid repeated ambiguous links such as:

```text
Learn More
Learn More
Learn More
```

when screen-reader users cannot easily distinguish destinations.

Where cards use generic CTA labels, accessible names should clarify the destination.

---

# 96. Broken-Link Handling

Internal links must resolve directly to the intended canonical destination.

Avoid intentionally linking through redirects.

Example:

Bad:

```text
Page A
↓
Old URL
↓ 301
New URL
```

Preferred:

```text
Page A
↓
New URL
```

Redirects remain necessary for external/migration continuity, not for routine internal navigation.

---

# 97. Migration Link Updating

During migration:

* update old internal URLs
* remove redirect-chain dependencies
* preserve relationships among equivalent pages
* ensure high-value legacy pages continue pointing to relevant destinations

See:

`20-migration-redirect-plan.md`

---

# 98. Retired Page Handling

When a page is retired:

1. remove or update internal links to it
2. determine correct redirect behavior
3. update related modules
4. update sitemap
5. update breadcrumbs if needed

Do not allow dead internal links to remain.

---

# 99. New Market Expansion

When a new market is added:

```text
New Market Hub
        ↓
Approved Services
        ↓
Approved Locations
        ↓
Approved Audiences
        ↓
Approved Commercial Pages
```

Then:

* homepage or market navigation links to the new market
* canonical services may link to the new approved local services
* new local pages link back to canonical services
* relevant resources may gain market-specific links only where useful

The architecture should scale without rebuilding the global link model.

---

# 100. New Service Expansion

When a service is approved:

1. add it to the service registry
2. approve routes
3. determine parent service/category
4. link it from Services hub
5. identify related services
6. identify markets where offered
7. identify supporting audiences
8. identify resources
9. update contextual links
10. update schema relationships

---

# 101. Link Relevance Hierarchy

When choosing links, prioritize:

```text
1. Directly Related Page
2. Parent/Child Page
3. Related Service
4. Relevant Audience
5. Relevant Market
6. Supporting Resource
7. Nearby Location
```

Do not insert less-relevant links merely because the destination needs more authority.

---

# 102. No Artificial PageRank Sculpting

Do not use internal `nofollow` attributes to manipulate internal authority flow.

Normal approved internal links should generally remain crawlable.

Use `nofollow` only where technically appropriate for a reason unrelated to manipulating internal PageRank.

---

# 103. JavaScript Link Guardrail

Core navigational links should render as normal crawlable anchors.

Prefer:

```html
<a href="/target/">...</a>
```

or the appropriate Next.js `Link` component producing a standard anchor.

Do not hide core navigation behind client-side events without valid href destinations.

---

# 104. Anchor Destination Accuracy

The anchor must accurately describe the destination.

Do not use:

```text
sewer repair
```

to link to:

```text
sewer inspection
```

even if the user may ultimately need inspection before repair.

Use:

```text
get an independent sewer inspection
```

instead.

---

# 105. Repair Content Linking Guardrail

Because The Sewer Pros is not positioned as a repair contractor, educational repair content should link toward diagnostic services.

Example:

```text
Do I Need Sewer Replacement?
        ↓
Independent Sewer Inspection
```

not:

```text
Do I Need Sewer Replacement?
        ↓
Sewer Replacement Service
```

unless repair services are formally approved later.

---

# 106. Entity Alignment

Internal linking should reinforce the entity graph defined in:

`15-schema-entity-strategy.md`

Example:

Visible relationship:

```text
Pre-Purchase Sewer Inspection
        ↓
Home Buyers
```

Schema relationship:

```text
Service
        ↓ audience
Home Buyers
```

These systems should reinforce one another.

---

# 107. Semantic Alignment

Internal links, headings, breadcrumbs, schema, and page copy should consistently communicate relationships.

Example:

```text
Page:
Sewer Camera Inspection in San Diego

Breadcrumb:
Home > San Diego > Sewer Camera Inspection

Internal Parent:
San Diego Market Hub

Canonical Service Link:
Sewer Camera Inspection

Schema:
Service areaServed San Diego
```

This creates a coherent semantic model.

---

# 108. Link Graph and Search Intent

Internal linking should help keep similar pages from competing unnecessarily.

Example:

```text
Pre-Purchase Sewer Inspection
```

should link to:

```text
Home Buyers
```

while maintaining distinct intents:

```text
Service Intent
vs.
Audience Intent
```

The linking relationship clarifies that these pages complement rather than duplicate one another.

---

# 109. Cannibalization Prevention

If several pages target related concepts, internal linking should clearly establish their hierarchy.

Example:

```text
Sewer Inspection
        ↓
Sewer Camera Inspection
```

if the service registry defines sewer inspection as the broader concept.

Or reverse the relationship if the registry determines another taxonomy.

Do not create ambiguous parallel pages without clear relationships.

---

# 110. Internal Search Consideration

If the site later includes internal search, results should use the same:

* canonical titles
* approved routes
* service taxonomy
* location taxonomy

Internal search should not surface unpublished opportunity URLs.

---

# 111. Linking From High-Authority Resources

Strong informational resources may naturally earn backlinks.

Those resources should contain contextual links to the relevant commercial page so external authority can flow into the core commercial architecture.

Example:

```text
External Link
    ↓
Resource Article
    ↓
Sewer Camera Inspection Service
```

This should happen naturally through useful contextual navigation.

---

# 112. Linkable Asset Strategy

Potential highly linkable resources may include:

* sewer inspection guides
* homebuyer checklists
* sewer defect guides
* local sewer lateral resources
* educational diagrams
* sewer camera interpretation guides

These should connect back to relevant services and audiences.

---

# 113. Internal Link Modules

Reusable components may include:

```text
Related Services
Related Resources
Services in This Market
Who We Help
Nearby Service Areas
Commercial Services
Next Steps
```

Each module should be populated from approved relationships.

---

# 114. Dynamic Component Guardrail

Dynamic modules should not make linking decisions based only on:

```text
same keyword
same city
same category
```

without an approved relationship model.

Automation should implement strategy, not invent it.

---

# 115. Recommended Relationship Data

The technical architecture may eventually maintain relationships such as:

```text
relatedServiceIds
relatedResourceIds
marketIds
locationIds
audienceIds
commercialIds
parentId
childIds
```

The exact implementation belongs in:

`02-nextjs-technical-architecture.md`

---

# 116. Linking Priority Metadata

For large page inventories, the project may benefit from relationship priority values such as:

```text
primary
secondary
optional
```

Example:

```text
Sewer Camera Inspection
related services:
- Sewer Line Locating: primary
- Sewer Cleaning: primary
- Hydro Jetting: secondary
```

This can prevent automated modules from becoming excessively large.

---

# 117. Page Build Approval and Linking

If an opportunity exists in a matrix but the destination page is not approved:

Do not link to a nonexistent future URL.

Instead:

* link to the closest approved canonical page
* omit the link
* add the route later when formally approved

---

# 118. No Placeholder Links

Do not publish:

```text
href="#"
```

or:

```text
href="/coming-soon/"
```

for planned SEO routes.

Only live, useful destinations should appear in production navigation.

---

# 119. Launch Link Strategy

At launch, internal linking should prioritize:

1. homepage
2. core services
3. three market hubs
4. launch-approved service + market pages
5. major audiences
6. commercial hub/pages
7. launch resources
8. conversion pages

Post-launch content should be connected into these existing hubs as it is published.

---

# 120. Post-Launch Expansion

As topic clusters grow, link architecture should become deeper rather than simply broader.

Example:

```text
Launch:
Sewer Camera Inspection
    ↓
3 Resources
```

Later:

```text
Sewer Camera Inspection
    ↓
Inspection Guide
    ↓
Homebuyer Cluster
    ↓
Second Opinion Cluster
    ↓
Defect Cluster
```

Expansion should reinforce established authority nodes.

---

# 121. Internal Linking QA Questions

A page should pass questions such as:

* Can users reach this page from a logical parent?
* Does this page link back to its parent?
* Are related services linked?
* Are relevant resources linked?
* Are geographic relationships accurate?
* Are audience relationships accurate?
* Are there links to unapproved pages?
* Are anchor texts descriptive?
* Is the page orphaned?
* Does the linking pattern align with schema?
* Are links useful rather than excessive?

The specific testing workflow remains governed by Site OS Master.

---

# 122. Project-Specific Linking Guardrails

The following are prohibited:

* linking to unapproved service + location routes
* creating giant sitewide location link blocks
* cross-linking every city to every other city
* footer keyword stuffing
* artificial exact-match anchor repetition
* links to fake repair services
* links through avoidable redirects
* location pages linking to nonexistent local offices
* automated links based only on matrix existence
* unrelated links inserted only to distribute authority
* orphan indexable pages

---

# 123. Priority Internal Link Clusters

The strongest initial clusters should be:

## Cluster 1 — Independent Inspection

```text
Sewer Inspection
Sewer Camera Inspection
Sewer Diagnostics
Second Opinions
Repair Decision Content
```

## Cluster 2 — Real Estate

```text
Pre-Purchase Sewer Inspection
Home Buyers
Real Estate Agents
Home Sellers
Inspection Resources
```

## Cluster 3 — Cleaning

```text
Sewer Cleaning
Hydro Jetting
Drain Cleaning
Recurring Backups
Root Intrusion
```

## Cluster 4 — Commercial

```text
Commercial Sewer Services
Commercial Drain Services
Commercial Hydro Jetting
Property Managers
Commercial Markets
```

## Cluster 5 — Local Markets

```text
St. Louis
San Diego
Las Vegas
Approved Locations
Approved Local Services
```

---

# 124. Recommended Authority Flow

The preferred internal authority model is:

```text
Homepage
    ↓
Primary Hubs
    ↓
Core Commercial Pages
    ↓
Localized Commercial Pages
    ↕
Audience Pages
    ↕
Resource Content
```

Supporting informational pages should strengthen commercial and entity pages rather than become disconnected content islands.

---

# 125. Final Internal Linking Principle

The Sewer Pros internal linking architecture should mirror the way a knowledgeable customer would naturally explore the site:

```text
I Have a Problem
        ↓
What Might Be Happening?
        ↓
What Service Helps Diagnose It?
        ↓
Is That Service Available Where I Am?
        ↓
Does It Apply to My Situation?
        ↓
What Else Should I Know?
        ↓
How Do I Contact The Sewer Pros?
```

The governing standard is:

> **Every internal link should help clarify a real relationship between a service, market, location, audience, problem, resource, or conversion path. The website should distribute authority through deliberate hubs and contextual relationships—not through indiscriminate link volume, keyword-stuffed navigation, or automated exposure of every theoretical service-location combination.**
