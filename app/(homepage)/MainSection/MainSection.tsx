import { LocationCard } from '@/components/global/LocationCard'
import {
	AboutBlock,
	EmailListBlock,
	HeaderBlock,
	LocationBlock,
	SocialsBlock
} from './widgets'

export const MainSection = () => {
	return (
		<section className='grid grid-cols-12 gap-4 mb-24' id='main'>
			<HeaderBlock />
			<SocialsBlock />
			<AboutBlock />
			<LocationBlock />
			<EmailListBlock />
		</section>
	)
}
