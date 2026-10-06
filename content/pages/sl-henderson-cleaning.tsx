/**
 * Henderson, NV + Sewer Cleaning (`sl-henderson-cleaning`).
 *
 * Authority: CLAUDE.md §9, §22, §24; docs/14-content-specification.md §43, §79.
 * Built on the `sl-henderson-camera` pilot recipe in
 * `las-vegas-service-location.tsx`. One local source (`hendersonContent`) x one
 * service source (`svc-sewer-cleaning` v2). Nothing here is new research.
 *
 * Section recipe (each section ties a Henderson fact to what cleaning does):
 *   1. Responsibility - the City cleans its main to the connection; the owner
 *      pays on the lateral; our cleaning is private-property lines only
 *   2. What cleaning does and does not do - City owner duties + "none found"
 *      repair program + cleaning is not repair
 *   3. Housing age - Census figures tied to "cleaning removes the obstruction,
 *      not necessarily the cause"
 *   4. Contacts and permits - City numbers (the City's) + no City rule found
 *      on permits for cleaning
 *
 * ⚠ CITY NUMBERS ARE THE CITY'S. The company phone comes from
 * `marketOperatingDetail['las-vegas-nv']`. No price, offer, response time,
 * emergency or same-day claim, guarantee or equipment spec appears. Equipment
 * names appear only inside the process steps lifted from the service page.
 */

import { marketOperatingDetail } from '@/data/markets/markets'
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

const lv = marketOperatingDetail['las-vegas-nv']
if (lv === undefined) throw new Error('marketOperatingDetail is missing las-vegas-nv')

const problems = SERVICE_PROBLEMS['svc-sewer-cleaning']
const inclusions = SERVICE_INCLUSIONS['svc-sewer-cleaning']
const shots = SERVICE_PROBLEM_SHOTS['svc-sewer-cleaning']
if (problems === undefined || inclusions === undefined || shots === undefined) {
  throw new Error('sl-henderson-cleaning: shared sewer cleaning blocks are missing')
}

const v2 = serviceContent[id('svc-sewer-cleaning')]?.v2
if (v2 === undefined || hendersonContent.faq === undefined) {
  throw new Error('sl-henderson-cleaning: source service v2 or location FAQ is missing')
}

const slots = pageImageSlots('sl-henderson-cleaning', {
  hero: {
    alt: 'Technician setting up sewer cleaning equipment at a cleanout at a Henderson home',
    shot: 'Technician with a cleaning machine and cable or hose at a residential cleanout, no identifiable address',
  },
  problems: [shots[0], shots[1], shots[2], shots[3]] as const,
})

/**
 * Every question from the Henderson location page and the sewer cleaning
 * service page, minus one: the location page's water and sewer service transfer
 * question, which is about utility accounts when buying and has no bearing on
 * cleaning a line.
 */
const faq = mergeRelevantFaqs(
  hendersonContent.faq,
  v2.faq,
  ['How do I transfer water and sewer service when I buy a home in Henderson?'],
  'In Henderson',
)

export const hendersonCleaningContent: ServiceLocationPageContent = {
  seoTitle: 'Sewer Cleaning in Henderson, NV',
  metaDescription:
    'Sewer cleaning for Henderson, NV properties. The City cleans its main; the lateral from the connection is yours. See what cleaning does and what it does not.',
  serviceDescription:
    'Sewer cleaning is the removal of grease, roots, deposits, debris, and other material that restricts flow in an accessible private sewer line, for properties in the City of Henderson, Nevada.',
  heroImage: slots.hero,
  ctaImage: slots.cta,
  sources: hendersonContent.sources,
  hero: {
    eyebrow: 'Henderson, NV',
    title: 'Sewer Cleaning in Henderson',
    intro: (
      <p>
        In the City of Henderson, the City cleans blockages in its sewer main up to your sewer
        service connection. From that connection to your home, the City says the lateral, and
        the cleanup cost when it blocks, are yours. Sewer cleaning removes grease, roots, debris
        and other buildup from the accessible private line. It clears the pipe. It does not
        repair it.
      </p>
    ),
  },
  body: (
    <>
      <h2>Where the City&rsquo;s cleaning ends in Henderson</h2>
      <p>
        The City says it maintains and repairs its sewer main up to your sewer service
        connection, including cleaning blockages, and that it pays cleanup and repair costs when
        a blockage occurs in that main. From the connection to your home&rsquo;s plumbing, the
        City says the lateral is yours to maintain and that you pay cleanup and repair costs.
      </p>
      <p>
        Our cleaning covers accessible private-property sewer and drain lines, not public sewer
        mains. Cleaning does not show where the connection is or which side of it a blockage is
        on, so confirm with the City how its rule applies to your address.
      </p>

      <h2>What cleaning does on a Henderson lateral, and what it does not</h2>
      <p>
        Among owner duties, the City lists hiring a professional to periodically inspect the
        lateral from the connection to your home and perform any necessary maintenance or
        repairs. Cleaning is the maintenance side of that: hydraulic or mechanical equipment,
        chosen for the line, removes the grease, roots, deposits or debris that restrict flow.
      </p>
      <p>
        It does not repair a cracked, offset, separated or collapsed pipe, and a line that flows
        again is not proof the pipe is sound. We found no City lateral repair, grant or
        reimbursement program on the City pages we reviewed. That is &ldquo;none
        found&rdquo;, not a statement that none exists. The Sewer Pros does not perform repairs
        or replacements.
      </p>

      <h2>A newer home does not settle what is in the line</h2>
      <p>
        Henderson&rsquo;s median year built is 2001, according to the U.S. Census Bureau&rsquo;s
        American Community Survey (2020-2024 5-year estimates, Henderson city), and our
        arithmetic on the Census rows puts 82.1 percent of housing units at 1990 or later and
        3.1 percent before 1970. Year built does not tell you the condition or material of a
        lateral, which can be repaired, rerouted or replaced after the house was built.
      </p>
      <p>
        When a clog keeps returning in a house of any age, buildup, roots or debris may remain
        in the line, or a pipe condition may be involved. Cleaning removes the obstruction, not
        necessarily what is causing it, and a camera can help show which.
      </p>

      <h2>The City&rsquo;s contacts, and where cleaning fits</h2>
      <p>
        To report a sewer emergency, the City says to call its 24-hour call center at
        702-267-5900 (the City&rsquo;s number, not ours). For work in the public right-of-way,
        the City says to contact Public Works at 702-267-3600 about a permit. We did not find a
        City statement about permits for cleaning or for work wholly on private property, so ask
        Public Works.
      </p>
      <p>
        To talk through cleaning a line on your side of the connection, call The Sewer Pros at{' '}
        {lv.phone}. If sewage is actively backing up into your home, contact us to discuss the
        situation.
      </p>
    </>
  ),
  problems: [
    ...problems.map((p, i) => ({ ...p, image: slots.problems[i] })),
    {
      title: 'The City cleans its main, not your lateral',
      description:
        'The City says it cleans blockages in its main up to the connection and that you pay cleanup and repair costs on your side. Our cleaning covers accessible private lines, not public mains.',
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
  // Every relevant question from the Henderson location page and the sewer
  // cleaning service page (see `faq` above).
  faq,
  relatedPageIds: [
    id('loc-lv-henderson'),
    id('svc-sewer-cleaning'),
    id('svc-hydro-jetting'),
    id('svc-sewer-cleaning-camera-inspection'),
  ],
  relatedTitle: 'Related pages',
  cta: {
    title: 'Request sewer cleaning in Henderson',
    body: 'Have the line you maintain cleaned, and ask whether a camera look before or after is included.',
  },
}
