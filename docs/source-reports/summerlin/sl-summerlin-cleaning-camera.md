# Source report: sl-summerlin-cleaning-camera

Page: Sewer Cleaning & Camera Inspection in Summerlin, NV (`summerlinCleaningCameraContent`, `content/pages/sl-summerlin-cleaning-camera.tsx`).

Model: `sl-nlv-cleaning-camera` (North Las Vegas, owner-approved, itself modelled on the City of Las Vegas page). Same structure, recipe and FAQ handling; Summerlin facts swapped in. No City of Las Vegas page, North Las Vegas or Henderson fact is carried over; the City of Las Vegas and CCWRD facts used here are the ones the Summerlin location page itself states, each with that page's caveats.

Sources:
- LOCATION: `summerlinContent` in `content/pages/las-vegas-summerlin.tsx` (Clark County 2024 jurisdictional boundary map, City of Las Vegas pages and the CCWRD report-a-sewer-problem page, read 2026-10-04; no Census housing data, so there is no housing-age section). Summerlin is split between the City of Las Vegas and unincorporated Clark County: every fact names its agency and this page never says which agency serves an address.
- SERVICE: `svc-sewer-cleaning-camera-inspection` `v2` in `content/pages/services.tsx`, plus `content/pages/sl-blocks/sewer-cleaning-camera-inspection.ts`.

Status key: USED = text taken as published; ADAPTED = fact kept, wording changed to tie it to this service; LEFT OUT = not on this page (reason given).

## The four body sections and their sources

| # | h2 on the page | Summerlin source | Service source |
|---|---|---|---|
| 1 | Two agencies serve Summerlin, and cleaning does not tell you which one is yours | `responsibility` (answer p1, table row 1), `systemExplainer` p1-p2 and card closing, `municipalProgram.doesNotCover` 2 | `definition` (cleaning does not show cause), `limits.cannot` (footage does not establish the connection) |
| 2 | The City and CCWRD word the owner's side differently, and CCWRD names cleaning | `responsibility` (lateral card, table rows 2, 5 and 6), `systemExplainer` p4, `municipalProgram.covers` 1 and 3 | `definition.supporting` (private-property lines, not public mains), `decision` (camera before, after or both) |
| 3 | A main stoppage is the agency's call, and a clog that returns needs footage | `systemExplainer` p3, `whoToCall` (agency, secondaryAgency, company) | `signals` ("Clogs that keep coming back"), `process` steps 3 and 5 |
| 4 | No agency repair program found, so the footage is what you compare against | `municipalProgram` (lede, covers 4, doesNotCover 1, 3, 5, 7, closing), `systemExplainer` p5-p6, `secondOpinion` | `limits.callout`, `ask.keep` (compare against estimates) |

Fourth problem card: Buying a Summerlin home (no sale rule found, both agencies call the lateral the owner's; a blocked, water-filled line cannot be seen under, so cleaning may come first).

## Summerlin location page

| Section / card / fact | Status | Where / reason |
|---|---|---|
| seoTitle | ADAPTED | Service name swapped in |
| metaDescription | LEFT OUT | Replaced by a page-specific description |
| hero.title | ADAPTED | H1 names this service |
| hero.intro (Summerlin partly in the City of Las Vegas and partly in unincorporated Clark County per the County 2024 map; agency and wording depend on the address) | ADAPTED | Hero intro: a visit works on the owner's side of the lateral |
| heroForm bullets, request card, form | LEFT OUT | Template supplies its own request form |
| heroForm bullet "Serving the Las Vegas Valley, a newer market for us" | ADAPTED | Section 3, with the longest-running-work sentence from `whoToCall.company` |
| heroForm card note (agency contacts under "Who to call") | ADAPTED | Section 3, both numbers marked as the agencies' |
| faqHeading | LEFT OUT | Template sets it |
| keyTakeaways 1 (County 2024 map shows two jurisdictions, display only) | ADAPTED | Section 1 |
| keyTakeaways 2 (City and CCWRD wordings of the owner's lateral; two agencies, two wordings) | ADAPTED | Section 2 |
| keyTakeaways 3 (no City or CCWRD lateral repair, grant or reimbursement program found; a camera records the line whichever agency serves it) | ADAPTED | Section 4 |
| keyTakeaways jumpNav | LEFT OUT | No on-page anchors in this template |
| serviceCards (9) and helpBar | LEFT OUT | Hub grid; related links cover siblings |
| responsibility.answer p1 (depends on the agency; County map dated January 10, 2024, display only; no parcel lookup; page does not say which side any address is on) | ADAPTED | Section 1 (date LEFT OUT) |
| responsibility.answer p2 (two agencies describe the owner's side in different words; each shown in its own words, not merged) | ADAPTED | Section 2 |
| responsibility card: The public main (City maintains public main facilities, normally under public streets or in designated easements; CCWRD main not described; no source says where either main ends at a Summerlin address) | LEFT OUT | Easement wording not needed; 'no source says where the connection is' carried in section 1 |
| responsibility card: The private sewer lateral (City: owners maintain up to the connection to the City main; CCWRD: damaged lateral connecting a house to the main in the street is the owner's, including cleaning, repair and replacement) | ADAPTED | Section 2 |
| responsibility table: Which agency applies | ADAPTED | Section 1 |
| responsibility table: City address, the owner's lateral | ADAPTED | Section 2 |
| responsibility table: City address, through the right-of-way (addenda revised November 9, 2021: private sewer stays private, including the part in the public right-of-way, until its connection to the public sewer main) | LEFT OUT | Cut for length; kept in the location FAQ |
| responsibility table: City address, a main stoppage (public-main obstruction, pipe failure or damage from area construction is something the City's team will address) | LEFT OUT | Cut for length; the stoppage and manhole statement is used in section 3 |
| responsibility table: CCWRD address, the owner's lateral | ADAPTED | Section 2 |
| responsibility table: CCWRD address, upkeep (periodic cleaning to keep the lateral free of foreign matter, including roots) | ADAPTED | Section 2 |
| responsibility table: Where an inspection helps (footage records where along the line; does not establish which agency serves the property or where the connection is) | ADAPTED | Section 1 |
| responsibility.note (not legal advice; City post dated March 10, 2021; CCWRD page undated) | LEFT OUT | 'None found' and 'confirm' wording carry the caveat. Open item: the undated pages are not stated on this page |
| systemExplainer p1 (more than one agency; no single Summerlin rulebook) | ADAPTED | Section 1 |
| systemExplainer p2 (two jurisdictions, display only) | ADAPTED | Section 1 |
| systemExplainer p3 (City addresses: a City-main stoppage can affect several upstream properties and may overflow manholes; the addenda term "private collector sewer") | ADAPTED | Section 3 (stoppage and manhole wording); the addenda term LEFT OUT |
| systemExplainer p4 (CCWRD: lateral upkeep includes periodic cleaning to keep the line free of foreign matter, including roots) | ADAPTED | Section 2 |
| systemExplainer p5 (pages do not say combined or separate, main age, local soil or root conditions; no local cleanout terms) | ADAPTED | Section 4 (combined or separate, main age); soil and root clause and terms LEFT OUT |
| systemExplainer p6 (nothing on those pages tells the condition of any individual lateral) | ADAPTED | Section 4 (footage and findings are what you compare against) |
| systemExplainer card bullets (what a camera can show) | LEFT OUT | The service FAQ answers this in full with limits |
| systemExplainer card closing (distance count; does not establish the connection to the main or where an agency's responsibility begins or ends) | ADAPTED | Section 1 |
| housingAge section (none on the location page: no primary Census values, no matching Census geography; no housing figure anywhere) | LEFT OUT | No source exists; replaced by the 'none found' section |
| whoToCall.paragraphs (find which agency serves your address; independent camera inspection if a plumber points to your lateral) | ADAPTED | Section 3 and section 1 (confirm with the agency) |
| whoToCall.agency (City Streets & Sanitation 702-229-6227: suspected main stoppage or manhole overflow; no City hours, after-hours number or emergency line found; the City's number) | ADAPTED | Section 3, the City's number; 'no hours' sentence LEFT OUT (FAQ carries it) |
| whoToCall.secondaryAgency (CCWRD 702-668-8354: sanitary sewer spill or sewer-related odors; photos can be emailed to the address on its page; no CCWRD hours, after-hours number or emergency line found; CCWRD's number) | ADAPTED | Section 3, CCWRD's number; the photo-email address is not published; no-hours sentence LEFT OUT |
| whoToCall.company (phone, hours, newer market) | ADAPTED | Section 3: phone from `marketOperatingDetail`; newer-market sentence; hours LEFT OUT |
| municipalProgram.lede (none found on the City sewer-backup post, City warranty page and CCWRD page; "none found", not "none exists") | ADAPTED | Section 4 |
| municipalProgram.covers 1 (City: owners maintain laterals up to the connection to the City main; post dated March 10, 2021) | ADAPTED | Section 2 |
| municipalProgram.covers 2 (City addenda: private sewer stays private through the right-of-way until the connection; revised November 9, 2021) | LEFT OUT | Cut for length |
| municipalProgram.covers 3 (CCWRD: owner's responsibility including cleaning, repair, replacement; periodic cleaning incl. roots; page undated) | ADAPTED | Section 2 |
| municipalProgram.covers 4 (optional City-promoted Service Line Warranty Program with a private company; no price, coverage or claim terms; no connection to and no recommendation by The Sewer Pros) | ADAPTED | Section 4: 'an optional warranty program from a private company'; provider name, no-connection and no-recommendation sentences LEFT OUT (FAQ carries them) |
| municipalProgram.doesNotCover 1 (no City or CCWRD grant, reimbursement, cap, eligibility or application process) | ADAPTED | Section 4 |
| municipalProgram.doesNotCover 2 (which Summerlin addresses each agency serves; no parcel lookup) | ADAPTED | Section 1 |
| municipalProgram.doesNotCover 3 (whether the City's optional warranty applies at a Summerlin address) | ADAPTED | Section 4 |
| municipalProgram.doesNotCover 4 (CCWRD statement about damage CCWRD's own work causes to a private lateral) | LEFT OUT | No tie; source makes no claim; kept in the FAQ |
| municipalProgram.doesNotCover 5 (no City or CCWRD rule on whether lateral work, cleaning or a camera inspection needs a permit or inspection) | ADAPTED | Section 4 (cleaning or a camera inspection) |
| municipalProgram.doesNotCover 6 (no hours, after-hours number or emergency line for either agency) | LEFT OUT | Cut for length; FAQ carries it |
| municipalProgram.doesNotCover 7 (combined or separate system, or its age) | ADAPTED | Section 4 |
| municipalProgram.callout (ask the serving agency before paying for work; a camera does not replace any agency review; 2021 dates, other pages undated) | ADAPTED | Section 4 ('ask the agency that serves your address') |
| municipalProgram.closing (we do not perform repairs or replacements; nothing says any agency pays for our services) | ADAPTED | Section 4: 'We do not perform repairs or replacements'; agency-pays sentence LEFT OUT |
| secondOpinion ledes, steps, callout, CTA | ADAPTED | Section 4 last sentence (footage and findings compared against an estimate); rest LEFT OUT, the template carries its own independent band |
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
| What does a sewer camera inspection show? | LEFT OUT | The service page asks the same question with the fuller answer (adds what a camera does not show), so the service answer is used |
| Do you repair or replace sewer lines? | USED | Verbatim |

## Service page (`svc-sewer-cleaning-camera-inspection`)

| Section / card / fact | Status | Where / reason |
|---|---|---|
| seoTitle | ADAPTED | "Sewer Cleaning & Camera Inspection in Summerlin, NV" |
| metaDescription | LEFT OUT | Market-neutral; replaced |
| serviceDescription | ADAPTED | Same two-service definition, Summerlin, Nevada, in the Las Vegas Valley added (Summerlin is not called a city) |
| hero.title | ADAPTED | "Sewer Cleaning and Camera Inspection in Summerlin" |
| hero.intro p1 (clear what can be cleared; camera before, after or both) | ADAPTED | Hero intro |
| hero.intro p2 (no repair, replacement, lining, excavation, pipe installation) | ADAPTED | Section 4 and the FAQ |
| hero.scope bullets | LEFT OUT | Template element |
| definition.answer | ADAPTED | `serviceDescription` |
| definition.supporting 1 (camera before, after or both) | USED | Hero intro |
| definition.supporting 2 (private-property lines only, not public mains) | ADAPTED | Hero intro ("the owner's side of the lateral"); section 1 |
| signals 1 Several fixtures slow | USED | Problem card 1 (via `sl-blocks`) |
| signals 2 Gurgling | LEFT OUT | Four problem slots; FAQ covers the signs |
| signals 3 Clogs that keep coming back | USED | Problem card 2; section 3 |
| signals 4 Water rising in a floor drain, tub, toilet | USED | Problem card 3 |
| signals 5 Sewage-like odor, 6 Water at a cleanout | LEFT OUT | Slots; FAQ covers the signs |
| limits.can (9 items) | LEFT OUT | Service FAQ answers carry them |
| limits.cannot: below the waterline | ADAPTED | Fourth problem card |
| limits.cannot: other items | LEFT OUT | FAQ answers |
| limits.callout (flows again is not proof) | ADAPTED | Section 4 |
| process steps 1 to 5 | USED | `process`, verbatim; equipment names only as the owner confirmed (step 3) |
| process.prep | LEFT OUT | No slot; FAQ covers the entry point |
| decision, comparison table, ask items 3-5 | LEFT OUT | No slot; related pages link siblings; FAQ answers |
| ask items 1-2 (video, written findings) | USED | Inclusion 6 |
| ask.keep (ask another company to review the video) | ADAPTED | Section 4 (compare footage and findings against an estimate) |
| audiences: Home buyers | ADAPTED | Fourth problem card |
| audiences: Homeowners; markets (3 hubs) | LEFT OUT | Problem cards; replaced by `coverage` |
| relatedPageIds | ADAPTED | Four used: Summerlin page, this service, camera inspection, sewer cleaning |
| cta | ADAPTED | Rewritten for Summerlin |
| inclusions (6 cards) | USED | `sl-blocks` |

### Service FAQ

Cleaning-and-camera service FAQ: all 21 USED verbatim. None carries the DEC-088 free-estimate or same-day wording (those answers belong to the hydro jetting and backup service pages), so nothing needed carrying. The cost/time answer says time and cost vary.

The Summerlin 'What does a sewer camera inspection show?' is LEFT OUT because the service page asks the same question with the fuller answer (adds what a camera does not show).

Total FAQ on the page: 30 (9 Summerlin + 21 service).

## Open questions

- Sources: the City's sewer-backup post (March 10, 2021) and sewer standards addenda (revised November 9, 2021) are dated; the CCWRD and City warranty pages show no date. The page copy says "confirm with the agency" but does not state the dates in the body.
- Agency numbers: 702-229-6227 (City Streets & Sanitation) and 702-668-8354 (CCWRD) are quoted as the location page gives them, each marked as the agency's number, not ours. They are listed for a main stoppage, manhole overflow, spill or odors; neither is described as a permit or emergency line.
- The optional City-promoted warranty is mentioned without the provider name on this page where it appears in the body (the location FAQ carries the name and the no-connection statement).
- Section 2 attributes the cleaning duties to CCWRD only (periodic cleaning to keep the lateral free of foreign matter, including roots). The City page as summarised on the location page does not mention cleaning, and this page does not say it does.
