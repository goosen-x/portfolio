import { TechStackDataType } from './types'
import { SiNextdotjs } from 'react-icons/si'
import { BiLogoTypescript } from 'react-icons/bi'

export const TechStackData: TechStackDataType = [
	{
		name: 'Frontend',

		techs: [
			{
				name: 'Typescript',
				icon: <BiLogoTypescript />
			},
			{
				name: 'React',
				icon: 'react'
			},
			{
				name: 'Next.js',
				icon: <SiNextdotjs />
			},
			{
				name: 'SvelteKit',
				icon: 'sveltekit'
			}
		]
	},
	{
		name: 'Backend',
		techs: [
			{
				name: 'Node.js',
				icon: 'nodejs'
			},
			{
				name: 'Express.js',
				icon: 'express'
			},
			{
				name: 'Nuxt.js',
				icon: 'nuxt'
			}
		]
	},
	{
		name: 'Other Tools',
		techs: [
			{
				name: 'Node.js',
				icon: 'nodejs'
			},
			{
				name: 'Express.js',
				icon: 'express'
			},
			{
				name: 'Nuxt.js',
				icon: 'nuxt'
			}
		]
	}
]
