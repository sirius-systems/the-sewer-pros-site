# Source report: sl-mission-valley-prepurchase

Page: Pre-Purchase Sewer Inspection in Mission Valley, San Diego, CA (`missionValleyPrePurchaseContent`, `content/pages/sl-sd-mission-valley-prepurchase.tsx`).

Sources:
- LOCATION: `sanDiegoMissionValleyContent` in `content/pages/san-diego-mission-valley.tsx` (City of San Diego sources read 2026-10-04; most City pages are undated, so the page says "confirm with the agency" and states no dates). Mission Valley is a neighborhood (a City planning area): only facts this page itself states are used, so no City of San Diego page facts (Council Policy 400-10, the yearly cleanout flush, the EMRA list, 619-515-3500) appear.
- SERVICE: `svc-pre-purchase-sewer-inspection` `v2` in `content/pages/services.tsx`, plus `SERVICE_PROBLEMS`, `SERVICE_INCLUSIONS`, `SERVICE_PROBLEM_SHOTS` in `content/pages/service-location-shared.ts`.

Status key: USED = text taken as published; ADAPTED = fact kept, wording changed to tie it to this service; LEFT OUT = not on this page (reason given).

## The four body sections and their sources

| # | h2 on the page | Mission Valley source | Service source |
|---|---|---|---|
| 1 | What you take on when a Mission Valley sale closes | `responsibility` (answer p1-p2, table rows 1-2), `buyingGuide.lede` (a scope is separate and focused; mixed-use and commercial spaces) | `definition.supporting` 1-2 |
| 2 | The City's advice to buyers is written for homes, and no sale-time rule found | `buyingGuide.lede` and `body` (City advice; none found; not lenders, leases, redevelopment permits, state rules), `municipalProgram.callout` p1 and p4 | `definition.supporting` 1 (does not repair), `independent` |
| 3 | Where the lateral connects is a City records question | `buyingGuide.body` (Development Services 619-446-5300; no diagrams of private lines), `responsibility.answer` p3 and `note` (Plumber's Report, 619-515-3525, who pays), `systemExplainer.card.closing` (distance, not a property line) | `ask` items (access point and location along the line), line locating as a separate service |
| 4 | A restaurant space: the grease paperwork starts with the City | `buyingGuide.body` (ask for FEWD records), `municipalProgram.covers` 1-2 (permit; plan review), `doesNotCover` 4 (619-446-5242) | `definition.supporting` 1 (documents visible conditions; not equipment) |

## Mission Valley location page

| Section / card / fact | Status | Where / reason |
|---|---|---|
| seoTitle | ADAPTED | Service name swapped in; location written "Mission Valley, San Diego, CA" because "Mission Valley, CA" is not a place name |
| metaDescription | LEFT OUT | Replaced by a page-specific description |
| hero.title (Sewer and Drain Service in Mission Valley, San Diego) | ADAPTED | H1 names this service |
| hero.intro (independent camera inspection and cleaning; City planning area; owner maintains the lateral; food service grease permits) | ADAPTED | Hero intro: owner-to-the-main fact tied to a purchase; no sale-time rule found |
| heroForm bullets (incl. "Serving San Diego since" year), request card, nextSteps, form | LEFT OUT | Template supplies its own form. The founding-year line is not carried onto service pages |
| heroForm.card.note (619-515-3525 for a sewer spill or odor) | ADAPTED | Section 3 (Plumber's Report), marked as the City's number |
| faqHeading, faqSchemaApproved, keyTakeaways.jumpNav | LEFT OUT | Template-level; no on-page anchors in this template |
| keyTakeaways 1 (planning area of about 2,418 net acres; not a separate city or sewer district; City rules apply) | ADAPTED | Planning-area facts in the hero and problem card 4; acreage LEFT OUT |
| keyTakeaways 2 (City's description of the valley; every food service establishment needs a City grease permit; grease review before construction) | ADAPTED | Section 4 (restaurant space); the "regional center" sentence LEFT OUT |
| keyTakeaways 3 (owner maintains the lateral to the City main; no City program found; camera gives evidence before spending) | ADAPTED | Hero and the "none found" / owner-maintains sections |
| serviceCards (9) and helpBar | LEFT OUT | Hub grid; related links cover siblings |
| responsibility.answer p1 (City runs the public sewer; owner maintains the lateral to the City main; street, property line, easement, canyon) | ADAPTED | Section 1 |
| responsibility.answer p2 (planning area, no separate Mission Valley sewer utility, parcel can be an exception; lease divides the duty, not legal advice) | ADAPTED | Section 1 (lease, not legal advice) and problem card 4 (planning area, parcel exception, confirm with Public Utilities) |
| responsibility.answer p3 (plumber who finds a break or collapse beyond the property line calls 619-515-3525 and files a Plumber's Report; City investigates within 24 hours) | ADAPTED | Section 3; the 24-hour sentence LEFT OUT (cut for length; FAQ carries it) |
| responsibility card: the public sewer (City Public Utilities operates the collection system; address-specific) | LEFT OUT | System description; the City-records point is built from buyingGuide.body instead |
| responsibility card: the lateral line (restaurant, hotel kitchen or multi-tenant building; owner maintains it up to the main) | LEFT OUT | Not a purchase fact |
| responsibility table rows 1-2 (who runs it; where the line ends) | ADAPTED | Section 1 |
| responsibility table row 3 (first contact: 619-515-3525; Plumber's Report) | ADAPTED | Section 3 |
| responsibility table row 4 (food service grease: FEWD permits and monitors) | ADAPTED | Section 4 |
| responsibility table row 5 (where an inspection helps) | ADAPTED | Section 3 (distance along the line) |
| responsibility.note (not legal advice; no current City statement of who pays beyond the property line) | ADAPTED | Section 3 (no statement of who pays) |
| systemExplainer p1 (San Diego River floodplain; City's "regional center"; 1958 development; Interstate 8) | LEFT OUT | Development history; no tie to this service |
| systemExplainer p2 (kitchens send grease daily; multi-tenant building feeds many fixtures into one lateral; City runs a grease permit program) | LEFT OUT | Not a purchase fact (section 4 uses the FEWD paperwork instead) |
| systemExplainer p3 (City pages do not say combined or separate; no pipe age; development date does not tell a lateral's age) | LEFT OUT | Not tied to this service; no age or system-type claim is made |
| systemExplainer p4 (floodplain; no City statement linking it to sewer conditions) | LEFT OUT | Not tied to this service; no groundwater or flooding claim is made |
| systemExplainer p5 (East and West Mission Valley; 1985 plan; no City east/west sewer rules) | LEFT OUT | Planning history; no tie to this service |
| systemExplainer.card bullets (what a camera can show on a commercial lateral) | LEFT OUT | Camera is a separate service; the service page and its FAQ carry the can and cannot lists |
| systemExplainer.card.closing (distance count; does not establish a property line) | ADAPTED | Section 3 |
| whoToCall.paragraphs (City for a spill or odor; FEWD for grease permits; camera shows the lateral) | ADAPTED | Sections 3 and 4 |
| whoToCall.agency (619-515-3525; not labelled a 24-hour line) | ADAPTED | Section 3, the City's number |
| whoToCall.secondaryAgency (FEWD 858-654-4188) | LEFT OUT | Cut for length; the FAQ carries it |
| whoToCall.company (phone, hours) | LEFT OUT | No company phone on this page, as in the City of San Diego model |
| municipalProgram.lede (none found; which City pages were checked; FEWD is the program that matters here) | LEFT OUT | Not about a purchase; the FAQ carries it |
| municipalProgram.covers 1 (every food service establishment needs a FEWD permit; equipment traps fat, oil and grease) | ADAPTED | Section 4 (ask the seller or landlord for the permit and equipment records) |
| municipalProgram.covers 2 (FEWD plan review for new construction, remodels and retrofits) | ADAPTED | Section 4 |
| municipalProgram.covers 3 (after a grease-related spill, FEWD inspectors look at facilities in the immediate area) | LEFT OUT | Not a purchase fact |
| municipalProgram.covers 4 (hydromechanical grease interceptor vs. gravity grease interceptor) | LEFT OUT | Equipment detail; the FAQ carries it |
| municipalProgram.covers 5 (FEWD is a permit program, not financial help; does not review a lateral) | LEFT OUT | Cut for length |
| municipalProgram.doesNotCover 1 (crew lateral-installation program suspended; public-improvement permit; Class A contractor) | LEFT OUT | Not about a purchase |
| municipalProgram.doesNotCover 2-3 (Right-of-Way Permit; licensed contractor can make lateral connections) | LEFT OUT | Construction and permit detail for repair work; the FAQ carries it |
| municipalProgram.doesNotCover 4 (no City page on whether private-property-only work needs a permit; 619-446-5242; 619-446-5300) | ADAPTED | Section 4 (5242) and section 3 (5300), the City's numbers |
| municipalProgram.callout p1 (plan on arranging inspection, cleaning and repair yourself; no claim the City accepts an outside report or that our work satisfies FEWD) | ADAPTED | Section 2 (no claim the City accepts an outside report) |
| municipalProgram.callout p2 (establish condition, clean on an interval the evidence supports, re-inspect; not every line needs it) | LEFT OUT | Not about a purchase |
| municipalProgram.callout p3 (occupied commercial site: trading hours, tenants, service corridors, contractors; cost of a failure) | LEFT OUT | Not a purchase fact |
| municipalProgram.callout p4 (contractors perform approved repairs; The Sewer Pros does not) | ADAPTED | Section 2 |
| municipalProgram.closing (links to hydro jetting in Mission Valley and the commercial pages) | LEFT OUT | Related links cover siblings |
| secondOpinion (ledes, steps, callout, CTA) | LEFT OUT | Not applicable to a purchase page |
| buyingGuide.lede (City advice to buyers is for homes: a licensed-plumber report on the lateral connection; guidance, not a requirement; a sewer scope is a separate, focused inspection) | ADAPTED | Sections 1 and 2 |
| buyingGuide.body (no City sale-time rule or disclosure rule found; not lenders, leases, redevelopment permits, state rules; Development Services shows the connection but has no private-line diagrams; ask for the FEWD records) | ADAPTED | Sections 2, 3 and 4 |
| buyingGuide links, CTA, agents block | LEFT OUT | Hub elements |
| nearbyAreas (six other San Diego-area locations; market hub link) | ADAPTED | coverage: the six other San Diego locations (the City of San Diego page and five others); the "All San Diego service areas" market link LEFT OUT |
| finalCta (title, paragraphs, bullets) | ADAPTED | Title becomes cta.title; paragraphs and bullets LEFT OUT, replaced by cta.body |
| sources (8 City links, lastReviewed, closingNote) | USED | `sources: sanDiegoMissionValleyContent.sources` |
| (no housingAge and no reviewBand on the Mission Valley location page) | n/a | No Census figure is stated on this page |

### Mission Valley FAQ (10)

| Question | Status | Reason |
|---|---|---|
| Is Mission Valley a separate city? | USED | Verbatim |
| Who maintains the sewer lateral at a Mission Valley business? | USED | Verbatim |
| Does a Mission Valley restaurant need a City grease permit? | USED | Verbatim |
| Do a new restaurant, a remodel or a retrofit in Mission Valley need a grease review? | USED | Verbatim |
| What is the difference between a grease trap and a gravity grease interceptor? | USED | Verbatim |
| Who do I call about a sewer spill or sewer odor in Mission Valley? | USED | Verbatim |
| What happens if a plumber finds a break or collapse beyond the property line? | USED | Verbatim |
| Does the City help pay for lateral work, and who may do the work? | USED | Verbatim |
| How often should a restaurant line be cleaned? | LEFT OUT | About a cleaning schedule, not a purchase |
| Do you repair or replace sewer lines? | USED | Verbatim |

## Service page (`svc-pre-purchase-sewer-inspection`)

| Section / card / fact | Status | Where / reason |
|---|---|---|
| seoTitle | ADAPTED | "Pre-Purchase Sewer Inspection in Mission Valley, San Diego, CA" |
| metaDescription | LEFT OUT | Market-neutral; replaced |
| serviceDescription | ADAPTED | Same definition, Mission Valley added; "property" replaces "home" because the Mission Valley page applies a scope to mixed-use and commercial purchases |
| hero.title, hero.intro, hero.scope | ADAPTED / LEFT OUT | Intro rewritten; scope bullets are a template element |
| definition.answer | ADAPTED | `serviceDescription` and hero |
| definition.supporting 1 (private lateral; visible conditions on the day; does not repair) | ADAPTED | Sections 1, 2 and 4 |
| definition.supporting 2 (a scope is a focused inspection; ask your home inspector) | ADAPTED | Section 1 |
| signals 1 An older home, 2 No record of the line's condition, 5 A short inspection period | USED | Problem cards (`SERVICE_PROBLEMS`) |
| signals 3, 4, 6 | LEFT OUT | Slot-limited; the FAQ and the locating mention in section 3 cover them |
| limits.can (8 items) | LEFT OUT | FAQ "What does a sewer scope look for?" |
| limits.cannot (waterline, unreached sections, soil, wall thickness, slope or depth, leaks, future performance, whether a repair is needed) | LEFT OUT | FAQ "What does a sewer inspection not show?". Section 4 states only that a scope does not show equipment compliance |
| limits.callout | LEFT OUT | FAQ "What does a clear sewer scope mean?" |
| process steps 1 to 5 | USED | `process`, verbatim; equipment names only as confirmed (step 3) |
| process.prep, decision, comparison table, evidence examples, audiences, situations, request.* | LEFT OUT | No slot or template element; FAQ answers carry them |
| independent band | ADAPTED | Section 2 last sentence |
| ask items: video, written findings | USED | Inclusions 1-2 |
| ask items: access point and location | ADAPTED | Section 3 (location along the line) |
| ask items: line locating | ADAPTED | Section 3 |
| ask items: what to share with your agent | USED | Inclusion 6 |
| ask.keep | LEFT OUT | FAQ "What should I ask before approving major sewer work?" |
| relatedPageIds | ADAPTED | Mission Valley page, this service, camera inspection, line locating |
| cta | ADAPTED | Rewritten for Mission Valley; keeps the "note your inspection deadline" request |
| inclusions (6 cards) | USED | `SERVICE_INCLUSIONS` |

### Fourth problem card (location-driven)

"A planning area, not a separate sewer utility" (location: City planning area; no separate Mission Valley sewer utility found; a parcel can be an exception; confirm with Public Utilities; service: a scope does not establish which agency serves a parcel). Photo slot: commercial-street brief, neutral alt text.

### Service FAQ

29 service questions (per the service page): all 29 USED verbatim, none left out. "Is a sewer scope required when buying or selling a house?" is kept because the Mission Valley FAQ has no purchase question. Cost, time and deadline answers are carried as the service page has them.

Total FAQ on the page: 38 (9 Mission Valley + 29 service).

## Facts worth a second look

- Mission Valley's own page says it found no separate Mission Valley sewer utility and that a parcel can still be an exception; the page repeats that wording and never says which agency serves an address.
- City phone numbers used (619-515-3525, 619-446-5242, 619-446-5300, 858-654-4188) are each labelled the City's, not ours, and appear only as the Mission Valley page states them. No dates are stated.
- The service pages say "residential"; the Mission Valley page serves hotels, restaurants, retail, offices and mixed-use buildings. This page does not claim commercial capability beyond what the Mission Valley location page states.
