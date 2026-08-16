import type { MetadataRoute } from 'next'
import { absoluteUrl } from '@/data/business'

/**
 * robots.txt
 *
 * Authority: docs/22-decisions-change-log.md DEC-062, DEC-063, DEC-078,
 *            PENDING-011
 *            docs/12-content-aeo-ai-strategy.md §120-123
 *            docs/05-url-routing-strategy.md §92
 *
 * Build sequence step 21, unblocked by DEC-078.
 *
 * ===========================================================================
 * ⚠ THE GATED LAS VEGAS PAGES ARE NOT DISALLOWED HERE — DELIBERATELY
 * ===========================================================================
 * DEC-063 requires those five pages emit `noindex` and stay out of the
 * sitemap. Both are handled: metadata derives robots from page status,
 * and the sitemap filters on the same field.
 *
 * Adding `Disallow: /las-vegas-nv/` would look like belt-and-braces and
 * would actually defeat the mechanism. A crawler that is disallowed
 * never fetches the page, so it never sees the `noindex` — and a URL
 * discovered elsewhere can still be indexed without its content. The
 * two directives work against each other; `noindex` is the one that
 * expresses the intent, so the crawler must be allowed to read it.
 *
 * ===========================================================================
 * ⚠ NO GPTBot DIRECTIVE — PENDING-011 IS OPEN
 * ===========================================================================
 * DEC-062 separates AI SEARCH access from AI TRAINING access:
 *
 *   OAI-SearchBot  allowed (approved) — blocking it would remove the
 *                  site from ChatGPT search answers, forfeiting a
 *                  channel the AEO strategy targets
 *   GPTBot         undecided — a business preference about model
 *                  training, with no search-visibility consequence
 *
 * DEC-062 states the GPTBot directive "must not be written until
 * PENDING-011 is resolved" and must not be resolved "by inheriting a
 * template default".
 *
 * ⚠ Worth being plain about the consequence: omitting the directive is
 * not neutral. With no GPTBot rule, GPTBot falls under the general
 * allow below — so the site currently permits training access by
 * default. PENDING-011 must confirm or reverse that before launch. It
 * is a live permission, not a deferred question.
 */
/**
 * Required under `output: 'export'` — Next needs the route declared
 * static, since there is no runtime to generate it on request
 * (02 §4, §5).
 */
export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        // DEC-062, approved. Listed explicitly so a future blanket
        // AI-crawler rule cannot catch it as a side effect.
        userAgent: 'OAI-SearchBot',
        allow: '/',
      },
    ],
    sitemap: absoluteUrl('/sitemap.xml'),
  }
}
