import { ZoneConfig } from "@/lib/site-config";
import type { ReactNode } from "react";

interface ZonePageProps {
  zone: ZoneConfig;
  children?: ReactNode;
}

/** Shared wrapper for all zone pages. Renders the dual creative/professional title header. */
export function ZonePage({ zone, children }: ZonePageProps) {
  return (
    <div style={{ maxWidth: 1280, margin: "0 auto", padding: "3rem 1.5rem 5rem" }}>
      {/* Zone header */}
      <header style={{ marginBottom: "3rem", maxWidth: 800 }}>
        <p
          style={{
            fontSize: "0.8rem",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.12em",
            color: "var(--text-muted)",
            marginBottom: "0.5rem",
          }}
        >
          {zone.subtitle}
        </p>
        <h1
          style={{
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 900,
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
            marginBottom: "1rem",
            background: "linear-gradient(135deg, #f0f0ff 0%, #6c63ff 65%, #00d4ff 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {zone.creativeName}
        </h1>
        <p
          style={{
            fontSize: "1.125rem",
            color: "var(--text-secondary)",
            maxWidth: 640,
            lineHeight: 1.65,
          }}
        >
          {zone.description}
        </p>
      </header>

      {children}
    </div>
  );
}
