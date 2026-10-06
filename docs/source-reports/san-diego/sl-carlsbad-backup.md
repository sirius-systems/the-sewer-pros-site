# Source report: sl-carlsbad-backup

Page: Recurring Sewer Backup Diagnosis in Carlsbad, CA (`carlsbadBackupContent`, `content/pages/sl-sd-carlsbad-backup.tsx`).

Sources:
- LOCATION: `carlsbadContent` in `content/pages/san-diego-carlsbad.tsx` (City of Carlsbad, Leucadia Wastewater District and Vallecitos Water District facts read 2026-10-04; most pages are undated, so the page says "confirm with the agency" and states no dates).
- SERVICE: `svc-recurring-sewer-backup-diagnosis` `v2` in `content/pages/services.tsx`, plus `content/pages/sl-blocks/`.

Status key: USED = text taken as published; ADAPTED = fact kept, wording changed to tie it to this service; LEFT OUT = not on this page (reason given).

Carlsbad is served by more than one sewer agency. Each agency's wording is shown separately and the page never says which agency serves an address; the City's sewer district map is the pointer.

## The four body sections and their sources

| # | h2 on the page | Carlsbad source | Service source |
|---|---|---|---|
| 1 | A repeat backup: an agency's main, or your lateral? | `responsibility` (answer, cards, table rows 1-2), FAQ 1 and 2 | FAQ 'Is a recurring backup the city's problem or mine?', `limits.cannot` |
| 2 | The City's early signs and LWD's warning about roots and storms | `systemExplainer` p3 (City) and p4 (LWD) | `causes`, `causes.after`, `signals` |
| 3 | Who to call first, and why the cleanout cap stays on | `whoToCall` (all agencies' numbers), `responsibility` table row 3 (owner may be billed), `systemExplainer` p3 (cap) | `limits` (distance, not responsibility) |
| 4 | Grants help repairs, not diagnosis, so get the evidence first | `municipalProgram` (lede, covers, doesNotCover 1 and 3, callout), FAQ 3-5 | `independent.note`, `ask.keep`, `definition.supporting` 2 |

## Carlsbad location page (`carlsbadContent`)

| Section / card / fact | Status | Where / reason |
|---|---|---|
| seoTitle / metaDescription | ADAPTED | Service name swapped in; page-specific metaDescription |
| hero.title / hero.intro (three agencies; two publish lateral grants) | ADAPTED | Page hero intro and H1; grant fact moved to the grants section |
| heroForm (bullets, founding year, request card, form, hours) | LEFT OUT | Template supplies its own form; founding-year line not carried onto service pages |
| heroForm.card.note (call the agency that serves your address) | ADAPTED | Body section on who to call, with each agency's number marked as the agency's |
| faqHeading, faqSchemaApproved, keyTakeaways.jumpNav, serviceCards, helpBar | LEFT OUT | Template-level or hub elements |
| keyTakeaways 1 (not one agency; City map is the pointer) | ADAPTED | Never says which agency serves an address; map named as the pointer |
| keyTakeaways 2 (owner carries the lateral under all three agencies' wording) | ADAPTED | Section 1 and hero, each agency worded separately |
| keyTakeaways 3 (City and LWD grants up to $3,000, different rules; none found from VWD; no balance posted) | ADAPTED | Grants section |
| responsibility.answer (City, VWD, LWD wording) | ADAPTED | Section 1, each agency separate |
| responsibility cards and table rows (who runs it; where it ends; who to contact; what help exists) | ADAPTED | Sections 1, 3 and 4 as noted per page |
| responsibility table row 5 (where an inspection helps) | LEFT OUT | Camera is a separate service |
| responsibility.note (not legal advice) | LEFT OUT | No legal claim is made on the page |
| systemExplainer p1 (288 miles, Encina, LWD independent district, VWD service area) | LEFT OUT | System description with no tie to this service; counts not reused |
| systemExplainer p2 (not stated whether combined or separate, or age) | LEFT OUT | No age or system-type figure is stated |
| systemExplainer p3 (City maintenance guidance: annual cleaning, camera every three to five years, cleanout within three to five feet, cap on tight, removing cap is a spill and health violation) | see per-page notes | Quoted as the City's guidance only |
| systemExplainer p4 (LWD: roots or obstructions block a lateral; damaged lateral backups, especially storms) | see per-page notes | Quoted as LWD's statement only |
| systemExplainer p5 and card (camera can show; distance count) | LEFT OUT / ADAPTED | Distance-count limit reused where noted; camera list left to the service page |
| whoToCall (City 442-339-2722, 760-931-2197 nights and weekends; LWD 760-753-0155; VWD (760) 744-0460, no separate sewer emergency number found) | see per-page notes | Each marked as the agency's, not ours |
| whoToCall.company (phone, hours) | see per-page notes | Phone read from `marketOperatingDetail['san-diego-ca']` only where stated |
| municipalProgram (City up to $3,000 replace or rehabilitate; LWD 50% up to $3,000, repair; LWD says inspection and cleaning do not qualify; City page silent on cleaning; VWD none found; no balance posted) | see per-page notes | No dates, no claim either program is open |
| municipalProgram steps (first come first served; licensed plumber; staff view; payment depends on funds) | LEFT OUT | Procedure with no tie to this service; FAQ carries them |
| secondOpinion, buyingGuide (links, CTA, agents block) | LEFT OUT | Hub elements; buying FAQ carried only where relevant |
| nearbyAreas (six other San Diego-area locations; hub link) | ADAPTED | `coverage`: the six other locations; market hub link LEFT OUT |
| finalCta | ADAPTED | Title becomes `cta.title`; body rewritten |
| sources (12 links, lastReviewed, closingNote) | USED | `sources: carlsbadContent.sources`. Most pages undated, so the page says confirm with the agency and states no dates |
| (no housingAge, no reviewBand) | n/a | None stated on the location page |

### Carlsbad FAQ (9)

| Question | Status | Reason |
|---|---|---|
| Who is responsible for the sewer lateral in Carlsbad? | USED | Verbatim |
| Which agency serves my Carlsbad address? | USED | Verbatim (points to the City's map; the page never answers for an address) |
| How much is the City of Carlsbad sewer lateral grant? | USED | Verbatim |
| Does the City of Carlsbad grant cover the southern part of the city? | USED | Verbatim |
| What does the Leucadia Wastewater District lateral grant cover? | USED | Verbatim |
| What number do I call for a sewer spill in Carlsbad? | USED | Verbatim; the agencies' numbers, not ours |
| Is a permit required for sewer lateral work in Carlsbad? | USED | Verbatim; the agencies' terms |
| Is a sewer inspection required when buying a Carlsbad home? | USED | Verbatim; the answer says none found and does not address state disclosure law |
| What does a sewer camera inspection show? | LEFT OUT | The service page answers camera questions |
| Do you repair or replace sewer lines? | LEFT OUT | The service FAQ's repair answers cover it |

### Per-page notes on location facts

- City early-warning guidance (check sooner with odor or frequent clogs): ADAPTED, section 2. Annual cleaning and three-to-five-year camera interval: LEFT OUT (maintenance page; no tie to a repeat backup).
- LWD roots and obstructions, and damaged lateral backups especially during storms: ADAPTED, section 2 and the fourth problem card, quoted as LWD's.
- City cleanout-cap warning and owner-billing note: ADAPTED, section 3. Cleanout distance and tight-cap detail: LEFT OUT.
- All four phone numbers: ADAPTED, section 3, each marked as the agencies', not ours; company phone LEFT OUT of the body (the Chula Vista backup page does the same).
- Grants (City $3,000; LWD 50% up to $3,000; LWD inspection and cleaning do not qualify; VWD none found; no balance posted; neither page lists a camera inspection as a requirement): ADAPTED, section 4, no dates.
- City 'did not find a rule on who pays for damage an agency causes': LEFT OUT (no tie to a diagnosis).

## Service page (`svc-recurring-sewer-backup-diagnosis`)

| Section / card / fact | Status | Where / reason |
|---|---|---|
| seoTitle, serviceDescription, definition.answer | ADAPTED | Carlsbad added |
| metaDescription | LEFT OUT | Market-neutral; replaced |
| hero.scope, definition.supporting, definition.scope | ADAPTED | Hero intro; scope in section 4 and FAQ |
| signals 1-7 | USED / ADAPTED | Problem cards (`sl-blocks`); the rest in FAQ |
| causes (7 items) and causes.after | ADAPTED | Section 2 (cleaning does not repair the opening a root came through, a sag or a damaged joint) |
| limits.can / cannot / callout | ADAPTED | Sections 1 and 3 (footage applies to the segment inspected; does not establish responsibility) |
| process steps 1 to 6, prep | USED / LEFT OUT | `process` verbatim; prep carried by FAQ |
| decision table, aside, links | LEFT OUT | FAQ carries them |
| independent band (incl. further evaluation outside our scope) | ADAPTED | Section 4 |
| ask items and keep | ADAPTED | Section 4 (keep the video, compare estimates); inclusions from `sl-blocks` |
| situations, audiences, markets | LEFT OUT | Template slots; `coverage` replaces the hubs |
| relatedPageIds (4), cta | ADAPTED | Carlsbad page, this service, camera inspection, cleaning with camera; cta rewritten |
| fourth problem card: backups after storms | ADAPTED | From LWD's storm statement |

### Service FAQ

All service FAQ questions are USED verbatim (cost and same-day answers as the service page words them, DEC-088 and DEC-139). Total FAQ on the page: 8 Carlsbad + the service FAQ.

## Facts to confirm

- Whether the agencies' numbers are current; marked as theirs and the page says confirm.
- Whether the City and LWD grants are open: neither page posts a balance, so the page does not say either is open.
- `sl-carlsbad-backup` is not yet registered in `data/pages/approved-pages.ts`.
