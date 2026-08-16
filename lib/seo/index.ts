/**
 * SEO utilities barrel.
 *
 * Build sequence step 14 (docs/02-nextjs-technical-architecture.md §103).
 *
 * ⚠ Robots directives are derived from the page record's status via
 * `robotsForPage()`. Never pass them per call site — 04 §4's
 * indexability rule has one implementation, and that is what keeps
 * gated pages out of the index.
 */
export { pageMetadata, rootMetadata } from './metadata'
export type { PageMetadataInput } from './metadata'
