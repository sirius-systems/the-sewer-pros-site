import type { ReactNode } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Section, Callout, Card, CardGrid, LinkCard, ButtonLink } from '@/components/ui'
import { SectionHeading } from './SectionHeading'
import {
  AccessPointIcon,
  CameraIcon,
  CheckIcon,
  BuildingIcon,
  CameraInPipeIcon,
  ChecklistIcon,
  DecisionIcon,
  DocumentIcon,
  CleaningAndCameraIcon,
  CleaningPathIcon,
  DocumentCheckIcon,
  ExplanationIcon,
  FixturesIcon,
  HomeIcon,
  HouseKeyIcon,
  HydroJetIcon,
  LocatorRouteIcon,
  PipeIcon,
  RepeatIcon,
  RootRestrictionIcon,
  SinkDrainIcon,
  SingleDrainIcon,
  WaterBackupIcon,
  type IconProps,
} from './section-icons'
import { CameraImageSlot } from './CameraImageSlot'
import { TrackedLink } from '@/components/tracking/TrackedLink'
import { resolveApprovedLink } from '@/lib/links/approved-link'
import { getPage } from '@/data/pages'
import { markets } from '@/data/markets/markets'
import { marketImages } from '@/data/business/card-images'
import {
  anyHubImage,
  backdropExists,
  resolveHubImage,
  type HubImageKey,
} from '@/data/business/hub-images'
import { PRIMARY_CTA } from '@/components/layout/cta'
import type { HubApproachIcon, HubAudienceIcon, HubComparisonIcon, HubProcessIcon, HubSymptomIcon, MarketId, ServiceHubContent } from '@/types'

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
   Backdrop photograph
   ========================================================================== */

/**
 * A decorative full-width photograph behind a section (`alt=""`).
 *
 * ⚠ A MISSING FILE IS A PLACEHOLDER, NOT A BROKEN IMAGE. The parent
 * supplies the brand surface and the black scrim, so the copy stays
 * readable. Development also shows a small label naming the file to
 * add; production shows nothing (docs/18 §120).
 */
export function BackdropImage({
  src,
  priority = false,
  className = 'object-cover object-center',
}: {
  src: string
  priority?: boolean
  className?: string
}) {
  if (backdropExists(src)) {
    return (
      <Image
        src={src}
        alt=""
        fill
        priority={priority}
        sizes="100vw"
        className={`absolute inset-0 -z-10 ${className}`}
      />
    )
  }
  if (process.env.NODE_ENV === 'production') return null
  return (
    <span
      data-image-placeholder={src}
      className="absolute bottom-2 right-3 z-0 rounded-sm border border-dashed border-white/60 px-2 py-1 text-caption text-white"
    >
      Image placeholder: {src.split('/').pop()} (development only)
    </span>
  )
}

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

const CAMERA_DEFINITION_SLOTS: readonly HubImageKey[] = ['process', 'monitor', 'equipment']

export function DefinitionSection({
  content,
  slots = CAMERA_DEFINITION_SLOTS,
}: {
  content: NonNullable<Hub['definition']>
  slots?: readonly HubImageKey[]
}) {
  const id = content.id ?? 'what-is-a-sewer-camera-inspection'
  const [main, ...extras] = slots

  // "Quick answer" variant: a single constrained column on a soft surface,
  // for a hub whose definition is the featured-answer block. The figures,
  // if any resolve, follow below it.
  if (content.label !== undefined) {
    return (
      <Section density="standard" surface="muted" labelledBy={id}>
        {/*
          Two columns at `lg`: the copy on the left, the figure on the
          right. Below `lg` the figure stacks under the whole text column.
          Any extra slots follow underneath.
        */}
        <div className="grid gap-10 lg:grid-cols-[7fr_5fr] lg:items-center">
          <div className="max-w-[44rem]">
            <p className="text-caption font-semibold uppercase tracking-wide text-accent-secondary">
              {content.label}
            </p>
            <h2 id={id} className="mt-2 text-h2 font-semibold tracking-tight text-balance text-foreground">
              {content.title}
            </h2>
            <p className="mt-4 text-body-lg text-foreground">{content.answer}</p>
            {content.supporting.map((paragraph) => (
              <p key={paragraph} className="mt-4 text-body text-muted-foreground">
                {paragraph}
              </p>
            ))}
          </div>
          {main !== undefined && (
            <CameraImageSlot slot={main} sizes="(min-width: 1024px) 40vw, 100vw" />
          )}
        </div>
        {anyHubImage(extras) && (
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {extras.map((slot) => (
              <CameraImageSlot key={slot} slot={slot} sizes="(min-width: 640px) 45vw, 100vw" />
            ))}
          </div>
        )}
      </Section>
    )
  }

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
        {/* 4:3 frame matching the files, so nothing is cropped or stretched. */}
        {main !== undefined && (
          <CameraImageSlot slot={main} sizes="(min-width: 1024px) 40vw, 100vw" />
        )}
      </div>
      {anyHubImage(extras) && (
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {extras.map((slot) => (
            <CameraImageSlot key={slot} slot={slot} sizes="(min-width: 640px) 45vw, 100vw" />
          ))}
        </div>
      )}
    </Section>
  )
}

/* ==========================================================================
   Symptom router
   ========================================================================== */

/**
 * Six situation cards that send a visitor to the right service from how
 * the problem looks, before they know the service names.
 *
 * ⚠ ORANGE ONLY MARKS AN ACTIVE ISSUE (`urgency: 'active'`). Every other
 * status stays neutral so the accent keeps its meaning.
 *
 * ⚠ EACH CARD IS ONE REAL LINK (`pageId` or an in-page `href`), reported
 * as `service_select` with stable ids only (19 §132).
 */
const SYMPTOM_ICON_BY_NAME: Record<HubSymptomIcon, (props: IconProps) => ReactNode> = {
  fixtures: FixturesIcon,
  backup: WaterBackupIcon,
  repeat: RepeatIcon,
  restriction: RootRestrictionIcon,
  fixture: SingleDrainIcon,
  home: HomeIcon,
}

export function SymptomRouter({ content }: { content: NonNullable<Hub['symptomRouter']> }) {
  return (
    <Section density="standard" surface="default" labelledBy={content.id}>
      <SectionHeading id={content.id} title={content.title} intro={<p>{content.intro}</p>} />
      <ul className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {content.items.map((item) => {
          const href =
            item.pageId !== undefined ? resolveApprovedLink(item.pageId).href : (item.href ?? '#')
          const active = item.urgency === 'active'
          const Icon = item.icon !== undefined ? SYMPTOM_ICON_BY_NAME[item.icon] : undefined
          return (
            <li key={item.title} className="flex">
              <Card className="flex w-full flex-col">
                <div className="flex items-center gap-3">
                  {/* Decorative: the status label and heading carry the meaning. */}
                  {Icon !== undefined && (
                    <Icon aria-hidden="true" className="h-6 w-6 shrink-0 text-accent-secondary" />
                  )}
                  <p
                    className={
                      active
                        ? 'inline-flex w-fit rounded-sm border border-warning bg-[color-mix(in_srgb,var(--color-warning)_10%,white)] px-2 py-0.5 text-caption font-semibold text-foreground'
                        : 'inline-flex w-fit rounded-sm bg-surface-muted px-2 py-0.5 text-caption font-semibold text-muted-foreground'
                    }
                  >
                    {item.status}
                  </p>
                </div>
                <h3 className="mt-3 text-h4 font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-body-sm text-muted-foreground">{item.description}</p>
                <div className="mt-auto pt-5">
                  {item.pageId !== undefined ? (
                    <TrackedLink
                      href={href}
                      event="service_select"
                      ctaLocation="section_cta"
                      context={{ page_type: 'service' }}
                      className="inline-flex min-h-11 items-center font-semibold text-accent-secondary underline underline-offset-4 hover:text-foreground"
                    >
                      {item.actionLabel} <span aria-hidden="true">&rarr;</span>
                    </TrackedLink>
                  ) : (
                    <a
                      href={href}
                      className="inline-flex min-h-11 items-center font-semibold text-accent-secondary underline underline-offset-4 hover:text-foreground"
                    >
                      {item.actionLabel} <span aria-hidden="true">&rarr;</span>
                    </a>
                  )}
                </div>
              </Card>
            </li>
          )
        })}
      </ul>
    </Section>
  )
}

/* ==========================================================================
   When to schedule
   ========================================================================== */

/**
 * Six text cards over a full-width photograph.
 *
 * ⚠ A DARK SCRIM, THE SAME `black/55` `Section`'S `backgroundImage` AND THE
 * HERO USE. That value was measured against pure white, the brightest
 * frame a photograph can present, where opaque white text gives 4.76:1
 * against the 4.5:1 floor (see `Section`). Do not lighten it without
 * redoing the measurement. The heading and intro are therefore white;
 * the cards stay opaque white with dark text, so they do not depend on
 * the scrim.
 *
 * ⚠ THE IMAGE IS DECORATIVE (`alt=""`); the heading and cards carry the
 * meaning. Cover-cropped and centred, since the pipe vanishing point is
 * near the middle of the frame.
 */
export function ScheduleGrid({
  id,
  title,
  intro,
  items,
  imageSrc,
}: {
  id: string
  title: string
  intro: string
  items: readonly { title: string; description: string }[]
  imageSrc: string
}) {
  return (
    <div className="relative isolate overflow-hidden bg-brand">
      <BackdropImage src={imageSrc} />
      <span aria-hidden="true" className="absolute inset-0 -z-10 bg-black/55" />
      <Section density="standard" surface="none" labelledBy={id}>
        <div className="max-w-[var(--container-reading)]">
          <h2 id={id} className="text-h2 font-semibold tracking-tight text-balance text-white">
            {title}
          </h2>
          <p className="mt-4 text-body-lg text-white">{intro}</p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <Card key={item.title}>
              <h3 className="text-body font-semibold text-foreground">{item.title}</h3>
              <p className="mt-2 text-body-sm text-muted-foreground">{item.description}</p>
            </Card>
          ))}
        </div>
      </Section>
    </div>
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

/**
 * "When a clogged drain may be a sewer-line problem": the lead-qualifying
 * panel of the drain cleaning hub. Brand surface, so it reads apart from
 * the light sections around it. Links resolve through approved pages only.
 */
export function EscalationPanel({ content }: { content: NonNullable<Hub['escalation']> }) {
  const id = content.id ?? 'when-a-drain-is-a-sewer-problem'
  return (
    <Section density="standard" surface="brand" labelledBy={id}>
      <h2 id={id} className="text-h2 font-semibold tracking-tight text-balance">
        {content.title}
      </h2>
      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <div>
          <p className="max-w-[var(--container-reading)] text-body-lg">{content.answer}</p>
          <ul className="mt-6 flex flex-col gap-3">
            {content.links.map((link) => {
              const resolved = resolveApprovedLink(link.pageId)
              if (resolved === undefined) return null
              return (
                <li key={link.pageId}>
                  <TrackedLink
                    href={resolved.href}
                    event="cta_click"
                    ctaLocation="section_cta"
                    className="inline-flex min-h-11 items-center gap-2 font-semibold underline underline-offset-4 focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    <span>{link.label}</span>
                    <span aria-hidden="true">→</span>
                  </TrackedLink>
                </li>
              )
            })}
          </ul>
        </div>
        <div className="rounded-md border border-white/30 p-6">
          <h3 className="text-h4 font-semibold">{content.signsTitle}</h3>
          <ul className="mt-4 space-y-3">
            {content.signs.map((sign) => (
              <li key={sign} className="flex gap-3 text-body-sm">
                <CheckIcon className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
                <span>{sign}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}

function LimitationsFrame({
  id,
  backdrop,
  children,
}: {
  id: string
  backdrop?: string
  children: ReactNode
}) {
  if (backdrop === undefined) {
    return (
      <Section density="dense" surface="muted" labelledBy={id}>
        {children}
      </Section>
    )
  }
  return (
    <div className="relative isolate overflow-hidden bg-brand">
      <BackdropImage src={backdrop} />
      <span aria-hidden="true" className="absolute inset-0 -z-10 bg-black/55" />
      <Section density="dense" surface="none" labelledBy={id}>
        {children}
      </Section>
    </div>
  )
}

/**
 * ⚠ THE OPTIONAL BACKDROP SITS UNDER A BLACK SCRIM AT 55%, the value the
 * hero and `Section`'s backgroundImage use (measured against pure white,
 * where opaque white text gives 4.76:1). Every overlay in this project is
 * black, never white or tinted. With a backdrop the heading, intro and
 * closing line are white; both cards stay opaque `bg-surface`, so their
 * contrast never depends on the photograph. The image is decorative
 * (`alt=""`). A missing file leaves the plain muted section.
 */
export function LimitationsPanel({
  content,
  imageSrc,
}: {
  content: NonNullable<Hub['limitations']>
  imageSrc?: string
}) {
  const id = 'what-it-can-identify'
  const related =
    content.related !== undefined ? resolveApprovedLink(content.related.pageId) : undefined
  const backdrop = imageSrc !== undefined && backdropExists(imageSrc) ? imageSrc : undefined
  const dark = backdrop !== undefined
  return (
    <LimitationsFrame id={id} backdrop={backdrop}>
      {dark ? (
        <div className="max-w-[var(--container-reading)]">
          <h2 id={id} className="text-h2 font-semibold tracking-tight text-balance text-white">
            {content.title}
          </h2>
        </div>
      ) : (
        <SectionHeading id={id} title={content.title} />
      )}
      {/* Full content width, not the heading's reading measure. */}
      <p className={dark ? 'mt-4 text-body-lg text-white' : 'mt-4 text-body-lg text-muted-foreground'}>
        {content.intro}
      </p>
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
        <p className={dark ? 'mt-6 text-body text-white' : 'mt-6 text-body text-muted-foreground'}>
          {content.related.lead}{' '}
          <Link
            href={related.href}
            className={
              dark
                ? 'font-semibold text-white underline underline-offset-4 hover:text-white/80'
                : 'font-semibold text-accent-secondary underline underline-offset-4 hover:text-foreground'
            }
          >
            {content.related.label}
          </Link>
        </p>
      )}
    </LimitationsFrame>
  )
}

/* ==========================================================================
   What the service may help with: tiles + qualified table
   ========================================================================== */

/**
 * Short tiles for scanning, then a table where every row states its own
 * limit. White ground with a top rule so it separates from the router
 * above and the muted limitations panel below.
 */
export function MaterialsSection({ content }: { content: NonNullable<Hub['materials']> }) {
  const id = content.id ?? 'what-it-may-help-with'
  const [colItem, colHelp, colQual] = content.columns
  return (
    <div className="border-t border-border">
      <Section density="standard" surface="default" labelledBy={id}>
        <SectionHeading id={id} title={content.title} intro={<p>{content.intro}</p>} />
        <ul className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-3">
          {content.tiles.map((tile) => (
            <li
              key={tile}
              className="flex min-h-11 items-center rounded-md border border-border bg-surface-muted px-4 py-3 text-body-sm font-semibold text-foreground"
            >
              {tile}
            </li>
          ))}
        </ul>
        <div className="mt-8 overflow-x-auto rounded-md border border-border bg-surface px-4 sm:px-6">
          <table className="w-full min-w-[40rem] border-collapse text-left text-body-sm">
            <caption className="sr-only">{content.title}</caption>
            <thead>
              <tr className="border-b border-border text-caption uppercase tracking-wide text-muted-foreground">
                <th scope="col" className="py-3 pr-4 font-semibold">{colItem}</th>
                <th scope="col" className="py-3 pr-4 font-semibold">{colHelp}</th>
                <th scope="col" className="py-3 font-semibold">{colQual}</th>
              </tr>
            </thead>
            <tbody>
              {content.rows.map((row) => (
                <tr key={row.item} className="border-b border-border align-top last:border-b-0">
                  <th scope="row" className="py-4 pr-4 font-semibold text-foreground">{row.item}</th>
                  <td className="py-4 pr-4 text-muted-foreground">{row.help}</td>
                  <td className="py-4 text-muted-foreground">{row.qualification}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {content.note !== undefined && (
          <p className="mt-6 max-w-[var(--container-reading)] text-body text-muted-foreground">
            {content.note}
          </p>
        )}
      </Section>
    </div>
  )
}

/* ==========================================================================
   Process steps + "Before your inspection" + image
   ========================================================================== */

/**
 * The four-step sequence, its preparation checklist and the process
 * illustration, as one section.
 *
 * ⚠ ONE SECTION, NOT `ProcessSteps` PLUS A PANEL. The steps, the
 * checklist and the picture answer one question ("what happens").
 *
 * ⚠ DISTINCT FROM `LimitationsPanel` ABOVE, ON PURPOSE. That section is
 * muted gray and dense; this one is white, `standard` density, with a
 * rule on top and bottom, so the two consecutive sections read as two.
 * The step cards take the muted surface so they still separate from
 * the white ground. Both keep the same container, heading style and
 * two-column rhythm, so they still read as one family.
 *
 * ⚠ THE MARKS ARE `aria-hidden` (`baseIconProps`). Each sits above a
 * visible heading that names the step, and sequence comes from the
 * `<ol>`, so no numeral is rendered or read out twice.
 *
 * ⚠ THE PICTURE IS THE PROCESS ILLUSTRATION, in a frame matching the
 * file's 4:3, so no equipment is cropped. It is also used in the
 * definition section above; both captions say it is an illustration.
 */
const STEP_ICON_BY_NAME: Record<HubProcessIcon, (props: IconProps) => ReactNode> = {
  explanation: ExplanationIcon,
  checklist: ChecklistIcon,
  access: AccessPointIcon,
  pipe: PipeIcon,
  camera: CameraIcon,
  document: DocumentCheckIcon,
}

const DEFAULT_STEP_ICONS: readonly HubProcessIcon[] = [
  'explanation',
  'access',
  'camera',
  'document',
]

export function InspectionProcess({
  title,
  steps,
  prep,
  imageSlot = 'process',
  icons = DEFAULT_STEP_ICONS,
}: {
  title: string
  steps: readonly { title: string; description?: string }[]
  prep?: Hub['prep']
  /** Figure beside the steps. Defaults to the camera hub's process image. */
  imageSlot?: HubImageKey
  /** One mark per step. Defaults to the camera hub's set. */
  icons?: readonly HubProcessIcon[]
}) {
  const id = 'how-it-works'
  const image = resolveHubImage(imageSlot)
  return (
    <Section density="standard" surface="default" labelledBy={id} className="border-y border-border">
      {/*
        ⚠ ONE GRID, THREE ROWS, SO THE PICTURE CAN LINE UP WITH THE CARDS.
        At `lg` the heading is row 1, the 2x2 cards and the picture share
        row 2, and the checklist is row 3, left column only. The picture
        takes exactly the cards' height: its figure is `relative` with no
        height of its own (so it cannot stretch the row) and its frame is
        `absolute inset-0`, which fills whatever row 2 measures. The
        caption is absolutely placed just below the frame, so it is kept
        with the picture but is not part of the alignment; it lands in the
        empty right cell of row 3.

        ⚠ `object-cover`, CENTRED, ONLY WHERE THE FRAME IS NOT 4:3. The
        cards' row is close to square beside a 5fr column, so this crops
        a little off the sides; the reel is left of centre and the access
        point is centre-right, both well inside the crop. Below `lg` the
        frame is the file's own 4:3, so nothing is cropped, and the figure
        follows the cards and checklist in source order.
      */}
      <div className="grid gap-y-6 lg:grid-cols-[7fr_5fr] lg:gap-x-10">
        <div className="lg:col-start-1 lg:row-start-1">
          <SectionHeading id={id} title={title} />
        </div>
        <ol className="mt-2 grid gap-4 sm:grid-cols-2 lg:col-start-1 lg:row-start-2">
          {steps.map((step, index) => {
            const Icon = STEP_ICON_BY_NAME[icons[index] ?? 'explanation'] ?? CheckIcon
            return (
              <li key={step.title} className="rounded-md border border-border bg-surface-muted p-5">
                <span
                  aria-hidden="true"
                  className="flex h-10 w-10 items-center justify-center rounded-sm bg-accent-secondary text-white"
                >
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-body font-semibold text-foreground">{step.title}</h3>
                {step.description !== undefined && (
                  <p className="mt-2 text-body-sm text-muted-foreground">{step.description}</p>
                )}
              </li>
            )
          })}
        </ol>
        {prep !== undefined && (
          <Callout kind="good-to-know" label={prep.title} className="lg:col-start-1 lg:row-start-3">
            <ul className="space-y-2">
              {prep.items.map((item) => (
                <li key={item} className="flex gap-2">
                  <span aria-hidden="true" className="text-muted-foreground">-</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Callout>
        )}
        {image !== null && (
          <figure className="lg:relative lg:col-start-2 lg:row-start-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-md border border-border bg-surface-muted lg:absolute lg:inset-0 lg:aspect-auto">
              {!image.placeholder && (
                <Image
                  src={image.preferred}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover object-center"
                />
              )}
            </div>
            <figcaption className="mt-2 text-caption text-muted-foreground lg:absolute lg:inset-x-0 lg:top-full">
              {image.caption}
            </figcaption>
          </figure>
        )}
      </div>
    </Section>
  )
}

/* ==========================================================================
   Audience pathways
   ========================================================================== */

/* ==========================================================================
   Approach band (page-specific "How we work")
   ========================================================================== */

const APPROACH_ICON_BY_NAME: Record<HubApproachIcon, (props: IconProps) => ReactNode> = {
  conversation: ExplanationIcon,
  camera: CameraIcon,
  document: DocumentIcon,
  decision: DecisionIcon,
}

/**
 * The hub's own version of the navy "How we work" band.
 *
 * ⚠ WHY THIS EXISTS INSTEAD OF EDITING `AuthorityBand`. That band renders
 * `authorityProofPoints`, one governed dataset shared by eight templates,
 * and its rule is that copy is not a prop. This band takes its copy from
 * the hub's own content, on the same navy surface with the same card
 * treatment (`border-white/15`, white/80 marks), so the shared data is
 * untouched.
 *
 * ⚠ THE MARKS ARE `aria-hidden` AND SECONDARY, beside headings that already
 * name each card. The action is the site's existing primary CTA, unchanged.
 * Two columns at `sm`, one below.
 */
export function ApproachBand({ content }: { content: NonNullable<Hub['approach']> }) {
  const id = content.id ?? 'why-the-sewer-pros'
  return (
    <Section density="standard" surface="brand" labelledBy={id}>
      <h2 id={id} className="max-w-2xl text-h2 font-semibold tracking-tight text-balance">
        {content.title}
      </h2>
      <p className="mt-4 max-w-[var(--container-reading)] text-body-lg opacity-90">
        {content.intro}
      </p>
      <ul className="mt-10 grid gap-6 sm:grid-cols-2">
        {content.items.map((item) => {
          const Icon = APPROACH_ICON_BY_NAME[item.icon]
          return (
            <li key={item.title} className="rounded-md border border-white/15 p-6">
              <div className="flex items-center gap-3">
                <Icon aria-hidden="true" className="h-6 w-6 shrink-0 text-white/80" />
                <h3 className="text-base font-medium">{item.title}</h3>
              </div>
              <p className="mt-1 text-sm leading-6 opacity-80">{item.description}</p>
            </li>
          )
        })}
      </ul>
      <div className="mt-10">
        <ButtonLink href={PRIMARY_CTA.href} variant="primary">
          {PRIMARY_CTA.label}
        </ButtonLink>
      </div>
    </Section>
  )
}

const AUDIENCE_ICON_BY_NAME: Record<HubAudienceIcon, (props: IconProps) => ReactNode> = {
  building: BuildingIcon,
  checklist: ChecklistIcon,
  'house-key': HouseKeyIcon,
  home: HomeIcon,
}

/**
 * ⚠ `surface: 'muted'` (with a rule above and below) is how a hub keeps this
 * section visibly apart from the default-surface market router above it.
 * The icons are decorative (`aria-hidden`); the audience heading carries
 * the meaning. No images.
 */
export function AudiencePathways({ content }: { content: NonNullable<Hub['audiences']> }) {
  const id = content.id ?? 'sewer-camera-inspection-for-your-situation'
  const muted = content.surface === 'muted'
  return (
    <Section
      density="dense"
      surface={muted ? 'muted' : 'default'}
      labelledBy={id}
      className={muted ? 'border-y border-border' : undefined}
    >
      <SectionHeading id={id} title={content.title} intro={<p>{content.intro}</p>} />
      <CardGrid columns={2} itemCount={content.items.length} className="mt-8">
        {content.items.map((item) => {
          const link = resolveApprovedLink(item.pageId)
          const Icon = item.icon !== undefined ? AUDIENCE_ICON_BY_NAME[item.icon] : undefined
          return (
            <LinkCard key={item.pageId} href={link.href} actionLabel={item.actionLabel}>
              <div className="flex items-center gap-3">
                {Icon !== undefined && (
                  <Icon aria-hidden="true" className="h-6 w-6 shrink-0 text-accent-secondary" />
                )}
                <h3 className="text-h4 font-semibold text-foreground">{item.audience}</h3>
              </div>
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
 * Four equal image cards: three footage stills and a findings summary.
 * Renders nothing in production unless at least one image exists
 * (docs/18 §120).
 *
 * ⚠ NO CASE STUDY IS PUBLISHED. `data/business/proof.ts` holds none, and
 * a case study is a factual claim about a real customer (CLAUDE.md §24).
 *
 * ⚠ 2x2 AT `sm` AND ABOVE, NOT FOUR ACROSS. The card copy is a full
 * paragraph; four columns would squeeze it into a narrow measure, and
 * four items divide evenly into two columns so no fifth-cell gap can
 * appear. Every frame is 4:3 to match the files, and the cards stretch
 * to a common height.
 */
export function evidenceRenders(content: Hub['evidence']): boolean {
  return content !== undefined && anyHubImage(content.items.map((item) => item.slot))
}

export function EvidenceGallery({ content }: { content: NonNullable<Hub['evidence']> }) {
  const id = content.id ?? 'real-inspection-evidence'
  return (
    <Section density="standard" surface="muted" labelledBy={id}>
      <SectionHeading id={id} title={content.title} intro={<p>{content.intro}</p>} />
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {content.items.map((item) => (
          <article key={item.slot} className="flex h-full flex-col overflow-hidden rounded-md border border-border bg-surface">
            <CameraImageSlot
              slot={item.slot}
              hideCaption
              sizes="(min-width: 640px) 45vw, 100vw"
              className="[&>div]:rounded-none [&>div]:border-0"
            />
            <div className="flex flex-1 flex-col p-5 sm:p-6">
              <h3 className="text-h4 font-semibold text-foreground">{item.title}</h3>
              <p className="mt-3 text-body-sm text-muted-foreground">{item.description}</p>
            </div>
          </article>
        ))}
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

/**
 * The comparison table over a full-width photograph.
 *
 * ⚠ A BLACK SCRIM AT 55%, the value `Section`'s `backgroundImage` and the
 * hero use. It was measured against pure white, where opaque white text
 * gives 4.76:1 against the 4.5:1 floor, so the heading, intro and closing
 * note are white and the scrim must not be lightened without re-measuring.
 *
 * ⚠ ADJACENT TO A DARK SECTION. The authority band that follows is a brand
 * (navy) surface, so this dark band and that one touch. 18 §11 names
 * stacked dark sections as an anti-pattern; this was a light scrim until
 * the owner asked for black (2026-09-23). Put a non-dark section between
 * them if the pairing reads as too heavy.
 *
 * ⚠ THE TABLE SITS IN AN OPAQUE WHITE PANEL, so its contrast never depends
 * on the photograph.
 *
 * ⚠ THE IMAGE IS DECORATIVE (`alt=""`); the table carries the meaning.
 */
const COMPARISON_ICON_BY_NAME: Record<HubComparisonIcon, (props: IconProps) => ReactNode> = {
  cleaning: CleaningPathIcon,
  hydro: HydroJetIcon,
  drain: SinkDrainIcon,
  camera: CameraInPipeIcon,
  combined: CleaningAndCameraIcon,
  locating: LocatorRouteIcon,
}

export function ServiceComparison({
  content,
  imageSrc,
}: {
  content: NonNullable<Hub['comparison']>
  imageSrc: string
}) {
  const id = content.id ?? 'sewer-camera-inspection-vs-related-services'
  const [colService, colPurpose, colFit] = content.columns ?? [
    'Service',
    'Primary purpose',
    'May be the right fit when',
  ]
  return (
    <div className="relative isolate overflow-hidden bg-brand">
      <BackdropImage src={imageSrc} />
      <span aria-hidden="true" className="absolute inset-0 -z-10 bg-black/55" />
      <Section density="dense" surface="none" labelledBy={id}>
        <div className="max-w-[var(--container-reading)]">
          <h2 id={id} className="text-h2 font-semibold tracking-tight text-balance text-white">
            {content.title}
          </h2>
          <p className="mt-4 text-body-lg text-white">{content.intro}</p>
        </div>
        {content.variant === 'cards' ? (
          <ul className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {content.rows.map((row) => {
              const link = row.pageId !== undefined ? resolveApprovedLink(row.pageId) : undefined
              const Icon = row.icon !== undefined ? COMPARISON_ICON_BY_NAME[row.icon] : undefined
              return (
                <li key={row.service} className="flex">
                  {/* Opaque white card, so contrast never depends on the photograph. */}
                  <div className="flex w-full flex-col rounded-md border border-border bg-surface p-6 text-foreground shadow-sm">
                    {/* Decorative: the service name and copy carry the meaning. */}
                    {Icon !== undefined && (
                      <Icon aria-hidden="true" className="h-7 w-7 shrink-0 text-accent-secondary" />
                    )}
                    <h3 className="mt-3 text-h4 font-semibold text-foreground">
                      {link !== undefined ? (
                        <Link
                          href={link.href}
                          className="text-accent-secondary underline underline-offset-4 hover:text-foreground"
                        >
                          {row.service}
                        </Link>
                      ) : (
                        <>
                          {row.service}{' '}
                          <span className="text-body-sm font-normal text-muted-foreground">(this page)</span>
                        </>
                      )}
                    </h3>
                    <p className="mt-4 text-caption font-semibold uppercase tracking-wide text-muted-foreground">
                      {colPurpose}
                    </p>
                    <p className="mt-1 text-body-sm text-foreground">{row.purpose}</p>
                    <p className="mt-4 text-caption font-semibold uppercase tracking-wide text-muted-foreground">
                      {colFit}
                    </p>
                    <p className="mt-1 text-body-sm text-foreground">{row.fit}</p>
                  </div>
                </li>
              )
            })}
          </ul>
        ) : (
        <div className="mt-8 overflow-x-auto rounded-md border border-border bg-surface px-4 sm:px-6">
          <table className="w-full min-w-[40rem] border-collapse text-left text-body-sm">
            <caption className="sr-only">{content.title}</caption>
            <thead>
              <tr className="border-b border-border text-caption uppercase tracking-wide text-muted-foreground">
                <th scope="col" className="py-3 pr-4 font-semibold">{colService}</th>
                <th scope="col" className="py-3 pr-4 font-semibold">{colPurpose}</th>
                <th scope="col" className="py-3 font-semibold">{colFit}</th>
              </tr>
            </thead>
            <tbody>
              {content.rows.map((row) => {
                const link = row.pageId !== undefined ? resolveApprovedLink(row.pageId) : undefined
                return (
                  <tr key={row.service} className="border-b border-border align-top last:border-b-0">
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
        )}
        <p className="mt-6 max-w-[var(--container-reading)] text-body text-white">
          {content.note}
        </p>
      </Section>
    </div>
  )
}

/* ==========================================================================
   Request service: copy beside the lead form, over a photograph
   ========================================================================== */

/**
 * Two columns at `lg`: heading and intro on the left, the existing lead
 * form on the right; stacked below `lg`, copy first.
 *
 * ⚠ THE FORM IS PASSED IN, NOT IMPORTED. `LeadFormSection` is a client
 * component with its own state and analytics; this file stays a server
 * component and the form's fields, validation and handlers are untouched.
 *
 * ⚠ THE SCRIM IS BLACK AT 55%, the value the hero and `Section`'s
 * `backgroundImage` use. It was measured against pure white, where opaque
 * white text gives 4.76:1 against the 4.5:1 floor, so it must not be
 * lightened without re-measuring. It was navy at 80% until the owner asked
 * for black (2026-09-23). The reel in the photograph is on the left, under
 * the copy, so the scrim has to hold there. The form sits in an opaque white card with `text-foreground`,
 * because `bg-surface` sets a background and not a colour and white text
 * would otherwise flow into it (see `Section`'s note on this). Its labels,
 * inputs and button are therefore the same contrast as everywhere else.
 *
 * ⚠ THE IMAGE IS DECORATIVE (`alt=""`).
 *
 * ⚠ ADJACENT TO THE AUTHORITY BAND, which is also dark navy (18 §11).
 * Owner-requested; put a light section between them if it reads heavy.
 */
export function RequestServiceSection({
  content,
  imageSrc,
  children,
  id = 'schedule-a-sewer-camera-inspection',
  density = 'standard',
  focus = 'default',
}: {
  content: { title: string; intro: string | readonly string[] }
  imageSrc: string
  children: ReactNode
  id?: string
  density?: 'sparse' | 'standard' | 'dense'
  /**
   * `right` is for a photograph whose equipment sits on the left, under
   * the copy column: below `lg` the crop favours the left so the equipment
   * stays faintly visible behind the copy, and a black left-weighted
   * gradient (black only) is added to the standard scrim so the copy holds
   * over it. The form card is opaque, so it never depends on the photo.
   */
  focus?: 'default' | 'right'
}) {
  const paragraphs = typeof content.intro === 'string' ? [content.intro] : content.intro
  return (
    <div className="relative isolate overflow-hidden bg-brand text-white">
      <BackdropImage
        src={imageSrc}
        className={
          focus === 'right'
            ? 'object-cover object-[28%_50%] lg:object-center'
            : 'object-cover object-center'
        }
      />
      <span aria-hidden="true" className="absolute inset-0 -z-10 bg-black/55" />
      {focus === 'right' && (
        <span
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-gradient-to-r from-black/50 via-black/25 to-transparent"
        />
      )}
      <Section density={density} surface="none" labelledBy={id}>
        <div className="grid gap-10 lg:grid-cols-[5fr_6fr] lg:items-center lg:gap-14">
          <div>
            <h2 id={id} className="text-h2 font-semibold tracking-tight text-balance">
              {content.title}
            </h2>
            <div className="mt-4 max-w-[var(--container-reading)] space-y-4 text-body-lg">
              {paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
          <div className="rounded-md border border-border bg-surface p-6 text-foreground shadow-sm sm:p-8">
            {children}
          </div>
        </div>
      </Section>
    </div>
  )
}
