/**
 * Escondido, CA + Sewer Camera Inspection (`sl-escondido-camera`).
 *
 * Authority: CLAUDE.md sections 9, 22, 24; docs/14-content-specification.md.
 * Built from exactly two sources, as `sl-sd-mission-valley-camera` is:
 *   LOCAL    `escondidoContent` (`loc-sd-escondido`)
 *   SERVICE  `svc-sewer-camera-inspection` v2 content (content/pages/services.tsx)
 *            and the shared camera blocks in `./service-location-shared`
 * Nothing here is new research. Stays consistent with `sl-escondido-cleaning`
 * on section 22-165 and the owner-cost wording.
 *
 * Section recipe (each section ties an Escondido fact to what the camera does
 * or cannot do; swap the location or the service and the copy breaks):
 *   1. Verifying damage      - 22-165(c) puts the cost of verifying breakage on
 *                              the owner; the City-caused exception needs a
 *                              City-present video the City schedules
 *   2. The connection        - owner's duty runs to the connection; footage is
 *                              distance from the entry point; City vs
 *                              Vallecitos vs septic; no City map
 *   3. Cleanout and the code - 22-165(b) cleanout is the owner's; (f) cleaned
 *                              and televised after a violation; camera cannot
 *                              see under water
 *   4. Buying                - median year built 1981 counts homes, not pipes;
 *                              no sale rule found; repair permit; we do not repair
 *
 * ⚠ CITY NUMBERS ARE THE CITY'S, not ours. The code is quoted for at most nine
 * words. Never says our inspection satisfies the code or replaces the
 * City-present inspection, never says the City pays for anything, never says
 * who may perform lateral repair. No company phone, price, offer, response
 * time, guarantee, emergency or same-day claim, equipment spec or Escondido
 * office. Repair and replacement are never presented as offered.
 */

import type { PageId, ProcessContent, ServiceLocationPageContent } from '@/types'
import { escondidoContent } from './san-diego-escondido'
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
  throw new Error('sl-sd-escondido-camera: shared camera inspection blocks are missing')
}

const v2 = serviceContent[id('svc-sewer-camera-inspection')]?.v2
if (v2 === undefined || escondidoContent.faq === undefined) {
  throw new Error('sl-sd-escondido-camera: source service v2 or location FAQ is missing')
}

const slots = pageImageSlots('sl-escondido-camera', {
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
 * Every question from the Escondido location page and the camera service page,
 * minus one: the service page's "Which areas does The Sewer Pros serve?" (this
 * page IS an area page). The service page's cost question (DEC-088 wording) is
 * carried as published.
 */
const faq = mergeRelevantFaqs(
  escondidoContent.faq,
  v2.faq,
  [
    // This page IS an area page; the question is the hub's.
    'Which areas does The Sewer Pros serve?',
  ],
  'In Escondido',
)

export const escondidoCameraContent: ServiceLocationPageContent = {
  seoTitle: 'Sewer Camera Inspection in Escondido, CA',
  metaDescription:
    'Sewer camera inspection in Escondido, CA. Municipal Code 22-165 puts the lateral and the cost of verifying damage on the owner. See what a camera records.',
  serviceDescription:
    'A sewer camera inspection is a visual inspection of the accessible inside of a sewer line, recorded on video, for properties in Escondido, California.',
  heroImage: slots.hero,
  ctaImage: slots.cta,
  sources: escondidoContent.sources,
  hero: {
    eyebrow: 'Escondido, CA',
    title: 'Sewer Camera Inspection in Escondido',
    intro: (
      <p>
        Section 22-165 of the Escondido Municipal Code puts the sewer lateral on the property owner,
        up to and including the connection to the City&rsquo;s main, and puts the cost of verifying
        that it is broken or damaged on the owner too. A camera inspection records what is inside
        that line, on video, so you have evidence before you clean it, buy a home or approve work.
      </p>
    ),
  },
  body: (
    <>
      <h2>Section 22-165 puts the cost of verifying damage on the owner</h2>
      <p>
        Section 22-165(c) makes the owner responsible for all costs of maintaining, repairing,
        replacing and cleaning the lateral, and for verifying that it is broken or damaged. A camera
        inspection shows what is in the accessible line, on video.
      </p>
      <p>
        The code makes one exception: the City may be responsible for repairs only if the owner
        proves the damage came from work by the City or a contractor working for the City. It
        describes that proof as a video inspection from a cleanout or a breakout opening, done with
        a qualified City wastewater maintenance employee present, and the City decides when and
        where it happens. Our inspection does not replace that one. Contact Public Works at (760)
        839-4668 (the City&rsquo;s number) before you pay for work you plan to rely on.
      </p>

      <h2>Footage shows where along the line, not where the City&rsquo;s main begins</h2>
      <p>
        The owner&rsquo;s duty runs &ldquo;up to and including the connection to the main&rdquo;.
        The camera footage records where along the line a condition sits, measured from where the
        camera entered. It does not establish where the connection or a property line is.
      </p>
      <p>
        The City&rsquo;s rules apply to addresses on the City of Escondido&rsquo;s sewer system.
        Vallecitos Water District serves parts of Escondido, some properties are on septic, and we
        found no City map of its sewer service area. We do not say which applies to your address, so
        ask Public Works.
      </p>

      <h2>The cleanout is the owner&rsquo;s, and the code names a televised cleaning</h2>
      <p>
        Section 22-165(b) makes the owner responsible for locating, exposing and maintaining the
        property line cleanout so the lateral can be inspected, cleaned and cleared. The camera
        usually enters there. Under subsection (f), after a maintenance-related violation or an
        illegal discharge, the owner or management company must have the lateral cleaned and
        televised by a licensed plumber and give the City a copy of the video. That is the
        code&rsquo;s condition, and we do not say our work meets it.
      </p>
      <p>A camera cannot see under water, so a blocked, full line may need cleaning first.</p>

      <h2>Buying in Escondido: a 1981 median does not show your lateral</h2>
      <p>
        The Census median year built for Escondido homes is 1981, and about half were built in the
        1970s and 1980s. The Census counts homes, not sewer pipes, so house age does not show a
        lateral&rsquo;s condition. We found no City rule requiring a sewer inspection when a home is
        sold (none found, not a confirmed absence), so a buyer who wants the line&rsquo;s condition
        has to ask.
      </p>
      <p>
        The City says a repair permit is required before any lateral repair begins. The Sewer Pros
        does not perform repairs or replacements, and we found no City lateral grant or
        reimbursement program.
      </p>
    </>
  ),
  problems: [
    ...problems.map((p, i) => ({ ...p, image: slots.problems[i] })),
    {
      title: 'A lateral problem you may need to verify',
      description:
        'Section 22-165(c) puts the cost of verifying breakage or damage on the owner. A recorded inspection shows what is visible in the line, and where along it. It does not replace the City-present video the code describes for damage the City caused.',
      image: slots.problems[3],
    },
  ],
  // Six items: renders as two rows of three.
  inclusions,
  process,
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
  // All relevant questions from the Escondido location page and the camera
  // service page (see `faq` above).
  faq,
  relatedPageIds: [
    id('loc-sd-escondido'),
    id('svc-sewer-camera-inspection'),
    id('svc-pre-purchase-sewer-inspection'),
    id('svc-sewer-line-locating'),
  ],
  relatedTitle: 'Related pages',
  cta: {
    title: 'Schedule a sewer camera inspection in Escondido',
    body: 'Get the condition of your lateral on video, with written findings.',
  },
}
