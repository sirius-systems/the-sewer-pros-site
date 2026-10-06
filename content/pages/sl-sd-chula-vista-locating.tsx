/**
 * Chula Vista, CA + Sewer Line Locating (`sl-chula-vista-locating`).
 *
 * Authority: CLAUDE.md §9, §22, §24; docs/14-content-specification.md §43, §79.
 * Built from exactly two sources, as `sl-sd-city-locating` is:
 *   LOCAL    `chulaVistaContent` (`loc-sd-chula-vista`)
 *   SERVICE  `svc-sewer-line-locating` v2 content (content/pages/services.tsx)
 *            and `./sl-blocks/sewer-line-locating`
 * Nothing here is new research.
 *
 * Section recipe (each section ties a Chula Vista fact to what a locate does):
 *   1. Two names, one line - lateral (main to property line) and building sewer
 *      (property line to house) for permits; policy starts the owner's duty at the
 *      first foot; a locate estimates the route, not either boundary.
 *   2. The cleanout         - owner exposes the property line cleanout; City crews
 *      stop there; a locate does not place the cleanout or the property line.
 *   3. Trees and planting   - street-tree proof (excavation or arborist); City
 *      advises against deep-rooted plants near a lateral; a locate plans around
 *      the route, it does not identify a root or a cause.
 *   4. Before anyone digs   - utility permit, Construction Permit number (the
 *      City's), one-call wording; not clearance or permission to dig.
 *
 * ⚠ POLICY, NOT A GRANT. CITY NUMBERS ARE THE CITY'S, not ours. No company phone,
 * price, offer, response time, guarantee, emergency or same-day claim, equipment
 * spec or office. A locate is an ESTIMATE, not a survey, utility clearance or
 * permission to dig.
 */

import type { PageId, ProcessContent, ServiceLocationPageContent } from '@/types'
import { chulaVistaContent } from './san-diego-chula-vista'
import { serviceContent } from './services'
import { mergeRelevantFaqs, pageImageSlots } from './service-location-shared'
import { inclusions, problems, shots } from './sl-blocks/sewer-line-locating'

const id = (value: string): PageId => value as PageId

const slots = pageImageSlots('sl-chula-vista-locating', {
  hero: {
    alt: 'Technician using a sewer line locator receiver in a residential yard',
    shot: 'Technician with a locator receiver in a residential yard, paint marks on pavement, no identifiable address',
  },
  problems: shots,
})

const v2 = serviceContent[id('svc-sewer-line-locating')]?.v2
if (v2 === undefined || chulaVistaContent.faq === undefined) {
  throw new Error('sl-sd-chula-vista-locating: source content is missing')
}

/**
 * Every question from the Chula Vista location page and the locating service
 * page, minus the ones named here (reasons in the source report).
 */
const chulaVistaLocatingFaq = mergeRelevantFaqs(
  chulaVistaContent.faq,
  v2.faq,
  [
    // Location page: a camera question the locating page does not own.
    'What does a sewer camera inspection show?',
    // Service page: the Chula Vista sale question answers it for this city.
    'Does my city require a sewer inspection for a sale, remodel, or permit?',
    // Service page: about drain cleaning products, off the locating topic.
    'Should I use chemical drain cleaner on a sewer line clog?',
    // Service page: about cleaning and pipe health, off the locating topic.
    'If the line drains after cleaning, is the pipe healthy?',
  ],
  'In Chula Vista',
)

const steps: ProcessContent[] = (v2.process?.steps ?? []).map((step) => ({
  title: step.title,
  description: typeof step.description === 'string' ? step.description : undefined,
}))

export const chulaVistaLocatingContent: ServiceLocationPageContent = {
  seoTitle: 'Sewer Line Locating in Chula Vista, CA',
  metaDescription:
    'Sewer line locating for Chula Vista, CA properties. The City splits your line at the property line for permits. See what a locate is and is not.',
  serviceDescription:
    'Sewer line locating estimates where an accessible underground sewer line runs, using a transmitter inside the line and a receiver at the surface, for properties in the City of Chula Vista, California. Results are estimates, not a survey.',
  heroImage: slots.hero,
  ctaImage: slots.cta,
  sources: chulaVistaContent.sources,
  hero: {
    eyebrow: 'Chula Vista, CA',
    title: 'Sewer Line Locating in Chula Vista',
    intro: (
      <p>
        In Chula Vista, the City’s Council policy puts the sewer lateral on the owner from the first
        foot off the public sewer to the building, and the City’s permits split that same line at
        the property line. Sewer line locating estimates where the accessible line runs, so you can
        plan digging, fencing or planting around it.
      </p>
    ),
  },
  body: (
    <>
      <h2>One line, two permit names, and a locate that is neither boundary</h2>
      <p>
        For permits, the City of Chula Vista splits the line into a sewer lateral, from the main to
        the property line, and a building sewer, from the property line to the house. Its Council
        policy uses a different cut: the owner’s duty starts at the connection point, the first foot
        of the lateral off the outside of the public sewer, and runs to the building.
      </p>
      <p>
        A locate estimates the path of the part of the line the equipment can trace, and it is an
        estimate for planning, not a survey. It does not establish where the first foot is or where
        a property line runs.
      </p>

      <h2>The property line cleanout is where the City’s crews stop</h2>
      <p>
        The policy has the owner expose the property line cleanout, normally within two to three
        feet of the property line, and says City crews may not reach the lateral from any point
        further into private property than that cleanout. Everything past it, to the building, is
        the owner’s line to know.
      </p>
      <p>
        A locate can estimate the route of the accessible line from an access point such as that
        cleanout. It does not tell you the condition of the pipe. A camera inspection does that.
      </p>

      <h2>Street trees and planting: a route helps, but it does not name a cause</h2>
      <p>
        The City advises against planting deep-rooted vegetation near a lateral, and its policy
        covers stoppages caused by a City street tree: the owner has the burden of proof, by
        excavating the root from its origin to where it entered the lateral or by written
        confirmation from a certified arborist based on a root sample.
      </p>
      <p>
        An estimated route is useful for deciding where to plant or dig. It does not identify a
        root, its origin or the cause of a stoppage, and we make no claim that a locate satisfies
        any City condition. Ask Public Works at (619) 397-6000 what it accepts (the City’s number,
        not ours).
      </p>

      <h2>Before anyone digs: the City’s permits and your one-call program</h2>
      <p>
        The City says a utility permit is required to install, repair, replace or relocate a sewer
        lateral or building sewer, and the Council policy requires a City permit before repair or
        replacement. For work in the City right-of-way or easement, a private contractor needs a
        Construction Permit from the Land Development Division Permits Section at (619) 691-5272
        (the City’s number, not ours).
      </p>
      <p>
        A locate is not utility clearance or permission to dig, and it does not replace a permit.
        Before anyone digs, contact your state one-call program (often reached at 811) or your local
        utility and follow applicable requirements.
      </p>
    </>
  ),
  problems: [
    ...problems.map((p, i) => ({ ...p, image: slots.problems[i] })),
    {
      title: 'Planting or digging near the lateral',
      description:
        'The City advises against planting deep-rooted vegetation near a lateral. An estimated route helps you choose where to plant, fence or dig. It does not identify roots or the condition of the pipe.',
      image: slots.problems[3],
    },
  ],
  // Six items: renders as two rows of three.
  inclusions,
  process: steps,
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
  // All relevant questions from the Chula Vista location page and the locating
  // service page (see `chulaVistaLocatingFaq` above).
  faq: chulaVistaLocatingFaq,
  relatedPageIds: [
    id('loc-sd-chula-vista'),
    id('svc-sewer-line-locating'),
    id('svc-sewer-camera-inspection'),
    id('svc-pre-purchase-sewer-inspection'),
  ],
  relatedTitle: 'Related pages',
  cta: {
    title: 'Request sewer line locating in Chula Vista',
    body: 'Plan around your lateral with an estimate of where it runs. A locate is not a survey or permission to dig.',
  },
}
