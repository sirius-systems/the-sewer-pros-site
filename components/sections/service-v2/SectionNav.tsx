'use client'

import { useEffect, useRef } from 'react'
import { Container } from '@/components/ui'
import type { SectionNavItem } from './sectionNavConfig'

/**
 * "On this page" list for Service Page Template v2.
 *
 * ONE nav in the DOM at every width, so assistive technology reads it
 * once. The template places it directly after the definition, inside a
 * wrapper that spans the sections the list links to, which is what lets
 * it stay on screen for the whole page:
 *
 *   below 1000px  a static, in-flow vertical list
 *   1000px and up a sticky full-width bar under the site header, one row
 *                 of links that scrolls sideways when it is longer than
 *                 the viewport
 *
 * A bar rather than a side rail on purpose: a rail needs a gutter the
 * 1280px container does not leave at common widths, and narrowing the
 * sections to make room would shift every layout on the page. The bar
 * is its own full-width element, so it overlaps and clips nothing.
 *
 * Links are plain anchors and work with JavaScript off. The island only
 * marks the current section with `aria-current="true"`, by setting an
 * attribute directly (no state, no re-render of the page tree), and keeps
 * that link in view inside the bar. There is no smooth scrolling here;
 * the global reduced-motion rule is untouched.
 *
 * The list is derived by the template from the sections it rendered, so
 * a link can never point at a section that is absent.
 */
const HEADER_OFFSET = 190

export function SectionNav({ items }: { items: readonly SectionNavItem[] }) {
  const listRef = useRef<HTMLOListElement>(null)

  useEffect(() => {
    const list = listRef.current
    if (list === null) return
    const targets = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null)
    if (targets.length === 0) return

    let current: string | null = null
    const update = () => {
      let active = targets[0]
      for (const el of targets) {
        if (el.getBoundingClientRect().top <= HEADER_OFFSET) active = el
      }
      // Above the first linked section nothing is current.
      const none = targets[0].getBoundingClientRect().top > HEADER_OFFSET
      const next = none ? null : active.id
      if (next === current) return
      current = next
      for (const link of list.querySelectorAll<HTMLAnchorElement>('a')) {
        if (link.getAttribute('href') === `#${next}`) {
          link.setAttribute('aria-current', 'true')
          // Keep the active link visible inside the sideways-scrolling bar.
          if (list.scrollWidth > list.clientWidth) {
            const left = link.offsetLeft - list.clientWidth / 2 + link.clientWidth / 2
            list.scrollTo({ left, behavior: 'auto' })
          }
        } else link.removeAttribute('aria-current')
      }
    }

    const observer = new IntersectionObserver(update, {
      threshold: [0, 1],
      rootMargin: '0px 0px 0px 0px',
    })
    for (const el of targets) observer.observe(el)
    update()
    return () => observer.disconnect()
  }, [items])

  return (
    <div className="border-y border-border bg-background min-[1000px]:sticky min-[1000px]:top-[var(--site-header-h,4.8125rem)] min-[1000px]:z-30 min-[1000px]:shadow-sm">
      <Container>
        <nav
          aria-labelledby="on-this-page"
          className="py-4 min-[1000px]:flex min-[1000px]:items-center min-[1000px]:gap-4 min-[1000px]:py-0"
        >
          <p
            id="on-this-page"
            className="text-caption font-semibold tracking-wide whitespace-nowrap text-muted-foreground uppercase"
          >
            On this page
          </p>
          <ol
            ref={listRef}
            className="mt-2 min-[1000px]:mt-0 min-[1000px]:flex min-[1000px]:min-w-0 min-[1000px]:overflow-x-auto min-[1000px]:[scrollbar-width:thin]"
          >
            {items.map((item) => (
              <li
                key={item.id}
                className="border-b border-border last:border-b-0 min-[1000px]:shrink-0 min-[1000px]:border-b-0"
              >
                <a
                  href={`#${item.id}`}
                  className="flex min-h-11 items-center border-b-2 border-transparent py-2 text-body-sm font-medium text-accent-secondary underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-accent-secondary aria-[current=true]:font-semibold aria-[current=true]:text-foreground min-[1000px]:border-b-2 min-[1000px]:px-3 min-[1000px]:whitespace-nowrap min-[1000px]:aria-[current=true]:border-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>
      </Container>
    </div>
  )
}
