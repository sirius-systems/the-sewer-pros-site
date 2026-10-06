# Source report: sl-chula-vista-prepurchase

Page: Pre-Purchase Sewer Inspection in Chula Vista, CA (`chulaVistaPrePurchaseContent`, `content/pages/sl-sd-chula-vista-prepurchase.tsx`).

Sources:
- LOCATION: `chulaVistaContent` in `content/pages/san-diego-chula-vista.tsx` (City of Chula Vista facts read 2026-10-04; most City pages are undated, so the page says "confirm with the agency" and states no dates).
- SERVICE: `svc-pre-purchase-sewer-inspection` `v2` in `content/pages/services.tsx`, plus `SERVICE_PROBLEMS`, `SERVICE_INCLUSIONS` and `SERVICE_PROBLEM_SHOTS` in `content/pages/service-location-shared.ts`.

Status key: USED = text taken as published; ADAPTED = fact kept, wording changed to tie it to this service; LEFT OUT = not on this page (reason given).

## The four body sections and their sources

| # | h2 on the page | Chula Vista source | Service source |
|---|---|---|---|
| 1 | What you take on when a Chula Vista sale closes | `responsibility` (answer, lateral card, rows 1-2), `buyingGuide.lede`, `keyTakeaways` 2 | `definition.supporting` 1 (the private lateral; visible conditions on the day) |
| 2 | No sale-time rule found, and what the code does cover | `buyingGuide.body` (CVMC 13.08.100 and 13.08.110, Development Services), FAQ 8 | `definition.supporting` 2 (scope is separate from a home inspection) |
| 3 | The City's stoppage reimbursement is not a repair grant | `municipalProgram` (lede, covers 1, steps 2-4, dnc 5), FAQ 3 and 6, `systemExplainer.card.closing` | `limits.cannot` (does not show whether a repair is needed) |
| 4 | A permit comes before any repair, and a scope does not say which | `municipalProgram` step 6, `afterSteps`, FAQ 7 | `limits.cannot`, `independent` (we do not repair), `ask` (keep the video and findings) |

## City of Chula Vista location page

| Section / card / fact | Status | Where / reason |
|---|---|---|
| hero.title and hero.intro | ADAPTED | Hero intro: the first-foot fact and the no-sale-rule finding tied to this service |
| heroForm.card.note, whoToCall (agency, police, company), responsibility table row 3 | ADAPTED | Public Works number used once, in the fourth problem card and section 3, marked as the City's; police line and hours LEFT OUT (FAQ 5); no company phone on this page, as in the San Diego City model |
| keyTakeaways 2-3 | ADAPTED | Sections 1 and 3 |
| responsibility.answer, lateral card, table rows 1-2, 4 | ADAPTED | Sections 1 and 3 |
| responsibility table row 5 and systemExplainer.card (what a camera can show; distance count; does not establish the City's responsibility) | ADAPTED | Section 3: distance count and what the scope does not establish; camera bullets LEFT OUT (service page carries them) |
| responsibility.note (not legal advice) | LEFT OUT | The page makes no legal claim; FAQ 8 carries the state-law caveat |
| systemExplainer p4 (City guidance on grease, roots, annual maintenance) | LEFT OUT | Maintenance guidance with no tie to buying |
| municipalProgram.lede, covers 1 | ADAPTED | Section 3, 'did not find' wording; 'if staff agree' kept |
| municipalProgram.covers 2-3, doesNotCover 1-3 | LEFT OUT | Street-tree work split, relocation, elsewhere-in-the-lateral, size and discharge rules; FAQ 6 carries street trees |
| municipalProgram.doesNotCover 4-5 | ADAPTED | Section 3: 2014 revision with blank resolution number, confirm with Public Works (the City's number); review-time detail LEFT OUT |
| municipalProgram.steps 1-5 | ADAPTED | Section 3 (licensed plumber's camera finding, 48-hour notice, street-tree proof); invoices step LEFT OUT |
| municipalProgram.steps 6, afterSteps | ADAPTED | Section 4 (permit before repair; property-line cleanout within two to three feet, City crews may not reach further) |
| municipalProgram.callout, closing | ADAPTED | Sections 3 and 4: no claim our report meets the conditions; we inspect and document, we do not repair or replace |
| secondOpinion | LEFT OUT | Hub-level; the service page's independent band is carried in section 4 last sentence |
| buyingGuide.lede and body (no sale-time rule found; CVMC 13.08.100/.110; Development Services; permit) | ADAPTED | Sections 1, 2 and 4, hero intro |
| (fourth problem card) | ADAPTED | Location-driven: the first foot of the lateral is hard to place; from the `responsibility` lateral card and `callout` (Public Works number marked as the City's) |
| seoTitle / metaDescription | ADAPTED | Service name swapped in; metaDescription replaced by a page-specific one |
| heroForm (bullets incl. 'Serving the San Diego area since' year, request card, nextSteps, form, hours); faqHeading, faqSchemaApproved; keyTakeaways.jumpNav; serviceCards (9) and helpBar | LEFT OUT | Template supplies its own form and anchors; hub grid. The founding-year line is not carried onto service pages |
| keyTakeaways 1 (City runs the public sewer, not a separate district; about 50,000 customers) | LEFT OUT | System description with no tie to this service; the CVSan correction stays on the location page |
| systemExplainer p1-3 (50,000 customers; 511 miles of pipe, 12 lift stations; treatment paid to City of San Diego Metro; yearly cleaning and 47-mile camera goals; rate-bill routes; combined or separate and age not stated) | LEFT OUT | No age or system-type figure is stated; counts and goals are not reused |
| responsibility cards: public sewer (billing routes) and the permit terms 'sewer lateral' and 'building sewer' | LEFT OUT | System and permit description with no tie to this service |
| municipalProgram.whoCanApply (four-, six-, eight-inch lateral; City street tree definition) | LEFT OUT | Definition detail; the street-tree fact is used where noted |
| buyingGuide links, CTA, agents block | LEFT OUT | Hub elements |
| nearbyAreas (six other San Diego-area locations; market hub link) | ADAPTED | `coverage`: the six other locations; the market hub link LEFT OUT |
| finalCta title / paragraphs / bullets | ADAPTED | Title becomes `cta.title`; paragraphs and bullets LEFT OUT, replaced by `cta.body` |
| sources (10 links, lastReviewed, closingNote) | USED | `sources: chulaVistaContent.sources`. Most pages are undated, so the page says 'confirm with the agency' and states no dates |
| (no housingAge and no reviewBand on the Chula Vista location page) | n/a | No Census figure and no review figures are stated on this page |

### Chula Vista FAQ (10)

| Question | Status | Reason |
|---|---|---|
| Who is responsible for the sewer lateral in Chula Vista? | USED | Verbatim |
| Is Chula Vista served by CVSan or a separate sanitation district? | LEFT OUT | A correction about which agency serves Chula Vista; no tie to buying |
| Does the City reimburse owners for sewer lateral problems? | USED | Verbatim |
| What should I do if sewage backs up inside my Chula Vista home? | USED | Verbatim |
| Who do I call if sewage reaches a Chula Vista street or storm drain, and what are the hours? | USED | Verbatim |
| What does the City's policy say about street-tree roots and the 48-hour notice? | USED | Verbatim |
| Is a permit required for sewer lateral work in Chula Vista? | USED | Verbatim |
| Is a sewer inspection required when buying a Chula Vista home? | USED | Verbatim; answers the generic 'required' question for this city |
| What does a sewer camera inspection show? | LEFT OUT | The service page answers it in full ('What does a sewer scope look for?', 'What does a sewer inspection not show?') |
| Do you repair or replace sewer lines? | USED | Verbatim |

## Service page (`svc-pre-purchase-sewer-inspection`)

| Section / card / fact | Status | Where / reason |
|---|---|---|
| seoTitle, serviceDescription, hero.title | ADAPTED | Chula Vista added |
| metaDescription | LEFT OUT | Market-neutral; replaced |
| definition.answer / supporting 1-2 | ADAPTED | Section 1 and `serviceDescription`; scope-vs-home-inspection in section 2 |
| signals 1-3 (older home, short period, no record) | USED | Problem cards 1-3 via `SERVICE_PROBLEMS` |
| signals 4-6 (local sale requirement, drain trouble, plans to dig) | LEFT OUT | FAQ carries them; the Chula Vista sale-rule finding is in section 2 |
| limits.can, limits.cannot, limits.callout | ADAPTED | Sections 3 and 4 use the cannot list (repair need, slope and depth); the rest LEFT OUT (FAQ) |
| process steps | USED | `process`, verbatim; equipment names only as confirmed |
| decision, ask items, ask.keep | ADAPTED | Section 4 last sentence (keep the video and findings to compare against any estimate); rest LEFT OUT |
| independent band | ADAPTED | Section 4 last sentence |
| audiences, markets (3 hubs), faqTitle, request.* | LEFT OUT | Template slots; `coverage` replaces the hubs |
| inclusions (6 cards) | USED | `SERVICE_INCLUSIONS` |
| relatedPageIds (4), cta | ADAPTED | Chula Vista page, this service, camera inspection, line locating; cta rewritten for Chula Vista |

### Service FAQ

Service FAQ (29): 28 USED verbatim, 1 LEFT OUT: "Is a sewer scope required when buying or selling a house?" (the Chula Vista question "Is a sewer inspection required when buying a Chula Vista home?" answers it for this city). The cost and timing questions are carried as the service page words them (DEC-088).

Total FAQ on the page: 8 Chula Vista + 28 service = 36.

## Facts to confirm

- The City's numbers (Public Works Operations 619-397-6000; Chula Vista Police after hours 619-691-5151) are used only as the City's, and the page tells the reader to confirm.
- The posted Council Policy 570-01 shows a 2014 revision with a blank resolution number; the page says to confirm the current text, not that it is current.
- Council Policy 570-01 is never called a grant, and no sentence says our footage or report satisfies its conditions.
- CVMC 13.08.100 and 13.08.110 are cited as the location page cites them; not independently re-read here.
