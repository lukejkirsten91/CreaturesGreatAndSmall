'use client'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default function ScrollAnimations() {
  const pathname = usePathname()
  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    let context: gsap.Context | undefined
    const setup = () => {
      context?.revert()
      if (media.matches || document.documentElement.dataset.motion === 'off') return
      context = gsap.context(() => {
        gsap.from('.hero-line > span', { yPercent: 110, rotate: 3, duration: 1.15, stagger: .13, ease: 'power4.out', delay: .08 })
        gsap.from('.hero-intro, .hero-description, .hero-cta, .hero-signoff', { opacity: 0, y: 16, duration: .85, stagger: .1, delay: .25, ease: 'power2.out' })
        gsap.from('.hero-orbit', { scale: .6, opacity: 0, duration: 1.4, ease: 'power3.out' })
        gsap.from('.hero-stamp', { scale: .6, rotation: -25, opacity: 0, duration: 1, delay: .45, ease: 'back.out(1.5)' })
        document.querySelectorAll<HTMLElement>('[data-reveal]').forEach(element => {
          gsap.from(element, { clipPath: 'inset(0 0 100% 0)', y: 25, duration: 1.1, ease: 'power3.out', scrollTrigger: { trigger: element, start: 'top 92%', once: true } })
        })
        if (document.querySelector('.screw-image')) gsap.fromTo('.screw-image', { rotate: -12, y: 30 }, { rotate: 5, y: -25, ease: 'none', scrollTrigger: { trigger: '.heritage-art', start: 'top bottom', end: 'bottom top', scrub: 1 } })
        if (document.querySelector('.group-image')) gsap.fromTo('.group-image', { scale: .9 }, { scale: 1, ease: 'none', scrollTrigger: { trigger: '.group-section', start: 'top bottom', end: 'center center', scrub: 1 } })
      })
      ScrollTrigger.refresh()
    }
    let cancelled = false
    document.fonts.ready.then(() => { if (!cancelled) setup() })
    window.addEventListener('motionpreferencechange', setup); media.addEventListener('change', setup)
    return () => { cancelled = true; context?.revert(); window.removeEventListener('motionpreferencechange', setup); media.removeEventListener('change', setup) }
  }, [pathname])
  return null
}
