/**
 * Mission Valley, San Diego, CA + Sewer Cleaning (`sl-mission-valley-cleaning`).
 *
 * Authority: CLAUDE.md sections 9, 22, 24; docs/14-content-specification.md.
 * Same recipe as `sl-sd-city-cleaning`. One local source
 * (`sanDiegoMissionValleyContent`) x one service source (`svc-sewer-cleaning`
 * v2). Nothing here is new research.
 *
 * Section recipe (each section ties a Mission Valley fact to what cleaning does):
 *   1. Where the line ends   - owner maintains to the City main; no separate MV
 *                              utility found; our cleaning is private lines only.
 *   2. Kitchen grease        - the City's grease/roots statement and FEWD permit
 *                              program vs. what cleaning removes; nearby-facility
 *                              inspections after a grease spill.
 *   3. Many fixtures, one lateral - schedule from evidence, not a default;
 *                              occupied-site access; a clean line is not proof.
 *   4. Break past the line, no City help found - Plumber's Report (the City's),
 *                              crew program suspended, cleaning is not repair.
 *
 * Mission Valley is a City of San Diego planning area: only facts the Mission
 * Valley location page states are used. No housing-age section exists there.
 *
 * ⚠ CITY NUMBERS ARE THE CITY'S. The company phone and founding year come from
 * `marketOperatingDetail['san-diego-ca']`. No price, offer, response time,
 * emergency or same-day claim, guarantee or equipment spec appears. Equipment
 * names appear only inside the process steps lifted from the service page.
 */

import { marketOperatingDetail } from '@/data/markets/markets'
import type { PageId, ServiceLocationPageContent } from '@/types'
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

const sd = marketOperatingDetail['san-diego-ca']
if (sd === undefined) throw new Error('marketOperatingDetail is missing san-diego-ca')

const problems = SERVICE_PROBLEMS['svc-sewer-cleaning']
const inclusions = SERVICE_INCLUSIONS['svc-sewer-cleaning']
const shots = SERVICE_PROBLEM_SHOTS['svc-sewer-cleaning']
if (problems === undefined || inclusions === undefined || shots === undefined) {
  throw new Error('sl-sd-mission-valley-cleaning: shared sewer cleaning blocks are missing')
}

const v2 = serviceContent[id('svc-sewer-cleaning')]?.v2
if (v2 === undefined || sanDiegoMissionValleyContent.faq === undefined) {
  throw new Error('sl-sd-mission-valley-cleaning: source service v2 or location FAQ is missing')
}

const slots = pageImageSlots('sl-mission-valley-cleaning', {
  hero: {
    alt: 'Technician setting up sewer cleaning equipment at a cleanout beside a building',
    shot: 'Technician with a cleaning machine and cable or hose at a cleanout at a commercial or mixed-use building, no identifiable address',
  },
  problems: [shots[0], shots[1], shots[2], shots[3]] as const,
})

/**
 * Every question from the Mission Valley location page and the sewer cleaning
 * service page. Nothing is skipped: the location page's restaurant cleaning
 * interval question sits beside the service page's frequency question, and the
 * service page's cost question (DEC-088 wording) is carried as published.
 */
const faq = mergeRelevantFaqs(sanDiegoMissionValleyContent.faq, v2.faq, [], 'In Mission Valley')

export const missionValleyCleaningContent: ServiceLocationPageContent = {
  seoTitle: 'Sewer Cleaning in Mission Valley, San Diego',
  metaDescription:
    'Sewer cleaning in Mission Valley, San Diego. The City says owners maintain the lateral to its main and food service needs a grease permit. See what cleaning does.',
  serviceDescription:
    'Sewer cleaning is the removal of grease, roots, deposits, debris, and other material that restricts flow in an accessible private sewer line, for properties in Mission Valley, San Diego, California.',
  heroImage: slots.hero,
  ctaImage: slots.cta,
  sources: sanDiegoMissionValleyContent.sources,
  hero: {
    eyebrow: 'Mission Valley, San Diego',
    title: 'Sewer Cleaning in Mission Valley',
    intro: (
      <p>
        Mission Valley is a City of San Diego planning area, and the City says the property owner
        maintains the sewer lateral all the way to its connection with the City sewer main. Sewer
        cleaning removes buildup from the accessible private line, including the grease a kitchen
        sends down it. It clears the pipe. It does not repair it.
      </p>
    ),
  },
  body: (
    <>
      <h2>Your lateral runs to the City main, past your lot line</h2>
      <p>
        The City of San Diego runs the public sewer in Mission Valley, and its guidance says the
        owner maintains the lateral to the City main, even when that connection is in the street, in
        an easement or in a canyon. We did not find a separate Mission Valley sewer utility, though
        a particular parcel can still be an exception. Our cleaning covers accessible
        private-property sewer and drain lines, not City mains, and it does not show where the
        connection is or which side of it a blockage sits on.
      </p>
      <p>
        For a sewer spill or a bad sewer odor, the City asks you to call 619-515-3525 (the
        City&rsquo;s number, not ours).
      </p>

      <h2>Kitchen grease: cleaning the line, not the permit</h2>
      <p>
        The City names grease, along with roots, as a leading cause of sewer spills, and says every
        food service establishment must hold a permit from its Food Establishment Wastewater
        Discharge (FEWD) program. After a grease-related spill, FEWD inspectors look at facilities
        in the immediate area to find which contributed.
      </p>
      <p>
        Sewer cleaning removes the grease, roots, deposits or debris that have built up in the
        lateral. It does not show whether a grease interceptor meets the City&rsquo;s requirements,
        and we make no claim that our work satisfies any FEWD or permit requirement. For equipment
        and plan checks, call 858-654-4188 (the City&rsquo;s number).
      </p>

      <h2>Many fixtures, one lateral: clean on evidence, not a default</h2>
      <p>
        A multi-tenant building feeds many fixtures into one lateral, so one failure can reach every
        tenant at once. How often a line needs cleaning depends on volume, what enters it and its
        condition, not on a standard interval, and a camera pass shows how much has built up since
        the last cleaning. A line that drains again is not proof that the pipe is sound.
      </p>
      <p>
        On an occupied site, access means trading hours, tenants, service corridors and other
        contractors. Raise that when you request service.
      </p>

      <h2>A break past the property line is not a cleaning problem</h2>
      <p>
        When a licensed plumber finds a break or collapse beyond the property line, the City directs
        the plumber to call 619-515-3525 and file a Plumber&rsquo;s Report. Cleaning does not repair
        a cracked, offset, separated or collapsed pipe, and The Sewer Pros does not perform repairs
        or replacements.
      </p>
      <p>
        We did not find an active City program that gives owners a grant, reimbursement or other
        help with lateral costs, and the City says its program for City crews to install laterals is
        suspended. That is none found, not a statement that none exists, so confirm with Public
        Utilities. To talk through cleaning a line on your side of the connection, call The Sewer
        Pros at {sd.phone}. We have served San Diego since {sd.foundingYear}.
      </p>
    </>
  ),
  problems: [
    ...problems.map((p, i) => ({ ...p, image: slots.problems[i] })),
    {
      title: 'A kitchen or tenant line that keeps loading up',
      description:
        'A restaurant or hotel kitchen sends grease down its line every day, and a multi-tenant building feeds many fixtures into one lateral. Cleaning removes the buildup. A camera pass shows how much returned since the last visit.',
      image: slots.problems[3],
    },
  ],
  inclusions,
  process: (v2.process?.steps ?? []).map((step) => ({
    title: step.title,
    description: typeof step.description === 'string' ? step.description : undefined,
  })),
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
  // Every question from the Mission Valley location page and the sewer cleaning
  // service page (see `faq` above).
  faq,
  relatedPageIds: [
    id('loc-sd-mission-valley'),
    id('svc-sewer-cleaning'),
    id('svc-hydro-jetting'),
    id('svc-sewer-cleaning-camera-inspection'),
  ],
  relatedTitle: 'Related pages',
  cta: {
    title: 'Request sewer cleaning in Mission Valley',
    body: 'Have the line you maintain cleaned, and ask whether a camera look before or after is included.',
  },
}
