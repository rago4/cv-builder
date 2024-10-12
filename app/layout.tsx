import './globals.css'

import type { Metadata } from 'next'
import localFont from 'next/font/local'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})

export const metadata: Metadata = {
  title: 'Free CV Generator | Create Professional Resumes Online',
  description:
    'Build your perfect resume for free with our easy-to-use CV generator. Choose from professional templates, customize layouts, and download in multiple formats. No hidden fees or charges.',
  keywords:
    'free CV generator, resume builder, professional templates, online resume maker, ATS-friendly resumes',
  openGraph: {
    title: 'Free CV Generator | Create Professional Resumes Online',
    description:
      'Build your perfect resume for free with our easy-to-use CV generator. Choose from professional templates, customize layouts, and download in multiple formats.',
    type: 'website',
    url: 'https://free-cv-generator.vercel.app/',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html className="scroll-smooth" lang="en">
      <body className={`${geistSans.className} antialiased`}>{children}</body>
    </html>
  )
}
