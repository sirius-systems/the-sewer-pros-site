/**
 * City of North Las Vegas, NV + Preventative Sewer Maintenance (`sl-nlv-maintenance`).
 *
 * Authority: CLAUDE.md §9, §22, §24; docs/14-content-specification.md §43.
 * Model: `sl-lv-city-maintenance.tsx` (approved).
 *
 * One local source (`northLasVegasContent`, `loc-lv-north-las-vegas`) x one service
 * source (`svc-preventative-sewer-maintenance`, its `v2` block). Nothing here is
 * new research. Section recipe, each tied to what THIS service does or cannot:
 *   1. responsibility - a blockage is the owner's throughout the pipe to the
 *      City main, vs. a planned camera pass and cleaning
 *   2. responsibility + municipalProgram - a breakage is worded differently,
 *      cleaning is not repair, no City program found
 *   3. systemExplainer + service FAQ - no system type, age or local conditions
 *      on the City pages, and no default schedule
 *   4. whoToCall + municipalProgram - the Utilities Department, no permit
 *      statement for cleaning or a camera pass, insurance
 * Swap the city and sections 1-4 fail; swap the service and 1-3 fail.
 *
 * Audit: docs/source-reports/north-las-vegas/sl-nlv-maintenance.md
 *
 * ⚠ The North Las Vegas location page does NOT say that periodic lateral
 * inspection is an owner duty, and has no housing-age section, so this page says
 * neither and states no year-built figure.
 * ⚠ NO INTERVAL, SCHEDULE, PLAN OR CONTRACT is claimed. The service page states
 * none.
 * ⚠ CITY NUMBER IS THE CITY'S, not ours. No company phone, office, price,
 * offer, response time or guarantee appears. Repair and replacement are never
 * offered.
 */

import type { PageId, ProcessContent, ServiceLocationPageContent } from '@/types'
import { northLasVegasContent } from './las-vegas-north-las-vegas'
import { serviceContent } from './services'
import { mergeRelevantFaqs, pageImageSlots } from './service-location-shared'
import { inclusions, problems, shots } from './sl-blocks/preventative-sewer-maintenance'

const id = (value: string): PageId => value as PageId

const SERVICE_ID = 'svc-preventative-sewer-maintenance'

const v2 = serviceContent[id(SERVICE_ID)]?.v2
if (v2 === undefined || northLasVegasContent.faq === undefined) {
  throw new Error('sl-nlv-maintenance: source content is missing')
}

// Alt text stays neutral: the location page allows North Las Vegas wording only
// for a photo taken at a North Las Vegas-area property.
const slots = pageImageSlots('sl-nlv-maintenance', {
  hero: {
    alt: 'Technician on a preventative sewer maintenance visit at a home',
    shot: 'Technician at a residential cleanout during a maintenance visit, monitor in frame, no identifiable address',
  },
  problems: [shots[0], shots[1], shots[2], shots[3]] as const,
})

/**
 * Every question from the North Las Vegas location page and the maintenance
 * service page, minus four North Las Vegas questions: "What does a sewer camera
 * inspection show?" (the service page asks "What does a sewer camera inspection
 * find?"), "Do you repair or replace sewer lines?" (the service page's "Do you
 * offer sewer repair or replacement?" answers it in full), "Does North Las
 * Vegas require a sewer inspection when a home is sold?" and "How do I start
 * water and sewer service when I buy a home in North Las Vegas?", which are
 * about buying, not maintenance.
 */
const faq = mergeRelevantFaqs(
  northLasVegasContent.faq,
  v2.faq,
  [
    'What does a sewer camera inspection show?',
    'Do you repair or replace sewer lines?',
    'Does North Las Vegas require a sewer inspection when a home is sold?',
    'How do I start water and sewer service when I buy a home in North Las Vegas?',
  ],
  'In North Las Vegas',
)

const steps: ProcessContent[] = (v2.process?.steps ?? []).map((step) => ({
  title: step.title,
  description: typeof step.description === 'string' ? step.description : undefined,
}))

export const northLasVegasMaintenanceContent: ServiceLocationPageContent = {
  seoTitle: 'Preventative Sewer Maintenance in North Las Vegas, NV',
  metaDescription:
    'Preventative sewer maintenance in North Las Vegas, NV. The City says a blockage is yours up to its main. See what a camera pass and cleaning cover.',
  serviceDescription:
    "Preventative sewer maintenance is planned inspection and cleaning of a home's drain and sewer line before buildup or an obstruction causes a backup, for properties in the City of North Las Vegas, Nevada. It is diagnostic and cleaning work, not repair.",
  heroImage: slots.hero,
  ctaImage: slots.cta,
  sources: northLasVegasContent.sources,
  hero: {
    eyebrow: 'North Las Vegas, NV',
    title: 'Preventative Sewer Maintenance in North Las Vegas',
    intro: (
      <p>
        In the City of North Las Vegas, the City says the homeowner is responsible for a blockage
        throughout the entire pipe until the connection to the City&rsquo;s main. Preventative sewer
        maintenance is the planned version: a camera pass that records the visible condition of the
        accessible line, and cleaning when it is appropriate, before buildup becomes a backup.
      </p>
    ),
  },
  body: (
    <>
      <h2>The City ties a blockage to your pipe all the way to the main</h2>
      <p>
        The City of North Las Vegas says the homeowner&rsquo;s responsibility for the sewer service
        lateral ends at the connection to the main in the street. For a blockage, it says the
        homeowner is responsible throughout the entire pipe until the connection to the
        City&rsquo;s main.
      </p>
      <p>
        A maintenance visit is the planned way to look after that pipe: a recorded camera pass,
        then cleaning if buildup or an obstruction is present. The footage records where along the
        line a condition sits, measured from where the camera entered. It does not establish where
        the connection to the City main is.
      </p>

      <h2>A breakage is worded differently, and cleaning does not fix one</h2>
      <p>
        For a breakage, the City says the homeowner is responsible until the point where the sewer
        line crosses the boundary of the property. We show both statements as the City words them
        and do not reconcile them.
      </p>
      <p>
        Cleaning does not repair pipe, and The Sewer Pros does not perform repairs. You keep the
        video and written findings, which are the record of what was visible if a condition remains
        after cleaning. We found no City repair, grant or reimbursement program for a lateral.
      </p>

      <h2>No system age or schedule on the City pages, so the line decides</h2>
      <p>
        The City pages we reviewed do not say whether the system is combined or separate, how old
        its mains are, or what recurring conditions occur locally, so nothing on them points to a
        schedule for your line.
      </p>
      <p>
        A line with no history of problems does not need a default schedule, and we state no
        interval here. What raises the question is the line: mature trees near it, buildup that
        returned after a cleaning, or earlier backups never documented on camera.
      </p>

      <h2>Who to call, and what a maintenance visit is not</h2>
      <p>
        The City lists 702-633-1484 for its Utilities Department (the City&rsquo;s number, not
        ours). It is customer service and an online request, not a sewer emergency line. If a
        plumber determines a blockage or breakage is on the City side, the City says video evidence
        may be submitted to that department for review. We did not find how.
      </p>
      <p>
        We found no City statement that cleaning or a camera inspection needs a permit or
        inspection, so ask the Utilities Department which rules apply to your address. A
        maintenance visit is inspection and cleaning. It is not an emergency response and does not
        replace any City review. The City also says most basic homeowner&rsquo;s insurance policies
        do not cover service laterals, so ask your own insurer what applies.
      </p>
    </>
  ),
  problems: [
    ...problems.map((p, i) => ({ ...p, image: slots.problems[i] })),
    {
      title: 'A blockage the City treats as yours to the main',
      description:
        'The City says that for a blockage the homeowner is responsible throughout the entire pipe until the connection to the City’s main. A maintenance pass records the accessible line. It does not establish where that connection is.',
      image: slots.problems[3],
    },
  ],
  inclusions,
  process: steps,
  coverage: {
    title: 'Other Las Vegas Valley areas',
    intro:
      'This page covers North Las Vegas. Sewer agencies and lateral rules differ across the Las Vegas Valley, so use the page for your address.',
    pageIds: [id('loc-lv-las-vegas'), id('loc-lv-henderson'), id('loc-lv-summerlin')],
    availabilityStatement: 'North Las Vegas is a service area, not an office location.',
  },
  faq,
  relatedPageIds: [
    id('loc-lv-north-las-vegas'),
    id(SERVICE_ID),
    id('svc-sewer-camera-inspection'),
    id('svc-sewer-cleaning'),
  ],
  relatedTitle: 'Related pages',
  cta: {
    title: 'Request preventative sewer maintenance in North Las Vegas',
    body: 'Tell us what you have noticed and what the line’s history looks like. We will talk through access and what a visit would include.',
  },
}
