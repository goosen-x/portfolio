import { useState, useEffect } from 'react'

export function useMediaQuery(query: string): boolean {
	const [matches, setMatches] = useState(false)

	useEffect(() => {
		const media = window.matchMedia(query)

		// Set initial value
		setMatches(media.matches)

		// Listen for changes
		const listener = (e: MediaQueryListEvent) => setMatches(e.matches)
		media.addEventListener('change', listener)

		return () => media.removeEventListener('change', listener)
	}, [query])

	return matches
}
