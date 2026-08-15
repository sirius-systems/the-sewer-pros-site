# The Sewer Pros — Analytics & Measurement Strategy

**Document:** `19-analytics-measurement.md`
**Project:** The Sewer Pros Website Rebuild
**Repository:** `the-sewer-pros-site`
**Status:** Project-Specific Analytics and Measurement Source of Truth

---

# 1. Purpose

This document defines the analytics, search-performance, conversion-measurement, and reporting architecture for The Sewer Pros website.

It establishes project-specific requirements for:

* Google Analytics 4
* Google Search Console
* Bing Webmaster Tools
* Cloudflare analytics where applicable
* conversion tracking
* phone-call tracking
* form tracking
* market attribution
* service attribution
* audience attribution
* commercial-lead attribution
* real-estate lead attribution
* content performance
* local SEO measurement
* landing-page performance
* search visibility
* AI/LLM referral measurement
* campaign attribution
* event naming
* reporting
* data-quality safeguards
* privacy-conscious measurement
* launch benchmarks
* post-launch measurement

This document does **not** duplicate generalized Site OS Master procedures for:

* analytics QA methodology
* tag debugging workflows
* measurement-plan templates
* release gates
* testing procedures
* dashboard-building methodology
* reporting cadence
* anomaly-detection workflows

Site OS Master governs **how analytics implementation is tested and maintained**.

This document defines **what must be measured for The Sewer Pros project**.

---

# 2. Measurement Objective

Analytics should answer a simple business question:

> **Is the website generating more qualified sewer and drain opportunities in the right services, markets, and customer segments?**

Traffic alone is not the primary success metric.

The measurement system should connect:

```text
Search Visibility
        ↓
Qualified Website Traffic
        ↓
Relevant Page Engagement
        ↓
Conversion Intent
        ↓
Lead
        ↓
Market / Service / Audience Attribution
```

The objective is to understand which parts of the website produce meaningful business outcomes.

---

# 3. Measurement Philosophy

The project should prioritize:

```text
Business Outcomes
+
Search Visibility
+
Qualified User Behavior
+
Attribution Quality
+
Technical Health
```

over vanity metrics such as:

* raw pageviews
* total keyword count
* impressions without clicks
* session duration without context
* total indexed pages
* total events
* ranking for irrelevant keywords

Measurement should help the team make decisions.

---

# 4. Primary Measurement Questions

The analytics system should eventually answer:

1. How many qualified leads does the website generate?
2. Which market generates those leads?
3. Which services generate those leads?
4. Which landing pages generate those leads?
5. Which audiences generate those leads?
6. How many leads come from commercial visitors?
7. How many come from home buyers or real-estate-related searches?
8. Which organic search queries produce conversions?
9. Which service + location pages generate meaningful traffic?
10. Which resource clusters assist conversions?
11. Which markets are gaining search visibility?
12. Which pages are indexed but underperforming?
13. Which pages receive impressions but weak click-through rates?
14. Which pages generate traffic but no useful conversion behavior?
15. Which external sources send qualified visitors?
16. Is AI/LLM referral traffic producing useful engagement or leads?
17. Are phone calls and forms being attributed correctly?
18. Is the site gaining visibility without creating index bloat?

---

# 5. Measurement Stack

The preferred measurement ecosystem should include:

```text
Google Analytics 4
+
Google Search Console
+
Bing Webmaster Tools
+
Cloudflare Platform Analytics
+
Conversion Event Tracking
+
Call Tracking Where Approved
```

Additional tools may be introduced later if they solve a specific measurement need.

Do not install overlapping analytics platforms merely because they are available.

---

# 6. Google Analytics 4

GA4 should function as the primary website behavioral and conversion analytics platform unless a later project decision changes this.

GA4 should measure:

* acquisition source
* landing pages
* sessions
* users
* engagement
* navigation
* form interactions
* CTA interactions
* phone interactions
* conversions
* market context
* service context
* audience context
* commercial context

GA4 should not be treated as the sole source of SEO performance data.

Search Console remains the preferred source for Google organic search query and impression data.

---

# 7. Google Search Console

Google Search Console should measure:

* organic Google impressions
* organic clicks
* click-through rate
* average position
* queries
* pages
* countries
* devices
* indexation
* crawl-related issues
* sitemap status
* canonical issues
* enhancement/structured-data issues where applicable

Search Console should become a central tool for evaluating the multi-market SEO architecture.

---

# 8. Bing Webmaster Tools

Bing Webmaster Tools should be configured to provide:

* Bing organic visibility
* search queries
* crawl/indexation data
* sitemap monitoring
* technical SEO insights
* Bing-specific search performance

Bing should not be treated as an afterthought.

The project's search strategy intentionally includes:

* Google
* Bing
* AI-assisted search ecosystems
* other search/discovery environments

---

# 9. Cloudflare Analytics

Cloudflare analytics may supplement application analytics with:

* request volume
* traffic patterns
* bandwidth
* bot/crawler activity
* geographic request data
* security activity
* performance information

Cloudflare analytics should not replace GA4 or Search Console.

Its role is primarily:

```text
Infrastructure / Request Visibility
```

rather than full marketing attribution.

---

# 10. Search vs. Behavioral Measurement

The project should maintain a clear distinction.

## Search Performance

Measured primarily through:

```text
Google Search Console
Bing Webmaster Tools
```

Questions:

* Are pages appearing in search?
* Which queries trigger them?
* Are impressions increasing?
* Are users clicking?

## Website Behavior

Measured primarily through:

```text
GA4
```

Questions:

* What do visitors do after arrival?
* Which pages assist conversion?
* Which CTAs are used?
* Which forms convert?

These datasets should be interpreted together.

---

# 11. Primary Conversion Events

The highest-value measurement events should include:

```text
Phone Call Click
General Service Request
Sewer Inspection Request
Pre-Purchase Inspection Request
Commercial Service Request
```

Additional conversion events may be introduced as the conversion architecture evolves.

---

# 12. Primary vs. Supporting Events

Events should be divided into:

## Primary Conversions

Meaningful lead actions.

Examples:

```text
generate_lead
phone_lead
commercial_lead
prepurchase_inspection_lead
```

## Supporting Events

Actions indicating conversion intent.

Examples:

```text
form_start
cta_click
phone_click
service_select
market_select
```

Do not mark every interaction as a primary conversion.

---

# 13. Recommended Event Naming Philosophy

Event names should be:

* lowercase
* consistent
* descriptive
* stable
* reusable across page families

Prefer:

```text
form_start
form_submit
phone_click
cta_click
market_select
service_select
```

Avoid:

```text
ClickedBlueButtonHomepage
SubmitForm2
TrackingEventNew
```

Event names should describe behavior rather than page styling.

---

# 14. Recommended Core Event Taxonomy

Potential launch events:

```text
page_view
cta_click
phone_click
email_click
form_view
form_start
form_submit
form_error
service_select
market_select
audience_select
commercial_form_start
commercial_form_submit
prepurchase_form_start
prepurchase_form_submit
```

Actual implementation should remain as simple as possible while preserving useful attribution.

---

# 15. `form_submit`

A successful lead-form submission should trigger only when the submission has actually been accepted.

Do not fire `form_submit` merely because:

* the submit button was clicked
* validation began
* the request failed
* a loading state started

The event should represent a successful submission.

---

# 16. Form Start Measurement

`form_start` should indicate meaningful interaction with the form.

It may be triggered when:

* the first field is actively engaged
* a meaningful selection is made

This can help identify form abandonment.

Do not fire the event simply because the form became visible on screen.

---

# 17. Form Error Measurement

A `form_error` event may capture:

* validation failure
* submission failure

Useful parameters may include:

```text
form_type
error_type
```

Do not send user-entered personal information into analytics parameters.

---

# 18. Phone Click Event

Clicking a `tel:` link should trigger:

```text
phone_click
```

Potential parameters:

```text
page_type
market_id
service_id
audience_id
cta_location
phone_context
```

A click indicates call intent.

It does not prove that a completed phone conversation occurred.

---

# 19. Phone Lead vs. Phone Click

If call-tracking technology later allows verified inbound call measurement, distinguish:

```text
phone_click
```

from:

```text
phone_lead
```

A user clicking the phone number is a website interaction.

A connected or qualified call is a stronger business event.

Do not treat the two as identical if call-level data becomes available.

---

# 20. Call Tracking Strategy

If dynamic call tracking is implemented, it should preserve:

* correct business identity
* NAP consistency
* correct market attribution
* correct source attribution
* website usability
* schema accuracy

Call tracking should not cause:

* inconsistent permanent phone numbers
* fake local numbers
* wrong numbers in schema
* search-engine entity confusion

---

# 21. Form Types

The measurement architecture should distinguish at minimum:

```text
general_service
prepurchase_inspection
commercial_service
```

If service-specific forms are added later, the same structure can be extended.

---

# 22. Form Parameters

A successful form event should be capable of carrying non-sensitive context such as:

```text
form_type
page_type
market_id
service_id
audience_id
lead_type
landing_page_type
```

Do not transmit:

* customer name
* email address
* phone number
* property street address
* form message
* personally identifying text

into GA4 event parameters.

---

# 23. Service Attribution

The website should identify which approved service was associated with a conversion where possible.

Examples:

```text
sewer-inspection
sewer-camera-inspection
sewer-cleaning
hydro-jetting
sewer-line-locating
drain-cleaning
pre-purchase-sewer-inspection
commercial-sewer-service
```

Canonical identifiers should derive from:

`06-master-service-registry.md`

Do not independently create analytics service names.

---

# 24. Market Attribution

Every market-relevant conversion should preserve a market ID where determinable.

Initial IDs should correspond to:

```text
st-louis-mo
san-diego-ca
las-vegas-nv
```

These identifiers should remain consistent across:

* content
* forms
* analytics
* reporting
* CRM integration where applicable

---

# 25. Location Attribution

For approved local pages, a conversion may also preserve:

```text
location_id
```

This should use canonical geographic identifiers from:

`07-master-location-registry.md`

Do not use inconsistent variants such as:

```text
St Louis
Saint Louis
STL
stlouis
```

for the same analytics dimension.

---

# 26. Audience Attribution

Where known from page context, preserve audience information.

Potential IDs:

```text
homeowner
home-buyer
home-seller
real-estate-agent
home-inspector
property-manager
commercial-property-owner
facility-manager
```

Final taxonomy is controlled by:

`09-audience-commercial-matrix.md`

---

# 27. Lead Type Attribution

Recommended high-level lead types:

```text
residential
real-estate
commercial
unknown
```

More detailed audience IDs may exist beneath them.

Example:

```text
lead_type: real-estate
audience_id: home-buyer
```

---

# 28. Page Type Attribution

Pages should be categorized consistently.

Potential values:

```text
home
core
service
market
location
service-location
audience
audience-location
commercial
commercial-location
comparison
alternative
resource
contact
conversion
```

This allows performance analysis by architecture rather than only individual URL.

---

# 29. Landing Page Type

The system should preserve the page family on which a session originated.

This helps answer:

> Are service + location pages producing leads?

or:

> Are informational resources assisting conversions?

without manually reviewing hundreds of URLs.

---

# 30. Content Cluster Attribution

Resources may optionally carry a stable cluster identifier.

Potential clusters:

```text
sewer-inspection
sewer-cleaning
hydro-jetting
sewer-problems
real-estate
commercial
```

This allows content performance to be evaluated at the topic-cluster level.

---

# 31. CTA Tracking

Important CTA clicks may use:

```text
cta_click
```

with parameters such as:

```text
cta_name
cta_location
cta_destination
page_type
market_id
service_id
```

Do not create a separate analytics event for every button label.

---

# 32. CTA Location Taxonomy

Useful values may include:

```text
header
hero
inline
sidebar
mid_page
bottom
sticky_mobile
footer
```

The exact list should remain controlled.

This allows comparison of CTA placement without tying event names to individual designs.

---

# 33. Primary CTA Measurement

Primary CTA clicks should not automatically count as leads.

Example:

```text
Schedule an Inspection
```

may open or navigate to a form.

The actual lead occurs only when:

```text
form_submit
```

succeeds or another verified conversion occurs.

---

# 34. Navigation Measurement

Routine navigation does not need excessive custom event tracking.

GA4 page-view/navigation data is generally sufficient for ordinary links.

Custom events should focus on interactions that answer useful business questions.

Avoid tracking every:

* footer link
* breadcrumb
* service-card click
* resource-card click

unless there is a defined reporting use.

---

# 35. Scroll Tracking

Scroll depth may be useful for long-form resources, but it should remain secondary.

A user reaching 90% scroll does not necessarily indicate:

* satisfaction
* intent
* business value

Scroll should never be treated as a core conversion.

---

# 36. Engagement Measurement

Engagement metrics may help compare:

* content types
* landing-page types
* device experiences

but they should be interpreted alongside:

* search intent
* conversion activity
* page purpose

A visitor finding an answer quickly can be successful even with a short session.

---

# 37. Search Console Property Strategy

The production canonical domain should be configured correctly in Google Search Console.

The preferred configuration should support domain-wide visibility.

Production deployment must not accidentally leave search-performance ownership focused only on:

* old domains
* temporary Cloudflare URLs
* staging environments

---

# 38. Search Console Sitemap

The production XML sitemap should be submitted after launch.

Measurement should confirm:

* sitemap discovered
* expected URLs submitted
* approved URLs indexed
* unapproved URLs not entering the index unintentionally

The sitemap should reflect:

`04-master-page-build-list.md`

and the actual production route set.

---

# 39. Indexation Measurement

The project should monitor:

```text
Approved Indexable Pages
vs.
Actually Indexed Pages
```

The goal is not:

```text
Maximum Number of Indexed Pages
```

The goal is:

```text
Appropriate Approved Pages Indexed
```

This distinction is critical because the project contains a large service/location opportunity matrix.

---

# 40. Index Bloat Monitoring

The measurement system should detect if search engines begin indexing:

* filter URLs
* query parameters
* duplicate routes
* staging URLs
* unapproved service/location combinations
* search results pages
* form-success pages
* technical utility routes

Indexation growth should correspond to approved page growth.

---

# 41. Master Page Build List Comparison

A recurring SEO audit should compare:

```text
Master Page Build List
        ↓
Production Routes
        ↓
Sitemap
        ↓
Google-Indexed Routes
```

Discrepancies may indicate:

* build errors
* indexing problems
* unintended URL generation
* sitemap issues
* canonical problems

---

# 42. Core Search Performance Metrics

For organic search, monitor:

```text
Impressions
Clicks
CTR
Average Position
Queries
Landing Pages
Conversions
```

The first four come primarily from search-engine performance tools.

Conversions come from analytics/lead systems.

The most useful interpretation combines them.

---

# 43. Query Segmentation

Search queries should eventually be segmented conceptually into:

```text
Brand
Service
Service + Location
Audience
Commercial
Problem
Comparison
Informational
```

This helps evaluate whether the site's architecture is attracting the intended search demand.

---

# 44. Branded Search

Monitor branded query growth for variations of:

```text
The Sewer Pros
Sewer Pros
The Sewer Pros + Market
```

Branded demand may indicate:

* awareness
* referral activity
* local brand growth
* offline marketing impact
* repeat discovery

---

# 45. Service Search Measurement

Measure performance for core service themes such as:

* sewer inspection
* sewer camera inspection
* sewer cleaning
* hydro jetting
* sewer line locating
* drain cleaning
* pre-purchase sewer inspection

The purpose is not to report only one "ranking."

Search visibility should be understood across a query set.

---

# 46. Local Search Measurement

For each market, monitor visibility around combinations such as:

```text
Service + Market
Service + Approved Location
Audience + Market
Commercial Service + Market
```

The exact keyword universe should remain aligned with approved pages.

---

# 47. St. Louis Measurement

St. Louis measurement should emphasize:

* local service visibility
* sewer lateral search demand
* pre-purchase inspection
* real-estate-related searches
* GBP-supported traffic
* branded local demand
* conversion volume
* approved local-page performance

---

# 48. San Diego Measurement

San Diego should initially emphasize:

* organic visibility without GBP support
* market-page performance
* service + location performance
* homebuyer intent
* real-estate intent
* independent-inspection positioning
* conversion growth

A future GBP would add another measurement layer.

---

# 49. Las Vegas Measurement

Las Vegas measurement should emphasize:

* organic market penetration
* sewer camera inspection
* hydro jetting
* drain cleaning
* line locating
* property management
* commercial intent
* approved local-service coverage

Because no GBP currently exists, organic web performance is especially important.

---

# 50. GBP Measurement — St. Louis

The existing St. Louis Google Business Profile should be measured separately from website analytics while preserving connection to the website.

Relevant business metrics may include:

* website clicks
* calls
* direction-related actions where applicable
* profile views/interactions
* review growth
* local-search visibility

Exact available GBP metrics may change over time and should be handled through the current Site OS local SEO workflow.

---

# 51. GBP Landing-Page Attribution

If the St. Louis GBP points to a dedicated market landing page, traffic should be attributable through appropriate campaign parameters where platform and business strategy permit.

Example conceptual source:

```text
source = google
medium = organic
campaign/context = gbp
market = st-louis
```

The implementation should avoid polluting canonical URLs or internal navigation with tracking parameters.

---

# 52. Future GBP Measurement

If San Diego or Las Vegas receives a valid GBP later, measurement should add:

* GBP traffic
* profile actions
* GBP-associated conversions
* local visibility
* review growth

The website's historical organic baseline should remain available for before/after comparison.

---

# 53. Organic Conversion Rate

Organic conversion performance should be evaluated using:

```text
Qualified Organic Conversions
÷
Relevant Organic Sessions
```

but not as an isolated sitewide figure.

Conversion rates should be compared by:

* market
* page family
* service
* device
* audience

A resource article and a high-intent service page should not be expected to convert identically.

---

# 54. Landing Page Conversion Measurement

High-value landing pages should be evaluated for:

* organic sessions
* search impressions
* clicks
* CTA usage
* form starts
* form submissions
* phone clicks
* conversion rate
* assisted conversion behavior where measurable

This provides a more useful picture than traffic alone.

---

# 55. Service Page Measurement

For each core service, reporting should answer:

```text
How much search visibility?
How much organic traffic?
Which markets contribute?
How many leads?
What type of leads?
Which supporting resources feed the service?
```

---

# 56. Service + Location Measurement

Approved service + location pages should be evaluated carefully because they represent a major scalable architecture.

Metrics should include:

* impressions
* clicks
* unique query coverage
* organic sessions
* conversions
* local relevance
* indexation
* cannibalization indicators

Page count should not be treated as success.

---

# 57. Location Page Measurement

Location pages should justify their existence through some combination of:

* unique search visibility
* service navigation
* local conversions
* assisted conversions
* market authority support

A location page with no impressions, no clicks, no useful user behavior, and no structural role may require reevaluation.

---

# 58. Audience Page Measurement

Audience pages should be evaluated by:

* audience-specific queries
* organic visibility
* progression to services
* CTA clicks
* form submissions
* market distribution

Particularly important audiences include:

* home buyers
* real estate agents
* property managers

---

# 59. Commercial Measurement

Commercial reporting should distinguish:

```text
Commercial Sessions
Commercial CTA Clicks
Commercial Form Starts
Commercial Leads
Commercial Services
Commercial Markets
```

Commercial lead quality should ultimately matter more than raw commercial page traffic.

---

# 60. Real Estate Funnel Measurement

The real-estate cluster should be measured as a funnel.

Example:

```text
Homebuyer / Real Estate Query
        ↓
Audience or Resource Page
        ↓
Pre-Purchase Inspection Page
        ↓
Inspection Request
```

Track both:

* direct conversions
* assisted pathways where practical

---

# 61. Second-Opinion Funnel Measurement

Potential funnel:

```text
Repair / Replacement Query
        ↓
Second-Opinion Resource
        ↓
Independent Inspection Page
        ↓
Inspection Request
```

This can reveal whether the independent-inspection differentiator produces qualified demand.

---

# 62. Resource Content Measurement

Resource performance should not be judged solely on direct leads.

Measure:

* search impressions
* organic clicks
* ranking/query breadth
* links to commercial pages
* assisted conversions
* cluster growth
* external backlinks where measured separately
* AI/referral traffic

Some resources exist primarily to build authority and introduce the brand.

---

# 63. Resource Success Categories

A resource may succeed by:

### Traffic

Attracting qualified organic visitors.

### Authority

Supporting topical visibility.

### Assisted Conversion

Sending users toward commercial services.

### Link Acquisition

Earning external citations/links.

### AI Discovery

Being surfaced or referenced in AI-driven discovery.

Not every resource must directly submit leads.

---

# 64. Content Cluster Reporting

Rather than evaluating every article individually, reporting should also evaluate clusters.

Example:

```text
Sewer Inspection Cluster
```

Metrics:

* total impressions
* total clicks
* number of ranking pages
* ranking queries
* service-page conversions
* assisted conversions
* external links where available

This better reflects topical authority.

---

# 65. AI / LLM Referral Measurement

The project should monitor identifiable referral traffic from AI and answer-engine platforms where referral data is available.

Potential referral categories may include:

```text
ChatGPT
Perplexity
Microsoft Copilot
Gemini / Google AI referral contexts where identifiable
Other AI assistants
```

Do not assume all AI visibility produces a measurable referral.

Many AI citations or answers may create brand discovery without a directly attributable click.

---

# 66. AI Referral Channel Group

Where practical, analytics may create a reporting group such as:

```text
AI Referral
```

based on identifiable referring domains.

This grouping should remain maintainable because platform domains and referral behavior may change.

---

# 67. AI Traffic Metrics

For identifiable AI traffic, monitor:

* sessions
* landing pages
* service interests
* markets
* CTA clicks
* conversions
* conversion rate

Do not treat AI traffic volume itself as the primary objective.

Qualified outcomes matter more.

---

# 68. Unmeasurable AI Visibility

The project should acknowledge a measurement limitation:

```text
AI Mention / Citation
≠
Always Trackable Website Referral
```

Therefore AI-search performance should also be evaluated through:

* periodic manual visibility checks
* branded-search growth
* referral traffic
* citation monitoring where tools permit
* lead-source feedback where practical

Do not fabricate precise AI visibility metrics where none exist.

---

# 69. Referral Traffic Measurement

Referral reports should identify useful external sources such as:

* business directories
* local organizations
* media
* partner sites
* real-estate referrals
* social platforms
* AI platforms

Spam referral traffic should be excluded from business interpretation where possible.

---

# 70. Social Traffic

Existing social profiles may generate traffic even if social activity is limited.

Track social traffic separately from organic search.

The website rebuild should not assume social traffic will be a major launch channel.

---

# 71. Campaign Tracking

UTM parameters should be used for intentional campaigns where useful.

Recommended fields:

```text
utm_source
utm_medium
utm_campaign
utm_content
```

Use a controlled naming convention.

Avoid multiple spelling variants for the same campaign/channel.

---

# 72. UTM Naming

Prefer:

```text
lowercase
hyphenated-or-controlled-values
```

Examples:

```text
utm_source=facebook
utm_medium=social
utm_campaign=san-diego-relaunch
```

Avoid:

```text
Facebook
facebook.com
FB
fb
```

all being used for the same source.

---

# 73. Internal UTM Prohibition

Do not use UTM parameters on internal website links.

Internal UTMs can overwrite attribution and damage session analysis.

Use custom event parameters or internal-link context instead.

---

# 74. QR Codes and Offline Campaigns

If the business later uses:

* printed materials
* vehicles
* direct mail
* inspection documents
* real-estate materials

QR codes may use campaign-tagged destination URLs.

Campaign names should identify the source clearly.

---

# 75. Search Engine Segmentation

Reporting should distinguish:

```text
Google Organic
Bing Organic
Other Organic
```

where useful.

This can help determine whether Bing and other ecosystems are contributing meaningful growth.

---

# 76. Device Measurement

Performance should be compared across:

```text
Mobile
Desktop
Tablet
```

Key areas:

* mobile conversion rate
* phone-click rate
* form completion
* page speed
* search performance

For a local service business, mobile behavior deserves particular attention.

---

# 77. Geographic Analytics

Analytics may show visitor geography, but inferred user geography should not be treated as exact service-location attribution.

For business reporting, prefer explicit context such as:

* landing-page market
* selected service location
* form market
* property location within operational systems

IP-derived geography is supplementary.

---

# 78. Page Performance Measurement

Technical performance should monitor metrics related to:

* page speed
* responsiveness
* layout stability
* production errors

Core Web Vitals and Search Console performance data should support technical evaluation.

Exact thresholds and QA procedures remain governed by Site OS Master.

---

# 79. Performance by Template

Because the site uses scalable page families, performance should be monitored by template type.

Examples:

```text
service
market
location
service-location
resource
commercial
```

A technical problem affecting one template could affect hundreds of routes.

Template-level monitoring can identify systemic issues faster than URL-by-URL review.

---

# 80. 404 Measurement

Track meaningful 404 activity.

Important sources may include:

* old backlinks
* migration errors
* internal broken links
* mistyped routes

404 data should support:

`20-migration-redirect-plan.md`

---

# 81. Redirect Measurement

After migration, monitor:

* traffic to old URLs
* redirect destinations
* unexpected 404s
* redirect chains
* organic traffic changes

High-value legacy URLs should be monitored closely.

---

# 82. Canonical Monitoring

Search Console and crawl audits should identify:

* duplicate canonical selections
* alternate pages selected by Google
* canonical conflicts
* indexation inconsistencies

This is especially important for service + location architecture.

---

# 83. Sitemap Monitoring

Track:

```text
Submitted
Discovered
Indexed
```

where platform reporting makes these signals available.

Large differences should be investigated rather than assumed to be normal.

---

# 84. Crawl Waste Signals

Potential crawl/indexation concerns include:

* parameter pages
* duplicate pagination
* malformed routes
* preview URLs
* unapproved matrix URLs
* duplicate slash variants

The scalable architecture should remain controlled.

---

# 85. Search Cannibalization Measurement

Potential cannibalization should be reviewed when multiple pages repeatedly compete for the same query intent.

Examples:

```text
Sewer Inspection
vs.
Sewer Camera Inspection
```

or:

```text
Pre-Purchase Sewer Inspection
vs.
Home Buyer Sewer Inspection
```

Do not assume multiple ranking URLs automatically indicate a problem.

Evaluate:

* intended page roles
* query intent
* ranking stability
* click distribution
* conversions

---

# 86. Page Expansion Decision Framework

Analytics should inform—but not automatically dictate—new page creation.

Example:

```text
Strong Query Demand
+
Relevant Existing Impressions
+
Clear User Intent
+
Business Service Coverage
+
Ability to Create Unique Value
        ↓
Page Opportunity
```

The final publishing authority remains:

`04-master-page-build-list.md`

---

# 87. Page Consolidation Signals

A page may become a consolidation candidate when:

* intent overlaps heavily with another page
* both pages perform weakly
* content differentiation is insufficient
* queries consistently favor one canonical destination

Any consolidation decision should also consider:

* backlinks
* conversions
* history
* internal architecture

---

# 88. No-Traffic Page Guardrail

Do not automatically delete a page because it has low traffic.

Low traffic may be appropriate for:

* high-value niche services
* commercial pages
* emerging markets
* supporting architecture
* long-tail intent

Performance decisions require context.

---

# 89. Lead Quality Measurement

The website should eventually move beyond:

```text
Lead Count
```

toward:

```text
Qualified Lead Count
```

where operational systems allow.

Potential lead outcomes could include:

```text
qualified
scheduled
completed
not-service-area
wrong-service
spam
unqualified
```

Exact CRM structure is outside this document but should eventually connect back to acquisition data where practical.

---

# 90. Revenue Attribution

If downstream systems later support reliable revenue data, reporting may evolve toward:

```text
Landing Page
→ Lead
→ Scheduled Service
→ Completed Service
→ Revenue
```

This would allow the team to evaluate SEO and content by actual business value.

Revenue tracking should not be invented if operational data is unavailable.

---

# 91. Market-Level Business Reporting

A future executive report should be able to summarize:

## St. Louis

* organic visibility
* organic clicks
* leads
* top services
* GBP contribution
* top landing pages

## San Diego

* organic visibility
* leads
* top services
* location-page growth
* real-estate funnel

## Las Vegas

* organic visibility
* leads
* commercial performance
* top services
* local-page growth

---

# 92. Service-Level Reporting

A service report should answer:

| Service                 | Organic Clicks | Leads | Markets | Top Landing Pages | Trend |
| ----------------------- | -------------: | ----: | ------- | ----------------- | ----- |
| Sewer Camera Inspection |              — |     — | —       | —                 | —     |
| Sewer Cleaning          |              — |     — | —       | —                 | —     |
| Hydro Jetting           |              — |     — | —       | —                 | —     |
| Drain Cleaning          |              — |     — | —       | —                 | —     |
| Pre-Purchase Inspection |              — |     — | —       | —                 | —     |

Actual data populates this after launch.

---

# 93. Page-Family Reporting

The architecture should support reporting across:

```text
Core Services
Market Hubs
Location Pages
Service + Location
Audience
Commercial
Resources
Comparison
Alternative
```

Questions should include:

* Which page families attract traffic?
* Which convert directly?
* Which assist conversions?
* Which create indexation problems?
* Which deserve expansion?

---

# 94. Local Page Performance Distribution

For large local architecture, avoid evaluating only averages.

Report distribution such as:

```text
Pages with meaningful impressions
Pages with clicks
Pages with conversions
Pages with zero impressions
Pages not indexed
```

This can reveal whether a scaled local strategy is working.

---

# 95. Service + Location Publishing Feedback Loop

The matrix contains 10,422 potential service × location relationships.

Analytics should create a disciplined feedback loop:

```text
Approved Pages Published
        ↓
Indexation
        ↓
Impressions
        ↓
Clicks
        ↓
Conversions
        ↓
Lessons Applied to Next Approval Batch
```

This prevents scaling based purely on theoretical keyword opportunity.

---

# 96. Phased Expansion Measurement

Large page expansion should preferably occur in controlled cohorts.

Example:

```text
Batch A
→ Measure
→ Learn
→ Improve

Batch B
→ Measure
→ Learn
→ Improve
```

This allows the team to improve:

* local content
* linking
* metadata
* conversion
* prioritization

before publishing the full opportunity set.

---

# 97. Baseline Measurement

Before or immediately around launch, preserve baseline data where available for:

* existing organic traffic
* existing rankings
* existing indexed pages
* existing conversion activity
* top legacy URLs
* branded search
* St. Louis GBP activity

This allows post-launch performance to be compared against the prior site.

---

# 98. Migration Benchmarking

Migration reporting should compare:

```text
Pre-Launch
vs.
Post-Launch
```

for:

* organic clicks
* impressions
* high-value queries
* branded queries
* top pages
* conversions
* index coverage

Short-term volatility should be interpreted within migration context.

---

# 99. Launch Annotation

The exact production launch date should be documented in:

* analytics reporting
* project change log
* SEO reporting

This makes before/after analysis easier.

Major later changes should also be annotated where possible.

---

# 100. Change Annotations

Important events to record include:

* site launch
* domain migration
* major redirect implementation
* GBP creation
* major content batch publication
* market expansion
* service launch
* navigation restructuring
* schema overhaul
* significant algorithmic/technical issue where relevant

This context helps prevent false conclusions.

---

# 101. Analytics Environment Separation

Production analytics should not be polluted by:

* localhost
* preview deployments
* development testing
* Cloudflare preview URLs
* QA sessions where avoidable

Development and production environments should be clearly separated.

---

# 102. Internal Traffic

Where practical, internal/team traffic should be excluded or identifiable.

This is particularly useful during launch when:

* developers
* content reviewers
* QA users

may generate substantial test activity.

Do not create complex filtering that risks excluding real customers.

---

# 103. Bot Traffic

Cloudflare and analytics platforms may identify portions of automated traffic.

Bot/crawler traffic should not be interpreted as customer engagement.

This is particularly important as:

* search crawlers
* SEO tools
* AI crawlers

interact with the site.

---

# 104. Privacy Principle

Analytics should collect the minimum data required for useful measurement.

Do not send personally identifiable information to analytics systems.

Examples prohibited in analytics event parameters:

* names
* phone numbers
* emails
* property street addresses
* free-form customer messages

---

# 105. URL Privacy

Avoid placing sensitive lead information in query strings.

For example, do not redirect a form to:

```text
/thank-you/?email=customer@example.com&phone=...
```

URLs may be recorded in:

* analytics
* browser history
* server logs
* referral headers

---

# 106. Consent and Privacy Implementation

Any consent mechanism should reflect:

* actual analytics technologies
* advertising technologies if later added
* applicable legal requirements
* approved privacy policy

Do not implement unnecessary cookie complexity if the underlying technologies do not require it.

Legal/privacy decisions should be reviewed separately as appropriate.

---

# 107. Advertising Measurement

Paid advertising is not assumed as part of the initial organic website measurement system.

If later introduced, the architecture should support:

* Google Ads
* Microsoft Ads
* social advertising
* retargeting

without restructuring core events.

Primary conversion definitions should remain consistent across organic and paid channels.

---

# 108. Conversion Deduplication

If multiple systems report the same lead, care should be taken not to interpret them as separate business conversions.

Example:

```text
GA4 form_submit
+
CRM contact created
```

may represent one lead, not two.

Reporting should clearly distinguish:

* analytics event count
* unique lead record
* qualified lead

---

# 109. Thank-You Page Measurement

If dedicated thank-you pages are used, they may help verify conversion flows.

However:

> Page view of a thank-you URL should not be the only conversion signal if the page can be accessed directly.

Prefer successful form submission as the core event.

The thank-you page can provide secondary verification.

---

# 110. Form Abandonment Measurement

Where useful:

```text
form_start
-
form_submit
```

can provide a rough abandonment indicator.

This should be interpreted cautiously because:

* users may call instead
* users may return later
* duplicate events may occur
* some form starts may be accidental

---

# 111. Phone vs. Form Behavior

Reporting should compare:

```text
Phone Clicks
vs.
Form Submissions
```

by:

* device
* market
* service
* landing page

This may reveal important differences in user preference.

---

# 112. Mobile Conversion Analysis

Mobile reporting should specifically review:

* phone-click rate
* sticky CTA usage
* form completion
* page speed
* form errors
* high-exit pages

Mobile should not simply be included in a sitewide average.

---

# 113. Desktop Conversion Analysis

Desktop may be particularly important for:

* real estate professionals
* property managers
* commercial users
* longer research sessions

Compare behavior rather than assuming mobile always dominates.

---

# 114. Core KPI Hierarchy

## Tier 1 — Business Outcomes

```text
Qualified Leads
Inspection Requests
Commercial Leads
Phone Leads
Completed/Scheduled Opportunities if integrated
```

## Tier 2 — Conversion Performance

```text
Form Submissions
Phone Clicks
Conversion Rate
CTA Engagement
```

## Tier 3 — Organic Growth

```text
Organic Clicks
Search Impressions
Qualified Query Growth
Indexed Approved Pages
```

## Tier 4 — Supporting Indicators

```text
Sessions
Engagement
Scroll
Resource Consumption
```

Tier 4 should never overshadow Tier 1.

---

# 115. SEO Success Hierarchy

The preferred evaluation sequence is:

```text
Visibility
    ↓
Clicks
    ↓
Qualified Traffic
    ↓
Conversions
    ↓
Qualified Leads
```

Ranking movement matters primarily because of its role in this chain.

---

# 116. Ranking Reports

If third-party rank tracking is introduced, rankings should be segmented by:

* market
* service
* audience
* commercial intent
* device where relevant

Do not reduce SEO reporting to a single list of hundreds of keyword positions.

---

# 117. Keyword Opportunity vs. Performance

The project should maintain a distinction between:

```text
Opportunity Dataset
```

and:

```text
Live Performance Dataset
```

The 10,422 service × location relationships are opportunity data.

Search Console and analytics show what the published site actually earns.

The two datasets should inform one another without being conflated.

---

# 118. Search CTR Analysis

Pages with:

```text
High Impressions
+
Low CTR
```

may warrant review of:

* title
* meta description
* search intent
* brand recognition
* SERP competition
* position

CTR should always be interpreted in relation to average position and query type.

---

# 119. High-Impression / Low-Click Pages

These can represent strong optimization opportunities.

Potential actions:

* improve title alignment
* improve intent match
* clarify local relevance
* strengthen differentiation
* consolidate cannibalized pages

Do not change titles purely to chase CTR without considering rankings and intent.

---

# 120. Low-Impression Pages

Potential explanations include:

* insufficient demand
* weak indexing
* poor internal linking
* weak topical authority
* newly published page
* incorrect intent
* over-specific targeting

Diagnosis should precede deletion or expansion.

---

# 121. High-Traffic / Low-Conversion Pages

Investigate:

* intent mismatch
* weak CTA
* wrong audience
* service ambiguity
* poor market fit
* form friction
* informational intent

The answer is not automatically "add more CTAs."

---

# 122. High-Conversion / Low-Traffic Pages

These are often strong growth candidates.

Potential opportunities:

* improve internal linking
* expand search coverage
* strengthen supporting resources
* improve local visibility
* earn external links

Analytics should help discover these leverage points.

---

# 123. Content Decay Monitoring

Evergreen resources should periodically be reviewed for:

* declining impressions
* declining clicks
* lost rankings
* outdated facts
* broken links
* changing search intent

Updates should be based on actual need rather than changing publication dates cosmetically.

---

# 124. Market Growth Dashboard

A market dashboard should eventually show:

```text
Organic Impressions
Organic Clicks
Organic Sessions
Leads
Phone Clicks
Form Submissions
Top Services
Top Pages
Top Queries
Indexed Pages
```

for each primary market.

---

# 125. Executive Dashboard

A concise executive view should prioritize:

```text
Qualified Leads
Organic Leads
Commercial Leads
Pre-Purchase Inspection Leads
Phone Leads
Organic Click Trend
Market Performance
Top Services
```

Avoid overwhelming business stakeholders with implementation-level analytics.

---

# 126. SEO Operations Dashboard

A deeper SEO dashboard may include:

* search impressions
* clicks
* CTR
* position
* page family
* market
* service
* indexed URLs
* top gaining pages
* top declining pages
* query growth
* conversion activity

This supports strategic optimization.

---

# 127. Content Dashboard

A content-focused view may report:

* resource cluster
* pages published
* organic impressions
* clicks
* assisted service visits
* leads
* external links where available
* AI referrals

This supports topical-authority decisions.

---

# 128. Commercial Dashboard

A commercial view should focus on:

* commercial organic sessions
* commercial service views
* commercial form starts
* commercial leads
* market
* service
* property type if captured operationally
* lead quality where available

---

# 129. Real Estate Dashboard

A real-estate view may track:

* pre-purchase page traffic
* homebuyer traffic
* real estate agent traffic
* inspection requests
* market
* organic queries
* conversion rates
* supporting resources

This can determine whether the real-estate strategy deserves further expansion.

---

# 130. Reporting by Cohort

When publishing new local-page batches, mark their cohort.

Conceptual example:

```text
location_batch_01
location_batch_02
service_location_batch_01
```

This can help compare strategy iterations.

The cohort label should not become part of public-facing content.

---

# 131. Event Parameter Governance

Event parameters should be defined centrally.

Do not allow arbitrary components to invent new versions such as:

```text
market
market_name
marketName
location_market
cityMarket
```

for the same concept.

One controlled measurement vocabulary should be maintained.

---

# 132. Recommended Context Parameters

Where relevant:

```text
page_type
service_id
market_id
location_id
audience_id
lead_type
form_type
cta_location
content_cluster
```

Not every event needs every parameter.

Send only useful context.

---

# 133. Data Layer Principle

Where implementation requires a data layer or equivalent structured analytics context, values should be generated from the same canonical page data used by the website.

Example:

```text
Page Data
    ↓
Heading / Content
    ↓
Schema
    ↓
Internal Links
    ↓
Analytics Context
```

This reduces drift.

---

# 134. Next.js Implementation Principle

Analytics should be implemented in a way compatible with:

* Next.js App Router
* client-side navigation
* Cloudflare deployment
* production performance
* consent requirements where applicable

Page-view measurement must correctly account for client-side route changes.

Exact technical implementation belongs in:

`02-nextjs-technical-architecture.md`

---

# 135. Performance Impact Guardrail

Analytics scripts should not significantly harm:

* Core Web Vitals
* page rendering
* interactivity
* mobile performance

Do not add multiple redundant tracking scripts when one tool can answer the business question.

---

# 136. Third-Party Scripts

Every third-party measurement script should have:

* defined purpose
* known owner
* documented configuration
* performance justification

Avoid accumulating abandoned marketing pixels over time.

---

# 137. Analytics Ownership

Access to analytics platforms should remain under business-controlled accounts where practical.

The project should avoid critical measurement systems existing solely under:

* developer personal accounts
* temporary contractor accounts
* inaccessible agency accounts

Ownership/access decisions should be documented during implementation.

---

# 138. Search Console Ownership

The business should maintain appropriate verified access to Search Console.

Recommended roles should support both:

* operational management
* future business continuity

Do not leave ownership dependent on one temporary developer credential.

---

# 139. Bing Webmaster Ownership

The same continuity principle applies to Bing Webmaster Tools.

---

# 140. Measurement Documentation

Implementation details should document:

* analytics property IDs
* Search Console property
* Bing property
* event taxonomy
* custom dimensions
* conversion definitions
* known filters
* call-tracking configuration
* dashboard locations

Sensitive credentials should not be committed to the repository.

---

# 141. Environment Variables

Measurement identifiers that belong in environment configuration should follow secure technical practices.

Do not commit:

* secrets
* API keys
* private credentials

to GitHub.

Public measurement IDs may still be managed through environment configuration for operational consistency.

---

# 142. Analytics QA Before Launch

Before production launch, confirm project-specific requirements such as:

* production pageviews register correctly
* development traffic is not polluting production unnecessarily
* phone clicks fire once
* form starts work
* successful submissions fire once
* failed submissions do not fire successful conversion events
* market context is correct
* service context is correct
* commercial forms are distinguishable
* pre-purchase forms are distinguishable
* no PII is being sent
* Search Console verification is ready
* sitemap is available
* Bing verification is ready

Site OS Master governs the detailed validation procedure.

---

# 143. Duplicate Event Guardrail

Events must not fire multiple times because of:

* React re-renders
* duplicate listeners
* route transitions
* form state changes
* thank-you page + form submission double counting

A single real action should produce the intended single analytics action unless deliberately designed otherwise.

---

# 144. Conversion Validation

After launch, test actual conversion paths across:

* desktop
* mobile
* all three markets
* primary services
* general form
* real-estate form
* commercial form
* phone links

Do not assume analytics is correct because the tracking script loads.

---

# 145. Search Console Validation

Post-launch validation should confirm:

* canonical production URLs discovered
* sitemap processed
* critical routes crawlable
* no widespread accidental `noindex`
* redirects functioning
* primary pages becoming indexed

---

# 146. Bing Validation

Likewise confirm:

* site ownership
* sitemap discovery
* crawlability
* key routes indexed over time
* no major technical issues

---

# 147. Launch-Day Measurement Priorities

Immediately around launch, prioritize:

1. website availability
2. analytics collection
3. conversion event functionality
4. forms
5. phone links
6. redirects
7. canonical URLs
8. sitemap
9. Search Console
10. Bing Webmaster Tools
11. production errors

Detailed ranking analysis should follow after search engines process the migration.

---

# 148. Early Post-Launch Monitoring

Initial post-launch attention should focus on:

* lost high-value traffic
* broken redirects
* missing conversions
* unexpected 404s
* canonical problems
* indexation failures
* form errors
* major page-performance problems

Avoid reacting to normal day-to-day ranking fluctuations without context.

---

# 149. Long-Term Measurement Cycle

The long-term strategic cycle should be:

```text
Measure
    ↓
Diagnose
    ↓
Prioritize
    ↓
Improve
    ↓
Measure Again
```

Analytics exists to guide action.

Reporting without decisions has limited value.

---

# 150. Page Decision Categories

Performance reviews may classify pages as:

```text
Protect
Improve
Expand
Consolidate
Retire
Monitor
```

Examples:

### Protect

Strong rankings/conversions.

### Improve

Visibility exists, but CTR or conversion is weak.

### Expand

Strong performance reveals adjacent opportunities.

### Consolidate

Overlapping intent creates unnecessary competition.

### Retire

No strategic purpose remains.

### Monitor

Too new or insufficient data.

---

# 151. Protect High-Performing Pages

Do not casually rewrite or restructure pages that already perform strongly.

Before major changes, review:

* traffic
* queries
* conversions
* backlinks
* ranking history

Optimization should avoid destroying existing value.

---

# 152. Expansion Based on Evidence

Successful pages can guide expansion.

Example:

```text
Pre-Purchase Sewer Inspection in St. Louis
```

shows strong:

* search visibility
* conversion
* real-estate demand

This may justify investigation of:

* nearby approved markets
* supporting buyer content
* agent content
* additional local pages

It still does not bypass Master Page Build List approval.

---

# 153. Analytics and the Master Page Build List

Performance data should inform future page approvals.

Preferred relationship:

```text
Research Opportunity
+
Existing Performance Data
+
Business Priority
+
Content Capability
        ↓
Master Page Build List Decision
```

Analytics does not directly publish pages.

---

# 154. Analytics and Decisions Log

Material measurement decisions should be documented in:

`22-decisions-change-log.md`

Examples:

* conversion definition changes
* new call-tracking system
* GBP launched
* analytics platform replacement
* event taxonomy revision
* new market measurement model
* major attribution change

---

# 155. Key Launch KPIs

The launch measurement foundation should establish reliable tracking for:

### Search

* organic impressions
* organic clicks
* indexed approved pages

### Website

* organic sessions
* high-value landing pages

### Conversion

* phone clicks
* successful service requests
* pre-purchase inspection requests
* commercial requests

### Segmentation

* market
* service
* audience/lead type where applicable

Reliability is more important than creating dozens of KPIs at launch.

---

# 156. Post-Launch Growth KPIs

As sufficient data accumulates, reporting can expand to:

* qualified leads
* organic lead conversion rate
* leads by service
* leads by market
* leads by page family
* real-estate leads
* commercial leads
* organic query growth
* service + location page productivity
* content-cluster performance
* AI referral leads
* GBP contribution

---

# 157. Metrics That Should Not Become Primary KPIs

Avoid making these primary success metrics:

```text
Total Pages Published
Total Indexed URLs
Total Keywords Ranking
Average Session Duration
Bounce Rate Alone
Total Pageviews
Total FAQ Count
Total Schema Objects
```

These may provide context but do not directly measure business success.

---

# 158. Success Definition — St. Louis

St. Louis analytics should demonstrate progress toward:

```text
Stronger Existing Market Authority
+
More Qualified Inspection Leads
+
Real Estate / Sewer Lateral Visibility
+
GBP + Organic Integration
```

---

# 159. Success Definition — San Diego

San Diego should demonstrate:

```text
Growing Organic Market Visibility
+
Increasing Qualified Local Traffic
+
Pre-Purchase / Inspection Authority
+
Lead Generation Without Dependence on GBP
```

---

# 160. Success Definition — Las Vegas

Las Vegas should demonstrate:

```text
Growing Organic Market Visibility
+
Sewer / Drain Specialist Recognition
+
Commercial and Property Manager Opportunities
+
Qualified Service Leads
```

---

# 161. Analytics Guardrails

The following rules are mandatory:

1. Do not send PII to GA4.
2. Do not count failed forms as leads.
3. Do not count CTA clicks as completed leads.
4. Do not treat phone clicks as completed calls when call data is unavailable.
5. Do not use internal UTMs.
6. Do not invent market attribution.
7. Use canonical service and location IDs.
8. Keep event names controlled.
9. Avoid redundant tracking tools.
10. Do not let analytics scripts materially degrade performance.
11. Separate production from development measurement.
12. Track approved page architecture, not theoretical matrix size.
13. Measure qualified outcomes rather than page volume.
14. Preserve migration baselines where possible.
15. Use analytics to inform, not automatically dictate, publishing decisions.

---

# 162. Measurement Source-of-Truth Relationships

Analytics implementation must remain consistent with:

### Page Approval

`04-master-page-build-list.md`

### URLs

`05-url-routing-strategy.md`

### Services

`06-master-service-registry.md`

### Locations

`07-master-location-registry.md`

### Audience / Commercial Taxonomy

`09-audience-commercial-matrix.md`

### SEO Strategy

`10-seo-strategy.md`

### Local SEO / GBP

`11-local-seo-gbp-strategy.md`

### Content Architecture

`14-content-specification.md`

### Internal Linking

`16-internal-linking-strategy.md`

### Conversion Events

`17-conversion-architecture.md`

### Technical Implementation

`02-nextjs-technical-architecture.md`

---

# 163. Measurement Model Summary

The project should ultimately support this reporting relationship:

```text
Channel
    ↓
Search Query / Referral
    ↓
Landing Page
    ↓
Page Family
    ↓
Market
    ↓
Service
    ↓
Audience
    ↓
Conversion
    ↓
Qualified Lead
```

Not every dimension will always be known.

The system should preserve the information that is known without inventing the rest.

---

# 164. Primary Business Dashboard Questions

The final analytics environment should make it possible to answer:

```text
Which market is growing fastest?
Which service produces the most leads?
Which service produces the best leads?
Which pages are creating leads?
Are service + location pages working?
Is the real-estate strategy working?
Is commercial content generating opportunities?
Which resources assist conversions?
Where is organic visibility increasing?
Where are we publishing pages that search engines do not value?
```

If the analytics system cannot help answer these questions, it is collecting data without sufficient strategic purpose.

---

# 165. Final Measurement Principle

The Sewer Pros measurement architecture should not reward the project for merely creating a larger website.

It should reward the project for creating a more effective business asset.

The governing standard is:

> **Measure whether approved pages earn relevant search visibility, attract qualified users, move those users toward the appropriate service, and generate attributable business opportunities across St. Louis, San Diego, and Las Vegas. Page count, keyword count, and traffic volume are supporting signals—not the final measure of success.**
