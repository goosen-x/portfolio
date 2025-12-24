import { ComponentPropsWithoutRef } from 'react'
import { cn } from '@/lib/utils'
import { SectionTitle } from '@/components/global/SectionTitle'
import { getTranslations } from 'next-intl/server'
import { ConferenceTimeline, type ConferenceData } from './widgets/ConferenceTimeline'

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
			id: 'sberFrontendNight2025',
			images: sberFrontendNightImages
		},
		{
			id: 'moscowcss29',
			images: moscowcssImages
		}
	]

	const conferencesData: ConferenceData[] = conferences.map(conference => ({
		id: conference.id,
		event: t(`conferences.${conference.id}.event`),
		title: t(`conferences.${conference.id}.title`),
		date: t(`conferences.${conference.id}.date`),
		shortDate: t(`conferences.${conference.id}.shortDate`),
		location: t(`conferences.${conference.id}.location`),
		venue: t(`conferences.${conference.id}.venue`),
		description: t(`conferences.${conference.id}.description`),
		eventUrl: t(`conferences.${conference.id}.eventUrl`) || null,
		ticketsUrl: t(`conferences.${conference.id}.ticketsUrl`) || null,
		videoUrl: t(`conferences.${conference.id}.videoUrl`) || null,
		photosUrl: t(`conferences.${conference.id}.photosUrl`) || null,
		format: t(`conferences.${conference.id}.format`),
		status: t(`conferences.${conference.id}.status`) as 'completed' | 'upcoming',
		images: conference.images,
		buttons: {
			watchVideo: t('buttons.watchVideo'),
			viewPhotos: t('buttons.viewPhotos'),
			eventPage: t('buttons.eventPage'),
			tickets: t('buttons.tickets')
		}
	}))

	return (
		<section className={cn('py-12 sm:py-16 md:py-24', className)} {...rest}>
			<div className='mx-auto max-w-(--breakpoint-xl) px-3 sm:px-6 lg:px-8'>
				<SectionTitle
					className='mb-8 sm:mb-12'
					title={t('title')}
				/>
				<p className='text-center text-gray-600 dark:text-gray-400 md:text-lg mb-8 sm:mb-12 max-w-3xl mx-auto'>
					{t('description')}
				</p>

				<ConferenceTimeline conferences={conferencesData} />
			</div>
		</section>
	)
}
