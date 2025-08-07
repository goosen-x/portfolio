'use client'

import React, { Dispatch, SetStateAction } from 'react'
import { LogoLink } from '../LogoLink/LogoLink'
import Link from 'next/link'
import { useTranslations, useLocale } from 'next-intl'

type NavigationProps = {
	burger?: boolean
	setOpen?: Dispatch<SetStateAction<boolean>>
}

export const Navigation = ({ burger = false, setOpen }: NavigationProps) => {
	const t = useTranslations('Header.nav')
	const locale = useLocale()

	const arr = ['main', 'techstack', 'projects', 'experience', 'contact']

	const menuItems = arr.reduce<{ title: string; href: string }[]>(
		(acc, item) => {
			if (item === 'contact') {
				// Контакты теперь ведут на отдельную страницу
				return [...acc, { title: t(item), href: `/${locale}/contact` }]
			}
			return [...acc, { title: t(item), href: `#${item}` }]
		},
		[]
	)

	// Добавляем ссылку на блог с учётом локали
	menuItems.push({ title: t('blog'), href: `/${locale}/blog` })

	return (
		<nav
			className={
				burger
					? 'grid gap-6 text-lg font-medium'
					: 'hidden flex-col gap-6 text-lg font-medium lg:flex lg:flex-row lg:items-center lg:text-sm lg:gap-6'
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
