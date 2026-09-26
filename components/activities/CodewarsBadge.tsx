'use client'

import Image from 'next/image'
import { useState } from 'react'

export function CodewarsBadge({ fallbackLabel }: { fallbackLabel: string }) {
	const [failed, setFailed] = useState(false)

	if (failed) {
		return (
			<a href='https://www.codewars.com/users/gysen' target='_blank' rel='noopener noreferrer' className='text-sm underline underline-offset-4'>
				{fallbackLabel} ↗
			</a>
		)
	}

	return (
		<Image src='https://www.codewars.com/users/gysen/badges/large' alt='Codewars Badge' width={400} height={60} className='max-w-full h-auto' unoptimized onError={() => setFailed(true)} />
	)
}
