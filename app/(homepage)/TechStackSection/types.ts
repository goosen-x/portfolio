import { ReactNode } from 'react'

export type TechStackDataType = {
	name: string
	techs: {
		name: string
		icon: ReactNode
	}[]
}[]
