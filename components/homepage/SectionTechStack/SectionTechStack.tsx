import { ComponentPropsWithoutRef } from 'react'
import { cn } from '@/lib/utils'

import { Block } from '@/components/ui/block'
import { TechStackData } from './constants'
import { Badge } from '@/components/ui/badge'
import { SectionTitle } from '@/components/global/SectionTitle'
import { useTranslations } from 'next-intl'

export const SectionTechStack = ({
	className,
	...rest
}: ComponentPropsWithoutRef<'section'>) => {
	const t = useTranslations('SectionTechStack')
	return (
		<section
			className={cn('grid grid-cols-12 gap-4 mb-24', className)}
			{...rest}
		>
			<SectionTitle className='col-span-12' title={t('title')} />
			{TechStackData.map(item => (
				<Block
					className={cn('col-span-12 md:col-span-4 text-foreground')}
					key={item.name}
				>
					<p className='text-3xl mb-4'>{item.name}</p>
					<ul className='flex flex-wrap gap-2'>
						{item.techs.map(tech => (
							<li className='flex items-center gap-2' key={tech.name}>
								<Badge>
									{tech.icon}
									<span className='ml-2'>{tech.name}</span>
								</Badge>
							</li>
						))}
					</ul>
				</Block>
			))}
		</section>
	)
}
