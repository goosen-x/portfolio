import { Block } from '@/components/Block'
import { FiMapPin } from 'react-icons/fi'

export const LocationBlock = () => {
	return (
		<Block className='col-span-12 flex flex-col items-center gap-4 md:col-span-4'>
			{/* <div className='col-span-12 flex flex-col justify-center items-center gap-4 md:col-span-4'> */}
			<p className='text-3xl text-foreground'>Location:</p>
			<FiMapPin className='text-3xl text-foreground' />
			<p className='text-center text-lg text-zinc-400'>Moscow, Russia</p>
			{/* </div> */}
		</Block>
	)
}
