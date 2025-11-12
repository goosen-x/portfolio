import { Container } from '@/components/layout/Container/container'
import { ScrollSpy } from '@/components/global/ScrollSpy'
import {
	ContactSection,
	SectionExperience,
	SectionMain,
	SectionProjects,
	SectionTechStack,
	SectionBlog,
	SectionSpeaking,
	SectionContact
} from '@/components/homepage'
import { BackgroundBeamsWrapper } from '@/components/global/BackgroundBeamsWrapper'

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
				<SectionSpeaking id='speaking' />
				<SectionTechStack id='techstack' />
				<SectionProjects id='projects' />
				<SectionExperience id='experience' />
				<SectionBlog locale={params.locale} />
				<SectionContact id='contact' />
				<BackgroundBeamsWrapper />
			</Container>
		</>
	)
}

// Enable ISR with 30 minutes revalidation for homepage
export const revalidate = 1800
