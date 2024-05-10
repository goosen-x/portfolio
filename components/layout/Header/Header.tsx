import { Button } from '../../ui/button'
import { CircleUser, Menu, Package2, Search } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Input } from '../../ui/input'
import { Navigation } from './widgets/Navigation/Navigation'
import { ModeToggle } from '../../ThemeToggle'
import { BsLightningCharge } from 'react-icons/bs'

import { FiDownload } from 'react-icons/fi'

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

export const Header = () => {
	return (
		<header className='sticky top-0 flex justify-between h-16 items-center gap-4 border-b bg-background px-4 md:px-6'>
			<Navigation />
			<Sheet>
				<SheetTrigger asChild>
					<Button variant='outline' size='icon' className='shrink-0 md:hidden'>
						<Menu className='h-5 w-5' />
						<span className='sr-only'>Toggle navigation menu</span>
					</Button>
				</SheetTrigger>
				<SheetContent side='left'>
					<Navigation burger />
				</SheetContent>
			</Sheet>

			<div className='flex items-center gap-4 md:gap-2 lg:gap-4'>
				<Button
					variant='outline'
					className=' transition hover:rotate-2 hover:scale-110 focus:outline-none active:scale-95 whitespace-nowrap'
				>
					<FiDownload className='mr-2' /> Download CV
				</Button>
				<ModeToggle />
				{/* <DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant='secondary' size='icon' className='rounded-full'>
							<CircleUser className='h-5 w-5' />
							<span className='sr-only'>Toggle user menu</span>
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align='end'>
						<DropdownMenuLabel>My Account</DropdownMenuLabel>
						<DropdownMenuSeparator />
						<DropdownMenuItem>Settings</DropdownMenuItem>
						<DropdownMenuItem>Support</DropdownMenuItem>
						<DropdownMenuSeparator />
						<DropdownMenuItem>Logout</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu> */}
			</div>
		</header>
	)
}
