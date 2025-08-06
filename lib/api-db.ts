import { getAllPublishedPosts, getPostBySlug as getDbPostBySlug } from './db/blog'
import type { BlogPost } from './types/database'
import type { Post } from './types/post'
import type { Author } from './types/author'

// Convert database BlogPost to legacy Post format
function convertDbPostToLegacy(dbPost: BlogPost): Post {
	const primaryAuthor = dbPost.authors?.[0]
	
	const author: Author = {
		name: primaryAuthor?.name || 'Unknown Author',
		picture: primaryAuthor?.picture || '/images/avatar.jpeg'
	}

	return {
		slug: dbPost.slug,
		title: dbPost.title,
		date: dbPost.published_at || dbPost.created_at,
		coverImage: dbPost.cover_image || '/images/avatar.jpeg',
		author,
		excerpt: dbPost.excerpt || '',
		ogImage: {
			url: dbPost.cover_image || '/images/avatar.jpeg'
		},
		content: dbPost.content,
		preview: false
	}
}

// Get all published posts
export async function getAllPosts(locale: string = 'en'): Promise<Post[]> {
	try {
		const dbPosts = await getAllPublishedPosts(locale)
		return dbPosts.map(convertDbPostToLegacy)
	} catch (error) {
		console.error('Error fetching posts from database:', error)
		// Fallback to empty array
		return []
	}
}

// Get post by slug
export async function getPostBySlug(slug: string, locale: string = 'en'): Promise<Post | null> {
	try {
		const dbPost = await getDbPostBySlug(slug, locale)
		if (!dbPost) {
			return null
		}
		return convertDbPostToLegacy(dbPost)
	} catch (error) {
		console.error('Error fetching post by slug from database:', error)
		return null
	}
}

// Legacy function for compatibility
export function getPostSlugs(): string[] {
	// This function is no longer used but kept for compatibility
	console.warn('getPostSlugs is deprecated when using database')
	return []
}