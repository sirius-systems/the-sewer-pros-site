# Internal Link Audit and Improvement Pass - 2026-10-27

**Scope:** every page in the static export (`out/`, 198 pages, 197 indexable). **Method:** crawl of built HTML, no sampling.
**Outcome:** orphans 130 to 0, pages under three content inbound links 150 to 1 (the homepage, which does not need them), hierarchy gaps 16 to 0, no broken, stale, commercial, noindex-bound or cross-market links before or after. A new gate, `scripts/verify-internal-links.mjs`, now enforces this.

Rules now in force: `docs/16-internal-linking-strategy.md` section 126. Raw data: `internal-link-graph-2026-10-27.json` (after) and `internal-link-graph-2026-10-27-before.json`; audit findings: `internal-link-audit-2026-10-27-before.json` and `-after.json`.

## 1. Methodology

* `scripts/lib/link-graph.mjs` parses every `out/**/index.html` with a tag scanner that keeps a landmark stack, and records each `<a>` with its zone: `nav`, `footer`, `breadcrumb`, `hero`, `body:{section id}`, `aside:{id}` (related-links blocks), `faq`. Hrefs are normalised (origin stripped, hash and query dropped, trailing slash added).
* `scripts/build-link-graph.mjs` writes the graph (per page: type, title, H1, robots, sitemap membership, content inbound, content links with anchor text and zone, nav/footer/breadcrumb link counts, external link count). `scripts/audit-internal-links.mjs` computes every metric in this report.
* "Indexable" = no `noindex` and listed in `sitemap.xml`. "Content inbound" = distinct indexable pages linking via a zone other than nav, footer, breadcrumb or other chrome; these sitewide links give every page its inbound count for free and say nothing about relationships.
* The "before" graph was built from the committed tree at `ad7fd27`; "after" from the working tree of this change.
* The Resources hub is built (`/resources/`, five guides), contrary to the brief's assumption. No blog exists; the five resource guides and two comparison pages are the supporting content.

## 2. Before and after

| Metric | Before | After |
| ------ | -----: | ----: |
| Indexable pages | 197 | 197 |
| Orphans (no inbound from another indexable page) | 130 | 0 |
| Orphans counting content links only | 131 | 1 (homepage) |
| Pages with fewer than 3 content inbound links | 150 | 1 (homepage) |
| Service + location pages: content inbound (min / avg / max) | 0 / 0.1 / 2 | 3 / 6.7 / 12 |
| Location hubs: links to own service + location pages (min / avg / max) | 0 / 1.6 / 4 | 5 / 5.0 / 5 |
| Location hubs below 3 service + location links | 16 | 0 |
| Hierarchy gaps | 16 | 0 |
| Broken, old-route, commercial, noindex-bound, cross-market links | 0 | 0 |
| Generic anchors (regex) | 0 | 0 |
| Anchors to a service page not containing the registered name | 143 | 68 |
| Breadcrumb mismatches vs URL structure | 0 | 0 |
| Links inside FAQ answers | 97 | 437 |
| Pages over 100 internal links (total, repeats included) | 1 (home, 106) | 3 (home 112, services hub 101, St. Louis hub 102) |
| Pages over 100 distinct internal destinations | 0 | 0 |

Average internal links per page, total / from page content (nav, footer, breadcrumb excluded), and average content inbound links:

| Page type | Pages | Total before | Total after | Content links before | Content links after | Inbound before | Inbound after |
| --------- | ----: | ----: | ----: | ----: | ----: | ----: | ----: |
| Service + location | 144 | 57.0 | 63.2 | 21.0 | 25.2 | 0.1 | 6.7 |
| Location hub | 16 | 54.2 | 62.0 | 19.2 | 25.0 | 60.3 | 60.3 |
| Market hub | 3 | 93.7 | 97.7 | 59.7 | 61.7 | 22.0 | 22.0 |
| Core service | 9 | 54.6 | 58.4 | 20.6 | 22.4 | 176.4 | 177.0 |
| Audience | 6 | 42.8 | 46.5 | 8.8 | 10.5 | 11.5 | 21.0 |
| Resource | 5 | 37.6 | 40.4 | 3.6 | 4.4 | 4.2 | 6.0 |
| Comparison | 2 | 36.5 | 40.0 | 3.5 | 5.0 | 6.0 | 5.0 |
| FAQ | 1 | 35.0 | 40.0 | 2.0 | 5.0 | 1.0 | 5.0 |
| About | 1 | 69.0 | 78.0 | 36.0 | 43.0 | 1.0 | 3.0 |
| Homepage | 1 | 106.0 | 112.0 | 74.0 | 78.0 | 0 | 0 |

(Inbound averages for hubs and core pages are dominated by sitewide navigation and footer links in the "all links" columns; the content-inbound view is in the JSON.)

## 3. Findings (Phase 2)

**Orphans.** 130 of the 144 service + location pages had no inbound link from any page. The other 14 were reached from a hub's pre-purchase section or from a resource or comparison page. No other page type had orphans. Cause: location hubs linked to the nine core service pages, not to their own service pages, and service + location pages linked only to a location hub and three core pages.

**Weakly linked pages (fewer than 3 content inbound), ranked by importance.** All 144 service + location pages (0 to 2). Outside them: `/about/` 1, `/faq/` 1, `/for/` 1, `/resources/st-louis-county-sewer-lateral-program/` 1, `/for/hoa-communities/` 2, and the homepage 0. None of the core services, market hubs, location hubs or the pre-purchase and real estate pages was weak, but the real estate cluster was only half connected (section 4).

**Dead, broken, stale, commercial or non-launch links.** None. No link to an old `/{market}/{location}/` route, a removed commercial page, a noindex page, or a page outside the sitemap. All hrefs resolve to a built page.

**Anchor text.**
* No generic anchors by regex. One visible label, "Read the guide" (six different targets, in the featured-guide and guide-card variants of `RelatedLinks`), carried no target name. Fixed with screen-reader text naming the target.
* 143 anchors to service pages did not contain the registered service name, almost all CTA-style card labels: "How line locating works", "How diagnosis works", "About maintenance", "About cleaning with camera" (16 each), "About pre-purchase inspection" (13). Hub cards now read "About {registered name}" or "{Service} in {Place}". Remaining 68 are natural in-sentence phrases ("recurring backup", "before closing", "preventative maintenance") and are kept.
* One target using many anchors: the pre-purchase page has 19 distinct anchors, each market hub 18, the camera inspection page 17. This is natural variation across 200 pages and is not a problem; no exact-duplicate anchor points to different pages except "contact us" (market contact pages, correct) and "see all service locations" (market hubs, correct).
* Keyword-research phrases (docs 10 and 16 sections 14 to 16) are reflected by the registered names plus place ("Sewer Cleaning in Ballwin"), which match the head terms; no exact-match stuffing was added.

**Hierarchy gaps.**
* Service + location to location hub, market hub and core service: no gap (breadcrumb plus the nine service cards).
* Location hub to its service + location pages: all 16 missing (0 of 3 required).
* Market hub to every location hub, core service to audience and market pages, audience to service and market pages, resource to a service: no gap.

**Cross-market.** None in page content. The sitewide "Serving St. Louis, San Diego, Las Vegas" line and the three market phone blocks are deliberate company-level content.

**Breadcrumbs.** Consistent with URL structure. Notes: location hubs and service + location pages pass through the market hub (`/{market}/`) because there is no `/locations/{market}/` page; comparison pages show only Home (there is no `/compare/` hub). Neither is a defect.

**Navigation and footer.**
* Nav (header): Services, Locations, Who We Serve, Resources, About, Contact, a Schedule CTA to `/contact/`, and the logo; 8 distinct destinations, 15 links with the mobile menu repeated. `/contact/` appears twice by design (link and CTA).
* Footer: 5 services and "All services", 3 markets and "All service areas", 3 audiences (home buyers, real estate agents, property managers), About, Contact, FAQs, Resources (17 links). Missing: Pre-Purchase Sewer Inspection (the real estate cluster's entry point) and Sewer Cleaning & Camera Inspection. Both added.
* Not in footer or nav, by design: home inspectors, home sellers, HOA communities, comparisons.

**Link counts.** Only the homepage exceeded 100 total links before (106; 43 distinct; 74 are body links, mainly 22 market and location cards and 18 "how we can help" links). Excess comes from repeated destinations, not 100 different pages. After this change three pages exceed 100 total (home 112, services hub 101, St. Louis hub 102) because FAQ answers now link; none exceeds 43 distinct destinations. The gate caps distinct destinations at 100.

**Templates that under-link** (content links per page against 20 to 25 for core service, location and service + location pages): comparison 3.5, resource 3.6, resources hub 3, market contact pages 7, audience 8.8, thank-you 2. Resource and comparison pages were raised slightly (section 5); the rest are deferred.

## 4. Real estate cluster (before)

Pages: Pre-Purchase Sewer Inspection, Sewer Camera Inspection, home buyers, real estate agents, home inspectors, home sellers, the independent-vs-repair comparison, the report and video guides. Matrix of content links before: home buyers and real estate agents did not link to each other, home inspectors did not link to agents, the comparison page linked only to the camera and pre-purchase service pages, and the pre-purchase page did not link to the guides. Fixed or improved below.

## 5. Opportunities (Phase 3) and status

Impact: H high, M medium, L low. Effort: S (data or config), M (component), L (new content). "Done" = implemented in this change.

| # | Source | Target | Anchor | Placement | Why it helps | Impact | Effort | Status |
| - | ------ | ------ | ------ | --------- | ------------ | :----: | :----: | ------ |
| 1 | Service + location page | Same service, three neighbouring locations in its market | "{Service} in {Place}" (registered name) | Related pages block | Visitors compare nearby areas; gives every page 3 sibling links | H | M | Done (`link-plan.ts` ring) |
| 2 | Service + location page | Two follow-on services in the same location, per `SERVICE_RELATIONS` | "{Service} in {Place}" | Related pages block | Next question after reading the page | H | M | Done |
| 3 | Location hub | Top five service + location pages | "{Service} in {Place}" | Service cards (second link beside "About {Service}") | Local landing pages for the main services; bounded at five | H | M | Done |
| 4 | FAQ answers (all templates) | The service named in the answer; local page on service + location pages | The words already in the answer | In-answer first mention | Answer names a service and links to it; text unchanged, JSON-LD unchanged | H | M | Done (`faq-links.tsx`; 437 links) |
| 5 | FAQ answers | Audience pages when named (agents, inspectors, buyers, property managers) | The words already in the answer | In-answer | Connects questions to audience pages | M | S | Done |
| 6 | Footer | Pre-Purchase Sewer Inspection, Sewer Cleaning & Camera Inspection | Registered names | Footer Services group | Entry point of the real estate cluster on every page; both were missing | H | S | Done |
| 7 | Home buyers / real estate agents / inspectors / sellers | Each other (buyers to agents, agents to buyers, inspectors to agents, sellers to buyers) | Registered audience names | Related pages | Closes the cluster | M | S | Done |
| 8 | Independent-vs-repair comparison | Home buyers, real estate agents, Who We Serve | Registered names | Related pages | Second-opinion readers are buyers and agents | M | S | Done |
| 9 | Camera report and video guides | Pre-Purchase Sewer Inspection, FAQ | Registered names | Related pages | Guides lead to the service a reader needs | M | S | Done |
| 10 | St. Louis location hubs (5) | St. Louis lateral guides (city or county program, report guide) | Guide titles | New "Sewer lateral program guides" block | Local guides were only reachable from the market hub; the county guide had 1 inbound | M | M | Done (`GUIDES_BY_LOCATION`) |
| 11 | FAQ page, About, Contact, comparison | Each other and Who We Serve | Registered names | Related pages | `/faq/`, `/about/`, `/for/` had 1 content inbound each | M | S | Done |
| 12 | Property managers and HOA communities | Each other | Registered names | Related pages | HOA page had 2 inbound; same residential audience family | M | S | Done |
| 13 | Hub service cards | Core service page labelled "About {registered name}" | Registered name | Service cards | Replaces 16 variants of "How line locating works" and similar | M | S | Done |
| 14 | Guide cards and featured guide | Resource pages | "Read the guide: {title}" (title in screen-reader text) | `RelatedLinks` | Six different targets shared one bare anchor | M | S | Done |
| 15 | Homepage | Deep pages for authority flow | n/a | n/a | Homepage already has 112 links (43 distinct). The pre-purchase service page and the report guide are already linked. No addition recommended; consider trimming the 22 market cards | L | S | Deferred |
| 16 | Market hubs | Top location hubs and strongest services | n/a | n/a | Market hubs already link all their location hubs and nine service cards | L | S | Not needed |
| 17 | Service pages | Resource guides on the camera report and video | "What is in a sewer camera inspection report" | Body or related block | Only the camera inspection page links them; the pre-purchase page would benefit | M | M | Deferred: needs a new related-guides slot on `ServicePageTemplateV2`, which currently renders services only by design |
| 18 | Audience pages | Local service + location pages | "{Service} in {Place}" | Body | Audience pages link core services and markets only; a market picker would be needed | L | M | Deferred |
| 19 | San Diego and Las Vegas location hubs | Local lateral and sewer-agency guides | n/a | Guides block (exists) | The guides block exists; no resource pages exist for these markets | M | L | Deferred: needs new resource pages (not created here) |
| 20 | Resources hub | New guides when added; every guide to its service and market | n/a | `hub-items` | The hub lists five guides. Each new guide needs a link from the hub, its market hub, the relevant location hubs and the matching service page; add it to `GUIDES_BY_LOCATION` | M | S | Deferred (depends on new content) |
| 21 | Market contact pages | FAQ and audience pages | "FAQs" | Related block | These pages use a fixed service list, not `relatedPageIds` | L | M | Deferred |
| 22 | Comparison pages | A `/compare/` hub | n/a | Breadcrumb | Only two comparison pages exist | L | L | Deferred |
| 23 | Remaining anchors that omit the registered name (68) | Registered name | e.g. "preventative maintenance" | In prose | Natural variants; rewriting would change copy | L | S | Deferred |
| 24 | Thank-you page | n/a | n/a | n/a | Noindex-style utility page; leave sparse | L | S | Not needed |

## 6. Implemented (Phase 4)

* `lib/links/link-plan.ts`: central, registry-driven plan (top services, `SERVICE_RELATIONS`, ring of sibling locations, local guides). Gated pages and unauthored pages are never linked (RelatedLinks and the resolver already filter them).
* `components/templates/ServiceLocationPageTemplate.tsx`: related block is now location hub + two follow-on services + three neighbouring locations for the same service (six cards).
* `components/templates/RichLocationComposition.tsx`, `components/sections/location/ServiceCardGrid.tsx`, `types/content.ts`: hub cards keep "About {Service}" to the core page and add "{Service} in {Place}" for the top five services; STL hubs get a guides block.
* `lib/links/faq-links.tsx` with `FaqSection` and `FaqGrouped`: first mention of a service or audience in each FAQ answer becomes a link (max two per answer, once per target per page, never the page itself). All 5,043 FAQPage answers were checked: the schema text appears verbatim in the visible page and contains no markup.
* `data/navigation/navigation.ts`: footer gains Pre-Purchase Sewer Inspection and Sewer Cleaning & Camera Inspection.
* `content/pages/audiences.tsx`, `comparisons.tsx`, `core.tsx`, `contact.tsx`: related-page ids added for the real estate cluster, FAQ, About and Who We Serve.
* `components/sections/RelatedLinks.tsx`: "Read the guide" carries the target name in screen-reader text.
* Verify scripts updated for the new structure: location-hub checks accept either the core or the local service link; the "no links in FAQ answers" checks became "JSON-LD answers are plain text" (Henderson, hydro jetting, preventative maintenance).
* `scripts/verify-internal-links.mjs` added; runs with the other verify scripts.

## 7. Decisions made (all reversible)

* Linking from hub cards: kept the core-service link and added the local link, rather than replacing it, so the hub still links the canonical service page (docs/16 section 23).
* Bounded numbers: five top services per hub, two follow-on services and three neighbouring locations per service page. Change `TOP_LOCAL_SERVICES`, `SIBLING_SERVICE_COUNT`, `SIBLING_LOCATION_COUNT` in one file.
* Location-hub FAQ answers link to the core service page, not a local page, to keep the hub within its five local links.
* The FAQ linker links only registered service names and four audience names; it does not link "second opinion", "report" or "inspection video", because those phrases appear in offer and deliverable wording that should not become links.
* No page was created. No copy was changed beyond link elements: hub card link labels ("About {Service}") and the new guides block title are the only new visible words.

## 8. Needs a decision from the owner

None blocks shipping. For later: whether to write San Diego and Las Vegas local guide pages (opportunity 19), and whether to trim the homepage market cards (opportunity 15).

## 9. Linking rules now enforced

See `docs/16-internal-linking-strategy.md` section 126 (hierarchy, bounded sibling-location rule, anchor rules, no-orphan and ceiling rules). The gate runs: orphans, content-inbound minimum of two, broken, old-route, commercial, noindex-bound, generic-anchor and cross-market links, hierarchy, breadcrumbs, distinct-destination ceiling, sibling bounds and FAQ JSON-LD plain text. Run against the pre-change build it fails four checks (orphans 130, content inbound 147, hierarchy 16, hub links 16), as intended.
