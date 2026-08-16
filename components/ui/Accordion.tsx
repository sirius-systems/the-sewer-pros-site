import type { ReactNode } from 'react'
import { cn } from '@/lib/utils/cn'

/**
 * FAQ accordion.
 *
 * Governed by docs/18-design-system.md §67-68, §94, §133;
 * docs/12-content-aeo-ai-strategy.md and 14 §35 (answer-first content);
 * docs/02-nextjs-technical-architecture.md §30.
 *
 * ---------------------------------------------------------------------------
 * WHY `<details>` AND NOT REACT STATE
 * ---------------------------------------------------------------------------
 * Native disclosure gives keyboard operation, screen-reader
 * announcement, and open/closed state for free (18 §67 requires all
 * three), and ships no JavaScript (02 §30, 18 §103).
 *
 * It also protects SEO. 18 §133 forbids hiding significant content
 * behind client-only rendering, and answer-first content is exactly
 * what AEO and AI retrieval depend on (14 §35). `<details>` content is
 * present in the static HTML whether open or closed, so a collapsed
 * answer is still crawlable — which would not hold for a JS-gated
 * accordion.
 *
 * ⚠ 18 §68: do not put core page content in accordions merely to
 * shorten the page. These are for supplementary FAQs and secondary
 * detail. If an answer is the page's primary content, render it openly.
 *
 * `defaultOpen` exists for the case 18 §67 calls out — important
 * direct-answer content that should not be hidden when visibility
 * improves the experience.
 */
export interface AccordionItemProps {
  question: string
  /** Heading level, so the accordion fits the page's outline (18 §15). */
  headingLevel?: 'h2' | 'h3' | 'h4'
  defaultOpen?: boolean
  children: ReactNode
}

export function AccordionItem({
  question,
  headingLevel: Heading = 'h3',
  defaultOpen = false,
  children,
}: AccordionItemProps) {
  return (
    <details
      open={defaultOpen}
      className="group border-b border-border last:border-0"
    >
      <summary
        className={cn(
          'flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 py-4',
          'text-left [&::-webkit-details-marker]:hidden',
        )}
      >
        <Heading className="text-base font-medium text-foreground">
          {question}
        </Heading>
        {/*
          Rotating chevron. aria-hidden because <details> already
          announces expanded/collapsed — a second cue would be noise.
        */}
        <svg
          aria-hidden="true"
          viewBox="0 0 20 20"
          className="size-4 shrink-0 text-muted-foreground transition-transform group-open:rotate-180"
        >
          <path
            d="M5 7.5 10 12.5 15 7.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </summary>

      <div className="pb-5 text-sm leading-7 text-foreground [&>*+*]:mt-4">
        {children}
      </div>
    </details>
  )
}

export interface AccordionProps {
  className?: string
  children: ReactNode
}

export function Accordion({ className, children }: AccordionProps) {
  return (
    <div className={cn('border-t border-border', className)}>{children}</div>
  )
}
