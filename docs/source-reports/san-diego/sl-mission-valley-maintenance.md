# Source report: sl-mission-valley-maintenance

Page: Preventative Sewer Maintenance in Mission Valley, San Diego, CA (`missionValleyMaintenanceContent`, `content/pages/sl-sd-mission-valley-maintenance.tsx`).

Sources:
- LOCATION: `sanDiegoMissionValleyContent` in `content/pages/san-diego-mission-valley.tsx` (City of San Diego sources read 2026-10-04; most City pages are undated, so the page says "confirm with the agency" and states no dates). Mission Valley is a neighborhood (a City planning area): only facts this page itself states are used, so no City of San Diego page facts (Council Policy 400-10, the yearly cleanout flush, the EMRA list, 619-515-3500) appear.
- SERVICE: `svc-preventative-sewer-maintenance` `v2` in `content/pages/services.tsx`, plus `content/pages/sl-blocks/preventative-sewer-maintenance.ts`.

Status key: USED = text taken as published; ADAPTED = fact kept, wording changed to tie it to this service; LEFT OUT = not on this page (reason given).

## The four body sections and their sources

| # | h2 on the page | Mission Valley source | Service source |
|---|---|---|---|
| 1 | The City says the owner maintains the lateral to the City main | `responsibility` (answer p1-p2, table rows 1-2), `systemExplainer` p2 (multi-tenant lateral), FAQ "How often should a restaurant line be cleaned?" | `definition.supporting` 3 (a line with no history needs no default schedule); service page states no interval |
| 2 | Establish the condition, clean on what the evidence supports | `municipalProgram.callout` p2 (condition, interval the evidence supports, re-inspect), `systemExplainer.card.closing` (distance, not a connection), callout p4 | `process` (history, camera pass, cleaning, second look, findings), `limits.callout` (cleaning does not repair) |
| 3 | Kitchen grease: what the City permits and what a visit does not | `systemExplainer` p2, `municipalProgram.covers` 1, 4, 5 and `callout` p1 (no claim re FEWD) | `definition.scope` (diagnostic and cleaning work, not repair) |
| 4 | On an occupied site, access is part of the plan | `municipalProgram.callout` p3 (access, cost of a failure), `lede`, `doesNotCover` 1 and 4, `whoToCall.agency` (619-515-3525) | `definition.scope` (not repair), the service page's "ask what is included" note |

## Mission Valley location page

| Section / card / fact | Status | Where / reason |
|---|---|---|
| seoTitle | ADAPTED | Service name swapped in; location written "Mission Valley, San Diego, CA" because "Mission Valley, CA" is not a place name |
| metaDescription | LEFT OUT | Replaced by a page-specific description |
| hero.title (Sewer and Drain Service in Mission Valley, San Diego) | ADAPTED | H1 names this service |
| hero.intro (independent camera inspection and cleaning; City planning area; owner maintains the lateral; food service grease permits) | ADAPTED | Hero intro: owner-to-the-main fact and the FEWD grease permit program tied to planned maintenance |
| heroForm bullets (incl. "Serving San Diego since" year), request card, nextSteps, form | LEFT OUT | Template supplies its own form. The founding-year line is not carried onto service pages |
| heroForm.card.note (619-515-3525 for a sewer spill or odor) | ADAPTED | Section 4, marked as the City's number |
| faqHeading, faqSchemaApproved, keyTakeaways.jumpNav | LEFT OUT | Template-level; no on-page anchors in this template |
| keyTakeaways 1 (planning area of about 2,418 net acres; not a separate city or sewer district; City rules apply) | ADAPTED | Planning-area fact in the hero; acreage LEFT OUT |
| keyTakeaways 2 (City's description of the valley; every food service establishment needs a City grease permit; grease review before construction) | ADAPTED | Hero and sections 3 and problem card 4; the "regional center" sentence LEFT OUT |
| keyTakeaways 3 (owner maintains the lateral to the City main; no City program found; camera gives evidence before spending) | ADAPTED | Hero and the "none found" / owner-maintains sections |
| serviceCards (9) and helpBar | LEFT OUT | Hub grid; related links cover siblings |
| responsibility.answer p1 (City runs the public sewer; owner maintains the lateral to the City main; street, property line, easement, canyon) | ADAPTED | Section 1 |
| responsibility.answer p2 (planning area, no separate Mission Valley sewer utility, parcel can be an exception; lease divides the duty, not legal advice) | ADAPTED | Section 1 (multi-tenant lateral, lease, not legal advice); the planning-area sentence is in the hero |
| responsibility.answer p3 (plumber who finds a break or collapse beyond the property line calls 619-515-3525 and files a Plumber's Report; City investigates within 24 hours) | LEFT OUT | Not about maintenance; the FAQ carries it |
| responsibility card: the public sewer (City Public Utilities operates the collection system; address-specific) | LEFT OUT | System description; no tie to this service |
| responsibility card: the lateral line (restaurant, hotel kitchen or multi-tenant building; owner maintains it up to the main) | ADAPTED | Section 1 (multi-tenant lateral) |
| responsibility table rows 1-2 (who runs it; where the line ends) | ADAPTED | Section 1 |
| responsibility table row 3 (first contact: 619-515-3525; Plumber's Report) | ADAPTED | Section 4 (spill and odor line only) |
| responsibility table row 4 (food service grease: FEWD permits and monitors) | ADAPTED | Section 3 |
| responsibility table row 5 (where an inspection helps) | ADAPTED | Section 2 |
| responsibility.note (not legal advice; no current City statement of who pays beyond the property line) | LEFT OUT | Not about maintenance (the lease "not legal advice" line is in section 1) |
| systemExplainer p1 (San Diego River floodplain; City's "regional center"; 1958 development; Interstate 8) | LEFT OUT | Development history; no tie to this service |
| systemExplainer p2 (kitchens send grease daily; multi-tenant building feeds many fixtures into one lateral; City runs a grease permit program) | ADAPTED | Sections 1 and 3 |
| systemExplainer p3 (City pages do not say combined or separate; no pipe age; development date does not tell a lateral's age) | LEFT OUT | Not tied to this service; no age or system-type claim is made |
| systemExplainer p4 (floodplain; no City statement linking it to sewer conditions) | LEFT OUT | Not tied to this service; no groundwater or flooding claim is made |
| systemExplainer p5 (East and West Mission Valley; 1985 plan; no City east/west sewer rules) | LEFT OUT | Planning history; no tie to this service |
| systemExplainer.card bullets (what a camera can show on a commercial lateral) | LEFT OUT | Camera is a separate service; the service page and its FAQ carry the can and cannot lists |
| systemExplainer.card.closing (distance count; does not establish a property line) | ADAPTED | Section 2 (bullet) |
| whoToCall.paragraphs (City for a spill or odor; FEWD for grease permits; camera shows the lateral) | ADAPTED | Sections 3 and 4 |
| whoToCall.agency (619-515-3525; not labelled a 24-hour line) | ADAPTED | Section 4, the City's number |
| whoToCall.secondaryAgency (FEWD 858-654-4188) | ADAPTED | Section 3, the City's number |
| whoToCall.company (phone, hours) | LEFT OUT | No company phone on this page, as in the City of San Diego model |
| municipalProgram.lede (none found; which City pages were checked; FEWD is the program that matters here) | ADAPTED | Section 4 |
| municipalProgram.covers 1 (every food service establishment needs a FEWD permit; equipment traps fat, oil and grease) | ADAPTED | Section 3 |
| municipalProgram.covers 2 (FEWD plan review for new construction, remodels and retrofits) | ADAPTED | Problem card 4 |
| municipalProgram.covers 3 (after a grease-related spill, FEWD inspectors look at facilities in the immediate area) | LEFT OUT | Cut for length |
| municipalProgram.covers 4 (hydromechanical grease interceptor vs. gravity grease interceptor) | ADAPTED | Section 3 (the two kinds described without the acronyms) |
| municipalProgram.covers 5 (FEWD is a permit program, not financial help; does not review a lateral) | ADAPTED | Section 3 (equipment questions go to the City) |
| municipalProgram.doesNotCover 1 (crew lateral-installation program suspended; public-improvement permit; Class A contractor) | ADAPTED | Section 4 (suspended only) |
| municipalProgram.doesNotCover 2-3 (Right-of-Way Permit; licensed contractor can make lateral connections) | LEFT OUT | Construction and permit detail for repair work; the FAQ carries it |
| municipalProgram.doesNotCover 4 (no City page on whether private-property-only work needs a permit; 619-446-5242; 619-446-5300) | ADAPTED | Section 4 (5242, the City's number) |
| municipalProgram.callout p1 (plan on arranging inspection, cleaning and repair yourself; no claim the City accepts an outside report or that our work satisfies FEWD) | ADAPTED | Section 3 (no claim re FEWD or permit) |
| municipalProgram.callout p2 (establish condition, clean on an interval the evidence supports, re-inspect; not every line needs it) | ADAPTED | Section 2; the sentence on not putting a line on an unjustified schedule LEFT OUT (cut for length) |
| municipalProgram.callout p3 (occupied commercial site: trading hours, tenants, service corridors, contractors; cost of a failure) | ADAPTED | Section 4 (both sentences) |
| municipalProgram.callout p4 (contractors perform approved repairs; The Sewer Pros does not) | ADAPTED | Section 2 (bullet) |
| municipalProgram.closing (links to hydro jetting in Mission Valley and the commercial pages) | LEFT OUT | Related links cover siblings |
| secondOpinion (ledes, steps, callout, CTA) | LEFT OUT | Not applicable |
| buyingGuide.lede (City advice to buyers is for homes: a licensed-plumber report on the lateral connection; guidance, not a requirement; a sewer scope is a separate, focused inspection) | LEFT OUT | Not about maintenance |
| buyingGuide.body (no City sale-time rule or disclosure rule found; not lenders, leases, redevelopment permits, state rules; Development Services shows the connection but has no private-line diagrams; ask for the FEWD records) | LEFT OUT | Not about maintenance |
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
| How often should a restaurant line be cleaned? | USED | Verbatim; the kitchen-line version of the service page's "How often should I schedule it?" |
| Do you repair or replace sewer lines? | LEFT OUT | The service page's "Do you offer sewer repair or replacement?" answers it in full |

## Service page (`svc-preventative-sewer-maintenance`)

| Section / card / fact | Status | Where / reason |
|---|---|---|
| seoTitle | ADAPTED | "Preventative Sewer Maintenance in Mission Valley, San Diego, CA" |
| metaDescription | LEFT OUT | Market-neutral; replaced |
| serviceDescription | ADAPTED | Same definition, Mission Valley added; "property's drain and sewer line" replaces "home's" |
| hero.title, hero.intro | ADAPTED | Rewritten for Mission Valley |
| hero.scope, hero.cardIntro | LEFT OUT | Template elements |
| definition.answer | ADAPTED | `serviceDescription` and hero |
| definition.supporting 1 ("preventive maintenance" is public-utility wording) | LEFT OUT | FAQ "What is preventative sewer maintenance?" |
| definition.supporting 2 (not one fixed task) | LEFT OUT | FAQ |
| definition.supporting 3 (a line with no history of problems does not need a default schedule) | ADAPTED | Section 1 ("we state no interval") |
| definition.scope | ADAPTED | Section 4 (not an emergency response; not repair); the "residential" wording is not carried |
| signals 2 A backup that has already happened, gurgling or recurring clogs, Known risk factors | USED | Problem cards (`sl-blocks`) |
| signals 1, 3, 5 | LEFT OUT | Slot-limited; FAQ "Why are all my drains slow or gurgling?" |
| limits.can (7 items) | LEFT OUT | FAQ "What does a sewer camera inspection find?" |
| limits.cannot | LEFT OUT | FAQ "What can a sewer camera not see?" |
| limits.callout (cleaning does not repair; further evaluation outside our scope) | ADAPTED | Section 2 bullet |
| process steps 1 to 6 | USED | `process`, verbatim; section 2 also paraphrases the camera pass and cleaning |
| process.prep, decision, comparison table, audiences, request.* | LEFT OUT | No slot or template element; FAQ "Should a camera inspection come before cleaning?" carries the decision. Inclusions 3 and 6 carry cleaning and locating |
| ask items: video, written findings | USED | Inclusion 5 |
| ask.keep | LEFT OUT | Not carried; FAQ "Do I get the video and written findings?" |
| relatedPageIds | ADAPTED | Mission Valley page, this service, camera inspection, sewer cleaning |
| cta | ADAPTED | Rewritten for Mission Valley; no interval, plan or contract claimed |
| inclusions (6 cards) | USED | `sl-blocks/preventative-sewer-maintenance.ts` |

### Fourth problem card (location-driven)

"A remodel or restaurant retrofit" (location: FEWD plan review for new construction, remodels and retrofits; service: a camera pass records the accessible line, a baseline, and does not review plans or satisfy a permit). Photo slot: commercial-street brief, neutral alt text.

### Service FAQ

16 service questions (per the service page): all 16 USED verbatim. "How often should I schedule it?" and "How much does it cost?" are carried as the service page has them (no interval, no price).

Total FAQ on the page: 25 (9 Mission Valley + 16 service).

## Facts worth a second look

- Mission Valley's own page says it found no separate Mission Valley sewer utility and that a parcel can still be an exception; the page repeats that wording and never says which agency serves an address.
- City phone numbers used (619-515-3525, 619-446-5242, 619-446-5300, 858-654-4188) are each labelled the City's, not ours, and appear only as the Mission Valley page states them. No dates are stated.
- The service pages say "residential"; the Mission Valley page serves hotels, restaurants, retail, offices and mixed-use buildings. This page does not claim commercial capability beyond what the Mission Valley location page states.
