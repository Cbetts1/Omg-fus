import type { Metadata } from "next";
import { SITE_NAME, SITE_TAGLINE, ZONES, FOUNDER_NAME } from "@/lib/site-config";
import { ZoneMap } from "@/components/ZoneMap";
import { AuraMascot } from "@/components/AuraMascot";
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
      {/* ── Hero ── */}
      <header style={{ textAlign: "center", marginBottom: "4rem", position: "relative" }}>
        {/* Decorative mascot background */}
        <div
          style={{
            position: "absolute",
            top: "-2rem",
            right: "5%",
            pointerEvents: "none",
            zIndex: 0,
          }}
        >
          <AuraMascot size={160} animate decorative />
        </div>

        <p
          style={{
            fontSize: "0.8rem",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.14em",
            color: "var(--text-muted)",
            marginBottom: "1.25rem",
            position: "relative",
            zIndex: 1,
          }}
        >
          {homeZone.subtitle}
        </p>

        {/* Mascot + title row */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1.5rem", marginBottom: "1.5rem", position: "relative", zIndex: 1, flexWrap: "wrap" }}>
          <AuraMascot size={80} animate />
          <h1
            style={{
              fontSize: "clamp(2.5rem, 7vw, 5rem)",
              fontWeight: 900,
              letterSpacing: "-0.04em",
              lineHeight: 1,
              background: "linear-gradient(135deg, var(--silver-bright) 0%, var(--accent) 60%, var(--accent-2) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {homeZone.creativeName}
          </h1>
        </div>

        <p
          style={{
            fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
            color: "var(--text-secondary)",
            maxWidth: 560,
            margin: "0 auto 0.75rem",
            lineHeight: 1.6,
            position: "relative",
            zIndex: 1,
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
            margin: "0 auto 0.75rem",
            lineHeight: 1.55,
            position: "relative",
            zIndex: 1,
          }}
        >
          The web was built for everyone. AI should be too.
        </p>
        <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", maxWidth: 480, margin: "0 auto 2rem", position: "relative", zIndex: 1 }}>
          Select a zone on the map below to explore what{" "}
          <strong style={{ color: "var(--text-primary)" }}>{SITE_NAME}</strong>{" "}
          has to offer — AI tools, security research, digital products, and more.
        </p>
        <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center", flexWrap: "wrap", position: "relative", zIndex: 1 }}>
          <Link
            href="/vision"
            style={{
              display: "inline-block",
              padding: "0.7rem 1.5rem",
              background: "var(--accent)",
              color: "#fff",
              borderRadius: 8,
              fontWeight: 700,
              fontSize: "0.9rem",
              textDecoration: "none",
              boxShadow: "0 0 20px var(--accent-glow)",
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
              border: "1px solid rgba(129,140,248,0.4)",
              borderRadius: 8,
              fontWeight: 700,
              fontSize: "0.9rem",
              textDecoration: "none",
            }}
          >
            Browse StoreX
          </Link>
          <Link
            href="/ai-lab"
            style={{
              display: "inline-block",
              padding: "0.7rem 1.5rem",
              background: "transparent",
              color: "var(--accent-2)",
              border: "1px solid rgba(56,189,248,0.35)",
              borderRadius: 8,
              fontWeight: 700,
              fontSize: "0.9rem",
              textDecoration: "none",
            }}
          >
            Enter The Forge
          </Link>
        </div>
      </header>

      {/* ── Zone Map / List ── */}
      <section aria-label="Zone navigation map" style={{ marginBottom: "5rem" }}>
        <ZoneMap />
      </section>

      {/* ── Mission strip ── */}
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
            color: "var(--accent)",
          },
          {
            icon: "🌐",
            title: "Public AI Infrastructure",
            body: "Not a product, not a paywall. A commons — open infrastructure anyone can run, fork, and build on.",
            color: "var(--accent-2)",
          },
          {
            icon: "🔐",
            title: "Sovereign by Design",
            body: "Your intelligence system runs on your hardware, under your control. No vendor lock-in. No hidden logic.",
            color: "var(--status-ok)",
          },
          {
            icon: "📡",
            title: "Built to Scale",
            body: "From a single VPS to a global mesh of user-owned nodes. The architecture scales with your ambition.",
            color: "var(--accent-3)",
          },
        ].map(({ icon, title, body, color }) => (
          <div key={title} className="card" style={{ textAlign: "center" }}>
            <span style={{ fontSize: "1.75rem", display: "block", marginBottom: "0.75rem" }}>
              {icon}
            </span>
            <h2 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: "0.5rem", color }}>{title}</h2>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem", lineHeight: 1.6 }}>
              {body}
            </p>
          </div>
        ))}
      </section>

      {/* ── AURA Intro Strip ── */}
      <section
        style={{
          background: "var(--bg-card)",
          border: "1px solid var(--border)",
          borderRadius: 16,
          padding: "2.5rem",
          marginBottom: "3rem",
          display: "flex",
          alignItems: "center",
          gap: "2.5rem",
          flexWrap: "wrap",
        }}
      >
        <AuraMascot size={100} animate />
        <div style={{ flex: 1, minWidth: 200 }}>
          <p
            style={{
              fontSize: "0.72rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              color: "var(--text-muted)",
              marginBottom: "0.4rem",
            }}
          >
            Meet AURA
          </p>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: "0.5rem" }}>
            The Reasoning Core
          </h2>
          <p style={{ color: "var(--text-secondary)", lineHeight: 1.65, fontSize: "0.9rem", maxWidth: 540 }}>
            AURA is the intelligence engine at the heart of the VAGA system — designed for memory,
            context, and structured judgment. Not a chatbot. A thinking partner with purpose.
            Preview AURA in The Forge.
          </p>
          <div style={{ marginTop: "1.25rem", display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            <Link
              href="/ai-lab"
              style={{
                padding: "0.55rem 1.25rem",
                background: "var(--accent)",
                color: "#fff",
                borderRadius: 8,
                fontWeight: 700,
                fontSize: "0.875rem",
                textDecoration: "none",
              }}
            >
              Try AURA Preview →
            </Link>
            <Link
              href="/vision"
              style={{
                padding: "0.55rem 1.25rem",
                background: "transparent",
                color: "var(--text-secondary)",
                border: "1px solid var(--border)",
                borderRadius: 8,
                fontWeight: 600,
                fontSize: "0.875rem",
                textDecoration: "none",
              }}
            >
              VAGA Architecture
            </Link>
          </div>
        </div>
      </section>

      {/* ── Founder callout ── */}
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
              fontSize: "0.72rem",
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
            border: "1px solid rgba(129,140,248,0.4)",
            borderRadius: 8,
            fontWeight: 700,
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

