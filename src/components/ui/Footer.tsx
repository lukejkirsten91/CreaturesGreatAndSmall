'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { MakerMark } from './Icons'

export default function Footer() {
  const [paused, setPaused] = useState(false)
  useEffect(() => {
    let saved = false
    try { saved = localStorage.getItem('creatures-motion') === 'off' } catch { /* Storage is optional. */ }
    setPaused(saved); document.documentElement.dataset.motion = saved ? 'off' : 'on'
  }, [])
  const toggleMotion = () => {
    const next = !paused
    setPaused(next); document.documentElement.dataset.motion = next ? 'off' : 'on'
    try { localStorage.setItem('creatures-motion', next ? 'off' : 'on') } catch { /* Storage is optional. */ }
    window.dispatchEvent(new Event('motionpreferencechange'))
  }
  return <footer className="footer section-shell">
    <div className="footer-top">
      <Link className="brand" href="/"><MakerMark /><span>Creatures<br /><span>Great & Small</span></span></Link>
      <p>Old metal. New stories.<br />Made by Steve Kirsten, South Africa.</p>
      <nav aria-label="Footer navigation"><Link href="/#gallery">Collection</Link><Link href="/about/">The maker</Link><Link href="/#contact">Contact</Link></nav>
    </div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} Creatures Great and Small</span><button className="motion-toggle" onClick={toggleMotion} aria-pressed={paused}><span aria-hidden="true">{paused ? '▷' : 'Ⅱ'}</span>{paused ? 'Resume motion' : 'Pause motion'}</button><a href="#main">Back to the top ↑</a></div>
  </footer>
}
