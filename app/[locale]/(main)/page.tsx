import { BackgroundBeams } from '@/components/ui/background-beams'
import { Container } from '@/components/layout/Container/container'
import { ScrollSpy } from '@/components/global/ScrollSpy'
import {
	ContactSection,
	SectionExperience,
	SectionMain,
	SectionProjects,
	SectionTechStack,
	SectionBlog
} from '@/components/homepage'

type Props = {
	params: Promise<{
		locale: string
	}>
}

export default async function Home(props: Props) {
	const params = await props.params
	
	return (
		<>
			<ScrollSpy />
			<Container>
				<SectionMain id='main' />
				<SectionTechStack id='techstack' />
				<SectionProjects id='projects' />
				<SectionExperience id='experience' />
				<SectionBlog locale={params.locale} />
				{/* <ContactSection id='contact' /> */}
				<BackgroundBeams className='-z-10' />
			</Container>
		</>
	)
}
