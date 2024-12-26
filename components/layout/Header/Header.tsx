import { Navigation } from './widgets/Navigation/Navigation'
import { Burger } from './widgets/Burger/Burger'
import { DownloadCV } from '@/components/global/DownloadCV'
import { LanguageSelect } from '@/components/global/LanguageSelect'
import ThemeToggle from '@/components/global/ThemeToggle'

type Props = {
	locale: string
}

export const Header = ({ locale }: Props) => {
	return (
		<header className='sticky top-0 flex justify-between h-16 items-center gap-4 border-b bg-background px-4 md:px-6 z-50'>
			<Navigation />
			<Burger />
			<div className='flex items-center gap-4 md:gap-2 lg:gap-4'>
				<DownloadCV />
				<LanguageSelect locale={locale} />
				<ThemeToggle />
			</div>
		</header>
	)
}
