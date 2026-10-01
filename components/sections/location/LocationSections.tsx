import Image from 'next/image'
import type { ReactNode } from 'react'
import { Section, Callout } from '@/components/ui'
import { SectionHeading } from '../SectionHeading'
import { LocationLinkAnchor } from './LocationLinkAnchor'
import { resolveApprovedLink } from '@/lib/links/approved-link'
import { cn } from '@/lib/utils/cn'
import type {
  CardImage,
  LocationBuyingGuide,
  LocationHousingAge,
  LocationKeyTakeaways,
  LocationMunicipalProgram,
  LocationNearbyAreas,
  LocationResponsibility,
  LocationSecondOpinion,
  LocationSources,
  LocationSystemExplainer,
  LocationWhoToCall,
} from '@/types'

/**
 * Optional, content-gated sections for the rich location composition.
 *
 * Each export renders one section from one `LocationPageContent` field and
 * is mounted by `LocationPageTemplate` only when that field is set. Section
 * headings double as the in-page anchor targets (`#responsible`, `#age`, ...)
 * because `app/globals.css` gives every `:target` a scroll margin under the
 * sticky header.
 *
 * ⚠ AN IMAGE IS RENDERED ONLY WHEN THE CONTENT SUPPLIES ONE. There is no
 * placeholder fallback: the page is live and indexable, so an omitted image
 * is a text-only layout rather than a labelled grey box.
 */

const LINK_ON_LIGHT =
  '[&_a]:text-accent-secondary [&_a]:underline [&_a]:underline-offset-4 [&_a:hover]:text-foreground'

const TEXT_LINK =
  'inline-flex min-h-11 items-center text-sm font-medium text-accent-secondary underline underline-offset-4 hover:text-foreground'

const SOLID_CTA =
  'inline-flex min-h-11 items-center justify-center rounded-md bg-accent px-5 text-sm font-semibold text-accent-foreground hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-secondary'

function Photo({
  image,
  sizes,
  className,
}: {
  image: CardImage | undefined
  sizes: string
  className?: string
}) {
  if (image === undefined) return null
  return (
    <div
      className={cn(
        'relative aspect-[4/3] w-full overflow-hidden rounded-md bg-surface-muted',
        className,
      )}
    >
      <Image src={image.src} alt={image.alt} fill sizes={sizes} className="object-cover" />
    </div>
  )
}

/**
 * Horizontally scrollable table wrapper.
 *
 * A scroll container must be keyboard-reachable (axe
 * `scrollable-region-focusable`), so this is a focusable, labelled region.
 * Local rather than the shared `ScrollableTable`, which other pages use and
 * which this change does not touch.
 */
function ScrollableTable({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div>
      <p className="mb-2 text-caption text-muted-foreground sm:hidden">
        Scroll horizontally to see the full table.
      </p>
      <div
        role="region"
        aria-label={label}
        tabIndex={0}
        className="overflow-x-auto focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-secondary"
      >
        {children}
      </div>
    </div>
  )
}

/** ReactNode paragraphs with a shared vertical rhythm. */
function Paragraphs({
  items,
  className,
}: {
  items: readonly ReactNode[]
  className?: string
}) {
  return (
    <div className={cn('space-y-4 text-base leading-7', className)}>
      {items.map((item, i) => (
        <p key={i}>{item}</p>
      ))}
    </div>
  )
}

/* ==========================================================================
   Key takeaways + jump nav
   ========================================================================== */

export function KeyTakeaways({ content }: { content: LocationKeyTakeaways }) {
  return (
    <Section density="dense" surface="default" labelledBy="key-takeaways">
      <div className="grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <h2 id="key-takeaways" className="text-h3 font-semibold tracking-tight">
            {content.title}
          </h2>
          <ul className="mt-4 list-disc space-y-3 pl-6 text-base leading-7">
            {content.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
        <nav aria-label="On this page" className="lg:col-span-5">
          <p className="text-caption font-semibold tracking-wide text-muted-foreground uppercase">
            {content.jumpNavLabel}
          </p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {content.jumpNav.map((entry) => (
              <li key={entry.href}>
                <a
                  href={entry.href}
                  className="inline-flex min-h-11 items-center rounded-md border border-border bg-surface px-3 text-sm font-medium text-accent-secondary hover:bg-surface-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-secondary"
                >
                  {entry.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </Section>
  )
}

/* ==========================================================================
   Who is responsible
   ========================================================================== */

export function ResponsibilitySection({ content }: { content: LocationResponsibility }) {
  return (
    <Section density="standard" surface="default" labelledBy="responsible">
      <SectionHeading eyebrow={content.eyebrow} title={content.title} id="responsible" />
      <div className={cn('mt-4 max-w-[var(--container-reading)] text-body-lg', LINK_ON_LIGHT)}>
        {content.answer}
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {content.cards.map((card) => (
          <div key={card.title} className="rounded-md border border-border bg-surface-muted p-6">
            <p className="inline-block rounded-md bg-surface px-2.5 py-1 text-caption font-semibold text-foreground">
              {card.tag}
            </p>
            <h3 className="mt-3 text-h4 font-semibold">{card.title}</h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">{card.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <ScrollableTable label={content.table.caption}>
          <table className="w-full min-w-[40rem] border-collapse text-left text-sm">
            <caption className="sr-only">{content.table.caption}</caption>
            <thead>
              <tr className="bg-surface">
                <td className="w-1/5 border border-border p-3">
                  <span className="sr-only">{content.table.columns[0]}</span>
                </td>
                {content.table.columns.slice(1).map((col) => (
                  <th
                    key={col}
                    scope="col"
                    className="border border-border p-3 text-base font-semibold"
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {content.table.rows.map((row) => (
                <tr key={row.label} className="bg-surface align-top">
                  <th scope="row" className="border border-border p-3 font-semibold">
                    {row.label}
                  </th>
                  <td className="border border-border p-3 leading-6">{row.publicMain}</td>
                  <td className="border border-border p-3 leading-6">{row.privateLateral}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </ScrollableTable>
      </div>

      <p className="mt-4 max-w-[var(--container-reading)] text-sm text-muted-foreground">
        {content.note}
      </p>
    </Section>
  )
}

/* ==========================================================================
   How the city's system works
   ========================================================================== */

export function SystemExplainer({ content }: { content: LocationSystemExplainer }) {
  return (
    <Section density="standard" surface="muted" labelledBy="how-system">
      <div className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <SectionHeading eyebrow={content.eyebrow} title={content.title} id="how-system" />
          <Paragraphs items={content.paragraphs} className={cn('mt-6', LINK_ON_LIGHT)} />
        </div>
        <aside className="lg:col-span-5">
          <div className="rounded-md border border-border bg-surface p-6">
            <Photo
              image={content.card.image}
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="mb-5"
            />
            <h3 className="text-h4 font-semibold">{content.card.title}</h3>
            <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-6">
              {content.card.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
            <p className="mt-4 text-sm font-medium leading-6">{content.card.closing}</p>
          </div>
        </aside>
      </div>
    </Section>
  )
}

/* ==========================================================================
   Home age
   ========================================================================== */

export function HousingAgeSection({ content }: { content: LocationHousingAge }) {
  return (
    <Section density="dense" surface="default" labelledBy="age">
      <SectionHeading eyebrow={content.eyebrow} title={content.title} id="age" />
      <Paragraphs items={content.paragraphs} className="mt-6 max-w-[var(--container-reading)]" />
      <div className="mt-8">
        <ScrollableTable label={content.table.caption}>
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
            <caption className="py-2 text-left text-sm font-semibold">
              {content.table.caption}
            </caption>
            <thead>
              <tr className="bg-surface">
                {content.table.columns.map((col) => (
                  <th key={col} scope="col" className="border border-border p-3 font-semibold">
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {content.table.rows.map((row) => (
                <tr key={row[0]} className="bg-surface align-top">
                  <th scope="row" className="border border-border p-3 font-semibold">
                    {row[0]}
                  </th>
                  <td className="border border-border p-3">{row[1]}</td>
                  <td className="border border-border p-3">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </ScrollableTable>
      </div>
    </Section>
  )
}

/* ==========================================================================
   Who to call (dark)
   ========================================================================== */

export function WhoToCallSection({ content }: { content: LocationWhoToCall }) {
  return (
    <Section density="standard" surface="brand" labelledBy="who-to-call">
      <div className={cn('grid gap-10', content.image !== undefined && 'lg:grid-cols-12')}>
        <div className={cn(content.image !== undefined && 'lg:col-span-7')}>
          <p className="text-caption font-semibold tracking-wide text-white uppercase">
            {content.eyebrow}
          </p>
          <h2 id="who-to-call" className="mt-3 text-h2 font-semibold tracking-tight text-balance">
            {content.title}
          </h2>
          <div className="mt-5 max-w-[var(--container-reading)] space-y-4 text-body-lg">
            {content.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <div className="rounded-md bg-surface p-6 text-foreground">
              <p className="text-caption font-semibold tracking-wide text-muted-foreground uppercase">
                {content.agency.label}
              </p>
              <a
                href={content.agency.phone.href}
                className="mt-2 inline-flex min-h-11 items-center text-h3 font-semibold text-accent-secondary underline underline-offset-4"
              >
                {content.agency.phone.label}
              </a>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{content.agency.text}</p>
              <ul className="mt-3 space-y-1">
                {content.agency.links.map((link) => (
                  <li key={link.label}>
                    <LocationLinkAnchor link={link} className={TEXT_LINK} />
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-md bg-surface p-6 text-foreground">
              <p className="text-caption font-semibold tracking-wide text-muted-foreground uppercase">
                {content.company.label}
              </p>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{content.company.text}</p>
            </div>
          </div>
        </div>
        {content.image !== undefined && (
          <div className="lg:col-span-5">
            <Photo image={content.image} sizes="(min-width: 1024px) 40vw, 100vw" />
          </div>
        )}
      </div>
    </Section>
  )
}

/* ==========================================================================
   City lateral program
   ========================================================================== */

export function MunicipalProgramSection({ content }: { content: LocationMunicipalProgram }) {
  return (
    <Section density="standard" surface="default" labelledBy="city-program">
      <div className={cn('grid gap-10', content.image !== undefined && 'lg:grid-cols-12')}>
        <div className={cn(content.image !== undefined && 'lg:col-span-7')}>
          <SectionHeading
            eyebrow={content.eyebrow}
            title={content.title}
            id="city-program"
            intro={<p>{content.lede}</p>}
          />
          <Paragraphs items={content.paragraphs} className={cn('mt-6', LINK_ON_LIGHT)} />
        </div>
        {content.image !== undefined && (
          <div className="lg:col-span-5">
            <Photo image={content.image} sizes="(min-width: 1024px) 40vw, 100vw" />
          </div>
        )}
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {[content.covers, content.doesNotCover].map((block) => (
          <div key={block.title} className="rounded-md border border-border bg-surface-muted p-6">
            <h3 className="text-h4 font-semibold">{block.title}</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6">
              {block.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className={cn('mt-8 max-w-[var(--container-reading)] text-base leading-7', LINK_ON_LIGHT)}>
        <p>{content.closing}</p>
      </div>
    </Section>
  )
}

/* ==========================================================================
   Independent second opinion (dark)
   ========================================================================== */

export function SecondOpinionSection({ content }: { content: LocationSecondOpinion }) {
  return (
    <Section density="sparse" surface="brand" labelledBy="second-opinion">
      <p className="text-caption font-semibold tracking-wide text-white uppercase">
        {content.eyebrow}
      </p>
      <h2
        id="second-opinion"
        className="mt-3 max-w-[var(--container-reading)] text-h2 font-semibold tracking-tight text-balance"
      >
        {content.title}
      </h2>
      <div className="mt-5 max-w-[var(--container-reading)] space-y-4 text-body-lg">
        {content.ledes.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>
      <div className="mt-6 flex flex-col items-start gap-3">
        <a
          href="#request"
          data-service-id="svc-sewer-camera-inspection"
          data-preselect-service="svc-sewer-camera-inspection"
          className="inline-flex min-h-11 items-center justify-center rounded-md bg-accent px-5 text-sm font-semibold text-accent-foreground ring-2 ring-white hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          {content.cta.label}
        </a>
        <p className="max-w-[var(--container-reading)] text-sm">{content.cta.supportLine}</p>
      </div>

      <ol className="mt-10 grid gap-6 md:grid-cols-3">
        {content.steps.map((step, i) => (
          <li key={step.title} className="overflow-hidden rounded-md bg-surface text-foreground">
            <Photo
              image={step.image}
              sizes="(min-width: 768px) 33vw, 100vw"
              className="rounded-none"
            />
            <div className="p-5">
              <p className="text-caption font-semibold text-muted-foreground">Step {i + 1}</p>
              <h3 className="mt-1 text-h4 font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{step.body}</p>
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-8 rounded-md bg-surface p-6 text-foreground">
        <Callout kind="independent" label="Independent inspection note">
          <h3 className="text-h4 font-semibold">{content.callout.title}</h3>
          <p className="mt-2 text-sm leading-6">{content.callout.body}</p>
        </Callout>
      </div>
    </Section>
  )
}

/* ==========================================================================
   Buying a home
   ========================================================================== */

export function BuyingGuideSection({ content }: { content: LocationBuyingGuide }) {
  return (
    <Section density="standard" surface="muted" labelledBy="buying">
      <div className={cn('grid gap-10', content.image !== undefined && 'lg:grid-cols-12')}>
        {content.image !== undefined && (
          <div className="lg:col-span-5">
            <Photo image={content.image} sizes="(min-width: 1024px) 40vw, 100vw" />
          </div>
        )}
        <div className={cn(content.image !== undefined && 'lg:col-span-7')}>
          <SectionHeading
            eyebrow={content.eyebrow}
            title={content.title}
            id="buying"
            intro={<p>{content.lede}</p>}
          />
          <p className="mt-4 max-w-[var(--container-reading)] text-base leading-7">{content.body}</p>
          <ul className="mt-4 space-y-1">
            {content.links.map((link) => (
              <li key={link.label}>
                <LocationLinkAnchor link={link} className={TEXT_LINK} />
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <a
              href="#request"
              data-service-id="svc-pre-purchase-sewer-inspection"
              data-preselect-service="svc-pre-purchase-sewer-inspection"
              className={SOLID_CTA}
            >
              {content.cta.label}
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 rounded-md border border-border bg-surface p-6">
        <div
          className={cn(
            'grid gap-6',
            content.agents.image !== undefined && 'md:grid-cols-12 md:items-center',
          )}
        >
          <div className={cn(content.agents.image !== undefined && 'md:col-span-7')}>
            <p className="text-caption font-semibold tracking-wide text-muted-foreground uppercase">
              {content.agents.eyebrow}
            </p>
            <h3 className="mt-2 text-h3 font-semibold tracking-tight">{content.agents.title}</h3>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">{content.agents.body}</p>
            <div className="mt-3">
              <LocationLinkAnchor link={content.agents.link} className={TEXT_LINK} />
            </div>
          </div>
          {content.agents.image !== undefined && (
            <div className="md:col-span-5">
              <Photo image={content.agents.image} sizes="(min-width: 768px) 35vw, 100vw" />
            </div>
          )}
        </div>
      </div>
    </Section>
  )
}

/* ==========================================================================
   Nearby areas (hand-authored)
   ========================================================================== */

export function NearbyAreasSection({ content }: { content: LocationNearbyAreas }) {
  return (
    <Section density="standard" surface="default" labelledBy="areas">
      <SectionHeading
        eyebrow={content.eyebrow}
        title={content.title}
        id="areas"
        intro={<p>{content.body}</p>}
      />
      <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {content.items.map((item) => {
          const href = resolveApprovedLink(item.pageId).href
          return (
            <li key={item.pageId}>
              <a
                href={href}
                className="block h-full rounded-md border border-border bg-surface p-5 hover:bg-surface-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-secondary"
              >
                <span className="text-h4 font-semibold text-foreground">{item.title}</span>
                <span className="mt-1 block text-sm text-muted-foreground">
                  {item.description}
                </span>
              </a>
            </li>
          )
        })}
      </ul>
    </Section>
  )
}

/* ==========================================================================
   Sources
   ========================================================================== */

const LONG_DATE = new Intl.DateTimeFormat('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  timeZone: 'UTC',
})

export function SourcesBlock({ content }: { content: LocationSources }) {
  const reviewed = LONG_DATE.format(new Date(`${content.lastReviewed}T00:00:00Z`))
  return (
    <Section density="dense" surface="muted" labelledBy="sources">
      <h2 id="sources" className="text-h4 font-semibold">
        {content.title}
      </h2>
      <ul className="mt-3 space-y-1 text-sm">
        {content.links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              rel="noopener"
              className="text-accent-secondary underline underline-offset-4 hover:text-foreground"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
      <p className="mt-4 max-w-[var(--container-reading)] text-sm text-muted-foreground">
        Last reviewed: {reviewed}. {content.closingNote}
      </p>
    </Section>
  )
}
