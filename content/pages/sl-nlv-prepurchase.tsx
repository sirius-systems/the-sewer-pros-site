/**
 * City of North Las Vegas, NV + Pre-Purchase Sewer Inspection (`sl-nlv-prepurchase`).
 *
 * Authority: CLAUDE.md §9, §22, §24, §26; docs/14-content-specification.md §43.
 * Model: `sl-lv-city-prepurchase.tsx` (approved).
 *
 * One local source (`northLasVegasContent`, `loc-lv-north-las-vegas`) x one service
 * source (`svc-pre-purchase-sewer-inspection`, its `v2` block). Nothing here is
 * new research. Section recipe, each tied to what THIS service records or cannot:
 *   1. responsibility + buyingGuide.lede - the lateral is the buyer's after
 *      closing, up to the connection to the main in the street
 *   2. buyingGuide.body + municipalProgram - no sale-time rule found, Start New
 *      Service has no lateral step, a scope is not legal advice
 *   3. responsibility (blockage vs. breakage) - what a scope's footage can and
 *      cannot settle
 *   4. buyingGuide.body + municipalProgram + whoToCall - insurance, the optional
 *      third-party plan, the City's contact, locating
 * Swap the city and sections 1-4 fail; swap the service and 1-3 fail.
 *
 * Audit: docs/source-reports/north-las-vegas/sl-nlv-prepurchase.md
 *
 * ⚠ The North Las Vegas location page has NO housing-age section (no Census
 * figure was supplied), so this page, unlike the City of Las Vegas model, states
 * no year-built figure.
 * ⚠ THE CITY'S BLOCKAGE AND BREAKAGE STATEMENTS ARE SHOWN AS WORDED AND NEVER
 * RECONCILED.
 * ⚠ CITY NUMBER IS THE CITY'S, not ours. No company phone, office, price, offer,
 * response time or guarantee appears. No legal advice. Repair and replacement
 * are never offered.
 */

import type { PageId, ProcessContent, ServiceLocationPageContent } from '@/types'
import { northLasVegasContent } from './las-vegas-north-las-vegas'
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
  northLasVegasContent.faq === undefined
) {
  throw new Error('sl-nlv-prepurchase: source content is missing')
}

// Alt text stays neutral: the location page allows North Las Vegas wording only
// for a photo taken at a North Las Vegas-area property.
const slots = pageImageSlots('sl-nlv-prepurchase', {
  hero: {
    alt: 'Technician starting a pre-purchase sewer scope at a for-sale home',
    shot: 'Technician at a for-sale property starting a pre-purchase scope, no identifiable address',
  },
  problems: [serviceShots[0], serviceShots[1], serviceShots[2], serviceShots[3]] as const,
})

/**
 * Every question from the North Las Vegas location page and the pre-purchase
 * service page, minus two: the location page's "What does a sewer camera
 * inspection show?" (the service page answers it in full as "What does a sewer
 * scope look for?" and "What does a sewer inspection not show?"), and the
 * service page's generic "Is a sewer scope required when buying or selling a
 * house?" (the North Las Vegas question "Does North Las Vegas require a sewer
 * inspection when a home is sold?" answers it for this city).
 */
const faq = mergeRelevantFaqs(
  northLasVegasContent.faq,
  v2.faq,
  [
    'What does a sewer camera inspection show?',
    'Is a sewer scope required when buying or selling a house?',
  ],
  'In North Las Vegas',
)

const steps: ProcessContent[] = (v2.process?.steps ?? []).map((step) => ({
  title: step.title,
  description: typeof step.description === 'string' ? step.description : undefined,
}))

export const northLasVegasPrePurchaseContent: ServiceLocationPageContent = {
  seoTitle: 'Pre-Purchase Sewer Inspection in North Las Vegas, NV',
  metaDescription:
    'Buying in North Las Vegas, NV? The City says the lateral is the owner’s up to the main, and we found no sale-time inspection rule. See what a scope shows.',
  serviceDescription:
    'A pre-purchase sewer inspection is a sewer camera inspection arranged during a home purchase, recording the visible condition of the accessible sewer line serving a home in the City of North Las Vegas, Nevada, before closing.',
  heroImage: slots.hero,
  ctaImage: slots.cta,
  sources: northLasVegasContent.sources,
  hero: {
    eyebrow: 'North Las Vegas, NV',
    title: 'Pre-Purchase Sewer Inspection in North Las Vegas',
    intro: (
      <p>
        If you buy a home in the City of North Las Vegas, the City says the homeowner&rsquo;s
        responsibility for the sewer service lateral ends at the connection to the main in the
        street. We found no City rule that asks for a lateral inspection when a home is sold. A
        pre-purchase sewer inspection records the visible condition of the accessible line on
        video, with written findings, before you close.
      </p>
    ),
  },
  body: (
    <>
      <h2>What you take on when a North Las Vegas sale closes</h2>
      <p>
        The City of North Las Vegas says the homeowner&rsquo;s responsibility for the sewer service
        lateral ends at the connection to the main in the street. After closing, that homeowner is
        you.
      </p>
      <p>
        A pre-purchase inspection is how you see that line first. It documents visible conditions
        in the section the camera reaches, on the day of the visit, and records where along the
        line a condition sits. It does not establish where the connection to the City main is.
      </p>

      <h2>No sale-time rule found, so you have to ask</h2>
      <p>
        We did not find a rule on the City pages we reviewed that requires a lateral inspection,
        certification or seller disclosure when a home is sold. That is &ldquo;none
        found&rdquo;, not a confirmed absence, and it does not address state-level disclosure
        rules.
      </p>
      <p>
        An inspection is something a buyer chooses to ask for. The City&rsquo;s utility portal
        offers a Start New Service request for customers who are moving, but we found no City
        statement about lateral inspections in that process, so confirm the current steps with the
        City. Findings are informational, not legal advice. The Sewer Pros inspects and documents;
        it does not repair or replace.
      </p>

      <h2>The City words a blockage and a breakage differently</h2>
      <p>
        For a blockage, the City says the homeowner is responsible throughout the entire pipe until
        the connection to the City&rsquo;s main. For a breakage, it says the homeowner is
        responsible until the point where the sewer line crosses the boundary of the property. We
        show both as the City states them and do not reconcile them.
      </p>
      <p>
        A scope cannot settle which applies. The footage shows what is visible and how far along
        the line it sits, and a clear result is not proof the whole line is sound. It does not
        establish the property boundary or the connection. Ask the Utilities Department how both
        statements apply to the address you are buying.
      </p>

      <h2>Insurance, optional coverage and who to call before you close</h2>
      <ul>
        <li>
          The City says most basic homeowner&rsquo;s insurance policies do not cover service
          laterals, so ask your own insurer what applies to yours.
        </li>
        <li>
          The City says it partnered with Service Line Warranties of America for optional coverage
          of water and sewer service lines. That company is separate from the City, we found no
          price or terms, and The Sewer Pros has no connection to the plan.
        </li>
        <li>
          For a problem on the City side, the Utilities Department is at 702-633-1484 (the
          City&rsquo;s number, not ours). It is customer service, not a sewer emergency line.
        </li>
      </ul>
      <p>
        If a plumber places a problem on the City side, the City says video evidence may be
        submitted to that department for review. We did not find how, so ask before you pay for
        work. Line locating is a separate service that can help identify the route of an accessible
        line.
      </p>
    </>
  ),
  problems: [
    ...serviceProblems.map((p, i) => ({ ...p, image: slots.problems[i] })),
    {
      title: 'A problem found during your inspection period',
      description:
        'The City says video evidence of a breakage or blockage on the City side may be submitted to its Utilities Department for review. We did not find how it is submitted or what happens next, so ask the City before you pay for work, and note your inspection deadline when you request service.',
      image: slots.problems[3],
    },
  ],
  inclusions: serviceInclusions,
  process: steps,
  coverage: {
    title: 'Other Las Vegas Valley areas',
    intro:
      'This page covers North Las Vegas. Sewer agencies and lateral rules differ across the Las Vegas Valley, so use the page for the address you are buying.',
    pageIds: [id('loc-lv-las-vegas'), id('loc-lv-henderson'), id('loc-lv-summerlin')],
    availabilityStatement: 'North Las Vegas is a service area, not an office location.',
  },
  faq,
  relatedPageIds: [
    id('loc-lv-north-las-vegas'),
    id(SERVICE_ID),
    id('svc-sewer-camera-inspection'),
    id('svc-sewer-line-locating'),
  ],
  relatedTitle: 'Related pages',
  cta: {
    title: 'Schedule a pre-purchase sewer inspection in North Las Vegas',
    body: 'See the visible condition of the lateral on video, with written findings, before you close. Note your inspection deadline when you request service.',
  },
}
