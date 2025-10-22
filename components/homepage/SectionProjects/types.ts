import { ReactNode } from 'react'

export type ProjectDataType = {
	name: string
	title: string
	techs: {
		name: string
		icon: ReactNode
	}[]
	image: string
	link?: string
	github?: string
}
