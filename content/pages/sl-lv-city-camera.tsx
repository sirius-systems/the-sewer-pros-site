/**
 * City of Las Vegas, NV + Sewer Camera Inspection (`sl-lv-city-camera`).
 *
 * Built from exactly two sources, as the Henderson pages are:
 *   LOCATION  `lasVegasCityContent`  (content/pages/las-vegas-las-vegas.tsx)
 *   SERVICE   `svc-sewer-camera-inspection` v2 content (content/pages/services.tsx)
 *             and the shared camera blocks in `./service-location-shared`
 *
 * Section recipe (each ties a City of Las Vegas fact to what THIS service does
 * or cannot do; swap the city or the service and the copy breaks):
 *   1. Responsibility - owners maintain the private lateral up to the City main,
 *                       including any part in the public right-of-way (addenda);
 *                       "none found" City repair program.
 *   2. What the camera records - the footage's distance count, and what it does
 *                       not establish (connection point, where responsibility ends).
 *   3. Housing age    - ACS figures (median 1994) vs. what year built cannot tell.
 *   4. City main or your lateral - the City's two contacts and where a
 *                       recording fits; no permit statement found.
 *
 * ⚠ CITY NUMBERS ARE THE CITY'S, not ours. No company phone is repeated here.
 * No price, offer, response time, guarantee, emergency or same-day claim.
 * Las Vegas is a service area, not an office. Repair and replacement are never
 * presented as offered.
 */

import type { PageId, ProcessContent, ServiceLocationPageContent } from '@/types'
import { lasVegasCityContent } from './las-vegas-las-vegas'
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
  throw new Error('sl-lv-city-camera: shared camera inspection blocks are missing')
}

const v2 = serviceContent[id('svc-sewer-camera-inspection')]?.v2
if (v2 === undefined || lasVegasCityContent.faq === undefined) {
  throw new Error('sl-lv-city-camera: source service v2 or location FAQ is missing')
}

const slots = pageImageSlots('sl-lv-city-camera', {
  hero: {
    alt: 'Technician feeding a sewer camera into a cleanout at a Las Vegas home',
    shot: 'Technician feeding a camera into a residential cleanout, monitor in frame, no identifiable address',
  },
  problems: [shots[0], shots[1], shots[2], shots[3]] as const,
})

const process: ProcessContent[] = (v2.process?.steps ?? []).map((step) => ({
  title: step.title,
  description: typeof step.description === 'string' ? step.description : undefined,
}))

/**
 * Every question from the City of Las Vegas location page and the camera
 * service page, minus two: the location page's "What does a sewer camera
 * inspection show?" (the service page answers it in full) and the service
 * page's "Which areas does The Sewer Pros serve?" (this page IS an area page).
 * The service page's cost question (DEC-088 wording) is carried as published.
 */
const faq = mergeRelevantFaqs(
  lasVegasCityContent.faq,
  v2.faq,
  [
    // The service page answers it in full ("What can a sewer camera inspection show?").
    'What does a sewer camera inspection show?',
    // This page IS an area page; the question is the hub's.
    'Which areas does The Sewer Pros serve?',
  ],
  'In Las Vegas',
)

export const lasVegasCityCameraContent: ServiceLocationPageContent = {
  seoTitle: 'Sewer Camera Inspection in Las Vegas, NV',
  metaDescription:
    'Sewer camera inspection in Las Vegas, NV. The City says owners maintain the private lateral up to its main. See what a camera records on yours.',
  serviceDescription:
    'A sewer camera inspection is a visual inspection of the accessible inside of a sewer line, recorded on video, for properties in the City of Las Vegas, Nevada.',
  heroImage: slots.hero,
  ctaImage: slots.cta,
  sources: lasVegasCityContent.sources,
  hero: {
    eyebrow: 'Las Vegas, NV',
    title: 'Sewer Camera Inspection in Las Vegas',
    intro: (
      <p>
        In the City of Las Vegas, the City says the owner maintains the private sewer lateral up to
        the point where it connects into the City&rsquo;s main, and its sewer standards addenda say
        that includes any part in the public right-of-way. A camera inspection records what is
        inside that line, on video, before you clean it, buy the home, or approve work.
      </p>
    ),
  },
  body: (
    <>
      <h2>Your lateral can run under the street</h2>
      <p>
        The City of Las Vegas says private property owners maintain private sewer laterals that
        originate on their property, up to the point where the lateral connects into the City sewer
        main. Its sewer standards addenda go further: a private sewer stays private, even the
        portion in the public right-of-way, until that connection.
      </p>
      <p>
        That is why the camera matters here. A line that is yours beyond your property line is a
        line you need evidence about, and we found no City lateral repair, grant or reimbursement
        program on the City pages we reviewed. That is &ldquo;none found&rdquo;, not a statement
        that none exists.
      </p>

      <h2>What the camera records on a Las Vegas lateral</h2>
      <ul>
        <li>Roots, grease, scale and other deposits visible inside the pipe</li>
        <li>Cracks, offset or separated joints and visible surface damage</li>
        <li>Standing water, and the places where other lines join the pipe</li>
        <li>Any part of the line the camera could not view</li>
      </ul>
      <p>
        You receive the inspection video and written findings. The footage records where along the
        line a condition sits, measured from where the camera entered. It does not establish where
        the connection to the City main is, or where the owner&rsquo;s responsibility ends, and a
        camera generally cannot see under the waterline.
      </p>

      <h2>A 1994 median year built does not describe your lateral</h2>
      <p>
        Las Vegas&rsquo;s median year built is 1994, according to the U.S. Census Bureau&rsquo;s
        American Community Survey (2020-2024 5-year estimates, Las Vegas city). The 1990s are the
        largest decade at 27.9 percent of housing units, and our arithmetic on the Census rows
        puts 61.3 percent at 1990 or later and 12.8 percent before 1970. A lateral can be
        repaired, rerouted or replaced after a house is built, so the year says little about what
        is in it. The Census place may also not match the area the City&rsquo;s sewer system
        serves. Only looking at your line can show what is there.
      </p>

      <h2>City main or your lateral: where an inspection fits</h2>
      <p>
        A stoppage in the City main can affect several upstream properties and overflow manholes.
        For that, the City asks you to call its Streets &amp; Sanitation Division at 702-229-6227
        (the City&rsquo;s number, not ours). For a problem specific to your property, the City says
        a contractor may need to investigate. Sanitary Sewer Engineering, at 702-229-6541 (also the
        City&rsquo;s number), handles requests for the nearest public sewer location and
        point-of-connection conditions.
      </p>
      <p>
        A camera inspection does not tell you which approvals apply, and we found no City statement
        on whether it needs a permit. It is what you bring to those conversations when the City or
        a contractor points to your lateral.
      </p>
    </>
  ),
  problems: [
    ...problems.map((p, i) => ({ ...p, image: slots.problems[i] })),
    {
      title: 'The City or a contractor points to your lateral',
      description:
        'For a problem specific to your property, the City says a contractor may need to investigate. A recorded inspection shows what is in the line, and because we do not perform repairs, the video is a record to compare against any estimate.',
      image: slots.problems[3],
    },
  ],
  // Six items: renders as two rows of three.
  inclusions,
  process,
  coverage: {
    title: 'Other Las Vegas Valley areas',
    intro:
      'This page covers the City of Las Vegas. Sewer agencies and lateral rules differ across the Las Vegas Valley, so use the page for your address.',
    pageIds: [id('loc-lv-henderson'), id('loc-lv-north-las-vegas'), id('loc-lv-summerlin')],
    availabilityStatement: 'Las Vegas is a service area, not an office location.',
  },
  // All relevant questions from the City of Las Vegas location page and the
  // camera service page (see `faq` above).
  faq,
  relatedPageIds: [
    id('loc-lv-las-vegas'),
    id('svc-sewer-camera-inspection'),
    id('svc-pre-purchase-sewer-inspection'),
    id('svc-sewer-line-locating'),
  ],
  relatedTitle: 'Related pages',
  cta: {
    title: 'Schedule a sewer camera inspection in Las Vegas',
    body: 'Get the condition of your lateral on video, with written findings.',
  },
}
