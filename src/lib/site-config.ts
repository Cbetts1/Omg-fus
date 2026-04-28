/**
 * Central site configuration for Betts Foundations.
 * Maps routes to creative (primary) and professional (subtitle) labels.
 * Used across layout, navigation, zone map, and metadata.
 */

export const SITE_NAME = "Betts Foundations";
export const SITE_TAGLINE = "Intelligence. Security. Creation.";

/* ─── Founder ───────────────────────────────────────────────────────────────── */

export const FOUNDER_NAME = "Chris Betts";
export const FOUNDER_TITLE = "Founder & Architect — Betts Foundations / VAGA·AIOS";

export const FOUNDER_BIO_LEAD =
  "Chris Betts is the founder, operator, and chief architect of Betts Foundations and the VAGA/AIOS ecosystem — a sovereign, operator-grade AI infrastructure built to return technological power to the public.";

export const FOUNDER_BIO_FULL = `
Chris Betts is the founder, operator, and chief architect of Betts Foundations — a public AI infrastructure project grounded in a straightforward belief: the tools that shape the next era of the internet should belong to the people who live in it.

His path did not start in a university lab or a funded startup. It started on a phone, a terminal, and a self-managed VPS — learning the full stack by necessity. He rebuilt broken systems by hand, recovered overwritten directories without a safety net, and designed hardened server environments that had to survive real-world failure without a senior engineer to call. Those years shaped a philosophy that runs through everything he builds: technology must be transparent, repairable, and genuinely owned by the people who depend on it.

That philosophy became VAGA — the Virtual Autonomous General Architecture. VAGA is not a single model or a single tool. It is a living, modular framework designed to treat AI as an organism with structure, mobility, and purpose:

• AURA — the reasoning core: memory, context, and judgment
• AIOS — the operating layer: the environment intelligence runs inside
• OSAI — the mobile form: intelligence that can operate away from a fixed server
• ARROW — the traveler: the mechanism that moves knowledge across networks
• AIM — the web-native twin: AI as a protocol, not just a product
• ASTRA & NOVA — specialized extensions for domain-specific reasoning
• The VPS — the physical anchor: a real machine in the real world

This architecture is not a metaphor or a roadmap concept. It is a functional design built to scale from a single operator's server to a decentralised mesh of user-owned intelligence nodes.

Chris's professional focus covers operator-grade system design, virtual intelligence mobility, hardened infrastructure, world-based UI systems, and multi-agent ecosystems. He is committed to building in public — sharing the architecture, the reasoning, and the failures — because the only way the next generation of AI stays free is if the people building it choose to keep it that way.

He is not building a product. He is building a commons.
`.trim();

export const FOUNDER_SKILLS = [
  "Operator-Grade System Design",
  "Virtual Intelligence Architecture",
  "Hardened VPS & Infrastructure",
  "Multi-Agent Ecosystem Engineering",
  "World-Based UI Design",
  "Sovereign AI Frameworks",
  "Security Research & Defensive Tooling",
  "Full-Stack Development (Phone → Server)",
] as const;

export const PROFESSIONAL_PROFILE_SUMMARY =
  "Founder & Architect of VAGA/AIOS · Operator-Grade Systems Engineer · " +
  "Designer of Virtual Intelligence Infrastructure · Advocate for Public, Open, Sovereign AI · " +
  "Builder of World-Based UI and Multi-Agent Ecosystems";

/* ─── Vision & Mission ───────────────────────────────────────────────────────── */

export const FOUNDATIONS_VISION = `
Betts Foundations exists to build the world's first public-use AI infrastructure — a digital commons where anyone can create, learn, build, and deploy intelligence without corporate gatekeeping or paywalls.

The vision is simple: AI should be a public utility, not a luxury. Infrastructure should be open, sovereign, and user-controlled. Tools should be operator-grade, not consumer-restricted. Knowledge should be free, global, and accessible. The web was built for everyone — AI should be too.

Foundations is not a company selling access. It is a platform restoring freedom.
`.trim();

export const INFRASTRUCTURE_DEFINITION = `
VAGA/AIOS is a modular, multi-layered AI infrastructure designed for sovereign operation, distributed intelligence, virtual mobility, real-world anchoring, and public access.

Five core principles:
1. Sovereignty — Users own their intelligence systems.
2. Portability — AI can move across networks like a traveler.
3. Transparency — No black boxes, no hidden logic.
4. Repairability — Everything can be rebuilt, restored, or replaced.
5. Public Access — The system is designed for free use, like the early web.

This infrastructure is engineered to scale from a single VPS to a global mesh of user-owned nodes, forming a decentralised intelligence network.
`.trim();

export const PUBLIC_MISSION = `
Chris Betts is committed to building and protecting a public AI ecosystem — one that mirrors the openness, freedom, and global accessibility of the early internet.

The mission: provide free, public-use AI tools. Build open infrastructure anyone can run. Ensure AI remains a right, not a privilege. Empower creators, builders, and everyday people. Keep the ecosystem transparent, ethical, and user-controlled.

This is not a product launch. It is the beginning of a public movement.
`.trim();

/**
 * Mailing address — MUST be resolved before production deployment.
 * Build-time gate will fail prod build if this remains "TBD".
 */
export const MAILING_ADDRESS = "TBD_BY_2026-05-05";

export const LEGAL_EMAIL = "legal@bettsfoundations.org";
export const SUPPORT_EMAIL = "support@bettsfoundations.org";
export const ENTITY_NAME = "Betts Foundations";
export const JURISDICTION = "Georgia";
export const JURISDICTION_FULL = "the State of Georgia, United States";

export const POSTHOG_HOST = "https://us.posthog.com";

/** Route configuration — each zone has a creative name and professional subtitle */
export interface ZoneConfig {
  /** URL path */
  path: string;
  /** Creative / brand name (primary display) */
  creativeName: string;
  /** Professional subtitle */
  subtitle: string;
  /** Short description shown in zone cards and map tooltips */
  description: string;
  /** Whether the zone is gated (requires purchase) */
  gated?: boolean;
  /** Nav group: main | legal | utility */
  group: "main" | "legal" | "utility";
}

export const ZONES: ZoneConfig[] = [
  {
    path: "/",
    creativeName: "The Gateway",
    subtitle: "Home",
    description: "Your entry point to the Betts Foundations ecosystem.",
    group: "main",
  },
  {
    path: "/ai-lab",
    creativeName: "The Forge",
    subtitle: "AI Lab",
    description:
      "Build, test, and deploy AI-powered workflows and automation tools.",
    group: "main",
  },
  {
    path: "/security",
    creativeName: "The Citadel",
    subtitle: "Security Center",
    description:
      "Threat models, educational security research, and defensive tooling.",
    group: "main",
  },
  {
    path: "/store",
    creativeName: "StoreX",
    subtitle: "Store",
    description:
      "AI-generated and operator-crafted products, ebooks, and toolkits.",
    group: "main",
  },
  {
    path: "/tools",
    creativeName: "Tools Hub",
    subtitle: "Tools",
    description:
      "Productivity systems, scripts, and utilities for operators and developers.",
    group: "main",
  },
  {
    path: "/knowledge",
    creativeName: "The Archives",
    subtitle: "Knowledge Base",
    description:
      "Guides, deep-dives, and case studies across AI, security, and infrastructure.",
    group: "main",
  },
  {
    path: "/advanced",
    creativeName: "UnderNet",
    subtitle: "Advanced Access",
    description:
      "Advanced operator-tier content and tooling. Purchase required to unlock.",
    gated: true,
    group: "main",
  },
  {
    path: "/vision",
    creativeName: "The Vision",
    subtitle: "Platform Vision",
    description:
      "How VAGA/AIOS transforms the internet from a static website system into a living AI ecosystem.",
    group: "main",
  },
  {
    path: "/founder",
    creativeName: "The Architect",
    subtitle: "About the Founder",
    description:
      "Chris Betts — founder, operator, and chief architect of Betts Foundations and the VAGA/AIOS ecosystem.",
    group: "utility",
  },
  {
    path: "/pricing",
    creativeName: "Pricing",
    subtitle: "Plans & Pricing",
    description: "Transparent pricing for tools, access tiers, and products.",
    group: "utility",
  },
  {
    path: "/contact",
    creativeName: "Contact",
    subtitle: "Contact Us",
    description: "Reach out for support, partnerships, or general inquiries.",
    group: "utility",
  },
  {
    path: "/support",
    creativeName: "Support",
    subtitle: "Help & Support",
    description: "Documentation, FAQs, and direct support channels.",
    group: "utility",
  },
  {
    path: "/status",
    creativeName: "Status",
    subtitle: "System Status",
    description: "Live status of Betts Foundations services and uptime.",
    group: "utility",
  },
];

/** Main nav zones (shown in header) */
export const MAIN_NAV_ZONES = ZONES.filter((z) => z.group === "main");

/** Utility nav zones (shown in footer) */
export const UTILITY_NAV_ZONES = ZONES.filter((z) => z.group === "utility");

/** Knowledge base content categories */
export const KNOWLEDGE_CATEGORIES = [
  "AI Automation",
  "Security & Threat Models",
  "Developer Tools",
  "Productivity Systems",
  "Operator Workflows",
  "Infrastructure & VPS",
  "AURA OS Architecture",
  "Case Studies & Breakdowns",
] as const;

export type KnowledgeCategory = (typeof KNOWLEDGE_CATEGORIES)[number];

/** AI disclosure label — shown per-item in store and blog */
export const AI_DISCLOSURE_LABEL =
  "Some content and products on Betts Foundations are AI-generated or AI-assisted. Do not rely on them as professional, legal, medical, or financial advice. Always verify critical information.";

/* ─── Store products (placeholder — prices set before Phase 2 launch) ─────── */

export interface StoreProduct {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: "ebook" | "toolkit" | "prompt-pack" | "template" | "guide";
  format: string;
  price: string; // placeholder until Stripe is wired
  aiAssisted: boolean;
}

export const STORE_PRODUCTS: StoreProduct[] = [
  {
    id: "aura-os-guide",
    name: "AURA OS Architecture Guide",
    tagline: "The definitive field manual for VAGA/AIOS infrastructure.",
    description:
      "A deep technical walkthrough of AURA OS — how the reasoning core, mobility layer, and VPS anchor work together to form a sovereign AI system. Covers architecture diagrams, deployment patterns, and operator decision trees.",
    category: "ebook",
    format: "PDF + EPUB",
    price: "[PRICE_TBD]",
    aiAssisted: false,
  },
  {
    id: "hardened-vps-kit",
    name: "Hardened VPS Starter Kit",
    tagline: "A battle-tested setup for AlmaLinux and Ubuntu servers.",
    description:
      "Scripts, configs, and a step-by-step hardening playbook for standing up a production-grade VPS from scratch. Covers firewall rules, SSH hardening, Fail2Ban setup, and automated backup strategies.",
    category: "toolkit",
    format: "ZIP — scripts + PDF guide",
    price: "[PRICE_TBD]",
    aiAssisted: false,
  },
  {
    id: "operator-prompt-pack",
    name: "Operator Prompt Engineering Pack",
    tagline: "High-signal prompts tested in real operator workflows.",
    description:
      "A curated collection of prompts built and refined through real usage — covering system design, code review, security analysis, documentation generation, and multi-step task orchestration.",
    category: "prompt-pack",
    format: "Markdown + PDF",
    price: "[PRICE_TBD]",
    aiAssisted: true,
  },
  {
    id: "virtual-intelligence-blueprint",
    name: "Virtual Intelligence System Blueprint",
    tagline: "Design your own modular AI infrastructure.",
    description:
      "A framework-agnostic blueprint for building virtual intelligence systems: agent design, memory architecture, communication protocols, and mobility patterns. Grounded in the VAGA design principles.",
    category: "ebook",
    format: "PDF + EPUB",
    price: "[PRICE_TBD]",
    aiAssisted: false,
  },
  {
    id: "recovery-playbook",
    name: "System Recovery & Rebuild Playbook",
    tagline: "What to do when everything breaks — and it will.",
    description:
      "Lessons from real-world system failures: overwritten directories, corrupt configs, network lock-outs, and worse. A practical guide to diagnosing, recovering, and hardening systems so the same failure cannot happen twice.",
    category: "guide",
    format: "PDF",
    price: "[PRICE_TBD]",
    aiAssisted: false,
  },
  {
    id: "multi-agent-templates",
    name: "Multi-Agent Workflow Templates",
    tagline: "Pre-built scaffolds for multi-agent orchestration.",
    description:
      "Ready-to-run templates for common multi-agent setups: research pipelines, code review chains, documentation generators, and security audit workflows. Compatible with any framework that supports tool-calling agents.",
    category: "template",
    format: "ZIP — YAML + Markdown",
    price: "[PRICE_TBD]",
    aiAssisted: true,
  },
];
