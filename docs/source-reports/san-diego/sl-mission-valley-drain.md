# Source report: sl-mission-valley-drain

Page: Drain Cleaning in Mission Valley, San Diego, CA (`missionValleyDrainContent`, `content/pages/sl-sd-mission-valley-drain.tsx`).

Sources:
- LOCATION: `sanDiegoMissionValleyContent` in `content/pages/san-diego-mission-valley.tsx` (City of San Diego sources read 2026-10-04; most City pages are undated, so the page says "confirm with the agency" and states no dates). Mission Valley is a neighborhood (a City planning area): only facts this page itself states are used, so no City of San Diego page facts (Council Policy 400-10, the yearly cleanout flush, the EMRA list, 619-515-3500) appear.
- SERVICE: `svc-drain-cleaning` `v2` in `content/pages/services.tsx`, plus `content/pages/sl-blocks/drain-cleaning.ts`.

Status key: USED = text taken as published; ADAPTED = fact kept, wording changed to tie it to this service; LEFT OUT = not on this page (reason given).

## The four body sections and their sources

| # | h2 on the page | Mission Valley source | Service source |
|---|---|---|---|
| 1 | Your fixture drains sit upstream of the lateral the City says is yours | `responsibility` (answer p1-p2, lateral card, table rows 1-2), `keyTakeaways` 1 | `definition.supporting` 1 (drain vs. sewer cleaning), `limits.cannot` (the public main and the connection) |
| 2 | One drain, several tenants, or water coming up | `systemExplainer` p2 (multi-tenant lateral), `heroForm.card.note` and `whoToCall.agency` (619-515-3525, the City's number), `whoToCall.company` (company phone) | `signals`, `triage` rows 1, 2, 5 |
| 3 | Kitchen grease is a cleaning job, and the City's grease permit is not | `systemExplainer` p2, `municipalProgram.covers` 1, `callout` p1 (no claim re FEWD), FAQ "How often should a restaurant line be cleaned?" | `signals` ("Clogs that keep returning"), `triage` row 4, `limits.can` (grease) |
| 4 | No City help with lateral costs found, so know what cleaning does not fix | `municipalProgram` (lede, `doesNotCover` 1 and 4, callout p4) | `limits.cannot` (crack, offset, roots at a joint), `ask.keep`, `independent.note`, `definition.scope` |

## Mission Valley location page

| Section / card / fact | Status | Where / reason |
|---|---|---|
| seoTitle | ADAPTED | Service name swapped in; location written "Mission Valley, San Diego, CA" because "Mission Valley, CA" is not a place name |
| metaDescription | LEFT OUT | Replaced by a page-specific description |
| hero.title (Sewer and Drain Service in Mission Valley, San Diego) | ADAPTED | H1 names this service |
| hero.intro (independent camera inspection and cleaning; City planning area; owner maintains the lateral; food service grease permits) | ADAPTED | Hero intro: planning-area and owner-to-the-main facts tied to drain cleaning; grease-permit sentence LEFT OUT |
| heroForm bullets (incl. "Serving San Diego since" year), request card, nextSteps, form | LEFT OUT | Template supplies its own form. The founding-year line is not carried onto service pages |
| heroForm.card.note (619-515-3525 for a sewer spill or odor) | ADAPTED | Section 2, marked as the City's number |
| faqHeading, faqSchemaApproved, keyTakeaways.jumpNav | LEFT OUT | Template-level; no on-page anchors in this template |
| keyTakeaways 1 (planning area of about 2,418 net acres; not a separate city or sewer district; City rules apply) | ADAPTED | Planning-area and City-rules facts in section 1 and coverage.intro; the acreage figure LEFT OUT (no tie to this service) |
| keyTakeaways 2 (City's description of the valley; every food service establishment needs a City grease permit; grease review before construction) | ADAPTED | Section 3 and problem card 4; the "regional center" sentence LEFT OUT |
| keyTakeaways 3 (owner maintains the lateral to the City main; no City program found; camera gives evidence before spending) | ADAPTED | Hero and the "none found" / owner-maintains sections |
| serviceCards (9) and helpBar | LEFT OUT | Hub grid; related links cover siblings |
| responsibility.answer p1 (City runs the public sewer; owner maintains the lateral to the City main; street, property line, easement, canyon) | ADAPTED | Section 1 |
| responsibility.answer p2 (planning area, no separate Mission Valley sewer utility, parcel can be an exception; lease divides the duty, not legal advice) | ADAPTED | Section 1: planning area, no separate utility found, lease matter; the parcel-exception sentence LEFT OUT (cut for length) |
| responsibility.answer p3 (plumber who finds a break or collapse beyond the property line calls 619-515-3525 and files a Plumber's Report; City investigates within 24 hours) | LEFT OUT | Not about fixture drains; the FAQ carries it |
| responsibility card: the public sewer (City Public Utilities operates the collection system; address-specific) | LEFT OUT | System description; no tie to this service |
| responsibility card: the lateral line (restaurant, hotel kitchen or multi-tenant building; owner maintains it up to the main) | ADAPTED | Sections 1 and 2 (multi-tenant lateral) |
| responsibility table rows 1-2 (who runs it; where the line ends) | ADAPTED | Section 1 |
| responsibility table row 3 (first contact: 619-515-3525; Plumber's Report) | ADAPTED | Section 2 (spill and odor line only) |
| responsibility table row 4 (food service grease: FEWD permits and monitors) | ADAPTED | Section 3 |
| responsibility table row 5 (where an inspection helps) | LEFT OUT | Camera is a separate service |
| responsibility.note (not legal advice; no current City statement of who pays beyond the property line) | LEFT OUT | Not about fixture drains |
| systemExplainer p1 (San Diego River floodplain; City's "regional center"; 1958 development; Interstate 8) | LEFT OUT | Development history; no tie to this service |
| systemExplainer p2 (kitchens send grease daily; multi-tenant building feeds many fixtures into one lateral; City runs a grease permit program) | ADAPTED | Sections 2 and 3 |
| systemExplainer p3 (City pages do not say combined or separate; no pipe age; development date does not tell a lateral's age) | LEFT OUT | Not tied to this service; no age or system-type claim is made |
| systemExplainer p4 (floodplain; no City statement linking it to sewer conditions) | LEFT OUT | Not tied to this service; no groundwater or flooding claim is made |
| systemExplainer p5 (East and West Mission Valley; 1985 plan; no City east/west sewer rules) | LEFT OUT | Planning history; no tie to this service |
| systemExplainer.card bullets (what a camera can show on a commercial lateral) | LEFT OUT | Camera is a separate service; the service page and its FAQ carry the can and cannot lists |
| systemExplainer.card.closing (distance count; does not establish a property line) | LEFT OUT | Camera sentence; no tie to drain cleaning |
| whoToCall.paragraphs (City for a spill or odor; FEWD for grease permits; camera shows the lateral) | ADAPTED | Sections 2 and 3 |
| whoToCall.agency (619-515-3525; not labelled a 24-hour line) | ADAPTED | Section 2, the City's number; the not-24-hour clause LEFT OUT (cut for length) |
| whoToCall.secondaryAgency (FEWD 858-654-4188) | ADAPTED | Problem card 4, the City's number |
| whoToCall.company (phone, hours) | ADAPTED | Section 2: phone read from marketOperatingDetail['san-diego-ca'], as the St. Louis and Las Vegas drain pages do; hours LEFT OUT |
| municipalProgram.lede (none found; which City pages were checked; FEWD is the program that matters here) | ADAPTED | Section 4, "none found" wording; the list of pages checked LEFT OUT |
| municipalProgram.covers 1 (every food service establishment needs a FEWD permit; equipment traps fat, oil and grease) | ADAPTED | Section 3 |
| municipalProgram.covers 2 (FEWD plan review for new construction, remodels and retrofits) | ADAPTED | Problem card 4 |
| municipalProgram.covers 3 (after a grease-related spill, FEWD inspectors look at facilities in the immediate area) | LEFT OUT | No tie to fixture drains |
| municipalProgram.covers 4 (hydromechanical grease interceptor vs. gravity grease interceptor) | LEFT OUT | Equipment detail; the FAQ carries it |
| municipalProgram.covers 5 (FEWD is a permit program, not financial help; does not review a lateral) | ADAPTED | Problem card 4 (equipment questions go to the City) |
| municipalProgram.doesNotCover 1 (crew lateral-installation program suspended; public-improvement permit; Class A contractor) | ADAPTED | Section 4 (suspended only); permit and contractor instruction LEFT OUT (about repair work this page does not offer) |
| municipalProgram.doesNotCover 2-3 (Right-of-Way Permit; licensed contractor can make lateral connections) | LEFT OUT | Construction and permit detail for repair work; the FAQ carries it |
| municipalProgram.doesNotCover 4 (no City page on whether private-property-only work needs a permit; 619-446-5242; 619-446-5300) | ADAPTED | Section 4 (5242, the City's number); 5300 LEFT OUT |
| municipalProgram.callout p1 (plan on arranging inspection, cleaning and repair yourself; no claim the City accepts an outside report or that our work satisfies FEWD) | ADAPTED | Section 3 (no claim re FEWD) and section 4 |
| municipalProgram.callout p2 (establish condition, clean on an interval the evidence supports, re-inspect; not every line needs it) | LEFT OUT | The interval point comes from the FAQ answer in section 3 |
| municipalProgram.callout p3 (occupied commercial site: trading hours, tenants, service corridors, contractors; cost of a failure) | LEFT OUT | Not tied to fixture-drain cleaning |
| municipalProgram.callout p4 (contractors perform approved repairs; The Sewer Pros does not) | ADAPTED | Section 4: "We do not perform repairs or replacements"; the contractors sentence LEFT OUT |
| municipalProgram.closing (links to hydro jetting in Mission Valley and the commercial pages) | LEFT OUT | Related links cover siblings |
| secondOpinion (ledes, steps, callout, CTA) | ADAPTED | Section 4 last sentence (video and findings compared against an estimate); rest LEFT OUT |
| buyingGuide.lede (City advice to buyers is for homes: a licensed-plumber report on the lateral connection; guidance, not a requirement; a sewer scope is a separate, focused inspection) | LEFT OUT | Not about drain cleaning; the service FAQ on buying a house carries it |
| buyingGuide.body (no City sale-time rule or disclosure rule found; not lenders, leases, redevelopment permits, state rules; Development Services shows the connection but has no private-line diagrams; ask for the FEWD records) | LEFT OUT | Not about drain cleaning |
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
| How often should a restaurant line be cleaned? | USED | Verbatim |
| Do you repair or replace sewer lines? | USED | Verbatim |

## Service page (`svc-drain-cleaning`)

| Section / card / fact | Status | Where / reason |
|---|---|---|
| seoTitle | ADAPTED | "Drain Cleaning in Mission Valley, San Diego, CA" |
| metaDescription | LEFT OUT | Market-neutral; replaced |
| serviceDescription | ADAPTED | Same definition, Mission Valley added |
| hero.title | ADAPTED | "Drain Cleaning in Mission Valley" |
| hero.intro p1 (restores flow by removing grease, roots, debris) | ADAPTED | Hero intro |
| hero.intro p2 (no repair, replacement, lining, excavation, installation) | ADAPTED | Section 4 and FAQ "Does drain cleaning repair a damaged pipe?" |
| hero.scope bullets | LEFT OUT | Template element |
| definition.answer | ADAPTED | `serviceDescription` and hero |
| definition.supporting 1 (drain vs. sewer cleaning) | ADAPTED | Section 1 |
| definition.supporting 1 ("drain clearing" is everyday usage) | LEFT OUT | FAQ carries it |
| definition.supporting 2 (cleaning and camera are separate) | LEFT OUT | FAQ "Does a camera inspection come with drain cleaning?" |
| definition.scope (residential scope; no repair) | ADAPTED | Section 4 (no repairs); the "residential" wording is not carried, because the Mission Valley page serves commercial and mixed-use buildings and the page makes no commercial claim beyond it |
| signals 1 One slow drain, 2 Several fixtures slow, 4 Clogs that keep returning | USED | Problem cards 1-3 |
| signals 2, 3, 6 | ADAPTED | Section 2 bullets |
| signals 4 Clogs that keep returning | ADAPTED | Section 3 |
| signals 5 Sewage-like odors | LEFT OUT | FAQ "What causes sewage-like odors?" |
| triage rows 1, 2, 5 | ADAPTED | Section 2 |
| triage row 3 (lower drains back up) | LEFT OUT | Slot-limited; FAQ "How do I know if it is a drain clog or a sewer line problem?" |
| triage row 4 (clogs again after it was cleared) | ADAPTED | Section 3 |
| limits.can (4 items) | ADAPTED | Section 3 uses the grease item; the others LEFT OUT (FAQ answers carry roots, wipes) |
| limits.cannot: cracked/broken/collapsed; offset or separated joint; roots at a joint | ADAPTED | Section 4 |
| limits.cannot: public sewer main or its connection | ADAPTED | Section 1 |
| limits.cannot: a line the equipment cannot pass | LEFT OUT | No slot |
| limits.callout | LEFT OUT | FAQ "Is hydro jetting safe for every pipe?" and "Does a line that flows again mean the pipe is fine?" |
| process steps 1 to 5 | USED | `process`, verbatim; equipment names only as confirmed (steps 3 and 4) |
| process.prep, decision, methods table, secondaryLimits, situations, terms, request.* | LEFT OUT | No slot or template element; FAQ answers carry them |
| independent band | ADAPTED | Section 4 last sentence |
| ask items: video, written findings | USED | Inclusion 6 |
| ask items: limits, access point, cleaning record, locating | LEFT OUT | FAQ answers |
| ask.keep | ADAPTED | Section 4 (compare estimates) |
| audiences (Homeowners, Home buyers, Home sellers); markets | LEFT OUT | Problem cards carry the signs; `coverage` replaces markets. Buyers and sellers are not on this page: the Mission Valley location page ties no purchase fact to drain cleaning |
| relatedPageIds (4) | ADAPTED | Mission Valley page, this service, sewer cleaning, camera inspection |
| cta | ADAPTED | Rewritten for Mission Valley |
| inclusions (6 cards) | USED | `sl-blocks/drain-cleaning.ts` |

### Fourth problem card (location-driven)

"A food service kitchen drain" (location: FEWD permit, plan review, 858-654-4188 the City's number; service: cleaning is not the equipment). Photo slot: commercial-street brief, neutral alt text.

### Service FAQ

37 service questions (per the service page): 34 USED verbatim, 3 LEFT OUT: "Do you clean drains in St. Louis, San Diego, and Las Vegas?" (this page is an area page; the question belongs to the hub), "Can drain cleaning fix a broken or collapsed pipe?" (duplicate of "Does drain cleaning repair a damaged pipe?"), "Can cleaning remove tree roots?" (covered by "Can tree roots grow into drain pipes?"). The cost, time and "What happens if a camera shows damage?" answers are carried as the service page has them (they say cost and time vary).

Total FAQ on the page: 44 (10 Mission Valley + 34 service).

## Facts worth a second look

- Mission Valley's own page says it found no separate Mission Valley sewer utility and that a parcel can still be an exception; the page repeats that wording and never says which agency serves an address.
- City phone numbers used (619-515-3525, 619-446-5242, 619-446-5300, 858-654-4188) are each labelled the City's, not ours, and appear only as the Mission Valley page states them. No dates are stated.
- The service pages say "residential"; the Mission Valley page serves hotels, restaurants, retail, offices and mixed-use buildings. This page does not claim commercial capability beyond what the Mission Valley location page states.
