import React from 'react'
import { menuItems } from './constants'
import { LogoLink } from '../LogoLink/LogoLink'
import Link from 'next/link'

type NavigationProps = {
	burger?: boolean
}

export const Navigation = ({ burger = false }: NavigationProps) => {
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
				>
					{item.title}
				</Link>
			))}
		</nav>
	)
}
