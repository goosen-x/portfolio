import { getAllPosts } from '@/lib/api-db'
import { PostPreview } from '@/components/blog/post-preview'
import Header from '@/components/blog/header'
import Alert from '@/components/blog/alert'
import { getTranslations } from 'next-intl/server'

type Props = {
	params: Promise<{
		locale: string
	}>
}

export default async function Blog(props: Props) {
	const params = await props.params
	const t = await getTranslations('blog')
	const posts = await getAllPosts(params.locale)

	return (
		<main>
			<Alert preview={false} />
			<Header />
			<div className="max-w-7xl mx-auto px-5">
				<section>
					<h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight md:pr-8 mb-16">
						{t('title')}
					</h1>
					{posts.length === 0 ? (
						<div className="text-center py-16">
							<p className="text-xl text-gray-600">No blog posts found. Please add some posts to the database.</p>
						</div>
					) : (
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
					)}
				</section>
			</div>
		</main>
	)
}