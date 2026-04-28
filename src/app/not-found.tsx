import Link from "next/link";
import type { Metadata } from "next";
import { SITE_NAME, MAIN_NAV_ZONES } from "@/lib/site-config";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "404 — Not Found",
};

const QUICK_LINKS = MAIN_NAV_ZONES.filter((z) => z.path !== "/").slice(0, 4);

export default function NotFound() {
  return (
    <div
      style={{
        maxWidth: 640,
        margin: "6rem auto",
        padding: "2rem 1.5rem",
        textAlign: "center",
      }}
    >
      {/* Code */}
      <p
        style={{
          fontSize: "clamp(5rem, 15vw, 8rem)",
          fontWeight: 900,
          letterSpacing: "-0.05em",
          lineHeight: 1,
          marginBottom: "0.5rem",
          background: "linear-gradient(135deg, #2a2a3d 0%, #6c63ff 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        404
      </p>

      <h1 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: "0.75rem" }}>
        This zone doesn&apos;t exist
      </h1>
      <p style={{ color: "var(--text-secondary)", marginBottom: "2.5rem", lineHeight: 1.6, maxWidth: 440, margin: "0 auto 2.5rem" }}>
        The page you are looking for has moved, doesn&apos;t exist, or is still under construction
        on {SITE_NAME}.
      </p>

      {/* Primary CTA */}
      <Link
        href="/"
        style={{
          display: "inline-block",
          padding: "0.75rem 2rem",
          background: "var(--accent)",
          color: "#fff",
          borderRadius: 8,
          fontWeight: 700,
          textDecoration: "none",
          fontSize: "0.9rem",
          marginBottom: "2.5rem",
        }}
      >
        Back to The Gateway
      </Link>

      {/* Quick links */}
      <div>
        <p style={{ fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-muted)", marginBottom: "1rem" }}>
          Or try one of these
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0.5rem" }}>
          {QUICK_LINKS.map((zone) => (
            <Link
              key={zone.path}
              href={zone.path}
              style={{
                padding: "0.45rem 1rem",
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                borderRadius: 8,
                fontSize: "0.85rem",
                color: "var(--text-secondary)",
                textDecoration: "none",
              }}
            >
              {zone.creativeName}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
