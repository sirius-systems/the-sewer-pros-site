/**
 * Chula Vista, CA + Pre-Purchase Sewer Inspection (`sl-chula-vista-prepurchase`).
 *
 * Authority: CLAUDE.md §9, §22, §24, §26; docs/14-content-specification.md §43.
 *
 * One local source (`chulaVistaContent`, `loc-sd-chula-vista`) x one service
 * source (`svc-pre-purchase-sewer-inspection`, its `v2` block). Nothing here is
 * new research. Section recipe, each tied to what THIS service records or cannot:
 *   1. responsibility + buyingGuide - Council Policy 570-01 puts the lateral on
 *      the owner from the first foot off the public sewer, so a defect found
 *      after closing is the buyer's cost, apart from the narrow stoppage cases
 *   2. buyingGuide - no sale-time rule found; CVMC 13.08.100 and 13.08.110 are
 *      new-construction rules; a scope is not a City inspection or approval
 *   3. municipalProgram - the policy's reimbursement is for qualifying
 *      stoppages (licensed plumber's camera finding, 48 hours, street-tree
 *      proof), vs. what footage can and cannot establish; not a repair grant
 *   4. municipalProgram + buyingGuide - the permit before any repair, and what
 *      a scope does not tell a buyer about permits
 * Swap the city and sections 1-4 fail; swap the service and 1-3 fail.
 *
 * ⚠ The Chula Vista location page states NO housing-age figure and says the
 * system's age is not stated, so none is given. CITY NUMBERS ARE THE CITY'S,
 * not ours. No company phone, office, price, offer, response time or guarantee
 * appears. Council Policy 570-01 is never called a grant, and nothing says our
 * report meets its conditions. No legal advice. Repair and replacement are
 * never offered.
 *
 * Audit: docs/source-reports/san-diego/sl-chula-vista-prepurchase.md
 */

import type { PageId, ProcessContent, ServiceLocationPageContent } from '@/types'
import { chulaVistaContent } from './san-diego-chula-vista'
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
  chulaVistaContent.faq === undefined
) {
  throw new Error('sl-chula-vista-prepurchase: source content is missing')
}

// Alt text stays neutral: no place-specific photo is claimed.
const slots = pageImageSlots('sl-chula-vista-prepurchase', {
  hero: {
    alt: 'Technician starting a pre-purchase sewer scope at a for-sale home',
    shot: 'Technician at a for-sale property starting a pre-purchase scope, no identifiable address',
  },
  problems: [serviceShots[0], serviceShots[1], serviceShots[2], serviceShots[3]] as const,
})

/**
 * Every question from the Chula Vista location page and the pre-purchase
 * service page, minus three: the location page's CVSan correction (about which
 * agency serves Chula Vista, not about buying) and "What does a sewer camera
 * inspection show?" (the service page answers it in full as "What does a sewer
 * scope look for?" and "What does a sewer inspection not show?"), and the
 * service page's generic "Is a sewer scope required when buying or selling a
 * house?" (the Chula Vista question "Is a sewer inspection required when
 * buying a Chula Vista home?" answers it for this city).
 */
const faq = mergeRelevantFaqs(
  chulaVistaContent.faq,
  v2.faq,
  [
    'Is Chula Vista served by CVSan or a separate sanitation district?',
    'What does a sewer camera inspection show?',
    'Is a sewer scope required when buying or selling a house?',
  ],
  'In Chula Vista',
)

const steps: ProcessContent[] = (v2.process?.steps ?? []).map((step) => ({
  title: step.title,
  description: typeof step.description === 'string' ? step.description : undefined,
}))

export const chulaVistaPrePurchaseContent: ServiceLocationPageContent = {
  seoTitle: 'Pre-Purchase Sewer Inspection in Chula Vista, CA',
  metaDescription:
    'Buying in Chula Vista, CA? The City’s policy makes the lateral the owner’s from the first foot off the public sewer. See what a sewer scope shows.',
  serviceDescription:
    'A pre-purchase sewer inspection is a sewer camera inspection arranged during a home purchase, recording the visible condition of the accessible sewer line serving a home in Chula Vista, California, before closing.',
  heroImage: slots.hero,
  ctaImage: slots.cta,
  sources: chulaVistaContent.sources,
  hero: {
    eyebrow: 'Chula Vista, CA',
    title: 'Pre-Purchase Sewer Inspection in Chula Vista',
    intro: (
      <p>
        If you buy a home in Chula Vista, the City&rsquo;s written sewer policy puts the lateral on
        the owner from the first foot off the public sewer to the building. We found no City rule
        that asks for a lateral inspection when an existing home is sold. A pre-purchase sewer
        inspection records the visible condition of the accessible line on video, with written
        findings, before you close.
      </p>
    ),
  },
  body: (
    <>
      <h2>What you take on when a Chula Vista sale closes</h2>
      <p>
        The City of Chula Vista&rsquo;s Council Policy 570-01 says the owner maintains the lateral
        from its connection with the public sewer to the building, and beyond, at the owner&rsquo;s
        sole expense. The policy starts that duty at the first foot of the lateral off the outside
        of the public sewer. After closing, that owner is you.
      </p>
      <p>
        A pre-purchase inspection is how you see that line first, documenting visible conditions in
        the section the camera reaches. The only cases the policy routes to the City are a stoppage
        in the public sewer, in that first foot, or caused by a City street tree. A defect elsewhere
        on the lateral is a cost you carry.
      </p>

      <h2>No sale-time rule found, and what the code does cover</h2>
      <p>
        We did not find a rule on the City&rsquo;s pages or in the municipal code sections we
        reviewed that requires a lateral inspection, certification or seller disclosure when an
        existing home is sold. Two code sections address laterals in new construction, CVMC
        13.08.100 and 13.08.110, and neither mentions a sale. That is &ldquo;none found&rdquo;, not
        a confirmed absence, and state-level rules are outside this page.
      </p>
      <p>
        A sewer scope is separate from a general home inspection. It is not a City inspection or
        approval, and we make no claim that the City accepts an outside report. If the purchase
        involves a rebuild, an addition or reuse of an old lateral, ask the City&rsquo;s Development
        Services department first.
      </p>

      <h2>The City&rsquo;s stoppage reimbursement is not a repair grant</h2>
      <p>
        We did not find a City lateral repair or grant program. The policy says the City reimburses
        reasonable costs of locating and clearing a stoppage, if staff agree with a licensed
        plumber&rsquo;s camera finding that it is in the public sewer, in the first foot of the
        lateral, or caused by a City street tree. The owner must notify the City within 48 hours,
        and for a street tree must prove the cause.
      </p>
      <p>
        A scope records where along the line a condition sits, measured from where the camera
        entered. It does not establish where the first foot begins or where the City&rsquo;s
        responsibility starts, and we make no claim that our report meets the policy&rsquo;s
        conditions. Confirm the current policy text with Public Works at 619-397-6000 (the
        City&rsquo;s number), since the posted copy shows a 2014 revision with no resolution number.
      </p>

      <h2>A permit comes before any repair, and a scope does not say which</h2>
      <p>
        The City says repair or replacement of a lateral needs a City permit before work begins. The
        policy also has the owner expose the property line cleanout, normally within two to three
        feet of the property line, because City crews may not reach the lateral from any point
        further into private property.
      </p>
      <p>
        {' '}
        A scope does not tell you which approvals apply to a defect it finds, so ask the City. Keep
        the video and written findings to compare against any estimate. The Sewer Pros inspects and
        documents; it does not repair or replace.
      </p>
    </>
  ),
  problems: [
    ...serviceProblems.map((p, i) => ({ ...p, image: slots.problems[i] })),
    {
      title: 'A lateral whose first foot is hard to place',
      description:
        'The City’s policy starts the owner’s duty at the first foot of the lateral off the public sewer, and it treats a stoppage there differently from one further along. A scope records the accessible line but does not establish where that point is, so ask Public Works at 619-397-6000 (the City’s number) before you rely on any assumption.',
      image: slots.problems[3],
    },
  ],
  inclusions: serviceInclusions,
  process: steps,
  coverage: {
    title: 'Other San Diego area locations',
    intro:
      'This page covers the City of Chula Vista. Sewer authorities and lateral rules differ across San Diego County, so use the page for the address you are buying.',
    pageIds: [
      id('loc-sd-san-diego'),
      id('loc-sd-san-marcos'),
      id('loc-sd-carlsbad'),
      id('loc-sd-escondido'),
      id('loc-sd-oceanside'),
      id('loc-sd-mission-valley'),
    ],
    availabilityStatement: 'Chula Vista is a service area, not an office location.',
  },
  faq,
  relatedPageIds: [
    id('loc-sd-chula-vista'),
    id(SERVICE_ID),
    id('svc-sewer-camera-inspection'),
    id('svc-sewer-line-locating'),
  ],
  relatedTitle: 'Related pages',
  cta: {
    title: 'Schedule a pre-purchase sewer inspection in Chula Vista',
    body: 'See the visible condition of the lateral on video, with written findings, before you close. Note your inspection deadline when you request service.',
  },
}
