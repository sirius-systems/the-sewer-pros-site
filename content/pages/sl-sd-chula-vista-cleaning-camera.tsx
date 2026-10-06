/**
 * Chula Vista, CA + Sewer Cleaning & Camera Inspection
 * (`sl-chula-vista-cleaning-camera`).
 *
 * Authority: CLAUDE.md §9, §22, §24; docs/14-content-specification.md §43, §79.
 * Built from exactly two sources, as `sl-sd-city-cleaning-camera` is:
 *   LOCAL    `chulaVistaContent` (`loc-sd-chula-vista`)
 *   SERVICE  `svc-sewer-cleaning-camera-inspection` v2 content
 *            (content/pages/services.tsx) and `./sl-blocks/...`
 * Nothing here is new research.
 *
 * Section recipe (each section ties a Chula Vista fact to what a visit does):
 *   1. The first foot       - the policy starts the owner's lateral at the first
 *                             foot; footage records distance from the entry point,
 *                             not the connection point or a property line.
 *   2. A line that flows    - City: grease, roots through cracks, annual rule of
 *                             thumb; the City's own camera goal covers its public
 *                             sewer; camera cannot see under water.
 *   3. The 48-hour exception - licensed plumber's camera finding; street-tree
 *                             proof; footage is your own evidence, no claim the
 *                             City accepts it.
 *   4. Not a repair         - no grant found, permit before repair, we do not
 *                             repair; company phone.
 *
 * ⚠ POLICY, NOT A GRANT. CITY NUMBERS ARE THE CITY'S. The company phone is read
 * from `marketOperatingDetail`. No price, offer, response time, guarantee,
 * emergency or same-day claim, equipment spec or office.
 */

import { marketOperatingDetail } from '@/data/markets/markets'
import type { PageId, ProcessContent, ServiceLocationPageContent } from '@/types'
import { chulaVistaContent } from './san-diego-chula-vista'
import { serviceContent } from './services'
import { mergeRelevantFaqs, pageImageSlots } from './service-location-shared'
import { inclusions, problems, shots } from './sl-blocks/sewer-cleaning-camera-inspection'

const id = (value: string): PageId => value as PageId

const sd = marketOperatingDetail['san-diego-ca']
if (sd === undefined) throw new Error('marketOperatingDetail is missing san-diego-ca')

const slots = pageImageSlots('sl-chula-vista-cleaning-camera', {
  hero: {
    alt: 'Technician reviewing camera footage on a monitor after a cleaning',
    shot: 'Monitor showing a cleaned pipe with crew behind, residential property, no identifiable address',
  },
  problems: [shots[0], shots[1], shots[2], shots[3]] as const,
})

const v2 = serviceContent[id('svc-sewer-cleaning-camera-inspection')]?.v2
if (v2 === undefined || chulaVistaContent.faq === undefined) {
  throw new Error('sl-sd-chula-vista-cleaning-camera: source content is missing')
}

const process: ProcessContent[] = (v2.process?.steps ?? []).map((step) => ({
  title: step.title,
  description: typeof step.description === 'string' ? step.description : undefined,
}))

const CAMERA_SHOWS = 'What does a sewer camera inspection show?'

/**
 * Every question from the Chula Vista location page and the service page. The
 * location page's "What does a sewer camera inspection show?" is left out
 * because the service page asks the same question with the fuller answer (it
 * includes what a camera does not show); filtering it keeps the service answer.
 */
const faq = mergeRelevantFaqs(
  chulaVistaContent.faq.filter((f) => f.question !== CAMERA_SHOWS),
  v2.faq,
  [],
  'In Chula Vista',
)

export const chulaVistaCleaningCameraContent: ServiceLocationPageContent = {
  seoTitle: 'Sewer Cleaning & Camera Inspection in Chula Vista, CA',
  metaDescription:
    'Sewer cleaning and camera inspection in Chula Vista, CA. The City’s policy starts your lateral at the first foot off its sewer. See what a visit covers.',
  serviceDescription:
    'Sewer cleaning removes material that restricts flow in an accessible sewer line, and a camera inspection records its visible inside on video. The two can be combined in one visit, for properties in the City of Chula Vista, California.',
  heroImage: slots.hero,
  ctaImage: slots.cta,
  sources: chulaVistaContent.sources,
  hero: {
    eyebrow: 'Chula Vista, CA',
    title: 'Sewer Cleaning and Camera Inspection in Chula Vista',
    intro: (
      <p>
        In Chula Vista, the City’s Council policy puts the sewer lateral on the owner from the first
        foot off the public sewer to the building. A cleaning and camera visit works on the private
        side of that line: it clears what can be cleared in the accessible line, and a camera may
        record the line before cleaning, after it, or both, so you can see what the cleaning
        changed.
      </p>
    ),
  },
  body: (
    <>
      <h2>Footage shows where along the line, not where the first foot is</h2>
      <p>
        Council Policy 570-01 defines the connection point as the first foot of the lateral off the
        outside of the public sewer, and puts the lateral from there to the building on the owner.
        For permits, the City splits the same line into a sewer lateral, from the main to the
        property line, and a building sewer, from the property line to the house.
      </p>
      <p>
        The camera footage records where along the line a condition sits, measured from where the
        camera entered. It does not establish where the connection point or a property line is.
        Cleaning clears a restriction. It does not tell you which side of the first foot the
        restriction was on.
      </p>

      <h2>A line that flows again is not proof, and the City’s camera goal is for its own pipe</h2>
      <p>
        The City says grease is the most common cause of pipe blockages, that roots enter a lateral
        through cracked or broken pipe, and that a rule of thumb is to have a lateral maintained
        annually. It lists goals of cleaning its sewer lines once a year and inspecting an average
        of 47 miles per year with cameras. That covers the public sewer, not your lateral.
      </p>
      <p>
        A camera may be used before cleaning, after it, or both. If the line is blocked and full of
        water, the camera cannot see under the water, so cleaning may need to come first. A line
        that flows again, or a clear video, is not proof that the whole line is sound.
      </p>

      <h2>If a stoppage is in the public sewer, the footage is your own record</h2>
      <p>
        The policy’s one exception asks a licensed plumber’s camera finding of a stoppage in the
        public sewer, in the first foot of the lateral, or caused by a City street tree. The owner
        notifies the City within 48 hours, and the City reimburses reasonable costs if staff agree.
        A camera shows roots visible inside the pipe, not the root system outside it.
      </p>
      <p>
        What you receive is your own evidence: the inspection video when a camera is used, and
        written findings that note any part of the line the camera could not view. We make no claim
        that the City accepts an outside report or that our work satisfies any City condition. Ask
        Public Works at (619) 397-6000 what it accepts (the City’s number, not ours).
      </p>

      <h2>No lateral grant found, and a permit before any repair</h2>
      <p>
        We did not find a City lateral repair, replacement or grant program, and the reimbursement
        in the policy covers locating and clearing qualifying stoppages only. The City says repair
        or replacement of a lateral needs a City permit before work begins. If a returning clog
        leads to a repair estimate, the findings are what you compare it against.
      </p>
      <p>We do not perform repairs or replacements. To reach The Sewer Pros, call {sd.phone}.</p>
    </>
  ),
  problems: [
    ...problems.map((p, i) => ({ ...p, image: slots.problems[i] })),
    {
      title: 'A clog that may sit in the first foot of the lateral',
      description:
        'The City’s policy treats the first foot off the public sewer differently from the rest of the lateral. Footage records distance from where the camera entered, not where that first foot is. Ask Public Works what it accepts (the City’s number, not ours).',
      image: slots.problems[3],
    },
  ],
  // Six items: renders as two rows of three.
  inclusions,
  process,
  coverage: {
    title: 'Other San Diego area locations',
    intro:
      'This page covers the City of Chula Vista. Sewer agencies and lateral rules differ across San Diego County, so use the page for your address.',
    pageIds: [
      id('loc-sd-san-diego'),
      id('loc-sd-san-marcos'),
      id('loc-sd-carlsbad'),
      id('loc-sd-escondido'),
      id('loc-sd-oceanside'),
      id('loc-sd-mission-valley'),
    ],
    availabilityStatement: 'Chula Vista is a service area, not an office location.',
  },
  // All relevant questions from the Chula Vista location page and the service
  // page (see `faq` above).
  faq,
  relatedPageIds: [
    id('loc-sd-chula-vista'),
    id('svc-sewer-cleaning-camera-inspection'),
    id('svc-sewer-camera-inspection'),
    id('svc-sewer-cleaning'),
  ],
  relatedTitle: 'Related pages',
  cta: {
    title: 'Request sewer cleaning and camera inspection in Chula Vista',
    body: 'Clear the line and see what the cleaning changed, with video and written findings when a camera is used.',
  },
}
