'use client'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ArrowIcon, MakerMark } from './Icons'

export default function Navigation() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const menuRef = useRef<HTMLDivElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)
  useEffect(() => { setOpen(false) }, [pathname])
  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => { if (event.key === 'Escape') { setOpen(false); toggleRef.current?.focus() } }
    const onClick = (event: MouseEvent) => { if (!menuRef.current?.contains(event.target as Node) && !toggleRef.current?.contains(event.target as Node)) setOpen(false) }
    document.addEventListener('keydown', onKey); document.addEventListener('click', onClick)
    return () => { document.removeEventListener('keydown', onKey); document.removeEventListener('click', onClick) }
  }, [open])
  return (
    <header className="site-header">
      <a className="skip-link" href="#main">Skip to content</a>
      <nav className="navigation section-shell" aria-label="Main navigation">
        <Link className="brand" href="/" aria-label="Creatures Great and Small home"><MakerMark /><span>Creatures<br /><span>Great & Small</span></span></Link>
        <div className="desktop-nav">
          <Link href="/#gallery">The collection</Link>
          <Link href="/about/" aria-current={pathname.replace(/\/$/, '') === '/about' ? 'page' : undefined}>Meet the maker</Link>
          <Link href="/railway-people/" aria-current={pathname.startsWith('/railway-people') ? 'page' : undefined}>The railway story</Link>
        </div>
        <Link className="button nav-contact" href="/#contact">Say hello <ArrowIcon /></Link>
        <button ref={toggleRef} className={`menu-toggle ${open ? 'is-open' : ''}`} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}><span /><span /></button>
      </nav>
      {open && <div ref={menuRef} id="mobile-menu" className="mobile-menu">
        <Link href="/#gallery" onClick={() => setOpen(false)}>The collection <ArrowIcon /></Link>
        <Link href="/about/" onClick={() => setOpen(false)}>Meet the maker <ArrowIcon /></Link>
        <Link href="/railway-people/" onClick={() => setOpen(false)}>The railway story <ArrowIcon /></Link>
        <Link href="/#contact" onClick={() => setOpen(false)}>Say hello <ArrowIcon /></Link>
        <span>Handmade on the Garden Route, South Africa.</span>
      </div>}
    </header>
  )
}
