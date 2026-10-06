/**
 * City of San Diego, CA + Sewer Line Locating (`sl-sd-city-locating`).
 *
 * Authority: CLAUDE.md §9, §22, §24; docs/14-content-specification.md §43, §79.
 * Built from exactly two sources, as `sl-lv-city-locating` is:
 *   LOCAL    `sanDiegoCityContent` (`loc-sd-san-diego`)
 *   SERVICE  `svc-sewer-line-locating` v2 content (content/pages/services.tsx)
 *            and `./sl-blocks/sewer-line-locating`
 * Nothing here is new research.
 *
 * Section recipe (each section ties a City of San Diego fact to what a locate does):
 *   1. The City's records gap  - the City has no diagrams of private lines on
 *                                the property; maps/records numbers (the
 *                                CITY's); a locate fills the gap, as an estimate.
 *   2. Street, easement, canyon - the lateral runs to the City main wherever it
 *                                 connects; EMRA layouts; a locate does not find
 *                                 the connection.
 *   3. Before anyone digs      - Right-of-Way Permit, Municipal Code, the
 *                                permit gap for private-property work, and the
 *                                service's one-call wording.
 *   4. Buying                  - City guidance (a plumber report is a good idea),
 *                                no point-of-sale rule found; route is not
 *                                condition.
 *
 * The City of San Diego location page has no housing-age section, so none is
 * used here.
 *
 * ⚠ CITY NUMBERS ARE THE CITY'S, not ours. No company phone, price, offer,
 * response time, guarantee, emergency or same-day claim, equipment spec or San
 * Diego office appears. Repair and replacement are never presented as offered.
 * A locate is an ESTIMATE, not a survey, utility clearance or permission to dig.
 */

import type {
  PageId,
  ProcessContent,
  ServiceLocationPageContent,
} from "@/types";
import { sanDiegoCityContent } from "./san-diego-city";
import { serviceContent } from "./services";
import { mergeRelevantFaqs, pageImageSlots } from "./service-location-shared";
import { inclusions, problems, shots } from "./sl-blocks/sewer-line-locating";

const id = (value: string): PageId => value as PageId;

const slots = pageImageSlots("sl-sd-city-locating", {
  hero: {
    alt: "Technician using a sewer line locator receiver in a residential yard",
    shot: "Technician with a locator receiver in a residential yard, paint marks on pavement, no identifiable address",
  },
  problems: shots,
});

const v2 = serviceContent[id("svc-sewer-line-locating")]?.v2;
if (v2 === undefined || sanDiegoCityContent.faq === undefined) {
  throw new Error("sl-sd-city-locating: source content is missing");
}

/**
 * Every question from the San Diego location page and the locating service
 * page, minus the ones named here (reasons in the source report).
 */
const sanDiegoLocatingFaq = mergeRelevantFaqs(
  sanDiegoCityContent.faq,
  v2.faq,
  [
    // Location page: a camera question the locating page does not own.
    "What does a sewer camera inspection show?",
    // Service page: the San Diego sale question answers it for this city.
    "Does my city require a sewer inspection for a sale, remodel, or permit?",
    // Service page: about drain cleaning products, off the locating topic.
    "Should I use chemical drain cleaner on a sewer line clog?",
    // Service page: about cleaning and pipe health, off the locating topic.
    "If the line drains after cleaning, is the pipe healthy?",
  ],
  "In San Diego",
);

const steps: ProcessContent[] = (v2.process?.steps ?? []).map((step) => ({
  title: step.title,
  description:
    typeof step.description === "string" ? step.description : undefined,
}));

export const sanDiegoCityLocatingContent: ServiceLocationPageContent = {
  seoTitle: "Sewer Line Locating in San Diego, CA",
  metaDescription:
    "Sewer line locating for San Diego, CA properties. The City has no diagrams of private sewer lines on your lot. See what a locate is and is not.",
  serviceDescription:
    "Sewer line locating estimates where an accessible underground sewer line runs, using a transmitter inside the line and a receiver at the surface, for properties in the City of San Diego, California. Results are estimates, not a survey.",
  heroImage: slots.hero,
  ctaImage: slots.cta,
  sources: sanDiegoCityContent.sources,
  hero: {
    eyebrow: "San Diego, CA",
    title: "Sewer Line Locating in San Diego",
    intro: (
      <p>
        In the City of San Diego, the owner maintains the sewer lateral all the
        way to the City main, and the City says it does not have diagrams
        showing where private sewer lines run on the property. Sewer line
        locating estimates where the accessible line runs, so you can plan
        digging, fencing or other work around it.
      </p>
    ),
  },
  body: (
    <>
      <h2>
        The City has records of the connection, but not of the line on your lot
      </h2>
      <p>
        The City of San Diego says Development Services can help identify where
        a property&rsquo;s lateral connects and offers a review of sewer maps
        and records, at 619-446-5300, with as-built plan copies through the
        Records Section at 619-446-5200 (the City&rsquo;s numbers, not ours). It
        also says it does not have diagrams showing where private sewer lines
        run on the property.
      </p>
      <p>
        A locating service fills that gap. It estimates the path of the
        accessible line, and it is an estimate for planning, not a survey.
      </p>

      <h2>A lateral can end in the street, an easement or a canyon</h2>
      <p>
        The City says the owner maintains the lateral all the way to its
        connection with the City main, and that connection can be in the street,
        past the property line, in an easement or in a canyon. A locate
        estimates the path of the part of the line the equipment could trace. It
        does not establish where the connection to the City main is.
      </p>
      <p>
        Layout matters here. The City requires an Encroachment Maintenance
        Removal Agreement for certain nonstandard laterals, including ones that
        connect in an easement, enter the main at an angle, run close to trees
        or run near a driveway. That is a City design and permit rule, not a
        finding about any property, but it is a reason the route is worth
        knowing.
      </p>

      <h2>
        Before anyone digs: the City&rsquo;s permits and your one-call program
      </h2>
      <p>
        The City says a Right-of-Way Permit is required for work in the public
        right-of-way or in a water or sewer easement, and its Municipal Code
        says a person may not construct or alter a public sewer, lateral sewer
        or house connection that discharges to City public sewers without City
        approval of the plans. We found no City page on whether work confined to
        private property needs a permit, so ask Development Services at
        619-446-5242 (the City&rsquo;s number).
      </p>
      <p>
        A locate is not utility clearance or permission to dig, and it does not
        replace a permit. Before anyone digs, contact your state one-call
        program (often reached at 811) or your local utility and follow
        applicable requirements.
      </p>

      <h2>Buying a San Diego home: the route is not the condition</h2>
      <p>
        The City says that in addition to a home inspection, it is a good idea
        for a prospective buyer to get a licensed-plumber report on the
        condition of the home&rsquo;s lateral connection. That is City guidance,
        not a requirement, and we did not find a City point-of-sale
        sewer-lateral rule in the materials we reviewed. That is none found, not
        a confirmed absence.
      </p>
      <p>
        A locate can help a buyer weigh what could be built near the line. It
        says nothing about the pipe&rsquo;s condition. A pre-purchase sewer
        inspection does that, and findings are informational, not legal advice.
      </p>
    </>
  ),
  problems: [
    ...problems.map((p, i) => ({ ...p, image: slots.problems[i] })),
    {
      title: "The City has no diagrams of private lines on your lot",
      description:
        "The City says Development Services can help identify where a lateral connects, but it does not have diagrams showing where private sewer lines run on the property. A locate estimates the route of the accessible line.",
      image: slots.problems[3],
    },
  ],
  // Six items: renders as two rows of three.
  inclusions,
  process: steps,
  coverage: {
    title: "Other San Diego area locations",
    intro:
      "This page covers the City of San Diego. Sewer agencies and lateral rules differ across San Diego County, so use the page for your address.",
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
  // All relevant questions from the San Diego location page and the locating
  // service page (see `sanDiegoLocatingFaq` above).
  faq: sanDiegoLocatingFaq,
  relatedPageIds: [
    id("loc-sd-san-diego"),
    id("svc-sewer-line-locating"),
    id("svc-sewer-camera-inspection"),
    id("svc-pre-purchase-sewer-inspection"),
  ],
  relatedTitle: "Related pages",
  cta: {
    title: "Request sewer line locating in San Diego",
    body: "Plan around your lateral with an estimate of where it runs. A locate is not a survey or permission to dig.",
  },
};
