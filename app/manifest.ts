import type { MetadataRoute } from 'next'
import { SITE_NAME, organization } from '@/data/business'

/**
 * Web app manifest.
 *
 * Exists to give the android-chrome icons in the DEC-096 brand package
 * somewhere to be referenced from. They are manifest icons by
 * definition and do nothing without one.
 *
 * Next emits this as a static `/manifest.webmanifest` and adds the
 * `<link rel="manifest">` itself, which works under `output: 'export'`
 * because nothing here is computed per request.
 *
 * ===========================================================================
 * EVERY VALUE IS DERIVED, NONE INVENTED
 * ===========================================================================
 * `name` and `description` come from the verified business record, so
 * the manifest cannot drift from what the rest of the site claims
 * (CLAUDE.md §24). `theme_color` and `background_color` are the
 * DEC-096 brand dark and primary surface rather than colours picked to
 * look right here.
 *
 * `short_name` is the one derived string: an abbreviation of the
 * verified name for launchers that truncate at roughly 12 characters.
 * It is a display convenience, not a second trading name.
 *
 * ---------------------------------------------------------------------------
 * WHY `display: 'browser'` AND NOT `standalone`
 * ---------------------------------------------------------------------------
 * This is a content and lead-generation site, not an application.
 * `standalone` strips the URL bar, share, and browser back, which on a
 * site whose conversions are a phone call and a form removes useful
 * affordances and offers nothing in return. There is no offline mode
 * or app shell to justify the pretence.
 *
 * Home-screen bookmarks still use the icons below, which is the point
 * of the file. Change this one word if an installable experience is
 * ever actually wanted.
 *
 * ---------------------------------------------------------------------------
 * ⚠ NO `maskable` PURPOSE, DELIBERATELY
 * ---------------------------------------------------------------------------
 * The supplied android-chrome icons have FULLY TRANSPARENT corners
 * (verified by decoding the PNG: top-left pixel alpha is 0). A
 * maskable icon is cropped to the platform's shape and must therefore
 * carry a solid background across the whole canvas; declaring
 * `maskable` on a transparent one leaves the launcher to fill those
 * corners itself, which is how logos end up on an unintended black or
 * white tile.
 *
 * Declared `any`, so the icon is drawn as supplied. The mark already
 * carries generous padding, so it reads correctly unmasked.
 *
 * A true maskable variant would need new artwork with a filled
 * background, which is an asset decision rather than a wiring one.
 */
/**
 * Required under `output: 'export'` — Next needs the route declared
 * static, since there is no runtime to generate it on request
 * (02 §4, §5). Same declaration sitemap.ts and robots.ts carry.
 */
export const dynamic = 'force-static'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_NAME,
    short_name: 'Sewer Pros',
    description: organization.description,
    start_url: '/',
    scope: '/',
    display: 'browser',
    background_color: '#ffffff',
    theme_color: '#0b2d45',
    icons: [
      {
        src: '/images/brand/logos/04-digital/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/images/brand/logos/04-digital/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
    ],
  }
}
