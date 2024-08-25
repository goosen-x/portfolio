import { BiLogoJavascript, BiLogoTypescript } from 'react-icons/bi'
import { ProjectDataType } from './types'
import { FaCss3Alt, FaHtml5, FaNodeJs, FaReact, FaSass } from 'react-icons/fa'
import { SiExpress, SiNextdotjs, SiStrapi } from 'react-icons/si'
import { TbAlpha } from 'react-icons/tb'
import { GrGraphQl } from 'react-icons/gr'

export const ProjectsData: ProjectDataType[] = [
	{
		name: 'Moscow Business Academy',
		image: '/images/mba-2.png',
		link: 'https://moscow.mba/',
		description:
			'A real-time coaching app for Moscow Business Academy. Built with Next.js, GraphQL, and Strapi.',
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
		name: 'Componenta',
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
		name: 'Dobrostok',
		image: '/images/dobrostok.png',
		link: 'https://www.nsp-healthshop.ru/',
		github: '/nsp-healthshop',
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
		name: 'HealthShop',
		image: '/images/natures.png',
		link: 'https://www.nsp-healthshop.ru/',
		github: '',
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
				name: 'Chadcn ui',
				icon: <GrGraphQl />
			},
			{
				name: 'Tailwind CSS',
				icon: <FaSass />
			},
			{
				name: 'v0',
				icon: <FaNodeJs />
			},
			{
				name: 'JSON',
				icon: <SiStrapi />
			}
		]
	}
]
