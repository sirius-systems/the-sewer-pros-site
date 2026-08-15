import type { NextConfig } from 'next'

/**
 * The Sewer Pros — Next.js configuration
 *
 * Governed by:
 *   docs/02-nextjs-technical-architecture.md §4, §6, §7, §8
 *   docs/05-url-routing-strategy.md §5, §6
 *   docs/22-decisions-change-log.md DEC-004, DEC-009, DEC-061
 *
 * Every setting below serves a documented requirement.
 * Do not add configuration merely because another project has it
 * (02-nextjs-technical-architecture.md §7).
 */
const nextConfig: NextConfig = {
  /**
   * Static export.
   *
   * DEC-009 — Cloudflare Pages deployment.
   * 02 §4, §5 — the site is content/SEO/lead-generation oriented and
   * does not require a server runtime.
   *
   * Consequence (02 §6): no ISR, no server actions requiring a runtime,
   * no request-time server state. Changing this is an architecture
   * decision requiring a change-log entry, not a config tweak.
   */
  output: 'export',

  /**
   * Trailing slash.
   *
   * DEC-061 — canonical URLs end with `/`.
   *
   * This value is authoritative. An early draft of 02 §7 showed
   * `false` as a placeholder; 05 §5 superseded it.
   *
   * Must stay consistent with canonical tags, sitemap entries, schema
   * @id values, breadcrumb items, and internal links (05 §80, §81;
   * 15 §114). Changing it here without changing those produces
   * duplicate-URL signals.
   */
  trailingSlash: true,

  /**
   * Unoptimized images.
   *
   * 02 §7, §8 — the Next.js image optimizer requires a server runtime,
   * which `output: 'export'` does not provide.
   *
   * Images must therefore be pre-optimized at authoring time:
   * correct dimensions, modern formats, compressed (02 §8, §36).
   */
  images: {
    unoptimized: true,
  },
}

export default nextConfig
