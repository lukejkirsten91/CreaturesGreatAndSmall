'use client'

import { useEffect, useLayoutEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function ScrollAnimations() {
  useLayoutEffect(() => {
    if (typeof window === 'undefined') return

    // Hero content fade in
    gsap.fromTo('.hero-content', {
      opacity: 0,
      y: 50
    }, {
      opacity: 1,
      y: 0,
      duration: 1.5,
      ease: 'power2.out'
    })

    // Section fade-ins
    gsap.fromTo('.section-animate', {
      opacity: 0,
      y: 80
    }, {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.section-animate',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    })

    // Quote animation
    gsap.fromTo('.quote-animate', {
      opacity: 0,
      scale: 0.9,
      y: 30
    }, {
      opacity: 1,
      scale: 1,
      y: 0,
      duration: 1.2,
      ease: 'back.out(1.7)',
      scrollTrigger: {
        trigger: '.quote-animate',
        start: 'top 75%',
        toggleActions: 'play none none reverse'
      }
    })

    // Gallery main image animation
    gsap.fromTo('.gallery-main', {
      opacity: 0,
      scale: 0.95,
      y: 40
    }, {
      opacity: 1,
      scale: 1,
      y: 0,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.gallery-main',
        start: 'top 70%',
        toggleActions: 'play none none reverse'
      }
    })

    // Thumbnail animations
    gsap.fromTo('.thumbnail-animate', {
      opacity: 0,
      y: 20,
      scale: 0.9
    }, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.6,
      stagger: 0.05,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.thumbnail-animate',
        start: 'top 85%',
        toggleActions: 'play none none reverse'
      }
    })

    // Info boxes slide in
    gsap.fromTo('.info-box-animate', {
      opacity: 0,
      x: 50,
      y: 30
    }, {
      opacity: 1,
      x: 0,
      y: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.info-box-animate',
        start: 'top 75%',
        toggleActions: 'play none none reverse'
      }
    })

    // Story text reveals
    gsap.fromTo('.story-animate', {
      opacity: 0,
      x: -30
    }, {
      opacity: 1,
      x: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.story-animate',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    })

    // Contact section animation
    gsap.fromTo('.contact-animate', {
      opacity: 0,
      y: 50
    }, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.contact-animate',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return null
}