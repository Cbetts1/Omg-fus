import type { Metadata } from "next";
import { SITE_NAME, SITE_TAGLINE, ZONES } from "@/lib/site-config";
import { ZoneMap } from "@/components/ZoneMap";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: `${SITE_NAME} — ${SITE_TAGLINE}`,
  description:
    "The Gateway to Betts Foundations. AI automation, security research, operator tooling, and digital products.",
};

const homeZone = ZONES.find((z) => z.path === "/")!;

export default function HomePage() {
  return (
    <div style={{ maxWidth: 1280, margin: "0 auto", padding: "4rem 1.5rem 6rem" }}>
      {/* Hero */}
      <header style={{ textAlign: "center", marginBottom: "4rem" }}>
        <p
          style={{
            fontSize: "0.8rem",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.12em",
            color: "var(--text-muted)",
            marginBottom: "1rem",
          }}
        >
          {homeZone.subtitle}
        </p>
        <h1
          style={{
            fontSize: "clamp(2.5rem, 7vw, 5rem)",
            fontWeight: 900,
            letterSpacing: "-0.04em",
            lineHeight: 1,
            marginBottom: "1.5rem",
            background: "linear-gradient(135deg, #f0f0ff 0%, #6c63ff 60%, #00d4ff 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {homeZone.creativeName}
        </h1>
        <p
          style={{
            fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
            color: "var(--text-secondary)",
            maxWidth: 560,
            margin: "0 auto 2rem",
            lineHeight: 1.6,
          }}
        >
          {SITE_TAGLINE}
        </p>
        <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", maxWidth: 480, margin: "0 auto" }}>
          Select a zone on the map below to explore what{" "}
          <strong style={{ color: "var(--text-primary)" }}>{SITE_NAME}</strong>{" "}
          has to offer — AI tools, security research, digital products, and more.
        </p>
      </header>

      {/* Zone Map / List */}
      <section aria-label="Zone navigation map">
        <ZoneMap />
      </section>
    </div>
  );
}
