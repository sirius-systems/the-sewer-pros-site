/**
 * Oceanside, CA + Hydro Jetting (`sl-oceanside-hydro`).
 *
 * Authority: CLAUDE.md §9, §22, §24; docs/14-content-specification.md §43, §79.
 * Same recipe as `sl-sd-carlsbad-hydro` and `sl-lv-city-hydro`. One local source
 * (`oceansideContent`) x one service source (`svc-hydro-jetting` v2). Nothing
 * here is new research.
 *
 * Section recipe (each section ties an Oceanside fact to what jetting does):
 *   1. Whose line - "from the street to your house"; unpublished end point;
 *      jetting cleans accessible private lines and shows no boundary
 *   2. Housing age - 1984 median; year built says nothing about material;
 *      jetting does not close cracks; camera first when included
 *   3. Who to call - plumber for a leak; City numbers; no sewer backup line;
 *      added water can add to a backup
 *   4. Programs and approvals - none found; improvement plans; permits; we do
 *      not repair
 *
 * ⚠ OCEANSIDE HAS ONE SEWER AGENCY (the City). CITY NUMBERS ARE THE CITY'S. No
 * company phone, price, offer, response time, emergency or same-day claim,
 * guarantee, pressure or flow figure, or office.
 */

import type { PageId, ServiceLocationPageContent } from '@/types'
import { oceansideContent } from './san-diego-oceanside'
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
  throw new Error('sl-sd-oceanside-hydro: shared blocks are missing')
}

const v2 = serviceContent[id('svc-hydro-jetting')]?.v2
if (v2 === undefined || oceansideContent.faq === undefined) {
  throw new Error('sl-sd-oceanside-hydro: source service v2 or location FAQ is missing')
}

const slots = pageImageSlots('sl-oceanside-hydro', {
  hero: {
    alt: 'Hydro jetting hose and nozzle at a cleanout beside a home',
    shot: 'Jetting hose entering a residential cleanout, jetter trailer at the curb, no plate or identifiable address',
  },
  problems: [shots[0], shots[1], shots[2], shots[3]] as const,
})

/**
 * Every question from the Oceanside location page and the hydro jetting service
 * page. Nothing is skipped. The service page's cost and same-day answers
 * (DEC-088 wording) are included as published (DEC-139).
 */
const faq = mergeRelevantFaqs(oceansideContent.faq, v2.faq, [], 'In Oceanside')

export const oceansideHydroContent: ServiceLocationPageContent = {
  seoTitle: 'Hydro Jetting in Oceanside, CA',
  metaDescription:
    'Hydro jetting in Oceanside, CA. The City says private lines run from the street to your house. See what jetting clears and what it cannot fix.',
  serviceDescription:
    'Hydro jetting cleans an accessible sewer or drain line with pressurized water sent through a hose and nozzle, for properties in Oceanside, California.',
  heroImage: slots.hero,
  ctaImage: slots.cta,
  sources: oceansideContent.sources,
  hero: {
    eyebrow: 'Oceanside, CA',
    title: 'Hydro Jetting in Oceanside',
    intro: (
      <p>
        In Oceanside, the City says private sewer lines, “from the street to your house,” are the
        property owner’s responsibility, and we did not find where the City’s part ends. Hydro
        jetting cleans the accessible private line with pressurized water, loosening buildup and
        flushing it out. It is a cleaning method, not a repair.
      </p>
    ),
  },
  body: (
    <>
      <h2>Jetting cleans the private line, and the City does not publish where it ends</h2>
      <p>
        The City of Oceanside Water Utilities Department runs the public sewer system, and it says
        private sewer lines, “from the street to your house,” are the property owner’s
        responsibility. We did not find a City statement of the exact point where its part ends, or
        of whether the owner’s part includes the section under the street.
      </p>
      <p>
        Hydro jetting sends pressurized water through a hose and nozzle that advances through an
        accessible line, scours the pipe wall and moves debris along. It cleans the line. It does
        not show where the City’s part begins, so ask Water Utilities before you assign cost.
      </p>

      <h2>A 1984 median year built does not say what jetting is dealing with</h2>
      <p>
        Oceanside’s median year built is 1984, plus or minus 2 years, according to the U.S. Census
        Bureau’s American Community Survey (2020-2024 5-year estimates, Oceanside city). Our
        arithmetic on the Census rows puts 48.6 percent of housing units from 1970 to 1989 and 16.9
        percent before 1970.
      </p>
      <p>
        Year built does not tell you the condition or material of a lateral, which can be repaired,
        rerouted or replaced after the house is built. Whether jetting suits a pipe depends on its
        condition and material, and visible structural defects call for a closer look before
        cleaning, which is why a camera first helps when it is included. Jetting does not close a
        crack, an offset or separated joint, a collapsed section or a low spot that holds water.
      </p>

      <h2>For a leak the City says call a plumber, and it publishes no sewer backup line</h2>
      <p>
        For a sewer leak on your property, the City says to call a plumber. Its customer service
        number is (760) 435-5800 (the City’s number, not ours). The City also publishes (760)
        435-3900 for water emergencies. It frames that number around City water, and we did not find
        a sewer-specific backup or overflow instruction, so we do not present it as a sewer line.
      </p>
      <p>
        Jetting is one way to address buildup on your side of the connection. More water is not
        automatically better, and extra water can add to a backup if the line cannot carry it away,
        so the work is paced to what the line is doing.
      </p>

      <h2>No City program found, and approvals to ask about if jetting leads to more</h2>
      <p>
        We found no City lateral repair, replacement, grant or reimbursement program (“none found”,
        not a statement that none exists, and the City’s pages carry no current date). Nothing we
        reviewed says any agency pays for our services. The City says sewer improvements in a public
        right-of-way, a City easement or City property need an improvement plan approved by Water
        Utilities and signed by a Registered Civil Engineer.
      </p>
      <p>
        For private property it says improvements may trigger a permit, and we did not find a
        published rule that covers every repair of an existing lateral. If what we see goes beyond
        cleaning, we will say so plainly. The Sewer Pros does not perform repairs or replacements.
      </p>
    </>
  ),
  problems: [
    ...problems.map((p, i) => ({ ...p, image: slots.problems[i] })),
    {
      title: 'A line the City says is yours, with buildup that keeps returning',
      description:
        'The City says private sewer lines run “from the street to your house.” Jetting can clear buildup that is accessible, but it does not close a crack, so ask what a camera look would show first.',
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
      'This page covers the City of Oceanside. Sewer agencies and lateral rules differ across San Diego County, so use the page for your address.',
    pageIds: [
      id('loc-sd-san-diego'),
      id('loc-sd-san-marcos'),
      id('loc-sd-carlsbad'),
      id('loc-sd-escondido'),
      id('loc-sd-chula-vista'),
      id('loc-sd-mission-valley'),
    ],
    availabilityStatement: 'Oceanside is a service area, not an office location.',
  },
  // Every relevant question from the Oceanside location page and the hydro
  // jetting service page (see `faq` above).
  faq,
  relatedPageIds: [
    id('loc-sd-oceanside'),
    id('svc-hydro-jetting'),
    id('svc-sewer-cleaning'),
    id('svc-sewer-camera-inspection'),
  ],
  relatedTitle: 'Related pages',
  cta: {
    title: 'Request hydro jetting in Oceanside',
    body: 'Tell us what your line is doing, and ask what is included before you book.',
  },
}
