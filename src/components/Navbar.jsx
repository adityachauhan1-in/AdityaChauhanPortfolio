import { useEffect, useState } from 'react'
import { profile } from '../data/portfolio'

const links = ['About', 'Skills', 'Experience', 'Projects', 'Contact']

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [dark, setDark] = useState(() => {
    try { return localStorage.getItem('theme') === 'dark' } catch { return false }
  })
  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    try { localStorage.setItem('theme', dark ? 'dark' : 'light') } catch {}
  }, [dark])

  const link = 'rounded-md px-2 py-1 hover:bg-line/10 hover:text-line dark:hover:text-signal'
  return (
    <header className="sticky top-0 z-20 border-b border-ink/10 bg-paper/90 backdrop-blur dark:border-white/10 dark:bg-night/90">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3">
        <a href="#top" className="font-display text-lg font-extrabold">{profile.name}</a>
        <div className="flex items-center gap-2 text-sm font-medium">
          <div className="hidden gap-1 sm:flex">
            {links.map((l) => <a key={l} href={`#${l.toLowerCase()}`} className={link}>{l}</a>)}
          </div>
          <button onClick={() => setDark(!dark)} aria-label="Toggle dark mode" className="btn-ghost !w-auto !px-3 !py-1">
            {dark ? 'Light' : 'Dark'}
          </button>
          <button onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open} className="btn-ghost !w-auto !px-3 !py-1 sm:hidden">
            {open ? 'Close' : 'Menu'}
          </button>
        </div>
      </nav>
      {open && (
        <div className="grid gap-1 border-t border-ink/10 px-5 py-3 sm:hidden dark:border-white/10">
          {links.map((l) => <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)} className={`${link} py-2`}>{l}</a>)}
        </div>
      )}
    </header>
  )
}
