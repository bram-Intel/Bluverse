# 07 — Security & Compliance Architecture

## 1. Core Security Tenet
> **Never trust the client bundle. Zero infrastructure credentials on the browser.**

---

## 2. Secrets Management
* **Forbidden**: Never use `NEXT_PUBLIC_CONTABO_SECRET` or any frontend environment variable prefix for provider authentication.
* **Storage**:
  * Production secrets are injected exclusively as environment variables into the server runtime (Node / PHP).
  * In WHMCS, module passwords and API secrets are stored encrypted using WHMCS's internal `cc_encryption_hash`.
* **Key Rotation**: Provider API keys must support zero-downtime rotation.

---

## 3. Role-Based Access Control (RBAC)
Bulverse recognizes 4 administrative permission tiers:
1. **Super Admin**: Infrastructure credentials, root API access, billing gateway configuration.
2. **Finance / Billing**: View invoices, issue refunds, adjust margins and FX multipliers.
3. **Customer Support**: View client services, trigger soft/hard server reboots, inspect provisioning error logs.
4. **Customer**: View and manage their own provisioned resources only.

---

## 4. Immutable Audit Logging
Every action that affects an infrastructure resource must generate an audit entry:
```
[TIMESTAMP] [ACTOR] [IP_ADDRESS] [ACTION] [RESOURCE_ID] [RESULT]
Example:
2026-09-04 16:35:12 UTC | admin@bulverse.com | 197.210.x.x | REINSTALL_OS (ubuntu-24) | inst-98124 | SUCCESS
```
Audit records are append-only and cannot be altered via normal admin interface controls.
