import { createServer } from 'node:http'
import { readFile, stat } from 'node:fs/promises'
import path from 'node:path'
const root = path.resolve('out')
const config = JSON.parse(await readFile('vercel.json', 'utf8'))
const headers = Object.fromEntries(config.headers[0].headers.map(header => [header.key, header.value]))
const types = { '.html': 'text/html; charset=utf-8', '.js': 'application/javascript', '.css': 'text/css', '.webp': 'image/webp', '.jpg': 'image/jpeg', '.svg': 'image/svg+xml', '.woff2': 'font/woff2', '.xml': 'application/xml', '.txt': 'text/plain' }
const server = createServer(async (request, response) => {
  try {
    const pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname)
    let file = path.resolve(root, `.${pathname}`)
    if (file !== root && !file.startsWith(root + path.sep)) { response.writeHead(403); response.end(); return }
    const info = await stat(file).catch(() => null)
    if (info?.isDirectory()) file = path.join(file, 'index.html')
    let status = 200
    let data = await readFile(file).catch(() => null)
    if (!data) { status = 404; data = await readFile(path.join(root, '404.html')); file = '404.html' }
    response.writeHead(status, { ...headers, 'Content-Type': types[path.extname(file)] || 'application/octet-stream', 'Cache-Control': 'no-cache' })
    response.end(request.method === 'HEAD' ? undefined : data)
  } catch { response.writeHead(400); response.end('Bad request') }
})
server.listen(Number(process.env.PORT || 3000), '127.0.0.1', () => console.log(`Static preview: http://127.0.0.1:${process.env.PORT || 3000}`))
