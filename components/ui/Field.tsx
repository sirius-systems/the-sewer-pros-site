import type {
  InputHTMLAttributes,
  ReactNode,
  SelectHTMLAttributes,
  TextareaHTMLAttributes,
} from 'react'
import { cn } from '@/lib/utils/cn'

/**
 * Form field primitives.
 *
 * NEW in this file: the project had no form UI before `LeadFormSection`
 * opened (PENDING-008). `/contact/` is still an unbuilt gate and should
 * adopt these rather than growing a second set.
 *
 * Governed by docs/18-design-system.md §36 (forms: concise, clear,
 * mobile friendly, accessible) and §64 (semantic HTML, real labels,
 * visible focus, meaningful error states).
 *
 * ===========================================================================
 * WHY EVERY CONTROL IS WRAPPED IN `Field`
 * ===========================================================================
 * A placeholder is not a label. 18 §64 requires a real `<label for>` so
 * the control has an accessible name whether or not it holds a value,
 * and so tapping the text focuses the input. Every control here takes
 * a required `id` for exactly that reason.
 *
 * Optional fields are marked "(optional)" in the label text rather than
 * required ones being starred. A red asterisk communicates nothing to a
 * screen reader and nothing to anyone who cannot distinguish the
 * colour, and most fields here are required, so marking the exception
 * is both shorter and unambiguous.
 *
 * Text, select and textarea controls take `aria-required` alongside the
 * native attribute. Radios take only the native `required`:
 * `aria-required` is not supported on the implicit `radio` role, and
 * the group's own `fieldset`/`legend` carries its name.
 */

const CONTROL = cn(
  'block w-full rounded-md border border-border bg-background px-3 py-2',
  'text-sm text-foreground placeholder:text-muted-foreground',
  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-secondary',
)

export interface FieldProps {
  /** Must match the control's `id`. */
  htmlFor: string
  label: string
  required?: boolean
  /** Shown under the control. Use for format hints, never for claims. */
  hint?: string
  className?: string
  children: ReactNode
}

export function Field({
  htmlFor,
  label,
  required = false,
  hint,
  className,
  children,
}: FieldProps) {
  return (
    <div className={className}>
      <label
        htmlFor={htmlFor}
        className="block text-sm font-medium text-foreground"
      >
        {label}
        {!required && (
          <span className="ml-1 font-normal text-muted-foreground">
            (optional)
          </span>
        )}
      </label>
      <div className="mt-1.5">{children}</div>
      {hint !== undefined && (
        <p className="mt-1.5 text-caption text-muted-foreground">{hint}</p>
      )}
    </div>
  )
}

export type TextInputProps = InputHTMLAttributes<HTMLInputElement> & {
  id: string
}

export function TextInput({ className, ...props }: TextInputProps) {
  return <input {...props} className={cn(CONTROL, className)} />
}

export type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  id: string
}

export function Textarea({ className, rows = 4, ...props }: TextareaProps) {
  return <textarea {...props} rows={rows} className={cn(CONTROL, className)} />
}

export interface SelectOption {
  value: string
  label: string
}

export type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  id: string
  options: readonly SelectOption[]
  /**
   * First entry, rendered disabled and selected by default.
   *
   * Present so a select can start genuinely unanswered. Defaulting to
   * the first real option silently answers a required question on the
   * visitor's behalf.
   */
  placeholder: string
}

export function Select({
  className,
  options,
  placeholder,
  ...props
}: SelectProps) {
  return (
    <select {...props} defaultValue="" className={cn(CONTROL, className)}>
      <option value="" disabled>
        {placeholder}
      </option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  )
}

export interface RadioGroupProps {
  name: string
  /**
   * Prefix for the generated option ids. Defaults to `name`.
   *
   * ⚠ Set this when a page renders the same group twice. The ids below
   * are derived, so two groups sharing a `name` would emit duplicate
   * ids and every `<label>` would point at the first group's radio —
   * clicking the second group's label would silently operate the
   * first. `name` itself must NOT be varied to dodge that: radio
   * grouping and the submitted field name both key off it.
   */
  idPrefix?: string
  legend: string
  options: readonly SelectOption[]
  required?: boolean
  /** Rendered inside the fieldset, under the options. */
  note?: ReactNode
  className?: string
}

/**
 * A radio group as a `fieldset` with a `legend`.
 *
 * 18 §64: the group needs its own accessible name, which a bare label
 * beside the first radio does not provide. `legend` supplies it.
 */
export function RadioGroup({
  name,
  idPrefix,
  legend,
  options,
  required = false,
  note,
  className,
}: RadioGroupProps) {
  return (
    <fieldset className={className}>
      <legend className="text-sm font-medium text-foreground">{legend}</legend>
      <div className="mt-1.5 flex flex-wrap gap-x-6 gap-y-2">
        {options.map((option) => {
          const id = `${idPrefix ?? name}-${option.value}`
          return (
            <div key={option.value} className="flex items-center gap-2">
              <input
                type="radio"
                id={id}
                name={name}
                value={option.value}
                required={required}
                className="h-4 w-4 border-border text-accent-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-secondary"
              />
              <label htmlFor={id} className="text-sm text-foreground">
                {option.label}
              </label>
            </div>
          )
        })}
      </div>
      {note}
    </fieldset>
  )
}
