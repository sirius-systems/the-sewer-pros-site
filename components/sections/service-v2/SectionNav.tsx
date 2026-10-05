/**
 * "On this page" list for Service Page Template v2.
 *
 * Server-rendered anchors only. It is built by the template from the
 * sections it actually rendered, so a link can never point at a section
 * that is absent, and it renders only at `SECTION_NAV_MIN` or more
 * content sections (spec 10, decision 2).
 *
 * Sticky from 1000px up, as a static list below that. The sticky range
 * is the containing section, which is where the list sits; there is no
 * client script, so with JavaScript off it is the same list of anchors.
 */
export const SECTION_NAV_MIN = 8

export interface SectionNavItem {
  id: string
  label: string
}

export function SectionNav({ items }: { items: readonly SectionNavItem[] }) {
  return (
    <nav
      aria-labelledby="on-this-page"
      className="min-[1000px]:sticky min-[1000px]:top-24 min-[1000px]:self-start"
    >
      <p
        id="on-this-page"
        className="text-caption font-semibold tracking-wide text-muted-foreground uppercase"
      >
        On this page
      </p>
      <ol className="mt-3 border-t border-border">
        {items.map((item) => (
          <li key={item.id} className="border-b border-border">
            <a
              href={`#${item.id}`}
              className="flex min-h-11 items-center py-2 text-body-sm font-medium text-accent-secondary underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-secondary"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  )
}
