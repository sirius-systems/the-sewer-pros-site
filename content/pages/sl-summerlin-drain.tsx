/**
 * Summerlin, NV + Drain Cleaning (`sl-summerlin-drain`).
 *
 * Built from exactly two sources, as `sl-nlv-drain` is:
 *   LOCATION  `summerlinContent`  (content/pages/las-vegas-summerlin.tsx)
 *   SERVICE   `svc-drain-cleaning` v2 content (content/pages/services.tsx)
 *             and `./sl-blocks/drain-cleaning`
 *
 * Section recipe (each ties a Summerlin fact to what THIS service does or
 * cannot do; swap the location or the service and the copy breaks):
 *   1. Two wordings          - the County map shows two jurisdictions (display
 *                              only); the City's "up to the connection to the City
 *                              main" and CCWRD's "lateral that connects a house to
 *                              the main in the street" vs. fixture drains upstream;
 *                              neither main is a drain-cleaning job.
 *   2. One drain, several, or a main stoppage - the service's triage, plus the
 *                              City's main-stoppage wording and the AGENCIES'
 *                              numbers; the company phone and newer-market line.
 *   3. No local evidence     - CCWRD's periodic cleaning (roots) vs. the pages'
 *                              silence on combined or separate, main age and local
 *                              conditions; what a returning clog depends on.
 *   4. No agency help found  - "none found", the optional City-promoted warranty
 *                              (applicability unknown), no permit statement for
 *                              cleaning, what cleaning does not fix, no repairs by
 *                              us.
 *
 * ⚠ SUMMERLIN IS SPLIT. The page never says which agency serves any address or
 * which part of Summerlin is on which side, and never merges the City's and
 * CCWRD's wordings into one rule.
 * ⚠ AGENCY NUMBERS ARE THE AGENCIES'. The company phone is read from
 * `marketOperatingDetail`, never typed. No price, offer, response time,
 * guarantee, emergency or same-day claim. Summerlin is a service area, not an
 * office. Repair and replacement are never presented as offered.
 * ⚠ IMAGES: alt text is neutral (no Summerlin wording) because the location
 * page restricts place wording to photos from a Summerlin-area property.
 */

import { marketOperatingDetail } from "@/data/markets/markets";
import type {
  PageId,
  ProcessContent,
  ServiceLocationPageContent,
} from "@/types";
import { summerlinContent } from "./las-vegas-summerlin";
import { serviceContent } from "./services";
import { mergeRelevantFaqs, pageImageSlots } from "./service-location-shared";
import { inclusions, problems, shots } from "./sl-blocks/drain-cleaning";

const id = (value: string): PageId => value as PageId;

const lv = marketOperatingDetail["las-vegas-nv"];
if (lv === undefined)
  throw new Error("marketOperatingDetail is missing las-vegas-nv");

const slots = pageImageSlots("sl-summerlin-drain", {
  hero: {
    alt: "Drain cleaning equipment at a fixture in a residential home",
    shot: "Drain machine at a floor or tub drain, residential property, no identifiable address",
  },
  problems: [shots[0], shots[1], shots[2], shots[3]] as const,
});

const v2 = serviceContent[id("svc-drain-cleaning")]?.v2;
if (v2 === undefined || summerlinContent.faq === undefined) {
  throw new Error("sl-summerlin-drain: source content is missing");
}

const process: ProcessContent[] = (v2.process?.steps ?? []).map((step) => ({
  title: step.title,
  description:
    typeof step.description === "string" ? step.description : undefined,
}));

/**
 * Every question from the Summerlin location page and the drain cleaning
 * page, minus the ones below.
 */
const faq = mergeRelevantFaqs(
  summerlinContent.faq,
  v2.faq,
  [
    // This page IS an area page; the question is the hub's.
    "Do you clean drains in St. Louis, San Diego, and Las Vegas?",
    // Same answer, fuller, under "Does drain cleaning repair a damaged pipe?".
    "Can drain cleaning fix a broken or collapsed pipe?",
    // Same answer, fuller, under "Can tree roots grow into drain pipes?".
    "Can cleaning remove tree roots?",
  ],
  "In Summerlin",
);

export const summerlinDrainContent: ServiceLocationPageContent = {
  seoTitle: "Drain Cleaning in Summerlin, NV",
  metaDescription:
    "Drain cleaning in Summerlin, NV. The City and CCWRD word the owner’s lateral differently. See what drain cleaning does and does not fix.",
  serviceDescription:
    "Drain cleaning removes grease, roots, deposits, debris and other restricting material from a drain line using a rotating cable, water jetting, or both, for homes in Summerlin, Nevada, in the Las Vegas Valley. It restores flow and does not repair the pipe.",
  heroImage: slots.hero,
  ctaImage: slots.cta,
  sources: summerlinContent.sources,
  hero: {
    eyebrow: "Summerlin, NV",
    title: "Drain Cleaning in Summerlin",
    intro: (
      <p>
        Clark County&rsquo;s boundary map shows Summerlin partly in the City of
        Las Vegas and partly in unincorporated Clark County, and both agencies
        describe the sewer lateral as the owner&rsquo;s, so the drains inside
        your home sit upstream of it. Drain cleaning clears the grease, roots,
        debris and buildup in a fixture or branch line. It does not reach an
        agency&rsquo;s main, and it does not repair the pipe.
      </p>
    ),
  },
  body: (
    <>
      <h2>
        Two agencies word the lateral two ways, and drain cleaning stays
        upstream of both
      </h2>
      <p>
        The City of Las Vegas says owners maintain private sewer laterals up to
        the connection to the City main. CCWRD says a damaged lateral that
        connects a house to the sewer main in the street is the owner&rsquo;s
        responsibility, including cleaning, repair and replacement. Clark
        County&rsquo;s map is for display only, so we do not say which wording
        applies to an address.
      </p>
      <p>
        Drain cleaning usually means the fixture and branch lines in your home.
        Sewer cleaning means the larger line that carries wastewater away from
        the building. Neither reaches an agency&rsquo;s main or the connection
        to it.
      </p>

      <h2>
        One drain, several drains, or a main stoppage the City says it addresses
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
        These are clues, not proof. The City says a stoppage in a City main can
        affect several upstream properties and may overflow manholes, and it
        lists Streets &amp; Sanitation at 702-229-6227 (the City&rsquo;s number,
        not ours) for that. CCWRD lists 702-668-8354 (CCWRD&rsquo;s number, not
        ours) for a sanitary sewer spill or odors. To reach The Sewer Pros, call{" "}
        {lv.phone}. The Las Vegas Valley is a newer market for us; our
        longest-running work is in St. Louis and San Diego.
      </p>

      <h2>
        CCWRD names periodic cleaning, but nothing explains why your drain keeps
        clogging
      </h2>
      <p>
        CCWRD says owners are responsible for periodic cleaning to keep the
        lateral free of foreign matter, including roots. The pages we reviewed
        do not say whether the system is combined or separate, how old its mains
        are, or what soil or root conditions occur locally, so a cause has to
        come from your own line.
      </p>
      <p>
        When a drain clogs again, the restriction may not have been fully
        removed, or something in the line may be rebuilding it. A camera look
        may help show which.
      </p>

      <h2>No agency help found, so know what cleaning does not fix</h2>
      <p>
        We found no City or CCWRD lateral repair, replacement, grant or
        reimbursement program on the pages we reviewed. That is &ldquo;none
        found&rdquo;, not a statement that none exists. The City promotes an
        optional warranty program from a private company. We did not find
        whether it applies at a particular Summerlin address, including
        addresses served by CCWRD. We found no agency statement on whether
        cleaning needs a permit, so ask the agency that serves your address.
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
      title: "Buying or selling a Summerlin home",
      description:
        "We found no rule on the City and CCWRD pages we reviewed requiring a lateral inspection, certification or seller disclosure on sale, and state disclosure law is outside this page. Both agencies describe the lateral as the owner’s, so a buyer who sees slow drains can ask for a camera look at the accessible line, and a seller with recurring drains can document it.",
      image: slots.problems[3],
    },
  ],
  // Six items: renders as two rows of three.
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
  // All relevant questions from the Summerlin location page and the drain
  // cleaning page (see `faq` above).
  faq,
  relatedPageIds: [
    id("loc-lv-summerlin"),
    id("svc-drain-cleaning"),
    id("svc-sewer-cleaning"),
    id("svc-sewer-camera-inspection"),
  ],
  relatedTitle: "Related pages",
  cta: {
    title: "Request drain cleaning in Summerlin",
    body: "Get a slow or clogged drain cleared, with video and written findings when a camera is used.",
  },
};
