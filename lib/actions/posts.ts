import { getAllPostsFromFiles } from '../api-file'
import type { PostWithMetadata } from '../types/post'
import { enrichPost } from '../types/post'

export async function getLatestPosts({ limit = 6, locale = 'en' }: { limit?: number; locale?: string }): Promise<PostWithMetadata[]> {
	try {
		const allPosts = getAllPostsFromFiles(locale)
		return allPosts.slice(0, limit).map(post => enrichPost(post, locale))
	} catch (error) {
		console.error('Error fetching latest posts:', error)
		return []
	}
}