/**
 * St. Louis City, MO + Sewer Cleaning (`sl-stl-city-cleaning`).
 *
 * Authority: CLAUDE.md §9, §22, §24; docs/14-content-specification.md §43, §79.
 * Same recipe as `sl-lv-city-cleaning`. One local source (`stLouisCityContent`,
 * `loc-stl-st-louis-city`) x one service source (`svc-sewer-cleaning` v2).
 * Nothing here is new research.
 *
 * Section recipe (each section ties a St. Louis City fact to what cleaning does):
 *   1. Responsibility - MSD maintains the public main; the lateral is private to
 *      the main, even under the street; our cleaning is private lines only
 *   2. What cleaning does and does not do - the City program excludes clogs and
 *      roots, so cleaning is owner maintenance; cleaning is not repair
 *   3. Combined sewers - wet-weather backups are a system-level fact; cleaning
 *      removes the obstruction, not necessarily the cause
 *   4. Contacts and permits - MSD's number (MSD's), the permit rule the City
 *      states for replacement, and where a cleaning call fits
 *
 * ⚠ MSD AND CITY NUMBERS ARE THEIRS. The company phone comes from
 * `marketOperatingDetail['st-louis-mo']`. No price, offer, response time,
 * emergency or same-day claim, guarantee or equipment spec appears. The
 * location page's "about 58 percent built before 1940" figure is NOT used
 * (primary Census table check pending). Equipment names appear only inside the
 * process steps lifted from the service page.
 *
 * Audit: docs/source-reports/st-louis/sl-stl-city-cleaning.md
 */

import { marketOperatingDetail } from '@/data/markets/markets'
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

const stl = marketOperatingDetail['st-louis-mo']
if (stl === undefined) throw new Error('marketOperatingDetail is missing st-louis-mo')

const problems = SERVICE_PROBLEMS['svc-sewer-cleaning']
const inclusions = SERVICE_INCLUSIONS['svc-sewer-cleaning']
const shots = SERVICE_PROBLEM_SHOTS['svc-sewer-cleaning']
if (problems === undefined || inclusions === undefined || shots === undefined) {
  throw new Error('sl-stl-city-cleaning: shared sewer cleaning blocks are missing')
}

const v2 = serviceContent[id('svc-sewer-cleaning')]?.v2
if (v2 === undefined || stLouisCityContent.faq === undefined) {
  throw new Error('sl-stl-city-cleaning: source service v2 or location FAQ is missing')
}

const slots = pageImageSlots('sl-stl-city-cleaning', {
  hero: {
    alt: 'Technician setting up sewer cleaning equipment at a cleanout beside a home',
    shot: 'Technician with a cleaning machine and cable or hose at a residential cleanout, no identifiable address',
  },
  problems: [shots[0], shots[1], shots[2], shots[3]] as const,
})

/**
 * Every question from the St. Louis City location page and the sewer cleaning
 * service page. Nothing is skipped: the location page's camera question stays
 * (as on the Las Vegas cleaning pages), and the service page's cost question
 * (DEC-088 wording) is carried as published.
 */
const faq = mergeRelevantFaqs(stLouisCityContent.faq, v2.faq, [], 'In St. Louis City')

export const stLouisCityCleaningContent: ServiceLocationPageContent = {
  seoTitle: 'Sewer Cleaning in St. Louis City, MO',
  metaDescription:
    'Sewer cleaning in St. Louis City, MO. MSD maintains the main; your lateral is private, even under the street. See what cleaning does and what it does not.',
  serviceDescription:
    'Sewer cleaning is the removal of grease, roots, deposits, debris, and other material that restricts flow in an accessible private sewer line, for properties in St. Louis City, Missouri.',
  heroImage: slots.hero,
  ctaImage: slots.cta,
  sources: stLouisCityContent.sources,
  hero: {
    eyebrow: 'St. Louis City, MO',
    title: 'Sewer Cleaning in St. Louis City',
    intro: (
      <p>
        In St. Louis City, MSD maintains the public sewer main, and the lateral from your building
        to it is private property, even where it runs under the street or alley. The City&rsquo;s
        lateral repair program does not cover clearing clogs or roots. Sewer cleaning removes
        grease, roots, debris and other buildup from the accessible private line. It clears the
        pipe. It does not repair it.
      </p>
    ),
  },
  body: (
    <>
      <h2>Where MSD&rsquo;s main ends and the line you maintain begins</h2>
      <p>
        MSD says it maintains the public sewer main, and that the lateral connecting your building
        to that main, including its connection, is private property and normally the owner&rsquo;s
        to maintain, even under the street or alley. MSD names a blockage in the private lateral as
        a common cause of sewer backup.
      </p>
      <p>
        Our cleaning covers accessible private-property sewer and drain lines, not public sewer
        mains. Cleaning does not show where the connection to the main is or which side of it a
        blockage sat on, so confirm with MSD or the City how the rules apply to your address.
      </p>

      <h2>The City&rsquo;s program skips clogs and roots, which is where cleaning fits</h2>
      <p>
        The City&rsquo;s Sewer Lateral Repair Program is aimed at severe damage under the public
        right-of-way that causes a cave-in or a backup into the home, for residential properties of
        six or fewer units. The City says it does not cover clearing clogs or tree roots anywhere on
        the lateral.
      </p>
      <p>
        Cleaning is the maintenance side of owning the line: hydraulic or mechanical equipment,
        chosen for the line, removes the grease, roots, deposits or debris that restrict flow. It
        does not repair a cracked, offset, separated or collapsed pipe, and a line that flows again
        is not proof the pipe is sound. The Sewer Pros does not perform repairs or replacements.
      </p>

      <h2>Combined sewers, heavy rain, and a clog that comes back</h2>
      <p>
        MSD says most of the City is served by combined sewers, where one set of public pipes
        carries wastewater and stormwater. In intense rain that capacity can be overwhelmed, which
        can cause wet-weather basement backups in affected areas.
      </p>
      <p>
        That is a system-level fact, not a finding about your line. Cleaning your lateral does not
        change what the public system does in a storm. When a clog keeps returning, buildup, roots
        or debris may remain, or a pipe condition may be involved. Cleaning removes the obstruction,
        not necessarily what is causing it, and a camera can help show which.
      </p>

      <h2>Who to call first, and what the City says about permits</h2>
      <p>
        If sewage is backing up through a floor drain, you smell sewage outside, or you see an
        overflow or a missing manhole cover, MSD asks you to report it right away at (314) 768-6260
        (MSD&rsquo;s number, not ours). MSD investigates whether the cause is the public sewer or
        your lateral. The permit rule the City states is for replacing a lateral, which needs a
        plumbing permit and inspection issued to City-certified licensed plumbing contractors.
        Cleaning is not replacement, so ask the City whether anything applies to your project.
      </p>
      <p>
        If MSD or a plumber points to your lateral, call The Sewer Pros at {stl.phone} to talk
        through cleaning the line on your side of the connection. We are locally owned and
        family-operated, since {stl.foundingYear}.
      </p>
    </>
  ),
  problems: [
    ...problems.map((p, i) => ({ ...p, image: slots.problems[i] })),
    {
      title: 'The public sewer or your lateral',
      description:
        'If sewage is backing up through a floor drain, or you see an overflow or a missing manhole cover, MSD asks you to report it right away. MSD investigates whether the cause is the public sewer or your lateral. Our cleaning covers accessible private lines, not public mains.',
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
  // sewer cleaning service page (see `faq` above).
  faq,
  relatedPageIds: [
    id('loc-stl-st-louis-city'),
    id('svc-sewer-cleaning'),
    id('svc-hydro-jetting'),
    id('svc-sewer-cleaning-camera-inspection'),
  ],
  relatedTitle: 'Related pages',
  cta: {
    title: 'Request sewer cleaning in St. Louis City',
    body: 'Have the private lateral cleaned, and ask whether a camera look before or after is included.',
  },
}
