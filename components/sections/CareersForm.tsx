'use client'

import { useEffect, useRef, useState, type FormEvent, type ReactNode } from 'react'
import { useRouter } from 'next/navigation'
import { Field, TextInput, Textarea, Select, RadioGroup, Button, type SelectOption } from '@/components/ui'
import { CAREERS_AVAILABILITY_DAYS, CAREERS_AVAILABILITY_TIMES, CAREERS_EMPLOYMENT_TYPES } from '@/lib/forms/careers-options'
import { marketList, marketOperatingDetail } from '@/data/markets/markets'
import { stampFirstInteraction } from '@/lib/forms/submit-lead'
import { RESUME_ACCEPT, RESUME_HELP, resumeProblem, submitCareers } from '@/lib/forms/submit-careers'
import { useTurnstile } from '@/lib/forms/turnstile'
import type { MarketId } from '@/types'

/**
 * Careers application form: `/careers/`.
 *
 * Lean on purpose. No street address, date of birth, SSN, demographic questions or
 * supervisor details are collected. The market is required and prefilled from `?market=`
 * (a market block's Apply link), then from the market the visitor chose on the contact
 * form earlier. Never from IP or geolocation.
 *
 * ⚠ SUBMISSION IS HONEST. It posts to `/api/careers` and shows the thank-you page only
 * after the function accepted the application. If the application was saved but the resume
 * could not be attached, it says so and asks the visitor to call; it never says the resume
 * was received in that case.
 *
 * ⚠ ANALYTICS SEND IDS ONLY: the form type and the market id. Never a name, phone, email,
 * message, file name or file content.
 */

const FORM_TYPE = 'careers' as const
const MARKET_STORAGE_KEY = 'sp-contact-market'
const RETRY_NOTICE = 'That was quick, please press Send again.'
const CHECK_PENDING_NOTICE = 'One moment, please press Send again.'

const MARKET_OPTIONS: readonly SelectOption[] = marketList.map((m) => ({ value: m.id, label: m.name }))
const CONTACT_METHOD_OPTIONS: readonly SelectOption[] = [
  { value: 'call', label: 'Call' },
  { value: 'email', label: 'Email' },
]

/** A group of optional checkboxes sharing one name; each ticked box is sent as its own entry. */
function CheckboxGroup({ name, idPrefix, legend, options }: { name: string; idPrefix: string; legend: string; options: readonly string[] }) {
  return (
    <fieldset>
      <legend className="text-sm font-medium text-foreground">{legend}</legend>
      <div className="mt-1.5 flex flex-wrap gap-x-6 gap-y-2">
        {options.map((option) => {
          const boxId = `${idPrefix}-${option.replace(/[^A-Za-z]/g, '').toLowerCase()}`
          return (
            <div key={option} className="flex min-h-6 items-center gap-2">
              <input
                type="checkbox"
                id={boxId}
                name={name}
                value={option}
                className="h-4 w-4 rounded-sm border-border text-accent-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-secondary"
              />
              <label htmlFor={boxId} className="text-sm text-foreground">
                {option}
              </label>
            </div>
          )
        })}
      </div>
    </fieldset>
  )
}

type FieldName = 'market' | 'fullName' | 'phone' | 'email' | 'contactMethod' | 'resume'
type Errors = Partial<Record<FieldName, string>>

function isMarketId(value: string | null): value is MarketId {
  return value !== null && marketList.some((m) => m.id === value)
}

function FieldError({ id, message }: { id: string; message: string | undefined }): ReactNode {
  if (message === undefined) return null
  return (
    <p id={id} role="alert" className="mt-1.5 text-caption font-medium text-error">
      {message}
    </p>
  )
}

export function CareersForm({ idPrefix = 'careers' }: { idPrefix?: string }) {
  const router = useRouter()
  const [market, setMarket] = useState<MarketId | ''>('')
  const [errors, setErrors] = useState<Errors>({})
  const [started, setStarted] = useState(false)
  const [pending, setPending] = useState(false)
  const [notice, setNotice] = useState<string | undefined>(undefined)
  const [partial, setPartial] = useState(false)
  const openedAt = useRef(0)
  const { container: turnstileRef, start: startTurnstile, read: readTurnstile, reset: resetTurnstile } = useTurnstile()
  const id = (name: string) => `${idPrefix}-${name}`

  function markInteraction() {
    stampFirstInteraction(openedAt)
    startTurnstile()
  }

  // Prefill from `?market=`, then from an earlier manual choice. One-time client prefill after
  // hydration: reading the URL during render would mismatch the statically exported HTML.
  useEffect(() => {
    const fromUrl = new URLSearchParams(window.location.search).get('market')
    let stored: string | null = null
    try {
      stored = window.localStorage.getItem(MARKET_STORAGE_KEY)
    } catch {
      stored = null
    }
    /* eslint-disable react-hooks/set-state-in-effect */
    if (isMarketId(fromUrl)) setMarket(fromUrl)
    else if (isMarketId(stored)) setMarket(stored)
    /* eslint-enable react-hooks/set-state-in-effect */
  }, [])

  function chooseMarket(next: MarketId) {
    setMarket(next)
    setErrors((e) => ({ ...e, market: undefined }))
    try {
      window.localStorage.setItem(MARKET_STORAGE_KEY, next)
    } catch {
      // Storage can be unavailable; the choice still applies to this visit.
    }
    void import('@/lib/analytics').then((m) => m.track('market_select', { market_id: next, form_type: FORM_TYPE }))
  }

  function handleFirstInput() {
    if (started) return
    setStarted(true)
    void import('@/lib/analytics').then((m) => m.trackFormStart(FORM_TYPE))
  }

  function failedNotice() {
    const phone = market === '' ? undefined : marketOperatingDetail[market]?.phone
    return `We could not send your application. Please try again, or call${phone === undefined ? ' the number for your area' : ` ${phone}`}.`
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setNotice(undefined)
    const form = event.currentTarget
    const data = new FormData(form)
    const value = (key: string) => String(data.get(key) ?? '').trim()

    // Honeypot: a real visitor never sees or fills this field. Same notice as a failed send, nothing sent.
    if (value('sp_ref') !== '') {
      setNotice(failedNotice())
      return
    }

    const next: Errors = {}
    if (market === '') next.market = 'Choose the area you are applying for.'
    if (value('fullName') === '') next.fullName = 'Enter your full name.'
    if (value('phone').replace(/\D/g, '').length < 10) next.phone = 'Enter a phone number with area code.'
    if (!/^\S+@\S+\.\S+$/.test(value('email'))) next.email = 'Enter a valid email address.'
    if (value('contactMethod') === '') next.contactMethod = 'Choose how we should reach you.'
    const file = data.get('resume')
    const chosen = file instanceof File && (file.size > 0 || file.name !== '') ? file : undefined
    if (chosen !== undefined) {
      const problem = resumeProblem(chosen)
      if (problem !== undefined) next.resume = problem
    }

    setErrors(next)
    if (Object.keys(next).length > 0) {
      void import('@/lib/analytics').then((m) => m.trackFormError(FORM_TYPE, market === '' ? {} : { market_id: market }))
      const first = Object.keys(next)[0]
      document.getElementById(id(first === 'contactMethod' ? 'contactMethod-call' : first))?.focus()
      return
    }

    markInteraction()
    const check = readTurnstile()
    if (check.token === '') {
      setNotice(check.failed ? failedNotice() : CHECK_PENDING_NOTICE)
      return
    }

    const body = new FormData()
    body.append('marketId', market)
    for (const key of ['fullName', 'phone', 'email', 'contactMethod', 'skills', 'message']) {
      body.append(key, value(key))
    }
    for (const key of ['employmentType', 'availabilityDays', 'availabilityTimes']) {
      for (const entry of data.getAll(key)) body.append(key, String(entry))
    }
    if (chosen !== undefined) body.append('resume', chosen)
    body.append('sourcePath', window.location.pathname)
    body.append('spRef', value('sp_ref'))
    body.append('turnstileToken', check.token)
    body.append('formOpenedAt', String(openedAt.current))

    setPending(true)
    const result = await submitCareers(body)
    if (!(!result.ok && result.reason === 'retry')) resetTurnstile()
    setPending(false)

    if (result.ok) {
      void import('@/lib/analytics').then((m) => m.trackFormSubmitted(FORM_TYPE, { market_id: market as MarketId }))
      if (result.partial) {
        // Saved, but the resume was not attached. Stay on the page and say exactly that.
        setPartial(true)
        return
      }
      router.push(`/careers/thank-you/?market=${market}`)
      return
    }
    setNotice(result.reason === 'retry' ? RETRY_NOTICE : failedNotice())
  }

  const marketDetail = market === '' ? undefined : marketOperatingDetail[market]

  if (partial) {
    return (
      <p role="status" className="text-body font-medium text-foreground">
        We received your application, but we could not attach your resume. Please call{' '}
        {marketDetail?.phone ?? 'the number for your area'} and we will take it from there.
      </p>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      onInput={() => {
        markInteraction()
        handleFirstInput()
      }}
      onPointerDownCapture={markInteraction}
      onKeyDownCapture={markInteraction}
      noValidate
      aria-labelledby="apply-heading"
      className="grid gap-x-6 gap-y-5 sm:grid-cols-2"
    >
      {/* Honeypot. Off-screen (not display:none, which some bots skip), hidden from assistive tech, and
          given a neutral name so browsers and password managers do not autofill it. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor={id('sp-ref')}>Reference code</label>
        <input
          id={id('sp-ref')}
          name="sp_ref"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          data-lpignore="true"
          data-1p-ignore="true"
        />
      </div>

      <Field htmlFor={id('market')} label="Market you are applying for" required className="sm:col-span-2">
        <Select
          id={id('market')}
          name="marketId"
          options={MARKET_OPTIONS}
          placeholder="Select an area"
          value={market}
          onChange={(e) => chooseMarket(e.target.value as MarketId)}
          required
          aria-required
          aria-invalid={errors.market !== undefined}
          aria-describedby={errors.market ? id('market-error') : undefined}
        />
        <FieldError id={id('market-error')} message={errors.market} />
      </Field>

      <Field htmlFor={id('fullName')} label="Full name" required>
        <TextInput
          id={id('fullName')}
          name="fullName"
          type="text"
          autoComplete="name"
          required
          aria-required
          aria-invalid={errors.fullName !== undefined}
          aria-describedby={errors.fullName ? id('fullName-error') : undefined}
        />
        <FieldError id={id('fullName-error')} message={errors.fullName} />
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

      <Field htmlFor={id('email')} label="Email" required>
        <TextInput
          id={id('email')}
          name="email"
          type="email"
          autoComplete="email"
          required
          aria-required
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

      <div className="sm:col-span-2">
        <CheckboxGroup name="employmentType" idPrefix={id('employmentType')} legend="Type of employment desired" options={CAREERS_EMPLOYMENT_TYPES} />
      </div>

      <div className="sm:col-span-2">
        <CheckboxGroup name="availabilityDays" idPrefix={id('availabilityDays')} legend="Available days" options={CAREERS_AVAILABILITY_DAYS} />
      </div>

      <div className="sm:col-span-2">
        <CheckboxGroup name="availabilityTimes" idPrefix={id('availabilityTimes')} legend="Available times" options={CAREERS_AVAILABILITY_TIMES} />
      </div>

      <Field htmlFor={id('skills')} label="Other skills or certifications" className="sm:col-span-2">
        <Textarea id={id('skills')} name="skills" maxLength={2000} />
      </Field>

      <Field htmlFor={id('message')} label="Anything you would like us to know" className="sm:col-span-2">
        <Textarea id={id('message')} name="message" maxLength={2000} />
      </Field>

      <Field htmlFor={id('resume')} label="Resume" hint={RESUME_HELP} className="sm:col-span-2">
        <TextInput
          id={id('resume')}
          name="resume"
          type="file"
          accept={RESUME_ACCEPT}
          aria-invalid={errors.resume !== undefined}
          aria-describedby={errors.resume ? id('resume-error') : undefined}
        />
        <FieldError id={id('resume-error')} message={errors.resume} />
      </Field>

      {marketDetail !== undefined && (
        <p className="text-caption text-muted-foreground sm:col-span-2">
          Prefer to talk first? Call{' '}
          <a href={`tel:${marketDetail.phoneE164}`} className="font-medium text-accent-secondary underline underline-offset-4">
            {marketDetail.phone}
          </a>
          .
        </p>
      )}

      <div ref={turnstileRef} className="sm:col-span-2" />

      <div className="flex flex-col items-center gap-3 sm:col-span-2">
        <Button type="submit" pending={pending} pendingLabel="Sending…">
          Send Application
        </Button>
        {notice !== undefined && (
          <p role="status" className="text-center text-sm font-medium text-foreground">
            {notice}
          </p>
        )}
      </div>
    </form>
  )
}
