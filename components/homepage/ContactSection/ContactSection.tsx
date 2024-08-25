import { ComponentPropsWithoutRef } from 'react'
import { cn } from '@/lib/utils'

type Props = ComponentPropsWithoutRef<'section'>

export const ContactSection = ({ className, ...rest }: Props) => {
	return (
		<section className={cn('mx-auto max-w-md', className)} {...rest}>
			<strong className='block text-center text-xl font-bold text-gray-900 sm:text-3xl'>
				Want us to email you with the latest blockbuster news?
			</strong>

			<form className='mt-6'>
				<div className='relative max-w-lg'>
					<label className='sr-only' htmlFor='email'>
						Email{' '}
					</label>
					<input
						className='w-full rounded-full border-gray-200 bg-secondary p-4 pe-32 text-sm font-medium'
						id='email'
						type='email'
						placeholder='john@doe.com'
					/>

					<button className='absolute end-1 top-1/2 -translate-y-1/2 rounded-full bg-blue-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-700'>
						Subscribe
					</button>
				</div>
			</form>
		</section>
	)
}
