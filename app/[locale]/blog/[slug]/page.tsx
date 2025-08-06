import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getAllPosts, getPostBySlug } from '@/lib/api'
import markdownToHtml from '@/lib/helpers/markdownToHtml'
import Alert from '@/components/blog/alert'
import Header from '@/components/blog/header'
import { PostBody } from '@/components/blog/post-body'
import { PostHeader } from '@/components/blog/post-header'

export default async function Post(props: Params) {
	const params = await props.params
	const post = getPostBySlug(params.slug)

	if (!post) {
		return notFound()
	}

	const content = await markdownToHtml(post.content || '')

	return (
		<main>
			<Alert preview={post.preview} />
			<Header />
			<article className='mb-32'>
				<PostHeader
					title={post.title}
					coverImage={post.coverImage}
					date={post.date}
					author={post.author}
					slug={post.slug}
				/>
				<PostBody content={content} />
			</article>
		</main>
	)
}

type Params = {
	params: Promise<{
		slug: string
	}>
}

export async function generateMetadata(props: Params): Promise<Metadata> {
	const params = await props.params
	const post = getPostBySlug(params.slug)

	if (!post) {
		return notFound()
	}

	const title = `${post.title} | Next.js Blog Example`

	return {
		title,
		openGraph: {
			title,
			images: [post.ogImage.url]
		}
	}
}

export async function generateStaticParams() {
	const posts = getAllPosts()

	return posts.map(post => ({
		slug: post.slug
	}))
}
