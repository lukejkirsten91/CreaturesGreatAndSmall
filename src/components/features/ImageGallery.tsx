'use client'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import Link from 'next/link'
import ArtImage from '@/components/ui/ArtImage'
import { ArrowIcon, CloseIcon } from '@/components/ui/Icons'
import { categories, Category, enquiryUrl, gallerySculptures, Sculpture } from '@/lib/collection'

export default function ImageGallery({ expanded = false }: { expanded?: boolean }) {
  const [category, setCategory] = useState<Category>('All characters')
  const [showAll, setShowAll] = useState(expanded)
  const [selected, setSelected] = useState<Sculpture | null>(null)
  const [direction, setDirection] = useState(1)
  const dialogRef = useRef<HTMLDialogElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const triggerRef = useRef<HTMLElement | null>(null)
  const touchStart = useRef<{ x: number; y: number } | null>(null)
  const filtered = useMemo(() => category === 'All characters' ? gallerySculptures : gallerySculptures.filter(piece => piece.category === category), [category])
  const visible = showAll ? filtered : filtered.slice(0, 6)
  const close = useCallback(() => { dialogRef.current?.close(); setSelected(null); triggerRef.current?.focus({ preventScroll: true }) }, [])
  const navigate = useCallback((step: number) => {
    setDirection(step)
    setSelected(current => {
      const index = filtered.findIndex(piece => piece.id === current?.id)
      return filtered[(index + step + filtered.length) % filtered.length]
    })
  }, [filtered])
  const isOpen = selected !== null
  useEffect(() => {
    if (!isOpen) return
    dialogRef.current?.showModal(); closeRef.current?.focus()
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') { event.preventDefault(); navigate(1) }
      if (event.key === 'ArrowLeft') { event.preventDefault(); navigate(-1) }
    }
    document.addEventListener('keydown', onKey)
    return () => { document.body.style.overflow = previousOverflow; document.removeEventListener('keydown', onKey) }
  }, [isOpen, navigate])
  return <>
    <div className="gallery-tools">
      <div className="gallery-filters" role="group" aria-label="Filter sculptures">
        {categories.map(item => <button key={item} onClick={() => { setCategory(item); setShowAll(expanded) }} aria-pressed={category === item} className={category === item ? 'is-active' : ''}>{item}</button>)}
      </div>
      <span className="gallery-count" role="status">{filtered.length} photographs</span>
    </div>
    <div className="gallery-grid" key={category}>
      {visible.map((piece, index) => <button className="art-card" key={piece.id} onClick={event => { triggerRef.current = event.currentTarget; setSelected(piece) }} style={{ '--card-delay': `${Math.min(index, 5) * 45}ms` } as React.CSSProperties} aria-label={`View ${piece.title}`}>
        <div className={`art-card-image art-tone-${index % 3}`}><ArtImage sculpture={piece} sizes="(max-width: 560px) 88vw, (max-width: 900px) 45vw, 30vw" /><span className="art-open" aria-hidden="true"><svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M8 4H4v4m12-4h4v4M4 16v4h4m12-4v4h-4" stroke="currentColor" strokeWidth="1.5" /></svg></span></div>
        <div className="art-card-caption"><div><h3>{piece.title}</h3><span>{piece.category}</span></div><ArrowIcon /></div>
      </button>)}
    </div>
    {!showAll && filtered.length > 6 && <div className="gallery-more"><button className="button button-outline" onClick={() => setShowAll(true)}>View all {filtered.length} photographs <ArrowIcon /></button><span>A whole cast of characters is waiting.</span></div>}
    <dialog ref={dialogRef} className="lightbox" aria-labelledby="lightbox-title" onCancel={event => { event.preventDefault(); close() }} onClick={event => { if (event.target === event.currentTarget) close() }}>
      {selected && <div className="lightbox-inner">
        <div className="lightbox-header"><span>The Railway People</span><button ref={closeRef} className="icon-button" onClick={close} aria-label="Close image viewer"><CloseIcon /></button></div>
        <div className="lightbox-image" onTouchStart={event => { touchStart.current = { x: event.touches[0].clientX, y: event.touches[0].clientY } }} onTouchEnd={event => {
          if (!touchStart.current) return
          const dx = touchStart.current.x - event.changedTouches[0].clientX
          const dy = touchStart.current.y - event.changedTouches[0].clientY
          if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) navigate(dx > 0 ? 1 : -1)
          touchStart.current = null
        }}>
          <div key={selected.id} className={`lightbox-image-frame ${direction < 0 ? 'from-left' : ''}`}><ArtImage sculpture={selected} priority sizes="(max-width: 760px) 90vw, 65vw" /></div>
          <button className="icon-button lightbox-prev" onClick={() => navigate(-1)} aria-label="Previous sculpture"><ArrowIcon /></button>
          <button className="icon-button lightbox-next" onClick={() => navigate(1)} aria-label="Next sculpture"><ArrowIcon /></button>
        </div>
        <div className="lightbox-caption" aria-live="polite">
          <div><span className="section-note">{filtered.findIndex(piece => piece.id === selected.id) + 1} / {filtered.length}</span><h2 id="lightbox-title">{selected.title}</h2><p>{selected.description}</p></div>
          <div className="lightbox-links"><a className="button button-dark" href={enquiryUrl(selected.title)}>Enquire about this piece <ArrowIcon /></a><Link className="text-link" href={`/gallery/${selected.id}/`}>Open this sculpture’s page</Link></div>
        </div>
      </div>}
    </dialog>
  </>
}
