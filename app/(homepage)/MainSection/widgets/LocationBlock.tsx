import { Block } from '@/components/Block'
import { Globe } from '@/components/global/Globe'
import { LocationCard } from '@/components/global/LocationCard'
import Image from 'next/image'
import { FiMapPin } from 'react-icons/fi'

export const LocationBlock = () => {
	return (
		<Block className='col-span-12 flex flex-col items-center gap-4 md:col-span-4 relative'>
			{/* <p className='text-3xl text-foreground'>Location:</p>
			<FiMapPin className='text-3xl text-foreground' />
			<p className='text-center text-lg text-zinc-400'>Moscow, Russia</p> */}
			{/* <Globe globeConfig={}/> */}
			<LocationCard title='Moscow'>Location</LocationCard>
			<Image
				className='object-cover object-[10rem 10rem]'
				src={'/images/heroes.png'}
				fill
				alt='World map'
			/>
		</Block>
	)
}
