/**
 * San Marcos, CA + Sewer Line Locating (`sl-san-marcos-locating`).
 *
 * Authority: CLAUDE.md §9, §22, §24; docs/14-content-specification.md §43, §79.
 * Built from exactly two sources, as `sl-sd-chula-vista-locating` is:
 *   LOCAL    `sanMarcosContent` (`loc-sd-san-marcos`)
 *   SERVICE  `svc-sewer-line-locating` v2 content (content/pages/services.tsx)
 *            and `./sl-blocks/sewer-line-locating`
 * Nothing here is new research.
 *
 * Section recipe (each section ties a San Marcos fact to what a locate does):
 *   1. Which agency - City does not provide sewer service; three agencies named
 *      separately; a locate does not show which serves a parcel
 *   2. One lateral per parcel - Vallecitos: each premise its own lateral, one
 *      lateral may not serve more than one APN; a locate does not place an APN
 *   3. Who installs - district does not install private connections; contractor
 *      the owner selects; district inspects; a locate is not a permit
 *   4. Before anyone digs - 811 wording from the service page; not clearance or
 *      permission to dig; ask Vallecitos Engineering about approvals
 *
 * ⚠ NEVER SAYS WHICH AGENCY SERVES AN ADDRESS. DISTRICT NUMBERS ARE THE
 * DISTRICT'S. No company phone, price, offer, response time, guarantee,
 * emergency or same-day claim, equipment spec or office. A locate is an
 * ESTIMATE, not a survey, utility clearance or permission to dig.
 */

import type { PageId, ProcessContent, ServiceLocationPageContent } from '@/types'
import { sanMarcosContent } from './san-diego-san-marcos'
import { serviceContent } from './services'
import { mergeRelevantFaqs, pageImageSlots } from './service-location-shared'
import { inclusions, problems, shots } from './sl-blocks/sewer-line-locating'

const id = (value: string): PageId => value as PageId

const v2 = serviceContent[id('svc-sewer-line-locating')]?.v2
if (v2 === undefined || sanMarcosContent.faq === undefined) {
  throw new Error('sl-sd-san-marcos-locating: source content is missing')
}

const steps: ProcessContent[] = (v2.process?.steps ?? []).map((step) => ({
  title: step.title,
  description: typeof step.description === 'string' ? step.description : undefined,
}))

const slots = pageImageSlots('sl-san-marcos-locating', {
  hero: {
    alt: 'Technician using a sewer line locator receiver in a residential yard',
    shot: 'Technician with a locator receiver in a residential yard, paint marks on pavement, no identifiable address',
  },
  problems: shots,
})

/**
 * Every question from the San Marcos location page and the locating service
 * page, minus the ones named here (reasons in the source report).
 */
const faq = mergeRelevantFaqs(
  sanMarcosContent.faq,
  v2.faq,
  [
    // Location page: a camera question the locating page does not own.
    'What does a sewer camera inspection show?',
    // Service page: the San Marcos sale question answers it for this city.
    'Does my city require a sewer inspection for a sale, remodel, or permit?',
    // Service page: about drain cleaning products, off the locating topic.
    'Should I use chemical drain cleaner on a sewer line clog?',
    // Service page: about cleaning and pipe health, off the locating topic.
    'If the line drains after cleaning, is the pipe healthy?',
  ],
  'In San Marcos',
)

export const sanMarcosLocatingContent: ServiceLocationPageContent = {
  seoTitle: 'Sewer Line Locating in San Marcos, CA',
  metaDescription:
    'Sewer line locating for San Marcos, CA properties. The City says it does not provide sewer service. See what a locate is and what it is not.',
  serviceDescription:
    'Sewer line locating estimates where an accessible underground sewer line runs, using a transmitter inside the line and a receiver at the surface, for properties in the City of San Marcos, California. Results are estimates, not a survey.',
  heroImage: slots.hero,
  ctaImage: slots.cta,
  sources: sanMarcosContent.sources,
  hero: {
    eyebrow: 'San Marcos, CA',
    title: 'Sewer Line Locating in San Marcos',
    intro: (
      <p>
        The City of San Marcos says it does not provide sewer service, and where Vallecitos Water
        District serves an address, the district says the owner is responsible for the lateral
        through its connection to the district’s main. Sewer line locating estimates where that
        accessible line runs, so you can plan digging, fencing or planting around it.
      </p>
    ),
  },
  body: (
    <>
      <h2>A locate shows the route, not which agency serves the parcel</h2>
      <p>
        The City of San Marcos says it does not provide water or sewer service and that one of three
        agencies does, depending on location: Vallecitos Water District, Vista Irrigation District
        or Rincon del Diablo Municipal Water District. We found no map that assigns every parcel to
        one of the three, and we do not say which serves yours.
      </p>
      <p>
        A locate estimates the path of the part of the line the equipment can trace. It is an
        estimate for planning, not a survey, and it does not tell you which agency serves the
        parcel. Vallecitos says its Engineering Department can tell you whether a parcel is inside
        its boundary. For Vista Irrigation District and Rincon del Diablo Municipal Water District,
        this page carries no wording of theirs.
      </p>

      <h2>One lateral per parcel, and a locate does not draw the parcel line</h2>
      <p>
        Vallecitos says each premise needs its own sewer lateral connection and that one lateral may
        not serve more than one assessor’s parcel number. It also says the owner is responsible for
        the lateral from the building through its connection to the district’s main.
      </p>
      <p>
        A locate can estimate the route of the accessible line from an access point such as a
        cleanout. It does not establish where a parcel boundary runs or where the connection to the
        main is, and it does not tell you the condition of the pipe. A camera inspection does that.
      </p>

      <h2>The district does not install private connections, and a locate is not a permit</h2>
      <p>
        Vallecitos says it does not install private water or sewer connections. A private contractor
        the owner selects installs sewer laterals at the owner’s expense, and district personnel
        inspect the work. For a new connection where a main is available at the frontage, the
        district says it requires a plan check, approved plans, paid fees and an inspection deposit.
      </p>
      <p>
        Those rules describe new connections. We did not find a statement of which approvals apply
        to repairing an existing lateral, so ask Vallecitos Engineering. A locate does not replace
        any approval, and we make no claim that it satisfies one.
      </p>

      <h2>Before anyone digs, call the one-call program</h2>
      <p>
        A locate is not utility clearance or permission to dig. Before anyone digs, contact your
        state one-call program (often reached at 811) or your local utility and follow applicable
        requirements.
      </p>
      <p>
        An estimated route is useful for deciding where to fence, plant or dig. It does not identify
        a root or the cause of a stoppage. The Sewer Pros does not repair or replace sewer lines,
        and we found no Vallecitos lateral repair or grant program.
      </p>
    </>
  ),
  problems: [
    ...problems.map((p, i) => ({ ...p, image: slots.problems[i] })),
    {
      title: 'Planning a dig near the lateral',
      description:
        'Vallecitos says the owner is responsible for the lateral through its connection to the district’s main. An estimated route helps you choose where to fence, plant or dig. It does not show the connection point, the parcel line or the pipe’s condition.',
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
    id('svc-sewer-line-locating'),
    id('svc-sewer-camera-inspection'),
    id('svc-pre-purchase-sewer-inspection'),
  ],
  relatedTitle: 'Related pages',
  cta: {
    title: 'Request sewer line locating in San Marcos',
    body: 'Plan around your lateral with an estimate of where it runs. A locate is not a survey or permission to dig.',
  },
}
