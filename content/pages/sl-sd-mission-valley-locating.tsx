/**
 * Mission Valley, San Diego, CA + Sewer Line Locating
 * (`sl-mission-valley-locating`).
 *
 * Authority: CLAUDE.md sections 9, 22, 24; docs/14-content-specification.md.
 * Built from exactly two sources, as `sl-sd-city-locating` is:
 *   LOCAL    `sanDiegoMissionValleyContent` (`loc-sd-mission-valley`)
 *   SERVICE  `svc-sewer-line-locating` v2 content (content/pages/services.tsx)
 *            and `./sl-blocks/sewer-line-locating`
 * Nothing here is new research.
 *
 * Section recipe (each section ties a Mission Valley fact to what a locate does):
 *   1. The City's records gap - the City has no diagrams of private lines on the
 *                               property; Development Services can help find the
 *                               connection; a locate fills the gap, as an estimate.
 *   2. Street, easement, canyon - the lateral runs to the City main wherever it
 *                               connects; no separate MV utility found; a locate
 *                               does not find the connection.
 *   3. Before anyone digs     - Right-of-Way Permit, FEWD plan review and the
 *                               underground interceptor, the private-property
 *                               permit gap, and the service's one-call wording.
 *   4. Buying or leasing      - City buyer advice, no point-of-sale rule found;
 *                               route is not condition.
 *
 * Mission Valley is a City of San Diego planning area: only facts the Mission
 * Valley location page states are used. No housing-age section exists there.
 *
 * ⚠ CITY NUMBERS ARE THE CITY'S, not ours. No company phone, price, offer,
 * response time, guarantee, emergency or same-day claim, equipment spec or
 * Mission Valley office appears. Repair and replacement are never presented as
 * offered. A locate is an ESTIMATE, not a survey, utility clearance or
 * permission to dig.
 */

import type { PageId, ProcessContent, ServiceLocationPageContent } from '@/types'
import { sanDiegoMissionValleyContent } from './san-diego-mission-valley'
import { serviceContent } from './services'
import { mergeRelevantFaqs, pageImageSlots } from './service-location-shared'
import { inclusions, problems, shots } from './sl-blocks/sewer-line-locating'

const id = (value: string): PageId => value as PageId

const slots = pageImageSlots('sl-mission-valley-locating', {
  hero: {
    alt: 'Technician using a sewer line locator receiver beside a building',
    shot: 'Technician with a locator receiver at a commercial or mixed-use property, paint marks on pavement, no identifiable address',
  },
  problems: shots,
})

const v2 = serviceContent[id('svc-sewer-line-locating')]?.v2
if (v2 === undefined || sanDiegoMissionValleyContent.faq === undefined) {
  throw new Error('sl-sd-mission-valley-locating: source content is missing')
}

/**
 * Every question from the Mission Valley location page and the locating service
 * page, minus the ones named here (reasons in the source report).
 */
const faq = mergeRelevantFaqs(
  sanDiegoMissionValleyContent.faq,
  v2.faq,
  [
    // Location page: a cleaning-interval question the locating page does not own.
    'How often should a restaurant line be cleaned?',
    // Service page: about cleaning and pipe health, off the locating topic.
    'If the line drains after cleaning, is the pipe healthy?',
  ],
  'In Mission Valley',
)

const steps: ProcessContent[] = (v2.process?.steps ?? []).map((step) => ({
  title: step.title,
  description: typeof step.description === 'string' ? step.description : undefined,
}))

export const missionValleyLocatingContent: ServiceLocationPageContent = {
  seoTitle: 'Sewer Line Locating in Mission Valley, San Diego',
  metaDescription:
    'Sewer line locating for Mission Valley, San Diego properties. The City has no diagrams of private sewer lines on your lot. See what a locate is and is not.',
  serviceDescription:
    'Sewer line locating estimates where an accessible underground sewer line runs, using a transmitter inside the line and a receiver at the surface, for properties in Mission Valley, San Diego, California. Results are estimates, not a survey.',
  heroImage: slots.hero,
  ctaImage: slots.cta,
  sources: sanDiegoMissionValleyContent.sources,
  hero: {
    eyebrow: 'Mission Valley, San Diego',
    title: 'Sewer Line Locating in Mission Valley',
    intro: (
      <p>
        Mission Valley is a City of San Diego planning area, the owner maintains the sewer lateral
        all the way to the City main, and the City says it has no diagrams of where private sewer
        lines run on the property. Sewer line locating estimates where the accessible line runs, so
        you can plan digging, remodeling or other work around it.
      </p>
    ),
  },
  body: (
    <>
      <h2>The City can help find the connection, not the line on your lot</h2>
      <p>
        The City of San Diego says Development Services can show where a property&rsquo;s lateral
        connects to the City main, at 619-446-5300 (the City&rsquo;s number, not ours), but that it
        has no diagrams of where private lines run on the property. On a mixed-use or commercial
        parcel, with several buildings or tenants on one lot, that gap is easy to hit.
      </p>
      <p>
        A locating service fills that gap. It estimates the path of the accessible line, and it is
        an estimate for planning, not a survey.
      </p>

      <h2>A lateral can end in the street, an easement or a canyon</h2>
      <p>
        We did not find a separate Mission Valley sewer utility, and the City says the owner
        maintains the lateral to its connection with the City main, even when that connection is
        beyond the property line, in an easement or in a canyon. A particular parcel can still be an
        exception, so confirm with Public Utilities. A locate estimates the path of the part of the
        line the equipment could trace. It does not establish where the connection to the City main
        is.
      </p>

      <h2>Before anyone digs: permits, interceptors and your one-call program</h2>
      <p>
        The City says a Right-of-Way Permit is required for work in the public right-of-way or in a
        water or sewer easement. It also says a new food service establishment, remodel or retrofit
        needs a FEWD plan review, and that a gravity grease interceptor is a larger tank installed
        underground outside the facility. Where a project like that means digging near the lateral,
        knowing the route matters. For plan checks, call 858-654-4188 (the City&rsquo;s number).
      </p>
      <p>
        We found no City page on whether work confined to private property needs a permit, so ask
        Development Services at 619-446-5242 (the City&rsquo;s number). A locate is not utility
        clearance or permission to dig, and it does not replace a permit. Before anyone digs,
        contact your state one-call program (often reached at 811) or your local utility and follow
        applicable requirements.
      </p>

      <h2>Buying or leasing in Mission Valley: the route is not the condition</h2>
      <p>
        For homes, the City says it is a good idea for a prospective buyer to get a licensed-plumber
        report on the condition of the lateral connection, in addition to a home inspection. That is
        City guidance, not a requirement, and we did not find a City sewer-lateral inspection rule
        at sale. That is none found, not a confirmed absence. If you lease space, how a lease
        divides the duty is a matter for the lease, not legal advice.
      </p>
      <p>
        A locate can help weigh what could be built near the line. It says nothing about the
        pipe&rsquo;s condition. A camera inspection does that.
      </p>
    </>
  ),
  problems: [
    ...problems.map((p, i) => ({ ...p, image: slots.problems[i] })),
    {
      title: 'The City has no diagrams of private lines on your lot',
      description:
        'The City says Development Services can show where a lateral connects to the City main, but it has no diagrams of where private sewer lines run on the property. A locate estimates the route of the accessible line.',
      image: slots.problems[3],
    },
  ],
  // Six items: renders as two rows of three.
  inclusions,
  process: steps,
  coverage: {
    title: 'Other San Diego area locations',
    intro:
      'This page covers the Mission Valley planning area. Sewer agencies and lateral rules differ across San Diego County, so use the page for your address.',
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
  // All relevant questions from the Mission Valley location page and the locating
  // service page (see `faq` above).
  faq,
  relatedPageIds: [
    id('loc-sd-mission-valley'),
    id('svc-sewer-line-locating'),
    id('svc-sewer-camera-inspection'),
    id('svc-pre-purchase-sewer-inspection'),
  ],
  relatedTitle: 'Related pages',
  cta: {
    title: 'Request sewer line locating in Mission Valley',
    body: 'Plan around your lateral with an estimate of where it runs. A locate is not a survey or permission to dig.',
  },
}
