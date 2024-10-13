import Link from 'next/link'

import { MainContent } from '@/components/main-content'
import { SponsorBanner } from '@/components/sponsor-banner'
import { cn } from '@/lib/utils'

const slideInAnimation = 'animate-in fade-in slide-in-from-bottom-2'

const footerLinks = [
  { href: 'https://x.com/rgolawski', label: 'Twitter' },
  { href: 'https://github.com/rago4', label: 'GitHub' },
]

export default function Home() {
  const currentYear = new Date().getFullYear()
  return (
    <>
      <SponsorBanner />
      <header className="px-5 py-10">
        <div className="container mx-auto text-center">
          <h1
            className={cn(
              'text-2xl font-bold text-slate-800',
              slideInAnimation
            )}
            style={{ animationDuration: '700ms' }}
          >
            Craft Your Career Story: Free Professional CV Builder
          </h1>
          <p
            className={cn(
              'mt-2 text-slate-500',
              `${slideInAnimation} fill-mode-backwards`
            )}
            style={{ animationDuration: '700ms', animationDelay: '200ms' }}
          >
            Transform your experience into opportunity with our intuitive, free
            CV generator. Customize with ease, and download your polished resume
            in minutes. Stand out to employers and land your dream job - no
            hidden fees, just pure potential.
          </p>
          <Link
            className={cn(
              'mt-4 inline-block rounded-md bg-slate-900 px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-slate-800',
              `${slideInAnimation} fill-mode-backwards`
            )}
            style={{ animationDuration: '700ms', animationDelay: '500ms' }}
            href="#builder"
          >
            Get Started
          </Link>
        </div>
      </header>
      <main
        id="builder"
        className={cn(
          'grid grid-cols-1 border-t border-slate-300 lg:min-h-screen lg:grid-cols-2',
          'animate-in fade-in fill-mode-backwards'
        )}
        style={{ animationDuration: '1000ms', animationDelay: '700ms' }}
      >
        <MainContent />
      </main>
      <footer className="border-t border-slate-300 px-5 py-4">
        <nav className="flex items-center justify-between text-sm text-slate-800">
          <p>&copy; {currentYear} Free CV Generator. All rights reserved.</p>
          <ul className="flex space-x-2">
            {footerLinks.map(({ href, label }) => {
              return (
                <li key={href}>
                  <a
                    className="hover:underline"
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {label}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>
      </footer>
    </>
  )
}
