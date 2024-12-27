import { BiLogoJavascript, BiLogoTypescript } from 'react-icons/bi'
import { ProjectDataType } from './types'
import { FaCss3Alt, FaHtml5, FaNodeJs, FaSass } from 'react-icons/fa'
import { SiExpress, SiNextdotjs, SiStrapi } from 'react-icons/si'
import { TbAlpha } from 'react-icons/tb'
import { GrGraphQl } from 'react-icons/gr'
import { FaShieldAlt } from 'react-icons/fa'
import { SiPrisma } from 'react-icons/si'
import { SiTailwindcss } from 'react-icons/si'
import { BsFilterCircleFill } from 'react-icons/bs'
import { IoLogoVercel } from 'react-icons/io5'

export const ProjectsData: ProjectDataType[] = [
	{
		name: 'Moscow Business Academy',
		image: '/images/mba-experience-3.png',
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
		name: 'Digital Dyatel',
		image: '/images/digital-dyatel.png',
		link: 'https://www.nsp-healthshop.ru/',
		github: '/nsp-healthshop',
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
				icon: <BsFilterCircleFill className='-rotate-45' />
			},
			{
				name: 'NextAuth.js',
				icon: <FaShieldAlt />
			},
			{
				name: 'Prisma ORM',
				icon: <SiPrisma />
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
				icon: <BsFilterCircleFill className='-rotate-45' />
			},
			{
				name: 'Vercel',
				icon: <IoLogoVercel />
			},
			{
				name: 'Tailwind CSS',
				icon: <SiTailwindcss />
			}
		]
	}
]
