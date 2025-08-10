import { MetadataRoute } from 'next'
import { getAllPostsFromFiles } from '@/lib/api-file'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://portfolio.vercel.app'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const locales = ['en', 'ru']
  
  // Get all blog posts
  const posts = getAllPostsFromFiles()
  
  // Static routes
  const staticRoutes = [
    '',
    '/contact',
    '/activities',
    '/blog',
    '/projects',
  ]
  
  // Widget routes
  const widgetRoutes = [
    '/projects/css-clamp-calculator',
    '/projects/color-converter',
    '/projects/bezier-curve',
    '/projects/css-specificity',
    '/projects/flexbox-generator',
    '/projects/grid-generator',
    '/projects/html-tree',
    '/projects/password-generator',
    '/projects/qr-generator',
    '/projects/speed-test',
    '/projects/svg-encoder',
    '/projects/utm-builder',
    '/projects/youtube-thumbnail',
    '/projects/theme-settings',
    '/projects/language-settings',
  ]
  
  // Generate sitemap entries for all routes and locales
  const sitemapEntries: MetadataRoute.Sitemap = []
  
  // Add static routes
  staticRoutes.forEach(route => {
    locales.forEach(locale => {
      sitemapEntries.push({
        url: `${BASE_URL}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'weekly' : 'monthly',
        priority: route === '' ? 1.0 : route === '/projects' ? 0.9 : 0.8,
      })
    })
  })
  
  // Add widget routes
  widgetRoutes.forEach(route => {
    locales.forEach(locale => {
      sitemapEntries.push({
        url: `${BASE_URL}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.9,
      })
    })
  })
  
  // Add blog post routes
  posts.forEach(post => {
    locales.forEach(locale => {
      sitemapEntries.push({
        url: `${BASE_URL}/${locale}/blog/${post.slug}`,
        lastModified: new Date(post.date || new Date()),
        changeFrequency: 'monthly',
        priority: 0.7,
      })
    })
  })
  
  return sitemapEntries
}