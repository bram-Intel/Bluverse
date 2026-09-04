# Bulverse — Digital Infrastructure Platform

> **"Build. Run. Grow with Bulverse Cloud."**  
> Reseller & Managed Digital Infrastructure Platform v0.1

[![Next.js](https://img.shields.io/badge/Next.js-14.2-black?style=flat&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![WHMCS](https://img.shields.io/badge/WHMCS-9.0-green?style=flat)](https://www.whmcs.com/)
[![License](https://img.shields.io/badge/License-Proprietary-red)](#)

---

## 1. Vision & Architecture

Bulverse is built from Day 1 as an **infrastructure company foundation**, not a throwaway website:
* **Storefront Layer (`apps/web`)**: Next.js 14, TypeScript, Tailwind CSS, Framer Motion, and high-density telemetry UI.
* **Commerce & Lifecycle Layer (`apps/whmcs`)**: WHMCS 9 running on an isolated management VPS (invoicing, accounts, automated provisioning cron, client portal).
* **Provider Layer**: Contabo Reseller API (Day 1 VPS fleet) with generic `InfrastructureProvider` abstraction for frictionless expansion to Vultr, Hetzner, and AWS.

---

## 2. Core Service Pillars (The Launch Catalog)

1. **Cloud VPS & Servers**: High performance compute, full root access, Linux/Windows OS, instant provisioning (`1-2GB` • `4-6GB` • `8GB+` • `Custom`).
2. **Website Hosting**: High-speed NVMe hosting, 99.9% uptime SLA, cPanel included (`Starter` • `Business` • `Premium`).
3. **Cloud Storage**: Secure & reliable S3-compatible cloud storage (`100GB` • `250GB` • `500GB` • `1TB+`).
4. **Cloud Networking**: Public/Private IPs, Anycast DNS, Firewalls & DDoS mitigation, VPN & secure tunnels (`IPs` • `DNS` • `Firewalls` • `VPN`).
5. **Trading Infrastructure**: Optimized Forex/Crypto trading VPS, sub-millisecond execution routing, 24/7 uptime (`Trading VPS` • `Stable` • `24/7 Access`).
6. **Custom Cloud Infrastructure**: Tailored dedicated clusters, hybrid storage, private networking (`Custom Solutions`).

---

## 3. Monorepo Organization

```
bulverse/
├── docs/                     # Architectural specs, ADRs, brand tokens, and PRDs
├── apps/
│   ├── web/                  # Next.js 14+ storefront & marketing application
│   └── whmcs/                # WHMCS child theme, custom hooks, and module configurations
├── packages/
│   ├── tokens/               # Design tokens (colors, gradients, typography)
│   └── types/                # Domain TypeScript contracts & provider interfaces
└── README.md
```

---

## 4. Documentation Suite (Phase 0)

All technical architecture decisions, provider abstractions, and brand guardrails are documented in `docs/`:
* [00-project-charter.md](file:///C:/Users/HomePC/.gemini/antigravity/scratch/bulverse/docs/00-project-charter.md)
* [01-product-requirements.md](file:///C:/Users/HomePC/.gemini/antigravity/scratch/bulverse/docs/01-product-requirements.md)
* [02-architecture.md](file:///C:/Users/HomePC/.gemini/antigravity/scratch/bulverse/docs/02-architecture.md)
* [03-brand-system.md](file:///C:/Users/HomePC/.gemini/antigravity/scratch/bulverse/docs/03-brand-system.md)
* [04-data-model.md](file:///C:/Users/HomePC/.gemini/antigravity/scratch/bulverse/docs/04-data-model.md)
* [05-api-contract.md](file:///C:/Users/HomePC/.gemini/antigravity/scratch/bulverse/docs/05-api-contract.md)
* [06-provider-abstraction.md](file:///C:/Users/HomePC/.gemini/antigravity/scratch/bulverse/docs/06-provider-abstraction.md)
* [07-security.md](file:///C:/Users/HomePC/.gemini/antigravity/scratch/bulverse/docs/07-security.md)
* [08-deployment.md](file:///C:/Users/HomePC/.gemini/antigravity/scratch/bulverse/docs/08-deployment.md)
* [09-agent-workflow.md](file:///C:/Users/HomePC/.gemini/antigravity/scratch/bulverse/docs/09-agent-workflow.md)
* [10-mvp-scope.md](file:///C:/Users/HomePC/.gemini/antigravity/scratch/bulverse/docs/10-mvp-scope.md)
* [ADR-001: WHMCS Commerce Engine](file:///C:/Users/HomePC/.gemini/antigravity/scratch/bulverse/docs/adr/ADR-001-whmcs-commerce-engine.md)
* [ADR-002: Provider Abstraction Pattern](file:///C:/Users/HomePC/.gemini/antigravity/scratch/bulverse/docs/adr/ADR-002-provider-abstraction.md)
* [ADR-003: Monorepo Architecture](file:///C:/Users/HomePC/.gemini/antigravity/scratch/bulverse/docs/adr/ADR-003-monorepo-structure.md)
* [ADR-004: Lean Single-VPS Deployment](file:///C:/Users/HomePC/.gemini/antigravity/scratch/bulverse/docs/adr/ADR-004-lean-vps-deployment.md)

---

## 5. Quick Start (Web Application)

```bash
cd apps/web
npm install
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the Bulverse platform storefront.
