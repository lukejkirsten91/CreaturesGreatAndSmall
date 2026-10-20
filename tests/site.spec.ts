import { test, expect } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'

test('collection, contact, accessibility, and motion work under the production security policy', async ({ page }, testInfo) => {
  const errors: string[] = []
  const thirdPartyRequests: string[] = []
  page.on('pageerror', error => errors.push(error.message))
  page.on('console', message => { if (message.type() === 'error') errors.push(message.text()) })
  page.on('request', request => {
    if (!new URL(request.url()).hostname.match(/^(127\.0\.0\.1|localhost|creatures-great-and-small\.vercel\.app)$/)) thirdPartyRequests.push(request.url())
  })
  const response = await page.goto('/')
  expect(response?.headers()['content-security-policy']).toContain("script-src 'self';")
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('A little metal.A lot of soul.')
  await page.evaluate(() => document.fonts.ready)
  await expect(page.locator('.hero-line > span').first()).toBeVisible()
  await expect(page.getByRole('button', { name: 'Show Bicycle Person' })).toBeEnabled()
  await page.getByRole('button', { name: 'Show Bicycle Person' }).click()
  await expect(page.locator('.hero-piece-caption')).toContainText('Bicycle Person')
  await page.getByRole('button', { name: 'Show Guitar Person' }).click()
  await expect(page.getByRole('button', { name: 'Show Guitar Person' })).toHaveAttribute('aria-pressed', 'true')
  await expect(page.locator('.hero-sculpture')).toHaveCSS('opacity', '1')
  await expect(page.locator('.hero-cta')).toHaveCSS('opacity', '1')
  await page.locator('.hero-sculpture').evaluate((image: HTMLImageElement) => image.decode())
  await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }))
  await page.screenshot({ path: `artifacts/${testInfo.project.name}-hero.png` })

  if (testInfo.project.name === 'mobile') {
    await page.getByRole('button', { name: 'Open menu' }).click()
    await expect(page.locator('#mobile-menu')).toBeVisible()
    await page.locator('#mobile-menu').getByRole('link', { name: 'The collection' }).click()
    await expect(page.locator('#mobile-menu')).toHaveCount(0)
  }
  await page.getByRole('button', { name: 'Together', exact: true }).click()
  await expect(page.locator('.art-card')).toHaveCount(3)
  await page.getByRole('button', { name: 'View Love', exact: true }).click()
  const dialog = page.getByRole('dialog')
  await expect(dialog).toBeVisible()
  await expect(dialog.getByRole('heading')).toHaveText('Love')
  await page.keyboard.press('ArrowRight')
  await expect(dialog.getByRole('heading')).toHaveText('See, Hear, Say')
  await dialog.getByRole('button', { name: 'Previous sculpture' }).click()
  await expect(dialog.getByRole('heading')).toHaveText('Love')
  await expect(dialog.getByRole('link', { name: 'Enquire about this piece' })).toHaveAttribute('href', /mailto:stavroskirsten@gmail.com\?subject=Enquiry%20about%20Love/)
  const modalA11y = await new AxeBuilder({ page }).analyze()
  expect(modalA11y.violations).toEqual([])
  await page.screenshot({ path: `artifacts/${testInfo.project.name}-viewer.png` })
  await page.keyboard.press('Escape')
  await expect(dialog).not.toBeVisible()
  await expect(page.getByRole('button', { name: 'View Love', exact: true })).toBeFocused()
  await page.getByRole('button', { name: 'All characters', exact: true }).click()
  await page.getByRole('button', { name: 'View all 28 photographs' }).click()
  await expect(page.locator('.art-card')).toHaveCount(28)

  await page.getByRole('button', { name: 'Pause motion', exact: true }).click()
  await expect(page.locator('html')).toHaveAttribute('data-motion', 'off')
  await page.reload()
  await expect(page.getByRole('button', { name: 'Resume motion', exact: true })).toBeVisible()
  await expect(page.locator('html')).toHaveAttribute('data-motion', 'off')
  // Check the complete initial page with all animated content now settled.
  const accessibility = await new AxeBuilder({ page }).analyze()
  expect(accessibility.violations).toEqual([])
  await expect(page.getByRole('link', { name: 'Email Steve', exact: true })).toHaveAttribute('href', /^mailto:stavroskirsten@gmail.com/)
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true)
  expect(thirdPartyRequests).toEqual([])
  expect(errors).toEqual([])
  await page.evaluate(() => { (document.activeElement as HTMLElement)?.blur(); window.scrollTo({ top: 0, behavior: 'instant' }) })
  await page.screenshot({ path: `artifacts/${testInfo.project.name}-full.png`, fullPage: true })
})

test('story pages, shared sculpture links, and narrow screens render correctly', async ({ page }, testInfo) => {
  await page.emulateMedia({ reducedMotion: 'reduce' })
  for (const route of ['/about/', '/railway-people/', '/gallery/12/']) {
    expect((await page.goto(route))?.status()).toBe(200)
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible()
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true)
    expect((await new AxeBuilder({ page }).analyze()).violations).toEqual([])
  }
  await page.getByRole('link', { name: 'Next sculpture' }).click()
  await expect(page).toHaveURL(/\/gallery\/13\//)
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Leaning Person & the screws')
  expect((await page.goto('/gallery/not-a-number/'))?.status()).toBe(404)
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('This characterhas wandered off.')
  await page.goto('/')
  for (const width of [320, 375, 768, 1024]) {
    await page.setViewportSize({ width, height: 900 })
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth), `Overflow at ${width}px`).toBe(true)
  }
  if (testInfo.project.name === 'mobile') {
    await page.setViewportSize({ width: 390, height: 844 })
    await page.screenshot({ path: 'artifacts/mobile-reduced-motion.png' })
  }
})
