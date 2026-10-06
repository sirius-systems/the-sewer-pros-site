/**
 * Oceanside, CA + Sewer Line Locating (`sl-oceanside-locating`).
 *
 * Authority: CLAUDE.md §9, §22, §24; docs/14-content-specification.md §43, §79.
 * Built from exactly two sources, as `sl-sd-chula-vista-locating` is:
 *   LOCAL    `oceansideContent` (`loc-sd-oceanside`)
 *   SERVICE  `svc-sewer-line-locating` v2 content (content/pages/services.tsx)
 *            and `./sl-blocks/sewer-line-locating`
 * Nothing here is new research.
 *
 * Section recipe (each section ties an Oceanside fact to what a locate does):
 *   1. Where the line ends - "from the street to your house"; the City does not
 *      publish the end point; a locate marks no boundary
 *   2. Housing age - 1984 median; a lateral can be rerouted; a locate estimates
 *      the observed route, not condition
 *   3. Before anyone digs - improvement plans, permits, one-call wording; a
 *      locate is not clearance or permission to dig
 *   4. A leak and the missing program - plumber; none found; a route helps
 *      whoever does the work; we do not repair
 *
 * ⚠ OCEANSIDE HAS ONE SEWER AGENCY (the City). CITY NUMBERS ARE THE CITY'S. No
 * company phone, price, offer, response time, guarantee, emergency or same-day
 * claim, equipment spec or office. A locate is an ESTIMATE, not a survey,
 * utility clearance or permission to dig.
 */

import type { PageId, ProcessContent, ServiceLocationPageContent } from '@/types'
import { oceansideContent } from './san-diego-oceanside'
import { serviceContent } from './services'
import { mergeRelevantFaqs, pageImageSlots } from './service-location-shared'
import { inclusions, problems, shots } from './sl-blocks/sewer-line-locating'

const id = (value: string): PageId => value as PageId

const slots = pageImageSlots('sl-oceanside-locating', {
  hero: {
    alt: 'Technician using a sewer line locator receiver in a residential yard',
    shot: 'Technician with a locator receiver in a residential yard, paint marks on pavement, no identifiable address',
  },
  problems: shots,
})

const v2 = serviceContent[id('svc-sewer-line-locating')]?.v2
if (v2 === undefined || oceansideContent.faq === undefined) {
  throw new Error('sl-sd-oceanside-locating: source content is missing')
}

/**
 * Every question from the Oceanside location page and the locating service
 * page, minus the ones named here (reasons in the source report).
 */
const oceansideLocatingFaq = mergeRelevantFaqs(
  oceansideContent.faq,
  v2.faq,
  [
    // Location page: a camera question the locating page does not own.
    'What does a sewer camera inspection show?',
    // Service page: the Oceanside sale question answers it for this city.
    'Does my city require a sewer inspection for a sale, remodel, or permit?',
    // Service page: about drain cleaning products, off the locating topic.
    'Should I use chemical drain cleaner on a sewer line clog?',
    // Service page: about cleaning and pipe health, off the locating topic.
    'If the line drains after cleaning, is the pipe healthy?',
  ],
  'In Oceanside',
)

const steps: ProcessContent[] = (v2.process?.steps ?? []).map((step) => ({
  title: step.title,
  description: typeof step.description === 'string' ? step.description : undefined,
}))

export const oceansideLocatingContent: ServiceLocationPageContent = {
  seoTitle: 'Sewer Line Locating in Oceanside, CA',
  metaDescription:
    'Sewer line locating for Oceanside, CA properties. The City says private lines run from the street to your house. See what a locate is and is not.',
  serviceDescription:
    'Sewer line locating estimates where an accessible underground sewer line runs, using a transmitter inside the line and a receiver at the surface, for properties in Oceanside, California. Results are estimates, not a survey.',
  heroImage: slots.hero,
  ctaImage: slots.cta,
  sources: oceansideContent.sources,
  hero: {
    eyebrow: 'Oceanside, CA',
    title: 'Sewer Line Locating in Oceanside',
    intro: (
      <p>
        In Oceanside, the City says private sewer lines, “from the street to your house,” are the
        property owner’s responsibility, and we did not find where the City’s part ends. Sewer line
        locating estimates where the accessible line runs, so you can plan digging, fencing or
        planting around it.
      </p>
    ),
  },
  body: (
    <>
      <h2>“From the street to your house” is the City’s wording, and a locate marks no boundary</h2>
      <p>
        The City of Oceanside Water Utilities Department runs the public sewer system, and it says
        private sewer lines, “from the street to your house,” are the property owner’s
        responsibility. We did not find a City statement of the exact point where its part ends, or
        of whether the owner’s part includes the section under the street.
      </p>
      <p>
        A locate uses a transmitter inside the line and a receiver at the surface to estimate where
        the accessible line runs. It is an estimate for planning, not a survey, and it does not
        establish where a property line, the connection to the City’s main or the City’s
        responsibility begins. Ask Water Utilities at (760) 435-5800 (the City’s number, not ours).
      </p>

      <h2>A lateral can be rerouted, so a 1984 median year built says little about its route</h2>
      <p>
        Oceanside’s median year built is 1984, plus or minus 2 years, according to the U.S. Census
        Bureau’s American Community Survey (2020-2024 5-year estimates, Oceanside city). Our
        arithmetic on the Census rows puts 16.9 percent of housing units before 1970, 48.6 percent
        from 1970 to 1989 and 34.5 percent in 1990 or later.
      </p>
      <p>
        A lateral can be repaired, rerouted or replaced after the house is built, so the year a
        house was built does not tell you where its line runs or what shape it is in. A locate
        estimates the observed route of the part of the line that could be traced, and where the
        camera cannot pass, that part is not traced. It does not show the pipe’s condition. A camera
        inspection does.
      </p>

      <h2>Before anyone digs, the City lists approvals and the one-call program applies</h2>
      <p>
        The City says sewer improvements in a public right-of-way, a City easement or City property
        need an improvement plan approved by Water Utilities and signed by a Registered Civil
        Engineer. For private property it says improvements may trigger a permit and points to
        Development Services and City code. We did not find a published rule that covers every
        repair of an existing lateral.
      </p>
      <p>
        A locate is not utility clearance or permission to dig, and it does not replace a permit.
        Before anyone digs, contact your state one-call program (often reached at 811) or your local
        utility and follow applicable requirements.
      </p>

      <h2>For a leak the City says call a plumber, and a route helps whoever does the work</h2>
      <p>
        For a sewer leak on your property, the City says to call a plumber, and we did not find a
        sewer-specific backup or overflow instruction from the City. We also found no City lateral
        repair, replacement, grant or reimbursement program (“none found”, not a statement that none
        exists, and the City’s pages carry no current date).
      </p>
      <p>
        A locate can help you tell whoever does the work where the line runs. It does not repair
        anything, and it does not qualify a job for a program. The Sewer Pros does not perform
        repairs or replacements.
      </p>
    </>
  ),
  problems: [
    ...problems.map((p, i) => ({ ...p, image: slots.problems[i] })),
    {
      title: 'Not sure where your line runs to the street',
      description:
        'The City says private sewer lines run “from the street to your house” and does not publish where its part ends. A locate estimates the route of the accessible line. It does not show where the City’s part begins.',
      image: slots.problems[3],
    },
  ],
  // Six items: renders as two rows of three.
  inclusions,
  process: steps,
  coverage: {
    title: 'Other San Diego area locations',
    intro:
      'This page covers the City of Oceanside. Sewer agencies and lateral rules differ across San Diego County, so use the page for your address.',
    pageIds: [
      id('loc-sd-san-diego'),
      id('loc-sd-san-marcos'),
      id('loc-sd-carlsbad'),
      id('loc-sd-escondido'),
      id('loc-sd-chula-vista'),
      id('loc-sd-mission-valley'),
    ],
    availabilityStatement: 'Oceanside is a service area, not an office location.',
  },
  // All relevant questions from the Oceanside location page and the locating
  // service page (see `oceansideLocatingFaq` above).
  faq: oceansideLocatingFaq,
  relatedPageIds: [
    id('loc-sd-oceanside'),
    id('svc-sewer-line-locating'),
    id('svc-sewer-camera-inspection'),
    id('svc-pre-purchase-sewer-inspection'),
  ],
  relatedTitle: 'Related pages',
  cta: {
    title: 'Request sewer line locating in Oceanside',
    body: 'Plan around your lateral with an estimate of where it runs. A locate is not a survey or permission to dig.',
  },
}
