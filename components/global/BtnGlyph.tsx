'use client'

import { useState, useEffect } from 'react'

const GLYPHS =
	'ラドクリフマラソンわたしワタシんょンョたばこタバコとうきょうトウキョウ0123456789±!@#$%^&*()_+ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const TEXT = 'Click Me'
const SPEED = 0.25

export const BtnGlyph = () => {
	const [text, setText] = useState(TEXT)

	useEffect(() => {
		const interval = setInterval(() => {
			setText(t => t.slice(1) + t[0])
		}, SPEED * 1000)

		return () => clearInterval(interval)
	}, [])

	return (
		<>
			<button>
				{text}
				<span className='sr-only'>{TEXT}</span>
			</button>
		</>
	)
}
