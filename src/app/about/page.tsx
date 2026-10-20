import type { Metadata } from 'next'
import Link from 'next/link'
import ArtistStory from '@/components/features/ArtistStory'
import Contact from '@/components/features/Contact'
import { ArrowIcon } from '@/components/ui/Icons'
export const metadata: Metadata = { title: 'Meet Steve Kirsten', description: 'Meet Steve Kirsten, the South African maker turning reclaimed metal into sculptures with personality.', alternates: { canonical: '/about/' } }
export default function AboutPage() {
  return <main id="main">
    <div className="page-intro section-shell"><Link className="text-link back-link" href="/"><ArrowIcon /> Back to the studio</Link><p className="section-note">Meet the maker</p><h1>Seeing possibility<br />in the unexpected.</h1></div>
    <ArtistStory full />
    <section className="story-details section-shell"><h2 data-reveal>A life of making.</h2><div className="story-prose">
      <p>Born in Benoni, Steve completed his army training after school and worked on a metal lathe in a steel factory to fund a few months of hitchhiking across Europe. He later qualified as a forester at Saasveld Forestry College in 1974.</p>
      <p>Years later, back on the Garden Route, making became a new kind of adventure. Steve started with wooden garden benches, but their size made them cumbersome to take to markets. A friend asked a simple question: did everything have to be made of wood?</p>
      <p>He already had the tools. That question opened up a world of metal, movement, and little personalities. Railway screws became people; unexpected scraps became the details that brought them to life.</p>
      <p>Today, Creatures Great and Small brings that imagination together: a collection of work that keeps the history of its materials, and finds something joyful in them.</p>
      <Link className="text-link" href="/#gallery">Meet the characters <ArrowIcon /></Link>
    </div></section>
    <Contact />
  </main>
}
