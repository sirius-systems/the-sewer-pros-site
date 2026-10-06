# Source report: sl-chesterfield-cleaning-camera

Page: Sewer Cleaning & Camera Inspection in Chesterfield, MO (`chesterfieldCleaningCameraContent`, `content/pages/sl-stl-chesterfield-cleaning-camera.tsx`).

Sources:
- LOCATION: `chesterfieldContent` in `content/pages/st-louis-chesterfield.tsx` (City program terms: Sewer Lateral Policy & Procedures dated March 2026, application Rev. May 2024; MSD pages as listed in its `sources`; housing figures flagged PENDING-015 are NOT used).
- SERVICE: `svc-sewer-cleaning-camera-inspection` `v2` in `content/pages/services.tsx`, plus `content/pages/sl-blocks/sewer-cleaning-camera-inspection.ts`.

Status key: USED = text taken as published; ADAPTED = fact kept, wording changed to tie it to this service; LEFT OUT = not on this page (reason given).

## The four body sections and their sources

| # | h2 on the page | Chesterfield source | Service source |
|---|---|---|---|
| 1 | The City cables first and runs its own video, so a visit here is your own record | `municipalProgram` (lede, steps 1 and 4, callout), `whoToCall.secondaryAgency`, `keyTakeaways` 3 | `ask.items` (video, written findings), `process` step 5 (video and findings), `definition.supporting` |
| 2 | Roots the City calls maintenance, and the opening they came through | `municipalProgram` (lede, doesNotCover roots, covers defect list), `housingAge.table` (roots, joint separation) | `limits.can` (roots, offsets, separated joints, standing water), `limits.cannot` (pipe slope), `limits.callout` |
| 3 | Newer Chesterfield homes: what clearing the clog does not settle | `housingAge` (p1, p3, p4, table: belly, joints, later work) | `signals` (clogs that keep coming back), `decision.answer` (camera after cleaning), `limits.callout` |
| 4 | MSD's main, your lateral, and what footage cannot place | `responsibility` (answer, lateral card, note), `whoToCall` (MSD agency, paragraphs), `secondOpinion` | `ask.items` (entry point and location), `limits.cannot`, `definition.supporting` (private lines, not public mains), `ask.keep` |

## Chesterfield location page

| Section / card / fact | Status | Where / reason |
|---|---|---|
| seoTitle | ADAPTED | Service name swapped in |
| metaDescription | LEFT OUT | Replaced by a page-specific description |
| hero.title and hero.intro | ADAPTED | Hero intro: MSD statement + City cabling then its own video review |
| heroForm bullets, request card, form, phone line | LEFT OUT | Template supplies its own request form |
| heroForm bullet: locally owned and family-operated since 2011 | LEFT OUT | Owner-confirmed on the location page; not needed in the body |
| faqHeading, faqSchemaApproved | LEFT OUT | Template sets both |
| keyTakeaways 1 (MSD maintains the main; lateral and connection are private, owner maintains and repairs) | ADAPTED | Section 4 |
| keyTakeaways 2 (City program, $28 fee, up to $15,000, routine root removal is maintenance) | ADAPTED | Sections 1 and 2 (cabling, roots); dollar terms LEFT OUT |
| keyTakeaways 3 (a camera inspection gives recorded evidence) | ADAPTED | Section 1: your own record, not a replacement for the City video |
| keyTakeaways jumpNav | LEFT OUT | No on-page anchors in this template |
| serviceCards (9) and helpBar | LEFT OUT | Hub grid; related links cover siblings |
| responsibility.answer (MSD maintains the main; lateral and connection are private; owner maintains and repairs) | ADAPTED | Section 4 |
| responsibility card: the public sewer main (MSD role; backup repair; confirm the serving utility by address near a boundary or on septic) | ADAPTED | Section 4 (MSD inspects a backup); rest LEFT OUT |
| responsibility card: the lateral line (private; City defines it as 3-5 ft outside the foundation to the main in the street or an easement) | ADAPTED | Section 4 (private lateral); the 3-5 ft definition LEFT OUT |
| responsibility table (who owns, who maintains, who to contact, what help exists, where an inspection helps) | ADAPTED | Rows 1-3 Section 4, row 4 Sections 1-2; row 5 LEFT OUT (this service is the camera) |
| responsibility.note (not legal advice; no published rule found on the part under the street) | ADAPTED | Section 4, same |
| systemExplainer p1-2 (MSD: separate vs. combined system; page does not label every parcel) | LEFT OUT | No tie to this service; background only |
| systemExplainer p3-5 (Conway Meadows: about 1,400 ft, Conway Road to North Outer Forty Road, 18-24 in., construction spring 2026, undated) | LEFT OUT | No tie to cleaning with a camera |
| systemExplainer card (what a camera can show) | LEFT OUT | Camera content is on the service page |
| housingAge p1 (most homes newer than the typical St. Louis-area house) | ADAPTED | Section 3, qualitative only |
| housingAge p2 (85.6% built 1970 or later, median 1982, 1.4% before 1940) | LEFT OUT | Flagged PENDING-015 on the location page; no figure is used |
| housingAge p3 (pipe from that era is more often PVC than clay, cast iron or bituminized fiber) | ADAPTED | Section 3 ("less often old failing pipe"); material list LEFT OUT |
| housingAge p4 (a belly causes slow repeating drainage; a camera shows what is there) | ADAPTED | Section 3 |
| housingAge.table (bellies, joint separation, damage from later work, roots) | ADAPTED | Section 2 (roots) and Section 3 (belly, joints, later work) |
| whoToCall paragraphs (MSD inspects a building backup; urgent list; independent inspection helps if MSD or a plumber points to your lateral) | ADAPTED | Section 4 (call MSD first) |
| whoToCall 911 paragraph (911 is not a sewer dispatch line) | LEFT OUT | No tie to this service |
| whoToCall.agency (MSD building backup line (314) 768-6260) | ADAPTED | Labelled MSD's number, not ours |
| whoToCall.secondaryAgency (Public Works (636) 537-4762; hours; City Hall address) | ADAPTED | Section 1: number only, labelled the City's |
| whoToCall.company (company phone and hours) | ADAPTED | Section 4: phone from marketOperatingDetail; hours LEFT OUT |
| municipalProgram.lede (up to $15,000; roots in joints are maintenance; City runs its own video review) | ADAPTED | Section 1 (own video) and Section 2 (roots) |
| municipalProgram eligibility (single-family, duplex, condo, up to six units; exclusions; tax-delinquent owners) | LEFT OUT | Not tied to this service; the FAQ carries it |
| municipalProgram $28 fee, 2000 vote, January 1, 2001 start | LEFT OUT | Not tied to this service; the FAQ carries it |
| municipalProgram owner (not tenant) applies; seller applies in a real estate transaction | ADAPTED | Fourth problem card (seller applies); owner-not-tenant LEFT OUT |
| municipalProgram terms-dated caveat (policy March 2026, application May 2024; funding not stated) | LEFT OUT | No dollar or funding terms on this page |
| municipalProgram.covers (investigation, excavation, defect definitions, restoration) | ADAPTED | Section 2 (defect list) |
| municipalProgram.doesNotCover (roots in bells and joints; initial cabling; pipe under a building; interior cleanup; landscaping; natural disaster; above $15,000) | ADAPTED | Section 2 (roots); rest LEFT OUT |
| municipalProgram.steps (cable, packet, owner applies with $200 fee and proof, City televises) | ADAPTED | Section 1 (steps 1 and 4: cabling, then City televises) |
| municipalProgram.callout (independent inspection does not replace the City step; documentation question; three Master Drainlayer bids; no repairs by us) | ADAPTED | Section 1 (does not replace the City video; documentation question) |
| municipalProgram.closing (link to St. Louis sewer lateral inspection & reporting) | LEFT OUT | Hub link |
| secondOpinion (ledes, steps, callout, CTA) | ADAPTED | Section 4 last sentence (footage and findings to compare an estimate) |
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
| What does a sewer camera inspection show? | LEFT OUT | The service page asks the same question with the fuller answer (adds what a camera does not show), so the service answer is used |
| Do you repair or replace sewer lines? | USED | Verbatim. Same answer on every page |

## Service page (`svc-sewer-cleaning-camera-inspection`)

| Section / card / fact | Status | Where / reason |
|---|---|---|
| seoTitle | ADAPTED | "Sewer Cleaning & Camera Inspection in Chesterfield, MO" |
| metaDescription | LEFT OUT | Market-neutral; replaced |
| serviceDescription | ADAPTED | Same definition, Chesterfield added |
| hero.title, hero.intro (clear what can be cleared; camera before, after or both; no repair, replacement, lining, excavation or pipe installation) | ADAPTED | Hero intro; scope line carried in Section 4 and the FAQ |
| hero.scope, hero card | LEFT OUT | Template elements |
| definition.answer, supporting 1-2 | ADAPTED | `serviceDescription`, hero intro, Section 4 (private lines, not public mains) |
| signals 1 Several fixtures slow | USED | Problem card 1 |
| signals 2 Gurgling | LEFT OUT | FAQ "What are signs I may need cleaning or a camera inspection?" |
| signals 3 Clogs that keep coming back | USED | Problem card 2; Section 3 |
| signals 4 Water rising in a floor drain, tub or toilet | USED | Problem card 3 |
| signals 5 Sewage-like odor; 6 Water at a cleanout | LEFT OUT | FAQ |
| limits.can (9 items) | ADAPTED | Section 2 (roots, offsets, separated joints, standing water) |
| limits.cannot (7 items) | ADAPTED | Section 2 (a camera does not measure slope), Section 4 (does not establish the connection); rest LEFT OUT |
| limits.callout (a line that flows again, or a video that looks clear, is not proof) | USED | Section 3 |
| limits.related (line locating is a separate service) | LEFT OUT | FAQ "Can you locate my sewer line, and how deep is it?" |
| process steps 1 to 5 | USED | `process`, verbatim; equipment names only as confirmed (step 3) |
| process.prep | LEFT OUT | No slot; FAQ answers carry access |
| decision.answer, list (camera or cleaning first) | ADAPTED | Section 3 (camera after cleaning); list LEFT OUT |
| comparison table | LEFT OUT | Related links cover siblings |
| ask items (video, written findings, entry point, cleaning record, coding and locating) | ADAPTED | `inclusions`; Section 1 (video, findings); Section 4 (where along the line) |
| ask.keep (keep what you receive; ask another company to review the video; a camera finding is not a repair recommendation) | ADAPTED | Section 4 last sentence (compare an estimate against footage and findings) |
| audiences: homeowners | LEFT OUT | Problem cards |
| audiences: home buyers | ADAPTED | Fourth problem card (blocked or full line; cleaning may come first) |
| markets (3 hubs) | LEFT OUT | Replaced by `coverage` |
| faqTitle, eyebrows, request.* | LEFT OUT | Template slots |
| relatedPageIds (8), relatedDescriptions | ADAPTED | Chesterfield page, this service, camera inspection, sewer cleaning |
| cta | ADAPTED | Rewritten for Chesterfield |
| inclusions (6 cards) | USED | `sl-blocks` |

### Service FAQ

Service FAQ (21): all 21 USED verbatim, including "Does a clear video mean my line is healthy?" and "How long does it take, and how much does it cost?" ("We do not publish a standard time or price on this page. Ask when you request service."; no free-estimate or same-day wording).

Total FAQ on the page: 30 (9 Chesterfield + 21 service).

## Facts to confirm

- Housing age is stated qualitatively only ("Most Chesterfield homes are newer than the typical St. Louis-area house"). The figures behind it (85.6%, median 1982, 1.4%) are flagged PENDING-015 on the location page and are not used. If the Census re-check changes that sentence, change it here too.
- Whether the City accepts sewer cleaning or jetting in place of its "cabling" step is unconfirmed, so no page says it does. Where relevant the copy tells the reader to ask Public Works.
- The City's policy names a "licensed plumbing company or licensed drainlayer" for cabling and "Master Drainlayers licensed by St. Louis County" for bids. These are the City's terms. No page makes a licence claim for The Sewer Pros (DEC-072).
- MSD's Conway Meadows page is undated; the copy says "MSD says is designed to replace" and tells readers to check current status.
