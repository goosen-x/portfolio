import createNextIntlPlugin from 'next-intl/plugin'

/** @type {import('next').NextConfig} */
const withNextIntl = createNextIntlPlugin()

const nextConfig = {
	output: 'standalone',
	images: {
		domains: [
			'lh3.googleusercontent.com',
			'pbs.twimg.com',
			'images.unsplash.com',
			'img.youtube.com',
			'www.codewars.com'
		]
	}
}

export default withNextIntl(nextConfig)
