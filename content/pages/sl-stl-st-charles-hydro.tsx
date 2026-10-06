/**
 * St. Charles, MO + Hydro Jetting (`sl-st-charles-hydro`).
 *
 * Same recipe as the Las Vegas hydro pages. One local source
 * (`stCharlesContent`) x one service source (`svc-hydro-jetting` v2). Nothing
 * here is new research.
 *
 * Section recipe (each section ties a St. Charles fact to what jetting does):
 *   1. Responsibility - the City runs the public system (not MSD); the lateral
 *      is the owner's to arrange, so the method is matched to the line (water
 *      paced, camera first when included)
 *   2. Can / cannot clear - jetting limits vs. what the City's program
 *      reimburses (defective pipe)
 *   3. Housing age   - Census median 1986 tied to "jetting depends on pipe
 *      condition and material, not year built"
 *   4. Cabling and contacts - jetting is not cabling; City numbers (the City's)
 *
 * ⚠ ST. CHARLES IS OUTSIDE MSD. No MSD fact or number appears.
 * ⚠ CITY NUMBERS AND DOLLAR TERMS ARE THE CITY'S. The company phone is not
 * repeated here. No price, offer, response time, guarantee, emergency or
 * same-day claim, pressure or flow figure appears in the body copy. The service
 * page's cost and same-day FAQ answers (DEC-088 wording) are carried as
 * published (DEC-139). Equipment names appear only inside the process steps
 * lifted from the service page.
 *
 * Audit: docs/source-reports/st-louis/sl-st-charles-hydro.md
 */

import type { PageId, ServiceLocationPageContent } from "@/types";
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

const problems = SERVICE_PROBLEMS["svc-hydro-jetting"];
const inclusions = SERVICE_INCLUSIONS["svc-hydro-jetting"];
const shots = SERVICE_PROBLEM_SHOTS["svc-hydro-jetting"];
if (problems === undefined || inclusions === undefined || shots === undefined) {
  throw new Error(
    "sl-stl-st-charles-hydro: shared hydro jetting blocks are missing",
  );
}

const v2 = serviceContent[id("svc-hydro-jetting")]?.v2;
if (v2 === undefined || stCharlesContent.faq === undefined) {
  throw new Error(
    "sl-stl-st-charles-hydro: source service v2 or location FAQ is missing",
  );
}

const slots = pageImageSlots("sl-st-charles-hydro", {
  hero: {
    alt: "Hydro jetting hose and nozzle at a cleanout beside a home",
    shot: "Jetting hose entering a residential cleanout, jetter trailer at the curb, no plate or identifiable address",
  },
  problems: [shots[0], shots[1], shots[2], shots[3]] as const,
});

/**
 * Every question from the St. Charles location page and the hydro jetting
 * service page. The location page has no utility-transfer question, so nothing
 * is skipped. The service page's cost and same-day answers (DEC-088 wording)
 * are included as published (DEC-139).
 */
const faq = mergeRelevantFaqs(
  stCharlesContent.faq,
  v2.faq,
  [],
  "In St. Charles",
);

export const stCharlesHydroContent: ServiceLocationPageContent = {
  seoTitle: "Hydro Jetting in St. Charles, MO",
  metaDescription:
    "Hydro jetting in St. Charles, MO. The City runs its own sewer and its lateral program covers defective pipe. See what jetting clears and what it cannot fix.",
  serviceDescription:
    "Hydro jetting cleans an accessible sewer or drain line with pressurized water sent through a hose and nozzle, for properties in the City of St. Charles, Missouri.",
  heroImage: slots.hero,
  ctaImage: slots.cta,
  sources: stCharlesContent.sources,
  hero: {
    eyebrow: "St. Charles, MO",
    title: "Hydro Jetting in St. Charles",
    intro: (
      <p>
        In the City of St. Charles, the City runs the public sewer, not MSD, and
        the lateral from the foundation to the main is the line the owner
        arranges work on. Hydro jetting cleans that line with pressurized water,
        loosening buildup and flushing it out. It is a cleaning method, not a
        repair, and the City&rsquo;s lateral program is for defective pipe.
      </p>
    ),
  },
  body: (
    <>
      <h2>Why the method is matched to a lateral the owner arranges work on</h2>
      <p>
        The City of St. Charles runs its sewer through the Public Works Sewer
        Division, and the City Code describes the lateral as the piping from a
        residential foundation to a sewer main. Under the City&rsquo;s program
        the owner obtains the bids and chooses the contractor, so the line is
        yours to look after. Jetting here is for accessible private lines, not
        City mains.
      </p>
      <p>
        More water is not automatically better, and added water can contribute
        to a backup if the line cannot carry it away. So the nozzle and settings
        depend on what the line looks like and what is in it, and the work is
        paced to the line. A camera look first, when included, helps pick the
        method.
      </p>

      <h2>What jetting can clear, and what the City&rsquo;s program is for</h2>
      <ul>
        <li>Grease and soap buildup</li>
        <li>Debris and wipes caught in the line</li>
        <li>Roots that are loose or accessible</li>
        <li>General buildup on the pipe wall</li>
      </ul>
      <p>
        The City&rsquo;s Sewer Lateral Repair Program reimburses 90 percent of
        the authorized cost, up to $7,500 (the City&rsquo;s terms, not our
        prices), of patching or replacing a defective residential lateral.
        Jetting does not correct a cracked or broken pipe, an offset or
        separated joint, a collapsed section, or a low spot that holds water,
        and The Sewer Pros does not repair or replace sewer lines. If a camera
        shows such a condition, further evaluation outside our scope may be
        appropriate.
      </p>

      <h2>
        St. Charles homes are mostly from 1980 on, but jetting depends on the
        pipe
      </h2>
      <p>
        The U.S. Census Bureau&rsquo;s 2024 American Community Survey 5-year
        estimates put the median year built for St. Charles city homes at 1986.
        Our arithmetic on the Census rows puts about 62 percent of housing units
        at 1980 or later and about 7 percent at 1939 or earlier.
      </p>
      <p>
        That does not answer whether jetting suits your line. The City does not
        publish a pipe material or installation era, and jetting depends on the
        pipe&rsquo;s condition and material. Visible structural defects call for
        a closer evaluation before cleaning, which is why the camera look comes
        first when it is included.
      </p>

      <h2>Before you jet: cabling, and the City&rsquo;s contacts</h2>
      <p>
        For a backup, the City&rsquo;s guidance is to have a plumber or
        drainlayer cable the lateral, then contact Public Works about its
        program. The Code asks for written certification from a licensed master
        plumber or master drainlayer that cabling did not resolve the problem.
        Jetting is a different method from cabling, and we make no claim that it
        satisfies that statement.
      </p>
      <p>
        Public Works answers program questions at (636) 949-3363, and Community
        Development takes permit and inspection questions at (636) 949-3222
        (both the City&rsquo;s numbers, not ours). If what we see goes beyond
        cleaning, we will say so plainly.
      </p>
    </>
  ),
  problems: [
    ...problems.map((p, i) => ({ ...p, image: slots.problems[i] })),
    {
      title: "Buying a St. Charles home",
      description:
        "Cleaning is not an inspection. We did not find a City rule requiring a lateral inspection or a sewer-lateral disclosure on sale, so a buyer who wants the line’s condition has to ask for a pre-purchase inspection.",
      image: slots.problems[3],
    },
  ],
  inclusions,
  process: (v2.process?.steps ?? []).map((step) => ({
    title: step.title,
    description:
      typeof step.description === "string" ? step.description : undefined,
  })),
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
  // Every relevant question from the St. Charles location page and the hydro
  // jetting service page (see `faq` above).
  faq,
  relatedPageIds: [
    id("loc-stl-st-charles"),
    id("svc-hydro-jetting"),
    id("svc-sewer-cleaning"),
    id("svc-sewer-camera-inspection"),
  ],
  relatedTitle: "Related pages",
  cta: {
    title: "Request hydro jetting in St. Charles",
    body: "Tell us what your line is doing, and ask what is included before you book.",
  },
};
