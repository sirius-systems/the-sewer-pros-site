/**
 * Henderson, NV + Preventative Sewer Maintenance (`sl-henderson-maintenance`).
 *
 * Authority: CLAUDE.md §9, §22, §24; docs/14-content-specification.md §43.
 *
 * One local source (`hendersonContent`, `loc-lv-henderson`) x one service source
 * (`svc-preventative-sewer-maintenance`, its `v2` block). Nothing here is new
 * research. Section recipe, each tied to what THIS service does or cannot:
 *   1. responsibility + municipalProgram - the City's periodic-inspection duty
 *   2. responsibility + municipalProgram - what the owner pays, no City program
 *   3. housingAge - newer homes, no default schedule
 *   4. whoToCall - City contacts vs a maintenance visit
 * Swap the city and sections 1-4 fail; swap the service and 1-3 fail.
 *
 * Audit: docs/source-reports/henderson/sl-henderson-maintenance.md
 *
 * ⚠ NO INTERVAL, SCHEDULE, PLAN OR CONTRACT is claimed. The City's pages give
 * none that we found and the service page states none.
 * ⚠ CITY NUMBERS ARE THE CITY'S, not ours. No company phone, office, price,
 * offer, response time or guarantee appears. Repair and replacement are never
 * offered.
 */

import type { PageId, ProcessContent, ServiceLocationPageContent } from '@/types'
import { hendersonContent } from './las-vegas-henderson'
import { serviceContent } from './services'
import { mergeRelevantFaqs, pageImageSlots } from './service-location-shared'
import { inclusions, problems, shots } from './sl-blocks/preventative-sewer-maintenance'

const id = (value: string): PageId => value as PageId

const SERVICE_ID = 'svc-preventative-sewer-maintenance'

const v2 = serviceContent[id(SERVICE_ID)]?.v2
if (v2 === undefined || hendersonContent.faq === undefined) {
  throw new Error('sl-henderson-maintenance: source content is missing')
}

const slots = pageImageSlots('sl-henderson-maintenance', {
  hero: {
    alt: 'Technician on a preventative sewer maintenance visit at a Henderson home',
    shot: 'Technician at a residential cleanout during a maintenance visit, monitor in frame, no identifiable address',
  },
  problems: [shots[0], shots[1], shots[2], shots[3]] as const,
})

/**
 * Every question from the Henderson location page and the maintenance service
 * page, minus four Henderson questions: "What does a sewer camera inspection
 * show?" (the service page asks "What does a sewer camera inspection find?"),
 * "Do you repair or replace sewer lines?" (the service page's "Do you offer
 * sewer repair or replacement?" answers it in full), and the two purchase
 * questions, "Does Henderson require a sewer inspection when a home is sold?"
 * and "How do I transfer water and sewer service when I buy a home in
 * Henderson?", which are not about maintenance.
 */
const faq = mergeRelevantFaqs(
  hendersonContent.faq,
  v2.faq,
  [
    'What does a sewer camera inspection show?',
    'Do you repair or replace sewer lines?',
    'Does Henderson require a sewer inspection when a home is sold?',
    'How do I transfer water and sewer service when I buy a home in Henderson?',
  ],
  'In Henderson',
)

const steps: ProcessContent[] = (v2.process?.steps ?? []).map((step) => ({
  title: step.title,
  description: typeof step.description === 'string' ? step.description : undefined,
}))

export const hendersonMaintenanceContent: ServiceLocationPageContent = {
  seoTitle: 'Preventative Sewer Maintenance in Henderson, NV',
  metaDescription:
    'Preventative sewer maintenance in Henderson, NV. The City lists periodic lateral inspection as an owner duty. See what a camera pass and cleaning cover.',
  serviceDescription:
    "Preventative sewer maintenance is planned inspection and cleaning of a home's drain and sewer line before buildup or an obstruction causes a backup, for properties in the City of Henderson, Nevada. It is diagnostic and cleaning work, not repair.",
  heroImage: slots.hero,
  ctaImage: slots.cta,
  hero: {
    eyebrow: 'Henderson, NV',
    title: 'Preventative Sewer Maintenance in Henderson',
    intro: (
      <p>
        In the City of Henderson, the City lists hiring a professional to
        periodically inspect the sewer service lateral among owner duties, and we
        found no City schedule for it. Preventative sewer maintenance is the
        planned version: a camera pass that records the visible condition of the
        accessible line, and cleaning when it is appropriate, before buildup
        becomes a backup.
      </p>
    ),
  },
  body: (
    <>
      <h2>The City names periodic inspection as your duty</h2>
      <p>
        On the City&rsquo;s list of owner responsibilities for the lateral is
        hiring a professional to periodically inspect it from the connection to
        your home and perform any necessary maintenance or repairs. The City
        gives no interval, and we found no City program, schedule or reporting
        requirement for lateral inspections.
      </p>
      <p>
        A maintenance visit is one way to carry that duty out: a recorded camera
        pass, then cleaning if buildup or an obstruction is present. Because the
        City sets no schedule, the line&rsquo;s own history decides what is
        useful, and we state no interval here.
      </p>

      <h2>Your side of the connection, and what a visit covers</h2>
      <p>
        The City says it maintains its sewer main up to your connection,
        including cleaning blockages. From the connection to your home, it says
        you pay cleanup and repair costs, including street or driveway damage. We
        found no City repair, grant or reimbursement program for a lateral.
      </p>
      <ul>
        <li>The footage records where along the line a condition sits, measured from where the camera entered.</li>
        <li>It does not establish where the connection to the City main is.</li>
        <li>Cleaning does not repair pipe. The Sewer Pros does not perform repairs.</li>
      </ul>
      <p>
        You keep the video and written findings, which are the record of what was
        visible if a condition remains after cleaning.
      </p>

      <h2>Newer homes have no default schedule either</h2>
      <p>
        Henderson&rsquo;s median year built is 2001, and 82.1 percent of housing
        units were built in 1990 or later (U.S. Census Bureau ACS 2020-2024
        5-year estimates, Henderson city; the percentage is our arithmetic on the
        Census rows). Those are mostly newer homes, but the year a house was built
        does not tell you the condition or material of its lateral.
      </p>
      <p>
        A line with no history of problems does not need a default schedule. What
        raises the question is the line: mature trees near it, buildup that
        returned after a cleaning, or earlier backups never documented on camera.
      </p>

      <h2>City contacts, and what a maintenance visit is not</h2>
      <p>
        To report a sewer emergency, the City says to call its 24-hour call center
        at 702-267-5900 (the City&rsquo;s number, not ours). For a non-emergency
        concern, it points to Contact Henderson, its service-request portal. For
        work in the public right-of-way, contact Public Works at 702-267-3600
        about a permit.
      </p>
      <p>
        We found no City statement that cleaning or a camera inspection needs a
        permit, so ask Public Works if you are unsure. A maintenance visit is
        inspection and cleaning. It is not an emergency response and does not
        replace any City review.
      </p>
    </>
  ),
  problems: [
    ...problems.map((p, i) => ({ ...p, image: slots.problems[i] })),
    {
      title: 'The City lists periodic inspection as an owner duty',
      description:
        'Henderson lists hiring a professional to periodically inspect the lateral among owner responsibilities and publishes no schedule we found. The line’s own history is what tells you how often to look.',
      image: slots.problems[3],
    },
  ],
  inclusions,
  process: steps,
  coverage: {
    title: 'Other Las Vegas Valley areas',
    intro:
      'This page covers the City of Henderson. Sewer agencies and lateral rules differ across the Las Vegas Valley, so use the page for your address.',
    pageIds: [id('loc-lv-las-vegas'), id('loc-lv-north-las-vegas'), id('loc-lv-summerlin')],
    availabilityStatement: 'Henderson is a service area, not an office location.',
  },
  faq,
  relatedPageIds: [
    id('loc-lv-henderson'),
    id(SERVICE_ID),
    id('svc-sewer-camera-inspection'),
    id('svc-sewer-cleaning'),
  ],
  relatedTitle: 'Related pages',
  cta: {
    title: 'Request preventative sewer maintenance in Henderson',
    body: 'Tell us what you have noticed and what the line’s history looks like. We will talk through access and what a visit would include.',
  },
}
