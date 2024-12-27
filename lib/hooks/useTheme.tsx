import { useState, useEffect } from 'react'

type Theme = 'light' | 'dark'

const useTheme = (): [Theme, (newTheme: Theme) => void] => {
	const getSystemTheme = (): Theme =>
		window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'

	const getInitialTheme = (): Theme => {
		const storedTheme = localStorage.getItem('theme') as Theme | null
		return storedTheme || getSystemTheme()
	}

	const [theme, setTheme] = useState<Theme>(() => getInitialTheme())

	useEffect(() => {
		if (typeof window === 'undefined') return

		// Синхронизация с системной темой
		const handleSystemThemeChange = (e: MediaQueryListEvent) => {
			if (!localStorage.getItem('theme')) {
				setTheme(e.matches ? 'dark' : 'light')
			}
		}

		const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
		mediaQuery.addEventListener('change', handleSystemThemeChange)

		return () => {
			mediaQuery.removeEventListener('change', handleSystemThemeChange)
		}
	}, [])

	const updateTheme = (newTheme: Theme) => {
		setTheme(newTheme)

		if (typeof window !== 'undefined') {
			localStorage.setItem('theme', newTheme)

			// Применение темы на уровне документа
			document.documentElement.classList.remove('light', 'dark')
			document.documentElement.classList.add(newTheme)
		}
	}

	useEffect(() => {
		if (typeof window !== 'undefined') {
			updateTheme(theme)
		}
	}, [theme])

	return [theme, updateTheme]
}

export default useTheme
