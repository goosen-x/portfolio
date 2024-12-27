'use client'

import { useRef, useState } from 'react'
import { FiDownload } from 'react-icons/fi'
import { motion } from 'framer-motion'

const CYCLES_PER_LETTER = 2
const SHUFFLE_TIME = 50

export const DownloadCV = () => {
	const TARGET_TEXT = 'DOWNLOAD CV'
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
		<motion.a
			className='h-8 group relative overflow-hidden cursor-pointer rounded-md border-[1px] border-input bg-background px-4 py-1 font-medium uppercase text-foreground hover:text-accent min-w-44 text-sm shadow-sm '
			href='https://drive.google.com/file/d/1E5VefyzV2i4S_mYLdaTo9GsFdyZ05fUt/view?usp=drive_link'
			target='_blank'
			whileHover={{
				scale: 1.025
			}}
			whileTap={{
				scale: 0.975
			}}
			onMouseEnter={scramble}
			onMouseLeave={stopScramble}
		>
			<div className='relative z-10 flex items-center gap-2'>
				<FiDownload className='mr-2' />
				<span>{text}</span>
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
				className='duration-300 absolute inset-0 z-0 scale-125 bg-gradient-to-t from-accent/0 from-40% via-accent/100 to-accent/0 to-60% opacity-0 transition-opacity group-hover:opacity-100'
			/>
		</motion.a>
	)
}
