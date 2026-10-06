/**
 * Chesterfield, MO + Sewer Cleaning (`sl-chesterfield-cleaning`).
 *
 * Authority: CLAUDE.md §9, §22, §24; same recipe as `sl-lv-city-cleaning`.
 * One local source (`chesterfieldContent`) x one service source
 * (`svc-sewer-cleaning` v2). Nothing here is new research.
 *
 * Section recipe (each section ties a Chesterfield fact to what cleaning does):
 *   1. Responsibility - MSD maintains the main; the lateral and its connection
 *      are the owner's; the City's lateral definition; cleaning is private
 *      lines only and does not show the connection
 *   2. The City program - cabling first (not reimbursed), roots in bells and
 *      joints as routine maintenance, severe blockage as a defect; whether our
 *      cleaning counts in place of cabling is unconfirmed, so ask Public Works
 *   3. Housing age - newer homes, bellies and joints, "cleaning removes the
 *      obstruction, not necessarily the cause" (no figures; PENDING-015)
 *   4. MSD and where cleaning fits - MSD backup line (MSD's), Conway Meadows
 *      is public sewer, the company phone, no repairs
 *
 * ⚠ MSD AND CITY NUMBERS AND TERMS ARE THEIRS, not ours. The company phone is
 * read from `marketOperatingDetail['st-louis-mo']`. The 85.6 percent, 1982 and
 * 1.4 percent housing figures are NOT used (PENDING-015). No price, offer,
 * response time, emergency or same-day claim, guarantee, licence claim or
 * equipment spec appears. Equipment names appear only inside the process steps
 * lifted from the service page. Repair and replacement are never offered.
 *
 * Audit: docs/source-reports/st-louis/sl-chesterfield-cleaning.md
 */

import { marketOperatingDetail } from "@/data/markets/markets";
import type { PageId, ServiceLocationPageContent } from "@/types";
import { serviceContent } from "./services";
import { chesterfieldContent } from "./st-louis-chesterfield";
import {
  SERVICE_INCLUSIONS,
  SERVICE_PROBLEMS,
  SERVICE_PROBLEM_SHOTS,
  mergeRelevantFaqs,
  pageImageSlots,
} from "./service-location-shared";

const id = (value: string): PageId => value as PageId;

const stl = marketOperatingDetail["st-louis-mo"];
if (stl === undefined)
  throw new Error("marketOperatingDetail is missing st-louis-mo");

const problems = SERVICE_PROBLEMS["svc-sewer-cleaning"];
const inclusions = SERVICE_INCLUSIONS["svc-sewer-cleaning"];
const shots = SERVICE_PROBLEM_SHOTS["svc-sewer-cleaning"];
if (problems === undefined || inclusions === undefined || shots === undefined) {
  throw new Error(
    "sl-chesterfield-cleaning: shared sewer cleaning blocks are missing",
  );
}

const v2 = serviceContent[id("svc-sewer-cleaning")]?.v2;
if (v2 === undefined || chesterfieldContent.faq === undefined) {
  throw new Error(
    "sl-chesterfield-cleaning: source service v2 or location FAQ is missing",
  );
}

const slots = pageImageSlots("sl-chesterfield-cleaning", {
  hero: {
    alt: "Technician at a cleanout beside a home",
    shot: "Technician with a cleaning machine and cable or hose at a residential cleanout, no identifiable address",
  },
  problems: [shots[0], shots[1], shots[2], shots[3]] as const,
});

/**
 * Every question from the Chesterfield location page and the sewer cleaning
 * service page. Nothing is skipped. The service page's time-and-cost question
 * is carried as published (no price, no standard time).
 */
const faq = mergeRelevantFaqs(
  chesterfieldContent.faq,
  v2.faq,
  [],
  "In Chesterfield",
);

export const chesterfieldCleaningContent: ServiceLocationPageContent = {
  seoTitle: "Sewer Cleaning in Chesterfield, MO",
  metaDescription:
    "Sewer cleaning in Chesterfield, MO. MSD says the lateral is the owner’s, and the City treats cabling and roots as maintenance. See what cleaning does.",
  serviceDescription:
    "Sewer cleaning is the removal of grease, roots, deposits, debris, and other material that restricts flow in an accessible private sewer line, for properties in Chesterfield, Missouri. It clears the pipe and does not repair it.",
  heroImage: slots.hero,
  ctaImage: slots.cta,
  sources: chesterfieldContent.sources,
  hero: {
    eyebrow: "Chesterfield, MO",
    title: "Sewer Cleaning in Chesterfield",
    intro: (
      <p>
        In Chesterfield, MSD says the lateral from your building to its public
        sewer main is private and the owner maintains it, and the City&rsquo;s
        lateral program treats cabling and routine root removal as maintenance.
        Sewer cleaning is that maintenance: it removes grease, roots, debris and
        other buildup from the accessible private line. It clears the pipe. It
        does not repair it.
      </p>
    ),
  },
  body: (
    <>
      <h2>
        Your lateral, from the foundation to MSD&rsquo;s main, is yours to
        maintain
      </h2>
      <p>
        For a property on the Metropolitan St. Louis Sewer District (MSD)
        system, MSD maintains the public sewer main and says the lateral that
        connects your building to it, including its connection, is private
        property that the owner maintains and repairs. Chesterfield&rsquo;s
        lateral program defines that lateral as running from three to five feet
        outside the foundation or exterior wall to the main in the street or a
        sewer easement.
      </p>
      <p>
        Our cleaning covers accessible private-property lines, not public mains,
        and it does not show where the connection sits. Which utility serves an
        address near a service boundary or on a septic system should be
        confirmed by address. We found no published rule on who owns the part
        under the street, so confirm with MSD or the City.
      </p>

      <h2>How the City&rsquo;s program treats cleaning: as maintenance</h2>
      <p>
        Chesterfield&rsquo;s program has the owner start with cabling by a
        licensed plumbing company or licensed drainlayer, and the City does not
        reimburse that step. It calls roots growing through pipe bells and
        joints routine maintenance when removing them lets the line work. A
        severe blockage that cannot be cabled out can meet the City&rsquo;s
        definition of a defective lateral.
      </p>
      <p>
        Sewer cleaning removes the roots, grease and debris it can reach. It
        does not seal the joint the roots entered through. We have not confirmed
        whether the City accepts our cleaning in place of its cabling step, so
        ask Public Works at (636) 537-4762 (the City&rsquo;s number, not ours)
        before assuming it does.
      </p>

      <h2>Newer homes, so a clog that returns may not be buildup</h2>
      <p>
        Most Chesterfield homes are newer than the typical St. Louis-area house,
        and pipe from that era is more often PVC than clay, cast iron or
        bituminized fiber. Ground movement does not wait for a pipe to age: a
        belly can hold water and settle solids, and a joint can open, whatever
        the pipe is made of.
      </p>
      <p>
        When a clog returns, cleaning removes the obstruction, not necessarily
        what is causing it, and a line that flows again is not proof the pipe is
        sound. A camera can help show which.
      </p>

      <h2>MSD, Public Works, and where cleaning fits</h2>
      <p>
        For a building backup, MSD asks you to call (314) 768-6260 (MSD&rsquo;s
        number, not ours) so it can inspect and determine whether the situation
        qualifies for its limited assistance program, and it treats raw sewage
        inside or outside a home as urgent. MSD&rsquo;s Conway Meadows Sanitary
        Relief project, which MSD says is designed to replace about 1,400 feet
        of undersized public sewer, concerns the public sewer, not your lateral.
      </p>
      <p>
        If MSD or a plumber points to your lateral, call The Sewer Pros at{" "}
        {stl.phone} to talk through cleaning it. The Sewer Pros does not perform
        repairs or replacements.
      </p>
    </>
  ),
  problems: [
    ...problems.map((p, i) => ({ ...p, image: slots.problems[i] })),
    {
      title: "Buying or selling a Chesterfield home",
      description:
        "We found no sewer-lateral inspection requirement for an ordinary residential sale in the City materials we reviewed. That is none found, not a confirmed absence. The City’s program policy says the seller must be the one to apply during a real estate transaction, so a seller with a returning clog should ask Public Works how that fits the timeline.",
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
  // Every question from the Chesterfield location page and the sewer cleaning
  // service page (see `faq` above).
  faq,
  relatedPageIds: [
    id("loc-stl-chesterfield"),
    id("svc-sewer-cleaning"),
    id("svc-hydro-jetting"),
    id("svc-sewer-cleaning-camera-inspection"),
  ],
  relatedTitle: "Related pages",
  cta: {
    title: "Request sewer cleaning in Chesterfield",
    body: "Have the line you maintain cleaned, and ask whether a camera look before or after is included.",
  },
};
