/**
 * Ballwin, MO + Sewer Camera Inspection (`sl-ballwin-camera`).
 *
 * Built from exactly two sources, as the Las Vegas pages are:
 *   LOCATION  `ballwinContent`  (content/pages/st-louis-ballwin.tsx)
 *   SERVICE   `svc-sewer-camera-inspection` v2 content (content/pages/services.tsx)
 *             and the shared camera blocks in `./service-location-shared`
 *
 * Section recipe (each ties a Ballwin fact to what THIS service does or cannot
 * do; swap the city or the service and the copy breaks):
 *   1. City program - it does not pay for a video of the lateral or for cabling,
 *                     and its eligible lateral starts at the outside wall.
 *   2. Older clay   - clay laterals crack, separate and let roots in while the
 *                     line still works; 1976 median vs. what a camera records.
 *   3. Roots        - once a year or less vs. more than once a year; what the
 *                     footage shows and what it cannot (how often cleared).
 *   4. Who to call  - MSD, Ballwin Inspections and Public Works (all THEIR
 *                     numbers) and where a recording fits.
 *
 * ⚠ MSD AND CITY NUMBERS AND DOLLAR TERMS ARE THEIRS, not ours. No company
 * phone is repeated here. No price, offer, response time, guarantee, emergency
 * or same-day claim. Ballwin is a service area, not an office. Repair and
 * replacement are never presented as offered. The 1976 median is the location
 * page's published figure (its primary Census check is a TODO there).
 *
 * Audit: docs/source-reports/st-louis/sl-ballwin-camera.md
 */

import type {
  PageId,
  ProcessContent,
  ServiceLocationPageContent,
} from "@/types";
import { ballwinContent } from "./st-louis-ballwin";
import { serviceContent } from "./services";
import {
  SERVICE_INCLUSIONS,
  SERVICE_PROBLEMS,
  SERVICE_PROBLEM_SHOTS,
  mergeRelevantFaqs,
  pageImageSlots,
} from "./service-location-shared";

const id = (value: string): PageId => value as PageId;

const problems = SERVICE_PROBLEMS["svc-sewer-camera-inspection"];
const inclusions = SERVICE_INCLUSIONS["svc-sewer-camera-inspection"];
const shots = SERVICE_PROBLEM_SHOTS["svc-sewer-camera-inspection"];
if (problems === undefined || inclusions === undefined || shots === undefined) {
  throw new Error(
    "sl-ballwin-camera: shared camera inspection blocks are missing",
  );
}

const v2 = serviceContent[id("svc-sewer-camera-inspection")]?.v2;
if (v2 === undefined || ballwinContent.faq === undefined) {
  throw new Error(
    "sl-ballwin-camera: source service v2 or location FAQ is missing",
  );
}

const slots = pageImageSlots("sl-ballwin-camera", {
  hero: {
    alt: "Technician feeding a sewer camera into a cleanout beside a home",
    shot: "Technician feeding a camera into a residential cleanout, monitor in frame, no identifiable address",
  },
  problems: [shots[0], shots[1], shots[2], shots[3]] as const,
});

const process: ProcessContent[] = (v2.process?.steps ?? []).map((step) => ({
  title: step.title,
  description:
    typeof step.description === "string" ? step.description : undefined,
}));

/**
 * Every question from the Ballwin location page and the camera service page,
 * minus two: the location page's "What does a sewer camera inspection show?"
 * (the service page answers it in full as "What can a sewer camera inspection
 * show?") and the service page's "Which areas does The Sewer Pros serve?"
 * (this page IS an area page). The service page's cost question (DEC-088
 * wording) is carried as published.
 */
const faq = mergeRelevantFaqs(
  ballwinContent.faq,
  v2.faq,
  [
    // The service page answers it in full ("What can a sewer camera inspection show?").
    "What does a sewer camera inspection show?",
    // This page IS an area page; the question is the hub's.
    "Which areas does The Sewer Pros serve?",
  ],
  "In Ballwin",
);

export const ballwinCameraContent: ServiceLocationPageContent = {
  seoTitle: "Sewer Camera Inspection in Ballwin, MO",
  metaDescription:
    "Sewer camera inspection in Ballwin, MO. The City’s lateral program does not pay for a video. See what a camera records on an older clay lateral.",
  serviceDescription:
    "A sewer camera inspection is a visual inspection of the accessible inside of a sewer line, recorded on video, for properties in Ballwin, Missouri.",
  heroImage: slots.hero,
  ctaImage: slots.cta,
  sources: ballwinContent.sources,
  hero: {
    eyebrow: "Ballwin, MO",
    title: "Sewer Camera Inspection in Ballwin",
    intro: (
      <p>
        In Ballwin, the lateral from your building to the public sewer is
        private property, and the City&rsquo;s Sewer Lateral Repair Program does
        not pay for a video of it. A camera inspection records what is inside
        that line, on video, with written findings, so you have your own
        evidence before you clean, buy, or approve work.
      </p>
    ),
  },
  body: (
    <>
      <h2>The City&rsquo;s program will not pay for the video</h2>
      <p>
        Ballwin&rsquo;s Sewer Lateral Repair Program can pay to repair a failed
        section of a qualifying lateral, up to $4,500 per repair, and up to
        $7,500 where the City approves special circumstances (the City&rsquo;s
        terms, not a price from us). It does not cover the cost of a video of
        the lateral or of cabling to document a failure, and it does not cover
        the &ldquo;building sewer&rdquo; under the house.
      </p>
      <p>
        The City defines its eligible lateral as starting at the outside wall of
        the house and continuing to the MSD main. A camera inspection is the way
        to see that stretch from the inside, and the recording is yours to bring
        to the City or to a contractor.
      </p>

      <h2>Older clay laterals, and what a camera can record in one</h2>
      <p>
        Ballwin says most older laterals in the city are clay pipe, which tends
        to crack, break, separate at joints and let roots in, and that these
        defects can exist while the line still works normally. The median year
        built is 1976 (American Community Survey 2019-2023 5-year estimates, the
        City of Ballwin as a whole), so a drain that works says little about the
        pipe.
      </p>
      <ul>
        <li>Cracks, fractures, and offset or separated joints</li>
        <li>Roots, grease, scale and other deposits visible inside the pipe</li>
        <li>
          Standing water, and any part of the line the camera could not view
        </li>
      </ul>
      <p>A camera generally cannot see under the waterline.</p>

      <h2>Roots once a year or less, or more than once a year</h2>
      <p>
        The City treats roots that need clearing more than once a year as a
        covered repair, and roots that clearing once a year or less can control
        as normal maintenance. An application that shows only roots or minor
        defects must document a history of clearing blockages more than once a
        year.
      </p>
      <p>
        Footage shows whether roots are inside the pipe and where they enter. It
        cannot show how often the line has been cleared, and it does not decide
        whether the City will accept an application. Ask the Inspections
        Department what documentation it accepts.
      </p>

      <h2>MSD or your lateral: who to call, and where a recording fits</h2>
      <p>
        For a building backup, MSD asks you to call (314) 768-6260 so it can
        inspect (MSD&rsquo;s number, not ours). For the City program, Ballwin
        Inspections is at (636) 227-2129, and Public Works, at (636) 227-9000,
        takes questions on sanitary sewer repair permits and excavation in the
        street right-of-way (the City&rsquo;s numbers, not ours).
      </p>
      <p>
        We did not find a published rule on who owns the part of a lateral under
        the street, so we repeat only MSD&rsquo;s general statement that the
        lateral and its connection are private. If MSD or a contractor points to
        your lateral, the recording shows what is in the line. The Sewer Pros
        does not perform repairs or replacements.
      </p>
    </>
  ),
  problems: [
    ...problems.map((p, i) => ({ ...p, image: slots.problems[i] })),
    {
      title: "Documenting a problem for the City program",
      description:
        "The City asks for documentation of a structural problem that cabling cannot permanently correct, or that backups will likely continue, and its program does not pay for a video. A recorded inspection is your own evidence of the line, and the City decides eligibility. The program uses its own contractor, and we do not perform repairs.",
      image: slots.problems[3],
    },
  ],
  // Six items: renders as two rows of three.
  inclusions,
  process,
  coverage: {
    title: "Other St. Louis area locations",
    intro:
      "This page covers Ballwin. Lateral programs and sewer details differ by municipality, so use the page for your address.",
    pageIds: [
      id("loc-stl-st-louis-city"),
      id("loc-stl-chesterfield"),
      id("loc-stl-florissant"),
      id("loc-stl-st-charles"),
    ],
    availabilityStatement: "Ballwin is a service area, not an office location.",
  },
  // All relevant questions from the Ballwin location page and the camera
  // service page (see `faq` above).
  faq,
  relatedPageIds: [
    id("loc-stl-ballwin"),
    id("svc-sewer-camera-inspection"),
    id("svc-pre-purchase-sewer-inspection"),
    id("svc-sewer-line-locating"),
  ],
  relatedTitle: "Related pages",
  cta: {
    title: "Schedule a sewer camera inspection in Ballwin",
    body: "Get the condition of your lateral on video, with written findings.",
  },
};
