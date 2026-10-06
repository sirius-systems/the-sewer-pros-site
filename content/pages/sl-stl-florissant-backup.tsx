/**
 * Florissant, MO + Recurring Sewer Backup Diagnosis (`sl-florissant-backup`).
 *
 * Authority: CLAUDE.md §22, §24; docs/14-content-specification.md §43.
 * Model: `sl-lv-city-backup.tsx` (approved).
 *
 * One local source (`florissantContent`, the Florissant location page) times one
 * service source (`svc-recurring-sewer-backup-diagnosis`, `v2`). Nothing here is
 * new research. The audit of every source section is in
 * `docs/source-reports/st-louis/sl-florissant-backup.md`.
 *
 * Body recipe (each section ties a Florissant fact to what a diagnosis does or cannot):
 *   1. Who to call first - MSD's building-backup line and its limited assistance
 *      program vs. the private lateral, and what footage can establish
 *   2. The City program's recurring-backup route - the qualifying reason, the
 *      deposit, the City's own plumber and Engineer vs. our own record
 *   3. Denial reasons - open line, hairline cracks, blockage near the
 *      foundation, the five-foot boundary vs. what a diagnosis documents
 *   4. Public projects and housing age - Brookshire (Wedgewood) and Lindsay
 *      Lane, 1950-1979 housing, no pipe material published, vs. the named
 *      causes of a repeat backup and "does not repair"
 * Swap the city and 1-4 fail; swap the service and 1-3 fail.
 *
 * ⚠ MSD AND CITY NUMBERS AND DOLLAR TERMS ARE THEIRS, not ours. No company phone,
 * office, price, offer, emergency claim, response time or guarantee appears in
 * the body copy. The service page's cost and same-day FAQ answers (DEC-088
 * wording) are carried as published, per the owner's 2026-10-05 direction
 * (DEC-139). Nothing from the St. Louis City, Chesterfield, Ballwin or St.
 * Charles pages is carried over.
 */

import type { PageId, ProcessContent, ServiceLocationPageContent } from '@/types'
import { florissantContent } from './st-louis-florissant'
import { serviceContent } from './services'
import { mergeRelevantFaqs, pageImageSlots } from './service-location-shared'
import { inclusions, problems, shots } from './sl-blocks/recurring-sewer-backup-diagnosis'

const id = (value: string): PageId => value as PageId

// Alt text stays neutral: no place-specific photo is claimed.
const slots = pageImageSlots('sl-florissant-backup', {
  hero: {
    alt: 'Technician at a cleanout beside a home',
    shot: 'Technician at an exterior cleanout of a residential property, camera monitor in frame, nothing graphic',
  },
  problems: shots,
})

const v2 = serviceContent[id('svc-recurring-sewer-backup-diagnosis')]?.v2
if (v2 === undefined || florissantContent.faq === undefined) {
  throw new Error('sl-florissant-backup: source content is missing')
}

/**
 * Every question from the Florissant location page and the backup diagnosis
 * service page, minus the one named here (reason in the source report).
 */
const florissantBackupFaq = mergeRelevantFaqs(
  florissantContent.faq,
  v2.faq,
  [
    // Location page: a camera question the service page answers in full
    // ("What can a sewer camera see?").
    'What does a sewer camera inspection show?',
  ],
  'In Florissant',
)

const steps: ProcessContent[] = (v2.process?.steps ?? []).map((step) => ({
  title: step.title,
  description: typeof step.description === 'string' ? step.description : undefined,
}))

export const florissantBackupContent: ServiceLocationPageContent = {
  seoTitle: 'Recurring Sewer Backup Diagnosis in Florissant, MO',
  metaDescription:
    'Recurring sewer backup diagnosis in Florissant, MO. Call MSD for a building backup; the lateral is yours. See what a camera can document.',
  serviceDescription:
    'Recurring sewer backup diagnosis is the process of inspecting the accessible sewer line to identify visible conditions that may cause repeated wastewater backups, for properties in Florissant, Missouri. It generally combines a camera inspection, cleaning when needed, and written findings.',
  heroImage: slots.hero,
  ctaImage: slots.cta,
  sources: florissantContent.sources,
  hero: {
    eyebrow: 'Florissant, MO',
    title: 'Recurring Sewer Backup Diagnosis in Florissant',
    intro: (
      <p>
        In Florissant, MSD says the lateral line from your building to the public sewer is private
        property, and the City&rsquo;s lateral program can take an application for recurring backups
        that regular maintenance cannot resolve. When a backup keeps coming back, a diagnosis
        documents what a camera can see inside the accessible line, with cleaning first when
        something blocks the view, so you know what you are dealing with before you apply or approve
        work.
      </p>
    ),
  },
  body: (
    <>
      <h2>A repeat backup in Florissant starts with a call to MSD</h2>
      <p>
        For a building backup, MSD asks you to call it at (314) 768-6260 (MSD&rsquo;s number, not
        ours) so it can inspect whether the situation qualifies for its limited building-backup
        assistance program. MSD also says the lateral line from your building to the public sewer,
        including its connection, is private property that the owner maintains and repairs.
      </p>
      <p>
        A diagnosis does not replace that call. It documents what is visible in the part of the line
        the camera reached, and those findings apply only to the segment inspected. They do not by
        themselves establish responsibility, and we did not find a published rule on who owns the
        part of a lateral under the street.
      </p>

      <h2>Recurring backups are one of the City program&rsquo;s two ways in</h2>
      <p>
        The City says you can apply to its Sewer Lateral Insurance Program after the City or MSD
        confirms a cave-in on your lateral, or if you have recurring backups that regular
        maintenance cannot resolve and you have paid the annual lateral fee. No prior plumbing
        inspection is required. Applying takes a $300 deposit (the City&rsquo;s term), which the
        City reimburses after an approved repair and keeps if the application is denied.
      </p>
      <p>
        The City&rsquo;s own contracted plumber does the cable and camera evaluation, and the City
        Engineer reviews that video. Our diagnosis does not replace it, and we make no claim that
        the City accepts an outside report. It gives you your own recorded evidence of what the line
        looks like before you decide to pay a deposit.
      </p>

      <h2>A repeat backup can still be a denial, and the five-foot boundary matters</h2>
      <p>
        The program covers a defective lateral from the main to within five feet of the foundation.
        The City lists these among its reasons to deny: a blockage under the home or within five
        feet of the foundation, small defects or hairline cracks, and a line that is open and in
        serviceable condition. A backup that cleaning clears is the last case.
      </p>
      <p>
        A diagnosis records where along the line a blockage or condition was seen, and whether the
        line is clear once cleaned.
      </p>

      <h2>MSD&rsquo;s projects and 1950-1979 housing do not explain your backup</h2>
      <p>
        MSD&rsquo;s Brookshire Sanitary Relief page describes replacing undersized and deteriorated
        wastewater sewer in Florissant&rsquo;s Wedgewood neighborhood to reduce basement backups,
        and its project list shows a Lindsay Lane project as tentative. The City&rsquo;s 2026-2030
        Consolidated Plan says the vast majority of the housing stock was built between 1950 and
        1979. Neither MSD nor the City publishes a pipe material or installation era.
      </p>
      <p>
        Public utility guidance names grease, wipes, roots, sags, cracks, separated joints and
        collapse among the causes of repeat backups; which applies cannot be known without looking.
        A diagnosis does not repair anything, and The Sewer Pros does not sell repair or
        replacement. Keep the video and compare more than one written estimate.
      </p>
    </>
  ),
  problems: [
    ...problems.map((p, i) => ({ ...p, image: slots.problems[i] })),
    {
      title: 'A backup that may be the public sewer',
      description:
        'MSD lists raw sewage inside or outside a house, missing manhole covers and flooded streets as urgent reports, and asks you to call it about a building backup. A diagnosis is for the private lateral, not MSD’s public sewer.',
      image: slots.problems[3],
    },
  ],
  // Six items: renders as two rows of three.
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
  // All relevant questions from the Florissant location page and the backup
  // diagnosis service page (see `florissantBackupFaq` above).
  faq: florissantBackupFaq,
  relatedPageIds: [
    id('loc-stl-florissant'),
    id('svc-recurring-sewer-backup-diagnosis'),
    id('svc-sewer-camera-inspection'),
    id('svc-sewer-cleaning-camera-inspection'),
  ],
  relatedTitle: 'Related pages',
  cta: {
    title: 'Request a sewer backup diagnosis in Florissant',
    body: 'Find out what a camera can document on your lateral before you approve work or apply to the City. Video and written findings when a camera is used.',
  },
}
