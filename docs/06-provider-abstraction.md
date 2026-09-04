# 06 — Provider Abstraction Pattern

## 1. Architectural Philosophy
Bulverse must never write provider-specific function calls (e.g., `contaboCreateVPS()`) into core business logic or frontend components.

All compute operations are bound to a strict, typed interface: `InfrastructureProvider`.

---

## 2. The TypeScript Interface Contract

```typescript
export interface ServerSpec {
  vCpus: number;
  memoryMb: number;
  diskGb: number;
  region: string;
  image: string;
  sshKeys?: string[];
  userData?: string;
}

export interface ServerInstance {
  id: string;                      // Internal Bulverse UUID
  providerId: string;              // Contabo/Vultr instance ID
  providerName: 'contabo' | 'vultr' | 'hetzner';
  name: string;
  status: 'provisioning' | 'running' | 'stopped' | 'error';
  primaryIp: string;
  ipv6?: string;
  region: string;
  specs: ServerSpec;
  createdAt: string;
}

export interface InfrastructureProvider {
  readonly name: string;

  createServer(spec: ServerSpec, idempotencyKey: string): Promise<ServerInstance>;
  getServer(providerInstanceId: string): Promise<ServerInstance>;
  deleteServer(providerInstanceId: string): Promise<void>;
  
  // Power Controls
  startServer(providerInstanceId: string): Promise<void>;
  stopServer(providerInstanceId: string): Promise<void>;
  rebootServer(providerInstanceId: string): Promise<void>;
  reinstallServer(providerInstanceId: string, image: string): Promise<void>;

  // Networking & Snapshots
  getIPAddresses(providerInstanceId: string): Promise<string[]>;
  createSnapshot(providerInstanceId: string, description: string): Promise<string>;
}
```

---

## 3. Implementation Class Hierarchy

```
InfrastructureProvider (Interface)
        │
        ├── ContaboProvider (Implements via Contabo REST API / OAuth2)
        ├── VultrProvider (Implements via Vultr API v2)
        └── MockProvider (For local offline testing & CI/CD)
```

By adhering to this pattern, Bulverse can dynamically route orders to whichever provider offers the best margins, lowest latency in a target region, or highest availability without changing a single line of customer-facing code.
