# Commercial removal inventory (Phase 0)

Owner decision, Oct 12, 2026: The Sewer Pros no longer lists commercial services. This inventory is read-only. It records every place commercial or commercial-adjacent wording appears so the removal phases can be done and reverted one at a time.

## Method

Searched `app`, `components`, `content`, `data`, `lib`, `types`, `scripts`, `public` (non-image files), `docs`, `CLAUDE.md` and `next.config.ts` for: commercial, multifamily, multi-family, facility manager, property management, restaurant, warehouse, HOA, apartment, landlord, retail and "business owner". Image files were not searched. A hit is one matching line. Files are classified as a whole by their role, with one line-level override: a line that matches only "business owner" is class E, because it refers to the owner of The Sewer Pros.

| Class | Meaning |
|---|---|
| A | Page or route to delete (primary audience or service is commercial) |
| B | Registry or data entry to remove (service, audience, matrix row, location pairing, keyword target, type value) |
| C | Reference to edit (nav, footer, hub card, homepage section, CTA, form option, FAQ, metadata, schema, internal link, alt text, docs) |
| D | Ambiguous, listed for the owner, not deleted |
| E | False positive, leave alone |

## Counts per class

| Class | Line hits | Files |
|---|---|---|
| A | 123 | 5 |
| B | 56,829 | 25 |
| C | 2,431 | 150 |
| D | 0 lines (4 items listed below) | 0 |
| E | 165 | 8 |
| **Total** | **59,548** | **188** |

Class B is dominated by the two matrix files (the JSON spans many lines per row), so the row counts below are the meaningful figures. Class C includes 2,045 documentation lines, which are handled in Phase 5.

| Area | Line hits |
|---|---|
| data | 56,761 |
| docs | 2,130 |
| content | 366 |
| types | 115 |
| components | 77 |
| lib | 25 |
| CLAUDE.md | 25 |
| scripts | 20 |
| app | 15 |
| public | 14 |

Data counts that matter more than line hits:

- Service registry: 18 records, 7 commercial (`svc-commercial-*`), so 11 remain. Two of the seven (`svc-commercial-sewer-line-locating`, `svc-commercial-grease-sludge-removal`) never had a page.
- Service + location matrix: 10,422 relationships, 4,053 of them commercial services (7 x 579 locations). 6,369 remain.
- Location registry: 579 locations, each carrying a `commercial_matrix` eligibility value (selective 502, conditional 51, hold 23, full 3).
- Audience taxonomy: 13 canonical audience ids. Commercial: `aud-facility-managers`, `aud-restaurants`, `aud-commercial-property-owners`. See class D for property managers and HOA.
- Built pages: 206 in the static export, 6 of them commercial.

## Class A: pages and routes to delete

| Route | Page id | Source |
|---|---|---|
| /commercial/ | hub-commercial | content/pages/core.tsx (hub block), app/commercial/page.tsx |
| /commercial/sewer-camera-inspection/ | com-camera | content/pages/commercial.tsx, app/commercial/[service]/page.tsx |
| /commercial/sewer-cleaning/ | com-sewer-cleaning | content/pages/commercial.tsx, app/commercial/[service]/page.tsx |
| /commercial/hydro-jetting/ | com-hydro-jetting | content/pages/commercial.tsx, app/commercial/[service]/page.tsx |
| /commercial/drain-cleaning/ | com-drain-cleaning | content/pages/commercial.tsx, app/commercial/[service]/page.tsx |
| /commercial/preventative-maintenance/ | com-maintenance | content/pages/commercial.tsx, app/commercial/[service]/page.tsx |

Route count: 6. No commercial service + location, audience + service, audience + location or commercial + location pages were ever built.

Files that exist only for commercial pages (deleted in Phase 1):

- types/commercial.ts (40 hits)
- content/pages/commercial.tsx (39 hits)
- components/templates/CommercialPageTemplate.tsx (31 hits)
- app/commercial/[service]/page.tsx (10 hits)
- app/commercial/page.tsx (3 hits)
- `public/images/commercial/**` holds only `.gitkeep` placeholders plus one existing image; **no image file will be deleted** (Phase 4 lists unused images).

## Class B: registry and data entries to remove

| Where | Entry |
|---|---|
| data/services/master-service-registry.json | 7 commercial service records; `commercial_applicability` field on the 11 that remain |
| data/services/services.ts, types/service.ts | 7 `svc-commercial-*` ids, `commercial_service` record type, `hub-commercial`, `isCommercialService`, `CommercialApplicability` |
| data/pages/approved-pages.ts, pages.ts, cross-registry.ts | `hub-commercial` and 5 `com-*` page records, `commercial` and `commercial-hub` page types, parent maps, commercial audience ids |
| types/audience.ts | `aud-facility-managers`, `aud-restaurants`, `aud-commercial-property-owners`, `commercial_operator`, `commercial_only`, `commercial_fit_only` |
| types/page.ts, types/content.ts, types/matrix.ts, types/location.ts, types/common.ts, types/commercial.ts | commercial page types, `CommercialPageContent`, segment ids, `LocationCommercialMatrix`, commercial matrix scopes |
| data/matrices/service-location-master-matrix.json and .csv | 4,053 rows (all `svc-commercial-*`), `location_commercial_matrix` column, relationship_count 10,422 becomes 6,369 |
| data/locations/master-location-registry.json, locations.ts | `commercial_matrix` field on 579 locations; `commercial_or_mixed_use_district` location type check |
| lib/routing/static-params.ts, pathname.ts, index.ts | `commercialServiceParams`, `/commercial/` route group |
| lib/analytics/context.ts, events.ts | audience_id 'commercial', lead_type 'commercial', form type 'commercial_service', commercial-district location set |
| lib/schema/graph.ts | 'commercial-hub' case |
| data/navigation/navigation.ts | header and footer Commercial entries |
| content/index.ts | `commercialContent` registration and `getCommercialContent` |

## Class C: references to edit (code and content, by file)

| File | Hits | Notes |
|---|---|---|
| content/pages/core.tsx | 48 | homepage commercial section and FAQ, Commercial hub content, residential-and-commercial copy |
| content/pages/san-diego.tsx | 43 | market hub copy: commercial district framing, residential-and-commercial lines |
| content/pages/san-diego-mission-valley.tsx | 39 | Mission Valley is framed as a commercial district: edit framing, keep page |
| content/pages/las-vegas.tsx | 36 | market hub copy |
| content/pages/st-louis.tsx | 25 | market hub copy |
| content/pages/sl-sd-mission-valley-prepurchase.tsx | 9 |  |
| content/pages/services.tsx | 8 |  |
| types/content.ts | 8 |  |
| public/images/README.md | 8 |  |
| content/pages/about.tsx | 7 |  |
| content/pages/sl-sd-mission-valley-backup.tsx | 7 |  |
| content/pages/sl-sd-mission-valley-maintenance.tsx | 7 |  |
| scripts/verify-preventative-sewer-maintenance-page.mjs | 7 |  |
| components/templates/HubPageTemplate.tsx | 6 | dense variant and copy for hub-commercial |
| content/pages/san-diego-service-location.tsx | 6 |  |
| components/sections/ContactForm.tsx | 5 | 'commercial' request type and option |
| components/sections/RoutingCards.tsx | 5 | commercial routing card |
| content/index.ts | 5 |  |
| content/pages/san-diego-chula-vista.tsx | 5 |  |
| content/pages/sl-sd-mission-valley-drain.tsx | 5 |  |
| content/pages/st-louis-florissant.tsx | 5 |  |
| data/business/hero-backdrop.ts | 5 |  |
| components/sections/section-icons.tsx | 4 |  |
| components/templates/index.ts | 4 |  |
| components/ui/Callout.tsx | 4 | 'commercial' variant |
| content/pages/contact.tsx | 4 |  |
| public/images/services/preventative-sewer-maintenance/README.md | 4 |  |
| components/sections/ProcessSteps.tsx | 3 |  |
| components/templates/HomePageTemplate.tsx | 3 |  |
| content/pages/las-vegas-henderson.tsx | 3 |  |
| content/pages/san-diego-carlsbad.tsx | 3 |  |
| content/pages/san-diego-city.tsx | 3 |  |
| content/pages/san-diego-escondido.tsx | 3 |  |
| content/pages/service-location-shared.ts | 3 |  |
| content/pages/sl-rebuild/sl-mission-valley-hydro.tsx | 3 |  |
| content/pages/sl-sd-mission-valley-camera.tsx | 3 |  |
| content/pages/sl-sd-mission-valley-cleaning.tsx | 3 |  |
| content/pages/sl-sd-mission-valley-locating.tsx | 3 |  |
| content/pages/st-louis-chesterfield.tsx | 3 |  |
| content/pages/st-louis-st-charles.tsx | 3 |  |
| data/business/process.tsx | 3 |  |
| scripts/verify-drain-cleaning-page.mjs | 3 |  |
| scripts/verify-mission-valley-page.mjs | 3 |  |
| app/globals.css | 2 |  |
| components/sections/LeadFormSection.tsx | 2 |  |
| components/sections/ServiceHubSections.tsx | 2 |  |
| components/sections/SurveyLeadForm.tsx | 2 |  |
| content/pages/home-service-cards.ts | 2 |  |
| content/pages/san-diego-oceanside.tsx | 2 |  |
| content/pages/san-diego-san-marcos.tsx | 2 |  |
| content/pages/st-louis-ballwin.tsx | 2 |  |
| content/pages/st-louis-city.tsx | 2 |  |
| public/images/markets/README.md | 2 |  |
| components/templates/MarketPageTemplate.tsx | 1 |  |
| components/ui/Badge.tsx | 1 |  |
| components/ui/Button.tsx | 1 |  |
| content/pages/comparisons.tsx | 1 |  |
| content/pages/las-vegas-las-vegas.tsx | 1 |  |
| content/pages/las-vegas-north-las-vegas.tsx | 1 |  |
| content/pages/las-vegas-summerlin.tsx | 1 |  |
| ...and 11 more files | 11 | |

### Documentation and CLAUDE.md (edited in Phase 5)

| File | Hits |
|---|---|
| docs/09-audience-matrix.md | 463 |
| docs/archive/07-master-location-registry.research-output.md | 142 |
| docs/03-information-architecture.md | 119 |
| docs/22-decisions-change-log.md | 116 |
| docs/archive/06-master-service-registry.research-output.md | 111 |
| docs/16-internal-linking-strategy.md | 101 |
| docs/property-manager-restore.md | 85 |
| docs/10-seo-strategy.md | 82 |
| docs/21-post-launch-seo-roadmap.md | 82 |
| docs/14-content-specification.md | 75 |
| docs/05-url-routing-strategy.md | 70 |
| docs/13-competitor-analysis.md | 68 |
| docs/17-conversion-architecture.md | 65 |
| docs/00-project-overview.md | 58 |
| docs/04-master-page-build-list.md | 54 |
| docs/19-analytics-measurement.md | 54 |
| docs/06-master-service-registry.md | 38 |
| docs/15-schema-entity-strategy.md | 37 |
| docs/12-content-aeo-ai-strategy.md | 36 |
| docs/01-business-brand-foundation.md | 30 |
| docs/18-design-system.md | 30 |
| docs/11-local-seo-gbp-strategy.md | 27 |
| CLAUDE.md | 25 |
| docs/08-service-location-matrix.md | 21 |
| docs/02-nextjs-technical-architecture.md | 18 |
| docs/source-reports/san-diego/sl-mission-valley-prepurchase.md | 14 |
| docs/20-migration-redirect-plan.md | 11 |
| docs/source-reports/rebuild/sl-mission-valley-hydro.md | 11 |
| docs/source-reports/san-diego/sl-mission-valley-backup.md | 11 |
| docs/source-reports/san-diego/sl-mission-valley-drain.md | 11 |
| docs/07-master-location-registry.md | 10 |
| docs/source-reports/san-diego/sl-mission-valley-maintenance.md | 10 |
| docs/source-reports/san-diego/sl-mission-valley-cleaning-camera.md | 5 |
| docs/source-reports/san-diego/sl-mission-valley-cleaning.md | 5 |
| docs/source-reports/san-diego/sl-mission-valley-locating.md | 5 |
| docs/source-reports/san-diego/sl-mission-valley-camera.md | 4 |
| docs/superpowers/plans/2026-08-23-power-page-template-port.md | 4 |
| docs/archive/08-service-location-matrix.research-output.md | 3 |
| docs/source-reports/st-louis/sl-florissant-backup.md | 3 |
| docs/source-reports/rebuild/sl-florissant-cleaning.md | 2 |
| docs/source-reports/st-louis/sl-florissant-drain.md | 2 |
| docs/source-reports/st-louis/sl-florissant-maintenance.md | 2 |
| docs/source-reports/st-louis/sl-florissant-prepurchase.md | 2 |
| docs/source-reports/st-louis/sl-st-charles-locating.md | 2 |
| docs/23-content-objective-charter.md | 1 |
| docs/source-reports/henderson/sl-henderson-backup.md | 1 |
| docs/source-reports/henderson/sl-henderson-locating.md | 1 |
| docs/source-reports/las-vegas-city/sl-lv-city-backup.md | 1 |
| docs/source-reports/las-vegas-city/sl-lv-city-locating.md | 1 |
| docs/source-reports/north-las-vegas/sl-nlv-locating.md | 1 |
| docs/source-reports/rebuild/sl-escondido-cleaning.md | 1 |
| docs/source-reports/rebuild/sl-st-charles-prepurchase.md | 1 |
| docs/source-reports/san-diego/sl-escondido-backup.md | 1 |
| docs/source-reports/san-diego/sl-escondido-camera.md | 1 |
| docs/source-reports/san-diego/sl-escondido-cleaning-camera.md | 1 |
| docs/source-reports/san-diego/sl-escondido-drain.md | 1 |
| docs/source-reports/san-diego/sl-escondido-hydro.md | 1 |
| docs/source-reports/san-diego/sl-escondido-locating.md | 1 |
| docs/source-reports/san-diego/sl-oceanside-backup.md | 1 |
| docs/source-reports/san-diego/sl-oceanside-maintenance.md | 1 |
| docs/source-reports/st-louis/sl-ballwin-locating.md | 1 |
| docs/source-reports/st-louis/sl-chesterfield-backup.md | 1 |
| docs/source-reports/st-louis/sl-chesterfield-locating.md | 1 |
| docs/source-reports/st-louis/sl-chesterfield-maintenance.md | 1 |
| docs/source-reports/st-louis/sl-chesterfield-prepurchase.md | 1 |
| docs/source-reports/st-louis/sl-florissant-camera.md | 1 |
| docs/source-reports/st-louis/sl-florissant-cleaning-camera.md | 1 |
| docs/source-reports/st-louis/sl-florissant-hydro.md | 1 |
| docs/source-reports/st-louis/sl-florissant-locating.md | 1 |
| docs/source-reports/st-louis/sl-st-charles-backup.md | 1 |
| docs/source-reports/st-louis/sl-st-charles-drain.md | 1 |
| docs/source-reports/st-louis/sl-st-charles-maintenance.md | 1 |
| docs/source-reports/st-louis/sl-stl-city-backup.md | 1 |
| docs/source-reports/summerlin/sl-summerlin-locating.md | 1 |
| docs/superpowers/specs/2026-08-23-power-page-templates-design.md | 1 |

## Class D: ambiguous, listed for the owner (not deleted)

Owner correction, Oct 12, 2026: property managers, landlords, investors (residential only) and multifamily STAY. They are protected, not ambiguous; see [property-manager-restore.md](property-manager-restore.md). Commercial wording is removed from their pages only.

1. **`/for/hoa-communities/` page** (`aud-hoa-communities`) and its hub card and image. The correction did not name HOA. It is kept; only commercial wording and the link to the deleted commercial maintenance page change.
2. **Multifamily wording that is mostly about commercial buildings.** The homepage differentiator image `homepage/differentiator/the-sewer-pros-commercial-multifamily-properties.webp` is described as a "mixed-use multifamily building and its parking area". Multifamily stays; the section it served was the commercial hub card and is removed. The file is not renamed or deleted.
3. **Homepage hero backdrop `homepage/hero/the-sewer-pros-commercial-drain-diagnostics-hero.webp`**, described as a "commercial service corridor". It is owner-approved and in use; only its description wording changes. The file is not renamed or deleted.
4. **Mission Valley location page** is framed around the commercial district (hotels, retail, offices). The page stays; the framing is class C. How much district-specific content remains useful for a residential and real-estate service is a copy judgement the owner may want to review.

## Class E: false positives, left alone

- "The business owner" meaning the owner of The Sewer Pros (image provenance strings such as "Supplied by the business owner", the reviews marquee comment, `lib/image-slots.ts`).
- Customer review text in `data/reviews/google-reviews.json` (verbatim quotes).
- "retail" or "apartment" appearing in unrelated words or in non-service context.

