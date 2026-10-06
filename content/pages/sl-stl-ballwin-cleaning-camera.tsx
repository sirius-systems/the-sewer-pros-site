/**
 * Ballwin, MO + Sewer Cleaning & Camera Inspection
 * (`sl-ballwin-cleaning-camera`).
 *
 * Built from exactly two sources, as `sl-lv-city-cleaning-camera` is:
 *   LOCATION  `ballwinContent`  (content/pages/st-louis-ballwin.tsx)
 *   SERVICE   `svc-sewer-cleaning-camera-inspection` v2 content
 *             (content/pages/services.tsx) and `./sl-blocks/...`
 *
 * Section recipe (each ties a Ballwin fact to what THIS service does or
 * cannot do; swap the city or the service and the copy breaks):
 *   1. City paperwork - the program pays for neither cabling nor video; what
 *                       the City asks an application to document.
 *   2. Roots          - once a year or less vs. more than once a year; the
 *                       before/after footage vs. how often cleared.
 *   3. Older clay     - 1976 median, defects while the line works; a flowing
 *                       line or a clear video is not proof of a sound pipe.
 *   4. Who to call    - MSD, City contacts (THEIR numbers), the lateral's
 *                       definition, access and the waterline.
 *
 * ⚠ MSD AND CITY NUMBERS AND DOLLAR TERMS ARE THEIRS, not ours. The company
 * phone is read from `marketOperatingDetail`, never typed. No price, offer,
 * response time, guarantee, emergency or same-day claim. Ballwin is a service
 * area, not an office. Repair and replacement are never presented as offered.
 * The City's program page is undated; the copy says to confirm with the City.
 * The 1976 median is the location page's published figure (its primary Census
 * check is a TODO there).
 *
 * Audit: docs/source-reports/st-louis/sl-ballwin-cleaning-camera.md
 */

import { marketOperatingDetail } from "@/data/markets/markets";
import type {
  PageId,
  ProcessContent,
  ServiceLocationPageContent,
} from "@/types";
import { ballwinContent } from "./st-louis-ballwin";
import { serviceContent } from "./services";
import { mergeRelevantFaqs, pageImageSlots } from "./service-location-shared";
import {
  inclusions,
  problems,
  shots,
} from "./sl-blocks/sewer-cleaning-camera-inspection";

const id = (value: string): PageId => value as PageId;

const stl = marketOperatingDetail["st-louis-mo"];
if (stl === undefined)
  throw new Error("marketOperatingDetail is missing st-louis-mo");

const slots = pageImageSlots("sl-ballwin-cleaning-camera", {
  hero: {
    alt: "Technician reviewing camera footage after a cleaning beside a home",
    shot: "Monitor showing a cleaned pipe with crew behind, residential property, no identifiable address",
  },
  problems: [shots[0], shots[1], shots[2], shots[3]] as const,
});

const v2 = serviceContent[id("svc-sewer-cleaning-camera-inspection")]?.v2;
if (v2 === undefined || ballwinContent.faq === undefined) {
  throw new Error("sl-ballwin-cleaning-camera: source content is missing");
}

const process: ProcessContent[] = (v2.process?.steps ?? []).map((step) => ({
  title: step.title,
  description:
    typeof step.description === "string" ? step.description : undefined,
}));

const CAMERA_SHOWS = "What does a sewer camera inspection show?";

/**
 * Every question from the Ballwin location page and the service page. The
 * location page's "What does a sewer camera inspection show?" is left out
 * because the service page asks the same question with the fuller answer
 * (it includes what a camera does not show); filtering it here keeps the
 * service answer instead of letting the shorter location copy win the merge.
 */
const faq = mergeRelevantFaqs(
  ballwinContent.faq.filter((f) => f.question !== CAMERA_SHOWS),
  v2.faq,
  [],
  "In Ballwin",
);

export const ballwinCleaningCameraContent: ServiceLocationPageContent = {
  seoTitle: "Sewer Cleaning & Camera Inspection in Ballwin, MO",
  metaDescription:
    "Sewer cleaning and camera inspection in Ballwin, MO. The City’s lateral program pays for neither cabling nor video. See what a visit records.",
  serviceDescription:
    "Sewer cleaning removes material that restricts flow in an accessible sewer line, and a camera inspection records its visible inside on video. The two can be combined in one visit, for properties in Ballwin, Missouri.",
  heroImage: slots.hero,
  ctaImage: slots.cta,
  sources: ballwinContent.sources,
  hero: {
    eyebrow: "Ballwin, MO",
    title: "Sewer Cleaning and Camera Inspection in Ballwin",
    intro: (
      <p>
        In Ballwin, the City&rsquo;s Sewer Lateral Repair Program pays for
        neither cabling nor a video of the lateral, and it treats roots cleared
        once a year or less as normal maintenance. A cleaning and camera visit
        works on the private lateral: it clears what can be cleared in the
        accessible line, and a camera may record the line before cleaning, after
        it, or both, so you can see what the cleaning changed.
      </p>
    ),
  },
  body: (
    <>
      <h2>The City&rsquo;s program pays for neither cabling nor video</h2>
      <p>
        Ballwin&rsquo;s program does not cover the cost of cabling to clear a
        blockage or to document a failure, or the cost of a video of the
        lateral. The City asks an applicant for documentation of a structural
        problem that cabling cannot permanently correct, or that backups will
        likely continue. If cabling cannot open the line, it asks for paid
        invoices from the cabling contractors describing what they found.
      </p>
      <p>
        A cleaning and camera visit gives you video and written findings that
        show what was in the line and what remained. The City decides
        eligibility from what you submit, so ask the Inspections Department at
        (636) 227-2129 (the City&rsquo;s number, not ours) what documentation it
        accepts.
      </p>

      <h2>Roots cleared once a year or less, or more than once a year</h2>
      <p>
        The City treats roots that need clearing more than once a year as a
        covered repair, and roots that clearing once a year or less can control
        as normal maintenance. An application that shows only roots or minor
        defects must document a history of clearing blockages more than once a
        year.
      </p>
      <p>
        A camera before cleaning can show roots in the line, and a look after
        cleaning shows what remains. Footage cannot show how often the line has
        been cleared before, and cleaning removes roots without repairing the
        opening they entered through.
      </p>

      <h2>A 1976 median does not tell you the line is clear</h2>
      <p>
        Ballwin says most older laterals in the city are clay pipe, which tends
        to crack, break, separate at joints and let roots in, and that these
        defects can exist while the line works normally. The median year built
        is 1976 (American Community Survey 2019-2023 5-year estimates, the City
        of Ballwin as a whole).
      </p>
      <p>
        A line that flows again, or a video that looks clear, is not proof that
        the whole line or the ground around it is in good condition. We do not
        perform repairs or replacements, so if a returning clog leads to a
        repair estimate, the footage and findings are what you compare it
        against.
      </p>

      <h2>MSD, the City&rsquo;s lateral, and what a camera cannot see</h2>
      <p>
        The City defines its eligible lateral as starting at the outside wall of
        the house and continuing to the MSD main, and it excludes the building
        sewer under the house. For a building backup, MSD asks you to call (314)
        768-6260 so it can inspect (MSD&rsquo;s number, not ours).
      </p>
      <p>
        If the line is blocked and full of water, a camera cannot see under the
        water, so cleaning may have to come first. To reach The Sewer Pros, call{" "}
        {stl.phone}.
      </p>
    </>
  ),
  problems: [
    ...problems.map((p, i) => ({ ...p, image: slots.problems[i] })),
    {
      title: "Documenting a recurring problem for the City",
      description:
        "The City’s program does not pay for cabling or video, and it asks for documentation of a structural problem that cabling cannot permanently correct, or of backups likely to continue. Cleaning followed by a camera look records what was in the line. The City decides eligibility.",
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
  // All relevant questions from the Ballwin location page and the service
  // page (see `faq` above).
  faq,
  relatedPageIds: [
    id("loc-stl-ballwin"),
    id("svc-sewer-cleaning-camera-inspection"),
    id("svc-sewer-camera-inspection"),
    id("svc-sewer-cleaning"),
  ],
  relatedTitle: "Related pages",
  cta: {
    title: "Request sewer cleaning and camera inspection in Ballwin",
    body: "Clear the line and see what the cleaning changed, with video and written findings when a camera is used.",
  },
};
