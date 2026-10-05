import { LeadFormSection } from '../LeadFormSection'
import type { ServiceId } from '@/types'

/**
 * The request card in a service hero's aside (Service Page Template v2).
 *
 * ⚠ NO PHONE NUMBER AND NO PHONE LINE (DEC-071). Service pages are
 * market-neutral, so the card carries the existing market chooser and no
 * number. The form is the shared `LeadFormSection`, so form type, field
 * set and analytics are exactly what the request form passes.
 *
 * ⚠ NOTHING HERE SUBMITS. The shared form is still unwired (PENDING-018)
 * and shows no success state; this card adds no promise of a response.
 *
 * The service is shown as a read-only chip above the form, and the
 * shared form's own service select stays preselected to the same
 * service, so the context travels with the request.
 */
export const HERO_FORM_IDPREFIX = 'hero-lead'

export function ServiceHeroRequestCard({
  title,
  serviceLabel,
  defaultServiceId,
}: {
  title: string
  serviceLabel: string
  defaultServiceId?: ServiceId
}) {
  return (
    <div className="rounded-md border border-border bg-surface p-6 text-foreground shadow-sm sm:p-8">
      <p className="text-caption font-semibold tracking-wide text-muted-foreground uppercase">
        Service
      </p>
      <p className="mt-1 inline-block rounded-md border border-border bg-surface-muted px-3 py-1 text-body-sm font-semibold text-foreground">
        {serviceLabel}
      </p>
      <div className="mt-4">
        <LeadFormSection
          bare
          id="hero-request-heading"
          idPrefix={HERO_FORM_IDPREFIX}
          title={title}
          defaultServiceId={defaultServiceId}
        />
      </div>
    </div>
  )
}
