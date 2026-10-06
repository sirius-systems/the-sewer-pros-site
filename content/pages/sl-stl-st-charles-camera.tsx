/**
 * St. Charles, MO + Sewer Camera Inspection (`sl-st-charles-camera`).
 *
 * Built from exactly two sources, as the Las Vegas pages are:
 *   LOCATION  `stCharlesContent`  (content/pages/st-louis-st-charles.tsx)
 *   SERVICE   `svc-sewer-camera-inspection` v2 content (content/pages/services.tsx)
 *             and the shared camera blocks in `./service-location-shared`
 *
 * Section recipe (each ties a St. Charles fact to what THIS service does or
 * cannot do; swap the city or the service and the copy breaks):
 *   1. Responsibility - the City runs its own system (not MSD); the Code's lateral
 *                       definition; owner-arranged repair; what a recording does
 *                       not show (the main, ownership under the street).
 *   2. Program        - cabled first, then the City's own camera; what a
 *                       recording adds and what it does not replace.
 *   3. Housing age    - ACS median 1986 vs. what year built cannot tell.
 *   4. Public work and contacts - Hackmann Road manhole, Newtown vacuum system;
 *                       the City's guidance and Public Works number (the City's).
 *
 * ⚠ ST. CHARLES IS OUTSIDE MSD. No MSD fact or number appears. Nothing is carried
 * over from the other St. Louis municipalities.
 * ⚠ CITY NUMBERS AND DOLLAR TERMS ARE THE CITY'S, not ours. No company phone is
 * repeated here (as the Las Vegas camera pages). No price, offer, response time,
 * guarantee, emergency or same-day claim. St. Charles is a service area, not an
 * office. Repair and replacement are never presented as offered.
 *
 * Audit: docs/source-reports/st-louis/sl-st-charles-camera.md
 */

import type {
  PageId,
  ProcessContent,
  ServiceLocationPageContent,
} from "@/types";
import { stCharlesContent } from "./st-louis-st-charles";
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
    "sl-stl-st-charles-camera: shared camera inspection blocks are missing",
  );
}

const v2 = serviceContent[id("svc-sewer-camera-inspection")]?.v2;
if (v2 === undefined || stCharlesContent.faq === undefined) {
  throw new Error(
    "sl-stl-st-charles-camera: source service v2 or location FAQ is missing",
  );
}

const slots = pageImageSlots("sl-st-charles-camera", {
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
 * Every question from the St. Charles location page and the camera service
 * page, minus two: the location page's "What does a sewer camera inspection
 * show?" (the service page answers it in full) and the service page's "Which
 * areas does The Sewer Pros serve?" (this page IS an area page). The service
 * page's cost question (DEC-088 wording) is carried as published.
 */
const faq = mergeRelevantFaqs(
  stCharlesContent.faq,
  v2.faq,
  [
    // The service page answers it in full ("What can a sewer camera inspection show?").
    "What does a sewer camera inspection show?",
    // This page IS an area page; the question is the hub's.
    "Which areas does The Sewer Pros serve?",
  ],
  "In St. Charles",
);

export const stCharlesCameraContent: ServiceLocationPageContent = {
  seoTitle: "Sewer Camera Inspection in St. Charles, MO",
  metaDescription:
    "Sewer camera inspection in St. Charles, MO. The City runs its own sewer and lateral program. See what a camera records on your line and what it cannot show.",
  serviceDescription:
    "A sewer camera inspection is a visual inspection of the accessible inside of a sewer line, recorded on video, for properties in the City of St. Charles, Missouri.",
  heroImage: slots.hero,
  ctaImage: slots.cta,
  sources: stCharlesContent.sources,
  hero: {
    eyebrow: "St. Charles, MO",
    title: "Sewer Camera Inspection in St. Charles",
    intro: (
      <p>
        The City of St. Charles runs its own sewer system, not MSD, and its
        lateral repair program is built around owner-arranged repair of the line
        from the foundation to the sewer main. A camera inspection records what
        is inside that line, on video, before you clean it, buy the home, or
        approve work.
      </p>
    ),
  },
  body: (
    <>
      <h2>A City-run system, and a lateral the owner arranges work on</h2>
      <p>
        In St. Charles the public sewer is run by the City&rsquo;s Public Works
        Sewer Division, not by MSD, so guidance written for MSD customers does
        not apply. The City Code describes the sewer lateral as the part of a
        residential property&rsquo;s sanitary sewer piping that runs from the
        foundation to a sewer main, and under the City&rsquo;s program the owner
        collects the bids and chooses the contractor.
      </p>
      <p>
        The camera records the accessible line from where it enters, usually a
        cleanout. It does not show where the City main is, and we did not find a
        published rule on who owns the part of a lateral under the street, so
        confirm that with the City.
      </p>

      <h2>
        The City sends its own camera, so yours answers a different question
      </h2>
      <p>
        The City&rsquo;s Sewer Lateral Repair Program reimburses 90 percent of
        the authorized cost of repairing a defective residential lateral, up to
        $7,500 (the City&rsquo;s terms, not our prices). It starts from a cabled
        line: the Code asks for written certification from a licensed master
        plumber or master drainlayer that cabling did not resolve the problem,
        and the City&rsquo;s program administrator then schedules its own camera
        investigation to set the repair scope.
      </p>
      <p>
        So our inspection does not replace the City&rsquo;s, and we make no
        claim that the City accepts an outside report. What it can do beforehand
        is record whether the accessible line shows a blockage or a visible
        defect, and where along the line, measured from where the camera
        entered. The City&rsquo;s program sheet says the homeowner pays the
        City&rsquo;s inspection cost if the line is found structurally sound, so
        knowing the line&rsquo;s condition first can matter.
      </p>

      <h2>A 1986 median year built does not describe your lateral</h2>
      <p>
        The U.S. Census Bureau&rsquo;s 2024 American Community Survey 5-year
        estimates put the median year built for St. Charles city homes at 1986,
        across about 32,300 housing units. About 62 percent were built in 1980
        or later (our arithmetic on the Census rows). The City does not publish
        a pipe material or installation era, so year built cannot tell you what
        is in your line.
      </p>
      <p>
        A drain that still works is not proof of a sound pipe, and a blockage is
        not proof of a broken one. A camera shows which, in the part of the line
        it reaches.
      </p>

      <h2>Public sewer work nearby says nothing about your lateral</h2>
      <p>
        The City&rsquo;s May 2026 departmental report describes a sanitary
        manhole in the middle of a creek on Hackmann Road that it says
        contributes to surcharging and backups, and says it is planned to be
        relocated. The Sewer Division also maintains a sewer vacuum system in
        Newtown, a feature of that neighborhood. Neither tells you the condition
        of one property&rsquo;s lateral.
      </p>
      <p>
        For a backup, the City&rsquo;s guidance is to have a plumber or
        drainlayer cable the lateral, then contact Public Works about the
        program at (636) 949-3363 (the City&rsquo;s number, not ours). A
        recording is what you bring when the City or a contractor points to your
        lateral.
      </p>
    </>
  ),
  problems: [
    ...problems.map((p, i) => ({ ...p, image: slots.problems[i] })),
    {
      title: "Before you apply to the City’s lateral program",
      description:
        "The City asks for a licensed plumber’s or drainlayer’s certification that cabling did not resolve the problem, then sends its own camera. A recorded inspection shows where along your line a condition sits, and because we do not perform repairs, the video is a record to compare against any estimate.",
      image: slots.problems[3],
    },
  ],
  // Six items: renders as two rows of three.
  inclusions,
  process,
  coverage: {
    title: "Other St. Louis area locations",
    intro:
      "This page covers the City of St. Charles. Sewer agencies and lateral programs differ across the St. Louis area, so use the page for your address.",
    pageIds: [
      id("loc-stl-st-louis-city"),
      id("loc-stl-chesterfield"),
      id("loc-stl-ballwin"),
      id("loc-stl-florissant"),
    ],
    availabilityStatement:
      "St. Charles is a service area, not an office location.",
  },
  // All relevant questions from the St. Charles location page and the camera
  // service page (see `faq` above).
  faq,
  relatedPageIds: [
    id("loc-stl-st-charles"),
    id("svc-sewer-camera-inspection"),
    id("svc-pre-purchase-sewer-inspection"),
    id("svc-sewer-line-locating"),
  ],
  relatedTitle: "Related pages",
  cta: {
    title: "Schedule a sewer camera inspection in St. Charles",
    body: "Get the condition of your lateral on video, with written findings.",
  },
};
