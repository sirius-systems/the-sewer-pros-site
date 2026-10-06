/**
 * Carlsbad, CA + Sewer Line Locating (`sl-carlsbad-locating`).
 *
 * Authority: CLAUDE.md §9, §22, §24; docs/14-content-specification.md §43, §79.
 * Built from exactly two sources, as `sl-sd-chula-vista-locating` is:
 *   LOCAL    `carlsbadContent` (`loc-sd-carlsbad`)
 *   SERVICE  `svc-sewer-line-locating` v2 content (content/pages/services.tsx)
 *            and `./sl-blocks/sewer-line-locating`
 * Nothing here is new research.
 *
 * Section recipe (each section ties a Carlsbad fact to what a locate does):
 *   1. Where the line ends - City: building to main, typically in the street;
 *      Vallecitos: through the point of connection; Leucadia: the physical
 *      connection; a locate estimates the route, not any of those
 *   2. The cleanout - City: usually 3-5 ft from the building, cap stays on; a
 *      locate can start from it but does not place the main
 *   3. Before work - City permits; Leucadia form and right-of-way permits;
 *      Vallecitos does not install private connections; one-call wording
 *   4. Grants - Leucadia staff see work in progress; a locate is not repair or a
 *      grant document; no balance published
 *
 * ⚠ CARLSBAD HAS THREE SEWER AGENCIES. Each agency's wording is stated separately.
 * NEVER SAYS WHICH AGENCY SERVES AN ADDRESS. GRANT AVAILABILITY IS NEVER STATED.
 * AGENCY NUMBERS ARE THE AGENCIES'. No company phone, price, offer, response time,
 * guarantee, emergency or same-day claim, equipment spec or office. A locate is an
 * ESTIMATE, not a survey, utility clearance or permission to dig.
 */

import type { PageId, ProcessContent, ServiceLocationPageContent } from '@/types'
import { carlsbadContent } from './san-diego-carlsbad'
import { serviceContent } from './services'
import { mergeRelevantFaqs, pageImageSlots } from './service-location-shared'
import { inclusions, problems, shots } from './sl-blocks/sewer-line-locating'

const id = (value: string): PageId => value as PageId

const slots = pageImageSlots('sl-carlsbad-locating', {
  hero: {
    alt: 'Technician using a sewer line locator receiver in a residential yard',
    shot: 'Technician with a locator receiver in a residential yard, paint marks on pavement, no identifiable address',
  },
  problems: shots,
})

const v2 = serviceContent[id('svc-sewer-line-locating')]?.v2
if (v2 === undefined || carlsbadContent.faq === undefined) {
  throw new Error('sl-sd-carlsbad-locating: source content is missing')
}

/**
 * Every question from the Carlsbad location page and the locating service
 * page, minus the ones named here (reasons in the source report).
 */
const carlsbadLocatingFaq = mergeRelevantFaqs(
  carlsbadContent.faq,
  v2.faq,
  [
    // Location page: a camera question the locating page does not own.
    'What does a sewer camera inspection show?',
    // Service page: the Carlsbad sale question answers it for this city.
    'Does my city require a sewer inspection for a sale, remodel, or permit?',
    // Service page: about drain cleaning products, off the locating topic.
    'Should I use chemical drain cleaner on a sewer line clog?',
    // Service page: about cleaning and pipe health, off the locating topic.
    'If the line drains after cleaning, is the pipe healthy?',
  ],
  'In Carlsbad',
)

const steps: ProcessContent[] = (v2.process?.steps ?? []).map((step) => ({
  title: step.title,
  description: typeof step.description === 'string' ? step.description : undefined,
}))

export const carlsbadLocatingContent: ServiceLocationPageContent = {
  seoTitle: 'Sewer Line Locating in Carlsbad, CA',
  metaDescription:
    'Sewer line locating for Carlsbad, CA properties. Three sewer agencies word the owner’s lateral differently. See what a locate is and is not.',
  serviceDescription:
    'Sewer line locating estimates where an accessible underground sewer line runs, using a transmitter inside the line and a receiver at the surface, for properties in Carlsbad, California. Results are estimates, not a survey.',
  heroImage: slots.hero,
  ctaImage: slots.cta,
  sources: carlsbadContent.sources,
  hero: {
    eyebrow: 'Carlsbad, CA',
    title: 'Sewer Line Locating in Carlsbad',
    intro: (
      <p>
        In Carlsbad, three sewer agencies each word the owner’s lateral differently, and the City
        says the owner’s line runs from the building to the sewer main, typically in the street.
        Sewer line locating estimates where the accessible line runs, so you can plan digging,
        fencing or planting around it.
      </p>
    ),
  },
  body: (
    <>
      <h2>Three agencies end the owner’s line in three places, and a locate marks none of them</h2>
      <p>
        The City of Carlsbad says the owner is responsible for the lateral from the home or building
        to the sewer main, typically in the street, and that its responsibility begins once sewage
        enters the main. Vallecitos Water District says the owner is responsible including the point
        of connection to its main. Leucadia Wastewater District describes the lateral as including
        the physical connection to its system.
      </p>
      <p>
        A locate estimates the path of the part of the line the equipment can trace, and it is an
        estimate for planning, not a survey. It does not establish where an agency’s responsibility
        begins, and we do not say which agency serves an address. The City points to its sewer
        district map for that.
      </p>

      <h2>The cleanout is the usual starting point, not the main</h2>
      <p>
        The City says the cleanout, the access point used to inspect the line and clear an
        obstruction, is usually within three to five feet of the building and that its cap must stay
        on tight. A locate can estimate the route of the accessible line from an access point such
        as that cleanout.
      </p>
      <p>
        It does not tell you the condition of the pipe. A camera inspection does that. It also does
        not find where the line meets the public main.
      </p>

      <h2>Before anyone digs, the agencies and the City have their own steps</h2>
      <p>
        The City says most construction work requires a permit, with certain work exempt under its
        municipal code. We did not find a City, Leucadia or Vallecitos page that says whether a
        given lateral repair needs one. Leucadia’s form says the applicant must obtain necessary
        federal, state or local permits, including building or right-of-way permits. Vallecitos says
        it does not install private connections.
      </p>
      <p>
        A locate is not utility clearance or permission to dig, and it does not replace a permit.
        Before anyone digs, contact your state one-call program (often reached at 811) or your local
        utility and follow applicable requirements.
      </p>

      <h2>A route is for planning, and it is not a grant document</h2>
      <p>
        The City and Leucadia each publish a lateral grant of up to $3,000, with different rules,
        and we found none from Vallecitos. Leucadia says its staff see the work while it is in
        progress, and that inspection and cleaning of a private lateral do not qualify. Neither
        agency publishes a balance, so confirm availability before planning around one.
      </p>
      <p>
        A locate shows where to plan work. It does not repair anything, and it does not qualify a
        job for a program. The Sewer Pros does not perform repairs or replacements.
      </p>
    </>
  ),
  problems: [
    ...problems.map((p, i) => ({ ...p, image: slots.problems[i] })),
    {
      title: 'Not sure where your line meets the main',
      description:
        'The City says the owner’s lateral runs to the sewer main, typically in the street. A locate estimates the route of the accessible line. It does not show where an agency’s part begins or which agency serves the address.',
      image: slots.problems[3],
    },
  ],
  // Six items: renders as two rows of three.
  inclusions,
  process: steps,
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
  // All relevant questions from the Carlsbad location page and the locating
  // service page (see `carlsbadLocatingFaq` above).
  faq: carlsbadLocatingFaq,
  relatedPageIds: [
    id('loc-sd-carlsbad'),
    id('svc-sewer-line-locating'),
    id('svc-sewer-camera-inspection'),
    id('svc-pre-purchase-sewer-inspection'),
  ],
  relatedTitle: 'Related pages',
  cta: {
    title: 'Request sewer line locating in Carlsbad',
    body: 'Plan around your lateral with an estimate of where it runs. A locate is not a survey or permission to dig.',
  },
}
