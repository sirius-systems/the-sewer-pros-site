/**
 * City of Las Vegas, NV + Hydro Jetting (`sl-lv-city-hydro`).
 *
 * Authority: CLAUDE.md §9, §22, §24; docs/14-content-specification.md §43, §79.
 * Same recipe as `sl-henderson-hydro`. One local source (`lasVegasCityContent`)
 * x one service source (`svc-hydro-jetting` v2). Nothing here is new research.
 *
 * Section recipe (each section ties a City of Las Vegas fact to what jetting does):
 *   1. Responsibility - owners maintain the lateral up to the City main, so the
 *      method is matched to the line (water pacing, camera first)
 *   2. Can / cannot clear - jetting limits + "none found" City repair program
 *   3. Housing age - Census figures tied to "jetting depends on pipe condition
 *      and material, not year built"
 *   4. Contacts and permits - City numbers (the City's) + no City statement
 *      found on permits for cleaning
 *
 * ⚠ CITY NUMBERS ARE THE CITY'S. The company phone is not repeated here. No
 * price, offer, response time, guarantee, emergency or same-day claim, pressure
 * or flow figure appears in the body copy. The service page's cost and same-day
 * FAQ answers (DEC-088 wording) are carried as published (DEC-139), as on the
 * Henderson page. Equipment names appear only inside the process steps lifted
 * from the service page.
 */

import type { PageId, ServiceLocationPageContent } from '@/types'
import { lasVegasCityContent } from './las-vegas-las-vegas'
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
  throw new Error('sl-lv-city-hydro: shared hydro jetting blocks are missing')
}

const v2 = serviceContent[id('svc-hydro-jetting')]?.v2
if (v2 === undefined || lasVegasCityContent.faq === undefined) {
  throw new Error('sl-lv-city-hydro: source service v2 or location FAQ is missing')
}

const slots = pageImageSlots('sl-lv-city-hydro', {
  hero: {
    alt: 'Hydro jetting hose and nozzle at a cleanout at a Las Vegas home',
    shot: 'Jetting hose entering a residential cleanout, jetter trailer at the curb, no plate or identifiable address',
  },
  problems: [shots[0], shots[1], shots[2], shots[3]] as const,
})

/**
 * Every question from the City of Las Vegas location page and the hydro
 * jetting service page. The location page has no utility-transfer question, so
 * nothing is skipped. The service page's cost and same-day answers (DEC-088
 * wording) are included as published (DEC-139), as on the Henderson page.
 */
const faq = mergeRelevantFaqs(lasVegasCityContent.faq, v2.faq, [], 'In Las Vegas')

export const lasVegasCityHydroContent: ServiceLocationPageContent = {
  seoTitle: 'Hydro Jetting in Las Vegas, NV',
  metaDescription:
    'Hydro jetting in Las Vegas, NV. The City says owners maintain the private lateral up to its main. See what jetting clears and what it cannot fix.',
  serviceDescription:
    'Hydro jetting cleans an accessible sewer or drain line with pressurized water sent through a hose and nozzle, for properties in the City of Las Vegas, Nevada.',
  heroImage: slots.hero,
  ctaImage: slots.cta,
  sources: lasVegasCityContent.sources,
  hero: {
    eyebrow: 'Las Vegas, NV',
    title: 'Hydro Jetting in Las Vegas',
    intro: (
      <p>
        In the City of Las Vegas, the City says the owner maintains the private sewer lateral up to
        the point where it connects into the City&rsquo;s main. Hydro jetting cleans that line with
        pressurized water, loosening buildup and flushing it out. It is a cleaning method, not a
        repair, and which method suits your lateral should rest on what the line looks like.
      </p>
    ),
  },
  body: (
    <>
      <h2>Why the method is matched to a lateral you maintain</h2>
      <p>
        The City of Las Vegas says private owners maintain private sewer laterals up to the point
        where they connect into the City sewer main, and its sewer standards addenda say that
        includes any part in the public right-of-way. The City maintains the public main. Jetting
        here is for accessible private lines.
      </p>
      <p>
        More water is not automatically better, and added water can contribute to a backup if the
        line cannot carry it away. So the nozzle and settings depend on what the line looks like
        and what is in it, and the work is paced to the line. A camera look first, when included,
        helps pick the method.
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
        collapsed section, or a low spot that holds water. We found no City lateral repair, grant
        or reimbursement program on the City pages we reviewed (&ldquo;none found&rdquo;, not a
        statement that none exists), and The Sewer Pros does not repair or replace sewer lines. If
        a camera shows such a condition, further evaluation outside our scope may be appropriate.
      </p>

      <h2>Las Vegas homes are mostly from 1990 on, but jetting depends on the pipe</h2>
      <p>
        Las Vegas&rsquo;s median year built is 1994, according to the U.S. Census Bureau&rsquo;s
        American Community Survey (2020-2024 5-year estimates, Las Vegas city). Our arithmetic on
        the Census rows puts 61.3 percent of housing units at 1990 or later and 12.8 percent
        before 1970.
      </p>
      <p>
        That does not answer whether jetting suits your line. Year built does not tell you the
        condition or material of a lateral, and jetting depends on the pipe&rsquo;s condition and
        material. Visible structural defects call for a closer evaluation before cleaning, which is
        why the camera look comes first when it is included.
      </p>

      <h2>Before you jet: the City&rsquo;s contacts and permits</h2>
      <p>
        A stoppage in the City main is the City&rsquo;s to address; call its Streets &amp;
        Sanitation Division at 702-229-6227 (the City&rsquo;s number, not ours). For a problem
        specific to your property, the City says a contractor may need to investigate. We found no
        City statement on whether cleaning needs a permit, so ask Building &amp; Safety at
        702-229-6251 (the City&rsquo;s number).
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
      title: 'Buying a Las Vegas home',
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
      'This page covers the City of Las Vegas. Sewer agencies and lateral rules differ across the Las Vegas Valley, so use the page for your address.',
    pageIds: [id('loc-lv-henderson'), id('loc-lv-north-las-vegas'), id('loc-lv-summerlin')],
    availabilityStatement: 'Las Vegas is a service area, not an office location.',
  },
  // Every relevant question from the City of Las Vegas location page and the
  // hydro jetting service page (see `faq` above).
  faq,
  relatedPageIds: [
    id('loc-lv-las-vegas'),
    id('svc-hydro-jetting'),
    id('svc-sewer-cleaning'),
    id('svc-sewer-camera-inspection'),
  ],
  relatedTitle: 'Related pages',
  cta: {
    title: 'Request hydro jetting in Las Vegas',
    body: 'Tell us what your line is doing, and ask what is included before you book.',
  },
}
