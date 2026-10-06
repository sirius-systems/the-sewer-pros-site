/**
 * Summerlin, NV + Sewer Camera Inspection (`sl-summerlin-camera`).
 *
 * Same recipe as `sl-nlv-camera`, `sl-lv-city-camera` and `sl-henderson-*`.
 * Built from exactly two sources:
 *   LOCATION  `summerlinContent`  (content/pages/las-vegas-summerlin.tsx)
 *   SERVICE   `svc-sewer-camera-inspection` v2 content (content/pages/services.tsx)
 *             and the shared camera blocks in `./service-location-shared`
 *
 * Section recipe (each ties a Summerlin fact to what THIS service does or
 * cannot do; swap the location or the service and the copy breaks):
 *   1. Two agencies - the County map shows Summerlin split; the camera cannot
 *                       say which agency serves an address or where the
 *                       connection to the main is.
 *   2. What the camera records - list, video and findings, waterline limit.
 *   3. Two wordings of the owner's side - City and CCWRD in their own words,
 *                       not merged; roots are visible on camera.
 *   4. No program, no sale rule, no permit statement - all "none found".
 *
 * ⚠ SUMMERLIN IS SPLIT AND IS NOT A CITY. Every local fact names its agency.
 * The page never says which agency serves any address. No housing-age section
 * (the location page has no Census figure). Agency phone numbers are not used
 * in the body (the FAQ carries them as the agencies' numbers, not ours). No
 * company phone, price, offer, response time, guarantee, emergency or
 * same-day claim. Summerlin is a service area, not an office. Repair and
 * replacement are never presented as offered.
 */

import type {
  PageId,
  ProcessContent,
  ServiceLocationPageContent,
} from "@/types";
import { summerlinContent } from "./las-vegas-summerlin";
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
    "sl-summerlin-camera: shared camera inspection blocks are missing",
  );
}

const v2 = serviceContent[id("svc-sewer-camera-inspection")]?.v2;
if (v2 === undefined || summerlinContent.faq === undefined) {
  throw new Error(
    "sl-summerlin-camera: source service v2 or location FAQ is missing",
  );
}

const slots = pageImageSlots("sl-summerlin-camera", {
  hero: {
    alt: "Technician feeding a sewer camera into a residential cleanout",
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
 * Every question from the Summerlin location page and the camera service
 * page, minus three: the location page's "What does a sewer camera inspection
 * show?" (the service page answers it in full) and the service page's "Which
 * areas does The Sewer Pros serve?" (this page IS an area page). The service
 * page's cost question (DEC-088 wording) is carried as published.
 */
const faq = mergeRelevantFaqs(
  summerlinContent.faq,
  v2.faq,
  [
    // The service page answers it in full ("What can a sewer camera inspection show?").
    "What does a sewer camera inspection show?",
    // This page IS an area page; the question is the hub's.
    "Which areas does The Sewer Pros serve?",
  ],
  "In Summerlin",
);

export const summerlinCameraContent: ServiceLocationPageContent = {
  seoTitle: "Sewer Camera Inspection in Summerlin, NV",
  metaDescription:
    "Sewer camera inspection in Summerlin, NV. Two agencies word the owner’s side differently. See what a camera records on your lateral.",
  serviceDescription:
    "A sewer camera inspection is a visual inspection of the accessible inside of a sewer line, recorded on video, for properties in Summerlin, Nevada.",
  heroImage: slots.hero,
  ctaImage: slots.cta,
  sources: summerlinContent.sources,
  hero: {
    eyebrow: "Summerlin, NV",
    title: "Sewer Camera Inspection in Summerlin",
    intro: (
      <p>
        Clark County&rsquo;s boundary map shows Summerlin partly in the City of
        Las Vegas and partly in unincorporated Clark County, and the two
        agencies word the owner&rsquo;s side of the lateral differently. A
        camera inspection records what is inside that line, on video, before you
        clean it, buy the home, or approve work.
      </p>
    ),
  },
  body: (
    <>
      <h2>Summerlin has two agencies, and a camera does not choose one</h2>
      <p>
        Clark County&rsquo;s 2024 jurisdictional boundary map shows Summerlin
        partly in the City of Las Vegas and partly in unincorporated Clark
        County. The map is for display only, and we did not find a parcel
        lookup, so we do not say which side your address is on.
      </p>
      <p>
        A camera cannot say either. The footage records where along the line a
        condition sits, measured from where the camera entered. It does not
        establish which agency serves the property or where the connection to
        the main is. Ask the City of Las Vegas or CCWRD which of them serves
        your address before you rely on either one&rsquo;s wording.
      </p>

      <h2>What the camera records on a Summerlin lateral</h2>
      <ul>
        <li>Roots, grease, scale and other deposits visible inside the pipe</li>
        <li>Cracks, offset or separated joints and visible surface damage</li>
        <li>Standing water, and the places where other lines join the pipe</li>
        <li>Any part of the line the camera could not view</li>
      </ul>
      <p>
        You receive the inspection video and written findings. A camera
        generally cannot see under the waterline, so a line that is blocked and
        not draining may need cleaning before there is much to record.
      </p>

      <h2>Two agencies, two wordings of the owner&rsquo;s side</h2>
      <p>
        The City of Las Vegas says owners maintain private sewer laterals up to
        the connection to the City main, and its sewer standards addenda say
        private sewer stays private, including the part in the public
        right-of-way, until it connects to the public main. CCWRD says a damaged
        lateral that connects a house to the sewer main in the street is the
        owner&rsquo;s responsibility, including cleaning, repair and
        replacement, and that owners must also clean periodically to keep it
        free of foreign matter, including roots.
      </p>
      <p>
        We show each in its own words and do not merge them. Roots are among the
        things a camera can show, so the recording is a record to compare
        against any estimate. We do not perform repairs.
      </p>

      <h2>No agency program, no sale rule, no permit statement found</h2>
      <p>
        We found no City or CCWRD lateral repair, grant or reimbursement program
        on the pages we reviewed. That is &ldquo;none found&rdquo;, not a
        statement that none exists. We also found no rule on those pages
        requiring a lateral inspection, certification or seller disclosure when
        a home is sold, and no statement on whether a camera inspection needs a
        permit.
      </p>
      <p>
        A buyer who wants evidence of the line has to ask for it. A recording
        does not tell you which approvals apply, so ask the agency that serves
        your address.
      </p>
    </>
  ),
  problems: [
    ...problems.map((p, i) => ({ ...p, image: slots.problems[i] })),
    {
      title: "Two agencies, two wordings",
      description:
        "The City of Las Vegas and CCWRD each describe the private lateral as the owner’s, in different words. A recorded inspection shows what is in the line. It does not say which agency serves the address, and we do not perform repairs.",
      image: slots.problems[3],
    },
  ],
  inclusions,
  process,
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
  faq,
  relatedPageIds: [
    id("loc-lv-summerlin"),
    id("svc-sewer-camera-inspection"),
    id("svc-pre-purchase-sewer-inspection"),
    id("svc-sewer-line-locating"),
  ],
  relatedTitle: "Related pages",
  cta: {
    title: "Schedule a sewer camera inspection in Summerlin",
    body: "Get the condition of your lateral on video, with written findings.",
  },
};
