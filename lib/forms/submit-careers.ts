/**
 * Careers application adapter.
 *
 * POSTs a multipart form to `/api/careers`, a Cloudflare Pages Function
 * (`functions/api/careers.ts`, logic in `lib/forms/careers-server.ts`). The reply
 * is only ok, ok with `partial` (saved, but the resume could not be attached) or
 * not ok. `submitCareers` never reports success for something the server did not
 * accept. Application details go only to this site's own function, never to analytics.
 */

export const CAREERS_ENDPOINT = '/api/careers'

/** Resume rules shown next to the file input and checked again on the server. */
export const RESUME_ACCEPT = '.pdf,.docx,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document'
export const RESUME_MAX_BYTES = 5 * 1024 * 1024
export const RESUME_HELP = 'PDF or DOCX, up to 5 MB'

/** Checks the chosen file in the browser. Returns an error message, or undefined when the file is fine. */
export function resumeProblem(file: File): string | undefined {
  const lower = file.name.toLowerCase()
  if (!lower.endsWith('.pdf') && !lower.endsWith('.docx')) return 'Choose a PDF or DOCX file.'
  if (file.size === 0) return 'That file is empty. Choose another file.'
  if (file.size > RESUME_MAX_BYTES) return 'That file is larger than 5 MB. Choose a smaller file.'
  return undefined
}

export type SubmitCareersResult =
  | { ok: true; partial: boolean }
  | { ok: false; reason: 'rejected' | 'network' | 'retry' }

export async function submitCareers(form: FormData): Promise<SubmitCareersResult> {
  try {
    const response = await fetch(CAREERS_ENDPOINT, { method: 'POST', body: form })
    const body: unknown = await response.json().catch(() => undefined)
    const fields = typeof body === 'object' && body !== null ? (body as { ok?: unknown; partial?: unknown; retry?: unknown }) : {}
    if (response.ok && fields.ok === true) return { ok: true, partial: fields.partial === true }
    if (response.status === 429 && fields.retry === true) return { ok: false, reason: 'retry' }
    return { ok: false, reason: 'rejected' }
  } catch {
    return { ok: false, reason: 'network' }
  }
}
