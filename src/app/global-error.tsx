"use client";

// `unstable_retry` is the Next.js 16.2+ replacement for the old `reset` prop on
// global-error boundaries. The "unstable_" prefix is a Next.js naming convention
// for recently-introduced APIs — it is intentional and documented in the framework.
// See: https://nextjs.org/docs/app/api-reference/file-conventions/error#global-error
export default function GlobalError({
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  return (
    <html lang="en">
      <body
        style={{
          background: "#0c0d11",
          color: "#e2e8f0",
          fontFamily: "system-ui, sans-serif",
          minHeight: "100vh",
          display: "grid",
          placeItems: "center",
          padding: "2rem",
          textAlign: "center",
        }}
      >
        <div>
          <h1 style={{ marginBottom: "1rem" }}>Something went wrong</h1>
          <p style={{ color: "#8b96b4", marginBottom: "2rem" }}>
            An unexpected error occurred. Please try again.
          </p>
          <button
            type="button"
            onClick={unstable_retry}
            style={{
              padding: "0.75rem 2rem",
              background: "#818cf8",
              color: "#fff",
              border: "none",
              borderRadius: 8,
              cursor: "pointer",
              fontSize: "1rem",
            }}
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}

