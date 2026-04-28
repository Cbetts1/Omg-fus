import type { Metadata } from "next";
import { ZONES, AI_DISCLOSURE_LABEL } from "@/lib/site-config";
import { ZonePage } from "@/components/ZonePage";

export const dynamic = "force-dynamic";

const zone = ZONES.find((z) => z.path === "/knowledge")!;

export const metadata: Metadata = {
  title: `${zone.creativeName} — ${zone.subtitle}`,
  description: zone.description,
};

interface ArticleStub {
  title: string;
  excerpt: string;
  readTime: string;
  tags: string[];
  aiAssisted?: boolean;
}

interface CategorySection {
  name: string;
  icon: string;
  color: string;
  articles: ArticleStub[];
}

const CATEGORIES: CategorySection[] = [
  {
    name: "AI Automation",
    icon: "🤖",
    color: "#6c63ff",
    articles: [
      {
        title: "Designing AI Workflows That Don't Break at 3am",
        excerpt: "Most AI automation fails in production for predictable reasons. Here's how to design pipelines that survive real operational conditions — error handling, retry logic, and graceful degradation.",
        readTime: "12 min",
        tags: ["automation", "production", "reliability"],
      },
      {
        title: "When to Use an Agent vs a Simple Chain",
        excerpt: "The difference between a chain and an agent is more than architecture — it's a decision about where judgment lives. This guide maps the trade-offs clearly.",
        readTime: "8 min",
        tags: ["agents", "architecture", "reasoning"],
        aiAssisted: true,
      },
      {
        title: "Prompt Engineering for Operators: Beyond One-Liners",
        excerpt: "Effective prompts for real tasks are not short. This is a field guide to structuring multi-part prompts that stay consistent across sessions.",
        readTime: "15 min",
        tags: ["prompts", "operators", "workflow"],
      },
    ],
  },
  {
    name: "Security & Threat Models",
    icon: "🛡️",
    color: "#ff6b6b",
    articles: [
      {
        title: "STRIDE for Solo Operators: A Practical Introduction",
        excerpt: "Threat modeling isn't just for enterprise security teams. This walkthrough applies STRIDE to a single-person infrastructure — VPS, web app, and data in flight.",
        readTime: "14 min",
        tags: ["threat-modeling", "STRIDE", "VPS"],
      },
      {
        title: "What Actually Gets Exploited on a Public VPS",
        excerpt: "Based on real honeypot data and operator experience — the actual attacks that happen on public servers in the first 48 hours, and exactly how to stop them.",
        readTime: "10 min",
        tags: ["VPS", "hardening", "real-world"],
      },
      {
        title: "SSH Hardening: The Complete Operator Checklist",
        excerpt: "Key-only auth is just the start. This covers the full SSH hardening checklist — from fail2ban to port knocking to host-based access control.",
        readTime: "11 min",
        tags: ["SSH", "hardening", "checklist"],
      },
    ],
  },
  {
    name: "Developer Tools",
    icon: "🔧",
    color: "#00d4ff",
    articles: [
      {
        title: "Git Aliases That Actually Save Time",
        excerpt: "A curated set of git aliases built from real daily use — not the obvious ones you've seen before. These reduce keystrokes where it counts.",
        readTime: "6 min",
        tags: ["git", "productivity", "CLI"],
      },
      {
        title: "Pre-commit Hooks: Your Last Line of Defence Before Push",
        excerpt: "A well-configured pre-commit hook suite catches secrets, type errors, and lint failures before they reach the remote. Here's how to build one that doesn't slow you down.",
        readTime: "9 min",
        tags: ["git", "linting", "security"],
        aiAssisted: true,
      },
      {
        title: "Environment Variable Management Across Dev, Staging, and Prod",
        excerpt: "The patterns that actually work for managing secrets and config across multiple environments — without accidental production leaks.",
        readTime: "10 min",
        tags: ["env", "secrets", "deployment"],
      },
    ],
  },
  {
    name: "Productivity Systems",
    icon: "📋",
    color: "#ffd166",
    articles: [
      {
        title: "The Operator's Weekly Review",
        excerpt: "A structured weekly review process designed for people who run infrastructure and build products simultaneously. Covers project tracking, system health, and decision hygiene.",
        readTime: "8 min",
        tags: ["productivity", "review", "systems"],
      },
      {
        title: "PARA for Technical Operators",
        excerpt: "The PARA method adapted for people who manage servers, code, and clients at the same time. Projects, Areas, Resources, Archives — with real examples.",
        readTime: "10 min",
        tags: ["PARA", "knowledge-management", "Obsidian"],
      },
      {
        title: "Building a Second Brain Without the Overhead",
        excerpt: "A minimal-overhead approach to knowledge management that actually sticks — no elaborate tagging systems, no daily maintenance burden.",
        readTime: "7 min",
        tags: ["PKM", "notes", "workflow"],
        aiAssisted: true,
      },
    ],
  },
  {
    name: "Operator Workflows",
    icon: "⚡",
    color: "#06d6a0",
    articles: [
      {
        title: "Running a Side Project Like a Business from Day One",
        excerpt: "The operational decisions that matter before you have revenue — documentation, backups, monitoring, and the mindset shifts that prevent expensive mistakes.",
        readTime: "13 min",
        tags: ["operations", "solo", "bootstrapping"],
      },
      {
        title: "Incident Response for Solo Operators",
        excerpt: "When something breaks at 2am and you're the only one on call, structured thinking matters more than experience. A repeatable incident response process for individuals.",
        readTime: "9 min",
        tags: ["incidents", "on-call", "process"],
      },
      {
        title: "Automation Debt: When Scripts Become a Liability",
        excerpt: "The point where automation helps becomes the point where it hides problems. Recognising automation debt before it compounds.",
        readTime: "7 min",
        tags: ["automation", "technical-debt", "maintenance"],
      },
    ],
  },
  {
    name: "Infrastructure & VPS",
    icon: "🖥️",
    color: "#9b72cf",
    articles: [
      {
        title: "Setting Up a Production VPS from Zero: The Real Checklist",
        excerpt: "Everything that needs to happen before a VPS is production-ready — not just the obvious steps. Based on actual setup experience, including the steps most tutorials skip.",
        readTime: "20 min",
        tags: ["VPS", "production", "checklist"],
      },
      {
        title: "Docker Compose for Single-Server Deployments",
        excerpt: "Kubernetes is not always the answer. Docker Compose on a single well-configured VPS handles most workloads reliably and with far less operational complexity.",
        readTime: "15 min",
        tags: ["Docker", "Compose", "deployment"],
      },
      {
        title: "NGINX as a Reverse Proxy: The Configuration That Actually Holds",
        excerpt: "A production NGINX config with TLS, rate limiting, security headers, and caching — explained line by line, with the reasoning behind each decision.",
        readTime: "16 min",
        tags: ["NGINX", "TLS", "security-headers"],
      },
    ],
  },
  {
    name: "AURA OS Architecture",
    icon: "◈",
    color: "#6c63ff",
    articles: [
      {
        title: "What AURA Is and Why It Exists",
        excerpt: "A plain-language explanation of the AURA reasoning core — what it does, how it fits into the VAGA/AIOS system, and why the architecture treats AI as an organism rather than a service.",
        readTime: "10 min",
        tags: ["AURA", "VAGA", "architecture"],
      },
      {
        title: "VAGA Component Breakdown: From VPS to Mobile Form",
        excerpt: "A technical walkthrough of each VAGA component — AURA, AIOS, OSAI, ARROW, AIM, ASTRA, and NOVA — explaining how they interact and what each one is responsible for.",
        readTime: "18 min",
        tags: ["VAGA", "AIOS", "system-design"],
      },
      {
        title: "Sovereign AI: The Design Principles Behind VAGA",
        excerpt: "Sovereignty, portability, transparency, repairability, public access — what these five principles mean in practice, and how they shape every design decision in the VAGA architecture.",
        readTime: "12 min",
        tags: ["sovereignty", "principles", "design"],
      },
    ],
  },
  {
    name: "Case Studies & Breakdowns",
    icon: "🔍",
    color: "#ff6b6b",
    articles: [
      {
        title: "Recovering a Corrupted Server Directory: What Actually Works",
        excerpt: "A real-world account of recovering a broken server environment after directory corruption — the steps that work, the steps that make it worse, and what to do differently next time.",
        readTime: "14 min",
        tags: ["recovery", "disaster", "real-world"],
      },
      {
        title: "Building a Platform on a Phone: What I Learned Working Mobile-First",
        excerpt: "The constraints of building a full-stack platform from a phone forced specific decisions about tooling, documentation, and architecture. Here's what I learned.",
        readTime: "11 min",
        tags: ["mobile", "constraints", "building"],
      },
      {
        title: "Why Most AI Agents Fail in Production (and How to Fix It)",
        excerpt: "A breakdown of the most common reasons AI agent deployments fail — context loss, error cascades, prompt drift — with practical mitigations for each.",
        readTime: "16 min",
        tags: ["agents", "production", "failures"],
        aiAssisted: true,
      },
    ],
  },
];

export default function KnowledgePage() {
  return (
    <ZonePage zone={zone}>
      {/* AI disclosure */}
      <div
        style={{
          background: "rgba(108,99,255,0.07)",
          border: "1px solid rgba(108,99,255,0.25)",
          borderRadius: 8,
          padding: "0.75rem 1rem",
          marginBottom: "2.5rem",
          fontSize: "0.8rem",
          color: "var(--text-secondary)",
        }}
      >
        🤖 <em>{AI_DISCLOSURE_LABEL}</em>
      </div>

      {/* Publishing notice */}
      <div
        style={{
          background: "rgba(255,209,102,0.07)",
          border: "1px solid rgba(255,209,102,0.3)",
          borderRadius: 8,
          padding: "0.75rem 1rem",
          marginBottom: "3rem",
          fontSize: "0.85rem",
          color: "var(--text-secondary)",
        }}
      >
        📝{" "}
        <strong style={{ color: "#ffd166" }}>Articles are in preparation.</strong>{" "}
        The articles listed here represent confirmed topics currently being written and reviewed. Full text publishes on launch.
      </div>

      {/* Category sections */}
      <div style={{ display: "flex", flexDirection: "column", gap: "3.5rem" }}>
        {CATEGORIES.map(({ name, icon, color, articles }) => (
          <section key={name}>
            {/* Category header */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.6rem",
                marginBottom: "1.25rem",
                paddingBottom: "0.75rem",
                borderBottom: `1px solid ${color}33`,
              }}
            >
              <span style={{ fontSize: "1.1rem" }}>{icon}</span>
              <h2 style={{ fontSize: "1.05rem", fontWeight: 700, color }}>{name}</h2>
              <span
                style={{
                  marginLeft: "auto",
                  fontSize: "0.75rem",
                  color: "var(--text-muted)",
                  fontWeight: 500,
                }}
              >
                {articles.length} articles
              </span>
            </div>

            {/* Article cards */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                gap: "1rem",
              }}
            >
              {articles.map(({ title, excerpt, readTime, tags, aiAssisted }) => (
                <div
                  key={title}
                  className="card"
                  style={{ display: "flex", flexDirection: "column", gap: 0, cursor: "default" }}
                >
                  {/* Meta row */}
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.6rem" }}>
                    <span style={{ fontSize: "0.72rem", color: "var(--text-muted)" }}>⏱ {readTime} read</span>
                    {aiAssisted && (
                      <span
                        style={{
                          fontSize: "0.65rem",
                          padding: "0.1rem 0.35rem",
                          background: "rgba(108,99,255,0.1)",
                          color: "var(--accent)",
                          border: "1px solid rgba(108,99,255,0.2)",
                          borderRadius: 3,
                          marginLeft: "auto",
                        }}
                      >
                        AI-assisted
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3
                    style={{
                      fontSize: "0.95rem",
                      fontWeight: 700,
                      lineHeight: 1.35,
                      marginBottom: "0.5rem",
                      color: "var(--text-primary)",
                    }}
                  >
                    {title}
                  </h3>

                  {/* Excerpt */}
                  <p
                    style={{
                      color: "var(--text-secondary)",
                      fontSize: "0.825rem",
                      lineHeight: 1.65,
                      flex: 1,
                      marginBottom: "0.9rem",
                    }}
                  >
                    {excerpt}
                  </p>

                  {/* Tags */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem", paddingTop: "0.75rem", borderTop: "1px solid var(--border)" }}>
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          fontSize: "0.68rem",
                          padding: "0.15rem 0.45rem",
                          background: `${color}12`,
                          color,
                          borderRadius: 3,
                          fontWeight: 500,
                        }}
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </ZonePage>
  );
}
