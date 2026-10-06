/**
 * City of North Las Vegas, NV + Sewer Cleaning (`sl-nlv-cleaning`).
 *
 * Authority: CLAUDE.md §9, §22, §24. Same recipe as `sl-lv-city-cleaning` and
 * `sl-henderson-cleaning`. One local source (`northLasVegasContent`) x one
 * service source (`svc-sewer-cleaning` v2). Nothing here is new research.
 *
 * Section recipe (each section ties a North Las Vegas fact to what cleaning does):
 *   1. Blockage statement - the City puts a blockage with the homeowner to the
 *                       City main; our cleaning is private-property lines only
 *   2. Breakage statement - what cleaning does and does not do; cleaning is not
 *                       repair, so the City's breakage case is not ours to fix
 *   3. No program, optional plan - "none found" repair program; basic
 *                       homeowner's insurance per the City; the optional
 *                       third-party plan is the City's words, not a program
 *   4. City side and contacts - video-review path, the City's number (not
 *                       ours), no permit statement found, company phone
 *
 * ⚠ No housing-age section: the location page has no Census figures.
 * ⚠ THE CITY NUMBER IS THE CITY'S. The company phone comes from
 * `marketOperatingDetail['las-vegas-nv']`. No price, offer, response time,
 * emergency or same-day claim, guarantee or equipment spec appears. Equipment
 * names appear only inside the process steps lifted from the service page.
 */

import { marketOperatingDetail } from '@/data/markets/markets'
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

const lv = marketOperatingDetail['las-vegas-nv']
if (lv === undefined) throw new Error('marketOperatingDetail is missing las-vegas-nv')

const problems = SERVICE_PROBLEMS['svc-sewer-cleaning']
const inclusions = SERVICE_INCLUSIONS['svc-sewer-cleaning']
const shots = SERVICE_PROBLEM_SHOTS['svc-sewer-cleaning']
if (problems === undefined || inclusions === undefined || shots === undefined) {
  throw new Error('sl-nlv-cleaning: shared sewer cleaning blocks are missing')
}

const v2 = serviceContent[id('svc-sewer-cleaning')]?.v2
if (v2 === undefined || northLasVegasContent.faq === undefined) {
  throw new Error('sl-nlv-cleaning: source service v2 or location FAQ is missing')
}

const slots = pageImageSlots('sl-nlv-cleaning', {
  hero: {
    alt: 'Technician setting up sewer cleaning equipment at a cleanout at a North Las Vegas home',
    shot: 'Technician with a cleaning machine and cable or hose at a residential cleanout, no identifiable address',
  },
  problems: [shots[0], shots[1], shots[2], shots[3]] as const,
})

/**
 * Every question from the North Las Vegas location page and the sewer
 * cleaning service page, minus the location page's water and sewer service
 * start question (utility accounts, no bearing on cleaning a line). The
 * service page's cost question (DEC-088 wording) is carried as published.
 */
const faq = mergeRelevantFaqs(
  northLasVegasContent.faq,
  v2.faq,
  ['How do I start water and sewer service when I buy a home in North Las Vegas?'],
  'In North Las Vegas',
)

export const northLasVegasCleaningContent: ServiceLocationPageContent = {
  seoTitle: 'Sewer Cleaning in North Las Vegas, NV',
  metaDescription:
    'Sewer cleaning in North Las Vegas, NV. The City puts a blockage with the owner up to its main. See what cleaning clears and what it does not repair.',
  serviceDescription:
    'Sewer cleaning is the removal of grease, roots, deposits, debris, and other material that restricts flow in an accessible private sewer line, for properties in the City of North Las Vegas, Nevada.',
  heroImage: slots.hero,
  ctaImage: slots.cta,
  sources: northLasVegasContent.sources,
  hero: {
    eyebrow: 'North Las Vegas, NV',
    title: 'Sewer Cleaning in North Las Vegas',
    intro: (
      <p>
        In the City of North Las Vegas, the City says the homeowner is responsible for a blockage
        throughout the entire pipe until the connection to the City&rsquo;s main. Sewer cleaning
        removes grease, roots, debris and other buildup from the accessible private line. It clears
        the pipe. It does not repair it.
      </p>
    ),
  },
  body: (
    <>
      <h2>A blockage is yours to the City&rsquo;s main</h2>
      <p>
        The City of North Las Vegas says that for a blockage, the homeowner is responsible
        throughout the entire pipe until the connection to the City&rsquo;s main. That is the part
        cleaning is for. Our cleaning covers accessible private-property sewer and drain lines, not
        public sewer mains.
      </p>
      <p>
        Cleaning does not show where the connection to the main is, and the City&rsquo;s pages do
        not say where it sits at any address. Ask the City&rsquo;s Utilities Department how its
        statement applies to yours.
      </p>

      <h2>A breakage is a different statement, and cleaning does not repair it</h2>
      <p>
        For a breakage, the City says the homeowner is responsible until the point where the sewer
        line crosses the boundary of the property. We do not reconcile the two statements. Cleaning
        is the maintenance side of owning the line: hydraulic or mechanical equipment, chosen for
        the line, removes the grease, roots, deposits or debris that restrict flow. It does not
        repair a cracked, offset, separated or collapsed pipe, and a line that flows again is not
        proof the pipe is sound.
      </p>

      <h2>No City program, and an optional plan that is not one</h2>
      <p>
        We found no City lateral repair, grant or reimbursement program on the City pages we
        reviewed. That is &ldquo;none found&rdquo;, not a statement that none exists. The City says
        most basic homeowner&rsquo;s insurance policies do not cover service laterals, and it
        describes an optional plan with a private company, Service Line Warranties of America, that
        is separate from the City. That plan is a product you choose to buy, not City assistance.
        The Sewer Pros has no connection to it and does not recommend it. We do not perform repairs
        or replacements.
      </p>

      <h2>If the blockage is on the City side</h2>
      <p>
        The City says that if a plumber has inspected the line and determined a blockage is on the
        City side, video evidence may be submitted to its Utilities Department for review. We did
        not find how it is submitted. The Utilities Department&rsquo;s number is 702-633-1484 (the
        City&rsquo;s number, not ours), a customer-service and online-request line, not a sewer
        emergency line. We found no City statement on whether cleaning needs a permit.
      </p>
      <p>
        To talk through cleaning a line on your side of the connection, call The Sewer Pros at{' '}
        {lv.phone}. If sewage is actively backing up into your home, contact us to discuss the
        situation. The Las Vegas Valley is a newer market for us; our longest-running work is in
        St. Louis and San Diego.
      </p>
    </>
  ),
  problems: [
    ...problems.map((p, i) => ({ ...p, image: slots.problems[i] })),
    {
      title: 'A blockage or a break',
      description:
        'The City words them differently: a blockage is the homeowner’s throughout the pipe to the City’s main, a breakage until the line crosses the property boundary. Cleaning clears a blockage in an accessible private line. It does not repair a break.',
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
  // sewer cleaning service page (see `faq` above).
  faq,
  relatedPageIds: [
    id('loc-lv-north-las-vegas'),
    id('svc-sewer-cleaning'),
    id('svc-hydro-jetting'),
    id('svc-sewer-cleaning-camera-inspection'),
  ],
  relatedTitle: 'Related pages',
  cta: {
    title: 'Request sewer cleaning in North Las Vegas',
    body: 'Have the line you maintain cleaned, and ask whether a camera look before or after is included.',
  },
}
