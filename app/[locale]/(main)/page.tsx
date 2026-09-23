import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
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
import { buildAlternates } from '@/lib/seo/alternates'

type Props = {
	params: Promise<{
		locale: string
	}>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { locale } = await params
	const t = await getTranslations({ locale, namespace: 'MetaData' })

	return {
		title: t('title'),
		description: t('description'),
		alternates: buildAlternates('', locale)
	}
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
