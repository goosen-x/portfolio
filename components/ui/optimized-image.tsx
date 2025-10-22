'use client'

import Image, { ImageProps } from 'next/image'
import { useState } from 'react'
import { cn } from '@/lib/utils'

interface OptimizedImageProps extends Omit<ImageProps, 'onLoad'> {
	fallback?: string
}

export const OptimizedImage = ({
	src,
	alt,
	className,
	fallback,
	...props
}: OptimizedImageProps) => {
	const [isLoading, setIsLoading] = useState(true)
	const [error, setError] = useState(false)

	return (
		<div className={cn('relative overflow-hidden', className)}>
			<Image
				src={error && fallback ? fallback : src}
				alt={alt}
				className={cn(
					'duration-700 ease-in-out',
					isLoading
						? 'scale-110 blur-2xl grayscale'
						: 'scale-100 blur-0 grayscale-0',
					className
				)}
				onLoad={() => setIsLoading(false)}
				onError={() => setError(true)}
				{...props}
			/>
		</div>
	)
}
