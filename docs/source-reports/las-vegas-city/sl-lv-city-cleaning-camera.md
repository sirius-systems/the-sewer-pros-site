# Source report: sl-lv-city-cleaning-camera

Page: Sewer Cleaning & Camera Inspection in Las Vegas, NV (`lasVegasCityCleaningCameraContent`, `content/pages/sl-lv-city-cleaning-camera.tsx`).

Sources:
- LOCATION: `lasVegasCityContent` in `content/pages/las-vegas-las-vegas.tsx` (City facts read 2026-10-04, ACS 2020-2024; two City pages date from 2021).
- SERVICE: `svc-sewer-cleaning-camera-inspection` `v2` in `content/pages/services.tsx`, plus `content/pages/sl-blocks/sewer-cleaning-camera-inspection.ts`.

Status key: USED = text taken as published; ADAPTED = fact kept, wording changed to tie it to this service; LEFT OUT = not on this page (reason given).

## The four body sections and their sources

| # | h2 on the page | Las Vegas source | Service source |
|---|---|---|---|
| 1 | Your lateral can run under the street, and cleaning cannot tell you where it ends | `responsibility` (answer p1, lateral card, table), `municipalProgram.covers` 1-2, `systemExplainer.card.closing`, `whoToCall.secondaryAgency` | `definition` (cleaning does not show cause), `limits.cannot` (footage does not establish the connection) |
| 2 | A City main stoppage is the City's, and your lateral is where a visit fits | `systemExplainer` (main stoppages), `whoToCall.agency`, `whoToCall.company`, `responsibility.answer` p2 | `process` (a visit is how a lateral is cleared and documented), `definition.supporting` 2 (not public mains) |
| 3 | A 1990s Las Vegas home does not answer whether the line is clear | `housingAge` (median 1994, 61.3%), `systemExplainer` p9 | `signals` ("Clogs that keep coming back") |
| 4 | No City repair program found, so the footage is what you compare against | `municipalProgram` (lede, doesNotCover 1 and 3, covers 5, closing), `keyTakeaways` 3, `secondOpinion` | `limits.callout`, `ask.keep` (compare against estimates), `process.steps` 5 |

## City of Las Vegas location page

| Section / card / fact | Status | Where / reason |
|---|---|---|
| seoTitle | ADAPTED | Service name swapped in |
| metaDescription | LEFT OUT | Replaced by a page-specific description |
| hero.title | ADAPTED | H1 names this service |
| hero.intro (City maintains the main; owner maintains the private lateral up to the connection) | ADAPTED | Hero intro |
| heroForm bullets, request card, form | LEFT OUT | Template supplies its own request form |
| heroForm bullet "newer market for us" | ADAPTED | Section 2 |
| heroForm card note (main stoppage: call Streets & Sanitation) | ADAPTED | Section 2, marked as the City's number |
| faqHeading | LEFT OUT | Template sets it |
| keyTakeaways 1 (City main under streets or easements; confirm the City serves your address) | LEFT OUT | No tie to cleaning |
| keyTakeaways 2 (owners maintain laterals; addenda: private through the right-of-way) | ADAPTED | Section 1 |
| keyTakeaways 3 (no City lateral program found; optional private warranty) | ADAPTED | Section 4 |
| keyTakeaways jumpNav | LEFT OUT | No on-page anchors in this template |
| serviceCards (9) and helpBar | LEFT OUT | Hub grid; related links cover siblings |
| responsibility.answer p1 (City maintains main; owner to the connection; addenda: private under the street) | ADAPTED | Section 1 |
| responsibility.answer p2 (main stoppage is the City's; contractor may need to investigate; camera shows which) | ADAPTED | Section 2; the camera sentence is LEFT OUT (this page is the camera service) |
| responsibility card: the public sewer main | ADAPTED | Section 2 (stoppage is the City's) |
| responsibility card: the private sewer lateral | ADAPTED | Section 1 |
| responsibility table: Who maintains it | ADAPTED | Section 1 |
| responsibility table: Where it ends | ADAPTED | Section 1 |
| responsibility table: Who to contact first | ADAPTED | Section 2 |
| responsibility table: What help exists | ADAPTED | Section 4 |
| responsibility table: Where an inspection helps | ADAPTED | Section 1 (footage records where along the line; does not establish the connection) |
| responsibility.note (not legal advice; 2021 page dates; no claim about City-work damage) | LEFT OUT | No legal claim is made; "none found" and "confirm" wording carry the caveat. Open item: the two 2021 page dates are not stated on this page |
| systemExplainer p1 (Public Works, City Engineering, Streets & Sanitation) | LEFT OUT | Department roles do not change what cleaning does |
| systemExplainer p2 (public mains, streets and easements) | ADAPTED | Section 1 (the City maintains the public main) |
| systemExplainer p3 (condition assessment, aging system) | LEFT OUT | The City's stated mission, not a finding; no tie to this service |
| systemExplainer p4 (main stoppages affect upstream properties, overflow manholes) | ADAPTED | Section 2 |
| systemExplainer p5 (public sewer map with a privately maintained layer) | LEFT OUT | No tie to cleaning |
| systemExplainer p6 (a Las Vegas mailing address does not show the City serves you) | LEFT OUT | No tie to cleaning |
| systemExplainer p7 (septic: Southern Nevada Health District) | LEFT OUT | About septic properties |
| systemExplainer p8 (combined or separate, ages: no claim) | LEFT OUT | "We make no claim" items with no tie to this service |
| systemExplainer p9 (nothing tells a lateral's condition) | ADAPTED | Section 3 |
| systemExplainer card bullets (what a camera can show) | LEFT OUT | The service FAQ answers this in full with limits |
| systemExplainer card closing (distance count; does not establish the connection) | ADAPTED | Section 1 |
| housingAge para: median year built 1994 (margin 1 year) | ADAPTED | Section 3 (margin LEFT OUT) |
| housingAge: 61.3 percent built 1990 or later | USED | Section 3 |
| housingAge: 1990s largest decade (74,732 units, 27.9%) | LEFT OUT | Cut for length; kept in the FAQ |
| housingAge: 25.9 percent 1970 to 1989, 12.8 percent before 1970 | LEFT OUT | Not needed; kept in the FAQ |
| housingAge.table (4 rows) | LEFT OUT | No table slot |
| housingAge.sourceNote attribution (ACS 2020-2024 5-year, Las Vegas city, our arithmetic; B25034, B25035) | ADAPTED | Section 3 names the survey and "our arithmetic"; table ids and links LEFT OUT |
| housingAge.sourceNote closing (year built does not tell condition; repaired, rerouted or replaced; Census place caveat) | ADAPTED | Section 3 (year built does not tell what is in the line); other clauses LEFT OUT |
| whoToCall.paragraphs (main stoppage vs. property problem) | ADAPTED | Section 2 |
| whoToCall.agency (Streets & Sanitation, 702-229-6227; no hours or after-hours number) | ADAPTED | Section 2, the City's number; "no hours" sentence cut for length, still in the FAQ |
| whoToCall.secondaryAgency (Sanitary Sewer Engineering, 702-229-6541, "Sewer Location" form) | ADAPTED | Section 1 (number only), the City's number |
| whoToCall.company (phone, hours, newer market) | ADAPTED | Section 2: phone from `marketOperatingDetail`, newer-market sentence; hours LEFT OUT (data string has an en dash, no hours claim) |
| municipalProgram.lede ("none found", pages reviewed) | ADAPTED | Section 4 |
| municipalProgram.covers 1 (owners maintain private laterals; March 10, 2021 post) | ADAPTED | Section 1 |
| municipalProgram.covers 2 (addenda: private through the right-of-way; LVMC 14.04.120 not reviewed) | ADAPTED | Section 1 (code section not cited) |
| municipalProgram.covers 3 (online permit category for building water and sewer repairs/replacements) | LEFT OUT | About repairs; this page makes no permit claim for cleaning |
| municipalProgram.covers 4 ("Bldg Sewer (Yard Lines)" inspection type) | LEFT OUT | No tie to cleaning |
| municipalProgram.covers 5 (homeowner permit guide; Building & Safety 702-229-6251) | ADAPTED | Section 4: number only, the City's number |
| municipalProgram.doesNotCover 1 (no grant, reimbursement, cap, application) | ADAPTED | Section 4 |
| municipalProgram.doesNotCover 2 (damage from City work; who repairs in the right-of-way) | LEFT OUT | No tie; the source makes no claim |
| municipalProgram.doesNotCover 3 (no statement that cleaning or a camera inspection needs a permit) | ADAPTED | Section 4 |
| municipalProgram.doesNotCover 4 (no after-hours number or sewer reporting page) | LEFT OUT | Cut for length; FAQ carries it |
| municipalProgram.doesNotCover 5 (no City inspection requirement for existing laterals) | LEFT OUT | No tie |
| municipalProgram.doesNotCover 6 (combined or separate system) | LEFT OUT | No tie |
| municipalProgram.whoCanApply (owners of City-served properties; confirm with Sanitary Sewer Engineering) | LEFT OUT | Not repeated; FAQ carries it |
| municipalProgram.callout (confirm the City serves you; ask Building & Safety which approvals apply) | LEFT OUT | Permit referral is in section 4 |
| municipalProgram.closing (optional private warranty; we do not repair or arrange reimbursement) | ADAPTED | Section 4: warranty named only as "a private company", a product you buy; provider name LEFT OUT; "we do not perform repairs or replacements" kept |
| secondOpinion ledes, steps, callout, CTA | ADAPTED | Section 4 last sentence (footage and findings compared against an estimate); the rest LEFT OUT, the template carries its own independent band |
| buyingGuide.lede (owner after closing; ask home inspector; sewer scope) | ADAPTED | Fourth problem card (the City says the lateral is the owner's) |
| buyingGuide.body: no sale rule found; state law outside the page | ADAPTED | Fourth problem card |
| buyingGuide.body: Sanitary Sewer Engineering and the sewer map; permits as a record | LEFT OUT | No room; FAQ carries the connection question |
| buyingGuide links, CTA, agents block | LEFT OUT | Hub elements |
| nearbyAreas (Summerlin, Henderson, North Las Vegas, market hub) | ADAPTED | `coverage`: three areas; market hub left out as in the Henderson pages |
| finalCta title | ADAPTED | `cta.title` |
| finalCta paragraphs, bullets | LEFT OUT | Replaced by `cta.body` |
| sources (9 links, lastReviewed, closingNote) | USED | Passed through as `sources: lasVegasCityContent.sources`; City and Census attributions are also stated inline. Open item: confirm the template renders them |

### Las Vegas FAQ (9)

| Question | Status | Reason |
|---|---|---|
| Who is responsible for a sewer lateral at a City of Las Vegas property, and who maintains the main? | USED | Verbatim |
| How old are Las Vegas homes, and does that tell me about my lateral? | USED | Verbatim; carries the 27.9 / 25.9 / 12.8 percent figures cut from the body. On the locating page it is kept because its answer (year built does not tell the lateral's condition or material) backs section 3 |
| Who do I call about a sewer backup in Las Vegas? | USED | Verbatim; carries the City's Streets & Sanitation number and the no-hours note |
| Does the City of Las Vegas help with lateral costs, and what is its warranty? | USED | Verbatim; carries the warranty provider name and the none-found wording |
| How do I find where my lateral connects to the City main? | USED | Verbatim; carries the "Sewer Location" form. Most relevant to the locating page |
| Does lateral work in Las Vegas need a permit? | USED | Verbatim |
| Does Las Vegas require a sewer inspection when a home is sold? | USED | Verbatim |
| What does a sewer camera inspection show? | LEFT OUT | Cleaning-camera: the service page asks the same question with the fuller answer (adds what a camera does not show), so the service answer is used. Locating: the service FAQ on cameras covers it. Drain: the drain FAQ has no such question and a camera may be added to a visit |
| Do you repair or replace sewer lines? | USED | Verbatim |

## Service page (`svc-sewer-cleaning-camera-inspection`)

| Section / card / fact | Status | Where / reason |
|---|---|---|
| seoTitle | ADAPTED | "Sewer Cleaning & Camera Inspection in Las Vegas, NV" |
| metaDescription | LEFT OUT | Market-neutral; replaced |
| serviceDescription | ADAPTED | Same two-service definition, City of Las Vegas added |
| hero.title | ADAPTED | "Sewer Cleaning and Camera Inspection in Las Vegas" |
| hero.intro p1 (clear what can be cleared; camera before, after or both) | ADAPTED | Hero intro |
| hero.intro p2 (no repair, replacement, lining, excavation, pipe installation) | ADAPTED | Section 4 ("We do not perform repairs or replacements") and the FAQ |
| hero.scope bullets (3) | LEFT OUT | Template element |
| definition.answer | ADAPTED | `serviceDescription` |
| definition.supporting 1 (camera before, after or both) | USED | Hero intro |
| definition.supporting 2 (private-property lines only, not public mains) | ADAPTED | Section 2 (a main stoppage is the City's) |
| signals 1 Several fixtures slow | USED | Problem card 1 (via `sl-blocks`) |
| signals 2 Gurgling | LEFT OUT | Four problem slots; FAQ "What are signs I may need cleaning or a camera inspection?" |
| signals 3 Clogs that keep coming back | USED | Problem card 2; section 3 |
| signals 4 Water rising in a floor drain, tub, toilet | USED | Problem card 3 |
| signals 5 Sewage-like odor, 6 Water at a cleanout | LEFT OUT | Slots; FAQ covers the signs |
| signals.note (drain cleaning may fit one fixture) | LEFT OUT | Points to a separate service |
| limits.intro, limits.can (9 items) | LEFT OUT | Service FAQ "What does a sewer camera inspection show?" and "Can a camera find roots, cracks, or a collapsed pipe?" carry them |
| limits.cannot: below the waterline | ADAPTED | Fourth problem card |
| limits.cannot: other items | LEFT OUT | FAQ answers (clear video, leak, structural, blockage) |
| limits.callout (flows again is not proof) | ADAPTED | Section 4 |
| limits.related (locating) | LEFT OUT | FAQ "Can you locate my sewer line, and how deep is it?" |
| process eyebrow/title/intro | LEFT OUT | Template renders its own heading |
| process steps 1 to 5 | USED | `process`, verbatim; equipment names only as the owner confirmed (step 3) |
| process.prep (3 items) | LEFT OUT | No slot; FAQ covers the entry point |
| decision.answer (no required order) | ADAPTED | Hero, fourth problem card, FAQ "Does the camera or the cleaning come first?" |
| decision.list, decision.links | LEFT OUT | No slot |
| comparison table (7 rows) | LEFT OUT | No slot; related pages link the siblings |
| ask.intro, items 1-2 (video, written findings) | USED | Inclusion 6 |
| ask items 3-5 | LEFT OUT | Slot; FAQ answers carry entry point, locating and time |
| ask.keep (ask another company to review the video) | ADAPTED | Section 4 (compare footage and findings against an estimate) |
| audiences: Homeowners | LEFT OUT | Problem cards |
| audiences: Home buyers | ADAPTED | Fourth problem card |
| markets (3 hubs) | LEFT OUT | Replaced by `coverage` |
| faqTitle | LEFT OUT | Template sets it |
| relatedPageIds (8) | ADAPTED | Four used: City of Las Vegas page, this service, camera inspection, sewer cleaning |
| relatedDescriptions, request.* | LEFT OUT | Template slots |
| cta | ADAPTED | Rewritten for Las Vegas |
| inclusions (6 cards) | USED | process and ask sentences; `sl-blocks` |

### Service FAQ (21)

All 21 are USED, verbatim: What are sewer cleaning and camera inspection? / What does a sewer camera inspection show? / Does the camera or the cleaning come first? / What is the difference between hydro jetting and cable cleaning? / Does a clear video mean my line is healthy? / Can a camera find a leak? / Can a camera tell whether my pipe is structurally sound? / Can a camera find roots, cracks, or a collapsed pipe? / What if the camera cannot get past a blockage? / Does hydro jetting damage pipes? / What access point do you use, and can you inspect without an outside cleanout? / Do I get a copy of the video? / Will I get written findings? / Can you locate my sewer line, and how deep is it? / How long does it take, and how much does it cost? / What are signs I may need cleaning or a camera inspection? / Should I have the sewer line looked at before buying a house? / Is a sewer scope part of a standard home inspection? / How often should a line be cleaned or inspected? / Can I flush "flushable" wipes? / Will a chemical drain cleaner solve a sewer backup?

None of these carries the DEC-088 free-estimate or same-day wording (those answers belong to the hydro jetting and backup service pages), so nothing needed carrying here. The cost/time answer says time and cost vary.

Total FAQ on the page: 29 (8 Las Vegas + 21 service).

