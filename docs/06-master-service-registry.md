# The Sewer Pros — Master Service Registry

**Document:** `06-master-service-registry.md`
**Project:** The Sewer Pros Website Rebuild
**Repository:** `the-sewer-pros-site`
**Status:** Foundation / Canonical Service Authority
**Document Role:** Canonical service taxonomy and service relationship source of truth
**Primary Markets:** St. Louis, MO; San Diego, CA; Las Vegas, NV
**Canonical Service Records:** 18
**Service Hubs:** 2

---

# 1. Purpose

This document defines the canonical service taxonomy for The Sewer Pros website.

It establishes:

* official service names
* stable service IDs
* canonical service slugs
* canonical service URLs
* service families
* service types
* service aliases
* service intent
* customer audiences
* market availability
* commercial applicability
* matrix eligibility
* page-build eligibility
* service relationships
* exclusions
* service boundaries

This registry should be treated as the authoritative answer to:

> **What services does The Sewer Pros offer, how are those services represented, and where may they participate in the website architecture?**

---

# 2. Critical Service Governance Rule

A keyword discovered through SEO research does not automatically become a service.

A customer problem does not automatically become a service.

A competitor service does not automatically become a Sewer Pros service.

A service may enter the website architecture only when it is supported by:

* confirmed business operations
* existing service behavior
* approved business positioning
* explicit project approval

The governing model is:

```text
Business Capability
↓
Canonical Service Registry
↓
Service Relationships
↓
Master Page Build List
↓
Approved Page
```

---

# 3. Registry Summary

The current normalized registry contains:

| Category                            |  Count |
| ----------------------------------- | -----: |
| Core established services           |      6 |
| Derived / high-intent services      |      4 |
| St. Louis-specific services         |      1 |
| Commercial services                 |      7 |
| **Total canonical service records** | **18** |
| Service hubs                        |      2 |

The service hubs are architectural entities and are not counted among the 18 canonical service records.

---

# 4. Service Hubs

## 4.1 General Services Hub

**ID:** `hub-services`
**Name:** Services
**Canonical URL:** `/services/`

Purpose:

* organize non-commercial canonical services
* establish the general service taxonomy
* provide a primary navigation path
* reinforce specialization
* link users into relevant service categories

---

## 4.2 Commercial Services Hub

**ID:** `hub-commercial`
**Name:** Commercial Sewer & Drain Services
**Canonical URL:** `/commercial/`

Purpose:

* create a dedicated commercial acquisition pathway
* organize commercial service offerings
* separate commercial intent from residential content
* support property managers, facility managers, restaurants, multifamily properties, and commercial property owners

Commercial services should not be buried exclusively as subsections of residential pages.

---

# 5. Service Record Types

Canonical services use one of the following record types.

| Record Type               | Meaning                                                                          |
| ------------------------- | -------------------------------------------------------------------------------- |
| `core_service`            | Established primary business capability                                          |
| `derived_service`         | Existing capability/use case promoted to a distinct search and conversion entity |
| `market_specific_service` | Confirmed service applicable only to a specific market                           |
| `commercial_service`      | Commercial packaging of an approved capability                                   |

---

# 6. Service Families

The current registry uses the following conceptual service families.

| Family                   | Purpose                                                                            |
| ------------------------ | ---------------------------------------------------------------------------------- |
| `inspection_diagnostics` | Inspection, documentation, diagnosis, and condition evaluation                     |
| `cleaning`               | Removal of blockages, roots, buildup, grease, sludge, or other applicable material |
| `locating`               | Locating sewer line direction, position, or approximate depth                      |
| `maintenance`            | Recurring or preventative sewer/drain maintenance                                  |

These families support:

* navigation
* related-service logic
* content architecture
* schema
* internal linking
* audience relationships
* future reporting

---

# 7. Market Status Model

Individual services may have different operational confidence by market.

Recommended status values include:

| Status                              | Meaning                                                                                 |
| ----------------------------------- | --------------------------------------------------------------------------------------- |
| `confirmed`                         | Existing service is confirmed in the market                                             |
| `supported`                         | Existing business behavior/content supports the offering                                |
| `capability_validate_packaging`     | Underlying capability exists, but standalone commercial packaging requires confirmation |
| `requires_operational_confirmation` | Do not publish customer-facing market claims until availability is confirmed            |
| `not_applicable`                    | Service does not apply to this market                                                   |

Las Vegas was held under operational confirmation until DEC-075 (2026-08-17), when the business owner confirmed the market delivers the same service set as San Diego and St. Louis.

Las Vegas now mirrors San Diego's per-service status: 13 of 18 available, 4 commercial services pending packaging validation (as in every market), and the St. Louis-specific lateral reporting service `not_applicable`.

⚠ This resolves DEC-063's release criterion 2 only. It does **not** release the indexation gate — criterion 7 (licensing) remains unconfirmed, so the five Las Vegas pages stay `launch_pending_validation` per PENDING-012.

---

# 8. Matrix Eligibility Model

The registry controls whether a service may participate in geographic matrices.

| Value                                               | Meaning                                                                   |
| --------------------------------------------------- | ------------------------------------------------------------------------- |
| `full`                                              | May participate broadly in approved location opportunities                |
| `full_on_residential_real_estate_locations`         | Appropriate mainly for residential / real estate geographies              |
| `full_on_residential_property_management_locations` | Appropriate where recurring residential/property-management intent exists |
| `full_on_commercial_eligible_locations`             | May participate in approved commercially relevant locations               |
| `selective`                                         | Only high-value combinations should be considered                         |
| `selective_st_louis_only`                           | Selective combinations within St. Louis only                              |
| `none`                                              | No service-location matrix generation                                     |

Matrix eligibility is **not page authorization**.

---

# 9. Service Registry vs Master Page Build List

These documents perform different functions.

```text
06-master-service-registry.md
=
What service entities exist?
```

```text
08-service-location-matrix.md
=
Where may service opportunity exist?
```

```text
04-master-page-build-list.md
=
Which actual pages are authorized?
```

For example:

`Preventative Sewer Maintenance`

may be `selective` from a matrix perspective while still having its global service page explicitly approved for launch.

Those decisions are not contradictory.

---

# 10. Canonical URL Patterns

## General Service

```text
/services/{service}/
```

## Commercial Service

```text
/commercial/{service}/
```

## Service + Location

```text
/{canonical-location-path}/{service}/
```

## Commercial Service + Location

```text
/{canonical-location-path}/commercial/{service}/
```

## St. Louis-Specific Service

```text
/st-louis-mo/{service}/
```

Do not use flat service-location URLs such as:

```text
/san-diego-ca/sewer-camera-inspection-carlsbad/
```

Canonical:

```text
/san-diego-ca/carlsbad/sewer-camera-inspection/
```

---

# 11. Core Service Registry

The six established core services are:

| ID                                     | Service                            | Canonical URL                                 | Family                 | Matrix |
| -------------------------------------- | ---------------------------------- | --------------------------------------------- | ---------------------- | ------ |
| `svc-sewer-camera-inspection`          | Sewer Camera Inspection            | `/services/sewer-camera-inspection/`          | inspection_diagnostics | full   |
| `svc-sewer-cleaning`                   | Sewer Cleaning                     | `/services/sewer-cleaning/`                   | cleaning               | full   |
| `svc-hydro-jetting`                    | Hydro Jetting                      | `/services/hydro-jetting/`                    | cleaning               | full   |
| `svc-sewer-cleaning-camera-inspection` | Sewer Cleaning + Camera Inspection | `/services/sewer-cleaning-camera-inspection/` | inspection_diagnostics | full   |
| `svc-sewer-line-locating`              | Sewer Line Locating                | `/services/sewer-line-locating/`              | locating               | full   |
| `svc-drain-cleaning`                   | Drain Cleaning                     | `/services/drain-cleaning/`                   | cleaning               | full   |

All six are approved global launch pages.

---

# 12. Sewer Camera Inspection

**ID:** `svc-sewer-camera-inspection`
**Canonical Name:** Sewer Camera Inspection
**Slug:** `sewer-camera-inspection`
**Canonical URL:** `/services/sewer-camera-inspection/`
**Record Type:** `core_service`
**Family:** `inspection_diagnostics`
**Page Authorization:** `launch`
**Matrix Eligibility:** `full`
**Commercial Applicability:** Yes

## Primary Intent

* inspect sewer condition
* identify visible defects or obstructions
* document sewer condition
* investigate sewer problems
* support informed property decisions

## Primary Audiences

* homeowners
* home buyers
* home sellers
* real estate agents
* home inspectors
* property managers
* contractors

## Approved Aliases

* sewer scope
* sewer scope inspection
* sewer line camera inspection
* video sewer inspection
* sewer line inspection

Aliases belong to this canonical service unless later intent analysis supports a separate page.

## Market Status

| Market    | Status                            |
| --------- | --------------------------------- |
| St. Louis | Confirmed                         |
| San Diego | Confirmed                         |
| Las Vegas | Confirmed                         |

## Strategic Role

This is the flagship diagnostic service and one of the strongest entities for:

* homebuyer acquisition
* real estate referrals
* second-opinion positioning
* sewer-condition education
* diagnostic search intent

---

# 13. Sewer Cleaning

**ID:** `svc-sewer-cleaning`
**Canonical Name:** Sewer Cleaning
**Slug:** `sewer-cleaning`
**Canonical URL:** `/services/sewer-cleaning/`
**Record Type:** `core_service`
**Family:** `cleaning`
**Page Authorization:** `launch`
**Matrix Eligibility:** `full`
**Commercial Applicability:** Yes

## Primary Intent

* clear main sewer lines
* remove applicable roots and obstructions
* restore sewer flow
* address recurring blockages

## Primary Audiences

* homeowners
* landlords
* property managers
* commercial property owners

## Approved Aliases

* rooter service
* main sewer line cleaning
* sewer rooter
* sewer cabling

## Market Status

| Market    | Status                            |
| --------- | --------------------------------- |
| St. Louis | Confirmed                         |
| San Diego | Confirmed                         |
| Las Vegas | Confirmed                         |

## Service Boundary

Root intrusion removal generally belongs under sewer cleaning unless future operational/search evidence justifies a separate service entity.

---

# 14. Hydro Jetting

**ID:** `svc-hydro-jetting`
**Canonical Name:** Hydro Jetting
**Slug:** `hydro-jetting`
**Canonical URL:** `/services/hydro-jetting/`
**Record Type:** `core_service`
**Family:** `cleaning`
**Page Authorization:** `launch`
**Matrix Eligibility:** `full`
**Commercial Applicability:** Strong

## Primary Intent

* remove heavy buildup
* remove applicable grease and sludge
* clean stubborn sewer-line deposits
* address recurring blockages
* support preventative maintenance

## Primary Audiences

* homeowners
* property managers
* commercial property owners
* restaurants
* facility managers

## Approved Aliases

* hydro-jetting
* sewer jetting
* water jetting
* high-pressure sewer cleaning

## Market Status

| Market    | Status                            |
| --------- | --------------------------------- |
| St. Louis | Confirmed                         |
| San Diego | Confirmed                         |
| Las Vegas | Confirmed                         |

## Service Boundary

Do not claim hydro jetting is appropriate for every pipe or condition.

Inspection or evaluation may be appropriate before hydro jetting depending on system condition.

---

# 15. Sewer Cleaning + Camera Inspection

**ID:** `svc-sewer-cleaning-camera-inspection`
**Canonical Name:** Sewer Cleaning + Camera Inspection
**Slug:** `sewer-cleaning-camera-inspection`
**Canonical URL:** `/services/sewer-cleaning-camera-inspection/`
**Record Type:** `core_service`
**Family:** `inspection_diagnostics`
**Page Authorization:** `launch`
**Matrix Eligibility:** `full`
**Commercial Applicability:** Yes

## Primary Intent

* clean then inspect a sewer line
* investigate recurring backups
* distinguish obstruction from visible structural problems
* reassess a sewer after cleaning

## Primary Audiences

* homeowners
* home buyers
* property managers
* commercial property owners

## Approved Aliases

* sewer cleaning and camera inspection
* clean and camera
* sewer cleaning with camera

## Market Status

| Market    | Status                            |
| --------- | --------------------------------- |
| St. Louis | Confirmed                         |
| San Diego | Confirmed                         |
| Las Vegas | Confirmed                         |

## Strategic Role

This service strongly supports the independent-inspection positioning because cleaning can improve visibility before reassessing the actual sewer condition.

---

# 16. Sewer Line Locating

**ID:** `svc-sewer-line-locating`
**Canonical Name:** Sewer Line Locating
**Slug:** `sewer-line-locating`
**Canonical URL:** `/services/sewer-line-locating/`
**Record Type:** `core_service`
**Family:** `locating`
**Page Authorization:** `launch`
**Matrix Eligibility:** `full`
**Commercial Applicability:** Yes

## Primary Intent

* locate sewer-line direction
* determine approximate sewer depth
* identify where an inspection finding is located
* support property projects
* provide information for repair/remodeling planning by appropriate contractors

## Primary Audiences

* homeowners
* contractors
* remodelers
* property managers
* commercial property owners

## Approved Aliases

* line locating
* sewer locating
* sewer pipe locating
* sewer line location

## Market Status

| Market    | Status                            |
| --------- | --------------------------------- |
| St. Louis | Confirmed                         |
| San Diego | Confirmed                         |
| Las Vegas | Confirmed                         |

## Claim Guardrail

Do not imply survey-grade accuracy unless specifically confirmed.

---

# 17. Drain Cleaning

**ID:** `svc-drain-cleaning`
**Canonical Name:** Drain Cleaning
**Slug:** `drain-cleaning`
**Canonical URL:** `/services/drain-cleaning/`
**Record Type:** `core_service`
**Family:** `cleaning`
**Page Authorization:** `launch`
**Matrix Eligibility:** `full`
**Commercial Applicability:** Yes

## Primary Intent

* clear clogged drains
* restore drain flow
* reduce drain overflow risk
* address applicable recurring drainage problems

## Primary Audiences

* homeowners
* landlords
* property managers
* commercial property owners
* restaurants

## Approved Aliases

* clogged drain cleaning
* drain clearing
* professional drain cleaning

## Market Status

| Market    | Status                            |
| --------- | --------------------------------- |
| St. Louis | Confirmed                         |
| San Diego | Confirmed                         |
| Las Vegas | Confirmed                         |

## Service Boundary

Do not automatically create separate services for:

* kitchen drains
* shower drains
* bathtub drains
* floor drains
* laundry drains
* every individual fixture

unless service scope and distinct search intent justify separate pages.

---

# 18. Derived / High-Intent Service Registry

The four derived services are:

| ID                                     | Service                                       | Canonical URL                                            | Current Page Status | Matrix                            |
| -------------------------------------- | --------------------------------------------- | -------------------------------------------------------- | ------------------- | --------------------------------- |
| `svc-pre-purchase-sewer-inspection`    | Pre-Purchase Sewer Inspection                 | `/services/pre-purchase-sewer-inspection/`               | Launch              | residential / real estate         |
| `svc-recurring-sewer-backup-diagnosis` | Recurring Sewer Backup Diagnosis              | `/services/recurring-sewer-backup-diagnosis/`            | Launch              | residential / property management |
| `svc-preventative-sewer-maintenance`   | Preventative Sewer Maintenance                | `/services/preventative-sewer-maintenance/`              | Launch              | selective                         |
| `svc-independent-sewer-second-opinion` | Independent Sewer Inspection / Second Opinion | `/services/independent-sewer-inspection-second-opinion/` | Phase 2             | selective                         |

These are supported by existing capabilities or positioning but represent distinct customer intent rather than entirely different technical methods.

---

# 19. Pre-Purchase Sewer Inspection

**ID:** `svc-pre-purchase-sewer-inspection`
**Canonical Name:** Pre-Purchase Sewer Inspection
**Slug:** `pre-purchase-sewer-inspection`
**Canonical URL:** `/services/pre-purchase-sewer-inspection/`
**Record Type:** `derived_service`
**Family:** `inspection_diagnostics`
**Parent Service:** `svc-sewer-camera-inspection`
**Page Authorization:** `launch`
**Matrix Eligibility:** `full_on_residential_real_estate_locations`
**Commercial Applicability:** No

## Primary Intent

* inspect a sewer before buying property
* document sewer condition during a transaction
* evaluate hidden sewer risk
* support informed purchase decisions

## Primary Audiences

* home buyers
* home sellers
* real estate agents
* home inspectors
* real estate investors

## Approved Aliases

* home buyer sewer inspection
* real estate sewer inspection
* pre-sale sewer inspection
* sewer scope before buying

## Market Status

| Market    | Status                            |
| --------- | --------------------------------- |
| St. Louis | Supported                         |
| San Diego | Supported                         |
| Las Vegas | Supported                         |

## Strategic Role

This page exists because the **transactional intent** is meaningfully different from generic sewer camera inspection intent.

It should remain closely linked to the parent camera-inspection entity.

---

# 20. Recurring Sewer Backup Diagnosis

**ID:** `svc-recurring-sewer-backup-diagnosis`
**Canonical Name:** Recurring Sewer Backup Diagnosis
**Slug:** `recurring-sewer-backup-diagnosis`
**Canonical URL:** `/services/recurring-sewer-backup-diagnosis/`
**Record Type:** `derived_service`
**Family:** `inspection_diagnostics`
**Parent Service:** `svc-sewer-cleaning-camera-inspection`
**Registry Maturity:** `launch_candidate`
**Current Page Authorization:** `launch`
**Matrix Eligibility:** `full_on_residential_property_management_locations`
**Commercial Applicability:** Yes

## Primary Intent

* diagnose repeated sewer backups
* determine why a sewer keeps backing up
* distinguish recurring blockage from visible line damage
* investigate repeated sewer problems

## Primary Audiences

* homeowners
* landlords
* property managers
* commercial property owners

## Approved Aliases

* repeated sewer backup diagnosis
* multiple sewer backups
* recurring sewer clog diagnosis

## Market Status

| Market    | Status                            |
| --------- | --------------------------------- |
| St. Louis | Supported                         |
| San Diego | Supported                         |
| Las Vegas | Supported                         |

## Strategic Role

The service represents a high-intent diagnostic problem state.

Its content should connect strongly to:

* sewer cleaning
* camera inspection
* cleaning + camera inspection
* relevant resource content

---

# 21. Preventative Sewer Maintenance

**ID:** `svc-preventative-sewer-maintenance`
**Canonical Name:** Preventative Sewer Maintenance
**Slug:** `preventative-sewer-maintenance`
**Canonical URL:** `/services/preventative-sewer-maintenance/`
**Record Type:** `derived_service`
**Family:** `maintenance`
**Parent Service:** `svc-sewer-cleaning`
**Registry Maturity:** `launch_candidate`
**Current Page Authorization:** `launch`
**Matrix Eligibility:** `selective`
**Commercial Applicability:** Strong

## Primary Intent

* reduce recurring sewer problems
* schedule recurring sewer cleaning
* maintain known problem sewer lines
* proactively manage buildup or recurring obstruction risk

## Primary Audiences

* homeowners
* landlords
* property managers
* commercial property owners
* facility managers
* restaurants

## Approved Aliases

* preventive sewer maintenance
* sewer maintenance plan
* annual sewer maintenance
* scheduled sewer maintenance

## Market Status

| Market    | Status                            |
| --------- | --------------------------------- |
| St. Louis | Supported                         |
| San Diego | Supported                         |
| Las Vegas | Supported                         |

## Claim Guardrail

Do not publish specific:

* maintenance frequency
* contract terms
* subscription structure
* included services
* pricing

without business confirmation.

---

# 22. Independent Sewer Inspection / Second Opinion

**ID:** `svc-independent-sewer-second-opinion`
**Canonical Name:** Independent Sewer Inspection / Second Opinion
**Slug:** `independent-sewer-inspection-second-opinion`
**Canonical URL:** `/services/independent-sewer-inspection-second-opinion/`
**Record Type:** `derived_service`
**Family:** `inspection_diagnostics`
**Parent Service:** `svc-sewer-cleaning-camera-inspection`
**Page Authorization:** `phase_2`
**Matrix Eligibility:** `selective`
**Commercial Applicability:** Yes

## Primary Intent

* verify a major sewer recommendation
* obtain another sewer evaluation
* inspect without repair-driven upselling
* obtain more information before committing to major repair work

## Primary Audiences

* homeowners
* home buyers
* real estate agents
* property managers
* commercial property owners

## Approved Aliases

* sewer repair second opinion
* independent sewer evaluation
* third-party sewer inspection
* independent sewer inspection

## Market Status

| Market    | Status                            |
| --------- | --------------------------------- |
| St. Louis | Supported                         |
| San Diego | Supported                         |
| Las Vegas | Supported                         |

## Cannibalization Guardrail

Do not use this page as another general sewer camera inspection page.

Its intent must remain specifically focused on:

* second opinions
* existing repair recommendations
* independent evaluation

---

# 23. St. Louis Market-Specific Service

The current registry contains one market-specific canonical service.

## Sewer Lateral Inspection & Municipal Reporting

**ID:** `svc-stl-sewer-lateral-inspection-reporting`
**Canonical Name:** Sewer Lateral Inspection & Municipal Reporting
**Slug:** `sewer-lateral-inspection-reporting`
**Canonical URL:** `/st-louis-mo/sewer-lateral-inspection-reporting/`
**Record Type:** `market_specific_service`
**Family:** `inspection_diagnostics`
**Parent Service:** `svc-sewer-camera-inspection`
**Page Authorization:** `launch`
**Matrix Eligibility:** `selective_st_louis_only`
**Commercial Applicability:** Conditional

## Primary Intent

* sewer lateral inspection
* municipal sewer lateral reporting
* sewer lateral program documentation
* real estate sewer lateral compliance-related inspection needs

## Primary Audiences

* homeowners
* home buyers
* home sellers
* real estate agents
* home inspectors

## Approved Aliases

* sewer lateral inspection
* municipal sewer lateral report
* sewer lateral program inspection

## Market Status

| Market    | Status         |
| --------- | -------------- |
| St. Louis | Confirmed      |
| San Diego | Not applicable |
| Las Vegas | Not applicable |

## Critical Geographic Rule

This service is **St. Louis-only**.

Never generate:

```text
/san-diego-ca/.../sewer-lateral-inspection-reporting/
```

or:

```text
/las-vegas-nv/.../sewer-lateral-inspection-reporting/
```

from automated matrices.

## Municipal Program Guardrail

Any statement that The Sewer Pros is:

* licensed
* approved
* registered
* authorized
* accepted

by a particular municipal sewer lateral program must be verified for that specific program before publication.

Do not convert a broad historical claim into municipality-specific claims without evidence.

---

# 24. Commercial Service Registry

The commercial registry contains seven services.

| ID                                        | Service                                           | URL                                     | Page Status | Matrix              |
| ----------------------------------------- | ------------------------------------------------- | --------------------------------------- | ----------- | ------------------- |
| `svc-commercial-sewer-camera-inspection`  | Commercial Sewer Camera Inspection                | `/commercial/sewer-camera-inspection/`  | Launch      | commercial eligible |
| `svc-commercial-sewer-cleaning`           | Commercial Sewer Cleaning                         | `/commercial/sewer-cleaning/`           | Launch      | commercial eligible |
| `svc-commercial-hydro-jetting`            | Commercial Hydro Jetting                          | `/commercial/hydro-jetting/`            | Launch      | commercial eligible |
| `svc-commercial-drain-cleaning`           | Commercial Drain Cleaning                         | `/commercial/drain-cleaning/`           | Launch      | commercial eligible |
| `svc-commercial-sewer-line-locating`      | Commercial Sewer Line Locating                    | `/commercial/sewer-line-locating/`      | Phase 2     | selective           |
| `svc-commercial-preventative-maintenance` | Commercial Preventative Sewer & Drain Maintenance | `/commercial/preventative-maintenance/` | Launch      | commercial eligible |
| `svc-commercial-grease-sludge-removal`    | Commercial Grease & Sludge Removal                | `/commercial/grease-sludge-removal/`    | Phase 2     | selective           |

---

# 25. Commercial Sewer Camera Inspection

**ID:** `svc-commercial-sewer-camera-inspection`
**Canonical URL:** `/commercial/sewer-camera-inspection/`
**Record Type:** `commercial_service`
**Family:** `inspection_diagnostics`
**Parent:** `svc-sewer-camera-inspection`
**Page Authorization:** `launch`
**Matrix Eligibility:** `full_on_commercial_eligible_locations`

## Primary Intent

* inspect commercial sewer systems
* document commercial sewer condition
* diagnose commercial sewer problems
* support facility or property-management decisions

## Primary Audiences

* commercial property owners
* property managers
* facility managers
* restaurants
* multifamily properties
* HOAs

## Aliases

* commercial sewer scope
* commercial sewer inspection

## Market Status

| Market    | Status                                           |
| --------- | ------------------------------------------------ |
| St. Louis | Capability exists; validate commercial packaging |
| San Diego | Capability exists; validate commercial packaging |
| Las Vegas | Capability exists; validate commercial packaging |

## Commercial Content Requirements

The page should emphasize:

* documentation
* scheduling
* operational impact
* property coordination
* diagnostics
* commercial use cases

rather than simply duplicating residential inspection content.

---

# 26. Commercial Sewer Cleaning

**ID:** `svc-commercial-sewer-cleaning`
**Canonical URL:** `/commercial/sewer-cleaning/`
**Record Type:** `commercial_service`
**Family:** `cleaning`
**Parent:** `svc-sewer-cleaning`
**Page Authorization:** `launch`
**Matrix Eligibility:** `full_on_commercial_eligible_locations`

## Primary Intent

* clear commercial sewer lines
* remove applicable commercial blockages
* restore sewer flow
* address recurring commercial sewer problems

## Primary Audiences

* commercial property owners
* property managers
* facility managers
* restaurants
* multifamily properties
* HOAs

## Aliases

* commercial main line cleaning
* commercial sewer rooter

## Market Status

| Market    | Status                                           |
| --------- | ------------------------------------------------ |
| St. Louis | Capability exists; validate commercial packaging |
| San Diego | Capability exists; validate commercial packaging |
| Las Vegas | Capability exists; validate commercial packaging |

## Validation Requirements

Do not invent:

* maximum pipe sizes
* 24/7 service
* emergency response times
* equipment limitations
* contract terms

---

# 27. Commercial Hydro Jetting

**ID:** `svc-commercial-hydro-jetting`
**Canonical URL:** `/commercial/hydro-jetting/`
**Record Type:** `commercial_service`
**Family:** `cleaning`
**Parent:** `svc-hydro-jetting`
**Page Authorization:** `launch`
**Matrix Eligibility:** `full_on_commercial_eligible_locations`

## Primary Intent

* remove commercial grease and sludge
* remove stubborn sewer-line buildup
* reduce recurring commercial backups
* perform scheduled commercial jetting maintenance

## Primary Audiences

* restaurants
* commercial property owners
* property managers
* facility managers
* multifamily properties

## Aliases

* commercial sewer jetting
* restaurant hydro jetting
* high-pressure commercial drain cleaning

## Market Status

| Market    | Status                            |
| --------- | --------------------------------- |
| St. Louis | Supported                         |
| San Diego | Supported                         |
| Las Vegas | Supported                         |

## Strategic Role

This is currently the strongest established commercial service use case.

It should play a major role in restaurant, property-management, and facility-maintenance architecture.

---

# 28. Commercial Drain Cleaning

**ID:** `svc-commercial-drain-cleaning`
**Canonical URL:** `/commercial/drain-cleaning/`
**Record Type:** `commercial_service`
**Family:** `cleaning`
**Parent:** `svc-drain-cleaning`
**Page Authorization:** `launch`
**Matrix Eligibility:** `full_on_commercial_eligible_locations`

## Primary Intent

* clear commercial drains
* restore commercial drain flow
* reduce recurring business drain problems

## Primary Audiences

* restaurants
* commercial property owners
* property managers
* facility managers
* multifamily properties

## Aliases

* business drain cleaning
* restaurant drain cleaning

## Market Status

| Market    | Status                                           |
| --------- | ------------------------------------------------ |
| St. Louis | Capability exists; validate commercial packaging |
| San Diego | Capability exists; validate commercial packaging |
| Las Vegas | Capability exists; validate commercial packaging |

---

# 29. Commercial Sewer Line Locating

**ID:** `svc-commercial-sewer-line-locating`
**Canonical URL:** `/commercial/sewer-line-locating/`
**Record Type:** `commercial_service`
**Family:** `locating`
**Parent:** `svc-sewer-line-locating`
**Page Authorization:** `phase_2`
**Matrix Eligibility:** `selective`

## Primary Intent

* locate commercial sewer lines
* understand sewer routing
* support development or remodeling planning
* provide location information before appropriate downstream work

## Primary Audiences

* contractors
* commercial property owners
* property managers
* facility managers

## Aliases

* commercial sewer locating
* commercial line locating

## Market Status

| Market    | Status                                |
| --------- | ------------------------------------- |
| St. Louis | Capability exists; validate packaging |
| San Diego | Capability exists; validate packaging |
| Las Vegas | Capability exists; validate packaging |

This service remains selective because commercial search intent is narrower than:

* camera inspection
* sewer cleaning
* drain cleaning
* hydro jetting

---

# 30. Commercial Preventative Sewer & Drain Maintenance

**ID:** `svc-commercial-preventative-maintenance`
**Canonical URL:** `/commercial/preventative-maintenance/`
**Record Type:** `commercial_service`
**Family:** `maintenance`
**Parent:** `svc-preventative-sewer-maintenance`
**Page Authorization:** `launch`
**Matrix Eligibility:** `full_on_commercial_eligible_locations`

## Primary Intent

* schedule recurring sewer maintenance
* schedule recurring drain maintenance
* reduce business backup risk
* coordinate maintenance across properties

## Primary Audiences

* restaurants
* property managers
* facility managers
* commercial property owners
* multifamily properties
* HOAs

## Aliases

* commercial sewer maintenance plan
* scheduled drain maintenance
* preventive commercial sewer maintenance

## Market Status

| Market    | Status                            |
| --------- | --------------------------------- |
| St. Louis | Supported                         |
| San Diego | Supported                         |
| Las Vegas | Supported                         |

## Claim Guardrail

Do not specify:

* maintenance cadence
* contractual frequency
* annual plans
* program pricing
* guaranteed prevention

until confirmed.

---

# 31. Commercial Grease & Sludge Removal

**ID:** `svc-commercial-grease-sludge-removal`
**Canonical URL:** `/commercial/grease-sludge-removal/`
**Record Type:** `commercial_service`
**Family:** `cleaning`
**Parent:** `svc-commercial-hydro-jetting`
**Page Authorization:** `phase_2`
**Matrix Eligibility:** `selective`

## Primary Intent

* remove grease buildup from sewer lines
* remove sludge buildup
* address restaurant or food-service sewer-line buildup

## Primary Audiences

* restaurants
* food-service businesses
* commercial property owners
* facility managers

## Aliases

* grease buildup removal
* sludge removal
* restaurant sewer line cleaning

## Market Status

| Market    | Status                            |
| --------- | --------------------------------- |
| St. Louis | Supported                         |
| San Diego | Supported                         |
| Las Vegas | Supported                         |

## Critical Boundary

This service refers to:

> **grease and sludge removal from sewer/drain lines**

It does **not** automatically mean:

> **grease trap cleaning**

Grease-trap cleaning remains unconfirmed.

---

# 32. Complete Canonical Service Table

| ID                                           | Service                                           | Type            | Family                   | Page Status |
| -------------------------------------------- | ------------------------------------------------- | --------------- | ------------------------ | ----------- |
| `svc-sewer-camera-inspection`                | Sewer Camera Inspection                           | Core            | Inspection / Diagnostics | Launch      |
| `svc-sewer-cleaning`                         | Sewer Cleaning                                    | Core            | Cleaning                 | Launch      |
| `svc-hydro-jetting`                          | Hydro Jetting                                     | Core            | Cleaning                 | Launch      |
| `svc-sewer-cleaning-camera-inspection`       | Sewer Cleaning + Camera Inspection                | Core            | Inspection / Diagnostics | Launch      |
| `svc-sewer-line-locating`                    | Sewer Line Locating                               | Core            | Locating                 | Launch      |
| `svc-drain-cleaning`                         | Drain Cleaning                                    | Core            | Cleaning                 | Launch      |
| `svc-pre-purchase-sewer-inspection`          | Pre-Purchase Sewer Inspection                     | Derived         | Inspection / Diagnostics | Launch      |
| `svc-recurring-sewer-backup-diagnosis`       | Recurring Sewer Backup Diagnosis                  | Derived         | Inspection / Diagnostics | Launch      |
| `svc-preventative-sewer-maintenance`         | Preventative Sewer Maintenance                    | Derived         | Maintenance              | Launch      |
| `svc-independent-sewer-second-opinion`       | Independent Sewer Inspection / Second Opinion     | Derived         | Inspection / Diagnostics | Phase 2     |
| `svc-stl-sewer-lateral-inspection-reporting` | Sewer Lateral Inspection & Municipal Reporting    | Market-Specific | Inspection / Diagnostics | Launch      |
| `svc-commercial-sewer-camera-inspection`     | Commercial Sewer Camera Inspection                | Commercial      | Inspection / Diagnostics | Launch      |
| `svc-commercial-sewer-cleaning`              | Commercial Sewer Cleaning                         | Commercial      | Cleaning                 | Launch      |
| `svc-commercial-hydro-jetting`               | Commercial Hydro Jetting                          | Commercial      | Cleaning                 | Launch      |
| `svc-commercial-drain-cleaning`              | Commercial Drain Cleaning                         | Commercial      | Cleaning                 | Launch      |
| `svc-commercial-sewer-line-locating`         | Commercial Sewer Line Locating                    | Commercial      | Locating                 | Phase 2     |
| `svc-commercial-preventative-maintenance`    | Commercial Preventative Sewer & Drain Maintenance | Commercial      | Maintenance              | Launch      |
| `svc-commercial-grease-sludge-removal`       | Commercial Grease & Sludge Removal                | Commercial      | Cleaning                 | Phase 2     |

---

# 33. Parent Service Relationships

Derived and commercial services should maintain explicit parent relationships.

```text
Sewer Camera Inspection
├── Pre-Purchase Sewer Inspection
├── Commercial Sewer Camera Inspection
└── St. Louis Sewer Lateral Inspection & Reporting
```

```text
Sewer Cleaning
├── Preventative Sewer Maintenance
└── Commercial Sewer Cleaning
```

```text
Hydro Jetting
└── Commercial Hydro Jetting
    └── Commercial Grease & Sludge Removal
```

```text
Sewer Cleaning + Camera Inspection
├── Recurring Sewer Backup Diagnosis
└── Independent Sewer Inspection / Second Opinion
```

```text
Sewer Line Locating
└── Commercial Sewer Line Locating
```

```text
Drain Cleaning
└── Commercial Drain Cleaning
```

These relationships support:

* breadcrumbs
* related service modules
* schema
* topical linking
* content planning

---

# 34. Service Relationship Philosophy

A derived service does not necessarily represent a different piece of equipment or technical process.

It may exist because the user intent is materially different.

Example:

```text
Sewer Camera Inspection
```

and:

```text
Pre-Purchase Sewer Inspection
```

may use similar technical inspection methods.

But their customer intent differs enough to justify separate pages:

```text
General diagnostic intent
vs.
Real estate transaction intent
```

---

# 35. Canonical Alias Rules

Aliases may be used naturally in:

* page copy
* title variations
* FAQs
* metadata
* resource content
* internal anchors

They do not create new canonical service entities.

Examples:

```text
sewer scope
→ Sewer Camera Inspection
```

```text
rooter service
→ Sewer Cleaning
```

```text
commercial sewer jetting
→ Commercial Hydro Jetting
```

---

# 36. Alias and Exclusion Registry

| Term                    | Disposition                          | Canonical Target        |
| ----------------------- | ------------------------------------ | ----------------------- |
| Sewer Scope             | `alias_only`                         | Sewer Camera Inspection |
| Rooter Service          | `alias_only`                         | Sewer Cleaning          |
| Root Intrusion Removal  | `problem_or_subservice`              | Sewer Cleaning          |
| Grease Trap Cleaning    | `hold_pending_confirmation`          | None                    |
| Sewer Repair            | `not_offered`                        | None                    |
| Sewer Line Replacement  | `not_offered`                        | None                    |
| Trenchless Sewer Repair | `not_offered`                        | None                    |
| Pipe Bursting           | `not_offered`                        | None                    |
| Pipe Lining             | `not_offered`                        | None                    |
| General Plumbing        | `do_not_expand_without_confirmation` | None                    |

---

# 37. Sewer Repair Rule

The following are explicitly **not offered services** under the current approved business model:

* sewer repair
* sewer replacement
* trenchless sewer repair
* pipe bursting
* pipe lining

These terms may be discussed when relevant to:

* educational resources
* sewer inspection findings
* comparisons
* second-opinion intent
* customer decision-making

They must not be represented as The Sewer Pros service offerings.

---

# 38. General Plumbing Rule

The website should not expand into generic plumbing categories without approval.

Do not automatically create pages for:

* faucet repair
* water heater repair
* toilet repair
* repiping
* water lines
* general plumbing emergencies

The Sewer Pros is being positioned as a specialized sewer and drain company.

---

# 39. Problem Keywords Are Not Services

Do not automatically convert these into service records:

* tree roots
* root intrusion
* sewer belly
* offset pipe
* cracked sewer pipe
* broken sewer line
* sludge
* slow drain
* sewer smell
* recurring backup
* standing water

These generally belong within:

```text
Problem / Resource Taxonomy
↓
Relevant Diagnostic Service
↓
Relevant Cleaning Service
```

---

# 40. Matrix Generation Rules

## Core Services

The six core services may participate in the primary service + location opportunity matrix where location eligibility and market availability allow.

---

## Pre-Purchase Sewer Inspection

Use primarily against locations with:

* residential relevance
* homebuyer demand
* real estate activity
* agent/referral opportunity

---

## Recurring Sewer Backup Diagnosis

Use where there is meaningful:

* homeowner intent
* landlord intent
* property-management intent
* recurring commercial problem intent

---

## Preventative Sewer Maintenance

Use selectively.

Do not generate automatically across all locations.

---

## Independent Second Opinion

Use selectively.

Primary opportunities should center on:

* major repair recommendations
* second-opinion search intent
* independent inspection positioning

---

## Commercial Services

Commercial matrices should use only locations that have adequate:

* commercial relevance
* property-management relevance
* restaurant relevance
* multifamily relevance
* facility-management relevance

---

## St. Louis Sewer Lateral Service

St. Louis-only.

Never generate outside the St. Louis market.

---

# 41. Matrix Does Not Equal Publishing Approval

A valid relationship such as:

```text
Carlsbad
+
Hydro Jetting
```

may exist within opportunity research.

That does not automatically authorize:

```text
/san-diego-ca/carlsbad/hydro-jetting/
```

Publication still requires:

```text
Service Registry
+
Location Registry
+
Valid Matrix Relationship
+
Master Page Build List Approval
```

---

# 42. Las Vegas Service Rule

Current Las Vegas service records must retain:

```text
requires_operational_confirmation
```

until the business confirms actual operating capabilities.

Before activating a Las Vegas service, verify:

* service is actually offered
* technicians/equipment are available
* customer inquiries can be fulfilled
* geographic coverage is accurate
* applicable operational requirements are satisfied

Do not assume that because St. Louis or San Diego provides a service, Las Vegas automatically provides it.

---

# 43. Commercial Packaging Rule

Several commercial services represent established technical capabilities packaged for commercial intent.

For these services, content must distinguish:

```text
Technical capability is established
```

from:

```text
Every commercial service detail is confirmed
```

Commercial pages must not invent:

* response times
* service contracts
* maintenance terms
* emergency availability
* pipe-size capacity
* fleet size
* after-hours service
* multi-location pricing
* national account capabilities

---

# 44. Service Naming Standard

Canonical service names should remain stable.

Use the approved canonical name for:

* H1 architecture
* navigation
* structured data
* internal identifiers
* page registry references

Synonyms may appear naturally in supporting copy.

Do not rename canonical services based solely on temporary keyword-volume differences.

---

# 45. Service Slug Standard

Canonical service slugs must be:

* lowercase
* hyphen-separated
* stable
* controlled by this registry

Examples:

```text
sewer-camera-inspection
sewer-cleaning
hydro-jetting
sewer-line-locating
pre-purchase-sewer-inspection
```

Do not independently re-slug them during implementation.

---

# 46. Service ID Standard

Stable internal IDs should use:

```text
svc-
```

prefix.

Examples:

```text
svc-sewer-camera-inspection
svc-hydro-jetting
svc-pre-purchase-sewer-inspection
```

IDs should remain stable even if customer-facing wording evolves.

---

# 47. Recommended TypeScript Model

The implementation may use a model comparable to:

```ts
export type ServiceRecordType =
  | 'core_service'
  | 'derived_service'
  | 'market_specific_service'
  | 'commercial_service'

export type ServiceFamily =
  | 'inspection_diagnostics'
  | 'cleaning'
  | 'locating'
  | 'maintenance'

export interface Service {
  serviceId: string
  name: string
  slug: string
  canonicalUrl: string
  recordType: ServiceRecordType
  serviceFamily: ServiceFamily
  parentServiceId?: string
  pageStatus: 'launch' | 'phase_2' | 'phase_3' | 'hold'
  matrixEligibility: string
  commercialApplicability: boolean | 'strong' | 'conditional'
  primaryIntents: string[]
  primaryAudiences: string[]
  aliases: string[]
  markets: Record<string, string>
  notes?: string
}
```

The production schema may expand as implementation requirements become clearer.

---

# 48. Machine-Readable Source of Truth

The repository contains a machine-readable version of this registry.

**Current location:**

```text
data/services/master-service-registry.json
```

A typed TypeScript wrapper may later be added alongside it:

```text
data/services/master-service-registry.ts
```

If added, the TypeScript module should import or derive from the JSON rather than duplicating its contents, so a single source of truth is preserved.

This Markdown document is the human-readable governance layer and must remain synchronized with the JSON registry.

If the two disagree about a canonical service name, slug, ID, or page status, resolve the discrepancy rather than allowing implementation to follow whichever is more convenient.

---

# 49. Recommended Registry Usage

The service registry should drive:

* service entity resolution
* service page configuration
* service labels
* canonical slugs
* service family relationships
* aliases
* related services
* matrix evaluation
* commercial relationships
* schema input
* navigation configuration
* page validation

It should **not** independently drive route authorization.

---

# 50. Service Validation Script

A future service validation process should detect:

* duplicate service IDs
* duplicate canonical URLs
* duplicate canonical slugs within the same namespace
* missing family
* missing record type
* invalid parent ID
* unsupported market
* conflicting exclusions
* commercial service without valid parent
* market-specific service outside its allowed market

Invalid service data should fail QA.

---

# 51. New Service Approval Workflow

Before adding a service:

```text
Customer / SEO Opportunity
↓
Confirm Business Capability
↓
Determine Distinct Intent
↓
Check Existing Canonical Service
↓
Evaluate Cannibalization
↓
Assign Service Type
↓
Assign Parent
↓
Assign Canonical ID + Slug
↓
Assign Market Availability
↓
Add to Registry
↓
Evaluate Master Page Build List
```

Finding search demand alone is not sufficient.

---

# 52. Service Consolidation Workflow

If two services later prove to represent the same intent:

```text
Compare Intent
↓
Choose Canonical Entity
↓
Merge Content
↓
Update Registry
↓
Update Page Build List
↓
Redirect Retired URL
↓
Update Internal Links
↓
Update Schema / Sitemap
```

Avoid maintaining duplicate services purely because both terms have search volume.

---

# 53. Service Removal Workflow

If The Sewer Pros stops offering a service:

1. mark the service inactive
2. identify affected global pages
3. identify affected service + location pages
4. identify affected commercial pages
5. determine redirect destinations
6. remove inappropriate internal links
7. remove from navigation
8. remove from sitemap
9. update schema
10. record the decision in `22-decisions-change-log.md`

Do not simply delete the service record.

---

# 54. Relationship With Content Strategy

Service pages represent primary transactional entities.

Resource content should support those service entities.

Example:

```text
What Does a Sewer Camera Inspection Show?
↓
Sewer Camera Inspection
```

```text
Why Does My Sewer Keep Backing Up?
↓
Recurring Sewer Backup Diagnosis
↓
Sewer Cleaning + Camera Inspection
```

```text
Hydro Jetting vs Snaking
↓
Hydro Jetting
```

---

# 55. Relationship With Audience Strategy

Services should connect only to relevant audiences.

Example:

```text
Home Buyers
→ Pre-Purchase Sewer Inspection
→ Sewer Camera Inspection
```

```text
Property Managers
→ Sewer Cleaning
→ Hydro Jetting
→ Preventative Maintenance
```

```text
Restaurants
→ Commercial Hydro Jetting
→ Commercial Drain Cleaning
→ Preventative Maintenance
```

Audience relationships will be formalized in:

`09-audience-commercial-matrix.md`

---

# 56. Relationship With Internal Linking

Service relationships should eventually inform links such as:

```text
Sewer Camera Inspection
↔ Pre-Purchase Sewer Inspection
```

```text
Sewer Cleaning
↔ Sewer Cleaning + Camera Inspection
```

```text
Sewer Cleaning
↔ Hydro Jetting
```

```text
Hydro Jetting
↔ Commercial Hydro Jetting
```

```text
Sewer Line Locating
↔ Sewer Camera Inspection
```

Detailed link rules belong in:

`16-internal-linking-strategy.md`

---

# 57. Relationship With Schema

Service schema must reference actual approved service entities.

Do not generate `Service` schema for:

* unoffered repair services
* keyword aliases
* customer problems
* research-only concepts

Structured data should describe real service offerings.

---

# 58. Relationship With AI / LLM Search

Consistent canonical entities help AI systems understand:

* what The Sewer Pros offers
* how services relate
* which terms are aliases
* what the company does not offer
* which services are commercial
* which services are local-market-specific

Entity consistency is preferable to generating dozens of overlapping keyword pages.

---

# 59. Service Boundary Summary

The Sewer Pros is currently positioned around:

```text
Inspection
+
Diagnostics
+
Cleaning
+
Hydro Jetting
+
Locating
+
Preventative Maintenance
```

The company is **not currently positioned around**:

```text
Repair
+
Replacement
+
Pipe Lining
+
Pipe Bursting
+
General Plumbing
```

This boundary should remain clear throughout:

* SEO
* content
* schema
* navigation
* Google Business Profile strategy
* AI search optimization
* comparison content

---

# 60. Critical Service Registry Rules

### Rule 1

There are currently 18 canonical service records.

### Rule 2

The six established core services are the primary service foundation.

### Rule 3

Derived services must represent distinct customer intent.

### Rule 4

Aliases do not create new service entities.

### Rule 5

Customer problems do not automatically create services.

### Rule 6

Sewer repair and sewer replacement are not offered services.

### Rule 7

Pipe lining and pipe bursting are not offered services.

### Rule 8

General plumbing must not be added without approval.

### Rule 9

Grease-trap cleaning remains unconfirmed.

### Rule 10

Commercial grease/sludge removal refers to sewer/drain-line buildup, not automatically grease-trap cleaning.

### Rule 11

St. Louis sewer lateral reporting is St. Louis-specific.

### Rule 12

Las Vegas service availability must be operationally confirmed.

### Rule 13

Commercial packaging must not invent operational details.

### Rule 14

Matrix eligibility does not equal page authorization.

### Rule 15

The Master Page Build List controls actual page creation.

### Rule 16

Canonical service IDs and slugs must remain stable.

### Rule 17

New service additions require explicit business-capability confirmation.

---

# 61. Final Service Registry Principle

The service registry exists to prevent the website from drifting away from the actual business.

The governing chain is:

```text
Real Business Capability
↓
Canonical Service
↓
Approved Market Availability
↓
Approved Customer Intent
↓
Approved Page
↓
SEO / AEO / AI Content
```

not:

```text
Keyword
↓
Automatically Invent Service
↓
Publish Page
```

The Sewer Pros should build topical authority by becoming deeply authoritative around the services it genuinely provides—not by expanding its service taxonomy to match every search phrase competitors target.

**This registry is the canonical service vocabulary for the project and should be used by all downstream page, content, matrix, schema, routing, and development systems.**
