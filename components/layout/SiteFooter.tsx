import Link from 'next/link'
import { resolveFooterNav } from '@/data/navigation'
import { SITE_NAME, organization, contact, hours } from '@/data/business'

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
 * THREE DELIBERATE OMISSIONS
 * ---------------------------------------------------------------------------
 * Contact details are the business's own published facts (DEC-070).
 * Still NO street address — none is published on the business's site,
 * and 15 §11 confirms a GBP does not authorise inventing one.
 *
 * NO LEGAL LINKS — 18 §116 and §118 assume privacy, terms, and
 * accessibility pages. None is approved in doc 04; 05 §9 lists those
 * segments as prospective, not live. Linking to them would 404.
 *
 * NO LAS VEGAS — `/las-vegas-nv/` builds and is reachable, but its
 * status is `launch_pending_validation`. 04 §4 keeps such pages out of
 * indexable internal-link modules, and a sitewide footer is the most
 * indexable link module there is. The navigation config enforces this;
 * see `data/navigation/navigation.ts`.
 */
export function SiteFooter() {
  const groups = resolveFooterNav()

  return (
    <footer className="mt-24 bg-brand text-brand-foreground">
      <div className="mx-auto max-w-[var(--container-max)] px-4 py-16 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,20rem)_1fr]">
          <div>
            <p className="text-base font-semibold tracking-tight">{SITE_NAME}</p>
            {/* Approved positioning, 01 §3 — must match visible content (15 §67). */}
            <p className="mt-3 max-w-xs text-sm opacity-80">
              {organization.description}
            </p>

            <div className="mt-6 flex flex-col gap-2 text-sm">
              <a href={`tel:${contact.phoneE164}`} className="hover:underline">
                {contact.phone}
              </a>
              <a href={`mailto:${contact.email}`} className="hover:underline">
                {contact.email}
              </a>
              <p className="opacity-70">{hours.weekdays}</p>
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
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
            {SITE_NAME} — independent sewer inspection, diagnostics, locating, and
            cleaning.
          </p>
        </div>
      </div>
    </footer>
  )
}
