import type { SchemaGraph } from '@/types'
import { omitEmpty } from '@/types'

/**
 * Renders a JSON-LD graph.
 *
 * Authority: docs/15-schema-entity-strategy.md §84, §102-103, §116
 *            docs/02-nextjs-technical-architecture.md §30
 *
 * A Server Component. One script tag, one `@graph` (15 §84).
 *
 * ---------------------------------------------------------------------------
 * ⚠ NULL AND PLACEHOLDER GUARDRAIL (15 §102)
 * ---------------------------------------------------------------------------
 * Production schema must never contain `undefined`, `null`, `TODO`,
 * `TBD`, `<CANONICAL_ORIGIN>`, `<PHONE_NUMBER>`, or `<ADDRESS>`. Every
 * node passes `omitEmpty()` at the serialisation boundary, so an
 * optional field that was never set is dropped rather than emitted
 * empty.
 *
 * Renders nothing when there is no graph — which is the case for the
 * five gated Las Vegas pages, since `pageSchema()` returns undefined
 * for anything not indexable (15 §115).
 *
 * ---------------------------------------------------------------------------
 * ⚠ NO PII (15 §116)
 * ---------------------------------------------------------------------------
 * Nothing here derives from user input. Every value comes from the
 * approved registries or the business config, so there is no path by
 * which a customer's details could reach structured data.
 */
export interface JsonLdProps {
  graph: SchemaGraph | undefined
}

export function JsonLd({ graph }: JsonLdProps) {
  if (graph === undefined) return null

  const cleaned = {
    ...graph,
    '@graph': graph['@graph'].map((node) =>
      omitEmpty(node as unknown as Record<string, unknown>),
    ),
  }

  return (
    <script
      type="application/ld+json"
      // Content is built from typed registry data, never user input.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(cleaned) }}
    />
  )
}
