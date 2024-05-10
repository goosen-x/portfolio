import { TechStackSection } from '@/app/(homepage)/TechStackSection/TechStackSection'
import { PortfolioSection } from '@/app/(homepage)/PortfolioSection/PortfolioSection'
import { MainSection } from './(homepage)'
import { LayoutGrid } from '@/components/ui/layout-grid'
import { cards } from './(homepage)/PortfolioSection/constants'

export default function Home() {
	return (
		<main className='flex min-h-screen w-full flex-col'>
			<div className='mx-auto max-w-7xl min-h-screen px-4 py-12 text-zinc-50'>
				<MainSection />
				<TechStackSection />
				<PortfolioSection />
				<section className='h-screen py-20 w-full'>
					<LayoutGrid cards={cards} />
				</section>
			</div>
		</main>
	)
}
