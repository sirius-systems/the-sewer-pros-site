/**
 * City of North Las Vegas, NV + Sewer Camera Inspection (`sl-nlv-camera`).
 *
 * Same recipe as `sl-lv-city-camera` and `sl-henderson-*`. Built from exactly
 * two sources:
 *   LOCATION  `northLasVegasContent`  (content/pages/las-vegas-north-las-vegas.tsx)
 *   SERVICE   `svc-sewer-camera-inspection` v2 content (content/pages/services.tsx)
 *             and the shared camera blocks in `./service-location-shared`
 *
 * Section recipe (each ties a North Las Vegas fact to what THIS service does
 * or cannot do; swap the city or the service and the copy breaks):
 *   1. Blockage or breakage - the City words them differently and we do not
 *                       reconcile them; the camera does not settle either point.
 *   2. What the camera records - the footage's distance count; video and
 *                       findings; the waterline limit.
 *   3. A City-side finding - the Utilities Department video-review path, the
 *                       City's number (not ours), how submission is not published.
 *   4. No program, and a coverage gap - none found; basic homeowner's insurance
 *                       per the City; no sale rule; no permit statement.
 *
 * ⚠ No housing-age section: the location page has no Census figures, so none
 * appear here. ⚠ THE CITY NUMBER IS THE CITY'S, not ours. No company phone is
 * repeated here. No price, offer, response time, guarantee, emergency or
 * same-day claim. North Las Vegas is a service area, not an office. Repair and
 * replacement are never presented as offered.
 */

import type { PageId, ProcessContent, ServiceLocationPageContent } from '@/types'
import { northLasVegasContent } from './las-vegas-north-las-vegas'
import { serviceContent } from './services'
import {
  SERVICE_INCLUSIONS,
  SERVICE_PROBLEMS,
  SERVICE_PROBLEM_SHOTS,
  mergeRelevantFaqs,
  pageImageSlots,
} from './service-location-shared'

const id = (value: string): PageId => value as PageId

const problems = SERVICE_PROBLEMS['svc-sewer-camera-inspection']
const inclusions = SERVICE_INCLUSIONS['svc-sewer-camera-inspection']
const shots = SERVICE_PROBLEM_SHOTS['svc-sewer-camera-inspection']
if (problems === undefined || inclusions === undefined || shots === undefined) {
  throw new Error('sl-nlv-camera: shared camera inspection blocks are missing')
}

const v2 = serviceContent[id('svc-sewer-camera-inspection')]?.v2
if (v2 === undefined || northLasVegasContent.faq === undefined) {
  throw new Error('sl-nlv-camera: source service v2 or location FAQ is missing')
}

const slots = pageImageSlots('sl-nlv-camera', {
  hero: {
    alt: 'Technician feeding a sewer camera into a cleanout at a North Las Vegas home',
    shot: 'Technician feeding a camera into a residential cleanout, monitor in frame, no identifiable address',
  },
  problems: [shots[0], shots[1], shots[2], shots[3]] as const,
})

const process: ProcessContent[] = (v2.process?.steps ?? []).map((step) => ({
  title: step.title,
  description: typeof step.description === 'string' ? step.description : undefined,
}))

/**
 * Every question from the North Las Vegas location page and the camera
 * service page, minus three: the location page's "What does a sewer camera
 * inspection show?" (the service page answers it in full), its water and
 * sewer service start question (utility accounts, no bearing on a camera
 * inspection), and the service page's "Which areas does The Sewer Pros
 * serve?" (this page IS an area page). The service page's cost question
 * (DEC-088 wording) is carried as published.
 */
const faq = mergeRelevantFaqs(
  northLasVegasContent.faq,
  v2.faq,
  [
    // The service page answers it in full ("What can a sewer camera inspection show?").
    'What does a sewer camera inspection show?',
    // Utility accounts; no bearing on inspecting a line.
    'How do I start water and sewer service when I buy a home in North Las Vegas?',
    // This page IS an area page; the question is the hub's.
    'Which areas does The Sewer Pros serve?',
  ],
  'In North Las Vegas',
)

export const northLasVegasCameraContent: ServiceLocationPageContent = {
  seoTitle: 'Sewer Camera Inspection in North Las Vegas, NV',
  metaDescription:
    'Sewer camera inspection in North Las Vegas, NV. The City words blockages and breakages differently. See what a camera records on your lateral.',
  serviceDescription:
    'A sewer camera inspection is a visual inspection of the accessible inside of a sewer line, recorded on video, for properties in the City of North Las Vegas, Nevada.',
  heroImage: slots.hero,
  ctaImage: slots.cta,
  sources: northLasVegasContent.sources,
  hero: {
    eyebrow: 'North Las Vegas, NV',
    title: 'Sewer Camera Inspection in North Las Vegas',
    intro: (
      <p>
        In the City of North Las Vegas, the City says the homeowner&rsquo;s responsibility for the
        sewer service lateral ends at the connection to the main in the street. A camera inspection
        records what is inside that line, on video, before you clean it, buy the home, or approve
        work.
      </p>
    ),
  },
  body: (
    <>
      <h2>Blockage or breakage: the City words them differently</h2>
      <p>
        The City of North Las Vegas says the homeowner&rsquo;s responsibility for the sewer service
        lateral ends at the connection to the main in the street. Its water leaks page then states
        two cases differently. For a blockage, the homeowner is responsible throughout the entire
        pipe until the connection to the City&rsquo;s main. For a breakage, the homeowner is
        responsible until the point where the sewer line crosses the boundary of the property.
      </p>
      <p>
        We show both as the City states them and do not reconcile them. A camera cannot either. The
        footage records where along the line a condition sits, measured from where the camera
        entered. It does not establish where the connection or the property boundary is at your
        address.
      </p>

      <h2>What the camera records on a North Las Vegas lateral</h2>
      <ul>
        <li>Roots, grease, scale and other deposits visible inside the pipe</li>
        <li>Cracks, offset or separated joints and visible surface damage</li>
        <li>Standing water, and the places where other lines join the pipe</li>
        <li>Any part of the line the camera could not view</li>
      </ul>
      <p>
        You receive the inspection video and written findings. A camera generally cannot see under
        the waterline, so a line that is blocked and not draining may need cleaning before there is
        much to record.
      </p>

      <h2>If a plumber says the problem is on the City side</h2>
      <p>
        The City says that if a plumber has inspected the line and determined a breakage or
        blockage is on the City side, video evidence may be submitted to its Utilities Department
        for review. We did not find how the video is submitted or what the City does afterward, so
        ask the Utilities Department at 702-633-1484 (the City&rsquo;s number, not ours) before you
        pay for work. That is the City&rsquo;s customer-service and online-request number, not a
        sewer emergency line.
      </p>

      <h2>No City lateral program, and a coverage question to ask</h2>
      <p>
        We found no City lateral repair, grant or reimbursement program on the City pages we
        reviewed. That is &ldquo;none found&rdquo;, not a statement that none exists. The City also
        says most basic homeowner&rsquo;s insurance policies do not cover service laterals, so ask
        your own insurer what applies to yours.
      </p>
      <p>
        Buying? We found no City rule requiring a lateral inspection, certification or seller
        disclosure when a home is sold, so a buyer who wants evidence of the line has to ask for it.
        A recording does not tell you which approvals apply, and we found no City statement on
        whether a camera inspection needs a permit.
      </p>
    </>
  ),
  problems: [
    ...problems.map((p, i) => ({ ...p, image: slots.problems[i] })),
    {
      title: 'A plumber points to the City side',
      description:
        'The City says video evidence of a City-side blockage or breakage may be submitted to its Utilities Department for review. A recorded inspection shows what is in the line, and we do not perform repairs, so the video is a record to compare against any estimate.',
      image: slots.problems[3],
    },
  ],
  // Six items: renders as two rows of three.
  inclusions,
  process,
  coverage: {
    title: 'Other Las Vegas Valley areas',
    intro:
      'This page covers North Las Vegas. Sewer agencies and lateral rules differ across the Las Vegas Valley, so use the page for your address.',
    pageIds: [id('loc-lv-las-vegas'), id('loc-lv-henderson'), id('loc-lv-summerlin')],
    availabilityStatement: 'North Las Vegas is a service area, not an office location.',
  },
  // All relevant questions from the North Las Vegas location page and the
  // camera service page (see `faq` above).
  faq,
  relatedPageIds: [
    id('loc-lv-north-las-vegas'),
    id('svc-sewer-camera-inspection'),
    id('svc-pre-purchase-sewer-inspection'),
    id('svc-sewer-line-locating'),
  ],
  relatedTitle: 'Related pages',
  cta: {
    title: 'Schedule a sewer camera inspection in North Las Vegas',
    body: 'Get the condition of your lateral on video, with written findings.',
  },
}
