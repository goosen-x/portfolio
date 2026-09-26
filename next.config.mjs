import createNextIntlPlugin from 'next-intl/plugin'

/** @type {import('next').NextConfig} */
const withNextIntl = createNextIntlPlugin()

const nextConfig = {
	output: 'standalone',
	async redirects() {
		return [{ source: '/:locale(en|ru)/blog/:slug', destination: '/:locale/blog', permanent: true }]
	},
	images: {
		remotePatterns: [
			{ protocol: 'https', hostname: 'lh3.googleusercontent.com' },
			{ protocol: 'https', hostname: 'pbs.twimg.com' },
			{ protocol: 'https', hostname: 'images.unsplash.com' },
			{ protocol: 'https', hostname: 'img.youtube.com' },
			{ protocol: 'https', hostname: 'www.codewars.com' },
			{ protocol: 'https', hostname: 'pixeltool.pro' }
		]
	}
}

export default withNextIntl(nextConfig)
