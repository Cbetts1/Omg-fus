import type { Metadata } from "next";
import { ZONES, SUPPORT_EMAIL, LEGAL_EMAIL, FOUNDER_NAME } from "@/lib/site-config";
import { ZonePage } from "@/components/ZonePage";

export const dynamic = "force-dynamic";

const zone = ZONES.find((z) => z.path === "/contact")!;

export const metadata: Metadata = {
  title: zone.subtitle,
  description: zone.description,
};

const CONTACT_CHANNELS = [
  {
    icon: "🛠️",
    title: "Technical Support",
    subtitle: "Product & access issues",
    desc: "For questions about products you have purchased, download issues, access problems, or technical help with the platform.",
    email: SUPPORT_EMAIL,
    color: "#818cf8",
  },
  {
    icon: "⚖️",
    title: "Legal & Privacy",
    subtitle: "Data requests & inquiries",
    desc: "For data access or deletion requests, privacy concerns, copyright matters, and any other legal or compliance inquiries.",
    email: LEGAL_EMAIL,
    color: "#38bdf8",
  },
  {
    icon: "🤝",
    title: "Partnerships & Collaboration",
    subtitle: "Work together",
    desc: "Interested in collaborating, contributing to the ecosystem, or discussing infrastructure partnerships? Reach out to support — include \u201cPartnership\u201d in the subject line.",
    email: SUPPORT_EMAIL,
    color: "#06d6a0",
  },
  {
    icon: "📣",
    title: "Press & Media",
    subtitle: "Coverage & interviews",
    desc: "For press inquiries, interview requests, and media coverage of Betts Foundations or the VAGA/AIOS project. Include \u201cPress\u201d in the subject line.",
    email: SUPPORT_EMAIL,
    color: "#ffd166",
  },
];

export default function ContactPage() {
  return (
    <ZonePage zone={zone}>
      {/* Intro */}
      <p
        style={{
          color: "var(--text-secondary)",
          fontSize: "1rem",
          lineHeight: 1.7,
          maxWidth: 600,
          marginBottom: "2.5rem",
        }}
      >
        Betts Foundations is a small, independent operation built by {FOUNDER_NAME}. Response times
        reflect that reality — but every message is read personally.
      </p>

      {/* Contact channels */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "1.25rem",
          marginBottom: "3rem",
        }}
      >
        {CONTACT_CHANNELS.map(({ icon, title, subtitle, desc, email, color }) => (
          <div
            key={title}
            className="card"
            style={{ borderColor: `${color}22`, display: "flex", flexDirection: "column" }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.35rem" }}>
              <span style={{ fontSize: "1.2rem" }}>{icon}</span>
              <div>
                <h2 style={{ fontSize: "1rem", fontWeight: 700, color }}>{title}</h2>
                <p style={{ fontSize: "0.72rem", color: "var(--text-muted)", fontWeight: 500 }}>{subtitle}</p>
              </div>
            </div>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.85rem", lineHeight: 1.65, flex: 1, marginBottom: "1rem" }}>
              {desc}
            </p>
            <a
              href={`mailto:${email}`}
              style={{
                color: color,
                fontWeight: 600,
                fontSize: "0.875rem",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.35rem",
                paddingTop: "0.75rem",
                borderTop: "1px solid var(--border)",
              }}
            >
              {email} →
            </a>
          </div>
        ))}
      </div>

      {/* Response time note */}
      <div
        style={{
          background: "rgba(129,140,248,0.06)",
          border: "1px solid rgba(129,140,248,0.2)",
          borderRadius: 10,
          padding: "1.25rem 1.5rem",
          maxWidth: 600,
        }}
      >
        <p style={{ fontWeight: 600, fontSize: "0.9rem", marginBottom: "0.4rem" }}>Response Times</p>
        <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem", lineHeight: 1.65 }}>
          Support and general inquiries are typically answered within <strong style={{ color: "var(--text-primary)" }}>1–3 business days</strong>.
          Legal and privacy requests are handled within the timeframes required by applicable law.
          During active development phases, response times may extend slightly.
        </p>
      </div>
    </ZonePage>
  );
}
