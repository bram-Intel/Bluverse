'use client';

import React, { useState } from 'react';
import { Terminal, Copy, Check, Play, ShieldAlert, Cpu } from 'lucide-react';

export const TerminalSimulator: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'cli' | 'api' | 'ssh'>('cli');
  const [copied, setCopied] = useState(false);

  const snippets = {
    cli: `# 1. Install Bulverse CLI
curl -fsSL https://get.bulverse.com/cli.sh | sh

# 2. Authenticate
bulverse auth login --token=$BULVERSE_API_KEY

# 3. Deploy NVMe Cloud VPS in Frankfurt
bulverse deploy \\
  --name="api-gateway-prod" \\
  --tier="vps-4g" \\
  --region="fra01" \\
  --os="ubuntu-24.04" \\
  --ssh-key="id_ed25519"

# Output:
✔ Request verified (IdempotencyKey: 8f92a1...)
✔ Provisioning AMD EPYC™ 7763 NVMe instance...
✔ Primary IPv4 allocated: 194.164.72.18
✔ Server Active in 42 seconds! Status: READY`,

    api: `POST /v1/compute/instances HTTP/1.1
Host: api.bulverse.com
Authorization: Bearer bul_live_9a87f10b2c34...
Content-Type: application/json
X-Idempotency-Key: ord_1084_prov_step_1

{
  "name": "trading-bot-ld4",
  "tier": "trading-vps-pro",
  "region": "lon01",
  "datacenter": "Equinix LD4",
  "os": "windows-server-2022",
  "backups_enabled": true
}

// 201 Created
{
  "id": "srv_01HV4J8Y...",
  "status": "provisioning",
  "assigned_ip": "185.220.101.44",
  "created_at": "2026-09-04T16:30:00Z"
}`,

    ssh: `# Connect directly via SSH to your provisioned instance
ssh -i ~/.ssh/bulverse_key root@194.164.72.18

Welcome to Bulverse Cloud Infrastructure!
  System: Ubuntu 24.04 LTS (GNU/Linux 6.8.0-31-generic x86_64)
  Compute Node: FRA-01 (AMD EPYC™ Enterprise Cluster)
  Port Speed: 10 Gbps (Sub-1ms direct cross-connect)
  Hardware Root Access: Granted

root@api-gateway-prod:~# htop
root@api-gateway-prod:~# docker ps`,
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(snippets[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="cli" className="py-20 bg-[#030611] relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Description Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-bulverse-blue/40 bg-bulverse-blue/10 px-3.5 py-1 text-xs font-mono text-bulverse-cyan">
              <Terminal className="h-3.5 w-3.5" />
              <span>DEVELOPER-FIRST INFRASTRUCTURE</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl font-black text-white uppercase tracking-tight leading-tight">
              Control Your Fleet via CLI, API, or Client Portal
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Automate deployments through standardized REST contracts, orchestrate with the upcoming Bulverse CLI, or manage power states directly from the WHMCS console.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <div className="h-2 w-2 rounded-full bg-bulverse-cyan mt-2"></div>
                <div>
                  <div className="text-sm font-bold text-white">Full Root & IPMI Console Access</div>
                  <div className="text-xs text-slate-400">Zero restrictions on kernels, custom firewalls, or container daemons.</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="h-2 w-2 rounded-full bg-bulverse-blue mt-2"></div>
                <div>
                  <div className="text-sm font-bold text-white">Deterministic Idempotency</div>
                  <div className="text-xs text-slate-400">Never duplicate instances on network drops or retry attempts.</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Interactive Terminal Frame */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-white/15 bg-[#080E24] shadow-2xl overflow-hidden backdrop-blur-xl">
              
              {/* Terminal Window Chrome */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#060A1D] border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-500/80" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                  <div className="h-3 w-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-3 text-xs font-mono text-slate-400">terminal@bulverse-node-01:~</span>
                </div>

                {/* Tabs */}
                <div className="flex items-center gap-1 bg-black/40 p-1 rounded-lg border border-white/5">
                  <button
                    onClick={() => setActiveTab('cli')}
                    className={`px-3 py-1 rounded-md text-[11px] font-mono transition-colors ${
                      activeTab === 'cli' ? 'bg-bulverse-blue text-white font-bold' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    CLI
                  </button>
                  <button
                    onClick={() => setActiveTab('api')}
                    className={`px-3 py-1 rounded-md text-[11px] font-mono transition-colors ${
                      activeTab === 'api' ? 'bg-bulverse-blue text-white font-bold' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    API / JSON
                  </button>
                  <button
                    onClick={() => setActiveTab('ssh')}
                    className={`px-3 py-1 rounded-md text-[11px] font-mono transition-colors ${
                      activeTab === 'ssh' ? 'bg-bulverse-blue text-white font-bold' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    SSH Root
                  </button>
                </div>

                {/* Copy Button */}
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-mono text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
                  title="Copy snippet"
                >
                  {copied ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              {/* Terminal Body */}
              <div className="p-5 font-mono text-xs text-slate-200 overflow-x-auto bg-[#040816]/95 max-h-[380px] leading-relaxed">
                <pre className="whitespace-pre">{snippets[activeTab]}</pre>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
