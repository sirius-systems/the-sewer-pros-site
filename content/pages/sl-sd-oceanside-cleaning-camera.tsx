/**
 * Oceanside, CA + Sewer Cleaning & Camera Inspection
 * (`sl-oceanside-cleaning-camera`).
 *
 * Authority: CLAUDE.md §9, §22, §24; docs/14-content-specification.md §43, §79.
 * Built from exactly two sources, as `sl-sd-chula-vista-cleaning-camera` is:
 *   LOCAL    `oceansideContent` (`loc-sd-oceanside`)
 *   SERVICE  `svc-sewer-cleaning-camera-inspection` v2 content
 *            (content/pages/services.tsx) and `./sl-blocks/...`
 * Nothing here is new research.
 *
 * Section recipe (each section ties an Oceanside fact to what a visit does):
 *   1. The unpublished end point - "from the street to your house"; footage
 *      records distance from the entry point, not the City's end; cleaning does
 *      not say which side a restriction was on.
 *   2. A line that flows - 1984 median; year built does not tell condition; a
 *      clear video is not proof.
 *   3. A leak means a plumber - City number; no sewer backup line; the camera
 *      after cleaning is your own record.
 *   4. Not a repair - none found; improvement plans; permits; we do not repair;
 *      company phone.
 *
 * ⚠ OCEANSIDE HAS ONE SEWER AGENCY (the City). CITY NUMBERS ARE THE CITY'S. The
 * company phone is read from `marketOperatingDetail`. No price, offer, response
 * time, guarantee, emergency or same-day claim, equipment spec or office.
 */

import { marketOperatingDetail } from '@/data/markets/markets'
import type { PageId, ProcessContent, ServiceLocationPageContent } from '@/types'
import { oceansideContent } from './san-diego-oceanside'
import { serviceContent } from './services'
import { mergeRelevantFaqs, pageImageSlots } from './service-location-shared'
import { inclusions, problems, shots } from './sl-blocks/sewer-cleaning-camera-inspection'

const id = (value: string): PageId => value as PageId

const sd = marketOperatingDetail['san-diego-ca']
if (sd === undefined) throw new Error('marketOperatingDetail is missing san-diego-ca')

const slots = pageImageSlots('sl-oceanside-cleaning-camera', {
  hero: {
    alt: 'Technician reviewing camera footage on a monitor after a cleaning',
    shot: 'Monitor showing a cleaned pipe with crew behind, residential property, no identifiable address',
  },
  problems: [shots[0], shots[1], shots[2], shots[3]] as const,
})

const v2 = serviceContent[id('svc-sewer-cleaning-camera-inspection')]?.v2
if (v2 === undefined || oceansideContent.faq === undefined) {
  throw new Error('sl-sd-oceanside-cleaning-camera: source content is missing')
}

const process: ProcessContent[] = (v2.process?.steps ?? []).map((step) => ({
  title: step.title,
  description: typeof step.description === 'string' ? step.description : undefined,
}))

const CAMERA_SHOWS = 'What does a sewer camera inspection show?'

/**
 * Every question from the Oceanside location page and the service page. The
 * location page's "What does a sewer camera inspection show?" is left out
 * because the service page asks the same question with the fuller answer (it
 * includes what a camera does not show); filtering it keeps the service answer.
 */
const faq = mergeRelevantFaqs(
  oceansideContent.faq.filter((f) => f.question !== CAMERA_SHOWS),
  v2.faq,
  [],
  'In Oceanside',
)

export const oceansideCleaningCameraContent: ServiceLocationPageContent = {
  seoTitle: 'Sewer Cleaning & Camera Inspection in Oceanside, CA',
  metaDescription:
    'Sewer cleaning and camera inspection in Oceanside, CA. The City says private lines run from the street to your house. See what a visit covers.',
  serviceDescription:
    'Sewer cleaning removes material that restricts flow in an accessible sewer line, and a camera inspection records its visible inside on video. The two can be combined in one visit, for properties in the City of Oceanside, California.',
  heroImage: slots.hero,
  ctaImage: slots.cta,
  sources: oceansideContent.sources,
  hero: {
    eyebrow: 'Oceanside, CA',
    title: 'Sewer Cleaning and Camera Inspection in Oceanside',
    intro: (
      <p>
        In Oceanside, the City says private sewer lines, “from the street to your house,” are the
        property owner’s responsibility, and we did not find where the City’s part ends. A cleaning
        and camera visit works on the private side: it clears what can be cleared in the accessible
        line, and a camera may record the line before cleaning, after it, or both, so you can see
        what the cleaning changed.
      </p>
    ),
  },
  body: (
    <>
      <h2>Footage shows where along the line, not where the City’s part ends</h2>
      <p>
        The City of Oceanside Water Utilities Department runs the public sewer system, and it says
        private sewer lines, “from the street to your house,” are the property owner’s
        responsibility. We did not find a City statement of the exact point where its part ends, or
        of whether the owner’s part includes the section under the street.
      </p>
      <p>
        The camera footage records where along the line a condition sits, measured from where the
        camera entered. It does not establish where the connection to the City’s main is. Cleaning
        clears a restriction. It does not tell you which side of the City’s end the restriction was
        on, so ask Water Utilities before you assign cost.
      </p>

      <h2>A line that flows again is not proof, and a 1984 median year built does not say why</h2>
      <p>
        Oceanside’s median year built is 1984, plus or minus 2 years, according to the U.S. Census
        Bureau’s American Community Survey (2020-2024 5-year estimates, Oceanside city). Our
        arithmetic on the Census rows puts 16.9 percent of housing units before 1970, 48.6 percent
        from 1970 to 1989 and 34.5 percent in 1990 or later.
      </p>
      <p>
        Year built does not tell you the condition or material of a lateral, which can be repaired,
        rerouted or replaced after the house is built. A line that flows again, or a clear video, is
        not proof that the whole line is sound. If the line is blocked and full of water, the camera
        cannot see under the water, so cleaning may need to come first.
      </p>

      <h2>For a leak the City says call a plumber, and the footage is your own record</h2>
      <p>
        For a sewer leak on your property, the City says to call a plumber. Its customer service
        number is (760) 435-5800 (the City’s number, not ours), and we did not find a sewer-specific
        backup or overflow instruction from the City. If sewage is actively backing up into your
        home, contact us to discuss the situation.
      </p>
      <p>
        What you receive is your own evidence: the inspection video when a camera is used, and
        written findings that note any part of the line the camera could not view. We make no claim
        that the City accepts an outside report or that our work satisfies any City condition.
      </p>

      <h2>No City program found, and approvals to ask about before any repair</h2>
      <p>
        We found no City lateral repair, replacement, grant or reimbursement program (“none found”,
        not a statement that none exists, and the City’s pages carry no current date). The City says
        sewer improvements in a public right-of-way, a City easement or City property need an
        improvement plan approved by Water Utilities, and that private-property improvements may
        trigger a permit. We did not find a published rule that covers every repair of an existing
        lateral.
      </p>
      <p>
        If a returning clog leads to a repair estimate, the findings are what you compare it
        against. We do not perform repairs or replacements. To reach The Sewer Pros, call {sd.phone}
        .
      </p>
    </>
  ),
  problems: [
    ...problems.map((p, i) => ({ ...p, image: slots.problems[i] })),
    {
      title: 'A clog on a line the City says is yours, end point unpublished',
      description:
        'The City says private sewer lines run “from the street to your house” and does not publish where its part ends. Footage records distance from where the camera entered, not where the City’s part begins. Ask Water Utilities (the City’s number, not ours).',
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
  // All relevant questions from the Oceanside location page and the service
  // page (see `faq` above).
  faq,
  relatedPageIds: [
    id('loc-sd-oceanside'),
    id('svc-sewer-cleaning-camera-inspection'),
    id('svc-sewer-camera-inspection'),
    id('svc-sewer-cleaning'),
  ],
  relatedTitle: 'Related pages',
  cta: {
    title: 'Request sewer cleaning and camera inspection in Oceanside',
    body: 'Clear the line and see what the cleaning changed, with video and written findings when a camera is used.',
  },
}
