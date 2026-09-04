# ADR-004: Lean Single-VPS Architecture for Launch

## Status
Accepted

## Context
Deploying multi-region clusters, managed databases, and enterprise load balancers for Day 1 would exceed the ₦500,000 MVP development budget on recurring hosting fees alone before acquiring the first 10 customers.

## Decision
Host the Bulverse control plane on **one high-reliability management VPS** (2 vCPU, 4GB RAM, NVMe) protected by Cloudflare CDN/WAF. Customer compute instances will run on Contabo's datacenter fleet.

## Consequences
* **Positive**: Operational cost is kept under \$15–\$25/month; simple administration; zero inter-service network latency between WHMCS and MySQL.
* **Negative**: Single point of failure for the management control plane (though customer VPS instances remain running independently even if the management VPS suffers brief downtime).
* **Mitigation**: Automated off-site nightly database dumps to S3, Cloudflare edge caching, and strict upgrade triggers when customer count reaches 50.
