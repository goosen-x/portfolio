import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'
import { ProjectLogo } from '@/components/projects/ProjectLogo'
import { ProjectDataType } from '../types'
import { BentoTileConfig } from '../bento-layout'

type Props = {
	project: ProjectDataType
	locale: string
	name: string
	description: string
	moreLabel: string
	config: BentoTileConfig
	kind?: string
}

const shot = 'object-cover object-top transition-all duration-[3000ms] ease-in-out group-hover:object-bottom'
const base = '@container group relative flex min-h-[16.25rem] min-w-0 cursor-pointer flex-col overflow-hidden rounded-lg border-zinc-700 bg-card transition-colors dark:border xl:min-h-0'

export function BentoTile({ project, locale, name, description, moreLabel, config, kind = '' }: Props) {
	const href = `/${locale}/projects/${project.name}`

	if (config.mode === 'icon') {
		const stack = (
			<ul className='flex flex-wrap gap-x-3 gap-y-2 text-foreground/60 [&_svg]:size-[1.125rem]'>
				{project.techs.slice(0, 5).map(tech => <li key={tech.name} title={tech.name}>{tech.icon}</li>)}
			</ul>
		)

		return (
			<Link href={href} className={cn(base, 'min-h-48 gap-4 p-4', config.span)}>
				<div className='flex items-center gap-3'>
					<ProjectLogo src={project.logo} alt={`${name} logo`} />
					<div className='min-w-0'>
						<h3 className='font-bold leading-tight'>{name}</h3>
						<p className='text-xs text-foreground/60'>{kind}</p>
					</div>
				</div>
				<div className='border-t border-border/50 pt-4'>{stack}</div>
				<span className='mt-auto inline-flex items-center gap-1 text-sm text-primary'>{moreLabel}<ArrowUpRight aria-hidden='true' className='size-4 shrink-0' /></span>
			</Link>
		)
	}

	if (config.mode === 'preview') {
		const dense = config.dense
		return (
			<Link href={href} className={cn(base, config.span)}>
				<div className={cn('relative m-3 mb-0 flex-1 overflow-hidden rounded-md border border-border/50', dense ? 'min-h-40 xl:min-h-0' : 'min-h-48')}>
					<Image className={shot} src={project.image} fill sizes='(max-width: 768px) 100vw, 66vw' alt={name} />
				</div>
				<div className={cn('flex flex-col gap-1.5', dense ? 'px-3 py-2.5' : 'p-4')}>
					<div className='grid grid-cols-[auto_minmax(0,1fr)] items-center gap-3 @min-[22rem]:grid-cols-[auto_minmax(0,1fr)_auto]'>
						<ProjectLogo src={project.logo} alt={`${name} logo`} className={dense ? 'size-8 rounded-md' : undefined} />
						<h3 className={cn('min-w-0 break-words font-bold', dense ? 'text-base' : 'text-lg sm:text-xl')}>{name}</h3>
						<span className='col-span-2 inline-flex items-center justify-self-end gap-1 text-sm text-primary @min-[22rem]:col-span-1'>{moreLabel}<ArrowUpRight aria-hidden='true' className='size-4 shrink-0' /></span>
					</div>
					<p className={cn('line-clamp-1 text-sm text-foreground/70', dense && 'xl:hidden')}>{description}</p>
				</div>
			</Link>
		)
	}

	return (
		<Link href={href} className={cn(base, config.span)}>
			<Image className={shot} src={project.image} fill sizes='(max-width: 768px) 100vw, 33vw' alt={name} />
			<div className='relative m-3 mt-auto flex flex-col gap-2 rounded-md border border-border/60 bg-background/90 p-4 shadow-lg backdrop-blur-md'>
				<div className='flex items-center gap-3'>
					<ProjectLogo src={project.logo} alt={`${name} logo`} />
					<h3 className='text-lg font-bold text-foreground sm:text-xl'>{name}</h3>
					<ArrowUpRight className='ml-auto size-5 shrink-0 text-foreground opacity-50 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100' />
				</div>
				<p className='line-clamp-2 text-sm text-foreground/70'>{description}</p>
				<ul className='hidden max-h-0 flex-wrap gap-2 overflow-hidden opacity-0 transition-all duration-500 group-hover:max-h-24 group-hover:opacity-100 lg:flex'>
					{project.techs.slice(0, 5).map(tech => (
						<li key={tech.name}>
							<Badge className='text-foreground/70' variant='outline'>
								{tech.icon}
								<span className='ml-2'>{tech.name}</span>
							</Badge>
						</li>
					))}
				</ul>
			</div>
		</Link>
	)
}
