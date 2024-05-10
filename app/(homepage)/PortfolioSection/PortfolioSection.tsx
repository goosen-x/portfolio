'use client'

import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger
} from '@/components/ui/drawer'

import { Block } from '@/components/Block'
import { Button } from '@/components/ui/button'
import { SectionTitle } from '@/components/global/SectionTitle'

export const PortfolioSection = () => {
	return (
		<section className='grid grid-cols-12 gap-4 mb-24' id='main'>
			<SectionTitle className='col-span-12' title='Portfolio' />
			<Block className='col-span-12 md:col-span-6'>lsdjflsk</Block>
			<Block className='col-span-12 md:col-span-6'>lsdjflsk</Block>
			<Block className='col-span-12 md:col-span-6'>lsdjflsk</Block>
			<Block className='col-span-12 md:col-span-6'>lsdjflsk</Block>
			<Block className='col-span-12 md:col-span-6'>lsdjflsk</Block>
			<Block className='col-span-12 md:col-span-6'>lsdjflsk</Block>
			<Drawer>
				<DrawerTrigger>Open</DrawerTrigger>
				<DrawerContent>
					<DrawerHeader>
						<DrawerTitle>Are you absolutely sure?</DrawerTitle>
						<DrawerDescription>This action cannot be undone.</DrawerDescription>
					</DrawerHeader>
					<DrawerFooter>
						<Button>Submit</Button>
						<DrawerClose>
							<Button variant='outline'>Cancel</Button>
						</DrawerClose>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
		</section>
	)
}
