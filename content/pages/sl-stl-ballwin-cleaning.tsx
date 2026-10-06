/**
 * Ballwin, MO + Sewer Cleaning (`sl-ballwin-cleaning`).
 *
 * Same recipe as `sl-lv-city-cleaning`. One local source (`ballwinContent`)
 * x one service source (`svc-sewer-cleaning` v2). Nothing here is new research.
 *
 * Section recipe (each section ties a Ballwin fact to what cleaning does):
 *   1. City program   - roots cleared once a year or less are normal
 *                       maintenance; cabling and video are not paid for
 *   2. Older clay     - cleaning clears the pipe, it does not repair it; the
 *                       City program pays for repair, we do not perform it
 *   3. Housing age    - 1976 median vs. "cleaning removes the obstruction, not
 *                       necessarily the cause"
 *   4. Who to call    - MSD for a building backup, City Inspections and Public
 *                       Works (THEIR numbers), our private-lateral scope
 *
 * ⚠ MSD AND CITY NUMBERS AND DOLLAR TERMS ARE THEIRS, not ours. The company
 * phone comes from `marketOperatingDetail['st-louis-mo']`. No price, offer,
 * response time, emergency or same-day claim, guarantee or equipment spec
 * appears. Equipment names appear only inside the process steps lifted from
 * the service page. The 1976 median is the location page's published figure
 * (its primary Census check is a TODO there).
 *
 * Audit: docs/source-reports/st-louis/sl-ballwin-cleaning.md
 */

import { marketOperatingDetail } from "@/data/markets/markets";
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

const stl = marketOperatingDetail["st-louis-mo"];
if (stl === undefined)
  throw new Error("marketOperatingDetail is missing st-louis-mo");

const problems = SERVICE_PROBLEMS["svc-sewer-cleaning"];
const inclusions = SERVICE_INCLUSIONS["svc-sewer-cleaning"];
const shots = SERVICE_PROBLEM_SHOTS["svc-sewer-cleaning"];
if (problems === undefined || inclusions === undefined || shots === undefined) {
  throw new Error(
    "sl-ballwin-cleaning: shared sewer cleaning blocks are missing",
  );
}

const v2 = serviceContent[id("svc-sewer-cleaning")]?.v2;
if (v2 === undefined || ballwinContent.faq === undefined) {
  throw new Error(
    "sl-ballwin-cleaning: source service v2 or location FAQ is missing",
  );
}

const slots = pageImageSlots("sl-ballwin-cleaning", {
  hero: {
    alt: "Technician setting up sewer cleaning equipment at a cleanout beside a home",
    shot: "Technician with a cleaning machine and cable or hose at a residential cleanout, no identifiable address",
  },
  problems: [shots[0], shots[1], shots[2], shots[3]] as const,
});

/**
 * Every question from the Ballwin location page and the sewer cleaning
 * service page. The location page has no utility-transfer question, so
 * nothing is skipped. The service page's cost question (DEC-088 wording) is
 * carried as published.
 */
const faq = mergeRelevantFaqs(ballwinContent.faq, v2.faq, [], "In Ballwin");

export const ballwinCleaningContent: ServiceLocationPageContent = {
  seoTitle: "Sewer Cleaning in Ballwin, MO",
  metaDescription:
    "Sewer cleaning in Ballwin, MO. The City treats roots cleared once a year or less as maintenance. See what cleaning does and what it does not.",
  serviceDescription:
    "Sewer cleaning is the removal of grease, roots, deposits, debris, and other material that restricts flow in an accessible private sewer line, for properties in Ballwin, Missouri.",
  heroImage: slots.hero,
  ctaImage: slots.cta,
  sources: ballwinContent.sources,
  hero: {
    eyebrow: "Ballwin, MO",
    title: "Sewer Cleaning in Ballwin",
    intro: (
      <p>
        In Ballwin, the City treats clearing roots once a year or less as normal
        maintenance, and MSD says the owner maintains and repairs the private
        lateral. Sewer cleaning removes grease, roots, debris and other buildup
        from the accessible private line. It clears the pipe. It does not repair
        it.
      </p>
    ),
  },
  body: (
    <>
      <h2>Where Ballwin draws the line between cleaning and repair</h2>
      <p>
        The City&rsquo;s Sewer Lateral Repair Program treats roots that clearing
        once a year or less can control as normal maintenance, and roots that
        need clearing more than once a year as a covered repair. The program
        does not pay for cabling to clear a blockage. That makes cleaning the
        maintenance side of owning the lateral, and the owner&rsquo;s to
        arrange.
      </p>
      <p>
        When cabling cannot open a line, the City asks the application to
        include paid invoices from the cabling contractors describing what they
        found. Ask us what the written findings for your visit will cover, and
        ask the Inspections Department what it accepts.
      </p>

      <h2>
        What cleaning does on an older Ballwin lateral, and what it does not
      </h2>
      <p>
        Hydraulic or mechanical equipment, chosen for the line, removes the
        grease, roots, deposits or debris that restrict flow. Ballwin says most
        older laterals in the city are clay pipe, which tends to crack, break,
        separate at joints and let roots in. Cleaning does not repair a cracked,
        offset, separated or collapsed pipe, and a line that flows again is not
        proof the pipe is sound.
      </p>
      <p>
        The City program pays for excavation and repair of a failed section, up
        to $4,500 per repair (the City&rsquo;s terms, not a price from us). It
        uses its own City-approved contractor. The Sewer Pros does not perform
        repairs or replacements.
      </p>

      <h2>A 1976 median year built does not settle what is in the line</h2>
      <p>
        Ballwin&rsquo;s median year built is 1976, according to the U.S. Census
        Bureau&rsquo;s American Community Survey (2019-2023 5-year estimates,
        the City of Ballwin as a whole). The City says defects in clay pipe can
        exist while the line works normally, so the year says little about what
        is in yours.
      </p>
      <p>
        When a clog keeps returning, buildup, roots or debris may remain, or a
        pipe condition may be involved. Cleaning removes the obstruction, not
        necessarily what is causing it, and a camera can help show which.
      </p>

      <h2>MSD, the City, and the private lateral we clean</h2>
      <p>
        MSD owns and maintains the public sewer main. For a building backup it
        asks you to call (314) 768-6260 (MSD&rsquo;s number, not ours) so it can
        inspect. Our cleaning covers accessible private-property lines, not the
        public main. Public Works, at (636) 227-9000 (the City&rsquo;s number),
        takes questions on sanitary sewer repair permits and excavation in the
        street right-of-way.
      </p>
      <p>
        To talk through cleaning your private lateral, call The Sewer Pros at{" "}
        {stl.phone}. If sewage is backing up into your home, contact MSD first.
      </p>
    </>
  ),
  problems: [
    ...problems.map((p, i) => ({ ...p, image: slots.problems[i] })),
    {
      title: "Roots that keep coming back",
      description:
        "The City looks at how often roots must be cleared: once a year or less is maintenance, more than once a year is a covered repair. Cleaning removes the roots in the line, not the opening they entered through, and a camera can show where they enter.",
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
  // Every relevant question from the Ballwin location page and the sewer
  // cleaning service page (see `faq` above).
  faq,
  relatedPageIds: [
    id("loc-stl-ballwin"),
    id("svc-sewer-cleaning"),
    id("svc-hydro-jetting"),
    id("svc-sewer-cleaning-camera-inspection"),
  ],
  relatedTitle: "Related pages",
  cta: {
    title: "Request sewer cleaning in Ballwin",
    body: "Have the line you maintain cleaned, and ask whether a camera look before or after is included.",
  },
};
