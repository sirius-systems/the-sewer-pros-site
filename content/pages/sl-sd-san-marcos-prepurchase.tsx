/**
 * San Marcos, CA + Pre-Purchase Sewer Inspection (`sl-san-marcos-prepurchase`).
 *
 * Authority: CLAUDE.md §9, §22, §24, §26; docs/14-content-specification.md §43.
 *
 * One local source (`sanMarcosContent`, `loc-sd-san-marcos`) x one service
 * source (`svc-pre-purchase-sewer-inspection`, its `v2` block). Nothing here is
 * new research. Section recipe, each tied to what THIS service records or cannot:
 *   1. responsibility + buyingGuide - the City is not the sewer provider; each
 *      agency's wording shown separately; where Vallecitos serves, the lateral is
 *      the owner's from the building through its connection, so a defect found
 *      after closing is the buyer's
 *   2. buyingGuide - no sale-time rule found; a scope is not a district
 *      inspection or approval
 *   3. buyingGuide + systemExplainer - as-built records and boundary questions
 *      go to Vallecitos Engineering; footage records distance from the camera
 *      entry, not where the connection is
 *   4. municipalProgram - no lateral repair program found; no permit rule found
 *      for existing laterals; what a scope does not say about approvals
 * Swap the city and sections 1-4 fail; swap the service and 1-3 fail.
 *
 * ⚠ The location page shows no current date on any source and states no
 * housing-age figure, so none is given. This page never says which agency serves
 * an address and states no rule of Vista Irrigation District or Rincon del
 * Diablo Municipal Water District. DISTRICT NUMBERS ARE THE DISTRICT'S. No
 * company phone, office, price, offer, response time or guarantee appears. No
 * legal advice. Repair and replacement are never offered.
 *
 * Audit: docs/source-reports/san-diego/sl-san-marcos-prepurchase.md
 */

import type { PageId, ProcessContent, ServiceLocationPageContent } from '@/types'
import { sanMarcosContent } from './san-diego-san-marcos'
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
  sanMarcosContent.faq === undefined
) {
  throw new Error('sl-san-marcos-prepurchase: source content is missing')
}

// Alt text stays neutral: no place-specific photo is claimed.
const slots = pageImageSlots('sl-san-marcos-prepurchase', {
  hero: {
    alt: 'Technician starting a pre-purchase sewer scope at a for-sale home',
    shot: 'Technician at a for-sale property starting a pre-purchase scope, no identifiable address',
  },
  problems: [serviceShots[0], serviceShots[1], serviceShots[2], serviceShots[3]] as const,
})

/**
 * Every question from the San Marcos location page and the pre-purchase
 * service page, minus two: "What does a sewer camera inspection show?" (the
 * service page answers it in full as "What does a sewer scope look for?" and
 * "What does a sewer inspection not show?"), and the service page's generic
 * "Is a sewer scope required when buying or selling a house?" (the San Marcos
 * question "Is a sewer inspection required when buying a San Marcos home?"
 * answers it for this city).
 */
const faq = mergeRelevantFaqs(
  sanMarcosContent.faq,
  v2.faq,
  [
    'What does a sewer camera inspection show?',
    'Is a sewer scope required when buying or selling a house?',
  ],
  'In San Marcos',
)

const steps: ProcessContent[] = (v2.process?.steps ?? []).map((step) => ({
  title: step.title,
  description: typeof step.description === 'string' ? step.description : undefined,
}))

export const sanMarcosPrePurchaseContent: ServiceLocationPageContent = {
  seoTitle: 'Pre-Purchase Sewer Inspection in San Marcos, CA',
  metaDescription:
    'Buying in San Marcos, CA? Vallecitos says the lateral is the owner’s from the building to the main. See what a sewer scope shows before you close.',
  serviceDescription:
    'A pre-purchase sewer inspection is a sewer camera inspection arranged during a home purchase, recording the visible condition of the accessible sewer line serving a home in San Marcos, California, before closing.',
  heroImage: slots.hero,
  ctaImage: slots.cta,
  sources: sanMarcosContent.sources,
  hero: {
    eyebrow: 'San Marcos, CA',
    title: 'Pre-Purchase Sewer Inspection in San Marcos',
    intro: (
      <p>
        The City of San Marcos says it does not provide sewer service, so buying here starts with
        which agency serves the home. Where Vallecitos Water District does, the district says the
        owner is responsible for the lateral from the building through its connection to the main.
        We found no rule that asks for a lateral inspection when a home is sold. A pre-purchase
        sewer inspection records the visible condition of the accessible line on video, with written
        findings, before you close.
      </p>
    ),
  },
  body: (
    <>
      <h2>Three agencies, and what you take on at closing</h2>
      <ul>
        <li>
          <strong>City of San Marcos:</strong> it does not provide water or sewer service. One of
          three agencies does, depending on location.
        </li>
        <li>
          <strong>Vallecitos Water District:</strong> the owner is responsible for the lateral from
          the building through its connection to the district&rsquo;s main. The district maintains
          the main.
        </li>
        <li>
          <strong>Vista Irrigation District and Rincon del Diablo Municipal Water District:</strong>{' '}
          named by the City. We make no claim about their rules, so ask the agency.
        </li>
      </ul>
      <p>
        We do not say which agency serves a given home. Where it is Vallecitos, a lateral defect
        found after closing is the new owner&rsquo;s under the district&rsquo;s published rule, and
        a scope is how you see that line first.
      </p>

      <h2>No sale-time rule found, and a scope is not a district approval</h2>
      <p>
        We did not find a rule from Vallecitos, or on the City pages we reviewed, that requires a
        lateral inspection, certification or seller disclosure when a home is sold. That is
        &ldquo;none found&rdquo;, not a confirmed absence, and state-level rules are outside this
        page. A sewer scope is separate from a general home inspection, so ask your home inspector
        what theirs covers. It is not a district inspection or approval, and we make no claim that
        any agency accepts an outside report.
      </p>

      <h2>Records and boundaries come from Vallecitos Engineering</h2>
      <p>
        Vallecitos says its Engineering Department takes requests for as-built records, handled
        first-come, first-served, with charges for hard copies, and can tell you whether a parcel is
        inside its sewer boundary. A scope answers a different question: it records where along the
        line a condition sits, measured from where the camera entered. It does not establish where
        the lateral meets the main, so ask the district before you rely on an assumption. Where
        another agency serves the home, ask that agency for its own records.
      </p>

      <h2>No lateral repair program found, and a scope does not name the approvals</h2>
      <p>
        We did not find a Vallecitos grant or reimbursement for repairing an existing lateral. Its
        one reimbursement agreement is for a main-line extension. The district says it does not
        install private sewer connections, and a contractor the owner selects does that work. We
        found no statement that every repair of an existing lateral needs a particular permit, and
        the district&rsquo;s pages show no current date, so confirm with Vallecitos Engineering.
      </p>
      <p>
        A scope does not tell you which approvals apply to a defect it finds. Keep the video and
        written findings to compare against any estimate. The Sewer Pros inspects and documents; it
        does not repair or replace.
      </p>
    </>
  ),
  problems: [
    ...serviceProblems.map((p, i) => ({ ...p, image: slots.problems[i] })),
    {
      title: 'A home whose sewer agency is not yet confirmed',
      description:
        'The City says one of three agencies serves each San Marcos property, and we did not find a map that assigns every parcel. Vallecitos says its Engineering Department can tell you whether a parcel is inside its boundary. A scope records the accessible line but does not show which agency serves it.',
      image: slots.problems[3],
    },
  ],
  inclusions: serviceInclusions,
  process: steps,
  coverage: {
    title: 'Other San Diego area locations',
    intro:
      'This page covers the City of San Marcos. Sewer agencies and lateral rules differ across San Diego County, so use the page for the address you are buying.',
    pageIds: [
      id('loc-sd-san-diego'),
      id('loc-sd-carlsbad'),
      id('loc-sd-escondido'),
      id('loc-sd-oceanside'),
      id('loc-sd-chula-vista'),
      id('loc-sd-mission-valley'),
    ],
    availabilityStatement: 'San Marcos is a service area, not an office location.',
  },
  faq,
  relatedPageIds: [
    id('loc-sd-san-marcos'),
    id(SERVICE_ID),
    id('svc-sewer-camera-inspection'),
    id('svc-sewer-line-locating'),
  ],
  relatedTitle: 'Related pages',
  cta: {
    title: 'Schedule a pre-purchase sewer inspection in San Marcos',
    body: 'See the visible condition of the lateral on video, with written findings, before you close. Note your inspection deadline when you request service.',
  },
}
