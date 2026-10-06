/**
 * Florissant, MO + Preventative Sewer Maintenance (`sl-florissant-maintenance`).
 *
 * Authority: CLAUDE.md §9, §22, §24; docs/14-content-specification.md §43.
 * Model: `sl-lv-city-maintenance.tsx` (approved).
 *
 * One local source (`florissantContent`, `loc-stl-florissant`) x one service
 * source (`svc-preventative-sewer-maintenance`, its `v2` block). Nothing here is
 * new research. Section recipe, each tied to what THIS service does or cannot:
 *   1. responsibility + housingAge.table - MSD calls the lateral private, and the
 *      City says routine maintenance may mean annual cabling
 *   2. responsibility + whoToCall - MSD's public sewer and the City's sinkhole
 *      contact vs. what a visit covers
 *   3. municipalProgram - a program that pays for defects, not upkeep: spot
 *      repairs, denial reasons, vs. what a maintenance record documents
 *   4. housingAge + systemExplainer - 1950-1979 housing and MSD projects, no
 *      default schedule
 * Swap the city and sections 1-4 fail; swap the service and 1-3 fail.
 *
 * Audit: docs/source-reports/st-louis/sl-florissant-maintenance.md
 *
 * ⚠ NO INTERVAL, SCHEDULE, PLAN OR CONTRACT is claimed for The Sewer Pros. The
 * City's "annual cabling" wording is the City's description of routine
 * maintenance, quoted as such, and the service page states no interval.
 * ⚠ MSD AND CITY NUMBERS ARE THEIRS, not ours. No company phone, office, price,
 * offer, response time or guarantee appears. Repair and replacement are never
 * offered. Nothing from the St. Louis City, Chesterfield, Ballwin or St. Charles
 * pages is carried over.
 */

import type { PageId, ProcessContent, ServiceLocationPageContent } from '@/types'
import { florissantContent } from './st-louis-florissant'
import { serviceContent } from './services'
import { mergeRelevantFaqs, pageImageSlots } from './service-location-shared'
import { inclusions, problems, shots } from './sl-blocks/preventative-sewer-maintenance'

const id = (value: string): PageId => value as PageId

const SERVICE_ID = 'svc-preventative-sewer-maintenance'

const v2 = serviceContent[id(SERVICE_ID)]?.v2
if (v2 === undefined || florissantContent.faq === undefined) {
  throw new Error('sl-florissant-maintenance: source content is missing')
}

// Alt text stays neutral: no place-specific photo is claimed.
const slots = pageImageSlots('sl-florissant-maintenance', {
  hero: {
    alt: 'Technician on a preventative sewer maintenance visit at a home',
    shot: 'Technician at a residential cleanout during a maintenance visit, monitor in frame, no identifiable address',
  },
  problems: [shots[0], shots[1], shots[2], shots[3]] as const,
})

/**
 * Every question from the Florissant location page and the maintenance service
 * page, minus four Florissant questions: "What does a sewer camera inspection
 * show?" (the service page asks "What does a sewer camera inspection find?"),
 * "Do you repair or replace sewer lines?" (the service page's "Do you offer
 * sewer repair or replacement?" answers it in full), and the two home-sale
 * questions ("Can a home sale speed up a lateral repair?" and "Do buyers need a
 * City inspection in Florissant?"), which are not about maintenance.
 */
const faq = mergeRelevantFaqs(
  florissantContent.faq,
  v2.faq,
  [
    'What does a sewer camera inspection show?',
    'Do you repair or replace sewer lines?',
    'Can a home sale speed up a lateral repair?',
    'Do buyers need a City inspection in Florissant?',
  ],
  'In Florissant',
)

const steps: ProcessContent[] = (v2.process?.steps ?? []).map((step) => ({
  title: step.title,
  description: typeof step.description === 'string' ? step.description : undefined,
}))

export const florissantMaintenanceContent: ServiceLocationPageContent = {
  seoTitle: 'Preventative Sewer Maintenance in Florissant, MO',
  metaDescription:
    'Preventative sewer maintenance in Florissant, MO. The City says routine maintenance is the owner’s. See what a camera pass and cleaning cover.',
  serviceDescription:
    "Preventative sewer maintenance is planned inspection and cleaning of a home's drain and sewer line before buildup or an obstruction causes a backup, for properties in Florissant, Missouri. It is diagnostic and cleaning work, not repair.",
  heroImage: slots.hero,
  ctaImage: slots.cta,
  sources: florissantContent.sources,
  hero: {
    eyebrow: 'Florissant, MO',
    title: 'Preventative Sewer Maintenance in Florissant',
    intro: (
      <p>
        In Florissant, MSD says the lateral line from your building to the public sewer is private
        property that the owner maintains, and the City says its lateral program is not a substitute
        for regular maintenance. Preventative sewer maintenance is the planned version: a camera
        pass that records the visible condition of the accessible line, and cleaning when it is
        appropriate, before buildup becomes a backup.
      </p>
    ),
  },
  body: (
    <>
      <h2>The City says routine maintenance is the owner&rsquo;s, and may mean annual cabling</h2>
      <p>
        MSD says the lateral line that connects your building to the public sewer, including its
        connection, is private property that the owner maintains and repairs. The City of Florissant
        says routine maintenance may mean annual cabling, especially where there are large trees or
        bushes.
      </p>
      <p>
        That is the City&rsquo;s description of maintenance, not a schedule for your line, and we
        state no interval here. A maintenance visit is one way to look after the line yourself: a
        recorded camera pass, then cleaning if buildup or an obstruction is present. The
        line&rsquo;s own history decides what is useful.
      </p>

      <h2>What a visit covers, and what it leaves to MSD and the City</h2>
      <p>
        MSD runs the public sewer. For a building backup it asks you to call it at (314) 768-6260
        (MSD&rsquo;s number, not ours), and for a cave-in or sinkhole the City directs residents to
        its Engineering Division at (314) 839-7643 (the City&rsquo;s number). On the lateral:
      </p>
      <ul>
        <li>The footage records where along the line a condition was seen.</li>
        <li>It does not establish where the connection to the public sewer is.</li>
        <li>Cleaning does not repair pipe. The Sewer Pros does not perform repairs.</li>
      </ul>
      <p>
        You keep the video and written findings, which are the record of what was visible if a
        condition remains after cleaning.
      </p>

      <h2>A City program that pays for defects, not for upkeep</h2>
      <p>
        Florissant&rsquo;s Sewer Lateral Insurance Program covers repair of a defective lateral from
        the main to within five feet of the foundation. The City says it makes spot repairs, usually
        about 10 feet, and is not there to replace a whole lateral or to prevent future defects. A
        line that is open and in serviceable condition, small defects or hairline cracks, and a
        blockage within five feet of the foundation are among its listed reasons to deny an
        application.
      </p>
      <p>
        A maintenance record documents the visible condition of the accessible line. It is your own
        evidence, and we make no claim that the City accepts an outside report. Confirm current
        terms with the Engineering Division before you rely on the program.
      </p>

      <h2>Mid-century homes and public projects do not set a schedule</h2>
      <p>
        The City&rsquo;s 2026-2030 Consolidated Plan says the vast majority of Florissant&rsquo;s
        21,229 housing units were built between 1950 and 1979 (U.S. Census Bureau ACS 2024 5-year
        estimates, for the city as a whole). Neither MSD nor the City publishes a pipe material or
        installation era, and MSD&rsquo;s Wedgewood and Lindsay Lane sewer projects say nothing
        about any one lateral.
      </p>
      <p>
        A line with no history of problems does not need a default schedule. What raises the
        question is the line: mature trees near it, buildup that returned after a cleaning, or
        earlier backups never documented on camera.
      </p>
    </>
  ),
  problems: [
    ...problems.map((p, i) => ({ ...p, image: slots.problems[i] })),
    {
      title: 'Large trees near the lateral',
      description:
        'The City says routine maintenance may mean annual cabling, especially with large trees or bushes. Mature trees near the line are one reason to look at it, and a camera pass records what is visible. We state no interval.',
      image: slots.problems[3],
    },
  ],
  inclusions,
  process: steps,
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
  faq,
  relatedPageIds: [
    id('loc-stl-florissant'),
    id(SERVICE_ID),
    id('svc-sewer-camera-inspection'),
    id('svc-sewer-cleaning'),
  ],
  relatedTitle: 'Related pages',
  cta: {
    title: 'Request preventative sewer maintenance in Florissant',
    body: 'Tell us what you have noticed and what the line’s history looks like. We will talk through access and what a visit would include.',
  },
}
