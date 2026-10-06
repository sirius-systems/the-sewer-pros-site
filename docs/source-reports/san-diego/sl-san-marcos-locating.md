# Source report: San Marcos, CA + Sewer Line Locating (`sl-san-marcos-locating`)

Sources: local = `content/pages/san-diego-san-marcos.tsx` (`sanMarcosContent`, `loc-sd-san-marcos`); service = `content/pages/services.tsx`, `svc-sewer-line-locating` `v2`; blocks in `content/pages/sl-blocks/`.
Output: `content/pages/sl-sd-san-marcos-locating.tsx` (`sanMarcosLocatingContent`).
Legend: USED = verbatim or near-verbatim, ADAPTED = reworded or recombined, LEFT OUT = not on this page.

## The four body sections

| Body section | Local source | Service source |
|---|---|---|
| 1. A locate shows the route, not which agency serves the parcel | responsibility answer, FAQ 1 and 3 | definition (estimate of the path; not a survey) |
| 2. One lateral per parcel, and a locate does not draw the parcel line | municipalProgram covers (each premise its own lateral; one lateral not for more than one APN), responsibility (owner through the connection) | access point (cleanout); does not tell condition, a camera does |
| 3. The district does not install private connections, and a locate is not a permit | FAQ 4 and 5 (contractor the owner selects, district inspects, new-connection plan check, fees, deposit; no approvals statement for existing laterals) | a locate is not a permit |
| 4. Before anyone digs, call the one-call program | municipalProgram callout (ask Engineering); none found | one-call wording verbatim from the service page; not clearance or permission to dig; landscaping/fence use |

Page notes:
- No company phone on this page (as the Chula Vista locating page).
- A locate is an estimate, not a survey, utility clearance or permission to dig; the page says it does not establish a parcel line, the connection to the main, or pipe condition.
- Never says which agency serves an address. The City's three agencies are named separately; Vallecitos wording is shown as the district's; nothing is claimed for the other two.
- All district numbers are labelled the district's. No dollar figure, date, permit rule or program term beyond what the location page states; "none found" is not "none exists".

## San Marcos location page, element by element

| Element | Status | Reason |
|---|---|---|
| seoTitle, metaDescription | ADAPTED | Page-specific for this service (<= 160 characters). |
| hero title/intro | ADAPTED | City-does-not-provide-sewer and Vallecitos owner-lateral facts tied to this service. |
| heroForm, serviceCards, helpBar, jumpNav | LEFT OUT | Shell supplies the form; location page navigation, not this content shape. |
| keyTakeaways 1 (three agencies) | USED | Hero and body section; each agency named separately, no claim which serves an address. |
| keyTakeaways 2 (Vallecitos owner lateral) | USED | Hero and body. |
| keyTakeaways 3 (none found: program, sale rule) | ADAPTED | 'None found' wording kept; body and card. |
| responsibility answer, cards, table | ADAPTED | Owner/district split; table row tied to this service. |
| systemExplainer (district not City; 284 miles, four lift stations) | LEFT OUT | Scale figures cover the whole district, not San Marcos; not tied to this service. Idea of a district, not the City, is carried in the body. |
| systemExplainer rainwater and smoke-testing bullets | LEFT OUT | Rainwater/smoke testing is about district system condition, not route finding. |
| systemExplainer no combined/separate, no pipe age | LEFT OUT | Idea carried by 'none found' wording; no claim made. |
| systemExplainer card (what a camera shows) | LEFT OUT | Camera page only; FAQ carries it. |
| whoToCall Vallecitos (760) 744-0460, 911, O&M 24/7, (760) 745-2761 | ADAPTED | District numbers and 911 left out of this page (carried in the FAQ). |
| whoToCall company panel (phone, hours) | ADAPTED | LEFT OUT: no company phone on this page. |
| municipalProgram lede, covers, doesNotCover, whoCanApply, callout, closing | ADAPTED | Sections 3-4 and the 4th card ('none found', approvals unknown, we do not repair). |
| secondOpinion | LEFT OUT | Repair-recommendation material. |
| buyingGuide (no sale rule found; as-built records) | ADAPTED | LEFT OUT; sale material carried in the FAQ (service sale question skipped for it). |
| nearbyAreas | ADAPTED | Coverage block: the six other San Diego locations (market link and own page left out). |
| finalCta | ADAPTED | New CTA for this page. |
| faq (10 questions) | USED | See FAQ. |
| sources | USED | Page carries `sanMarcosContent.sources` (undated pages; reviewed 2026-10-04; says to confirm with the agency). Body copy states no dates. |
| housingAge | N/A | The San Marcos location page has no housing-age section. |
| Image slots | ADAPTED | New per-page slots, neutral alt text, no place-specific photo claim. |

Fixed by the owner brief, not stated on the City page: 'San Marcos is a service area, not an office location.' (consistent with the location page, which states no office, address or map pin).

## Cards

| Card | Status | Source |
|---|---|---|
| Three service cards | USED | `sl-blocks/sewer-line-locating` |
| Planning a dig near the lateral (4th, location-driven) | ADAPTED | responsibility answer; FAQ 2; landscaping/fence use |
| Six inclusions | USED | `sl-blocks` |
| Process steps | USED | `v2.process.steps` |
| Coverage (six other San Diego locations) | ADAPTED | nearbyAreas; title 'Other San Diego area locations' |

## Service page (v2), element by element

| Element | Status | Reason |
|---|---|---|
| seoTitle, metaDescription | LEFT OUT | Market-neutral; new local meta written (<= 160 characters). |
| serviceDescription | ADAPTED | City of San Marcos added. |
| definition, signals, limits, decision | ADAPTED / USED | See body sections and cards. |
| process | USED | Steps verbatim. |
| methods, independent, ask, audiences, markets | LEFT OUT | Neutral material with no local tie. |
| related, cta | ADAPTED | New for this page. |

## FAQ

Location page questions (shown first, group 'In San Marcos'):

- USED: Who provides sewer service in San Marcos?
- USED: Is the sewer lateral the owner’s at a Vallecitos-served San Marcos property, and where does that end?
- USED: How do I find out which agency serves my San Marcos address?
- USED: Does Vallecitos Water District offer a lateral repair grant or reimbursement program?
- USED: Who installs a sewer lateral in the Vallecitos area, and is the work inspected?
- USED: Does repairing or replacing an existing lateral need a permit in San Marcos?
- USED: What should I do about a sewer spill or backup in the Vallecitos area?
- USED: Is a sewer inspection required when buying a San Marcos home?
- LEFT OUT: What does a sewer camera inspection show?
- USED: Do you repair or replace sewer lines?

Service page questions:

- USED: What is sewer line locating?
- USED: How does sewer line locating work?
- USED: What are a sonde, a receiver, and a cleanout?
- USED: Is sewer line locating the same as calling 811?
- USED: Do I need a camera inspection before locating?
- USED: Can you tell me exactly where my sewer line is?
- USED: Can sewer line locating determine the pipe's depth?
- USED: Can you locate every utility on my property?
- USED: Is a locate a survey, and does it mean I can dig?
- USED: Can a sewer camera see through water?
- USED: Can a sewer line be located under concrete or a driveway?
- USED: What if the camera cannot get through the line?
- USED: What access point do you use? Do you have to pull a toilet?
- USED: Will I get surface marks?
- USED: Will I get video and written findings?
- USED: How long does locating take, and how much does it cost? (DEC-088 wording) (DEC-088 wording, carried as published)
- USED: Can line locating help before landscaping or fence installation?
- LEFT OUT: If the line drains after cleaning, is the pipe healthy?
- LEFT OUT: Should I use chemical drain cleaner on a sewer line clog?
- USED: Can line locating help with sewer repair work?
- USED: How often should a sewer line be located or inspected?
- LEFT OUT: Does my city require a sewer inspection for a sale, remodel, or permit?
- USED: Should I have the line located before buying a house?

Skips: Four skipped, as on the Chula Vista and San Diego locating pages.
- Location page: 'What does a sewer camera inspection show?' (a camera question the locating page does not own).
- Service page: 'Does my city require a sewer inspection for a sale, remodel, or permit?' (the San Marcos sale question answers it for this city).
- Service page: 'Should I use chemical drain cleaner on a sewer line clog?' (off the locating topic).
- Service page: 'If the line drains after cleaning, is the pipe healthy?' (off the locating topic).

relatedPageIds: loc-sd-san-marcos, svc-sewer-line-locating, svc-sewer-camera-inspection, svc-pre-purchase-sewer-inspection.

## Facts to double-check

- Vallecitos numbers ((760) 744-0460 main; (760) 745-2761 water emergencies) are the district's, copied from `sanMarcosContent`; reconfirm before launch. The location page notes the district's pages show no current date.
- The City's page lists the third agency as "Rincon Diablo Water District"; the page uses the full name Rincon del Diablo Municipal Water District (as in the owner's brief and the location module). Confirm the name.
- Only Vallecitos wording exists on the location page. For Vista Irrigation District and Rincon del Diablo Municipal Water District the page states only the City's naming of them and says to ask that agency; no rule, number or boundary of theirs is claimed.
