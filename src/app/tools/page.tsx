import type { Metadata } from "next";
import { ZONES } from "@/lib/site-config";
import { ZonePage } from "@/components/ZonePage";

export const dynamic = "force-dynamic";

const zone = ZONES.find((z) => z.path === "/tools")!;

export const metadata: Metadata = {
  title: `${zone.creativeName} — ${zone.subtitle}`,
  description: zone.description,
};

export default function ToolsPage() {
  return (
    <ZonePage zone={zone}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
        {[
          { title: "System Scripts", desc: "Bash, Python, and PowerShell utilities for daily operator tasks." },
          { title: "Productivity Templates", desc: "Notion, Obsidian, and markdown system templates." },
          { title: "VPS Configurators", desc: "Hardened server setup scripts for AlmaLinux and Ubuntu." },
          { title: "Dev Utilities", desc: "CLI helpers, linters, and workflow accelerators for developers." },
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
