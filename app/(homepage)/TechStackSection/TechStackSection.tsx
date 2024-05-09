'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid'
import { items } from './constants'

export const TechStackSection = () => {
	return (
		<BentoGrid className='max-w-4xl mx-auto md:auto-rows-[20rem]'>
			{items.map((item, i) => (
				<BentoGridItem
					key={i}
					title={item.title}
					description={item.description}
					header={item.header}
					className={cn('[&>p:text-lg]', item.className)}
					icon={item.icon}
				/>
			))}
		</BentoGrid>
	)
}
const Skeleton = () => (
	<div className='flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black'></div>
)
