/**
 * Escondido, CA + Sewer Cleaning & Camera Inspection
 * (`sl-escondido-cleaning-camera`).
 *
 * Authority: CLAUDE.md sections 9, 22, 24; docs/14-content-specification.md.
 * Built from exactly two sources, as `sl-sd-san-marcos-cleaning-camera` is:
 *   LOCAL    `escondidoContent` (`loc-sd-escondido`)
 *   SERVICE  `svc-sewer-cleaning-camera-inspection` v2 content
 *            (content/pages/services.tsx) and `./sl-blocks/...`
 * Nothing here is new research. Stays consistent with `sl-escondido-cleaning`
 * on section 22-165, the call-the-City-first guidance and the owner-cost wording.
 *
 * Section recipe (each section ties an Escondido fact to what a visit does):
 *   1. Call the City first   - SSMP guidance; a camera after cleaning shows what
 *                              changed and what remains
 *   2. Costs and the connection - 22-165(a), (c), (e); footage is distance from
 *                              the entry point, not the connection; cleaning
 *                              does not say which side
 *   3. Cleaned and televised - 22-165(f) is the code's condition, not our claim;
 *                              City-present video for City-caused damage; camera
 *                              cannot see under water; clear video not proof
 *   4. No program found      - none found; 1981 median counts homes; no sale
 *                              rule found; we do not repair; phone
 *
 * ⚠ CITY NUMBERS ARE THE CITY'S. The code is quoted for at most nine words.
 * Company phone comes from `marketOperatingDetail['san-diego-ca']`. Never says
 * our visit satisfies the code or replaces the City-present inspection. No
 * price, offer, response time, emergency or same-day claim, guarantee,
 * equipment spec or office.
 */

import { marketOperatingDetail } from '@/data/markets/markets'
import type { PageId, ProcessContent, ServiceLocationPageContent } from '@/types'
import { escondidoContent } from './san-diego-escondido'
import { serviceContent } from './services'
import { mergeRelevantFaqs, pageImageSlots } from './service-location-shared'
import { inclusions, problems, shots } from './sl-blocks/sewer-cleaning-camera-inspection'

const id = (value: string): PageId => value as PageId

const sd = marketOperatingDetail['san-diego-ca']
if (sd === undefined) throw new Error('marketOperatingDetail is missing san-diego-ca')

const v2 = serviceContent[id('svc-sewer-cleaning-camera-inspection')]?.v2
if (v2 === undefined || escondidoContent.faq === undefined) {
  throw new Error('sl-sd-escondido-cleaning-camera: source content is missing')
}

const steps: ProcessContent[] = (v2.process?.steps ?? []).map((step) => ({
  title: step.title,
  description: typeof step.description === 'string' ? step.description : undefined,
}))

const slots = pageImageSlots('sl-escondido-cleaning-camera', {
  hero: {
    alt: 'Technician reviewing camera footage on a monitor after a cleaning',
    shot: 'Monitor showing a cleaned pipe with crew behind, residential property, no identifiable address',
  },
  problems: [shots[0], shots[1], shots[2], shots[3]] as const,
})

const CAMERA_SHOWS = 'What does a sewer camera inspection show?'

/**
 * Every question from the Escondido location page and the service page. The
 * location page's "What does a sewer camera inspection show?" is left out
 * because the service page asks the same question with the fuller answer (it
 * includes what a camera does not show); filtering it keeps the service answer.
 */
const faq = mergeRelevantFaqs(
  escondidoContent.faq.filter((f) => f.question !== CAMERA_SHOWS),
  v2.faq,
  [],
  'In Escondido',
)

export const escondidoCleaningCameraContent: ServiceLocationPageContent = {
  seoTitle: 'Sewer Cleaning & Camera Inspection in Escondido, CA',
  metaDescription:
    'Sewer cleaning and camera inspection in Escondido, CA. Municipal Code 22-165 puts the lateral on the owner. See what a visit records and what it changed.',
  serviceDescription:
    'Sewer cleaning removes material that restricts flow in an accessible sewer line, and a camera inspection records its visible inside on video. The two can be combined in one visit, for properties in Escondido, California.',
  heroImage: slots.hero,
  ctaImage: slots.cta,
  sources: escondidoContent.sources,
  hero: {
    eyebrow: 'Escondido, CA',
    title: 'Sewer Cleaning and Camera Inspection in Escondido',
    intro: (
      <p>
        Section 22-165 of the Escondido Municipal Code puts cleaning the sewer lateral on the
        property owner, up to and including the connection to the City&rsquo;s main. A cleaning and
        camera visit works on that private line: it clears what can be cleared, and a camera may
        record the line before cleaning, after it, or both, so you can see what the cleaning
        changed.
      </p>
    ),
  },
  body: (
    <>
      <h2>Call the City first, then see what the cleaning changed</h2>
      <p>
        The City&rsquo;s Sewer System Management Plan says its public education literature stresses
        the need to call the City before cleaning a private lateral, so the City can remove any
        debris that cleaning pushes into the public sewer line. That is the City&rsquo;s guidance,
        and it does not require our services. The City&rsquo;s FAQ gives City Public Works at (760)
        839-4668 (the City&rsquo;s number, not ours) when you cannot tell whether a backup is in the
        main or the lateral.
      </p>
      <p>
        A camera after cleaning shows what was removed and what remains. If the line is blocked and
        full of water, the camera cannot see under the water, so cleaning may have to come first.
      </p>

      <h2>The code puts cleaning and verifying on the owner, and footage is not a boundary</h2>
      <p>
        Section 22-165 makes the owner responsible for all cleaning and removal of blockages in the
        lateral, and for the cost of that work and of verifying that the lateral is broken or
        damaged, &ldquo;up to and including the connection to the main&rdquo;. The footage records
        where along the line a condition sits, measured from where the camera entered. It does not
        establish where the connection is.
      </p>
      <p>
        Cleaning does not tell you which side of that connection the restriction was on. Vallecitos
        Water District serves parts of Escondido and some properties are on septic, and we do not
        say which applies to your address.
      </p>

      <h2>A cleaned and televised lateral is the code&rsquo;s condition, not our claim</h2>
      <p>
        Under subsection (f), after a maintenance-related violation or an illegal discharge, the
        owner or management company must have the lateral cleaned and televised by a licensed
        plumber and give the City a copy of the video. We do not say our work meets that condition
        or that the City accepts an outside report.
      </p>
      <p>
        For damage the owner says the City caused, the code describes a different proof: a video
        inspection with a qualified City wastewater maintenance employee present, at a time and
        place the City sets. Our footage does not replace it, and a line that flows again, or a
        clear video, is not proof that the whole line is sound.
      </p>

      <h2>No lateral program found, a 1981 median, and no repair from us</h2>
      <p>
        We found no City lateral repair, replacement, grant or reimbursement program. That is none
        found, not a statement that none exists, so the cost of cleaning falls on the owner. The
        Census median year built is 1981, but the Census counts homes, not pipes.
      </p>
      <p>
        If a returning clog leads to a repair estimate, the video and written findings are what you
        compare it against. We do not perform repairs or replacements. To reach The Sewer Pros, call{' '}
        {sd.phone}.
      </p>
    </>
  ),
  problems: [
    ...problems.map((p, i) => ({ ...p, image: slots.problems[i] })),
    {
      title: 'A cleaned line you want to see on video',
      description:
        'Section 22-165 runs the owner’s duty up to and including the connection to the City’s main. Footage records distance from where the camera entered, not where that connection is. Ask City Public Works how the code applies to your address.',
      image: slots.problems[3],
    },
  ],
  inclusions,
  process: steps,
  coverage: {
    title: 'Other San Diego area locations',
    intro:
      'This page covers the City of Escondido. Sewer agencies and lateral rules differ across San Diego County, so use the page for your address.',
    pageIds: [
      id('loc-sd-san-diego'),
      id('loc-sd-san-marcos'),
      id('loc-sd-carlsbad'),
      id('loc-sd-oceanside'),
      id('loc-sd-chula-vista'),
      id('loc-sd-mission-valley'),
    ],
    availabilityStatement: 'Escondido is a service area, not an office location.',
  },
  faq,
  relatedPageIds: [
    id('loc-sd-escondido'),
    id('svc-sewer-cleaning-camera-inspection'),
    id('svc-sewer-camera-inspection'),
    id('svc-sewer-cleaning'),
  ],
  relatedTitle: 'Related pages',
  cta: {
    title: 'Request sewer cleaning and camera inspection in Escondido',
    body: 'Clear the line and see what the cleaning changed, with video and written findings when a camera is used.',
  },
}
