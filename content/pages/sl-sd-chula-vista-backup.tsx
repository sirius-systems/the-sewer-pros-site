/**
 * Chula Vista, CA + Recurring Sewer Backup Diagnosis (`sl-chula-vista-backup`).
 *
 * Authority: CLAUDE.md §22, §24; docs/14-content-specification.md §43.
 * Shape and quality bar: `sl-sd-city-backup.tsx`, `sl-lv-city-backup.tsx`.
 *
 * One local source (`chulaVistaContent`, the City of Chula Vista page) times
 * one service source (`svc-recurring-sewer-backup-diagnosis`, `v2`). Nothing
 * here is new research. The audit of every source section is in
 * `docs/source-reports/san-diego/sl-chula-vista-backup.md`.
 *
 * Body recipe (each section ties a City of Chula Vista fact to what a
 * diagnosis does or cannot):
 *   1. Whose backup is it - the City's stop-all-water-use instruction and the
 *      "does it stop when the water is off" test, Public Works vs. owner's
 *      lateral from the first foot, vs. what footage can establish
 *   2. Grease, roots and a cleaning that pushes debris - the City's named
 *      causes and its warning about private-lateral cleaning, vs. the named
 *      causes of a repeat backup and what cleaning does not repair
 *   3. The 48-hour stoppage rule - the policy's camera-finding, notice and
 *      street-tree proof steps vs. what a diagnosis records and cannot prove
 *   4. A policy, not a grant - none found, what the policy does not cover, the
 *      permit before repair, vs. "does not repair" and the second-opinion path
 *
 * ⚠ The Chula Vista location page states NO housing-age figure and says the
 * system's age is not stated, so none is given. CITY NUMBERS ARE THE CITY'S.
 * No company phone, office, price, offer, emergency claim, response time or
 * guarantee appears in the body copy. The service page's cost and same-day FAQ
 * answers (DEC-088 wording) are carried as published, per the owner's
 * 2026-10-05 direction (DEC-139). Council Policy 570-01 is never called a
 * grant, and nothing says our footage satisfies it.
 */

import type { PageId, ProcessContent, ServiceLocationPageContent } from '@/types'
import { chulaVistaContent } from './san-diego-chula-vista'
import { serviceContent } from './services'
import { mergeRelevantFaqs, pageImageSlots } from './service-location-shared'
import { inclusions, problems, shots } from './sl-blocks/recurring-sewer-backup-diagnosis'

const id = (value: string): PageId => value as PageId

// Alt text stays neutral: no place-specific photo is claimed.
const slots = pageImageSlots('sl-chula-vista-backup', {
  hero: {
    alt: 'Technician at a cleanout beside a home',
    shot: 'Technician at an exterior cleanout of a residential property, camera monitor in frame, nothing graphic',
  },
  problems: shots,
})

const v2 = serviceContent[id('svc-recurring-sewer-backup-diagnosis')]?.v2
if (v2 === undefined || chulaVistaContent.faq === undefined) {
  throw new Error('sl-chula-vista-backup: source content is missing')
}

/**
 * Every question from the Chula Vista location page and the backup diagnosis
 * service page, minus the two named here.
 */
const chulaVistaBackupFaq = mergeRelevantFaqs(
  chulaVistaContent.faq,
  v2.faq,
  [
    // A correction about which agency serves Chula Vista; no tie to backups.
    'Is Chula Vista served by CVSan or a separate sanitation district?',
    // Location page: a camera question the service page answers in full
    // ("What can a sewer camera see?").
    'What does a sewer camera inspection show?',
  ],
  'In Chula Vista',
)

const steps: ProcessContent[] = (v2.process?.steps ?? []).map((step) => ({
  title: step.title,
  description: typeof step.description === 'string' ? step.description : undefined,
}))

export const chulaVistaBackupContent: ServiceLocationPageContent = {
  seoTitle: 'Recurring Sewer Backup Diagnosis in Chula Vista, CA',
  metaDescription:
    'Recurring sewer backup diagnosis in Chula Vista, CA. City policy makes the lateral yours from the first foot off the public sewer. See what a camera finds.',
  serviceDescription:
    'Recurring sewer backup diagnosis is the process of inspecting the accessible sewer line to identify visible conditions that may cause repeated wastewater backups, for properties in Chula Vista, California. It generally combines a camera inspection, cleaning when needed, and written findings.',
  heroImage: slots.hero,
  ctaImage: slots.cta,
  sources: chulaVistaContent.sources,
  hero: {
    eyebrow: 'Chula Vista, CA',
    title: 'Recurring Sewer Backup Diagnosis in Chula Vista',
    intro: (
      <p>
        In Chula Vista, the City&rsquo;s written sewer policy makes the owner responsible for the
        lateral from the first foot off the public sewer to the building, and it reimburses
        reasonable costs only for a few stoppage cases when City staff agree. When a backup keeps
        coming back, a diagnosis documents what a camera can see inside the accessible line, with
        cleaning first when something blocks the view, so you know what you are dealing with before
        you approve work.
      </p>
    ),
  },
  body: (
    <>
      <h2>A repeat backup: the City&rsquo;s sewer, or your lateral?</h2>
      <p>
        The City of Chula Vista says to stop all water use first, including sinks, toilets, showers
        and laundry. If the sewage stops when the water is off, its brochure points to a licensed
        plumber or sewer cleaning contractor. If it keeps backing up, or reaches a street or storm
        drain, call Public Works Operations at 619-397-6000 (the City&rsquo;s number, not ours).
      </p>
      <p>
        Council Policy 570-01 makes the owner responsible for the lateral from the first foot off
        the public sewer to the building. A diagnosis documents what is visible in the part of the
        line the camera reached. Those findings apply only to the segment inspected and do not by
        themselves establish responsibility.
      </p>

      <h2>Grease, roots and a cleaning that can move debris</h2>
      <p>
        The City says grease is the most common cause of pipe blockages and that roots enter a
        lateral through cracked or broken pipe. It also warns that cleaning a private lateral can
        push debris, such as cut root balls and grease, into the public sewer, where it can cause a
        blockage.
      </p>
      <p>
        Cleaning removes roots and grease, but it does not repair the opening a root came through, a
        sag, or a damaged joint, and without a camera you cannot tell which returned.
      </p>

      <h2>The policy&rsquo;s 48-hour rule starts with a camera finding</h2>
      <p>
        The policy says a licensed plumber determines the location of a stoppage with a camera. If
        it is in the public sewer, in the first foot of the lateral, or caused by a City street
        tree, the owner notifies the City within 48 hours, and for a street tree proves the cause by
        excavating the root or with a certified arborist&rsquo;s written confirmation of a root
        sample.
      </p>
      <p>
        The footage records where along the line a condition sits, measured from where the camera
        entered. It does not establish where the first foot begins, and we make no claim that our
        findings meet the policy&rsquo;s conditions.
      </p>

      <h2>A policy for some stoppages, not a grant, so get the evidence first</h2>
      <p>
        We did not find a City lateral repair, replacement, grant or reimbursement program for
        failing laterals. That is &ldquo;none found&rdquo;, not a statement that none exists. The
        policy does not cover stoppages elsewhere in the lateral, and it does not say how long staff
        review takes. Confirm the current text with Public Works at 619-397-6000, since the posted
        copy shows a 2014 revision with no resolution number.
      </p>
      <p>
        A diagnosis does not repair anything, and The Sewer Pros does not sell repair or
        replacement. The City says repair or replacement of a lateral needs a City permit before
        work begins. If the footage shows a significant condition, further evaluation may be
        appropriate outside our cleaning and diagnostic scope. Keep the video and compare more than
        one written estimate.
      </p>
    </>
  ),
  problems: [
    ...problems.map((p, i) => ({ ...p, image: slots.problems[i] })),
    {
      title: 'Sewage reaching a street or storm drain',
      description:
        'The City asks you to call Public Works Operations at 619-397-6000 immediately if sewage from your property reaches a street, gutter or storm drain, and Chula Vista Police at 619-691-5151 after hours. Those are the City’s numbers, not ours. A diagnosis is for the lateral on your property, not the City’s sewer.',
      image: slots.problems[3],
    },
  ],
  // Six items: renders as two rows of three.
  inclusions,
  process: steps,
  coverage: {
    title: 'Other San Diego area locations',
    intro:
      'This page covers the City of Chula Vista. Sewer authorities and lateral rules differ across San Diego County, so use the page for your address.',
    pageIds: [
      id('loc-sd-san-diego'),
      id('loc-sd-san-marcos'),
      id('loc-sd-carlsbad'),
      id('loc-sd-escondido'),
      id('loc-sd-oceanside'),
      id('loc-sd-mission-valley'),
    ],
    availabilityStatement: 'Chula Vista is a service area, not an office location.',
  },
  // All relevant questions from the Chula Vista location page and the backup
  // diagnosis service page (see `chulaVistaBackupFaq` above).
  faq: chulaVistaBackupFaq,
  relatedPageIds: [
    id('loc-sd-chula-vista'),
    id('svc-recurring-sewer-backup-diagnosis'),
    id('svc-sewer-camera-inspection'),
    id('svc-sewer-cleaning-camera-inspection'),
  ],
  relatedTitle: 'Related pages',
  cta: {
    title: 'Request a sewer backup diagnosis in Chula Vista',
    body: 'Find out what a camera can document on your lateral before you approve work. Video and written findings when a camera is used.',
  },
}
