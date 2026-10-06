# Source report: sl-henderson-drain

Page: Drain Cleaning in Henderson, NV (`hendersonDrainContent`, `content/pages/sl-henderson-drain.tsx`).

Sources:
- LOCATION: `hendersonContent` in `content/pages/las-vegas-henderson.tsx` (City facts read 2026-10-04, ACS 2020-2024).
- SERVICE: `svc-drain-cleaning` `v2` in `content/pages/services.tsx`, plus `content/pages/sl-blocks/drain-cleaning.ts`.

Status key: USED = text taken as published; ADAPTED = fact kept, wording changed to tie it to this service; LEFT OUT = not on this page (reason given).

## The four body sections and their sources

| # | h2 on the page | Henderson source | Service source |
|---|---|---|---|
| 1 | Your drains are on your side of the connection | `responsibility` (lateral "up to and including your home's plumbing", City main card, table), `systemExplainer` (main and main blockages) | `definition.supporting` 1 (drain vs sewer cleaning), `limits.cannot` (the public main and the connection: ask the utility) |
| 2 | One drain, several drains, or the street | `whoToCall` (24-hour call center, Contact Henderson, company line), `responsibility` table "Who to contact first" | `signals` (one slow, several, gurgling, water or sewage coming up), `triage` rows 1, 2, 5 |
| 3 | A typical Henderson house says little about its drains | `housingAge` (median 2001, 82.1%, 60.2%), FAQ "My house is only twenty years old" | `signals` ("Clogs that keep returning"), `triage` row 4 |
| 4 | No City help found, so know what cleaning does not fix | `municipalProgram` (lede, doesNotCover permit and grant items, closing), `whoToCall.secondaryAgency` (Public Works), `secondOpinion` (estimates) | `limits.cannot` (crack, offset, roots at a joint), `ask.keep` (compare estimates), `independent.note`, `definition.scope` |

## Henderson location page

| Section / card / fact | Status | Where / reason |
|---|---|---|
| seoTitle | ADAPTED | Service name swapped in |
| metaDescription | LEFT OUT | Replaced by a page-specific description (160 characters) |
| hero.title | ADAPTED | H1 names this service |
| hero.intro (responsibility from the connection) | ADAPTED | Hero uses the "up to and including your home's plumbing" wording |
| heroForm bullets, card, form | LEFT OUT | Template supplies its own request form |
| heroForm "newer market for us" line | ADAPTED | Section 2 (also in `whoToCall.company`) |
| faqHeading | LEFT OUT | Template sets it |
| keyTakeaways 1 (owner side pays; City side and main blockages) | ADAPTED | Section 1 |
| keyTakeaways 2 (periodic professional inspection of the lateral) | LEFT OUT | About inspecting the lateral, not cleaning a fixture drain |
| keyTakeaways 3 (no City lateral program found) | ADAPTED | Section 4 |
| keyTakeaways jumpNav | LEFT OUT | No on-page anchors in this template |
| serviceCards (9 cards) and helpBar | LEFT OUT | Hub grid; related links cover siblings |
| responsibility.answer p1 | ADAPTED | Section 1 |
| responsibility.answer p2 (cleanup costs, periodic inspection, camera) | LEFT OUT | Inspection duty belongs to the camera pages; the cost half is in section 1 |
| responsibility card: City's sewer main | ADAPTED | Section 1 |
| responsibility card: sewer service lateral ("up to and including your home's plumbing") | ADAPTED | Section 1 and hero; the basis for "your drains are on your side" |
| responsibility table: Who maintains it | ADAPTED | Section 1 |
| responsibility table: Where it ends | ADAPTED | Section 1 |
| responsibility table: Who to contact first | ADAPTED | Section 2 |
| responsibility table: What help exists | ADAPTED | Section 4 |
| responsibility table: Where an inspection helps | LEFT OUT | Camera inspection is a separate service on this page |
| responsibility.note (not legal advice, undated) | LEFT OUT | No legal claim is made; "none found" wording carries the caveat |
| systemExplainer p1 (Utility Services) | LEFT OUT | No effect on what drain cleaning does |
| systemExplainer p2 and p3 (City main, main blockages) | ADAPTED | Sections 1 and 2 |
| systemExplainer p4 (septic properties) | LEFT OUT | About connecting septic parcels |
| systemExplainer p5 (combined/separate unknown) | LEFT OUT | No tie to this service |
| systemExplainer p6 (nothing shows a lateral's condition) | ADAPTED | Section 3 (age does not tell what is in a drain line) |
| systemExplainer card (camera bullets, closing) | LEFT OUT | The service page's camera is a separate service, covered by its FAQ |
| housingAge para (median 2001, 82.1%, 60.2%) | ADAPTED | Section 3 |
| housingAge 1990s and 2000s unit counts, 3.1% before 1970, table | LEFT OUT | Section 3 needs the median and the share; counts left on the location page |
| housingAge sourceNote (attribution) | ADAPTED | Section 3 (ACS 2020-2024 5-year, Henderson city, our arithmetic) |
| housingAge closing (year built does not tell condition) | ADAPTED | Section 3 |
| whoToCall.paragraphs | ADAPTED | Section 2 |
| whoToCall.agency (call center, Contact Henderson) | ADAPTED | Section 2, marked as the City's number |
| whoToCall.secondaryAgency (Public Works, 702-267-3600) | ADAPTED | Section 4, marked as the City's number |
| whoToCall.company | ADAPTED | Section 2: phone from `marketOperatingDetail`, newer-market sentence; hours LEFT OUT (no hours claim, data string has an en dash) |
| municipalProgram.lede ("none found") | ADAPTED | Section 4 |
| municipalProgram.covers 1 to 3 (responsibility, City main, owner side) | ADAPTED | Section 1 |
| municipalProgram.covers 4 (periodic professional inspection) | LEFT OUT | Camera pages |
| municipalProgram.covers 5 (right-of-way permit) | ADAPTED | Section 4 |
| municipalProgram.doesNotCover 1 (no grant or reimbursement) | ADAPTED | Section 4 |
| municipalProgram.doesNotCover 2 (damage from City work) | LEFT OUT | No tie to drain cleaning |
| municipalProgram.doesNotCover 3 (no permit statement for cleaning) | ADAPTED | Section 4 |
| municipalProgram.doesNotCover 4 to 6 (inspection program, backup procedure, combined/separate) | LEFT OUT | No tie to drain cleaning |
| municipalProgram.whoCanApply, callout | LEFT OUT | "None found, not a statement that none exists" and "ask Public Works" carry the caveat |
| municipalProgram.closing (no repairs, no reimbursement arranged) | ADAPTED | Section 4 ("We do not perform repairs or replacements") |
| secondOpinion ledes, steps, callout, CTA | ADAPTED | Section 4's last sentence (video and findings compared against an estimate); the rest LEFT OUT because the service template carries its own independent band |
| buyingGuide.lede, body (no City sale rule; state law out of scope) | ADAPTED | Fourth problem card |
| buyingGuide transfer process | LEFT OUT | FAQ skipped as not about drain cleaning |
| buyingGuide locating, links, CTA, agents | LEFT OUT | Hub elements |
| nearbyAreas | ADAPTED | `coverage` block |
| finalCta title | ADAPTED | `cta.title` |
| finalCta paragraphs, bullets | LEFT OUT | Replaced by `cta.body` |
| sources (7 links) | LEFT OUT | No sources block in this template; attributions are inline. Open item: confirm the template should link them |

### Henderson FAQ (10)

| Question | Status | Reason |
|---|---|---|
| Where does my responsibility start in Henderson, and who maintains the City main? | USED | Verbatim |
| Does the City pay if a blockage is in the City sewer main? | USED | Verbatim |
| Does the City of Henderson help pay for lateral repairs? | USED | Verbatim |
| My house is only twenty years old. Is an inspection worth it? | USED | Verbatim; the question is about age and the lateral, relevant to recurring clogs |
| Who do I call about a sewer emergency in Henderson? | USED | Verbatim |
| Does lateral work in the public right-of-way need a permit in Henderson? | USED | Verbatim; the answer addresses cleaning |
| Does Henderson require a sewer inspection when a home is sold? | USED | Verbatim; the service serves buyers and sellers |
| How do I transfer water and sewer service when I buy a home in Henderson? | LEFT OUT | About starting or moving utility service, not drain cleaning |
| What does a sewer camera inspection show? | USED | Verbatim; the drain page has no FAQ with this question and a camera may be added to a visit |
| Do you repair or replace sewer lines? | USED | Verbatim |

## Service page (`svc-drain-cleaning`)

| Section / card / fact | Status | Where / reason |
|---|---|---|
| seoTitle | ADAPTED | "Drain Cleaning in Henderson, NV" |
| metaDescription | LEFT OUT | Market-neutral; replaced |
| serviceDescription | ADAPTED | Same definition, Henderson added |
| hero.title | ADAPTED | "Drain Cleaning in Henderson" |
| hero.intro p1 (restores flow by removing grease, roots, debris) | ADAPTED | Hero intro |
| hero.intro p2 (no repair, replacement, lining, excavation, pipe installation) | ADAPTED | Section 4 and FAQ "Does drain cleaning repair a damaged pipe?" |
| hero.scope bullets | LEFT OUT | Template element |
| definition.answer | ADAPTED | `serviceDescription` and hero |
| definition.supporting 1 (drain vs sewer cleaning) | ADAPTED | Section 1 |
| definition.supporting 1 ("drain clearing" is everyday usage) | LEFT OUT | Kept as the FAQ answer |
| definition.supporting 2 (cleaning and camera are separate) | LEFT OUT | FAQ "Does a camera inspection come with drain cleaning?" |
| definition.scope | ADAPTED | Section 4 |
| signals 1 One slow drain | USED | Problem card 1 |
| signals 2 Several fixtures slow | USED | Problem card 2; section 2 |
| signals 3 Gurgling | ADAPTED | Section 2 bullet; full text in FAQ "Why are my drains gurgling?" |
| signals 4 Clogs that keep returning | USED | Problem card 3; section 3 |
| signals 5 Sewage-like odors | LEFT OUT | FAQ "What causes sewage-like odors?" |
| signals 6 Water or sewage coming up | ADAPTED | Section 2 bullet |
| triage rows 1, 2, 5 (one fixture, several, water or sewage coming up) | ADAPTED | Section 2 |
| triage row 3 (lower drains back up when others used) | LEFT OUT | Slot-limited; FAQ "How do I know if it is a drain clog or a sewer line problem?" |
| triage row 4 (clogs again after cleared) | ADAPTED | Section 3 |
| limits.can (4 items) | LEFT OUT | Service-page suitability; FAQ answers carry grease, roots, wipes |
| limits.cannot: cracked/broken/collapsed; offset or separated joint; roots at a joint | ADAPTED | Section 4 |
| limits.cannot: public sewer main or its connection | ADAPTED | Section 1 |
| limits.cannot: line the equipment cannot pass | LEFT OUT | No slot |
| limits.callout (jetting not for every pipe; flows again is not proof) | LEFT OUT | FAQ "Is hydro jetting safe for every pipe?" and "Does a line that flows again mean the pipe is fine?" |
| process steps 1 to 5 (symptoms, access, camera, cleaning, flow check) | USED | `process`, verbatim; equipment names only as confirmed (steps 3 and 4) |
| process.prep (access points, 3 items) | LEFT OUT | No slot; FAQ "What should I tell you when I request drain cleaning?" |
| decision (cleaning and camera separate; when cleaning first) | LEFT OUT | FAQ "Can a camera see through standing water?" |
| independent band (Clear, Document, Decide; note about estimates) | ADAPTED | Section 4 last sentence |
| methods table (cable, jetting, camera) | LEFT OUT | FAQ "What methods are used to clean a drain?" and related answers |
| secondaryLimits (camera can/cannot) | LEFT OUT | FAQ answers on cameras |
| ask items: video, written findings | USED | Inclusion 6 |
| ask items: limits, access point, cleaning record, locating | LEFT OUT | FAQ "Will I get a record of the cleaning?", "What does line locating do?" |
| ask.keep | ADAPTED | Section 4 (compare estimates) |
| audiences: Homeowners | LEFT OUT | Problem cards |
| audiences: Home buyers, Home sellers | ADAPTED | Fourth problem card |
| markets (3 hubs) | LEFT OUT | Replaced by `coverage` |
| faqTitle | LEFT OUT | Template sets it |
| situations (wipes, liquid grease, chemical cleaners) | LEFT OUT | No slot; the three FAQ answers carry them |
| terms (6 plain-language terms) | LEFT OUT | No slot |
| request.tellUs (5 items), intro, scopeNote, submitLabel | LEFT OUT | Template request block; FAQ "What should I tell you..." carries tellUs |
| relatedPageIds (4) and relatedDescriptions | ADAPTED | Henderson page, this service, sewer cleaning, camera inspection |
| cta | ADAPTED | Rewritten for Henderson |
| inclusions (6 cards) | USED | process and ask sentences; `sl-blocks` |

### Service FAQ (37)

34 USED verbatim, 3 LEFT OUT.

Understanding drain cleaning (6): What is drain cleaning? / What is the difference between drain cleaning and sewer cleaning? / What is the difference between drain cleaning and drain clearing? / What methods are used to clean a drain? / Is drain cleaning the same as hydro jetting? / Does drain cleaning repair a damaged pipe? (all USED)

Symptoms and causes (11): What causes a drain to clog or run slowly? / Why is my kitchen sink draining slowly? / Why is my bathtub or shower draining slowly? / How do I know if it is a drain clog or a sewer line problem? / Can a plunger or hand tool fix a clogged drain? / Can tree roots grow into drain pipes? / Why do my drains keep clogging after they were cleared? / Why are several fixtures draining slowly at once? / Why are my drains gurgling? / What causes sewage-like odors? / What should I do if water or sewage is coming up from a drain? (all USED)

Limits and cameras (7): Can drain cleaning fix a broken or collapsed pipe? (LEFT OUT: duplicate of "Does drain cleaning repair a damaged pipe?") / Can cleaning remove tree roots? (LEFT OUT: covered by "Can tree roots grow into drain pipes?") / Is hydro jetting safe for every pipe? / Does drain cleaning damage pipes? / Does a camera inspection come with drain cleaning? / Can a camera see through standing water? / Does a line that flows again mean the pipe is fine? (the last five USED)

Documentation and locating (3): What do I receive when a camera is used? / Will I get a record of the cleaning? / What does line locating do? (all USED)

Maintenance and prevention (4): Are chemical drain cleaners a good idea? / Is it safe to flush wipes labeled flushable? / How should I dispose of cooking grease? / How often should drains be cleaned? (all USED)

Requesting service (5): Do you clean drains in St. Louis, San Diego, and Las Vegas? (LEFT OUT: this page is an area page, the question belongs to the hub) / How much does drain cleaning cost? / How long does drain cleaning take? / What should I tell you when I request drain cleaning? / What happens if a camera shows damage? (the last four USED)

Real estate (1): Should I have the sewer line checked before buying a house? (USED)

Total FAQ on the page: 43 (9 Henderson + 34 service).
