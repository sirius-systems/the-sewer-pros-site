import { Section, Prose, type SectionDensity, type SectionSurface } from '@/components/ui'
import {
  Hero,
  TrustBar,
  ServiceIndex,
  AuthorityBand,
  FaqSection,
  CtaSection,
  authorityBandRenders,
  serviceIndexRenders,
  faqSectionRenders,
} from '@/components/sections'
import { PageShell } from './PageShell'
import type { ReactNode } from 'react'
import type { HubPageContent, MasterPageRecord } from '@/types'

/**
 * Hub page — `/services/`, `/locations/`, `/for/`, `/commercial/`,
 * `/resources/`.
 *
 * Governed by docs/03-information-architecture.md §52-53;
 * docs/16-internal-linking-strategy.md; docs/18-design-system.md §5.6.
 *
 * A hub's job is orientation: explain the family, then list its
 * members. The list uses `ServiceIndex` — a scannable index rather than
 * a card grid — for the reason Appendix A gives directly: the services
 * hub has TEN members, and ten divides cleanly into no sensible column
 * count. 3 columns gives 3+3+3+1, 4 gives 4+4+2. 18 §5.6 forbids
 * forcing either.
 *
 * The same pattern suits the other hubs regardless of count, which
 * keeps hub pages consistent without the card-grid default 18 §5.6
 * warns is "the single strongest visual signal of a templated site".
 */
export interface HubPageTemplateProps {
  page: MasterPageRecord
  content: HubPageContent
  /** Heading above the member list. */
  itemsTitle?: string
  /** Numbered rows suit an ordered family; plain suits a set. */
  numbered?: boolean
  /**
   * Surface for the items index.
   *
   * Only needed on a hub with NO faq, where the index is the last
   * content band before the CTA and would otherwise leave the page an
   * unbroken run of `default` surfaces. `/for/` sets this.
   */
  itemsSurface?: SectionSurface
  /**
   * Full-bleed layer behind the hero, e.g. `<HeroBackdrop set={...} />`.
   *
   * ⚠ SUPPLYING THIS FLIPS THE HERO COPY TO WHITE. `Hero` treats the
   * backdrop and the white text as one decision, because they are:
   * white copy without a backdrop is invisible and dark copy over a
   * photograph is unreadable. Whatever is passed must therefore carry
   * a scrim dark enough to hold that text - `HeroBackdrop` does.
   *
   * ⚠ HUBS ARE OTHERWISE EDITORIAL, AND THAT IS STILL THE DEFAULT.
   * 18 §37 says a hero "should not depend on a decorative image to
   * explain the page", and four of the five hubs pass nothing here.
   * `/locations/` is the exception on owner direction (2026-09-05):
   * its subject is three markets and its backdrop cycles one frame
   * per market, which is the page's own content rather than dressing.
   * A hub whose backdrop would not pass that test should stay
   * editorial.
   */
  backdrop?: ReactNode
}

export function HubPageTemplate({
  page,
  content,
  itemsTitle = 'In this section',
  numbered = false,
  itemsSurface = 'default',
  backdrop,
}: HubPageTemplateProps) {
  // A hub only takes the authority band when a non-brand section
  // follows it. `AuthorityBand` and the closing `CtaSection
  // variant="panel"` are the only two brand surfaces in the system, and
  // stacking dark sections is a named anti-pattern (18 §11).
  //
  // `/for/` is the live case: it has no FAQ, so the band would land
  // directly against the CTA panel. It is omitted there rather than the
  // adjacency being accepted.
  // The band also omits itself below three proof points, so the array
  // entry must read the same condition the render does.
  //
  // The FAQ condition is `faqSectionRenders`, not `!== undefined`: an
  // authored but empty entry list renders nothing, which would leave
  // the band against the closing CTA panel — the stacked brand
  // surfaces this whole condition exists to prevent.
  const showAuthority =
    faqSectionRenders(content.faq) && authorityBandRenders()

  // Explicit sequence, checked against `sectionRhythmIssues()` at build.
  const densities: SectionDensity[] = [
    'sparse',
    'dense',
    ...(content.body !== undefined ? (['standard'] as const) : []),
    ...(serviceIndexRenders(content.items) ? (['standard'] as const) : []),
    ...(showAuthority ? (['standard'] as const) : []),
    ...(faqSectionRenders(content.faq) ? (['dense'] as const) : []),
    'sparse',
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
        `backdrop` is passed straight through rather than being wrapped
        here. `Hero` already owns that composition: it supplies the
        `relative isolate overflow-hidden` container, drops the
        section's own surface, and switches the copy to white. Doing
        any of that again at this level would fight it.
      */}
      <Hero
        variant="editorial"
        eyebrow={content.hero.eyebrow}
        title={content.hero.title}
        intro={content.hero.intro}
        backdrop={backdrop}
      />

      <TrustBar />

      {content.body !== undefined && (
        <Section density="standard" width="reading">
          <Prose>{content.body}</Prose>
        </Section>
      )}

      {content.items !== undefined && (
        <ServiceIndex
          id="hub-items"
          title={itemsTitle}
          items={content.items}
          numbered={numbered}
          surface={itemsSurface}
        />
      )}

      {showAuthority && <AuthorityBand title="How we work" />}

      {/*
        Muted, deliberately. A hub runs hero → body → items → faq, and
        every one of those is a `default` surface, so the page reads as
        an unbroken white column until the brand CTA. The FAQ is also
        `width="reading"` while the index above it is full-width: at
        1440px its left edge sits ~300px inside the section above, which
        on a shared background looks like a misalignment rather than a
        narrower measure. One surface change fixes both.
      */}
      {content.faq !== undefined && (
        <FaqSection entries={content.faq} surface="muted" />
      )}

      <CtaSection
        variant="panel"
        title={content.cta?.title ?? 'Schedule an inspection'}
        body={content.cta?.body}
      />
    </PageShell>
  )
}
