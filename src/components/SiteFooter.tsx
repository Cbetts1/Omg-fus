import Link from "next/link";
import {
  SITE_NAME,
  SITE_TAGLINE,
  UTILITY_NAV_ZONES,
  LEGAL_EMAIL,
  SUPPORT_EMAIL,
} from "@/lib/site-config";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        background: "var(--bg-card)",
        padding: "2.5rem 1.5rem",
        marginTop: "auto",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "2rem",
        }}
      >
        {/* Brand column */}
        <div>
          <p
            style={{ fontWeight: 700, fontSize: "1rem", marginBottom: "0.5rem" }}
          >
            {SITE_NAME}
          </p>
          <p style={{ color: "var(--text-muted)", fontSize: "0.875rem" }}>
            {SITE_TAGLINE}
          </p>
        </div>

        {/* Utility links */}
        <div>
          <p
            style={{
              fontWeight: 600,
              fontSize: "0.8rem",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              color: "var(--text-muted)",
              marginBottom: "0.75rem",
            }}
          >
            Company
          </p>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
            {UTILITY_NAV_ZONES.map((zone) => (
              <li key={zone.path}>
                <Link
                  href={zone.path}
                  style={{ fontSize: "0.875rem", color: "var(--text-secondary)" }}
                >
                  {zone.subtitle}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal links */}
        <div>
          <p
            style={{
              fontWeight: 600,
              fontSize: "0.8rem",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              color: "var(--text-muted)",
              marginBottom: "0.75rem",
            }}
          >
            Legal
          </p>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
            <li>
              <Link href="/legal/privacy" style={{ fontSize: "0.875rem", color: "var(--text-secondary)" }}>
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/legal/terms" style={{ fontSize: "0.875rem", color: "var(--text-secondary)" }}>
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="/legal/ai-disclosure" style={{ fontSize: "0.875rem", color: "var(--text-secondary)" }}>
                AI Disclosure
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p
            style={{
              fontWeight: 600,
              fontSize: "0.8rem",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              color: "var(--text-muted)",
              marginBottom: "0.75rem",
            }}
          >
            Contact
          </p>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
            <li>
              <a
                href={`mailto:${SUPPORT_EMAIL}`}
                style={{ fontSize: "0.875rem", color: "var(--text-secondary)" }}
              >
                {SUPPORT_EMAIL}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${LEGAL_EMAIL}`}
                style={{ fontSize: "0.875rem", color: "var(--text-muted)" }}
              >
                Legal / Privacy
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div
        style={{
          maxWidth: 1280,
          margin: "2rem auto 0",
          paddingTop: "1.5rem",
          borderTop: "1px solid var(--border)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "0.5rem",
          fontSize: "0.8rem",
          color: "var(--text-muted)",
        }}
      >
        <span>
          © {currentYear} {SITE_NAME}. All rights reserved.
        </span>
        <span>
          AI-assisted content may appear on this site.{" "}
          <Link href="/legal/ai-disclosure" style={{ color: "var(--text-muted)" }}>
            Learn more
          </Link>
        </span>
      </div>
    </footer>
  );
}
