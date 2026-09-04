# ADR-003: Monorepo Organization for Web, WHMCS, and Shared Packages

## Status
Accepted

## Context
Bulverse spans multiple execution environments: Next.js (TypeScript) for the marketing storefront, PHP/Smarty templates for the WHMCS Client Area, and shared design tokens / types. Scattering these into separate repositories creates version drift and disjointed brand experiences.

## Decision
Maintain a unified monorepo:
* `apps/web`: Next.js 14+ storefront.
* `apps/whmcs`: Git-managed WHMCS child theme, hooks, and module configs.
* `packages/tokens`: Shared CSS variables and styling constants.
* `packages/types`: Shared TypeScript definitions.
* `docs/`: Centralized single source of truth.

## Consequences
* **Positive**: Atomic commits, unified brand updates, synchronized release notes, and single-source documentation for agentic pair programming.
* **Negative**: Requires careful `.gitignore` rules to prevent WHMCS vendor files or runtime caches from polluting version control.
