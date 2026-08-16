/**
 * Conditional className joiner.
 *
 * Deliberately tiny and dependency-free. `clsx` and `tailwind-merge`
 * are the usual reach here, but 18 §103 and CLAUDE.md §56 both say not
 * to add dependencies that cost bundle size without earning it, and
 * these components do not pass conflicting utility classes — variants
 * are selected from lookup maps rather than merged.
 *
 * If genuine class conflicts appear later, revisit rather than paper
 * over them with a merge library.
 */
export function cn(
  ...values: (string | false | null | undefined)[]
): string {
  return values.filter(Boolean).join(' ')
}
