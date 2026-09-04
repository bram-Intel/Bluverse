# ADR-001: Selection of WHMCS as Initial Commerce & Service Management Engine

## Status
Accepted

## Context
Bulverse requires client account management, product catalog configuration, recurring multi-currency invoicing (NGN and USD), automated payment gateway reconciliation (Paystack, Flutterwave, Stripe, Crypto), suspension/unsuspension on non-payment, and ticketing support. Building this custom stack from scratch would consume 100% of the ₦500,000 budget before shipping any compute infrastructure.

## Decision
Adopt **WHMCS 9** as the commerce, client portal, and automated service management engine. WHMCS will operate on a self-hosted PHP/MySQL management VPS, customized via Git-managed child templates and hook filters to mirror Bulverse's precision brand identity.

## Consequences
* **Positive**: Battle-tested recurring billing, fraud detection, automated payment gateways, and pre-existing Contabo VPS provisioning modules.
* **Negative**: Requires a conventional PHP 8.2/8.3 + ionCube server environment; cannot be hosted on serverless platforms (e.g. Vercel).
* **Mitigation**: Isolate WHMCS to its own subdomain (`portal.bulverse.com`) while running the high-performance Next.js marketing storefront independently on global edge CDN (`bulverse.com`).
