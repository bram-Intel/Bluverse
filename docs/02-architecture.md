# 02 — System Architecture Specification

## 1. Architectural Topology Overview

Bulverse operates on a **four-tier modular boundary**:

```
┌─────────────────────────────────────────────────────────────┐
│ 1. EXPERIENCE LAYER                                         │
│    Next.js 14+ App Router • TypeScript • Tailwind CSS      │
│    Hosted on Edge / Global CDN (Vercel or Cloudflare)       │
│    Public URL: https://bulverse.com                         │
└──────────────────────────────┬──────────────────────────────┘
                               │ Customer Auth & Checkout Direct
                               ▼
┌─────────────────────────────────────────────────────────────┐
│ 2. COMMERCE & SERVICE LIFECYCLE (WHMCS 9)                   │
│    PHP 8.2/8.3 • ionCube Loader • MySQL 8                   │
│    Customers • Invoices • Automated Cron • Tickets          │
│    Portal URL: https://portal.bulverse.com                  │
└──────────────────────────────┬──────────────────────────────┘
                               │ Provisioning Hooks
                               ▼
┌─────────────────────────────────────────────────────────────┐
│ 3. BULVERSE CONTROL API (Phase 2 / Provider Abstraction)    │
│    Node.js / TypeScript • Fastify / Express                 │
│    Generic Provider Interface • Webhooks • Idempotency Log  │
└──────────────────────────────┬──────────────────────────────┘
                               │ REST / OAuth2 API Calls
                               ▼
┌─────────────────────────────────────────────────────────────┐
│ 4. INFRASTRUCTURE FLEET                                     │
│    • Contabo Cloud API (Phase 1 Primary Reseller)           │
│    • Vultr API (Phase 2 Geographic Multi-Cloud)             │
│    • Domain Registrars (e.g. Enom / Namecheap / LogicBoxes) │
└─────────────────────────────────────────────────────────────┘
```

---

## 2. Infrastructure Footprint for Launch (Lean VPS Model)

To adhere strictly to the ₦500k MVP constraint:

* **Management VPS (The Bulverse Control Plane)**:
  * **Spec**: 2 vCPU, 4GB RAM, 80GB NVMe SSD, Ubuntu 22.04 LTS.
  * **Software Stack**: Nginx (reverse proxy & SSL termination), PHP 8.2-FPM with ionCube 13+, MySQL 8.0, Node.js v20 (LTS).
  * **Cron Automation**: Every 5 minutes (`*/5 * * * * php -q /path/to/whmcs/crons/cron.php`).
  * **DNS & Edge Protection**: Cloudflare proxy for DDoS mitigation, edge caching, and strict SSL/TLS.
* **Customer Compute Fleet**:
  * Exclusively hosted on Contabo's enterprise datacenters (Frankfurt, Nuremberg, St. Louis, Singapore, London).
  * Zero customer workload runs on the Bulverse management VPS.

---

## 3. Separation of Concerns & Boundary Rules

1. **The Frontend Never Touches Infrastructure Secrets**:
   * API tokens, client secrets, and root server credentials are strictly isolated from client-side bundles.
2. **Database Boundary**:
   * WHMCS maintains its internal schema (`whmcs_db`).
   * Custom application data or future API data resides in an isolated database (`bulverse_db`).
   * We never inject custom ad-hoc tables directly into the core WHMCS database.
3. **Upstream Safety**:
   * Custom WHMCS styling is implemented as a distinct child theme (`templates/bulverse`) and custom hook files (`includes/hooks/bulverse_*.php`), preserving core upgradeability.
