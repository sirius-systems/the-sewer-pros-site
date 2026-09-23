import Image from 'next/image'
import Link from 'next/link'
import { Section, ButtonLink, type SectionDensity } from '@/components/ui'
import {
  Hero,
  StatsBand,
  CtaSection,
  LocationSelectorCards,
  MobileContactBar,
} from '@/components/sections'
import { TrackedLink } from '@/components/tracking'
import { resolveAudienceHubImage } from '@/data/business/audience-hub-images'
import { getPage } from '@/data/pages'
import { marketList, marketPathname } from '@/data/markets/markets'
import { PageShell } from './PageShell'
import type { AudienceHubContent, MasterPageRecord } from '@/types'

/**
 * Who We Serve hub: `/for/`.
 *
 * A routing layer: hero with a 2x2 image collage, six crawlable audience
 * cards, a need-first router for visitors who do not think in roles, the
 * three-market chooser, verified proof figures, and a city-aware CTA.
 * Depth lives on the destination pages, so this page stays light.
 *
 * ⚠ IMAGES ARE PLACEHOLDER SLOTS until real photography lands; see
 * `data/business/audience-hub-images.ts` and
 * `public/images/audience-hub/README.md`. Interim scenes are decorative
 * (`alt=""`); the real files carry their own alt text.
 *
 * ⚠ NOTHING HERE IS CLIENT-SIDE NAVIGATION. Every audience, need, and
 * market link is a real anchor in the server HTML; `TrackedLink` only
 * adds a click report.
 */
export interface AudienceHubTemplateProps {
  page: MasterPageRecord
  content: AudienceHubContent
}

const HERO_TILES = ['hero-monitor', 'hero-technician', 'hero-consultation', 'hero-field'] as const

const linkClass =
  'text-sm font-medium text-accent-secondary underline underline-offset-4 hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-secondary'

export function AudienceHubTemplate({ page, content }: AudienceHubTemplateProps) {
  const ctaImage = resolveAudienceHubImage('cta')

  const cards = content.audiences.cards.flatMap((card) => {
    const target = getPage(card.pageId)
    if (target === undefined) return []
    return [{ ...card, name: target.name, pathname: target.pathname, audienceId: target.audienceId }]
  })

  const densities: SectionDensity[] = [
    'sparse', // hero
    'standard', // proof stats
    'standard', // audience cards
    'dense', // need router
    'standard', // location chooser
    'sparse', // closing CTA
  ]

  return (
    <PageShell
      page={page}
      densities={densities}
      schema={{
        title: content.seoTitle ?? content.hero.title,
        description: content.metaDescription,
        itemList: cards.map((card) => ({ name: card.name, pathname: card.pathname })),
      }}
    >
      {/*
        Subtle blue-gray backdrop. `Hero`'s own `backdrop` prop is not used:
        it flips the copy to white, and this hero keeps dark copy on a light
        ground. The image sits under a light overlay so the collage stays the
        focal point, and the hero's own section is made transparent so the
        layer shows through (the arbitrary variant targets that one section).
      */}
      <div className="relative isolate overflow-hidden [&>section]:bg-transparent!">
        <div aria-hidden="true" className="absolute inset-0 -z-10">
          <Image
            src="/images/audiences/audience-hub/hero/the-sewer-pros-who-we-serve-hero-blue-gray-background.webp"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-background/60" />
        </div>
        <Hero
          variant="split"
          eyebrow={content.hero.eyebrow}
          title={content.hero.title}
          intro={content.hero.intro}
          primaryAction={content.hero.primaryAction}
          secondaryAction={content.hero.secondaryAction}
          asideBalance="media"
          aside={
            <ul aria-hidden="true" className="grid grid-cols-2 gap-3 pb-4 sm:gap-4 lg:-mr-6">
              {HERO_TILES.map((key, index) => {
                const image = resolveAudienceHubImage(key)
                return (
                  <li
                    key={key}
                    className={`relative aspect-[4/3] overflow-hidden rounded-md border border-border bg-surface-muted shadow-sm ${
                      index % 2 === 1 ? 'translate-y-4' : ''
                    }`}
                  >
                    <Image
                      src={image.src}
                      alt=""
                      fill
                      priority={index < 2}
                      sizes="(min-width: 1024px) 30vw, 45vw"
                      className="object-contain"
                    />
                  </li>
                )
              })}
            </ul>
          }
        />
      </div>

      <StatsBand density="standard" surface="default" omitIds={['markets-served']} />

      <Section density="standard" surface="muted" labelledBy="audiences">
        <h2
          id="audiences"
          className="scroll-mt-24 text-h2 font-semibold tracking-tight text-balance"
        >
          {content.audiences.title}
        </h2>
        <p className="mt-3 max-w-[var(--container-reading)] text-body text-muted-foreground">
          {content.audiences.intro}
        </p>

        <ul className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => {
            const image = card.audienceId !== undefined
              ? resolveAudienceHubImage(
                  card.audienceId as Parameters<typeof resolveAudienceHubImage>[0],
                )
              : undefined
            return (
              <li key={card.pageId}>
                <article className="flex h-full flex-col overflow-hidden rounded-md border border-border bg-surface">
                  {image !== undefined && (
                    <div className="relative aspect-[16/10] bg-brand">
                      <Image
                        src={image.src}
                        alt={image.usingInterim ? '' : image.alt}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="text-h4 font-semibold tracking-tight">{card.name}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {card.description}
                    </p>
                    <p className="mt-4 text-caption text-muted-foreground">
                      <span className="font-semibold text-foreground">Common needs: </span>
                      {card.needs.join(' · ')}
                    </p>
                    <TrackedLink
                      href={card.pathname}
                      event="audience_select"
                      context={{ audience_id: card.audienceId }}
                      className={`${linkClass} mt-auto inline-flex min-h-11 items-center pt-4`}
                    >
                      {card.linkLabel} <span aria-hidden="true">&nbsp;→</span>
                    </TrackedLink>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </Section>

      <Section density="dense" surface="brand" labelledBy="need-router">
        <h2 id="need-router" className="text-h2 font-semibold tracking-tight text-balance">
          {content.needs.title}
        </h2>
        <p className="mt-3 max-w-[var(--container-reading)] text-body">{content.needs.intro}</p>
        <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {content.needs.items.map((item) => (
            <li key={item.href + item.label}>
              <TrackedLink
                href={item.href}
                event="cta_click"
                ctaLocation="section_cta"
                className="flex min-h-20 items-center justify-between gap-4 rounded-md border-2 border-white/70 px-6 py-5 text-lg font-semibold text-white transition-colors hover:border-white hover:bg-accent-secondary focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <span>{item.label}</span>
                <span aria-hidden="true" className="shrink-0 text-2xl leading-none">→</span>
              </TrackedLink>
            </li>
          ))}
        </ul>
      </Section>

      <LocationSelectorCards
        id="find-your-team"
        title={content.locations.title}
        intro={content.locations.intro}
      />

      <CtaSection
        variant="panel"
        title={content.cta.title}
        body={content.cta.body}
        action={null}
        backgroundImage={ctaImage}
        proof={
          <div className="flex flex-col gap-4">
            <div className="rounded-md border border-border bg-surface p-6 text-foreground shadow-sm sm:p-8">
              <h2 className="text-h3 font-semibold tracking-tight">Choose your market</h2>
              <div className="mt-5 flex flex-col gap-3">
                {marketList.map((market) => (
                  <ButtonLink key={market.id} href={`${marketPathname(market.id)}contact/`}>
                    {market.name}
                  </ButtonLink>
                ))}
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Prefer to call? Each market page lists the number to call.
              </p>
            </div>
            {/*
              Outside the white card, on the dark panel: an outlined white
              button would be invisible on the card's white surface. It is
              the same width as the card, so it lines up with the market
              buttons above it.
            */}
            <Link
              href="/about/"
              className="flex min-h-16 w-full items-center justify-center gap-2 rounded-md border-2 border-white px-6 py-4 text-lg font-semibold text-white transition-colors hover:bg-white hover:text-brand focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Learn More About The Sewer Pros <span aria-hidden="true">→</span>
            </Link>
          </div>
        }
      />

      <MobileContactBar />
    </PageShell>
  )
}
