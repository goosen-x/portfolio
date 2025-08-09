import Link from 'next/link'
import { FooterNavigation } from './widgets/FooterNavigation'
import { socials } from '@/lib/constants/socials'
import { getTranslations } from 'next-intl/server'
import { tekturFont } from '@/lib/fonts/fonts'

export const Footer = async () => {
	const year = new Date().getFullYear()
	const t = await getTranslations('Footer')

	return (
		<footer className={`bg-background mx-auto max-w-(--breakpoint-xl) px-4 pb-8 pt-16 sm:px-6 lg:px-8 ${tekturFont.className}`} data-force-font="tektur">
			<div className='space-y-12'>
				<div className='space-y-6'>
					<div>
						<h2 className='text-2xl font-bold text-foreground'>goosen.pro</h2>
						<p className='mt-2 text-muted-foreground lg:text-lg'>
							{t('slogan')}
						</p>
					</div>

					<div className='flex gap-4'>
						{socials.map((social, idx) => (
							<Link 
								href={social.href} 
								key={idx}
								className='group relative'
							>
								<div className='absolute inset-0 rounded-lg bg-accent/20 scale-0 group-hover:scale-100 transition-transform duration-300' />
								<div className='relative p-2 text-muted-foreground group-hover:text-accent transition-colors duration-300'>
									{social.icon}
								</div>
							</Link>
						))}
					</div>
				</div>

				<FooterNavigation />
			</div>

			<div className='mt-16 border-t border-gray-100 pt-8'>
				<p className='text-center text-xs/relaxed text-gray-500'>
					{t('copyright')}
					<br />
					<Link
						className='text-foreground hover:underline'
						href='https://github.com/goosen-x/next-portfolio'
						target='_blank'
					>
						{t('description')}
					</Link>
				</p>
			</div>
		</footer>
	)
}
