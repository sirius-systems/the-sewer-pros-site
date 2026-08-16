import { Section, Prose, type SectionDensity } from '@/components/ui'
import {
  Hero,
  ServiceIndex,
  RelatedLinks,
  FaqSection,
  CtaSection,
} from '@/components/sections'
import { PageShell } from './PageShell'
import type { MarketPageContent, MasterPageRecord } from '@/types'

/**
 * Market hub page.
 *
 * Structure from docs/18-design-system.md §112:
 *
 *   Local Hero → Market Service Overview → Local Differentiation
 *   → Primary Local Services → Who We Help → Approved Locations
 *   → Local Proof → Commercial → Resources → FAQ → CTA
 *
 * 18 §109: "Market — location-led and locally contextual."
 *
 * ---------------------------------------------------------------------------
 * TWO SECTIONS FROM §112 ARE ABSENT
 * ---------------------------------------------------------------------------
 * LOCAL PROOF — no verified review or case-study data exists (01 §35,
 * §77; CLAUDE.md §76-77). An empty proof block invites fabrication.
 *
 * LOCAL DIFFERENTIATION as a fixed section — 18 §73 requires local
 * content be meaningful and verified, and warns against filler. Local
 * material belongs in `content.body`, written per market against real
 * conditions, rather than a slot the template asks every market to
 * fill. CLAUDE.md §21's location test applies directly: if the copy
 * survives swapping the city name, it should not ship.
 *
 * ---------------------------------------------------------------------------
 * ⚠ THIS TEMPLATE ALSO SERVES A MARKET WITH NO CONFIRMED SERVICES
 * ---------------------------------------------------------------------------
 * `/las-vegas-nv/` is an approved (gated) page where zero of 18
 * services are confirmed. `services` and `locationPageIds` are both
 * optional, and the link modules drop gated pages, so the template
 * renders a market page that makes no availability claim. The copy
 * still has to honour that — 01 §20 and §26 forbid implying service
 * where it is unconfirmed.
 */
export interface MarketPageTemplateProps {
  page: MasterPageRecord
  content: MarketPageContent
}

export function MarketPageTemplate({
  page,
  content,
}: MarketPageTemplateProps) {
  const densities: SectionDensity[] = [
    'sparse',
    ...(content.body !== undefined ? (['standard'] as const) : []),
    ...(content.services !== undefined ? (['standard'] as const) : []),
    ...(content.locationPageIds !== undefined ? (['dense'] as const) : []),
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

      {content.services !== undefined && (
        <ServiceIndex
          id="market-services"
          title="Services in this market"
          items={content.services}
        />
      )}

      {content.locationPageIds !== undefined && (
        <RelatedLinks
          id="locations"
          title="Areas we serve"
          pageIds={content.locationPageIds}
          surface="default"
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
