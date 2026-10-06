# Source report: San Marcos, CA + Sewer Cleaning & Camera Inspection (`sl-san-marcos-cleaning-camera`)

Sources: local = `content/pages/san-diego-san-marcos.tsx` (`sanMarcosContent`, `loc-sd-san-marcos`); service = `content/pages/services.tsx`, `svc-sewer-cleaning-camera-inspection` `v2`; blocks in `content/pages/sl-blocks/`.
Output: `content/pages/sl-sd-san-marcos-cleaning-camera.tsx` (`sanMarcosCleaningCameraContent`).
Legend: USED = verbatim or near-verbatim, ADAPTED = reworded or recombined, LEFT OUT = not on this page.

## The four body sections

| Body section | Local source | Service source |
|---|---|---|
| 1. Footage shows where along the line, not where the district's main begins | responsibility answer/cards, FAQ 2; systemExplainer card closing (distance count, not the connection or district responsibility) | camera records distance from entry point |
| 2. Smoke testing checks the district's lines, and a clear video is not proof | systemExplainer smoke-testing bullet | before/after/both; camera cannot see under water; clear video is not proof (service FAQ) |
| 3. Three agencies, and the footage is your own record | FAQ 1 and 3 (City quote, three agencies, Engineering can say if a parcel is in boundary), buyingGuide/FAQ 8 (as-built records requests) | what you receive: video and written findings noting what could not be viewed |
| 4. No lateral program found, and no repair from us | municipalProgram doesNotCover, FAQ 4, 5, 6, whoToCall (911), company panel (phone) | does not repair; findings to compare a repair estimate |

Page notes:
- Company phone: USED via `marketOperatingDetail['san-diego-ca']` in section 4 (as the Chula Vista page); founding year left out.
- Agencies: all three named separately in section 3.
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
| responsibility answer, cards, table | ADAPTED | Owner/district split; table row 'Where an inspection helps' tied to footage. |
| systemExplainer (district not City; 284 miles, four lift stations) | LEFT OUT | Scale figures cover the whole district, not San Marcos; not tied to this service. Idea of a district, not the City, is carried in the body. |
| systemExplainer rainwater and smoke-testing bullets | ADAPTED | Section 2: district tests its own lines; a visit looks at yours. |
| systemExplainer no combined/separate, no pipe age | LEFT OUT | Idea carried by 'none found' wording; no claim made. |
| systemExplainer card (what a camera shows) | LEFT OUT | Camera page only; FAQ carries it. |
| whoToCall Vallecitos (760) 744-0460, 911, O&M 24/7, (760) 745-2761 | ADAPTED | 911 used in section 4; district numbers left out. |
| whoToCall company panel (phone, hours) | ADAPTED | Phone used in section 4. |
| municipalProgram lede, covers, doesNotCover, whoCanApply, callout, closing | ADAPTED | Section 4 and the 4th card ('none found', approvals unknown, we do not repair). |
| secondOpinion | LEFT OUT | Repair-recommendation material. |
| buyingGuide (no sale rule found; as-built records) | ADAPTED | ADAPTED: as-built records request used in section 3; sale rule material carried in the FAQ. |
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
| Three service cards | USED | `sl-blocks/sewer-cleaning-camera-inspection` |
| A cleaned line you want to see on video (4th, location-driven) | ADAPTED | responsibility answer, FAQ 2; systemExplainer card closing |
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
- USED: What does a sewer camera inspection show?
- USED: Do you repair or replace sewer lines?

Service page questions:

- USED: What are sewer cleaning and camera inspection?
- USED: What does a sewer camera inspection show?
- USED: Does the camera or the cleaning come first?
- USED: What is the difference between hydro jetting and cable cleaning?
- USED: Does a clear video mean my line is healthy?
- USED: Can a camera find a leak?
- USED: Can a camera tell whether my pipe is structurally sound?
- USED: Can a camera find roots, cracks, or a collapsed pipe?
- USED: What if the camera cannot get past a blockage?
- USED: Does hydro jetting damage pipes?
- USED: (wipes / flush question as the service page words it)
- USED: Do I get a copy of the video?
- USED: Will I get written findings?
- USED: Can you locate my sewer line, and how deep is it?
- USED: How long does it take, and how much does it cost? (DEC-088 wording) (DEC-088 wording, carried as published)
- USED: What are signs I may need cleaning or a camera inspection?
- USED: Should I have the sewer line looked at before buying a house?
- USED: Is a sewer scope part of a standard home inspection?
- USED: How often should a line be cleaned or inspected?
- USED: Can I flush "flushable" wipes?
- USED: Will a chemical drain cleaner solve a sewer backup?

Skips: location page 'What does a sewer camera inspection show?' is filtered out in code because the service page asks the same question with the fuller answer (it includes what a camera does not show); the service answer is kept.

relatedPageIds: loc-sd-san-marcos, svc-sewer-cleaning-camera-inspection, svc-sewer-camera-inspection, svc-sewer-cleaning.

## Facts to double-check

- Vallecitos numbers ((760) 744-0460 main; (760) 745-2761 water emergencies) are the district's, copied from `sanMarcosContent`; reconfirm before launch. The location page notes the district's pages show no current date.
- The City's page lists the third agency as "Rincon Diablo Water District"; the page uses the full name Rincon del Diablo Municipal Water District (as in the owner's brief and the location module). Confirm the name.
- Only Vallecitos wording exists on the location page. For Vista Irrigation District and Rincon del Diablo Municipal Water District the page states only the City's naming of them and says to ask that agency; no rule, number or boundary of theirs is claimed.
