export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            Creatures Great and Small
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Handcrafted scrap metal creatures by a South African artisan, 
            transforming discarded materials into beautiful works of art.
          </p>
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 max-w-2xl mx-auto">
            <p className="text-lg text-gray-700">
              Welcome to the world of recycled metal art. Each piece tells a story 
              of transformation, creativity, and the beauty found in the unexpected.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}