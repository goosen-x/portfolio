'use client'

import { ComponentProps, useRef, useState } from 'react'
import { FiDownload } from 'react-icons/fi'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'

const CYCLES_PER_LETTER = 2
const SHUFFLE_TIME = 50

export const DownloadCV = ({ className }: ComponentProps<'div'>) => {
	const t = useTranslations('Header.cv')

	const TARGET_TEXT = t('btnText')
	const TARGET_HREF = t('href')
	const TARGET_FILENAME = t('filename')
	const CHARS = '!@#$%^&*():{};|,.<>/?'
	const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

	const [text, setText] = useState(TARGET_TEXT)
	const [isHovered, setIsHovered] = useState(false)

	const scramble = () => {
		let pos = 0

		intervalRef.current = setInterval(() => {
			const scrambled = TARGET_TEXT.split('')
				.map((char, index) => {
					if (pos / CYCLES_PER_LETTER > index) {
						return char
					}

					const randomCharIndex = Math.floor(Math.random() * CHARS.length)
					const randomChar = CHARS[randomCharIndex]

					return randomChar
				})
				.join('')

			setText(scrambled)
			pos++

			if (pos >= TARGET_TEXT.length * CYCLES_PER_LETTER) {
				stopScramble()
			}
		}, SHUFFLE_TIME)
	}

	const stopScramble = () => {
		clearInterval(intervalRef.current || undefined)

		setText(TARGET_TEXT)
	}

	return (
		<motion.div
			className={className}
			style={{ display: 'inline-block' }}
		>
			<div
				className='h-8 group relative overflow-hidden cursor-not-allowed rounded-md border border-input bg-background px-4 py-1 font-medium uppercase text-foreground/50 min-w-48 text-sm shadow-xs flex items-center opacity-50'
			>
				<div className='relative z-10 flex items-center gap-2'>
					<FiDownload className='mr-2 shrink-0' />
					<span className='text-nowrap tracking-wide'>{TARGET_TEXT}</span>
				</div>
			</div>
		</motion.div>
	)
}
