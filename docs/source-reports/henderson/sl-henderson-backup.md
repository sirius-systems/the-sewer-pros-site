# Source report: `sl-henderson-backup` (Henderson, NV + Recurring Sewer Backup Diagnosis)

Page module: `content/pages/sl-henderson-backup.tsx` (`hendersonBackupContent`).
Shared blocks: `content/pages/sl-blocks/recurring-sewer-backup-diagnosis.ts`.

Sources: the Henderson location page (`content/pages/las-vegas-henderson.tsx`, `hendersonContent`) and the service page (`content/pages/services.tsx`, `svc-recurring-sewer-backup-diagnosis`, `v2`). No new research and no new business fact.

Status key: **USED** = verbatim or near-verbatim; **ADAPTED** = restated for this service or trimmed; **LEFT OUT** = not on this page.

## The four body cards and their sources

| Card (h2) | Local source (Henderson page) | Service source (backup page) |
| --- | --- | --- |
| 1. A repeat backup: the City's main or your lateral? | `responsibility` (answer, cards, table rows), `systemExplainer` "main and your connection", "Main blockages", `systemExplainer.card.closing` (footage does not establish where the City connection is), `keyTakeaways` 1 | FAQ "Is a recurring backup the city's problem or mine?" (findings apply only to the segment inspected and do not by themselves establish responsibility), `limits.callout` |
| 2. During a backup: the City's contacts, and where a diagnosis fits | `whoToCall` (emergency call center, Contact Henderson portal), `municipalProgram.doesNotCover` 5 (no City sewage-backup cleanup or containment procedure), emergency FAQ | `definition.supporting`, `process` (clearing, camera, findings), `independent` |
| 3. Most Henderson homes are newer, so the year built will not explain a backup | `housingAge` paragraph and `sourceNote` (median 2001, 82.1 percent, repaired, rerouted or replaced) | `causes` (grease, wipes, roots, sag, cracks, joints, defective connection, collapse) and FAQ "Why does my sewer keep backing up?" |
| 4. No City program to pay for it, so get the evidence first | `municipalProgram` lede and covers 3 (none found; owner pays on its side) | `independent.note` (significant condition may need evaluation outside our scope; multiple written estimates; ask why they differ), `definition` ("does not repair anything") |

## Other page fields

| Field | Built from |
| --- | --- |
| `seoTitle`, `metaDescription` (156 chars), `serviceDescription` | Service `serviceDescription`, localized with the City main versus lateral rule |
| `hero.intro` | `responsibility` + service `hero.intro` |
| `problems` 1-3 | Service `signals` items 1, 2 and 6 (verbatim, via `sl-blocks`) |
| `problems` 4 (local card) | `buyingGuide.body` (no sale rule found, not a confirmed absence, state law not addressed) + service `situations` home buyers and sellers and FAQ on using the video for a sale |
| `inclusions` (6) | Service `process` steps and owner-confirmed video and written findings (2026-10-05). Reinspection, locating as always included and hydro jetting on every visit are NOT claimed |
| `process` (6 steps) | Service `process.steps`, verbatim; no equipment named |
| `coverage`, `relatedPageIds` | Same shape as the pilot; related = Henderson location, backup service, camera inspection, cleaning and camera inspection |
| `cta` | Page-specific |
| FAQ (35) | 8 Henderson questions + 27 service questions, see FAQ tables |

## Henderson location page: every section

| Section / element | Status | Reason or where used |
| --- | --- | --- |
| `seoTitle`, `metaDescription` | LEFT OUT | Location-level meta; this page has its own |
| `hero.intro` | ADAPTED | City main versus lateral rule in the hero |
| `heroForm` bullets and card (form, next steps, emergency note) | LEFT OUT | Form chrome of the location page; the emergency contact is used in card 2 |
| `keyTakeaways` 1 (connection; City cleans main blockages) | ADAPTED | Card 1 |
| `keyTakeaways` 2 (periodic professional inspection duty) | LEFT OUT | A diagnosis is not framed as that duty |
| `keyTakeaways` 3 (none found) | USED | Card 4 |
| `keyTakeaways` jump nav | LEFT OUT | Navigation for the location page |
| `serviceCards` | LEFT OUT | Location-page grid |
| `responsibility.answer` paragraph 1 (connection, repair and cost rule) | USED | Card 1 |
| `responsibility.answer` paragraph 2 (duties list, periodic inspection, camera shows where a condition sits) | ADAPTED | Card 1 (cost duties); inspection duty left out |
| `responsibility.cards` City main | USED | Card 1 |
| `responsibility.cards` sewer service lateral | ADAPTED | Card 1, hero |
| `responsibility.table` rows "Who maintains it", "Where it ends" | ADAPTED | Card 1 |
| `responsibility.table` row "Who to contact first" | ADAPTED | Card 2 |
| `responsibility.table` row "What help exists" | ADAPTED | Card 1 (City pays for its main) and card 4 (none found) |
| `responsibility.table` row "Where an inspection helps" | ADAPTED | Card 2 (what you bring when the City or a contractor points to your lateral) |
| `responsibility.note` | LEFT OUT | Caveat is carried by the FAQ answers; see open questions |
| `systemExplainer` paragraph 1 (Utility Services department) | LEFT OUT | Agency background |
| `systemExplainer` "The City main and your connection" | USED | Card 1 |
| `systemExplainer` "Main blockages" (City pays cleanup and repair, incl. street or driveway) | USED | Card 1 |
| `systemExplainer` "Septic properties" (AB 220, 702-267-3670) | LEFT OUT | Septic connection rules do not bear on a sewer backup diagnosis; third City number |
| `systemExplainer` "pages do not say combined or separate, age, treatment" | LEFT OUT | Not tied to a diagnosis |
| `systemExplainer` "Nothing tells you the condition of any lateral" | ADAPTED | Card 3 |
| `systemExplainer.card` bullets (what a camera can show) | LEFT OUT | The service page's own `limits.can` list is richer |
| `systemExplainer.card.closing` (footage does not establish where the City connection is) | USED | Card 1 |
| `housingAge` paragraph | ADAPTED | Card 3 uses median and 82.1 percent; decade counts, 60.2 and 3.1 left out |
| `housingAge.table` | LEFT OUT | No table slot |
| `housingAge.sourceNote` attribution | ADAPTED | Card 3 names ACS 2020-2024 5-year, Henderson city, "our arithmetic"; links and margin of error left out |
| `housingAge.sourceNote` closing (repaired, rerouted or replaced; Census place caveat) | ADAPTED | Card 3; Census-place caveat left out |
| `whoToCall` paragraph (emergency, portal, permit, independent inspection) | ADAPTED | Card 2 (emergency, portal, "when the City or a contractor points to your lateral"); right-of-way permit left out |
| `whoToCall.agency` Utility Services 702-267-5900 | USED | Card 2, labelled "the City's number, not ours" |
| `whoToCall.secondaryAgency` Public Works 702-267-3600 | LEFT OUT (body); USED (FAQ) | Permit question is not a backup question; stays in the permit FAQ |
| `whoToCall.company` | LEFT OUT | Company contact comes from the site shell |
| `municipalProgram.lede` | USED | Card 4 |
| `municipalProgram.covers` 1 (responsibility begins at the connection) | ADAPTED | Card 1 |
| `municipalProgram.covers` 2 (City maintains main, pays for blockage in its main) | USED | Card 1 |
| `municipalProgram.covers` 3 (owner pays on its side) | USED | Cards 1 and 4 |
| `municipalProgram.covers` 4 (periodic professional inspection duty) | LEFT OUT | Not framed as a duty here |
| `municipalProgram.covers` 5 (right-of-way permit) | LEFT OUT | In the permit FAQ |
| `municipalProgram.doesNotCover` 1 (no grant, reimbursement, application process) | USED | Card 4 |
| `municipalProgram.doesNotCover` 2 (damage from City work) | LEFT OUT | The FAQ answers carry the caveat |
| `municipalProgram.doesNotCover` 3 (permit rules for private-property work, cleaning) | LEFT OUT | In the permit FAQ |
| `municipalProgram.doesNotCover` 4 (no lateral inspection program) | LEFT OUT | Not tied to a diagnosis |
| `municipalProgram.doesNotCover` 5 (no sewage-backup procedure) | USED | Card 2 |
| `municipalProgram.doesNotCover` 6 (combined or separate system) | LEFT OUT | Not tied to a diagnosis |
| `municipalProgram.whoCanApply` | LEFT OUT | Program framing; there is no program |
| `municipalProgram.callout` | LEFT OUT | "Confirm with the City" is in card 1 ("Ask the City how its rule applies to your address") |
| `municipalProgram.closing` (we do not repair or arrange reimbursement) | ADAPTED | Card 4 says we do not sell repair or replacement; "arrange reimbursement" left out |
| `secondOpinion` (ledes, steps, callout, CTA) | ADAPTED | Card 4 uses the position (evidence before work, no repair sale) via the service page's `independent.note`; the three-step and callout text left out as repeated by the service band |
| `buyingGuide.lede` | LEFT OUT | Camera and home-inspector content |
| `buyingGuide.body` (no sale rule found; Customer Portal; locating) | ADAPTED | Local problem card (no sale rule found, not a confirmed absence, state law not addressed); portal-transfer and locating sentences left out |
| `buyingGuide` links, CTA, agents panel | LEFT OUT | Location-page conversion blocks |
| `nearbyAreas` | ADAPTED | `coverage` uses three location ids; market hub left out as in the pilot |
| `finalCta` | LEFT OUT | The page has its own CTA |
| `sources` (7 links) | LEFT OUT | Location-page field; figures are attributed in-line |

## Henderson FAQ (10 questions)

| Question | Status | Reason |
| --- | --- | --- |
| Where does my responsibility start in Henderson, and who maintains the City main? | USED | |
| Does the City pay if a blockage is in the City sewer main? | USED | Direct tie to card 1 |
| Does the City of Henderson help pay for lateral repairs? | USED | None found |
| My house is only twenty years old. Is an inspection worth it? | USED | Card 3 |
| Who do I call about a sewer emergency in Henderson? | USED | Card 2 |
| Does lateral work in the public right-of-way need a permit in Henderson? | USED | Cleaning is part of a diagnosis |
| Does Henderson require a sewer inspection when a home is sold? | USED | Local problem card |
| How do I transfer water and sewer service when I buy a home in Henderson? | LEFT OUT | Utility account transfer, unrelated to a backup |
| What does a sewer camera inspection show? | LEFT OUT | The service page's "What can a sewer camera see?" answers it in full |
| Do you repair or replace sewer lines? | USED | |

## Service page (backup): every section

| Section / element | Status | Reason or where used |
| --- | --- | --- |
| `seoTitle`, `metaDescription`, `serviceDescription` | ADAPTED | Localized |
| `hero.intro` and scope line | ADAPTED | Hero; "no repair" sentence in card 4 and the FAQ |
| `hero.scope`, card title and intro | LEFT OUT | Service-page hero card |
| `definition.answer`, `supporting`, `scope` | ADAPTED | `serviceDescription`, cards 2 and 4, inclusions |
| `signals` "The same clog returns" | USED | Problem card 1 |
| `signals` "Several fixtures drain slowly at once" | USED | Problem card 2 |
| `signals` "A drain backs up when another fixture is used" | LEFT OUT | Source text reads "One city says...", which on a Henderson page would be ambiguous |
| `signals` "Gurgling", "Sewage odors" | LEFT OUT | Reduced to three problem cards plus one local |
| `signals` "Wastewater at a cleanout or outside drain" | USED | Problem card 3 |
| `signals` "A yard patch that stays wet" | LEFT OUT | Not tied to a Henderson fact |
| `causes` list (7 causes) | ADAPTED | Card 3 names them in one sentence; the "cleaning does not repair the opening" note is in the FAQ |
| `limits` can and cannot lists, callout | ADAPTED | Card 1 (findings limited to the segment inspected) and the FAQ answers |
| `process` 6 steps | USED | `process`, verbatim |
| `process.prep` | LEFT OUT | "Ask" content |
| `decision` table, list, hydro jetting aside | LEFT OUT | Service-page table; the cleaning-first point is in inclusion 2 and process step 2 |
| `independent` (Clear, Document, Decide; note) | ADAPTED | Card 4 uses the note |
| `ask` items and `keep` | ADAPTED | Video and written findings in inclusions; the rest stays on the service page |
| `situations` landlords | LEFT OUT | Not tied to a Henderson fact |
| `situations` home buyers and sellers | ADAPTED | Local problem card |
| `situations` agents and inspectors | LEFT OUT | Not tied to a Henderson fact |
| `markets` cards | LEFT OUT | Replaced by `coverage` |
| `request`, `relatedDescriptions` | LEFT OUT | Template fields |

## Service FAQ (29 questions)

| Question | Status | Reason |
| --- | --- | --- |
| What is recurring sewer backup diagnosis? | USED | |
| Why does my sewer keep backing up? | USED | |
| Why does my sewer back up again after it was cleared? | USED | |
| How do I know if the backup is in my sewer line or just one drain? | USED | |
| Can grease or "flushable" wipes cause a sewer backup? | USED | |
| Can tree roots cause a recurring sewer backup? | USED | |
| Is a recurring backup the city's problem or mine? | USED | Direct tie to card 1 |
| What is the difference between drain cleaning, hydro jetting, and a camera inspection? | USED | |
| What can a sewer camera see? | USED | |
| Can a sewer camera find the exact cause of a backup? | USED | |
| Can a sewer camera see through standing water? | USED | |
| Does standing water on the video mean there is a belly or sag? | USED | |
| Can a camera tell me if my sewer pipe is about to fail? | USED | |
| Can the camera get past bends, roots, or a collapse? | USED | |
| Can a diagnosis show where the problem is from above ground? | USED | |
| Do you clear the line before running the camera? | USED | |
| If the line is clear after cleaning, is the pipe healthy? | USED | |
| Will hydro jetting damage my sewer line, and is it safe for older pipe? | USED | |
| Where does the camera go in? Do I need a cleanout? | USED | |
| Will I get video and written findings? | USED | |
| What should I ask for after a camera inspection? | USED | |
| What do PACP and LACP grades mean? | USED | Educational only; the page does not claim coding is provided |
| How long does it take, and how much does it cost? | LEFT OUT | The answer carries the DEC-088 "free estimate" wording, which is scoped to the service page; no owner confirmation for the Las Vegas market |
| Can you come the same day, and is this emergency service? | LEFT OUT | DEC-088 same-day wording, scoped the same way; Las Vegas has its own published hours and no confirmation for this claim |
| What if the camera shows something serious? | USED | |
| Should I get a second opinion before approving major sewer work? | USED | |
| How often should a sewer line be inspected? | USED | |
| Can I use the sewer video for a sale or a city review? | USED | |
| Should I get a sewer scope before buying a house? | USED | |

## Open questions

- Cost and same-day FAQs (DEC-088): left out because the page makes no free-estimate or same-day claim for the Las Vegas market. If the owner confirms they apply to Henderson, add them back by removing the two skip entries in `sl-henderson-backup.tsx`.
- Card 1 does not carry the location page's "page is undated, confirm with the City" caveat; the FAQ answers do.
