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
| `drain-cleaning-hero-16x9.webp` | 16:9, 1600px+ wide | Hero | Technician preparing cable or drain-cleaning equipment at a sink, cleanout, or floor drain. Keep the subject left of center; copy sits on the left. |
| `drain-cleaning-comparison-16x9.webp` | 16:9 | Comparison table | Equipment staged cleanly in a residential or managed-property setting. |
| `drain-cleaning-request-16x9.webp` | 16:9 | Request form | Technician reviewing a camera monitor after a recurring issue, subject on the left. |
| `drain-cleaning-closing-16x9.webp` | 16:9 | Closing form | Technician at an exterior cleanout or floor drain. |

## Figures (real alt text and captions)

| File | Aspect | Slot key | Alt text | Shot |
|---|---|---|---|---|
| `drain-cleaning-fixture-access-4x3.webp` | 4:3 (1448x1086) | `drain-definition` | Technician preparing drain-cleaning equipment at a sink or cleanout | Technician at a sink, cleanout, or floor drain with cable equipment. No address visible. |
| `drain-cleaning-process-4x3.webp` | 4:3 | `drain-process` | Drain-cleaning cable machine staged in a residential setting | Cable machine detail with technician. |
| `drain-cleaning-equipment-4x3.webp` | 4:3 | `drain-equipment` | Drain-cleaning equipment staged at a job site | Actual equipment; branded vehicle only if current, plates and addresses blurred. |
| `drain-cleaning-camera-monitor-still-4x3.webp` | 4:3 | `drain-monitor` | Inspection monitor showing the interior of a drain line after a recurring clog | Real monitor still from a recurring-clog visit, all customer data removed. Requires release. |
| `drain-cleaning-explainer-video-poster-4x3.webp` | 4:3 | `drain-explainer-video-poster` | Technician explaining when a slow drain may be a main sewer-line problem | Poster frame for "When is a slow drain a main sewer-line problem?". Add the player and `VideoObject` markup only when the video is public. Requires release. |

## Explainer video (not yet produced)

Technician-led, titled "When is a slow drain a main sewer-line problem?".
It should cover: what usually indicates a single-fixture issue, what may
indicate a main-line issue, when drain cleaning may be appropriate, when a
camera inspection may help, and how to choose a market and request service.
No autoplay. `VideoObject` schema only for a real, public, visibly embedded
video.
