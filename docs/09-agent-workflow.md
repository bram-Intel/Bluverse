# 09 — Agentic Development Workflow & Rules of Engagement

## 1. Principles of Autonomous Engineering
AI assistants and human contributors must follow a strict, disciplined engineering cycle. **No coding agent may guess an architecture or modify files without an established specification.**

```
[IDEA] ──► [SPEC] ──► [ARCHITECTURE / ADR] ──► [TASK BREAKDOWN]
                                                      │
[OBSERVE] ◄── [DEPLOY] ◄── [REVIEW] ◄── [TEST] ◄── [IMPLEMENT]
```

---

## 2. Mandatory Rules for Coding Agents
1. **Source of Truth First**: Before authoring components or modules, read the corresponding document in `docs/` or the relevant ADR.
2. **Strict Component Boundaries**:
   * Frontend components (`apps/web`) must not introduce mock databases or mock provisioning logic. They interface via defined contracts.
   * WHMCS themes (`apps/whmcs`) must never modify core system templates directly; all edits belong in child theme overrides and hook scripts.
3. **Automated Verification**:
   * All TypeScript code must compile without errors (`npm run build` / `tsc --noEmit`).
   * No broken links or placeholder mock texts in customer-facing flows.
4. **Idempotency by Design**:
   * Any routine that interacts with billable cloud infrastructure must implement a unique order/execution idempotency key.
