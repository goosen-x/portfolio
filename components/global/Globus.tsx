'use client'

import { useEffect, useRef, useState } from 'react'
import createGlobe from 'cobe'

function isWebGLAvailable(): boolean {
	try {
		const canvas = document.createElement('canvas')
		const gl =
			canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
		return gl !== null && gl !== undefined
	} catch {
		return false
	}
}

export const Globus = ({ className }: { className?: string }) => {
	const canvasRef = useRef<HTMLCanvasElement>(null)
	const [webglSupported, setWebglSupported] = useState<boolean | null>(null)
	const darkTheme = false

	useEffect(() => {
		setWebglSupported(isWebGLAvailable())
	}, [])

	useEffect(() => {
		if (webglSupported !== true || !canvasRef.current) return

		let phi = 0
		let globe: ReturnType<typeof createGlobe> | null = null

		globe = createGlobe(canvasRef.current, {
			devicePixelRatio: 2,
			width: 600 * 2,
			height: 600 * 2,
			phi: 0,
			theta: 0.4,
			dark: darkTheme ? 1 : 0,
			diffuse: darkTheme ? 1.2 : 0.4,
			mapSamples: 16000,
			mapBrightness: darkTheme ? 6 : 1.2,
			baseColor: darkTheme ? [0.231, 0.51, 0.965] : [1, 1, 1],
			markerColor: [0.599, 0.132, 0.876],
			glowColor: [1, 1, 1],
			markers: [
				// moscow
				{ location: [55.4521, 37.3704], size: 0.1 },
				// tel aviv
				{ location: [31.3, 34.45], size: 0.03 }
			],
			onRender: state => {
				state.phi = phi
				phi += 0.0025
			}
		})

		return () => {
			globe?.destroy()
		}
	}, [darkTheme, webglSupported])

	if (webglSupported === false) {
		return null
	}

	return (
		<canvas
			ref={canvasRef}
			style={{ width: 600, height: 600, maxWidth: '100%', aspectRatio: 1 }}
			className={className}
		/>
	)
}
