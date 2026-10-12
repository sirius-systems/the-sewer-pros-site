# Shoot day schedule

Built from [image-shot-list.md](image-shot-list.md) and [photographer-shot-sheet.md](photographer-shot-sheet.md). Counts are from `scripts/count-placeholders.mjs` on the production build of Oct 12, 2026: **537 boxes on 162 pages** were still placeholders when this schedule was written; all are now wired and 0 remain.

The remaining 18 files are 16 real photographs (535 boxes) and 2 existing assets (2 boxes). Every file below is P1. Delivery size for 4:3 files is 1448 x 1086 px WebP; the one 16:9 file is 1600 x 900 px. Deliver the original RAW or full-size JPEG as well, with EXIF and GPS stripped from the WebP.

Sessions run in this order: truck and equipment, job site, property exterior, studio or desk. Within a session, files are ordered by boxes filled, highest first. "Cleared" is the running total of boxes filled after the file is delivered; "Remaining" starts at 537.

Delivering a file does not by itself remove a placeholder. After a photo is saved at its path, the slot in the page registry (or the template constant for IMG-05) still needs its `src` and `source` set. That wiring is a separate step.

## Status after wiring (Oct 12, 2026)

The new files were wired the same day: **0 boxes remain**. Every file in all four sessions and both existing assets is wired. IMG-12 (drain machine at a floor or tub drain) was held first for a readable "PF1500" label on the machine leg and was then wired, owner-approved as generated with the label, for this file only (DEC-144). Three files were inferred matches and need owner confirmation: IMG-07, IMG-11 and IMG-18. Full list in [image-shot-list.md](image-shot-list.md), section "Wiring status".

All 16 files above are generated images that are already wired (status column). Real photographs are an optional upgrade, IMG-05 first (178 boxes on 144 pages); owner decision DEC-145, Oct 12, 2026.

## Rules that apply to every frame

From the photographer sheet: no faces; no license plates; no readable house numbers, street names or addresses; no branded lettering, and no model names or spec plates on equipment; no customer property identifiers; no text overlays or watermarks and no addresses, dates or GPS on any monitor; no repair, excavation or replacement work in frame, and nothing that implies a local office, storefront or branch; do not present any frame as a finding about a real property.

## Session 1. Truck and equipment (4 files, 241 boxes)

Shoot at the truck, trailer or a bench. No customer property is needed, which makes this the first session to run. IMG-05 comes first because it clears 178 boxes on its own.

| # | File | Filename under `public/images/` | Ratio | Boxes filled | Pages that use it | Framing variants | Cleared | Remaining | Status |
|---|---|---|---|---|---|---|---|---|---|
| 1 | IMG-05 Technician reviewing footage at a monitor | `shared/equipment/the-sewer-pros-technician-reviewing-camera-footage-monitor-4x3.webp` | 4:3 | **178** | 154 | 4 | 178 | 359 | generated, wired, optional real-photo upgrade |
| 2 | IMG-10 Monitor showing a pipe interior | `shared/pipe-interiors/the-sewer-pros-monitor-showing-pipe-interior-4x3.webp` | 4:3 | 31 | 31 | 3 | 209 | 328 | generated, wired, optional real-photo upgrade |
| 3 | IMG-17 Jetter trailer at a curb | `shared/equipment/the-sewer-pros-jetter-trailer-at-curb-4x3.webp` | 4:3 | 16 | 16 | 3 | 225 | 312 | generated, wired, optional real-photo upgrade |
| 4 | IMG-20 Monitor beside a handheld locator receiver | `shared/equipment/the-sewer-pros-monitor-pipe-interior-beside-locator-receiver-4x3.webp` | 4:3 | 16 | 16 | 3 | 241 | 296 | generated, wired, optional real-photo upgrade |

Session total: 241 boxes, 13 framing variants.

IMG-05 fills **178 boxes**: 34 card and problem images, plus the services-section image on all 144 service + location pages (shared slot `slc-services-section`). Capture its four variants: over the shoulder with the monitor in the right half, profile with the monitor in front, hands-and-monitor crop with the face out of frame, and a residential setting (technician and monitor at the side of a house or in a yard, house softly blurred behind, no house number or identifiable home). The residential-setting frame is the one the services-section slot needs. Shoot more than one frame of it.

Session notes: IMG-17 needs the plate cropped or removed on the trailer and tow vehicle. IMG-10 and IMG-20 monitors must show ordinary pipe with no address, date or GPS overlay.

## Session 2. Job site (6 files, 130 boxes) (customer permission needed first)

Real jobs only. Do not start this session until the checklist below is complete for every property.

| # | File | Filename under `public/images/` | Ratio | Boxes filled | Pages that use it | Framing variants | Cleared | Remaining | Status |
|---|---|---|---|---|---|---|---|---|---|
| 5 | IMG-08 Cable or hose entering a cleanout | `shared/cleanouts/the-sewer-pros-cleaning-cable-entering-cleanout-close-up-4x3.webp` | 4:3 | 33 | 33 | 3 | 274 | 263 | generated, wired, optional real-photo upgrade |
| 6 | IMG-12 Drain machine at a floor or tub drain | `shared/equipment/the-sewer-pros-drain-machine-at-floor-drain-4x3.webp` | 4:3 | 24 | 24 | 3 | 298 | 239 | generated, wired, optional real-photo upgrade |
| 7 | IMG-13 Jetting nozzle and hose at the line | `shared/equipment/the-sewer-pros-jetting-nozzle-hose-at-sewer-line-4x3.webp` | 4:3 | 24 | 24 | 3 | 322 | 215 | generated, wired, optional real-photo upgrade |
| 8 | IMG-14 Camera head entering a cleanout | `shared/equipment/the-sewer-pros-camera-head-push-cable-entering-cleanout-4x3.webp` | 4:3 | 24 | 16 | 3 | 346 | 191 | generated, wired, optional real-photo upgrade |
| 9 | IMG-15 Cleaning machine and cable at a cleanout | `shared/equipment/the-sewer-pros-cleaning-machine-cable-at-cleanout-4x3.webp` | 4:3 | 24 | 24 | 3 | 370 | 167 | generated, wired, optional real-photo upgrade |
| 10 | IMG-23 Recurring backup hero: technician at an exterior cleanout | `services/recurring-sewer-backup-diagnosis/the-sewer-pros-recurring-sewer-backup-diagnosis-hero-cleanout-16x9.webp` | 16:9 | 1 | 1 | 3 | 371 | 166 | generated, wired, optional real-photo upgrade |

Session total: 130 boxes, 18 framing variants.

Session notes: IMG-23 is wide 16:9 (1600 x 900), the technician at an exterior cleanout with the camera reel and monitor on the ground, natural light, home soft in the background. After it is delivered, the recurring-backup page also needs its hero path set again in `content/pages/services.tsx` (the commented TODO left in `aa7f6ec`). IMG-12, IMG-13 and IMG-14 are close-ups, so a basement or utility room can be used if the exterior is not available.

### Permission and privacy checklist (job site session)

- [ ] Written permission from the property owner or occupant for each property, kept on file.
- [ ] Permission covers use of the photographs on the public website and marketing.
- [ ] Tell the customer which parts of the property will be photographed; keep to the cleanout, equipment and work area.
- [ ] No people in frame, or only a technician from behind or cropped at the chin; no children.
- [ ] No faces, license plates, house numbers, street names, mailbox numbers or addresses visible, including reflections and paperwork.
- [ ] Nothing that identifies the customer: names, documents, vehicles in the driveway, distinctive landscaping, "for sale" signs, real-estate branding.
- [ ] Cover or crop truck, trailer, uniform and equipment lettering and spec plates.
- [ ] Monitors show ordinary pipe only: no address, date, GPS or overlay text, and no finding about the property.
- [ ] No repair, excavation or replacement work in frame.
- [ ] Do not label any frame as a finding on that property; these are examples.
- [ ] Strip EXIF and GPS before delivery, and keep the originals in a private folder.
- [ ] Keep releases with the originals, not in the delivered folder.

## Session 3. Property exterior (3 files, 99 boxes)

Needs a property for the exterior, a for-sale property for IMG-04, and a customer, owner or buyer stand-in for IMG-07. Apply the job-site checklist to each property.

| # | File | Filename under `public/images/` | Ratio | Boxes filled | Pages that use it | Framing variants | Cleared | Remaining | Status |
|---|---|---|---|---|---|---|---|---|---|
| 11 | IMG-04 Technician at a for-sale property starting a scope | `shared/residential/the-sewer-pros-technician-for-sale-property-starting-sewer-scope-4x3.webp` | 4:3 | 41 | 33 | 3 | 412 | 125 | generated, wired, optional real-photo upgrade |
| 12 | IMG-07 Technician reviewing findings with the owner or buyer | `shared/residential/the-sewer-pros-technician-reviewing-findings-with-property-owner-4x3.webp` | 4:3 | 33 | 33 | 3 | 445 | 92 | generated, wired, optional real-photo upgrade |
| 13 | IMG-11 Technician with a locator receiver in a yard | `shared/equipment/the-sewer-pros-technician-locator-receiver-yard-paint-marks-4x3.webp` | 4:3 | 25 | 25 | 3 | 470 | 67 | generated, wired, optional real-photo upgrade |

Session total: 99 boxes, 9 framing variants.

Session notes: IMG-04 must not show a "for sale" sign or agent branding; clipboard visible, face not identifiable. IMG-07 needs faces not identifiable. IMG-11 needs paint marks on pavement and no identifiable address.

## Session 4. Studio or desk (3 files, 65 boxes)

Indoors, with redacted material. No customer is on site.

| # | File | Filename under `public/images/` | Ratio | Boxes filled | Pages that use it | Framing variants | Cleared | Remaining | Status |
|---|---|---|---|---|---|---|---|---|---|
| 14 | IMG-06 Monitor or tablet with report and video | `shared/pipe-interiors/the-sewer-pros-tablet-inspection-video-beside-written-findings-4x3.webp` | 4:3 | 34 | 34 | 3 | 504 | 33 | generated, wired, optional real-photo upgrade |
| 15 | IMG-18 Report handed to an agent | `shared/residential/the-sewer-pros-inspection-report-handed-to-agent-4x3.webp` | 4:3 | 16 | 16 | 3 | 520 | 17 | generated, wired, optional real-photo upgrade |
| 16 | IMG-21 Camera still with distance counter | `shared/pipe-interiors/the-sewer-pros-camera-footage-still-distance-counter-4x3.webp` | 4:3 | 15 | 15 | 3 | 535 | 2 | generated, wired, optional real-photo upgrade |

Session total: 65 boxes, 9 framing variants.

Session notes: IMG-06 uses a real report with address and customer details redacted. IMG-18 is hands only, redacted. IMG-21 uses a real camera still with the distance counter visible; keep the owner's consent on file for the source footage.

## Session totals

| Session | Files | Boxes cleared | Framing variants | Remaining after |
|---|---|---|---|---|
| 1. Truck and equipment | 4 | 241 | 13 | 296 |
| 2. Job site | 6 | 130 | 18 | 166 |
| 3. Property exterior | 3 | 99 | 9 | 67 |
| 4. Studio or desk | 3 | 65 | 9 | 2 |
| **Real-photo total** | **16** | **535** | **49** | **2** |
| Existing assets (below) | 2 | 2 | 0 | **0** |
| **All** | **18** | **537** | **49** | **0** |

Check: 241 + 130 + 99 + 65 = 535; 535 + 2 = 537.

## Existing assets (no shoot)

Both fill the recurring-backup page. They are example frames, never findings on a specific property. Keep the "Example:" caption wording on the page.

| File | Target path under `public/images/` | Source file | Steps | Ratio | Boxes | Cleared | Remaining |
|---|---|---|---|---|---|---|---|
| IMG-24 Camera frame showing root intrusion | `services/recurring-sewer-backup-diagnosis/the-sewer-pros-recurring-sewer-backup-diagnosis-causes-root-footage-4x3.webp` | `services/sewer-camera-inspection/the-sewer-pros-sewer-camera-root-intrusion-pipe-joint-4x3.webp` (exists) | Copy the source file to the target path (or repoint the recurring slot to the source path). Set `src` and `source` on the slot in `data/business/recurring-images.ts`. Alt text: "Sewer camera view down a pipe with tree roots hanging into the pipe near a joint at the upper right". | 4:3, no change | 1 | 536 | 1 |
| IMG-25 Camera frame showing standing water | `services/recurring-sewer-backup-diagnosis/the-sewer-pros-recurring-sewer-backup-diagnosis-limits-waterline-footage-4x3.webp` | `services/sewer-camera-inspection/the-sewer-pros-sewer-camera-footage-standing-water-in-pipe-example-4x3.webp` (exists) | Either crop the source to 7:4 and save it at the target path, or change the recurring slot to 4:3 and use a `-4x3` path. Then set `src` and `source` on the slot. Alt text: "Sewer camera view down a pipe with water pooled along the bottom of the pipe". | 4:3 (slot changed from 7:4, done)  | 1 | 537 | **0** |

Ratio change for IMG-25 (done Oct 12, 2026): the slot was changed from 7:4 to 4:3 and the file renamed to end in `-4x3`, so the existing 4:3 frame is used without cropping.

## Final boxes-remaining

537 at the start (when this schedule was written); 2 after all 16 real-photo files; **0** after the 2 existing assets. This is the running total only; the actual figure falls when each delivered file is wired into its slot and the site is rebuilt. Re-run `scripts/count-placeholders.mjs` on the build to confirm.
