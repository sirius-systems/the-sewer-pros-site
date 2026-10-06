/**
 * City of San Diego, CA + Hydro Jetting (`sl-sd-city-hydro`).
 *
 * Authority: CLAUDE.md §9, §22, §24; docs/14-content-specification.md §43, §79.
 * Same recipe as `sl-lv-city-hydro`. One local source (`sanDiegoCityContent`)
 * x one service source (`svc-hydro-jetting` v2). Nothing here is new research.
 *
 * Section recipe (each section ties a City of San Diego fact to what jetting does):
 *   1. Maintenance - Council Policy 400-10 and the City's roots/grease
 *      statement; the City's cleanout flush is not jetting or an inspection
 *   2. Can / cannot clear - jetting limits + no City help with lateral costs
 *      found and the suspended City crew lateral program
 *   3. Where the line ends - owner maintains to the City main (street,
 *      easement, canyon); a break beyond the property line goes through the
 *      City's Plumber's Report process
 *   4. Nonstandard laterals and permits - EMRA list (slope, depth, trees,
 *      angle) vs. "jetting depends on the pipe"; no City statement on permits
 *      for private-property work
 *
 * The City of San Diego location page has no housing-age section, so none is
 * used here.
 *
 * ⚠ CITY NUMBERS ARE THE CITY'S. The company phone is not repeated here. No
 * price, offer, response time, guarantee, emergency or same-day claim, pressure
 * or flow figure appears in the body copy. The service page's cost and same-day
 * FAQ answers (DEC-088 wording) are carried as published (DEC-139), as on the
 * Las Vegas page. Equipment names appear only inside the process steps lifted
 * from the service page.
 */

import type { PageId, ServiceLocationPageContent } from "@/types";
import { sanDiegoCityContent } from "./san-diego-city";
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
  throw new Error("sl-sd-city-hydro: shared hydro jetting blocks are missing");
}

const v2 = serviceContent[id("svc-hydro-jetting")]?.v2;
if (v2 === undefined || sanDiegoCityContent.faq === undefined) {
  throw new Error(
    "sl-sd-city-hydro: source service v2 or location FAQ is missing",
  );
}

const slots = pageImageSlots("sl-sd-city-hydro", {
  hero: {
    alt: "Hydro jetting hose and nozzle at a cleanout beside a home",
    shot: "Jetting hose entering a residential cleanout, jetter trailer at the curb, no plate or identifiable address",
  },
  problems: [shots[0], shots[1], shots[2], shots[3]] as const,
});

/**
 * Every question from the City of San Diego location page and the hydro
 * jetting service page. Nothing is skipped. The service page's cost and
 * same-day answers (DEC-088 wording) are included as published (DEC-139), as on
 * the Las Vegas page.
 */
const faq = mergeRelevantFaqs(
  sanDiegoCityContent.faq,
  v2.faq,
  [],
  "In San Diego",
);

export const sanDiegoCityHydroContent: ServiceLocationPageContent = {
  seoTitle: "Hydro Jetting in San Diego, CA",
  metaDescription:
    "Hydro jetting in San Diego, CA. The City says owners maintain the lateral to its main. See what jetting clears, what it cannot fix, and how the City sees it.",
  serviceDescription:
    "Hydro jetting cleans an accessible sewer or drain line with pressurized water sent through a hose and nozzle, for properties in the City of San Diego, California.",
  heroImage: slots.hero,
  ctaImage: slots.cta,
  sources: sanDiegoCityContent.sources,
  hero: {
    eyebrow: "San Diego, CA",
    title: "Hydro Jetting in San Diego",
    intro: (
      <p>
        In the City of San Diego, the City says the owner maintains the sewer
        lateral all the way to the City sewer main, and names roots and cooking
        grease as leading causes of spills from private laterals. Hydro jetting
        cleans the accessible line with pressurized water, loosening buildup and
        flushing it out. It is a cleaning method, not a repair, and the method
        should be matched to what the line looks like.
      </p>
    ),
  },
  body: (
    <>
      <h2>
        Roots and grease are the City&rsquo;s own list, and jetting is one way
        to clear them
      </h2>
      <p>
        The City of San Diego names roots and cooking grease as leading causes
        of spills from private laterals, and Council Policy 400-10 says the
        owner is responsible for periodic clearing of roots and other foreign
        matter from the lateral. The City&rsquo;s own suggestion for a lateral
        with a cleanout is a high-pressure hose flush at least once a year, and
        it says a flush is not an inspection.
      </p>
      <p>
        Hydro jetting is a different job: pressurized water sent through a hose
        and nozzle that advances through the line, scours the pipe wall and
        moves debris along. More water is not automatically better, and added
        water can contribute to a backup if the line cannot carry it away, so
        the method and settings are matched to the line.
      </p>

      <h2>What jetting can clear, and the repair question it leaves open</h2>
      <ul>
        <li>Grease and soap buildup</li>
        <li>Debris and wipes caught in the line</li>
        <li>Roots that are loose or accessible</li>
        <li>General buildup on the pipe wall</li>
      </ul>
      <p>
        Jetting does not correct a cracked or broken pipe, an offset or
        separated joint, a collapsed section, or a low spot that holds water.
        The City says its program for City crews to install sewer laterals is
        currently suspended, and we found no City grant or reimbursement for
        lateral work on the pages we reviewed (&ldquo;none found&rdquo;, not a
        statement that none exists). The Sewer Pros does not repair or replace
        sewer lines.
      </p>

      <h2>
        A lateral that can end in a canyon, and a break the City handles
        differently
      </h2>
      <p>
        The City says the owner maintains the lateral to its connection with the
        City main, even when that connection is in the street, an easement or a
        canyon. Jetting is for accessible private lines and does not show where
        the connection is.
      </p>
      <p>
        When a licensed plumber finds a break or collapse beyond the property
        line, the City directs the plumber to call 619-515-3525 and file a
        Plumber&rsquo;s Report (the City&rsquo;s number, not ours). Visible
        structural defects call for a closer evaluation before cleaning, which
        is why a camera look first helps when it is included.
      </p>

      <h2>
        Slope, depth and trees: the City&rsquo;s rule and the jetting question
      </h2>
      <p>
        The City requires an Encroachment Maintenance Removal Agreement for
        certain nonstandard laterals, including those that connect in an
        easement, enter the main at an angle, run near trees or have inadequate
        slope or unusual depth. That is a City design and permit rule, not a
        finding about your line. Whether jetting suits a pipe depends on its
        condition and material, not on a rule.
      </p>
      <p>
        We found no City page on whether work confined to private property needs
        a permit, so ask Development Services at 619-446-5242 (the City&rsquo;s
        number) before work starts. If what we see goes beyond cleaning, we will
        say so plainly.
      </p>
    </>
  ),
  problems: [
    ...problems.map((p, i) => ({ ...p, image: slots.problems[i] })),
    {
      title: "A lateral with a nonstandard layout",
      description:
        "The City names easement connections, angled entry, tree proximity, and unusual slope or depth as laterals needing a special agreement. That is a City rule, not a finding. Whether jetting suits the line depends on its observed condition.",
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
    title: "Other San Diego area locations",
    intro:
      "This page covers the City of San Diego. Sewer agencies and lateral rules differ across San Diego County, so use the page for your address.",
    pageIds: [
      id("loc-sd-san-marcos"),
      id("loc-sd-carlsbad"),
      id("loc-sd-escondido"),
      id("loc-sd-oceanside"),
      id("loc-sd-chula-vista"),
      id("loc-sd-mission-valley"),
    ],
    availabilityStatement:
      "San Diego is a service area, not an office location.",
  },
  // Every relevant question from the City of San Diego location page and the
  // hydro jetting service page (see `faq` above).
  faq,
  relatedPageIds: [
    id("loc-sd-san-diego"),
    id("svc-hydro-jetting"),
    id("svc-sewer-cleaning"),
    id("svc-sewer-camera-inspection"),
  ],
  relatedTitle: "Related pages",
  cta: {
    title: "Request hydro jetting in San Diego",
    body: "Tell us what your line is doing, and ask what is included before you book.",
  },
};
