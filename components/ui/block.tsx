import { ComponentPropsWithoutRef, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

type BlockProps = {
	className?: string
	children?: ReactNode
} & ComponentPropsWithoutRef<'div'>
// & MotionProps

export const Block = ({ children, className, ...rest }: BlockProps) => {
	return (
		<div
			className={twMerge(
				'group/block col-span-4 rounded-lg dark:border border-zinc-700 text-foreground bg-card p-6 ease-in-out',
				className
			)}
			{...rest}
		>
			{children}
		</div>
	)
}
