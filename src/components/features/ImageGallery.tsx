'use client'

import React, { useState, useCallback, useRef, useEffect } from 'react'
import Image from 'next/image'

interface ImageData {
  id: number
  src: string
  alt: string
  title: string
}

interface ImageGalleryProps {
  images: ImageData[]
}

export default function ImageGallery({ images }: ImageGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const imageRef = useRef<HTMLDivElement>(null)

  const nextImage = useCallback(() => {
    setSelectedIndex((prev) => (prev + 1) % images.length)
  }, [images.length])

  const prevImage = useCallback(() => {
    setSelectedIndex((prev) => (prev - 1 + images.length) % images.length)
  }, [images.length])

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'ArrowRight') nextImage()
    if (e.key === 'ArrowLeft') prevImage()
    if (e.key === 'Escape') setIsFullscreen(false)
  }, [nextImage, prevImage])

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(0)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) nextImage()
    if (isRightSwipe) prevImage()
  }

  useEffect(() => {
    if (isFullscreen) {
      document.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    } else {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }
  }, [isFullscreen, handleKeyDown])

  return (
    <>
      {/* Main Gallery */}
      <div className="space-y-8">
        {/* Featured Image */}
        <div className="relative">
          <div 
            ref={imageRef}
            className="relative aspect-square md:aspect-[4/3] w-full max-w-sm md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto bg-gray-900 rounded-lg shadow-2xl overflow-hidden cursor-pointer group gallery-main"
            onClick={() => setIsFullscreen(true)}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <Image
              src={images[selectedIndex].src}
              alt={images[selectedIndex].alt}
              fill
              className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, 80vw"
              priority
            />
            
            {/* Always Visible Navigation Arrows */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                prevImage()
              }}
              className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white rounded-full p-2 md:p-3 shadow-lg transition-all z-10"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={(e) => {
                e.stopPropagation()
                nextImage()
              }}
              className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white rounded-full p-2 md:p-3 shadow-lg transition-all z-10"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full text-sm">
              {selectedIndex + 1} / {images.length}
            </div>

            {/* Swipe Indicator (Mobile) */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-xs md:hidden">
              Swipe to navigate
            </div>
          </div>

          {/* Image Title */}
          <div className="text-center mt-6">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-100 mb-2">
              {images[selectedIndex].title}
            </h3>
          </div>
        </div>

        {/* Thumbnail Navigation */}
        <div className="flex justify-center">
          <div className="flex gap-2 overflow-x-auto max-w-full pb-4">
            {images.map((image, index) => (
              <button
                key={image.id}
                onClick={() => setSelectedIndex(index)}
                className={`relative flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden transition-all thumbnail-animate ${
                  index === selectedIndex 
                    ? 'ring-4 ring-amber-400 scale-110' 
                    : 'opacity-60 hover:opacity-100 hover:scale-105'
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="80px"
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Fullscreen Modal */}
      {isFullscreen && (
        <div 
          className="fixed inset-0 bg-black z-50 flex items-center justify-center"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Close Button - Simple Cross - Mobile Optimized */}
          <button
            onClick={() => setIsFullscreen(false)}
            className="absolute top-4 right-4 md:top-6 md:right-6 bg-white hover:bg-gray-100 text-black rounded-full w-14 h-14 md:w-12 md:h-12 flex items-center justify-center transition-all z-50 shadow-2xl border-2 border-gray-200 touch-manipulation"
          >
            <svg className="w-10 h-10 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Mobile: Close instruction */}
          <div className="absolute top-20 left-1/2 -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full text-sm md:hidden">
            Tap × to close
          </div>

          {/* Fullscreen Image */}
          <div className="relative w-full h-full max-w-6xl max-h-[90vh] mx-4">
            <Image
              src={images[selectedIndex].src}
              alt={images[selectedIndex].alt}
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>

          {/* Fullscreen Navigation */}
          <button
            onClick={prevImage}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white rounded-full p-3 md:p-4 transition-all z-10"
          >
            <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextImage}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white rounded-full p-3 md:p-4 transition-all z-10"
          >
            <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Fullscreen Counter */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-black/70 text-white px-6 py-3 rounded-full">
            {selectedIndex + 1} / {images.length}
          </div>

          {/* Title in Fullscreen */}
          <div className="absolute bottom-20 left-1/2 -translate-x-1/2 text-center">
            <h3 className="text-xl md:text-2xl font-bold text-white">
              {images[selectedIndex].title}
            </h3>
          </div>
        </div>
      )}
    </>
  )
}