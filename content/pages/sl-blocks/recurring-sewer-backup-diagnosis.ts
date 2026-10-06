/**
 * Location-neutral blocks for every Recurring Sewer Backup Diagnosis service +
 * location page.
 *
 * Authority: CLAUDE.md §22, §24; docs/14-content-specification.md §43.
 *
 * ⚠ SERVICE PAGE ONLY. Every line here restates the
 * `svc-recurring-sewer-backup-diagnosis` entry in `services.tsx` (`v2.signals`,
 * `v2.process`, `v2.ask`). No city, agency, price, time, equipment name, offer
 * or availability claim appears, so the same blocks serve every location. The
 * one location-driven "when to call" card is added per page, not here.
 *
 * A diagnosis documents what a camera can see in the accessible line. It does
 * not promise a definitive answer, and it does not repair anything.
 */

type Item = { title: string; description: string }
type Shot = { alt: string; shot: string }

/** Three service-driven "when to call" cards, from the service page's signals. */
export const problems: readonly [Item, Item, Item] = [
  {
    title: 'The same clog returns',
    description:
      'A recurring restriction can come from roots, grease, wipes, debris, a sag, or a deteriorated lateral, not only from a one-time blockage at a fixture.',
  },
  {
    title: 'Several fixtures drain slowly at once',
    description:
      'Slow drainage in more than one fixture is listed by public agencies as a warning sign of a larger drain or sewer lateral issue.',
  },
  {
    title: 'Wastewater at a cleanout or outside drain',
    description:
      'Sewage coming from a cleanout, or water leaking from a cleanout or outside drain, is listed as a sign of sewer trouble.',
  },
]

/**
 * Six "what's included" cards. Only the video and written findings are
 * owner-confirmed deliverables (2026-10-05); the rest restate steps published
 * on the service page. Reinspection after cleaning, locating as always
 * included, and hydro jetting on every visit are NOT claimed.
 */
export const inclusions: readonly [Item, Item, Item, Item, Item, Item] = [
  {
    title: 'Symptoms and access reviewed',
    description:
      'The symptoms and the available entry point are reviewed. The most common entry point is a cleanout.',
  },
  {
    title: 'Cleaning first, when it is needed',
    description:
      'If flow, standing water, or debris keeps the camera from viewing the line, cleaning may come first. The cleaning method depends on the observed line condition.',
  },
  {
    title: 'A recorded camera run',
    description:
      'A camera is advanced downstream from the access point and the run is recorded. Where it cannot pass, that part of the line is not viewed.',
  },
  {
    title: 'Inspection video',
    description: 'When a camera is used, you receive the inspection video.',
  },
  {
    title: 'Written findings',
    description:
      'Written findings are included. Ask that they say what was viewed, what could not be viewed, and why.',
  },
  {
    title: 'Locating, when included',
    description:
      'When a camera with a compatible sonde is used, a receiver at the surface can estimate where an observed point sits. Ask whether locating is part of your visit.',
  },
]

/** Three service photo briefs plus one generic street brief, all location-neutral. */
export const shots: readonly [Shot, Shot, Shot, Shot] = [
  {
    alt: 'Floor drain with cleanout access',
    shot: 'Floor drain with cleanout access, nothing graphic',
  },
  {
    alt: 'Camera monitor showing the condition of a sewer line',
    shot: 'Monitor with a pipe interior, nothing graphic',
  },
  {
    alt: 'Capped sewer cleanout beside a house foundation',
    shot: 'Exterior cleanout cap at the base of a house',
  },
  {
    alt: 'Residential street with a manhole cover near the curb',
    shot: 'Ordinary residential street, manhole and curb, no identifiable homes',
  },
]
