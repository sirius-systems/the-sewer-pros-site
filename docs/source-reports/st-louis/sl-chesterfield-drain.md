# Source report: sl-chesterfield-drain

Page: Drain Cleaning in Chesterfield, MO (`chesterfieldDrainContent`, `content/pages/sl-stl-chesterfield-drain.tsx`).

Sources:
- LOCATION: `chesterfieldContent` in `content/pages/st-louis-chesterfield.tsx` (City program terms: Sewer Lateral Policy & Procedures dated March 2026, application Rev. May 2024; MSD pages as listed in its `sources`; housing figures flagged PENDING-015 are NOT used).
- SERVICE: `svc-drain-cleaning` `v2` in `content/pages/services.tsx`, plus `content/pages/sl-blocks/drain-cleaning.ts`.

Status key: USED = text taken as published; ADAPTED = fact kept, wording changed to tie it to this service; LEFT OUT = not on this page (reason given).

## The four body sections and their sources

| # | h2 on the page | Chesterfield source | Service source |
|---|---|---|---|
| 1 | Your fixture drains sit upstream of a lateral that starts outside the foundation | `responsibility` (answer, lateral card with the City definition), `municipalProgram.doesNotCover` (pipe under a building, interior cleanup) | `definition.supporting` (drain vs. sewer cleaning), `limits.cannot` (public main and its connection) |
| 2 | One drain, several drains, or a backup MSD should inspect | `whoToCall` (MSD paragraphs, agency, company phone), FAQ "sewage backs up" | `signals`, `triage` rows 1, 2, 5 |
| 3 | A newer Chesterfield house says little about why a drain keeps clogging | `housingAge` (p1, p3, p4: PVC, belly) | `signals` (clogs that keep returning), `triage` row 4, `limits.can` (a restriction that keeps returning) |
| 4 | What the City treats as maintenance, and what cleaning does not fix | `municipalProgram` (lede, doesNotCover roots and initial cabling, covers severe blockage, steps 1), `whoToCall.secondaryAgency`, `secondOpinion` | `limits.cannot` (crack, offset, roots at a joint), `ask.keep`, `independent.note`, `definition.scope` |

## Chesterfield location page

| Section / card / fact | Status | Where / reason |
|---|---|---|
| seoTitle | ADAPTED | Service name swapped in |
| metaDescription | LEFT OUT | Replaced by a page-specific description |
| hero.title and hero.intro | ADAPTED | Hero intro: lateral starts outside the foundation, so fixture drains sit upstream |
| heroForm bullets, request card, form, phone line | LEFT OUT | Template supplies its own request form |
| heroForm bullet: locally owned and family-operated since 2011 | LEFT OUT | Owner-confirmed on the location page; not needed in the body |
| faqHeading, faqSchemaApproved | LEFT OUT | Template sets both |
| keyTakeaways 1 (MSD maintains the main; lateral and connection are private, owner maintains and repairs) | ADAPTED | Section 1 and hero intro |
| keyTakeaways 2 (City program, $28 fee, up to $15,000, routine root removal is maintenance) | ADAPTED | Section 4 (cabling, roots); dollar terms LEFT OUT |
| keyTakeaways 3 (a camera inspection gives recorded evidence) | LEFT OUT | Camera-specific |
| keyTakeaways jumpNav | LEFT OUT | No on-page anchors in this template |
| serviceCards (9) and helpBar | LEFT OUT | Hub grid; related links cover siblings |
| responsibility.answer (MSD maintains the main; lateral and connection are private; owner maintains and repairs) | ADAPTED | Section 1 |
| responsibility card: the public sewer main (MSD role; backup repair; confirm the serving utility by address near a boundary or on septic) | ADAPTED | Section 1 (MSD main) and Section 2 (backup inspection) |
| responsibility card: the lateral line (private; City defines it as 3-5 ft outside the foundation to the main in the street or an easement) | ADAPTED | Section 1 and hero intro |
| responsibility table (who owns, who maintains, who to contact, what help exists, where an inspection helps) | ADAPTED | Rows 1-2 Section 1, row 3 Section 2, row 4 Section 4; row 5 LEFT OUT |
| responsibility.note (not legal advice; no published rule found on the part under the street) | LEFT OUT | Fixture drains are inside the home; the street is not where they sit |
| systemExplainer p1-2 (MSD: separate vs. combined system; page does not label every parcel) | LEFT OUT | No tie to this service; background only |
| systemExplainer p3-5 (Conway Meadows: about 1,400 ft, Conway Road to North Outer Forty Road, 18-24 in., construction spring 2026, undated) | LEFT OUT | No tie to drain cleaning |
| systemExplainer card (what a camera can show) | LEFT OUT | Camera content is on the service page |
| housingAge p1 (most homes newer than the typical St. Louis-area house) | ADAPTED | Section 3, qualitative only |
| housingAge p2 (85.6% built 1970 or later, median 1982, 1.4% before 1940) | LEFT OUT | Flagged PENDING-015 on the location page; no figure is used |
| housingAge p3 (pipe from that era is more often PVC than clay, cast iron or bituminized fiber) | ADAPTED | Section 3 |
| housingAge p4 (a belly causes slow repeating drainage; a camera shows what is there) | ADAPTED | Section 3 |
| housingAge.table (bellies, joint separation, damage from later work, roots) | ADAPTED | Section 3 (belly) and Section 4 (roots) |
| whoToCall paragraphs (MSD inspects a building backup; urgent list; independent inspection helps if MSD or a plumber points to your lateral) | ADAPTED | Section 2 |
| whoToCall 911 paragraph (911 is not a sewer dispatch line) | LEFT OUT | No tie to this service |
| whoToCall.agency (MSD building backup line (314) 768-6260) | ADAPTED | Labelled MSD's number, not ours |
| whoToCall.secondaryAgency (Public Works (636) 537-4762; hours; City Hall address) | ADAPTED | Section 4: number only, labelled the City's |
| whoToCall.company (company phone and hours) | ADAPTED | Section 2: phone from marketOperatingDetail; hours LEFT OUT |
| municipalProgram.lede (up to $15,000; roots in joints are maintenance; City runs its own video review) | ADAPTED | Section 4 |
| municipalProgram eligibility (single-family, duplex, condo, up to six units; exclusions; tax-delinquent owners) | LEFT OUT | Not tied to this service; the FAQ carries it |
| municipalProgram $28 fee, 2000 vote, January 1, 2001 start | LEFT OUT | Not tied to this service; the FAQ carries it |
| municipalProgram owner (not tenant) applies; seller applies in a real estate transaction | ADAPTED | Fourth problem card (seller applies); owner-not-tenant LEFT OUT |
| municipalProgram terms-dated caveat (policy March 2026, application May 2024; funding not stated) | LEFT OUT | No dollar or funding terms on this page |
| municipalProgram.covers (investigation, excavation, defect definitions, restoration) | ADAPTED | Section 4 (severe blockage that cannot be cabled out) |
| municipalProgram.doesNotCover (roots in bells and joints; initial cabling; pipe under a building; interior cleanup; landscaping; natural disaster; above $15,000) | ADAPTED | Section 1 (pipe under a building, interior cleanup) and Section 4 (cabling, roots); rest LEFT OUT |
| municipalProgram.steps (cable, packet, owner applies with $200 fee and proof, City televises) | ADAPTED | Section 4 (step 1); $200 fee and paperwork LEFT OUT |
| municipalProgram.callout (independent inspection does not replace the City step; documentation question; three Master Drainlayer bids; no repairs by us) | ADAPTED | Section 4 last paragraph (no repairs) |
| municipalProgram.closing (link to St. Louis sewer lateral inspection & reporting) | LEFT OUT | Hub link |
| secondOpinion (ledes, steps, callout, CTA) | ADAPTED | Section 4 last sentence (compare against any estimate) |
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
| What does a sewer camera inspection show? | USED | Verbatim; a camera may be added to a drain visit |
| Do you repair or replace sewer lines? | USED | Verbatim. Same answer on every page |

## Service page (`svc-drain-cleaning`)

| Section / card / fact | Status | Where / reason |
|---|---|---|
| seoTitle | ADAPTED | "Drain Cleaning in Chesterfield, MO" |
| metaDescription | LEFT OUT | Market-neutral; replaced |
| serviceDescription | ADAPTED | Same definition, Chesterfield added |
| hero.title, hero.intro | ADAPTED | Hero intro; scope line carried in Section 4 and the FAQ |
| hero.scope, hero card | LEFT OUT | Template elements |
| definition.answer | ADAPTED | `serviceDescription`, hero intro |
| definition.supporting 1 (drain vs. sewer cleaning) | ADAPTED | Section 1 |
| definition.supporting 1 ("drain clearing" everyday usage); 2 (cleaning and camera are separate) | LEFT OUT | FAQ |
| definition.scope | LEFT OUT | FAQ and Section 4 carry it |
| signals 1 One slow drain; 2 Several fixtures; 4 Clogs that keep returning | USED | Problem cards 1-3 |
| signals 3 Gurgling | ADAPTED | Section 2 bullet; full text in FAQ "Why are my drains gurgling?" |
| signals 5 Sewage-like odors | LEFT OUT | FAQ |
| signals 6 Water or sewage coming up | ADAPTED | Section 2 bullet |
| triage rows 1, 2, 5 | ADAPTED | Section 2 |
| triage row 3 (lower drains back up) | LEFT OUT | Slot-limited; FAQ |
| triage row 4 (clogs again after cleared) | ADAPTED | Section 3 |
| limits.can (4 items) | ADAPTED | Section 3 (a restriction that keeps returning); rest in FAQ |
| limits.cannot (crack; offset or joint; roots at a joint; public main; a line the equipment cannot pass) | ADAPTED | Sections 1 and 4; last item LEFT OUT (no slot) |
| limits.callout (jetting not appropriate for every pipe; flow is not proof) | LEFT OUT | FAQ "Is hydro jetting safe for every pipe?", "Does a line that flows again mean the pipe is fine?" |
| process steps 1 to 5 | USED | `process`, verbatim; equipment names only as confirmed (steps 3 and 4) |
| process.prep | LEFT OUT | FAQ "What should I tell you when I request drain cleaning?" |
| decision (cleaning and camera are separate) | LEFT OUT | FAQ "Can a camera see through standing water?" |
| independent band | ADAPTED | Section 4 last sentence |
| methods table; secondaryLimits | LEFT OUT | FAQ answers |
| ask items: video, written findings | USED | Inclusion 6; Section 4 last sentence |
| ask items: limits, access point, cleaning record, locating | LEFT OUT | FAQ |
| ask.keep (compare written estimates) | ADAPTED | Section 4 last sentence |
| audiences: homeowners | LEFT OUT | Problem cards |
| audiences: home buyers, home sellers | ADAPTED | Fourth problem card |
| markets (3 hubs) | LEFT OUT | Replaced by `coverage` |
| faqTitle, situations, terms, request.* | LEFT OUT | Template slots; FAQ carries the situations |
| relatedPageIds | ADAPTED | Chesterfield page, this service, sewer cleaning, camera inspection |
| cta | ADAPTED | Rewritten for Chesterfield |
| inclusions (6 cards) | USED | `sl-blocks` |

### Service FAQ

Service FAQ (37): 34 USED verbatim, 3 LEFT OUT.
- LEFT OUT "Do you clean drains in St. Louis, San Diego, and Las Vegas?": this page is an area page; the question belongs to the hub.
- LEFT OUT "Can drain cleaning fix a broken or collapsed pipe?": duplicate of the fuller "Does drain cleaning repair a damaged pipe?".
- LEFT OUT "Can cleaning remove tree roots?": covered by "Can tree roots grow into drain pipes?".

The cost and time answers say cost and time vary; they carry no DEC-088 wording. Total FAQ on the page: 44 (10 Chesterfield + 34 service).

## Facts to confirm

- Housing age is stated qualitatively only ("Most Chesterfield homes are newer than the typical St. Louis-area house"). The figures behind it (85.6%, median 1982, 1.4%) are flagged PENDING-015 on the location page and are not used. If the Census re-check changes that sentence, change it here too.
- Whether the City accepts sewer cleaning or jetting in place of its "cabling" step is unconfirmed, so no page says it does. Where relevant the copy tells the reader to ask Public Works.
- The City's policy names a "licensed plumbing company or licensed drainlayer" for cabling and "Master Drainlayers licensed by St. Louis County" for bids. These are the City's terms. No page makes a licence claim for The Sewer Pros (DEC-072).
- MSD's Conway Meadows page is undated; the copy says "MSD says is designed to replace" and tells readers to check current status.
