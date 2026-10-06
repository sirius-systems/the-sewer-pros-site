/**
 * City of Las Vegas, NV + Recurring Sewer Backup Diagnosis (`sl-lv-city-backup`).
 *
 * Authority: CLAUDE.md §22, §24; docs/14-content-specification.md §43.
 * Shape and quality bar: `sl-henderson-backup.tsx`.
 *
 * One local source (`lasVegasCityContent`, the City of Las Vegas page) times one
 * service source (`svc-recurring-sewer-backup-diagnosis`, `v2`). Nothing here is
 * new research. The audit of every source section is in
 * `docs/source-reports/las-vegas-city/sl-lv-city-backup.md`.
 *
 * Body recipe (each section ties a City of Las Vegas fact to what a diagnosis does or cannot):
 *   1. Responsibility - City main stoppages vs. the owner's lateral to the
 *      connection (under the street too), vs. what footage can establish
 *   2. Who to call - Streets & Sanitation and Sanitary Sewer Engineering, no
 *      after-hours number published, vs. where a diagnosis fits
 *   3. Housing age - Census year built and the City's "aging system" mission,
 *      vs. the named causes of a repeat backup
 *   4. No City program - none found, optional private warranty, vs. "does not
 *      repair" and the second-opinion path
 *
 * ⚠ CITY NUMBERS ARE THE CITY'S. No company phone, office, price, offer,
 * emergency claim, response time or guarantee appears in the body copy. The
 * service page's cost and same-day FAQ answers (DEC-088 wording) are carried as
 * published, per the owner's 2026-10-05 direction (DEC-139).
 */

import type { PageId, ProcessContent, ServiceLocationPageContent } from '@/types'
import { lasVegasCityContent } from './las-vegas-las-vegas'
import { serviceContent } from './services'
import { mergeRelevantFaqs, pageImageSlots } from './service-location-shared'
import { inclusions, problems, shots } from './sl-blocks/recurring-sewer-backup-diagnosis'

const id = (value: string): PageId => value as PageId

// Alt text stays neutral: the location page allows Las Vegas wording only for a
// photo taken at a Las Vegas-area property.
const slots = pageImageSlots('sl-lv-city-backup', {
  hero: {
    alt: 'Technician at a cleanout beside a home',
    shot: 'Technician at an exterior cleanout of a residential property, camera monitor in frame, nothing graphic',
  },
  problems: shots,
})

const v2 = serviceContent[id('svc-recurring-sewer-backup-diagnosis')]?.v2
if (v2 === undefined || lasVegasCityContent.faq === undefined) {
  throw new Error('sl-lv-city-backup: source content is missing')
}

/**
 * Every question from the City of Las Vegas location page and the backup
 * diagnosis service page, minus the one named here (reason in the source report).
 */
const lasVegasBackupFaq = mergeRelevantFaqs(
  lasVegasCityContent.faq,
  v2.faq,
  [
    // Location page: a camera question the service page answers in full
    // ("What can a sewer camera see?").
    'What does a sewer camera inspection show?',
  ],
  'In Las Vegas',
)

const steps: ProcessContent[] = (v2.process?.steps ?? []).map((step) => ({
  title: step.title,
  description: typeof step.description === 'string' ? step.description : undefined,
}))

export const lasVegasCityBackupContent: ServiceLocationPageContent = {
  seoTitle: 'Recurring Sewer Backup Diagnosis in Las Vegas, NV',
  metaDescription:
    'Recurring sewer backup diagnosis in Las Vegas, NV. The City handles main stoppages; the lateral to the connection is yours. See what a camera can document.',
  serviceDescription:
    'Recurring sewer backup diagnosis is the process of inspecting the accessible sewer line to identify visible conditions that may cause repeated wastewater backups, for properties in the City of Las Vegas, Nevada. It generally combines a camera inspection, cleaning when needed, and written findings.',
  heroImage: slots.hero,
  ctaImage: slots.cta,
  sources: lasVegasCityContent.sources,
  hero: {
    eyebrow: 'Las Vegas, NV',
    title: 'Recurring Sewer Backup Diagnosis in Las Vegas',
    intro: (
      <p>
        In the City of Las Vegas, the City says it maintains the public sewer main and that owners
        maintain the private sewer lateral up to the point where it connects into that main. When a
        backup keeps coming back, a diagnosis documents what a camera can see inside the accessible
        line, with cleaning first when something blocks the view, so you know what you are dealing
        with before you approve work.
      </p>
    ),
  },
  body: (
    <>
      <h2>A repeat backup: the City&rsquo;s main or your lateral?</h2>
      <p>
        The City of Las Vegas says it maintains the public sewer main, and that a stoppage in the
        main affects multiple upstream properties and can overflow affected manholes. That is the
        City&rsquo;s to address. On your side, the City says private property owners maintain
        private sewer laterals up to the point where they connect into the main, and its sewer
        standards addenda say that includes any part in the public right-of-way.
      </p>
      <p>
        For a problem specific to your property, the City says you may need a contractor to
        investigate. A diagnosis documents what is visible in the part of the line the camera
        reached. Those findings apply only to the segment inspected and do not by themselves
        establish responsibility, and the footage does not establish where the connection to the
        City main is.
      </p>

      <h2>During a backup: the City&rsquo;s contacts, and where a diagnosis fits</h2>
      <p>
        For a stoppage in the City main that affects several upstream properties or overflows
        manholes, the City asks you to call its Streets &amp; Sanitation Division at 702-229-6227
        (the City&rsquo;s number, not ours). The City page we reviewed gives no hours for that line
        and no after-hours sewer number.
      </p>
      <p>
        A diagnosis does not replace calling the City about a main. It documents the accessible
        line on your property, and it is what you bring when the City or a contractor points to
        your lateral.
      </p>

      <h2>Most Las Vegas homes are 1990 or later, so the year built will not explain a backup</h2>
      <p>
        Las Vegas&rsquo;s median year built is 1994, according to the U.S. Census Bureau&rsquo;s
        American Community Survey (2020-2024 5-year estimates, Las Vegas city), and our arithmetic
        on the Census rows puts 61.3 percent of housing units at 1990 or later. The year built does not tell you the condition or material of a lateral, which
        can be repaired, rerouted or replaced after the house is built.
      </p>
      <p>
        Public utility guidance names grease, wipes and other debris, roots, sags, cracks,
        separated joints, defective connections and collapse among the causes of repeat backups.
        Which one applies to your line cannot be known without looking. City Engineering&rsquo;s
        reference to an aging collection system is its stated mission, not a finding about your
        street.
      </p>

      <h2>No City program to pay for it, so get the evidence first</h2>
      <p>
        We found no City-run lateral repair, grant or reimbursement program on the City pages we
        reviewed. That is &ldquo;none found&rdquo;, not a statement that none exists. The City
        promotes an optional warranty with Service Line Warranties of America, a private company.
        It is a paid product, not City assistance, and the City&rsquo;s page lists no price or
        terms.
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
      title: 'A backup that reaches several properties',
      description:
        'The City says a stoppage in its sewer main affects multiple upstream properties and can overflow manholes, and it asks you to call its Streets & Sanitation Division. A diagnosis is for the lateral on your property, not the main.',
      image: slots.problems[3],
    },
  ],
  // Six items: renders as two rows of three.
  inclusions,
  process: steps,
  coverage: {
    title: 'Other Las Vegas Valley areas',
    intro:
      'This page covers the City of Las Vegas. Sewer agencies and lateral rules differ across the Las Vegas Valley, so use the page for your address.',
    pageIds: [id('loc-lv-henderson'), id('loc-lv-north-las-vegas'), id('loc-lv-summerlin')],
    availabilityStatement: 'Las Vegas is a service area, not an office location.',
  },
  // All relevant questions from the City of Las Vegas location page and the
  // backup diagnosis service page (see `lasVegasBackupFaq` above).
  faq: lasVegasBackupFaq,
  relatedPageIds: [
    id('loc-lv-las-vegas'),
    id('svc-recurring-sewer-backup-diagnosis'),
    id('svc-sewer-camera-inspection'),
    id('svc-sewer-cleaning-camera-inspection'),
  ],
  relatedTitle: 'Related pages',
  cta: {
    title: 'Request a sewer backup diagnosis in Las Vegas',
    body: 'Find out what a camera can document on your lateral before you approve work. Video and written findings when a camera is used.',
  },
}
