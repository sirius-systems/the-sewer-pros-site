> Historical snapshot, written 2026-10-12. Current baselines: 200 built pages, 197 sitemap URLs, 11 service records, 6,369 service + location matrix rows, 10 audience ids, 579 locations, 0 placeholder boxes, 30 image files (929 boxes on the shot list, all wired). See docs/image-placeholder-inventory.md and the decisions log for the current state.

# Property manager, landlord, investor and multifamily restore list

Owner correction, Oct 12, 2026: property managers and multifamily STAY in the project. Only commercial services, commercial pages and commercial wording are removed.

**Status when written:** the commercial removal had not started (HEAD 9dd016c, no removal commits exist). Nothing related to property managers, landlords, investors or multifamily has been deleted or edited, so there is nothing to restore. Every item below is therefore listed as protected, and no commit removes any of them. The "removed by" column is "none".

| Class | Meaning |
|---|---|
| R | Restore: it was deleted by a removal commit (none exist) |
| E | Edit: commercial wording sits in or next to the item, so the page or block is rechecked and only the commercial wording is removed |
| P | Protected: never touched by the removal |

Items found: **83** line hits (R 0, E 22, P 61).

## Whole pages, routes and registry ids (all kept)

| Item | Where | Class | Removed by |
|---|---|---|---|
| `/for/property-managers/` page (`aud-property-managers`) | content/pages/audiences.tsx, data/pages/approved-pages.ts | E (links to `com-maintenance` and `hub-commercial`, "commercial menu" wording) | none |
| `/for/hoa-communities/` page (`aud-hoa-communities`) | content/pages/audiences.tsx, data/pages/approved-pages.ts | E (links to commercial maintenance page). HOA was not named in the correction; kept, not touched beyond commercial wording | none |
| Audience ids `aud-landlords`, `aud-real-estate-investors` | types/audience.ts, data/pages/cross-registry.ts | P | none |
| Audience hub (`/for/`) property manager and HOA cards, with their images | content/pages/audience-hub.tsx, data/business/audience-hub-images.ts | P | none |
| Header and footer "Property managers" link | data/navigation/navigation.ts | P | none |
| Survey form option "Rental or multifamily" (`rental-multifamily`) | components/sections/SurveyLeadForm.tsx, lib/forms/submit-lead.ts | P | none |
| Contact form "multi-unit property" option | components/sections/ContactForm.tsx | E (option is currently labelled "Commercial or multi-unit property" with value `commercial`; becomes a residential multi-unit option) | none |
| Mission Valley and market copy that names property managers or multifamily | content/pages/san-diego*.tsx, las-vegas*.tsx, st-louis*.tsx | E where the same sentence says commercial, otherwise P | none |
| Real estate pages (buyers, sellers, agents, inspectors) and pre-purchase service | `/for/*`, `/services/pre-purchase-sewer-inspection/` | P (unchanged by this work) | none |

Not in scope of this list and not kept: `aud-facility-managers`, `aud-restaurants`, `aud-commercial-property-owners` and the seven `svc-commercial-*` services, which are the commercial removal.

## Line-level items

| Class | Kind | File:line | Text | Removed by |
|---|---|---|---|---|
| E | component or form option | components/sections/ContactForm.tsx:121 | label: 'Commercial or multi-unit property', | none |
| P | component or form option | components/sections/section-icons.tsx:275 | /** Property managers - a building with windows. */ | none |
| P | component or form option | components/sections/SurveyLeadForm.tsx:19 | *   3. Type of property?    Optional pills (home, rental or multifamily). | none |
| P | component or form option | components/sections/SurveyLeadForm.tsx:59 | { value: 'rental-multifamily', label: 'Rental or multifamily' }, | none |
| P | component or form option | components/templates/AudiencePageTemplate.tsx:64 | * buyers' be replaced with 'property managers' without rewriting most | none |
| P | component or form option | components/templates/AudiencePageTemplate.tsx:240 | records ("Home Buyers", "Property Managers", "HOA Communities"), | none |
| P | component or form option | components/templates/HomePageTemplate.tsx:408 | property owners, homebuyers, and property managers can | none |
| P | page or copy | content/pages/about.tsx:40 | professionals, and property managers understand sewer-line | none |
| P | page or copy | content/pages/about.tsx:70 | property managers understand sewer-line conditions through camera | none |
| P | page or copy | content/pages/about.tsx:243 | property managers can contact The Sewer Pros about sewer | none |
| P | page or copy | content/pages/audience-hub.tsx:42 | 'The Sewer Pros helps home buyers, sellers, real estate agents, home inspectors, property managers, and HOA communities with sewer | none |
| E | page or copy | content/pages/audiences.tsx:13 | * "property managers" without rewriting most of the page? | none |
| E | page or copy | content/pages/audiences.tsx:24 | *   Property manager- recurring operational cost across a portfolio | none |
| E | page or copy | content/pages/audiences.tsx:28 | * inspection, property managers get the commercial menu and recurring | none |
| E | page or copy | content/pages/audiences.tsx:447 | /* =============================================== property managers -- */ | none |
| E | page or copy | content/pages/audiences.tsx:450 | 'Explore sewer inspection, cleaning, diagnostics, and documentation services for property managers handling recurring sewer and dr | none |
| E | page or copy | content/pages/audiences.tsx:452 | eyebrow: 'For property managers', | none |
| P | page or copy | content/pages/contact.tsx:443 | Homeowners, buyers, and property managers usually start with the same question: | none |
| P | page or copy | content/pages/contact.tsx:501 | question: 'How do I book a sewer inspection as a Las Vegas property manager?', | none |
| E | page or copy | content/pages/contact.tsx:504 | Choose the commercial or multi-unit option on the form and give the number of | none |
| P | page or copy | content/pages/contact.tsx:507 | sewer services for property managers | none |
| E | page or copy | content/pages/core.tsx:165 | 'Sewer inspection, cleaning, and hydro jetting for commercial properties, multi-family buildings, and property managers. Recurring | none |
| E | page or copy | content/pages/core.tsx:203 | src: '/images/homepage/differentiator/the-sewer-pros-commercial-multifamily-properties.webp', | none |
| P | page or copy | content/pages/core.tsx:204 | alt: 'Exterior of a mixed-use multifamily building and its parking area', | none |
| P | page or copy | content/pages/core.tsx:363 | and hydro jetting for property managers, multi-family properties, and | none |
| P | page or copy | content/pages/core.tsx:1832 | 'Sewer inspection, diagnostics, and cleaning for home buyers, sellers, real estate agents, home inspectors, property managers, and | none |
| P | page or copy | content/pages/core.tsx:1840 | client without it becoming a sales process. A property manager wants | none |
| P | page or copy | content/pages/home-service-cards.ts:54 | 'The Sewer Pros provides sewer camera inspections, sewer diagnostics, sewer cleaning, hydro jetting, sewer line locating, and drai | none |
| P | page or copy | content/pages/las-vegas-henderson.tsx:786 | body: 'We did not find a rule on the City of Henderson pages we reviewed that requires a sewer lateral inspection, certification o | none |
| P | page or copy | content/pages/las-vegas-henderson.tsx:932 | City’s number). It says property managers and real estate agents should use the Property | none |
| E | page or copy | content/pages/las-vegas.tsx:440 | 'Create a clearer record of visible sewer conditions when managing multifamily, rental, or commercial properties.', | none |
| P | page or copy | content/pages/las-vegas.tsx:525 | 'The Sewer Pros provides sewer camera inspection, sewer cleaning, hydro jetting, sewer line locating, drain cleaning, and diagnost | none |
| P | page or copy | content/pages/las-vegas.tsx:885 | 'Explore evidence-first sewer inspection and cleaning services for homes, buyers, property managers, and businesses in Henderson.' | none |
| P | page or copy | content/pages/las-vegas.tsx:1015 | label: 'Property Managers', | none |
| E | page or copy | content/pages/las-vegas.tsx:1033 | 'Sewer inspection, cleaning, and hydro jetting for commercial properties, multifamily buildings, and the people who manage them.', | none |
| P | page or copy | content/pages/san-diego-mission-valley.tsx:516 | between landlord and tenant is a matter for the lease, and this page does not give | none |
| P | page or copy | content/pages/san-diego-mission-valley.tsx:667 | page. For businesses and property managers:{' '} | none |
| P | page or copy | content/pages/san-diego-mission-valley.tsx:714 | lede: 'A sewer camera inspection shows the visible condition of the lateral before you close. Ask your home inspector what their i | none |
| P | page or copy | content/pages/san-diego-mission-valley.tsx:717 | body: 'We did not find a City of San Diego rule that requires a sewer lateral inspection when a property is sold, and we did not f | none |
| P | page or copy | content/pages/san-diego-mission-valley.tsx:783 | how the duty is divided between landlord and tenant is a matter for the lease, and this | none |
| P | page or copy | content/pages/san-diego-service-location.tsx:533 | retail, and multifamily lines, where accumulation is a scheduling | none |
| P | page or copy | content/pages/san-diego.tsx:656 | 'Recorded findings can help property managers document recurring drainage concerns and communicate more clearly with owners or ven | none |
| P | page or copy | content/pages/san-diego.tsx:820 | 'The Sewer Pros serves homeowners, home buyers, real estate professionals, property managers, multifamily buildings, and commercia | none |
| E | page or copy | content/pages/san-diego.tsx:961 | 'Explore sewer inspection and cleaning services for homes, buyers, property managers, and commercial properties in San Marcos.', | none |
| E | page or copy | content/pages/san-diego.tsx:1027 | 'Explore sewer inspection and cleaning services for homes, multifamily buildings, and commercial properties in Mission Valley.', | none |
| E | page or copy | content/pages/san-diego.tsx:1141 | 'Sewer inspection, cleaning, and hydro jetting for commercial properties, multifamily buildings, and the people who manage them.', | none |
| E | page or copy | content/pages/san-diego.tsx:1323 | for property managers, facility operators, and commercial property | none |
| P | page or copy | content/pages/services.tsx:1526 | audience: 'Landlords and small property owners', | none |
| P | page or copy | content/pages/services.tsx:2695 | audience: 'Property managers', | none |
| P | page or copy | content/pages/services.tsx:2698 | actionLabel: 'Property manager support', | none |
| P | page or copy | content/pages/services.tsx:4695 | title: 'Landlords and small property owners', | none |
| P | page or copy | content/pages/services.tsx:5263 | audience: 'Small residential landlords', | none |
| P | page or copy | content/pages/sl-rebuild/sl-st-charles-prepurchase.tsx:73 | it as a sewer inspection, so an investor should not read it as one. | none |
| P | page or copy | content/pages/sl-sd-mission-valley-backup.tsx:168 | 'A multi-tenant building feeds many fixtures into one lateral, so one failure can reach every tenant at once. A diagnosis records  | none |
| P | page or copy | content/pages/sl-sd-mission-valley-prepurchase.tsx:127 | is you, and how a lease divides the duty between landlord and tenant is a matter for the | none |
| E | page or copy | content/pages/sl-sd-mission-valley-prepurchase.tsx:168 | If the space is a restaurant, ask the seller or landlord for the facility&rsquo;s FEWD | none |
| P | page or copy | content/pages/st-louis-chesterfield.tsx:651 | 'Eligible properties are owner-owned single-family homes, duplexes, condominium buildings and multifamily buildings with no more t | none |
| E | page or copy | content/pages/st-louis-chesterfield.tsx:834 | buildings and multifamily buildings with up to six dwelling units. Commercial and | none |
| E | page or copy | content/pages/st-louis-florissant.tsx:676 | 'Commercial, industrial and larger multi-family properties. The City’s page says the program does not apply to multi-family proper | none |
| P | page or copy | content/pages/st-louis-florissant.tsx:877 | question: 'Does the program cover septic systems, condominiums or multi-family buildings?', | none |
| P | page or copy | content/pages/st-louis-florissant.tsx:884 | to multi-family properties with more than six dwelling units and, separately, to | none |
| E | page or copy | content/pages/st-louis.tsx:217 | 'Sewer inspection, cleaning, and hydro jetting for commercial properties, multi-family buildings, and property managers.', | none |
| P | data | data/business/audience-hub-images.ts:100 | subject: 'Diagnosis at a multi-unit or managed property', | none |
| P | data | data/business/process.tsx:112 | , or a property manager scheduling{' '} | none |
| P | registry or nav | data/navigation/navigation.ts:135 | { pageId: id('aud-property-managers'), label: 'Property managers' }, | none |
| P | registry or nav | data/pages/approved-pages.ts:733 | name: 'Property Managers', | none |
| P | registry or nav | data/pages/cross-registry.ts:43 | 'aud-real-estate-investors', | none |
| P | registry or nav | data/pages/cross-registry.ts:44 | 'aud-landlords', | none |
| P | registry | data/services/master-service-registry.json:79 | "landlords", | none |
| P | registry | data/services/master-service-registry.json:224 | "landlords", | none |
| P | registry | data/services/master-service-registry.json:262 | "real-estate-investors" | none |
| P | registry | data/services/master-service-registry.json:295 | "landlords", | none |
| P | registry | data/services/master-service-registry.json:330 | "landlords", | none |
| P | registry | data/services/master-service-registry.json:441 | "multifamily-properties", | none |
| P | registry | data/services/master-service-registry.json:476 | "multifamily-properties", | none |
| P | registry | data/services/master-service-registry.json:512 | "multifamily-properties" | none |
| P | registry | data/services/master-service-registry.json:548 | "multifamily-properties" | none |
| P | registry | data/services/master-service-registry.json:616 | "multifamily-properties", | none |
| E | form or analytics | lib/forms/submit-lead.ts:39 | /** Survey form only: `home`, `rental-multifamily` or `commercial`. */ | none |
| P | type or registry id | types/audience.ts:10 | * served (09 §4, §94). Keep them distinct: "property managers" is an | none |
| E | type or registry id | types/audience.ts:11 | * audience, "property management" is a commercial segment. | none |
| P | type or registry id | types/audience.ts:32 | / 'aud-real-estate-investors' | none |
| P | type or registry id | types/audience.ts:33 | / 'aud-landlords' | none |

