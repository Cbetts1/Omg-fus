import type { Metadata } from "next";
import { ZONES, SUPPORT_EMAIL, LEGAL_EMAIL } from "@/lib/site-config";
import { ZonePage } from "@/components/ZonePage";

export const dynamic = "force-dynamic";

const zone = ZONES.find((z) => z.path === "/contact")!;

export const metadata: Metadata = {
  title: zone.subtitle,
  description: zone.description,
};

export default function ContactPage() {
  return (
    <ZonePage zone={zone}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem", maxWidth: 800 }}>
        <div className="card">
          <h2 style={{ fontSize: "1.1rem", marginBottom: "0.5rem" }}>General Support</h2>
          <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", marginBottom: "1rem" }}>
            For product questions, access issues, and technical help.
          </p>
          <a href={`mailto:${SUPPORT_EMAIL}`} style={{ color: "var(--accent)", fontWeight: 600 }}>
            {SUPPORT_EMAIL}
          </a>
        </div>
        <div className="card">
          <h2 style={{ fontSize: "1.1rem", marginBottom: "0.5rem" }}>Legal & Privacy</h2>
          <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", marginBottom: "1rem" }}>
            Data requests, privacy inquiries, and legal matters.
          </p>
          <a href={`mailto:${LEGAL_EMAIL}`} style={{ color: "var(--accent)", fontWeight: 600 }}>
            {LEGAL_EMAIL}
          </a>
        </div>
      </div>
    </ZonePage>
  );
}
