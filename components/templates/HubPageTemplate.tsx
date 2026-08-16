import { Section, Prose, type SectionDensity } from '@/components/ui'
import {
  Hero,
  ServiceIndex,
  FaqSection,
  CtaSection,
} from '@/components/sections'
import { PageShell } from './PageShell'
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
}

export function HubPageTemplate({
  page,
  content,
  itemsTitle = 'In this section',
  numbered = false,
}: HubPageTemplateProps) {
  const densities: SectionDensity[] = [
    'sparse',
    ...(content.body !== undefined ? (['standard'] as const) : []),
    ...(content.items !== undefined ? (['standard'] as const) : []),
    ...(content.faq !== undefined ? (['dense'] as const) : []),
    'sparse',
  ]

  return (
    <PageShell page={page} densities={densities}>
      <Hero
        variant="editorial"
        eyebrow={content.hero.eyebrow}
        title={content.hero.title}
        intro={content.hero.intro}
      />

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
        />
      )}

      {content.faq !== undefined && <FaqSection entries={content.faq} />}

      <CtaSection
        variant="panel"
        title={content.cta?.title ?? 'Schedule an inspection'}
        body={content.cta?.body}
      />
    </PageShell>
  )
}
