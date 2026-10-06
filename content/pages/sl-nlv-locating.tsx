/**
 * City of North Las Vegas, NV + Sewer Line Locating (`sl-nlv-locating`).
 *
 * Built from exactly two sources, as `sl-lv-city-locating` is:
 *   LOCATION  `northLasVegasContent`  (content/pages/las-vegas-north-las-vegas.tsx)
 *   SERVICE   `svc-sewer-line-locating` v2 content (content/pages/services.tsx)
 *             and `./sl-blocks/sewer-line-locating`
 *
 * Section recipe (each ties a North Las Vegas fact to what THIS service does
 * or cannot do; swap the city or the service and the copy breaks):
 *   1. The City's boundary   - the lateral ends at the connection to the main,
 *                              and a breakage runs to the property boundary;
 *                              a locate finds neither point and is not a survey.
 *   2. Before anyone digs    - no City permit statement found, so ask the
 *                              Utilities Department (the CITY's number) + the
 *                              service's one-call wording.
 *   3. A City-side finding   - a plumber's video may go to the City; a locate
 *                              can place a point at the surface but cannot say
 *                              which side of the connection it is on.
 *   4. Buying                - no sale rule found; route is not condition.
 *
 * ⚠ CITY NUMBER IS THE CITY'S, not ours. No price, offer, response time,
 * guarantee, emergency or same-day claim. North Las Vegas is a service area,
 * not an office. Repair and replacement are never presented as offered. A
 * locate is an ESTIMATE, not a survey, utility clearance or permission to dig.
 * The location page names no City sewer map, so none is mentioned here.
 */

import type { PageId, ProcessContent, ServiceLocationPageContent } from '@/types'
import { northLasVegasContent } from './las-vegas-north-las-vegas'
import { serviceContent } from './services'
import { mergeRelevantFaqs, pageImageSlots } from './service-location-shared'
import { inclusions, problems, shots } from './sl-blocks/sewer-line-locating'

const id = (value: string): PageId => value as PageId

const slots = pageImageSlots('sl-nlv-locating', {
  hero: {
    alt: 'Technician using a sewer line locator in a North Las Vegas yard',
    shot: 'Technician with a locator receiver in a residential yard, paint marks on pavement, no identifiable address',
  },
  problems: shots,
})

const v2 = serviceContent[id('svc-sewer-line-locating')]?.v2
if (v2 === undefined || northLasVegasContent.faq === undefined) {
  throw new Error('sl-nlv-locating: source content is missing')
}

/**
 * Every question from the North Las Vegas location page and the locating
 * service page, minus the ones named here (reasons in the source report).
 */
const northLasVegasLocatingFaq = mergeRelevantFaqs(
  northLasVegasContent.faq,
  v2.faq,
  [
    // Location page: a camera question the locating page does not own.
    'What does a sewer camera inspection show?',
    // Service page: the North Las Vegas sale question answers it for this city.
    'Does my city require a sewer inspection for a sale, remodel, or permit?',
    // Service page: about drain cleaning products, off the locating topic.
    'Should I use chemical drain cleaner on a sewer line clog?',
    // Service page: about cleaning and pipe health, off the locating topic.
    'If the line drains after cleaning, is the pipe healthy?',
  ],
  'In North Las Vegas',
)

const steps: ProcessContent[] = (v2.process?.steps ?? []).map((step) => ({
  title: step.title,
  description: typeof step.description === 'string' ? step.description : undefined,
}))

export const northLasVegasLocatingContent: ServiceLocationPageContent = {
  seoTitle: 'Sewer Line Locating in North Las Vegas, NV',
  metaDescription:
    'Sewer line locating for North Las Vegas, NV properties. The City says your lateral is yours up to its main. See what a locate is and what it is not.',
  serviceDescription:
    'Sewer line locating estimates where an accessible underground sewer line runs, using a transmitter inside the line and a receiver at the surface, for properties in the City of North Las Vegas, Nevada. Results are estimates, not a survey.',
  heroImage: slots.hero,
  ctaImage: slots.cta,
  sources: northLasVegasContent.sources,
  hero: {
    eyebrow: 'North Las Vegas, NV',
    title: 'Sewer Line Locating in North Las Vegas',
    intro: (
      <p>
        In the City of North Las Vegas, the City says the homeowner&rsquo;s responsibility for the
        sewer service lateral ends at the connection to the main in the street, and it does not say
        where that sits at any address. Sewer line locating estimates where the accessible line
        runs, so you can plan digging, fencing or other work around it.
      </p>
    ),
  },
  body: (
    <>
      <h2>The City ends your lateral at its main, and a locate does not find that connection</h2>
      <p>
        The City of North Las Vegas says the homeowner&rsquo;s responsibility for the sewer service
        lateral ends at the connection to the main in the street. Its water leaks page also says
        that, for a breakage, the homeowner is responsible until the point where the sewer line
        crosses the boundary of the property. It does not say where either point sits at any
        address.
      </p>
      <p>
        A locate estimates the path of the accessible line the equipment could trace. It does not
        establish where the connection to the City main is, and it is not a survey or a boundary
        line. Ask the Utilities Department how the City&rsquo;s wording applies to your address.
      </p>

      <h2>Before anyone digs: no City permit statement found, so ask, then call 811</h2>
      <p>
        We found no City statement on whether lateral work needs a permit or inspection. Ask the
        Utilities Department at 702-633-1484 (the City&rsquo;s number, not ours) which rules apply
        before you pay for work in the street or on a lateral. It is the City&rsquo;s
        customer-service number, not a sewer emergency line.
      </p>
      <p>
        A locate is an estimate for planning. It is not utility clearance or permission to dig,
        and it does not replace any approval the City requires. Before anyone digs, contact your
        state one-call program (often reached at 811) or your local utility and follow applicable
        requirements.
      </p>

      <h2>A problem on the City side: a locate can place the point, not say whose it is</h2>
      <p>
        The City says that if a plumber has inspected the line and determined a breakage or
        blockage is on the City side, video evidence may be submitted to the Utilities Department
        for review. We did not find how the video is submitted or what the City does afterward.
      </p>
      <p>
        When a camera shows a visible condition, locating may help estimate where that point sits
        at the surface, when the equipment supports it. That tells you where the point is, not
        which side of the connection it is on. A camera inspection is the separate service that
        records the line.
      </p>

      <h2>Buying a North Las Vegas home: the route is not the condition</h2>
      <p>
        We did not find a rule on the City pages we reviewed that requires a sewer lateral
        inspection, certification or seller disclosure when a home is sold. That is none found,
        not a confirmed absence, and it does not address state disclosure law. After closing, the
        lateral up to the connection to the main is the owner&rsquo;s under the City&rsquo;s
        wording, which means yours.
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
      title: 'The City words the lateral boundary two ways',
      description:
        'For a blockage, the City says the homeowner is responsible throughout the entire pipe until the connection to its main. For a breakage, until the sewer line crosses the boundary of the property. A locate estimates the route of the accessible line and does not establish either point.',
      image: slots.problems[3],
    },
  ],
  // Six items: renders as two rows of three.
  inclusions,
  process: steps,
  coverage: {
    title: 'Other Las Vegas Valley areas',
    intro:
      'This page covers North Las Vegas. Sewer agencies and lateral rules differ across the Las Vegas Valley, so use the page for your address.',
    pageIds: [id('loc-lv-las-vegas'), id('loc-lv-henderson'), id('loc-lv-summerlin')],
    availabilityStatement: 'North Las Vegas is a service area, not an office location.',
  },
  // All relevant questions from the North Las Vegas location page and the
  // locating service page (see `northLasVegasLocatingFaq` above).
  faq: northLasVegasLocatingFaq,
  relatedPageIds: [
    id('loc-lv-north-las-vegas'),
    id('svc-sewer-line-locating'),
    id('svc-sewer-camera-inspection'),
    id('svc-pre-purchase-sewer-inspection'),
  ],
  relatedTitle: 'Related pages',
  cta: {
    title: 'Request sewer line locating in North Las Vegas',
    body: 'Plan around your lateral with an estimate of where it runs. A locate is not a survey or permission to dig.',
  },
}
