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
    pills: ['8GB', '12GB', '24GB', 'CUSTOM'],
    actionText: 'Deploy VPS',
    actionHref: 'https://portal.bulverse.cloud/cart.php?gid=1',
    tiers: [
      {
        id: 'vps-1',
        name: 'Starter Cloud VPS',
        badge: 'Dev & Microservices',
        specs: {
          cpu: '4 vCPU Cores',
          ram: '8 GB High-Speed RAM',
          storage: '100 GB NVMe Gen4 Storage',
          bandwidth: '32 TB Outbound Traffic',
          sla: '99.9% Uptime SLA',
          features: ['Full Root & SSH Access', 'Automated Daily Snapshots', '1 Dedicated IPv4 + /64 IPv6', 'Instant Auto-Provisioning'],
        },
        pills: ['8GB RAM', '4 vCPU', 'NVMe GEN4'],
        priceNgn: 12999,
        priceUsd: 8.99,
        billingPeriod: 'month',
        whmcsPid: 1,
      },
      {
        id: 'vps-2',
        name: 'Standard Cloud VPS',
        badge: 'Most Popular',
        highlight: true,
        specs: {
          cpu: '6 vCPU Cores',
          ram: '12 GB High-Speed RAM',
          storage: '200 GB NVMe Gen4 Storage',
          bandwidth: '32 TB Outbound Traffic',
          sla: '99.9% Uptime SLA',
          features: ['Full Root & SSH Access', 'Automated Daily Snapshots', '1 Dedicated IPv4 + /64 IPv6', 'Enterprise DDoS Scrubbing'],
        },
        pills: ['12GB RAM', '6 vCPU', 'NVMe GEN4'],
        priceNgn: 22500,
        priceUsd: 14.99,
        billingPeriod: 'month',
        whmcsPid: 2,
      },
      {
        id: 'vps-3',
        name: 'Power Cloud VPS',
        badge: 'Production & Enterprise',
        specs: {
          cpu: '8 vCPU Cores',
          ram: '24 GB High-Speed RAM',
          storage: '300 GB NVMe Gen4 Storage',
          bandwidth: '32 TB Outbound Traffic',
          sla: '99.9% Uptime SLA',
          features: ['Full Root & SSH Access', 'Dedicated Core Allocation', 'Windows / Linux License Ready', 'Priority Enterprise Support'],
        },
        pills: ['24GB RAM', '8 vCPU', 'ENTERPRISE'],
        priceNgn: 40500,
        priceUsd: 26.99,
        billingPeriod: 'month',
        whmcsPid: 3,
      },
    ],
  },
  {
    id: 'website-hosting',
    title: 'Website Hosting',
    tagline: 'Ultra-fast OpenLiteSpeed & CyberPanel cloud hosting tuned for business growth and seamless scaling.',
    iconName: 'Globe',
    colorScheme: 'cyan',
    features: [
      'OpenLiteSpeed + LSCache',
      '99.9% uptime SLA',
      '1-Click WordPress & Git',
      'CyberPanel included',
    ],
    pills: ['STARTER', 'PLUS', 'TURBO', 'UNLIMITED'],
    actionText: 'Choose Hosting',
    actionHref: 'https://portal.bulverse.cloud/cart.php?gid=2',
    tiers: [
      {
        id: 'host-nano',
        name: 'LiteSpeed Starter',
        badge: 'Student & Starter',
        specs: {
          cpu: '1 vCPU Core Share',
          ram: '1 GB Cloud Memory',
          storage: '5 GB Pure NVMe',
          bandwidth: 'Unmetered Traffic',
          sla: '99.9% SLA',
          features: ['1 Hosted Website', '5 Professional Business Emails', 'Free Let\'s Encrypt AutoSSL', 'CyberPanel & RainLoop Webmail', 'WordPress + LSCache 1-Click'],
        },
        pills: ['5GB NVMe', '1 SITE', 'FREE SSL'],
        priceNgn: 999,
        priceUsd: 0.75,
        billingPeriod: 'month',
        whmcsPid: 16,
      },
      {
        id: 'host-starter',
        name: 'LiteSpeed Plus',
        badge: 'Growing Web Presence',
        specs: {
          cpu: '1 Dedicated Core Allocated',
          ram: '2 GB Cloud Memory',
          storage: '15 GB Pure NVMe',
          bandwidth: 'Unmetered Traffic',
          sla: '99.9% SLA',
          features: ['2 Hosted Websites', 'Unlimited Business Emails', 'Free Let\'s Encrypt Wildcard SSL', 'CyberPanel Control Panel', 'Automated Cloud Backups'],
        },
        pills: ['PLUS', '2 SITES', 'LITESPEED'],
        priceNgn: 2499,
        priceUsd: 1.75,
        billingPeriod: 'month',
        whmcsPid: 4,
      },
      {
        id: 'host-biz',
        name: 'LiteSpeed Turbo',
        badge: 'Most Popular',
        highlight: true,
        specs: {
          cpu: '2 Cores Allocated',
          ram: '4 GB Cloud Memory',
          storage: '50 GB Pure NVMe',
          bandwidth: 'Unmetered Traffic',
          sla: '99.9% SLA',
          features: ['10 Hosted Websites', 'Free Wildcard AutoSSL', 'OpenLiteSpeed HTTP/3 + LSCache', 'Git Deployment & Staging Ready'],
        },
        pills: ['TURBO', '10 SITES', 'HTTP/3'],
        priceNgn: 5999,
        priceUsd: 4.20,
        billingPeriod: 'month',
        whmcsPid: 5,
      },
      {
        id: 'host-prem',
        name: 'LiteSpeed Unlimited',
        badge: 'Agencies & Portals',
        specs: {
          cpu: '4 Cores Allocated',
          ram: '8 GB Cloud Memory',
          storage: '100 GB Pure NVMe',
          bandwidth: 'Unmetered Traffic',
          sla: '99.9% SLA',
          features: ['Unlimited Websites', 'Redis Object Cache Acceleration', 'VIP System Admin Concierge', 'Priority Security & Backups'],
        },
        pills: ['UNLIMITED', '100GB NVMe', 'VIP'],
        priceNgn: 12999,
        priceUsd: 8.99,
        billingPeriod: 'month',
        whmcsPid: 6,
      },
    ],
  },
  {
    id: 'cloud-storage',
    title: 'Cloud Storage',
    tagline: 'Dedicated Storage VPS nodes pre-configured with MinIO S3 Object Storage and SFTP/SSH root access.',
    iconName: 'Database',
    colorScheme: 'purple',
    features: [
      'Dedicated Storage VPS',
      'MinIO S3 API & Console',
      'SFTP, Rclone & Rsync',
      '32 TB Outbound Traffic',
    ],
    pills: ['300GB', '400GB', '1TB', 'S3 VAULT'],
    actionText: 'Provision Storage',
    actionHref: 'https://portal.bulverse.cloud/cart.php?gid=3',
    tiers: [
      {
        id: 'store-300',
        name: 'Storage Vault 300GB',
        badge: 'Starter S3 Vault',
        specs: {
          cpu: '4 vCPU Cores',
          ram: '6 GB RAM',
          storage: '300 GB Dedicated Storage',
          bandwidth: '32 TB Outbound Traffic',
          sla: '99.9% Uptime SLA',
          features: ['Pre-Installed MinIO S3 API (:9000)', 'MinIO Web Console (:9001)', 'Full Root SSH, SFTP & Rsync', '1 Dedicated IPv4 Address'],
        },
        pills: ['300GB', 'MINIO S3', '6GB RAM'],
        priceNgn: 13500,
        priceUsd: 8.99,
        billingPeriod: 'month',
        whmcsPid: 7,
      },
      {
        id: 'store-400',
        name: 'Storage Vault 400GB',
        badge: 'Most Popular',
        highlight: true,
        specs: {
          cpu: '3 vCPU Cores',
          ram: '8 GB RAM',
          storage: '400 GB Dedicated Storage',
          bandwidth: '32 TB Outbound Traffic',
          sla: '99.9% Uptime SLA',
          features: ['Pre-Installed MinIO S3 API (:9000)', 'Bucket Versioning & Lifecycle', 'Rclone & Restia Backup Ready', '1 Dedicated IPv4 Address'],
        },
        pills: ['400GB', 'MINIO S3', '8GB RAM'],
        priceNgn: 22500,
        priceUsd: 14.99,
        billingPeriod: 'month',
        whmcsPid: 8,
      },
      {
        id: 'store-1tb',
        name: 'Storage Vault 1TB',
        badge: 'Enterprise Archive',
        specs: {
          cpu: '6 vCPU Cores',
          ram: '18 GB RAM',
          storage: '1,000 GB (1 TB) Storage',
          bandwidth: '32 TB Outbound Traffic',
          sla: '99.9% Uptime SLA',
          features: ['1 TB Dedicated S3 Object Vault', '6 vCPU + 18 GB RAM Performance', 'High-Throughput Multi-Stream', 'Full Root SSH & SFTP Control'],
        },
        pills: ['1TB', '18GB RAM', 'ENTERPRISE'],
        priceNgn: 37500,
        priceUsd: 24.99,
        billingPeriod: 'month',
        whmcsPid: 9,
      },
    ],
  },
  {
    id: 'cloud-networking',
    title: 'Cloud Networking',
    tagline: 'Instant WireGuard VPN Gateways, Dedicated Clean US/EU IPs, and encrypted private tunnels.',
    iconName: 'Network',
    colorScheme: 'blue',
    features: [
      'Instant QR & .conf Delivery',
      'Clean US & EU IP Routing',
      'Kernel-Space WireGuard',
      'Dedicated IPv4 Addons',
    ],
    pills: ['WIREGUARD', 'DEDICATED IP', 'CLEAN ROUTE', 'VPN'],
    actionText: 'Configure Network',
    actionHref: 'https://portal.bulverse.cloud/cart.php?gid=4',
    tiers: [
      {
        id: 'net-vpn-std',
        name: 'Standard WireGuard VPN',
        badge: 'Instant QR Setup',
        highlight: true,
        specs: {
          bandwidth: 'Unlimited Encrypted Traffic',
          sla: '99.9% Uptime SLA',
          features: ['Shared Clean US IPv4 Gateway', 'Instant .conf & Mobile QR Code', 'Zero-Logging Kernel WireGuard', 'Sub-ms Encrypted Tunneling'],
        },
        pills: ['WIREGUARD', 'US GATEWAY', 'INSTANT QR'],
        priceNgn: 5000,
        priceUsd: 4.00,
        billingPeriod: 'month',
        whmcsPid: 11,
      },
      {
        id: 'net-vpn-ded',
        name: 'Dedicated Clean IP VPN',
        badge: '1:1 Exclusive IPv4',
        specs: {
          bandwidth: 'Unlimited Encrypted Traffic',
          sla: '99.9% Uptime SLA',
          features: ['100% Exclusive Clean US IPv4', 'Ideal for Banking & Remote Ops', 'Instant .conf & Mobile QR Code', 'Full Port Forwarding Capable'],
        },
        pills: ['1:1 CLEAN IP', 'WIREGUARD', 'ZERO-LOGS'],
        priceNgn: 16000,
        priceUsd: 11.00,
        billingPeriod: 'month',
        whmcsPid: 17,
      },
      {
        id: 'net-ip',
        name: 'Dedicated Clean IPv4 (VPS Addon)',
        badge: 'Server IP Addon',
        specs: {
          features: ['Clean Reputation IPv4 Address', 'Reverse DNS (PTR) Self-Service', 'Routed to any Bulverse Cloud VPS', 'RIPE / ARIN Carrier Registered'],
        },
        pills: ['IPV4 ADDON', 'CLEAN REPUTATION', 'PTR DNS'],
        priceNgn: 4500,
        priceUsd: 3.00,
        billingPeriod: 'month',
        whmcsPid: 10,
      },
    ],
  },
  {
    id: 'trading-infrastructure',
    title: 'Trading Infrastructure',
    tagline: 'Always-on Windows Server VPS pre-configured with Remote Desktop (RDP) for MetaTrader 4/5 & algorithmic bots.',
    iconName: 'TrendingUp',
    colorScheme: 'emerald',
    features: [
      'Windows Server Included',
      'Low latency connection',
      'Run 24/7 without interruption',
      'Full RDP Desktop GUI',
    ],
    pills: ['WINDOWS RDP', 'MT4 / MT5', '24/7 ACCESS'],
    actionText: 'Launch Trading VPS',
    actionHref: 'https://portal.bulverse.cloud/cart.php?gid=5',
    tiers: [
      {
        id: 'trade-std',
        name: 'Trader Standard',
        badge: 'Forex & MT4/MT5',
        specs: {
          cpu: '4 vCPU High-Clock Cores',
          ram: '8 GB High-Speed RAM',
          storage: '100 GB NVMe Storage',
          bandwidth: '32 TB Uninterrupted Port',
          sla: '99.9% Trading Uptime SLA',
          features: ['Windows Server 2022 License Included', 'Pre-tuned for MetaTrader 4 & 5', 'Remote Desktop (RDP) Ready', 'Zero OS Sleep / Lock Policies'],
        },
        pills: ['4 vCPU / 8GB', 'WINDOWS GUI', '24/7 RDP'],
        priceNgn: 32500,
        priceUsd: 21.99,
        billingPeriod: 'month',
        whmcsPid: 13,
      },
      {
        id: 'trade-pro',
        name: 'Trader Pro Institutional',
        badge: 'HFT & Multi-Bot',
        highlight: true,
        specs: {
          cpu: '6 vCPU High-Clock Cores',
          ram: '12 GB High-Speed RAM',
          storage: '200 GB NVMe Storage',
          bandwidth: '32 TB Unthrottled Uplink',
          sla: '99.9% Trading Uptime SLA',
          features: ['Windows Server 2022 License Included', 'Run 10+ MT4/MT5 Terminals & EAs', 'EU / UK / US Broker Co-Location', 'Dedicated Resource Isolation'],
        },
        pills: ['6 vCPU / 12GB', 'WINDOWS SERVER', 'MULTI-BOT'],
        priceNgn: 58500,
        priceUsd: 39.99,
        billingPeriod: 'month',
        whmcsPid: 14,
      },
    ],
  },
  {
    id: 'custom-infrastructure',
    title: 'Custom Cloud Infrastructure',
    tagline: 'Bespoke enterprise cloud architecture, dedicated bare-metal hypervisors, and custom private deployments.',
    iconName: 'Cpu',
    colorScheme: 'purple',
    features: [
      'Single-Tenant Bare Metal',
      'AMD Ryzen / EPYC Processors',
      'Proxmox VE / Custom OS',
      '12–24h Architect Delivery',
    ],
    pills: ['BARE-METAL', 'PROXMOX', 'NVME RAID', 'ENTERPRISE'],
    actionText: 'Deploy Bare-Metal',
    actionHref: 'https://portal.bulverse.cloud/cart.php?gid=6',
    tiers: [
      {
        id: 'custom-private',
        name: 'Dedicated Private Hypervisor',
        badge: 'Single-Tenant Bare-Metal',
        specs: {
          cpu: 'AMD Ryzen / EPYC Dedicated Cores',
          ram: '64 GB to 256 GB ECC RAM',
          storage: '2x 1 TB NVMe Gen4 RAID',
          bandwidth: '32 TB+ Dedicated Pipe',
          sla: '99.99% Enterprise SLA',
          features: ['100% Physical Hardware Isolation', 'Proxmox VE / Ubuntu / Windows Ready', 'Direct Architect Provisioning (12-24h)', 'Custom Partitioning & Networking'],
        },
        pills: ['BARE-METAL', '64GB+ ECC', 'NVME RAID', 'ISOLATED'],
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
  { id: 'eu', city: 'Frankfurt', country: 'Germany', flag: '🇩🇪', ping: 38, region: 'EU-Central (Included)', subId: 6, surchargeUsd: 0, surchargeNgn: 0 },
  { id: 'uk', city: 'London', country: 'United Kingdom', flag: '🇬🇧', ping: 44, region: 'UK-South (+$3.00/mo)', subId: 7, surchargeUsd: 3.00, surchargeNgn: 4500 },
  { id: 'us-east', city: 'New York', country: 'United States', flag: '🇺🇸', ping: 82, region: 'US-East (+$3.00/mo)', subId: 25, surchargeUsd: 3.00, surchargeNgn: 4500 },
  { id: 'us-central', city: 'St. Louis', country: 'United States', flag: '🇺🇸', ping: 92, region: 'US-Central (+$2.50/mo)', subId: 26, surchargeUsd: 2.50, surchargeNgn: 3750 },
  { id: 'sin', city: 'Singapore', country: 'Singapore', flag: '🇸🇬', ping: 118, region: 'AP-South (+$5.50/mo)', subId: 28, surchargeUsd: 5.50, surchargeNgn: 8250 },
  { id: 'aus', city: 'Sydney', country: 'Australia', flag: '🇦🇺', ping: 145, region: 'AU-East (+$6.50/mo)', subId: 30, surchargeUsd: 6.50, surchargeNgn: 9750 },
];

