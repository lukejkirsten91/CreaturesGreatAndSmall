import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

// Get all railway people images (same as main page)
const getRailwayImages = () => {
  const imageFiles = [
    'The Screw.jpeg',
    'Canoe Person.jpeg',
    'Climbing Person.jpeg',
    'Dancing Person.jpeg',
    'Fisher Person 1 (before).jpeg',
    'Fisher Person 2 (after) - with label.jpeg',
    'Fisher Person 2 (after).jpeg',
    'From the Top.jpeg',
    'Golf Series 1 (before).jpeg',
    'Golf Series 2 (during).jpeg',
    'Golf Series 3 (after).jpeg',
    'Guitar Person.jpeg',
    'Leaning Person with Screws.jpeg',
    'Leaning Person.jpeg',
    'Love.jpeg',
    'Olympian Series - Bicycle Person.jpeg',
    'Olympian Series - Canoe Person.jpeg',
    'Olympian Series - Discus Person.jpeg',
    'Olympian Series - Javelin Person.jpeg',
    'Paddle Boat Person.jpeg',
    'Prayer Person.jpeg',
    'Prayer Series - Candle Person.jpeg',
    'Prayer Series - Prayer Person (from top).jpeg',
    'Prayer Series - Prayer Person.jpeg',
    'See, Hear, Say People.jpeg',
    'Surfer Person.jpeg',
    'Walker Person.jpeg',
    'The Gang.jpeg',
  ]
  
  return imageFiles.map((filename, index) => {
    let title = filename.replace('.jpeg', '')
    return {
      id: index + 1,
      src: `/images/railway-people/${filename}`,
      alt: `${title} sculpture`,
      title: title,
    }
  })
}

interface PageProps {
  params: Promise<{
    imageId: string
  }>
}

export default async function FullscreenGalleryPage({ params }: PageProps) {
  const resolvedParams = await params
  const images = getRailwayImages()
  const currentIndex = parseInt(resolvedParams.imageId) - 1
  
  if (currentIndex < 0 || currentIndex >= images.length) {
    notFound()
  }
  
  const currentImage = images[currentIndex]
  const prevIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1
  const nextIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      {/* Navigation - Subtle with fade animation */}
      <Link
        href={`/gallery/${prevIndex + 1}`}
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white rounded-full p-3 md:p-4 transition-all duration-300 z-10 opacity-30 hover:opacity-100 backdrop-blur-sm animate-pulse"
        style={{ animationDuration: '4s' }}
      >
        <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </Link>
      
      <Link
        href={`/gallery/${nextIndex + 1}`}
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white rounded-full p-3 md:p-4 transition-all duration-300 z-10 opacity-30 hover:opacity-100 backdrop-blur-sm animate-pulse"
        style={{ animationDuration: '4s' }}
      >
        <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>

      {/* Main Image */}
      <div className="relative w-full h-full max-w-6xl max-h-[90vh] mx-4">
        <Image
          src={currentImage.src}
          alt={currentImage.alt}
          fill
          className="object-contain"
          sizes="100vw"
          priority
        />
      </div>

      {/* Image Counter - Always visible */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 bg-black/70 text-white px-6 py-3 rounded-full">
        {currentIndex + 1} / {images.length}
      </div>

      {/* Title - Under counter for better visibility */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center max-w-[90vw]">
        <h1 className="text-lg md:text-xl font-bold text-white bg-black/50 px-4 py-2 rounded-lg backdrop-blur-sm">
          {currentImage.title}
        </h1>
      </div>

      {/* Back to Gallery */}
      <Link
        href="/#gallery"
        className="absolute top-4 right-4 bg-white/90 hover:bg-white text-black rounded-lg px-4 py-3 transition-all z-10 shadow-xl border border-gray-300 flex items-center gap-2"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        <span className="text-sm font-medium hidden sm:inline">Back to Gallery</span>
      </Link>
    </div>
  )
}

export async function generateStaticParams() {
  const images = getRailwayImages()
  return images.map((_, index) => ({
    imageId: (index + 1).toString(),
  }))
}

export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = await params
  const images = getRailwayImages()
  const currentIndex = parseInt(resolvedParams.imageId) - 1
  
  if (currentIndex < 0 || currentIndex >= images.length) {
    return { title: 'Image Not Found' }
  }
  
  const currentImage = images[currentIndex]
  
  return {
    title: `${currentImage.title} - Railway People Collection`,
    description: `View ${currentImage.title} from Steve Kirsten's Railway People sculpture collection`,
  }
}