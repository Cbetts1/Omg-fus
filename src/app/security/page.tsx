import type { Metadata } from "next";
import { ZONES } from "@/lib/site-config";
import { ZonePage } from "@/components/ZonePage";

export const dynamic = "force-dynamic";

const zone = ZONES.find((z) => z.path === "/security")!;

export const metadata: Metadata = {
  title: `${zone.creativeName} — ${zone.subtitle}`,
  description: zone.description,
};

export default function SecurityPage() {
  return (
    <ZonePage zone={zone}>
      <div
        style={{
          background: "rgba(255, 107, 107, 0.06)",
          border: "1px solid rgba(255, 107, 107, 0.3)",
          borderRadius: 10,
          padding: "1rem 1.5rem",
          marginBottom: "2rem",
          fontSize: "0.875rem",
          color: "var(--text-secondary)",
        }}
      >
        ⚠️ All security content on Betts Foundations is <strong>educational only</strong>.
        No content is intended to facilitate unauthorized access to systems you do not own.
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
        {[
          { title: "Threat Models", desc: "Frameworks for identifying and mitigating attack surfaces." },
          { title: "Defensive Playbooks", desc: "Step-by-step guides for hardening systems and networks." },
          { title: "Research Library", desc: "Breakdowns of documented vulnerabilities and mitigations." },
          { title: "Lab Environments", desc: "Isolated sandbox scenarios for safe learning. (Phase 3)" },
        ].map(({ title, desc }) => (
          <div key={title} className="card">
            <h2 style={{ fontSize: "1.1rem", marginBottom: "0.5rem" }}>{title}</h2>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>{desc}</p>
          </div>
        ))}
      </div>
    </ZonePage>
  );
}
