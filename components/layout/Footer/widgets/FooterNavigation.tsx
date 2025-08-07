'use client'

import Link from 'next/link'
import { useTranslations, useLocale } from 'next-intl'

export const FooterNavigation = () => {
	const t = useTranslations('Header.nav')
	const locale = useLocale()

	const links = [
		{ title: t('main'), href: `/${locale}` },
		{ title: t('techstack'), href: `#techstack` },
		{ title: t('projects'), href: `#projects` },
		{ title: t('experience'), href: `#experience` },
		{ title: t('blog'), href: `/${locale}/blog` },
		{ title: t('contact'), href: `/${locale}/contact` }
	]

	return (
		<div className='grid gap-3 text-sm'>
			<h3 className='font-semibold text-foreground'>Navigation</h3>
			{links.map(link => (
				<Link
					key={link.title}
					href={link.href}
					className='text-muted-foreground hover:text-foreground transition-colors'
				>
					{link.title}
				</Link>
			))}
		</div>
	)
}