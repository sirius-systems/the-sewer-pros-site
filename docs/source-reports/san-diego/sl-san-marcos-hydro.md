# Source report: San Marcos, CA + Hydro Jetting (`sl-san-marcos-hydro`)

Sources: local = `content/pages/san-diego-san-marcos.tsx` (`sanMarcosContent`, `loc-sd-san-marcos`); service = `content/pages/services.tsx`, `svc-hydro-jetting` `v2`; shared blocks in `service-location-shared.ts`.
Output: `content/pages/sl-sd-san-marcos-hydro.tsx` (`sanMarcosHydroContent`).
Legend: USED = verbatim or near-verbatim, ADAPTED = reworded or recombined, LEFT OUT = not on this page.

## The four body sections

| Body section | Local source | Service source |
|---|---|---|
| 1. Three agencies, so confirm yours before any jetting | responsibility answer, FAQ 1 and 3 | definition (accessible private line) |
| 2. Jetting is for the lateral Vallecitos says the owner maintains | responsibility cards/table, FAQ 2 | how jetting works (hose, nozzle, scours wall, moves debris); 'more water is not automatically better' pacing |
| 3. Rainwater gets into sewers, and jetting does not close the way in | systemExplainer rainwater and smoke-testing bullets | what jetting clears; does not fix cracked/offset/collapsed pipe or low spots |
| 4. Who installs, who repairs, and who to call for a spill | FAQ 4, 5, 6 (district does not install private connections; none found; no approvals statement), whoToCall (911, main number as the district's) | does not repair; closer evaluation before cleaning when structural defects are visible |

Page notes:
- No company phone on this page (as the Chula Vista hydro page).
- The 'not worth more water' pacing line is the service description, labelled as ours, not a finding about a property.
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
| responsibility answer, cards, table | ADAPTED | Owner/district split used in section 2; table row tied to this service. |
| systemExplainer (district not City; 284 miles, four lift stations) | LEFT OUT | Scale figures cover the whole district, not San Marcos; not tied to this service. Idea of a district, not the City, is carried in the body. |
| systemExplainer rainwater and smoke-testing bullets | ADAPTED | Section 3: rainwater and smoke testing; jetting clears buildup, does not seal an opening. |
| systemExplainer no combined/separate, no pipe age | LEFT OUT | Idea carried by 'none found' wording; no claim made. |
| systemExplainer card (what a camera shows) | LEFT OUT | Camera page only; FAQ carries it. |
| whoToCall Vallecitos (760) 744-0460, 911, O&M 24/7, (760) 745-2761 | ADAPTED | 911 and main number used in section 4, labelled the district's; O&M 24/7 and water-emergency number left out. |
| whoToCall company panel (phone, hours) | ADAPTED | LEFT OUT: no company phone on this page. |
| municipalProgram lede, covers, doesNotCover, whoCanApply, callout, closing | ADAPTED | Section 4 and the 4th card ('none found', approvals unknown, we do not repair); Ordinance 225 left out of the body. |
| secondOpinion | LEFT OUT | Repair-recommendation material. |
| buyingGuide (no sale rule found; as-built records) | ADAPTED | LEFT OUT; sale material carried in the FAQ. |
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
| A stoppage near the connection to the main (4th, location-driven) | ADAPTED | responsibility answer, FAQ 2 |
| Six inclusions | USED | `SERVICE_INCLUSIONS` |
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

- USED: What is hydro jetting?
- USED: How does hydro jetting work?
- USED: Can hydro jetting clear roots, grease, and debris?
- USED: Does it fix a cracked, offset, or collapsed pipe?
- USED: Is hydro jetting safe for old pipes?
- USED: Can hydro jetting cause a backup?
- USED: What can a camera not show?
- USED: Why are several drains slow at once?
- USED: Does a smell or gurgling mean the main line is clogged?
- USED: Are flushable wipes safe, and can hot water or additives dissolve grease?
- USED: What should I ask for and keep?
- USED: Do you offer same-day hydro jetting? (DEC-088 wording)
- USED: How long does hydro jetting take?
- USED: How much does it cost? (DEC-088 wording) (DEC-088 wording, carried as published)
- USED: How often should a line be jetted?
- USED: Do I need to prepare anything?
- USED: Will I get video or written findings?
- USED: Is hydro jetting better than snaking?
- USED: Should I get my line cleaned before buying or selling a home?
- USED: Can the line be located?
- USED: Can I jet my line myself?

Skips: None skipped. Cost and same-day answers carried as the service page publishes them (DEC-088, DEC-139).

relatedPageIds: loc-sd-san-marcos, svc-hydro-jetting, svc-sewer-cleaning, svc-sewer-camera-inspection.

## Facts to double-check

- Vallecitos numbers ((760) 744-0460 main; (760) 745-2761 water emergencies) are the district's, copied from `sanMarcosContent`; reconfirm before launch. The location page notes the district's pages show no current date.
- The City's page lists the third agency as "Rincon Diablo Water District"; the page uses the full name Rincon del Diablo Municipal Water District (as in the owner's brief and the location module). Confirm the name.
- Only Vallecitos wording exists on the location page. For Vista Irrigation District and Rincon del Diablo Municipal Water District the page states only the City's naming of them and says to ask that agency; no rule, number or boundary of theirs is claimed.
