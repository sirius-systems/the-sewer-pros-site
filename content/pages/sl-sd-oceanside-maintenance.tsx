/**
 * Oceanside, CA + Preventative Sewer Maintenance (`sl-oceanside-maintenance`).
 *
 * Authority: CLAUDE.md §9, §22, §24; docs/14-content-specification.md §43.
 *
 * One local source (`oceansideContent`, `loc-sd-oceanside`) x one service
 * source (`svc-preventative-sewer-maintenance`, its `v2` block). Nothing here
 * is new research. Section recipe, each tied to what THIS service does or
 * cannot:
 *   1. The line is the owner's per the City, and we found no City inspection
 *      requirement for existing laterals - so no interval is stated for a visit
 *   2. The cleanout and the visit - a recorded camera pass that notes what
 *      limits the view vs. what the footage does not establish about the City's
 *      part
 *   3. The Census median year built vs. "a line with no history of problems
 *      does not need a default schedule"; what raises the question
 *   4. No City repair help found, the improvement-plan rule - vs. what a visit
 *      is not
 * Swap the city and sections 1-4 fail; swap the service and 1-3 fail.
 *
 * ⚠ OCEANSIDE HAS ONE SEWER AGENCY (the City). The page never says the City
 * serves a given address. The City publishes no maintenance interval that we
 * cite; nothing says the City requires a schedule for existing laterals.
 * ⚠ NO INTERVAL, SCHEDULE, PLAN OR CONTRACT is claimed for The Sewer Pros.
 * ⚠ CITY NUMBERS ARE THE CITY'S, not ours. The City's 2021 Sewer System
 * Management Plan and 2015 Sewer Master Plan are cited only as documents the
 * City lists. No dates are stated. No company phone, office, price, offer,
 * response time or guarantee appears. Repair and replacement are never offered.
 * Consistent with `sl-oceanside-cleaning`.
 *
 * Audit: docs/source-reports/san-diego/sl-oceanside-maintenance.md
 */

import type { PageId, ProcessContent, ServiceLocationPageContent } from '@/types'
import { oceansideContent } from './san-diego-oceanside'
import { serviceContent } from './services'
import { mergeRelevantFaqs, pageImageSlots } from './service-location-shared'
import { inclusions, problems, shots } from './sl-blocks/preventative-sewer-maintenance'

const id = (value: string): PageId => value as PageId

const SERVICE_ID = 'svc-preventative-sewer-maintenance'

const v2 = serviceContent[id(SERVICE_ID)]?.v2
if (v2 === undefined || oceansideContent.faq === undefined) {
  throw new Error('sl-oceanside-maintenance: source content is missing')
}

// Alt text stays neutral: no place-specific photo is claimed.
const slots = pageImageSlots('sl-oceanside-maintenance', {
  hero: {
    alt: 'Technician on a preventative sewer maintenance visit at a home',
    shot: 'Technician at a residential cleanout during a maintenance visit, monitor in frame, no identifiable address',
  },
  problems: [shots[0], shots[1], shots[2], shots[3]] as const,
})

/**
 * Every question from the Oceanside location page and the maintenance service
 * page, minus three Oceanside questions: "What does a sewer camera inspection
 * show?" (the service page asks "What does a sewer camera inspection find?"),
 * "Do you repair or replace sewer lines?" (the service page's "Do you offer
 * sewer repair or replacement?" answers it in full), and "Is a sewer
 * inspection required when buying an Oceanside home?", which is not about
 * maintenance.
 */
const faq = mergeRelevantFaqs(
  oceansideContent.faq,
  v2.faq,
  [
    'What does a sewer camera inspection show?',
    'Do you repair or replace sewer lines?',
    'Is a sewer inspection required when buying an Oceanside home?',
  ],
  'In Oceanside',
)

const steps: ProcessContent[] = (v2.process?.steps ?? []).map((step) => ({
  title: step.title,
  description: typeof step.description === 'string' ? step.description : undefined,
}))

export const oceansideMaintenanceContent: ServiceLocationPageContent = {
  seoTitle: 'Preventative Sewer Maintenance in Oceanside, CA',
  metaDescription:
    'Preventative sewer maintenance in Oceanside, CA. The City says the private line is the owner’s. See what a camera and cleaning visit covers.',
  serviceDescription:
    "Preventative sewer maintenance is planned inspection and cleaning of a home's drain and sewer line before buildup or an obstruction causes a backup, for properties in Oceanside, California. It is diagnostic and cleaning work, not repair.",
  heroImage: slots.hero,
  ctaImage: slots.cta,
  sources: oceansideContent.sources,
  hero: {
    eyebrow: 'Oceanside, CA',
    title: 'Preventative Sewer Maintenance in Oceanside',
    intro: (
      <p>
        In Oceanside, the City says private sewer lines, &ldquo;from the street to your
        house,&rdquo; are the property owner&rsquo;s responsibility, and we found no City inspection
        requirement for existing laterals. Preventative sewer maintenance is the planned version
        with evidence: a camera pass that records the visible condition of the accessible line, and
        cleaning when it is appropriate, before buildup becomes a backup.
      </p>
    ),
  },
  body: (
    <>
      <h2>The line is the owner&rsquo;s, and no City inspection rule was found</h2>
      <p>
        The City of Oceanside Water Utilities Department runs the public sewer system. The City says
        private sewer lines, &ldquo;from the street to your house,&rdquo; are the property
        owner&rsquo;s, and we did not find the exact point where its part ends. The City lists a
        2021 Sewer System Management Plan and a 2015 Sewer Master Plan among its planning documents,
        and we cite them only as documents the City lists.
      </p>
      <p>
        We did not find a City inspection requirement for existing laterals. We state no interval
        for a maintenance visit either, because the line&rsquo;s own history decides what is useful.
      </p>

      <h2>The cleanout is the door, and the footage has limits</h2>
      <p>
        A maintenance visit starts with the history, then access, commonly a cleanout. A recorded
        camera pass goes through the accessible section, with anything that limits the view noted,
        then cleaning if buildup or an obstruction is present.
      </p>
      <ul>
        <li>
          The footage records where along the line a condition sits, measured from where the camera
          entered.
        </li>
        <li>It does not establish where the City&rsquo;s part of the system begins.</li>
        <li>Cleaning does not repair pipe. The Sewer Pros does not perform repairs.</li>
      </ul>

      <h2>A 1984 median year built is not a maintenance schedule</h2>
      <p>
        Oceanside&rsquo;s median year built is 1984, plus or minus 2 years, per the U.S. Census
        Bureau&rsquo;s American Community Survey (2020-2024 5-year estimates), and our arithmetic
        puts 48.6 percent of housing units in 1970 to 1989. A house&rsquo;s year does not tell you
        the condition or material of its lateral, which can be repaired or replaced after the house
        is built.
      </p>
      <p>
        A line with no history of problems does not need a default schedule. What raises the
        question is the line: mature trees near it, buildup that returned after a cleaning, or
        earlier backups never documented on camera. A baseline camera record is how you learn what
        is there.
      </p>

      <h2>No City repair help found, and a visit is not a repair</h2>
      <p>
        We found no City lateral repair, replacement, grant or reimbursement program, which is
        &ldquo;none found&rdquo;, not a statement that none exists. The City says sewer improvements
        in a public right-of-way, a City easement or City property need an improvement plan approved
        by Water Utilities and signed by a Registered Civil Engineer.
      </p>
      <p>
        A maintenance visit is inspection and cleaning. If a visible condition remains after
        cleaning, further evaluation may be appropriate outside our cleaning and diagnostic scope.
        Keep the video and written findings, and compare more than one written estimate before
        approving major work.
      </p>
    </>
  ),
  problems: [
    ...problems.map((p, i) => ({ ...p, image: slots.problems[i] })),
    {
      title: 'Not sure whether it is the City’s system or your line',
      description:
        'The City’s customer service number, (760) 435-5800, is for questions about the public system, and for a sewer leak on your property the City says to call a plumber. Those are the City’s numbers and instructions, not ours. A maintenance visit documents your line. It is not a report to the City.',
      image: slots.problems[3],
    },
  ],
  inclusions,
  process: steps,
  coverage: {
    title: 'Other San Diego area locations',
    intro:
      'This page covers the City of Oceanside. Sewer agencies and lateral rules differ across San Diego County, so use the page for your address.',
    pageIds: [
      id('loc-sd-san-diego'),
      id('loc-sd-san-marcos'),
      id('loc-sd-carlsbad'),
      id('loc-sd-escondido'),
      id('loc-sd-chula-vista'),
      id('loc-sd-mission-valley'),
    ],
    availabilityStatement: 'Oceanside is a service area, not an office location.',
  },
  faq,
  relatedPageIds: [
    id('loc-sd-oceanside'),
    id(SERVICE_ID),
    id('svc-sewer-camera-inspection'),
    id('svc-sewer-cleaning'),
  ],
  relatedTitle: 'Related pages',
  cta: {
    title: 'Request preventative sewer maintenance in Oceanside',
    body: 'Tell us what you have noticed and what the line’s history looks like. We will talk through access and what a visit would include.',
  },
}
