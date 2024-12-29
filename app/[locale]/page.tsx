import { BackgroundBeams } from '@/components/ui/background-beams'
import { Container } from '@/components/layout/Container/container'
import {
	ContactSection,
	SectionExperience,
	SectionMain,
	SectionProjects,
	SectionTechStack
} from '@/components/homepage'

export default function Home() {
	return (
		<Container>
			<SectionMain id='main' />
			<SectionTechStack id='techstack' />
			<SectionProjects id='projects' />
			<SectionExperience id='experience' />
			{/* <ContactSection id='contact' /> */}
			<BackgroundBeams className='-z-10' />
		</Container>
	)
}
