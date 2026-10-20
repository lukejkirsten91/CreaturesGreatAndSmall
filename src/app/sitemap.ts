import type { MetadataRoute } from 'next'
import { SITE_URL, sculptures } from '@/lib/collection'
export const dynamic = 'force-static'
export default function sitemap(): MetadataRoute.Sitemap {
  return ['/', '/about/', '/railway-people/', ...sculptures.map(piece => `/gallery/${piece.id}/`)].map(path => ({ url: `${SITE_URL}${path}` }))
}
