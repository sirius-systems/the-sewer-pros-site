/**
 * Ballwin, MO + Recurring Sewer Backup Diagnosis (`sl-ballwin-backup`).
 *
 * Authority: CLAUDE.md §22, §24; docs/14-content-specification.md §43.
 * Shape and quality bar: `sl-lv-city-backup.tsx`.
 *
 * One local source (`ballwinContent`, `loc-stl-ballwin`) times one service
 * source (`svc-recurring-sewer-backup-diagnosis`, `v2`). Nothing here is new
 * research. Body recipe (each section ties a Ballwin fact to what a diagnosis
 * does or cannot):
 *   1. Responsibility - MSD's main and its building-backup inspection vs. the
 *      owner's lateral and connection, vs. what footage can establish
 *   2. Who to call - MSD urgent reports, the City's Inspections and Public
 *      Works, and MSD's Valley Drive project vs. where a diagnosis fits
 *   3. Clay laterals and a 1976 median vs. the named causes of a repeat backup
 *   4. The City program - roots more than once a year, the documentation it
 *      asks for, no payment for video or cabling vs. "does not repair"
 *
 * ⚠ MSD, CITY AND DOLLAR NUMBERS ARE THEIRS, not ours. No company phone,
 * office, price, offer, emergency claim, response time or guarantee appears in
 * the body copy. The service page's cost and same-day FAQ answers (DEC-088
 * wording) are carried as published, per the owner's 2026-10-05 direction
 * (DEC-139). Ballwin facts only: nothing from another St. Louis municipality
 * or from MSD's St. Louis City system is carried over.
 */

import type { PageId, ProcessContent, ServiceLocationPageContent } from '@/types'
import { ballwinContent } from './st-louis-ballwin'
import { serviceContent } from './services'
import { mergeRelevantFaqs, pageImageSlots } from './service-location-shared'
import { inclusions, problems, shots } from './sl-blocks/recurring-sewer-backup-diagnosis'

const id = (value: string): PageId => value as PageId

// Alt text stays neutral: the location page allows Ballwin wording only for a
// photo taken at a Ballwin-area property.
const slots = pageImageSlots('sl-ballwin-backup', {
  hero: {
    alt: 'Technician at a cleanout beside a home',
    shot: 'Technician at an exterior cleanout of a residential property, camera monitor in frame, nothing graphic',
  },
  problems: shots,
})

const v2 = serviceContent[id('svc-recurring-sewer-backup-diagnosis')]?.v2
if (v2 === undefined || ballwinContent.faq === undefined) {
  throw new Error('sl-ballwin-backup: source content is missing')
}

/**
 * Every question from the Ballwin location page and the backup diagnosis
 * service page, minus the one named here (reason in the source report).
 */
const ballwinBackupFaq = mergeRelevantFaqs(
  ballwinContent.faq,
  v2.faq,
  [
    // Location page: a camera question the service page answers in full
    // ("What can a sewer camera see?").
    'What does a sewer camera inspection show?',
  ],
  'In Ballwin',
)

const steps: ProcessContent[] = (v2.process?.steps ?? []).map((step) => ({
  title: step.title,
  description: typeof step.description === 'string' ? step.description : undefined,
}))

export const ballwinBackupContent: ServiceLocationPageContent = {
  seoTitle: 'Recurring Sewer Backup Diagnosis in Ballwin, MO',
  metaDescription:
    'Recurring sewer backup diagnosis in Ballwin, MO. MSD owns the main; the lateral is the owner’s. See what a camera can document.',
  serviceDescription:
    'Recurring sewer backup diagnosis is the process of inspecting the accessible sewer line to identify visible conditions that may cause repeated wastewater backups, for properties in Ballwin, Missouri. It generally combines a camera inspection, cleaning when needed, and written findings.',
  heroImage: slots.hero,
  ctaImage: slots.cta,
  sources: ballwinContent.sources,
  hero: {
    eyebrow: 'Ballwin, MO',
    title: 'Recurring Sewer Backup Diagnosis in Ballwin',
    intro: (
      <p>
        In Ballwin, MSD owns and maintains the public sewer main, and the lateral that connects your
        building to it, including its connection, is private property. When a backup keeps coming
        back, a diagnosis documents what a camera can see inside the accessible line, with cleaning
        first when something blocks the view, so you know what you are dealing with before you
        approve work or apply to the City&rsquo;s lateral program.
      </p>
    ),
  },
  body: (
    <>
      <h2>A repeat backup: MSD&rsquo;s main or your lateral?</h2>
      <p>
        MSD owns and maintains the public sewer main in Ballwin. For a building backup, MSD tells
        customers to call it so it can inspect and see whether the situation qualifies for its
        limited assistance program. On your side, MSD says the lateral line and its connection to
        the public sewer are private property, and the owner is responsible for maintaining and
        repairing them.
      </p>
      <p>
        A diagnosis documents what is visible in the part of the line the camera reached. Those
        findings apply only to the segment inspected and do not by themselves establish
        responsibility. We did not find a published rule on who owns the part of a lateral under the
        street, so we repeat only MSD&rsquo;s general statement.
      </p>

      <h2>During a backup: MSD, the City, and where a diagnosis fits</h2>
      <p>
        MSD lists raw sewage inside or outside a house, missing manhole covers and flooded streets
        as urgent reports, and its building backup line is (314) 768-6260. For the City&rsquo;s
        lateral program, call the Ballwin Inspections Department at (636) 227-2129 (MSD&rsquo;s and
        the City&rsquo;s numbers, not ours).
      </p>
      <p>
        In Ballwin and Clarkson Valley, MSD describes its Valley Drive Sanitary Relief Phase III
        project as replacing about 5,500 feet of undersized sewer to reduce basement backups when
        sewers are overloaded in intense rainfall. Its schedule is tentative, so check MSD for
        status. That is the public sewer. A diagnosis does not replace calling MSD, and it tells you
        about your own lateral, which a public project does not.
      </p>

      <h2>Older clay laterals, a 1976 median, and the usual causes of a repeat backup</h2>
      <p>
        Ballwin says most older sewer laterals in the city are clay pipe, which can crack, break,
        separate at joints and let roots in while the line still works normally. The median year
        built is 1976, according to the U.S. Census Bureau&rsquo;s American Community Survey
        (2019-2023 5-year estimates, City of Ballwin as a whole).
      </p>
      <p>
        Public utility guidance names roots, grease, wipes and other debris, sags, cracks, separated
        joints, defective connections and collapse among the causes of repeat backups. Which one
        applies to your line cannot be known without looking.
      </p>

      <h2>The City program: roots more than once a year, and the evidence it asks for</h2>
      <p>
        Ballwin&rsquo;s Sewer Lateral Repair Program treats roots that need clearing more than once
        a year as a covered repair, and roots that clearing once a year or less can control as
        normal maintenance. It asks applicants to document a structural problem that cabling cannot
        permanently correct, or that backups will likely continue. It does not pay for a video of
        the lateral or for cabling (the City&rsquo;s terms, not ours).
      </p>
      <p>
        A diagnosis gives you your own recorded evidence of the accessible line. Ask the Inspections
        Department what documentation it accepts, because eligibility is the City&rsquo;s decision.
        A diagnosis does not repair anything, and The Sewer Pros does not sell repair or
        replacement. If the footage shows a significant condition, further evaluation may be
        appropriate outside our cleaning and diagnostic scope. Keep the video and compare more than
        one written estimate.
      </p>
    </>
  ),
  problems: [
    ...problems.map((p, i) => ({ ...p, image: slots.problems[i] })),
    {
      title: 'A building backup MSD should hear about',
      description:
        'MSD tells customers with a building backup to call it so it can inspect and see whether the situation qualifies for its limited assistance program. A diagnosis is for the lateral on your property, not the public main.',
      image: slots.problems[3],
    },
  ],
  // Six items: renders as two rows of three.
  inclusions,
  process: steps,
  coverage: {
    title: 'Other St. Louis area locations',
    intro:
      'This page covers Ballwin. Sewer agencies and lateral rules differ from place to place, so use the page for your address.',
    pageIds: [
      id('loc-stl-st-louis-city'),
      id('loc-stl-chesterfield'),
      id('loc-stl-st-charles'),
      id('loc-stl-florissant'),
    ],
    availabilityStatement: 'Ballwin is a service area, not an office location.',
  },
  // All relevant questions from the Ballwin location page and the backup
  // diagnosis service page (see `ballwinBackupFaq` above).
  faq: ballwinBackupFaq,
  relatedPageIds: [
    id('loc-stl-ballwin'),
    id('svc-recurring-sewer-backup-diagnosis'),
    id('svc-sewer-camera-inspection'),
    id('svc-sewer-cleaning-camera-inspection'),
  ],
  relatedTitle: 'Related pages',
  cta: {
    title: 'Request a sewer backup diagnosis in Ballwin',
    body: 'Find out what a camera can document on your lateral before you approve work. Video and written findings when a camera is used.',
  },
}
