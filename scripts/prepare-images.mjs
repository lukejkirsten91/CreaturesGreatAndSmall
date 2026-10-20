import { readFile, mkdir, stat } from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'
const collection = await readFile('src/lib/collection.ts', 'utf8')
const entries = [...collection.matchAll(/\{ id: (\d+), filename: '([^']+)'/g)]
if (entries.length !== 28) throw new Error('Expected all 28 original collection photographs.')
const target = 'public/images/optimized'
await mkdir(target, { recursive: true })
let total = 0
for (const [, id, filename] of entries) {
  for (const width of [320, 640, 960]) {
    const destination = `${target}/piece-${id}-${width}.webp`
    await sharp(path.join('public/images/railway-people', filename)).rotate().resize({ width }).webp({ quality: 78, effort: 6 }).toFile(destination)
    total += (await stat(destination)).size
  }
}
for (const width of [320, 640, 960]) await sharp('public/images/hero/20250720_114142.jpg').rotate().resize({ width }).webp({ quality: 80, effort: 6 }).toFile(`${target}/steve-${width}.webp`)
await sharp('public/images/railway-people/The Gang.jpeg').resize(1200, 630, { fit: 'contain', background: '#ffffff' }).jpeg({ quality: 85 }).toFile('public/images/social.jpg')
console.log(`Prepared 28 sculptures in three responsive sizes (${(total / 1024).toFixed(0)} KB combined), portrait, and sharing image.`)
