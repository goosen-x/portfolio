import Link from 'next/link'
import { useLocale, useTranslations } from 'next-intl'

const Header = () => {
	const locale = useLocale()
	const t = useTranslations('Header')

	return (
		<header className='border-b border-gray-200 bg-white sticky top-0 z-50'>
			<div className='max-w-7xl mx-auto px-5'>
				<div className='flex items-center justify-between h-16'>
					{/* Logo/Brand */}
					<div className='flex items-center'>
						<Link href={`/${locale}`} className='text-2xl font-bold text-gray-900 hover:text-gray-700 transition-colors'>
							goosen.pro
						</Link>
						<span className='ml-3 text-gray-400'>/</span>
						<Link href={`/${locale}/blog`} className='ml-3 text-xl font-semibold text-blue-600 hover:text-blue-700 transition-colors'>
							Blog
						</Link>
					</div>

					{/* Navigation */}
					<nav className='hidden md:flex items-center space-x-8'>
						<Link href={`/${locale}`} className='text-gray-700 hover:text-gray-900 font-medium transition-colors'>
							{t('nav.main')}
						</Link>
						<Link href={`/${locale}#techstack`} className='text-gray-700 hover:text-gray-900 font-medium transition-colors'>
							{t('nav.techstack')}
						</Link>
						<Link href={`/${locale}#projects`} className='text-gray-700 hover:text-gray-900 font-medium transition-colors'>
							{t('nav.projects')}
						</Link>
						<Link href={`/${locale}#experience`} className='text-gray-700 hover:text-gray-900 font-medium transition-colors'>
							{t('nav.experience')}
						</Link>
						<Link href={`/${locale}#contact`} className='text-gray-700 hover:text-gray-900 font-medium transition-colors'>
							{t('nav.contact')}
						</Link>
					</nav>

					{/* Mobile menu button */}
					<div className='md:hidden'>
						<button className='text-gray-700 hover:text-gray-900'>
							<svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
								<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
							</svg>
						</button>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
