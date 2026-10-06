/**
 * Ballwin, MO + Drain Cleaning (`sl-ballwin-drain`).
 *
 * Built from exactly two sources, as `sl-lv-city-drain` is:
 *   LOCATION  `ballwinContent`  (content/pages/st-louis-ballwin.tsx)
 *   SERVICE   `svc-drain-cleaning` v2 content (content/pages/services.tsx)
 *             and `./sl-blocks/drain-cleaning`
 *
 * Section recipe (each ties a Ballwin fact to what THIS service does or
 * cannot do; swap the city or the service and the copy breaks):
 *   1. Responsibility        - MSD's main and the private lateral, the City
 *                              program's lateral starting at the outside wall,
 *                              vs. fixture drains upstream of it.
 *   2. One drain, several, or a building backup - the service's triage, plus
 *                              MSD's building-backup line (MSD's number).
 *   3. Clay laterals and a 1976 median - a drain that flows again vs. a pipe
 *                              that can still be cracked or separated.
 *   4. The City program      - what it does not pay for (cabling, video), what
 *                              cleaning does not fix, no repairs by us.
 *
 * ⚠ CITY, MSD AND DOLLAR NUMBERS ARE THEIRS, not ours. The company phone is
 * read from `marketOperatingDetail`, never typed. No price, offer, response
 * time, guarantee, emergency or same-day claim. Ballwin is a service area, not
 * an office. Repair and replacement are never presented as offered.
 * Ballwin facts only: nothing from another St. Louis municipality or from MSD's
 * St. Louis City system is carried over.
 */

import { marketOperatingDetail } from '@/data/markets/markets'
import type { PageId, ProcessContent, ServiceLocationPageContent } from '@/types'
import { ballwinContent } from './st-louis-ballwin'
import { serviceContent } from './services'
import { mergeRelevantFaqs, pageImageSlots } from './service-location-shared'
import { inclusions, problems, shots } from './sl-blocks/drain-cleaning'

const id = (value: string): PageId => value as PageId

const stl = marketOperatingDetail['st-louis-mo']
if (stl === undefined) throw new Error('marketOperatingDetail is missing st-louis-mo')

const slots = pageImageSlots('sl-ballwin-drain', {
  hero: {
    alt: 'Drain cleaning equipment at a fixture in a home',
    shot: 'Drain machine at a floor or tub drain, residential property, no identifiable address',
  },
  problems: [shots[0], shots[1], shots[2], shots[3]] as const,
})

const v2 = serviceContent[id('svc-drain-cleaning')]?.v2
if (v2 === undefined || ballwinContent.faq === undefined) {
  throw new Error('sl-ballwin-drain: source content is missing')
}

const process: ProcessContent[] = (v2.process?.steps ?? []).map((step) => ({
  title: step.title,
  description: typeof step.description === 'string' ? step.description : undefined,
}))

/**
 * Every question from the Ballwin location page and the drain cleaning page,
 * minus the ones below.
 */
const faq = mergeRelevantFaqs(
  ballwinContent.faq,
  v2.faq,
  [
    // This page IS an area page; the question is the hub's.
    'Do you clean drains in St. Louis, San Diego, and Las Vegas?',
    // Same answer, fuller, under "Does drain cleaning repair a damaged pipe?".
    'Can drain cleaning fix a broken or collapsed pipe?',
    // Same answer, fuller, under "Can tree roots grow into drain pipes?".
    'Can cleaning remove tree roots?',
  ],
  'In Ballwin',
)

export const ballwinDrainContent: ServiceLocationPageContent = {
  seoTitle: 'Drain Cleaning in Ballwin, MO',
  metaDescription:
    'Drain cleaning in Ballwin, MO. MSD owns the main; the lateral is the owner’s. See what cleaning does and does not fix.',
  serviceDescription:
    'Drain cleaning removes grease, roots, deposits, debris and other restricting material from a drain line using a rotating cable, water jetting, or both, for homes in Ballwin, Missouri. It restores flow and does not repair the pipe.',
  heroImage: slots.hero,
  ctaImage: slots.cta,
  sources: ballwinContent.sources,
  hero: {
    eyebrow: 'Ballwin, MO',
    title: 'Drain Cleaning in Ballwin',
    intro: (
      <p>
        In Ballwin, MSD owns the public sewer main and the lateral that connects your building to it
        is private, with Ballwin&rsquo;s own repair program counting that lateral from the outside
        wall of the house. The drains inside your home sit upstream of that line. Drain cleaning
        clears the grease, roots, debris and buildup in a fixture or branch line. It does not reach
        MSD&rsquo;s main, and it does not repair the pipe.
      </p>
    ),
  },
  body: (
    <>
      <h2>Your fixture drains sit upstream of a lateral MSD calls private</h2>
      <p>
        MSD owns and maintains the public sewer main, and says the lateral that connects your
        building to it, including its connection, is private property and the owner&rsquo;s to
        maintain and repair. Ballwin&rsquo;s program defines its eligible lateral as starting at the
        outside wall of the house, so the sinks, tubs and floor drains inside a home are upstream of
        it.
      </p>
      <p>
        Drain cleaning usually means the fixture and branch lines in your home. Sewer cleaning means
        the larger line that carries wastewater away from the building. Neither reaches the public
        sewer main or the connection to it.
      </p>

      <h2>One drain, several drains, or a backup into the building</h2>
      <ul>
        <li>
          <strong>One fixture slow or clogged:</strong> usually that fixture&rsquo;s own drain line,
          and the usual fit for drain cleaning.
        </li>
        <li>
          <strong>Several fixtures slow or gurgling:</strong> a shared branch or the larger sewer
          line, where sewer cleaning and a camera look may help.
        </li>
        <li>
          <strong>Water or sewage coming up:</strong> avoid contact, keep children and pets away,
          and limit water use while you arrange help.
        </li>
      </ul>
      <p>
        These are clues, not proof. MSD tells customers with a building backup to call (314)
        768-6260 so it can inspect and see whether the situation qualifies for its limited
        assistance program (MSD&rsquo;s number, not ours), and it treats raw sewage inside or
        outside a house as an urgent report. To reach The Sewer Pros, call {stl.phone}.
      </p>

      <h2>A drain that flows again is not proof of a sound clay pipe</h2>
      <p>
        Ballwin says most older laterals in the city are clay pipe, which can crack, separate at
        joints and let roots in while the line still works normally. The median year built is 1976,
        according to the U.S. Census Bureau&rsquo;s American Community Survey (2019-2023 5-year
        estimates, City of Ballwin as a whole).
      </p>
      <p>
        When a drain clogs again after it was cleared, the restriction may not have been fully
        removed, or something in the line may be rebuilding it. Cleaning restores flow, and flow
        alone does not show the pipe is intact. A camera look at the accessible line may help show
        which.
      </p>

      <h2>What the City program skips, and what cleaning does not fix</h2>
      <p>
        Ballwin&rsquo;s Sewer Lateral Repair Program does not cover the cost of cabling to clear a
        blockage, the cost of a video of the lateral, or normal wear while the lateral still
        functions. When cabling cannot open the line, the City asks applicants to include paid
        invoices from the cabling contractors describing what they found. Ask the Inspections
        Department, at (636) 227-2129 (the City&rsquo;s number, not ours), what documentation it
        accepts. Eligibility is the City&rsquo;s decision.
      </p>
      <p>
        Cleaning does not fix a cracked, broken or collapsed pipe, an offset or separated joint, or
        roots entering at a joint. The program uses its own City-approved contractor, and we do not
        perform repairs or replacements. When a camera is used you receive the video and written
        findings, which you can compare against any estimate.
      </p>
    </>
  ),
  problems: [
    ...problems.map((p, i) => ({ ...p, image: slots.problems[i] })),
    {
      title: 'Roots the City counts by how often they return',
      description:
        'Ballwin treats roots that clearing once a year or less can control as normal maintenance, and roots that need clearing more than once a year as a covered repair. A drain that keeps clogging is the pattern a camera look may help document.',
      image: slots.problems[3],
    },
  ],
  // Six items: renders as two rows of three.
  inclusions,
  process,
  coverage: {
    title: 'Other St. Louis area locations',
    intro:
      'This page covers Ballwin. Sewer agencies and lateral rules differ from place to place, so use the page for your address.',
    pageIds: [
      id('loc-stl-st-louis-city'),
      id('loc-stl-chesterfield'),
      id('loc-stl-st-charles'),
      id('loc-stl-florissant'),
    ],
    availabilityStatement: 'Ballwin is a service area, not an office location.',
  },
  // All relevant questions from the Ballwin location page and the drain
  // cleaning page (see `faq` above).
  faq,
  relatedPageIds: [
    id('loc-stl-ballwin'),
    id('svc-drain-cleaning'),
    id('svc-sewer-cleaning'),
    id('svc-sewer-camera-inspection'),
  ],
  relatedTitle: 'Related pages',
  cta: {
    title: 'Request drain cleaning in Ballwin',
    body: 'Get a slow or clogged drain cleared, with video and written findings when a camera is used.',
  },
}
