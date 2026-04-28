import type { Metadata } from "next";
import { ZONES, AI_DISCLOSURE_LABEL } from "@/lib/site-config";
import { ZonePage } from "@/components/ZonePage";

export const dynamic = "force-dynamic";

const zone = ZONES.find((z) => z.path === "/store")!;

export const metadata: Metadata = {
  title: `${zone.creativeName} — ${zone.subtitle}`,
  description: zone.description,
};

export default function StorePage() {
  return (
    <ZonePage zone={zone}>
      {/* AI disclosure label */}
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

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
        {[
          { title: "Operator Toolkits", desc: "Curated bundles of scripts, configs, and workflows.", tag: "AI-assisted" },
          { title: "Ebooks & Guides", desc: "In-depth technical guides — PDF + EPUB formats.", tag: "AI-assisted" },
          { title: "Prompt Packs", desc: "High-performance prompt collections for specific use cases.", tag: "AI-assisted" },
          { title: "Templates", desc: "Ready-to-use templates for pipelines, docs, and dashboards.", tag: null },
        ].map(({ title, desc, tag }) => (
          <div key={title} className="card">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.5rem" }}>
              <h2 style={{ fontSize: "1.1rem" }}>{title}</h2>
              {tag && (
                <span style={{ fontSize: "0.7rem", padding: "0.2rem 0.5rem", background: "rgba(108,99,255,0.15)", color: "var(--accent)", borderRadius: 4, whiteSpace: "nowrap" }}>
                  {tag}
                </span>
              )}
            </div>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>{desc}</p>
            <p style={{ marginTop: "1rem", fontSize: "0.8rem", color: "var(--text-muted)" }}>Products launching soon</p>
          </div>
        ))}
      </div>

      <p style={{ marginTop: "3rem", color: "var(--text-muted)", fontSize: "0.85rem" }}>
        All digital products are subject to our{" "}
        <a href="/legal/terms" style={{ color: "var(--accent)" }}>Terms of Service</a>.
        All sales are final. Downloads expire after 72 hours (5 download limit per purchase).
      </p>
    </ZonePage>
  );
}
