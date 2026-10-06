/**
 * Summerlin, NV + Pre-Purchase Sewer Inspection (`sl-summerlin-prepurchase`).
 *
 * Authority: CLAUDE.md §9, §22, §24, §26; docs/14-content-specification.md §43.
 * Model: `sl-nlv-prepurchase.tsx` (approved).
 *
 * One local source (`summerlinContent`, `loc-lv-summerlin`) x one service source
 * (`svc-pre-purchase-sewer-inspection`, its `v2` block). Nothing here is new
 * research. Section recipe, each tied to what THIS service records or cannot:
 *   1. responsibility + buyingGuide.lede - the county map splits Summerlin, so
 *      the first buyer question is which agency serves the property; a scope
 *      cannot answer it
 *   2. responsibility (table rows 2-6) - the City's and CCWRD's owner wording,
 *      each in its own words and never merged; the lateral is the buyer's after
 *      closing; roots named by CCWRD vs. what a scope records of roots
 *   3. buyingGuide.body + service limits - no sale-time rule found, state rules
 *      not addressed, a clear scope is not proof
 *   4. municipalProgram + whoToCall - no program, the optional warranty, the two
 *      agency numbers, locating
 * Swap the location and sections 1-4 fail; swap the service and 1-3 fail.
 *
 * Audit: docs/source-reports/summerlin/sl-summerlin-prepurchase.md
 *
 * ⚠ SUMMERLIN IS A COMMUNITY SPLIT BETWEEN TWO JURISDICTIONS, NOT A CITY. The page
 * never says which agency serves any address or which part of Summerlin is on
 * which side, and never reconciles the City's and CCWRD's wording.
 * ⚠ The Summerlin location page has NO housing-age section, so no year-built
 * figure appears here.
 * ⚠ AGENCY NUMBERS ARE THE AGENCIES', not ours. No company phone, office, price,
 * offer, response time or guarantee appears. No legal advice. Repair and
 * replacement are never offered.
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
  summerlinContent.faq === undefined
) {
  throw new Error("sl-summerlin-prepurchase: source content is missing");
}

// Alt text stays neutral: the location page allows Summerlin wording only for a
// photo taken at a Summerlin-area property.
const slots = pageImageSlots("sl-summerlin-prepurchase", {
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
 * Every question from the Summerlin location page and the pre-purchase service
 * page, minus two: the location page's "What does a sewer camera inspection
 * show?" (the service page answers it in full as "What does a sewer scope look
 * for?" and "What does a sewer inspection not show?"), and the service page's
 * generic "Is a sewer scope required when buying or selling a house?" (the
 * Summerlin question "Does Summerlin require a sewer inspection when a home is
 * sold?" answers it for this area).
 */
const faq = mergeRelevantFaqs(
  summerlinContent.faq,
  v2.faq,
  [
    "What does a sewer camera inspection show?",
    "Is a sewer scope required when buying or selling a house?",
  ],
  "In Summerlin",
);

const steps: ProcessContent[] = (v2.process?.steps ?? []).map((step) => ({
  title: step.title,
  description:
    typeof step.description === "string" ? step.description : undefined,
}));

export const summerlinPrePurchaseContent: ServiceLocationPageContent = {
  seoTitle: "Pre-Purchase Sewer Inspection in Summerlin, NV",
  metaDescription:
    "Buying in Summerlin, NV? The City and CCWRD word the owner’s lateral differently, and the county map splits the area. See what a sewer scope shows.",
  serviceDescription:
    "A pre-purchase sewer inspection is a sewer camera inspection arranged during a home purchase, recording the visible condition of the accessible sewer line serving a home in Summerlin, NV, in the Las Vegas Valley, before closing.",
  heroImage: slots.hero,
  ctaImage: slots.cta,
  sources: summerlinContent.sources,
  hero: {
    eyebrow: "Summerlin, NV",
    title: "Pre-Purchase Sewer Inspection in Summerlin",
    intro: (
      <p>
        Clark County&rsquo;s boundary map shows Summerlin partly in the City of
        Las Vegas and partly in unincorporated Clark County, so the agency and
        its wording depend on the address you are buying. We found no City or
        CCWRD rule that asks for a lateral inspection when a home is sold. A
        pre-purchase sewer inspection records the visible condition of the
        accessible line on video, with written findings, before you close.
      </p>
    ),
  },
  body: (
    <>
      <h2>Which agency serves the Summerlin home you are buying?</h2>
      <p>
        Clark County&rsquo;s 2024 jurisdictional boundary map shows parts of
        Summerlin inside the City of Las Vegas and parts in unincorporated Clark
        County. The map is marked &ldquo;for display purposes only&rdquo; and we
        did not find a parcel lookup, so we do not say which side any address is
        on.
      </p>
      <p>
        A pre-purchase inspection records visible conditions in the section the
        camera reaches, on the day of the visit, and where along the line they
        sit. It cannot tell you which agency serves the home or where the
        connection to the main is.
      </p>

      <h2>
        Two agencies, two wordings, and after closing the lateral is yours
      </h2>
      <p>
        At a City of Las Vegas address, the City says owners maintain private
        sewer laterals up to the connection to the City main, and its sewer
        standards addenda say private sewer stays private, including the part in
        the public right-of-way, until that connection. CCWRD says a damaged
        lateral that connects a house to the sewer main in the street is the
        owner&rsquo;s responsibility, including cleaning, repair and
        replacement. We show each in its own words and do not merge them. Under
        either, the owner after closing is you.
      </p>
      <p>
        CCWRD also names roots among the foreign matter owners keep out of the
        lateral. A scope records where roots are visible. It does not decide a
        fix.
      </p>

      <h2>
        No sale-time rule found, and a clear scope proves less than it seems
      </h2>
      <p>
        We did not find a rule on the City and CCWRD pages we reviewed that
        requires a lateral inspection, certification or seller disclosure when a
        home is sold. That is &ldquo;none found&rdquo;, not a confirmed absence,
        and it does not address state-level disclosure rules. A buyer can ask
        for an inspection and can ask the serving agency which rules apply.
        Findings are informational, not legal advice.
      </p>
      <p>
        A visibly clear line is not proof that the whole line is in good
        condition. A camera generally cannot see under water or in sections it
        did not reach.
      </p>

      <h2>
        No program or warranty terms to lean on, and the agencies&rsquo; numbers
      </h2>
      <p>
        We found no City or CCWRD lateral repair, grant or reimbursement
        program. The City&rsquo;s Sewer Line Warranty page promotes an optional
        program offered with Service Line Warranties of America, a private
        company. We found no price or coverage terms, and nothing says whether
        it applies at a particular Summerlin address. The Sewer Pros has no
        connection to it.
      </p>
      <ul>
        <li>
          City of Las Vegas Streets &amp; Sanitation: 702-229-6227, listed for a
          suspected main stoppage or a manhole overflow (the City&rsquo;s
          number, not ours).
        </li>
        <li>
          CCWRD: 702-668-8354, listed for a sanitary sewer spill or
          sewer-related odors (CCWRD&rsquo;s number, not ours).
        </li>
      </ul>
      <p>
        We found no hours, after-hours number or emergency line for either. If
        you plan to dig after you buy, line locating is a separate service.
      </p>
    </>
  ),
  problems: [
    ...serviceProblems.map((p, i) => ({ ...p, image: slots.problems[i] })),
    {
      title: "A home where the serving agency is unclear",
      description:
        "Summerlin is split between the City of Las Vegas and unincorporated Clark County, and the county map is for display only. A scope records the line, not which agency serves it, so ask the City or CCWRD about the address you are buying and note your inspection deadline when you request service.",
      image: slots.problems[3],
    },
  ],
  inclusions: serviceInclusions,
  process: steps,
  coverage: {
    title: "Other Las Vegas Valley areas",
    intro:
      "This page covers Summerlin. Sewer agencies and lateral rules differ across the Las Vegas Valley, so use the page for the address you are buying.",
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
    id(SERVICE_ID),
    id("svc-sewer-camera-inspection"),
    id("svc-sewer-line-locating"),
  ],
  relatedTitle: "Related pages",
  cta: {
    title: "Schedule a pre-purchase sewer inspection in Summerlin",
    body: "See the visible condition of the lateral on video, with written findings, before you close. Note your inspection deadline when you request service.",
  },
};
