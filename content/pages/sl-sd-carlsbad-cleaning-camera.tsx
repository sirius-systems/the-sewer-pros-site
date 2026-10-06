/**
 * Carlsbad, CA + Sewer Cleaning & Camera Inspection
 * (`sl-carlsbad-cleaning-camera`).
 *
 * Authority: CLAUDE.md §9, §22, §24; docs/14-content-specification.md §43, §79.
 * Built from exactly two sources, as `sl-sd-chula-vista-cleaning-camera` is:
 *   LOCAL    `carlsbadContent` (`loc-sd-carlsbad`)
 *   SERVICE  `svc-sewer-cleaning-camera-inspection` v2 content
 *            (content/pages/services.tsx) and `./sl-blocks/...`
 * Nothing here is new research.
 *
 * Section recipe (each section ties a Carlsbad fact to what a visit does):
 *   1. Footage and the lateral's end - three agencies word the end differently;
 *      footage records distance from the entry point, not an agency boundary
 *   2. City guidance - annual cleaning, camera every 3-5 years; a flowing line is
 *      not proof; camera cannot see under water
 *   3. Grants - Leucadia says inspection and cleaning do not qualify; no camera
 *      requirement listed by either page; footage is your own record
 *   4. Not a repair - permits per agency; we do not repair; company phone
 *
 * ⚠ CARLSBAD HAS THREE SEWER AGENCIES. Each agency's wording is stated separately.
 * NEVER SAYS WHICH AGENCY SERVES AN ADDRESS. GRANT AVAILABILITY IS NEVER STATED.
 * AGENCY NUMBERS ARE THE AGENCIES'. The company phone is read from
 * `marketOperatingDetail`. No price, offer, response time, guarantee, emergency
 * or same-day claim, equipment spec or office.
 */

import { marketOperatingDetail } from '@/data/markets/markets'
import type { PageId, ProcessContent, ServiceLocationPageContent } from '@/types'
import { carlsbadContent } from './san-diego-carlsbad'
import { serviceContent } from './services'
import { mergeRelevantFaqs, pageImageSlots } from './service-location-shared'
import { inclusions, problems, shots } from './sl-blocks/sewer-cleaning-camera-inspection'

const id = (value: string): PageId => value as PageId

const sd = marketOperatingDetail['san-diego-ca']
if (sd === undefined) throw new Error('marketOperatingDetail is missing san-diego-ca')

const slots = pageImageSlots('sl-carlsbad-cleaning-camera', {
  hero: {
    alt: 'Technician reviewing camera footage on a monitor after a cleaning',
    shot: 'Monitor showing a cleaned pipe with crew behind, residential property, no identifiable address',
  },
  problems: [shots[0], shots[1], shots[2], shots[3]] as const,
})

const v2 = serviceContent[id('svc-sewer-cleaning-camera-inspection')]?.v2
if (v2 === undefined || carlsbadContent.faq === undefined) {
  throw new Error('sl-sd-carlsbad-cleaning-camera: source content is missing')
}

const process: ProcessContent[] = (v2.process?.steps ?? []).map((step) => ({
  title: step.title,
  description: typeof step.description === 'string' ? step.description : undefined,
}))

const CAMERA_SHOWS = 'What does a sewer camera inspection show?'

/**
 * Every question from the Carlsbad location page and the service page. The
 * location page's "What does a sewer camera inspection show?" is left out
 * because the service page asks the same question with the fuller answer (it
 * includes what a camera does not show); filtering it keeps the service answer.
 */
const faq = mergeRelevantFaqs(
  carlsbadContent.faq.filter((f) => f.question !== CAMERA_SHOWS),
  v2.faq,
  [],
  'In Carlsbad',
)

export const carlsbadCleaningCameraContent: ServiceLocationPageContent = {
  seoTitle: 'Sewer Cleaning & Camera Inspection in Carlsbad, CA',
  metaDescription:
    'Sewer cleaning and camera inspection in Carlsbad, CA. Three sewer agencies word the owner’s lateral differently. See what a cleaning and camera visit covers.',
  serviceDescription:
    'Sewer cleaning removes material that restricts flow in an accessible sewer line, and a camera inspection records its visible inside on video. The two can be combined in one visit, for properties in Carlsbad, California.',
  heroImage: slots.hero,
  ctaImage: slots.cta,
  sources: carlsbadContent.sources,
  hero: {
    eyebrow: 'Carlsbad, CA',
    title: 'Sewer Cleaning and Camera Inspection in Carlsbad',
    intro: (
      <p>
        In Carlsbad, three sewer agencies each describe the owner’s lateral in their own words, and
        the City recommends both regular cleaning and a camera look every few years. A cleaning and
        camera visit works on the private side of that line: it clears what can be cleared in the
        accessible line, and a camera may record the line before cleaning, after it, or both, so you
        can see what the cleaning changed.
      </p>
    ),
  },
  body: (
    <>
      <h2>Footage shows where along the line, not where an agency’s part begins</h2>
      <p>
        The City of Carlsbad says the owner is responsible for the lateral from the home or building
        to the sewer main, typically in the street. Vallecitos Water District includes the point of
        connection to its main. Leucadia Wastewater District includes the physical connection to its
        system.
      </p>
      <p>
        The camera footage records where along the line a condition sits, measured from where the
        camera entered. It does not establish where a property line or an agency’s responsibility
        begins, and we do not say which agency serves an address. The City points to its sewer
        district map for that.
      </p>

      <h2>The City suggests cleaning and a camera, and a clear line is not proof</h2>
      <p>
        The City says a lateral should ideally be professionally cleaned once a year and inspected
        with a small camera every three to five years, and that owners should check sooner with a
        sewage-like odor or frequent clogged drains. That is the City’s guidance for its service
        area, not a finding about your property.
      </p>
      <p>
        A camera may be used before cleaning, after it, or both. If the line is blocked and full of
        water, the camera cannot see under the water, so cleaning may need to come first. A line
        that flows again, or a clear video, is not proof that the whole line is sound.
      </p>

      <h2>Leucadia says inspection and cleaning do not qualify for its grant</h2>
      <p>
        The City publishes a Sewer Lateral Grant Program of up to $3,000 to replace or rehabilitate
        a lateral. Leucadia reimburses 50% of repair cost, up to $3,000, and says inspection and
        cleaning of a private lateral do not qualify. Neither page we reviewed lists a camera
        inspection as a requirement. We found no lateral grant from Vallecitos. Neither agency
        publishes a balance, so confirm availability first.
      </p>
      <p>
        What you receive is your own record: the inspection video when a camera is used, and written
        findings that note any part of the line the camera could not view. We make no claim that an
        agency accepts an outside report.
      </p>

      <h2>A cleaned line is not a repaired one, and permits sit with the agencies</h2>
      <p>
        The City says most construction work requires a permit, and Leucadia’s form says the
        applicant must obtain any necessary permits. Vallecitos says it does not install private
        connections. If a returning clog leads to a repair estimate, the findings are what you
        compare it against.
      </p>
      <p>We do not perform repairs or replacements. To reach The Sewer Pros, call {sd.phone}.</p>
    </>
  ),
  problems: [
    ...problems.map((p, i) => ({ ...p, image: slots.problems[i] })),
    {
      title: 'A line the City suggests looking at every few years',
      description:
        'The City says a lateral should be inspected with a small camera every three to five years, and sooner with odor or frequent clogs. Footage records distance from where the camera entered, not where an agency’s part of the line begins.',
      image: slots.problems[3],
    },
  ],
  // Six items: renders as two rows of three.
  inclusions,
  process,
  coverage: {
    title: 'Other San Diego area locations',
    intro:
      'This page covers the City of Carlsbad. Sewer agencies and lateral rules differ across San Diego County, so use the page for your address.',
    pageIds: [
      id('loc-sd-san-diego'),
      id('loc-sd-san-marcos'),
      id('loc-sd-escondido'),
      id('loc-sd-oceanside'),
      id('loc-sd-chula-vista'),
      id('loc-sd-mission-valley'),
    ],
    availabilityStatement: 'Carlsbad is a service area, not an office location.',
  },
  // All relevant questions from the Carlsbad location page and the service
  // page (see `faq` above).
  faq,
  relatedPageIds: [
    id('loc-sd-carlsbad'),
    id('svc-sewer-cleaning-camera-inspection'),
    id('svc-sewer-camera-inspection'),
    id('svc-sewer-cleaning'),
  ],
  relatedTitle: 'Related pages',
  cta: {
    title: 'Request sewer cleaning and camera inspection in Carlsbad',
    body: 'Clear the line and see what the cleaning changed, with video and written findings when a camera is used.',
  },
}
