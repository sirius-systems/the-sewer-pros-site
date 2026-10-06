# Source report: `sl-henderson-locating` (Henderson, NV + Sewer Line Locating)

Page module: `content/pages/sl-henderson-locating.tsx` (`hendersonLocatingContent`).
Shared blocks: `content/pages/sl-blocks/sewer-line-locating.ts`.

Sources: the Henderson location page (`content/pages/las-vegas-henderson.tsx`, `hendersonContent`) and the service page (`content/pages/services.tsx`, `svc-sewer-line-locating`, `v2`). No new research and no new business fact.

Status key: **USED** = verbatim or near-verbatim; **ADAPTED** = restated for this service or trimmed; **LEFT OUT** = not on this page.

## The four body cards and their sources

| Card (h2) | Local source (Henderson page) | Service source (locating page) |
| --- | --- | --- |
| 1. A lateral that is yours, on a route the City does not map | `responsibility` (answer, cards, table), `keyTakeaways` 1 and 3, `municipalProgram` lede, covers 1 and 3, doesNotCover 1, `buyingGuide` body ("City pages we reviewed do not map" where the line runs) | `limits.cannot` (not a survey; section not reached is not traced), `definition` (estimate of the path) |
| 2. Before anyone digs: Public Works, one-call and your estimate | `whoToCall` Public Works panel (702-267-3600, Municipal Code 11.08.010, "we have not reviewed the code text"), `municipalProgram` covers 5, doesNotCover 3 (private property permits), FAQ on right-of-way permit | `limits.callout` (811 / one-call wording as written), `limits.cannot` (utility clearance, permission to dig), `signals` item 1 |
| 3. Newer homes, and where the line runs today | `housingAge` paragraph (median 2001, 82.1 percent 1990 or later) and `sourceNote` (a lateral can be repaired, rerouted or replaced after a house is built) | `limits.can` (route and approximate depth at a point), `limits.cannot` (not a look at pipe condition), `decision` note |
| 4. Buying a Henderson home: the route is not the condition | `buyingGuide` lede and body (no sale inspection or disclosure rule found; owner's after closing; not legal advice) | `signals` item 4 (buying or evaluating a property), `audiences` home buyers, `faq` "Should I have the line located before buying a house?" |

## Other page fields

| Field | Built from |
| --- | --- |
| `seoTitle`, `metaDescription` (158 chars), `serviceDescription` | Service `serviceDescription` and `metaDescription`, localized with the City connection rule |
| `hero.intro` | `responsibility` answer (connection rule), `buyingGuide` (City pages do not map the line), service `definition` |
| `problems` 1-3 | Service `signals` items 1, 2, 5 (verbatim, via `sl-blocks`) |
| `problems` 4 (local card) | `responsibility` + `buyingGuide` (owner from the connection; City pages do not map the line) via the locator |
| `inclusions` (6) | Service `process` steps, `limits.can`, owner-confirmed video and written findings (2026-10-05), `ask` item "Video and written findings". Marks, depth readings and notes are "ask" items on the service page and are NOT claimed |
| `process` (5 steps) | Service `process.steps`, verbatim, including the plain `SeekTech SR-20` mention (DEC-132) |
| `coverage`, `relatedPageIds` | Same shape as the pilot; related = Henderson location, locating service, camera inspection, pre-purchase inspection |
| `cta` | Page-specific; restates "estimate, not a survey or permission to dig" |
| FAQ (27) | 7 Henderson questions + 20 service questions, see FAQ table |

## Henderson location page: every section

| Section / element | Status | Reason or where used |
| --- | --- | --- |
| `seoTitle`, `metaDescription` | LEFT OUT | Location-level meta; this page has its own |
| `hero.intro` | ADAPTED | Connection rule used in the hero |
| `heroForm` bullets and card (form, next steps, emergency note) | LEFT OUT | Form chrome of the location page; this template supplies its own request form; the emergency contact is in the FAQ |
| `keyTakeaways` 1 (connection, owner pays on its side, City pays on its side) | ADAPTED | Card 1 (owner side only; City-side cleaning left out as not about locating) |
| `keyTakeaways` 2 (periodic professional inspection duty) | LEFT OUT | Concerns inspection; a locate is not an inspection of condition |
| `keyTakeaways` 3 (none found: repair, grant, reimbursement program) | USED | Card 1 |
| `keyTakeaways` jump nav | LEFT OUT | Navigation for the location page |
| `serviceCards` (nine cards, help bar) | LEFT OUT | Location-page grid; not repeated on a service page |
| `responsibility.answer` paragraph 1 (connection, repair and cost rule) | ADAPTED | Card 1, hero |
| `responsibility.answer` paragraph 2 (duties list, periodic inspection, camera shows where a condition sits) | ADAPTED | Cleanup and repair cost incl. street or driveway damage in card 1; the inspection duty and the camera sentence left out (not locating) |
| `responsibility.cards` City main | ADAPTED | Card 1 refers to the City main and connection only |
| `responsibility.cards` sewer service lateral | ADAPTED | Card 1 and local problem card |
| `responsibility.table` row "Who maintains it" | ADAPTED | Card 1 |
| `responsibility.table` row "Where it ends" | ADAPTED | Card 1 (connection) |
| `responsibility.table` row "Who to contact first" | LEFT OUT | Emergency contact is kept in the FAQ; not about locating |
| `responsibility.table` row "What help exists" | ADAPTED | Card 1 (none found) |
| `responsibility.table` row "Where an inspection helps" | LEFT OUT | About camera inspection |
| `responsibility.note` (not legal advice; page undated; confirm with the City; no City statement on damage from City work) | LEFT OUT | Not repeated in the body; the undated-page caveat and "confirm with the City" remain in the FAQ answers. Open point: add a one-line caveat to card 1 if the owner wants it |
| `systemExplainer` paragraph 1 (Utility Services department) | LEFT OUT | Agency background, not about locating |
| `systemExplainer` "The City main and your connection" | ADAPTED | Card 1 |
| `systemExplainer` "Main blockages" | LEFT OUT | About City-side blockages |
| `systemExplainer` "Septic properties" (AB 220, 702-267-3670) | LEFT OUT | Septic connection rules do not bear on locating a private sewer line; also a third City number |
| `systemExplainer` "pages do not say combined or separate, age, treatment" | LEFT OUT | Not locating-relevant |
| `systemExplainer` "Nothing tells you the condition of any lateral" | ADAPTED | Card 3 (year built and condition; a locate says nothing about condition) |
| `systemExplainer.card` bullets (what a camera can show, incl. "where the line runs, with locating") | LEFT OUT | Camera list; the locating sentence is covered by card 3 |
| `systemExplainer.card.closing` (distance count; footage does not establish where the City connection is) | ADAPTED | Card 1 states a locate does not establish where the connection or responsibility begins |
| `housingAge` paragraph (median 2001, decades, 60.2 percent, 82.1 percent, 3.1 percent) | ADAPTED | Card 3 uses median and 82.1 percent; decade counts, 60.2 and 3.1 left out as not needed |
| `housingAge.table` | LEFT OUT | Detail table; the page has no table slot |
| `housingAge.sourceNote` attribution, margin of error, B25034 and B25035 links | ADAPTED | Card 3 names the ACS 2020-2024 5-year, Henderson city, and "our arithmetic"; links and margin of error left out |
| `housingAge.sourceNote` closing (lateral can be repaired, rerouted, replaced; two houses differ; Census place caveat) | ADAPTED | Card 3 (repaired, rerouted or replaced); the Census-place caveat left out |
| `whoToCall` paragraph (emergency, portal, Public Works permit, independent inspection) | ADAPTED | Card 2 uses Public Works; emergency and portal left out here, kept in the FAQ |
| `whoToCall.agency` Utility Services 702-267-5900 | LEFT OUT (body); USED (FAQ) | Emergency line is not about locating; stays in the emergency FAQ with "the City's number" |
| `whoToCall.secondaryAgency` Public Works 702-267-3600, Code 11.08.010 | USED | Card 2, labelled as the City's number; code text not reviewed |
| `whoToCall.company` (The Sewer Pros, newer-market note) | LEFT OUT | Company contact comes from the site shell, not page copy |
| `municipalProgram.lede` (none found, four City pages reviewed) | ADAPTED | Card 1 (none found, "not a statement that none exists") |
| `municipalProgram.covers` 1 (responsibility begins at the connection) | USED | Card 1 |
| `municipalProgram.covers` 2 (City maintains main, pays for main blockage) | LEFT OUT | City-side facts, not locating |
| `municipalProgram.covers` 3 (owner pays cleanup and repair incl. street or driveway damage) | USED | Card 1 |
| `municipalProgram.covers` 4 (periodic professional inspection duty) | LEFT OUT | About inspection |
| `municipalProgram.covers` 5 (right-of-way permit, 11.08.010, 702-267-3600) | USED | Card 2 |
| `municipalProgram.doesNotCover` 1 (no grant, reimbursement or application process) | ADAPTED | Card 1 (no repair, grant or reimbursement program found) |
| `municipalProgram.doesNotCover` 2 (damage from City work) | LEFT OUT | Not locating |
| `municipalProgram.doesNotCover` 3 (no City rule on permits for private-property work, cleaning or camera inspection) | ADAPTED | Card 2: no City statement on permits for work wholly on private property; the cleaning and camera clause left out |
| `municipalProgram.doesNotCover` 4 (no lateral inspection program) | LEFT OUT | About inspection schedules |
| `municipalProgram.doesNotCover` 5 (no sewage-backup procedure) | LEFT OUT | Used on the backup page instead |
| `municipalProgram.doesNotCover` 6 (combined or separate system) | LEFT OUT | Not locating |
| `municipalProgram.whoCanApply` | LEFT OUT | Program framing; there is no program |
| `municipalProgram.callout` (confirm City serves your address, ask Public Works) | LEFT OUT | Public Works referral is in card 2; the "confirm the City serves your address" line remains on the location page |
| `municipalProgram.closing` (we do not repair or arrange reimbursement) | LEFT OUT | The repair FAQ carries it |
| `secondOpinion` (ledes, steps, callout, CTA) | LEFT OUT | Repair-recommendation material belongs to camera and backup pages; the locating service page's independent band is about planning near the line |
| `buyingGuide.lede` (camera shows lateral; ask home inspector; sewer scope; owner after closing) | ADAPTED | Card 4 (owner after closing); camera and home-inspector sentences left out |
| `buyingGuide.body` (no sale rule found; periodic inspection; Customer Portal transfer; locating shows where the line runs, City does not map it; not legal advice) | ADAPTED | Cards 1 and 4: no rule found, not legal advice, City does not map the line (restated as "estimate"); the periodic inspection and portal-transfer sentences left out |
| `buyingGuide` links, CTA, agents panel | LEFT OUT | Location-page conversion blocks |
| `nearbyAreas` (Las Vegas, North Las Vegas, Summerlin, market hub) | ADAPTED | `coverage` uses the three location ids; market hub left out as in the pilot |
| `finalCta` | LEFT OUT | The page has its own CTA |
| `sources` (7 links, last reviewed 2026-10-04) | LEFT OUT | The source panel is a location-page field; the figures cited in the body are attributed in-line |

## Henderson FAQ (10 questions)

| Question | Status | Reason |
| --- | --- | --- |
| Where does my responsibility start in Henderson, and who maintains the City main? | USED | Frames the connection rule |
| Does the City pay if a blockage is in the City sewer main? | USED | City-side versus owner-side; relevant to who a locate helps |
| Does the City of Henderson help pay for lateral repairs? | USED | None found |
| My house is only twenty years old. Is an inspection worth it? | LEFT OUT | About inspecting condition, not about route; card 3 handles housing age |
| Who do I call about a sewer emergency in Henderson? | USED | City contacts |
| Does lateral work in the public right-of-way need a permit in Henderson? | USED | Directly tied to card 2 |
| Does Henderson require a sewer inspection when a home is sold? | USED | Tied to card 4; also supersedes the service page's generic version |
| How do I transfer water and sewer service when I buy a home in Henderson? | LEFT OUT | Utility account transfer, unrelated to locating |
| What does a sewer camera inspection show? | LEFT OUT | The service page's camera questions cover what a camera does for locating |
| Do you repair or replace sewer lines? | USED | Scope statement |

## Service page (locating): every section

| Section / element | Status | Reason or where used |
| --- | --- | --- |
| `seoTitle`, `metaDescription`, `serviceDescription` | ADAPTED | Localized |
| `hero` intro and the scope line | ADAPTED | Hero states the estimate; the "no repair" sentence is in the FAQ |
| `hero.scope` bullets, card title and intro | LEFT OUT | Service-page hero card |
| `definition.answer` (transmitter and receiver; sonde; depth approximate) | ADAPTED | `serviceDescription`, card 3 |
| `definition.supporting` (planning near the line; camera shows inside; public mains out of scope) | ADAPTED | Card 3 and card 1 |
| `definition.scope` | LEFT OUT | Service-page scope box |
| `signals` "Planning digging, trenching, or construction" | USED | Problem card 1 |
| `signals` "Landscaping, trees, fences, or hardscape" | USED | Problem card 2 |
| `signals` "Sharing the route with another contractor" | LEFT OUT | Reduced to three problem cards plus one local; the idea sits in the hero and FAQ |
| `signals` "Buying or evaluating a property" | ADAPTED | Card 4 |
| `signals` "A camera finding you need to place" | USED | Problem card 3 |
| `signals.after` | LEFT OUT | Link to camera page is in related pages |
| `limits.can` (surface position; path; depth at a point; camera head position; planning estimate) | ADAPTED | Cards 1 and 3, inclusions 5 and 6 |
| `limits.cannot` survey | ADAPTED | Card 1 |
| `limits.cannot` utility clearance or permission to dig | ADAPTED | Card 2 |
| `limits.cannot` exact depth | LEFT OUT | Depth is only ever called approximate |
| `limits.cannot` map of every utility | LEFT OUT | Not tied to a Henderson fact; in the FAQ |
| `limits.cannot` trace of unreached section | ADAPTED | Card 1, inclusion 6 |
| `limits.cannot` look at pipe condition | ADAPTED | Card 3 |
| `limits.callout` (one-call 811) | USED | Card 2, wording kept as written; unverified for Nevada (see open questions) |
| `process` 5 steps (Access, Equipment, Travel, Trace, Record) | USED | `process`, verbatim; `SeekTech SR-20` is a plain mention in the Equipment step |
| `process.prep` (access, cleanout, one-call) | LEFT OUT | One-call used in card 2; prep list is "ask" content |
| `decision` (locating or camera; where to start) | LEFT OUT | Not tied to a Henderson fact; camera page linked as related |
| `independent` (Locate, Document, Decide) | LEFT OUT | Not repeated; the repair FAQ carries the position |
| `comparison` table | LEFT OUT | Service-page table |
| `ask` items (marks, depth, entry point, untraced, video and findings) | ADAPTED | Video and written findings used in inclusions; marks, depth and notes stay "ask" items and are not claimed |
| `ask.keep` | LEFT OUT | Records guidance, not locating-specific |
| `audiences` home buyers | ADAPTED | Card 4 |
| `audiences` agents, inspectors, property managers | LEFT OUT | Not tied to a Henderson fact |
| `markets` cards | LEFT OUT | Replaced by `coverage` |
| `request`, `relatedDescriptions`, `cta` | LEFT OUT | Template fields; this page has its own CTA |

## Service FAQ (23 questions)

| Question | Status | Reason |
| --- | --- | --- |
| What is sewer line locating? | USED | |
| How does sewer line locating work? | USED | |
| What are a sonde, a receiver, and a cleanout? | USED | |
| Is sewer line locating the same as calling 811? | USED | |
| Do I need a camera inspection before locating? | USED | |
| Can you tell me exactly where my sewer line is? | USED | |
| Can sewer line locating determine the pipe's depth? | USED | |
| Can you locate every utility on my property? | USED | |
| Is a locate a survey, and does it mean I can dig? | USED | |
| Can a sewer camera see through water? | USED | |
| Can a sewer line be located under concrete or a driveway? | USED | |
| What if the camera cannot get through the line? | USED | |
| What access point do you use? Do you have to pull a toilet? | USED | |
| Will I get surface marks? | USED | |
| Will I get video and written findings? | USED | |
| How long does locating take, and how much does it cost? | USED | States "we do not publish a standard time or price" |
| Can line locating help before landscaping or fence installation? | USED | |
| If the line drains after cleaning, is the pipe healthy? | LEFT OUT | About cleaning and pipe health, off the locating topic |
| Should I use chemical drain cleaner on a sewer line clog? | LEFT OUT | About drain-cleaning products, off the locating topic |
| Can line locating help with sewer repair work? | USED | |
| How often should a sewer line be located or inspected? | USED | |
| Does my city require a sewer inspection for a sale, remodel, or permit? | LEFT OUT | Duplicate; the Henderson sale question answers it for this city |
| Should I have the line located before buying a house? | USED | |

## Open questions

- 811 and private sewer lines: the service page's wording is unverified for Nevada. This page repeats it as written ("your state one-call program (often reached at 811) or your local utility") and does not say whether 811 covers private lines.
- Card 1 does not carry the location page's "page is undated, confirm with the City" caveat; the FAQ answers do. Add a short line if the owner wants it on the card.
