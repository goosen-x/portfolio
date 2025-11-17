'use client'

import { Block } from '@/components/ui/block'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { FiArrowRight } from 'react-icons/fi'

import avatarImg from '@/public/images/avatar.png'

const getTimeOfDay = () => {
	const hour = new Date().getHours()

	if (hour >= 5 && hour < 12) {
		return 'morning'
	} else if (hour >= 12 && hour < 18) {
		return 'afternoon'
	} else if (hour >= 18 && hour < 23) {
		return 'evening'
	} else {
		return 'night'
	}
}

export const HeaderBlock = () => {
	const t = useTranslations('SectionMain')
	const [timeOfDay, setTimeOfDay] = useState<string>('morning')

	useEffect(() => {
		setTimeOfDay(getTimeOfDay())
	}, [])

	return (
		<Block className='col-span-12 row-span-2 md:col-span-8'>
			<Image
				className='group-hover/block:z-0 mb-4 size-20 rounded-full object-cover group-hover/block:w-32 group-hover/block:h-32 transition-all duration-500'
				src={avatarImg.src}
				width={500}
				height={500}
				alt='Дмитрий Борисенко'
			/>
			<h1 className='mb-12 text-3xl text-foreground font-medium leading-tight'>
				<span className='text-foreground/70 text-2xl block mb-2'>
					{t(`greeting.${timeOfDay}`)}
				</span>
				<span className='text-accent text-4xl md:group-hover/block:text-5xl font-bold block transition-all duration-500'>
					{t('namePrefix')} {t('name')}
				</span>
				{t('job')}
			</h1>
			<Link
				className='group-hover/block:translate-x-2 transition w-fit flex items-center gap-2 text-accent/50 hover:underline duration-500'
				href='#contact'
			>
				{t('contact')}{' '}
				<FiArrowRight className='group-hover/block:scale-x-150 transition-all duration-500' />
			</Link>
		</Block>
	)
}
