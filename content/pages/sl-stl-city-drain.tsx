/**
 * St. Louis City, MO + Drain Cleaning (`sl-stl-city-drain`).
 *
 * Built from exactly two sources, as `sl-lv-city-drain` is:
 *   LOCATION  `stLouisCityContent`  (content/pages/st-louis-city.tsx)
 *   SERVICE   `svc-drain-cleaning` v2 content (content/pages/services.tsx)
 *             and `./sl-blocks/drain-cleaning`
 *
 * Section recipe (each ties a St. Louis City fact to what THIS service does or
 * cannot do; swap the city or the service and the copy breaks):
 *   1. Responsibility        - MSD's main vs. the private lateral to it, even
 *                              under the street; fixture drains sit upstream.
 *   2. One drain, several, or sewage at a floor drain - the service's triage,
 *                              plus MSD's report line (MSD's number).
 *   3. Combined sewers       - MSD's rain and gutter/sump facts vs. what a
 *                              fixture-drain cleaning can and cannot change.
 *   4. City program          - the City program excludes clogs and roots; what
 *                              cleaning does not fix; no repairs by us.
 *
 * ⚠ MSD AND CITY NUMBERS ARE THEIRS, not ours. The company phone is read from
 * `marketOperatingDetail`, never typed. No price, offer, response time,
 * guarantee, emergency or same-day claim. The "58 percent" housing figure and
 * the program's dollar fee are deliberately not used. St. Louis City is a
 * service area, not an office. Repair and replacement are never offered.
 *
 * Audit: docs/source-reports/st-louis/sl-stl-city-drain.md
 */

import { marketOperatingDetail } from "@/data/markets/markets";
import type {
  PageId,
  ProcessContent,
  ServiceLocationPageContent,
} from "@/types";
import { serviceContent } from "./services";
import { mergeRelevantFaqs, pageImageSlots } from "./service-location-shared";
import { inclusions, problems, shots } from "./sl-blocks/drain-cleaning";
import { stLouisCityContent } from "./st-louis-city";

const id = (value: string): PageId => value as PageId;

const stl = marketOperatingDetail["st-louis-mo"];
if (stl === undefined)
  throw new Error("marketOperatingDetail is missing st-louis-mo");

// Alt text stays neutral: no place-specific photo is claimed.
const slots = pageImageSlots("sl-stl-city-drain", {
  hero: {
    alt: "Drain cleaning equipment at a fixture in a home",
    shot: "Drain machine at a floor or tub drain, residential property, no identifiable address",
  },
  problems: [shots[0], shots[1], shots[2], shots[3]] as const,
});

const v2 = serviceContent[id("svc-drain-cleaning")]?.v2;
if (v2 === undefined || stLouisCityContent.faq === undefined) {
  throw new Error("sl-stl-city-drain: source content is missing");
}

const process: ProcessContent[] = (v2.process?.steps ?? []).map((step) => ({
  title: step.title,
  description:
    typeof step.description === "string" ? step.description : undefined,
}));

/**
 * Every question from the St. Louis City location page and the drain cleaning
 * page, minus the ones below.
 */
const faq = mergeRelevantFaqs(
  stLouisCityContent.faq,
  v2.faq,
  [
    // This page IS an area page; the question is the hub's.
    "Do you clean drains in St. Louis, San Diego, and Las Vegas?",
    // Same answer, fuller, under "Does drain cleaning repair a damaged pipe?".
    "Can drain cleaning fix a broken or collapsed pipe?",
    // Same answer, fuller, under "Can tree roots grow into drain pipes?".
    "Can cleaning remove tree roots?",
  ],
  "In St. Louis City",
);

export const stLouisCityDrainContent: ServiceLocationPageContent = {
  seoTitle: "Drain Cleaning in St. Louis City, MO",
  metaDescription:
    "Drain cleaning in St. Louis City, MO. MSD maintains the main; your lateral is private. See what drain cleaning clears and what it cannot fix.",
  serviceDescription:
    "Drain cleaning removes grease, roots, deposits, debris and other restricting material from a drain line using a rotating cable, water jetting, or both, for homes in St. Louis City, Missouri. It restores flow and does not repair the pipe.",
  heroImage: slots.hero,
  ctaImage: slots.cta,
  sources: stLouisCityContent.sources,
  hero: {
    eyebrow: "St. Louis City, MO",
    title: "Drain Cleaning in St. Louis City",
    intro: (
      <p>
        In St. Louis City, MSD maintains the public sewer main, and the lateral
        from your building to it is private property, even where it runs under
        the street or alley. The drains inside your home sit upstream of that
        line. Drain cleaning clears the grease, roots, debris and buildup in a
        fixture or branch line. It does not reach MSD&rsquo;s main, and it does
        not repair the pipe.
      </p>
    ),
  },
  body: (
    <>
      <h2>
        Your drains sit upstream of a lateral that is yours to the MSD main
      </h2>
      <p>
        MSD says it maintains the public sewer main, and that the lateral
        connecting your building to that main, including its connection, is
        private property and normally the owner&rsquo;s to maintain and repair,
        even where it runs under the street or alley. The City says the same of
        the entire lateral from a home to the MSD main.
      </p>
      <p>
        Drain cleaning usually means the fixture and branch lines in your home.
        Sewer cleaning means the larger line that carries wastewater away from
        the building. Neither reaches the public main or the connection to it.
      </p>

      <h2>One drain, several drains, or sewage at a floor drain</h2>
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
          <strong>Sewage backing up through a floor drain:</strong> a report to
          MSD comes first.
        </li>
      </ul>
      <p>
        These are clues, not proof. MSD asks you to report sewage backing up
        through a floor drain, a sewage smell outside, an overflow or a missing
        manhole cover right away, at (314) 768-6260 (MSD&rsquo;s number, not
        ours). MSD investigates whether the cause is the public sewer or your
        lateral. To reach The Sewer Pros, call {stl.phone}.
      </p>

      <h2>Combined sewers and heavy rain are not a fixture-drain problem</h2>
      <p>
        MSD says most of St. Louis City is served by combined sewers, and that
        intense rain can overwhelm their capacity and cause wet-weather basement
        backups in affected areas. MSD also notes that many City buildings
        connect gutters, sump pumps and yard drains to the wastewater sewer.
      </p>
      <p>
        Those are system-level facts, not findings about your line. Cleaning a
        fixture drain changes nothing about how the public system behaves in
        rain. When a drain clogs again after it was cleared, the restriction may
        not have been fully removed, or something in the line may be rebuilding
        it. A camera look at the accessible line may help show which.
      </p>

      <h2>
        The City program leaves clogs to you, and cleaning does not fix damage
      </h2>
      <p>
        The City&rsquo;s Sewer Lateral Repair Program is aimed at severe damage
        under the public right-of-way. The City says it does not cover clearing
        clogs or tree roots anywhere on the lateral, so that work is the
        owner&rsquo;s. Confirm current terms with the Street Division.
      </p>
      <p>
        Cleaning does not fix a cracked, broken or collapsed pipe, an offset or
        separated joint, or roots entering at a joint. We do not perform repairs
        or replacements, and the City says replacing a lateral takes a plumbing
        permit and inspection, issued to City-certified licensed plumbing
        contractors. When a camera is used you receive the video and written
        findings, which you can compare against any estimate.
      </p>
    </>
  ),
  problems: [
    ...problems.map((p, i) => ({ ...p, image: slots.problems[i] })),
    {
      title: "Water at a basement floor drain",
      description:
        "MSD lists water pooling around basement floor drains among the possible signs of a blocked or damaged private lateral, and asks to be called first when sewage backs up through a floor drain. A single clogged fixture is a drain-cleaning job. Sewage coming up from a floor drain starts with MSD (its number, not ours).",
      image: slots.problems[3],
    },
  ],
  // Six items: renders as two rows of three.
  inclusions,
  process,
  coverage: {
    title: "Other St. Louis area locations",
    intro:
      "This page covers St. Louis City. Sewer agencies and lateral rules differ across the St. Louis area, so use the page for your address.",
    pageIds: [
      id("loc-stl-chesterfield"),
      id("loc-stl-ballwin"),
      id("loc-stl-st-charles"),
      id("loc-stl-florissant"),
    ],
    availabilityStatement:
      "St. Louis City is a service area, not an office location.",
  },
  // All relevant questions from the St. Louis City location page and the drain
  // cleaning page (see `faq` above).
  faq,
  relatedPageIds: [
    id("loc-stl-st-louis-city"),
    id("svc-drain-cleaning"),
    id("svc-sewer-cleaning"),
    id("svc-sewer-camera-inspection"),
  ],
  relatedTitle: "Related pages",
  cta: {
    title: "Request drain cleaning in St. Louis City",
    body: "Get a slow or clogged drain cleared, with video and written findings when a camera is used.",
  },
};
