import { MetadataRoute } from 'next'
import { getAllPostsFromFiles } from '@/lib/api-file'
import { SITE_URL as BASE_URL } from '@/lib/constants/site'

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
    '/donate',
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
        priority: route === '' ? 1.0 : 0.8,
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