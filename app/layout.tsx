import type { Metadata, Viewport } from 'next';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600'],
  display: 'swap',
  variable: '--font-cormorant',
});

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500'],
  display: 'swap',
  variable: '--font-inter',
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://example.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Имя & Имя — 04.07.2026',
  description: 'Приглашение на свадьбу. 4 июля 2026, Москва.',
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    title: 'Имя & Имя — 04.07.2026',
    description: 'Приглашение на свадьбу.',
    images: ['/api/og'],
  },
  twitter: { card: 'summary_large_image' },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#FAF7F2',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={`${cormorant.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
