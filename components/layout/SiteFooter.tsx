import Image from 'next/image'
import Link from 'next/link'
import { resolveFooterNav } from '@/data/navigation'
import { TrackedPhoneLink } from '@/components/tracking'
import { SITE_NAME, organization } from '@/data/business'
import { marketList, marketOperatingDetail } from '@/data/markets/markets'

/**
 * Site footer.
 *
 * Governed by docs/18-design-system.md §116-117; docs/16 §25.
 *
 * 18 §117 permits a dark footer where it suits the brand, so this uses
 * the `brand` surface token. Values remain placeholders until
 * PENDING-005 resolves; the roles are what matter here.
 *
 * ---------------------------------------------------------------------------
 * TWO DELIBERATE OMISSIONS
 * ---------------------------------------------------------------------------
 * Contact details are the business's own published facts (DEC-070).
 * Still NO street address — none is published on the business's site,
 * and 15 §11 confirms a GBP does not authorise inventing one.
 *
 * NO LEGAL LINKS — 18 §116 and §118 assume privacy, terms, and
 * accessibility pages. None is approved in doc 04; 05 §9 lists those
 * segments as prospective, not live. Linking to them would 404.
 *
 * Las Vegas WAS a third omission, held out while DEC-063 gated it.
 * DEC-080 released that gate, and `market-las-vegas-nv` is now listed
 * in `data/navigation/navigation.ts` alongside the other two markets.
 * As of 2026-09-04 it carries a phone and email here too, closing the
 * last place where it was listed as a market but not contactable.
 *
 * ---------------------------------------------------------------------------
 * CONTACT DETAIL READS FROM THE MARKET REGISTRY
 * ---------------------------------------------------------------------------
 * ⚠ DO NOT HARDCODE A NUMBER OR AN EMAIL BACK INTO THIS FILE.
 *
 * It used to: St. Louis came from `contact` (the St. Louis-scoped
 * export in organization.ts) and San Diego's number was a literal in
 * the markup, which is how San Diego ended up with a phone and no
 * email and Las Vegas with neither. DEC-083 flagged
 * `marketOperatingDetail` as populated but not consumed everywhere;
 * this closes that gap for the footer.
 *
 * The practical consequence: DEC-097 changed San Diego's email in
 * `markets.ts` alone and it appeared here for free. A hardcoded copy
 * would have been a second place to miss.
 */
/**
 * Wide-breakpoint column count for the footer nav groups.
 *
 * Keyed by how many groups survive gating, so the grid never carries
 * more columns than it has content to fill.
 */
const FOOTER_COLUMNS: Record<number, string> = {
  1: 'lg:grid-cols-1',
  2: 'lg:grid-cols-2',
  3: 'lg:grid-cols-3',
  4: 'lg:grid-cols-4',
}

export function SiteFooter() {
  const groups = resolveFooterNav()

  return (
    <footer className="mt-24 bg-brand text-brand-foreground">
      <div className="mx-auto max-w-[var(--container-max)] px-4 py-16 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,20rem)_1fr]">
          <div>
            {/*
              White one-colour variant: the footer is `bg-brand`, where
              the full-colour lockup's charcoal text would nearly
              disappear. Same artwork, correct value for the surface.

              Not a link. The footer already carries navigation, and a
              second unlabelled route to the home page adds a tab stop
              without adding a destination.
            */}
            <Image
              src="/images/brand/logos/02-one-color/the-sewer-pros-logo-white.png"
              alt={SITE_NAME}
              width={926}
              height={184}
              className="h-10 w-auto"
            />
            {/* Approved positioning, 01 §3 — must match visible content (15 §67). */}
            <p className="mt-3 max-w-xs text-sm opacity-80">
              {organization.description}
            </p>

            {/*
              Labelled by market, and separately. Three markets publish
              three different numbers, emails and founding years
              (DEC-070, DEC-071, DEC-073). 01 §20 forbids presenting
              one market's contact detail as though it covered another,
              so these are never merged into a single block.

              A market with no `marketOperatingDetail` record renders
              nothing rather than a heading with nothing under it —
              `marketOperatingDetail` is a `Partial` record, and a
              market listed in navigation is not automatically a market
              with published contact facts.
            */}
            <div className="mt-6 flex flex-col gap-1 text-sm">
              {marketList.map((market, i) => {
                const detail = marketOperatingDetail[market.id]
                if (detail === undefined) return null

                return (
                  <div key={market.id} className="flex flex-col gap-1">
                    <p className={i === 0 ? 'opacity-70' : 'mt-3 opacity-70'}>
                      {market.city}
                    </p>
                    <TrackedPhoneLink
                      phoneE164={detail.phoneE164}
                      ctaLocation="footer"
                      context={{ market_id: market.id }}
                      className="hover:underline"
                    >
                      {detail.phone}
                    </TrackedPhoneLink>
                    <a
                      href={`mailto:${detail.email}`}
                      className="hover:underline"
                    >
                      {detail.email}
                    </a>
                  </div>
                )
              })}
            </div>
          </div>

          {/*
            Columns follow the number of groups actually rendered.

            `resolveFooterNav()` ends in
            `.filter(group => group.items.length > 0)`, so a group whose
            every destination is gated (04 §4) drops out entirely. Four
            groups are configured today, but three would have landed in
            a hardcoded four-column grid and orphaned a cell.

            18 §5.6: do not force an item count into a grid it does not
            divide into evenly. This is chrome rather than a page
            section, but the rule and the failure are identical.
          */}
          <div
            className={`grid gap-10 sm:grid-cols-2 ${
              FOOTER_COLUMNS[groups.length] ?? 'lg:grid-cols-4'
            }`}
          >
            {groups.map((group) => (
              <nav key={group.title} aria-labelledby={`footer-${group.title.replace(/\s+/g, '-').toLowerCase()}`}>
                <h2
                  id={`footer-${group.title.replace(/\s+/g, '-').toLowerCase()}`}
                  className="text-xs font-semibold tracking-wide uppercase opacity-70"
                >
                  {group.title}
                </h2>
                <ul className="mt-4 flex flex-col gap-3">
                  {group.items.map((item) => (
                    <li key={item.pageId}>
                      <Link
                        href={item.href}
                        className="text-sm opacity-90 transition-opacity hover:opacity-100"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className="mt-16 border-t border-white/15 pt-8">
          {/*
            No copyright year is rendered. A hardcoded year goes stale,
            and a build-time `new Date()` would silently change the
            output on every rebuild. Add it once a source of truth for
            the entity name and founding year exists (PENDING-002).
          */}
          <p className="text-xs opacity-70">
            {SITE_NAME}: independent sewer inspection, diagnostics, locating, and
            cleaning.
          </p>
        </div>
      </div>
    </footer>
  )
}
