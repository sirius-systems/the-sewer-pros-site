/**
 * Henderson, NV + Sewer Line Locating (`sl-henderson-locating`).
 *
 * Authority: CLAUDE.md §22, §24; docs/14-content-specification.md §43.
 * Shape and quality bar: the `sl-henderson-camera` pilot in
 * `las-vegas-service-location.tsx`.
 *
 * One local source (`hendersonContent`, the City of Henderson page) times one
 * service source (`svc-sewer-line-locating`, `v2`). Nothing here is new
 * research. The audit of every source section is in
 * `docs/source-reports/henderson/sl-henderson-locating.md`.
 *
 * Body recipe (each card ties a Henderson fact to what a locate does or cannot):
 *   1. Responsibility - City connection rule + none-found program, vs. a locate
 *   2. Permits and digging - Public Works right-of-way permit, vs. 811 and "not
 *      permission to dig"
 *   3. Housing age - Census year built, vs. "where the line runs now"
 *   4. Buying - no sale rule found, vs. route is not condition
 *
 * ⚠ CITY NUMBERS ARE THE CITY'S. No company phone, office, price, offer,
 * response time or guarantee appears. A locate is an ESTIMATE: no accuracy,
 * depth, frequency or "finds" claim beyond the service page. The service
 * page's 811 wording is unverified there and is repeated only as written.
 */

import type { PageId, ProcessContent, ServiceLocationPageContent } from '@/types'
import { hendersonContent } from './las-vegas-henderson'
import { serviceContent } from './services'
import { mergeRelevantFaqs, pageImageSlots } from './service-location-shared'
import { inclusions, problems, shots } from './sl-blocks/sewer-line-locating'

const id = (value: string): PageId => value as PageId

const slots = pageImageSlots('sl-henderson-locating', {
  hero: {
    alt: 'Technician using a sewer line locator in a Henderson yard',
    shot: 'Technician with a locator receiver in a residential yard, paint marks on pavement, no identifiable address',
  },
  problems: shots,
})

const v2 = serviceContent[id('svc-sewer-line-locating')]?.v2
if (v2 === undefined || hendersonContent.faq === undefined) {
  throw new Error('sl-henderson-locating: source content is missing')
}

/**
 * Every question from the Henderson location page and the locating service
 * page, minus the ones named here (reasons in the source report).
 */
const hendersonLocatingFaq = mergeRelevantFaqs(
  hendersonContent.faq,
  v2.faq,
  [
    // Location page: a camera question the locating page does not own.
    'What does a sewer camera inspection show?',
    // Location page: about condition and a twenty-year-old house, not about route.
    'My house is only twenty years old. Is an inspection worth it?',
    // Location page: utility account transfer, unrelated to locating.
    'How do I transfer water and sewer service when I buy a home in Henderson?',
    // Service page: the Henderson sale question answers it for this city.
    'Does my city require a sewer inspection for a sale, remodel, or permit?',
    // Service page: about drain cleaning products, off the locating topic.
    'Should I use chemical drain cleaner on a sewer line clog?',
    // Service page: about cleaning and pipe health, off the locating topic.
    'If the line drains after cleaning, is the pipe healthy?',
  ],
  'In Henderson',
)

const steps: ProcessContent[] = (v2.process?.steps ?? []).map((step) => ({
  title: step.title,
  description: typeof step.description === 'string' ? step.description : undefined,
}))

export const hendersonLocatingContent: ServiceLocationPageContent = {
  seoTitle: 'Sewer Line Locating in Henderson, NV',
  metaDescription:
    'Sewer line locating for Henderson, NV properties. The City says the lateral is yours from the main connection. See what a locate estimates and what it is not.',
  serviceDescription:
    'Sewer line locating estimates where an accessible underground sewer line runs, using a transmitter inside the line and a receiver at the surface, for properties in the City of Henderson, Nevada. Results are estimates, not a survey.',
  heroImage: slots.hero,
  ctaImage: slots.cta,
  sources: hendersonContent.sources,
  hero: {
    eyebrow: 'Henderson, NV',
    title: 'Sewer Line Locating in Henderson',
    intro: (
      <p>
        In the City of Henderson, the sewer service lateral is the owner&rsquo;s from
        the point where it meets the City&rsquo;s main in the street, and the City
        pages we reviewed do not map where a lateral runs on your property. Sewer
        line locating estimates where the accessible line runs, so you can plan
        digging, fencing or other work around it.
      </p>
    ),
  },
  body: (
    <>
      <h2>A lateral that is yours, on a route the City does not map</h2>
      <p>
        The City says your responsibility for the sewer service lateral begins
        where it connects to the City&rsquo;s sewer main in the street, and that
        on your side you pay cleanup and repair costs, including street or
        driveway damage. The City pages we reviewed do not show where a lateral
        runs on a property, and we found no City lateral repair, grant or
        reimbursement program. That is &ldquo;none found&rdquo;, not a statement
        that none exists.
      </p>
      <p>
        A locate estimates the path of the accessible line the equipment could
        trace. It does not establish where the connection to the City main is, or
        where your responsibility begins, and it is not a survey.
      </p>

      <h2>Before anyone digs: Public Works, one-call and your estimate</h2>
      <p>
        For work in the public right-of-way, the City says Henderson Municipal
        Code 11.08.010 requires a permit from Public Works, and gives 702-267-3600
        (the City&rsquo;s number, not ours) for permit requirements. We have not
        reviewed the code text, and we found no City statement about permits for
        work wholly on private property.
      </p>
      <p>
        A locate is an estimate for planning. It is not utility clearance or
        permission to dig, and it does not replace a permit. Before anyone digs,
        contact your state one-call program (often reached at 811) or your local
        utility and follow applicable requirements.
      </p>

      <h2>Newer homes, and where the line runs today</h2>
      <p>
        Henderson&rsquo;s median year built is 2001, according to the U.S. Census
        Bureau&rsquo;s American Community Survey (2020-2024 5-year estimates,
        Henderson city), and our arithmetic on the Census rows puts 82.1 percent of
        housing units at 1990 or later. A lateral can be repaired, rerouted or replaced
        after a house is built, so the year built does not tell you where its line
        runs now.
      </p>
      <p>
        A locate estimates the route and the approximate depth of a point in the
        accessible line. It says nothing about the condition or material of the
        pipe. A camera inspection is the separate service that looks inside it.
      </p>

      <h2>Buying a Henderson home: the route is not the condition</h2>
      <p>
        We did not find a rule on the City pages we reviewed that requires a
        sewer lateral inspection, certification or seller disclosure when a home
        is sold. That is none found, not a confirmed absence, and it does not
        address state disclosure law. After closing the lateral is the
        owner&rsquo;s, which means yours.
      </p>
      <p>
        A locate can help a buyer weigh what could be built or changed near the
        line. It does not show the line&rsquo;s condition. A pre-purchase sewer
        inspection does that, and the findings are informational, not legal advice.
      </p>
    </>
  ),
  problems: [
    ...problems.map((p, i) => ({ ...p, image: slots.problems[i] })),
    {
      title: 'The City puts the lateral on the owner, and does not map it',
      description:
        'The City says the sewer service lateral is yours from the connection in the street to your home, and the City pages we reviewed do not show where a lateral runs on a property. A locate estimates the route of the accessible line.',
      image: slots.problems[3],
    },
  ],
  // Six items: renders as two rows of three.
  inclusions,
  process: steps,
  coverage: {
    title: 'Other Las Vegas Valley areas',
    intro:
      'This page covers the City of Henderson. Sewer agencies and lateral rules differ across the Las Vegas Valley, so use the page for your address.',
    pageIds: [
      id('loc-lv-las-vegas'),
      id('loc-lv-north-las-vegas'),
      id('loc-lv-summerlin'),
    ],
    availabilityStatement: 'Henderson is a service area, not an office location.',
  },
  // All relevant questions from the Henderson location page and the locating
  // service page (see `hendersonLocatingFaq` above).
  faq: hendersonLocatingFaq,
  relatedPageIds: [
    id('loc-lv-henderson'),
    id('svc-sewer-line-locating'),
    id('svc-sewer-camera-inspection'),
    id('svc-pre-purchase-sewer-inspection'),
  ],
  relatedTitle: 'Related pages',
  cta: {
    title: 'Request sewer line locating in Henderson',
    body: 'Plan around your lateral with an estimate of where it runs. A locate is not a survey or permission to dig.',
  },
}
