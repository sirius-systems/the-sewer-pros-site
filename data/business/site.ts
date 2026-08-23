/**
 * Site origin configuration.
 *
 * Authority: docs/02-nextjs-technical-architecture.md §53, §88
 *            docs/15-schema-entity-strategy.md §5, §6, §102
 *            docs/05-url-routing-strategy.md §92, §93, §94
 *            docs/22-decisions-change-log.md DEC-078
 *
 * ===========================================================================
 * ⚠  THE ORIGIN IS REQUIRED AT BUILD TIME, WITH NO FALLBACK
 * ===========================================================================
 * The canonical origin is settled: `https://www.thesewerpros.com`, www
 * rather than apex (DEC-078, 2026-08-17, closing PENDING-001).
 *
 * It is deliberately NOT hardcoded here. Environment configuration stays
 * out of committed source (CLAUDE.md §52), so every environment supplies
 * it through `NEXT_PUBLIC_SITE_URL` — `.env.local` locally, the host's
 * own environment settings for a deployed build. `.env.example` carries
 * the value to use.
 *
 * Every environment supplies the SAME value, including previews. A
 * preview host must never appear in a canonical tag, a schema `@id`, or
 * the sitemap (05 §92, 02 §88), and under `output: 'export'` there is no
 * runtime correction once it ships.
 *
 * This module is therefore deliberately unforgiving: `siteOrigin()`
 * THROWS when `NEXT_PUBLIC_SITE_URL` is unset. There is no development
 * fallback, by design.
 *
 * A fallback would be the more convenient choice and the wrong one. This
 * project builds with `output: 'export'`, so whatever origin is present
 * at build time is baked into canonical tags, schema `@id` values, the
 * sitemap, and social cards — as static text, with no runtime correction
 * available. A `http://localhost:3000` default would not fail; it would
 * silently ship, which is precisely what 02 §53 and CLAUDE.md §53-54
 * prohibit. 15 §5 compounds it: `@id` values must stay stable once
 * published, so a wrong origin is not cheaply reversible.
 *
 * A loud build failure is the cheapest possible outcome here.
 */

/** Public brand name (01 §2.1). */
export const SITE_NAME = 'The Sewer Pros'

/** Environment variable carrying the canonical origin. */
export const SITE_URL_ENV = 'NEXT_PUBLIC_SITE_URL'

/**
 * Returns the canonical origin, with no trailing slash.
 *
 * @throws if `NEXT_PUBLIC_SITE_URL` is unset, empty, or malformed.
 */
export function siteOrigin(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL

  if (raw === undefined || raw.trim() === '') {
    throw new Error(
      `${SITE_URL_ENV} is not set.\n\n` +
        `The canonical origin cannot be guessed. This project uses ` +
        `output: 'export', so the origin present at build time is baked ` +
        `into canonicals, schema @id values, and the sitemap as static ` +
        `text (02 §53, 15 §5).\n\n` +
        `Set it in .env.local for local work, or in the deployment ` +
        `host's own environment settings for a build there — ` +
        `see .env.example.\n` +
        `The value is https://www.thesewerpros.com (DEC-078). Use it in ` +
        `every environment: a preview host must never reach a canonical ` +
        `tag, a schema @id, or the sitemap (05 §92, 02 §88).`,
    )
  }

  let parsed: URL
  try {
    parsed = new URL(raw.trim())
  } catch {
    throw new Error(
      `${SITE_URL_ENV} is not a valid absolute URL: ${JSON.stringify(raw)}. ` +
        `Expected a full origin such as https://example.com`,
    )
  }

  if (parsed.protocol !== 'https:' && parsed.protocol !== 'http:') {
    throw new Error(
      `${SITE_URL_ENV} must use http or https, got ${parsed.protocol}`,
    )
  }

  if (parsed.pathname !== '/' || parsed.search !== '' || parsed.hash !== '') {
    throw new Error(
      `${SITE_URL_ENV} must be a bare origin with no path, query, or ` +
        `fragment. Got ${JSON.stringify(raw)}.`,
    )
  }

  // `new URL('https://x.com').origin` already drops the trailing slash.
  return parsed.origin
}

/**
 * Joins a canonical pathname onto the site origin.
 *
 * The pathname keeps its trailing slash (DEC-061, 15 §114). Pass paths
 * produced by the routing helpers, not hand-written strings.
 *
 * @example absoluteUrl('/services/hydro-jetting/')
 *          → 'https://example.com/services/hydro-jetting/'
 */
export function absoluteUrl(pathname: string): string {
  if (!pathname.startsWith('/')) {
    throw new Error(
      `Pathname must start with "/": ${JSON.stringify(pathname)}`,
    )
  }
  return `${siteOrigin()}${pathname}`
}

/**
 * True when the origin is configured.
 *
 * For build-time validation and diagnostics that need to report the
 * problem rather than crash on it. Do NOT use this to branch into a
 * placeholder origin.
 */
export function hasSiteOrigin(): boolean {
  const raw = process.env.NEXT_PUBLIC_SITE_URL
  return raw !== undefined && raw.trim() !== ''
}
