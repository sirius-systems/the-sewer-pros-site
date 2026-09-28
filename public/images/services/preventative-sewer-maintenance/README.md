# Preventative Sewer Maintenance — pending photography

Two photo slots on `/services/preventative-sewer-maintenance/` are currently
`ImagePlaceholder` stand-ins (`content/pages/services.tsx`, the
`svc-preventative-sewer-maintenance` entry's `explainer.image` and
`considerations.image`) rather than fabricated stock/AI imagery — see
`18-design-system.md` §28-34 and CLAUDE.md §24. Once each photo below is
shot and approved, replace the matching `{ label, filename }` placeholder
with `{ src, alt }` pointing at the saved file in this directory.

Shared rules for both shots (same as every other service page's photography):

- Real Sewer Pros / RIDGID equipment and job-site conditions only. No stock
  photography, no AI-generated imagery, no imagery implying repair,
  replacement, or a physical branch/office in a market that doesn't have one.
- No active-overflow, flooded, or property-damage imagery.
- Blur or crop any visible license plates, house numbers, faces, or other
  identifying details unless a release is on file.
- Deliver as `.webp`, cropped to the aspect ratio listed below.

## 1. Explainer photo

- **Filename:** `the-sewer-pros-preventative-sewer-maintenance-explainer-review-4x3.webp`
- **Aspect ratio:** 4:3
- **Shot:** A technician reviewing sewer camera footage on a monitor, in the
  context of establishing a maintenance interval (not an active-repair
  scene). The monitor's visible content should be a genuine, de-identified
  inspection frame — not a placeholder graphic.
- **Alt text (once live):** "A technician reviewing sewer camera footage to
  establish a maintenance interval"

## 2. Considerations photo

- **Filename:** `the-sewer-pros-preventative-sewer-maintenance-considerations-commercial-4x3.webp`
- **Aspect ratio:** 4:3
- **Shot:** Sewer cleaning equipment staged at a commercial property
  cleanout — supports the page's "where it fits for commercial properties"
  section. No active cleaning mid-process; a staged, ready-to-work scene.
- **Alt text (once live):** "Sewer cleaning equipment staged at a commercial
  property cleanout"

Neither photo blocks publication — the page already renders correctly with
placeholders in place — but the page should not be treated as
photography-complete until both are replaced (`components/ui/ImagePlaceholder.tsx`).
