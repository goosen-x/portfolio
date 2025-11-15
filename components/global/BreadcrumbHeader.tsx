'use client'

import Link from 'next/link'
import { useLocale, useTranslations } from 'next-intl'
import { usePathname } from 'next/navigation'
import ThemeToggle from '@/components/global/ThemeToggle'
import { LanguageSelect } from '@/components/global/LanguageSelect'
import { DownloadCV } from '@/components/global/DownloadCV'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import { tekturFont } from '@/lib/fonts/fonts'
import Image from 'next/image'
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger
} from '@/components/ui/sheet'
import { Menu } from 'lucide-react'

import gooselabsImg from '@/public/images/gooselabs.png'

const BreadcrumbHeader = () => {
	const locale = useLocale()
	const t = useTranslations('Header')
	const pathname = usePathname()
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	// Clean up any theme transition artifacts on route change
	useEffect(() => {
		// Remove all transition-related state when route changes
		document.documentElement.classList.remove(
			'theme-fade-transition',
			'theme-circle-transition',
			'theme-slide-transition',
			'theme-flip-transition',
			'theme-blur-transition'
		)
		document.documentElement.style.removeProperty('--theme-circle-x')
		document.documentElement.style.removeProperty('--theme-circle-y')
		document.documentElement.style.removeProperty('--theme-circle-radius')
		document.documentElement.removeAttribute('data-theme-transitioning')
		// Close mobile menu on route change
		setIsMenuOpen(false)
	}, [pathname])

	// Helper function to translate breadcrumb labels
	const getLocalizedLabel = (segment: string): string => {
		const translations: Record<string, Record<string, string>> = {
			contact: { en: 'Contact', ru: 'Контакты' },
			blog: { en: 'Blog', ru: 'Блог' },
			activities: { en: 'Activities', ru: 'Активности' }
		}

		if (translations[segment] && translations[segment][locale]) {
			return translations[segment][locale]
		}

		// Fallback to capitalized segment
		return segment.charAt(0).toUpperCase() + segment.slice(1)
	}

	// Parse pathname to create breadcrumb items
	const pathSegments = pathname.split('/').filter(Boolean)
	// Remove locale from segments
	const segments = pathSegments.slice(1)

	// Check if we're on the main page
	const isMainPage = segments.length === 0

	// Create breadcrumb items
	const breadcrumbs = segments.map((segment, index) => {
		const path = `/${locale}/${segments.slice(0, index + 1).join('/')}`
		const label = getLocalizedLabel(segment)
		return { path, label, segment }
	})

	return (
		<header
			className={cn(
				'border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50',
				tekturFont.className
			)}
			data-force-font='tektur'
		>
			<div className='px-5'>
				<div className='flex items-center justify-between h-16'>
					{/* Logo/Brand with Breadcrumbs */}
					<div className='flex items-center'>
						<Link
							href={`/${locale}`}
							className='flex items-center gap-2 text-2xl font-bold text-foreground hover:text-foreground/80 transition-colors'
						>
							<Image
								src={gooselabsImg}
								width={45}
								height={45}
								alt='Логотип gooselabs'
							/>
							<p>gooselabs</p>
						</Link>

						{/* Breadcrumb navigation */}
						{breadcrumbs.length > 0 && (
							<nav className='flex items-center ml-2' aria-label='Breadcrumb'>
								{breadcrumbs.map((crumb, index) => (
									<div key={crumb.path} className={cn('flex items-center', index === breadcrumbs.length - 1 && breadcrumbs.length > 1 && 'hidden md:flex')}>
										<span className='mx-2 text-muted-foreground'>/</span>
										{index === breadcrumbs.length - 1 ? (
											<span className='text-lg font-medium text-primary'>
												{crumb.label}
											</span>
										) : (
											<Link
												href={crumb.path}
												className='text-lg font-medium text-muted-foreground hover:text-foreground transition-colors'
											>
												{crumb.label}
											</Link>
										)}
									</div>
								))}
							</nav>
						)}
					</div>

					{/* Navigation & Controls */}
					<div className='flex items-center gap-4'>
						<nav className='hidden md:flex items-center space-x-8'>
							<Link
								href={`/${locale}`}
								className={cn(
									'font-medium transition-colors relative',
									pathname === `/${locale}`
										? 'text-foreground'
										: 'text-muted-foreground hover:text-foreground'
								)}
							>
								{t('nav.main')}
								{pathname === `/${locale}` && (
									<span className='absolute -bottom-1 left-0 right-0 h-0.5 bg-accent' />
								)}
							</Link>

							<Link
								href={`/${locale}/activities`}
								className={cn(
									'font-medium transition-colors relative',
									pathname === `/${locale}/activities`
										? 'text-foreground'
										: 'text-muted-foreground hover:text-foreground'
								)}
							>
								{t('nav.activities')}
								{pathname === `/${locale}/activities` && (
									<span className='absolute -bottom-1 left-0 right-0 h-0.5 bg-accent' />
								)}
							</Link>
							<Link
								href={`/${locale}/blog`}
								className={cn(
									'font-medium transition-colors relative',
									pathname.startsWith(`/${locale}/blog`)
										? 'text-foreground'
										: 'text-muted-foreground hover:text-foreground'
								)}
							>
								{t('nav.blog')}
								{pathname.startsWith(`/${locale}/blog`) && (
									<span className='absolute -bottom-1 left-0 right-0 h-0.5 bg-accent' />
								)}
							</Link>
							<Link
								href={`/${locale}/contact`}
								className={cn(
									'font-medium transition-colors relative',
									pathname === `/${locale}/contact`
										? 'text-foreground'
										: 'text-muted-foreground hover:text-foreground'
								)}
							>
								{t('nav.contact')}
								{pathname === `/${locale}/contact` && (
									<span className='absolute -bottom-1 left-0 right-0 h-0.5 bg-accent' />
								)}
							</Link>
						</nav>
						<div className='hidden md:flex items-center gap-2'>
							<DownloadCV />
							<LanguageSelect className='shrink-0' locale={locale} />
							<ThemeToggle />
						</div>
					</div>

					{/* Mobile controls */}
					<div className='flex items-center gap-2 md:hidden'>
						<Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
							<SheetTrigger asChild>
								<button
									className='text-muted-foreground hover:text-foreground'
									aria-label='Toggle menu'
								>
									<Menu className='w-6 h-6' />
								</button>
							</SheetTrigger>
							<SheetContent side='right' className='w-[300px] sm:w-[400px]'>
								<SheetHeader>
									<SheetTitle>{t('nav.menu')}</SheetTitle>
								</SheetHeader>
								<div className='flex flex-col h-[calc(100vh-8rem)]'>
									<nav className='mt-6 space-y-2 flex-1'>
										<Link
											href={`/${locale}`}
											className={cn(
												'block px-4 py-2 rounded-lg font-medium transition-colors',
												pathname === `/${locale}`
													? 'bg-accent text-white'
													: 'text-muted-foreground hover:bg-accent/80 hover:text-white'
											)}
										>
											{t('nav.main')}
										</Link>
										<Link
											href={`/${locale}/activities`}
											className={cn(
												'block px-4 py-2 rounded-lg font-medium transition-colors',
												pathname === `/${locale}/activities`
													? 'bg-accent text-white'
													: 'text-muted-foreground hover:bg-accent/80 hover:text-white'
											)}
										>
											{t('nav.activities')}
										</Link>
										<Link
											href={`/${locale}/blog`}
											className={cn(
												'block px-4 py-2 rounded-lg font-medium transition-colors',
												pathname.startsWith(`/${locale}/blog`)
													? 'bg-accent text-white'
													: 'text-muted-foreground hover:bg-accent/80 hover:text-white'
											)}
										>
											{t('nav.blog')}
										</Link>
										<Link
											href={`/${locale}/contact`}
											className={cn(
												'block px-4 py-2 rounded-lg font-medium transition-colors',
												pathname === `/${locale}/contact`
													? 'bg-accent text-white'
													: 'text-muted-foreground hover:bg-accent/80 hover:text-white'
											)}
										>
											{t('nav.contact')}
										</Link>
									</nav>
									<div className='pt-4 pb-4 border-t space-y-3'>
										<DownloadCV className='w-full' />
										<div className='flex items-center justify-between px-4'>
											<span className='text-sm font-medium text-muted-foreground'>
												{t('theme')}
											</span>
											<ThemeToggle />
										</div>
										<div className='flex items-center justify-between px-4'>
											<span className='text-sm font-medium text-muted-foreground'>
												{t('language')}
											</span>
											<LanguageSelect locale={locale} />
										</div>
									</div>
								</div>
							</SheetContent>
						</Sheet>
					</div>
				</div>
			</div>
		</header>
	)
}

export default BreadcrumbHeader
