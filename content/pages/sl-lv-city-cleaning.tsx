/**
 * City of Las Vegas, NV + Sewer Cleaning (`sl-lv-city-cleaning`).
 *
 * Authority: CLAUDE.md §9, §22, §24; docs/14-content-specification.md §43, §79.
 * Same recipe as `sl-henderson-cleaning`. One local source
 * (`lasVegasCityContent`) x one service source (`svc-sewer-cleaning` v2).
 * Nothing here is new research.
 *
 * Section recipe (each section ties a City of Las Vegas fact to what cleaning does):
 *   1. Responsibility - the City maintains its main; the owner maintains the
 *      lateral up to it; our cleaning is private-property lines only
 *   2. What cleaning does and does not do - "none found" repair program,
 *      optional paid warranty is not a City program, cleaning is not repair
 *   3. Housing age - Census figures tied to "cleaning removes the obstruction,
 *      not necessarily the cause"
 *   4. Contacts and permits - City numbers (the City's) + no City statement
 *      found on permits for cleaning
 *
 * ⚠ CITY NUMBERS ARE THE CITY'S. The company phone comes from
 * `marketOperatingDetail['las-vegas-nv']`. No price, offer, response time,
 * emergency or same-day claim, guarantee or equipment spec appears. Equipment
 * names appear only inside the process steps lifted from the service page.
 */

import { marketOperatingDetail } from '@/data/markets/markets'
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

const lv = marketOperatingDetail['las-vegas-nv']
if (lv === undefined) throw new Error('marketOperatingDetail is missing las-vegas-nv')

const problems = SERVICE_PROBLEMS['svc-sewer-cleaning']
const inclusions = SERVICE_INCLUSIONS['svc-sewer-cleaning']
const shots = SERVICE_PROBLEM_SHOTS['svc-sewer-cleaning']
if (problems === undefined || inclusions === undefined || shots === undefined) {
  throw new Error('sl-lv-city-cleaning: shared sewer cleaning blocks are missing')
}

const v2 = serviceContent[id('svc-sewer-cleaning')]?.v2
if (v2 === undefined || lasVegasCityContent.faq === undefined) {
  throw new Error('sl-lv-city-cleaning: source service v2 or location FAQ is missing')
}

const slots = pageImageSlots('sl-lv-city-cleaning', {
  hero: {
    alt: 'Technician setting up sewer cleaning equipment at a cleanout at a Las Vegas home',
    shot: 'Technician with a cleaning machine and cable or hose at a residential cleanout, no identifiable address',
  },
  problems: [shots[0], shots[1], shots[2], shots[3]] as const,
})

/**
 * Every question from the City of Las Vegas location page and the sewer
 * cleaning service page. The location page has no utility-transfer question,
 * so nothing is skipped. The service page's cost question (DEC-088 wording) is
 * carried as published, as on the Henderson page.
 */
const faq = mergeRelevantFaqs(lasVegasCityContent.faq, v2.faq, [], 'In Las Vegas')

export const lasVegasCityCleaningContent: ServiceLocationPageContent = {
  seoTitle: 'Sewer Cleaning in Las Vegas, NV',
  metaDescription:
    'Sewer cleaning in Las Vegas, NV. The City maintains its main; owners maintain the lateral up to it. See what cleaning does and what it does not.',
  serviceDescription:
    'Sewer cleaning is the removal of grease, roots, deposits, debris, and other material that restricts flow in an accessible private sewer line, for properties in the City of Las Vegas, Nevada.',
  heroImage: slots.hero,
  ctaImage: slots.cta,
  sources: lasVegasCityContent.sources,
  hero: {
    eyebrow: 'Las Vegas, NV',
    title: 'Sewer Cleaning in Las Vegas',
    intro: (
      <p>
        In the City of Las Vegas, the City maintains the public sewer main, and says owners
        maintain the private lateral up to the point where it connects into that main, including,
        per its standards addenda, any part under the public right-of-way. Sewer cleaning removes
        grease, roots, debris and other buildup from the accessible private line. It clears the
        pipe. It does not repair it.
      </p>
    ),
  },
  body: (
    <>
      <h2>Where the City&rsquo;s sewer ends and your line begins</h2>
      <p>
        The City of Las Vegas says it maintains the public sewer main, and that a stoppage in it
        can affect several upstream properties and overflow manholes. That is the City&rsquo;s to
        address. Private owners maintain the private lateral from their property up to the
        connection into the main.
      </p>
      <p>
        Our cleaning covers accessible private-property sewer and drain lines, not public sewer
        mains. Cleaning does not show where the connection is or which side of it a blockage is on.
        Sanitary Sewer Engineering, at 702-229-6541 (the City&rsquo;s number), handles requests
        about point-of-connection conditions, so confirm with the City how its rule applies to your
        address.
      </p>

      <h2>What cleaning does on a Las Vegas lateral, and what it does not</h2>
      <p>
        Cleaning is the maintenance side of owning the line: hydraulic or mechanical equipment,
        chosen for the line, removes the grease, roots, deposits or debris that restrict flow. It
        does not repair a cracked, offset, separated or collapsed pipe, and a line that flows again
        is not proof the pipe is sound.
      </p>
      <p>
        We found no City lateral repair, grant or reimbursement program on the City pages we
        reviewed. That is &ldquo;none found&rdquo;, not a statement that none exists. The City
        promotes an optional warranty offered with a private company, which is a product you
        choose to buy, not City assistance. The Sewer Pros does not perform repairs or
        replacements.
      </p>

      <h2>A 1994 median year built does not settle what is in the line</h2>
      <p>
        Las Vegas&rsquo;s median year built is 1994, according to the U.S. Census Bureau&rsquo;s
        American Community Survey (2020-2024 5-year estimates, Las Vegas city), and our arithmetic
        on the Census rows puts 61.3 percent of housing units at 1990 or later and 12.8 percent
        before 1970. Year built does not tell you the condition or material of a lateral.
      </p>
      <p>
        When a clog keeps returning in a house of any age, buildup, roots or debris may remain in
        the line, or a pipe condition may be involved. Cleaning removes the obstruction, not
        necessarily what is causing it, and a camera can help show which.
      </p>

      <h2>The City&rsquo;s contacts, permits, and where cleaning fits</h2>
      <p>
        For a stoppage in the City main, call the City&rsquo;s Streets &amp; Sanitation Division at
        702-229-6227 (the City&rsquo;s number, not ours). For a problem specific to your property,
        the City says a contractor may need to investigate. The City lists &ldquo;building water
        and sewer repairs/replacements&rdquo; as an online permit category, but we found no City
        statement that cleaning needs a permit, so ask Building &amp; Safety at 702-229-6251 (the
        City&rsquo;s number).
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
      title: 'The City’s main or your lateral',
      description:
        'A stoppage that affects several properties or overflows manholes is the City’s to address. A problem specific to your property may need a contractor to investigate. Our cleaning covers accessible private lines, not public mains.',
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
  // sewer cleaning service page (see `faq` above).
  faq,
  relatedPageIds: [
    id('loc-lv-las-vegas'),
    id('svc-sewer-cleaning'),
    id('svc-hydro-jetting'),
    id('svc-sewer-cleaning-camera-inspection'),
  ],
  relatedTitle: 'Related pages',
  cta: {
    title: 'Request sewer cleaning in Las Vegas',
    body: 'Have the line you maintain cleaned, and ask whether a camera look before or after is included.',
  },
}
