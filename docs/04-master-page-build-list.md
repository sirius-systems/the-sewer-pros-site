# The Sewer Pros — Master Page Build List

**Document:** `04-master-page-build-list.md`
**Project:** The Sewer Pros Website Rebuild
**Repository:** `the-sewer-pros-site`
**Status:** Foundation / Publishing Authority
**Document Role:** Authoritative page inventory and route-generation gate
**Primary Markets:** St. Louis, MO; San Diego, CA; Las Vegas, NV

---

# 1. Purpose

This document defines the **authorized page inventory** for The Sewer Pros website.

It is the controlling source of truth for determining:

* which pages may be built
* which pages may generate routes
* which pages may be indexed
* which pages belong in the initial launch
* which pages are reserved for post-launch expansion
* which researched opportunities remain on hold
* which matrix relationships must not generate pages

This document sits between research and implementation.

The governing workflow is:

```text
Research
↓
Canonical Registries
↓
Opportunity Matrices
↓
Master Page Build List
↓
Approved Route Registry
↓
Page Build
↓
QA
↓
Indexation
```

A service, location, audience, commercial segment, keyword, or matrix relationship existing in research does **not** authorize a public page.

---

# 2. Critical Publishing Rule

The project currently contains:

* 18 canonical service records
* 579 normalized geographic records
* 10,422 service × location relationships

The 10,422 relationships represent SEO opportunities.

They do **not** represent 10,422 pages to publish.

Only pages explicitly authorized by this document may proceed to route generation.

The application must never generate pages directly from the full service × location matrix.

---

# 3. Authorization Status Model

Every page in this document receives one of the following statuses.

| Status                      |      Build Route |              Index |            Sitemap | Meaning                                                                                |
| --------------------------- | ---------------: | -----------------: | -----------------: | -------------------------------------------------------------------------------------- |
| `launch`                    |              Yes |                Yes |                Yes | Approved for initial production launch                                                 |
| `launch_pending_validation` |              Yes | No until validated | No until validated | Approved to build, but publication/indexation requires specified validation            |
| `phase_2`                   | No during launch |                 No |                 No | Approved strategic expansion page after launch                                         |
| `phase_3`                   |               No |                 No |                 No | Longer-term approved opportunity requiring stronger evidence or operational validation |
| `hold`                      |               No |                 No |                 No | Known opportunity but not approved for production                                      |
| `research_only`             |               No |                 No |                 No | Retained for research; not a publishing instruction                                    |
| `retired`                   |               No |                 No |                 No | Previously approved route removed from active architecture                             |

---

# 4. Route Generation Rule

Production route generation must use only records whose status permits a route.

Conceptually:

```ts
const buildablePages = masterPageBuildList.filter(
  (page) =>
    page.status === 'launch' ||
    page.status === 'launch_pending_validation'
)
```

Indexation must apply a second gate:

```ts
const indexablePages = masterPageBuildList.filter(
  (page) =>
    page.status === 'launch' &&
    page.indexable === true
)
```

A page marked:

```text
launch_pending_validation
```

must not enter:

* XML sitemaps
* indexable internal-link modules
* production canonicals intended for indexing
* search-engine submission workflows

until its validation condition has been satisfied.

---

# 5. Launch Build Summary

The initial approved build contains **70 page records**.

| Page Family                       | Launch Build Count |
| --------------------------------- | -----------------: |
| Core / hub / conversion           |                  9 |
| Core + high-intent services       |                 10 |
| Market hubs                       |                  3 |
| Priority location pages           |                 16 |
| Priority service + location pages |                 14 |
| Audience pages                    |                  6 |
| Commercial service pages          |                  5 |
| Comparison pages                  |                  2 |
| Foundational resource pages       |                  5 |
| **Total**                         |             **70** |

This fits the intended initial website scope while preserving a substantially larger post-launch SEO opportunity.

The 70-page build represents the **launch foundation**, not the final size of the website.

---

# 6. Launch Priority Definitions

Launch pages are divided into three practical levels.

## L1 — Structural Foundation

Pages required to make the website complete and understandable.

Examples:

* homepage
* services hub
* market hubs
* about
* contact
* commercial hub

## L2 — Revenue / Search Priority

Pages expected to address meaningful service or local search intent.

Examples:

* canonical service pages
* priority locations
* service + location pages
* commercial services
* homebuyer pages

## L3 — Authority / Decision Support

Pages supporting:

* topical authority
* AEO
* AI retrieval
* comparisons
* real estate education
* municipal/local information

---

# 7. Core / Hub / Conversion Pages

## Approved Launch Pages

| ID               | Page                              | URL            | Priority | Status   | Index |
| ---------------- | --------------------------------- | -------------- | -------- | -------- | ----: |
| `core-home`      | Home                              | `/`            | L1       | `launch` |   Yes |
| `core-about`     | About The Sewer Pros              | `/about/`      | L1       | `launch` |   Yes |
| `core-contact`   | Contact                           | `/contact/`    | L1       | `launch` |   Yes |
| `hub-services`   | Services                          | `/services/`   | L1       | `launch` |   Yes |
| `hub-locations`  | Locations / Service Areas         | `/locations/`  | L1       | `launch` |   Yes |
| `hub-audiences`  | Who We Serve                      | `/for/`        | L1       | `launch` |   Yes |
| `hub-commercial` | Commercial Sewer & Drain Services | `/commercial/` | L1       | `launch` |   Yes |
| `hub-resources`  | Sewer & Drain Resources           | `/resources/`  | L1       | `launch` |   Yes |
| `core-faq`       | Sewer & Drain FAQs                | `/faq/`        | L3       | `launch` |   Yes |

**Launch count:** 9

---

# 8. Canonical Service Pages

The following pages establish the site's primary service entities.

## 8.1 Established Core Services

| ID                                     | Service                            | URL                                           | Priority | Status   | Index |
| -------------------------------------- | ---------------------------------- | --------------------------------------------- | -------- | -------- | ----: |
| `svc-sewer-camera-inspection`          | Sewer Camera Inspection            | `/services/sewer-camera-inspection/`          | L1       | `launch` |   Yes |
| `svc-sewer-cleaning`                   | Sewer Cleaning                     | `/services/sewer-cleaning/`                   | L1       | `launch` |   Yes |
| `svc-hydro-jetting`                    | Hydro Jetting                      | `/services/hydro-jetting/`                    | L1       | `launch` |   Yes |
| `svc-sewer-cleaning-camera-inspection` | Sewer Cleaning + Camera Inspection | `/services/sewer-cleaning-camera-inspection/` | L1       | `launch` |   Yes |
| `svc-sewer-line-locating`              | Sewer Line Locating                | `/services/sewer-line-locating/`              | L1       | `launch` |   Yes |
| `svc-drain-cleaning`                   | Drain Cleaning                     | `/services/drain-cleaning/`                   | L1       | `launch` |   Yes |

---

## 8.2 High-Intent Derived Services

| ID                                     | Service                          | URL                                           | Priority | Status   | Index |
| -------------------------------------- | -------------------------------- | --------------------------------------------- | -------- | -------- | ----: |
| `svc-pre-purchase-sewer-inspection`    | Pre-Purchase Sewer Inspection    | `/services/pre-purchase-sewer-inspection/`    | L1       | `launch` |   Yes |
| `svc-recurring-sewer-backup-diagnosis` | Recurring Sewer Backup Diagnosis | `/services/recurring-sewer-backup-diagnosis/` | L2       | `launch` |   Yes |
| `svc-preventative-sewer-maintenance`   | Preventative Sewer Maintenance   | `/services/preventative-sewer-maintenance/`   | L2       | `launch` |   Yes |

These services are allowed as standalone pages because they represent materially different customer intent, not merely keyword variations.

---

## 8.3 St. Louis-Specific Service

| ID                                           | Service                                        | URL                                                | Priority | Status   | Index |
| -------------------------------------------- | ---------------------------------------------- | -------------------------------------------------- | -------- | -------- | ----: |
| `svc-stl-sewer-lateral-inspection-reporting` | Sewer Lateral Inspection & Municipal Reporting | `/st-louis-mo/sewer-lateral-inspection-reporting/` | L2       | `launch` |   Yes |

This service is **St. Louis-only**.

It must never be programmatically generated into San Diego or Las Vegas.

Municipal-program claims must be validated at the program level before publication.

**Total launch service pages:** 10

---

# 9. Service Pages Reserved for Phase 2

| ID                                     | Service                                       | URL                                                      | Status    |
| -------------------------------------- | --------------------------------------------- | -------------------------------------------------------- | --------- |
| `svc-independent-sewer-second-opinion` | Independent Sewer Inspection / Second Opinion | `/services/independent-sewer-inspection-second-opinion/` | `phase_2` |

This is strategically valuable but should initially be supported through:

* homepage messaging
* camera inspection content
* cleaning + camera content
* comparison content

before receiving a dedicated service page.

The purpose is to prevent unnecessary cannibalization with the canonical sewer camera inspection page.

---

# 10. Market Hubs

## 10.1 St. Louis

| ID                   | Page                         | URL             | Status   | Index |
| -------------------- | ---------------------------- | --------------- | -------- | ----: |
| `market-st-louis-mo` | St. Louis, MO Sewer Services | `/st-louis-mo/` | `launch` |   Yes |

St. Louis is an established market with an existing Google Business Profile.

---

## 10.2 San Diego

| ID                    | Page                         | URL              | Status   | Index |
| --------------------- | ---------------------------- | ---------------- | -------- | ----: |
| `market-san-diego-ca` | San Diego, CA Sewer Services | `/san-diego-ca/` | `launch` |   Yes |

San Diego currently has no identified GBP.

The page must not imply a verified storefront or GBP that does not exist.

---

## 10.3 Las Vegas

| ID                    | Page                         | URL              | Status                      |                                    Index |
| --------------------- | ---------------------------- | ---------------- | --------------------------- | ---------------------------------------: |
| `market-las-vegas-nv` | Las Vegas, NV Sewer Services | `/las-vegas-nv/` | `launch_pending_validation` | No until service availability validation |

The Las Vegas market is part of the approved architecture.

However, customer-facing service claims must not be indexed until operational service availability is confirmed.

Once the market is validated, this page may be promoted to:

```text
launch
```

without changing its URL.

**Market hub count:** 3

---

# 11. Priority Location Pages

The 579-location registry is a research universe.

Only the following location pages are authorized for the initial build.

---

# 12. St. Louis Priority Locations

| ID                      | Location       | URL                           | Status   | Index |
| ----------------------- | -------------- | ----------------------------- | -------- | ----: |
| `loc-stl-st-louis-city` | St. Louis City | `/st-louis-mo/st-louis-city/` | `launch` |   Yes |
| `loc-stl-chesterfield`  | Chesterfield   | `/st-louis-mo/chesterfield/`  | `launch` |   Yes |
| `loc-stl-ballwin`       | Ballwin        | `/st-louis-mo/ballwin/`       | `launch` |   Yes |
| `loc-stl-florissant`    | Florissant     | `/st-louis-mo/florissant/`    | `launch` |   Yes |
| `loc-stl-st-charles`    | St. Charles    | `/st-louis-mo/st-charles/`    | `launch` |   Yes |

These locations provide launch coverage across several important St. Louis-area geographic clusters rather than concentrating the launch site in one part of the market.

---

# 13. San Diego Priority Locations

| ID                   | Location    | URL                          | Status   | Index |
| -------------------- | ----------- | ---------------------------- | -------- | ----: |
| `loc-sd-san-diego`   | San Diego   | `/san-diego-ca/san-diego/`   | `launch` |   Yes |
| `loc-sd-san-marcos`  | San Marcos  | `/san-diego-ca/san-marcos/`  | `launch` |   Yes |
| `loc-sd-carlsbad`    | Carlsbad    | `/san-diego-ca/carlsbad/`    | `launch` |   Yes |
| `loc-sd-escondido`   | Escondido   | `/san-diego-ca/escondido/`   | `launch` |   Yes |
| `loc-sd-oceanside`   | Oceanside   | `/san-diego-ca/oceanside/`   | `launch` |   Yes |
| `loc-sd-chula-vista` | Chula Vista | `/san-diego-ca/chula-vista/` | `launch` |   Yes |
| `loc-sd-mission-valley` | Mission Valley | `/san-diego-ca/mission-valley/` | `launch` |   Yes |

San Marcos and the broader North County area receive substantial launch emphasis because they are strategically important to the San Diego operation.

**Mission Valley note:** Mission Valley is classified in the location registry as `commercial_or_mixed_use_district` with `commercial_matrix: full` and `service_matrix: selective`. It is approved at launch primarily because it is the parent location for the approved hydro-jetting page in §18, and because `07-master-location-registry.md` §46 identifies it as the reference example of a commercial district whose value is commercial rather than broad residential.

Its location page should therefore lean commercial/mixed-use in content emphasis rather than following the residential pattern used by the North County city pages. Approving it does not authorize broad residential service + location expansion within Mission Valley.

See `22-decisions-change-log.md` → **DEC-065**.

---

# 14. Las Vegas Priority Locations

| ID                       | Location        | URL                              | Status                      | Index |
| ------------------------ | --------------- | -------------------------------- | --------------------------- | ----: |
| `loc-lv-las-vegas`       | Las Vegas       | `/las-vegas-nv/las-vegas/`       | `launch_pending_validation` |    No |
| `loc-lv-henderson`       | Henderson       | `/las-vegas-nv/henderson/`       | `launch_pending_validation` |    No |
| `loc-lv-north-las-vegas` | North Las Vegas | `/las-vegas-nv/north-las-vegas/` | `launch_pending_validation` |    No |
| `loc-lv-summerlin`       | Summerlin       | `/las-vegas-nv/summerlin/`       | `launch_pending_validation` |    No |

These four pages establish the first local architecture for Las Vegas but remain behind the service-availability gate.

They may be built and QA'd but should not become indexable until market operations are confirmed.

**Launch location-page count:** 16

```text
St. Louis:  5
San Diego:  6 residential/city + 1 commercial district = 7
Las Vegas:  4 (pending validation)
```

---

# 15. Remaining Tier 1 Locations

Other Tier 1 records in the Master Location Registry are **not automatically approved for launch** merely because they carry a Tier 1 designation.

They remain:

```text
phase_2
```

unless explicitly promoted in this document.

This distinction is critical.

For example, Tier 1 registry records such as:

* Kirkwood
* Clayton
* Maryland Heights
* O'Fallon
* Webster Groves
* Wentzville
* Encinitas
* La Jolla
* Poway
* Rancho Bernardo
* Santee
* Vista
* Enterprise
* Paradise
* Spring Valley
* Centennial Hills
* Southern Highlands
* Summerlin West

may represent strong future opportunities but are not launch pages unless separately listed above.

---

# 16. Priority Service + Location Pages

The following service + location combinations are explicitly approved.

No other matrix relationships are authorized for launch.

Canonical pattern:

```text
/{market}/{location}/{service}/
```

---

# 17. St. Louis Service + Location Launch Pages

| ID                          | Page                                        | URL                                                      | Status   | Index |
| --------------------------- | ------------------------------------------- | -------------------------------------------------------- | -------- | ----: |
| `sl-stl-city-camera`        | Sewer Camera Inspection — St. Louis City    | `/st-louis-mo/st-louis-city/sewer-camera-inspection/`    | `launch` |   Yes |
| `sl-chesterfield-camera`    | Sewer Camera Inspection — Chesterfield      | `/st-louis-mo/chesterfield/sewer-camera-inspection/`     | `launch` |   Yes |
| `sl-ballwin-prepurchase`    | Pre-Purchase Sewer Inspection — Ballwin     | `/st-louis-mo/ballwin/pre-purchase-sewer-inspection/`    | `launch` |   Yes |
| `sl-st-charles-prepurchase` | Pre-Purchase Sewer Inspection — St. Charles | `/st-louis-mo/st-charles/pre-purchase-sewer-inspection/` | `launch` |   Yes |
| `sl-florissant-cleaning`    | Sewer Cleaning — Florissant                 | `/st-louis-mo/florissant/sewer-cleaning/`                | `launch` |   Yes |
| `sl-chesterfield-hydro`     | Hydro Jetting — Chesterfield                | `/st-louis-mo/chesterfield/hydro-jetting/`               | `launch` |   Yes |

**St. Louis launch service + location pages:** 6

---

# 18. San Diego Service + Location Launch Pages

| ID                        | Page                                     | URL                                                     | Status   | Index |
| ------------------------- | ---------------------------------------- | ------------------------------------------------------- | -------- | ----: |
| `sl-sd-city-camera`       | Sewer Camera Inspection — San Diego      | `/san-diego-ca/san-diego/sewer-camera-inspection/`      | `launch` |   Yes |
| `sl-san-marcos-camera`    | Sewer Camera Inspection — San Marcos     | `/san-diego-ca/san-marcos/sewer-camera-inspection/`     | `launch` |   Yes |
| `sl-carlsbad-camera`      | Sewer Camera Inspection — Carlsbad       | `/san-diego-ca/carlsbad/sewer-camera-inspection/`       | `launch` |   Yes |
| `sl-chula-vista-camera`   | Sewer Camera Inspection — Chula Vista    | `/san-diego-ca/chula-vista/sewer-camera-inspection/`    | `launch` |   Yes |
| `sl-escondido-cleaning`   | Sewer Cleaning — Escondido               | `/san-diego-ca/escondido/sewer-cleaning/`               | `launch` |   Yes |
| `sl-oceanside-cleaning`   | Sewer Cleaning — Oceanside               | `/san-diego-ca/oceanside/sewer-cleaning/`               | `launch` |   Yes |
| `sl-mission-valley-hydro` | Hydro Jetting — Mission Valley           | `/san-diego-ca/mission-valley/hydro-jetting/`           | `launch` |   Yes |
| `sl-carlsbad-prepurchase` | Pre-Purchase Sewer Inspection — Carlsbad | `/san-diego-ca/carlsbad/pre-purchase-sewer-inspection/` | `launch` |   Yes |

**San Diego launch service + location pages:** 8

---

# 19. Las Vegas Service + Location Gate

No Las Vegas service + location page is approved for indexation at initial build status.

The following are designated **first-wave validation targets**, not build-authorized pages:

```text
/las-vegas-nv/las-vegas/sewer-camera-inspection/
/las-vegas-nv/henderson/sewer-camera-inspection/
/las-vegas-nv/north-las-vegas/sewer-camera-inspection/
/las-vegas-nv/summerlin/sewer-camera-inspection/

/las-vegas-nv/las-vegas/sewer-cleaning/
/las-vegas-nv/henderson/sewer-cleaning/

/las-vegas-nv/las-vegas/hydro-jetting/
/las-vegas-nv/henderson/hydro-jetting/

/las-vegas-nv/las-vegas/pre-purchase-sewer-inspection/
/las-vegas-nv/henderson/pre-purchase-sewer-inspection/
```

Status for all:

```text
hold
```

These routes must not be generated until Las Vegas service availability is confirmed and the selected records are promoted in this document.

**Launch service + location count:** 14

---

# 20. Audience Hub

The parent audience hub is:

| ID              | Page         | URL     | Status   | Index |
| --------------- | ------------ | ------- | -------- | ----: |
| `hub-audiences` | Who We Serve | `/for/` | `launch` |   Yes |

This page is already included in the core-page count.

---

# 21. Launch Audience Pages

| ID                       | Audience           | URL                        | Status   | Index |
| ------------------------ | ------------------ | -------------------------- | -------- | ----: |
| `aud-home-buyers`        | Home Buyers        | `/for/home-buyers/`        | `launch` |   Yes |
| `aud-home-sellers`       | Home Sellers       | `/for/home-sellers/`       | `launch` |   Yes |
| `aud-real-estate-agents` | Real Estate Agents | `/for/real-estate-agents/` | `launch` |   Yes |
| `aud-home-inspectors`    | Home Inspectors    | `/for/home-inspectors/`    | `launch` |   Yes |
| `aud-property-managers`  | Property Managers  | `/for/property-managers/`  | `launch` |   Yes |
| `aud-hoa-communities`    | HOA Communities    | `/for/hoa-communities/`    | `launch` |   Yes |

**Launch audience count:** 6

---

# 22. Phase 2 Audience Pages

The following are approved for post-launch strategic evaluation/building:

| Audience                             | Proposed URL                   | Status    |
| ------------------------------------ | ------------------------------ | --------- |
| Homeowners                           | `/for/homeowners/`             | `phase_2` |
| Real Estate Investors                | `/for/real-estate-investors/`  | `phase_2` |
| Landlords                            | `/for/landlords/`              | `phase_2` |
| Contractors & Remodelers             | `/for/contractors-remodelers/` | `phase_2` |
| Facility Managers                    | `/for/facility-managers/`      | `phase_2` |
| Restaurants & Food-Service Operators | `/for/restaurants/`            | `phase_2` |
| Commercial Property Owners           | `/for/commercial-properties/`  | `phase_2` |

These pages should be prioritized using conversion opportunity, search demand, commercial strategy, and overlap analysis.

---

# 23. Audience + Location Pages

No audience + location pages are approved for the initial launch.

Examples of potential future structures include:

```text
/{market}/{location}/for/{audience}/
```

Potential high-value future combinations include:

* home buyers + priority real estate locations
* real estate agents + major markets
* property managers + commercial/multifamily markets
* HOA communities + HOA-heavy markets

Status:

```text
phase_2
```

Each page requires explicit promotion into this Master Page Build List before generation.

---

# 24. Commercial Hub

The commercial parent page is:

```text
/commercial/
```

and is included in the core launch inventory.

Commercial is treated as its own acquisition pathway rather than a subsection buried inside residential service pages.

---

# 25. Launch Commercial Service Pages

| ID                   | Page                                              | URL                                     | Status   | Index |
| -------------------- | ------------------------------------------------- | --------------------------------------- | -------- | ----: |
| `com-camera`         | Commercial Sewer Camera Inspection                | `/commercial/sewer-camera-inspection/`  | `launch` |   Yes |
| `com-sewer-cleaning` | Commercial Sewer Cleaning                         | `/commercial/sewer-cleaning/`           | `launch` |   Yes |
| `com-hydro-jetting`  | Commercial Hydro Jetting                          | `/commercial/hydro-jetting/`            | `launch` |   Yes |
| `com-drain-cleaning` | Commercial Drain Cleaning                         | `/commercial/drain-cleaning/`           | `launch` |   Yes |
| `com-maintenance`    | Commercial Preventative Sewer & Drain Maintenance | `/commercial/preventative-maintenance/` | `launch` |   Yes |

Commercial copy must not invent:

* emergency response guarantees
* equipment capabilities
* pipe-size capabilities
* maintenance contract terms
* service schedules
* pricing

unless confirmed.

**Launch commercial service count:** 5

---

# 26. Phase 2 Commercial Pages

| Page                               | URL                                  | Status    |
| ---------------------------------- | ------------------------------------ | --------- |
| Commercial Sewer Line Locating     | `/commercial/sewer-line-locating/`   | `phase_2` |
| Commercial Grease & Sludge Removal | `/commercial/grease-sludge-removal/` | `phase_2` |

Commercial Grease & Sludge Removal refers to sewer/drain-line buildup removal.

It must **not** be presented as grease-trap cleaning unless grease-trap cleaning is separately confirmed as an offered service.

---

# 27. Commercial + Location Pages

No commercial + location pages are approved for the initial launch.

Canonical pattern:

```text
/{market}/{location}/commercial/{service}/
```

Priority post-launch opportunities should be selected from locations with strong commercial signals.

Potential examples include:

### St. Louis

* St. Louis City
* Maryland Heights
* Florissant
* Bridgeton
* other verified commercial districts

### San Diego

* San Diego
* Mission Valley
* Chula Vista
* National City
* other verified commercial locations

### Las Vegas

After market validation:

* Las Vegas
* Las Vegas Strip
* Downtown Las Vegas
* North Las Vegas
* Henderson
* Paradise

Status:

```text
phase_2
```

---

# 28. Launch Comparison Pages

Two comparison pages are approved for launch because they directly reinforce the primary differentiators and service decision journey.

| ID                          | Page                                                      | URL                                                        | Status   | Index |
| --------------------------- | --------------------------------------------------------- | ---------------------------------------------------------- | -------- | ----: |
| `cmp-independent-vs-repair` | Independent Sewer Inspection vs Repair Company Inspection | `/compare/independent-sewer-inspection-vs-repair-company/` | `launch` |   Yes |
| `cmp-hydro-vs-snaking`      | Hydro Jetting vs Sewer Snaking                            | `/compare/hydro-jetting-vs-sewer-snaking/`                 | `launch` |   Yes |

**Launch comparison count:** 2

---

# 29. Phase 2 Comparison Pages

| Page                                           | URL                                                        | Status    |
| ---------------------------------------------- | ---------------------------------------------------------- | --------- |
| Sewer Camera Inspection vs Sewer Scope         | `/compare/sewer-camera-inspection-vs-sewer-scope/`         | `phase_2` |
| Sewer Camera Inspection vs Plumbing Inspection | `/compare/sewer-camera-inspection-vs-plumbing-inspection/` | `phase_2` |
| Sewer Cleaning vs Hydro Jetting                | `/compare/sewer-cleaning-vs-hydro-jetting/`                | `phase_2` |
| Sewer Line Locating vs Camera Inspection       | `/compare/sewer-line-locating-vs-camera-inspection/`       | `phase_2` |

Comparison pages must:

* answer legitimate decision questions
* represent competitors or alternatives accurately
* avoid defamatory claims
* avoid false equivalence between services
* link to the relevant canonical service page

---

# 30. Alternative Pages

No alternative page is required for initial launch.

The following are approved as Phase 2 opportunities:

| Page                                                | URL                                                      | Status    |
| --------------------------------------------------- | -------------------------------------------------------- | --------- |
| DIY Sewer Camera Inspection Alternative             | `/alternatives/diy-sewer-camera-inspection/`             | `phase_2` |
| Renting a Sewer Snake Alternative                   | `/alternatives/renting-a-sewer-snake/`                   | `phase_2` |
| Sewer Repair Company Inspection Alternative         | `/alternatives/sewer-repair-company-inspection/`         | `phase_2` |
| Emergency Plumber for Recurring Backups Alternative | `/alternatives/emergency-plumber-for-recurring-backups/` | `phase_2` |

These pages should educate rather than attack competing service providers.

---

# 31. Launch Resource Pages

The initial resource architecture should establish authority around inspection evidence, real estate use cases, and St. Louis-specific reporting.

| ID                       | Page                                                  | URL                                                       | Status   | Index |
| ------------------------ | ----------------------------------------------------- | --------------------------------------------------------- | -------- | ----: |
| `res-stl-lateral-report` | St. Louis Sewer Lateral Report Guide                  | `/resources/st-louis-sewer-lateral-report/`               | `launch` |   Yes |
| `res-stl-city-program`   | St. Louis City Sewer Lateral Program Guide            | `/resources/st-louis-city-sewer-lateral-program/`         | `launch` |   Yes |
| `res-stl-county-program` | St. Louis County Sewer Lateral Program Guide          | `/resources/st-louis-county-sewer-lateral-program/`       | `launch` |   Yes |
| `res-camera-report`      | What Is Included in a Sewer Camera Inspection Report? | `/resources/what-is-in-a-sewer-camera-inspection-report/` | `launch` |   Yes |
| `res-read-video`         | How to Read a Sewer Camera Inspection Video           | `/resources/how-to-read-a-sewer-camera-inspection-video/` | `launch` |   Yes |

**Launch resource count:** 5

Local municipal content must be researched for accuracy before publication and should not generalize one municipality's program requirements to another.

---

# 32. Post-Launch Resource Clusters

The following clusters are approved for research and Phase 2 expansion.

## Sewer Inspection Cluster

Potential topics:

* what a sewer camera inspection shows
* how sewer cameras work
* sewer camera inspection limitations
* common sewer camera findings
* how long an inspection takes
* when to inspect a sewer line
* what a sewer inspection report means

---

## Pre-Purchase / Real Estate Cluster

Potential topics:

* sewer inspection before buying a house
* who orders a sewer inspection
* sewer inspection during due diligence
* home inspection vs sewer inspection
* sewer findings during a home purchase
* sewer inspection for older homes
* seller sewer inspection considerations

---

## Sewer Problems Cluster

Potential topics:

* recurring sewer backups
* tree roots in sewer lines
* sewer line bellies
* offset pipe joints
* cracked sewer pipe
* sewer blockage vs damaged pipe
* slow main sewer line
* sewer smells

These are primarily **problem/resource topics**, not new offered services.

---

## Sewer Cleaning Cluster

Potential topics:

* when sewer cleaning is needed
* sewer cleaning methods
* sewer snaking
* root intrusion
* recurring blockages
* cleaning before camera inspection

---

## Hydro Jetting Cluster

Potential topics:

* how hydro jetting works
* hydro jetting vs snaking
* when hydro jetting is appropriate
* grease and sludge buildup
* hydro jetting and pipe condition
* preventative hydro jetting

---

## Sewer Line Locating Cluster

Potential topics:

* how sewer line locating works
* locating sewer line depth
* locating sewer lines before remodeling
* locating problem areas after camera inspection

---

## Commercial Cluster

Potential topics:

* commercial drain maintenance
* restaurant sewer maintenance
* recurring commercial drain backups
* preventative hydro jetting
* property-management sewer maintenance
* multifamily sewer inspection
* commercial sewer camera reporting

---

# 33. Phase 2 Location Expansion

The Master Location Registry contains substantially more high-quality geographic targets than the launch site requires.

Post-launch location expansion should generally proceed:

```text
Existing Tier 1 not used at launch
↓
Highest-value Phase 2 locations
↓
Supporting neighborhoods / districts
↓
Validated outer service areas
```

Priority should be determined using:

* Search Console data
* rankings
* lead source data
* actual customer geography
* call data
* GBP data where available
* real estate referral activity
* commercial opportunities
* operational service coverage

Registry status alone is not sufficient.

---

# 34. St. Louis Phase 2 Geographic Expansion

Initial expansion should evaluate remaining high-value Tier 1 locations such as:

* Kirkwood
* Clayton
* Brentwood
* Creve Coeur
* Des Peres
* Eureka
* Fenton
* Hazelwood
* Maryland Heights
* O'Fallon
* St. Peters
* Webster Groves
* Wentzville
* Wildwood
* other validated Tier 1 records

St. Louis City neighborhoods should remain selective.

The existence of dozens of named neighborhoods does not justify automatic neighborhood-page publication.

---

# 35. San Diego Phase 2 Geographic Expansion

Initial expansion should evaluate remaining Tier 1 areas such as:

* Encinitas
* Vista
* La Jolla
* Poway
* Santee
* Rancho Bernardo
* Rancho Peñasquitos
* Carmel Valley
* Pacific Beach
* North Park
* La Mesa
* Del Mar
* Solana Beach
* Imperial Beach
* National City
* other validated Tier 1 records

North County should remain a major strategic cluster.

---

# 36. Las Vegas Phase 2 Geographic Expansion

Las Vegas expansion begins only after operational service validation.

After validation, priority Tier 1 opportunities may include:

* Enterprise
* Paradise
* Spring Valley
* Centennial Hills
* Green Valley
* Aliante
* Southern Highlands
* Summerlin South
* Summerlin West
* Sunrise Manor
* Skye Canyon
* Mountain's Edge
* Boulder City
* Whitney
* Winchester

Commercial districts such as:

* Las Vegas Strip
* Downtown Las Vegas

should be evaluated primarily through commercial intent rather than generic residential location-page expansion.

---

# 37. Research-Only Geographic Records

Records identified as:

```text
research_only
manual_review
phase_3_validation
```

must not create public routes automatically.

Examples include:

* landmarks
* airports
* stadium areas
* road corridors
* parks
* questionable geographic names
* extended service territories
* weak standalone search entities

These records exist so research is preserved.

They do not represent publishing instructions.

---

# 38. Phase 3 Geographic Validation

Outer territories must pass operational service-area validation before any page can be promoted.

Validation should answer:

1. Does The Sewer Pros genuinely serve this area?
2. Is dispatch practical?
3. Is the relevant service available there?
4. Does meaningful demand exist?
5. Can locally differentiated content be produced?
6. Is a dedicated page better than coverage from the parent market page?

Until these questions are resolved:

```text
status = phase_3
indexable = false
```

---

# 39. Explicitly Excluded Service Pages

The following must **not** be generated as offered-service pages under the current business model:

```text
Sewer Repair
Sewer Line Replacement
Trenchless Sewer Repair
Pipe Bursting
Pipe Lining
General Plumbing
```

These topics may appear where relevant in:

* educational content
* comparison content
* second-opinion content
* FAQs

but must not be presented as The Sewer Pros services.

---

# 40. Alias-Only Intents

The following search terms do not receive standalone service pages at launch.

## Sewer Scope

Canonical target:

```text
/services/sewer-camera-inspection/
```

---

## Rooter Service

Canonical target:

```text
/services/sewer-cleaning/
```

---

## Root Intrusion Removal

Treat primarily as:

* sewer problem
* sewer cleaning use case
* resource topic

Do not create a standalone launch service.

---

## Grease Trap Cleaning

Status:

```text
hold
```

Do not claim The Sewer Pros performs grease-trap cleaning until operationally confirmed.

Commercial grease/sludge removal refers to sewer-line cleaning, not automatically grease-trap service.

---

# 41. Page Count Does Not Create Authorization

The project should never attempt to "fill" an arbitrary target page count.

The 70-page launch inventory exists because those pages form a useful initial architecture.

If QA determines that a page:

* lacks sufficient content
* overlaps another page
* lacks verified service coverage
* lacks a useful purpose
* introduces unsupported claims

the page should be held rather than published merely to preserve the count.

Quality controls page quantity.

---

# 42. Launch Indexation Gate

Before a `launch` page becomes indexable, verify:

* approved URL
* approved primary intent
* complete content
* unique value
* service accuracy
* market accuracy
* title tag
* meta description
* canonical
* breadcrumbs
* schema where appropriate
* internal links
* CTA
* responsive QA
* accessibility QA
* no material unsupported claims

Site OS governs the reusable QA workflow.

This document governs page authorization.

---

# 43. Las Vegas Activation Gate

Before changing Las Vegas pages from:

```text
launch_pending_validation
```

to:

```text
launch
```

confirm at minimum:

* active operational coverage
* services actually offered
* contact routing
* service request handling
* geographic coverage
* market-specific business facts
* any required licensing or business requirements
* accurate public messaging

After validation, the status change must be recorded in:

`22-decisions-change-log.md`

---

# 44. Master Page Record Requirements

Every implementation record derived from this document should ultimately contain fields comparable to:

```ts
interface MasterPageRecord {
  id: string
  name: string
  pageType: string
  pathname: string
  status:
    | 'launch'
    | 'launch_pending_validation'
    | 'phase_2'
    | 'phase_3'
    | 'hold'
    | 'research_only'
    | 'retired'
  indexable: boolean
  marketId?: string
  locationId?: string
  serviceId?: string
  audienceId?: string
  commercialId?: string
  parentId?: string
}
```

The production implementation may expand this schema.

---

# 45. Page Build List vs Registries

The source-of-truth relationship is:

```text
Master Service Registry
= what services exist
```

```text
Master Location Registry
= what geographic entities exist
```

```text
Service × Location Matrix
= which relationships may contain opportunity
```

```text
Audience / Commercial Matrix
= which audience and commercial relationships may contain opportunity
```

```text
Master Page Build List
= which specific pages are authorized
```

These documents must not be treated as interchangeable.

---

# 46. Page Build List vs URL Strategy

This document identifies approved page destinations.

`05-url-routing-strategy.md` defines the formal URL rules governing those destinations.

If a routing conflict is discovered while creating `05-url-routing-strategy.md`:

1. do not silently change URLs in code
2. resolve the architecture decision
3. update this document
4. record the decision in the change log
5. then implement the approved route

---

# 47. No Implicit Page Creation

The following must never create a page automatically:

* adding a service to the service registry
* adding a city to the location registry
* adding a matrix relationship
* adding an audience
* finding a new keyword
* finding competitor ranking pages
* identifying a People Also Ask question
* discovering search volume
* adding a commercial segment
* Claude suggesting a page
* Claude Code detecting a potential route

All new public pages must pass through this document.

---

# 48. Addition Workflow

A proposed new page should follow:

```text
Opportunity Identified
↓
Research
↓
Intent / Cannibalization Review
↓
Operational Validation
↓
Content Differentiation Review
↓
Add to Master Page Build List
↓
Assign Status
↓
Build
↓
QA
↓
Index
```

---

# 49. Removal Workflow

If a page is removed from the approved inventory:

```text
Existing Page
↓
Evaluate Traffic / Links / Leads
↓
Select Destination
↓
Create Redirect if Appropriate
↓
Mark Retired
↓
Remove From Sitemap
↓
Update Internal Links
↓
Deploy
```

Never simply delete an established indexed URL without migration review.

---

# 50. Launch Build Inventory — Consolidated

## Core / Hubs

```text
/
/about/
/contact/
/services/
/locations/
/for/
/commercial/
/resources/
/faq/
```

## Services

```text
/services/sewer-camera-inspection/
/services/sewer-cleaning/
/services/hydro-jetting/
/services/sewer-cleaning-camera-inspection/
/services/sewer-line-locating/
/services/drain-cleaning/
/services/pre-purchase-sewer-inspection/
/services/recurring-sewer-backup-diagnosis/
/services/preventative-sewer-maintenance/
/st-louis-mo/sewer-lateral-inspection-reporting/
```

## Markets

```text
/st-louis-mo/
/san-diego-ca/
/las-vegas-nv/          [PENDING VALIDATION]
```

## St. Louis Locations

```text
/st-louis-mo/st-louis-city/
/st-louis-mo/chesterfield/
/st-louis-mo/ballwin/
/st-louis-mo/florissant/
/st-louis-mo/st-charles/
```

## San Diego Locations

```text
/san-diego-ca/san-diego/
/san-diego-ca/san-marcos/
/san-diego-ca/carlsbad/
/san-diego-ca/escondido/
/san-diego-ca/oceanside/
/san-diego-ca/chula-vista/
/san-diego-ca/mission-valley/
```

## Las Vegas Locations

```text
/las-vegas-nv/las-vegas/          [PENDING VALIDATION]
/las-vegas-nv/henderson/          [PENDING VALIDATION]
/las-vegas-nv/north-las-vegas/    [PENDING VALIDATION]
/las-vegas-nv/summerlin/          [PENDING VALIDATION]
```

## St. Louis Service + Location

```text
/st-louis-mo/st-louis-city/sewer-camera-inspection/
/st-louis-mo/chesterfield/sewer-camera-inspection/
/st-louis-mo/ballwin/pre-purchase-sewer-inspection/
/st-louis-mo/st-charles/pre-purchase-sewer-inspection/
/st-louis-mo/florissant/sewer-cleaning/
/st-louis-mo/chesterfield/hydro-jetting/
```

## San Diego Service + Location

```text
/san-diego-ca/san-diego/sewer-camera-inspection/
/san-diego-ca/san-marcos/sewer-camera-inspection/
/san-diego-ca/carlsbad/sewer-camera-inspection/
/san-diego-ca/chula-vista/sewer-camera-inspection/
/san-diego-ca/escondido/sewer-cleaning/
/san-diego-ca/oceanside/sewer-cleaning/
/san-diego-ca/mission-valley/hydro-jetting/
/san-diego-ca/carlsbad/pre-purchase-sewer-inspection/
```

## Audiences

```text
/for/home-buyers/
/for/home-sellers/
/for/real-estate-agents/
/for/home-inspectors/
/for/property-managers/
/for/hoa-communities/
```

## Commercial

```text
/commercial/sewer-camera-inspection/
/commercial/sewer-cleaning/
/commercial/hydro-jetting/
/commercial/drain-cleaning/
/commercial/preventative-maintenance/
```

## Comparisons

```text
/compare/independent-sewer-inspection-vs-repair-company/
/compare/hydro-jetting-vs-sewer-snaking/
```

## Resources

```text
/resources/st-louis-sewer-lateral-report/
/resources/st-louis-city-sewer-lateral-program/
/resources/st-louis-county-sewer-lateral-program/
/resources/what-is-in-a-sewer-camera-inspection-report/
/resources/how-to-read-a-sewer-camera-inspection-video/
```

---

# 51. Initial Build Count Verification

| Family                  |  Count |
| ----------------------- | -----: |
| Core / hub / conversion |      9 |
| Service                 |     10 |
| Markets                 |      3 |
| Locations               |     16 |
| Service + location      |     14 |
| Audience                |      6 |
| Commercial services     |      5 |
| Comparison              |      2 |
| Resources               |      5 |
| **Total**               | **70** |

Of these, the Las Vegas market hub and four Las Vegas location pages remain behind an operational validation/indexation gate.

**Indexable at launch:** 65
**Built but gated (`launch_pending_validation`):** 5

No Las Vegas service + location page is authorized for generation at this stage.

---

# 52. Post-Launch Growth Principle

After launch, page expansion should not simply continue numerically through the matrices.

Expansion should respond to evidence.

Priority signals include:

1. existing page rankings
2. Google Search Console impressions
3. queries ranking positions 5–20
4. conversion performance
5. customer call geography
6. commercial opportunities
7. homebuyer/agent referral activity
8. actual service demand
9. GBP opportunities
10. competitive gaps
11. content gaps
12. topical authority needs

---

# 53. Recommended Post-Launch Expansion Order

The default strategic order is:

```text
1. Validate / activate Las Vegas
2. Expand remaining Tier 1 location hubs
3. Expand high-value service + location pages
4. Expand homebuyer / real-estate architecture
5. Expand commercial service + location pages
6. Expand audience + location pages
7. Publish comparison / alternative pages
8. Build problem and diagnostic clusters
9. Build commercial topic clusters
10. Expand selected Phase 2 geographies
11. Evaluate neighborhood-level opportunities
12. Evaluate future markets
```

This is a strategic sequence, not permission to bypass the page-approval gate.

---

# 54. Governance With Site OS

Site OS Master owns reusable:

* research workflows
* page evaluation workflows
* content workflows
* QA
* publishing gates
* optimization procedures

This document owns The Sewer Pros-specific answer to:

> **Which pages are authorized?**

Do not duplicate generalized Site OS procedures inside this document.

---

# 55. Claude Code Rule

`CLAUDE.md` should explicitly instruct Claude Code:

> Never generate a public route solely because a record exists in the service registry, location registry, service-location matrix, audience matrix, or commercial matrix. A route must exist as an eligible record in `04-master-page-build-list.md`.

The production page registry should be derived from this authorization layer.

---

# 56. Critical Rules

### Rule 1

This document is the authoritative page-generation gate.

### Rule 2

The 10,422 service × location relationships are not 10,422 approved pages.

### Rule 3

Only explicit `launch` or otherwise build-authorized records may generate routes.

### Rule 4

Only `launch` records with `indexable: true` may enter the XML sitemap.

### Rule 5

`launch_pending_validation` pages remain noindex until their stated gate is satisfied.

### Rule 6

Tier 1 location status in the location registry does not independently authorize a page.

### Rule 7

Service matrix eligibility does not independently authorize a page.

### Rule 8

Audience and commercial relationships do not independently authorize pages.

### Rule 9

No sewer repair or replacement service pages may be generated under the current business model.

### Rule 10

No Las Vegas service + location pages may be generated until service availability is confirmed.

### Rule 11

Audience + location and commercial + location pages begin post-launch.

### Rule 12

Neighborhood-scale publishing remains selective.

### Rule 13

Comparison and alternative pages must have legitimate decision-stage value.

### Rule 14

Every new page must be explicitly added here before implementation.

### Rule 15

Removal or URL changes require redirect/migration review.

---

# 57. Final Publishing Principle

The Sewer Pros website should scale through **controlled expansion**, not automatic permutation.

The project contains a large SEO opportunity universe:

```text
18 canonical service records
+
579 geographic records
+
10,422 service × location relationships
+
audiences
+
commercial segments
+
comparisons
+
alternatives
+
resources
```

That research provides strategic depth.

The Master Page Build List provides editorial control.

The governing principle is:

```text
Opportunity ≠ Page
```

and:

```text
Approved Page
+
Valid Business Reality
+
Distinct User Intent
+
Useful Content
+
QA
=
Publishable Route
```

This architecture allows The Sewer Pros to build substantial topical and geographic authority without sacrificing site quality, business accuracy, crawl efficiency, or the company's independent sewer inspection and cleaning positioning.
