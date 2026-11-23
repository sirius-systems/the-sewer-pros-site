/**
 * Home, hub, core, and resource page content.
 *
 * Authority: docs/14-content-specification.md §16-17
 *            docs/18-design-system.md §110, §118
 *            docs/01-business-brand-foundation.md §3, §35
 *
 * `/contact/` lists St. Louis and San Diego SEPARATELY. They publish
 * different numbers, different hours, and different founding years
 * (DEC-070, DEC-071), and 01 §20 forbids copying business facts between
 * markets — a single merged block would be wrong, not merely tidy.
 *
 * Still no street address and no form: none is published for any market
 * (15 §11), and PENDING-008 leaves form fields undecided.
 *
 * `/about/` moved to its own content module, `./about.tsx`, and its own
 * template, `AboutPageTemplate` — see that file for its content and the
 * scoping note on its St. Louis-attributed stat.
 */


import { ApprovedInlineLink } from '@/components/links/ApprovedInlineLink'
import { editorialImage } from '@/data/business/editorial-images'
import {
  homeServiceCards,
  approvedServicesIntro,
} from './home-service-cards'
import type {
  CorePageContent,
  HomePageContent,
  HubPageContent,
  MarketGuidanceContent,
  PageId,
  ResourcePageContent,
} from '@/types'

const id = (value: string): PageId => value as PageId

/* ==========================================================================
   Home — 18 §110, §38
   ========================================================================== */

export const homeContent: HomePageContent = {
  hero: {
    eyebrow: 'Independent sewer inspection and cleaning',
    title: 'Independent sewer inspection and cleaning.',
    intro: (
      <p>
        Sewer camera inspection, diagnostics, locating, and cleaning:
        documented evidence of the line&rsquo;s condition, so you can decide
        the next step with confidence.
      </p>
    ),
  },
  seoTitle: 'Independent Sewer Inspection and Cleaning | The Sewer Pros',
  metaDescription:
    "Independent sewer inspection and cleaning in St. Louis, San Diego and Las Vegas. Get inspection video and written findings before you decide on sewer work.",
  /*
    ⚠ `homeServiceCards`, NOT `coreServiceCards`, AS OF 2026-09-22.

    This page's grid was given its own heading ("Sewer Inspection,
    Diagnostics & Cleaning Services") and its own nine cards, moving
    to an equal-size 3x3 grid rather than the
    flagship mosaic. `coreServiceCards` stays exactly as it was for the
    three market hubs and `/services/`, which still render the
    flagship-mosaic nine — see `content/pages/home-service-cards.ts` for
    why the two lists must stay separate.
  */
  services: homeServiceCards,
  /*
    ⚠ THE NAMED DESTINATIONS LIVE IN `links`, NOT IN `description`.

    They were inline `ApprovedInlineLink`s inside the paragraph for one
    day (2026-09-04) and the owner asked for them pulled out into a
    scannable list the same day. `description` is plain text now.

    Do not reintroduce a link inside a description: the same
    destination would then carry two competing affordances in one card,
    and the list is the one a reader scans.

    Every `pageId` below still resolves through the approved registry at
    render, so a gated or unauthored page fails there rather than
    shipping a dead link (16 §25, CLAUDE.md §37, §51).
  */
  routing: [
    {
      pageId: id('hub-services'),
      category: 'Explore services',
      icon: 'search-check',
      accent: 'blue',
      description:
        'Sewer camera inspection, cleaning, hydro jetting, and line locating, so you find the right fit for what\u2019s happening in your line. See the evidence before committing to any work.',
      linksHeading: 'Popular services',
      links: [
        {
          pageId: id('svc-sewer-camera-inspection'),
          label: 'Sewer Camera Inspection',
        },
        { pageId: id('svc-sewer-cleaning'), label: 'Sewer Cleaning' },
        { pageId: id('svc-hydro-jetting'), label: 'Hydro Jetting' },
        { pageId: id('svc-sewer-line-locating'), label: 'Sewer Line Locating' },
      ],
      secondaryLink: {
        pageId: id('hub-services'),
        label: 'Explore All Services',
      },
    },
    {
      pageId: id('hub-locations'),
      category: 'Check coverage',
      icon: 'map-pinned',
      accent: 'green',
      /*
        ⚠ "We serve" is a SERVICE-AREA statement, not an office claim.
        CLAUDE.md §11 draws that line and 18 §87 wants it visually
        explicit. No address, no branch, no "our location" anywhere in
        this card or the pages it links to.
      */
      description:
        'We serve St. Louis, San Diego, and Las Vegas. Check coverage in your area so you know upfront whether service is available before you schedule.',
      linksHeading: 'Service areas',
      links: [
        { pageId: id('market-st-louis-mo'), label: 'St. Louis' },
        { pageId: id('market-san-diego-ca'), label: 'San Diego' },
        { pageId: id('market-las-vegas-nv'), label: 'Las Vegas' },
      ],
      secondaryLink: {
        pageId: id('hub-locations'),
        label: 'Check Service Areas',
      },
    },
    {
      pageId: id('aud-property-managers'),
      category: 'Property solutions',
      icon: 'building-2',
      accent: 'navy',
      description:
        'Sewer inspection, cleaning, and hydro jetting for rental homes, multifamily residential properties, and property managers. Recurring backups and drainage issues start with an inspection.',
      linksHeading: 'Services for property managers',
      links: [
        { pageId: id('svc-sewer-camera-inspection'), label: 'Sewer Camera Inspection' },
        { pageId: id('svc-sewer-cleaning'), label: 'Sewer Cleaning' },
        { pageId: id('svc-hydro-jetting'), label: 'Hydro Jetting' },
      ],
      secondaryLink: {
        pageId: id('aud-property-managers'),
        label: 'Explore Property Manager Services',
      },
    },
    {
      pageId: id('core-contact'),
      category: 'Talk with us',
      icon: 'message-square-text',
      accent: 'green',
      description:
        'Reach out to schedule a sewer inspection or ask about a problem you\u2019re already seeing. Get a straight answer before you commit to bigger work.',
      /*
        No `links` and no `linksHeading`: there is nothing to enumerate
        under "contact us", and the render skips the whole block rather
        than putting a heading over an empty list (18 §120).

        It shows the per-market phone and email block instead
        (owner, 2026-09-04). ⚠ The details are NOT here - they are read
        from `marketOperatingDetail`, so DEC-097's San Diego email
        change reaches this card for free rather than needing a second
        edit. See the flag's note in `RoutingContent`.
      */
      showMarketContacts: true,
      secondaryLink: {
        pageId: id('core-contact'),
        label: 'Contact The Sewer Pros',
      },
    },
  ],
  routingBackground: {
    src: '/images/homepage/differentiator/the-sewer-pros-multifamily-properties.webp',
    alt: 'Exterior of a multifamily building and its parking area',
    source:
      'Supplied by the business owner, 2026-09-04. Rendered scene, not a photograph of a Sewer Pros job.',
  },
  /*
    ⚠ THIS BACKS `AuthorityBand`'s PROCESS BAND NOW, NOT `ProcessSteps`.

    The "How it works" section it was written for was removed on owner
    direction (2026-09-04) and its frame moved to "How our sewer
    inspection process works", which is the page's process section from
    here on. The field name still reads correctly; the section it
    points at changed.

    `homeContent.process` went with that section rather than sitting
    here unread - the three Inspect / Understand / Decide steps are in
    git if they are wanted back.
  */
  processBackground: {
    src: '/images/homepage/differentiator/the-sewer-pros-st-louis-residential-property-exterior.webp',
    alt: 'Street view of a brick two-story house on a tree-lined block',
    source:
      'Supplied by the business owner, 2026-09-04. Rendered scene, not a photograph of a Sewer Pros job.',
  },
  faq: [
    {
      question: 'What does a sewer camera inspection show?',
      answer: (
        <p>
          Visible conditions inside the accessible line: blockages, root
          intrusion, separated joints, cracks, offsets, standing water, and
          debris. It cannot guarantee detection of every hidden defect.
        </p>
      ),
    },
    {
      question: 'What is independent sewer inspection and cleaning?',
      answer: (
        <p>
          It means The Sewer Pros inspects, documents, and cleans sewer and
          drain lines, and does not perform sewer repair or replacement, so the
          findings are not attached to a repair sale. When a camera is used, you
          receive the inspection video, and written findings are included.
        </p>
      ),
    },
    {
      question: 'Do you do sewer repairs?',
      answer: (
        <p>
          No. We inspect, diagnose, locate, and clean. Where findings suggest
          work beyond cleaning, that is a conversation about the evidence,
          including having a qualified repair contractor review it.
        </p>
      ),
    },
    {
      question: 'My drain is slow. Does that mean the sewer line is damaged?',
      answer: (
        <p>
          Not necessarily. One slow fixture is often a local branch issue.
          Several fixtures draining slowly, or repeated backups, is more reason
          to look at the main line.
        </p>
      ),
    },
    {
      question: 'How much does a sewer inspection cost?',
      answer: (
        <p>
          Cost depends on the length and accessibility of the line, whether a
          cleanout is available, and the market you&rsquo;re in. We don&rsquo;t
          publish a flat rate because those factors vary by property. Contact us
          for an estimate specific to your line.
        </p>
      ),
    },
    {
      question: 'Do you serve my area?',
      answer: (
        <p>
          We work across the St. Louis, San Diego, and Las Vegas metro areas as
          a service-area business: we travel to you rather than operating from a
          public storefront. Check our locations page for specific coverage.
        </p>
      ),
    },
    {
      question: 'What is the difference between an inspection and cleaning?',
      answer: (
        <p>
          An inspection documents the condition of the line with a camera.
          Cleaning removes what has accumulated inside it. They are often done
          together, but they answer different questions: inspection tells you
          what is wrong, cleaning restores flow.
        </p>
      ),
    },
    {
      question: 'Should I get a sewer inspection before buying a house?',
      answer: (
        <p>
          A sewer camera inspection before closing can reveal blockages, root intrusion, or pipe damage in the accessible line. Ask your home inspector what their inspection covers. A sewer scope is a separate, focused inspection of the sewer line. The Sewer Pros provides independent camera inspections for
          home buyers, with recorded video to support your decision.
        </p>
      ),
    },
    {
      question: 'What is a sewer scope, and is it the same as a camera inspection?',
      answer: (
        <p>
          A sewer scope is a video camera inspection of the sewer line,
          performed by pushing a specialized camera through the pipe. The terms
          are used interchangeably in the industry, and The Sewer Pros uses the
          same camera equipment and reporting for both.
        </p>
      ),
    },
    {
      question: 'Should I get a second opinion before agreeing to a sewer replacement?',
      answer: (
        <p>
          A{' '}
          <ApprovedInlineLink pageId={id('svc-independent-sewer-second-opinion')}>
            second opinion
          </ApprovedInlineLink>{' '}
          can start with the report or video you already have.
          The Sewer Pros reviews another company&rsquo;s inspection findings and
          tells you whether we agree, disagree, or cannot tell from the
          footage, and can follow with an independent camera inspection if the
          footage is unclear. We do not perform repairs or replacements, so we
          have no incentive to sell either.
        </p>
      ),
    },
    {
      question: 'What causes recurring sewer backups?',
      answer: (
        <p>
          Recurring backups are often caused by root intrusion, grease buildup,
          a pipe offset, or a partial blockage that returns after snaking. A
          camera inspection identifies the specific cause so the right next
          step, whether cleaning, {'{{hydro jetting|water jetting|sewer jetting}}'}, or further diagnosis, can be
          chosen.
        </p>
      ),
    },
    {
      question: 'What does sewer line locating involve, and when is it needed?',
      answer: (
        <p>
          Sewer line locating uses specialized equipment to trace the exact path
          and depth of an underground sewer line. It is typically needed before
          excavation or construction, or when a line&rsquo;s location is
          undocumented.
        </p>
      ),
    },
    {
      question: 'Is hydro jetting different from regular drain cleaning?',
      answer: (
        <p>
          Yes, they use different tools. {'{{Hydro jetting|Water jetting|Sewer jetting}}'} sends pressurized water
          through a hose and nozzle to loosen buildup and flush it out of an
          accessible line. Cable cleaning uses a rotating cable to break
          through a blockage. Neither is better in every case. The right
          choice depends on the line and what is in it, and a camera
          inspection can show what is in the line first.
        </p>
      ),
    },
    {
      /*
        Answer text is the canonical DEC-088 wording. The same-day half
        is reused from the `/services/` FAQ answer to the same question
        (see hubContent, hub-services) so the two pages state one thing,
        not two; the free-second-opinion sentence is verbatim from
        `verifiedOffers` in data/business/offers.ts.

        ⚠ Same-day wording is load-bearing. DEC-088 approved
        availability, never a promise: published hours are Monday to
        Friday, 8:00am–4:00pm (DEC-083), which rule out a guarantee,
        weekend coverage, and any emergency or 24/7 claim. Keep
        "sometimes" and "cannot promise"; do not tighten this into an
        offer. Changing it here without changing `/services/` puts the
        two pages back into contradiction.
      */
      // TODO: A stronger, unconditional version of this answer may be used only if the client confirms a standing, always-available same-day/free-second-opinion policy that does not vary by market or season. Do not change this answer without that explicit confirmation.
      question: 'Do you offer a free second opinion or same-day appointments?',
      answer: (
        <>
          <p>
            Ask about a free second opinion before scheduling a sewer inspection or
            cleaning. Same-day is sometimes possible, but never guaranteed. We
            operate Monday through Friday, 8:00am to 4:00pm, and are closed
            weekends. We do not offer 24/7 or emergency service.
          </p>
          <p>
            Within those hours, a same-day appointment can sometimes be
            arranged, depending on how the day is already booked. It is worth
            asking when you get in touch, but we cannot promise it in advance.
          </p>
        </>
      ),
    },
  ],
  relatedPageIds: [
    id('res-camera-report'),
    id('res-read-video'),
    id('cmp-hydro-vs-snaking'),
  ],
  /*
    ⚠ THESE THREE LIVE ON THE HOME PAGE, NOT ON THE SEWER CAMERA
    INSPECTION SERVICE PAGE.

    The brief asked for them under `svc-sewer-camera-inspection` in
    services.tsx. That entry's `relatedPageIds` are three SERVICES —
    sewer-cleaning-camera-inspection, pre-purchase, line-locating —
    under the heading "Related services". `res-camera-report`,
    `res-read-video` and `cmp-hydro-vs-snaking` are this page's list,
    under "Guides and resources", which is the heading and the exact
    three cards the brief described.

    Put on the service page they would have rendered NOTHING:
    `RelatedLinks` looks descriptions up by the ids it is rendering,
    so keys for pages that page does not link to are never read.
  */
  relatedDescriptions: {
    [id('res-camera-report')]:
      'What a complete report should include, so you can compare quotes or revisit the findings later.',
    [id('res-read-video')]:
      'How to read root intrusion, cracks, and other defects on your own inspection video.',
    [id('cmp-hydro-vs-snaking')]:
      'When high-pressure hydro jetting is the right call, and when mechanical snaking is enough.',
  },
  relatedTitle: 'Sewer Inspection Guides and Resources',
  relatedEyebrow: 'Learn before you decide',
  relatedIntro:
    'Learn what sewer camera footage can show, what an inspection report should include, and how different sewer cleaning methods compare.',
  relatedFeaturedPageId: id('res-camera-report'),
  relatedFeaturedPoints: [
    'What should be documented',
    'What evidence you should receive',
    'How to compare findings later',
  ],
  relatedMeta: {
    [id('res-camera-report')]: {
      category: 'Inspection guide',
      icon: 'clipboard-list',
      accent: 'navy',
    },
    [id('res-read-video')]: {
      category: 'Video explainer',
      icon: 'file-video',
      accent: 'blue',
    },
    [id('cmp-hydro-vs-snaking')]: {
      category: 'Service comparison',
      icon: 'scale',
      accent: 'green',
    },
  },
  relatedViewAllPageId: id('hub-resources'),
  faqEyebrow: 'Need a quick answer?',
  /*
    ⚠ FIVE INLINE LINKS AT THE CONVERSION POINT, AND THEY ARE ALL
    REPEATS. Every one of these five pages is already linked earlier on
    this page - the markets and both services in the routing cards, and
    both services again in the process band. So this is neither a first
    occurrence nor a new route out; it is a fifth and sixth link to the
    same destinations, placed beside the form that is the page's actual
    conversion.

    Owner-supplied copy, transcribed as given (2026-09-04), and shipped
    as written. Flagged rather than trimmed: dropping the markup would
    change the owner's content, and 17's conversion architecture is the
    owner's call to make, not a component's.
  */
  cta: {
    eyebrow: 'Evidence before expensive decisions',
    title: 'Schedule a sewer camera inspection.',
    body: (
      <>
        <p>
          Schedule a sewer camera inspection when you are dealing with
          recurring sewer backups, slow drains, unexplained blockages, or
          concerns about a property you plan to purchase. A professional sewer
          scope provides video evidence of visible conditions inside accessible
          portions of the line, including buildup, root intrusion, offset
          joints, standing water, cracks, and other possible problem areas.
        </p>
        <p>
          The Sewer Pros provides sewer inspection and diagnostic services
          across the{' '}
          <ApprovedInlineLink pageId={id('market-st-louis-mo')}>
            St. Louis
          </ApprovedInlineLink>
          ,{' '}
          <ApprovedInlineLink pageId={id('market-san-diego-ca')}>
            San Diego
          </ApprovedInlineLink>
          , and{' '}
          <ApprovedInlineLink pageId={id('market-las-vegas-nv')}>
            Las Vegas
          </ApprovedInlineLink>{' '}
          service areas. We document what the camera shows and explain the
          findings in plain language, helping you decide whether the evidence
          supports{' '}
          <ApprovedInlineLink pageId={id('svc-sewer-cleaning')}>
            sewer cleaning
          </ApprovedInlineLink>
          ,{' '}
          <ApprovedInlineLink pageId={id('svc-hydro-jetting')}>
            hydro jetting
          </ApprovedInlineLink>
          , monitoring, or further evaluation by a separate repair provider.
        </p>
        {/*
          Hyphen markers, `aria-hidden`, the same treatment the sewer
          camera inspection hero and the featured guide card use.
          Tailwind's preflight strips list markers, so a bare `<ul>`
          would render three unmarked lines reading as a stray
          paragraph.
        */}
        <ul className="flex flex-col gap-2">
          {[
            'See the visible condition of the line on video',
            'Receive documented findings you can review',
            'Choose your next step without a repair sale',
          ].map((point) => (
            <li key={point} className="flex gap-2">
              <span aria-hidden="true" className="opacity-70">
                -
              </span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </>
    ),
  },
  ctaBackground: {
    src: '/images/homepage/differentiator/the-sewer-pros-schedule-sewer-inspection-home-exterior.webp',
    alt: 'Side of a house and its driveway on a clear day',
    source:
      'Supplied by the business owner, 2026-09-04. Rendered scene, not a photograph of a Sewer Pros job.',
  },
}

/* ==========================================================================
   Hubs
   ========================================================================== */

/**
 * `/services/`'s member list.
 *
 * ⚠ `homeServiceCards`, NOT A FAMILY-GROUPED REORDER OF
 * `coreServiceCards` (owner direction, 2026-09-23). This page used to
 * reorder the nine services into inspection/cleaning/locating groups
 * under its own heading, one of five different presentations of the
 * same nine-service list across the site. It now renders the approved
 * section unmodified — see `content/pages/home-service-cards.ts` and
 * this page's `items`/`itemsTitle`/`itemsVariant` below and in
 * `app/services/page.tsx`.
 */

/**
 * The five closing answers `/services/` shares with the home page.
 *
 * ⚠ PULLED BY QUESTION TEXT FROM `homeContent.faq`, NOT RETYPED. Same
 * reason as the service cards above: two hand-maintained copies of one
 * answer is exactly the drift `service-cards.ts` was created to end,
 * and the repair-boundary answer is the highest-risk string on this
 * page. If the home page rewords one of these, this page reads the new
 * wording rather than quietly keeping the old one.
 *
 * ⚠ THE QUESTIONS ARE THE HOME PAGE'S, NOT PROMPT 04'S PARAPHRASES.
 * The draft quotes the first as "Do you offer sewer repair?"; the
 * source says "Do you do sewer repairs?". Verbatim reuse means the
 * question travels with its answer.
 */
const REUSED_HOME_FAQ: readonly string[] = [
  'Do you do sewer repairs?',
  'What is the difference between an inspection and cleaning?',
  'Should I get a second opinion before agreeing to a sewer replacement?',
  'What causes recurring sewer backups?',
  'Is hydro jetting different from regular drain cleaning?',
]

const reusedHomeFaq = REUSED_HOME_FAQ.flatMap((question) =>
  (homeContent.faq ?? []).filter((entry) => entry.question === question),
)

/**
 * The service-area explainer, shared by `/locations/` and `/services/`.
 *
 * ⚠ ONE OBJECT, TWO PAGES, ON OWNER DIRECTION (2026-09-08). It was
 * authored inline on `/locations/`; `/services/` was then asked for the
 * same band. A second transcription of two cards, a panel and three
 * market links is the drift `service-cards.ts` and the shared FAQ
 * answers already exist to prevent, so the object is hoisted rather
 * than copied.
 *
 * ⚠ IT CARRIES NO MARKET-SCOPED CLAIM, which is what makes it portable.
 * Every line is about the service-market distinction itself: what a
 * service market is, what it is not, and that conditions differ between
 * the three. Nothing here states coverage, an office, hours or a local
 * presence, so it says the same true thing on either page (CLAUDE.md
 * §11, 18 §87).
 */
const SERVICE_AREA_GUIDANCE: MarketGuidanceContent = {
    eyebrow: 'How our service areas work',
    title: 'Local sewer service built around each market',
    intro:
      'The Sewer Pros serves properties across three active service markets. Select your market to find local sewer inspection, cleaning, coverage, scheduling, and contact information.',
    cards: [
      {
        icon: 'map-pin',
        accent: 'green',
        title: 'Service markets, not office locations',
        body: 'A service market identifies an area where The Sewer Pros travels to provide sewer camera inspection, sewer cleaning, hydro jetting, sewer line locating, and diagnostic services. It does not automatically represent a storefront, branch, depot, or office.',
        benefitLabel: 'What this means for you',
        benefit:
          'Confirm coverage using your property location before scheduling service.',
      },
      {
        icon: 'camera',
        accent: 'blue',
        title: 'Sewer conditions vary by market',
        body: 'Housing age, pipe materials, soil conditions, mature landscaping, property type, and local sewer requirements can vary between St. Louis, San Diego, and Las Vegas. Each market page provides information relevant to customers and properties in that service area.',
        benefitLabel: 'What this means for you',
        benefit:
          'Review locally relevant service and scheduling information instead of generic content with only the city name changed.',
      },
    ],
    /*
      ⚠ ALL THREE MARKETS, IN ONE TREATMENT AND ONE ORDER. Las Vegas
      is an active operational market (DEC-076, DEC-080) and must not
      read as pending or secondary; St. Louis is the only one with a
      GBP (01 §21) and must not read as the "real" one. Same button
      variant, same label pattern, registry order.
    */
    panel: {
      title: 'Find information for your service area',
      body: 'Choose your market to review local sewer services, featured communities, contact information, scheduling details, and sewer inspection guidance.',
      links: [
        {
          pageId: id('market-st-louis-mo'),
          label: 'Explore St. Louis',
          accent: 'green',
        },
        {
          pageId: id('market-san-diego-ca'),
          label: 'Explore San Diego',
          accent: 'blue',
        },
        {
          pageId: id('market-las-vegas-nv'),
          label: 'Explore Las Vegas',
          accent: 'green',
        },
      ],
    },
  }

/** One-line guide description, shared by the Resources hub and related-resource cards. */
const RES_READ_VIDEO_DESCRIPTION = 'How to interpret sewer camera footage yourself.'
const RES_REPLACEMENT_QUESTIONS_DESCRIPTION =
  'What to ask, and what a clear answer sounds like, before you approve a replacement.'
const RES_CAMERA_REPORT_DESCRIPTION = 'What a written inspection report should contain.'

export const hubContent: Partial<Record<PageId, HubPageContent>> = {
  [id('hub-services')]: {
    /*
      ==========================================================================
      CONVERSION PARITY - DEC-104 (owner, 2026-09-08)
      ==========================================================================
      ⚠ THE SECOND HUB TO OPT IN, NOT THE FAMILY. DEC-103 gave
      `/locations/` the hero lead form and the `split` closing CTA and
      scoped itself to that page by name; DEC-104 extends the same
      mechanism to this one on its own evidence - confirmed keyword data
      puts a comparison-stage searcher on `/services/`, warmer than a
      single closing panel serves well.

      `/for/` and `/resources/` are NOT covered and must
      keep rendering byte-for-byte as before. Each hub's conversion case
      gets evaluated on its own intent evidence; nothing here licenses
      pattern-matching the flag onto the remaining three.

      ⚠ `showHeroForm` ALONE. It carries the hero form and the split CTA
      together - owner direction on DEC-103, where they are one feature
      rather than two toggles. `showTrustSections` is DELIBERATELY
      ABSENT: DEC-104 excludes the review band and the confidence module
      exactly as DEC-103 did, and they are a separate decision if ever
      wanted.

      ⚠ NO MARKET IS PRESELECTED, same as `/locations/`. This page
      speaks for all three, so answering the Location field here would
      put a market-scoped answer on a sitewide page (01 §20).

      ⚠ SETTING THIS MOVES `AuthorityBand` BELOW THE FAQ ON THIS PAGE.
      That is the template's existing `showHeroForm` branch, not a new
      behaviour: the band exists to stop the FAQ's neighbour and the
      closing CTA sharing a surface, and the split CTA is `muted` where
      the panel was `brand`. DEC-103 refused to reorder the other
      hubs globally.
    */
    showHeroForm: true,
    /*
      ⚠ GUIDANCE ON FILLING THE FORM IN, NOT A PROMISE ABOUT WHAT
      HAPPENS AFTER. See `HubPageContent.heroFormIntro`: no response
      time, no availability, no price. It names the two fields the
      visitor has to answer and the escape hatch for the one case this
      page creates, a reader still choosing between services.
    */
    heroFormIntro:
      'Select the service you are considering and the property location. If none of the listed services matches, select Other and describe the symptoms.',
    /*
      ==========================================================================
      THE HOME PAGE'S BANDS, ADDED HERE ON OWNER DIRECTION (2026-09-08)
      ==========================================================================
      Six sections from the home page and one from `/locations/`, named
      by their headings:

        Before You Approve an Expensive... *   `showDifferentiator`
        Local sewer service built around ...   `guidance`
        What our customers say                 `showTrustSections`
        How we can help                        `routing`
        How our sewer inspection process ...   `showProcessBand`
        Where we work                          `showMarketCoverage`
        Planning Your Sewer Service ...        `showTrustSections`

      * `showDifferentiator` rendered `Differentiator` ("Diagnosis
        separated from the sale") when this comment was written; it
        renders `IndependentProcess` as of the 2026-09-22 site-wide
        swap. Same flag, same gate — see IndependentProcess.tsx.

      ⚠ EVERY ONE IS AN EXISTING SECTION AND NONE AUTHORS A NEW FACT.
      Five were already opt-in for `/locations/` under DEC-103;
      `showDifferentiator` and `showMarketCoverage` are new flags.
      `showMarketCoverage` renders a component that builds itself from
      shared data; `showDifferentiator` now renders `IndependentProcess`,
      whose copy is fixed inline in the component rather than
      data-driven (unlike the `Differentiator` it replaced).

      ⚠ THIS GOES BEYOND WHAT DEC-104 APPROVED, DELIBERATELY. That
      decision excluded the review band and the confidence module by
      name. The owner asked for both here afterwards, which supersedes
      the exclusion for this page; DEC-104's entry records it.

      ⚠ "What we do" IS NOT AMONG THEM, AND MUST NOT BE ADDED. This
      hub's member list already IS the nine service cards, so setting
      `services` would render the same mosaic twice on one page.
    */
    showDifferentiator: true,
    /*
      ⚠ SHARED WITH `/locations/`, NOT COPIED. See
      `SERVICE_AREA_GUIDANCE`. It renders BELOW this page's own `body`
      paragraph rather than replacing it, which is a template change
      made for this page; see `HubPageContent.guidance`.
    */
    guidance: SERVICE_AREA_GUIDANCE,
    /*
      ⚠ REVIEWS AND THE CONFIDENCE MODULE, BOTH DATA-GATED ON TOP OF
      THIS FLAG. The figures are company-wide and unattributed per
      DEC-100, which is what makes them legal on a sitewide page; the
      confidence module is positioning rather than fact.
    */
    showTrustSections: true,
    /*
      ⚠ THREE CARDS, NOT THE HOME PAGE'S FOUR. Index 0 is the "Explore
      services" card pointing at `/services/`, which is the page a
      reader is already on. `/locations/` drops its own card for the
      same reason and by the same arithmetic.
    */
    routing: [
      homeContent.routing![1]!,
      homeContent.routing![2]!,
      homeContent.routing![3]!,
    ],
    routingBackground: homeContent.routingBackground,
    /*
      ⚠ THE PROCESS VARIANT REPLACES THE PROOF BAND, it does not join
      it. `HubPageTemplate` suppresses `AuthorityBand`'s proof form
      whenever this is set, because a page carrying both makes the same
      "why trust us" argument twice in one column. The home page
      settled that.
    */
    showProcessBand: true,
    processBackground: homeContent.processBackground,
    /*
      ⚠ "Where we work" AS A BAND, NOT AS THIS HUB'S MEMBER LIST. The
      member list is the service mosaic; see
      `HubPageContent.showMarketCoverage` for why that distinction
      needs its own flag.
    */
    showMarketCoverage: true,
    /*
      ⚠ THE HOME PAGE'S FULLER HEADING (owner, 2026-09-08), where the
      default is the bare "Common questions". Fourteen entries in two
      columns sit a long way down this page, and the short heading had
      stopped saying what the questions were about.
    */
    faqTitle: 'Common questions about sewer and drain services',
    /*
      ⚠ FOURTEEN QUESTIONS SPLIT SEVEN AND SEVEN (owner, 2026-09-08),
      which is the same shape and the same component setting the home
      page has used since 2026-09-03 for its own fourteen. `FaqSection`
      halves the list, so the count below IS the split: adding a
      fifteenth would give eight and seven.

      ⚠ NO OTHER HUB SETS THIS. `/locations/` has nine questions, and
      splitting it would leave the thin
      columns `FaqSection.columns` documents against.
    */
    faqColumns: 2,
    /*
      ==========================================================================
      A SPLIT HERO: COPY LEFT, PHOTOGRAPHS RIGHT (owner, 2026-09-08)
      ==========================================================================
      ⚠ THE H1 CHANGED, AND IT IS STILL THE PAGE'S ONLY ONE. "Sewer and
      drain services, inspected independently first" became the line
      below; every other heading on this page is an `h2` or lower, and
      `HubIntro` hard-codes its own level for that reason.

      ⚠ THE HERO CTAS ARE THIS PAGE'S, NOT THE GLOBAL ONE. "Schedule a
      Sewer Inspection" names one of ten services as though it were the
      ask, on a page that also serves cleaning, jetting, drain cleaning,
      locating and diagnostic intent. The primary sends a reader to the
      grid; the secondary sends them to the closing form. The header's
      own button is untouched and still says the global phrase.

      ⚠ `#cta` IS THE EXISTING ANCHOR FOR THE CLOSING FORM, reused
      rather than duplicated. `CtaSection` already labels that section
      with it and `:target` in `app/globals.css` supplies the
      sticky-header offset, so adding a second id for the same
      destination would be redundant.

      ⚠ NO CLAIM IS ADDED. The services named are the nine live pages
      plus diagnostics; "accessible portions of the line" is the
      standing hedge; the repair boundary is CLAUDE.md §9 stated in the
      visitor's own terms. No response time, price, guarantee, office or
      credential appears.
    */
    hero: {
      eyebrow: 'Sewer inspection, cleaning, and diagnostics',
      title: 'Sewer and drain services built around documented evidence',
      intro: (
        <>
          <p>
            From recurring sewer backups and slow drains to an unknown
            sewer-line condition or questions before buying a property, the
            right starting service depends on what is happening at the
            property. The Sewer Pros provides sewer camera inspection, sewer
            cleaning, hydro jetting, drain cleaning, sewer line locating,
            recurring backup diagnosis, and preventative maintenance services.
          </p>
          <p className="mt-4">
            We evaluate accessible portions of the line when appropriate,
            document visible conditions, and explain the findings in practical
            language. Because we do not perform sewer repair or replacement,
            the information remains separate from a repair sale.
          </p>
        </>
      ),
      primaryAction: {
        href: '#services-grid',
        label: 'Explore Sewer Services',
      },
      secondaryAction: { href: '#cta', label: 'Request Service' },
    },
    /*
      ⚠ NO BRAND SUFFIX, WHICH IS WHY THIS IS NOT THE EXACT STRING THE
      BRIEF GAVE. Prompt 04 specified "Sewer & Drain Cleaning Services | The
      Sewer Pros". The owner approved a new title on SEO grounds
      (2026-11-22, editorial audit P6, DEC-104: the hub attracts a
      comparison-stage searcher, and the old title said nothing about
      inspection and shared "drain cleaning" with the Drain Cleaning page).
      `rootMetadata`'s `%s | ${SITE_NAME}` template appends the suffix for
      every nested route (`lib/seo/metadata.ts:149`), so writing it here
      would ship it twice.
    */
    seoTitle: 'Sewer & Drain Inspection and Cleaning',
    /*
      ⚠ THE BRIEF'S EM DASH IS A FULL STOP HERE. Prompt 04 wrote
      "...and more — independent service across..."; this project does
      not use em dashes in visitor-facing strings, and the build
      prompt's own guardrails repeat the rule. Nothing else changed,
      and the line still fits the display limit.
    */
    metaDescription:
      'Sewer and drain services: sewer camera inspection, cleaning, hydro jetting and locating across St. Louis, San Diego and Las Vegas. No repair upsell.',
    /*
      ==========================================================================
      THE OPENING BAND, REPLACING THE PROSE PARAGRAPH (owner, 2026-09-08)
      ==========================================================================
      ⚠ IT REPLACES `body`, WHICH IS WHY THAT FIELD IS GONE FROM THIS
      ENTRY. `HubPageTemplate` renders one opening band or the other and
      prefers this one; leaving the paragraph behind would have authored
      copy nothing displays. The Prompt 04 sentence it carried
      ("Every service on this page starts the same way...") is answered
      by the second paragraph below, at more length.

      ⚠ EVERY CLAIM HERE IS ONE THE SITE ALREADY MAKES. The service list
      is the nine live pages plus diagnostics; the process is the
      inspect / document / explain sequence the home page and all three
      market hubs state; the repair boundary is CLAUDE.md §9 and §27 in
      the visitor's own terms. No guarantee, response time, price,
      credential, office or municipal affiliation appears, and the three
      markets are named without implying premises in any of them.

      ⚠ "ACCESSIBLE PORTIONS OF THE SEWER LINE" IS EXACT AND STAYS.
      It is the hedge that keeps every inspection sentence on this site
      truthful: a camera sees what it can reach, and nothing here may be
      edited into a claim about the whole line.

      ⚠ THE HEADING RENDERS AS AN `h2`. The hero owns the page's only
      `h1`; `HubIntro` hard-codes the level rather than taking it as a
      prop for exactly that reason.
    */
    intro: {
      /*
        ⚠ THE EYEBROW MOVED TO THE HERO AND THIS ONE REPLACED IT
        (owner, 2026-09-08). Two bands opening on the same three words
        would have read as one section restated.
      */
      /*
        ⚠ A DRAWING, NOT A PHOTOGRAPH, WHICH IS WHY IT IS A TEXTURE.
        Pale line art of a lateral running from a cleanout to the main,
        with a camera head in the run, on a transparent ground. It
        illustrates what the copy beside it describes without asserting
        a job: nothing here is a photograph of Sewer Pros work, and the
        drawing shows no property, no person and no outcome.

        ⚠ IT MUST NOT BE MOVED TO `ctaBackground` OR THE HERO SET. Both
        of those paths scrim and flip their section's text to white,
        which a near-white line drawing cannot survive.
      */
      background: {
        src: '/images/markets/services-hub/the-sewer-pros-sewer-line-inspection-intro-background.webp',
        describes:
          'Line drawing of a sewer lateral running from a cleanout to the main, with a camera head partway along the run',
        source:
          'Supplied by the business owner, 2026-09-08. Illustration, not a photograph of a Sewer Pros job.',
      },
      eyebrow: 'Find the right starting service',
      title:
        'Find the right sewer service by starting with the condition of the line',
      body: [
        'Recurring sewer backups, multiple slow drains, unexplained odors, and concerns about an older sewer line can have several possible causes. The Sewer Pros provides sewer camera inspection, sewer diagnostics, sewer cleaning, hydro jetting, drain cleaning, sewer line locating, pre-purchase sewer inspection, and preventative maintenance services for residential and managed properties.',
        'Our evidence-first process starts by understanding the symptoms, inspecting accessible portions of the sewer line when appropriate, and documenting visible conditions. Depending on what the line shows, the appropriate next step may be cleaning, hydro jetting, locating the sewer route, monitoring a condition, or consulting a separate repair provider.',
        'Because The Sewer Pros does not perform sewer repair or replacement, our findings remain separate from a repair sale. You receive practical information that can help you make a more informed maintenance, property-purchase, or second-opinion decision.',
        'Service is available across the St. Louis, San Diego, and Las Vegas markets. Select a service below to learn what it addresses, how the process works, and what information you can expect to receive.',
      ],
      /*
        ⚠ ICONS FROM `SECTION_ICONS`, NOT A NEW DEPENDENCY. The three
        map to the three steps the copy above describes: the speech
        bubble for understanding the symptom, the camera for the
        documented evidence, the branch for the decision that follows.

        ⚠ BLUE, BLUE, GREEN. The palette already owns that split -
        `--accent-secondary` is the authority colour and `--accent` the
        conversion one - so the decision step is the green one.
      */
      benefits: [
        {
          title: 'Understand the problem',
          description:
            'Match the service to the symptoms or property concern you are experiencing.',
          icon: 'explanation',
          accent: 'blue',
        },
        {
          title: 'Review documented evidence',
          description:
            'See visible conditions inside accessible portions of the sewer line when a camera inspection is performed.',
          icon: 'camera',
          accent: 'blue',
        },
        {
          title: 'Choose the next step confidently',
          description:
            'Use clearer findings when deciding whether to clean, monitor, locate, or seek a separate repair opinion.',
          icon: 'decision',
          accent: 'green',
        },
      ],
      /*
        ⚠ THE TARGET IS THE MEMBER LIST'S OWN ID, which this route sets
        to `services-grid`. It is a fragment on this page rather than an
        approved page id, and `:target` in `app/globals.css` supplies
        the sticky-header offset so the heading is visible on arrival.
      */
      link: {
        label: 'Compare sewer and drain services',
        targetId: 'services-grid',
      },
    },
    /*
      ⚠ `homeServiceCards`, NOT THE FAMILY-GROUPED REORDER (owner
      direction, 2026-09-23). This page previously reordered the nine
      cards into inspection/cleaning/locating groups under its own
      heading; that presentation is gone in favor of full parity with
      the home page, San Diego, Las Vegas, and `/locations/` — same
      nine cards, same order, same copy, same `cards` layout. See
      `app/services/page.tsx` for the matching `itemsTitle`/
      `itemsVariant`.
    */
    items: homeServiceCards,
    itemsIntro: <p>{approvedServicesIntro}</p>,
    /*
      ==========================================================================
      FOURTEEN ANSWERS: FIVE THE HOME PAGE OWNS, NINE THIS PAGE'S OWN
      ==========================================================================
      ⚠ THE FIRST FIVE ARE SPREAD IN FROM `homeContent.faq`, NOT COPIED.
      See `reusedHomeFaq`. They are the repair-boundary answer,
      inspection-vs-cleaning, the second-opinion answer, recurring
      backups and hydro-jetting-vs-cleaning, in Prompt 04's order.

      ⚠ TWO OF THE NINE NEW ONES COVER GROUND THE HOME PAGE ALSO
      COVERS, IN DIFFERENT WORDS. "What does sewer line locating do"
      restates the home page's "What does sewer line locating involve",
      and the sewer-scope terminology answer restates "What is a sewer
      scope, and is it the same as a camera inspection?". Prompt 04
      drafted both as new copy and Prompt 13 passed them, so they ship
      as written - but they are now two facts with two authors, which
      is the drift this file spreads the other five in to avoid. Worth
      revisiting if either page's wording is ever revised.

      ⚠ EVERY ANSWER IS ANSWER-FIRST AND NONE ADDS A FACT. No response
      time, no price, no availability, no credential (CLAUDE.md §24).
    */
    faq: [
      ...reusedHomeFaq,
      {
        question: 'What sewer and drain services does The Sewer Pros offer?',
        answer: (
          <p>
            Sewer camera inspection, sewer cleaning, Sewer Cleaning &amp; Camera
            Inspection, hydro jetting, sewer line locating, drain cleaning,
            pre-purchase sewer inspection, recurring sewer backup diagnosis, and
            preventative sewer maintenance. We do not offer sewer repair or
            replacement.
          </p>
        ),
      },
      {
        question: 'What is preventative sewer maintenance?',
        answer: (
          <p>
            A scheduled cleaning interval based on what an inspection actually
            shows about your line, rather than a fixed annual visit. If camera
            evidence shows root activity or buildup returning faster than
            average, that sets the interval, not a generic calendar reminder.
          </p>
        ),
      },
      {
        question:
          'What is recurring sewer backup diagnosis, and how is it different from a standard inspection?',
        answer: (
          <p>
            It&rsquo;s a camera inspection specifically aimed at a line that
            has backed up more than once. The goal isn&rsquo;t just to see the
            current condition, it&rsquo;s to identify why the problem keeps
            returning, so the fix addresses the cause instead of clearing it
            again.
          </p>
        ),
      },
      {
        /*
          ⚠ THE SERVICE-AREA HEDGE IS LOAD-BEARING AND IS THE HOME
          PAGE'S OWN. "We travel to you rather than working from a
          public storefront" is what keeps this off a claim of premises
          in three markets where only St. Louis has a verified profile
          (CLAUDE.md §11, §29, §30). It must not be tightened into an
          office, a branch or a local address.
        */
        question: 'Do you serve St. Louis, San Diego, and Las Vegas?',
        answer: (
          <p>
            Yes, across all three service areas as a service-area business, we
            travel to you rather than working from a public storefront. See our{' '}
            <ApprovedInlineLink pageId={id('hub-locations')}>
              service areas
            </ApprovedInlineLink>{' '}
            for coverage specific to your area.
          </p>
        ),
      },
      {
        question:
          'What is the difference between drain cleaning and sewer cleaning?',
        answer: (
          <p>
            Drain cleaning clears fixture and branch lines, the pipes serving
            one sink, tub, or laundry connection. Sewer cleaning clears the
            main line that carries wastewater from the property to the
            connection point. A single slow drain is often a drain cleaning
            fix; backups affecting multiple fixtures usually point to the main
            line.
          </p>
        ),
      },
      {
        question: 'What does sewer line locating do, and when would I need it?',
        answer: (
          <p>
            Sewer line locating establishes exactly where the line runs and how
            deep it sits, without excavation. It&rsquo;s typically needed
            before digging, landscaping, installing a fence or pool, or
            planning utility work near the property, so you know what&rsquo;s
            underground before work starts.
          </p>
        ),
      },
      {
        /*
          ⚠ "SOMETIMES", AND THE HEDGE STAYS. This is the question a
          visitor arrives on after a replacement quote, and the answer
          must describe what an inspection can SHOW rather than promise
          that cleaning will be enough (CLAUDE.md §9, §24, §27). It also
          must not characterise whoever quoted the replacement.
        */
        question: 'Should a sewer line be cleaned instead of replaced?',
        answer: (
          <p>
            Sometimes. A camera inspection shows whether buildup, roots, or a
            partial blockage is causing the problem, in which case cleaning or
            hydro jetting may resolve it, or whether the pipe itself is damaged
            in a way cleaning can&rsquo;t fix. That&rsquo;s the evidence an
            independent inspection is meant to provide before a replacement
            decision is made.
          </p>
        ),
      },
      {
        question: 'What should I expect during a sewer camera inspection?',
        answer: (
          <p>
            A camera is run through the accessible portion of the line while
            the footage is recorded. We document what the camera shows as we
            go, then walk you through the footage afterward and explain what it
            means in plain language before recommending any next step.
          </p>
        ),
      },
      {
        question: 'Is a sewer scope the same as a sewer camera inspection?',
        answer: (
          <p>
            Yes. &ldquo;Sewer scope&rdquo; and &ldquo;sewer camera
            inspection&rdquo; describe the same service: a camera run through
            the line to document its condition on video.
          </p>
        ),
      },
      {
        question:
          'How is a sewer cleaning and camera inspection combo different from getting each separately?',
        answer: (
          <p>
            The combo clears the line first, then inspects it on camera, so you
            see the condition the blockage was hiding rather than just a line
            that drains again. Done separately, an inspection before cleaning
            can miss what&rsquo;s underneath existing buildup.
          </p>
        ),
      },
    ],
    /*
      ==========================================================================
      "NOT SURE WHERE TO START?" - THE PANEL BELOW THE SERVICE GRID
      ==========================================================================
      ⚠ IT POINTS AT THE CLOSING FORM, IT DOES NOT CARRY ONE. `#cta` is
      that section's existing anchor. A second form here would be two
      places to submit one enquiry and a second set of field ids to keep
      unique.

      ⚠ THE COPY MAY NOT PROMISE A DIAGNOSIS. "Can help identify an
      appropriate starting point" is the ceiling; CLAUDE.md §24 forbids
      guaranteeing that a cause will be established, and this is the
      section most tempted by it.

      ⚠ THE SECONDARY LINK IS THE CANONICAL CAMERA INSPECTION PAGE,
      resolved through the approved registry rather than written as a
      path, so a gated page drops the link instead of shipping a dead
      one.
    */
    selectionPanel: {
      eyebrow: 'Not sure where to start?',
      title: 'Tell us what is happening at the property',
      body: 'Recurring backups, several slow drains, an unknown sewer-line location, or a concern before buying a property may require different starting services. Describe the symptoms, the property type, and what decision you are trying to make. We can help identify an appropriate inspection, cleaning, hydro jetting, locating, or diagnostic starting point.',
      icon: 'guidance',
      action: { label: 'Describe the Problem', href: '#cta' },
      secondaryLink: {
        label: 'Review sewer camera inspection',
        pageId: id('svc-sewer-camera-inspection'),
      },
    },
    /*
      ⚠ GUIDANCE ON FILLING THE FORM IN, NOT A PROMISE ABOUT WHAT
      HAPPENS AFTER. See `HubPageContent.ctaFormIntro`: no response
      time, no availability, no price. "We will help identify an
      appropriate starting point" is the same ceiling the selection
      panel above it uses, and it is the strongest statement available
      without promising that a cause will be established (CLAUDE.md
      §24).

      ⚠ IT DOES NOT REPEAT `heroFormIntro`. That one tells a reader
      choosing between services which two fields to answer; this one
      tells a reader who has scrolled the whole page what to put in the
      message field.
    */
    ctaFormIntro:
      'Tell us what is happening at the property. If you are unsure which service you need, describe the symptoms in the message field and we will help identify an appropriate starting point.',
    /*
      ⚠ NO BUTTON (owner, 2026-09-08), WHICH REVERSES WHAT PROMPT 04
      ASKED FOR. That brief named "Schedule a Sewer Inspection" as this
      CTA's action and it shipped for two builds; the owner has now
      dropped it, which lands where `/locations/`, St. Louis, San Diego
      and Las Vegas already are.

      `CtaContent.hideAction`'s own note is the argument: this section
      is the `split` variant and carries the request-service form on its
      right, so the form's green submit is the ask. A second green
      button beside it, pointing at `/contact/` while a contact form is
      already on screen, is a competing path rather than a stronger one
      (18 §62, §106).

      ⚠ `hideAction`, NOT AN EMPTY `actionLabel`. Leaving both unset
      falls back to the global `PRIMARY_CTA` and still renders a button;
      only this flag drops the actions row, rather than leaving an empty
      flex box holding 32px of margin above nothing.

      ⚠ NOTHING ELSE LOSES A PATH. The hero's "Request Service" button
      and the selection panel's "Describe the Problem" both point at
      `#cta`, so every route to this form is intact and the header
      keeps its own button sitewide.

      ⚠ NO PROMISE IN THE BODY. "Walk you through what fits your
      situation before anything is scheduled" describes the process the
      rest of the page describes; it carries no response time,
      availability or price (CLAUDE.md §24, §42).
    */
    /*
      ⚠ THE CLOSING CTA GAINS A FRAME (owner, 2026-09-08). This hub
      shipped without one because none existed: `HubPageContent`'s own
      note said so, and `CtaSection` gates its `split` layout on the
      form rather than on the image precisely so the section could
      render without a picture. One was supplied, so the section takes
      it.

      ⚠ IT IS NOT IN THE HERO CAROUSEL, AND MUST NOT BE ADDED TO IT.
      `data/business/services-hub-backdrop.ts` carries the five hero
      frames and says the same thing from its end: one picture in two
      places on one route reads as a mistake.

      ⚠ NO ADDRESS, NUMBER, SIGNAGE OR PERSON IS VISIBLE. It shows a
      property type, not a Sewer Pros location or a job (CLAUDE.md
      §11, §24). The white standpipe by the foundation is the only
      sewer-specific detail and it asserts nothing.

      ⚠ THE SCRIM IS CSS AND THE SECTION'S TEXT GOES WHITE. `Section`
      applies it; the form beside the copy keeps its own opaque card.
    */
    ctaBackground: {
      src: '/images/markets/services-hub/the-sewer-pros-sewer-service-request-cta-background.webp',
      alt: 'Single-story home with a stone-veneer base, a driveway and a visible sewer cleanout',
      source:
        'Supplied by the business owner, 2026-09-08. Rendered scene, not a photograph of a Sewer Pros job.',
    },
    cta: {
      hideAction: true,
      eyebrow: 'Sewer service requests',
      title: 'Tell us what is happening with your sewer line',
      body: (
        <>
          <p>
            Recurring backups, slow drains, drainage odors, or an uncertain
            sewer-line condition can have more than one possible cause. The
            Sewer Pros helps property owners, buyers, and managers
            start with the right sewer inspection, cleaning, hydro
            jetting, locating, or diagnostic service.
          </p>
          <p>
            Use the form to describe the symptoms, property concern, or service
            you are considering. Select your market and service, then include
            helpful details such as how often the problem occurs, which fixtures
            are affected, or whether you need documentation before a property or
            maintenance decision.
          </p>
          <p>
            We inspect accessible portions of the line when appropriate,
            document visible conditions, and explain what the findings may mean
            in practical language. Our evidence-first approach helps you decide
            whether cleaning, monitoring, locating, further evaluation, or a
            separate repair opinion is the appropriate next step.
          </p>
          <p>
            The Sewer Pros serves the St. Louis, San Diego, and Las Vegas
            service markets. We do not perform sewer repair or replacement, so
            our findings remain separate from a repair sale and can be used when
            consulting another provider.
          </p>
        </>
      ),
      /*
        ⚠ IT REPLACES THE PHONE SENTENCE RATHER THAN ADDING TO IT.
        `CtaSection` renders "Prefer to talk now?" plus a number only
        when a `phone` is passed, and `HubPageTemplate` deliberately
        passes none: a number is market-scoped and this page speaks for
        three markets. This line does the same job without naming one,
        by pointing at the form's market field and the footer's three
        local teams.

        ⚠ THE HOURS ARE THE PUBLISHED ONES AND NOTHING MORE. Monday to
        Friday, 8:00 a.m. to 4:00 p.m. rules out weekend, 24/7 and
        emergency service by omission (01 §35). No response time and no
        same-day language may be added here.
      */
      note: 'Prefer to talk? Select your service market in the form, or contact the appropriate local team during Monday through Friday, 8:00 a.m. to 4:00 p.m.',
    },
  },

  [id('hub-locations')]: {
    /*
      ==========================================================================
      CONVERSION AND TRUST PARITY WITH THE MARKET HUBS (DEC-103, 2026-09-07)
      ==========================================================================
      ⚠ THE ONLY HUB THAT SETS EITHER FLAG, AND THAT IS THE POINT. The
      other four keep exactly the sections they had. This one is where
      the gap cost the most: it is the page a visitor opens to find out
      whether their area is covered, so it catches market-agnostic
      intent that has nowhere better to land, and until now it answered
      that intent with a single closing panel.

      ⚠ NEITHER FLAG ADDS A CLAIM. `showTrustSections` renders reviews
      that DEC-100 already established as company-wide and unattributed,
      plus the confidence module, which is positioning rather than fact.
      `showHeroForm` renders the same form the markets render, with the
      Location field left unanswered because this page speaks for three
      markets and cannot answer it (01 §20).

      ⚠ NO PHONE NUMBER AND NO CTA IMAGE. Both are market-scoped and
      neither exists for this page; see `HubPageTemplate`.
    */
    showHeroForm: true,
    showTrustSections: true,
    /*
      ⚠ NO BUTTON IN THE CLOSING CTA (owner, 2026-09-07). That section
      is the `split` variant and carries a lead form in its proof slot,
      so the button was a second, weaker path to the same place: the
      form asks for the job on the spot, the button navigated away from
      it. St. Louis made the same call for the same reason.

      ⚠ `hideAction`, NOT AN EMPTY `actionLabel`. `CtaSection` treats
      `null` as "no button" and `undefined` as "fall back to the global
      PRIMARY_CTA", so only this flag actually removes it.
    */
    /*
      ⚠ THE EYEBROW IS ST. LOUIS'S PHRASE, VERBATIM AND DELIBERATELY.
      "Evidence before expensive sewer decisions" names no market, so
      it is the company's own differentiator (CLAUDE.md §8) rather than
      a St. Louis fact borrowed for a sitewide page. That distinction
      is the whole test for what may cross markets here.

      ⚠ THE BODY IS THE MARKET HUBS' THREE-PARAGRAPH SHAPE: qualifying
      scenarios, what the visit produces, then the repair guardrail
      stated as this company's model rather than a claim about anyone
      else's (CLAUDE.md §9, §27).

      ⚠ "ACROSS ALL THREE SERVICE MARKETS" IS THE ONE SUBSTITUTION A
      SITEWIDE PAGE NEEDS. Every other structural element matches the
      market hubs; a named city is the single thing that cannot.

      ⚠ NO PROMISE ADDED. "Confirms availability for your address" is
      the act of checking, not an assurance of coverage; no response
      time, price, or same-day claim enters with this copy.
    */
    cta: {
      eyebrow: 'Evidence before expensive sewer decisions',
      title: 'Schedule a sewer inspection',
      body: (
        <>
          <p>
            If you are dealing with recurring sewer backups, multiple slow
            drains, unexplained blockages, possible root intrusion, or
            concerns about a property you are preparing to purchase, a sewer
            camera inspection can show what is happening inside the
            accessible portion of the line.
          </p>
          <p>
            The Sewer Pros confirms availability for your address, records
            the inspection, and explains what the footage shows in plain
            language, across all three service markets.
          </p>
          <p>
            Because we do not perform sewer repair or replacement, our
            findings are not tied to selling you a major repair. You receive
            evidence you can keep, review, and use when deciding what happens
            next.
          </p>
        </>
      ),
      hideAction: true,
    },
    /*
      ⚠ ONE FRAME, THREE PANELS, ONE PER MARKET (owner-supplied,
      2026-09-07). Brick and mature shade tree, stucco and palms,
      stucco and desert gravel. That is the only image on the site
      that depicts all three markets at once, which is what makes it
      right for the page that speaks for all three and wrong for any
      single market hub.

      ⚠ IT DEPICTS NO BUSINESS PRESENCE, WHICH IS THE TEST THAT
      MATTERS HERE. No signage, no address, no vehicle livery, no
      storefront, no pin on a map. A CTA image on a sitewide page that
      showed any of those would assert an office where none is
      verified (01 §20-21, CLAUDE.md §24).

      ⚠ THE ALT NAMES NO CITY. The panels read as regional housing
      types rather than as photographs of a named place, and captioning
      them with market names would turn a rendered scene into a
      location claim.
    */
    ctaBackground: {
      src: '/images/markets/locations-hub/the-sewer-pros-three-market-service-areas-cta.webp',
      alt: 'Three residential street views side by side: a brick house under a mature shade tree, a stucco house with palms, and a stucco house with desert gravel planting',
      source:
        'Supplied by the business owner, 2026-09-07. Rendered scene, not a photograph of a Sewer Pros job.',
    },
    /*
      ==========================================================================
      THREE HOME PAGE BANDS, ON OWNER DIRECTION (2026-09-07)
      ==========================================================================
      "How we can help", "What we do", and the process band.

      ⚠ THE ROUTING ARRAY IS THIS PAGE'S, NOT A REFERENCE TO THE HOME
      PAGE'S. `homeContent.routing` carries a fourth "Check coverage"
      card whose links and secondary action both point at
      `/locations/`. Rendering that here would route a visitor to the
      page they are standing on, and its three market links would be
      the THIRD copy of the same market navigation on this page after
      the guidance panel and the market cards. Dropped for that reason,
      not overlooked.

      ⚠ THE THREE THAT REMAIN ARE COPIED VERBATIM FROM `homeContent`,
      including the accents, so the band reads identically on both
      pages. If that copy drifts, the two pages disagree; a shared
      constant would be the fix, and is worth doing the next time a
      third page needs it.
    */
    routing: [homeContent.routing![0]!, homeContent.routing![2]!, homeContent.routing![3]!],
    routingBackground: homeContent.routingBackground,
    /*
      ⚠ THIS SWAPS THE "How we work" PROOF BAND OUT. Both are
      `AuthorityBand` and this page should not argue its credibility
      twice; the home page made the same call. See
      `HubPageContent.showProcessBand`.
    */
    showProcessBand: true,
    /*
      ⚠ THE HOME PAGE'S OWN FRAME, AND ITS ALT SAYS NOTHING ABOUT A
      MARKET. The filename mentions St. Louis; the alt text is a
      generic street view, and it is decorative background rather than
      a claim about where the photograph was taken. A sitewide page
      must not caption an image with one market's name (01 §20).
    */
    processBackground: homeContent.processBackground,
    /*
      ⚠ `homeServiceCards`, NOT `coreServiceCards`, AS OF 2026-09-22.
      The home page's approved services section (nine cards, equal-size
      grid) — see `content/pages/home-service-cards.ts`. Safe on a page
      speaking for all three markets for the same reason `service-cards
      .ts` gives for `coreServiceCards`: every one of these nine carries
      an identical status across all three markets.
    */
    services: homeServiceCards,
    /*
      ==========================================================================
      HERO REWRITTEN 2026-09-07 (owner copy, folded on owner direction).
      ==========================================================================
      ⚠ THE SUPPLIED COPY HAD A BULLET LIST AND THREE MARKET LINKS. Both
      were dropped rather than fitted in, on owner direction: the hero
      has no list slot and does not need one, and the market links would
      have been a third copy of the same navigation two sections above
      the guidance panel that already owns that job. "One hero, one
      voice, no repeated slots."

      ⚠ THE LIST BECAME THE SECOND PARAGRAPH'S MIDDLE CLAUSE. Confirm
      availability, document on video, explain the findings - the five
      bullets said this in five lines.

      ⚠ ONE LINE WAS SOFTENED, AND THIS IS THE REASON. The supplied
      bullet read "Choose your next step without a repair-driven sales
      incentive", which implies other contractors push repairs that are
      not needed. CLAUDE.md §9 draws that line explicitly: the
      differentiator is The Sewer Pros' own business model, never an
      accusation about anyone else. It now reads "based on evidence
      rather than a repair recommendation", which keeps the contrast
      and makes no claim about a third party. The site's established
      phrasing, "without repair-driven upselling", was the alternative;
      this one fits the sentence better and says the same thing.

      ⚠ THE NO-REPAIR SENTENCE IS A GUARDRAIL, NOT A HEDGE. CLAUDE.md
      §9 forbids presenting the business as a repair or replacement
      contractor, and stating it in the hero is the clearest place.

      ⚠ NO PROMISE ANYWHERE. No response time, no same-day, no price,
      no coverage guarantee. "Confirm coverage" is an invitation to
      ask, not an assurance of a yes.
    */
    hero: {
      eyebrow: 'Sewer service across three markets',
      title: 'Find sewer inspection and cleaning in your service area',
      intro: (
        <>
          <p>
            The Sewer Pros provides sewer camera inspection, sewer cleaning,
            hydro jetting, sewer line locating, drain cleaning, and diagnostic
            services across the St. Louis, San Diego, and Las Vegas service
            markets. These are service markets: areas we travel to and work
            in, not offices you can visit. Select your location and tell us
            what is happening so we can confirm coverage and identify the
            appropriate service for your property.
          </p>
          <p>
            Request service if you are dealing with recurring sewer backups,
            multiple slow drains, unexplained blockages, possible root
            intrusion, or concerns about a property you are preparing to
            purchase. We confirm availability for your address, document
            visible conditions inside accessible portions of the line on
            video, and explain what is there, so you can decide your next step
            based on evidence rather than a repair recommendation. The Sewer
            Pros does not perform sewer repair or replacement.
          </p>
        </>
      ),
    },
    /*
      ⚠ GUIDANCE ON FILLING THE FORM IN, NOT A PROMISE ABOUT WHAT
      HAPPENS AFTER. See `HubPageContent.heroFormIntro`.
    */
    heroFormIntro:
      'Not sure which service you need? Select Other and briefly describe the symptoms you are seeing.',
    // No brand suffix: the root title template appends it.
    seoTitle: 'Sewer Service Areas: St. Louis, San Diego and Las Vegas',
    metaDescription:
      'The Sewer Pros provides sewer and drain services across St. Louis, San Diego, and Las Vegas: service-area coverage, not branch offices.',
    /*
      ==========================================================================
      SERVICE-AREA EXPLAINER. Replaced the prose `body` 2026-09-07.
      ==========================================================================
      ⚠ THIS REPLACED `body`, IT DID NOT JOIN IT. `HubPageTemplate`
      renders one intro band and prefers `guidance`, so a leftover
      `body` here would be two paragraphs nothing displays.

      ⚠ ONE SENTENCE WAS DELETED RATHER THAN REWRITTEN, ON OWNER
      DIRECTION. The old closing line read: "That is why market pages
      are worth writing properly rather than swapping a city name into
      the same paragraph, and why the ones here are being researched
      before they are published." That is production commentary about
      how the site is built. It tells a visitor nothing about their
      sewer, and "before they are published" describes an internal
      pipeline state on a public page. It is gone from the site and
      deliberately not relocated; the governance documentation that
      discusses publication and indexation is untouched.

      ⚠ EVERY FACTUAL CLAIM SURVIVED THE REWRITE. Service markets are
      not offices; sewer conditions differ by market. Nothing was added
      beyond what the prose already said, and no coverage guarantee,
      response time, price, or availability promise entered with the
      new format (CLAUDE.md §24).

      ⚠ NO EM DASHES, INCLUDING IN THE CARD BODIES.
    */
    guidance: SERVICE_AREA_GUIDANCE,
    /*
      ⚠ THE HOME PAGE'S MARKET CARDS, NOT A SECOND DESIGN FOR THE SAME
      INFORMATION (owner direction, 2026-09-07). This replaced a plain
      three-row `items` index carrying one line each; every destination
      it had is still a crawlable anchor here, and each card now also
      lists that market's own community pages.

      ⚠ NO `items` ALONGSIDE THIS. `HubPageTemplate` renders one member
      list, and it prefers this one - an `items` array left here would
      be content nothing displays.

      ⚠ THE CARDS ARE NOT DECLARED HERE, AND THAT IS THE POINT.
      `MarketCoverage` builds them from approved `market` page records,
      so a market whose hub is gated drops out of this indexable module
      on its own (04 §4) rather than needing an edit in two places. All
      three are `launch` and indexable today, which is why all three
      render. The community lists come from approved `location` records
      the same way, so no city name and no route is written in this
      file.

      ⚠ SERVICE MARKETS, NOT BRANCHES. The copy below says where work
      happens, never where an office is (CLAUDE.md §11, 18 §87). The
      hero and the FAQ on this page already make that explicit, and the
      intro repeats the availability caveat rather than implying the
      listed communities are the limit or the guarantee.
    */
    marketCards: {
      eyebrow: 'Service areas',
      title: 'Where we work',
      intro:
        'The Sewer Pros provides sewer camera inspection, sewer cleaning, hydro jetting, sewer line locating, and diagnostic services across the St. Louis, San Diego, and Las Vegas service markets. Choose a market to explore local service information and featured communities. The locations shown are not the full limit of our coverage, so contact us to confirm availability for your property.',
      descriptions: {
        [id('market-st-louis-mo')]:
          'Sewer inspection, cleaning, locating, and diagnostic services across the greater St. Louis region.',
        [id('market-san-diego-ca')]:
          'Sewer inspection, cleaning, locating, and diagnostic services across the greater San Diego region.',
        [id('market-las-vegas-nv')]:
          'Sewer inspection, cleaning, locating, and diagnostic services across the Las Vegas Valley.',
      },
      /*
        Each label names its own market rather than repeating one
        string three times (18 §47). The home page keeps the shared
        wording, where the card heading sits directly above the link.
      */
      actionLabels: {
        [id('market-st-louis-mo')]: 'Explore St. Louis Service Locations',
        [id('market-san-diego-ca')]: 'Explore San Diego Service Locations',
        [id('market-las-vegas-nv')]: 'Explore Las Vegas Service Locations',
      },
    },
    /*
      ==========================================================================
      SIX ENTRIES ADDED 2026-09-07. Three to nine.
      ==========================================================================
      ⚠ INTERLEAVED, NOT APPENDED, so related questions sit together:
      coverage first, then who we are, then what we do and do not do,
      then hours, then the out-of-market case beside "how do I find
      out".

      ⚠ EVERY FACT WAS CHECKED AGAINST DATA, NOT AGAINST THE DRAFT.
        hours       `data/markets/markets.ts` - all three markets carry
                    'Monday to Friday, 8:00am - 4:00pm', so stating them
                    once for every market is accurate rather than a
                    generalisation. Weekends closed per
                    `data/business/offers.ts`.
        same-day    DEC-088's approved hedge, kept word for word in
                    shape: "sometimes", "never guaranteed", weekday
                    hours named. It must never harden into a promise.
        one company 01 §776 - "one company with multiple markets rather
                    than three unrelated brands".
        no repair   CLAUDE.md §9. The guardrail, stated plainly.

      ⚠ NO `FAQPage` SCHEMA. Deferred by standing decision, same as the
      market hubs.

      ⚠ NO EM DASHES, and the hours are written "8:00am to 4:00pm"
      rather than with the en dash the data uses, because this is
      visitor-facing prose rather than a data field.
    */
    faq: [
      {
        question: 'What areas does The Sewer Pros serve?',
        answer: (
          <p>
            The Sewer Pros currently works across three service markets: St.
            Louis, Missouri; San Diego, California; and Las Vegas, Nevada.
            Each market page above lists the communities we currently feature
            for that area, though our coverage is not limited to only the
            communities named there.
          </p>
        ),
      },
      {
        question: 'Do you have a local office I can visit?',
        answer: (
          <p>
            No. We&rsquo;re a service-area business: work happens at your
            property, not a storefront. See the markets listed above for where
            we currently work.
          </p>
        ),
      },
      {
        question: 'Is The Sewer Pros the same company in every market?',
        answer: (
          <p>
            Yes. The Sewer Pros is one company operating across all three
            service markets, not a franchise or a network of independently
            owned locations. Service availability, hours, and pricing may
            still vary by market, but the business behind the work is the
            same.
          </p>
        ),
      },
      {
        question:
          'Does The Sewer Pros offer the same services in every market?',
        answer: (
          <p>
            The core services, sewer camera inspection, sewer diagnostics,
            sewer cleaning, hydro jetting, and sewer line locating, are the
            focus in every market. Exact service availability can still vary
            by location, so check the relevant market page above or contact
            us to confirm what is currently available for your property.
          </p>
        ),
      },
      {
        question: 'Does The Sewer Pros repair or replace sewer lines?',
        answer: (
          <p>
            No. The Sewer Pros specializes in independent sewer inspection,
            diagnostics, locating, and cleaning, not repair or replacement.
            If an inspection shows that repair or replacement may be needed,
            we can document what we found so you have clear evidence before
            deciding on next steps or getting a second opinion.
          </p>
        ),
      },
      {
        question: 'Do you offer emergency service?',
        answer: (
          <p>
            No. We operate standard weekday hours in every market and do not
            provide 24/7 or emergency service.
          </p>
        ),
      },
      {
        question: "What are The Sewer Pros' hours in these markets?",
        answer: (
          <p>
            The Sewer Pros operates Monday to Friday, 8:00am to 4:00pm, in
            every service market, and is closed Saturday and Sunday. A
            same-day appointment is sometimes available within those hours,
            but it is never guaranteed.
          </p>
        ),
      },
      {
        question:
          'Do you serve areas outside St. Louis, San Diego, and Las Vegas?',
        answer: (
          <p>
            Our published coverage today is limited to the St. Louis, San
            Diego, and Las Vegas service markets. If your property is outside
            those areas, contact us directly with your location and we can
            tell you quickly whether we are able to help.
          </p>
        ),
      },
      {
        question: 'How do I find out if you serve my area?',
        answer: (
          <p>
            Check the market pages above for coverage, or contact us directly
            with your location, and we can tell you quickly whether we are
            currently working there.
          </p>
        ),
      },
    ],
  },

  [id('hub-audiences')]: {
    hero: {
      title: 'Who We Serve',
      intro: (
        <p>
          Property owners, buyers, real estate professionals, and property
          managers, each arriving with a different
          question about the same underground pipe.
        </p>
      ),
    },
    // No brand suffix: the root title template appends it.
    seoTitle: 'Who We Serve',
    metaDescription:
      'Sewer inspection, diagnostics, and cleaning for home buyers, sellers, real estate agents, home inspectors, property managers, and HOA communities across St. Louis, San Diego, and Las Vegas.',
    body: (
      <>
        <h2>Different decisions, different evidence</h2>
        <p>
          A homeowner with a recurring backup wants to know why it keeps
          happening. A buyer wants to know what they are taking on before
          committing. An agent wants a straight answer they can pass to a
          client without it becoming a sales process. A property manager wants
          to stop absorbing the same call every few months.
        </p>
        <p>
          The inspection is broadly the same work in each case. What differs is
          which findings matter, how urgently, and what decision they feed.
        </p>

        <h2>What is common to all of them</h2>
        <p>
          Everyone in that list benefits from the same thing: documented
          evidence of the line&rsquo;s condition, produced by a company that
          does not stand to gain from a particular interpretation of it.
        </p>
      </>
    ),
    // Plain strings, not JSX: apostrophes are literal ’ here, the
    // convention this codebase already uses for string values
    // (content/pages/audiences.tsx §175). `&rsquo;` is JSX-only and
    // would render as visible markup in this position.
    items: [
      { pageId: id('aud-home-buyers'), description: 'Inspect the line before you commit to a property.' },
      { pageId: id('aud-home-sellers'), description: 'Find out what a buyer’s inspection will find.' },
      { pageId: id('aud-real-estate-agents'), description: 'Support transactions with documented findings.' },
      { pageId: id('aud-home-inspectors'), description: 'Camera findings alongside a general inspection.' },
      { pageId: id('aud-property-managers'), description: 'Diagnose recurring problems instead of repeating the same call.' },
      { pageId: id('aud-hoa-communities'), description: 'Evidence a board can actually make a decision on.' },
    ],
  },

  [id('hub-resources')]: {
    hero: {
      title: 'Sewer & Drain Resources',
      intro: (
        <p>
          Practical explanations of what inspections show, what findings mean,
          and how to make sense of the evidence you are given.
        </p>
      ),
    },
    /*
      ⚠ NOT THE PROPOSED COPY. The version drafted for this page named
      hydro jetting, drain problems, pipe materials, and sewer backups —
      none of which the two items below actually cover. This hub is
      narrowly about interpreting inspection reports and footage, so
      the description states that instead of the broader topic list,
      per CLAUDE.md's rule against a title/description overstating page
      content.
    */
    metaDescription:
      'Practical explanations of what a sewer camera inspection shows and what the findings mean, so you can make sense of the evidence you are given.',
    items: [
      {
        pageId: id('res-camera-report'),
        description: RES_CAMERA_REPORT_DESCRIPTION,
        image: editorialImage('/resources/what-is-in-a-sewer-camera-inspection-report/'),
      },
      {
        pageId: id('res-read-video'),
        description: RES_READ_VIDEO_DESCRIPTION,
        image: editorialImage('/resources/how-to-read-a-sewer-camera-inspection-video/'),
      },
      {
        pageId: id('res-replacement-questions'),
        description: RES_REPLACEMENT_QUESTIONS_DESCRIPTION,
        image: editorialImage('/resources/questions-to-ask-before-approving-sewer-line-replacement/'),
      },
    ],
    ctaBackground: {
      src: '/images/brand/resources/the-sewer-pros-resources-final-cta-sewer-inspection-report-notebook-16x9.webp',
      alt: 'Clipboard with blank paper and a closed notebook on a counter beside a camera monitor, with a window behind',
      source: 'Generated image (DEC-145), owner-approved. Scene, not a photograph of a Sewer Pros job.',
    },
  },
}

/* ==========================================================================
   Core pages
   ========================================================================== */

export const coreContent: Partial<Record<PageId, CorePageContent>> = {
  [id('core-careers')]: {
    hero: {
      title: 'Careers at The Sewer Pros',
      intro: (
        <p>
          The Sewer Pros is accepting applications in the St. Louis area, the San Diego area and
          the Las Vegas Valley.
        </p>
      ),
    },
    seoTitle: 'Careers in St. Louis, San Diego and Las Vegas',
    metaDescription:
      'The Sewer Pros is accepting applications in the St. Louis area, the San Diego area and the Las Vegas Valley. Choose your area and send your resume online.',
  },
  [id('core-reviews')]: {
    hero: {
      title: 'Customer Reviews',
      intro: (
        <p>
          Reviews from customers of The Sewer Pros, shown exactly as posted on
          our Google Business Profiles in St. Louis and San Diego. Written
          reviews are quoted in full, and customers who left a star rating
          only are shown too. Each review links to the reviewer&apos;s public
          Google profile.
        </p>
      ),
    },
    seoTitle: 'Customer Reviews - Sewer Inspection and Cleaning',
    metaDescription:
      'Read Google reviews of The Sewer Pros from St. Louis and San Diego customers on camera inspections, pre-purchase scopes, and cleaning.',
    relatedTitle: 'Related pages',
    relatedPageIds: [
      id('hub-services'),
      id('svc-sewer-camera-inspection'),
      id('svc-pre-purchase-sewer-inspection'),
      id('core-faq'),
    ],
  },
  [id('core-faq')]: {
    hero: {
      title: 'Sewer & Drain FAQs',
      intro: <p>Common questions about inspections, cleaning, and what findings mean.</p>,
    },
    metaDescription:
      'Get answers about sewer camera inspections, sewer cleaning, hydro jetting, drain problems, sewer backups, pipe materials, and pre-purchase inspections.',
    faq: [
      {
        question: 'What does a sewer camera inspection show?',
        answer: (
          <p>
            Visible conditions inside the accessible line: blockages, root
            intrusion, separated or offset joints, visible cracks, standing
            water, debris, and changes in pipe material. It cannot guarantee
            detection of every hidden defect.
          </p>
        ),
      },
      {
        question: 'Do you perform sewer repairs or replacement?',
        answer: (
          <p>
            No. We inspect, diagnose, locate, and clean. Structural repair,
            replacement, lining, and excavation are work for a qualified repair
            contractor.
          </p>
        ),
      },
      {
        question: 'Does the line need cleaning before it can be inspected?',
        answer: (
          <p>
            Sometimes. Heavy buildup or standing water can obscure the pipe
            wall. Where that prevents assessment, cleaning first produces
            footage that shows the pipe rather than what was sitting in it.
          </p>
        ),
      },
      {
        question: 'Why does my line keep backing up after being cleared?',
        answer: (
          <p>
            Recurrence usually indicates something the clearing is not
            addressing: roots entering at a defect, a section holding water, or
            damage creating a catch point. That is a case for inspection rather
            than another clearing.
          </p>
        ),
      },
      {
        question: 'Is hydro jetting always better than snaking?',
        answer: (
          <p>
            No. They suit different problems, and jetting can be the wrong
            choice in a line that is already structurally compromised.
          </p>
        ),
      },
      {
        question: 'Should I get a sewer inspection before buying a property?',
        answer: (
          <p>
            It is worth considering. The sewer line is underground and not visible without a camera. Ask your home inspector what their inspection covers. A sewer scope is a separate, focused inspection of the sewer line.
          </p>
        ),
      },
      {
        question: 'Can you tell me who is responsible for the line?',
        answer: (
          <p>
            No. Responsibility for portions of a sewer line varies by
            jurisdiction and is a question for the relevant authority or your
            own adviser. We document the condition of the line, not the legal
            position.
          </p>
        ),
      },
    ],
    relatedPageIds: [id('hub-services'), id('hub-resources'), id('hub-audiences'), id('core-about')],
    ctaBackground: {
      src: '/images/brand/frequently-asked-questions/the-sewer-pros-faqs-final-cta-residential-cleanout-utility-room-16x9.webp',
      alt: 'Utility room corner with a white drain pipe, a floor cleanout cap on a concrete floor, a metal shelf and a plant',
      source: 'Generated image (DEC-145), owner-approved. Scene, not a photograph of a Sewer Pros job.',
    },
  },
}

/* ==========================================================================
   Resources — the two that need no municipal verification
   ========================================================================== */

export const resourceContent: Partial<Record<PageId, ResourcePageContent>> = {
  [id('res-camera-report')]: {
    metaDescription:
      'Learn what a sewer camera inspection report includes, how to read the findings, and what to ask for before you rely on it or share it.',
    dateModified: '2026-11-23',
    hero: {
      eyebrow: 'Guide',
      title: 'What Is Included in a Sewer Camera Inspection Report?',
    },
    directAnswer: (
      <p>
        A sewer camera inspection report generally identifies the property and
        the inspection date, where the camera entered the line, how far it
        traveled, what was visible, and what could not be assessed. It may also
        include photos, approximate distances, video references, and suggested
        follow-up. The exact contents depend on the inspection agreement, so
        confirm what you will receive before the visit.
      </p>
    ),
    body: (
      <>
        <h2>Why the report matters as much as the inspection</h2>
        <p>
          A <ApprovedInlineLink pageId={id('svc-sewer-camera-inspection')}>sewer camera inspection</ApprovedInlineLink>
          produces evidence. The report is what makes that evidence
          usable later: when you compare quotes, revisit a decision, or show
          someone else what was found. A good report tells you what the camera
          saw, where it saw it, and what it could not see.
        </p>

        <h2>What counts as &ldquo;included&rdquo;?</h2>
        <p>
          No single national format governs these reports, so this guide
          separates four kinds of items:
        </p>
        <ul>
          <li>
            <strong>Required under a named standard.</strong> Some professional
            standards set minimums. They are voluntary, and they apply only when
            an inspector follows them.
          </li>
          <li>
            <strong>Common in sample reports.</strong> Features that recur in
            published sample reports from several inspection companies. That is
            a small sample, not a survey of the industry.
          </li>
          <li>
            <strong>Good practice.</strong> Details that make a report clearer,
            even where no standard requires them.
          </li>
          <li>
            <strong>Depends on the provider.</strong> Items to confirm in the
            inspection agreement.
          </li>
        </ul>
        <p>
          One published example is InterNACHI&rsquo;s sewer-scope standard,
          written for properties with four or fewer residential units. It calls
          for written findings, a statement of which sections were and were not
          inspected, and the complete recorded video. It does not call for
          surface locating, total line length, or repair estimates. It is a
          private association&rsquo;s standard, not a law, and the client and
          inspector can change its scope in advance. Treat it as a benchmark,
          and confirm what applies to your inspection.
        </p>

        <h2>Property, inspection date, and inspector information</h2>
        <p>
          Identifying details connect the observations to the right property
          and the right visit. Look for the property address, your name, the
          inspection date, and the inspector and company with contact details.
          Most of the sample reports we reviewed include these, though published
          samples often use placeholder names. Check them before you rely on or
          forward the report. The date matters because the report describes
          conditions on that day only.
        </p>

        <h2>Which sewer-line sections were inspected?</h2>

        <h3>Access point, direction, and footage reference</h3>
        <p>
          The access point is where the camera entered the line, often a
          cleanout outside the house or in the basement. A report should say
          where. It is also useful to know which way the camera traveled, toward
          the street connection or back toward the building, and where the
          footage counter started. Direction and starting point are good
          practice rather than something a standard requires, so check whether
          yours states them.
        </p>
        <p>
          A footage reading is a distance along the pipe from that starting
          point. It is not a marked spot in your yard, and it does not tell you
          how deep the pipe is. Surface position and depth come from separate{' '}
          <ApprovedInlineLink pageId={id('svc-sewer-line-locating')}>sewer line locating</ApprovedInlineLink> work.
        </p>

        <h3>Distance inspected, endpoint, and unreached sections</h3>
        <p>
          The distance inspected is how far the camera actually went. It is not
          necessarily the total length of the line. One sample report described
          roughly 100 feet from the entry point to the main. Another stopped at
          debris partway along the run, which means the rest of that line was
          not seen. A report should say which happened.
        </p>
        <p>
          Under InterNACHI&rsquo;s standard, the report must identify inspected
          and uninspected sections and give the reasons. The standard does not
          require the total line length. Good practice is to state whether the
          intended endpoint was reached, so you do not have to infer it.
        </p>

        <h2>Pipe material, approximate size, and transitions</h2>
        <p>
          Reports commonly name the visible pipe material, such as cast iron or
          plastic. Some also give an approximate diameter, which is less common.
          Where the material changes along the run, a good report notes where. A
          change from one material to another is context, not a defect by
          itself.
        </p>
        <p>
          Identification is by sight, so it should be labeled approximate when
          the inspector cannot be sure. InterNACHI asks for a material
          description when possible, and does not require conclusive
          identification of every material.
        </p>

        <h2>Video, photographs, and references that support the findings</h2>

        <h3>Full recording versus selected images</h3>
        <p>
          The recording is the complete record of the inspection. Photos and
          clips illustrate selected findings, and they are not a substitute for
          it. Under InterNACHI&rsquo;s standard, the client receives the entire
          recorded video as an online link or a physical copy. For help watching
          it, see <ApprovedInlineLink pageId={id('res-read-video')}>how to read your sewer inspection video</ApprovedInlineLink>.
        </p>
        <p>
          Photo counts and video delivery vary by provider. Some sample reports
          show captioned still images, some link to the video, and one states
          that not every concern will have a photo. Ask whether the link
          expires, whether you can download the video, and whether you can share
          it. The standard sets no hosting period, so do not assume permanent
          access.
        </p>

        <h3>Footage readings and timestamps</h3>
        <p>
          Two methods help you find a finding in the recording. A footage
          reading places it along the run. A video timestamp tells you when to
          look in the recording. They are not the same: a timestamp helps you
          find the moment but does not tell you how far along the pipe it was.
        </p>
        <p>
          Good practice is for a report to cross-reference important findings to
          the footage or the time, and to say where the counter began. Treat
          footage as approximate. Decimal precision does not make it surveyed.
        </p>

        <h2>Observed findings, what they may mean, and follow-up</h2>

        <h3>What the inspector saw</h3>
        <p>
          A report may describe roots entering the pipe, debris or grease
          buildup, cracks, offset joints, standing water, and deterioration. Not
          every report will include all of these, and some will include none. An
          offset is a visible misalignment at a joint. Deterioration describes
          visible breakdown of the pipe surface.
        </p>
        <p>
          InterNACHI&rsquo;s standard lists specific conditions to report, with
          thresholds such as offsets over a quarter inch and more than an inch
          of standing water. Those are that standard&rsquo;s reporting
          thresholds, not a nationwide pass or fail rule. A useful finding gives
          the observation, where it was, the supporting image or video
          reference, and what remains uncertain.
        </p>

        <h3>What an observation may mean, and what stays uncertain</h3>
        <p>
          Keep three things apart: what was seen, what it might mean, and what
          is recommended.
        </p>
        <ul>
          <li>
            Standing water is an observation. It can point to a low section or a
            restriction downstream, but a basic camera does not measure slope, so
            the video alone does not confirm a sag or how deep it is.
          </li>
          <li>
            A visible crack or deterioration shows a condition at that spot. It
            does not establish wall thickness, structural strength, or how long
            the pipe will last.
          </li>
          <li>
            A camera can show water visibly entering a pipe. Not seeing any does
            not prove the pipe is watertight.
          </li>
          <li>
            A camera that stops advancing shows the inspection was limited at
            that point. It does not prove the pipe collapsed, and it does not
            show that the rest of the line is fine.
          </li>
        </ul>
        <p>
          Here is a hypothetical entry, not a real finding, to show the
          difference:
        </p>
        <p>
          <strong>Observation:</strong> Standing water was visible from
          approximately 42 to 49 feet, measured from the exterior cleanout.
          Water hid part of the lower pipe wall. See the image and video
          reference.
        </p>
        <p>
          <strong>Possible significance:</strong> A low section or a downstream
          restriction is possible. Slope was not measured, and the hidden
          surfaces could not be fully evaluated.
        </p>
        <p>
          <strong>Suggested follow-up:</strong> Have the restriction and the
          retained water evaluated. Cleaning and reinspection may help, and
          additional measurement would be needed to establish pipe grade.
        </p>

        <h3>Condition summaries and urgency labels</h3>
        <p>
          Many reports sum up findings with labels such as &ldquo;maintenance
          item,&rdquo; &ldquo;further evaluation,&rdquo; or
          &ldquo;moderate.&rdquo; Each provider uses its own labels, and they
          are not a shared scale. Read a label alongside the narrative next to
          it, and ask what it means if the report does not define it. A concern
          documented for monitoring is not the same as a recommendation to
          replace the line.
        </p>

        <h2>Limitations and incomplete inspections</h2>
        <p>
          A report is limited by what the camera could reach and see. Common
          limits include a buried or unavailable cleanout, debris or roots that
          block the camera, poor visibility from condensation or murky water,
          pipe wall hidden under standing water, and side branches the camera
          passed without entering.
        </p>
        <p>
          A good report names the specific limit and what it affected, instead
          of relying only on a generic disclaimer. &ldquo;Not inspected&rdquo;
          does not mean &ldquo;no defects.&rdquo; A camera also does not show the
          soil around the pipe, the thickness of the pipe wall, or how much
          service life remains. InterNACHI requires reasons for uninspected
          areas and states that its inspection is not technically exhaustive.
        </p>
        <p>
          An incomplete inspection does not mean the line failed. It means part
          of the line was not seen. If backups keep coming back, see how
          <ApprovedInlineLink pageId={id('svc-recurring-sewer-backup-diagnosis')}>recurring sewer backup diagnosis</ApprovedInlineLink> approaches the problem.
        </p>

        <h2>Services and deliverables that may be separate</h2>
        <p>
          Some work sits outside a basic inspection: surface locating and depth
          estimates, cleaning, reinspection, and repair proposals. InterNACHI
          expressly does not require locating or marking defects or giving
          repair cost estimates, and it does not list cleaning, depth estimates,
          or reinspection as minimum deliverables.
        </p>
        <p>
          When buildup hides the pipe wall,{' '}
          <ApprovedInlineLink pageId={id('svc-sewer-cleaning')}>sewer cleaning</ApprovedInlineLink> followed by a
          second look may be how the newly exposed surfaces get seen. Cleaning
          and camera work can also be done together, as described under{' '}
          <ApprovedInlineLink pageId={id('svc-sewer-cleaning-camera-inspection')}>sewer cleaning and camera inspection</ApprovedInlineLink>. Keep a recommendation for more work
          separate from a service you have purchased or a quote you have
          received. A recommendation is not a promise that the work is included. If
          a recommendation involves replacing a line, see{' '}
          <ApprovedInlineLink pageId={id('res-replacement-questions')}>
            questions to ask before approving a sewer line replacement
          </ApprovedInlineLink>
          .
        </p>

        <h2>Reports, local programs, and standardized defect coding</h2>
        <p>
          A private inspection report is not automatically a compliance
          document. Some local programs require their own steps. The East Bay
          regional private sewer lateral program in California, for example,
          requires a witnessed pressure test and a certificate in addition to a
          camera evaluation. Confirm local requirements with your sewer
          authority. For a St. Louis-area example, see our guide to{' '}
          <ApprovedInlineLink pageId={id('res-stl-lateral-report')}>the St. Louis sewer lateral report</ApprovedInlineLink>.
        </p>
        <p>
          Standardized defect coding also exists. NASSCO&rsquo;s PACP and LACP
          systems cover pipes and laterals, and some municipal specifications
          require them. A residential report does not use that coding unless it
          was part of the assignment, and a provider&rsquo;s own label such as
          &ldquo;moderate&rdquo; is not a NASSCO grade.
        </p>

        <h2>What you receive from The Sewer Pros</h2>
        <p>
          When a camera is used, you receive the inspection video, and written
          findings are included. The Sewer Pros provides inspection, cleaning,
          and locating services and does not perform sewer repair or
          replacement, so your findings are not the first step toward a repair
          sale. Ask what applies to your visit, including whether locating is
          part of it and how the video is delivered. To see how this fits into a
          home purchase, read about{' '}
          <ApprovedInlineLink pageId={id('svc-pre-purchase-sewer-inspection')}>pre-purchase sewer inspection</ApprovedInlineLink>.
        </p>

        <h2>Report-review checklist</h2>

        <h3>Before you book</h3>
        <ul>
          <li>What will I receive: written findings, the full recording, and any photos?</li>
          <li>How will I get the recording, and does the link expire?</li>
          <li>Which line and endpoint are included, and are branches or in-house drains excluded?</li>
          <li>What happens if the camera cannot finish, and what are the fees or return-visit terms?</li>
          <li>Are cleaning, locating, depth estimates, and reinspection included, optional, or separately priced?</li>
          <li>Are recommendations kept separate from any repair pricing?</li>
          <li>Can I share the findings and recording to get a second opinion?</li>
        </ul>

        <h3>When you receive it</h3>
        <ul>
          <li>Confirm the property, inspection date, inspector, and company.</li>
          <li>Open the recording and confirm it covers the whole inspection, not highlights.</li>
          <li>Find the access point, how far the camera went, and where it stopped.</li>
          <li>Match each significant finding to a footage reading, a timestamp, or an image.</li>
          <li>Read the limitations before you rely on a reassuring summary.</li>
          <li>Separate what was observed, what is suspected, and what is recommended.</li>
          <li>Find out who arranges any follow-up work and whether it costs extra.</li>
        </ul>
      </>
    ),
    faq: [
      {
        question: 'Should the report include a repair quote?',
        answer: (
          <p>
            It can, but the observations and the recommendation should be
            distinguishable. Being able to separate what was seen from what
            someone proposes doing about it is what makes a second opinion
            possible.
          </p>
        ),
      },
      {
        question: 'Is a video-only sewer inspection enough?',
        answer: (
          <p>
            Not if you want the full package described in InterNACHI&rsquo;s
            sewer-scope standard, which calls for written findings, a statement
            of inspected and uninspected sections, and the complete recorded
            video. Confirm the provider&rsquo;s deliverables before booking
            instead of assuming every camera service includes the same things.
          </p>
        ),
      },
      {
        question: 'Should I get the full recording, and how long will the link work?',
        answer: (
          <p>
            InterNACHI&rsquo;s standard calls for the entire recording, not just
            selected clips, delivered as an online link or a physical copy. It
            sets no hosting period, so ask about expiration, accounts,
            downloads, and sharing. A visible video link in a report does not
            prove lifetime access.
          </p>
        ),
      },
      {
        question: 'Is a sewer camera report part of a standard home inspection?',
        answer: (
          <p>
            Do not assume so. A general home inspection standard can exclude
            underground items, and InterNACHI describes sewer scope as an
            ancillary service. Confirm the sewer camera work is separately
            agreed and what it covers. For how this fits a purchase, see the
            pages for <ApprovedInlineLink pageId={id('aud-home-inspectors')}>home inspectors</ApprovedInlineLink> and{' '}
            <ApprovedInlineLink pageId={id('aud-home-buyers')}>home buyers</ApprovedInlineLink>.
          </p>
        ),
      },
      {
        question: 'Does the report certify compliance with local sewer rules?',
        answer: (
          <p>
            Not necessarily. Local programs may require their own tests,
            submissions, or an official present at the inspection. Check with
            your local sewer authority about what applies to your property. In
            the St. Louis area, start with{' '}
            <ApprovedInlineLink pageId={id('svc-stl-sewer-lateral-inspection-reporting')}>sewer lateral inspection and reporting</ApprovedInlineLink> and the guides to the{' '}
            <ApprovedInlineLink pageId={id('res-stl-city-program')}>city</ApprovedInlineLink> and{' '}
            <ApprovedInlineLink pageId={id('res-stl-county-program')}>county</ApprovedInlineLink> programs.
          </p>
        ),
      },
      {
        question: 'Can another contractor use the report for a second opinion?',
        answer: (
          <p>
            It can serve as supporting evidence, especially when findings are
            matched to footage or images and the inspected section is clear.
            Check the sharing and third-party use terms first. For an
            independent evaluation before approving major work, see{' '}
            <ApprovedInlineLink pageId={id('svc-independent-sewer-second-opinion')}>
              independent sewer inspection and second opinion
            </ApprovedInlineLink>
            . Another contractor is not required to accept the conclusions, and may want
            their own look. For how this plays out in a transaction, see the
            page for <ApprovedInlineLink pageId={id('aud-real-estate-agents')}>real estate agents</ApprovedInlineLink>.
          </p>
        ),
      },
      {
        question: 'Does an incomplete inspection mean the line failed?',
        answer: (
          <p>
            No. Access, bends, debris, or equipment limits can stop a camera.
            The report should state where it stopped and what was not seen. It
            should not treat an incomplete run as a collapse, or the unreached
            line as satisfactory. If buildup was the limit,{' '}
            <ApprovedInlineLink pageId={id('svc-sewer-cleaning-camera-inspection')}>sewer cleaning and camera inspection</ApprovedInlineLink> covers cleaning the line and looking
            again.
          </p>
        ),
      },
      {
        question: 'What does a sewer camera inspection show?',
        answer: (
          <p>
            A <ApprovedInlineLink pageId={id('svc-sewer-camera-inspection')}>sewer camera inspection</ApprovedInlineLink>{' '}
            can show blockages, root intrusion, separated joints, offsets,
            cracks, standing water, and other visible pipe conditions, and
            where along the line each one sits. It does not measure slope or
            wall thickness, and it does not show the soil outside the pipe.
          </p>
        ),
      },
    ],
    relatedPageIds: [
      id('res-read-video'),
      id('svc-sewer-camera-inspection'),
      id('svc-pre-purchase-sewer-inspection'),
      id('svc-sewer-line-locating'),
      id('svc-sewer-cleaning'),
      id('core-faq'),
    ],
    ctaForm: true,
    ctaBackground: {
      src: '/images/brand/resources/the-sewer-pros-sewer-camera-inspection-report-article-final-cta-16x9.webp',
      alt: 'Camera monitor showing the inside of a pipe, with a blank clipboard and a closed notebook on a counter in front of it',
      source: 'Generated image (DEC-145), owner-approved. Scene, not a photograph of a Sewer Pros job.',
    },
    cta: {
      title: 'Want the condition documented?',
      body: (
        <>
          <p>
            A sewer camera inspection report is only as useful as what it
            documents. A complete report identifies the property and the
            inspection date, shows where the camera entered the line and how
            far it traveled, ties each finding to video or a photo, and says
            what could not be seen.
          </p>
          <p>Before you rely on any report, check that it:</p>
          <ul className="flex flex-col gap-2">
            {[
              'separates what was observed from what is suspected and what is recommended',
              'states its limitations and any section the camera could not reach',
              'comes with the full recording, not only highlights',
            ].map((point) => (
              <li key={point} className="flex gap-2">
                <span aria-hidden="true" className="opacity-70">
                  -
                </span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <p>
            With The Sewer Pros, a camera inspection comes with the inspection
            video and written findings. We provide inspection, cleaning, and
            locating, and we do not perform sewer repair or replacement, so
            your findings are not the first step toward a repair sale.
          </p>
          <p>
            Use the form to request an inspection and tell us what you want
            documented.
          </p>
        </>
      ),
    },
    relatedAsCards: true,
    relatedDescriptions: {
      [id('res-read-video')]: RES_READ_VIDEO_DESCRIPTION,
      [id('core-faq')]:
        'Answers about sewer camera inspections, sewer cleaning, hydro jetting, and pre-purchase inspections.',
    },
  },

  [id('res-read-video')]: {
    metaDescription:
      'How to read a sewer camera inspection video: confirm what was inspected, read the distance counter, spot findings, and know what footage cannot prove.',
    dateModified: '2026-11-23',
    hero: {
      eyebrow: 'Guide',
      title: 'How to Read a Sewer Camera Inspection Video',
    },
    directAnswer: (
      <p>
        To read a sewer camera inspection video, first confirm which pipe the camera inspected, where it went in, which way it traveled, and how far it got. Then read the on-screen distance from its starting point, check how clearly you can see, and describe what is visible before deciding what it means. Footage shows visible condition. Cause, leakage, slope, and repair need more evidence.
      </p>
    ),
    body: (
      <>
        <p>The footage from a <ApprovedInlineLink pageId={id('svc-sewer-camera-inspection')}>sewer camera inspection</ApprovedInlineLink> is evidence about the part of the pipe the camera could reach and see, on the day it was recorded. It is easy to misread. A dark line may be a shadow, a pool of water may be a normal result of running water, and a number on the screen may not mean what it seems to. This guide keeps three things apart: what the picture shows, what the on-screen numbers measure, and what the inspector has actually confirmed.</p>
        <p>It describes how to review any inspection video. It is not a legal requirement, and it makes no claim about a particular inspection.</p>
        <h2>Start with what was inspected</h2>
        <p>Before judging any defect, work out which pipe you are looking at. Watch the opening footage and note:</p>
        <ul>
        <li>The address, the date, and who did the inspection.</li>
        <li>The access point, such as a particular exterior cleanout.</li>
        <li>The direction the camera traveled and where the inspection was meant to end.</li>
        <li>Whether there are several clips, separate runs, or a pass in the opposite direction.</li>
        </ul>
        <p>Treat the access point, the direction, and the route as three separate questions. A cleanout&rsquo;s position in the yard does not tell you which way the camera went, because a line can be inspected toward the street, toward the house, or both. Also ask whether you are watching the camera go in or come out. A pass on the way out often shows the same pipe again, sometimes more steadily, rather than new pipe.</p>
        <p>Then watch the end of the video, not just the last frame. The camera may have reached the intended connection, stopped at an obstruction or sharp bend, lost visibility, or been pulled back before the section was finished. The last number on the counter does not prove the whole line was inspected. A section the camera could not reach or see is unknown, not fine.</p>
        <p>A simple route sketch helps. It should show the access point, any branches, and where the inspection ended, and it should say whether the route is inferred from the video or confirmed by locating from the surface.</p>
        <h2>What the numbers on the screen mean</h2>
        <p>Three different references can appear in the same video, and they are not interchangeable.</p>
        <ul>
        <li><strong>Playback position:</strong> where you are in the video file. Useful for finding a moment again.</li>
        <li><strong>Date and time:</strong> the equipment clock. Worth checking, because it may not be set correctly.</li>
        <li><strong>Distance counter:</strong> how much cable has been fed into the line, in feet or meters.</li>
        </ul>
        <p>When you note a finding, write down both the playback position and the distance, for example &ldquo;video 4:18, counter 37.6 ft, branch opening.&rdquo; That identifies the exact frame without assuming the counter alone is enough.</p>
        <h3>Where did zero start?</h3>
        <p>A distance reading only means something from a stated starting point. Zero might be the cleanout opening, a point partway down the access pipe, or the start of the horizontal run. Counters can be reset partway through, and slack cable can make the number run ahead of the camera. Ask where zero was set, whether there were resets or separate runs, and whether the units are feet or meters. A decimal on the screen looks precise, but that does not make the measurement exact.</p>
        <h3>Distance is not location or depth</h3>
        <p>&ldquo;42 ft&rdquo; means 42 units of cable from the starting point. It does not mean 42 feet in a straight line across the yard, and it says nothing about how deep the pipe is. Bends and vertical sections make the straight-line distance shorter than the cable distance. Finding a point from above ground is a separate step that uses a transmitter in the pipe and a receiver on the surface, and it has its own limits. If a decision depends on where a problem sits or how deep it is, ask for <ApprovedInlineLink pageId={id('svc-sewer-line-locating')}>sewer line locating</ApprovedInlineLink> and a sketch tied to fixed features such as a corner of the house, rather than measuring across the lawn from the video.</p>
        <h2>Check the picture before you judge the pipe</h2>
        <p>Image quality changes what you can conclude. Pause on a steady frame, then compare the same area as the camera approaches and as it leaves.</p>
        <ul>
        <li><strong>Bright patches or washed-out nearby walls:</strong> glare may be hiding surface detail.</li>
        <li><strong>A dark far end with a bright foreground:</strong> a lighting limit. Darkness alone does not mean a blockage.</li>
        <li><strong>Haze, smears, or constant blur:</strong> the lens may be dirty or fogged.</li>
        <li><strong>Murky water or lost wall detail:</strong> the submerged part of the pipe wall may not be assessable in that stretch.</li>
        </ul>
        <p>Water needs context too. It may be there because of a defect, because of a restriction downstream, or because water was run on purpose during the inspection. Ask whether water was running and whether that stretch was looked at again after cleaning or after the lens was wiped.</p>
        <p>Orientation matters as well. A rotating picture does not mean the pipe is twisting, and &ldquo;up&rdquo; on the screen is not always the top of the pipe. Some cameras keep the image upright and some do not, so a feature&rsquo;s position around the pipe, such as &ldquo;at the 10 o&rsquo;clock position,&rdquo; is only reliable when the camera&rsquo;s orientation is known.</p>
        <h2>Normal features are not defects</h2>
        <p>Pipes have parts that look dramatic on camera and are simply how the line was built.</p>
        <ul>
        <li><strong>Joints:</strong> regular seams where pipe sections meet. A joint is not a crack. What matters is whether it is open, stepped, or has roots or deposits at it.</li>
        <li><strong>Bends:</strong> changes in the pipe&rsquo;s path. A turn in the picture can be a fitting, not damage.</li>
        <li><strong>Branch connections:</strong> another pipe entering the line, often at a tee or wye. Ask which pipe it serves and whether the camera actually went into it.</li>
        <li><strong>Material transitions:</strong> a change in pipe appearance at a connection. It may be original construction, an earlier repair, or a lining. It is information, not a fault.</li>
        </ul>
        <p>Do not name a pipe material from its color alone. Ask what visual evidence supports it.</p>
        <h2>Common findings: what you see and what it does not prove</h2>
        <p>For each of these, the footage can support a description of what is visible and where. On its own it usually cannot support a conclusion about cause, size, leakage, or what to do. Each note below pairs the visible cue with that limit.</p>
        <h3>Roots</h3>
        <p><strong>What you see:</strong> fine hair-like strands, thicker rope-like cords, or a tangled mass reaching into the pipe, ideally with a visible point where they enter. Stringy debris, wipes, or material snagged on a joint can look similar, so an unclear shape is better described as fibrous material until a closer look resolves it.</p>
        <p><strong>What the video alone does not establish:</strong> which tree they came from, how far the roots extend outside the pipe, whether they caused the opening or found one that was already there, or how strong the remaining pipe is. A mass of roots can also hide the opening it enters through. Cleaning followed by a second look at the same spot can show the joint or wall underneath.</p>
        <h3>Grease and other soft deposits</h3>
        <p><strong>What you see:</strong> an attached coating, lobes, or hanging buildup that narrows the passage with irregular material. The useful first question is whether the material is stuck to the wall or loose on the bottom. A waxy or pale look is not a chemical identification.</p>
        <p><strong>What the video alone does not establish:</strong> the exact makeup, how thick it is behind the visible surface, which fixture produced it, or the condition of the wall underneath. Cleaning and a repeat inspection can show what was covered.</p>
        <h3>Mineral scale and corrosion-related buildup</h3>
        <p><strong>What you see:</strong> rough crusts, nodules, or ridges attached to the wall. Grease, ordinary pipe texture, mortar, or repair material can look similar, and similar color does not mean similar material.</p>
        <p><strong>What the video alone does not establish:</strong> the chemistry of the deposit, how much wall remains, or how fast it is changing. Knowing the pipe material and cleaning before a second look helps. Measuring wall loss takes testing that goes beyond the picture.</p>
        <h3>Sediment and loose debris</h3>
        <p><strong>What you see:</strong> a bed of fine particles, grit, flakes, or distinct objects on the bottom of the pipe. If it shifts between frames, it is loose rather than attached. The normal water surface, a protruding connection, or a dirty lens can be mistaken for it.</p>
        <p><strong>What the video alone does not establish:</strong> where it came from, whether it proves soil is entering the pipe, whether it is pieces of broken pipe, or what the hidden bottom looks like. If sediment keeps returning after cleaning, the next question is what is feeding it or whether a low section is collecting it.</p>
        <h3>Offset joints</h3>
        <p><strong>What you see:</strong> two pipe sections meeting with a step or ledge instead of lining up smoothly. This is sideways displacement, which is different from a gap between pipe ends. A normal socket, a change in pipe size, a bend, or an off-center camera view can look similar.</p>
        <p><strong>What the video alone does not establish:</strong> how large the offset is from a single angled frame, when it moved, whether it is still moving, or whether it leaks. Viewing the joint square-on and from both directions helps. Measuring it takes a calibrated method.</p>
        <h3>Separated or open joints</h3>
        <p><strong>What you see:</strong> a visible gap along the pipe between neighboring sections. A joint can be both open and offset, and those are separate observations. Normal joint recesses, shadows, sealant, and cracks near but not at the joint can look alike.</p>
        <p><strong>What the video alone does not establish:</strong> that every dark ring is a gap, whether the joint is watertight, how big any cavity outside the pipe is, or why it opened. Visible soil, a void, roots, or water coming in at the joint is stronger evidence than the dark ring alone. When leakage is the real question, a leakage test can add evidence the camera cannot.</p>
        <h3>Cracks and fractures</h3>
        <p><strong>What you see:</strong> a line in the pipe surface that stays in place as the camera moves, sometimes with visible edges if it has opened. Note whether it runs along the pipe, around it, or branches. Mold seams, scratches, stains, liner wrinkles, and shadows can look like cracks.</p>
        <p><strong>What the video alone does not establish:</strong> whether it goes all the way through the wall, how wide it is without calibration, whether it is active, or how much load the pipe can carry. A crack alone does not prove leakage. Water visibly crossing it, or a suitable test, is stronger evidence.</p>
        <h3>Missing sections of pipe wall</h3>
        <p><strong>What you see:</strong> a break in the expected outline of the wall, with broken edges, displaced pieces, or a clear opening. A broken wall, a hole, and visible soil or void outside the pipe are different observations. A normal branch opening, a liner end, or deep shadow can be mistaken for missing wall.</p>
        <p><strong>What the video alone does not establish:</strong> how big any cavity outside the pipe is, how much soil has moved, what the remaining pipe can carry, or why it happened. A black opening is not proof of a void. Answering those questions can take investigation outside the pipe.</p>
        <h3>Deformation and collapse</h3>
        <p><strong>What you see:</strong> flattening, an egg-shaped distortion, or inward bulging compared with the pipe&rsquo;s expected round shape. A collapse shows failed structure. A camera that cannot pass means the inspection stopped there, not necessarily that the pipe collapsed. Angled views, bends, deposits, and liner wrinkles can fool the eye.</p>
        <p><strong>What the video alone does not establish:</strong> a percentage of deformation from one uncalibrated frame, the cause, the loading above the pipe, or how soon anything might fail. Repeat views, the known pipe material, and measurement help, and inspecting from the opposite end can show what lies past a stopping point.</p>
        <h3>Standing water and suspected low sections</h3>
        <p><strong>What you see:</strong> a waterline, or a stretch where the camera enters water, travels through it, and comes out. Record where the water starts and ends and how clear it is, separately from any theory about why it is there. Running fixtures, test water, a restriction downstream, or the camera itself sitting low can all explain water.</p>
        <p><strong>What the video alone does not establish:</strong> a confirmed low spot from one wet frame, the grade, how deep or long the dip is, or what the submerged wall looks like. A basic camera does not measure slope. Confirming a low section takes controlled conditions and surveyed elevation or profile data. If backups keep returning, the footage is one input to diagnosing recurring backups, alongside the symptoms and the history of the line.</p>
        <h2>What a sewer video cannot prove by itself</h2>
        <p>Some conclusions get stated as fact from footage that cannot support them. Watch for these.</p>
        <ul>
        <li><strong>&ldquo;The pipe looks clean, so it is watertight.&rdquo;</strong> No visible defect is not the same as no leakage. A camera shows the surface it can see. Where tightness matters, a leakage test is a separate method.</li>
        <li><strong>&ldquo;There is a crack, so it is leaking.&rdquo;</strong> A crack is a visible line. Leakage is water crossing the pipe wall.</li>
        <li><strong>&ldquo;There is water, so there is a belly.&rdquo;</strong> Water is the observation. A low section is one possible explanation.</li>
        <li><strong>&ldquo;The counter says 30 feet, so dig 30 feet from the cleanout.&rdquo;</strong> Cable distance is not a surface position. Locating from above ground and a sketch tied to fixed features come first.</li>
        <li><strong>&ldquo;The video shows the pipe&rsquo;s slope or depth.&rdquo;</strong> Neither is established by the picture alone.</li>
        <li><strong>&ldquo;The camera shows how many years are left.&rdquo;</strong> Footage shows current visible condition. Estimating remaining life takes more information and carries real uncertainty.</li>
        <li><strong>&ldquo;There are roots, so the whole line must be replaced.&rdquo;</strong> Roots are an observation, not a repair plan. Where they enter, what the joint underneath looks like after cleaning, how much of the line is affected, and how often problems return all matter.</li>
        <li><strong>&ldquo;The camera stopped, so the rest is probably fine.&rdquo;</strong> Only the part that was inspected has been evaluated. Everything past an obstruction is unknown.</li>
        <li><strong>&ldquo;That close-up looks terrible, so it is urgent.&rdquo;</strong> A close-up can document a real defect, but how big it looks is not how big it is, and appearance alone is not a structural or urgency assessment.</li>
        </ul>
        <p>None of this means a camera cannot find leaks. It can document water visibly entering the pipe. What it cannot do is certify every leakage condition from appearance.</p>
        <h2>Four kinds of statements in written findings</h2>
        <p>When you read written findings, or when an inspector walks you through the video, try to sort each statement into one of four kinds.</p>
        <ul>
        <li><strong>Observation:</strong> what is visible and where, such as &ldquo;branching material extends into the pipe at 37.6 ft.&rdquo;</li>
        <li><strong>Inferred cause:</strong> what the inspector thinks it is, and why.</li>
        <li><strong>Severity:</strong> how much it matters, based on extent, measurement, and symptoms.</li>
        <li><strong>Recommendation:</strong> what to do next, and why.</li>
        </ul>
        <p>A recommendation should trace back through the other three to something you can find in the video. For what written findings should contain overall, see the companion guide on <ApprovedInlineLink pageId={id('res-camera-report')}>what a sewer camera inspection report includes</ApprovedInlineLink>.</p>
        <h2>Questions to ask about the footage</h2>
        <p>If something in the video matters to a decision, these questions turn a screen full of numbers into usable information.</p>
        <ul>
        <li>Which access point did you use, which way did the camera travel, and what feature shows where it ended?</li>
        <li>Which sections or surfaces could you not see, and does your conclusion depend on assuming what is in them?</li>
        <li>Where was the distance counter set to zero, and were there resets, separate runs, or a pass in the other direction?</li>
        <li>Is the route on the sketch inferred from the video or confirmed by locating?</li>
        <li>For each finding that affects the recommendation, what are the video position, the counter reading, and the still image?</li>
        <li>Was the view limited by water, glare, roots, deposits, or a dirty lens, and was that stretch checked again after cleaning?</li>
        <li>Which dimensions were measured and which were estimated?</li>
        <li>What are you reading directly from the video, what are you inferring, and what would change your conclusion?</li>
        </ul>
        <h2>When cleaning and a second look can help</h2>
        <p>Sometimes the footage cannot answer the question because something is in the way. Buildup, roots, or sediment can hide the wall, a joint, or the bottom of the pipe. In those cases, <ApprovedInlineLink pageId={id('svc-sewer-cleaning')}>sewer cleaning</ApprovedInlineLink> followed by a second look at the same stretch can show what was underneath. <ApprovedInlineLink pageId={id('svc-sewer-cleaning-camera-inspection')}>Sewer cleaning and camera inspection</ApprovedInlineLink> are also available as one service.</p>
        <p>Cleaning is not automatically safe or enough for every damaged pipe, so the method should suit the pipe&rsquo;s condition. It also helps to keep the original footage showing the obstruction, so the before and after can be compared.</p>
        <h2>Weighing a recommendation against the footage</h2>
        <p>A defect name does not pick a repair. Whatever is proposed should connect back to where the problem is, how far it extends, how much of the line was actually seen, and what is still uncertain. Different next steps need different evidence:</p>
        <ul>
        <li><strong>Monitoring:</strong> a baseline recording, a review plan, and what would trigger action.</li>
        <li><strong>More inspection or testing:</strong> a specific unanswered question and how the answer could change the decision.</li>
        <li><strong>Localized repair:</strong> a defined affected area, a confirmed surface location, and an adequate look at the rest of the line.</li>
        <li><strong>Lining:</strong> the problem it is meant to address, the condition of the existing pipe, branches and ends, and a plan to inspect before and after.</li>
        <li><strong>Replacement:</strong> the extent, and why maintenance, a localized repair, or other options would not address the documented problem.</li>
        </ul>
        <p>The Sewer Pros does not offer sewer repair or replacement. This section is here so you can check whether any proposal, from anyone, follows from the evidence. If you already have a video and a recommendation and want someone else to look at both, an <ApprovedInlineLink pageId={id('svc-independent-sewer-second-opinion')}>independent sewer second opinion</ApprovedInlineLink> is one way to do that, and <ApprovedInlineLink pageId={id('res-replacement-questions')}>questions to ask before approving a sewer replacement</ApprovedInlineLink> covers what to ask first.</p>
        <h2>If you are buying a home</h2>
        <p>If the video is part of a purchase, the same checks apply with a deadline attached. Confirm the inspected section, the endpoint, and anything the camera could not reach before you rely on the footage for a decision. A <ApprovedInlineLink pageId={id('svc-pre-purchase-sewer-inspection')}>pre-purchase sewer inspection</ApprovedInlineLink> is built around this situation.</p>
        <h2>Formal condition grades</h2>
        <p>Some utilities and contractors code and grade pipe condition using standardized systems, such as the PACP and LACP programs from NASSCO. These are useful planning tools, but they are not required for every residential inspection, and a grade is not a repair order or a deadline. If you see a grade, ask which grade it is, who assigned it, and what it summarizes. A formal-looking number does not remove errors in what was observed.</p>
        <h2>What you receive from The Sewer Pros</h2>
        <p>When a camera is used, you receive the inspection video. Written findings are included. Use the checks above when you review them, and ask about anything that is not clear.</p>
        <h2>If you are unsure what the footage shows</h2>
        <p>Ask whoever made the recording to talk you through it against the video positions and distances. If the reading matters to a significant decision, a second look at the same footage is reasonable.</p>
      </>
    ),
    faq: [
      {
        question: 'The video looks bad. Does that mean the line is failing?',
        answer: (
          <p>
            Not necessarily. Sewer footage frequently looks worse than the condition warrants: the camera is close, the environment is wet, and normal wear reads dramatically. What matters is specific observations at specific distances, not the general impression.
          </p>
        ),
      },
      {
        question: 'How do I read the distance counter on a sewer camera video?',
        answer: (
          <p>
            The counter usually shows how much cable has been fed into the line, in feet or meters, from a starting point the operator sets. Ask where zero was set and whether the counter was reset. Note the video position along with the distance so you can find each finding again.
          </p>
        ),
      },
      {
        question: 'Does the distance on the video tell me where to dig?',
        answer: (
          <p>
            No. The counter measures cable travel along the pipe, not a spot on the surface, and bends and vertical sections make the two differ. Locating the camera from above ground gives a surface position and an estimated depth, and it has limits of its own. See <ApprovedInlineLink pageId={id('svc-sewer-line-locating')}>more about sewer line locating</ApprovedInlineLink>, and confirm the location before anyone excavates.
          </p>
        ),
      },
      {
        question: 'Does standing water in a sewer video mean the pipe is sagging?',
        answer: (
          <p>
            Not by itself. Water is what you can see, and a low section is one possible reason for it. Running fixtures, a restriction downstream, or the camera sitting low can also explain it. Confirming a sag takes controlled conditions and grade or profile data, because a basic camera does not measure slope.
          </p>
        ),
      },
      {
        question: 'Does a crack on the video mean the pipe is leaking?',
        answer: (
          <p>
            Not necessarily. A crack is a visible line in the pipe. Leakage is water moving through the wall. Water visibly crossing the crack is stronger evidence, and a leakage test can check a joint or section that looks dry on camera.
          </p>
        ),
      },
      {
        question: 'Do roots in the video mean I need a new sewer line?',
        answer: (
          <p>
            No. Roots are an observation, not a repair plan. What matters is where they enter, what the joint or wall looks like once they are cleared, how much of the line is affected, and how often the problem returns. Before approving a replacement, see <ApprovedInlineLink pageId={id('res-replacement-questions')}>questions to ask before approving a sewer replacement</ApprovedInlineLink>.
          </p>
        ),
      },
      {
        question: 'Why does my sewer video look dark, blurry, or washed out?',
        answer: (
          <p>
            Several things affect the picture: glare from the camera light on wet or pale surfaces, a dim far end of the pipe, a dirty or fogged lens, and water. These are viewing limits, not necessarily pipe damage. A stretch that was hard to see should be described as not assessed, not as clear, and may be worth a second look after cleaning or after the lens is wiped.
          </p>
        ),
      },
      {
        question: 'How do I know the camera inspected the whole line?',
        answer: (
          <p>
            Look for an identified endpoint, such as a connection or structure, and a clear statement of where the inspection stopped and why. The last number on the counter is not proof. Ask which sections were not reached or could not be seen, since those are unknown, not clear.
          </p>
        ),
      },
      {
        question: 'Can I get a second opinion on a sewer video I already have?',
        answer: (
          <p>
            Yes. Someone else can review the footage and any written findings and tell you what is visible, what is uncertain, and whether the recommendation follows from it. An <ApprovedInlineLink pageId={id('svc-independent-sewer-second-opinion')}>independent sewer second opinion</ApprovedInlineLink> is one way to do this.
          </p>
        ),
      },
      {
        question: 'Can a sewer video tell me how many years the pipe has left?',
        answer: (
          <p>
            No. Footage shows visible condition now. Estimating remaining life takes the pipe material, age, repair history, extent of any defects, operating conditions, and sometimes testing, and it still carries real uncertainty. Be cautious about a precise number drawn from a video alone.
          </p>
        ),
      },
      {
        question: 'How should I use a sewer video when buying a house?',
        answer: (
          <p>
            Confirm what was inspected and what was not, then check each finding against its video position and distance. A clean-looking video of a partial run is not a clean line. See <ApprovedInlineLink pageId={id('aud-home-buyers')}>home buyer information</ApprovedInlineLink> or <ApprovedInlineLink pageId={id('svc-pre-purchase-sewer-inspection')}>pre-purchase sewer inspection</ApprovedInlineLink>.
          </p>
        ),
      },
      {
        question: 'What does a sewer camera inspection show?',
        answer: (
          <p>
            It shows the visible inside of the accessible pipe on video: standing water, joints that are separated or misaligned, roots or material entering the pipe, and changes in the pipe&rsquo;s shape or surface, along with where along the line each one is. It cannot show wall thickness, soil support, or the outside of the pipe.
          </p>
        ),
      },
      {
        question: 'How does a sewer camera inspection work?',
        answer: (
          <p>
            A camera is fed into the line through an access point such as a cleanout and travels along the inside of the pipe, lit from the head, while the picture is recorded. The findings apply only to the length the camera reached.
          </p>
        ),
      },
    ],
    relatedPageIds: [
      id('res-camera-report'),
      id('svc-sewer-camera-inspection'),
      id('svc-sewer-line-locating'),
      id('svc-independent-sewer-second-opinion'),
      id('res-replacement-questions'),
      id('svc-pre-purchase-sewer-inspection'),
    ],
    relatedTrailingPageIds: [id('core-faq')],
    relatedImageFromPathname: {
      [id('svc-independent-sewer-second-opinion')]:
        '/compare/independent-sewer-inspection-vs-repair-company/',
    },
    relatedAsCards: true,
    relatedDescriptions: {
      [id('res-camera-report')]: RES_CAMERA_REPORT_DESCRIPTION,
      [id('res-replacement-questions')]: RES_REPLACEMENT_QUESTIONS_DESCRIPTION,
      // Same approved line the audience pages use for this service.
      [id('svc-independent-sewer-second-opinion')]:
        'Review the inspection report or video you already have.',
    },
    ctaForm: true,
    cta: {
      title: 'Want the condition documented?',
      body: (
        <>
          <p>
            A sewer camera video is evidence about the part of the pipe the
            camera could reach and see, on the day it was recorded. Reading it
            well starts with what was inspected: where the camera went in,
            which way it traveled, and how far it got.
          </p>
          <p>Before you rely on any footage, check that:</p>
          <ul className="flex flex-col gap-2">
            {[
              'the starting point of the distance counter is clear, and distance is read as a position along the pipe, not a spot or a depth at the surface',
              'you can tell normal features, such as joints and bends, from defects, and what was observed from what is inferred and what is recommended',
              'any part the camera could not see is stated, because only the part that was inspected has been evaluated',
            ].map((point) => (
              <li key={point} className="flex gap-2">
                <span aria-hidden="true" className="opacity-70">
                  -
                </span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <p>
            With The Sewer Pros, a camera inspection comes with the inspection
            video and written findings. We provide inspection, cleaning, and
            locating, and we do not perform sewer repair or replacement, so
            your findings are not the first step toward a repair sale.
          </p>
          <p>
            Use the form to request an inspection and tell us what you want
            documented.
          </p>
        </>
      ),
    },
  },

  /* Questions to ask before approving a sewer line replacement (DEC-158; reworked 2026-11-23).
     Evidence-first, not a cost page: no price, statistic, brand or red-flag language aimed at contractors.
     Two links to the second opinion page (body "second look" section and FAQ 10). Not legal advice. */
  [id('res-replacement-questions')]: {
    seoTitle: 'Questions to Ask Before Approving Sewer Line Replacement',
    metaDescription:
      'Ten questions to ask before approving a sewer line replacement: the evidence, alternatives, scope and records to ask for in writing.',
    dateModified: '2026-11-23',
    hero: {
      eyebrow: 'Resource',
      title: 'Questions to Ask Before Approving a Sewer Line Replacement',
    },
    directAnswer: (
      <p>
        Before approving a sewer line replacement, ask for a written record that ties the proposed work to the actual condition of your pipe: the inspection video, a log of each defect with its location and length, a statement of what was not inspected, and the reason replacement was chosen over cleaning, monitoring, a localized repair or lining. Finding a defect does not by itself show that the whole line must be replaced, and replacement can still be the right answer when the evidence supports it.
      </p>
    ),
    body: (
      <>
        <p>If you have been told your sewer line needs to be replaced, the next step is not a quick yes or no. It is a set of questions about the evidence behind the recommendation. Replacement can be the right answer. This guide helps you check whether a proposal follows from what was actually found in the pipe, and what to get in writing before you approve it.</p>
        <p>The Sewer Pros does not offer sewer repair or replacement. This guide is educational: it covers the questions and records that let you compare proposals on the same basis, and it does not judge any contractor. It is general information, not legal, financial, insurance or engineering advice, and rules about permits, ownership, licensing and warranties vary by address and by contract.</p>
        <p>Two companion guides cover the evidence itself. <ApprovedInlineLink pageId={id('res-read-video')}>How to read a sewer camera inspection video</ApprovedInlineLink> explains what footage shows and what it cannot prove, and <ApprovedInlineLink pageId={id('res-camera-report')}>what a sewer camera inspection report should include</ApprovedInlineLink> explains what written findings should contain. This guide picks up at the decision to approve work.</p>
        <h2>Start with observation versus recommendation</h2>
        <p>An observation is something visible and specific, such as roots entering at a joint. A recommendation, such as replacing the entire lateral, needs added reasoning about severity, how far the problem extends, what else could be done and what remains unknown. A clear proposal shows how it gets from the first to the second. The questions below follow the order most people face the decision in.</p>
        <h2>1. What exactly is wrong, where is it, and how much of the line was inspected?</h2>
        <p>A backup, a visible defect or a camera that could not pass does not show that the whole line needs replacing. A recommendation should separate confirmed damage from pipe that was obscured or never seen.</p>
        <p>A documented answer includes:</p>
        <ul>
          <li>A copy of the full inspection video that you can keep, showing the property, the date, the entry point, the direction of travel and a distance reference.</li>
          <li>A written log of each defect with its type, severity and location, and for a long defect, where it starts and ends.</li>
          <li>The condition of the pipe on either side of each defect, and whether the camera reached the public main.</li>
          <li>A plain statement of what could not be seen because of water, roots, debris or an early stop.</li>
        </ul>
        <p>If the answer is incomplete, useful follow-ups are: where in the recording can I see this defect, what supports the conclusion about pipe beyond where the camera stopped, and would safe cleaning, another access point or locating settle the uncertainty. Cleaning is not always a safe first step on weakened pipe, so ask whether it could do harm. A <ApprovedInlineLink pageId={id('svc-sewer-cleaning-camera-inspection')}>sewer cleaning followed by a camera inspection</ApprovedInlineLink> can show surfaces that buildup or roots hid on a first pass, and a current <ApprovedInlineLink pageId={id('svc-sewer-camera-inspection')}>sewer camera inspection</ApprovedInlineLink> gives a fresh baseline when existing footage is old or incomplete.</p>
        <p>A camera shows the inside of the pipe. It does not by itself measure wall strength, soil support or watertightness, so conclusions about hidden conditions should say what was observed, what was inferred and what would need another test.</p>
        <h2>2. Why is replacement preferable to cleaning, monitoring, a localized repair or lining?</h2>
        <p>Restoring flow and correcting the cause are different goals. Cleaning can be enough for deposits in serviceable pipe, while a structural or alignment problem may need other work. Roots, age, pipe material, a crack or a localized collapse are not automatic reasons to replace the full length.</p>
        <p>Ask what each reasonable option would and would not do:</p>
        <ul>
          <li><strong>Cleaning</strong> <ApprovedInlineLink pageId={id('svc-sewer-cleaning')}>removes obstructions</ApprovedInlineLink> and can restore flow. It does not rebuild missing pipe, realign a joint or correct a sag.</li>
          <li><strong>Monitoring</strong> means watching a condition over time. It needs a stated reason it is reasonable and a stated change that would trigger action.</li>
          <li><strong>Localized repair</strong> corrects a defect at a defined location and leaves the surrounding pipe in place. It does not address separate problems elsewhere in the line.</li>
          <li><strong>Lining</strong> forms a new wall inside the existing pipe over a defined length. The old pipe stays, and conditions such as an obstruction, a collapse or a sag may need separate correction first.</li>
          <li><strong>Partial replacement</strong> installs new pipe over part of the route. The pipe that stays, and the transitions to it, still matter.</li>
          <li><strong>Full replacement</strong> renews the whole defined run. &ldquo;Full&rdquo; needs a definition, such as whether it includes pipe under the building, a shared section and the connection at the main.</li>
        </ul>
        <p>Methods can also be combined, for example a point repair followed by lining the rest. Ask the contractor to complete this sentence in writing: &ldquo;This work corrects ___. It leaves ___ unchanged. More maintenance or work may still be needed because ___.&rdquo;</p>
        <p>Also ask why the proposed length is what it is: how much pipe has documented damage, how much is needed for access or connections, and how much was not inspected. The companion guide on reading footage lists the evidence each option usually needs.</p>
        <h2>3. Why does the proposed method fit my pipe and my site?</h2>
        <p>Open-trench replacement installs new pipe in an excavated trench. Pipe bursting breaks the old pipe outward while new pipe is pulled along the same route. Lining rehabilitates the existing pipe from the inside, so the old pipe stays. &ldquo;Trenchless&rdquo; describes how the work is done. It is not a diagnosis, it does not mean no digging, and it does not tell you the method suits your pipe.</p>
        <p>Useful questions:</p>
        <ul>
          <li>What conditions of my pipe and yard make this method appropriate, and what evidence shows it?</li>
          <li>What does this method leave unchanged, such as slope, a sag, an offset or pipe outside the work limits?</li>
          <li>Which access pits or preliminary repairs are expected, and what could require extra digging or a different method?</li>
          <li>How will side connections and the connection at the main be handled?</li>
          <li>What is the finished inside diameter, and what supports the conclusion that it will serve the property?</li>
          <li>For lining: which exact system is proposed, and can I see its current installation instructions and quality requirements?</li>
        </ul>
        <p>If correcting a sag or slope is a reason for the project, ask what measurements establish the problem and how the result will be checked. A camera view of standing water is not a complete plan for correcting elevations.</p>
        <h2>4. Exactly where does the work start and stop?</h2>
        <p>&ldquo;House to street&rdquo; leaves a lot open. A measurable scope lets you point to a drawing and say what is being replaced, what stays and where responsibility changes.</p>
        <p>A written scope identifies:</p>
        <ul>
          <li>A labeled sketch of the existing and proposed route, with endpoints tied to physical features such as a cleanout or a connection fitting.</li>
          <li>Lengths and depths, whether each is measured or estimated, and what depth is measured to.</li>
          <li>Pipe material, diameter and method for each segment, and any transitions between them.</li>
          <li>Every side connection, shared line and cleanout, and which are kept, replaced or relocated.</li>
          <li>What happens to any pipe taken out of service.</li>
          <li>Whether the connection fitting at the main is included, since &ldquo;to the main&rdquo; can mean several things.</li>
          <li>Any work in a sidewalk, street or other public area.</li>
        </ul>
        <p>The camera&rsquo;s distance counter is a position inside the pipe, not a surface location or a depth. <ApprovedInlineLink pageId={id('svc-sewer-line-locating')}>Sewer line locating</ApprovedInlineLink> is a separate step from the camera pass, and asking how an underground defect&rsquo;s position will be confirmed before digging is reasonable.</p>
        <p>Ownership deserves its own check. Who owns the pipe, who maintains it, who may do the work and what permits and access are needed are four different questions, and the property line is not always where responsibility changes. Ask the sewer authority for the answer for your address and keep it in writing with the proposal.</p>
        <h2>5. What is the price based on, and what can change it?</h2>
        <p>This guide gives no prices. Cost depends on the method, length, depth, access, ground conditions, connections and restoration at a specific property, so an average would say little about whether a proposal is reasonable. What you can check is how the price is built:</p>
        <ul>
          <li><strong>Fixed price:</strong> a price for a defined scope, with stated conditions that allow adjustment. It is not necessarily unconditional for every underground condition.</li>
          <li><strong>Estimate:</strong> may be a preliminary figure and not a ceiling. Ask what can make the final charge differ.</li>
          <li><strong>Allowance:</strong> an amount held for an unresolved item. Ask what it covers, whether it is inside the total and how credits or overruns are handled.</li>
          <li><strong>Unit price:</strong> a rate times a measured quantity. Ask who measures and whether there is a maximum without further approval.</li>
          <li><strong>Time and materials:</strong> charges based on labor and material records. Ask about rates, markup and any not-to-exceed amount.</li>
          <li><strong>Change order:</strong> a written change to scope, price or schedule. Ask who can approve it and whether approval comes before the changed work starts.</li>
        </ul>
        <p>Check that each bid states what it includes for permits and public-area approvals, locating and utility conflicts, excavation and ground conditions, cleaning and preparation, pipe and connections, disposal, backfill and testing, temporary wastewater arrangements, surface restoration, and final inspection and records.</p>
        <p>Give each bidder the same footage, defect log and endpoints, then compare scope before price. A lower total may leave out permits, disposal, restoration or connection work that a higher total includes. Keep unknown items separate instead of inventing an all-in number. If a condition truly cannot be known without digging, ask how it will be documented and priced when found. For payments, ask what each payment verifies, and check your state&rsquo;s rules on deposits and contract requirements, which vary.</p>
        <h2>6. Who is authorized and responsible for the whole project?</h2>
        <p>The company that sells the work, the crew that installs it and the firm that restores the surface may be different. That can be perfectly normal when it is clear in writing. Ordinary checks:</p>
        <ul>
          <li>Match the company name on the proposal to the license record, the insurance and the payment details, and look up the license on your state&rsquo;s licensing agency site.</li>
          <li>Ask the licensing agency whether the license classification covers the described work, using the written scope.</li>
          <li>Request insurance evidence from the issuing agent. A certificate describes listed policies and does not change coverage. For questions about your own coverage, check your policy or ask your insurer.</li>
          <li>Ask for the names and assigned work of any subcontractors, and who will lead the job and be on site each day.</li>
          <li>Ask who applies for permits, whose name is on them and who arranges inspections.</li>
        </ul>
        <p>Training from a manufacturer or a trade credential can be useful background, but it does not replace a required license or a local permit.</p>
        <h2>7. How will we use the home during the work, and what will be restored?</h2>
        <p>A working sewer is not a finished job. Installing the pipe and restoring the property are separate milestones, and even work described as trenchless usually needs access pits or surface repair. Ask:</p>
        <ul>
          <li>Which fixtures and appliances must stay off, when, and who says use can resume? A sewer interruption is not a drinking-water shutdown, but it does affect toilets, sinks, showers and laundry.</li>
          <li>What temporary wastewater arrangements are included, if any?</li>
          <li>Where will trenches, pits, equipment, spoil and materials sit, and how will we get in and out of the house and garage?</li>
          <li>Who arranges utility locating through your state&rsquo;s 811 service, and who finds private lines such as irrigation or lighting, which the usual notification may not cover?</li>
          <li>What is restored, feature by feature: paving, concrete, pavers, lawn or decorative rock, irrigation, fences, grading and cleanup? Is a patch a patch or a full panel?</li>
          <li>If the restored area later sinks, whom do I call and what is covered?</li>
        </ul>
        <p>For safety, stay out of open trenches, leave barriers in place, and report a new void or sinking ground promptly instead of assuming it is harmless.</p>
        <h2>8. How will the completed work be verified?</h2>
        <p>Verification comes from three places that are easy to blur: what the local authority requires, what the product&rsquo;s installation instructions require, and what the contract adds. Ask which is which.</p>
        <ul>
          <li>Which inspections must happen before the pipe is covered? A later camera pass cannot show buried joints or bedding.</li>
          <li>What tests apply, who performs them and what counts as passing? Flushing water through is not necessarily a formal test.</li>
          <li>What records come with a lined or burst pipe, such as installation or cure records, if the system calls for them?</li>
          <li>Will I receive final footage, a measured drawing of what was installed and permit closeout?</li>
          <li>Was an inspector from the permitting authority involved, or only the contractor? A contractor&rsquo;s camera recording is not a city inspection sign-off.</li>
        </ul>
        <p>Post-work footage documents the visible inside of the pipe. On its own it does not prove watertightness, the strength of a liner, the support under the pipe or a corrected slope. Treat completion as separate steps: service restored, pipe work accepted, excavation closed, permanent restoration done and paperwork closed, and keep a written list of anything outstanding.</p>
        <h2>9. Who covers which failures, and who pays to reach and restore the area?</h2>
        <p>A workmanship warranty from a contractor and a material warranty from a manufacturer are different promises. A long term that supplies only replacement material can leave the cost of digging, labor and restoration unaddressed. Read the actual documents before signing. This guide states no warranty terms for any company.</p>
        <ul>
          <li>Who is the warrantor, and what exact section of pipe is covered?</li>
          <li>What counts as a covered failure, and what is excluded? Test the exclusions against the reason you are doing the work, such as roots, ground movement or settlement.</li>
          <li>What is the remedy, and does it include diagnosis, access, excavation, permits, backfill and restoration?</li>
          <li>What maintenance is required, and what could affect coverage?</li>
          <li>When does coverage start and end, and does it transfer if you sell?</li>
          <li>How do I make a claim, and what happens if the installer and the manufacturer disagree about the cause?</li>
        </ul>
        <p>&ldquo;Lifetime&rdquo; needs a definition: the product&rsquo;s life, the original owner&rsquo;s life or the length of ownership. A product&rsquo;s expected service life is not a promise to pay for a future failure. A separately purchased plan is its own contract with its own provider and limits.</p>
        <h2>10. What must happen now, and what is still unresolved?</h2>
        <p>Active sewage exposure is a sanitation problem that needs prompt attention. If sewage is entering the home or overflowing, keep people and pets away, avoid contaminated water near electrical equipment, and contact a qualified professional and your sewer authority. Do not wait on a long comparison to deal with an uncontrolled hazard.</p>
        <p>Urgent work and permanent work are different decisions. Where it is safe to stabilize first, ask for the immediate work to be defined on its own, with its limits and price basis, what risk remains afterward and what further approval permanent work would need. Then ask:</p>
        <ul>
          <li>What specifically makes this urgent, and what supports the timeframe?</li>
          <li>What could happen if I wait, and what would make waiting unacceptable?</li>
          <li>Can the risk be reduced while I review the proposal?</li>
          <li>If someone says an authority requires work by a deadline, which office issued it? Ask for the written notice and confirm it with that office.</li>
        </ul>
        <p>No source gives a universal safe waiting period for a sewer defect. A professional may not be able to predict when a pipe will fail, and that uncertainty should be stated plainly, neither as a promise that waiting is safe nor as a certainty of collapse. Keep the technical reason for the timing separate from any pricing deadline.</p>
        <h2>When a second look helps</h2>
        <p>A second look is most useful when the situation is stable and the recommendation rests on less evidence than the scope implies. For example:</p>
        <ul>
          <li>The recommendation came from a short clip or an inspection that stopped early.</li>
          <li>Everything past where the camera stopped is described as failed, without direct evidence.</li>
          <li>The proposed length is much longer than the documented problem, with no explanation.</li>
          <li>Two proposals recommend very different work for the same footage.</li>
          <li>A slope correction is promised without measurements.</li>
          <li>Responsibility for a shared line or the connection at the main is unresolved.</li>
          <li>The video or defect log is not available to share.</li>
        </ul>
        <p>A second reviewer does not always need another camera pass. They can start by deciding whether the existing footage is enough. The page on <ApprovedInlineLink pageId={id('cmp-independent-vs-repair')}>independent inspection compared with a repair company&rsquo;s inspection</ApprovedInlineLink> explains how the two differ. <ApprovedInlineLink pageId={id('svc-independent-sewer-second-opinion')}>An independent sewer second opinion</ApprovedInlineLink> from The Sewer Pros begins there: the business contacts you and looks at what you already have. For disputed slope, ground stability or design questions, a suitably qualified engineer may be a better fit than another proposal, and it is reasonable to ask any reviewer whether they would sell the proposed work.</p>
        <p>Give every reviewer the same material: the full video with its date, entry point and distance reference, the defect log, a statement of where the camera stopped, any route sketch or locating marks, the history of backups and cleanings, and the proposal&rsquo;s endpoints and method. Ask for findings in writing that separate what the reviewer saw from what they inferred.</p>
        <h2>Comparing proposals that disagree</h2>
        <p>Compare the specific questions instead of only the recommendation and the price:</p>
        <ul>
          <li>Is it the same section of pipe?</li>
          <li>Were the inspection conditions the same? Footage taken before cleaning can hide surfaces visible afterward.</li>
          <li>Do both point to the same defect at the same place in the footage?</li>
          <li>Do they judge its severity the same way?</li>
          <li>Is the same problem being solved: restoring flow, structural repair, correcting slope or renewing old pipe?</li>
          <li>Were the same alternatives considered?</li>
          <li>Are the assumptions about depth, soil, access and retained pipe the same?</li>
          <li>Is the basis for urgency the same?</li>
        </ul>
        <p>A useful question for both contractors: &ldquo;You agree there is a defect here. What additional evidence makes the narrower repair insufficient, or what shows the rest of the line can stay?&rdquo; If the disagreement comes from missing evidence, resolve the gap instead of choosing the most alarming or the most reassuring opinion.</p>
        <h2>If your property is in the Las Vegas Valley</h2>
        <p>A Las Vegas mailing address does not tell you which government serves a property. Clark County states that a large portion of the Las Vegas valley has a Las Vegas mailing address but is located in unincorporated Clark County, and other homes are inside the City of Las Vegas, the City of North Las Vegas or the City of Henderson.</p>
        <p>Clark County publishes a jurisdiction locator you can use to check whether an address is in unincorporated Clark County.</p>
        <p>The rules about who maintains the sewer line are not the same everywhere in the valley. Henderson says the homeowner is responsible for the sewer line on their side of the connection to the city&rsquo;s sewer main in the street, and the Clark County Water Reclamation District says cleaning, repair and replacement of the lateral between a house and the main belong to the property owner.</p>
        <p>North Las Vegas draws the line differently for different problems. Its page describes the homeowner&rsquo;s responsibility for a blockage as running through the pipe to the city&rsquo;s main, and for a break as ending where the line crosses the property boundary. It also says that if a plumber&rsquo;s inspection shows a problem on the city side, video evidence can be submitted to its utilities department for review.</p>
        <p>The same page also says the homeowner&rsquo;s responsibility for the sewer lateral ends at the connection to the main, so ask the utility how its policy applies to your defect. Tell the utility whether the problem is a blockage or a break and where on the line it sits before assuming who is responsible.</p>
        <p>Henderson also says work in the public right-of-way needs a permit from its Public Works Department. The same question is worth asking in any jurisdiction before a pit or trench reaches a street, alley or sidewalk. Ask your permitting office which permit and inspections apply to the proposed method.</p>
        <p>Use your street address and assessor&rsquo;s parcel number when you call, and ask for each answer in writing.</p>
        <h2>A short checklist before you approve</h2>
        <ul>
          <li>Immediate hazards have a defined response.</li>
          <li>The diagnosis, location, extent and inspection limits are documented.</li>
          <li>Alternatives and method suitability are explained.</li>
          <li>Endpoints, materials, connections and restoration are written down.</li>
          <li>Price assumptions, extras, change approvals and payment triggers are clear.</li>
          <li>The contractor&rsquo;s license, insurance, subcontractors and project lead are verified.</li>
          <li>Service restrictions and property access are planned.</li>
          <li>Inspections, tests, records and closeout are identified.</li>
          <li>Warranty coverage and the cost of corrective work are understood.</li>
          <li>Address-specific requirements are confirmed, and anything still unknown is stated in the agreement.</li>
        </ul>
        <p>This checklist helps you prepare for an informed decision. It cannot remove every underground uncertainty, which is why unknowns belong in the agreement as stated uncertainties. The standard throughout is documented conditions, defined responsibilities and honest uncertainty.</p>
      </>
    ),
    faq: [
      {
        question: 'Does a defect on camera mean my whole sewer line needs to be replaced?',
        answer: (
          <p>Not by itself. A defect shows a condition at one location. Whether the fix is cleaning, monitoring, a localized repair, lining or replacement depends on how severe it is, how far it extends, the condition of the pipe around it and what could not be seen. Replacement can be the right answer when the evidence supports it, so ask how the recommendation follows from the footage. <ApprovedInlineLink pageId={id('res-read-video')}>How to read a sewer camera inspection video</ApprovedInlineLink> explains what footage can and cannot show.</p>
        ),
      },
      {
        question: 'What should I ask for before approving a sewer line replacement?',
        answer: (
          <p>Ask for a copy of the full inspection video, a written defect log with locations and lengths, a statement of what was not inspected, the reason replacement was chosen over narrower options, and a written scope with start and end points, connections, restoration, price assumptions, inspections and warranty terms.</p>
        ),
      },
      {
        question: 'What is the difference between sewer replacement and sewer lining?',
        answer: (
          <p>Replacement installs new pipe, either in an open trench or by breaking the old pipe outward while pulling new pipe through. Lining forms a new pipe wall inside the existing pipe, so the old pipe stays in place. They fix different things and have different access needs, so ask what the proposed method leaves unchanged, such as slope, a sag or connections.</p>
        ),
      },
      {
        question: 'Can only part of a sewer line be repaired instead of replaced?',
        answer: (
          <p>Sometimes. A localized repair corrects a defect at a defined location and leaves the rest of the pipe. Whether it is suitable depends on how many defects there are, how far they extend and the condition of the pipe on either side. Ask the contractor to explain why a narrower repair is or is not enough, using the footage.</p>
        ),
      },
      {
        question: 'Does trenchless mean there is no digging?',
        answer: (
          <p>No. Trenchless describes a way of installing pipe with less continuous trenching. Access pits, preliminary repairs, connections and equipment can still disturb the yard. Ask for a sketch showing every pit and work area, and what could require extra excavation.</p>
        ),
      },
      {
        question: 'How do I compare two sewer replacement bids?',
        answer: (
          <p>Give each contractor the same footage and defect log, then compare scope before price: endpoints and lengths, method, connections, permits, disposal, backfill, restoration, testing and records. Note what each bid lists as an allowance, an exclusion or a unit price. A lower total can leave out work that a higher total includes.</p>
        ),
      },
      {
        question: 'What should a sewer replacement proposal state in writing?',
        answer: (
          <p>It should state where the work starts and stops, the lengths and depths and how they were measured, the pipe material and diameter, how every connection and cleanout is handled, what is restored, which permits and inspections apply and who handles them, how added work is approved, what records you receive at the end, and the warranty terms.</p>
        ),
      },
      {
        question: 'What should I check about a sewer replacement warranty?',
        answer: (
          <p>Check who makes the promise, what section and what failures are covered, what is excluded, what the remedy is and who pays for digging and restoration. Ask what &ldquo;lifetime&rdquo; refers to, whether coverage transfers if you sell, and how to make a claim. A product&rsquo;s expected service life is not the same as a warranty.</p>
        ),
      },
      {
        question: 'Is sewer replacement urgent if my sewer is backing up?',
        answer: (
          <p>A sewage backup is a sanitation problem that needs prompt attention from a qualified professional, but urgency does not by itself show that the whole line must be replaced. Ask for the immediate work to be defined separately from permanent work, and ask what in the footage supports the timing.</p>
        ),
      },
      {
        question: 'Should I get a second opinion before approving a sewer replacement?',
        answer: (
          <p>It is often worth considering when the recommendation rests on a short clip, an inspection that stopped early or a length the footage does not explain. <ApprovedInlineLink pageId={id('svc-independent-sewer-second-opinion')}>An independent second opinion</ApprovedInlineLink> from The Sewer Pros begins by looking at what you already have.</p>
        ),
      },
      {
        question: 'What if I am buying a home and the sewer is said to need replacing?',
        answer: (
          <p>Ask for the inspection video and written findings behind the statement, and have the recommendation checked against them before you decide. A <ApprovedInlineLink pageId={id('svc-pre-purchase-sewer-inspection')}>pre-purchase sewer inspection</ApprovedInlineLink> can provide an independent look at the line. Questions about the purchase contract belong with your agent or attorney.</p>
        ),
      },
      {
        question: 'Who is responsible for the sewer line between my house and the street?',
        answer: (
          <p>It varies by city and utility, and sometimes by the type of problem. Responsibility can extend past the property line or stop at it, so ask the sewer authority for your address and get the answer in writing.</p>
        ),
      },
      {
        question: 'Can a sewer line be cleaned instead of replaced?',
        answer: (
          <p>Sometimes. If the problem is buildup or roots rather than a break or collapse, cleaning or hydro jetting may address it. A camera inspection shows which situation you have.</p>
        ),
      },
      {
        question: 'Why does the camera need to cover the whole line?',
        answer: (
          <p>Because the recommended scope should match the condition along the entire line. Unseen sections leave open whether the problem is local or widespread.</p>
        ),
      },
    ],
    relatedPageIds: [
      id('res-read-video'),
      id('res-camera-report'),
      id('svc-independent-sewer-second-opinion'),
      id('svc-sewer-camera-inspection'),
      id('svc-sewer-line-locating'),
      id('svc-sewer-cleaning-camera-inspection'),
      id('svc-pre-purchase-sewer-inspection'),
      id('core-faq'),
      id('svc-sewer-cleaning'),
      id('cmp-independent-vs-repair'),
    ],
    cta: {
      title: 'Request a Sewer Camera Inspection',
    },
  },
}
