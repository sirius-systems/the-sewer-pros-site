/**
 * San Marcos, CA + Sewer Cleaning & Camera Inspection
 * (`sl-san-marcos-cleaning-camera`).
 *
 * Authority: CLAUDE.md §9, §22, §24; docs/14-content-specification.md §43, §79.
 * Built from exactly two sources, as `sl-sd-chula-vista-cleaning-camera` is:
 *   LOCAL    `sanMarcosContent` (`loc-sd-san-marcos`)
 *   SERVICE  `svc-sewer-cleaning-camera-inspection` v2 content
 *            (content/pages/services.tsx) and `./sl-blocks/...`
 * Nothing here is new research.
 *
 * Section recipe (each section ties a San Marcos fact to what a visit does):
 *   1. The connection - footage records distance from the entry point, not the
 *      connection to the district's main or a boundary; no claim which agency
 *   2. Smoke testing - district tests its own lines; a visit looks at yours;
 *      camera cannot see under water, a clear video is not proof
 *   3. Your own record - three agencies named separately; as-built records are
 *      the district's to request; footage is your evidence
 *   4. No program found - none found, no permit claim, we do not repair; phone
 *
 * ⚠ NEVER SAYS WHICH AGENCY SERVES AN ADDRESS. DISTRICT NUMBERS ARE THE
 * DISTRICT'S. Company phone and founding year come from
 * `marketOperatingDetail['san-diego-ca']`. No price, offer, response time,
 * emergency or same-day claim, guarantee, equipment spec or office.
 */

import { marketOperatingDetail } from '@/data/markets/markets'
import type { PageId, ProcessContent, ServiceLocationPageContent } from '@/types'
import { sanMarcosContent } from './san-diego-san-marcos'
import { serviceContent } from './services'
import { mergeRelevantFaqs, pageImageSlots } from './service-location-shared'
import { inclusions, problems, shots } from './sl-blocks/sewer-cleaning-camera-inspection'

const id = (value: string): PageId => value as PageId

const sd = marketOperatingDetail['san-diego-ca']
if (sd === undefined) throw new Error('marketOperatingDetail is missing san-diego-ca')

const v2 = serviceContent[id('svc-sewer-cleaning-camera-inspection')]?.v2
if (v2 === undefined || sanMarcosContent.faq === undefined) {
  throw new Error('sl-sd-san-marcos-cleaning-camera: source content is missing')
}

const steps: ProcessContent[] = (v2.process?.steps ?? []).map((step) => ({
  title: step.title,
  description: typeof step.description === 'string' ? step.description : undefined,
}))

const slots = pageImageSlots('sl-san-marcos-cleaning-camera', {
  hero: {
    alt: 'Technician reviewing camera footage on a monitor after a cleaning',
    shot: 'Monitor showing a cleaned pipe with crew behind, residential property, no identifiable address',
  },
  problems: [shots[0], shots[1], shots[2], shots[3]] as const,
})

const CAMERA_SHOWS = 'What does a sewer camera inspection show?'

/**
 * Every question from the San Marcos location page and the service page. The
 * location page's "What does a sewer camera inspection show?" is left out
 * because the service page asks the same question with the fuller answer (it
 * includes what a camera does not show); filtering it keeps the service answer.
 */
const faq = mergeRelevantFaqs(
  sanMarcosContent.faq.filter((f) => f.question !== CAMERA_SHOWS),
  v2.faq,
  [],
  'In San Marcos',
)

export const sanMarcosCleaningCameraContent: ServiceLocationPageContent = {
  seoTitle: 'Sewer Cleaning & Camera Inspection in San Marcos, CA',
  metaDescription:
    'Sewer cleaning and camera inspection in San Marcos, CA. The City says it does not provide sewer service. See what a visit records on the line you maintain.',
  serviceDescription:
    'Sewer cleaning removes material that restricts flow in an accessible sewer line, and a camera inspection records its visible inside on video. The two can be combined in one visit, for properties in the City of San Marcos, California.',
  heroImage: slots.hero,
  ctaImage: slots.cta,
  sources: sanMarcosContent.sources,
  hero: {
    eyebrow: 'San Marcos, CA',
    title: 'Sewer Cleaning and Camera Inspection in San Marcos',
    intro: (
      <p>
        The City of San Marcos says it does not provide sewer service, and where Vallecitos Water
        District serves an address, the district says the owner is responsible for the lateral
        through its connection to the district’s main. A cleaning and camera visit works on that
        private line: it clears what can be cleared, and a camera may record the line before
        cleaning, after it, or both, so you can see what the cleaning changed.
      </p>
    ),
  },
  body: (
    <>
      <h2>Footage shows where along the line, not where the district’s main begins</h2>
      <p>
        Vallecitos Water District says the owner is responsible for the lateral from the building
        through its connection to the district’s main, and that the district maintains the main. The
        camera footage records where along the line a condition sits, measured from where the camera
        entered. It does not establish where the connection to the main is.
      </p>
      <p>
        Cleaning clears a restriction. It does not tell you which side of that connection the
        restriction was on, and we do not say which agency serves your address.
      </p>

      <h2>Smoke testing checks the district’s lines, and a clear video is not proof</h2>
      <p>
        Vallecitos says it smoke-tests its sanitary sewer lines for cracks and other openings where
        rainwater gets in, and describes that as an assessment of the district’s system rather than
        private systems. A camera visit looks at your lateral instead.
      </p>
      <p>
        A camera may be used before cleaning, after it, or both. If the line is blocked and full of
        water, the camera cannot see under the water, so cleaning may need to come first. A line
        that flows again, or a clear video, is not proof that the whole line is sound.
      </p>

      <h2>Three agencies, and the footage is your own record</h2>
      <p>
        The City says one of three agencies serves San Marcos depending on location: Vallecitos
        Water District, Vista Irrigation District or Rincon del Diablo Municipal Water District. We
        found no map that assigns every parcel. Vallecitos says its Engineering Department can tell
        you whether a parcel is inside its boundary, and that it takes requests for as-built
        records. For the other two, this page carries no wording of theirs.
      </p>
      <p>
        What you receive is your own evidence: the inspection video when a camera is used, and
        written findings that note any part of the line the camera could not view. We make no claim
        that any agency accepts an outside report.
      </p>

      <h2>No lateral program found, and no repair from us</h2>
      <p>
        We did not find a Vallecitos lateral repair, replacement, grant or reimbursement program,
        and no statement of which approvals apply to repairing an existing lateral. That is “none
        found”, not a statement that none exists. If a returning clog leads to a repair estimate,
        the findings are what you compare it against.
      </p>
      <p>
        We do not perform repairs or replacements. To reach The Sewer Pros, call {sd.phone}. For a
        sewer spill, the district’s website says to call 911.
      </p>
    </>
  ),
  problems: [
    ...problems.map((p, i) => ({ ...p, image: slots.problems[i] })),
    {
      title: 'A cleaned line you want to see on video',
      description:
        'Vallecitos says the owner’s responsibility runs through the lateral’s connection to the main. Footage records distance from where the camera entered, not where that connection is. Ask Vallecitos Engineering which agency and boundary apply.',
      image: slots.problems[3],
    },
  ],
  inclusions,
  process: steps,
  coverage: {
    title: 'Other San Diego area locations',
    intro:
      'This page covers the City of San Marcos. Sewer agencies and lateral rules differ across San Diego County, so use the page for your address.',
    pageIds: [
      id('loc-sd-san-diego'),
      id('loc-sd-carlsbad'),
      id('loc-sd-escondido'),
      id('loc-sd-oceanside'),
      id('loc-sd-chula-vista'),
      id('loc-sd-mission-valley'),
    ],
    availabilityStatement: 'San Marcos is a service area, not an office location.',
  },
  faq,
  relatedPageIds: [
    id('loc-sd-san-marcos'),
    id('svc-sewer-cleaning-camera-inspection'),
    id('svc-sewer-camera-inspection'),
    id('svc-sewer-cleaning'),
  ],
  relatedTitle: 'Related pages',
  cta: {
    title: 'Request sewer cleaning and camera inspection in San Marcos',
    body: 'Clear the line and see what the cleaning changed, with video and written findings when a camera is used.',
  },
}
