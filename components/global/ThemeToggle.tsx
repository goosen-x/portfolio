'use client'

import { Moon, Sun } from 'lucide-react'
import useThemeWithTransition from '@/lib/hooks/useThemeWithTransition'
import { ComponentPropsWithoutRef, useState, useEffect } from 'react'
import { cn } from '@/lib/utils'

const ThemeToggle = ({ className }: ComponentPropsWithoutRef<'button'>) => {
	const { theme, setTheme } = useThemeWithTransition()
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		setMounted(true)
	}, [])

	// Avoid hydration mismatch by not rendering until mounted
	if (!mounted) {
		return (
			<button className={cn('p-2 rounded-lg bg-muted/50 animate-pulse', className)}>
				<div className="w-4 h-4" />
			</button>
		)
	}

	return (
		<button
			onClick={(e) => setTheme(theme === 'dark' ? 'light' : 'dark', e)}
			className={cn(
				'p-2 rounded-lg border border-border/50 hover:bg-muted/50 transition-colors',
				className
			)}
			aria-label="Toggle theme"
		>
			{theme === 'dark' ? (
				<Sun className="w-4 h-4 text-muted-foreground" />
			) : (
				<Moon className="w-4 h-4 text-muted-foreground" />
			)}
		</button>
	)
}

export default ThemeToggle