import type { Metadata } from "next";
import { ZONES } from "@/lib/site-config";
import { ZonePage } from "@/components/ZonePage";

export const dynamic = "force-dynamic";

const zone = ZONES.find((z) => z.path === "/tools")!;

export const metadata: Metadata = {
  title: `${zone.creativeName} — ${zone.subtitle}`,
  description: zone.description,
};

const TOOL_CATEGORIES = [
  {
    icon: "⚙️",
    title: "System Scripts",
    phase: "Phase 1",
    color: "#06d6a0",
    desc: "Bash, Python, and PowerShell utilities for daily operator tasks. Written for real environments — not toy examples.",
    tools: [
      { name: "VPS Hardening Script", desc: "Single-run server hardening for AlmaLinux and Ubuntu. SSH keys, firewall, Fail2Ban, system limits." },
      { name: "Backup Automator", desc: "Cron-ready backup script with remote sync, compression, and retention management." },
      { name: "Process Monitor", desc: "Lightweight daemon monitor that restarts failed services and logs incidents." },
      { name: "Log Triage", desc: "Bash utility to surface critical auth and system log events with configurable filtering." },
    ],
  },
  {
    icon: "🗂️",
    title: "Productivity Systems",
    phase: "Phase 1",
    color: "#818cf8",
    desc: "Structured templates for knowledge management, project tracking, and operator workflows. Built around real operational patterns.",
    tools: [
      { name: "Operator Dashboard (Obsidian)", desc: "A complete Obsidian vault template with daily notes, project trackers, and system documentation structure." },
      { name: "PARA Method Template", desc: "Projects, Areas, Resources, Archives — implemented as a ready-to-fork folder and note structure." },
      { name: "Incident Response Log", desc: "Markdown template for documenting system incidents with timeline, diagnosis, and post-mortem sections." },
      { name: "Weekly Review System", desc: "A structured weekly review template designed for solo operators and small teams." },
    ],
  },
  {
    icon: "🖥️",
    title: "VPS Configurators",
    phase: "Phase 2",
    color: "#ffd166",
    desc: "Complete server setup configurations for production and staging environments. Docker Compose stacks, NGINX configs, and Certbot automation.",
    tools: [
      { name: "Docker Compose Starter", desc: "Production-ready Compose file for Next.js + PostgreSQL + NGINX with environment separation." },
      { name: "NGINX Reverse Proxy Config", desc: "Hardened NGINX config with TLS termination, rate limiting, and security headers." },
      { name: "Certbot Auto-Renew Setup", desc: "Cron and systemd timer configurations for hands-off TLS certificate renewal." },
      { name: "Environment Switcher", desc: "Script for managing dev / staging / prod environment files without accidental cross-contamination." },
    ],
  },
  {
    icon: "🔧",
    title: "Developer Utilities",
    phase: "Phase 2",
    color: "#38bdf8",
    desc: "CLI helpers, code quality tools, and workflow accelerators for developers. Reduce context-switching and keep momentum.",
    tools: [
      { name: "Git Alias Pack", desc: "A curated .gitconfig alias set for common git operations — faster branching, cleaner logs, safer resets." },
      { name: "Pre-commit Hook Suite", desc: "Lint, type-check, and secret-scan hooks that run before every commit. Configurable per project." },
      { name: "API Test Runner", desc: "Bash-based HTTP test utility for quick endpoint validation without Postman overhead." },
      { name: "Changelog Generator", desc: "Generates structured changelogs from git commit history using conventional commit format." },
    ],
  },
  {
    icon: "🤖",
    title: "AI Operator Utilities",
    phase: "Phase 3",
    color: "#9b72cf",
    desc: "Tools built specifically for working with AI systems — prompt management, output validation, and agent workflow scaffolding.",
    tools: [
      { name: "Prompt Version Manager", desc: "Git-style version control for prompt templates with diff, rollback, and comparison tools." },
      { name: "Output Validator", desc: "Configurable schema validation for LLM outputs — enforce format, length, and content constraints." },
      { name: "Agent Scaffold Generator", desc: "CLI tool that scaffolds a new agent project with opinionated structure, tool bindings, and test harness." },
      { name: "Context Window Tracker", desc: "Token usage tracker and budget manager for long-running AI sessions." },
    ],
  },
];

export default function ToolsPage() {
  return (
    <ZonePage zone={zone}>
      {/* Phase notice */}
      <div
        style={{
          background: "rgba(255,209,102,0.07)",
          border: "1px solid rgba(255,209,102,0.3)",
          borderRadius: 8,
          padding: "0.75rem 1rem",
          marginBottom: "2.5rem",
          fontSize: "0.85rem",
          color: "var(--text-secondary)",
        }}
      >
        🛠️{" "}
        <strong style={{ color: "#ffd166" }}>Phase 1 tools are available on launch.</strong>{" "}
        Phase 2 and 3 tools follow as backend services and the operator tier come online.
      </div>

      {/* Tool categories */}
      <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
        {TOOL_CATEGORIES.map(({ icon, title, phase, color, desc, tools }) => (
          <section key={title}>
            {/* Section header */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                marginBottom: "1.25rem",
                paddingBottom: "0.75rem",
                borderBottom: "1px solid var(--border)",
              }}
            >
              <span style={{ fontSize: "1.25rem" }}>{icon}</span>
              <h2 style={{ fontSize: "1.1rem", fontWeight: 700, color }}>{title}</h2>
              <span
                style={{
                  fontSize: "0.65rem",
                  fontWeight: 700,
                  padding: "0.15rem 0.45rem",
                  background: `${color}15`,
                  color,
                  border: `1px solid ${color}33`,
                  borderRadius: 4,
                  letterSpacing: "0.04em",
                }}
              >
                {phase}
              </span>
              <p style={{ color: "var(--text-muted)", fontSize: "0.8rem", marginLeft: "auto", maxWidth: 400, textAlign: "right", display: "none" }} className="tool-cat-desc">
                {desc}
              </p>
            </div>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: 1.65, marginBottom: "1.25rem", maxWidth: 680 }}>
              {desc}
            </p>

            {/* Tool grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                gap: "1rem",
              }}
            >
              {tools.map(({ name, desc: toolDesc }) => (
                <div
                  key={name}
                  className="card"
                  style={{ borderColor: `${color}22` }}
                >
                  <h3
                    style={{
                      fontSize: "0.95rem",
                      fontWeight: 700,
                      marginBottom: "0.4rem",
                      color: "var(--text-primary)",
                    }}
                  >
                    {name}
                  </h3>
                  <p style={{ color: "var(--text-secondary)", fontSize: "0.825rem", lineHeight: 1.6 }}>
                    {toolDesc}
                  </p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      <p style={{ color: "var(--text-muted)", fontSize: "0.85rem", marginTop: "3rem" }}>
        All tools ship as open files — scripts, configs, and templates you can read, modify, and run yourself.
        No telemetry. No lock-in.
      </p>
    </ZonePage>
  );
}
