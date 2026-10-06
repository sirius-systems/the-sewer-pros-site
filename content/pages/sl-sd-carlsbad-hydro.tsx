/**
 * Carlsbad, CA + Hydro Jetting (`sl-carlsbad-hydro`).
 *
 * Authority: CLAUDE.md §9, §22, §24; docs/14-content-specification.md §43, §79.
 * Same recipe as `sl-sd-chula-vista-hydro` and `sl-lv-city-hydro`. One local
 * source (`carlsbadContent`) x one service source (`svc-hydro-jetting` v2).
 * Nothing here is new research.
 *
 * Section recipe (each section ties a Carlsbad fact to what jetting does):
 *   1. Roots and obstructions - Leucadia; City cleaning schedule; how jetting works
 *   2. Cracks - jetting does not fix structural defects; pacing the water
 *   3. Grants - Leucadia says cleaning does not qualify; City silent on cleaning;
 *      none found from Vallecitos; no balance published
 *   4. Agency and repair - each agency's end of the lateral; permits; we do not repair
 *
 * ⚠ CARLSBAD HAS THREE SEWER AGENCIES. Each agency's wording is stated separately.
 * NEVER SAYS WHICH AGENCY SERVES AN ADDRESS. GRANT AVAILABILITY IS NEVER STATED.
 * No company phone, price, offer, response time, emergency or same-day claim,
 * guarantee, pressure or flow figure, or office.
 */

import type { PageId, ServiceLocationPageContent } from '@/types'
import { carlsbadContent } from './san-diego-carlsbad'
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
  throw new Error('sl-sd-carlsbad-hydro: shared blocks are missing')
}

const v2 = serviceContent[id('svc-hydro-jetting')]?.v2
if (v2 === undefined || carlsbadContent.faq === undefined) {
  throw new Error('sl-sd-carlsbad-hydro: source service v2 or location FAQ is missing')
}

const slots = pageImageSlots('sl-carlsbad-hydro', {
  hero: {
    alt: 'Hydro jetting hose and nozzle at a cleanout beside a home',
    shot: 'Jetting hose entering a residential cleanout, jetter trailer at the curb, no plate or identifiable address',
  },
  problems: [shots[0], shots[1], shots[2], shots[3]] as const,
})

/**
 * Every question from the Carlsbad location page and the hydro jetting service
 * page. Nothing is skipped. The service page's cost and same-day answers
 * (DEC-088 wording) are included as published (DEC-139).
 */
const faq = mergeRelevantFaqs(carlsbadContent.faq, v2.faq, [], 'In Carlsbad')

export const carlsbadHydroContent: ServiceLocationPageContent = {
  seoTitle: 'Hydro Jetting in Carlsbad, CA',
  metaDescription:
    'Hydro jetting in Carlsbad, CA. Leucadia says roots can block a lateral and cleaning does not qualify for its grant. See what jetting clears and cannot fix.',
  serviceDescription:
    'Hydro jetting cleans an accessible sewer or drain line with pressurized water sent through a hose and nozzle, for properties in Carlsbad, California.',
  heroImage: slots.hero,
  ctaImage: slots.cta,
  sources: carlsbadContent.sources,
  hero: {
    eyebrow: 'Carlsbad, CA',
    title: 'Hydro Jetting in Carlsbad',
    intro: (
      <p>
        Carlsbad is served by three sewer agencies, and Leucadia Wastewater District says tree roots
        or other obstructions can block a lateral and cause a backup into a home. Hydro jetting
        cleans the accessible private line with pressurized water, loosening buildup and flushing it
        out. It is a cleaning method, not a repair.
      </p>
    ),
  },
  body: (
    <>
      <h2>Leucadia names roots and obstructions, and the City names the cleaning schedule</h2>
      <p>
        Leucadia Wastewater District says tree roots or other obstructions can block a lateral and
        cause a backup into a home, and that a damaged lateral can lead to backups, especially
        during storms. The City of Carlsbad says a lateral should ideally be professionally cleaned
        once a year and that owners should check sooner with a sewage-like odor or frequent clogged
        drains.
      </p>
      <p>
        Hydro jetting sends pressurized water through a hose and nozzle that advances through the
        line, scours the pipe wall and moves debris along. That is the City’s guidance and our
        service description, not a finding about your property.
      </p>
      <h2>Jetting clears buildup, but it does not close a crack</h2>
      <p>
        Jetting can clear grease and soap buildup, debris and wipes caught in the line, and roots
        that are loose or accessible. It does not correct a cracked or broken pipe, an offset or
        separated joint, a collapsed section, or a low spot that holds water, so a cleared line can
        fill again.
      </p>
      <p>
        More water is not automatically better, and extra water can add to a backup if the line
        cannot carry it away, so the work is paced to what the line is doing. Visible structural
        defects call for a closer look before cleaning, which is why a camera first helps when it is
        included.
      </p>
      <h2>Leucadia says cleaning does not qualify for its grant</h2>
      <p>
        The City publishes a Sewer Lateral Grant Program of up to $3,000 to replace or rehabilitate
        a private lateral. Leucadia reimburses 50% of repair cost, up to $3,000, and says inspection
        and cleaning of a private lateral do not qualify. The City page does not say whether
        cleaning or root cutting qualifies. We found no lateral grant from Vallecitos.
      </p>
      <p>
        Neither agency publishes how much grant money remains, so confirm availability before
        planning around one. Jetting is not what these programs pay for, and they do not pay for our
        services.
      </p>
      <h2>Your agency decides the line’s end, and repair needs its own path</h2>
      <p>
        The City puts the owner’s duty from the building to the main, typically in the street.
        Vallecitos includes the point of connection to its main. Leucadia includes the physical
        connection to its system. Jetting is for accessible private lines and does not show where
        any of those ends. We do not say which agency serves an address, and the City’s sewer
        district map is the pointer.
      </p>
      <p>
        The City says most construction work requires a permit, and Leucadia’s form says the
        applicant must obtain any necessary permits. If what we see goes beyond cleaning, we will
        say so plainly. The Sewer Pros does not perform repairs or replacements.
      </p>
    </>
  ),
  problems: [
    ...problems.map((p, i) => ({ ...p, image: slots.problems[i] })),
    {
      title: 'Roots or obstructions blocking the lateral',
      description:
        'Leucadia Wastewater District says tree roots or other obstructions can block a lateral and cause a backup. Jetting can clear roots that are loose or accessible, but it does not close a crack, so ask what a camera look would show first.',
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
      'This page covers the City of Carlsbad. Sewer agencies and lateral rules differ across San Diego County, so use the page for your address.',
    pageIds: [
      id('loc-sd-san-diego'),
      id('loc-sd-san-marcos'),
      id('loc-sd-escondido'),
      id('loc-sd-oceanside'),
      id('loc-sd-chula-vista'),
      id('loc-sd-mission-valley'),
    ],
    availabilityStatement: 'Carlsbad is a service area, not an office location.',
  },
  // Every relevant question from the Carlsbad location page and the hydro
  // jetting service page (see `faq` above).
  faq,
  relatedPageIds: [
    id('loc-sd-carlsbad'),
    id('svc-hydro-jetting'),
    id('svc-sewer-cleaning'),
    id('svc-sewer-camera-inspection'),
  ],
  relatedTitle: 'Related pages',
  cta: {
    title: 'Request hydro jetting in Carlsbad',
    body: 'Tell us what your line is doing, and ask what is included before you book.',
  },
}
