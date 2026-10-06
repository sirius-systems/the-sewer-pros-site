/**
 * St. Charles, MO + Sewer Line Locating (`sl-st-charles-locating`).
 *
 * Built from exactly two sources, as `sl-lv-city-locating` is:
 *   LOCATION  `stCharlesContent`  (content/pages/st-louis-st-charles.tsx)
 *   SERVICE   `svc-sewer-line-locating` v2 content (content/pages/services.tsx)
 *             and `./sl-blocks/sewer-line-locating`
 *
 * Section recipe (each ties a St. Charles fact to what THIS service does or
 * cannot do; swap the city or the service and the copy breaks):
 *   1. Lateral and the connection - the City Code's foundation-to-main
 *                                   definition, no published rule on the part
 *                                   under the street; a locate traces the
 *                                   accessible private line, not the main.
 *   2. Before anyone digs         - Building Division permit wording, Community
 *                                   Development (the CITY's number and fee) +
 *                                   the service's one-call wording.
 *   3. The City program           - 90 percent / $7,500 and the covered and
 *                                   excluded items vs. planning around the line;
 *                                   the City's own camera sets the scope.
 *   4. Housing age and buying     - ACS figures, no pipe era published, no
 *                                   sale-time rule found; route is not condition.
 *
 * ⚠ ST. CHARLES RUNS ITS OWN SEWER SYSTEM. No MSD fact or number is used.
 * ⚠ CITY NUMBERS, FEES AND DOLLAR TERMS ARE THE CITY'S, not ours. No price,
 * offer, response time, guarantee, emergency or same-day claim. St. Charles is
 * a service area, not an office. Repair and replacement are never presented as
 * offered. A locate is an ESTIMATE, not a survey, utility clearance or
 * permission to dig.
 */

import type {
  PageId,
  ProcessContent,
  ServiceLocationPageContent,
} from "@/types";
import { stCharlesContent } from "./st-louis-st-charles";
import { serviceContent } from "./services";
import { mergeRelevantFaqs, pageImageSlots } from "./service-location-shared";
import { inclusions, problems, shots } from "./sl-blocks/sewer-line-locating";

const id = (value: string): PageId => value as PageId;

// Alt text stays neutral: no place-specific photo is claimed.
const slots = pageImageSlots("sl-st-charles-locating", {
  hero: {
    alt: "Technician using a sewer line locator in a residential yard",
    shot: "Technician with a locator receiver in a residential yard, paint marks on pavement, no identifiable address",
  },
  problems: shots,
});

const v2 = serviceContent[id("svc-sewer-line-locating")]?.v2;
if (v2 === undefined || stCharlesContent.faq === undefined) {
  throw new Error("sl-st-charles-locating: source content is missing");
}

/**
 * Every question from the St. Charles location page and the locating service
 * page, minus the ones named here (reasons in the source report).
 */
const stCharlesLocatingFaq = mergeRelevantFaqs(
  stCharlesContent.faq,
  v2.faq,
  [
    // Location page: a camera question the locating page does not own.
    "What does a sewer camera inspection show?",
    // Service page: the St. Charles sale question answers it for this city.
    "Does my city require a sewer inspection for a sale, remodel, or permit?",
    // Service page: about drain cleaning products, off the locating topic.
    "Should I use chemical drain cleaner on a sewer line clog?",
    // Service page: about cleaning and pipe health, off the locating topic.
    "If the line drains after cleaning, is the pipe healthy?",
  ],
  "In St. Charles",
);

const steps: ProcessContent[] = (v2.process?.steps ?? []).map((step) => ({
  title: step.title,
  description:
    typeof step.description === "string" ? step.description : undefined,
}));

export const stCharlesLocatingContent: ServiceLocationPageContent = {
  seoTitle: "Sewer Line Locating in St. Charles, MO",
  metaDescription:
    "Sewer line locating for St. Charles, MO properties. The City Code puts the lateral from foundation to main. See what a locate is and is not before you dig.",
  serviceDescription:
    "Sewer line locating estimates where an accessible underground sewer line runs, using a transmitter inside the line and a receiver at the surface, for properties in the City of St. Charles, Missouri. Results are estimates, not a survey.",
  heroImage: slots.hero,
  ctaImage: slots.cta,
  sources: stCharlesContent.sources,
  hero: {
    eyebrow: "St. Charles, MO",
    title: "Sewer Line Locating in St. Charles",
    intro: (
      <p>
        The City of St. Charles runs its own sewer system, and its Code
        describes the lateral as the piping from a home&rsquo;s foundation to a
        sewer main. Sewer line locating estimates where the accessible private
        line runs, so you can plan digging, fencing or plantings around it. It
        is an estimate, not a survey.
      </p>
    ),
  },
  body: (
    <>
      <h2>
        A lateral from foundation to main, and a locate that stops short of the
        main
      </h2>
      <p>
        The City Code describes the sewer lateral as the part of a residential
        property&rsquo;s sanitary sewer piping that runs from the foundation to
        a sewer main, and the City&rsquo;s Public Works Sewer Division, not MSD,
        runs the public system. We did not find a published City rule on who
        owns the part of a lateral under the street, so confirm that with the
        City.
      </p>
      <p>
        A locate estimates the path of the accessible private line the equipment
        could trace. It does not cover the City&rsquo;s main, and it is not a
        survey or a property line.
      </p>

      <h2>
        Before anyone digs: the City&rsquo;s permit rules, one-call and your
        estimate
      </h2>
      <p>
        The City&rsquo;s Building Division lists repair or replacement of sewer
        laterals among work that generally requires a permit. Community
        Development, (636) 949-3222 (the City&rsquo;s number, not ours), takes
        permit questions, and the City says a smaller repair outside its program
        may need a charge permit and an inspection at $50 each (the City&rsquo;s
        fee, not our price).
      </p>
      <p>
        A locate is an estimate for planning. It is not utility clearance or
        permission to dig, and it does not replace a permit. Before anyone digs,
        contact your state one-call program (often reached at 811) or your local
        utility and follow applicable requirements.
      </p>

      <h2>
        The City program pays for a repair, not for what you planted over the
        line
      </h2>
      <p>
        The City&rsquo;s Sewer Lateral Repair Program reimburses 90 percent of
        authorized repair cost, up to $7,500, for a qualifying lateral inside
        City limits (the City&rsquo;s terms, not our prices). It does not cover
        replacement of landscaping or ornamental structures.
      </p>
      <p>
        A locate can help you place plantings, a fence or hardscape relative to
        the line and describe where it runs to whoever bids on work. It does not
        replace the City&rsquo;s own camera investigation, which sets the repair
        scope, and it says nothing about the pipe&rsquo;s condition. A camera
        inspection is the separate service that looks inside it.
      </p>

      <h2>
        A 1986 median year built, and a purchase: the route is not the condition
      </h2>
      <p>
        St. Charles&rsquo;s median year built is 1986, according to the U.S.
        Census Bureau&rsquo;s 2024 American Community Survey 5-year estimates.
        The City does not publish a pipe material or installation era, so year
        built does not tell you where a line runs.
      </p>
      <p>
        We did not find a City rule that requires a sewer lateral inspection or
        disclosure when a home is sold. That is none found, not a confirmed
        absence, and it is not legal advice. A buyer weighing what could be
        built near the line can use a locate, after confirming the address is
        inside City limits, since the program applies only there. A pre-purchase
        sewer inspection is what shows the line&rsquo;s condition.
      </p>
    </>
  ),
  problems: [
    ...problems.map((p, i) => ({ ...p, image: slots.problems[i] })),
    {
      title: "The Code defines the lateral from foundation to main",
      description:
        "The City Code describes the lateral as the piping from the foundation to a sewer main, and we found no published rule on who owns the part under the street. A locate estimates the route of the accessible line. It does not show where the main is.",
      image: slots.problems[3],
    },
  ],
  // Six items: renders as two rows of three.
  inclusions,
  process: steps,
  coverage: {
    title: "Other St. Louis area locations",
    intro:
      "This page covers the City of St. Charles. Sewer agencies and lateral rules differ across the St. Louis area, so use the page for your address.",
    pageIds: [
      id("loc-stl-st-louis-city"),
      id("loc-stl-chesterfield"),
      id("loc-stl-ballwin"),
      id("loc-stl-florissant"),
    ],
    availabilityStatement:
      "St. Charles is a service area, not an office location.",
  },
  // All relevant questions from the St. Charles location page and the locating
  // service page (see `stCharlesLocatingFaq` above).
  faq: stCharlesLocatingFaq,
  relatedPageIds: [
    id("loc-stl-st-charles"),
    id("svc-sewer-line-locating"),
    id("svc-sewer-camera-inspection"),
    id("svc-pre-purchase-sewer-inspection"),
  ],
  relatedTitle: "Related pages",
  cta: {
    title: "Request sewer line locating in St. Charles",
    body: "Plan around your lateral with an estimate of where it runs. A locate is not a survey or permission to dig.",
  },
};
