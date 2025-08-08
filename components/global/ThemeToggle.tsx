'use client'

import { motion } from 'framer-motion'
import { FiMoon, FiSun } from 'react-icons/fi'
import useThemeWithTransition from '@/lib/hooks/useThemeWithTransition'
import { ComponentPropsWithoutRef, useState, useEffect } from 'react'
import { cn } from '@/lib/utils'

const TOGGLE_CLASSES =
	'text-sm font-medium h-8 flex items-center gap-2 px-3 md:pl-3 md:pr-3.5 py-3 md:py-1.5 transition-colors relative z-10'

const ThemeToggle = ({ className }: ComponentPropsWithoutRef<'div'>) => {
	const { theme, setTheme } = useThemeWithTransition()
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		setMounted(true)
	}, [])

	// Avoid hydration mismatch by not rendering until mounted
	if (!mounted) {
		return (
			<div className={cn('shrink-0 relative flex w-fit items-center rounded-full', className)}>
				<div className="w-[116px] h-8 bg-muted/50 rounded-full animate-pulse" />
			</div>
		)
	}

	return (
		<div
			className={cn(
				'shrink-0 relative flex w-fit items-center rounded-full',
				className
			)}
		>
			<button
				className={`${TOGGLE_CLASSES} text-white`}
				onClick={(e) => setTheme('light', e)}
			>
				<FiSun className='relative z-10 text-lg md:text-sm' />
			</button>
			<button
				className={`${TOGGLE_CLASSES} ${
					theme === 'dark' ? 'text-white' : 'text-slate-800'
				}`}
				onClick={(e) => setTheme('dark', e)}
			>
				<FiMoon className='relative z-10 text-lg md:text-sm' />
			</button>
			<div
				className={`absolute inset-0 z-0 flex ${
					theme === 'dark' ? 'justify-end' : 'justify-start'
				}`}
			>
				<motion.span
					layout
					transition={{ type: 'spring', damping: 15, stiffness: 250 }}
					style={{
						height: '100%',
						width: '50%',
						borderRadius: '9999px',
						backgroundColor: 'hsl(var(--accent))'
					}}
				/>
			</div>
		</div>
	)
}

export default ThemeToggle