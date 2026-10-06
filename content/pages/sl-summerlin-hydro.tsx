/**
 * Summerlin, NV + Hydro Jetting (`sl-summerlin-hydro`).
 *
 * Authority: CLAUDE.md §9, §22, §24. Same recipe as `sl-nlv-hydro`,
 * `sl-lv-city-hydro` and `sl-henderson-hydro`. One local source
 * (`summerlinContent`) x one service source (`svc-hydro-jetting` v2).
 * Nothing here is new research.
 *
 * Section recipe (each section ties a Summerlin fact to what jetting does):
 *   1. Method matched to the line - two agencies call the lateral the
 *                       owner's; jetting is for accessible private lines;
 *                       water pacing, camera first.
 *   2. Roots and breaks - CCWRD's roots wording; what jetting clears and
 *                       cannot correct; "none found" repair program.
 *   3. A main stoppage - the City's upstream-properties statement; added
 *                       water; the agencies' numbers (not ours).
 *   4. Optional plan, permits, and what is not shown.
 *
 * ⚠ SUMMERLIN IS SPLIT AND IS NOT A CITY. Every local fact names its agency;
 * the page never says which agency serves an address. THE AGENCY NUMBERS ARE
 * THE AGENCIES'. The company phone is not repeated here. No price, offer,
 * response time, guarantee, emergency or same-day claim, pressure or flow
 * figure appears in the body copy. The service page's cost and same-day FAQ
 * answers (DEC-088 wording) are carried as published (DEC-139), as on the
 * Henderson, City of Las Vegas and North Las Vegas pages. Equipment names
 * appear only inside the process steps lifted from the service page.
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

const problems = SERVICE_PROBLEMS["svc-hydro-jetting"];
const inclusions = SERVICE_INCLUSIONS["svc-hydro-jetting"];
const shots = SERVICE_PROBLEM_SHOTS["svc-hydro-jetting"];
if (problems === undefined || inclusions === undefined || shots === undefined) {
  throw new Error(
    "sl-summerlin-hydro: shared hydro jetting blocks are missing",
  );
}

const v2 = serviceContent[id("svc-hydro-jetting")]?.v2;
if (v2 === undefined || summerlinContent.faq === undefined) {
  throw new Error(
    "sl-summerlin-hydro: source service v2 or location FAQ is missing",
  );
}

const slots = pageImageSlots("sl-summerlin-hydro", {
  hero: {
    alt: "Hydro jetting hose and nozzle at a residential cleanout",
    shot: "Jetting hose entering a residential cleanout, jetter trailer at the curb, no plate or identifiable address",
  },
  problems: [shots[0], shots[1], shots[2], shots[3]] as const,
});

const process: ProcessContent[] = (v2.process?.steps ?? []).map((step) => ({
  title: step.title,
  description:
    typeof step.description === "string" ? step.description : undefined,
}));

/**
 * Every question from the Summerlin location page and the hydro jetting
 * service page. Nothing is skipped: the Summerlin FAQ has no utility-account
 * question. The service page's cost and same-day answers (DEC-088 wording)
 * are included as published (DEC-139).
 */
const faq = mergeRelevantFaqs(summerlinContent.faq, v2.faq, [], "In Summerlin");

export const summerlinHydroContent: ServiceLocationPageContent = {
  seoTitle: "Hydro Jetting in Summerlin, NV",
  metaDescription:
    "Hydro jetting in Summerlin, NV. Two agencies word the owner’s side differently. See what jetting clears and what it cannot fix.",
  serviceDescription:
    "Hydro jetting cleans an accessible sewer or drain line with pressurized water sent through a hose and nozzle, for properties in Summerlin, Nevada.",
  heroImage: slots.hero,
  ctaImage: slots.cta,
  sources: summerlinContent.sources,
  hero: {
    eyebrow: "Summerlin, NV",
    title: "Hydro Jetting in Summerlin",
    intro: (
      <p>
        Clark County&rsquo;s boundary map shows Summerlin partly in the City of
        Las Vegas and partly in unincorporated Clark County, and both agencies
        describe the private lateral as the owner&rsquo;s. Hydro jetting cleans
        that line with pressurized water, loosening buildup and flushing it out.
        It is a cleaning method, not a repair, and which method suits your
        lateral should rest on what the line looks like.
      </p>
    ),
  },
  body: (
    <>
      <h2>Why the method is matched to a line two agencies call yours</h2>
      <p>
        The City of Las Vegas says owners maintain private sewer laterals up to
        the connection to the City main. CCWRD says a lateral that connects a
        house to the sewer main in the street is the owner&rsquo;s
        responsibility. Clark County&rsquo;s map shows Summerlin in both
        jurisdictions. Jetting here is for accessible private lines, not public
        mains.
      </p>
      <p>
        More water is not automatically better, and added water can contribute
        to a backup if the line cannot carry it away. So the nozzle and settings
        depend on what the line looks like and what is in it, and the work is
        paced to the line. A camera look first, when included, helps pick the
        method.
      </p>

      <h2>
        Roots in CCWRD&rsquo;s wording, and the break jetting cannot touch
      </h2>
      <ul>
        <li>Grease and soap buildup</li>
        <li>Debris and wipes caught in the line</li>
        <li>Roots that are loose or accessible</li>
        <li>General buildup on the pipe wall</li>
      </ul>
      <p>
        CCWRD says owners are also responsible for periodic cleaning to keep the
        lateral free of foreign matter, including roots. Jetting does not
        correct a cracked or broken pipe, an offset or separated joint, a
        collapsed section, or a low spot that holds water. We found no City or
        CCWRD lateral repair, grant or reimbursement program on the pages we
        reviewed (&ldquo;none found&rdquo;, not a statement that none exists),
        and The Sewer Pros does not repair or replace sewer lines.
      </p>

      <h2>A City main stoppage is not a line to jet</h2>
      <p>
        The City says a stoppage in a City main can affect several upstream
        properties and may overflow manholes. We do not jet public mains. If
        that describes what you see, the City&rsquo;s sewer-backup post lists
        Streets &amp; Sanitation at 702-229-6227, and CCWRD&rsquo;s page lists
        702-668-8354 for a sanitary sewer spill or odors. Those are the
        agencies&rsquo; numbers, not ours, and we found no hours, after-hours
        number or emergency line for either.
      </p>

      <h2>Optional plan, permits, and what jetting does not show</h2>
      <p>
        The City&rsquo;s Sewer Line Warranty page promotes an optional plan with
        a private company that is separate from the City. We found no price or
        coverage terms, and whether it applies at a Summerlin address is not
        stated. The Sewer Pros has no connection to it and does not recommend
        it.
      </p>
      <p>
        We found no City or CCWRD statement on whether cleaning needs a permit,
        so ask the agency that serves your address. Jetting clears what can be
        removed. It does not tell you which approvals apply, and visible
        structural defects call for a closer evaluation before cleaning, which
        is why the camera look comes first when it is included. If what we see
        goes beyond cleaning, we will say so plainly.
      </p>
    </>
  ),
  problems: [
    ...problems.map((p, i) => ({ ...p, image: slots.problems[i] })),
    {
      title: "Roots in the lateral",
      description:
        "CCWRD says owners are responsible for periodic cleaning to keep the lateral free of foreign matter, including roots. Jetting can clear roots that are loose or accessible. It does not repair the pipe, and we do not perform repairs.",
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
    id("svc-hydro-jetting"),
    id("svc-sewer-cleaning"),
    id("svc-sewer-camera-inspection"),
  ],
  relatedTitle: "Related pages",
  cta: {
    title: "Request hydro jetting in Summerlin",
    body: "Tell us what your line is doing, and ask what is included before you book.",
  },
};
