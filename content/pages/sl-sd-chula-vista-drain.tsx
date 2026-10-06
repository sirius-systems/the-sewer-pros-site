/**
 * Chula Vista, CA + Drain Cleaning (`sl-chula-vista-drain`).
 *
 * Built from exactly two sources, as `sl-sd-city-drain` is:
 *   LOCATION  `chulaVistaContent`  (content/pages/san-diego-chula-vista.tsx)
 *   SERVICE   `svc-drain-cleaning` v2 content (content/pages/services.tsx)
 *             and `./sl-blocks/drain-cleaning`
 *
 * Section recipe (each ties a City of Chula Vista fact to what THIS service
 * does or cannot; swap the city or the service and the copy breaks):
 *   1. Connection Point      - Council Policy 570-01 starts the owner's duty
 *                              at the first foot of the lateral off the public
 *                              sewer; fixture drains sit upstream of it.
 *   2. One drain, several, or water coming up - the service's triage plus the
 *                              City's stop-all-water-use instruction, Public
 *                              Works Operations and the police after-hours line
 *                              (all the CITY's numbers).
 *   3. Grease, roots and the City's warning - the City's own maintenance
 *                              guidance vs. what a fixture-drain cleaning does.
 *   4. A City policy, not a grant - the 48-hour stoppage rule, what it does not
 *                              pay for, what cleaning does not fix.
 *
 * ⚠ The Chula Vista location page states NO housing-age figure and says the
 * system's age is not stated, so none is given. CITY NUMBERS ARE THE CITY'S,
 * not ours. The company phone is read from `marketOperatingDetail`, never
 * typed. Council Policy 570-01 is never called a grant, and nothing says it
 * pays for our work. No price, offer, response time, guarantee, emergency or
 * same-day claim. Chula Vista is a service area, not an office. Repair and
 * replacement are never presented as offered.
 *
 * Audit: docs/source-reports/san-diego/sl-chula-vista-drain.md
 */

import { marketOperatingDetail } from '@/data/markets/markets'
import type { PageId, ProcessContent, ServiceLocationPageContent } from '@/types'
import { chulaVistaContent } from './san-diego-chula-vista'
import { serviceContent } from './services'
import { mergeRelevantFaqs, pageImageSlots } from './service-location-shared'
import { inclusions, problems, shots } from './sl-blocks/drain-cleaning'

const id = (value: string): PageId => value as PageId

const sd = marketOperatingDetail['san-diego-ca']
if (sd === undefined) throw new Error('marketOperatingDetail is missing san-diego-ca')

// Alt text stays neutral: no place-specific photo is claimed.
const slots = pageImageSlots('sl-chula-vista-drain', {
  hero: {
    alt: 'Drain cleaning equipment at a fixture in a residential property',
    shot: 'Drain machine at a floor or tub drain, residential property, no identifiable address',
  },
  problems: [shots[0], shots[1], shots[2], shots[3]] as const,
})

const v2 = serviceContent[id('svc-drain-cleaning')]?.v2
if (v2 === undefined || chulaVistaContent.faq === undefined) {
  throw new Error('sl-chula-vista-drain: source content is missing')
}

const process: ProcessContent[] = (v2.process?.steps ?? []).map((step) => ({
  title: step.title,
  description: typeof step.description === 'string' ? step.description : undefined,
}))

/**
 * Every question from the Chula Vista location page and the drain cleaning
 * page, minus the ones below.
 */
const faq = mergeRelevantFaqs(
  chulaVistaContent.faq,
  v2.faq,
  [
    // A correction about which agency serves Chula Vista; no tie to drains.
    'Is Chula Vista served by CVSan or a separate sanitation district?',
    // Camera question; the service page answers it as "What do I receive when
    // a camera is used?".
    'What does a sewer camera inspection show?',
    // This page IS an area page; the question is the hub's.
    'Do you clean drains in St. Louis, San Diego, and Las Vegas?',
    // Same answer, fuller, under "Does drain cleaning repair a damaged pipe?".
    'Can drain cleaning fix a broken or collapsed pipe?',
    // Same answer, fuller, under "Can tree roots grow into drain pipes?".
    'Can cleaning remove tree roots?',
  ],
  'In Chula Vista',
)

export const chulaVistaDrainContent: ServiceLocationPageContent = {
  seoTitle: 'Drain Cleaning in Chula Vista, CA',
  metaDescription:
    'Drain cleaning in Chula Vista, CA. The City’s policy makes the lateral yours from the first foot off the public sewer. See what cleaning does and does not fix.',
  serviceDescription:
    'Drain cleaning removes grease, roots, deposits, debris and other restricting material from a drain line using a rotating cable, water jetting, or both, for homes in Chula Vista, California. It restores flow and does not repair the pipe.',
  heroImage: slots.hero,
  ctaImage: slots.cta,
  sources: chulaVistaContent.sources,
  hero: {
    eyebrow: 'Chula Vista, CA',
    title: 'Drain Cleaning in Chula Vista',
    intro: (
      <p>
        In Chula Vista, the City&rsquo;s written sewer policy makes the owner responsible for the
        lateral from the first foot off the public sewer to the building, so the drains inside your
        home sit upstream of that line. Drain cleaning clears the grease, roots, debris and buildup
        in a fixture or branch line. It does not reach the public sewer, and it does not repair the
        pipe.
      </p>
    ),
  },
  body: (
    <>
      <h2>Your fixture drains sit upstream of the City&rsquo;s Connection Point</h2>
      <p>
        The City of Chula Vista&rsquo;s sewer maintenance policy, Council Policy 570-01, says the
        owner maintains the lateral from its connection with the public sewer to the building, and
        beyond, at the owner&rsquo;s sole expense. It starts that duty at the &ldquo;Connection
        Point&rdquo;, the first foot of the lateral off the outside of the public sewer. The City
        keeps the public sewer mains and manholes.
      </p>
      <p>
        Drain cleaning means the fixture and branch lines in your home. Neither it nor sewer
        cleaning reaches the public sewer or the Connection Point.
      </p>

      <h2>One drain, several drains, or water coming up</h2>
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
          <strong>Water or sewage coming up:</strong> the City says to stop all water use first,
          including sinks, toilets, showers and laundry. If the sewage stops, the City says to call
          a licensed plumber or sewer cleaning contractor.
        </li>
      </ul>
      <p>
        If sewage reaches a street, gutter or storm drain, the City asks you to call Public Works
        Operations at 619-397-6000 immediately (the City&rsquo;s number, not ours). To reach The
        Sewer Pros about a drain, call {sd.phone}.
      </p>

      <h2>The City names grease and roots, and warns about cleaning a lateral</h2>
      <p>
        The City says grease is the most common cause of pipe blockages and that roots enter a
        lateral through cracked or broken pipe. It also warns that cleaning a private lateral can
        push debris, such as cut root balls and grease, into the public sewer, where it can cause a
        blockage.
      </p>
      <p>
        Grease that cools in a kitchen branch line is a drain cleaning job. Roots that came in
        through a cracked pipe can be cleared, but cleaning does not close the opening they came
        through. When a drain clogs again, a camera look at the accessible line may help show
        whether the restriction was fully removed.
      </p>

      <h2>A City policy for some stoppages, not a grant, and what cleaning does not fix</h2>
      <p>
        We did not find a City lateral repair, replacement or grant program. The policy does say the
        owner must notify the City within 48 hours when a licensed plumber&rsquo;s camera finds a
        stoppage in the public sewer, in the first foot of the lateral, or caused by a City street
        tree, and that the City reimburses reasonable costs if staff agree. That does not cover a
        clog in a fixture drain. The posted policy shows a 2014 revision with no resolution number,
        so confirm the current text with Public Works at 619-397-6000 (the City&rsquo;s number).
      </p>
      <p>
        Cleaning does not fix a cracked, broken or collapsed pipe, an offset or separated joint, or
        roots entering at a joint. We do not perform repairs or replacements. When a camera is used
        you receive the video and written findings to compare against any estimate.
      </p>
    </>
  ),
  problems: [
    ...problems.map((p, i) => ({ ...p, image: slots.problems[i] })),
    {
      title: 'Sewage reaching a street or storm drain',
      description:
        'The City asks you to call Public Works Operations at 619-397-6000 immediately if sewage from your property reaches a street, gutter or storm drain. That is the City’s number, not ours. Drain cleaning works on drain lines at the property, not on the City’s public sewer.',
      image: slots.problems[3],
    },
  ],
  // Six items: renders as two rows of three.
  inclusions,
  process,
  coverage: {
    title: 'Other San Diego area locations',
    intro:
      'This page covers the City of Chula Vista. Sewer authorities and lateral rules differ across San Diego County, so use the page for your address.',
    pageIds: [
      id('loc-sd-san-diego'),
      id('loc-sd-san-marcos'),
      id('loc-sd-carlsbad'),
      id('loc-sd-escondido'),
      id('loc-sd-oceanside'),
      id('loc-sd-mission-valley'),
    ],
    availabilityStatement: 'Chula Vista is a service area, not an office location.',
  },
  // All relevant questions from the Chula Vista location page and the drain
  // cleaning page (see `faq` above).
  faq,
  relatedPageIds: [
    id('loc-sd-chula-vista'),
    id('svc-drain-cleaning'),
    id('svc-sewer-cleaning'),
    id('svc-sewer-camera-inspection'),
  ],
  relatedTitle: 'Related pages',
  cta: {
    title: 'Request drain cleaning in Chula Vista',
    body: 'Get a slow or clogged drain cleared, with video and written findings when a camera is used.',
  },
}
