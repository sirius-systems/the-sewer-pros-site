/**
 * Florissant, MO + Pre-Purchase Sewer Inspection (`sl-florissant-prepurchase`).
 *
 * Authority: CLAUDE.md §9, §22, §24, §26; docs/14-content-specification.md §43.
 * Model: `sl-nlv-prepurchase.tsx` (approved).
 *
 * One local source (`florissantContent`, `loc-stl-florissant`) x one service
 * source (`svc-pre-purchase-sewer-inspection`, its `v2` block). Nothing here is
 * new research. Section recipe, each tied to what THIS service records or cannot:
 *   1. buyingGuide.body + responsibility - an "as is" sale leaves the inspection
 *      to the buyer; MSD calls the lateral private, so it is the buyer's after
 *      closing
 *   2. buyingGuide.body + municipalProgram - the City program is not a closing
 *      tool: no sale-contingency use, new-owner eligibility, written
 *      confirmation of a post-closing repair
 *   3. municipalProgram + housingAge.table - the five-foot boundary and the
 *      City's denial reasons vs. what a scope's footage can and cannot settle
 *   4. housingAge + systemExplainer - a mid-century housing stock and MSD
 *      projects say nothing about the lateral at one house
 * Swap the city and sections 1-4 fail; swap the service and 1-3 fail.
 *
 * Audit: docs/source-reports/st-louis/sl-florissant-prepurchase.md
 *
 * ⚠ ALL PHONE NUMBERS ARE THE CITY'S, labelled so. No company phone, office,
 * price, offer, response time or guarantee appears. No legal advice. Repair and
 * replacement are never offered. Nothing from the St. Louis City, Chesterfield,
 * Ballwin or St. Charles pages is carried over.
 */

import type { PageId, ProcessContent, ServiceLocationPageContent } from '@/types'
import { florissantContent } from './st-louis-florissant'
import { serviceContent } from './services'
import {
  SERVICE_INCLUSIONS,
  SERVICE_PROBLEMS,
  SERVICE_PROBLEM_SHOTS,
  mergeRelevantFaqs,
  pageImageSlots,
} from './service-location-shared'

const id = (value: string): PageId => value as PageId

const SERVICE_ID = 'svc-pre-purchase-sewer-inspection'

const v2 = serviceContent[id(SERVICE_ID)]?.v2
const serviceProblems = SERVICE_PROBLEMS[SERVICE_ID]
const serviceInclusions = SERVICE_INCLUSIONS[SERVICE_ID]
const serviceShots = SERVICE_PROBLEM_SHOTS[SERVICE_ID]
if (
  v2 === undefined ||
  serviceProblems === undefined ||
  serviceInclusions === undefined ||
  serviceShots === undefined ||
  florissantContent.faq === undefined
) {
  throw new Error('sl-florissant-prepurchase: source content is missing')
}

// Alt text stays neutral: no place-specific photo is claimed.
const slots = pageImageSlots('sl-florissant-prepurchase', {
  hero: {
    alt: 'Technician starting a pre-purchase sewer scope at a for-sale home',
    shot: 'Technician at a for-sale property starting a pre-purchase scope, no identifiable address',
  },
  problems: [serviceShots[0], serviceShots[1], serviceShots[2], serviceShots[3]] as const,
})

/**
 * Every question from the Florissant location page and the pre-purchase
 * service page, minus two: the location page's "What does a sewer camera
 * inspection show?" (the service page answers it in full as "What does a sewer
 * scope look for?" and "What does a sewer inspection not show?"), and the
 * service page's generic "Is a sewer scope required when buying or selling a
 * house?" (the Florissant question "Do buyers need a City inspection in
 * Florissant?" answers it for this city).
 */
const faq = mergeRelevantFaqs(
  florissantContent.faq,
  v2.faq,
  [
    'What does a sewer camera inspection show?',
    'Is a sewer scope required when buying or selling a house?',
  ],
  'In Florissant',
)

const steps: ProcessContent[] = (v2.process?.steps ?? []).map((step) => ({
  title: step.title,
  description: typeof step.description === 'string' ? step.description : undefined,
}))

export const florissantPrePurchaseContent: ServiceLocationPageContent = {
  seoTitle: 'Pre-Purchase Sewer Inspection in Florissant, MO',
  metaDescription:
    'Buying in Florissant, MO? The City allows “as is” sales, and its lateral program is not for sale contingencies. See what a sewer scope shows.',
  serviceDescription:
    'A pre-purchase sewer inspection is a sewer camera inspection arranged during a home purchase, recording the visible condition of the accessible sewer line serving a home in Florissant, Missouri, before closing.',
  heroImage: slots.hero,
  ctaImage: slots.cta,
  sources: florissantContent.sources,
  hero: {
    eyebrow: 'Florissant, MO',
    title: 'Pre-Purchase Sewer Inspection in Florissant',
    intro: (
      <p>
        MSD says the lateral line from a Florissant building to the public sewer is private property
        that the owner maintains, and the City says a home can be sold &ldquo;as is&rdquo; without a
        City inspection. After closing, that owner is you. A pre-purchase sewer inspection records
        the visible condition of the accessible line on video, with written findings, before you
        close.
      </p>
    ),
  },
  body: (
    <>
      <h2>An &ldquo;as is&rdquo; Florissant sale leaves the lateral question to the buyer</h2>
      <p>
        The City of Florissant says a property can be sold &ldquo;as is&rdquo; without a City
        inspection. The buyer is then responsible for obtaining and paying for the inspection and an
        occupancy permit before anyone moves in. The occupancy page we reviewed does not mention
        sewers, so evidence of the lateral is something a buyer has to ask for.
      </p>
      <p>
        MSD says the lateral line that connects the building to the public sewer, including its
        connection, is private property that the owner maintains and repairs. A pre-purchase
        inspection is how you see that line first. It documents visible conditions in the section
        the camera reaches, and it does not establish where the connection is.
      </p>

      <h2>The City&rsquo;s lateral program is not a closing tool</h2>
      <p>
        Florissant&rsquo;s Sewer Lateral Insurance Program says it is not intended to satisfy a home
        sale contingency, and a pending sale does not move a repair up the list. A new owner can be
        eligible if the real estate taxes are paid in full, and if a repair is approved but may be
        done after closing, the City requires the new owner to confirm in writing that they know of
        and support the planned repair.
      </p>
      <p>
        So a scope is evidence for your own decision, not a way into the program. The City&rsquo;s
        contracted plumber does its own cable and camera evaluation, and we make no claim that the
        City accepts an outside report. Ask your agent and the Engineering Division at (314)
        839-7643 (the City&rsquo;s number, not ours) how this fits your timeline. Findings are
        informational, not legal advice.
      </p>

      <h2>Where the program stops decides what a scope has to show you</h2>
      <p>
        The program covers a defective residential lateral from the main to within five feet of the
        foundation. The part inside the home and within five feet of it stays with the owner. A
        scope records where along the line a condition was seen, which is what you need to ask the
        City how that boundary applies. It does not set the boundary.
      </p>
      <p>
        The City also lists small defects or hairline cracks, and a line that is open and in
        serviceable condition, among its reasons to deny. A minor finding on video is not a promise
        of City repair, and a clear scope is not proof that the whole line is sound.
      </p>

      <h2>A mid-century housing stock says little about the pipe</h2>
      <p>
        The City&rsquo;s 2026-2030 Consolidated Plan says the vast majority of Florissant&rsquo;s
        21,229 housing units were built between 1950 and 1979 (U.S. Census Bureau ACS 2024 5-year
        estimates, citywide). Neither MSD nor the City publishes a pipe material or installation
        era.
      </p>
      <p>
        MSD&rsquo;s Brookshire Sanitary Relief page describes new wastewater sewer in
        Florissant&rsquo;s Wedgewood neighborhood. A public project does not tell you the condition
        of the lateral at the house you are buying. Only an inspection of that line can.
      </p>
    </>
  ),
  problems: [
    ...serviceProblems.map((p, i) => ({ ...p, image: slots.problems[i] })),
    {
      title: 'A City repair that may land after closing',
      description:
        'If the City approves a repair that may be done after closing, it requires the new owner to confirm in writing that they know of and support it. Ask your agent and the Engineering Division how that fits your timeline, and note your inspection deadline when you request service.',
      image: slots.problems[3],
    },
  ],
  inclusions: serviceInclusions,
  process: steps,
  coverage: {
    title: 'Other St. Louis area locations',
    intro:
      'This page covers Florissant. Lateral programs and sewer rules differ by municipality, so use the page for the address you are buying.',
    pageIds: [
      id('loc-stl-st-louis-city'),
      id('loc-stl-chesterfield'),
      id('loc-stl-ballwin'),
      id('loc-stl-st-charles'),
    ],
    availabilityStatement: 'Florissant is a service area, not an office location.',
  },
  faq,
  relatedPageIds: [
    id('loc-stl-florissant'),
    id(SERVICE_ID),
    id('svc-sewer-camera-inspection'),
    id('svc-sewer-line-locating'),
  ],
  relatedTitle: 'Related pages',
  cta: {
    title: 'Schedule a pre-purchase sewer inspection in Florissant',
    body: 'See the visible condition of the lateral on video, with written findings, before you close. Note your inspection deadline when you request service.',
  },
}
