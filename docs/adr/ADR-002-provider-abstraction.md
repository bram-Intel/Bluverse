# ADR-002: Infrastructure Provider Abstraction Pattern

## Status
Accepted

## Context
Bulverse starts with Contabo as the primary VPS provider due to competitive price-to-performance ratios and official reseller API support. However, tying core business logic, UI models, or customer databases directly to Contabo's proprietary data structures would create catastrophic technical debt if Bulverse later adds Vultr, AWS, or private hypervisors.

## Decision
Establish a generic `InfrastructureProvider` interface and data contract from Day 1. Every compute, storage, or networking request is passed through an abstraction adapter.

## Consequences
* **Positive**: Allows frictionless multi-cloud routing (e.g., routing European VPS to Contabo Frankfurt and North American VPS to Vultr New Jersey) without rewriting user interfaces or databases.
* **Negative**: Requires maintaining adapter code and normalizing provider-specific error responses.
* **Mitigation**: Implement strict TypeScript interface contracts and integration test suites for each provider adapter.
