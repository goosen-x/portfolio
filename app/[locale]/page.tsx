import { BackgroundBeams } from '@/components/ui/background-beams'
import { Container } from '@/components/layout/Container/container'
import {
	ContactSection,
	ExperienceSection,
	SectionMain,
	SectionProjects,
	SectionTechStack
} from '@/components/homepage'

export default function Home() {
	return (
		<Container>
			<BackgroundBeams className='-z-10' />
			<SectionMain id='main' />
			<SectionTechStack id='techstack' />
			<SectionProjects id='projects' />
			<ExperienceSection id='experience' />
			{/* <ContactSection id='contact' /> */}
		</Container>
	)
}
