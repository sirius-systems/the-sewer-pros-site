/**
 * City of Las Vegas, NV + Sewer Line Locating (`sl-lv-city-locating`).
 *
 * Built from exactly two sources, as `sl-henderson-locating` is:
 *   LOCATION  `lasVegasCityContent`  (content/pages/las-vegas-las-vegas.tsx)
 *   SERVICE   `svc-sewer-line-locating` v2 content (content/pages/services.tsx)
 *             and `./sl-blocks/sewer-line-locating`
 *
 * Section recipe (each ties a City of Las Vegas fact to what THIS service does
 * or cannot do; swap the city or the service and the copy breaks):
 *   1. Route and the City map - owner's lateral to the main, under the street;
 *                               the City's sewer map does not show every private
 *                               line, so a locate fills that gap but does not
 *                               find the connection.
 *   2. Before anyone digs     - Building & Safety permit material (the CITY's
 *                               number) + the service's one-call wording.
 *   3. Housing age            - ACS figures vs. where a line runs today, and
 *                               "does the City serve your address".
 *   4. Buying                 - no sale rule found; route is not condition.
 *
 * ⚠ CITY NUMBERS ARE THE CITY'S, not ours. No price, offer, response time,
 * guarantee, emergency or same-day claim. Las Vegas is a service area, not an
 * office. Repair and replacement are never presented as offered. A locate is an
 * ESTIMATE, not a survey, utility clearance or permission to dig.
 */

import type { PageId, ProcessContent, ServiceLocationPageContent } from '@/types'
import { lasVegasCityContent } from './las-vegas-las-vegas'
import { serviceContent } from './services'
import { mergeRelevantFaqs, pageImageSlots } from './service-location-shared'
import { inclusions, problems, shots } from './sl-blocks/sewer-line-locating'

const id = (value: string): PageId => value as PageId

const slots = pageImageSlots('sl-lv-city-locating', {
  hero: {
    alt: 'Technician using a sewer line locator in a Las Vegas yard',
    shot: 'Technician with a locator receiver in a residential yard, paint marks on pavement, no identifiable address',
  },
  problems: shots,
})

const v2 = serviceContent[id('svc-sewer-line-locating')]?.v2
if (v2 === undefined || lasVegasCityContent.faq === undefined) {
  throw new Error('sl-lv-city-locating: source content is missing')
}

/**
 * Every question from the Las Vegas location page and the locating service
 * page, minus the ones named here (reasons in the source report).
 */
const lasVegasLocatingFaq = mergeRelevantFaqs(
  lasVegasCityContent.faq,
  v2.faq,
  [
    // Location page: a camera question the locating page does not own.
    'What does a sewer camera inspection show?',
    // Service page: the Las Vegas sale question answers it for this city.
    'Does my city require a sewer inspection for a sale, remodel, or permit?',
    // Service page: about drain cleaning products, off the locating topic.
    'Should I use chemical drain cleaner on a sewer line clog?',
    // Service page: about cleaning and pipe health, off the locating topic.
    'If the line drains after cleaning, is the pipe healthy?',
  ],
  'In Las Vegas',
)

const steps: ProcessContent[] = (v2.process?.steps ?? []).map((step) => ({
  title: step.title,
  description: typeof step.description === 'string' ? step.description : undefined,
}))

export const lasVegasCityLocatingContent: ServiceLocationPageContent = {
  seoTitle: 'Sewer Line Locating in Las Vegas, NV',
  metaDescription:
    'Sewer line locating for Las Vegas, NV properties. The City says your lateral is yours up to its main, even under the street. See what a locate is and is not.',
  serviceDescription:
    'Sewer line locating estimates where an accessible underground sewer line runs, using a transmitter inside the line and a receiver at the surface, for properties in the City of Las Vegas, Nevada. Results are estimates, not a survey.',
  heroImage: slots.hero,
  ctaImage: slots.cta,
  sources: lasVegasCityContent.sources,
  hero: {
    eyebrow: 'Las Vegas, NV',
    title: 'Sewer Line Locating in Las Vegas',
    intro: (
      <p>
        In the City of Las Vegas, the owner maintains the private sewer lateral up to the point
        where it connects into the City&rsquo;s main, and the City&rsquo;s sewer map does not show
        every private line on a property. Sewer line locating estimates where the accessible line
        runs, so you can plan digging, fencing or other work around it.
      </p>
    ),
  },
  body: (
    <>
      <h2>A lateral that can run under the street, on a map that does not show it all</h2>
      <p>
        The City of Las Vegas says private property owners maintain private sewer laterals up to
        the point where they connect into the City sewer main, and its sewer standards addenda say
        a private sewer stays private, even the portion in the public right-of-way, until that
        connection. The City&rsquo;s sanitary sewer map has a layer for privately maintained lines
        but does not show every private line on a property, so a locating service can fill that
        gap.
      </p>
      <p>
        A locate estimates the path of the accessible line the equipment could trace. It does not
        establish where the connection to the City main is. For that, the City says Sanitary Sewer
        Engineering handles requests for the nearest public sewer location and point-of-connection
        conditions (702-229-6541, the City&rsquo;s number, not ours). A locate is not a survey.
      </p>

      <h2>Before anyone digs: Building &amp; Safety, one-call and your estimate</h2>
      <p>
        The City lists &ldquo;building water and sewer repairs/replacements (no new
        connections)&rdquo; as an online permit category and says work not on its online list
        needs plans submitted and reviewed. Ask Building &amp; Safety at 702-229-6251 (the
        City&rsquo;s number) which approvals apply before you pay for work on a lateral or in the
        street.
      </p>
      <p>
        A locate is an estimate for planning. It is not utility clearance or permission to dig,
        and it does not replace a permit. Before anyone digs, contact your state one-call program
        (often reached at 811) or your local utility and follow applicable requirements.
      </p>

      <h2>Las Vegas homes, and where the line runs today</h2>
      <p>
        Las Vegas&rsquo;s median year built is 1994, according to the U.S. Census Bureau&rsquo;s
        American Community Survey (2020-2024 5-year estimates, Las Vegas city), and our arithmetic
        on the Census rows puts 61.3 percent of housing units at 1990 or later. A lateral can be
        repaired, rerouted or replaced after a house is built, so the year built does not tell
        you where its line runs now.
      </p>
      <p>
        A Las Vegas mailing address does not by itself show that the City serves a property, so
        check with Sanitary Sewer Engineering before you rely on any City rule here. A locate
        estimates the route and approximate depth of a point in the accessible line. It says
        nothing about the pipe&rsquo;s condition. A camera inspection is the separate service that
        looks inside it.
      </p>

      <h2>Buying a Las Vegas home: the route is not the condition</h2>
      <p>
        We did not find a rule on the City pages we reviewed that requires a sewer lateral
        inspection, certification or seller disclosure when a home is sold. That is none found,
        not a confirmed absence, and it does not address state disclosure law. After closing the
        lateral is the owner&rsquo;s, which means yours.
      </p>
      <p>
        A locate can help a buyer weigh what could be built near the line. It does not show the
        line&rsquo;s condition. A pre-purchase sewer inspection does that, and findings are
        informational, not legal advice.
      </p>
    </>
  ),
  problems: [
    ...problems.map((p, i) => ({ ...p, image: slots.problems[i] })),
    {
      title: 'The City puts the lateral on the owner, even under the street',
      description:
        'The City’s sewer standards addenda say a private sewer stays private through the public right-of-way until it connects to the main, and its sewer map does not show every private line on a property. A locate estimates the route of the accessible line.',
      image: slots.problems[3],
    },
  ],
  // Six items: renders as two rows of three.
  inclusions,
  process: steps,
  coverage: {
    title: 'Other Las Vegas Valley areas',
    intro:
      'This page covers the City of Las Vegas. Sewer agencies and lateral rules differ across the Las Vegas Valley, so use the page for your address.',
    pageIds: [id('loc-lv-henderson'), id('loc-lv-north-las-vegas'), id('loc-lv-summerlin')],
    availabilityStatement: 'Las Vegas is a service area, not an office location.',
  },
  // All relevant questions from the Las Vegas location page and the locating
  // service page (see `lasVegasLocatingFaq` above).
  faq: lasVegasLocatingFaq,
  relatedPageIds: [
    id('loc-lv-las-vegas'),
    id('svc-sewer-line-locating'),
    id('svc-sewer-camera-inspection'),
    id('svc-pre-purchase-sewer-inspection'),
  ],
  relatedTitle: 'Related pages',
  cta: {
    title: 'Request sewer line locating in Las Vegas',
    body: 'Plan around your lateral with an estimate of where it runs. A locate is not a survey or permission to dig.',
  },
}
