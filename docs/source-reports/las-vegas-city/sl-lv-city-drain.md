# Source report: sl-lv-city-drain

Page: Drain Cleaning in Las Vegas, NV (`lasVegasCityDrainContent`, `content/pages/sl-lv-city-drain.tsx`).

Sources:
- LOCATION: `lasVegasCityContent` in `content/pages/las-vegas-las-vegas.tsx` (City facts read 2026-10-04, ACS 2020-2024; two City pages date from 2021).
- SERVICE: `svc-drain-cleaning` `v2` in `content/pages/services.tsx`, plus `content/pages/sl-blocks/drain-cleaning.ts`.

Status key: USED = text taken as published; ADAPTED = fact kept, wording changed to tie it to this service; LEFT OUT = not on this page (reason given).

## The four body sections and their sources

| # | h2 on the page | Las Vegas source | Service source |
|---|---|---|---|
| 1 | Your fixture drains sit upstream of a lateral the City calls private | `responsibility` (answer p1, City main card, table), `municipalProgram.covers` 1, `systemExplainer` p2 | `definition.supporting` 1 (drain vs sewer cleaning), `limits.cannot` (the public main and the connection) |
| 2 | One drain, several drains, or a stoppage in the main | `whoToCall` (Streets & Sanitation, company line), `systemExplainer` p4, `responsibility.answer` p2 | `signals` (one slow, several, gurgling, water or sewage coming up), `triage` rows 1, 2, 5 |
| 3 | A 1990s Las Vegas house says little about its drains | `housingAge` (median 1994, 61.3%), `systemExplainer` p9 | `signals` ("Clogs that keep returning"), `triage` row 4 |
| 4 | No City help found, so know what cleaning does not fix | `municipalProgram` (lede, doesNotCover 1 and 3, covers 5, closing), `secondOpinion` | `limits.cannot` (crack, offset, roots at a joint), `ask.keep`, `independent.note`, `definition.scope` |

## City of Las Vegas location page

| Section / card / fact | Status | Where / reason |
|---|---|---|
| seoTitle | ADAPTED | Service name swapped in |
| metaDescription | LEFT OUT | Replaced by a page-specific description |
| hero.title | ADAPTED | H1 names this service |
| hero.intro (City maintains the main; owner maintains the private lateral up to the connection) | ADAPTED | Hero intro: fixture drains sit upstream of the lateral |
| heroForm bullets, request card, form | LEFT OUT | Template supplies its own request form |
| heroForm bullet "newer market for us" | ADAPTED | Section 2 |
| heroForm card note (main stoppage: call Streets & Sanitation) | ADAPTED | Section 2, marked as the City's number |
| faqHeading | LEFT OUT | Template sets it |
| keyTakeaways 1 (City main under streets or easements; confirm the City serves your address) | LEFT OUT | No tie to drain cleaning |
| keyTakeaways 2 (owners maintain laterals; addenda: private through the right-of-way) | ADAPTED | Section 1 (connection rule); the right-of-way clause is LEFT OUT because fixture drains are inside the home |
| keyTakeaways 3 (no City lateral program found; optional private warranty) | ADAPTED | Section 4 |
| keyTakeaways jumpNav | LEFT OUT | No on-page anchors in this template |
| serviceCards (9) and helpBar | LEFT OUT | Hub grid; related links cover siblings |
| responsibility.answer p1 (City maintains main; owner to the connection; addenda: private under the street) | ADAPTED | Section 1 (connection rule; addenda wording LEFT OUT) |
| responsibility.answer p2 (main stoppage is the City's; contractor may need to investigate; camera shows which) | ADAPTED | Section 2 (contractor sentence); camera sentence LEFT OUT |
| responsibility card: the public sewer main | ADAPTED | Section 1 (City maintains the main) |
| responsibility card: the private sewer lateral | ADAPTED | Section 1 |
| responsibility table: Who maintains it | ADAPTED | Section 1 |
| responsibility table: Where it ends | ADAPTED | Section 1 (connection only) |
| responsibility table: Who to contact first | ADAPTED | Section 2 |
| responsibility table: What help exists | ADAPTED | Section 4 |
| responsibility table: Where an inspection helps | LEFT OUT | Camera inspection is a separate service |
| responsibility.note (not legal advice; 2021 page dates; no claim about City-work damage) | LEFT OUT | Same |
| systemExplainer p1 (Public Works, City Engineering, Streets & Sanitation) | LEFT OUT | Not about drain cleaning |
| systemExplainer p2 (public mains, streets and easements) | ADAPTED | Section 1 |
| systemExplainer p3 (condition assessment, aging system) | LEFT OUT | Same |
| systemExplainer p4 (main stoppages affect upstream properties, overflow manholes) | ADAPTED | Section 2 |
| systemExplainer p5 (public sewer map with a privately maintained layer) | LEFT OUT | No tie to drain cleaning |
| systemExplainer p6 (a Las Vegas mailing address does not show the City serves you) | LEFT OUT | No tie to drain cleaning |
| systemExplainer p7 (septic: Southern Nevada Health District) | LEFT OUT | About septic properties |
| systemExplainer p8 (combined or separate, ages: no claim) | LEFT OUT | Same |
| systemExplainer p9 (nothing tells a lateral's condition) | ADAPTED | Section 3 |
| systemExplainer card bullets (what a camera can show) | LEFT OUT | Camera is a separate service |
| systemExplainer card closing (distance count; does not establish the connection) | LEFT OUT | Camera sentence; no tie to drain cleaning |
| housingAge para: median year built 1994 (margin 1 year) | ADAPTED | Section 3 (margin LEFT OUT) |
| housingAge: 61.3 percent built 1990 or later | USED | Section 3 |
| housingAge: 1990s largest decade (74,732 units, 27.9%) | ADAPTED | Section 3 uses "a house from the 1990s is close to the median" with 61.3%; the 27.9% and unit count LEFT OUT |
| housingAge: 25.9 percent 1970 to 1989, 12.8 percent before 1970 | LEFT OUT | Not needed; kept in the FAQ |
| housingAge.table (4 rows) | LEFT OUT | No table slot |
| housingAge.sourceNote attribution (ACS 2020-2024 5-year, Las Vegas city, our arithmetic; B25034, B25035) | ADAPTED | Section 3, same |
| housingAge.sourceNote closing (year built does not tell condition; repaired, rerouted or replaced; Census place caveat) | ADAPTED | Section 3 (age does not tell what is in a drain line); other clauses LEFT OUT |
| whoToCall.paragraphs (main stoppage vs. property problem) | ADAPTED | Section 2 |
| whoToCall.agency (Streets & Sanitation, 702-229-6227; no hours or after-hours number) | ADAPTED | Section 2, the City's number; "no hours" sentence cut for length, still in the FAQ |
| whoToCall.secondaryAgency (Sanitary Sewer Engineering, 702-229-6541, "Sewer Location" form) | LEFT OUT | No tie to drain cleaning; FAQ carries it |
| whoToCall.company (phone, hours, newer market) | ADAPTED | Section 2: phone from `marketOperatingDetail`, newer-market sentence; hours LEFT OUT |
| municipalProgram.lede ("none found", pages reviewed) | ADAPTED | Section 4 |
| municipalProgram.covers 1 (owners maintain private laterals; March 10, 2021 post) | ADAPTED | Section 1 |
| municipalProgram.covers 2 (addenda: private through the right-of-way; LVMC 14.04.120 not reviewed) | LEFT OUT | Right-of-way is not where fixture drains are |
| municipalProgram.covers 3 (online permit category for building water and sewer repairs/replacements) | LEFT OUT | About repairs; no permit claim for cleaning |
| municipalProgram.covers 4 ("Bldg Sewer (Yard Lines)" inspection type) | LEFT OUT | No tie to drain cleaning |
| municipalProgram.covers 5 (homeowner permit guide; Building & Safety 702-229-6251) | ADAPTED | Section 4: number only, the City's number |
| municipalProgram.doesNotCover 1 (no grant, reimbursement, cap, application) | ADAPTED | Section 4 |
| municipalProgram.doesNotCover 2 (damage from City work; who repairs in the right-of-way) | LEFT OUT | No tie; the source makes no claim |
| municipalProgram.doesNotCover 3 (no statement that cleaning or a camera inspection needs a permit) | ADAPTED | Section 4 (cleaning only) |
| municipalProgram.doesNotCover 4 (no after-hours number or sewer reporting page) | LEFT OUT | Cut for length; FAQ carries it |
| municipalProgram.doesNotCover 5 (no City inspection requirement for existing laterals) | LEFT OUT | No tie |
| municipalProgram.doesNotCover 6 (combined or separate system) | LEFT OUT | No tie |
| municipalProgram.whoCanApply (owners of City-served properties; confirm with Sanitary Sewer Engineering) | LEFT OUT | Not repeated; FAQ carries it |
| municipalProgram.callout (confirm the City serves you; ask Building & Safety which approvals apply) | LEFT OUT | Permit referral is in section 4 |
| municipalProgram.closing (optional private warranty; we do not repair or arrange reimbursement) | ADAPTED | Section 4: same wording |
| secondOpinion ledes, steps, callout, CTA | ADAPTED | Section 4 last sentence (video and findings compared against an estimate); rest LEFT OUT |
| buyingGuide.lede (owner after closing; ask home inspector; sewer scope) | ADAPTED | Fourth problem card (the City says the lateral is the owner's) |
| buyingGuide.body: no sale rule found; state law outside the page | ADAPTED | Fourth problem card |
| buyingGuide.body: Sanitary Sewer Engineering and the sewer map; permits as a record | LEFT OUT | No tie to drain cleaning |
| buyingGuide links, CTA, agents block | LEFT OUT | Hub elements |
| nearbyAreas (Summerlin, Henderson, North Las Vegas, market hub) | ADAPTED | `coverage`: same |
| finalCta title | ADAPTED | `cta.title` |
| finalCta paragraphs, bullets | LEFT OUT | Replaced by `cta.body` |
| sources (9 links, lastReviewed, closingNote) | USED | Same |

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
| What does a sewer camera inspection show? | USED | Cleaning-camera: the service page asks the same question with the fuller answer (adds what a camera does not show), so the service answer is used. Locating: the service FAQ on cameras covers it. Drain: the drain FAQ has no such question and a camera may be added to a visit |
| Do you repair or replace sewer lines? | USED | Verbatim |

## Service page (`svc-drain-cleaning`)

| Section / card / fact | Status | Where / reason |
|---|---|---|
| seoTitle | ADAPTED | "Drain Cleaning in Las Vegas, NV" |
| metaDescription | LEFT OUT | Market-neutral; replaced |
| serviceDescription | ADAPTED | Same definition, City of Las Vegas added |
| hero.title | ADAPTED | "Drain Cleaning in Las Vegas" |
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
| audiences: Home buyers, Home sellers | ADAPTED | Fourth problem card |
| markets (3 hubs) | LEFT OUT | Replaced by `coverage` |
| faqTitle, situations, terms, request.* | LEFT OUT | Template slots; FAQ answers carry the situations and "tell us" items |
| relatedPageIds (4) | ADAPTED | City of Las Vegas page, this service, sewer cleaning, camera inspection |
| cta | ADAPTED | Rewritten for Las Vegas |
| inclusions (6 cards) | USED | process and ask sentences; `sl-blocks` |

### Service FAQ (37)

34 USED verbatim, 3 LEFT OUT.

Understanding drain cleaning (6), Symptoms and causes (11), Documentation and locating (3), Maintenance and prevention (4), Real estate (1): all USED.

Limits and cameras (7): Can drain cleaning fix a broken or collapsed pipe? (LEFT OUT: duplicate of "Does drain cleaning repair a damaged pipe?") / Can cleaning remove tree roots? (LEFT OUT: covered by "Can tree roots grow into drain pipes?") / Is hydro jetting safe for every pipe? / Does drain cleaning damage pipes? / Does a camera inspection come with drain cleaning? / Can a camera see through standing water? / Does a line that flows again mean the pipe is fine? (the last five USED)

Requesting service (5): Do you clean drains in St. Louis, San Diego, and Las Vegas? (LEFT OUT: this page is an area page, the question belongs to the hub) / How much does drain cleaning cost? / How long does drain cleaning take? / What should I tell you when I request drain cleaning? / What happens if a camera shows damage? (the last four USED; they say cost and time vary and carry no DEC-088 wording)

Total FAQ on the page: 43 (9 Las Vegas + 34 service).

