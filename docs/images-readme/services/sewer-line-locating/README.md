# Sewer line locating hub images

Slots for `/services/sewer-line-locating/`. Save a real file at the exact name
below and it is used at the next build. Until then development shows a labelled
placeholder and production shows nothing. Slot definitions are in
`data/business/locating-images.ts`; backdrop paths are in
`content/pages/services.tsx` under `hub.images`.

Rules for every image:

- Real Sewer Pros photography only. No stock workers holding a yellow utility
  locator, no AI imagery presented as real work.
- Remove or blur addresses, house numbers, license plates, GPS overlays, and
  any customer data. Anonymized stills need a release (`requiresRelease`).
- Show route markings only if marking is an actual Sewer Pros method.
- Nothing that implies repair, excavation, utility clearance, a storefront, or
  a local office.
- `.webp`, full size (the site is a static export, so files are not resized).

## Backdrops (decorative, empty alt text, under a black scrim)

| File | Aspect | Section | Shot |
|---|---|---|---|
| `sewer-line-locating-hero-16x9.webp` | 16:9, 1600px+ wide | Hero | Technician using a locating receiver at a property, or camera monitor plus locator in the field. Subject left of center; copy sits on the left. |
| `sewer-line-locating-comparison-16x9.webp` | 16:9 | Comparison table | Equipment lineup that matches equipment actually used. |
| `sewer-line-locating-request-16x9.webp` | 16:9 | Request form | Wide field-service scene, subject on the left. |
| `sewer-line-locating-closing-16x9.webp` | 16:9 | Closing form | Cleanout or job-site scene. |

## Figures (real alt text and captions)

| File | Aspect | Slot key | Shot |
|---|---|---|---|
| `sewer-line-locating-definition-4x3.webp` | 4:3 (1448x1086) | `locating-definition` | Receiver and monitor at a cleanout or access point. No address visible. |
| `sewer-line-locating-process-4x3.webp` | 4:3 | `locating-process` | Technician at an exterior cleanout with locating equipment. |
| `sewer-line-locating-evidence-equipment-4x3.webp` | 4:3 | `locating-equipment` | Camera monitor and locator staged in the field. Plates and addresses blurred. |
| `sewer-line-locating-evidence-field-4x3.webp` | 4:3 | `locating-field` | Real, anonymized workflow photo. Only if surface marking is an actual method. Requires release. |

The field-evidence section (`locating-equipment`, `locating-field`) renders
only when at least one of its files exists.

## Not yet supported: technician explainer video and case study

No public video or documented project exists, so the hub has no video module,
emits no `VideoObject`, and has no case study. Add them only with genuine,
permissioned material.
