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
| `sewer-cleaning-request-16x9.webp` | 16:9 | Request form | Wide field-service scene, subject on the left. |
| `sewer-cleaning-closing-16x9.webp` | 16:9 | Closing form | Cleanout or job-site scene. |

## Figures (real alt text and captions)

| File | Aspect | Slot key | Alt text | Shot |
|---|---|---|---|---|
| `the-sewer-pros-sewer-cleaning-definition-ridgid-seesnake-equipment-4x3.webp` (in place) | 4:3 (1448x1086) | `cleaning-definition` | Sewer cleaning machine with its cable in an open cleanout, beside a separate RIDGID SeeSnake series camera reel and monitor | Cleaning machine at a cleanout with the camera reel beside it. |
| `the-sewer-pros-sewer-cleaning-visit-process-ridgid-seesnake-4x3.webp` (in place) | 4:3 | `cleaning-process` | Sewer cleaning machine with its cable in an open cleanout, beside a separate RIDGID SeeSnake series camera reel and monitor | Cleaning machine at a cleanout with the camera reel beside it. |
| `sewer-cleaning-equipment-4x3.webp` | 4:3 | `cleaning-equipment` | Sewer cleaning machine and hoses staged at a job site | Equipment and branded vehicle, plates and addresses blurred. |
| `sewer-cleaning-monitor-still-4x3.webp` | 4:3 | `cleaning-monitor` | Inspection monitor showing the interior of a sewer pipe | Real monitor still, all customer data removed. Requires release. |

The field-evidence section (`cleaning-equipment`, `cleaning-monitor`) renders
only when at least one of its files exists.

## Not yet supported: technician explainer video

No public video exists, so the hub has no video module and emits no
`VideoObject`. When a real technician video is published, add a poster frame
at `sewer-cleaning-explainer-poster-16x9.webp`, a crawlable player, and a
`VideoObject` with a real title, description, upload date, duration, and
thumbnail.
