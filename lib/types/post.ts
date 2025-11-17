import { type Author } from './author'

export type Post = {
	slug: string
	title: string
	date: string
	coverImage: string
	author: Author
	excerpt: string
	ogImage: {
		url: string
	}
	content: string
	preview?: boolean
	published?: boolean
}

// Extended post type with computed fields for UI components
export type PostWithMetadata = Post & {
	id: string
	publishedAt: Date
	updatedAt: Date
	category: string
	readingTime: number
	locale: string
}

// Convert Post to PostWithMetadata for components that need extra fields
export function enrichPost(post: Post, locale: string = 'en'): PostWithMetadata {
	// Calculate reading time
	const wordsPerMinute = 200
	const wordCount = post.content.split(/\s+/).length
	const readingTime = Math.ceil(wordCount / wordsPerMinute)

	return {
		...post,
		id: post.slug, // Use slug as ID for file-based posts
		publishedAt: new Date(post.date),
		updatedAt: new Date(post.date),
		category: 'Development', // Default category
		readingTime,
		locale
	}
}
