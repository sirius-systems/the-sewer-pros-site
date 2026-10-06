# Source report: sl-chula-vista-backup

Page: Recurring Sewer Backup Diagnosis in Chula Vista, CA (`chulaVistaBackupContent`, `content/pages/sl-sd-chula-vista-backup.tsx`).

Sources:
- LOCATION: `chulaVistaContent` in `content/pages/san-diego-chula-vista.tsx` (City of Chula Vista facts read 2026-10-04; most City pages are undated, so the page says "confirm with the agency" and states no dates).
- SERVICE: `svc-recurring-sewer-backup-diagnosis` `v2` in `content/pages/services.tsx`, plus `content/pages/sl-blocks/recurring-sewer-backup-diagnosis.ts`.

Status key: USED = text taken as published; ADAPTED = fact kept, wording changed to tie it to this service; LEFT OUT = not on this page (reason given).

## The four body sections and their sources

| # | h2 on the page | Chula Vista source | Service source |
|---|---|---|---|
| 1 | A repeat backup: the City's sewer, or your lateral? | `responsibility` (answer, rows 1 and 3), `whoToCall.agency`, FAQ 4 and 5 | `triage`, `signals`, `limits.callout` (findings apply only to the segment inspected) |
| 2 | Grease, roots and a cleaning that can move debris | `systemExplainer` p4 | `signals` (the same clog returns), `limits.cannot` (cleaning does not repair a root opening, sag or joint) |
| 3 | The policy's 48-hour rule starts with a camera finding | `municipalProgram` steps 2-4, FAQ 6, `systemExplainer.card.closing` | `limits.cannot` (standing water is not a slope measurement) |
| 4 | A policy for some stoppages, not a grant, so get the evidence first | `municipalProgram` (lede, dnc 1 and 4-5, steps 6), FAQ 3 and 7 | `independent`, `ask.keep`, FAQ 'What if the camera shows something serious?' |

## City of Chula Vista location page

| Section / card / fact | Status | Where / reason |
|---|---|---|
| hero.title and hero.intro | ADAPTED | Hero intro: first-foot fact and the limited reimbursement tied to a repeat backup |
| heroForm.card.note, whoToCall.agency, responsibility table row 3 (stop all water use; call Public Works if it keeps backing up or reaches a street) | ADAPTED | Section 1 and fourth problem card, numbers marked as the City's |
| whoToCall.secondaryAgency (police after hours) | ADAPTED | Fourth problem card; hours LEFT OUT (FAQ 5) |
| whoToCall.company (phone, hours) | LEFT OUT | The San Diego City backup model carries no company phone in the body |
| keyTakeaways 2-3, responsibility.answer, lateral card, table rows 1-2, 4 | ADAPTED | Hero, sections 1 and 4 |
| responsibility table row 5 and systemExplainer.card (distance count; does not establish the City's responsibility) | ADAPTED | Section 3; camera bullets LEFT OUT |
| responsibility.note (not legal advice) | LEFT OUT | No legal claim is made on the page |
| systemExplainer p4 (grease, roots, annual rule of thumb, debris pushed into the public sewer) | ADAPTED | Section 2 (annual rule of thumb LEFT OUT, no tie to a repeat backup) |
| municipalProgram.lede, covers 1-3 | ADAPTED | Section 4 lede ('did not find'); covers 1 in section 3 with 'if staff agree'; covers 2-3 LEFT OUT (FAQ 6) |
| municipalProgram.doesNotCover 1, 4, 5 | ADAPTED | Section 4 (elsewhere in the lateral, review time not stated, 2014 revision with blank resolution number) |
| municipalProgram.doesNotCover 2-3 | LEFT OUT | Lateral design and enforcement detail; no tie to backups |
| municipalProgram.steps 2-5 | ADAPTED | Section 3 (camera finding, 48-hour notice, street-tree proof); invoices step LEFT OUT |
| municipalProgram.steps 6, callout, closing | ADAPTED | Section 4 (permit before repair; no repair or replacement from us; confirm with Public Works) |
| municipalProgram.afterSteps | LEFT OUT | Property-line cleanout detail; no tie to this service |
| secondOpinion | ADAPTED | Section 4 last sentence (further evaluation outside our scope; keep the video; compare estimates) |
| buyingGuide | LEFT OUT | Not about recurring backups; FAQ 8 carries it |
| (fourth problem card) | ADAPTED | Location-driven: sewage reaching a street or storm drain, from `whoToCall` |
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
| Is Chula Vista served by CVSan or a separate sanitation district? | LEFT OUT | A correction about which agency serves Chula Vista; no tie to backups |
| Does the City reimburse owners for sewer lateral problems? | USED | Verbatim |
| What should I do if sewage backs up inside my Chula Vista home? | USED | Verbatim |
| Who do I call if sewage reaches a Chula Vista street or storm drain, and what are the hours? | USED | Verbatim |
| What does the City's policy say about street-tree roots and the 48-hour notice? | USED | Verbatim |
| Is a permit required for sewer lateral work in Chula Vista? | USED | Verbatim |
| Is a sewer inspection required when buying a Chula Vista home? | USED | Verbatim |
| What does a sewer camera inspection show? | LEFT OUT | The service page answers it in full ('What can a sewer camera see?') |
| Do you repair or replace sewer lines? | USED | Verbatim |

## Service page (`svc-recurring-sewer-backup-diagnosis`)

| Section / card / fact | Status | Where / reason |
|---|---|---|
| seoTitle, serviceDescription, hero.title | ADAPTED | Chula Vista added |
| metaDescription | LEFT OUT | Market-neutral; replaced |
| definition (answer, supporting) | ADAPTED | `serviceDescription` and hero |
| signals 1-3 (same clog returns, several fixtures, wastewater at a cleanout) | USED | Problem cards 1-3 (`sl-blocks`) |
| triage / causes (grease, roots, wipes), limits.can, limits.cannot | ADAPTED | Sections 1-3; the cannot list (cleaning does not repair a root opening, sag or joint; standing water is not slope) in sections 2 and 3 |
| limits.callout (findings apply only to the segment inspected) | ADAPTED | Section 1 |
| process steps | USED | `process`, verbatim; equipment names only as confirmed |
| independent band, ask items, ask.keep | ADAPTED | Section 4 last sentence; video and findings in inclusions |
| audiences, markets (3 hubs), faqTitle, request.* | LEFT OUT | Template slots; `coverage` replaces the hubs |
| inclusions (6 cards) | USED | `sl-blocks/recurring-sewer-backup-diagnosis.ts` |
| relatedPageIds (4), cta | ADAPTED | Chula Vista page, this service, camera inspection, cleaning with camera; cta rewritten |

### Service FAQ

Service FAQ (29): all 29 USED verbatim, including the cost and same-day questions as the service page words them (DEC-088, DEC-139).

Total FAQ on the page: 8 Chula Vista + 29 service = 37.

## Facts to confirm

- The City's numbers (Public Works Operations 619-397-6000; Chula Vista Police after hours 619-691-5151) are used only as the City's, and the page tells the reader to confirm.
- The posted Council Policy 570-01 shows a 2014 revision with a blank resolution number; the page says to confirm the current text, not that it is current.
- Council Policy 570-01 is never called a grant, and no sentence says our footage or report satisfies its conditions.
