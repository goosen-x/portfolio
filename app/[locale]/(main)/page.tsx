import { Container } from '@/components/layout/Container/container'
import { ScrollSpy } from '@/components/global/ScrollSpy'
import { AnimatedSection } from '@/components/global/AnimatedSection'
import {
	ContactSection,
	SectionExperience,
	SectionMain,
	SectionProjects,
	SectionTechStack,
	SectionBlog,
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
				
				<AnimatedSection delay={0.1} animation="scale">
					<SectionTechStack id='techstack' />
				</AnimatedSection>
				
				<AnimatedSection delay={0.15} animation="slide">
					<SectionProjects id='projects' />
				</AnimatedSection>
				
				<AnimatedSection delay={0.2} animation="blur">
					<SectionExperience id='experience' />
				</AnimatedSection>
				
				<AnimatedSection delay={0.25} animation="slide">
					<SectionBlog locale={params.locale} />
				</AnimatedSection>
				
				<AnimatedSection delay={0.3} animation="scale">
					<SectionContact id='contact' />
				</AnimatedSection>
				
				<BackgroundBeamsWrapper />
			</Container>
		</>
	)
}
