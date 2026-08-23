import { Section, Prose, type SectionDensity } from '@/components/ui'
import {
  Hero,
  TrustBar,
  ServiceIndex,
  AuthorityBand,
  ProofGallery,
  TestimonialBand,
  LeadFormSection,
  CoverageSection,
  RelatedLinks,
  FaqSection,
  CtaSection,
} from '@/components/sections'
import { marketOperatingDetail } from '@/data/markets'
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
 * ---------------------------------------------------------------------------
 * THE PHONE IS MARKET-SCOPED, AND THAT IS THE WHOLE POINT
 * ---------------------------------------------------------------------------
 * This is the only template that passes `phone` to `CtaSection`.
 *
 * St. Louis, San Diego, and Las Vegas each publish a DIFFERENT number
 * with different hours (DEC-070, DEC-071, DEC-073), and 01 §20 forbids
 * copying one market's facts onto another's page. A market page knows
 * its market, so it can show the right one; the shared header cannot,
 * which is why it links to `/contact/` instead (PENDING-017).
 *
 * Sourced from `marketOperatingDetail`, whose `Partial` type means a
 * market with no published number simply has no entry — absence reads
 * as "not published" rather than falling back to another market's.
 *
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
  // Market-specific published contact. Absent markets get no phone
  // rather than another market's (01 §20).
  const detail =
    page.marketId !== undefined ? marketOperatingDetail[page.marketId] : undefined
  const phone =
    detail !== undefined
      ? { label: detail.phone, href: `tel:${detail.phoneE164}` }
      : undefined

  // Explicit sequence, checked against `sectionRhythmIssues()` at build.
  // The three gated sections contribute no entry — they render nothing.
  const densities: SectionDensity[] = [
    'sparse',
    'dense',
    ...(content.body !== undefined ? (['standard'] as const) : []),
    ...(content.services !== undefined ? (['dense'] as const) : []),
    'standard',
    ...(content.coverage !== undefined ? (['standard'] as const) : []),
    ...(content.locationPageIds !== undefined ? (['dense'] as const) : []),
    ...(content.faq !== undefined ? (['dense'] as const) : []),
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
      <Hero
        variant="editorial"
        eyebrow={content.hero.eyebrow}
        title={content.hero.title}
        intro={content.hero.intro}
      />

      <TrustBar />

      {content.body !== undefined && (
        <Section density="standard" width="reading">
          <Prose>{content.body}</Prose>
        </Section>
      )}

      {content.services !== undefined && (
        <ServiceIndex
          density="dense"
          id="market-services"
          title="Services in this market"
          items={content.services}
        />
      )}

      <AuthorityBand title="How we work" />

      <ProofGallery title="Recent work" />

      <TestimonialBand />

      <LeadFormSection />

      {content.coverage !== undefined && (
        <CoverageSection
          id="service-area"
          title={content.coverage.title}
          intro={content.coverage.intro}
          pageIds={content.coverage.pageIds}
          names={content.coverage.names}
          availabilityStatement={content.coverage.availabilityStatement}
        />
      )}

      {content.locationPageIds !== undefined && (
        <RelatedLinks
          id="locations"
          title="Areas we serve"
          pageIds={content.locationPageIds}
          surface="default"
          // A gated market hub may link to its gated locations: this
          // module is not an indexable link module, because the page
          // rendering it is not indexed (04 §4). Without this the
          // cluster is orphaned from its own hub and cannot be QA'd.
          indexableContext={page.status === 'launch'}
        />
      )}

      {content.faq !== undefined && <FaqSection entries={content.faq} />}

      <CtaSection
        variant="panel"
        title={content.cta?.title ?? 'Schedule an inspection'}
        body={content.cta?.body}
        phone={phone}
      />
    </PageShell>
  )
}
