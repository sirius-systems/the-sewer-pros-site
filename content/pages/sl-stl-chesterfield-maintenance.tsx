/**
 * Chesterfield, MO + Preventative Sewer Maintenance (`sl-chesterfield-maintenance`).
 *
 * Authority: CLAUDE.md §9, §22, §24; docs/14-content-specification.md §43.
 *
 * One local source (`chesterfieldContent`, `loc-stl-chesterfield`) x one
 * service source (`svc-preventative-sewer-maintenance`, its `v2` block). Nothing
 * here is new research. Section recipe, each tied to what THIS service does or
 * cannot:
 *   1. responsibility + municipalProgram - the owner keeps the lateral, and the
 *      City treats cabling and root removal as maintenance it does not pay for
 *   2. municipalProgram - the $28-fee program pays for a defect, not upkeep; what
 *      a visit leaves you with
 *   3. housingAge - newer homes, no default schedule, the findings that still
 *      turn up
 *   4. whoToCall + systemExplainer - MSD, Public Works, 911, the public sewer
 *      project, and what a maintenance visit is not
 * Swap the city and sections 1-4 fail; swap the service and 1-3 fail.
 *
 * Audit: docs/source-reports/st-louis/sl-chesterfield-maintenance.md
 *
 * ⚠ NO INTERVAL, SCHEDULE, PLAN OR CONTRACT is claimed. The City's pages give
 * none that we found and the service page states none. The City program is
 * described as a repair program, never as a maintenance or inspection benefit.
 * ⚠ MSD AND CITY NUMBERS AND DOLLAR TERMS ARE THEIRS, not ours. No company
 * phone, office, price, offer, response time or guarantee appears. The location
 * page's Census figures are flagged pending (PENDING-015) and are NOT used
 * here. Repair and replacement are never offered.
 */

import type {
  PageId,
  ProcessContent,
  ServiceLocationPageContent,
} from "@/types";
import { chesterfieldContent } from "./st-louis-chesterfield";
import { serviceContent } from "./services";
import { mergeRelevantFaqs, pageImageSlots } from "./service-location-shared";
import {
  inclusions,
  problems,
  shots,
} from "./sl-blocks/preventative-sewer-maintenance";

const id = (value: string): PageId => value as PageId;

const SERVICE_ID = "svc-preventative-sewer-maintenance";

const v2 = serviceContent[id(SERVICE_ID)]?.v2;
if (v2 === undefined || chesterfieldContent.faq === undefined) {
  throw new Error("sl-chesterfield-maintenance: source content is missing");
}

// Alt text stays neutral: no place-specific photo is claimed.
const slots = pageImageSlots("sl-chesterfield-maintenance", {
  hero: {
    alt: "Technician on a preventative sewer maintenance visit at a home",
    shot: "Technician at a residential cleanout during a maintenance visit, monitor in frame, no identifiable address",
  },
  problems: [shots[0], shots[1], shots[2], shots[3]] as const,
});

/**
 * Every question from the Chesterfield location page and the maintenance
 * service page, minus three Chesterfield questions: "What does a sewer camera
 * inspection show?" (the service page asks "What does a sewer camera inspection
 * find?"), "Do you repair or replace sewer lines?" (the service page's "Do you
 * offer sewer repair or replacement?" answers it in full), and "Is a sewer
 * inspection required before buying a Chesterfield home?", which is not about
 * maintenance.
 */
const faq = mergeRelevantFaqs(
  chesterfieldContent.faq,
  v2.faq,
  [
    "What does a sewer camera inspection show?",
    "Do you repair or replace sewer lines?",
    "Is a sewer inspection required before buying a Chesterfield home?",
  ],
  "In Chesterfield",
);

const steps: ProcessContent[] = (v2.process?.steps ?? []).map((step) => ({
  title: step.title,
  description:
    typeof step.description === "string" ? step.description : undefined,
}));

export const chesterfieldMaintenanceContent: ServiceLocationPageContent = {
  seoTitle: "Preventative Sewer Maintenance in Chesterfield, MO",
  metaDescription:
    "Preventative sewer maintenance in Chesterfield, MO. The lateral is the owner’s, and the City treats cabling and roots as maintenance. See what a visit covers.",
  serviceDescription:
    "Preventative sewer maintenance is planned inspection and cleaning of a home's drain and sewer line before buildup or an obstruction causes a backup, for properties in Chesterfield, Missouri. It is diagnostic and cleaning work, not repair.",
  heroImage: slots.hero,
  ctaImage: slots.cta,
  sources: chesterfieldContent.sources,
  hero: {
    eyebrow: "Chesterfield, MO",
    title: "Preventative Sewer Maintenance in Chesterfield",
    intro: (
      <p>
        In Chesterfield, MSD says the lateral from your building, including its
        connection to the public main, is private property the owner maintains
        and repairs, and the City&rsquo;s own lateral program treats cabling and
        root removal as routine maintenance. Preventative sewer maintenance is
        the planned version: a camera pass that records the visible condition of
        the accessible line, and cleaning when it is appropriate, before buildup
        becomes a backup.
      </p>
    ),
  },
  body: (
    <>
      <h2>The upkeep of the lateral is yours, and the City says so</h2>
      <p>
        MSD says it maintains the public sewer main, and that the lateral from
        your building and its connection to that main are private property the
        owner maintains and repairs. Chesterfield draws the same line in its
        lateral repair program: the owner must have the line cabled first, the
        City does not reimburse that step, and it treats roots in pipe bells and
        joints as routine maintenance when removing them lets the line work.
      </p>
      <p>
        A maintenance visit is one way to do that upkeep deliberately: a
        recorded camera pass, then cleaning if buildup or an obstruction is
        present. We state no interval here.
      </p>

      <h2>What the City program pays for, and what a visit leaves you with</h2>
      <p>
        The City funds its program with a $28 annual fee on eligible residential
        tax bills. It can pay up to $15,000 for a qualifying defective lateral,
        under its March 2026 policy (the City&rsquo;s terms, not a price from
        us). Defects are a collapsed or broken line, a severe offset, a severe
        backfall or belly, or a severe blockage that cannot be cabled out.
        Routine maintenance is not on the list.
      </p>
      <ul>
        <li>
          A visit is not part of the program, and the program does not pay for
          it.
        </li>
        <li>The footage records where along the line a condition sits.</li>
        <li>
          Cleaning does not repair pipe. The Sewer Pros does not perform
          repairs.
        </li>
      </ul>
      <p>
        If a condition remains after cleaning, you keep the video and findings.
        The City runs its own video review, so ask Public Works what
        documentation it accepts.
      </p>

      <h2>
        Most Chesterfield homes are newer, and there is still no default
        schedule
      </h2>
      <p>
        Most Chesterfield homes are newer than the typical St. Louis-area house,
        and a line with no history of problems does not need a default schedule.
        What raises the question is the line: mature trees near it, buildup that
        returned after a cleaning, or earlier backups never documented on
        camera.
      </p>
      <p>
        On a newer lateral, returning buildup is less likely to mean old-pipe
        failure. A belly holding water, a joint pulled apart by ground movement,
        or roots at a gap are likelier, and a camera pass can record which. It
        cannot measure slope or see under water.
      </p>

      <h2>Who to call, and what a maintenance visit is not</h2>
      <p>
        For a building backup, MSD asks you to call (314) 768-6260 so it can
        inspect (MSD&rsquo;s number, not ours). For the City program, call
        Chesterfield Public Works at (636) 537-4762 (the City&rsquo;s number).
        The City&rsquo;s Who To Call guide says 911 is for an emergency that
        threatens life or property, and it is not a sewer dispatch line.
      </p>
      <p>
        MSD&rsquo;s Conway Meadows Sanitary Relief project is designed to
        replace public sewer between Conway Road and North Outer Forty Road. It
        does not tell you your lateral&rsquo;s condition. A maintenance visit is
        inspection and cleaning, not an emergency response.
      </p>
    </>
  ),
  problems: [
    ...problems.map((p, i) => ({ ...p, image: slots.problems[i] })),
    {
      title: "Roots the City calls routine maintenance",
      description:
        "Chesterfield’s lateral program treats roots in pipe bells and joints as routine maintenance when removing them lets the line work, and it does not reimburse the initial cabling. Root buildup is the owner’s upkeep, which is the kind of condition a maintenance visit records and clears.",
      image: slots.problems[3],
    },
  ],
  inclusions,
  process: steps,
  coverage: {
    title: "Other St. Louis area locations",
    intro:
      "This page covers Chesterfield. Each St. Louis area municipality has its own lateral program and terms, so use the page for your address.",
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
    id("svc-sewer-cleaning"),
  ],
  relatedTitle: "Related pages",
  cta: {
    title: "Request preventative sewer maintenance in Chesterfield",
    body: "Tell us what you have noticed and what the line’s history looks like. We will talk through access and what a visit would include.",
  },
};
