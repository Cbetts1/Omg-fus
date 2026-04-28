import type { Metadata } from "next";
import { ZONES } from "@/lib/site-config";
import { ZonePage } from "@/components/ZonePage";

export const dynamic = "force-dynamic";

const zone = ZONES.find((z) => z.path === "/ai-lab")!;

export const metadata: Metadata = {
  title: `${zone.creativeName} — ${zone.subtitle}`,
  description: zone.description,
};

export default function AiLabPage() {
  return (
    <ZonePage zone={zone}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
        {[
          { title: "Workflow Builder", desc: "Design and deploy AI-powered automations without code." },
          { title: "Prompt Library", desc: "Curated, tested prompts for common operator tasks." },
          { title: "Model Sandbox", desc: "Test outputs across configurations before shipping." },
          { title: "Pipeline Monitor", desc: "Track runs, errors, and throughput in real time." },
        ].map(({ title, desc }) => (
          <div key={title} className="card">
            <h2 style={{ fontSize: "1.1rem", marginBottom: "0.5rem" }}>{title}</h2>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>{desc}</p>
            <p style={{ marginTop: "1rem", fontSize: "0.8rem", color: "var(--text-muted)" }}>
              Coming in Phase 3
            </p>
          </div>
        ))}
      </div>
    </ZonePage>
  );
}
