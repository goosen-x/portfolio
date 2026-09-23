import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import type { PixeltoolPost } from '@/lib/blog/pixeltool-feed'
import { formatDate } from '@/lib/utils'

type Props = {
	post: PixeltoolPost
	locale: string
}

export const BlogCard = ({ post, locale }: Props) => {
	const formattedDate = formatDate(post.pubDate, locale)

	return (
		<Link href={post.link} target='_blank' rel='noopener noreferrer'>
			<Card className="h-full hover:shadow-lg transition-shadow duration-300 overflow-hidden group cursor-pointer">
				<div className="relative h-48">
					<Image
						src={post.image}
						alt={post.title}
						fill
						sizes="(max-width: 768px) 100vw, 33vw"
						className="object-cover transition-transform duration-300 group-hover:scale-105"
					/>
				</div>
				<CardHeader className="space-y-2">
					<time className="text-xs text-muted-foreground">{formattedDate}</time>
					<h3 className="text-lg font-semibold line-clamp-2 group-hover:text-accent transition-colors">
						{post.title}
					</h3>
				</CardHeader>
				<CardContent>
					<p className="text-sm text-muted-foreground line-clamp-3">
						{post.description}
					</p>
				</CardContent>
			</Card>
		</Link>
	)
}
