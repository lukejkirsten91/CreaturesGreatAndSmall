'use client'
import { useEffect, useRef, useState } from 'react'
import { CONTACT_EMAIL, enquiryUrl } from '@/lib/collection'
import { ArrowIcon, SparkIcon } from '@/components/ui/Icons'
export default function Contact() {
  const [copied, setCopied] = useState(false)
  const [failed, setFailed] = useState(false)
  const timeout = useRef<ReturnType<typeof setTimeout>>()
  useEffect(() => () => { if (timeout.current) clearTimeout(timeout.current) }, [])
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL); setCopied(true); setFailed(false)
      if (timeout.current) clearTimeout(timeout.current)
      timeout.current = setTimeout(() => setCopied(false), 3000)
    } catch { setFailed(true) }
  }
  return <section className="contact-section section-shell" id="contact" aria-labelledby="contact-heading">
    <div className="contact-top"><span>Something caught your eye?</span><SparkIcon /></div>
    <h2 id="contact-heading" data-reveal>Let’s find your<br />kind of character.</h2>
    <div className="contact-bottom"><p>Ask about a sculpture, share an idea for a commission, or simply say hello. Steve would love to hear from you.</p>
      <div className="contact-actions"><a className="button button-light" href={enquiryUrl()}>Email Steve <ArrowIcon /></a><div className="email-row"><a href={enquiryUrl()}>{CONTACT_EMAIL}</a><button className="copy-email" onClick={copy} aria-label="Copy email address">{copied ? 'Copied!' : 'Copy'}</button></div><span role="status" className={failed ? 'copy-status' : 'sr-only'}>{failed ? 'Please select the email address above to copy it.' : copied ? 'Email address copied to clipboard.' : ''}</span></div>
    </div>
  </section>
}
