/**
 * Henderson, NV + Drain Cleaning (`sl-henderson-drain`).
 *
 * Built from exactly two sources, as the pilot `sl-henderson-camera` is:
 *   LOCATION  `hendersonContent`  (content/pages/las-vegas-henderson.tsx)
 *   SERVICE   `svc-drain-cleaning` v2 content (content/pages/services.tsx)
 *             and `./sl-blocks/drain-cleaning`
 *
 * Section recipe (each ties a Henderson fact to what THIS service does or
 * cannot do; swap the city or the service and the copy breaks):
 *   1. Responsibility   - the City's rule runs "up to and including your home's
 *                         plumbing", so fixture drains are on the owner's side;
 *                         the City's main is not a drain-cleaning job.
 *   2. One drain, several, or the street - the service's triage, plus the City's
 *                         emergency and non-emergency contacts for the main.
 *   3. Housing age      - ACS figures vs. what a drain clog does and does not
 *                         depend on.
 *   4. Program findings - "none found" help, no permit statement for cleaning,
 *                         what cleaning does not fix, no repairs by us.
 *
 * ⚠ CITY NUMBERS ARE THE CITY'S, not ours. The company phone is read from
 * `marketOperatingDetail`, never typed. No price, offer, response time,
 * guarantee, emergency or same-day claim. Henderson is a service area, not an
 * office. Repair and replacement are never presented as offered.
 */

import { marketOperatingDetail } from '@/data/markets/markets'
import type { PageId, ProcessContent, ServiceLocationPageContent } from '@/types'
import { hendersonContent } from './las-vegas-henderson'
import { serviceContent } from './services'
import { mergeRelevantFaqs, pageImageSlots } from './service-location-shared'
import { inclusions, problems, shots } from './sl-blocks/drain-cleaning'

const id = (value: string): PageId => value as PageId

const lv = marketOperatingDetail['las-vegas-nv']
if (lv === undefined) throw new Error('marketOperatingDetail is missing las-vegas-nv')

const slots = pageImageSlots('sl-henderson-drain', {
  hero: {
    alt: 'Drain cleaning equipment at a fixture in a Henderson home',
    shot: 'Drain machine at a floor or tub drain, residential property, no identifiable address',
  },
  problems: [shots[0], shots[1], shots[2], shots[3]] as const,
})

const v2 = serviceContent[id('svc-drain-cleaning')]?.v2
if (v2 === undefined || hendersonContent.faq === undefined) {
  throw new Error('sl-henderson-drain: source content is missing')
}

const process: ProcessContent[] = (v2.process?.steps ?? []).map((step) => ({
  title: step.title,
  description: typeof step.description === 'string' ? step.description : undefined,
}))

/**
 * Every question from the Henderson location page and the drain cleaning
 * page, minus the ones below.
 */
const faq = mergeRelevantFaqs(
  hendersonContent.faq,
  v2.faq,
  [
    // Not about drain cleaning: starting or transferring utility service.
    'How do I transfer water and sewer service when I buy a home in Henderson?',
    // This page IS an area page; the question is the hub's.
    'Do you clean drains in St. Louis, San Diego, and Las Vegas?',
    // Same answer, fuller, under "Does drain cleaning repair a damaged pipe?".
    'Can drain cleaning fix a broken or collapsed pipe?',
    // Same answer, fuller, under "Can tree roots grow into drain pipes?".
    'Can cleaning remove tree roots?',
  ],
  'In Henderson',
)

export const hendersonDrainContent: ServiceLocationPageContent = {
  seoTitle: 'Drain Cleaning in Henderson, NV',
  metaDescription:
    'Drain cleaning in Henderson, NV. The City says the lateral and your home plumbing are yours and it cleans its own main. See what cleaning does and does not fix.',
  serviceDescription:
    'Drain cleaning removes grease, roots, deposits, debris and other restricting material from a drain line using a rotating cable, water jetting, or both, for homes in the City of Henderson, Nevada. It restores flow and does not repair the pipe.',
  heroImage: slots.hero,
  ctaImage: slots.cta,
  hero: {
    eyebrow: 'Henderson, NV',
    title: 'Drain Cleaning in Henderson',
    intro: (
      <p>
        In the City of Henderson, the City says your responsibility for the sewer service lateral
        runs from its connection to the City&rsquo;s main up to and including your home&rsquo;s
        plumbing, so the drains inside your home are on your side of it. Drain cleaning clears the
        grease, roots, debris and buildup in a fixture or branch line. It does not reach the
        City&rsquo;s main, and it does not repair the pipe.
      </p>
    ),
  },
  body: (
    <>
      <h2>Your drains are on your side of the connection</h2>
      <p>
        The City of Henderson says you maintain and repair the sewer service lateral from the
        sewer service connection up to and including your home&rsquo;s plumbing, and pay the costs
        of a blockage or break on that side. The City says it maintains and repairs its own sewer
        main up to the connection, including cleaning blockages, and pays for a blockage in that
        main.
      </p>
      <p>
        Drain cleaning usually means the fixture and branch lines in your home. Sewer cleaning
        means the larger line that carries wastewater away from the building. Neither reaches the
        public sewer main or the connection to it, which is a question for the City.
      </p>

      <h2>One drain, several drains, or the street</h2>
      <ul>
        <li>
          <strong>One fixture slow or clogged:</strong> usually that fixture&rsquo;s own drain
          line, and the usual fit for drain cleaning.
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
        These are clues, not proof. A restriction in the City&rsquo;s main is the City&rsquo;s to
        clean. The City says to report a sewer emergency to its 24-hour call center at
        702-267-5900 (the City&rsquo;s number, not ours), and points non-emergency concerns to
        Contact Henderson, its service-request portal. To reach The Sewer Pros, call {lv.phone}.
        The Las Vegas Valley is a newer market for us; our longest-running work is in St. Louis
        and San Diego.
      </p>

      <h2>A typical Henderson house says little about its drains</h2>
      <p>
        Henderson&rsquo;s median year built is 2001, according to the U.S. Census Bureau&rsquo;s
        American Community Survey (2020-2024 5-year estimates, Henderson city), and our arithmetic
        on the Census rows puts 82.1 percent of housing units at 1990 or later and 60.2 percent
        at 1990 to 2009. A twenty-year-old house is close to the city median, and its age does not
        tell you what is in a drain line today.
      </p>
      <p>
        When a drain clogs again after it was cleared, the restriction may not have been fully
        removed, or something in the line may be rebuilding it. A camera look at the accessible
        line may help show which.
      </p>

      <h2>No City help found, so know what cleaning does not fix</h2>
      <p>
        We found no City lateral repair, grant or reimbursement program on the City pages we
        reviewed. That is &ldquo;none found&rdquo;, not a statement that none exists. We also found
        no City statement on whether cleaning or a camera inspection needs a permit. For work in
        the public right-of-way, the City says to contact Public Works at 702-267-3600 (the
        City&rsquo;s number) about a permit.
      </p>
      <p>
        Cleaning does not fix a cracked, broken or collapsed pipe, an offset or separated joint,
        or roots entering at a joint. We do not perform repairs or replacements. When a camera is
        used you receive the video and written findings, which you can compare against any
        estimate.
      </p>
    </>
  ),
  problems: [
    ...problems.map((p, i) => ({ ...p, image: slots.problems[i] })),
    {
      title: 'Buying or selling a Henderson home',
      description:
        'We found no City rule requiring a lateral inspection or seller disclosure on sale, and state disclosure law is outside this page. A buyer who sees slow drains can ask for a camera look at the accessible line, and a seller with recurring drains can document it.',
      image: slots.problems[3],
    },
  ],
  // Six items: renders as two rows of three.
  inclusions,
  process,
  coverage: {
    title: 'Other Las Vegas Valley areas',
    intro:
      'This page covers the City of Henderson. Sewer agencies and lateral rules differ across the Las Vegas Valley, so use the page for your address.',
    pageIds: [id('loc-lv-las-vegas'), id('loc-lv-north-las-vegas'), id('loc-lv-summerlin')],
    availabilityStatement: 'Henderson is a service area, not an office location.',
  },
  // All relevant questions from the Henderson location page and the drain
  // cleaning page (see `faq` above).
  faq,
  relatedPageIds: [
    id('loc-lv-henderson'),
    id('svc-drain-cleaning'),
    id('svc-sewer-cleaning'),
    id('svc-sewer-camera-inspection'),
  ],
  relatedTitle: 'Related pages',
  cta: {
    title: 'Request drain cleaning in Henderson',
    body: 'Get a slow or clogged drain cleared, with video and written findings when a camera is used.',
  },
}
