# Source report: San Marcos, CA + Sewer Cleaning (`sl-san-marcos-cleaning`)

Sources: local = `content/pages/san-diego-san-marcos.tsx` (`sanMarcosContent`, `loc-sd-san-marcos`); service = `content/pages/services.tsx`, `svc-sewer-cleaning` `v2`; shared blocks in `service-location-shared.ts`.
Output: `content/pages/sl-sd-san-marcos-cleaning.tsx` (`sanMarcosCleaningContent`).
Legend: USED = verbatim or near-verbatim, ADAPTED = reworded or recombined, LEFT OUT = not on this page.

## The four body sections

| Body section | Local source | Service source |
|---|---|---|
| 1. The City says it is not the sewer provider, and names three agencies | responsibility answer, FAQ 1 and 3 (City quote, three agencies, no parcel map, Vallecitos Engineering can say if a parcel is in boundary) | definition (private-line cleaning) |
| 2. Where Vallecitos serves, the lateral is yours to maintain | responsibility cards/table, FAQ 2 (owner from building through connection; district maintains main; no statement on the part under a street) | definition supporting (private lines, not mains); does not locate the connection |
| 3. Rainwater and smoke testing concern the district's lines, not yours | systemExplainer rainwater and smoke-testing bullets | methods/limits (removes buildup; flowing line not proof); camera-before/after FAQ |
| 4. No lateral program found, and no repair from us | municipalProgram lede/doesNotCover, FAQ 4, 5, 6 (none found; Ordinance 225 is a main extension, not used by name; no permit claim), whoToCall (911), company panel (phone, founding year) | decision answer (does not repair), 'Why do my drains keep clogging' |

Page notes:
- Company phone and founding year: USED via `marketOperatingDetail['san-diego-ca']` (as the San Diego city and Chula Vista pages).
- Agencies: the City's three are named separately in section 1; Vallecitos wording in 2-4.
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
| responsibility answer, cards, table | ADAPTED | Owner/district split and lateral vs main; table row 'Where an inspection helps' tied to this service. |
| systemExplainer (district not City; 284 miles, four lift stations) | LEFT OUT | Scale figures cover the whole district, not San Marcos; not tied to this service. Idea of a district, not the City, is carried in the body. |
| systemExplainer rainwater and smoke-testing bullets | ADAPTED | Section 3: district's own testing is not an inspection of the lateral; cleaning does not close a crack. |
| systemExplainer no combined/separate, no pipe age | LEFT OUT | Idea carried by 'none found' wording; no claim made. |
| systemExplainer card (what a camera shows) | LEFT OUT | Camera page only; FAQ carries it. |
| whoToCall Vallecitos (760) 744-0460, 911, O&M 24/7, (760) 745-2761 | ADAPTED | 911 for a spill (district's website) used in section 4; district main number left out of this page; O&M 24/7 and the water-emergency number left out (not sewer-described). |
| whoToCall company panel (phone, hours) | ADAPTED | Phone and founding year used in section 4. |
| municipalProgram lede, covers, doesNotCover, whoCanApply, callout, closing | ADAPTED | Section 4 and the 4th card ('none found', approvals unknown, we do not repair); Ordinance 225 left out of the body (main extension, not lateral help; carried in the FAQ). |
| secondOpinion | LEFT OUT | Repair-recommendation material. |
| buyingGuide (no sale rule found; as-built records) | ADAPTED | LEFT OUT of the body; sale material carried in the FAQ. |
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
| Three service cards | USED | `SERVICE_PROBLEMS` |
| A clog and an unclear agency (4th, location-driven) | ADAPTED | responsibility answer, FAQ 1 and 3 |
| Six inclusions | USED | `SERVICE_INCLUSIONS` |
| Process steps | USED | `v2.process.steps` (confirmed equipment names appear only inside the steps) |
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

- USED: What is sewer cleaning?
- USED: What happens during a sewer cleaning visit?
- USED: What is the difference between hydro jetting and snaking?
- USED: Do you use a camera before or after cleaning?
- USED: Will hydro jetting damage my pipes?
- USED: Can a sewer camera always find the problem?
- USED: What happens if the camera cannot get through the line?
- USED: Can sewer cleaning fix a cracked, offset, or collapsed pipe?
- USED: Does a clean line mean the pipe is in good condition?
- USED: What access point do you use? Do you have to pull a toilet?
- USED: How long does sewer cleaning take, and how much does it cost? (DEC-088 wording, carried as published)
- USED: Will I get a video and written findings?
- USED: Why do my drains keep clogging after they were snaked?
- USED: How often should I have my sewer line cleaned?

Skips: None skipped.

relatedPageIds: loc-sd-san-marcos, svc-sewer-cleaning, svc-hydro-jetting, svc-sewer-cleaning-camera-inspection.

## Facts to double-check

- Vallecitos numbers ((760) 744-0460 main; (760) 745-2761 water emergencies) are the district's, copied from `sanMarcosContent`; reconfirm before launch. The location page notes the district's pages show no current date.
- The City's page lists the third agency as "Rincon Diablo Water District"; the page uses the full name Rincon del Diablo Municipal Water District (as in the owner's brief and the location module). Confirm the name.
- Only Vallecitos wording exists on the location page. For Vista Irrigation District and Rincon del Diablo Municipal Water District the page states only the City's naming of them and says to ask that agency; no rule, number or boundary of theirs is claimed.
