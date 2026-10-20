'use client'
import { useRef, useState } from 'react'
import ArtImage from '@/components/ui/ArtImage'
import { ArrowIcon, SparkIcon } from '@/components/ui/Icons'
import { getSculpture } from '@/lib/collection'
const heroes = [getSculpture(12), getSculpture(16), getSculpture(15)]

export default function Hero() {
  const [selected, setSelected] = useState(0)
  const stageRef = useRef<HTMLDivElement>(null)
  const piece = heroes[selected]
  const move = (event: React.PointerEvent) => {
    if (event.pointerType !== 'mouse' || document.documentElement.dataset.motion === 'off' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const bounds = event.currentTarget.getBoundingClientRect()
    stageRef.current?.style.setProperty('--pointer-x', `${((event.clientX - bounds.left) / bounds.width - .5) * 14}px`)
    stageRef.current?.style.setProperty('--pointer-y', `${((event.clientY - bounds.top) / bounds.height - .5) * 10}px`)
  }
  return (
    <section className="hero section-shell" aria-labelledby="hero-heading" onPointerMove={move} onPointerLeave={() => {
      stageRef.current?.style.setProperty('--pointer-x', '0px'); stageRef.current?.style.setProperty('--pointer-y', '0px')
    }}>
      <div className="hero-copy">
        <p className="hero-intro"><span className="status-dot" /> Reclaimed metal. Remarkable characters.</p>
        <h1 id="hero-heading"><span className="hero-line"><span>A little metal.</span></span><span className="hero-line"><span>A lot of soul.</span></span></h1>
        <p className="hero-description">Meet the extraordinary little people hiding in ordinary old metal. Handmade with imagination by Steve Kirsten.</p>
        <a className="button button-dark hero-cta" href="#gallery">Explore the collection <ArrowIcon /></a>
        <div className="hero-signoff"><span className="little-line" /><span>From the Garden Route,<br />with character.</span></div>
      </div>
      <div className="hero-display">
        <div className="hero-orbit" aria-hidden="true" />
        <div className="hero-stamp"><SparkIcon /><span>A past life.<br />A new story.</span></div>
        <div ref={stageRef} className="hero-stage"><ArtImage key={piece.id} sculpture={piece} priority className="hero-sculpture" sizes="(max-width: 760px) 90vw, 45vw" /></div>
        <div className="hero-piece-caption" aria-live="polite"><span>{piece.title}</span><span>The Railway People collection</span></div>
        <div className="hero-switcher" role="group" aria-label="Choose a featured sculpture">
          {heroes.map((item, index) => <button key={item.id} className={selected === index ? 'is-selected' : ''} onClick={() => setSelected(index)} aria-label={`Show ${item.title}`} aria-pressed={selected === index}><span>{String(index + 1).padStart(2, '0')}</span><span className="switcher-line" /></button>)}
        </div>
      </div>
      <div className="hero-bottom"><span>Art with a past. Made for your present.</span><a href="#gallery">Take a closer look <ArrowIcon /></a></div>
    </section>
  )
}
