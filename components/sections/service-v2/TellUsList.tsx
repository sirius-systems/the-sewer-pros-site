/**
 * "What to tell us": a short titled tick list for the final request
 * block, which sits on the brand surface over a black scrim. The ticks
 * are drawn inline and are `aria-hidden`; the list text carries the
 * meaning.
 */
export function TellUsList({
  title,
  items,
}: {
  title: string
  items: readonly string[]
}) {
  return (
    <div className="mt-6 max-w-[var(--container-reading)]">
      <h3 className="text-h4 font-semibold">{title}</h3>
      <ul className="mt-3 space-y-2">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-body-sm">
            <svg
              aria-hidden="true"
              viewBox="0 0 20 20"
              className="mt-1 size-4 shrink-0"
            >
              <path
                d="m4.5 10.5 3.5 3.5 7.5-8"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
