# Launch checklist

Items that must be done, or consciously skipped, at launch. Image items first; add other launch items here as they come up.

## Images

- [ ] Optional: replace generated images with real job photos, IMG-05 first (178 boxes on 144 pages), then any image that depicts a report, tablet or footage. See `docs/shoot-day-schedule.md` and `docs/image-shot-list.md`.
- [ ] Rule: generated images may be used as illustrations but must not be presented as a real customer job, a real inspection finding, a real customer or a real technician. Alt text, captions and nearby copy describe the scene only (owner decision DEC-145, Oct 12, 2026). The owner specifically approved the eight generated files that depict reports, tablets, monitor footage or paperwork (IMG-04, IMG-05, IMG-06, IMG-07, IMG-10, IMG-18, IMG-20, IMG-21), none of which shows a person, with the guardrail that nearby copy must not present them as real jobs, findings, reports, customers or technicians (Oct 12, 2026).
- [ ] If a real photo replaces a generated one, set its provenance to match (real photo, not the generated-render string) and confirm the privacy rules in `docs/photographer-shot-sheet.md`.

## Launch sequence for `LAUNCH_MODE`

Do these in order:

1. [ ] Re-run the launch-mode layout check (`docs/launch-mode-layout-check.md`): a throwaway build with `LAUNCH_MODE` true, one page of each type at 390 and 1440 wide, no empty columns or blank gaps.
2. [ ] Set `LAUNCH_MODE` to true in `lib/launch.ts` (only when the owner says to).
3. [ ] Run the production build last and read the build report (`scripts/report-unfilled-slots.mjs`): it should list 0 unfilled slots, and `scripts/count-placeholders.mjs` on the build should report 0 boxes.
