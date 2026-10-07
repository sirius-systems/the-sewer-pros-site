'use client'

import { useEffect, useRef, useState, type FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import { Button, Field, RadioGroup, TextInput, Textarea } from '@/components/ui'
import { marketList, marketOperatingDetail } from '@/data/markets/markets'
import { submitLead } from '@/lib/forms/submit-lead'
import type { MarketId, ServiceId } from '@/types'

/**
 * Pill-survey lead form: three short steps, one question each (four on a
 * market-neutral page, which adds "Service location?" after the service).
 *
 *   1. What do you need?   The nine residential services as pills (3x3).
 *                          "Not sure? Tell us what's happening" moves on to the next step.
 *   2. Type of property?   Optional pills (home, rental or multifamily). Can be skipped.
 *   3. How do we reach you? Full name, phone, optional email, preferred method, optional note. Submit.
 *
 * Market, location and the page path are never asked: the page supplies them.
 *
 * ⚠ SUBMISSION IS HONEST (CLAUDE.md §24). `submitLead()` reports
 * `not-configured` until PENDING-018 is closed, and this then shows the
 * market's own number instead of a confirmation. The visitor goes to
 * `/contact/thank-you/` ONLY after the endpoint accepted the request, and
 * the conversion event fires only then (19 §15).
 *
 * ⚠ ANALYTICS SEND IDS ONLY: market, service and location ids. Never a
 * name, phone, message or property type (19 §17).
 *
 * ⚠ TODO(legal): the "Text" option needs TCPA consent copy (PENDING-019).
 *
 * Pills are real radio inputs: arrow keys move between them, Space selects,
 * and the focus ring is visible.
 */

const FORM_TYPE = 'general_service' as const

/** Labels are shorthand; values are canonical registry ids. */
const SERVICE_PILLS: readonly { value: ServiceId; label: string }[] = [
  { value: 'svc-sewer-camera-inspection', label: 'Sewer Camera Inspection' },
  { value: 'svc-sewer-cleaning', label: 'Sewer Cleaning' },
  { value: 'svc-hydro-jetting', label: 'Hydro Jetting' },
  { value: 'svc-sewer-cleaning-camera-inspection', label: 'Cleaning & Camera Inspection' },
  { value: 'svc-sewer-line-locating', label: 'Sewer Line Locating' },
  { value: 'svc-drain-cleaning', label: 'Drain Cleaning' },
  { value: 'svc-pre-purchase-sewer-inspection', label: 'Pre-Purchase Inspection' },
  { value: 'svc-recurring-sewer-backup-diagnosis', label: 'Recurring Backup Diagnosis' },
  { value: 'svc-preventative-sewer-maintenance', label: 'Preventative Maintenance' },
]

const PROPERTY_PILLS = [
  { value: 'home', label: 'Home' },
  { value: 'rental-multifamily', label: 'Rental or multifamily' },
] as const

const CONTACT_METHOD_OPTIONS = [
  { value: 'call', label: 'Call' },
  { value: 'text', label: 'Text' },
  { value: 'email', label: 'Email' },
] as const

const PILL =
  'flex min-h-12 items-center justify-center rounded-md border border-border bg-background px-3 py-2 text-center text-sm font-medium text-foreground transition-colors ' +
  'cursor-pointer hover:bg-surface-muted ' +
  'peer-checked:border-accent-secondary peer-checked:bg-accent-secondary peer-checked:text-accent-secondary-foreground ' +
  'peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-accent-secondary'

export interface SurveyLeadFormProps {
  /**
   * The page's market. Omit it on a market-neutral page (a core service page):
   * the form asks "Service location?" as its second step.
   */
  marketId?: MarketId
  /** Derived location id, e.g. `loc-sd-escondido`. Analytics and payload only. */
  locationId?: string
  /** The page's own service, shown pre-selected on step 1. */
  defaultServiceId?: ServiceId
  idPrefix?: string
  title?: string
  intro?: string
  /** Id of the form's `<h2>`, for pages that scroll to it. */
  headingId?: string
}

/** 0 is the "Service location?" step, present only when the page has no market. */
type Step = 0 | 1 | 2 | 3

export function SurveyLeadForm({
  marketId: pageMarketId,
  locationId,
  defaultServiceId,
  idPrefix = 'survey',
  title = 'Request service',
  intro,
  headingId,
}: SurveyLeadFormProps) {
  const router = useRouter()
  const needsMarket = pageMarketId === undefined
  const [chosenMarket, setChosenMarket] = useState<MarketId | ''>('')
  const [step, setStep] = useState<Step>(1)
  const marketId = pageMarketId ?? (chosenMarket === '' ? undefined : chosenMarket)
  // Order: service, then (market-neutral pages only) service location, property, contact.
  const order: readonly Step[] = needsMarket ? [1, 0, 2, 3] : [1, 2, 3]
  const totalSteps = order.length
  const shownStep = order.indexOf(step) + 1
  const afterService: Step = needsMarket ? 0 : 2
  const [service, setService] = useState<ServiceId | ''>(defaultServiceId ?? '')
  const [unsure, setUnsure] = useState(false)
  const [property, setProperty] = useState('')
  const [pending, setPending] = useState(false)
  const [notice, setNotice] = useState<string | undefined>()
  const [errors, setErrors] = useState<{ name?: string; phone?: string; email?: string }>({})
  const started = useRef(false)
  const headingRef = useRef<HTMLHeadingElement>(null)

  const phoneLabel =
    marketId === undefined ? 'us' : (marketOperatingDetail[marketId]?.phone ?? 'us')
  const id = (name: string) => `${idPrefix}-${name}`

  // A service card's booking link (`data-preselect-service`, see
  // `PreselectServiceListener`) chooses the service and moves to step 2.
  // "other" is the card for "Not sure".
  useEffect(() => {
    function onPreselect(event: Event) {
      const value = (event as CustomEvent<string>).detail
      if (value === 'other') {
        setUnsure(true)
        setService('')
      } else if (SERVICE_PILLS.some((pill) => pill.value === value)) {
        setUnsure(false)
        setService(value as ServiceId)
      } else return
      setStep(needsMarket && chosenMarket === '' ? 0 : 2)
    }
    document.addEventListener('sp:preselect-service', onPreselect)
    return () => document.removeEventListener('sp:preselect-service', onPreselect)
  }, [needsMarket, chosenMarket])

  function start() {
    if (started.current) return
    started.current = true
    void import('@/lib/analytics').then((m) =>
      m.trackFormStart(FORM_TYPE, {
        ...(marketId !== undefined && { market_id: marketId }),
        ...(locationId !== undefined && { location_id: locationId }),
      }),
    )
  }

  function go(next: Step) {
    setStep(next)
    // Move focus to the new question so keyboard and screen-reader users follow.
    requestAnimationFrame(() => headingRef.current?.focus())
  }

  function chooseService(value: ServiceId) {
    start()
    setService(value)
    setUnsure(false)
    // A page that pre-selects its own service waits for "Next"; otherwise a tap advances.
    if (defaultServiceId === undefined) go(afterService)
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setNotice(undefined)
    if (marketId === undefined) {
      go(0)
      return
    }
    const data = new FormData(event.currentTarget)
    const value = (key: string) => String(data.get(key) ?? '').trim()

    // Honeypot: a real visitor never sees or fills this field.
    if (value('website') !== '') return

    const next: typeof errors = {}
    if (value('name') === '') next.name = 'Enter your full name.'
    if (value('phone').replace(/\D/g, '').length < 10) {
      next.phone = 'Enter a phone number with area code.'
    }
    if (value('email') !== '' && !/^\S+@\S+\.\S+$/.test(value('email'))) {
      next.email = 'Enter a valid email address or leave it blank.'
    } else if (value('contactMethod') === 'email' && value('email') === '') {
      next.email = 'Enter your email address, or choose another contact method.'
    }
    setErrors(next)
    if (Object.keys(next).length > 0) {
      void import('@/lib/analytics').then((m) =>
        m.trackFormError(FORM_TYPE, { market_id: marketId }),
      )
      document.getElementById(id(Object.keys(next)[0]!))?.focus()
      return
    }

    setPending(true)
    const result = await submitLead({
      marketId,
      issue: unsure || service === '' ? 'not-sure' : service,
      followUp: '',
      firstName: value('name'),
      phone: value('phone'),
      email: value('email'),
      zip: '',
      contactMethod: value('contactMethod'),
      appointmentWindow: '',
      message: value('message'),
      sourcePath: window.location.pathname,
      ...(locationId !== undefined && { locationId }),
      ...(property !== '' && { propertyType: property }),
    })
    setPending(false)

    if (result.ok) {
      void import('@/lib/analytics').then((m) =>
        m.trackFormSubmitted(FORM_TYPE, {
          market_id: marketId,
          ...(service !== '' && !unsure && { service_id: service }),
          ...(locationId !== undefined && { location_id: locationId }),
        }),
      )
      router.push(`/contact/thank-you/?market=${marketId}`)
      return
    }

    setNotice(
      result.reason === 'not-configured'
        ? `Online requests are not available yet. Please call ${phoneLabel} to schedule.`
        : `We could not send your request. Please try again, or call ${phoneLabel}.`,
    )
  }

  const question =
    step === 0
      ? 'Service location?'
      : step === 1
        ? 'What do you need?'
        : step === 2
          ? 'What type of property is it?'
          : 'How can we reach you?'

  return (
    <div>
      <h2 id={headingId} className="text-h3 font-semibold tracking-tight">
        {title}
      </h2>
      {intro !== undefined && <p className="mt-2 text-body text-muted-foreground">{intro}</p>}
      <p className="mt-2 text-sm text-muted-foreground" aria-live="polite">
        Step {shownStep} of {totalSteps}
      </p>
      <div className="mt-2 flex gap-1.5" aria-hidden="true">
        {Array.from({ length: totalSteps }, (_, i) => i + 1).map((n) => (
          <span
            key={n}
            className={`h-1 flex-1 rounded-full ${n <= shownStep ? 'bg-accent-secondary' : 'bg-border'}`}
          />
        ))}
      </div>

      <form onSubmit={handleSubmit} onInput={start} className="mt-5">
        <h3 ref={headingRef} tabIndex={-1} className="text-lg font-semibold outline-none">
          {question}
        </h3>

        {step === 0 && (
          <div className="mt-4">
            <fieldset>
              <legend className="sr-only">Service location</legend>
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
                {marketList.map((market) => (
                  <div key={market.id}>
                    <input
                      type="radio"
                      name="market"
                      id={id(`market-${market.id}`)}
                      value={market.id}
                      checked={chosenMarket === market.id}
                      onChange={() => {
                        start()
                        setChosenMarket(market.id as MarketId)
                        go(2)
                      }}
                      onClick={() => {
                        if (chosenMarket === market.id) go(2)
                      }}
                      className="peer sr-only"
                    />
                    <label htmlFor={id(`market-${market.id}`)} className={`${PILL} h-full`}>
                      {market.name}
                    </label>
                  </div>
                ))}
              </div>
            </fieldset>
            <button
              type="button"
              className="mt-3 text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground"
              onClick={() => go(1)}
            >
              Back
            </button>
          </div>
        )}

        {step === 1 && (
          <div className="mt-4">
            <fieldset>
              <legend className="sr-only">Service needed</legend>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                {SERVICE_PILLS.map((pill) => (
                  <div key={pill.value}>
                    <input
                      type="radio"
                      name="service"
                      id={id(`service-${pill.value}`)}
                      value={pill.value}
                      checked={service === pill.value && !unsure}
                      onChange={() => chooseService(pill.value)}
                      // A pre-selected pill does not fire onChange when tapped, so advance on click too.
                      onClick={() => {
                        if (service === pill.value && defaultServiceId === undefined)
                          go(afterService)
                      }}
                      className="peer sr-only"
                    />
                    <label htmlFor={id(`service-${pill.value}`)} className={`${PILL} h-full`}>
                      {pill.label}
                    </label>
                  </div>
                ))}
              </div>
            </fieldset>
            <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
              <button
                type="button"
                className="text-sm text-accent-secondary underline underline-offset-4 hover:text-foreground"
                onClick={() => {
                  start()
                  setUnsure(true)
                  setService('')
                  go(afterService)
                }}
              >
                Not sure? Tell us what&apos;s happening
              </button>
              {defaultServiceId !== undefined && service !== '' && (
                <Button type="button" onClick={() => go(afterService)}>
                  Next
                </Button>
              )}
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="mt-4">
            <fieldset>
              <legend className="sr-only">Type of property</legend>
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {PROPERTY_PILLS.map((pill) => (
                  <div key={pill.value}>
                    <input
                      type="radio"
                      name="propertyType"
                      id={id(`property-${pill.value}`)}
                      value={pill.value}
                      checked={property === pill.value}
                      onChange={() => {
                        setProperty(pill.value)
                        go(3)
                      }}
                      onClick={() => {
                        if (property === pill.value) go(3)
                      }}
                      className="peer sr-only"
                    />
                    <label htmlFor={id(`property-${pill.value}`)} className={`${PILL} h-full`}>
                      {pill.label}
                    </label>
                  </div>
                ))}
              </div>
            </fieldset>
            <div className="mt-4 flex items-center justify-between gap-3">
              <button
                type="button"
                className="text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground"
                onClick={() => go(needsMarket ? 0 : 1)}
              >
                Back
              </button>
              <button
                type="button"
                className="text-sm text-accent-secondary underline underline-offset-4 hover:text-foreground"
                onClick={() => go(3)}
              >
                Skip
              </button>
            </div>
          </div>
        )}

        {/* Step 3 stays mounted once reached so typed values survive a Back. */}
        <div hidden={step !== 3} className="mt-4 grid gap-4 sm:grid-cols-2">
          <Field htmlFor={id('name')} label="Full name (required)" required>
            <TextInput
              id={id('name')}
              name="name"
              type="text"
              autoComplete="name"
              required
              aria-required
              aria-invalid={errors.name !== undefined}
              aria-describedby={errors.name !== undefined ? id('name-error') : undefined}
            />
            {errors.name !== undefined && (
              <p id={id('name-error')} className="mt-1.5 text-caption font-medium text-error">
                {errors.name}
              </p>
            )}
          </Field>
          <Field htmlFor={id('phone')} label="Phone (required)" required>
            <TextInput
              id={id('phone')}
              name="phone"
              type="tel"
              autoComplete="tel"
              required
              aria-required
              aria-invalid={errors.phone !== undefined}
              aria-describedby={errors.phone !== undefined ? id('phone-error') : undefined}
            />
            {errors.phone !== undefined && (
              <p id={id('phone-error')} className="mt-1.5 text-caption font-medium text-error">
                {errors.phone}
              </p>
            )}
          </Field>
          <Field htmlFor={id('email')} label="Email">
            <TextInput
              id={id('email')}
              name="email"
              type="email"
              autoComplete="email"
              aria-invalid={errors.email !== undefined}
              aria-describedby={errors.email !== undefined ? id('email-error') : undefined}
            />
            {errors.email !== undefined && (
              <p id={id('email-error')} className="mt-1.5 text-caption font-medium text-error">
                {errors.email}
              </p>
            )}
          </Field>
          {/*
            TODO(legal): the "Text" option needs TCPA consent copy from the
            business (PENDING-019). It is deliberately not drafted here.
          */}
          <RadioGroup
            name="contactMethod"
            idPrefix={id('contact-method')}
            legend="Preferred method of contact (required)"
            options={CONTACT_METHOD_OPTIONS}
            required
          />
          <Field
            htmlFor={id('message')}
            label={unsure ? 'What is happening?' : 'Anything we should know?'}
            className="sm:col-span-2"
          >
            <Textarea id={id('message')} name="message" rows={3} />
          </Field>
          {/* Honeypot, hidden from people and assistive technology. */}
          <div className="hidden" aria-hidden="true">
            <input type="text" name="website" tabIndex={-1} autoComplete="off" />
          </div>
          {/* Submit centred; Back sits below it. */}
          <div className="flex flex-col items-center gap-3 sm:col-span-2">
            <Button type="submit" disabled={pending}>
              {pending ? 'Sending...' : 'Request Service'}
            </Button>
            <button
              type="button"
              className="text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground"
              onClick={() => go(2)}
            >
              Back
            </button>
          </div>
        </div>

        {notice !== undefined && (
          <p role="alert" className="mt-4 text-sm font-medium text-foreground">
            {notice}
          </p>
        )}
      </form>
    </div>
  )
}
