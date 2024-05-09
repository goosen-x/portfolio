import { cn } from '@/lib/utils'

import { Block } from '@/components/Block'
import { Button } from '@/components/ui/button'

export const CVBlock = () => {
	return (
		<Block className={'col-span-12 md:col-span-4'}>
			<p>Fullstack developer</p>
			<Button>Download CV</Button>
		</Block>
	)
}
