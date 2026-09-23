# Sewer cleaning + camera inspection hub images

Slots for `/services/sewer-cleaning-camera-inspection/`. Save a real file at the
exact name below and it is used at the next build. Until then development shows
a labelled placeholder and production shows nothing. The slot definitions are in
`data/business/combined-images.ts`; backdrop paths are in
`content/pages/services.tsx` under `hub.images`.

Rules for every image:

- Real Sewer Pros photography only. No stock plumbers, cartoon pipes, city
  skylines, or AI imagery presented as real work.
- No fabricated before and after pairs. A paired buildup / cleaned still must
  come from the same real job, with a release.
- Bright, ordinary daylight. Not dramatic or "emergency" styling.
- Remove or blur addresses, house numbers, license plates, GPS overlays, and
  any customer data. Monitor stills need a release (`requiresRelease`).
- Nothing that implies repair, replacement, excavation, a storefront, or a
  local office.
- `.webp`, full size (the site is a static export, so files are not resized).

## Backdrops (decorative, empty alt text, under a black scrim)

| File | Aspect | Section | Shot |
|---|---|---|---|
| `combined-hero-16x9.webp` | 16:9, 1600px+ wide | Hero | Technician at an inspection monitor with cleaning equipment nearby, or camera and cleaning equipment together. Subject left of center; copy sits on the left. |
| `combined-comparison-16x9.webp` | 16:9 | Comparison table | Equipment lineup matching equipment actually used. |
| `combined-request-16x9.webp` | 16:9 | Request form | Wide field-service scene, subject on the left. |
| `combined-closing-16x9.webp` | 16:9 | Closing form | Cleanout or job-site scene. |

## Figures (real alt text and captions)

| File | Aspect | Slot key | Alt text | Shot |
|---|---|---|---|---|
| `combined-cleanout-access-4x3.webp` | 4:3 (1448x1086) | `combined-definition` | Inspection camera cable and cleaning equipment at an exterior cleanout | Camera reel or cleaning line at a cleanout. No address visible. |
| `combined-process-technician-review-4x3.webp` | 4:3 | `combined-process` | Technician reviewing sewer inspection footage on a monitor | Technician at a monitor, no customer identifiable. Requires release. |
| `combined-equipment-staged-4x3.webp` | 4:3 | `combined-equipment` | Sewer camera reel and cleaning machine staged at a job site | Equipment and branded vehicle, plates and addresses blurred. |
| `combined-monitor-buildup-still-4x3.webp` | 4:3 | `combined-monitor-buildup` | Inspection monitor showing buildup inside a sewer pipe | Real monitor still, all customer data removed. Requires release. |
| `combined-monitor-post-cleaning-still-4x3.webp` | 4:3 | `combined-monitor-clear` | Inspection monitor showing the wall of a cleaned sewer pipe | Real monitor still, all customer data removed. Requires release. |

The field-evidence section (`combined-equipment`, `combined-monitor-buildup`,
`combined-monitor-clear`) renders only when at least one of its files exists.

## Not yet supported: technician explainer video and case study

No public video and no documented case study exist, so the hub has no video
module, no case-study block, and emits no `VideoObject`. When a real video is
published, add a poster frame at `combined-explainer-poster-16x9.webp`, a
crawlable player, and a `VideoObject` with real metadata.
