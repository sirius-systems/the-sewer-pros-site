/**
 * Escondido, CA + Hydro Jetting (`sl-escondido-hydro`).
 *
 * Authority: CLAUDE.md sections 9, 22, 24; docs/14-content-specification.md.
 * Same recipe as `sl-sd-san-marcos-hydro` and `sl-lv-city-hydro`. One local
 * source (`escondidoContent`) x one service source (`svc-hydro-jetting` v2).
 * Nothing here is new research. Stays consistent with `sl-escondido-cleaning`
 * on section 22-165, the call-the-City-first guidance and the owner-cost wording.
 *
 * Section recipe (each section ties an Escondido fact to what jetting does):
 *   1. Call the City first - SSMP: call before cleaning a private lateral so the
 *                            City can remove debris pushed into the public line;
 *                            jetting moves debris along the line
 *   2. Owner cleans the lateral - 22-165(a), (e); jetting is for accessible
 *                            private lines, not City mains; no program found
 *   3. The cleanout          - 22-165(b) and (d); jetting enters at the
 *                            cleanout; ask before opening anything in the street
 *   4. Pipe condition        - 1981 median counts homes, not pipes; jetting does
 *                            not repair; (c) verification, (f) televised
 *                            cleaning; camera first when included
 *
 * ⚠ CITY NUMBERS ARE THE CITY'S. The code is quoted for at most nine words.
 * Never says the City pays for anything, never says our work satisfies the code,
 * never says who may perform lateral repair. No company phone, price, offer,
 * response time, emergency or same-day claim, guarantee, pressure or flow
 * figure, equipment spec or office.
 */

import type { PageId, ServiceLocationPageContent } from '@/types'
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

const problems = SERVICE_PROBLEMS['svc-hydro-jetting']
const inclusions = SERVICE_INCLUSIONS['svc-hydro-jetting']
const shots = SERVICE_PROBLEM_SHOTS['svc-hydro-jetting']
if (problems === undefined || inclusions === undefined || shots === undefined) {
  throw new Error('sl-sd-escondido-hydro: shared hydro jetting blocks are missing')
}

const v2 = serviceContent[id('svc-hydro-jetting')]?.v2
if (v2 === undefined || escondidoContent.faq === undefined) {
  throw new Error('sl-sd-escondido-hydro: source service v2 or location FAQ is missing')
}

const slots = pageImageSlots('sl-escondido-hydro', {
  hero: {
    alt: 'Hydro jetting hose and nozzle at a cleanout beside a home',
    shot: 'Jetting hose entering a residential cleanout, jetter trailer at the curb, no plate or identifiable address',
  },
  problems: [shots[0], shots[1], shots[2], shots[3]] as const,
})

/**
 * Every question from the Escondido location page and the hydro jetting
 * service page. Nothing is skipped. The service page's cost and same-day
 * answers (DEC-088 wording) are included as published (DEC-139).
 */
const faq = mergeRelevantFaqs(escondidoContent.faq, v2.faq, [], 'In Escondido')

export const escondidoHydroContent: ServiceLocationPageContent = {
  seoTitle: 'Hydro Jetting in Escondido, CA',
  metaDescription:
    'Hydro jetting in Escondido, CA. Municipal Code 22-165 puts cleaning the lateral on the owner, and the City asks to be called first. See what jetting does.',
  serviceDescription:
    'Hydro jetting cleans an accessible sewer or drain line with pressurized water sent through a hose and nozzle, for properties in Escondido, California.',
  heroImage: slots.hero,
  ctaImage: slots.cta,
  sources: escondidoContent.sources,
  hero: {
    eyebrow: 'Escondido, CA',
    title: 'Hydro Jetting in Escondido',
    intro: (
      <p>
        Section 22-165 of the Escondido Municipal Code puts cleaning the sewer lateral on the
        property owner, up to and including the connection to the City&rsquo;s main. Hydro jetting
        cleans that accessible private line with pressurized water, loosening buildup and flushing
        it out. It is a cleaning method, not a repair, and the City asks to be called before a
        private lateral is cleaned.
      </p>
    ),
  },
  body: (
    <>
      <h2>The City asks to be called before a lateral is cleaned</h2>
      <p>
        The City&rsquo;s Sewer System Management Plan says its public education literature stresses
        the need to call the City before cleaning a private lateral, so the City can remove any
        debris that cleaning pushes into the public sewer line. Jetting moves debris along the line
        as the hose is withdrawn, so that guidance applies directly. It is the City&rsquo;s
        guidance, and it does not require our services.
      </p>
      <p>
        If you cannot tell whether a backup is in the main or the lateral, the City&rsquo;s FAQ says
        to call City Public Works at (760) 839-4668 (the City&rsquo;s number, not ours).
      </p>

      <h2>Section 22-165 makes cleaning the lateral the owner&rsquo;s job and cost</h2>
      <p>
        Section 22-165 makes the owner responsible for all maintenance, repair, replacement,
        cleaning and removal of blockages in the lateral, and for the cost, &ldquo;up to and
        including the connection to the main&rdquo;. Hydro jetting works on the accessible private
        line. It is not work on a City main. Jetting does not show which side of the connection a
        stoppage sits on, so ask Public Works how the code applies to your address.
      </p>
      <p>
        We found no City lateral repair, replacement, grant or reimbursement program. That is none
        found, not a statement that none exists. Vallecitos Water District serves parts of Escondido
        and some properties are on septic, so confirm who serves your address first.
      </p>

      <h2>Jetting goes in at the cleanout, which the code makes the owner&rsquo;s</h2>
      <p>
        Section 22-165(b) makes the owner responsible for locating, exposing and maintaining the
        property line cleanout so the lateral can be inspected, cleaned and cleared. A cleanout is
        the common entry point for a jetting hose. Subsection (d) bars anyone other than the City,
        or someone working under City contract, from excavating or exposing a lateral inside a
        public right-of-way, so ask Public Works before opening anything in the street.
      </p>
      <p>
        Water is paced to the line, because extra water can add to a backup. That is our service
        description, not a finding about your property.
      </p>

      <h2>A 1981 median does not tell you whether a line suits jetting</h2>
      <p>
        The Census median year built for Escondido homes is 1981, and about half were built in the
        1970s and 1980s. The Census counts homes, not sewer pipes, so it says nothing about what
        your lateral is made of. Whether jetting is safe for an older line depends on the
        pipe&rsquo;s condition and material.
      </p>
      <p>
        Jetting does not correct a cracked, offset or collapsed pipe or a low spot that holds water.
        The code puts the cost of verifying breakage on the owner and, after a maintenance-related
        violation or an illegal discharge, calls for a cleaning and televising by a licensed
        plumber. That is the code&rsquo;s condition, and we do not say our work meets it. The Sewer
        Pros does not repair or replace sewer lines.
      </p>
    </>
  ),
  problems: [
    ...problems.map((p, i) => ({ ...p, image: slots.problems[i] })),
    {
      title: 'A stoppage near the connection to the main',
      description:
        'Section 22-165 runs the owner’s duty up to and including the connection to the City’s main. Jetting clears the line. It does not show where that connection is or which side of it a stoppage sits on, so ask City Public Works.',
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
      'This page covers the City of Escondido. Sewer agencies and lateral rules differ across San Diego County, so use the page for your address.',
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
    id('svc-hydro-jetting'),
    id('svc-sewer-cleaning'),
    id('svc-sewer-camera-inspection'),
  ],
  relatedTitle: 'Related pages',
  cta: {
    title: 'Request hydro jetting in Escondido',
    body: 'Tell us what your line is doing and whether the City has checked its main, and ask what is included before you book.',
  },
}
