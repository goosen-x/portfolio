import { Post } from '@/lib/types/post'
import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const postsDirectory = join(process.cwd(), '_posts')

export function getPostSlugs() {
  try {
    return fs.readdirSync(postsDirectory)
  } catch {
    return []
  }
}

export function getPostBySlugFromFile(slug: string): Post {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  return {
    slug: realSlug,
    title: data.title || realSlug,
    date: data.date || new Date().toISOString(),
    coverImage: data.coverImage || '/images/avatar.jpeg',
    author: data.author || {
      name: 'Dmitry Borisenko',
      picture: '/images/avatar.jpeg'
    },
    excerpt: data.excerpt || '',
    ogImage: data.ogImage || {
      url: data.coverImage || '/images/avatar.jpeg'
    },
    content,
    preview: data.preview || false
  }
}

export function getAllPostsFromFiles(): Post[] {
  const slugs = getPostSlugs()
  const posts = slugs
    .filter(slug => slug.endsWith('.md'))
    .map((slug) => getPostBySlugFromFile(slug))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  return posts
}