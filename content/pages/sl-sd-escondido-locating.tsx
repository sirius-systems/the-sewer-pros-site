/**
 * Escondido, CA + Sewer Line Locating (`sl-escondido-locating`).
 *
 * Authority: CLAUDE.md sections 9, 22, 24; docs/14-content-specification.md.
 * Built from exactly two sources, as `sl-sd-san-marcos-locating` is:
 *   LOCAL    `escondidoContent` (`loc-sd-escondido`)
 *   SERVICE  `svc-sewer-line-locating` v2 content (content/pages/services.tsx)
 *            and `./sl-blocks/sewer-line-locating`
 * Nothing here is new research. Stays consistent with `sl-escondido-cleaning`
 * on section 22-165 and the owner-cost wording.
 *
 * Section recipe (each section ties an Escondido fact to what a locate does):
 *   1. Which agency          - City, Vallecitos, septic; no City map; a locate
 *                              does not show which serves an address
 *   2. The connection        - 22-165(e) owner's duty to the connection; a locate
 *                              estimates the traceable route, not the connection
 *                              or a property line, and not pipe condition
 *   3. Right-of-way          - 22-165(d) bars others excavating a lateral in the
 *                              public right-of-way; City repair and encroachment
 *                              permits; a locate is not a permit
 *   4. Before anyone digs    - 811 wording from the service page; not clearance;
 *                              no program found; we do not repair
 *
 * ⚠ NEVER SAYS WHICH AGENCY SERVES AN ADDRESS. CITY NUMBERS ARE THE CITY'S. The
 * code is quoted for at most nine words. Never says who may perform lateral
 * repair. No company phone, price, offer, response time, guarantee, emergency
 * or same-day claim, equipment spec or office. A locate is an ESTIMATE, not a
 * survey, utility clearance or permission to dig.
 */

import type { PageId, ProcessContent, ServiceLocationPageContent } from '@/types'
import { escondidoContent } from './san-diego-escondido'
import { serviceContent } from './services'
import { mergeRelevantFaqs, pageImageSlots } from './service-location-shared'
import { inclusions, problems, shots } from './sl-blocks/sewer-line-locating'

const id = (value: string): PageId => value as PageId

const v2 = serviceContent[id('svc-sewer-line-locating')]?.v2
if (v2 === undefined || escondidoContent.faq === undefined) {
  throw new Error('sl-sd-escondido-locating: source content is missing')
}

const steps: ProcessContent[] = (v2.process?.steps ?? []).map((step) => ({
  title: step.title,
  description: typeof step.description === 'string' ? step.description : undefined,
}))

const slots = pageImageSlots('sl-escondido-locating', {
  hero: {
    alt: 'Technician using a sewer line locator receiver in a residential yard',
    shot: 'Technician with a locator receiver in a residential yard, paint marks on pavement, no identifiable address',
  },
  problems: shots,
})

/**
 * Every question from the Escondido location page and the locating service
 * page, minus the ones named here (reasons in the source report).
 */
const faq = mergeRelevantFaqs(
  escondidoContent.faq,
  v2.faq,
  [
    // Location page: a camera question the locating page does not own.
    'What does a sewer camera inspection show?',
    // Service page: the Escondido sale question answers it for this city.
    'Does my city require a sewer inspection for a sale, remodel, or permit?',
    // Service page: about drain cleaning products, off the locating topic.
    'Should I use chemical drain cleaner on a sewer line clog?',
    // Service page: about cleaning and pipe health, off the locating topic.
    'If the line drains after cleaning, is the pipe healthy?',
  ],
  'In Escondido',
)

export const escondidoLocatingContent: ServiceLocationPageContent = {
  seoTitle: 'Sewer Line Locating in Escondido, CA',
  metaDescription:
    'Sewer line locating for Escondido, CA properties. The owner’s lateral runs to the City’s main under Code 22-165. See what a locate is and what it is not.',
  serviceDescription:
    'Sewer line locating estimates where an accessible underground sewer line runs, using a transmitter inside the line and a receiver at the surface, for properties in Escondido, California. Results are estimates, not a survey.',
  heroImage: slots.hero,
  ctaImage: slots.cta,
  sources: escondidoContent.sources,
  hero: {
    eyebrow: 'Escondido, CA',
    title: 'Sewer Line Locating in Escondido',
    intro: (
      <p>
        Section 22-165 of the Escondido Municipal Code puts the sewer lateral on the property owner,
        up to and including the connection to the City&rsquo;s main. Sewer line locating estimates
        where that accessible line runs, so you can plan digging, fencing or planting around it.
      </p>
    ),
  },
  body: (
    <>
      <h2>A locate shows the route, not which agency serves the address</h2>
      <p>
        The City&rsquo;s code and numbers apply to addresses on the City of Escondido&rsquo;s sewer
        system. Vallecitos Water District serves parts of Escondido, and some properties are on
        septic. We found no City map of its sewer service area, and we do not say which applies to
        your address. Ask City Public Works.
      </p>
      <p>
        A locate estimates the path of the part of the line the equipment can trace. It is an
        estimate for planning, not a survey, and it does not tell you which agency serves the
        parcel.
      </p>

      <h2>The owner&rsquo;s duty runs to the connection, and a locate does not place it</h2>
      <p>
        Section 22-165(e) makes maintenance of the lateral &ldquo;up to and including the connection
        to the main&rdquo; the private owner&rsquo;s sole responsibility. The City&rsquo;s FAQ
        describes the owner&rsquo;s part as running from the house up to the point of connection
        with the public sanitary sewer main.
      </p>
      <p>
        A locate can estimate the route of the accessible line from an access point such as a
        cleanout. It does not establish where the connection to the main is or where a property line
        runs, and it does not tell you the condition of the pipe. A camera inspection does that.
      </p>

      <h2>The street is the City&rsquo;s to dig, and a locate is not a permit</h2>
      <p>
        Section 22-165(d) bars anyone other than the City, or someone working by agreement or
        contract with the City, from excavating for or exposing a lateral inside a public
        right-of-way. The City says a repair permit is required before any lateral repair begins,
        even on private property, and that digging in a street also needs an encroachment permit.
      </p>
      <p>
        The City gives its Building Division at (760) 839-4647 for repair permits and its Field
        Engineering Office at (760) 839-4664 for encroachment permits (the City&rsquo;s numbers, not
        ours). A locate does not replace either, and we make no claim that it satisfies one.
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
        and we found no City lateral repair or grant program. That is none found, not a statement
        that none exists.
      </p>
    </>
  ),
  problems: [
    ...problems.map((p, i) => ({ ...p, image: slots.problems[i] })),
    {
      title: 'Planning a dig near the lateral',
      description:
        'Section 22-165 runs the owner’s duty up to and including the connection to the City’s main. An estimated route helps you choose where to fence, plant or dig. It does not show the connection point, the property line or the pipe’s condition.',
      image: slots.problems[3],
    },
  ],
  inclusions,
  process: steps,
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
  faq,
  relatedPageIds: [
    id('loc-sd-escondido'),
    id('svc-sewer-line-locating'),
    id('svc-sewer-camera-inspection'),
    id('svc-pre-purchase-sewer-inspection'),
  ],
  relatedTitle: 'Related pages',
  cta: {
    title: 'Request sewer line locating in Escondido',
    body: 'Plan around your lateral with an estimate of where it runs. A locate is not a survey or permission to dig.',
  },
}
