import { readFile, writeFile, readdir, mkdir, rm } from 'node:fs/promises'
import { createHash } from 'node:crypto'
import path from 'node:path'
async function walk(directory) {
  const files = []
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const location = path.join(directory, entry.name)
    if (entry.isDirectory()) files.push(...await walk(location))
    else files.push(location)
  }
  return files
}
// Externalize deterministic Next hydration scripts so CSP needs neither inline JS nor eval.
const scriptsDirectory = 'out/_next/static/inline'
await mkdir(scriptsDirectory, { recursive: true })
const htmlFiles = (await walk('out')).filter(file => file.endsWith('.html'))
const scripts = new Map()
for (const file of htmlFiles) {
  let html = await readFile(file, 'utf8')
  html = html.replace(/<script\b([^>]*)>([\s\S]*?)<\/script>/g, (tag, attributes, content) => {
    if (/\bsrc\s*=/.test(attributes) || !content.trim() || /\btype=["']application\/ld\+json/.test(attributes)) return tag
    const hash = createHash('sha256').update(content).digest('hex').slice(0, 24)
    scripts.set(hash, content)
    return `<script${attributes} src="/_next/static/inline/${hash}.js"></script>`
  })
  await writeFile(file, html)
}
for (const [hash, content] of scripts) await writeFile(`${scriptsDirectory}/${hash}.js`, content)
// Only generated output is trimmed; original photographs remain in source control.
await rm('out/images/railway-people', { recursive: true, force: true })
await rm('out/images/hero', { recursive: true, force: true })
// Keep the font licence texts available with the distributed font files.
console.log(`Hardened ${htmlFiles.length} static pages; ${scripts.size} cacheable hydration scripts. No inline JavaScript required.`)
