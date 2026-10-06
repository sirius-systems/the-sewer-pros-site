/**
 * Mission Valley, San Diego, CA + Sewer Camera Inspection
 * (`sl-mission-valley-camera`).
 *
 * Authority: CLAUDE.md sections 9, 22, 24; docs/14-content-specification.md.
 * Built from exactly two sources, as `sl-lv-city-camera` is:
 *   LOCAL    `sanDiegoMissionValleyContent` (`loc-sd-mission-valley`)
 *   SERVICE  `svc-sewer-camera-inspection` v2 content (content/pages/services.tsx)
 *            and the shared camera blocks in `./service-location-shared`
 * Nothing here is new research.
 *
 * Section recipe (each section ties a Mission Valley fact to what the camera does
 * or cannot do; swap the location or the service and the copy breaks):
 *   1. Lateral past the lot line - owner maintains to the City main (street,
 *                                  easement, canyon); no separate MV utility
 *                                  found; the City has no diagrams of private
 *                                  lines; footage is distance, not a boundary.
 *   2. Kitchen grease            - the City's grease naming and FEWD permit vs.
 *                                  what a camera records on the pipe wall.
 *   3. Many fixtures, one lateral - multi-tenant failure reach; the 1958
 *                                  development date says nothing about a lateral.
 *   4. Buying, remodeling, leasing - City buyer advice, no point-of-sale rule
 *                                  found, FEWD plan review, permit gap.
 *
 * Mission Valley is a City of San Diego planning area: only facts the Mission
 * Valley location page states are used. No housing-age section exists there.
 *
 * ⚠ CITY NUMBERS ARE THE CITY'S, not ours. No company phone is repeated here.
 * No price, offer, response time, guarantee, emergency or same-day claim,
 * equipment spec or Mission Valley office. Repair and replacement are never
 * presented as offered.
 */

import type { PageId, ProcessContent, ServiceLocationPageContent } from '@/types'
import { sanDiegoMissionValleyContent } from './san-diego-mission-valley'
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
  throw new Error('sl-sd-mission-valley-camera: shared camera inspection blocks are missing')
}

const v2 = serviceContent[id('svc-sewer-camera-inspection')]?.v2
if (v2 === undefined || sanDiegoMissionValleyContent.faq === undefined) {
  throw new Error('sl-sd-mission-valley-camera: source service v2 or location FAQ is missing')
}

const slots = pageImageSlots('sl-mission-valley-camera', {
  hero: {
    alt: 'Technician feeding a sewer camera into a cleanout beside a building',
    shot: 'Technician feeding a camera into a cleanout at a commercial or mixed-use building, monitor in frame, no identifiable address',
  },
  problems: [shots[0], shots[1], shots[2], shots[3]] as const,
})

const process: ProcessContent[] = (v2.process?.steps ?? []).map((step) => ({
  title: step.title,
  description: typeof step.description === 'string' ? step.description : undefined,
}))

/**
 * Every question from the Mission Valley location page and the camera service
 * page, minus one: the service page's "Which areas does The Sewer Pros serve?"
 * (this page IS an area page). The service page's cost question (DEC-088
 * wording) is carried as published.
 */
const faq = mergeRelevantFaqs(
  sanDiegoMissionValleyContent.faq,
  v2.faq,
  [
    // This page IS an area page; the question is the hub's.
    'Which areas does The Sewer Pros serve?',
  ],
  'In Mission Valley',
)

export const missionValleyCameraContent: ServiceLocationPageContent = {
  seoTitle: 'Sewer Camera Inspection in Mission Valley, San Diego',
  metaDescription:
    'Sewer camera inspection in Mission Valley, San Diego. The City says owners maintain the lateral to its main. See what a camera records on yours.',
  serviceDescription:
    'A sewer camera inspection is a visual inspection of the accessible inside of a sewer line, recorded on video, for properties in Mission Valley, San Diego, California.',
  heroImage: slots.hero,
  ctaImage: slots.cta,
  sources: sanDiegoMissionValleyContent.sources,
  hero: {
    eyebrow: 'Mission Valley, San Diego',
    title: 'Sewer Camera Inspection in Mission Valley',
    intro: (
      <p>
        Mission Valley is a City of San Diego planning area, and the City says the property owner
        maintains the sewer lateral all the way to its connection with the City sewer main. A camera
        inspection records what is inside that line, on video, before you clean it, remodel, lease,
        buy or approve work.
      </p>
    ),
  },
  body: (
    <>
      <h2>A lateral you maintain past your lot line</h2>
      <p>
        The City of San Diego runs the public sewer in Mission Valley, and its guidance says the
        owner maintains the lateral from the building to the City main, even when that connection is
        in the street, beyond the property line, in an easement or in a canyon. We did not find a
        separate Mission Valley sewer utility. A particular parcel can still be an exception, so
        confirm with Public Utilities.
      </p>
      <p>
        The camera shows what is in the line. The footage records where along the line a condition
        sits, measured from where the camera entered. It does not establish where a property line or
        the connection is, and the City says it has no diagrams of where private lines run on the
        property. For where a lateral connects, Development Services can help at 619-446-5300 (the
        City&rsquo;s number, not ours).
      </p>

      <h2>Kitchen grease on camera, and the City&rsquo;s permit program</h2>
      <p>
        The City names grease, along with roots, as a leading cause of sewer spills, and says every
        food service establishment in the City must hold a permit from its Food Establishment
        Wastewater Discharge (FEWD) program, which ensures the facility installs equipment to trap
        grease before it enters the sewer.
      </p>
      <ul>
        <li>Grease and other deposits visible on the pipe wall</li>
        <li>Roots, cracks, offset or separated joints</li>
        <li>Standing water, and the places where other lines join the pipe</li>
        <li>Any part of the line the camera could not view</li>
      </ul>
      <p>
        A camera does not show whether grease-removal equipment meets the City&rsquo;s requirements,
        and we make no claim that our work satisfies any FEWD requirement. For plan checks, call
        858-654-4188 (the City&rsquo;s number).
      </p>

      <h2>Many fixtures on one lateral</h2>
      <p>
        The City describes Mission Valley as a regional center of offices, hotels, retail and a
        growing residential community. A multi-tenant building feeds many fixtures into one lateral,
        so one failure can reach every tenant at once. That is a reason to look at the line before a
        problem forces the question.
      </p>
      <p>
        The City says major development began in 1958, but a development date does not tell you the
        age or material of any one lateral, and the City pages we reviewed do not say how old the
        pipes are. Only an inspection of your line can.
      </p>

      <h2>Buying, remodeling or leasing: what the camera adds</h2>
      <p>
        For homes, the City advises buyers to get a licensed-plumber report on the condition of the
        lateral connection in addition to a home inspection. That is City guidance, not a
        requirement, and we did not find a City sewer-lateral inspection rule at sale. That is none
        found, not a confirmed absence.
      </p>
      <p>
        A new restaurant, remodel or retrofit needs a FEWD plan review before construction, and we
        found no City page on whether work confined to private property needs a permit. Ask
        Development Services at 619-446-5242 (the City&rsquo;s number). A recording is evidence you
        bring to those conversations, not an approval.
      </p>
    </>
  ),
  problems: [
    ...problems.map((p, i) => ({ ...p, image: slots.problems[i] })),
    {
      title: 'Grease or a shared lateral on an occupied site',
      description:
        "A kitchen sends grease down its line every day, and a multi-tenant building feeds many fixtures into one lateral. A recorded inspection shows the line's condition, not whether grease equipment meets the City's FEWD rules.",
      image: slots.problems[3],
    },
  ],
  // Six items: renders as two rows of three.
  inclusions,
  process,
  coverage: {
    title: 'Other San Diego area locations',
    intro:
      'This page covers the Mission Valley planning area. Sewer agencies and lateral rules differ across San Diego County, so use the page for your address.',
    pageIds: [
      id('loc-sd-san-diego'),
      id('loc-sd-san-marcos'),
      id('loc-sd-carlsbad'),
      id('loc-sd-escondido'),
      id('loc-sd-oceanside'),
      id('loc-sd-chula-vista'),
    ],
    availabilityStatement: 'Mission Valley is a service area, not an office location.',
  },
  // All relevant questions from the Mission Valley location page and the camera
  // service page (see `faq` above).
  faq,
  relatedPageIds: [
    id('loc-sd-mission-valley'),
    id('svc-sewer-camera-inspection'),
    id('svc-pre-purchase-sewer-inspection'),
    id('svc-sewer-line-locating'),
  ],
  relatedTitle: 'Related pages',
  cta: {
    title: 'Schedule a sewer camera inspection in Mission Valley',
    body: 'Get the condition of your lateral on video, with written findings.',
  },
}
