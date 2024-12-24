'use client'

import { useEffect, useRef } from 'react'
import createGlobe from 'cobe'
import { useTheme } from 'next-themes'

export const Globus = ({ className }: { className?: string }) => {
	const { theme } = useTheme()
	const canvasRef = useRef<HTMLCanvasElement>(null)

	useEffect(() => {
		let phi = 0

		if (!canvasRef.current) return

		const globe = createGlobe(canvasRef.current, {
			devicePixelRatio: 2,
			width: 600 * 2,
			height: 600 * 2,
			phi: 0,
			theta: 0.4,
			dark: theme === 'dark' ? 1 : 0,
			diffuse: theme === 'dark' ? 1.2 : 0.4,
			mapSamples: 16000,
			mapBrightness: theme === 'dark' ? 6 : 1.2,
			baseColor: theme === 'dark' ? [0.231, 0.51, 0.965] : [1, 1, 1],
			markerColor: [0.1, 0.8, 1],
			glowColor: [1, 1, 1],
			markers: [
				// moscow
				{ location: [55.4521, 37.3704], size: 0.1 },
				// tel aviv
				{ location: [31.3, 34.45], size: 0.03 }
			],
			onRender: state => {
				// Called on every animation frame.
				// `state` will be an empty object, return updated params.
				state.phi = phi
				phi += 0.01
			}
		})

		return () => {
			globe.destroy()
		}
	}, [theme])

	return (
		<canvas
			ref={canvasRef}
			style={{ width: 600, height: 600, maxWidth: '100%', aspectRatio: 1 }}
			className={className}
		/>
	)
}
