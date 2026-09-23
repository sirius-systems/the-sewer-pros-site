# Hydro-jetting hub images

Slots for `/services/hydro-jetting/`. Save a real file at the exact name below
and it is used at the next build. Until then development shows a labelled
placeholder and production shows nothing. The slot definitions are in
`data/business/hydro-images.ts`; backdrop paths are in
`content/pages/services.tsx` under `hub.images`.

Rules for every image:

- Real Sewer Pros photography only. No stock plumbers, cartoon pipes, city
  skylines, or AI imagery presented as real work.
- No dramatic in-pipe imagery. A jetting nozzle inside a pipe is allowed only
  if it is the business's own footage.
- Bright, ordinary daylight. Not dramatic or "emergency" styling.
- Remove or blur addresses, house numbers, license plates, timestamps, GPS
  overlays, names, and any customer data. Monitor stills need a release
  (`requiresRelease`).
- Nothing that implies repair, replacement, excavation, a storefront, a local
  office, or same-day service.
- `.webp`, full size (the site is a static export, so files are not resized).

## Backdrops (decorative, empty alt text, under a black scrim)

| File | Aspect | Section | Shot |
|---|---|---|---|
| `hydro-jetting-hero-16x9.webp` | 16:9, 1600px+ wide | Hero | Technician setting up jetting hose and equipment at an exterior access point. Keep the subject left of center; copy sits on the left. |
| `hydro-jetting-comparison-16x9.webp` | 16:9 | Comparison table | Service vehicle and equipment that match what is actually used. |
| `hydro-jetting-request-16x9.webp` | 16:9 | Request form | Technician reviewing equipment or a monitor, subject on the left. |
| `hydro-jetting-closing-16x9.webp` | 16:9 | Closing form | Equipment in use at a cleanout or job site. |

## Figures (real alt text and captions)

| File | Aspect | Slot key | Alt text | Shot |
|---|---|---|---|---|
| `hydro-jetting-equipment-setup-4x3.webp` | 4:3 (1448x1086) | `hydro-definition` | Hydro jetting hose staged at an exterior sewer cleanout | Jetter hose or equipment at a cleanout. No address visible. |
| `hydro-jetting-process-4x3.webp` | 4:3 | `hydro-process` | Technician operating hydro jetting equipment at a job site | Technician operating the unit. |
| `hydro-jetting-equipment-4x3.webp` | 4:3 | `hydro-equipment` | Hydro jetting unit and hoses staged beside a service vehicle | Actual unit, hoses and branded vehicle, plates and addresses blurred. |
| `hydro-jetting-monitor-still-4x3.webp` | 4:3 | `hydro-monitor` | Inspection monitor showing the interior of a sewer pipe | Real monitor still before or after cleaning, all customer data removed. Requires release. |

The field-evidence section (`hydro-equipment`, `hydro-monitor`) renders only
when at least one of its files exists.

## Not yet supported: technician explainer video

No public video exists, so the hub has no video module and emits no
`VideoObject`. A short technician explainer ("When is hydro-jetting
appropriate?") is recommended. When it is published, add a poster frame at
`hydro-jetting-explainer-poster-16x9.webp`, a crawlable player, and a
`VideoObject` with a real title, description, upload date, duration, and
thumbnail.
