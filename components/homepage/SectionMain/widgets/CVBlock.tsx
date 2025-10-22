import { cn } from '@/lib/utils'

import { Block } from '@/components/ui/block'
import { Button } from '@/components/ui/button'

export const CVBlock = () => {
	return (
		// <Block className={'col-span-12 md:col-span-4'}>
		<div className='col-span-12 flex flex-col justify-center items-center gap-4 md:col-span-4'>
			<p>Fullstack developer</p>
			<Button>Download CV</Button>
		</div>
		// {/* </Block> */}
	)
}
