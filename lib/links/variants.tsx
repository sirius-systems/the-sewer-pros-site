import { Children, Fragment, cloneElement, isValidElement, type ReactNode } from 'react'

/**
 * Answer-text variants for shared FAQ copy.
 *
 * A shared answer is rendered on many routes (the service + location pages reuse one
 * answer per service), so one fixed phrase would put the same exact-match anchor on a
 * canonical page from every route. Authors mark a phrase with `{{first|second|third}}`;
 * each route shows ONE of the options, chosen by a stable hash of the route and the
 * question. Every option has the same meaning, so no claim, price or availability
 * statement changes between routes.
 *
 * ONE RESOLVER, TWO CALLERS. `FaqSection` and `FaqGrouped` call it for the visible
 * answer, and `faqPageNode` (lib/schema/faq.ts) calls it for the FAQPage JSON-LD text,
 * both with the same seed (`${pathname}|${question}`). The shared FAQ linker then runs
 * on the already-resolved text, so the visible words, the link anchor and the schema
 * text all come from the one chosen string. `scripts/verify-internal-links.mjs`
 * compares the built visible text with the JSON-LD text and fails on any drift or on
 * a leftover `{{` marker.
 */
const MARKER = /\{\{([^{}]+)\}\}/g

/** FNV-1a with a final mix, so near-identical seeds spread across the options. */
function hash(s: string): number {
  let h = 0x811c9dc5
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i)
    h = Math.imul(h, 0x01000193)
  }
  h ^= h >>> 15
  h = Math.imul(h, 0x2c1b3c6d)
  h ^= h >>> 12
  return h >>> 0
}

export function resolveVariants(node: ReactNode, seed: string): ReactNode {
  let index = 0
  const pick = (body: string): string => {
    const options = body.split('|')
    return options[hash(`${seed}#${index++}`) % options.length] as string
  }
  const walk = (n: ReactNode): ReactNode => {
    if (typeof n === 'string') return n.includes('{{') ? n.replace(MARKER, (_, body: string) => pick(body)) : n
    if (Array.isArray(n)) return n.map(walk)
    if (!isValidElement(n)) return n
    const props = n.props as { children?: ReactNode }
    if (props.children === undefined) return n
    if (n.type === Fragment) return <>{Children.map(props.children, walk)}</>
    return cloneElement(n, undefined, Children.map(props.children, walk))
  }
  return walk(node)
}

/** True when an answer carries a variant marker, so callers can skip the walk otherwise. */
export function hasVariants(node: ReactNode): boolean {
  if (typeof node === 'string') return node.includes('{{')
  if (Array.isArray(node)) return node.some(hasVariants)
  if (!isValidElement(node)) return false
  return hasVariants((node.props as { children?: ReactNode }).children)
}
