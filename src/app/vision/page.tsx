import type { Metadata } from "next";
import { SITE_NAME } from "@/lib/site-config";
import Link from "next/link";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "The Vision — Platform Vision",
  description: `How ${SITE_NAME} transforms the internet from a static website system into a living, sovereign AI ecosystem — VAGA, AIOS, and the public intelligence commons.`,
};

const OLD_WEB = [
  { icon: "📄", label: "Static Websites", desc: "Pages you visit but cannot own." },
  { icon: "🧭", label: "Navigation & Links", desc: "A web of documents, not intelligence." },
  { icon: "🏢", label: "Corporate Servers", desc: "Infrastructure owned by the few." },
  { icon: "🔒", label: "Gated Access", desc: "Intelligence behind paywalls and logins." },
];

const NEW_SYSTEM = [
  {
    sigil: "VM",
    label: "Virtual Mind",
    desc: "A persistent, sovereign reasoning entity. Not a chatbot — a mind with memory, context, and purpose that persists across sessions.",
    color: "#6c63ff",
  },
  {
    sigil: "VAI",
    label: "Virtual AI Agents",
    desc: "Specialised intelligence units that act, communicate, and coordinate inside the network. Each agent has a role; together they form a system.",
    color: "#00d4ff",
  },
  {
    sigil: "VOS",
    label: "Virtual Operating System",
    desc: "The substrate everything runs on. A real operating environment for intelligence — process management, resource allocation, inter-agent communication.",
    color: "#06d6a0",
  },
];

const PRINCIPLES = [
  {
    number: "01",
    title: "Sovereignty",
    body: "You own your intelligence system. The infrastructure runs on your hardware, under your control. No vendor can revoke your access, change the terms, or read your data.",
  },
  {
    number: "02",
    title: "Portability",
    body: "Intelligence should travel with you. ARROW — the transit layer of VAGA — enables an AI system to move across networks, picking up context and continuing work across environments.",
  },
  {
    number: "03",
    title: "Transparency",
    body: "No black boxes. Every layer of the system is documented, inspectable, and forkable. If you want to understand why the system made a decision, you can trace it.",
  },
  {
    number: "04",
    title: "Repairability",
    body: "Everything can be rebuilt. The system is designed to survive real-world failure — not graceful degradation in a data centre, but recovery on a single operator's machine under real conditions.",
  },
  {
    number: "05",
    title: "Public Access",
    body: "The infrastructure is designed for free use. Like the early web, the core should be accessible to anyone with a connection and the will to learn.",
  },
];

export default function VisionPage() {
  return (
    <div style={{ maxWidth: 1280, margin: "0 auto", padding: "3rem 1.5rem 5rem" }}>

      {/* ── Hero ── */}
      <header
        style={{
          maxWidth: 800,
          marginBottom: "4rem",
        }}
      >
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
          Platform Vision
        </p>
        <h1
          style={{
            fontSize: "clamp(2rem, 6vw, 4rem)",
            fontWeight: 900,
            letterSpacing: "-0.04em",
            lineHeight: 1.05,
            marginBottom: "1.25rem",
            background: "linear-gradient(135deg, #f0f0ff 0%, #6c63ff 55%, #00d4ff 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          The Internet Is Changing.<br />
          We Are Changing It On Purpose.
        </h1>
        <p
          style={{
            fontSize: "clamp(1rem, 2vw, 1.2rem)",
            color: "var(--text-secondary)",
            lineHeight: 1.7,
            maxWidth: 680,
          }}
        >
          Betts Foundations is not building another AI product. It is building the infrastructure
          for an AI-native internet — one that is sovereign, distributed, and free by design.
          Here is what that means, and why it matters.
        </p>
      </header>

      {/* ── The Transformation ── */}
      <section style={{ marginBottom: "5rem" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto 1fr",
            gap: "1.5rem",
            alignItems: "start",
          }}
          className="transform-grid"
        >
          {/* Old Web */}
          <div>
            <p
              style={{
                fontSize: "0.75rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "var(--text-muted)",
                marginBottom: "1rem",
              }}
            >
              The Old Web
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {OLD_WEB.map(({ icon, label, desc }) => (
                <div
                  key={label}
                  style={{
                    padding: "1rem 1.25rem",
                    background: "var(--bg-card)",
                    border: "1px solid var(--border)",
                    borderRadius: 10,
                    opacity: 0.7,
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.3rem" }}>
                    <span style={{ fontSize: "1.1rem" }}>{icon}</span>
                    <span style={{ fontWeight: 600, fontSize: "0.9rem", color: "var(--text-secondary)" }}>
                      {label}
                    </span>
                  </div>
                  <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", lineHeight: 1.5 }}>
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Arrow */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              paddingTop: "3rem",
            }}
            className="transform-arrow"
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <span
                style={{
                  fontSize: "2rem",
                  color: "var(--accent)",
                  lineHeight: 1,
                }}
              >
                →
              </span>
              <span
                style={{
                  fontSize: "0.65rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  color: "var(--text-muted)",
                  whiteSpace: "nowrap",
                }}
              >
                Evolution
              </span>
            </div>
          </div>

          {/* New System */}
          <div>
            <p
              style={{
                fontSize: "0.75rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "var(--accent)",
                marginBottom: "1rem",
              }}
            >
              The New System
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {NEW_SYSTEM.map(({ sigil, label, desc, color }) => (
                <div
                  key={label}
                  className="card"
                  style={{ borderColor: `${color}44` }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.4rem" }}>
                    <span
                      style={{
                        fontSize: "0.7rem",
                        fontWeight: 800,
                        fontFamily: "monospace",
                        color,
                        background: `${color}15`,
                        border: `1px solid ${color}44`,
                        borderRadius: 4,
                        padding: "0.15rem 0.4rem",
                        flexShrink: 0,
                        letterSpacing: "0.05em",
                      }}
                    >
                      {sigil}
                    </span>
                    <span style={{ fontWeight: 700, fontSize: "0.9rem", color }}>
                      {label}
                    </span>
                  </div>
                  <p style={{ fontSize: "0.8rem", color: "var(--text-secondary)", lineHeight: 1.55 }}>
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Core Concept ── */}
      <section
        style={{
          marginBottom: "5rem",
          background: "var(--bg-card)",
          border: "1px solid var(--border)",
          borderRadius: 16,
          padding: "2.5rem",
        }}
      >
        <p
          style={{
            fontSize: "0.8rem",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            color: "var(--text-muted)",
            marginBottom: "1rem",
          }}
        >
          The Core Concept
        </p>
        <h2
          style={{
            fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
            fontWeight: 800,
            letterSpacing: "-0.02em",
            lineHeight: 1.2,
            marginBottom: "1.5rem",
          }}
        >
          An Evolving AI Ecosystem — Not a Product
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "2rem",
          }}
          className="concept-grid"
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <p style={{ color: "var(--text-secondary)", lineHeight: 1.75, fontSize: "0.975rem" }}>
              Traditional AI deployments are products: you pay, you get access, you lose access when
              you stop paying. The intelligence lives on someone else&apos;s server, under someone else&apos;s
              rules, with someone else&apos;s values embedded in it.
            </p>
            <p style={{ color: "var(--text-secondary)", lineHeight: 1.75, fontSize: "0.975rem" }}>
              VAGA/AIOS is designed around a different premise: intelligence should be an organism,
              not a service. It should live somewhere real — your VPS, your machine, your network.
              It should have memory that persists because you kept it, not because a corporation decided
              to store it. It should be capable of growing, changing, and moving as your needs change.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <p style={{ color: "var(--text-secondary)", lineHeight: 1.75, fontSize: "0.975rem" }}>
              The VAGA architecture realises this through modular components: AURA provides the
              reasoning core, AIOS provides the operating environment, OSAI enables mobility,
              ARROW handles network transit, and AIM creates web-native access — all running on
              infrastructure you own and control.
            </p>
            <p style={{ color: "var(--text-secondary)", lineHeight: 1.75, fontSize: "0.975rem" }}>
              Scale is a design property, not an upgrade tier. The same architecture that runs on
              one operator&apos;s VPS is designed to scale to a global mesh of user-owned nodes —
              a decentralised intelligence network with no central point of control.
            </p>
          </div>
        </div>
      </section>

      {/* ── Five Principles ── */}
      <section style={{ marginBottom: "5rem" }}>
        <header style={{ marginBottom: "2rem" }}>
          <p
            style={{
              fontSize: "0.8rem",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "var(--text-muted)",
              marginBottom: "0.4rem",
            }}
          >
            Design Principles
          </p>
          <h2
            style={{
              fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
            }}
          >
            Five Principles That Cannot Be Negotiated
          </h2>
        </header>

        <div style={{ display: "flex", flexDirection: "column", gap: "1px", borderRadius: 12, overflow: "hidden", border: "1px solid var(--border)" }}>
          {PRINCIPLES.map(({ number, title, body }) => (
            <div
              key={number}
              style={{
                display: "grid",
                gridTemplateColumns: "56px 1fr",
                background: "var(--bg-card)",
                borderBottom: "1px solid var(--border)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRight: "1px solid var(--border)",
                  padding: "1.25rem 0",
                }}
              >
                <span
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 800,
                    color: "var(--accent)",
                    fontFamily: "monospace",
                    letterSpacing: "0.05em",
                  }}
                >
                  {number}
                </span>
              </div>
              <div style={{ padding: "1.25rem 1.5rem" }}>
                <span style={{ fontWeight: 700, fontSize: "0.95rem", display: "block", marginBottom: "0.35rem" }}>
                  {title}
                </span>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem", lineHeight: 1.6 }}>
                  {body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Public Mission ── */}
      <section
        style={{
          background: "linear-gradient(135deg, rgba(108,99,255,0.08) 0%, rgba(0,212,255,0.05) 100%)",
          border: "1px solid rgba(108,99,255,0.25)",
          borderRadius: 16,
          padding: "2.5rem",
          marginBottom: "4rem",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(1.25rem, 3vw, 2rem)",
            fontWeight: 800,
            letterSpacing: "-0.02em",
            marginBottom: "1rem",
          }}
        >
          The Web Was Built for Everyone.<br />
          AI Should Be Too.
        </h2>
        <p
          style={{
            color: "var(--text-secondary)",
            lineHeight: 1.75,
            fontSize: "1rem",
            maxWidth: 640,
            margin: "0 auto 2rem",
          }}
        >
          Betts Foundations is committed to building and protecting a public AI ecosystem — one
          that mirrors the openness, freedom, and global accessibility of the early internet.
          Not as a slogan. As a technical and operational commitment built into every design decision.
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "1rem",
            flexWrap: "wrap",
          }}
        >
          <Link
            href="/founder"
            style={{
              display: "inline-block",
              padding: "0.75rem 1.75rem",
              background: "var(--accent)",
              color: "#fff",
              borderRadius: 8,
              fontWeight: 600,
              textDecoration: "none",
              fontSize: "0.9rem",
            }}
          >
            Meet the Architect
          </Link>
          <Link
            href="/ai-lab"
            style={{
              display: "inline-block",
              padding: "0.75rem 1.75rem",
              background: "transparent",
              color: "var(--accent)",
              border: "1px solid rgba(108,99,255,0.4)",
              borderRadius: 8,
              fontWeight: 600,
              textDecoration: "none",
              fontSize: "0.9rem",
            }}
          >
            Enter The Forge
          </Link>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .transform-grid {
            grid-template-columns: 1fr !important;
          }
          .transform-arrow {
            transform: rotate(90deg);
            padding: 0.5rem 0 !important;
          }
          .concept-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
