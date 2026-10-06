'use client'

import { useState, useSyncExternalStore, type MouseEvent } from 'react'

const noopSubscribe = () => () => {}

/**
 * Topic pills for the grouped FAQ.
 *
 * ⚠ PROGRESSIVE ENHANCEMENT. The server renders one anchor per group, each
 * pointing at that group's heading, so without script (and for crawlers)
 * every question stays on the page and each pill jumps to its group. Once
 * hydrated, an "All" pill appears and a pill filters the list to its group
 * by toggling `hidden` on the group wrapper. The default state is "All", so
 * the visible FAQ always equals the FAQPage markup (DEC-114).
 *
 * Direct DOM writes, not state, for the show / hide: the groups are
 * server-rendered children and only the active pill needs to re-render.
 */
export function FaqTopicPills({
  topics,
  allLabel = 'All topics',
}: {
  topics: readonly { id: string; label: string }[]
  allLabel?: string
}) {
  const [active, setActive] = useState('all')
  const hydrated = useSyncExternalStore(
    noopSubscribe,
    () => true,
    () => false,
  )

  const select = (event: MouseEvent<HTMLAnchorElement>, id: string) => {
    event.preventDefault()
    setActive(id)
    for (const topic of topics) {
      const wrapper = document.getElementById(topic.id)?.parentElement
      if (wrapper) wrapper.hidden = id !== 'all' && topic.id !== id
    }
  }

  const pill = (isActive: boolean) =>
    `inline-flex min-h-11 items-center rounded-full border px-4 py-2 text-body-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-secondary ${
      isActive
        ? 'border-brand bg-brand text-brand-foreground'
        : 'border-border bg-surface text-foreground hover:border-accent-secondary'
    }`

  return (
    <ul className="mt-3 flex flex-wrap gap-2">
      {hydrated && (
        <li>
          <a
            href="#faq"
            aria-current={active === 'all' ? 'true' : undefined}
            onClick={(event) => select(event, 'all')}
            className={pill(active === 'all')}
          >
            {allLabel}
          </a>
        </li>
      )}
      {topics.map((topic) => (
        <li key={topic.id}>
          <a
            href={`#${topic.id}`}
            aria-current={active === topic.id ? 'true' : undefined}
            onClick={(event) => select(event, topic.id)}
            className={pill(active === topic.id)}
          >
            {topic.label}
          </a>
        </li>
      ))}
    </ul>
  )
}
