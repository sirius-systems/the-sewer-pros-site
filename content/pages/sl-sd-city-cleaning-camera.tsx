/**
 * City of San Diego, CA + Sewer Cleaning & Camera Inspection
 * (`sl-sd-city-cleaning-camera`).
 *
 * Authority: CLAUDE.md §9, §22, §24; docs/14-content-specification.md §43, §79.
 * Built from exactly two sources, as `sl-lv-city-cleaning-camera` is:
 *   LOCAL    `sanDiegoCityContent` (`loc-sd-san-diego`)
 *   SERVICE  `svc-sewer-cleaning-camera-inspection` v2 content
 *            (content/pages/services.tsx) and `./sl-blocks/...`
 * Nothing here is new research.
 *
 * Section recipe (each section ties a City of San Diego fact to what a visit does):
 *   1. Where the line ends   - owner maintains to the City main (street,
 *                              easement, canyon); footage records distance from
 *                              the entry point, not the connection.
 *   2. Flush vs. inspection  - roots/grease, the City's annual cleanout flush
 *                              "is not an inspection"; cleaning then camera.
 *   3. Break beyond the line - the City's Plumber's Report process; footage and
 *                              findings are your own evidence, no claim the
 *                              City accepts them.
 *   4. No City help found    - "none found", EMRA list vs. what a camera does
 *                              not measure, permit gap, no repairs by us.
 *
 * The City of San Diego location page has no housing-age section, so none is
 * used here.
 *
 * ⚠ CITY NUMBERS ARE THE CITY'S, not ours. The company phone is read from
 * `marketOperatingDetail`, never typed. No price, offer, response time,
 * guarantee, emergency or same-day claim, equipment spec or San Diego office
 * appears. Repair and replacement are never presented as offered.
 */

import { marketOperatingDetail } from "@/data/markets/markets";
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
} from "./sl-blocks/sewer-cleaning-camera-inspection";

const id = (value: string): PageId => value as PageId;

const sd = marketOperatingDetail["san-diego-ca"];
if (sd === undefined)
  throw new Error("marketOperatingDetail is missing san-diego-ca");

const slots = pageImageSlots("sl-sd-city-cleaning-camera", {
  hero: {
    alt: "Technician reviewing camera footage on a monitor after a cleaning",
    shot: "Monitor showing a cleaned pipe with crew behind, residential property, no identifiable address",
  },
  problems: [shots[0], shots[1], shots[2], shots[3]] as const,
});

const v2 = serviceContent[id("svc-sewer-cleaning-camera-inspection")]?.v2;
if (v2 === undefined || sanDiegoCityContent.faq === undefined) {
  throw new Error("sl-sd-city-cleaning-camera: source content is missing");
}

const process: ProcessContent[] = (v2.process?.steps ?? []).map((step) => ({
  title: step.title,
  description:
    typeof step.description === "string" ? step.description : undefined,
}));

const CAMERA_SHOWS = "What does a sewer camera inspection show?";

/**
 * Every question from the San Diego location page and the service page. The
 * location page's "What does a sewer camera inspection show?" is left out
 * because the service page asks the same question with the fuller answer
 * (it includes what a camera does not show); filtering it here keeps the
 * service answer instead of letting the shorter location copy win the merge.
 */
const faq = mergeRelevantFaqs(
  sanDiegoCityContent.faq.filter((f) => f.question !== CAMERA_SHOWS),
  v2.faq,
  [],
  "In San Diego",
);

export const sanDiegoCityCleaningCameraContent: ServiceLocationPageContent = {
  seoTitle: "Sewer Cleaning & Camera Inspection in San Diego, CA",
  metaDescription:
    "Sewer cleaning and camera inspection in San Diego, CA. The City says your lateral is yours to its main, even in a canyon. See what a visit covers.",
  serviceDescription:
    "Sewer cleaning removes material that restricts flow in an accessible sewer line, and a camera inspection records its visible inside on video. The two can be combined in one visit, for properties in the City of San Diego, California.",
  heroImage: slots.hero,
  ctaImage: slots.cta,
  sources: sanDiegoCityContent.sources,
  hero: {
    eyebrow: "San Diego, CA",
    title: "Sewer Cleaning and Camera Inspection in San Diego",
    intro: (
      <p>
        In the City of San Diego, the City says the owner maintains the sewer
        lateral all the way to its connection with the City sewer main. A
        cleaning and camera visit works on the private side of that connection:
        it clears what can be cleared in the accessible line, and a camera may
        record the line before cleaning, after it, or both, so you can see what
        the cleaning changed.
      </p>
    ),
  },
  body: (
    <>
      <h2>Your lateral can end in a canyon, and footage does not show where</h2>
      <p>
        The City&rsquo;s Public Utilities Department says the owner maintains
        the lateral from the property all the way to its connection with the
        City sewer main, and that connection can be in the street, an easement
        or a canyon. Cleaning clears a restriction. It does not tell you which
        side of the connection the restriction was on.
      </p>
      <p>
        The camera footage records where along the line a condition sits,
        measured from where the camera entered, but it does not establish where
        the connection is or where a property line runs. For where a lateral
        connects, the City says Development Services offers a maps and records
        review at 619-446-5300 (the City&rsquo;s number, not ours).
      </p>

      <h2>
        A cleanout flush is not an inspection, and neither is a line that drains
      </h2>
      <p>
        The City names roots and cooking grease as leading causes of spills from
        private laterals, and recommends flushing a lateral&rsquo;s cleanout
        with a high-pressure hose at least once a year. It says a flush is not
        an inspection.
      </p>
      <p>
        Cleaning followed by a camera look does. A camera may be used before
        cleaning, after it, or both, and if the line is blocked and full of
        water the camera cannot see under the water, so cleaning may need to
        come first. A line that flows again, or a clear video, is not proof that
        the whole line is sound.
      </p>

      <h2>
        If a plumber finds a break past the property line, the footage is your
        record
      </h2>
      <p>
        When a licensed plumber finds a break or collapse beyond the property
        line, the City directs the plumber to call 619-515-3525 and file a
        Plumber&rsquo;s Report (the City&rsquo;s number, not ours). That process
        is the City&rsquo;s. We make no claim that the City accepts an outside
        report or that our work satisfies any City requirement.
      </p>
      <p>
        What you receive is your own evidence: the inspection video when a
        camera is used, and written findings that note any part of the line the
        camera could not view. If a returning clog leads to a repair estimate,
        those findings are what you compare it against.
      </p>

      <h2>
        No City help with lateral costs found, and what a camera does not
        measure
      </h2>
      <p>
        We did not find an active City program that gives homeowners a grant,
        reimbursement or other help with lateral costs on the City pages we
        reviewed. That is &ldquo;none found&rdquo;, not a statement that none
        exists. The City&rsquo;s agreement for certain nonstandard laterals
        names slope and unusual depth; a camera does not measure either, and
        that agreement is a City design rule, not a finding about your line.
      </p>
      <p>
        We found no City page on whether work confined to private property needs
        a permit, so ask Development Services at 619-446-5242 (the City&rsquo;s
        number). We do not perform repairs or replacements. To reach The Sewer
        Pros, call {sd.phone}.
      </p>
    </>
  ),
  problems: [
    ...problems.map((p, i) => ({ ...p, image: slots.problems[i] })),
    {
      title: "A break beyond the property line",
      description:
        "For a break or collapse past the property line, the City’s process runs through a licensed plumber’s call and a Plumber’s Report. Footage records the distance along the line from where the camera entered, not where a property line is.",
      image: slots.problems[3],
    },
  ],
  // Six items: renders as two rows of three.
  inclusions,
  process,
  coverage: {
    title: "Other San Diego area locations",
    intro:
      "This page covers the City of San Diego. Sewer agencies and lateral rules differ across San Diego County, so use the page for your address.",
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
  // All relevant questions from the San Diego location page and the service
  // page (see `faq` above).
  faq,
  relatedPageIds: [
    id("loc-sd-san-diego"),
    id("svc-sewer-cleaning-camera-inspection"),
    id("svc-sewer-camera-inspection"),
    id("svc-sewer-cleaning"),
  ],
  relatedTitle: "Related pages",
  cta: {
    title: "Request sewer cleaning and camera inspection in San Diego",
    body: "Clear the line and see what the cleaning changed, with video and written findings when a camera is used.",
  },
};
