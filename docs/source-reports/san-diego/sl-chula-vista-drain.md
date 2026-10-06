# Source report: sl-chula-vista-drain

Page: Drain Cleaning in Chula Vista, CA (`chulaVistaDrainContent`, `content/pages/sl-sd-chula-vista-drain.tsx`).

Sources:
- LOCATION: `chulaVistaContent` in `content/pages/san-diego-chula-vista.tsx` (City of Chula Vista facts read 2026-10-04; most City pages are undated, so the page says "confirm with the agency" and states no dates).
- SERVICE: `svc-drain-cleaning` `v2` in `content/pages/services.tsx`, plus `content/pages/sl-blocks/drain-cleaning.ts`.

Status key: USED = text taken as published; ADAPTED = fact kept, wording changed to tie it to this service; LEFT OUT = not on this page (reason given).

## The four body sections and their sources

| # | h2 on the page | Chula Vista source | Service source |
|---|---|---|---|
| 1 | Your fixture drains sit upstream of the City's Connection Point | `responsibility` (answer, lateral card, table rows 1-2), FAQ 1 | `definition.supporting` 1, `limits.cannot` (the public main and the connection) |
| 2 | One drain, several drains, or water coming up | `heroForm.card.note`, `whoToCall` (the City's numbers, company phone), FAQ 4 and 5 | `signals`, `triage` rows 1, 2, 5 |
| 3 | The City names grease and roots, and warns about cleaning a lateral | `systemExplainer` p4 | `signals` (clogs that keep returning), `triage` row 4, `limits.cannot` (roots at a joint) |
| 4 | A City policy for some stoppages, not a grant, and what cleaning does not fix | `municipalProgram` (lede, covers 1, doesNotCover 1 and 5, steps 3), FAQ 3 | `limits.cannot`, `ask.keep`, `independent.note`, `definition.scope` |

## City of Chula Vista location page

| Section / card / fact | Status | Where / reason |
|---|---|---|
| seoTitle / metaDescription | ADAPTED | Service name swapped in; metaDescription replaced by a page-specific one |
| hero.title and hero.intro (City runs the public sewer; written policy says who pays for a stoppage in the public sewer) | ADAPTED | Hero intro: lateral-from-the-first-foot fact tied to this service; H1 names the service |
| heroForm (bullets incl. 'Serving the San Diego area since' year, request card, nextSteps, form, hours) | LEFT OUT | Template supplies its own form. The founding-year line is not carried onto service pages |
| heroForm.card.note (call the City to report a discharge to a street or storm drain) | ADAPTED | Section 2 and fourth problem card (the City's numbers, marked as the City's) |
| faqHeading, faqSchemaApproved | LEFT OUT | Template-level |
| keyTakeaways 1 (City runs the public sewer, not a separate district; about 50,000 customers) | LEFT OUT | System description with no tie to this service; the CVSan correction stays on the location page |
| keyTakeaways 2 (owner from the first foot; 48-hour stoppage exception; reimbursement if staff agree) | ADAPTED | Hero and section 1; the 48-hour exception in section 4, worded as the policy words it |
| keyTakeaways 3 (no lateral repair grant found; reimbursement covers locating and clearing qualifying stoppages only) | ADAPTED | Section 4 ('did not find', never called a grant) |
| keyTakeaways.jumpNav; serviceCards (9) and helpBar | LEFT OUT | No on-page anchors; hub grid. Related links cover siblings |
| responsibility.answer (owner maintains lateral from connection to building and beyond, sole expense; City keeps mains and manholes; one exception) | ADAPTED | Section 1 |
| responsibility cards: public sewer (City Public Works; billing routes) and lateral line (Connection Point = first foot off the outside of the public sewer; permit terms) | ADAPTED | Section 1 (Connection Point wording); billing routes and permit terms LEFT OUT |
| responsibility table rows 1-2 (who runs or arranges it; where it ends) | ADAPTED | Section 1 |
| responsibility table row 3 (who to contact first; stop all water use) | ADAPTED | Section 2 (stop all water use first) |
| responsibility table row 4 (what help exists; no repair grant) | ADAPTED | Section 4 |
| responsibility table row 5 (where an inspection helps) | LEFT OUT | Camera is a separate service; the service page carries its can and cannot lists |
| responsibility.note (general information, not legal advice) | LEFT OUT | Not about fixture drains; no legal claim is made on the page |
| systemExplainer p1-2 (50,000 customers; 511 miles of pipe, 12 lift stations; treatment paid to City of San Diego Metro; yearly cleaning and 47-mile camera goals; rate-bill routes) | LEFT OUT | System description with no tie to this service; counts and goals are not reused |
| systemExplainer p3 (pages do not say combined or separate, or system age) | LEFT OUT | No age or system-type figure is stated on this page |
| systemExplainer p4 (City guidance: grease, roots through cracked pipe, annual rule of thumb, cleaning a private lateral can push debris into the public sewer, no deep-rooted plants) | ADAPTED | Section 3, tightened; the City's guidance is quoted as the City's |
| systemExplainer p5 (a public rule does not tell you a lateral's condition) and card (what a camera can show; distance count; does not establish a property line) | LEFT OUT | Camera material; the service page and FAQ carry the camera limits |
| whoToCall paragraph and agency (Public Works Operations 619-397-6000; hours; stop all water first) | ADAPTED | Section 2 and fourth problem card: Public Works number marked as the City's; hours LEFT OUT for length (FAQ 5 carries them) |
| whoToCall.secondaryAgency (Chula Vista Police after hours 619-691-5151) | ADAPTED | Section 2: the City's after-hours direction and number |
| whoToCall.company (phone, hours) | ADAPTED | Section 2: phone read from `marketOperatingDetail['san-diego-ca']`, as the San Diego City drain page does; hours LEFT OUT |
| municipalProgram.lede (none found; Council Policy 570-01 sets who pays for some stoppages) | ADAPTED | Section 4, 'did not find' wording; the policy number is named in section 1 |
| municipalProgram.covers 1-3 (reasonable invoiced costs of a qualifying stoppage if staff agree; street-tree work split; relocation for City projects) | ADAPTED | Section 4: reimbursement for a qualifying stoppage with 'if staff agree', and that it does not cover a fixture clog; street-tree split and relocation LEFT OUT (FAQ 6) |
| municipalProgram.doesNotCover 1-3 (elsewhere in the lateral is the owner's; inadequate size or depth; unlawful discharge) | ADAPTED | Section 4 (a fixture-drain clog is not a qualifying stoppage); size/depth and unlawful discharge LEFT OUT, no tie to this service |
| municipalProgram.doesNotCover 4-5 (review time and documentation not found; posted copy shows a 2014 revision with a blank resolution number) | ADAPTED | Section 4: 2014 revision, blank resolution number, confirm with Public Works (the City's number); review-time detail LEFT OUT |
| municipalProgram.whoCanApply (four-, six-, eight-inch lateral; City street tree definition) | LEFT OUT | Definition detail; the street-tree fact is used where noted |
| municipalProgram.steps 1-6 (find the stoppage; licensed plumber's CCTV finding; 48-hour notice; street-tree proof; invoices; permit) | ADAPTED | Section 4 (48-hour notice only); the rest is stoppage-location and permit procedure LEFT OUT, FAQ 6 and 7 carry it |
| municipalProgram.afterSteps (property-line cleanout exposed, normally two to three feet; City crews may not reach further) | LEFT OUT | Property-line cleanout detail; no tie to fixture drains |
| municipalProgram.callout and closing (ask Public Works what it accepts; no claim the City pays for our services; we do not repair) | ADAPTED | Section 4: no City page says it pays for our services; we do not perform repairs; link LEFT OUT |
| secondOpinion (ledes, steps, callout, CTA) | ADAPTED | Section 4 last sentence (video and findings compared against an estimate); rest LEFT OUT |
| buyingGuide.lede and body (no sale-time rule found; CVMC 13.08.100 and 13.08.110 are new-construction rules; Development Services; permit before repair) | LEFT OUT | Not about fixture drains; FAQ 8 carries it. No sale-time rule is tied to drains, so no buying card |
| buyingGuide links, CTA, agents block | LEFT OUT | Hub elements |
| nearbyAreas (six other San Diego-area locations; market hub link) | ADAPTED | `coverage`: the six other locations; the market hub link LEFT OUT |
| finalCta title / paragraphs / bullets | ADAPTED | Title becomes `cta.title`; paragraphs and bullets LEFT OUT, replaced by `cta.body` |
| sources (10 links, lastReviewed, closingNote) | USED | `sources: chulaVistaContent.sources`. Most pages are undated, so the page says 'confirm with the agency' and states no dates |
| (no housingAge and no reviewBand on the Chula Vista location page) | n/a | No Census figure and no review figures are stated on this page |

### Chula Vista FAQ (10)

| Question | Status | Reason |
|---|---|---|
| Who is responsible for the sewer lateral in Chula Vista? | USED | Verbatim |
| Is Chula Vista served by CVSan or a separate sanitation district? | LEFT OUT | A correction about which agency serves Chula Vista; no tie to drains |
| Does the City reimburse owners for sewer lateral problems? | USED | Verbatim |
| What should I do if sewage backs up inside my Chula Vista home? | USED | Verbatim |
| Who do I call if sewage reaches a Chula Vista street or storm drain, and what are the hours? | USED | Verbatim; carries the hours cut from the body |
| What does the City's policy say about street-tree roots and the 48-hour notice? | USED | Verbatim |
| Is a permit required for sewer lateral work in Chula Vista? | USED | Verbatim; the City's permit terms, not ours |
| Is a sewer inspection required when buying a Chula Vista home? | USED | Verbatim; a seller or buyer with recurring drains may ask, and the answer says none found |
| What does a sewer camera inspection show? | LEFT OUT | The drain service page answers camera questions ('What do I receive when a camera is used?', 'Can a camera see through standing water?') |
| Do you repair or replace sewer lines? | USED | Verbatim |

## Service page (`svc-drain-cleaning`)

| Section / card / fact | Status | Where / reason |
|---|---|---|
| seoTitle | ADAPTED | 'Drain Cleaning in Chula Vista, CA' |
| metaDescription | LEFT OUT | Market-neutral; replaced |
| serviceDescription / definition.answer | ADAPTED | Same definition, Chula Vista added |
| hero.title, hero.intro (restores flow; no repair, replacement, lining, excavation, installation) | ADAPTED | Hero intro; the no-repair line in section 4 and the FAQ |
| definition.supporting 1 (drain vs sewer cleaning) | ADAPTED | Section 1 |
| definition.supporting (drain clearing; camera is separate), definition.scope | ADAPTED | FAQ carries clearing and camera; scope in section 4 |
| signals 1, 2, 4 | USED | Problem cards 1-3 (`sl-blocks/drain-cleaning.ts`) |
| signals 3 (gurgling), 6 (water or sewage coming up) | ADAPTED | Section 2 bullets |
| signals 5 (sewage-like odors) | LEFT OUT | FAQ 'What causes sewage-like odors?' |
| triage rows 1, 2, 5 | ADAPTED | Section 2 |
| triage row 3 (lower drains back up) | LEFT OUT | Slot-limited; FAQ 'How do I know if it is a drain clog or a sewer line problem?' |
| triage row 4 (clogs again after cleared) | ADAPTED | Section 3 |
| limits.can (4 items), limits.callout, secondaryLimits, methods table, decision | LEFT OUT | FAQ answers carry grease, roots, wipes, methods, camera limits |
| limits.cannot: cracked/broken/collapsed; offset or joint; roots at a joint | ADAPTED | Section 4 |
| limits.cannot: public sewer main or its connection | ADAPTED | Section 1 (the public sewer and Connection Point) |
| limits.cannot: line the equipment cannot pass; process.prep | LEFT OUT | No slot; FAQ carries them |
| process steps 1 to 5 | USED | `process`, verbatim; equipment names only as confirmed (steps 3 and 4) |
| independent band | ADAPTED | Section 4 last sentence |
| ask items: video, written findings | USED | Inclusion 6 |
| ask items: limits, access point, cleaning record, locating | LEFT OUT | FAQ 'Will I get a record of the cleaning?', 'What does line locating do?' |
| ask.keep | ADAPTED | Section 4 (compare estimates) |
| audiences, markets (3 hubs), faqTitle, situations, terms, request.* | LEFT OUT | Template slots; `coverage` replaces the hubs |
| relatedPageIds (4) | ADAPTED | Chula Vista page, this service, sewer cleaning, camera inspection |
| cta | ADAPTED | Rewritten for Chula Vista |
| inclusions (6 cards) | USED | `sl-blocks/drain-cleaning.ts` |
| fourth problem card: sewage reaching a street or storm drain | ADAPTED | From `whoToCall.agency` (the City's number) |

### Service FAQ

Service FAQ (37): 34 USED verbatim, 3 LEFT OUT: "Do you clean drains in St. Louis, San Diego, and Las Vegas?" (this page is an area page; the hub's question), "Can drain cleaning fix a broken or collapsed pipe?" (duplicate of "Does drain cleaning repair a damaged pipe?"), "Can cleaning remove tree roots?" (duplicate of "Can tree roots grow into drain pipes?"). The cost and timing questions are carried as the service page words them (DEC-088).

Total FAQ on the page: 8 Chula Vista + 34 service = 42.

## Facts to confirm

- Whether the City's Public Works hours and numbers (619-397-6000, 619-691-5151) are current; they are marked as the City's and the page says to confirm.
- The posted Council Policy 570-01 shows a 2014 revision with a blank resolution number; the page says to confirm the current text, not that the text is current.
