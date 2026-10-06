/**
 * Summerlin, NV + Sewer Line Locating (`sl-summerlin-locating`).
 *
 * Built from exactly two sources, as `sl-nlv-locating` is:
 *   LOCATION  `summerlinContent`  (content/pages/las-vegas-summerlin.tsx)
 *   SERVICE   `svc-sewer-line-locating` v2 content (content/pages/services.tsx)
 *             and `./sl-blocks/sewer-line-locating`
 *
 * Section recipe (each ties a Summerlin fact to what THIS service does or
 * cannot do; swap the location or the service and the copy breaks):
 *   1. Two jurisdictions     - the County map shows Summerlin partly in the City
 *                              of Las Vegas and partly in unincorporated Clark
 *                              County (display only, no parcel lookup); a locate
 *                              does not say which agency serves an address and
 *                              is not a survey or boundary line.
 *   2. Where the lateral     - the City's "up to the connection to the City main"
 *      meets the main          and its addenda (private sewer stays private through
 *                              the right-of-way), and CCWRD's "lateral that
 *                              connects a house to the main in the street"; no
 *                              source says where that sits; a locate does not
 *                              find the connection.
 *   3. Before anyone digs    - no City or CCWRD permit statement found, so ask the
 *                              agency that serves the address; the AGENCIES'
 *                              numbers are for stoppages and spills; the
 *                              service's one-call wording.
 *   4. Buying                - no sale rule found; both agencies call the lateral
 *                              the owner's; route is not condition.
 *
 * ⚠ SUMMERLIN IS SPLIT. The page never says which agency serves any address or
 * which part of Summerlin is on which side, and never merges the City's and
 * CCWRD's wordings into one rule.
 * ⚠ AGENCY NUMBERS ARE THE AGENCIES'. No price, offer, response time,
 * guarantee, emergency or same-day claim. Summerlin is a service area, not an
 * office. Repair and replacement are never presented as offered. A locate is an
 * ESTIMATE, not a survey, utility clearance or permission to dig. No company
 * phone appears (as on the model). The location page names no sewer map, so none
 * is mentioned here.
 * ⚠ IMAGES: alt text is neutral (no Summerlin wording) because the location
 * page restricts place wording to photos from a Summerlin-area property.
 */

import type {
  PageId,
  ProcessContent,
  ServiceLocationPageContent,
} from "@/types";
import { summerlinContent } from "./las-vegas-summerlin";
import { serviceContent } from "./services";
import { mergeRelevantFaqs, pageImageSlots } from "./service-location-shared";
import { inclusions, problems, shots } from "./sl-blocks/sewer-line-locating";

const id = (value: string): PageId => value as PageId;

const slots = pageImageSlots("sl-summerlin-locating", {
  hero: {
    alt: "Technician using a sewer line locator in a residential yard",
    shot: "Technician with a locator receiver in a residential yard, paint marks on pavement, no identifiable address",
  },
  problems: shots,
});

const v2 = serviceContent[id("svc-sewer-line-locating")]?.v2;
if (v2 === undefined || summerlinContent.faq === undefined) {
  throw new Error("sl-summerlin-locating: source content is missing");
}

/**
 * Every question from the Summerlin location page and the locating service
 * page, minus the ones named here (reasons in the source report).
 */
const summerlinLocatingFaq = mergeRelevantFaqs(
  summerlinContent.faq,
  v2.faq,
  [
    // Location page: a camera question the locating page does not own.
    "What does a sewer camera inspection show?",
    // Service page: the Summerlin sale question answers it for this location.
    "Does my city require a sewer inspection for a sale, remodel, or permit?",
    // Service page: about drain cleaning products, off the locating topic.
    "Should I use chemical drain cleaner on a sewer line clog?",
    // Service page: about cleaning and pipe health, off the locating topic.
    "If the line drains after cleaning, is the pipe healthy?",
  ],
  "In Summerlin",
);

const steps: ProcessContent[] = (v2.process?.steps ?? []).map((step) => ({
  title: step.title,
  description:
    typeof step.description === "string" ? step.description : undefined,
}));

export const summerlinLocatingContent: ServiceLocationPageContent = {
  seoTitle: "Sewer Line Locating in Summerlin, NV",
  metaDescription:
    "Sewer line locating for Summerlin, NV properties. The City and CCWRD word the owner’s lateral differently. See what a locate is and what it is not.",
  serviceDescription:
    "Sewer line locating estimates where an accessible underground sewer line runs, using a transmitter inside the line and a receiver at the surface, for properties in Summerlin, Nevada, in the Las Vegas Valley. Results are estimates, not a survey.",
  heroImage: slots.hero,
  ctaImage: slots.cta,
  sources: summerlinContent.sources,
  hero: {
    eyebrow: "Summerlin, NV",
    title: "Sewer Line Locating in Summerlin",
    intro: (
      <p>
        Clark County&rsquo;s boundary map shows Summerlin partly in the City of
        Las Vegas and partly in unincorporated Clark County, and neither agency
        says where the owner&rsquo;s lateral meets the main at any address.
        Sewer line locating estimates where the accessible line runs, so you can
        plan digging, fencing or other work around it.
      </p>
    ),
  },
  body: (
    <>
      <h2>
        Summerlin has two agencies, and a locate does not say which one serves
        you
      </h2>
      <p>
        Clark County&rsquo;s 2024 jurisdictional boundary map shows parts of
        Summerlin inside the City of Las Vegas and parts in unincorporated Clark
        County. The map is marked &ldquo;for display purposes only&rdquo;, and
        we did not find a parcel lookup, so we do not say which side any address
        is on.
      </p>
      <p>
        A locate estimates the path of the accessible line the equipment could
        trace. It is not a survey or a boundary line, and it does not tell you
        which agency serves the property. Ask the City of Las Vegas or CCWRD
        about your address.
      </p>

      <h2>
        Both agencies stop at the main, and a locate does not find that
        connection
      </h2>
      <p>
        The City says owners maintain private sewer laterals up to the
        connection to the City main, and its sewer standards addenda say private
        sewer stays private, including the part in the public right-of-way,
        until its connection to the public sewer main. CCWRD says a damaged
        lateral that connects a house to the sewer main in the street is the
        owner&rsquo;s responsibility. We did not find where either
        agency&rsquo;s main ends at any Summerlin address.
      </p>
      <p>
        A locate estimates where your line runs. It does not establish where
        that connection is.
      </p>

      <h2>
        Before anyone digs: no agency permit statement found, so ask, then call
        811
      </h2>
      <p>
        We found no City or CCWRD rule on whether lateral work needs a permit or
        inspection. Ask the agency that serves your address which rules apply
        before you pay for work in the street or on a lateral. The numbers the
        agencies list are for other problems: the City lists 702-229-6227 (the
        City&rsquo;s number, not ours) for a suspected main stoppage or manhole
        overflow, and CCWRD lists 702-668-8354 (CCWRD&rsquo;s number, not ours)
        for a sanitary sewer spill or odors.
      </p>
      <p>
        A locate is an estimate for planning. It is not utility clearance or
        permission to dig, and it does not replace any approval an agency
        requires. Before anyone digs, contact your state one-call program (often
        reached at 811) or your local utility and follow applicable
        requirements.
      </p>

      <h2>Buying a Summerlin home: the route is not the condition</h2>
      <p>
        We did not find a rule on the City and CCWRD pages we reviewed that
        requires a sewer lateral inspection, certification or seller disclosure
        when a home is sold. That is none found, not a confirmed absence, and it
        does not address state disclosure law. Under both agencies&rsquo;
        wording the lateral is the owner&rsquo;s, which after closing means
        yours.
      </p>
      <p>
        A locate can help a buyer weigh what could be built near the line. It
        does not show the line&rsquo;s condition. A pre-purchase sewer
        inspection does that, and findings are informational, not legal advice.
      </p>
    </>
  ),
  problems: [
    ...problems.map((p, i) => ({ ...p, image: slots.problems[i] })),
    {
      title: "A problem at the street, and whose it is",
      description:
        "At a City of Las Vegas address, the City says a public-main obstruction, pipe failure or damage from area construction is something its team will address. A locate can estimate where a visible point sits at the surface, but it does not say whether that point is on your lateral or on an agency’s main.",
      image: slots.problems[3],
    },
  ],
  // Six items: renders as two rows of three.
  inclusions,
  process: steps,
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
  // All relevant questions from the Summerlin location page and the locating
  // service page (see `summerlinLocatingFaq` above).
  faq: summerlinLocatingFaq,
  relatedPageIds: [
    id("loc-lv-summerlin"),
    id("svc-sewer-line-locating"),
    id("svc-sewer-camera-inspection"),
    id("svc-pre-purchase-sewer-inspection"),
  ],
  relatedTitle: "Related pages",
  cta: {
    title: "Request sewer line locating in Summerlin",
    body: "Plan around your lateral with an estimate of where it runs. A locate is not a survey or permission to dig.",
  },
};
