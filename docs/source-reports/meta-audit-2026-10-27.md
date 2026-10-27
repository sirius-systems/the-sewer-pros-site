# Meta Title and Description Audit - The Sewer Pros - 2026-10-27

**Scope:** title tag, meta description, canonical, robots, Open Graph, Twitter card and H1 of all 197 indexable pages, read from the rebuilt static export. The thank-you page is noindex and not audited.
**Result:** high-severity pages 1 to 0, medium 93 to 0, low 28 to 45, clean 75 to 152. A new gate, `scripts/verify-meta.mjs`, runs with the other verify scripts.
**Data:** `meta-audit-2026-10-27-before.json` and `-after.json` (every page, every field, every finding) with `-before.csv` and `-after.csv` for reading in a spreadsheet. Engine: `scripts/lib/meta-audit.mjs`, `scripts/lib/meta-inventory.mjs`, pixel estimate `lib/seo/text-width.mjs`; report script `scripts/audit-meta.mjs`.

## 1. Sources and method

* **Keyword model:** no real keyword research exports exist in the repo (checked again on 2026-10-27; see the Prompt 13 report section 2). The audit uses `scripts/lib/editorial-keywords.mjs`, which is built from the service registry and docs 09, 10, 12 and 14.
* **Metadata source files:** page titles and descriptions are authored in `content/pages/*` (`seoTitle`, `metaDescription`) and built by `lib/seo/metadata.ts` (`pageMetadata`, `brandedTitle`), which also writes the Open Graph and Twitter tags from the same two strings. Decisions read: DEC-072 (no licensing), DEC-088, DEC-126, DEC-142, DEC-148 and the Prompt 13 results.
* **Pixel width:** Google truncates by width, not characters. `lib/seo/text-width.mjs` estimates width from Arial advance widths: titles at 20px against a 580px budget (about 61 characters of this site's copy), descriptions calibrated so 158 characters measure about 920px (13px equivalent). It is an estimate for deciding what will probably be cut, not a measurement.
* **Severity:** high = wrong, missing or banned (missing tag, wrong canonical or og:url, banned wording, office implied, cross-market, primary keyword missing from the title). Medium = likely truncation, near-duplicate or template-only description, no place or audience anchor, tag mismatch, description under 130 characters. Low = reported, not changed.

## 2. Before and after

| Metric (197 pages) | Before | After |
| ------------------ | -----: | ----: |
| Titles likely to truncate (over about 580px) | 76 | 0 |
| Descriptions likely to truncate (over about 920px or 160 characters) | 15 | 0 |
| Descriptions under 110 characters | 0 | 0 |
| Descriptions under 130 characters (aim 130 to 158) | 5 | 0 |
| Missing titles or descriptions | 0 | 0 |
| Duplicate titles / duplicate descriptions | 0 / 0 | 0 / 0 |
| Near-duplicate description pairs (80% or more alike) | 4 | 0 |
| Description groups that differ only by place or service name | 1 | 0 |
| Pages with Open Graph or Twitter tags missing or different from title and description | 0 | 0 |
| Canonical or og:url different from the page URL | 0 | 0 |
| Banned wording in a title or description | 1 (a dollar figure from a City program) | 0 |
| Cross-market mentions / implied office or store | 0 / 0 | 0 / 0 |
| Primary keyword missing from the title | 0 | 0 |
| Location or audience page with no place or audience anchor | 1 | 0 |
| Description different from the page's WebPage schema description | 0 | 0 |
| Pages by severity (high / medium / low / clean) | 1 / 93 / 28 / 75 | 0 / 0 / 45 / 152 |

Average length by page type (characters / estimated px), title then description:

| Page type | Pages | Title before | Title after | Description before | Description after |
| --------- | ----: | ------------ | ----------- | ------------------ | ----------------- |
| Service + location | 144 | 58 / 548 | 50 / 477 | 149 / 861 | 149 / 861 |
| Location hub | 16 | 61 / 575 | 57 / 535 | 146 / 861 | 146 / 860 |
| Core service | 9 | 56 / 534 | 57 / 538 | 150 / 873 | 149 / 868 |
| Market hub | 3 | 59 / 560 | 46 / 433 | 153 / 901 | 152 / 893 |
| Market contact | 3 | 58 / 543 | 41 / 389 | 149 / 867 | 149 / 867 |
| Audience | 6 | 54 / 507 | 54 / 507 | 143 / 839 | 149 / 857 |
| Resource guide | 5 | 61 / 572 | 54 / 508 | 139 / 821 | 139 / 821 |
| Comparison | 2 | 56 / 530 | 47 / 450 | 140 / 840 | 150 / 884 |
| Homepage | 1 | 58 / 553 | 58 / 553 | 155 / 898 | 155 / 915 |

What was already sound: every indexable page has a unique title and description, a self-referencing canonical, an `og:url`, `og:title`, `og:description`, `og:image` (the brand Open Graph image, which exists), `og:type`, `twitter:card` set to `summary_large_image`, and Open Graph and Twitter text identical to the title and description. No title or description implied an office, storefront or branch; none mentioned another market; none used "near me", em dashes or fear language; "free estimate" appears nowhere.

## 3. Findings (Phase 2)

**Truncation.** 76 titles were wider than the budget, 64 of them service + location pages. The cause was the brand suffix " | The Sewer Pros" (about 160px, 27% of the budget) pushing otherwise good titles over. Examples: "Sewer Cleaning & Camera Inspection in North Las Vegas | The Sewer Pros" (669px) and "Sewer Camera Inspection & Cleaning in St. Louis, MO | The Sewer Pros" (641px). 15 descriptions ran over the budget or 160 characters.

**Brand placement.** The suffix was applied to every title regardless of room, so the part that got cut was the place name or the registered service name. Fixed centrally (section 5).

**Near-duplicates.** Four pairs of service + location descriptions were 80% or more alike (Las Vegas and North Las Vegas pre-purchase; Mission Valley and San Diego sewer line locating, 87%; San Marcos hydro jetting and sewer cleaning; Chesterfield drain cleaning and sewer cleaning), plus the Ballwin and Florissant hubs and the Las Vegas and St. Louis market hubs after the first rewrite. Titles are intentionally patterned ("{Service} in {Place}") and unique.

**Separators.** Five titles used a pipe that was not the brand separator (the three market contact pages, "About The Sewer Pros | Independent Sewer Inspection" and "Service Areas | St. Louis, San Diego & Las Vegas"), and Who We Serve used two pipes.

**Naming and keyword placement.** Registered service names are exact on every service and service + location title (the combined service reads "Sewer Cleaning & Camera Inspection" with the ampersand everywhere). Two market hub titles read awkwardly: San Diego "Sewer Inspection & Camera Inspection in San Diego" repeated itself and Las Vegas "Sewer Inspection Las Vegas" was keyword-style.

**Banned or risky wording.** One description (Ballwin hub) carried a dollar figure from the City's lateral program. It was a municipal figure, not our price, but a retriever could quote it as a price. Removed. One description on the Florissant pre-purchase page used quotation marks. The comparison page's title and description mention a repair company because that is the page's subject (independent inspection vs a repair company); the audit allows exactly that page.

**Cannibalization in metadata.** The homepage is the only page titled around "independent sewer inspection and cleaning". "Sewer camera inspection" is in the title of the Sewer Camera Inspection page (owner), its 16 local pages and the two inspection guides ("How to Read a Sewer Camera Inspection Video", "What Is Included in a Sewer Camera Inspection Report?"); the guides are long-tail informational titles, not competitors. The five audience titles share the stem "Sewer Inspection for ..." and differ by audience. No two pages compete for one query.

**Local intent.** No title or description implies an office, storefront, branch or Google Business Profile; none contains "near me"; every location and market description names its place; no page mentions another market. Local facts in descriptions (the agency, the City rule, a code section) are the same facts carried in each page's own body and Sources block.

**AEO and retrieval.** Descriptions state the service, the place and the local rule in one or two sentences and match the page's WebPage schema description exactly (checked on all 197 pages). 32 descriptions have no reader verb or soft next step (low, section 7). Titles for the comparison and guide pages are phrased as the choice or the question ("Hydro Jetting vs Sewer Snaking", "What Is Included in a Sewer Camera Inspection Report?", "How to Read a Sewer Camera Inspection Video").

**Third-party listing (decision for you).** One search result for "sewer inspection San Diego" was a review-site listing for The Sewer Pros San Diego that shows a street address and a phone number. Our metadata and pages publish no address or office for San Diego, as policy requires. If that address is not meant to be public, ask the site to remove it; if it is a real location, it is a business-facts decision (CLAUDE.md section 3).

## 4. SERP sample (12 pages)

Method: live web search of the primary query for each page. The search tool returns result titles, URLs and a short consensus summary; it does not return competitors' meta descriptions, the local pack, People Also Ask boxes, AI Overview text or review stars, so SERP features are recorded only where the summary shows them. Competitor wording was not copied and no competitor is named in site copy.

| # | Page | Query searched | What the results show (titles and consensus) | Angle not taken by the results | Angle chosen |
| -: | ---- | -------------- | ---------------------------------------------- | ------------------------------ | ------------ |
| 1 | Homepage | independent sewer inspection and cleaning | Municipal specifications, a trade-magazine explainer, public-works pages and county documents. No residential provider owns "independent". | A residential company that inspects and cleans but does not sell the repair | Own "independent" with the deliverables: title "Independent Sewer Inspection and Cleaning", description "inspection video and written findings before you decide on sewer work" |
| 2 | Sewer Camera Inspection | sewer camera inspection | An encyclopedia entry, "near me" guides, equipment listings, plumber and leak-detection service pages. Common promises: cost ranges, "without digging". | What the camera cannot show | "Sewer Camera Inspection: What It Shows", description names the video, the written findings and what it can and cannot confirm |
| 3 | Sewer Cleaning | sewer cleaning service residential | Zoom-style service pages by market, plumber blogs, "residential sewer care" posts; flat-rate and 24/7 claims. | What cleaning does not fix; camera before cleaning | Left as "Sewer Cleaning: Methods, Process and Limits" (limits already the angle) |
| 4 | Hydro Jetting | hydro jetting sewer line cleaning | Plumber pages and explainers; pressure figures, cost, "near me". | Pipe condition decides whether it is suitable | Left as "Hydro Jetting: How It Works and Its Limits" |
| 5 | Sewer Line Locating | sewer line locating service | Contractor pages and a DIY how-to; depth and path claims. | Honest limits (approximate, not survey-grade) | Left as "Private Sewer Line Locating: How It Works" |
| 6 | St. Louis hub | sewer camera inspection St. Louis MO | Cost article, national plumbing chains, a regional plumbing brand, home-inspection franchise pages; prices, financing, "advanced equipment". | Independent, with the MSD and municipal-lateral context | "Sewer Inspection and Cleaning in St. Louis, MO"; description "Video and written findings before major sewer decisions, no repair upselling" |
| 7 | San Diego hub | sewer inspection San Diego CA | Contractor pages (24/7 lines, "state-of-the-art"), a City specification, a news-style release, a review-site listing. | Independent evidence before a repair decision | "Sewer Inspection and Cleaning in San Diego, CA"; same description angle with a soft call to action |
| 8 | Las Vegas hub | sewer camera inspection Las Vegas NV | Plumber and drain-service pages; one promises a written report "with repair recommendations and cost estimates". | A report that does not carry a repair quote | "Sewer Inspection and Cleaning in Las Vegas, NV"; description "Henderson to Summerlin ... video and written findings, no repair upselling" |
| 9 | Pre-Purchase Sewer Inspection | pre-purchase sewer inspection home buyer sewer scope | Real-estate portal articles and a franchise's territory pages ("Sewer Scoping in {town}"); negotiate-the-repair framing. | The evidence itself and what it cannot show | Title keeps "(Sewer Scope)"; description "records the visible condition ... before closing, with video and written findings. See what it cannot show" |
| 10 | Home buyers | should I get a sewer inspection before buying a house | Question-style articles by agents and inspectors ("Why buyers should get sewer inspections"). | A direct, calm answer with the deliverables | "Sewer Inspection for Home Buyers"; description opens with the audience and the closing decision |
| 11 | Real estate agents | sewer scope inspection real estate agents | Home-inspector industry articles; cost-versus-risk. | What an agent can pass to a client without a repair quote attached | "Sewer Inspection for Real Estate Agents"; description names independence and the client's evidence |
| 12 | Comparison guide | hydro jetting vs snaking sewer line | Plumber blogs; price and "which is better" framing. | Decide by what blocks the line and the pipe's condition | Title unchanged "Hydro Jetting vs Sewer Snaking"; description answers first ("snaking clears one obstruction, jetting cleans buildup along the pipe") then points to a camera check |

## 5. What was changed

1. **Central brand rule (`lib/seo/metadata.ts`).** The " | The Sewer Pros" suffix is added only when the whole title stays within the width budget; otherwise the title is shown without it, so the keyword and the place are never what gets cut. It applies to the title, `og:title` and `twitter:title` together, so the three always match. This changed 71 titles with no copy edit (the brand suffix only). Homepage and titles that already end in the suffix are unchanged.
2. **Titles authored by hand (11).** The three market hubs ("Sewer Inspection and Cleaning in {City}, {State}", replacing a repeated phrase and a keyword string), the three market contact pages ("Request Sewer Inspection in {City}, {State}"), the Sewer Camera Inspection page ("Sewer Camera Inspection: What It Shows"), About, Who We Serve, Service Areas, and the St. Louis lateral reporting page (now names the place).
3. **Descriptions rewritten (37).** The priority pages above, the descriptions that were over the width or under 130 characters, the near-duplicate pairs, the Ballwin hub (dollar figure removed), the Florissant pre-purchase page (quotation marks removed) and the Summerlin hub. Every description on the site is now 132 to 160 characters and under the width budget; each starts with the service and place or the audience and keeps the local fact already in its page.
4. **Wording rules applied.** Hyphens only; no quotation marks; no price, offer or guarantee; no repair or replacement offer; deliverables limited to inspection video and written findings; "free second opinion" is not used in metadata (the page body carries the offer).

## 6. Every changed title and description

### Descriptions (37)

All 37 are listed with their character counts.

| Page | Old description | New description |
| --- | --- | --- |
| /about/ | Independent sewer inspection and cleaning from The Sewer Pros: how we help homeowners, buyers and property professionals understand sewer-line conditions. (154) | Independent sewer inspection and cleaning from The Sewer Pros: how we help homeowners, buyers and property professionals understand their sewer lines. (150) |
| /compare/hydro-jetting-vs-sewer-snaking/ | Compare hydro jetting and sewer snaking, including how each approach works, when it may help, and what a sewer inspection can clarify. (134) | Hydro jetting vs sewer snaking: snaking clears one obstruction, jetting cleans buildup along the pipe. See which fits and when a camera should come first. (154) |
| /for/hoa-communities/ | Explore sewer inspection, cleaning, diagnostics, and documentation services for HOA communities and shared property concerns. (125) | Sewer inspection for HOA communities: inspection video and written findings on shared sewer lines, so a board can weigh vendor advice against evidence. (151) |
| /for/home-buyers/ | Understand what a sewer inspection can reveal about a property you are considering, and why home buyers request one before closing. (131) | Sewer inspection for home buyers: see what a sewer scope can reveal before closing, with inspection video and written findings. Know the line first. (148) |
| /for/property-managers/ | Sewer inspection, cleaning, diagnostics, and documentation for property managers and owners of multifamily homes handling recurring sewer and drain concerns. (157) | Sewer inspection for property managers: find why a line keeps backing up, with inspection video and written findings for rental homes and multifamily. (150) |
| /for/real-estate-agents/ | Sewer inspection for real estate agents: an independent camera inspection with video and written findings, so clients decide with evidence during a transaction. (160) | Sewer inspection for real estate agents: an independent camera inspection with video and written findings, so clients decide with evidence in a transaction. (156) |
| / | Independent sewer inspection and cleaning across St. Louis, San Diego, and Las Vegas: camera diagnostics and locating that show the line's condition first. (155) | Independent sewer inspection and cleaning in St. Louis, San Diego and Las Vegas. Get inspection video and written findings before you decide on sewer work. (155) |
| /las-vegas-nv/ | Independent sewer camera inspection, diagnostics and cleaning across the Las Vegas Valley. Evidence before major sewer decisions, no repair upselling. (150) | Independent sewer camera inspection and cleaning across the Las Vegas Valley, Henderson to Summerlin. Video and written findings, no repair upselling. (150) |
| /locations/las-vegas-nv/henderson/drain-cleaning/ | Drain cleaning in Henderson, NV. The City says the lateral and your home plumbing are yours and it cleans its own main. See what cleaning does and does not fix. (160) | Drain cleaning in Henderson, NV. The City says the lateral and home plumbing are yours and it cleans its main. See what cleaning does and does not fix. (151) |
| /locations/las-vegas-nv/henderson/pre-purchase-sewer-inspection/ | Buying in Henderson, NV? The City says the sewer lateral is yours from the main connection, and we found no sale-time inspection rule. See what a scope shows. (158) | Pre-purchase sewer inspection in Henderson, NV. The City says the lateral is yours from the main connection, and we found no sale-time inspection rule. (151) |
| /locations/las-vegas-nv/las-vegas/pre-purchase-sewer-inspection/ | Buying in Las Vegas, NV? The City says the private lateral is the owner’s to the City main, and we found no sale-time inspection rule. See what a scope shows. (158) | Buying in Las Vegas, NV? The City says the lateral is yours to its main. We found no sale-time inspection rule, so a pre-purchase sewer inspection is your call. (160) |
| /locations/las-vegas-nv/las-vegas/recurring-sewer-backup-diagnosis/ | Recurring sewer backup diagnosis in Las Vegas, NV. The City handles main stoppages; the lateral to the connection is yours. See what a camera can document. (155) | Recurring sewer backup diagnosis in Las Vegas, NV. The City handles main stoppages; the lateral to the connection is yours. See what a camera documents. (152) |
| /locations/las-vegas-nv/north-las-vegas/pre-purchase-sewer-inspection/ | Buying in North Las Vegas, NV? The City says the lateral is the owner’s up to the main, and we found no sale-time inspection rule. See what a scope shows. (154) | Pre-purchase sewer inspection in North Las Vegas, NV: the City says the lateral is the owner's up to the main, and we found no rule requiring one at sale. (154) |
| /locations/las-vegas-nv/summerlin/hydro-jetting/ | Hydro jetting in Summerlin, NV. Two agencies word the owner’s side differently. See what jetting clears and what it cannot fix. (127) | Hydro jetting in Summerlin, NV. The City and CCWRD word the owner's side differently, so check your address. See what jetting clears and what it cannot fix. (156) |
| /locations/las-vegas-nv/summerlin/ | Sewer camera inspection and cleaning in Summerlin, NV. Summerlin spans the City of Las Vegas and unincorporated Clark County, so see who serves your address. (157) | Sewer inspection and cleaning in Summerlin, NV. Summerlin spans the City of Las Vegas and unincorporated Clark County, so check who serves your address. (152) |
| /locations/san-diego-ca/carlsbad/sewer-cleaning-camera-inspection/ | Sewer cleaning and camera inspection in Carlsbad, CA. Three sewer agencies word the owner’s lateral differently. See what a cleaning and camera visit covers. (157) | Sewer cleaning and camera inspection in Carlsbad, CA. Three sewer agencies word the owner's lateral differently. See what a combined visit covers. (146) |
| /locations/san-diego-ca/escondido/preventative-sewer-maintenance/ | Preventative sewer maintenance in Escondido, CA. Municipal Code 22-165 puts upkeep of the lateral on the owner. See what a camera and cleaning visit covers. (156) | Preventative sewer maintenance in Escondido, CA. Municipal Code 22-165 puts lateral upkeep on the owner. See what a camera and cleaning visit covers. (149) |
| /locations/san-diego-ca/escondido/recurring-sewer-backup-diagnosis/ | Recurring sewer backup diagnosis in Escondido, CA. Municipal Code 22-165 puts the lateral on the owner. See what a camera can find before you approve work. (155) | Recurring sewer backup diagnosis in Escondido, CA. Municipal Code 22-165 puts the lateral on the owner. See what a camera finds before you approve work. (152) |
| /locations/san-diego-ca/mission-valley/sewer-cleaning/ | Sewer cleaning in Mission Valley, San Diego. The City says owners maintain the lateral to its main. See what cleaning does. (123) | Sewer cleaning in Mission Valley, San Diego. The City says owners maintain the lateral to its main. See what cleaning clears and what it cannot fix. (148) |
| /locations/san-diego-ca/mission-valley/sewer-line-locating/ | Sewer line locating for Mission Valley, San Diego properties. The City has no diagrams of private sewer lines on your lot. See what a locate is and is not. (155) | Sewer line locating in Mission Valley, San Diego. The City has no diagrams of private lines, and a parcel with several buildings makes that gap easy to hit. (156) |
| /locations/san-diego-ca/san-diego/recurring-sewer-backup-diagnosis/ | Recurring sewer backup diagnosis in San Diego, CA. The City says the lateral is yours to the City main; we found no help with costs. See what a camera shows. (157) | Recurring sewer backup diagnosis in San Diego, CA. The City says the lateral is yours to its main; we found no help with costs. See what a camera shows. (152) |
| /locations/san-diego-ca/san-marcos/hydro-jetting/ | Hydro jetting in San Marcos, CA. The City does not provide sewer service; where Vallecitos serves, the lateral is the owner’s. See what jetting clears. (151) | Hydro jetting in San Marcos, CA. The City does not provide sewer service; where Vallecitos serves, the lateral is the owner's. See what jetting clears. (151) |
| /locations/san-diego-ca/san-marcos/sewer-cleaning/ | Sewer cleaning in San Marcos, CA. The City does not provide sewer service; where Vallecitos serves, the lateral is the owner’s. See what cleaning does. (151) | Sewer cleaning in San Marcos, CA. One of three agencies serves each address, so confirm yours first. See what cleaning clears and what it does not. (147) |
| /locations/st-louis-mo/ballwin/drain-cleaning/ | Drain cleaning in Ballwin, MO. MSD owns the main; the lateral is the owner’s. See what cleaning does and does not fix. (118) | Drain cleaning in Ballwin, MO. MSD owns the main and the lateral is the owner's. See what drain cleaning clears and what it does not fix. (137) |
| /locations/st-louis-mo/ballwin/ | Sewer camera inspection and cleaning in Ballwin, MO. Who owns the lateral, what the City’s $4,500 lateral program covers, and when evidence helps. (146) | Sewer inspection and cleaning in Ballwin, MO. MSD owns the main; the lateral is yours. See what the City's lateral program covers and when video helps. (151) |
| /locations/st-louis-mo/ballwin/preventative-sewer-maintenance/ | Preventative sewer maintenance in Ballwin, MO. The City counts roots cleared once a year or less as normal maintenance. See what a visit covers and leaves out. (159) | Preventative sewer maintenance in Ballwin, MO. The City counts roots cleared once a year or less as normal maintenance. See what a visit covers. (144) |
| /locations/st-louis-mo/ballwin/recurring-sewer-backup-diagnosis/ | Recurring sewer backup diagnosis in Ballwin, MO. MSD owns the main; the lateral is the owner’s. See what a camera can document. (127) | Recurring sewer backup diagnosis in Ballwin, MO. MSD owns the main; the lateral is the owner's. See what a camera can document before you approve work. (151) |
| /locations/st-louis-mo/chesterfield/recurring-sewer-backup-diagnosis/ | Recurring sewer backup diagnosis in Chesterfield, MO. MSD maintains the main; the lateral is the owner’s, and the City has its rules. See what a camera shows. (158) | Recurring sewer backup diagnosis in Chesterfield, MO. MSD maintains the main and the lateral is the owner's, under City rules. See what a camera shows. (151) |
| /locations/st-louis-mo/chesterfield/sewer-cleaning/ | Sewer cleaning in Chesterfield, MO. MSD says the lateral is the owner’s, and the City treats cabling and roots as maintenance. See what cleaning does. (150) | Sewer cleaning in Chesterfield, MO: roots, grease and buildup in the owner's lateral. MSD owns the main, and the City treats cabling and roots as maintenance. (158) |
| /locations/st-louis-mo/florissant/pre-purchase-sewer-inspection/ | Buying in Florissant, MO? The City allows “as is” sales, and its lateral program is not for sale contingencies. See what a sewer scope shows. (141) | Pre-purchase sewer inspection in Florissant, MO. The City allows as-is sales, and its lateral program is not for sale contingencies. (132) |
| /locations/st-louis-mo/florissant/sewer-cleaning-camera-inspection/ | Sewer cleaning and camera inspection in Florissant, MO. MSD handles the public sewer; the lateral is yours. See what a visit covers and what a camera cannot. (157) | Sewer cleaning and camera inspection in Florissant, MO. MSD handles the public sewer; the lateral is yours. See what a combined visit covers and its limits. (156) |
| /locations/st-louis-mo/st-charles/sewer-camera-inspection/ | Sewer camera inspection in St. Charles, MO. The City runs its own sewer and lateral program. See what a camera records on your line and what it cannot show. (156) | Sewer camera inspection in St. Charles, MO. The City runs its own sewer and lateral program. See what a camera records and what it cannot show. (143) |
| /locations/st-louis-mo/st-louis-city/recurring-sewer-backup-diagnosis/ | Recurring sewer backup diagnosis in St. Louis City, MO. MSD maintains the main; your lateral is private. See what a camera can document before you approve work. (160) | Recurring sewer backup diagnosis in St. Louis City, MO. MSD maintains the main; your lateral is private. See what a camera shows before you approve work. (153) |
| /san-diego-ca/ | Independent sewer camera inspection, diagnostics and cleaning in San Diego. Evidence before assumptions, no repair-driven upselling. Request an inspection. (155) | Independent sewer camera inspection and cleaning in San Diego. Video and written findings before assumptions, no repair upselling. Request an inspection. (153) |
| /services/pre-purchase-sewer-inspection/ | A pre-purchase sewer inspection documents the visible condition of an accessible sewer line before closing. Learn the limits. St. Louis, San Diego, Las Vegas. (158) | A pre-purchase sewer inspection records the visible condition of the sewer line before closing, with video and written findings. See what it cannot show. (153) |
| /services/sewer-camera-inspection/ | A sewer camera inspection records the visible inside of accessible residential sewer and drain lines. See what it shows, what it can’t, and what to ask for. (156) | A sewer camera inspection records the visible inside of accessible home sewer lines, with video and written findings. See what it can and cannot confirm. (153) |
| /st-louis-mo/ | Independent sewer camera inspection, diagnostics, and cleaning across the St. Louis area. Evidence before major sewer decisions, with no repair upselling. (154) | Independent sewer camera inspection and cleaning across the St. Louis area. Video and written findings before major sewer decisions, no repair upselling. (153) |

### Titles (82: 71 lost only the brand suffix for width, 11 retitled)

| Page | Old title | New title |
| --- | --- | --- |
| /about/ | About The Sewer Pros | Independent Sewer Inspection (488px) | About The Sewer Pros: Independent Sewer Inspection (482px) |
| /compare/independent-sewer-inspection-vs-repair-company/ | Independent Sewer Inspection vs. Repair Company | The Sewer Pros (617px) | Independent Sewer Inspection vs. Repair Company (457px) |
| /for/ | Who We Serve | Sewer Inspection & Drain Services | The Sewer Pros (618px) | Who We Serve: Sewer Inspection and Drain Help (438px) |
| /las-vegas-nv/contact/ | Contact The Sewer Pros in Las Vegas, NV | Sewer Inspection (548px) | Request Sewer Inspection in Las Vegas, NV (394px) |
| /las-vegas-nv/ | Sewer Inspection Las Vegas | The Sewer Pros (413px) | Sewer Inspection and Cleaning in Las Vegas, NV (437px) |
| /locations/ | Service Areas | St. Louis, San Diego & Las Vegas | The Sewer Pros (602px) | Sewer Service Areas: St. Louis, San Diego and Las Vegas (519px) |
| /locations/las-vegas-nv/henderson/pre-purchase-sewer-inspection/ | Pre-Purchase Sewer Inspection in Henderson, NV | The Sewer Pros (604px) | Pre-Purchase Sewer Inspection in Henderson, NV (445px) |
| /locations/las-vegas-nv/henderson/preventative-sewer-maintenance/ | Preventative Sewer Maintenance in Henderson, NV | The Sewer Pros (617px) | Preventative Sewer Maintenance in Henderson, NV (457px) |
| /locations/las-vegas-nv/henderson/recurring-sewer-backup-diagnosis/ | Recurring Sewer Backup Diagnosis in Henderson, NV | The Sewer Pros (638px) | Recurring Sewer Backup Diagnosis in Henderson, NV (478px) |
| /locations/las-vegas-nv/henderson/sewer-cleaning-camera-inspection/ | Sewer Cleaning & Camera Inspection in Henderson, NV | The Sewer Pros (657px) | Sewer Cleaning & Camera Inspection in Henderson, NV (497px) |
| /locations/las-vegas-nv/las-vegas/pre-purchase-sewer-inspection/ | Pre-Purchase Sewer Inspection in Las Vegas, NV | The Sewer Pros (601px) | Pre-Purchase Sewer Inspection in Las Vegas, NV (441px) |
| /locations/las-vegas-nv/las-vegas/preventative-sewer-maintenance/ | Preventative Sewer Maintenance in Las Vegas, NV | The Sewer Pros (613px) | Preventative Sewer Maintenance in Las Vegas, NV (454px) |
| /locations/las-vegas-nv/las-vegas/recurring-sewer-backup-diagnosis/ | Recurring Sewer Backup Diagnosis in Las Vegas, NV | The Sewer Pros (634px) | Recurring Sewer Backup Diagnosis in Las Vegas, NV (475px) |
| /locations/las-vegas-nv/las-vegas/sewer-cleaning-camera-inspection/ | Sewer Cleaning & Camera Inspection in Las Vegas, NV | The Sewer Pros (653px) | Sewer Cleaning & Camera Inspection in Las Vegas, NV (494px) |
| /locations/las-vegas-nv/north-las-vegas/ | Sewer Inspection & Cleaning in North Las Vegas, NV | The Sewer Pros (631px) | Sewer Inspection & Cleaning in North Las Vegas, NV (471px) |
| /locations/las-vegas-nv/north-las-vegas/pre-purchase-sewer-inspection/ | Pre-Purchase Sewer Inspection in North Las Vegas, NV | The Sewer Pros (655px) | Pre-Purchase Sewer Inspection in North Las Vegas, NV (496px) |
| /locations/las-vegas-nv/north-las-vegas/preventative-sewer-maintenance/ | Preventative Sewer Maintenance in North Las Vegas, NV | The Sewer Pros (668px) | Preventative Sewer Maintenance in North Las Vegas, NV (508px) |
| /locations/las-vegas-nv/north-las-vegas/recurring-sewer-backup-diagnosis/ | Recurring Sewer Backup Diagnosis in North Las Vegas | The Sewer Pros (650px) | Recurring Sewer Backup Diagnosis in North Las Vegas (490px) |
| /locations/las-vegas-nv/north-las-vegas/sewer-camera-inspection/ | Sewer Camera Inspection in North Las Vegas, NV | The Sewer Pros (604px) | Sewer Camera Inspection in North Las Vegas, NV (445px) |
| /locations/las-vegas-nv/north-las-vegas/sewer-cleaning-camera-inspection/ | Sewer Cleaning & Camera Inspection in North Las Vegas | The Sewer Pros (669px) | Sewer Cleaning & Camera Inspection in North Las Vegas (509px) |
| /locations/las-vegas-nv/summerlin/pre-purchase-sewer-inspection/ | Pre-Purchase Sewer Inspection in Summerlin, NV | The Sewer Pros (602px) | Pre-Purchase Sewer Inspection in Summerlin, NV (442px) |
| /locations/las-vegas-nv/summerlin/preventative-sewer-maintenance/ | Preventative Sewer Maintenance in Summerlin, NV | The Sewer Pros (614px) | Preventative Sewer Maintenance in Summerlin, NV (455px) |
| /locations/las-vegas-nv/summerlin/recurring-sewer-backup-diagnosis/ | Recurring Sewer Backup Diagnosis in Summerlin, NV | The Sewer Pros (635px) | Recurring Sewer Backup Diagnosis in Summerlin, NV (476px) |
| /locations/las-vegas-nv/summerlin/sewer-cleaning-camera-inspection/ | Sewer Cleaning & Camera Inspection in Summerlin, NV | The Sewer Pros (654px) | Sewer Cleaning & Camera Inspection in Summerlin, NV (495px) |
| /locations/san-diego-ca/carlsbad/preventative-sewer-maintenance/ | Preventative Sewer Maintenance in Carlsbad, CA | The Sewer Pros (599px) | Preventative Sewer Maintenance in Carlsbad, CA (439px) |
| /locations/san-diego-ca/carlsbad/recurring-sewer-backup-diagnosis/ | Recurring Sewer Backup Diagnosis in Carlsbad, CA | The Sewer Pros (620px) | Recurring Sewer Backup Diagnosis in Carlsbad, CA (460px) |
| /locations/san-diego-ca/carlsbad/sewer-cleaning-camera-inspection/ | Sewer Cleaning & Camera Inspection in Carlsbad, CA | The Sewer Pros (639px) | Sewer Cleaning & Camera Inspection in Carlsbad, CA (479px) |
| /locations/san-diego-ca/chula-vista/ | Sewer Inspection & Cleaning in Chula Vista, CA | The Sewer Pros (584px) | Sewer Inspection & Cleaning in Chula Vista, CA (425px) |
| /locations/san-diego-ca/chula-vista/pre-purchase-sewer-inspection/ | Pre-Purchase Sewer Inspection in Chula Vista, CA | The Sewer Pros (609px) | Pre-Purchase Sewer Inspection in Chula Vista, CA (449px) |
| /locations/san-diego-ca/chula-vista/preventative-sewer-maintenance/ | Preventative Sewer Maintenance in Chula Vista, CA | The Sewer Pros (621px) | Preventative Sewer Maintenance in Chula Vista, CA (461px) |
| /locations/san-diego-ca/chula-vista/recurring-sewer-backup-diagnosis/ | Recurring Sewer Backup Diagnosis in Chula Vista, CA | The Sewer Pros (642px) | Recurring Sewer Backup Diagnosis in Chula Vista, CA (482px) |
| /locations/san-diego-ca/chula-vista/sewer-cleaning-camera-inspection/ | Sewer Cleaning & Camera Inspection in Chula Vista, CA | The Sewer Pros (661px) | Sewer Cleaning & Camera Inspection in Chula Vista, CA (501px) |
| /locations/san-diego-ca/escondido/pre-purchase-sewer-inspection/ | Pre-Purchase Sewer Inspection in Escondido, CA | The Sewer Pros (600px) | Pre-Purchase Sewer Inspection in Escondido, CA (440px) |
| /locations/san-diego-ca/escondido/preventative-sewer-maintenance/ | Preventative Sewer Maintenance in Escondido, CA | The Sewer Pros (612px) | Preventative Sewer Maintenance in Escondido, CA (452px) |
| /locations/san-diego-ca/escondido/recurring-sewer-backup-diagnosis/ | Recurring Sewer Backup Diagnosis in Escondido, CA | The Sewer Pros (633px) | Recurring Sewer Backup Diagnosis in Escondido, CA (474px) |
| /locations/san-diego-ca/escondido/sewer-cleaning-camera-inspection/ | Sewer Cleaning & Camera Inspection in Escondido, CA | The Sewer Pros (652px) | Sewer Cleaning & Camera Inspection in Escondido, CA (492px) |
| /locations/san-diego-ca/mission-valley/pre-purchase-sewer-inspection/ | Pre-Purchase Sewer Inspection in Mission Valley | The Sewer Pros (595px) | Pre-Purchase Sewer Inspection in Mission Valley (436px) |
| /locations/san-diego-ca/mission-valley/preventative-sewer-maintenance/ | Preventative Sewer Maintenance in Mission Valley | The Sewer Pros (608px) | Preventative Sewer Maintenance in Mission Valley (448px) |
| /locations/san-diego-ca/mission-valley/recurring-sewer-backup-diagnosis/ | Recurring Sewer Backup Diagnosis in Mission Valley | The Sewer Pros (629px) | Recurring Sewer Backup Diagnosis in Mission Valley (469px) |
| /locations/san-diego-ca/mission-valley/sewer-camera-inspection/ | Sewer Camera Inspection in Mission Valley, San Diego | The Sewer Pros (649px) | Sewer Camera Inspection in Mission Valley, San Diego (489px) |
| /locations/san-diego-ca/mission-valley/sewer-cleaning-camera-inspection/ | Sewer Cleaning & Camera Inspection in Mission Valley | The Sewer Pros (648px) | Sewer Cleaning & Camera Inspection in Mission Valley (488px) |
| /locations/san-diego-ca/mission-valley/sewer-line-locating/ | Sewer Line Locating in Mission Valley, San Diego | The Sewer Pros (600px) | Sewer Line Locating in Mission Valley, San Diego (440px) |
| /locations/san-diego-ca/oceanside/pre-purchase-sewer-inspection/ | Pre-Purchase Sewer Inspection in Oceanside, CA | The Sewer Pros (602px) | Pre-Purchase Sewer Inspection in Oceanside, CA (442px) |
| /locations/san-diego-ca/oceanside/preventative-sewer-maintenance/ | Preventative Sewer Maintenance in Oceanside, CA | The Sewer Pros (614px) | Preventative Sewer Maintenance in Oceanside, CA (455px) |
| /locations/san-diego-ca/oceanside/recurring-sewer-backup-diagnosis/ | Recurring Sewer Backup Diagnosis in Oceanside, CA | The Sewer Pros (635px) | Recurring Sewer Backup Diagnosis in Oceanside, CA (476px) |
| /locations/san-diego-ca/oceanside/sewer-cleaning-camera-inspection/ | Sewer Cleaning & Camera Inspection in Oceanside, CA | The Sewer Pros (654px) | Sewer Cleaning & Camera Inspection in Oceanside, CA (495px) |
| /locations/san-diego-ca/san-diego/pre-purchase-sewer-inspection/ | Pre-Purchase Sewer Inspection in San Diego, CA | The Sewer Pros (600px) | Pre-Purchase Sewer Inspection in San Diego, CA (440px) |
| /locations/san-diego-ca/san-diego/preventative-sewer-maintenance/ | Preventative Sewer Maintenance in San Diego, CA | The Sewer Pros (612px) | Preventative Sewer Maintenance in San Diego, CA (452px) |
| /locations/san-diego-ca/san-diego/recurring-sewer-backup-diagnosis/ | Recurring Sewer Backup Diagnosis in San Diego, CA | The Sewer Pros (633px) | Recurring Sewer Backup Diagnosis in San Diego, CA (474px) |
| /locations/san-diego-ca/san-diego/sewer-cleaning-camera-inspection/ | Sewer Cleaning & Camera Inspection in San Diego, CA | The Sewer Pros (652px) | Sewer Cleaning & Camera Inspection in San Diego, CA (492px) |
| /locations/san-diego-ca/san-marcos/ | Sewer Inspection & Cleaning in San Marcos, CA | The Sewer Pros (589px) | Sewer Inspection & Cleaning in San Marcos, CA (429px) |
| /locations/san-diego-ca/san-marcos/pre-purchase-sewer-inspection/ | Pre-Purchase Sewer Inspection in San Marcos, CA | The Sewer Pros (613px) | Pre-Purchase Sewer Inspection in San Marcos, CA (454px) |
| /locations/san-diego-ca/san-marcos/preventative-sewer-maintenance/ | Preventative Sewer Maintenance in San Marcos, CA | The Sewer Pros (625px) | Preventative Sewer Maintenance in San Marcos, CA (466px) |
| /locations/san-diego-ca/san-marcos/recurring-sewer-backup-diagnosis/ | Recurring Sewer Backup Diagnosis in San Marcos, CA | The Sewer Pros (647px) | Recurring Sewer Backup Diagnosis in San Marcos, CA (487px) |
| /locations/san-diego-ca/san-marcos/sewer-cleaning-camera-inspection/ | Sewer Cleaning & Camera Inspection in San Marcos, CA | The Sewer Pros (665px) | Sewer Cleaning & Camera Inspection in San Marcos, CA (506px) |
| /locations/st-louis-mo/ballwin/preventative-sewer-maintenance/ | Preventative Sewer Maintenance in Ballwin, MO | The Sewer Pros (587px) | Preventative Sewer Maintenance in Ballwin, MO (427px) |
| /locations/st-louis-mo/ballwin/recurring-sewer-backup-diagnosis/ | Recurring Sewer Backup Diagnosis in Ballwin, MO | The Sewer Pros (608px) | Recurring Sewer Backup Diagnosis in Ballwin, MO (448px) |
| /locations/st-louis-mo/ballwin/sewer-cleaning-camera-inspection/ | Sewer Cleaning & Camera Inspection in Ballwin, MO | The Sewer Pros (627px) | Sewer Cleaning & Camera Inspection in Ballwin, MO (467px) |
| /locations/st-louis-mo/chesterfield/pre-purchase-sewer-inspection/ | Pre-Purchase Sewer Inspection in Chesterfield, MO | The Sewer Pros (618px) | Pre-Purchase Sewer Inspection in Chesterfield, MO (458px) |
| /locations/st-louis-mo/chesterfield/preventative-sewer-maintenance/ | Preventative Sewer Maintenance in Chesterfield, MO | The Sewer Pros (630px) | Preventative Sewer Maintenance in Chesterfield, MO (470px) |
| /locations/st-louis-mo/chesterfield/recurring-sewer-backup-diagnosis/ | Recurring Sewer Backup Diagnosis in Chesterfield, MO | The Sewer Pros (651px) | Recurring Sewer Backup Diagnosis in Chesterfield, MO (491px) |
| /locations/st-louis-mo/chesterfield/sewer-cleaning-camera-inspection/ | Sewer Cleaning & Camera Inspection in Chesterfield | The Sewer Pros (627px) | Sewer Cleaning & Camera Inspection in Chesterfield (467px) |
| /locations/st-louis-mo/florissant/pre-purchase-sewer-inspection/ | Pre-Purchase Sewer Inspection in Florissant, MO | The Sewer Pros (598px) | Pre-Purchase Sewer Inspection in Florissant, MO (438px) |
| /locations/st-louis-mo/florissant/preventative-sewer-maintenance/ | Preventative Sewer Maintenance in Florissant, MO | The Sewer Pros (610px) | Preventative Sewer Maintenance in Florissant, MO (450px) |
| /locations/st-louis-mo/florissant/recurring-sewer-backup-diagnosis/ | Recurring Sewer Backup Diagnosis in Florissant, MO | The Sewer Pros (631px) | Recurring Sewer Backup Diagnosis in Florissant, MO (471px) |
| /locations/st-louis-mo/florissant/sewer-cleaning-camera-inspection/ | Sewer Cleaning & Camera Inspection in Florissant, MO | The Sewer Pros (650px) | Sewer Cleaning & Camera Inspection in Florissant, MO (490px) |
| /locations/st-louis-mo/st-charles/preventative-sewer-maintenance/ | Preventative Sewer Maintenance in St. Charles, MO | The Sewer Pros (622px) | Preventative Sewer Maintenance in St. Charles, MO (462px) |
| /locations/st-louis-mo/st-charles/recurring-sewer-backup-diagnosis/ | Recurring Sewer Backup Diagnosis in St. Charles, MO | The Sewer Pros (643px) | Recurring Sewer Backup Diagnosis in St. Charles, MO (483px) |
| /locations/st-louis-mo/st-charles/sewer-cleaning-camera-inspection/ | Sewer Cleaning & Camera Inspection in St. Charles, MO | The Sewer Pros (662px) | Sewer Cleaning & Camera Inspection in St. Charles, MO (502px) |
| /locations/st-louis-mo/st-louis-city/ | Sewer Inspection & Cleaning in St. Louis City, MO | The Sewer Pros (604px) | Sewer Inspection & Cleaning in St. Louis City, MO (445px) |
| /locations/st-louis-mo/st-louis-city/pre-purchase-sewer-inspection/ | Pre-Purchase Sewer Inspection in St. Louis City, MO | The Sewer Pros (629px) | Pre-Purchase Sewer Inspection in St. Louis City, MO (469px) |
| /locations/st-louis-mo/st-louis-city/preventative-sewer-maintenance/ | Preventative Sewer Maintenance in St. Louis City, MO | The Sewer Pros (641px) | Preventative Sewer Maintenance in St. Louis City, MO (481px) |
| /locations/st-louis-mo/st-louis-city/recurring-sewer-backup-diagnosis/ | Recurring Sewer Backup Diagnosis in St. Louis City | The Sewer Pros (619px) | Recurring Sewer Backup Diagnosis in St. Louis City (459px) |
| /locations/st-louis-mo/st-louis-city/sewer-cleaning-camera-inspection/ | Sewer Cleaning & Camera Inspection in St. Louis City | The Sewer Pros (638px) | Sewer Cleaning & Camera Inspection in St. Louis City (478px) |
| /resources/how-to-read-a-sewer-camera-inspection-video/ | How to Read a Sewer Camera Inspection Video | The Sewer Pros (584px) | How to Read a Sewer Camera Inspection Video (425px) |
| /resources/what-is-in-a-sewer-camera-inspection-report/ | What Is Included in a Sewer Camera Inspection Report? | The Sewer Pros (659px) | What Is Included in a Sewer Camera Inspection Report? (499px) |
| /san-diego-ca/contact/ | Contact The Sewer Pros in San Diego, CA | Sewer Inspection (547px) | Request Sewer Inspection in San Diego, CA (392px) |
| /san-diego-ca/ | Sewer Inspection & Camera Inspection in San Diego | The Sewer Pros (625px) | Sewer Inspection and Cleaning in San Diego, CA (436px) |
| /services/sewer-camera-inspection/ | Sewer Camera Inspection for Homes | The Sewer Pros (488px) | Sewer Camera Inspection: What It Shows | The Sewer Pros (530px) |
| /st-louis-mo/contact/ | Contact The Sewer Pros in St. Louis, MO | Sewer Inspection (535px) | Request Sewer Inspection in St. Louis, MO (381px) |
| /st-louis-mo/ | Sewer Camera Inspection & Cleaning in St. Louis, MO | The Sewer Pros (641px) | Sewer Inspection and Cleaning in St. Louis, MO (425px) |
| /st-louis-mo/sewer-lateral-inspection-reporting/ | Sewer Lateral Inspection & Municipal Reporting | The Sewer Pros (581px) | Sewer Lateral Inspection and Municipal Reporting in St. Louis (546px) |

## 7. Left as low severity (not changed)

* **32 descriptions with no reader verb or soft next step.** Location and service + location descriptions lead with the local rule and end on "See what ... covers", which reads as a next step to people but not to the pattern check. Adding "Request ..." to all of them would crowd the width budget.
* **16 titles within 25px of the budget.** They fit; any added word would push them over.
* Description lengths between 130 and 158 characters are not tuned further.

## 8. Rules now enforced (`scripts/verify-meta.mjs`)

* Every indexable page has a title and a meta description; none duplicated; no two descriptions 80% or more alike or differing only by place or service name.
* Estimated title width at most about 580px; description 110 to 160 characters and at most about 920px.
* The primary keyword is in the title; service titles use the registered name exactly, with the ampersand.
* No banned wording: repair or replacement offers, commercial wording, free estimate, licensing, prices, years in business, guarantees, "emergency" or 24/7, empty superlatives; no em or en dashes, quotation marks or unescaped entities; no fear or urgency language.
* Open Graph and Twitter tags are present and equal to the title and description; canonical and og:url equal the page URL; the og:image file exists.
* No cross-market mention; no wording that implies an office, storefront or Google Business Profile.
* Location and market pages name the place and audience pages name the audience in title and description; the description equals the WebPage schema description; the only pipe in a title is the brand separator.

`verify-editorial-keywords.mjs` and the page scripts were updated where they hard-coded an old title, description or the always-present brand suffix.

## 9. Decisions to confirm

| Item | Status | Blocking | Next action |
| ---- | ------ | -------- | ----------- |
| Titles over the width budget now show without the brand suffix (71 titles; 11 more were retitled by hand) | CONFIRM | NO | Keep, or set `TITLE_BUDGET` higher in `lib/seo/text-width.mjs` to keep the brand on more titles |
| A review-site listing shows a San Diego street address and phone for The Sewer Pros | NEEDS OWNER | NO | Confirm whether the address is public; the site does not publish one |
| Search results show no competitor meta descriptions, local pack, PAA or AI Overview through the search tool | NOTE | NO | A rank-tracking tool would add these if wanted |
| No real keyword research exports in the repo | NEEDS CLIENT | NO | Supply them; replace the tables in `scripts/lib/editorial-keywords.mjs` |

## 10. Verification

`npx tsc --noEmit` passes; `npm run build` passes; all 31 verify scripts pass, including the new `verify-meta.mjs`, `verify-editorial-keywords.mjs` and `verify-internal-links.mjs`.
