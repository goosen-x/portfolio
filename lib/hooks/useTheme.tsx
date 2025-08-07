import { useState, useEffect } from 'react'

type Theme = 'light' | 'dark'

const useTheme = (): [Theme, (newTheme: Theme) => void] => {
	const getSystemTheme = (): Theme => {
		if (typeof window === 'undefined') return 'dark'
		return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
	}

	const getInitialTheme = (): Theme => {
		if (typeof window === 'undefined') return 'dark'
		const storedTheme = localStorage.getItem('theme') as Theme | null
		return storedTheme || getSystemTheme()
	}

	const [theme, setTheme] = useState<Theme>(() => {
		// На сервере возвращаем 'dark', на клиенте читаем реальную тему
		if (typeof window === 'undefined') return 'dark'
		return getInitialTheme()
	})

	// Set initial theme on mount (только если тема изменилась)
	useEffect(() => {
		if (typeof window === 'undefined') return
		
		const initialTheme = getInitialTheme()
		if (theme !== initialTheme) {
			setTheme(initialTheme)
		}
	}, [theme])

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
		if (typeof window !== 'undefined') {
			localStorage.setItem('theme', newTheme)

			// Применение темы на уровне документа
			document.documentElement.classList.remove('light', 'dark')
			document.documentElement.classList.add(newTheme)
		}
		
		setTheme(newTheme)
	}


	return [theme, updateTheme]
}

export default useTheme
