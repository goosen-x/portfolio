'use client'

import { ConferenceData } from '../SectionSpeaking'
import {
	Calendar,
	MapPin,
	Building2,
	ExternalLink,
	Video,
	Images,
	CheckCircle2,
	Clock
} from 'lucide-react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'

type Props = {
	data: ConferenceData & { images?: string[] }
}

export const ConferenceItem = ({ data }: Props) => {
	const t = useTranslations('SectionSpeaking')

	return (
		<div className='group relative overflow-hidden rounded-2xl dark:border border-zinc-700 bg-card shadow-lg hover:shadow-xl transition-all duration-300'>
			<div className='grid xl:grid-cols-2 gap-4 md:gap-6'>
				{/* Image Carousel Section */}
				{data.images && data.images.length > 0 && (
					<div className='relative h-full overflow-hidden'>
						<Carousel
							opts={{
								align: 'start',
								loop: true
							}}
							plugins={[
								Autoplay({
									delay: 4000
								})
							]}
							className='w-full h-full'
						>
							<CarouselContent className='h-64 md:h-96 lg:h-[500px]'>
								{data.images.map((image, index) => (
									<CarouselItem
										key={index}
										className='h-64 md:h-96 lg:h-[500px]'
									>
										<div className='relative h-64 md:h-96 lg:h-[500px] w-full bg-gray-900'>
											<Image
												src={image}
												alt={`${data.event} - Photo ${index + 1}`}
												fill
												className='object-contain'
												priority={index === 0}
												sizes='(max-width: 768px) 100vw, 50vw'
											/>
											<div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none' />
										</div>
									</CarouselItem>
								))}
							</CarouselContent>
							{data.images.length > 1 && (
								<>
									<CarouselPrevious className='left-2 bg-background/80 backdrop-blur-sm' />
									<CarouselNext className='right-2 bg-background/80 backdrop-blur-sm' />
								</>
							)}
						</Carousel>
					</div>
				)}

				{/* Content Section */}
				<div className='p-4 sm:p-5 md:p-6 flex flex-col justify-between'>
					<div>
						<div className='flex flex-wrap gap-2 mb-3'>
							<div className='inline-block px-2.5 py-0.5 text-xs font-semibold rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200'>
								{data.format}
							</div>
							{data.status === 'completed' ? (
								<div className='inline-flex items-center gap-1 px-2.5 py-0.5 text-xs font-semibold rounded-full bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'>
									<CheckCircle2 className='w-3 h-3' />
									{t(`status.${data.status}`)}
								</div>
							) : (
								<div className='inline-flex items-center gap-1 px-2.5 py-0.5 text-xs font-semibold rounded-full bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-200'>
									<Clock className='w-3 h-3' />
									{t(`status.${data.status}`)}
								</div>
							)}
						</div>

						<h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-2 text-foreground'>
							{data.event}
						</h3>

						<h4 className='text-base sm:text-lg font-semibold mb-2 text-primary'>
							{data.title}
						</h4>

						<p className='text-sm text-muted-foreground mb-4 leading-relaxed'>
							{data.description}
						</p>

						<div className='space-y-1.5 mb-4'>
							<div className='flex items-center gap-2 text-xs text-muted-foreground'>
								<Calendar className='w-3.5 h-3.5 flex-shrink-0' />
								<span>{data.date}</span>
							</div>

							<div className='flex items-center gap-2 text-xs text-muted-foreground'>
								<MapPin className='w-3.5 h-3.5 flex-shrink-0' />
								<span>{data.location}</span>
							</div>

							<div className='flex items-center gap-2 text-xs text-muted-foreground'>
								<Building2 className='w-3.5 h-3.5 flex-shrink-0' />
								<span>{data.venue}</span>
							</div>
						</div>
					</div>

					<div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
						{data.videoUrl && (
							<a
								href={data.videoUrl}
								target='_blank'
								rel='noopener noreferrer'
								className='inline-flex items-center gap-1.5 px-3 py-1.5 text-sm rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors duration-200'
							>
								<Video className='w-3.5 h-3.5' />
								{data.buttons.watchVideo}
							</a>
						)}

						{data.photosUrl && (
							<a
								href={data.photosUrl}
								target='_blank'
								rel='noopener noreferrer'
								className='inline-flex items-center gap-1.5 px-3 py-1.5 text-sm rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-medium transition-colors duration-200'
							>
								<Images className='w-3.5 h-3.5' />
								{data.buttons.viewPhotos}
							</a>
						)}

						{data.eventUrl && (
							<a
								href={data.eventUrl}
								target='_blank'
								rel='noopener noreferrer'
								className='inline-flex items-center gap-1.5 px-3 py-1.5 text-sm rounded-lg border border-border hover:bg-accent text-foreground font-medium transition-colors duration-200'
							>
								<ExternalLink className='w-3.5 h-3.5' />
								{data.buttons.eventPage}
							</a>
						)}

						{data.ticketsUrl &&
							(data.status === 'completed' ? (
								<button
									disabled
									className='inline-flex items-center gap-1.5 px-3 py-1.5 text-sm rounded-lg border border-border bg-muted text-muted-foreground font-medium cursor-not-allowed opacity-50'
								>
									<ExternalLink className='w-3.5 h-3.5' />
									{data.buttons.tickets}
								</button>
							) : (
								<a
									href={data.ticketsUrl}
									target='_blank'
									rel='noopener noreferrer'
									className='inline-flex items-center gap-1.5 px-3 py-1.5 text-sm rounded-lg border border-border hover:bg-accent text-foreground font-medium transition-colors duration-200'
								>
									<ExternalLink className='w-3.5 h-3.5' />
									{data.buttons.tickets}
								</a>
							))}
					</div>
				</div>
			</div>
		</div>
	)
}
