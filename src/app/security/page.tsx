import type { Metadata } from "next";
import { ZONES } from "@/lib/site-config";
import { ZonePage } from "@/components/ZonePage";

export const dynamic = "force-dynamic";

const zone = ZONES.find((z) => z.path === "/security")!;

export const metadata: Metadata = {
  title: `${zone.creativeName} — ${zone.subtitle}`,
  description: zone.description,
};

const MODULES = [
  {
    icon: "🗺️",
    title: "Threat Modeling",
    phase: "Phase 1",
    desc: "Structured frameworks for mapping attack surfaces, identifying entry points, and prioritising defensive effort. Covers STRIDE, PASTA, and operator-adapted models for small team environments.",
    items: ["STRIDE methodology", "Attack surface mapping", "Risk prioritisation matrices", "VPS-specific threat profiles"],
    color: "#ff6b6b",
  },
  {
    icon: "🛡️",
    title: "Defensive Playbooks",
    phase: "Phase 1",
    desc: "Step-by-step guides for hardening systems at every layer — from OS and network to application and identity. Derived from real operator experience, not theoretical frameworks.",
    items: ["SSH hardening & key management", "Firewall rulesets (UFW / firewalld)", "Fail2Ban configuration", "Nginx TLS hardening"],
    color: "#06d6a0",
  },
  {
    icon: "📚",
    title: "Research Library",
    phase: "Phase 2",
    desc: "Documented breakdowns of real-world vulnerabilities, CVEs, and attack patterns — analysed with operator context. Focus on what actually happens in practice, not just what CVSSv3 says.",
    items: ["CVE breakdowns with operator context", "Exploit technique analysis", "Mitigation effectiveness reviews", "Supply chain risk patterns"],
    color: "#ffd166",
  },
  {
    icon: "🔬",
    title: "Lab Environments",
    phase: "Phase 3",
    desc: "Isolated sandbox scenarios for practising defensive techniques safely. Deliberately vulnerable environments with guided walkthroughs — no setup required.",
    items: ["Pre-built vulnerable VM images", "Guided scenario walkthroughs", "CTF-style challenges", "Network capture analysis"],
    color: "#9b72cf",
  },
  {
    icon: "🔑",
    title: "Identity & Access",
    phase: "Phase 2",
    desc: "Practical guidance on identity architecture, secrets management, and access control for operators running real infrastructure — not enterprise IAM theory.",
    items: ["SSH certificate authorities", "Secrets management (Vault, .env patterns)", "Role-based access design", "Audit log configuration"],
    color: "#00d4ff",
  },
  {
    icon: "📡",
    title: "Network Security",
    phase: "Phase 2",
    desc: "From Cloudflare edge configuration to internal network segmentation. Covers both the perimeter and the internal trust model for multi-service VPS environments.",
    items: ["Cloudflare WAF & rate limiting", "Internal network segmentation", "DNS security & DNSSEC", "Traffic analysis basics"],
    color: "#6c63ff",
  },
];

export default function SecurityPage() {
  return (
    <ZonePage zone={zone}>
      {/* Educational disclaimer */}
      <div
        style={{
          background: "rgba(255, 107, 107, 0.06)",
          border: "1px solid rgba(255, 107, 107, 0.3)",
          borderRadius: 10,
          padding: "1rem 1.25rem",
          marginBottom: "2.5rem",
          fontSize: "0.875rem",
          color: "var(--text-secondary)",
          display: "flex",
          alignItems: "flex-start",
          gap: "0.75rem",
        }}
      >
        <span style={{ flexShrink: 0, fontSize: "1rem" }}>⚠️</span>
        <span>
          All content in The Citadel is <strong style={{ color: "var(--text-primary)" }}>educational only</strong>.
          {" "}Nothing here is intended to facilitate unauthorized access to systems you do not own
          or have explicit permission to test. Security knowledge is a tool — use it responsibly.
        </span>
      </div>

      {/* Module grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: "1.5rem",
          marginBottom: "3rem",
        }}
      >
        {MODULES.map(({ icon, title, phase, desc, items, color }) => (
          <div
            key={title}
            className="card"
            style={{ borderColor: `${color}22`, display: "flex", flexDirection: "column", gap: "0" }}
          >
            {/* Header */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.75rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                <span style={{ fontSize: "1.25rem" }}>{icon}</span>
                <h2 style={{ fontSize: "1rem", fontWeight: 700, color }}>{title}</h2>
              </div>
              <span
                style={{
                  fontSize: "0.65rem",
                  fontWeight: 700,
                  padding: "0.15rem 0.45rem",
                  background: `${color}15`,
                  color,
                  border: `1px solid ${color}33`,
                  borderRadius: 4,
                  whiteSpace: "nowrap",
                  letterSpacing: "0.04em",
                  flexShrink: 0,
                }}
              >
                {phase}
              </span>
            </div>

            {/* Description */}
            <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem", lineHeight: 1.65, marginBottom: "1rem", flex: 1 }}>
              {desc}
            </p>

            {/* Topic list */}
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.35rem", paddingTop: "0.75rem", borderTop: "1px solid var(--border)" }}>
              {items.map((item) => (
                <li
                  key={item}
                  style={{ fontSize: "0.8rem", color: "var(--text-muted)", display: "flex", alignItems: "center", gap: "0.4rem" }}
                >
                  <span style={{ color, fontWeight: 700, fontSize: "0.7rem" }}>›</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <p style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>
        Phase 2 and Phase 3 modules are in active development. Content will be published as it is reviewed and ready.
      </p>
    </ZonePage>
  );
}
