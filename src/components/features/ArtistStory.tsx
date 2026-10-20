import Link from 'next/link'
import ArtImage from '@/components/ui/ArtImage'
import { ArrowIcon } from '@/components/ui/Icons'
export default function ArtistStory({ full = false }: { full?: boolean }) {
  return <section className={`artist-section section-shell ${full ? 'artist-full' : ''}`} id="maker" aria-labelledby="artist-heading">
    <div className="artist-photo" data-reveal><ArtImage portrait sizes="(max-width: 760px) 90vw, 45vw" priority={full} /><span className="photo-caption">Steve, in his happy place.</span></div>
    <div className="artist-copy"><p className="section-note">The hands behind the characters</p><h2 id="artist-heading" data-reveal>A maker.<br />An imagination.<br />A shed full of possibility.</h2>
      <p>Meet Steve Kirsten. A forester by training and a maker by nature, Steve has always had an eye for what a piece of material could become.</p>
      <p>What began with wooden garden benches led to a very different kind of making: turning old screws, bolts, and unexpected bits of scrap into sculptures with unmistakable personality.</p>
      <blockquote>“The more I do this, the more I see potential in all sorts of weird and odd bits of scrap metal.”<cite>Steve Kirsten</cite></blockquote>
      {!full && <Link className="text-link" href="/about/">More about Steve <ArrowIcon /></Link>}
    </div>
  </section>
}
