# 00 — Project Charter: Bulverse

## 1. Mission & Strategic Vision
**Bulverse** is a digital infrastructure company built to make high-performance compute, storage, networking, and cloud services accessible, transparent, and scalable for businesses, developers, and enterprises.

We reject the notion that Bulverse is merely a "reseller website." Instead:
* **The Website is the Storefront**: A high-craft, high-converting digital portal that delivers immediate credibility and technical confidence.
* **WHMCS is the Commerce & Lifecycle Engine**: Handling client billing, recurring invoices, automated provisioning cron, and client portal operations.
* **Underlying Providers (Contabo, Vultr, etc.) are the Fleet**: The physical or virtual hypervisors executing customer workloads.

---

## 2. Core Economic Principle
> **"Build the smallest system capable of becoming the larger system."**

* **Initial Budget**: ₦500,000 MVP development budget.
* **Launch Objective**: Validate product-market fit and commercial demand at minimal capital outlay without accumulating throwaway technical debt.
* **Evolution Path**:
  * Phase 1 (₦0 – ₦X revenue): Single management VPS running WHMCS + Next.js storefront on edge/CDN + direct Contabo provisioning.
  * Phase 2 (Customer validation): Dedicated DB, automated multi-destination backups, telemetry endpoints.
  * Phase 3 (Scaling): Independent Bulverse Control API with multi-provider routing (Contabo + Vultr + Hetzner).
  * Phase 4 (Infrastructure Company): Dedicated hardware clusters, private IP blocks, custom hypervisor orchestration.

---

## 3. The 6 Launch Service Pillars
Extracted directly from the official brand identity poster:
1. **Cloud VPS & Servers**: Ultra-high performance virtual private servers with instant provisioning and full root access.
2. **Website Hosting**: Optimized cPanel web hosting with 99.9% uptime SLA and NVMe speeds.
3. **Cloud Storage**: Highly available, S3-compatible, encrypted object and block storage.
4. **Cloud Networking**: Dedicated public/private IP subnets, Anycast DNS, DDoS scrubbing, and secure VPNs.
5. **Trading Infrastructure**: Sub-millisecond latency VPS environments optimized for algorithmic trading and 24/7 market access.
6. **Custom Cloud Infrastructure**: Bespoke enterprise architecture for specialized workloads, compute clusters, and private storage networks.

---

## 4. Key Metrics for Success (MVP)
* **Conversion Time**: Under 3 minutes from landing page to deployed server invoice.
* **Uptime Standard**: 99.9% availability across management portal and customer compute.
* **Support Response**: Immediate automated notification and ticket generation.
* **Zero Double-Billing**: Guaranteed idempotent order processing.
