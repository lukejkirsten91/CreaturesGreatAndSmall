import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

// Get all railway people images (same as main page)
const getRailwayImages = () => {
  const imageFiles = [
    'The Screw.jpeg',
    'Canoe Man.jpeg',
    'Climbing Man.jpeg',
    'Dancing Man.jpeg',
    'Fisher Man 1 (before).jpeg',
    'Fisher Man 2 (after) - with label.jpeg',
    'Fisher Man 2 (after).jpeg',
    'From the Top.jpeg',
    'Golf Series 1 (before).jpeg',
    'Golf Series 2 (during).jpeg',
    'Golf Series 3 (after).jpeg',
    'Guitar Man.jpeg',
    'Leaning Man with Screws.jpeg',
    'Leaning Man.jpeg',
    'Love.jpeg',
    'Olympian Series - Bicycle Man.jpeg',
    'Olympian Series - Canoe Man.jpeg',
    'Olympian Series - Discus Man.jpeg',
    'Olympian Series - Javelin Man.jpeg',
    'Paddle Boat Man.jpeg',
    'Prayer Man.jpeg',
    'Prayer Series - Candle Man.jpeg',
    'Prayer Series - Prayer Man (from top).jpeg',
    'Prayer Series - Prayer Man.jpeg',
    'See, Hear, Say Men.jpeg',
    'Surfer Man.jpeg',
    'Walker Man.jpeg',
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
      {/* Navigation */}
      <Link
        href={`/gallery/${prevIndex + 1}`}
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white rounded-full p-3 md:p-4 transition-all z-10"
      >
        <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
        </svg>
      </Link>
      
      <Link
        href={`/gallery/${nextIndex + 1}`}
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white rounded-full p-3 md:p-4 transition-all z-10"
      >
        <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
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

      {/* Image Info */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-black/70 text-white px-6 py-3 rounded-full">
        {currentIndex + 1} / {images.length}
      </div>

      {/* Title */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 text-center">
        <h1 className="text-xl md:text-2xl font-bold text-white">
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