# Master Service Registry

**Project:** The Sewer Pros multi-market website rebuild  
**Version:** 1.0  
**Markets:** St. Louis, MO · San Diego, CA · Las Vegas, NV

## Purpose

This registry is the normalized service source of truth for global service pages and all downstream service + location and commercial + location matrices. It separates **established services** from **derived use-case services**, **commercial packaging**, and **market-specific capabilities** so the rebuild can expand topical coverage without falsely implying that every proposed page is an identical current offering in every market.

## Canonical URL rules

```text
/services/
/services/{service}/
/commercial/
/commercial/{service}/
/{market}/{location}/{service}/
/{market}/{location}/commercial/{service}/
/st-louis-mo/{market-specific-service}/
```

**Hard rule:** do not use flat matrix slugs such as `/san-diego-ca/sewer-camera-inspection-carlsbad/` or `/st-louis-mo/commercial-hydro-jetting-chesterfield/`.

## Service status model

| Status | Meaning |
|---|---|
| `established_existing_service` | Explicit standalone service on the current public sites |
| `existing_use_case_promoted_to_standalone_page` | Existing service use case that deserves a separate intent page in the rebuild |
| `existing_maintenance_use_case_promoted_to_standalone_page` | Existing maintenance positioning expanded into a dedicated service page |
| `existing_brand_differentiator_promoted_to_standalone_page` | Existing positioning turned into a distinct high-intent conversion page |
| `commercial_expansion_from_confirmed_core_capability` | Core capability is proven; standalone commercial packaging must be validated |
| `explicit_existing_commercial_use_case` | Current public content explicitly supports commercial use |
| `market_specific_existing_capability` | Confirmed capability that belongs to one market only |

## Registry summary

- **18 service records**
- **2 service hubs**
- **6 core services**
- **4 derived/high-intent services**
- **7 commercial services**
- **1 market-specific service**

## Core established services

| Service | Canonical URL | Family | Location matrix | St. Louis | San Diego | Las Vegas |
|---|---|---|---|---|---|---|
| Sewer Camera Inspection | `/services/sewer-camera-inspection/` | inspection_diagnostics | full | Confirmed | Confirmed | Confirm |
| Sewer Cleaning | `/services/sewer-cleaning/` | cleaning | full | Confirmed | Confirmed | Confirm |
| Hydro Jetting | `/services/hydro-jetting/` | cleaning | full | Confirmed | Confirmed | Confirm |
| Sewer Cleaning + Camera Inspection | `/services/sewer-cleaning-camera-inspection/` | inspection_diagnostics | full | Confirmed | Confirmed | Confirm |
| Sewer Line Locating | `/services/sewer-line-locating/` | locating | full | Confirmed | Confirmed | Confirm |
| Drain Cleaning | `/services/drain-cleaning/` | cleaning | full | Confirmed | Confirmed | Confirm |

## Derived / high-intent services

These pages are supported by current service behavior or brand positioning but are not all separate service pages on the legacy sites.

| Service | Canonical URL | Parent | Launch tier | Matrix eligibility |
|---|---|---|---|---|
| Pre-Purchase Sewer Inspection | `/services/pre-purchase-sewer-inspection/` | `svc-sewer-camera-inspection` | launch | full_on_residential_real_estate_locations |
| Recurring Sewer Backup Diagnosis | `/services/recurring-sewer-backup-diagnosis/` | `svc-sewer-cleaning-camera-inspection` | launch_candidate | full_on_residential_property_management_locations |
| Preventative Sewer Maintenance | `/services/preventative-sewer-maintenance/` | `svc-sewer-cleaning` | launch_candidate | selective |
| Independent Sewer Inspection / Second Opinion | `/services/independent-sewer-inspection-second-opinion/` | `svc-sewer-cleaning-camera-inspection` | phase_2_candidate | selective |

## St. Louis market-specific service

### Sewer Lateral Inspection & Municipal Reporting

- **Canonical:** `/st-louis-mo/sewer-lateral-inspection-reporting/`
- **Parent service:** `svc-sewer-camera-inspection`
- **Matrix:** `selective_st_louis_only`
- **Notes:** St. Louis-specific. Current St. Louis site states the company is licensed through most municipal sewer lateral programs for submitting reports. Program-by-program coverage must be documented before localized claims.

## Commercial service registry

| Service | Canonical URL | Parent | Launch tier | Commercial-location matrix |
|---|---|---|---|---|
| Commercial Sewer Camera Inspection | `/commercial/sewer-camera-inspection/` | `svc-sewer-camera-inspection` | launch | full_on_commercial_eligible_locations |
| Commercial Sewer Cleaning | `/commercial/sewer-cleaning/` | `svc-sewer-cleaning` | launch | full_on_commercial_eligible_locations |
| Commercial Hydro Jetting | `/commercial/hydro-jetting/` | `svc-hydro-jetting` | launch | full_on_commercial_eligible_locations |
| Commercial Drain Cleaning | `/commercial/drain-cleaning/` | `svc-drain-cleaning` | launch | full_on_commercial_eligible_locations |
| Commercial Sewer Line Locating | `/commercial/sewer-line-locating/` | `svc-sewer-line-locating` | phase_2_candidate | selective |
| Commercial Preventative Sewer & Drain Maintenance | `/commercial/preventative-maintenance/` | `svc-preventative-sewer-maintenance` | launch | full_on_commercial_eligible_locations |
| Commercial Grease & Sludge Removal | `/commercial/grease-sludge-removal/` | `svc-commercial-hydro-jetting` | phase_2_candidate | selective |

## Detailed service records

### Sewer Camera Inspection

- **ID:** `svc-sewer-camera-inspection`
- **Type:** `core_service`
- **Family:** `inspection_diagnostics`
- **Canonical URL:** `/services/sewer-camera-inspection/`
- **Source status:** `established_existing_service`
- **Launch tier:** `launch`
- **Matrix eligibility:** `full`
- **Commercial applicability:** `yes`
- **Primary intents:** diagnose sewer condition; identify damage or obstructions; document sewer condition
- **Primary audiences:** homeowners, home-buyers, home-sellers, real-estate-agents, home-inspectors, property-managers, contractors
- **Aliases:** sewer scope, sewer scope inspection, sewer line camera inspection, video sewer inspection, sewer line inspection
- **Market status:** St. Louis = Confirmed; San Diego = Confirmed; Las Vegas = Confirm
- **Notes:** Flagship diagnostic service. Current sites emphasize high-resolution camera work, identifying damage/obstructions, reporting, and home-purchase use cases.

### Sewer Cleaning

- **ID:** `svc-sewer-cleaning`
- **Type:** `core_service`
- **Family:** `cleaning`
- **Canonical URL:** `/services/sewer-cleaning/`
- **Source status:** `established_existing_service`
- **Launch tier:** `launch`
- **Matrix eligibility:** `full`
- **Commercial applicability:** `yes`
- **Primary intents:** clear main sewer line; remove roots and obstructions; restore sewer flow
- **Primary audiences:** homeowners, landlords, property-managers, commercial-property-owners
- **Aliases:** rooter service, main sewer line cleaning, sewer rooter, sewer cabling
- **Market status:** St. Louis = Confirmed; San Diego = Confirmed; Las Vegas = Confirm
- **Notes:** Core mechanical cleaning service. Root intrusion and blockage removal belong under this service unless a distinct operational offering is later validated.

### Hydro Jetting

- **ID:** `svc-hydro-jetting`
- **Type:** `core_service`
- **Family:** `cleaning`
- **Canonical URL:** `/services/hydro-jetting/`
- **Source status:** `established_existing_service`
- **Launch tier:** `launch`
- **Matrix eligibility:** `full`
- **Commercial applicability:** `strong`
- **Primary intents:** remove grease and sludge; remove stubborn buildup; prevent recurring backups
- **Primary audiences:** homeowners, property-managers, commercial-property-owners, restaurants, facility-managers
- **Aliases:** hydro-jetting, sewer jetting, water jetting, high-pressure sewer cleaning
- **Market status:** St. Louis = Confirmed; San Diego = Confirmed; Las Vegas = Confirm
- **Notes:** Current sites explicitly position hydro jetting for grease/sludge removal and recurring preventative maintenance, including commercial properties and food establishments.

### Sewer Cleaning + Camera Inspection

- **ID:** `svc-sewer-cleaning-camera-inspection`
- **Type:** `core_service`
- **Family:** `inspection_diagnostics`
- **Canonical URL:** `/services/sewer-cleaning-camera-inspection/`
- **Source status:** `established_existing_service`
- **Launch tier:** `launch`
- **Matrix eligibility:** `full`
- **Commercial applicability:** `yes`
- **Primary intents:** clean then inspect sewer; diagnose recurring backups; separate blockage from structural damage
- **Primary audiences:** homeowners, home-buyers, property-managers, commercial-property-owners
- **Aliases:** sewer cleaning and camera inspection, clean and camera, sewer cleaning with camera
- **Market status:** St. Louis = Confirmed; San Diego = Confirmed; Las Vegas = Confirm
- **Notes:** Core combined service and the strongest proof point for unbiased third-party evaluation because The Sewer Pros states it does not repair broken sewer lines.

### Sewer Line Locating

- **ID:** `svc-sewer-line-locating`
- **Type:** `core_service`
- **Family:** `locating`
- **Canonical URL:** `/services/sewer-line-locating/`
- **Source status:** `established_existing_service`
- **Launch tier:** `launch`
- **Matrix eligibility:** `full`
- **Commercial applicability:** `yes`
- **Primary intents:** locate sewer direction; determine sewer depth; plan repair or remodeling
- **Primary audiences:** homeowners, contractors, remodelers, property-managers, commercial-property-owners
- **Aliases:** line locating, sewer locating, sewer pipe locating, sewer line location
- **Market status:** St. Louis = Confirmed; San Diego = Confirmed; Las Vegas = Confirm
- **Notes:** Current sites describe locating the direction and depth of the main sewer line for damage, repair/replacement planning, and major property projects.

### Drain Cleaning

- **ID:** `svc-drain-cleaning`
- **Type:** `core_service`
- **Family:** `cleaning`
- **Canonical URL:** `/services/drain-cleaning/`
- **Source status:** `established_existing_service`
- **Launch tier:** `launch`
- **Matrix eligibility:** `full`
- **Commercial applicability:** `yes`
- **Primary intents:** clear clogged drains; restore drain flow; prevent drain overflow
- **Primary audiences:** homeowners, landlords, property-managers, commercial-property-owners, restaurants
- **Aliases:** clogged drain cleaning, drain clearing, professional drain cleaning
- **Market status:** St. Louis = Confirmed; San Diego = Confirmed; Las Vegas = Confirm
- **Notes:** Established drain service. Do not split every fixture/drain type into a service page until actual operational scope and search intent are validated.

### Pre-Purchase Sewer Inspection

- **ID:** `svc-pre-purchase-sewer-inspection`
- **Type:** `derived_service`
- **Family:** `inspection_diagnostics`
- **Canonical URL:** `/services/pre-purchase-sewer-inspection/`
- **Source status:** `existing_use_case_promoted_to_standalone_page`
- **Launch tier:** `launch`
- **Matrix eligibility:** `full_on_residential_real_estate_locations`
- **Commercial applicability:** `no`
- **Primary intents:** inspect sewer before buying a home; document sewer condition for a real-estate transaction
- **Primary audiences:** home-buyers, home-sellers, real-estate-agents, home-inspectors, real-estate-investors
- **Aliases:** home buyer sewer inspection, real estate sewer inspection, pre-sale sewer inspection, sewer scope before buying
- **Market status:** St. Louis = Supported; San Diego = Supported; Las Vegas = Confirm
- **Notes:** Not a separate technique from camera inspection; it is a high-value transactional intent. Keep as a standalone landing page because current sites explicitly sell the buy-before-you-purchase use case.

### Recurring Sewer Backup Diagnosis

- **ID:** `svc-recurring-sewer-backup-diagnosis`
- **Type:** `derived_service`
- **Family:** `inspection_diagnostics`
- **Canonical URL:** `/services/recurring-sewer-backup-diagnosis/`
- **Source status:** `existing_use_case_promoted_to_standalone_page`
- **Launch tier:** `launch_candidate`
- **Matrix eligibility:** `full_on_residential_property_management_locations`
- **Commercial applicability:** `yes`
- **Primary intents:** diagnose repeated sewer backups; determine blockage versus damaged line
- **Primary audiences:** homeowners, landlords, property-managers, commercial-property-owners
- **Aliases:** repeated sewer backup diagnosis, multiple sewer backups, recurring sewer clog diagnosis
- **Market status:** St. Louis = Supported; San Diego = Supported; Las Vegas = Confirm
- **Notes:** Derived directly from the existing cleaning + camera workflow for customers experiencing multiple backups.

### Preventative Sewer Maintenance

- **ID:** `svc-preventative-sewer-maintenance`
- **Type:** `derived_service`
- **Family:** `maintenance`
- **Canonical URL:** `/services/preventative-sewer-maintenance/`
- **Source status:** `existing_maintenance_use_case_promoted_to_standalone_page`
- **Launch tier:** `launch_candidate`
- **Matrix eligibility:** `selective`
- **Commercial applicability:** `strong`
- **Primary intents:** prevent sewer backups; schedule recurring sewer cleaning; maintain problem sewer lines
- **Primary audiences:** homeowners, landlords, property-managers, commercial-property-owners, facility-managers, restaurants
- **Aliases:** preventive sewer maintenance, sewer maintenance plan, annual sewer maintenance, scheduled sewer maintenance
- **Market status:** St. Louis = Supported; San Diego = Supported; Las Vegas = Confirm
- **Notes:** Existing sites discuss maintenance schedules and annual hydro jetting. Exact plan cadence, pricing, and inclusions must be confirmed before customer-facing claims.

### Independent Sewer Inspection / Second Opinion

- **ID:** `svc-independent-sewer-second-opinion`
- **Type:** `derived_service`
- **Family:** `inspection_diagnostics`
- **Canonical URL:** `/services/independent-sewer-inspection-second-opinion/`
- **Source status:** `existing_brand_differentiator_promoted_to_standalone_page`
- **Launch tier:** `phase_2_candidate`
- **Matrix eligibility:** `selective`
- **Commercial applicability:** `yes`
- **Primary intents:** verify a sewer repair recommendation; obtain an inspection without repair upsell
- **Primary audiences:** homeowners, home-buyers, real-estate-agents, property-managers, commercial-property-owners
- **Aliases:** sewer repair second opinion, independent sewer evaluation, third-party sewer inspection
- **Market status:** St. Louis = Supported; San Diego = Supported; Las Vegas = Confirm
- **Notes:** Strong differentiator, but should not cannibalize the general camera inspection page. Use for repair-recommendation/second-opinion intent.

### Sewer Lateral Inspection & Municipal Reporting

- **ID:** `svc-stl-sewer-lateral-inspection-reporting`
- **Type:** `market_specific_service`
- **Family:** `inspection_diagnostics`
- **Canonical URL:** `/st-louis-mo/sewer-lateral-inspection-reporting/`
- **Source status:** `market_specific_existing_capability`
- **Launch tier:** `launch`
- **Matrix eligibility:** `selective_st_louis_only`
- **Commercial applicability:** `conditional`
- **Primary intents:** sewer lateral inspection; municipal sewer lateral report; local sewer lateral program documentation
- **Primary audiences:** homeowners, home-buyers, home-sellers, real-estate-agents, home-inspectors
- **Aliases:** sewer lateral inspection, municipal sewer lateral report, sewer lateral program inspection
- **Market status:** St. Louis = Confirmed; San Diego = N/A; Las Vegas = N/A
- **Notes:** St. Louis-specific. Current St. Louis site states the company is licensed through most municipal sewer lateral programs for submitting reports. Program-by-program coverage must be documented before localized claims.

### Commercial Sewer Camera Inspection

- **ID:** `svc-commercial-sewer-camera-inspection`
- **Type:** `commercial_service`
- **Family:** `inspection_diagnostics`
- **Canonical URL:** `/commercial/sewer-camera-inspection/`
- **Source status:** `commercial_expansion_from_confirmed_core_capability`
- **Launch tier:** `launch`
- **Matrix eligibility:** `full_on_commercial_eligible_locations`
- **Commercial applicability:** `yes`
- **Primary intents:** document commercial sewer condition; diagnose commercial sewer problems
- **Primary audiences:** commercial-property-owners, property-managers, facility-managers, restaurants, multifamily-properties, hoas
- **Aliases:** commercial sewer scope, commercial sewer inspection
- **Market status:** St. Louis = Capability / validate packaging; San Diego = Capability / validate packaging; Las Vegas = Confirm
- **Notes:** Technique is established; standalone commercial packaging is part of the rebuild and should use commercial-first proof, reporting, scheduling, and maintenance language.

### Commercial Sewer Cleaning

- **ID:** `svc-commercial-sewer-cleaning`
- **Type:** `commercial_service`
- **Family:** `cleaning`
- **Canonical URL:** `/commercial/sewer-cleaning/`
- **Source status:** `commercial_expansion_from_confirmed_core_capability`
- **Launch tier:** `launch`
- **Matrix eligibility:** `full_on_commercial_eligible_locations`
- **Commercial applicability:** `yes`
- **Primary intents:** clear commercial sewer lines; remove commercial sewer blockages
- **Primary audiences:** commercial-property-owners, property-managers, facility-managers, restaurants, multifamily-properties, hoas
- **Aliases:** commercial main line cleaning, commercial sewer rooter
- **Market status:** St. Louis = Capability / validate packaging; San Diego = Capability / validate packaging; Las Vegas = Confirm
- **Notes:** Commercial page is an expansion of a confirmed cleaning capability. Service hours, emergency response, large-line limits, and equipment constraints must be validated.

### Commercial Hydro Jetting

- **ID:** `svc-commercial-hydro-jetting`
- **Type:** `commercial_service`
- **Family:** `cleaning`
- **Canonical URL:** `/commercial/hydro-jetting/`
- **Source status:** `explicit_existing_commercial_use_case`
- **Launch tier:** `launch`
- **Matrix eligibility:** `full_on_commercial_eligible_locations`
- **Commercial applicability:** `yes`
- **Primary intents:** remove commercial grease and sludge; prevent commercial sewer backups; scheduled hydro jet maintenance
- **Primary audiences:** restaurants, commercial-property-owners, property-managers, facility-managers, multifamily-properties
- **Aliases:** commercial sewer jetting, restaurant hydro jetting, high-pressure commercial drain cleaning
- **Market status:** St. Louis = Supported; San Diego = Supported; Las Vegas = Confirm
- **Notes:** Highest-confidence commercial service. Current hydro-jetting pages explicitly reference commercial sewer lines, food establishments, grease/sludge, and maintenance.

### Commercial Drain Cleaning

- **ID:** `svc-commercial-drain-cleaning`
- **Type:** `commercial_service`
- **Family:** `cleaning`
- **Canonical URL:** `/commercial/drain-cleaning/`
- **Source status:** `commercial_expansion_from_confirmed_core_capability`
- **Launch tier:** `launch`
- **Matrix eligibility:** `full_on_commercial_eligible_locations`
- **Commercial applicability:** `yes`
- **Primary intents:** clear commercial drains; restore business drain flow; reduce recurring clogs
- **Primary audiences:** restaurants, commercial-property-owners, property-managers, facility-managers, multifamily-properties
- **Aliases:** business drain cleaning, restaurant drain cleaning
- **Market status:** St. Louis = Capability / validate packaging; San Diego = Capability / validate packaging; Las Vegas = Confirm
- **Notes:** Commercial positioning is recommended for the rebuild, but current public service pages do not establish every commercial scope detail.

### Commercial Sewer Line Locating

- **ID:** `svc-commercial-sewer-line-locating`
- **Type:** `commercial_service`
- **Family:** `locating`
- **Canonical URL:** `/commercial/sewer-line-locating/`
- **Source status:** `commercial_expansion_from_confirmed_core_capability`
- **Launch tier:** `phase_2_candidate`
- **Matrix eligibility:** `selective`
- **Commercial applicability:** `yes`
- **Primary intents:** locate commercial sewer lines; support excavation, repair, development, or remodeling planning
- **Primary audiences:** contractors, commercial-property-owners, property-managers, facility-managers
- **Aliases:** commercial sewer locating, commercial line locating
- **Market status:** St. Louis = Capability / validate packaging; San Diego = Capability / validate packaging; Las Vegas = Confirm
- **Notes:** Keep selective because intent is narrower than camera inspection, cleaning, and hydro jetting.

### Commercial Preventative Sewer & Drain Maintenance

- **ID:** `svc-commercial-preventative-maintenance`
- **Type:** `commercial_service`
- **Family:** `maintenance`
- **Canonical URL:** `/commercial/preventative-maintenance/`
- **Source status:** `explicit_existing_commercial_maintenance_use_case`
- **Launch tier:** `launch`
- **Matrix eligibility:** `full_on_commercial_eligible_locations`
- **Commercial applicability:** `yes`
- **Primary intents:** schedule recurring sewer and drain maintenance; prevent business backups; coordinate multi-property maintenance
- **Primary audiences:** restaurants, property-managers, facility-managers, commercial-property-owners, multifamily-properties, hoas
- **Aliases:** commercial sewer maintenance plan, scheduled drain maintenance, preventive commercial sewer maintenance
- **Market status:** St. Louis = Supported; San Diego = Supported; Las Vegas = Confirm
- **Notes:** Current hydro-jetting pages explicitly recommend scheduled preventative maintenance for commercial properties. Actual program terms must be confirmed.

### Commercial Grease & Sludge Removal

- **ID:** `svc-commercial-grease-sludge-removal`
- **Type:** `commercial_service`
- **Family:** `cleaning`
- **Canonical URL:** `/commercial/grease-sludge-removal/`
- **Source status:** `existing_hydro_jetting_use_case_promoted_to_specialization`
- **Launch tier:** `phase_2_candidate`
- **Matrix eligibility:** `selective`
- **Commercial applicability:** `yes`
- **Primary intents:** remove grease buildup from sewer lines; remove sludge buildup from commercial sewer lines
- **Primary audiences:** restaurants, food-service-businesses, commercial-property-owners, facility-managers
- **Aliases:** grease buildup removal, sludge removal, restaurant sewer line cleaning
- **Market status:** St. Louis = Supported; San Diego = Supported; Las Vegas = Confirm
- **Notes:** Do not describe this as grease-trap cleaning unless the company separately confirms that service. Current support is for hydro-jetting grease/sludge from sewer lines.

## Alias, overlap, and exclusion guardrails

| Term | Disposition | Canonical target | Reason |
|---|---|---|---|
| Sewer Scope | `alias_only` | `svc-sewer-camera-inspection` | Same underlying customer intent/technique as sewer camera inspection. |
| Rooter Service | `alias_only` | `svc-sewer-cleaning` | Treat as search terminology for sewer cleaning unless a distinct operational offering is confirmed. |
| Root Intrusion Removal | `problem_or_subservice_not_standalone_at_launch` | `svc-sewer-cleaning` | Existing cleaning service removes roots; avoid intent fragmentation until demand supports a separate page. |
| Grease Trap Cleaning | `hold_pending_service_confirmation` | — | Current hydro-jetting content recommends maintenance programs that include grease-trap cleaning, but does not clearly establish that The Sewer Pros performs grease-trap cleaning. |
| Sewer Repair | `not_offered` | — | Brand positioning explicitly distinguishes The Sewer Pros from repair companies. |
| Sewer Line Replacement | `not_offered` | — | Use as educational/comparison intent, not a service. |
| Trenchless Sewer Repair | `not_offered` | — | Not supported by the current service model. |
| Pipe Bursting / Pipe Lining | `not_offered` | — | Not supported by the current service model. |
| General Plumbing | `do_not_expand_without_confirmation` | — | The brand is positioned as a sewer inspection, cleaning, locating, and maintenance specialist rather than a broad plumbing contractor. |

## Matrix generation rules

1. **Core services** are the default service + location matrix set, subject to the location registry's own eligibility/status.
2. **Pre-purchase sewer inspection** is matrix-eligible primarily for residential and real-estate-priority geographies.
3. **Recurring sewer backup diagnosis** is matrix-eligible where homeowner, landlord, property-management, or commercial recurring-problem intent is strong.
4. **Preventative sewer maintenance** and **independent second-opinion inspection** are selective expansion services, not automatic full-matrix launch pages.
5. **Commercial services** generate pages only against locations tagged as commercially eligible in the Master Location Registry.
6. **St. Louis sewer lateral inspection/reporting** is St. Louis-only and should never be generated into San Diego or Las Vegas.
7. A service-location relationship may exist in the mathematical registry without being published or indexable. Publication requires operational availability and enough differentiated content.

## Critical service-boundary rules

- Do not add sewer repair, sewer replacement, trenchless repair, pipe lining, or pipe bursting as offered services unless the company changes its operating model.
- Preserve the brand differentiator that inspection recommendations are independent of a repair sale.
- Do not claim grease-trap cleaning unless separately confirmed.
- Do not turn every problem keyword (roots, sags, offsets, bellies, cracked pipe, slow drains) into a service. Most belong in the problem/resource taxonomy and should link back to the appropriate service.
- Las Vegas service availability must be confirmed before customer-facing pages claim a specific service is offered there.

## Source support used to normalize the registry

- Current St. Louis and San Diego sites both list the same six core specialties: sewer camera inspection, sewer cleaning, hydro jetting, sewer cleaning + camera inspection, line locating, and drain cleaning.
- Current sewer-camera content promotes pre-purchase inspection, condition reporting, and buyer/agent use cases.
- Current cleaning + camera content explicitly supports recurring-backup diagnosis and independent third-party evaluation.
- Current hydro-jetting content explicitly supports grease/sludge removal, commercial properties/food establishments, and scheduled preventative maintenance.
- Current St. Louis homepage states the company is licensed through most municipal sewer lateral programs for submitting reports.

## Recommended source-of-truth usage

`master-service-registry.json` should drive programmatic page-registry generation. This Markdown file is the human-readable planning and review layer.