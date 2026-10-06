/**
 * Mission Valley, San Diego, CA + Sewer Cleaning & Camera Inspection
 * (`sl-mission-valley-cleaning-camera`).
 *
 * Authority: CLAUDE.md sections 9, 22, 24; docs/14-content-specification.md.
 * Built from exactly two sources, as `sl-sd-city-cleaning-camera` is:
 *   LOCAL    `sanDiegoMissionValleyContent` (`loc-sd-mission-valley`)
 *   SERVICE  `svc-sewer-cleaning-camera-inspection` v2 content
 *            (content/pages/services.tsx) and `./sl-blocks/...`
 * Nothing here is new research.
 *
 * Section recipe (each section ties a Mission Valley fact to what a visit does):
 *   1. Where the line ends   - owner maintains to the City main (street,
 *                              easement, canyon); footage records distance from
 *                              the entry point, not the connection.
 *   2. Kitchen grease        - the City's grease statement and FEWD permit vs.
 *                              cleaning first, then camera; a clean video is not
 *                              proof of a sound line.
 *   3. Occupied multi-tenant site - one lateral, many fixtures; before/after
 *                              footage as the basis for a schedule; access.
 *   4. Break past the line, no City help found - Plumber's Report (the City's);
 *                              footage and findings are your own evidence.
 *
 * Mission Valley is a City of San Diego planning area: only facts the Mission
 * Valley location page states are used. No housing-age section exists there.
 *
 * ⚠ CITY NUMBERS ARE THE CITY'S, not ours. The company phone is read from
 * `marketOperatingDetail`, never typed. No price, offer, response time,
 * guarantee, emergency or same-day claim, equipment spec or Mission Valley
 * office appears. Repair and replacement are never presented as offered.
 */

import { marketOperatingDetail } from '@/data/markets/markets'
import type { PageId, ProcessContent, ServiceLocationPageContent } from '@/types'
import { sanDiegoMissionValleyContent } from './san-diego-mission-valley'
import { serviceContent } from './services'
import { mergeRelevantFaqs, pageImageSlots } from './service-location-shared'
import { inclusions, problems, shots } from './sl-blocks/sewer-cleaning-camera-inspection'

const id = (value: string): PageId => value as PageId

const sd = marketOperatingDetail['san-diego-ca']
if (sd === undefined) throw new Error('marketOperatingDetail is missing san-diego-ca')

const slots = pageImageSlots('sl-mission-valley-cleaning-camera', {
  hero: {
    alt: 'Technician reviewing camera footage on a monitor after a cleaning',
    shot: 'Monitor showing a cleaned pipe with crew behind, commercial or mixed-use property, no identifiable address',
  },
  problems: [shots[0], shots[1], shots[2], shots[3]] as const,
})

const v2 = serviceContent[id('svc-sewer-cleaning-camera-inspection')]?.v2
if (v2 === undefined || sanDiegoMissionValleyContent.faq === undefined) {
  throw new Error('sl-sd-mission-valley-cleaning-camera: source content is missing')
}

const process: ProcessContent[] = (v2.process?.steps ?? []).map((step) => ({
  title: step.title,
  description: typeof step.description === 'string' ? step.description : undefined,
}))

/**
 * Every question from the Mission Valley location page and the service page.
 * Nothing is skipped: the location page has no camera question to collide with
 * the service page's, and the service page's cost question (DEC-088 wording) is
 * carried as published.
 */
const faq = mergeRelevantFaqs(sanDiegoMissionValleyContent.faq, v2.faq, [], 'In Mission Valley')

export const missionValleyCleaningCameraContent: ServiceLocationPageContent = {
  seoTitle: 'Sewer Cleaning & Camera Inspection in Mission Valley, San Diego',
  metaDescription:
    'Sewer cleaning and camera inspection in Mission Valley, San Diego. The City says owners maintain the lateral to its main. See what a visit covers.',
  serviceDescription:
    'Sewer cleaning removes material that restricts flow in an accessible sewer line, and a camera inspection records its visible inside on video. The two can be combined in one visit, for properties in Mission Valley, San Diego, California.',
  heroImage: slots.hero,
  ctaImage: slots.cta,
  sources: sanDiegoMissionValleyContent.sources,
  hero: {
    eyebrow: 'Mission Valley, San Diego',
    title: 'Sewer Cleaning and Camera Inspection in Mission Valley',
    intro: (
      <p>
        Mission Valley is a City of San Diego planning area, and the City says the property owner
        maintains the sewer lateral all the way to its connection with the City sewer main. A
        cleaning and camera visit works on the private side of that connection: it clears what can
        be cleared in the accessible line, and a camera may record the line before cleaning, after
        it, or both, so you can see what the cleaning changed.
      </p>
    ),
  },
  body: (
    <>
      <h2>Your lateral can end in a canyon, and footage does not show where</h2>
      <p>
        The City of San Diego runs the public sewer in Mission Valley, and its guidance says the
        owner maintains the lateral to the City main, even when that connection is in the street,
        beyond the property line, in an easement or in a canyon. Cleaning clears a restriction. It
        does not tell you which side of the connection the restriction was on.
      </p>
      <p>
        The footage records where along the line a condition sits, measured from where the camera
        entered, but it does not establish where the connection is or where a property line runs.
        For where a lateral connects, Development Services can help at 619-446-5300 (the
        City&rsquo;s number, not ours).
      </p>

      <h2>Kitchen grease: clean first, then see what is left</h2>
      <p>
        The City names grease, along with roots, as a leading cause of sewer spills, and says every
        food service establishment must hold a permit from its Food Establishment Wastewater
        Discharge (FEWD) program. A camera may be used before cleaning, after it, or both. If the
        line is blocked and full of water, the camera cannot see under the water, so cleaning may
        need to come first.
      </p>
      <p>
        A clear video, or a line that flows again, is not proof that the whole line is sound, and
        neither one shows whether grease-removal equipment meets the City&rsquo;s requirements. We
        make no claim that our work satisfies any FEWD requirement. For plan checks, call
        858-654-4188 (the City&rsquo;s number).
      </p>

      <h2>One lateral, many tenants: let the footage set the schedule</h2>
      <p>
        A multi-tenant building feeds many fixtures into one lateral, so one failure can reach every
        tenant at once. Footage from before and after a cleaning is a basis for deciding how often
        the line needs attention, rather than a default interval. Not every line needs a schedule,
        and the footage shows which ones do.
      </p>
      <p>
        On an occupied site, access means trading hours, tenants, service corridors and other
        contractors. Raise that when you request service.
      </p>

      <h2>If a plumber finds a break past the property line, the footage is your record</h2>
      <p>
        When a licensed plumber finds a break or collapse beyond the property line, the City directs
        the plumber to call 619-515-3525 and file a Plumber&rsquo;s Report (the City&rsquo;s number,
        not ours). That process is the City&rsquo;s. We make no claim that the City accepts an
        outside report. What you receive is your own evidence: the inspection video when a camera is
        used, and written findings that note any part of the line the camera could not view.
      </p>
      <p>
        We did not find an active City program that gives owners a grant, reimbursement or other
        help with lateral costs. That is none found, not a statement that none exists. We do not
        perform repairs or replacements. To reach The Sewer Pros, call {sd.phone}.
      </p>
    </>
  ),
  problems: [
    ...problems.map((p, i) => ({ ...p, image: slots.problems[i] })),
    {
      title: 'A kitchen line under a City grease permit',
      description:
        "Food service establishments in the City need a FEWD permit for grease-removal equipment. Cleaning and a camera pass show the lateral's condition, not whether that equipment meets the City's requirements.",
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
  // All relevant questions from the Mission Valley location page and the
  // service page (see `faq` above).
  faq,
  relatedPageIds: [
    id('loc-sd-mission-valley'),
    id('svc-sewer-cleaning-camera-inspection'),
    id('svc-sewer-camera-inspection'),
    id('svc-sewer-cleaning'),
  ],
  relatedTitle: 'Related pages',
  cta: {
    title: 'Request sewer cleaning and camera inspection in Mission Valley',
    body: 'Clear the line and see what the cleaning changed, with video and written findings when a camera is used.',
  },
}
