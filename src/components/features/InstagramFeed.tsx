'use client'

import { useEffect } from 'react'

declare global {
  interface Window {
    ElfsightWidget?: any
  }
}

export default function InstagramFeed() {
  useEffect(() => {
    // Load the Elfsight script if it hasn't been loaded yet
    if (!document.querySelector('#elfsight-script')) {
      const script = document.createElement('script')
      script.id = 'elfsight-script'
      script.src = 'https://elfsightcdn.com/platform.js'
      script.async = true
      document.head.appendChild(script)
    }
  }, [])

  return (
    <section className="py-16 px-4 bg-gray-900/40 backdrop-blur-sm section-animate">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Latest Creations
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Follow Steve's creative journey and see the newest sculptures, 
            works in progress, and behind-the-scenes moments from the workshop.
          </p>
        </div>
        
        {/* Instagram Feed Widget */}
        <div className="bg-gray-800/60 backdrop-blur-sm rounded-lg p-6 shadow-2xl">
          <div 
            className="elfsight-app-3ccc3db3-1260-46f2-a57e-7e42959ad8ce" 
            data-elfsight-app-lazy
          ></div>
        </div>
        
        {/* Call to action below the feed */}
        <div className="text-center mt-8">
          <p className="text-gray-300 mb-4">
            Want to see more? Follow Steve on Instagram for daily updates!
          </p>
          <a 
            href="https://instagram.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            Follow on Instagram
          </a>
        </div>
      </div>
    </section>
  )
}