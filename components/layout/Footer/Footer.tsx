import Link from 'next/link'
import { Navigation } from '../Header/widgets/Navigation/Navigation'
import { socials } from '@/lib/constants/socials'

export const Footer = () => {
	const year = new Date().getFullYear()

	return (
		<footer className='bg-background mx-auto max-w-screen-xl px-4 pb-8 pt-16 sm:px-6 lg:px-8'>
			<div className='mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-32'>
				<div className='mx-auto max-w-sm lg:max-w-none'>
					<p className='mt-4 text-center text-gray-500 lg:text-left lg:text-lg'>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit.
						Praesentium natus quod eveniet aut perferendis distinctio iusto
						repudiandae, provident velit earum?
					</p>

					<div className='mt-6 flex justify-center gap-4 lg:justify-start'>
						{socials.map((social, idx) => (
							<Link href={social.href} key={idx}>
								{social.icon}
							</Link>
						))}
					</div>
				</div>

				<Navigation />
			</div>

			<div className='mt-16 border-t border-gray-100 pt-8'>
				<p className='text-center text-xs/relaxed text-gray-500'>
					© Company {year}. All rights reserved.
					<br />
					Created with Next.js and chad/cn.
				</p>
			</div>
		</footer>
	)
}
