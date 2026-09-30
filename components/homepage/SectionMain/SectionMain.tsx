'use client'

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
	id
}: {
	className?: string
	id?: string
}) => {
	return (
		<section id={id} className={cn('grid grid-cols-12 gap-4 mb-24', className)}>
			<HeaderBlock />
			<SocialsBlock />
			<LocationBlock />
			<AboutBlock />
			<EmailListBlock />
		</section>
	)
}
