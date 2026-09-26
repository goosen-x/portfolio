import { MetadataRoute } from 'next'
import { SITE_URL as BASE_URL } from '@/lib/constants/site'
import { ProjectsData } from '@/components/homepage/SectionProjects/constants'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const locales = ['en', 'ru']

  // Static routes
  const staticRoutes = [
    '',
    '/contact',
    '/activities',
    '/blog',
	'/projects',
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

  // Add project routes
	ProjectsData.forEach(project => {
		locales.forEach(locale => {
			sitemapEntries.push({
				url: `${BASE_URL}/${locale}/projects/${project.name}`,
				changeFrequency: 'monthly',
				priority: 0.7
			})
		})
	})

  return sitemapEntries
}
