/**
 * Escondido, CA + Recurring Sewer Backup Diagnosis (`sl-escondido-backup`).
 *
 * Authority: CLAUDE.md §22, §24; docs/14-content-specification.md §43.
 * Shape and quality bar: `sl-sd-chula-vista-backup.tsx`, `sl-lv-city-backup.tsx`.
 *
 * One local source (`escondidoContent`, the City of Escondido page) times one
 * service source (`svc-recurring-sewer-backup-diagnosis`, `v2`). Nothing here is
 * new research. The audit of every source section is in
 * `docs/source-reports/san-diego/sl-escondido-backup.md`.
 *
 * Body recipe (each section ties an Escondido fact to what a diagnosis does or
 * cannot):
 *   1. Whose backup is it - the City's free check of its main and "probably in
 *      the lateral" statement vs. footage that applies only to the segment
 *      inspected; which agency serves the address is not stated
 *   2. Call the City before cleaning - the Sewer System Management Plan sentence
 *      on debris pushed into the public line vs. clearing first when it blocks
 *      the view, and what cleaning does not repair
 *   3. The cleanout and the cost of verifying - 22-165(b), (c) and (f) vs. the
 *      cleanout as the usual entry point and what a recorded run documents
 *   4. No program found - none found, the City-caused-damage exception, the
 *      permit before repair vs. "does not repair" and the second-opinion path
 *
 * ⚠ Section 22-165 is quoted for at most nine words; the rest is paraphrase,
 * worded as `sl-escondido-cleaning` words it. The page never says the City pays
 * for damage, never says a grant exists, never says our footage satisfies the
 * code or subsection (f), and never says who may perform lateral repair. CITY
 * NUMBERS ARE THE CITY'S. No company phone, office, price, offer, emergency
 * claim or response time appears in the body copy. The service page's cost and
 * same-day FAQ answers (DEC-088 wording) are carried as published, per the
 * owner's 2026-10-05 direction (DEC-139).
 */

import type { PageId, ProcessContent, ServiceLocationPageContent } from '@/types'
import { escondidoContent } from './san-diego-escondido'
import { serviceContent } from './services'
import { mergeRelevantFaqs, pageImageSlots } from './service-location-shared'
import { inclusions, problems, shots } from './sl-blocks/recurring-sewer-backup-diagnosis'

const id = (value: string): PageId => value as PageId

// Alt text stays neutral: no place-specific photo is claimed.
const slots = pageImageSlots('sl-escondido-backup', {
  hero: {
    alt: 'Technician at a cleanout beside a home',
    shot: 'Technician at an exterior cleanout of a residential property, camera monitor in frame, nothing graphic',
  },
  problems: shots,
})

const v2 = serviceContent[id('svc-recurring-sewer-backup-diagnosis')]?.v2
if (v2 === undefined || escondidoContent.faq === undefined) {
  throw new Error('sl-escondido-backup: source content is missing')
}

/**
 * Every question from the Escondido location page and the backup diagnosis
 * service page, minus the one named here.
 */
const escondidoBackupFaq = mergeRelevantFaqs(
  escondidoContent.faq,
  v2.faq,
  [
    // Location page: a camera question the service page answers in full
    // ("What can a sewer camera see?").
    'What does a sewer camera inspection show?',
  ],
  'In Escondido',
)

const steps: ProcessContent[] = (v2.process?.steps ?? []).map((step) => ({
  title: step.title,
  description: typeof step.description === 'string' ? step.description : undefined,
}))

export const escondidoBackupContent: ServiceLocationPageContent = {
  seoTitle: 'Recurring Sewer Backup Diagnosis in Escondido, CA',
  metaDescription:
    'Recurring sewer backup diagnosis in Escondido, CA. Municipal Code 22-165 puts the lateral on the owner. See what a camera can find before you approve work.',
  serviceDescription:
    'Recurring sewer backup diagnosis is the process of inspecting the accessible sewer line to identify visible conditions that may cause repeated wastewater backups, for properties in Escondido, California. It generally combines a camera inspection, cleaning when needed, and written findings.',
  heroImage: slots.hero,
  ctaImage: slots.cta,
  sources: escondidoContent.sources,
  hero: {
    eyebrow: 'Escondido, CA',
    title: 'Recurring Sewer Backup Diagnosis in Escondido',
    intro: (
      <p>
        In Escondido, section 22-165 of the Municipal Code puts the sewer lateral on the property
        owner, up to and including the connection to the City&rsquo;s main, and the City&rsquo;s FAQ
        says a clear main probably points to the lateral. When a backup keeps coming back, a
        diagnosis documents what a camera can see inside the accessible line, with cleaning first
        when something blocks the view, so you know what you are dealing with before you approve
        work.
      </p>
    ),
  },
  body: (
    <>
      <h2>A repeat backup: the City&rsquo;s main, or your lateral?</h2>
      <p>
        If you cannot tell, the City of Escondido&rsquo;s FAQ says to call City Public Works at
        (760) 839-4668, which it lists as available 24 hours a day (the City&rsquo;s number, not
        ours). The FAQ says the City will inspect the public main free of charge, and that if the
        main is clear the owner is told the blockage is probably in the lateral.
      </p>
      <p>
        A diagnosis documents what is visible in the part of the line the camera reached. Those
        findings apply only to the segment inspected and do not by themselves establish
        responsibility. Parts of Escondido are served by Vallecitos Water District and some
        properties are on septic, so this page does not say who serves your address.
      </p>

      <h2>The City asks to be called before cleaning, and cleaning does not repair</h2>
      <p>
        The City&rsquo;s Sewer System Management Plan says its public education literature stresses
        the need to call the City before cleaning a private lateral, so the City can remove any
        debris that cleaning pushes into the public sewer line. That is the City&rsquo;s guidance,
        not a program and not a requirement to use our services.
      </p>
      <p>
        A camera cannot see under water or through a blockage, so cleaning may come first. It does
        not repair the opening a root came through, a sag, or a damaged joint.
      </p>

      <h2>The code makes the cleanout and the cost of verifying yours</h2>
      <p>
        Section 22-165(b) makes the owner responsible for locating, exposing and maintaining the
        property line cleanout, so the lateral can be inspected, cleaned and cleared. A cleanout is
        the usual entry point. Subsection (c) puts the cost of verifying that the lateral is broken
        or damaged on the owner, along with all maintenance, repair, replacement and cleaning costs.
      </p>
      <p>
        After a maintenance-related violation or an illegal discharge, subsection (f) says the owner
        or management company must have the lateral cleaned and televised by a licensed plumber and
        give the City a copy of the video. That is the code&rsquo;s condition. We do not say our
        footage meets it.
      </p>

      <h2>No program found, and a diagnosis does not decide the repair</h2>
      <p>
        We found no City of Escondido lateral repair, replacement, grant or reimbursement program.
        That is &ldquo;none found&rdquo;, not a statement that none exists. The City may be
        responsible only for damage the owner proves came from work by the City or a contractor
        working for the City, shown by a video inspection with a City employee present, and the City
        decides when and where. Contact Public Works before you pay for work you plan to use in a
        claim.
      </p>
      <p>
        The City says a repair permit is required before any lateral repair begins. A diagnosis does
        not repair anything, and The Sewer Pros does not sell repair or replacement. Keep the video
        and compare more than one written estimate.
      </p>
    </>
  ),
  problems: [
    ...problems.map((p, i) => ({ ...p, image: slots.problems[i] })),
    {
      title: 'Sewage at a manhole or in the street',
      description:
        'For an overflowing manhole or sewer line, the City’s wastewater page gives the Public Works number (760) 839-4668, says to call 911 for emergencies, and points to the City’s reporting app for non-emergency sewer reports. Those are the City’s instructions, not ours. A diagnosis is for the lateral on your property, not the City’s sewer.',
      image: slots.problems[3],
    },
  ],
  // Six items: renders as two rows of three.
  inclusions,
  process: steps,
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
  // All relevant questions from the Escondido location page and the backup
  // diagnosis service page (see `escondidoBackupFaq` above).
  faq: escondidoBackupFaq,
  relatedPageIds: [
    id('loc-sd-escondido'),
    id('svc-recurring-sewer-backup-diagnosis'),
    id('svc-sewer-camera-inspection'),
    id('svc-sewer-cleaning-camera-inspection'),
  ],
  relatedTitle: 'Related pages',
  cta: {
    title: 'Request a sewer backup diagnosis in Escondido',
    body: 'Find out what a camera can document on your lateral before you approve work. Video and written findings when a camera is used.',
  },
}
