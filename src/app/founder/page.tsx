import type { Metadata } from "next";
import {
  FOUNDER_NAME,
  FOUNDER_TITLE,
  FOUNDER_SKILLS,
  SITE_NAME,
} from "@/lib/site-config";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: `The Architect — About ${FOUNDER_NAME}`,
  description: `${FOUNDER_NAME} is the founder, operator, and chief architect of ${SITE_NAME} and the VAGA/AIOS ecosystem — a sovereign, operator-grade AI infrastructure built to return technological power to the public.`,
};

const VAGA_COMPONENTS = [
  {
    sigil: "◈",
    name: "AURA",
    role: "Reasoning Core",
    desc: "Memory, context, and judgment — the mind of the system. AURA holds the state of an ongoing intelligence session and applies structured reasoning to every decision the system makes.",
    color: "#818cf8",
  },
  {
    sigil: "◉",
    name: "AIOS",
    role: "Operating Layer",
    desc: "The environment intelligence runs inside. AIOS provides the process management, resource allocation, and communication bus that every other component depends on.",
    color: "#38bdf8",
  },
  {
    sigil: "◎",
    name: "OSAI",
    role: "Mobile Form",
    desc: "Intelligence that can operate away from a fixed server. OSAI is the off-VPS mobility layer — the system's ability to function in distributed and edge environments.",
    color: "#06d6a0",
  },
  {
    sigil: "→",
    name: "ARROW",
    role: "Network Traveler",
    desc: "The mechanism that moves knowledge and state across networks. ARROW handles the transit layer — routing, handoff, and continuity when moving between nodes.",
    color: "#ffd166",
  },
  {
    sigil: "◇",
    name: "AIM",
    role: "Web-Native Protocol",
    desc: "AI as a protocol, not just a product. AIM is the interface layer that makes VAGA systems accessible via standard web infrastructure.",
    color: "#9b72cf",
  },
  {
    sigil: "★",
    name: "ASTRA & NOVA",
    role: "Specialized Extensions",
    desc: "Domain-specific reasoning limbs. ASTRA and NOVA extend the core architecture into targeted areas — research synthesis, creative generation, and deep analytical work.",
    color: "#fb7185",
  },
];

export default function FounderPage() {
  return (
    <div style={{ maxWidth: 1280, margin: "0 auto", padding: "3rem 1.5rem 5rem" }}>

      {/* ── Header ── */}
      <header style={{ marginBottom: "3rem", maxWidth: 800 }}>
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
          About the Founder
        </p>
        <h1
          style={{
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
            marginBottom: "0.75rem",
          }}
        >
          {FOUNDER_NAME}
        </h1>
        <p
          style={{
            fontSize: "1rem",
            color: "var(--accent)",
            fontWeight: 500,
            marginBottom: "1.5rem",
            letterSpacing: "0.01em",
          }}
        >
          {FOUNDER_TITLE}
        </p>
      </header>

      {/* ── Two-column layout: bio + skills ── */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr min(280px, 35%)",
          gap: "3rem",
          alignItems: "start",
          marginBottom: "4rem",
        }}
        className="founder-grid"
      >
        {/* ── Long-form bio ── */}
        <article style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>

          {/* Opening */}
          <section>
            <p
              style={{
                fontSize: "1.2rem",
                lineHeight: 1.7,
                color: "var(--text-primary)",
                fontWeight: 500,
              }}
            >
              Chris Betts is the founder, operator, and chief architect of Betts Foundations — a
              public AI infrastructure project grounded in a simple belief: the tools that shape the
              next era of the internet should belong to the people who live in it.
            </p>
          </section>

          {/* Origin */}
          <section>
            <h2
              style={{
                fontSize: "1rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "var(--text-muted)",
                marginBottom: "0.75rem",
              }}
            >
              Where It Started
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <p style={{ color: "var(--text-secondary)", lineHeight: 1.75, fontSize: "0.975rem" }}>
                Chris&apos;s path did not start in a university lab or a funded startup. It started on
                a phone, a terminal, and a self-managed VPS — learning the full stack by necessity.
                He rebuilt broken systems by hand, recovered overwritten directories without a safety
                net, and designed hardened server environments that had to survive real-world failure
                without a senior engineer to call.
              </p>
              <p style={{ color: "var(--text-secondary)", lineHeight: 1.75, fontSize: "0.975rem" }}>
                Those years shaped a philosophy that runs through everything he builds: technology
                must be transparent, repairable, and genuinely owned by the people who depend on it.
                Not as a design principle someone writes in a README — as a lived constraint that
                forces better decisions.
              </p>
            </div>
          </section>

          {/* Philosophy */}
          <section>
            <h2
              style={{
                fontSize: "1rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "var(--text-muted)",
                marginBottom: "0.75rem",
              }}
            >
              The Philosophy
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <p style={{ color: "var(--text-secondary)", lineHeight: 1.75, fontSize: "0.975rem" }}>
                The early internet was an accident of openness. It gave anyone with a connection the
                ability to publish, build, and reach the world — not because corporations planned it
                that way, but because the infrastructure was designed before there was money in locking
                it down.
              </p>
              <p style={{ color: "var(--text-secondary)", lineHeight: 1.75, fontSize: "0.975rem" }}>
                AI is arriving in the opposite condition. The infrastructure is being built private-first,
                monetised from day one, and controlled by organisations with every incentive to keep it
                that way. Chris believes this is a critical window — and that the only way to keep AI
                free is to build the open alternative before the closed version becomes the default.
              </p>
            </div>
          </section>

          {/* VAGA intro */}
          <section>
            <h2
              style={{
                fontSize: "1rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "var(--text-muted)",
                marginBottom: "0.75rem",
              }}
            >
              Building VAGA
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <p style={{ color: "var(--text-secondary)", lineHeight: 1.75, fontSize: "0.975rem" }}>
                VAGA — the Virtual Autonomous General Architecture — is the technical expression of
                that philosophy. It is not a single model, a single tool, or a single product. It is a
                living, modular framework designed to treat AI as an organism with structure, mobility,
                and purpose — not as a service someone else runs on your behalf.
              </p>
              <p style={{ color: "var(--text-secondary)", lineHeight: 1.75, fontSize: "0.975rem" }}>
                The architecture is designed to scale from a single operator&apos;s VPS to a
                decentralised mesh of user-owned intelligence nodes — without corporate infrastructure
                at the centre. Each component can be rebuilt, replaced, or forked. Nothing in the
                system is a black box.
              </p>
            </div>
          </section>

          {/* Commitment */}
          <section>
            <h2
              style={{
                fontSize: "1rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "var(--text-muted)",
                marginBottom: "0.75rem",
              }}
            >
              The Commitment
            </h2>
            <p style={{ color: "var(--text-secondary)", lineHeight: 1.75, fontSize: "0.975rem" }}>
              Chris builds in public — sharing the architecture, the reasoning, and the failures —
              because the only way this remains a commons is if the people building it choose to
              keep it that way. Betts Foundations is not a product launch. It is a commitment to
              one direction: technology that empowers rather than extracts, and an AI future that
              stays accessible, open, and free.
            </p>
            <p
              style={{
                color: "var(--text-primary)",
                lineHeight: 1.75,
                fontSize: "0.975rem",
                marginTop: "1rem",
                fontStyle: "italic",
                borderLeft: "3px solid var(--accent)",
                paddingLeft: "1rem",
              }}
            >
              &ldquo;He is not building a product. He is building a commons.&rdquo;
            </p>
          </section>
        </article>

        {/* ── Sidebar: skills + profile ── */}
        <aside style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          <div className="card">
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
              Areas of Focus
            </p>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {FOUNDER_SKILLS.map((skill) => (
                <li
                  key={skill}
                  style={{
                    fontSize: "0.875rem",
                    color: "var(--text-secondary)",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "0.5rem",
                  }}
                >
                  <span style={{ color: "var(--accent)", fontWeight: 700, flexShrink: 0, lineHeight: 1.5 }}>
                    ›
                  </span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          <div
            style={{
              background: "rgba(129,140,248,0.07)",
              border: "1px solid rgba(129,140,248,0.25)",
              borderRadius: 12,
              padding: "1.25rem",
            }}
          >
            <p
              style={{
                fontSize: "0.75rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "var(--text-muted)",
                marginBottom: "0.75rem",
              }}
            >
              Current Work
            </p>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {[
                "VAGA/AIOS architecture (active)",
                "Betts Foundations platform (Phase 1)",
                "UnderNet operator tier (Phase 2)",
                "Public AI tooling (Phase 3+)",
              ].map((item) => (
                <li
                  key={item}
                  style={{ fontSize: "0.8rem", color: "var(--text-secondary)", lineHeight: 1.5 }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="card">
            <p
              style={{
                fontSize: "0.75rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "var(--text-muted)",
                marginBottom: "0.75rem",
              }}
            >
              Contact
            </p>
            <a
              href="mailto:support@bettsfoundations.org"
              style={{ fontSize: "0.875rem", color: "var(--accent)" }}
            >
              support@bettsfoundations.org
            </a>
          </div>
        </aside>
      </div>

      {/* ── VAGA Component Grid ── */}
      <section style={{ marginBottom: "4rem" }}>
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
            The Architecture
          </p>
          <h2
            style={{
              fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              marginBottom: "0.75rem",
            }}
          >
            VAGA — Virtual Autonomous General Architecture
          </h2>
          <p style={{ color: "var(--text-secondary)", maxWidth: 620, lineHeight: 1.6, fontSize: "0.975rem" }}>
            Not a metaphor. A functional architecture designed to treat AI as an organism — with a
            reasoning core, a mobility layer, and a physical anchor in the real world.
          </p>
        </header>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.25rem",
          }}
        >
          {VAGA_COMPONENTS.map(({ sigil, name, role, desc, color }) => (
            <div
              key={name}
              className="card"
              style={{ borderColor: `${color}33` }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  marginBottom: "0.75rem",
                }}
              >
                <span
                  style={{
                    fontSize: "1.25rem",
                    color,
                    fontWeight: 700,
                    lineHeight: 1,
                    flexShrink: 0,
                  }}
                >
                  {sigil}
                </span>
                <div>
                  <span style={{ fontWeight: 800, fontSize: "1rem", color }}>
                    {name}
                  </span>
                  <span
                    style={{
                      display: "block",
                      fontSize: "0.75rem",
                      color: "var(--text-muted)",
                      textTransform: "uppercase",
                      letterSpacing: "0.07em",
                    }}
                  >
                    {role}
                  </span>
                </div>
              </div>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem", lineHeight: 1.6 }}>
                {desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .founder-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
