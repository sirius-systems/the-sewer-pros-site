/**
 * Ballwin, MO + Hydro Jetting (`sl-ballwin-hydro`).
 *
 * Same recipe as `sl-lv-city-hydro`. One local source (`ballwinContent`)
 * x one service source (`svc-hydro-jetting` v2). Nothing here is new research.
 *
 * Section recipe (each section ties a Ballwin fact to what jetting does):
 *   1. Older clay     - clay laterals can have defects while the line works, so
 *                       the method is matched to the line (camera first)
 *   2. Roots          - the City's once-a-year line; jetting clears loose roots
 *                       but not the opening; the City's steps name cabling
 *   3. Can / cannot   - jetting limits against what the City program pays for
 *   4. Housing age + MSD - 1976 median; MSD's Valley Drive project concerns the
 *                       public sewer; added water and recent backups
 *
 * ⚠ MSD AND CITY NUMBERS AND DOLLAR TERMS ARE THEIRS, not ours. The company
 * phone is not repeated here. No price, offer, response time, guarantee,
 * emergency or same-day claim, pressure or flow figure appears in the body
 * copy. The service page's cost and same-day FAQ answers (DEC-088 wording)
 * are carried as published. Equipment names appear only inside the process
 * steps lifted from the service page. The 1976 median is the location page's
 * published figure (its primary Census check is a TODO there).
 *
 * Audit: docs/source-reports/st-louis/sl-ballwin-hydro.md
 */

import type { PageId, ServiceLocationPageContent } from "@/types";
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

const problems = SERVICE_PROBLEMS["svc-hydro-jetting"];
const inclusions = SERVICE_INCLUSIONS["svc-hydro-jetting"];
const shots = SERVICE_PROBLEM_SHOTS["svc-hydro-jetting"];
if (problems === undefined || inclusions === undefined || shots === undefined) {
  throw new Error("sl-ballwin-hydro: shared hydro jetting blocks are missing");
}

const v2 = serviceContent[id("svc-hydro-jetting")]?.v2;
if (v2 === undefined || ballwinContent.faq === undefined) {
  throw new Error(
    "sl-ballwin-hydro: source service v2 or location FAQ is missing",
  );
}

const slots = pageImageSlots("sl-ballwin-hydro", {
  hero: {
    alt: "Hydro jetting hose entering a cleanout beside a home",
    shot: "Jetting hose entering a residential cleanout, jetter trailer at the curb, no plate or identifiable address",
  },
  problems: [shots[0], shots[1], shots[2], shots[3]] as const,
});

/**
 * Every question from the Ballwin location page and the hydro jetting
 * service page. The location page has no utility-transfer question, so
 * nothing is skipped. The service page's cost and same-day answers (DEC-088
 * wording) are included as published.
 */
const faq = mergeRelevantFaqs(ballwinContent.faq, v2.faq, [], "In Ballwin");

export const ballwinHydroContent: ServiceLocationPageContent = {
  seoTitle: "Hydro Jetting in Ballwin, MO",
  metaDescription:
    "Hydro jetting in Ballwin, MO. Older clay laterals can hide defects. See what jetting clears, what it cannot fix, and how the City treats roots.",
  serviceDescription:
    "Hydro jetting cleans an accessible sewer or drain line with pressurized water sent through a hose and nozzle, for properties in Ballwin, Missouri.",
  heroImage: slots.hero,
  ctaImage: slots.cta,
  sources: ballwinContent.sources,
  hero: {
    eyebrow: "Ballwin, MO",
    title: "Hydro Jetting in Ballwin",
    intro: (
      <p>
        Ballwin says most older laterals in the city are clay pipe, and that
        cracks and separated joints can exist while the line still works. Hydro
        jetting cleans an accessible line with pressurized water, loosening
        buildup and flushing it out. It is a cleaning method, not a repair, and
        which method suits your lateral should rest on what the line looks like.
      </p>
    ),
  },
  body: (
    <>
      <h2>Why the method is matched to an older clay lateral</h2>
      <p>
        Ballwin says clay pipe tends to crack, break, separate at joints and let
        roots in, and that those defects can exist while the line works
        normally. Whether jetting suits a line depends on the pipe&rsquo;s
        condition and material, and visible structural defects call for a closer
        evaluation before cleaning. That is why a camera look comes first when
        it is included.
      </p>
      <p>
        More water is not automatically better, and added water can contribute
        to a backup if the line cannot carry it away. So the nozzle and settings
        depend on what the line looks like, and the work is paced to it.
      </p>

      <h2>Roots and the City&rsquo;s once-a-year line</h2>
      <p>
        The City treats roots that clearing once a year or less can control as
        normal maintenance, and roots that need clearing more than once a year
        as a covered repair. Jetting can remove roots that are loose or
        accessible. It does not repair the gap or joint they entered through.
      </p>
      <p>
        The City&rsquo;s application steps name cabling, and we have not
        confirmed whether jetting would count in its place, so ask Ballwin
        Inspections at (636) 227-2129 (the City&rsquo;s number, not ours) before
        assuming it does.
      </p>

      <h2>What jetting clears, and what the City program pays for instead</h2>
      <ul>
        <li>Grease and soap buildup</li>
        <li>Debris and wipes caught in the line</li>
        <li>Roots that are loose or accessible</li>
        <li>General buildup on the pipe wall</li>
      </ul>
      <p>
        Jetting does not correct a cracked or broken pipe, an offset or
        separated joint, a collapsed section, or a low spot that holds water.
        The City program pays for excavation and repair of a failed lateral
        section, and it does not pay for cabling to clear a blockage (the
        City&rsquo;s terms, not ours). The Sewer Pros does not repair or replace
        sewer lines. If a camera shows such a condition, further evaluation
        outside our scope may be appropriate.
      </p>

      <h2>A 1976 median, MSD&rsquo;s project, and your own lateral</h2>
      <p>
        Ballwin&rsquo;s median year built is 1976 (American Community Survey
        2019-2023 5-year estimates, the City of Ballwin as a whole), which does
        not tell you the condition or material of a lateral. MSD&rsquo;s Valley
        Drive Sanitary Relief Phase III project in Ballwin and Clarkson Valley
        concerns the public sewer, and its schedule is tentative.
      </p>
      <p>
        For a building backup, MSD asks you to call (314) 768-6260 (MSD&rsquo;s
        number, not ours). If what we see goes beyond cleaning, we will say so
        plainly. Jetting clears what can be removed. It does not tell you
        whether the City&rsquo;s program applies to your line.
      </p>
    </>
  ),
  problems: [
    ...problems.map((p, i) => ({ ...p, image: slots.problems[i] })),
    {
      title: "Roots that return after clearing",
      description:
        "The City treats roots that clearing once a year or less can control as maintenance, and roots needing it more often as a covered repair. Jetting removes loose or accessible roots, not the opening they came through, so a camera look helps show where they enter.",
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
      "This page covers Ballwin. Lateral programs and sewer details differ by municipality, so use the page for your address.",
    pageIds: [
      id("loc-stl-st-louis-city"),
      id("loc-stl-chesterfield"),
      id("loc-stl-florissant"),
      id("loc-stl-st-charles"),
    ],
    availabilityStatement: "Ballwin is a service area, not an office location.",
  },
  // Every relevant question from the Ballwin location page and the hydro
  // jetting service page (see `faq` above).
  faq,
  relatedPageIds: [
    id("loc-stl-ballwin"),
    id("svc-hydro-jetting"),
    id("svc-sewer-cleaning"),
    id("svc-sewer-camera-inspection"),
  ],
  relatedTitle: "Related pages",
  cta: {
    title: "Request hydro jetting in Ballwin",
    body: "Tell us what your line is doing, and ask what is included before you book.",
  },
};
