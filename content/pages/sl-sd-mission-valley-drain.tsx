/**
 * Mission Valley, San Diego + Drain Cleaning (`sl-mission-valley-drain`).
 *
 * Built from exactly two sources, as `sl-sd-city-drain` is:
 *   LOCATION  `sanDiegoMissionValleyContent`  (content/pages/san-diego-mission-valley.tsx)
 *   SERVICE   `svc-drain-cleaning` v2 content (content/pages/services.tsx)
 *             and `./sl-blocks/drain-cleaning`
 *
 * Section recipe (each ties a Mission Valley fact to what THIS service does or
 * cannot; swap the location or the service and the copy breaks):
 *   1. Planning area + lateral - Mission Valley is a City planning area, the
 *                                owner maintains the lateral to the City main;
 *                                fixture drains sit upstream of it.
 *   2. One drain, several tenants, or water coming up - the service's triage,
 *                                the multi-tenant lateral, the CITY's spill line.
 *   3. Kitchen grease          - the City's named causes and its FEWD permit vs.
 *                                what a drain cleaning does; no interval.
 *   4. No City help found      - "none found", the suspended crew program, the
 *                                permit question, what cleaning does not fix.
 *
 * ⚠ Mission Valley is a neighborhood (a City planning area). Only facts the
 * Mission Valley page itself states are used: no Council Policy 400-10, no
 * yearly-flush advice, no EMRA, and no City Public Utilities customer-service
 * number, because that page states none of them. CITY NUMBERS ARE THE CITY'S,
 * not ours. The company phone is read from `marketOperatingDetail`, never typed.
 * No price, offer, response time, guarantee, emergency or same-day claim. Mission
 * Valley is a service area, not an office. Repair and replacement are never
 * presented as offered.
 *
 * Audit: docs/source-reports/san-diego/sl-mission-valley-drain.md
 */

import { marketOperatingDetail } from '@/data/markets/markets'
import type { PageId, ProcessContent, ServiceLocationPageContent } from '@/types'
import { sanDiegoMissionValleyContent } from './san-diego-mission-valley'
import { serviceContent } from './services'
import { mergeRelevantFaqs, pageImageSlots } from './service-location-shared'
import { inclusions, problems, shots } from './sl-blocks/drain-cleaning'

const id = (value: string): PageId => value as PageId

const sd = marketOperatingDetail['san-diego-ca']
if (sd === undefined) throw new Error('marketOperatingDetail is missing san-diego-ca')

// Alt text stays neutral: no place-specific photo is claimed.
const slots = pageImageSlots('sl-mission-valley-drain', {
  hero: {
    alt: 'Drain cleaning equipment at a floor drain',
    shot: 'Drain machine at a floor drain, commercial or mixed-use building, no identifiable address',
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

const v2 = serviceContent[id('svc-drain-cleaning')]?.v2
if (v2 === undefined || sanDiegoMissionValleyContent.faq === undefined) {
  throw new Error('sl-mission-valley-drain: source content is missing')
}

const process: ProcessContent[] = (v2.process?.steps ?? []).map((step) => ({
  title: step.title,
  description: typeof step.description === 'string' ? step.description : undefined,
}))

/**
 * Every question from the Mission Valley location page and the drain cleaning
 * page, minus the three service questions below.
 */
const faq = mergeRelevantFaqs(
  sanDiegoMissionValleyContent.faq,
  v2.faq,
  [
    // This page IS an area page; the question is the hub's.
    'Do you clean drains in St. Louis, San Diego, and Las Vegas?',
    // Same answer, fuller, under "Does drain cleaning repair a damaged pipe?".
    'Can drain cleaning fix a broken or collapsed pipe?',
    // Same answer, fuller, under "Can tree roots grow into drain pipes?".
    'Can cleaning remove tree roots?',
  ],
  'In Mission Valley',
)

export const missionValleyDrainContent: ServiceLocationPageContent = {
  seoTitle: 'Drain Cleaning in Mission Valley, San Diego',
  metaDescription:
    'Drain cleaning in Mission Valley, San Diego. The City says the owner maintains the lateral to the City main and permits kitchen grease. See what cleaning fixes.',
  serviceDescription:
    'Drain cleaning removes grease, roots, deposits, debris and other restricting material from a drain line using a rotating cable, water jetting, or both, for properties in Mission Valley, a City of San Diego planning area in California. It restores flow and does not repair the pipe.',
  heroImage: slots.hero,
  ctaImage: slots.cta,
  sources: sanDiegoMissionValleyContent.sources,
  hero: {
    eyebrow: 'Mission Valley, San Diego',
    title: 'Drain Cleaning in Mission Valley',
    intro: (
      <p>
        Mission Valley is a City of San Diego planning area, and the City says the property owner
        maintains the sewer lateral from the building all the way to its connection with the City
        sewer main. The drains inside a Mission Valley building sit upstream of that line. Drain
        cleaning clears the grease, roots, debris and buildup in a fixture or branch line. It does
        not reach the City main or the connection to it, and it does not repair the pipe.
      </p>
    ),
  },
  body: (
    <>
      <h2>Your fixture drains sit upstream of the lateral the City says is yours</h2>
      <p>
        The City of San Diego describes Mission Valley as a community planning area, and we did not
        find a separate Mission Valley sewer utility. The City says the property owner maintains the
        sewer lateral from the building to its connection with the City sewer main, in the street,
        beyond the property line, in an easement or in a canyon. How a lease divides that duty is a
        lease matter, not something this page answers.
      </p>
      <p>
        Drain cleaning usually means the fixture and branch lines inside the building. Sewer
        cleaning means the larger line that carries wastewater away. Neither reaches the City main
        or the connection to it.
      </p>

      <h2>One drain, several tenants, or water coming up</h2>
      <ul>
        <li>
          <strong>One fixture slow or clogged:</strong> usually that fixture&rsquo;s own drain line,
          and the usual fit for drain cleaning.
        </li>
        <li>
          <strong>Several fixtures slow or gurgling:</strong> a shared branch or the larger sewer
          line. A multi-tenant building feeds many fixtures into one lateral, so one failure can
          reach every tenant at once.
        </li>
        <li>
          <strong>Water or sewage coming up:</strong> avoid contact, keep children and pets away,
          and limit water use while you arrange help.
        </li>
      </ul>
      <p>
        If you see, smell or suspect a sewer spill or a bad sewer odor, the City asks you to call
        619-515-3525 immediately (the City&rsquo;s number, not ours). To reach The Sewer Pros about
        a drain, call {sd.phone}.
      </p>

      <h2>Kitchen grease is a cleaning job, and the City&rsquo;s grease permit is not</h2>
      <p>
        The City names grease, along with roots, as a leading cause of sewer spills, and a
        restaurant or hotel kitchen sends fat, oil and grease down its line every day. Grease that
        cools in a kitchen branch line is a drain cleaning job. The City also says every food
        service establishment needs a permit from its FEWD program, so the facility installs
        equipment that traps grease. Cleaning does not install or service that equipment, and we
        make no claim our work satisfies any FEWD requirement.
      </p>
      <p>
        How often a kitchen line needs cleaning depends on volume, what enters the line and its
        condition, not on a standard interval. When a drain clogs again after it was cleared, a
        camera look at the accessible line may help show whether the restriction was fully removed.
      </p>

      <h2>No City help with lateral costs found, so know what cleaning does not fix</h2>
      <p>
        We did not find an active City program that gives owners a grant, reimbursement or other
        help with lateral costs. That is &ldquo;none found&rdquo;, not a statement that none exists,
        so confirm with Public Utilities. The City says its program for City crews to install sewer
        laterals is currently suspended. We found no City page on whether work confined to private
        property needs a permit, so ask Development Services (619-446-5242, the City&rsquo;s
        number).
      </p>
      <p>
        Cleaning does not fix a cracked, broken or collapsed pipe, an offset or separated joint, or
        roots entering at a joint. We do not perform repairs or replacements. When a camera is used
        you receive the video and written findings, which you can compare against any estimate.
      </p>
    </>
  ),
  problems: [
    ...problems.map((p, i) => ({ ...p, image: slots.problems[i] })),
    {
      title: 'A food service kitchen drain',
      description:
        'The City says every food service establishment needs a FEWD grease permit, and plans for a new restaurant, remodel or retrofit need a FEWD plan review. Cleaning clears grease from a drain line. It is not the grease-removal equipment, and we make no claim it satisfies a permit. Equipment questions go to the City at 858-654-4188 (the City’s number).',
      image: slots.problems[3],
    },
  ],
  // Six items: renders as two rows of three.
  inclusions,
  process,
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
  // All relevant questions from the Mission Valley location page and the drain
  // cleaning page (see `faq` above).
  faq,
  relatedPageIds: [
    id('loc-sd-mission-valley'),
    id('svc-drain-cleaning'),
    id('svc-sewer-cleaning'),
    id('svc-sewer-camera-inspection'),
  ],
  relatedTitle: 'Related pages',
  cta: {
    title: 'Request drain cleaning in Mission Valley',
    body: 'Get a slow or clogged drain cleared, with video and written findings when a camera is used.',
  },
}
