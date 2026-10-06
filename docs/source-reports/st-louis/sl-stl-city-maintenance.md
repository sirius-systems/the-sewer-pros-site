# Source report: sl-stl-city-maintenance

Page: Preventative Sewer Maintenance in St. Louis City, MO (`stLouisCityMaintenanceContent`, `content/pages/sl-stl-city-maintenance.tsx`).

Sources:
- LOCATION: `stLouisCityContent` in `content/pages/st-louis-city.tsx` (MSD and City facts read 2026-10-03; the City program page is dated 2014).
- SERVICE: `svc-preventative-sewer-maintenance` `v2` in `content/pages/services.tsx`, plus `content/pages/sl-blocks/preventative-sewer-maintenance.ts`.

Status key: USED = text taken as published; ADAPTED = fact kept, wording changed to tie it to this service; LEFT OUT = not on this page (reason given).

Facts deliberately NOT used on any St. Louis City service page: the "about 58 percent built in 1939 or earlier" figure (primary Census table check pending), the program's $28 fee, and anything from the Chesterfield, Ballwin, Florissant or St. Charles pages.

## The four body sections and their sources

| # | h2 on the page | St. Louis City source | Service source |
|---|---|---|---|
| 1 | The lateral is yours to the MSD main, so its upkeep is too | `responsibility` (answer, cards, table rows 1-2), FAQ "Does MSD fix the sewer line between my house and the street?" | `definition.supporting` 3, `process` (camera pass, then cleaning when appropriate); no interval stated |
| 2 | The City program will not pay for upkeep, and cleaning is not repair | `municipalProgram` (lede, paragraphs 1-3, doesNotCover, afterSteps) | `limits.callout`, `ask.keep`, FAQ "Do you offer sewer repair or replacement?" |
| 3 | Older laterals and combined sewers, and what really raises the question | `buyingGuide.body`, `housingAge` paragraph 2 and table, `systemExplainer` p1 and p4 | `signals` 6 (known risk factors), `definition.supporting` 3 |
| 4 | MSD for a backup, and what a maintenance visit is not | `whoToCall`, `systemExplainer` p3 (Get the Rain Out) | `process` step 6 (findings note what was viewed), `definition.supporting` 2 |

## St. Louis City location page

| Section / card / fact | Status | Where / reason |
|---|---|---|
| seoTitle | ADAPTED | Service name swapped in |
| metaDescription | LEFT OUT | Replaced by a page-specific description |
| hero.title | ADAPTED | H1 names this service |
| hero.intro (MSD maintains the main; lateral to it is private; independent evidence) | ADAPTED | Hero intro: the lateral is the owner's to maintain |
| heroForm bullets (camera findings; cleaning when evidence supports it; family-operated since 2011) | LEFT OUT | Shell supplies trust strip |
| heroForm request card, form, hours line | LEFT OUT | Template supplies its own request form; no company phone in the body (as on the Las Vegas page) |
| heroForm card note (sewage backing up: contact MSD first, (314) 768-6260) | ADAPTED | Section 4 (MSD report line, labelled MSD's) |
| faqHeading, faqSchemaApproved | LEFT OUT | Template sets it |
| keyTakeaways 1 (MSD maintains the main; the lateral is private property) | ADAPTED | Section 1 |
| keyTakeaways 2 (combined sewers; only an inspection shows your own line) | ADAPTED | Section 3 |
| keyTakeaways 3 (recorded evidence before you clean, buy, or approve major work) | LEFT OUT | Camera evidence before a decision is not the maintenance point |
| keyTakeaways jumpNav | LEFT OUT | No on-page anchors in this template |
| serviceCards (9) and helpBar | LEFT OUT | Hub grid; related links cover siblings |
| responsibility.answer (MSD maintains the main; lateral and connection private, even under street or alley) | ADAPTED | Section 1 |
| responsibility card: the public sewer main (MSD, not a City department) | ADAPTED | Section 1 |
| responsibility card: the lateral line (private, including under the right-of-way) | ADAPTED | Section 1 and fourth problem card |
| responsibility table: Who owns it | ADAPTED | Section 1 |
| responsibility table: Who maintains and repairs it | ADAPTED | Section 1 |
| responsibility table: Who to contact first (MSD (314) 768-6260) | ADAPTED | Section 4 |
| responsibility table: What help exists (City program, six or fewer units, not clogs or roots) | ADAPTED | Section 2 |
| responsibility table: Where an inspection helps | LEFT OUT | Camera inspection is a separate service |
| responsibility.note (general information, not legal advice) | LEFT OUT | Page uses "confirm" wording |
| systemExplainer p1 (most of the City is served by combined sewers) | ADAPTED | Section 3 |
| systemExplainer p2 (MSD: among the oldest in the country, brick tunnels; County mostly separate) | LEFT OUT | Age of the combined sewers is not a maintenance fact |
| systemExplainer p3 (intense rain can overwhelm capacity; gutters, sump pumps, yard drains; Get the Rain Out) | ADAPTED | Section 3 (rain capacity) and section 4 (Get the Rain Out reroutes gutters, sump pumps, yard drains; MSD's program, not our visit) |
| systemExplainer p4 (system-level facts, not the condition of any one lateral) | ADAPTED | Section 3 ("a system-level fact that your own maintenance does not change") |
| systemExplainer card (what a camera can show on your lateral; closing) | LEFT OUT | Camera list is carried by the service FAQ "What does a sewer camera inspection find?" |
| housingAge p1 (the "about 58 percent built in 1939 or earlier" figure) | LEFT OUT | The 58 percent figure is not used on any page in this batch |
| housingAge p2 (lateral materials changed over decades; general industry timelines; many repaired or replaced) | ADAPTED | Section 3 ("general industry timelines, not a statement about any one home") |
| housingAge p3 (only an inspection shows material and condition; Census attribution) | LEFT OUT | Census attribution goes with the 58 percent figure, which is not used |
| housingAge.table (vitrified clay, cast iron, Orangeburg, PVC/ABS) | ADAPTED | Section 3 uses clay and cast iron only; Orangeburg and PVC/ABS rows LEFT OUT for length |
| whoToCall paragraph 1 (sewage through a floor drain, odor, overflow, missing manhole: report to MSD; MSD investigates) | ADAPTED | Section 4 |
| whoToCall paragraph 2 (if MSD or a plumber points to your lateral, or you want proof of it) | LEFT OUT | Not about maintenance |
| whoToCall.agency (MSD (314) 768-6260; report and building-backup links) | ADAPTED | Section 4: number only, labelled MSD's |
| whoToCall.company (company phone and hours) | LEFT OUT | No company phone on this page, as on the Las Vegas page |
| municipalProgram.lede (aimed at severe damage under the right-of-way, not routine clogs or roots) | ADAPTED | Section 2 |
| municipalProgram p1 (six or fewer units; fully paid real-estate taxes) | USED | Section 2 (six or fewer units; fully paid taxes) |
| municipalProgram p2 (replacement needs a plumbing permit and inspection; City-certified licensed plumbing contractors) | ADAPTED | Section 2 (permit and inspection; City-certified licensed plumbing contractors) |
| municipalProgram p3 (page dated 2014; the $28 fee; confirm with the Street Division) | ADAPTED | Section 2 ("confirm current terms with the Street Division"); the 2014 date and the $28 fee LEFT OUT |
| municipalProgram.covers (severe damage under the right-of-way; eligible properties) | LEFT OUT | Eligibility detail beyond section 2 |
| municipalProgram.doesNotCover (clogs or roots anywhere on the lateral; breaks under private property) | ADAPTED | Section 2 (clogs and roots anywhere on the lateral) |
| municipalProgram.steps (report the problem; licensed City plumber inspects; statement and video to the Street Department) | LEFT OUT | About the City application path; FAQ carries it |
| municipalProgram.afterSteps (contact the Street Division to confirm eligibility) | ADAPTED | Section 2 ("confirm current terms with the Street Division") |
| municipalProgram.callout (where an independent inspection fits; it does not replace the City step) | LEFT OUT | About an independent inspection, not maintenance |
| municipalProgram.closing (link to the lateral inspection and reporting service) | LEFT OUT | Link to a different service |
| secondOpinion (ledes, steps, callout, CTA) | LEFT OUT | Not a maintenance topic; the records sentence in section 2 carries the "keep the video" idea |
| buyingGuide.lede (a sewer scope is a separate, focused inspection; ask your home inspector) | LEFT OUT | Buying is not a maintenance topic |
| buyingGuide.body (older City properties, older infrastructure; the lateral is the buyer's after closing) | ADAPTED | Section 3 first sentence (older City properties are served by older infrastructure) |
| buyingGuide links and CTA | LEFT OUT | Hub elements |
| buyingGuide.agents (association affiliations, video and written findings, not legal advice) | LEFT OUT | Hub element |
| nearbyAreas (Chesterfield, Ballwin, Florissant, St. Charles, market hub) | ADAPTED | `coverage`: the other four St. Louis locations |
| finalCta (title, paragraphs, bullets, form) | ADAPTED | `cta.title`; paragraphs and bullets replaced by `cta.body` |
| sources (8 links, lastReviewed, closingNote) | USED | Same |
| servicePageIds | LEFT OUT | Location-page link list |

### St. Louis City FAQ (10)

| Question | Status | Reason |
|---|---|---|
| Who is responsible for a sewer blockage on private property in St. Louis? | USED | Verbatim; carried under the "In St. Louis City" group |
| Does MSD fix the sewer line between my house and the street? | USED | Verbatim; carried under the "In St. Louis City" group |
| What does a sewer camera inspection show? | LEFT OUT | Camera question; the service page asks "What does a sewer camera inspection find?" |
| Can a sewer line be cleaned instead of replaced? | USED | Verbatim; carried under the "In St. Louis City" group |
| Should I inspect the sewer before buying a house in St. Louis City? | LEFT OUT | About buying a home, not maintenance |
| What are possible signs of a blocked or damaged private lateral? | USED | Verbatim; carried under the "In St. Louis City" group |
| Why can heavy rain contribute to sewer backups in St. Louis City? | USED | Verbatim; carried under the "In St. Louis City" group |
| Does the City repair every private lateral under a street or alley? | USED | Verbatim; carried under the "In St. Louis City" group |
| How does a St. Louis City owner apply for the Sewer Lateral Repair Program? | USED | Verbatim; carried under the "In St. Louis City" group |
| Do you repair or replace sewer lines? | LEFT OUT | The service page's "Do you offer sewer repair or replacement?" answers it in full |

## Service page (`svc-preventative-sewer-maintenance`)

| Section / card / fact | Status | Where / reason |
|---|---|---|
| seoTitle | ADAPTED | "Preventative Sewer Maintenance in St. Louis City, MO" |
| metaDescription | LEFT OUT | Market-neutral; replaced |
| serviceDescription | ADAPTED | Same definition, St. Louis City, Missouri added |
| hero.title | ADAPTED | "Preventative Sewer Maintenance in St. Louis City" |
| hero.intro (planned inspection and cleaning before buildup becomes a backup) | ADAPTED | Hero intro |
| hero.scope bullets | LEFT OUT | Template element |
| definition.answer, supporting 1-3 | ADAPTED | Hero; section 1 (no interval); section 3 ("a line with no history of problems does not need a default schedule") |
| definition.scope | LEFT OUT | Scope note is in the FAQ and the template's request section |
| signals (6 items) | USED | Three cards in `sl-blocks` (gurgling or recurring clogs, a backup that has happened, known risk factors); known risk factors also in section 3 |
| limits (camera can and cannot) | LEFT OUT | FAQ "What does a sewer camera inspection find?" and "What can a sewer camera not see?" |
| limits.callout (cleaning does not repair) | ADAPTED | Section 2 |
| process steps 1 to 6 | USED | `process`, verbatim |
| process.prep | LEFT OUT | No slot |
| decision (camera first or cleaning first) | LEFT OUT | FAQ "Should a camera inspection come before cleaning?" |
| comparison table | LEFT OUT | Related links cover the siblings |
| ask items and keep | ADAPTED | Inclusions; section 2 (you keep the video and findings); section 4 last sentence (findings note what was viewed and what limited it) |
| audiences | LEFT OUT | Residential-first page; hub elements |
| markets (3 hubs) | LEFT OUT | Replaced by `coverage` |
| faqTitle, request.* | LEFT OUT | Template slots |
| relatedPageIds (6) | ADAPTED | St. Louis City page, this service, camera inspection, sewer cleaning |
| cta | ADAPTED | Rewritten for St. Louis City; wording from the Las Vegas page |
| inclusions (6 cards) | USED | `sl-blocks/preventative-sewer-maintenance` |

### Service FAQ (16)

All service questions are USED verbatim.

| Question | Status | Reason |
|---|---|---|
| All 16 service questions | USED | Verbatim. The cost, time and interval answers state no figure; no plan, contract or schedule is claimed |

Total FAQ on the page: 23 (7 St. Louis City + 16 service). Skips in code: three St. Louis City questions (camera show, repair or replace, buying a house).

Note: the St. Louis City location page does not state an inspection requirement or a periodic-inspection duty for existing laterals, so this page says neither (unlike Henderson).
