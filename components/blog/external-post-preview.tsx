import Link from 'next/link'
import { FeedImage } from './feed-image'
import type { PixeltoolPost } from '@/lib/blog/pixeltool-feed'
import { formatDate } from '@/lib/utils'

type Props = {
	post: PixeltoolPost
	locale: string
}

export function ExternalPostPreview({ post, locale }: Props) {
	return (
		<article>
			<div className='mb-5'>
				<Link href={post.link} target='_blank' rel='noopener noreferrer' className='group block'>
					<div className='relative aspect-[16/9] overflow-hidden rounded-lg'>
						<FeedImage
							src={post.image}
							title={post.title}
							sizes='(max-width: 768px) 100vw, 50vw'
						/>
					</div>
				</Link>
			</div>
			<div className='mb-4 text-sm text-gray-500'>
				{formatDate(post.pubDate, locale)}
			</div>
			<Link href={post.link} target='_blank' rel='noopener noreferrer' className='hover:underline'>
				<h2 className='text-2xl font-bold mb-3'>{post.title}</h2>
			</Link>
			<p className='text-lg leading-relaxed text-muted-foreground'>{post.description}</p>
		</article>
	)
}
