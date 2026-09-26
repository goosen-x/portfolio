import { ReactNode } from 'react'

export type ProjectDataType = {
	name: string
	title: string
	techs: {
		name: string
		icon: ReactNode
	}[]
	image: string
	logo: string
	/** Основной цвет проекта */
	brand: string
	screenshots: string[]
	link?: string
	github?: string
}
