import { TechStackDataType } from './types'

import { GrGraphQl } from 'react-icons/gr'
import {
	BiLogoPostgresql,
	BiLogoTypescript,
	BiLogoJavascript
} from 'react-icons/bi'
import {
	SiJest,
	SiStrapi,
	SiMongodb,
	SiSequelize,
	SiJsonwebtokens,
	SiExpress,
	SiTailwindcss,
	SiRedux,
	SiNextdotjs,
	SiRadixui,
	SiPrisma,
	SiPostman
} from 'react-icons/si'
import {
	FaGithub,
	FaGitlab,
	FaGitAlt,
	FaSass,
	FaCss3Alt,
	FaHtml5,
	FaBootstrap,
	FaNodeJs,
	FaReact
} from 'react-icons/fa'
import { CgFigma } from 'react-icons/cg'
import { BsFilterCircleFill } from 'react-icons/bs'
// import { SiPostman } from "react-icons/si";

export const TechStackData: TechStackDataType = [
	{
		name: 'Frontend',

		techs: [
			{
				name: 'Javascript',
				icon: <BiLogoJavascript />,
				percent: 95
			},
			{
				name: 'Typescript',
				icon: <BiLogoTypescript />,
				percent: 95
			},
			{
				name: 'React',
				icon: <FaReact />,
				percent: 90
			},
			{
				name: 'Redux',
				icon: <SiRedux />,
				percent: 70
			},
			{
				name: 'Next.js',
				icon: <SiNextdotjs />,
				percent: 95
			},
			{
				name: 'GraphQL',
				icon: <GrGraphQl />,
				percent: 80
			},
			{
				name: 'HTML',
				icon: <FaHtml5 />,
				percent: 95
			},
			{
				name: 'CSS',
				icon: <FaCss3Alt />,
				percent: 95
			},
			{
				name: 'SASS',
				icon: <FaSass />,
				percent: 95
			},
			{
				name: 'Bootstrap',
				icon: <FaBootstrap />,
				percent: 80
			},
			{
				name: 'Tailwind',
				icon: <SiTailwindcss />,
				percent: 85
			},
			{
				name: 'Chadcn ui',
				icon: <BsFilterCircleFill className='-rotate-45' />,
				percent: 85
			},
			{
				name: 'RadixUI',
				icon: <SiRadixui />,
				percent: 85
			}
		]
	},
	{
		name: 'Backend',
		techs: [
			{
				name: 'Node.js',
				icon: <FaNodeJs />,
				percent: 85
			},
			{
				name: 'Express.js',
				icon: <SiExpress />,
				percent: 75
			},
			{
				name: 'JSON Web Tokens',
				icon: <SiJsonwebtokens />,
				percent: 80
			},
			{
				name: 'PostgreSQL',
				icon: <BiLogoPostgresql />,
				percent: 90
			},
			{
				name: 'Prisma ORM',
				icon: <SiPrisma />,
				percent: 85
			},
			{
				name: 'Sequelize',
				icon: <SiSequelize />,
				percent: 80
			},
			{
				name: 'MongoDB',
				icon: <SiMongodb />,
				percent: 80
			},
			{
				name: 'Strapi',
				icon: <SiStrapi />,
				percent: 90
			}
		]
	},
	{
		name: 'Other Tools',
		techs: [
			{
				name: 'Jest',
				icon: <SiJest />,
				percent: 90
			},
			{
				name: 'Git',
				icon: <FaGitAlt />,
				percent: 90
			},
			{
				name: 'GitHub',
				icon: <FaGithub />,
				percent: 90
			},
			{
				name: 'GitLab',
				icon: <FaGitlab />,
				percent: 90
			},
			{
				name: 'Figma',
				icon: <CgFigma />,
				percent: 90
			},
			{
				name: 'Postman',
				icon: <SiPostman />,
				percent: 90
			}
		]
	}
]
