/**
 * Florissant, MO + Sewer Camera Inspection (`sl-florissant-camera`).
 *
 * Same recipe as `sl-nlv-camera` and `sl-lv-city-camera`. Built from exactly
 * two sources:
 *   LOCATION  `florissantContent`  (content/pages/st-louis-florissant.tsx)
 *   SERVICE   `svc-sewer-camera-inspection` v2 content (content/pages/services.tsx)
 *             and the shared camera blocks in `./service-location-shared`
 *
 * Section recipe (each ties a Florissant fact to what THIS service does or
 * cannot do; swap the city or the service and the copy breaks):
 *   1. The City's boundary    - the program stops five feet from the foundation;
 *                               footage records where along the line a condition
 *                               was seen but does not establish that boundary.
 *   2. Mid-century homes      - 21,229 units, mostly 1950-1979; no pipe material
 *                               published; what the camera records; waterline limit.
 *   3. The City's own evaluation - its contracted plumber and Engineer review;
 *                               the $300 deposit is the CITY's term; your own
 *                               recorded evidence is not a substitute.
 *   4. Buying                 - sold "as is", occupancy permit page silent on
 *                               sewers, the program is not for a sale contingency.
 *
 * ⚠ CITY AND MSD NUMBERS AND DOLLAR TERMS ARE THEIRS, not ours. No company
 * phone is repeated here. No price, offer, response time, guarantee, emergency
 * or same-day claim. Florissant is a service area, not an office. Repair and
 * replacement are never presented as offered. Nothing from the St. Louis City,
 * Chesterfield, Ballwin or St. Charles pages is used.
 *
 * Audit: docs/source-reports/st-louis/sl-florissant-camera.md
 */

import type { PageId, ProcessContent, ServiceLocationPageContent } from '@/types'
import { florissantContent } from './st-louis-florissant'
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
  throw new Error('sl-florissant-camera: shared camera inspection blocks are missing')
}

const v2 = serviceContent[id('svc-sewer-camera-inspection')]?.v2
if (v2 === undefined || florissantContent.faq === undefined) {
  throw new Error('sl-florissant-camera: source service v2 or location FAQ is missing')
}

const slots = pageImageSlots('sl-florissant-camera', {
  hero: {
    alt: 'Technician feeding a sewer camera into a cleanout beside a home',
    shot: 'Technician feeding a camera into a residential cleanout, monitor in frame, no identifiable address',
  },
  problems: [shots[0], shots[1], shots[2], shots[3]] as const,
})

const process: ProcessContent[] = (v2.process?.steps ?? []).map((step) => ({
  title: step.title,
  description: typeof step.description === 'string' ? step.description : undefined,
}))

/**
 * Every question from the Florissant location page and the camera service
 * page, minus two: the location page's "What does a sewer camera inspection
 * show?" (the service page answers it in full) and the service page's "Which
 * areas does The Sewer Pros serve?" (this page IS an area page). The service
 * page's cost question (DEC-088 wording) is carried as published.
 */
const faq = mergeRelevantFaqs(
  florissantContent.faq,
  v2.faq,
  [
    // The service page answers it in full ("What can a sewer camera inspection show?").
    'What does a sewer camera inspection show?',
    // This page IS an area page; the question is the hub's.
    'Which areas does The Sewer Pros serve?',
  ],
  'In Florissant',
)

export const florissantCameraContent: ServiceLocationPageContent = {
  seoTitle: 'Sewer Camera Inspection in Florissant, MO',
  metaDescription:
    'Sewer camera inspection in Florissant, MO. The City’s lateral program stops five feet from the foundation. See what a camera records and what it cannot.',
  serviceDescription:
    'A sewer camera inspection is a visual inspection of the accessible inside of a sewer line, recorded on video, for properties in Florissant, Missouri.',
  heroImage: slots.hero,
  ctaImage: slots.cta,
  sources: florissantContent.sources,
  hero: {
    eyebrow: 'Florissant, MO',
    title: 'Sewer Camera Inspection in Florissant',
    intro: (
      <p>
        In Florissant, MSD says the lateral from your building to the public sewer, including its
        connection, is private property that the owner maintains. The City&rsquo;s own lateral
        program stops five feet from the foundation. A camera inspection records what is inside your
        line, on video, before you clean it, apply to the City, buy the home, or approve work.
      </p>
    ),
  },
  body: (
    <>
      <h2>The City&rsquo;s program stops five feet from the foundation</h2>
      <p>
        Florissant&rsquo;s Sewer Lateral Insurance Program covers repair of a defective residential
        lateral from the main to within five feet of the home&rsquo;s foundation. The City lists a
        blockage under the home or within five feet of the foundation among its reasons to deny an
        application.
      </p>
      <p>
        The footage records where along the line a condition was seen. It does not establish where
        the City&rsquo;s five-foot boundary falls at your address, so ask the Engineering Division
        at (314) 839-7643 (the City&rsquo;s number, not ours) how it applies.
      </p>

      <h2>What the camera records on a mid-century lateral</h2>
      <p>
        The City&rsquo;s 2026-2030 Consolidated Plan reports 21,229 housing units in Florissant and
        says the vast majority were built between 1950 and 1979. Neither MSD nor the City publishes
        a pipe material or installation era, so a home&rsquo;s age does not tell you what is in the
        lateral. A camera may document:
      </p>
      <ul>
        <li>Roots, grease, scale and other deposits visible inside the pipe</li>
        <li>Cracks, offset or separated joints and visible surface damage</li>
        <li>Standing water, and the places where other lines join the pipe</li>
        <li>Any part of the line the camera could not view</li>
      </ul>
      <p>
        You receive the inspection video and written findings. A camera generally cannot see under
        the waterline, so a line that is blocked and not draining may need cleaning first.
      </p>

      <h2>The City&rsquo;s plumber evaluates for the program; your footage is your own</h2>
      <p>
        The City says its contracted plumber does a cable and camera evaluation and that the City
        Engineer reviews the video report. Applying takes a $300 deposit (the City&rsquo;s term),
        which the City keeps for the plumber&rsquo;s inspection and clerical costs if the
        application is denied. Hairline cracks and a line that is open and serviceable are among its
        listed reasons to deny.
      </p>
      <p>
        Our inspection does not replace the City&rsquo;s evaluation, and we make no claim that the
        City accepts an outside report. What it gives you is your own recording of where along the
        line a problem sits, and whether it looks like a defect or a blockage cleaning could clear,
        before you pay. The City&rsquo;s crew performs approved repairs. The Sewer Pros does not.
      </p>

      <h2>
        Buying in Florissant: sold &ldquo;as is&rdquo;, and the occupancy page is silent on sewers
      </h2>
      <p>
        The City says a property can be sold &ldquo;as is&rdquo; without a City inspection, and the
        buyer must then obtain and pay for the inspection and an occupancy permit before anyone
        moves in. The occupancy page we reviewed does not mention sewers, so a buyer who wants
        evidence of the lateral has to ask for it. The City also says the program is not meant to
        satisfy a home sale contingency, and a pending sale does not move a repair up its list.
        Findings are informational, not legal advice.
      </p>
    </>
  ),
  problems: [
    ...problems.map((p, i) => ({ ...p, image: slots.problems[i] })),
    {
      title: 'Before you pay the City’s deposit',
      description:
        'The City keeps its $300 deposit if an application is denied, and lists hairline cracks and an open, serviceable line among its reasons. A recorded inspection shows what is in the line, and we do not perform repairs, so the video is a record to compare against any estimate.',
      image: slots.problems[3],
    },
  ],
  // Six items: renders as two rows of three.
  inclusions,
  process,
  coverage: {
    title: 'Other St. Louis area locations',
    intro:
      'This page covers Florissant. Each St. Louis municipality has its own sewer rules and lateral program, so use the page for your address.',
    pageIds: [
      id('loc-stl-st-louis-city'),
      id('loc-stl-chesterfield'),
      id('loc-stl-ballwin'),
      id('loc-stl-st-charles'),
    ],
    availabilityStatement: 'Florissant is a service area, not an office location.',
  },
  // All relevant questions from the Florissant location page and the camera
  // service page (see `faq` above).
  faq,
  relatedPageIds: [
    id('loc-stl-florissant'),
    id('svc-sewer-camera-inspection'),
    id('svc-pre-purchase-sewer-inspection'),
    id('svc-sewer-line-locating'),
  ],
  relatedTitle: 'Related pages',
  cta: {
    title: 'Schedule a sewer camera inspection in Florissant',
    body: 'Get the condition of your lateral on video, with written findings.',
  },
}
