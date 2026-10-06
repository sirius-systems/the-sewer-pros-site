/**
 * City of San Diego, CA + Preventative Sewer Maintenance (`sl-sd-city-maintenance`).
 *
 * Authority: CLAUDE.md §9, §22, §24; docs/14-content-specification.md §43.
 *
 * One local source (`sanDiegoCityContent`, `loc-sd-san-diego`) x one service
 * source (`svc-preventative-sewer-maintenance`, its `v2` block). Nothing here is
 * new research. Section recipe, each tied to what THIS service does or cannot:
 *   1. responsibility + systemExplainer - Council Policy 400-10 puts periodic
 *      clearing on the owner, and the City's yearly flush advice
 *   2. systemExplainer + responsibility - a flush is not an inspection: what a
 *      recorded camera pass and cleaning add, and what they do not establish
 *   3. systemExplainer - roots and grease, the City publishing no system age,
 *      and the EMRA list's trees, driveway and slope vs. the service's risk
 *      factors; no default schedule
 *   4. municipalProgram - none found, suspended crew program, the permit
 *      question, what a visit is not
 * Swap the city and sections 1-4 fail; swap the service and 1-3 fail.
 *
 * ⚠ The San Diego location page does NOT say the City requires or sets a
 * schedule for inspecting existing laterals, so this page does not say it. The
 * yearly cleanout flush is the CITY'S recommendation, quoted as such.
 * ⚠ NO INTERVAL, SCHEDULE, PLAN OR CONTRACT is claimed for The Sewer Pros. The
 * service page states none.
 * ⚠ The San Diego location page publishes NO housing-age figure, so none is
 * stated here. CITY NUMBERS ARE THE CITY'S, not ours. No company phone, office,
 * price, offer, response time or guarantee appears. Repair and replacement are
 * never offered.
 *
 * Audit: docs/source-reports/san-diego/sl-sd-city-maintenance.md
 */

import type {
  PageId,
  ProcessContent,
  ServiceLocationPageContent,
} from "@/types";
import { sanDiegoCityContent } from "./san-diego-city";
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
if (v2 === undefined || sanDiegoCityContent.faq === undefined) {
  throw new Error("sl-sd-city-maintenance: source content is missing");
}

// Alt text stays neutral: no place-specific photo is claimed.
const slots = pageImageSlots("sl-sd-city-maintenance", {
  hero: {
    alt: "Technician on a preventative sewer maintenance visit at a home",
    shot: "Technician at a residential cleanout during a maintenance visit, monitor in frame, no identifiable address",
  },
  problems: [shots[0], shots[1], shots[2], shots[3]] as const,
});

/**
 * Every question from the City of San Diego location page and the maintenance
 * service page, minus three San Diego questions: "What does a sewer camera
 * inspection show?" (the service page asks "What does a sewer camera inspection
 * find?"), "Do you repair or replace sewer lines?" (the service page's "Do you
 * offer sewer repair or replacement?" answers it in full), and "Should I check
 * the sewer lateral before buying a San Diego home?", which is not about
 * maintenance.
 */
const faq = mergeRelevantFaqs(
  sanDiegoCityContent.faq,
  v2.faq,
  [
    "What does a sewer camera inspection show?",
    "Do you repair or replace sewer lines?",
    "Should I check the sewer lateral before buying a San Diego home?",
  ],
  "In San Diego",
);

const steps: ProcessContent[] = (v2.process?.steps ?? []).map((step) => ({
  title: step.title,
  description:
    typeof step.description === "string" ? step.description : undefined,
}));

export const sanDiegoCityMaintenanceContent: ServiceLocationPageContent = {
  seoTitle: "Preventative Sewer Maintenance in San Diego, CA",
  metaDescription:
    "Preventative sewer maintenance in San Diego, CA. The City puts periodic lateral clearing on the owner; a flush is not an inspection. See what a visit covers.",
  serviceDescription:
    "Preventative sewer maintenance is planned inspection and cleaning of a home's drain and sewer line before buildup or an obstruction causes a backup, for properties in the City of San Diego, California. It is diagnostic and cleaning work, not repair.",
  heroImage: slots.hero,
  ctaImage: slots.cta,
  sources: sanDiegoCityContent.sources,
  hero: {
    eyebrow: "San Diego, CA",
    title: "Preventative Sewer Maintenance in San Diego",
    intro: (
      <p>
        In the City of San Diego, Council Policy 400-10 says the owner is
        responsible for periodic clearing of roots and other foreign matter from
        the sewer lateral, and the City recommends flushing a lateral&rsquo;s
        cleanout at least once a year. Preventative sewer maintenance is the
        planned version with evidence: a camera pass that records the visible
        condition of the accessible line, and cleaning when it is appropriate,
        before buildup becomes a backup.
      </p>
    ),
  },
  body: (
    <>
      <h2>The City puts periodic clearing of the lateral on the owner</h2>
      <p>
        The City of San Diego says the property owner is responsible for
        maintaining the sewer lateral all the way to its connection with the
        City sewer main, and Council Policy 400-10 says the owner is responsible
        for periodic clearing of roots and other foreign matter from it. For a
        lateral with a cleanout, the City recommends flushing it with a
        high-pressure hose at least once a year.
      </p>
      <p>
        That is the City&rsquo;s recommendation, not our schedule. We state no
        interval for a maintenance visit, because the line&rsquo;s own history
        decides what is useful.
      </p>

      <h2>
        A flush is not an inspection, and a visit covers more than a flush
      </h2>
      <p>
        A cleanout flush does not show what is inside the pipe. A maintenance
        visit adds what a flush cannot: a recorded camera pass through the
        accessible section, with anything that limits the view noted, then
        cleaning if buildup or an obstruction is present.
      </p>
      <ul>
        <li>
          The footage records where along the line a condition sits, measured
          from where the camera entered.
        </li>
        <li>It does not establish where the connection to the City main is.</li>
        <li>
          Cleaning does not repair pipe. The Sewer Pros does not perform
          repairs.
        </li>
      </ul>
      <p>
        You keep the video and written findings, the record of what was visible
        if a condition remains after cleaning.
      </p>

      <h2>
        Roots, grease and trees: what raises the question, and what the City
        does not publish
      </h2>
      <p>
        The City names roots and cooking grease as leading causes of spills from
        both public sewers and private laterals. Its design standards also treat
        a lateral that runs close to trees or near a driveway, or has inadequate
        slope or unusual depth, as nonstandard, needing a special agreement.
        That is a City design and permit rule, not a finding about any one
        property.
      </p>
      <p>
        A line with no history of problems does not need a default schedule.
        What raises the question is the line: mature trees near it, buildup that
        returned after a cleaning, or earlier backups never documented on
        camera.
      </p>

      <h2>No City help found, and who to ask about permits</h2>
      <p>
        We did not find an active City program that gives homeowners a grant,
        reimbursement or other help with lateral costs, and the City says its
        program for City crews to install sewer laterals is currently suspended.
        That is &ldquo;none found in the pages we reviewed&rdquo;, not a
        statement that none exists, so confirm with Public Utilities at
        619-515-3500 (the City&rsquo;s number).
      </p>
      <p>
        We did not find a City page on whether work confined to private property
        needs a permit, so ask Development Services (619-446-5242, the
        City&rsquo;s number) if you are unsure. A maintenance visit is
        inspection and cleaning. It is not an emergency response, and for a
        sewer spill or bad sewer odor the City asks you to call 619-515-3525
        (also the City&rsquo;s number).
      </p>
    </>
  ),
  problems: [
    ...problems.map((p, i) => ({ ...p, image: slots.problems[i] })),
    {
      title: "A lateral that connects in an easement or canyon",
      description:
        "The City says the lateral can connect to the main in the street, beyond the property line, in an easement or in a canyon. A maintenance pass records the accessible line. It does not establish where that connection is. Development Services offers a maps and records review (619-446-5300, the City’s number).",
      image: slots.problems[3],
    },
  ],
  inclusions,
  process: steps,
  coverage: {
    title: "Other San Diego area locations",
    intro:
      "This page covers the City of San Diego. Sewer authorities and lateral rules differ across San Diego County, so use the page for your address.",
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
  faq,
  relatedPageIds: [
    id("loc-sd-san-diego"),
    id(SERVICE_ID),
    id("svc-sewer-camera-inspection"),
    id("svc-sewer-cleaning"),
  ],
  relatedTitle: "Related pages",
  cta: {
    title: "Request preventative sewer maintenance in San Diego",
    body: "Tell us what you have noticed and what the line’s history looks like. We will talk through access and what a visit would include.",
  },
};
