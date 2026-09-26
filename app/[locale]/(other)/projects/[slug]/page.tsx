import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ArrowUpRight, Globe, Github } from 'lucide-react'
import { ProjectNavigation } from '@/components/projects/ProjectNavigation'
import { CaseToc } from '@/components/projects/CaseToc'
import { ContactCta } from '@/components/contact/ContactCta'
import { ProjectTechnologies } from '@/components/projects/ProjectTechnologies'
import { ProjectGallery } from '@/components/projects/ProjectGallery'
import { CaseStudyArticle } from '@/components/projects/CaseStudyArticle'
import { caseStudies } from '@/lib/projects/case-studies'
import { ProjectLogo } from '@/components/projects/ProjectLogo'
import { ProjectsData } from '@/components/homepage/SectionProjects/constants'
import { buildAlternates } from '@/lib/seo/alternates'
import { SITE_URL } from '@/lib/constants/site'
import { getTranslations } from 'next-intl/server'

type Props = { params: Promise<{ locale: string; slug: string }> }

export function generateStaticParams() {
	return ['en', 'ru'].flatMap(locale => ProjectsData.map(project => ({ locale, slug: project.name })))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { locale, slug } = await params
	const project = ProjectsData.find(item => item.name === slug)
	if (!project) return {}
	const t = await getTranslations({ locale, namespace: 'SectionProjects' })
	const title = `${t(`projects.${slug}.name`)} | Dmitry Borisenko`
	const description = caseStudies[slug]?.[locale === 'ru' ? 'ru' : 'en']?.subtitle ?? t(`projects.${slug}.company`)
	return {
		title, description, alternates: buildAlternates(`/projects/${slug}`, locale),
		openGraph: { title, description, url: `${SITE_URL}/${locale}/projects/${slug}`, images: [{ url: project.image, alt: t(`projects.${slug}.name`) }] }
	}
}

export default async function ProjectPage({ params }: Props) {
	const { locale, slug } = await params
	const project = ProjectsData.find(item => item.name === slug)
	if (!project) notFound()
	const [t, page] = await Promise.all([
		getTranslations({ locale, namespace: 'SectionProjects' }),
		getTranslations({ locale, namespace: 'ProjectPages' })
	])
	const name = t(`projects.${slug}.name`)
	const index = ProjectsData.indexOf(project)
	const prevProject = ProjectsData[(index - 1 + ProjectsData.length) % ProjectsData.length]
	const nextProject = ProjectsData[(index + 1) % ProjectsData.length]
	const study = caseStudies[slug]?.[locale === 'ru' ? 'ru' : 'en']
	return <main className='mx-auto max-w-7xl px-5 py-12'>
		<article>
			<header className='mb-10 max-w-4xl'>
				<p className='mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary'>{page('case')}</p>
				<div className='mb-5 flex items-center gap-4 sm:gap-5'>
					<ProjectLogo src={project.logo} alt={`${name} logo`} size='lg' />
					<h1 className='min-w-0 break-words text-3xl font-bold sm:text-6xl'>{name}</h1>
				</div>
				<p className='text-xl leading-relaxed text-muted-foreground'>{study ? study.subtitle : t(`projects.${slug}.company`)}</p>
			</header>
			<ProjectGallery images={project.screenshots} title={name} screenshotLabel={page('screenshot')} />
			<div className='mt-12 grid gap-10 border-t pt-10 lg:grid-cols-[minmax(0,2fr)_minmax(16rem,1fr)]'>
				<div className='min-w-0 space-y-10'>
					<ProjectTechnologies technologies={project.techs} title={page('stack')} />
					<section>{study ? <CaseStudyArticle study={study} beforeLabel={page('before')} afterLabel={page('after')} /> : <><h2 className='mb-5 text-2xl font-bold'>{page('work')}</h2><p className='max-w-3xl whitespace-pre-line text-lg leading-relaxed text-muted-foreground'>{t(`projects.${slug}.description`)}</p></>}</section>
				</div>
				<aside className='space-y-8 lg:sticky lg:top-24 lg:self-start'>
					{study && <CaseToc title={page('contents')} items={study.sections.map(({ id, heading }) => ({ id, heading }))} />}
					<div className='flex flex-wrap gap-4'>
						{project.link && <a href={project.link} target='_blank' rel='noopener noreferrer' className='inline-flex cursor-pointer items-center gap-1 text-primary hover:underline'><Globe aria-hidden className='size-4 shrink-0' />{slug === 'komponenta' ? page('companyWebsite') : page('website')}<ArrowUpRight className='size-4' /></a>}
						{project.github && <a href={project.github} target='_blank' rel='noopener noreferrer' className='inline-flex cursor-pointer items-center gap-1 text-primary hover:underline'><Github aria-hidden className='size-4 shrink-0' />GitHub<ArrowUpRight className='size-4' /></a>}
					</div>
					<ProjectNavigation
						previous={{ href: `/${locale}/projects/${prevProject.name}`, title: t(`projects.${prevProject.name}.name`), logo: prevProject.logo }}
						next={{ href: `/${locale}/projects/${nextProject.name}`, title: t(`projects.${nextProject.name}.name`), logo: nextProject.logo }}
						allHref={`/${locale}/projects`}
						labels={{ previous: page('prev'), next: page('next'), all: page('all') }}
					/>
				</aside>
			</div>
			<div className='mt-16'>
				<ContactCta title={page('ctaTitle')} text={page('ctaText')} />
			</div>
		</article>
	</main>
}
