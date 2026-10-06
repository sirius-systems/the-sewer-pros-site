/**
 * City of San Diego, CA + Recurring Sewer Backup Diagnosis (`sl-sd-city-backup`).
 *
 * Authority: CLAUDE.md §22, §24; docs/14-content-specification.md §43.
 * Shape and quality bar: `sl-lv-city-backup.tsx`.
 *
 * One local source (`sanDiegoCityContent`, the City of San Diego page) times one
 * service source (`svc-recurring-sewer-backup-diagnosis`, `v2`). Nothing here is
 * new research. The audit of every source section is in
 * `docs/source-reports/san-diego/sl-sd-city-backup.md`.
 *
 * Body recipe (each section ties a City of San Diego fact to what a diagnosis
 * does or cannot):
 *   1. Responsibility - the City's spill and odor line vs. the owner's lateral
 *      to the connection, vs. what footage can establish
 *   2. Roots, grease and the flush - the City's named causes, Council Policy
 *      400-10 and the yearly cleanout flush, vs. the named causes of a repeat
 *      backup and what cleaning does not repair
 *   3. Beyond the property line - the Plumber's Report process, who pays (not
 *      stated), and the EMRA list's slope, trees and driveway vs. what footage
 *      shows
 *   4. No City program - none found, suspended crew program, permit question,
 *      vs. "does not repair" and the second-opinion path
 *
 * ⚠ The San Diego location page publishes NO housing-age figure, so none is
 * stated here. CITY NUMBERS ARE THE CITY'S. No company phone, office, price,
 * offer, emergency claim, response time or guarantee appears in the body copy.
 * The service page's cost and same-day FAQ answers (DEC-088 wording) are carried
 * as published, per the owner's 2026-10-05 direction (DEC-139).
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
} from "./sl-blocks/recurring-sewer-backup-diagnosis";

const id = (value: string): PageId => value as PageId;

// Alt text stays neutral: no place-specific photo is claimed.
const slots = pageImageSlots("sl-sd-city-backup", {
  hero: {
    alt: "Technician at a cleanout beside a home",
    shot: "Technician at an exterior cleanout of a residential property, camera monitor in frame, nothing graphic",
  },
  problems: shots,
});

const v2 = serviceContent[id("svc-recurring-sewer-backup-diagnosis")]?.v2;
if (v2 === undefined || sanDiegoCityContent.faq === undefined) {
  throw new Error("sl-sd-city-backup: source content is missing");
}

/**
 * Every question from the City of San Diego location page and the backup
 * diagnosis service page, minus the one named here.
 */
const sanDiegoBackupFaq = mergeRelevantFaqs(
  sanDiegoCityContent.faq,
  v2.faq,
  [
    // Location page: a camera question the service page answers in full
    // ("What can a sewer camera see?").
    "What does a sewer camera inspection show?",
  ],
  "In San Diego",
);

const steps: ProcessContent[] = (v2.process?.steps ?? []).map((step) => ({
  title: step.title,
  description:
    typeof step.description === "string" ? step.description : undefined,
}));

export const sanDiegoCityBackupContent: ServiceLocationPageContent = {
  seoTitle: "Recurring Sewer Backup Diagnosis in San Diego, CA",
  metaDescription:
    "Recurring sewer backup diagnosis in San Diego, CA. The City says the lateral is yours to the City main; we found no help with costs. See what a camera shows.",
  serviceDescription:
    "Recurring sewer backup diagnosis is the process of inspecting the accessible sewer line to identify visible conditions that may cause repeated wastewater backups, for properties in the City of San Diego, California. It generally combines a camera inspection, cleaning when needed, and written findings.",
  heroImage: slots.hero,
  ctaImage: slots.cta,
  sources: sanDiegoCityContent.sources,
  hero: {
    eyebrow: "San Diego, CA",
    title: "Recurring Sewer Backup Diagnosis in San Diego",
    intro: (
      <p>
        In the City of San Diego, the City says the owner maintains the sewer
        lateral from the property all the way to its connection with the City
        sewer main, and we did not find a City program that helps owners pay for
        lateral work. When a backup keeps coming back, a diagnosis documents
        what a camera can see inside the accessible line, with cleaning first
        when something blocks the view, so you know what you are dealing with
        before you approve work.
      </p>
    ),
  },
  body: (
    <>
      <h2>A repeat backup: the City&rsquo;s spill line, or your lateral?</h2>
      <p>
        If you see, smell or suspect a sewer spill or a bad sewer odor, the City
        of San Diego asks you to call 619-515-3525 immediately (the City&rsquo;s
        number, not ours). On your side, the City&rsquo;s Public Utilities
        Department says the property owner is responsible for maintaining the
        sewer lateral all the way to its connection with the City sewer main,
        wherever that connection is.
      </p>
      <p>
        A diagnosis documents what is visible in the part of the line the camera
        reached. Those findings apply only to the segment inspected and do not
        by themselves establish responsibility, and the footage does not
        establish where the connection to the City main is.
      </p>

      <h2>
        Roots and grease are the City&rsquo;s named causes, and a flush will not
        show which
      </h2>
      <p>
        The City names roots and cooking grease as leading causes of spills from
        both public sewers and private laterals. Council Policy 400-10 says the
        owner is responsible for periodic clearing of roots and other foreign
        matter from the lateral, and for a lateral with a cleanout the City
        recommends flushing it with a high-pressure hose at least once a year.
      </p>
      <p>
        A flush does not show what is inside the pipe, so it cannot tell you why
        a backup returned. Cleaning removes roots and grease, but it does not
        repair the opening a root came through, a sag, or a damaged joint.
      </p>

      <h2>If the footage points beyond the property line</h2>
      <p>
        When a licensed plumber finds a break or collapse beyond the property
        line, the City directs the plumber to call its Sewer Emergency Line,
        619-515-3525, and file a Plumber&rsquo;s Report. The City says it will
        investigate within 24 hours. We did not find a current City statement of
        who pays for repairs beyond the property line, so we make none.
      </p>
      <p>
        The footage records where along the line a condition sits, measured from
        where the camera entered. It does not establish where a property line
        is. The City&rsquo;s design standards also name slope and trees among
        the reasons a lateral may need a special agreement. Standing water on
        video is an observation, and a camera does not measure slope.
      </p>

      <h2>No City program to pay for it, so get the evidence first</h2>
      <p>
        We did not find an active City program that gives homeowners a grant,
        reimbursement or other help with lateral costs. That is &ldquo;none
        found&rdquo;, not a statement that none exists, so confirm with Public
        Utilities at 619-515-3500 (the City&rsquo;s number). The City says its
        program for City crews to install sewer laterals is currently suspended.
      </p>
      <p>
        A diagnosis does not repair anything, and The Sewer Pros does not sell
        repair or replacement. If the footage shows a significant condition,
        further evaluation may be appropriate outside our cleaning and
        diagnostic scope. Keep the video and compare more than one written
        estimate.
      </p>
    </>
  ),
  problems: [
    ...problems.map((p, i) => ({ ...p, image: slots.problems[i] })),
    {
      title: "A spill or odor that may be the public sewer",
      description:
        "The City asks you to call 619-515-3525 immediately if you see, smell or suspect a sewer spill or bad sewer odor, or a sewer manhole looks vandalized. That is the City’s number, not ours. A diagnosis is for the lateral on your property, not the City’s sewer.",
      image: slots.problems[3],
    },
  ],
  // Six items: renders as two rows of three.
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
  // All relevant questions from the City of San Diego location page and the
  // backup diagnosis service page (see `sanDiegoBackupFaq` above).
  faq: sanDiegoBackupFaq,
  relatedPageIds: [
    id("loc-sd-san-diego"),
    id("svc-recurring-sewer-backup-diagnosis"),
    id("svc-sewer-camera-inspection"),
    id("svc-sewer-cleaning-camera-inspection"),
  ],
  relatedTitle: "Related pages",
  cta: {
    title: "Request a sewer backup diagnosis in San Diego",
    body: "Find out what a camera can document on your lateral before you approve work. Video and written findings when a camera is used.",
  },
};
