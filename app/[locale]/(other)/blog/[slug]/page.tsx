import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getAllPosts, getPostBySlug } from '@/lib/api-db'
import markdownToHtml from '@/lib/helpers/markdownToHtml'
import Alert from '@/components/blog/alert'
import { PostBodyWithHighlight } from '@/components/blog/post-body-with-highlight'
import { PostHeader } from '@/components/blog/post-header'

export default async function Post(props: Params) {
	const params = await props.params
	const post = await getPostBySlug(params.slug, params.locale)

	if (!post) {
		return notFound()
	}

	const content = await markdownToHtml(post.content || '')

	return (
		<main>
			{/* <Alert preview={post.preview} /> */}
			<article className='mb-32'>
				<PostHeader
					title={post.title}
					coverImage={post.coverImage}
					date={post.date}
					author={post.author}
					slug={post.slug}
				/>
				<PostBodyWithHighlight content={content} />
			</article>
		</main>
	)
}

type Params = {
	params: Promise<{
		locale: string
		slug: string
	}>
}

export async function generateMetadata(props: Params): Promise<Metadata> {
	const params = await props.params
	const post = await getPostBySlug(params.slug, params.locale)

	if (!post) {
		return {
			title: 'Post Not Found | Dmitry Borisenko Blog',
			description: 'The requested blog post could not be found.'
		}
	}

	const title = `${post.title} | Dmitry Borisenko Blog`

	return {
		title,
		description: post.excerpt,
		openGraph: {
			title,
			description: post.excerpt,
			images: [post.ogImage.url]
		}
	}
}

export async function generateStaticParams() {
	// For now, we'll generate params at runtime
	// You could cache this or make it more efficient based on your needs
	return []
}
