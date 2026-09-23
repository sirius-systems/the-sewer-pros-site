import Image from 'next/image'
import Link from 'next/link'
import { Section, Callout, Card, CardGrid, LinkCard, ButtonLink } from '@/components/ui'
import { SectionHeading } from './SectionHeading'
import { CheckIcon } from './section-icons'
import { CameraImageSlot } from './CameraImageSlot'
import { resolveApprovedLink } from '@/lib/links/approved-link'
import { getPage } from '@/data/pages'
import { markets } from '@/data/markets/markets'
import { marketImages } from '@/data/business/card-images'
import { anyCameraImage } from '@/data/business/camera-inspection-images'
import type { MarketId, ServiceHubContent } from '@/types'

/**
 * Extra sections for a service hub page (`ServiceHubContent`).
 *
 * Governed by docs/18-design-system.md §5.6, §11, §120; CLAUDE.md §9,
 * §11, §24, §31.
 *
 * ⚠ WORDING IS A LIMIT, NOT A STYLE. Every sentence passed in describes
 * what an inspection "can help identify" in "visible" conditions of the
 * "accessible" line. Nothing here promises a result, a deliverable the
 * business has not confirmed, or a repair service.
 *
 * ⚠ MARKET CARDS ROUTE TO MARKETS, NOT OFFICES. No address, rating,
 * phone number or availability claim appears; the phone number on file
 * is St. Louis only and does not belong on a three-market hub.
 */

type Hub = NonNullable<ServiceHubContent>

/* ==========================================================================
   Market router
   ========================================================================== */

export function MarketRouter({ content }: { content: NonNullable<Hub['marketRouter']> }) {
  return (
    <Section density="standard" surface="default" labelledBy={content.id}>
      <SectionHeading id={content.id} title={content.title} intro={<p>{content.intro}</p>} />
      <CardGrid columns={3} itemCount={content.items.length} className="mt-8">
        {content.items.map((item) => {
          const link = resolveApprovedLink(item.pageId)
          const marketId = getPage(item.pageId)?.marketId as MarketId | undefined
          const name = marketId !== undefined ? markets[marketId].name : link.label
          /*
            The approved unmarked area maps `MarketCoverage` already uses
            (no pin, no address, no business name), so a map here shows
            reach rather than an office (CLAUDE.md §11). A market without
            one renders no image at all. `object-top` crops the bottom of
            the 2600x1352 frame, which is where Google's attribution sits,
            the same crop the coverage cards make.

            The link is a button inside a plain card, not a card-wide
            anchor, because a button inside an anchor is invalid HTML.
          */
          const image = marketImages[item.pageId]
          return (
            <Card key={item.pageId} padded={false} className="flex flex-col overflow-hidden">
              {image !== undefined && (
                <div className="relative aspect-[16/9] w-full bg-surface-muted">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover object-top"
                  />
                </div>
              )}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-h3 font-medium text-foreground">{name}</h3>
                <p className="mt-3 text-body-sm text-muted-foreground">{item.description}</p>
                <div className="mt-auto pt-5">
                  <ButtonLink href={link.href} variant="accent" className="w-full sm:w-auto">
                    {item.actionLabel}
                  </ButtonLink>
                </div>
              </div>
            </Card>
          )
        })}
      </CardGrid>
    </Section>
  )
}

/* ==========================================================================
   Definition + pipe-path diagram
   ========================================================================== */

/**
 * A labelled illustration, not footage. Side view: a house, its
 * cleanout, the accessible line, and the camera head partway along it.
 * It shows the mechanism only, and says so in its caption.
 */
function PipePathDiagram({ label }: { label: string }) {
  return (
    <svg
      viewBox="0 0 480 220"
      role="img"
      aria-label={label}
      className="h-auto w-full text-foreground"
    >
      <rect x="0" y="120" width="480" height="100" className="fill-surface-muted" />
      <line x1="0" y1="120" x2="480" y2="120" className="stroke-border" strokeWidth="2" />
      {/* house */}
      <polygon points="30,80 90,40 150,80" className="fill-none stroke-current" strokeWidth="2" />
      <rect x="40" y="80" width="100" height="40" className="fill-none stroke-current" strokeWidth="2" />
      {/* cleanout */}
      <rect x="160" y="108" width="14" height="12" className="fill-none stroke-current" strokeWidth="2" />
      {/* sewer line */}
      <path d="M100 120 V150 H430" className="fill-none stroke-current" strokeWidth="10" strokeLinecap="round" opacity="0.25" />
      <path d="M167 120 V150 H360" className="fill-none stroke-accent-secondary" strokeWidth="3" strokeDasharray="6 6" />
      {/* camera head */}
      <circle cx="360" cy="150" r="9" className="fill-accent-secondary" />
      <text x="167" y="100" textAnchor="middle" className="fill-current text-[11px]">Access point</text>
      <text x="300" y="185" textAnchor="middle" className="fill-current text-[11px]">Accessible line</text>
      <text x="360" y="130" textAnchor="middle" className="fill-current text-[11px]">Camera</text>
    </svg>
  )
}

export function DefinitionSection({ content }: { content: NonNullable<Hub['definition']> }) {
  const id = 'what-is-a-sewer-camera-inspection'
  const hasPhotos = anyCameraImage(['monitor', 'equipment'])
  return (
    <Section density="standard" surface="default" labelledBy={id}>
      <div className="grid gap-10 lg:grid-cols-[7fr_5fr] lg:items-start">
        <div>
          <SectionHeading id={id} title={content.title} />
          <p className="mt-4 border-l-4 border-accent-secondary pl-5 text-body-lg text-foreground">
            {content.answer}
          </p>
          {content.supporting.map((paragraph) => (
            <p key={paragraph} className="mt-4 text-body text-muted-foreground">
              {paragraph}
            </p>
          ))}
        </div>
        <figure>
          <div className="rounded-md border border-border bg-surface p-4">
            <PipePathDiagram label={content.diagramLabel} />
          </div>
          <figcaption className="mt-2 text-caption text-muted-foreground">
            {content.diagramCaption}
          </figcaption>
        </figure>
      </div>
      {hasPhotos && (
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <CameraImageSlot slot="monitor" sizes="(min-width: 640px) 45vw, 100vw" />
          <CameraImageSlot slot="equipment" sizes="(min-width: 640px) 45vw, 100vw" />
        </div>
      )}
    </Section>
  )
}

/* ==========================================================================
   What it can and cannot show
   ========================================================================== */

function NeutralMark() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 shrink-0 text-muted-foreground" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M8 12h8" />
    </svg>
  )
}

export function LimitationsPanel({ content }: { content: NonNullable<Hub['limitations']> }) {
  const id = 'what-it-can-identify'
  const related =
    content.related !== undefined ? resolveApprovedLink(content.related.pageId) : undefined
  return (
    <Section density="dense" surface="muted" labelledBy={id}>
      <SectionHeading id={id} title={content.title} intro={<p>{content.intro}</p>} />
      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <Card className="bg-surface">
          <h3 className="text-h4 font-semibold text-foreground">{content.canIdentifyTitle}</h3>
          <ul className="mt-4 space-y-3">
            {content.canIdentify.map((item) => (
              <li key={item} className="flex gap-3 text-body-sm text-foreground">
                <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Card>
        <Card className="bg-surface">
          <h3 className="text-h4 font-semibold text-foreground">{content.cannotTitle}</h3>
          <ul className="mt-4 space-y-3">
            {content.cannot.map((item) => (
              <li key={item} className="flex gap-3 text-body-sm text-foreground">
                <NeutralMark />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>
      {content.related !== undefined && related !== undefined && (
        <p className="mt-6 text-body text-muted-foreground">
          {content.related.lead}{' '}
          <Link href={related.href} className="font-semibold text-accent-secondary underline underline-offset-4 hover:text-foreground">
            {content.related.label}
          </Link>
        </p>
      )}
    </Section>
  )
}

/* ==========================================================================
   Before your appointment
   ========================================================================== */

export function PrepPanel({ content }: { content: NonNullable<Hub['prep']> }) {
  return (
    <Section density="dense" surface="default">
      <Callout kind="good-to-know" label={content.title}>
        <ul className="space-y-2">
          {content.items.map((item) => (
            <li key={item} className="flex gap-2">
              <span aria-hidden="true" className="text-muted-foreground">-</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </Callout>
    </Section>
  )
}

/* ==========================================================================
   Audience pathways
   ========================================================================== */

export function AudiencePathways({ content }: { content: NonNullable<Hub['audiences']> }) {
  const id = 'sewer-camera-inspection-for-your-situation'
  return (
    <Section density="dense" surface="default" labelledBy={id}>
      <SectionHeading id={id} title={content.title} intro={<p>{content.intro}</p>} />
      <CardGrid columns={2} itemCount={content.items.length} className="mt-8">
        {content.items.map((item) => {
          const link = resolveApprovedLink(item.pageId)
          return (
            <LinkCard key={item.pageId} href={link.href} actionLabel={item.actionLabel}>
              <h3 className="text-h4 font-semibold text-foreground">{item.audience}</h3>
              <p className="mt-2 text-body-sm text-muted-foreground">{item.description}</p>
              <p className="mt-4 text-body-sm font-semibold text-accent-secondary">
                {item.actionLabel} <span aria-hidden="true">&rarr;</span>
              </p>
            </LinkCard>
          )
        })}
      </CardGrid>
    </Section>
  )
}

/* ==========================================================================
   Real inspection evidence
   ========================================================================== */

/**
 * Footage stills and a report example. Renders nothing in production
 * until a real, anonymized asset exists (docs/18 §120). In development
 * it also shows the case-study placeholder, so the intended shape is
 * visible to whoever supplies the material.
 *
 * ⚠ NO CASE STUDY IS AUTHORED. `data/business/proof.ts` holds none, and
 * a case study is a factual claim about a real customer (CLAUDE.md §24).
 */
export function evidenceRenders(content: Hub['evidence']): boolean {
  return content !== undefined && anyCameraImage(content.slots)
}

export function EvidenceGallery({ content }: { content: NonNullable<Hub['evidence']> }) {
  const id = 'real-inspection-evidence'
  return (
    <Section density="standard" surface="muted" labelledBy={id}>
      <SectionHeading id={id} title={content.title} intro={<p>{content.intro}</p>} />
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {content.slots.map((slot) => (
          <CameraImageSlot key={slot} slot={slot} sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw" />
        ))}
        {process.env.NODE_ENV !== 'production' && (
          <div
            data-image-placeholder="case-study"
            className="rounded-md border-2 border-dashed border-border p-4 text-caption text-muted-foreground"
          >
            <p className="font-semibold text-foreground">Case study placeholder</p>
            <p className="mt-1">
              Situation, service, finding and outcome from one verified,
              anonymized job. Author only when real. Development only.
            </p>
          </div>
        )}
      </div>
      <p className="mt-6 max-w-[var(--container-reading)] text-body-sm text-muted-foreground">
        {content.caveat}
      </p>
    </Section>
  )
}

/* ==========================================================================
   Related-services comparison
   ========================================================================== */

export function ServiceComparison({ content }: { content: NonNullable<Hub['comparison']> }) {
  const id = 'sewer-camera-inspection-vs-related-services'
  return (
    <Section density="dense" surface="default" labelledBy={id}>
      <SectionHeading id={id} title={content.title} intro={<p>{content.intro}</p>} />
      <div className="mt-8 overflow-x-auto">
        <table className="w-full min-w-[40rem] border-collapse text-left text-body-sm">
          <caption className="sr-only">{content.title}</caption>
          <thead>
            <tr className="border-b border-border text-caption uppercase tracking-wide text-muted-foreground">
              <th scope="col" className="py-3 pr-4 font-semibold">Service</th>
              <th scope="col" className="py-3 pr-4 font-semibold">Primary purpose</th>
              <th scope="col" className="py-3 font-semibold">May be the right fit when</th>
            </tr>
          </thead>
          <tbody>
            {content.rows.map((row) => {
              const link = row.pageId !== undefined ? resolveApprovedLink(row.pageId) : undefined
              return (
                <tr key={row.service} className="border-b border-border align-top">
                  <th scope="row" className="py-4 pr-4 font-semibold text-foreground">
                    {link !== undefined ? (
                      <Link href={link.href} className="text-accent-secondary underline underline-offset-4 hover:text-foreground">
                        {row.service}
                      </Link>
                    ) : (
                      <>
                        {row.service} <span className="font-normal text-muted-foreground">(this page)</span>
                      </>
                    )}
                  </th>
                  <td className="py-4 pr-4 text-muted-foreground">{row.purpose}</td>
                  <td className="py-4 text-muted-foreground">{row.fit}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      <p className="mt-6 max-w-[var(--container-reading)] text-body text-muted-foreground">
        {content.note}
      </p>
    </Section>
  )
}
