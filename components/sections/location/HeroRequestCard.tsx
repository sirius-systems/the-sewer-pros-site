import { LeadFormSection } from '../LeadFormSection'
import type { LocationHeroForm } from '@/types'

/**
 * The request card in a location hero's aside.
 *
 * `id="request"` is the anchor every "request" CTA on the page targets, and
 * the form's `idPrefix` is `hero-lead` so `PreselectServiceListener` can find
 * `hero-lead-service`. The final CTA form uses a different prefix, so the
 * page carries no duplicate ids.
 *
 * ⚠ THE PHONE IS PASSED IN FROM THE MARKET'S PUBLISHED DETAIL, never typed
 * here. The MSD number in the note is MSD's, labelled as such.
 *
 * ⚠ NOTHING HERE SUBMITS. `LeadFormSection` is still unwired (PENDING-018)
 * and shows no success state.
 */
export const HERO_REQUEST_ID = 'request'
export const HERO_FORM_IDPREFIX = 'hero-lead'

export function HeroRequestCard({
  card,
  phone,
}: {
  card: LocationHeroForm['card']
  phone: { label: string; href: string }
}) {
  return (
    <div
      id={HERO_REQUEST_ID}
      className="rounded-md border border-border bg-surface p-6 text-foreground shadow-sm sm:p-8"
    >
      <LeadFormSection
        bare
        id="hero-request-heading"
        idPrefix={HERO_FORM_IDPREFIX}
        title={card.title}
        intro={card.intro}
        submitLabel="Request Inspection"
        messageLabel="Tell us more"
        config={card.form}
      />

      <p className="mt-5 text-sm text-muted-foreground">
        Prefer to talk? Call{' '}
        <a
          href={phone.href}
          className="font-semibold text-accent-secondary underline underline-offset-4"
        >
          {phone.label}
        </a>{' '}
        &middot; {card.phoneLineSuffix}
      </p>

      <div className="mt-5 border-t border-border pt-5">
        <h3 className="text-h4 font-semibold">{card.nextStepsTitle}</h3>
        <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm leading-6">
          {card.nextSteps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </div>

      <p className="mt-5 text-sm leading-6 text-muted-foreground">{card.note}</p>
    </div>
  )
}
