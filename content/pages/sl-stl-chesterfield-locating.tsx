/**
 * Chesterfield, MO + Sewer Line Locating (`sl-chesterfield-locating`).
 *
 * Built from exactly two sources, as `sl-lv-city-locating` is:
 *   LOCATION  `chesterfieldContent`  (content/pages/st-louis-chesterfield.tsx)
 *   SERVICE   `svc-sewer-line-locating` v2 content (content/pages/services.tsx)
 *             and `./sl-blocks/sewer-line-locating`
 *
 * Section recipe (each ties a Chesterfield fact to what THIS service does or
 * cannot do; swap the city or the service and the copy breaks):
 *   1. The City's lateral definition - three to five feet outside the
 *      foundation to the main in the street or an easement; MSD's private-
 *      lateral statement; a locate is an estimate, not a survey, and does not
 *      find the connection or an easement.
 *   2. Before anyone digs    - the program's excavation and the three-bid
 *                              policy (the CITY's terms), no repairs by us,
 *                              the service's one-call wording.
 *   3. Housing age           - newer homes, damage from later work, route is
 *                              not condition (no figures; PENDING-015).
 *   4. Conway Meadows        - MSD's public-sewer project is not the private
 *                              lateral; service boundary and septic by address.
 *
 * ⚠ MSD AND CITY NUMBERS AND TERMS ARE THEIRS, not ours. The 85.6 percent,
 * 1982 and 1.4 percent housing figures are NOT used (PENDING-015). No price,
 * offer, response time, guarantee, emergency or same-day claim. Chesterfield
 * is a service area, not an office. Repair, excavation and replacement are
 * never presented as offered. A locate is an ESTIMATE, not a survey, utility
 * clearance or permission to dig.
 *
 * Audit: docs/source-reports/st-louis/sl-chesterfield-locating.md
 */

import type {
  PageId,
  ProcessContent,
  ServiceLocationPageContent,
} from "@/types";
import { serviceContent } from "./services";
import { chesterfieldContent } from "./st-louis-chesterfield";
import { mergeRelevantFaqs, pageImageSlots } from "./service-location-shared";
import { inclusions, problems, shots } from "./sl-blocks/sewer-line-locating";

const id = (value: string): PageId => value as PageId;

const slots = pageImageSlots("sl-chesterfield-locating", {
  hero: {
    alt: "Technician using a sewer line locator in a yard",
    shot: "Technician with a locator receiver in a residential yard, paint marks on pavement, no identifiable address",
  },
  problems: shots,
});

const v2 = serviceContent[id("svc-sewer-line-locating")]?.v2;
if (v2 === undefined || chesterfieldContent.faq === undefined) {
  throw new Error("sl-chesterfield-locating: source content is missing");
}

/**
 * Every question from the Chesterfield location page and the locating service
 * page, minus the ones named here (reasons in the source report).
 */
const chesterfieldLocatingFaq = mergeRelevantFaqs(
  chesterfieldContent.faq,
  v2.faq,
  [
    // Location page: a camera question the locating page does not own.
    "What does a sewer camera inspection show?",
    // Service page: the Chesterfield sale question answers it for this city.
    "Does my city require a sewer inspection for a sale, remodel, or permit?",
    // Service page: about drain cleaning products, off the locating topic.
    "Should I use chemical drain cleaner on a sewer line clog?",
    // Service page: about cleaning and pipe health, off the locating topic.
    "If the line drains after cleaning, is the pipe healthy?",
  ],
  "In Chesterfield",
);

const steps: ProcessContent[] = (v2.process?.steps ?? []).map((step) => ({
  title: step.title,
  description:
    typeof step.description === "string" ? step.description : undefined,
}));

export const chesterfieldLocatingContent: ServiceLocationPageContent = {
  seoTitle: "Sewer Line Locating in Chesterfield, MO",
  metaDescription:
    "Sewer line locating for Chesterfield, MO properties. The City defines the lateral from the foundation to the main. See what a locate is and is not.",
  serviceDescription:
    "Sewer line locating estimates where an accessible underground sewer line runs, using a transmitter inside the line and a receiver at the surface, for properties in Chesterfield, Missouri. Results are estimates, not a survey.",
  heroImage: slots.hero,
  ctaImage: slots.cta,
  sources: chesterfieldContent.sources,
  hero: {
    eyebrow: "Chesterfield, MO",
    title: "Sewer Line Locating in Chesterfield",
    intro: (
      <p>
        In Chesterfield, the City&rsquo;s lateral program defines the lateral as
        running from three to five feet outside the foundation to the sewer
        main, and MSD says the lateral and its connection to the public main are
        the owner&rsquo;s. Sewer line locating estimates where the accessible
        part of that line runs, so you can plan digging, fencing or other work
        around it.
      </p>
    ),
  },
  body: (
    <>
      <h2>
        From three to five feet outside the foundation to MSD&rsquo;s main: what
        a locate can trace
      </h2>
      <p>
        Chesterfield&rsquo;s lateral program defines the lateral as running from
        three to five feet outside the foundation or exterior wall to the sewer
        main in the street or a sewer easement, and MSD says the lateral and its
        connection to the public main are the owner&rsquo;s. Sewer line locating
        estimates where the accessible part of that line runs, using a
        transmitter in the line and a receiver at the surface.
      </p>
      <p>
        A locate is an estimate, not a survey. It does not show where the
        connection to MSD&rsquo;s main is, where an easement lies, or where the
        City&rsquo;s definition ends. We found no published rule on who owns the
        part of a lateral under the street, so confirm with MSD or the City.
      </p>

      <h2>Before anyone digs: the City&rsquo;s program, your bids, and 811</h2>
      <p>
        Chesterfield&rsquo;s program can pay for excavation and repair of a
        qualifying defective lateral. If you solicit your own bids under it, the
        policy asks for bids from at least three Master Drainlayers licensed by
        St. Louis County. The Sewer Pros does not perform repairs, excavation or
        replacements, but a locate can help you tell whoever does the work where
        the line runs.
      </p>
      <p>
        A locate is not utility clearance or permission to dig. Before anyone
        digs, contact your state one-call program (often reached at 811) or your
        local utility and follow applicable requirements. Ask Public Works at
        (636) 537-4762 (the City&rsquo;s number, not ours) how the program
        applies to your line.
      </p>

      <h2>Newer homes, later work, and where the line runs today</h2>
      <p>
        Most Chesterfield homes are newer than the typical St. Louis-area house,
        but a lateral can be disturbed after it is installed. A dent, crack or
        offset near an addition, landscaping or a utility crossing is damage
        from later work, and a newer pipe does not rule it out. House age does
        not tell you where a line runs now.
      </p>
      <p>
        When a camera shows such a condition, locating may help estimate where
        that point sits at the surface, when the equipment supports it. A locate
        says nothing about the pipe&rsquo;s condition. A camera inspection is
        the separate service that looks inside it.
      </p>

      <h2>
        MSD&rsquo;s Conway Meadows project is public sewer, not your lateral
      </h2>
      <p>
        MSD&rsquo;s Conway Meadows Sanitary Relief project is designed to
        replace about 1,400 feet of undersized sewer between Conway Road and
        North Outer Forty Road with pipe 18 to 24 inches wide. It is a public
        sewer project. Our locating covers the accessible private line, not
        public mains, and it does not tell you whether MSD&rsquo;s work touches
        your lateral. MSD&rsquo;s project page is undated, so check MSD for
        current status.
      </p>
      <p>
        Which utility serves a property near a service boundary, or on a septic
        system, should be confirmed by address, and a locate does not answer
        that. For a building backup, call MSD at (314) 768-6260 (MSD&rsquo;s
        number, not ours).
      </p>
    </>
  ),
  problems: [
    ...problems.map((p, i) => ({ ...p, image: slots.problems[i] })),
    {
      title: "Buying a Chesterfield home",
      description:
        "We found no sewer-lateral inspection requirement for an ordinary residential sale in the City materials we reviewed. A locate shows where the line runs, not its condition, and a pre-purchase sewer inspection looks at condition. The City’s program policy says the seller must apply in a real estate transaction, so ask Public Works how that fits your timeline.",
      image: slots.problems[3],
    },
  ],
  // Six items: renders as two rows of three.
  inclusions,
  process: steps,
  coverage: {
    title: "Other St. Louis area locations",
    intro:
      "This page covers Chesterfield. Lateral programs and sewer details differ by municipality, so use the page for your address.",
    pageIds: [
      id("loc-stl-st-louis-city"),
      id("loc-stl-ballwin"),
      id("loc-stl-st-charles"),
      id("loc-stl-florissant"),
    ],
    availabilityStatement:
      "Chesterfield is a service area, not an office location.",
  },
  // All relevant questions from the Chesterfield location page and the locating
  // service page (see `chesterfieldLocatingFaq` above).
  faq: chesterfieldLocatingFaq,
  relatedPageIds: [
    id("loc-stl-chesterfield"),
    id("svc-sewer-line-locating"),
    id("svc-sewer-camera-inspection"),
    id("svc-pre-purchase-sewer-inspection"),
  ],
  relatedTitle: "Related pages",
  cta: {
    title: "Request sewer line locating in Chesterfield",
    body: "Plan around your lateral with an estimate of where it runs. A locate is not a survey or permission to dig.",
  },
};
