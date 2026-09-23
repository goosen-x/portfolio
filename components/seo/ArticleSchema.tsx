import { SITE_URL } from '@/lib/constants/site'
import { Post } from '@/lib/types/post'

type Props = {
	post: Post
	locale: string
}

export function ArticleSchema({ post, locale }: Props) {
	const url = `${SITE_URL}/${locale}/blog/${post.slug}`
	const image = post.ogImage.url.startsWith('http')
		? post.ogImage.url
		: `${SITE_URL}${post.ogImage.url}`

	const schema = {
		'@context': 'https://schema.org',
		'@type': 'Article',
		headline: post.title,
		description: post.excerpt,
		image,
		datePublished: post.date,
		dateModified: post.date,
		author: {
			'@type': 'Person',
			name: post.author.name
		},
		mainEntityOfPage: {
			'@type': 'WebPage',
			'@id': url
		}
	}

	return (
		<script
			type='application/ld+json'
			dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
		/>
	)
}
