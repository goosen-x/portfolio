import { Button } from '../../ui/button'
import { Navigation } from './widgets/Navigation/Navigation'
import { ModeToggle } from '../../ThemeToggle'
import { FiDownload } from 'react-icons/fi'
import { Burger } from './widgets/Burger/Burger'

export const Header = () => {
	return (
		<header className='sticky top-0 flex justify-between h-16 items-center gap-4 border-b bg-background px-4 md:px-6 z-50'>
			<Navigation />
			<Burger />
			<div className='flex items-center gap-4 md:gap-2 lg:gap-4'>
				<Button
					variant='outline'
					className=' transition hover:rotate-2 hover:scale-110 focus:outline-none active:scale-95 whitespace-nowrap'
				>
					<FiDownload className='mr-2' /> Download CV
				</Button>
				<ModeToggle />
			</div>
		</header>
	)
}
