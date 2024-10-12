import Link from 'next/link'

import { ContextContent } from '@/components/context-content'
import { SponsorBanner } from '@/components/sponsor-banner'
import { cn } from '@/lib/utils'

const slideInAnimation =
  'animate-in fade-in slide-in-from-bottom-2 duration-700'

export default function Home() {
  return (
    <>
      <SponsorBanner />
      <header className="border-b border-slate-300 px-5 py-10">
        <div className="container mx-auto text-center">
          <h1
            className={cn(
              'text-2xl font-bold text-slate-800',
              slideInAnimation
            )}
          >
            Craft Your Career Story: Free Professional CV Builder
          </h1>
          <p
            className={cn(
              'mt-2 text-slate-500',
              `${slideInAnimation} delay-200 fill-mode-backwards`
            )}
          >
            Transform your experience into opportunity with our intuitive, free
            CV generator. Customize with ease, and download your polished resume
            in minutes. Stand out to employers and land your dream job - no
            hidden fees, just pure potential.
          </p>
          <Link
            className={cn(
              'mt-4 inline-block rounded-md bg-slate-900 px-3 py-2 text-sm font-medium text-white',
              `${slideInAnimation} delay-500 fill-mode-backwards`
            )}
            href="#builder"
          >
            Get Started
          </Link>
        </div>
      </header>
      <main
        id="builder"
        className="grid min-h-screen grid-cols-1 lg:grid-cols-2"
      >
        <ContextContent />
      </main>
    </>
  )
}
