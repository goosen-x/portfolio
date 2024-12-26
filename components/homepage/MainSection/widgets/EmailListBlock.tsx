import { Block } from '@/components/ui/block'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

import React from 'react'
import { FiMail } from 'react-icons/fi'

export const EmailListBlock = () => {
	return (
		<Block className='col-span-12 md:col-span-4'>
			<p className='mb-3 text-lg'>Join my mailing list</p>
			<form className='flex items-conter gap-2'>
				<Input type='email' placeholder='Enter your email' />
				<Button className='flex gap-2'>
					<FiMail /> Join the list
				</Button>
			</form>
		</Block>
	)
}
