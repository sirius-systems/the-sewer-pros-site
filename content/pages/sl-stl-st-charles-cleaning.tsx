/**
 * St. Charles, MO + Sewer Cleaning (`sl-st-charles-cleaning`).
 *
 * Same recipe as the Las Vegas cleaning pages. One local source
 * (`stCharlesContent`) x one service source (`svc-sewer-cleaning` v2). Nothing
 * here is new research.
 *
 * Section recipe (each section ties a St. Charles fact to what cleaning does):
 *   1. Responsibility - the City's Sewer Division runs the public system (not
 *      MSD); the lateral is the owner's to arrange; our cleaning is accessible
 *      private lines only
 *   2. Cabling first  - the City asks for a cabled line before its program;
 *      cleaning clears, it does not repair, and makes no claim to satisfy the
 *      City's certification
 *   3. Housing age   - Census median 1986 tied to "cleaning removes the
 *      obstruction, not necessarily the cause"
 *   4. Contacts      - City numbers (the City's) + the company phone
 *
 * ⚠ ST. CHARLES IS OUTSIDE MSD. No MSD fact or number appears.
 * ⚠ CITY NUMBERS AND DOLLAR TERMS ARE THE CITY'S. The company phone comes from
 * `marketOperatingDetail['st-louis-mo']`. No price, offer, response time,
 * emergency or same-day claim, guarantee or equipment spec appears. Equipment
 * names appear only inside the process steps lifted from the service page.
 *
 * Audit: docs/source-reports/st-louis/sl-st-charles-cleaning.md
 */

import { marketOperatingDetail } from "@/data/markets/markets";
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

const stl = marketOperatingDetail["st-louis-mo"];
if (stl === undefined)
  throw new Error("marketOperatingDetail is missing st-louis-mo");

const problems = SERVICE_PROBLEMS["svc-sewer-cleaning"];
const inclusions = SERVICE_INCLUSIONS["svc-sewer-cleaning"];
const shots = SERVICE_PROBLEM_SHOTS["svc-sewer-cleaning"];
if (problems === undefined || inclusions === undefined || shots === undefined) {
  throw new Error(
    "sl-stl-st-charles-cleaning: shared sewer cleaning blocks are missing",
  );
}

const v2 = serviceContent[id("svc-sewer-cleaning")]?.v2;
if (v2 === undefined || stCharlesContent.faq === undefined) {
  throw new Error(
    "sl-stl-st-charles-cleaning: source service v2 or location FAQ is missing",
  );
}

const slots = pageImageSlots("sl-st-charles-cleaning", {
  hero: {
    alt: "Technician setting up sewer cleaning equipment at a cleanout beside a home",
    shot: "Technician with a cleaning machine and cable or hose at a residential cleanout, no identifiable address",
  },
  problems: [shots[0], shots[1], shots[2], shots[3]] as const,
});

/**
 * Every question from the St. Charles location page and the sewer cleaning
 * service page. The location page has no utility-transfer question, so nothing
 * is skipped. The service page's cost question (DEC-088 wording) is carried as
 * published.
 */
const faq = mergeRelevantFaqs(
  stCharlesContent.faq,
  v2.faq,
  [],
  "In St. Charles",
);

export const stCharlesCleaningContent: ServiceLocationPageContent = {
  seoTitle: "Sewer Cleaning in St. Charles, MO",
  metaDescription:
    "Sewer cleaning in St. Charles, MO. The City runs its own sewer and asks for a cabled line before its lateral program. See what cleaning does and does not do.",
  serviceDescription:
    "Sewer cleaning is the removal of grease, roots, deposits, debris, and other material that restricts flow in an accessible private sewer line, for properties in the City of St. Charles, Missouri.",
  heroImage: slots.hero,
  ctaImage: slots.cta,
  sources: stCharlesContent.sources,
  hero: {
    eyebrow: "St. Charles, MO",
    title: "Sewer Cleaning in St. Charles",
    intro: (
      <p>
        In the City of St. Charles, the City&rsquo;s Public Works Sewer Division
        runs the public sewer, not MSD, and the lateral from your foundation to
        the main is the line you arrange work on. Sewer cleaning removes grease,
        roots, debris and other buildup from the accessible private line. It
        clears the pipe. It does not repair it.
      </p>
    ),
  },
  body: (
    <>
      <h2>
        Where the City&rsquo;s sewer ends and the line you arrange work on
        begins
      </h2>
      <p>
        The City of St. Charles says its Sewer Division oversees the operation,
        maintenance and enhancement of the municipal sewer system, which the
        City says has 30 lift stations. The City Code describes the lateral as
        the sewer piping from a residential foundation to a sewer main, and
        under the City&rsquo;s program the owner obtains the bids and chooses
        the contractor.
      </p>
      <p>
        Our cleaning covers accessible private-property sewer and drain lines,
        not public sewer mains. Cleaning does not show where the connection is,
        and we did not find a published rule on who owns the part of a lateral
        under the street, so confirm with the City how its rules apply to your
        address.
      </p>

      <h2>
        The City asks for a cabled line first, and cleaning is not a repair
      </h2>
      <p>
        For a sewage backup, the City&rsquo;s guidance is to have a plumber or
        drainlayer cable the lateral, then contact Public Works about its Sewer
        Lateral Repair Program. The Code asks for written certification from a
        licensed master plumber or master drainlayer that the lateral has been
        cabled and that cabling did not resolve the problem. We make no claim
        that our cleaning satisfies that statement.
      </p>
      <p>
        Cleaning is the maintenance side of owning the line: equipment chosen
        for the line removes the grease, roots, deposits or debris that restrict
        flow. It does not patch or replace a cracked, offset, separated or
        collapsed pipe, which is what the City&rsquo;s program reimburses (90
        percent of the authorized cost, up to $7,500, the City&rsquo;s terms).
        The City&rsquo;s program sheet lists the initial cabling among the costs
        it does not cover; confirm with Public Works. The Sewer Pros does not
        perform repairs or replacements.
      </p>

      <h2>A 1986 median year built does not settle what is in the line</h2>
      <p>
        The U.S. Census Bureau&rsquo;s 2024 American Community Survey 5-year
        estimates put the median year built for St. Charles city homes at 1986,
        and our arithmetic on the Census rows puts about 62 percent of housing
        units at 1980 or later. The City does not publish a pipe material or
        installation era, so year built does not tell you what a lateral is made
        of.
      </p>
      <p>
        When a clog keeps returning in a house of any age, buildup, roots or
        debris may remain in the line, or a pipe condition may be involved.
        Cleaning removes the obstruction, not necessarily what is causing it,
        and a camera can help show which.
      </p>

      <h2>The City&rsquo;s contacts, and where cleaning fits</h2>
      <p>
        The City lists (636) 949-3363 for lateral program questions (the
        City&rsquo;s number, not ours) and Community Development at (636)
        949-3222 for permit and inspection questions on lateral repairs, with a
        $50 fee for each required inspection (also the City&rsquo;s). We did not
        find a direct Sewer Division backup number published by the City.
      </p>
      <p>
        To talk through cleaning a line on your side of the main, call The Sewer
        Pros at {stl.phone}. If sewage is actively backing up into your home,
        contact us to discuss the situation.
      </p>
    </>
  ),
  problems: [
    ...problems.map((p, i) => ({ ...p, image: slots.problems[i] })),
    {
      title: "A clog the City has told you to cable first",
      description:
        "The City asks for a cabled line before its lateral program, and a line that flows again is not proof the pipe is sound. Our cleaning clears accessible private lines, and a camera look can show whether a visible condition remains.",
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
  // Every relevant question from the St. Charles location page and the sewer
  // cleaning service page (see `faq` above).
  faq,
  relatedPageIds: [
    id("loc-stl-st-charles"),
    id("svc-sewer-cleaning"),
    id("svc-hydro-jetting"),
    id("svc-sewer-cleaning-camera-inspection"),
  ],
  relatedTitle: "Related pages",
  cta: {
    title: "Request sewer cleaning in St. Charles",
    body: "Have the line you maintain cleaned, and ask whether a camera look before or after is included.",
  },
};
