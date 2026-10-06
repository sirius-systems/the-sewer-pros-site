# Source report: sl-stl-city-prepurchase

Page: Pre-Purchase Sewer Inspection in St. Louis City, MO (`stLouisCityPrePurchaseContent`, `content/pages/sl-stl-city-prepurchase.tsx`).

Sources:
- LOCATION: `stLouisCityContent` in `content/pages/st-louis-city.tsx` (MSD and City facts read 2026-10-03; the City program page is dated 2014).
- SERVICE: `svc-pre-purchase-sewer-inspection` `v2` in `content/pages/services.tsx`, plus `SERVICE_PROBLEMS`, `SERVICE_INCLUSIONS` and `SERVICE_PROBLEM_SHOTS` in `content/pages/service-location-shared.ts`.

Status key: USED = text taken as published; ADAPTED = fact kept, wording changed to tie it to this service; LEFT OUT = not on this page (reason given).

Facts deliberately NOT used on any St. Louis City service page: the "about 58 percent built in 1939 or earlier" figure (primary Census table check pending), the program's $28 fee, and anything from the Chesterfield, Ballwin, Florissant or St. Charles pages.

## The four body sections and their sources

| # | h2 on the page | St. Louis City source | Service source |
|---|---|---|---|
| 1 | What you take on when a St. Louis City sale closes | `responsibility` (answer, cards, table), `buyingGuide.body`, FAQ "Does the City repair every private lateral" | `definition.supporting` 1, `limits.cannot` (connection and responsibility are not established) |
| 2 | The City repair program has limits a buyer should not assume away | `municipalProgram` (lede, paragraphs 1-3, doesNotCover, steps, callout) | `ask.keep`, `limits.cannot` (no repair prescribed), `independent.note` |
| 3 | Older City infrastructure, and what a scope shows of one lateral | `buyingGuide.body`, `housingAge` paragraph 2 and table, `systemExplainer` p1 and p4 | `limits.can`, `limits.callout` |
| 4 | MSD first for a backup, and where a scope fits in the purchase | `whoToCall`, `buyingGuide.lede`, `buyingGuide.agents` | `definition.supporting` 2, `signals` 3, `ask` (share with agent) |

## St. Louis City location page

| Section / card / fact | Status | Where / reason |
|---|---|---|
| seoTitle | ADAPTED | Service name swapped in |
| metaDescription | LEFT OUT | Replaced by a page-specific description |
| hero.title | ADAPTED | H1 names this service |
| hero.intro (MSD maintains the main; lateral to it is private; independent evidence) | ADAPTED | Hero intro: the lateral is the buyer's after closing |
| heroForm bullets (camera findings; cleaning when evidence supports it; family-operated since 2011) | LEFT OUT | Shell supplies trust strip |
| heroForm request card, form, hours line | LEFT OUT | Template supplies its own request form; no company phone in the body (as on the Las Vegas page) |
| heroForm card note (sewage backing up: contact MSD first, (314) 768-6260) | ADAPTED | Section 4 (MSD report line, labelled MSD's) |
| faqHeading, faqSchemaApproved | LEFT OUT | Template sets it |
| keyTakeaways 1 (MSD maintains the main; the lateral is private property) | ADAPTED | Section 1 |
| keyTakeaways 2 (combined sewers; only an inspection shows your own line) | ADAPTED | Section 3 (combined sewers; not a finding about one lateral) |
| keyTakeaways 3 (recorded evidence before you clean, buy, or approve major work) | ADAPTED | Hero and section 4 (recorded evidence before you buy) |
| keyTakeaways jumpNav | LEFT OUT | No on-page anchors in this template |
| serviceCards (9) and helpBar | LEFT OUT | Hub grid; related links cover siblings |
| responsibility.answer (MSD maintains the main; lateral and connection private, even under street or alley) | ADAPTED | Section 1 |
| responsibility card: the public sewer main (MSD, not a City department) | ADAPTED | Section 1 |
| responsibility card: the lateral line (private, including under the right-of-way) | ADAPTED | Section 1 |
| responsibility table: Who owns it | ADAPTED | Section 1 |
| responsibility table: Who maintains and repairs it | ADAPTED | Section 1 |
| responsibility table: Who to contact first (MSD (314) 768-6260) | ADAPTED | Section 4 |
| responsibility table: What help exists (City program, six or fewer units, not clogs or roots) | ADAPTED | Section 2 and fourth problem card |
| responsibility table: Where an inspection helps | ADAPTED | Section 1 (what a scope documents) |
| responsibility.note (general information, not legal advice) | ADAPTED | Section 4 ("not legal advice") |
| systemExplainer p1 (most of the City is served by combined sewers) | ADAPTED | Section 3 |
| systemExplainer p2 (MSD: among the oldest in the country, brick tunnels; County mostly separate) | LEFT OUT | Age of the combined sewers is not a purchase fact |
| systemExplainer p3 (intense rain can overwhelm capacity; gutters, sump pumps, yard drains; Get the Rain Out) | LEFT OUT | Gutter and sump detail is not a purchase fact; the rain point is kept via sx1 wording in section 3 |
| systemExplainer p4 (system-level facts, not the condition of any one lateral) | ADAPTED | Section 3 ("system-level fact, not a finding about the lateral you are buying") |
| systemExplainer card (what a camera can show on your lateral; closing) | ADAPTED | Section 3 (roots, cracks, offsets, standing water) |
| housingAge p1 (the "about 58 percent built in 1939 or earlier" figure) | LEFT OUT | The 58 percent figure is not used on any page in this batch; "older City properties are served by older infrastructure" (buyingGuide.body) carries the idea |
| housingAge p2 (lateral materials changed over decades; general industry timelines; many repaired or replaced) | ADAPTED | Section 3 (clay and cast iron timelines; "general industry timelines, not a statement about any one home"; many repaired or replaced) |
| housingAge p3 (only an inspection shows material and condition; Census attribution) | ADAPTED | Section 3 and inclusion on a clear result not proving the line is sound |
| housingAge.table (vitrified clay, cast iron, Orangeburg, PVC/ABS) | ADAPTED | Section 3 uses clay and cast iron only; Orangeburg and PVC/ABS rows LEFT OUT for length |
| whoToCall paragraph 1 (sewage through a floor drain, odor, overflow, missing manhole: report to MSD; MSD investigates) | ADAPTED | Section 4 (floor-drain backup: MSD, MSD investigates) |
| whoToCall paragraph 2 (if MSD or a plumber points to your lateral, or you want proof of it) | ADAPTED | Section 4 (if MSD or a plumber points to the lateral, or you want proof) |
| whoToCall.agency (MSD (314) 768-6260; report and building-backup links) | ADAPTED | Section 4: number only, labelled MSD's |
| whoToCall.company (company phone and hours) | LEFT OUT | No company phone on this page, as on the Las Vegas page |
| municipalProgram.lede (aimed at severe damage under the right-of-way, not routine clogs or roots) | ADAPTED | Section 2 |
| municipalProgram p1 (six or fewer units; fully paid real-estate taxes) | USED | Section 2 (six or fewer units; fully paid taxes) |
| municipalProgram p2 (replacement needs a plumbing permit and inspection; City-certified licensed plumbing contractors) | ADAPTED | Section 2 (permit and inspection; City-certified licensed plumbing contractors) |
| municipalProgram p3 (page dated 2014; the $28 fee; confirm with the Street Division) | ADAPTED | Section 2 (2014 page date, confirm with the Street Division); the $28 fee LEFT OUT |
| municipalProgram.covers (severe damage under the right-of-way; eligible properties) | ADAPTED | Section 2 and fourth problem card |
| municipalProgram.doesNotCover (clogs or roots anywhere on the lateral; breaks under private property) | ADAPTED | Section 2 (clogs, roots, private-property breaks) |
| municipalProgram.steps (report the problem; licensed City plumber inspects; statement and video to the Street Department) | ADAPTED | Section 2 ("the City decides eligibility"); application steps LEFT OUT (FAQ carries them) |
| municipalProgram.afterSteps (contact the Street Division to confirm eligibility) | ADAPTED | Section 2 ("confirm current terms with the Street Division") |
| municipalProgram.callout (where an independent inspection fits; it does not replace the City step) | ADAPTED | Section 2 ("a scope is not an eligibility finding") |
| municipalProgram.closing (link to the lateral inspection and reporting service) | LEFT OUT | Link to a different service |
| secondOpinion (ledes, steps, callout, CTA) | LEFT OUT | Second-opinion framing is not a pre-purchase topic here; the independent note is carried by "does not repair or replace" |
| buyingGuide.lede (a sewer scope is a separate, focused inspection; ask your home inspector) | ADAPTED | Section 4 (sewer scope is a separate, focused inspection; ask your home inspector) |
| buyingGuide.body (older City properties, older infrastructure; the lateral is the buyer's after closing) | ADAPTED | Sections 1 and 3 (older infrastructure; the lateral is the buyer's after closing) |
| buyingGuide links and CTA | LEFT OUT | Hub elements; related links cover them |
| buyingGuide.agents (association affiliations, video and written findings, not legal advice) | ADAPTED | Section 4 last sentence (share video and findings with agent and inspector; not legal advice); the association affiliations are LEFT OUT |
| nearbyAreas (Chesterfield, Ballwin, Florissant, St. Charles, market hub) | ADAPTED | `coverage`: the other four St. Louis locations |
| finalCta (title, paragraphs, bullets, form) | ADAPTED | `cta.title`; paragraphs and bullets replaced by `cta.body` |
| sources (8 links, lastReviewed, closingNote) | USED | Same |
| servicePageIds | LEFT OUT | Location-page link list |

### St. Louis City FAQ (10)

| Question | Status | Reason |
|---|---|---|
| Who is responsible for a sewer blockage on private property in St. Louis? | USED | Verbatim; carried under the "In St. Louis City" group |
| Does MSD fix the sewer line between my house and the street? | USED | Verbatim; carried under the "In St. Louis City" group |
| What does a sewer camera inspection show? | LEFT OUT | Camera question the service page answers in full ("What does a sewer scope look for?" and "What does a sewer inspection not show?") |
| Can a sewer line be cleaned instead of replaced? | USED | Verbatim; carried under the "In St. Louis City" group |
| Should I inspect the sewer before buying a house in St. Louis City? | USED | Verbatim; the service page's "Should I get a sewer scope before buying a house?" is also kept, with a different answer |
| What are possible signs of a blocked or damaged private lateral? | USED | Verbatim; carried under the "In St. Louis City" group |
| Why can heavy rain contribute to sewer backups in St. Louis City? | USED | Verbatim; carried under the "In St. Louis City" group |
| Does the City repair every private lateral under a street or alley? | USED | Verbatim; carried under the "In St. Louis City" group |
| How does a St. Louis City owner apply for the Sewer Lateral Repair Program? | USED | Verbatim; carried under the "In St. Louis City" group |
| Do you repair or replace sewer lines? | USED | Verbatim; carried under the "In St. Louis City" group |

## Service page (`svc-pre-purchase-sewer-inspection`)

| Section / card / fact | Status | Where / reason |
|---|---|---|
| seoTitle | ADAPTED | "Pre-Purchase Sewer Inspection in St. Louis City, MO" |
| metaDescription | LEFT OUT | Market-neutral; replaced |
| serviceDescription | ADAPTED | Same definition, St. Louis City, Missouri added |
| hero.title | ADAPTED | "Pre-Purchase Sewer Inspection in St. Louis City" |
| hero.intro p1 (camera inspection arranged during a purchase) | ADAPTED | Hero intro and `serviceDescription` |
| hero.intro p2 (cleaning, diagnostics, locating only; no repair) | ADAPTED | Section 2 last sentence |
| hero.scope bullets | LEFT OUT | Template element |
| definition.answer (a sewer scope is a camera inspection of the accessible line) | ADAPTED | Hero intro, section 1 |
| definition.supporting 1 (the line is the private lateral; documents visible conditions on the day; no repair) | ADAPTED | Sections 1 and 2 |
| definition.supporting 2 (a sewer scope is a focused inspection; ask your home inspector) | ADAPTED | Section 4 |
| signals 1 An older home | USED | Problem card 1 (`SERVICE_PROBLEMS`); section 3 for the City tie |
| signals 2 No record of the line's condition | USED | Problem card 3 |
| signals 3 Drain trouble mentioned during the sale | ADAPTED | Section 4 bullet 1 (floor-drain backup mentioned by a seller: MSD first) |
| signals 4 A local sale requirement | LEFT OUT | The location page states no St. Louis City sale-time rule; the service FAQ carries the general wording |
| signals 5 A short inspection period | USED | Problem card 2; CTA note |
| signals 6 Plans to dig after you buy | LEFT OUT | Locating is a separate service; related link and FAQ carry it |
| limits.can (8 items) | ADAPTED | Section 3 (roots, cracks, offsets, standing water); full list in FAQ "What does a sewer scope look for?" |
| limits.cannot (8 items) | ADAPTED | Sections 1, 3 ("clear result is not proof"); full list in FAQ "What does a sewer inspection not show?" |
| limits.callout | ADAPTED | Section 3 last sentence |
| process steps 1 to 5 | USED | `process`, verbatim; equipment names only as confirmed |
| process.prep | LEFT OUT | No slot; FAQ "Where does the camera go in?" |
| decision (inspection and cleaning are separate) | LEFT OUT | FAQ "Does a sewer scope include cleaning or hydro jetting?" |
| independent band | ADAPTED | Section 2 last sentence |
| comparison table | LEFT OUT | Related links cover the siblings |
| ask items (video, findings, access point, locating, share with agent) | USED | Inclusions; share-with-agent sentence in section 4 |
| ask.keep | ADAPTED | Section 2 ("a finding is a visible observation, not a repair recommendation") |
| evidence mosaic | LEFT OUT | Template element; no place-specific photo is claimed |
| audiences (agents, inspectors, buyers, sellers) | LEFT OUT | Hub elements; section 4 covers the agent and inspector coordination in one sentence |
| markets (3 hubs) | LEFT OUT | Replaced by `coverage` |
| faqTitle, request.* | LEFT OUT | Template slots |
| relatedPageIds (4) | ADAPTED | St. Louis City page, this service, camera inspection, line locating |
| cta | ADAPTED | Rewritten for St. Louis City; keeps the deadline note |
| inclusions (6 cards) | USED | `SERVICE_INCLUSIONS` |

### Service FAQ (29)

All service questions are USED verbatim.

| Question | Status | Reason |
|---|---|---|
| All 29 service questions | USED | Verbatim. "Is a sewer scope required when buying or selling a house?" is kept because the location page has no St. Louis City question about a sale-time rule (the Las Vegas page skipped it for that reason) |

Total FAQ on the page: 38 (9 St. Louis City + 29 service). Skip in code: the St. Louis City question "What does a sewer camera inspection show?".
