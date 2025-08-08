'use client'

import { useRef, useState } from 'react'
import { FiDownload } from 'react-icons/fi'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'

const CYCLES_PER_LETTER = 2
const SHUFFLE_TIME = 50

export const DownloadCV = () => {
	const t = useTranslations('Header.cv')

	const TARGET_TEXT = t('btnText')
	const TARGET_HREF = t('href')
	const CHARS = '!@#$%^&*():{};|,.<>/?'
	const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

	const [text, setText] = useState(TARGET_TEXT)

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
			style={{ display: 'inline-block' }}
			whileHover={{
				scale: 1.025
			}}
			whileTap={{
				scale: 0.975
			}}
		>
			<a
				className='h-8 group relative overflow-hidden cursor-pointer rounded-md border border-input bg-background px-4 py-1 font-medium uppercase text-foreground hover:text-accent min-w-48 text-sm shadow-xs flex items-center'
				href={TARGET_HREF}
				target='_blank'
				rel='noopener noreferrer'
				onMouseEnter={scramble}
				onMouseLeave={stopScramble}
			>
				<div className='relative z-10 flex items-center gap-2'>
					<FiDownload className='mr-2 shrink-0' />
					<span className='text-nowrap tracking-wide'>{text}</span>
				</div>
				<motion.span
					initial={{
						y: '100%'
					}}
					animate={{
						y: '-100%'
					}}
					transition={{
						repeat: Infinity,
						repeatType: 'mirror',
						duration: 1,
						ease: 'linear'
					}}
					className='duration-300 absolute inset-0 z-0 scale-125 bg-linear-to-t from-accent/0 from-40% via-accent to-accent/0 to-60% opacity-0 transition-opacity group-hover:opacity-100'
				/>
			</a>
		</motion.div>
	)
}
