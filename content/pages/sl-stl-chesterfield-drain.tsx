/**
 * Chesterfield, MO + Drain Cleaning (`sl-chesterfield-drain`).
 *
 * Built from exactly two sources, as `sl-lv-city-drain` is:
 *   LOCATION  `chesterfieldContent`  (content/pages/st-louis-chesterfield.tsx)
 *   SERVICE   `svc-drain-cleaning` v2 content (content/pages/services.tsx)
 *             and `./sl-blocks/drain-cleaning`
 *
 * Section recipe (each ties a Chesterfield fact to what THIS service does or
 * cannot do; swap the city or the service and the copy breaks):
 *   1. Responsibility        - MSD's private-lateral statement, the City's
 *                              lateral definition and its exclusion of pipe
 *                              under a building; fixture drains sit upstream.
 *   2. One drain, several, or a backup - the service's triage, plus MSD's
 *                              building-backup line (MSD's number).
 *   3. Housing age           - newer homes vs. what a returning drain clog
 *                              does and does not depend on (no figures;
 *                              PENDING-015).
 *   4. The City's program    - cabling and roots as maintenance, what drain
 *                              cleaning does not fix, no repairs by us.
 *
 * ⚠ MSD AND CITY NUMBERS AND TERMS ARE THEIRS, not ours. The company phone is
 * read from `marketOperatingDetail`, never typed. The 85.6 percent, 1982 and
 * 1.4 percent housing figures are NOT used (PENDING-015). No price, offer,
 * response time, guarantee, licence claim, emergency or same-day claim.
 * Chesterfield is a service area, not an office. Repair and replacement are
 * never presented as offered.
 *
 * Audit: docs/source-reports/st-louis/sl-chesterfield-drain.md
 */

import { marketOperatingDetail } from "@/data/markets/markets";
import type {
  PageId,
  ProcessContent,
  ServiceLocationPageContent,
} from "@/types";
import { serviceContent } from "./services";
import { chesterfieldContent } from "./st-louis-chesterfield";
import { mergeRelevantFaqs, pageImageSlots } from "./service-location-shared";
import { inclusions, problems, shots } from "./sl-blocks/drain-cleaning";

const id = (value: string): PageId => value as PageId;

const stl = marketOperatingDetail["st-louis-mo"];
if (stl === undefined)
  throw new Error("marketOperatingDetail is missing st-louis-mo");

const slots = pageImageSlots("sl-chesterfield-drain", {
  hero: {
    alt: "Drain cleaning equipment at a fixture in a home",
    shot: "Drain machine at a floor or tub drain, residential property, no identifiable address",
  },
  problems: [shots[0], shots[1], shots[2], shots[3]] as const,
});

const v2 = serviceContent[id("svc-drain-cleaning")]?.v2;
if (v2 === undefined || chesterfieldContent.faq === undefined) {
  throw new Error("sl-chesterfield-drain: source content is missing");
}

const process: ProcessContent[] = (v2.process?.steps ?? []).map((step) => ({
  title: step.title,
  description:
    typeof step.description === "string" ? step.description : undefined,
}));

/**
 * Every question from the Chesterfield location page and the drain cleaning
 * page, minus the ones below.
 */
const faq = mergeRelevantFaqs(
  chesterfieldContent.faq,
  v2.faq,
  [
    // This page IS an area page; the question is the hub's.
    "Do you clean drains in St. Louis, San Diego, and Las Vegas?",
    // Same answer, fuller, under "Does drain cleaning repair a damaged pipe?".
    "Can drain cleaning fix a broken or collapsed pipe?",
    // Same answer, fuller, under "Can tree roots grow into drain pipes?".
    "Can cleaning remove tree roots?",
  ],
  "In Chesterfield",
);

export const chesterfieldDrainContent: ServiceLocationPageContent = {
  seoTitle: "Drain Cleaning in Chesterfield, MO",
  metaDescription:
    "Drain cleaning in Chesterfield, MO. MSD says the lateral is the owner’s, and the City treats cabling as maintenance. See what cleaning does and does not fix.",
  serviceDescription:
    "Drain cleaning removes grease, roots, deposits, debris and other restricting material from a drain line using a rotating cable, water jetting, or both, for homes in Chesterfield, Missouri. It restores flow and does not repair the pipe.",
  heroImage: slots.hero,
  ctaImage: slots.cta,
  sources: chesterfieldContent.sources,
  hero: {
    eyebrow: "Chesterfield, MO",
    title: "Drain Cleaning in Chesterfield",
    intro: (
      <p>
        In Chesterfield, MSD says the lateral from your building to its public
        sewer main is private and the owner maintains it, and the City&rsquo;s
        lateral program starts at three to five feet outside the foundation, so
        the drains inside your home sit upstream of it. Drain cleaning clears
        the grease, roots, debris and buildup in a fixture or branch line. It
        does not reach MSD&rsquo;s main, and it does not repair the pipe.
      </p>
    ),
  },
  body: (
    <>
      <h2>
        Your fixture drains sit upstream of a lateral that starts outside the
        foundation
      </h2>
      <p>
        MSD says the lateral line from your building to the public sewer main,
        including its connection, is private property that the owner maintains.
        Chesterfield&rsquo;s lateral program defines that lateral as starting
        three to five feet outside the foundation or exterior wall, and it
        excludes pipe under a building or structure and interior cleanup, so the
        sinks, tubs and floor drains inside your home sit upstream of what the
        program defines.
      </p>
      <p>
        Drain cleaning usually means the fixture and branch lines in your home.
        Sewer cleaning means the larger line that carries wastewater away from
        the building. Neither reaches MSD&rsquo;s public main or the connection
        to it.
      </p>

      <h2>One drain, several drains, or a backup MSD should inspect</h2>
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
        These are clues, not proof. For a building backup, MSD asks you to call
        (314) 768-6260 (MSD&rsquo;s number, not ours) so it can inspect and
        determine whether the situation qualifies for its limited assistance
        program, and it treats raw sewage inside or outside a home as urgent. To
        reach The Sewer Pros, call {stl.phone}.
      </p>

      <h2>
        A newer Chesterfield house says little about why a drain keeps clogging
      </h2>
      <p>
        Most Chesterfield homes are newer than the typical St. Louis-area house,
        and pipe from that era is more often PVC than clay or cast iron. A
        single slow fixture is still usually its own drain line, whatever the
        age of the house.
      </p>
      <p>
        When a drain clogs again after it was cleared, the restriction may not
        have been fully removed, or something in the line may be rebuilding it,
        such as a belly that holds water and settles solids. A camera look at
        the accessible line may help show which.
      </p>

      <h2>
        What the City treats as maintenance, and what cleaning does not fix
      </h2>
      <p>
        Chesterfield&rsquo;s program has the owner start with cabling, which the
        City calls routine maintenance and does not reimburse, and it treats
        roots growing through pipe bells and joints as maintenance when removing
        them lets the line work. A severe blockage that cannot be cabled out can
        meet the City&rsquo;s definition of a defective lateral. Ask Public
        Works at (636) 537-4762 (the City&rsquo;s number, not ours) how the
        program applies.
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
      title: "Buying or selling a Chesterfield home",
      description:
        "We found no sewer-lateral inspection requirement for an ordinary residential sale in the City materials we reviewed. That is none found, not a confirmed absence. A buyer who sees slow drains can ask for a camera look at the accessible line, and the City’s program policy says the seller must apply in a real estate transaction, so a seller with recurring drains should ask Public Works how that fits the timeline.",
      image: slots.problems[3],
    },
  ],
  // Six items: renders as two rows of three.
  inclusions,
  process,
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
  // All relevant questions from the Chesterfield location page and the drain
  // cleaning page (see `faq` above).
  faq,
  relatedPageIds: [
    id("loc-stl-chesterfield"),
    id("svc-drain-cleaning"),
    id("svc-sewer-cleaning"),
    id("svc-sewer-camera-inspection"),
  ],
  relatedTitle: "Related pages",
  cta: {
    title: "Request drain cleaning in Chesterfield",
    body: "Get a slow or clogged drain cleared, with video and written findings when a camera is used.",
  },
};
