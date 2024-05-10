import { cn } from '@/lib/utils'
import { ComponentPropsWithoutRef } from 'react'

type Props = {
	title: string
	tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
} & ComponentPropsWithoutRef<'div'>

export const SectionTitle = ({ className, title, tag = 'h2' }: Props) => {
	const Tag = tag

	return (
		<div
			className={cn(
				'flex items-center gap-6 mb-6 whitespace-nowrap',
				className
			)}
		>
			<Tag className={'text-6xl font-black'}>
				{title}
				<span className='text-violet-500'>.</span>
			</Tag>
			<div className='size-full h-px bg-card'></div>
		</div>
	)
}
