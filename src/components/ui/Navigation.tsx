'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white/90 backdrop-blur-sm shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-gray-800">
            Creatures Great and Small
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-gray-900 transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-gray-900 transition-colors">
              About
            </Link>
            <Link href="/gallery" className="text-gray-700 hover:text-gray-900 transition-colors">
              Gallery
            </Link>
            <Link href="/railway-people" className="text-gray-700 hover:text-gray-900 transition-colors">
              Railway People
            </Link>
            <Link href="/instagram" className="text-gray-700 hover:text-gray-900 transition-colors">
              Instagram
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-gray-900 transition-colors">
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <Link href="/" className="block px-3 py-2 text-gray-700 hover:text-gray-900">
                Home
              </Link>
              <Link href="/about" className="block px-3 py-2 text-gray-700 hover:text-gray-900">
                About
              </Link>
              <Link href="/gallery" className="block px-3 py-2 text-gray-700 hover:text-gray-900">
                Gallery
              </Link>
              <Link href="/railway-people" className="block px-3 py-2 text-gray-700 hover:text-gray-900">
                Railway People
              </Link>
              <Link href="/instagram" className="block px-3 py-2 text-gray-700 hover:text-gray-900">
                Instagram
              </Link>
              <Link href="/contact" className="block px-3 py-2 text-gray-700 hover:text-gray-900">
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}