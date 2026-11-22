import Link from 'next/link'
import { Section, type SectionDensity } from '@/components/ui'
import { CareersForm, SectionHeading } from '@/components/sections'
import { ApprovedInlineLink } from '@/components/links/ApprovedInlineLink'
import { TrackedPhoneLink } from '@/components/tracking/TrackedPhoneLink'
import { careersMarketBlocks, careersOpenings } from '@/data/business/careers'
import { marketOperatingDetail } from '@/data/markets/markets'
import { PageShell } from './PageShell'
import type { CorePageContent, MasterPageRecord } from '@/types'

/**
 * Careers page - `/careers/`.
 *
 * One intro, one block per market, the application form, and what happens next.
 * Each block says only that The Sewer Pros is accepting applications in that area,
 * shows that market's phone from `marketOperatingDetail`, and links to the market's
 * contact page and to the form. A market's openings list (`data/business/careers.ts`)
 * renders nothing while it is empty.
 *
 * ⚠ NO ROLES, PAY, BENEFITS, PERKS, SCHEDULES, HEADCOUNTS, START DATES OR URGENCY, no
 * "office", "branch" or "local team", no email address, no retention promise, and no
 * JobPosting markup (DEC-160). `scripts/verify-lead-routing.mjs` checks the built page.
 */
export interface CareersPageTemplateProps {
  page: MasterPageRecord
  content: CorePageContent
}

export function CareersPageTemplate({ page, content }: CareersPageTemplateProps) {
  const densities: SectionDensity[] = ['standard', 'dense', 'standard', 'dense']

  return (
    <PageShell
      page={page}
      densities={densities}
      schema={{
        title: content.seoTitle ?? content.hero.title,
        description: content.metaDescription,
      }}
    >
      <Section density="standard" width="reading">
        <header>
          <h1 className="text-h1 font-semibold tracking-tight text-balance">{content.hero.title}</h1>
          {content.hero.intro !== undefined && (
            <div className="mt-5 text-body-lg text-muted-foreground">{content.hero.intro}</div>
          )}
        </header>
      </Section>

      <Section density="dense" surface="muted" labelledBy="markets-heading">
        <SectionHeading id="markets-heading" title="Where we are accepting applications" level="h2" />
        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          {careersMarketBlocks.map((block) => {
            const detail = marketOperatingDetail[block.marketId]
            const openings = careersOpenings[block.marketId]
            return (
              <div key={block.marketId} className="rounded-md border border-border bg-surface p-6 text-foreground shadow-sm">
                <h3 className="text-h4 font-semibold tracking-tight">{block.heading}</h3>
                <p className="mt-3 text-body">The Sewer Pros is accepting applications in {block.area}.</p>
                {openings.length > 0 && (
                  <ul className="mt-3 list-disc space-y-1 pl-5 text-body">
                    {openings.map((opening) => (
                      <li key={opening.id}>
                        {opening.title}
                        {opening.summary !== undefined && <span className="text-muted-foreground">: {opening.summary}</span>}
                      </li>
                    ))}
                  </ul>
                )}
                <ul className="mt-4 space-y-2 text-body">
                  <li>
                    <Link
                      href={`/careers/?market=${block.marketId}#apply`}
                      className="font-medium text-accent-secondary underline underline-offset-4"
                    >
                      Apply for {block.area}
                    </Link>
                  </li>
                  {detail !== undefined && (
                    <li>
                      Call{' '}
                      <TrackedPhoneLink
                        phoneE164={detail.phoneE164}
                        ctaLocation="inline"
                        context={{ market_id: block.marketId }}
                        className="font-semibold text-accent-secondary underline underline-offset-4"
                      >
                        {detail.phone}
                      </TrackedPhoneLink>
                    </li>
                  )}
                  <li>
                    <ApprovedInlineLink pageId={block.contactPageId}>
                      Contact The Sewer Pros in {block.area}
                    </ApprovedInlineLink>
                  </li>
                </ul>
              </div>
            )
          })}
        </div>
      </Section>

      <Section density="standard" labelledBy="apply-heading">
        <div id="apply" className="scroll-mt-24 mx-auto max-w-[var(--container-reading)]">
          <h2 id="apply-heading" className="text-h2 font-semibold tracking-tight text-balance">
            Apply online
          </h2>
          <p className="mt-3 text-body text-muted-foreground">
            Choose the area you are applying for and tell us how to reach you. You can add a resume if you have one.
          </p>
          <div className="mt-6 rounded-md border border-border bg-surface p-6 text-foreground shadow-sm sm:p-8">
            <CareersForm />
          </div>
        </div>
      </Section>

      <Section density="dense" surface="muted" width="reading" labelledBy="next-heading">
        <h2 id="next-heading" className="text-h3 font-semibold tracking-tight">
          What happens next
        </h2>
        <p className="mt-3 text-body">After you submit the form, a team member contacts you.</p>
      </Section>
    </PageShell>
  )
}
