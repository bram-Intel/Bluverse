# 10 — MVP Scope Governance & Scale Triggers

## 1. Budget & Constraint Anchor
* **Budget**: ₦500,000 Total Initial Dev Budget.
* **Objective**: Maximum perceived platform authority, minimum operational overhead.

---

## 2. Explicit Non-Goals (What Bulverse MUST NOT Build Now)
To ensure survival and rapid launch, the following complexities are banned from V1:
* ❌ **No Custom Billing Engine**: Do not write Stripe/Paystack webhook handlers from scratch; WHMCS handles invoices, payment gateways, and recurring charges.
* ❌ **No Custom Hypervisor Orchestrator**: Do not write custom Proxmox/KVM virtualization daemons.
* ❌ **No Kubernetes Cluster**: Avoid Kubernetes, Istio, or service meshes until microservices are financially justified.
* ❌ **No Kafka / Distributed Queue**: Simple database transaction status and cron polling suffice for MVP order throughput.
* ❌ **No Multi-Region Management VPS**: One single management VPS is adequate until revenue hits the trigger point.

---

## 3. Scale Triggers (When to Upgrade Architecture)

| Stage | Trigger Metric | Architectural Action |
|---|---|---|
| **Stage 0 (Launch)** | ₦0 – ₦500k MRR | 1 Management VPS (WHMCS + DB) + Next.js on Vercel/Cloudflare + Contabo fleet. |
| **Stage 1 (Traction)** | 50+ Active VPS Subscriptions | Separate MySQL to a managed database node; implement automated S3 backup replication. |
| **Stage 2 (Growth)** | 250+ Active VPS Subscriptions | Launch independent Bulverse Control API; introduce Vultr / Hetzner multi-provider routing; add Redis queue. |
| **Stage 3 (Scale)** | 1,000+ Active Subscriptions | Multi-region API load balancing; dedicated enterprise telemetry & billing cluster; custom customer portal. |
| **Stage 4 (Infrastructure Co.)** | 5,000+ Active Workloads | Own IP address space (ASNs, BGP), dedicated bare-metal racks in Tier 3/4 datacenters, private hypervisor fleet. |
