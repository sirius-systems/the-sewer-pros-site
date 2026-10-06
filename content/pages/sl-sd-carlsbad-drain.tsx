/**
 * Carlsbad, CA + Drain Cleaning (`sl-carlsbad-drain`).
 *
 * Built from exactly two sources, as `sl-sd-chula-vista-drain` is:
 *   LOCATION  `carlsbadContent`  (content/pages/san-diego-carlsbad.tsx)
 *   SERVICE   `svc-drain-cleaning` v2 content (content/pages/services.tsx)
 *             and `./sl-blocks/drain-cleaning`
 *
 * Section recipe (each ties a Carlsbad agency fact to what THIS service does
 * or cannot; swap the city or the service and the copy breaks):
 *   1. Three agencies, each with its own wording - the City, VWD and LWD each
 *                              describe the owner's lateral differently; fixture
 *                              drains sit upstream of all three descriptions.
 *   2. One drain, several, or water coming up - the service's triage plus the
 *                              City's cleanout-cap warning and each agency's own
 *                              number (all the AGENCIES' numbers).
 *   3. The City's maintenance guidance and LWD's root warning - vs. what a
 *                              fixture-drain cleaning does.
 *   4. Grants - the City's and LWD's terms, LWD's statement that cleaning does
 *                              not qualify, VWD none found, what cleaning does
 *                              not fix.
 *
 * ⚠ CARLSBAD HAS THREE SEWER AGENCIES. Each agency's wording is shown
 * separately and this page NEVER says which agency serves an address; the
 * City's sewer district map is the pointer. No rule is carried from one agency
 * to another. The location page states no housing-age figure and does not say
 * how old any system is, so none is given. AGENCY NUMBERS AND DOLLAR TERMS ARE
 * THE AGENCIES', not ours. No agency date is stated (the sources are mostly
 * undated; the page says confirm with the agency). The company phone is read
 * from `marketOperatingDetail`, never typed. No price, offer, response time,
 * guarantee, emergency or same-day claim. Carlsbad is a service area, not an
 * office. Repair and replacement are never presented as offered.
 *
 * Audit: docs/source-reports/san-diego/sl-carlsbad-drain.md
 */

import { marketOperatingDetail } from '@/data/markets/markets'
import type { PageId, ProcessContent, ServiceLocationPageContent } from '@/types'
import { carlsbadContent } from './san-diego-carlsbad'
import { serviceContent } from './services'
import { mergeRelevantFaqs, pageImageSlots } from './service-location-shared'
import { inclusions, problems, shots } from './sl-blocks/drain-cleaning'

const id = (value: string): PageId => value as PageId

const sd = marketOperatingDetail['san-diego-ca']
if (sd === undefined) throw new Error('marketOperatingDetail is missing san-diego-ca')

// Alt text stays neutral: no place-specific photo is claimed.
const slots = pageImageSlots('sl-carlsbad-drain', {
  hero: {
    alt: 'Drain cleaning equipment at a fixture in a residential property',
    shot: 'Drain machine at a floor or tub drain, residential property, no identifiable address',
  },
  problems: [shots[0], shots[1], shots[2], shots[3]] as const,
})

const v2 = serviceContent[id('svc-drain-cleaning')]?.v2
if (v2 === undefined || carlsbadContent.faq === undefined) {
  throw new Error('sl-carlsbad-drain: source content is missing')
}

const process: ProcessContent[] = (v2.process?.steps ?? []).map((step) => ({
  title: step.title,
  description: typeof step.description === 'string' ? step.description : undefined,
}))

/**
 * Every question from the Carlsbad location page and the drain cleaning page,
 * minus the ones below.
 */
const faq = mergeRelevantFaqs(
  carlsbadContent.faq,
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
  'In Carlsbad',
)

export const carlsbadDrainContent: ServiceLocationPageContent = {
  seoTitle: 'Drain Cleaning in Carlsbad, CA',
  metaDescription:
    'Drain cleaning in Carlsbad, CA. The City, Vallecitos and Leucadia each word the owner’s lateral differently. See what drain cleaning does and does not fix.',
  serviceDescription:
    'Drain cleaning removes grease, roots, deposits, debris and other restricting material from a drain line using a rotating cable, water jetting, or both, for homes in Carlsbad, California. It restores flow and does not repair the pipe.',
  heroImage: slots.hero,
  ctaImage: slots.cta,
  sources: carlsbadContent.sources,
  hero: {
    eyebrow: 'Carlsbad, CA',
    title: 'Drain Cleaning in Carlsbad',
    intro: (
      <p>
        In Carlsbad, three agencies publish sewer rules, and in each of them the published wording
        puts the private lateral on the property owner. The drains inside your home sit upstream of
        that line. Drain cleaning clears the grease, roots, debris and buildup in a fixture or
        branch line. It does not reach a public sewer, and it does not repair the pipe.
      </p>
    ),
  },
  body: (
    <>
      <h2>Three agencies describe the lateral three ways, and your drains sit upstream</h2>
      <p>
        The City of Carlsbad says the owner is responsible for the lateral from the home to the
        sewer main, typically in the street, and that its own responsibility begins once sewage
        enters the main. Vallecitos Water District (VWD) says the owner is responsible from the home
        and including the point of connection to its main. Leucadia Wastewater District (LWD)
        describes the lateral as running from the building to the District&rsquo;s public system,
        including the physical connection.
      </p>
      <p>
        The City&rsquo;s sewer district map is where it points owners to find their area. Drain
        cleaning means the fixture and branch lines in your home. It does not reach any
        agency&rsquo;s main or the connection to it.
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
          <strong>Water or sewage coming up:</strong> the City says not to remove the cleanout cap
          to relieve a backup, because that causes a sewer spill and is a health violation.
        </li>
      </ul>
      <p>
        Each agency lists its own number. The City lists 442-339-2722 for sewer spills or issues,
        and 760-931-2197 nights and weekends. LWD lists 760-753-0155 for a sewage spill. VWD lists
        (760) 744-0460 for water and sewer questions and we did not find a separate sewer emergency
        number. Those are the agencies&rsquo; numbers, not ours. To reach The Sewer Pros about a
        drain, call {sd.phone}.
      </p>

      <h2>The City&rsquo;s upkeep advice and LWD&rsquo;s warning about roots</h2>
      <p>
        The City says a lateral should ideally be professionally cleaned once a year, and that
        owners should check sooner if they notice a sewage-like odor or frequent clogged drains. LWD
        says tree roots or other obstructions can block a lateral and cause a backup into a home.
      </p>
      <p>
        Grease that cools in a kitchen branch line is a drain cleaning job. Roots can be cleared,
        but cleaning does not close the opening they came through. When a drain clogs again, a
        camera look at the accessible line may help show whether the restriction was fully removed.
      </p>

      <h2>Two grants, and LWD says cleaning does not qualify</h2>
      <p>
        The City publishes a Sewer Lateral Grant Program of up to $3,000 for replacing or
        rehabilitating a lateral. LWD publishes a program that reimburses 50% of repair cost, up to
        $3,000, and says inspection and cleaning of a private lateral do not qualify. We did not
        find a lateral grant from VWD. Those are the agencies&rsquo; terms, not ours, and neither
        page we reviewed publishes a funding balance, so confirm availability with the agency.
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
      title: 'A cleanout cap that someone pulled to relieve a backup',
      description:
        'The City says not to remove a cleanout cap to relieve a backup, because that causes a sewer spill and is a health violation. Drain cleaning works through an access point chosen for the line, and it does not replace calling the agency about a spill. Agency numbers are the agencies’ own, not ours.',
      image: slots.problems[3],
    },
  ],
  // Six items: renders as two rows of three.
  inclusions,
  process,
  coverage: {
    title: 'Other San Diego area locations',
    intro:
      'This page covers the City of Carlsbad. Sewer agencies and lateral rules differ across San Diego County, so use the page for your address.',
    pageIds: [
      id('loc-sd-san-diego'),
      id('loc-sd-san-marcos'),
      id('loc-sd-escondido'),
      id('loc-sd-oceanside'),
      id('loc-sd-chula-vista'),
      id('loc-sd-mission-valley'),
    ],
    availabilityStatement: 'Carlsbad is a service area, not an office location.',
  },
  // All relevant questions from the Carlsbad location page and the drain
  // cleaning page (see `faq` above).
  faq,
  relatedPageIds: [
    id('loc-sd-carlsbad'),
    id('svc-drain-cleaning'),
    id('svc-sewer-cleaning'),
    id('svc-sewer-camera-inspection'),
  ],
  relatedTitle: 'Related pages',
  cta: {
    title: 'Request drain cleaning in Carlsbad',
    body: 'Get a slow or clogged drain cleared, with video and written findings when a camera is used.',
  },
}
