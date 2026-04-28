import type { Metadata } from "next";
import { SITE_NAME, SITE_TAGLINE, ZONES, FOUNDER_NAME } from "@/lib/site-config";
import { ZoneMap } from "@/components/ZoneMap";
import Link from "next/link";

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
            margin: "0 auto 1rem",
            lineHeight: 1.6,
          }}
        >
          {SITE_TAGLINE}
        </p>
        <p
          style={{
            fontSize: "1.05rem",
            color: "var(--text-primary)",
            fontWeight: 600,
            maxWidth: 600,
            margin: "0 auto 1rem",
            lineHeight: 1.55,
          }}
        >
          The web was built for everyone. AI should be too.
        </p>
        <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", maxWidth: 480, margin: "0 auto 2rem" }}>
          Select a zone on the map below to explore what{" "}
          <strong style={{ color: "var(--text-primary)" }}>{SITE_NAME}</strong>{" "}
          has to offer — AI tools, security research, digital products, and more.
        </p>
        <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center", flexWrap: "wrap" }}>
          <Link
            href="/vision"
            style={{
              display: "inline-block",
              padding: "0.7rem 1.5rem",
              background: "var(--accent)",
              color: "#fff",
              borderRadius: 8,
              fontWeight: 600,
              fontSize: "0.9rem",
              textDecoration: "none",
            }}
          >
            Our Vision
          </Link>
          <Link
            href="/store"
            style={{
              display: "inline-block",
              padding: "0.7rem 1.5rem",
              background: "transparent",
              color: "var(--accent)",
              border: "1px solid rgba(108,99,255,0.4)",
              borderRadius: 8,
              fontWeight: 600,
              fontSize: "0.9rem",
              textDecoration: "none",
            }}
          >
            Browse StoreX
          </Link>
        </div>
      </header>

      {/* Zone Map / List */}
      <section aria-label="Zone navigation map" style={{ marginBottom: "5rem" }}>
        <ZoneMap />
      </section>

      {/* Mission strip */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "1.5rem",
          marginBottom: "5rem",
        }}
      >
        {[
          {
            icon: "⚡",
            title: "Operator-Grade Tools",
            body: "Built by someone who learned on a phone and a VPS — every tool is designed for real use under real conditions.",
          },
          {
            icon: "🌐",
            title: "Public AI Infrastructure",
            body: "Not a product, not a paywall. A commons — open infrastructure anyone can run, fork, and build on.",
          },
          {
            icon: "🔐",
            title: "Sovereign by Design",
            body: "Your intelligence system runs on your hardware, under your control. No vendor lock-in. No hidden logic.",
          },
          {
            icon: "📡",
            title: "Built to Scale",
            body: "From a single VPS to a global mesh of user-owned nodes. The architecture scales with your ambition.",
          },
        ].map(({ icon, title, body }) => (
          <div key={title} className="card" style={{ textAlign: "center" }}>
            <span style={{ fontSize: "1.75rem", display: "block", marginBottom: "0.75rem" }}>
              {icon}
            </span>
            <h2 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: "0.5rem" }}>{title}</h2>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem", lineHeight: 1.6 }}>
              {body}
            </p>
          </div>
        ))}
      </section>

      {/* Founder callout */}
      <section
        style={{
          background: "var(--bg-card)",
          border: "1px solid var(--border)",
          borderRadius: 16,
          padding: "2.5rem",
          display: "grid",
          gridTemplateColumns: "1fr auto",
          gap: "2rem",
          alignItems: "center",
        }}
        className="founder-callout"
      >
        <div>
          <p
            style={{
              fontSize: "0.75rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "var(--text-muted)",
              marginBottom: "0.4rem",
            }}
          >
            Built by
          </p>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: "0.6rem" }}>
            {FOUNDER_NAME}
          </h2>
          <p style={{ color: "var(--text-secondary)", lineHeight: 1.65, fontSize: "0.925rem", maxWidth: 560 }}>
            Founder &amp; Architect of VAGA/AIOS. Built from a phone, a terminal, and a self-managed VPS.
            Not a product. Not a company. A commitment to keeping AI open, sovereign, and free.
          </p>
        </div>
        <Link
          href="/founder"
          style={{
            display: "inline-block",
            padding: "0.7rem 1.5rem",
            background: "transparent",
            color: "var(--accent)",
            border: "1px solid rgba(108,99,255,0.4)",
            borderRadius: 8,
            fontWeight: 600,
            fontSize: "0.875rem",
            textDecoration: "none",
            whiteSpace: "nowrap",
          }}
        >
          Read Bio →
        </Link>
      </section>

      <style>{`
        @media (max-width: 600px) {
          .founder-callout {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}

