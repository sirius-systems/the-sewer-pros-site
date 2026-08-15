# The Sewer Pros — Migration & Redirect Plan

**Document:** `20-migration-redirect-plan.md`
**Project:** The Sewer Pros Website Rebuild
**Repository:** `the-sewer-pros-site`
**Status:** Project-Specific Migration and Redirect Source of Truth

---

# 1. Purpose

This document defines the migration, URL preservation, redirect, canonicalization, and launch-protection strategy for The Sewer Pros website rebuild.

It establishes project-specific requirements for:

* legacy URL inventory
* old-to-new URL mapping
* redirect rules
* canonical preservation
* domain handling
* www/apex handling
* HTTP/HTTPS normalization
* trailing-slash consistency
* query-parameter handling
* broken-link prevention
* redirect-chain prevention
* sitemap transition
* Search Console transition
* indexation protection
* legacy content consolidation
* retired-page handling
* market-page migration
* service-page migration
* resource migration
* GBP landing-page continuity
* external backlink preservation
* launch monitoring
* post-launch redirect maintenance

This document does **not** duplicate generalized Site OS Master procedures for:

* crawler setup
* redirect QA automation
* launch checklists
* migration QA workflows
* environment validation
* DNS change workflows
* deployment gates
* post-launch monitoring cadence

Site OS Master governs **how the migration is executed and validated**.

This document defines **what The Sewer Pros migration must preserve and how routing decisions should be handled**.

---

# 2. Migration Objective

The primary migration objective is:

> **Replace the existing website with the new Next.js multi-market architecture without unnecessarily losing search visibility, backlinks, user pathways, or business continuity.**

The migration should preserve legitimate existing value while moving the website into the approved new architecture.

The process should prioritize:

```text
Existing Search Equity
+
Existing Backlinks
+
Existing User Paths
+
Approved New Architecture
+
Canonical Consistency
```

---

# 3. Migration Principle

The new website should not be treated as a completely unrelated site simply because the architecture is being rebuilt.

Existing URLs may contain accumulated value from:

* search engine indexing
* backlinks
* citations
* Google Business Profile
* social links
* customer bookmarks
* real-estate referrals
* business directories
* historical marketing
* direct links in emails or documents

Where appropriate, that value should be transferred through direct permanent redirects.

---

# 4. Migration Source of Truth

Redirect decisions must align with:

### Approved Routes

`04-master-page-build-list.md`

### URL Standards

`05-url-routing-strategy.md`

### Services

`06-master-service-registry.md`

### Locations

`07-master-location-registry.md`

### Information Architecture

`03-information-architecture.md`

### SEO Strategy

`10-seo-strategy.md`

### Analytics

`19-analytics-measurement.md`

No redirect should point to an unapproved destination simply because a similar route could be generated.

---

# 5. Legacy URL Inventory Required

Before production migration, create a complete inventory of known legacy URLs.

Sources should include, where available:

* current website crawl
* XML sitemap
* Search Console indexed pages
* Search Console performance pages
* Google indexed URLs
* Bing indexed URLs
* analytics landing pages
* backlink reports
* Google Business Profile links
* social profile links
* manually known business pages
* old marketing URLs
* legacy PDFs or documents
* redirects already in place

The goal is to identify every URL with potential:

```text
Search Value
Traffic
Backlinks
Business Use
External References
```

---

# 6. Legacy URL Classification

Each legacy URL should be classified before launch.

Recommended statuses:

```text
KEEP
REDIRECT
CONSOLIDATE
RETIRE
INVESTIGATE
```

---

# 7. KEEP

Use `KEEP` when the existing path remains appropriate within the approved new architecture.

Example:

```text
Old:
/contact/

New:
/contact/
```

No redirect is needed if the canonical path is unchanged.

Content and metadata may still change.

---

# 8. REDIRECT

Use `REDIRECT` when the old page has a clear new equivalent.

Example:

```text
Old:
/camera-inspections/

New:
/services/sewer-camera-inspection/
```

The old URL should permanently redirect directly to the new canonical destination.

---

# 9. CONSOLIDATE

Use `CONSOLIDATE` when multiple legacy pages overlap heavily and should become one stronger canonical page.

Example concept:

```text
/sewer-video/
/camera-inspection/
/sewer-camera/

        ↓

/services/sewer-camera-inspection/
```

Each legacy route should redirect directly to the approved canonical service page.

---

# 10. RETIRE

Use `RETIRE` when a legacy page:

* has no valid replacement
* represents an unapproved service
* contains obsolete information
* has no meaningful backlinks or traffic
* should not continue to exist

Retirement does not automatically mean redirecting to the homepage.

The correct handling depends on whether a useful equivalent exists.

---

# 11. INVESTIGATE

Use `INVESTIGATE` when:

* intent is unclear
* page has significant backlinks
* content does not map cleanly
* existing traffic is meaningful
* service positioning may conflict with the new strategy
* historical URL purpose is uncertain

Do not make high-value redirect decisions from URL slugs alone.

---

# 12. Redirect Status Code

Permanent legacy URL moves should normally use:

```text
301
```

or the equivalent permanent redirect behavior supported by the production platform.

The important requirement is that search engines and browsers receive a permanent redirect signal.

Do not use temporary redirects for permanent architecture changes.

---

# 13. Direct Redirect Rule

Every legacy URL should redirect directly to its final destination.

Preferred:

```text
Old URL
   ↓ 301
Final URL
```

Avoid:

```text
Old URL
   ↓
Intermediate URL
   ↓
Another URL
   ↓
Final URL
```

Redirect chains create:

* slower crawling
* slower user experience
* unnecessary complexity
* weaker migration clarity

---

# 14. Redirect Loop Guardrail

No redirect rule should create:

```text
A → B → A
```

or:

```text
A → A
```

or any circular route chain.

Redirect behavior must be tested before production launch.

---

# 15. Homepage Redirect Guardrail

Do not redirect every removed URL to the homepage.

Bad:

```text
/old-sewer-camera-page/
        ↓
/
```

when a relevant service page exists.

A redirect should preserve user intent whenever possible.

Preferred hierarchy:

```text
Exact Equivalent
        ↓
Closest Relevant Parent
        ↓
Relevant Topic Hub
        ↓
410/404 when truly no replacement exists
```

Homepage should only be used when it is genuinely the closest logical destination.

---

# 16. Redirect Intent Matching

The destination should satisfy approximately the same search/user intent as the old page.

Example:

```text
Old:
hydro jetting service

New:
hydro jetting service
```

Good.

Example:

```text
Old:
hydro jetting service

New:
about us
```

Poor.

The migration should preserve topical relevance.

---

# 17. Service Migration

Legacy service pages should map to canonical services defined in:

`06-master-service-registry.md`

Example framework:

```text
Legacy Sewer Scope Page
        ↓
Canonical Sewer Camera Inspection
```

or:

```text
Legacy Sewer Cleaning Page
        ↓
Canonical Sewer Cleaning
```

Do not create a new service solely to preserve an outdated legacy slug.

---

# 18. Service Alias Migration

Legacy terminology may differ from the new canonical service taxonomy.

Examples could include:

```text
camera inspection
video inspection
sewer scope
sewer video inspection
```

If these represent the same approved service, they should normally consolidate into the canonical service route.

The redirect system should preserve old search and backlink value while the new architecture maintains one primary service entity.

---

# 19. Sewer Repair Legacy Content

Special attention is required if the current site contains pages or references that appear to offer:

* sewer repair
* sewer replacement
* trenchless repair
* excavation
* lining

The Sewer Pros is not to be positioned as a repair or replacement contractor unless specifically approved.

Legacy repair-related URLs should therefore be reviewed individually.

Possible outcomes include:

```text
Legacy Repair Page
        ↓
Independent Inspection / Repair Decision Resource
```

if the old page has relevant informational intent.

Or:

```text
Legacy Repair Page
        ↓
Retire
```

if no accurate replacement exists.

Do not preserve inaccurate service positioning merely to retain a URL.

---

# 20. Repair Keyword Redirect Guardrail

Do not redirect a legacy repair-service page to a generic sewer inspection page solely to retain search traffic if the user expectation would be misleading.

The new destination must clearly address the user's intent.

Where appropriate, a resource such as:

```text
What to Do Before Sewer Replacement
```

or:

```text
Independent Sewer Repair Second Opinion
```

may be a more accurate destination if approved.

---

# 21. Market Migration

Existing geographically targeted pages should be mapped into the approved market architecture.

Primary market hubs:

```text
St. Louis, MO
San Diego, CA
Las Vegas, NV
```

Legacy local pages should be evaluated according to:

* current visibility
* backlinks
* geographic intent
* actual service coverage
* approved page inventory

---

# 22. St. Louis Legacy Priority

St. Louis is the market most likely to contain accumulated legacy search and local SEO value.

Migration should pay special attention to:

* St. Louis service pages
* sewer lateral pages
* inspection pages
* homebuyer content
* municipality-related pages
* GBP-linked URLs
* pages with backlinks
* pages producing calls or leads

These should not be casually renamed or retired without mapping.

---

# 23. San Diego Legacy Priority

If existing San Diego content exists, evaluate whether it maps to:

* San Diego market hub
* service + San Diego pages
* audience + San Diego pages
* commercial + San Diego pages
* approved community pages

Because San Diego currently has no GBP, organic URL continuity may be especially valuable.

---

# 24. Las Vegas Legacy Priority

Apply the same logic to Las Vegas.

If current legacy Las Vegas content has little existing history, the new architecture may have more freedom.

However, any indexed or externally linked legacy routes must still be inventoried.

---

# 25. Location Page Migration

Legacy location pages should map to:

```text
Approved Location Page
```

when a valid equivalent exists.

Example:

```text
Old:
/areas/kirkwood/

New:
/st-louis-mo/kirkwood/
```

Exact paths depend on:

`05-url-routing-strategy.md`

Do not generate an approved replacement solely because the legacy URL exists.

The location must still satisfy current business and page-quality requirements.

---

# 26. Location Consolidation

If multiple legacy pages target the same location with weak differentiation:

```text
/kirkwood-sewer-service/
/kirkwood-sewer-inspection/
/sewer-service-kirkwood/
```

they should not automatically be recreated one-for-one.

They may consolidate into:

```text
Kirkwood Location Hub
```

or approved service + location pages based on intent.

---

# 27. Neighborhood Migration

Neighborhood pages should only be preserved as dedicated destinations when:

* actual service coverage exists
* the route is approved
* unique content value is possible
* legacy search/backlink value justifies continuation

Otherwise, redirect to the closest appropriate approved geographic parent.

---

# 28. Service + Location Migration

If legacy routes already target:

```text
Service + Location
```

map them to the approved canonical pattern.

Example:

```text
Old:
/st-louis-sewer-camera/

New:
/st-louis-mo/sewer-camera-inspection/
```

The new route should preserve the same commercial intent.

---

# 29. Audience Content Migration

Existing pages targeting audiences such as:

* home buyers
* real estate agents
* property managers

should be mapped into the approved audience architecture.

Example:

```text
Legacy:
sewer-inspection-homebuyers

        ↓

Canonical:
pre-purchase-sewer-inspection
or
home-buyers
```

depending on the original intent.

Do not create duplicate audience/service pages if one approved page satisfies the legacy purpose.

---

# 30. Commercial Content Migration

Legacy commercial pages should map to the appropriate approved commercial destination.

Possible examples:

```text
Commercial Sewer Service
Commercial Drain Cleaning
Commercial Hydro Jetting
Property Management Sewer Services
```

Commercial traffic should not be redirected into purely residential pages when a relevant commercial page exists.

---

# 31. Resource Migration

Legacy articles and educational content should be reviewed individually.

Potential outcomes:

```text
KEEP
UPDATE
CONSOLIDATE
REDIRECT
RETIRE
```

Strong legacy informational content may provide valuable:

* search traffic
* backlinks
* topical authority
* internal-link equity

It should not be discarded simply because the design is being rebuilt.

---

# 32. Resource URL Preservation

If an existing high-performing article URL remains semantically sound, preserving the same URL may be preferable to changing it.

Changing URLs without strategic reason introduces unnecessary migration risk.

A redesign does not require a URL change.

---

# 33. Resource Consolidation

If multiple weak resources overlap:

```text
Signs of Sewer Problems
Common Sewer Problems
How to Know You Have Sewer Problems
```

they may be consolidated into one stronger resource.

Each old URL should redirect to the consolidated canonical destination.

---

# 34. High-Value Legacy URL Rule

Before changing any legacy URL with:

* significant organic clicks
* significant impressions
* backlinks
* referral traffic
* conversions
* GBP usage

perform explicit review.

The default should be:

> Preserve the URL when practical unless the new architecture provides a materially better reason to change it.

---

# 35. Backlink Preservation

Legacy URLs with external backlinks should receive special priority.

Backlinks may come from:

* local organizations
* municipalities
* real estate websites
* directories
* social profiles
* media
* blogs
* partner websites

Where a page changes, redirect it directly to the closest relevant canonical destination.

---

# 36. Backlink Reclamation

After migration, high-value external links still pointing to redirected legacy URLs may be candidates for outreach.

Where practical, request that important referring sites update links directly to the new canonical URL.

This reduces long-term dependency on redirects.

---

# 37. Google Business Profile Continuity

The existing St. Louis GBP must not point to a broken or obsolete URL after launch.

Before migration, identify the current GBP website destination.

After launch:

* confirm redirect if URL changed
* update GBP to the preferred new canonical destination where appropriate
* verify website button functionality
* preserve market intent

Detailed GBP strategy belongs in:

`11-local-seo-gbp-strategy.md`

---

# 38. Social Profile Continuity

Existing official social profiles may contain legacy website links.

Known current social presence includes San Diego Instagram and Facebook.

After launch, review official profile website links and update them to the production canonical domain where appropriate.

Do not rely permanently on redirects when profile links are editable.

---

# 39. Citation Continuity

Business directories and citations may reference:

* legacy domain
* legacy URLs
* old phone numbers
* old addresses

Migration should identify high-value citations and determine whether updates are needed.

This is especially important for St. Louis local SEO.

---

# 40. Domain Migration Scenario

If the rebuild remains on the existing production domain:

```text
Domain unchanged
+
Architecture changed
```

the primary migration task is URL mapping.

If the canonical domain also changes:

```text
Old Domain
        ↓
New Domain
```

the project becomes a full domain migration and requires stricter one-to-one redirect coverage.

The final domain decision must be documented before launch.

---

# 41. Domain Redirect Rule

If the domain changes, every valuable old-domain URL should redirect directly to the corresponding new-domain URL.

Preferred:

```text
https://old-domain.com/page/
        ↓ 301
https://new-domain.com/new-page/
```

Avoid:

```text
old-domain/page
        ↓
new-domain/
        ↓
new-domain/new-page
```

---

# 42. Whole-Domain Redirect Guardrail

Do not simply redirect:

```text
every old URL
        ↓
new homepage
```

during a domain migration.

This discards topical relevance and weakens migration continuity.

---

# 43. HTTPS Standard

Production should have one canonical HTTPS version.

All HTTP requests should redirect permanently to HTTPS.

Example:

```text
http://example.com/page
        ↓
https://example.com/page
```

No production page should be canonically served over HTTP.

---

# 44. www vs. Apex

One host version must be selected as canonical:

```text
www.example.com
```

or:

```text
example.com
```

The non-canonical version should permanently redirect to the canonical version.

The project should not allow both to serve independent indexable copies.

---

# 45. Canonical Host Consistency

The chosen host must be used consistently in:

* canonical tags
* sitemap
* schema `@id`
* Open Graph URLs
* internal links
* Search Console configuration
* GBP where appropriate

Do not mix www and apex versions.

---

# 46. Trailing Slash Strategy

The site should use the routing convention established in:

`05-url-routing-strategy.md`

All alternate variants should normalize consistently.

Example if trailing slash is canonical:

```text
/services/sewer-inspection
        ↓
/services/sewer-inspection/
```

or the reverse if no slash is selected.

Avoid serving both variants as independent `200` pages.

---

# 47. Case Normalization

URLs should normally be lowercase.

Requests containing uppercase route variants should normalize to the approved lowercase canonical route where necessary.

Example:

```text
/Sewer-Inspection/
        ↓
/sewer-inspection/
```

Do not intentionally create case-sensitive duplicate routes.

---

# 48. Protocol + Host + Path Normalization

A single request should ideally resolve in one redirect.

Poor:

```text
http://www.example.com/Page
        ↓
https://www.example.com/Page
        ↓
https://example.com/Page
        ↓
https://example.com/page/
```

Preferred:

```text
http://www.example.com/Page
        ↓
https://example.com/page/
```

where technically feasible.

---

# 49. Query Parameter Handling

The migration should review legacy parameters such as:

```text
?utm_source=
?id=
?page=
?service=
?city=
```

Tracking parameters should generally resolve to the canonical underlying page.

Do not create indexable parameter-based duplicates.

---

# 50. UTM Parameters

UTM-tagged URLs should normally:

* load the canonical page
* preserve analytics attribution
* use canonical markup pointing to the clean URL

They should not redirect away solely to remove UTM parameters if doing so would break attribution unnecessarily.

---

# 51. Legacy Search Parameters

If the old site generated parameterized pages for:

* search
* filters
* locations
* categories

they should not automatically be preserved as indexable URLs.

Determine whether a clean approved route replaces them.

---

# 52. Canonical Tags

Every indexable production page should reference the correct canonical URL.

Canonical tags should:

* use production HTTPS domain
* use approved host
* use approved slash convention
* not point to staging
* not point through redirects

The canonical should normally self-reference on canonical indexable pages.

---

# 53. Redirect and Canonical Alignment

If:

```text
Old A → New B
```

then `New B` should canonically reference itself.

Do not create:

```text
Old A → New B
New B canonical → Old A
```

or conflicting signals.

---

# 54. Sitemap Transition

The new XML sitemap should contain only:

* live
* canonical
* indexable
* approved URLs

Do not include:

* redirecting URLs
* 404 URLs
* noindex utility pages
* staging URLs
* unapproved matrix routes

---

# 55. Legacy Sitemap

Do not continue serving an outdated legacy sitemap after launch if it lists obsolete routes.

If search engines request an old sitemap URL, either:

* update it to the current sitemap content
* redirect appropriately
* preserve it temporarily if necessary for migration monitoring

based on technical architecture.

---

# 56. Search Console Sitemap Transition

After launch:

1. confirm production sitemap
2. submit/update sitemap in Search Console
3. monitor discovery
4. monitor indexing
5. investigate unexpected exclusions

Do not submit thousands of unapproved opportunity URLs.

---

# 57. Bing Sitemap Transition

Apply the same sitemap discipline in Bing Webmaster Tools.

---

# 58. Internal Link Migration

All internal links should point directly to new canonical URLs.

Do not leave internal links pointing to old URLs simply because redirects exist.

Redirects preserve external continuity.

Internal navigation should use final destinations.

---

# 59. Navigation Migration

Before launch, verify all:

* header links
* mega menu links
* footer links
* breadcrumb links
* card links
* CTA links
* resource links

against approved routes.

Do not allow obsolete legacy paths to remain in global navigation.

---

# 60. Content-Level Link Migration

Legacy body content may contain old internal links.

These should be updated directly.

Example:

```text
Old article → /old-camera-page/
```

should become:

```text
Updated article → /services/sewer-camera-inspection/
```

rather than relying on a redirect.

---

# 61. Asset Migration

Review URLs for:

* PDFs
* downloadable reports
* images
* brochures
* documents

If externally linked assets are removed or relocated, determine whether redirects or replacement files are needed.

Do not break useful legacy resources unnecessarily.

---

# 62. PDF Handling

Legacy PDFs with:

* backlinks
* search visibility
* customer use
* municipal relevance

should be inventoried.

Possible treatments:

```text
KEEP
REPLACE
REDIRECT TO HTML PAGE
RETIRE
```

Do not delete high-value PDFs without assessing their role.

---

# 63. Image URL Migration

Image redirects are lower priority than HTML page redirects but may matter when:

* externally embedded
* indexed strongly
* used by partners
* frequently accessed

Major brand assets should maintain stable URLs where practical.

---

# 64. 404 Strategy

A legitimate nonexistent URL should return:

```text
404
```

with a useful branded 404 page.

The 404 page should offer:

* homepage
* Services
* Markets
* contact/request service

Do not return `200` for nonexistent pages.

---

# 65. Soft 404 Guardrail

Avoid pages that technically return `200` but say:

```text
Page not found
```

or contain nearly no content.

Search engines may treat these as soft 404s.

---

# 66. 410 Strategy

A `410 Gone` response may be considered for deliberately removed content with no replacement when appropriate.

This should be used selectively.

A normal `404` is sufficient for many removed URLs.

---

# 67. Custom 404 Search Behavior

The 404 page may suggest:

* major services
* primary markets
* contact

but should not automatically redirect users without explanation.

Automatic homepage redirects from unknown URLs should be avoided.

---

# 68. Redirect Mapping File

The repository should eventually contain a structured redirect map.

Recommended conceptual fields:

```text
source
destination
status
reason
legacy_page_type
new_page_type
traffic_priority
backlink_priority
review_status
notes
```

Example:

```text
source: /camera-inspection/
destination: /services/sewer-camera-inspection/
status: 301
reason: canonical service consolidation
```

---

# 69. Redirect Map as Source of Truth

Do not maintain conflicting redirect maps in multiple undocumented locations.

The project should have one authoritative redirect registry feeding the production implementation.

---

# 70. Redirect Priority

Migration review priority should generally be:

```text
1. High Traffic + High Backlinks
2. High Traffic
3. High Backlinks
4. GBP / Citation URLs
5. Important Service Pages
6. Important Market Pages
7. Remaining Indexed Pages
8. Low-Value Legacy URLs
```

All relevant URLs should still be handled, but this hierarchy helps focus QA.

---

# 71. Redirect Reason Codes

Useful standardized reasons may include:

```text
url-change
service-consolidation
location-consolidation
content-consolidation
domain-migration
retired-service
market-restructure
resource-update
canonical-normalization
```

This improves future maintenance.

---

# 72. Cloudflare Redirect Implementation

Because production hosting uses Cloudflare Pages, redirect implementation must be compatible with the approved deployment architecture.

The technical implementation may use the appropriate Cloudflare-supported mechanism defined in:

`02-nextjs-technical-architecture.md`

This document does not prescribe implementation syntax.

The requirement is:

> Redirect rules must remain version-controlled, reviewable, and testable.

---

# 73. Next.js Redirect Role

Redirects may be handled within Next.js where appropriate.

However, infrastructure-level redirects may be preferable for:

* domain normalization
* host normalization
* simple legacy redirects

depending on Cloudflare deployment.

Implementation choice should prioritize:

* reliability
* performance
* maintainability
* build compatibility

---

# 74. No Client-Side Redirects for SEO Migration

Do not rely on JavaScript such as:

```text
window.location =
```

for important legacy URL migrations.

Search engines and users should receive proper server/platform-level redirect responses.

---

# 75. No Meta Refresh

Do not use HTML meta refresh as the primary migration method.

Use proper HTTP redirects.

---

# 76. Redirect Testing

Before launch, every redirect should be tested for:

* correct source
* correct destination
* correct status
* no chain
* no loop
* destination returns `200`
* correct canonical
* correct market/service intent

Site OS Master governs testing methodology.

---

# 77. Redirect Sample Testing

In addition to complete automated checks, manually inspect critical classes:

* homepage variants
* www/apex
* HTTP/HTTPS
* service pages
* market pages
* location pages
* resources
* legacy GBP page
* high-backlink pages

---

# 78. Pre-Launch Crawl Comparison

Before launch, compare:

```text
Legacy Crawl
vs.
New Production-Equivalent Crawl
```

Confirm that important legacy pages are:

```text
Preserved
or
Mapped
```

rather than disappearing accidentally.

---

# 79. Launch Freeze

Immediately before migration, minimize unnecessary changes to:

* routing
* page names
* redirects
* canonical logic
* navigation

A stable migration state reduces troubleshooting complexity.

---

# 80. DNS Migration Consideration

If DNS changes are required for Cloudflare deployment, those changes should be planned separately from URL mapping.

DNS controls:

```text
Where the domain resolves
```

Redirects control:

```text
Where individual URLs resolve
```

These should not be confused.

---

# 81. SSL Continuity

Production must maintain valid HTTPS throughout migration.

Avoid periods where:

* certificate fails
* HTTPS is unavailable
* mixed-content issues occur
* redirect loops prevent secure access

---

# 82. Robots.txt During Development

Development/staging environments should not accidentally become the canonical indexed website.

Production robots behavior should be reviewed separately at launch.

Do not migrate a staging `Disallow: /` rule into production accidentally.

---

# 83. Production Robots.txt

Production should permit crawling of approved public routes while protecting appropriate technical or utility routes.

Do not use robots.txt as a substitute for:

* correct routing
* noindex
* authentication
* canonicalization

---

# 84. Noindex Migration Guardrail

Before launch, confirm no critical page retains:

```text
noindex
```

from development.

Likewise, utility pages such as:

* thank-you pages
* staging/preview pages
* internal search results

should retain appropriate indexation controls.

---

# 85. Canonical Domain Cutover

At launch, all production-facing references should switch to the production canonical origin.

Check:

* canonical tags
* schema
* sitemap
* Open Graph
* structured data IDs
* robots sitemap URL
* internal links

No staging hostname should remain.

---

# 86. Structured Data Migration

Schema IDs should use the new canonical URLs.

If a canonical route changes, update:

```text
@id
url
mainEntityOfPage
breadcrumb item
```

accordingly.

See:

`15-schema-entity-strategy.md`

---

# 87. Entity Continuity

A URL migration should not unnecessarily fragment the business entity.

The primary organization entity should remain:

```text
The Sewer Pros
```

even if its website URL or content architecture changes.

External entity consistency should be preserved.

---

# 88. Analytics Migration

Before launch, confirm analytics tracking on the new site.

Measurement should preserve:

* historical property continuity where appropriate
* production attribution
* conversion events
* source tracking

Do not accidentally create a reporting break solely because the site framework changes.

---

# 89. Launch Annotation

Record the migration date in:

* analytics
* SEO reporting
* `22-decisions-change-log.md`

This provides context for post-launch performance changes.

---

# 90. Search Console Property Continuity

If the domain remains unchanged, preserve the existing Search Console property.

If the domain changes, configure the appropriate new property and any required migration tooling.

Do not abandon old Search Console data immediately after migration.

---

# 91. Bing Continuity

Maintain comparable Bing Webmaster Tools access across the migration.

---

# 92. GBP Domain Change

If the canonical domain changes, update the St. Louis GBP website field after the new production site is verified.

Ensure the old domain redirects correctly before or during the change.

---

# 93. Social Domain Change

If the domain changes, update official social profiles to the new production domain.

The old domain should continue redirecting for long-term continuity.

---

# 94. External Citation Domain Change

High-value citations should be updated over time if the domain changes.

Do not depend indefinitely on redirects for all local citations when direct updates are possible.

---

# 95. Redirect Retention Period

Permanent redirects should remain in place long term.

Do not remove migration redirects shortly after search engines appear to have processed them.

Reasons include:

* old backlinks may continue sending traffic
* user bookmarks persist
* old emails/documents persist
* search engines may revisit old URLs
* citations may remain unchanged

---

# 96. Redirect Cleanup

Future redirect cleanup should only occur after evaluating:

* continued traffic
* backlinks
* external references
* migration age
* operational need

Redirect files should not be treated as temporary launch clutter.

---

# 97. Existing Redirect Preservation

Before replacing the old site, inventory existing redirect rules.

A current redirect may already preserve:

```text
Older URL
        ↓
Current Legacy URL
```

If the current legacy URL then moves, update the rule to point directly to the final destination.

Avoid:

```text
Oldest URL
→ Old URL
→ New URL
```

---

# 98. Historical Redirect Flattening

Where known:

```text
A → B
B → C
```

should become:

```text
A → C
B → C
```

This preserves old references without chains.

---

# 99. Redirect Conflicts

Specific redirects should take precedence over broad wildcard rules where appropriate.

Example:

A wildcard market rule must not accidentally override a high-value service URL that requires a different destination.

Redirect configuration should be reviewed for rule ordering.

---

# 100. Wildcard Redirect Guardrail

Wildcard redirects are useful but dangerous.

Do not assume:

```text
/old-location/*
        ↓
/new-location/*
```

is correct unless destination structure maps reliably.

Individual exception rules may be necessary.

---

# 101. Legacy Blog Categories

Old category/tag/archive URLs should be reviewed.

Potential handling:

```text
Relevant Category → New Resource Hub
Low-Value Tag → Retire
Paginated Archive → Appropriate Indexation Handling
```

Do not automatically recreate old taxonomy merely for URL continuity.

---

# 102. WordPress Legacy Considerations

If the current site uses WordPress-style URLs, watch for patterns such as:

```text
/category/
/tag/
/author/
/feed/
?page_id=
/wp-content/
```

Only useful public content should be intentionally migrated.

CMS technical URLs generally should not become part of the new architecture.

---

# 103. File Extension Migration

If legacy pages use:

```text
.html
.php
.asp
```

they should redirect to clean approved Next.js routes.

Example:

```text
/sewer-inspection.html
        ↓
/services/sewer-inspection/
```

Do not preserve obsolete extensions unless there is a strong reason.

---

# 104. Duplicate Legacy Variants

Inventory variants such as:

```text
/index.html
/page/
/page/index.html
```

if the old architecture produced them.

Normalize to one final canonical URL.

---

# 105. Legacy Subdomains

If any relevant content exists on:

```text
www
blog
m
service
```

or other subdomains, review whether those URLs require migration.

Do not assume only the main hostname contains indexed assets.

---

# 106. Cloudflare Preview URLs

Cloudflare preview/deployment URLs must never become migration targets.

Redirect destinations should always use the canonical production domain or relative production paths.

---

# 107. Development URLs

Do not expose:

```text
localhost
.pages.dev preview domains
temporary QA domains
```

in:

* redirect files
* canonical tags
* sitemap
* structured data
* external business profiles

---

# 108. Staging Indexation

If a staging domain has accidentally been indexed, it should be handled explicitly.

Possible actions include:

* authentication
* noindex
* removal
* canonical correction
* redirect after launch

depending on circumstances.

Do not leave duplicate staging copies available indefinitely.

---

# 109. Redirect Mapping Table Template

Use a structured table such as:

| Source URL        | Destination URL     | Action | Priority | Reason                    | Notes          |
| ----------------- | ------------------- | ------ | -------- | ------------------------- | -------------- |
| `/legacy-page/`   | `/new-page/`        | 301    | High     | Service consolidation     | Has backlinks  |
| `/old-location/`  | `/market/location/` | 301    | Medium   | New location architecture | —              |
| `/obsolete-page/` | —                   | Retire | Low      | No replacement            | Return 404/410 |

This table should eventually contain every meaningful legacy route.

---

# 110. High-Priority Migration Inventory

Before launch, explicitly identify:

### Tier 1

* homepage
* GBP-linked URL
* highest organic landing pages
* highest-backlink pages
* core service pages
* contact page

### Tier 2

* major location pages
* audience pages
* commercial pages
* strong resources

### Tier 3

* remaining indexed content
* low-traffic legacy pages
* archives
* secondary assets

---

# 111. Page-Level Migration Record

High-value pages should ideally document:

```text
legacy_url
legacy_title
legacy_intent
legacy_traffic
legacy_backlinks
new_url
new_intent
redirect_required
content_preserved
notes
```

This provides a migration audit trail.

---

# 112. Content Preservation

Migration does not mean every old sentence must survive.

Preserve:

* useful intent
* important facts
* search value
* external references

while improving:

* accuracy
* positioning
* page quality
* architecture
* conversion

The objective is to preserve value, not obsolete wording.

---

# 113. Legacy Business Claims

Do not automatically migrate legacy claims that conflict with the new source-of-truth documentation.

Examples include potentially outdated:

* service availability
* repair claims
* hours
* locations
* statistics
* pricing
* certifications

Migration is also an accuracy audit.

---

# 114. Old Metadata

Legacy title tags and meta descriptions should not be preserved blindly.

Review high-performing metadata for useful intent signals, but final metadata should follow:

`14-content-specification.md`

---

# 115. Legacy H1s

Likewise, old heading structures may inform keyword intent but are not architectural authority.

New pages should follow the approved content system.

---

# 116. Backlink Destination Strategy

When a legacy page with strong backlinks is being consolidated, the destination should preserve the most relevant subject.

Do not redirect a strong sewer-camera backlink profile into:

```text
/services/
```

if:

```text
/services/sewer-camera-inspection/
```

is available.

Specificity matters.

---

# 117. Deep-Link Preservation

Users should land as close as possible to what they expected.

Example:

```text
Old:
Home Buyer Sewer Inspection

New:
Pre-Purchase Sewer Inspection
```

is better than redirecting to:

```text
Homepage
```

---

# 118. Redirect Analytics

After launch, monitor redirected URL traffic where possible.

High ongoing traffic to a legacy URL may indicate an external profile or major link still needs updating.

---

# 119. 404 Monitoring

Post-launch, monitor 404 requests and categorize:

```text
Legacy URL Miss
Internal Link Error
External Typo
Bot Noise
Malformed URL
```

Prioritize fixing legitimate user/search paths.

---

# 120. Unexpected Legacy URLs

If a previously unknown legacy URL receives meaningful traffic or backlinks after launch:

1. investigate its original intent
2. identify closest approved destination
3. add redirect if appropriate
4. document change

Do not redirect automatically without understanding the path.

---

# 121. Search Performance Monitoring

Post-launch compare:

```text
Organic Clicks
Impressions
High-Value Queries
Top Landing Pages
Conversions
```

against the pre-launch baseline.

Migration should be evaluated by business/search continuity rather than rank snapshots alone.

---

# 122. Temporary Migration Volatility

Short-term fluctuations may occur after:

* URL changes
* content changes
* architecture changes
* internal-link changes

Do not immediately reverse strategic architecture based on a few days of volatility.

Investigate technical failures first.

---

# 123. Migration Failure Signals

Urgent investigation is warranted if there is:

* widespread 404 activity on legacy traffic
* redirect loops
* canonical URLs pointing to old domain
* staging URLs indexed
* major service pages missing
* sitemap full of redirects
* sharp loss of all branded traffic
* GBP link broken
* forms no longer functioning
* significant legacy pages without redirects

---

# 124. Migration Success Signals

The migration is progressing correctly when:

* high-value legacy URLs redirect correctly
* new canonical pages are crawled
* approved pages enter the index
* branded search remains stable
* organic clicks stabilize/grow
* backlinks resolve
* GBP website link works
* forms and calls continue
* old URLs decline from index appropriately
* no index bloat appears

---

# 125. Redirect and Internal Linking Alignment

After launch:

```text
External Old URL
        ↓
301
        ↓
New Canonical Page
```

while:

```text
Internal Link
        ↓
New Canonical Page
```

The website itself should not depend on migration redirects.

---

# 126. Redirect and Schema Alignment

The destination page's structured data must use the new canonical URL.

Do not include old redirecting URLs as:

```text
@id
url
mainEntityOfPage
breadcrumb
```

unless a specific semantic reason exists.

---

# 127. Redirect and Analytics Alignment

Page attribution should record the landing page after redirect as the current canonical destination while preserving acquisition information where possible.

Migration should not create artificial new referral sources from the site's own redirect domain.

---

# 128. Page Removal Decision Framework

Before retiring a legacy page, evaluate:

```text
Does it have traffic?
Does it have backlinks?
Does it rank?
Does it convert?
Does it satisfy useful intent?
Does an approved replacement exist?
Does it conflict with current business positioning?
```

Only then choose:

```text
Keep
Redirect
Consolidate
Retire
```

---

# 129. No Automatic Legacy Preservation

The fact that a legacy page exists does not automatically mean it deserves a new equivalent page.

Examples:

* thin city pages
* outdated repair-service pages
* duplicate tags
* weak archives
* old promotional pages

Migration should improve the architecture.

---

# 130. No Automatic Legacy Deletion

Likewise, do not assume old content is worthless because the new site has a new design.

Existing search equity should be investigated before removal.

---

# 131. Master Page Build List Interaction

If a high-value legacy URL maps to a page not currently approved in:

`04-master-page-build-list.md`

the issue should be resolved before launch.

Possible outcomes:

```text
Approve Needed Replacement
```

or:

```text
Redirect to Existing Approved Page
```

or:

```text
Retire With Documented Reason
```

Do not silently create the missing page.

---

# 132. Decisions Log

Major migration decisions should be recorded in:

`22-decisions-change-log.md`

Examples:

* canonical domain selection
* www/apex decision
* major URL pattern changes
* high-value legacy page retirement
* service consolidation
* market-route restructuring
* GBP landing-page change

---

# 133. Launch Checklist Relationship

The migration should ultimately be incorporated into the final Site OS launch QA process.

This document defines project-specific migration requirements.

Site OS Master should enforce the operational launch gate.

---

# 134. Recommended Redirect Registry Location

The repository should contain an implementation-ready redirect registry in an appropriate technical directory.

The exact file path is governed by:

`02-nextjs-technical-architecture.md`

Recommended principle:

```text
Documentation
        ↓
Structured Redirect Registry
        ↓
Build / Platform Configuration
```

Avoid maintaining only a spreadsheet outside version control.

---

# 135. Version Control

Redirect changes should be committed to Git.

This provides:

* history
* review
* rollback
* accountability
* production reproducibility

Emergency redirect additions should still be brought back into source control.

---

# 136. Migration Ownership

Before launch, responsibility should be clear for:

* final redirect map
* DNS
* Cloudflare configuration
* Next.js routes
* sitemap
* Search Console
* Bing Webmaster Tools
* analytics
* GBP link update
* QA

Do not assume these responsibilities implicitly.

---

# 137. Launch Sequence Concept

The project-specific migration sequence should conceptually be:

```text
Legacy Inventory
        ↓
New Route Approval
        ↓
Old-to-New Mapping
        ↓
Redirect Implementation
        ↓
Pre-Launch Crawl
        ↓
Production Deployment
        ↓
DNS / Canonical Cutover
        ↓
Redirect Validation
        ↓
Search Platform Validation
        ↓
Post-Launch Monitoring
```

The detailed execution workflow remains governed by Site OS Master.

---

# 138. Critical Launch-Day Checks

Immediately after production cutover verify:

1. homepage loads
2. HTTPS works
3. canonical host works
4. non-canonical host redirects
5. critical service pages load
6. market hubs load
7. old high-value URLs redirect
8. GBP destination works
9. forms submit
10. phone links work
11. analytics records
12. sitemap loads
13. robots.txt loads
14. canonical tags use production domain
15. no staging URLs remain

---

# 139. First Post-Launch Redirect Audit

After launch, the first redirect audit should look for:

```text
404 legacy URLs
redirect chains
redirect loops
incorrect intent destinations
high-traffic old URLs
unexpected soft 404s
```

Fix legitimate problems quickly.

---

# 140. First Search Audit

Post-launch search monitoring should focus first on:

* branded queries
* highest-value service queries
* highest-value legacy pages
* St. Louis local visibility
* indexation

These are early indicators of migration health.

---

# 141. Market Expansion After Launch

Future market launches should follow the same controlled process.

A new market should not require changing existing URLs unnecessarily.

The routing system should support:

```text
Existing Markets Remain Stable
+
New Market Added
```

URL stability is a long-term SEO asset.

---

# 142. Service Expansion After Launch

Adding a new service should not require renaming existing service routes unless there is a strong architectural reason.

Stable service URLs should be preserved whenever practical.

---

# 143. Slug Stability

Once a clean canonical slug is launched and earns value, avoid changing it for minor keyword preferences.

Example:

Do not repeatedly move between:

```text
/sewer-camera-inspection/
```

and:

```text
/sewer-video-inspection/
```

because keyword tools fluctuate.

Canonical URL stability matters.

---

# 144. Market Slug Stability

Likewise, once market slugs are approved:

```text
/st-louis-mo/
/san-diego-ca/
/las-vegas-nv/
```

or their approved equivalents should remain stable.

Do not change geographic formats casually after launch.

---

# 145. Redirect Documentation Standard

Every permanent redirect should be understandable later.

Avoid undocumented rules that make future teams ask:

> Why does this URL redirect there?

Record the reason when it is not obvious.

---

# 146. Redirect Technical Debt

Avoid creating a redirect system that becomes an uncontrolled accumulation of:

* duplicates
* chains
* conflicting wildcards
* obsolete rules

Periodically review and flatten redirects while preserving historical external paths.

---

# 147. Permanent Historical URLs

Some old URLs may remain valuable indefinitely because external links cannot be updated.

These redirects should remain active.

Long-term redirect persistence is normal and not inherently technical debt.

---

# 148. Migration KPI Framework

Evaluate migration health using:

## Technical

* redirect success
* 404 rate
* indexation
* canonical correctness

## Search

* branded clicks
* organic clicks
* impressions
* priority query visibility

## Business

* calls
* forms
* qualified leads

## Local

* GBP website continuity
* local landing-page traffic

---

# 149. Migration Guardrails

The following are mandatory:

1. Do not launch without a legacy URL inventory.
2. Do not redirect all removed pages to the homepage.
3. Redirect based on user/search intent.
4. Use permanent redirects for permanent moves.
5. Avoid redirect chains.
6. Avoid redirect loops.
7. Preserve high-value legacy URLs when practical.
8. Do not preserve inaccurate repair positioning.
9. Do not create unapproved replacement pages.
10. Do not leave staging URLs in production metadata.
11. Do not allow HTTP/www/apex duplicates.
12. Keep canonical URLs consistent.
13. Update internal links directly.
14. Protect the St. Louis GBP website path.
15. Monitor 404s and search performance after launch.
16. Keep important redirects long term.
17. Version-control redirect configuration.
18. Record major migration decisions.

---

# 150. Migration Decision Hierarchy

When deciding what should happen to a legacy URL, use:

```text
1. Exact approved replacement
2. Closest approved page with same intent
3. Relevant approved parent/hub
4. Approved informational alternative
5. Retire with proper 404/410
```

Do not default to the homepage.

---

# 151. Migration Success Definition

A successful migration does not mean:

```text
Every Old Page Recreated
```

It means:

```text
Valuable Legacy Intent Preserved
+
Weak Architecture Improved
+
Approved New Pages Indexed
+
Backlinks Preserved
+
Conversions Continue
+
Business Positioning Becomes More Accurate
```

---

# 152. Final Migration Principle

The Sewer Pros rebuild should modernize the architecture without unnecessarily discarding the value accumulated by the existing website.

The governing standard is:

> **Preserve what has earned value, consolidate what overlaps, retire what is inaccurate or unnecessary, and permanently redirect legacy URLs to the closest approved canonical destination based on user intent—not convenience. The new site should emerge with cleaner architecture, stronger positioning, stable search signals, and no dependence on broken legacy pathways.**
