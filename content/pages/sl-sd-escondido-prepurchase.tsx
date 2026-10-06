/**
 * Escondido, CA + Pre-Purchase Sewer Inspection (`sl-escondido-prepurchase`).
 *
 * Authority: CLAUDE.md §9, §22, §24, §26; docs/14-content-specification.md §43.
 *
 * One local source (`escondidoContent`, `loc-sd-escondido`) x one service
 * source (`svc-pre-purchase-sewer-inspection`, its `v2` block). Nothing here is
 * new research. Section recipe, each tied to what THIS service records or cannot:
 *   1. responsibility + keyTakeaways - section 22-165 puts the lateral and the
 *      cost of verifying breakage on the owner, so after closing that is the
 *      buyer; the City is responsible only for damage the owner proves it caused
 *   2. buyingGuide + responsibility - no sale-time rule found; which agency
 *      serves the address is not stated here; a scope is not a City inspection
 *   3. municipalProgram - the code's City-present video inspection for
 *      City-caused damage vs. what a scope's footage records and cannot establish
 *   4. housingAge + municipalProgram + whoToCall - none found; Census median
 *      year built (homes, not pipes); the permit before any repair
 * Swap the city and sections 1-4 fail; swap the service and 1-3 fail.
 *
 * ⚠ Section 22-165 is quoted for at most nine words; the rest is paraphrase,
 * worded as `sl-escondido-cleaning` words it (owner pays; "none found"). The
 * page never says the City pays for damage, never says a grant exists, never
 * says our scope satisfies the code or replaces the City-present inspection, and
 * never says who may perform lateral repair. CITY NUMBERS ARE THE CITY'S, not
 * ours. The Census figure is stated as the location page states it (ACS
 * 2020-2024, median year built 1981); the page draws no conclusion about pipes.
 * No company phone, office, price, offer, response time or guarantee appears.
 * No legal advice. Repair and replacement are never offered.
 *
 * Audit: docs/source-reports/san-diego/sl-escondido-prepurchase.md
 */

import type { PageId, ProcessContent, ServiceLocationPageContent } from '@/types'
import { escondidoContent } from './san-diego-escondido'
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
  escondidoContent.faq === undefined
) {
  throw new Error('sl-escondido-prepurchase: source content is missing')
}

// Alt text stays neutral: no place-specific photo is claimed.
const slots = pageImageSlots('sl-escondido-prepurchase', {
  hero: {
    alt: 'Technician starting a pre-purchase sewer scope at a for-sale home',
    shot: 'Technician at a for-sale property starting a pre-purchase scope, no identifiable address',
  },
  problems: [serviceShots[0], serviceShots[1], serviceShots[2], serviceShots[3]] as const,
})

/**
 * Every question from the Escondido location page and the pre-purchase service
 * page, minus three: the location page's "What does a sewer camera inspection
 * show?" (the service page answers it in full as "What does a sewer scope look
 * for?" and "What does a sewer inspection not show?"), and the service page's
 * generic "Is a sewer scope required when buying or selling a house?" (the
 * Escondido question "Is a sewer inspection required when buying an Escondido
 * home?" answers it for this city). "Do you repair or replace sewer lines?" is
 * kept: a buyer reading a scope result needs it.
 */
const faq = mergeRelevantFaqs(
  escondidoContent.faq,
  v2.faq,
  [
    'What does a sewer camera inspection show?',
    'Is a sewer scope required when buying or selling a house?',
  ],
  'In Escondido',
)

const steps: ProcessContent[] = (v2.process?.steps ?? []).map((step) => ({
  title: step.title,
  description: typeof step.description === 'string' ? step.description : undefined,
}))

export const escondidoPrePurchaseContent: ServiceLocationPageContent = {
  seoTitle: 'Pre-Purchase Sewer Inspection in Escondido, CA',
  metaDescription:
    'Buying in Escondido, CA? Municipal Code 22-165 puts the lateral on the owner up to the main. See what a sewer scope shows before you close.',
  serviceDescription:
    'A pre-purchase sewer inspection is a sewer camera inspection arranged during a home purchase, recording the visible condition of the accessible sewer line serving a home in Escondido, California, before closing.',
  heroImage: slots.hero,
  ctaImage: slots.cta,
  sources: escondidoContent.sources,
  hero: {
    eyebrow: 'Escondido, CA',
    title: 'Pre-Purchase Sewer Inspection in Escondido',
    intro: (
      <p>
        If you buy a home in Escondido, section 22-165 of the Municipal Code puts the sewer lateral
        on the owner, up to and including the connection to the City&rsquo;s main. We found no City
        rule that asks for a lateral inspection when an existing home is sold. A pre-purchase sewer
        inspection records the visible condition of the accessible line on video, with written
        findings, before you close.
      </p>
    ),
  },
  body: (
    <>
      <h2>What you take on when an Escondido sale closes</h2>
      <p>
        Section 22-165 of the Escondido Municipal Code makes the owner responsible for all
        maintenance, repair, replacement, cleaning and removal of blockages in the sewer connection
        lateral, and for the cost of verifying that it is broken or damaged. After closing, that
        owner is you. The City maintains the public sewer main.
      </p>
      <p>
        A pre-purchase inspection is how you see that line first, documenting visible conditions in
        the section the camera reaches. The one exception the code makes is damage the owner proves
        came from work by the City or a contractor working for the City. A defect found after
        closing is otherwise a cost you carry.
      </p>

      <h2>No sale-time rule found, and the address still has to be checked</h2>
      <p>
        We did not find a rule on the City&rsquo;s code article, lateral FAQ or wastewater page that
        requires a lateral inspection, certification or seller disclosure when an existing home is
        sold. That is &ldquo;none found&rdquo;, not a confirmed absence, and state-level rules are
        outside this page.
      </p>
      <p>
        Parts of Escondido are served by Vallecitos Water District and some properties are on
        septic, so confirm which applies to the address you are buying. A sewer scope is separate
        from a general home inspection. It is not a City inspection or approval, and we make no
        claim that the City accepts an outside report.
      </p>

      <h2>The code&rsquo;s City-present video is not a buyer&rsquo;s scope</h2>
      <p>
        To show that City work caused damage, section 22-165 describes a video inspection from a
        ground-level cleanout or a breakout opening, done in the presence of a qualified City
        wastewater maintenance employee, and it says the City decides when and where. A scope
        arranged during a purchase is a different thing.
      </p>
      <p>
        Its footage records where along the line a condition sits, measured from where the camera
        entered. It does not establish where the connection to the main is, or where the
        City&rsquo;s responsibility begins, and it does not replace the City-present inspection.
      </p>

      <h2>No program found, a 1981 median, and a permit before any repair</h2>
      <p>
        We found no City lateral repair, replacement, grant or reimbursement program. The Census
        median year built for Escondido is 1981, and about half of housing units were built in the
        1970s and 1980s. The Census counts homes, not sewer pipes, so house age does not show what a
        lateral is made of or how it is holding up. A scope of the line does.
      </p>
      <p>
        The City says a repair permit is required before any lateral repair begins, even on private
        property. Its Building Division is at (760) 839-4647 (the City&rsquo;s number, not ours). A
        scope does not tell you which approvals apply to a defect it finds. Keep the video and
        written findings to compare against any estimate. The Sewer Pros inspects and documents; it
        does not repair or replace.
      </p>
    </>
  ),
  problems: [
    ...serviceProblems.map((p, i) => ({ ...p, image: slots.problems[i] })),
    {
      title: 'A property line cleanout nobody can find',
      description:
        'Section 22-165(b) makes the owner responsible for locating, exposing and maintaining the property line cleanout, so the lateral can be inspected, cleaned and cleared. A camera most often goes in through an exterior cleanout. Ask before you book whether the home you are buying has an accessible one.',
      image: slots.problems[3],
    },
  ],
  inclusions: serviceInclusions,
  process: steps,
  coverage: {
    title: 'Other San Diego area locations',
    intro:
      'This page covers the City of Escondido. Sewer agencies and lateral rules differ across San Diego County, so use the page for the address you are buying.',
    pageIds: [
      id('loc-sd-san-diego'),
      id('loc-sd-san-marcos'),
      id('loc-sd-carlsbad'),
      id('loc-sd-oceanside'),
      id('loc-sd-chula-vista'),
      id('loc-sd-mission-valley'),
    ],
    availabilityStatement: 'Escondido is a service area, not an office location.',
  },
  faq,
  relatedPageIds: [
    id('loc-sd-escondido'),
    id(SERVICE_ID),
    id('svc-sewer-camera-inspection'),
    id('svc-sewer-line-locating'),
  ],
  relatedTitle: 'Related pages',
  cta: {
    title: 'Schedule a pre-purchase sewer inspection in Escondido',
    body: 'See the visible condition of the lateral on video, with written findings, before you close. Note your inspection deadline when you request service.',
  },
}
