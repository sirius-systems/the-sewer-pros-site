import Link from 'next/link'
import { resolvePrimaryNav } from '@/data/navigation'
import { SITE_NAME, contact } from '@/data/business'
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
 * The phone link is the number the business publishes on its own site
 * (DEC-070), sourced from `data/business/` rather than inlined — 18 §42
 * places it in the header, and 02 §54 forbids hard-coding contact
 * details into components.
 *
 * Dropdowns and mega menus (18 §44) are intentionally not here — they
 * are step 17/18 work. The flat list is complete and usable meanwhile.
 */
export function SiteHeader() {
  const nav = resolvePrimaryNav()

  return (
    <header className="border-b border-border bg-surface">
      <div className="mx-auto flex max-w-[var(--container-max)] items-center justify-between gap-6 px-4 py-4 sm:px-6">
        {/* 18 §7 — no logo asset has been approved; wordmark until then. */}
        <Link
          href="/"
          className="text-base font-semibold tracking-tight text-foreground"
        >
          {SITE_NAME}
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

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={`tel:${contact.phoneE164}`}
            className="text-sm font-medium text-foreground hover:text-accent"
          >
            {contact.phone}
          </a>
          <Link
            href={PRIMARY_CTA.href}
            className="inline-flex min-h-11 items-center rounded-md bg-accent px-4 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
          >
            {PRIMARY_CTA.label}
          </Link>
        </div>

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

            {/* 18 §152 — primary actions stay reachable on mobile. */}
            <a
              href={`tel:${contact.phoneE164}`}
              className="mt-4 flex min-h-11 items-center justify-center rounded-md border border-border text-sm font-medium text-foreground"
            >
              Call {contact.phone}
            </a>
            <Link
              href={PRIMARY_CTA.href}
              className="mt-3 inline-flex min-h-11 w-full items-center justify-center rounded-md bg-accent px-4 text-sm font-medium text-accent-foreground"
            >
              {PRIMARY_CTA.label}
            </Link>
          </div>
        </details>
      </div>
    </header>
  )
}
