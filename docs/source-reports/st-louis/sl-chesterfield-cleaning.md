# Source report: sl-chesterfield-cleaning

Page: Sewer Cleaning in Chesterfield, MO (`chesterfieldCleaningContent`, `content/pages/sl-stl-chesterfield-cleaning.tsx`).

Sources:
- LOCATION: `chesterfieldContent` in `content/pages/st-louis-chesterfield.tsx` (City program terms: Sewer Lateral Policy & Procedures dated March 2026, application Rev. May 2024; MSD pages as listed in its `sources`; housing figures flagged PENDING-015 are NOT used).
- SERVICE: `svc-sewer-cleaning` `v2` in `content/pages/services.tsx`, plus `SERVICE_PROBLEMS`, `SERVICE_INCLUSIONS` and `SERVICE_PROBLEM_SHOTS` in `content/pages/service-location-shared.ts` (no `sl-blocks` file for this service).

Status key: USED = text taken as published; ADAPTED = fact kept, wording changed to tie it to this service; LEFT OUT = not on this page (reason given).

## The four body sections and their sources

| # | h2 on the page | Chesterfield source | Service source |
|---|---|---|---|
| 1 | Your lateral, from the foundation to MSD's main, is yours to maintain | `responsibility` (answer, public-main card, lateral card with the City definition, note), `keyTakeaways` 1 | `definition.supporting` (private-property lines, not public mains), `definition.answer` |
| 2 | How the City's program treats cleaning: as maintenance | `municipalProgram` (lede, doesNotCover roots and initial cabling, covers severe blockage, steps 1), FAQ "clogged line or tree roots", `whoToCall.secondaryAgency` | `limits.callout`, `decision.note` (roots can regrow), `definition.answer` (clears, does not repair), `methods` (cable cleaning) |
| 3 | Newer homes, so a clog that returns may not be buildup | `housingAge` (p1, p3, p4, table rows belly and joint) | `signals` (clogs that keep coming back), `situations` (drains keep clogging), `limits.callout`, `decision.note` |
| 4 | MSD, Public Works, and where cleaning fits | `whoToCall` (MSD paragraphs, agency, company phone), `systemExplainer` (Conway Meadows) | `definition.scope` (no repair or replacement), `signals` (water rising) |

## Chesterfield location page

| Section / card / fact | Status | Where / reason |
|---|---|---|
| seoTitle | ADAPTED | Service name swapped in |
| metaDescription | LEFT OUT | Replaced by a page-specific description |
| hero.title and hero.intro | ADAPTED | Hero intro: MSD private-lateral statement + City cabling and roots as maintenance |
| heroForm bullets, request card, form, phone line | LEFT OUT | Template supplies its own request form |
| heroForm bullet: locally owned and family-operated since 2011 | LEFT OUT | Owner-confirmed on the location page; not needed in the body |
| faqHeading, faqSchemaApproved | LEFT OUT | Template sets both |
| keyTakeaways 1 (MSD maintains the main; lateral and connection are private, owner maintains and repairs) | ADAPTED | Section 1 |
| keyTakeaways 2 (City program, $28 fee, up to $15,000, routine root removal is maintenance) | ADAPTED | Section 2 (roots as maintenance); $28 and $15,000 LEFT OUT, no dollar terms on this page |
| keyTakeaways 3 (a camera inspection gives recorded evidence) | LEFT OUT | Camera-specific |
| keyTakeaways jumpNav | LEFT OUT | No on-page anchors in this template |
| serviceCards (9) and helpBar | LEFT OUT | Hub grid; related links cover siblings |
| responsibility.answer (MSD maintains the main; lateral and connection are private; owner maintains and repairs) | ADAPTED | Section 1 |
| responsibility card: the public sewer main (MSD role; backup repair; confirm the serving utility by address near a boundary or on septic) | ADAPTED | Section 1 (confirm by address); backup-repair clause LEFT OUT |
| responsibility card: the lateral line (private; City defines it as 3-5 ft outside the foundation to the main in the street or an easement) | ADAPTED | Section 1 |
| responsibility table (who owns, who maintains, who to contact, what help exists, where an inspection helps) | ADAPTED | Rows 1-2 Section 1, row 3 Section 4, row 4 Section 2; row 5 (camera) LEFT OUT |
| responsibility.note (not legal advice; no published rule found on the part under the street) | ADAPTED | Section 1 ("no published rule"); legal-advice sentence LEFT OUT |
| systemExplainer p1-2 (MSD: separate vs. combined system; page does not label every parcel) | LEFT OUT | No tie to this service; background only |
| systemExplainer p3-5 (Conway Meadows: about 1,400 ft, Conway Road to North Outer Forty Road, 18-24 in., construction spring 2026, undated) | ADAPTED | Section 4: "MSD says is designed to replace about 1,400 feet"; roads, pipe width and dates LEFT OUT |
| systemExplainer card (what a camera can show) | LEFT OUT | Camera content is on the service page |
| housingAge p1 (most homes newer than the typical St. Louis-area house) | ADAPTED | Section 3, qualitative only |
| housingAge p2 (85.6% built 1970 or later, median 1982, 1.4% before 1940) | LEFT OUT | Flagged PENDING-015 on the location page; no figure is used |
| housingAge p3 (pipe from that era is more often PVC than clay, cast iron or bituminized fiber) | ADAPTED | Section 3 |
| housingAge p4 (a belly causes slow repeating drainage; a camera shows what is there) | ADAPTED | Section 3 (belly holds water, settles solids) |
| housingAge.table (bellies, joint separation, damage from later work, roots) | ADAPTED | Section 3 (belly, joint) and Section 2 (roots); later-work row LEFT OUT |
| whoToCall paragraphs (MSD inspects a building backup; urgent list; independent inspection helps if MSD or a plumber points to your lateral) | ADAPTED | Section 4 |
| whoToCall 911 paragraph (911 is not a sewer dispatch line) | LEFT OUT | No tie to this service |
| whoToCall.agency (MSD building backup line (314) 768-6260) | ADAPTED | Labelled MSD's number, not ours |
| whoToCall.secondaryAgency (Public Works (636) 537-4762; hours; City Hall address) | ADAPTED | Section 2: number only, labelled the City's |
| whoToCall.company (company phone and hours) | ADAPTED | Section 4: phone from marketOperatingDetail; hours LEFT OUT |
| municipalProgram.lede (up to $15,000; roots in joints are maintenance; City runs its own video review) | ADAPTED | Section 2; dollar figure LEFT OUT |
| municipalProgram eligibility (single-family, duplex, condo, up to six units; exclusions; tax-delinquent owners) | LEFT OUT | Not tied to this service; the FAQ carries it |
| municipalProgram $28 fee, 2000 vote, January 1, 2001 start | LEFT OUT | Not tied to this service; the FAQ carries it |
| municipalProgram owner (not tenant) applies; seller applies in a real estate transaction | ADAPTED | Fourth problem card (seller applies); owner-not-tenant LEFT OUT |
| municipalProgram terms-dated caveat (policy March 2026, application May 2024; funding not stated) | LEFT OUT | No dollar or funding terms on this page |
| municipalProgram.covers (investigation, excavation, defect definitions, restoration) | ADAPTED | Section 2 (severe blockage that cannot be cabled out) |
| municipalProgram.doesNotCover (roots in bells and joints; initial cabling; pipe under a building; interior cleanup; landscaping; natural disaster; above $15,000) | USED | Section 2 (roots, initial cabling); rest LEFT OUT |
| municipalProgram.steps (cable, packet, owner applies with $200 fee and proof, City televises) | ADAPTED | Section 2 (step 1: cabling first, not reimbursed) |
| municipalProgram.callout (independent inspection does not replace the City step; documentation question; three Master Drainlayer bids; no repairs by us) | ADAPTED | Section 4 last sentence (no repairs); rest LEFT OUT |
| municipalProgram.closing (link to St. Louis sewer lateral inspection & reporting) | LEFT OUT | Hub link |
| secondOpinion (ledes, steps, callout, CTA) | LEFT OUT | No tie |
| buyingGuide.lede and body (no sale requirement found; occupancy materials address businesses; seller applies) | ADAPTED | Fourth problem card |
| buyingGuide links, CTA, agents block (association affiliations) | LEFT OUT | Hub elements |
| nearbyAreas (St. Louis City, Ballwin, Florissant, St. Charles, market hub) | ADAPTED | `coverage`: the four other St. Louis locations; the market-hub item LEFT OUT |
| finalCta title | ADAPTED | `cta.title` |
| finalCta paragraphs, bullets | LEFT OUT | Replaced by `cta.body` |
| sources (12 links, lastReviewed, closingNote) | USED | Same, via `sources` |
| servicePageIds | LEFT OUT | Not carried onto a service + location page |

### Chesterfield FAQ (10)

| Question | Status | Reason |
|---|---|---|
| Who is responsible for a sewer lateral in Chesterfield? | USED | Verbatim. Backs Section 1 / the MSD statement |
| Does Chesterfield have a sewer lateral repair program? | USED | Verbatim. Program context |
| Which Chesterfield homes can qualify for the lateral repair program? | USED | Verbatim. Eligibility; carried here, cut from the body |
| How much can Chesterfield's lateral program pay? | USED | Verbatim. Carries the $15,000 term and the March 2026 caveat, cut from the body |
| Does Chesterfield's program cover a clogged line or tree roots? | USED | Verbatim. Backs the cabling and roots material |
| What does a Chesterfield owner submit to apply? | USED | Verbatim. Carries the $200 fee and paperwork, cut from the body |
| What should I do if sewage backs up in my Chesterfield building? | USED | Verbatim. Backs the MSD backup paragraph |
| Is a sewer inspection required before buying a Chesterfield home? | USED | Verbatim. Backs the fourth problem card |
| What does a sewer camera inspection show? | USED | Verbatim; the cleaning page may be paired with a camera look |
| Do you repair or replace sewer lines? | USED | Verbatim. Same answer on every page |

## Service page (`svc-sewer-cleaning`)

| Section / card / fact | Status | Where / reason |
|---|---|---|
| seoTitle | ADAPTED | "Sewer Cleaning in Chesterfield, MO" |
| metaDescription | LEFT OUT | Market-neutral (names three markets); replaced |
| serviceDescription | ADAPTED | Same definition, Chesterfield added, "does not repair it" added from `definition.answer` |
| hero.title, hero.intro (removes buildup; no repair, replacement, lining, excavation or pipe installation) | ADAPTED | Hero intro; the scope line is carried in Section 4's last sentence and the FAQ |
| hero.scope bullets, hero card | LEFT OUT | Template elements |
| definition.answer | ADAPTED | `serviceDescription`, hero intro |
| definition.supporting (camera may be used before, after or both; private-property lines, not public mains) | ADAPTED | Section 1 (private lines, not public mains); camera sentence LEFT OUT (FAQ "Do you use a camera before or after cleaning?") |
| definition.scope | LEFT OUT | FAQ and Section 4 last sentence carry it |
| signals 1 Several fixtures slow | USED | Problem card 1 (`SERVICE_PROBLEMS`) |
| signals 2 Gurgling | LEFT OUT | Slot-limited; FAQ answers cover venting |
| signals 3 Clogs that keep coming back | USED | Problem card 2; Section 3 |
| signals 4 Sewage-like odors | LEFT OUT | FAQ |
| signals 5 Water rising through a floor drain, shower or toilet | USED | Problem card 3 |
| signals 6 Wet or lush yard patches | LEFT OUT | Slot-limited |
| process steps 1 to 5 (access, assessment, camera when included, cleaning, review) | USED | `process`, verbatim; equipment names appear only as confirmed in step 3 |
| process.prep | LEFT OUT | No slot; FAQ "What access point do you use?" |
| methods table (hydro jetting, cable cleaning) | ADAPTED | Section 2: cabling named only through the City's step; jetting LEFT OUT |
| limits (camera can document; cannot show) | LEFT OUT | Camera content lives on the camera pages |
| limits.callout (a line that flows again is not proof the pipe is sound) | USED | Section 3 |
| decision.answer, note (clears and maintains; does not repair; may not stop a problem returning) | ADAPTED | Section 2 (does not seal the joint), Section 3 |
| decision.list | LEFT OUT | No slot |
| independent band | ADAPTED | Section 4 last sentence (does not perform repairs or replacements) |
| comparison table | LEFT OUT | Related links cover siblings |
| ask items, keep | LEFT OUT | `inclusions` carry video and written findings |
| factors, myths | LEFT OUT | FAQ carries time and cost, wipes, grease |
| situations: drains keep clogging | ADAPTED | Section 3 |
| situations: buying or selling a home | ADAPTED | Fourth problem card (location-driven) |
| situations: told you need major work | LEFT OUT | No tie to a Chesterfield fact on this page |
| markets (3 hubs) | LEFT OUT | Replaced by `coverage` |
| faqTitle, eyebrows, request.* | LEFT OUT | Template slots |
| relatedPageIds, relatedDescriptions | ADAPTED | Chesterfield page, this service, hydro jetting, cleaning and camera |
| cta | ADAPTED | Rewritten for Chesterfield |
| inclusions (6 cards) | USED | `SERVICE_INCLUSIONS['svc-sewer-cleaning']` |

### Service FAQ

Sewer cleaning service FAQ (14): all 14 USED verbatim. The time-and-cost answer ("We do not publish a standard time or price on this page. Ask when you request service.") is carried as published; it has no free-estimate or same-day wording to adjust.

Total FAQ on the page: 24 (10 Chesterfield + 14 service).

## Facts to confirm

- Housing age is stated qualitatively only ("Most Chesterfield homes are newer than the typical St. Louis-area house"). The figures behind it (85.6%, median 1982, 1.4%) are flagged PENDING-015 on the location page and are not used. If the Census re-check changes that sentence, change it here too.
- Whether the City accepts sewer cleaning or jetting in place of its "cabling" step is unconfirmed, so no page says it does. Where relevant the copy tells the reader to ask Public Works.
- The City's policy names a "licensed plumbing company or licensed drainlayer" for cabling and "Master Drainlayers licensed by St. Louis County" for bids. These are the City's terms. No page makes a licence claim for The Sewer Pros (DEC-072).
- MSD's Conway Meadows page is undated; the copy says "MSD says is designed to replace" and tells readers to check current status.
