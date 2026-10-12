> Historical snapshot, written 2026-10-12. Current baselines: 198 approved pages (201 HTML files in out/), 197 sitemap URLs, 11 service records, 6,369 service + location matrix rows, 10 audience ids, 579 locations, 0 placeholder boxes, 30 image files (929 boxes on the shot list, all wired). See docs/image-placeholder-inventory.md and the decisions log for the current state.

# Multifamily page decision

Date: Oct 12, 2026. Question: should multifamily (duplexes, fourplexes and residential apartment buildings) get its own audience page, or stay as a section on `/for/property-managers/`?

**Verdict: keep as a section.** Do not promote. The three conditions for promotion are not met on the evidence available, and one of them (search volume) could not be measured at all.

## What the pipeline could and could not do

The SEO automation pipeline needs two things this repo and this session do not have:

- The scripts (`scan-routes.mjs`, `parse-keyword-csv.mjs`, `cluster-keywords.mjs`, `score-opportunities.mjs`, `run-pipeline.mjs`) are not in the repo. There is no `seo-automation/` folder and no `docs/seo/` folder, so there is no route manifest, `opportunities.json` or `keyword-clusters.json` to read or write.
- Volume, competition and CPC come only from a real Google Keyword Planner CSV. There is none, and the browser connection that could export one was unavailable. The pipeline rules forbid estimating volume, so **every volume figure below is blank (null), not a guess.**

What was done instead: a manual SERP check of the multifamily terms in all three markets using a general web search, and a seed list ready for the Keyword Planner export so the verdict can be re-run with real numbers.

## Volume

| Market | Term group | Monthly volume |
|---|---|---|
| St. Louis | duplex, fourplex, multifamily, apartment sewer inspection | not available (no Keyword Planner export) |
| San Diego | duplex, fourplex, multifamily, apartment sewer inspection | not available (no Keyword Planner export) |
| Las Vegas | duplex, fourplex, multifamily, apartment sewer inspection | not available (no Keyword Planner export) |

The condition "meaningful volume in at least one market" is therefore **unverified**, which counts as not met.

## SERP pattern

Six searches (two per market) on the multifamily terms. The search tool is general web search, US-only, and returns result summaries, not ranked positions, so this is a pattern read, not a rank tracking study.

| Market | Query | What came back | Multifamily-specific pages for the market? |
|---|---|---|---|
| St. Louis | multifamily sewer camera inspection St. Louis duplex fourplex apartment building | Roto-Rooter and Mr. Rooter camera inspection pages, Angi cost guide, a general "multi-family inspections" page from a Milwaukee inspector, and out-of-market commercial sewer inspection pages | No |
| St. Louis | duplex sewer line inspection St. Louis MO | Pillar To Post sewer scoping (home buyers), Superior Sewer, Hoffmann Brothers, Roto-Rooter, Angi | No (nothing duplex-specific) |
| San Diego | multifamily sewer camera inspection San Diego duplex fourplex apartment building | Bill Howe Plumbing camera inspection pages, a City of San Diego public-sewer spec, the same out-of-market multi-family inspector and commercial pages | No |
| San Diego | apartment building sewer line camera inspection San Diego | Bill Howe, Zoom Drain, Point Loma Home Pros, other plumber pages, mostly residential | No |
| Las Vegas | multifamily sewer camera inspection Las Vegas duplex fourplex apartment | Bill Howe and Zoom Drain camera inspection pages (Zoom Drain mentions property managers and repeated problems in one building), the same out-of-market pages | No |
| Las Vegas | fourplex sewer scope pre-purchase inspection Las Vegas | Pillar To Post sewer scoping pages (general, many unrelated states) | No |

Pattern: the results are dominated by **generic residential sewer camera inspection pages from plumbers and drain companies**, home inspector franchise pages, and a few out-of-market pages from contractors that cover multiplexes or commercial property. In none of the three markets did a page built around multifamily sewer inspection for that market appear. The condition "SERPs dominated by multifamily-specific pages" is **not met**. That also means there is little proof of demand for a dedicated page, and little proof of a ranking gap to fill.

Noise to ignore (flagged, not dropped): commercial and commercial-real-estate inspection pages from out-of-market contractors, cost-guide aggregators, and franchise sewer scoping pages for other states.

## Distinct content

A standalone multifamily page would cover four topics: a shared lateral or main line serving several units, finding where a recurring backup starts, video and written findings to share, and pre-purchase inspection for multi-unit homes. Each already has a home: the camera inspection page, the recurring backup diagnosis page, the pre-purchase page and the property manager page. On this evidence a separate page would repeat them. The condition "enough distinct content to avoid a thin duplicate" is **not met** today.

One thing could change that later. The St. Louis municipal pages already hold distinct, sourced local rules about multifamily eligibility (for example, programs that cover multifamily buildings up to six units and exclude larger buildings). That is real local content, but it lives on the location pages and is not enough on its own.

## Criteria

| Condition for "promote" | Result |
|---|---|
| Meaningful volume in at least one market | Unverified (no Keyword Planner data) |
| SERPs dominated by multifamily-specific pages | Not met |
| Enough distinct content to avoid a thin duplicate of the property manager page | Not met |

All three are required. **Keep as a section.** The section is live at `/for/property-managers/#multifamily`, with FAQs, and the Contact option "Rental or multifamily property" points to it.

## To re-run with real data

Paste these into Google Keyword Planner (10 per run), export the CSV to `docs/seo/keyword-exports/`, and run the pipeline scripts. Batch 1:

```text
multifamily sewer inspection
multifamily sewer camera inspection
duplex sewer inspection
fourplex sewer inspection
apartment building sewer camera inspection
sewer scope for duplex
sewer scope for multifamily property
shared sewer line apartment building
multi unit sewer inspection
rental property sewer inspection
```

Batch 2 (markets):

```text
duplex sewer inspection st louis
multifamily sewer inspection st louis
apartment sewer camera inspection st louis
duplex sewer inspection san diego
multifamily sewer inspection san diego
apartment sewer camera inspection san diego
duplex sewer inspection las vegas
multifamily sewer inspection las vegas
apartment sewer camera inspection las vegas
fourplex sewer scope las vegas
```

Promote only if the export shows meaningful volume in at least one market, a SERP check shows multifamily-specific pages ranking, and there is enough distinct content (for example, local multifamily sewer rules by municipality) that a page is not a copy of the property manager page.

## Sources checked

- Soil Solutions, multi-family sewer inspections (out of market): https://soisol.10.cascadewebdev.com/commercial/commercial-real-estate-inspections/commercial-sewer-inspections/
- House to Home Inspect, multi-family inspections (out of market): https://housetohomeinspect.com/multi-family-inspection
- Roto-Rooter St. Louis sewer video inspection: https://www.rotorooter.com/stlouis/sewer-video-inspection/
- Angi, sewer camera inspection cost in St. Louis: https://www.angi.com/articles/sewer-camera-inspection-cost/mo/st-louis
- Pillar To Post, sewer scoping in St. Louis: https://pillartopost.com/territories/us/mo/saint-louis/sewer-scoping/
- Bill Howe Plumbing, San Diego sewer camera inspection: https://billhowe.com/services/sewer-camera-inspection-san-diego/
- Zoom Drain, San Diego North County drain and sewer inspection: https://www.zoomdrain.com/san-diego-north-county/drain-and-sewer-services/drain-and-sewer-inspection/
- Zoom Drain, Las Vegas and Henderson drain and sewer inspection: https://www.zoomdrain.com/vegas/about-us/areas-we-serve/henderson/drain-and-sewer-inspection
- Bill Howe Plumbing, Las Vegas sewer camera inspections: https://billhowe.com/las-vegas/sewer-camera-inspections/
- Pillar To Post, sewer scoping in Nevada: https://pillartopost.com/territories/us/nv/sewer-scoping/
