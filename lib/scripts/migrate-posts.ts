import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { createBlogPost, getAllAuthors } from '../db/blog'
import type { CreateBlogPostData } from '../types/database'

const postsDirectory = path.join(process.cwd(), '_posts')

async function migratePosts() {
	console.log('Starting migration of markdown posts to database...')

	try {
		// Get all authors
		const authors = await getAllAuthors()
		const defaultAuthor = authors.find(a => a.name === 'Dmitry Borisenko')
		
		if (!defaultAuthor) {
			console.error('Default author not found. Please run database schema first.')
			return
		}

		// Get all markdown files
		const fileNames = fs.readdirSync(postsDirectory)
		const markdownFiles = fileNames.filter(name => name.endsWith('.md'))

		console.log(`Found ${markdownFiles.length} markdown files to migrate`)

		for (const fileName of markdownFiles) {
			const slug = fileName.replace(/\.md$/, '')
			const fullPath = path.join(postsDirectory, fileName)
			const fileContents = fs.readFileSync(fullPath, 'utf8')
			const { data, content } = matter(fileContents)

			// Create blog post data
			const postData: CreateBlogPostData = {
				slug,
				title: data.title,
				excerpt: data.excerpt,
				content,
				cover_image: data.coverImage || null,
				published: true,
				locale: 'en',
				author_ids: [defaultAuthor.id]
			}

			console.log(`Migrating: ${postData.title}`)

			try {
				const result = await createBlogPost(postData)
				if (result) {
					console.log(`✅ Successfully migrated: ${postData.title}`)
				} else {
					console.log(`❌ Failed to migrate: ${postData.title}`)
				}
			} catch (error) {
				console.error(`Error migrating ${postData.title}:`, error)
			}
		}

		console.log('Migration completed!')
	} catch (error) {
		console.error('Migration failed:', error)
	}
}

// Export for use in other scripts
export { migratePosts }

// Run if called directly
if (require.main === module) {
	migratePosts()
}