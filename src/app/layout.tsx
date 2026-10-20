import type { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import Navigation from '@/components/ui/Navigation'
import Footer from '@/components/ui/Footer'
import ScrollAnimations from '@/components/animations/ScrollAnimations'
import { SITE_URL } from '@/lib/collection'
const display = localFont({ src: '../../public/fonts/bricolage-700.woff2', variable: '--font-display', display: 'swap', weight: '700' })
const body = localFont({ src: '../../public/fonts/dm-sans.woff2', weight: '400 700', variable: '--font-body', display: 'swap' })
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: 'Creatures Great & Small | Metal sculptures by Steve Kirsten', template: '%s | Creatures Great & Small' },
  description: 'A little metal. A lot of soul. Discover Steve Kirsten’s handmade sculptures and Railway People, created from reclaimed metal on South Africa’s Garden Route.',
  openGraph: { type: 'website', locale: 'en_ZA', siteName: 'Creatures Great & Small', images: [{ url: '/images/social.jpg', width: 1200, height: 630, alt: 'The Railway People sculpture collection by Steve Kirsten' }] },
  twitter: { card: 'summary_large_image' }, icons: { icon: '/icon.svg' },
}
export const viewport: Viewport = { themeColor: '#173c32' }
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en" className={`${display.variable} ${body.variable}`}><body><Navigation /><ScrollAnimations />{children}<Footer /></body></html>
}
