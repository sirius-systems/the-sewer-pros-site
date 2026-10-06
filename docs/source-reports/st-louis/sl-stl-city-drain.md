# Source report: sl-stl-city-drain

Page: Drain Cleaning in St. Louis City, MO (`stLouisCityDrainContent`, `content/pages/sl-stl-city-drain.tsx`).

Sources:
- LOCATION: `stLouisCityContent` in `content/pages/st-louis-city.tsx` (MSD and City facts read 2026-10-03; the City program page is dated 2014).
- SERVICE: `svc-drain-cleaning` `v2` in `content/pages/services.tsx`, plus `content/pages/sl-blocks/drain-cleaning.ts`.

Status key: USED = text taken as published; ADAPTED = fact kept, wording changed to tie it to this service; LEFT OUT = not on this page (reason given).

Facts deliberately NOT used on any St. Louis City service page: the "about 58 percent built in 1939 or earlier" figure (primary Census table check pending), the program's $28 fee, and anything from the Chesterfield, Ballwin, Florissant or St. Charles pages.

## The four body sections and their sources

| # | h2 on the page | St. Louis City source | Service source |
|---|---|---|---|
| 1 | Your drains sit upstream of a lateral that is yours to the MSD main | `responsibility` (answer, cards, table rows 1-2), FAQ "Does the City repair every private lateral" | `definition.supporting` 1 (drain vs sewer cleaning), `limits.cannot` (the public main and the connection) |
| 2 | One drain, several drains, or sewage at a floor drain | `whoToCall` (paragraphs, MSD agency), `responsibility` table row 3, company line | `signals`, `triage` rows 1, 2, 5 |
| 3 | Combined sewers and heavy rain are not a fixture-drain problem | `systemExplainer` p1, p3, p4 | `signals` ("Clogs that keep returning"), `triage` row 4 |
| 4 | The City program leaves clogs to you, and cleaning does not fix damage | `municipalProgram` (lede, doesNotCover, permit paragraph, Street Division referral) | `limits.cannot`, `ask.keep`, `independent.note`, `definition.scope` |

## St. Louis City location page

| Section / card / fact | Status | Where / reason |
|---|---|---|
| seoTitle | ADAPTED | Service name swapped in |
| metaDescription | LEFT OUT | Replaced by a page-specific description |
| hero.title | ADAPTED | H1 names this service |
| hero.intro (MSD maintains the main; lateral to it is private; independent evidence) | ADAPTED | Hero intro: fixture drains sit upstream of the lateral |
| heroForm bullets (camera findings; cleaning when evidence supports it; family-operated since 2011) | LEFT OUT | Shell supplies trust strip; the 2011 founding year is not repeated |
| heroForm request card, form, hours line | ADAPTED | Company phone read from `marketOperatingDetail` in section 2; hours LEFT OUT; the request form is the template's |
| heroForm card note (sewage backing up: contact MSD first, (314) 768-6260) | ADAPTED | Section 2, marked as MSD's number |
| faqHeading, faqSchemaApproved | LEFT OUT | Template sets it |
| keyTakeaways 1 (MSD maintains the main; the lateral is private property) | ADAPTED | Section 1 (MSD main; private lateral and connection) |
| keyTakeaways 2 (combined sewers; only an inspection shows your own line) | ADAPTED | Section 3 (combined sewers) |
| keyTakeaways 3 (recorded evidence before you clean, buy, or approve major work) | LEFT OUT | Camera is a separate service |
| keyTakeaways jumpNav | LEFT OUT | No on-page anchors in this template |
| serviceCards (9) and helpBar | LEFT OUT | Hub grid; related links cover siblings |
| responsibility.answer (MSD maintains the main; lateral and connection private, even under street or alley) | ADAPTED | Section 1 (MSD maintains the main; lateral and connection private, even under the street or alley) |
| responsibility card: the public sewer main (MSD, not a City department) | ADAPTED | Section 1 |
| responsibility card: the lateral line (private, including under the right-of-way) | ADAPTED | Section 1 |
| responsibility table: Who owns it | ADAPTED | Section 1 |
| responsibility table: Who maintains and repairs it | ADAPTED | Section 1 |
| responsibility table: Who to contact first (MSD (314) 768-6260) | ADAPTED | Section 2 (MSD report line, labelled MSD's) |
| responsibility table: What help exists (City program, six or fewer units, not clogs or roots) | ADAPTED | Section 4 (program excludes clearing clogs or roots) |
| responsibility table: Where an inspection helps | LEFT OUT | Camera inspection is a separate service |
| responsibility.note (general information, not legal advice) | LEFT OUT | Page carries "confirm with the Street Division"; no legal-advice note needed for drain cleaning |
| systemExplainer p1 (most of the City is served by combined sewers) | ADAPTED | Section 3 |
| systemExplainer p2 (MSD: among the oldest in the country, brick tunnels; County mostly separate) | LEFT OUT | Age of the combined sewers is not a drain-cleaning fact |
| systemExplainer p3 (intense rain can overwhelm capacity; gutters, sump pumps, yard drains; Get the Rain Out) | ADAPTED | Section 3 (rain capacity, gutters, sump pumps, yard drains); the Get the Rain Out initiative is LEFT OUT (not about drain cleaning) |
| systemExplainer p4 (system-level facts, not the condition of any one lateral) | ADAPTED | Section 3 ("system-level facts, not findings about your line") |
| systemExplainer card (what a camera can show on your lateral; closing) | LEFT OUT | Camera is a separate service |
| housingAge p1 (the "about 58 percent built in 1939 or earlier" figure) | LEFT OUT | The 58 percent figure is not used on any page in this batch |
| housingAge p2 (lateral materials changed over decades; general industry timelines; many repaired or replaced) | LEFT OUT | Lateral materials are not where fixture drains are |
| housingAge p3 (only an inspection shows material and condition; Census attribution) | LEFT OUT | Not about drain cleaning |
| housingAge.table (vitrified clay, cast iron, Orangeburg, PVC/ABS) | LEFT OUT | No table slot; materials are not where fixture drains are |
| whoToCall paragraph 1 (sewage through a floor drain, odor, overflow, missing manhole: report to MSD; MSD investigates) | ADAPTED | Section 2 (floor drain, outside smell, overflow, missing manhole; MSD investigates public vs lateral) |
| whoToCall paragraph 2 (if MSD or a plumber points to your lateral, or you want proof of it) | ADAPTED | Section 2 sentence "MSD investigates whether the cause is the public sewer or your lateral"; camera sentence LEFT OUT |
| whoToCall.agency (MSD (314) 768-6260; report and building-backup links) | ADAPTED | Section 2: number only, labelled MSD's; report links LEFT OUT |
| whoToCall.company (company phone and hours) | ADAPTED | Section 2: phone from `marketOperatingDetail`; hours LEFT OUT |
| municipalProgram.lede (aimed at severe damage under the right-of-way, not routine clogs or roots) | ADAPTED | Section 4 |
| municipalProgram p1 (six or fewer units; fully paid real-estate taxes) | LEFT OUT | Eligibility detail is not about drain cleaning |
| municipalProgram p2 (replacement needs a plumbing permit and inspection; City-certified licensed plumbing contractors) | ADAPTED | Section 4 (replacement needs a permit; City-certified licensed plumbing contractors) |
| municipalProgram p3 (page dated 2014; the $28 fee; confirm with the Street Division) | ADAPTED | Section 4 ("confirm current terms with the Street Division"); the 2014 date and the $28 fee LEFT OUT |
| municipalProgram.covers (severe damage under the right-of-way; eligible properties) | LEFT OUT | Eligibility detail is not about drain cleaning |
| municipalProgram.doesNotCover (clogs or roots anywhere on the lateral; breaks under private property) | ADAPTED | Section 4 (clogs and roots anywhere on the lateral); the private-property break exclusion LEFT OUT |
| municipalProgram.steps (report the problem; licensed City plumber inspects; statement and video to the Street Department) | LEFT OUT | About the City application path; FAQ carries it |
| municipalProgram.afterSteps (contact the Street Division to confirm eligibility) | LEFT OUT | Same |
| municipalProgram.callout (where an independent inspection fits; it does not replace the City step) | LEFT OUT | About a camera or independent inspection, not cleaning |
| municipalProgram.closing (link to the lateral inspection and reporting service) | LEFT OUT | Link to a different service |
| secondOpinion (ledes, steps, callout, CTA) | ADAPTED | Section 4 last sentence (video and findings compared against an estimate); rest LEFT OUT |
| buyingGuide.lede (a sewer scope is a separate, focused inspection; ask your home inspector) | LEFT OUT | Buying topic; FAQ carries it |
| buyingGuide.body (older City properties, older infrastructure; the lateral is the buyer's after closing) | LEFT OUT | Buying is not a drain-cleaning topic; the sale questions stay in the FAQ |
| buyingGuide links and CTA | LEFT OUT | Hub elements |
| buyingGuide.agents (association affiliations, video and written findings, not legal advice) | LEFT OUT | Hub element |
| nearbyAreas (Chesterfield, Ballwin, Florissant, St. Charles, market hub) | ADAPTED | `coverage`: the other four St. Louis locations; hub link supplied by the template |
| finalCta (title, paragraphs, bullets, form) | ADAPTED | `cta.title`; paragraphs and bullets replaced by `cta.body` |
| sources (8 links, lastReviewed, closingNote) | USED | Same |
| servicePageIds | LEFT OUT | Location-page link list |

### St. Louis City FAQ (10)

| Question | Status | Reason |
|---|---|---|
| Who is responsible for a sewer blockage on private property in St. Louis? | USED | Verbatim; carried under the "In St. Louis City" group |
| Does MSD fix the sewer line between my house and the street? | USED | Verbatim; carried under the "In St. Louis City" group |
| What does a sewer camera inspection show? | USED | Verbatim; carried under the "In St. Louis City" group |
| Can a sewer line be cleaned instead of replaced? | USED | Verbatim; carried under the "In St. Louis City" group |
| Should I inspect the sewer before buying a house in St. Louis City? | USED | Verbatim; carried under the "In St. Louis City" group |
| What are possible signs of a blocked or damaged private lateral? | USED | Verbatim; carried under the "In St. Louis City" group |
| Why can heavy rain contribute to sewer backups in St. Louis City? | USED | Verbatim; carried under the "In St. Louis City" group |
| Does the City repair every private lateral under a street or alley? | USED | Verbatim; carried under the "In St. Louis City" group |
| How does a St. Louis City owner apply for the Sewer Lateral Repair Program? | USED | Verbatim; carried under the "In St. Louis City" group |
| Do you repair or replace sewer lines? | USED | Verbatim; carried under the "In St. Louis City" group |

## Service page (`svc-drain-cleaning`)

| Section / card / fact | Status | Where / reason |
|---|---|---|
| seoTitle | ADAPTED | "Drain Cleaning in St. Louis City, MO" |
| metaDescription | LEFT OUT | Market-neutral; replaced |
| serviceDescription | ADAPTED | Same definition, St. Louis City, Missouri added |
| hero.title | ADAPTED | "Drain Cleaning in St. Louis City" |
| hero.intro p1 (restores flow by removing grease, roots, debris) | ADAPTED | Hero intro |
| hero.intro p2 (cleaning, camera diagnostics, locating only; no repair) | ADAPTED | Section 4 and FAQ "Does drain cleaning repair a damaged pipe?" |
| hero.scope bullets | LEFT OUT | Template element |
| definition.answer | ADAPTED | `serviceDescription` and hero |
| definition.supporting 1 (drain vs sewer cleaning) | ADAPTED | Section 1 |
| definition.supporting 1 ("drain clearing" is everyday usage) | LEFT OUT | Kept as the FAQ answer |
| definition.supporting 2 (cleaning and camera are separate) | LEFT OUT | FAQ "Does a camera inspection come with drain cleaning?" |
| definition.scope | ADAPTED | Section 4 |
| signals 1 One slow drain | USED | Problem card 1 |
| signals 2 Several fixtures slow at once | USED | Problem card 2; section 2 |
| signals 3 Gurgling | ADAPTED | Section 2 bullet; full text in FAQ "Why are my drains gurgling?" |
| signals 4 Clogs that keep returning | USED | Problem card 3; section 3 |
| signals 5 Sewage-like odors | LEFT OUT | FAQ "What causes sewage-like odors?" |
| signals 6 Water or sewage coming up | ADAPTED | Section 2 bullet (floor-drain sewage: MSD first); fourth problem card |
| triage rows 1, 2, 5 | ADAPTED | Section 2 |
| triage row 3 (lower drains back up) | LEFT OUT | Slot-limited; FAQ "How do I know if it is a drain clog or a sewer line problem?" |
| triage row 4 (clogs again after cleared) | ADAPTED | Section 3 |
| limits.can (4 items) | LEFT OUT | FAQ answers carry grease, roots, wipes |
| limits.cannot: cracked/broken/collapsed; offset or separated joint; roots at a joint | ADAPTED | Section 4 |
| limits.cannot: public sewer main or its connection | ADAPTED | Section 1 |
| limits.cannot: line the equipment cannot pass | LEFT OUT | No slot |
| limits.callout | LEFT OUT | FAQ "Is hydro jetting safe for every pipe?" and "Does a line that flows again mean the pipe is fine?" |
| process steps 1 to 5 | USED | `process`, verbatim; equipment names only as confirmed (steps 3 and 4) |
| process.prep | LEFT OUT | No slot; FAQ "What should I tell you when I request drain cleaning?" |
| decision | LEFT OUT | FAQ "Can a camera see through standing water?" |
| independent band | ADAPTED | Section 4 last sentence |
| methods table | LEFT OUT | FAQ "What methods are used to clean a drain?" |
| secondaryLimits (camera can/cannot) | LEFT OUT | FAQ answers on cameras |
| ask items: video, written findings | USED | Inclusion 6 |
| ask items: limits, access point, cleaning record, locating | LEFT OUT | FAQ "Will I get a record of the cleaning?", "What does line locating do?" |
| ask.keep | ADAPTED | Section 4 (compare estimates) |
| audiences: Homeowners | LEFT OUT | Problem cards |
| audiences: Home buyers, Home sellers | LEFT OUT | No tie on this page; the FAQ carries "Should I have the sewer line checked before buying a house?" |
| markets (3 hubs) | LEFT OUT | Replaced by `coverage` |
| faqTitle, situations, terms, request.* | LEFT OUT | Template slots; FAQ answers carry the situations and "tell us" items |
| relatedPageIds (4) | ADAPTED | St. Louis City page, this service, sewer cleaning, camera inspection |
| cta | ADAPTED | Rewritten for St. Louis City |
| inclusions (6 cards) | USED | process and ask sentences; `sl-blocks/drain-cleaning` |

### Service FAQ (37)

Same handling as the Las Vegas drain page: every service question is USED verbatim except the three below.

| Question | Status | Reason |
|---|---|---|
| Do you clean drains in St. Louis, San Diego, and Las Vegas? | LEFT OUT | This page is an area page; the question belongs to the hub |
| Can drain cleaning fix a broken or collapsed pipe? | LEFT OUT | Duplicate of "Does drain cleaning repair a damaged pipe?" |
| Can cleaning remove tree roots? | LEFT OUT | Covered by "Can tree roots grow into drain pipes?" |
| How much does drain cleaning cost? / How long does drain cleaning take? | USED | Verbatim; they say cost and time vary and carry no DEC-088 wording |

Total FAQ on the page: 44 (10 St. Louis City + 34 service). Skips in code: the three service questions above; none of the ten location questions is skipped.
