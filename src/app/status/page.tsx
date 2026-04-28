import type { Metadata } from "next";
import { ZONES } from "@/lib/site-config";
import { ZonePage } from "@/components/ZonePage";

export const dynamic = "force-dynamic";

const zone = ZONES.find((z) => z.path === "/status")!;

export const metadata: Metadata = {
  title: zone.subtitle,
  description: zone.description,
};

const services = [
  { name: "Website", status: "operational" },
  { name: "AI Lab API", status: "phase2" },
  { name: "StoreX", status: "phase2" },
  { name: "Downloads", status: "phase2" },
  { name: "Auth", status: "phase2" },
];

const STATUS_COLORS: Record<string, string> = {
  operational: "#06d6a0",
  degraded: "#ffd166",
  outage: "#fb7185",
  phase2: "#4b5675",
};

const STATUS_LABELS: Record<string, string> = {
  operational: "Operational",
  degraded: "Degraded",
  outage: "Outage",
  phase2: "Launching Phase 2",
};

export default function StatusPage() {
  return (
    <ZonePage zone={zone}>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", maxWidth: 600 }}>
        {services.map(({ name, status }) => (
          <div
            key={name}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "1rem 1.25rem",
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
              borderRadius: 8,
            }}
          >
            <span style={{ fontWeight: 500 }}>{name}</span>
            <span style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.875rem", color: STATUS_COLORS[status] }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: STATUS_COLORS[status], display: "inline-block" }} />
              {STATUS_LABELS[status]}
            </span>
          </div>
        ))}
      </div>
    </ZonePage>
  );
}
