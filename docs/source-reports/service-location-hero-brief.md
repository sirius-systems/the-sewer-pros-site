# Service + location hero brief

A generation brief, not images. Nothing here has been generated and no image file was added. It specifies one hero image per service per market (9 services x 3 markets = 27 files) for the 144 service + location pages, which have a hero slot and no hero image today (`content.heroImage` in `components/templates/ServiceLocationPageTemplate.tsx` renders an image behind the hero copy when one is set).

## Rule: which page uses which image

- A service + location page uses the hero for **its service in its market**: `/locations/<market-id>/<city>/<service>/` takes `<market-id>` + `<service>`. All pages of one service in one market share that one image (St. Louis has 5 cities, San Diego 7, Las Vegas 4), so 27 files cover all 144 pages.
- Never use another market's file. A page whose market-and-service file does not exist renders no hero image (the text hero it has today); it must not fall back to another market or to a generic hero.
- The location hubs and market hubs keep their own heroes; these files are for service + location pages only.
- City-level variation (a Chesterfield-specific frame, say) is a later step. It would replace the market file for that city only and never reuse another city's.
- Wiring when files exist: resolve `heroImage` from `/images/markets/<market-id>/service-heroes/<file>` in `content/pages/service-location-shared.ts` with a build-time existence check, as `BackdropImage` does. The image renders under the existing black `hero-scrim` with `alt=""` (decorative backdrop); the alt below is for the registry and any future non-decorative use.

## Requirements for every image

- 16:9, generated at least 2560 x 1440, delivered as WebP at 1920 x 1080. Then run `scripts/compress-images.mjs` (hero budget 200 KB) and `scripts/generate-image-variants.mjs`.
- Photorealistic render in the style of the approved renders (see `docs/image-generator-prompts.md`): scene-only, not a job photo, never described as one.
- **Equipment is limited to the owner-confirmed list** (DEC-132, DEC-133): RIDGID K-7500 drain-cleaning machine, SeeSnake CS12x, SeeSnake Standard Camera Reel with TruSense, SeekTech SR-20, Mongoose 184LT trailer-mounted sewer jetter. The names appear in the prompts so the model draws the right kind of machine; **no brand text may be legible in the result**.
- Reject and re-run any result with text or numbers, a logo, a person or face, a vehicle with text or a plate, a sign, excavation or repair, damage, or a pipe interior with a numeric overlay. Run OCR (`node scripts/ocr-images.mjs`) before accepting.
- Setting by market (use the same wording across a market so its nine images read as one set):
  - **St. Louis** (St. Louis City, Ballwin, Chesterfield, Florissant, St. Charles): an older St. Louis neighborhood: red-brick bungalows and two-story brick houses with porches, mature deciduous trees, green lawns, concrete sidewalks with a curb, soft overcast to natural daylight.
  - **San Diego** (San Diego, Carlsbad, Chula Vista, Escondido, Mission Valley, Oceanside, San Marcos): a Southern California neighborhood: single-story stucco ranch houses with low-pitch tile or composition roofs, palm trees, agave and drought-tolerant planting, decomposed-granite or gravel beds, bright coastal daylight with a clear sky.
  - **Las Vegas** (Las Vegas, Henderson, North Las Vegas, Summerlin): a Las Vegas valley neighborhood: stucco houses with terracotta-tile roofs, desert landscaping with river rock and gravel, block-wall property lines, a few palms and yuccas, hard clear desert daylight, a faint low mountain line far behind.

Common style suffix for every prompt: `photorealistic render, natural daylight, realistic materials and textures, neutral documentary look, muted natural color, uncluttered composition, wide 16:9 framing with the subject in the right half and open, calm space in the left half for headline text, matches the existing Sewer Pros renders`

Common negative suffix: `no text, no letters, no numbers, no logos, no signs, no house numbers, no license plates, no vehicles with text, no people, no faces, no excavation, no trench, no pipe replacement or repair work, no visible damage, no brand names or badges on any equipment`

## The 27 images

| # | Market | Service | File (under `public/images/markets/`) | Used by |
|---|---|---|---|---|
| 1 | St. Louis | Sewer Camera Inspection | `st-louis-mo/service-heroes/the-sewer-pros-st-louis-sewer-camera-inspection-hero-16x9.webp` | 5 pages |
| 2 | St. Louis | Sewer Cleaning | `st-louis-mo/service-heroes/the-sewer-pros-st-louis-sewer-cleaning-hero-16x9.webp` | 5 pages |
| 3 | St. Louis | Hydro Jetting | `st-louis-mo/service-heroes/the-sewer-pros-st-louis-hydro-jetting-hero-16x9.webp` | 5 pages |
| 4 | St. Louis | Sewer Cleaning and Camera Inspection | `st-louis-mo/service-heroes/the-sewer-pros-st-louis-sewer-cleaning-camera-inspection-hero-16x9.webp` | 5 pages |
| 5 | St. Louis | Sewer Line Locating | `st-louis-mo/service-heroes/the-sewer-pros-st-louis-sewer-line-locating-hero-16x9.webp` | 5 pages |
| 6 | St. Louis | Drain Cleaning | `st-louis-mo/service-heroes/the-sewer-pros-st-louis-drain-cleaning-hero-16x9.webp` | 5 pages |
| 7 | St. Louis | Pre-Purchase Sewer Inspection | `st-louis-mo/service-heroes/the-sewer-pros-st-louis-pre-purchase-sewer-inspection-hero-16x9.webp` | 5 pages |
| 8 | St. Louis | Recurring Sewer Backup Diagnosis | `st-louis-mo/service-heroes/the-sewer-pros-st-louis-recurring-sewer-backup-diagnosis-hero-16x9.webp` | 5 pages |
| 9 | St. Louis | Preventative Sewer Maintenance | `st-louis-mo/service-heroes/the-sewer-pros-st-louis-preventative-sewer-maintenance-hero-16x9.webp` | 5 pages |
| 10 | San Diego | Sewer Camera Inspection | `san-diego-ca/service-heroes/the-sewer-pros-san-diego-sewer-camera-inspection-hero-16x9.webp` | 7 pages |
| 11 | San Diego | Sewer Cleaning | `san-diego-ca/service-heroes/the-sewer-pros-san-diego-sewer-cleaning-hero-16x9.webp` | 7 pages |
| 12 | San Diego | Hydro Jetting | `san-diego-ca/service-heroes/the-sewer-pros-san-diego-hydro-jetting-hero-16x9.webp` | 7 pages |
| 13 | San Diego | Sewer Cleaning and Camera Inspection | `san-diego-ca/service-heroes/the-sewer-pros-san-diego-sewer-cleaning-camera-inspection-hero-16x9.webp` | 7 pages |
| 14 | San Diego | Sewer Line Locating | `san-diego-ca/service-heroes/the-sewer-pros-san-diego-sewer-line-locating-hero-16x9.webp` | 7 pages |
| 15 | San Diego | Drain Cleaning | `san-diego-ca/service-heroes/the-sewer-pros-san-diego-drain-cleaning-hero-16x9.webp` | 7 pages |
| 16 | San Diego | Pre-Purchase Sewer Inspection | `san-diego-ca/service-heroes/the-sewer-pros-san-diego-pre-purchase-sewer-inspection-hero-16x9.webp` | 7 pages |
| 17 | San Diego | Recurring Sewer Backup Diagnosis | `san-diego-ca/service-heroes/the-sewer-pros-san-diego-recurring-sewer-backup-diagnosis-hero-16x9.webp` | 7 pages |
| 18 | San Diego | Preventative Sewer Maintenance | `san-diego-ca/service-heroes/the-sewer-pros-san-diego-preventative-sewer-maintenance-hero-16x9.webp` | 7 pages |
| 19 | Las Vegas | Sewer Camera Inspection | `las-vegas-nv/service-heroes/the-sewer-pros-las-vegas-sewer-camera-inspection-hero-16x9.webp` | 4 pages |
| 20 | Las Vegas | Sewer Cleaning | `las-vegas-nv/service-heroes/the-sewer-pros-las-vegas-sewer-cleaning-hero-16x9.webp` | 4 pages |
| 21 | Las Vegas | Hydro Jetting | `las-vegas-nv/service-heroes/the-sewer-pros-las-vegas-hydro-jetting-hero-16x9.webp` | 4 pages |
| 22 | Las Vegas | Sewer Cleaning and Camera Inspection | `las-vegas-nv/service-heroes/the-sewer-pros-las-vegas-sewer-cleaning-camera-inspection-hero-16x9.webp` | 4 pages |
| 23 | Las Vegas | Sewer Line Locating | `las-vegas-nv/service-heroes/the-sewer-pros-las-vegas-sewer-line-locating-hero-16x9.webp` | 4 pages |
| 24 | Las Vegas | Drain Cleaning | `las-vegas-nv/service-heroes/the-sewer-pros-las-vegas-drain-cleaning-hero-16x9.webp` | 4 pages |
| 25 | Las Vegas | Pre-Purchase Sewer Inspection | `las-vegas-nv/service-heroes/the-sewer-pros-las-vegas-pre-purchase-sewer-inspection-hero-16x9.webp` | 4 pages |
| 26 | Las Vegas | Recurring Sewer Backup Diagnosis | `las-vegas-nv/service-heroes/the-sewer-pros-las-vegas-recurring-sewer-backup-diagnosis-hero-16x9.webp` | 4 pages |
| 27 | Las Vegas | Preventative Sewer Maintenance | `las-vegas-nv/service-heroes/the-sewer-pros-las-vegas-preventative-sewer-maintenance-hero-16x9.webp` | 4 pages |

Total pages covered: 5 x 9 + 7 x 9 + 4 x 9 = 144.

## Prompts and alt text

### 1. St. Louis: Sewer Camera Inspection

- **File:** `public/images/markets/st-louis-mo/service-heroes/the-sewer-pros-st-louis-sewer-camera-inspection-hero-16x9.webp`
- **Slot:** `heroImage` on the Sewer Camera Inspection service + location pages in St. Louis (St. Louis City, Ballwin, Chesterfield, Florissant, St. Charles).
- **Alt (scene-only):** Sewer camera reel and an open monitor beside an exterior cleanout at the base of a house wall.
- **Equipment (confirmed names only):** RIDGID SeeSnake Standard Camera Reel with TruSense and a SeeSnake CS12x monitor.
- **Prompt:**

  ```text
  Photorealistic render of a sewer camera reel and an open rugged inspection monitor standing on the ground beside an open exterior cleanout at the base of the house wall, the push cable running from the reel into the cleanout, set in an older St. Louis neighborhood: red-brick bungalows and two-story brick houses with porches, mature deciduous trees, green lawns, concrete sidewalks with a curb, soft overcast to natural daylight. photorealistic render, natural daylight, realistic materials and textures, neutral documentary look, muted natural color, uncluttered composition, wide 16:9 framing with the subject in the right half and open, calm space in the left half for headline text, matches the existing Sewer Pros renders. no text, no letters, no numbers, no logos, no signs, no house numbers, no license plates, no vehicles with text, no people, no faces, no excavation, no trench, no pipe replacement or repair work, no visible damage, no brand names or badges on any equipment.
  ```

### 2. St. Louis: Sewer Cleaning

- **File:** `public/images/markets/st-louis-mo/service-heroes/the-sewer-pros-st-louis-sewer-cleaning-hero-16x9.webp`
- **Slot:** `heroImage` on the Sewer Cleaning service + location pages in St. Louis (St. Louis City, Ballwin, Chesterfield, Florissant, St. Charles).
- **Alt (scene-only):** Red drum cleaning machine with its cable running into an open exterior cleanout.
- **Equipment (confirmed names only):** RIDGID K-7500 drain-cleaning machine.
- **Prompt:**

  ```text
  Photorealistic render of a red drum-type cleaning machine on the ground beside an exterior cleanout, its cable running into the open cleanout, set in an older St. Louis neighborhood: red-brick bungalows and two-story brick houses with porches, mature deciduous trees, green lawns, concrete sidewalks with a curb, soft overcast to natural daylight. photorealistic render, natural daylight, realistic materials and textures, neutral documentary look, muted natural color, uncluttered composition, wide 16:9 framing with the subject in the right half and open, calm space in the left half for headline text, matches the existing Sewer Pros renders. no text, no letters, no numbers, no logos, no signs, no house numbers, no license plates, no vehicles with text, no people, no faces, no excavation, no trench, no pipe replacement or repair work, no visible damage, no brand names or badges on any equipment.
  ```

### 3. St. Louis: Hydro Jetting

- **File:** `public/images/markets/st-louis-mo/service-heroes/the-sewer-pros-st-louis-hydro-jetting-hero-16x9.webp`
- **Slot:** `heroImage` on the Hydro Jetting service + location pages in St. Louis (St. Louis City, Ballwin, Chesterfield, Florissant, St. Charles).
- **Alt (scene-only):** Trailer-mounted jetter at the curb with its hose running across the lawn to an open cleanout.
- **Equipment (confirmed names only):** Mongoose 184LT trailer-mounted sewer jetter.
- **Prompt:**

  ```text
  Photorealistic render of a trailer-mounted sewer jetter parked at the curb with its hose reel, the jetting hose running across the lawn to an open exterior cleanout, the nozzle resting by the cleanout; no license plate, no text on the trailer, set in an older St. Louis neighborhood: red-brick bungalows and two-story brick houses with porches, mature deciduous trees, green lawns, concrete sidewalks with a curb, soft overcast to natural daylight. photorealistic render, natural daylight, realistic materials and textures, neutral documentary look, muted natural color, uncluttered composition, wide 16:9 framing with the subject in the right half and open, calm space in the left half for headline text, matches the existing Sewer Pros renders. no text, no letters, no numbers, no logos, no signs, no house numbers, no license plates, no vehicles with text, no people, no faces, no excavation, no trench, no pipe replacement or repair work, no visible damage, no brand names or badges on any equipment.
  ```

### 4. St. Louis: Sewer Cleaning and Camera Inspection

- **File:** `public/images/markets/st-louis-mo/service-heroes/the-sewer-pros-st-louis-sewer-cleaning-camera-inspection-hero-16x9.webp`
- **Slot:** `heroImage` on the Sewer Cleaning and Camera Inspection service + location pages in St. Louis (St. Louis City, Ballwin, Chesterfield, Florissant, St. Charles).
- **Alt (scene-only):** Cleaning machine at an open cleanout with a camera reel and open monitor set up beside it.
- **Equipment (confirmed names only):** RIDGID K-7500 drain-cleaning machine and a SeeSnake CS12x monitor.
- **Prompt:**

  ```text
  Photorealistic render of a red cleaning machine with its cable in an open cleanout and, a few steps away on the lawn, a camera reel with an open monitor, both set up together at the same cleanout, set in an older St. Louis neighborhood: red-brick bungalows and two-story brick houses with porches, mature deciduous trees, green lawns, concrete sidewalks with a curb, soft overcast to natural daylight. photorealistic render, natural daylight, realistic materials and textures, neutral documentary look, muted natural color, uncluttered composition, wide 16:9 framing with the subject in the right half and open, calm space in the left half for headline text, matches the existing Sewer Pros renders. no text, no letters, no numbers, no logos, no signs, no house numbers, no license plates, no vehicles with text, no people, no faces, no excavation, no trench, no pipe replacement or repair work, no visible damage, no brand names or badges on any equipment.
  ```

### 5. St. Louis: Sewer Line Locating

- **File:** `public/images/markets/st-louis-mo/service-heroes/the-sewer-pros-st-louis-sewer-line-locating-hero-16x9.webp`
- **Slot:** `heroImage` on the Sewer Line Locating service + location pages in St. Louis (St. Louis City, Ballwin, Chesterfield, Florissant, St. Charles).
- **Alt (scene-only):** Yellow locator receiver standing on a lawn beside a sidewalk with orange and blue paint marks.
- **Equipment (confirmed names only):** SeekTech SR-20 locator receiver.
- **Prompt:**

  ```text
  Photorealistic render of a yellow handheld locator receiver standing on the lawn beside a sidewalk, with blank orange and blue spray-paint marks on the pavement (marks only, no letters or numbers), set in an older St. Louis neighborhood: red-brick bungalows and two-story brick houses with porches, mature deciduous trees, green lawns, concrete sidewalks with a curb, soft overcast to natural daylight. photorealistic render, natural daylight, realistic materials and textures, neutral documentary look, muted natural color, uncluttered composition, wide 16:9 framing with the subject in the right half and open, calm space in the left half for headline text, matches the existing Sewer Pros renders. no text, no letters, no numbers, no logos, no signs, no house numbers, no license plates, no vehicles with text, no people, no faces, no excavation, no trench, no pipe replacement or repair work, no visible damage, no brand names or badges on any equipment.
  ```

### 6. St. Louis: Drain Cleaning

- **File:** `public/images/markets/st-louis-mo/service-heroes/the-sewer-pros-st-louis-drain-cleaning-hero-16x9.webp`
- **Slot:** `heroImage` on the Drain Cleaning service + location pages in St. Louis (St. Louis City, Ballwin, Chesterfield, Florissant, St. Charles).
- **Alt (scene-only):** Red drain machine on a concrete floor with its cable running into an open floor drain.
- **Equipment (confirmed names only):** RIDGID K-7500 drain-cleaning machine.
- **Prompt:**

  ```text
  Photorealistic render of indoors, a red drum drain machine standing on a plain concrete floor with its cable running down an open floor drain, the drain grate lying beside it, set in an older St. Louis neighborhood: red-brick bungalows and two-story brick houses with porches, mature deciduous trees, green lawns, concrete sidewalks with a curb, soft overcast to natural daylight. photorealistic render, natural daylight, realistic materials and textures, neutral documentary look, muted natural color, uncluttered composition, wide 16:9 framing with the subject in the right half and open, calm space in the left half for headline text, matches the existing Sewer Pros renders. no text, no letters, no numbers, no logos, no signs, no house numbers, no license plates, no vehicles with text, no people, no faces, no excavation, no trench, no pipe replacement or repair work, no visible damage, no brand names or badges on any equipment.
  ```

### 7. St. Louis: Pre-Purchase Sewer Inspection

- **File:** `public/images/markets/st-louis-mo/service-heroes/the-sewer-pros-st-louis-pre-purchase-sewer-inspection-hero-16x9.webp`
- **Slot:** `heroImage` on the Pre-Purchase Sewer Inspection service + location pages in St. Louis (St. Louis City, Ballwin, Chesterfield, Florissant, St. Charles).
- **Alt (scene-only):** Camera reel, a small monitor and a clipboard on the ground beside an open cleanout in a front yard.
- **Equipment (confirmed names only):** SeeSnake Standard Camera Reel with TruSense and a SeeSnake CS12x monitor.
- **Prompt:**

  ```text
  Photorealistic render of the front yard of an unoccupied house, a camera reel and a small monitor staged beside an open cleanout and a blank clipboard on the ground; no for-sale sign, no sign of any kind, set in an older St. Louis neighborhood: red-brick bungalows and two-story brick houses with porches, mature deciduous trees, green lawns, concrete sidewalks with a curb, soft overcast to natural daylight. photorealistic render, natural daylight, realistic materials and textures, neutral documentary look, muted natural color, uncluttered composition, wide 16:9 framing with the subject in the right half and open, calm space in the left half for headline text, matches the existing Sewer Pros renders. no text, no letters, no numbers, no logos, no signs, no house numbers, no license plates, no vehicles with text, no people, no faces, no excavation, no trench, no pipe replacement or repair work, no visible damage, no brand names or badges on any equipment.
  ```

### 8. St. Louis: Recurring Sewer Backup Diagnosis

- **File:** `public/images/markets/st-louis-mo/service-heroes/the-sewer-pros-st-louis-recurring-sewer-backup-diagnosis-hero-16x9.webp`
- **Slot:** `heroImage` on the Recurring Sewer Backup Diagnosis service + location pages in St. Louis (St. Louis City, Ballwin, Chesterfield, Florissant, St. Charles).
- **Alt (scene-only):** Open monitor on a lawn beside a cleanout, its screen showing the inside of a pipe.
- **Equipment (confirmed names only):** SeeSnake CS12x monitor.
- **Prompt:**

  ```text
  Photorealistic render of an open rugged monitor on the lawn beside an exterior cleanout, the monitor screen showing the inside of a pipe with a few tree roots at a joint (screen content only, no numbers, no text overlay), set in an older St. Louis neighborhood: red-brick bungalows and two-story brick houses with porches, mature deciduous trees, green lawns, concrete sidewalks with a curb, soft overcast to natural daylight. photorealistic render, natural daylight, realistic materials and textures, neutral documentary look, muted natural color, uncluttered composition, wide 16:9 framing with the subject in the right half and open, calm space in the left half for headline text, matches the existing Sewer Pros renders. no text, no letters, no numbers, no logos, no signs, no house numbers, no license plates, no vehicles with text, no people, no faces, no excavation, no trench, no pipe replacement or repair work, no visible damage, no brand names or badges on any equipment.
  ```

### 9. St. Louis: Preventative Sewer Maintenance

- **File:** `public/images/markets/st-louis-mo/service-heroes/the-sewer-pros-st-louis-preventative-sewer-maintenance-hero-16x9.webp`
- **Slot:** `heroImage` on the Preventative Sewer Maintenance service + location pages in St. Louis (St. Louis City, Ballwin, Chesterfield, Florissant, St. Charles).
- **Alt (scene-only):** Cleaning machine and camera reel set side by side beside a capped exterior cleanout in a tidy yard.
- **Equipment (confirmed names only):** RIDGID K-7500 drain-cleaning machine and a SeeSnake Standard Camera Reel with TruSense.
- **Prompt:**

  ```text
  Photorealistic render of a tidy front yard with a red drum cleaning machine and a camera reel set neatly side by side at a capped exterior cleanout, calm and orderly, nothing in disrepair, set in an older St. Louis neighborhood: red-brick bungalows and two-story brick houses with porches, mature deciduous trees, green lawns, concrete sidewalks with a curb, soft overcast to natural daylight. photorealistic render, natural daylight, realistic materials and textures, neutral documentary look, muted natural color, uncluttered composition, wide 16:9 framing with the subject in the right half and open, calm space in the left half for headline text, matches the existing Sewer Pros renders. no text, no letters, no numbers, no logos, no signs, no house numbers, no license plates, no vehicles with text, no people, no faces, no excavation, no trench, no pipe replacement or repair work, no visible damage, no brand names or badges on any equipment.
  ```

### 10. San Diego: Sewer Camera Inspection

- **File:** `public/images/markets/san-diego-ca/service-heroes/the-sewer-pros-san-diego-sewer-camera-inspection-hero-16x9.webp`
- **Slot:** `heroImage` on the Sewer Camera Inspection service + location pages in San Diego (San Diego, Carlsbad, Chula Vista, Escondido, Mission Valley, Oceanside, San Marcos).
- **Alt (scene-only):** Sewer camera reel and an open monitor beside an exterior cleanout at the base of a house wall.
- **Equipment (confirmed names only):** RIDGID SeeSnake Standard Camera Reel with TruSense and a SeeSnake CS12x monitor.
- **Prompt:**

  ```text
  Photorealistic render of a sewer camera reel and an open rugged inspection monitor standing on the ground beside an open exterior cleanout at the base of the house wall, the push cable running from the reel into the cleanout, set in a Southern California neighborhood: single-story stucco ranch houses with low-pitch tile or composition roofs, palm trees, agave and drought-tolerant planting, decomposed-granite or gravel beds, bright coastal daylight with a clear sky. photorealistic render, natural daylight, realistic materials and textures, neutral documentary look, muted natural color, uncluttered composition, wide 16:9 framing with the subject in the right half and open, calm space in the left half for headline text, matches the existing Sewer Pros renders. no text, no letters, no numbers, no logos, no signs, no house numbers, no license plates, no vehicles with text, no people, no faces, no excavation, no trench, no pipe replacement or repair work, no visible damage, no brand names or badges on any equipment.
  ```

### 11. San Diego: Sewer Cleaning

- **File:** `public/images/markets/san-diego-ca/service-heroes/the-sewer-pros-san-diego-sewer-cleaning-hero-16x9.webp`
- **Slot:** `heroImage` on the Sewer Cleaning service + location pages in San Diego (San Diego, Carlsbad, Chula Vista, Escondido, Mission Valley, Oceanside, San Marcos).
- **Alt (scene-only):** Red drum cleaning machine with its cable running into an open exterior cleanout.
- **Equipment (confirmed names only):** RIDGID K-7500 drain-cleaning machine.
- **Prompt:**

  ```text
  Photorealistic render of a red drum-type cleaning machine on the ground beside an exterior cleanout, its cable running into the open cleanout, set in a Southern California neighborhood: single-story stucco ranch houses with low-pitch tile or composition roofs, palm trees, agave and drought-tolerant planting, decomposed-granite or gravel beds, bright coastal daylight with a clear sky. photorealistic render, natural daylight, realistic materials and textures, neutral documentary look, muted natural color, uncluttered composition, wide 16:9 framing with the subject in the right half and open, calm space in the left half for headline text, matches the existing Sewer Pros renders. no text, no letters, no numbers, no logos, no signs, no house numbers, no license plates, no vehicles with text, no people, no faces, no excavation, no trench, no pipe replacement or repair work, no visible damage, no brand names or badges on any equipment.
  ```

### 12. San Diego: Hydro Jetting

- **File:** `public/images/markets/san-diego-ca/service-heroes/the-sewer-pros-san-diego-hydro-jetting-hero-16x9.webp`
- **Slot:** `heroImage` on the Hydro Jetting service + location pages in San Diego (San Diego, Carlsbad, Chula Vista, Escondido, Mission Valley, Oceanside, San Marcos).
- **Alt (scene-only):** Trailer-mounted jetter at the curb with its hose running across the lawn to an open cleanout.
- **Equipment (confirmed names only):** Mongoose 184LT trailer-mounted sewer jetter.
- **Prompt:**

  ```text
  Photorealistic render of a trailer-mounted sewer jetter parked at the curb with its hose reel, the jetting hose running across the lawn to an open exterior cleanout, the nozzle resting by the cleanout; no license plate, no text on the trailer, set in a Southern California neighborhood: single-story stucco ranch houses with low-pitch tile or composition roofs, palm trees, agave and drought-tolerant planting, decomposed-granite or gravel beds, bright coastal daylight with a clear sky. photorealistic render, natural daylight, realistic materials and textures, neutral documentary look, muted natural color, uncluttered composition, wide 16:9 framing with the subject in the right half and open, calm space in the left half for headline text, matches the existing Sewer Pros renders. no text, no letters, no numbers, no logos, no signs, no house numbers, no license plates, no vehicles with text, no people, no faces, no excavation, no trench, no pipe replacement or repair work, no visible damage, no brand names or badges on any equipment.
  ```

### 13. San Diego: Sewer Cleaning and Camera Inspection

- **File:** `public/images/markets/san-diego-ca/service-heroes/the-sewer-pros-san-diego-sewer-cleaning-camera-inspection-hero-16x9.webp`
- **Slot:** `heroImage` on the Sewer Cleaning and Camera Inspection service + location pages in San Diego (San Diego, Carlsbad, Chula Vista, Escondido, Mission Valley, Oceanside, San Marcos).
- **Alt (scene-only):** Cleaning machine at an open cleanout with a camera reel and open monitor set up beside it.
- **Equipment (confirmed names only):** RIDGID K-7500 drain-cleaning machine and a SeeSnake CS12x monitor.
- **Prompt:**

  ```text
  Photorealistic render of a red cleaning machine with its cable in an open cleanout and, a few steps away on the lawn, a camera reel with an open monitor, both set up together at the same cleanout, set in a Southern California neighborhood: single-story stucco ranch houses with low-pitch tile or composition roofs, palm trees, agave and drought-tolerant planting, decomposed-granite or gravel beds, bright coastal daylight with a clear sky. photorealistic render, natural daylight, realistic materials and textures, neutral documentary look, muted natural color, uncluttered composition, wide 16:9 framing with the subject in the right half and open, calm space in the left half for headline text, matches the existing Sewer Pros renders. no text, no letters, no numbers, no logos, no signs, no house numbers, no license plates, no vehicles with text, no people, no faces, no excavation, no trench, no pipe replacement or repair work, no visible damage, no brand names or badges on any equipment.
  ```

### 14. San Diego: Sewer Line Locating

- **File:** `public/images/markets/san-diego-ca/service-heroes/the-sewer-pros-san-diego-sewer-line-locating-hero-16x9.webp`
- **Slot:** `heroImage` on the Sewer Line Locating service + location pages in San Diego (San Diego, Carlsbad, Chula Vista, Escondido, Mission Valley, Oceanside, San Marcos).
- **Alt (scene-only):** Yellow locator receiver standing on a lawn beside a sidewalk with orange and blue paint marks.
- **Equipment (confirmed names only):** SeekTech SR-20 locator receiver.
- **Prompt:**

  ```text
  Photorealistic render of a yellow handheld locator receiver standing on the lawn beside a sidewalk, with blank orange and blue spray-paint marks on the pavement (marks only, no letters or numbers), set in a Southern California neighborhood: single-story stucco ranch houses with low-pitch tile or composition roofs, palm trees, agave and drought-tolerant planting, decomposed-granite or gravel beds, bright coastal daylight with a clear sky. photorealistic render, natural daylight, realistic materials and textures, neutral documentary look, muted natural color, uncluttered composition, wide 16:9 framing with the subject in the right half and open, calm space in the left half for headline text, matches the existing Sewer Pros renders. no text, no letters, no numbers, no logos, no signs, no house numbers, no license plates, no vehicles with text, no people, no faces, no excavation, no trench, no pipe replacement or repair work, no visible damage, no brand names or badges on any equipment.
  ```

### 15. San Diego: Drain Cleaning

- **File:** `public/images/markets/san-diego-ca/service-heroes/the-sewer-pros-san-diego-drain-cleaning-hero-16x9.webp`
- **Slot:** `heroImage` on the Drain Cleaning service + location pages in San Diego (San Diego, Carlsbad, Chula Vista, Escondido, Mission Valley, Oceanside, San Marcos).
- **Alt (scene-only):** Red drain machine on a concrete floor with its cable running into an open floor drain.
- **Equipment (confirmed names only):** RIDGID K-7500 drain-cleaning machine.
- **Prompt:**

  ```text
  Photorealistic render of indoors, a red drum drain machine standing on a plain concrete floor with its cable running down an open floor drain, the drain grate lying beside it, set in a Southern California neighborhood: single-story stucco ranch houses with low-pitch tile or composition roofs, palm trees, agave and drought-tolerant planting, decomposed-granite or gravel beds, bright coastal daylight with a clear sky. photorealistic render, natural daylight, realistic materials and textures, neutral documentary look, muted natural color, uncluttered composition, wide 16:9 framing with the subject in the right half and open, calm space in the left half for headline text, matches the existing Sewer Pros renders. no text, no letters, no numbers, no logos, no signs, no house numbers, no license plates, no vehicles with text, no people, no faces, no excavation, no trench, no pipe replacement or repair work, no visible damage, no brand names or badges on any equipment.
  ```

### 16. San Diego: Pre-Purchase Sewer Inspection

- **File:** `public/images/markets/san-diego-ca/service-heroes/the-sewer-pros-san-diego-pre-purchase-sewer-inspection-hero-16x9.webp`
- **Slot:** `heroImage` on the Pre-Purchase Sewer Inspection service + location pages in San Diego (San Diego, Carlsbad, Chula Vista, Escondido, Mission Valley, Oceanside, San Marcos).
- **Alt (scene-only):** Camera reel, a small monitor and a clipboard on the ground beside an open cleanout in a front yard.
- **Equipment (confirmed names only):** SeeSnake Standard Camera Reel with TruSense and a SeeSnake CS12x monitor.
- **Prompt:**

  ```text
  Photorealistic render of the front yard of an unoccupied house, a camera reel and a small monitor staged beside an open cleanout and a blank clipboard on the ground; no for-sale sign, no sign of any kind, set in a Southern California neighborhood: single-story stucco ranch houses with low-pitch tile or composition roofs, palm trees, agave and drought-tolerant planting, decomposed-granite or gravel beds, bright coastal daylight with a clear sky. photorealistic render, natural daylight, realistic materials and textures, neutral documentary look, muted natural color, uncluttered composition, wide 16:9 framing with the subject in the right half and open, calm space in the left half for headline text, matches the existing Sewer Pros renders. no text, no letters, no numbers, no logos, no signs, no house numbers, no license plates, no vehicles with text, no people, no faces, no excavation, no trench, no pipe replacement or repair work, no visible damage, no brand names or badges on any equipment.
  ```

### 17. San Diego: Recurring Sewer Backup Diagnosis

- **File:** `public/images/markets/san-diego-ca/service-heroes/the-sewer-pros-san-diego-recurring-sewer-backup-diagnosis-hero-16x9.webp`
- **Slot:** `heroImage` on the Recurring Sewer Backup Diagnosis service + location pages in San Diego (San Diego, Carlsbad, Chula Vista, Escondido, Mission Valley, Oceanside, San Marcos).
- **Alt (scene-only):** Open monitor on a lawn beside a cleanout, its screen showing the inside of a pipe.
- **Equipment (confirmed names only):** SeeSnake CS12x monitor.
- **Prompt:**

  ```text
  Photorealistic render of an open rugged monitor on the lawn beside an exterior cleanout, the monitor screen showing the inside of a pipe with a few tree roots at a joint (screen content only, no numbers, no text overlay), set in a Southern California neighborhood: single-story stucco ranch houses with low-pitch tile or composition roofs, palm trees, agave and drought-tolerant planting, decomposed-granite or gravel beds, bright coastal daylight with a clear sky. photorealistic render, natural daylight, realistic materials and textures, neutral documentary look, muted natural color, uncluttered composition, wide 16:9 framing with the subject in the right half and open, calm space in the left half for headline text, matches the existing Sewer Pros renders. no text, no letters, no numbers, no logos, no signs, no house numbers, no license plates, no vehicles with text, no people, no faces, no excavation, no trench, no pipe replacement or repair work, no visible damage, no brand names or badges on any equipment.
  ```

### 18. San Diego: Preventative Sewer Maintenance

- **File:** `public/images/markets/san-diego-ca/service-heroes/the-sewer-pros-san-diego-preventative-sewer-maintenance-hero-16x9.webp`
- **Slot:** `heroImage` on the Preventative Sewer Maintenance service + location pages in San Diego (San Diego, Carlsbad, Chula Vista, Escondido, Mission Valley, Oceanside, San Marcos).
- **Alt (scene-only):** Cleaning machine and camera reel set side by side beside a capped exterior cleanout in a tidy yard.
- **Equipment (confirmed names only):** RIDGID K-7500 drain-cleaning machine and a SeeSnake Standard Camera Reel with TruSense.
- **Prompt:**

  ```text
  Photorealistic render of a tidy front yard with a red drum cleaning machine and a camera reel set neatly side by side at a capped exterior cleanout, calm and orderly, nothing in disrepair, set in a Southern California neighborhood: single-story stucco ranch houses with low-pitch tile or composition roofs, palm trees, agave and drought-tolerant planting, decomposed-granite or gravel beds, bright coastal daylight with a clear sky. photorealistic render, natural daylight, realistic materials and textures, neutral documentary look, muted natural color, uncluttered composition, wide 16:9 framing with the subject in the right half and open, calm space in the left half for headline text, matches the existing Sewer Pros renders. no text, no letters, no numbers, no logos, no signs, no house numbers, no license plates, no vehicles with text, no people, no faces, no excavation, no trench, no pipe replacement or repair work, no visible damage, no brand names or badges on any equipment.
  ```

### 19. Las Vegas: Sewer Camera Inspection

- **File:** `public/images/markets/las-vegas-nv/service-heroes/the-sewer-pros-las-vegas-sewer-camera-inspection-hero-16x9.webp`
- **Slot:** `heroImage` on the Sewer Camera Inspection service + location pages in Las Vegas (Las Vegas, Henderson, North Las Vegas, Summerlin).
- **Alt (scene-only):** Sewer camera reel and an open monitor beside an exterior cleanout at the base of a house wall.
- **Equipment (confirmed names only):** RIDGID SeeSnake Standard Camera Reel with TruSense and a SeeSnake CS12x monitor.
- **Prompt:**

  ```text
  Photorealistic render of a sewer camera reel and an open rugged inspection monitor standing on the ground beside an open exterior cleanout at the base of the house wall, the push cable running from the reel into the cleanout, set in a Las Vegas valley neighborhood: stucco houses with terracotta-tile roofs, desert landscaping with river rock and gravel, block-wall property lines, a few palms and yuccas, hard clear desert daylight, a faint low mountain line far behind. photorealistic render, natural daylight, realistic materials and textures, neutral documentary look, muted natural color, uncluttered composition, wide 16:9 framing with the subject in the right half and open, calm space in the left half for headline text, matches the existing Sewer Pros renders. no text, no letters, no numbers, no logos, no signs, no house numbers, no license plates, no vehicles with text, no people, no faces, no excavation, no trench, no pipe replacement or repair work, no visible damage, no brand names or badges on any equipment.
  ```

### 20. Las Vegas: Sewer Cleaning

- **File:** `public/images/markets/las-vegas-nv/service-heroes/the-sewer-pros-las-vegas-sewer-cleaning-hero-16x9.webp`
- **Slot:** `heroImage` on the Sewer Cleaning service + location pages in Las Vegas (Las Vegas, Henderson, North Las Vegas, Summerlin).
- **Alt (scene-only):** Red drum cleaning machine with its cable running into an open exterior cleanout.
- **Equipment (confirmed names only):** RIDGID K-7500 drain-cleaning machine.
- **Prompt:**

  ```text
  Photorealistic render of a red drum-type cleaning machine on the ground beside an exterior cleanout, its cable running into the open cleanout, set in a Las Vegas valley neighborhood: stucco houses with terracotta-tile roofs, desert landscaping with river rock and gravel, block-wall property lines, a few palms and yuccas, hard clear desert daylight, a faint low mountain line far behind. photorealistic render, natural daylight, realistic materials and textures, neutral documentary look, muted natural color, uncluttered composition, wide 16:9 framing with the subject in the right half and open, calm space in the left half for headline text, matches the existing Sewer Pros renders. no text, no letters, no numbers, no logos, no signs, no house numbers, no license plates, no vehicles with text, no people, no faces, no excavation, no trench, no pipe replacement or repair work, no visible damage, no brand names or badges on any equipment.
  ```

### 21. Las Vegas: Hydro Jetting

- **File:** `public/images/markets/las-vegas-nv/service-heroes/the-sewer-pros-las-vegas-hydro-jetting-hero-16x9.webp`
- **Slot:** `heroImage` on the Hydro Jetting service + location pages in Las Vegas (Las Vegas, Henderson, North Las Vegas, Summerlin).
- **Alt (scene-only):** Trailer-mounted jetter at the curb with its hose running across the lawn to an open cleanout.
- **Equipment (confirmed names only):** Mongoose 184LT trailer-mounted sewer jetter.
- **Prompt:**

  ```text
  Photorealistic render of a trailer-mounted sewer jetter parked at the curb with its hose reel, the jetting hose running across the lawn to an open exterior cleanout, the nozzle resting by the cleanout; no license plate, no text on the trailer, set in a Las Vegas valley neighborhood: stucco houses with terracotta-tile roofs, desert landscaping with river rock and gravel, block-wall property lines, a few palms and yuccas, hard clear desert daylight, a faint low mountain line far behind. photorealistic render, natural daylight, realistic materials and textures, neutral documentary look, muted natural color, uncluttered composition, wide 16:9 framing with the subject in the right half and open, calm space in the left half for headline text, matches the existing Sewer Pros renders. no text, no letters, no numbers, no logos, no signs, no house numbers, no license plates, no vehicles with text, no people, no faces, no excavation, no trench, no pipe replacement or repair work, no visible damage, no brand names or badges on any equipment.
  ```

### 22. Las Vegas: Sewer Cleaning and Camera Inspection

- **File:** `public/images/markets/las-vegas-nv/service-heroes/the-sewer-pros-las-vegas-sewer-cleaning-camera-inspection-hero-16x9.webp`
- **Slot:** `heroImage` on the Sewer Cleaning and Camera Inspection service + location pages in Las Vegas (Las Vegas, Henderson, North Las Vegas, Summerlin).
- **Alt (scene-only):** Cleaning machine at an open cleanout with a camera reel and open monitor set up beside it.
- **Equipment (confirmed names only):** RIDGID K-7500 drain-cleaning machine and a SeeSnake CS12x monitor.
- **Prompt:**

  ```text
  Photorealistic render of a red cleaning machine with its cable in an open cleanout and, a few steps away on the lawn, a camera reel with an open monitor, both set up together at the same cleanout, set in a Las Vegas valley neighborhood: stucco houses with terracotta-tile roofs, desert landscaping with river rock and gravel, block-wall property lines, a few palms and yuccas, hard clear desert daylight, a faint low mountain line far behind. photorealistic render, natural daylight, realistic materials and textures, neutral documentary look, muted natural color, uncluttered composition, wide 16:9 framing with the subject in the right half and open, calm space in the left half for headline text, matches the existing Sewer Pros renders. no text, no letters, no numbers, no logos, no signs, no house numbers, no license plates, no vehicles with text, no people, no faces, no excavation, no trench, no pipe replacement or repair work, no visible damage, no brand names or badges on any equipment.
  ```

### 23. Las Vegas: Sewer Line Locating

- **File:** `public/images/markets/las-vegas-nv/service-heroes/the-sewer-pros-las-vegas-sewer-line-locating-hero-16x9.webp`
- **Slot:** `heroImage` on the Sewer Line Locating service + location pages in Las Vegas (Las Vegas, Henderson, North Las Vegas, Summerlin).
- **Alt (scene-only):** Yellow locator receiver standing on a lawn beside a sidewalk with orange and blue paint marks.
- **Equipment (confirmed names only):** SeekTech SR-20 locator receiver.
- **Prompt:**

  ```text
  Photorealistic render of a yellow handheld locator receiver standing on the lawn beside a sidewalk, with blank orange and blue spray-paint marks on the pavement (marks only, no letters or numbers), set in a Las Vegas valley neighborhood: stucco houses with terracotta-tile roofs, desert landscaping with river rock and gravel, block-wall property lines, a few palms and yuccas, hard clear desert daylight, a faint low mountain line far behind. photorealistic render, natural daylight, realistic materials and textures, neutral documentary look, muted natural color, uncluttered composition, wide 16:9 framing with the subject in the right half and open, calm space in the left half for headline text, matches the existing Sewer Pros renders. no text, no letters, no numbers, no logos, no signs, no house numbers, no license plates, no vehicles with text, no people, no faces, no excavation, no trench, no pipe replacement or repair work, no visible damage, no brand names or badges on any equipment.
  ```

### 24. Las Vegas: Drain Cleaning

- **File:** `public/images/markets/las-vegas-nv/service-heroes/the-sewer-pros-las-vegas-drain-cleaning-hero-16x9.webp`
- **Slot:** `heroImage` on the Drain Cleaning service + location pages in Las Vegas (Las Vegas, Henderson, North Las Vegas, Summerlin).
- **Alt (scene-only):** Red drain machine on a concrete floor with its cable running into an open floor drain.
- **Equipment (confirmed names only):** RIDGID K-7500 drain-cleaning machine.
- **Prompt:**

  ```text
  Photorealistic render of indoors, a red drum drain machine standing on a plain concrete floor with its cable running down an open floor drain, the drain grate lying beside it, set in a Las Vegas valley neighborhood: stucco houses with terracotta-tile roofs, desert landscaping with river rock and gravel, block-wall property lines, a few palms and yuccas, hard clear desert daylight, a faint low mountain line far behind. photorealistic render, natural daylight, realistic materials and textures, neutral documentary look, muted natural color, uncluttered composition, wide 16:9 framing with the subject in the right half and open, calm space in the left half for headline text, matches the existing Sewer Pros renders. no text, no letters, no numbers, no logos, no signs, no house numbers, no license plates, no vehicles with text, no people, no faces, no excavation, no trench, no pipe replacement or repair work, no visible damage, no brand names or badges on any equipment.
  ```

### 25. Las Vegas: Pre-Purchase Sewer Inspection

- **File:** `public/images/markets/las-vegas-nv/service-heroes/the-sewer-pros-las-vegas-pre-purchase-sewer-inspection-hero-16x9.webp`
- **Slot:** `heroImage` on the Pre-Purchase Sewer Inspection service + location pages in Las Vegas (Las Vegas, Henderson, North Las Vegas, Summerlin).
- **Alt (scene-only):** Camera reel, a small monitor and a clipboard on the ground beside an open cleanout in a front yard.
- **Equipment (confirmed names only):** SeeSnake Standard Camera Reel with TruSense and a SeeSnake CS12x monitor.
- **Prompt:**

  ```text
  Photorealistic render of the front yard of an unoccupied house, a camera reel and a small monitor staged beside an open cleanout and a blank clipboard on the ground; no for-sale sign, no sign of any kind, set in a Las Vegas valley neighborhood: stucco houses with terracotta-tile roofs, desert landscaping with river rock and gravel, block-wall property lines, a few palms and yuccas, hard clear desert daylight, a faint low mountain line far behind. photorealistic render, natural daylight, realistic materials and textures, neutral documentary look, muted natural color, uncluttered composition, wide 16:9 framing with the subject in the right half and open, calm space in the left half for headline text, matches the existing Sewer Pros renders. no text, no letters, no numbers, no logos, no signs, no house numbers, no license plates, no vehicles with text, no people, no faces, no excavation, no trench, no pipe replacement or repair work, no visible damage, no brand names or badges on any equipment.
  ```

### 26. Las Vegas: Recurring Sewer Backup Diagnosis

- **File:** `public/images/markets/las-vegas-nv/service-heroes/the-sewer-pros-las-vegas-recurring-sewer-backup-diagnosis-hero-16x9.webp`
- **Slot:** `heroImage` on the Recurring Sewer Backup Diagnosis service + location pages in Las Vegas (Las Vegas, Henderson, North Las Vegas, Summerlin).
- **Alt (scene-only):** Open monitor on a lawn beside a cleanout, its screen showing the inside of a pipe.
- **Equipment (confirmed names only):** SeeSnake CS12x monitor.
- **Prompt:**

  ```text
  Photorealistic render of an open rugged monitor on the lawn beside an exterior cleanout, the monitor screen showing the inside of a pipe with a few tree roots at a joint (screen content only, no numbers, no text overlay), set in a Las Vegas valley neighborhood: stucco houses with terracotta-tile roofs, desert landscaping with river rock and gravel, block-wall property lines, a few palms and yuccas, hard clear desert daylight, a faint low mountain line far behind. photorealistic render, natural daylight, realistic materials and textures, neutral documentary look, muted natural color, uncluttered composition, wide 16:9 framing with the subject in the right half and open, calm space in the left half for headline text, matches the existing Sewer Pros renders. no text, no letters, no numbers, no logos, no signs, no house numbers, no license plates, no vehicles with text, no people, no faces, no excavation, no trench, no pipe replacement or repair work, no visible damage, no brand names or badges on any equipment.
  ```

### 27. Las Vegas: Preventative Sewer Maintenance

- **File:** `public/images/markets/las-vegas-nv/service-heroes/the-sewer-pros-las-vegas-preventative-sewer-maintenance-hero-16x9.webp`
- **Slot:** `heroImage` on the Preventative Sewer Maintenance service + location pages in Las Vegas (Las Vegas, Henderson, North Las Vegas, Summerlin).
- **Alt (scene-only):** Cleaning machine and camera reel set side by side beside a capped exterior cleanout in a tidy yard.
- **Equipment (confirmed names only):** RIDGID K-7500 drain-cleaning machine and a SeeSnake Standard Camera Reel with TruSense.
- **Prompt:**

  ```text
  Photorealistic render of a tidy front yard with a red drum cleaning machine and a camera reel set neatly side by side at a capped exterior cleanout, calm and orderly, nothing in disrepair, set in a Las Vegas valley neighborhood: stucco houses with terracotta-tile roofs, desert landscaping with river rock and gravel, block-wall property lines, a few palms and yuccas, hard clear desert daylight, a faint low mountain line far behind. photorealistic render, natural daylight, realistic materials and textures, neutral documentary look, muted natural color, uncluttered composition, wide 16:9 framing with the subject in the right half and open, calm space in the left half for headline text, matches the existing Sewer Pros renders. no text, no letters, no numbers, no logos, no signs, no house numbers, no license plates, no vehicles with text, no people, no faces, no excavation, no trench, no pipe replacement or repair work, no visible damage, no brand names or badges on any equipment.
  ```
