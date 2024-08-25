import { ComponentPropsWithoutRef, ReactNode } from 'react'
import { cn } from '@/lib/utils'

type Props = { children: ReactNode } & ComponentPropsWithoutRef<'div'>

export const Container = ({ className, children, ...rest }: Props) => {
	return (
		<div
			className={cn('mx-auto max-w-7xl min-h-screen px-4 py-12', className)}
			{...rest}
		>
			{children}
		</div>
	)
}
