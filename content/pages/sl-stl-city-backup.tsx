/**
 * St. Louis City, MO + Recurring Sewer Backup Diagnosis (`sl-stl-city-backup`).
 *
 * Authority: CLAUDE.md §22, §24; docs/14-content-specification.md §43.
 * Shape and quality bar: `sl-lv-city-backup.tsx`.
 *
 * One local source (`stLouisCityContent`, the St. Louis City page) times one
 * service source (`svc-recurring-sewer-backup-diagnosis`, `v2`). Nothing here is
 * new research. The audit of every source section is in
 * `docs/source-reports/st-louis/sl-stl-city-backup.md`.
 *
 * Body recipe (each section ties a St. Louis City fact to what a diagnosis does
 * or cannot):
 *   1. Responsibility - MSD's main and the private lateral (a common cause of
 *      backups, per MSD) vs. what footage can establish
 *   2. Who to call - MSD's report line, and where a diagnosis fits
 *   3. Combined sewers - MSD's rain, gutter and sump facts vs. the named causes
 *      of a repeat backup
 *   4. City program - covers severe damage, not clogs or roots; the plumber's
 *      video it asks for vs. an independent diagnosis; no repairs by us
 *
 * ⚠ MSD AND CITY NUMBERS ARE THEIRS. No company phone, office, price, offer,
 * emergency claim, response time or guarantee appears in the body copy. The
 * service page's cost and same-day FAQ answers (DEC-088 wording) are carried as
 * published (DEC-139). The "58 percent" figure and the program's dollar fee are
 * deliberately not used.
 */

import type {
  PageId,
  ProcessContent,
  ServiceLocationPageContent,
} from "@/types";
import { serviceContent } from "./services";
import { mergeRelevantFaqs, pageImageSlots } from "./service-location-shared";
import {
  inclusions,
  problems,
  shots,
} from "./sl-blocks/recurring-sewer-backup-diagnosis";
import { stLouisCityContent } from "./st-louis-city";

const id = (value: string): PageId => value as PageId;

// Alt text stays neutral: no place-specific photo is claimed.
const slots = pageImageSlots("sl-stl-city-backup", {
  hero: {
    alt: "Technician at a cleanout beside a home",
    shot: "Technician at an exterior cleanout of a residential property, camera monitor in frame, nothing graphic",
  },
  problems: shots,
});

const v2 = serviceContent[id("svc-recurring-sewer-backup-diagnosis")]?.v2;
if (v2 === undefined || stLouisCityContent.faq === undefined) {
  throw new Error("sl-stl-city-backup: source content is missing");
}

/**
 * Every question from the St. Louis City location page and the backup
 * diagnosis service page, minus the one named here (reason in the source report).
 */
const stLouisBackupFaq = mergeRelevantFaqs(
  stLouisCityContent.faq,
  v2.faq,
  [
    // Location page: a camera question the service page answers in full
    // ("What can a sewer camera see?").
    "What does a sewer camera inspection show?",
  ],
  "In St. Louis City",
);

const steps: ProcessContent[] = (v2.process?.steps ?? []).map((step) => ({
  title: step.title,
  description:
    typeof step.description === "string" ? step.description : undefined,
}));

export const stLouisCityBackupContent: ServiceLocationPageContent = {
  seoTitle: "Recurring Sewer Backup Diagnosis in St. Louis City, MO",
  metaDescription:
    "Recurring sewer backup diagnosis in St. Louis City, MO. MSD maintains the main; your lateral is private. See what a camera can document before you approve work.",
  serviceDescription:
    "Recurring sewer backup diagnosis is the process of inspecting the accessible sewer line to identify visible conditions that may cause repeated wastewater backups, for properties in St. Louis City, Missouri. It generally combines a camera inspection, cleaning when needed, and written findings.",
  heroImage: slots.hero,
  ctaImage: slots.cta,
  sources: stLouisCityContent.sources,
  hero: {
    eyebrow: "St. Louis City, MO",
    title: "Recurring Sewer Backup Diagnosis in St. Louis City",
    intro: (
      <p>
        In St. Louis City, MSD maintains the public sewer main, and the lateral
        from your building to it is private property, even under the street or
        alley. MSD names a blockage in that private lateral as a common cause of
        backup. When a backup keeps coming back, a diagnosis documents what a
        camera can see inside the accessible line, with cleaning first when
        something blocks the view, so you know what you are dealing with before
        you approve work.
      </p>
    ),
  },
  body: (
    <>
      <h2>A repeat backup: MSD&rsquo;s main or your lateral?</h2>
      <p>
        MSD says it maintains the public sewer main and repairs the public sewer
        if it caused a backup. MSD also identifies a blockage in the private
        lateral as a common cause of sewer backup, and says private lateral
        issues are not MSD issues. The lateral from your building to the main,
        including its connection, is private property and normally the
        owner&rsquo;s, even under the street or alley.
      </p>
      <p>
        A diagnosis documents what is visible in the part of the line the camera
        reached. Those findings apply only to the segment inspected and do not
        by themselves establish responsibility, and the footage does not
        establish where the connection to the main is.
      </p>

      <h2>During a backup: MSD first, then the footage</h2>
      <p>
        If sewage is backing up through a floor drain, you smell sewage outside,
        or you see an overflow or a missing manhole cover, MSD asks you to
        report it right away at (314) 768-6260 (MSD&rsquo;s number, not ours).
        MSD investigates whether the cause is the public sewer or your lateral.
      </p>
      <p>
        A diagnosis does not replace that call. It documents the accessible line
        on your property, and it is what you bring when MSD or a plumber points
        to your lateral.
      </p>

      <h2>Combined sewers and rain are one possible cause, not the only one</h2>
      <p>
        MSD says most of St. Louis City is served by combined sewers that can be
        overwhelmed in intense rain, which can cause wet-weather basement
        backups in affected areas. MSD also notes that many City buildings
        connect gutters, sump pumps and yard drains to the wastewater sewer.
        Those are system-level facts, not findings about your lateral.
      </p>
      <p>
        Public utility guidance names grease, wipes and other debris, roots,
        sags, cracks, separated joints, defective connections and collapse among
        the causes of repeat backups. Which one applies to your line cannot be
        known without looking. A camera cannot see under water, so a blocked
        line may need cleaning before it can be viewed.
      </p>

      <h2>
        The City program covers damage, not clogs, so get the evidence first
      </h2>
      <p>
        The City&rsquo;s Sewer Lateral Repair Program is aimed at severe damage
        under the public right-of-way that causes a cave-in or a backup into the
        home. The City says it does not cover clearing clogs or tree roots
        anywhere on the lateral. It asks for a licensed City plumber&rsquo;s
        statement and video, and the City decides eligibility, so an independent
        diagnosis does not replace that step.
      </p>
      <p>
        A diagnosis does not repair anything, and The Sewer Pros does not sell
        repair or replacement. If the footage shows a significant condition,
        further evaluation may be appropriate outside our cleaning and
        diagnostic scope. Keep the video and compare more than one written
        estimate.
      </p>
    </>
  ),
  problems: [
    ...problems.map((p, i) => ({ ...p, image: slots.problems[i] })),
    {
      title: "A backup after heavy rain",
      description:
        "MSD says combined sewers can be overwhelmed in intense rain, causing wet-weather basement backups in affected areas. A diagnosis documents the lateral on your property. It cannot show what the public system was doing at the time.",
      image: slots.problems[3],
    },
  ],
  // Six items: renders as two rows of three.
  inclusions,
  process: steps,
  coverage: {
    title: "Other St. Louis area locations",
    intro:
      "This page covers St. Louis City. Sewer agencies and lateral rules differ across the St. Louis area, so use the page for your address.",
    pageIds: [
      id("loc-stl-chesterfield"),
      id("loc-stl-ballwin"),
      id("loc-stl-st-charles"),
      id("loc-stl-florissant"),
    ],
    availabilityStatement:
      "St. Louis City is a service area, not an office location.",
  },
  // All relevant questions from the St. Louis City location page and the
  // backup diagnosis service page (see `stLouisBackupFaq` above).
  faq: stLouisBackupFaq,
  relatedPageIds: [
    id("loc-stl-st-louis-city"),
    id("svc-recurring-sewer-backup-diagnosis"),
    id("svc-sewer-camera-inspection"),
    id("svc-sewer-cleaning-camera-inspection"),
  ],
  relatedTitle: "Related pages",
  cta: {
    title: "Request a sewer backup diagnosis in St. Louis City",
    body: "Find out what a camera can document on your lateral before you approve work. Video and written findings when a camera is used.",
  },
};
