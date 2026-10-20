import { readFile, readdir, access } from 'node:fs/promises'
import assert from 'node:assert/strict'
import path from 'node:path'
import nextConfig from '../next.config.js'
const config = JSON.parse(await readFile('vercel.json', 'utf8'))
assert.equal(nextConfig.output, 'export', 'Production must remain a static export.')
assert.equal(nextConfig.images.unoptimized, true, 'No paid runtime image transformations.')
assert.equal(config.framework, null, 'Vercel must serve static files without framework functions.')
assert.equal(config.outputDirectory, 'out')
assert.ok(!config.functions && !config.rewrites, 'Do not add compute or proxy rewrites.')
const csp = config.headers[0].headers.find(header => header.key === 'Content-Security-Policy').value
assert.match(csp, /script-src 'self';/)
assert.ok(!csp.includes("'unsafe-eval'"))
assert.match(csp, /frame-ancestors 'none'/)
async function walk(directory) {
  return (await Promise.all((await readdir(directory, { withFileTypes: true })).map(async entry => {
    const filename = path.join(directory, entry.name)
    return entry.isDirectory() ? walk(filename) : [filename]
  }))).flat()
}
const sourceFiles = await walk('src')
assert.ok(!sourceFiles.some(file => /(?:^|\/)(?:middleware|proxy|route)\.[jt]sx?$/.test(file)), 'No middleware, request handlers, or server routes.')
const files = await walk('out')
const htmlFiles = files.filter(file => file.endsWith('.html'))
assert.ok(htmlFiles.length >= 32, 'All collection and story pages must be exported.')
for (const file of htmlFiles) {
  const html = await readFile(file, 'utf8')
  assert.ok(!html.includes('/_next/image'), `Runtime image endpoint found in ${file}`)
  assert.ok(!/elfsight|creaturesgreatandsmall\.shop/.test(html), `Old widget or expired domain found in ${file}`)
  for (const [, attrs, content] of html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/g)) assert.ok(/\bsrc=/.test(attrs) || !content.trim() || /application\/ld\+json/.test(attrs), `Inline script in ${file}`)
  for (const [, asset] of html.matchAll(/(?:src|href)="(\/(?:_next|images|icon\.svg)[^"#?]*)"/g)) await access(path.join('out', decodeURIComponent(asset)))
}
const manifest = JSON.parse(await readFile('.next/server/server-reference-manifest.json', 'utf8'))
assert.equal(Object.keys(manifest.node ?? {}).length, 0, 'No server actions.')
assert.equal(Object.keys(manifest.edge ?? {}).length, 0, 'No edge server actions.')
console.log(`PASS: ${htmlFiles.length} static pages; no server actions, API routes, middleware, external widgets, paid image endpoint, or executable inline scripts.`)
