# Source report: sl-san-marcos-backup

Page: Recurring Sewer Backup Diagnosis in San Marcos, CA (`sanMarcosBackupContent`, `content/pages/sl-sd-san-marcos-backup.tsx`).

Sources:
- LOCATION: `sanMarcosContent` in `content/pages/san-diego-san-marcos.tsx` (City of San Marcos and Vallecitos Water District pages read 2026-10-04; every page shows no current date, so the page says "confirm with the agency" and states no dates).
- SERVICE: `svc-recurring-sewer-backup-diagnosis` `v2` in `content/pages/services.tsx`, plus `content/pages/sl-blocks/recurring-sewer-backup-diagnosis.ts`.

Status key: USED = text taken as published; ADAPTED = fact kept, wording changed to tie it to this service; LEFT OUT = not on this page (reason given).

## The four body sections and their sources

| # | h2 on the page | San Marcos source | Service source |
|---|---|---|---|
| 1 | A repeat backup: which agency, and which pipe? | keyTakeaways 1, responsibility, whoToCall.agency (911, main number, O&M 24/7), FAQ 1-3, 7 | `limits.cannot`, `independent` |
| 2 | Rainwater and smoke tests cover district lines, not yours | systemExplainer (rainwater, smoke testing) | `signals`, `limits.cannot` |
| 3 | The lateral is the owner's, and no repair program turned up | responsibility, municipalProgram (lede, Ordinance No. 225), FAQ 2, 4 | `limits.cannot` (cleaning does not repair) |
| 4 | Permits, installers and a second opinion before any work | municipalProgram.covers (no private connections installed by the district), doesNotCover (permit), FAQ 5 | `independent.note`, `ask.keep`, second-opinion path |

## San Marcos location page

| Section / card / fact | Status | Where / reason |
|---|---|---|
| seoTitle / metaDescription | ADAPTED | Service name swapped in; page-specific metaDescription |
| heroForm (bullets, founding-year line, request card, form, hours) | LEFT OUT | Template supplies its own form; founding-year line not carried onto service pages |
| faqHeading, faqSchemaApproved, keyTakeaways.jumpNav, serviceCards (9), helpBar | LEFT OUT | Template-level or hub grid; related links cover siblings |
| keyTakeaways 1 (City not the provider; three named agencies; confirm which serves the address) | ADAPTED | Body section 1 and hero: each agency's wording shown separately; no agency is assigned to an address |
| keyTakeaways 2 and responsibility (answer, both cards, table rows: Vallecitos maintains the main; owner responsible for the lateral from the building through its connection) | ADAPTED | Hero and body section 1; no claim about Vista or Rincon rules |
| keyTakeaways 3 and municipalProgram.lede (no lateral repair program found; Ordinance No. 225 reimbursement is a main extension; 'none found', undated) | ADAPTED | Program section; 'did not find' wording, Ordinance No. 225 cited only as 'main-line extension' (number itself kept off drain, prepurchase and maintenance pages, used on backup) |
| systemExplainer (smoke testing; rainwater; 284 miles and four lift stations; no age or system-type statement) | see rows below | Used only where a section row says so; no age or system type is given on any page |
| systemExplainer.card (camera shows; distance count; does not establish the connection or responsibility) | ADAPTED | Camera limits as 'records where along the line a condition sits; does not establish where the lateral meets the main' |
| whoToCall.agency (Vallecitos (760) 744-0460; 911 for a sewer spill; O&M on call 24/7) | see rows below | Used only where a section row says so, always marked the district's. (760) 745-2761 LEFT OUT everywhere: the district does not describe it as a sewer line |
| municipalProgram.covers (district maintains mains; owner's lateral duty; no private connections installed by district; plan check, fees, deposit, one lateral per APN) | ADAPTED | Owner duty and 'district does not install private connections' used where noted; plan check, fees, deposit and APN rule LEFT OUT (new-connection detail) |
| municipalProgram.doesNotCover (no grant; no inspection requirement; no permit statement; no damage policy; no sewer after-hours number; no parcel map; system type unknown) | ADAPTED | Grant, inspection-requirement and permit items used where noted; damage-policy item LEFT OUT (no tie); parcel-map and agency items shape the 'we do not say which agency' wording |
| municipalProgram.whoCanApply, callout, closing (confirm the agency; no agency pays for our services; we do not repair) | ADAPTED | 'Confirm with the district' and 'we do not repair' wording; no claim any agency pays for our work |
| secondOpinion (ledes, steps, callout, CTA) | LEFT OUT | Hub element; the estimate-comparison line carries the idea where used |
| nearbyAreas (six San Diego locations; market hub) | ADAPTED | `coverage`: the six other San Diego locations; market hub link LEFT OUT |
| finalCta | ADAPTED | Title becomes `cta.title`; paragraphs and bullets replaced by `cta.body` |
| sources (9 links, lastReviewed, closingNote) | USED | `sources: sanMarcosContent.sources`; undated pages, so 'confirm with the agency' |
| (no housingAge and no reviewBand on the San Marcos location page) | n/a | No Census figure and no review figures stated |
| whoToCall.company (phone, hours) | LEFT OUT | No company phone in the body copy, as the Chula Vista backup page |
| buyingGuide | LEFT OUT | Not about backups; FAQ 8 carries the sale-time answer |

### San Marcos FAQ (10)

| Question | Status | Reason |
|---|---|---|
| Who provides sewer service in San Marcos? | USED | Verbatim; the City says it does not provide sewer service |
| Is the sewer lateral the owner's at a Vallecitos-served San Marcos property, and where does that end? | USED | Verbatim |
| How do I find out which agency serves my San Marcos address? | USED | Verbatim; the page never assigns an agency to an address |
| Does Vallecitos Water District offer a lateral repair grant or reimbursement program? | USED | Verbatim ('none found' wording) |
| Who installs a sewer lateral in the Vallecitos area, and is the work inspected? | USED | Verbatim; district statements, not ours |
| Does repairing or replacing an existing lateral need a permit in San Marcos? | USED | Verbatim |
| What should I do about a sewer spill or backup in the Vallecitos area? | USED | Verbatim; the district's numbers, with (760) 745-2761 not presented as a sewer line |
| Is a sewer inspection required when buying a San Marcos home? | USED | Verbatim |
| What does a sewer camera inspection show? | LEFT OUT | The service page answers it in full ("What can a sewer camera see?") |
| Do you repair or replace sewer lines? | USED | Verbatim |

## Service page (`svc-recurring-sewer-backup-diagnosis`)

Same rows as `sl-chula-vista-backup.md`, with the San Marcos facts swapped in: definition, process (verbatim), signals and problem cards (4, from `sl-blocks`), inclusions (6) USED; causes and cleaning-limits ADAPTED in sections 2 and 3; fourth problem card (a sewer spill and no agency named yet) is the `sl-blocks` fourth card, retitled and rewritten from `whoToCall.agency` ADAPTED. Service FAQ all USED; cost and same-day answers carried as published (DEC-088, DEC-139). Total FAQ = 9 San Marcos + the service questions.

## Facts to confirm

- District 911 instruction and (760) 744-0460 are the district's, undated; the page says they are not ours.
- Whether any link between rainwater and a given property's backups exists: the district's pages draw none, and the page says so.
