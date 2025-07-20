import ImageGallery from '@/components/features/ImageGallery'
import CallToAction from '@/components/ui/CallToAction'
import Image from 'next/image'

// Get all railway people images organized properly
const getRailwayImages = () => {
  // Start with The Screw, then other figures, end with The Gang
  const imageFiles = [
    'The Screw.jpg',
    'Bike Man.jpg',
    'Canoe Man.jpg',
    'Fisherman.jpg',
    'Golf Man (After).jpg',
    'Golf Man (Before).jpg',
    'Guitar Man.jpg',
    'Lean Man.jpg',
    'Prayer Man.jpg',
    'The Gang.jpg',
  ]
  
  return imageFiles.map((filename, index) => {
    // Clean up the filename for the title (remove .jpg and clean up naming)
    let title = filename.replace('.jpg', '')
    
    return {
      id: index + 1,
      src: `/images/railway-people/${filename}`,
      alt: `${title} sculpture`,
      title: title,
    }
  })
}

export default function Home() {
  const images = getRailwayImages()

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Hero Section with Image */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero/20250720_114142.jpg"
            alt="Railway People sculptures hero image"
            fill
            className="object-cover opacity-40"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold text-white mb-6 drop-shadow-2xl">
            Creatures Great and Small
          </h1>
          <p className="text-xl md:text-3xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed drop-shadow-lg">
            Handcrafted from the heritage of the Knysna Railway
          </p>
          
          {/* Call to Action */}
          <CallToAction />
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* The Screw Heritage Section */}
      <section className="py-16 px-4 bg-gray-800/80 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
            The Foundation: Historic Railway Screws
          </h2>
          <div className="bg-gray-900/60 backdrop-blur-sm rounded-lg p-8 max-w-3xl mx-auto shadow-2xl">
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-6">
              Each sculpture in the Railway People collection is built upon authentic hardware 
              from the historic Knysna railway line - a vital transportation link that connected 
              coastal communities across the Garden Route of South Africa.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              When the railway was decommissioned, these screws and bolts were destined for 
              scrapyards. Instead, they found new purpose as the foundation for artistic expression. 
              <strong className="text-amber-400"> Each screw bears a unique number</strong>, 
              a testament to its industrial heritage and the meticulous craftsmanship of a bygone era.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              By transforming these forgotten pieces of infrastructure into art, we preserve 
              not just metal, but memories - giving new life to the industrial soul of South Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              The Railway People Collection
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              From historic railway heritage to modern artistic expression - 
              each figure tells its own unique story.
            </p>
          </div>
          
          <ImageGallery images={images} />
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-gray-800/60 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              About the Artist
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-200 leading-relaxed">
                In the heart of South Africa, where the landscape tells stories of resilience 
                and transformation, an artist works with his hands to breathe new life into 
                materials that others have discarded.
              </p>
              
              <p className="text-lg text-gray-200 leading-relaxed">
                Each piece begins as scrap - old machinery, forgotten hardware, discarded 
                metal fragments - but emerges as something entirely new: creatures with 
                personality, character, and soul.
              </p>
              
              <p className="text-lg text-gray-200 leading-relaxed">
                These sculptures carry the industrial heritage of South Africa while pointing 
                toward a future where waste becomes wonder, found across markets throughout 
                the country.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-amber-900/40 to-orange-900/40 backdrop-blur-sm rounded-lg p-8 border border-amber-500/20">
              <h3 className="text-2xl font-bold text-amber-400 mb-4">Heritage & Sustainability</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-white mb-2">Knysna Railway Heritage</h4>
                  <p className="text-gray-300">
                    Using authentic railway screws preserves South African industrial history in artistic form.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Environmental Impact</h4>
                  <p className="text-gray-300">
                    Every sculpture prevents metal from ending up in landfills, turning waste into wonder.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Connect & Collect
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Find these unique pieces at markets across South Africa, or get in touch 
            about commissioning custom sculptures.
          </p>
          
          <div className="bg-gray-900/80 backdrop-blur-sm rounded-lg p-8 max-w-2xl mx-auto border border-gray-700">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Instagram</h3>
                <p className="text-gray-300 mb-4">Follow for latest creations and market locations</p>
                <a 
                  href="#" 
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  Follow on Instagram
                </a>
              </div>
              
              <div className="border-t border-gray-700 pt-6">
                <h3 className="text-xl font-semibold text-white mb-2">Email Contact</h3>
                <p className="text-gray-300 mb-4">For custom commissions and inquiries</p>
                <a 
                  href="mailto:contact@example.com" 
                  className="inline-flex items-center gap-2 bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-all transform hover:scale-105"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Send Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}