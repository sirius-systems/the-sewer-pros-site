/**
 * Shared, location-neutral blocks for every "Drain Cleaning" service +
 * location page (service id `svc-drain-cleaning`).
 *
 * Authority: CLAUDE.md §22, §24; the service page's `v2` content in
 * `content/pages/services.tsx`.
 *
 * ⚠ SERVICE-PAGE TEXT ONLY. Every description below restates a sentence from
 * the service page (signals, process, ask). No location fact, no new
 * business fact, no equipment name. Each location page adds one fourth,
 * location-driven "when to call" card of its own.
 */

type Item = { title: string; description: string }
type Shot = { alt: string; shot: string }

/** Three "when to call" cards, from the service page's `signals`. */
export const problems: readonly Item[] = [
  {
    title: 'One slow drain',
    description:
      'A single slow sink, tub, or shower often points to a restriction in that fixture’s own drain line, such as hair, soap, or grease buildup.',
  },
  {
    title: 'Several fixtures slow at once',
    description:
      'When more than one fixture is slow, the restriction may be farther down the line. This does not prove a specific cause.',
  },
  {
    title: 'Clogs that keep returning',
    description:
      'A clog that returns after each clearing may mean the restriction was not fully removed or is being rebuilt by something in the line. A camera look may help.',
  },
]

/** Six "what's included" cards, from the service page's `process` and `ask`. */
export const inclusions: readonly Item[] = [
  {
    title: 'Your symptoms, first',
    description:
      'You tell us which fixtures are affected, how long, and what you have already tried.',
  },
  {
    title: 'An identified entry point',
    description:
      'The technician identifies an entry point, commonly a cleanout. Other entry points depend on the property.',
  },
  {
    title: 'A method chosen for the line',
    description:
      'The line is cleaned with cable tools, water jetting, or both, chosen for the condition of the line.',
  },
  {
    title: 'A camera look, when included',
    description:
      'When a camera is part of the visit and the line allows, it is used to look at the restriction.',
  },
  {
    title: 'A flow check after cleaning',
    description:
      'Flow is checked after cleaning. A camera may be used again where appropriate.',
  },
  {
    title: 'Video and written findings',
    description:
      'When a camera is used, you receive the video and written findings. The findings note any part of the line that could not be viewed.',
  },
]

/** Three service photo briefs and one generic street brief, for the problem cards. */
export const shots: readonly [Shot, Shot, Shot, Shot] = [
  {
    alt: 'Kitchen sink with slow-draining water',
    shot: 'Kitchen sink with a slow drain, no people',
  },
  {
    alt: 'Bathroom sink and tub in a residential bathroom',
    shot: 'Bathroom sink and tub side by side, no people',
  },
  {
    alt: 'Drain cleaning equipment at a fixture',
    shot: 'Drain machine at a floor or tub drain',
  },
  {
    alt: 'Residential street with a manhole cover near the curb',
    shot: 'Ordinary residential street, manhole and curb, no identifiable homes',
  },
]
