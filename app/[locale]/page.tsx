import { BackgroundBeams } from '@/components/ui/background-beams'
import { Container } from '@/components/layout/Container/container'
import {
	ContactSection,
	ExperienceSection,
	MainSection,
	ProjectsSection,
	TechStackSection
} from '@/components/homepage'

export default function Home() {
	return (
		<Container>
			<BackgroundBeams className='-z-10' />
			<MainSection id='main' />
			<TechStackSection id='techstack' />
			<ProjectsSection id='projects' />
			<ExperienceSection id='experience' />
			<ContactSection id='contact' />
		</Container>
	)
}
