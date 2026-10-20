import type { Sculpture } from '@/lib/collection'
type Props = { sculpture?: Sculpture; portrait?: boolean; className?: string; sizes?: string; priority?: boolean }
export default function ArtImage({ sculpture, portrait = false, className = '', sizes = '100vw', priority = false }: Props) {
  const name = portrait ? 'steve' : `piece-${sculpture!.id}`
  return (
    // Images are resized once at build time, never by a billed image endpoint.
    // eslint-disable-next-line @next/next/no-img-element
    <img className={`art-image ${className}`} src={`/images/optimized/${name}-960.webp`}
      srcSet={[320, 640, 960].map(width => `/images/optimized/${name}-${width}.webp ${width}w`).join(', ')}
      sizes={sizes}
      alt={portrait ? 'Steve Kirsten in his workshop, surrounded by tools and reclaimed metal' : `${sculpture!.title}, a handmade reclaimed-metal sculpture by Steve Kirsten`}
      width={portrait ? 800 : 960} height={portrait ? 960 : 1200}
      loading={priority ? 'eager' : 'lazy'} fetchPriority={priority ? 'high' : 'auto'} decoding="async" />
  )
}
