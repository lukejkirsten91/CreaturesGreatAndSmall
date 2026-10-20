import Link from 'next/link'
import { notFound } from 'next/navigation'
import ArtImage from '@/components/ui/ArtImage'
import { ArrowIcon } from '@/components/ui/Icons'
import { sculptures, enquiryUrl } from '@/lib/collection'
type PageProps = { params: Promise<{ imageId: string }> }
export const dynamicParams = false
function findPiece(id: string) { return /^[1-9]\d*$/.test(id) ? sculptures.find(piece => piece.id === Number(id)) : undefined }
export default async function SculpturePage({ params }: PageProps) {
  const { imageId } = await params
  const piece = findPiece(imageId)
  if (!piece) notFound()
  const current = sculptures.indexOf(piece)
  const previous = sculptures[(current - 1 + sculptures.length) % sculptures.length]
  const next = sculptures[(current + 1) % sculptures.length]
  return <main id="main" className="piece-page section-shell">
    <Link className="text-link back-link" href="/#gallery"><ArrowIcon /> Back to the collection</Link>
    <div className="piece-layout"><div className="piece-image"><ArtImage sculpture={piece} priority sizes="(max-width: 760px) 95vw, 55vw" /></div><div className="piece-info"><p className="section-note">The Railway People · {piece.category}</p><h1>{piece.title}</h1><p className="piece-description">{piece.description}</p><dl><div><dt>Made by</dt><dd>Steve Kirsten</dd></div><div><dt>Material</dt><dd>Reclaimed metal</dd></div><div><dt>From</dt><dd>Garden Route, South Africa</dd></div></dl><a className="button button-dark" href={enquiryUrl(piece.title)}>Enquire about this piece <ArrowIcon /></a><p className="availability-note">Ask Steve about availability or a piece of your own.</p></div></div>
    <nav className="piece-navigation" aria-label="Browse sculptures"><Link href={`/gallery/${previous.id}/`}><ArrowIcon /><span><small>Previous sculpture</small>{previous.title}</span></Link><span>{current + 1} / {sculptures.length}</span><Link href={`/gallery/${next.id}/`}><span><small>Next sculpture</small>{next.title}</span><ArrowIcon /></Link></nav>
  </main>
}
export function generateStaticParams() { return sculptures.map(piece => ({ imageId: String(piece.id) })) }
export async function generateMetadata({ params }: PageProps) {
  const { imageId } = await params
  const piece = findPiece(imageId)
  if (!piece) return { title: 'Sculpture not found' }
  return { title: piece.title, description: piece.description, alternates: { canonical: `/gallery/${piece.id}/` }, openGraph: { images: [{ url: `/images/optimized/piece-${piece.id}-960.webp`, alt: piece.title }] } }
}
