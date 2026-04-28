import type { Metadata } from "next";
import { ZONES } from "@/lib/site-config";
import { ZonePage } from "@/components/ZonePage";
import { AuraMascot } from "@/components/AuraMascot";
import Link from "next/link";

export const dynamic = "force-dynamic";

const zone = ZONES.find((z) => z.path === "/advanced")!;

export const metadata: Metadata = {
  title: `${zone.creativeName} — ${zone.subtitle}`,
  description: zone.description,
};

const PREVIEW_CONTENT = [
  {
    icon: "🛡️",
    title: "Operator Security Playbooks",
    desc: "Full step-by-step playbooks for hardening, incident response, and post-breach recovery — not stubs, complete procedures.",
    tag: "Security",
    tagColor: "#fb7185",
  },
  {
    icon: "🧠",
    title: "AURA Prompt Architecture Reference",
    desc: "Internal reference for the AURA reasoning system: prompt structure, chain design, memory injection patterns, and advanced orchestration.",
    tag: "AI Architecture",
    tagColor: "#818cf8",
  },
  {
    icon: "⚙️",
    title: "Production Config Templates",
    desc: "Ready-to-deploy config files for Nginx, Caddy, PostgreSQL, Redis, Docker Compose, and system-level hardening.",
    tag: "Infrastructure",
    tagColor: "#34d399",
  },
  {
    icon: "📋",
    title: "VAGA System Design Spec",
    desc: "The internal specification document for the VAGA/AIOS architecture — components, interfaces, mobility layer, and design decisions.",
    tag: "Architecture",
    tagColor: "#38bdf8",
  },
  {
    icon: "🔍",
    title: "Multi-Agent Debugging Techniques",
    desc: "Advanced troubleshooting methods for multi-agent AI systems — tracing, isolation, failure analysis, and repair patterns.",
    tag: "AI Operations",
    tagColor: "#fbbf24",
  },
  {
    icon: "🌐",
    title: "Sovereign Infrastructure Blueprints",
    desc: "Full infrastructure blueprints for self-hosted, air-gapped, and distributed deployments at different scale points.",
    tag: "Infrastructure",
    tagColor: "#34d399",
  },
];

export default function AdvancedPage() {
  return (
    <ZonePage zone={zone}>
      {/* ── Gate header ── */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "2rem",
          background: "var(--bg-card)",
          border: "1px solid rgba(251,113,133,0.3)",
          borderRadius: 16,
          padding: "2rem 2.5rem",
          marginBottom: "3rem",
          flexWrap: "wrap",
        }}
      >
        <AuraMascot size={80} animate />
        <div style={{ flex: 1, minWidth: 200 }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.5rem" }}>
            <span style={{ fontSize: "1.2rem" }}>🔒</span>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800 }}>Access Restricted</h2>
          </div>
          <p style={{ color: "var(--text-secondary)", lineHeight: 1.65, fontSize: "0.9rem", maxWidth: 540, marginBottom: "1.25rem" }}>
            <strong style={{ color: "var(--gated)" }}>UnderNet</strong> is reserved for verified Betts Foundations customers.
            To unlock access, complete at least one qualifying purchase through{" "}
            <Link href="/store" style={{ color: "var(--accent)" }}>StoreX</Link>.
            Once purchased, operator-tier access is granted automatically. Authentication
            and entitlement enforcement launch in Phase 2.
          </p>
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            <Link
              href="/store"
              style={{
                display: "inline-block",
                padding: "0.65rem 1.5rem",
                background: "var(--accent)",
                color: "#fff",
                borderRadius: 8,
                fontWeight: 700,
                fontSize: "0.875rem",
                textDecoration: "none",
              }}
            >
              Browse StoreX
            </Link>
            <Link
              href="/pricing"
              style={{
                display: "inline-block",
                padding: "0.65rem 1.25rem",
                background: "transparent",
                color: "var(--text-secondary)",
                border: "1px solid var(--border)",
                borderRadius: 8,
                fontWeight: 600,
                fontSize: "0.875rem",
                textDecoration: "none",
              }}
            >
              View Pricing
            </Link>
          </div>
        </div>
      </div>

      {/* ── Preview of what's inside ── */}
      <div style={{ marginBottom: "1rem" }}>
        <p
          style={{
            fontSize: "0.72rem",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.12em",
            color: "var(--text-muted)",
            marginBottom: "0.5rem",
          }}
        >
          What&apos;s inside UnderNet
        </p>
        <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem", marginBottom: "1.5rem" }}>
          A preview of operator-tier content available to verified customers.
          Content is locked until purchase is verified.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "1.25rem",
          marginBottom: "3rem",
        }}
      >
        {PREVIEW_CONTENT.map((item) => (
          <div
            key={item.title}
            className="card"
            style={{
              opacity: 0.72,
              cursor: "not-allowed",
              filter: "blur(0.2px)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Lock overlay */}
            <div
              style={{
                position: "absolute",
                top: "0.75rem",
                right: "0.75rem",
                fontSize: "0.9rem",
              }}
            >
              🔒
            </div>

            <span
              style={{
                fontSize: "0.65rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.07em",
                color: item.tagColor,
                background: `${item.tagColor}14`,
                border: `1px solid ${item.tagColor}28`,
                borderRadius: 4,
                padding: "0.15rem 0.4rem",
                display: "inline-block",
                marginBottom: "0.6rem",
              }}
            >
              {item.tag}
            </span>

            <div style={{ fontSize: "1.3rem", marginBottom: "0.5rem" }}>{item.icon}</div>

            <h3 style={{ fontSize: "0.95rem", fontWeight: 700, marginBottom: "0.4rem" }}>
              {item.title}
            </h3>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.825rem", lineHeight: 1.6 }}>
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      {/* What you unlock callout */}
      <div
        style={{
          background: "rgba(129,140,248,0.06)",
          border: "1px solid rgba(129,140,248,0.2)",
          borderRadius: 12,
          padding: "1.5rem 2rem",
        }}
      >
        <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: "0.75rem" }}>
          One purchase unlocks all of this
        </h3>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "0.5rem",
          }}
        >
          {[
            "Full operator security playbooks",
            "AURA prompt architecture reference",
            "Production configuration files",
            "VAGA system design specification",
            "Multi-agent debugging techniques",
            "Sovereign infrastructure blueprints",
            "Early access to new content",
            "Priority support queue",
          ].map((f) => (
            <div
              key={f}
              style={{ display: "flex", gap: "0.5rem", alignItems: "flex-start", fontSize: "0.85rem", color: "var(--text-secondary)" }}
            >
              <span style={{ color: "var(--accent)", flexShrink: 0, fontWeight: 700 }}>✓</span>
              {f}
            </div>
          ))}
        </div>
      </div>
    </ZonePage>
  );
}
