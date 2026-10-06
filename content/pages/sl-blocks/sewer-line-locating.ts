/**
 * Location-neutral blocks for every Sewer Line Locating service + location page.
 *
 * Authority: CLAUDE.md §22, §24; docs/14-content-specification.md §43.
 *
 * ⚠ SERVICE PAGE ONLY. Every line here restates the `svc-sewer-line-locating`
 * entry in `services.tsx` (`v2.signals`, `v2.limits`, `v2.process`, `v2.ask`).
 * No city, agency, price, time or equipment name appears, so the same blocks
 * serve every location. The one location-driven "when to call" card is added
 * per page, not here.
 *
 * Locating is an ESTIMATE, not a survey, utility clearance or permission to
 * dig, and it is not a look at pipe condition. Nothing below says otherwise.
 */

type Item = { title: string; description: string }
type Shot = { alt: string; shot: string }

/** Three service-driven "when to call" cards, from the service page's signals. */
export const problems: readonly [Item, Item, Item] = [
  {
    title: 'Planning digging, trenching, or construction',
    description:
      'The approximate path of a private sewer line can help you coordinate site planning before anyone digs nearby. It does not replace required utility marking, permits, or planning by the people doing the work.',
  },
  {
    title: 'Landscaping, trees, fences, or hardscape',
    description:
      'An approximate route can help you plan where to put work that involves digging. Results depend on access and site conditions.',
  },
  {
    title: 'A camera finding you need to place',
    description:
      'When a camera inspection shows a visible condition, locating may help estimate where that point sits at the surface, when the equipment supports it.',
  },
]

/**
 * Six "what's included" cards. Only the video and written findings are
 * owner-confirmed deliverables (2026-10-05); the rest restate steps and
 * "may give you" lines already published on the service page. Marks, depth
 * readings and notes are "ask" items there and are NOT claimed here.
 */
export const inclusions: readonly [Item, Item, Item, Item, Item, Item] = [
  {
    title: 'Inspection video',
    description: 'When a camera is used, you receive the inspection video.',
  },
  {
    title: 'Written findings',
    description: 'Written findings are included.',
  },
  {
    title: 'An identified entry point',
    description:
      'The technician identifies an accessible entry point, commonly a cleanout.',
  },
  {
    title: 'Equipment matched to the line',
    description:
      'Compatible locating equipment is matched to the line, the entry point, and the pipe. What can be used depends on the line.',
  },
  {
    title: 'A position estimate at each stop',
    description:
      'A receiver at the surface picks up the sonde’s signal to estimate the position of that point and its approximate depth.',
  },
  {
    title: 'The observed route of what could be traced',
    description:
      'Repeated points show the observed route of the part of the line that could be traced. Where the camera cannot pass, that part of the line is not traced.',
  },
]

/** Three service photo briefs plus one generic street brief, all location-neutral. */
export const shots: readonly [Shot, Shot, Shot, Shot] = [
  {
    alt: 'Technician walking a locator receiver across a residential yard',
    shot: 'Technician with a locator receiver in a yard, paint marks on pavement, no identifiable address',
  },
  {
    alt: 'Residential back yard with a fence line and planting beds',
    shot: 'Fence line and planting beds where digging might be planned, nothing identifiable',
  },
  {
    alt: 'Camera monitor beside a handheld locator receiver',
    shot: 'Monitor showing a pipe interior next to a handheld receiver, nothing graphic',
  },
  {
    alt: 'Residential street with a manhole cover near the curb',
    shot: 'Ordinary residential street, manhole and curb, no identifiable homes',
  },
]
