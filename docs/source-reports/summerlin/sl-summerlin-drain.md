# Source report: sl-summerlin-drain

Page: Drain Cleaning in Summerlin, NV (`summerlinDrainContent`, `content/pages/sl-summerlin-drain.tsx`).

Model: `sl-nlv-drain` (North Las Vegas, owner-approved, itself modelled on the City of Las Vegas page). Same structure, recipe and FAQ handling; Summerlin facts swapped in. No City of Las Vegas page, North Las Vegas or Henderson fact is carried over; the City of Las Vegas and CCWRD facts used here are the ones the Summerlin location page itself states, each with that page's caveats.

Sources:
- LOCATION: `summerlinContent` in `content/pages/las-vegas-summerlin.tsx` (Clark County 2024 jurisdictional boundary map, City of Las Vegas pages and the CCWRD report-a-sewer-problem page, read 2026-10-04; no Census housing data, so there is no housing-age section). Summerlin is split between the City of Las Vegas and unincorporated Clark County: every fact names its agency and this page never says which agency serves an address.
- SERVICE: `svc-drain-cleaning` `v2` in `content/pages/services.tsx`, plus `content/pages/sl-blocks/drain-cleaning.ts`.

Status key: USED = text taken as published; ADAPTED = fact kept, wording changed to tie it to this service; LEFT OUT = not on this page (reason given).

## The four body sections and their sources

| # | h2 on the page | Summerlin source | Service source |
|---|---|---|---|
| 1 | Two agencies word the lateral two ways, and drain cleaning stays upstream of both | `responsibility` (answer p1-p2, lateral card, table rows 1, 2 and 5), `systemExplainer` p1-p2, `municipalProgram.covers` 1 and 3 | `definition.supporting` 1 (drain vs sewer cleaning), `limits.cannot` (the public main and the connection) |
| 2 | One drain, several drains, or a main stoppage the City says it addresses | `systemExplainer` p3, `whoToCall` (agency, secondaryAgency, company) | `signals` (one slow, several, gurgling, water or sewage coming up), `triage` rows 1, 2, 5 |
| 3 | CCWRD names periodic cleaning, but nothing explains why your drain keeps clogging | `responsibility` table row 6, `systemExplainer` p4-p6, `municipalProgram.covers` 3 and `doesNotCover` 7 | `signals` ("Clogs that keep returning"), `triage` row 4 |
| 4 | No agency help found, so know what cleaning does not fix | `municipalProgram` (lede, covers 4, doesNotCover 1, 3, 5, closing), `secondOpinion` | `limits.cannot` (crack, offset, roots at a joint), `ask.keep`, `definition.scope` |

Fourth problem card: Buying or selling a Summerlin home (no sale rule found, state disclosure law outside the page, both agencies call the lateral the owner's; a buyer can ask for a camera look, a seller can document recurring drains).

## Summerlin location page

| Section / card / fact | Status | Where / reason |
|---|---|---|
| seoTitle | ADAPTED | Service name swapped in |
| metaDescription | LEFT OUT | Replaced by a page-specific description |
| hero.title | ADAPTED | H1 names this service |
| hero.intro (Summerlin partly in the City of Las Vegas and partly in unincorporated Clark County per the County 2024 map; agency and wording depend on the address) | ADAPTED | Hero intro: both agencies call the lateral the owner's, so fixture drains sit upstream |
| heroForm bullets, request card, form | LEFT OUT | Template supplies its own request form |
| heroForm bullet "Serving the Las Vegas Valley, a newer market for us" | ADAPTED | Section 2, with the longest-running-work sentence |
| heroForm card note (agency contacts under "Who to call") | ADAPTED | Section 2, both numbers marked as the agencies' |
| faqHeading | LEFT OUT | Template sets it |
| keyTakeaways 1 (County 2024 map shows two jurisdictions, display only) | ADAPTED | Section 1 and hero |
| keyTakeaways 2 (City and CCWRD wordings of the owner's lateral; two agencies, two wordings) | ADAPTED | Section 1 |
| keyTakeaways 3 (no City or CCWRD lateral repair, grant or reimbursement program found; a camera records the line whichever agency serves it) | ADAPTED | Section 4 |
| keyTakeaways jumpNav | LEFT OUT | No on-page anchors in this template |
| serviceCards (9) and helpBar | LEFT OUT | Hub grid; related links cover siblings |
| responsibility.answer p1 (depends on the agency; County map dated January 10, 2024, display only; no parcel lookup; page does not say which side any address is on) | ADAPTED | Section 1 (date LEFT OUT; the 'we do not say which wording applies' clause kept) |
| responsibility.answer p2 (two agencies describe the owner's side in different words; each shown in its own words, not merged) | ADAPTED | Section 1 (both wordings, not merged) |
| responsibility card: The public main (City maintains public main facilities, normally under public streets or in designated easements; CCWRD main not described; no source says where either main ends at a Summerlin address) | LEFT OUT | No tie; neither main is a drain-cleaning job (stated in section 1) |
| responsibility card: The private sewer lateral (City: owners maintain up to the connection to the City main; CCWRD: damaged lateral connecting a house to the main in the street is the owner's, including cleaning, repair and replacement) | ADAPTED | Section 1 |
| responsibility table: Which agency applies | ADAPTED | Section 1 |
| responsibility table: City address, the owner's lateral | ADAPTED | Section 1 |
| responsibility table: City address, through the right-of-way (addenda revised November 9, 2021: private sewer stays private, including the part in the public right-of-way, until its connection to the public sewer main) | LEFT OUT | Cut for length; kept in the location FAQ |
| responsibility table: City address, a main stoppage (public-main obstruction, pipe failure or damage from area construction is something the City's team will address) | ADAPTED | Section 2 (stoppage sentence) |
| responsibility table: CCWRD address, the owner's lateral | ADAPTED | Section 1 |
| responsibility table: CCWRD address, upkeep (periodic cleaning to keep the lateral free of foreign matter, including roots) | ADAPTED | Section 3 |
| responsibility table: Where an inspection helps (footage records where along the line; does not establish which agency serves the property or where the connection is) | LEFT OUT | Camera is a separate service; the FAQ covers a camera addition |
| responsibility.note (not legal advice; City post dated March 10, 2021; CCWRD page undated) | LEFT OUT | 'None found' and 'confirm' wording carry the caveat. Open item: the undated pages are not stated on this page |
| systemExplainer p1 (more than one agency; no single Summerlin rulebook) | ADAPTED | Section 1 |
| systemExplainer p2 (two jurisdictions, display only) | ADAPTED | Section 1 |
| systemExplainer p3 (City addresses: a City-main stoppage can affect several upstream properties and may overflow manholes; the addenda term "private collector sewer") | ADAPTED | Section 2 (stoppage and manhole wording); the addenda term LEFT OUT |
| systemExplainer p4 (CCWRD: lateral upkeep includes periodic cleaning to keep the line free of foreign matter, including roots) | ADAPTED | Section 3 |
| systemExplainer p5 (pages do not say combined or separate, main age, local soil or root conditions; no local cleanout terms) | ADAPTED | Section 3 (combined or separate, main age, soil or root conditions); terms clause LEFT OUT |
| systemExplainer p6 (nothing on those pages tells the condition of any individual lateral) | ADAPTED | Section 3 ('a cause has to come from your own line') |
| systemExplainer card bullets (what a camera can show) | LEFT OUT | Camera is a separate service |
| systemExplainer card closing (distance count; does not establish the connection to the main or where an agency's responsibility begins or ends) | LEFT OUT | Camera sentence; no tie to drain cleaning |
| housingAge section (none on the location page: no primary Census values, no matching Census geography; no housing figure anywhere) | LEFT OUT | No source exists; replaced by the 'none found' section |
| whoToCall.paragraphs (find which agency serves your address; independent camera inspection if a plumber points to your lateral) | ADAPTED | Section 1 and section 4 (ask the agency) |
| whoToCall.agency (City Streets & Sanitation 702-229-6227: suspected main stoppage or manhole overflow; no City hours, after-hours number or emergency line found; the City's number) | ADAPTED | Section 2, the City's number; no-hours sentence LEFT OUT (FAQ carries it) |
| whoToCall.secondaryAgency (CCWRD 702-668-8354: sanitary sewer spill or sewer-related odors; photos can be emailed to the address on its page; no CCWRD hours, after-hours number or emergency line found; CCWRD's number) | ADAPTED | Section 2, CCWRD's number; photo-email address not published |
| whoToCall.company (phone, hours, newer market) | ADAPTED | Section 2: phone from `marketOperatingDetail`; newer-market sentence; hours LEFT OUT |
| municipalProgram.lede (none found on the City sewer-backup post, City warranty page and CCWRD page; "none found", not "none exists") | ADAPTED | Section 4 |
| municipalProgram.covers 1 (City: owners maintain laterals up to the connection to the City main; post dated March 10, 2021) | ADAPTED | Section 1 |
| municipalProgram.covers 2 (City addenda: private sewer stays private through the right-of-way until the connection; revised November 9, 2021) | LEFT OUT | Cut for length |
| municipalProgram.covers 3 (CCWRD: owner's responsibility including cleaning, repair, replacement; periodic cleaning incl. roots; page undated) | ADAPTED | Sections 1 and 3 |
| municipalProgram.covers 4 (optional City-promoted Service Line Warranty Program with a private company; no price, coverage or claim terms; no connection to and no recommendation by The Sewer Pros) | ADAPTED | Section 4: same wording as cleaning with camera; FAQ carries the rest |
| municipalProgram.doesNotCover 1 (no City or CCWRD grant, reimbursement, cap, eligibility or application process) | ADAPTED | Section 4 |
| municipalProgram.doesNotCover 2 (which Summerlin addresses each agency serves; no parcel lookup) | ADAPTED | Section 1 |
| municipalProgram.doesNotCover 3 (whether the City's optional warranty applies at a Summerlin address) | ADAPTED | Section 4 |
| municipalProgram.doesNotCover 4 (CCWRD statement about damage CCWRD's own work causes to a private lateral) | LEFT OUT | No tie; kept in the FAQ |
| municipalProgram.doesNotCover 5 (no City or CCWRD rule on whether lateral work, cleaning or a camera inspection needs a permit or inspection) | ADAPTED | Section 4 (cleaning) |
| municipalProgram.doesNotCover 6 (no hours, after-hours number or emergency line for either agency) | LEFT OUT | Cut for length; FAQ carries it |
| municipalProgram.doesNotCover 7 (combined or separate system, or its age) | ADAPTED | Section 3 |
| municipalProgram.callout (ask the serving agency before paying for work; a camera does not replace any agency review; 2021 dates, other pages undated) | ADAPTED | Section 4 |
| municipalProgram.closing (we do not perform repairs or replacements; nothing says any agency pays for our services) | ADAPTED | Section 4: same |
| secondOpinion ledes, steps, callout, CTA | ADAPTED | Section 4 last sentence (video and findings compared against an estimate); rest LEFT OUT |
| buyingGuide.lede (the owner after closing under both agencies' wording; ask the home inspector; sewer scope; which agency serves the property is the first buyer question) | ADAPTED | Fourth problem card |
| buyingGuide.body (no sale rule found; state-level disclosure outside the page; buyer can ask for an inspection or ask the serving agency) | ADAPTED | Fourth problem card |
| buyingGuide links, CTA, agents block | LEFT OUT | Hub elements |
| nearbyAreas (Las Vegas, Henderson, North Las Vegas, market hub) | ADAPTED | `coverage`: three areas; market hub left out as on the NLV, City and Henderson pages |
| finalCta title | ADAPTED | `cta.title` |
| finalCta paragraphs, bullets | LEFT OUT | Replaced by `cta.body` |
| sources (5 links, lastReviewed 2026-10-04, closingNote) | USED | Passed through as `summerlinContent.sources`. Open item: confirm the template renders them |

### Summerlin FAQ (10)

| Question | Status | Reason |
|---|---|---|
| Is Summerlin part of the City of Las Vegas? | USED | Verbatim; the County map facts and the display-only caveat |
| Who is responsible for a sewer lateral at a City of Las Vegas address in Summerlin? | USED | Verbatim |
| Who is responsible for a sewer lateral at an address served by CCWRD in Summerlin? | USED | Verbatim |
| Does public responsibility start at the property line in Summerlin? | USED | Verbatim |
| Who do I call about a sewer backup in Summerlin? | USED | Verbatim; carries both agency numbers (the agencies', not ours) and the no-hours note |
| Does the City of Las Vegas warranty apply to my Summerlin property? | USED | Verbatim; carries the provider name and the no-connection statement cut from the body |
| Does CCWRD offer help paying for a lateral? | USED | Verbatim |
| Does Summerlin require a sewer inspection when a home is sold? | USED | Verbatim |
| What does a sewer camera inspection show? | USED | Verbatim: the drain FAQ has no such question and a camera may be added to a visit |
| Do you repair or replace sewer lines? | USED | Verbatim |

## Service page (`svc-drain-cleaning`)

| Section / card / fact | Status | Where / reason |
|---|---|---|
| seoTitle | ADAPTED | "Drain Cleaning in Summerlin, NV" |
| metaDescription | LEFT OUT | Market-neutral; replaced |
| serviceDescription | ADAPTED | Same definition, Summerlin, Nevada, in the Las Vegas Valley added |
| hero.title | ADAPTED | "Drain Cleaning in Summerlin" |
| hero.intro p1 (restores flow by removing grease, roots, debris) | ADAPTED | Hero intro |
| hero.intro p2 (no repair, replacement, lining, excavation, pipe installation) | ADAPTED | Section 4 and FAQ 'Does drain cleaning repair a damaged pipe?' |
| hero.scope bullets | LEFT OUT | Template element |
| definition.answer | ADAPTED | `serviceDescription` and hero |
| definition.supporting 1 (drain vs sewer cleaning) | ADAPTED | Section 1 |
| definition.supporting 2 (cleaning and camera are separate) | ADAPTED | Section 2 bullet on camera-and-cleaning; FAQ 'Does a camera inspection come with drain cleaning?' |
| definition.scope | ADAPTED | Section 4 |
| signals 1 One slow drain | USED | Problem card 1 |
| signals 2 Several fixtures slow | USED | Problem card 2; section 2 |
| signals 3 Gurgling | ADAPTED | Section 2 bullet; full text in FAQ 'Why are my drains gurgling?' |
| signals 4 Clogs that keep returning | USED | Problem card 3; section 3 |
| signals 5 Sewage-like odors | LEFT OUT | FAQ 'What causes sewage-like odors?' |
| signals 6 Water or sewage coming up | ADAPTED | Section 2 bullet |
| triage rows 1, 2, 5 | ADAPTED | Section 2 |
| triage row 3 (lower drains back up) | LEFT OUT | Slot-limited; FAQ 'How do I know if it is a drain clog or a sewer line problem?' |
| triage row 4 (clogs again after it was cleared) | ADAPTED | Section 3 |
| limits.can (4 items) | LEFT OUT | FAQ answers carry grease, roots, wipes |
| limits.cannot: cracked/broken/collapsed; offset or separated joint; roots at a joint | ADAPTED | Section 4 |
| limits.cannot: public sewer main or its connection | ADAPTED | Section 1 |
| limits.cannot: line the equipment cannot pass | LEFT OUT | No slot |
| limits.callout | LEFT OUT | FAQ 'Is hydro jetting safe for every pipe?' and 'Does a line that flows again mean the pipe is fine?' |
| process steps 1 to 5 | USED | `process`, verbatim; equipment names only as confirmed (steps 3 and 4) |
| process.prep, decision, methods table, secondaryLimits | LEFT OUT | No slot; FAQ answers carry them |
| ask items: video, written findings | USED | Inclusion 6 |
| ask items: limits, access point, cleaning record, locating | LEFT OUT | FAQ 'Will I get a record of the cleaning?', 'What does line locating do?' |
| ask.keep | ADAPTED | Section 4 (compare estimates) |
| audiences: Home buyers, Home sellers | ADAPTED | Fourth problem card |
| audiences: Homeowners; markets (3 hubs); faqTitle, situations, terms, request.* | LEFT OUT | Problem cards; replaced by `coverage`; template slots |
| relatedPageIds (4) | ADAPTED | Summerlin page, this service, sewer cleaning, camera inspection |
| cta | ADAPTED | Rewritten for Summerlin |
| inclusions (6 cards) | USED | `sl-blocks` |

### Service FAQ

Drain service FAQ: 34 USED verbatim, 3 LEFT OUT (see the FAQ table). The cost and time answers say cost and time vary and carry no DEC-088 wording.

The Summerlin 'What does a sewer camera inspection show?' is USED verbatim: the drain FAQ has no such question and a camera may be added to a visit. Service questions LEFT OUT: 'Do you clean drains in St. Louis, San Diego, and Las Vegas?' (this page is an area page, the question belongs to the hub), 'Can drain cleaning fix a broken or collapsed pipe?' (duplicate of 'Does drain cleaning repair a damaged pipe?'), 'Can cleaning remove tree roots?' (covered by 'Can tree roots grow into drain pipes?').

Total FAQ on the page: 44 (10 Summerlin + 34 service).

## Open questions

- Sources: the City's sewer-backup post (March 10, 2021) and sewer standards addenda (revised November 9, 2021) are dated; the CCWRD and City warranty pages show no date. The page copy says "confirm with the agency" but does not state the dates in the body.
- Agency numbers: 702-229-6227 (City Streets & Sanitation) and 702-668-8354 (CCWRD) are quoted as the location page gives them, each marked as the agency's number, not ours. They are listed for a main stoppage, manhole overflow, spill or odors; neither is described as a permit or emergency line.
- The optional City-promoted warranty is mentioned without the provider name on this page where it appears in the body (the location FAQ carries the name and the no-connection statement).
- Section 2's heading says the City "says it addresses" a main stoppage. The location page's own wording is that the City says a public-main obstruction, pipe failure or damage from area construction is something its team will address, and that a stoppage in a City main can affect several upstream properties; both are City-address facts only.
- Hero intro says both agencies describe the lateral as the owner's. The City says owners maintain laterals up to the connection to the City main; CCWRD says the lateral that connects a house to the main in the street is the owner's. The hero does not claim the two are the same rule.
