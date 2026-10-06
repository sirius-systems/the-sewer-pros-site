/**
 * Florissant, MO + Drain Cleaning (`sl-florissant-drain`).
 *
 * Built from exactly two sources, as `sl-lv-city-drain` is:
 *   LOCATION  `florissantContent`  (content/pages/st-louis-florissant.tsx)
 *   SERVICE   `svc-drain-cleaning` v2 content (content/pages/services.tsx)
 *             and `./sl-blocks/drain-cleaning`
 *
 * Section recipe (each ties a Florissant fact to what THIS service does or
 * cannot do; swap the city or the service and the copy breaks):
 *   1. Responsibility        - MSD's private-lateral statement and the City
 *                              program's five-foot boundary: fixture drains sit
 *                              on the owner's side; the public sewer and the
 *                              connection are not a drain-cleaning job.
 *   2. One drain, several, or a backup - the service's triage, plus MSD's
 *                              building-backup line (MSD's number, not ours).
 *   3. Maintenance and housing age - the City's "annual cabling" wording and the
 *                              Consolidated Plan's 1950-1979 housing statement
 *                              vs. what a drain clog does and does not depend on.
 *   4. What cleaning does not fix - the City's own denial reasons (open line,
 *                              hairline cracks, blockage near the foundation),
 *                              what cleaning does not repair, no repairs by us.
 *
 * ⚠ MSD AND CITY NUMBERS ARE THEIRS, not ours. The company phone is read from
 * `marketOperatingDetail`, never typed. No price, offer, response time,
 * guarantee, emergency or same-day claim. Florissant is a service area, not an
 * office. Repair and replacement are never presented as offered. Nothing from
 * the St. Louis City, Chesterfield, Ballwin or St. Charles pages is carried
 * over.
 *
 * Audit: docs/source-reports/st-louis/sl-florissant-drain.md
 */

import { marketOperatingDetail } from '@/data/markets/markets'
import type { PageId, ProcessContent, ServiceLocationPageContent } from '@/types'
import { florissantContent } from './st-louis-florissant'
import { serviceContent } from './services'
import { mergeRelevantFaqs, pageImageSlots } from './service-location-shared'
import { inclusions, problems, shots } from './sl-blocks/drain-cleaning'

const id = (value: string): PageId => value as PageId

const stl = marketOperatingDetail['st-louis-mo']
if (stl === undefined) throw new Error('marketOperatingDetail is missing st-louis-mo')

// Alt text stays neutral: no place-specific photo is claimed.
const slots = pageImageSlots('sl-florissant-drain', {
  hero: {
    alt: 'Drain cleaning equipment at a fixture in a home',
    shot: 'Drain machine at a floor or tub drain, residential property, no identifiable address',
  },
  problems: [shots[0], shots[1], shots[2], shots[3]] as const,
})

const v2 = serviceContent[id('svc-drain-cleaning')]?.v2
if (v2 === undefined || florissantContent.faq === undefined) {
  throw new Error('sl-florissant-drain: source content is missing')
}

const process: ProcessContent[] = (v2.process?.steps ?? []).map((step) => ({
  title: step.title,
  description: typeof step.description === 'string' ? step.description : undefined,
}))

/**
 * Every question from the Florissant location page and the drain cleaning
 * page, minus the ones below.
 */
const faq = mergeRelevantFaqs(
  florissantContent.faq,
  v2.faq,
  [
    // This page IS an area page; the question is the hub's.
    'Do you clean drains in St. Louis, San Diego, and Las Vegas?',
    // Same answer, fuller, under "Does drain cleaning repair a damaged pipe?".
    'Can drain cleaning fix a broken or collapsed pipe?',
    // Same answer, fuller, under "Can tree roots grow into drain pipes?".
    'Can cleaning remove tree roots?',
  ],
  'In Florissant',
)

export const florissantDrainContent: ServiceLocationPageContent = {
  seoTitle: 'Drain Cleaning in Florissant, MO',
  metaDescription:
    'Drain cleaning in Florissant, MO. MSD says the lateral is private, and the City program stops five feet from the foundation. See what cleaning fixes.',
  serviceDescription:
    'Drain cleaning removes grease, roots, deposits, debris and other restricting material from a drain line using a rotating cable, water jetting, or both, for homes in Florissant, Missouri. It restores flow and does not repair the pipe.',
  heroImage: slots.hero,
  ctaImage: slots.cta,
  sources: florissantContent.sources,
  hero: {
    eyebrow: 'Florissant, MO',
    title: 'Drain Cleaning in Florissant',
    intro: (
      <p>
        In Florissant, MSD says the lateral line from your building to the public sewer is private
        property, and the City&rsquo;s lateral program covers only the part from the main to within
        five feet of the foundation. The drains inside your home are on the owner&rsquo;s side of
        that line. Drain cleaning clears the grease, roots, debris and buildup in a fixture or
        branch line. It does not reach MSD&rsquo;s public sewer, and it does not repair the pipe.
      </p>
    ),
  },
  body: (
    <>
      <h2>Fixture drains sit in the part of the line the City program leaves to you</h2>
      <p>
        MSD says the lateral line that connects your building to the public sewer, including its
        connection, is private property that the owner maintains and repairs. Florissant&rsquo;s
        Sewer Lateral Insurance Program covers repair of a defective lateral only from the main to
        within five feet of the home&rsquo;s foundation, and the City says the homeowner is
        responsible for the part inside the home and within five feet of it.
      </p>
      <p>
        Drain cleaning works on that homeowner side: the fixture and branch lines inside your home,
        such as a sink or tub. Sewer cleaning means the larger line that carries wastewater away
        from the building. Neither reaches MSD&rsquo;s public sewer or the connection to it.
      </p>

      <h2>One drain, several drains, or a backup MSD should hear about</h2>
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
        For a building backup, MSD asks you to call it at (314) 768-6260 (MSD&rsquo;s number, not
        ours) so it can inspect whether the situation qualifies for its limited building-backup
        assistance program. To reach The Sewer Pros, call {stl.phone}.
      </p>

      <h2>Cabling is maintenance in Florissant, and house age says little about your drains</h2>
      <p>
        The City says routine maintenance may mean annual cabling, especially where there are large
        trees or bushes, and that its lateral program is not a substitute for regular maintenance.
        Cleaning is that maintenance side, using cable, water jetting, or both.
      </p>
      <p>
        The City&rsquo;s 2026-2030 Consolidated Plan says the vast majority of Florissant&rsquo;s
        21,229 housing units were built between 1950 and 1979 (U.S. Census Bureau ACS 2024 5-year
        estimates, citywide). Neither MSD nor the City publishes a pipe material or era, so age does
        not tell you what is in a drain line. When a clog returns, the restriction may not have been
        fully removed, or something in the line may be rebuilding it. A camera look may help show
        which.
      </p>

      <h2>What cleaning does not fix, and what the City says it will not repair</h2>
      <p>
        Among the City&rsquo;s listed reasons to deny a program application are small defects or
        hairline cracks, a line that is open and in serviceable condition, and a blockage under the
        home or within five feet of the foundation. A drain that flows again after cleaning is the
        open-line case, not proof that the pipe is sound.
      </p>
      <p>
        Cleaning does not fix a cracked, broken or collapsed pipe, an offset or separated joint, or
        roots entering at a joint. We do not perform repairs or replacements. When a camera is used
        you receive the video and written findings, which you can compare against any estimate.
      </p>
    </>
  ),
  problems: [
    ...problems.map((p, i) => ({ ...p, image: slots.problems[i] })),
    {
      title: 'A clog the City calls maintenance',
      description:
        'The City says routine maintenance may mean annual cabling and that its lateral program is not a substitute for regular maintenance. A clog that keeps returning is a maintenance question first, and a camera look shows whether a pipe condition is behind it.',
      image: slots.problems[3],
    },
  ],
  // Six items: renders as two rows of three.
  inclusions,
  process,
  coverage: {
    title: 'Other St. Louis area locations',
    intro:
      'This page covers Florissant. Lateral programs and sewer rules differ by municipality, so use the page for your address.',
    pageIds: [
      id('loc-stl-st-louis-city'),
      id('loc-stl-chesterfield'),
      id('loc-stl-ballwin'),
      id('loc-stl-st-charles'),
    ],
    availabilityStatement: 'Florissant is a service area, not an office location.',
  },
  // All relevant questions from the Florissant location page and the drain
  // cleaning page (see `faq` above).
  faq,
  relatedPageIds: [
    id('loc-stl-florissant'),
    id('svc-drain-cleaning'),
    id('svc-sewer-cleaning'),
    id('svc-sewer-camera-inspection'),
  ],
  relatedTitle: 'Related pages',
  cta: {
    title: 'Request drain cleaning in Florissant',
    body: 'Get a slow or clogged drain cleared, with video and written findings when a camera is used.',
  },
}
