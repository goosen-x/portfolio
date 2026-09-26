'use client'

import Image from 'next/image'
import { useState } from 'react'
import { PostCover } from './post-cover'

export function FeedImage({ src, title, sizes }: { src: string; title: string; sizes: string }) {
	const [failedSrc, setFailedSrc] = useState<string | null>(null)

	if (!src || failedSrc === src) {
		return <PostCover title={title} slug={title} className='absolute inset-0 rounded-none' />
	}

	return <Image
		src={src}
		alt={title}
		fill
		sizes={sizes}
		className='object-cover transition-transform duration-300 group-hover:scale-105'
		onError={() => setFailedSrc(src)}
	/>
}
