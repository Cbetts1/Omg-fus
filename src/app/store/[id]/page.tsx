import type { Metadata } from "next";
import { STORE_PRODUCTS, SITE_NAME, AI_DISCLOSURE_LABEL } from "@/lib/site-config";
import Link from "next/link";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

interface Params {
  id: string;
}

/** Pre-generate a page for each product at build time */
export function generateStaticParams(): Params[] {
  return STORE_PRODUCTS.map((p) => ({ id: p.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { id } = await params;
  const product = STORE_PRODUCTS.find((p) => p.id === id);
  if (!product) return { title: "Product Not Found" };
  return {
    title: `${product.name} — StoreX · ${SITE_NAME}`,
    description: product.tagline,
  };
}

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

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { id } = await params;
  const product = STORE_PRODUCTS.find((p) => p.id === id);
  if (!product) notFound();

  const catColor = CATEGORY_COLORS[product.category] ?? "#818cf8";
  const catLabel = CATEGORY_LABELS[product.category] ?? product.category;

  return (
    <div style={{ maxWidth: 1280, margin: "0 auto", padding: "3rem 1.5rem 5rem" }}>
      {/* Breadcrumb */}
      <nav style={{ marginBottom: "2rem", fontSize: "0.85rem", color: "var(--text-muted)" }}>
        <Link href="/" style={{ color: "var(--text-muted)" }}>Home</Link>
        {" "}›{" "}
        <Link href="/store" style={{ color: "var(--text-muted)" }}>StoreX</Link>
        {" "}›{" "}
        <span style={{ color: "var(--text-secondary)" }}>{product.name}</span>
      </nav>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 340px",
          gap: "3rem",
          alignItems: "start",
        }}
        className="product-layout"
      >
        {/* ── Left — product details ── */}
        <div>
          {/* Category + badge row */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "1rem", flexWrap: "wrap" }}>
            <span
              style={{
                fontSize: "0.7rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.09em",
                color: catColor,
                background: `${catColor}18`,
                border: `1px solid ${catColor}33`,
                borderRadius: 4,
                padding: "0.2rem 0.55rem",
              }}
            >
              {catLabel}
            </span>
            {product.badge && (
              <span
                style={{
                  fontSize: "0.65rem",
                  fontWeight: 700,
                  padding: "0.2rem 0.45rem",
                  background: "rgba(129,140,248,0.12)",
                  color: "var(--accent)",
                  border: "1px solid rgba(129,140,248,0.22)",
                  borderRadius: 4,
                  textTransform: "uppercase",
                  letterSpacing: "0.07em",
                }}
              >
                {product.badge}
              </span>
            )}
            {product.aiAssisted && (
              <span
                style={{
                  fontSize: "0.65rem",
                  padding: "0.2rem 0.45rem",
                  background: "rgba(129,140,248,0.08)",
                  color: "var(--text-muted)",
                  border: "1px solid var(--border)",
                  borderRadius: 4,
                }}
              >
                AI-assisted
              </span>
            )}
          </div>

          {/* Title */}
          <h1
            style={{
              fontSize: "clamp(1.5rem, 4vw, 2.4rem)",
              fontWeight: 900,
              letterSpacing: "-0.02em",
              lineHeight: 1.15,
              marginBottom: "0.6rem",
              background: `linear-gradient(135deg, var(--silver-bright) 0%, ${catColor} 100%)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {product.name}
          </h1>

          {/* Tagline */}
          <p
            style={{
              fontSize: "1.1rem",
              color: catColor,
              fontWeight: 500,
              marginBottom: "1.5rem",
              fontStyle: "italic",
            }}
          >
            {product.tagline}
          </p>

          {/* Description */}
          <p
            style={{
              color: "var(--text-secondary)",
              fontSize: "1rem",
              lineHeight: 1.75,
              marginBottom: "2rem",
              maxWidth: 680,
            }}
          >
            {product.description}
          </p>

          {/* What's included */}
          <section style={{ marginBottom: "2rem" }}>
            <h2
              style={{
                fontSize: "0.75rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "var(--text-muted)",
                marginBottom: "1rem",
              }}
            >
              What&apos;s Included
            </h2>
            <div
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                borderRadius: 12,
                padding: "1.25rem 1.5rem",
              }}
            >
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                {product.includes.map((item) => (
                  <li
                    key={item}
                    style={{
                      fontSize: "0.9rem",
                      color: "var(--text-secondary)",
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "0.6rem",
                    }}
                  >
                    <span style={{ color: catColor, fontWeight: 700, flexShrink: 0, marginTop: "0.05rem" }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Format */}
          <p
            style={{
              fontSize: "0.875rem",
              color: "var(--text-muted)",
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
            }}
          >
            <span>📦</span>
            <strong style={{ color: "var(--text-secondary)" }}>Delivery format:</strong>{" "}
            {product.format}
          </p>

          {/* AI disclosure if applicable */}
          {product.aiAssisted && (
            <div
              style={{
                marginTop: "2rem",
                background: "rgba(129,140,248,0.06)",
                border: "1px solid rgba(129,140,248,0.2)",
                borderRadius: 8,
                padding: "0.75rem 1rem",
                fontSize: "0.8rem",
                color: "var(--text-muted)",
              }}
            >
              🤖 {AI_DISCLOSURE_LABEL}
            </div>
          )}

          {/* Affiliate / distributor callout */}
          {product.affiliateEnabled && (
            <div
              style={{
                marginTop: "1.5rem",
                background: "rgba(52,211,153,0.05)",
                border: "1px solid rgba(52,211,153,0.2)",
                borderRadius: 8,
                padding: "0.75rem 1rem",
                fontSize: "0.85rem",
                color: "var(--text-secondary)",
              }}
            >
              🤝{" "}
              <strong style={{ color: "var(--status-ok)" }}>Affiliate programme available.</strong>{" "}
              This product is eligible for our affiliate and distributor resale programme launching in Phase 2.{" "}
              <Link href="/contact" style={{ color: "var(--accent)" }}>
                Contact us to register interest.
              </Link>
            </div>
          )}
        </div>

        {/* ── Right — purchase card ── */}
        <div
          style={{
            position: "sticky",
            top: "80px",
          }}
        >
          <div
            style={{
              background: "var(--bg-card)",
              border: `1px solid ${catColor}33`,
              borderRadius: 16,
              padding: "1.75rem",
              boxShadow: `0 0 32px rgba(129,140,248,0.1)`,
            }}
          >
            {/* Price */}
            <div style={{ marginBottom: "1.25rem" }}>
              {product.priceRange ? (
                <>
                  <p style={{ fontSize: "0.72rem", color: "var(--text-muted)", marginBottom: "0.2rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                    Estimated price
                  </p>
                  <p style={{ fontSize: "2rem", fontWeight: 900, color: catColor }}>
                    {product.priceRange}
                  </p>
                  <p style={{ fontSize: "0.75rem", color: "var(--text-muted)", fontStyle: "italic" }}>
                    Final price set before Phase 2 launch
                  </p>
                </>
              ) : (
                <p style={{ fontSize: "1.1rem", color: "var(--text-muted)", fontStyle: "italic" }}>
                  Price TBD (Phase 2)
                </p>
              )}
            </div>

            {/* Phase indicator */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                marginBottom: "1.25rem",
                padding: "0.6rem 0.9rem",
                background: product.phase === 1 ? "rgba(52,211,153,0.08)" : "rgba(129,140,248,0.08)",
                border: `1px solid ${product.phase === 1 ? "rgba(52,211,153,0.25)" : "rgba(129,140,248,0.2)"}`,
                borderRadius: 8,
                fontSize: "0.8rem",
                color: product.phase === 1 ? "var(--status-ok)" : "var(--accent)",
              }}
            >
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: "currentColor", flexShrink: 0, display: "inline-block" }} />
              {product.phase === 1
                ? "Available on launch"
                : product.phase === 2
                ? "Available in Phase 2 (checkout coming soon)"
                : "Available in Phase 3"}
            </div>

            {/* CTA */}
            <Link
              href="/contact"
              style={{
                display: "block",
                textAlign: "center",
                padding: "0.85rem",
                background: "var(--accent)",
                color: "#fff",
                borderRadius: 10,
                fontWeight: 700,
                fontSize: "0.95rem",
                marginBottom: "0.75rem",
              }}
            >
              Notify Me When Available
            </Link>
            <Link
              href="/store"
              style={{
                display: "block",
                textAlign: "center",
                padding: "0.7rem",
                background: "transparent",
                color: "var(--text-secondary)",
                border: "1px solid var(--border)",
                borderRadius: 10,
                fontWeight: 600,
                fontSize: "0.875rem",
              }}
            >
              ← Back to StoreX
            </Link>

            {/* Trust signals */}
            <ul
              style={{
                listStyle: "none",
                marginTop: "1.5rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.4rem",
              }}
            >
              {[
                "🔒 Secure checkout (Phase 2)",
                "📁 Instant digital delivery",
                "⏱ 72-hour download links",
                "📥 5 downloads per purchase",
              ].map((t) => (
                <li key={t} style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Related products */}
      <section style={{ marginTop: "4rem" }}>
        <h2
          style={{
            fontSize: "0.8rem",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            color: "var(--text-muted)",
            marginBottom: "1.25rem",
          }}
        >
          More from StoreX
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: "1rem",
          }}
        >
          {STORE_PRODUCTS.filter((p) => p.id !== product.id && p.phase <= 2)
            .slice(0, 3)
            .map((related) => {
              const rc = CATEGORY_COLORS[related.category] ?? "#818cf8";
              return (
                <Link
                  key={related.id}
                  href={`/store/${related.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <div className="card" style={{ borderColor: `${rc}22` }}>
                    <span
                      style={{
                        fontSize: "0.65rem",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "0.07em",
                        color: rc,
                        display: "block",
                        marginBottom: "0.4rem",
                      }}
                    >
                      {CATEGORY_LABELS[related.category]}
                    </span>
                    <p style={{ fontWeight: 700, fontSize: "0.9rem", marginBottom: "0.3rem" }}>
                      {related.name}
                    </p>
                    <p style={{ color: "var(--text-muted)", fontSize: "0.8rem" }}>{related.tagline}</p>
                  </div>
                </Link>
              );
            })}
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .product-layout {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
