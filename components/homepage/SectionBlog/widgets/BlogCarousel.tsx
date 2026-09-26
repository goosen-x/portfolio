'use client'

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel'
import { BlogCard } from './BlogCard'
import type { PixeltoolPost } from '@/lib/blog/pixeltool-feed'
import Autoplay from 'embla-carousel-autoplay'

type Props = {
	posts: PixeltoolPost[]
	locale: string
}

export const BlogCarousel = ({ posts, locale }: Props) => {
	return (
		<Carousel
			opts={{
				align: 'start',
				loop: true,
			}}
			plugins={[
				Autoplay({
					delay: 5000,
				}),
			]}
			className="w-full"
		>
			<CarouselContent className="-ml-2 md:-ml-4">
				{posts.map((post) => (
					<CarouselItem key={post.link} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
						<BlogCard post={post} locale={locale} />
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious className="left-2 hidden md:flex" />
			<CarouselNext className="right-2 hidden md:flex" />
		</Carousel>
	)
}