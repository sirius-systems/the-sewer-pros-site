/**
 * Henderson, NV + Recurring Sewer Backup Diagnosis (`sl-henderson-backup`).
 *
 * Authority: CLAUDE.md §22, §24; docs/14-content-specification.md §43.
 * Shape and quality bar: the `sl-henderson-camera` pilot in
 * `las-vegas-service-location.tsx`.
 *
 * One local source (`hendersonContent`, the City of Henderson page) times one
 * service source (`svc-recurring-sewer-backup-diagnosis`, `v2`). Nothing here
 * is new research. The audit of every source section is in
 * `docs/source-reports/henderson/sl-henderson-backup.md`.
 *
 * Body recipe (each card ties a Henderson fact to what a diagnosis does or cannot):
 *   1. Responsibility - City main vs. owner lateral, vs. what footage can establish
 *   2. Who to call - City emergency and portal contacts, vs. where a diagnosis fits
 *   3. Housing age - Census year built, vs. the named causes of a repeat backup
 *   4. No City program - none found, vs. "does not repair" and the second-opinion path
 *
 * ⚠ CITY NUMBERS ARE THE CITY'S. No company phone, office, price, offer,
 * same-day or emergency claim, response time or guarantee appears. The service
 * page's cost and same-day answers (DEC-088 wording) are deliberately NOT
 * carried here; see the source report.
 */

import type { PageId, ProcessContent, ServiceLocationPageContent } from '@/types'
import { hendersonContent } from './las-vegas-henderson'
import { serviceContent } from './services'
import { mergeRelevantFaqs, pageImageSlots } from './service-location-shared'
import { inclusions, problems, shots } from './sl-blocks/recurring-sewer-backup-diagnosis'

const id = (value: string): PageId => value as PageId

const slots = pageImageSlots('sl-henderson-backup', {
  hero: {
    alt: 'Technician at a cleanout beside a Henderson home',
    shot: 'Technician at an exterior cleanout of a residential property, camera monitor in frame, nothing graphic',
  },
  problems: shots,
})

const v2 = serviceContent[id('svc-recurring-sewer-backup-diagnosis')]?.v2
if (v2 === undefined || hendersonContent.faq === undefined) {
  throw new Error('sl-henderson-backup: source content is missing')
}

/**
 * Every question from the Henderson location page and the backup diagnosis
 * service page, minus the ones named here (reasons in the source report).
 */
const hendersonBackupFaq = mergeRelevantFaqs(
  hendersonContent.faq,
  v2.faq,
  [
    // Location page: a camera question the service page answers in full
    // ("What can a sewer camera see?").
    'What does a sewer camera inspection show?',
    // Location page: utility account transfer, unrelated to a backup.
    'How do I transfer water and sewer service when I buy a home in Henderson?',
    // Service page: carries the DEC-088 free-estimate wording, scoped to the
    // service page and the Las Vegas market has no owner-confirmed equivalent.
    'How long does it take, and how much does it cost?',
    // Service page: DEC-088 same-day wording, scoped the same way.
    'Can you come the same day, and is this emergency service?',
  ],
  'In Henderson',
)

const steps: ProcessContent[] = (v2.process?.steps ?? []).map((step) => ({
  title: step.title,
  description: typeof step.description === 'string' ? step.description : undefined,
}))

export const hendersonBackupContent: ServiceLocationPageContent = {
  seoTitle: 'Recurring Sewer Backup Diagnosis in Henderson, NV',
  metaDescription:
    'Recurring sewer backup diagnosis in Henderson, NV. The City cleans its main; the lateral from the connection is yours. See what a camera can document on it.',
  serviceDescription:
    'Recurring sewer backup diagnosis is the process of inspecting the accessible sewer line to identify visible conditions that may cause repeated wastewater backups, for properties in the City of Henderson, Nevada. It generally combines a camera inspection, cleaning when needed, and written findings.',
  heroImage: slots.hero,
  ctaImage: slots.cta,
  hero: {
    eyebrow: 'Henderson, NV',
    title: 'Recurring Sewer Backup Diagnosis in Henderson',
    intro: (
      <p>
        In the City of Henderson, the City says it cleans blockages in its own
        sewer main, and that the lateral is the owner&rsquo;s from the connection in
        the street to the home. When a backup keeps coming back, a diagnosis
        documents what a camera can see inside the accessible line, with cleaning
        first when something blocks the view, so you know what you are dealing with
        before you approve work.
      </p>
    ),
  },
  body: (
    <>
      <h2>A repeat backup: the City&rsquo;s main or your lateral?</h2>
      <p>
        The City says it maintains and repairs its sewer main up to your sewer
        service connection, including cleaning blockages, and pays cleanup and
        repair costs, including street or driveway damage, if a blockage occurs in
        its main. On your side of that connection, the City says you are
        responsible for repairs and all associated costs.
      </p>
      <p>
        A diagnosis documents what is visible in the part of the line the camera
        reached. Those findings apply only to the segment inspected and do not by
        themselves establish responsibility, and the footage does not establish
        where the connection to the City main is. Ask the City how its rule applies
        to your address.
      </p>

      <h2>During a backup: the City&rsquo;s contacts, and where a diagnosis fits</h2>
      <p>
        To report a sewer emergency, the City says to call its 24-hour call center
        at 702-267-5900 (the City&rsquo;s number, not ours). For a non-emergency
        water, sewer or drainage concern, the City points to Contact Henderson, its
        service-request portal. We did not find a City sewage-backup cleanup or
        containment procedure on the pages we reviewed.
      </p>
      <p>
        A diagnosis does not replace reporting an emergency to the City. It
        documents the accessible line, and it is what you bring when the City or a
        contractor points to your lateral.
      </p>

      <h2>Most Henderson homes are newer, so the year built will not explain a backup</h2>
      <p>
        Henderson&rsquo;s median year built is 2001, according to the U.S. Census
        Bureau&rsquo;s American Community Survey (2020-2024 5-year estimates,
        Henderson city), and our arithmetic on the Census rows puts 82.1 percent of
        housing units at 1990 or later. The year built does not tell you the
        condition or material of a lateral, which can be repaired, rerouted or
        replaced after the house is built.
      </p>
      <p>
        Public utility guidance names grease, wipes and other debris, roots, sags,
        cracks, separated joints, defective connections and collapse among the
        causes of repeat backups. Which one applies to your line cannot be known
        without looking, and more than one can be present.
      </p>

      <h2>No City program to pay for it, so get the evidence first</h2>
      <p>
        We found no City-run lateral repair, grant or reimbursement program on the
        City pages we reviewed. That is &ldquo;none found&rdquo;, not a statement
        that none exists. The City says you pay for repairs and cleanup on your
        side of the connection.
      </p>
      <p>
        A diagnosis does not repair anything, and The Sewer Pros does not sell
        repair or replacement. If the footage shows a significant condition,
        further evaluation may be appropriate outside our cleaning and diagnostic
        scope. Keep the video, get multiple written estimates, and ask why they
        differ.
      </p>
    </>
  ),
  problems: [
    ...problems.map((p, i) => ({ ...p, image: slots.problems[i] })),
    {
      title: 'Buying or selling a Henderson home with a backup history',
      description:
        'We found no City rule requiring a lateral inspection, certification or seller disclosure when a home is sold. That is none found, and it does not address state disclosure law. Retained video can be useful in a sale, depending on local rules.',
      image: slots.problems[3],
    },
  ],
  // Six items: renders as two rows of three.
  inclusions,
  process: steps,
  coverage: {
    title: 'Other Las Vegas Valley areas',
    intro:
      'This page covers the City of Henderson. Sewer agencies and lateral rules differ across the Las Vegas Valley, so use the page for your address.',
    pageIds: [
      id('loc-lv-las-vegas'),
      id('loc-lv-north-las-vegas'),
      id('loc-lv-summerlin'),
    ],
    availabilityStatement: 'Henderson is a service area, not an office location.',
  },
  // All relevant questions from the Henderson location page and the backup
  // diagnosis service page (see `hendersonBackupFaq` above).
  faq: hendersonBackupFaq,
  relatedPageIds: [
    id('loc-lv-henderson'),
    id('svc-recurring-sewer-backup-diagnosis'),
    id('svc-sewer-camera-inspection'),
    id('svc-sewer-cleaning-camera-inspection'),
  ],
  relatedTitle: 'Related pages',
  cta: {
    title: 'Request a sewer backup diagnosis in Henderson',
    body: 'Find out what a camera can document on your lateral before you approve work. Video and written findings when a camera is used.',
  },
}
