/**
 * City of Las Vegas, NV + Drain Cleaning (`sl-lv-city-drain`).
 *
 * Built from exactly two sources, as `sl-henderson-drain` is:
 *   LOCATION  `lasVegasCityContent`  (content/pages/las-vegas-las-vegas.tsx)
 *   SERVICE   `svc-drain-cleaning` v2 content (content/pages/services.tsx)
 *             and `./sl-blocks/drain-cleaning`
 *
 * Section recipe (each ties a City of Las Vegas fact to what THIS service does
 * or cannot do; swap the city or the service and the copy breaks):
 *   1. Responsibility        - the City's private-lateral rule vs. fixture
 *                              drains upstream of it; the City's main is not a
 *                              drain-cleaning job.
 *   2. One drain, several, or a main stoppage - the service's triage, plus the
 *                              City's main-stoppage contact (the CITY's number).
 *   3. Housing age           - ACS figures vs. what a drain clog does and does
 *                              not depend on.
 *   4. No City help found    - "none found", the private warranty, no permit
 *                              statement for cleaning, what cleaning does not
 *                              fix, no repairs by us.
 *
 * ⚠ CITY NUMBERS ARE THE CITY'S, not ours. The company phone is read from
 * `marketOperatingDetail`, never typed. No price, offer, response time,
 * guarantee, emergency or same-day claim. Las Vegas is a service area, not an
 * office. Repair and replacement are never presented as offered.
 */

import { marketOperatingDetail } from '@/data/markets/markets'
import type { PageId, ProcessContent, ServiceLocationPageContent } from '@/types'
import { lasVegasCityContent } from './las-vegas-las-vegas'
import { serviceContent } from './services'
import { mergeRelevantFaqs, pageImageSlots } from './service-location-shared'
import { inclusions, problems, shots } from './sl-blocks/drain-cleaning'

const id = (value: string): PageId => value as PageId

const lv = marketOperatingDetail['las-vegas-nv']
if (lv === undefined) throw new Error('marketOperatingDetail is missing las-vegas-nv')

const slots = pageImageSlots('sl-lv-city-drain', {
  hero: {
    alt: 'Drain cleaning equipment at a fixture in a Las Vegas home',
    shot: 'Drain machine at a floor or tub drain, residential property, no identifiable address',
  },
  problems: [shots[0], shots[1], shots[2], shots[3]] as const,
})

const v2 = serviceContent[id('svc-drain-cleaning')]?.v2
if (v2 === undefined || lasVegasCityContent.faq === undefined) {
  throw new Error('sl-lv-city-drain: source content is missing')
}

const process: ProcessContent[] = (v2.process?.steps ?? []).map((step) => ({
  title: step.title,
  description: typeof step.description === 'string' ? step.description : undefined,
}))

/**
 * Every question from the Las Vegas location page and the drain cleaning
 * page, minus the ones below.
 */
const faq = mergeRelevantFaqs(
  lasVegasCityContent.faq,
  v2.faq,
  [
    // This page IS an area page; the question is the hub's.
    'Do you clean drains in St. Louis, San Diego, and Las Vegas?',
    // Same answer, fuller, under "Does drain cleaning repair a damaged pipe?".
    'Can drain cleaning fix a broken or collapsed pipe?',
    // Same answer, fuller, under "Can tree roots grow into drain pipes?".
    'Can cleaning remove tree roots?',
  ],
  'In Las Vegas',
)

export const lasVegasCityDrainContent: ServiceLocationPageContent = {
  seoTitle: 'Drain Cleaning in Las Vegas, NV',
  metaDescription:
    'Drain cleaning in Las Vegas, NV. The City says the private lateral is the owner’s and it handles main stoppages. See what drain cleaning does and does not fix.',
  serviceDescription:
    'Drain cleaning removes grease, roots, deposits, debris and other restricting material from a drain line using a rotating cable, water jetting, or both, for homes in the City of Las Vegas, Nevada. It restores flow and does not repair the pipe.',
  heroImage: slots.hero,
  ctaImage: slots.cta,
  sources: lasVegasCityContent.sources,
  hero: {
    eyebrow: 'Las Vegas, NV',
    title: 'Drain Cleaning in Las Vegas',
    intro: (
      <p>
        In the City of Las Vegas, the City says owners maintain the private sewer lateral that
        originates on their property, up to where it connects into the City&rsquo;s main, so the
        drains inside your home sit upstream of that line. Drain cleaning clears the grease,
        roots, debris and buildup in a fixture or branch line. It does not reach the City&rsquo;s
        main, and it does not repair the pipe.
      </p>
    ),
  },
  body: (
    <>
      <h2>Your fixture drains sit upstream of a lateral the City calls private</h2>
      <p>
        The City of Las Vegas says private property owners maintain private sewer laterals that
        originate on their property, up to the point where the lateral connects into the City
        sewer main, which the City maintains. The City pages we reviewed do not address fixture
        drains inside a home, which sit upstream of that lateral.
      </p>
      <p>
        Drain cleaning usually means the fixture and branch lines in your home. Sewer cleaning
        means the larger line that carries wastewater away from the building. Neither reaches the
        public sewer main or the connection to it.
      </p>

      <h2>One drain, several drains, or a stoppage in the main</h2>
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
        These are clues, not proof. The City says a stoppage in its main affects multiple upstream
        properties and can overflow manholes, and asks you to call its Streets &amp; Sanitation
        Division at 702-229-6227 (the City&rsquo;s number, not ours). For a problem specific to your property, the City
        says a contractor may need to investigate. To reach The Sewer Pros, call {lv.phone}. The
        Las Vegas Valley is a newer market for us; our longest-running work is in St. Louis and
        San Diego.
      </p>

      <h2>A 1990s Las Vegas house says little about its drains</h2>
      <p>
        Las Vegas&rsquo;s median year built is 1994, according to the U.S. Census Bureau&rsquo;s
        American Community Survey (2020-2024 5-year estimates, Las Vegas city), and our arithmetic
        on the Census rows puts 61.3 percent of housing units at 1990 or later. A house from the 1990s is close to the city median,
        and its age does not tell you what is in a drain line today.
      </p>
      <p>
        When a drain clogs again after it was cleared, the restriction may not have been fully
        removed, or something in the line may be rebuilding it. A camera look at the accessible
        line may help show which.
      </p>

      <h2>No City help found, so know what cleaning does not fix</h2>
      <p>
        We found no City lateral repair, replacement, grant or reimbursement program on the City
        pages we reviewed. That is &ldquo;none found&rdquo;, not a statement that none exists. The
        City does promote an optional warranty from a private company, a product you buy, not
        City assistance. We found no City statement on whether cleaning needs a permit, so ask
        Building &amp; Safety at 702-229-6251 (the City&rsquo;s number).
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
      title: 'Buying or selling a Las Vegas home',
      description:
        'We found no City rule requiring a lateral inspection or seller disclosure on sale, and state disclosure law is outside this page. The City says the private lateral is the owner’s, so a buyer who sees slow drains can ask for a camera look at the accessible line, and a seller with recurring drains can document it.',
      image: slots.problems[3],
    },
  ],
  // Six items: renders as two rows of three.
  inclusions,
  process,
  coverage: {
    title: 'Other Las Vegas Valley areas',
    intro:
      'This page covers the City of Las Vegas. Sewer agencies and lateral rules differ across the Las Vegas Valley, so use the page for your address.',
    pageIds: [id('loc-lv-henderson'), id('loc-lv-north-las-vegas'), id('loc-lv-summerlin')],
    availabilityStatement: 'Las Vegas is a service area, not an office location.',
  },
  // All relevant questions from the Las Vegas location page and the drain
  // cleaning page (see `faq` above).
  faq,
  relatedPageIds: [
    id('loc-lv-las-vegas'),
    id('svc-drain-cleaning'),
    id('svc-sewer-cleaning'),
    id('svc-sewer-camera-inspection'),
  ],
  relatedTitle: 'Related pages',
  cta: {
    title: 'Request drain cleaning in Las Vegas',
    body: 'Get a slow or clogged drain cleared, with video and written findings when a camera is used.',
  },
}
