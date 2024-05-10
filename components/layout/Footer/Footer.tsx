import Link from 'next/link'
import { Navigation } from '../Header/widgets/Navigation/Navigation'
import { FaArrowUp } from 'react-icons/fa'
import { LogoLink } from '../Header/widgets/LogoLink/LogoLink'

export const Footer = () => {
	const year = new Date().getFullYear()

	return (
		<footer className='bg-card'>
			<div className='relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24'>
				<div className='absolute end-4 top-4 sm:end-6 sm:top-6 lg:end-8 lg:top-8'>
					<Link
						className='inline-block rounded-full bg-teal-600 p-2 text-white shadow transition hover:bg-teal-500 sm:p-3 lg:p-4'
						href='#main'
					>
						<span className='sr-only'>Back to top</span>
						<FaArrowUp />
					</Link>
				</div>

				<div className='lg:flex lg:items-end lg:justify-between'>
					<div>
						<div className='flex justify-center text-teal-600 lg:justify-start'>
							<LogoLink />
						</div>

						<p className='mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500 lg:text-left'>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
							consequuntur amet culpa cum itaque neque.
						</p>
					</div>
					<Navigation />
				</div>
				<p className='mt-12 text-center text-sm text-gray-500 lg:text-right'>
					Copyright &copy; {year}. All rights reserved.
				</p>
			</div>
		</footer>
	)
}
