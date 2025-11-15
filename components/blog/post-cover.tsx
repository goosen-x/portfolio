import { cn } from '@/lib/utils'
import { ComponentProps } from 'react'

type Props = {
	title: string
	slug: string
} & ComponentProps<'div'>

const coverPatterns = [
	{
		background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
		pattern: `radial-gradient(circle at 20% 80%, rgba(255,255,255,0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(255,255,255,0.1) 0%, transparent 50%),
              radial-gradient(circle at 50% 50%, rgba(0,0,0,0.1) 0%, transparent 70%)`
	},
	{
		background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
		pattern: `linear-gradient(45deg, rgba(255,255,255,0.1) 25%, transparent 25%, transparent 75%, rgba(255,255,255,0.1) 75%),
              linear-gradient(-45deg, rgba(0,0,0,0.05) 25%, transparent 25%, transparent 75%, rgba(0,0,0,0.05) 75%)`
	},
	{
		background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
		pattern: `radial-gradient(ellipse at top, rgba(255,255,255,0.2) 0%, transparent 70%),
              radial-gradient(ellipse at bottom, rgba(0,0,0,0.1) 0%, transparent 70%)`
	},
	{
		background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
		pattern: `conic-gradient(from 180deg at 50% 50%, rgba(255,255,255,0.15) 0deg, transparent 60deg, rgba(255,255,255,0.1) 120deg, transparent 180deg, rgba(255,255,255,0.05) 240deg, transparent 300deg, rgba(255,255,255,0.15) 360deg)`
	},
	{
		background: 'linear-gradient(135deg, #3494E6 0%, #EC6EAD 100%)',
		pattern: `radial-gradient(circle at 20% 30%, rgba(255,255,255,0.15) 0%, transparent 40%),
              radial-gradient(circle at 80% 70%, rgba(0,0,0,0.1) 0%, transparent 40%),
              radial-gradient(circle at 50% 50%, rgba(255,255,255,0.08) 0%, transparent 60%)`
	},
	{
		background: 'linear-gradient(135deg, #ee9ca7 0%, #ffdde1 100%)',
		pattern: `linear-gradient(30deg, rgba(255,255,255,0.2) 12%, transparent 12.5%, transparent 87%, rgba(255,255,255,0.2) 87.5%, rgba(255,255,255,0.2)),
              linear-gradient(150deg, rgba(255,255,255,0.2) 12%, transparent 12.5%, transparent 87%, rgba(255,255,255,0.2) 87.5%, rgba(255,255,255,0.2))`
	}
]

function getPatternForSlug(slug: string): (typeof coverPatterns)[0] {
	// Generate consistent pattern based on slug
	const index =
		slug.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) %
		coverPatterns.length
	return coverPatterns[index]
}

export function PostCover({ className, title, slug }: Props) {
	const pattern = getPatternForSlug(slug)

	return (
		<div
			className={cn(
				'relative overflow-hidden flex items-center justify-center p-4 sm:p-6 md:p-8 transition-transform duration-300 group-hover:scale-[1.02]',
				'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500',
				'rounded-lg',
				className
			)}
			style={{
				background: pattern.background
			}}
		>
			<div
				className='absolute inset-0 transition-opacity duration-300 group-hover:opacity-70'
				style={{
					backgroundImage: pattern.pattern
				}}
			/>
			<div className='relative z-10 text-center px-4'>
				<h2 className='text-white text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold drop-shadow-lg line-clamp-3'>
					{title}
				</h2>
			</div>
		</div>
	)
}
