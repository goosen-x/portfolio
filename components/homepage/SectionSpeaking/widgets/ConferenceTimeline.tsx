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
			<div>
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
			<div>
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
							<div className="relative h-56 sm:h-64 md:h-80">
								<Carousel
									opts={{ align: 'center', loop: true }}
									plugins={[Autoplay({ delay: 4000 })]}
									className="w-full h-full"
								>
									<CarouselContent className="h-full">
										{activeConference.images.map((image, index) => (
											<CarouselItem key={index} className="basis-auto px-1">
												<Image
													src={image}
													alt={`${activeConference.event} - Photo ${index + 1}`}
													width={0}
													height={320}
													sizes="100vw"
													className="h-56 sm:h-64 md:h-80 w-auto"
													priority={index === 0}
												/>
											</CarouselItem>
										))}
									</CarouselContent>
									{activeConference.images.length > 1 && (
										<>
											<CarouselPrevious className="left-4 bg-background/80 backdrop-blur-sm z-20" />
											<CarouselNext className="right-4 bg-background/80 backdrop-blur-sm z-20" />
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
							{/* Header Grid */}
							<div className="grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-4 mb-5">
								{/* Left: Title */}
								<div>
									<h3 className="text-xl md:text-2xl font-bold mb-2 text-foreground text-balance">
										{activeConference.event}
									</h3>
									<h4 className="text-base md:text-lg font-semibold text-primary">
										{activeConference.title}
									</h4>
								</div>

								{/* Right: Meta info */}
								<div className="flex flex-col gap-1.5 text-sm text-muted-foreground sm:text-right">
									<div className="flex items-center gap-2 sm:flex-row-reverse">
										<Calendar className="w-4 h-4 flex-shrink-0 text-primary/70" />
										<span>{activeConference.date}</span>
									</div>
									<div className="flex items-center gap-2 sm:flex-row-reverse">
										<MapPin className="w-4 h-4 flex-shrink-0 text-primary/70" />
										<span>{activeConference.location}</span>
									</div>
									<div className="flex items-center gap-2 sm:flex-row-reverse">
										<Building2 className="w-4 h-4 flex-shrink-0 text-primary/70" />
										<span>{activeConference.venue}</span>
									</div>
								</div>
							</div>

							{/* Description */}
							<p className="text-sm text-muted-foreground mb-5 leading-relaxed">
								{activeConference.description}
							</p>

							{/* Action buttons */}
							<div className="flex flex-wrap gap-3">
								{activeConference.videoUrl && (
									<a
										href={activeConference.videoUrl}
										target="_blank"
										rel="noopener noreferrer"
										className="group inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
									>
										<span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
											<Video className="w-4 h-4 text-primary" />
										</span>
										{activeConference.buttons.watchVideo}
									</a>
								)}

								{activeConference.photosUrl && (
									<a
										href={activeConference.photosUrl}
										target="_blank"
										rel="noopener noreferrer"
										className="group inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
									>
										<span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
											<Images className="w-4 h-4 text-primary" />
										</span>
										{activeConference.buttons.viewPhotos}
									</a>
								)}

								{activeConference.eventUrl && (
									<a
										href={activeConference.eventUrl}
										target="_blank"
										rel="noopener noreferrer"
										className="group inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
									>
										<span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
											<ExternalLink className="w-4 h-4 text-primary" />
										</span>
										{activeConference.buttons.eventPage}
									</a>
								)}

								{activeConference.ticketsUrl && activeConference.status !== 'completed' && (
									<a
										href={activeConference.ticketsUrl}
										target="_blank"
										rel="noopener noreferrer"
										className="group inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
									>
										<span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
											<ExternalLink className="w-4 h-4 text-primary" />
										</span>
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
