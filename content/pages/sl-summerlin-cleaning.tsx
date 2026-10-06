/**
 * Summerlin, NV + Sewer Cleaning (`sl-summerlin-cleaning`).
 *
 * Authority: CLAUDE.md §9, §22, §24. Same recipe as `sl-nlv-cleaning`,
 * `sl-lv-city-cleaning` and `sl-henderson-cleaning`. One local source
 * (`summerlinContent`) x one service source (`svc-sewer-cleaning` v2).
 * Nothing here is new research.
 *
 * Section recipe (each section ties a Summerlin fact to what cleaning does):
 *   1. Whose line - the City and CCWRD word the owner's side differently;
 *                       our cleaning is accessible private lines only.
 *   2. CCWRD's roots wording - periodic cleaning is the maintenance side;
 *                       cleaning is not repair.
 *   3. A main stoppage - the City's statement on upstream properties and
 *                       manholes; the City's and CCWRD's numbers (not ours).
 *   4. No program, an optional plan, permits, company phone.
 *
 * ⚠ SUMMERLIN IS SPLIT AND IS NOT A CITY. Every local fact names its agency;
 * the page never says which agency serves an address. THE AGENCY NUMBERS ARE
 * THE AGENCIES'. The company phone comes from
 * `marketOperatingDetail['las-vegas-nv']`. No price, offer, response time,
 * emergency or same-day claim, guarantee or equipment spec appears. Equipment
 * names appear only inside the process steps lifted from the service page.
 */

import { marketOperatingDetail } from "@/data/markets/markets";
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

const lv = marketOperatingDetail["las-vegas-nv"];
if (lv === undefined)
  throw new Error("marketOperatingDetail is missing las-vegas-nv");

const problems = SERVICE_PROBLEMS["svc-sewer-cleaning"];
const inclusions = SERVICE_INCLUSIONS["svc-sewer-cleaning"];
const shots = SERVICE_PROBLEM_SHOTS["svc-sewer-cleaning"];
if (problems === undefined || inclusions === undefined || shots === undefined) {
  throw new Error(
    "sl-summerlin-cleaning: shared sewer cleaning blocks are missing",
  );
}

const v2 = serviceContent[id("svc-sewer-cleaning")]?.v2;
if (v2 === undefined || summerlinContent.faq === undefined) {
  throw new Error(
    "sl-summerlin-cleaning: source service v2 or location FAQ is missing",
  );
}

const slots = pageImageSlots("sl-summerlin-cleaning", {
  hero: {
    alt: "Technician setting up sewer cleaning equipment at a residential cleanout",
    shot: "Technician with a cleaning machine and cable or hose at a residential cleanout, no identifiable address",
  },
  problems: [shots[0], shots[1], shots[2], shots[3]] as const,
});

const process: ProcessContent[] = (v2.process?.steps ?? []).map((step) => ({
  title: step.title,
  description:
    typeof step.description === "string" ? step.description : undefined,
}));

/**
 * Every question from the Summerlin location page and the sewer cleaning
 * service page. Nothing is skipped: the Summerlin FAQ has no utility-account
 * question, and the only overlap ("What does a sewer camera inspection
 * show?") is a location question that frames what a camera adds to cleaning.
 * The service page's cost question (DEC-088 wording) is carried as published.
 */
const faq = mergeRelevantFaqs(summerlinContent.faq, v2.faq, [], "In Summerlin");

export const summerlinCleaningContent: ServiceLocationPageContent = {
  seoTitle: "Sewer Cleaning in Summerlin, NV",
  metaDescription:
    "Sewer cleaning in Summerlin, NV. Two agencies word the owner’s side differently. See what cleaning clears and what it does not repair.",
  serviceDescription:
    "Sewer cleaning is the removal of grease, roots, deposits, debris, and other material that restricts flow in an accessible private sewer line, for properties in Summerlin, Nevada.",
  heroImage: slots.hero,
  ctaImage: slots.cta,
  sources: summerlinContent.sources,
  hero: {
    eyebrow: "Summerlin, NV",
    title: "Sewer Cleaning in Summerlin",
    intro: (
      <p>
        Clark County&rsquo;s boundary map shows Summerlin partly in the City of
        Las Vegas and partly in unincorporated Clark County, and both agencies
        describe the private lateral as the owner&rsquo;s. Sewer cleaning
        removes grease, roots, debris and other buildup from the accessible
        private line. It clears the pipe. It does not repair it.
      </p>
    ),
  },
  body: (
    <>
      <h2>Two agencies, and cleaning covers only the private line</h2>
      <p>
        Clark County&rsquo;s 2024 map shows Summerlin partly in the City of Las
        Vegas and partly in unincorporated Clark County. The City says owners
        maintain private sewer laterals up to the connection to the City main.
        CCWRD says a lateral that connects a house to the sewer main in the
        street is the owner&rsquo;s responsibility, including cleaning. Our
        cleaning covers accessible private-property sewer and drain lines, not
        public sewer mains.
      </p>
      <p>
        Cleaning does not show which agency serves your address or where the
        connection sits, and we did not find where either agency&rsquo;s main
        ends at any Summerlin address.
      </p>

      <h2>CCWRD&rsquo;s roots wording, and what cleaning does not repair</h2>
      <p>
        CCWRD says owners are also responsible for periodic cleaning to keep the
        lateral free of foreign matter, including roots. That is the maintenance
        side of owning the line: hydraulic or mechanical equipment, chosen for
        the line, removes the grease, roots, deposits or debris that restrict
        flow.
      </p>
      <p>
        It does not repair a cracked, offset, separated or collapsed pipe, and a
        line that flows again is not proof the pipe is sound. CCWRD puts repair
        and replacement with the owner too. We do not perform repairs or
        replacements.
      </p>

      <h2>A main stoppage is not a lateral blockage</h2>
      <p>
        The City says a stoppage in a City main can affect several upstream
        properties and may overflow manholes, and that a public-main obstruction
        is something its team will address. Cleaning your private line does not
        clear a public main.
      </p>
      <p>
        The City&rsquo;s sewer-backup post lists Streets &amp; Sanitation at
        702-229-6227 for a suspected main stoppage or manhole overflow. CCWRD
        lists 702-668-8354 for a sanitary sewer spill or odors. Those are the
        agencies&rsquo; numbers, not ours, and we found no hours, after-hours
        number or emergency line for either.
      </p>

      <h2>No program found, an optional plan, and permits</h2>
      <p>
        We found no City or CCWRD lateral repair, grant or reimbursement program
        on the pages we reviewed (&ldquo;none found&rdquo;, not a statement that
        none exists). The City&rsquo;s page promotes an optional plan with a
        private company that is separate from the City. We found no price or
        coverage terms, and whether it applies at a Summerlin address is not
        stated. The Sewer Pros has no connection to it and does not recommend
        it. We found no statement on whether cleaning needs a permit.
      </p>
      <p>
        To talk through cleaning a line on your side of the connection, call The
        Sewer Pros at {lv.phone}. The Las Vegas Valley is a newer market for us;
        our longest-running work is in St. Louis and San Diego.
      </p>
    </>
  ),
  problems: [
    ...problems.map((p, i) => ({ ...p, image: slots.problems[i] })),
    {
      title: "Backups at several properties",
      description:
        "The City says a stoppage in a City main can affect several upstream properties and may overflow manholes. Cleaning clears an accessible private line, not a public main, and the City and CCWRD each list their own number for a main stoppage or spill.",
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
    id("svc-sewer-cleaning"),
    id("svc-hydro-jetting"),
    id("svc-sewer-cleaning-camera-inspection"),
  ],
  relatedTitle: "Related pages",
  cta: {
    title: "Request sewer cleaning in Summerlin",
    body: "Have the line you maintain cleaned, and ask whether a camera look before or after is included.",
  },
};
