import type { Metadata } from 'next'
import { Fraunces, DM_Sans } from 'next/font/google'
import './globals.css'

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'FarmConnect AI — Market Intelligence for African Farmers',
  description: 'Real-time crop prices, buyer connections and AI-powered market insights via WhatsApp. No app needed. Works on any phone.',
  keywords: 'agriculture, farmers, Nigeria, Africa, crop prices, WhatsApp bot, market intelligence',
  openGraph: {
    title: 'FarmConnect AI',
    description: 'WhatsApp-based market intelligence for African farmers',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${fraunces.variable} ${dmSans.variable} font-sans bg-cream`}>
        {children}
      </body>
    </html>
  )
}