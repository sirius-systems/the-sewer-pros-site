/**
 * Oceanside, CA + Sewer Camera Inspection (`sl-oceanside-camera`).
 *
 * Authority: CLAUDE.md §9, §22, §24; docs/14-content-specification.md §43, §79.
 * Built from exactly two sources, as `sl-sd-mission-valley-camera` is:
 *   LOCAL    `oceansideContent` (`loc-sd-oceanside`)
 *   SERVICE  `svc-sewer-camera-inspection` v2 content (content/pages/services.tsx)
 *            and the shared camera blocks in `./service-location-shared`
 * Nothing here is new research.
 *
 * Section recipe (each section ties an Oceanside fact to what the camera does
 * or cannot do; swap the location or the service and the copy breaks):
 *   1. "From the street to your house" - the City's wording; the connection
 *      point is unpublished; footage is distance, not a boundary.
 *   2. A leak means a plumber - the City's number; no sewer backup line; what a
 *      camera records and cannot see under water.
 *   3. Housing age - 1984 median and decade shares; year built does not tell a
 *      lateral's condition.
 *   4. No program found - improvement plans, permits, none found; no sale rule.
 *
 * ⚠ OCEANSIDE HAS ONE SEWER AGENCY (the City). CITY NUMBERS ARE THE CITY'S, not
 * ours. No company phone, price, offer, response time, guarantee, emergency or
 * same-day claim, equipment spec or office. Repair and replacement are never
 * presented as offered. The City's pages carry no date: say "confirm with the
 * City", never a date.
 */

import type { PageId, ProcessContent, ServiceLocationPageContent } from '@/types'
import { oceansideContent } from './san-diego-oceanside'
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
  throw new Error('sl-sd-oceanside-camera: shared camera inspection blocks are missing')
}

const v2 = serviceContent[id('svc-sewer-camera-inspection')]?.v2
if (v2 === undefined || oceansideContent.faq === undefined) {
  throw new Error('sl-sd-oceanside-camera: source service v2 or location FAQ is missing')
}

const slots = pageImageSlots('sl-oceanside-camera', {
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
 * Every question from the Oceanside location page and the camera service page,
 * minus one: the service page's "Which areas does The Sewer Pros serve?" (this
 * page IS an area page). The service page's cost question (DEC-088 wording) is
 * carried as published.
 */
const faq = mergeRelevantFaqs(
  oceansideContent.faq,
  v2.faq,
  [
    // This page IS an area page; the question is the hub's.
    'Which areas does The Sewer Pros serve?',
  ],
  'In Oceanside',
)

export const oceansideCameraContent: ServiceLocationPageContent = {
  seoTitle: 'Sewer Camera Inspection in Oceanside, CA',
  metaDescription:
    'Sewer camera inspection in Oceanside, CA. The City says private lines run from the street to your house. See what a camera records on yours.',
  serviceDescription:
    'A sewer camera inspection is a visual inspection of the accessible inside of a sewer line, recorded on video, for properties in Oceanside, California.',
  heroImage: slots.hero,
  ctaImage: slots.cta,
  sources: oceansideContent.sources,
  hero: {
    eyebrow: 'Oceanside, CA',
    title: 'Sewer Camera Inspection in Oceanside',
    intro: (
      <p>
        In Oceanside, the City says private sewer lines, “from the street to your house,” are the
        property owner’s responsibility, and we did not find where the City’s part ends. A camera
        inspection records what is inside the accessible private line on video, so you can see its
        condition before you clean it, buy a home or approve work.
      </p>
    ),
  },
  body: (
    <>
      <h2>
        “From the street to your house” is the City’s wording, and the camera does not find the end
      </h2>
      <p>
        The City of Oceanside Water Utilities Department runs the public sewer system, and it says
        private sewer lines, “from the street to your house,” are the property owner’s
        responsibility. We did not find a City statement of the exact point where its part ends, or
        of whether the owner’s part includes the section under the street.
      </p>
      <p>
        A camera records the visible inside of the accessible line, and the footage records where
        along the line a condition sits, measured from where the camera entered. It does not
        establish where a property line, the connection to the City’s main or the City’s
        responsibility begins, so ask Water Utilities before you assign cost.
      </p>

      <h2>For a leak the City says call a plumber, and a camera shows what is in the line</h2>
      <p>
        For a sewer leak on your property, the City says to call a plumber. Its customer service
        number is (760) 435-5800 (the City’s number, not ours), and we did not find a sewer-specific
        backup or overflow instruction from the City. If a plumber or the City points to your
        lateral, or you want proof of its condition, a camera inspection can show what is in it.
      </p>
      <p>
        It may document roots, deposits, cracks, offset or separated joints and standing water in
        the section it reaches. It cannot see under water, so a line that is blocked and not
        draining may need cleaning first.
      </p>

      <h2>A 1984 median year built does not tell you the condition of your lateral</h2>
      <p>
        Oceanside’s median year built is 1984, plus or minus 2 years, according to the U.S. Census
        Bureau’s American Community Survey (2020-2024 5-year estimates, Oceanside city). Our
        arithmetic on the Census rows puts 16.9 percent of housing units before 1970, 48.6 percent
        from 1970 to 1989 and 34.5 percent in 1990 or later.
      </p>
      <p>
        A lateral can be repaired, rerouted or replaced after the house is built, and two houses
        from the same decade can have lines in very different shape. Only an inspection of your line
        can show what is there. The Census place may also not match the area the City’s sewer system
        serves.
      </p>

      <h2>No City repair program found, and approvals to ask about before any work</h2>
      <p>
        We found no City lateral repair, replacement, grant or reimbursement program (“none found”,
        not a statement that none exists, and the City’s pages carry no current date). The City says
        sewer improvements in a public right-of-way, a City easement or City property need an
        improvement plan approved by Water Utilities and signed by a Registered Civil Engineer, and
        that improvements on private property may trigger a permit.
      </p>
      <p>
        A recording is evidence you bring to those conversations. It is not an approval, and it does
        not tell you which approvals apply. We also found no City rule requiring a sewer inspection
        when a home is sold, so a buyer who wants the line’s condition has to ask for one. The Sewer
        Pros does not perform repairs or replacements.
      </p>
    </>
  ),
  problems: [
    ...problems.map((p, i) => ({ ...p, image: slots.problems[i] })),
    {
      title: 'A line the City says is yours, with no published end point',
      description:
        'The City says private sewer lines run “from the street to your house” and does not publish where its part ends. A recorded inspection shows the line’s condition and where along it a condition sits. It does not show where the City’s part begins.',
      image: slots.problems[3],
    },
  ],
  // Six items: renders as two rows of three.
  inclusions,
  process,
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
  // All relevant questions from the Oceanside location page and the camera
  // service page (see `faq` above).
  faq,
  relatedPageIds: [
    id('loc-sd-oceanside'),
    id('svc-sewer-camera-inspection'),
    id('svc-pre-purchase-sewer-inspection'),
    id('svc-sewer-line-locating'),
  ],
  relatedTitle: 'Related pages',
  cta: {
    title: 'Schedule a sewer camera inspection in Oceanside',
    body: 'Get the condition of your lateral on video, with written findings.',
  },
}
