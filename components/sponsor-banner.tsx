'use client'

import { XIcon } from 'lucide-react'
import { useState } from 'react'

export function SponsorBanner() {
  const [open, setOpen] = useState(true)
  return open ? (
    <div className="sticky top-0 z-10 w-full bg-black p-2">
      <p className="self-center text-center text-sm text-white">
        Like this project?{' '}
        <a
          className="underline"
          href="https://buymeacoffee.com/rgolawski"
          target="_blank"
          rel="noopener noreferrer"
        >
          Become a sponsor ✨
        </a>
      </p>
      <button
        className="absolute right-3 top-1/2 -translate-y-1/2"
        onClick={() => setOpen(false)}
      >
        <XIcon className="text-white" size={16} />
      </button>
    </div>
  ) : null
}
