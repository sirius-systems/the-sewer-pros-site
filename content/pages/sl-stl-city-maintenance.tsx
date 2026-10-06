/**
 * St. Louis City, MO + Preventative Sewer Maintenance (`sl-stl-city-maintenance`).
 *
 * Authority: CLAUDE.md §9, §22, §24; docs/14-content-specification.md §43.
 *
 * One local source (`stLouisCityContent`, `loc-stl-st-louis-city`) x one service
 * source (`svc-preventative-sewer-maintenance`, its `v2` block). Nothing here is
 * new research. Section recipe, each tied to what THIS service does or cannot:
 *   1. responsibility - the owner keeps the lateral to the MSD main, even under
 *      the street, so upkeep is the owner's
 *   2. municipalProgram - the City program excludes clogs and roots, so it does
 *      not pay for upkeep; cleaning is not repair
 *   3. housingAge + systemExplainer - older laterals and combined sewers vs.
 *      what actually raises the question, and no default schedule
 *   4. whoToCall + systemExplainer - MSD first for a backup, MSD's gutter and
 *      sump initiative vs. what a visit is not
 * Swap the city and sections 1-4 fail; swap the service and 1-3 fail.
 *
 * Audit: docs/source-reports/st-louis/sl-stl-city-maintenance.md
 *
 * ⚠ The St. Louis City location page states no periodic-inspection duty and no
 * inspection requirement for existing laterals, so this page says neither.
 * ⚠ NO INTERVAL, SCHEDULE, PLAN OR CONTRACT is claimed. The service page states
 * none.
 * ⚠ MSD AND CITY NUMBERS ARE THEIRS, not ours. No company phone, office, price,
 * offer, response time or guarantee appears. The "58 percent" figure and the
 * program's dollar fee are deliberately not used. Repair and replacement are
 * never offered.
 */

import type {
  PageId,
  ProcessContent,
  ServiceLocationPageContent,
} from "@/types";
import { serviceContent } from "./services";
import { mergeRelevantFaqs, pageImageSlots } from "./service-location-shared";
import {
  inclusions,
  problems,
  shots,
} from "./sl-blocks/preventative-sewer-maintenance";
import { stLouisCityContent } from "./st-louis-city";

const id = (value: string): PageId => value as PageId;

const SERVICE_ID = "svc-preventative-sewer-maintenance";

const v2 = serviceContent[id(SERVICE_ID)]?.v2;
if (v2 === undefined || stLouisCityContent.faq === undefined) {
  throw new Error("sl-stl-city-maintenance: source content is missing");
}

// Alt text stays neutral: no place-specific photo is claimed.
const slots = pageImageSlots("sl-stl-city-maintenance", {
  hero: {
    alt: "Technician on a preventative sewer maintenance visit at a home",
    shot: "Technician at a residential cleanout during a maintenance visit, monitor in frame, no identifiable address",
  },
  problems: [shots[0], shots[1], shots[2], shots[3]] as const,
});

/**
 * Every question from the St. Louis City location page and the maintenance
 * service page, minus three St. Louis City questions: "What does a sewer camera
 * inspection show?" (the service page asks "What does a sewer camera inspection
 * find?"), "Do you repair or replace sewer lines?" (the service page's "Do you
 * offer sewer repair or replacement?" answers it in full), and "Should I inspect
 * the sewer before buying a house in St. Louis City?", which is not about
 * maintenance.
 */
const faq = mergeRelevantFaqs(
  stLouisCityContent.faq,
  v2.faq,
  [
    "What does a sewer camera inspection show?",
    "Do you repair or replace sewer lines?",
    "Should I inspect the sewer before buying a house in St. Louis City?",
  ],
  "In St. Louis City",
);

const steps: ProcessContent[] = (v2.process?.steps ?? []).map((step) => ({
  title: step.title,
  description:
    typeof step.description === "string" ? step.description : undefined,
}));

export const stLouisCityMaintenanceContent: ServiceLocationPageContent = {
  seoTitle: "Preventative Sewer Maintenance in St. Louis City, MO",
  metaDescription:
    "Preventative sewer maintenance in St. Louis City, MO. The lateral is yours to the MSD main, and the City program leaves clogs to you. See what a visit covers.",
  serviceDescription:
    "Preventative sewer maintenance is planned inspection and cleaning of a home's drain and sewer line before buildup or an obstruction causes a backup, for properties in St. Louis City, Missouri. It is diagnostic and cleaning work, not repair.",
  heroImage: slots.hero,
  ctaImage: slots.cta,
  sources: stLouisCityContent.sources,
  hero: {
    eyebrow: "St. Louis City, MO",
    title: "Preventative Sewer Maintenance in St. Louis City",
    intro: (
      <p>
        In St. Louis City, MSD maintains the public sewer main, and the lateral
        from your building to it is private property, normally the owner&rsquo;s
        to maintain, even under the street or alley. Preventative sewer
        maintenance is the planned version: a camera pass that records the
        visible condition of the accessible line, and cleaning when it is
        appropriate, before buildup becomes a backup.
      </p>
    ),
  },
  body: (
    <>
      <h2>The lateral is yours to the MSD main, so its upkeep is too</h2>
      <p>
        MSD says the lateral connecting your building to the public main,
        including its connection, is private property and normally the
        owner&rsquo;s to maintain and repair, even where it runs under the
        street or alley. The City says the same of the entire lateral from a
        home to the MSD main.
      </p>
      <p>
        A maintenance visit is one way to look after that line yourself: a
        recorded camera pass, then cleaning if buildup or an obstruction is
        present. The line&rsquo;s own history decides what is useful, and we
        state no interval here.
      </p>

      <h2>
        The City program will not pay for upkeep, and cleaning is not repair
      </h2>
      <p>
        The City&rsquo;s Sewer Lateral Repair Program is aimed at severe damage
        under the public right-of-way, for residential properties of six or
        fewer units with fully paid real-estate taxes. The City says it does not
        cover clearing clogs or tree roots anywhere on the lateral, so clearing
        buildup and roots is the owner&rsquo;s job. Confirm current terms with
        the Street Division.
      </p>
      <p>
        Cleaning does not repair pipe, and The Sewer Pros does not perform
        repairs or replacements. The City says replacing a lateral takes a
        plumbing permit and inspection, issued to City-certified licensed
        plumbing contractors. You keep the video and written findings, which are
        the record of what was visible if a condition remains after cleaning.
      </p>

      <h2>
        Older laterals and combined sewers, and what really raises the question
      </h2>
      <p>
        Older City properties are served by older infrastructure, and older
        laterals were commonly vitrified clay, which wears at the joints and
        lets roots in, or cast iron, which corrodes and scales on the inside.
        Those are general industry timelines, not a statement about any one
        home. MSD also says most of the City is served by combined sewers that
        can be overwhelmed in intense rain, a system-level fact that your own
        maintenance does not change.
      </p>
      <p>
        A line with no history of problems does not need a default schedule.
        What raises the question is the line: mature trees near it, buildup that
        returned after a cleaning, or earlier backups never documented on
        camera.
      </p>

      <h2>MSD for a backup, and what a maintenance visit is not</h2>
      <p>
        If sewage is backing up through a floor drain, you smell sewage outside,
        or you see an overflow or a missing manhole cover, MSD asks you to
        report it right away at (314) 768-6260 (MSD&rsquo;s number, not ours). A
        maintenance visit is inspection and cleaning. It is not an emergency
        response and does not replace that call.
      </p>
      <p>
        MSD also runs its Get the Rain Out initiative to reroute gutters, sump
        pumps and yard drains that are connected to the wastewater sewer. That
        rerouting is MSD&rsquo;s program, not part of our visit. Our findings
        note what part of the line was viewed and what limited the view.
      </p>
    </>
  ),
  problems: [
    ...problems.map((p, i) => ({ ...p, image: slots.problems[i] })),
    {
      title: "A lateral that may run under the street or alley",
      description:
        "MSD and the City say the lateral from a building to the MSD main, including the part under the street or alley, is private and normally the owner’s to maintain. A maintenance pass records the accessible line. It does not establish where the connection to the main is.",
      image: slots.problems[3],
    },
  ],
  inclusions,
  process: steps,
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
  faq,
  relatedPageIds: [
    id("loc-stl-st-louis-city"),
    id(SERVICE_ID),
    id("svc-sewer-camera-inspection"),
    id("svc-sewer-cleaning"),
  ],
  relatedTitle: "Related pages",
  cta: {
    title: "Request preventative sewer maintenance in St. Louis City",
    body: "Tell us what you have noticed and what the line’s history looks like. We will talk through access and what a visit would include.",
  },
};
