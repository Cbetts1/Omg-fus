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

/* ─── Store products ─────────────────────────────────────────────────────────── */

export interface StoreProduct {
  id: string;
  name: string;
  tagline: string;
  description: string;
  /** What the buyer receives in the pack */
  includes: string[];
  category: "ebook" | "toolkit" | "prompt-pack" | "template" | "guide" | "sticker-pack" | "wallpaper" | "checklist" | "course";
  format: string;
  price: string;         // placeholder until Stripe is wired
  priceRange?: string;   // display range like "$9–$49"
  aiAssisted: boolean;
  featured?: boolean;    // show in featured row
  badge?: string;        // e.g. "New", "Bestseller", "Phase 3"
  /** Whether this product is available for affiliate / distributor resale */
  affiliateEnabled?: boolean;
  /** Phase when the product becomes purchasable (1=now, 2, 3) */
  phase: 1 | 2 | 3;
}

export const STORE_PRODUCTS: StoreProduct[] = [
  /* ── Flagship ebooks ─────────────────────────────────────────── */
  {
    id: "aura-os-guide",
    name: "AURA OS Architecture Guide",
    tagline: "The definitive field manual for VAGA/AIOS infrastructure.",
    description:
      "A deep technical walkthrough of AURA OS — how the reasoning core, mobility layer, and VPS anchor work together to form a sovereign AI system. Covers architecture diagrams, deployment patterns, and operator decision trees.",
    includes: [
      "8-chapter PDF (150+ pages)",
      "EPUB for e-readers",
      "Architecture diagram pack (PNG + SVG)",
      "Operator decision-tree reference cards",
    ],
    category: "ebook",
    format: "PDF + EPUB + Diagrams",
    price: "[PRICE_TBD]",
    priceRange: "$19–$29",
    aiAssisted: false,
    featured: true,
    badge: "Flagship",
    affiliateEnabled: true,
    phase: 2,
  },
  {
    id: "virtual-intelligence-blueprint",
    name: "Virtual Intelligence System Blueprint",
    tagline: "Design your own modular AI infrastructure.",
    description:
      "A framework-agnostic blueprint for building virtual intelligence systems: agent design, memory architecture, communication protocols, and mobility patterns. Grounded in the VAGA design principles.",
    includes: [
      "Full PDF blueprint (130+ pages)",
      "EPUB version",
      "System design templates (Markdown + Mermaid)",
      "Component specification worksheets",
    ],
    category: "ebook",
    format: "PDF + EPUB + Templates",
    price: "[PRICE_TBD]",
    priceRange: "$17–$27",
    aiAssisted: false,
    featured: true,
    affiliateEnabled: true,
    phase: 2,
  },
  {
    id: "operator-field-manual",
    name: "The Operator's Field Manual",
    tagline: "Everything you need to run real infrastructure, solo.",
    description:
      "A practical reference manual for solo operators and small teams managing production systems. Covers day-to-day tasks, incident response, server maintenance, and security hygiene — all in one place.",
    includes: [
      "Comprehensive PDF reference (180+ pages)",
      "EPUB version",
      "Quick-reference card set (printable PDF)",
      "Checklists for 12 common operator scenarios",
    ],
    category: "ebook",
    format: "PDF + EPUB + Reference Cards",
    price: "[PRICE_TBD]",
    priceRange: "$22–$35",
    aiAssisted: false,
    featured: true,
    badge: "New",
    affiliateEnabled: true,
    phase: 2,
  },

  /* ── Toolkits ────────────────────────────────────────────────── */
  {
    id: "hardened-vps-kit",
    name: "Hardened VPS Starter Kit",
    tagline: "A battle-tested setup for AlmaLinux and Ubuntu servers.",
    description:
      "Scripts, configs, and a step-by-step hardening playbook for standing up a production-grade VPS from scratch. Covers firewall rules, SSH hardening, Fail2Ban setup, and automated backup strategies.",
    includes: [
      "Bash hardening script (AlmaLinux + Ubuntu)",
      "UFW & firewalld rule templates",
      "Fail2Ban configuration set",
      "Automated backup script with cron templates",
      "Step-by-step PDF guide (60 pages)",
    ],
    category: "toolkit",
    format: "ZIP (scripts + configs + PDF guide)",
    price: "[PRICE_TBD]",
    priceRange: "$14–$22",
    aiAssisted: false,
    badge: "Bestseller",
    affiliateEnabled: true,
    phase: 2,
  },
  {
    id: "ai-workflow-architect-kit",
    name: "AI Workflow Architect Toolkit",
    tagline: "Build, test, and deploy AI pipelines without starting from zero.",
    description:
      "A complete scaffold toolkit for designing and deploying multi-agent AI workflows. Includes YAML pipeline templates, agent communication schemas, test harness setups, and prompt scaffolds for common operator patterns.",
    includes: [
      "12 YAML workflow pipeline templates",
      "Agent schema definitions (JSON/YAML)",
      "Prompt scaffold library (30+ prompts)",
      "Test harness setup scripts",
      "PDF guide: Building Your First AI Pipeline",
    ],
    category: "toolkit",
    format: "ZIP (YAML + JSON + scripts + PDF)",
    price: "[PRICE_TBD]",
    priceRange: "$19–$29",
    aiAssisted: true,
    badge: "New",
    affiliateEnabled: true,
    phase: 2,
  },

  /* ── Prompt packs ────────────────────────────────────────────── */
  {
    id: "operator-prompt-pack",
    name: "Operator Prompt Engineering Pack",
    tagline: "High-signal prompts tested in real operator workflows.",
    description:
      "A curated collection of prompts built and refined through real usage — covering system design, code review, security analysis, documentation generation, and multi-step task orchestration.",
    includes: [
      "150+ categorised prompts (Markdown)",
      "PDF formatted version",
      "Prompt chaining guide",
      "Variable template syntax reference",
    ],
    category: "prompt-pack",
    format: "Markdown + PDF",
    price: "[PRICE_TBD]",
    priceRange: "$12–$18",
    aiAssisted: true,
    affiliateEnabled: true,
    phase: 2,
  },
  {
    id: "security-analyst-prompts",
    name: "Security Analyst Prompt Pack",
    tagline: "Structured prompts for threat analysis and defensive research.",
    description:
      "Prompts purpose-built for security operators: threat model generation, vulnerability analysis, CVE summarisation, hardening checklists, incident response documentation, and red-team scenario planning.",
    includes: [
      "80+ security-focused prompts (Markdown)",
      "PDF formatted version",
      "Prompt usage guide with examples",
      "Threat model template prompts",
    ],
    category: "prompt-pack",
    format: "Markdown + PDF",
    price: "[PRICE_TBD]",
    priceRange: "$12–$18",
    aiAssisted: true,
    badge: "New",
    affiliateEnabled: true,
    phase: 2,
  },

  /* ── Templates ───────────────────────────────────────────────── */
  {
    id: "multi-agent-templates",
    name: "Multi-Agent Workflow Templates",
    tagline: "Pre-built scaffolds for multi-agent orchestration.",
    description:
      "Ready-to-run templates for common multi-agent setups: research pipelines, code review chains, documentation generators, and security audit workflows. Compatible with any framework that supports tool-calling agents.",
    includes: [
      "10 complete agent workflow templates (YAML)",
      "Markdown documentation for each template",
      "README and usage guide",
      "Environment setup scripts",
    ],
    category: "template",
    format: "ZIP (YAML + Markdown)",
    price: "[PRICE_TBD]",
    priceRange: "$14–$20",
    aiAssisted: true,
    affiliateEnabled: true,
    phase: 2,
  },
  {
    id: "obsidian-operator-vault",
    name: "Obsidian Operator Vault",
    tagline: "A complete Obsidian workspace built for technical operators.",
    description:
      "A fully structured Obsidian vault with daily notes templates, project tracking systems, incident logs, knowledge organisation, and operator-specific workflows pre-wired and ready to use.",
    includes: [
      "Complete Obsidian vault (folder structure + templates)",
      "Daily, weekly, and monthly note templates",
      "Project and incident tracking dashboards",
      "Operator workflow templates",
      "Setup guide PDF",
    ],
    category: "template",
    format: "ZIP (Obsidian vault + PDF guide)",
    price: "[PRICE_TBD]",
    priceRange: "$12–$18",
    aiAssisted: false,
    badge: "New",
    affiliateEnabled: true,
    phase: 2,
  },

  /* ── Guides ──────────────────────────────────────────────────── */
  {
    id: "recovery-playbook",
    name: "System Recovery & Rebuild Playbook",
    tagline: "What to do when everything breaks — and it will.",
    description:
      "Lessons from real-world system failures: overwritten directories, corrupt configs, network lock-outs, and worse. A practical guide to diagnosing, recovering, and hardening systems so the same failure cannot happen twice.",
    includes: [
      "Comprehensive PDF guide (90 pages)",
      "Recovery scenario decision tree (printable)",
      "Emergency command reference card",
      "Post-incident hardening checklist",
    ],
    category: "guide",
    format: "PDF + Reference Cards",
    price: "[PRICE_TBD]",
    priceRange: "$11–$17",
    aiAssisted: false,
    affiliateEnabled: true,
    phase: 2,
  },

  /* ── Checklists ──────────────────────────────────────────────── */
  {
    id: "security-audit-checklist",
    name: "Security Audit Checklist Pack",
    tagline: "Structured checklists for auditing systems, configs, and processes.",
    description:
      "A set of printable and digital checklists for conducting security audits at the system, network, and application layer. Covers VPS hardening, web app basics, identity management, and third-party risk.",
    includes: [
      "6 domain-specific audit checklists (PDF)",
      "Markdown editable versions",
      "Scoring and risk-rating worksheets",
      "Summary report template",
    ],
    category: "checklist",
    format: "PDF + Markdown",
    price: "[PRICE_TBD]",
    priceRange: "$9–$14",
    aiAssisted: false,
    badge: "New",
    affiliateEnabled: true,
    phase: 2,
  },

  /* ── Digital sticker packs ───────────────────────────────────── */
  {
    id: "betts-sticker-pack-vol1",
    name: "Betts Foundations Sticker Pack Vol. 1",
    tagline: "High-res digital stickers for the tech operator aesthetic.",
    description:
      "A collection of high-resolution digital stickers featuring AURA, VAGA components, and Betts Foundations brand marks. Perfect for digital notebooks, slide decks, and creative projects. Transparent PNG and SVG formats included.",
    includes: [
      "30 digital stickers (PNG, transparent background, 2x resolution)",
      "SVG vector versions of all stickers",
      "Commercial use licence for personal projects",
      "Usage guide PDF",
    ],
    category: "sticker-pack",
    format: "ZIP (PNG + SVG)",
    price: "[PRICE_TBD]",
    priceRange: "$7–$12",
    aiAssisted: false,
    badge: "New",
    affiliateEnabled: true,
    phase: 2,
  },
  {
    id: "aura-creature-stickers",
    name: "AURA Creature Sticker Pack",
    tagline: "Friendly AI creature designs for your digital spaces.",
    description:
      "Sticker pack featuring AURA — the crystalline AI mascot of Betts Foundations — in multiple poses, expressions, and colour variants. Includes circuit-art and geometric creature designs. Digital download, transparent PNG and SVG.",
    includes: [
      "20 AURA creature stickers (PNG, 2x resolution)",
      "SVG vector versions",
      "6 colour variant sets",
      "Commercial use licence for personal projects",
    ],
    category: "sticker-pack",
    format: "ZIP (PNG + SVG)",
    price: "[PRICE_TBD]",
    priceRange: "$7–$12",
    aiAssisted: false,
    badge: "New",
    affiliateEnabled: true,
    phase: 2,
  },

  /* ── Wallpaper packs ─────────────────────────────────────────── */
  {
    id: "steel-ops-wallpapers",
    name: "Steel Ops Wallpaper Pack",
    tagline: "Dark, metallic tech wallpapers for operators and builders.",
    description:
      "A set of high-resolution desktop and mobile wallpapers with a dark steel / gunmetal tech aesthetic. Features VAGA system diagrams, circuit art, AURA motifs, and abstract architectural renders — built for the operator aesthetic.",
    includes: [
      "15 desktop wallpapers (4K / 2K / 1080p)",
      "8 mobile wallpapers (1080×2340)",
      "2 ultra-wide formats (3440×1440)",
      "Lossless PNG + optimised JPG versions",
    ],
    category: "wallpaper",
    format: "ZIP (PNG + JPG, multiple resolutions)",
    price: "[PRICE_TBD]",
    priceRange: "$6–$10",
    aiAssisted: false,
    badge: "New",
    affiliateEnabled: true,
    phase: 2,
  },

  /* ── Courses (Phase 3) ───────────────────────────────────────── */
  {
    id: "vps-setup-course",
    name: "VPS From Zero: Complete Setup Course",
    tagline: "A hands-on course covering the full production VPS setup.",
    description:
      "Step-by-step video and written course covering everything from selecting a VPS provider to running a production-hardened multi-service Docker stack. Includes walkthroughs, config files, and ongoing Q&A support.",
    includes: [
      "12 video lessons (Phase 3)",
      "All config files and scripts",
      "Written companion guide",
      "Community Q&A access",
    ],
    category: "course",
    format: "Video + Files (Phase 3)",
    price: "[PRICE_TBD]",
    priceRange: "$39–$79",
    aiAssisted: false,
    badge: "Phase 3",
    affiliateEnabled: true,
    phase: 3,
  },
  {
    id: "ai-agent-design-course",
    name: "AI Agent Design Masterclass",
    tagline: "Design, build, and deploy production-grade AI agents.",
    description:
      "An in-depth course on designing multi-agent AI systems: architecture principles, tool design, memory systems, communication patterns, and production deployment. Based on real VAGA/AIOS design experience.",
    includes: [
      "15 video lessons (Phase 3)",
      "Agent scaffold templates",
      "Written companion guide",
      "Community Q&A access",
    ],
    category: "course",
    format: "Video + Files (Phase 3)",
    price: "[PRICE_TBD]",
    priceRange: "$49–$99",
    aiAssisted: false,
    badge: "Phase 3",
    affiliateEnabled: true,
    phase: 3,
  },
];
