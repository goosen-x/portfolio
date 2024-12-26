'use client'

import React, { Dispatch, SetStateAction } from 'react'
import { LogoLink } from '../LogoLink/LogoLink'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

type NavigationProps = {
	burger?: boolean
	setOpen?: Dispatch<SetStateAction<boolean>>
}

export const Navigation = ({ burger = false, setOpen }: NavigationProps) => {
	const t = useTranslations('Header.nav')

	const arr = ['main', 'techstack', 'projects', 'experience', 'contact']

	const menuItems = arr.reduce<{ title: string; href: string }[]>(
		(acc, item) => [...acc, { title: t(item), href: `#${item}` }],
		[]
	)

	return (
		<nav
			className={
				burger
					? 'grid gap-6 text-lg font-medium'
					: 'hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6'
			}
		>
			<LogoLink />
			{menuItems.map(item => (
				<Link
					className='text-muted-foreground transition-colors hover:text-foreground'
					href={item.href}
					key={item.title}
					onClick={() => burger && setOpen && setOpen(false)}
				>
					{item.title}
				</Link>
			))}
		</nav>
	)
}
