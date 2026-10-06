/**
 * Mission Valley, San Diego + Preventative Sewer Maintenance
 * (`sl-mission-valley-maintenance`).
 *
 * Authority: CLAUDE.md §9, §22, §24; docs/14-content-specification.md §43.
 *
 * One local source (`sanDiegoMissionValleyContent`, `loc-sd-mission-valley`) x
 * one service source (`svc-preventative-sewer-maintenance`, its `v2` block).
 * Nothing here is new research. Section recipe, each tied to what THIS service
 * does or cannot:
 *   1. responsibility + systemExplainer - the owner maintains the lateral to the
 *      City main; a multi-tenant lateral; no standard interval
 *   2. municipalProgram.callout - establish the condition, clean on an interval
 *      the evidence supports, re-inspect; what a visit records and cannot
 *   3. systemExplainer + municipalProgram.covers - kitchen grease and the City's
 *      FEWD permit: what a maintenance visit is not
 *   4. municipalProgram + callout - occupied-site access, none found, suspended
 *      crew program, the permit question, not an emergency response
 * Swap the location and sections 1-4 fail; swap the service and 1-3 fail.
 *
 * ⚠ Mission Valley is a neighborhood (a City planning area). Only facts the
 * Mission Valley page itself states are used: no Council Policy 400-10 and no
 * yearly-flush advice, so this page does not say the City recommends or
 * requires any cleaning schedule. NO INTERVAL, SCHEDULE, PLAN OR CONTRACT is
 * claimed for The Sewer Pros. The service page states none.
 * ⚠ CITY NUMBERS ARE THE CITY'S, not ours. No company phone, office, price,
 * offer, response time or guarantee appears. Repair and replacement are never
 * offered.
 *
 * Audit: docs/source-reports/san-diego/sl-mission-valley-maintenance.md
 */

import type { PageId, ProcessContent, ServiceLocationPageContent } from '@/types'
import { sanDiegoMissionValleyContent } from './san-diego-mission-valley'
import { serviceContent } from './services'
import { mergeRelevantFaqs, pageImageSlots } from './service-location-shared'
import { inclusions, problems, shots } from './sl-blocks/preventative-sewer-maintenance'

const id = (value: string): PageId => value as PageId

const SERVICE_ID = 'svc-preventative-sewer-maintenance'

const v2 = serviceContent[id(SERVICE_ID)]?.v2
if (v2 === undefined || sanDiegoMissionValleyContent.faq === undefined) {
  throw new Error('sl-mission-valley-maintenance: source content is missing')
}

// Alt text stays neutral: no place-specific photo is claimed.
const slots = pageImageSlots('sl-mission-valley-maintenance', {
  hero: {
    alt: 'Technician on a scheduled sewer maintenance visit at a commercial building',
    shot: 'Technician at a cleanout during a maintenance visit at a commercial or mixed-use property, monitor in frame, no identifiable address',
  },
  problems: [
    shots[0],
    shots[1],
    shots[2],
    {
      alt: 'Commercial street with a manhole cover near the curb',
      shot: 'Ordinary commercial or mixed-use street, manhole and curb, no business names or identifiable buildings',
    },
  ] as const,
})

/**
 * Every question from the Mission Valley location page and the maintenance
 * service page, minus one: "Do you repair or replace sewer lines?", which the
 * service page's "Do you offer sewer repair or replacement?" answers in full.
 * "How often should a restaurant line be cleaned?" stays: it is the Mission
 * Valley, kitchen-line version of the service page's "How often should I
 * schedule it?".
 */
const faq = mergeRelevantFaqs(
  sanDiegoMissionValleyContent.faq,
  v2.faq,
  ['Do you repair or replace sewer lines?'],
  'In Mission Valley',
)

const steps: ProcessContent[] = (v2.process?.steps ?? []).map((step) => ({
  title: step.title,
  description: typeof step.description === 'string' ? step.description : undefined,
}))

export const missionValleyMaintenanceContent: ServiceLocationPageContent = {
  seoTitle: 'Preventative Sewer Maintenance in Mission Valley, San Diego',
  metaDescription:
    'Preventative sewer maintenance in Mission Valley, San Diego. The owner maintains the lateral to the City main; evidence sets the interval. See what a visit covers.',
  serviceDescription:
    "Preventative sewer maintenance is planned inspection and cleaning of a property's drain and sewer line before buildup or an obstruction causes a backup, for properties in Mission Valley, a City of San Diego planning area in California. It is diagnostic and cleaning work, not repair.",
  heroImage: slots.hero,
  ctaImage: slots.cta,
  sources: sanDiegoMissionValleyContent.sources,
  hero: {
    eyebrow: 'Mission Valley, San Diego',
    title: 'Preventative Sewer Maintenance in Mission Valley',
    intro: (
      <p>
        In Mission Valley, a City of San Diego planning area, the City says the owner maintains the
        sewer lateral all the way to its connection with the City sewer main, and food service
        businesses answer to the City&rsquo;s grease permit program. Preventative sewer maintenance
        is the planned version with evidence: a camera pass that records the visible condition of
        the accessible line, and cleaning when it is appropriate, before buildup becomes a backup.
      </p>
    ),
  },
  body: (
    <>
      <h2>The City says the owner maintains the lateral to the City main</h2>
      <p>
        The City of San Diego says the property owner maintains the sewer lateral from the building
        all the way to its connection with the City sewer main, in the street, beyond the property
        line, in an easement or in a canyon. For a multi-tenant building that lateral carries many
        fixtures, so one failure can reach every tenant at once. How a lease divides the duty is a
        matter for the lease, not legal advice.
      </p>
      <p>
        We state no interval for a maintenance visit. How often a kitchen line needs cleaning
        depends on volume, what enters the line and its condition, not on a standard interval.
      </p>

      <h2>Establish the condition, clean on what the evidence supports</h2>
      <p>
        On a line that carries grease or continuous volume, the useful pattern is usually to
        establish the line&rsquo;s condition, clean on an interval the evidence supports, and
        re-inspect, rather than respond to backups as they happen. Not every line needs that. A
        visit includes a recorded camera pass through the accessible section, with anything that
        limits the view noted, then cleaning if buildup or an obstruction is present.
      </p>
      <ul>
        <li>
          The footage records where along the line a condition sits, measured from where the camera
          entered.
        </li>
        <li>It does not establish where the connection to the City main is.</li>
        <li>Cleaning does not repair pipe. The Sewer Pros does not perform repairs.</li>
      </ul>

      <h2>Kitchen grease: what the City permits and what a visit does not</h2>
      <p>
        The City names grease, along with roots, as a leading cause of sewer spills. It says every
        food service establishment within it needs a permit from its FEWD program, so the facility
        installs equipment that traps cooking fats, oil and grease, and a small interior device and
        a larger underground tank are the two kinds it describes.
      </p>
      <p>
        A maintenance visit is not service of that equipment, and we make no claim that it satisfies
        any FEWD or permit requirement. Questions about equipment go to the City&rsquo;s FEWD
        program at 858-654-4188 (the City&rsquo;s number).
      </p>

      <h2>On an occupied site, access is part of the plan</h2>
      <p>
        Access on an occupied commercial site means trading hours, tenants, service corridors and
        other contractors. That is a planning constraint to raise when you request service, and a
        failure can cost lost trading time and displaced tenants on top of the plumbing.
      </p>
      <p>
        We did not find an active City program that gives owners help with lateral costs, and the
        City says its program for City crews to install sewer laterals is currently suspended. That
        is &ldquo;none found&rdquo;, not a statement that none exists, so confirm with Public
        Utilities. We found no City page on whether work confined to private property needs a
        permit, so ask Development Services (619-446-5242, the City&rsquo;s number). A visit is not
        an emergency response; for a sewer spill or bad odor the City asks you to call 619-515-3525
        (also the City&rsquo;s number).
      </p>
    </>
  ),
  problems: [
    ...problems.map((p, i) => ({ ...p, image: slots.problems[i] })),
    {
      title: 'A remodel or restaurant retrofit',
      description:
        'The City says plans for new food service construction, remodels and retrofits must receive a FEWD plan review. A camera pass records the visible condition of the accessible lateral before you plan, which gives you a baseline. It does not review plans or satisfy a permit.',
      image: slots.problems[3],
    },
  ],
  inclusions,
  process: steps,
  coverage: {
    title: 'Other San Diego area locations',
    intro:
      'This page covers the Mission Valley planning area. Sewer authorities and lateral rules differ across San Diego County, so use the page for your address.',
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
    id('svc-sewer-cleaning'),
  ],
  relatedTitle: 'Related pages',
  cta: {
    title: 'Request preventative sewer maintenance in Mission Valley',
    body: 'Tell us what you have noticed and what the line’s history looks like. We will talk through access and what a visit would include.',
  },
}
