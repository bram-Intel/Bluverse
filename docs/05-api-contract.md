# 05 — API Contract Specification (`/api/v1`)

## 1. Overview
The Bulverse Control API decouples frontend interfaces and commerce engines from underlying infrastructure providers.

* **Base URL**: `https://api.bulverse.com/v1`
* **Content-Type**: `application/json`
* **Authentication**: Bearer Token / API Key (`X-Bulverse-Key`)

---

## 2. Core Endpoints

### 2.1 Products & Availability
* `GET /products`
  * Returns active catalog, regions, pricing tiers, and stock status.
* `GET /products/:id/pricing`
  * Dynamic price calculation: $\text{BaseCost} \times \text{Margin} + \text{FX Buffer}$.

### 2.2 Server Management
* `GET /servers`
  * Lists all instances belonging to the authenticated customer.
* `GET /servers/:id`
  * Detailed specs, real-time power state, primary IPv4, IPv6, and bandwidth utilization.
* `POST /servers/:id/power`
  * Body: `{ "action": "start" | "stop" | "restart" }`
* `POST /servers/:id/reinstall`
  * Body: `{ "osId": "ubuntu-24-04", "sshKeyId": "key_xyz" }`
* `GET /servers/:id/metrics`
  * CPU, RAM, Disk I/O, and Network transfer history.

### 2.3 Webhooks (Commerce Ingestion)
* `POST /webhooks/whmcs`
  * Ingests WHMCS events: `InvoicePaid`, `ServiceSuspended`, `ServiceTerminated`.

### 2.4 Health & Telemetry
* `GET /health`
  * Returns operational readiness:
  ```json
  {
    "status": "healthy",
    "timestamp": "2026-09-04T16:30:00Z",
    "services": {
      "database": "up",
      "whmcs": "up",
      "provider_contabo": "up"
    }
  }
  ```
