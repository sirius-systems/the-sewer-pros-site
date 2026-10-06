# Source report: sl-chula-vista-maintenance

Page: Preventative Sewer Maintenance in Chula Vista, CA (`chulaVistaMaintenanceContent`, `content/pages/sl-sd-chula-vista-maintenance.tsx`).

Sources:
- LOCATION: `chulaVistaContent` in `content/pages/san-diego-chula-vista.tsx` (City of Chula Vista facts read 2026-10-04; most City pages are undated, so the page says "confirm with the agency" and states no dates).
- SERVICE: `svc-preventative-sewer-maintenance` `v2` in `content/pages/services.tsx`, plus `content/pages/sl-blocks/preventative-sewer-maintenance.ts`.

Status key: USED = text taken as published; ADAPTED = fact kept, wording changed to tie it to this service; LEFT OUT = not on this page (reason given).

## The four body sections and their sources

| # | h2 on the page | Chula Vista source | Service source |
|---|---|---|---|
| 1 | The lateral is yours to maintain, and the City's advice is annual | `responsibility` (answer, rows 1-2), `systemExplainer` p4 (annual rule of thumb), FAQ 1 | `definition`, `how often` (no default schedule stated) |
| 2 | The City warns that cleaning can push debris, so look before and after | `systemExplainer` p4 (debris pushed into the public sewer), `card.closing` (distance count) | process (camera pass, cleaning, second look), `limits.cannot`, `independent` |
| 3 | Grease, roots and street trees: what raises the question | `systemExplainer` p2 and p4 (once-a-year goal for the City's own lines; grease; roots through cracked pipe; deep-rooted plants), `municipalProgram` (street-tree rule) | `signals` (known risk factors), 'Do all homes need routine sewer cleaning?' |
| 4 | A policy for some stoppages, not a grant, and who to ask about permits | `municipalProgram` (lede, covers 1, dnc 5, steps 6), FAQ 3 and 7 | `limits.cannot`, 'What is preventative sewer maintenance?' (not an emergency response) |

## City of Chula Vista location page

| Section / card / fact | Status | Where / reason |
|---|---|---|
| hero.title and hero.intro | ADAPTED | Hero intro: first-foot fact and the City's annual rule of thumb tied to this service |
| heroForm.card.note, whoToCall.agency, responsibility table row 3 | ADAPTED | Section 4 (sewage reaching a street: 619-397-6000, the City's number); police line, hours LEFT OUT (FAQ 5) |
| whoToCall.company (phone, hours) | LEFT OUT | The San Diego City maintenance model carries no company phone |
| keyTakeaways 2-3, responsibility.answer, lateral card, table rows 1-2, 4 | ADAPTED | Hero, sections 1 and 4 |
| responsibility table row 5 and systemExplainer.card (distance count; does not establish the City's responsibility) | ADAPTED | Section 2 bullets; camera bullets LEFT OUT |
| responsibility.note (not legal advice) | LEFT OUT | No legal claim is made on the page |
| systemExplainer p2 (once-a-year goal for the City's own sewer lines) | ADAPTED | Section 3, stated as the City's goal for the public sewer, not extended to the lateral; the counts, lift stations and camera-mile goal LEFT OUT |
| systemExplainer p4 (grease, roots through cracked pipe, annual rule of thumb, debris pushed into the public sewer, no deep-rooted plants) | ADAPTED | Sections 1 to 3, quoted as the City's guidance, not a requirement and not our schedule |
| municipalProgram.lede, covers 1 | ADAPTED | Section 4 ('did not find'; reimbursement is for qualifying stoppages, not routine upkeep) |
| municipalProgram.covers 2 (street-tree work split) | ADAPTED | Fourth problem card and section 3: street-tree stoppages are treated differently and carry a 48-hour notice; the work split LEFT OUT |
| municipalProgram.covers 3, doesNotCover 1-3 | LEFT OUT | Relocation, elsewhere-in-the-lateral, size and discharge rules; no tie to maintenance |
| municipalProgram.doesNotCover 4-5 | ADAPTED | Section 4: 2014 revision with blank resolution number, confirm with Public Works (the City's number); review-time detail LEFT OUT |
| municipalProgram.steps 1-5, afterSteps | LEFT OUT | Stoppage-reporting procedure and cleanout detail; the 48-hour notice appears only in the fourth problem card |
| municipalProgram.steps 6 (permit before repair) | ADAPTED | Section 4 |
| municipalProgram.callout, closing | ADAPTED | Section 4: a visit is inspection and cleaning, not repair and not an emergency response |
| secondOpinion, buyingGuide | LEFT OUT | Not about maintenance; FAQ 8 is skipped for the same reason |
| (fourth problem card) | ADAPTED | Location-driven: a City street tree near the lateral, from `municipalProgram.covers 2` and steps 3-4 |
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
| Is Chula Vista served by CVSan or a separate sanitation district? | LEFT OUT | A correction about which agency serves Chula Vista; no tie to maintenance |
| Does the City reimburse owners for sewer lateral problems? | USED | Verbatim |
| What should I do if sewage backs up inside my Chula Vista home? | USED | Verbatim |
| Who do I call if sewage reaches a Chula Vista street or storm drain, and what are the hours? | USED | Verbatim |
| What does the City's policy say about street-tree roots and the 48-hour notice? | USED | Verbatim |
| Is a permit required for sewer lateral work in Chula Vista? | USED | Verbatim |
| Is a sewer inspection required when buying a Chula Vista home? | LEFT OUT | Not about maintenance |
| What does a sewer camera inspection show? | LEFT OUT | The service page asks 'What does a sewer camera inspection find?' |
| Do you repair or replace sewer lines? | LEFT OUT | The service page's 'Do you offer sewer repair or replacement?' answers it in full |

## Service page (`svc-preventative-sewer-maintenance`)

| Section / card / fact | Status | Where / reason |
|---|---|---|
| seoTitle, serviceDescription, hero.title | ADAPTED | Chula Vista added |
| metaDescription | LEFT OUT | Market-neutral; replaced |
| definition, 'How often should I schedule it?' (no default interval), 'Do all homes need routine sewer cleaning?' | ADAPTED | Sections 1 and 3: no interval, schedule, plan or contract is claimed |
| signals 1-3 (gurgling or recurring clogs, a backup that already happened, known risk factors) | USED | Problem cards 1-3 (`sl-blocks`) |
| process (history review, camera pass, cleaning, second look, video and findings, locating separate) | ADAPTED | Section 2 and inclusions; steps USED verbatim in `process`, equipment names only as confirmed |
| limits.cannot, independent band | ADAPTED | Sections 2 and 4 (cleaning does not repair pipe; we do not repair) |
| audiences, markets (3 hubs), faqTitle, request.* | LEFT OUT | Template slots; `coverage` replaces the hubs |
| inclusions (6 cards) | USED | `sl-blocks/preventative-sewer-maintenance.ts` |
| relatedPageIds (4), cta | ADAPTED | Chula Vista page, this service, camera inspection, sewer cleaning; cta rewritten |

### Service FAQ

Service FAQ (16): all 16 USED verbatim, including the cost question as the service page words it (DEC-088).

Total FAQ on the page: 6 Chula Vista + 16 service = 22.

## Facts to confirm

- The City's numbers (Public Works Operations 619-397-6000; Chula Vista Police after hours 619-691-5151) are used only as the City's, and the page tells the reader to confirm.
- The posted Council Policy 570-01 shows a 2014 revision with a blank resolution number; the page says to confirm the current text, not that it is current.
- Council Policy 570-01 is never called a grant, and no sentence says our footage or report satisfies its conditions.
- No interval, schedule, plan or contract is claimed; the annual figure is the City's rule of thumb, quoted as the City's.
