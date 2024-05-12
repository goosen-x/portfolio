import { Block } from '@/components/Block'
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
import { BiLogoJavascript, BiLogoTypescript } from 'react-icons/bi'
import { FaGithub, FaReact } from 'react-icons/fa'
import { SiRedux } from 'react-icons/si'
import { ProjectDataType } from '../types'

type Props = {
	project: ProjectDataType
}
export const ProjectBlock = ({ project }: Props) => {
	// const techs = [
	// 	{
	// 		name: 'Javascript',
	// 		icon: <BiLogoJavascript />,
	// 		percent: 95
	// 	},
	// 	{
	// 		name: 'Typescript',
	// 		icon: <BiLogoTypescript />,
	// 		percent: 95
	// 	},
	// 	{
	// 		name: 'React',
	// 		icon: <FaReact />,
	// 		percent: 90
	// 	},
	// 	{
	// 		name: 'Redux',
	// 		icon: <SiRedux />,
	// 		percent: 70
	// 	}
	// ]

	return (
		<div className='flex flex-col col-span-12 md:col-span-6 p-0 relative overflow-hidden'>
			<Drawer>
				<DrawerTrigger>
					<Block className='pb-0 rounded-t-2xl overflow-hidden relative'>
						<Image
							className='mx-auto object-cover object-[10rem 10rem] h-64 w-[85%] group p-0 rounded-t-lg group-hover/block:scale-105 group-hover/block:rotate-1 transition-all'
							src={project.image}
							width={100}
							height={200}
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
				<FaGithub className='text-foreground text-4xl' />
			</div>
			<ul className='flex flex-wrap gap-2 mb-4'>
				{project.techs.map(tech => (
					<li className='flex items-center gap-2' key={tech.name}>
						<Badge>
							{tech.icon}
							<span className='ml-2'>{tech.name}</span>
						</Badge>
					</li>
				))}
			</ul>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, quam
				sit natus unde magnam incidunt? Similique enim adipisci eveniet ullam!
				Nulla aspernatur, sapiente minima vitae deserunt rerum! Eum, distinctio
				provident!
			</p>
			<Link className='hover:underline hover:text-blue-300' href='/'>
				{'Learn more >'}
			</Link>
		</div>
	)
}
