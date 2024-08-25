import { Button } from '../../ui/button'
import { Navigation } from './widgets/Navigation/Navigation'
import { FiDownload } from 'react-icons/fi'
import { Burger } from './widgets/Burger/Burger'
import { useTranslations } from 'next-intl'
import ModeToggleBtn from '@/components/global/ModeToggleBtn'

export const Header = () => {
	const t = useTranslations('Index')
	return (
		<header className='sticky top-0 flex justify-between h-16 items-center gap-4 border-b bg-background px-4 md:px-6 z-50'>
			<Navigation />
			<Burger />
			<div className='flex items-center gap-4 md:gap-2 lg:gap-4'>
				<h1>{t('language')}</h1>
				<Button
					variant='outline'
					className=' transition hover:rotate-2 hover:scale-110 focus:outline-none active:scale-95 whitespace-nowrap'
				>
					<FiDownload className='mr-2' /> Download CV
				</Button>
				<ModeToggleBtn />
			</div>
		</header>
	)
}
