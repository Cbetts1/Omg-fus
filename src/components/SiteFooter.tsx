import Link from "next/link";
import {
  SITE_NAME,
  SITE_TAGLINE,
  LEGAL_EMAIL,
  SUPPORT_EMAIL,
  FOUNDER_NAME,
} from "@/lib/site-config";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        background: "var(--bg-card)",
        padding: "3rem 1.5rem 2rem",
        marginTop: "auto",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "2fr repeat(3, 1fr)",
          gap: "2.5rem",
        }}
        className="footer-grid"
      >
        {/* Brand column */}
        <div>
          <p style={{ fontWeight: 800, fontSize: "1.05rem", marginBottom: "0.35rem", letterSpacing: "-0.01em" }}>
            {SITE_NAME}
          </p>
          <p style={{ color: "var(--text-muted)", fontSize: "0.85rem", marginBottom: "1rem" }}>
            {SITE_TAGLINE}
          </p>
          <p style={{ color: "var(--text-muted)", fontSize: "0.8rem", lineHeight: 1.6, maxWidth: 280 }}>
            Building the world's first public-use AI infrastructure. Open, sovereign, and free by design.
          </p>
          <p style={{ marginTop: "1rem", color: "var(--text-muted)", fontSize: "0.78rem" }}>
            Founded by{" "}
            <Link href="/founder" style={{ color: "var(--text-secondary)", fontWeight: 500 }}>
              {FOUNDER_NAME}
            </Link>
          </p>
        </div>

        {/* Platform links */}
        <div>
          <p
            style={{
              fontWeight: 600,
              fontSize: "0.75rem",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "var(--text-muted)",
              marginBottom: "0.9rem",
            }}
          >
            Platform
          </p>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            {[
              { href: "/ai-lab", label: "The Forge" },
              { href: "/security", label: "The Citadel" },
              { href: "/store", label: "StoreX" },
              { href: "/tools", label: "Tools Hub" },
              { href: "/knowledge", label: "The Archives" },
              { href: "/vision", label: "The Vision" },
            ].map(({ href, label }) => (
              <li key={href}>
                <Link href={href} style={{ fontSize: "0.875rem", color: "var(--text-secondary)" }}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company / utility links */}
        <div>
          <p
            style={{
              fontWeight: 600,
              fontSize: "0.75rem",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "var(--text-muted)",
              marginBottom: "0.9rem",
            }}
          >
            Company
          </p>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            {[
              { href: "/founder", label: "The Architect" },
              { href: "/pricing", label: "Pricing" },
              { href: "/contact", label: "Contact" },
              { href: "/support", label: "Support" },
              { href: "/status", label: "System Status" },
            ].map(({ href, label }) => (
              <li key={href}>
                <Link href={href} style={{ fontSize: "0.875rem", color: "var(--text-secondary)" }}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal + Contact */}
        <div>
          <p
            style={{
              fontWeight: 600,
              fontSize: "0.75rem",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "var(--text-muted)",
              marginBottom: "0.9rem",
            }}
          >
            Legal
          </p>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "1.25rem" }}>
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
          <p
            style={{
              fontWeight: 600,
              fontSize: "0.75rem",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "var(--text-muted)",
              marginBottom: "0.6rem",
            }}
          >
            Contact
          </p>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
            <li>
              <a href={`mailto:${SUPPORT_EMAIL}`} style={{ fontSize: "0.825rem", color: "var(--text-secondary)" }}>
                {SUPPORT_EMAIL}
              </a>
            </li>
            <li>
              <a href={`mailto:${LEGAL_EMAIL}`} style={{ fontSize: "0.825rem", color: "var(--text-muted)" }}>
                Legal enquiries
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
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
          gap: "0.75rem",
          fontSize: "0.78rem",
          color: "var(--text-muted)",
        }}
      >
        <span>
          © {currentYear} {SITE_NAME}. All rights reserved.
        </span>
        <span>
          AI-assisted content may appear on this site.{" "}
          <Link href="/legal/ai-disclosure" style={{ color: "var(--text-muted)", textDecoration: "underline" }}>
            Learn more
          </Link>
        </span>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 480px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
