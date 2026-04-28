import type { Metadata } from "next";
import { ZONES } from "@/lib/site-config";
import { ZonePage } from "@/components/ZonePage";
import { ChatInterface } from "@/components/ChatInterface";

export const dynamic = "force-dynamic";

const zone = ZONES.find((z) => z.path === "/ai-lab")!;

export const metadata: Metadata = {
  title: `${zone.creativeName} — ${zone.subtitle}`,
  description: zone.description,
};

export default function AiLabPage() {
  return (
    <ZonePage zone={zone}>
      {/* Chat interface — preview mode */}
      <section style={{ marginBottom: "3rem" }}>
        <p
          style={{
            fontSize: "0.8rem",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            color: "var(--text-muted)",
            marginBottom: "0.75rem",
          }}
        >
          AURA Interface — Preview
        </p>
        <ChatInterface />
        <p
          style={{
            marginTop: "0.75rem",
            fontSize: "0.75rem",
            color: "var(--text-muted)",
            lineHeight: 1.5,
          }}
        >
          🔬 Running in preview mode. Live AI integration (powered by VAGA/AIOS) arrives in{" "}
          <strong>Phase 3</strong>. Chat history, session continuity, and operator-tier features
          are under active development.
        </p>
      </section>

      {/* Tool roadmap */}
      <section>
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
          Upcoming Tools
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.25rem" }}>
          {[
            {
              title: "Workflow Builder",
              desc: "Design and deploy AI-powered automations without code. Connect agents, define triggers, and monitor runs in real time.",
              phase: "Phase 3",
            },
            {
              title: "Prompt Library",
              desc: "Curated, tested prompts for common operator tasks — searchable, forkable, and versioned.",
              phase: "Phase 3",
            },
            {
              title: "Model Sandbox",
              desc: "Test outputs across configurations before shipping. Compare responses, inspect reasoning, validate behaviour.",
              phase: "Phase 3",
            },
            {
              title: "Pipeline Monitor",
              desc: "Track runs, errors, and throughput in real time. Full observability for multi-agent workflows.",
              phase: "Phase 3",
            },
          ].map(({ title, desc, phase }) => (
            <div key={title} className="card" style={{ opacity: 0.75 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.5rem" }}>
                <h2 style={{ fontSize: "1rem", fontWeight: 700 }}>{title}</h2>
                <span
                  style={{
                    fontSize: "0.65rem",
                    padding: "0.15rem 0.4rem",
                    background: "rgba(108,99,255,0.12)",
                    color: "var(--text-muted)",
                    borderRadius: 4,
                    whiteSpace: "nowrap",
                    fontWeight: 600,
                    letterSpacing: "0.04em",
                  }}
                >
                  {phase}
                </span>
              </div>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem", lineHeight: 1.6 }}>
                {desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </ZonePage>
  );
}

