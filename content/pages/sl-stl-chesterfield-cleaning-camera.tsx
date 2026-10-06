/**
 * Chesterfield, MO + Sewer Cleaning & Camera Inspection
 * (`sl-chesterfield-cleaning-camera`).
 *
 * Built from exactly two sources, as `sl-lv-city-cleaning-camera` is:
 *   LOCATION  `chesterfieldContent`  (content/pages/st-louis-chesterfield.tsx)
 *   SERVICE   `svc-sewer-cleaning-camera-inspection` v2 content
 *             (content/pages/services.tsx) and `./sl-blocks/...`
 *
 * Section recipe (each ties a Chesterfield fact to what THIS service does or
 * cannot do; swap the city or the service and the copy breaks):
 *   1. The City's steps      - the owner cables first (not reimbursed), then
 *                              the City's contractor televises; our footage is
 *                              the owner's own record, not a replacement
 *   2. Roots and defects     - roots in bells and joints as routine
 *                              maintenance; the City's defect list against what
 *                              a camera can and cannot show (no slope)
 *   3. Housing age           - newer homes, bellies, joints, later work (no
 *                              figures; PENDING-015)
 *   4. MSD and the connection - MSD's private-lateral statement, what footage
 *                              cannot place, MSD backup line (MSD's), no repairs
 *
 * ⚠ MSD AND CITY NUMBERS AND TERMS ARE THEIRS, not ours. The company phone is
 * read from `marketOperatingDetail`, never typed. The 85.6 percent, 1982 and
 * 1.4 percent housing figures are NOT used (PENDING-015). No price, offer,
 * response time, guarantee, licence claim, emergency or same-day claim.
 * Chesterfield is a service area, not an office. Repair and replacement are
 * never presented as offered.
 *
 * Audit: docs/source-reports/st-louis/sl-chesterfield-cleaning-camera.md
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
import {
  inclusions,
  problems,
  shots,
} from "./sl-blocks/sewer-cleaning-camera-inspection";

const id = (value: string): PageId => value as PageId;

const stl = marketOperatingDetail["st-louis-mo"];
if (stl === undefined)
  throw new Error("marketOperatingDetail is missing st-louis-mo");

const slots = pageImageSlots("sl-chesterfield-cleaning-camera", {
  hero: {
    alt: "Technician reviewing camera footage after a cleaning",
    shot: "Monitor showing a cleaned pipe with crew behind, residential property, no identifiable address",
  },
  problems: [shots[0], shots[1], shots[2], shots[3]] as const,
});

const v2 = serviceContent[id("svc-sewer-cleaning-camera-inspection")]?.v2;
if (v2 === undefined || chesterfieldContent.faq === undefined) {
  throw new Error("sl-chesterfield-cleaning-camera: source content is missing");
}

const process: ProcessContent[] = (v2.process?.steps ?? []).map((step) => ({
  title: step.title,
  description:
    typeof step.description === "string" ? step.description : undefined,
}));

const CAMERA_SHOWS = "What does a sewer camera inspection show?";

/**
 * Every question from the Chesterfield location page and the service page. The
 * location page's "What does a sewer camera inspection show?" is left out
 * because the service page asks the same question with the fuller answer (it
 * includes what a camera does not show); filtering it here keeps the service
 * answer instead of letting the shorter location copy win the merge.
 */
const faq = mergeRelevantFaqs(
  chesterfieldContent.faq.filter((f) => f.question !== CAMERA_SHOWS),
  v2.faq,
  [],
  "In Chesterfield",
);

export const chesterfieldCleaningCameraContent: ServiceLocationPageContent = {
  seoTitle: "Sewer Cleaning & Camera Inspection in Chesterfield, MO",
  metaDescription:
    "Sewer cleaning and camera inspection in Chesterfield, MO. The City cables first and runs its own video. See what your own footage adds and what it cannot.",
  serviceDescription:
    "Sewer cleaning removes material that restricts flow in an accessible sewer line, and a camera inspection records its visible inside on video. The two can be combined in one visit, for properties in Chesterfield, Missouri.",
  heroImage: slots.hero,
  ctaImage: slots.cta,
  sources: chesterfieldContent.sources,
  hero: {
    eyebrow: "Chesterfield, MO",
    title: "Sewer Cleaning and Camera Inspection in Chesterfield",
    intro: (
      <p>
        In Chesterfield, MSD says the lateral from your building to its public
        sewer main is private and the owner maintains it, and the City&rsquo;s
        lateral program starts with cabling and then its own video review. A
        cleaning and camera visit works on the private side: it clears what can
        be cleared in the accessible line, and a camera may record the line
        before cleaning, after it, or both, so you can see what the cleaning
        changed.
      </p>
    ),
  },
  body: (
    <>
      <h2>
        The City cables first and runs its own video, so a visit here is your
        own record
      </h2>
      <p>
        Chesterfield&rsquo;s lateral program has the owner start with cabling by
        a licensed plumbing company or licensed drainlayer, which the City does
        not reimburse. If that does not fix the line, the City&rsquo;s
        contractor televises the lateral, and Public Works reviews the video and
        accepts or denies repair.
      </p>
      <p>
        A cleaning and camera visit does not replace the City&rsquo;s video
        step, and the City decides eligibility. When a camera is used, you
        receive the video and written findings for the accessible line. Ask
        Public Works at (636) 537-4762 (the City&rsquo;s number, not ours) what
        documentation it accepts.
      </p>

      <h2>
        Roots the City calls maintenance, and the opening they came through
      </h2>
      <p>
        The City treats roots growing through pipe bells and joints as routine
        maintenance when removing them lets the line work. Cleaning removes the
        roots it reaches. A camera pass afterward can show whether a joint is
        separated or offset where they entered, which cleaning does not seal.
      </p>
      <p>
        The City&rsquo;s defect list includes a collapsed or broken line, a
        severe offset, a severe backfall or belly, and a severe blockage that
        cannot be cabled out. A camera may show standing water where a belly
        holds it, but it does not measure slope, and the City decides what
        counts as severe.
      </p>

      <h2>Newer Chesterfield homes: what clearing the clog does not settle</h2>
      <p>
        Most Chesterfield homes are newer than the typical St. Louis-area house,
        so a slow, repeating drain is less often old failing pipe. Bellies,
        joints opened by ground movement, and damage from later work such as an
        addition, landscaping or a utility crossing can all produce it.
      </p>
      <p>
        Cleaning alone can clear what settled in a belly and leave the belly. A
        camera look after cleaning shows what the cleaning achieved, and a line
        that flows again, or a video that looks clear, is not proof the pipe is
        sound.
      </p>

      <h2>MSD&rsquo;s main, your lateral, and what footage cannot place</h2>
      <p>
        MSD says the lateral line and its connection to the public sewer are
        private property, and the owner maintains and repairs them. Footage can
        show where along the line a condition was seen, but it does not
        establish where the connection to MSD&rsquo;s main is. We found no
        published rule on who owns the part under the street, so confirm with
        MSD or the City.
      </p>
      <p>
        For a building backup, call MSD at (314) 768-6260 (MSD&rsquo;s number,
        not ours) first so it can inspect. To reach The Sewer Pros, call{" "}
        {stl.phone}. We do not perform repairs or replacements, so if a
        returning clog leads to a repair estimate, the footage and findings are
        what you compare it against.
      </p>
    </>
  ),
  problems: [
    ...problems.map((p, i) => ({ ...p, image: slots.problems[i] })),
    {
      title: "Buying a Chesterfield home",
      description:
        "We found no sewer-lateral inspection requirement for an ordinary residential sale in the City materials we reviewed, so a buyer who wants evidence has to ask for it. If the line is blocked or full of water, a camera cannot see under it and cleaning may have to come first. The City’s program policy says the seller must apply in a real estate transaction, so ask Public Works how that fits your timeline.",
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
  // All relevant questions from the Chesterfield location page and the service
  // page (see `faq` above).
  faq,
  relatedPageIds: [
    id("loc-stl-chesterfield"),
    id("svc-sewer-cleaning-camera-inspection"),
    id("svc-sewer-camera-inspection"),
    id("svc-sewer-cleaning"),
  ],
  relatedTitle: "Related pages",
  cta: {
    title: "Request sewer cleaning and camera inspection in Chesterfield",
    body: "Clear the line and see what the cleaning changed, with video and written findings when a camera is used.",
  },
};
