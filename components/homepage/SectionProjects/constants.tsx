import { BiLogoJavascript, BiLogoTypescript } from 'react-icons/bi'
import { ProjectDataType } from './types'
import { FaCss3Alt, FaHtml5, FaNodeJs, FaSass } from 'react-icons/fa'
import {
	SiExpress,
	SiNextdotjs,
	SiStrapi,
	SiPrisma,
	SiTailwindcss,
	SiRedis,
	SiTelegram,
	SiPayloadcms,
	SiPostgresql,
	SiVitest
} from 'react-icons/si'
import { TbAlpha } from 'react-icons/tb'
import { GrGraphQl } from 'react-icons/gr'
import { FaShieldAlt } from 'react-icons/fa'
import { BsFilterCircleFill } from 'react-icons/bs'
import { IoLogoVercel } from 'react-icons/io5'

export const ProjectsData: ProjectDataType[] = [
	{
		name: 'mba',
		title: 'Moscow Business Academy',
		image: '/images/mba-preview.png',
		link: 'https://moscow.mba/',
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
		name: 'komponenta',
		title: 'Komponenta',
		image: '/images/komponenta-preview.png',
		link: 'https://ub-komponenta.ru/',
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
		name: 'digitalDyatel',
		title: 'Digital Dyatel',
		image: '/images/dyatel-preview.png',
		link: 'https://digitaldyatel.ru',
		// github: '/',
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
				name: 'shadcn/ui',
				icon: <BsFilterCircleFill className='-rotate-45' />
			}
		]
	},
	{
		name: 'healthshop',
		title: 'HealthShop',
		image: '/images/nsp-preview.png',
		link: 'https://www.nsp-healthshop.ru/',
		github: '',
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
				name: 'shadcn/ui',
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
	},
	{
		name: 'autozorro',
		title: 'AutoZorro',
		image: '/images/autozorro-preview.png',
		link: 'https://autozorro.club',
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
				name: 'shadcn/ui',
				icon: <BsFilterCircleFill className='-rotate-45' />
			},
			{
				name: 'Tailwind CSS',
				icon: <SiTailwindcss />
			},
			{
				name: 'Prisma',
				icon: <SiPrisma />
			},
			{
				name: 'Redis',
				icon: <SiRedis />
			},
			{
				name: 'Telegram API',
				icon: <SiTelegram />
			}
		]
	},
	{
		name: 'rentmetal',
		title: 'Rent Metal',
		image: '/images/rentmetal-preview.png',
		link: 'https://rt-metal.ru',
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
				name: 'Payload CMS',
				icon: <SiPayloadcms />
			},
			{
				name: 'PostgreSQL',
				icon: <SiPostgresql />
			},
			{
				name: 'GraphQL',
				icon: <GrGraphQl />
			},
			{
				name: 'shadcn/ui',
				icon: <BsFilterCircleFill className='-rotate-45' />
			}
		]
	},
	{
		name: 'businessPartner',
		title: 'Business Partner',
		image: '/images/business-partner-preview.png',
		link: 'https://bp.business',
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
				name: 'Strapi',
				icon: <SiStrapi />
			},
			{
				name: 'shadcn/ui',
				icon: <BsFilterCircleFill className='-rotate-45' />
			},
			{
				name: 'Tailwind CSS',
				icon: <SiTailwindcss />
			}
		]
	},
	{
		name: 'pixeltool',
		title: 'PixelTool',
		image: '/images/pixeltool-preview.png',
		link: 'https://pixeltool.pro',
		github: 'https://github.com/goosen-x/pixeltool',
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
				name: 'shadcn/ui',
				icon: <BsFilterCircleFill className='-rotate-45' />
			},
			{
				name: 'Tailwind CSS',
				icon: <SiTailwindcss />
			},
			{
				name: 'Vitest',
				icon: <SiVitest />
			}
		]
	}
]
