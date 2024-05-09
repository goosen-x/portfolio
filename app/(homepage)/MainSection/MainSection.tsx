import { Block } from '@/components/Block'
import {
	AboutBlock,
	CVBlock,
	CodeBlock,
	EmailListBlock,
	HeaderBlock,
	LocationBlock,
	SocialsBlock
} from './widgets'

export const MainSection = () => {
	return (
		<section className='grid grid-cols-12 gap-4 mb-6' id='main'>
			<HeaderBlock />
			<SocialsBlock />
			<AboutBlock />
			<CodeBlock />
			<LocationBlock />
			<CVBlock />
			<EmailListBlock />
		</section>
	)
}
