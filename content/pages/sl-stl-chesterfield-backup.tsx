/**
 * Chesterfield, MO + Recurring Sewer Backup Diagnosis (`sl-chesterfield-backup`).
 *
 * Authority: CLAUDE.md §22, §24; docs/14-content-specification.md §43.
 * Shape and quality bar: `sl-lv-city-backup.tsx`.
 *
 * One local source (`chesterfieldContent`, `loc-stl-chesterfield`) x one
 * service source (`svc-recurring-sewer-backup-diagnosis`, `v2`). Nothing here is
 * new research. Section recipe, each tied to what a diagnosis does or cannot:
 *   1. responsibility - MSD's main vs the owner's lateral, MSD's backup line,
 *      vs what footage can establish
 *   2. municipalProgram - the City's cable-first rule and defect list against
 *      what a diagnosis records, and the City's own video review
 *   3. systemExplainer + housingAge - the public Conway Meadows project is not
 *      a finding about a lateral; newer homes, same named causes
 *   4. whoToCall - MSD's urgent reports, Public Works, 911, and where a
 *      diagnosis fits, with the "does not repair" and second-opinion path
 *
 * Audit: docs/source-reports/st-louis/sl-chesterfield-backup.md
 *
 * ⚠ MSD AND CITY NUMBERS AND DOLLAR TERMS ARE THEIRS, not ours. No company
 * phone, office, price, offer, emergency claim, response time or guarantee
 * appears in the body copy. The service page's cost and same-day FAQ answers
 * (DEC-088 wording) are carried as published. The location page's Census
 * figures are flagged pending (PENDING-015) and are NOT used here.
 */

import type {
  PageId,
  ProcessContent,
  ServiceLocationPageContent,
} from "@/types";
import { chesterfieldContent } from "./st-louis-chesterfield";
import { serviceContent } from "./services";
import { mergeRelevantFaqs, pageImageSlots } from "./service-location-shared";
import {
  inclusions,
  problems,
  shots,
} from "./sl-blocks/recurring-sewer-backup-diagnosis";

const id = (value: string): PageId => value as PageId;

// Alt text stays neutral: no place-specific photo is claimed.
const slots = pageImageSlots("sl-chesterfield-backup", {
  hero: {
    alt: "Technician at a cleanout beside a home",
    shot: "Technician at an exterior cleanout of a residential property, camera monitor in frame, nothing graphic",
  },
  problems: shots,
});

const v2 = serviceContent[id("svc-recurring-sewer-backup-diagnosis")]?.v2;
if (v2 === undefined || chesterfieldContent.faq === undefined) {
  throw new Error("sl-chesterfield-backup: source content is missing");
}

/**
 * Every question from the Chesterfield location page and the backup diagnosis
 * service page, minus the one named here (reason in the source report).
 */
const chesterfieldBackupFaq = mergeRelevantFaqs(
  chesterfieldContent.faq,
  v2.faq,
  [
    // Location page: a camera question the service page answers in full
    // ("What can a sewer camera see?").
    "What does a sewer camera inspection show?",
  ],
  "In Chesterfield",
);

const steps: ProcessContent[] = (v2.process?.steps ?? []).map((step) => ({
  title: step.title,
  description:
    typeof step.description === "string" ? step.description : undefined,
}));

export const chesterfieldBackupContent: ServiceLocationPageContent = {
  seoTitle: "Recurring Sewer Backup Diagnosis in Chesterfield, MO",
  metaDescription:
    "Recurring sewer backup diagnosis in Chesterfield, MO. MSD maintains the main; the lateral is the owner’s, and the City has its own rules. See what a camera documents.",
  serviceDescription:
    "Recurring sewer backup diagnosis is the process of inspecting the accessible sewer line to identify visible conditions that may cause repeated wastewater backups, for properties in Chesterfield, Missouri. It generally combines a camera inspection, cleaning when needed, and written findings.",
  heroImage: slots.hero,
  ctaImage: slots.cta,
  sources: chesterfieldContent.sources,
  hero: {
    eyebrow: "Chesterfield, MO",
    title: "Recurring Sewer Backup Diagnosis in Chesterfield",
    intro: (
      <p>
        In Chesterfield, MSD says it maintains the public sewer main, and that
        the lateral from your building, including its connection to that main,
        is private property the owner maintains and repairs. When a backup keeps
        coming back, a diagnosis documents what a camera can see inside the
        accessible line, with cleaning first when something blocks the view, so
        you know what you are dealing with before you approve work or turn to
        the City&rsquo;s lateral program.
      </p>
    ),
  },
  body: (
    <>
      <h2>A repeat backup: MSD&rsquo;s main or your lateral?</h2>
      <p>
        MSD says that if a building backup is caused by a public sewer line, it
        makes the necessary repair. On your side, MSD states that the lateral
        line and its connection to the main are private property, so clogs,
        roots, grease and damage on it are the owner&rsquo;s to address.
      </p>
      <p>
        MSD asks customers with a building backup to call (314) 768-6260 so it
        can inspect (MSD&rsquo;s number, not ours). A diagnosis documents what
        is visible in the part of the line the camera reached. Those findings
        apply only to the segment inspected and do not by themselves establish
        responsibility.
      </p>

      <h2>The City&rsquo;s cable-first rule, and what a diagnosis records</h2>
      <p>
        Chesterfield&rsquo;s lateral repair program can pay for a qualifying
        defective lateral, up to $15,000 under the City&rsquo;s March 2026
        policy (the City&rsquo;s terms, not a price from us). The owner must
        first have a licensed plumbing company or drainlayer cable the line, and
        the City does not reimburse that step. Roots in pipe bells and joints
        are routine maintenance when removing them lets the line work, while a
        severe blockage that cannot be cabled out can meet the City&rsquo;s
        definition of a defect.
      </p>
      <p>
        A diagnosis can record roots, an offset, deposits or standing water on
        video. Whether any of it is &ldquo;severe&rdquo; is the City&rsquo;s
        call, and its own contractor televises the lateral first. Your footage
        does not replace or predict that review. It is your own record of why
        the backup keeps returning.
      </p>

      <h2>Public sewer work nearby is not a finding about your lateral</h2>
      <p>
        MSD&rsquo;s Conway Meadows Sanitary Relief project is designed to
        replace about 1,400 feet of undersized public sewer between Conway Road
        and North Outer Forty Road, to reduce basement backups in intense
        rainfall. The page is undated, so check MSD for status. It says nothing
        about any one lateral.
      </p>
      <p>
        Most Chesterfield homes are newer than the typical St. Louis-area house,
        so a belly holding water, a joint pulled apart by ground movement,
        damage from later work, or roots at a gap are likelier than old-pipe
        failure. Grease and wipes are named too. Which applies to your line
        cannot be known without looking.
      </p>

      <h2>During a backup: who to call, and where a diagnosis fits</h2>
      <p>
        MSD lists raw sewage inside or outside a home, missing manhole covers
        and flooded streets as urgent reports. For the City program, call
        Chesterfield Public Works at (636) 537-4762 (the City&rsquo;s number).
        The City&rsquo;s Who To Call guide says to call 911 for an emergency
        that threatens life or property, which is not a sewer dispatch line.
      </p>
      <p>
        A diagnosis does not replace calling MSD about the public sewer. It is
        what you bring when MSD or a plumber points to your lateral. It repairs
        nothing, and if the footage shows a significant condition, further
        evaluation may be appropriate outside our cleaning and diagnostic scope.
        Keep the video and compare more than one written estimate.
      </p>
    </>
  ),
  problems: [
    ...problems.map((p, i) => ({ ...p, image: slots.problems[i] })),
    {
      title: "Sewage inside the building",
      description:
        "MSD lists raw sewage inside or outside a home as an urgent report and asks customers with a building backup to call it so it can inspect. A diagnosis is for the lateral on your property, after MSD has been called.",
      image: slots.problems[3],
    },
  ],
  // Six items: renders as two rows of three.
  inclusions,
  process: steps,
  coverage: {
    title: "Other St. Louis area locations",
    intro:
      "This page covers Chesterfield. Each St. Louis area municipality has its own lateral program and terms, so use the page for your address.",
    pageIds: [
      id("loc-stl-st-louis-city"),
      id("loc-stl-ballwin"),
      id("loc-stl-st-charles"),
      id("loc-stl-florissant"),
    ],
    availabilityStatement:
      "Chesterfield is a service area, not an office location.",
  },
  // All relevant questions from the Chesterfield location page and the backup
  // diagnosis service page (see `chesterfieldBackupFaq` above).
  faq: chesterfieldBackupFaq,
  relatedPageIds: [
    id("loc-stl-chesterfield"),
    id("svc-recurring-sewer-backup-diagnosis"),
    id("svc-sewer-camera-inspection"),
    id("svc-sewer-cleaning-camera-inspection"),
  ],
  relatedTitle: "Related pages",
  cta: {
    title: "Request a sewer backup diagnosis in Chesterfield",
    body: "Find out what a camera can document on your lateral before you approve work. Video and written findings when a camera is used.",
  },
};
