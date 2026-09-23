export type PixeltoolPost = {
	title: string
	link: string
	description: string
	pubDate: string
	image: string
}

const FEED_URL = 'https://pixeltool.pro/rss.xml'

const unescapeXml = (value: string) =>
	value
		.replace(/&lt;/g, '<')
		.replace(/&gt;/g, '>')
		.replace(/&quot;/g, '"')
		.replace(/&apos;/g, "'")
		.replace(/&amp;/g, '&')

function parseItems(xml: string): PixeltoolPost[] {
	const items = xml.match(/<item>[\s\S]*?<\/item>/g) ?? []

	return items.map(item => {
		const getTag = (tag: string) =>
			item.match(new RegExp(`<${tag}>([\\s\\S]*?)</${tag}>`))?.[1]?.trim() ?? ''

		return {
			title: unescapeXml(getTag('title')),
			link: getTag('link'),
			description: unescapeXml(getTag('description')),
			pubDate: getTag('pubDate'),
			image: item.match(/<enclosure url="([^"]+)"/)?.[1] ?? ''
		}
	})
}

// PixelTool is where all new blog writing happens now — this project's own
// /blog is a frozen snapshot. Rather than keep it up, the homepage and blog
// listing pull PixelTool's live RSS feed and link out to the originals.
export async function getPixeltoolPosts(limit = 6): Promise<PixeltoolPost[]> {
	try {
		const response = await fetch(FEED_URL, { next: { revalidate: 1800 } })
		if (!response.ok) return []

		const xml = await response.text()
		return parseItems(xml).slice(0, limit)
	} catch (error) {
		console.warn('Failed to fetch PixelTool RSS feed:', error)
		return []
	}
}
