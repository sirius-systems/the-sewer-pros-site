# Source audit: sl-sd-city-camera (rebuild)

Page: City of San Diego, CA + Sewer Camera Inspection. Rebuild file: `content/pages/sl-rebuild/sl-sd-city-camera.tsx`.
Sources: `sanDiegoCityContent` (`content/pages/san-diego-city.tsx`, `loc-sd-san-diego`) and the `v2` block of `svc-sewer-camera-inspection` (`content/pages/services.tsx`).
Replaces the existing entry `sl-sd-city-camera` in `content/pages/san-diego-service-location.tsx` (body, hero intro, meta description; adds serviceDescription and cta). The existing `local` card ("The lateral is yours up to the main") is kept: it is accurate and San Diego-specific.
Status key: USED = text carried verbatim or near-verbatim; ADAPTED = fact kept, wording rewritten for this page; LEFT OUT = not in the four-section body, with reason ("via assembly" = the item reaches the page through `service-location-upgrade.ts` / `service-location-shared.ts`, not through the body).

## What changed from the existing body

- Existing body had four short sections (about 290 words). New body keeps four (about 790 words, against 410-460 on the Henderson pages) and ties more San Diego facts to what the camera records or cannot.
- REMOVED "Set against places that operate assistance programs, that changes the calculation" (a comparison with other places that the location page does not make).
- REMOVED "an obscured section is unknown, not fine, and treating it as fine is the most common way an inspection gets over-read". "Most common" has no source. The service page's actual limit (a visibly clear line is not proof; a camera cannot see below the waterline or into unreached sections) is used instead.
- REMOVED the bulleted list "Whether the problem is accumulation or a structural defect / where / roots / which sections could not be assessed" as a standalone card; it is a generic camera list that passes the city-swap test only because of the surrounding paragraph. The same content is now tied to San Diego's no-assistance, pay-it-yourself position in section 2.
- KEPT and sharpened: the Plumber's Report process (now section 3, with the "we did not find a current City statement of who pays beyond the property line" hedge and the "does not establish where a property line is" limit) and "the City does not publish pipe material or era" (now section 4).
- Added from the location page: the connection can be in a street, easement or canyon; Development Services maps and records (619-446-5300) and the City's statement that it has no diagrams of private lines on the property; the crew-installation program suspension; the Right-of-Way Permit and the "ask Development Services (619-446-5242)" hedge; the City's buyer guidance (licensed-plumber report, guidance not a requirement; no point-of-sale rule found; state rules outside the page); Council Policy 400-10 and the yearly cleanout flush; the EMRA list.
- Hero intro and meta description rewritten (the old hero was a single run-on sentence; the old meta was generic). serviceDescription and cta added.

## The four body sections and their sources

| # | h2 | Local source | Service source |
|---|----|--------------|----------------|
| 1 | Your responsibility runs to the City main, wherever that is | responsibility.answer paragraph 1 (owner maintains to the connection; street, beyond the property line, easement, canyon), responsibility.cards, buyingGuide.body (Development Services can help identify where the lateral connects; no diagrams of private lines on the property), FAQ "Can the City tell me where my lateral connects to the main?" (619-446-5300) | limits.cannot (a camera does not show where the pipe sits in your yard); limits.related (line locating is separate); ask.items (video, written findings, location along the line) |
| 2 | No City help with lateral costs found, so evidence comes first | municipalProgram.lede (none found in the pages reviewed; which pages), covers 1-3 (crew installation program suspended; no fund, cap or application found; 619-515-3500), doesNotCover 1, 5 (Right-of-Way Permit; no page on work confined to private property; Development Services 619-446-5242), callout (plan on arranging inspection, cleaning and repair yourself; no claim City accepts an outside report; does not perform repairs), buyingGuide.lede and body (City guidance to buyers, not a requirement; no point-of-sale rule found; state rules outside) | signals "A repair recommendation..." via assembly; independent band; limits.can (blockage vs defect, location) |
| 3 | A break beyond the property line: the City's process, and the footage | responsibility.answer paragraph 2 (plumber calls the Sewer Emergency Line, files a Plumber's Report, City investigates within 24 hours), responsibility.note (no current City statement of who pays beyond the property line), systemExplainer.card.closing (footage does not establish where a property line is) | limits.cannot (waterline), decision.list (blocked line may need cleaning first), definition (visible conditions, day of visit) |
| 4 | A cleanout flush is not an inspection | systemExplainer paragraphs 3-4 (roots and grease; annual cleanout flush; a flush is not an inspection; EMRA list), systemExplainer paragraph 2 and whoToCall (no pipe material or era published), FAQ "What is an EMRA" | limits.cannot (slope and depth not measured), limits.callout (a visibly clear line is not proof) |

## City of San Diego location page

| Section / item | Status | Reason |
|---|---|---|
| seoTitle, metaDescription | LEFT OUT | Page-specific meta description written. |
| hero.title | LEFT OUT | Location page H1. |
| hero.intro (independent inspection; owner maintains to the City main) | ADAPTED | New hero intro restates the owner-to-the-main fact and the none-found hedge. |
| heroForm bullets (camera inspection; "Serving San Diego since" year), form card, nextSteps | LEFT OUT | Shell and company claim (founding year). San Diego is a service market. |
| heroForm.card.note (spill reporting line 619-515-3525) | ADAPTED | The number appears in section 3 as the City's Sewer Emergency Line / reporting number. |
| faqHeading, faqSchemaApproved | LEFT OUT | Template-level. |
| keyTakeaways 1 (own system; guidance for other County agencies does not apply) | ADAPTED | One-city framing throughout; not restated. |
| keyTakeaways 2 (owner maintains to the connection, even in street, easement, canyon) | USED | Hero intro and section 1. |
| keyTakeaways 3 (no City program found; crew lateral-installation program suspended; camera gives evidence before you spend) | USED | Section 2. |
| keyTakeaways.jumpNav | LEFT OUT | Navigation of the location page. |
| serviceCards, helpBar | LEFT OUT | Not a page field here. |
| (no reviewBand, no housingAge on this location page) | n/a | The location page deliberately has no review band or Census figures. No housing figure is stated here. |
| responsibility.answer paragraph 1 | USED | Section 1. |
| responsibility.answer paragraph 2 (Plumber's Report, 24 hours) | USED | Section 3. |
| responsibility.cards "The public sewer" (municipal collection and regional systems; address-specific) | ADAPTED | Section 1 states the connection location is address-specific via the Development Services point. System names LEFT OUT (not about a camera). |
| responsibility.cards "The lateral line" | USED | Section 1. |
| responsibility.table rows 1-2 | ADAPTED | Section 1. |
| responsibility.table row 3 (619-515-3525 for a spill or odor; plumber's call and report) | ADAPTED | Section 3. Spill and odor wording LEFT OUT (not a camera topic). |
| responsibility.table row 4 (24-hour investigation; no program found) | ADAPTED | Sections 2 and 3. |
| responsibility.table row 5 (where an inspection helps) | ADAPTED | Sections 1 and 3 (distance along the line). |
| responsibility.note (no current City statement of who pays beyond the property line or after City-caused damage) | ADAPTED | Section 3 (beyond the property line). City-caused damage LEFT OUT (not about a camera). |
| systemExplainer 1 (two connected systems; City is the authority; other agencies differ) | LEFT OUT | System description, not camera-specific. One-city scope is the page's framing. |
| systemExplainer 2 (combined or separate, age not stated) | LEFT OUT | Not used by the service. |
| systemExplainer 3 (roots and grease; yearly cleanout flush; flush is not an inspection) | USED | Section 4. |
| systemExplainer 4 (EMRA list) | ADAPTED | Section 4, tied to slope and depth, which a camera does not measure. |
| systemExplainer 5 (public rule does not show a lateral) | ADAPTED | Section 4 closing logic. |
| systemExplainer.card bullets (what a camera can show) | LEFT OUT | The service page's can/cannot lists and the FAQ carry them. |
| systemExplainer.card.closing (distance count; does not establish a property line; City process for a break) | USED | Sections 1 and 3. |
| whoToCall paragraphs 1-2 | ADAPTED | Section 3. Spill, odor and vandalized-manhole reporting LEFT OUT. |
| whoToCall.agency (619-515-3525; 619-515-3500 hours) | ADAPTED | 619-515-3525 in section 3; 619-515-3500 in section 2, both labelled the City's. Customer-service hours LEFT OUT. The "not labelled as a 24-hour line" note is kept only as "what it calls its Sewer Emergency Line". |
| whoToCall.secondaryAgency (Development Services 619-446-5300; Records 619-446-5200) | ADAPTED | 619-446-5300 in section 1. 619-446-5200 (as-built copies) LEFT OUT for length. |
| whoToCall.company | LEFT OUT | Company phone and hours belong to the shell. |
| municipalProgram.lede (none found; pages checked; not a statement that no help exists) | USED | Section 2. |
| municipalProgram.covers 1 (crew lateral-installation program suspended) | USED | Section 2. |
| municipalProgram.covers 2 (public-improvement permit; Class A licensed contractor) | LEFT OUT | A permit and contractor instruction for installation work, not a camera topic. |
| municipalProgram.covers 3 (no fund, cap, waiting list or application found; confirm 619-515-3500) | ADAPTED | Section 2 (confirm number). |
| municipalProgram.doesNotCover 1 (Right-of-Way Permit) | USED | Section 2. |
| municipalProgram.doesNotCover 2-4 (inspection after trenching and final; licensed contractor for connections; Municipal Code plan approval) | LEFT OUT | Construction permitting, not camera inspection. On the location page. |
| municipalProgram.doesNotCover 5 (no City page on work confined to private property; Development Services 619-446-5242) | USED | Section 2. |
| municipalProgram.callout | ADAPTED | Section 2 (plan on arranging it yourself; no claim the City accepts an outside report; does not perform repairs). |
| municipalProgram.closing | LEFT OUT | A link. |
| secondOpinion (ledes, cta, steps, callout) | LEFT OUT | Belongs to the independent-inspection page; the independent point is the last sentence of section 2. |
| buyingGuide.lede (City: licensed-plumber report is a good idea; guidance not a requirement) | USED | Section 2. |
| buyingGuide.body (no rule found; state rules outside; connection in street, easement, canyon; Development Services; no diagrams of private lines) | USED | Sections 1 and 2. |
| buyingGuide.links, cta, agents | LEFT OUT | Shell-level. |
| nearbyAreas | LEFT OUT | Not rebuilt; existing handling unchanged. |
| FAQ 1 Who is responsible | USED | Merged FAQ via assembly (includes Council Policy 400-10 clearing of roots; the policy sentence is also in section 4). |
| FAQ 2 What number for a spill or odor | USED | Merged FAQ. |
| FAQ 3 Break or collapse beyond the property line | USED | Merged FAQ; section 3 restates it. |
| FAQ 4 Help with homeowner lateral costs | USED | Merged FAQ; section 2 restates it. |
| FAQ 5 Is a permit required; who can do the work | USED | Merged FAQ. |
| FAQ 6 Should I check the lateral before buying | USED | Merged FAQ; section 2 restates the City guidance. |
| FAQ 7 Can the City tell me where my lateral connects | USED | Merged FAQ; section 1. |
| FAQ 8 What is an EMRA | USED | Merged FAQ; section 4. |
| FAQ 9 What does a sewer camera inspection show | LEFT OUT | Skipped by the upgrade for camera-type pages (the service page answers it in full). |
| FAQ 10 Do you repair or replace | USED | Merged FAQ. |
| finalCta | LEFT OUT | Page-specific `cta` written. |
| sources (9 links, lastReviewed, closingNote; IBA review link) | USED | Passed through by the upgrade. |

## Sewer camera inspection service page (v2)

| Section / item | Status | Reason |
|---|---|---|
| seoTitle | LEFT OUT | Existing entry or shell title. |
| metaDescription | LEFT OUT | Page-specific version written. |
| serviceDescription | ADAPTED | Same definition, set in San Diego. |
| hero.intro (see inside the accessible line; scope sentence) | ADAPTED | Hero intro; scope statement in section 2 and the FAQ. |
| v2.hero.scope, cardTitle, navLabels, defaultServiceId, images | LEFT OUT | Template-level. |
| definition.answer (visual inspection; flexible cable; monitor; typically records) | ADAPTED | Hero intro and section 1 (video and written findings). |
| definition.supporting (does not repair; buying a home is a separate inspection from a home inspection) | ADAPTED | Section 2; the home-inspector sentence is carried by the buyer paragraph and the FAQ. |
| signals 1 Recurring clogs | USED | Problem card via assembly. |
| signals 2 Slow-draining sinks, tubs, toilets | USED | Problem card via assembly. |
| signals 3 Gurgling | LEFT OUT | Not used in a card. |
| signals 4 Sewage-like odors | LEFT OUT | Not used in a card. |
| signals 5 A sewage backup | USED | Problem card via assembly ("After a sewage backup"). |
| signals 6 Persistently wet areas near the sewer route | LEFT OUT | Not used in a card; the point that a camera shows the pipe, not the soil, is in section 4. |
| limits.intro, can (9 items) | ADAPTED | Blockage vs defect and location in section 2; full list in the FAQ "What can a sewer camera inspection show?" (USED). |
| limits.cannot (8 items) | ADAPTED | Waterline in section 3; slope and depth in section 4; where the pipe sits in the yard in section 1; the rest in the FAQ (USED). |
| limits.callout (a visibly clear line is not proof) | USED | Section 4. |
| limits.related (line locating is a separate service; not a survey) | ADAPTED | Section 1 (locating is separate). |
| process steps 1-5 and prep | USED | Process steps via assembly. Equipment names appear there only, as confirmed. |
| decision (cleaning and camera are separate; when cleaning may need to come first) | ADAPTED | Section 3 (a blocked line may need cleaning first). The rest in the FAQ "Should the line be cleaned before the camera goes in?" (USED). |
| comparison (6 rows) | LEFT OUT | Layout. |
| ask.items (video, written findings, access point, locating, coding) | ADAPTED | Video and written findings and distance along the line in section 1; the rest in inclusions via assembly. |
| ask.keep (keep the original video; compare estimates) | LEFT OUT | The FAQ "What should I keep after the inspection?" (USED) carries it. |
| evidence (4 example images) | LEFT OUT | Image mosaic. |
| audiences (home buyers, inspectors, agents) | LEFT OUT | Template-level. |
| markets | LEFT OUT | Template-level. |
| FAQ (23 questions) | USED | Merged by assembly, minus "Which areas does The Sewer Pros serve?". |
| request | LEFT OUT | Page-specific `cta` written. |

## Open fact questions

1. Section 3 calls 619-515-3525 what the City "calls its Sewer Emergency Line" and repeats the City's statement that it will investigate within 24 hours. The location page notes the City's pages do not label the number a 24-hour line. Section 3 does not call it 24-hour and attributes the 24-hour figure to the City's investigation commitment only. Confirm the owner is comfortable with the word "Emergency" appearing as the City's own name for the line.
2. Section 2 repeats the City's buyer guidance (a licensed-plumber report is a good idea). It is City guidance, labelled as not a requirement.
3. The Development Services as-built records number (619-446-5200) is not in the body; it remains on the location page and in the FAQ.
