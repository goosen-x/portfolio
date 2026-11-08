import createNextIntlPlugin from 'next-intl/plugin'

/** @type {import('next').NextConfig} */
const withNextIntl = createNextIntlPlugin()

const nextConfig = {
	output: 'standalone',
	async redirects() {
		// Старые статьи блога переехали на pixeltool.pro: ведём на тот же адрес,
		// чтобы вес и ссылки ушли на статью, а не на общий список.
		const movedToPixeltool = [
			'css-flexbox-guide',
			'css-grid-layout',
			'css-variables',
			'css-container-queries',
			'css-animations'
		]
		return [
			...movedToPixeltool.map(slug => ({
				source: `/:locale(en|ru)/blog/${slug}`,
				destination: `https://pixeltool.pro/blog/${slug}`,
				permanent: true
			})),
			{ source: '/:locale(en|ru)/blog/:slug', destination: '/:locale/blog', permanent: true }
		]
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
