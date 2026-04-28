import type { Metadata } from "next";
import { ZONES, AI_DISCLOSURE_LABEL, STORE_PRODUCTS } from "@/lib/site-config";
import { ZonePage } from "@/components/ZonePage";
import Link from "next/link";

export const dynamic = "force-dynamic";

const zone = ZONES.find((z) => z.path === "/store")!;

export const metadata: Metadata = {
  title: `${zone.creativeName} — ${zone.subtitle}`,
  description: zone.description,
};

const CATEGORY_LABELS: Record<string, string> = {
  ebook: "Ebook",
  toolkit: "Toolkit",
  "prompt-pack": "Prompt Pack",
  template: "Templates",
  guide: "Guide",
  "sticker-pack": "Sticker Pack",
  wallpaper: "Wallpaper Pack",
  checklist: "Checklist",
  course: "Course",
};

const CATEGORY_COLORS: Record<string, string> = {
  ebook: "#818cf8",
  toolkit: "#34d399",
  "prompt-pack": "#fbbf24",
  template: "#38bdf8",
  guide: "#a78bfa",
  "sticker-pack": "#fb7185",
  wallpaper: "#94a3b8",
  checklist: "#4ade80",
  course: "#f97316",
};

/** All unique categories in the current catalog, in display order */
const ALL_CATEGORIES = [
  "ebook",
  "toolkit",
  "prompt-pack",
  "template",
  "guide",
  "checklist",
  "sticker-pack",
  "wallpaper",
  "course",
] as const;

/** Products available in Phase 1–2 (not Phase 3 courses) shown in main grid */
const MAIN_PRODUCTS = STORE_PRODUCTS.filter((p) => p.phase <= 2);
/** Featured products */
const FEATURED = STORE_PRODUCTS.filter((p) => p.featured);
/** Phase 3 / coming soon */
const PHASE3_PRODUCTS = STORE_PRODUCTS.filter((p) => p.phase === 3);

export default function StorePage() {
  return (
    <ZonePage zone={zone}>
      {/* AI disclosure */}
      <div
        style={{
          background: "rgba(129,140,248,0.07)",
          border: "1px solid rgba(129,140,248,0.22)",
          borderRadius: 8,
          padding: "0.75rem 1rem",
          marginBottom: "2rem",
          fontSize: "0.8rem",
          color: "var(--text-secondary)",
        }}
      >
        🤖 <em>{AI_DISCLOSURE_LABEL}</em>
      </div>

      {/* Phase notice */}
      <div
        style={{
          background: "rgba(251,191,36,0.07)",
          border: "1px solid rgba(251,191,36,0.3)",
          borderRadius: 8,
          padding: "0.75rem 1rem",
          marginBottom: "2.5rem",
          fontSize: "0.85rem",
          color: "var(--text-secondary)",
        }}
      >
        🛠️{" "}
        <strong style={{ color: "#fbbf24" }}>Phase 2 — Checkout Coming Soon.</strong>{" "}
        All products below are confirmed and in final preparation. Purchase flow
        with secure Stripe checkout launches with Phase 2. Use &ldquo;Notify Me&rdquo; to
        get notified when a product launches.
      </div>

      {/* ── Featured products ── */}
      {FEATURED.length > 0 && (
        <section style={{ marginBottom: "3rem" }}>
          <p
            style={{
              fontSize: "0.72rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              color: "var(--text-muted)",
              marginBottom: "1rem",
            }}
          >
            ★ Featured
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {FEATURED.map((product) => {
              const catColor = CATEGORY_COLORS[product.category] ?? "#818cf8";
              const catLabel = CATEGORY_LABELS[product.category] ?? product.category;
              return (
                <Link
                  key={product.id}
                  href={`/store/${product.id}`}
                  style={{ textDecoration: "none", display: "flex" }}
                >
                  <div
                    className="card"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 0,
                      flex: 1,
                      borderColor: `${catColor}44`,
                      boxShadow: `0 0 24px ${catColor}15`,
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: "0.75rem",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "0.68rem",
                          fontWeight: 700,
                          textTransform: "uppercase",
                          letterSpacing: "0.08em",
                          color: catColor,
                          background: `${catColor}18`,
                          border: `1px solid ${catColor}33`,
                          borderRadius: 4,
                          padding: "0.2rem 0.5rem",
                        }}
                      >
                        {catLabel}
                      </span>
                      {product.badge && (
                        <span
                          style={{
                            fontSize: "0.62rem",
                            fontWeight: 700,
                            padding: "0.15rem 0.4rem",
                            background: "rgba(129,140,248,0.12)",
                            color: "var(--accent)",
                            border: "1px solid rgba(129,140,248,0.2)",
                            borderRadius: 4,
                            textTransform: "uppercase",
                            letterSpacing: "0.06em",
                          }}
                        >
                          {product.badge}
                        </span>
                      )}
                    </div>

                    <h2 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.3rem", lineHeight: 1.3, color: "var(--text-primary)" }}>
                      {product.name}
                    </h2>
                    <p style={{ fontSize: "0.82rem", color: catColor, fontWeight: 500, marginBottom: "0.75rem", fontStyle: "italic" }}>
                      {product.tagline}
                    </p>
                    <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem", lineHeight: 1.6, flex: 1, marginBottom: "1.25rem" }}>
                      {product.description}
                    </p>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        paddingTop: "1rem",
                        borderTop: "1px solid var(--border)",
                      }}
                    >
                      <span style={{ fontSize: "0.85rem", color: catColor, fontWeight: 700 }}>
                        {product.priceRange ?? "TBD"}
                      </span>
                      <span style={{ fontSize: "0.8rem", color: "var(--accent)", fontWeight: 600 }}>
                        View details →
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      )}

      {/* ── Category sections ── */}
      {ALL_CATEGORIES.map((cat) => {
        const products = MAIN_PRODUCTS.filter((p) => p.category === cat);
        if (products.length === 0) return null;
        const catColor = CATEGORY_COLORS[cat] ?? "#818cf8";
        const catLabel = CATEGORY_LABELS[cat] ?? cat;
        return (
          <section key={cat} style={{ marginBottom: "3rem" }}>
            {/* Section header */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                marginBottom: "1.25rem",
                paddingBottom: "0.75rem",
                borderBottom: `1px solid ${catColor}33`,
              }}
            >
              <h2 style={{ fontSize: "1rem", fontWeight: 700, color: catColor }}>{catLabel}s</h2>
              <span
                style={{
                  fontSize: "0.65rem",
                  fontWeight: 700,
                  padding: "0.15rem 0.45rem",
                  background: `${catColor}12`,
                  color: catColor,
                  border: `1px solid ${catColor}28`,
                  borderRadius: 4,
                  letterSpacing: "0.04em",
                }}
              >
                {products.length} {products.length === 1 ? "item" : "items"}
              </span>
            </div>

            {/* Product cards */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                gap: "1.25rem",
              }}
            >
              {products.map((product) => (
                <Link
                  key={product.id}
                  href={`/store/${product.id}`}
                  style={{ textDecoration: "none", display: "flex" }}
                >
                  <div
                    className="card"
                    style={{ display: "flex", flexDirection: "column", gap: 0, flex: 1 }}
                  >
                    {/* AI badge */}
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.6rem" }}>
                      {product.badge ? (
                        <span
                          style={{
                            fontSize: "0.65rem",
                            fontWeight: 700,
                            padding: "0.15rem 0.4rem",
                            background: "rgba(129,140,248,0.12)",
                            color: "var(--accent)",
                            border: "1px solid rgba(129,140,248,0.2)",
                            borderRadius: 4,
                            textTransform: "uppercase",
                            letterSpacing: "0.06em",
                          }}
                        >
                          {product.badge}
                        </span>
                      ) : <span />}
                      {product.aiAssisted && (
                        <span style={{ fontSize: "0.62rem", color: "var(--text-muted)" }}>AI-assisted</span>
                      )}
                    </div>

                    <h3 style={{ fontSize: "0.95rem", fontWeight: 700, marginBottom: "0.3rem", lineHeight: 1.3, color: "var(--text-primary)" }}>
                      {product.name}
                    </h3>
                    <p style={{ fontSize: "0.78rem", color: catColor, fontWeight: 500, marginBottom: "0.6rem", fontStyle: "italic" }}>
                      {product.tagline}
                    </p>
                    <p style={{ color: "var(--text-secondary)", fontSize: "0.825rem", lineHeight: 1.6, flex: 1, marginBottom: "1rem" }}>
                      {product.description}
                    </p>

                    {/* Format */}
                    <p style={{ fontSize: "0.72rem", color: "var(--text-muted)", marginBottom: "0.85rem" }}>
                      📦 {product.format}
                    </p>

                    {/* Price + CTA */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        paddingTop: "0.85rem",
                        borderTop: "1px solid var(--border)",
                      }}
                    >
                      <span style={{ fontSize: "0.85rem", color: catColor, fontWeight: 700 }}>
                        {product.priceRange ?? "TBD"}
                      </span>
                      <span style={{ fontSize: "0.8rem", color: "var(--accent)", fontWeight: 600 }}>
                        Details →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        );
      })}

      {/* ── Phase 3 coming soon ── */}
      {PHASE3_PRODUCTS.length > 0 && (
        <section style={{ marginBottom: "3rem" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              marginBottom: "1.25rem",
              paddingBottom: "0.75rem",
              borderBottom: "1px solid rgba(249,115,22,0.25)",
            }}
          >
            <h2 style={{ fontSize: "1rem", fontWeight: 700, color: "#f97316" }}>
              Coming in Phase 3
            </h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: "1.25rem",
            }}
          >
            {PHASE3_PRODUCTS.map((product) => (
              <div
                key={product.id}
                className="card"
                style={{ display: "flex", flexDirection: "column", gap: 0, opacity: 0.7 }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.6rem" }}>
                  <span style={{ fontSize: "0.65rem", fontWeight: 700, color: "#f97316", textTransform: "uppercase", letterSpacing: "0.07em" }}>
                    {CATEGORY_LABELS[product.category] ?? product.category}
                  </span>
                  <span style={{ fontSize: "0.62rem", fontWeight: 700, color: "#f97316", background: "rgba(249,115,22,0.1)", border: "1px solid rgba(249,115,22,0.2)", borderRadius: 4, padding: "0.12rem 0.35rem" }}>
                    Phase 3
                  </span>
                </div>
                <h3 style={{ fontSize: "0.95rem", fontWeight: 700, marginBottom: "0.3rem", color: "var(--text-primary)" }}>
                  {product.name}
                </h3>
                <p style={{ fontSize: "0.78rem", color: "#f97316", fontStyle: "italic", marginBottom: "0.6rem" }}>
                  {product.tagline}
                </p>
                <p style={{ color: "var(--text-muted)", fontSize: "0.825rem", lineHeight: 1.6 }}>
                  {product.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── Distributor / Affiliate partnership section ── */}
      <section
        style={{
          background: "rgba(52,211,153,0.05)",
          border: "1px solid rgba(52,211,153,0.2)",
          borderRadius: 16,
          padding: "2.5rem",
          marginBottom: "2.5rem",
        }}
      >
        <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "2rem", alignItems: "center" }} className="partner-cta">
          <div>
            <p
              style={{
                fontSize: "0.7rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                color: "var(--status-ok)",
                marginBottom: "0.4rem",
              }}
            >
              Affiliate & Distributor Programme
            </p>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, marginBottom: "0.5rem" }}>
              Earn by Selling Betts Foundations Products
            </h2>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: 1.65, maxWidth: 560 }}>
              All{" "}
              <strong style={{ color: "var(--text-primary)" }}>
                {STORE_PRODUCTS.filter((p) => p.affiliateEnabled).length} products
              </strong>{" "}
              in the StoreX catalogue are eligible for affiliate resale. Earn a
              commission on every sale you refer or distribute. The affiliate
              programme launches with Phase 2. Register your interest now to be
              notified first.
            </p>
            <ul style={{ listStyle: "none", marginTop: "1rem", display: "flex", flexDirection: "column", gap: "0.35rem" }}>
              {[
                "Commission on every referred sale",
                "Unique referral links per affiliate",
                "Dashboard with sales analytics (Phase 2)",
                "Distributor tier for volume sellers",
              ].map((f) => (
                <li key={f} style={{ fontSize: "0.85rem", color: "var(--text-secondary)", display: "flex", gap: "0.5rem" }}>
                  <span style={{ color: "var(--status-ok)", fontWeight: 700 }}>✓</span> {f}
                </li>
              ))}
            </ul>
          </div>
          <Link
            href="/contact"
            style={{
              display: "inline-block",
              padding: "0.8rem 1.75rem",
              background: "var(--status-ok)",
              color: "#0c0d11",
              borderRadius: 10,
              fontWeight: 800,
              fontSize: "0.9rem",
              textDecoration: "none",
              whiteSpace: "nowrap",
            }}
          >
            Register Interest →
          </Link>
        </div>
      </section>

      <p style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>
        All digital products are subject to our{" "}
        <Link href="/legal/terms" style={{ color: "var(--accent)" }}>Terms of Service</Link>.
        All sales are final. Downloads expire after 72 hours (5 download limit per purchase).
      </p>

      <style>{`
        @media (max-width: 640px) {
          .partner-cta {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </ZonePage>
  );
}

