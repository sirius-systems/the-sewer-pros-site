# Source report: sl-carlsbad-maintenance

Page: Preventative Sewer Maintenance in Carlsbad, CA (`carlsbadMaintenanceContent`, `content/pages/sl-sd-carlsbad-maintenance.tsx`).

Sources:
- LOCATION: `carlsbadContent` in `content/pages/san-diego-carlsbad.tsx` (City of Carlsbad, Leucadia Wastewater District and Vallecitos Water District facts read 2026-10-04; most pages are undated, so the page says "confirm with the agency" and states no dates).
- SERVICE: `svc-preventative-sewer-maintenance` `v2` in `content/pages/services.tsx`, plus `content/pages/sl-blocks/`.

Status key: USED = text taken as published; ADAPTED = fact kept, wording changed to tie it to this service; LEFT OUT = not on this page (reason given).

Carlsbad is served by more than one sewer agency. Each agency's wording is shown separately and the page never says which agency serves an address; the City's sewer district map is the pointer.

## The four body sections and their sources

| # | h2 on the page | Carlsbad source | Service source |
|---|---|---|---|
| 1 | The lateral is the owner's, and the City's guidance sets a rhythm | `responsibility` (answer, lateral card), `systemExplainer` p3 (annual cleaning; camera every three to five years) | `definition.supporting` 3, FAQ 'How often should I schedule it?' |
| 2 | The cleanout is the door, and its cap stays on | `systemExplainer` p3 (cleanout, three to five feet, cap on tight), `systemExplainer.card.closing` (distance count) | `process` steps 2-4, `limits.cannot`, `limits.callout` |
| 3 | Roots, storms and the lines that raise the question | `systemExplainer` p3 (odor, frequent clogs) and p4 (LWD) | `signals` (risk factors), `definition.supporting` 3 |
| 4 | Grants cover repairs, and LWD says inspection and cleaning do not qualify | `municipalProgram` (lede, covers, doesNotCover 1-2, callout), `whoToCall` (report a spill: the agency's own number), `buyingGuide` (map pointer) | `definition.answer`, `limits.callout` |

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
| Is a sewer inspection required when buying a Carlsbad home? | LEFT OUT | Not about maintenance; a sale-time rule is not tied to upkeep |
| What does a sewer camera inspection show? | LEFT OUT | The service page answers camera questions |
| Do you repair or replace sewer lines? | LEFT OUT | The service FAQ's repair answers cover it |

### Per-page notes on location facts

- City maintenance guidance (annual cleaning; camera every three to five years; check sooner with odor or frequent clogs): ADAPTED, sections 1 and 3 and the fourth problem card, quoted as the City's guidance, not a requirement and not our schedule. Not carried to LWD or VWD.
- City cleanout description and tight-cap warning: ADAPTED, section 2. The spill and health-violation wording: LEFT OUT here (drain and backup pages carry it).
- LWD roots and storm statements: ADAPTED, section 3.
- Grants: ADAPTED, section 4 (LWD inspection and cleaning do not qualify; City page silent on cleaning and inspection costs; VWD none found; no balance posted). City step detail: LEFT OUT.
- Phone numbers: LEFT OUT of the body (a maintenance visit is not an emergency response; section 4 says to call the agency that serves the address, whose number is its own). FAQ 6 carries the numbers. Company phone LEFT OUT.

## Service page (`svc-preventative-sewer-maintenance`)

| Section / card / fact | Status | Where / reason |
|---|---|---|
| seoTitle, serviceDescription, definition.answer | ADAPTED | Carlsbad added |
| metaDescription | LEFT OUT | Market-neutral; replaced |
| definition.supporting 1-3 (no default schedule) | ADAPTED | Sections 1 and 3 |
| definition.scope, hero.scope | ADAPTED | Section 2 last bullet; no repair |
| signals 1-6 | USED / ADAPTED | Problem cards (`sl-blocks`); known risk factors in section 3 |
| limits can / cannot / callout | ADAPTED | Section 2 bullets (distance; does not establish where a main begins; cleaning does not repair pipe) |
| process steps 1-6, prep | USED | `process` verbatim; section 2 sequence |
| decision, comparison, links | LEFT OUT | FAQ carries them |
| ask items and keep | LEFT OUT | Inclusions from `sl-blocks` carry the paperwork |
| audiences, markets | LEFT OUT | Template slots; `coverage` replaces the hubs |
| relatedPageIds (4), cta | ADAPTED | Carlsbad page, this service, camera inspection, sewer cleaning; cta rewritten |
| fourth problem card: a lateral nobody has looked at on camera | ADAPTED | From the City's camera guidance |

### Service FAQ

All service FAQ questions are USED verbatim, including 'How often should I schedule it?' (no single interval; some local utilities publish guidance). Total FAQ on the page: 6 Carlsbad + the service FAQ.

## Facts to confirm

- Whether the City's maintenance guidance is current; marked as the City's and the page says it is not a requirement.
- Whether the City and LWD grants are open: neither page posts a balance, so the page does not say either is open.
- `sl-carlsbad-maintenance` is not yet registered in `data/pages/approved-pages.ts`.
