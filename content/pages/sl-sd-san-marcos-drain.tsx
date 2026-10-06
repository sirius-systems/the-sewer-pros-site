/**
 * San Marcos, CA + Drain Cleaning (`sl-san-marcos-drain`).
 *
 * Built from exactly two sources, as `sl-sd-chula-vista-drain` is:
 *   LOCATION  `sanMarcosContent`  (content/pages/san-diego-san-marcos.tsx)
 *   SERVICE   `svc-drain-cleaning` v2 content (content/pages/services.tsx)
 *             and `./sl-blocks/drain-cleaning`
 *
 * Section recipe (each ties a San Marcos fact to what THIS service does or
 * cannot; swap the city or the service and the copy breaks):
 *   1. Three agencies, none of them the City - each agency's wording shown
 *                              separately; fixture drains sit upstream of the
 *                              lateral the district puts on the owner.
 *   2. One drain, several, or water coming up - the service's triage plus the
 *                              district's 911 instruction and numbers (all the
 *                              DISTRICT's), company phone from the market data.
 *   3. Rainwater and smoke testing - the district tests ITS lines; a fixture
 *                              drain cleaning does neither.
 *   4. No lateral program found, and what cleaning does not fix.
 *
 * ⚠ The City says it does not provide sewer service. This page never says which
 * agency serves an address and states no rule of Vista Irrigation District or
 * Rincon del Diablo Municipal Water District. DISTRICT NUMBERS ARE THE
 * DISTRICT'S, not ours. The company phone is read from `marketOperatingDetail`,
 * never typed. The location page states no housing-age figure, and its pages
 * show no current date, so none is given. No price, offer, response time,
 * guarantee, emergency or same-day claim. San Marcos is a service area, not an
 * office. Repair and replacement are never presented as offered.
 *
 * Audit: docs/source-reports/san-diego/sl-san-marcos-drain.md
 */

import { marketOperatingDetail } from '@/data/markets/markets'
import type { PageId, ProcessContent, ServiceLocationPageContent } from '@/types'
import { sanMarcosContent } from './san-diego-san-marcos'
import { serviceContent } from './services'
import { mergeRelevantFaqs, pageImageSlots } from './service-location-shared'
import { inclusions, problems, shots } from './sl-blocks/drain-cleaning'

const id = (value: string): PageId => value as PageId

const sd = marketOperatingDetail['san-diego-ca']
if (sd === undefined) throw new Error('marketOperatingDetail is missing san-diego-ca')

// Alt text stays neutral: no place-specific photo is claimed.
const slots = pageImageSlots('sl-san-marcos-drain', {
  hero: {
    alt: 'Drain cleaning equipment at a fixture in a residential property',
    shot: 'Drain machine at a floor or tub drain, residential property, no identifiable address',
  },
  problems: [shots[0], shots[1], shots[2], shots[3]] as const,
})

const v2 = serviceContent[id('svc-drain-cleaning')]?.v2
if (v2 === undefined || sanMarcosContent.faq === undefined) {
  throw new Error('sl-san-marcos-drain: source content is missing')
}

const process: ProcessContent[] = (v2.process?.steps ?? []).map((step) => ({
  title: step.title,
  description: typeof step.description === 'string' ? step.description : undefined,
}))

/**
 * Every question from the San Marcos location page and the drain cleaning
 * page, minus the ones below.
 */
const faq = mergeRelevantFaqs(
  sanMarcosContent.faq,
  v2.faq,
  [
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
  'In San Marcos',
)

export const sanMarcosDrainContent: ServiceLocationPageContent = {
  seoTitle: 'Drain Cleaning in San Marcos, CA',
  metaDescription:
    'Drain cleaning in San Marcos, CA. The City says it is not the sewer provider; Vallecitos puts the lateral on the owner. See what cleaning does and does not fix.',
  serviceDescription:
    'Drain cleaning removes grease, roots, deposits, debris and other restricting material from a drain line using a rotating cable, water jetting, or both, for homes in San Marcos, California. It restores flow and does not repair the pipe.',
  heroImage: slots.hero,
  ctaImage: slots.cta,
  sources: sanMarcosContent.sources,
  hero: {
    eyebrow: 'San Marcos, CA',
    title: 'Drain Cleaning in San Marcos',
    intro: (
      <p>
        The City of San Marcos says it does not provide sewer service, and that one of three
        agencies does, depending on location. Where Vallecitos Water District serves a property, the
        district says the owner is responsible for the lateral from the building through its
        connection to the district&rsquo;s main, so the drains inside your home sit upstream of that
        line. Drain cleaning clears the grease, roots, debris and buildup in a fixture or branch
        line. It does not reach the district&rsquo;s main, and it does not repair the pipe.
      </p>
    ),
  },
  body: (
    <>
      <h2>Three agencies, and none of them is the City</h2>
      <p>Each source says something different, so we show them separately:</p>
      <ul>
        <li>
          <strong>City of San Marcos:</strong> it does not provide water or sewer service. One of
          three agencies does, depending on location.
        </li>
        <li>
          <strong>Vallecitos Water District:</strong> it maintains the sewer mains, and the owner is
          responsible for the lateral from the building through its connection to the main.
        </li>
        <li>
          <strong>Vista Irrigation District and Rincon del Diablo Municipal Water District:</strong>{' '}
          the City names them as the other two. We make no claim about their rules, so ask the
          agency.
        </li>
      </ul>
      <p>
        We do not say which agency serves your address. Vallecitos says its Engineering Department
        can tell you whether a parcel is inside its boundary. Drain cleaning means the fixture and
        branch lines in your home, and it reaches neither the main nor the connection.
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
          <strong>Water or sewage coming up:</strong> Vallecitos says to call 911 for emergencies
          such as a sewer spill.
        </li>
      </ul>
      <p>
        The district lists (760) 744-0460 as its main number (the district&rsquo;s, not ours). To
        reach The Sewer Pros about a drain, call {sd.phone}.
      </p>

      <h2>Rainwater and smoke tests look at district lines, not your drains</h2>
      <p>
        Vallecitos says rainwater can enter its sewer lines, and that it smoke-tests its sanitary
        sewer lines for cracks and other openings. It describes that testing as an assessment of the
        district&rsquo;s system rather than private systems. That is a test of district lines. It
        does not clean or inspect a fixture drain.
      </p>
      <p>
        If one drain clogs again after it was cleared, a camera look at the accessible line may help
        show whether the restriction was fully removed.
      </p>

      <h2>No lateral repair program found, and what cleaning does not fix</h2>
      <p>
        We did not find a Vallecitos lateral repair, replacement, grant or reimbursement program.
        That is &ldquo;none found&rdquo;, not a statement that none exists, and the district&rsquo;s
        pages show no current date, so confirm with the district. Its one reimbursement agreement is
        for a main-line extension, not for a clog or an existing lateral.
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
      title: 'Water coming up and no agency in mind',
      description:
        'Vallecitos Water District says to call 911 for emergencies such as a sewer spill, and lists (760) 744-0460 as its main number. Those are the district’s statements and number, not ours, and they apply to addresses it serves. Drain cleaning works on drain lines at the property, not on a public main.',
      image: slots.problems[3],
    },
  ],
  // Six items: renders as two rows of three.
  inclusions,
  process,
  coverage: {
    title: 'Other San Diego area locations',
    intro:
      'This page covers the City of San Marcos. Sewer agencies and lateral rules differ across San Diego County, so use the page for your address.',
    pageIds: [
      id('loc-sd-san-diego'),
      id('loc-sd-carlsbad'),
      id('loc-sd-escondido'),
      id('loc-sd-oceanside'),
      id('loc-sd-chula-vista'),
      id('loc-sd-mission-valley'),
    ],
    availabilityStatement: 'San Marcos is a service area, not an office location.',
  },
  // All relevant questions from the San Marcos location page and the drain
  // cleaning page (see `faq` above).
  faq,
  relatedPageIds: [
    id('loc-sd-san-marcos'),
    id('svc-drain-cleaning'),
    id('svc-sewer-cleaning'),
    id('svc-sewer-camera-inspection'),
  ],
  relatedTitle: 'Related pages',
  cta: {
    title: 'Request drain cleaning in San Marcos',
    body: 'Get a slow or clogged drain cleared, with video and written findings when a camera is used.',
  },
}
