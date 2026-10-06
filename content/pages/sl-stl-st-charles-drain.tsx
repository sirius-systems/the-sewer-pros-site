/**
 * St. Charles, MO + Drain Cleaning (`sl-st-charles-drain`).
 *
 * Built from exactly two sources, as `sl-lv-city-drain` is:
 *   LOCATION  `stCharlesContent`  (content/pages/st-louis-st-charles.tsx)
 *   SERVICE   `svc-drain-cleaning` v2 content (content/pages/services.tsx)
 *             and `./sl-blocks/drain-cleaning`
 *
 * Section recipe (each ties a St. Charles fact to what THIS service does or
 * cannot do; swap the city or the service and the copy breaks):
 *   1. Responsibility        - the City Code's foundation-to-main lateral and
 *                              owner-arranged work vs. fixture drains upstream
 *                              of it; the City's main is not a drain-cleaning job.
 *   2. One drain, several, or a backup - the service's triage, plus the City's
 *                              "cable the lateral first, then Public Works"
 *                              guidance (the CITY's number).
 *   3. Housing age           - ACS figures vs. what a drain clog does and does
 *                              not depend on.
 *   4. Program terms         - what the City program reimburses and excludes
 *                              (cabling, repeat claims) vs. what cleaning does
 *                              not fix; no repairs by us.
 *
 * ⚠ ST. CHARLES RUNS ITS OWN SEWER SYSTEM. No MSD fact or number is used.
 * ⚠ CITY NUMBERS AND DOLLAR TERMS ARE THE CITY'S, not ours. The company phone is
 * read from `marketOperatingDetail`, never typed. No price, offer, response
 * time, guarantee, emergency or same-day claim. We make no claim that our work
 * satisfies the City's cabling certification. St. Charles is a service area,
 * not an office. Repair and replacement are never presented as offered.
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
import { inclusions, problems, shots } from "./sl-blocks/drain-cleaning";

const id = (value: string): PageId => value as PageId;

const stl = marketOperatingDetail["st-louis-mo"];
if (stl === undefined)
  throw new Error("marketOperatingDetail is missing st-louis-mo");

// Alt text stays neutral: no place-specific photo is claimed.
const slots = pageImageSlots("sl-st-charles-drain", {
  hero: {
    alt: "Drain cleaning equipment at a fixture in a home",
    shot: "Drain machine at a floor or tub drain, residential property, no identifiable address",
  },
  problems: [shots[0], shots[1], shots[2], shots[3]] as const,
});

const v2 = serviceContent[id("svc-drain-cleaning")]?.v2;
if (v2 === undefined || stCharlesContent.faq === undefined) {
  throw new Error("sl-st-charles-drain: source content is missing");
}

const process: ProcessContent[] = (v2.process?.steps ?? []).map((step) => ({
  title: step.title,
  description:
    typeof step.description === "string" ? step.description : undefined,
}));

/**
 * Every question from the St. Charles location page and the drain cleaning
 * page, minus the ones below.
 */
const faq = mergeRelevantFaqs(
  stCharlesContent.faq,
  v2.faq,
  [
    // This page IS an area page; the question is the hub's.
    "Do you clean drains in St. Louis, San Diego, and Las Vegas?",
    // Same answer, fuller, under "Does drain cleaning repair a damaged pipe?".
    "Can drain cleaning fix a broken or collapsed pipe?",
    // Same answer, fuller, under "Can tree roots grow into drain pipes?".
    "Can cleaning remove tree roots?",
  ],
  "In St. Charles",
);

export const stCharlesDrainContent: ServiceLocationPageContent = {
  seoTitle: "Drain Cleaning in St. Charles, MO",
  metaDescription:
    "Drain cleaning in St. Charles, MO. The City tells residents to cable the lateral first, then call Public Works. See what drain cleaning does and does not fix.",
  serviceDescription:
    "Drain cleaning removes grease, roots, deposits, debris and other restricting material from a drain line using a rotating cable, water jetting, or both, for homes in the City of St. Charles, Missouri. It restores flow and does not repair the pipe.",
  heroImage: slots.hero,
  ctaImage: slots.cta,
  sources: stCharlesContent.sources,
  hero: {
    eyebrow: "St. Charles, MO",
    title: "Drain Cleaning in St. Charles",
    intro: (
      <p>
        The City of St. Charles runs its own sewer system, and its lateral
        program is built around owner-arranged work: the owner chooses the
        contractor. The drains inside your home sit upstream of that lateral.
        Drain cleaning clears the grease, roots, debris and buildup in a fixture
        or branch line. It does not reach the City&rsquo;s main, and it does not
        repair the pipe.
      </p>
    ),
  },
  body: (
    <>
      <h2>Your fixture drains sit upstream of a lateral the owner arranges</h2>
      <p>
        The City Code describes the sewer lateral as the part of a residential
        property&rsquo;s sanitary sewer piping that runs from the foundation to
        a sewer main. The City&rsquo;s Public Works Sewer Division runs the
        public system, not MSD, and under the City&rsquo;s program the owner
        obtains the bids and chooses the contractor.
      </p>
      <p>
        Drain cleaning usually means the fixture and branch lines in your home.
        Sewer cleaning means the larger line that carries wastewater away from
        the building. Neither reaches the public sewer main or the connection to
        it.
      </p>

      <h2>
        One drain, several drains, or a backup the City says to cable first
      </h2>
      <ul>
        <li>
          <strong>One fixture slow or clogged:</strong> usually that
          fixture&rsquo;s own drain line, and the usual fit for drain cleaning.
        </li>
        <li>
          <strong>Several fixtures slow or gurgling:</strong> a shared branch or
          the larger sewer line, where sewer cleaning and a camera look may
          help.
        </li>
        <li>
          <strong>Water or sewage coming up:</strong> avoid contact, keep
          children and pets away, and limit water use while you arrange help.
        </li>
      </ul>
      <p>
        These are clues, not proof. For sewage backing up into a home, the City
        says to have a plumber or drainlayer cable the lateral, then contact
        Public Works about its lateral program, at (636) 949-3363 (the
        City&rsquo;s number, not ours). We make no claim that our work satisfies
        the written cabling certification the City asks for. To reach The Sewer
        Pros, call {stl.phone}.
      </p>

      <h2>A 1986 median year built says little about a clog</h2>
      <p>
        St. Charles&rsquo;s median year built is 1986, according to the U.S.
        Census Bureau&rsquo;s 2024 American Community Survey 5-year estimates,
        and the City does not publish a pipe material or installation era. A
        clog depends on what went down the drain, not on the year the house was
        built.
      </p>
      <p>
        A drain that works again is not proof of a sound pipe, and a blockage is
        not proof of a broken one. When a drain clogs again after it was
        cleared, the restriction may not have been fully removed, or something
        in the line may be rebuilding it. A camera look at the accessible line
        may help show which.
      </p>

      <h2>What the City program leaves out, and what cleaning does not fix</h2>
      <p>
        The City program reimburses 90 percent of the authorized cost of
        repairing a defective lateral, up to $7,500 (the City&rsquo;s terms, not
        our prices). Its undated information sheet lists the initial cabling and
        repeat claims within 12 months among the exclusions, so confirm those
        with Public Works.
      </p>
      <p>
        Cleaning does not fix a cracked, broken or collapsed pipe, an offset or
        separated joint, or roots entering at a joint. We do not perform repairs
        or replacements. When a camera is used you receive the video and written
        findings, which you can compare against any estimate.
      </p>
    </>
  ),
  problems: [
    ...problems.map((p, i) => ({ ...p, image: slots.problems[i] })),
    {
      title: "A backup the City says to cable first",
      description:
        "For sewage backing up into a home, the City says to have a plumber or drainlayer cable the lateral and then contact Public Works about its program. Drain cleaning clears material from the line. It does not repair a defect.",
      image: slots.problems[3],
    },
  ],
  // Six items: renders as two rows of three.
  inclusions,
  process,
  coverage: {
    title: "Other St. Louis area locations",
    intro:
      "This page covers the City of St. Charles. Sewer agencies and lateral rules differ across the St. Louis area, so use the page for your address.",
    pageIds: [
      id("loc-stl-st-louis-city"),
      id("loc-stl-chesterfield"),
      id("loc-stl-ballwin"),
      id("loc-stl-florissant"),
    ],
    availabilityStatement:
      "St. Charles is a service area, not an office location.",
  },
  // All relevant questions from the St. Charles location page and the drain
  // cleaning page (see `faq` above).
  faq,
  relatedPageIds: [
    id("loc-stl-st-charles"),
    id("svc-drain-cleaning"),
    id("svc-sewer-cleaning"),
    id("svc-sewer-camera-inspection"),
  ],
  relatedTitle: "Related pages",
  cta: {
    title: "Request drain cleaning in St. Charles",
    body: "Get a slow or clogged drain cleared, with video and written findings when a camera is used.",
  },
};
