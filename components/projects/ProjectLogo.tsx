import Image from 'next/image'
import { cn } from '@/lib/utils'

type Props = {
	src: string
	alt: string
	size?: 'sm' | 'lg' | 'xl'
	className?: string
}

export function ProjectLogo({ src, alt, size = 'sm', className }: Props) {
	return (
		<Image
			src={src}
			alt={alt}
			width={size === 'sm' ? 40 : size === 'lg' ? 64 : 96}
			height={size === 'sm' ? 40 : size === 'lg' ? 64 : 96}
			unoptimized
			className={cn('shrink-0 object-contain', size === 'sm' ? 'size-10 rounded-lg' : size === 'lg' ? 'size-12 rounded-xl sm:size-16' : 'size-16 rounded-2xl sm:size-20', className)}
		/>
	)
}
