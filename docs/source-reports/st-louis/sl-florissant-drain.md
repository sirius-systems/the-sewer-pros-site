# Source report: sl-florissant-drain

Page: Drain Cleaning in Florissant, MO (`florissantDrainContent`, `content/pages/sl-stl-florissant-drain.tsx`).

Sources:
- LOCATION: `florissantContent` in `content/pages/st-louis-florissant.tsx` (`loc-stl-florissant`; MSD and City of Florissant facts read 2026-10-02; housing figure from the City's 2026-2030 Consolidated Plan citing ACS 2024 5-year estimates).
- SERVICE: `svc-drain-cleaning` `v2` in `content/pages/services.tsx`, plus the shared service blocks.

Status key: USED = text taken as published; ADAPTED = fact kept, wording changed to tie it to this service; LEFT OUT = not on this page (reason given).

Phone: read from `marketOperatingDetail['st-louis-mo']`, as the Las Vegas drain model does. The newer-market sentence does not apply to St. Louis and is not used. Every MSD or City phone number and dollar term is labelled as theirs. Nothing from the St. Louis City, Chesterfield, Ballwin or St. Charles pages is carried over.

## The four body sections and their sources

| # | h2 on the page | Florissant source | Service source |
|---|---|---|---|
| 1 | Fixture drains sit in the part of the line the City program leaves to you | `responsibility` (answer, lateral card, table rows 1-2), `municipalProgram.lede` and `doesNotCover` 1, keyTakeaways 1-2 | `definition.supporting` 1 (drain vs. sewer cleaning), `limits.cannot` (the public sewer main or its connection) |
| 2 | One drain, several drains, or a backup MSD should hear about | `heroForm.card.note`, `whoToCall` (MSD agency and company line), `responsibility.table` row 3 | `signals` (one slow, several, water or sewage coming up), `triage` rows 1, 2, 5 |
| 3 | Cabling is maintenance in Florissant, and house age says little about your drains | `housingAge` (table row 3 annual cabling; p1-p2), `municipalProgram.paragraphs` (not a substitute for maintenance) | `definition.answer` (cable, jetting), `signals` "Clogs that keep returning", `triage` row 4 |
| 4 | What cleaning does not fix, and what the City says it will not repair | `municipalProgram.afterSteps` 1 (three denial reasons), `housingAge.table` rows 1, 4, 5 | `limits.cannot` (crack, offset, roots at a joint), `limits.can`/callout (flow is not proof), `ask.keep`, `independent.note`, `definition.scope` |

Fourth problem card: A clog the City calls maintenance (ADAPTED from `housingAge.table` row 3 and `municipalProgram.paragraphs`: annual cabling wording; not a substitute for regular maintenance; a camera look shows whether a pipe condition is behind a returning clog).

## Florissant location page

| Section / card / fact | Status | Where / reason |
|---|---|---|
| seoTitle | ADAPTED | Service name swapped in; ", MO" added |
| metaDescription | LEFT OUT | Replaced by a page-specific description |
| hero.title | ADAPTED | H1 names this service |
| hero.intro (independent camera inspection before applying, buying or approving work) | ADAPTED | Hero intro: MSD's private-lateral statement and the five-foot boundary tie to fixture drains |
| heroForm bullets (camera inspection, cleaning and jetting, locally owned since 2011) | LEFT OUT | Shell and company claims; the template supplies its own |
| heroForm card (title, intro, phone line suffix, nextSteps, form) | LEFT OUT | Template supplies its own request form |
| heroForm card note (building backup: contact MSD first at (314) 768-6260) | ADAPTED | Section 2, marked as MSD's number |
| faqHeading, faqSchemaApproved | LEFT OUT | Template-level |
| keyTakeaways 1 (MSD repairs the public sewer; lateral and connection are private, owner maintains and repairs) | ADAPTED | Section 1 |
| keyTakeaways 2 (program covers main to within five feet; $50 annual fee; inside the home and within five feet stays the owner's) | ADAPTED | Section 1 (boundary and owner's part); the $50 fee is LEFT OUT, a program-funding fact |
| keyTakeaways 3 (a camera inspection gives recorded evidence before you clean, buy or approve work) | ADAPTED | Section 3 (camera look may help show why a clog returns) |
| keyTakeaways.jumpNav | LEFT OUT | Location-page navigation |
| serviceCards (nine) and helpBar | LEFT OUT | Hub grid; related links cover siblings |
| responsibility.answer (MSD: lateral and connection private; cave-in traced to the public sewer is MSD's repair) | ADAPTED | Section 1 (private-lateral statement); the cave-in sentence is LEFT OUT, not a drain topic |
| responsibility card: the public sewer (dye test; MSD repairs; confirm utility by address) | ADAPTED | Section 1 (neither service reaches the public sewer); dye-test detail LEFT OUT |
| responsibility card: the lateral line (owner's; program covers main to five feet; owner inside) | ADAPTED | Section 1 |
| responsibility.table row 1 (who owns it) | ADAPTED | Section 1 |
| responsibility.table row 2 (who maintains and repairs it) | ADAPTED | Section 1 |
| responsibility.table row 3 (who to contact first: MSD (314) 768-6260; Engineering (314) 839-7643) | ADAPTED | Section 2, MSD number only, marked MSD's |
| responsibility.table row 4 (what help exists: MSD crews; City program subject to rules, deposit, review) | ADAPTED | Section 4 (program reasons to deny) |
| responsibility.table row 5 (where an inspection helps) | LEFT OUT | A camera inspection is a separate service |
| responsibility.note (not legal advice; no published rule on the part of a lateral under the street) | LEFT OUT | Fixture drains are inside the home, not under the street |
| systemExplainer p1 (MSD: most of St. Louis County has a separate system; City is combined) | LEFT OUT | County-level context, not about this service |
| systemExplainer p2 (MSD's page does not label every Florissant parcel) | LEFT OUT | Hedge for p1 |
| systemExplainer p3 (Brookshire Sanitary Relief: Wedgewood, about 6,000 feet, 2020-2022) | LEFT OUT | Not about drain cleaning |
| systemExplainer p4 (Lindsay Lane Sanitary Relief, Spring 2026 - Summer 2027 tentative) | LEFT OUT | Not about drain cleaning |
| systemExplainer p5 (a public project does not tell you any one property's lateral) | LEFT OUT | Not about drain cleaning |
| systemExplainer.card (what a camera can show; closing) | LEFT OUT | The service page's camera can/cannot lists and FAQ cover it |
| housingAge p1 (21,229 units; vast majority built 1950-1979; ACS 2024 via the Consolidated Plan; city as a whole) | ADAPTED | Section 3, with "citywide" |
| housingAge p2 (neither MSD nor the City publishes a pipe material or era) | ADAPTED | Section 3 |
| housingAge p3 (working drain is not proof of sound pipe; denial reasons; not a substitute for maintenance) | ADAPTED | Sections 3 and 4 |
| housingAge p4 (source note) | ADAPTED | Source named in section 3 |
| housingAge.table row 1 (cracks or breaks; hairline cracks as a denial reason) | ADAPTED | Section 4 |
| housingAge.table row 2 (joint separation; main to five feet) | ADAPTED | Section 4 (cleaning does not fix) |
| housingAge.table row 3 (roots; annual cabling) | ADAPTED | Section 3 |
| housingAge.table row 4 (blockage with intact pipe; open and serviceable line can be denied) | ADAPTED | Section 4 and the new fourth card |
| housingAge.table row 5 (a problem near the house; blockage within five feet can be denied) | ADAPTED | Section 4 |
| whoToCall p1 (MSD: building backup call; urgent reports: raw sewage, missing manholes, flooded streets) | ADAPTED | Section 2 (building backup call); urgent list LEFT OUT |
| whoToCall p2 (if MSD or a plumber points to your lateral, an independent camera inspection helps) | LEFT OUT | Camera inspection is a separate service |
| whoToCall.agency (MSD (314) 768-6260; limited assistance program) | ADAPTED | Section 2, marked MSD's |
| whoToCall.secondaryAgency Engineering (314) 839-7643 (sinkhole, program) | LEFT OUT | No tie to drain cleaning |
| whoToCall.secondaryAgency Public Works (314) 839-7648 (permits) | LEFT OUT | No permit statement for cleaning is claimed |
| whoToCall.company (phone, hours) | ADAPTED | Section 2: phone read from `marketOperatingDetail`; hours LEFT OUT |
| municipalProgram.lede (covers defective lateral main to five feet; owner inside; $50 fee) | ADAPTED | Section 1; fee LEFT OUT |
| municipalProgram.paragraphs (spot repairs about 10 feet; not for whole laterals or preventing defects; not a substitute for maintenance) | ADAPTED | Section 3 (not a substitute); spot-repair sentence LEFT OUT |
| municipalProgram.covers (repair of defective lateral; fill rock, soil, seeding) | ADAPTED | Section 1 (boundary); restoration detail LEFT OUT |
| municipalProgram.doesNotCover (under the home / within five feet; septic; landscaping; commercial and six-unit wording) | ADAPTED | Section 1 and 4 (inside the home / within five feet); other items LEFT OUT, they stay on the location page and in the FAQ |
| municipalProgram.steps 1 (qualifying reason: confirmed cave-in, or recurring backups regular maintenance cannot resolve and annual fee paid; no prior plumbing inspection required) | LEFT OUT | Not a drain topic |
| municipalProgram.steps 2 ($300 deposit; none after a positive MSD dye test) | LEFT OUT | Not a drain topic |
| municipalProgram.steps 3 (contracted plumber: cable and camera evaluation; City Engineer reviews video) | LEFT OUT | Not a drain topic |
| municipalProgram.steps 4 (approved or denied; about two weeks; deposit reimbursed or kept) | LEFT OUT | Not a drain topic |
| municipalProgram.afterSteps 1 (denial reasons; clogged-lateral emergency priority; repair-day access) | ADAPTED | Section 4 (three denial reasons); emergency priority and access LEFT OUT |
| municipalProgram.afterSteps 2 (page undated; no maximum benefit or funding status; confirm with Engineering) | LEFT OUT | Not needed on a drain page |
| municipalProgram.callout (our inspection does not replace the City's plumber; no claim City accepts an outside report; City crew repairs) | LEFT OUT | Camera inspection is a separate service |
| municipalProgram.closing (link to St. Louis sewer lateral inspection & reporting) | LEFT OUT | A link |
| secondOpinion (ledes, steps, callout, CTA) | ADAPTED | Section 4 last sentence (video and findings compared against an estimate); rest LEFT OUT |
| buyingGuide.lede (a scope is separate from the home inspection) | LEFT OUT | A buyer topic |
| buyingGuide.body ("as is" sale; buyer pays for inspection and occupancy permit; occupancy page silent on sewers) | LEFT OUT | A buyer topic |
| buyingGuide.body (program not for a sale contingency; pending sale does not expedite; new owner eligible if taxes paid; written confirmation of post-closing repair) | LEFT OUT | A buyer topic |
| buyingGuide links, CTA, agents block (association affiliations) | LEFT OUT | Hub elements and company claims |
| nearbyAreas (Chesterfield, Ballwin, St. Louis City, St. Charles, market hub) | ADAPTED | `coverage`: the four other locations |
| finalCta title, paragraphs, bullets | ADAPTED | `cta.title` and `cta.body` written for this service |
| sources (nine links, lastReviewed 2026-10-02, closingNote) | USED | Same list, verbatim |
| servicePageIds | LEFT OUT | Hub linkage |

### Florissant FAQ (10)

| Question | Status | Reason |
|---|---|---|
| Who is responsible for a sewer lateral in Florissant? | USED | Verbatim |
| What part of the lateral does Florissant's program cover? | USED | Verbatim |
| Does the program replace the whole lateral? | USED | Verbatim |
| What does it cost to apply? | USED | Verbatim |
| What happens if a sinkhole opens near my Florissant home? | USED | Verbatim |
| Does the program cover septic systems, condominiums or multi-family buildings? | USED | Verbatim |
| Can a home sale speed up a lateral repair? | USED | Verbatim |
| Do buyers need a City inspection in Florissant? | USED | Verbatim |
| What does a sewer camera inspection show? | USED | Verbatim; the drain FAQ has no such question and a camera may be added to a visit |
| Do you repair or replace sewer lines? | USED | Verbatim, as on the Las Vegas drain page; the service FAQ also asks "Does drain cleaning repair a damaged pipe?" |

## Service page (`svc-drain-cleaning`)

| Section / card / fact | Status | Where / reason |
|---|---|---|
| seoTitle | ADAPTED | "Drain Cleaning in Florissant, MO" |
| metaDescription | LEFT OUT | Market-neutral; replaced |
| serviceDescription | ADAPTED | Same definition, Florissant, Missouri added |
| hero.title | ADAPTED | "Drain Cleaning in Florissant" |
| hero.intro p1 (restores flow by removing grease, roots, debris) | ADAPTED | Hero intro |
| hero.intro p2 and hero.scope (no repair, replacement, lining, excavation) | ADAPTED | Section 4 and the FAQ "Does drain cleaning repair a damaged pipe?"; scope bullets are a template element |
| definition.answer | ADAPTED | `serviceDescription` and hero |
| definition.supporting 1 (drain vs. sewer cleaning) | ADAPTED | Section 1 |
| definition.supporting 1 ("drain clearing" is everyday usage), 2 (cleaning and camera are separate) | LEFT OUT | Kept as FAQ answers |
| definition.scope | ADAPTED | Section 4 |
| signals 1 One slow drain, 2 Several fixtures slow | USED | Problem cards 1 and 2; section 2 |
| signals 3 Gurgling | ADAPTED | Section 2 bullet; full text in FAQ "Why are my drains gurgling?" |
| signals 4 Clogs that keep returning | USED | Problem card 3; section 3 |
| signals 5 Sewage-like odors | LEFT OUT | FAQ "What causes sewage-like odors?" |
| signals 6 Water or sewage coming up | ADAPTED | Section 2 bullet |
| triage rows 1, 2, 5 | ADAPTED | Section 2 |
| triage row 3 (lower drains back up) | LEFT OUT | FAQ "How do I know if it is a drain clog or a sewer line problem?" |
| triage row 4 (clogs again after cleared) | ADAPTED | Section 3 |
| limits.can (4 items) | LEFT OUT | FAQ answers carry grease, roots, wipes |
| limits.cannot: crack/collapse; offset or separated joint; roots at a joint | ADAPTED | Section 4 |
| limits.cannot: public sewer main or its connection | ADAPTED | Section 1 |
| limits.cannot: line the equipment cannot pass | LEFT OUT | No slot |
| limits.callout (jetting not for every pipe; flow is not proof) | ADAPTED | Section 4 (flow is not proof); jetting caution in FAQ "Is hydro jetting safe for every pipe?" |
| process steps 1 to 5 | USED | `process`, verbatim; equipment names only as confirmed (steps 3 and 4) |
| process.prep | LEFT OUT | FAQ "What should I tell you when I request drain cleaning?" |
| decision | LEFT OUT | FAQ "Can a camera see through standing water?" |
| independent band | ADAPTED | Section 4 last sentence |
| methods table | LEFT OUT | FAQ "What methods are used to clean a drain?" |
| secondaryLimits (camera can/cannot) | LEFT OUT | FAQ answers on cameras |
| ask items: video, written findings | USED | Inclusion 6 |
| ask items: limits, access point, cleaning record, locating | LEFT OUT | FAQ |
| ask.keep | ADAPTED | Section 4 (compare against an estimate) |
| audiences: Homeowners | LEFT OUT | Problem cards |
| audiences: Home buyers, Home sellers | LEFT OUT | The Florissant buyer topics ("as is" sale, sale contingency) are not drain-cleaning topics; the buyer FAQs carry them |
| markets (3 hubs) | LEFT OUT | Replaced by `coverage` |
| faqTitle, situations, terms, request.* | LEFT OUT | Template slots; FAQ answers carry the situations |
| relatedPageIds (4) | ADAPTED | Florissant page, this service, sewer cleaning, camera inspection |
| cta | ADAPTED | Rewritten for Florissant |
| inclusions (6 cards) | USED | `sl-blocks/drain-cleaning` |

### Service FAQ (37): 34 USED verbatim, 3 LEFT OUT.

Understanding drain cleaning (6), Symptoms and causes (11), Documentation and locating (3), Maintenance and prevention (4), Real estate (1): all USED.

Limits and cameras (7): "Can drain cleaning fix a broken or collapsed pipe?" (LEFT OUT: duplicate of "Does drain cleaning repair a damaged pipe?"), "Can cleaning remove tree roots?" (LEFT OUT: covered by "Can tree roots grow into drain pipes?"); the other five USED.

Requesting service (5): "Do you clean drains in St. Louis, San Diego, and Las Vegas?" (LEFT OUT: this page is an area page, the question belongs to the hub); "How much does drain cleaning cost?", "How long does drain cleaning take?", "What should I tell you when I request drain cleaning?", "What happens if a camera shows damage?" USED. These carry no price or time and no DEC-088 wording; the service FAQ states cost and time vary.

Total FAQ on the page: 44 (10 Florissant + 34 service).
