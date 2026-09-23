# Bulverse Cloud Infrastructure — Contabo API Reseller & Provisioning Readiness Report

**Document Version:** 1.0.0  
**Date:** September 23, 2026  
**Audience:** Executive Leadership, Technical Operations, and Finance  
**Status:** **OPERATIONAL & PRODUCTION-READY**

---

## 1. Executive Summary

Bulverse Cloud has established a fully automated, API-driven compute provisioning pipeline. Instead of operating physical hypervisors or taking on upfront server hardware debt, Bulverse operates as an enterprise cloud reseller utilizing **Contabo’s official Enterprise REST API**.

### Current Status
* **API Handshake:** Verified and active (`HTTP 200 OK`).
* **WHMCS Module:** Native `bulverse_contabo` provisioning module developed, installed, and wired.
* **Billing & Automation:** When a customer completes checkout on `bulverse.cloud` / `portal.bulverse.cloud` via Paystack (NGN) or Crypto (USD), WHMCS immediately invokes the Contabo REST API, provisions the virtual machine, assigns a dedicated IPv4, and delivers the credentials to the customer's portal with zero manual intervention.
* **Profitability:** Every tier is structured with positive gross margins (**30% to 44% net spread**), with retail payments collected upfront before wholesale provider settlement occurs.

---

## 2. Plugged & Automated Services (Contabo Compute Fleet)

The following compute services are **100% integrated into the automated Contabo provisioning engine**:

| Service Plan | WHMCS PID | Contabo API Hardware ID | Technical Specifications | Contabo Wholesale Cost (USD) | Bulverse Retail (USD) | Bulverse Retail (NGN) | Monthly Profit Margin |
| :--- | :---: | :---: | :--- | :---: | :---: | :---: | :---: |
| **Starter Cloud VPS** | `1` | `V153` (Cloud VPS 4) | 4 vCPU Cores<br>8 GB Dedicated RAM<br>100 GB NVMe Gen4<br>32 TB Outbound Traffic<br>1 Dedicated Clean IPv4 | ~$5.28 – $6.60 / mo | **$8.99 / mo** | **₦12,999 / mo** | **+$2.39 – $3.71 (~41%)**<br>(~₦4,500 / order) |
| **Standard Cloud VPS** | `2` | `V154` (Cloud VPS 6) | 6 vCPU Cores<br>12 GB Dedicated RAM<br>200 GB NVMe Gen4<br>32 TB Outbound Traffic<br>1 Dedicated Clean IPv4 | ~$7.20 – $9.00 / mo | **$12.99 / mo** | **₦18,999 / mo** | **+$3.99 – $5.79 (~44%)**<br>(~₦6,500 / order) |
| **Power Cloud VPS** | `3` | `V155` (Cloud VPS 8) | 8 vCPU Cores<br>24 GB Dedicated RAM<br>300 GB NVMe Gen4<br>32 TB Outbound Traffic<br>1 Dedicated Clean IPv4 | ~$13.44 – $16.80 / mo | **$22.99 / mo** | **₦33,999 / mo** | **+$6.19 – $9.55 (~36%)**<br>(~₦10,000 / order) |

> **Market Advantage:** Competing providers (DigitalOcean, AWS, Linode) charge upwards of **$48.00/mo** for an 8 GB RAM instance. Bulverse offers 8 GB RAM at **₦12,999 ($8.99)**, capturing high market demand while maintaining healthy, sustainable profit margins.

---

## 3. Technical Integration & API Endpoints

The integration connects Bulverse's WHMCS billing cluster directly with Contabo's European API infrastructure.

### 3.1 Authentication Endpoint
* **URI:** `https://auth.contabo.com/auth/realms/contabo/protocol/openid-connect/token`
* **Protocol:** OAuth 2.0 (Password Grant)
* **Parameters:** `client_id`, `client_secret`, `username`, `password`
* **Status:** Verified (`HTTP 200 OK`) — Yields short-lived JWT Bearer tokens for API transactions.

### 3.2 Compute Provisioning Endpoint
* **URI:** `POST https://api.contabo.com/v1/compute/instances`
* **Required Headers:**
  * `Authorization: Bearer <access_token>`
  * `Content-Type: application/json`
  * `x-request-id: <RFC4122_UUID_v4>` *(e.g. `c4a41e33-7bb8-4bc8-b593-333069b2ff99`)*
* **Payload Structure:**
```json
{
  "productId": "V153",
  "region": "EU",
  "imageId": "afecbb85-e2fc-46f0-9684-b46b1faf00bb",
  "displayName": "vps-101.bulverse.cloud",
  "rootPassword": "SecureRandomGeneratedPassword!99",
  "period": 1
}
```
* **Response:** Returns JSON object containing `instanceId` and initial state.

### 3.3 Instance Telemetry & Networking
* **URI:** `GET https://api.contabo.com/v1/compute/instances/{instanceId}`
* **Function:** Queries assigned public IPv4, IPv6 block, memory status, and current execution state (`running`, `stopped`).

### 3.4 Lifecycle Management Endpoints (Client Self-Service)
The WHMCS client dashboard (`clientarea.tpl`) allows customers to trigger self-service actions without contacting support:

| Action | HTTP Method | Endpoint | Description |
| :--- | :---: | :--- | :--- |
| **Start / Power On** | `POST` | `/v1/compute/instances/{instanceId}/actions/start` | Boots a stopped VPS |
| **Stop / Graceful Power Off** | `POST` | `/v1/compute/instances/{instanceId}/actions/stop` | Sends ACPI shutdown |
| **Reboot / Restart** | `POST` | `/v1/compute/instances/{instanceId}/actions/restart` | Hard reboots instance |
| **Reinstall / Rebuild OS** | `PUT` | `/v1/compute/instances/{instanceId}` | Formats and resets OS image |
| **Suspension (Overdue)** | `POST` | `/v1/compute/instances/{instanceId}/actions/stop` | Auto-triggered by WHMCS if unpaid |
| **Termination (Cancelled)** | `DELETE` | `/v1/compute/instances/{instanceId}` | Deallocates instance upon cancellation |

---

## 4. End-to-End Operational Workflow

```
1. Customer visits bulverse.cloud / portal.bulverse.cloud
   │
   ▼
2. Selects VPS tier (Starter 8GB, Standard 12GB, or Power 24GB) & Operating System
   │
   ▼
3. Pays upfront via Paystack (NGN Transfer / Card) or NOWPayments (Crypto)
   │
   ▼
4. WHMCS receives instant webhook confirmation ➔ marks Invoice # as PAID
   │
   ▼
5. WHMCS invokes bulverse_contabo_CreateAccount()
   │
   ├─ Requests Bearer Token from auth.contabo.com
   ├─ Calls POST /v1/compute/instances with Product ID (V153/V154/V155)
   ├─ Saves returned Contabo instanceId to WHMCS subscription records
   └─ Polling retrieves dedicated IPv4 address and assigns to client account
   │
   ▼
6. Contabo charges corporate card on file in master account for wholesale rate
   │
   ▼
7. Customer receives Welcome Email with Dedicated IPv4, SSH Root credentials,
   and instant access to the Bulverse Cloud Console.
```

---

## 5. Overview of Full Bulverse Service Portfolio

While the **Cloud VPS** suite is automated via the Contabo REST API, Bulverse’s catalog includes all 6 product pillars configured with matching retail pricing across the landing page and WHMCS:

| Category | Plan / SKU | WHMCS PID | Monthly Retail Price | Delivery Engine |
| :--- | :--- | :---: | :---: | :--- |
| **Cloud Compute** | Starter Cloud VPS (8GB) | 1 | ₦12,999 / $8.99 | **Contabo API (Automated)** |
| | Standard Cloud VPS (12GB) | 2 | ₦18,999 / $12.99 | **Contabo API (Automated)** |
| | Power Cloud VPS (24GB) | 3 | ₦33,999 / $22.99 | **Contabo API (Automated)** |
| **Web Hosting** | Nano Cloud (5GB SSD) | 16 | ₦1,999 / $1.40 | cPanel Provisioning API |
| | Starter Cloud (15GB SSD) | 4 | ₦4,500 / $3.20 | cPanel Provisioning API |
| | Business Cloud (50GB SSD) | 5 | ₦9,800 / $6.90 | cPanel Provisioning API |
| | Premium Cloud (120GB SSD) | 6 | ₦19,500 / $13.50 | cPanel Provisioning API |
| **Cloud Storage** | Storage 100GB S3 | 7 | ₦4,000 / $2.75 | S3 API Bucket Provisioning |
| | Storage 500GB S3 | 8 | ₦14,000 / $9.90 | S3 API Bucket Provisioning |
| | Storage 1TB+ S3 | 9 | ₦25,000 / $17.50 | S3 API Bucket Provisioning |
| **Cloud Networking** | Dedicated Clean IPv4 | 10 | ₦4,500 / $3.00 | IP Routing & Allocation |
| | WireGuard VPN Gateway | 11 | ₦12,000 / $8.50 | Automated Tunnel Gateway |
| | Managed DDoS Shield | 12 | ₦18,000 / $12.00 | Anycast DNS & WAF Filter |
| **Trading Infra** | Trader Standard MT4/MT5 | 13 | ₦26,000 / $17.50 | Low-Latency Windows Compute |
| | Trader Pro Institutional | 14 | ₦48,000 / $32.00 | Equinix Cross-Connect Windows Compute |
| **Custom Infra** | Dedicated Private Hypervisor | 15 | ₦250,000 / $165.00 | Custom Solutions Consultation |

---

## 6. Financial Settlement & Risk Architecture

1. **Zero Upfront Inventory Cost:** Bulverse incurs $0 in hardware overhead. A server is only ordered downstream from Contabo after the customer’s funds have cleared in Bulverse's account.
2. **Immediate Cash Flow Positive:** Bulverse collects ₦12,999 (~$8.99) upfront via Paystack, while Contabo bills ~$5.28 to the card on file. The margin remains immediately liquid.
3. **No Currency Mismatch:** While Contabo bills in EUR/USD, Bulverse’s NGN prices are pegged to real exchange rates, ensuring currency fluctuations do not compress margins.

---

## 7. Sign-off & System Readiness

* **API Handshake:** `PASS`
* **Database & Price Sync:** `PASS`
* **Automated Provisioning Logic:** `PASS`
* **Frontend-to-Portal Checkout Links:** `PASS`
* **Overall Status:** **READY FOR COMMERCIAL LAUNCH**
