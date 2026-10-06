/**
 * Florissant, MO + Hydro Jetting (`sl-florissant-hydro`).
 *
 * Same recipe as `sl-nlv-hydro` and `sl-lv-city-hydro`. One local source
 * (`florissantContent`) x one service source (`svc-hydro-jetting` v2).
 * Nothing here is new research.
 *
 * Section recipe (each ties a Florissant fact to what jetting does):
 *   1. MSD and the owner  - the lateral is private; jetting is for accessible
 *                           private lines, not MSD's main; method paced to the
 *                           line (camera first when included).
 *   2. Maintenance wording - the City says routine maintenance may mean annual
 *                           cabling; jetting clears, it does not repair.
 *   3. The City's denial reasons - a line that is open and serviceable, a
 *                           blockage within five feet; the $300 deposit is the
 *                           CITY's term; the camera look shows what remains.
 *   4. Mid-century homes  - 21,229 units, mostly 1950-1979; no pipe material
 *                           published; jetting depends on pipe condition.
 *
 * ⚠ CITY AND MSD NUMBERS AND DOLLAR TERMS ARE THEIRS, not ours. No company
 * phone is repeated here. No price, offer, response time, guarantee, emergency
 * or same-day claim, pressure or flow figure appears in the body copy. The
 * service page's cost and same-day FAQ answers (DEC-088 wording) are carried as
 * published, as on the Las Vegas pages. Equipment names appear only inside the
 * process steps lifted from the service page. Florissant is a service area, not
 * an office. Repair and replacement are never presented as offered. Nothing
 * from the St. Louis City, Chesterfield, Ballwin or St. Charles pages is used.
 *
 * Audit: docs/source-reports/st-louis/sl-florissant-hydro.md
 */

import type { PageId, ServiceLocationPageContent } from '@/types'
import { florissantContent } from './st-louis-florissant'
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
  throw new Error('sl-florissant-hydro: shared hydro jetting blocks are missing')
}

const v2 = serviceContent[id('svc-hydro-jetting')]?.v2
if (v2 === undefined || florissantContent.faq === undefined) {
  throw new Error('sl-florissant-hydro: source service v2 or location FAQ is missing')
}

const slots = pageImageSlots('sl-florissant-hydro', {
  hero: {
    alt: 'Hydro jetting hose entering a cleanout beside a home',
    shot: 'Jetting hose entering a residential cleanout, jetter trailer at the curb, no plate or identifiable address',
  },
  problems: [shots[0], shots[1], shots[2], shots[3]] as const,
})

/**
 * Every question from the Florissant location page and the hydro jetting
 * service page. Nothing is skipped: each location question bears on a line
 * the owner maintains, and the service page's cost and same-day answers
 * (DEC-088 wording) are included as published.
 */
const faq = mergeRelevantFaqs(florissantContent.faq, v2.faq, [], 'In Florissant')

export const florissantHydroContent: ServiceLocationPageContent = {
  seoTitle: 'Hydro Jetting in Florissant, MO',
  metaDescription:
    'Hydro jetting in Florissant, MO. MSD handles the public sewer; the lateral is yours. See what jetting clears and what it cannot fix.',
  serviceDescription:
    'Hydro jetting cleans an accessible sewer or drain line with pressurized water sent through a hose and nozzle, for properties in Florissant, Missouri.',
  heroImage: slots.hero,
  ctaImage: slots.cta,
  sources: florissantContent.sources,
  hero: {
    eyebrow: 'Florissant, MO',
    title: 'Hydro Jetting in Florissant',
    intro: (
      <p>
        In Florissant, MSD says the lateral from your building to the public sewer, including its
        connection, is private property that the owner maintains. Hydro jetting cleans that line
        with pressurized water, loosening buildup and flushing it out. It is a cleaning method, not
        a repair, and the City&rsquo;s lateral program is for defective pipe, not routine
        maintenance.
      </p>
    ),
  },
  body: (
    <>
      <h2>Why the method is matched to a lateral you maintain</h2>
      <p>
        MSD says the lateral line and its connection to the public sewer are private property, and
        that the owner maintains and repairs it. The public sewer is MSD&rsquo;s side. For a
        building backup, MSD asks you to call it first at (314) 768-6260 (MSD&rsquo;s number, not
        ours). Jetting here is for accessible private lines, not MSD&rsquo;s main.
      </p>
      <p>
        More water is not automatically better, and added water can contribute to a backup if the
        line cannot carry it away. So the nozzle and settings depend on what the line looks like and
        what is in it, and the work is paced to the line. A camera look first, when included, helps
        pick the method.
      </p>

      <h2>The City calls cabling maintenance, and jetting is cleaning, not repair</h2>
      <p>
        The City says routine maintenance may mean annual cabling and that its Sewer Lateral
        Insurance Program is not a substitute for regular maintenance. The program makes spot
        repairs, usually about 10 feet. Jetting is on the maintenance side of that line.
      </p>
      <ul>
        <li>Grease and soap buildup</li>
        <li>Debris and wipes caught in the line</li>
        <li>Roots that are loose or accessible</li>
        <li>General buildup on the pipe wall</li>
      </ul>
      <p>
        It does not correct a cracked or broken pipe, an offset or separated joint, a collapsed
        section, or a low spot that holds water. The Sewer Pros does not repair or replace sewer
        lines.
      </p>

      <h2>When a line is open and serviceable, or the blockage sits near the house</h2>
      <p>
        The City says you can apply to its program for recurring backups that regular maintenance
        cannot resolve, once the annual lateral fee is paid. It lists a line that is open and in
        serviceable condition, small defects or hairline cracks, and a blockage under the home or
        within five feet of the foundation among its reasons to deny. The $300 application deposit
        (the City&rsquo;s term) is kept if an application is denied.
      </p>
      <p>
        Jetting clears what can be removed. A line that flows again is not proof the pipe is sound,
        and when the problem returns, the cause may be something cleaning cannot remove. A second
        look, when included, shows what was removed and what remains. Confirm current program terms
        with the Engineering Division at (314) 839-7643 (the City&rsquo;s number, not ours).
      </p>

      <h2>Mid-century homes: age does not say whether a line suits jetting</h2>
      <p>
        The City&rsquo;s 2026-2030 Consolidated Plan reports 21,229 housing units in Florissant and
        says the vast majority were built between 1950 and 1979. Neither MSD nor the City publishes
        a pipe material or installation era, so housing age cannot tell you what is in your lateral.
      </p>
      <p>
        That matters because jetting depends on the pipe&rsquo;s condition and material. Visible
        structural defects call for a closer evaluation before cleaning, which is why the camera
        look comes first when it is included.
      </p>
    </>
  ),
  problems: [
    ...problems.map((p, i) => ({ ...p, image: slots.problems[i] })),
    {
      title: 'Recurring backups and a City application',
      description:
        'The City says it can accept an application for recurring backups that regular maintenance cannot resolve. Jetting is a cleaning method, not a repair, so when a camera is used, the video and written findings are your record of what was removed and what remains.',
      image: slots.problems[3],
    },
  ],
  inclusions,
  process: (v2.process?.steps ?? []).map((step) => ({
    title: step.title,
    description: typeof step.description === 'string' ? step.description : undefined,
  })),
  coverage: {
    title: 'Other St. Louis area locations',
    intro:
      'This page covers Florissant. Each St. Louis municipality has its own sewer rules and lateral program, so use the page for your address.',
    pageIds: [
      id('loc-stl-st-louis-city'),
      id('loc-stl-chesterfield'),
      id('loc-stl-ballwin'),
      id('loc-stl-st-charles'),
    ],
    availabilityStatement: 'Florissant is a service area, not an office location.',
  },
  // Every question from the Florissant location page and the hydro jetting
  // service page (see `faq` above).
  faq,
  relatedPageIds: [
    id('loc-stl-florissant'),
    id('svc-hydro-jetting'),
    id('svc-sewer-cleaning'),
    id('svc-sewer-camera-inspection'),
  ],
  relatedTitle: 'Related pages',
  cta: {
    title: 'Request hydro jetting in Florissant',
    body: 'Tell us what your line is doing, and ask what is included before you book.',
  },
}
