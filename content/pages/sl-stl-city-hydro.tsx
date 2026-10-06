/**
 * St. Louis City, MO + Hydro Jetting (`sl-stl-city-hydro`).
 *
 * Authority: CLAUDE.md §9, §22, §24; docs/14-content-specification.md §43, §79.
 * Same recipe as `sl-lv-city-hydro`. One local source (`stLouisCityContent`,
 * `loc-stl-st-louis-city`) x one service source (`svc-hydro-jetting` v2).
 * Nothing here is new research.
 *
 * Section recipe (each section ties a St. Louis City fact to what jetting does):
 *   1. Responsibility + combined sewers - the lateral is the owner's to the MSD
 *      main, and added water is paced to a line that must carry it
 *   2. Can / cannot clear - jetting limits + the City program that excludes
 *      clogs and roots
 *   3. Older City sewers and lateral materials - jetting depends on pipe
 *      condition and material, not on an era
 *   4. Contacts and permits - MSD's number (MSD's) + the replacement permit rule
 *
 * ⚠ MSD AND CITY NUMBERS ARE THEIRS. The company phone is not repeated here. No
 * price, offer, response time, guarantee, emergency or same-day claim, pressure
 * or flow figure appears in the body copy. The service page's cost and same-day
 * FAQ answers (DEC-088 wording) are carried as published (DEC-139), as on the
 * Las Vegas pages. The location page's "about 58 percent built before 1940"
 * figure is NOT used (primary Census table check pending). Equipment names
 * appear only inside the process steps lifted from the service page.
 *
 * Audit: docs/source-reports/st-louis/sl-stl-city-hydro.md
 */

import type { PageId, ServiceLocationPageContent } from '@/types'
import { serviceContent } from './services'
import {
  SERVICE_INCLUSIONS,
  SERVICE_PROBLEMS,
  SERVICE_PROBLEM_SHOTS,
  mergeRelevantFaqs,
  pageImageSlots,
} from './service-location-shared'
import { stLouisCityContent } from './st-louis-city'

const id = (value: string): PageId => value as PageId

const problems = SERVICE_PROBLEMS['svc-hydro-jetting']
const inclusions = SERVICE_INCLUSIONS['svc-hydro-jetting']
const shots = SERVICE_PROBLEM_SHOTS['svc-hydro-jetting']
if (problems === undefined || inclusions === undefined || shots === undefined) {
  throw new Error('sl-stl-city-hydro: shared hydro jetting blocks are missing')
}

const v2 = serviceContent[id('svc-hydro-jetting')]?.v2
if (v2 === undefined || stLouisCityContent.faq === undefined) {
  throw new Error('sl-stl-city-hydro: source service v2 or location FAQ is missing')
}

const slots = pageImageSlots('sl-stl-city-hydro', {
  hero: {
    alt: 'Hydro jetting hose and nozzle at a cleanout beside a home',
    shot: 'Jetting hose entering a residential cleanout, jetter trailer at the curb, no plate or identifiable address',
  },
  problems: [shots[0], shots[1], shots[2], shots[3]] as const,
})

/**
 * Every question from the St. Louis City location page and the hydro jetting
 * service page. Nothing is skipped. The service page's cost and same-day
 * answers (DEC-088 wording) are included as published (DEC-139), as on the
 * Las Vegas pages.
 */
const faq = mergeRelevantFaqs(stLouisCityContent.faq, v2.faq, [], 'In St. Louis City')

export const stLouisCityHydroContent: ServiceLocationPageContent = {
  seoTitle: 'Hydro Jetting in St. Louis City, MO',
  metaDescription:
    'Hydro jetting in St. Louis City, MO. Your lateral is private up to the MSD main, even under the street. See what jetting clears and what it cannot fix.',
  serviceDescription:
    'Hydro jetting cleans an accessible sewer or drain line with pressurized water sent through a hose and nozzle, for properties in St. Louis City, Missouri.',
  heroImage: slots.hero,
  ctaImage: slots.cta,
  sources: stLouisCityContent.sources,
  hero: {
    eyebrow: 'St. Louis City, MO',
    title: 'Hydro Jetting in St. Louis City',
    intro: (
      <p>
        In St. Louis City, MSD maintains the public sewer main, and the lateral from your building
        to it is private property, even where it runs under the street or alley. Hydro jetting
        cleans that private line with pressurized water, loosening buildup and flushing it out. It
        is a cleaning method, not a repair, and which method suits your lateral should rest on what
        the line looks like.
      </p>
    ),
  },
  body: (
    <>
      <h2>A private lateral, a combined system, and why the water is paced</h2>
      <p>
        MSD says the lateral connecting your building to the public main, including its connection,
        is private property and normally the owner&rsquo;s, even under the street or alley. Jetting
        here is for accessible private lines.
      </p>
      <p>
        MSD says most of the City is served by combined sewers that can be overwhelmed in intense
        rain, which can cause wet-weather basement backups. More water is not automatically better,
        and added water can contribute to a backup if the line cannot carry it away, so the nozzle
        and settings depend on what the line looks like and the work is paced to the line.
      </p>

      <h2>What jetting can clear, and what the City&rsquo;s program leaves out</h2>
      <ul>
        <li>Grease and soap buildup</li>
        <li>Debris and wipes caught in the line</li>
        <li>Roots that are loose or accessible</li>
        <li>General buildup on the pipe wall</li>
      </ul>
      <p>
        Jetting does not correct a cracked or broken pipe, an offset or separated joint, a collapsed
        section, or a low spot that holds water. The City&rsquo;s Sewer Lateral Repair Program is
        for severe damage under the public right-of-way, and the City says it does not cover
        clearing clogs or tree roots anywhere on the lateral, which is the work jetting does. The
        Sewer Pros does not repair or replace sewer lines. If a camera shows a structural condition,
        further evaluation outside our scope may be appropriate.
      </p>

      <h2>Old City sewers, lateral materials, and what jetting depends on</h2>
      <p>
        MSD describes the City&rsquo;s combined sewers as among the oldest in the country. That is
        the public system, not your lateral, whose material only an inspection shows. In general
        terms, vitrified clay laterals, common from roughly the 1900s to the 1970s, wear at the
        joints and let roots in. Cast iron, roughly 1900s to 1980, can corrode and scale on the
        inside, narrowing the pipe. These are general industry timelines, not a statement about any
        one home.
      </p>
      <p>
        Jetting depends on the pipe&rsquo;s condition and material, so a line&rsquo;s age or era
        does not tell you whether jetting suits it. Visible structural defects call for a closer
        evaluation before cleaning, which is why the camera look comes first when it is included.
      </p>

      <h2>Before you jet: MSD first, and the City&rsquo;s permit rule</h2>
      <p>
        If sewage is backing up through a floor drain, you smell sewage outside, or you see an
        overflow or a missing manhole cover, MSD asks you to report it right away at (314) 768-6260
        (MSD&rsquo;s number, not ours). MSD investigates whether the cause is the public sewer or
        your lateral.
      </p>
      <p>
        The City says replacing a lateral requires a plumbing permit and inspection, issued to
        City-certified licensed plumbing contractors. Jetting clears what can be removed. It does
        not tell you which approvals apply, and if what we see goes beyond cleaning, we will say so
        plainly.
      </p>
    </>
  ),
  problems: [
    ...problems.map((p, i) => ({ ...p, image: slots.problems[i] })),
    {
      title: 'Buying a St. Louis City home',
      description:
        'Cleaning is not an inspection. After closing the lateral is the buyer’s responsibility, so a buyer who wants the line’s condition should ask for a pre-purchase sewer inspection, a separate, focused look at the line.',
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
      'This page covers St. Louis City. Sewer rules and lateral programs differ across the St. Louis area, so use the page for your address.',
    pageIds: [
      id('loc-stl-chesterfield'),
      id('loc-stl-ballwin'),
      id('loc-stl-florissant'),
      id('loc-stl-st-charles'),
    ],
    availabilityStatement: 'St. Louis City is a service area, not an office location.',
  },
  // Every relevant question from the St. Louis City location page and the
  // hydro jetting service page (see `faq` above).
  faq,
  relatedPageIds: [
    id('loc-stl-st-louis-city'),
    id('svc-hydro-jetting'),
    id('svc-sewer-cleaning'),
    id('svc-sewer-camera-inspection'),
  ],
  relatedTitle: 'Related pages',
  cta: {
    title: 'Request hydro jetting in St. Louis City',
    body: 'Tell us what your line is doing, and ask what is included before you book.',
  },
}
