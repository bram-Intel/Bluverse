import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://bulverse.com'),
  title: 'Bulverse — Digital Infrastructure Platform | Cloud VPS, Hosting & Storage',
  description:
    'Powerful. Reliable. Scalable. Everything you need to build, run and grow your business online. Enterprise Cloud VPS, Web Hosting, NVMe Storage, and Trading Infrastructure.',
  keywords: [
    'Bulverse',
    'Cloud VPS',
    'Nigeria Cloud Hosting',
    'Web Hosting',
    'Trading VPS',
    'NVMe Cloud Server',
    'cPanel Hosting',
    'Contabo Reseller',
    'WHMCS',
  ],
  authors: [{ name: 'Bulverse Cloud Infrastructure Technologies' }],
  openGraph: {
    title: 'Bulverse — Your Digital Infrastructure, All In One Place',
    description: 'High performance compute, storage, networking, and trading infrastructure.',
    url: 'https://bulverse.com',
    siteName: 'Bulverse Cloud',
    images: [
      {
        url: '/brand/bulverse-poster.png',
        width: 1200,
        height: 630,
        alt: 'Bulverse Digital Infrastructure',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-[#030611] text-white antialiased">
        {children}
      </body>
    </html>
  );
}
