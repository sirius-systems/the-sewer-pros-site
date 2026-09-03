import Image from 'next/image'
import Link from 'next/link'
import { resolveFooterNav } from '@/data/navigation'
import { TrackedPhoneLink } from '@/components/tracking'
import { SITE_NAME, organization, contact } from '@/data/business'

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
              Labelled by market. Two numbers exist (DEC-070, DEC-071)
              and 01 §20 forbids presenting one market's contact detail
              as though it covered another.
            */}
            <div className="mt-6 flex flex-col gap-1 text-sm">
              <p className="opacity-70">St. Louis</p>
              <TrackedPhoneLink
                phoneE164={contact.phoneE164}
                ctaLocation="footer"
                context={{ market_id: 'st-louis-mo' }}
                className="hover:underline"
              >
                {contact.phone}
              </TrackedPhoneLink>
              <a href={`mailto:${contact.email}`} className="hover:underline">
                {contact.email}
              </a>
              <p className="mt-3 opacity-70">San Diego</p>
              <TrackedPhoneLink
                phoneE164="+1-858-257-2888"
                ctaLocation="footer"
                context={{ market_id: 'san-diego-ca' }}
                className="hover:underline"
              >
                (858) 257-2888
              </TrackedPhoneLink>
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
