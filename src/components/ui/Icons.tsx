type IconProps = { className?: string }
export function ArrowIcon({ className = '' }: IconProps) {
  return <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
}
export function SparkIcon({ className = '' }: IconProps) {
  return <svg className={className} width="34" height="34" viewBox="0 0 40 40" fill="none" aria-hidden="true"><path d="M20 2v36M2 20h36M7.3 7.3l25.4 25.4M7.3 32.7 32.7 7.3" stroke="currentColor" strokeWidth="3" /></svg>
}
export function CloseIcon() {
  return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m6 6 12 12M6 18 18 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
}
export function MakerMark() {
  return <svg className="maker-mark" width="40" height="48" viewBox="0 0 40 48" fill="none" aria-hidden="true"><path d="m12 6 13-2 2 8-13 2z" fill="currentColor" /><path d="m9 14 24-4M20 16l-2 14m2-10L7 25m13-4 13 5M18 30l-8 13m8-13 10 12M15 19l9 1m-10 4 9 1m-10 3 9 1" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
}
