/**
 * Henderson, NV + Hydro Jetting (`sl-henderson-hydro`).
 *
 * Authority: CLAUDE.md §9, §22, §24; docs/14-content-specification.md §43, §79.
 * Built on the `sl-henderson-camera` pilot recipe in
 * `las-vegas-service-location.tsx`. One local source (`hendersonContent`) x one
 * service source (`svc-hydro-jetting` v2). Nothing here is new research.
 *
 * Section recipe (each section ties a Henderson fact to what jetting does):
 *   1. Responsibility - the owner maintains the lateral from the connection, so
 *      the method is matched to the line (water pacing, camera first)
 *   2. Can / cannot clear - jetting limits + "none found" City repair program
 *   3. Housing age - Census figures tied to "jetting depends on pipe condition
 *      and material, not year built"
 *   4. Contacts and permits - City numbers (the City's) + no City rule found
 *      on permits for cleaning
 *
 * ⚠ CITY NUMBERS ARE THE CITY'S. The company phone is not repeated here. No
 * price, offer, response time, emergency or same-day claim, guarantee, pressure
 * or flow figure appears. The owner-approved free-estimate and same-day wording
 * (DEC-088) lives on the service page only and is not repeated on this page.
 * Equipment names appear only inside the process steps lifted from the service
 * page.
 */

import type { PageId, ServiceLocationPageContent } from '@/types'
import { hendersonContent } from './las-vegas-henderson'
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
  throw new Error('sl-henderson-hydro: shared hydro jetting blocks are missing')
}

const v2 = serviceContent[id('svc-hydro-jetting')]?.v2
if (v2 === undefined || hendersonContent.faq === undefined) {
  throw new Error('sl-henderson-hydro: source service v2 or location FAQ is missing')
}

const slots = pageImageSlots('sl-henderson-hydro', {
  hero: {
    alt: 'Hydro jetting hose and nozzle at a cleanout at a Henderson home',
    shot: 'Jetting hose entering a residential cleanout, jetter trailer at the curb, no plate or identifiable address',
  },
  problems: [shots[0], shots[1], shots[2], shots[3]] as const,
})

/**
 * Every question from the Henderson location page and the hydro jetting
 * service page, minus three:
 *  - the location page's water and sewer service transfer question (utility
 *    accounts, no bearing on jetting a line);
 *  - the service page's same-day question and its cost question, whose answers
 *    carry the owner-approved free-estimate and same-day wording (DEC-088),
 *    which is used on the service page only.
 */
const faq = mergeRelevantFaqs(
  hendersonContent.faq,
  v2.faq,
  [
    'How do I transfer water and sewer service when I buy a home in Henderson?',
    'Do you offer same-day hydro jetting?',
    'How much does it cost?',
  ],
  'In Henderson',
)

export const hendersonHydroContent: ServiceLocationPageContent = {
  seoTitle: 'Hydro Jetting in Henderson, NV',
  metaDescription:
    'Hydro jetting for Henderson, NV sewer lines. The City says the lateral is yours from the main connection. See what jetting clears and what it cannot fix.',
  serviceDescription:
    'Hydro jetting cleans an accessible sewer or drain line with pressurized water sent through a hose and nozzle, for properties in the City of Henderson, Nevada.',
  heroImage: slots.hero,
  ctaImage: slots.cta,
  hero: {
    eyebrow: 'Henderson, NV',
    title: 'Hydro Jetting in Henderson',
    intro: (
      <p>
        In the City of Henderson, the sewer service lateral is the owner&rsquo;s from the point
        where it meets the City&rsquo;s main in the street. Hydro jetting cleans that line with
        pressurized water, loosening buildup and flushing it out. It is a cleaning method, not a
        repair, and which method suits your lateral should rest on what the line looks like.
      </p>
    ),
  },
  body: (
    <>
      <h2>Why the method is matched to a lateral you maintain</h2>
      <p>
        The City says your responsibility for the sewer service lateral begins where it connects
        to the City&rsquo;s sewer main in the street, and that on your side you pay cleanup and
        repair costs. The City cleans blockages in its own main. Jetting here is for accessible
        private lines.
      </p>
      <p>
        More water is not automatically better, and added water can contribute to a backup if
        the line cannot carry it away. So the nozzle and settings depend on what the line looks
        like and what is in it, and the work is paced to the line. A camera look first, when
        included, helps pick the method.
      </p>

      <h2>What jetting can clear, and the repair question it leaves open</h2>
      <ul>
        <li>Grease and soap buildup</li>
        <li>Debris and wipes caught in the line</li>
        <li>Roots that are loose or accessible</li>
        <li>General buildup on the pipe wall</li>
      </ul>
      <p>
        Jetting does not correct a cracked or broken pipe, an offset or separated joint, a
        collapsed section, or a low spot that holds water. We found no City lateral repair,
        grant or reimbursement program on the City pages we reviewed (&ldquo;none found&rdquo;,
        not a statement that none exists), and The Sewer Pros does not repair or replace
        sewer lines. If a camera shows such a condition, further evaluation outside our scope
        may be appropriate.
      </p>

      <h2>Henderson homes are mostly newer, but jetting depends on the pipe</h2>
      <p>
        Henderson&rsquo;s median year built is 2001, according to the U.S. Census Bureau&rsquo;s
        American Community Survey (2020-2024 5-year estimates, Henderson city). Our arithmetic on
        the Census rows puts 60.2 percent of housing units at 1990 to 2009 and 3.1 percent before
        1970.
      </p>
      <p>
        That does not answer whether jetting suits your line. Year built does not tell you the
        condition or material of a lateral, and jetting depends on the pipe&rsquo;s condition and
        material. Visible structural defects call for a closer evaluation before cleaning, which
        is why the camera look comes first when it is included.
      </p>

      <h2>Before you jet: the City&rsquo;s contacts and permits</h2>
      <p>
        To report a sewer emergency, the City says to call its 24-hour call center at
        702-267-5900 (the City&rsquo;s number, not ours). For work in the public right-of-way,
        the City says to contact Public Works at 702-267-3600 about a permit. We did not find a
        City statement about permits for cleaning or for work wholly on private property, so ask
        Public Works.
      </p>
      <p>
        If what we see goes beyond cleaning, we will say so plainly. Jetting clears what can be
        removed. It does not tell you which approvals apply.
      </p>
    </>
  ),
  problems: [
    ...problems.map((p, i) => ({ ...p, image: slots.problems[i] })),
    {
      title: 'Buying a Henderson home',
      description:
        'Cleaning is not an inspection. We found no City rule requiring a lateral inspection or seller disclosure on sale, so a buyer who wants the line’s condition has to ask for a pre-purchase inspection.',
      image: slots.problems[3],
    },
  ],
  inclusions,
  process: (v2.process?.steps ?? []).map((step) => ({
    title: step.title,
    description: typeof step.description === 'string' ? step.description : undefined,
  })),
  coverage: {
    title: 'Other Las Vegas Valley areas',
    intro:
      'This page covers the City of Henderson. Sewer agencies and lateral rules differ across the Las Vegas Valley, so use the page for your address.',
    pageIds: [id('loc-lv-las-vegas'), id('loc-lv-north-las-vegas'), id('loc-lv-summerlin')],
    availabilityStatement: 'Henderson is a service area, not an office location.',
  },
  // Every relevant question from the Henderson location page and the hydro
  // jetting service page (see `faq` above).
  faq,
  relatedPageIds: [
    id('loc-lv-henderson'),
    id('svc-hydro-jetting'),
    id('svc-sewer-cleaning'),
    id('svc-sewer-camera-inspection'),
  ],
  relatedTitle: 'Related pages',
  cta: {
    title: 'Request hydro jetting in Henderson',
    body: 'Tell us what your line is doing, and ask what is included before you book.',
  },
}
