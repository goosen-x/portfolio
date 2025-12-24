'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, MapPin, Building2, ExternalLink, Video, Images, CheckCircle2, Clock, Mic2 } from 'lucide-react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious
} from '@/components/ui/carousel'
import {
	TimelineSteps,
	TimelineStepsItem,
	TimelineStepsConnector,
	TimelineStepsHeader,
	TimelineStepsIcon,
	TimelineStepsContent,
	TimelineStepsTitle,
	TimelineStepsDescription
} from '@/components/ui/timeline-steps'
import Autoplay from 'embla-carousel-autoplay'
import { cn } from '@/lib/utils'

export type ConferenceData = {
	id: string
	event: string
	title: string
	date: string
	shortDate: string
	location: string
	venue: string
	description: string
	eventUrl: string | null
	ticketsUrl: string | null
	videoUrl: string | null
	photosUrl: string | null
	format: string
	status: 'completed' | 'upcoming'
	images: string[]
	buttons: {
		watchVideo: string
		viewPhotos: string
		eventPage: string
		tickets: string
	}
}

type Props = {
	conferences: ConferenceData[]
}

export const ConferenceTimeline = ({ conferences }: Props) => {
	const t = useTranslations('SectionSpeaking')
	const [activeIndex, setActiveIndex] = useState(0)
	const activeConference = conferences[activeIndex]

	return (
		<div className="grid lg:grid-cols-[280px_1fr] xl:grid-cols-[320px_1fr] gap-6 lg:gap-8">
			{/* Timeline */}
			<div className="order-2 lg:order-1">
				<TimelineSteps orientation="vertical" className="relative">
					{conferences.map((conference, index) => {
						const isActive = activeIndex === index
						const isCompleted = conference.status === 'completed'
						const status = isActive ? 'current' : isCompleted ? 'completed' : 'upcoming'

						return (
							<TimelineStepsItem
								key={conference.id}
								status={status}
								className="cursor-pointer"
								onClick={() => setActiveIndex(index)}
							>
								{index < conferences.length - 1 && (
									<TimelineStepsConnector
										status={isCompleted ? 'completed' : 'default'}
									/>
								)}

								<TimelineStepsHeader>
									<TimelineStepsIcon
										variant={isActive ? 'primary' : isCompleted ? 'outline' : 'default'}
										size="default"
										className={cn(
											"transition-all duration-300",
											isActive && "ring-4 ring-primary/20"
										)}
									>
										{isCompleted ? (
											<CheckCircle2 className="w-4 h-4" />
										) : (
											<Mic2 className="w-4 h-4" />
										)}
									</TimelineStepsIcon>

									<div className="flex flex-col">
										<TimelineStepsTitle
											className={cn(
												"transition-colors text-balance",
												isActive ? "text-primary" : "text-foreground"
											)}
										>
											{conference.event}
										</TimelineStepsTitle>
										<span className="text-xs text-muted-foreground mt-0.5">
											{conference.shortDate}
										</span>
									</div>
								</TimelineStepsHeader>

								<TimelineStepsContent className="hidden lg:block">
									<TimelineStepsDescription className="line-clamp-2 text-pretty">
										{conference.title}
									</TimelineStepsDescription>
								</TimelineStepsContent>
							</TimelineStepsItem>
						)
					})}
				</TimelineSteps>
			</div>

			{/* Conference Detail Card */}
			<div className="order-1 lg:order-2">
				<AnimatePresence mode="wait">
					<motion.div
						key={activeConference.id}
						initial={{ opacity: 0, x: 20 }}
						animate={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0, x: -20 }}
						transition={{ duration: 0.3 }}
						className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-lg"
					>
						{/* Image Carousel Section */}
						{activeConference.images && activeConference.images.length > 0 && (
							<div className="relative h-56 sm:h-64 md:h-80 overflow-hidden bg-gray-900">
								<Carousel
									opts={{ align: 'start', loop: true }}
									plugins={[Autoplay({ delay: 4000 })]}
									className="w-full h-full"
								>
									<CarouselContent className="h-full">
										{activeConference.images.map((image, index) => (
											<CarouselItem key={index} className="h-56 sm:h-64 md:h-80">
												<div className="relative h-full w-full">
													<Image
														src={image}
														alt={`${activeConference.event} - Photo ${index + 1}`}
														fill
														className="object-contain"
														priority={index === 0}
														sizes="(max-width: 1024px) 100vw, 60vw"
													/>
													<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
												</div>
											</CarouselItem>
										))}
									</CarouselContent>
									{activeConference.images.length > 1 && (
										<>
											<CarouselPrevious className="left-2 bg-background/80 backdrop-blur-sm" />
											<CarouselNext className="right-2 bg-background/80 backdrop-blur-sm" />
										</>
									)}
								</Carousel>

								{/* Badges overlay */}
								<div className="absolute top-3 left-3 flex flex-wrap gap-2">
									<span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-blue-600/90 backdrop-blur-sm text-white">
										{activeConference.format}
									</span>
									{activeConference.status === 'completed' ? (
										<span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full bg-green-600/90 backdrop-blur-sm text-white">
											<CheckCircle2 className="w-3 h-3" />
											{t(`status.${activeConference.status}`)}
										</span>
									) : (
										<span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full bg-amber-600/90 backdrop-blur-sm text-white">
											<Clock className="w-3 h-3" />
											{t(`status.${activeConference.status}`)}
										</span>
									)}
								</div>
							</div>
						)}

						{/* Content Section */}
						<div className="p-5 md:p-6">
							{/* Title */}
							<h3 className="text-xl md:text-2xl font-bold mb-2 text-foreground">
								{activeConference.event}
							</h3>

							<h4 className="text-base md:text-lg font-semibold mb-3 text-primary">
								{activeConference.title}
							</h4>

							{/* Description */}
							<p className="text-sm text-muted-foreground mb-5 leading-relaxed">
								{activeConference.description}
							</p>

							{/* Meta info */}
							<div className="flex flex-wrap gap-x-6 gap-y-2 mb-6 text-sm text-muted-foreground">
								<div className="flex items-center gap-2">
									<Calendar className="w-4 h-4 flex-shrink-0 text-primary/70" />
									<span>{activeConference.date}</span>
								</div>
								<div className="flex items-center gap-2">
									<MapPin className="w-4 h-4 flex-shrink-0 text-primary/70" />
									<span>{activeConference.location}</span>
								</div>
								<div className="flex items-center gap-2">
									<Building2 className="w-4 h-4 flex-shrink-0 text-primary/70" />
									<span>{activeConference.venue}</span>
								</div>
							</div>

							{/* Action buttons */}
							<div className="flex flex-wrap gap-2">
								{activeConference.videoUrl && (
									<a
										href={activeConference.videoUrl}
										target="_blank"
										rel="noopener noreferrer"
										className="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm rounded-lg bg-blue-600 hover:bg-blue-700 !text-white font-medium transition-colors duration-200"
									>
										<Video className="w-4 h-4" />
										{activeConference.buttons.watchVideo}
									</a>
								)}

								{activeConference.photosUrl && (
									<a
										href={activeConference.photosUrl}
										target="_blank"
										rel="noopener noreferrer"
										className="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm rounded-lg bg-purple-600 hover:bg-purple-700 !text-white font-medium transition-colors duration-200"
									>
										<Images className="w-4 h-4" />
										{activeConference.buttons.viewPhotos}
									</a>
								)}

								{activeConference.eventUrl && (
									<a
										href={activeConference.eventUrl}
										target="_blank"
										rel="noopener noreferrer"
										className="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm rounded-lg border border-border hover:bg-accent text-foreground font-medium transition-colors duration-200"
									>
										<ExternalLink className="w-4 h-4" />
										{activeConference.buttons.eventPage}
									</a>
								)}

								{activeConference.ticketsUrl && activeConference.status !== 'completed' && (
									<a
										href={activeConference.ticketsUrl}
										target="_blank"
										rel="noopener noreferrer"
										className="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm rounded-lg border border-border hover:bg-accent text-foreground font-medium transition-colors duration-200"
									>
										<ExternalLink className="w-4 h-4" />
										{activeConference.buttons.tickets}
									</a>
								)}
							</div>
						</div>
					</motion.div>
				</AnimatePresence>
			</div>
		</div>
	)
}
