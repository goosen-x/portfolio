import { Block } from '@/components/Block'
import { Globe } from '@/components/cards/globe'

export const LocationBlock = () => {
	return (
		<Block className='col-span-12 md:col-span-4 relative p-0 max-h-80 overflow-hidden'>
			<p className='absolute top-4 left-4 text-2xl'>Russia, Moscow</p>
			<Globe />
		</Block>
	)
}
