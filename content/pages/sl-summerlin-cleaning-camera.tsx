/**
 * Summerlin, NV + Sewer Cleaning & Camera Inspection
 * (`sl-summerlin-cleaning-camera`).
 *
 * Built from exactly two sources, as `sl-nlv-cleaning-camera` is:
 *   LOCATION  `summerlinContent`  (content/pages/las-vegas-summerlin.tsx)
 *   SERVICE   `svc-sewer-cleaning-camera-inspection` v2 content
 *             (content/pages/services.tsx) and `./sl-blocks/...`
 *
 * Section recipe (each ties a Summerlin fact to what THIS service does or
 * cannot do; swap the location or the service and the copy breaks):
 *   1. Two jurisdictions     - Clark County's 2024 map shows Summerlin partly in
 *                              the City of Las Vegas and partly in unincorporated
 *                              Clark County (display only, no parcel lookup);
 *                              cleaning and footage do not say which agency
 *                              serves an address.
 *   2. Owner's side, two     - the City and CCWRD word the owner's side in
 *      wordings                different words; CCWRD names cleaning (periodic,
 *                              roots) and a visit works on that owner side.
 *   3. Who to call           - a main stoppage or spill is the agency's call
 *                              (the AGENCIES' numbers); a returning clog needs
 *                              footage; newer-market sentence.
 *   4. None found            - no agency lateral program found, the optional
 *                              City-promoted warranty (applicability unknown),
 *                              no permit statement for cleaning, no local
 *                              evidence of combined or separate, no repairs by us.
 *
 * ⚠ SUMMERLIN IS SPLIT. The page never says which agency serves any address or
 * which part of Summerlin is on which side, and never merges the City's and
 * CCWRD's wordings into one rule.
 * ⚠ AGENCY NUMBERS ARE THE AGENCIES'. The company phone is read from
 * `marketOperatingDetail`, never typed. No price, offer, response time,
 * guarantee, emergency or same-day claim. Summerlin is a service area, not an
 * office. Repair and replacement are never presented as offered. The CCWRD page
 * and the City warranty page carry no update date; the copy says to confirm.
 * ⚠ IMAGES: alt text is neutral (no Summerlin wording) because the location
 * page restricts place wording to photos from a Summerlin-area property.
 */

import { marketOperatingDetail } from "@/data/markets/markets";
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
} from "./sl-blocks/sewer-cleaning-camera-inspection";

const id = (value: string): PageId => value as PageId;

const lv = marketOperatingDetail["las-vegas-nv"];
if (lv === undefined)
  throw new Error("marketOperatingDetail is missing las-vegas-nv");

const slots = pageImageSlots("sl-summerlin-cleaning-camera", {
  hero: {
    alt: "Technician reviewing camera footage after a cleaning",
    shot: "Monitor showing a cleaned pipe with crew behind, residential property, no identifiable address",
  },
  problems: [shots[0], shots[1], shots[2], shots[3]] as const,
});

const v2 = serviceContent[id("svc-sewer-cleaning-camera-inspection")]?.v2;
if (v2 === undefined || summerlinContent.faq === undefined) {
  throw new Error("sl-summerlin-cleaning-camera: source content is missing");
}

const process: ProcessContent[] = (v2.process?.steps ?? []).map((step) => ({
  title: step.title,
  description:
    typeof step.description === "string" ? step.description : undefined,
}));

const CAMERA_SHOWS = "What does a sewer camera inspection show?";

/**
 * Every question from the Summerlin location page and the service page. The
 * location page's "What does a sewer camera inspection show?" is left out
 * because the service page asks the same question with the fuller answer
 * (it includes what a camera does not show); filtering it here keeps the
 * service answer instead of letting the shorter location copy win the merge.
 */
const faq = mergeRelevantFaqs(
  summerlinContent.faq.filter((f) => f.question !== CAMERA_SHOWS),
  v2.faq,
  [],
  "In Summerlin",
);

export const summerlinCleaningCameraContent: ServiceLocationPageContent = {
  seoTitle: "Sewer Cleaning & Camera Inspection in Summerlin, NV",
  metaDescription:
    "Sewer cleaning and camera inspection in Summerlin, NV. Two agencies word the owner’s side differently. See what a visit covers and what it cannot show.",
  serviceDescription:
    "Sewer cleaning removes material that restricts flow in an accessible sewer line, and a camera inspection records its visible inside on video. The two can be combined in one visit, for properties in Summerlin, Nevada, in the Las Vegas Valley.",
  heroImage: slots.hero,
  ctaImage: slots.cta,
  sources: summerlinContent.sources,
  hero: {
    eyebrow: "Summerlin, NV",
    title: "Sewer Cleaning and Camera Inspection in Summerlin",
    intro: (
      <p>
        Clark County&rsquo;s boundary map shows Summerlin partly in the City of
        Las Vegas and partly in unincorporated Clark County, so the agency and
        its wording depend on your address. A cleaning and camera visit works on
        the owner&rsquo;s side of the lateral: it clears what can be cleared in
        the accessible line, and a camera may record the line before cleaning,
        after it, or both, so you can see what the cleaning changed.
      </p>
    ),
  },
  body: (
    <>
      <h2>
        Two agencies serve Summerlin, and cleaning does not tell you which one
        is yours
      </h2>
      <p>
        Clark County&rsquo;s 2024 jurisdictional boundary map shows parts of
        Summerlin inside the City of Las Vegas and parts in unincorporated Clark
        County. The map is for display only and we found no parcel lookup, so we
        do not say which side any address is on.
      </p>
      <p>
        Cleaning clears a restriction. The camera footage records where along
        the line a condition sits, measured from where the camera entered, but
        neither one establishes which agency serves the property or where the
        connection to the main is.
      </p>

      <h2>
        The City and CCWRD word the owner&rsquo;s side differently, and CCWRD
        names cleaning
      </h2>
      <p>
        At a City of Las Vegas address, the City says owners maintain private
        sewer laterals up to the connection to the City main. CCWRD says a
        damaged lateral that connects a house to the sewer main in the street is
        the property owner&rsquo;s responsibility, including cleaning, repair
        and replacement, and that owners are also responsible for periodic
        cleaning to keep the lateral free of foreign matter, including roots. We
        show each in its own words and do not merge them.
      </p>
      <p>A cleaning and camera visit works on that owner side.</p>

      <h2>
        A main stoppage is the agency&rsquo;s call, and a clog that returns
        needs footage
      </h2>
      <p>
        The City says a stoppage in a City main can affect several upstream
        properties and may overflow manholes. It lists Streets &amp; Sanitation
        at 702-229-6227 (the City&rsquo;s number, not ours) for that. CCWRD
        lists 702-668-8354 (CCWRD&rsquo;s number, not ours) for a sanitary sewer
        spill or sewer-related odors. To reach The Sewer Pros, call {lv.phone}.
        The Las Vegas Valley is a newer market for us; our longest-running work
        is in St. Louis and San Diego.
      </p>
      <p>
        A clog that returns may mean buildup, roots or debris remain, or a pipe
        condition is involved. A camera look after cleaning can help show which.
      </p>

      <h2>
        No agency repair program found, so the footage is what you compare
        against
      </h2>
      <p>
        We found no City or CCWRD lateral repair, replacement, grant or
        reimbursement program on the pages we reviewed. That is &ldquo;none
        found&rdquo;, not a statement that none exists. The City promotes an
        optional warranty program from a private company. We did not find
        whether it applies at a particular Summerlin address, including
        addresses served by CCWRD, or any price or coverage terms. We found no
        agency statement on whether cleaning or a camera inspection needs a
        permit, so ask the agency that serves your address. The pages also do
        not say whether the system is combined or separate, or how old its mains
        are.
      </p>
      <p>
        We do not perform repairs or replacements. A line that flows again is
        not proof that the whole line or the ground around it is in good
        condition, so if a returning clog leads to a repair estimate, the
        footage and findings are what you compare it against.
      </p>
    </>
  ),
  problems: [
    ...problems.map((p, i) => ({ ...p, image: slots.problems[i] })),
    {
      title: "Buying a Summerlin home",
      description:
        "We found no rule on the City and CCWRD pages we reviewed requiring a lateral inspection, certification or seller disclosure on sale, and both agencies describe the lateral as the owner’s, so a buyer who wants evidence has to ask. If the line is blocked or full of water, a camera cannot see under it and cleaning may have to come first.",
      image: slots.problems[3],
    },
  ],
  // Six items: renders as two rows of three.
  inclusions,
  process,
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
  // All relevant questions from the Summerlin location page and the service
  // page (see `faq` above).
  faq,
  relatedPageIds: [
    id("loc-lv-summerlin"),
    id("svc-sewer-cleaning-camera-inspection"),
    id("svc-sewer-camera-inspection"),
    id("svc-sewer-cleaning"),
  ],
  relatedTitle: "Related pages",
  cta: {
    title: "Request sewer cleaning and camera inspection in Summerlin",
    body: "Clear the line and see what the cleaning changed, with video and written findings when a camera is used.",
  },
};
