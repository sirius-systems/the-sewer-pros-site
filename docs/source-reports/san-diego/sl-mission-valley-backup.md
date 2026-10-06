# Source report: sl-mission-valley-backup

Page: Recurring Sewer Backup Diagnosis in Mission Valley, San Diego, CA (`missionValleyBackupContent`, `content/pages/sl-sd-mission-valley-backup.tsx`).

Sources:
- LOCATION: `sanDiegoMissionValleyContent` in `content/pages/san-diego-mission-valley.tsx` (City of San Diego sources read 2026-10-04; most City pages are undated, so the page says "confirm with the agency" and states no dates). Mission Valley is a neighborhood (a City planning area): only facts this page itself states are used, so no City of San Diego page facts (Council Policy 400-10, the yearly cleanout flush, the EMRA list, 619-515-3500) appear.
- SERVICE: `svc-recurring-sewer-backup-diagnosis` `v2` in `content/pages/services.tsx`, plus `content/pages/sl-blocks/recurring-sewer-backup-diagnosis.ts`.

Status key: USED = text taken as published; ADAPTED = fact kept, wording changed to tie it to this service; LEFT OUT = not on this page (reason given).

## The four body sections and their sources

| # | h2 on the page | Mission Valley source | Service source |
|---|---|---|---|
| 1 | A repeat backup: the City's spill line, or your lateral? | `heroForm.card.note` and `whoToCall.agency` (619-515-3525, the City's number), `responsibility` (answer p1-p2, table rows 1-3), lease sentence | `definition.supporting` 2 (documents evidence, does not prove responsibility), `limits` intro (findings apply to the segment viewed) |
| 2 | Grease and roots are the City's named causes, and cleaning will not show which | `systemExplainer` p2 (kitchens, grease), `municipalProgram.covers` 1 and 3 (permit; FEWD inspectors after a grease spill), FAQ "How often should a restaurant line be cleaned?" | `causes` (roots, grease, sag), `causes.after` (cleaning does not repair) |
| 3 | If the footage points beyond the property line | `responsibility.answer` p3 and `note` (Plumber's Report, 24 hours, who pays), `systemExplainer.card.closing` (distance, not a property line) | `limits.cannot` (slope; standing water is an observation, not a true sag) |
| 4 | No City program to pay for it, so get the evidence first | `municipalProgram` (lede, `doesNotCover` 1 and 4, callout p3-p4) | `independent` band + note, `ask.keep`, `definition.scope` |

## Mission Valley location page

| Section / card / fact | Status | Where / reason |
|---|---|---|
| seoTitle | ADAPTED | Service name swapped in; location written "Mission Valley, San Diego, CA" because "Mission Valley, CA" is not a place name |
| metaDescription | LEFT OUT | Replaced by a page-specific description |
| hero.title (Sewer and Drain Service in Mission Valley, San Diego) | ADAPTED | H1 names this service |
| hero.intro (independent camera inspection and cleaning; City planning area; owner maintains the lateral; food service grease permits) | ADAPTED | Hero intro: owner-to-the-main fact and "no City program found" tied to a repeat backup |
| heroForm bullets (incl. "Serving San Diego since" year), request card, nextSteps, form | LEFT OUT | Template supplies its own form. The founding-year line is not carried onto service pages |
| heroForm.card.note (619-515-3525 for a sewer spill or odor) | ADAPTED | Sections 1 and 3, marked as the City's number |
| faqHeading, faqSchemaApproved, keyTakeaways.jumpNav | LEFT OUT | Template-level; no on-page anchors in this template |
| keyTakeaways 1 (planning area of about 2,418 net acres; not a separate city or sewer district; City rules apply) | ADAPTED | Planning-area fact in the hero; acreage LEFT OUT |
| keyTakeaways 2 (City's description of the valley; every food service establishment needs a City grease permit; grease review before construction) | ADAPTED | Section 2 (grease permit context); the "regional center" sentence LEFT OUT |
| keyTakeaways 3 (owner maintains the lateral to the City main; no City program found; camera gives evidence before spending) | ADAPTED | Hero and the "none found" / owner-maintains sections |
| serviceCards (9) and helpBar | LEFT OUT | Hub grid; related links cover siblings |
| responsibility.answer p1 (City runs the public sewer; owner maintains the lateral to the City main; street, property line, easement, canyon) | ADAPTED | Section 1 |
| responsibility.answer p2 (planning area, no separate Mission Valley sewer utility, parcel can be an exception; lease divides the duty, not legal advice) | ADAPTED | Section 1 (lease, not legal advice) and problem card 4 |
| responsibility.answer p3 (plumber who finds a break or collapse beyond the property line calls 619-515-3525 and files a Plumber's Report; City investigates within 24 hours) | ADAPTED | Section 3 |
| responsibility card: the public sewer (City Public Utilities operates the collection system; address-specific) | LEFT OUT | System description; no tie to this service |
| responsibility card: the lateral line (restaurant, hotel kitchen or multi-tenant building; owner maintains it up to the main) | ADAPTED | Problem card 4 (shared lateral serving several tenants) |
| responsibility table rows 1-2 (who runs it; where the line ends) | ADAPTED | Section 1 |
| responsibility table row 3 (first contact: 619-515-3525; Plumber's Report) | ADAPTED | Sections 1 and 3 |
| responsibility table row 4 (food service grease: FEWD permits and monitors) | ADAPTED | Section 2 |
| responsibility table row 5 (where an inspection helps) | ADAPTED | Section 3 |
| responsibility.note (not legal advice; no current City statement of who pays beyond the property line) | ADAPTED | Section 3 |
| systemExplainer p1 (San Diego River floodplain; City's "regional center"; 1958 development; Interstate 8) | LEFT OUT | Development history; no tie to this service |
| systemExplainer p2 (kitchens send grease daily; multi-tenant building feeds many fixtures into one lateral; City runs a grease permit program) | ADAPTED | Section 2 and problem card 4 |
| systemExplainer p3 (City pages do not say combined or separate; no pipe age; development date does not tell a lateral's age) | LEFT OUT | Not tied to this service; no age or system-type claim is made |
| systemExplainer p4 (floodplain; no City statement linking it to sewer conditions) | LEFT OUT | Not tied to this service; no groundwater or flooding claim is made |
| systemExplainer p5 (East and West Mission Valley; 1985 plan; no City east/west sewer rules) | LEFT OUT | Planning history; no tie to this service |
| systemExplainer.card bullets (what a camera can show on a commercial lateral) | LEFT OUT | Camera is a separate service; the service page and its FAQ carry the can and cannot lists |
| systemExplainer.card.closing (distance count; does not establish a property line) | ADAPTED | Section 3 |
| whoToCall.paragraphs (City for a spill or odor; FEWD for grease permits; camera shows the lateral) | ADAPTED | Sections 1 and 2 |
| whoToCall.agency (619-515-3525; not labelled a 24-hour line) | ADAPTED | Sections 1 and 3, the City's number |
| whoToCall.secondaryAgency (FEWD 858-654-4188) | LEFT OUT | Cut for length; the FAQ carries it |
| whoToCall.company (phone, hours) | LEFT OUT | No company phone in the body, as in the City of San Diego model |
| municipalProgram.lede (none found; which City pages were checked; FEWD is the program that matters here) | ADAPTED | Section 4 |
| municipalProgram.covers 1 (every food service establishment needs a FEWD permit; equipment traps fat, oil and grease) | ADAPTED | Section 2 (permit context) |
| municipalProgram.covers 2 (FEWD plan review for new construction, remodels and retrofits) | LEFT OUT | Not tied to a repeat backup; the FAQ carries it |
| municipalProgram.covers 3 (after a grease-related spill, FEWD inspectors look at facilities in the immediate area) | ADAPTED | Section 2 |
| municipalProgram.covers 4 (hydromechanical grease interceptor vs. gravity grease interceptor) | LEFT OUT | Equipment detail; the FAQ carries it |
| municipalProgram.covers 5 (FEWD is a permit program, not financial help; does not review a lateral) | LEFT OUT | Cut for length |
| municipalProgram.doesNotCover 1 (crew lateral-installation program suspended; public-improvement permit; Class A contractor) | ADAPTED | Section 4 (suspended only) |
| municipalProgram.doesNotCover 2-3 (Right-of-Way Permit; licensed contractor can make lateral connections) | LEFT OUT | Construction and permit detail for repair work; the FAQ carries it |
| municipalProgram.doesNotCover 4 (no City page on whether private-property-only work needs a permit; 619-446-5242; 619-446-5300) | ADAPTED | Section 4 (5242, the City's number) |
| municipalProgram.callout p1 (plan on arranging inspection, cleaning and repair yourself; no claim the City accepts an outside report or that our work satisfies FEWD) | ADAPTED | Sections 2 and 4 |
| municipalProgram.callout p2 (establish condition, clean on an interval the evidence supports, re-inspect; not every line needs it) | LEFT OUT | The "better basis for a schedule" point comes from the FAQ answer in section 2 |
| municipalProgram.callout p3 (occupied commercial site: trading hours, tenants, service corridors, contractors; cost of a failure) | ADAPTED | Section 4; the cost-of-failure sentence LEFT OUT |
| municipalProgram.callout p4 (contractors perform approved repairs; The Sewer Pros does not) | ADAPTED | Section 4 |
| municipalProgram.closing (links to hydro jetting in Mission Valley and the commercial pages) | LEFT OUT | Related links cover siblings |
| secondOpinion (ledes, steps, callout, CTA) | ADAPTED | Section 4 last sentences (keep the video, compare estimates); rest LEFT OUT |
| buyingGuide.lede (City advice to buyers is for homes: a licensed-plumber report on the lateral connection; guidance, not a requirement; a sewer scope is a separate, focused inspection) | LEFT OUT | Not about a backup |
| buyingGuide.body (no City sale-time rule or disclosure rule found; not lenders, leases, redevelopment permits, state rules; Development Services shows the connection but has no private-line diagrams; ask for the FEWD records) | LEFT OUT | Not about a backup |
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

## Service page (`svc-recurring-sewer-backup-diagnosis`)

| Section / card / fact | Status | Where / reason |
|---|---|---|
| seoTitle | ADAPTED | "Recurring Sewer Backup Diagnosis in Mission Valley, San Diego, CA" |
| metaDescription | LEFT OUT | Market-neutral; replaced |
| serviceDescription | ADAPTED | Same definition, Mission Valley added |
| hero.title, hero.intro | ADAPTED | Rewritten for Mission Valley |
| hero.scope, hero.cardIntro | LEFT OUT | Template elements |
| definition.answer, supporting 1-2 | ADAPTED | `serviceDescription`, hero, and sections 1 and 3 (footage documents, does not repair) |
| definition.scope | ADAPTED | Section 4; the "residential" wording is not carried (see the report note on commercial and mixed-use) |
| signals 1 The same clog returns, 2 Several fixtures drain slowly, 6 Wastewater at a cleanout or outside drain | USED | Problem cards (`sl-blocks`) |
| signals 3, 4, 5, 7 | LEFT OUT | Slot-limited; FAQ answers carry them |
| causes (7 items) | ADAPTED | Section 2 (roots, grease) and section 3 (sag, standing water); the rest LEFT OUT |
| causes.after (cleaning does not repair) | ADAPTED | Section 2 |
| limits.can (8 items) | LEFT OUT | FAQ "What can a sewer camera see?" |
| limits.cannot: slope; standing water is not a true sag | ADAPTED | Section 3 (slope; standing water as an observation) |
| limits.cannot: other items | LEFT OUT | FAQ answers |
| process steps 1 to 6 | USED | `process`, verbatim |
| process.prep, decision, situations, audiences, markets, request.* | LEFT OUT | No slot or template element; FAQ answers carry them |
| independent band + note | ADAPTED | Section 4 (does not repair or sell repair; compare estimates) |
| ask items, ask.keep | ADAPTED | Inclusions 4-5; section 4 (keep the video) |
| relatedPageIds | ADAPTED | Mission Valley page, this service, camera inspection, cleaning with camera |
| cta | ADAPTED | Rewritten for Mission Valley |
| inclusions (6 cards) | USED | `sl-blocks/recurring-sewer-backup-diagnosis.ts` |

### Fourth problem card (location-driven)

"A shared lateral serving several tenants" (location: a multi-tenant building feeds many fixtures into one lateral; lease is a lease matter, not legal advice; service: a diagnosis records the accessible line). Photo slot: commercial-street brief, neutral alt text.

### Service FAQ

29 service questions (per the service page): all 29 USED verbatim, none left out. "How long does it take, and how much does it cost?" and "Can you come the same day, and is this emergency service?" are carried as the service page has them (DEC-088 wording; DEC-139).

Total FAQ on the page: 39 (10 Mission Valley + 29 service).

## Facts worth a second look

- Mission Valley's own page says it found no separate Mission Valley sewer utility and that a parcel can still be an exception; the page repeats that wording and never says which agency serves an address.
- City phone numbers used (619-515-3525, 619-446-5242, 619-446-5300, 858-654-4188) are each labelled the City's, not ours, and appear only as the Mission Valley page states them. No dates are stated.
- The service pages say "residential"; the Mission Valley page serves hotels, restaurants, retail, offices and mixed-use buildings. This page does not claim commercial capability beyond what the Mission Valley location page states.
