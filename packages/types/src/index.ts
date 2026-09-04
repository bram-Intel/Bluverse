export type ServiceCategory =
  | 'cloud-vps'
  | 'website-hosting'
  | 'cloud-storage'
  | 'cloud-networking'
  | 'trading-infrastructure'
  | 'custom-infrastructure';

export type OperatingSystem =
  | 'ubuntu-24-04'
  | 'ubuntu-22-04'
  | 'debian-12'
  | 'almalinux-9'
  | 'windows-server-2022';

export interface DatacenterRegion {
  id: string;
  name: string;
  country: string;
  flag: string;
  city: string;
  pingMs: number;
  available: boolean;
}

export interface VpsTier {
  id: string;
  name: string;
  badge?: string;
  vCpus: number;
  memoryGb: number;
  storageGb: number;
  storageType: 'NVMe' | 'SSD';
  trafficTb: number;
  portSpeedGbps: number;
  priceNgn: number;
  priceUsd: number;
  whmcsPid: number;
  isPopular?: boolean;
}

export interface HostingTier {
  id: string;
  name: string;
  websites: number | 'Unlimited';
  storageGb: number;
  bandwidth: string;
  freeSsl: boolean;
  cPanelIncluded: boolean;
  priceNgn: number;
  priceUsd: number;
  whmcsPid: number;
}

export interface StorageTier {
  id: string;
  name: string;
  capacityGb: number;
  s3Compatible: boolean;
  multiZoneReplication: boolean;
  priceNgn: number;
  priceUsd: number;
}

export interface NetworkingAddon {
  id: string;
  name: string;
  description: string;
  priceNgn: number;
  priceUsd: number;
}

export interface TradingVpsTier {
  id: string;
  name: string;
  vCpus: number;
  memoryGb: number;
  storageGb: number;
  targetBrokerLatencyMs: number;
  windowsLicenseIncluded: boolean;
  priceNgn: number;
  priceUsd: number;
  whmcsPid: number;
}

export interface ProviderServerInstance {
  id: string;
  providerInstanceId: string;
  providerName: 'contabo' | 'vultr';
  hostname: string;
  status: 'provisioning' | 'running' | 'stopped' | 'error';
  ipAddress: string;
  region: string;
  specs: {
    vCpus: number;
    memoryGb: number;
    storageGb: number;
  };
  createdAt: string;
}
