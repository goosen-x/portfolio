'use client'

import { ReactNode } from 'react'
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogDescription
} from '@/components/ui/dialog'
import { OptimizedImage } from '@/components/ui/optimized-image'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { FaGithub } from 'react-icons/fa'
import { TbWorld } from 'react-icons/tb'

interface ModalDrawerProps {
	open: boolean
	setOpen: (open: boolean) => void
	project: {
		title: string
		description: string
		company: string
		image: string
		github?: string
		link?: string
		techs: { name: string; icon: ReactNode }[]
		about: string
	}
	children?: ReactNode
}

export const ModalDrawer = ({
	open,
	setOpen,
	project,
	children
}: ModalDrawerProps) => {
	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogContent className='max-w-3xl max-h-[90vh] overflow-y-auto'>
				<DialogHeader>
					<DialogTitle className='text-2xl font-bold'>
						{project.title}
					</DialogTitle>
					<DialogDescription className='text-muted-foreground'>
						{project.company}
					</DialogDescription>
				</DialogHeader>

				<div className='space-y-6'>
					{project.image && (
						<div className='relative w-full h-64 rounded-lg overflow-hidden'>
							<OptimizedImage
								src={project.image}
								alt={project.title}
								width={800}
								height={400}
								className='object-cover object-top'
							/>
						</div>
					)}

					<div>
						<h3 className='text-lg font-semibold mb-2'>{project.about}</h3>
						<p className='text-muted-foreground leading-relaxed'>
							{project.description}
						</p>
					</div>

					<div>
						<h4 className='text-sm font-semibold mb-3'>Технологии</h4>
						<div className='flex flex-wrap gap-2'>
							{project.techs.map(tech => (
								<Badge key={tech.name} variant='outline'>
									{tech.icon}
									<span className='ml-2'>{tech.name}</span>
								</Badge>
							))}
						</div>
					</div>

					<div className='flex gap-4'>
						{project.link && (
							<Button asChild variant='default'>
								<Link href={project.link} target='_blank'>
									<TbWorld className='w-4 h-4' />
									Посетить сайт
								</Link>
							</Button>
						)}
						{project.github && (
							<Button asChild variant='outline'>
								<Link href={project.github} target='_blank'>
									<FaGithub className='w-4 h-4' />
									GitHub
								</Link>
							</Button>
						)}
					</div>

					{children}
				</div>
			</DialogContent>
		</Dialog>
	)
}
