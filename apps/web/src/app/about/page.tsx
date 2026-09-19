import type { Metadata } from 'next';
import AboutClient from './AboutClient';

export const metadata: Metadata = {
  title: 'About Bulverse — Powering Digital Growth with Bulverse Cloud',
  description:
    'Discover Bulverse Cloud and Bulverse Limited. From scalable cloud servers, web hosting, and NVMe storage to construction, property, consulting, procurement, and training. Build. Connect. Scale.',
  keywords: [
    'About Bulverse',
    'Bulverse Cloud',
    'Bulverse Limited',
    'Cloud Infrastructure Nigeria',
    'Cloud VPS',
    'Web Hosting',
    'Digital Solutions',
    'Enterprise Infrastructure',
  ],
  openGraph: {
    title: 'About Bulverse — Powering Digital Growth with Bulverse Cloud',
    description:
      'At Bulverse, we provide solutions designed to help individuals, businesses, developers, organizations, and institutions build, operate, and grow.',
    url: 'https://bulverse.cloud/about',
    siteName: 'Bulverse Cloud',
    images: [
      {
        url: '/brand/bulverse-poster.png',
        width: 1200,
        height: 630,
        alt: 'About Bulverse Cloud and Bulverse Limited',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
