import Link from 'next/link'
import Hero from '@/components/features/Hero'
import ImageGallery from '@/components/features/ImageGallery'
import ArtistStory from '@/components/features/ArtistStory'
import Contact from '@/components/features/Contact'
import ArtImage from '@/components/ui/ArtImage'
import { ArrowIcon, SparkIcon } from '@/components/ui/Icons'
import { getSculpture } from '@/lib/collection'
import type { Metadata } from 'next'
export const metadata: Metadata = { alternates: { canonical: '/' } }

export default function Home() {
  return <main id="main">
    <Hero />
    <div className="making-strip"><p className="sr-only">Reclaimed metal. Reimagined by hand. Made in South Africa.</p><div className="making-track" aria-hidden="true">
      {[0, 1, 2, 3].map(i => <span className="making-repeat" key={i}><span>Reclaimed metal</span><SparkIcon /><span>Reimagined by hand</span><SparkIcon /><span>Made in South Africa</span><SparkIcon /></span>)}
    </div></div>
    <section className="introduction section-shell" aria-labelledby="intro-heading">
      <p className="section-note"><span className="status-dot" /> A second life, full of character</p>
      <div><h2 id="intro-heading" className="statement" data-reveal>Some see a rusty old screw.<br />Steve sees someone in there.</h2><p className="intro-copy">A guitarist mid-song. A fisherman waiting for a bite. Two people in love. From his workshop on South Africa’s Garden Route, Steve Kirsten turns forgotten metal into little characters with stories of their own.</p></div>
    </section>
    <section className="collection-section section-shell" id="gallery" aria-labelledby="collection-heading">
      <div className="section-heading"><div><p className="section-note">The Railway People</p><h2 id="collection-heading" data-reveal>Small sculptures.<br />Big personalities.</h2></div><p>Meet the characters. Each one is shaped by hand from reclaimed railway hardware, with a little imagination along the way.</p></div>
      <ImageGallery />
    </section>
    <section className="heritage section-shell" id="story" aria-labelledby="heritage-heading">
      <div className="heritage-art" data-reveal><span className="heritage-circle" aria-hidden="true" /><ArtImage sculpture={getSculpture(1)} className="screw-image" sizes="(max-width: 760px) 90vw, 45vw" /><span className="image-annotation">Where every Railway Person begins.</span><svg className="annotation-line" viewBox="0 0 110 80" fill="none" aria-hidden="true"><path d="M6 70C65 74 105 47 92 10M82 18L93 8l11 12" stroke="currentColor" strokeWidth="1.5" /></svg></div>
      <div className="heritage-copy"><p className="section-note">A little piece of the Garden Route</p><h2 id="heritage-heading" data-reveal>Before they had<br />a personality,<br />they had a past.</h2><p>These screws once helped hold the Knysna railway together. Weathered, worn, and full of history, they’re the starting point for the Railway People.</p><p>Steve keeps the marks of their first life. The threads, the patina, the familiar shape of a bolt: all become part of a new story.</p><Link className="text-link" href="/railway-people/">Discover their story <ArrowIcon /></Link></div>
    </section>
    <ArtistStory />
    <section className="group-section section-shell" aria-labelledby="group-heading">
      <div className="group-heading"><p className="section-note">Quite the company to keep</p><h2 id="group-heading" data-reveal>There’s a character<br />for everyone.</h2><p>The quiet ones. The adventurous ones. The ones who always bring a little joy.</p></div>
      <ArtImage sculpture={getSculpture(28)} className="group-image" sizes="(max-width: 760px) 100vw, 80vw" />
      <a className="button button-dark" href="#gallery">Find your favourite <ArrowIcon /></a>
    </section>
    <Contact />
  </main>
}
