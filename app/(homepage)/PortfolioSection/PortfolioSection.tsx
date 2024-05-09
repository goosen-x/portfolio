'use client'
import { LayoutGrid } from '@/components/ui/layout-grid'
import { cards } from './constants'

export const PortfolioSection = () => {
	return (
		<div className='h-screen py-20 w-full'>
			<LayoutGrid cards={cards} />
		</div>
	)
}
