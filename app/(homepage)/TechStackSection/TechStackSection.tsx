'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { Block } from '@/components/Block'
import { TechStackData } from './constants'
import { CodeBlock } from '../MainSection/widgets'
import { Badge } from '@/components/ui/badge'

export const TechStackSection = () => {
	return (
		<section className='grid grid-cols-12 gap-4 mb-6' id='tech'>
			<h2 className='col-span-12 text-5xl text-foreground mb-2'>Tech Stack</h2>
			<CodeBlock />
			{TechStackData.map(item => (
				<Block
					className={cn('col-span-12 md:col-span-6 text-foreground')}
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
