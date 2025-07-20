import Image from 'next/image'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Railway People - Creatures Great and Small',
  description: 'Unique sculptures crafted from original reclaimed screws from the historic Knysna railway',
}

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

export default function RailwayPeoplePage() {
  const images = getRailwayImages()

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-amber-50">
      <div className="container mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            The Railway People
          </h1>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              A unique collection of sculptures crafted from original reclaimed screws 
              from the historic Knysna railway line.
            </p>
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8">
              <p className="text-lg text-gray-700 leading-relaxed">
                Each piece in this collection carries the weight of history - literally and figuratively. 
                These sculptures are created using authentic railway screws and hardware recovered from 
                the old Knysna railway line, breathing new life into materials that once connected 
                communities across the South African landscape. Every screw, bolt, and piece of metal 
                tells a story of journeys taken, cargo transported, and the industrial heritage of the region.
              </p>
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image) => (
            <div 
              key={image.id} 
              className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="aspect-square relative overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {image.title}
                </h3>
                <p className="text-gray-600">
                  Crafted from authentic Knysna railway heritage materials
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Heritage Information */}
        <div className="mt-16 bg-gradient-to-r from-amber-100 to-orange-100 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            About the Knysna Railway Heritage
          </h2>
          <div className="max-w-4xl mx-auto text-gray-700 leading-relaxed">
            <p className="mb-4">
              The Knysna railway line was an integral part of South Africa's transportation history, 
              connecting the coastal town of Knysna to the broader rail network. When the line was 
              eventually decommissioned, much of the infrastructure was left to rust and decay.
            </p>
            <p className="mb-4">
              Rather than letting these materials become waste, our artisan saw opportunity in preservation. 
              By collecting and repurposing these railway components, each sculpture becomes a guardian 
              of history - transforming industrial artifacts into artistic expressions that honor both 
              the past and the environment.
            </p>
            <p>
              The Railway People collection represents more than just recycled art; it's a testament to 
              the enduring spirit of innovation and the beauty that can emerge when we give new purpose 
              to forgotten materials.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}