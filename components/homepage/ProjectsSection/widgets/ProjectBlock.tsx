import { Block } from '@/components/ui/block'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger
} from '@/components/ui/drawer'
import Image from 'next/image'
import Link from 'next/link'
import { FaGithub } from 'react-icons/fa'
import { ProjectDataType } from '../types'
import { TbWorld } from 'react-icons/tb'

type Props = {
	project: ProjectDataType
}
export const ProjectBlock = ({ project }: Props) => {
	return (
		<div className='flex flex-col col-span-12 md:col-span-6 p-0 relative overflow-hidden'>
			<Drawer>
				<DrawerTrigger>
					<Block className='pb-0 rounded-t-2xl overflow-hidden relative'>
						<Image
							className='mx-auto object-cover object-top h-64 w-[85%] group p-0 rounded-t-lg group-hover/block:scale-105 group-hover/block:rotate-1 transition-all'
							src={project.image}
							width={1000}
							height={2000}
							alt='World map'
						/>
					</Block>
				</DrawerTrigger>
				<DrawerContent>
					<DrawerHeader>
						<DrawerTitle>Are you absolutely sure?</DrawerTitle>
						<DrawerDescription>This action cannot be undone.</DrawerDescription>
					</DrawerHeader>
					<DrawerFooter>
						<Button>Submit</Button>
						<DrawerClose>
							<Button variant='outline'>Cancel</Button>
						</DrawerClose>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
			<div className='flex justify-between items-center gap-4 my-4'>
				<p className='text-foreground text-2xl font-bold whitespace-nowrap'>
					{project.name}
				</p>
				<span className='h-px w-full bg-foreground grow' />
				<div className='shrink-0 flex items-center gap-2'>
					{project.github && (
						<Link href={project.github} target='_blank'>
							<FaGithub className='text-foreground text-2xl' />
						</Link>
					)}
					{project.link && (
						<Link href={project.link} target='_blank'>
							<TbWorld className='text-foreground text-2xl' />
						</Link>
					)}
				</div>
			</div>
			<ul className='flex flex-wrap gap-2 mb-4'>
				{project.techs.map(tech => (
					<li className='flex items-center gap-2' key={tech.name}>
						<Badge className='text-foreground/70' variant='outline'>
							{tech.icon}
							<span className='ml-2'>{tech.name}</span>
						</Badge>
					</li>
				))}
			</ul>
			<p className='line-clamp-2 text-foreground/70'>{project.description}</p>
			<Button
				className='text-foreground/70 hover:underline hover:text-blue-300 w-fit p-0'
				variant='link'
			>
				{'Learn more >'}
			</Button>
		</div>
	)
}
