import type { Metadata } from "next";
import { ZONES, KNOWLEDGE_CATEGORIES, AI_DISCLOSURE_LABEL } from "@/lib/site-config";
import { ZonePage } from "@/components/ZonePage";

export const dynamic = "force-dynamic";

const zone = ZONES.find((z) => z.path === "/knowledge")!;

export const metadata: Metadata = {
  title: `${zone.creativeName} — ${zone.subtitle}`,
  description: zone.description,
};

export default function KnowledgePage() {
  return (
    <ZonePage zone={zone}>
      <div
        style={{
          background: "rgba(108,99,255,0.07)",
          border: "1px solid rgba(108,99,255,0.25)",
          borderRadius: 8,
          padding: "0.75rem 1rem",
          marginBottom: "2rem",
          fontSize: "0.8rem",
          color: "var(--text-secondary)",
        }}
      >
        🤖 <em>{AI_DISCLOSURE_LABEL}</em>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "1rem" }}>
        {KNOWLEDGE_CATEGORIES.map((category) => (
          <div key={category} className="card" style={{ cursor: "pointer" }}>
            <h2 style={{ fontSize: "1rem", marginBottom: "0.35rem" }}>{category}</h2>
            <p style={{ color: "var(--text-muted)", fontSize: "0.8rem" }}>
              Articles and guides coming soon
            </p>
          </div>
        ))}
      </div>
    </ZonePage>
  );
}
