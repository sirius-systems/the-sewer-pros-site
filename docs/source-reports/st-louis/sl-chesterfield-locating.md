# Source report: sl-chesterfield-locating

Page: Sewer Line Locating in Chesterfield, MO (`chesterfieldLocatingContent`, `content/pages/sl-stl-chesterfield-locating.tsx`).

Sources:
- LOCATION: `chesterfieldContent` in `content/pages/st-louis-chesterfield.tsx` (City program terms: Sewer Lateral Policy & Procedures dated March 2026, application Rev. May 2024; MSD pages as listed in its `sources`; housing figures flagged PENDING-015 are NOT used).
- SERVICE: `svc-sewer-line-locating` `v2` in `content/pages/services.tsx`, plus `content/pages/sl-blocks/sewer-line-locating.ts`.

Status key: USED = text taken as published; ADAPTED = fact kept, wording changed to tie it to this service; LEFT OUT = not on this page (reason given).

## The four body sections and their sources

| # | h2 on the page | Chesterfield source | Service source |
|---|---|---|---|
| 1 | From three to five feet outside the foundation to MSD's main: what a locate can trace | `responsibility` (lateral card: City definition; answer; note), `keyTakeaways` 1 | `definition.answer` (transmitter and receiver), `limits.cannot` (survey), `process` steps (trace) |
| 2 | Before anyone digs: the City's program, your bids, and 811 | `municipalProgram` (covers: excavation and repair; callout: three Master Drainlayers; no repairs by us), `whoToCall.secondaryAgency` | `limits.callout`, `limits.cannot` (utility clearance, permission to dig), `ask.keep`, FAQ "Can line locating help with sewer repair work?" |
| 3 | Newer homes, later work, and where the line runs today | `housingAge` (p1, table: damage from later work) | `signals` (a camera finding you need to place), `limits.cannot` (a look at the pipe's condition), `definition.supporting` (camera shows what is inside) |
| 4 | MSD's Conway Meadows project is public sewer, not your lateral | `systemExplainer` (Conway Meadows paragraphs, undated note), `responsibility` public-main card (service boundary, septic), `whoToCall.agency` | `definition.supporting` (private-property lines, not public mains), `limits.cannot` (a locate traces the sewer line, not other lines) |

## Chesterfield location page

| Section / card / fact | Status | Where / reason |
|---|---|---|
| seoTitle | ADAPTED | Service name swapped in |
| metaDescription | LEFT OUT | Replaced by a page-specific description |
| hero.title and hero.intro | ADAPTED | Hero intro: City lateral definition + MSD statement |
| heroForm bullets, request card, form, phone line | LEFT OUT | Template supplies its own request form |
| heroForm bullet: locally owned and family-operated since 2011 | LEFT OUT | Owner-confirmed on the location page; not needed in the body |
| faqHeading, faqSchemaApproved | LEFT OUT | Template sets both |
| keyTakeaways 1 (MSD maintains the main; lateral and connection are private, owner maintains and repairs) | ADAPTED | Section 1 |
| keyTakeaways 2 (City program, $28 fee, up to $15,000, routine root removal is maintenance) | ADAPTED | Section 2 (program can pay for excavation and repair); dollar terms LEFT OUT |
| keyTakeaways 3 (a camera inspection gives recorded evidence) | LEFT OUT | Camera-specific |
| keyTakeaways jumpNav | LEFT OUT | No on-page anchors in this template |
| serviceCards (9) and helpBar | LEFT OUT | Hub grid; related links cover siblings |
| responsibility.answer (MSD maintains the main; lateral and connection are private; owner maintains and repairs) | ADAPTED | Section 1 |
| responsibility card: the public sewer main (MSD role; backup repair; confirm the serving utility by address near a boundary or on septic) | ADAPTED | Section 4 (service boundary and septic by address); rest LEFT OUT |
| responsibility card: the lateral line (private; City defines it as 3-5 ft outside the foundation to the main in the street or an easement) | ADAPTED | Section 1 and hero intro |
| responsibility table (who owns, who maintains, who to contact, what help exists, where an inspection helps) | ADAPTED | Rows 1-2 Section 1, row 3 Section 4; rows 4-5 LEFT OUT |
| responsibility.note (not legal advice; no published rule found on the part under the street) | ADAPTED | Section 1, same |
| systemExplainer p1-2 (MSD: separate vs. combined system; page does not label every parcel) | LEFT OUT | No tie to this service; background only |
| systemExplainer p3-5 (Conway Meadows: about 1,400 ft, Conway Road to North Outer Forty Road, 18-24 in., construction spring 2026, undated) | ADAPTED | Section 4: 1,400 ft, both roads, 18-24 in., undated; the spring 2026 sentence was trimmed for length |
| systemExplainer card (what a camera can show) | LEFT OUT | Camera content is on the service page |
| housingAge p1 (most homes newer than the typical St. Louis-area house) | ADAPTED | Section 3, qualitative only |
| housingAge p2 (85.6% built 1970 or later, median 1982, 1.4% before 1940) | LEFT OUT | Flagged PENDING-015 on the location page; no figure is used |
| housingAge p3 (pipe from that era is more often PVC than clay, cast iron or bituminized fiber) | LEFT OUT | Not used; this page is about route, not material |
| housingAge p4 (a belly causes slow repeating drainage; a camera shows what is there) | LEFT OUT | Not used |
| housingAge.table (bellies, joint separation, damage from later work, roots) | ADAPTED | Section 3 (damage from later work) |
| whoToCall paragraphs (MSD inspects a building backup; urgent list; independent inspection helps if MSD or a plumber points to your lateral) | ADAPTED | Section 4 (one sentence on backups) |
| whoToCall 911 paragraph (911 is not a sewer dispatch line) | LEFT OUT | No tie to this service |
| whoToCall.agency (MSD building backup line (314) 768-6260) | ADAPTED | Labelled MSD's number, not ours |
| whoToCall.secondaryAgency (Public Works (636) 537-4762; hours; City Hall address) | ADAPTED | Section 2: number only, labelled the City's |
| whoToCall.company (company phone and hours) | LEFT OUT | As on the Las Vegas locating model, no company phone in the body |
| municipalProgram.lede (up to $15,000; roots in joints are maintenance; City runs its own video review) | ADAPTED | Section 2 (what the program can pay for) |
| municipalProgram eligibility (single-family, duplex, condo, up to six units; exclusions; tax-delinquent owners) | LEFT OUT | Not tied to this service; the FAQ carries it |
| municipalProgram $28 fee, 2000 vote, January 1, 2001 start | LEFT OUT | Not tied to this service; the FAQ carries it |
| municipalProgram owner (not tenant) applies; seller applies in a real estate transaction | ADAPTED | Fourth problem card (seller applies); owner-not-tenant LEFT OUT |
| municipalProgram terms-dated caveat (policy March 2026, application May 2024; funding not stated) | LEFT OUT | No dollar or funding terms on this page |
| municipalProgram.covers (investigation, excavation, defect definitions, restoration) | ADAPTED | Section 2 (excavation and repair of a qualifying lateral) |
| municipalProgram.doesNotCover (roots in bells and joints; initial cabling; pipe under a building; interior cleanup; landscaping; natural disaster; above $15,000) | LEFT OUT | Not tied to locating |
| municipalProgram.steps (cable, packet, owner applies with $200 fee and proof, City televises) | LEFT OUT | Not tied to locating |
| municipalProgram.callout (independent inspection does not replace the City step; documentation question; three Master Drainlayer bids; no repairs by us) | ADAPTED | Section 2 (three Master Drainlayer bids; no repairs, excavation or replacements by us) |
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
| What does a sewer camera inspection show? | LEFT OUT | A camera question the locating page does not own; the service FAQ covers cameras and sonde use |
| Do you repair or replace sewer lines? | USED | Verbatim. Same answer on every page |

## Service page (`svc-sewer-line-locating`)

| Section / card / fact | Status | Where / reason |
|---|---|---|
| seoTitle | ADAPTED | "Sewer Line Locating in Chesterfield, MO" |
| metaDescription | LEFT OUT | Market-neutral; replaced |
| serviceDescription | ADAPTED | Same definition, Chesterfield added; "results are estimates, not a survey" kept |
| hero.title, hero.intro | ADAPTED | Hero intro |
| hero.scope, hero card | LEFT OUT | Template elements |
| definition.answer (transmitter in the line, receiver at the surface; depth approximate) | ADAPTED | Section 1; `serviceDescription` |
| definition.supporting (locating shows where; camera shows what is inside; private lines, not public mains) | ADAPTED | Sections 3 and 4 |
| definition.scope | LEFT OUT | FAQ and Section 2 carry the no-repair statement |
| signals 1 Planning digging, trenching or construction | USED | Problem card 1 |
| signals 2 Landscaping, trees, fences, hardscape | USED | Problem card 2 |
| signals 3 Sharing the route with another contractor | ADAPTED | Section 2 (tell whoever does the work where the line runs) |
| signals 4 Buying or evaluating a property | ADAPTED | Fourth problem card |
| signals 5 A camera finding you need to place | USED | Problem card 3; Section 3 |
| limits.can (5 items) | ADAPTED | Section 1 (estimate of the accessible line), Section 3 (surface position of a point) |
| limits.cannot (survey; utility clearance or permission to dig; exact depth; every utility; untraced sections; pipe condition) | ADAPTED | Sections 1, 2, 3 and 4 |
| limits.callout (811 one-call) | ADAPTED | Section 2 |
| process steps 1 to 5 | USED | `process`, verbatim; equipment name only as confirmed (step 2) |
| process.prep | LEFT OUT | No slot |
| decision.answer, list (locating or camera inspection) | ADAPTED | Section 3 (last sentence) |
| independent band | ADAPTED | Section 2 (no repairs, excavation or replacements by us) |
| comparison table (incl. 811 row) | LEFT OUT | Related links cover siblings; 811 wording used in Section 2 |
| ask items, keep | LEFT OUT | `inclusions` carry video and written findings |
| audiences (home buyers, agents, inspectors, property managers) | ADAPTED | Fourth problem card (buyers); the rest LEFT OUT |
| markets (3 hubs) | LEFT OUT | Replaced by `coverage` |
| faqTitle, eyebrows, request.* | LEFT OUT | Template slots |
| relatedPageIds, relatedDescriptions | ADAPTED | Chesterfield page, this service, camera inspection, pre-purchase inspection |
| cta | ADAPTED | Rewritten for Chesterfield |
| inclusions (6 cards) | USED | `sl-blocks` |

### Service FAQ

Service FAQ (23): 20 USED verbatim, 3 LEFT OUT.
- LEFT OUT "Does my city require a sewer inspection for a sale, remodel, or permit?": the Chesterfield sale question answers it for this city.
- LEFT OUT "Should I use chemical drain cleaner on a sewer line clog?": about drain cleaning products, off the locating topic.
- LEFT OUT "If the line drains after cleaning, is the pipe healthy?": about cleaning and pipe health, off the locating topic.

Total FAQ on the page: 29 (9 Chesterfield + 20 service). The time-and-cost answer is carried as published (no standard time or price).

## Facts to confirm

- Housing age is stated qualitatively only ("Most Chesterfield homes are newer than the typical St. Louis-area house"). The figures behind it (85.6%, median 1982, 1.4%) are flagged PENDING-015 on the location page and are not used. If the Census re-check changes that sentence, change it here too.
- Whether the City accepts sewer cleaning or jetting in place of its "cabling" step is unconfirmed, so no page says it does. Where relevant the copy tells the reader to ask Public Works.
- The City's policy names a "licensed plumbing company or licensed drainlayer" for cabling and "Master Drainlayers licensed by St. Louis County" for bids. These are the City's terms. No page makes a licence claim for The Sewer Pros (DEC-072).
- MSD's Conway Meadows page is undated; the copy says "MSD says is designed to replace" and tells readers to check current status.
