import Image from 'next/image'
import Link from 'next/link'
import { resolvePrimaryNav } from '@/data/navigation'
import { SITE_NAME } from '@/data/business'
import { PRIMARY_CTA } from '@/components/layout/cta'

/**
 * Site header.
 *
 * Governed by docs/18-design-system.md §42-45, §48, §94, §103;
 * docs/02-nextjs-technical-architecture.md §30, §60.
 *
 * A Server Component. The mobile menu uses `<details>`/`<summary>`
 * rather than React state, so the header ships no JavaScript at all
 * (02 §30 — client components only when browser behaviour is genuinely
 * needed; 18 §103 — performance is part of the design system).
 * `<details>` is keyboard-operable and screen-reader-announced natively,
 * which satisfies 18 §94 and §95 without custom ARIA.
 *
 * The header also no longer pulls in a client component of its own:
 * `HeaderPhoneLink` was `'use client'`, and it was the only one here.
 *
 * ---------------------------------------------------------------------------
 * ⚠ THERE IS NO PHONE CONTROL IN THIS HEADER. THAT IS DELIBERATE.
 * ---------------------------------------------------------------------------
 * 18 §42 places a phone link in the header, and one used to be here:
 * `HeaderPhoneLink` read the current route and rendered that market's
 * own tracked `tel:` link on `/st-louis-mo/`, `/san-diego-ca/` and
 * `/las-vegas-nv/`, falling back to "Call" -> `/contact/` on sitewide
 * pages where no single number is correct (01 §20).
 *
 * The owner directed its removal on 2026-09-03. Do not restore it as a
 * perceived regression: the header CTA is now the only action here by
 * intent.
 *
 * Click-to-call is unaffected everywhere else and was checked before
 * removing this, not assumed. `SiteFooter` carries the St. Louis and
 * San Diego numbers as tracked `tel:` links on every page, `/contact/`
 * lists all three including Las Vegas, and the Las Vegas market page
 * states its own number in body copy. The component itself is in git
 * history if the market-aware behaviour is ever wanted back.
 *
 * ---------------------------------------------------------------------------
 * STICKY
 * ---------------------------------------------------------------------------
 * The ported composition places a sticky header on every page type, and
 * the ported page maps are materially longer than what they replaced,
 * so the primary CTA would otherwise scroll out of reach.
 *
 * Pure CSS, so the header still ships no JavaScript. Sticky was adopted
 * from the reference style; click-to-call was not.
 *
 * A sticky header covers in-page anchor targets, so `app/globals.css`
 * carries a matching `:target { scroll-margin-top }`. Change both
 * together.
 *
 * Dropdowns and mega menus (18 §44) are intentionally not here — they
 * are step 17/18 work. The flat list is complete and usable meanwhile.
 */
export function SiteHeader() {
  const nav = resolvePrimaryNav()

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-surface">
      <div className="mx-auto flex max-w-[var(--container-max)] items-center justify-between gap-6 px-4 py-4 sm:px-6">
        {/*
          18 §7 — the wordmark is replaced by the approved logo, which
          arrived with the DEC-096 brand package.

          The full-colour lockup, because the header sits on
          `bg-surface` (white). The footer takes the white one-colour
          variant for the same reason in reverse.

          `alt` is the company name, not "logo": this is a link to the
          home page, and a screen reader should hear where it goes. The
          artwork already contains the name, so there is no visible
          wordmark beside it to duplicate.

          `priority` because it is above the fold on every route and
          would otherwise lazy-load into a layout shift. Intrinsic size
          is 926x184; the rendered box is a third of that, which keeps
          it sharp on a 2x display without shipping a second asset.
        */}
        <Link href="/" className="shrink-0">
          <Image
            src="/images/brand/logos/01-primary-logo/the-sewer-pros-logo-primary-transparent.png"
            alt={SITE_NAME}
            width={926}
            height={184}
            priority
            className="h-9 w-auto sm:h-10"
          />
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-6">
            {nav.map((item) => (
              <li key={item.pageId}>
                <Link
                  href={item.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link
          href={PRIMARY_CTA.href}
          className="hidden min-h-11 items-center rounded-md bg-accent px-4 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90 lg:inline-flex"
        >
          {PRIMARY_CTA.label}
        </Link>

        {/* Mobile disclosure — 18 §45, §48 (44px minimum touch target). */}
        <details className="lg:hidden [&[open]>summary_.mark-open]:hidden [&[open]>summary_.mark-close]:block">
          <summary className="flex min-h-11 cursor-pointer list-none items-center rounded-md px-3 text-sm font-medium text-foreground [&::-webkit-details-marker]:hidden">
            <span className="mark-open">Menu</span>
            <span className="mark-close hidden">Close</span>
          </summary>

          <div className="absolute inset-x-0 z-20 border-b border-border bg-surface px-4 pb-6 shadow-sm sm:px-6">
            <nav aria-label="Primary mobile">
              <ul className="flex flex-col">
                {nav.map((item) => (
                  <li key={item.pageId} className="border-b border-border last:border-0">
                    <Link
                      href={item.href}
                      className="flex min-h-11 items-center text-sm text-foreground"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* 18 §152 — the primary action stays reachable on mobile. */}
            <Link
              href={PRIMARY_CTA.href}
              className="mt-4 inline-flex min-h-11 w-full items-center justify-center rounded-md bg-accent px-4 text-sm font-medium text-accent-foreground"
            >
              {PRIMARY_CTA.label}
            </Link>
          </div>
        </details>
      </div>
    </header>
  )
}
