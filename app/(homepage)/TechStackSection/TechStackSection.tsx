'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { Block } from '@/components/Block'
import { TechStackData } from './constants'
import { BiLogoTelegram } from 'react-icons/bi'
import { CodeBlock } from '../MainSection/widgets'

export const TechStackSection = () => {
	return (
		<section className='grid grid-cols-12 gap-4 mb-6' id='tech'>
			<h2 className='col-span-12 text-5xl text-foreground'>Tech Stack</h2>
			<CodeBlock />
			{TechStackData.map(item => (
				<Block
					className={
						(cn('col-span-12 text-foreground'),
						item.name !== 'Other Tools' ? 'md:col-span-4' : 'md:col-span-12')
					}
					key={item.name}
				>
					<p className='text-3xl'>{item.name}</p>
					<ul>
						{item.techs.map(tech => (
							<li className='flex items-center gap-2' key={tech.name}>
								{tech.icon}
								{tech.name}
							</li>
						))}
					</ul>
				</Block>
			))}
		</section>
	)
}
