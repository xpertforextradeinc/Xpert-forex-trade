export default function Loading() {
  // Simple, accessible skeleton for the blog list/detail route.
  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <div className="mb-8 h-8 w-48 animate-pulse rounded bg-gray-200 dark:bg-gray-800" aria-hidden />
      <div className="grid gap-6 sm:grid-cols-2">
        {[...Array(6)].map((_, i) => (
          <article
            key={i}
            className="rounded-lg border border-gray-200 p-4 dark:border-gray-800"
            aria-busy="true"
            aria-live="polite"
          >
            <div className="mb-4 h-40 w-full animate-pulse rounded bg-gray-200 dark:bg-gray-800" aria-hidden />
            <div className="mb-2 h-6 w-3/4 animate-pulse rounded bg-gray-200 dark:bg-gray-800" aria-hidden />
            <div className="mb-1 h-4 w-1/2 animate-pulse rounded bg-gray-200 dark:bg-gray-800" aria-hidden />
            <div className="h-4 w-2/3 animate-pulse rounded bg-gray-200 dark:bg-gray-800" aria-hidden />
          </article>
        ))}
      </div>
    </div>
  )
}
