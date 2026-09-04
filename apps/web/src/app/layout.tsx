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
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/brand/bulverse-icon-square.png', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/brand/bulverse-icon-square.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/brand/bulverse-icon-square.png" type="image/png" />
        <link rel="apple-touch-icon" href="/brand/bulverse-icon-square.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-[#F8FAFC] text-[#04052D] antialiased">
        {children}
      </body>
    </html>
  );
}
