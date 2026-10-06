/**
 * San Marcos, CA + Hydro Jetting (`sl-san-marcos-hydro`).
 *
 * Authority: CLAUDE.md §9, §22, §24; docs/14-content-specification.md §43, §79.
 * Same recipe as `sl-sd-chula-vista-hydro` and `sl-lv-city-hydro`. One local
 * source (`sanMarcosContent`) x one service source (`svc-hydro-jetting` v2).
 * Nothing here is new research.
 *
 * Section recipe (each section ties a San Marcos fact to what jetting does):
 *   1. Three agencies - City does not provide sewer service; each agency named
 *      separately; no claim about which serves an address
 *   2. Vallecitos wording - owner's lateral through the connection to the main;
 *      jetting is for accessible private lines, not district mains
 *   3. Rainwater - district says rainwater enters its sewer lines; jetting
 *      clears buildup, it does not seal a crack; water paced to the line
 *   4. Who installs and who to call - district does not install private
 *      connections; 911 for a spill (district's words); we do not repair
 *
 * ⚠ NEVER SAYS WHICH AGENCY SERVES AN ADDRESS. DISTRICT NUMBERS ARE THE
 * DISTRICT'S. No company phone, price, offer, response time, emergency or
 * same-day claim, guarantee, pressure or flow figure, or office.
 */

import type { PageId, ServiceLocationPageContent } from '@/types'
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

const problems = SERVICE_PROBLEMS['svc-hydro-jetting']
const inclusions = SERVICE_INCLUSIONS['svc-hydro-jetting']
const shots = SERVICE_PROBLEM_SHOTS['svc-hydro-jetting']
if (problems === undefined || inclusions === undefined || shots === undefined) {
  throw new Error('sl-sd-san-marcos-hydro: shared hydro jetting blocks are missing')
}

const v2 = serviceContent[id('svc-hydro-jetting')]?.v2
if (v2 === undefined || sanMarcosContent.faq === undefined) {
  throw new Error('sl-sd-san-marcos-hydro: source service v2 or location FAQ is missing')
}

const slots = pageImageSlots('sl-san-marcos-hydro', {
  hero: {
    alt: 'Hydro jetting hose and nozzle at a cleanout beside a home',
    shot: 'Jetting hose entering a residential cleanout, jetter trailer at the curb, no plate or identifiable address',
  },
  problems: [shots[0], shots[1], shots[2], shots[3]] as const,
})

/**
 * Every question from the San Marcos location page and the hydro jetting
 * service page. Nothing is skipped. The service page's cost and same-day
 * answers (DEC-088 wording) are included as published (DEC-139).
 */
const faq = mergeRelevantFaqs(sanMarcosContent.faq, v2.faq, [], 'In San Marcos')

export const sanMarcosHydroContent: ServiceLocationPageContent = {
  seoTitle: 'Hydro Jetting in San Marcos, CA',
  metaDescription:
    'Hydro jetting in San Marcos, CA. The City does not provide sewer service; where Vallecitos serves, the lateral is the owner’s. See what jetting clears.',
  serviceDescription:
    'Hydro jetting cleans an accessible sewer or drain line with pressurized water sent through a hose and nozzle, for properties in the City of San Marcos, California.',
  heroImage: slots.hero,
  ctaImage: slots.cta,
  sources: sanMarcosContent.sources,
  hero: {
    eyebrow: 'San Marcos, CA',
    title: 'Hydro Jetting in San Marcos',
    intro: (
      <p>
        The City of San Marcos says it does not provide sewer service, and where Vallecitos Water
        District serves an address, the district says the owner is responsible for the lateral
        through its connection to the district’s main. Hydro jetting cleans that accessible private
        line with pressurized water, loosening buildup and flushing it out. It is a cleaning method,
        not a repair.
      </p>
    ),
  },
  body: (
    <>
      <h2>Three agencies, so confirm yours before any jetting</h2>
      <p>
        The City of San Marcos says it does not provide water or sewer service and that one of three
        agencies does, depending on location: Vallecitos Water District, Vista Irrigation District
        or Rincon del Diablo Municipal Water District. We did not find a map that assigns every
        parcel to one of the three, and we do not say which serves yours.
      </p>
      <p>
        Vallecitos says its Engineering Department can tell you whether a parcel is inside its
        boundary. For Vista Irrigation District and Rincon del Diablo Municipal Water District, this
        page carries no wording of theirs, so ask that agency what applies to your line.
      </p>

      <h2>Jetting is for the lateral Vallecitos says the owner maintains</h2>
      <p>
        For a Vallecitos address, the district says the owner is responsible for the lateral’s
        operation, maintenance and repair from the building through its connection to the district’s
        main, and that the district maintains the main. Hydro jetting sends pressurized water
        through a hose and nozzle that advances through the accessible private line, scours the pipe
        wall and moves debris along. It is not work on a district main.
      </p>
      <p>
        More water is not automatically better, and extra water can add to a backup if the line
        cannot carry it away, so the work is paced to what the line is doing. That is our service
        description, not a finding about your property.
      </p>

      <h2>Rainwater gets into sewers, and jetting does not close the way in</h2>
      <p>
        Vallecitos says rainwater can enter its sewer lines and that it smoke-tests its sanitary
        lines to find cracks and other openings, which it describes as an assessment of the
        district’s system rather than private systems. That is not an inspection of your lateral.
      </p>
      <p>
        Jetting can clear grease and soap buildup, debris and wipes caught in the line, and roots
        that are loose or accessible. It does not correct a cracked or broken pipe, an offset or
        separated joint, a collapsed section, or a low spot that holds water, so a cleared line can
        fill again.
      </p>

      <h2>Who installs, who repairs, and who to call for a spill</h2>
      <p>
        Vallecitos says it does not install private water or sewer connections. A private contractor
        the owner selects does that work at the owner’s expense, and district personnel inspect it.
        We found no Vallecitos lateral repair, grant or reimbursement program, and no statement of
        which approvals apply to repairing an existing lateral, so ask Vallecitos Engineering before
        you plan work. The Sewer Pros does not repair or replace sewer lines.
      </p>
      <p>
        The district’s website says to call 911 for emergencies such as a sewer spill, and lists
        (760) 744-0460 as its main number (the district’s number, not ours). Visible structural
        defects call for a closer evaluation before cleaning, which is why a camera look first helps
        when it is included.
      </p>
    </>
  ),
  problems: [
    ...problems.map((p, i) => ({ ...p, image: slots.problems[i] })),
    {
      title: 'A stoppage near the connection to the main',
      description:
        'Vallecitos says the owner’s responsibility runs through the lateral’s connection to the district’s main. Jetting clears the line. It does not show where that connection is or which side of it a stoppage sits on, so ask Vallecitos Engineering.',
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
      'This page covers the City of San Marcos. Sewer agencies and lateral rules differ across San Diego County, so use the page for your address.',
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
    id('svc-hydro-jetting'),
    id('svc-sewer-cleaning'),
    id('svc-sewer-camera-inspection'),
  ],
  relatedTitle: 'Related pages',
  cta: {
    title: 'Request hydro jetting in San Marcos',
    body: 'Tell us what your line is doing, and ask what is included before you book.',
  },
}
