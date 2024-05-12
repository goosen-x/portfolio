import { BiLogoJavascript, BiLogoTypescript } from 'react-icons/bi'
import { ProjectDataType } from './types'
import { FaCss3Alt, FaHtml5, FaNodeJs, FaReact, FaSass } from 'react-icons/fa'
import { SiExpress, SiNextdotjs, SiStrapi } from 'react-icons/si'
import { TbAlpha } from 'react-icons/tb'
import { GrGraphQl } from 'react-icons/gr'

export const ProjectsData: ProjectDataType[] = [
	{
		name: 'Moscow Business Academy',
		image: '/images/mba.png',
		link: 'https://moscow.mba/',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.',
		techs: [
			{
				name: 'Typescript',
				icon: <BiLogoTypescript />
			},
			{
				name: 'Next.js',
				icon: <SiNextdotjs />
			},
			{
				name: 'GraphQL',
				icon: <GrGraphQl />
			},
			{
				name: 'SASS',
				icon: <FaSass />
			},
			{
				name: 'Node.js',
				icon: <FaNodeJs />
			},
			{
				name: 'Strapi',
				icon: <SiStrapi />
			}
		]
	},
	{
		name: 'Komponenta',
		image: '/images/komponenta.png',
		link: 'https://www.komponenta-bfl.ru/',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.',
		techs: [
			{
				name: 'Javascript',
				icon: <BiLogoJavascript />
			},
			{
				name: 'HTML',
				icon: <FaHtml5 />
			},
			{
				name: 'CSS',
				icon: <FaCss3Alt />
			},
			{
				name: 'Express.js',
				icon: <SiExpress />
			},
			{
				name: 'AMO CRM',
				icon: <TbAlpha />
			}
		]
	},
	{
		name: 'Project 3',
		image: '/images/heroes.png',
		link: 'https://www.komponenta-bfl.ru/',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.',
		techs: [
			{
				name: 'Javascript',
				icon: <BiLogoJavascript />
			},
			{
				name: 'Typescript',
				icon: <BiLogoTypescript />
			},
			{
				name: 'React',
				icon: <FaReact />
			}
		]
	},
	{
		name: 'Project 4',
		image: '/images/heroes.png',
		link: '/project-4',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.',
		techs: [
			{
				name: 'Javascript',
				icon: <BiLogoJavascript />
			},
			{
				name: 'Typescript',
				icon: <BiLogoTypescript />
			},
			{
				name: 'React',
				icon: <FaReact />
			}
		]
	}
]
