/**
 * Oceanside, CA + Pre-Purchase Sewer Inspection (`sl-oceanside-prepurchase`).
 *
 * Authority: CLAUDE.md §9, §22, §24, §26; docs/14-content-specification.md §43.
 *
 * One local source (`oceansideContent`, `loc-sd-oceanside`) x one service
 * source (`svc-pre-purchase-sewer-inspection`, its `v2` block). Nothing here is
 * new research. Section recipe, each tied to what THIS service records or
 * cannot:
 *   1. responsibility + buyingGuide - the City says the private line runs
 *      "from the street to your house" and is the owner's, so after closing it
 *      is the buyer's; the scope records the accessible line, not where the
 *      City's part ends
 *   2. buyingGuide - no sale-time rule found; a scope is separate from a home
 *      inspection and is not a City inspection or approval
 *   3. housingAge - the Census median year built vs. what only an inspection of
 *      the line can show
 *   4. municipalProgram - no repair program found, the improvement-plan rule
 *      and permits vs. what a scope does not tell a buyer
 * Swap the city and sections 1-4 fail; swap the service and 1-3 fail.
 *
 * ⚠ OCEANSIDE HAS ONE SEWER AGENCY (the City). The page never says the City
 * serves a given address; it says to confirm that with Water Utilities. The
 * City does not publish the exact connection point. CITY NUMBERS ARE THE
 * CITY'S, not ours. No company phone, office, price, offer, response time or
 * guarantee appears. Nothing says the City accepts or requires our report. No
 * legal advice. Repair and replacement are never offered. Consistent with
 * `sl-oceanside-cleaning`.
 *
 * Audit: docs/source-reports/san-diego/sl-oceanside-prepurchase.md
 */

import type { PageId, ProcessContent, ServiceLocationPageContent } from '@/types'
import { oceansideContent } from './san-diego-oceanside'
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
  oceansideContent.faq === undefined
) {
  throw new Error('sl-oceanside-prepurchase: source content is missing')
}

// Alt text stays neutral: no place-specific photo is claimed.
const slots = pageImageSlots('sl-oceanside-prepurchase', {
  hero: {
    alt: 'Technician starting a pre-purchase sewer scope at a for-sale home',
    shot: 'Technician at a for-sale property starting a pre-purchase scope, no identifiable address',
  },
  problems: [serviceShots[0], serviceShots[1], serviceShots[2], serviceShots[3]] as const,
})

/**
 * Every question from the Oceanside location page and the pre-purchase service
 * page, minus two: the location page's "What does a sewer camera inspection
 * show?" (the service page answers it in full as "What does a sewer scope look
 * for?" and "What does a sewer inspection not show?") and the service page's
 * generic "Is a sewer scope required when buying or selling a house?" (the
 * Oceanside question "Is a sewer inspection required when buying an Oceanside
 * home?" answers it for this city).
 */
const faq = mergeRelevantFaqs(
  oceansideContent.faq,
  v2.faq,
  [
    'What does a sewer camera inspection show?',
    'Is a sewer scope required when buying or selling a house?',
  ],
  'In Oceanside',
)

const steps: ProcessContent[] = (v2.process?.steps ?? []).map((step) => ({
  title: step.title,
  description: typeof step.description === 'string' ? step.description : undefined,
}))

export const oceansidePrePurchaseContent: ServiceLocationPageContent = {
  seoTitle: 'Pre-Purchase Sewer Inspection in Oceanside, CA',
  metaDescription:
    'Buying in Oceanside, CA? The City says the private sewer line is the owner’s, and we found no sale-time rule. See what a sewer scope shows.',
  serviceDescription:
    'A pre-purchase sewer inspection is a sewer camera inspection arranged during a home purchase, recording the visible condition of the accessible sewer line serving a home in Oceanside, California, before closing.',
  heroImage: slots.hero,
  ctaImage: slots.cta,
  sources: oceansideContent.sources,
  hero: {
    eyebrow: 'Oceanside, CA',
    title: 'Pre-Purchase Sewer Inspection in Oceanside',
    intro: (
      <p>
        If you buy a home in Oceanside, the City says private sewer lines, &ldquo;from the street to
        your house,&rdquo; are the owner&rsquo;s responsibility. We found no City rule that asks for
        a lateral inspection when a home is sold. A pre-purchase sewer inspection records the
        visible condition of the accessible line on video, with written findings, before you close.
      </p>
    ),
  },
  body: (
    <>
      <h2>What you take on when an Oceanside sale closes</h2>
      <p>
        The City of Oceanside Water Utilities Department runs the public sewer system. The City says
        private sewer lines, &ldquo;from the street to your house,&rdquo; are the property
        owner&rsquo;s responsibility, so after closing that owner is you. We did not find the exact
        point where the City&rsquo;s part ends, or whether the owner&rsquo;s part includes the
        section under the street.
      </p>
      <p>
        A pre-purchase inspection is how you see that line first, documenting visible conditions in
        the section the camera reaches. It records where along the line a condition sits, measured
        from where the camera entered. It does not establish where the City&rsquo;s part begins.
      </p>

      <h2>No sale-time rule found, so a scope is the buyer&rsquo;s choice</h2>
      <p>
        We did not find a rule on the City pages or municipal code pages we reviewed that requires a
        sewer lateral inspection, certification or seller disclosure when a home is sold. That is
        &ldquo;none found&rdquo;, not a confirmed absence, and state-level disclosure rules are
        outside this page. A buyer who wants evidence of the line&rsquo;s condition has to ask for
        it.
      </p>
      <p>
        A sewer scope is a separate, focused inspection, so ask your home inspector what theirs
        covers. It is not a City inspection or approval, and we make no claim that the City requires
        or accepts an outside report.
      </p>

      <h2>A 1984 median year built is not a view of the line</h2>
      <p>
        Oceanside&rsquo;s median year built is 1984, plus or minus 2 years, per the U.S. Census
        Bureau&rsquo;s American Community Survey (2020-2024 5-year estimates). Our arithmetic puts
        16.9 percent of housing units before 1970, 48.6 percent from 1970 to 1989 and 34.5 percent
        in 1990 or later.
      </p>
      <p>
        Those counts describe homes, not pipes. A lateral can be repaired, rerouted or replaced
        after a house is built, and the Census place may not match the City&rsquo;s service area. No
        rule sets a home age at which a scope is required, so only an inspection of the line you are
        buying shows what is there.
      </p>

      <h2>No City repair program found, and a scope does not say which approvals apply</h2>
      <p>
        We did not find a City lateral repair, replacement, grant or reimbursement program. The City
        says sewer improvements in a public right-of-way, a City easement or City property need an
        improvement plan approved by Water Utilities, and that work on private property may trigger
        a permit. We did not find a rule that covers every repair of an existing lateral.
      </p>
      <p>
        A scope does not tell you which approvals apply to a defect it finds, so ask Water Utilities
        and Development Services. Keep the video and written findings to compare against any
        estimate. The Sewer Pros inspects and documents; it does not repair or replace.
      </p>
    </>
  ),
  problems: [
    ...serviceProblems.map((p, i) => ({ ...p, image: slots.problems[i] })),
    {
      title: 'An address you cannot yet place in the City’s system',
      description:
        'We did not find a map or statement placing any property inside the city under a different wastewater agency. Ask Water Utilities at (760) 435-5800, the City’s number, not ours, to confirm it serves the address and where its part of the system ends. A scope does not establish either.',
      image: slots.problems[3],
    },
  ],
  inclusions: serviceInclusions,
  process: steps,
  coverage: {
    title: 'Other San Diego area locations',
    intro:
      'This page covers the City of Oceanside. Sewer authorities and lateral rules differ across San Diego County, so use the page for the address you are buying.',
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
  faq,
  relatedPageIds: [
    id('loc-sd-oceanside'),
    id(SERVICE_ID),
    id('svc-sewer-camera-inspection'),
    id('svc-sewer-line-locating'),
  ],
  relatedTitle: 'Related pages',
  cta: {
    title: 'Schedule a pre-purchase sewer inspection in Oceanside',
    body: 'See the visible condition of the lateral on video, with written findings, before you close. Note your inspection deadline when you request service.',
  },
}
