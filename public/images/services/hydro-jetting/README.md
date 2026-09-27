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
| `hero/the-sewer-pros-hydro-jetting-sewer-cleanout-background-16x9.webp` | 16:9, 1600px+ wide | Hero | Technician setting up jetting hose and equipment at an exterior access point. Keep the subject left of center; copy sits on the left. **(in place)** |
| `the-sewer-pros-hydro-jetting-service-comparison-background-16x9.webp` | 16:9 | Comparison table | Service vehicle and equipment that match what is actually used. **(in place — saved directly under `hydro-jetting/`, not under `hero/`; see the note below)** |
| `hydro-jetting-request-16x9.webp` | 16:9 | Request form | Technician reviewing equipment or a monitor, subject on the left. |
| `hydro-jetting-closing-16x9.webp` | 16:9 | Closing form | Equipment in use at a cleanout or job site. |
| `the-sewer-pros-hydro-jetting-equipment-residential-cleanout-background-16x9.webp` | 16:9 | Materials table | Jetting equipment at a residential cleanout. **(in place — saved directly under `hydro-jetting/`, not under `hero/`; see the note below)** |

⚠ **Folder mismatch.** Several build requests have asked for files under
`hero/`. Only the original hero backdrop actually landed there; every file
saved since (the comparison background, the materials background, and the
process/visit photo below) was saved directly under `hydro-jetting/`
instead. The content and slot files below point at wherever each file
actually is — nothing was renamed or moved to force a match. Whoever is
saving new exports should use `hero/` going forward, or say so if the flat
layout is now the intended one, so this note can be retired.

## Figures (real alt text and captions)

| File | Aspect | Slot key | Alt text | Shot |
|---|---|---|---|---|
| `hero/the-sewer-pros-hydro-jetting-sewer-cleanout-background-16x9.webp` | 16:9 (4096x2286) | `hydro-definition` | Hydro jetting hose and equipment staged at an exterior sewer cleanout | Shares the hero file (real dimensions, not the usual 4:3 figure crop). **(in place)** |
| `the-sewer-pros-hydro-jetting-visit-mongoose-184-lt-cleanout-4x3.webp` | 4:3-ish (2400x1792) | `hydro-process` | Hydro jetting equipment beside an accessible exterior cleanout | Jetter unit staged at an exterior cleanout. **(in place — saved directly under `hydro-jetting/`, not under `hero/`)** |
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
