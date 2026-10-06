# Source report: sl-lv-city-locating

Page: Sewer Line Locating in Las Vegas, NV (`lasVegasCityLocatingContent`, `content/pages/sl-lv-city-locating.tsx`).

Sources:
- LOCATION: `lasVegasCityContent` in `content/pages/las-vegas-las-vegas.tsx` (City facts read 2026-10-04, ACS 2020-2024; two City pages date from 2021).
- SERVICE: `svc-sewer-line-locating` `v2` in `content/pages/services.tsx`, plus `content/pages/sl-blocks/sewer-line-locating.ts`.

Status key: USED = text taken as published; ADAPTED = fact kept, wording changed to tie it to this service; LEFT OUT = not on this page (reason given).

## The four body sections and their sources

| # | h2 on the page | Las Vegas source | Service source |
|---|---|---|---|
| 1 | A lateral that can run under the street, on a map that does not show it all | `responsibility` (answer p1, table), `municipalProgram.covers` 1-2, `systemExplainer` p5 (sewer map), `whoToCall.secondaryAgency`, `systemExplainer.card.closing` | `limits.cannot` (not a survey; section not reached is not traced), `definition` (estimate of the path) |
| 2 | Before anyone digs: Building & Safety, one-call and your estimate | `municipalProgram` covers 3 and 5, callout (which approvals apply), `responsibility.answer` | `limits.callout` (811 / one-call wording as written), `limits.cannot` (utility clearance, permission to dig), `signals` item 1 |
| 3 | Las Vegas homes, and where the line runs today | `housingAge` (median 1994, 61.3%, repaired/rerouted/replaced), `systemExplainer` p6 (does the City serve your address), `municipalProgram.whoCanApply` | `limits.can` (route and approximate depth at a point), `limits.cannot` (not a look at pipe condition), `decision` note |
| 4 | Buying a Las Vegas home: the route is not the condition | `buyingGuide` lede and body (no sale rule found; owner after closing; not legal advice) | `signals` item 4, `audiences` home buyers, FAQ "Should I have the line located before buying a house?" |

## City of Las Vegas location page

| Section / card / fact | Status | Where / reason |
|---|---|---|
| seoTitle | ADAPTED | Service name swapped in |
| metaDescription | LEFT OUT | Replaced by a page-specific description |
| hero.title | ADAPTED | H1 names this service |
| hero.intro (City maintains the main; owner maintains the private lateral up to the connection) | ADAPTED | Hero intro, plus the City sewer map not showing every private line |
| heroForm bullets, request card, form | LEFT OUT | Template supplies its own request form |
| heroForm bullet "newer market for us" | LEFT OUT | Company contact comes from the site shell, as on the Henderson locating page |
| heroForm card note (main stoppage: call Streets & Sanitation) | LEFT OUT | Not about locating; the contact stays in the FAQ |
| faqHeading | LEFT OUT | Template sets it |
| keyTakeaways 1 (City main under streets or easements; confirm the City serves your address) | ADAPTED | Section 3 ("confirm the City serves your address"); the easement clause is LEFT OUT |
| keyTakeaways 2 (owners maintain laterals; addenda: private through the right-of-way) | ADAPTED | Section 1 |
| keyTakeaways 3 (no City lateral program found; optional private warranty) | LEFT OUT | Repair-program material is not about locating; the FAQ carries it |
| keyTakeaways jumpNav | LEFT OUT | No on-page anchors in this template |
| serviceCards (9) and helpBar | LEFT OUT | Hub grid; related links cover siblings |
| responsibility.answer p1 (City maintains main; owner to the connection; addenda: private under the street) | ADAPTED | Section 1 |
| responsibility.answer p2 (main stoppage is the City's; contractor may need to investigate; camera shows which) | LEFT OUT | Not about locating |
| responsibility card: the public sewer main | LEFT OUT | Not about locating |
| responsibility card: the private sewer lateral | ADAPTED | Section 1 and the local problem card |
| responsibility table: Who maintains it | ADAPTED | Section 1 |
| responsibility table: Where it ends | ADAPTED | Section 1 |
| responsibility table: Who to contact first | LEFT OUT | Sanitary Sewer Engineering is used instead for the connection (section 1) |
| responsibility table: What help exists | LEFT OUT | Not about locating |
| responsibility table: Where an inspection helps | LEFT OUT | Camera inspection is a separate service |
| responsibility.note (not legal advice; 2021 page dates; no claim about City-work damage) | LEFT OUT | Same; "check with Sanitary Sewer Engineering" in section 3 |
| systemExplainer p1 (Public Works, City Engineering, Streets & Sanitation) | LEFT OUT | Not about locating |
| systemExplainer p2 (public mains, streets and easements) | LEFT OUT | Not about locating |
| systemExplainer p3 (condition assessment, aging system) | LEFT OUT | Same |
| systemExplainer p4 (main stoppages affect upstream properties, overflow manholes) | LEFT OUT | Not about locating |
| systemExplainer p5 (public sewer map with a privately maintained layer) | ADAPTED | Section 1 |
| systemExplainer p6 (a Las Vegas mailing address does not show the City serves you) | ADAPTED | Section 3 |
| systemExplainer p7 (septic: Southern Nevada Health District) | LEFT OUT | About septic properties |
| systemExplainer p8 (combined or separate, ages: no claim) | LEFT OUT | Same |
| systemExplainer p9 (nothing tells a lateral's condition) | ADAPTED | Section 3 |
| systemExplainer card bullets (what a camera can show) | LEFT OUT | Camera list; locating is a separate service |
| systemExplainer card closing (distance count; does not establish the connection) | ADAPTED | Section 1 (a locate does not establish the connection) |
| housingAge para: median year built 1994 (margin 1 year) | ADAPTED | Section 3 (margin LEFT OUT) |
| housingAge: 61.3 percent built 1990 or later | USED | Section 3 |
| housingAge: 1990s largest decade (74,732 units, 27.9%) | LEFT OUT | Cut for length; kept in the FAQ |
| housingAge: 25.9 percent 1970 to 1989, 12.8 percent before 1970 | LEFT OUT | Not needed; kept in the FAQ |
| housingAge.table (4 rows) | LEFT OUT | No table slot |
| housingAge.sourceNote attribution (ACS 2020-2024 5-year, Las Vegas city, our arithmetic; B25034, B25035) | ADAPTED | Section 3, same |
| housingAge.sourceNote closing (year built does not tell condition; repaired, rerouted or replaced; Census place caveat) | ADAPTED | Section 3 (repaired, rerouted or replaced); Census-place clause LEFT OUT |
| whoToCall.paragraphs (main stoppage vs. property problem) | LEFT OUT | Not about locating |
| whoToCall.agency (Streets & Sanitation, 702-229-6227; no hours or after-hours number) | LEFT OUT | Not about locating; stays in the FAQ |
| whoToCall.secondaryAgency (Sanitary Sewer Engineering, 702-229-6541, "Sewer Location" form) | ADAPTED | Section 1 (number only), the City's number; the form is in the FAQ |
| whoToCall.company (phone, hours, newer market) | LEFT OUT | Company contact comes from the site shell |
| municipalProgram.lede ("none found", pages reviewed) | LEFT OUT | Not about locating |
| municipalProgram.covers 1 (owners maintain private laterals; March 10, 2021 post) | ADAPTED | Section 1 |
| municipalProgram.covers 2 (addenda: private through the right-of-way; LVMC 14.04.120 not reviewed) | ADAPTED | Section 1 (code section not cited) |
| municipalProgram.covers 3 (online permit category for building water and sewer repairs/replacements) | ADAPTED | Section 2 |
| municipalProgram.covers 4 ("Bldg Sewer (Yard Lines)" inspection type) | LEFT OUT | Cut for length; FAQ carries it |
| municipalProgram.covers 5 (homeowner permit guide; Building & Safety 702-229-6251) | ADAPTED | Section 2: number only, the City's number; guide wording LEFT OUT |
| municipalProgram.doesNotCover 1 (no grant, reimbursement, cap, application) | LEFT OUT | Not about locating |
| municipalProgram.doesNotCover 2 (damage from City work; who repairs in the right-of-way) | LEFT OUT | No tie; the source makes no claim |
| municipalProgram.doesNotCover 3 (no statement that cleaning or a camera inspection needs a permit) | LEFT OUT | Locating is not named by the City; section 2 says "ask which approvals apply" |
| municipalProgram.doesNotCover 4 (no after-hours number or sewer reporting page) | LEFT OUT | Not about locating |
| municipalProgram.doesNotCover 5 (no City inspection requirement for existing laterals) | LEFT OUT | No tie |
| municipalProgram.doesNotCover 6 (combined or separate system) | LEFT OUT | No tie |
| municipalProgram.whoCanApply (owners of City-served properties; confirm with Sanitary Sewer Engineering) | ADAPTED | Section 3 |
| municipalProgram.callout (confirm the City serves you; ask Building & Safety which approvals apply) | ADAPTED | Sections 2 and 3 |
| municipalProgram.closing (optional private warranty; we do not repair or arrange reimbursement) | LEFT OUT | Not about locating; FAQ carries it |
| secondOpinion ledes, steps, callout, CTA | LEFT OUT | Repair-recommendation material; the locating template's independent band covers planning |
| buyingGuide.lede (owner after closing; ask home inspector; sewer scope) | ADAPTED | Section 4 (owner after closing) |
| buyingGuide.body: no sale rule found; state law outside the page | ADAPTED | Section 4 |
| buyingGuide.body: Sanitary Sewer Engineering and the sewer map; permits as a record | ADAPTED | Section 1 (sewer map, Sanitary Sewer Engineering); the permit-record sentence is LEFT OUT |
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
| What does a sewer camera inspection show? | LEFT OUT | Cleaning-camera: the service page asks the same question with the fuller answer (adds what a camera does not show), so the service answer is used. Locating: the service FAQ on cameras covers it. Drain: the drain FAQ has no such question and a camera may be added to a visit |
| Do you repair or replace sewer lines? | USED | Verbatim |

## Service page (locating): every section

| Section / element | Status | Reason or where used |
| --- | --- | --- |
| `seoTitle`, `metaDescription`, `serviceDescription` | ADAPTED | Localized with the City connection rule |
| `hero` intro and the scope line | ADAPTED | Hero states the estimate; the "no repair" sentence is in the FAQ |
| `hero.scope` bullets, card title and intro | LEFT OUT | Service-page hero card |
| `definition.answer` (transmitter and receiver; sonde; depth approximate) | ADAPTED | `serviceDescription`, section 3 |
| `definition.supporting` (planning near the line; camera shows inside; public mains out of scope) | ADAPTED | Sections 1 and 3 |
| `definition.scope` | LEFT OUT | Service-page scope box |
| `signals` "Planning digging, trenching, or construction" | USED | Problem card 1 |
| `signals` "Landscaping, trees, fences, or hardscape" | USED | Problem card 2 |
| `signals` "Sharing the route with another contractor" | LEFT OUT | Three problem cards plus one local; the idea is in the hero and FAQ |
| `signals` "Buying or evaluating a property" | ADAPTED | Section 4 |
| `signals` "A camera finding you need to place" | USED | Problem card 3 |
| `signals.after` | LEFT OUT | Camera page is in related pages |
| `limits.can` (surface position; path; depth at a point; camera head position; planning estimate) | ADAPTED | Sections 1 and 3, inclusions 5 and 6 |
| `limits.cannot` survey | ADAPTED | Section 1 |
| `limits.cannot` utility clearance or permission to dig | ADAPTED | Section 2 |
| `limits.cannot` exact depth | LEFT OUT | Depth is only ever called approximate |
| `limits.cannot` map of every utility | LEFT OUT | In the FAQ |
| `limits.cannot` trace of unreached section | ADAPTED | Section 1 ("the accessible line the equipment could trace"), inclusion 6 |
| `limits.cannot` look at pipe condition | ADAPTED | Section 3 |
| `limits.callout` (one-call 811) | USED | Section 2, wording kept as written; unverified for Nevada (see open questions) |
| `process` 5 steps | USED | `process`, verbatim, including the plain `SeekTech SR-20` mention |
| `process.prep` | LEFT OUT | One-call is used in section 2; prep list is "ask" content |
| `decision` | LEFT OUT | Camera page linked as related |
| `independent` (Locate, Document, Decide) | LEFT OUT | The repair FAQ carries the position |
| `comparison` table | LEFT OUT | Service-page table |
| `ask` items (marks, depth, entry point, untraced, video and findings) | ADAPTED | Video and written findings in inclusions; marks, depth and notes stay "ask" items and are not claimed |
| `ask.keep` | LEFT OUT | Records guidance |
| `audiences` home buyers | ADAPTED | Section 4 |
| `audiences` agents, inspectors, property managers | LEFT OUT | Not tied to a City of Las Vegas fact |
| `markets` cards | LEFT OUT | Replaced by `coverage` |
| `request`, `relatedDescriptions`, `cta` | LEFT OUT | Template fields; this page has its own CTA |

## Service FAQ (23 questions)

20 USED verbatim, 3 LEFT OUT.

| Question | Status | Reason |
| --- | --- | --- |
| What is sewer line locating? / How does sewer line locating work? / What are a sonde, a receiver, and a cleanout? / Is sewer line locating the same as calling 811? / Do I need a camera inspection before locating? / Can you tell me exactly where my sewer line is? / Can sewer line locating determine the pipe's depth? / Can you locate every utility on my property? / Is a locate a survey, and does it mean I can dig? / Can a sewer camera see through water? / Can a sewer line be located under concrete or a driveway? / What if the camera cannot get through the line? / What access point do you use? Do you have to pull a toilet? / Will I get surface marks? / Will I get video and written findings? / How long does locating take, and how much does it cost? / Can line locating help before landscaping or fence installation? / Can line locating help with sewer repair work? / How often should a sewer line be located or inspected? / Should I have the line located before buying a house? | USED | Verbatim (20) |
| If the line drains after cleaning, is the pipe healthy? | LEFT OUT | About cleaning and pipe health, off the locating topic |
| Should I use chemical drain cleaner on a sewer line clog? | LEFT OUT | About drain-cleaning products, off the locating topic |
| Does my city require a sewer inspection for a sale, remodel, or permit? | LEFT OUT | Duplicate; the Las Vegas sale question answers it for this city |

Neither the cost/time nor any other answer carries the DEC-088 free-estimate or same-day wording (none of these services' FAQs does), so nothing needed carrying here.

Total FAQ on the page: 28 (8 Las Vegas + 20 service).

## Open questions

- 811 and private sewer lines: the service page's wording is unverified for Nevada. This page repeats it as written ("your state one-call program (often reached at 811) or your local utility") and does not say whether 811 covers private lines.
- Section 2 does not say what the City's homeowner permit guide says about plumbing relocation; it sends the reader to Building & Safety for "which approvals apply", the City's own callout wording. Add the guide's sentence if the owner wants it.
- The two 2021 City pages (sewer-backup post, March 10, 2021; sewer standards addenda, revised November 9, 2021) are not dated in the copy. The FAQ answers carry the dates.

