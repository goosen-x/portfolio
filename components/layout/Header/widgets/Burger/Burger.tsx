'use client'

import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu } from 'lucide-react'
import { Navigation } from '../Navigation/Navigation'
import { useState } from 'react'

export const Burger = () => {
	const [open, setOpen] = useState(false)

	return (
		<Sheet open={open} onOpenChange={setOpen}>
			<SheetTrigger asChild>
				<Button variant='outline' size='icon' className='shrink-0 md:hidden'>
					<Menu className='h-5 w-5' />
					<span className='sr-only'>Toggle navigation menu</span>
				</Button>
			</SheetTrigger>
			<SheetContent side='left'>
				<Navigation burger setOpen={setOpen} />
			</SheetContent>
		</Sheet>
	)
}
