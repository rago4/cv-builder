import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t border-slate-300 px-5 py-4">
      <nav className="flex justify-between text-sm text-slate-800">
        <ul className="flex space-x-3">
          <li>
            <Link className="hover:underline" href="/privacy">
              Privacy
            </Link>
          </li>
          <li>
            <Link className="hover:underline" href="/terms">
              Terms
            </Link>
          </li>
        </ul>
        <a
          className="hover:underline"
          href="https://x.com/rgolawski"
          target="_blank"
          rel="noopener noreferrer"
        >
          Reach out
        </a>
      </nav>
    </footer>
  )
}
