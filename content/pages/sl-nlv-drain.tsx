/**
 * City of North Las Vegas, NV + Drain Cleaning (`sl-nlv-drain`).
 *
 * Built from exactly two sources, as `sl-lv-city-drain` is:
 *   LOCATION  `northLasVegasContent`  (content/pages/las-vegas-north-las-vegas.tsx)
 *   SERVICE   `svc-drain-cleaning` v2 content (content/pages/services.tsx)
 *             and `./sl-blocks/drain-cleaning`
 *
 * Section recipe (each ties a North Las Vegas fact to what THIS service does
 * or cannot do; swap the city or the service and the copy breaks):
 *   1. Blockage rule         - the City's blockage statement (owner's through
 *                              the entire pipe to the City's main) vs. fixture
 *                              drains upstream; the City's main is not a
 *                              drain-cleaning job.
 *   2. One drain, several, or the City side - the service's triage, plus the
 *                              City's video-review path and the Utilities
 *                              Department number (the CITY's number).
 *   3. No local evidence     - the City pages say nothing about combined or
 *                              separate, main age or local conditions (and no
 *                              housing-age figures exist for this page); what a
 *                              returning clog depends on.
 *   4. No City help found    - "none found", the optional third-party plan,
 *                              homeowner's insurance, no permit statement for
 *                              cleaning, what cleaning does not fix, no
 *                              repairs by us.
 *
 * ⚠ CITY NUMBER IS THE CITY'S, not ours. The company phone is read from
 * `marketOperatingDetail`, never typed. No price, offer, response time,
 * guarantee, emergency or same-day claim. North Las Vegas is a service area,
 * not an office. Repair and replacement are never presented as offered.
 */

import { marketOperatingDetail } from '@/data/markets/markets'
import type { PageId, ProcessContent, ServiceLocationPageContent } from '@/types'
import { northLasVegasContent } from './las-vegas-north-las-vegas'
import { serviceContent } from './services'
import { mergeRelevantFaqs, pageImageSlots } from './service-location-shared'
import { inclusions, problems, shots } from './sl-blocks/drain-cleaning'

const id = (value: string): PageId => value as PageId

const lv = marketOperatingDetail['las-vegas-nv']
if (lv === undefined) throw new Error('marketOperatingDetail is missing las-vegas-nv')

const slots = pageImageSlots('sl-nlv-drain', {
  hero: {
    alt: 'Drain cleaning equipment at a fixture in a North Las Vegas home',
    shot: 'Drain machine at a floor or tub drain, residential property, no identifiable address',
  },
  problems: [shots[0], shots[1], shots[2], shots[3]] as const,
})

const v2 = serviceContent[id('svc-drain-cleaning')]?.v2
if (v2 === undefined || northLasVegasContent.faq === undefined) {
  throw new Error('sl-nlv-drain: source content is missing')
}

const process: ProcessContent[] = (v2.process?.steps ?? []).map((step) => ({
  title: step.title,
  description: typeof step.description === 'string' ? step.description : undefined,
}))

/**
 * Every question from the North Las Vegas location page and the drain
 * cleaning page, minus the ones below.
 */
const faq = mergeRelevantFaqs(
  northLasVegasContent.faq,
  v2.faq,
  [
    // This page IS an area page; the question is the hub's.
    'Do you clean drains in St. Louis, San Diego, and Las Vegas?',
    // Same answer, fuller, under "Does drain cleaning repair a damaged pipe?".
    'Can drain cleaning fix a broken or collapsed pipe?',
    // Same answer, fuller, under "Can tree roots grow into drain pipes?".
    'Can cleaning remove tree roots?',
  ],
  'In North Las Vegas',
)

export const northLasVegasDrainContent: ServiceLocationPageContent = {
  seoTitle: 'Drain Cleaning in North Las Vegas, NV',
  metaDescription:
    'Drain cleaning in North Las Vegas, NV. The City says a blockage is the homeowner’s up to its main. See what drain cleaning does and does not fix.',
  serviceDescription:
    'Drain cleaning removes grease, roots, deposits, debris and other restricting material from a drain line using a rotating cable, water jetting, or both, for homes in the City of North Las Vegas, Nevada. It restores flow and does not repair the pipe.',
  heroImage: slots.hero,
  ctaImage: slots.cta,
  sources: northLasVegasContent.sources,
  hero: {
    eyebrow: 'North Las Vegas, NV',
    title: 'Drain Cleaning in North Las Vegas',
    intro: (
      <p>
        In the City of North Las Vegas, the City says the homeowner&rsquo;s responsibility for the
        sewer service lateral ends at the connection to the main in the street, so the drains
        inside your home sit upstream of that line. Drain cleaning clears the grease, roots,
        debris and buildup in a fixture or branch line. It does not reach the City&rsquo;s main,
        and it does not repair the pipe.
      </p>
    ),
  },
  body: (
    <>
      <h2>For a blockage, the City says the pipe is yours all the way to its main</h2>
      <p>
        The City of North Las Vegas says the homeowner&rsquo;s responsibility for the sewer service
        lateral ends at the connection to the main in the street. For a blockage, its water leaks
        page says the homeowner is responsible throughout the entire pipe until the connection to
        the City&rsquo;s main, so a clog anywhere up to that connection is the owner&rsquo;s under
        the City&rsquo;s wording.
      </p>
      <p>
        Drain cleaning usually means the fixture and branch lines in your home. Sewer cleaning
        means the larger line that carries wastewater away from the building. Neither reaches the
        City&rsquo;s main or the connection to it.
      </p>

      <h2>One drain, several drains, or a problem the City may need to review</h2>
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
        These are clues, not proof. The City says that if a plumber has inspected the line and
        determined a blockage is on the City side, video evidence may be submitted to its
        Utilities Department for review. A camera can be added to a drain cleaning visit when it
        is feasible for the line. The Utilities Department is at 702-633-1484 (the City&rsquo;s
        number, not ours), a customer-service number. We found no City sewer emergency line or
        after-hours number. To reach The Sewer Pros, call {lv.phone}.
        The Las Vegas Valley is a newer market for us; our longest-running work is in St. Louis
        and San Diego.
      </p>

      <h2>Nothing the City publishes says why your drain keeps clogging</h2>
      <p>
        The City pages we reviewed do not say whether the system is combined or separate, how old
        its mains are, or what recurring conditions occur locally, so a cause has to come from your own line.
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
        City says it has partnered with a separate company to offer optional insurance coverage
        for service lines, a product you buy, not City assistance, and it says most basic
        homeowner&rsquo;s insurance policies do not cover service laterals. We found no City
        statement on whether cleaning needs a permit, so ask the Utilities Department.
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
      title: 'Buying or selling a North Las Vegas home',
      description:
        'We found no City rule requiring a lateral inspection, certification or seller disclosure on sale, and state disclosure law is outside this page. The City says the lateral is the owner’s up to the connection to the main, so a buyer who sees slow drains can ask for a camera look at the accessible line, and a seller with recurring drains can document it.',
      image: slots.problems[3],
    },
  ],
  // Six items: renders as two rows of three.
  inclusions,
  process,
  coverage: {
    title: 'Other Las Vegas Valley areas',
    intro:
      'This page covers North Las Vegas. Sewer agencies and lateral rules differ across the Las Vegas Valley, so use the page for your address.',
    pageIds: [id('loc-lv-las-vegas'), id('loc-lv-henderson'), id('loc-lv-summerlin')],
    availabilityStatement: 'North Las Vegas is a service area, not an office location.',
  },
  // All relevant questions from the North Las Vegas location page and the
  // drain cleaning page (see `faq` above).
  faq,
  relatedPageIds: [
    id('loc-lv-north-las-vegas'),
    id('svc-drain-cleaning'),
    id('svc-sewer-cleaning'),
    id('svc-sewer-camera-inspection'),
  ],
  relatedTitle: 'Related pages',
  cta: {
    title: 'Request drain cleaning in North Las Vegas',
    body: 'Get a slow or clogged drain cleared, with video and written findings when a camera is used.',
  },
}
