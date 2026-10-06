/**
 * Ballwin, MO + Sewer Line Locating (`sl-ballwin-locating`).
 *
 * Built from exactly two sources, as `sl-lv-city-locating` is:
 *   LOCATION  `ballwinContent`  (content/pages/st-louis-ballwin.tsx)
 *   SERVICE   `svc-sewer-line-locating` v2 content (content/pages/services.tsx)
 *             and `./sl-blocks/sewer-line-locating`
 *
 * Section recipe (each ties a Ballwin fact to what THIS service does or
 * cannot do; swap the city or the service and the copy breaks):
 *   1. Where the lateral starts and ends - MSD owns the main, the lateral and
 *                               its connection are private, and the City's
 *                               program starts the lateral at the outside wall.
 *                               A locate estimates the accessible route only.
 *   2. Before anyone digs     - Public Works and Inspections (the CITY's
 *                               numbers) + the service's one-call wording.
 *   3. Clay laterals and a 1976 median - year built vs. where a line runs
 *                               today, and "which utility serves your address".
 *   4. Buying                 - occupancy permit, no lateral rule found, the
 *                               program does not pay for video. Route is not
 *                               condition.
 *
 * ⚠ CITY, MSD AND DOLLAR NUMBERS ARE THEIRS, not ours. No price, offer,
 * response time, guarantee, emergency or same-day claim. Ballwin is a service
 * area, not an office. Repair and replacement are never presented as offered.
 * A locate is an ESTIMATE, not a survey, utility clearance or permission to dig.
 * Ballwin facts only: nothing from another St. Louis municipality or from MSD's
 * St. Louis City system is carried over.
 */

import type { PageId, ProcessContent, ServiceLocationPageContent } from '@/types'
import { ballwinContent } from './st-louis-ballwin'
import { serviceContent } from './services'
import { mergeRelevantFaqs, pageImageSlots } from './service-location-shared'
import { inclusions, problems, shots } from './sl-blocks/sewer-line-locating'

const id = (value: string): PageId => value as PageId

const slots = pageImageSlots('sl-ballwin-locating', {
  hero: {
    alt: 'Technician using a sewer line locator in a residential yard',
    shot: 'Technician with a locator receiver in a residential yard, paint marks on pavement, no identifiable address',
  },
  problems: shots,
})

const v2 = serviceContent[id('svc-sewer-line-locating')]?.v2
if (v2 === undefined || ballwinContent.faq === undefined) {
  throw new Error('sl-ballwin-locating: source content is missing')
}

/**
 * Every question from the Ballwin location page and the locating service
 * page, minus the ones named here (reasons in the source report).
 */
const ballwinLocatingFaq = mergeRelevantFaqs(
  ballwinContent.faq,
  v2.faq,
  [
    // Location page: a camera question the locating page does not own.
    'What does a sewer camera inspection show?',
    // Service page: the Ballwin occupancy question answers it for this city.
    'Does my city require a sewer inspection for a sale, remodel, or permit?',
    // Service page: about drain cleaning products, off the locating topic.
    'Should I use chemical drain cleaner on a sewer line clog?',
    // Service page: about cleaning and pipe health, off the locating topic.
    'If the line drains after cleaning, is the pipe healthy?',
  ],
  'In Ballwin',
)

const steps: ProcessContent[] = (v2.process?.steps ?? []).map((step) => ({
  title: step.title,
  description: typeof step.description === 'string' ? step.description : undefined,
}))

export const ballwinLocatingContent: ServiceLocationPageContent = {
  seoTitle: 'Sewer Line Locating in Ballwin, MO',
  metaDescription:
    'Sewer line locating for Ballwin, MO properties. The lateral from the house wall to MSD’s main is the owner’s. See what a locate is and is not.',
  serviceDescription:
    'Sewer line locating estimates where an accessible underground sewer line runs, using a transmitter inside the line and a receiver at the surface, for properties in Ballwin, Missouri. Results are estimates, not a survey.',
  heroImage: slots.hero,
  ctaImage: slots.cta,
  sources: ballwinContent.sources,
  hero: {
    eyebrow: 'Ballwin, MO',
    title: 'Sewer Line Locating in Ballwin',
    intro: (
      <p>
        In Ballwin, the lateral that connects your building to MSD&rsquo;s sewer main, including its
        connection, is private property, and the City&rsquo;s repair program counts the lateral from
        the outside wall of the house to that main. Sewer line locating estimates where the
        accessible part of that line runs, so you can plan digging, fencing or other work around it.
      </p>
    ),
  },
  body: (
    <>
      <h2>From the outside wall to MSD&rsquo;s main, and what a locate can trace of it</h2>
      <p>
        MSD owns and maintains the public sewer main in Ballwin. MSD says the lateral line that
        connects your building to that main, including its connection, is private property and the
        owner&rsquo;s to maintain. Ballwin&rsquo;s own program defines its eligible lateral as
        starting at the outside wall of the house and continuing to the MSD main, and it leaves the
        &ldquo;building sewer&rdquo; under the house outside the program.
      </p>
      <p>
        A locate estimates the path of the accessible line the equipment could trace. Where the
        camera cannot pass, that part of the line is not traced. A locate is not a survey.
      </p>

      <h2>Before anyone digs: Public Works, Inspections and one-call</h2>
      <p>
        Ballwin Public Works, at (636) 227-9000, takes questions about sanitary sewer repair permits
        and excavation in the street right-of-way. The Inspections Department, at (636) 227-2129,
        handles the Sewer Lateral Repair Program and building permits, and the City says a program
        contractor obtains a plumbing permit before work begins (all the City&rsquo;s numbers, not
        ours).
      </p>
      <p>
        A locate is an estimate for planning. It is not utility clearance or permission to dig, and
        it does not replace a permit. Before anyone digs, contact your state one-call program (often
        reached at 811) or your local utility and follow applicable requirements.
      </p>

      <h2>Clay laterals, a 1976 median, and where the line runs today</h2>
      <p>
        Ballwin says most older sewer laterals in the city are clay pipe, which can crack, separate
        at joints and let roots in while the line still works normally. The median year built is
        1976, according to the U.S. Census Bureau&rsquo;s American Community Survey (2019-2023
        5-year estimates, City of Ballwin as a whole). The City&rsquo;s program exists to repair
        failed lateral sections, so a line can have a history after the house was built, and the
        year built does not tell you where it runs now.
      </p>
      <p>
        A locate estimates the route and approximate depth of a point in the accessible line. It
        says nothing about the pipe&rsquo;s condition, and a camera inspection is the separate
        service that looks inside it. Which utility serves a specific address, such as a property
        near a service boundary, should be confirmed by address with MSD.
      </p>

      <h2>Buying a Ballwin home: the route is not the condition</h2>
      <p>
        Ballwin requires an inspection and an Occupancy Permit before a new resident, tenant or
        business occupies a building. In the City materials we reviewed we found no sewer lateral
        inspection or certification tied to that process. That is none found, not a confirmed
        absence, and it does not address state disclosure law.
      </p>
      <p>
        The City also says its lateral program is not intended to satisfy a home sale contingency
        and does not pay for a video of the lateral. A locate can help a buyer weigh what could be
        built near the line. It does not show the line&rsquo;s condition. A pre-purchase sewer
        inspection does that, and findings are informational, not legal advice.
      </p>
    </>
  ),
  problems: [
    ...problems.map((p, i) => ({ ...p, image: slots.problems[i] })),
    {
      title: 'The City’s lateral starts at the outside wall',
      description:
        'Ballwin’s program counts the lateral from the outside wall of the house to the MSD main and leaves out the building sewer under the house. A locate estimates the route of the part of the line the equipment can trace.',
      image: slots.problems[3],
    },
  ],
  // Six items: renders as two rows of three.
  inclusions,
  process: steps,
  coverage: {
    title: 'Other St. Louis area locations',
    intro:
      'This page covers Ballwin. Sewer agencies and lateral rules differ from place to place, so use the page for your address.',
    pageIds: [
      id('loc-stl-st-louis-city'),
      id('loc-stl-chesterfield'),
      id('loc-stl-st-charles'),
      id('loc-stl-florissant'),
    ],
    availabilityStatement: 'Ballwin is a service area, not an office location.',
  },
  // All relevant questions from the Ballwin location page and the locating
  // service page (see `ballwinLocatingFaq` above).
  faq: ballwinLocatingFaq,
  relatedPageIds: [
    id('loc-stl-ballwin'),
    id('svc-sewer-line-locating'),
    id('svc-sewer-camera-inspection'),
    id('svc-pre-purchase-sewer-inspection'),
  ],
  relatedTitle: 'Related pages',
  cta: {
    title: 'Request sewer line locating in Ballwin',
    body: 'Plan around your lateral with an estimate of where it runs. A locate is not a survey or permission to dig.',
  },
}
