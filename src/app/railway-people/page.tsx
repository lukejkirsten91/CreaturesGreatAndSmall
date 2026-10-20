import type { Metadata } from 'next'
import Link from 'next/link'
import ArtImage from '@/components/ui/ArtImage'
import ImageGallery from '@/components/features/ImageGallery'
import Contact from '@/components/features/Contact'
import { ArrowIcon } from '@/components/ui/Icons'
import { getSculpture } from '@/lib/collection'
export const metadata: Metadata = { title: 'The Railway People', description: 'Historic Knysna railway screws find a second life in Steve Kirsten’s Railway People sculpture collection.', alternates: { canonical: '/railway-people/' } }
export default function RailwayPeoplePage() {
  return <main id="main">
    <div className="page-intro section-shell"><Link className="text-link back-link" href="/"><ArrowIcon /> Back to the studio</Link><p className="section-note">The Railway People</p><h1>From the railway.<br />Into your imagination.</h1><p>Reclaimed from the Knysna railway, these old screws have found a wonderfully unexpected second act.</p></div>
    <section className="railway-story section-shell"><div className="railway-story-image" data-reveal><ArtImage sculpture={getSculpture(13)} priority sizes="(max-width: 760px) 90vw, 45vw" /></div><div><h2 data-reveal>History you can<br />hold in your hand.</h2><p>Look closely and the original railway screw is still there. Its threads become a torso, its head a hat. A few carefully shaped pieces of metal give it a stance, an occupation, a personality.</p><p>Steve’s Railway People celebrate everyday moments: fishing, cycling, making music, sitting with friends. Each retains the weathered texture of the metal it came from.</p><p>The result is a connection between the Garden Route’s railway heritage and the very human moments that make us smile.</p></div></section>
    <section className="collection-section section-shell" id="gallery" aria-labelledby="railway-gallery"><div className="section-heading"><div><p className="section-note">The complete collection</p><h2 id="railway-gallery">Meet the Railway People.</h2></div><p>Browse the photographs, take a closer look, and find the character that speaks to you.</p></div><ImageGallery expanded /></section>
    <Contact />
  </main>
}
