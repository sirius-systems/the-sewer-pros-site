/**
 * St. Charles, MO + Preventative Sewer Maintenance (`sl-st-charles-maintenance`).
 *
 * Authority: CLAUDE.md §9, §22, §24.
 *
 * One local source (`stCharlesContent`, `loc-stl-st-charles`) x one service
 * source (`svc-preventative-sewer-maintenance`, its `v2` block). Nothing here is
 * new research. Section recipe, each tied to what THIS service does or cannot:
 *   1. municipalProgram - the City program pays to repair a defective lateral;
 *      its covered items do not list upkeep
 *   2. responsibility - the owner arranges inspection, cleaning and repair; a
 *      visit's record, and no interval stated
 *   3. housingAge - median 1986, no published pipe era, no default schedule
 *   4. systemExplainer + municipalProgram.callout - the Hackmann Road manhole and
 *      the Newtown vacuum system are the City's; our records do not replace the
 *      City's camera
 * Swap the city and 1-4 fail; swap the service and 1-3 fail.
 *
 * Audit: docs/source-reports/st-louis/sl-st-charles-maintenance.md
 *
 * ⚠ ST. CHARLES RUNS ITS OWN SEWER SYSTEM. No MSD fact or number is used.
 * ⚠ NO INTERVAL, SCHEDULE, PLAN OR CONTRACT is claimed. The City's pages give
 * none that we found and the service page states none. No City inspection
 * duty is stated either, because the sources do not give one.
 * ⚠ CITY NUMBERS AND DOLLAR TERMS ARE THE CITY'S, not ours. No company phone,
 * office, price, offer, response time or guarantee appears. Repair and
 * replacement are never offered.
 */

import type {
  PageId,
  ProcessContent,
  ServiceLocationPageContent,
} from "@/types";
import { stCharlesContent } from "./st-louis-st-charles";
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
if (v2 === undefined || stCharlesContent.faq === undefined) {
  throw new Error("sl-st-charles-maintenance: source content is missing");
}

// Alt text stays neutral: no place-specific photo is claimed.
const slots = pageImageSlots("sl-st-charles-maintenance", {
  hero: {
    alt: "Technician on a preventative sewer maintenance visit at a home",
    shot: "Technician at a residential cleanout during a maintenance visit, monitor in frame, no identifiable address",
  },
  problems: [shots[0], shots[1], shots[2], shots[3]] as const,
});

/**
 * Every question from the St. Charles location page and the maintenance
 * service page, minus three St. Charles questions: "What does a sewer camera
 * inspection show?" (the service page asks "What does a sewer camera inspection
 * find?"), "Do you repair or replace sewer lines?" (the service page's "Do you
 * offer sewer repair or replacement?" answers it in full), and "Is a sewer
 * inspection required before buying a St. Charles home?", which is not about
 * maintenance.
 */
const faq = mergeRelevantFaqs(
  stCharlesContent.faq,
  v2.faq,
  [
    "What does a sewer camera inspection show?",
    "Do you repair or replace sewer lines?",
    "Is a sewer inspection required before buying a St. Charles home?",
  ],
  "In St. Charles",
);

const steps: ProcessContent[] = (v2.process?.steps ?? []).map((step) => ({
  title: step.title,
  description:
    typeof step.description === "string" ? step.description : undefined,
}));

export const stCharlesMaintenanceContent: ServiceLocationPageContent = {
  seoTitle: "Preventative Sewer Maintenance in St. Charles, MO",
  metaDescription:
    "Preventative sewer maintenance in St. Charles, MO. The City program reimburses repair of a defective lateral, not upkeep. See what a visit covers.",
  serviceDescription:
    "Preventative sewer maintenance is planned inspection and cleaning of a home's drain and sewer line before buildup or an obstruction causes a backup, for properties in the City of St. Charles, Missouri. It is diagnostic and cleaning work, not repair.",
  heroImage: slots.hero,
  ctaImage: slots.cta,
  sources: stCharlesContent.sources,
  hero: {
    eyebrow: "St. Charles, MO",
    title: "Preventative Sewer Maintenance in St. Charles",
    intro: (
      <p>
        The City of St. Charles runs its own sewer system, and its lateral
        program reimburses part of the cost of repairing a defective lateral.
        Preventative sewer maintenance is the planned version for the owner: a
        camera pass that records the visible condition of the accessible line,
        and cleaning when it is appropriate, before buildup becomes a backup.
      </p>
    ),
  },
  body: (
    <>
      <h2>
        The City program pays to repair a defective lateral, not to look after
        one
      </h2>
      <p>
        The City&rsquo;s Sewer Lateral Repair Program reimburses 90 percent of
        the authorized cost of repairing a defective residential lateral, up to
        $7,500, funded by an annual fee on the real estate tax bill (the
        City&rsquo;s terms, not our prices). What it covers is patching or
        replacement and the related digging, dirt replacement and seeding, and
        the sidewalks, driveways and pavement that must be replaced. The
        City&rsquo;s list does not name upkeep.
      </p>
      <p>
        A maintenance visit is one way to look after the line yourself: a
        recorded camera pass, then cleaning if buildup or an obstruction is
        present. Cleaning does not repair pipe, and The Sewer Pros does not
        perform repairs.
      </p>

      <h2>The owner arranges the lateral, so the record is yours</h2>
      <p>
        The City Code describes the lateral as the piping from the foundation to
        a sewer main, and under the City&rsquo;s program the owner obtains the
        bids and chooses the contractor. The City&rsquo;s Public Works Sewer
        Division, not MSD, runs the public system. On the lateral, a visit works
        like this:
      </p>
      <ul>
        <li>
          The footage records where along the line a condition sits, measured
          from where the camera entered.
        </li>
        <li>
          You receive the video and written findings, including what limited the
          view.
        </li>
        <li>
          No interval is stated here, because neither the City nor the service
          sets one.
        </li>
      </ul>

      <h2>A 1986 median year built, and still no default schedule</h2>
      <p>
        St. Charles&rsquo;s median year built is 1986, according to the U.S.
        Census Bureau&rsquo;s 2024 American Community Survey 5-year estimates
        (margin of error 2 years), and our arithmetic on the Census rows puts
        about 62 percent of housing units at 1980 or later. The City does not
        publish a pipe material or installation era, so year built does not tell
        you what is in the ground.
      </p>
      <p>
        A line with no history of problems does not need a default schedule.
        What raises the question is the line: mature trees near it, buildup that
        returned after a cleaning, or earlier backups never documented on
        camera.
      </p>

      <h2>
        The City&rsquo;s system and the City&rsquo;s camera are not part of a
        visit
      </h2>
      <p>
        The City&rsquo;s May 2026 departmental report describes a sanitary
        manhole in the middle of a creek on Hackmann Road that it says
        contributes to surcharging and backups, and the Sewer Division maintains
        a sewer vacuum system in Newtown. Both belong to the City&rsquo;s
        system. A maintenance visit covers the accessible line on your property.
      </p>
      <p>
        If a condition remains after cleaning and you apply to the City program,
        the City sends its own camera to set the repair scope and asks for a
        cabling certification first. Our records do not replace either step, and
        we make no claim that the City accepts an outside report. Confirm
        current terms with Public Works at (636) 949-3363 (the City&rsquo;s
        number, not ours).
      </p>
    </>
  ),
  problems: [
    ...problems.map((p, i) => ({ ...p, image: slots.problems[i] })),
    {
      title: "A City program for repairs, not upkeep",
      description:
        "The City program reimburses repair of a defective lateral, and its list of covered work does not name maintenance. A maintenance pass records the accessible line and cleans it when appropriate. It does not repair pipe.",
      image: slots.problems[3],
    },
  ],
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
  faq,
  relatedPageIds: [
    id("loc-stl-st-charles"),
    id(SERVICE_ID),
    id("svc-sewer-camera-inspection"),
    id("svc-sewer-cleaning"),
  ],
  relatedTitle: "Related pages",
  cta: {
    title: "Request preventative sewer maintenance in St. Charles",
    body: "Tell us what you have noticed and what the line’s history looks like. We will talk through access and what a visit would include.",
  },
};
