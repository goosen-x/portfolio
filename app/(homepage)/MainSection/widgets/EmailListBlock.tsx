import { Block } from '@/components/Block'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

import React from 'react'
import { FiMail } from 'react-icons/fi'

export const EmailListBlock = () => {
	return (
		<Block className='col-span-12 md:col-span-8'>
			<p className='mb-3 text-lg'>Join my mailing list</p>
			<form
				className='flex items-conter gap-2'
				// onSubmit={(e) => e.preventDefault()}
			>
				<Input
					type='email'
					placeholder='Enter your email'
					// className='w-full rounded border border-zinc-700 bg-zinc-800 px-3 py-1.5 transition-colors focus:border-red-300'
				/>
				<Button
				//  className='flex items-center gap02 whitespace-nowrap rounded bg-zinc-50 px-3 py-2 text-sm font-medium text-zinc-900 transition-colors focus: border-red-300'
				>
					<FiMail /> Join the list
				</Button>
			</form>
		</Block>
	)
}
