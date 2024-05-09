import { TechStackSection } from '@/app/(homepage)/TechStackSection/TechStackSection'
import { PortfolioSection } from '@/app/(homepage)/PortfolioSection/PortfolioSection'
import { MainSection } from './(homepage)'

export default function Home() {
	return (
		<main className='flex min-h-screen w-full flex-col'>
			<div className='mx-auto max-w-7xl min-h-screen px-4 py-12 text-zinc-50'>
				<MainSection />
				<TechStackSection />
				<PortfolioSection />
			</div>
		</main>
	)
}
