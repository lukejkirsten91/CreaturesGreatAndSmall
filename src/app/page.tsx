import ImageGallery from '@/components/features/ImageGallery'

// Get all railway people images
const getRailwayImages = () => {
  const images = [
    '514266471_10162736437795609_7112781095164318180_n.jpg',
    '514267500_10162736437645609_4706837747231704203_n.jpg',
    '514277891_10162736438665609_8835723241295129886_n.jpg',
    '514353347_10162736438500609_6045526423252414743_n.jpg',
    '514357162_10162736439190609_8105994804502052706_n.jpg',
    '514375438_10162736438335609_7246763109617044614_n.jpg',
    '514403269_10162736438050609_6522214415803761669_n.jpg',
    '514408263_10162736438220609_7607318527885828952_n.jpg',
    '514641837_10162736437480609_8788580574652785174_n.jpg',
    '515025854_10162736437350609_304457300124982791_n.jpg',
  ]
  
  return images.map((filename, index) => ({
    id: index + 1,
    src: `/images/railway-people/${filename}`,
    alt: `Railway People sculpture ${index + 1}`,
    title: `Railway Figure ${index + 1}`,
  }))
}

export default function Home() {
  const images = getRailwayImages()

  return (
    <main className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100">
      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-7xl font-bold text-gray-800 mb-6">
            Creatures Great and Small
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            Handcrafted scrap metal creatures by a South African artisan, 
            transforming discarded materials into beautiful works of art.
          </p>
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 max-w-3xl mx-auto shadow-lg">
            <p className="text-lg text-gray-700 leading-relaxed">
              Welcome to the world of recycled metal art. Each piece tells a story 
              of transformation, creativity, and the beauty found in the unexpected.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
              The Railway People Collection
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Unique sculptures crafted from original reclaimed screws and hardware 
              from the historic Knysna railway line.
            </p>
          </div>
          
          <ImageGallery images={images} />
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-white/60 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
              About the Artist
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                In the heart of South Africa, where the landscape tells stories of resilience 
                and transformation, an artist works with his hands to breathe new life into 
                materials that others have discarded.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Each piece begins as scrap - old machinery, forgotten hardware, discarded 
                metal fragments - but emerges as something entirely new: creatures with 
                personality, character, and soul.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                These sculptures carry the industrial heritage of South Africa while pointing 
                toward a future where waste becomes wonder, found across markets throughout 
                the country.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Heritage & Sustainability</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Knysna Railway Heritage</h4>
                  <p className="text-gray-700">
                    Using authentic railway screws preserves South African industrial history in artistic form.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Environmental Impact</h4>
                  <p className="text-gray-700">
                    Every sculpture prevents metal from ending up in landfills, turning waste into wonder.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
            Connect & Collect
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Find these unique pieces at markets across South Africa, or get in touch 
            about commissioning custom sculptures.
          </p>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 max-w-2xl mx-auto">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Instagram</h3>
                <p className="text-gray-600 mb-4">Follow for latest creations and market locations</p>
                <a 
                  href="#" 
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  Follow on Instagram
                </a>
              </div>
              
              <div className="border-t pt-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Email Contact</h3>
                <p className="text-gray-600 mb-4">For custom commissions and inquiries</p>
                <a 
                  href="mailto:contact@example.com" 
                  className="inline-flex items-center gap-2 bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors"
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