/**
 * St. Charles, MO + Recurring Sewer Backup Diagnosis (`sl-st-charles-backup`).
 *
 * Authority: CLAUDE.md §22, §24. Shape and quality bar: `sl-lv-city-backup.tsx`.
 *
 * One local source (`stCharlesContent`, the City of St. Charles page) times one
 * service source (`svc-recurring-sewer-backup-diagnosis`, `v2`). Nothing here is
 * new research. The audit of every source section is in
 * `docs/source-reports/st-louis/sl-st-charles-backup.md`.
 *
 * Body recipe (each section ties a St. Charles fact to what a diagnosis does or cannot):
 *   1. Responsibility - Sewer Division and the public system vs. the owner's
 *      foundation-to-main lateral, vs. what footage can establish
 *   2. During a backup - cable first, then Public Works; no direct backup or
 *      after-hours number found; where a diagnosis fits
 *   3. Housing age and the public system - median 1986, the named causes of a
 *      repeat backup, and the Hackmann Road manhole in the City's May 2026 report
 *   4. The City program - 90 percent / $7,500, the City's own camera, repeat
 *      claims within 12 months, vs. "does not repair" and the second-opinion path
 *
 * ⚠ ST. CHARLES RUNS ITS OWN SEWER SYSTEM. No MSD fact or number is used.
 * ⚠ CITY NUMBERS AND DOLLAR TERMS ARE THE CITY'S. No company phone, office,
 * price, offer, emergency claim, response time or guarantee appears in the body
 * copy. The service page's cost and same-day FAQ answers (DEC-088 wording) are
 * carried as published (DEC-139).
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
} from "./sl-blocks/recurring-sewer-backup-diagnosis";

const id = (value: string): PageId => value as PageId;

// Alt text stays neutral: no place-specific photo is claimed.
const slots = pageImageSlots("sl-st-charles-backup", {
  hero: {
    alt: "Technician at a cleanout beside a home",
    shot: "Technician at an exterior cleanout of a residential property, camera monitor in frame, nothing graphic",
  },
  problems: shots,
});

const v2 = serviceContent[id("svc-recurring-sewer-backup-diagnosis")]?.v2;
if (v2 === undefined || stCharlesContent.faq === undefined) {
  throw new Error("sl-st-charles-backup: source content is missing");
}

/**
 * Every question from the St. Charles location page and the backup diagnosis
 * service page, minus the one named here (reason in the source report).
 */
const stCharlesBackupFaq = mergeRelevantFaqs(
  stCharlesContent.faq,
  v2.faq,
  [
    // Location page: a camera question the service page answers in full
    // ("What can a sewer camera see?").
    "What does a sewer camera inspection show?",
  ],
  "In St. Charles",
);

const steps: ProcessContent[] = (v2.process?.steps ?? []).map((step) => ({
  title: step.title,
  description:
    typeof step.description === "string" ? step.description : undefined,
}));

export const stCharlesBackupContent: ServiceLocationPageContent = {
  seoTitle: "Recurring Sewer Backup Diagnosis in St. Charles, MO",
  metaDescription:
    "Recurring sewer backup diagnosis in St. Charles, MO. The City runs its own sewer and says to cable the lateral first. See what a camera can document.",
  serviceDescription:
    "Recurring sewer backup diagnosis is the process of inspecting the accessible sewer line to identify visible conditions that may cause repeated wastewater backups, for properties in the City of St. Charles, Missouri. It generally combines a camera inspection, cleaning when needed, and written findings.",
  heroImage: slots.hero,
  ctaImage: slots.cta,
  sources: stCharlesContent.sources,
  hero: {
    eyebrow: "St. Charles, MO",
    title: "Recurring Sewer Backup Diagnosis in St. Charles",
    intro: (
      <p>
        The City of St. Charles runs its own sewer system, and its Code
        describes the lateral as the piping from a home&rsquo;s foundation to a
        sewer main. When a backup keeps coming back, a diagnosis documents what
        a camera can see inside the accessible line, with cleaning first when
        something blocks the view, so you know what you are dealing with before
        you approve work.
      </p>
    ),
  },
  body: (
    <>
      <h2>A repeat backup: the City&rsquo;s system or your lateral?</h2>
      <p>
        The City of St. Charles runs the public sewer through its Public Works
        Sewer Division, not MSD, and says that Division can be contacted about
        sanitary sewer backups. On your side, the City Code describes the
        lateral as the piping from the foundation to a sewer main, and the owner
        arranges inspection, cleaning and repair of it. We did not find a
        published City rule on who owns the part under the street.
      </p>
      <p>
        A diagnosis documents what is visible in the part of the line the camera
        reached. Those findings apply only to the segment inspected and do not
        by themselves establish responsibility.
      </p>

      <h2>
        During a backup: cable first, then Public Works, and where a diagnosis
        fits
      </h2>
      <p>
        For sewage backing up into a home, the City says to have a plumber or
        drainlayer cable the lateral, then contact Public Works for lateral
        program instructions. The City lists (636) 949-3363 for program
        questions (the City&rsquo;s number, not ours). We did not find a direct
        Sewer Division backup number or an after-hours line.
      </p>
      <p>
        A diagnosis does not replace cabling or a call to the City. It documents
        the accessible line on your property, with cleaning first when flow or
        visibility is blocked, and it is what you bring when the City or a
        contractor points to your lateral.
      </p>

      <h2>A 1986 median year built will not explain a backup</h2>
      <p>
        St. Charles&rsquo;s median year built is 1986, according to the U.S.
        Census Bureau&rsquo;s 2024 American Community Survey 5-year estimates,
        and the City does not publish a pipe material or installation era.
        Public utility guidance names roots, grease, wipes, a sag, cracks,
        separated joints and collapse among the causes of a repeat backup. Which
        one applies to your line cannot be known without looking.
      </p>
      <p>
        The City&rsquo;s May 2026 departmental report also describes a sanitary
        manhole in a creek on Hackmann Road that it says contributes to
        surcharging and backups, and says it is planned to be relocated. We
        found no current status. That is the public system at one location, not
        your lateral.
      </p>

      <h2>
        The City program pays 90 percent of a repair, so get the evidence first
      </h2>
      <p>
        The City program reimburses 90 percent of authorized repair cost, up to
        $7,500 (the City&rsquo;s terms, not our prices), so a share stays with
        the owner. The City sends its own camera to set the repair scope, and
        its undated information sheet lists repeat claims within 12 months among
        the exclusions. We make no claim the City accepts an outside report.
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
      title: "A backup after the City says to cable first",
      description:
        "The City says to have a plumber or drainlayer cable the lateral for a backup, then contact Public Works about its program. If the backup returns, a diagnosis documents what a camera can see in the accessible line.",
      image: slots.problems[3],
    },
  ],
  // Six items: renders as two rows of three.
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
  // All relevant questions from the St. Charles location page and the backup
  // diagnosis service page (see `stCharlesBackupFaq` above).
  faq: stCharlesBackupFaq,
  relatedPageIds: [
    id("loc-stl-st-charles"),
    id("svc-recurring-sewer-backup-diagnosis"),
    id("svc-sewer-camera-inspection"),
    id("svc-sewer-cleaning-camera-inspection"),
  ],
  relatedTitle: "Related pages",
  cta: {
    title: "Request a sewer backup diagnosis in St. Charles",
    body: "Find out what a camera can document on your lateral before you approve work. Video and written findings when a camera is used.",
  },
};
