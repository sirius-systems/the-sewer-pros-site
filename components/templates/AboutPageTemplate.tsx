import Image from 'next/image'
import Link from 'next/link'
import {
  Section,
  Prose,
  ImagePlaceholder,
  type SectionDensity,
} from '@/components/ui'
import {
  Hero,
  TrustBar,
  IndependentProcess,
  StatsBand,
  MarketCoverage,
  ProcessSteps,
  ServiceIndex,
  FaqSection,
  CtaSection,
  LeadFormSection,
  serviceIndexRenders,
  marketCoverageRenders,
  faqSectionRenders,
} from '@/components/sections'
import { homeServiceCards } from '@/content/pages/home-service-cards'
import { PageShell } from './PageShell'
import type { AboutPageContent, MasterPageRecord } from '@/types'

/**
 * About page — `/about/`.
 *
 * Bespoke composition rather than `CorePageTemplate`'s reading-width
 * layout: the entity/trust hub needs a brand-story split, a proof band,
 * a leadership section and a markets band that the plain core template
 * has no slot for. `/contact/` and `/faq/` stay on `CorePageTemplate`.
 *
 * ⚠ SOME IMAGE SLOTS ARE STILL `ImagePlaceholder`, NOT A PHOTOGRAPH.
 * The hero and founder photos are approved and wired from
 * `AboutPageContent` (`heroImage`, `leadership[].photo`); the market
 * cards have no approved artwork yet (18 §28-34), so this page is not
 * fully photography-complete — see `ImagePlaceholder` and hold this
 * page's indexation status accordingly until every remaining placeholder
 * is replaced.
 *
 * ⚠ NO SEPARATE LEADERSHIP SECTION. Founder portraits, names, roles, and
 * biographies render once, inside the Our Story section below, rather
 * than a second time in a standalone band — the two used to repeat the
 * same three facts. `LeadershipProfile` (the old standalone section
 * component) was removed rather than left unused; if a future page
 * needs a leadership band on its own, rebuild from this section's markup
 * instead of reviving that file from git history.
 */
export interface AboutPageTemplateProps {
  page: MasterPageRecord
  content: AboutPageContent
}

export function AboutPageTemplate({ page, content }: AboutPageTemplateProps) {
  const showsServices = serviceIndexRenders(homeServiceCards)
  const showsMarketCoverage = marketCoverageRenders()
  const showsFaq = faqSectionRenders(content.faq)

  // Explicit sequence, checked against `sectionRhythmIssues()` at build.
  const densities: SectionDensity[] = [
    'sparse', // hero
    'dense', // trust bar
    'standard', // stats
    'standard', // brand story + leadership (one merged section)
    'dense', // independent-opinion band (fixed brand surface)
    ...(showsServices ? (['dense'] as const) : []),
    ...(showsMarketCoverage ? (['dense'] as const) : []),
    'standard', // process motif
    ...(showsFaq ? (['dense'] as const) : []),
    'sparse', // closing CTA panel
  ]

  return (
    <PageShell
      page={page}
      densities={densities}
      schema={{
        title: content.seoTitle ?? content.hero.title,
        description: content.metaDescription,
      }}
    >
      {/*
        ⚠ BACKDROP, NOT `media`. The hero photo used to sit beside the
        copy as its own card; it is now a full-bleed background behind
        the whole hero instead, which is what `Hero`'s `backdrop` slot
        is for. `Hero` flips the copy white automatically whenever
        `backdrop` is supplied, so nothing else about the copy needed to
        change.

        This is a plain static image, not `HeroBackdrop` — that
        component cross-fades a curated multi-frame set (its own header
        calls it out as the homepage/`/locations/` mechanism) and would
        be the wrong tool for one photograph. `bg-brand` is the fallback
        surface if the image fails to load or before it decodes, the
        same role it plays in `HeroBackdrop`; `.hero-scrim` is the
        project's one measured hero overlay (`app/globals.css`, 55%
        black, sized against a pure-white worst case) rather than a
        second value invented here. The image itself carries `alt=""`
        because it is now decoration — the eyebrow, heading, and intro
        already say what this page is about without depending on it.
      */}
      <Hero
        variant="editorial"
        eyebrow={content.hero.eyebrow}
        title={content.hero.title}
        intro={content.hero.intro}
        secondaryAction={{ href: '/locations/', label: 'View Service Areas' }}
        /*
          `narrow` (38rem) rather than the default `reading` (42rem):
          the same adjustment `HubPageTemplate` makes for a backdrop
          hero with no aside column — 42rem of copy across a photograph
          runs wider than the overlay is tuned for.
        */
        copyWidth="narrow"
        backdrop={
          content.heroImage !== undefined ? (
            <div
              aria-hidden="true"
              className="absolute inset-0 -z-10 overflow-hidden bg-brand"
            >
              <Image
                src={content.heroImage.src}
                alt=""
                fill
                priority
                sizes="100vw"
                /*
                  ⚠ `object-[65%_50%]`, NOT CENTRED. The equipment in
                  this photograph sits right-of-centre (the monitor and
                  cable reel), with an empty driveway filling the left
                  and foreground — a default centred crop holds up at
                  16:9 but starts cutting into the reel on the narrow,
                  tall crops mobile produces. Weighting the crop right
                  keeps the equipment in frame at both ends.
                */
                className="h-full w-full object-cover object-[65%_50%]"
              />
              <div className="hero-scrim absolute inset-0" />
            </div>
          ) : (
            <div aria-hidden="true" className="absolute inset-0 -z-10 bg-brand" />
          )
        }
      />

      <TrustBar />

      <StatsBand density="standard" surface="muted" />

      {/*
        Our Story beside Leadership, in one two-column section rather
        than the earlier stacked layout — the story on the left, both
        founder profiles on the right. Founder content still renders
        once on the page: this replaced a separate standalone Leadership
        band, not a second copy of it.

        ⚠ THE RIGHT COLUMN STACKS ITS TWO CARDS, NOT A 2x1 ROW. At
        `lg:col-span-5` the column is roughly 460px, and a full
        biography beside a portrait needs more width than half of that
        to stay readable — see the founder card comment below. Side by
        side only works once there is a whole row's width to give each
        card, which this column does not have.
      */}
      <Section density="standard" width="standard" labelledBy="story">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="text-caption font-semibold tracking-wide text-muted-foreground uppercase">
              {content.brandStory.eyebrow}
            </p>
            <h2
              id="story"
              className="mt-2 text-h2 font-semibold tracking-tight text-balance"
            >
              {content.brandStory.title}
            </h2>
            <div className="mt-5">
              <Prose>{content.brandStory.body}</Prose>
            </div>
          </div>

          {/*
            ⚠ `h3`, NOT `h2`. This subsection's heading follows the
            section's own H2 ("story" to the left), so it steps down
            one level rather than restating a second H2 in the same
            section.
          */}
          <div className="lg:col-span-5">
            <p className="text-caption font-semibold tracking-wide text-muted-foreground uppercase">
              Leadership
            </p>
            <h3
              id="leadership"
              className="mt-2 text-h3 font-semibold tracking-tight text-balance"
            >
              Meet the People Behind The Sewer Pros
            </h3>

            <div className="mt-6 flex flex-col gap-6">
              {content.leadership.map((person) => (
                <article
                  key={person.name}
                  className="rounded-md border border-border bg-surface p-5"
                >
                  {/*
                    ⚠ A SMALL PORTRAIT BESIDE THE NAME, NOT A FULL-WIDTH
                    CROP ABOVE IT. That treatment ran each card to
                    roughly card-width-times-3/4 in height before the
                    bio even started; a fixed square thumbnail keeps the
                    founder clearly recognisable while the card's height
                    now comes from the bio text, not the photograph.
                  */}
                  <div className="flex items-center gap-4">
                    {person.photo !== undefined ? (
                      <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full">
                        <Image
                          src={person.photo.src}
                          alt={person.photo.alt}
                          fill
                          className="object-cover"
                          sizes="64px"
                        />
                      </div>
                    ) : (
                      <ImagePlaceholder
                        label={person.photoLabel}
                        aspect="1/1"
                        className="h-16 w-16 shrink-0 rounded-full p-0"
                      />
                    )}
                    <div>
                      <h4 className="text-base font-semibold tracking-tight text-foreground">
                        {person.name}
                      </h4>
                      <p className="mt-0.5 text-sm font-medium text-muted-foreground">
                        {person.role}
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-6 text-muted-foreground">
                    {person.bio}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <IndependentProcess density="dense" />

      {/*
        ⚠ `homeServiceCards`, THE SAME DATA AND COMPONENT `/services/`
        RENDERS, NOT A SECOND CARD SET. `ServiceIndex`'s `cards` variant
        is the exact layout, grid, and card chrome the Services section
        already uses; passing the same array keeps copy, images, order,
        and destinations identical by construction rather than by
        copying them once and hoping the two stay in sync.
      */}
      {showsServices && (
        <ServiceIndex
          density="dense"
          surface="default"
          id="services-overview"
          title="Sewer and Drain Services for Property Decisions"
          intro={
            <>
              <p>
                The Sewer Pros provides sewer and drain inspection,
                diagnostics, locating, and cleaning to help property
                owners understand line conditions and consider
                appropriate next steps. Explore our services or see who
                we help.
              </p>
              {/*
                ⚠ TWO SECONDARY LINKS, NOT A CARD. "Who We Serve" is
                required by name; "View All Services" is added because
                the reused cards each link to one service page, and none
                of them points back at the `/services/` hub itself —
                without this, that destination has no path from this
                section at all.
              */}
              <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium">
                <Link
                  href="/services/"
                  className="text-accent-secondary underline underline-offset-4 hover:text-foreground"
                >
                  View All Services
                </Link>
                <Link
                  href="/for/"
                  className="text-accent-secondary underline underline-offset-4 hover:text-foreground"
                >
                  Who We Serve
                </Link>
              </div>
            </>
          }
          items={homeServiceCards}
          variant="cards"
        />
      )}

      {showsMarketCoverage && <MarketCoverage density="dense" surface="default" />}

      {/*
        `ProcessSteps` is already the established reusable three-step
        template (every other process band on the site renders through
        it), so this page's job is only to supply its own `intro`,
        `steps`, and `image` — no new component was needed.

        ⚠ `variant="cards"`, NOT THE DEFAULT `grid`. The task requirement
        is no numeral on the cards; `grid` always renders `01`/`02`/`03`
        and has no prop to suppress them, while `cards` replaces the
        numeral with a drawn icon per step instead — see
        `CARD_STEP_ICONS` in `ProcessSteps`, which draws exactly this
        Inspect/Understand/Decide sequence. `image` is still the ONE
        frame for the whole band, not per-step artwork.
      */}
      <ProcessSteps
        density="standard"
        surface="muted"
        id="process"
        title="What to Expect When You Work With Us"
        intro={content.process.intro}
        steps={content.process.steps}
        image={content.process.image}
        variant="cards"
      />

      {/*
        ⚠ `columns={2}`, THE ESTABLISHED PATTERN FOR A LONG FAQ LIST.
        `FaqSection`'s two-column layout already exists for exactly this
        case — the home page opts into it for its own 14-entry list
        rather than running one long single column. This page's 13
        entries are the same shape of problem.
      */}
      {showsFaq && content.faq !== undefined && (
        <FaqSection
          entries={content.faq}
          title="About The Sewer Pros: Frequently Asked Questions"
          eyebrow={content.faqEyebrow}
          surface="default"
          columns={2}
        />
      )}

      {/*
        ⚠ `action={null}`, NOT OMITTED. The form in `proof` carries its
        own submit button ("Request Service"), so a second button here
        pointing at `/contact/` would be a competing ask beside a form
        already on screen rather than a stronger one — the same rule
        `CtaSectionProps.action` documents and every other page's
        hero-form pairing already follows.
      */}
      <CtaSection
        variant="panel"
        title={content.cta?.title ?? 'Schedule an inspection'}
        body={content.cta?.body}
        action={null}
        /*
          Background photograph. `CtaSection` handles the scrim and the
          white heading and body; the form's own card is opaque with
          `text-foreground`, as the `backgroundImage` note requires.
        */
        backgroundImage={{
          src: '/images/brand/about/the-sewer-pros-about-contact-cta-sewer-camera-inspection-16x9.webp',
          alt: 'Sewer camera inspection equipment set up at a residential property',
          source: 'Owner-supplied About page CTA background (16:9 WebP).',
        }}
        proof={
          <div className="rounded-md border border-border bg-surface p-6 text-foreground shadow-sm sm:p-8">
            <LeadFormSection bare density="standard" idPrefix="about-cta-lead" />
          </div>
        }
      />
    </PageShell>
  )
}
