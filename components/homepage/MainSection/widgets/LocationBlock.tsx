import { Block } from '@/components/Block'
import { Globe } from '@/components/global/globe'
import { FaLocationDot } from 'react-icons/fa6'

export const LocationBlock = () => {
	return (
		<Block className='col-span-12 md:col-span-4 relative p-0 max-h-80 overflow-hidden'>
			<p className='flex gap-3 absolute top-4 left-4 text-2xl'>
				{' '}
				<FaLocationDot className='text-foreground text-2xl' />
				Russia, Moscow
			</p>
			<Globe />
		</Block>
	)
}
