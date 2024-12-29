'use client'

import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	DrawerPortal,
	DrawerTitle,
	DrawerTrigger
} from '@/components/ui/drawer'
import { useMediaQuery } from '@/lib/hooks/useMediaQuery'
import { Dispatch, SetStateAction } from 'react'
import { Button } from '../ui/button'
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger
} from '../ui/dialog'
import { useTranslations } from 'next-intl'

type Props = {
	open: boolean
	setOpen: Dispatch<SetStateAction<boolean>>
	children?: React.ReactNode
}

export const ModalDrawer = ({ open, setOpen, children }: Props) => {
	const t = useTranslations('SectionMain')
	const isDesktop = useMediaQuery('(min-width: 768px)')

	const title = 'Project name'
	const description =
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.'

	return (
		<>
			{isDesktop ? (
				<Dialog open={open} onOpenChange={setOpen}>
					<DialogContent className='sm:max-w-[425px]'>
						<DialogHeader>
							<DialogTitle>{title}</DialogTitle>
							<DialogDescription>{description}</DialogDescription>
						</DialogHeader>
					</DialogContent>
				</Dialog>
			) : (
				<Drawer open={open} onOpenChange={setOpen}>
					<DrawerContent>
						<DrawerHeader>
							<DrawerTitle>{title}</DrawerTitle>
							<DrawerDescription>{description}</DrawerDescription>
						</DrawerHeader>
						<DrawerFooter>
							<DrawerClose>
								<Button variant='outline'>
									{t('language') === 'ru' ? 'Закрыть' : 'Close'}
								</Button>
							</DrawerClose>
						</DrawerFooter>
					</DrawerContent>
				</Drawer>
			)}
		</>
	)
}
