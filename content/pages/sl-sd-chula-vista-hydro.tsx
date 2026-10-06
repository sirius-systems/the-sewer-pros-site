/**
 * Chula Vista, CA + Hydro Jetting (`sl-chula-vista-hydro`).
 *
 * Authority: CLAUDE.md §9, §22, §24; docs/14-content-specification.md §43, §79.
 * Same recipe as `sl-sd-city-hydro` and `sl-lv-city-hydro`. One local source
 * (`chulaVistaContent`) x one service source (`svc-hydro-jetting` v2).
 * Nothing here is new research.
 *
 * Section recipe (each section ties a Chula Vista fact to what jetting does):
 *   1. Water and debris - City: grease, roots, cleaning can push debris into the
 *      public sewer; jetting moves debris along, so the method is paced to the line
 *   2. What jetting clears - roots enter through cracked pipe (City); jetting does
 *      not fix the crack; policy puts the lateral on the owner; no grant found
 *   3. Where the stoppage sits - 48-hour exception, licensed plumber's camera
 *      finding, street-tree proof; jetting does not locate
 *   4. Access and permits - property line cleanout, City crews stop there; permit
 *      before repair or replacement; we do not repair
 *
 * ⚠ POLICY, NOT A GRANT. Never says a grant exists or the City will pay. CITY
 * NUMBERS ARE THE CITY'S. No company phone, price, offer, response time,
 * emergency or same-day claim, guarantee, pressure or flow figure, or office.
 */

import type { PageId, ServiceLocationPageContent } from '@/types'
import { chulaVistaContent } from './san-diego-chula-vista'
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
  throw new Error('sl-sd-chula-vista-hydro: shared hydro jetting blocks are missing')
}

const v2 = serviceContent[id('svc-hydro-jetting')]?.v2
if (v2 === undefined || chulaVistaContent.faq === undefined) {
  throw new Error('sl-sd-chula-vista-hydro: source service v2 or location FAQ is missing')
}

const slots = pageImageSlots('sl-chula-vista-hydro', {
  hero: {
    alt: 'Hydro jetting hose and nozzle at a cleanout beside a home',
    shot: 'Jetting hose entering a residential cleanout, jetter trailer at the curb, no plate or identifiable address',
  },
  problems: [shots[0], shots[1], shots[2], shots[3]] as const,
})

/**
 * Every question from the Chula Vista location page and the hydro jetting
 * service page. Nothing is skipped. The service page's cost and same-day
 * answers (DEC-088 wording) are included as published (DEC-139).
 */
const faq = mergeRelevantFaqs(chulaVistaContent.faq, v2.faq, [], 'In Chula Vista')

export const chulaVistaHydroContent: ServiceLocationPageContent = {
  seoTitle: 'Hydro Jetting in Chula Vista, CA',
  metaDescription:
    'Hydro jetting in Chula Vista, CA. The City says roots enter through cracked pipe and the lateral is the owner’s. See what jetting clears and what it cannot fix.',
  serviceDescription:
    'Hydro jetting cleans an accessible sewer or drain line with pressurized water sent through a hose and nozzle, for properties in the City of Chula Vista, California.',
  heroImage: slots.hero,
  ctaImage: slots.cta,
  sources: chulaVistaContent.sources,
  hero: {
    eyebrow: 'Chula Vista, CA',
    title: 'Hydro Jetting in Chula Vista',
    intro: (
      <p>
        In Chula Vista, the City says grease is the most common cause of pipe blockages and that
        roots enter a lateral through cracked or broken pipe, and its Council policy puts the
        lateral on the owner from the first foot off the public sewer. Hydro jetting cleans the
        accessible line with pressurized water, loosening buildup and flushing it out. It is a
        cleaning method, not a repair.
      </p>
    ),
  },
  body: (
    <>
      <h2>The City warns that cleaning can push debris downstream, so the method matters</h2>
      <p>
        The City of Chula Vista says cleaning a private lateral can push debris such as cut root
        balls and grease into the public sewer, where it can cause a blockage. Hydro jetting sends
        pressurized water through a hose and nozzle that advances through the line, scours the pipe
        wall and moves debris along. That is why the method is matched to the line.
      </p>
      <p>
        More water is not automatically better, and extra water can add to a backup if the line
        cannot carry it away, so the work is paced to what the line is doing. That is the City’s
        guidance and our service description, not a finding about your property.
      </p>

      <h2>Roots come in through cracks, and jetting does not close them</h2>
      <p>
        The City says roots enter a lateral through cracked or broken pipe. Jetting can clear grease
        and soap buildup, debris and wipes caught in the line, and roots that are loose or
        accessible. It does not correct a cracked or broken pipe, an offset or separated joint, a
        collapsed section, or a low spot that holds water, so a cleared line can fill again.
      </p>
      <p>
        Council Policy 570-01 puts the maintenance of the lateral on the owner at the owner’s sole
        expense, and we found no City lateral repair grant. The Sewer Pros does not repair or
        replace sewer lines.
      </p>

      <h2>Jetting clears a stoppage, but the policy asks where it was</h2>
      <p>
        The policy has one exception. A stoppage found by a licensed plumber’s camera in the public
        sewer, in the first foot of the lateral at the connection, or caused by a City street tree
        is reported to the City within 48 hours, and the City reimburses reasonable costs if staff
        agree. For a street-tree cause, the owner has the burden of proof: excavate the root from
        its origin or get a certified arborist’s written confirmation from a root sample.
      </p>
      <p>
        Jetting does not locate a stoppage or identify a tree, and we make no claim that our work
        meets any City condition. Ask Public Works at (619) 397-6000 what it accepts before work you
        plan to submit (the City’s number, not ours).
      </p>

      <h2>Access at the cleanout, and a permit before any repair</h2>
      <p>
        The policy has the owner expose the property line cleanout, normally within two to three
        feet of the property line, and says City crews may not reach the lateral from any point
        further into private property than that cleanout. Jetting is for accessible private lines
        and does not show where the first foot of the lateral is.
      </p>
      <p>
        The City says repair or replacement of a lateral needs a City permit before work begins.
        Visible structural defects call for a closer evaluation before cleaning, which is why a
        camera look first helps when it is included. If what we see goes beyond cleaning, we will
        say so plainly.
      </p>
    </>
  ),
  problems: [
    ...problems.map((p, i) => ({ ...p, image: slots.problems[i] })),
    {
      title: 'Roots entering through cracked pipe',
      description:
        'The City says roots enter a lateral through cracked or broken pipe. Jetting can clear roots that are loose or accessible, but it does not close the crack, so ask what a camera look would show first.',
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
      'This page covers the City of Chula Vista. Sewer agencies and lateral rules differ across San Diego County, so use the page for your address.',
    pageIds: [
      id('loc-sd-san-diego'),
      id('loc-sd-san-marcos'),
      id('loc-sd-carlsbad'),
      id('loc-sd-escondido'),
      id('loc-sd-oceanside'),
      id('loc-sd-mission-valley'),
    ],
    availabilityStatement: 'Chula Vista is a service area, not an office location.',
  },
  // Every relevant question from the Chula Vista location page and the hydro
  // jetting service page (see `faq` above).
  faq,
  relatedPageIds: [
    id('loc-sd-chula-vista'),
    id('svc-hydro-jetting'),
    id('svc-sewer-cleaning'),
    id('svc-sewer-camera-inspection'),
  ],
  relatedTitle: 'Related pages',
  cta: {
    title: 'Request hydro jetting in Chula Vista',
    body: 'Tell us what your line is doing, and ask what is included before you book.',
  },
}
