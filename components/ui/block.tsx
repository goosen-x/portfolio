import { ComponentPropsWithoutRef } from 'react'
import { cn } from '@/lib/utils'

export const Block = ({
	className,
	children,
	...rest
}: ComponentPropsWithoutRef<'div'>) => {
	return (
		<div
			className={cn(
				'group/block relative rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-lg',
				className
			)}
			{...rest}
		>
			{children}
		</div>
	)
}
