/**
 * Chesterfield, MO + Pre-Purchase Sewer Inspection (`sl-chesterfield-prepurchase`).
 *
 * Authority: CLAUDE.md §9, §22, §24, §26; docs/14-content-specification.md §43.
 *
 * One local source (`chesterfieldContent`, `loc-stl-chesterfield`) x one
 * service source (`svc-pre-purchase-sewer-inspection`, its `v2` block). Nothing
 * here is new research. Section recipe, each tied to what THIS service records
 * or cannot:
 *   1. responsibility - MSD main vs the private lateral, and the City program's
 *      own definition of its lateral, which footage cannot fix
 *   2. buyingGuide + municipalProgram - no sale-time rule found, and the City
 *      policy's seller-applies rule against what a scope is
 *   3. housingAge - a newer-housing market, so what a scope can still find
 *   4. municipalProgram - the City's defect list and terms against what footage
 *      can show, plus the contacts a buyer needs
 * Swap the city and sections 1-4 fail; swap the service and 1-3 fail.
 *
 * Audit: docs/source-reports/st-louis/sl-chesterfield-prepurchase.md
 *
 * ⚠ MSD AND CITY NUMBERS AND DOLLAR TERMS ARE THEIRS, not ours. No company
 * phone, office, price, offer, response time or guarantee appears. The location
 * page's Census figures are flagged pending (PENDING-015) and are NOT used
 * here. No legal advice. Repair and replacement are never offered.
 */

import type {
  PageId,
  ProcessContent,
  ServiceLocationPageContent,
} from "@/types";
import { chesterfieldContent } from "./st-louis-chesterfield";
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
  chesterfieldContent.faq === undefined
) {
  throw new Error("sl-chesterfield-prepurchase: source content is missing");
}

// Alt text stays neutral: no place-specific photo is claimed.
const slots = pageImageSlots("sl-chesterfield-prepurchase", {
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
 * Every question from the Chesterfield location page and the pre-purchase
 * service page, minus two: the location page's "What does a sewer camera
 * inspection show?" (the service page answers it in full as "What does a sewer
 * scope look for?" and "What does a sewer inspection not show?"), and the
 * service page's generic "Is a sewer scope required when buying or selling a
 * house?" (the Chesterfield question "Is a sewer inspection required before
 * buying a Chesterfield home?" answers it for this city).
 */
const faq = mergeRelevantFaqs(
  chesterfieldContent.faq,
  v2.faq,
  [
    "What does a sewer camera inspection show?",
    "Is a sewer scope required when buying or selling a house?",
  ],
  "In Chesterfield",
);

const steps: ProcessContent[] = (v2.process?.steps ?? []).map((step) => ({
  title: step.title,
  description:
    typeof step.description === "string" ? step.description : undefined,
}));

export const chesterfieldPrePurchaseContent: ServiceLocationPageContent = {
  seoTitle: "Pre-Purchase Sewer Inspection in Chesterfield, MO",
  metaDescription:
    "Buying in Chesterfield, MO? The lateral is the owner’s, the City program has its own seller rule, and we found no sale-time inspection rule. See what a scope shows.",
  serviceDescription:
    "A pre-purchase sewer inspection is a sewer camera inspection arranged during a home purchase, recording the visible condition of the accessible sewer line serving a home in Chesterfield, Missouri, before closing.",
  heroImage: slots.hero,
  ctaImage: slots.cta,
  sources: chesterfieldContent.sources,
  hero: {
    eyebrow: "Chesterfield, MO",
    title: "Pre-Purchase Sewer Inspection in Chesterfield",
    intro: (
      <p>
        If you buy a home in Chesterfield on MSD&rsquo;s system, MSD says the
        lateral from the building, including its connection to the public main,
        is private property the owner maintains and repairs. After closing, that
        owner is you. The City runs its own lateral repair program, and we found
        no City rule that asks for a lateral inspection at an ordinary sale. A
        pre-purchase sewer inspection records the visible condition of the
        accessible line on video, with written findings, before you close.
      </p>
    ),
  },
  body: (
    <>
      <h2>What you take on when a Chesterfield sale closes</h2>
      <p>
        MSD says it maintains the public sewer main, and that the lateral
        connecting a building to that main, including the connection, is private
        property the owner maintains and repairs. Chesterfield&rsquo;s City
        program defines its eligible lateral as running from three to five feet
        outside the foundation or exterior wall to the main in the street or
        sewer easement.
      </p>
      <p>
        A pre-purchase inspection is how you see that line first. It documents
        visible conditions in the section the camera reaches, on the day of the
        visit. It does not establish where the connection is or where either
        boundary falls. Which utility serves an address near a service boundary,
        or on septic, should be confirmed by address.
      </p>

      <h2>
        No sale-time rule found, and a City rule that points at the seller
      </h2>
      <p>
        In the City materials we reviewed, we found no sewer-lateral inspection
        requirement for an ordinary residential sale. The occupancy and
        re-occupancy materials address businesses. That is &ldquo;none
        found&rdquo;, not a confirmed absence, so a buyer who wants evidence has
        to ask for it.
      </p>
      <p>
        The City&rsquo;s lateral program policy says that when a home is in a
        real estate transaction, the seller must be the one to apply. A scope
        does not make a property eligible, and the City decides. If one shows a
        problem, ask your agent and Public Works how that fits your timeline.
        Findings are informational, not legal advice.
      </p>

      <h2>
        Chesterfield homes skew newer, but a newer lateral can still have
        findings
      </h2>
      <p>
        Most Chesterfield homes are newer than the typical St. Louis-area house,
        and pipe from that era is more often PVC than clay or cast iron. The
        listing year still does not give you a lateral&rsquo;s condition. A
        scope can record a belly holding water, a joint pulled apart by soil
        movement, damage from later work, or roots at a gap.
      </p>
      <p>
        A camera cannot see under water or measure slope, and a clear result is
        not proof the whole line is sound.
      </p>

      <h2>
        The City&rsquo;s defect list, and what a scope can and cannot show
      </h2>
      <p>
        Chesterfield&rsquo;s program can pay for repair of a qualifying
        defective lateral, up to $15,000 under the City&rsquo;s March 2026
        policy (the City&rsquo;s terms, not a price from us). It defines defects
        as a collapsed or broken line, a severe offset, a severe backfall or
        belly, or a severe blockage that cannot be cabled out. Roots in pipe
        bells and joints are routine maintenance when removing them lets the
        line work.
      </p>
      <p>
        Footage can record an offset, standing water, roots or a break. Whether
        any of it is &ldquo;severe&rdquo; is the City&rsquo;s call. For the
        program, call Chesterfield Public Works at (636) 537-4762 (the
        City&rsquo;s number, not ours). The Sewer Pros inspects and documents.
        It does not repair or replace.
      </p>
    </>
  ),
  problems: [
    ...serviceProblems.map((p, i) => ({ ...p, image: slots.problems[i] })),
    {
      title: "A problem found during the sale",
      description:
        "The City’s lateral program policy says that in a real estate transaction the seller must be the one to apply, and that the owner, not a tenant, applies. If a scope shows a visible defect, ask your agent and Chesterfield Public Works how that fits your inspection deadline.",
      image: slots.problems[3],
    },
  ],
  inclusions: serviceInclusions,
  process: steps,
  coverage: {
    title: "Other St. Louis area locations",
    intro:
      "This page covers Chesterfield. Each St. Louis area municipality has its own lateral program and terms, so use the page for the address you are buying.",
    pageIds: [
      id("loc-stl-st-louis-city"),
      id("loc-stl-ballwin"),
      id("loc-stl-st-charles"),
      id("loc-stl-florissant"),
    ],
    availabilityStatement:
      "Chesterfield is a service area, not an office location.",
  },
  faq,
  relatedPageIds: [
    id("loc-stl-chesterfield"),
    id(SERVICE_ID),
    id("svc-sewer-camera-inspection"),
    id("svc-sewer-line-locating"),
  ],
  relatedTitle: "Related pages",
  cta: {
    title: "Schedule a pre-purchase sewer inspection in Chesterfield",
    body: "See the visible condition of the lateral on video, with written findings, before you close. Note your inspection deadline when you request service.",
  },
};
