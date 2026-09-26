'use client'

import Image from 'next/image'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'

type Props = { images: string[]; title: string; screenshotLabel: string }

export function ProjectGallery({ images, title, screenshotLabel }: Props) {
	return (
		<Carousel opts={{ loop: images.length > 1 }} className='w-full'>
			<CarouselContent>
				{images.map((src, index) => (
					<CarouselItem key={src}>
						<div className='overflow-hidden rounded-2xl border bg-card'>
							<div className='relative aspect-[16/10] w-full bg-muted/40'>
								<Image src={src} fill sizes='(max-width: 768px) 100vw, 80vw' alt={`${title} ${screenshotLabel} ${index + 1}`} className='object-cover object-top' />
							</div>
						</div>
					</CarouselItem>
				))}
			</CarouselContent>
			{images.length > 1 && <><CarouselPrevious className='left-4 cursor-pointer hover:bg-foreground hover:text-background' /><CarouselNext className='right-4 cursor-pointer hover:bg-foreground hover:text-background' /></>}
		</Carousel>
	)
}
