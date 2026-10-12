# Preventative Sewer Maintenance — pending photography

A photo slot on `/services/preventative-sewer-maintenance/` is currently an
`ImagePlaceholder` stand-in (`content/pages/services.tsx`, the
`svc-preventative-sewer-maintenance` entry's `explainer.image`) rather than fabricated stock/AI imagery — see
`18-design-system.md` §28-34 and CLAUDE.md §24. Once the photo below is
shot and approved, replace the matching `{ label, filename }` placeholder
with `{ src, alt }` pointing at the saved file in this directory.

Rules for the shot (same as every other service page's photography):

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

The photo above does not block publication (the page already renders
correctly with a placeholder in place), but the page should not be treated as
photography-complete until it is replaced (`components/ui/ImagePlaceholder.tsx`).
