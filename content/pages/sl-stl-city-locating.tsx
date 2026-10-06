/**
 * St. Louis City, MO + Sewer Line Locating (`sl-stl-city-locating`).
 *
 * Built from exactly two sources, as `sl-lv-city-locating` is:
 *   LOCATION  `stLouisCityContent`  (content/pages/st-louis-city.tsx)
 *   SERVICE   `svc-sewer-line-locating` v2 content (content/pages/services.tsx)
 *             and `./sl-blocks/sewer-line-locating`
 *
 * Section recipe (each ties a St. Louis City fact to what THIS service does
 * or cannot do; swap the city or the service and the copy breaks):
 *   1. Route to the MSD main - the owner's lateral runs to the main, under the
 *                              street; a locate estimates the accessible line
 *                              but does not find the connection.
 *   2. Before anyone digs    - the City's replacement permit rule + the
 *                              service's one-call wording; a locate is not
 *                              clearance.
 *   3. Older City laterals   - repaired or replaced since installed, so era does
 *                              not give today's route; the sonde signal, not the
 *                              pipe material, is what is traced.
 *   4. Buying                - the lateral is the buyer's after closing; route is
 *                              not condition.
 *
 * ⚠ MSD AND CITY NUMBERS ARE THEIRS, not ours. No price, offer, response time,
 * guarantee, emergency or same-day claim. St. Louis City is a service area, not
 * an office. Repair and replacement are never presented as offered. A locate is
 * an ESTIMATE, not a survey, utility clearance or permission to dig. The
 * location page's "about 58 percent built before 1940" figure is NOT used
 * (primary Census table check pending).
 *
 * Audit: docs/source-reports/st-louis/sl-stl-city-locating.md
 */

import type { PageId, ProcessContent, ServiceLocationPageContent } from '@/types'
import { serviceContent } from './services'
import { mergeRelevantFaqs, pageImageSlots } from './service-location-shared'
import { inclusions, problems, shots } from './sl-blocks/sewer-line-locating'
import { stLouisCityContent } from './st-louis-city'

const id = (value: string): PageId => value as PageId

const slots = pageImageSlots('sl-stl-city-locating', {
  hero: {
    alt: 'Technician using a sewer line locator in a residential yard',
    shot: 'Technician with a locator receiver in a residential yard, paint marks on pavement, no identifiable address',
  },
  problems: shots,
})

const v2 = serviceContent[id('svc-sewer-line-locating')]?.v2
if (v2 === undefined || stLouisCityContent.faq === undefined) {
  throw new Error('sl-stl-city-locating: source content is missing')
}

/**
 * Every question from the St. Louis City location page and the locating
 * service page, minus the ones named here (reasons in the source report).
 */
const stLouisLocatingFaq = mergeRelevantFaqs(
  stLouisCityContent.faq,
  v2.faq,
  [
    // Location page: a camera question the locating page does not own.
    'What does a sewer camera inspection show?',
    // Service page: about drain cleaning products, off the locating topic.
    'Should I use chemical drain cleaner on a sewer line clog?',
    // Service page: about cleaning and pipe health, off the locating topic.
    'If the line drains after cleaning, is the pipe healthy?',
  ],
  'In St. Louis City',
)

const steps: ProcessContent[] = (v2.process?.steps ?? []).map((step) => ({
  title: step.title,
  description: typeof step.description === 'string' ? step.description : undefined,
}))

export const stLouisCityLocatingContent: ServiceLocationPageContent = {
  seoTitle: 'Sewer Line Locating in St. Louis City, MO',
  metaDescription:
    'Sewer line locating for St. Louis City, MO properties. Your lateral is private to the MSD main, even under the street. See what a locate is and is not.',
  serviceDescription:
    'Sewer line locating estimates where an accessible underground sewer line runs, using a transmitter inside the line and a receiver at the surface, for properties in St. Louis City, Missouri. Results are estimates, not a survey.',
  heroImage: slots.hero,
  ctaImage: slots.cta,
  sources: stLouisCityContent.sources,
  hero: {
    eyebrow: 'St. Louis City, MO',
    title: 'Sewer Line Locating in St. Louis City',
    intro: (
      <p>
        In St. Louis City, the lateral from your building to the MSD main is private property, even
        where it runs under the street or alley. Sewer line locating estimates where the accessible
        part of that line runs, so you can plan digging, fencing or other work around it. It does
        not show where the line joins the main.
      </p>
    ),
  },
  body: (
    <>
      <h2>A lateral that runs to the MSD main, and a locate that stops short of it</h2>
      <p>
        MSD says the lateral connecting your building to the public main, including its connection,
        is private property and normally the owner&rsquo;s, even under the street or alley. The City
        says the same of the entire lateral from a home to the MSD main. That is a line whose route
        you need to know before you plan work near it.
      </p>
      <p>
        A locate estimates the path of the accessible line the equipment could trace. It does not
        establish where the connection to the MSD main is, or where your responsibility ends. A
        locate is not a survey. Confirm those points with MSD or the City.
      </p>

      <h2>Before anyone digs: the City&rsquo;s permit rule and one-call</h2>
      <p>
        The City says replacing a lateral requires a plumbing permit and inspection, issued to
        City-certified licensed plumbing contractors. A locate does not replace that permit, and it
        is not utility clearance or permission to dig. It can help you tell whoever does the work
        where the line runs. The Sewer Pros does not perform repairs or replacements.
      </p>
      <p>
        A mark or measurement is an estimate for planning. Before anyone digs, contact your state
        one-call program (often reached at 811) or your local utility and follow applicable
        requirements. If you are reporting a cave-in in the right-of-way under the City&rsquo;s
        program, that report goes to the City, not to a locate.
      </p>

      <h2>Older City laterals, and where the line runs today</h2>
      <p>
        Lateral pipe materials changed over the decades, in general from vitrified clay and cast
        iron to PVC and ABS from the 1970s on, and many laterals have been repaired or replaced
        since they were first installed. Those are general timelines, not a statement about any one
        home, so a house&rsquo;s era does not tell you where its line runs now.
      </p>
      <p>
        A receiver detects the sonde&rsquo;s signal rather than the pipe itself, so many pipe
        materials can be located. Concrete, rebar and other buried metal can weaken the signal, so
        results under slabs and driveways are less certain. A locate says nothing about the
        pipe&rsquo;s condition. MSD&rsquo;s combined-sewer facts describe the public system, not
        your route, and a camera inspection is the separate service that looks inside the line.
      </p>

      <h2>Buying a St. Louis City home: the route is not the condition</h2>
      <p>
        After closing, the lateral is the buyer&rsquo;s responsibility. Older City properties are
        served by older infrastructure, and a buyer can use a locate to weigh what could be built or
        planted near the line. It does not show the line&rsquo;s condition.
      </p>
      <p>
        A pre-purchase sewer inspection does that, with recorded findings you and your agent can
        review during your due diligence period. Findings are informational, not legal advice.
      </p>
    </>
  ),
  problems: [
    ...problems.map((p, i) => ({ ...p, image: slots.problems[i] })),
    {
      title: 'The City puts the lateral on the owner, even under the street',
      description:
        'MSD and the City say the lateral from the building to the MSD main is private property, including under the street or alley. A locate estimates the route of the accessible line, and it does not find the connection to the main.',
      image: slots.problems[3],
    },
  ],
  // Six items: renders as two rows of three.
  inclusions,
  process: steps,
  coverage: {
    title: 'Other St. Louis area locations',
    intro:
      'This page covers St. Louis City. Sewer rules and lateral programs differ across the St. Louis area, so use the page for your address.',
    pageIds: [
      id('loc-stl-chesterfield'),
      id('loc-stl-ballwin'),
      id('loc-stl-florissant'),
      id('loc-stl-st-charles'),
    ],
    availabilityStatement: 'St. Louis City is a service area, not an office location.',
  },
  // All relevant questions from the St. Louis City location page and the
  // locating service page (see `stLouisLocatingFaq` above).
  faq: stLouisLocatingFaq,
  relatedPageIds: [
    id('loc-stl-st-louis-city'),
    id('svc-sewer-line-locating'),
    id('svc-sewer-camera-inspection'),
    id('svc-pre-purchase-sewer-inspection'),
  ],
  relatedTitle: 'Related pages',
  cta: {
    title: 'Request sewer line locating in St. Louis City',
    body: 'Plan around your lateral with an estimate of where it runs. A locate is not a survey or permission to dig.',
  },
}
