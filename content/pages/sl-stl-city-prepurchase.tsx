/**
 * St. Louis City, MO + Pre-Purchase Sewer Inspection (`sl-stl-city-prepurchase`).
 *
 * Authority: CLAUDE.md §9, §22, §24, §26; docs/14-content-specification.md §43.
 *
 * One local source (`stLouisCityContent`, `loc-stl-st-louis-city`) x one service
 * source (`svc-pre-purchase-sewer-inspection`, its `v2` block). Nothing here is
 * new research. Section recipe, each tied to what THIS service records or cannot:
 *   1. responsibility + buyingGuide - the lateral is the buyer's after closing,
 *      private to the MSD main even under the street
 *   2. municipalProgram - what the City program covers and excludes, and why a
 *      scope is not an eligibility finding
 *   3. housingAge + systemExplainer - older infrastructure and combined sewers
 *      vs. what a scope shows of one lateral
 *   4. whoToCall + buyingGuide - MSD first, a sewer scope vs. the home
 *      inspector's inspection
 * Swap the city and sections 1-4 fail; swap the service and 1-3 fail.
 *
 * Audit: docs/source-reports/st-louis/sl-stl-city-prepurchase.md
 *
 * ⚠ MSD AND CITY NUMBERS ARE THEIRS, not ours. No company phone, office, price,
 * offer, response time or guarantee appears. The "58 percent" housing figure and
 * the program's dollar fee are deliberately not used. No legal advice. Repair
 * and replacement are never offered.
 */

import type {
  PageId,
  ProcessContent,
  ServiceLocationPageContent,
} from "@/types";
import { serviceContent } from "./services";
import {
  SERVICE_INCLUSIONS,
  SERVICE_PROBLEMS,
  SERVICE_PROBLEM_SHOTS,
  mergeRelevantFaqs,
  pageImageSlots,
} from "./service-location-shared";
import { stLouisCityContent } from "./st-louis-city";

const id = (value: string): PageId => value as PageId;

const SERVICE_ID = "svc-pre-purchase-sewer-inspection";

const v2 = serviceContent[id(SERVICE_ID)]?.v2;
const serviceProblems = SERVICE_PROBLEMS[SERVICE_ID];
const serviceInclusions = SERVICE_INCLUSIONS[SERVICE_ID];
const serviceShots = SERVICE_PROBLEM_SHOTS[SERVICE_ID];
if (
  v2 === undefined ||
  serviceProblems === undefined ||
  serviceInclusions === undefined ||
  serviceShots === undefined ||
  stLouisCityContent.faq === undefined
) {
  throw new Error("sl-stl-city-prepurchase: source content is missing");
}

// Alt text stays neutral: no place-specific photo is claimed.
const slots = pageImageSlots("sl-stl-city-prepurchase", {
  hero: {
    alt: "Technician starting a pre-purchase sewer scope at a for-sale home",
    shot: "Technician at a for-sale property starting a pre-purchase scope, no identifiable address",
  },
  problems: [
    serviceShots[0],
    serviceShots[1],
    serviceShots[2],
    serviceShots[3],
  ] as const,
});

/**
 * Every question from the St. Louis City location page and the pre-purchase
 * service page, minus one: the location page's "What does a sewer camera
 * inspection show?" (the service page answers it in full as "What does a sewer
 * scope look for?" and "What does a sewer inspection not show?").
 */
const faq = mergeRelevantFaqs(
  stLouisCityContent.faq,
  v2.faq,
  ["What does a sewer camera inspection show?"],
  "In St. Louis City",
);

const steps: ProcessContent[] = (v2.process?.steps ?? []).map((step) => ({
  title: step.title,
  description:
    typeof step.description === "string" ? step.description : undefined,
}));

export const stLouisCityPrePurchaseContent: ServiceLocationPageContent = {
  seoTitle: "Pre-Purchase Sewer Inspection in St. Louis City, MO",
  metaDescription:
    "Buying in St. Louis City, MO? The lateral to the MSD main is private and yours after closing. See what a pre-purchase sewer scope shows and what it cannot.",
  serviceDescription:
    "A pre-purchase sewer inspection is a sewer camera inspection arranged during a home purchase, recording the visible condition of the accessible sewer line serving a home in St. Louis City, Missouri, before closing.",
  heroImage: slots.hero,
  ctaImage: slots.cta,
  sources: stLouisCityContent.sources,
  hero: {
    eyebrow: "St. Louis City, MO",
    title: "Pre-Purchase Sewer Inspection in St. Louis City",
    intro: (
      <p>
        If you buy a home in St. Louis City, MSD maintains the public sewer
        main, and the lateral from the building to it is private property, even
        under the street or alley. After closing that line is yours. A
        pre-purchase sewer inspection records the visible condition of the
        accessible line on video, with written findings, before you close.
      </p>
    ),
  },
  body: (
    <>
      <h2>What you take on when a St. Louis City sale closes</h2>
      <p>
        MSD says the lateral connecting a building to its public main, including
        the connection, is private property and normally the owner&rsquo;s to
        maintain and repair, even where it runs under the street or alley. The
        City says the same of the entire lateral from a home to the MSD main.
        After closing, that owner is you.
      </p>
      <p>
        A pre-purchase inspection is how you see that line first. It documents
        visible conditions in the section the camera reaches, on the day of the
        visit. It does not establish where the connection to the main is, or who
        is responsible at a given point.
      </p>

      <h2>The City repair program has limits a buyer should not assume away</h2>
      <p>
        The City&rsquo;s Sewer Lateral Repair Program is aimed at severe damage
        under the public right-of-way, for residential properties of six or
        fewer units with fully paid real-estate taxes. The City says it does not
        cover clearing clogs or tree roots anywhere on the lateral, or breaks
        under private property, and the City decides eligibility. Its program
        page is dated 2014, so confirm current terms with the Street Division.
      </p>
      <p>
        A scope is not an eligibility finding, and a finding is a visible
        observation, not a repair recommendation. The City also says replacing a
        lateral takes a plumbing permit and inspection, issued to City-certified
        licensed plumbing contractors. The Sewer Pros inspects and documents; it
        does not repair or replace.
      </p>

      <h2>Older City infrastructure, and what a scope shows of one lateral</h2>
      <p>
        Older City properties are served by older infrastructure, so some
        laterals may be very old. Older laterals were commonly vitrified clay,
        which wears at the joints and lets roots in, or cast iron, which
        corrodes and scales on the inside. Those are general industry timelines,
        not a statement about any one home, and many laterals have been repaired
        or replaced since.
      </p>
      <p>
        MSD says most of the City is served by combined sewers that can be
        overwhelmed in intense rain. That is a system-level fact, not a finding
        about the lateral you are buying. A scope records roots, cracks, offsets
        and standing water where the camera reaches, and a clear result is not
        proof the whole line is sound.
      </p>

      <h2>MSD first for a backup, and where a scope fits in the purchase</h2>
      <ul>
        <li>
          If a seller mentions sewage backing up through a floor drain, MSD asks
          that it be reported at (314) 768-6260 (MSD&rsquo;s number, not ours).
          MSD investigates whether the cause is the public sewer or the lateral.
        </li>
        <li>
          If MSD or a plumber points to the lateral, or you want proof of its
          condition, a scope records it.
        </li>
        <li>
          Ask your home inspector what their inspection covers. A sewer scope is
          a separate, focused inspection of the sewer line.
        </li>
      </ul>
      <p>
        Share the video and written findings with your agent and home inspector.
        Findings are informational, not legal advice.
      </p>
    </>
  ),
  problems: [
    ...serviceProblems.map((p, i) => ({ ...p, image: slots.problems[i] })),
    {
      title: "A City program that may not apply to the home",
      description:
        "The City’s Sewer Lateral Repair Program covers only qualifying severe damage under the public right-of-way at residential properties of six or fewer units with fully paid real-estate taxes. A scope documents the visible line. It does not tell you whether a property would qualify.",
      image: slots.problems[3],
    },
  ],
  inclusions: serviceInclusions,
  process: steps,
  coverage: {
    title: "Other St. Louis area locations",
    intro:
      "This page covers St. Louis City. Sewer agencies and lateral rules differ across the St. Louis area, so use the page for the address you are buying.",
    pageIds: [
      id("loc-stl-chesterfield"),
      id("loc-stl-ballwin"),
      id("loc-stl-st-charles"),
      id("loc-stl-florissant"),
    ],
    availabilityStatement:
      "St. Louis City is a service area, not an office location.",
  },
  faq,
  relatedPageIds: [
    id("loc-stl-st-louis-city"),
    id(SERVICE_ID),
    id("svc-sewer-camera-inspection"),
    id("svc-sewer-line-locating"),
  ],
  relatedTitle: "Related pages",
  cta: {
    title: "Schedule a pre-purchase sewer inspection in St. Louis City",
    body: "See the visible condition of the lateral on video, with written findings, before you close. Note your inspection deadline when you request service.",
  },
};
