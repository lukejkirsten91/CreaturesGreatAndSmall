'use client'

export default function CallToAction() {
  const scrollToGallery = () => {
    document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
      <button 
        onClick={scrollToGallery}
        className="bg-amber-500 hover:bg-amber-600 text-black font-bold px-8 py-4 rounded-lg text-lg transition-all transform hover:scale-105 shadow-2xl"
      >
        Explore the Collection
      </button>
      <a 
        href="#contact" 
        className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black font-bold px-8 py-4 rounded-lg text-lg transition-all"
      >
        Get in Touch
      </a>
    </div>
  )
}