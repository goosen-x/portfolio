import Link from 'next/link'
import { useLocale, useTranslations } from 'next-intl'
import ThemeToggle from '@/components/global/ThemeToggle'
import { LanguageSelect } from '@/components/global/LanguageSelect'

const BlogHeader = () => {
	const locale = useLocale()
	const t = useTranslations('Header')

	return (
		<header className='border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50'>
			<div className='max-w-7xl mx-auto px-5'>
				<div className='flex items-center justify-between h-16'>
					{/* Logo/Brand */}
					<div className='flex items-center'>
						<Link
							href={`/${locale}`}
							className='text-2xl font-bold text-foreground hover:text-foreground/80 transition-colors'
						>
							goosen.pro
						</Link>
						<span className='ml-3 text-muted-foreground'>/</span>
						<Link
							href={`/${locale}/blog`}
							className='ml-3 text-xl font-semibold text-primary hover:text-primary/80 transition-colors'
						>
							Blog
						</Link>
					</div>

					{/* Navigation & Controls */}
					<div className='flex items-center gap-4'>
						<nav className='hidden md:flex items-center space-x-8'>
							<Link
								href={`/${locale}`}
								className='text-muted-foreground hover:text-foreground font-medium transition-colors'
							>
								{t('nav.main')}
							</Link>

							<Link
								href={`/${locale}/blog`}
								className='text-muted-foreground hover:text-foreground font-medium transition-colors'
							>
								{t('nav.blog')}
							</Link>
							<Link
								href={`/${locale}/contact`}
								className='text-muted-foreground hover:text-foreground font-medium transition-colors'
							>
								{t('nav.contact')}
							</Link>
						</nav>
						<div className='hidden md:flex items-center gap-2'>
							<LanguageSelect className='shrink-0' locale={locale} />
							<ThemeToggle className='shrink-0' />
						</div>
					</div>

					{/* Mobile controls */}
					<div className='flex items-center gap-2 md:hidden'>
						<LanguageSelect className='shrink-0' locale={locale} />
						<ThemeToggle className='shrink-0' />
						<button className='text-muted-foreground hover:text-foreground'>
							<svg
								className='w-6 h-6'
								fill='none'
								stroke='currentColor'
								viewBox='0 0 24 24'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M4 6h16M4 12h16M4 18h16'
								/>
							</svg>
						</button>
					</div>
				</div>
			</div>
		</header>
	)
}

export default BlogHeader
