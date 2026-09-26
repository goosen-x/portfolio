import { ComponentPropsWithoutRef } from 'react'
import { cn } from '@/lib/utils'

import { SectionTitle } from '@/components/global/SectionTitle'
import { ProjectsBento } from './widgets/ProjectsBento'
import { getLocale, getTranslations } from 'next-intl/server'
import Link from 'next/link'

export const SectionProjects = async ({
	className,
	...rest
}: ComponentPropsWithoutRef<'section'>) => {
	const [t, page, locale] = await Promise.all([getTranslations('SectionProjects'), getTranslations('ProjectPages'), getLocale()])

	return (
		<section
			className={cn('grid grid-cols-12 gap-x-6 gap-y-10 mb-24', className)}
			{...rest}
		>
			<div className='col-span-12 flex flex-wrap items-end justify-between gap-4'>
				<SectionTitle title={t('title')} />
				<Link href={`/${locale}/projects`} className='cursor-pointer text-sm text-primary hover:underline'>{page('all')} →</Link>
			</div>
			<ProjectsBento locale={locale} className='col-span-12' />
		</section>
	)
}
