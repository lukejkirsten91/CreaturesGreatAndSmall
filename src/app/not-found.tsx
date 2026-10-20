import Link from 'next/link'
import { MakerMark } from '@/components/ui/Icons'
export default function NotFound() {
  return <main id="main" className="not-found section-shell"><MakerMark /><p className="section-note">Page not found</p><h1>This character<br />has wandered off.</h1><p>There are plenty of others waiting to meet you.</p><Link className="button button-dark" href="/#gallery">Back to the collection</Link></main>
}
