/**
 * City of Las Vegas, NV + Pre-Purchase Sewer Inspection (`sl-lv-city-prepurchase`).
 *
 * Authority: CLAUDE.md §9, §22, §24, §26; docs/14-content-specification.md §43.
 *
 * One local source (`lasVegasCityContent`, `loc-lv-las-vegas`) x one service
 * source (`svc-pre-purchase-sewer-inspection`, its `v2` block). Nothing here is
 * new research. Section recipe, each tied to what THIS service records or cannot:
 *   1. buyingGuide.lede + responsibility - the lateral is the buyer's after
 *      closing, and the City's addenda carry it under the street
 *   2. buyingGuide.body + municipalProgram - no sale-time rule found, a scope is
 *      not a permit or a City inspection
 *   3. housingAge - a median-1994 city says little about one house's lateral
 *   4. systemExplainer + buyingGuide.body + whoToCall - which agency serves the
 *      address, the sewer map, where a scope and locating fit
 * Swap the city and sections 1-4 fail; swap the service and 1-3 fail.
 *
 * Audit: docs/source-reports/las-vegas-city/sl-lv-city-prepurchase.md
 *
 * ⚠ CITY NUMBERS ARE THE CITY'S, not ours. No company phone, office, price,
 * offer, response time or guarantee appears. No legal advice. Repair and
 * replacement are never offered.
 */

import type { PageId, ProcessContent, ServiceLocationPageContent } from '@/types'
import { lasVegasCityContent } from './las-vegas-las-vegas'
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
  lasVegasCityContent.faq === undefined
) {
  throw new Error('sl-lv-city-prepurchase: source content is missing')
}

// Alt text stays neutral: the location page allows Las Vegas wording only for a
// photo taken at a Las Vegas-area property.
const slots = pageImageSlots('sl-lv-city-prepurchase', {
  hero: {
    alt: 'Technician starting a pre-purchase sewer scope at a for-sale home',
    shot: 'Technician at a for-sale property starting a pre-purchase scope, no identifiable address',
  },
  problems: [serviceShots[0], serviceShots[1], serviceShots[2], serviceShots[3]] as const,
})

/**
 * Every question from the City of Las Vegas location page and the pre-purchase
 * service page, minus two: the location page's "What does a sewer camera
 * inspection show?" (the service page answers it in full as "What does a sewer
 * scope look for?" and "What does a sewer inspection not show?"), and the
 * service page's generic "Is a sewer scope required when buying or selling a
 * house?" (the Las Vegas question "Does Las Vegas require a sewer inspection
 * when a home is sold?" answers it for this city).
 */
const faq = mergeRelevantFaqs(
  lasVegasCityContent.faq,
  v2.faq,
  [
    'What does a sewer camera inspection show?',
    'Is a sewer scope required when buying or selling a house?',
  ],
  'In Las Vegas',
)

const steps: ProcessContent[] = (v2.process?.steps ?? []).map((step) => ({
  title: step.title,
  description: typeof step.description === 'string' ? step.description : undefined,
}))

export const lasVegasCityPrePurchaseContent: ServiceLocationPageContent = {
  seoTitle: 'Pre-Purchase Sewer Inspection in Las Vegas, NV',
  metaDescription:
    'Buying in Las Vegas, NV? The City says the private lateral is the owner’s to the City main, and we found no sale-time inspection rule. See what a scope shows.',
  serviceDescription:
    'A pre-purchase sewer inspection is a sewer camera inspection arranged during a home purchase, recording the visible condition of the accessible sewer line serving a home in the City of Las Vegas, Nevada, before closing.',
  heroImage: slots.hero,
  ctaImage: slots.cta,
  sources: lasVegasCityContent.sources,
  hero: {
    eyebrow: 'Las Vegas, NV',
    title: 'Pre-Purchase Sewer Inspection in Las Vegas',
    intro: (
      <p>
        If you buy a home in the City of Las Vegas, the City says the private sewer lateral is the
        owner&rsquo;s up to the point where it connects into the City sewer main, and its sewer
        standards addenda carry that under the public right-of-way. We found no City rule that asks
        for a lateral inspection when a home is sold. A pre-purchase sewer inspection records the
        visible condition of the accessible line on video, with written findings, before you close.
      </p>
    ),
  },
  body: (
    <>
      <h2>What you take on when a Las Vegas sale closes</h2>
      <p>
        The City of Las Vegas says private property owners maintain private sewer laterals up to the
        point where they connect into the City sewer main. Its sewer standards addenda say a private
        sewer stays private, even the portion in the public right-of-way, until that connection, so
        the owner&rsquo;s responsibility can run under the street. After closing, that owner is you.
      </p>
      <p>
        A pre-purchase inspection is how you see that line first. It documents visible conditions in
        the section the camera reaches, on the day of the visit. It does not establish
        where the connection to the City main is, or where your responsibility ends.
      </p>

      <h2>No sale-time rule found, so you have to ask</h2>
      <p>
        We did not find a rule on the City pages we reviewed that requires a lateral inspection,
        certification or seller disclosure when a home is sold. That is &ldquo;none
        found&rdquo;, not a confirmed absence, and it does not address state-level disclosure
        rules. We also found no City lateral repair, grant or reimbursement program.
      </p>
      <p>
        In practice an inspection is something a buyer chooses to ask for. The City says permits and
        inspections create a permanent record of work done on a home; a sewer scope is not a City
        permit or inspection, only your own record of what the camera saw. Findings are
        informational, not legal advice. The Sewer Pros inspects and documents; it does not repair
        or replace.
      </p>

      <h2>Most Las Vegas homes date from 1990 or later, but the year will not settle it</h2>
      <p>
        Las Vegas&rsquo;s median year built is 1994 (U.S. Census Bureau ACS 2020-2024 5-year
        estimates, Las Vegas city). About 61.3 percent of housing units were built in 1990 or
        later and 12.8 percent before 1970 (the groupings are our arithmetic on the Census decade
        rows).
      </p>
      <p>
        A house from either group can have any lateral, because a lateral can be
        repaired, rerouted or replaced after the house is built. The year on the listing does not
        give you its condition or material. A scope records what is visible, and a clear result is
        not proof the whole line is sound.
      </p>

      <h2>Which agency serves the address, and where a scope fits</h2>
      <ul>
        <li>
          A Las Vegas mailing address does not by itself show that the City serves a property. The
          City&rsquo;s sewer map, or Sanitary Sewer Engineering at 702-229-6541 (the City&rsquo;s
          number, not ours), can show whether it does.
        </li>
        <li>
          It also handles requests for the nearest public sewer location and point-of-connection
          conditions.
        </li>
        <li>
          For which approvals apply to work on a lateral, ask Building &amp; Safety at
          702-229-6251 (also the City&rsquo;s number).
        </li>
      </ul>
      <p>
        The City&rsquo;s map does not show every private line on a property. Line locating is a
        separate service that fills that gap, so ask whether it is part of your visit. An inspection does not tell you which approvals
        apply and does not replace any City review.
      </p>
    </>
  ),
  problems: [
    ...serviceProblems.map((p, i) => ({ ...p, image: slots.problems[i] })),
    {
      title: 'A Las Vegas address the City may not serve',
      description:
        'A Las Vegas mailing address does not by itself show that the City serves a property. Before you rely on any City rule, check the City’s sewer map or ask Sanitary Sewer Engineering which sewer serves the address you are buying.',
      image: slots.problems[3],
    },
  ],
  inclusions: serviceInclusions,
  process: steps,
  coverage: {
    title: 'Other Las Vegas Valley areas',
    intro:
      'This page covers the City of Las Vegas. Sewer agencies and lateral rules differ across the Las Vegas Valley, so use the page for the address you are buying.',
    pageIds: [id('loc-lv-henderson'), id('loc-lv-north-las-vegas'), id('loc-lv-summerlin')],
    availabilityStatement: 'Las Vegas is a service area, not an office location.',
  },
  faq,
  relatedPageIds: [
    id('loc-lv-las-vegas'),
    id(SERVICE_ID),
    id('svc-sewer-camera-inspection'),
    id('svc-sewer-line-locating'),
  ],
  relatedTitle: 'Related pages',
  cta: {
    title: 'Schedule a pre-purchase sewer inspection in Las Vegas',
    body: 'See the visible condition of the lateral on video, with written findings, before you close. Note your inspection deadline when you request service.',
  },
}
