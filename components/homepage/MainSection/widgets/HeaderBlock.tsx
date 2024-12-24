import { Block } from '@/components/Block'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FiArrowRight } from 'react-icons/fi'

export const HeaderBlock = () => {
	const t = useTranslations('Index')

	return (
		<Block className='col-span-12 row-span-2 md:col-span-8'>
			<Image
				className='group-hover/block:z-0 mb-4 size-20 rounded-full group-hover/block:w-32 group-hover/block:h-32 transition-all duration-500'
				src={
					'https://lh3.googleusercontent.com/ogw/AF2bZyhPfLZmAxGeUTL2Syg9SoOz0VdELu5JqE3Lym_AxPJ6GRU=s64-c-mo'
				}
				width={500}
				height={500}
				alt=''
			/>
			<h1 className='mb-12 text-3xl text-foreground font-medium leading-tight'>
				Fullstack developer
				<span className='text-accent text-4xl group-hover/block:text-5xl font-bold block transition-all duration-500'>
					{t('name')}
				</span>
			</h1>
			<Link
				className='group-hover/block:translate-x-2 transition w-fit flex items-center gap-2 text-accent/50 hover:underline duration-500'
				href='#'
			>
				Contact Me{' '}
				<FiArrowRight className='group-hover/block:scale-x-150 transition-all duration-500' />
			</Link>
		</Block>
	)
}
