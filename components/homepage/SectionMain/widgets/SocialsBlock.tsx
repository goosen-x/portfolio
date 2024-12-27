import { cn } from '@/lib/utils'

import { Block } from '@/components/ui/block'
import Link from 'next/link'
import { socials } from '@/lib/constants/socials'

export const SocialsBlock = () => {
	return (
		<>
			{socials.map((social, idx) => (
				<Block
					className={cn(
						`p-0 col-span-6 md:col-span-2 min-h-32 hover-scale-105 hover:-translate-y-1 transition-transform duration-100`,
						`${idx === 0 || idx === 3 ? 'bg-accent text-zinc-50' : ''}`
					)}
					key={social.name}
				>
					<Link
						className='grid h-full place-content-center text-3xl group-hover/block:text-5xl transition-all duration-200'
						href={social.href}
						target='_blank'
					>
						{social.icon}
					</Link>
				</Block>
			))}
		</>
	)
}
