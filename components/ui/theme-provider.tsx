'use client'

import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { type ThemeProviderProps } from 'next-themes/dist/types'

export function ThemeProvider({ children }: ThemeProviderProps) {
	return (
		<NextThemesProvider
			attribute='class'
			defaultTheme='system'
			enableSystem
			disableTransitionOnChange
		>
			{children}
		</NextThemesProvider>
	)
}

const test = () => {
	try {
		var documentEl = document.documentElement
		var className = documentEl.classList
		className.remove('light', 'dark')
		var e = localStorage.getItem('theme')
		if ('system' === e || (!e && true)) {
			var t = '(prefers-color-scheme: dark)'
			var m = window.matchMedia(t)
			if (m.media !== t || m.matches) {
				documentEl.style.colorScheme = 'dark'
				className.add('dark')
			} else {
				documentEl.style.colorScheme = 'light'
				className.add('light')
			}
		} else if (e) {
			className.add(e || '')
		}
		if (e === 'light' || e === 'dark') {
			documentEl.style.colorScheme = e
		}
	} catch (e) {}
}
