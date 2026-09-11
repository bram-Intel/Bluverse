export interface ServiceTier {
  id: string;
  name: string;
  badge?: string;
  specs: {
    cpu?: string;
    ram?: string;
    storage?: string;
    bandwidth?: string;
    sla?: string;
    features: string[];
  };
  pills: string[];
  priceNgn: number;
  priceUsd: number;
  billingPeriod: string;
  whmcsPid: number;
  highlight?: boolean;
}

export interface ServiceCategory {
  id: string;
  title: string;
  tagline: string;
  iconName: string;
  colorScheme: 'blue' | 'cyan' | 'purple' | 'emerald';
  features: string[];
  pills: string[];
  tiers: ServiceTier[];
  actionText: string;
  actionHref: string;
}

export const CATALOG_SERVICES: ServiceCategory[] = [
  {
    id: 'cloud-vps',
    title: 'Cloud VPS & Servers',
    tagline: 'High performance compute instances with dedicated virtual resources and NVMe storage.',
    iconName: 'Server',
    colorScheme: 'blue',
    features: [
      'High performance servers',
      'Full root access',
      'Linux & Windows OS',
      'Instant provisioning',
    ],
    pills: ['1-2GB', '4-6GB', '8GB+', 'CUSTOM'],
    actionText: 'Deploy VPS',
    actionHref: 'https://portal.bulverse.cloud/cart.php?gid=1',
    tiers: [
      {
        id: 'vps-1',
        name: 'Starter Cloud VPS',
        badge: 'Dev & Microservices',
        specs: {
          cpu: '1 vCPU (AMD EPYC™)',
          ram: '2 GB DDR4 RAM',
          storage: '30 GB Gen4 NVMe',
          bandwidth: '1 TB Outbound Traffic',
          sla: '99.9% Uptime SLA',
          features: ['Full Root & SSH Access', 'Automated Daily Snapshots', '1 Dedicated IPv4 + /64 IPv6', 'Instant OS Rebuild'],
        },
        pills: ['2GB RAM', '1 vCPU', 'INSTANT'],
        priceNgn: 4999,
        priceUsd: 3.50,
        billingPeriod: 'month',
        whmcsPid: 1,
      },
      {
        id: 'vps-2',
        name: 'Standard Cloud VPS',
        badge: 'Most Popular',
        highlight: true,
        specs: {
          cpu: '2 vCPU (AMD EPYC™)',
          ram: '4 GB DDR4 RAM',
          storage: '60 GB Gen4 NVMe',
          bandwidth: '2 TB Outbound Traffic',
          sla: '99.9% Uptime SLA',
          features: ['Full Root & SSH Access', 'Automated Daily Snapshots', '1 Dedicated IPv4 + /64 IPv6', 'Enterprise DDoS Scrubbing'],
        },
        pills: ['4GB RAM', '2 vCPU', 'NVMe GEN4'],
        priceNgn: 8999,
        priceUsd: 6.00,
        billingPeriod: 'month',
        whmcsPid: 2,
      },
      {
        id: 'vps-3',
        name: 'Power Cloud VPS',
        badge: 'Production & DBs',
        specs: {
          cpu: '4 vCPU (AMD EPYC™)',
          ram: '8 GB DDR4 RAM',
          storage: '120 GB Gen4 NVMe',
          bandwidth: '4 TB Outbound Traffic',
          sla: '99.9% Uptime SLA',
          features: ['Full Root & SSH Access', 'Dedicated Core Allocation', 'Windows / Linux License Ready', 'Priority Hardware VIP Queue'],
        },
        pills: ['8GB RAM', '4 vCPU', 'ENTERPRISE'],
        priceNgn: 16999,
        priceUsd: 12.00,
        billingPeriod: 'month',
        whmcsPid: 3,
      },
    ],
  },
  {
    id: 'website-hosting',
    title: 'Website Hosting',
    tagline: 'High-speed cPanel shared cloud hosting tuned for business growth and seamless scaling.',
    iconName: 'Globe',
    colorScheme: 'cyan',
    features: [
      'Fast & secure hosting',
      '99.9% uptime',
      'Easy management',
      'cPanel included',
    ],
    pills: ['STARTER', 'BUSINESS', 'PREMIUM'],
    actionText: 'Choose Hosting',
    actionHref: 'https://portal.bulverse.cloud/cart.php?gid=2',
    tiers: [
      {
        id: 'host-starter',
        name: 'Starter Cloud',
        badge: 'Single Web Presence',
        specs: {
          cpu: '1 Core Allocated',
          ram: '1 GB Cloud Memory',
          storage: '15 GB Pure NVMe',
          bandwidth: 'Unmetered Traffic',
          sla: '99.9% SLA',
          features: ['1 Hosted Website', 'Free Wildcard SSL', 'cPanel Control Panel', 'Daily Cloud Backups'],
        },
        pills: ['STARTER', '1 SITE', 'FREE SSL'],
        priceNgn: 4500,
        priceUsd: 3.20,
        billingPeriod: 'month',
        whmcsPid: 4,
      },
      {
        id: 'host-biz',
        name: 'Business Cloud',
        badge: 'Growing Brands',
        highlight: true,
        specs: {
          cpu: '2 Cores Allocated',
          ram: '3 GB Cloud Memory',
          storage: '50 GB Pure NVMe',
          bandwidth: 'Unmetered Traffic',
          sla: '99.9% SLA',
          features: ['5 Hosted Websites', 'Free Wildcard SSL', 'LiteSpeed Web Server + Cache', 'Premium SpamExperts Gateway'],
        },
        pills: ['BUSINESS', '5 SITES', 'LITESPEED'],
        priceNgn: 9800,
        priceUsd: 6.90,
        billingPeriod: 'month',
        whmcsPid: 5,
      },
      {
        id: 'host-prem',
        name: 'Premium Cloud',
        badge: 'Agencies & Portals',
        specs: {
          cpu: '4 Cores Allocated',
          ram: '6 GB Cloud Memory',
          storage: '120 GB Pure NVMe',
          bandwidth: 'Unmetered Traffic',
          sla: '99.9% SLA',
          features: ['Unlimited Websites', 'Free Dedicated IP Address', 'VIP System Admin Concierge', 'Malware Removal Guarantee'],
        },
        pills: ['PREMIUM', 'UNLIMITED', 'DEDICATED IP'],
        priceNgn: 19500,
        priceUsd: 13.50,
        billingPeriod: 'month',
        whmcsPid: 6,
      },
    ],
  },
  {
    id: 'cloud-storage',
    title: 'Cloud Storage',
    tagline: 'S3-compatible, multi-zone replicated storage for mission-critical backups and digital assets.',
    iconName: 'Database',
    colorScheme: 'purple',
    features: [
      'Secure & reliable storage',
      'Access anywhere',
      'Perfect for backups',
      'Scalable as you grow',
    ],
    pills: ['100GB', '250GB', '500GB', '1TB+'],
    actionText: 'Provision Storage',
    actionHref: 'https://portal.bulverse.cloud/cart.php?gid=3',
    tiers: [
      {
        id: 'store-100',
        name: 'Storage 100GB',
        specs: {
          storage: '100 GB S3-Compatible',
          bandwidth: 'Zero Egress Fees within Bulverse',
          sla: '99.9999999% Durability',
          features: ['AES-256 Server-side Encryption', 'AWS S3 API Compatibility', 'Unlimited API Requests', 'Instant Bucket Generation'],
        },
        pills: ['100GB', 'S3 API', 'ENCRYPTED'],
        priceNgn: 4000,
        priceUsd: 2.75,
        billingPeriod: 'month',
        whmcsPid: 7,
      },
      {
        id: 'store-500',
        name: 'Storage 500GB',
        highlight: true,
        specs: {
          storage: '500 GB S3-Compatible',
          bandwidth: 'Zero Egress Fees within Bulverse',
          sla: '99.9999999% Durability',
          features: ['Multi-Zone Data Replication', 'Bucket Lifecycle Rules', 'Ransomware Immutability Lock', 'Access Key Delegation'],
        },
        pills: ['500GB', 'MULTI-ZONE', 'IMMUTABLE'],
        priceNgn: 14000,
        priceUsd: 9.90,
        billingPeriod: 'month',
        whmcsPid: 8,
      },
      {
        id: 'store-1tb',
        name: 'Storage 1TB+',
        specs: {
          storage: '1,000 GB+ S3-Compatible',
          bandwidth: 'High Throughput Multi-Stream',
          sla: '99.9999999% Durability',
          features: ['Dedicated Bandwidth Pipe', 'Custom Domain Aliases', 'Disaster Recovery Warm Sync', 'Volume Tiering Discounts'],
        },
        pills: ['1TB+', 'HIGH SPEED', 'ENTERPRISE'],
        priceNgn: 25000,
        priceUsd: 17.50,
        billingPeriod: 'month',
        whmcsPid: 9,
      },
    ],
  },
  {
    id: 'cloud-networking',
    title: 'Cloud Networking',
    tagline: 'Enterprise IP assignment, low-latency Anycast routing, automated firewalls, and encrypted tunnels.',
    iconName: 'Network',
    colorScheme: 'blue',
    features: [
      'Public & Private IPs',
      'DNS Management',
      'Firewalls & Security',
      'VPN & Secure Connectivity',
    ],
    pills: ['IPS', 'DNS', 'FIREWALLS', 'VPN'],
    actionText: 'Configure Network',
    actionHref: 'https://portal.bulverse.cloud/cart.php?gid=4',
    tiers: [
      {
        id: 'net-ip',
        name: 'Dedicated Clean IPv4',
        specs: {
          features: ['Clean Reputation Address Block', 'Reverse DNS (PTR) Self-Service', 'Instant Routing to any Bulverse VPS', 'Carrier-Grade ARIN / RIPE Registered'],
        },
        pills: ['IPS', 'CLEAN REPUTATION', 'REVERSE DNS'],
        priceNgn: 4500,
        priceUsd: 3.00,
        billingPeriod: 'month',
        whmcsPid: 10,
      },
      {
        id: 'net-vpn',
        name: 'Private WireGuard VPN Gateway',
        highlight: true,
        specs: {
          features: ['Sub-1ms Private Node Mesh', 'Zero-Logging Kernel WireGuard', 'Site-to-Site Encrypted Tunnels', 'Full Control Admin Portal'],
        },
        pills: ['VPN', 'WIREGUARD', 'ZERO-LOGS'],
        priceNgn: 12000,
        priceUsd: 8.50,
        billingPeriod: 'month',
        whmcsPid: 11,
      },
      {
        id: 'net-firewall',
        name: 'Managed DDoS Shield & Anycast DNS',
        specs: {
          features: ['Up to 1.2 Tbps L3/L4 Mitigation', 'Sub-15ms Global Anycast DNS', 'Web Application Firewall Rules', 'Real-Time Threat Telemetry'],
        },
        pills: ['FIREWALLS', '1.2 TBPS', 'ANYCAST DNS'],
        priceNgn: 18000,
        priceUsd: 12.00,
        billingPeriod: 'month',
        whmcsPid: 12,
      },
    ],
  },
  {
    id: 'trading-infrastructure',
    title: 'Trading Infrastructure',
    tagline: 'Ultra-low latency VPS co-located adjacent to institutional liquidity centers for algorithmic precision.',
    iconName: 'TrendingUp',
    colorScheme: 'emerald',
    features: [
      'Optimized Trading VPS',
      'Low latency connection',
      'Run 24/7 without interruption',
      'Stable & secure environment',
    ],
    pills: ['TRADING VPS', 'STABLE', '24/7 ACCESS'],
    actionText: 'Launch Trading VPS',
    actionHref: 'https://portal.bulverse.cloud/cart.php?gid=5',
    tiers: [
      {
        id: 'trade-std',
        name: 'Trader Standard',
        badge: 'Forex & MT4/MT5',
        specs: {
          cpu: '2 vCPU High-Clock',
          ram: '4 GB High-Speed RAM',
          storage: '60 GB NVMe Storage',
          bandwidth: 'Uninterrupted Gigabit Port',
          sla: '100% Trading Hours Uptime SLA',
          features: ['Pre-tuned for MetaTrader 4 & 5', 'London / Frankfurt Liquidity Cross-Connect', 'Remote Desktop Protocol (RDP) Ready', 'Zero OS Sleep / Lock Policies'],
        },
        pills: ['TRADING VPS', '< 1MS LIQUIDITY', '24/7 ACCESS'],
        priceNgn: 26000,
        priceUsd: 17.50,
        billingPeriod: 'month',
        whmcsPid: 13,
      },
      {
        id: 'trade-pro',
        name: 'Trader Pro Institutional',
        badge: 'HFT & Multi-Bot',
        highlight: true,
        specs: {
          cpu: '4 vCPU High-Clock 3.8GHz+',
          ram: '8 GB High-Speed RAM',
          storage: '120 GB NVMe Storage',
          bandwidth: 'Dedicated Unthrottled Uplink',
          sla: '100% Trading Hours Uptime SLA',
          features: ['Direct Equinix LD4 / NY4 Routing', 'Automated Daily Bot Backup', 'Dual Power & Hardware Redundancy', 'Pre-installed Windows Server 2022'],
        },
        pills: ['STABLE', 'WINDOWS SERVER', 'EQUINIX ROUTE'],
        priceNgn: 48000,
        priceUsd: 32.00,
        billingPeriod: 'month',
        whmcsPid: 14,
      },
    ],
  },
  {
    id: 'custom-infrastructure',
    title: 'Custom Cloud Infrastructure',
    tagline: 'Bespoke enterprise cloud architecture, dedicated compute hypervisors, and custom private deployments.',
    iconName: 'Cpu',
    colorScheme: 'purple',
    features: [
      'Tailored to your needs',
      'Servers, Storage, Networking',
      'Built for your workload',
      'Scalable & Flexible',
    ],
    pills: ['SERVERS', 'STORAGE', 'NETWORKING', 'CUSTOM SOLUTIONS'],
    actionText: 'Consult Solutions Architect',
    actionHref: 'https://portal.bulverse.cloud/cart.php?gid=6',
    tiers: [
      {
        id: 'custom-private',
        name: 'Dedicated Private Hypervisor',
        specs: {
          cpu: 'AMD EPYC / Intel Xeon Bare-Metal',
          ram: '64 GB to 1 TB RAM',
          storage: 'Custom NVMe RAID 10 Arrays',
          bandwidth: '10 Gbps Unmetered Pipe',
          sla: '99.99% Enterprise SLA',
          features: ['Dedicated Physical Hardware Isolation', 'Private BGP Routing & ASNs', 'Direct Architect Slack / Discord Channel', 'Compliant Data Residency'],
        },
        pills: ['SERVERS', 'STORAGE', 'NETWORKING', 'CUSTOM SOLUTIONS'],
        priceNgn: 250000,
        priceUsd: 165.00,
        billingPeriod: 'month',
        whmcsPid: 15,
      },
    ],
  },
];

export const TRUST_BADGES = [
  {
    icon: 'ShieldCheck',
    title: 'RELIABLE',
    subtitle: '99.9% UPTIME',
    description: 'Hardware redundancy and multi-homed BGP uplinks ensure round-the-clock availability.',
  },
  {
    icon: 'Gauge',
    title: 'HIGH PERFORMANCE',
    subtitle: 'PCIe Gen4 NVMe',
    description: 'Enterprise processors and ultra-fast storage arrays delivering relentless compute speed.',
  },
  {
    icon: 'Lock',
    title: 'SECURE',
    subtitle: 'BY DESIGN',
    description: 'Kernel-isolated hypervisors, hardware firewalls, and carrier-grade DDoS scrubbing.',
  },
  {
    icon: 'TrendingUp',
    title: 'SCALABLE',
    subtitle: 'AS YOU GROW',
    description: 'Upgrade CPU, RAM, and storage seamlessly without service rebuilds or IP changes.',
  },
  {
    icon: 'Headphones',
    title: 'EXPERT SUPPORT',
    subtitle: '24/7/365 ENGINEERS',
    description: 'Direct assistance from knowledgeable systems administrators, not script readers.',
  },
];

export const DATACENTERS = [
  { id: 'fra', city: 'Frankfurt', country: 'Germany', flag: '🇩🇪', ping: 42, region: 'EU-Central' },
  { id: 'ams', city: 'Amsterdam', country: 'Netherlands', flag: '🇳🇱', ping: 46, region: 'EU-West' },
  { id: 'lon', city: 'London', country: 'United Kingdom', flag: '🇬🇧', ping: 51, region: 'EU-North' },
  { id: 'nyc', city: 'New York', country: 'United States', flag: '🇺🇸', ping: 88, region: 'US-East' },
  { id: 'sin', city: 'Singapore', country: 'Singapore', flag: '🇸🇬', ping: 124, region: 'AP-South' },
  { id: 'los', city: 'Lagos', country: 'Nigeria', flag: '🇳🇬', ping: 18, region: 'AF-West (Edge POP)' },
];
