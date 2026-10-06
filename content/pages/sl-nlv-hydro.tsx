/**
 * City of North Las Vegas, NV + Hydro Jetting (`sl-nlv-hydro`).
 *
 * Authority: CLAUDE.md §9, §22, §24. Same recipe as `sl-lv-city-hydro` and
 * `sl-henderson-hydro`. One local source (`northLasVegasContent`) x one
 * service source (`svc-hydro-jetting` v2). Nothing here is new research.
 *
 * Section recipe (each section ties a North Las Vegas fact to what jetting does):
 *   1. Blockage statement - the City puts a blockage with the homeowner to the
 *                       City main, so the method is matched to the line
 *                       (water pacing, camera first)
 *   2. Breakage statement - can / cannot clear; jetting does not correct a
 *                       break; "none found" City repair program
 *   3. Insurance - the City's statement that most basic homeowner's policies
 *                       do not cover service laterals; jetting is not a repair
 *   4. Contacts and permits - the City's number (not ours) + no City statement
 *                       found on permits for cleaning
 *
 * ⚠ No housing-age section: the location page has no Census figures.
 * ⚠ THE CITY NUMBER IS THE CITY'S. The company phone is not repeated here. No
 * price, offer, response time, guarantee, emergency or same-day claim, pressure
 * or flow figure appears in the body copy. The service page's cost and same-day
 * FAQ answers (DEC-088 wording) are carried as published (DEC-139), as on the
 * Henderson and City of Las Vegas pages. Equipment names appear only inside the
 * process steps lifted from the service page.
 */

import type { PageId, ServiceLocationPageContent } from '@/types'
import { northLasVegasContent } from './las-vegas-north-las-vegas'
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
  throw new Error('sl-nlv-hydro: shared hydro jetting blocks are missing')
}

const v2 = serviceContent[id('svc-hydro-jetting')]?.v2
if (v2 === undefined || northLasVegasContent.faq === undefined) {
  throw new Error('sl-nlv-hydro: source service v2 or location FAQ is missing')
}

const slots = pageImageSlots('sl-nlv-hydro', {
  hero: {
    alt: 'Hydro jetting hose and nozzle at a cleanout at a North Las Vegas home',
    shot: 'Jetting hose entering a residential cleanout, jetter trailer at the curb, no plate or identifiable address',
  },
  problems: [shots[0], shots[1], shots[2], shots[3]] as const,
})

/**
 * Every question from the North Las Vegas location page and the hydro
 * jetting service page, minus the location page's water and sewer service
 * start question (utility accounts, no bearing on jetting a line). The
 * service page's cost and same-day answers (DEC-088 wording) are included as
 * published (DEC-139).
 */
const faq = mergeRelevantFaqs(
  northLasVegasContent.faq,
  v2.faq,
  ['How do I start water and sewer service when I buy a home in North Las Vegas?'],
  'In North Las Vegas',
)

export const northLasVegasHydroContent: ServiceLocationPageContent = {
  seoTitle: 'Hydro Jetting in North Las Vegas, NV',
  metaDescription:
    'Hydro jetting in North Las Vegas, NV. The City puts a blockage with the owner up to its main. See what jetting clears and what it cannot fix.',
  serviceDescription:
    'Hydro jetting cleans an accessible sewer or drain line with pressurized water sent through a hose and nozzle, for properties in the City of North Las Vegas, Nevada.',
  heroImage: slots.hero,
  ctaImage: slots.cta,
  sources: northLasVegasContent.sources,
  hero: {
    eyebrow: 'North Las Vegas, NV',
    title: 'Hydro Jetting in North Las Vegas',
    intro: (
      <p>
        In the City of North Las Vegas, the City says the homeowner is responsible for a blockage
        throughout the entire pipe until the connection to the City&rsquo;s main. Hydro jetting
        cleans that line with pressurized water, loosening buildup and flushing it out. It is a
        cleaning method, not a repair, and which method suits your lateral should rest on what the
        line looks like.
      </p>
    ),
  },
  body: (
    <>
      <h2>Why the method is matched to a line you answer for</h2>
      <p>
        The City of North Las Vegas says that for a blockage, the homeowner is responsible
        throughout the entire pipe until the connection to the City&rsquo;s main. Jetting here is
        for accessible private lines, not the City&rsquo;s main.
      </p>
      <p>
        More water is not automatically better, and added water can contribute to a backup if the
        line cannot carry it away. So the nozzle and settings depend on what the line looks like
        and what is in it, and the work is paced to the line. A camera look first, when included,
        helps pick the method.
      </p>

      <h2>What jetting can clear, and the breakage statement it cannot touch</h2>
      <ul>
        <li>Grease and soap buildup</li>
        <li>Debris and wipes caught in the line</li>
        <li>Roots that are loose or accessible</li>
        <li>General buildup on the pipe wall</li>
      </ul>
      <p>
        The City words a breakage differently: the homeowner is responsible until the point where
        the sewer line crosses the boundary of the property. Jetting does not correct a cracked or
        broken pipe, an offset or separated joint, a collapsed section, or a low spot that holds
        water. We found no City lateral repair, grant or reimbursement program on the City pages we
        reviewed (&ldquo;none found&rdquo;, not a statement that none exists), and The Sewer Pros
        does not repair or replace sewer lines.
      </p>

      <h2>Jetting is not a repair, and the City says insurance may not cover the lateral</h2>
      <p>
        The City says most basic homeowner&rsquo;s insurance policies do not cover service
        laterals, so ask your own insurer what applies to yours. The City also describes an
        optional plan with a private company that is separate from the City. The Sewer Pros has no
        connection to it and does not recommend it.
      </p>
      <p>
        Jetting depends on the pipe&rsquo;s condition and material, and visible structural defects
        call for a closer evaluation before cleaning, which is why the camera look comes first when
        it is included. If what we see goes beyond cleaning, we will say so plainly.
      </p>

      <h2>Before you jet: the City&rsquo;s contact and permits</h2>
      <p>
        If a plumber has inspected the line and determined a blockage is on the City side, the City
        says video evidence may be submitted to its Utilities Department for review. We did not
        find how it is submitted. The Utilities Department&rsquo;s number is 702-633-1484 (the
        City&rsquo;s number, not ours), a customer-service and online-request line, not a sewer
        emergency line.
      </p>
      <p>
        We found no City statement on whether cleaning needs a permit, so ask the Utilities
        Department. Jetting clears what can be removed. It does not tell you which approvals apply.
      </p>
    </>
  ),
  problems: [
    ...problems.map((p, i) => ({ ...p, image: slots.problems[i] })),
    {
      title: 'Buying a North Las Vegas home',
      description:
        'Cleaning is not an inspection. We found no City rule requiring a lateral inspection, certification or seller disclosure on sale, so a buyer who wants the line’s condition has to ask for a pre-purchase inspection.',
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
      'This page covers North Las Vegas. Sewer agencies and lateral rules differ across the Las Vegas Valley, so use the page for your address.',
    pageIds: [id('loc-lv-las-vegas'), id('loc-lv-henderson'), id('loc-lv-summerlin')],
    availabilityStatement: 'North Las Vegas is a service area, not an office location.',
  },
  // Every relevant question from the North Las Vegas location page and the
  // hydro jetting service page (see `faq` above).
  faq,
  relatedPageIds: [
    id('loc-lv-north-las-vegas'),
    id('svc-hydro-jetting'),
    id('svc-sewer-cleaning'),
    id('svc-sewer-camera-inspection'),
  ],
  relatedTitle: 'Related pages',
  cta: {
    title: 'Request hydro jetting in North Las Vegas',
    body: 'Tell us what your line is doing, and ask what is included before you book.',
  },
}
