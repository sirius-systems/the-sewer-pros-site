/**
 * Oceanside, CA + Drain Cleaning (`sl-oceanside-drain`).
 *
 * Built from exactly two sources, as `sl-sd-carlsbad-drain` is:
 *   LOCATION  `oceansideContent`  (content/pages/san-diego-oceanside.tsx)
 *   SERVICE   `svc-drain-cleaning` v2 content (content/pages/services.tsx)
 *             and `./sl-blocks/drain-cleaning`
 *
 * Section recipe (each ties an Oceanside fact to what THIS service does or
 * cannot; swap the city or the service and the copy breaks):
 *   1. "From the street to your house" - the City's wording and the connection
 *                              point it does not publish; fixture drains sit
 *                              upstream of all of it.
 *   2. One drain, several, or water coming up - the service's triage plus the
 *                              City's plumber instruction and its two numbers
 *                              (the City's numbers, not ours).
 *   3. A 1984 median year built - Census figures vs. a clog that keeps
 *                              returning; year built does not show what is in
 *                              the line.
 *   4. The improvement-plan rule and no repair program found - vs. what
 *                              cleaning does not fix.
 *
 * ⚠ OCEANSIDE HAS ONE SEWER AGENCY: the City's Water Utilities Department. The
 * page never says the City serves a given address. The City does not publish
 * the exact connection point and this page does not say where it is. AGENCY
 * NUMBERS ARE THE CITY'S, not ours; (760) 435-3900 is a water emergency number
 * the City frames around City water and is never presented as a sewer line.
 * No dates are stated (the sources are undated; the page says confirm with the
 * City). The company phone is read from `marketOperatingDetail`, never typed.
 * No price, offer, response time, guarantee, emergency or same-day claim.
 * Oceanside is a service area, not an office. Repair and replacement are never
 * presented as offered. Consistent with `sl-oceanside-cleaning`: the City names
 * the owner's side as street-to-house and we did not find where the City's part
 * ends.
 *
 * Audit: docs/source-reports/san-diego/sl-oceanside-drain.md
 */

import { marketOperatingDetail } from '@/data/markets/markets'
import type { PageId, ProcessContent, ServiceLocationPageContent } from '@/types'
import { oceansideContent } from './san-diego-oceanside'
import { serviceContent } from './services'
import { mergeRelevantFaqs, pageImageSlots } from './service-location-shared'
import { inclusions, problems, shots } from './sl-blocks/drain-cleaning'

const id = (value: string): PageId => value as PageId

const sd = marketOperatingDetail['san-diego-ca']
if (sd === undefined) throw new Error('marketOperatingDetail is missing san-diego-ca')

// Alt text stays neutral: no place-specific photo is claimed.
const slots = pageImageSlots('sl-oceanside-drain', {
  hero: {
    alt: 'Drain cleaning equipment at a fixture in a residential property',
    shot: 'Drain machine at a floor or tub drain, residential property, no identifiable address',
  },
  problems: [shots[0], shots[1], shots[2], shots[3]] as const,
})

const v2 = serviceContent[id('svc-drain-cleaning')]?.v2
if (v2 === undefined || oceansideContent.faq === undefined) {
  throw new Error('sl-oceanside-drain: source content is missing')
}

const process: ProcessContent[] = (v2.process?.steps ?? []).map((step) => ({
  title: step.title,
  description: typeof step.description === 'string' ? step.description : undefined,
}))

/**
 * Every question from the Oceanside location page and the drain cleaning page,
 * minus the ones below.
 */
const faq = mergeRelevantFaqs(
  oceansideContent.faq,
  v2.faq,
  [
    // Camera question; the service page answers it as "What do I receive when
    // a camera is used?".
    'What does a sewer camera inspection show?',
    // The service page's repair answers cover it.
    'Do you repair or replace sewer lines?',
    // This page IS an area page; the question is the hub's.
    'Do you clean drains in St. Louis, San Diego, and Las Vegas?',
    // Same answer, fuller, under "Does drain cleaning repair a damaged pipe?".
    'Can drain cleaning fix a broken or collapsed pipe?',
    // Same answer, fuller, under "Can tree roots grow into drain pipes?".
    'Can cleaning remove tree roots?',
  ],
  'In Oceanside',
)

export const oceansideDrainContent: ServiceLocationPageContent = {
  seoTitle: 'Drain Cleaning in Oceanside, CA',
  metaDescription:
    'Drain cleaning in Oceanside, CA. The City says the private sewer line is the owner’s. See what drain cleaning does and does not fix.',
  serviceDescription:
    'Drain cleaning removes grease, roots, deposits, debris and other restricting material from a drain line using a rotating cable, water jetting, or both, for homes in Oceanside, California. It restores flow and does not repair the pipe.',
  heroImage: slots.hero,
  ctaImage: slots.cta,
  sources: oceansideContent.sources,
  hero: {
    eyebrow: 'Oceanside, CA',
    title: 'Drain Cleaning in Oceanside',
    intro: (
      <p>
        In Oceanside, the City says private sewer lines, &ldquo;from the street to your
        house,&rdquo; are the property owner&rsquo;s responsibility. The drains inside your home sit
        upstream of that line. Drain cleaning clears the grease, roots, debris and buildup in a
        fixture or branch line. It does not reach the City&rsquo;s public system, and it does not
        repair the pipe.
      </p>
    ),
  },
  body: (
    <>
      <h2>&ldquo;From the street to your house&rdquo; starts past your drains</h2>
      <p>
        The City of Oceanside Water Utilities Department runs the public sewer system, which it
        describes as over 450 miles of pipelines, two wastewater treatment plants and 34 sewer lift
        stations. The City says private sewer lines, &ldquo;from the street to your house,&rdquo;
        are the owner&rsquo;s. We did not find the exact point where the City&rsquo;s part ends, or
        whether the owner&rsquo;s part includes the section under the street.
      </p>
      <p>
        Drain cleaning means the fixture and branch lines in your home. It does not reach the
        City&rsquo;s system or the connection to it, and it does not show where that connection is.
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
          <strong>Water or sewage coming up:</strong> the City says to call a plumber for a sewer
          leak on your property.
        </li>
      </ul>
      <p>
        The City&rsquo;s customer service number is (760) 435-5800. It also publishes (760) 435-3900
        for water emergencies such as a water main break, frames that number around City water, and
        we did not find a sewer-specific backup instruction, so we do not present it as a sewer
        line. Those are the City&rsquo;s numbers, not ours. To reach The Sewer Pros about a drain,
        call {sd.phone}.
      </p>

      <h2>A 1984 median year built does not show what is in a drain</h2>
      <p>
        Oceanside&rsquo;s median year built is 1984, plus or minus 2 years, per the U.S. Census
        Bureau&rsquo;s American Community Survey (2020-2024 5-year estimates). The year a house was
        built does not tell you the condition or material of its lateral, and the Census place may
        not match the City&rsquo;s service area.
      </p>
      <p>
        A clog that returns after each clearing may mean the restriction was not fully removed or
        something in the line is rebuilding it. Cleaning removes the buildup. A camera look at the
        accessible line may help show why it keeps coming back.
      </p>

      <h2>An improvement-plan rule for the street, and no repair program found</h2>
      <p>
        The City says sewer improvements added, removed, replaced or altered in a public
        right-of-way, a City easement or City property need an improvement plan approved by Water
        Utilities and signed by a Registered Civil Engineer. Drain cleaning removes material from
        inside an existing pipe and does not alter it. We found no City lateral repair, grant or
        reimbursement program, which is &ldquo;none found&rdquo;, not a statement that none exists.
        Confirm with the City.
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
      title: 'A restriction you cannot place relative to the street',
      description:
        'The City describes the owner’s line as running “from the street to your house” but publishes no exact connection point. Drain cleaning works through an access point chosen for the line and does not establish where the owner’s part ends. Ask Water Utilities at (760) 435-5800, the City’s number, not ours.',
      image: slots.problems[3],
    },
  ],
  // Six items: renders as two rows of three.
  inclusions,
  process,
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
  // All relevant questions from the Oceanside location page and the drain
  // cleaning page (see `faq` above).
  faq,
  relatedPageIds: [
    id('loc-sd-oceanside'),
    id('svc-drain-cleaning'),
    id('svc-sewer-cleaning'),
    id('svc-sewer-camera-inspection'),
  ],
  relatedTitle: 'Related pages',
  cta: {
    title: 'Request drain cleaning in Oceanside',
    body: 'Get a slow or clogged drain cleared, with video and written findings when a camera is used.',
  },
}
