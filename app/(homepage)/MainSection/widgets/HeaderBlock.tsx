import { Block } from '@/components/Block'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FiArrowRight } from 'react-icons/fi'

export const HeaderBlock = () => {
	return (
		<Block className='col-span-12 row-span-2 md:col-span-6'>
			<Image
				className='group-hover/block:z-0 mb-4 size-20 rounded-full group-hover/block:scale-110  group-hover/block:translate-x-2 group-hover/block:translate-y-2 transition duration-200'
				src={
					'https://lh3.googleusercontent.com/ogw/AF2bZyhPfLZmAxGeUTL2Syg9SoOz0VdELu5JqE3Lym_AxPJ6GRU=s64-c-mo'
				}
				width={500}
				height={500}
				alt=''
			/>
			<h1 className='mb-12 text-3xl text-foreground font-medium leading-tight'>
				Fullstack developer
				<span className='text-blue-300 text-4xl font-bold block'>
					{' '}
					Borisenko Dmitry
				</span>
			</h1>
			<Link
				className='group-hover/block:translate-x-2 transition duration-200 flex items-center gap-1 text-blue-300 hover:underline'
				href='#'
			>
				Contact Me <FiArrowRight />
			</Link>
		</Block>
	)
}
