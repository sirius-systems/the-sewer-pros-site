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
 * `/about/` carries the company-wide combined-experience claim approved
 * under DEC-072. It still asserts no staff count, no inspection volume,
 * no licensing, and no certification — 01 §35 lists those among claims
 * requiring documented evidence, and none has been supplied.
 *
 * ⚠ The St. Louis-scoped claims — "#1 choice in St. Louis" and the
 * 100,000-inspections figure — live on the St. Louis market hub, not
 * here. /about/ is sitewide, and 01 §20 forbids presenting one market's
 * claims as though they covered another.
 */


import { ApprovedInlineLink } from '@/components/links/ApprovedInlineLink'
import { coreServiceCards } from './service-cards'
import type {
  CorePageContent,
  HomePageContent,
  HubPageContent,
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
    title: 'Sewer camera inspection and cleaning.',
    intro: (
      <p>
        Sewer camera inspection, diagnostics, locating, and cleaning:
        documented evidence of the line&rsquo;s condition, so you can decide
        the next step with confidence.
      </p>
    ),
  },
  seoTitle: 'Sewer Camera Inspection, Diagnostics & Cleaning | The Sewer Pros',
  metaDescription:
    "Independent sewer camera inspection, diagnostics, locating, and cleaning across St. Louis, San Diego, and Las Vegas. See the line's condition first.",
  /*
    ⚠ THE SAME ARRAY THE THREE MARKET HUBS RENDER, MOVED OUT OF THIS
    FILE ON 2026-09-07 RATHER THAN COPIED INTO THEIRS.

    The owner asked the hubs to carry this page's "What we do" section.
    Four hand-maintained transcriptions of one list is how the drift
    that prompted the request happened in the first place - two hubs
    had no artwork at all and were rendering a text index where this
    page renders the mosaic. `content/pages/service-cards.ts` holds the
    nine cards, the provenance, the market-availability check, and why
    the count is nine rather than ten.

    ⚠ THIS PAGE'S RENDERED OUTPUT IS UNCHANGED BY THE MOVE. Same nine
    entries, same order, same descriptions, same frames. Verified
    against the pre-change build.
  */
  services: coreServiceCards,
  /*
    ⚠ THE COMMERCIAL LINKS USE PAGE IDS, NOT SERVICE IDS.

    The brief named `svc-commercial-sewer-camera-inspection` and its
    two siblings. Those are SERVICE REGISTRY ids;
    `ApprovedInlineLink` takes a PAGE id and would have thrown the
    build on all three.

    The pages exist and are live, and the mapping is recorded in the
    data rather than inferred — each commercial page record declares
    the service it covers:

      svc-commercial-sewer-camera-inspection -> com-camera
      svc-commercial-sewer-cleaning          -> com-sewer-cleaning
      svc-commercial-hydro-jetting           -> com-hydro-jetting

    All three are status `launch` and indexable, so none had to fall
    back to plain text.

    Wording is unchanged from the approved copy. Only the named terms
    are wrapped.
  */
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

    ⚠ THE COMMERCIAL IDS ARE `com-*`, NOT `svc-commercial-*`. The
    latter are SERVICE ids in the service registry, not PAGE ids, and
    would throw at the resolver. Same substitution the inline-links
    version already made.
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
      pageId: id('hub-commercial'),
      category: 'Property solutions',
      icon: 'building-2',
      accent: 'navy',
      description:
        'Sewer inspection, cleaning, and hydro jetting for commercial properties, multi-family buildings, and property managers. Recurring backups and drainage issues get handled without disrupting your operations.',
      linksHeading: 'Commercial services',
      links: [
        { pageId: id('com-camera'), label: 'Sewer Camera Inspection' },
        { pageId: id('com-sewer-cleaning'), label: 'Sewer Cleaning' },
        { pageId: id('com-hydro-jetting'), label: 'Hydro Jetting' },
      ],
      secondaryLink: {
        pageId: id('hub-commercial'),
        label: 'Explore Commercial Services',
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
    src: '/images/homepage/differentiator/the-sewer-pros-commercial-multifamily-properties.webp',
    alt: 'Exterior of a mixed-use multifamily building and its parking area',
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
          A sewer camera inspection before closing can reveal blockages, root
          intrusion, or pipe damage that a standard home inspection does not
          check. The Sewer Pros provides independent camera inspections for
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
          A second inspection can confirm whether a sewer line actually needs
          replacement or can be cleaned and maintained instead. The Sewer Pros
          performs independent camera inspections without an incentive to sell
          repair or replacement work, giving you an unbiased look at the
          pipe&rsquo;s condition.
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
          step, whether cleaning, hydro jetting, or further diagnosis, can be
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
          Hydro jetting uses high-pressure water to clear grease, roots, and
          buildup from the full diameter of a pipe, while standard drain
          cleaning typically uses a cable to break through a single blockage.
          Hydro jetting reaches further and cleans more thoroughly for
          recurring or severe buildup.
        </p>
      ),
    },
    {
      question: 'Do you offer commercial sewer and drain services?',
      answer: (
        <p>
          The Sewer Pros provides commercial sewer camera inspection, cleaning,
          and hydro jetting for property managers, multi-family properties, and
          commercial facilities, with service available across St. Louis, San
          Diego, and Las Vegas.
        </p>
      ),
    },
    {
      /*
        Answer text is the canonical DEC-088 wording. The same-day half
        is reused from the `/services/` FAQ answer to the same question
        (see hubContent, hub-services) so the two pages state one thing,
        not two; the free-estimate sentence is verbatim from
        `verifiedOffers` in data/business/offers.ts.

        ⚠ Same-day wording is load-bearing. DEC-088 approved
        availability, never a promise: published hours are Monday to
        Friday, 8:00am–4:00pm (DEC-083), which rule out a guarantee,
        weekend coverage, and any emergency or 24/7 claim. Keep
        "sometimes" and "cannot promise"; do not tighten this into an
        offer. Changing it here without changing `/services/` puts the
        two pages back into contradiction.
      */
      // TODO: A stronger, unconditional version of this answer may be used only if the client confirms a standing, always-available same-day/free-estimate policy that does not vary by market or season. Do not change this answer without that explicit confirmation.
      question: 'Do you offer free estimates or same-day appointments?',
      answer: (
        <>
          <p>
            Ask about a free estimate before scheduling a sewer inspection or
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

export const hubContent: Partial<Record<PageId, HubPageContent>> = {
  [id('hub-services')]: {
    hero: {
      title: 'Services',
      intro: (
        <p>
          Inspection, diagnostics, locating, and cleaning for sewer and drain
          lines. We do not perform sewer repair or replacement.
        </p>
      ),
    },
    // No brand suffix: rootMetadata's `%s | The Sewer Pros` template
    // appends it for every nested route (lib/seo/metadata.ts).
    seoTitle: 'Sewer & Drain Services',
    metaDescription:
      'Sewer camera inspection, cleaning, hydro jetting, and line locating. Independent service without repair-driven upselling, across St. Louis, San Diego, and Las Vegas.',
    body: (
      <>
        <h2>How these services fit together</h2>
        <p>
          Most sewer problems are answered by some combination of three things:
          seeing the line, clearing it, and knowing where it runs.
        </p>
        <p>
          Inspection establishes condition. Cleaning removes what has
          accumulated. Locating establishes position and depth. Which you need
          depends on whether the question is what is wrong, how to restore
          flow, or where to dig.
        </p>
      </>
    ),
    items: homeContent.services,
    faq: [
      {
        question: 'Which service do I need?',
        answer: (
          <p>
            Start with what you&rsquo;re trying to answer. If you want to know
            the condition of the line, start with inspection. If something
            isn&rsquo;t draining, cleaning usually comes first. If you need to
            know where the line runs before digging, that&rsquo;s locating.
            Several services often combine: cleaning before inspection is
            common, since buildup can hide what a camera would otherwise show.
          </p>
        ),
      },
      {
        question: 'What is the difference between sewer cleaning and drain cleaning?',
        answer: (
          <p>
            Drain cleaning clears an individual fixture or branch line. Sewer
            cleaning clears the main line that carries everything away from the
            property. A single slow drain is usually a branch issue; several
            fixtures backing up at once more often points to the main line.
          </p>
        ),
      },
      {
        /*
          The question asks two things, so the answer addresses both.
          An earlier version answered only the emergency half, which
          read as a decline on same-day as well — inaccurate since
          DEC-088.

          ⚠ Same-day wording is load-bearing. DEC-088 approved
          availability, never a promise: published hours are Monday to
          Friday, 8:00am–4:00pm (DEC-083), which rule out a guarantee,
          weekend coverage, and any emergency or 24/7 claim. Keep
          "sometimes" and "cannot promise"; do not tighten this into
          an offer.
        */
        question: 'Do you offer emergency or same-day service?',
        answer: (
          <>
            <p>
              No emergency service. Same-day is sometimes possible, but never
              guaranteed. We operate Monday through Friday, 8:00am to 4:00pm,
              and are closed weekends. We do not offer 24/7 or emergency
              service.
            </p>
            <p>
              Within those hours, a same-day appointment can sometimes be
              arranged, depending on how the day is already booked. It is
              worth asking when you get in touch, but we cannot promise it in
              advance.
            </p>
          </>
        ),
      },
      {
        question: 'Do you perform sewer repairs?',
        answer: (
          <p>
            No. We inspect, diagnose, locate, and clean. If a finding suggests
            repair may be worth considering, that is a separate decision. See{' '}
            <ApprovedInlineLink pageId={id('cmp-independent-vs-repair')}>
              how an independent inspection compares to going straight to a
              repair quote
            </ApprovedInlineLink>{' '}
            for more on why that separation matters, whoever ends up performing
            the work.
          </p>
        ),
      },
    ],
  },

  [id('hub-commercial')]: {
    hero: {
      title: 'Commercial Sewer & Drain Services',
      intro: (
        <p>
          Inspection, cleaning, and planned maintenance for commercial
          properties, where a blocked line closes something rather than merely
          inconveniencing someone.
        </p>
      ),
    },
    // No brand suffix: the root title template appends it.
    seoTitle: 'Commercial Sewer & Drain Services',
    metaDescription:
      'Sewer camera inspection, cleaning, hydro jetting, and maintenance for commercial properties across St. Louis, San Diego, and Las Vegas: planned service, not reactive fixes.',
    body: (
      <>
        <h2>What changes on a commercial property</h2>
        <p>
          The plumbing is not fundamentally different. The consequences are.
          Higher and more continuous volume means lines accumulate faster, and a
          failure interrupts trading, displaces tenants, or closes a kitchen.
        </p>
        <p>
          That shifts the useful work from reactive to planned, and makes
          documentation matter: decisions on commercial property usually have
          to be justified to someone.
        </p>
      </>
    ),
    items: [
      { pageId: id('com-camera'), description: 'Documented condition across a property or portfolio.' },
      { pageId: id('com-sewer-cleaning'), description: 'Clearing commercial lines around operations.' },
      { pageId: id('com-hydro-jetting'), description: 'High-pressure cleaning for grease, scale, and sludge.' },
      { pageId: id('com-drain-cleaning'), description: 'Fixture and branch drains across occupied buildings.' },
      { pageId: id('com-maintenance'), description: 'Servicing lines on an evidence-based interval.' },
    ],
    faq: [
      {
        question: 'Do you serve restaurants and food-service properties?',
        answer: (
          <p>
            Yes. Grease and buildup in food-service lines is one of the most
            common reasons commercial properties need cleaning, and it is a
            large part of what hydro jetting addresses.
          </p>
        ),
      },
      {
        question: 'Do you offer commercial sewer repair?',
        answer: (
          <p>
            No. We inspect, diagnose, locate, and clean commercial lines.
            Where a finding suggests repair, that is a separate conversation
            with a qualified repair contractor.
          </p>
        ),
      },
      {
        question: 'Can you service multiple properties under one account?',
        answer: (
          <p>
            Yes, scheduling across a portfolio is part of the conversation.
            What we will not do is put every line on the same interval
            regardless of what it actually needs.
          </p>
        ),
      },
    ],
    cta: {
      title: 'Talk to us about a commercial property',
      body: 'Start with what the lines actually need, established by inspection.',
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
    cta: { title: 'Schedule a sewer inspection', hideAction: true },
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
      The home page's nine-card mosaic. Safe on a page speaking for all
      three markets because every card in `coreServiceCards` carries an
      identical status across all three; see that file.
    */
    services: coreServiceCards,
    hero: {
      title: 'Locations / Service Areas',
      intro: (
        <p>
          The Sewer Pros works across St. Louis, San Diego, and Las Vegas.
          These are service markets: areas we work in, not offices you can
          visit.
        </p>
      ),
    },
    // No brand suffix: the root title template appends it.
    seoTitle: 'Service Areas | St. Louis, San Diego & Las Vegas',
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
    guidance: {
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
          { pageId: id('market-st-louis-mo'), label: 'Explore St. Louis' },
          { pageId: id('market-san-diego-ca'), label: 'Explore San Diego' },
          { pageId: id('market-las-vegas-nv'), label: 'Explore Las Vegas' },
        ],
      },
    },
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
          Property owners, buyers, real estate professionals, property
          managers, and commercial operators, each arriving with a different
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
    items: [
      {
        pageId: id('res-camera-report'),
        description: 'What a written inspection report should contain.',
      },
      {
        pageId: id('res-read-video'),
        description: 'How to interpret sewer camera footage yourself.',
      },
    ],
  },
}

/* ==========================================================================
   Core pages
   ========================================================================== */

export const coreContent: Partial<Record<PageId, CorePageContent>> = {
  [id('core-about')]: {
    hero: {
      title: 'About The Sewer Pros',
      intro: (
        <p>
          A sewer and drain specialist focused on inspection, diagnostics,
          locating, and cleaning, deliberately not on repair.
        </p>
      ),
    },
    body: (
      <>
        <h2>What we do</h2>
        <p>
          We inspect sewer and drain lines with cameras, diagnose why lines
          block, locate where lines run, and clean them. That is the whole of
          it, and the boundary is intentional.
        </p>

        <h2>What we do not do</h2>
        <p>
          We do not perform sewer repair, replacement, lining, pipe bursting, or
          excavation. When an inspection turns up a condition that warrants
          structural work, the next conversation is with a qualified repair
          contractor, not with us.
        </p>

        <h2>Why that separation matters</h2>
        <p>
          Sewer findings are frequently ambiguous. A joint might be a
          maintenance item or the beginning of a failure; footage often supports
          more than one reading.
        </p>
        <p>
          A company that both diagnoses and sells the remedy is interpreting
          that ambiguity while standing to gain from one interpretation. That is
          a structural position, not a comment on anyone&rsquo;s integrity, but
          it is a position we chose not to occupy.
        </p>

        <h2>How we work</h2>
        <p>
          We put a camera in the line, document what is visible, and tell you
          what the footage supports. Where a line cannot be properly assessed,
          we say that rather than producing a confident conclusion the evidence
          does not carry.
        </p>
        <p>
          Where cleaning is likely to resolve the problem, we clean it. Where it
          is not, we will tell you that too.
        </p>

        <h2>The business</h2>
        <p>
          The Sewer Pros has operated since 2011, with over 100 years of
          combined experience across the team. We are locally owned and family
          operated.
        </p>
        <p>
          We work across the St. Louis area (St. Louis County, St. Charles
          County, Jefferson County and surrounding areas) and across San Diego
          County, which we have served since 2015. We are currently launching in
          the Las Vegas Valley.
        </p>

        <h2>Municipal lateral reporting</h2>
        <p>
          Many municipalities in the St. Louis area run sewer lateral repair
          programs, and most require documentation from a licensed plumber
          before they will consider a claim. We are licensed through most of
          those programs to submit reports.
        </p>
        <p>
          We document conditions; the municipality decides claims. We cannot
          promise an outcome, and any company that does is describing a
          decision that is not theirs to make.
        </p>

        <h2>Affiliations</h2>
        <ul>
          <li>St. Louis Association of Realtors</li>
          <li>American Society of Home Inspectors (ASHI)</li>
          <li>Women&rsquo;s Council of Realtors</li>
          <li>St. Charles Realtors</li>
        </ul>
      </>
    ),
    relatedPageIds: [id('cmp-independent-vs-repair'), id('hub-services')],
  },

  [id('core-contact')]: {
    hero: {
      title: 'Contact',
      intro: <p>Get in touch about an inspection, a recurring problem, or a commercial property.</p>,
    },
    body: (
      <>
        <h2>St. Louis</h2>
        <ul>
          <li>
            Phone: <a href="tel:+13148211600">(314) 821-1600</a>
          </li>
          <li>
            Email:{' '}
            <a href="mailto:info@thesewerpros.com">info@thesewerpros.com</a>
          </li>
          <li>Monday to Friday, 8:00am to 4:00pm. Closed weekends.</li>
        </ul>
        <p>
          Serving St. Louis County, St. Charles County, Jefferson County,
          Missouri, and surrounding areas.
        </p>

        <h2>San Diego</h2>
        <ul>
          <li>
            Phone: <a href="tel:+18582572888">(858) 257-2888</a>
          </li>
          <li>
            Email:{' '}
            <a href="mailto:admin@thesewerpros.com">admin@thesewerpros.com</a>
          </li>
          <li>Monday to Friday, 8:00am to 4:00pm. Closed weekends.</li>
        </ul>
        <p>
          Working across San Diego, San Marcos, Carlsbad, Escondido,
          Oceanside, Chula Vista, and Mission Valley.
        </p>

        <h2>Las Vegas</h2>
        <ul>
          <li>
            Phone: <a href="tel:+17252924030">(725) 292-4030</a>
          </li>
          <li>
            Email:{' '}
            <a href="mailto:bookaninspection@thesewerpros.com">
              bookaninspection@thesewerpros.com
            </a>
          </li>
          <li>Monday to Friday, 8:00am to 4:00pm. Closed weekends.</li>
        </ul>
        <p>
          Working across Las Vegas, Henderson, North Las Vegas, and
          Summerlin.
        </p>

        <h2>Why there is no address here</h2>
        <p>
          We are a service-area business. The work happens at your property
          (in the ground, at a cleanout) rather than at a counter you visit, so
          there is no storefront address to list.
        </p>

        <h2>What to have ready</h2>
        <p>
          Whichever way you get in touch, these details make the first
          conversation more useful:
        </p>
        <ul>
          <li>What is happening: a backup, slow drainage, or a planned inspection</li>
          <li>Whether it has happened before, and how often</li>
          <li>Which fixtures are affected</li>
          <li>What work has already been done, and by whom</li>
          <li>Whether there is an accessible cleanout</li>
          <li>Whether the property is residential or commercial</li>
        </ul>
      </>
    ),
    relatedPageIds: [id('hub-services'), id('core-faq')],
  },

  [id('core-faq')]: {
    hero: {
      title: 'Sewer & Drain FAQs',
      intro: <p>Common questions about inspections, cleaning, and what findings mean.</p>,
    },
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
            It is worth considering. The sewer line is underground and not
            visible without a camera, and a general property inspection does not
            usually include one.
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
    relatedPageIds: [id('hub-services'), id('hub-resources')],
  },
}

/* ==========================================================================
   Resources — the two that need no municipal verification
   ========================================================================== */

export const resourceContent: Partial<Record<PageId, ResourcePageContent>> = {
  [id('res-camera-report')]: {
    hero: {
      eyebrow: 'Guide',
      title: 'What Is Included in a Sewer Camera Inspection Report?',
    },
    directAnswer: (
      <p>
        A useful sewer camera inspection report identifies the property and
        date, states where the camera entered the line and how far it
        travelled, describes each observed condition with its distance along
        the line, notes any section that could not be assessed and why, and
        includes the footage itself.
      </p>
    ),
    body: (
      <>
        <h2>Why the report matters as much as the inspection</h2>
        <p>
          The inspection produces evidence. The report is what makes that
          evidence usable later: when comparing quotes, revisiting a decision,
          or showing someone else what was found.
        </p>

        <h2>What a report should contain</h2>
        <h3>Identification</h3>
        <p>
          The property, the date, and which line was inspected. Obvious, and
          routinely omitted.
        </p>

        <h3>Access point and extent</h3>
        <p>
          Where the camera entered, and how far along the line it reached. The
          extent matters: a report covering thirty feet of a longer line is not
          a report on the whole line.
        </p>

        <h3>Observations with distances</h3>
        <p>
          Each condition should be tied to a distance along the line. &ldquo;Root
          intrusion at a joint&rdquo; is an observation; &ldquo;root intrusion
          at a joint approximately 42 feet from the cleanout&rdquo; is
          actionable: it can be located, quoted against, and re-checked.
        </p>

        <h3>What could not be assessed</h3>
        <p>
          Sections obscured by standing water or buildup, points where the
          camera could not pass, and any part of the line not reached. This is
          the section most often missing and among the most important: it
          tells you the limits of what the inspection established.
        </p>

        <h3>The footage</h3>
        <p>
          You should be able to keep a copy. It is evidence about your property.
        </p>

        <h2>What a report should not do</h2>
        <p>
          It should not assert conditions the camera cannot establish: pipe
          wall thickness from outside, soil conditions, or the remaining life of
          a line. It also should not present a repair recommendation as a
          finding; what was observed and what someone concludes from it are
          different things, and worth being able to separate.
        </p>

        <h2>Questions worth asking</h2>
        <ul>
          <li>How far along the line did you get, and what stopped you?</li>
          <li>Which sections could you not assess clearly?</li>
          <li>At what distance is each condition you noted?</li>
          <li>Was the line cleaned before this inspection?</li>
          <li>Can I have a copy of the footage?</li>
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
    ],
    relatedPageIds: [id('res-read-video'), id('svc-sewer-camera-inspection')],
  },

  [id('res-read-video')]: {
    hero: {
      eyebrow: 'Guide',
      title: 'How to Read a Sewer Camera Inspection Video',
    },
    directAnswer: (
      <p>
        Watch for four things: standing water where the line should drain,
        joints that are separated or misaligned, roots or material entering the
        pipe, and any change in the pipe&rsquo;s shape or surface. Note the
        distance counter when you see them: position is what makes an
        observation useful.
      </p>
    ),
    body: (
      <>
        <h2>What you are looking at</h2>
        <p>
          The camera travels along the inside of the pipe, lit from the head.
          The picture is close, wide-angle, and often wet, which is why
          footage can look alarming when it is normal, and normal when it is
          not.
        </p>

        <h2>Standing water</h2>
        <p>
          A line should carry water away. Water sitting in a section suggests
          that part of the line is not draining: a low spot, a loss of slope,
          or a restriction downstream. Watch whether the camera passes through
          water and out the other side, or whether it stays submerged.
        </p>

        <h2>Joints</h2>
        <p>
          Joints appear as regular seams. What matters is whether they line up.
          A visible gap, a step where one section sits higher than the next, or
          daylight-like darkness at a seam suggests separation or offset, and
          those are the points where roots and material typically enter.
        </p>

        <h2>Roots and intrusion</h2>
        <p>
          Roots enter at defects, so their presence marks the defect. Fine
          hair-like growth and heavier mass differ in severity but both indicate
          an opening. Note where along the line they appear.
        </p>

        <h2>Changes in the pipe itself</h2>
        <p>
          Watch for the pipe changing material or diameter, scale or buildup
          coating the wall, cracks, and any point where the round profile
          deforms. A change of material is not itself a problem: it is
          information about how the line was built or previously worked on.
        </p>

        <h2>The distance counter</h2>
        <p>
          Most footage displays distance. It is the single most useful thing on
          screen: an observation with a distance can be located on the property,
          quoted against precisely, and compared to a later inspection.
        </p>

        <h2>What footage cannot tell you</h2>
        <p>
          It shows the inside surface of the accessible line, at that moment.
          It does not show wall thickness, the ground around the pipe, or how
          long a condition has existed. Obscured sections are unknown, not
          fine, and treating them as fine is the most common misreading.
        </p>

        <h2>If you are unsure</h2>
        <p>
          Ask whoever inspected the line to talk you through the footage against
          the distances. If the reading matters to a significant decision,
          getting a second view of the same footage is reasonable.
        </p>
      </>
    ),
    faq: [
      {
        question: 'The video looks bad. Does that mean the line is failing?',
        answer: (
          <p>
            Not necessarily. Sewer footage frequently looks worse than the
            condition warrants: the camera is close, the environment is wet,
            and normal wear reads dramatically. What matters is specific
            observations at specific distances, not the general impression.
          </p>
        ),
      },
    ],
    relatedPageIds: [id('res-camera-report'), id('svc-sewer-camera-inspection')],
  },
}
