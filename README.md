# Betts Foundations

**Intelligence. Security. Creation.**

Betts Foundations is an AI-powered platform for operators and builders — combining AI automation, security research, digital products, and developer tooling in one interconnected ecosystem. At its core, Betts Foundations is building the **AIM Dock Web**: a next-generation distributed infrastructure where virtual AI instances (vAI) are mounted, staged, and migrated across standardized Docks instead of traditional web servers and ports.

---

## Table of Contents

1. [Vision — The AIM Dock Web](#1-vision--the-aim-dock-web)
2. [Ecosystem Components (AURA AIOS)](#2-ecosystem-components-aura-aios)
3. [Key Terminology](#3-key-terminology)
4. [Connector Model — Universal Connector Interface (UCI)](#4-connector-model--universal-connector-interface-uci)
5. [Security & Trust Tiers](#5-security--trust-tiers)
6. [AIM Docking Lifecycle](#6-aim-docking-lifecycle)
7. [Migration Modes](#7-migration-modes)
8. [Growth & Federation Model](#8-growth--federation-model)
9. [Implementation Outline for Dev Teams](#9-implementation-outline-for-dev-teams)
10. [Project Structure (TypeScript)](#10-project-structure-typescript)
11. [Running Locally](#11-running-locally)
12. [Phase 1 — What's Included](#12-phase-1--whats-included)
13. [Technology Stack](#13-technology-stack)
14. [Documentation](#14-documentation)
15. [Legal](#15-legal)

---

## 1. Vision — The AIM Dock Web

The World Wide Web delivers documents and applications to humans via HTTP and URLs. The **AIM Dock Web** delivers movable AI workloads and knowledge artifacts to AI agents — and through those agents, to people who otherwise lack access to capable devices or deep AI expertise.

> **Core premise:** Compute is packaged as AI-native modules that *dock* into standardized execution environments called **Docks**. The network fabric that enables discovery, mounting, migration, and governance of these modules is **AIM** (AI Mounting protocol).

### Why This Is Different

| Dimension | World Wide Web | AIM Dock Web |
|---|---|---|
| Endpoint | Web page / API | Dockable AI execution context |
| Protocol | HTTP / WebSocket | AIM (mount, negotiate, migrate, audit) |
| Workload | Static content / app | AIOS virtual AI instance (vAI) |
| Addressing | URL / port | Dock address + Stage ID |
| Mobility | None | Live migration between Docks |
| Connectors | HTTP calls | Universal Connector Interface (UCI) |
| Knowledge | Web pages | Permissioned Knowledge Resource Layer |
| Access equity | Device-dependent | Remote staging for low-device users |

---

## 2. Ecosystem Components (AURA AIOS)

Betts Foundations is building a family of AI ecosystem components under the **AURA AIOS** brand:

| Component | Role |
|---|---|
| **AURA AIOS** | The AI Operating System — the packaged, dockable runtime that runs as a vAI instance |
| **AIM** | AI Mounting protocol & control plane; the "internet" for Docks |
| **Astra** | Orchestration and marketplace layer; matches tasks to Docks |
| **Nova** | Knowledge Resource Layer; stores, curates, and mounts knowledge artifacts |
| **OSAI** | On-device AI shell; thin client for low-capability devices |
| **Echo** | Audit, observability, and compliance subsystem |

Each component is designed to be modular: they can deploy together as a unified DockStack or independently as services consumed by third-party Dock operators.

---

## 3. Key Terminology

### Dock
A standardized host environment that accepts (docks) one or more AI workloads. Each Dock exposes:
- Resource provisioning (CPU/GPU/NPU, RAM, storage, bandwidth)
- Secure execution (TEE/sandbox, container or microVM isolation)
- Data connectors via the Universal Connector Interface
- Policy enforcement engine
- Metering, billing, and audit subsystems

Docks are the foundational unit of infrastructure — analogous to a web server, but purpose-built for AI execution.

### Stage
A reservable execution bay within a Dock. A Stage:
- Holds exactly one mounted vAI instance at a time
- Maintains a **Stage Manifest** (resource requirements, allowed connectors, trust tier)
- Manages lifecycle: start → run → suspend → migrate → terminate
- Enforces state-handling rules (stateless, checkpointed, or stateful)

Think of a Stage as a CPU socket with identity, policy, and connector ports built in.

### vAI Instance (Virtual AI)
A running instantiation of an AURA AIOS image mounted into a Stage. Each vAI instance has:
- Its own inference/reasoning runtime
- Tool system with permissions
- Memory subsystem (short-term context, long-term vector store)
- A built-in agent/helper that mediates between user goals and network actions
- Signed image identity and update mechanism

### AIM (AI Mounting Protocol)
AIM is both a **networking fabric** and a **mounting protocol**. Core functions:
- Dock discovery and capability exchange
- Mutual authentication and attestation
- Policy negotiation (what can mount where, what data is accessible)
- Resource negotiation (GPU type, latency SLA, cost)
- Deployment lifecycle: reserve → mount → run → migrate → audit
- Inter-agent messaging and task delegation contracts
- Billing and credit settlement

### AURA AIOS
The AI Operating System image that runs as a vAI instance. AURA AIOS packages the inference engine, tool permissions, memory subsystem, agent personality/behavior, and safety/alignment constraints into a portable, signed image.

### Universal Connector Interface (UCI)
A standardized hardware/software abstraction layer enabling Docks to attach data, tools, sensors, and identity resources to running vAI instances. See [Section 4](#4-connector-model--universal-connector-interface-uci) for full details.

---

## 4. Connector Model — Universal Connector Interface (UCI)

The UCI makes Docks "adaptive, fast, and reliable" by providing a negotiated, hot-swappable connector abstraction.

### Connector Taxonomy

| Connector Type | Description | Example |
|---|---|---|
| `DataConnector` | Read/write access to datasets or storage | Vector DB, file vault, Cloudflare R2 |
| `ToolConnector` | External tool invocation | Web search, code execution sandbox |
| `SensorConnector` | Real-time data streams | IoT feeds, camera, audio input |
| `IdentityConnector` | Authentication and personal vault | User identity, credential store |
| `KnowledgeConnector` | Permissioned knowledge mounts | Nova knowledge artifacts, public datasets |

### Negotiation Protocol

1. **Capability Advertisement** — Dock publishes available connectors in its capability profile.
2. **Manifest Request** — vAI instance declares required connectors in its Stage Manifest.
3. **Policy Evaluation** — Dock policy engine checks allowed connector types and data access rules.
4. **Compatibility Check** — Version compatibility and safety profiles are verified.
5. **Mount** — Connectors are attached; a signed capability token is issued to the vAI instance.
6. **Hot-Swap** — Connectors may be swapped at runtime without stopping the vAI instance where policy permits.

### Connector Safety Rules
- No connector may be attached without an explicit capability grant in the Stage Manifest.
- All Knowledge connector mounts must carry provenance and licensing metadata.
- Connector activity is logged by Echo for compliance.

---

## 5. Security & Trust Tiers

The AIM Dock Web uses a tiered trust model to govern what workloads can mount where and what data they can access.

| Tier | Label | Description |
|---|---|---|
| 0 | **Public** | Open Docks; anonymous vAI instances; no persistent state or sensitive connectors |
| 1 | **Verified** | Identity-verified vAI instances; persistent memory; standard connector set |
| 2 | **Trusted** | Organizationally attested Docks and vAI images; full connector set; encrypted vaults |
| 3 | **Sovereign** | Government or enterprise; air-gapped or private-fabric Docks; hardware attestation required |

### Security Controls

- **Remote Attestation** — Docks must prove hardware/firmware integrity before accepting Tier 2+ workloads.
- **Signed Images** — AURA AIOS images are content-addressed and signed; Docks verify signatures at mount time.
- **Least-Privilege Connectors** — vAI instances receive only the connectors declared in their approved manifest.
- **Audit Trail** — Echo records all lifecycle events, connector attachments, and policy decisions with tamper-evident logs.
- **Malicious Workload Isolation** — Stages use microVM or TEE isolation to prevent cross-tenant interference.

---

## 6. AIM Docking Lifecycle

The standard sequence for mounting and running a vAI instance:

```
1. Discover Dock
   └─ AIM fabric query: capability vector, latency, trust tier, cost constraints

2. Capability + Policy Handshake
   ├─ Dock returns: hardware profile, connector list, allowed trust tiers
   └─ vAI returns: Stage Manifest (resource needs, connector requests, policy grants)

3. Identity + Attestation
   ├─ Mutual authentication (dock cert ↔ vAI image signature)
   └─ Remote attestation (Tier 2+)

4. Stage Reservation
   └─ Dock allocates Stage; issues reservation lease token with TTL

5. Mount
   ├─ AURA AIOS image transferred or referenced (content-addressed)
   └─ Connectors attached per approved manifest

6. Run + Interact
   ├─ vAI instance executes; exposes AIM endpoints for users or other agents
   └─ Echo begins audit logging

7. Scale / Migrate
   ├─ Additional Stages reserved as load grows
   └─ State checkpointed; execution migrated to a nearer or lower-cost Dock

8. Audit + Settle
   ├─ Usage metered by Dock
   └─ Billing/credit settled; compliance artifacts archived
```

---

## 7. Migration Modes

vAI instances can move between Docks in two modes:

### Stateless Migration
- The vAI image is re-mounted on a new Stage from scratch.
- No execution state is transferred.
- Use case: burst scaling, fault recovery, load balancing.
- Implementation: container/image pull + connector re-attach.

### Stateful Migration
- Execution state is checkpointed (memory snapshot, conversation context, open connectors).
- Checkpoint is encrypted and transferred to the destination Dock.
- Destination Stage rehydrates from the checkpoint.
- Use case: user-following mobility (move vAI closer to the user's location), planned maintenance.
- Implementation: CRIU-style checkpoint (for process-based stages) or AIOS-level snapshot API for microVM stages.

Both modes require the destination Dock to pass policy compatibility checks before the migration begins.

---

## 8. Growth & Federation Model

### Phase 1 — Cloud / VPS Rented Docks
- Betts Foundations operates Docks on cloud VPS providers (initial infrastructure).
- Developers and early users access vAI instances via rented Stages.
- All Docks run the DockStack reference implementation.

### Phase 2 — Home Dock
- Users can purchase a **Home Dock** appliance — a dedicated, personal Dock running in their home or office.
- Home Docks connect to the AIM fabric and accept personal vAI instances with higher privacy guarantees.
- Supports Tier 2 (Verified) trust by default; upgradable to Tier 3 (Sovereign) with additional attestation hardware.

### Phase 3 — Federated Dock Network
- Cloud Docks, Home Docks, enterprise Docks, and sovereign Docks federate via AIM.
- A root trust registry (operated by Betts Foundations or a governance consortium) maintains Dock identities and capability manifests.
- Cross-org docking policies allow AI workloads to traverse organizational boundaries under negotiated SLAs.
- Low-device users (phones, older hardware) access vAI instances via **OSAI thin client** — the heavy computation runs on a remote Stage.

### Access Equity Goal
A primary design objective is to deliver AI capability to users who lack powerful local devices. By running vAI instances on shared Docks, users with minimal hardware access the same AI infrastructure as enterprise operators. Subsidized compute credits and tiered pricing are part of the Astra marketplace layer (Phase 3).

---

## 9. Implementation Outline for Dev Teams

### Required DockStack Endpoints

Every conformant Dock must expose the following AIM REST/gRPC endpoints:

| Endpoint | Method | Description |
|---|---|---|
| `/aim/v1/dock/capabilities` | GET | Return hardware profile and connector catalog |
| `/aim/v1/stages` | GET | List available and reserved Stages |
| `/aim/v1/stages/{id}/reserve` | POST | Reserve a Stage; returns lease token |
| `/aim/v1/stages/{id}/mount` | POST | Mount an AURA AIOS image into the Stage |
| `/aim/v1/stages/{id}/connectors` | POST | Attach UCI connectors |
| `/aim/v1/stages/{id}/status` | GET | Stage health and lifecycle state |
| `/aim/v1/stages/{id}/migrate` | POST | Initiate stateless or stateful migration |
| `/aim/v1/stages/{id}/release` | DELETE | Release Stage and clean up |
| `/aim/v1/audit` | GET | Retrieve Echo audit log entries |

### MVP Phases

#### MVP-1 — Single Dock, Single Stage, Stateless vAI
- One Linux host running DockStack
- Stages implemented as Docker containers
- AIM discovery + reserve + mount + run via REST
- UCI v0: FileConnector + HTTP ToolConnector
- Echo v0: structured JSON logging

#### MVP-2 — Multi-Stage + Basic UCI Negotiation
- Multiple Stages per Dock
- Full UCI capability advertisement and negotiation
- KnowledgeConnector (Nova) integration — read-only knowledge mounts
- IdentityConnector — user identity and personal vault

#### MVP-3 — Migration + Federation
- Stateless migration between two Docks
- Stateful migration (AIOS-level snapshot)
- Root trust registry for Dock identity
- Astra marketplace: task-to-dock matching + billing hooks

#### MVP-4 — Home Dock + Thin Client
- Home Dock appliance image (Linux-based, containerized DockStack)
- OSAI thin client for mobile/low-power devices
- End-to-end encryption for Home Dock personal Stages
- Credit system for subsidized access users

### Non-Functional Requirements

| Requirement | Target |
|---|---|
| Stage reservation latency | < 500 ms (p95) |
| Mount time (cached image) | < 5 s |
| Mount time (cold pull) | < 30 s |
| Stateless migration time | < 10 s |
| Stateful migration time | < 60 s |
| Audit log retention | 90 days minimum |
| Dock availability SLA | 99.9% (cloud Docks) |
| Connector hot-swap downtime | < 100 ms |

### Key TypeScript Services

The repository is primarily TypeScript. Planned service locations:

```
src/
  services/
    aim/
      DockClient.ts         # AIM protocol client (discovery, reserve, mount)
      StageManager.ts       # Stage lifecycle management
      ConnectorManager.ts   # UCI negotiation and attachment
      MigrationService.ts   # Stateless and stateful migration logic
    aios/
      ImageRegistry.ts      # AURA AIOS image catalog and verification
      InstanceRunner.ts     # vAI instance lifecycle (start/stop/snapshot)
    nova/
      KnowledgeMount.ts     # Knowledge artifact mount with provenance
    echo/
      AuditLogger.ts        # Tamper-evident audit log writer
    astra/
      Marketplace.ts        # Task-to-dock matching and billing
  sdk/
    aim-sdk/                # Public TypeScript SDK for third-party Dock operators
      index.ts
      types.ts              # AIM protocol types and manifest schemas
      DockServer.ts         # Base class for implementing a conformant Dock
```

---

## 10. Project Structure (TypeScript)

```
src/
  app/              # Next.js App Router pages
    legal/          # /legal/privacy, /legal/terms, /legal/ai-disclosure
    ai-lab/         # The Forge
    security/       # The Citadel
    store/          # StoreX
    tools/          # Tools Hub
    knowledge/      # The Archives
    advanced/       # UnderNet (gated)
    pricing/
    contact/
    support/
    status/
  components/       # Shared UI components
    SiteNav         # Sticky header with zone navigation
    SiteFooter      # Footer with legal + utility links
    ZoneMap         # 2D SVG map (desktop) + zone list (mobile)
    CookieBanner    # GDPR-style cookie consent
    ZonePage        # Shared zone page layout
  lib/
    site-config.ts  # Central config: routes, labels, legal values
    build-gate.ts   # Production readiness check logic
  services/         # AIM / DockStack service layer (see Section 9)
  sdk/              # Public AIM TypeScript SDK (see Section 9)
docs/
  spec.md           # Full project specification (Blocks 1–5)
  decisions.md      # Locked decisions + production readiness gate
BACKUP.md           # Backup and restore instructions
.env.example        # All required environment variables
```

---

## 11. Running Locally

### Prerequisites

- Node.js 20+
- npm 10+

### Setup

```bash
# 1. Clone the repository
git clone https://github.com/Cbetts1/Omg-fus.git
cd Omg-fus

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env.local
# Edit .env.local — Phase 1 runs without any secrets set

# 4. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for production

```bash
npm run build
npm start
```

> **Note:** The production build will fail if `MAILING_ADDRESS` in `src/lib/site-config.ts`
> still starts with `TBD`. This is intentional — update it before deploying.

---

## 12. Phase 1 — What's Included

Phase 1 is the foundation scaffold. No auth, payments, or backend services are active yet. The AIM / DockStack service layer is roadmap (Phase 2+).

### Routes

| Path | Creative Name | Professional Name |
|---|---|---|
| `/` | The Gateway | Home |
| `/ai-lab` | The Forge | AI Lab |
| `/security` | The Citadel | Security Center |
| `/store` | StoreX | Store |
| `/tools` | Tools Hub | Tools |
| `/knowledge` | The Archives | Knowledge Base |
| `/advanced` | UnderNet | Advanced Access (gated UI) |
| `/pricing` | — | Plans & Pricing |
| `/contact` | — | Contact Us |
| `/support` | — | Help & Support |
| `/status` | — | System Status |
| `/legal/privacy` | — | Privacy Policy |
| `/legal/terms` | — | Terms of Service |
| `/legal/ai-disclosure` | — | AI Disclosure |

### Features

- **Dual naming system** — Creative name primary, professional subtitle throughout
- **2D Zone Map** — SVG cinematic map on desktop; zone list on mobile
- **Cookie consent** — GDPR-style bottom bar; PostHog analytics blocked until opt-in
- **Legal pages** — Real content (Privacy Policy, ToS, AI Disclosure) derived from locked decisions
- **Reduced motion** — `prefers-reduced-motion` respected globally; no flashing or strobe effects
- **Build gate** — Production builds fail if mailing address is still TBD
- **Locked documentation** — `docs/spec.md` and `docs/decisions.md` capture all requirements

---

## 13. Technology Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** CSS Modules + CSS custom properties
- **Analytics:** PostHog (opt-in only)

### Phase 2+ additions (not yet implemented)

- Authentication: NextAuth (Email + Google OAuth)
- Database: Neon (PostgreSQL)
- Payments: Stripe
- Storage: Cloudflare R2
- Email: SendGrid
- DockStack runtime: Docker / containerd (Stage isolation)
- AIM control plane: gRPC + REST (TypeScript / Node.js services)
- Knowledge layer: pgvector or Pinecone (Nova)
- Audit: structured logging to tamper-evident store (Echo)

---

## 14. Documentation

- [Project Specification](docs/spec.md)
- [Locked Decisions](docs/decisions.md)
- [Backup & Restore Guide](BACKUP.md)

---

## 15. Legal

© 2026 Betts Foundations. All rights reserved.

The AIM Dock Web, AURA AIOS, AIM protocol, DockStack, Astra, Nova, OSAI, and Echo names and concepts are proprietary intellectual property of Betts Foundations. All design specifications in this document represent intended architecture and roadmap; they do not constitute a warranty of current functionality.

See [Privacy Policy](/legal/privacy), [Terms of Service](/legal/terms), and [AI Disclosure](/legal/ai-disclosure).
