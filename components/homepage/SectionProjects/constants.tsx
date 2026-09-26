import { BiLogoJavascript, BiLogoTypescript } from 'react-icons/bi'
import { ProjectDataType } from './types'
import { FaCss3Alt, FaHtml5, FaNodeJs, FaSass } from 'react-icons/fa'
import {
	SiNextdotjs,
	SiExpress,
	SiNginx,
	SiPm2,
	SiStrapi,
	SiPrisma,
	SiTailwindcss,
	SiRedis,
	SiTelegram,
	SiPayloadcms,
	SiPostgresql,
	SiVitest,
	SiDocker,
	SiGithubactions
} from 'react-icons/si'
import { GrGraphQl } from 'react-icons/gr'
import { TbAlpha } from 'react-icons/tb'
import { FaShieldAlt } from 'react-icons/fa'
import { BsFilterCircleFill } from 'react-icons/bs'
import { IoLogoVercel } from 'react-icons/io5'

export const ProjectsData: ProjectDataType[] = [
	{
		name: 'mba',
		brand: '#e53e3e',
		logo: '/images/logos/mba.png',
		title: 'Moscow Business Academy',
		image: '/images/mba-preview.png',
		screenshots: ['/images/mba-main-new.png', '/images/mba-program-new.png', '/images/mba-screen-1.png', '/images/mba-screen-2.png', '/images/mba-journal.png'],
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
			},
			{
				name: 'PostgreSQL',
				icon: <SiPostgresql />
			},
			{
				name: 'Docker',
				icon: <SiDocker />
			},
			{
				name: 'GitHub Actions',
				icon: <SiGithubactions />
			},
			{
				name: 'Nginx',
				icon: <SiNginx />
			}
		]
	},
	{
		name: 'komponenta',
		brand: '#1e2f8f',
		logo: '/images/logos/komponenta-icon.svg',
		title: 'Componenta',
		image: '/images/komponenta-preview.png',
		screenshots: ['/images/komponenta.png', '/images/komponenta-section-1.png', '/images/komponenta-section-2.png'],
		link: 'https://ub-komponenta.ru/',
		techs: [
			{
				name: 'JavaScript',
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
				name: 'Node.js',
				icon: <FaNodeJs />
			},
			{
				name: 'Express',
				icon: <SiExpress />
			},
			{
				name: 'AmoCRM',
				icon: <TbAlpha />
			},
			{
				name: 'Nginx',
				icon: <SiNginx />
			},
			{
				name: 'PM2',
				icon: <SiPm2 />
			}
		]
	},
	{
		name: 'digitalDyatel',
		brand: '#fe3e0e',
		logo: '/images/logos/digitalDyatel-icon.svg',
		title: 'Digital Dyatel',
		image: '/images/dyatel-preview.png',
		screenshots: ['/images/digital-dyatel.png', '/images/digitalDyatel-screen-1.png', '/images/digitalDyatel-team-gallery-blur.png', '/images/digitalDyatel-reviews-gallery-blur.png'],
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
			},
			{
				name: 'Tailwind CSS',
				icon: <SiTailwindcss />
			}
		]
	},
	{
		name: 'healthshop',
		brand: '#0f9a6e',
		logo: '/images/logos/healthshop-icon.png',
		title: 'HealthShop',
		image: '/images/nsp-preview.png',
		screenshots: ['/images/healthshop-home-16x10.png', '/images/healthshop-filters-16x10.png', '/images/healthshop-cart-16x10.png'],
		link: '',
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
			}
		]
	},
	{
		name: 'autozorro',
		brand: '#f9c623',
		logo: '/images/logos/autozorro.png',
		title: 'AutoZorro',
		image: '/images/autozorro-promo-full.png',
		screenshots: ['/images/autozorro-screen-1.png', '/images/autozorro-terms.png', '/images/autozorro-preview.png', '/images/autozorro-dashboard-redacted.png', '/images/autozorro-news.png', '/images/autozorro-payout-redacted.png'],
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
		brand: '#f28c1b',
		logo: '/images/logos/rentmetal-icon.png',
		title: 'RentMetal',
		image: '/images/rentmetal-preview-clean.png',
		screenshots: ['/images/rentmetal-home-clean.png', '/images/rentmetal-screen-1-clean.png', '/images/rentmetal-screen-2-clean.png', '/images/rentmetal-screen-3-clean.png', '/images/rentmetal-delivery-calculator.png'],
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
			},
			{
				name: 'Tailwind CSS',
				icon: <SiTailwindcss />
			}
		]
	},
	{
		name: 'businessPartner',
		brand: '#00e563',
		logo: '/images/logos/businessPartner-icon.png',
		title: 'Business Partner',
		image: '/images/businessPartner-home-top.png',
		screenshots: ['/images/businessPartner-home-top.png', '/images/businessPartner-screen-1.png', '/images/businessPartner-screen-2.png', '/images/businessPartner-screen-3.png', '/images/businessPartner-article-v2.png'],
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
		brand: '#3b82f6',
		logo: '/images/logos/pixeltool.svg',
		title: 'PixelTool',
		image: '/images/pixeltool-tall.png',
		screenshots: ['/images/pixeltool-home.png', '/images/pixeltool-screen-1.png', '/images/pixeltool-qr.png', '/images/pixeltool-password.png', '/images/pixeltool-compress.png', '/images/pixeltool-screen-2.png'],
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
