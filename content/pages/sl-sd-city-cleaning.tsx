/**
 * City of San Diego, CA + Sewer Cleaning (`sl-sd-city-cleaning`).
 *
 * Authority: CLAUDE.md §9, §22, §24; docs/14-content-specification.md §43, §79.
 * Same recipe as `sl-lv-city-cleaning`. One local source (`sanDiegoCityContent`)
 * x one service source (`svc-sewer-cleaning` v2). Nothing here is new research.
 *
 * Section recipe (each section ties a City of San Diego fact to what cleaning does):
 *   1. Maintenance - Council Policy 400-10 (owner clears roots), the City's
 *      grease/roots statement, and a cleanout flush is not an inspection
 *   2. Where the line ends - owner maintains to the City main, even in a street,
 *      easement or canyon; our cleaning is private-property lines only
 *   3. Break beyond the property line - Plumber's Report process (the City's),
 *      "none found" help with costs, cleaning is not repair
 *   4. Nonstandard laterals and permits - EMRA list (slope, depth, trees), no
 *      City statement found on permits for private-property work
 *
 * The City of San Diego location page has no housing-age section (no Census
 * figures supplied), so none is used here.
 *
 * ⚠ CITY NUMBERS ARE THE CITY'S. The company phone and founding year come from
 * `marketOperatingDetail['san-diego-ca']`. No price, offer, response time,
 * emergency or same-day claim, guarantee or equipment spec appears. Equipment
 * names appear only inside the process steps lifted from the service page.
 */

import { marketOperatingDetail } from "@/data/markets/markets";
import type { PageId, ServiceLocationPageContent } from "@/types";
import { sanDiegoCityContent } from "./san-diego-city";
import { serviceContent } from "./services";
import {
  SERVICE_INCLUSIONS,
  SERVICE_PROBLEMS,
  SERVICE_PROBLEM_SHOTS,
  mergeRelevantFaqs,
  pageImageSlots,
} from "./service-location-shared";

const id = (value: string): PageId => value as PageId;

const sd = marketOperatingDetail["san-diego-ca"];
if (sd === undefined)
  throw new Error("marketOperatingDetail is missing san-diego-ca");

const problems = SERVICE_PROBLEMS["svc-sewer-cleaning"];
const inclusions = SERVICE_INCLUSIONS["svc-sewer-cleaning"];
const shots = SERVICE_PROBLEM_SHOTS["svc-sewer-cleaning"];
if (problems === undefined || inclusions === undefined || shots === undefined) {
  throw new Error(
    "sl-sd-city-cleaning: shared sewer cleaning blocks are missing",
  );
}

const v2 = serviceContent[id("svc-sewer-cleaning")]?.v2;
if (v2 === undefined || sanDiegoCityContent.faq === undefined) {
  throw new Error(
    "sl-sd-city-cleaning: source service v2 or location FAQ is missing",
  );
}

const slots = pageImageSlots("sl-sd-city-cleaning", {
  hero: {
    alt: "Technician setting up sewer cleaning equipment at a cleanout beside a home",
    shot: "Technician with a cleaning machine and cable or hose at a residential cleanout, no identifiable address",
  },
  problems: [shots[0], shots[1], shots[2], shots[3]] as const,
});

/**
 * Every question from the City of San Diego location page and the sewer
 * cleaning service page. Nothing is skipped: the location page's camera
 * question is relevant to a cleaning page (the service page asks about camera
 * use), and the service page's cost question (DEC-088 wording) is carried as
 * published, as on the Las Vegas cleaning page.
 */
const faq = mergeRelevantFaqs(
  sanDiegoCityContent.faq,
  v2.faq,
  [],
  "In San Diego",
);

export const sanDiegoCityCleaningContent: ServiceLocationPageContent = {
  seoTitle: "Sewer Cleaning in San Diego, CA",
  metaDescription:
    "Sewer cleaning in San Diego, CA. The City says owners maintain the lateral all the way to its main. See what cleaning does and what it does not.",
  serviceDescription:
    "Sewer cleaning is the removal of grease, roots, deposits, debris, and other material that restricts flow in an accessible private sewer line, for properties in the City of San Diego, California.",
  heroImage: slots.hero,
  ctaImage: slots.cta,
  sources: sanDiegoCityContent.sources,
  hero: {
    eyebrow: "San Diego, CA",
    title: "Sewer Cleaning in San Diego",
    intro: (
      <p>
        In the City of San Diego, the City says the property owner maintains the
        sewer lateral all the way to its connection with the City sewer main,
        and Council Policy 400-10 puts periodic clearing of roots and other
        foreign matter on the owner. Sewer cleaning removes that buildup from
        the accessible private line. It clears the pipe. It does not repair it.
      </p>
    ),
  },
  body: (
    <>
      <h2>The City names roots and grease, and puts the clearing on you</h2>
      <p>
        The City of San Diego names roots and cooking grease as leading causes
        of spills from both public sewers and private laterals. Council Policy
        400-10 says the owner is responsible for periodic clearing of roots and
        other foreign matter from the lateral. Sewer cleaning is that
        maintenance: hydraulic or mechanical equipment, chosen for the line,
        removes the grease, roots, deposits or debris that restrict flow.
      </p>
      <p>
        For a lateral with a cleanout, the City recommends flushing the cleanout
        with a high-pressure hose at least once a year, and says that is not an
        inspection. A flush does not show what is inside the pipe.
      </p>

      <h2>The City says your lateral runs to its main, even in a canyon</h2>
      <p>
        The City says the owner maintains the lateral to its connection with the
        City sewer main, and that connection can be in the street, in an
        easement or in a canyon. Our cleaning covers accessible private-property
        sewer and drain lines, not City mains, and it does not show where the
        connection is or which side of it a blockage sits on.
      </p>
      <p>
        For where a lateral connects, the City says Development Services offers
        a maps and records review at 619-446-5300 (the City&rsquo;s number, not
        ours). For a sewer spill or a bad sewer odor, the City asks you to call
        619-515-3525 (also the City&rsquo;s number).
      </p>

      <h2>When a break is past the property line, cleaning does not fix it</h2>
      <p>
        When a licensed plumber finds a break or collapse beyond the property
        line, the City&rsquo;s process runs through the plumber&rsquo;s call and
        a Plumber&rsquo;s Report. Cleaning does not repair a cracked, offset,
        separated or collapsed pipe, and The Sewer Pros does not perform repairs
        or replacements.
      </p>
      <p>
        We did not find an active City program that gives homeowners a grant,
        reimbursement or other help with lateral costs on the City pages we
        reviewed. That is &ldquo;none found&rdquo;, not a statement that none
        exists, so confirm with Public Utilities. Clearing a clog removes the
        obstruction, not necessarily its cause.
      </p>

      <h2>Nonstandard laterals and the permit question</h2>
      <p>
        The City requires an Encroachment Maintenance Removal Agreement for
        certain nonstandard laterals, including ones that connect in an
        easement, enter the main at an angle, run close to trees or have unusual
        slope or depth. That is a City design rule, not a finding about your
        line, and cleaning does not measure slope or depth.
      </p>
      <p>
        We found no City page on whether work confined to private property needs
        a permit, so ask Development Services at 619-446-5242 (the City&rsquo;s
        number). To talk through cleaning a line on your side of the connection,
        call The Sewer Pros at {sd.phone}. We have served San Diego since{" "}
        {sd.foundingYear}. If sewage is actively backing up into your home,
        contact us to discuss the situation.
      </p>
    </>
  ),
  problems: [
    ...problems.map((p, i) => ({ ...p, image: slots.problems[i] })),
    {
      title: "A lateral that runs to the City main",
      description:
        "The City says the owner maintains the lateral all the way to its connection with the City main, even in the street, an easement or a canyon. Our cleaning covers accessible private lines, not City mains. For a spill or odor, the City asks you to call 619-515-3525 (the City’s number).",
      image: slots.problems[3],
    },
  ],
  inclusions,
  process: (v2.process?.steps ?? []).map((step) => ({
    title: step.title,
    description:
      typeof step.description === "string" ? step.description : undefined,
  })),
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
  // Every relevant question from the City of San Diego location page and the
  // sewer cleaning service page (see `faq` above).
  faq,
  relatedPageIds: [
    id("loc-sd-san-diego"),
    id("svc-sewer-cleaning"),
    id("svc-hydro-jetting"),
    id("svc-sewer-cleaning-camera-inspection"),
  ],
  relatedTitle: "Related pages",
  cta: {
    title: "Request sewer cleaning in San Diego",
    body: "Have the line you maintain cleaned, and ask whether a camera look before or after is included.",
  },
};
