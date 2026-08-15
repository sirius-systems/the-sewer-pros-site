/**
 * Homepage — SCAFFOLD PLACEHOLDER
 *
 * `/` is an approved launch route (`core-home`,
 * docs/04-master-page-build-list.md §7).
 *
 * This file is NOT the homepage. It exists so the scaffold builds.
 *
 * Real homepage content is build sequence step 20 (02 §103) and must
 * satisfy:
 *   14-content-specification.md §26  — required homepage sections
 *   17-conversion-architecture.md §12-13 — hero and CTA hierarchy
 *   18-design-system.md §38, §110    — hero and page structure
 *   15-schema-entity-strategy.md §31 — Organization / WebSite / WebPage
 *
 * Several inputs are still unresolved and must not be invented here:
 *   PENDING-001  production canonical domain
 *   PENDING-005  brand palette
 *   PENDING-006  typography
 *   PENDING-007  global primary CTA wording
 *
 * Per CLAUDE.md §23 and §100, no phone number, address, service claim,
 * credential, or availability statement appears below, because none has
 * been verified.
 */
export default function Home() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-24">
      <p className="text-sm font-medium tracking-wide text-muted-foreground uppercase">
        Scaffold
      </p>

      <h1 className="mt-4 text-3xl font-semibold text-foreground">
        The Sewer Pros
      </h1>

      <p className="mt-4 text-muted-foreground">
        Project scaffold. The site has not been built yet.
      </p>

      <div className="mt-10 rounded border border-border bg-surface-muted p-5 text-sm text-muted-foreground">
        <p className="font-medium text-foreground">Next steps</p>
        <p className="mt-2">
          Build sequence steps 7–20 in{' '}
          <code className="text-foreground">
            docs/02-nextjs-technical-architecture.md
          </code>{' '}
          §103. Routes are authorised only by{' '}
          <code className="text-foreground">
            docs/04-master-page-build-list.md
          </code>
          .
        </p>
      </div>
    </main>
  )
}
