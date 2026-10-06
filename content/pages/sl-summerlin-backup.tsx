/**
 * Summerlin, NV + Recurring Sewer Backup Diagnosis (`sl-summerlin-backup`).
 *
 * Authority: CLAUDE.md §22, §24; docs/14-content-specification.md §43.
 * Model: `sl-nlv-backup.tsx` (approved).
 *
 * One local source (`summerlinContent`, the Summerlin page) times one service
 * source (`svc-recurring-sewer-backup-diagnosis`, `v2`). Nothing here is new
 * research. The audit of every source section is in
 * `docs/source-reports/summerlin/sl-summerlin-backup.md`.
 *
 * Body recipe (each section ties a Summerlin fact to what a diagnosis does or
 * cannot):
 *   1. Responsibility - two agencies word the owner's lateral differently vs.
 *      what footage can establish
 *   2. Main stoppage vs. lateral - the City's main-stoppage wording and both
 *      agency numbers, no emergency or after-hours line, vs. where a diagnosis
 *      fits
 *   3. What the Summerlin pages leave unsaid (system type, age, soil and root
 *      conditions) vs. the named causes of a repeat backup
 *   4. No agency program, the optional warranty vs. "does not repair" and the
 *      second-opinion path
 *
 * ⚠ SUMMERLIN IS A COMMUNITY SPLIT BETWEEN TWO JURISDICTIONS, NOT A CITY. The page
 * never says which agency serves any address, and never reconciles the City's and
 * CCWRD's wording.
 * ⚠ The Summerlin location page has NO housing-age section, so no year-built
 * figure appears here.
 * ⚠ AGENCY NUMBERS ARE THE AGENCIES'. No company phone, office, price, offer,
 * emergency claim, response time or guarantee appears in the body copy. The
 * service page's cost and same-day FAQ answers (DEC-088 wording) are carried as
 * published (DEC-139).
 */

import type {
  PageId,
  ProcessContent,
  ServiceLocationPageContent,
} from "@/types";
import { summerlinContent } from "./las-vegas-summerlin";
import { serviceContent } from "./services";
import { mergeRelevantFaqs, pageImageSlots } from "./service-location-shared";
import {
  inclusions,
  problems,
  shots,
} from "./sl-blocks/recurring-sewer-backup-diagnosis";

const id = (value: string): PageId => value as PageId;

// Alt text stays neutral: the location page allows Summerlin wording only for a
// photo taken at a Summerlin-area property.
const slots = pageImageSlots("sl-summerlin-backup", {
  hero: {
    alt: "Technician at a cleanout beside a home",
    shot: "Technician at an exterior cleanout of a residential property, camera monitor in frame, nothing graphic",
  },
  problems: shots,
});

const v2 = serviceContent[id("svc-recurring-sewer-backup-diagnosis")]?.v2;
if (v2 === undefined || summerlinContent.faq === undefined) {
  throw new Error("sl-summerlin-backup: source content is missing");
}

/**
 * Every question from the Summerlin location page and the backup diagnosis
 * service page, minus the one named here.
 */
const summerlinBackupFaq = mergeRelevantFaqs(
  summerlinContent.faq,
  v2.faq,
  [
    // Location page: a camera question the service page answers in full
    // ("What can a sewer camera see?").
    "What does a sewer camera inspection show?",
  ],
  "In Summerlin",
);

const steps: ProcessContent[] = (v2.process?.steps ?? []).map((step) => ({
  title: step.title,
  description:
    typeof step.description === "string" ? step.description : undefined,
}));

export const summerlinBackupContent: ServiceLocationPageContent = {
  seoTitle: "Recurring Sewer Backup Diagnosis in Summerlin, NV",
  metaDescription:
    "Recurring sewer backup diagnosis in Summerlin, NV. Two agencies serve the area and word the owner’s lateral differently. See what a camera can document.",
  serviceDescription:
    "Recurring sewer backup diagnosis is the process of inspecting the accessible sewer line to identify visible conditions that may cause repeated wastewater backups, for properties in Summerlin, NV, in the Las Vegas Valley. It generally combines a camera inspection, cleaning when needed, and written findings.",
  heroImage: slots.hero,
  ctaImage: slots.cta,
  sources: summerlinContent.sources,
  hero: {
    eyebrow: "Summerlin, NV",
    title: "Recurring Sewer Backup Diagnosis in Summerlin",
    intro: (
      <p>
        Summerlin is served by more than one sewer agency, and the City of Las
        Vegas and CCWRD each describe the owner&rsquo;s lateral in their own
        words. When a backup keeps coming back, a diagnosis documents what a
        camera can see inside the accessible line, with cleaning first when
        something blocks the view, so you know what you are dealing with before
        you approve work.
      </p>
    ),
  },
  body: (
    <>
      <h2>A repeat backup: which Summerlin agency&rsquo;s wording applies?</h2>
      <p>
        Clark County&rsquo;s 2024 map shows Summerlin partly in the City of Las
        Vegas and partly in unincorporated Clark County. The map is for display
        only, so we do not say which side any address is on. The City says
        owners maintain private sewer laterals up to the connection to the City
        main. CCWRD says a damaged lateral that connects a house to the sewer
        main in the street is the owner&rsquo;s responsibility, including
        cleaning, repair and replacement. We show each in its own words and do
        not merge them.
      </p>
      <p>
        A diagnosis documents what is visible in the part of the line the camera
        reached and records where along it a condition sits. Those findings
        apply only to the segment inspected. They do not by themselves establish
        responsibility, which agency serves the address, or where the connection
        to the main is.
      </p>

      <h2>A stoppage in the street main, or in your lateral?</h2>
      <p>
        The City says a stoppage in a City main can affect several upstream
        properties and may overflow manholes, and that a public-main
        obstruction, pipe failure or damage from area construction is something
        its team will address. Its Streets &amp; Sanitation Division is listed
        at 702-229-6227 for a suspected main stoppage or a manhole overflow.
        CCWRD lists 702-668-8354 for a sanitary sewer spill or sewer-related
        odors. Those are the agencies&rsquo; numbers, not ours.
      </p>
      <p>
        We found no hours, after-hours number or emergency line for either. A
        diagnosis does not replace calling them. It gives you footage of your
        own lateral to bring when asked.
      </p>

      <h2>
        The Summerlin pages cannot tell you why your line keeps backing up
      </h2>
      <p>
        The pages we reviewed do not say whether the system is combined or
        separate, how old its mains are, or what soil or root conditions occur
        locally. Nothing on them tells you the condition of any individual
        lateral.
      </p>
      <p>
        Public utility guidance names grease, roots, wipes and other debris,
        sags, cracks, broken or separated joints, defective connections and
        collapse among the potential causes of a backup. Cleaning that restores
        flow does not by itself establish pipe-wall or joint condition.
      </p>

      <h2>No agency program to lean on, so get the evidence first</h2>
      <p>
        We found no City or CCWRD lateral repair, grant or reimbursement program
        on the pages we reviewed. That is &ldquo;none found&rdquo;, not a
        statement that none exists, and both agencies describe the lateral as
        the owner&rsquo;s. The City&rsquo;s Sewer Line Warranty page promotes an
        optional program offered with Service Line Warranties of America, a
        private company. We found no price or terms, and The Sewer Pros has no
        connection to it.
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
      title: "A backup where the serving agency is unclear",
      description:
        "Summerlin has two agencies and the county map is for display only. A diagnosis gives you footage of your lateral and where along it conditions sit. It does not establish which agency serves the address or where the connection to the main is.",
      image: slots.problems[3],
    },
  ],
  // Six items: renders as two rows of three.
  inclusions,
  process: steps,
  coverage: {
    title: "Other Las Vegas Valley areas",
    intro:
      "This page covers Summerlin. Sewer agencies and lateral rules differ across the Las Vegas Valley, so use the page for your address.",
    pageIds: [
      id("loc-lv-las-vegas"),
      id("loc-lv-henderson"),
      id("loc-lv-north-las-vegas"),
    ],
    availabilityStatement:
      "Summerlin is a service area, not an office location.",
  },
  // All relevant questions from the Summerlin location page and the backup
  // diagnosis service page (see `summerlinBackupFaq` above).
  faq: summerlinBackupFaq,
  relatedPageIds: [
    id("loc-lv-summerlin"),
    id("svc-recurring-sewer-backup-diagnosis"),
    id("svc-sewer-camera-inspection"),
    id("svc-sewer-cleaning-camera-inspection"),
  ],
  relatedTitle: "Related pages",
  cta: {
    title: "Request a sewer backup diagnosis in Summerlin",
    body: "Find out what a camera can document on your lateral before you approve work. Video and written findings when a camera is used.",
  },
};
