/**
 * Shared, location-neutral blocks for every "Sewer Cleaning & Camera
 * Inspection" service + location page (service id
 * `svc-sewer-cleaning-camera-inspection`).
 *
 * Authority: CLAUDE.md §22, §24; the service page's `v2` content in
 * `content/pages/services.tsx`.
 *
 * ⚠ SERVICE-PAGE TEXT ONLY. Every description below restates a sentence from
 * the service page (signals, process, ask, definition). No location fact, no
 * new business fact, no equipment name. Each location page adds one fourth,
 * location-driven "when to call" card of its own.
 */

type Item = { title: string; description: string }
type Shot = { alt: string; shot: string }

/** Three "when to call" cards, from the service page's `signals`. */
export const problems: readonly Item[] = [
  {
    title: 'Several fixtures draining slowly at once',
    description:
      'When more than one fixture is slow at the same time, the restriction may be farther downstream than a single fixture’s drain.',
  },
  {
    title: 'Clogs that keep coming back',
    description:
      'A clog that returns after clearing may mean buildup, roots, or debris remain, or that a pipe condition is involved. Cleaning followed by a camera look can help show which.',
  },
  {
    title: 'Water rising in a floor drain, tub, or toilet',
    description:
      'This can indicate a blockage in the sewer line. If sewage is actively backing up into your home, contact us to discuss the situation.',
  },
]

/** Six "what's included" cards, from the service page's `process` and `ask`. */
export const inclusions: readonly Item[] = [
  {
    title: 'An agreed entry point',
    description:
      'The technician identifies an accessible entry point, commonly a cleanout.',
  },
  {
    title: 'An assessment of the line',
    description:
      'The entry point, pipe size, reported symptoms, and what equipment can be used are considered.',
  },
  {
    title: 'A camera look first, when it can be viewed',
    description:
      'A camera may show what is in the line before cleaning and help choose the method.',
  },
  {
    title: 'Cleaning of the line',
    description:
      'Hydraulic or mechanical equipment is used to address the restriction, in as many passes as the line calls for.',
  },
  {
    title: 'A second look after cleaning',
    description:
      'A camera may be used again to see what the cleaning achieved and to note any part of the line it could not reach.',
  },
  {
    title: 'Video and written findings',
    description:
      'When a camera is used, you receive the inspection video and written findings.',
  },
]

/** Three service photo briefs and one generic street brief, for the problem cards. */
export const shots: readonly [Shot, Shot, Shot, Shot] = [
  {
    alt: 'Bathroom sink and tub in a residential bathroom',
    shot: 'Bathroom sink and tub, one draining slowly, no people',
  },
  {
    alt: 'Cleaning cable entering a sewer cleanout',
    shot: 'Cable or hose entering a cleanout, close up',
  },
  {
    alt: 'Floor drain with cleanout access',
    shot: 'Floor drain with cleanout access, nothing graphic',
  },
  {
    alt: 'Residential street with a manhole cover near the curb',
    shot: 'Ordinary residential street, manhole and curb, no identifiable homes',
  },
]
