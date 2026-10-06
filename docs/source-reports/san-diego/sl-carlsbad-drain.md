# Source report: sl-carlsbad-drain

Page: Drain Cleaning in Carlsbad, CA (`carlsbadDrainContent`, `content/pages/sl-sd-carlsbad-drain.tsx`).

Sources:
- LOCATION: `carlsbadContent` in `content/pages/san-diego-carlsbad.tsx` (City of Carlsbad, Leucadia Wastewater District and Vallecitos Water District facts read 2026-10-04; most pages are undated, so the page says "confirm with the agency" and states no dates).
- SERVICE: `svc-drain-cleaning` `v2` in `content/pages/services.tsx`, plus `content/pages/sl-blocks/`.

Status key: USED = text taken as published; ADAPTED = fact kept, wording changed to tie it to this service; LEFT OUT = not on this page (reason given).

Carlsbad is served by more than one sewer agency. Each agency's wording is shown separately and the page never says which agency serves an address; the City's sewer district map is the pointer.

## The four body sections and their sources

| # | h2 on the page | Carlsbad source | Service source |
|---|---|---|---|
| 1 | Three agencies describe the lateral three ways, and your drains sit upstream | `responsibility` (answer, lateral card, table rows 1-2), FAQ 1 and 2 | `definition.supporting` 1, `limits.cannot` (public main and connection) |
| 2 | One drain, several drains, or water coming up | `heroForm.card.note`, `whoToCall` (all three agencies' numbers, company phone), FAQ 6 | `signals`, `triage` rows 1, 2, 5 |
| 3 | The City's upkeep advice and LWD's warning about roots | `systemExplainer` p3 (City guidance) and p4 (LWD) | `signals` (clogs that keep returning), `triage` row 4, `limits.can`/`cannot` (roots) |
| 4 | Two grants, and LWD says cleaning does not qualify | `municipalProgram` (lede, covers, doesNotCover, whoCanApply, callout), FAQ 3-5 | `limits.cannot`, `ask.keep`, `independent.note` |

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
| Is a sewer inspection required when buying a Carlsbad home? | USED | Verbatim; a seller or buyer with recurring drains may ask, and the answer says none found |
| What does a sewer camera inspection show? | LEFT OUT | The service page answers camera questions |
| Do you repair or replace sewer lines? | LEFT OUT | The service FAQ's repair answers cover it |

### Per-page notes on location facts

- City maintenance guidance (annual professional cleaning; sooner with odor or frequent clogs): ADAPTED, section 3, quoted as the City's. The three-to-five-year camera interval and the cleanout distance: LEFT OUT (camera material; section 3 needs only the cleaning guidance).
- City cleanout-cap warning (removal causes a sewer spill, a health violation): ADAPTED, section 2 and the fourth problem card.
- LWD roots and obstructions statement: ADAPTED, section 3. LWD storm and damaged-lateral statement: LEFT OUT (backup and maintenance pages carry it).
- All four phone numbers (City, City nights and weekends, LWD, VWD): ADAPTED, section 2, each marked as the agencies', not ours; VWD's "no separate sewer emergency number found" kept. Company phone from `marketOperatingDetail`, as the Chula Vista drain page does.
- Grants (City $3,000; LWD 50% up to $3,000; LWD inspection and cleaning do not qualify; VWD none found; no balance posted): ADAPTED, section 4, no dates and no claim either is open. City page silence on cleaning costs: LEFT OUT.
- City owner-billing note, permit terms, Sept 25 LWD notice: LEFT OUT (FAQ carries permit terms; the notice is a dated item not needed here).

## Service page (`svc-drain-cleaning`)

| Section / card / fact | Status | Where / reason |
|---|---|---|
| seoTitle | ADAPTED | 'Drain Cleaning in Carlsbad, CA' |
| metaDescription | LEFT OUT | Market-neutral; replaced |
| serviceDescription / definition.answer | ADAPTED | Same definition, Carlsbad added |
| hero.title, hero.intro (restores flow; no repair) | ADAPTED | Hero intro; no-repair line in section 4 and FAQ |
| definition.supporting 1 (drain vs sewer cleaning) | ADAPTED | Section 1 |
| definition.supporting 2, definition.scope | ADAPTED | FAQ carries camera separation; scope in section 4 |
| signals 1, 2, 4 | USED | Problem cards 1-3 (`sl-blocks/drain-cleaning.ts`) |
| signals 3 (gurgling), 6 (water or sewage coming up) | ADAPTED | Section 2 bullets |
| signals 5 (odors) | LEFT OUT | FAQ 'What causes sewage-like odors?' |
| triage rows 1, 2, 5 | ADAPTED | Section 2 |
| triage row 3 (lower drains back up) | LEFT OUT | Slot-limited; FAQ carries it |
| triage row 4 (clogs again) | ADAPTED | Section 3 |
| limits.can (4), limits.callout, secondaryLimits, methods table, decision | LEFT OUT | FAQ answers carry grease, roots, wipes, methods, camera limits |
| limits.cannot: cracked/broken/collapsed; offset or joint; roots at a joint | ADAPTED | Section 4 |
| limits.cannot: public main or its connection | ADAPTED | Section 1 |
| limits.cannot: line the equipment cannot pass; process.prep | LEFT OUT | No slot; FAQ carries them |
| process steps 1 to 5 | USED | `process`, verbatim; equipment names only as confirmed |
| independent band | ADAPTED | Section 4 last sentence |
| ask items: video, written findings | USED | Inclusion 6 |
| ask items: limits, access point, cleaning record, locating | LEFT OUT | FAQ carries them |
| ask.keep | ADAPTED | Section 4 (compare estimates) |
| audiences, markets (3 hubs), faqTitle, situations, terms, request.* | LEFT OUT | Template slots; `coverage` replaces the hubs |
| relatedPageIds (4), cta, inclusions (6) | ADAPTED / USED | Carlsbad page, this service, sewer cleaning, camera inspection; cta rewritten; inclusions from `sl-blocks` |
| fourth problem card: cleanout cap pulled to relieve a backup | ADAPTED | From the City's cleanout-cap warning |

### Service FAQ

Service FAQ (37): 34 USED verbatim, 3 LEFT OUT: "Do you clean drains in St. Louis, San Diego, and Las Vegas?" (area page; the hub's question), "Can drain cleaning fix a broken or collapsed pipe?" (duplicate of "Does drain cleaning repair a damaged pipe?"), "Can cleaning remove tree roots?" (duplicate of "Can tree roots grow into drain pipes?"). Cost and timing questions carried as the service page words them (DEC-088).

Total FAQ on the page: 7 Carlsbad + 1 buying question + 34 service = 42 (the buying question is kept).

## Facts to confirm

- Whether the agencies' numbers (City 442-339-2722 and 760-931-2197, LWD 760-753-0155, VWD (760) 744-0460) are current; marked as theirs and the page says confirm.
- Whether the City and LWD grants are open: neither page posts a balance, so the page does not say either is open.
- `sl-carlsbad-drain` is not yet registered in `data/pages/approved-pages.ts` (only `sl-carlsbad-camera` and `sl-carlsbad-prepurchase` are).
