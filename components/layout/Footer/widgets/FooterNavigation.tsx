'use client'

import Link from 'next/link'
import { useTranslations, useLocale } from 'next-intl'
import { usePathname } from 'next/navigation'
import { Home, FolderOpen, Activity, BookOpen, Mail } from 'lucide-react'

export const FooterNavigation = () => {
	const t = useTranslations('Header.nav')
	const locale = useLocale()
	const pathname = usePathname()

	const links = [
		{ title: t('main'), href: `/${locale}`, icon: Home },
		{ title: t('projects'), href: `/${locale}/projects`, icon: FolderOpen },
		{ title: t('activities'), href: `/${locale}/activities`, icon: Activity },
		{ title: t('blog'), href: `/${locale}/blog`, icon: BookOpen },
		{ title: t('contact'), href: `/${locale}/contact`, icon: Mail }
	]

	return (
		<div className='flex flex-col gap-6'>
			<h3 className='text-sm font-semibold text-foreground uppercase tracking-wider'>
				Navigation
			</h3>
			<div className='grid grid-cols-2 gap-x-8 gap-y-4 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3'>
				{links.map(link => {
					const Icon = link.icon
					const isActive = pathname === link.href || 
						(link.href !== `/${locale}` && pathname.startsWith(link.href))
					
					return (
						<Link
							key={link.title}
							href={link.href}
							scroll={!isActive}
							className='group flex items-center gap-3 relative'
						>
							<div className='relative'>
								<div className={`
									absolute inset-0 rounded-lg opacity-0 scale-110 
									bg-gradient-to-br from-accent/20 to-accent/5 
									group-hover:opacity-100 group-hover:scale-100 
									transition-all duration-300 blur-sm
								`} />
								<div className={`
									relative p-2 rounded-lg border 
									${isActive 
										? 'border-accent bg-accent/10 text-accent' 
										: 'border-border/50 text-muted-foreground group-hover:border-accent/50 group-hover:text-accent'
									}
									transition-all duration-300
								`}>
									<Icon className='w-4 h-4' />
								</div>
							</div>
							<span className={`
								text-sm font-medium transition-all duration-300
								${isActive 
									? 'text-foreground' 
									: 'text-muted-foreground group-hover:text-foreground'
								}
							`}>
								{link.title}
							</span>
						</Link>
					)
				})}
			</div>
		</div>
	)
}
