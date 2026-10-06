/**
 * City of San Diego, CA + Drain Cleaning (`sl-sd-city-drain`).
 *
 * Built from exactly two sources, as `sl-lv-city-drain` is:
 *   LOCATION  `sanDiegoCityContent`  (content/pages/san-diego-city.tsx)
 *   SERVICE   `svc-drain-cleaning` v2 content (content/pages/services.tsx)
 *             and `./sl-blocks/drain-cleaning`
 *
 * Section recipe (each ties a City of San Diego fact to what THIS service does
 * or cannot; swap the city or the service and the copy breaks):
 *   1. Responsibility        - the owner maintains the lateral to the City main,
 *                              wherever that connection is; fixture drains sit
 *                              upstream of it; neither cleaning reaches the main.
 *   2. One drain, several, or water coming up - the service's triage, plus the
 *                              City's spill and odor line (the CITY's number).
 *   3. Roots, grease and the cleanout flush - Council Policy 400-10 and the
 *                              yearly flush vs. what a fixture-drain cleaning
 *                              does; a flush is not an inspection.
 *   4. No City help found    - "none found", the suspended crew program, the
 *                              permit question, what cleaning does not fix, no
 *                              repairs by us.
 *
 * ⚠ The San Diego location page publishes NO housing-age figure, so none is
 * stated here. CITY NUMBERS ARE THE CITY'S, not ours. The company phone is read
 * from `marketOperatingDetail`, never typed. No price, offer, response time,
 * guarantee, emergency or same-day claim. San Diego is a service area, not an
 * office. Repair and replacement are never presented as offered.
 *
 * Audit: docs/source-reports/san-diego/sl-sd-city-drain.md
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
import { inclusions, problems, shots } from "./sl-blocks/drain-cleaning";

const id = (value: string): PageId => value as PageId;

const sd = marketOperatingDetail["san-diego-ca"];
if (sd === undefined)
  throw new Error("marketOperatingDetail is missing san-diego-ca");

// Alt text stays neutral: no place-specific photo is claimed.
const slots = pageImageSlots("sl-sd-city-drain", {
  hero: {
    alt: "Drain cleaning equipment at a fixture in a residential property",
    shot: "Drain machine at a floor or tub drain, residential property, no identifiable address",
  },
  problems: [shots[0], shots[1], shots[2], shots[3]] as const,
});

const v2 = serviceContent[id("svc-drain-cleaning")]?.v2;
if (v2 === undefined || sanDiegoCityContent.faq === undefined) {
  throw new Error("sl-sd-city-drain: source content is missing");
}

const process: ProcessContent[] = (v2.process?.steps ?? []).map((step) => ({
  title: step.title,
  description:
    typeof step.description === "string" ? step.description : undefined,
}));

/**
 * Every question from the San Diego location page and the drain cleaning
 * page, minus the ones below.
 */
const faq = mergeRelevantFaqs(
  sanDiegoCityContent.faq,
  v2.faq,
  [
    // About nonstandard lateral design and permits, not fixture drains.
    "What is an EMRA for a San Diego sewer lateral?",
    // This page IS an area page; the question is the hub's.
    "Do you clean drains in St. Louis, San Diego, and Las Vegas?",
    // Same answer, fuller, under "Does drain cleaning repair a damaged pipe?".
    "Can drain cleaning fix a broken or collapsed pipe?",
    // Same answer, fuller, under "Can tree roots grow into drain pipes?".
    "Can cleaning remove tree roots?",
  ],
  "In San Diego",
);

export const sanDiegoCityDrainContent: ServiceLocationPageContent = {
  seoTitle: "Drain Cleaning in San Diego, CA",
  metaDescription:
    "Drain cleaning in San Diego, CA. The City says the lateral is yours to the City main, so fixture drains sit upstream. See what cleaning does and does not fix.",
  serviceDescription:
    "Drain cleaning removes grease, roots, deposits, debris and other restricting material from a drain line using a rotating cable, water jetting, or both, for homes in the City of San Diego, California. It restores flow and does not repair the pipe.",
  heroImage: slots.hero,
  ctaImage: slots.cta,
  sources: sanDiegoCityContent.sources,
  hero: {
    eyebrow: "San Diego, CA",
    title: "Drain Cleaning in San Diego",
    intro: (
      <p>
        In the City of San Diego, the City says the owner maintains the sewer
        lateral from the property all the way to its connection with the City
        sewer main, so the drains inside your home sit upstream of that line.
        Drain cleaning clears the grease, roots, debris and buildup in a fixture
        or branch line. It does not reach the City main or the connection to it,
        and it does not repair the pipe.
      </p>
    ),
  },
  body: (
    <>
      <h2>
        Your fixture drains sit upstream of a lateral the City says is yours
      </h2>
      <p>
        The City of San Diego&rsquo;s Public Utilities Department says the
        property owner is responsible for maintaining the sewer lateral from the
        property all the way to its connection with the City sewer main. That
        connection can be in the street, beyond the property line, in an
        easement or in a canyon. The drains inside your home sit upstream of
        that lateral.
      </p>
      <p>
        Drain cleaning usually means the fixture and branch lines in your home.
        Sewer cleaning means the larger line that carries wastewater away from
        the building. Neither reaches the City main or the connection to it.
      </p>

      <h2>One drain, several drains, or water coming up</h2>
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
        If you see, smell or suspect a sewer spill or a bad sewer odor, or a
        sewer manhole looks vandalized, the City asks you to call 619-515-3525
        immediately (the City&rsquo;s number, not ours). To reach The Sewer Pros
        about a drain, call {sd.phone}.
      </p>

      <h2>
        The City&rsquo;s yearly flush is for the lateral, not your fixtures
      </h2>
      <p>
        The City names roots and cooking grease as leading causes of spills from
        public sewers and private laterals. Council Policy 400-10 makes the
        owner responsible for periodic clearing of the lateral, and for a
        lateral with a cleanout the City recommends a high-pressure flush at
        least once a year.
      </p>
      <p>
        Grease that cools in a kitchen branch line is a drain cleaning job. A
        cleanout flush is not, and it does not show what is inside the pipe.
        When a drain clogs again after it was cleared, a camera look at the
        accessible line may help show whether the restriction was fully removed.
      </p>

      <h2>
        No City help with lateral costs found, so know what cleaning does not
        fix
      </h2>
      <p>
        We did not find an active City program that gives homeowners a grant,
        reimbursement or other financial help with lateral work. That is
        &ldquo;none found&rdquo;, not a statement that none exists, so confirm
        with Public Utilities at 619-515-3500 (the City&rsquo;s number). The
        City says its program for City crews to install sewer laterals is
        currently suspended. We found no City page on whether work confined to
        private property needs a permit, so ask Development Services
        (619-446-5242, the City&rsquo;s number).
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
      title: "Buying or selling a San Diego home",
      description:
        "We found no City rule requiring a lateral inspection or seller disclosure on sale, and state disclosure law is outside this page. The City says buyers may want a licensed-plumber report on the lateral connection, as guidance and not a requirement. A buyer who sees slow drains can ask for a camera look at the accessible line, and a seller with recurring drains can document it.",
      image: slots.problems[3],
    },
  ],
  // Six items: renders as two rows of three.
  inclusions,
  process,
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
  // All relevant questions from the San Diego location page and the drain
  // cleaning page (see `faq` above).
  faq,
  relatedPageIds: [
    id("loc-sd-san-diego"),
    id("svc-drain-cleaning"),
    id("svc-sewer-cleaning"),
    id("svc-sewer-camera-inspection"),
  ],
  relatedTitle: "Related pages",
  cta: {
    title: "Request drain cleaning in San Diego",
    body: "Get a slow or clogged drain cleared, with video and written findings when a camera is used.",
  },
};
