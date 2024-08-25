import { BackgroundBeams } from '@/components/ui/background-beams'
import {
	ExperienceSection,
	MainSection,
	ProjectsSection,
	TechStackSection
} from '@/components/homepage'
import FeaturesSectionDemo from '@/components/blocks/features-section-demo-3'

export default function Home() {
	return (
		<div className='flex min-h-screen w-full flex-col'>
			<BackgroundBeams className='-z-10' />
			<div className='mx-auto max-w-7xl min-h-screen px-4 py-12'>
				<MainSection id='main' />
				<TechStackSection id='tech' />
				<ProjectsSection id='projects' />
				<ExperienceSection id='experience' />
			</div>
		</div>
	)
}
