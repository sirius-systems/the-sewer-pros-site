/**
 * Florissant, MO + Sewer Line Locating (`sl-florissant-locating`).
 *
 * Built from exactly two sources, as `sl-nlv-locating` is:
 *   LOCATION  `florissantContent`  (content/pages/st-louis-florissant.tsx)
 *   SERVICE   `svc-sewer-line-locating` v2 content (content/pages/services.tsx)
 *             and `./sl-blocks/sewer-line-locating`
 *
 * Section recipe (each ties a Florissant fact to what THIS service does or
 * cannot do; swap the city or the service and the copy breaks):
 *   1. Boundaries          - MSD says the lateral and its connection are private;
 *                            no published rule on the part under the street; the
 *                            program stops five feet from the foundation; a locate
 *                            finds neither point and is not a survey.
 *   2. Before anyone digs  - permit questions go to the City's Public Works (the
 *                            CITY's number) + the service's one-call wording.
 *   3. Sinkhole or finding - the City asks MSD for a dye test; a locate can place
 *                            a point at the surface but cannot say whose line it
 *                            is or whether the hole connects to either sewer.
 *   4. Buying              - sold "as is", occupancy page silent on sewers; route
 *                            is not condition.
 *
 * ⚠ CITY AND MSD NUMBERS ARE THEIRS, not ours. No company phone is repeated
 * here. No price, offer, response time, guarantee, emergency or same-day claim.
 * Florissant is a service area, not an office. Repair and replacement are never
 * presented as offered. A locate is an ESTIMATE, not a survey, utility clearance
 * or permission to dig. The location page names no City sewer map, so none is
 * mentioned here. Nothing from the St. Louis City, Chesterfield, Ballwin or
 * St. Charles pages is used.
 *
 * Audit: docs/source-reports/st-louis/sl-florissant-locating.md
 */

import type { PageId, ProcessContent, ServiceLocationPageContent } from '@/types'
import { florissantContent } from './st-louis-florissant'
import { serviceContent } from './services'
import { mergeRelevantFaqs, pageImageSlots } from './service-location-shared'
import { inclusions, problems, shots } from './sl-blocks/sewer-line-locating'

const id = (value: string): PageId => value as PageId

const slots = pageImageSlots('sl-florissant-locating', {
  hero: {
    alt: 'Technician using a sewer line locator in a residential yard',
    shot: 'Technician with a locator receiver in a residential yard, paint marks on pavement, no identifiable address',
  },
  problems: shots,
})

const v2 = serviceContent[id('svc-sewer-line-locating')]?.v2
if (v2 === undefined || florissantContent.faq === undefined) {
  throw new Error('sl-florissant-locating: source content is missing')
}

/**
 * Every question from the Florissant location page and the locating service
 * page, minus the ones named here (reasons in the source report).
 */
const florissantLocatingFaq = mergeRelevantFaqs(
  florissantContent.faq,
  v2.faq,
  [
    // Location page: a camera question the locating page does not own.
    'What does a sewer camera inspection show?',
    // Service page: the Florissant occupancy question answers it for this city.
    'Does my city require a sewer inspection for a sale, remodel, or permit?',
    // Service page: about drain cleaning products, off the locating topic.
    'Should I use chemical drain cleaner on a sewer line clog?',
    // Service page: about cleaning and pipe health, off the locating topic.
    'If the line drains after cleaning, is the pipe healthy?',
  ],
  'In Florissant',
)

const steps: ProcessContent[] = (v2.process?.steps ?? []).map((step) => ({
  title: step.title,
  description: typeof step.description === 'string' ? step.description : undefined,
}))

export const florissantLocatingContent: ServiceLocationPageContent = {
  seoTitle: 'Sewer Line Locating in Florissant, MO',
  metaDescription:
    'Sewer line locating for Florissant, MO properties. A locate estimates where the line runs. It is not a survey, a boundary, or permission to dig.',
  serviceDescription:
    'Sewer line locating estimates where an accessible underground sewer line runs, using a transmitter inside the line and a receiver at the surface, for properties in Florissant, Missouri. Results are estimates, not a survey.',
  heroImage: slots.hero,
  ctaImage: slots.cta,
  sources: florissantContent.sources,
  hero: {
    eyebrow: 'Florissant, MO',
    title: 'Sewer Line Locating in Florissant',
    intro: (
      <p>
        In Florissant, MSD says the lateral from your building to the public sewer, including its
        connection, is private property that the owner maintains, and the City&rsquo;s lateral
        program stops five feet from the foundation. Sewer line locating estimates where the
        accessible line runs, so you can plan digging, fencing or other work around it.
      </p>
    ),
  },
  body: (
    <>
      <h2>MSD calls the lateral private, and a locate does not find where it ends</h2>
      <p>
        MSD says the lateral line and its connection to the public sewer are private property. We
        did not find a published rule on who owns the part of a lateral under the street. The
        City&rsquo;s Sewer Lateral Insurance Program covers a defective lateral from the main to
        within five feet of the foundation, and the homeowner is responsible for the part inside the
        home and within five feet of it.
      </p>
      <p>
        A locate estimates the path of the accessible line the equipment could trace. It does not
        establish where the connection to the public sewer is or where the five-foot boundary falls,
        and it is not a survey or a property line. Ask the Engineering Division at (314) 839-7643
        (the City&rsquo;s number, not ours) how the program applies to your address.
      </p>

      <h2>Before anyone digs: the City&rsquo;s permit contact, then 811</h2>
      <p>
        Whether a plumbing or excavation permit applies to a planned project is a question for the
        City&rsquo;s Public Works at (314) 839-7648 (the City&rsquo;s number, not ours).
      </p>
      <p>
        A locate is an estimate for planning. It is not utility clearance or permission to dig, and
        it does not replace any approval the City requires. Before anyone digs, contact your state
        one-call program (often reached at 811) or your local utility and follow applicable
        requirements.
      </p>

      <h2>A sinkhole or a camera finding: a locate places the point, not the cause</h2>
      <p>
        The City says that when a cave-in or sinkhole is reported, it asks MSD to run a dye test.
        MSD makes the repair if the hole connects to the public sewer, and if it connects to your
        lateral you can apply to the City&rsquo;s program without a deposit. A locate may estimate
        where the accessible line runs near the hole. It does not show whether the hole connects to
        either sewer.
      </p>
      <p>
        When a camera shows a visible condition, locating may help estimate where that point sits at
        the surface, when the equipment supports it. Where along the line a defect sits matters in
        Florissant, because the program stops five feet from the foundation, but a locate does not
        tell you which side of that boundary a point is on.
      </p>

      <h2>Buying a Florissant home: the route is not the condition</h2>
      <p>
        The City says a property can be sold &ldquo;as is&rdquo; without a City inspection, and the
        buyer must then obtain and pay for the inspection and an occupancy permit. The occupancy
        page we reviewed does not mention sewers, so a buyer who wants evidence of the lateral has
        to ask for it. A locate can help a buyer weigh what could be built near the line. It does
        not show the line&rsquo;s condition. A pre-purchase sewer inspection does that, and findings
        are informational, not legal advice.
      </p>
    </>
  ),
  problems: [
    ...problems.map((p, i) => ({ ...p, image: slots.problems[i] })),
    {
      title: 'The City’s five-foot line',
      description:
        'The City’s program covers a defective lateral from the main to within five feet of the foundation. A locate estimates the route of the accessible line and does not establish where that boundary sits at your address.',
      image: slots.problems[3],
    },
  ],
  // Six items: renders as two rows of three.
  inclusions,
  process: steps,
  coverage: {
    title: 'Other St. Louis area locations',
    intro:
      'This page covers Florissant. Each St. Louis municipality has its own sewer rules and lateral program, so use the page for your address.',
    pageIds: [
      id('loc-stl-st-louis-city'),
      id('loc-stl-chesterfield'),
      id('loc-stl-ballwin'),
      id('loc-stl-st-charles'),
    ],
    availabilityStatement: 'Florissant is a service area, not an office location.',
  },
  // All relevant questions from the Florissant location page and the locating
  // service page (see `florissantLocatingFaq` above).
  faq: florissantLocatingFaq,
  relatedPageIds: [
    id('loc-stl-florissant'),
    id('svc-sewer-line-locating'),
    id('svc-sewer-camera-inspection'),
    id('svc-pre-purchase-sewer-inspection'),
  ],
  relatedTitle: 'Related pages',
  cta: {
    title: 'Request sewer line locating in Florissant',
    body: 'Plan around your lateral with an estimate of where it runs. A locate is not a survey or permission to dig.',
  },
}
