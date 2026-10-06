/**
 * Summerlin, NV + Preventative Sewer Maintenance (`sl-summerlin-maintenance`).
 *
 * Authority: CLAUDE.md §9, §22, §24; docs/14-content-specification.md §43.
 * Model: `sl-nlv-maintenance.tsx` (approved).
 *
 * One local source (`summerlinContent`, `loc-lv-summerlin`) x one service source
 * (`svc-preventative-sewer-maintenance`, its `v2` block). Nothing here is new
 * research. Section recipe, each tied to what THIS service does or cannot:
 *   1. responsibility - the City and CCWRD both put the lateral on the owner,
 *      vs. a planned camera pass and cleaning
 *   2. responsibility + municipalProgram - CCWRD names periodic cleaning and
 *      roots, cleaning is not repair, no agency program found
 *   3. systemExplainer + service FAQ - no system type, age or local conditions
 *      on the pages, and no default schedule
 *   4. whoToCall + municipalProgram - the two agency numbers, no permit
 *      statement for cleaning or a camera pass, what a visit is not
 * Swap the location and sections 1-4 fail; swap the service and 1-3 fail.
 *
 * Audit: docs/source-reports/summerlin/sl-summerlin-maintenance.md
 *
 * ⚠ SUMMERLIN IS A COMMUNITY SPLIT BETWEEN TWO JURISDICTIONS, NOT A CITY. The page
 * never says which agency serves any address, and never reconciles the City's and
 * CCWRD's wording. Periodic cleaning is stated as CCWRD's wording only; the City
 * page does not say it.
 * ⚠ The Summerlin location page has no housing-age section, so no year-built
 * figure appears here.
 * ⚠ NO INTERVAL, SCHEDULE, PLAN OR CONTRACT is claimed. The service page states
 * none.
 * ⚠ AGENCY NUMBERS ARE THE AGENCIES', not ours. No company phone, office, price,
 * offer, response time or guarantee appears. Repair and replacement are never
 * offered.
 */

import type {
  PageId,
  ProcessContent,
  ServiceLocationPageContent,
} from "@/types";
import { summerlinContent } from "./las-vegas-summerlin";
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
if (v2 === undefined || summerlinContent.faq === undefined) {
  throw new Error("sl-summerlin-maintenance: source content is missing");
}

// Alt text stays neutral: the location page allows Summerlin wording only for a
// photo taken at a Summerlin-area property.
const slots = pageImageSlots("sl-summerlin-maintenance", {
  hero: {
    alt: "Technician on a preventative sewer maintenance visit at a home",
    shot: "Technician at a residential cleanout during a maintenance visit, monitor in frame, no identifiable address",
  },
  problems: [shots[0], shots[1], shots[2], shots[3]] as const,
});

/**
 * Every question from the Summerlin location page and the maintenance service
 * page, minus three Summerlin questions: "What does a sewer camera inspection
 * show?" (the service page asks "What does a sewer camera inspection find?"),
 * "Do you repair or replace sewer lines?" (the service page's "Do you offer sewer
 * repair or replacement?" answers it in full), and "Does Summerlin require a
 * sewer inspection when a home is sold?", which is about buying, not
 * maintenance.
 */
const faq = mergeRelevantFaqs(
  summerlinContent.faq,
  v2.faq,
  [
    "What does a sewer camera inspection show?",
    "Do you repair or replace sewer lines?",
    "Does Summerlin require a sewer inspection when a home is sold?",
  ],
  "In Summerlin",
);

const steps: ProcessContent[] = (v2.process?.steps ?? []).map((step) => ({
  title: step.title,
  description:
    typeof step.description === "string" ? step.description : undefined,
}));

export const summerlinMaintenanceContent: ServiceLocationPageContent = {
  seoTitle: "Preventative Sewer Maintenance in Summerlin, NV",
  metaDescription:
    "Preventative sewer maintenance in Summerlin, NV. CCWRD says owners handle periodic lateral cleaning. See what a camera pass and cleaning cover.",
  serviceDescription:
    "Preventative sewer maintenance is planned inspection and cleaning of a home's drain and sewer line before buildup or an obstruction causes a backup, for properties in Summerlin, NV, in the Las Vegas Valley. It is diagnostic and cleaning work, not repair.",
  heroImage: slots.hero,
  ctaImage: slots.cta,
  sources: summerlinContent.sources,
  hero: {
    eyebrow: "Summerlin, NV",
    title: "Preventative Sewer Maintenance in Summerlin",
    intro: (
      <p>
        Summerlin is served by more than one sewer agency, and both the City of
        Las Vegas and CCWRD describe the private lateral as the owner&rsquo;s.
        Preventative sewer maintenance is the planned version of looking after
        it: a camera pass that records the visible condition of the accessible
        line, and cleaning when it is appropriate, before buildup becomes a
        backup.
      </p>
    ),
  },
  body: (
    <>
      <h2>Both Summerlin agencies put the lateral on the owner</h2>
      <p>
        Clark County&rsquo;s 2024 map shows Summerlin partly in the City of Las
        Vegas and partly in unincorporated Clark County, and it is for display
        only, so we do not say which side any address is on. The City says
        owners maintain private sewer laterals up to the connection to the City
        main. CCWRD says a damaged lateral that connects a house to the sewer
        main in the street is the owner&rsquo;s responsibility. We show each in
        its own words.
      </p>
      <p>
        A maintenance visit is the planned way to look after that pipe: a
        recorded camera pass, then cleaning if buildup or an obstruction is
        present. The footage records where along the line a condition sits,
        measured from where the camera entered. It does not establish where the
        connection to the main is, or which agency serves the address.
      </p>

      <h2>
        CCWRD names periodic cleaning and roots, and cleaning does not fix a
        defect
      </h2>
      <p>
        CCWRD says the owner is also responsible for periodic cleaning to keep
        the lateral free of foreign matter, including roots, along with
        cleaning, repair and replacement of a damaged one. Cleaning can remove
        accessible roots, but it does not repair the opening they came through.
      </p>
      <p>
        The Sewer Pros does not perform repairs. You keep the video and written
        findings, which are the record of what was visible if a condition
        remains after cleaning. We found no City or CCWRD lateral repair, grant
        or reimbursement program.
      </p>

      <h2>
        No system age or schedule on the Summerlin pages, so the line decides
      </h2>
      <p>
        The pages we reviewed do not say whether the system is combined or
        separate, how old its mains are, or what soil or root conditions occur
        locally, so nothing on them points to a schedule for your line.
      </p>
      <p>
        A line with no history of problems does not need a default schedule, and
        we state no interval here. What raises the question is the line: mature
        trees near it, buildup that returned after a cleaning, or earlier
        backups never documented on camera.
      </p>

      <h2>Who to call, and what a maintenance visit is not</h2>
      <p>
        The City&rsquo;s Streets &amp; Sanitation Division is listed at
        702-229-6227 for a suspected main stoppage or a manhole overflow, and
        CCWRD lists 702-668-8354 for a sanitary sewer spill or sewer-related
        odors. Those are the agencies&rsquo; numbers, not ours. We found no
        hours, after-hours number or emergency line for either.
      </p>
      <p>
        We found no City or CCWRD rule on whether lateral work, cleaning or a
        camera inspection needs a permit or inspection, so ask the agency that
        serves your address. A maintenance visit is inspection and cleaning. It
        is not an emergency response and does not replace any agency review.
      </p>
    </>
  ),
  problems: [
    ...problems.map((p, i) => ({ ...p, image: slots.problems[i] })),
    {
      title: "A lateral both agencies call the owner’s",
      description:
        "The City says owners maintain private laterals up to the connection to the City main, and CCWRD says cleaning, repair and replacement of a damaged lateral are the owner’s. A maintenance pass records the accessible line. It does not establish which agency serves the address or where that connection is.",
      image: slots.problems[3],
    },
  ],
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
  faq,
  relatedPageIds: [
    id("loc-lv-summerlin"),
    id(SERVICE_ID),
    id("svc-sewer-camera-inspection"),
    id("svc-sewer-cleaning"),
  ],
  relatedTitle: "Related pages",
  cta: {
    title: "Request preventative sewer maintenance in Summerlin",
    body: "Tell us what you have noticed and what the line’s history looks like. We will talk through access and what a visit would include.",
  },
};
