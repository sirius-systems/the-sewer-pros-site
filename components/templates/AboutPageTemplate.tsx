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
  LeadershipProfile,
  MarketCoverage,
  ProcessSteps,
  RelatedLinks,
  FaqSection,
  CtaSection,
  relatedLinksRenders,
  marketCoverageRenders,
  faqSectionRenders,
} from '@/components/sections'
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
 * ⚠ EVERY IMAGE SLOT IS AN `ImagePlaceholder`, NOT A PHOTOGRAPH. No
 * approved founder, brand-story or hero photography exists yet
 * (18 §28-34), so this page is intentionally not photography-complete
 * — see `ImagePlaceholder` and hold this page's indexation status
 * accordingly until every placeholder is replaced.
 */
export interface AboutPageTemplateProps {
  page: MasterPageRecord
  content: AboutPageContent
}

export function AboutPageTemplate({ page, content }: AboutPageTemplateProps) {
  const showsExploreLinks = relatedLinksRenders(content.exploreLinkPageIds)
  const showsMarketCoverage = marketCoverageRenders()
  const showsFaq = faqSectionRenders(content.faq)

  // Explicit sequence, checked against `sectionRhythmIssues()` at build.
  const densities: SectionDensity[] = [
    'sparse', // hero
    'dense', // trust bar
    'standard', // brand story
    'dense', // independent-opinion band (fixed brand surface)
    'standard', // stats
    ...(showsExploreLinks ? (['dense'] as const) : []),
    'standard', // leadership
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
      <Hero
        variant="split"
        eyebrow={content.hero.eyebrow}
        title={content.hero.title}
        intro={content.hero.intro}
        secondaryAction={{ href: '/locations/', label: 'Find Your Location' }}
        media={
          <ImagePlaceholder
            label="Technician conducting a sewer camera inspection"
            filename="sewer-camera-inspection-technician-[market].webp"
            aspect="4/3"
          />
        }
      />

      <TrustBar />

      {/*
        Brand story — reading-width copy beside an image slot, the same
        7/5 split `Hero`'s `media` variant uses, so this reads as the
        page's opening narrative rather than a second hero.
      */}
      <Section density="standard" width="standard" labelledBy="story">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="text-caption font-semibold tracking-wide text-muted-foreground uppercase">
              Our story
            </p>
            <h2
              id="story"
              className="mt-2 text-h2 font-semibold tracking-tight text-balance"
            >
              Built around service, communication, and clearer sewer answers
            </h2>
            <div className="mt-5">
              <Prose>{content.brandStory}</Prose>
            </div>
          </div>
          <div className="lg:col-span-5">
            <ImagePlaceholder
              label="Founder or field team, current work in progress"
              filename="the-sewer-pros-field-team.webp"
              aspect="4/3"
            />
          </div>
        </div>
      </Section>

      <IndependentProcess density="dense" />

      <StatsBand density="standard" surface="muted" />

      {showsExploreLinks && (
        <RelatedLinks
          density="dense"
          surface="default"
          id="explore"
          title="Built for the people making property decisions"
          intro="Explore what we do and who we help."
          pageIds={content.exploreLinkPageIds}
        />
      )}

      <LeadershipProfile density="standard" surface="muted" people={content.leadership} />

      {showsMarketCoverage && <MarketCoverage density="dense" surface="default" />}

      <ProcessSteps
        density="standard"
        surface="muted"
        id="process"
        title="What to expect when you work with us"
      />

      {showsFaq && content.faq !== undefined && (
        <FaqSection
          entries={content.faq}
          title="Common questions"
          eyebrow={content.faqEyebrow}
          surface="default"
        />
      )}

      <CtaSection
        variant="panel"
        title={content.cta?.title ?? 'Schedule an inspection'}
        body={content.cta?.body}
      />
    </PageShell>
  )
}
