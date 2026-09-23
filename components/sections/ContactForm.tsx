'use client'

import { useEffect, useState, type FormEvent, type ReactNode } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import {
  Field,
  TextInput,
  Textarea,
  Select,
  RadioGroup,
  Button,
  type SelectOption,
} from '@/components/ui'
import { marketList, marketOperatingDetail } from '@/data/markets/markets'
import { submitLead } from '@/lib/forms/submit-lead'
import type { MarketId, ServiceId } from '@/types'

/**
 * City-aware, conditional contact form.
 *
 * Extends the field set of `LeadFormSection` (which stays the compact
 * closing-CTA form) with property ZIP, email, appointment window, and
 * follow-up questions that appear only after an issue is chosen
 * (progressive disclosure, per the contact brief).
 *
 * ⚠ SUBMISSION IS HONEST. No endpoint exists yet (PENDING-018), so
 * `submitLead()` reports `not-configured` and this shows a plain "call
 * instead" message with the market's own number. It never claims a
 * request was sent that nothing received (CLAUDE.md §24), and it never
 * fires the conversion event on anything but a real success (19 §15).
 *
 * ⚠ TODO(legal): the "Text" option needs TCPA consent copy from the
 * business (PENDING-019). It is deliberately not drafted here.
 *
 * ⚠ ANALYTICS SEND IDS ONLY. Market and service ids and a ZIP-present
 * boolean, never names, phones, emails, ZIP values, or messages (19 §17).
 */

const FORM_TYPE = 'contact_request' as const
const MARKET_STORAGE_KEY = 'sp-contact-market'

type IssueValue =
  | 'sewer-backup'
  | 'slow-drains'
  | 'svc-sewer-camera-inspection'
  | 'prepurchase'
  | 'svc-hydro-jetting'
  | 'svc-sewer-cleaning'
  | 'svc-sewer-line-locating'
  | 'commercial'
  | 'agent-inspector'
  | 'other'

interface Issue {
  value: IssueValue
  label: string
  /** Canonical internal page for a "Learn more" link, where one fits. */
  learn?: { href: string; label: string }
  /** Registry id sent to analytics, where the issue is a real service. */
  serviceId?: ServiceId
}

const ISSUES: readonly Issue[] = [
  {
    value: 'sewer-backup',
    label: 'Sewer backup or recurring blockage',
    learn: {
      href: '/services/recurring-sewer-backup-diagnosis/',
      label: 'Recurring sewer backup diagnosis',
    },
    serviceId: 'svc-recurring-sewer-backup-diagnosis',
  },
  {
    value: 'slow-drains',
    label: 'Slow drains',
    learn: { href: '/services/drain-cleaning/', label: 'Drain cleaning' },
    serviceId: 'svc-drain-cleaning',
  },
  {
    value: 'svc-sewer-camera-inspection',
    label: 'Sewer camera inspection',
    learn: {
      href: '/services/sewer-camera-inspection/',
      label: 'Sewer camera inspection',
    },
    serviceId: 'svc-sewer-camera-inspection',
  },
  {
    value: 'prepurchase',
    label: 'Home-buyer sewer scope',
    learn: {
      href: '/services/pre-purchase-sewer-inspection/',
      label: 'Pre-purchase sewer inspection',
    },
    serviceId: 'svc-pre-purchase-sewer-inspection',
  },
  {
    value: 'svc-hydro-jetting',
    label: 'Hydro jetting',
    learn: { href: '/services/hydro-jetting/', label: 'Hydro jetting' },
    serviceId: 'svc-hydro-jetting',
  },
  {
    value: 'svc-sewer-cleaning',
    label: 'Sewer cleaning',
    learn: { href: '/services/sewer-cleaning/', label: 'Sewer cleaning' },
    serviceId: 'svc-sewer-cleaning',
  },
  {
    value: 'svc-sewer-line-locating',
    label: 'Sewer line locating',
    learn: {
      href: '/services/sewer-line-locating/',
      label: 'Sewer line locating',
    },
    serviceId: 'svc-sewer-line-locating',
  },
  {
    value: 'commercial',
    label: 'Commercial or multi-unit property',
    learn: { href: '/commercial/', label: 'Commercial sewer and drain services' },
  },
  {
    value: 'agent-inspector',
    label: 'Agent or inspector coordination',
    learn: { href: '/for/real-estate-agents/', label: 'Sewer inspections for agents' },
  },
  { value: 'other', label: 'Something else' },
]

const ISSUE_OPTIONS: readonly SelectOption[] = ISSUES.map((i) => ({
  value: i.value,
  label: i.label,
}))

/** Shortcut pills shown above the form on the global page. */
const SHORTCUT_VALUES: readonly IssueValue[] = [
  'sewer-backup',
  'slow-drains',
  'svc-sewer-camera-inspection',
  'prepurchase',
  'svc-hydro-jetting',
  'svc-sewer-line-locating',
]

interface FollowUp {
  label: string
  kind: 'select' | 'text'
  options?: readonly SelectOption[]
}

const YES_NO: readonly SelectOption[] = [
  { value: 'yes', label: 'Yes' },
  { value: 'no', label: 'No' },
  { value: 'not-sure', label: 'Not sure' },
]

const FOLLOW_UPS: Partial<Record<IssueValue, FollowUp>> = {
  'svc-sewer-camera-inspection': {
    label: 'What is this inspection for?',
    kind: 'select',
    options: [
      { value: 'home-purchase', label: 'A home purchase' },
      { value: 'current-issue', label: 'A current home issue' },
      { value: 'routine', label: 'A routine evaluation' },
    ],
  },
  prepurchase: {
    label: 'Are you under contract or within an inspection period?',
    kind: 'select',
    options: YES_NO,
  },
  'sewer-backup': {
    label: 'Is there an active overflow or wastewater backup right now?',
    kind: 'select',
    options: YES_NO,
  },
  'slow-drains': {
    label: 'Which fixture or drain is affected?',
    kind: 'text',
  },
  'svc-hydro-jetting': {
    label: 'Is this a recurring blockage or a maintenance request?',
    kind: 'select',
    options: [
      { value: 'recurring-blockage', label: 'A recurring blockage' },
      { value: 'maintenance', label: 'A maintenance request' },
    ],
  },
  'svc-sewer-line-locating': {
    label: 'What is the locating for?',
    kind: 'select',
    options: [
      { value: 'excavation', label: 'Excavation' },
      { value: 'construction', label: 'Construction' },
      { value: 'repair-planning', label: 'Repair planning' },
      { value: 'other', label: 'Another project' },
    ],
  },
  commercial: {
    label: 'How many units or properties, and who is the best operational contact?',
    kind: 'text',
  },
  'agent-inspector': {
    label: 'What is the property timeline, and how would you like to coordinate?',
    kind: 'text',
  },
}

const MARKET_OPTIONS: readonly SelectOption[] = marketList.map((m) => ({
  value: m.id,
  label: m.name,
}))

const CONTACT_METHOD_OPTIONS: readonly SelectOption[] = [
  { value: 'call', label: 'Call' },
  { value: 'text', label: 'Text' },
  { value: 'email', label: 'Email' },
]

const WINDOW_OPTIONS: readonly SelectOption[] = [
  { value: 'earliest', label: 'Earliest available' },
  { value: 'weekday-morning', label: 'Weekday morning' },
  { value: 'weekday-afternoon', label: 'Weekday afternoon' },
  { value: 'flexible', label: 'Flexible' },
]

type FieldName =
  | 'market'
  | 'issue'
  | 'firstName'
  | 'phone'
  | 'zip'
  | 'email'
  | 'contactMethod'

type Errors = Partial<Record<FieldName, string>>

function isMarketId(value: string | null): value is MarketId {
  return value !== null && marketList.some((m) => m.id === value)
}

function isIssueValue(value: string | null): value is IssueValue {
  return value !== null && ISSUES.some((i) => i.value === value)
}

function FieldError({ id, message }: { id: string; message: string | undefined }): ReactNode {
  if (message === undefined) return null
  return (
    <p id={id} role="alert" className="mt-1.5 text-caption font-medium text-error">
      {message}
    </p>
  )
}

export interface ContactFormProps {
  idPrefix?: string
  /** Set by a page that already names its market. */
  defaultMarketId?: MarketId
  /** Renders the issue shortcut pills above the form (global page). */
  shortcuts?: boolean
  /** Analytics/context page path is derived from the URL at submit time. */
  title?: string
  intro?: string
}

export function ContactForm({
  idPrefix = 'contact',
  defaultMarketId,
  shortcuts = false,
  title = 'Request service or schedule an inspection',
  intro,
}: ContactFormProps) {
  const router = useRouter()
  const [market, setMarket] = useState<MarketId | ''>(defaultMarketId ?? '')
  const [issue, setIssue] = useState<IssueValue | ''>('')
  const [errors, setErrors] = useState<Errors>({})
  const [started, setStarted] = useState(false)
  const [pending, setPending] = useState(false)
  const [notice, setNotice] = useState<string | undefined>(undefined)

  // Prefill from `?market=` / `?service=`, then from a manual earlier
  // choice. Never from IP or geolocation (the brief forbids assuming a
  // visitor's city).
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const fromUrl = params.get('market')
    let stored: string | null = null
    try {
      stored = window.localStorage.getItem(MARKET_STORAGE_KEY)
    } catch {
      stored = null
    }
    // One-time client prefill after hydration; reading the URL and storage
    // during render would mismatch the statically exported HTML.
    /* eslint-disable react-hooks/set-state-in-effect */
    if (defaultMarketId === undefined) {
      if (isMarketId(fromUrl)) setMarket(fromUrl)
      else if (isMarketId(stored)) setMarket(stored)
    }
    const fromService = params.get('service')
    if (isIssueValue(fromService)) setIssue(fromService)
    /* eslint-enable react-hooks/set-state-in-effect */
  }, [defaultMarketId])

  function track(event: 'market_select' | 'service_select', next: Issue | MarketId) {
    void import('@/lib/analytics').then((m) => {
      if (event === 'market_select') {
        m.track('market_select', { market_id: next as MarketId, form_type: FORM_TYPE })
      } else {
        const serviceId = (next as Issue).serviceId
        m.track('service_select', {
          form_type: FORM_TYPE,
          ...(serviceId !== undefined && { service_id: serviceId }),
        })
      }
    })
  }

  function chooseMarket(next: MarketId) {
    setMarket(next)
    setErrors((e) => ({ ...e, market: undefined }))
    try {
      window.localStorage.setItem(MARKET_STORAGE_KEY, next)
    } catch {
      // Storage can be unavailable; the choice still applies to this visit.
    }
    track('market_select', next)
  }

  function chooseIssue(next: IssueValue) {
    setIssue(next)
    setErrors((e) => ({ ...e, issue: undefined }))
    const found = ISSUES.find((i) => i.value === next)
    if (found !== undefined) track('service_select', found)
  }

  function handleFirstInput() {
    if (started) return
    setStarted(true)
    void import('@/lib/analytics').then((m) => m.trackFormStart(FORM_TYPE))
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setNotice(undefined)
    const data = new FormData(event.currentTarget)
    const value = (key: string) => String(data.get(key) ?? '').trim()

    // Honeypot: a real visitor never sees or fills this field.
    if (value('website') !== '') return

    const next: Errors = {}
    if (market === '') next.market = 'Choose your location.'
    if (issue === '') next.issue = 'Choose what you need help with.'
    if (value('firstName') === '') next.firstName = 'Enter your first name.'
    if (value('phone').replace(/\D/g, '').length < 10) {
      next.phone = 'Enter a phone number with area code.'
    }
    if (!/^\d{5}(-\d{4})?$/.test(value('zip'))) next.zip = 'Enter a 5-digit ZIP code.'
    if (value('email') !== '' && !/^\S+@\S+\.\S+$/.test(value('email'))) {
      next.email = 'Enter a valid email address or leave it blank.'
    }
    if (value('contactMethod') === '') next.contactMethod = 'Choose how we should reach you.'

    setErrors(next)
    if (Object.keys(next).length > 0) {
      void import('@/lib/analytics').then((m) =>
        m.trackFormError(FORM_TYPE, market === '' ? {} : { market_id: market }),
      )
      const first = Object.keys(next)[0]
      document.getElementById(`${idPrefix}-${first}`)?.focus()
      return
    }

    setPending(true)
    const result = await submitLead({
      marketId: market,
      issue,
      followUp: value('followUp'),
      firstName: value('firstName'),
      phone: value('phone'),
      email: value('email'),
      zip: value('zip'),
      contactMethod: value('contactMethod'),
      appointmentWindow: value('appointmentWindow'),
      message: value('message'),
      sourcePath: window.location.pathname,
    })
    setPending(false)

    if (result.ok) {
      const found = ISSUES.find((i) => i.value === issue)
      void import('@/lib/analytics').then((m) =>
        m.trackFormSubmitted(FORM_TYPE, {
          market_id: market as MarketId,
          ...(found?.serviceId !== undefined && { service_id: found.serviceId }),
        }),
      )
      router.push(`/contact/thank-you/?market=${market}`)
      return
    }

    const phone = market === '' ? undefined : marketOperatingDetail[market]?.phone
    setNotice(
      result.reason === 'not-configured'
        ? `Online requests are not available yet. Please call${phone === undefined ? ' your local team' : ` ${phone}`} to schedule.`
        : `We could not send your request. Please try again, or call${phone === undefined ? ' your local team' : ` ${phone}`}.`,
    )
  }

  const selectedIssue = ISSUES.find((i) => i.value === issue)
  const followUp = issue === '' ? undefined : FOLLOW_UPS[issue]
  const marketDetail = market === '' ? undefined : marketOperatingDetail[market]
  const id = (name: string) => `${idPrefix}-${name}`

  return (
    <div>
      <h2 id={id('heading')} className="text-h3 font-semibold tracking-tight">
        {title}
      </h2>
      {intro !== undefined && (
        <p className="mt-2 text-body text-muted-foreground">{intro}</p>
      )}

      {shortcuts && (
        <div className="mt-5">
          <p className="text-sm font-medium text-foreground">Not sure where to start? Pick one:</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {SHORTCUT_VALUES.map((value) => {
              const found = ISSUES.find((i) => i.value === value)
              if (found === undefined) return null
              const active = issue === value
              return (
                <button
                  key={value}
                  type="button"
                  aria-pressed={active}
                  onClick={() => chooseIssue(value)}
                  className={
                    'inline-flex min-h-11 items-center rounded-md border px-4 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-secondary ' +
                    (active
                      ? 'border-accent-secondary bg-accent-secondary text-accent-secondary-foreground'
                      : 'border-border bg-surface text-foreground hover:bg-surface-muted')
                  }
                >
                  {found.label}
                </button>
              )
            })}
          </div>
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        onInput={handleFirstInput}
        noValidate
        aria-labelledby={id('heading')}
        className="mt-6 grid gap-x-6 gap-y-5 sm:grid-cols-2"
      >
        {/* Honeypot. Hidden from sighted users and assistive tech. */}
        <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
          <label htmlFor={id('website')}>Website</label>
          <input id={id('website')} name="website" type="text" tabIndex={-1} autoComplete="off" />
        </div>

        <fieldset className="sm:col-span-2">
          <legend className="text-sm font-medium text-foreground">Step 1: Choose a location</legend>
          <div className="mt-1.5 flex flex-wrap gap-2" role="radiogroup" aria-describedby={errors.market ? id('market-error') : undefined}>
            {MARKET_OPTIONS.map((option) => {
              const active = market === option.value
              return (
                <button
                  key={option.value}
                  id={option.value === MARKET_OPTIONS[0].value ? id('market') : undefined}
                  type="button"
                  role="radio"
                  aria-checked={active}
                  onClick={() => chooseMarket(option.value as MarketId)}
                  className={
                    'inline-flex min-h-11 items-center rounded-md border px-4 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-secondary ' +
                    (active
                      ? 'border-accent-secondary bg-accent-secondary text-accent-secondary-foreground'
                      : 'border-border bg-surface text-foreground hover:bg-surface-muted')
                  }
                >
                  {option.label}
                </button>
              )
            })}
          </div>
          <FieldError id={id('market-error')} message={errors.market} />
          {marketDetail !== undefined && (
            <p className="mt-2 text-caption text-muted-foreground">
              Prefer to talk it through? Call{' '}
              <a
                href={`tel:${marketDetail.phoneE164}`}
                className="font-medium text-accent-secondary underline underline-offset-4"
              >
                {marketDetail.phone}
              </a>
              . {marketDetail.hours}.
            </p>
          )}
        </fieldset>

        <Field htmlFor={id('issue')} label="Step 2: What do you need help with?" required className="sm:col-span-2">
          <Select
            id={id('issue')}
            name="issue"
            options={ISSUE_OPTIONS}
            placeholder="Select a service or problem"
            value={issue}
            onChange={(e) => chooseIssue(e.target.value as IssueValue)}
            required
            aria-required
            aria-invalid={errors.issue !== undefined}
            aria-describedby={errors.issue ? id('issue-error') : undefined}
          />
          <FieldError id={id('issue-error')} message={errors.issue} />
          {selectedIssue?.learn !== undefined && (
            <p className="mt-1.5 text-caption">
              <Link
                href={selectedIssue.learn.href}
                className="font-medium text-accent-secondary underline underline-offset-4"
              >
                Learn more: {selectedIssue.learn.label}
              </Link>
            </p>
          )}
        </Field>

        {followUp !== undefined && (
          <Field htmlFor={id('followUp')} label={followUp.label} className="sm:col-span-2">
            {followUp.kind === 'select' && followUp.options !== undefined ? (
              <Select
                key={issue}
                id={id('followUp')}
                name="followUp"
                options={followUp.options}
                placeholder="Select one"
              />
            ) : (
              <TextInput key={issue} id={id('followUp')} name="followUp" type="text" />
            )}
          </Field>
        )}

        <Field htmlFor={id('firstName')} label="First name" required>
          <TextInput
            id={id('firstName')}
            name="firstName"
            type="text"
            autoComplete="given-name"
            required
            aria-required
            aria-invalid={errors.firstName !== undefined}
            aria-describedby={errors.firstName ? id('firstName-error') : undefined}
          />
          <FieldError id={id('firstName-error')} message={errors.firstName} />
        </Field>

        <Field htmlFor={id('phone')} label="Phone" required>
          <TextInput
            id={id('phone')}
            name="phone"
            type="tel"
            autoComplete="tel"
            required
            aria-required
            aria-invalid={errors.phone !== undefined}
            aria-describedby={errors.phone ? id('phone-error') : undefined}
          />
          <FieldError id={id('phone-error')} message={errors.phone} />
        </Field>

        <Field htmlFor={id('zip')} label="Property ZIP code" required>
          <TextInput
            id={id('zip')}
            name="zip"
            type="text"
            inputMode="numeric"
            autoComplete="postal-code"
            required
            aria-required
            aria-invalid={errors.zip !== undefined}
            aria-describedby={errors.zip ? id('zip-error') : undefined}
          />
          <FieldError id={id('zip-error')} message={errors.zip} />
        </Field>

        <Field htmlFor={id('email')} label="Email">
          <TextInput
            id={id('email')}
            name="email"
            type="email"
            autoComplete="email"
            aria-invalid={errors.email !== undefined}
            aria-describedby={errors.email ? id('email-error') : undefined}
          />
          <FieldError id={id('email-error')} message={errors.email} />
        </Field>

        <div>
          <RadioGroup
            name="contactMethod"
            idPrefix={id('contactMethod')}
            legend="Preferred contact method"
            options={CONTACT_METHOD_OPTIONS}
            required
          />
          <FieldError id={id('contactMethod-error')} message={errors.contactMethod} />
        </div>

        <Field htmlFor={id('appointmentWindow')} label="Preferred appointment window">
          <Select
            id={id('appointmentWindow')}
            name="appointmentWindow"
            options={WINDOW_OPTIONS}
            placeholder="No preference"
          />
        </Field>

        <Field htmlFor={id('message')} label="What is happening?" className="sm:col-span-2">
          <Textarea id={id('message')} name="message" />
        </Field>

        <div className="flex flex-col items-center gap-3 sm:col-span-2">
          <Button type="submit" pending={pending} pendingLabel="Sending…">
            Submit Request
          </Button>
          {notice !== undefined && (
            <p role="status" className="text-center text-sm font-medium text-foreground">
              {notice}
            </p>
          )}
        </div>
      </form>
    </div>
  )
}
