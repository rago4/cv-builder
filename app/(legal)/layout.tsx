import { ArrowLeftIcon } from 'lucide-react'
import Link from 'next/link'
import type { ReactNode } from 'react'

import { Footer } from '@/components/footer'

export default function LegalLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <header className="px-5 py-4">
        <Link
          className="inline-block text-slate-800"
          href="/"
          aria-label="Go back to homepage"
        >
          <ArrowLeftIcon size={24} aria-hidden="true" />
          <span className="sr-only">Back to homepage</span>
        </Link>
      </header>
      <main className="mx-auto max-w-2xl space-y-5 px-5 pb-12">{children}</main>
      <Footer />
    </>
  )
}
