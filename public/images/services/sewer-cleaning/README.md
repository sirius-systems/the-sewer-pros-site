# Sewer cleaning hub images

Slots for `/services/sewer-cleaning/`. Save a real file at the exact name below
and it is used at the next build. Until then development shows a labelled
placeholder and production shows nothing. The slot definitions are in
`data/business/cleaning-images.ts`; backdrop paths are in
`content/pages/services.tsx` under `hub.images`.

Rules for every image:

- Real Sewer Pros photography only. No stock plumbers, cartoon pipes, city
  skylines, or AI imagery presented as real work.
- Bright, ordinary daylight. Not dramatic or "emergency" styling.
- Remove or blur addresses, house numbers, license plates, GPS overlays, and
  any customer data. Monitor stills need a release (`requiresRelease`).
- Nothing that implies repair, replacement, excavation, a storefront, or a
  local office.
- `.webp`, full size (the site is a static export, so files are not resized).

## Backdrops (decorative, empty alt text, under a black scrim)

| File | Aspect | Section | Shot |
|---|---|---|---|
| `hero/the-sewer-pros-sewer-cleaning-ridgid-seesnake-hero-16x9.webp` | 16:9 | Hero (in place) | Cleaning machine and RIDGID SeeSnake camera reel at an open cleanout, subject on the right; copy sits on the left. |
| `sewer-cleaning-comparison-16x9.webp` | 16:9 | Comparison table | Equipment lineup that matches equipment actually used. |
| `the-sewer-pros-sewer-cleaning-request-cta-background-ridgid-seesnake-16x9.webp` (in place) | 16:9 | Request form | Cleaning machine at a cleanout with a separate RIDGID SeeSnake camera reel; equipment on the left, open pavement right. |
| `the-sewer-pros-sewer-cleaning-request-cta-background-cleanout-ridgid-seesnake-16x9.webp` (in place) | 16:9 | Closing form | Cleaning machine at a cleanout with a separate RIDGID SeeSnake camera reel; equipment left, quiet dark pavement right. |

## Figures (real alt text and captions)

| File | Aspect | Slot key | Alt text | Shot |
|---|---|---|---|---|
| `the-sewer-pros-sewer-cleaning-definition-ridgid-seesnake-equipment-4x3.webp` (in place) | 4:3 (1448x1086) | `cleaning-definition` | Sewer cleaning machine with its cable in an open cleanout, beside a separate RIDGID SeeSnake series camera reel and monitor | Cleaning machine at a cleanout with the camera reel beside it. |
| `the-sewer-pros-sewer-cleaning-visit-process-ridgid-seesnake-4x3.webp` (in place) | 4:3 | `cleaning-process` | Sewer cleaning machine with its cable in an open cleanout, beside a separate RIDGID SeeSnake series camera reel and monitor | Cleaning machine at a cleanout with the camera reel beside it. |
| `the-sewer-pros-sewer-cleaning-definition-ridgid-seesnake-equipment-4x3.webp` (in place, shared with the definition section) | 4:3 | `cleaning-equipment` | Sewer cleaning machine with its cable in an open cleanout, beside a separate RIDGID SeeSnake series camera reel and monitor | Reused from the definition section. A dedicated cleaning-equipment photo can replace it later. |
| `the-sewer-pros-ridgid-seesnake-sewer-camera-monitor-review-4x3.webp` (in place) | 4:3 | `cleaning-monitor` | RIDGID SeeSnake series monitor showing sewer camera footage, beside a camera reel and camera head | Monitor with non-dramatic footage. No customer data, address, GPS or readable text. |

The field-evidence section (`cleaning-equipment`, `cleaning-monitor`) renders
only when at least one of its files exists.

## Not yet supported: technician explainer video

No public video exists, so the hub has no video module and emits no
`VideoObject`. When a real technician video is published, add a poster frame
at `sewer-cleaning-explainer-poster-16x9.webp`, a crawlable player, and a
`VideoObject` with a real title, description, upload date, duration, and
thumbnail.
