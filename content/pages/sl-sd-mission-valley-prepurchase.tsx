/**
 * Mission Valley, San Diego + Pre-Purchase Sewer Inspection
 * (`sl-mission-valley-prepurchase`).
 *
 * Authority: CLAUDE.md §9, §22, §24, §26; docs/14-content-specification.md §43.
 *
 * One local source (`sanDiegoMissionValleyContent`, `loc-sd-mission-valley`) x
 * one service source (`svc-pre-purchase-sewer-inspection`, its `v2` block).
 * Nothing here is new research. Section recipe, each tied to what THIS service
 * records or cannot:
 *   1. responsibility + buyingGuide - the lateral is the buyer's after closing,
 *      to the City main, wherever that connection is; a scope is a separate,
 *      focused inspection
 *   2. buyingGuide - the City's advice to buyers is written for homes and is
 *      guidance; no sale-time rule found; a scope is not a permit or City check
 *   3. buyingGuide + whoToCall - where the lateral connects is a City records
 *      question; footage measures distance, not property lines; Plumber's Report
 *   4. municipalProgram + buyingGuide - a restaurant space: the FEWD permit and
 *      equipment records come from the City; a scope shows the line, not the
 *      equipment; the permit question
 * Swap the location and sections 1-4 fail; swap the service and 1-3 fail.
 *
 * ⚠ Mission Valley is a neighborhood (a City planning area). Only facts the
 * Mission Valley page itself states are used: no Council Policy 400-10, no EMRA
 * list, no yearly-flush advice. CITY NUMBERS ARE THE CITY'S, not ours. No
 * company phone, office, price, offer, response time or guarantee appears. No
 * legal advice. Repair and replacement are never offered.
 *
 * Audit: docs/source-reports/san-diego/sl-mission-valley-prepurchase.md
 */

import type { PageId, ProcessContent, ServiceLocationPageContent } from '@/types'
import { sanDiegoMissionValleyContent } from './san-diego-mission-valley'
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
  sanDiegoMissionValleyContent.faq === undefined
) {
  throw new Error('sl-mission-valley-prepurchase: source content is missing')
}

// Alt text stays neutral: no place-specific photo is claimed.
const slots = pageImageSlots('sl-mission-valley-prepurchase', {
  hero: {
    alt: 'Technician starting a pre-purchase sewer scope at a for-sale property',
    shot: 'Technician at a for-sale property starting a pre-purchase scope, no identifiable address',
  },
  problems: [
    serviceShots[0],
    serviceShots[1],
    serviceShots[2],
    {
      alt: 'Commercial street with a manhole cover near the curb',
      shot: 'Ordinary commercial or mixed-use street, manhole and curb, no business names or identifiable buildings',
    },
  ] as const,
})

/**
 * Every question from the Mission Valley location page and the pre-purchase
 * service page, minus one: the location page's "How often should a restaurant
 * line be cleaned?", which is about a cleaning schedule, not a purchase. The
 * service page's generic "Is a sewer scope required when buying or selling a
 * house?" stays, because the Mission Valley FAQ has no purchase question.
 */
const faq = mergeRelevantFaqs(
  sanDiegoMissionValleyContent.faq,
  v2.faq,
  ['How often should a restaurant line be cleaned?'],
  'In Mission Valley',
)

const steps: ProcessContent[] = (v2.process?.steps ?? []).map((step) => ({
  title: step.title,
  description: typeof step.description === 'string' ? step.description : undefined,
}))

export const missionValleyPrePurchaseContent: ServiceLocationPageContent = {
  seoTitle: 'Pre-Purchase Sewer Inspection in Mission Valley, San Diego',
  metaDescription:
    'Buying in Mission Valley, San Diego? The City says the owner maintains the lateral to the City main, and we found no sale-time inspection rule. See what a scope shows.',
  serviceDescription:
    'A pre-purchase sewer inspection is a sewer camera inspection arranged during a property purchase, recording the visible condition of the accessible sewer line serving a property in Mission Valley, a City of San Diego planning area in California, before closing.',
  heroImage: slots.hero,
  ctaImage: slots.cta,
  sources: sanDiegoMissionValleyContent.sources,
  hero: {
    eyebrow: 'Mission Valley, San Diego',
    title: 'Pre-Purchase Sewer Inspection in Mission Valley',
    intro: (
      <p>
        If you buy property in Mission Valley, a City of San Diego planning area, the City says the
        owner maintains the sewer lateral all the way to its connection with the City sewer main,
        even where that connection is in the street, an easement or a canyon. We found no City rule
        that asks for a lateral inspection when property is sold. A pre-purchase sewer inspection
        records the visible condition of the accessible line on video, with written findings, before
        you close.
      </p>
    ),
  },
  body: (
    <>
      <h2>What you take on when a Mission Valley sale closes</h2>
      <p>
        The City of San Diego says the property owner maintains the sewer lateral from the building
        all the way to its connection with the City sewer main. That connection can be in the
        street, beyond the property line, in an easement or in a canyon. After closing, that owner
        is you, and how a lease divides the duty between landlord and tenant is a matter for the
        lease, not legal advice.
      </p>
      <p>
        A sewer scope is a separate, focused inspection of the sewer line. It documents visible
        conditions in the section the camera reaches, on the day of the visit, whether the property
        is a home, a mixed-use building or a commercial space. Ask your home inspector what theirs
        covers.
      </p>

      <h2>The City&rsquo;s advice to buyers is written for homes, and no sale-time rule found</h2>
      <p>
        The City says that in addition to a home inspection, it is a good idea to get a
        licensed-plumber report on the condition of the home&rsquo;s lateral connection. That is
        City guidance, not a requirement. We did not find a City rule that requires a lateral
        inspection or sewer-lateral disclosure when property is sold. That is &ldquo;none
        found&rdquo;, not a confirmed absence, and it does not address lenders, leases,
        redevelopment permits or state-level rules.
      </p>
      <p>
        A scope is not a City permit or inspection, and we make no claim that the City accepts an
        outside report. The Sewer Pros inspects and documents; it does not repair or replace.
      </p>

      <h2>Where the lateral connects is a City records question</h2>
      <p>
        Development Services can show where a property&rsquo;s lateral connects to the City main
        (619-446-5300, the City&rsquo;s number), but the City says it has no diagrams of where
        private lines run on the property. The footage records where along the line a condition
        sits, measured from where the camera entered. It does not establish where a property line
        is, and where the route matters, line locating is a separate service.
      </p>
      <p>
        When a licensed plumber finds a break or collapse beyond the property line, the City directs
        the plumber to call 619-515-3525 (the City&rsquo;s number, not ours) and file a
        Plumber&rsquo;s Report. We did not find a current City statement of who pays for repairs
        beyond the property line.
      </p>

      <h2>A restaurant space: the grease paperwork starts with the City</h2>
      <p>
        If the space is a restaurant, ask the seller or landlord for the facility&rsquo;s FEWD
        permit and grease-removal equipment records. The City issues that permit, and says a remodel
        or retrofit needs a FEWD plan review. A scope shows the condition of the line. It does not
        show whether equipment meets the City&rsquo;s requirements.
      </p>
      <p>
        We found no City page on whether work confined to private property needs a permit, so ask
        Development Services (619-446-5242, the City&rsquo;s number).
      </p>
    </>
  ),
  problems: [
    ...serviceProblems.map((p, i) => ({ ...p, image: slots.problems[i] })),
    {
      title: 'A planning area, not a separate sewer utility',
      description:
        'Mission Valley is a City of San Diego planning area, and we did not find a separate Mission Valley sewer utility, so City Public Utilities rules apply. A particular parcel can still be an exception. A scope does not tell you which agency serves a parcel, so confirm your address with Public Utilities before you rely on any assumption.',
      image: slots.problems[3],
    },
  ],
  inclusions: serviceInclusions,
  process: steps,
  coverage: {
    title: 'Other San Diego area locations',
    intro:
      'This page covers the Mission Valley planning area. Sewer authorities and lateral rules differ across San Diego County, so use the page for the address you are buying.',
    pageIds: [
      id('loc-sd-san-diego'),
      id('loc-sd-san-marcos'),
      id('loc-sd-carlsbad'),
      id('loc-sd-escondido'),
      id('loc-sd-oceanside'),
      id('loc-sd-chula-vista'),
    ],
    availabilityStatement: 'Mission Valley is a service area, not an office location.',
  },
  faq,
  relatedPageIds: [
    id('loc-sd-mission-valley'),
    id(SERVICE_ID),
    id('svc-sewer-camera-inspection'),
    id('svc-sewer-line-locating'),
  ],
  relatedTitle: 'Related pages',
  cta: {
    title: 'Schedule a pre-purchase sewer inspection in Mission Valley',
    body: 'See the visible condition of the lateral on video, with written findings, before you close. Note your inspection deadline when you request service.',
  },
}
