# Drain cleaning hub images

Slots for `/services/drain-cleaning/`. Save a real file at the exact name below
and it is used at the next build. Until then development shows a labelled
placeholder and production shows nothing. The slot definitions are in
`data/business/drain-images.ts`; backdrop paths are in
`content/pages/services.tsx` under `hub.images`.

Rules for every image:

- Real Sewer Pros photography only. No stock plumbers, cartoon drains, fake
  "hair clog" visuals, or AI-generated flooding or pipe images presented as
  real work.
- No active overflow, sewage, or household damage. Nothing that implies
  guaranteed urgent response.
- Bright, ordinary daylight. Not dramatic or "emergency" styling.
- Remove or blur addresses, house numbers, license plates, timestamps, GPS
  overlays, names, and any customer data. Monitor stills and the explainer
  poster need a release (`requiresRelease`).
- Service vehicle only when branding and market usage are current.
- Nothing that implies repair, replacement, excavation, a storefront, a local
  office, or same-day service.
- `.webp`, full size (the site is a static export, so files are not resized).

## Backdrops (decorative, empty alt text, under a black scrim)

| File | Aspect | Section | Shot |
|---|---|---|---|
| `hero/the-sewer-pros-drain-cleaning-hero-residential-cleanout-ridgid-equipment-16x9.webp` | 16:9, 1600px+ wide | Hero | Cable-machine equipment staged at a residential exterior cleanout. In place. |
| `the-sewer-pros-drain-cleaning-service-comparison-ridgid-k7500-16x9.webp` | 16:9 | Comparison table | RIDGID K-7500 cable machine staged at a residential exterior cleanout. In place. |
| `the-sewer-pros-drain-cleaning-request-cta-ridgid-k7500-background-16x9.webp` | 16:9 | Request form (mid-page) | RIDGID K-7500 cable machine at a residential exterior cleanout, equipment left of frame (`requestFocus: 'right'` keeps it visible below `lg`). In place. |
| `the-sewer-pros-drain-cleaning-closing-cta-ridgid-k7500-background-16x9.webp` | 16:9 | Closing form | RIDGID K-7500 cable machine at a residential exterior cleanout, equipment left of frame (`closingFocus: 'right'` keeps it visible below `lg`). In place. |

## Figures (real alt text and captions)

| File | Aspect | Slot key | Alt text | Shot |
|---|---|---|---|---|
| `the-sewer-pros-drain-cleaning-common-drain-problems-ridgid-k7500-4x3.webp` | 4:3 (2400x1792) | `drain-definition` | A RIDGID K-7500 drain-cleaning machine feeding a cable into an open floor drain in a residential garage | Cable-drum machine feeding into a floor drain. No address visible. In place. |
| `the-sewer-pros-drain-cleaning-residential-fixture-ridgid-seesnake-4x3.webp` | 4:3 (2400x1792) | `drain-process` | A drain-cleaning cable machine feeding a cable into a bathroom floor drain | Cable-drum machine feeding into a bathroom floor drain, near a tub, toilet, and sink. In place. |
| `the-sewer-pros-drain-cleaning-equipment-field-ridgid-k7500-4x3.webp` | 4:3 (2400x1792) | `drain-equipment` | A RIDGID K-7500 drain-cleaning machine staged at a residential exterior cleanout | Cable-drum machine staged beside an open exterior cleanout. No address visible. In place. |
| `the-sewer-pros-recurring-drain-issue-ridgid-seesnake-cs12x-monitor-4x3.webp` | 4:3 (2400x1792) | `drain-monitor` | A RIDGID SeeSnake camera monitor and reel staged beside an indoor cleanout | Camera monitor and reel staged near an indoor cleanout. No address or customer data visible. In place. |
| `the-sewer-pros-slow-drain-sewer-line-camera-inspection-ridgid-seesnake-4x3.webp` | 4:3 (2400x1792) | `drain-camera-explainer` | A RIDGID SeeSnake camera monitor and reel staged beside an exterior cleanout | Camera monitor and reel staged near an exterior cleanout. No address visible. In place. |
| `drain-cleaning-explainer-video-poster-4x3.webp` | 4:3 | `drain-explainer-video-poster` | Technician explaining when a slow drain may be a main sewer-line problem | Poster frame for a future technician-led explainer video, not currently used by any section. Add the player and `VideoObject` markup only when the video is public. Requires release. |

## Explainer video (not yet produced)

Technician-led, titled "When is a slow drain a main sewer-line problem?".
It should cover: what usually indicates a single-fixture issue, what may
indicate a main-line issue, when drain cleaning may be appropriate, when a
camera inspection may help, and how to choose a market and request service.
No autoplay. `VideoObject` schema only for a real, public, visibly embedded
video.
