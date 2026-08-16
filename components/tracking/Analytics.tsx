import Script from 'next/script'
import { measurementId } from '@/lib/analytics'

/**
 * GA4 loader.
 *
 * Authority: docs/19-analytics-measurement.md §6, §101, §135, §136, §141
 *            docs/02-nextjs-technical-architecture.md §30
 *
 * A Server Component that renders nothing when analytics is not
 * configured — no placeholder, no empty script tag. The site is fully
 * functional without measurement, which matters because
 * `NEXT_PUBLIC_GA_MEASUREMENT_ID` is deliberately optional while
 * PENDING-001 and environment separation are unresolved.
 *
 * ---------------------------------------------------------------------------
 * PERFORMANCE (19 §135, §136; 18 §103)
 * ---------------------------------------------------------------------------
 * `afterInteractive` so the tag never blocks first render or delays
 * interactivity. One script, one tool — 19 §135: "Do not add multiple
 * redundant tracking scripts when one tool can answer the business
 * question."
 *
 * ---------------------------------------------------------------------------
 * ⚠ send_page_view IS DISABLED HERE
 * ---------------------------------------------------------------------------
 * GA4's automatic page view fires once on script load. Under App Router
 * client-side navigation the document does not reload, so automatic
 * views would record one page per session and miss every subsequent
 * route (19 §134).
 *
 * `PageViewTracker` sends them instead, on load and on each route
 * change, with the registry-derived context attached. Leaving the
 * automatic view enabled would double-count the first page — which
 * 19 §143's duplicate-event guardrail exists to prevent.
 *
 * ---------------------------------------------------------------------------
 * ⚠ NO CONSENT LAYER YET
 * ---------------------------------------------------------------------------
 * 19 §106 requires consent handling "where applicable". No consent
 * decision has been recorded for this project, and the markets span
 * Missouri, California, and Nevada — California's rules are the
 * binding constraint and have not been assessed. This is flagged
 * rather than assumed away; see the note in the barrel.
 */
export function Analytics() {
  const id = measurementId()
  if (id === undefined) return null

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${id}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', '${id}', { send_page_view: false });
        `}
      </Script>
    </>
  )
}
