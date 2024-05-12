import { TechStackSection } from '@/app/(homepage)/TechStackSection/TechStackSection'
import { ProjectsSection } from '@/app/(homepage)/PortfolioSection/ProjectsSection'
import { MainSection } from './(homepage)'

export default function Home() {
	return (
		<main className='flex min-h-screen w-full flex-col'>
			<div className='mx-auto max-w-7xl min-h-screen px-4 py-12'>
				<MainSection />
				<TechStackSection />
				<ProjectsSection />
			</div>
		</main>
	)
}
