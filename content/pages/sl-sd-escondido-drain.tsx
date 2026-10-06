/**
 * Escondido, CA + Drain Cleaning (`sl-escondido-drain`).
 *
 * Built from exactly two sources, as `sl-sd-chula-vista-drain` is:
 *   LOCATION  `escondidoContent`  (content/pages/san-diego-escondido.tsx)
 *   SERVICE   `svc-drain-cleaning` v2 content (content/pages/services.tsx)
 *             and `./sl-blocks/drain-cleaning`
 *
 * Section recipe (each ties an Escondido fact to what THIS service does or
 * cannot; swap the city or the service and the copy breaks):
 *   1. Section 22-165 starts at the lateral - the owner's duty runs to the
 *                              connection to the main; fixture drains sit upstream
 *   2. One drain, several, or a backup you cannot place - the service's triage
 *                              plus the City's main-or-lateral call and free main check
 *   3. The City asks to be called before a lateral is cleaned - the Sewer System
 *                              Management Plan sentence vs. what fixture-drain
 *                              cleaning does and roots that regrow
 *   4. No City program, and cleaning does not fix the pipe - the code's cost and
 *                              verification terms and the City-caused-damage exception
 *
 * ⚠ ESCONDIDO CODE, NOT A PROGRAM. Section 22-165 is quoted for at most nine words
 * ("up to and including the connection to the main"); the rest is paraphrase,
 * worded as `sl-escondido-cleaning` words it (owner pays; "none found"). The page
 * never says the City pays for damage, never says a grant exists, never says our
 * camera look satisfies the code or replaces the City-present inspection, and
 * never says who may perform lateral repair. The page does not say which agency
 * serves an address (City, Vallecitos Water District or septic). CITY NUMBERS ARE
 * THE CITY'S, not ours. No agency date is stated (the sources are mostly undated;
 * the page says confirm with the City). The company phone is read from
 * `marketOperatingDetail`, never typed. No price, offer, response time, guarantee,
 * emergency or same-day claim. Escondido is a service area, not an office.
 * Repair and replacement are never presented as offered.
 *
 * Audit: docs/source-reports/san-diego/sl-escondido-drain.md
 */

import { marketOperatingDetail } from '@/data/markets/markets'
import type { PageId, ProcessContent, ServiceLocationPageContent } from '@/types'
import { escondidoContent } from './san-diego-escondido'
import { serviceContent } from './services'
import { mergeRelevantFaqs, pageImageSlots } from './service-location-shared'
import { inclusions, problems, shots } from './sl-blocks/drain-cleaning'

const id = (value: string): PageId => value as PageId

const sd = marketOperatingDetail['san-diego-ca']
if (sd === undefined) throw new Error('marketOperatingDetail is missing san-diego-ca')

// Alt text stays neutral: no place-specific photo is claimed.
const slots = pageImageSlots('sl-escondido-drain', {
  hero: {
    alt: 'Drain cleaning equipment at a fixture in a residential property',
    shot: 'Drain machine at a floor or tub drain, residential property, no identifiable address',
  },
  problems: [shots[0], shots[1], shots[2], shots[3]] as const,
})

const v2 = serviceContent[id('svc-drain-cleaning')]?.v2
if (v2 === undefined || escondidoContent.faq === undefined) {
  throw new Error('sl-escondido-drain: source content is missing')
}

const process: ProcessContent[] = (v2.process?.steps ?? []).map((step) => ({
  title: step.title,
  description: typeof step.description === 'string' ? step.description : undefined,
}))

/**
 * Every question from the Escondido location page and the drain cleaning page,
 * minus the ones below.
 */
const faq = mergeRelevantFaqs(
  escondidoContent.faq,
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
  'In Escondido',
)

export const escondidoDrainContent: ServiceLocationPageContent = {
  seoTitle: 'Drain Cleaning in Escondido, CA',
  metaDescription:
    'Drain cleaning in Escondido, CA. Municipal Code 22-165 puts the lateral on the owner and your drains sit upstream. See what cleaning does and does not fix.',
  serviceDescription:
    'Drain cleaning removes grease, roots, deposits, debris and other restricting material from a drain line using a rotating cable, water jetting, or both, for homes in Escondido, California. It restores flow and does not repair the pipe.',
  heroImage: slots.hero,
  ctaImage: slots.cta,
  sources: escondidoContent.sources,
  hero: {
    eyebrow: 'Escondido, CA',
    title: 'Drain Cleaning in Escondido',
    intro: (
      <p>
        In Escondido, section 22-165 of the Municipal Code puts the sewer lateral on the property
        owner, up to and including the connection to the City&rsquo;s main. The drains inside your
        home sit upstream of that line. Drain cleaning clears the grease, roots, debris and buildup
        in a fixture or branch line. It does not reach the City&rsquo;s main, and it does not repair
        the pipe.
      </p>
    ),
  },
  body: (
    <>
      <h2>Section 22-165 starts at the lateral, and your fixture drains sit upstream</h2>
      <p>
        Section 22-165 of the Escondido Municipal Code makes the owner responsible for all
        maintenance, repair, replacement, cleaning and removal of blockages in the sewer connection
        lateral, &ldquo;up to and including the connection to the main&rdquo;.
      </p>
      <p>
        Drain cleaning works one step upstream of that. It clears the fixture and branch lines
        inside your home, usually through a cleanout. It does not reach the City&rsquo;s main or the
        connection to it. Parts of Escondido are served by Vallecitos Water District and some
        properties are on septic, so this page does not say who serves your address.
      </p>

      <h2>One drain, several drains, or a backup you cannot place</h2>
      <ul>
        <li>
          <strong>One fixture slow or clogged:</strong> usually that fixture&rsquo;s own drain line,
          and the usual fit for drain cleaning.
        </li>
        <li>
          <strong>Several fixtures slow or gurgling:</strong> a shared branch or the larger sewer
          line, where sewer cleaning may help.
        </li>
        <li>
          <strong>Cannot tell whether a backup is in the main or the lateral:</strong> the
          City&rsquo;s FAQ says to call City Public Works at (760) 839-4668.
        </li>
      </ul>
      <p>
        The City says it will inspect the public main free of charge, and that if the main is clear
        the owner is told the blockage is probably in the lateral. Those are the City&rsquo;s number
        and statement, not ours. To reach The Sewer Pros about a drain, call {sd.phone}.
      </p>

      <h2>The City asks to be called before a lateral is cleaned, and clogs can return</h2>
      <p>
        The City&rsquo;s Sewer System Management Plan says its public education literature stresses
        the need to call the City before cleaning a private lateral, so the City can remove any
        debris that cleaning pushes into the public sewer line. That is the City&rsquo;s guidance,
        not a program and not a requirement to use our services.
      </p>
      <p>
        Roots can be cut back, but they may regrow, and cleaning does not seal the joint they came
        through. When a drain clogs again, a camera look at the accessible line may help show
        whether the restriction was fully removed.
      </p>

      <h2>No City program offsets it, and cleaning does not fix the pipe</h2>
      <p>
        We found no City of Escondido lateral repair, replacement, grant or reimbursement program
        (&ldquo;none found&rdquo;). Section 22-165(c) puts all costs of that work, and of verifying
        that a lateral is broken or damaged, on the owner. The City may be responsible only for
        damage the owner proves came from work by the City or a contractor working for the City,
        shown by a video inspection with a City employee present. Our camera look does not replace
        that.
      </p>
      <p>
        Cleaning does not fix a cracked, broken or collapsed pipe, an offset or separated joint, or
        roots entering at a joint. We do not perform repairs or replacements. When a camera is used
        you receive the video and written findings to compare against estimates.
      </p>
    </>
  ),
  problems: [
    ...problems.map((p, i) => ({ ...p, image: slots.problems[i] })),
    {
      title: 'A cleanout cap in the public right-of-way',
      description:
        'Section 22-165(d) bars anyone other than the City, or someone working under City contract, from excavating or exposing a lateral inside a public right-of-way. The one stated exception is a property line cleanout installed in public property, whose cap or cover may be exposed for maintenance if the covering materials are put back in kind. Ask Public Works what applies before opening anything in the street.',
      image: slots.problems[3],
    },
  ],
  // Six items: renders as two rows of three.
  inclusions,
  process,
  coverage: {
    title: 'Other San Diego area locations',
    intro:
      'This page covers the City of Escondido. Sewer agencies and lateral rules differ across San Diego County, so use the page for your address.',
    pageIds: [
      id('loc-sd-san-diego'),
      id('loc-sd-san-marcos'),
      id('loc-sd-carlsbad'),
      id('loc-sd-oceanside'),
      id('loc-sd-chula-vista'),
      id('loc-sd-mission-valley'),
    ],
    availabilityStatement: 'Escondido is a service area, not an office location.',
  },
  // All relevant questions from the Escondido location page and the drain
  // cleaning page (see `faq` above).
  faq,
  relatedPageIds: [
    id('loc-sd-escondido'),
    id('svc-drain-cleaning'),
    id('svc-sewer-cleaning'),
    id('svc-sewer-camera-inspection'),
  ],
  relatedTitle: 'Related pages',
  cta: {
    title: 'Request drain cleaning in Escondido',
    body: 'Get a slow or clogged drain cleared, with video and written findings when a camera is used.',
  },
}
