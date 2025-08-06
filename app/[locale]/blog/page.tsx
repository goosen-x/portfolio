import { getAllPosts } from '@/lib/api'
import { PostPreview } from '@/components/blog/post-preview'
import Header from '@/components/blog/header'
import Alert from '@/components/blog/alert'
import { useTranslations } from 'next-intl'

export default function Blog() {
	const t = useTranslations('blog')
	const posts = getAllPosts()

	return (
		<main>
			<Alert preview={false} />
			<Header />
			<div className="max-w-7xl mx-auto px-5">
				<section>
					<h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight md:pr-8 mb-16">
						{t('title', 'Blog')}
					</h1>
					<div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
						{posts.map((post) => (
							<PostPreview
								key={post.slug}
								title={post.title}
								coverImage={post.coverImage}
								date={post.date}
								author={post.author}
								slug={post.slug}
								excerpt={post.excerpt}
							/>
						))}
					</div>
				</section>
			</div>
		</main>
	)
}