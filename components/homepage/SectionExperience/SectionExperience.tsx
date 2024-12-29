import { ComponentPropsWithoutRef } from 'react'
import { cn } from '@/lib/utils'

import { SectionTitle } from '@/components/global/SectionTitle'
import { Timeline } from '@/components/ui/timeline'
import { ExperienceItem } from './widgets/experienceItem'
import { useTranslations } from 'next-intl'

export type ExperienceData = {
	title: string
	job: string
	company: string
	city: string
	companyUrl: string | null
	description: string
	images: string[]
}

export const SectionExperience = ({
	className,
	...rest
}: ComponentPropsWithoutRef<'section'>) => {
	const t = useTranslations('SectionExperience')

	const companies = [
		{
			name: 'mba',
			images: ['/images/mba-experience-3.png', '/images/mba-experience-2.png']
		},
		{
			name: 'dobrostock',
			images: ['/images/dobrostok.png', '/images/dobrostok-2.png']
		},
		{ name: 'inspro', images: ['/images/inspro.png'] },
		{ name: 'mbloq', images: ['/images/mbloq.png'] }
	]

	const timelineData = companies.map(company => {
		return {
			title: t(`companies.${company.name}.title`),
			content: (
				<ExperienceItem
					itemData={{
						title: t(`companies.${company.name}.title`),
						job: t(`companies.${company.name}.job`),
						company: t(`companies.${company.name}.company`),
						city: t(`companies.${company.name}.city`),
						companyUrl:
							t(`companies.${company.name}.companyUrl`) === ''
								? null
								: t(`companies.${company.name}.companyUrl`),
						description: t(`companies.${company.name}.description`),
						images: company.images
					}}
				/>
			)
		}
	})

	return (
		<section className={cn(className)} {...rest}>
			<SectionTitle className='col-span-12' title={t('title')} />
			<Timeline data={timelineData} />
		</section>
	)
}
