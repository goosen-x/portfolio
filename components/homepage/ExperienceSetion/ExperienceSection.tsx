import { ComponentPropsWithoutRef } from 'react'
import { cn } from '@/lib/utils'

import { SectionTitle } from '@/components/global/SectionTitle'
import { experienceData } from './constants'
import { Timeline } from '@/components/ui/timeline'
import { ExperienceItem } from './widgets/experienceItem'

export const ExperienceSection = ({
	className,
	...rest
}: ComponentPropsWithoutRef<'section'>) => {
	const timelineData = experienceData.map(item => ({
		title: item.title,
		content: <ExperienceItem itemData={item} />
	}))

	return (
		<section className={cn(className)} {...rest}>
			<SectionTitle className='col-span-12' title='Experience' />
			<Timeline data={timelineData} />
		</section>
	)
}
