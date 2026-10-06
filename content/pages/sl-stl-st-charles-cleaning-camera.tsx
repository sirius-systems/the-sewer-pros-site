/**
 * St. Charles, MO + Sewer Cleaning & Camera Inspection
 * (`sl-st-charles-cleaning-camera`).
 *
 * Built from exactly two sources, as `sl-lv-city-cleaning-camera` is:
 *   LOCATION  `stCharlesContent`  (content/pages/st-louis-st-charles.tsx)
 *   SERVICE   `svc-sewer-cleaning-camera-inspection` v2 content
 *             (content/pages/services.tsx) and `./sl-blocks/...`
 *
 * Section recipe (each ties a St. Charles fact to what THIS service does or
 * cannot do; swap the city or the service and the copy breaks):
 *   1. Responsibility - the City runs its own system (not MSD); the Code's lateral
 *                       definition; cleaning does not show where the main is;
 *                       the camera's distance count does not either.
 *   2. Cabling and the City's camera - the City asks for a cabled line, then
 *                       sends its own camera; a before/after record is yours.
 *   3. Housing age   - ACS median 1986 vs. a returning clog.
 *   4. What remains the owner's - program terms (the City's), no fund balance
 *                       published, no repairs by us.
 *
 * ⚠ ST. CHARLES IS OUTSIDE MSD. No MSD fact or number appears.
 * ⚠ CITY NUMBERS AND DOLLAR TERMS ARE THE CITY'S, not ours. The company phone is
 * read from `marketOperatingDetail`, never typed. No price, offer, response
 * time, guarantee, emergency or same-day claim. St. Charles is a service area,
 * not an office. Repair and replacement are never presented as offered.
 *
 * Audit: docs/source-reports/st-louis/sl-st-charles-cleaning-camera.md
 */

import { marketOperatingDetail } from "@/data/markets/markets";
import type {
  PageId,
  ProcessContent,
  ServiceLocationPageContent,
} from "@/types";
import { stCharlesContent } from "./st-louis-st-charles";
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

const slots = pageImageSlots("sl-st-charles-cleaning-camera", {
  hero: {
    alt: "Technician reviewing camera footage after a cleaning beside a home",
    shot: "Monitor showing a cleaned pipe with crew behind, residential property, no identifiable address",
  },
  problems: [shots[0], shots[1], shots[2], shots[3]] as const,
});

const v2 = serviceContent[id("svc-sewer-cleaning-camera-inspection")]?.v2;
if (v2 === undefined || stCharlesContent.faq === undefined) {
  throw new Error(
    "sl-stl-st-charles-cleaning-camera: source content is missing",
  );
}

const process: ProcessContent[] = (v2.process?.steps ?? []).map((step) => ({
  title: step.title,
  description:
    typeof step.description === "string" ? step.description : undefined,
}));

const CAMERA_SHOWS = "What does a sewer camera inspection show?";

/**
 * Every question from the St. Charles location page and the service page. The
 * location page's "What does a sewer camera inspection show?" is left out
 * because the service page asks the same question with the fuller answer (it
 * includes what a camera does not show); filtering it here keeps the service
 * answer instead of letting the shorter location copy win the merge.
 */
const faq = mergeRelevantFaqs(
  stCharlesContent.faq.filter((f) => f.question !== CAMERA_SHOWS),
  v2.faq,
  [],
  "In St. Charles",
);

export const stCharlesCleaningCameraContent: ServiceLocationPageContent = {
  seoTitle: "Sewer Cleaning & Camera Inspection in St. Charles, MO",
  metaDescription:
    "Sewer cleaning and camera inspection in St. Charles, MO. The City runs its own sewer and asks for a cabled line first. See what a visit covers.",
  serviceDescription:
    "Sewer cleaning removes material that restricts flow in an accessible sewer line, and a camera inspection records its visible inside on video. The two can be combined in one visit, for properties in the City of St. Charles, Missouri.",
  heroImage: slots.hero,
  ctaImage: slots.cta,
  sources: stCharlesContent.sources,
  hero: {
    eyebrow: "St. Charles, MO",
    title: "Sewer Cleaning and Camera Inspection in St. Charles",
    intro: (
      <p>
        In the City of St. Charles, the City runs the public sewer, not MSD, and
        the lateral from the foundation to the main is the line the owner
        arranges work on. A cleaning and camera visit works on that private
        line: it clears what can be cleared in the accessible line, and a camera
        may record it before cleaning, after it, or both, so you can see what
        the cleaning changed.
      </p>
    ),
  },
  body: (
    <>
      <h2>
        A City-run system, and cleaning cannot tell you where the lateral ends
      </h2>
      <p>
        The City of St. Charles runs its sewer through the Public Works Sewer
        Division, not MSD. The City Code describes the lateral as the part of a
        residential property&rsquo;s sanitary sewer piping that runs from the
        foundation to a sewer main, and under the City&rsquo;s program the owner
        gets the bids and chooses the contractor.
      </p>
      <p>
        Cleaning clears a restriction. It does not tell you which side of the
        main the restriction was on. The footage records where along the line a
        condition sits, but it does not establish where the City main is, and we
        did not find a published rule on who owns the part of a lateral under
        the street.
      </p>

      <h2>The City asks for a cabled line, then sends its own camera</h2>
      <p>
        For a backup, the City&rsquo;s guidance is to have a plumber or
        drainlayer cable the lateral, then contact Public Works about its Sewer
        Lateral Repair Program. The Code asks for written certification from a
        licensed master plumber or master drainlayer that cabling did not
        resolve the problem, and the City&rsquo;s program administrator then
        schedules its own camera investigation to set the repair scope.
      </p>
      <p>
        Our visit does not replace either step, and we make no claim that the
        City accepts an outside report or that our work satisfies the cabling
        statement. What it gives you is your own record: the line cleared, and
        footage of what the camera saw before or after. The City&rsquo;s program
        sheet says the homeowner pays the City&rsquo;s inspection cost if the
        line is found structurally sound.
      </p>

      <h2>A 1986 median home does not answer whether the line is clear</h2>
      <p>
        The U.S. Census Bureau&rsquo;s 2024 American Community Survey 5-year
        estimates put the median year built for St. Charles city homes at 1986,
        and our arithmetic on the Census rows puts about 62 percent of housing
        units at 1980 or later. The City does not publish a pipe material or
        installation era, so the year a house was built does not tell you what
        is in its line today.
      </p>
      <p>
        A clog that returns after clearing may mean buildup, roots, or debris
        remain, or that a pipe condition is involved. Cleaning followed by a
        camera look can help show which.
      </p>

      <h2>What stays with the owner, and what the footage is for</h2>
      <p>
        The City&rsquo;s program reimburses 90 percent of the authorized cost of
        repairing a defective lateral, up to $7,500 (the City&rsquo;s terms, not
        our prices), so a share of any repair stays with the owner. We found no
        published fund balance, waiting list or processing time. Confirm current
        terms with Public Works at (636) 949-3363 (the City&rsquo;s number, not
        ours).
      </p>
      <p>
        We do not perform repairs or replacements. A clear video is not proof
        that the whole line or the ground around it is in good condition, so if
        a returning clog leads to a repair estimate, the footage and findings
        are what you compare it against. To reach The Sewer Pros, call{" "}
        {stl.phone}.
      </p>
    </>
  ),
  problems: [
    ...problems.map((p, i) => ({ ...p, image: slots.problems[i] })),
    {
      title: "Sewage backing up into your home",
      description:
        "The City’s guidance is to have a plumber or drainlayer cable the lateral, then contact Public Works about its program. A cleaning and camera visit on the private line clears what can be cleared and records what was seen before or after.",
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
  // All relevant questions from the St. Charles location page and the service
  // page (see `faq` above).
  faq,
  relatedPageIds: [
    id("loc-stl-st-charles"),
    id("svc-sewer-cleaning-camera-inspection"),
    id("svc-sewer-camera-inspection"),
    id("svc-sewer-cleaning"),
  ],
  relatedTitle: "Related pages",
  cta: {
    title: "Request sewer cleaning and camera inspection in St. Charles",
    body: "Clear the line and see what the cleaning changed, with video and written findings when a camera is used.",
  },
};
