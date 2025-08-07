import Link from 'next/link'
import { FooterNavigation } from './widgets/FooterNavigation'
import { socials } from '@/lib/constants/socials'
import { getTranslations } from 'next-intl/server'

export const Footer = async () => {
	const year = new Date().getFullYear()
	const t = await getTranslations('Footer')

	return (
		<footer className='bg-background mx-auto max-w-(--breakpoint-xl) px-4 pb-8 pt-16 sm:px-6 lg:px-8'>
			<div className='mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-32'>
				<div className='mx-auto max-w-sm lg:max-w-none'>
					<p className='mt-4 text-center text-gray-500 lg:text-left lg:text-lg'>
						{t('slogan')}
					</p>

					<div className='mt-6 flex justify-center gap-4 lg:justify-start'>
						{socials.map((social, idx) => (
							<Link href={social.href} key={idx}>
								{social.icon}
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
