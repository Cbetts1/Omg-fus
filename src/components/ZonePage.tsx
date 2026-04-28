import { ZoneConfig } from "@/lib/site-config";
import type { ReactNode } from "react";

interface ZonePageProps {
  zone: ZoneConfig;
  children?: ReactNode;
}

/** Shared wrapper for all zone pages. Renders the dual creative/professional title header. */
export function ZonePage({ zone, children }: ZonePageProps) {
  return (
    <div style={{ maxWidth: 1280, margin: "0 auto", padding: "3rem 1.5rem" }}>
      {/* Zone header */}
      <header style={{ marginBottom: "3rem" }}>
        <p
          style={{
            fontSize: "0.8rem",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            color: "var(--text-muted)",
            marginBottom: "0.5rem",
          }}
        >
          {zone.subtitle}
        </p>
        <h1
          style={{
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            color: "var(--text-primary)",
            marginBottom: "1rem",
          }}
        >
          {zone.creativeName}
        </h1>
        <p
          style={{
            fontSize: "1.125rem",
            color: "var(--text-secondary)",
            maxWidth: 640,
            lineHeight: 1.6,
          }}
        >
          {zone.description}
        </p>
      </header>

      {children}
    </div>
  );
}
