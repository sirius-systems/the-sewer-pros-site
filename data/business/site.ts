/**
 * Site origin configuration.
 *
 * Authority: docs/02-nextjs-technical-architecture.md §53
 *            docs/15-schema-entity-strategy.md §5, §6, §102
 *            docs/22-decisions-change-log.md PENDING-001
 *
 * ===========================================================================
 * ⚠  THE CANONICAL ORIGIN IS UNRESOLVED (PENDING-001)
 * ===========================================================================
 * Neither the production domain nor the apex-vs-www form has been decided.
 *
 * That makes this module deliberately unforgiving: `siteOrigin()` THROWS
 * when `NEXT_PUBLIC_SITE_URL` is unset. There is no development fallback,
 * by design.
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
        `Set it in .env.local — see .env.example.\n` +
        `The production value is blocked on PENDING-001 (domain, apex vs www).`,
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
