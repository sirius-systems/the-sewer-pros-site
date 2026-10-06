/**
 * Henderson, NV + Pre-Purchase Sewer Inspection (`sl-henderson-prepurchase`).
 *
 * Authority: CLAUDE.md §9, §22, §24, §26; docs/14-content-specification.md §43.
 *
 * One local source (`hendersonContent`, `loc-lv-henderson`) x one service source
 * (`svc-pre-purchase-sewer-inspection`, its `v2` block). Nothing here is new
 * research. Section recipe, each tied to what THIS service records or cannot:
 *   1. buyingGuide + responsibility - the lateral is the buyer's after closing
 *   2. buyingGuide + municipalProgram - no sale-time rule, no City repair program
 *   3. housingAge - a newer house says little about its lateral
 *   4. buyingGuide FAQ + whoToCall - City contacts at closing vs this service
 * Swap the city and sections 1-4 fail; swap the service and 1-3 fail.
 *
 * Audit: docs/source-reports/henderson/sl-henderson-prepurchase.md
 *
 * ⚠ CITY NUMBERS ARE THE CITY'S, not ours. No company phone, office, price,
 * offer, response time or guarantee appears. No legal advice. Repair and
 * replacement are never offered.
 */

import type { PageId, ProcessContent, ServiceLocationPageContent } from '@/types'
import { hendersonContent } from './las-vegas-henderson'
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
  hendersonContent.faq === undefined
) {
  throw new Error('sl-henderson-prepurchase: source content is missing')
}

const slots = pageImageSlots('sl-henderson-prepurchase', {
  hero: {
    alt: 'Technician starting a pre-purchase sewer scope at a Henderson home',
    shot: 'Technician at a for-sale property starting a pre-purchase scope, no identifiable address',
  },
  problems: [serviceShots[0], serviceShots[1], serviceShots[2], serviceShots[3]] as const,
})

/**
 * Every question from the Henderson location page and the pre-purchase service
 * page, minus two: the location page's "What does a sewer camera inspection
 * show?" (the service page answers it in full as "What does a sewer scope look
 * for?" and "What does a sewer inspection not show?"), and the service page's
 * generic "Is a sewer scope required when buying or selling a house?" (the
 * Henderson question "Does Henderson require a sewer inspection when a home is
 * sold?" answers it for this city).
 */
const faq = mergeRelevantFaqs(
  hendersonContent.faq,
  v2.faq,
  [
    'What does a sewer camera inspection show?',
    'Is a sewer scope required when buying or selling a house?',
  ],
  'In Henderson',
)

const steps: ProcessContent[] = (v2.process?.steps ?? []).map((step) => ({
  title: step.title,
  description: typeof step.description === 'string' ? step.description : undefined,
}))

export const hendersonPrePurchaseContent: ServiceLocationPageContent = {
  seoTitle: 'Pre-Purchase Sewer Inspection in Henderson, NV',
  metaDescription:
    'Buying in Henderson, NV? The City says the sewer lateral is yours from the main connection, and we found no sale-time inspection rule. See what a scope shows.',
  serviceDescription:
    'A pre-purchase sewer inspection is a sewer camera inspection arranged during a home purchase, recording the visible condition of the accessible sewer line serving a home in the City of Henderson, Nevada, before closing.',
  heroImage: slots.hero,
  ctaImage: slots.cta,
  hero: {
    eyebrow: 'Henderson, NV',
    title: 'Pre-Purchase Sewer Inspection in Henderson',
    intro: (
      <p>
        If you buy a home in the City of Henderson, the sewer service lateral
        becomes yours to maintain from the point where it meets the City&rsquo;s
        main in the street, and we found no City rule that asks for a lateral
        inspection when a home is sold. A pre-purchase sewer inspection records
        the visible condition of the accessible line on video, with written
        findings, before you close.
      </p>
    ),
  },
  body: (
    <>
      <h2>What you take on when a Henderson sale closes</h2>
      <p>
        The City says your responsibility for the sewer service lateral begins
        where it connects to the City&rsquo;s sewer main in the street, and that
        you pay for repairs and cleanup on your side of that connection. After
        closing, that owner is you.
      </p>
      <p>
        A pre-purchase inspection is how you see that line first. It documents
        visible conditions in the section the camera reaches, on the day of the
        visit. It does not establish where the connection to the City main is or
        where your responsibility begins.
      </p>

      <h2>No sale-time rule found, so you have to ask</h2>
      <p>
        We found no rule on the City pages we reviewed that requires a lateral
        inspection, certification or seller disclosure when a home is sold. That
        is &ldquo;none found&rdquo;, not a confirmed absence, and it does not
        address state-level rules. We also found no City lateral repair, grant or
        reimbursement program.
      </p>
      <p>
        The City lists periodic professional inspection of the lateral among
        owner duties, so a buyer who wants the line&rsquo;s condition on record
        can ask for an inspection during the transaction. Findings are
        informational, not legal advice. The Sewer Pros inspects and documents;
        it does not perform repairs or replacements.
      </p>

      <h2>A newer Henderson house still has an unknown lateral</h2>
      <p>
        Henderson&rsquo;s median year built is 2001, and 82.1 percent of housing
        units were built in 1990 or later (U.S. Census Bureau ACS 2020-2024
        5-year estimates, Henderson city; the percentage is our arithmetic on the
        Census rows). Only 3.1 percent were built before 1970.
      </p>
      <p>
        That is why age alone cannot answer the sewer question. A lateral can be
        repaired, rerouted or replaced after a house is built, so the year on the
        listing does not give you its condition or material. A scope records what
        is visible. A clear result is not proof the whole line is sound.
      </p>

      <h2>City contacts at closing, and where a scope fits</h2>
      <ul>
        <li>
          To start, stop or transfer water and sewer service, the City&rsquo;s FAQ
          points to its Customer Portal or Customer Care Center at 702-267-5900
          (the City&rsquo;s number, not ours). It says agents use the Property
          Agent Service Request option. The FAQ is undated.
        </li>
        <li>
          For work in the public right-of-way, the City says to contact Public
          Works at 702-267-3600 (also the City&rsquo;s) about a permit.
        </li>
      </ul>
      <p>
        An inspection does not tell you which approvals apply and does not
        replace any City review. Line locating is a separate service, so ask
        whether it is part of your visit.
      </p>
    </>
  ),
  problems: [
    ...serviceProblems.map((p, i) => ({ ...p, image: slots.problems[i] })),
    {
      title: 'A Henderson sale with no inspection rule behind it',
      description:
        'We found no City rule requiring a lateral inspection or seller disclosure on sale. The City puts the lateral on the owner from the connection, so a buyer who wants its condition on record has to ask for it.',
      image: slots.problems[3],
    },
  ],
  inclusions: serviceInclusions,
  process: steps,
  coverage: {
    title: 'Other Las Vegas Valley areas',
    intro:
      'This page covers the City of Henderson. Sewer agencies and lateral rules differ across the Las Vegas Valley, so use the page for the address you are buying.',
    pageIds: [id('loc-lv-las-vegas'), id('loc-lv-north-las-vegas'), id('loc-lv-summerlin')],
    availabilityStatement: 'Henderson is a service area, not an office location.',
  },
  faq,
  relatedPageIds: [
    id('loc-lv-henderson'),
    id(SERVICE_ID),
    id('svc-sewer-camera-inspection'),
    id('svc-sewer-line-locating'),
  ],
  relatedTitle: 'Related pages',
  cta: {
    title: 'Schedule a pre-purchase sewer inspection in Henderson',
    body: 'See the visible condition of the lateral on video, with written findings, before you close. Note your inspection deadline when you request service.',
  },
}
