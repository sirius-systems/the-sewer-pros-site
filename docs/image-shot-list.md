# Image shot list

Source: [docs/image-placeholder-inventory.md](image-placeholder-inventory.md) (785 placeholder boxes on 162 pages). Every box was mapped from its shot brief to one reusable image. 26 distinct shots (30 files once the street and older-home shots are split by market) fill all 785 boxes.

## Equipment in the 12 renders

The equipment shown in the 12 render images is owner-approved (Oct 12, 2026). The briefs below no longer say "must not show equipment" for those files. The alt text in each render brief matches the alt text in the code (the location hub registries, `content/pages/service-location-shared.ts` and `data/business/preventative-images.ts`).

## Decisions to confirm

1. **Launch cohort is my assumption.** `docs/04-master-page-build-list.md` lists all 162 affected pages as built and indexable and defines no launch cohort. I prioritized by the market order in CLAUDE.md (St. Louis has the established business profile): **P1** = any image used on a St. Louis page or a core service page, **P2** = used on San Diego pages but no St. Louis page, **P3** = Las Vegas only. Universal images are P1 because they also unlock the other markets.
2. **Photo versus render.** The repo rule (`public/images/services/sewer-camera-inspection/README.md`, `lib/image-slots.ts`) is that anything showing crew, equipment, footage, customers or reports must be a real job photo. I marked those "Real photo needed". Fixtures and scenery with none of those (street, cleanout cap, sinks, floor drain, older home, fence line) are marked "Photorealistic render", matching the owner-approved rendered scenes already on the site. If you want real photos for those too, the real-photo count rises.
3. **Market-specific shots.** `public/images/README.md` says not to reuse one market's photo as another's, so the street and older-home shots are split into three per-market images. Everything else is framed tight (equipment, fixtures, monitors) so it can be universal.
4. **Filenames** follow `the-sewer-pros-<subject>-<ratio>.webp`, under the existing `public/images/shared/<subfolder>/` layout (equipment, pipe-interiors, cleanouts, residential, and one mixed-use folder) from `public/images/README.md`. Each slot's registry entry must then be pointed at the new file (set `src` and `source`); the two core service pages already reference specific paths.

## Shot list

| ID | Filename (under public/images/) | Ratio | Subject | Reuse scope | Slots filled | Where (registries and slot ids) | Type | Priority |
|---|---|---|---|---|---|---|---|---|
| IMG-01 | shared/cleanouts/the-sewer-pros-floor-drain-cleanout-access-4x3.webp | 4:3 | Floor drain with cleanout access nearby. Nothing graphic. *Fixture scene; the equipment shown is owner-approved (Oct 12, 2026).* | universal | 87 | 8 on location hubs (IMAGE_SLOTS in content/pages/<market>-<city>.tsx); 79 on service + location pages (pageImageSlots in content/pages/sl-*.tsx). Ids: sl-*-problem-1, sl-*-problem-3, svc-backup | Photorealistic render | P1 |
| IMG-02 | shared/cleanouts/the-sewer-pros-capped-exterior-cleanout-base-of-house-4x3.webp | 4:3 | Capped exterior cleanout at the base of a house. No identifiers. *The one "building" variant (Mission Valley) can use the same image.* | universal | 65 | 16 on location hubs (IMAGE_SLOTS in content/pages/<market>-<city>.tsx); 48 on service + location pages (pageImageSlots in content/pages/sl-*.tsx); 1 on core service pages (data/business/*-images.ts). Ids: call-cleanout, preventative-sewer-maintenance-prep-cleanout-4x3.webp, sl-*-problem-1, sl-*-problem-2, sl-*-problem-3 | Photorealistic render | P1 |
| IMG-03 | shared/residential/the-sewer-pros-st-louis-residential-street-manhole-curb-4x3.webp | 4:3 | Ordinary residential street with a manhole cover and curb. No identifiable homes, addresses or plates. *Environment only. Shoot or render it so the street looks like that market.* | per market (St. Louis) | 50 | 5 on location hubs (IMAGE_SLOTS in content/pages/<market>-<city>.tsx); 45 on service + location pages (pageImageSlots in content/pages/sl-*.tsx). Ids: sl-*-problem-4, system-street | Photorealistic render | P1 |
| IMG-04 | shared/residential/the-sewer-pros-technician-for-sale-property-starting-sewer-scope-4x3.webp | 4:3 | Technician at a for-sale property starting a pre-purchase sewer scope, clipboard visible. Covers three near-identical shot wordings. *Crew in frame, so real job photo. Frame tight so no region is identifiable.* | universal | 41 | 24 on location hubs (IMAGE_SLOTS in content/pages/<market>-<city>.tsx); 17 on service + location pages (pageImageSlots in content/pages/sl-*.tsx). Ids: buy-buyer, sl-*-problem-2, sl-*-problem-3, svc-prepurchase | Real photo needed | P1 |
| IMG-05 | shared/equipment/the-sewer-pros-technician-reviewing-camera-footage-monitor-4x3.webp | 4:3 | Technician reviewing sewer camera footage on a monitor, crew behind. Also serves "monitor showing a cleaned pipe with crew behind" and "crew member recording a post-cleaning camera pass". *Crew in frame, so real job photo.* | universal | 34 | 16 on location hubs (IMAGE_SLOTS in content/pages/<market>-<city>.tsx); 16 on service + location pages (pageImageSlots in content/pages/sl-*.tsx); 2 on core service pages (data/business/*-images.ts). Ids: preventative-sewer-maintenance-explainer-review-4x3.webp, recurring-sewer-backup-diagnosis-explainer-monitor-4x3.webp, sl-*-problem-1, svc-cleaning-camera, svc-maintenance | Real photo needed | P1 |
| IMG-06 | shared/pipe-interiors/the-sewer-pros-tablet-inspection-video-beside-written-findings-4x3.webp | 4:3 | Monitor or tablet with the inspection video beside the written findings. Address and customer details redacted. *Real report, redacted. An existing camera-page asset of this kind is in place.* | universal | 34 | 16 on location hubs (IMAGE_SLOTS in content/pages/<market>-<city>.tsx); 16 on service + location pages (pageImageSlots in content/pages/sl-*.tsx); 2 on core service pages (data/business/*-images.ts). Ids: preventative-sewer-maintenance-records-video-and-findings-4x3.webp, recurring-sewer-backup-diagnosis-records-video-and-findings-4x3.webp, sl-*-problem-3, so-document | Real photo needed | P1 |
| IMG-07 | shared/residential/the-sewer-pros-technician-reviewing-findings-with-property-owner-4x3.webp | 4:3 | Technician and property owner or buyer reviewing findings. Faces not identifiable. Covers buyer, homeowner and owner wordings. *Customer in frame: real photo with a release or posed with consenting staff.* | universal | 33 | 16 on location hubs (IMAGE_SLOTS in content/pages/<market>-<city>.tsx); 17 on service + location pages (pageImageSlots in content/pages/sl-*.tsx). Ids: sl-*-problem-2, sl-*-problem-3, so-decide | Real photo needed | P1 |
| IMG-08 | shared/cleanouts/the-sewer-pros-cleaning-cable-entering-cleanout-close-up-4x3.webp | 4:3 | Cleaning cable or hose entering an open cleanout, close up. *Shows equipment in use, so real job photo.* | universal | 33 | 32 on service + location pages (pageImageSlots in content/pages/sl-*.tsx); 1 on core service pages (data/business/*-images.ts). Ids: recurring-sewer-backup-diagnosis-process-cleanout-access-4x3.webp, sl-*-problem-2 | Real photo needed | P1 |
| IMG-09 | shared/residential/the-sewer-pros-bathroom-sink-and-tub-4x3.webp | 4:3 | Bathroom sink and tub side by side, one draining slowly. No people. Covers two near-identical wordings. *Environment only.* | universal | 32 | 32 on service + location pages (pageImageSlots in content/pages/sl-*.tsx). Ids: sl-*-problem-1, sl-*-problem-2 | Photorealistic render | P1 |
| IMG-10 | shared/pipe-interiors/the-sewer-pros-monitor-showing-pipe-interior-4x3.webp | 4:3 | Camera monitor showing a pipe interior. Nothing graphic. *Footage, so real job photo with property details removed.* | universal | 31 | 31 on service + location pages (pageImageSlots in content/pages/sl-*.tsx). Ids: sl-*-problem-2 | Real photo needed | P1 |
| IMG-11 | shared/equipment/the-sewer-pros-technician-locator-receiver-yard-paint-marks-4x3.webp | 4:3 | Technician with a locator receiver in a yard, paint marks on pavement. No identifiable address. *Real job photo.* | universal | 25 | 8 on location hubs (IMAGE_SLOTS in content/pages/<market>-<city>.tsx); 16 on service + location pages (pageImageSlots in content/pages/sl-*.tsx); 1 on core service pages (data/business/*-images.ts). Ids: recurring-sewer-backup-diagnosis-process-locate-receiver-4x3.webp, sl-*-problem-1, svc-locating | Real photo needed | P1 |
| IMG-12 | shared/equipment/the-sewer-pros-drain-machine-at-floor-drain-4x3.webp | 4:3 | Drain machine at a floor or tub drain. Equipment is a plain mention only; no brand or specs in the alt text. *Real job photo.* | universal | 24 | 8 on location hubs (IMAGE_SLOTS in content/pages/<market>-<city>.tsx); 16 on service + location pages (pageImageSlots in content/pages/sl-*.tsx). Ids: sl-*-problem-3, svc-drain | Real photo needed | P1 |
| IMG-13 | shared/equipment/the-sewer-pros-jetting-nozzle-hose-at-sewer-line-4x3.webp | 4:3 | Jetting nozzle and hose at the line. *Real job photo.* | universal | 24 | 8 on location hubs (IMAGE_SLOTS in content/pages/<market>-<city>.tsx); 16 on service + location pages (pageImageSlots in content/pages/sl-*.tsx). Ids: sl-*-problem-1, svc-jetting | Real photo needed | P1 |
| IMG-14 | shared/equipment/the-sewer-pros-camera-head-push-cable-entering-cleanout-4x3.webp | 4:3 | Camera head and push cable entering a cleanout, close up. *Real job photo.* | universal | 24 | 24 on location hubs (IMAGE_SLOTS in content/pages/<market>-<city>.tsx). Ids: so-inspect, svc-camera | Real photo needed | P1 |
| IMG-15 | shared/equipment/the-sewer-pros-cleaning-machine-cable-at-cleanout-4x3.webp | 4:3 | Cleaning machine and cable or hose at a cleanout. *Real job photo.* | universal | 24 | 8 on location hubs (IMAGE_SLOTS in content/pages/<market>-<city>.tsx); 16 on service + location pages (pageImageSlots in content/pages/sl-*.tsx). Ids: sl-*-problem-1, svc-cleaning | Real photo needed | P1 |
| IMG-16 | shared/residential/the-sewer-pros-kitchen-sink-slow-drain-4x3.webp | 4:3 | Kitchen sink with a slow drain. No people. *Environment only.* | universal | 16 | 16 on service + location pages (pageImageSlots in content/pages/sl-*.tsx). Ids: sl-*-problem-1 | Photorealistic render | P1 |
| IMG-17 | shared/equipment/the-sewer-pros-jetter-trailer-at-curb-4x3.webp | 4:3 | Trailer-mounted jetter at a curb, no plate. *Real job photo; blur plate and address.* | universal | 16 | 16 on service + location pages (pageImageSlots in content/pages/sl-*.tsx). Ids: sl-*-problem-2 | Real photo needed | P1 |
| IMG-18 | shared/residential/the-sewer-pros-inspection-report-handed-to-agent-4x3.webp | 4:3 | Report handed to a real estate agent. Hands only, redacted. *Report shown, so real photo with details redacted.* | universal | 16 | 16 on location hubs (IMAGE_SLOTS in content/pages/<market>-<city>.tsx). Ids: buy-agent | Real photo needed | P1 |
| IMG-19 | shared/residential/the-sewer-pros-fence-line-planting-beds-possible-dig-area-4x3.webp | 4:3 | Fence line and planting beds where digging might be planned. Nothing identifiable. *Environment only.* | universal | 16 | 16 on service + location pages (pageImageSlots in content/pages/sl-*.tsx). Ids: sl-*-problem-2 | Photorealistic render | P1 |
| IMG-20 | shared/equipment/the-sewer-pros-monitor-pipe-interior-beside-locator-receiver-4x3.webp | 4:3 | Monitor showing a pipe interior next to a handheld locator receiver. *Real job photo.* | universal | 16 | 16 on service + location pages (pageImageSlots in content/pages/sl-*.tsx). Ids: sl-*-problem-3 | Real photo needed | P1 |
| IMG-21 | shared/pipe-interiors/the-sewer-pros-camera-footage-still-distance-counter-4x3.webp | 4:3 | Real camera still with the distance counter visible. Owner consent on file. *St. Louis City already has one in place (`program-footage`); the other 15 pages need it.* | universal (one still, any market page; consent on file) | 15 | 15 on location hubs (IMAGE_SLOTS in content/pages/<market>-<city>.tsx). Ids: program-footage | Real photo needed | P1 |
| IMG-22 | shared/residential/the-sewer-pros-st-louis-older-home-visible-cleanout-4x3.webp | 4:3 | Older home with the cleanout visible. No identifiable address. *Environment only. Match the market's housing look.* | per market (St. Louis) | 5 | 5 on service + location pages (pageImageSlots in content/pages/sl-*.tsx). Ids: sl-*-problem-1 | Photorealistic render | P1 |
| IMG-23 | services/recurring-sewer-backup-diagnosis/the-sewer-pros-recurring-sewer-backup-diagnosis-hero-cleanout-16x9.webp | 16:9 | Technician at an exterior cleanout with camera reel and monitor set up at a residential property. *Page-unique. The page already points at this exact path, and the file is missing (broken hero).* | page-unique | 1 | 1 on core service pages (data/business/*-images.ts). Ids: recurring-sewer-backup-diagnosis-hero-cleanout-16x9.webp | Real photo needed | P1 |
| IMG-24 | services/recurring-sewer-backup-diagnosis/the-sewer-pros-recurring-sewer-backup-diagnosis-causes-root-footage-4x3.webp | 4:3 | Real frame from inspection video showing visible root intrusion at a joint or crack. No identifiers. *Existing: `services/sewer-camera-inspection/the-sewer-pros-sewer-camera-root-intrusion-pipe-joint-4x3.webp`. Copy or repoint, if you accept reusing it.* | page-unique | 1 | 1 on core service pages (data/business/*-images.ts). Ids: recurring-sewer-backup-diagnosis-causes-root-footage-4x3.webp | Existing asset | P1 |
| IMG-25 | services/recurring-sewer-backup-diagnosis/the-sewer-pros-recurring-sewer-backup-diagnosis-limits-waterline-footage-7x4.webp | 7:4 | Real frame showing standing water in a line, where the waterline limits the view. *Existing 4:3 asset: `services/sewer-camera-inspection/the-sewer-pros-sewer-camera-footage-standing-water-in-pipe-example-4x3.webp`. The slot wants 7:4, so crop or change the slot ratio.* | page-unique | 1 | 1 on core service pages (data/business/*-images.ts). Ids: recurring-sewer-backup-diagnosis-limits-waterline-footage-7x4.webp | Existing asset | P1 |
| IMG-26 | shared/residential/the-sewer-pros-san-diego-residential-street-manhole-curb-4x3.webp | 4:3 | Ordinary residential street with a manhole cover and curb. No identifiable homes, addresses or plates. *Environment only. Shoot or render it so the street looks like that market.* | per market (San Diego) | 65 | 6 on location hubs (IMAGE_SLOTS in content/pages/<market>-<city>.tsx); 59 on service + location pages (pageImageSlots in content/pages/sl-*.tsx). Ids: sl-*-problem-4, system-street | Photorealistic render | P2 |
| IMG-27 | shared/residential/the-sewer-pros-san-diego-older-home-visible-cleanout-4x3.webp | 4:3 | Older home with the cleanout visible. No identifiable address. *Environment only. Match the market's housing look.* | per market (San Diego) | 7 | 7 on service + location pages (pageImageSlots in content/pages/sl-*.tsx). Ids: sl-*-problem-1 | Photorealistic render | P2 |
| IMG-28 | shared/commercial/the-sewer-pros-san-diego-commercial-street-manhole-curb-4x3.webp | 4:3 | Ordinary mixed-use street, manhole and curb. No business names or identifiable buildings. *Used only by Mission Valley.* | page-unique (Mission Valley) | 5 | 1 on location hubs (IMAGE_SLOTS in content/pages/<market>-<city>.tsx); 4 on service + location pages (pageImageSlots in content/pages/sl-*.tsx). Ids: sl-*-problem-4, system-street | Photorealistic render | P2 |
| IMG-29 | shared/residential/the-sewer-pros-las-vegas-residential-street-manhole-curb-4x3.webp | 4:3 | Ordinary residential street with a manhole cover and curb. No identifiable homes, addresses or plates. *Environment only. Shoot or render it so the street looks like that market.* | per market (Las Vegas) | 40 | 4 on location hubs (IMAGE_SLOTS in content/pages/<market>-<city>.tsx); 36 on service + location pages (pageImageSlots in content/pages/sl-*.tsx). Ids: sl-*-problem-4, system-street | Photorealistic render | P3 |
| IMG-30 | shared/residential/the-sewer-pros-las-vegas-older-home-visible-cleanout-4x3.webp | 4:3 | Older home with the cleanout visible. No identifiable address. *Environment only. Match the market's housing look.* | per market (Las Vegas) | 4 | 4 on service + location pages (pageImageSlots in content/pages/sl-*.tsx). Ids: sl-*-problem-1 | Photorealistic render | P3 |

## Totals

- Unique image files: **30** (covering 26 distinct shots).
- Real photos needed: **16** (fill 391 boxes).
- Photorealistic render: **12** (fill 392 boxes).
- Existing asset can be reused or repointed: **2** (fill 2 boxes).
- Boxes covered: 785.

| Priority | Images | Boxes filled |
|---|---|---|
| P1 | 25 | 664 |
| P2 | 3 | 77 |
| P3 | 2 | 44 |

## Reconciliation against the inventory

Every one of the 785 boxes in [image-placeholder-inventory.md](image-placeholder-inventory.md) is assigned to exactly one of the 30 files. The generator that wrote this page assigns each box once while walking the built pages, then asserts the per-file, per-type and per-priority sums all equal 785 and equal the inventory's page-by-page total.

| Check | Result |
|---|---|
| Boxes in inventory | 785 |
| Boxes assigned to a file | 785 |
| Boxes listed as "draws nothing" | 0 (those are slots, not boxes; see below) |
| Boxes unassigned | 0 |
| Boxes double-counted | 0 |
| Boxes dropped | 0 |
| Files | 30 |
| Sum by type | 391 + 392 + 2 = 785 |
| Sum by priority | 664 + 77 + 44 = 785 |

**What was wrong before.** The tables in the previous version of this page were correct. The summary I gave in chat was not: it quoted 383, 381 and 2 boxes by type (sum 766), 515 / 77 / 44 by priority (sum 636), "24 distinct shots" and 4 P2 files. The real figures are the ones below. Nothing was double-counted or dropped in the file; the chat figures were simply misreported.

### Totals by type and priority

| Type | Files | Boxes |
|---|---|---|
| Real photo needed | 16 | 391 |
| Photorealistic render | 12 | 392 |
| Existing asset, reuse or repoint | 2 | 2 |
| **Total** | **30** | **785** |

| Priority | Files | Boxes |
|---|---|---|
| P1 | 25 | 664 |
| P2 | 3 | 77 |
| P3 | 2 | 44 |
| **Total** | **30** | **785** |

### Where the files merge several shot wordings

No box is counted twice. These files absorb more than one wording of the same shot, which is how 44 inventory wordings become 26 shots and 30 files. If you disagree with a merge, split it and add one file.

| Boxes | Shot wording in the inventory | File |
|---|---|---|
| 155 | Ordinary residential street, manhole and curb, no identifiable homes | IMG-03, IMG-26, IMG-29 |
| 87 | Floor drain with cleanout access, nothing graphic | IMG-01 |
| 47 | Exterior cleanout cap at the base of a house | IMG-02 |
| 32 | Cable or hose entering a cleanout, close up | IMG-08 |
| 31 | Monitor with a pipe interior, nothing graphic | IMG-10 |
| 24 | Drain machine at a floor or tub drain | IMG-12 |
| 24 | Jetting nozzle and hose at the line | IMG-13 |
| 17 | Technician at a for-sale property starting a pre-purchase scope | IMG-04 |
| 16 | Kitchen sink with a slow drain, no people | IMG-16 |
| 16 | Bathroom sink and tub side by side, no people | IMG-09 |
| 16 | Jetter trailer at a curb, no plate | IMG-17 |
| 16 | Camera head entering a cleanout, close up | IMG-14 |
| 16 | Monitor or tablet with the report open beside it, address redacted | IMG-06 |
| 16 | Report handed to an agent, hands only, redacted | IMG-18 |
| 16 | Older home, cleanout visible, no identifiable address | IMG-22, IMG-27, IMG-30 |
| 16 | Technician at a for-sale property starting a scope | IMG-04 |
| 16 | Technician and buyer reviewing findings, faces not identifiable | IMG-07 |
| 16 | Technician reviewing sewer camera footage on a monitor | IMG-05 |
| 16 | Capped exterior cleanout at a residential property, no identifiers | IMG-02 |
| 16 | Monitor or tablet showing inspection video beside written findings, customer details removed | IMG-06 |
| 16 | Cleaning machine and cable at a cleanout | IMG-15 |
| 16 | Bathroom sink and tub, one draining slowly, no people | IMG-09 |
| 16 | Technician with a locator receiver in a yard, paint marks on pavement, no identifiable address | IMG-11 |
| 16 | Fence line and planting beds where digging might be planned, nothing identifiable | IMG-19 |
| 16 | Monitor showing a pipe interior next to a handheld receiver, nothing graphic | IMG-20 |
| 15 | Real camera still with distance counter visible, owner consent on file | IMG-21 |
| 15 | Technician and homeowner reviewing findings, faces not identifiable | IMG-07 |
| 8 | Camera head and push cable at a cleanout | IMG-14 |
| 8 | Cleaning machine and cable or hose at a cleanout | IMG-15 |
| 8 | Monitor showing a cleaned pipe with crew behind | IMG-05 |
| 8 | Technician with a locator receiver, paint marks on pavement | IMG-11 |
| 8 | Technician scoping a for-sale property, clipboard visible | IMG-04 |
| 8 | Crew member recording a post-cleaning camera pass | IMG-05 |
| 5 | Ordinary mixed-use street, manhole and curb, no business names or identifiable buildings | IMG-28 |
| 2 | Technician and owner reviewing findings, faces not identifiable | IMG-07 |
| 2 | A technician reviewing sewer camera footage on a monitor | IMG-05 |
| 2 | A monitor or tablet showing inspection video beside written findings, with customer details removed | IMG-06 |
| 1 | Exterior cleanout cap at the base of a building | IMG-02 |
| 1 | A capped exterior cleanout at a residential property (no identifiers) | IMG-02 |
| 1 | A technician at an exterior cleanout with camera reel and monitor set up at a residential property | IMG-23 |
| 1 | A real frame from an inspection video showing visible root intrusion at a joint or crack (no identifiers) | IMG-24 |
| 1 | A real frame showing standing water in a line, where the waterline limits the view | IMG-25 |
| 1 | An open cleanout with a camera cable or cleaning hose entering it | IMG-08 |
| 1 | A technician holding a locating receiver over a yard or driveway during a locate | IMG-11 |
| **785** | **44 wordings** | |

The wordings that most deserve a second look are the ones merged into IMG technician-at-monitor: "Monitor showing a cleaned pipe with crew behind" and "Crew member recording a post-cleaning camera pass" are the two service-card shots for cleaning plus camera and maintenance. They are on the location hubs that use card photos. A single image of a technician at a monitor serves both; split it only if you want the cards to look different.

## Slots that draw nothing today (not part of the 785)

These are registered without an image but do not render a box in the built site, so they are not in the 785 and not assigned a file. They need no image for launch.

| Group | Slots | Why it draws nothing |
|---|---|---|
| Location-hub `<city>-hero` | 16 | Page uses existing approved hero art |
| Location-hub `final-bg` | 16 | Page uses existing approved CTA art |
| Location-hub `svc-*` service-card slots | 72 | 8 hubs (San Diego, Mission Valley, Carlsbad, Ballwin, Chesterfield, Florissant, St. Charles, St. Louis City) use card art; 9 slots each |
| Location-hub `program-footage` on St. Louis City | 1 | Already has an image (`src` set) |
| Service + location `-hero` and `-cta` slots from `pageImageSlots()` | 288 | 144 pages x 2; passed to the template as `heroImage` and `ctaImage`, which draw no box |
| `slc-*` card slots in `service-location-shared.ts` | 9 | `serviceLocationServiceCards()` is never called |
| **Total** | **402** | |

Unassigned: **0** boxes. The two missing-file items from the placeholder inventory (the combined-hub cleanout image and the drain-cleaning video poster) draw nothing either and are not counted.

## Briefs

Each brief covers one file, in the same ID order as the shot list. Common rules for every image:

- No readable house numbers or street signs, no license plates, no business names, logos or branded lettering, no customer names, no identifiable faces, no text overlays. Nothing that suggests a local office, storefront or branch. No repair, excavation or replacement work. No defect or condition presented as a finding at a real property.
- Equipment appears only as a plain mention. No brand names in alt text or captions beyond what `CLAUDE.md` section 24 allows, no specifications, no capability claims, no "professional-grade" or "state-of-the-art".
- Where a technician, truck or trailer is the subject of the image, that is the one exception to the no-crew rule, and the notes under each brief say how to show it.
- Alt text is neutral and contains no em dashes.
- File format: WebP, 1448 x 1086 px for 4:3 (1600 x 900 for 16:9), compressed, EXIF and GPS removed.

### IMG-01  Floor drain with cleanout access

- **Filename:** `public/images/shared/cleanouts/the-sewer-pros-floor-drain-cleanout-access-4x3.webp`
- **Slot ratio:** 4:3 (1448 x 1086)
- **Type:** Photorealistic render. Priority P1.
- **Subject and composition:** Straight-on, slightly high view of a floor drain in a utility room or basement floor, with a cleanout fitting visible a short distance away. Clean concrete floor, even light, plenty of empty space around the drain.
- **Must NOT appear:** No crew, water overflow, sewage or staining presented as a finding. No readable brand marks on the drain cover. Plus the common rules above. Equipment shown in this render is owner-approved (Oct 12, 2026).
- **Alt text:** Concrete floor with a round drain grate and a threaded fitting, with a sewer camera reel and open monitor beside them
- **Photorealistic render prompt or shoot:** Render prompt: "Photorealistic floor drain with a nearby sewer cleanout fitting in a clean residential utility room, concrete floor, neutral soft light, no people, no text, 4:3." Real photo also fine: any clean home, tight crop on the drain.
- **Reuse scope:** universal. Fills 87 boxes: 8 on location hubs (IMAGE_SLOTS in content/pages/<market>-<city>.tsx); 79 on service + location pages (pageImageSlots in content/pages/sl-*.tsx).
- **Slot ids:** hydro-jetting: problem-3; recurring-sewer-backup-diagnosis: problem-1; sewer-camera-inspection: problem-3; sewer-cleaning-camera-inspection: problem-3; sewer-cleaning: problem-3; svc-backup

### IMG-02  Capped exterior cleanout

- **Filename:** `public/images/shared/cleanouts/the-sewer-pros-capped-exterior-cleanout-base-of-house-4x3.webp`
- **Slot ratio:** 4:3 (1448 x 1086)
- **Type:** Photorealistic render. Priority P1.
- **Subject and composition:** Low three-quarter view of a threaded cleanout cap at the base of a house wall, a few inches above soil or mulch. House siding or brick fills the background out of focus.
- **Must NOT appear:** No house number, mailbox, crew, or cracked or damaged pipe. Plus the common rules above. Equipment shown in this render is owner-approved (Oct 12, 2026).
- **Alt text:** White threaded sewer cleanout cap at the base of an exterior wall, with a sewer camera reel and open monitor on the mulch beside it
- **Photorealistic render prompt or shoot:** Render prompt: "Photorealistic capped sewer cleanout pipe at the foundation of a home, exterior wall out of focus, mulch bed, soft daylight, no people, no text, 4:3." The one "building" wording (Mission Valley) can use this same image.
- **Reuse scope:** universal. Fills 65 boxes: 16 on location hubs (IMAGE_SLOTS in content/pages/<market>-<city>.tsx); 48 on service + location pages (pageImageSlots in content/pages/sl-*.tsx); 1 on core service pages (data/business/*-images.ts).
- **Slot ids:** call-cleanout; preventative-sewer-maintenance: prep-cleanout; preventative-sewer-maintenance: problem-2; recurring-sewer-backup-diagnosis: problem-3; sewer-camera-inspection: problem-1

### IMG-03  Residential street, manhole and curb (St. Louis)

- **Filename:** `public/images/shared/residential/the-sewer-pros-st-louis-residential-street-manhole-curb-4x3.webp`
- **Slot ratio:** 4:3 (1448 x 1086)
- **Type:** Photorealistic render. Priority P1.
- **Subject and composition:** Residential street at curb height, a manhole cover in the pavement a few feet from the curb, an empty sidewalk beyond. Homes only as soft background shapes.
- **Must NOT appear:** No identifiable houses, house numbers, vehicles with readable plates, street signs, people or crew. No work vehicles. Plus the common rules above. Equipment shown in this render is owner-approved (Oct 12, 2026).
- **Alt text:** Residential street with a manhole cover in the pavement, houses beyond, and a yellow locator receiver on the sidewalk
- **Photorealistic render prompt or shoot:** Shoot, or generate a photorealistic render, in a neighborhood that reads as the target market. Shoot: stand at the curb, camera low, 35 mm equivalent, overcast light, empty street. Blur or crop any numbers, plates and signs. Market look (St. Louis): brick and older masonry homes, mature deciduous trees, concrete sidewalks and curbs, overcast or soft daylight. Do not show a landmark or anything that says the image is of a specific street.
- **Reuse scope:** per market (St. Louis). Fills 50 boxes: 5 on location hubs (IMAGE_SLOTS in content/pages/<market>-<city>.tsx); 45 on service + location pages (pageImageSlots in content/pages/sl-*.tsx).
- **Slot ids:** drain-cleaning: problem-4; hydro-jetting: problem-4; pre-purchase-sewer-inspection: problem-4; preventative-sewer-maintenance: problem-4; recurring-sewer-backup-diagnosis: problem-4; sewer-camera-inspection: problem-4; sewer-cleaning-camera-inspection: problem-4; sewer-cleaning: problem-4; sewer-line-locating: problem-4; system-street

### IMG-04  Technician at a for-sale property starting a scope

- **Filename:** `public/images/shared/residential/the-sewer-pros-technician-for-sale-property-starting-sewer-scope-4x3.webp`
- **Slot ratio:** 4:3 (1448 x 1086)
- **Type:** Real photo needed. Priority P1.
- **Subject and composition:** Technician at the side of a house setting up a camera reel at a cleanout, clipboard or tablet nearby, shot from a medium distance so the home is generic. Covers pre-purchase scope on cards and problem tiles.
- **Must NOT appear:** No "for sale" sign, real-estate branding, house number, face, vehicle or uniform lettering. No visible finding. Plus the common rules above.
- **Alt text:** Technician setting up a sewer camera at a property for sale
- **Shoot instructions:** Real photo on a real pre-purchase job, with the owner's permission, or staged at an own or consenting property. Keep the framing tight so the region cannot be identified.
- **Reuse scope:** universal. Fills 41 boxes: 24 on location hubs (IMAGE_SLOTS in content/pages/<market>-<city>.tsx); 17 on service + location pages (pageImageSlots in content/pages/sl-*.tsx).
- **Slot ids:** buy-buyer; pre-purchase-sewer-inspection: problem-2; sewer-camera-inspection: problem-3; svc-prepurchase

### IMG-05  Technician reviewing footage at a monitor

- **Filename:** `public/images/shared/equipment/the-sewer-pros-technician-reviewing-camera-footage-monitor-4x3.webp`
- **Slot ratio:** 4:3 (1448 x 1086)
- **Type:** Real photo needed. Priority P1.
- **Subject and composition:** Technician seen from behind or in profile reviewing footage on a monitor, shoulder and monitor in frame, blurred truck-free background. Serves the cleaned-pipe and post-cleaning-pass card shots too.
- **Must NOT appear:** No identifiable face, no vehicle, no uniform text or logo, no address or customer details on screen, no claim of a finding. Plus the common rules above.
- **Alt text:** Technician reviewing sewer camera footage on a monitor
- **Shoot instructions:** Real photo on a real job. Over-the-shoulder, monitor shows ordinary pipe. Have the technician wear an unmarked jacket or crop out any lettering.
- **Reuse scope:** universal. Fills 34 boxes: 16 on location hubs (IMAGE_SLOTS in content/pages/<market>-<city>.tsx); 16 on service + location pages (pageImageSlots in content/pages/sl-*.tsx); 2 on core service pages (data/business/*-images.ts).
- **Slot ids:** preventative-sewer-maintenance: explainer-review; preventative-sewer-maintenance: problem-1; recurring-sewer-backup-diagnosis: explainer-monitor; svc-cleaning-camera; svc-maintenance

### IMG-06  Monitor or tablet with report and video

- **Filename:** `public/images/shared/pipe-interiors/the-sewer-pros-tablet-inspection-video-beside-written-findings-4x3.webp`
- **Slot ratio:** 4:3 (1448 x 1086)
- **Type:** Real photo needed. Priority P1.
- **Subject and composition:** Tablet showing a paused inspection video frame beside a printed summary page on a flat surface, shot slightly from above.
- **Must NOT appear:** No readable names, addresses, dates or findings text on either page, no brand marks, no faces. No claim about what the footage shows. Plus the common rules above.
- **Alt text:** Tablet showing inspection video beside a printed summary page
- **Shoot instructions:** Real photo using a redacted real report or a mock-up with lorem text; the video frame should be ordinary pipe.
- **Reuse scope:** universal. Fills 34 boxes: 16 on location hubs (IMAGE_SLOTS in content/pages/<market>-<city>.tsx); 16 on service + location pages (pageImageSlots in content/pages/sl-*.tsx); 2 on core service pages (data/business/*-images.ts).
- **Slot ids:** preventative-sewer-maintenance: problem-3; preventative-sewer-maintenance: records-video-and-findings; recurring-sewer-backup-diagnosis: records-video-and-findings; so-document

### IMG-07  Technician reviewing findings with the owner or buyer

- **Filename:** `public/images/shared/residential/the-sewer-pros-technician-reviewing-findings-with-property-owner-4x3.webp`
- **Slot ratio:** 4:3 (1448 x 1086)
- **Type:** Real photo needed. Priority P1.
- **Subject and composition:** Technician and property owner standing side by side outside a home, both looking at a tablet held between them, shot from behind or at an angle so faces are not identifiable. Covers buyer, homeowner and owner wordings.
- **Must NOT appear:** No faces, no readable tablet content, no house number, no real-estate or company branding, no vehicle. Nothing implying a result. Plus the common rules above.
- **Alt text:** Technician and property owner looking at a tablet together outside a home
- **Shoot instructions:** Real photo with a signed release or staged with consenting staff. Shoot from behind or at the shoulder.
- **Reuse scope:** universal. Fills 33 boxes: 16 on location hubs (IMAGE_SLOTS in content/pages/<market>-<city>.tsx); 17 on service + location pages (pageImageSlots in content/pages/sl-*.tsx).
- **Slot ids:** pre-purchase-sewer-inspection: problem-3; sewer-camera-inspection: problem-2; so-decide

### IMG-08  Cable or hose entering a cleanout

- **Filename:** `public/images/shared/cleanouts/the-sewer-pros-cleaning-cable-entering-cleanout-close-up-4x3.webp`
- **Slot ratio:** 4:3 (1448 x 1086)
- **Type:** Real photo needed. Priority P1.
- **Subject and composition:** Close-up of a cleaning cable or hose entering an open cleanout, shot from slightly above. Hands out of frame.
- **Must NOT appear:** No faces, uniform lettering, truck or machine branding, or house numbers. Brand marks on the cable reel blurred. No sewage on the ground. Plus the common rules above.
- **Alt text:** Cleaning cable entering an open sewer cleanout
- **Shoot instructions:** Real photo on a real job. 50 mm equivalent, close, shallow depth of field on the cleanout opening. Take it before the cable is advanced; wipe the area first.
- **Reuse scope:** universal. Fills 33 boxes: 32 on service + location pages (pageImageSlots in content/pages/sl-*.tsx); 1 on core service pages (data/business/*-images.ts).
- **Slot ids:** recurring-sewer-backup-diagnosis: process-cleanout-access; sewer-cleaning-camera-inspection: problem-2; sewer-cleaning: problem-2

### IMG-09  Bathroom sink and tub

- **Filename:** `public/images/shared/residential/the-sewer-pros-bathroom-sink-and-tub-4x3.webp`
- **Slot ratio:** 4:3 (1448 x 1086)
- **Type:** Photorealistic render. Priority P1.
- **Subject and composition:** Bathroom vanity sink and bathtub in the same frame, both clean, a small amount of water in the sink to suggest slow drainage.
- **Must NOT appear:** No people, toiletries with brand labels, or mess. No sewage. Plus the common rules above. Equipment shown in this render is owner-approved (Oct 12, 2026).
- **Alt text:** Bathroom with a white vanity sink and a bathtub, and a red drain machine standing on the tile floor
- **Photorealistic render prompt or shoot:** Render prompt: "Photorealistic residential bathroom, vanity sink and bathtub side by side, a little water standing in the sink, neutral tones, soft light, no people, no text, 4:3."
- **Reuse scope:** universal. Fills 32 boxes: 32 on service + location pages (pageImageSlots in content/pages/sl-*.tsx).
- **Slot ids:** drain-cleaning: problem-2; sewer-cleaning-camera-inspection: problem-1

### IMG-10  Monitor showing a pipe interior

- **Filename:** `public/images/shared/pipe-interiors/the-sewer-pros-monitor-showing-pipe-interior-4x3.webp`
- **Slot ratio:** 4:3 (1448 x 1086)
- **Type:** Real photo needed. Priority P1.
- **Subject and composition:** Inspection monitor filling most of the frame, screen showing the inside of a clean pipe run, a counter overlay partly visible. Slight angle to avoid glare.
- **Must NOT appear:** No identifying overlay text (address, name, date, GPS), no crew, no truck, no brand text readable on the monitor. No visible defect framed as a finding. Plus the common rules above.
- **Alt text:** Inspection monitor showing the inside of a sewer pipe
- **Shoot instructions:** Real photo. Pick a frame of ordinary pipe, crop out or blur overlay text, and photograph the monitor in shade to avoid glare.
- **Reuse scope:** universal. Fills 31 boxes: 31 on service + location pages (pageImageSlots in content/pages/sl-*.tsx).
- **Slot ids:** recurring-sewer-backup-diagnosis: problem-2; sewer-camera-inspection: problem-2

### IMG-11  Technician with a locator receiver in a yard

- **Filename:** `public/images/shared/equipment/the-sewer-pros-technician-locator-receiver-yard-paint-marks-4x3.webp`
- **Slot ratio:** 4:3 (1448 x 1086)
- **Type:** Real photo needed. Priority P1.
- **Subject and composition:** Technician sweeping a yard with a handheld locator receiver, painted marks visible on a nearby driveway or sidewalk, medium shot from a low angle.
- **Must NOT appear:** No face, house number, vehicle, utility company marking text, uniform lettering, or claim about depth or accuracy. Plus the common rules above.
- **Alt text:** Technician sweeping a yard with a handheld locator receiver, with paint marks on the pavement
- **Shoot instructions:** Real photo on a real locate job. Crop out any painted text; keep marks abstract. Equipment named only if confirmed and only as a plain mention.
- **Reuse scope:** universal. Fills 25 boxes: 8 on location hubs (IMAGE_SLOTS in content/pages/<market>-<city>.tsx); 16 on service + location pages (pageImageSlots in content/pages/sl-*.tsx); 1 on core service pages (data/business/*-images.ts).
- **Slot ids:** recurring-sewer-backup-diagnosis: process-locate-receiver; sewer-line-locating: problem-1; svc-locating

### IMG-12  Drain machine at a floor or tub drain

- **Filename:** `public/images/shared/equipment/the-sewer-pros-drain-machine-at-floor-drain-4x3.webp`
- **Slot ratio:** 4:3 (1448 x 1086)
- **Type:** Real photo needed. Priority P1.
- **Subject and composition:** Drain cleaning machine set up at a floor drain or tub drain, cable going into the drain, shot at a 3/4 angle from the side.
- **Must NOT appear:** No faces, uniform lettering, brand text readable on the machine, house numbers or customer items. Nothing implying a capability or specification. Plus the common rules above.
- **Alt text:** Drain cleaning machine set up at a floor drain
- **Shoot instructions:** Real photo on a real job. Wipe the area first, no people in frame (hands out), crop out stickers or lettering.
- **Reuse scope:** universal. Fills 24 boxes: 8 on location hubs (IMAGE_SLOTS in content/pages/<market>-<city>.tsx); 16 on service + location pages (pageImageSlots in content/pages/sl-*.tsx).
- **Slot ids:** drain-cleaning: problem-3; svc-drain

### IMG-13  Jetting nozzle and hose at the line

- **Filename:** `public/images/shared/equipment/the-sewer-pros-jetting-nozzle-hose-at-sewer-line-4x3.webp`
- **Slot ratio:** 4:3 (1448 x 1086)
- **Type:** Real photo needed. Priority P1.
- **Subject and composition:** Jetting nozzle and hose at the end of the line near a cleanout, hose coiled or laid out cleanly, shallow depth of field on the nozzle.
- **Must NOT appear:** No spray in action implied as a result, no sewage, no truck lettering, no faces, no pressure or flow figures, no brand text readable. Plus the common rules above.
- **Alt text:** Jetting nozzle and hose at a sewer cleanout
- **Shoot instructions:** Real photo on a real job, taken before the line is jetted. Crop out the trailer branding.
- **Reuse scope:** universal. Fills 24 boxes: 8 on location hubs (IMAGE_SLOTS in content/pages/<market>-<city>.tsx); 16 on service + location pages (pageImageSlots in content/pages/sl-*.tsx).
- **Slot ids:** hydro-jetting: problem-1; svc-jetting

### IMG-14  Camera head entering a cleanout

- **Filename:** `public/images/shared/equipment/the-sewer-pros-camera-head-push-cable-entering-cleanout-4x3.webp`
- **Slot ratio:** 4:3 (1448 x 1086)
- **Type:** Real photo needed. Priority P1.
- **Subject and composition:** Close-up of a camera head and push cable entering an open cleanout, shot from slightly above. A short length of cable visible leading out of frame.
- **Must NOT appear:** No faces, uniform or equipment lettering readable, house numbers, or monitor content showing a property. No sewage on the ground. Plus the common rules above.
- **Alt text:** Sewer camera head and push cable entering a cleanout
- **Shoot instructions:** Real photo on a real job. Stage the camera head at the cleanout opening before it goes in; tight crop, plain background.
- **Reuse scope:** universal. Fills 24 boxes: 24 on location hubs (IMAGE_SLOTS in content/pages/<market>-<city>.tsx).
- **Slot ids:** so-inspect; svc-camera

### IMG-15  Cleaning machine and cable at a cleanout

- **Filename:** `public/images/shared/equipment/the-sewer-pros-cleaning-machine-cable-at-cleanout-4x3.webp`
- **Slot ratio:** 4:3 (1448 x 1086)
- **Type:** Real photo needed. Priority P1.
- **Subject and composition:** Sewer cleaning machine with cable or hose run to a cleanout, 3/4 view, machine in the middle distance and the cleanout in the foreground.
- **Must NOT appear:** No faces, branded lettering readable on the machine, house numbers or customer property, truck. No specifications implied. Plus the common rules above.
- **Alt text:** Sewer cleaning machine with cable at a cleanout
- **Shoot instructions:** Real photo on a real job; same shoot as the cable-entering-cleanout close-up if possible.
- **Reuse scope:** universal. Fills 24 boxes: 8 on location hubs (IMAGE_SLOTS in content/pages/<market>-<city>.tsx); 16 on service + location pages (pageImageSlots in content/pages/sl-*.tsx).
- **Slot ids:** sewer-cleaning: problem-1; svc-cleaning

### IMG-16  Kitchen sink with a slow drain

- **Filename:** `public/images/shared/residential/the-sewer-pros-kitchen-sink-slow-drain-4x3.webp`
- **Slot ratio:** 4:3 (1448 x 1086)
- **Type:** Photorealistic render. Priority P1.
- **Subject and composition:** Kitchen sink at counter height, basin holding a small amount of water that has not drained, faucet and backsplash softly lit.
- **Must NOT appear:** No people, hands, dishes with food waste, brand-name fixtures, or anything unsanitary. No sewage. Plus the common rules above. Equipment shown in this render is owner-approved (Oct 12, 2026).
- **Alt text:** Kitchen sink with an empty basin and a red drain machine in the background
- **Photorealistic render prompt or shoot:** Render prompt: "Photorealistic clean kitchen sink with a little water standing in the basin, neutral kitchen, soft window light, no people, no text, 4:3."
- **Reuse scope:** universal. Fills 16 boxes: 16 on service + location pages (pageImageSlots in content/pages/sl-*.tsx).
- **Slot ids:** drain-cleaning: problem-1

### IMG-17  Jetter trailer at a curb

- **Filename:** `public/images/shared/equipment/the-sewer-pros-jetter-trailer-at-curb-4x3.webp`
- **Slot ratio:** 4:3 (1448 x 1086)
- **Type:** Real photo needed. Priority P1.
- **Subject and composition:** Trailer-mounted jetter parked at a curb, rear three-quarter view, residential street softly blurred behind it.
- **Must NOT appear:** Trailer and tow vehicle plates removed, no company or equipment branding legible, no house numbers, no crew. This is the one image where a trailer is the subject; no truck cab or lettered vehicle. Plus the common rules above.
- **Alt text:** Trailer-mounted jetter parked at a curb
- **Shoot instructions:** Real photo on a real job. Retouch or crop the plate and decals. Do not name the model in the alt text or caption.
- **Reuse scope:** universal. Fills 16 boxes: 16 on service + location pages (pageImageSlots in content/pages/sl-*.tsx).
- **Slot ids:** hydro-jetting: problem-2

### IMG-18  Report handed to an agent

- **Filename:** `public/images/shared/residential/the-sewer-pros-inspection-report-handed-to-agent-4x3.webp`
- **Slot ratio:** 4:3 (1448 x 1086)
- **Type:** Real photo needed. Priority P1.
- **Subject and composition:** Two hands passing a printed inspection report across a table, a pen and a closed laptop nearby, report text blurred or redacted.
- **Must NOT appear:** No faces, readable report text, names, addresses, real-estate branding or logos. No findings visible. Plus the common rules above.
- **Alt text:** Printed inspection report being handed to a real estate agent
- **Shoot instructions:** Real photo with a dummy or fully redacted report. Hands only; plain table.
- **Reuse scope:** universal. Fills 16 boxes: 16 on location hubs (IMAGE_SLOTS in content/pages/<market>-<city>.tsx).
- **Slot ids:** buy-agent

### IMG-19  Fence line and planting beds

- **Filename:** `public/images/shared/residential/the-sewer-pros-fence-line-planting-beds-possible-dig-area-4x3.webp`
- **Slot ratio:** 4:3 (1448 x 1086)
- **Type:** Photorealistic render. Priority P1.
- **Subject and composition:** Backyard fence line with a planting bed along it and open lawn or gravel, as a place someone might plan to dig. Flat, even light.
- **Must NOT appear:** No houses with identifiers, people, excavation or utility marking paint. Plus the common rules above. Equipment shown in this render is owner-approved (Oct 12, 2026).
- **Alt text:** Backyard wooden fence with shrubs and a mulch bed beside a lawn, with a yellow locator receiver lying on the grass
- **Photorealistic render prompt or shoot:** Render prompt: "Photorealistic residential backyard fence line with planting beds and open ground, no people, no tools, no text, 4:3." Keep it plain; this image carries the idea of "before you dig".
- **Reuse scope:** universal. Fills 16 boxes: 16 on service + location pages (pageImageSlots in content/pages/sl-*.tsx).
- **Slot ids:** sewer-line-locating: problem-2

### IMG-20  Monitor beside a handheld locator receiver

- **Filename:** `public/images/shared/equipment/the-sewer-pros-monitor-pipe-interior-beside-locator-receiver-4x3.webp`
- **Slot ratio:** 4:3 (1448 x 1086)
- **Type:** Real photo needed. Priority P1.
- **Subject and composition:** Inspection monitor showing pipe footage and a handheld locator receiver resting beside it on a tailgate-free surface such as a case or table.
- **Must NOT appear:** No truck, branded case, readable receiver screen or monitor overlay text, no crew, no addresses. Plus the common rules above.
- **Alt text:** Inspection monitor beside a handheld locator receiver
- **Shoot instructions:** Real photo, staged on site or in the shop. Equipment is a plain mention only, so keep model names unreadable and show no specifications on the screens.
- **Reuse scope:** universal. Fills 16 boxes: 16 on service + location pages (pageImageSlots in content/pages/sl-*.tsx).
- **Slot ids:** sewer-line-locating: problem-3

### IMG-21  Camera still with distance counter

- **Filename:** `public/images/shared/pipe-interiors/the-sewer-pros-camera-footage-still-distance-counter-4x3.webp`
- **Slot ratio:** 4:3 (1448 x 1086)
- **Type:** Real photo needed. Priority P1.
- **Subject and composition:** Single frame of camera footage showing the inside of a pipe with a distance counter visible in a corner of the frame. The pipe is ordinary; the counter is the point.
- **Must NOT appear:** No address, date, GPS, customer or company text on the frame, no visible defect, no claim about what the line condition means. Plus the common rules above.
- **Alt text:** Sewer camera still of a pipe interior with a distance counter in the corner
- **Shoot instructions:** Real still from a real inspection, with consent on file. Remove overlay text except the counter. St. Louis City already has one in place; reuse it only if it is not tied to one property.
- **Reuse scope:** universal (one still, any market page; consent on file). Fills 15 boxes: 15 on location hubs (IMAGE_SLOTS in content/pages/<market>-<city>.tsx).
- **Slot ids:** program-footage

### IMG-22  Older home with a visible cleanout (St. Louis)

- **Filename:** `public/images/shared/residential/the-sewer-pros-st-louis-older-home-visible-cleanout-4x3.webp`
- **Slot ratio:** 4:3 (1448 x 1086)
- **Type:** Photorealistic render. Priority P1.
- **Subject and composition:** Front or side view of an older single-family home, camera at eye level from the yard, a sewer cleanout cap visible near the foundation in the lower third.
- **Must NOT appear:** No house numbers, mailbox, vehicles, people, "for sale" signs or real-estate branding. No visible damage presented as a defect. Plus the common rules above. Equipment shown in this render is owner-approved (Oct 12, 2026).
- **Alt text:** Home exterior with a capped cleanout pipe in the yard, and a sewer camera reel with an open monitor beside it
- **Photorealistic render prompt or shoot:** Render prompt or location photo. Keep the home generic so it cannot be identified; the cleanout must be clearly visible. Market look (St. Louis): brick and older masonry homes, mature deciduous trees, concrete sidewalks and curbs, overcast or soft daylight. Do not show a landmark or anything that says the image is of a specific street.
- **Reuse scope:** per market (St. Louis). Fills 5 boxes: 5 on service + location pages (pageImageSlots in content/pages/sl-*.tsx).
- **Slot ids:** pre-purchase-sewer-inspection: problem-1

### IMG-23  Recurring backup hero: technician at an exterior cleanout

- **Filename:** `public/images/services/recurring-sewer-backup-diagnosis/the-sewer-pros-recurring-sewer-backup-diagnosis-hero-cleanout-16x9.webp`
- **Slot ratio:** 16:9 (1600 x 900)
- **Type:** Real photo needed. Priority P1.
- **Subject and composition:** Wide 16:9 shot of a technician at an exterior cleanout of a residential property with the camera reel and monitor set up on the ground beside it. Natural light, the home soft in the background.
- **Must NOT appear:** No faces, truck, uniform or equipment lettering, house number, customer items or findings on the monitor. Plus the common rules above.
- **Alt text:** Technician setting up a sewer camera at a residential cleanout
- **Shoot instructions:** Real photo on a real job with permission. Match the path the page already uses: services/recurring-sewer-backup-diagnosis/the-sewer-pros-recurring-sewer-backup-diagnosis-hero-cleanout-16x9.webp. Today that file is missing and the hero is broken.
- **Reuse scope:** page-unique. Fills 1 box: 1 on core service pages (data/business/*-images.ts).
- **Slot ids:** recurring-sewer-backup-diagnosis: hero-cleanout

### IMG-24  Camera frame showing root intrusion

- **Filename:** `public/images/services/recurring-sewer-backup-diagnosis/the-sewer-pros-recurring-sewer-backup-diagnosis-causes-root-footage-4x3.webp`
- **Slot ratio:** 4:3 (1448 x 1086)
- **Type:** Existing asset. Priority P1.
- **Subject and composition:** Existing camera still showing roots entering a pipe near a joint.
- **Must NOT appear:** No overlay text, address or customer details. Treat as an example, never as a finding on a specific property. Plus the common rules above.
- **Alt text:** Sewer camera view down a pipe with tree roots hanging into the pipe near a joint at the upper right
- **Existing asset:** No new shoot. Copy `services/sewer-camera-inspection/the-sewer-pros-sewer-camera-root-intrusion-pipe-joint-4x3.webp` to the recurring page path above, or repoint the slot. Keep the "Example:" caption wording.
- **Reuse scope:** page-unique. Fills 1 box: 1 on core service pages (data/business/*-images.ts).
- **Slot ids:** recurring-sewer-backup-diagnosis: causes-root-footage

### IMG-25  Camera frame showing standing water

- **Filename:** `public/images/services/recurring-sewer-backup-diagnosis/the-sewer-pros-recurring-sewer-backup-diagnosis-limits-waterline-footage-7x4.webp`
- **Slot ratio:** 7:4 (7:4)
- **Type:** Existing asset. Priority P1.
- **Subject and composition:** Existing camera still showing standing water along the bottom of a pipe.
- **Must NOT appear:** No overlay text, address or customer details. Treat as an example, never as a finding on a specific property. Plus the common rules above.
- **Alt text:** Sewer camera view down a pipe with water pooled along the bottom of the pipe
- **Existing asset:** No new shoot. The existing file is 4:3 and the recurring slot is 7:4, so either crop to 7:4 or change the slot to 4:3.
- **Reuse scope:** page-unique. Fills 1 box: 1 on core service pages (data/business/*-images.ts).
- **Slot ids:** recurring-sewer-backup-diagnosis: limits-waterline-footage

### IMG-26  Residential street, manhole and curb (San Diego)

- **Filename:** `public/images/shared/residential/the-sewer-pros-san-diego-residential-street-manhole-curb-4x3.webp`
- **Slot ratio:** 4:3 (1448 x 1086)
- **Type:** Photorealistic render. Priority P2.
- **Subject and composition:** Residential street at curb height, a manhole cover in the pavement a few feet from the curb, an empty sidewalk beyond. Homes only as soft background shapes.
- **Must NOT appear:** No identifiable houses, house numbers, vehicles with readable plates, street signs, people or crew. No work vehicles. Plus the common rules above. Equipment shown in this render is owner-approved (Oct 12, 2026).
- **Alt text:** Residential street with a manhole cover in the pavement, houses beyond, and a yellow locator receiver on the sidewalk
- **Photorealistic render prompt or shoot:** Shoot, or generate a photorealistic render, in a neighborhood that reads as the target market. Shoot: stand at the curb, camera low, 35 mm equivalent, overcast light, empty street. Blur or crop any numbers, plates and signs. Market look (San Diego): single-story stucco homes, low-water landscaping, concrete curbs, bright but soft daylight. Do not show a landmark or anything that says the image is of a specific street.
- **Reuse scope:** per market (San Diego). Fills 65 boxes: 6 on location hubs (IMAGE_SLOTS in content/pages/<market>-<city>.tsx); 59 on service + location pages (pageImageSlots in content/pages/sl-*.tsx).
- **Slot ids:** drain-cleaning: problem-4; hydro-jetting: problem-4; pre-purchase-sewer-inspection: problem-4; preventative-sewer-maintenance: problem-4; recurring-sewer-backup-diagnosis: problem-4; sewer-camera-inspection: problem-4; sewer-cleaning-camera-inspection: problem-4; sewer-cleaning: problem-4; sewer-line-locating: problem-4; system-street

### IMG-27  Older home with a visible cleanout (San Diego)

- **Filename:** `public/images/shared/residential/the-sewer-pros-san-diego-older-home-visible-cleanout-4x3.webp`
- **Slot ratio:** 4:3 (1448 x 1086)
- **Type:** Photorealistic render. Priority P2.
- **Subject and composition:** Front or side view of an older single-family home, camera at eye level from the yard, a sewer cleanout cap visible near the foundation in the lower third.
- **Must NOT appear:** No house numbers, mailbox, vehicles, people, "for sale" signs or real-estate branding. No visible damage presented as a defect. Plus the common rules above. Equipment shown in this render is owner-approved (Oct 12, 2026).
- **Alt text:** Home exterior with a capped cleanout pipe in the yard, and a sewer camera reel with an open monitor beside it
- **Photorealistic render prompt or shoot:** Render prompt or location photo. Keep the home generic so it cannot be identified; the cleanout must be clearly visible. Market look (San Diego): single-story stucco homes, low-water landscaping, concrete curbs, bright but soft daylight. Do not show a landmark or anything that says the image is of a specific street.
- **Reuse scope:** per market (San Diego). Fills 7 boxes: 7 on service + location pages (pageImageSlots in content/pages/sl-*.tsx).
- **Slot ids:** pre-purchase-sewer-inspection: problem-1

### IMG-28  Mixed-use street, manhole and curb

- **Filename:** `public/images/shared/commercial/the-sewer-pros-san-diego-commercial-street-manhole-curb-4x3.webp`
- **Slot ratio:** 4:3 (1448 x 1086)
- **Type:** Photorealistic render. Priority P2.
- **Subject and composition:** Mixed-use street at curb height with a manhole cover and curb in the foreground, storefront shapes blurred beyond.
- **Must NOT appear:** No readable business names, signage, logos, identifiable buildings, plates or people. Plus the common rules above. Equipment shown in this render is owner-approved (Oct 12, 2026).
- **Alt text:** Street with a manhole cover in the pavement, low buildings with glass windows beyond, and a yellow locator receiver on the sidewalk
- **Photorealistic render prompt or shoot:** Render prompt: "Photorealistic mixed-use street, manhole cover and curb in foreground, buildings out of focus with no readable signs, empty street, San Diego style stucco and glass storefronts, soft daylight, 4:3." Used only by the Mission Valley page.
- **Reuse scope:** page-unique (Mission Valley). Fills 5 boxes: 1 on location hubs (IMAGE_SLOTS in content/pages/<market>-<city>.tsx); 4 on service + location pages (pageImageSlots in content/pages/sl-*.tsx).
- **Slot ids:** drain-cleaning: problem-4; pre-purchase-sewer-inspection: problem-4; preventative-sewer-maintenance: problem-4; recurring-sewer-backup-diagnosis: problem-4; system-street

### IMG-29  Residential street, manhole and curb (Las Vegas)

- **Filename:** `public/images/shared/residential/the-sewer-pros-las-vegas-residential-street-manhole-curb-4x3.webp`
- **Slot ratio:** 4:3 (1448 x 1086)
- **Type:** Photorealistic render. Priority P3.
- **Subject and composition:** Residential street at curb height, a manhole cover in the pavement a few feet from the curb, an empty sidewalk beyond. Homes only as soft background shapes.
- **Must NOT appear:** No identifiable houses, house numbers, vehicles with readable plates, street signs, people or crew. No work vehicles. Plus the common rules above. Equipment shown in this render is owner-approved (Oct 12, 2026).
- **Alt text:** Residential street with a manhole cover in the pavement, houses beyond, and a yellow locator receiver on the sidewalk
- **Photorealistic render prompt or shoot:** Shoot, or generate a photorealistic render, in a neighborhood that reads as the target market. Shoot: stand at the curb, camera low, 35 mm equivalent, overcast light, empty street. Blur or crop any numbers, plates and signs. Market look (Las Vegas): stucco homes with tile roofs, gravel or desert landscaping, block-wall fences, bright dry daylight. Do not show a landmark or anything that says the image is of a specific street.
- **Reuse scope:** per market (Las Vegas). Fills 40 boxes: 4 on location hubs (IMAGE_SLOTS in content/pages/<market>-<city>.tsx); 36 on service + location pages (pageImageSlots in content/pages/sl-*.tsx).
- **Slot ids:** drain-cleaning: problem-4; hydro-jetting: problem-4; pre-purchase-sewer-inspection: problem-4; preventative-sewer-maintenance: problem-4; recurring-sewer-backup-diagnosis: problem-4; sewer-camera-inspection: problem-4; sewer-cleaning-camera-inspection: problem-4; sewer-cleaning: problem-4; sewer-line-locating: problem-4; system-street

### IMG-30  Older home with a visible cleanout (Las Vegas)

- **Filename:** `public/images/shared/residential/the-sewer-pros-las-vegas-older-home-visible-cleanout-4x3.webp`
- **Slot ratio:** 4:3 (1448 x 1086)
- **Type:** Photorealistic render. Priority P3.
- **Subject and composition:** Front or side view of an older single-family home, camera at eye level from the yard, a sewer cleanout cap visible near the foundation in the lower third.
- **Must NOT appear:** No house numbers, mailbox, vehicles, people, "for sale" signs or real-estate branding. No visible damage presented as a defect. Plus the common rules above. Equipment shown in this render is owner-approved (Oct 12, 2026).
- **Alt text:** Home exterior with a capped cleanout pipe in the yard, and a sewer camera reel with an open monitor beside it
- **Photorealistic render prompt or shoot:** Render prompt or location photo. Keep the home generic so it cannot be identified; the cleanout must be clearly visible. Market look (Las Vegas): stucco homes with tile roofs, gravel or desert landscaping, block-wall fences, bright dry daylight. Do not show a landmark or anything that says the image is of a specific street.
- **Reuse scope:** per market (Las Vegas). Fills 4 boxes: 4 on service + location pages (pageImageSlots in content/pages/sl-*.tsx).
- **Slot ids:** pre-purchase-sewer-inspection: problem-1

