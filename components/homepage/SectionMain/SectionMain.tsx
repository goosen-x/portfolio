import { ComponentPropsWithoutRef } from 'react'
import { cn } from '@/lib/utils'

import {
	AboutBlock,
	EmailListBlock,
	HeaderBlock,
	LocationBlock,
	SocialsBlock
} from './widgets'

export const SectionMain = ({
	className,
	...rest
}: ComponentPropsWithoutRef<'section'>) => {
	return (
		<section
			className={cn('grid grid-cols-12 gap-4 mb-24', className)}
			{...rest}
		>
			<HeaderBlock />
			<SocialsBlock />
			<LocationBlock />
			<AboutBlock />
			<EmailListBlock />
		</section>
	)
}
