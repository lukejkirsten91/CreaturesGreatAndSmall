import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/ui/Navigation'
import ScrollAnimations from '@/components/animations/ScrollAnimations'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Creatures Great and Small',
  description: 'Handcrafted scrap metal creatures by a South African artisan',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <ScrollAnimations />
        {children}
      </body>
    </html>
  )
}