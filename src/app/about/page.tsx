import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About the Artisan - Creatures Great and Small',
  description: 'Meet the South African artist transforming scrap metal into beautiful creatures at markets across South Africa',
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            About the Artisan
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            Meet the creative mind behind these extraordinary metal sculptures, 
            bringing beauty to life from the discarded and forgotten.
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          {/* Story Section */}
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">The Artist's Journey</h2>
            <div className="prose prose-lg text-gray-700 leading-relaxed">
              <p className="mb-6">
                In the heart of South Africa, where the landscape tells stories of resilience 
                and transformation, an artist works with his hands to breathe new life into 
                materials that others have discarded. This is not just about recycling - 
                it's about resurrection.
              </p>
              
              <p className="mb-6">
                With years of experience working with metal and an eye for seeing potential 
                where others see waste, our artisan has developed a unique artistic voice. 
                Each piece begins as scrap - old machinery, forgotten hardware, discarded 
                metal fragments - but emerges as something entirely new: creatures with 
                personality, character, and soul.
              </p>
              
              <p className="mb-6">
                The workshop, filled with the sounds of hammering, welding, and grinding, 
                is where magic happens. It's a place where rust-covered bolts become joints, 
                where bent metal finds new purpose as limbs, and where imagination transforms 
                industrial waste into artistic expression.
              </p>
            </div>
          </div>

          {/* Philosophy Section */}
          <div className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Artistic Philosophy</h2>
            <div className="text-gray-700 leading-relaxed">
              <p className="mb-4 text-lg">
                "Every piece of metal has lived a life before it reaches my workshop. 
                My job is not to erase that history, but to honor it while giving it a new story."
              </p>
              
              <p className="mb-6">
                This philosophy drives every creation. The patina of age, the marks of previous use, 
                the weathering of time - these aren't flaws to be hidden but character to be celebrated. 
                Each sculpture carries the industrial heritage of South Africa while pointing toward 
                a future where waste becomes wonder.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Sustainability</h3>
                  <p>
                    Every piece prevents metal from ending up in landfills, turning environmental 
                    responsibility into artistic opportunity.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Heritage</h3>
                  <p>
                    Using materials with history - like the Knysna railway screws - preserves 
                    South African industrial heritage in artistic form.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Market Life Section */}
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Life at the Markets</h2>
            <div className="text-gray-700 leading-relaxed">
              <p className="mb-6">
                Across South Africa's vibrant markets, from small town gatherings to bustling 
                city bazaars, these metal creatures find their way to new homes. Market day 
                is more than just selling - it's about connection, storytelling, and sharing 
                the passion behind each piece.
              </p>
              
              <p className="mb-6">
                Visitors often spend time examining the intricate details, marveling at how 
                discarded parts have been transformed into expressive faces, graceful limbs, 
                and dynamic poses. Children are especially drawn to the creatures, seeing 
                in them the same imagination that transforms everyday objects into toys and adventures.
              </p>
              
              <p>
                Each sale is not just a transaction but the beginning of a new chapter in the 
                sculpture's story. These pieces go on to become garden guardians, indoor 
                conversation starters, and cherished gifts that carry with them the spirit 
                of South African creativity and resourcefulness.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-gradient-to-r from-teal-100 to-emerald-100 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Connect with the Artist
            </h2>
            <p className="text-gray-700 mb-6">
              Interested in commissioning a piece or learning more about the craft? 
              Get in touch to discuss custom sculptures or to find out where you can 
              see the latest creations at South African markets.
            </p>
            <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
              <a 
                href="/contact" 
                className="inline-block bg-teal-600 text-white px-8 py-3 rounded-lg hover:bg-teal-700 transition-colors"
              >
                Get in Touch
              </a>
              <a 
                href="/railway-people" 
                className="inline-block bg-amber-600 text-white px-8 py-3 rounded-lg hover:bg-amber-700 transition-colors"
              >
                View Railway People Collection
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}