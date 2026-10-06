/**
 * Service + location blocks for Preventative Sewer Maintenance.
 *
 * Authority: CLAUDE.md §22, §24; the service page entry for
 * `svc-preventative-sewer-maintenance` in `content/pages/services.tsx`.
 *
 * Preventative maintenance is not in `service-location-shared.ts`, so its three
 * "when to call" cards, six "what's included" cards and photo briefs live here.
 * Every line is lifted from the service page (signals, process, scope bullets)
 * and is location-neutral; a page adds one location-driven card to `problems`.
 *
 * NO NEW BUSINESS FACTS. No interval, schedule, plan, price or equipment name.
 */

type Item = { title: string; description: string }

/** Three service-driven cards, from the service page's "Signs it may be time". */
export const problems: readonly Item[] = [
  {
    title: 'Gurgling or recurring clogs',
    description:
      'Gurgling toilets and drains, or clogs that keep coming back after clearing, may mean something downstream is restricting flow.',
  },
  {
    title: 'A backup that has already happened',
    description:
      'A backup is a reason to look at the line, not only to clear it again.',
  },
  {
    title: 'Known risk factors',
    description:
      'Mature trees near the line, a history of buildup between cleanings, or a property where prior backups were cleared but never documented on camera.',
  },
]

/** Six cards, restating the service page's visit steps and scope bullets. */
export const inclusions: readonly Item[] = [
  {
    title: 'A review of the history',
    description:
      'Prior backups, recurring clogs, earlier camera footage, and cleaning records help show whether the line has a pattern.',
  },
  {
    title: 'A recorded camera pass',
    description:
      'The camera moves through the accessible section while the inspection is recorded. Anything that limits the view is noted.',
  },
  {
    title: 'Cleaning when appropriate',
    description:
      "If buildup or an obstruction is present, cleaning or hydro jetting may follow, based on the line's condition, access, and the agreed scope.",
  },
  {
    title: 'A second look, when included',
    description:
      'When cleaning was needed to get a view, a second look can document what was visible afterward, when included in the visit.',
  },
  {
    title: 'Video and written findings',
    description:
      'You receive the inspection video and written findings, including what part of the line was viewed and what limited the view.',
  },
  {
    title: 'Locating, as a separate service',
    description:
      'Line locating is a separate service when a landscaping, renovation, or other project needs the route of the line.',
  },
]

/** Three service photo briefs (the service page's own slots) and one street. */
export const shots: readonly [
  { alt: string; shot: string },
  { alt: string; shot: string },
  { alt: string; shot: string },
  { alt: string; shot: string },
] = [
  {
    alt: 'Technician reviewing sewer camera footage on a monitor',
    shot: 'Technician reviewing sewer camera footage on a monitor',
  },
  {
    alt: 'A capped sewer cleanout at a residential property',
    shot: 'Capped exterior cleanout at a residential property, no identifiers',
  },
  {
    alt: 'Inspection video and written findings from a sewer visit',
    shot: 'Monitor or tablet showing inspection video beside written findings, customer details removed',
  },
  {
    alt: 'Residential street with a manhole cover near the curb',
    shot: 'Ordinary residential street, manhole and curb, no identifiable homes',
  },
]
