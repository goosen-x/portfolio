import { ComponentPropsWithoutRef } from 'react'
import { cn } from '@/lib/utils'
import { SectionTitle } from '@/components/global/SectionTitle'
import { getTranslations } from 'next-intl/server'
import { ConferenceItem } from './widgets/ConferenceItem'

export type ConferenceData = {
	event: string
	title: string
	date: string
	location: string
	venue: string
	description: string
	eventUrl: string | null
	ticketsUrl: string | null
	videoUrl: string | null
	photosUrl: string | null
	format: string
	status: 'completed' | 'upcoming'
	buttons: {
		watchVideo: string
		viewPhotos: string
		eventPage: string
		tickets: string
	}
}

export const SectionSpeaking = async ({
	className,
	...rest
}: ComponentPropsWithoutRef<'section'>) => {
	const t = await getTranslations('SectionSpeaking')

	// Conference images arrays
	const moscowcssImages = [
		'/images/conference/photo-01.jpg',
		'/images/conference/photo-07.jpg',
		'/images/conference/photo-08.jpg',
		'/images/conference/photo-09.jpg',
		'/images/conference/photo-10.jpg',
		'/images/conference/photo-14.jpg',
		'/images/conference/photo-15.jpg'
	]

	const sberFrontendNightImages = [
		'/images/sber-frontend-night/0003-Sber-FN25_20dec2025_Buzin_resized.jpg',
		'/images/sber-frontend-night/0008-Sber-FN25_20dec2025_Buzin_resized.jpg',
		'/images/sber-frontend-night/0052-Sber-FN25_20dec2025_Buzin_resized.jpg',
		'/images/sber-frontend-night/0914-Sber-FN25_20dec2025_Buzin_resized.jpg',
		'/images/sber-frontend-night/1800-Sber-FN25_20dec2025_Buzin_resized.jpg',
		'/images/sber-frontend-night/1806-Sber-FN25_20dec2025_Buzin_resized.jpg',
		'/images/sber-frontend-night/1834-Sber-FN25_20dec2025_Buzin_resized.jpg',
		'/images/sber-frontend-night/1873-Sber-FN25_20dec2025_Buzin_resized.jpg',
		'/images/sber-frontend-night/1879-Sber-FN25_20dec2025_Buzin_resized.jpg',
		'/images/sber-frontend-night/1883-Sber-FN25_20dec2025_Buzin_resized.jpg',
		'/images/sber-frontend-night/1906-Sber-FN25_20dec2025_Buzin_resized.jpg',
		'/images/sber-frontend-night/1931-Sber-FN25_20dec2025_Buzin_resized.jpg',
		'/images/sber-frontend-night/1947-Sber-FN25_20dec2025_Buzin_resized.jpg',
		'/images/sber-frontend-night/1950-Sber-FN25_20dec2025_Buzin_resized.jpg',
		'/images/sber-frontend-night/1952-Sber-FN25_20dec2025_Buzin_resized.jpg'
	]

	const conferences = [
		{
			name: 'sberFrontendNight2025',
			images: sberFrontendNightImages
		},
		{
			name: 'moscowcss29',
			images: moscowcssImages
		}
	]

	const conferencesData = conferences.map(conference => {
		return {
			event: t(`conferences.${conference.name}.event`),
			title: t(`conferences.${conference.name}.title`),
			date: t(`conferences.${conference.name}.date`),
			location: t(`conferences.${conference.name}.location`),
			venue: t(`conferences.${conference.name}.venue`),
			description: t(`conferences.${conference.name}.description`),
			eventUrl:
				t(`conferences.${conference.name}.eventUrl`) === ''
					? null
					: t(`conferences.${conference.name}.eventUrl`),
			ticketsUrl:
				t(`conferences.${conference.name}.ticketsUrl`) === ''
					? null
					: t(`conferences.${conference.name}.ticketsUrl`),
			videoUrl:
				t(`conferences.${conference.name}.videoUrl`) === ''
					? null
					: t(`conferences.${conference.name}.videoUrl`),
			photosUrl:
				t(`conferences.${conference.name}.photosUrl`) === ''
					? null
					: t(`conferences.${conference.name}.photosUrl`),
			format: t(`conferences.${conference.name}.format`),
			status: t(`conferences.${conference.name}.status`) as
				| 'completed'
				| 'upcoming',
			buttons: {
				watchVideo: t('buttons.watchVideo'),
				viewPhotos: t('buttons.viewPhotos'),
				eventPage: t('buttons.eventPage'),
				tickets: t('buttons.tickets')
			},
			images: conference.images
		}
	})

	return (
		<section className={cn('py-12 sm:py-16 md:py-24', className)} {...rest}>
			<div className='mx-auto max-w-(--breakpoint-xl)'>
				<SectionTitle
					className='mb-8 sm:mb-12 px-3 sm:px-6 lg:px-8'
					title={t('title')}
				/>
				<p className='text-center text-gray-600 dark:text-gray-400 md:text-lg mb-8 sm:mb-12 md:mb-16 max-w-3xl mx-auto px-3 sm:px-6 lg:px-8'>
					{t('description')}
				</p>

				<div className='grid gap-8 md:grid-cols-1 lg:grid-cols-1'>
					{conferencesData.map((conference, index) => (
						<ConferenceItem key={index} data={conference} />
					))}
				</div>
			</div>
		</section>
	)
}
