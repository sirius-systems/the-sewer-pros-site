import Image from 'next/image'
import {
  Section,
  ButtonLink,
  buttonClasses,
  type SectionDensity,
  type SectionSurface,
} from '@/components/ui'
import { TrackedPhoneLink } from '@/components/tracking'
import { resolveApprovedLink } from '@/lib/links/approved-link'
import { cn } from '@/lib/utils/cn'
import { CheckIcon, SECTION_ICONS } from './section-icons'
import type {
  ExperienceBlock,
  ExperienceContent,
  ExperienceListItem,
} from '@/types'

/**
 * Company experience, stated as proof.
 *
 * Governed by docs/18-design-system.md §5.6, §11, §15, §37, §46-48,
 * §71, §106, Appendix A; docs/01-business-brand-foundation.md §20, §24,
 * §35; docs/22-decisions-change-log.md DEC-072, DEC-071, DEC-076,
 * DEC-096; CLAUDE.md §9, §24, §27.
 *
 * ===========================================================================
 * ⚠⚠ THE HARDEST RULE IN THIS COMPONENT IS NOT A DESIGN RULE
 * ===========================================================================
 * This section exists to make a credibility claim, which makes it the
 * likeliest place on any market hub for an unverified business fact to
 * enter the site. Two figures in particular are MARKET-SCOPED, and
 * DEC-072 records the scope explicitly:
 *
 *   "over 100,000 camera inspections"  /st-louis-mo/ ONLY
 *   "#1 choice in St. Louis"           /st-louis-mo/ ONLY
 *
 * 01 §20 forbids carrying one market's business facts onto another's
 * page, so NEITHER may appear on a San Diego or Las Vegas page. The
 * founding years are scoped the same way and are NOT interchangeable:
 * St. Louis 2011 (DEC-070), San Diego 2015 (DEC-071), and Las Vegas
 * NONE - `marketOperatingDetail['las-vegas-nv'].foundingYear` is 0
 * because the market is newly launching and importing a year would
 * assert an operating history it does not have.
 *
 * ⚠ THE COMPONENT CANNOT ENFORCE THIS AND DOES NOT PRETEND TO. Proof
 * copy is per-market content, so the guard is the content file and the
 * scope table in `data/business/organization.ts`. Read
 * `MARKET_SCOPED_CLAIMS` before writing a figure into any market's
 * `experience` block.
 *
 * ⚠ NO REPAIR, EVER. CLAUDE.md §9 forbids presenting the business as a
 * repair or replacement contractor. The independence card and the
 * "without a repair sale" block are the differentiator (01 §3), and
 * they must describe THIS company's model rather than accusing anyone
 * else's - CLAUDE.md §27 rules out the second.
 *
 * ---------------------------------------------------------------------------
 * TWO COMPOSITIONS, ONE SYSTEM
 * ---------------------------------------------------------------------------
 *   aside      A 7/12 content column beside a 5/12 column of three
 *              stacked proof cards, with the actions on a full-width
 *              row beneath.
 *   strip      A full-width heading, then the three proof cards as a
 *              horizontal strip, then the body in a two-column split.
 *   editorial  Four stacked full-width groups: heading beside a
 *              supporting photograph (7/12 + 5/12), a three-card proof
 *              row, two benefit panels, then a conversion panel.
 *
 * The variants exist because three market hubs running an identical
 * composition is the templated look 18 §155 names, and because the
 * owner asked each market to differ (2026-09-07). They share
 * typography, card language, colour and spacing exactly; only the
 * arrangement changes.
 *
 * ⚠ `editorial` IS ST. LOUIS ONLY TODAY, AND THE COMPONENT DOES NOT
 * ENFORCE THAT — the content does. Nothing in this file is
 * market-specific; a market that wants this arrangement supplies its
 * own copy, its own photograph, and its own proof cards. What must NOT
 * travel is St. Louis's claims: the 100,000-inspections figure and the
 * 2011 founding year are scoped to `/st-louis-mo/` by DEC-072 and
 * DEC-070. See the note at the top of this file.
 *
 * ---------------------------------------------------------------------------
 * ⚠ NO BACKGROUND PHOTOGRAPH, ON PURPOSE — AND A SUPPORTING ONE IS NOT
 * THE SAME THING
 * ---------------------------------------------------------------------------
 * Owner direction, 2026-09-07: the process band that follows already
 * carries a full-bleed image, and 18 §11 warns against decorating every
 * section. This one is a light surface with text on it. That is also
 * why it takes `muted` rather than `default` - see the template.
 *
 * `editorial` adds ONE photograph, in its own bordered media box beside
 * the heading. That is a different thing from a section backdrop: no
 * text sits on it, it carries no scrim, and it is the only image in the
 * section. It exists so the band reads as a designed section rather
 * than a long document, which is what the owner asked for. Do not add a
 * second, and do not move this one behind the copy.
 */
export interface ExperienceSectionProps {
  /**
   * Overrides the section's natural density.
   *
   * Appendix A's density system is about VARIATION down a page, so the
   * composing template — which alone knows the full sequence — may need
   * a different value than this section would pick alone (18 §108).
   */
  density?: SectionDensity
  /** Sequence decision, like `density`. See the template. */
  surface?: SectionSurface
  id?: string
  variant?: 'aside' | 'strip' | 'editorial'
  content: ExperienceContent
  /**
   * The market's published number.
   *
   * ⚠ PASSED IN FROM `marketOperatingDetail`, NOT WRITTEN IN CONTENT,
   * so a page cannot end up publishing two different numbers and a
   * market with none simply shows no phone action (01 §20).
   */
  phone?: { label: string; phoneE164: string }
}

/**
 * Whether `ExperienceSection` renders anything.
 *
 * A template listing this section in its `densities` array must gate
 * that entry on this predicate, so the array and the composition
 * describe the same page.
 */
export function experienceRenders(
  content: ExperienceContent | undefined,
): boolean {
  return content !== undefined
}

/** Normalises the two shapes `ExperienceBlock.items` accepts. */
function listItem(item: string | ExperienceListItem): ExperienceListItem {
  return typeof item === 'string' ? { text: item } : item
}

/**
 * ⚠ GREEN ON THE INDEPENDENCE CARD IS AN OWNER DECISION (2026-09-07),
 * NOT A DRIFT OF THE CONVERSION COLOUR.
 *
 * DEC-096 reserves `--accent` green for conversion actions and the
 * discipline is real: green scattered across icons and rules is what
 * makes a conversion colour stop reading as one. The owner asked for it
 * here, on one card out of three, to mark the differentiator.
 *
 * It survives the same argument `TrustBar`'s green icons already won:
 * the mark is `aria-hidden` beside a heading that states the point in
 * words, so nothing rests on the hue (18 §96). Every OTHER accent in
 * this section is `--accent-secondary` blue, and the only green button
 * on the page is still the primary CTA.
 *
 * ⚠ THE BAR IS A PAINTED LAYER, NOT A `border-l-4`. `cn()` is a plain
 * join rather than tailwind-merge, so a left-border width and colour
 * passed alongside the card's own `border border-border` would ship all
 * four classes and let stylesheet order decide the winner.
 */
const ACCENT: Record<'blue' | 'green', { bar: string; icon: string }> = {
  blue: { bar: 'bg-accent-secondary', icon: 'text-accent-secondary' },
  green: { bar: 'bg-accent', icon: 'text-accent' },
}

/* ==========================================================================
   Blocks
   ========================================================================== */

/**
 * One heading plus its paragraphs and optional list.
 *
 * `max-w-prose` is 65ch, which is the low end of the 65-75 characters
 * the owner asked for (2026-09-07) and the measure the rest of the site
 * already reads at.
 */
function Block({
  block,
  /**
   * Renders the list with check marks instead of the rule-topped
   * treatment.
   *
   * ⚠ PRESENTATION ONLY. Same `<ul>`, same `<li>`, same text; the mark
   * is `aria-hidden` and the rule it replaces was decorative too, so
   * the accessible output is byte-identical either way.
   */
  checkItems = false,
  /** Promotes the block heading where it titles a whole panel. */
  headingLevel = 'h3',
  /**
   * Body-text weight.
   *
   * ⚠ `strong` EXISTS FOR A MEASURED REASON, NOT A STYLISTIC ONE.
   * `--muted-foreground` (#5f6b73) measures 5.08:1 on this section's
   * plain `muted` ground, but the editorial variant's conversion panel
   * sits on a blue tint that composites to #e7eff2, where the same
   * text drops to 4.70:1 - passing AA by 0.20, which is not enough
   * margin to leave unremarked in a file whose other contrast notes
   * treat 0.26 as tight.
   *
   * `--foreground` on that tint measures 12.67:1. It also reads
   * correctly: a conversion panel's copy is primary, not supporting.
   *
   * Default is `muted`, so `aside` and `strip` are untouched.
   */
  tone = 'muted',
}: {
  block: ExperienceBlock
  checkItems?: boolean
  headingLevel?: 'h3' | 'h4'
  tone?: 'muted' | 'strong'
}) {
  const Heading = headingLevel
  const bodyTone = tone === 'strong' ? 'text-foreground' : 'text-muted-foreground'
  return (
    <div>
      <Heading className="text-h4 font-semibold tracking-tight text-balance">
        {block.title}
      </Heading>

      {block.body?.map((paragraph) => (
        <p
          key={paragraph}
          className={cn('mt-3 max-w-prose text-body leading-7', bodyTone)}
        >
          {paragraph}
        </p>
      ))}

      {block.listIntro !== undefined && (
        <p className={cn('mt-3 max-w-prose text-body leading-7', bodyTone)}>
          {block.listIntro}
        </p>
      )}

      {block.items !== undefined && block.items.length > 0 && (
        /*
          A real `<ul>` in both treatments. The default marker is a
          border rather than a bullet glyph, so the rhythm matches
          `CoverageSection`'s rule-topped list rather than introducing a
          third list treatment; `checkItems` swaps that rule for a check
          mark where the list is the point of a panel rather than an
          aside.

          ⚠ THE ICON IS NOT A LIST MARKER IN THE ACCESSIBILITY TREE. It
          is `aria-hidden` inside the `<li>`, so the list still
          announces its length and each item's text and nothing else
          (18 §96).
        */
        <ul
          className={cn(
            'mt-4 max-w-prose',
            checkItems ? 'space-y-4' : 'space-y-2',
          )}
        >
          {block.items.map((raw) => {
            const item = listItem(raw)
            const Mark = item.icon !== undefined ? SECTION_ICONS[item.icon] : CheckIcon

            return checkItems ? (
              <li key={item.text} className="flex items-start gap-3">
                {/*
                  ⚠ `size-5` AND `aria-hidden`. Large enough to read as
                  the thing it depicts rather than a smudge, and hidden
                  from assistive technology because the sentence beside
                  it already says what it means (18 §96). A screen
                  reader hears a five-item list of plain text, exactly
                  as it did before the icons.
                */}
                <Mark className="mt-1 size-5 shrink-0 text-accent-secondary" />
                <span className="text-body leading-7 text-muted-foreground">
                  {item.text}
                </span>
              </li>
            ) : (
              <li
                key={item.text}
                className="border-l-2 border-border pl-4 text-body leading-7 text-muted-foreground"
              >
                {item.text}
              </li>
            )
          })}
        </ul>
      )}

      {block.after?.map((paragraph) => (
        <p
          key={paragraph}
          className={cn('mt-3 max-w-prose text-body leading-7', bodyTone)}
        >
          {paragraph}
        </p>
      ))}
    </div>
  )
}

function ProofCards({
  cards,
  layout,
  /**
   * Card weight.
   *
   *   compact  accent down the LEFT edge, icon inline with the title.
   *            What `aside` and `strip` render, and the default so
   *            neither changes.
   *   feature  accent across the TOP edge, a larger icon on its own
   *            line above the title, and more padding. For a row that
   *            is a section group in its own right rather than a
   *            sidebar or a strip under the introduction.
   *
   * ⚠ THE DEFAULT IS LOAD-BEARING. `feature` was added for the
   * `editorial` variant on 2026-09-07 and San Diego and Las Vegas must
   * render exactly as they did; a new default would have restyled both
   * silently.
   */
  emphasis = 'compact',
}: {
  cards: ExperienceContent['proof']
  layout: 'stacked' | 'row'
  emphasis?: 'compact' | 'feature'
}) {
  const feature = emphasis === 'feature'

  return (
    <ul
      className={cn(
        'grid',
        /*
          ⚠ THE RESPONSIVE GUTTER IS `feature` ONLY. The owner's target
          is 16 / 20 / 24px (2026-09-07), and `compact` keeps the flat
          `gap-4` it shipped with so the two markets using it are
          untouched.
        */
        feature ? 'gap-4 sm:gap-5 lg:gap-6' : 'gap-4',
        layout === 'row' ? 'sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1',
      )}
    >
      {cards.map((card) => {
        const Icon = SECTION_ICONS[card.icon]
        const accent = ACCENT[card.accent]

        return (
          <li
            key={card.title}
            /*
              `overflow-hidden` so the painted accent bar is clipped by
              the card's own radius instead of squaring off its corners.

              Grid items stretch by default, so cards in a row share the
              tallest card's height without a fixed height that could
              clip copy.
            */
            className={cn(
              'relative overflow-hidden rounded-md border border-border bg-surface',
              feature ? 'p-6 pt-7 sm:p-7 sm:pt-8' : 'p-5 pl-6',
            )}
          >
            <span
              aria-hidden="true"
              className={cn(
                'absolute',
                feature ? 'inset-x-0 top-0 h-1' : 'inset-y-0 left-0 w-1',
                accent.bar,
              )}
            />

            {feature ? (
              <>
                <Icon className={cn('size-8', accent.icon)} />
                <h3 className="mt-4 text-h4 font-semibold tracking-tight text-balance">
                  {card.title}
                </h3>
              </>
            ) : (
              <h3 className="flex items-start gap-2.5 text-h4 font-semibold tracking-tight text-balance">
                <Icon className={cn('mt-0.5 size-5 shrink-0', accent.icon)} />
                {card.title}
              </h3>
            )}

            <p
              className={cn(
                'mt-2 leading-6 text-muted-foreground',
                feature ? 'text-body' : 'text-sm',
              )}
            >
              {card.body}
            </p>
          </li>
        )
      })}
    </ul>
  )
}

export function ExperienceSection({
  density = 'sparse',
  surface = 'muted',
  id = 'company-experience',
  variant = 'aside',
  content,
  phone,
}: ExperienceSectionProps) {
  /*
    Section wiring shared by all three variants, so a caller cannot get
    the texture on one arrangement and not another.

    ⚠ `texture` IS `undefined` FOR EVERY MARKET BUT ST. LOUIS, so San
    Diego and Las Vegas render byte-identically - `Section` adds no
    stacking context, no clip and no layer without it.

    ⚠ THE OPACITY STEPS DOWN ON SMALL SCREENS. A cropped pattern is
    busiest where there is least room, so it runs 6% on desktop, 5% at
    tablet and 4% on a phone. Owner target (2026-09-07) was 5-7 / 4-6 /
    3-5; these sit inside all three, chosen against the rendered page
    rather than picked off the range.
  */
  const sectionProps = {
    density,
    surface,
    labelledBy: id,
    texture:
      content.texture !== undefined
        ? {
            src: content.texture.src,
            className: 'opacity-[0.04] sm:opacity-[0.05] lg:opacity-[0.06]',
          }
        : undefined,
  }

  const primary = resolveApprovedLink(content.actions.primary.pageId, {
    label: content.actions.primary.label,
  })
  const secondary = resolveApprovedLink(content.actions.secondary.pageId, {
    label: content.actions.secondary.label,
  })

  /*
    The heading area, identical in both variants: a short rule, the
    eyebrow, the H2, and the opening paragraphs at reading measure.

    ⚠ NOT `SectionHeading`. That component caps its whole block at
    `--container-reading` (42rem) and takes one `intro` node; this
    heading needs two paragraphs at `max-w-prose` and a rule above the
    eyebrow. Rebuilding those two details around it would be more
    coupling than writing them.
  */
  const heading = (
    <div>
      {/*
        The blue rule above the eyebrow (owner, 2026-09-07). Decorative
        and `aria-hidden`: the eyebrow beneath it carries the label.
      */}
      <span
        aria-hidden="true"
        className="block h-0.5 w-10 bg-accent-secondary"
      />
      <p className="mt-4 text-caption font-semibold tracking-wide text-muted-foreground uppercase">
        {content.eyebrow}
      </p>
      <h2
        id={id}
        className="mt-3 max-w-[38rem] text-h2 font-semibold tracking-tight text-balance"
      >
        {content.title}
      </h2>
      {content.intro.map((paragraph) => (
        <p
          key={paragraph}
          className="mt-4 max-w-prose text-body-lg leading-8 text-muted-foreground"
        >
          {paragraph}
        </p>
      ))}
    </div>
  )

  /*
    The closing row: coverage statement, then the actions.

    ⚠ THE COVERAGE PARAGRAPH IS NOT DECORATION. It is what keeps a
    section full of capability copy from implying blanket availability:
    every market's version ends by asking the visitor to confirm before
    scheduling (CLAUDE.md §24, 01 §35). Do not trim it for length.

    ⚠ ONE PRIMARY ACTION (18 §106). Green is the conversion colour and
    only the first button wears it; the second is the site's outlined
    secondary, and the phone is a tertiary text action rather than a
    third button.
  */
  const closing = (
    <div className="border-t border-border pt-8">
      <Block block={content.coverage} />

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <ButtonLink href={primary.href} variant="primary">
          {primary.label}
        </ButtonLink>
        {/*
          ⚠ BLUE, NOT THE LIGHT FILL. `accent` is `--accent-secondary`,
          whose documented role is "secondary buttons, non-CTA
          emphasis". This action navigates to another page rather than
          converting, so it must NOT be green: DEC-096 keeps green for
          the conversion, and a page where every action is green has no
          hierarchy left to read.
        */}
        <ButtonLink href={secondary.href} variant="accent">
          {secondary.label}
        </ButtonLink>
        {phone !== undefined && (
          /*
            `ButtonLink` renders `next/link`, which is for routes and
            `tel:` is not one. The site's tracked phone anchor wears the
            tertiary button's classes so appearance still comes from one
            place (18 §46).

            `section_cta`, not `final_cta`: the page's closing CTA is
            further down and 19 §32 exists to tell placements apart.
          */
          <TrackedPhoneLink
            phoneE164={phone.phoneE164}
            ctaLocation="section_cta"
            className={buttonClasses('tertiary')}
          >
            Call {phone.label}
          </TrackedPhoneLink>
        )}
      </div>
    </div>
  )

  if (variant === 'editorial') {
    /*
      ==================================================================
      FOUR FULL-WIDTH GROUPS, NOT A COLUMN INSIDE A COLUMN
      ==================================================================
      Owner direction, 2026-09-07. The `aside` arrangement put the three
      proof cards in a 5/12 sidebar, which left them narrow beside a
      long content column and made the band read as a document rather
      than a designed section. Every group here spans the container:

        1  heading + intro (7/12) beside one photograph (5/12)
        2  the three proof cards, full-width row
        3  two benefit panels
        4  coverage and conversion

      ⚠ DOM ORDER IS THE MOBILE READING ORDER, AND NOTHING REORDERS
      VISUALLY AGAINST IT. Eyebrow, heading, intro, image, proof cards,
      inspection panel, lateral-programme panel, coverage. No `order-*`
      class appears below, so keyboard focus follows the eye at every
      width and the single-column stack needs no separate rule.

      ⚠ SEPARATION IS `mt-14` BETWEEN GROUPS, NOT A RULE OR A COLOUR
      CHANGE PER GROUP. The owner ruled out horizontal rules as
      separators (2026-09-04) and 18 §11 warns against alternating
      backgrounds for decoration. Whitespace does the work; only the
      conversion panel changes surface, because it changes PURPOSE.
    */
    return (
      <Section {...sectionProps}>
        {/* ---- 1. heading and the one supporting photograph ---- */}
        <div className="grid gap-x-12 gap-y-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">{heading}</div>

          {content.image !== undefined && (
            <div className="lg:col-span-5">
              {/*
                ⚠ A MEDIA BOX, NOT A BACKDROP. The frame sits in its own
                bordered container beside the copy: nothing is written
                over it, so it needs no scrim and none of this file's
                contrast measurements apply to it.

                ⚠ `aspect-[4/3]` PLUS `fill` IS WHAT PREVENTS LAYOUT
                SHIFT. The box reserves its height from its width before
                the image loads, so nothing below it moves when the
                bytes arrive. The asset is 2896x2172, exactly 4:3, so
                `object-cover` crops nothing.

                ⚠ NOT `priority`. This band sits well below the fold on
                every market hub, and 18 §59 and CLAUDE.md §59 both warn
                against eager loading. Next's default lazy behaviour is
                correct here.
              */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-md border border-border bg-surface-muted">
                <Image
                  src={content.image.src}
                  alt={content.image.alt}
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          )}
        </div>

        {/* ---- 2. the proof row, full width ---- */}
        <div className="mt-14">
          <ProofCards cards={content.proof} layout="row" emphasis="feature" />
        </div>

        {/* ---- 3. the two benefit panels ---- */}
        {content.blocks.length > 0 && (
          /*
            ⚠ `lg:items-start`, SO EACH PANEL SIZES TO ITS OWN CONTENT.
            The grid default is `stretch`, and with `h-full` on the
            panels it gave two equal-height cards - which measured 187px
            of dead space inside the shorter one, because the
            lateral-programme block is two paragraphs where the
            inspection block is a paragraph plus a five-item list. The
            owner ruled out excessive empty space (2026-09-07) and asked
            for panels that are "equal OR visually balanced"; two
            bordered cards that each end where their copy does are the
            balanced reading of that, and the tidier one.

            No fixed heights anywhere, so nothing clips at any width.
          */
          <div className="mt-14 grid gap-4 sm:gap-5 lg:grid-cols-2 lg:items-start lg:gap-6">
            {content.blocks.map((block, index) => (
              <div
                key={block.title}
                className="rounded-md border border-border bg-surface p-6 sm:p-8"
              >
                {/*
                  ⚠ THE SECOND PANEL WEARS THE RULE, THE FIRST WEARS THE
                  CHECK MARKS. Both are `--accent-secondary`, both are
                  restrained, and together they make the pair read as
                  related without either becoming a second conversion
                  colour (DEC-096 reserves green for that).

                  The rule only appears on a panel with no list, so a
                  panel never carries both marks.
                */}
                {block.items === undefined && (
                  <span
                    aria-hidden="true"
                    className="mb-5 block h-0.5 w-10 bg-accent-secondary"
                  />
                )}
                <Block block={block} checkItems={index === 0} />
              </div>
            ))}
          </div>
        )}

        {/* ---- 4. coverage and conversion ---- */}
        <div
          /*
            ⚠ A TINT DERIVED FROM AN APPROVED TOKEN, NOT A NEW COLOUR.
            `--accent-secondary` at 6% over this section's `muted`
            ground lands near #e9eff3: still pale slate, visibly bluer
            than the ground behind it and than the white panels above
            it, which is what marks this block as the conversion rather
            than more information. 18 §11 allows a surface change that
            carries meaning; this one does.

            Body text here is `text-foreground` on that tint, which
            measures well above 4.5:1 — the tint is far too light to
            move it. Nothing in this panel is white text.
          */
          className="mt-14 rounded-md border border-accent-secondary/20 bg-accent-secondary/[0.06] p-6 sm:p-8"
        >
          <Block block={content.coverage} tone="strong" />

          {/*
            ⚠ THE WHOLE PANEL IS NOT A LINK. Three separate actions
            live here and nesting them inside one anchor would be
            invalid and unusable. One primary (18 §106), one secondary,
            and the phone as a tertiary text action.

            `w-full sm:w-auto` lets the buttons fill the column on a
            phone, which the owner asked for, without stretching them
            across a desktop row.
          */}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <ButtonLink
              href={primary.href}
              variant="primary"
              className="w-full sm:w-auto"
            >
              {primary.label}
            </ButtonLink>
            {/*
              ⚠ BLUE, MATCHING THE OTHER TWO VARIANTS' CLOSING ROW. This
              action navigates to another page rather than converting,
              so it must not be green: DEC-096 keeps green for the
              conversion beside it.
            */}
            <ButtonLink
              href={secondary.href}
              variant="accent"
              className="w-full sm:w-auto"
            >
              {secondary.label}
            </ButtonLink>
            {phone !== undefined && (
              /*
                `ButtonLink` renders `next/link`, which is for routes and
                `tel:` is not one. The site's tracked phone anchor wears
                the button classes so appearance still comes from one
                place (18 §46), and `min-h-11` in that base keeps it a
                44px touch target (18 §48).

                ⚠ GREEN, AND THAT IS A SECOND GREEN IN THIS PANEL. Owner
                direction, 2026-09-07: calling is a conversion, so it
                carries the conversion colour. 18 §106 asks for one
                primary action per view and this panel now has two -
                the trade the owner accepted, on the reading that a
                caller and a scheduler are the same intent arriving by
                different routes. The blue programme link beside them is
                still clearly the one that is not an ask.

                ⚠ `editorial` ONLY. The shared closing row further up
                this file keeps its tertiary text link, so San Diego and
                Las Vegas are unchanged.
              */
              <TrackedPhoneLink
                phoneE164={phone.phoneE164}
                ctaLocation="section_cta"
                className={buttonClasses('primary', 'w-full sm:w-auto')}
              >
                Call {phone.label}
              </TrackedPhoneLink>
            )}
          </div>
        </div>
      </Section>
    )
  }

  if (variant === 'strip') {
    return (
      <Section {...sectionProps}>
        {heading}

        {/* The proof strip, directly under the introduction. */}
        <div className="mt-10">
          <ProofCards cards={content.proof} layout="row" />
        </div>

        {/*
          The body, in a 6/6 split. A block marked `half` takes one
          column; anything else spans both, so a full-width block can
          open or close the run without a second grid.
        */}
        <div className="mt-12 grid gap-x-10 gap-y-10 lg:grid-cols-2">
          {content.blocks.map((block) => (
            <div
              key={block.title}
              className={cn(block.half !== true && 'lg:col-span-2')}
            >
              <Block block={block} />
            </div>
          ))}
        </div>

        <div className="mt-12">{closing}</div>
      </Section>
    )
  }

  return (
    <Section {...sectionProps}>
      {heading}

      {/*
        7/12 content, 5/12 proof.

        ⚠ DOM ORDER IS CONTENT, THEN PROOF, THEN ACTIONS, AND THAT IS
        THE MOBILE ORDER THE OWNER ASKED FOR (2026-09-07). Nothing here
        reorders visually against the source, so keyboard focus follows
        the eye at every width and the single-column stack needs no
        `order-*` classes to come out right.
      */}
      <div className="mt-10 grid gap-x-12 gap-y-10 lg:grid-cols-12">
        <div className="space-y-10 lg:col-span-7">
          {content.blocks.map((block) => (
            <Block key={block.title} block={block} />
          ))}
        </div>

        <aside className="lg:col-span-5">
          <ProofCards cards={content.proof} layout="stacked" />
        </aside>
      </div>

      <div className="mt-12">{closing}</div>
    </Section>
  )
}
