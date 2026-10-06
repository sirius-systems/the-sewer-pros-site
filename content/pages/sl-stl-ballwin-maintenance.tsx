/**
 * Ballwin, MO + Preventative Sewer Maintenance (`sl-ballwin-maintenance`).
 *
 * Authority: CLAUDE.md §9, §22, §24; docs/14-content-specification.md §43.
 *
 * One local source (`ballwinContent`, `loc-stl-ballwin`) x one service source
 * (`svc-preventative-sewer-maintenance`, its `v2` block). Nothing here is new
 * research. Section recipe, each tied to what THIS service does or cannot:
 *   1. municipalProgram - roots once a year or less are "normal maintenance"
 *      to the City, so the owner keeps the history; no default interval
 *   2. responsibility + whoToCall - MSD's main and backup line, the City's
 *      Inspections number, vs. what a visit covers
 *   3. housingAge - clay laterals and a 1976 median vs. what a camera pass
 *      records and why age sets no schedule
 *   4. systemExplainer + whoToCall - which utility serves the address, the
 *      Valley Drive project, Public Works vs. what a visit is not
 * Swap the city and sections 1-4 fail; swap the service and 1-3 fail.
 *
 * ⚠ NO INTERVAL, SCHEDULE, PLAN OR CONTRACT is claimed. The City's once-a-year
 * line is its own program rule for roots, not a recommended interval, and the
 * service page states none.
 * ⚠ MSD, CITY AND DOLLAR NUMBERS ARE THEIRS, not ours. No company phone,
 * office, price, offer, response time or guarantee appears. Repair and
 * replacement are never offered. Ballwin facts only: nothing from another St.
 * Louis municipality or from MSD's St. Louis City system is carried over.
 */

import type { PageId, ProcessContent, ServiceLocationPageContent } from '@/types'
import { ballwinContent } from './st-louis-ballwin'
import { serviceContent } from './services'
import { mergeRelevantFaqs, pageImageSlots } from './service-location-shared'
import { inclusions, problems, shots } from './sl-blocks/preventative-sewer-maintenance'

const id = (value: string): PageId => value as PageId

const SERVICE_ID = 'svc-preventative-sewer-maintenance'

const v2 = serviceContent[id(SERVICE_ID)]?.v2
if (v2 === undefined || ballwinContent.faq === undefined) {
  throw new Error('sl-ballwin-maintenance: source content is missing')
}

// Alt text stays neutral: the location page allows Ballwin wording only for a
// photo taken at a Ballwin-area property.
const slots = pageImageSlots('sl-ballwin-maintenance', {
  hero: {
    alt: 'Technician on a preventative sewer maintenance visit at a home',
    shot: 'Technician at a residential cleanout during a maintenance visit, monitor in frame, no identifiable address',
  },
  problems: [shots[0], shots[1], shots[2], shots[3]] as const,
})

/**
 * Every question from the Ballwin location page and the maintenance service
 * page, minus five Ballwin questions: "What does a sewer camera inspection
 * show?" (the service page asks "What does a sewer camera inspection find?"),
 * "Do you repair or replace sewer lines?" (the service page's "Do you offer
 * sewer repair or replacement?" answers it in full), and the two home-sale
 * questions, which are not about maintenance.
 */
const faq = mergeRelevantFaqs(
  ballwinContent.faq,
  v2.faq,
  [
    'What does a sewer camera inspection show?',
    'Do you repair or replace sewer lines?',
    'Will the program pay for a problem found in a home-sale inspection?',
    'Does Ballwin require an inspection when a home is sold or rented?',
  ],
  'In Ballwin',
)

const steps: ProcessContent[] = (v2.process?.steps ?? []).map((step) => ({
  title: step.title,
  description: typeof step.description === 'string' ? step.description : undefined,
}))

export const ballwinMaintenanceContent: ServiceLocationPageContent = {
  seoTitle: 'Preventative Sewer Maintenance in Ballwin, MO',
  metaDescription:
    'Preventative sewer maintenance in Ballwin, MO. The City counts roots cleared once a year or less as normal maintenance. See what a visit covers and leaves out.',
  serviceDescription:
    "Preventative sewer maintenance is planned inspection and cleaning of a home's drain and sewer line before buildup or an obstruction causes a backup, for properties in Ballwin, Missouri. It is diagnostic and cleaning work, not repair.",
  heroImage: slots.hero,
  ctaImage: slots.cta,
  sources: ballwinContent.sources,
  hero: {
    eyebrow: 'Ballwin, MO',
    title: 'Preventative Sewer Maintenance in Ballwin',
    intro: (
      <p>
        In Ballwin, the lateral that connects your building to MSD&rsquo;s main is private property,
        and the City&rsquo;s repair program treats clearing roots once a year or less as normal
        maintenance rather than a covered repair. Preventative sewer maintenance is the planned
        version: a camera pass that records the visible condition of the accessible line, and
        cleaning when it is appropriate, before buildup becomes a backup.
      </p>
    ),
  },
  body: (
    <>
      <h2>Once a year or less is &ldquo;normal maintenance&rdquo; to the City</h2>
      <p>
        Ballwin&rsquo;s Sewer Lateral Repair Program treats roots that clearing once a year or less
        can control as normal maintenance, and it does not fund them. Roots that need clearing more
        than once a year are a covered repair, and an application that shows only roots or minor
        defects must document a history of clearing blockages more than once a year (the
        City&rsquo;s terms, not ours).
      </p>
      <p>
        So the line&rsquo;s own history matters. A maintenance visit leaves you a recorded camera
        pass, then cleaning if buildup or an obstruction is present, and you keep the video and
        written findings. The City&rsquo;s once-a-year line is a program rule, not a recommended
        interval, and we state no interval here.
      </p>

      <h2>What a visit covers, and what it leaves to MSD and the City</h2>
      <p>
        MSD owns and maintains the public sewer main and says the lateral and its connection are
        private property, which the owner maintains and repairs. For a building backup, MSD asks
        customers to call (314) 768-6260 so it can inspect (MSD&rsquo;s number, not ours). The
        City&rsquo;s Inspections Department, at (636) 227-2129, takes questions about its lateral
        program (the City&rsquo;s number).
      </p>
      <ul>
        <li>
          The footage records where along the line a condition sits, measured from where the camera
          entered.
        </li>

        <li>Cleaning does not repair pipe. The Sewer Pros does not perform repairs.</li>
      </ul>

      <h2>Older clay laterals, a 1976 median, and still no default schedule</h2>
      <p>
        Ballwin says most older sewer laterals in the city are clay pipe, which can crack, break,
        separate at joints and let roots in while the line still works normally. The median year
        built is 1976 (U.S. Census Bureau ACS 2019-2023 5-year estimates, City of Ballwin as a
        whole). A drain that still works is not proof of a sound pipe, and a camera pass shows
        cracks, joint separation, roots, or buildup with an intact pipe.
      </p>
      <p>
        A line with no history of problems does not need a default schedule. What raises the
        question is the line: mature trees near it, buildup that returned after a cleaning, or
        earlier backups never documented on camera.
      </p>

      <h2>Which utility serves you, and what a maintenance visit is not</h2>
      <p>
        The City of Ballwin lists MSD as the sewer utility serving its residents, and which utility
        serves a specific address, such as a property near a service boundary, should be confirmed
        by address. MSD describes a Valley Drive Sanitary Relief Phase III project in Ballwin and
        Clarkson Valley on the public sewer, with a tentative schedule. It tells you nothing about
        the condition of any one lateral.
      </p>
      <p>
        A maintenance visit is inspection and cleaning. It does not involve excavation, and sanitary
        sewer repair permits and excavation in the street right-of-way go through Public Works at
        (636) 227-9000 (the City&rsquo;s number). It is not an emergency response and does not
        replace any City review.
      </p>
    </>
  ),
  problems: [
    ...problems.map((p, i) => ({ ...p, image: slots.problems[i] })),
    {
      title: 'The City’s program does not pay for maintenance',
      description:
        'Ballwin’s program does not cover normal wear while the lateral still functions, the cost of cabling to clear a blockage, or the cost of a video of the lateral. Those stay with the owner, so a maintenance visit is yours to plan.',
      image: slots.problems[3],
    },
  ],
  inclusions,
  process: steps,
  coverage: {
    title: 'Other St. Louis area locations',
    intro:
      'This page covers Ballwin. Sewer agencies and lateral rules differ from place to place, so use the page for your address.',
    pageIds: [
      id('loc-stl-st-louis-city'),
      id('loc-stl-chesterfield'),
      id('loc-stl-st-charles'),
      id('loc-stl-florissant'),
    ],
    availabilityStatement: 'Ballwin is a service area, not an office location.',
  },
  faq,
  relatedPageIds: [
    id('loc-stl-ballwin'),
    id(SERVICE_ID),
    id('svc-sewer-camera-inspection'),
    id('svc-sewer-cleaning'),
  ],
  relatedTitle: 'Related pages',
  cta: {
    title: 'Request preventative sewer maintenance in Ballwin',
    body: 'Tell us what you have noticed and what the line’s history looks like. We will talk through access and what a visit would include.',
  },
}
