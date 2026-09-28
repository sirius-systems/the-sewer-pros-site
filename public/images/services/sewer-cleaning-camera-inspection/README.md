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
| `hero/the-sewer-pros-sewer-camera-inspection-cleaning-cleanout-hero-background-16x9.webp` | 16:9, 1600px+ wide | Hero | Delivered: an exterior cleanout with inspection and cleaning equipment. Subject left of center; copy sits on the left. |
| `the-sewer-pros-service-comparison-seesnake-cleanout-background-16x9.webp` | 16:9 | Comparison table | Delivered: SeeSnake camera equipment at a cleanout. |
| `the-sewer-pros-sewer-cleaning-camera-inspection-request-cta-background-16x9.webp` | 16:9 | Request form | Delivered: field-service scene for the request CTA. |
| `combined-closing-16x9.webp` | 16:9 | Closing form | Cleanout or job-site scene. |

## Figures (real alt text and captions)

| File | Aspect | Slot key | Alt text | Shot |
|---|---|---|---|---|
| `combined-cleanout-access-4x3.webp` | 4:3 (1448x1086) | `combined-definition` | Inspection camera cable and cleaning equipment at an exterior cleanout | Camera reel or cleaning line at a cleanout. No address visible. |
| `the-sewer-pros-sewer-camera-inspection-visit-cleanout-equipment-4x3.webp` | 4:3 (1448x1086) | `combined-process` | Delivered: sewer camera reel and inspection monitor staged beside an open cleanout | Camera reel, monitor, and open cleanout at a sidewalk. No address visible. |
| `the-sewer-pros-field-seesnake-camera-sewer-cleaning-equipment-4x3.webp` | 4:3 (1448x1086) | `combined-equipment` | Delivered: sewer camera reel and monitor staged in a yard near a cleanout | Camera reel and monitor at a residential cleanout. No address visible. |
| `the-sewer-pros-seesnake-monitor-sewer-line-buildup-inspection-4x3.webp` | 4:3 (1448x1086) | `combined-monitor-buildup` | Delivered: inspection monitor showing buildup inside a sewer pipe | Monitor showing pipe buildup, at a cleanout. No address or person identifiable. |
| `the-sewer-pros-seesnake-monitor-cleaned-sewer-line-section-4x3.webp` | 4:3 (1448x1086) | `combined-monitor-clear` | Delivered: inspection monitor showing the wall of a cleaned sewer pipe | Monitor showing a cleaner pipe section, at a cleanout. No address or person identifiable. |

The field-evidence section (`combined-equipment`, `combined-monitor-buildup`,
`combined-monitor-clear`) renders only when at least one of its files exists.

## Not yet supported: technician explainer video and case study

No public video and no documented case study exist, so the hub has no video
module, no case-study block, and emits no `VideoObject`. When a real video is
published, add a poster frame at `combined-explainer-poster-16x9.webp`, a
crawlable player, and a `VideoObject` with real metadata.
