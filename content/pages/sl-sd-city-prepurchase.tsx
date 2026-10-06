/**
 * City of San Diego, CA + Pre-Purchase Sewer Inspection (`sl-sd-city-prepurchase`).
 *
 * Authority: CLAUDE.md §9, §22, §24, §26; docs/14-content-specification.md §43.
 *
 * One local source (`sanDiegoCityContent`, `loc-sd-san-diego`) x one service
 * source (`svc-pre-purchase-sewer-inspection`, its `v2` block). Nothing here is
 * new research. Section recipe, each tied to what THIS service records or cannot:
 *   1. responsibility + buyingGuide - the lateral is the buyer's after closing,
 *      to the City main, wherever that connection is
 *   2. buyingGuide + municipalProgram - the City's advice to buyers is guidance,
 *      no sale-time rule found, a scope is not a permit or a City inspection
 *   3. responsibility + whoToCall - a defect beyond the property line: the City's
 *      Plumber's Report process and what footage can and cannot establish
 *   4. systemExplainer - the EMRA list names slope, depth, trees and driveways,
 *      which a camera does not measure; the permit question
 * Swap the city and sections 1-4 fail; swap the service and 1-3 fail.
 *
 * ⚠ The San Diego location page publishes NO housing-age figure, so none is
 * stated here. CITY NUMBERS ARE THE CITY'S, not ours. No company phone, office,
 * price, offer, response time or guarantee appears. No legal advice. Repair and
 * replacement are never offered.
 *
 * Audit: docs/source-reports/san-diego/sl-sd-city-prepurchase.md
 */

import type {
  PageId,
  ProcessContent,
  ServiceLocationPageContent,
} from "@/types";
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
  sanDiegoCityContent.faq === undefined
) {
  throw new Error("sl-sd-city-prepurchase: source content is missing");
}

// Alt text stays neutral: no place-specific photo is claimed.
const slots = pageImageSlots("sl-sd-city-prepurchase", {
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
 * Every question from the City of San Diego location page and the pre-purchase
 * service page, minus two: the location page's "What does a sewer camera
 * inspection show?" (the service page answers it in full as "What does a sewer
 * scope look for?" and "What does a sewer inspection not show?"), and the
 * service page's generic "Is a sewer scope required when buying or selling a
 * house?" (the San Diego question "Should I check the sewer lateral before
 * buying a San Diego home?" answers it for this city).
 */
const faq = mergeRelevantFaqs(
  sanDiegoCityContent.faq,
  v2.faq,
  [
    "What does a sewer camera inspection show?",
    "Is a sewer scope required when buying or selling a house?",
  ],
  "In San Diego",
);

const steps: ProcessContent[] = (v2.process?.steps ?? []).map((step) => ({
  title: step.title,
  description:
    typeof step.description === "string" ? step.description : undefined,
}));

export const sanDiegoCityPrePurchaseContent: ServiceLocationPageContent = {
  seoTitle: "Pre-Purchase Sewer Inspection in San Diego, CA",
  metaDescription:
    "Buying in San Diego, CA? The City says the lateral is the owner’s to the City main, and we found no sale-time inspection rule. See what a sewer scope shows.",
  serviceDescription:
    "A pre-purchase sewer inspection is a sewer camera inspection arranged during a home purchase, recording the visible condition of the accessible sewer line serving a home in the City of San Diego, California, before closing.",
  heroImage: slots.hero,
  ctaImage: slots.cta,
  sources: sanDiegoCityContent.sources,
  hero: {
    eyebrow: "San Diego, CA",
    title: "Pre-Purchase Sewer Inspection in San Diego",
    intro: (
      <p>
        If you buy a home in the City of San Diego, the City says the owner
        maintains the sewer lateral all the way to its connection with the City
        sewer main, even where that connection is in the street, an easement or
        a canyon. We found no City rule that asks for a lateral inspection when
        a home is sold. A pre-purchase sewer inspection records the visible
        condition of the accessible line on video, with written findings, before
        you close.
      </p>
    ),
  },
  body: (
    <>
      <h2>What you take on when a San Diego sale closes</h2>
      <p>
        The City of San Diego&rsquo;s Public Utilities Department says the
        property owner is responsible for maintaining the sewer lateral from the
        property all the way to its connection with the City sewer main. That
        connection can be in the street, beyond the property line, in an
        easement or in a canyon. After closing, that owner is you.
      </p>
      <p>
        A pre-purchase inspection is how you see that line first. It documents
        visible conditions in the section the camera reaches, on the day of the
        visit. It does not establish where the connection to the City main is,
        and it does not show where the line runs on the property, which is a
        question for line locating, a separate service.
      </p>

      <h2>
        The City&rsquo;s advice to buyers is guidance, and no sale-time rule
        found
      </h2>
      <p>
        The City says that in addition to a home inspection, it is a good idea
        for a prospective buyer to get a licensed-plumber report on the
        condition of the home&rsquo;s lateral connection. That is City guidance,
        not a mandatory inspection. We did not find a City rule that requires a
        lateral inspection or sewer-lateral disclosure when a home is sold. That
        is &ldquo;none found&rdquo;, not a confirmed absence, and state-level
        rules are outside this page.
      </p>
      <p>
        A sewer scope is separate from a general home inspection, so ask your
        inspector what theirs covers. It is not a City permit or inspection, and
        we make no claim that the City accepts an outside report. The Sewer Pros
        inspects and documents; it does not repair or replace.
      </p>

      <h2>
        A defect beyond the property line starts with a plumber&rsquo;s call
      </h2>
      <p>
        When a licensed plumber finds a break or collapse beyond the property
        line, the City directs the plumber to call its Sewer Emergency Line,
        619-515-3525 (the City&rsquo;s number, not ours), and to file a
        Plumber&rsquo;s Report. We did not find a current City statement of who
        pays for repairs beyond the property line, so we make none.
      </p>
      <p>
        A scope during your inspection period records where along the line a
        condition sits, measured from where the camera entered. It does not
        establish where a property line is, so for a break beyond it the
        City&rsquo;s own process governs.
      </p>

      <h2>Slope, depth and trees: rules a camera does not measure</h2>
      <p>
        The City requires a special agreement, an Encroachment Maintenance
        Removal Agreement, for certain nonstandard laterals, including those
        that connect in a sewer easement, have inadequate slope or unusual
        depth, or run close to trees or near a driveway. That is a City design
        and permit rule, not a finding about any one property.
      </p>
      <p>
        A camera does not measure slope or depth, and a scope does not tell you
        which approvals apply. We found no City page on whether work confined to
        private property needs a permit, so ask Development Services
        (619-446-5242, the City&rsquo;s number).
      </p>
    </>
  ),
  problems: [
    ...serviceProblems.map((p, i) => ({ ...p, image: slots.problems[i] })),
    {
      title: "A lateral that connects in an easement or canyon",
      description:
        "The City says the lateral can connect to the main in the street, beyond the property line, in an easement or in a canyon. A scope records the accessible line. It does not establish where that connection is, so ask Development Services about maps and records before you rely on any assumption.",
      image: slots.problems[3],
    },
  ],
  inclusions: serviceInclusions,
  process: steps,
  coverage: {
    title: "Other San Diego area locations",
    intro:
      "This page covers the City of San Diego. Sewer authorities and lateral rules differ across San Diego County, so use the page for the address you are buying.",
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
  faq,
  relatedPageIds: [
    id("loc-sd-san-diego"),
    id(SERVICE_ID),
    id("svc-sewer-camera-inspection"),
    id("svc-sewer-line-locating"),
  ],
  relatedTitle: "Related pages",
  cta: {
    title: "Schedule a pre-purchase sewer inspection in San Diego",
    body: "See the visible condition of the lateral on video, with written findings, before you close. Note your inspection deadline when you request service.",
  },
};
