/**
 * City of North Las Vegas, NV + Recurring Sewer Backup Diagnosis (`sl-nlv-backup`).
 *
 * Authority: CLAUDE.md §22, §24; docs/14-content-specification.md §43.
 * Model: `sl-lv-city-backup.tsx` (approved).
 *
 * One local source (`northLasVegasContent`, the City of North Las Vegas page) times
 * one service source (`svc-recurring-sewer-backup-diagnosis`, `v2`). Nothing here
 * is new research. The audit of every source section is in
 * `docs/source-reports/north-las-vegas/sl-nlv-backup.md`.
 *
 * Body recipe (each section ties a North Las Vegas fact to what a diagnosis does
 * or cannot):
 *   1. Responsibility - the City's separate blockage and breakage statements vs.
 *      what footage can establish
 *   2. City-side finding - the plumber-video review path and the Utilities
 *      Department number, no emergency or after-hours line, vs. where a
 *      diagnosis fits
 *   3. What the City pages leave unsaid (system type, age, local conditions) vs.
 *      the named causes of a repeat backup
 *   4. No City program, insurance and the optional plan vs. "does not repair"
 *      and the second-opinion path
 *
 * ⚠ The North Las Vegas location page has NO housing-age section, so no
 * year-built figure appears here.
 * ⚠ THE CITY'S BLOCKAGE AND BREAKAGE STATEMENTS ARE SHOWN AS WORDED AND NEVER
 * RECONCILED.
 * ⚠ CITY NUMBER IS THE CITY'S. No company phone, office, price, offer,
 * emergency claim, response time or guarantee appears in the body copy. The
 * service page's cost and same-day FAQ answers (DEC-088 wording) are carried as
 * published (DEC-139).
 */

import type { PageId, ProcessContent, ServiceLocationPageContent } from '@/types'
import { northLasVegasContent } from './las-vegas-north-las-vegas'
import { serviceContent } from './services'
import { mergeRelevantFaqs, pageImageSlots } from './service-location-shared'
import { inclusions, problems, shots } from './sl-blocks/recurring-sewer-backup-diagnosis'

const id = (value: string): PageId => value as PageId

// Alt text stays neutral: the location page allows North Las Vegas wording only
// for a photo taken at a North Las Vegas-area property.
const slots = pageImageSlots('sl-nlv-backup', {
  hero: {
    alt: 'Technician at a cleanout beside a home',
    shot: 'Technician at an exterior cleanout of a residential property, camera monitor in frame, nothing graphic',
  },
  problems: shots,
})

const v2 = serviceContent[id('svc-recurring-sewer-backup-diagnosis')]?.v2
if (v2 === undefined || northLasVegasContent.faq === undefined) {
  throw new Error('sl-nlv-backup: source content is missing')
}

/**
 * Every question from the North Las Vegas location page and the backup
 * diagnosis service page, minus the two named here.
 */
const northLasVegasBackupFaq = mergeRelevantFaqs(
  northLasVegasContent.faq,
  v2.faq,
  [
    // Location page: a camera question the service page answers in full
    // ("What can a sewer camera see?").
    'What does a sewer camera inspection show?',
    // Location page: about starting utility service on a purchase, not a backup.
    'How do I start water and sewer service when I buy a home in North Las Vegas?',
  ],
  'In North Las Vegas',
)

const steps: ProcessContent[] = (v2.process?.steps ?? []).map((step) => ({
  title: step.title,
  description: typeof step.description === 'string' ? step.description : undefined,
}))

export const northLasVegasBackupContent: ServiceLocationPageContent = {
  seoTitle: 'Recurring Sewer Backup Diagnosis in North Las Vegas, NV',
  metaDescription:
    'Recurring sewer backup diagnosis in North Las Vegas, NV. The City words blockages and breaks differently. See what a camera can document on your lateral.',
  serviceDescription:
    'Recurring sewer backup diagnosis is the process of inspecting the accessible sewer line to identify visible conditions that may cause repeated wastewater backups, for properties in the City of North Las Vegas, Nevada. It generally combines a camera inspection, cleaning when needed, and written findings.',
  heroImage: slots.hero,
  ctaImage: slots.cta,
  sources: northLasVegasContent.sources,
  hero: {
    eyebrow: 'North Las Vegas, NV',
    title: 'Recurring Sewer Backup Diagnosis in North Las Vegas',
    intro: (
      <p>
        In the City of North Las Vegas, the City says the homeowner is responsible for a blockage
        throughout the entire pipe until the connection to the City&rsquo;s main. When a backup
        keeps coming back, a diagnosis documents what a camera can see inside the accessible line,
        with cleaning first when something blocks the view, so you know what you are dealing with
        before you approve work.
      </p>
    ),
  },
  body: (
    <>
      <h2>A repeat backup: your whole lateral, or the City side?</h2>
      <p>
        The City of North Las Vegas words a blockage and a breakage differently. For a blockage, it
        says the homeowner is responsible throughout the entire pipe until the connection to the
        City&rsquo;s main. For a breakage, it says the homeowner is responsible until the point
        where the sewer line crosses the boundary of the property.
      </p>
      <p>
        We show both statements as the City words them and do not reconcile them. A diagnosis
        documents what is visible in the part of the line the camera reached and records where along
        it a condition sits. Those findings apply only to the segment inspected and do not by
        themselves establish responsibility, the connection or the property boundary.
      </p>

      <h2>If a plumber says it is on the City side</h2>
      <p>
        The City says that if a plumber has inspected the line and determined a blockage or
        breakage is on the City side, video evidence may be submitted to its Utilities Department
        for review. We did not find how the video is submitted or what the City does afterward, and
        we make no claim about either.
      </p>
      <p>
        The City&rsquo;s utility portal lists 702-633-1484 for the Utilities Department (the
        City&rsquo;s number, not ours). It is customer service and an online request, not a sewer
        emergency line, and we found no City sewer emergency line, after-hours number or published
        hours. A diagnosis does not replace calling the City. It gives you recorded footage to bring
        when a contractor or the City asks about your lateral.
      </p>

      <h2>The City pages cannot tell you why your line keeps backing up</h2>
      <p>
        The City pages we reviewed do not say whether the system is combined or separate, how old
        its mains are, or what recurring conditions occur locally. Only an inspection of your
        line can show its condition.
      </p>
      <p>
        Public utility guidance names grease, roots, wipes and other debris, sags, cracks, broken
        or separated joints, defective connections and collapse among the potential causes of a
        backup. Which one applies cannot be known without looking, and cleaning that restores flow
        does not by itself establish pipe-wall or joint condition.
      </p>

      <h2>No City program or insurance to lean on, so get the evidence first</h2>
      <p>
        We found no City-run lateral repair, grant or reimbursement program on the City pages we
        reviewed. That is &ldquo;none found&rdquo;, not a statement that none exists. The City says
        most basic homeowner&rsquo;s insurance policies do not cover service laterals, and it
        describes an optional plan from Service Line Warranties of America, a company separate
        from the City. We found no price or terms.
      </p>
      <p>
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
      title: 'A backup a plumber places on the City side',
      description:
        'The City says video evidence of a blockage or breakage on the City side may be submitted to its Utilities Department for review, and we did not find how. A diagnosis is for the lateral on your property and gives you footage. It does not establish where the City side begins.',
      image: slots.problems[3],
    },
  ],
  // Six items: renders as two rows of three.
  inclusions,
  process: steps,
  coverage: {
    title: 'Other Las Vegas Valley areas',
    intro:
      'This page covers North Las Vegas. Sewer agencies and lateral rules differ across the Las Vegas Valley, so use the page for your address.',
    pageIds: [id('loc-lv-las-vegas'), id('loc-lv-henderson'), id('loc-lv-summerlin')],
    availabilityStatement: 'North Las Vegas is a service area, not an office location.',
  },
  // All relevant questions from the North Las Vegas location page and the
  // backup diagnosis service page (see `northLasVegasBackupFaq` above).
  faq: northLasVegasBackupFaq,
  relatedPageIds: [
    id('loc-lv-north-las-vegas'),
    id('svc-recurring-sewer-backup-diagnosis'),
    id('svc-sewer-camera-inspection'),
    id('svc-sewer-cleaning-camera-inspection'),
  ],
  relatedTitle: 'Related pages',
  cta: {
    title: 'Request a sewer backup diagnosis in North Las Vegas',
    body: 'Find out what a camera can document on your lateral before you approve work. Video and written findings when a camera is used.',
  },
}
